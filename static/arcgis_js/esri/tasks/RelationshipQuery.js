// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/tasks/RelationshipQuery",["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel"],function(a,e,f,g,h){a=a(null,{declaredClass:"esri.tasks.RelationshipQuery",definitionExpression:"",relationshipId:null,returnGeometry:!1,objectIds:null,outSpatialReference:null,outFields:null,toJson:function(){var b={definitionExpression:this.definitionExpression,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},
a=this.objectIds,d=this.outFields,c=this.outSpatialReference;a&&(b.objectIds=a.join(","));d&&(b.outFields=d.join(","));c&&(b.outSR=c.wkid||f.toJson(c.toJson()));b._ts=this._ts;return b}});g("extend-esri")&&e.setObject("tasks.RelationshipQuery",a,h);return a});