// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/geometry","require exports ../../geometry/Geometry ../../geometry/Polygon ../../geometry/Polyline ../../geometry/Point ../../geometry/Extent ../../geometry/Multipoint ../../geometry/jsonUtils ../languageUtils ../Dictionary ../Feature".split(" "),function(x,v,t,p,q,r,u,s,l,d,h,e){v.registerFunctions=function(m,n){m.polygon=function(c,f){return n(c,f,function(b,g,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof h){if(b=d.fixSpatialReference(e.parseGeometryFromDictionary(a[0]),
c.spatialReference),!1===b instanceof p)throw Error("Illegal Parameter");}else b=a[0]instanceof p?l.fromJson(a[0].toJson()):d.fixSpatialReference(new p(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return b})};m.polyline=function(c,f){return n(c,f,function(b,g,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof h){if(b=d.fixSpatialReference(e.parseGeometryFromDictionary(a[0]),
c.spatialReference),!1===b instanceof q)throw Error("Illegal Parameter");}else b=a[0]instanceof q?l.fromJson(a[0].toJson()):d.fixSpatialReference(new q(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return b})};m.point=function(c,f){return n(c,f,function(b,g,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof h){if(b=d.fixSpatialReference(e.parseGeometryFromDictionary(a[0]),
c.spatialReference),!1===b instanceof r)throw Error("Illegal Parameter");}else b=a[0]instanceof r?l.fromJson(a[0].toJson()):d.fixSpatialReference(new r(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return b})};m.multipoint=function(c,f){return n(c,f,function(b,g,a){d.pcCheck(a,1,1);b=null;if(a[0]instanceof h){if(b=d.fixSpatialReference(e.parseGeometryFromDictionary(a[0]),
c.spatialReference),!1===b instanceof s)throw Error("Illegal Parameter");}else b=a[0]instanceof s?l.fromJson(a[0].toJson()):d.fixSpatialReference(new s(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return b})};m.extent=function(c,f){return n(c,f,function(b,g,a){d.pcCheck(a,1,1);b=null;a[0]instanceof h?b=d.fixSpatialReference(e.parseGeometryFromDictionary(a[0]),
c.spatialReference):a[0]instanceof r?(b={xmin:a[0].x,ymin:a[0].y,xmax:a[0].x,ymax:a[0].y,spatialReference:a[0].spatialReference.toJson()},a[0].hasZ?(b.zmin=a[0].z,b.zmax=a[0].z):a[0].hasM&&(b.mmin=a[0].m,b.mmax=a[0].m),b=l.fromJson(b)):b=a[0]instanceof p?l.fromJson(a[0].getExtent().toJson()):a[0]instanceof q?l.fromJson(a[0].getExtent().toJson()):a[0]instanceof s?l.fromJson(a[0].getExtent().toJson()):a[0]instanceof u?l.fromJson(a[0].toJson()):d.fixSpatialReference(new u(JSON.parse(a[0])),c.spatialReference);
if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return b})};m.geometry=function(c,f){return n(c,f,function(b,g,a){d.pcCheck(a,1,1);b=null;b=a[0]instanceof e?d.fixSpatialReference(a[0].geometry,c.spatialReference):a[0]instanceof h?d.fixSpatialReference(e.parseGeometryFromDictionary(a[0]),c.spatialReference):d.fixSpatialReference(l.fromJson(JSON.parse(a[0])),c.spatialReference);
if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return b})};m.feature=function(c,f){return n(c,f,function(b,g,a){if(0===a.length)throw Error("Missing Parameters");b=null;if(1===a.length)if(d.isString(a[0]))b=e.fromJson(JSON.parse(a[0]));else if(a[0]instanceof e)b=new e(a[0]);else if(a[0]instanceof t)b=new e(null,a[0]);else if(a[0]instanceof h)b=a[0].hasField("geometry")?a[0].field("geometry"):
null,g=a[0].hasField("attributes")?a[0].field("attributes"):null,null!==b&&b instanceof h&&(b=e.parseGeometryFromDictionary(b)),null!==g&&(g=e.parseAttributesFromDictionary(g)),b=new e(g,b);else throw Error("Illegal Argument");else{if(2===a.length){g=b=null;if(null!==a[0])if(a[0]instanceof t)b=a[0];else if(b instanceof h)b=e.parseGeometryFromDictionary(a[0]);else throw Error("Illegal Argument");if(null!==a[1])if(a[1]instanceof h)g=e.parseAttributesFromDictionary(a[1]);else throw Error("Illegal Argument");
}else{b=null;g={};if(null!==a[0])if(a[0]instanceof t)b=a[0];else if(b instanceof h)b=e.parseGeometryFromDictionary(a[0]);else throw Error("Illegal Argument");for(var f=1;f<a.length;f+=2){var w=d.toString(a[f]),k=a[f+1];if(null===k||void 0===k||d.isString(k)||isNaN(k)||d.isDate(k)||d.isNumber(k)||d.isBoolean(k)){if(d.isFunctionParameter(k)||!1===d.isSimpleType(k))throw Error("Illegal Argument");g[w]=k===d.voidOperation?null:k}else throw Error("Illegal Argument");}}b=new e(g,b)}b.geometry=d.fixSpatialReference(b.geometry,
c.spatialReference);b.immutable=!1;return b})};m.dictionary=function(c,f){return n(c,f,function(b,c,a){if(0===a.length)throw Error("Missing Parameters");if(0!==a.length%2)throw Error("Missing Parameters");b={};for(c=0;c<a.length;c+=2){var f=d.toString(a[c]),e=a[c+1];if(null===e||void 0===e||d.isString(e)||isNaN(e)||d.isDate(e)||d.isNumber(e)||d.isBoolean(e)){if(d.isFunctionParameter(e))throw Error("Illegal Argument");b[f]=e===d.voidOperation?null:e}else throw Error("Illegal Argument");}a=new h(b);
a.immutable=!1;return a})};m.haskey=function(c,f){return n(c,f,function(b,c,a){d.pcCheck(a,2,2);b=d.toString(a[1]);if(a[0]instanceof e||a[0]instanceof h)return a[0].hasField(b);throw Error("Illegal Argument");})};m.indexof=function(c,e){return n(c,e,function(b,c,a){d.pcCheck(a,2,2);b=a[1];if(d.isArray(a[0])){for(c=0;c<a[0].length;c++)if(d.equalityTest(b,a[0][c]))return c;return-1}if(d.isImmutableArray(a[0])){var e=a[0].length();for(c=0;c<e;c++)if(d.equalityTest(b,a[0].get(c)))return c;return-1}throw Error("Illegal Argument");
})}}});