// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/TileHandler","require exports module dojo/Deferred dojo/promise/all ../../core/workers ../../core/promiseUtils ../../core/requireUtils ../../request ../2d/layers/support/TileKey ./TileIndex ./SpriteMosaic ./SpriteSource ./GlyphMosaic ./GlyphSource ./VectorTileDisplayObject ./GeometryUtils".split(" "),function(r,D,s,t,l,u,h,v,n,q,w,x,y,z,A,B,C){return function(){function c(a,b,d,f){void 0===f&&(f=!1);this.devicePixelRatio=d;this.allowUpdates=f;this._tileIndex=
this._connection=this._glyphMosaic=this._spriteMosaic=null;this._ongoingRequests={};this._vectorTileLayer=a;this._requestUpdate=b}c.prototype.destroy=function(){this.stop();this._vectorTileLayer=this._requestUpdate=null};Object.defineProperty(c.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});c.prototype.start=function(){var a=
this;this.stop();var b=this._vectorTileLayer.styleRepository,d=new y(b.sprite,this.devicePixelRatio);d.devicePixelRatio=devicePixelRatio;var f=d.load().then(function(){a._spriteMosaic=new x(1024,1024);a._spriteMosaic.setSpriteSource(d)}),c=new A(b.glyphs);this._glyphMosaic=new z(1024,1024,c);var e=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),p=u.open(this,v.getAbsMid("./WorkerTileHandler",r,s)).then(function(b){a._connection=b}),g=new t(function(a){f.isFulfilled()||f.cancel();e.isFulfilled()||
e.cancel();p.isFulfilled()||p.cancel()});l([f,e,p]).then(function(d){l(a._connection.broadcast("setLayers",b.styleJSON)).then(function(){g.resolve()})});return this._broadcastPromise=g.promise};c.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel();this._connection&&(this._connection.close(),this._connection=null)};c.prototype.updateTile=function(a,b){if(this.allowUpdates){if(!this._broadcastPromise.isFulfilled()||!this._connection)return h.reject(Error("no connection"));
var d=Math.round(C.degToByte(b.state.rotation));if(a.rotation===d)return null;a.rotation=d;return this._connection.invoke("update",{key:a.id,rotation:d},[],{id:a.workerID}).then(function(b){a.updateSymbolData(b);return a})}};c.prototype.getVectorTileWithLRC=function(a,b,d,c){void 0===c&&(c=0);return this.getVectorTile(q.from(a,b,d,0),{state:{rotation:c}})};c.prototype.getVectorTile=function(a,b){var d=this;if(!this._broadcastPromise.isFulfilled()||!this._connection)return h.reject(Error("no connection"));
var c=this._vectorTileLayer.tileInfo,k=Math.round(b?b.state.rotation:0);if(c.lods.length<=a.level)return h.reject("Cannot create tile for the requested level");var e=this._tileIndex?this._tileIndex.dataKey(a):a;return!e?h.reject(Error("no data")):this._getTileData(this._connection,a,e,k).then(function(b){if(!b||!b.tileData)return h.reject("No data");var g=c.size[0]*c.lods[a.level].resolution,m=c.origin,l=m.x+a.col*g+a.world*d._vectorTileLayer.fullExtent.width,n=l+g,m=m.y-a.row*g,g=m-g;d._requestUpdate();
return new B(a,e,[l,m,n,g],d._vectorTileLayer.tileInfo.size[1],4096,k,b.tileData,d._vectorTileLayer.styleRepository,d._glyphMosaic,d.allowUpdates?b.workerId:-1,d._connection)})};c.prototype.fetchTileData=function(a){a=q.fromId(a);a=this._vectorTileLayer.getTileUrl(a.level,a.row,a.col);return n(a,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(a){return{data:{protobuff:a.data},buffers:[a.data]}})};c.prototype.getSprites=function(a){return h.resolve({data:{spriteItems:this._spriteMosaic.getSpriteItems(a.sprites)}})};
c.prototype.getGlyphs=function(a){return this._glyphMosaic.getGlyphItems(a.tileID,a.font,a.codePoints).then(function(a){return{data:{glyphItems:a}}})};c.prototype.getStyleRepository=function(){return this._vectorTileLayer.styleRepository};c.prototype.getTileIndex=function(){return this._tileIndex};c.prototype._getTileData=function(a,b,c,f){var k=this,e={id:null};if(a=this._ongoingRequests[b.id])return a;a=this._connection.invoke("getTile",{key:b.id,refKey:c.id,rotation:f,cacheTile:this.allowUpdates},
[],e).then(function(a){delete k._ongoingRequests[b.id];return{tileData:a,workerId:e.id}}).otherwise(function(a){delete k._ongoingRequests[b.id];k.allowUpdates&&k._connection.invoke("destructTileData",{key:b.id},[],e);return h.reject(a)});return this._ongoingRequests[b.id]=a};c.prototype._fetchTileMap=function(a){var b=this;return!a?null:n(a,{callbackParamName:"callback",responseType:"json"}).then(function(a){b._tileIndex=new w(a.data)})};return c}()});