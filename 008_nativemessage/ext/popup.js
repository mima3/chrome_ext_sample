
document.getElementById('btnTest').onclick = function(element) {
  message = document.getElementById('txtMessage').value;
  chrome.runtime.sendMessage(message);
};

chrome.runtime.onMessage.addListener(function(message) {
  console.log('onMessage...');
  console.log(message);
  alert(JSON.stringify(message));
});
