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

    // SVG要素にクリックイベントを追加
    function attachClickHandlers() {
        // Mission / Purpose要素
        const missionPurposeElement = document.getElementById('mission-purpose');
        if (missionPurposeElement) {
            missionPurposeElement.style.cursor = 'pointer';
            missionPurposeElement.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openModal();
                loadMarkdown('mission-purpose-modal');
            });
        }
    }

    // ページ読み込み時とタブ切り替え時にイベントを設定
    attachClickHandlers();

    // タブ切り替えを監視
    const tabInputs = document.querySelectorAll('.tabbed-set input[type="radio"]');
    tabInputs.forEach(input => {
        input.addEventListener('change', function() {
            // タブが切り替わった後、少し待ってからハンドラーを再設定
            setTimeout(attachClickHandlers, 100);
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
