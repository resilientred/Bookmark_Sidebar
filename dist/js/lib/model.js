/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.ModelHelper=function(e){let o={textColor:{light:"#646464",dark:"#c8c8c8"},sidebarMaskColor:{light:"rgba(255,255,255,0.8)",dark:"rgba(0,0,0,0.6)"},hoverColor:{light:"#f5f5f5",dark:"#555555"},colorScheme:{light:"#1b82f1",dark:"#1f4d80"},foregroundColor:{light:"#ffffff",dark:"#333333"}},t={u:{openStates:{},hiddenEntries:{},additionalInfo:{},scrollPos:{},separators:{},customCss:"",pinnedEntries:{},lockPinned:!0,translationHelp:!0,autoOpen:!1,entryAmounts:{},lastOpened:null,sort:{name:"custom",dir:"ASC"},mostViewedPerMonth:!1,viewAsTree:!0},b:{animations:!0,preventPageScroll:!1,pxTolerance:{windowed:20,maximized:1},sidebarPosition:"left",openAction:"mousedown",newTab:"foreground",newTabPosition:"afterCurrent",linkAction:"current",dirAccordion:!1,autoOpen:!1,rememberState:"openStatesAndPos",tooltipDelay:1,tooltipContent:"all",dndOpen:!0,openChildrenWarnLimit:10,dirOpenDuration:.5,scrollBarHide:1.5,openDelay:0,closeTimeout:1},n:{override:!1,initialOpen:!1,searchEngine:"google",topPagesType:"topPages",shortcuts:[{label:"Google",url:"https://google.com"}],website:""},a:{showIndicator:!0,showIndicatorIcon:!0,darkMode:!1,showBookmarkIcons:!0,showDirectoryIcons:!0,styles:{colorScheme:o.colorScheme.light,foregroundColor:o.foregroundColor.light,textColor:o.textColor.light,hoverColor:o.hoverColor.light,indicatorWidth:"40px",indicatorIconSize:"32px",indicatorIconColor:"#ffffff",indicatorColor:"rgba(0,0,0,0.5)",sidebarWidth:"350px",sidebarHeaderHeight:"50px",sidebarMaskColor:o.sidebarMaskColor.light,bookmarksFontSize:"14px",directoriesIconSize:"16px",bookmarksIconSize:"16px",bookmarksLineHeight:"38px",bookmarksDirIcon:"dir-1",bookmarksDirColor:o.textColor.light,bookmarksDirIndentation:"25px",bookmarksHorizontalPadding:"16px",scrollBarWidth:"11px",tooltipFontSize:"9px",overlayMaskColor:"rgba(0,0,0,0.5)",overlayHeaderHeight:"50px",fontFamily:"default",iconShape:"bookmark",iconColor:"#555555"}}},r={},a=null,i={};this.init=(()=>new Promise(e=>{Promise.all([n(),l()]).then(e)}));let n=()=>new Promise(e=>{a&&a.disconnect(),(a=chrome.runtime.connect({name:"background"})).onMessage.addListener(e=>{i[e.uid]&&(i[e.uid](e.result),delete i[e.uid])}),e()}),l=()=>new Promise(e=>{let o=["utility","behaviour","appearance","newtab"],t={},a=o.length,i=0;o.forEach(o=>{chrome.storage["utility"===o?"local":"sync"].get([o],n=>{t[o]=n[o]||{},++i===a&&(r=t,e())})})});this.getAllData=(()=>r),this.getData=((o,a=!1)=>{let i=o;"string"==typeof i&&(i=[i]);let n={};if(i.forEach(o=>{let i=o.split("/")[0],l=o.split("/")[1],s=null,c=null;switch(i){case"u":c=r.utility;break;case"b":c=r.behaviour;break;case"a":c=r.appearance;break;case"n":c=r.newtab}null!==c&&(!0===a||void 0===c[l]?(["sidebarPosition","language"].some(e=>{if(o==="b/"+e)return null!==(s=this.getData("a/"+e))&&(i="__FOUND"),!0}),void 0!==t[i]&&void 0!==t[i][l]&&(s=t[i][l])):s=c[l]);let d=location.href.search(/chrome\-extension\:\/\//)>-1&&location.pathname.search(/settings\.html$/)>-1;if("b/pxTolerance"===o&&matchMedia("(min-resolution: 1.25dppx)").matches&&!1===d&&(s=Object.assign({},s),Object.keys(s).forEach(e=>{s[e]++})),"a/styles"===o&&(s=Object.assign({},t.a.styles,s),e.helper.font&&e.helper.font.isLoaded())){let o=e.helper.font.getFontInfo();s.fontFamily=o.name,Object.assign(s,o.fontWeights)}n[l]=s}),"string"==typeof o){let e=o.split("/")[1];n=n[e]}return n}),this.setData=(e=>new Promise(o=>{l().then(()=>{Object.keys(e).forEach(o=>{let t=o.split("/")[0],a=o.split("/")[1],i=e[o];switch(t){case"u":r.utility[a]=i;break;case"b":r.behaviour[a]=i;break;case"a":r.appearance[a]=i;break;case"n":r.newtab[a]=i}});let t=0,a=(e=1)=>{(t+=e)>=4&&o()};try{chrome.storage.local.set({utility:r.utility},()=>{a()}),chrome.storage.sync.set({behaviour:r.behaviour,appearance:r.appearance,newtab:r.newtab},()=>{chrome.runtime.lastError,a(3)})}catch(e){o()}})})),this.call=((e,o={})=>new Promise(t=>{o.type=e,o.uid=e+"_"+JSON.stringify(o)+"_"+ +new Date+Math.random().toString(36).substr(2,12),i[o.uid]=(e=>{t(e)}),a.postMessage(o)})),this.getDefaultColor=((e,t)=>o[e]?t&&o[e][t]?o[e][t]:o[e].light:null)}})(jsu);