const btn = document.getElementById('btnTest');

btn.onclick = function(element) {
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    alert(items.favoriteColor);
  });
};
