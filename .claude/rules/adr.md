# ADR（Architecture Decision Record）規則

## 自動作成ルール

会話の中で以下に該当する技術的な意思決定が行われた場合、MADR 形式の ADR を `docs/adr/` に自動的に作成すること。

### ADR 作成の対象

- **ツール・ライブラリの選定** — 採用/不採用の決定（例: MkDocs vs Hugo、venv vs pipx）
- **アーキテクチャの方針変更** — 設計パターン、システム構成の変更
- **開発フローの決定** — CI/CD、ブランチ戦略、デプロイ方式の変更

### ADR 作成の対象外

- 軽微なコード修正（バグ修正、リファクタリング）
- 一時的な作業手順の確認
- 既存の ADR で決定済みの事項

## ファイル命名

- `docs/adr/{連番4桁}-{kebab-case-タイトル}.md`（例: `0003-use-docker-for-ci.md`）
- 連番は `docs/adr/` 内の既存ファイルの最大番号 + 1 とする

## テンプレート構成

以下のセクションを含めること:

1. **タイトル** — `# ADR-{番号}: {決定内容}`
2. **メタデータ** — status（accepted）、date、decision-makers
3. **Context and Problem Statement** — なぜこの決定が必要か
4. **Decision Drivers** — 決定に影響した要因
5. **Considered Options** — 検討した選択肢（最低2つ）
6. **Decision Outcome** — 選択した結果と理由
7. **Consequences** — 良い点・悪い点
8. **Pros and Cons of the Options** — 各選択肢の詳細比較

## 参考

- [MADR](https://adr.github.io/madr/)
