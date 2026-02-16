# SODA.dev

## プロジェクト概要

SODA（Software Outcome Delivery Architecture）フレームワークに関するオープンナレッジを公開する静的サイト。
ソフトウェア開発を「成果を継続的に届ける構造」として捉え、経営・マネージャー・エンジニアの間で共通理解を形成するためのフレームワークを解説する。

- 公開URL: https://findy.github.io/soda.dev/
- リポジトリ: GitHub - findy/soda.dev
- ライセンス: CC BY-SA 4.0

## 技術スタック

- **静的サイトジェネレーター:** MkDocs + Material for MkDocs
- **言語:** Markdown, JavaScript, CSS, YAML
- **プラグイン:** mkdocs-glightbox（画像ライトボックス）
- **ホスティング:** GitHub Pages（GitHub Actions で自動デプロイ）
- **インタラクティブ要素:** SVG ナレッジマップ + JavaScript モーダル

## ビルド・デプロイ

### ローカル開発

```bash
pip install mkdocs-material mkdocs-glightbox
mkdocs serve          # ローカルプレビュー（http://127.0.0.1:8000）
mkdocs build          # サイトビルド（出力先: site/）
```

### CI/CD

- `main` ブランチへの push で GitHub Actions が自動実行
- ワークフロー: `.github/workflows/pages.yml`
- ビルドコマンド: `mkdocs build --site-dir site`
- デプロイ先: GitHub Pages

## ディレクトリ構成

```
.
├── mkdocs.yml                    # MkDocs 設定ファイル
├── docs/                         # ドキュメントソース
│   ├── index.md                  # ランディングページ
│   ├── changelog.md              # 変更履歴
│   ├── assets/                   # ファビコン、ロゴ
│   ├── images/                   # SVG 図解
│   │   ├── SODA/                 # SODA循環モデル
│   │   └── SODA_prototype/       # ナレッジマップ
│   ├── javascripts/              # カスタム JS
│   │   ├── knowledge-map-modal.js  # モーダル機能
│   │   └── navigation.js          # タブキーボード操作
│   ├── stylesheets/              # カスタム CSS
│   │   └── extra.css
│   └── soda-knowledge-map/       # ナレッジマップ各トピック
│       └── {topic}/
│           ├── *-summary.md      # サマリー（概要）
│           └── *-detail.md       # 詳細ページ
└── .github/workflows/pages.yml   # CI/CD
```

## やってほしいこと

- パス指定は相対パスを使う（ローカルと GitHub Pages 両対応のため）
- 新しいトピック追加時は `-summary.md` と `-detail.md` のペアで作成する
- Material for MkDocs の機能（admonition, tabs, superfences 等）を活用する
- 日本語で作業する（コミットメッセージ、ドキュメント、コメント）
- ファイル名やコード内容について言及する際は、推測せず必ず実際のファイルを確認してから発言する

## やってほしくないこと

- 絶対パス（`/soda.dev/...`）を使わない — GitHub Pages と ローカルで齟齬が生じる
- `site/` ディレクトリをコミットしない（.gitignore 済み）
- 既存の SVG ファイル名やトピックのプレフィックス規則を変更しない
- npm や他のパッケージマネージャーを導入しない（Python/pip + MkDocs で完結）
