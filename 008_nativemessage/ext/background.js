
var port = null;
chrome.runtime.onMessage.addListener(function(message, sender) {
  console.log(message);
  if (!port) {
    var hostName = "my.extension.test";
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener( function (rcv) {
      console.log('onNativeMessage');
      console.log(rcv);
      chrome.runtime.sendMessage(rcv);
    });
    port.onDisconnect.addListener( function () {
      console.log('onDisconnect');
      port = null;
    });
  }
  port.postMessage({"text": message});
});

