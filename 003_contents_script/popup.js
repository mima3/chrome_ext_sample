const btn = document.getElementById('btnTest');
const btn2 = document.getElementById('btnTest2');
/**
 * 宣言されているコンテンツスクリプトを実行する
 */
btn.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.sendMessage(tabs[0].id, {color: "red"}, function(response) {
     // ポップアップ上で右クリックすることで開発者ツールが表示され、
     // そこでログが確認可能です.
     console.log('Responce.....');
     console.log(response);
   });
 });
};

/**
 * ウェブページ上でスクリプトを実行する.
 */
btn2.onclick = function(element) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="orange"'
  });
};
