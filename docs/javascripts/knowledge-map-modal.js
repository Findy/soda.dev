// SODA Knowledge Map モーダル機能
document.addEventListener('DOMContentLoaded', function() {
    // モーダルHTMLを動的に追加
    const modalHTML = `
        <div id="knowledge-map-modal" class="km-modal">
            <div class="km-modal-content">
                <span class="km-modal-close">&times;</span>
                <div id="km-modal-body" class="km-modal-body">
                    <p>読み込み中...</p>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('knowledge-map-modal');
    const modalBody = document.getElementById('km-modal-body');
    const closeBtn = document.querySelector('.km-modal-close');

    // モーダルを閉じる関数
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // モーダルを開く関数
    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // マークダウンをHTMLに変換する簡易関数
    function parseMarkdown(markdown) {
        let html = markdown;

        // 見出し
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // 太字
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // リスト
        html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
        html = html.replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>');

        // リストをul/olで囲む
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

        // 段落
        html = html.split('\n\n').map(para => {
            if (!para.match(/^<[h|u|o|l]/)) {
                return '<p>' + para + '</p>';
            }
            return para;
        }).join('\n');

        // 水平線
        html = html.replace(/^---$/gim, '<hr>');

        return html;
    }

    // HTMLページからコンテンツを読み込む関数
    async function loadMarkdown(filename) {
        try {
            const response = await fetch(`/soda-knowledge-map/${filename}/`);
            if (!response.ok) {
                throw new Error('ファイルの読み込みに失敗しました');
            }
            const html = await response.text();

            // HTMLをパースしてコンテンツ部分を抽出
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // MkDocsのメインコンテンツ部分を取得
            const content = doc.querySelector('.md-content__inner article') ||
                           doc.querySelector('article') ||
                           doc.querySelector('.md-content');

            if (content) {
                modalBody.innerHTML = content.innerHTML;

                // Learn moreボタンを追加
                const learnMoreButton = document.createElement('div');
                learnMoreButton.className = 'km-learn-more-container';
                // -modalを-detailに置き換え
                const detailPath = filename.replace('-modal', '-detail');
                const detailUrl = `/soda-knowledge-map/${detailPath}/`;
                learnMoreButton.innerHTML = `
                    <a href="${detailUrl}" class="km-learn-more-btn">
                        Learn more
                    </a>
                `;
                modalBody.appendChild(learnMoreButton);

                // Learn moreボタンのクリックイベント
                const learnMoreLink = learnMoreButton.querySelector('.km-learn-more-btn');
                learnMoreLink.addEventListener('click', function(e) {
                    // モーダルを閉じる
                    closeModal();
                    // ページ遷移は<a>タグのデフォルト動作で行われる
                });
            } else {
                throw new Error('コンテンツが見つかりませんでした');
            }
        } catch (error) {
            modalBody.innerHTML = `
                <p style="color: #d32f2f;">エラー: ${error.message}</p>
                <p>ファイルパス: /soda-knowledge-map/${filename}/</p>
            `;
        }
    }

    // SVG object内の要素にクリックイベントを追加
    function attachClickHandlers(svgDoc) {
        // モーダル対象のID一覧（子要素を先に登録し、親は最後）
        var targets = [
            // Instrument Flight System
            'ifs-playbook',
            'ifs-evidence-viewer',
            'ifs-project-value',
            'ifs-outcome-delivery',
            'ifs-quality-value',
            'ifs-team-performance',
            'instrument-flight-system',
            // Product Core
            'pc-mission-purpose',
            'pc-vision',
            'pc-value',
            'product-core',
            // Product Quality Management
            'pqm-qa2aq',
            'pqm-square',
            'pqm-kano-model',
            'pqm-software-engineering',
            'product-quality-management',
            // Product Management
            'pdm-business-strategy',
            'pdm-userstory-mapping',
            'pdm-mobius-outcome-delivery',
            'pdm-ux',
            'pdm-product-development-team',
            'pdm-golden-circle',
            'pdm-biz-continuity',
            'pdm-qcds',
            'pdm-outcome',
            'product-management',
            // Software Process
            'sp-aidlc',
            'sp-devops',
            'sp-agiletesting',
            'sp-agile',
            'software-process',
            // Project Management
            'pjm-prince2',
            'pjm-pmbok',
            'project-management',
            // Team Management
            'tm-team-topology',
            'tm-devex',
            'team-management',
            // Product Business Management
            'pbm-management',
            'pbm-org-development',
            'pbm-hr-management',
            'pbm-goal-management',
            'pbm-tqm',
            'product-business-management',
            // Process Improvement Management
            'pim-dora-model',
            'pim-cmmi',
            'pim-management30',
            'pim-ebm',
            'pim-value-stream-mapping',
            'process-improvement-management',
            // Innovation Model
            'im-seci-spiral',
            'im-scrum',
            'innovation-model',
        ];

        targets.forEach(function(id) {
            var element = svgDoc.getElementById(id);
            if (element) {
                element.style.cursor = 'pointer';
                element.addEventListener('click', function(e) {
                    e.stopPropagation();
                    openModal();
                    loadMarkdown(id + '-modal');
                });
            }
            // _2 重複要素（SVGエクスポート時の複製）にも同じハンドラーを設定
            var element2 = svgDoc.getElementById(id + '_2');
            if (element2) {
                element2.style.cursor = 'pointer';
                element2.addEventListener('click', function(e) {
                    e.stopPropagation();
                    openModal();
                    loadMarkdown(id + '-modal');
                });
            }
        });
    }

    // SVG objectの読み込み完了時にイベントを設定
    function initSvgObject() {
        const svgObject = document.getElementById('knowledge-map-svg');
        if (svgObject) {
            svgObject.addEventListener('load', function() {
                const svgDoc = svgObject.contentDocument;
                if (svgDoc) {
                    attachClickHandlers(svgDoc);
                }
            });
            // すでに読み込み済みの場合
            if (svgObject.contentDocument && svgObject.contentDocument.rootElement) {
                attachClickHandlers(svgObject.contentDocument);
            }
        }
    }

    initSvgObject();

    // ブラウザの戻る/進むで再初期化
    window.addEventListener('popstate', function() {
        setTimeout(initSvgObject, 200);
    });

    // MkDocs Material instant navigation対応
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function() {
            setTimeout(initSvgObject, 200);
        });
    }

    // タブ切り替えを監視
    const tabInputs = document.querySelectorAll('.tabbed-set input[type="radio"]');
    tabInputs.forEach(input => {
        input.addEventListener('change', function() {
            // タブが切り替わった後、少し待ってからハンドラーを再設定
            setTimeout(initSvgObject, 100);
        });
    });

    // 閉じるボタンのクリックイベント
    closeBtn.addEventListener('click', closeModal);

    // モーダル背景のクリックで閉じる
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});
