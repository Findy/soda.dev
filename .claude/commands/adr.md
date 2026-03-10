会話の中で行われた意思決定を ADR（Architecture Decision Record）として記録する。

1. `docs/adr/` 内の既存ファイルを確認し、次の連番を決定する
2. MADR 形式で ADR ファイルを `docs/adr/{連番4桁}-{kebab-case-タイトル}.md` に作成する
3. 必須セクション: タイトル、メタデータ（status / date / decision-makers）、Context and Problem Statement、Decision Drivers、Considered Options、Decision Outcome、Consequences、Pros and Cons of the Options
4. 作成したファイルパスをユーザーに報告する

引数として意思決定の内容を受け取る。引数がない場合は、直近の会話から意思決定を抽出して記録する。
