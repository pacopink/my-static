// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/map","require dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/aspect dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/a11yclick dijit/registry ./kernel ./config ./sniff ./lang ./_coremap ./MapNavigationManager dojo/i18n!./nls/jsapi".split(" "),function(w,r,K,z,h,n,A,B,L,C,D,e,s,M,N,t,O,u,P,g,q,Q,R,E){var x={up:"panUp",right:"panRight",down:"panDown",left:"panLeft"},F=
{upperRight:"panUpperRight",lowerRight:"panLowerRight",lowerLeft:"panLowerLeft",upperLeft:"panUpperLeft"},k=z.connect,G=z.disconnect,l=s.create,m=N.set,H=h.hitch,v=M.getMarginBox,I=r.deprecated,y=h.mixin,J=0;r=K(Q,{declaredClass:"esri.Map",constructor:function(a,c){y(this,{_slider:null,_navDiv:null,_mapParams:y({attributionWidth:0.45,slider:!0,nav:!1,logo:!0,sliderStyle:"small",sliderPosition:"top-left",sliderOrientation:"vertical",autoResize:!0},c||{})});y(this,{isDoubleClickZoom:!1,isShiftDoubleClickZoom:!1,
isClickRecenter:!1,isScrollWheelZoom:!1,isPan:!1,isRubberBandZoom:!1,isKeyboardNavigation:!1,isPanArrows:!1,isZoomSlider:!1});h.isFunction(u._css)&&(u._css=u._css(this._mapParams.force3DTransforms),this.force3DTransforms=this._mapParams.force3DTransforms);var b=g("esri-transforms")&&g("esri-transitions");this.navigationMode=this._mapParams.navigationMode||b&&"css-transforms"||"classic";"css-transforms"===this.navigationMode&&!b&&(this.navigationMode="classic");this.fadeOnZoom=q.isDefined(this._mapParams.fadeOnZoom)?
this._mapParams.fadeOnZoom:"css-transforms"===this.navigationMode;"css-transforms"!==this.navigationMode&&(this.fadeOnZoom=!1);this.setMapCursor("default");this.smartNavigation=c&&c.smartNavigation;if(!q.isDefined(this.smartNavigation)&&g("mac")&&!g("esri-touch")&&!g("esri-pointer")&&!(3.5>=g("ff"))){var d=navigator.userAgent.match(/Mac\s+OS\s+X\s+([\d]+)(\.|\_)([\d]+)\D/i);d&&(q.isDefined(d[1])&&q.isDefined(d[3]))&&(b=parseInt(d[1],10),d=parseInt(d[3],10),this.smartNavigation=10<b||10===b&&6<=d)}this.showAttribution=
q.isDefined(this._mapParams.showAttribution)?this._mapParams.showAttribution:!1;this._onLoadHandler_connect=k(this,"onLoad",this,"_onLoadInitNavsHandler");var f=l("div",{"class":"esriControlsBR"+(this._mapParams.nav?" withPanArrows":"")},this.root);if(this.showAttribution)if(b=h.getObject("esri.dijit.Attribution",!1))this._initAttribution(b,f);else{var e=J++,p=this;this._rids&&this._rids.push(e);w(["./dijit/Attribution"],function(a){var b=p._rids?n.indexOf(p._rids,e):-1;-1!==b&&(p._rids.splice(b,
1),p._initAttribution(a,f))})}this._mapParams.logo&&(b={},6===g("ie")&&(b.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled\x3d'true', sizingMethod\x3d'crop', src\x3d'"+w.toUrl("./images/map/logo-med.png")+"')"),this._ogol=l("div",{style:b,tabIndex:"0",title:"Esri"},f),this._setLogoSize(),this._onMapResizeLogo_connect=k(this,"onResize",this,"_setLogoSize"),this._ogol_connect=k(this._ogol,t,this,"_openLogoLink"));this.navigationManager=new R(this);c&&c.basemap&&(this._onLoadFix=!0,
this.setBasemap(c.basemap),this._onLoadFix=!1);if(this.autoResize=this._mapParams.autoResize)b=this._getEnclosingResizableWidget(this.container)||window,d=this.resize,this._rszSignal=B.pausable(b,"resize",d),this._oriSignal=B.pausable(window,"orientationchange",d),L.after(b,"resize",d,!0),this._startResizeTimer()},_startResizeTimer:function(){clearTimeout(this._persistentTimer);this._persistentTimer=setTimeout(this._timedResize,2*this.resizeDelay)},_getEnclosingResizableWidget:function(a){var c=O.getEnclosingWidget(a);
return!c?c:c.resize?c:this._getEnclosingResizableWidget(a.parentNode)},_setLogoSize:function(){this._ogol&&(25E4>this.root.clientWidth*this.root.clientHeight?(e.remove(this._ogol,"logo-med"),e.add(this._ogol,"logo-sm")):(e.remove(this._ogol,"logo-sm"),e.add(this._ogol,"logo-med")))},_initAttribution:function(a,c){var b=l("span",{"class":"esriAttribution"},c,"first");m(b,"maxWidth",Math.floor(this.width*this._mapParams.attributionWidth)+"px");this._connects.push(k(b,t,function(){e.contains(this,"esriAttributionOpen")?
e.remove(this,"esriAttributionOpen"):this.scrollWidth>this.clientWidth&&e.add(this,"esriAttributionOpen")}));this.attribution=new a({map:this},b)},_cleanUp:function(){this.disableMapNavigation();this.navigationManager.destroy();var a=this._slider;a&&(a.destroy&&!a._destroyed)&&a.destroy();var a=this._navDiv,c=this.attribution;a&&s.destroy(a);c&&c.destroy();this._connects.push(this._slider_connect,this._ogol_connect,this._rszSignal,this._oriSignal);n.forEach(this._connects,G);clearInterval(this._persistentTimer);
this.attribution=this.navigationManager=this._rids=this._connects=this._slider_connect=this._ogol_connect=this._rszSignal=this._oriSignal=this._persistentTimer=null;this.inherited("_cleanUp",arguments)},_isPanningOrZooming:function(){return this.__panning||this.__zooming},_canZoom:function(a){var c=this.getLevel();return!this.__tileInfo||!(c===this.getMinZoom()&&0>a||c===this.getMaxZoom()&&0<a)},_onLoadInitNavsHandler:function(){this.enableMapNavigation();this._createNav();if("small"===this._mapParams.sliderStyle||
!this._createSlider)this._createSimpleSlider();else if(this._mapParams.slider){var a=-1!==this._getSliderClass(!0).indexOf("Horizontal"),a=[a?"dijit.form.HorizontalSlider":"dijit.form.VerticalSlider",a?"dijit.form.HorizontalRule":"dijit.form.VerticalRule",a?"dijit.form.HorizontalRuleLabels":"dijit.form.VerticalRuleLabels"];if(n.some(a,function(a){return!h.getObject(a,!1)})){var a=n.map(a,function(a){return a.replace(/\./g,"/")}),c=J++,b=this;this._rids&&this._rids.push(c);w(a,function(){var a=b._rids?
n.indexOf(b._rids,c):-1;-1!==a&&(b._rids.splice(a,1),b._createSlider.apply(b,arguments))})}else a=n.map(a,function(a){return h.getObject(a,!1)}),this._createSlider.apply(this,a)}G(this._onLoadHandler_connect)},_createNav:function(){if(this._mapParams.nav){var a,c,b,d=e.add,f=this.id;this._navDiv=l("div",{id:f+"_navdiv"},this.root);d(this._navDiv,"navDiv");var g=this.width/2,p=this.height/2,h;for(b in x)c=x[b],a=l("div",{id:f+"_pan_"+b},this._navDiv),d(a,"fixedPan "+c),"up"===b||"down"===b?(h=parseInt(v(a).w,
10)/2,m(a,{left:g-h+"px",zIndex:30})):(h=parseInt(v(a).h,10)/2,m(a,{top:p-h+"px",zIndex:30})),this._connects.push(k(a,"onclick",H(this,this[c])));this._onMapResizeNavHandler_connect=k(this,"onResize",this,"_onMapResizeNavHandler");for(b in F)c=F[b],a=l("div",{id:f+"_pan_"+b,style:{zIndex:30}},this._navDiv),d(a,"fixedPan "+c),this._connects.push(k(a,"onclick",H(this,this[c])));this.isPanArrows=!0}},_onMapResizeNavHandler:function(a,c,b){a=this.id;c/=2;b/=2;var d=C.byId,f,e,g;for(f in x)e=d(a+"_pan_"+
f),"up"===f||"down"===f?(g=parseInt(v(e).w,10)/2,m(e,"left",c-g+"px")):(g=parseInt(v(e).h,10)/2,m(e,"top",b-g+"px"))},_createSimpleSlider:function(){if(this._mapParams.slider){var a=this._slider=l("div",{id:this.id+"_zoom_slider","class":this._getSliderClass(),style:{zIndex:30}}),c=l("div",{"class":"esriSimpleSliderIncrementButton",tabIndex:"0",role:"button"},a),b=l("div",{"class":"esriSimpleSliderDecrementButton",tabIndex:"0",role:"button"},a);this._addZoomButtonTooltips(c,b);this._incButton=c;this._decButton=
b;this._simpleSliderZoomHandler(null,null,null,this.getLevel());var d=E.widgets.zoomSlider;this._addZoomButtonIcon(c,"+",d.zoomIn);this._addZoomButtonIcon(b,"\x26minus;",d.zoomOut);8>g("ie")&&e.add(b,"dj_ie67Fix");this._connects.push(k(c,t,this,this._simpleSliderChangeHandler));this._connects.push(k(b,t,this,this._simpleSliderChangeHandler));(-1<this.getMaxZoom()||-1<this.getMinZoom())&&this._connects.push(k(this,"onZoomEnd",this,this._simpleSliderZoomHandler));10>g("ie")&&C.setSelectable(a,!1);this.root.appendChild(a);
this.isZoomSlider=!0}},_simpleSliderChangeHandler:function(a){A.stop(a);a=-1!==a.currentTarget.className.indexOf("IncrementButton")?!0:!1;this._extentUtil({numLevels:a?1:-1})},_simpleSliderZoomHandler:function(a,c,b,d){var f;a=this._incButton;c=this._decButton;-1<d&&d===this.getMaxZoom()?f=a:-1<d&&d===this.getMinZoom()&&(f=c);f?(e.add(f,"esriSimpleSliderDisabledButton"),e.remove(f===a?c:a,"esriSimpleSliderDisabledButton")):(e.remove(a,"esriSimpleSliderDisabledButton"),e.remove(c,"esriSimpleSliderDisabledButton"))},
_getSliderClass:function(a){a=a?"Large":"Simple";var c=this._mapParams.sliderOrientation,b=this._mapParams.sliderPosition||"",c=c&&"horizontal"===c.toLowerCase()?"esri"+a+"SliderHorizontal":"esri"+a+"SliderVertical";if(b)switch(b.toLowerCase()){case "top-left":b="esri"+a+"SliderTL";break;case "top-right":b="esri"+a+"SliderTR";break;case "bottom-left":b="esri"+a+"SliderBL";break;case "bottom-right":b="esri"+a+"SliderBR"}return"esri"+a+"Slider "+c+" "+b},_addZoomButtonIcon:function(a,c,b){s.create("span",
{"aria-hidden":"true",role:"presentation",innerHTML:c},a);s.create("span",{"class":"esriIconFallbackText",innerHTML:b},a)},_addZoomButtonTooltips:function(a,c){var b=E.widgets.zoomSlider;D.set(a,"title",b.zoomIn);D.set(c,"title",b.zoomOut)},_openLogoLink:function(a){window.open(P.defaults.map.logoLink,"_blank");A.stop(a)},enableMapNavigation:function(){this.navigationManager.enableNavigation()},disableMapNavigation:function(){this.navigationManager.disableNavigation()},enableDoubleClickZoom:function(){this.isDoubleClickZoom||
(this.navigationManager.enableDoubleClickZoom(),this.isDoubleClickZoom=!0)},disableDoubleClickZoom:function(){this.isDoubleClickZoom&&(this.navigationManager.disableDoubleClickZoom(),this.isDoubleClickZoom=!1)},enableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom||(I(this.declaredClass+": Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",null,"v2.0"),this.navigationManager.enableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=
!0)},disableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom&&(I(this.declaredClass+": Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",null,"v2.0"),this.navigationManager.disableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=!1)},enableClickRecenter:function(){this.isClickRecenter||(this.navigationManager.enableClickRecenter(),this.isClickRecenter=!0)},disableClickRecenter:function(){this.isClickRecenter&&(this.navigationManager.disableClickRecenter(),
this.isClickRecenter=!1)},enablePan:function(){this.isPan||(this.navigationManager.enablePan(),this.isPan=!0)},disablePan:function(){this.isPan&&(this.navigationManager.disablePan(),this.isPan=!1)},enableRubberBandZoom:function(){this.isRubberBandZoom||(this.navigationManager.enableRubberBandZoom(),this.isRubberBandZoom=!0)},disableRubberBandZoom:function(){this.isRubberBandZoom&&(this.navigationManager.disableRubberBandZoom(),this.isRubberBandZoom=!1)},enableKeyboardNavigation:function(){this.isKeyboardNavigation||
(this.navigationManager.enableKeyboardNavigation(),this.isKeyboardNavigation=!0)},disableKeyboardNavigation:function(){this.isKeyboardNavigation&&(this.navigationManager.disableKeyboardNavigation(),this.isKeyboardNavigation=!1)},enableScrollWheelZoom:function(){this.isScrollWheelZoom||(this.navigationManager.enableScrollWheelZoom(),this.isScrollWheelZoom=!0)},disableScrollWheelZoom:function(){this.isScrollWheelZoom&&(this.navigationManager.disableScrollWheelZoom(),this.isScrollWheelZoom=!1)},showPanArrows:function(){this._navDiv&&
(this._navDiv.style.display="block",this.isPanArrows=!0)},hidePanArrows:function(){this._navDiv&&(this._navDiv.style.display="none",this.isPanArrows=!1)},showZoomSlider:function(){this._slider&&(m(this._slider.domNode||this._slider,"visibility","inherit"),this.isZoomSlider=!0)},hideZoomSlider:function(){this._slider&&(m(this._slider.domNode||this._slider,"visibility","hidden"),this.isZoomSlider=!1)}});g("extend-esri")&&(u.Map=r);return r});