---
description: 'SODA記事の品質レビューを実行。risk-gate → lint-gate → self-review → fix-plan → 企画価値確認 → 俯瞰確認 を順に実行する。'
---

# SODA品質レビュー

このコマンドは次の7ステップを**必ず順番に**実行する。途中で止めず、最後に全体を通して一貫性のあることを確認する。
ステップをClaudeのTODOリストにして順に実行してください。

**ステップ概要:**
1. **Step 1: Risk Gate** - 致命傷チェック（炎上リスク・機微情報・技術/採用ブランディング）
2. **Step 1.5: Lint Gate** - 機械品質チェック（誤字脱字・表記ゆれ・空白・Markdown）
3. **Step 2: Self Review** - 品質チェック（3つの視点で3回チェック含む）
4. **Step 3: Fix Plan** - 改善計画（90点未満の場合）
5. **Step 4: 企画価値確認 + 俯瞰チェック** - issueとの整合性 + 記事全体の流れ・一貫性確認
6. **Step 5: フィードバック俯瞰確認** - 全体の一貫性・客観性確認（内部処理）
7. **Step 6: PRコメント投稿** - 合格時（90点以上）にPRへレビュー結果を投稿（確認あり）

## 使い方（任意）

- `/soda-review path/to/article.md`
- `/soda-review https://example.com/article`（外部URL）
- `/soda-review`（対象ファイル自動決定）
- モード指定（任意）
  - `--risk-only`：Risk Gate + Lint Gateのみ
  - `--self-only`：Self Reviewのみ（Risk Gate・Lint Gateは省略）
  - `--fix-only`：Fix Planのみ（採点はしない）
  - `--no-fix`：Fix Planを実行しない
  - `--force-fix`：90点以上でもFix Planを実行する

## 対象の決定

1. **外部URLが指定されている場合**: WebFetchツールでコンテンツを取得してレビュー対象とする
2. コマンド引数でファイルが指定されている場合: そのファイルを対象とする
3. ファイル指定がない場合: IDEで現在開いているファイルを対象とする（`draft_entries/*.md` のファイルであること）
4. IDEで開いているファイルもない場合: `draft_entries/` 配下の最新更新ファイル（`ls -lt` で先頭）を対象とする

---

## 固定ゲート（Step 0 / Step 1 / Step 1.5 / Step 4-1）

固定ゲートは `.claude/commands/references/deterministic.md` を唯一の正として実行する。

次のステップは deterministic.md に定義されている：
- **Step 0: 対象の確定**
- **Step 1: Risk Gate（致命傷チェック）**
- **Step 1.5: Lint Gate（機械品質チェック）**
- **Step 4-1: Issue整合性チェック**

---

## 裁量フェーズ（Step 2 / Step 3 / Step 4-2 / Step 5 / 全体サマリ / Step 6）

裁量フェーズは `.claude/commands/references/judgment.md` を参照して実行する。

次のステップは judgment.md に定義されている：
- **Step 2: Self Review（品質チェック）**
- **Step 3: Fix Plan（改善計画）**
- **テイスト一貫性チェック**
- **Step 4-2: 記事全体の俯瞰チェック**
- **Step 5: フィードバック俯瞰確認**
- **全体サマリ**
- **Step 6: PRコメント投稿（合格時のみ）**

---

## 参照ドキュメント

詳細なガイドラインは次を参照:
- `.github/instructions/tech-blog-guideline.instructions.md`
- `.claude/commands/references/deterministic.md`（固定ゲート）
- `.claude/commands/references/judgment.md`（裁量フェーズ）
