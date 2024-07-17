let inactivityTimeout;

function resetInactivityTimeout() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach((tab) => {
                chrome.tabs.remove(tab.id);
            });
            chrome.tabs.create({ url: "chrome://newtab" });
        });
    }, 10000); // 10 seconds of inactivity
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "resetInactivity") {
        resetInactivityTimeout();
    }
});

resetInactivityTimeout(); // Start the timer initially
