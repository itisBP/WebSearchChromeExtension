const SPOTIFY_CONTEXT_MENU_ID = "SPOTIFY_CONTEXT_MENU";
const YOUTUBE_CONTEXT_MENU_ID = "YOUTUBE_CONTEXT_MENU";
const AMAZON_CONTEXT_MENU_ID = "AMAZON_CONTEXT_MENU";

function getword(info,tab) {
  
  if (info.menuItemId == SPOTIFY_CONTEXT_MENU_ID) {
    chrome.tabs.create({  
      url: "https://open.spotify.com/search/" + info.selectionText
    });
  }
  
  if (info.menuItemId == YOUTUBE_CONTEXT_MENU_ID) {
    chrome.tabs.create({  
      url: "https://www.youtube.com/results?search_query=" + info.selectionText
    });
  }
  
  if (info.menuItemId == AMAZON_CONTEXT_MENU_ID) {
    chrome.tabs.create({  
      url: "https://www.amazon.com/s?k=" + info.selectionText
    });
  }

}
chrome.contextMenus.create({
  title: "Search '%s' on Spotify", 
  contexts:["selection"], 
  id: SPOTIFY_CONTEXT_MENU_ID
});

chrome.contextMenus.create({
  title: "Search '%s' on YouTube", 
  contexts:["selection"], 
  id: YOUTUBE_CONTEXT_MENU_ID
});

chrome.contextMenus.create({
  title: "Search '%s' on Amazon", 
  contexts:["selection"], 
  id: AMAZON_CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getword)