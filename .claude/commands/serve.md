ローカルプレビューサーバーを起動する。

1. `.venv` が存在しなければ `python3 -m venv .venv` で仮想環境を作成する
2. `.venv/bin/mkdocs` が存在しなければ `.venv/bin/pip install mkdocs-material mkdocs-glightbox` でインストールする
3. 既存の mkdocs プロセスを停止する（`pkill -f 'mkdocs serve'`）。古いプロセスが残るとライブリロードが効かなくなるため、常に再起動する
4. `.venv/bin/mkdocs serve` をバックグラウンドで実行する
5. ユーザーに http://127.0.0.1:8000/ を開くよう案内する
6. ユーザーに「レイアウトテストを実行しますか？」と確認する。実行する場合は MCP Playwright で以下を検証する：
   - **デスクトップ幅（1400px）**: detail ページで `.md-sidebar--secondary` が `display: block`、`position: sticky`、高さ100px以上であること
   - **モバイル幅（800px）**: `.md-sidebar--secondary` が `display: none` であること
   - **スクロール追従（2000pxスクロール後）**: `.md-sidebar--secondary` がビューポート内に留まっていること
