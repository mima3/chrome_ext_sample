chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log("onUpdated",changeInfo);
  // F5での更新だとchangeInfoのurlはundefinedのまま
  if (changeInfo.url) {
    if (/^https:\/\/github.com/.test(changeInfo.url)) {
      chrome.pageAction.show(tabId);
    } else {
      chrome.pageAction.hide(tabId);
    }
  }
}); 
