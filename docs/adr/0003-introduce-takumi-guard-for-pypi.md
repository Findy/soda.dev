# ADR-0003: PyPI 依存取得に Takumi Guard を導入する

- **status:** accepted
- **date:** 2026-05-22
- **decision-makers:** SODA.dev maintainers

## Context and Problem Statement

SODA.dev はローカル開発と GitHub Actions の両方で `pip install` による依存取得を実行している。公開レジストリから直接パッケージを取得する構成では、悪性パッケージ混入時の影響を受ける可能性がある。依存取得時点でのブロックを導入し、サプライチェーン攻撃のリスクを下げる必要がある。

## Decision Drivers

- 既存の開発フロー（pip + MkDocs）を大きく変えないこと
- CI に長期シークレットを持ち込まずに導入できること
- 導入コストが低く、段階的に運用できること
- ローカル開発と CI の両方で一貫した保護を適用できること

## Considered Options

1. **Takumi Guard（PyPI）を導入する**
2. **公開 PyPI をそのまま利用し続ける**
3. **社内ミラーを別途構築して運用する**

## Decision Outcome

**Option 1: Takumi Guard（PyPI）を導入する** を選択した。

CI では `flatt-security/setup-takumi-guard-pypi` Action を利用し、`secrets.TAKUMI_GUARD_BOT_ID` を渡して組織連携モードで運用する。Secret の取得に失敗した場合は匿名モードへフォールバックして継続する。

ローカル開発については、各開発者の環境で以下の設定を推奨する。

```bash
pip config set global.index-url https://pypi.flatt.tech/simple/
```

### Consequences

**良い点:**

- GitHub Actions の `pip install` が Takumi Guard 経由になり、悪性パッケージを事前にブロックできる
- Bot ID を使って組織単位の追跡・通知に拡張できる
- 既存の build コマンドやロック戦略を変更せずに導入できる
- 将来的に Bot ID を付与するだけで組織連携に拡張できる

**悪い点:**

- `TAKUMI_GUARD_BOT_ID` シークレットの管理が必要になる（未設定・取得失敗時は匿名モードで継続）
- 外部サービス障害やレート制限の影響を受ける可能性がある
- 開発者ローカル環境は各自設定が必要で、導入状況にばらつきが出る

## Pros and Cons of the Options

### Option 2: 公開 PyPI をそのまま利用し続ける

- Good: 設定変更が不要
- Good: 外部プロキシ依存が増えない
- Bad: 悪性パッケージの事前ブロックができない
- Bad: サプライチェーン防御を CI に組み込めない

### Option 3: 社内ミラーを別途構築して運用する

- Good: レジストリ制御を社内ポリシーに合わせやすい
- Good: ネットワーク・可用性を独自設計できる
- Bad: 構築・運用コストが高い
- Bad: SODA.dev の規模に対して過剰な運用負荷になりやすい
