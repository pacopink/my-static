// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/SymbolBucket","require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ./Bucket ./Geometry ./style/StyleLayer ./Placement ./GeometryUtils ./TextShaping dojox/string/BidiEngine".split(" "),function(M,N,G,O,H,y,D,E,x,I,J){var K=function(){return function(){}}(),L=function(){return function(x,l,b,f){this.line=l;this.shaping=x;this.iconMosaicItem=b;this.anchor=f}}();(function(){return function(){}})();return function(F){function l(b,
f,d,c,e,a,v,q){F.call(this,b,f);this._markerRatio=1;this._markerVertexBuffer=d;this._markerIndexBuffer=c;this._textVertexBuffer=e;this._textIndexBuffer=a;this._placementEngine=v;this._workerTileHandler=q}G(l,F);Object.defineProperty(l.prototype,"markerIndexStart",{get:function(){return this._markerTriangleElementsStart},enumerable:!0,configurable:!0});Object.defineProperty(l.prototype,"markerIndexCount",{get:function(){return this._markerTriangleElementsNum},enumerable:!0,configurable:!0});Object.defineProperty(l.prototype,
"textIndexStart",{get:function(){return this._textTriangleElementsStart},enumerable:!0,configurable:!0});Object.defineProperty(l.prototype,"textIndexCount",{get:function(){return this._textTriangleElementsNum},enumerable:!0,configurable:!0});Object.defineProperty(l.prototype,"sdfMarker",{get:function(){return!1},enumerable:!0,configurable:!0});l.prototype.copy=function(b,f,d,c,e){e=new l(this.layer,this.zoom,b,f,d,c,e,this._workerTileHandler);e.layerIndex=this.layerIndex;e.layerExtent=this.layerExtent;
e._markerVertexStart=b.index;e._markerTriangleElementsStart=f.index;e._textVertexStart=d.index;e._textTriangleElementsStart=c.index;e._markerTriangleElementsNum=0;e._textTriangleElementsNum=0;e._symbolInstances=this._symbolInstances;e._glyphItems=this._glyphItems;e._textLayout=this._textLayout;e._markerLayout=this._markerLayout;e._isLinePlacement=this._isLinePlacement;e._avoidEdges=this._avoidEdges;return e};l.prototype.getResources=function(b,f,d){var c=this.layer,e=this.zoom;b&&b.setExtent(this.layerExtent);
for(var a=c.getLayoutValue("icon-image",e),v=c.getLayoutValue("text-field",e),q=c.getLayoutValue("text-font",e),c=c.getLayoutValue("text-transform",e),e=[],t=0,r=this._features;t<r.length;t++){var m=r[t],s=m.getGeometry(b);if(s&&0!==s.length){var g=void 0;a&&(g=this._replaceKeys(a,m.values))&&f.add(g);var h=void 0,n=!1;if(v){h=this._replaceKeys(v,m.values);switch(c){case 2:h=h.toLowerCase();break;case 1:h=h.toUpperCase()}l._bidiEngine.hasBidiChar(h)&&(n=void 0,n="rtl"===l._bidiEngine.checkContextual(h)?
"IDNNN":"ICNNN",h=l._bidiEngine.bidiTransform(h,n,"VLYSN"),n=!0);m=h.length;if(0<m){var k=d[q];k||(k=d[q]=new Set);for(var p=0;p<m;p++){var B=h.charCodeAt(p);k.add(B)}}}if(g||h)m=new K,m.sprite=g,m.label=h,m.rtl=n,m.geometry=s,e.push(m)}}this._symbolFeatures=e};l.prototype.processFeatures=function(b,f){b&&b.setExtent(this.layerExtent);var d=this.layer,c=this.zoom,e=this._isLinePlacement=1===d.getLayoutValue("symbol-placement",c),a=this._avoidEdges=d.getLayoutValue("symbol-avoid-edges",c)&&!e,v=8*
d.getLayoutValue("symbol-spacing",c),q=d.getLayoutValue("icon-image",c),t=d.getLayoutValue("text-field",c),r=this._workerTileHandler,m;q&&(this._markerLayout=new D.IconLayout(d,c,e),m=r.getSpriteItems());var s,g;if(t){var h=this._textLayout=new D.TextLayout(d,c,e);s=void 0;h.font&&h.font.length&&(s=h.font[0]);g=0.5;switch(h.anchor){case 5:case 1:case 7:g=0;break;case 6:case 2:case 8:g=1}d=0.5;switch(h.anchor){case 5:case 3:case 6:d=0;break;case 7:case 4:case 8:d=1}c=0.5;switch(h.justify){case 0:c=
0;break;case 2:c=1}var q=24*h.letterSpacing,t=e?0:24*h.maxWidth,n=24*h.lineHeight,h=[24*h.offset[0],24*h.offset[1]];s=r.getGlyphItems(s);g=new I(s,t,n,q,h,g,d,c)}this._markerVertexStart=this._markerVertexBuffer.index;this._markerTriangleElementsStart=this._markerIndexBuffer.index;this._textVertexStart=this._textVertexBuffer.index;this._textTriangleElementsStart=this._textIndexBuffer.index;this._textTriangleElementsNum=this._markerTriangleElementsNum=0;this._symbolInstances=r=[];this._glyphItems=s;
d=this._textLayout;c=1;d&&d.size&&(c=d.size/24);q=d?d.maxAngle*x.C_DEG_TO_RAD:0;t=d?8*d.size:0;n=0;for(h=this._symbolFeatures;n<h.length;n++){var k=h[n],p=void 0;k.sprite&&(p=m[k.sprite]);var B=void 0,w=k.label,u=0;if(w&&(B=g.getShaping(w,k.rtl))&&0<B.length){for(var u=1E30,w=-1E30,z=0,A=B;z<A.length;z++)var y=A[z],u=Math.min(u,y.x),w=Math.max(w,y.x);u=8*(w-u+48)*c}w=0;for(k=k.geometry;w<k.length;w++){z=k[w];y=void 0;e?(B&&(0<B.length&&d&&d.size)&&(A=8*d.size*(2+Math.min(2,4*Math.abs(d.offset[1]))),
l._smoothVertices(z,A)),y=l._findAnchors(z,v,u)):y=[new E.Anchor(z[0].x,z[0].y)];for(A=0;A<y.length;A++){var C=y[A];!(0>C.x||4096<C.x||0>C.y||4096<C.y)&&(!e||!(0<u&&0===d.rotationAlignment)||l._honorsTextMaxAngle(z,C,u,q,t))&&r.push(new L(B,z,p,C))}}}for(e=0;e<r.length;e++)this._processFeature(r[e],s,a)};l.prototype.updateSymbols=function(){this._markerVertexStart=this._markerVertexBuffer.index;this._markerTriangleElementsStart=this._markerIndexBuffer.index;this._textVertexStart=this._textVertexBuffer.index;
this._textTriangleElementsStart=this._textIndexBuffer.index;this._textTriangleElementsNum=this._markerTriangleElementsNum=0;for(var b=this._glyphItems,f=this._avoidEdges,d=0,c=this._symbolInstances;d<c.length;d++)this._processFeature(c[d],b,f)};l.prototype._replaceKeys=function(b,f){return b.replace(/{([^{}]+)}/g,function(b,c){return c in f?f[c]:""})};l.prototype._processFeature=function(b,f,d){var c=b.line,e=b.iconMosaicItem,a=b.shaping,v=b.anchor,q=(b=this._markerLayout)&&!!e,t=!0,r=1;q&&(r=8*(b.size/
(1/this._markerRatio)),t=b.optional||!e);var m=this._textLayout,s=m&&a&&0<a.length,g;g=1;var h=!0;s&&(g=m.size/24,g*=8,h=m.optional||!a||0===a.length);var n=new y.Point(0,-17),k;if(q){k=this._placementEngine.getIconPlacement(v,e,r,c,b,d);if(k.footprint.minzoom===x.C_INFINITY&&!t)return;v.minzoom>k.footprint.minzoom&&(k.footprint.minzoom=v.minzoom)}var p;if(s&&(p=this._placementEngine.getTextPlacement(v,n,a,f,g,c,m,d))){if(p.footprint.minzoom===x.C_INFINITY&&!h)return;v.minzoom>p.footprint.minzoom&&
(p.footprint.minzoom=v.minzoom)}if(!h&&!t||!t&&p&&p.footprint.minzoom!==x.C_INFINITY||!h&&k&&k.footprint.minzoom!==x.C_INFINITY)f=Math.max(k.footprint.minzoom,p.footprint.minzoom),k.footprint.minzoom=f,p.footprint.minzoom=f;p&&p.footprint.minzoom!==x.C_INFINITY&&(m.ignorePlacement||this._placementEngine.add(p),this._addPlacedSymbols(p.shapes,p.footprint.minzoom,this.zoom,!1));k&&k.footprint.minzoom!==x.C_INFINITY&&(b.ignorePlacement||this._placementEngine.add(k),this._addPlacedSymbols(k.shapes,k.footprint.minzoom,
this.zoom,!0))};l.prototype._addPlacedSymbols=function(b,f,d,c){f=Math.max(d+x.log2(f),0);for(var e=0;e<b.length;e++){var a=b[e],v=Math.max(d+x.log2(a.minzoom),f),q=Math.min(d+x.log2(a.maxzoom),25);if(!(q<=v)){var t=a.tl,r=a.tr,m=a.bl,s=a.br,g=a.mosaicRect,h=-a.labelAngle,a=a.anchor,n=c?this._markerVertexBuffer:this._textVertexBuffer,k=c?this._markerIndexBuffer:this._textIndexBuffer,p=n.index,l=g.x,w=g.y,u=l+g.width,g=w+g.height;n.add(a.x,a.y,t.x,t.y,l,w,h,v,q,f);n.add(a.x,a.y,r.x,r.y,u,w,h,v,q,f);
n.add(a.x,a.y,m.x,m.y,l,g,h,v,q,f);n.add(a.x,a.y,s.x,s.y,u,g,h,v,q,f);k.add(p+0,p+1,p+2);k.add(p+1,p+2,p+3);c?this._markerTriangleElementsNum+=6:this._textTriangleElementsNum+=6}}};l._findAnchors=function(b,f,d){f+=d;for(var c=0,e=b.length-1,a=0;a<e;a++)c+=y.Point.distance(b[a],b[a+1]);a=0.5*(d||f);if(c<=a)return[];d=a/c;f=c/Math.max(Math.round(c/f),1);for(var c=0,e=-f/2,v=[],q=b.length-1,a=0;a<q;a++){for(var l=b[a],r=b[a+1],m=r.x-l.x,s=r.y-l.y,g=Math.sqrt(m*m+s*s),h=void 0;e+f<c+g;){var e=e+f,n=
(e-c)/g,k=x.interpolate(l.x,r.x,n),n=x.interpolate(l.y,r.y,n);void 0===h&&(h=Math.atan2(s,m));v.push(new E.Anchor(k,n,h,a,d))}c+=g}return v};l.deviation=function(b,f,d){return Math.atan2((f.x-b.x)*(d.y-f.y)-(f.y-b.y)*(d.x-f.x),(f.x-b.x)*(d.x-f.x)+(f.y-b.y)*(d.y-f.y))};l._honorsTextMaxAngle=function(b,f,d,c,e){var a=0;d/=2;for(var l=new y.Point(f.x,f.y),q=f.segment+1;a>-d;){--q;if(0>q)return!1;a-=y.Point.distance(b[q],l);l=b[q]}a+=y.Point.distance(b[q],b[q+1]);f=[];for(var l=0,t=b.length;a<d;){var r=
b[q],m=void 0;do{++q;if(q===t)return!1;m=b[q]}while(m.isEqual(r));var s=q,g=void 0;do{++s;if(s===t)return!1;g=b[s]}while(g.isEqual(m));r=this.deviation(r,m,g);f.push({deviation:r,distToAnchor:a});for(l+=r;a-f[0].distToAnchor>e;)l-=f.shift().deviation;if(Math.abs(l)>c)return!1;a+=y.Point.distance(m,g)}return!0};l._smoothVertices=function(b,f){if(!(0>=f)){var d=b.length;if(!(3>d)){var c=[],e=0;c.push(0);for(var a=1;a<d;a++)e+=y.Point.distance(b[a],b[a-1]),c.push(e);f=Math.min(f,0.2*e);e=[];e.push(b[0].x);
e.push(b[0].y);var l=b[d-1].x,q=b[d-1].y,a=y.Point.sub(b[0],b[1]);a.normalize();b[0].x+=f*a.x;b[0].y+=f*a.y;a.assignSub(b[d-1],b[d-2]);a.normalize();b[d-1].x+=f*a.x;b[d-1].y+=f*a.y;for(a=1;a<d;a++)c[a]+=f;c[d-1]+=f;for(var t=0.5*f,a=1;a<d-1;a++){for(var r=0,m=0,s=0,g=a-1;0<=g&&!(c[g+1]<c[a]-t);g--){var h=t+c[g+1]-c[a],n=c[g+1]-c[g],k=c[a]-c[g]<t?1:h/n;if(1E-6>Math.abs(k))break;var p=k*k,x=k*h-0.5*p*n,w=k*n/f,u=b[g+1],z=b[g].x-u.x,A=b[g].y-u.y,r=r+w/x*(u.x*k*h+0.5*p*(h*z-n*u.x)-p*k*n*z/3),m=m+w/x*
(u.y*k*h+0.5*p*(h*A-n*u.y)-p*k*n*A/3),s=s+w}for(g=a+1;g<d&&!(c[g-1]>c[a]+t);g++){h=t-c[g-1]+c[a];n=c[g]-c[g-1];k=c[g]-c[a]<t?1:h/n;if(1E-6>Math.abs(k))break;p=k*k;x=k*h-0.5*p*n;w=k*n/f;u=b[g-1];z=b[g].x-u.x;A=b[g].y-u.y;r+=w/x*(u.x*k*h+0.5*p*(h*z-n*u.x)-p*k*n*z/3);m+=w/x*(u.y*k*h+0.5*p*(h*A-n*u.y)-p*k*n*A/3);s+=w}e.push(r/s);e.push(m/s)}e.push(l);e.push(q);for(g=a=0;a<d;a++)b[a].x=e[g++],b[a].y=e[g++]}}};l._bidiEngine=new J;return l}(H)});