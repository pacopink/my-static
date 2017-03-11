// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/QueryDataSource","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ./DataSource ../SpatialReference".split(" "),function(b,c,d,e,f,g,h){b=b(g,{declaredClass:"esri.layers.QueryDataSource",constructor:function(a){a&&(a.oidFields&&c.isString(a.oidFields)&&(this.oidFields=a.oidFields.split(",")),a.spatialReference&&(this.spatialReference=new h(a.spatialReference)))},toJson:function(){var a={type:"queryTable",workspaceId:this.workspaceId,query:this.query,oidFields:this.oidFields&&
this.oidFields.join(),spatialReference:this.spatialReference&&this.spatialReference.toJson()};if(this.geometryType){var b;b="point"===this.geometryType.toLowerCase()?"esriGeometryPoint":"multipoint"===this.geometryType.toLowerCase()?"esriGeometryMultipoint":"polyline"===this.geometryType.toLowerCase()?"esriGeometryPolyline":"polygon"===this.geometryType.toLowerCase()?"esriGeometryPolygon":this.geometryType;a.geometryType=b}return f.fixJson(a)}});d("extend-esri")&&c.setObject("layers.QueryDataSource",
b,e);return b});