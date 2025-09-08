// 矢印キーでタブ切り替え
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(e) {
        // 入力フィールドなどでタイピング中は無効
        if (e.target.tagName === 'INPUT' || 
            e.target.tagName === 'TEXTAREA' || 
            e.target.isContentEditable) {
            return;
        }
        
        // タブコンテンツを取得
        const tabs = document.querySelectorAll('.tabbed-set input[type="radio"]');
        if (tabs.length === 0) return;
        
        // 現在アクティブなタブを見つける
        let currentIndex = -1;
        tabs.forEach((tab, index) => {
            if (tab.checked) {
                currentIndex = index;
            }
        });
        
        // 左矢印キー: 前のタブへ
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            tabs[currentIndex - 1].click();
        }
        
        // 右矢印キー: 次のタブへ
        if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            e.preventDefault();
            tabs[currentIndex + 1].click();
        }
        
        // 1キー: 最初のタブ
        if (e.key === '1' && tabs.length > 0) {
            e.preventDefault();
            tabs[0].click();
        }
        
        // 2キー: 2番目のタブ
        if (e.key === '2' && tabs.length > 1) {
            e.preventDefault();
            tabs[1].click();
        }
    });
});