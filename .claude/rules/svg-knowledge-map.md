# SVG ナレッジマップ規則

## ID属性のプレフィックス規則

SVG内のID属性はFigmaで管理されており、レイヤー名として埋め込まれている。

- `ifs-*` : Instrument Flight System
- `pc-*` : Product Core
- `pqm-*` : Product Quality Management
- `pdm-*` : Product Management
- `sp-*` : Software Process
- `pjm-*` : Project Management
- `tm-*` : Team Management
- `pbm-*` : Product Business Management
- `pim-*` : Process Improvement Management
- `im-*` : Innovation Model

## ファイル構成ルール

`docs/soda-knowledge-map/{topic}/` 配下に、各ID属性に対応するファイルをペアで作成する:

- `{id}-summary.md` — サマリー（モーダルで表示される概要）
- `{id}-detail.md` — 詳細ページ（「Learn more」で遷移する先）
