const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getword(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  chrome.tabs.create({  
    url: "https://open.spotify.com/search/" + info.selectionText
  });
}
chrome.contextMenus.create({
  title: "Search '%s' on Spotify", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getword)