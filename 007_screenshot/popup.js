/**
 * タブの画面をPNGとして保存
 * https://developer.chrome.com/extensions/tabs#method-captureVisibleTab
 */
document.getElementById('btnScreenShot').onclick = function (element) {
  chrome.tabs.captureVisibleTab(null, {"format":"png", "quality": 50}, function (image) {
     //the image variable is a base64 encoded image which you should be able to load in either canvas or src attribute of an image.
     console.log(image);
     chrome.downloads.download({
       url: image,
       filename: 'capture.png'
     });
  });
};
