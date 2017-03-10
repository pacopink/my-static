// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/geometry/screenUtils","dojo/_base/array dojo/_base/lang dojo/sniff ../kernel ./Point ./ScreenPoint ./Polyline ./Polygon ./Multipoint ./Extent".split(" "),function(B,C,D,F,t,G,x,y,z,A){var H=function(){return 9>D("ie")?function(b,p,q,a,g,d,f,c,h){var e=[],k=Math.round,s,r=f.length,l,m,u,n,v,w;for(s=0;s<r;s++)if(l=f[s],n=c?c(l[0][0],l[0][1],h):l[0],1<(u=l.length)){v=k((n[0]-b)*q+g);w=k((p-n[1])*a+d);n=c?c(l[1][0],l[1][1],h):l[1];m=k((n[0]-b)*q+g);n=k((p-n[1])*a+d);e.push("M",v+","+w,"L",
m+","+n);for(m=2;m<u;m++)n=c?c(l[m][0],l[m][1],h):l[m],v=k((n[0]-b)*q+g),w=k((p-n[1])*a+d),e.push(v+","+w)}else v=k((n[0]-b)*q+g),w=k((p-n[1])*a+d),e.push("M",v+","+w);return e}:function(b,p,q,a,g,d,f,c,h,e){var k=[],s,r,l,m,u,n,v=Math.round;s=0;for(l=f?f.length:0;s<l;s++){u=f[s];k.push("M");r=0;for(m=u?u.length:0;r<m;r++)n=c?c(u[r][0],u[r][1],h):u[r],k.push(v((n[0]-b)*q+g)+","+v((p-n[1])*a+d));e||k.push("Z")}return k}}(),E={toScreenPoint:function(b,p,q,a,g){var d=b.spatialReference,f=a.spatialReference,
c=a.x;a=a.y;d&&(f&&!d.equals(f)&&d._canProject(f))&&(d=d.isWebMercator()?t.lngLatToXY(c,a):t.xyToLngLat(c,a,!0),c=d[0],a=d[1]);c=(c-b.xmin)*(p/b.getWidth());a=(b.ymax-a)*(q/b.getHeight());g||(c=Math.round(c),a=Math.round(a));return new G(c,a)},toScreenGeometry:function(b,p,q,a){var g=b.xmin,d=b.ymax,f=p/b.getWidth(),c=q/b.getHeight(),h=B.forEach,e=Math.round;if(a instanceof t)return new t(e((a.x-g)*f),e((d-a.y)*c));if(a instanceof z){b=new z;var k=b.points;h(a.points,function(a,b){k[b]=[e((a[0]-g)*
f),e((d-a[1])*c)]});return b}if(a instanceof A)return new A(e((a.xmin-g)*f),e((d-a.ymin)*c),e((a.xmax-g)*f),e((d-a.ymax)*f));if(a instanceof x){b=new x;var s=b.paths,r;h(a.paths,function(a,b){r=s[b]=[];h(a,function(a,b){r[b]=[e((a[0]-g)*f),e((d-a[1])*c)]})});return b}if(a instanceof y){b=new y;var l=b.rings,m;h(a.rings,function(a,b){m=l[b]=[];h(a,function(a,b){m[b]=[e((a[0]-g)*f),e((d-a[1])*c)]})});return b}},_toScreenPath:function(b,p,q,a,g,d){var f=a instanceof x,c=b.spatialReference,h=a.spatialReference,
e,k;c&&(h&&!c.equals(h)&&c._canProject(h))&&(c.isWebMercator()?e=t.lngLatToXY:(e=t.xyToLngLat,k=!0));return H(b.xmin,b.ymax,p/b.getWidth(),q/b.getHeight(),g,d,f?a.paths:a.rings,e,k,f)},toMapPoint:function(b,p,q,a){return new t(b.xmin+a.x/(p/b.getWidth()),b.ymax-a.y/(q/b.getHeight()),b.spatialReference)},toMapGeometry:function(b,p,q,a){var g=b.xmin,d=b.ymax,f=b.spatialReference,c=p/b.getWidth(),h=q/b.getHeight(),e=B.forEach;if(a instanceof t)return new t(g+a.x/c,d-a.y/h,f);if(a instanceof z){b=new z(f);
var k=b.points;e(a.points,function(a,b){k[b]=[g+a[0]/c,d-a[1]/h]});return b}if(a instanceof A)return new A(g+a.xmin/c,d-a.ymin/h,g+a.xmax/c,d-a.ymax/h,f);if(a instanceof x){b=new x(f);var s=b.paths,r;e(a.paths,function(a,b){r=s[b]=[];e(a,function(a,b){r[b]=[g+a[0]/c,d-a[1]/h]})});return b}if(a instanceof y){b=new y(f);var l=b.rings,m;e(a.rings,function(a,b){m=l[b]=[];e(a,function(a,b){m[b]=[g+a[0]/c,d-a[1]/h]})});return b}}};D("extend-esri")&&C.mixin(C.getObject("geometry",!0,F),E);return E});