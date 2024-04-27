var uninstallUrl = "https://www.bing.com/BrowserExtension/RewardsUninstall?origin=ext";
chrome.runtime.setUninstallURL(uninstallUrl);


chrome.management.onEnabled.addListener(function (ExtensionInfo) {
	
    if (ExtensionInfo.id != chrome.runtime.id) {
		return;
	}

    if (!localStorage["BingDefaultsSet"]) {
        localStorage["BingDefaultsSet"] = "done";
    }
});

chrome.browserAction.onClicked.addListener(function (tab) {
    checkFlyoutStatus(tab);
});


function checkFlyoutStatus(tab){
	
	if(!window.navigator.onLine) {
        chrome.tabs.create({ url: chrome.extension.getURL('offline_popup.html') });
        return;
    }
	
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.bing.com/rewards/panelflyout?partnerId=BrowserExtensions");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304) && xhr.responseText) {
                flyoutStatusOnline(tab);
            }
            else {
                chrome.tabs.create({ url: chrome.extension.getURL('offline_popup.html') });
            }
        }
    };
    xhr.send();
}

function flyoutStatusOnline(tab){
   // Execute the content script in the current tab
   if (tab.url == undefined) {
        console.log("url is undefined")
        openNewBingTabWithFlyout();
    }
    else {
        chrome.tabs.executeScript(tab.id, { file: "rewardAction.js" }, function () {
            if (chrome.runtime.lastError) {
                var errorMsg = chrome.runtime.lastError.message;
                console.log("js file - error:" + errorMsg);    
                openNewBingTabWithFlyout();
            }      
        });
        chrome.tabs.insertCSS(tab.id, { file: "rewardAction.css" }, function () {
            if (chrome.runtime.lastError) {
                var errorMsg1 = chrome.runtime.lastError.message;
                console.log("css file - error:" + errorMsg1);
            }    
        });
    }
}

function openNewBingTabWithFlyout(){
    // Execute the content script in the current tab
    chrome.tabs.create({ url: "https://www.bing.com" },(tab)=>{
        chrome.tabs.executeScript(tab.id, {file: "rewardAction.js"});
        chrome.tabs.insertCSS(tab.id, {file: "rewardAction.css"});    
    });
}
