
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});
  });
  