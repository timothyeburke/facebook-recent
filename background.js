
chrome.tabs.onUpdated.addListener(function(tabId, event, tab) {
  if (event.status === 'loading' && event.url === 'https://www.facebook.com/') {
    chrome.tabs.update(tab.id, { url: "https://www.facebook.com/?sk=h_chr" });
  }
});
