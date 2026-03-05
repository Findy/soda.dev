# ADR-0003: MkDocs 1.x を維持し、MkDocs 2.0 の正式リリースを待つ

- **status:** accepted
- **date:** 2026-03-05
- **decision-makers:** norio.oikawa

## Context and Problem Statement

`mkdocs serve` 実行時に「MkDocs 2.0 is incompatible with Material for MkDocs」の警告が表示されるようになった。MkDocs 1.x は18ヶ月以上リリースがなく事実上メンテナンスされていない。Material for MkDocs はメンテナンスモードに移行し、2026年11月でセキュリティ修正も終了する。MkDocs 2.0 は2026年3月にアナウンスされたが、まだ正式リリースされていない。

今後の対応方針を決定する必要がある。

## Decision Drivers

- 現状の soda.dev が問題なく動作している
- 移行にはコストとリスクが伴う
- 安定した正式リリース版を使いたい
- 不要な依存関係やリスクを増やしたくない

## Considered Options

1. **MkDocs 1.x を維持し、変更を入れない**
2. **Zensical に移行する**
3. **MkDocs 2.0 のプレリリース版に移行する**

## Decision Outcome

**選択肢 1: MkDocs 1.x を維持し、変更を入れない。** MkDocs 2.0 が正式リリースされた時点で再度調査し、問題なさそうなら移行する。

### 各ツールの評価

- **MkDocs 1.x** — メンテナンスされていないが、現状動作している。変更を入れない
- **Material for MkDocs** — メンテナンス停止が宣言されている。今後の投資はしない
- **Zensical** — Material for MkDocs の作者が開発しているが、作者と GitHub との関係性に懸念がある。採用しない
- **MkDocs 2.0** — アナウンスされたが正式リリースされていない。正式リリース後に再調査する

## Consequences

### 良い点

- 移行作業が不要で、現状の開発に集中できる
- 不安定なツールへの依存を避けられる
- MkDocs 2.0 の正式リリースを見てから判断できる

### 悪い点

- MkDocs 1.x のセキュリティ修正は期待できない
- Material for MkDocs のセキュリティ修正は2026年11月で終了する
- 将来的な移行が必要になる可能性がある

## Pros and Cons of the Options

### 選択肢 1: MkDocs 1.x を維持し、変更を入れない

- 良い点: 移行コストゼロ
- 良い点: 現状の構成がそのまま動作する
- 良い点: 正式リリースを待って判断できる
- 悪い点: メンテナンスされていないツールを使い続ける
- 悪い点: セキュリティリスクが徐々に高まる

### 選択肢 2: Zensical に移行する

- 良い点: `mkdocs.yml` の後方互換性がある
- 良い点: Material for MkDocs の機能を引き継いでいる
- 悪い点: アルファ版（0.0.24）で安定性に懸念
- 悪い点: 作者と GitHub との関係性に懸念がある
- 悪い点: glightbox 等の一部機能が未対応

### 選択肢 3: MkDocs 2.0 のプレリリース版に移行する

- 良い点: MkDocs の最新版を利用できる
- 悪い点: 正式リリースされていない
- 悪い点: Material for MkDocs が使用不可
- 悪い点: プラグインシステム廃止、YAML→TOML 移行が必要
- 悪い点: ライセンスが未指定

## 参考

- [What MkDocs 2.0 means for your documentation projects](https://squidfunk.github.io/mkdocs-material/blog/2026/02/18/mkdocs-2.0/)
- [MkDocs 2.0 Discussion](https://github.com/mkdocs/mkdocs/discussions/4077)
- [Material for MkDocs メンテナンスモード宣言](https://github.com/squidfunk/mkdocs-material/issues/8523)
- [Zensical GitHub](https://github.com/zensical/zensical)
- [GitHub Issue #15: 調査: MkDocs 2.0 互換性問題](https://github.com/Findy/soda.dev/issues/15)
