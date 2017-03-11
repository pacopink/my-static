// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/renderers/DotDensityRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/has dojox/gfx/_base ../kernel ../lang ../Color ./Renderer ../symbols/PictureFillSymbol ../geometry/ScreenPoint ../geometry/Point".split(" "),function(h,k,q,r,s,t,u,m,n,v,w,x,p){h=h(v,{declaredClass:"esri.renderer.DotDensityRenderer",constructor:function(a){this.dotSize=a.dotSize||3;this.dotValue=a.dotValue;this.fields=a.fields;this.outline=a.outline;this.backgroundColor=a.backgroundColor;
this.exactCount=a.exactCount||!0;this.dotShape=a.dotShape||"square";this.legendOptions=a.legendOptions;this._exactCountMinArea=1E4;this._currentMapScale=this._map=this._canvas=null;this._symbolMap={};this._currentGraphic=this._currentResolution=this._objectIdField=null;this._supportsCanvas=window.CanvasRenderingContext2D?!0:!1;window.CanvasRenderingContext2D||console.log("The DotDensityRenderer requires a Canvas enabled Browser.  IE8 and less does not support Canvas.")},getSymbol:function(a){var b,
c;this._currentGraphic=a;if(!this._supportsCanvas)return null;this._map||(this._map=a.getLayer()._map,this._objectIdField=a.getLayer().objectIdField,this._currentMapScale=this._map.getScale(),this._currentResolution=this._map.extent.getWidth()/this._map.width,this._map.on("zoom-end",k.hitch(this,function(a){this._currentMapScale=this._map.getScale();this._currentResolution=a.extent.getWidth()/this._map.width;this._symbolMap[this._currentMapScale]={}})));if(this._symbolMap[this._currentMapScale]&&
this._symbolMap[this._currentMapScale][a.attributes[this._objectIdField]])return b=this._symbolMap[this._currentMapScale][a.attributes[this._objectIdField]],c=this._getShapeProperties(a),b.setOffset(c.dx,c.dy),b;b=this._generateFieldsCount(this.fields,a.attributes,this.dotValue);c=this._getShapeProperties(a);b=new w(this._generateImageSrc(c.width,c.height,b,c.minXY,c.maxXY),this.outline,c.width,c.height);b.setOffset(c.dx,c.dy);this._symbolMap[this._currentMapScale]||(this._symbolMap[this._currentMapScale]=
{});return this._symbolMap[this._currentMapScale][a.attributes[this._objectIdField]]=b},_generateFieldsCount:function(a,b,c){var e,d;for(d=a.length-1;0<=d;d--)e=b[a[d].name]/c,a[d].numPoints=Math.round(e);return a},_getShapeProperties:function(a){var b,c,e,d;b=a.geometry.getExtent();b.contains(this._map.extent)&&(b=this._map.extent);e=Math.ceil(b.getWidth()/this._currentResolution);d=Math.ceil(b.getHeight()/this._currentResolution);c=this._map.toScreen(new p(b.xmin,b.ymin,b.spatialReference));b=this._map.toScreen(new p(b.xmax,
b.ymax,b.spatialReference));a=a.getLayer().getNode().getCTM();return{minXY:c,maxXY:b,dx:(c.x-a.e)%e,dy:(b.y-a.f)%d,width:e,height:d}},_generateImageSrc:function(a,b,c,e,d,f){var h=this.dotSize,g,k,l;this._canvas?(this._canvas.width=a,this._canvas.height=b):this._canvas=this._initCanvas(a,b);g=this._canvas.getContext("2d");if(f=f||this.backgroundColor)g.fillStyle=f.toCss(!0),g.fillRect(0,0,a,b),g.fill();for(f=c.length-1;0<=f;f--){g.fillStyle=c[f].color.toCss(!0);for(k=c[f].numPoints-1;0<=k;k--)l=this._getRandomPoint(a,
b,e,d),"square"===this.dotShape?g.fillRect(l.x,l.y,h,h):"circle"===this.dotShape&&(g.beginPath(),g.arc(l.x,l.y,h/2,0,2*Math.PI,!0)),g.fill()}return this._canvas.toDataURL()},_initCanvas:function(a,b){var c=r.create("canvas",{id:"canvas",width:a+"px",height:b+"px",style:"position: absolute; left: -10000px; top: 0px;"},null);document.body.appendChild(c);return c},_getRandomInt:function(a,b){return Math.floor(Math.random()*(b-a+1)+a)},_getRandomPoint:function(a,b,c,e){var d={},f=this.outline&&this.outline.width?
this.outline.width:0;if(!0===this.exactCount&&a*b>this._exactCountMinArea){do d.x=this._getRandomInt(c.x,e.x),d.y=this._getRandomInt(e.y,c.y),a=new x(d.x,d.y),a=this._checkPointShapeBounds(a,this.dotSize+f,this._currentGraphic.geometry),!0===a&&(d.x-=c.x,d.y-=e.y);while(!1===a)}else d.x=this._getRandomInt(0,a),d.y=this._getRandomInt(0,b);return d},_checkPointShapeBounds:function(a,b,c){var e=null,e=!1,d=!0,f=0;do{switch(f){case 1:a.x+=b;break;case 2:a.y+=b;break;case 3:a.x-=b}e=this._map.toMap(a);
e=c.contains(e);!1===e&&(d=!1);f+=1}while(3>=f&&!0===d);return e},setDotSize:function(a){0<a&&(this.dotSize=a)},setDotValue:function(a){0<a&&(this.dotValue=a)},setOutline:function(a){this.outline=a},setBackgroundColor:function(a){this.backgroundColor=a},toJson:function(){var a=k.mixin(this.inherited(arguments),{type:"dotDensity",backgroundColor:n.toJsonColor(this.backgroundColor),dotShape:this.dotShape,dotSize:0<this.dotSize?t.px2pt(this.dotSize):0,dotValue:this.dotValue,fields:q.map(this.fields,
function(a){return m.fixJson({color:n.toJsonColor(a.color),name:a.name})}),legendOptions:this.legendOptions&&m.fixJson({backgroundColor:n.toJsonColor(this.legendOptions.backgroundColor),dotCoverage:this.legendOptions.dotCoverage,outline:this.legendOptions.outline&&this.legendOptions.outline.toJson(),valueUnit:this.legendOptions.valueUnit}),outline:this.outline&&this.outline.toJson()});return m.fixJson(a)}});s("extend-esri")&&k.setObject("renderer.DotDensityRenderer",h,u);return h});