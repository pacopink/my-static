// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/OpacitySlider/templates/OpacitySlider.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/OpacitySlider","../kernel ../numberUtils ../dijit/RendererSlider ../dijit/RendererSlider/sliderUtils ../Color dijit/_TemplatedMixin dijit/_WidgetBase dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/debounce dojo/dom-style dojo/Evented dojo/has dojox/gfx dojo/text!./OpacitySlider/templates/OpacitySlider.html".split(" "),function(n,p,q,h,r,k,s,l,t,d,u,m,v,w,f,x){k=t([s,k,v],{declaredClass:"esri.dijit.OpacitySlider",baseClass:"esriOpacitySlider",templateString:x,opacityInfo:null,
minValue:null,maxValue:null,histogram:null,statistics:!1,zoomOptions:null,handles:[0,1],showLabels:!0,showTicks:!0,showHandles:!0,showHistogram:!0,showStatistics:!0,showTransparentBackground:!0,histogramWidth:100,rampWidth:26,_rampNode:null,_sliderHeight:null,_updateTimer:null,_forceMinValue:null,_forceMaxValue:null,constructor:function(a,c){c&&(void 0!==a.minValue&&this.set("_forceMinValue",a.minValue),void 0!==a.maxValue&&this.set("_forceMaxValue",a.maxValue),this._updateTimeout=u(this._updateTimeout,
0))},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new q({type:"OpacitySlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,showLabels:this.showLabels,
showTicks:this.showTicks,showHandles:this.showHandles},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=m.get(this._rampNode,"height")||155;this._valuesAutoAdjust();this._createSVGSurfaces();this._slider.on("slide",d.hitch(this,function(a){this._valuesAutoAdjust();this._fillRamp()}));this._slider.on("change",d.hitch(this,function(a){this.set("values",a.values);this._updateOpacityInfo(a.values);this._valuesAutoAdjust();this._fillRamp();this.emit("change",
d.clone(this.opacityInfo))}));this._slider.on("handle-value-change",d.hitch(this,function(a){this.set("values",a.values);this._updateOpacityInfo(a.values);this._valuesAutoAdjust();this._fillRamp();this.emit("handle-value-change",d.clone(this.opacityInfo))}));this._slider.on("data-value-change",d.hitch(this,function(a){this.set({minValue:a.min,maxValue:a.max});this._updateRendererSlider();this.emit("data-value-change",{minValue:this.minValue,maxValue:this.maxValue,opacityInfo:d.clone(this.opacityInfo)})}));
this._slider.on("stop",d.hitch(this,function(a){this.emit("handle-value-change",d.clone(this.opacityInfo))}));this._slider.on("zoom-out",d.hitch(this,function(a){this.set("zoomOptions",null)}));this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("minValue",this._updateTimeout);this.watch("maxValue",this._updateTimeout);this.watch("opacityInfo",this._updateTimeout);
this.watch("statistics",this._updateTimeout);this.watch("histogram",this._updateTimeout);this.watch("zoomOptions",this._updateTimeout);this.watch("showHandles",this._updateTimeout);this.watch("showLabels",this._updateTimeout);this.watch("showTicks",this._updateTimeout);this.watch("zoomOptions",this._zoomEventHandler);this.watch("showHistogram",this._toggleHistogram);this.watch("showTransparentBackground",this._toggleTransparentBackground)},destroy:function(){this.inherited(arguments);this._slider&&
this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&l.forEach(this.countTooltips,function(a){a.destroy()})},_updateOpacityInfo:function(a){l.forEach(this.opacityInfo.stops,d.hitch(this,function(c,b){c.value=a[b].value;c.opacity=a[b].opacity}))},_valuesAutoAdjust:function(){var a,c,b,d,h,g,e,f=this._slider.values,k=[];l.forEach(f,function(a,c){a.hidden||k.push(c)});for(g=0;g<k.length-1;g++){a=k[g];c=k[g+
1];b=c-a;d=f[a].value;h=f[c].value;for(e=a+1;e<c;e++)f[e].value=d*(c-e)/b+h*(e-a)/b}},_getHandleInfo:function(a){return l.map(a,d.hitch(this,function(c,b){return{color:new r([0,121,193,c.opacity]),value:a[b].value,opacity:a[b].opacity}}))},_updateTimeout:function(a){this._updateRendererSlider()},_updateRendererSlider:function(a){null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<
this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1});this.set("values",this._getHandleInfo(this.opacityInfo.stops));this._slider.set("values",this.values);this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();
this._createSVGSurfaces();this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.statistics?this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100});null!==this._forceMinValue&&this.set("minValue",this._forceMinValue);null!==this._forceMaxValue&&
this.set("maxValue",this._forceMaxValue);null!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);this.minValue===this.maxValue&&(0===this.minValue?this.set("maxValue",100):null===this.minValue?this.set({minValue:0,maxValue:100}):this.set({minValue:0,maxValue:2*this.minValue}));null===this.minValue&&this.set("minValue",0);null===this.maxValue&&this.set("maxValue",100);this.set("values",this._getHandleInfo(d.clone(this.opacityInfo.stops)))},
_createSVGSurfaces:function(){this._colorRampSurface=f.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight-2);m.set(this._colorRampSurface.rawNode,"border","1px solid #888");this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,height:this._sliderHeight});this._transparentBackgroundNode=h.generateTransparentBackground(this._colorRampSurface,this.rampWidth-2,this._sliderHeight-2,this.showTransparentBackground);this._histogramSurface=h.generateHistogramSurface(this._rampNode,
this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();null!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,5)),this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,195))):this.toggleSliderBottom?this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",
width:3}).setTransform(f.matrix.translate(0,195)):this.toggleSliderTop&&this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,5)))},_fillRamp:function(){var a=this._slider.minimum,c=this._slider.maximum,b=this._slider.values.slice(0);l.forEach(b,function(b){b.offset=(c-b.value)/(c-a)});b.reverse();null!==this.zoomOptions?this.toggleSliderBottom&&this.toggleSliderTop?this._surfaceRect.setFill({type:"linear",x1:0,
y1:10,x2:0,y2:this._sliderHeight-10,colors:b}):this.toggleSliderBottom?this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight-20,colors:b}):this.toggleSliderTop&&this._surfaceRect.setFill({type:"linear",x1:0,y1:20,x2:0,y2:this._sliderHeight,colors:b}):this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:b})},_toggleTransparentBackground:function(){this.showTransparentBackground?this._transparentBackgroundNode.setFill(h.getTransparentFill()):this._transparentBackgroundNode.setFill(null)},
_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(m.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):m.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&this.zoomOptions.histogram?
this.zoomOptions.histogram:this.histogram;this._barsGroup=h.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=h.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a=this.statistics,c=this._slider,b=this.zoomOptions||null,d=h.getPrecision(this.maxValue),f=a.avg,g,e;a.min===a.max&&a.min===a.avg?(g=0,e=2*a.avg):(g=a.min,e=a.max);if(g!==c.minimum||e!==
c.maximum)g=c.minimum,e=c.maximum;b&&(g=b.minSliderValue,e=b.maxSliderValue);f=p.round([a.avg,e,g])[0];this._avgHandleObjs=h.generateAvgLine(this._histogramSurface,f,this._sliderHeight*(e-a.avg)/(e-g),d,this.isLeftToRight(),this.isDate)}}});w("extend-esri")&&d.setObject("dijit.OpacitySlider",k,n);return k});