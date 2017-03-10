// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/Conflict",["require","exports","./Geometry","./GeometryUtils"],function(l,n,p,q){l=function(){function d(a,b,f,c){this.left=a;this.top=b;this.right=f;this.bottom=c}d.prototype.clone=function(){return new d(this.left,this.top,this.right,this.bottom)};d.prototype.move=function(a,b){this.left+=a;this.top+=b;this.right+=a;this.bottom+=b};d.prototype.rotate=function(a,b){var f=this.left,c=this.right,e=this.top,g=this.bottom,h=f*a-e*b,d=f*b+e*a,k=c*a-e*
b,e=c*b+e*a,m=f*a-g*b,f=f*b+g*a,l=c*a-g*b,c=c*b+g*a;this.left=Math.min(h,k,m,l);this.top=Math.min(d,e,f,c);this.right=Math.max(h,k,m,l);this.bottom=Math.max(d,e,f,c)};d.overlaps=function(a,b){return a.right>b.left&&a.left<b.right&&a.bottom>b.top&&a.top<b.bottom};return d}();n.Box=l;var s=function(){function d(a,b,f,c){this.anchor=a;this.corners=b;this.minzoom=f;this.maxzoom=c}d.prototype.left=function(){return this.corners[0].x};d.prototype.right=function(){return this.corners[2].x};d.prototype.top=
function(){return this.corners[1].y};d.prototype.bottom=function(){return this.corners[3].y};return d}();n.Obstacle=s;l=function(){function d(a,b,f){this.obstacles=[];this.mapAngle=a;this.padding=b;this.isScreenAligned=f;this.minzoom=t}d.prototype.addBox=function(a,b,f,c,e,g){var h=b.left*f-this.padding,d=b.top*f-this.padding,k=b.right*f+this.padding;b=b.bottom*f+this.padding;h=[new p.Point(h,d),new p.Point(k,d),new p.Point(k,b),new p.Point(h,b)];0!==this.mapAngle&&(d=Math.cos(this.mapAngle),k=Math.sin(this.mapAngle),
a=a.clone(),a.rotate(d,k));this.isScreenAligned||(c+=this.mapAngle);if(0!==c){d=Math.cos(c);k=Math.sin(c);h[0].rotate(d,k);h[1].rotate(d,k);h[2].rotate(d,k);h[3].rotate(d,k);c=0;for(d=1;4>d;d++)h[d].x<h[c].x?c=d:h[d].x===h[c].x&&h[d].y<h[c].y&&(c=d);if(c){k=[];for(d=0;4>d;d++)k.push(h[(d+c)%4]);h=k}}this.obstacles.push(new s(a,h,e,g))};return d}();n.Footprint=l;var t=0.5;l=function(){function d(a){this._grid=[];this._angle=a;this._c=Math.cos(a);this._s=Math.sin(a)}d.prototype.add=function(a){var b=
this._grid,f=0;for(a=a.obstacles;f<a.length;f++)for(var c=a[f],e=c.anchor,g=d._gridClamp(Math.min(c.left()+e.x,e.x)),h=d._gridClamp(Math.max(c.right()+e.x,e.x)),l=d._gridClamp(Math.min(c.top()+e.y,e.y)),e=d._gridClamp(Math.max(c.bottom()+e.y,e.y));l<=e;l++)for(var k=g;k<=h;k++){var m=b[16*l+k];m||(m=b[16*l+k]=[]);m.push(c)}};d.prototype.getMinZoom=function(a,b,f,c){if(0===a.obstacles.length)return q.C_INFINITY;f=this._grid;c=0;for(a=a.obstacles;c<a.length;c++)for(var e=a[c],g=e.anchor,h=d._gridClamp(Math.min(e.left()+
g.x,g.x)),l=d._gridClamp(Math.max(e.right()+g.x,g.x)),k=d._gridClamp(Math.min(e.top()+g.y,g.y)),g=d._gridClamp(Math.max(e.bottom()+g.y,g.y));k<=g;k++)for(var m=h;m<=l;m++){var n=f[16*k+m];if(n)for(var p=0;p<n.length;p++){var r=n[p];if(!(e.minzoom>=r.maxzoom||r.minzoom>=e.maxzoom))if(b=d._calcPlacementZoom(e,r,b),2<=b)return q.C_INFINITY}}return 2>b?b:q.C_INFINITY};d._gridClamp=function(a){return q.clamp(a>>9,-7,8)};d._calcPlacementZoom=function(a,b,f){var c=b.anchor.x-a.anchor.x;if(0===c&&(a.right()<
b.left()||b.right()<a.left()))return f;var e=b.anchor.y-a.anchor.y;if(0===e&&(a.bottom()<b.top()||b.bottom()<a.top()))return f;var g=q.C_INFINITY;if(0!==c){var h=(0<c?a.right()-b.left():a.left()-b.right())/c;h<g&&(g=h);c=0<c?d._calcExtZoomX(a,b,h):d._calcExtZoomX(b,a,h);c<g&&(g=c)}0!==e&&(c=(0<e?a.bottom()-b.top():a.top()-b.bottom())/e,c<g&&(g=c),e=0<e?d._calcExtZoomY(a,b,c):d._calcExtZoomY(b,a,c),e<g&&(g=e));if(g<a.minzoom||g<b.minzoom)return f;g=Math.min(g,a.maxzoom,b.maxzoom);g<f&&(g=f);return g};
d._calcExtZoomX=function(a,b,f){var c,e,g;if(a.anchor.y+a.corners[2].y/f<b.anchor.y+b.corners[0].y/f){c=a.corners[2].x-a.corners[3].x;g=a.corners[2].y-a.corners[3].y;var d=b.corners[1].x-b.corners[0].x;e=b.corners[1].y-b.corners[0].y;0<=c*e-g*d?a.anchor.y+a.corners[3].y/f<b.anchor.y+b.corners[0].y/f?(f=a.corners[3],c=b.corners[0],e=b.corners[1],g=1):(f=b.corners[0],c=a.corners[3],e=a.corners[2],g=-1):a.anchor.y+a.corners[2].y/f>b.anchor.y+b.corners[1].y/f?(f=a.corners[2],c=b.corners[0],e=b.corners[1],
g=1):(f=b.corners[1],c=a.corners[3],e=a.corners[2],g=-1)}else c=a.corners[2].x-a.corners[1].x,g=a.corners[2].y-a.corners[1].y,d=b.corners[3].x-b.corners[0].x,e=b.corners[3].y-b.corners[0].y,0>c*e-g*d?a.anchor.y+a.corners[1].y/f>b.anchor.y+b.corners[0].y/f?(f=a.corners[1],c=b.corners[0],e=b.corners[3],g=1):(f=b.corners[0],c=a.corners[1],e=a.corners[2],g=-1):a.anchor.y+a.corners[2].y/f<b.anchor.y+b.corners[3].y/f?(f=a.corners[2],c=b.corners[0],e=b.corners[3],g=1):(f=b.corners[3],c=a.corners[1],e=a.corners[2],
g=-1);d=e.x-c.x;e=e.y-c.y;return g*((f.y-c.y)*d-(f.x-c.x)*e)/((a.anchor.x-b.anchor.x)*e-(a.anchor.y-b.anchor.y)*d)};d._calcExtZoomY=function(a,b,f){var c,e,d;if(a.anchor.x+a.corners[3].x/f<b.anchor.x+b.corners[1].x/f){c=a.corners[3].x-a.corners[2].x;d=a.corners[3].y-a.corners[2].y;var h=b.corners[0].x-b.corners[1].x;e=b.corners[0].y-b.corners[1].y;0>c*e-d*h?a.anchor.x+a.corners[2].x/f<b.anchor.x+b.corners[1].x/f?(f=a.corners[2],c=b.corners[1],e=b.corners[0],d=1):(f=b.corners[1],c=a.corners[2],e=a.corners[3],
d=-1):a.anchor.x+a.corners[3].x/f>b.anchor.x+b.corners[0].x/f?(f=a.corners[3],c=b.corners[1],e=b.corners[0],d=1):(f=b.corners[0],c=a.corners[2],e=a.corners[3],d=-1)}else c=a.corners[3].x-a.corners[0].x,d=a.corners[3].y-a.corners[0].y,h=b.corners[2].x-b.corners[1].x,e=b.corners[2].y-b.corners[1].y,0<c*e-d*h?a.anchor.x+a.corners[0].x/f>b.anchor.x+b.corners[1].x/f?(f=a.corners[0],c=b.corners[1],e=b.corners[2],d=1):(f=b.corners[1],c=a.corners[0],e=a.corners[3],d=-1):a.anchor.x+a.corners[3].x/f<b.anchor.x+
b.corners[2].x/f?(f=a.corners[3],c=b.corners[1],e=b.corners[2],d=1):(f=b.corners[2],c=a.corners[0],e=a.corners[3],d=-1);h=e.x-c.x;e=e.y-c.y;return d*((f.y-c.y)*h-(f.x-c.x)*e)/((a.anchor.x-b.anchor.x)*e-(a.anchor.y-b.anchor.y)*h)};return d}();n.ConflictEngine=l});