chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('onMessage...');
  console.log(message);
  console.log(sender);
  console.log(sendResponse);
  document.body.style.backgroundColor = message.color;
  console.log(window.document.body.innerHTML);
  sendResponse(window.document.body.innerHTML);
});
