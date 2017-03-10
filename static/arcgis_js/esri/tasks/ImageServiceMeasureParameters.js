// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/tasks/ImageServiceMeasureParameters","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(a,c,d,e,f,g){a=a(null,{declaredClass:"esri.tasks.ImageServiceMeasureParameters",fromGeometry:null,toGeometry:null,operation:null,pixelSize:null,mosaicRule:!1,linearUnit:null,angularUnit:null,areaUnit:null,toJson:function(b){var a=b&&b.fromGeometry||this.fromGeometry;b={fromGeometry:a,toGeometry:b&&b.toGeometry||this.toGeometry,measureOperation:this.operation,
mosaicRule:this.mosaicRule?d.toJson(this.mosaicRule.toJson()):null,linearUnit:this.linearUnit,angularUnit:this.angularUnit,areaUnit:this.areaUnit};a&&(b.geometryType=g.getJsonType(a));this.pixelSize&&(b.pixelSize=this.pixelSize?d.toJson(this.pixelSize.toJson()):null);return b}});c.mixin(a,{OPERATION_POINT:"esriMensurationPoint",OPERATION_DISTANCE_ANGLE:"esriMensurationDistanceAndAngle",OPERATION_AREA_PERIMETER:"esriMensurationAreaAndPerimeter",OPERATION_BASE_TOP:"esriMensurationHeightFromBaseAndTop",
OPERATION_BASE_TOP_SHADOW:"esriMensurationHeightFromBaseAndTopShadow",OPERATION_TOP_TOP_SHADOW:"esriMensurationHeightFromTopAndTopShadow",OPERATION_CENTROID:"esriMensurationCentroid",OPERATION_POINT_3D:"esriMensurationPoint3D",OPERATION_DISTANCE_ANGLE_3D:"esriMensurationDistanceAndAngle3D",OPERATION_AREA_PERIMETER_3D:"esriMensurationAreaAndPerimeter3D",OPERATION_CENTROID_3D:"esriMensurationCentroid3D"});e("extend-esri")&&c.setObject("tasks.ImageServiceMeasureParameters",a,f);return a});