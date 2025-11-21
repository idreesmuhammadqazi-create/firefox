// Extension installation handler
chrome.runtime.onInstalled.addListener(() => {
  console.log('PseudoRun extension installed');
});

// Browser action click handler
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('index.html')
  });
});