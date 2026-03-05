# ADR-0002: ローカル開発環境に venv を採用する

- **status:** accepted
- **date:** 2026-03-01
- **decision-makers:** @norio.oikawa

## Context and Problem Statement

MkDocs をローカルで実行してプレビューするために Python パッケージのインストールが必要だが、Homebrew 管理の Python はグローバルへの `pip install` をブロックする（PEP 668）。パッケージの管理方法を決める必要がある。

## Decision Drivers

- 関係者が簡単にローカルプレビューを実行できること
- プロジェクトごとにパッケージバージョンを管理できること
- 追加ツールのインストールが最小限であること

## Considered Options

1. **venv（Python 標準の仮想環境）**
2. **pipx（CLIツール向けグローバルインストール）**
3. **`pip install --user`（ユーザー領域へのインストール）**
4. **Docker（コンテナ内で実行）**

## Decision Outcome

**Option 1: venv** を選択した。

Python 標準ライブラリに含まれており追加インストール不要で、プロジェクトごとにパッケージバージョンを分離できる。

### Consequences

**良い点:**

- Python 標準機能のため追加ツールのインストールが不要
- プロジェクトごとにバージョンを分離でき、他プロジェクトに影響しない
- `.venv/` をプロジェクト内に配置するため、依存関係が明確
- CI/CD（GitHub Actions）でも同様の手順で再現可能

**悪い点:**

- `source .venv/bin/activate` を毎回実行する必要がある（Claude Code のスキル `/serve` で軽減）

## Pros and Cons of the Options

### Option 2: pipx

- Good: 一度インストールすれば `activate` 不要でどこでも `mkdocs` が使える
- Bad: 複数プロジェクトでバージョンを分けられない
- Bad: `brew install pipx` の追加インストールが必要

### Option 3: `pip install --user`

- Good: 仮想環境の作成が不要
- Bad: Homebrew の Python で非推奨とされている
- Bad: バージョン分離ができない

### Option 4: Docker

- Good: Python のインストール自体が不要
- Bad: Docker のインストール・起動が必要で導入ハードルが高い
- Bad: プロジェクトの技術スタックに不要な複雑性を持ち込む

## More Information

- [PEP 668 – Marking Python base environments as "externally managed"](https://peps.python.org/pep-0668/)
- Claude Code スキル `/serve` でセットアップとサーバー起動を自動化済み
