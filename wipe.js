chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
     file: 'removeStuff.js'
    //code: 'localStorage.clear(); sessionStorage.clear(); document.cookie = "";'
  });
});
