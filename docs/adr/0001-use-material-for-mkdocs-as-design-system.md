# ADR-0001: デザインシステムとして Material for MkDocs を採用する

- **status:** accepted
- **date:** 2026-03-01
- **decision-makers:** @norio.oikawa

## Context and Problem Statement

SODA.dev サイトのデザインを Material Design に準拠させたい。
Google が公開する [material-foundation/material-tokens](https://github.com/material-foundation/material-tokens) を直接導入する案と、既に採用済みの [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) を活用する案を検討した。

## Decision Drivers

- MkDocs との統合性
- 導入・メンテナンスコスト
- 提供される機能の豊富さ
- Material Design への準拠度

## Considered Options

1. **Material for MkDocs を継続採用し、カラーパレットを M3 に寄せる**
2. **Google material-tokens を直接導入する**
3. **MkDocs 素のデフォルトテーマを使う**

## Decision Outcome

**Option 1: Material for MkDocs を継続採用** を選択した。

Google material-tokens は CSS 変数の定義（デザイントークン）のみを提供するため、MkDocs と組み合わせるにはコンポーネント実装やテーマ統合をすべて自前で行う必要がある。一方、Material for MkDocs は MkDocs にネイティブ統合されたテーマであり、両者は提供レイヤーが異なり共存させるメリットが薄い。

### Consequences

**良い点:**

- MkDocs とネイティブ統合されており、`mkdocs.yml` の設定だけで機能が有効化できる
- Admonitions、Content tabs、Mermaid diagrams、コードブロック注釈など豊富な拡張記法が使える
- 日本語対応の全文検索が組み込みで利用できる
- ダーク/ライトモード切替が組み込みで対応している
- 多言語対応（i18n）が組み込みで利用できる
- 活発にメンテナンスされている（月次リリース、GitHub Stars 22k+）
- レスポンシブ対応・アクセシビリティ・ブラウザ互換性が担保されている

**悪い点:**

- M2 ベースのデザインであり、M3 に完全準拠ではない（カスタマイズで近づけることは可能）

## Pros and Cons of the Options

### Option 2: Google material-tokens を直接導入する

- Good: M3 に完全準拠したデザイントークンが使える
- Bad: CSS 変数の定義のみで、UIコンポーネントは含まれない
- Bad: MkDocs との統合が一切ないため、テーマ・レイアウトを自前で実装する必要がある
- Bad: Material for MkDocs と CSS 変数プレフィックス `--md-` が共通しており、共存させると二重管理になる
- Bad: 検索、ナビゲーション、レスポンシブ対応等をすべて自前で構築する必要がある

### Option 3: MkDocs 素のデフォルトテーマを使う

- Good: 依存が最小限
- Bad: 最小限のデザインのみで、Material Design の要素がない
- Bad: 検索・ダークモード・拡張記法などの機能が不足する

## More Information

- [Material for MkDocs 公式ドキュメント](https://squidfunk.github.io/mkdocs-material/)
- [Material Design Tokens 概要](https://m3.material.io/foundations/design-tokens/overview)
- [material-foundation/material-tokens リポジトリ](https://github.com/material-foundation/material-tokens)

| | MkDocs (素) | Material for MkDocs | Google material-tokens |
|---|---|---|---|
| 提供するもの | 静的サイト生成エンジン | テーマ全体（UI + 機能） | CSS変数の定義のみ |
| 導入コスト | `pip install mkdocs` | `pip install mkdocs-material` | 自前でコンポーネント実装が必要 |
| MkDocs統合 | コア | ネイティブ（プラグイン） | なし |
| テーマ/デザイン | 最小限のデフォルトテーマ | リッチなUIコンポーネント群 | デザイントークンのみ |
| 検索 | 基本的な検索 | 日本語対応の高機能検索 | なし |
| ダークモード | なし | 組み込み対応 | light/dark トークン定義あり |
| Admonitions/Tabs等 | 非対応 or 限定的 | 豊富な拡張記法 | なし |
| M3準拠度 | なし | M2ベース（カスタマイズ可） | M3準拠 |
| メンテナンス | Python公式 | 活発（月次リリース） | 低頻度 |
