"use strict"
;__filename="background/help_dialog.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./i18n"],(e,t,a,o,r,n,i)=>{
Object.defineProperty(t,"__esModule",{value:true}),t.ea=t.ai=t.parseHTML=void 0;let s,l=null,c=new Map;t.parseHTML=e=>{
let t=e.indexOf("</style>")+8,i=e.slice(0,t),l=e.slice(t).trim();l=l.replace(/\$(\w+)/g,(e,t)=>{var a
;return null!==(a=s.get(t))&&void 0!==a?a:t});let c=o.di({homePage:a.Z.ta,version:a.Z.aa,
release:n.Xl("vimium://release"),
reviewPage:(a.Qe?"https://microsoftedge.microsoft.com/addons/detail/aibcglbfblnogfjhbcmmpobjhnomhcdo":"https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/$id/reviews").replace("$id",()=>r.t.runtime.id),
webStore:s.get(a.Qe?"edgestore":"webstore"),
browserHelp:a.Qe?"https://support.microsoft.com/help/4531783/microsoft-edge-keyboard-shortcuts":"https://support.google.com/chrome/answer/157179"
});return l=l.replace(/\{\{(\w+)}}/g,(e,t)=>c[t]||e),[i,l]},t.ai=(e,r)=>{s=a.oa[1],l&&!a.oa[0]||(l=t.parseHTML(a.oa[0]),
a.oa[0]="");let n=new Map,c=!e;r=e||!!r,a.ii.forEach((e,o)=>{if(/^<v-.\w*>/.test(o))return;let r=e.ra
;38===e.ui&&e.ni&&(a.na(e),r=e.ra);let i=t.ea(r),s=n.get(i);s?s.push([o,e]):n.set(i,[[o,e]])})
;let d=e?" "+s.get("cmdList"):"",p=o.di({title2:d&&(d.includes(" ",1)?d:d.trimLeft()),
name2:" - "+i.Re("name").split(" - ")[1],tip:r&&s.get("tipClickToCopy")||"",
lbPad:r?'\n\t\t<tr><td class="HelpTd TdBottom">&#160;</td></tr>':""}),g=l[1].replace(/\{\{(\w+)}}/g,(e,t)=>{var a
;return null!==(a=p[t])&&void 0!==a?a:u(t,n,c,r)});return l[0]+g}
;let includes=(e,t)=>e.includes(t),startsWith=(e,t)=>e.startsWith(t),endsWith=(e,t)=>e.endsWith(t)
;t.ea=e=>(includes(e,"Mode")&&includes(e,".activate")&&(e=includes(e,"ModeTo")?e.replace("ModeTo",""):e.replace("Mode","")),
endsWith(e,"Unhover")?e=e.replace("Unhover","Leave"):endsWith(e,"Goto")?e=e.replace("Goto",""):"clearContentSetting"===e?e=`${e}s`:includes(e,"CS")?e=startsWith(e,"clear")?"clearContentSettings":e.replace("CS","ContentSetting"):includes(e,"vateUrl")?e=e.replace("vateUrl","vateEditUrl"):endsWith(e,"TabSelection")?e=e.replace("TabSelection","Tabs"):"quickNext"===e?e="nextTab":"newTab"===e?e="createTab":"closeSomeOtherTabs"===e?e="closeOtherTabs":"simBackspace"===e?e="simulateBackspace":"showHUD"===e||"showHud"===e?e="showTip":"wait"===e&&(e="blank"),
e);let u=(e,t,a,r)=>{let n=s.get("cmdParams")||" (use *)",i="",l=p[e];for(let e=0;e<l.length;e++){let u=l[e],p=t.get(u)
;if(a&&!p)continue;let g=e<l.length-1&&1===l[e+1];g&&e++;let m=e<l.length-1?l[e+1]:"a",b="$"===m[0]?(e++,
m.slice(1)):"",v=-2,T="",$=c.get(u)
;if($||($=[s.get(u).replace("<","&lt;").replace(">","&gt;"),b?n.replace("*",()=>b):" "],c.set(u,$)),p&&p.length>0){
T='\n\t\t<span class="HelpKey">';for(let e=0;e<p.length;e++){if(v>42&&e<p.length-1){
T+=`</span>\n\t<span>+ ${p.length-e} \u2026`;break}let t=p[e];v>=0&&(T+='</span> <span class="HelpKey">'),T+=o.zr(t[0]),
v+=t[0].length+2}T+="</span>\n\t"}let k=r?$[0]+$[1]:$[0];v<=12?i+=d(g,T,k,r?u:""):(i+=d(g,T,"",""),i+=d(g,"",k,r?u:""))}
return i},d=(e,t,a,o)=>{let r=e?'<tr class="HelpAdv">\n\t':"<tr>\n\t";return a?(r+='<td class="HelpTd HelpKeys">',r+=t,
r+='</td>\n\t<td class="HelpTd HelpCommandInfo">',r+=a,o&&(r+='<span class="HelpCommandName" role="button">(',r+=o,
r+=")</span>\n\t")):(r+='<td class="HelpTd HelpKeys HelpLongKeys" colspan="2">',r+=t),r+"</td>\n</tr>\n"},p={
pageNavigation:["LinkHints.activate",'$button=""/right, touch=false/true/"auto"',"LinkHints.activateOpenInNewTab","LinkHints.activateOpenInNewForegroundTab","LinkHints.activateWithQueue","scrollDown","$keepHover=true|false|auto|never","scrollUp","$keepHover=true|false|auto|never","scrollLeft","scrollRight","scrollToTop","scrollToBottom","scrollToLeft",1,"scrollToRight",1,"scrollPageDown","scrollPageUp","scrollPxDown",1,"scrollPxUp",1,"scrollPxLeft",1,"scrollPxRight",1,"scrollFullPageDown","scrollFullPageUp","scrollSelect",1,'$dir=down|up, position=""|begin|end',"reload","$hard","reloadTab","reloadGivenTab",1,"$hard, bypassCache","zoom","$in, out, reset","zoomIn",1,"zoomOut",1,"zoomReset",1,"toggleViewSource",1,"copyCurrentUrl","$type=url/title/frame, decoded","copyCurrentTitle","switchFocus",'$flash, select=""/all/all-line/start/end',"focusInput",'$keep, select=""/all/all-line/start/end',"LinkHints.activateCopyLinkUrl","LinkHints.activateCopyLinkText","$join:boolean/string","openCopiedUrlInCurrentTab","openCopiedUrlInNewTab","goUp","$trailingSlash=null/true/false","goToRoot","LinkHints.activateCopyImage",1,"$richText=safe","LinkHints.activateDownloadImage",1,"LinkHints.activateOpenImage",1,"$auto=true","LinkHints.activateDownloadLink",1,"LinkHints.activateOpenIncognito",1,"LinkHints.activateOpenUrl",1,"LinkHints.activateFocus","LinkHints.activateHover",1,"$showUrl=true","LinkHints.activateLeave",1,"LinkHints.unhoverLast",1,"LinkHints.activateSearchLinkText","LinkHints.activateEdit","LinkHints.activateSelect","$visual=true, caret, then:{}","LinkHints.click","$direct=true|element|sel|focus|click|sel,focus,click","simulateBackspace","dispatchEvent",1,'$key="key,keyCode,code",init:{}',"goNext","$sed=true, patterns:string, rel:string, noRel, isNext","goPrevious","nextFrame","mainFrame","parentFrame","enterInsertMode","$key:string, unhover, reset","enterVisualMode","enterVisualLineMode","Marks.activateCreate","$swap","Marks.activate","$prefix=true, swap, mapKey","Marks.clearLocal",1,"Marks.clearGlobal",1,"openUrl","$url:string, urls:string[], reuse=newFg/current/newBg/reuse, incognito, window, position","focusOrLaunch",1,"$url:string, prefix"],
vomnibarCommands:["Vomnibar.activate",'$keyword="", url:boolean/string',"Vomnibar.activateInNewTab","$keyword, url","Vomnibar.activateBookmarks","Vomnibar.activateBookmarksInNewTab","Vomnibar.activateHistory","Vomnibar.activateHistoryInNewTab","Vomnibar.activateTabs","Vomnibar.activateEditUrl",1,"Vomnibar.activateEditUrlInNewTab",1,"LinkHints.activateOpenVomnibar","$url, newtab, then:{}","toggleVomnibarStyle",1,"$style=dark, current"],
historyNavigation:["goBack","$reuse=current/newBg/newFg","goForward","reopenTab",1],
findCommands:["enterFindMode","$last, selected=true","performFind","performBackwardsFind","performAnotherFind","clearFindHistory",1],
tabManipulation:["nextTab","$blur","previousTab","$blur","firstTab","lastTab","createTab","duplicateTab","removeTab",'$keepWindow=""/always, mayClose, goto=""/left/right/previous',"removeRightTab",1,"restoreTab","restoreGivenTab",1,"discardTab",1,"moveTabToNextWindow",1,"$last, position, right=true, tabs","moveTabToNewWindow",1,"$limited=null/true/false","moveTabToIncognito",1,"joinTabs","sortTabs","$sort=recency|createTime","togglePinTab","toggleMuteTab","$all, other","visitPreviousTab","$blur, acrossWindows, onlyActive","closeTabsOnLeft",1,"$$count=0","closeTabsOnRight",1,"$$count=0","closeOtherTabs",1,'$filter=""/url/url+hash/url+title',"moveTabLeft",1,"$group=true","moveTabRight",1,"$group=true","toggleContentSetting",1,"$type=images","enableContentSettingTemp",1,"clearContentSettings",1,"copyWindowInfo",1,'$format="${title}: ${url}", join:true/string, decoded',"captureTab","toggleWindow",'$states="normal maximized"'],
misc:["showHelp","autoCopy","$text: string, url, decoded","autoOpen","searchAs","$copied=true, selected=true","searchInAnother","$keyword, reuse=current/newFg/newBg/reuse","showTip","$text:string","openBookmark","$title, path","addBookmark",1,"$folder:string","toggleStyle",1,"$id/selector:string, css: string","toggleLinkHintCharacters",1,"$value:string","editText",1,"$run:string, dom=false","toggleSwitchTemp",1,"$key:string, [value:any]","passNextKey",1,"$expect:string, normal","debugBackground",1,"reset",1,"runKey",1,"$expect:Envs, keys:KeySequence[]|string","sendToExtension",1,"$id:string, data:any, raw","confirm",1,"$ask:string, $then, $else","blank",1]
};p.misc.push("closeDownloadBar"),a.Qe&&p.tabManipulation.push("toggleReaderMode",1)});