# DORA Core Model

## 概要

DORA Core Model は、DORA（DevOps Research and Assessment）が2014年から継続する学術的研究を通じて、繰り返し実証された知見だけを体系化した予測モデルです。**ケイパビリティ（Capabilities）、パフォーマンス（Performance）、アウトカム（Outcomes）** の3つの要素で構成され、働き方がソフトウェアデリバリーパフォーマンスを経由して組織目標や個人のウェルビーイングへとつながる予測経路（predictive pathways）が示されています。

このモデルの最大の価値は、ソフトウェアデリバリーの改善において「何に投資すべきか」を、データに基づいて判断できる点にあります。経験や勘に頼るのではなく、10年以上・39,000人超の調査データから統計的に有意と確認された予測関係をもとに、改善の優先順位を決められます。

モデルの特徴は「保守的な進化」にあります。毎年の研究レポートで発見された新たな知見をそのまま取り込むのではなく、複数年にわたって再現性が確認され、実務者によって実際に活用された知見だけを Core Model に反映します。

---

## モデルの構造と構成要素

### 予測経路（Predictive Pathways）

DORA Core Model は、行動科学の手法を用いて「働き方（ways of working）」が「ソフトウェアデリバリーパフォーマンス（software delivery performance）」を経由して「組織目標と個人のウェルビーイング（organizational goals and individual well-being）」へとつながる予測経路を明らかにしています。

```
ケイパビリティ（Capabilities）
    ↓ predicts
パフォーマンス（Performance）
    ↓ predicts
アウトカム（Outcomes）
```

この予測経路は「ケイパビリティに投資しているチームほど、パフォーマンスが高く、アウトカムも良好である」という関係を示しています。DORA の研究は科学的な統計手法に基づいて有意性を検証しており、各要素間の関係は統計的に有意な予測関係として確認されています。この予測関係が10年以上にわたって一貫して再現されていることが、モデルの信頼性を支えています。

### ケイパビリティ（Capabilities）

ケイパビリティは、ソフトウェアデリバリーにおける「働き方」を表します。DORA Core Model v2.1.0 では、次の3グループに整理されています。

#### Climate for learning

学習と改善を促進する組織・チームの文化的基盤です。

| ケイパビリティ | 概要 |
|---|---|
| Code maintainability | コードベースを理解しやすく、変更しやすい状態に保つ |
| Documentation quality | 正確で最新のドキュメントを維持する |
| Empowering teams to choose tools | チームが自分たちの仕事に最適なツールを選べる |
| Generative culture | 情報が流通し、失敗から学び、新しいことに挑戦できる文化 |

#### Fast flow

変更を素早く安全に本番環境へ届けるためのプラクティスです。

| ケイパビリティ | 概要 |
|---|---|
| Continuous delivery | コードが常にリリース可能な状態にある |
| Database change management | データベースの変更をバージョン管理し、自動適用する |
| Deployment automation | デプロイプロセスを自動化し、手作業を排除する |
| Flexible infrastructure | インフラをオンデマンドでプロビジョニング・変更できる |
| Loosely coupled teams | チーム間の依存関係を減らし、独立してデリバリーできる |
| Streamlining change approval | 変更承認プロセスを軽量かつ効果的にする |
| Version control | すべての成果物をバージョン管理下に置く |
| Working in small batches | 作業を小さな単位に分割して頻繁にリリースする |

#### Fast feedback

フィードバックループを短くし、問題の早期発見と改善を促すプラクティスです。

| ケイパビリティ | 概要 |
|---|---|
| Continuous integration | 変更を頻繁に統合し、自動ビルド・テストを実行する |
| Monitoring and observability | システムの内部状態を外部から観測可能にする |
| Reliability engineering | 信頼性をエンジニアリングの対象として設計・運用する |
| Pervasive security | 開発ライフサイクル全体にセキュリティを統合する |
| Test automation | 自動テストによって品質を継続的に検証する |
| Test data management | テストに必要なデータを適切に管理する |

### パフォーマンス（Performance）

パフォーマンスは2つの領域で測定されます。

#### Software delivery

Four key metrics で測定されるソフトウェアデリバリーの速度と安定性です。

| 指標 | 定義 |
|---|---|
| **Change lead time** | コードがバージョン管理にコミットされてから本番環境にデプロイされるまでの時間 |
| **Deployment frequency** | 一定期間内のデプロイ回数、またはデプロイ間隔 |
| **Change fail percentage** | デプロイのうち、即座に対応（ロールバックやホットフィックス）が必要になった割合 |
| **Failed deployment recovery time** | 失敗したデプロイから復旧するまでに要した時間 |

!!! info "速度と安定性はトレードオフではない"
    DORA の研究で繰り返し実証されている重要な知見のひとつは、**速度と安定性はトレードオフの関係にない**ということです。高パフォーマンスチームは、すべての指標で優れた成績を示します。「速くリリースすると品質が下がる」という直感に反して、頻繁にデリバリーするチームほど安定性も高い傾向にあります。

#### Reliability

Service Level Objectives（SLOs）で測定される運用信頼性です。

| 指標 | 定義 |
|---|---|
| **Measurement coverage** | SLO によってカバーされているサービスの範囲 |
| **Measurement focus** | SLO がユーザー体験を適切に反映しているかの度合い |
| **Target optimization** | SLO のターゲットが適切に最適化されているか |
| **Target compliance** | SLO のターゲットが達成されているかの準拠度 |

### アウトカム（Outcomes）

アウトカムは、パフォーマンスが最終的にもたらす組織的・個人的な成果を表します。DORA Core Model v2.1.0 では以下の2グループが示されています。

#### Organizational performance

| アウトカム | 概要 |
|---|---|
| Commercial performance | 収益性、市場シェアなど商業的な成果 |
| Non-commercial performance | 顧客満足度、品質、ミッション達成度など非商業的な成果 |

#### Well-being

| アウトカム | 概要 |
|---|---|
| Job satisfaction | 仕事にやりがいを感じている度合い |
| Productivity | チームや個人の生産性 |
| Reduced burnout | 燃え尽き症候群の低減 |
| Reduced rework | 手戻り作業の削減 |

---

## 実践への適用

DORA Core Model の価値は、モデルを「知っている」ことではなく、日々の改善活動に「使う」ことで発揮されます。ここでは、モデルを実務に適用する具体的な方法を説明します。

### 現状把握：Quick Check によるセルフアセスメント

DORA は [Quick Check](https://dora.dev/quickcheck/) というセルフアセスメントツールを提供しています。4つの設問に回答するだけで、自チームのソフトウェアデリバリーパフォーマンスを業界全体と比較できます。Quick Check は個人情報を保存せず、チームが安心して繰り返し利用できる設計になっています。

Quick Check の結果は、改善の出発点として活用できます。自チームのパフォーマンスが業界のどの位置にあるかを把握した上で、どのケイパビリティに注力すべきかを Core Model から読み取ります。

### 改善の優先順位づけ：ケイパビリティの選択

Core Model は、20以上のケイパビリティとパフォーマンス指標の間の予測関係を示しています。すべてのケイパビリティを一度に改善することは現実的ではないため、モデルを使って投資対象を絞り込みます。

1. **パフォーマンス指標のボトルネックを特定する** — スループット（変更リードタイム、デプロイ頻度）と安定性（変更失敗率、復旧時間、手戻り率）のどこに課題があるかを把握する
2. **対応するケイパビリティを選択する** — Core Model のインタラクティブダイアグラムで、ボトルネックとなっている指標に強く関連するケイパビリティを特定する
3. **チーム主導で目標を設定する** — OKR などのフレームワークを使い、チーム自身が改善目標を設定する。DORA の研究では、トップダウンで設定された目標よりも、チームが自ら設定した目標のほうが改善効果が高いことが示されている

### 経営層との対話：共通言語としてのモデル

DORA Core Model は、エンジニアリングの改善活動をビジネスの言葉に翻訳する共通言語として機能します。

経営層に対して「CI/CD を改善したい」と伝えても、その投資がビジネスにどう寄与するかは伝わりにくいものです。Core Model を使えば、「継続的デリバリーというケイパビリティに投資することで、デプロイ頻度と変更リードタイムが改善され、それが組織パフォーマンスの向上を予測する」という、研究データに裏付けられたストーリーを提示できます。

### 継続的改善：PDCA サイクルとの統合

DORA の研究成果を組織変革に活かすガイドでは、改善を一度きりのプロジェクトではなく、継続的なプロセスとして位置づけることが推奨されています。チームは日々の実験を通じて PDCA（Plan-Do-Check-Act）サイクルを回し、パフォーマンス指標の変化を追跡しながら、ケイパビリティへの投資効果を定量的に検証します。

改善活動を組織全体に広げるには、Center of Excellence（集権型の専門組織）よりも Community of Practice（実践コミュニティ）のアプローチが有効であることも、2019年の研究で示されています。

---

## モデルの進化とコミュニティ

### コミュニティによる実践と還流

DORA の研究は、Google Cloud のグローバルな研究チームが主導していますが、モデルの発展は研究チームだけで完結するものではありません。

DORA は [DORA Community of Practice](https://dora.community/) を運営しており、実務者がモデルの適用事例や知見を共有する場を提供しています。また、DORA が公開しているガイドは「研究プロジェクトのメンバーと、実践コミュニティの仲間たち（friends from throughout our community of practice）」によって執筆されています。

年次レポートの基盤となる調査自体も、世界中の実務者がサーベイに参加することで成り立っています。39,000人超という調査規模は、コミュニティの広がりを反映したものです。実務者のサーベイ回答 → 研究チームによる統計分析 → 知見の公開 → 実務者による適用とフィードバック、というサイクルが、モデルの信頼性と実用性を支えています。

### モデルの拡張：近年の動向

Core Model は保守的に進化する設計ですが、ソフトウェアデリバリーの環境変化に応じてケイパビリティの追加・更新が行われています。近年の主な動向として：

- **2022年** — セキュリティプラクティスの最大の予測因子は技術的な施策ではなく、組織文化であることが示された
- **2023年** — ユーザー中心性（User-centricity）がパフォーマンスの40%向上を予測することが確認された
- **2024年** — プラットフォームエンジニアリングとユーザー中心性が成功を推進する要因として注目された。AI 関連のケイパビリティ（AI にアクセス可能な内部データ、明確な AI 方針など）が新たに追加された
- **2026年** — 年次レポートの名称が従来の「Accelerate State of DevOps Report」から「**State of AI-assisted Software Development**」に変更された。AI がソフトウェア開発に与える影響を中心テーマに据え、DORA AI Capabilities Model が新たに提示された。主要な知見として、AI は増幅器（amplifier）として機能し、最大のリターンは基盤となる社会技術システム（sociotechnical systems）への投資から得られることが示された

---

## 参考文献

- [DORA Core Model（公式）](https://dora.dev/core/) — DORA Core Model のインタラクティブダイアグラム
- [DORA Research Program](https://dora.dev/research/) — DORA の研究概要と年次レポートの一覧
- [DORA Capabilities Catalog](https://dora.dev/capabilities/) — ケイパビリティの一覧と各項目の詳細ガイド
- [DORA Quick Check](https://dora.dev/quickcheck/) — チームのパフォーマンスを簡易診断するセルフアセスメントツール
- [DORA Guides](https://dora.dev/guides/) — 実務者向けの実践ガイド集
- [DORA Community of Practice](https://dora.community/) — 実務者コミュニティ
- [DORA Metrics: Four Keys Guide](https://dora.dev/guides/dora-metrics-four-keys/) — パフォーマンス指標の定義と活用方法
- [Accelerate: The Science of Lean Software and DevOps](https://itrevolution.com/product/accelerate/) — DORA の研究を体系化した書籍（Nicole Forsgren, Jez Humble, Gene Kim 著）
