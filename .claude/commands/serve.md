ローカルプレビューサーバーを起動する。

1. `.venv` が存在しなければ `python3 -m venv .venv` で仮想環境を作成する
2. `.venv/bin/mkdocs` が存在しなければ `.venv/bin/pip install mkdocs-material mkdocs-glightbox` でインストールする
3. `.venv/bin/mkdocs serve` をバックグラウンドで実行する
4. ユーザーに http://127.0.0.1:8000/ を開くよう案内する
