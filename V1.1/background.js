// message handler - extension code
chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    if (request.methodName == 'callRestart') {
      chrome.runtime.restart();
    }
  });
  