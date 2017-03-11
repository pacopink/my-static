// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/layers/support/TileStrategy",["require","exports","../../../../core/LRUCache","./TileKey"],function(B,C,A,u){function n(e,b){e["delete"](b)}var w=[],q=[],k=[null,null],v=[],z=new A(30);return function(){function e(b,g,a,d,c){void 0===c&&(c=null);this.container=b;this.tileInfoView=g;this.requestUpdate=a;this.fetchTile=d;this.tileFilter=c;this._tiles=new Map;this._tilesToRender=new Map;this._requests=new Map;this._updates=new Map;this._prevResolution=Number.POSITIVE_INFINITY;
this._isStationary=!1}e.prototype.destroy=function(){this._requests&&(this._requests.forEach(function(b){b.isFulfilled()||b.cancel()}),this._tilesToRender=this._requests=null)};Object.defineProperty(e.prototype,"updating",{get:function(){return 0!==this._requests.size||0!==this._updates.size},enumerable:!0,configurable:!0});e.prototype.update=function(b){var g=this,a=this._tiles,d=this._tilesToRender,c=this._requests,l=this._updates,t=this.tileInfoView.getTileCoverage(b.state);if(t){var p=t.lodInfo.level,
h=b.state.resolution>this._prevResolution;this._createCoverageList(w,t);var m=this.tileFilter?this.tileFilter([],w):w;d.clear();for(var e=0,x=0;x<m.length;x++){var f=m[x];if(a.has(f)){var r=a.get(f);d.set(f,r);e++;r.attached||h||this._addParentTile(f,d)}else z.has(f)?e++:c.has(f)||this._getTile(f,b),h||this._addParentTile(f,d)}var q=e===m.length;!this._isStationary&&b.stationary&&this.requestUpdate();this._isStationary=b.stationary;var k=[],y=[],s;a.forEach(function(a,b){s=u.from(b);d.has(b)||((h||
!q)&&g.tileInfoView.intersects(t,s)?y.push(b):(s.level>p||!g.tileInfoView.intersects(t,s))&&k.push(b))});for(r=0;r<y.length;r++)f=y[r],d.set(f,a.get(f));for(b=0;b<k.length;b++)f=k[b],l.has(f)&&(l.get(f).cancel(f),n(l,f)),r=a.get(f),r.dispose(),n(a,f);this.container.removeAllChildren();d.forEach(function(a){return g.container.addChild(a)});c.forEach(function(a,b){s=u.from(b);if(s.level>p||!g.tileInfoView.intersects(t,s))a.cancel(),v.push(b)});for(a=0;a<v.length;a++)f=v[a],n(c,f);v.length=0}};e.prototype.updateTiles=
function(b,g){var a=this;this._tilesToRender.forEach(function(d,c){if(d.attached){var l=b(d,g);l&&(a._updates.has(c)&&(a._updates.get(c).cancel(),n(a._updates,c)),l.then(function(b){n(a._updates,c);a._tilesToRender.has(c)&&a._tilesToRender.set(c,b)}).otherwise(function(b){n(a._updates,c);if(b&&"cancel"!==b.dojoType)throw b;}),a._updates.set(c,l))}})};e.prototype._addParentTile=function(b,g){this._getAvailableParentTile(k,b);k[0]&&!g.has(k[0])&&g.set(k[0],k[1])};e.prototype._getTile=function(b,g){var a=
this,d=this.fetchTile(b,g).then(function(c){var d=u.fromId(b);a.tileInfoView.getTileTopLeft(c.topLeft,d);a.tileInfoView.getTileBottomRight(c.bottomRight,d);c.resolution=a.tileInfoView.getTileResolution(d);a._tiles.set(b,c);n(a._requests,b);a.requestUpdate()}).otherwise(function(c){c&&"no data"===c.message&&z.insert(b,b);n(a._requests,b)});this._requests.set(b,d)};e.prototype._getAvailableParentTile=function(b,g){b[0]=null;b[1]=null;for(var a=g;a=this.tileInfoView.getTileParentId(a);)if(this._tiles.has(a)){b[0]=
a;b[1]=this._tiles.get(a);break}return b};e.prototype._createCoverageList=function(b,g){b.length=0;q.length=0;var a=g.spans;if(0!==a.length){for(var d=0,c=0,l=Infinity,e=-Infinity,d=a[0].row,c=a[a.length-1].row,p=0;p<a.length;p++)for(var h=a[p],m=h.colFrom,h=h.colTo;m<=h;m++)l=Math.min(l,m),e=Math.max(e,m);var p=g.lodInfo,m=p.level,c=d+Math.floor((c-d)/2),l=l+Math.floor((e-l)/2),k,h=c-d;0<=h&&h<a.length&&(k=u.from(m,c,p.normalizeCol(l),p.getWorldForColumn(l)),q.push({dist:0,id:k.id}));for(var n,e=
0;e<a.length;e++){h=a[e];d=h.row;m=h.colFrom;for(h=h.colTo;m<=h;m++)n=Math.abs(m-l)+Math.abs(d-c),0!==n&&(k.row=d,k.col=p.normalizeCol(m),k.world=p.getWorldForColumn(m),q.push({dist:n,id:k.id}))}q.sort(function(a,b){return a.dist-b.dist});for(a=0;a<q.length;a++)b.push(q[a].id)}};return e}()});