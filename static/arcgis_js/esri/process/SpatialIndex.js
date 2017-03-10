// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/process/SpatialIndex","../sniff ../kernel dojo/_base/declare dojo/Deferred dojo/_base/lang ./Processor ../workers/WorkerClient ../layers/FeatureLayer".split(" "),function(q,r,e,l,n,s,p,t){e=e([s],{declaredClass:"esri.process.SpatialIndex",index:null,indexType:"rtree",workerCallback:["./scripts/helpers","./scripts/indexInterface","./indexWorker"],autostart:!1,constructor:function(a){a=a||{};n.mixin(this,a);if(!this.fetchWithWorker){var b=this;this.workerClient=new p("./mutableWorker",
function(){b.workerCallback.push("./libs/"+b.indexType);b.workerClient.importScripts(b.workerCallback).then(function(){b._attachedSystem=!0;b.autostart&&b.start()})},!0)}this._featCache={}},addLayer:function(a,b){if(a.graphics&&a.graphics.length||b||a.isInstanceOf(t)){var d=this.workerClient;if(!this._attachedSystem&&d.worker){var h=this;this.inherited(arguments,[a,!0]);d.importScripts("./libs/"+this.indexType).then(function(){h.runProcess(a.graphics,a.id);h._attachedSystem=!0})}else this.inherited(arguments,
[a])}},unsetMap:function(){this.stop();this.workerClient.terminate();this.fetchWithWorker||(this.workerClient=new p(this.workerCallback,function(){},!0));this.inherited(arguments);this.start()},removeLayer:function(a){this.inherited(arguments)},runProcess:function(a,b){if(a&&a.length){var d=this,h=this.workerClient,c=a[0]._graphicsLayer;!b&&0!==b&&(b=c?c.id:"rawFeatures_"+Object.keys(this._featCache).length);this._featCache[b]||(this._featCache[b]={});for(var f,g,m=[],k=a.length,e=c&&c.objectIdField;k--;)if(g=
a[k],f=g.attributes&&e?g.attributes[e]:g.id,null==f||!this._featCache[b][f])this._featCache[b][f]=1,g.declaredClass?m.push({id:f,geometry:g.geometry,attributes:g.attributes}):m.push(g);h.postMessage({insert:m,system:this.indexType,options:this.indexOptions,idField:c&&c.objectIdField,layerId:b}).then(function(a){c&&c.emit("process-end",{processor:d,results:{insert:a.insert}})});c&&c.emit("process-start",{processor:this})}},_sendFeaturesFromLayer:function(a,b){var d=b.graphic,h=this.workerClient,c=
this,f=d.attributes[a.objectIdField];this._featCache[a.id]||(this._featCache[a.id]={});this._featCache[a.id][f]||(this._featCache[a.id][f]=1,h.postMessage({insert:[{attributes:d.attributes,geometry:d.geometry}],system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:c,results:{insert:b.insert}})}),a.emit("process-start",{processor:c}))},_notifyProcessStart:function(a,b){},_sendFeaturesFromTask:function(a,b){var d=b.featureSet.features,
h=[],c=this.workerClient,f=this,g=d.length,e,k;for(this._featCache[a.id]||(this._featCache[a.id]={});g--;)k=d[g],e=k.attributes[a.objectIdField],this._featCache[a.id][e]||(this._featCache[a.id][e]=1,h.push(k));c.postMessage({insert:h,system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:f,results:{insert:b.insert}})});a.emit("process-start",{processor:f})},get:function(){},intersects:function(a,b,d){return"rtree"!=this.indexType?
(console.error("Index.intersects only works with rtree indexes"),a=new l,a.reject({message:"Index.intersects only works with rtree indexes"}),a.promise):a=this.workerClient.postMessage({search:a,layerId:b,returnNode:d})},within:function(a,b,d){if("rtree"!=this.indexType)return console.error("Index.within only works with rtree indexes"),a=new l,a.reject({message:"Index.within only works with rtree indexes"}),a.promise},nearest:function(a){return"kdtree"!=this.indexType?(console.error("Index.nearest only works with kdtree indexes"),
a=new l,a.reject({message:"Index.nearest only works with kdtree indexes"}),a.promise):a=this.workerClient.postMessage({search:a})}});q("extend-esri")&&n.setObject("process.SpatialIndex",e,r);return e});