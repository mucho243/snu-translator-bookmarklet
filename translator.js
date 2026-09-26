/**
 * ServiceNow University 翻訳補助ブックマークレット
 * 指定されたSCORM用のiframeを検出し、そのコンテンツを新しいタブで直接開くことで
 * ブラウザの翻訳機能を最大限に活用できるようにします。
 */
(function() {
    // SCORM用iframeのセレクタ（特定クラスまたは一般的なiframe）
    const targetFrame = document.querySelector('iframe.scorm-iframe.is-visible') || document.querySelector('iframe.scorm-iframe');
    
    if (targetFrame && targetFrame.src) {
        // 見つかった場合は新しいタブで開く
        window.open(targetFrame.src, '_blank');
    } else {
        // 見つからない場合のフォールバック（一般的なiframeから最大面積のものを探すなど）
        alert('ServiceNow Universityのコース用フレームが見つかりませんでした。');
    }
})();
