// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/renderers/Renderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojox/gfx/_base ../kernel ../Color ./arcadeUtils".split(" "),function(s,l,k,y,p,z,q,t){var w=Math.PI,x=1;s=s(null,{declaredClass:"esri.renderer.Renderer",constructor:function(a){this._cache={};if(a&&!a.declaredClass){this.rotationInfo=a.rotationInfo;if(!this.rotationInfo){var b=a.rotationType,c=a.rotationExpression;if(b||c)this.rotationInfo={type:b,expression:c}}this.setRotationInfo(this.rotationInfo);this.setSizeInfo(this._readSizeInfo(a.sizeInfo));
this.setColorInfo(this._readColorInfo(a.colorInfo));this.setOpacityInfo(this._readOpacityInfo(a.transparencyInfo));this.setVisualVariables(this._readVariables(a.visualVariables));this.setAuthoringInfo(a.authoringInfo)}this.getSymbol=l.hitch(this,this.getSymbol)},getSymbol:function(a){},_readSizeInfo:function(a){if(a){var b=a.minSize,c=a.maxSize;b&&(a.minSize="number"===typeof b?p.pt2px(b):this._readSizeInfo(b));c&&(a.maxSize="number"===typeof c?p.pt2px(c):this._readSizeInfo(c));a.stops&&k.forEach(a.stops,
function(a){a.size&&"number"===typeof a.size&&(a.size=p.pt2px(a.size))})}return a},_readColorInfo:function(a){a&&(k.forEach(a.colors,function(b,c){l.isArray(b)&&(a.colors[c]=q.toDojoColor(b))}),k.forEach(a.stops,function(b,c){b.color&&l.isArray(b.color)&&(a.stops[c].color=q.toDojoColor(b.color))}));return a},_readOpacityInfo:function(a){var b;a&&(b=l.mixin({},a),b.transparencyValues&&(b.opacityValues=k.map(b.transparencyValues,function(a){return 1-a/100}),delete b.transparencyValues),b.stops&&(b.stops=
k.map(b.stops,function(a){a=l.mixin({},a);a.opacity=1-a.transparency/100;delete a.transparency;return a})));return b},_readVariables:function(a){a&&(a=k.map(a,function(a){"sizeInfo"===a.type?a=this._readSizeInfo(a):"colorInfo"===a.type?a=this._readColorInfo(a):"transparencyInfo"===a.type&&(a=this._readOpacityInfo(a),a.type="opacityInfo");return a},this));return a},setAuthoringInfo:function(a){this.authoringInfo=a},setRotationInfo:function(a){if(a=this.rotationInfo="string"===typeof a?{field:a}:a){if(a.expression&&
!l.isFunction(a.expression)&&!a.field){var b=a.expression.match(this.rotationRE);b&&b[1]&&(a.field=b[1])}a.rotationType=a.type}return this},rotationRE:/^\[([^\]]+)\]$/i,_processRotationInfo:function(a){return this._createCache(a)},getRotationAngle:function(a,b){var c=this._getVarInfo(b&&b.rotationInfo,"rotationInfo"),d=c.variable,e=this._cache[c.cacheKey],c="arithmetic"===this._getRotationType(d),d=d.field,e=e&&e.compiledFunc,g=a.attributes,f=null;if(d||e)e?f=t.executeFunction(e,t.createExecContext(a,
a._getView())):l.isFunction(d)?f=d.apply(this,arguments):g&&(f=g[d]||0),f="number"===typeof f&&!isNaN(f)?(f+(c?-90:0))*(c?-1:1):null;return f},_getRotationType:function(a){return a&&("rotationInfo"===a.type?a.rotationType:a.type)},_getDataValue:function(a,b,c,d,e){d||(d=this._getVarInfo(b,c),b=d.variable,d=this._cache[d.cacheKey],"sizeInfo"===c&&(d=d.root));return a._getDataValue(b,d,t,e)},setVisualVariables:function(a){var b=this._cache;k.forEach(this.visualVariables,function(a,d){b.hasOwnProperty(d)&&
(b[d]=null)},this);this.visualVariables=a;k.some(a,function(a){return!!a.target})&&a.sort(function(a,b){return a.target===b.target?0:a.target?1:-1});k.forEach(a,function(a,d){"colorInfo"===a.type?b[d]=this._processColorInfo(a):"opacityInfo"===a.type?b[d]=this._processOpacityInfo(a):"sizeInfo"===a.type?b[d]=this._processSizeInfo(a):"rotationInfo"===a.type&&(b[d]=this._processRotationInfo(a))},this);return this},getVisualVariableValues:function(a){var b=this.visualVariables,c;b&&(c=k.map(b,function(b){var c;
switch(b.type){case "sizeInfo":c=this.getSize(a,{sizeInfo:b});break;case "colorInfo":c=this.getColor(a,{colorInfo:b});break;case "opacityInfo":c=this.getOpacity(a,{opacityInfo:b});break;case "rotationInfo":c=this.getRotationAngle(a,{rotationInfo:b})}return{variable:b,value:c}},this));return c},hasVisualVariables:function(a,b){return a?!!this.getVisualVariablesForType(a,b):!(!this.getVisualVariablesForType("sizeInfo",b)&&!this.getVisualVariablesForType("colorInfo",b)&&!this.getVisualVariablesForType("opacityInfo",
b)&&!this.getVisualVariablesForType("rotationInfo",b))},getVisualVariablesForType:function(a,b){var c=this.visualVariables,d;!b&&this[a]?("rotationInfo"===a&&(this[a].rotationType=this[a].type),d=[this[a]]):c&&(d=k.filter(c,function(c){return c.type===a&&("string"===typeof b?c.target===b:!1===b?!c.target:!0)}))&&0===d.length&&(d=void 0);return d},setSizeInfo:function(a){this.sizeInfo=this.proportionalSymbolInfo=a;this._cache.sizeInfo=this._processSizeInfo(a);return this},_processSizeInfo:function(a){return a&&
{root:this._createCache(a),minSize:this._createCache(a.minSize),maxSize:this._createCache(a.maxSize)}},_convertExpressionToArcade:function(a){a&&a.expression&&(a.valueExpression="$view.scale")},_getVarInfo:function(a,b){var c;a&&a.type===b?(c=k.indexOf(this.visualVariables,a),a=this.visualVariables[c]):(c=b,a=this[b]);return{variable:a,cacheKey:c}},setProportionalSymbolInfo:function(a){this.setSizeInfo(a);return this},getSize:function(a,b){var c=this._getVarInfo(b&&b.sizeInfo,"sizeInfo"),d=c.variable,
c=this._cache[c.cacheKey],e=null;if(d)var g=d.minSize,e=d.maxSize,g="object"===typeof g&&g?this._getSize(a,g,c&&c.minSize,b):g,e="object"===typeof e&&e?this._getSize(a,e,c&&c.maxSize,b):e,e=this._getSize(a,d,c&&c.root,b,[g,e]);return e},_getSize:function(a,b,c,d,e){var g=b.stops,f=0,h=c&&c.hasExpr,l=c&&c.ipData,k=c&&c.isScaleDriven,t="object"===typeof a&&!!a,m="number"===typeof a?a:null;if(b.field||k||h){var q=d&&d.scale,h=e?e[0]:b.minSize;e=e?e[1]:b.maxSize;var n=b.minDataValue,p=b.maxDataValue,
u=b.valueUnit||"unknown",s=b.valueRepresentation,x=b.scaleBy,v=d&&d.shape;k?m=q:"number"!==typeof m&&t&&(m=this._getDataValue(a,b,null,c));if(null==m)return null;if(g)h=this._lookupData(m,l),m=h[0],e=h[1],m===e?f=g[m].size:(m=g[m].size,g=g[e].size,f=m+(g-m)*h[2]);else if(null!=h&&null!=e&&null!=n&&null!=p)m<=n?f=h:m>=p?f=e:(g=(m-n)/(p-n),"area"===x&&v?(h=(m="circle"===v)?w*Math.pow(h/2,2):h*h,e=m?w*Math.pow(e/2,2):e*e,g=h+g*(e-h),f=m?2*Math.sqrt(g/w):Math.sqrt(g)):f=h+g*(e-h));else if("unknown"===
u)null!=h&&null!=n&&(h&&n?(g=m/n,f="circle"===v?2*Math.sqrt(g*Math.pow(h/2,2)):"square"===v||"diamond"===v||"image"===v?Math.sqrt(g*Math.pow(h,2)):g*h):f=m+(h||n),f=f<h?h:f,null!=e&&f>e&&(f=e));else{g=(d&&d.resolution?d.resolution:1)*this._meterIn[u];if("area"===s)f=Math.sqrt(m/w)/g,f*=2;else if(f=m/g,"radius"===s||"distance"===s)f*=2;null!=h&&f<h&&(f=h);null!=e&&f>e&&(f=e)}}else f=g&&g[0]&&g[0].size,null==f&&(f=b.minSize);return f=isNaN(f)?0:f},getSizeRangeAtScale:function(a,b){var c,d=this._getVarInfo(a,
"sizeInfo"),e=this._cache[d.cacheKey],g={scale:b};if((a=d.variable)&&b){var d=a.minSize,f=a.maxSize,h=a.stops;h&&h.length?(d=h[0].size,e=h[h.length-1].size):(d="object"===typeof d&&d?this._getSize({},d,e&&e.minSize,g):d,e="object"===typeof f&&f?this._getSize({},f,e&&e.maxSize,g):f);if(null!=d||null!=e)d>e&&(c=e,e=d,d=c),c={minSize:d,maxSize:e}}return c},setColorInfo:function(a){this.colorInfo=a;this._cache.colorInfo=this._processColorInfo(a);return this},prepareForViewChange:function(a){var b;a=a||
this._cache;for(b in a){var c=a[b];a.hasOwnProperty(b)&&(c&&"object"===typeof c)&&(c.hasOwnProperty("version")?c.dependsOnView&&(c.version=x++):this.prepareForViewChange(c))}},_viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,_createCache:function(a){var b=a&&a.valueExpression,c=t.createSyntaxTree(b),d=t.createFunction(c),e=!(!a||!a.expression)||this._viewScaleRE.test(b);return{ipData:this._interpolateData(a),hasExpr:!!b,compiledFunc:d,isScaleDriven:e,dependsOnView:c?t.dependsOnView(c):!1,
version:x++}},_processColorInfo:function(a){a&&(k.forEach(a.colors,function(b,c){l.isArray(b)&&(a.colors[c]=new q(b))}),k.forEach(a.stops,function(b,c){b.color&&l.isArray(b.color)&&(a.stops[c].color=new q(b.color))}));return this._createCache(a)},getColor:function(a,b){var c=this._getVarInfo(b&&b.colorInfo,"colorInfo");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey])},setOpacityInfo:function(a){this.opacityInfo=a;this._cache.opacityInfo=this._processOpacityInfo(a);return this},
_processOpacityInfo:function(a){return this._createCache(a)},getOpacity:function(a,b){var c=this._getVarInfo(b&&b.opacityInfo,"opacityInfo");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],!0)},_getColorComponent:function(a,b,c,d,e){var g="object"===typeof a&&!!a,f=g?a.attributes:null,h=b&&b.field,k="number"===typeof a,r=k?a:null,p=c&&c.hasExpr,m=c&&c.compiledFunc,q=c&&c.ipData,n;if(h||p){var s=b.normalizationField,u=f?parseFloat(f[s]):void 0;"number"!==typeof r&&g&&(p?r=t.executeFunction(m,
t.createExecContext(a,a._getView())):l.isFunction(h)?r=h.apply(this,arguments):f&&(r=f[h]));if(null!=r&&!isNaN(r)&&"number"===typeof r&&(!s||k||!isNaN(u)&&0!==u))!isNaN(u)&&!k&&(r/=u),n=d?this._getOpacity(r,b,q):this._getColor(r,b,q)}else b&&(g=b.stops,d?(n=g&&g[0]&&g[0].opacity,null==n&&(n=b.opacityValues&&b.opacityValues[0])):n=g&&g[0]&&g[0].color||b.colors&&b.colors[0]);e&&(e.data=r,e.value=n);return e||n},_interpolateData:function(a){var b;if(a)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,
d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*e}else a.stops&&(b=k.map(a.stops,function(a){return a.value}));return b},_getOpacity:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.opacityInfo;a&&(c=a[0],d=a[1],c===d?d=this._getOpacValue(b,c):(c=this._getOpacValue(b,c),b=this._getOpacValue(b,d),d=c+(b-c)*a[2]));return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c){a=this._lookupData(a,c);var d;
b=b||this.colorInfo;a&&(d=a[0],c=a[1],d=d===c?this._getColorObj(b,d):q.blendColors(this._getColorObj(b,d),this._getColorObj(b,c),a[2]));return d},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,e=b.length-1;k.some(b,function(b,c){if(a<b)return e=c,!0;d=c;return!1});c=[d,e,(a-b[d])/(b[e]-b[d])]}return c},_meterIn:{inches:1/0.0254,feet:1/0.3048,yards:1/0.9144,miles:1/1609.344,"nautical-miles":1/1852,millimeters:1E3,centimeters:100,
decimeters:10,meters:1,kilometers:0.0010,"decimal-degrees":180/20015077},_writeSizeInfo:function(a){if(a){a=l.mixin({},a);this._convertExpressionToArcade(a);var b=a.minSize,c=a.maxSize;b&&(a.minSize="number"===typeof b?p.px2pt(b):this._writeSizeInfo(b));c&&(a.maxSize="number"===typeof c?p.px2pt(c):this._writeSizeInfo(c));if(b=a.legendOptions)if(a.legendOptions=l.mixin({},b),b=b.customValues)a.legendOptions.customValues=b.slice(0);a.stops&&(a.stops=k.map(a.stops,function(a){a=l.mixin({},a);a.size&&
"number"===typeof a.size&&(a.size=p.px2pt(a.size));return a}))}return a},_writeColorInfo:function(a){a&&(a=l.mixin({},a),a.colors&&(a.colors=k.map(a.colors,function(a){return q.toJsonColor(a)})),a.stops&&(a.stops=k.map(a.stops,function(a){a=l.mixin({},a);a.color&&(a.color=q.toJsonColor(a.color));return a})),a.legendOptions&&(a.legendOptions=l.mixin({},a.legendOptions)));return a},_writeOpacityInfo:function(a){var b;a&&(b=l.mixin({},a),b.opacityValues&&(b.transparencyValues=k.map(b.opacityValues,function(a){return 100*
(1-a)}),delete b.opacityValues),b.stops&&(b.stops=k.map(b.stops,function(a){a=l.mixin({},a);a.transparency=100*(1-a.opacity);delete a.opacity;return a})),b.legendOptions&&(b.legendOptions=l.mixin({},b.legendOptions)));return b},toJson:function(){var a=this.visualVariables,b=l.clone(this.authoringInfo),c=this.getVisualVariablesForType("rotationInfo",!1),d=(c=c&&c[0])&&c.field,e;c&&c===this.rotationInfo&&(e=c.expression||d&&(l.isFunction(d)?d:"["+d+"]"));a&&(a=k.map(a,function(a){"sizeInfo"===a.type?
a=this._writeSizeInfo(a):"colorInfo"===a.type?a=this._writeColorInfo(a):"opacityInfo"===a.type?(a=this._writeOpacityInfo(a),a.type="transparencyInfo"):"rotationInfo"===a.type&&(a=l.mixin({},a));return a},this));b&&k.forEach(b.visualVariables,function(a){"opacityInfo"===a.type&&(a.type="transparencyInfo")});return{rotationType:e&&(this._getRotationType(c)||"geographic"),rotationExpression:e,colorInfo:this._writeColorInfo(this.colorInfo),transparencyInfo:this._writeOpacityInfo(this.opacityInfo),sizeInfo:this._writeSizeInfo(this.sizeInfo),
visualVariables:a,authoringInfo:b}}});y("extend-esri")&&l.setObject("renderer.Renderer",s,z);return s});