// detail ページで TOC サイドバーを表示するための body クラス付与
(function () {
  function applyDetailClass() {
    if (window.location.pathname.includes("-detail")) {
      document.body.classList.add("detail-page");
    } else {
      document.body.classList.remove("detail-page");
    }
  }

  // 初回読み込み
  applyDetailClass();

  // Material for MkDocs の instant navigation 対応
  // ページ遷移ごとに URL をチェックする複数の方法を併用
  document.addEventListener("DOMContentLoaded", applyDetailClass);

  // instant loading 完了時のイベント（Material for MkDocs が発火）
  document.addEventListener("contentUpdated", applyDetailClass);

  // location change を監視（title 変更 + URL 変更）
  var observer = new MutationObserver(applyDetailClass);
  var title = document.querySelector("title");
  if (title) {
    observer.observe(title, { childList: true });
  }

  // pushState / replaceState をフックして確実に検知
  var origPushState = history.pushState;
  var origReplaceState = history.replaceState;
  history.pushState = function () {
    origPushState.apply(this, arguments);
    applyDetailClass();
  };
  history.replaceState = function () {
    origReplaceState.apply(this, arguments);
    applyDetailClass();
  };
  window.addEventListener("popstate", applyDetailClass);
})();
