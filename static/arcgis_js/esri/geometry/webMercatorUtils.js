// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/geometry/webMercatorUtils","dojo/_base/array dojo/_base/lang dojo/has ../kernel ../SpatialReference ./Point".split(" "),function(m,h,p,q,k,e){function f(a,b,d,c){if("point"===a.type){var g=b(a.x,a.y,c);return new a.constructor(g[0],g[1],new k(d))}if("extent"===a.type){var g=b(a.xmin,a.ymin,c),e=b(a.xmax,a.ymax,c);return new a.constructor(g[0],g[1],e[0],e[1],new k(d))}if("polyline"===a.type||"polygon"===a.type){var g="polyline"===a.type,f=[],h;m.forEach(g?a.paths:a.rings,function(a){f.push(h=
[]);m.forEach(a,function(a){h.push(b(a[0],a[1],c))})});return g?new a.constructor({paths:f,spatialReference:new k(d)}):new a.constructor({rings:f,spatialReference:new k(d)})}if("multipoint"===a.type){var l=[];m.forEach(a.points,function(a){l.push(b(a[0],a[1],c))});return new a.constructor({points:l,spatialReference:new k(d)})}}function l(a,b){var d=a&&(null!=a.wkid?a:a.spatialReference),c=b&&(null!=b.wkid?b:b.spatialReference);return!d||!c?!1:c.equals(d)?!0:c._canProject(d)}var n={canProject:l,project:function(a,
b){var d=a&&a.spatialReference,c=b&&(null!=b.wkid?b:b.spatialReference);d&&c?d.equals(c)?a=new a.constructor(a.toJson()):l(d,c)?c.isWebMercator()?a=f(a,e.lngLatToXY,{wkid:102100}):4326===c.wkid&&(a=f(a,e.xyToLngLat,{wkid:4326})):a=null:a=null;return a},lngLatToXY:e.lngLatToXY,xyToLngLat:e.xyToLngLat,geographicToWebMercator:function(a){return f(a,e.lngLatToXY,{wkid:102100})},webMercatorToGeographic:function(a,b){return f(a,e.xyToLngLat,{wkid:4326},b)}};p("extend-esri")&&h.mixin(h.getObject("geometry",
!0,q),n);return n});