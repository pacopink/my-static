// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/Pagination.html":'\x3cdiv class\x3d"Pagination"\x3e\r\n    \x3cdiv class\x3d"Pagination_PageAndArrows"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"backNode"\r\n             class\x3d"Pagination_Triangle Pagination_TriangleBack"\r\n             style\x3d"display: none;"\r\n             data-dojo-attach-event\x3d"ondijitclick: _backward"\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"Pagination_Items"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"itemsNode"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"forwardNode"\r\n             class\x3d"Pagination_Triangle Pagination_TriangleForward"\r\n             style\x3d"display: none;"\r\n             data-dojo-attach-event\x3d"ondijitclick: _forward"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"bulletsNode" class\x3d"Pagination_Bullets"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/Pagination","../../declare dojo/_base/lang dojo/_base/array dojox/mvc/Templated dojo/aspect dojo/dom-class dojo/dom-geometry dojo/dom-construct dojo/dom-style dojo/on dojo/sniff dijit/layout/_LayoutWidget dgrid/List ./AnimationHelper dojo/text!./templates/Pagination.html dijit/layout/ContentPane".split(" "),function(y,u,v,z,E,t,x,n,s,w,A,B,F,C,D){return y("esri.dijit.geoenrichment.Pagination",[z,B],{templateString:D,autoCenter:!1,scrollAnimation:!0,cyclicPagination:!1,
alwaysShowArrows:!1,items:null,currentPage:0,_pageCount:0,_pageSize:0,_animation:null,_itemMargins:null,clickEventType:null,constructor:function(){this._animation=new C;this.clickEventType=A("touch")?"touchstart, click":"click"},createItemContainer:function(){},updateItemContainer:function(a,b){},onSelect:function(a){},layout:function(){this._animation.finish();var a=this.items;if(!a||!a.length)this.set("items",[]);else{var b=this.itemsNode.parentNode;if(b&&b.clientHeight){var c=this._parseAutoCenterOption(this.autoCenter);
c.type&&s.set(b,"padding","0px");var d=this.itemsNode.firstChild;d||(d=n.create("div",null,this.itemsNode));"stretch"==c.type&&(this._itemMargins={},d.innerHTML="");for(var e=d.children;!(b.scrollHeight-2>b.clientHeight)&&(c.type||e.length<a.length);){var f=this.createItemContainer();w(f,this.clickEventType,u.hitch(this,this._onItemClick,f));d.appendChild(f)}for(;b.scrollHeight-2>b.clientHeight&&1<e.length;)n.destroy(d.lastChild);var k=e.length;if(c.type){var f=d.firstChild,h=s.getComputedStyle(f),
p=x.getMarginBox(f,h);if("stretch"==c.type)var l=x.getMarginExtents(f,h);var g=Math.floor(d.clientHeight/p.h),m=d.clientHeight/g,g=Math.max(Math.floor(b.clientHeight/m),g),h=k/g;c.heightLimit&&g>c.heightLimit&&(g=c.heightLimit);c.widthLimit&&h>c.widthLimit&&(h=c.widthLimit);var k=g*h,r=Math.max(b.clientWidth-h*p.w,0),m=Math.max(b.clientHeight-g*m,0)}f=this._pageSize=Math.min(k,a.length);k=this._pageCount=Math.ceil(this.items.length/f);if(c.type&&c.height){if("stretch"==c.type){var q=Math.floor(m/
g),m=m-q*g;this._itemMargins.marginTop=(Math.floor(q/2)+l.t).toString()+"px";this._itemMargins.marginBottom=(Math.ceil(q/2)+l.b).toString()+"px"}s.set(b,{paddingTop:Math.floor(m/2).toString()+"px",paddingBottom:"0"})}this.currentPage=this._coerceCurrentPage(this.currentPage);g=0;for(m=f*this.currentPage;g<f&&m<a.length;)this.updateItemContainer(e[g++],a[m++]);for(;g<e.length;)n.destroy(d.lastChild);c.type&&c.width&&("stretch"==c.type?(q=Math.floor(r/h),r-=q*h,this._itemMargins.marginLeft=(Math.floor(q/
2)+l.l).toString()+"px",this._itemMargins.marginRight=(Math.ceil(q/2)+l.r).toString()+"px"):q=0,1==k&&(f<h&&!c.preventSingleRowCenter)&&(r=Math.max(b.clientWidth-(p.w+q)*f,0)),r=Math.floor(r/2).toString()+"px",s.set(b,{paddingLeft:r,paddingRight:r}));for(g=this._itemMargins?0:e.length;g<e.length;)s.set(e[g++],this._itemMargins);if(this.bulletsNode&&(n.empty(this.bulletsNode),1<k))for(a=0;a<k;a++)b=n.create("span",{"class":"Pagination_Bullet",innerHTML:"\x26nbsp;"},this.bulletsNode),w(b,this.clickEventType,
u.hitch(this,function(a){this._started=!0;this.set("currentPage",a);this.emit("page-is-changed-manually")},a));this._updateNavigationControls()}}},_parseAutoCenterOption:function(a){if(!a)return{};var b={type:"center"};"string"!=typeof a&&(a="");"$"==a.charAt(0)&&(b.preventSingleRowCenter=!0,a=a.substr(1));switch(a){case "width":return b.width=!0,b;case "height":return b.height=!0,b;default:if(0!=a.indexOf("stretch"))return b.width=b.height=!0,b}b.type="stretch";a=a.substr(7);var c=a.indexOf(":"),
d=0>c?a:a.substr(0,c);a=0>c?"":a.substr(c+1);switch(d){case "-width":b.width=!0;break;case "-height":b.height=!0;break;default:b.width=b.height=!0}if(!a)return b;a=a.split(",");c=0;v.forEach(["width","height"],function(d){if(b[d]){var f=Number(a[c++]);!isNaN(f)&&0<f&&(b[d+"Limit"]=f)}});return b},_onItemClick:function(a){this.onSelect(a)},_coerceCurrentPage:function(a){a>=this._pageCount&&(a=this._pageCount-1);0>a&&(a=0);return a},_updateNavigationControls:function(){var a=this.currentPage,b=1>=this._pageCount,
c=b&&!this.alwaysShowArrows?"none":"",d=["Pagination_TriangleDisabled","Pagination_TriangleEnabled"];if(this.backNode){var e=b||0==a&&!this.cyclicPagination?0:1;t.replace(this.backNode,d[e],d[1-e]);this.backNode.style.display=c}this.forwardNode&&(e=b||a==this._pageCount-1&&!this.cyclicPagination?0:1,t.replace(this.forwardNode,d[e],d[1-e]),this.forwardNode.style.display=c);if(this.bulletsNode){b=this.bulletsNode.children;for(c=0;c<b.length;c++)c==a?t.add(b[c],"Pagination_BulletCurrent"):t.remove(b[c],
"Pagination_BulletCurrent")}},_setItemsAttr:function(a){this.items=a;n.empty(this.itemsNode);this.bulletsNode&&n.empty(this.bulletsNode);this._pageCount=this.currentPage=0;this._updateNavigationControls()},selectPageByItemIndex:function(a,b){0>a||(!this.items||a>=this.items.length||1>=this._pageCount)||this.set("currentPage",Math.floor(a/this._pageSize),b)},selectItem:function(a){a=v.indexOf(this.items,a);if(-1!=a&&!(0>a||!this.items||a>=this.items.length||1>=this._pageCount))if(a=this.itemsNode.firstChild.children[this.items.length%
this._pageSize])this.onSelect(a)},navigateToItem:function(a){a=v.indexOf(this.items,a);this.selectPageByItemIndex(a,!0)},_setCurrentPageAttr:function(a,b){this._animation.finish();var c;"next"==a?(c="forward",a=this.currentPage+1,this.cyclicPagination&&a==this._pageCount&&(a=0)):"prev"==a?(c="backward",a=this.currentPage-1,this.cyclicPagination&&-1==a&&(a=this._pageCount-1)):c=!0===this.scrollAnimation?"fade1":this.scrollAnimation;!0===b&&(c="");a=this._coerceCurrentPage(a);if(this.currentPage!=a){for(var d=
this.items||[],e=this.itemsNode,f=0,k=this._pageSize*a,h=this.itemsNode.firstChild,p=n.create("div");f++<this._pageSize&&k<d.length;){var l=this.createItemContainer();w(l,this.clickEventType,u.hitch(this,this._onItemClick,l));this._itemMargins&&s.set(l,this._itemMargins);this.updateItemContainer(l,d[k++]);p.appendChild(l)}switch(c){case "forward":this._slideAnimation(e,h,p,!0);break;case "backward":this._slideAnimation(e,h,p,!1);break;default:if(c&&(c=c?"_"+c+"Animation":null,"function"==typeof this[c])){this[c](e,
h,p,a>this.currentPage);break}n.empty(e);e.appendChild(p)}this.currentPage=a;this._updateNavigationControls()}},_slideAnimation:function(a,b,c,d){d?a.appendChild(c):a.insertBefore(c,a.firstChild);this.isLeftToRight()||(d=!d);a.parentNode.style.overflow="hidden";this._animation.start([{node:a,classes:["Pagination_SlideAnim",d?"Anim_SlideLeft":"Anim_SlideRight"]}],b).then(function(){a.parentNode.style.overflow=""})},_fade1Animation:function(a,b,c){a.appendChild(c);this._animation.start([{node:b,classes:["Pagination_FadeAnim",
"Anim_FadeOut"]},{node:c,classes:["Pagination_FadeAnim","Anim_FadeIn"]}],b)},_fade2Animation:function(a,b,c){var d=this._animation;d.start([{node:b,classes:["Pagination_FadeAnim","Anim_FadeOut"]}],b).then(function(){a.appendChild(c);d.start([{node:c,classes:["Pagination_FadeAnim","Anim_FadeIn"]}],b)})},_backward:function(){this.set("currentPage","prev")},_forward:function(){this.set("currentPage","next")}})});