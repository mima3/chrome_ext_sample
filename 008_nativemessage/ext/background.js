
var port = null;
connect();

/**
 * 接続処理
 */
function connect() {
  if (port) {
    return;
  }
  var hostName = "my.extension.test";
  port = chrome.runtime.connectNative(hostName);

  /**
   * アプリケーションからのメッセージ処理
   */
  port.onMessage.addListener( function (rcv) {
    console.log('onNativeMessage');
    console.log(rcv);
    chrome.runtime.sendMessage(rcv);
  });

  /**
   * アプリケーションからの切断要求
   */
  port.onDisconnect.addListener( function () {
    console.log('onDisconnect');
    port = null;
  });
}

/**
 * popup.jsからのメッセージ処理
 */
chrome.runtime.onMessage.addListener(function(message, sender) {
  console.log(message);
  if (!port) {
    connect();
  }
  // NetiveMessageの送信
  port.postMessage({"text": message});
});

