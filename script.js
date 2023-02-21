const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
const CONTEXT_MENU_ID2 = "MY_CONTEXT_MENU2";

function getword(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID || CONTEXT_MENU_ID2)
  {
    return;
  }
  if (info.menuItemId == CONTEXT_MENU_ID) {
    chrome.tabs.create({  
      url: "https://open.spotify.com/search/" + info.selectionText
    });
  }
  
  if (info.menuItemId == CONTEXT_MENU_ID2) {
    chrome.tabs.create({  
      url: "https://www.youtube.com/results?search_query=" + info.selectionText
    });
  }
  
}
chrome.contextMenus.create({
  title: "Search '%s' on Spotify", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});

chrome.contextMenus.create({
  title: "Search '%s' on YouTube", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID2
});
chrome.contextMenus.onClicked.addListener(getword)