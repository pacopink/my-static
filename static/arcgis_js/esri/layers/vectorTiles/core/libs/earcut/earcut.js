// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/libs/earcut/earcut",[],function(){function x(a,b,c){c=c||2;v=a.length/c+(b?2*b.length:0);y=!1;var e=b&&b.length,f=e?b[0]*c:a.length,k=H(a,0,f,c,!0),g=[];if(!k)return g;var m,d,s,l;if(e)a:{var h=c,e=[],p,n,t;l=0;for(p=b.length;l<p;l++)n=b[l]*h,t=l<p-1?b[l+1]*h:a.length,n=H(a,n,t,h,!1),n===n.next&&(n.steiner=!0),e.push(L(n));e.sort(M);for(l=0;l<e.length;l++){if(!k){k=null;break a}b=e[l];h=k;if(h=N(b,h))b=I(h,b),z(b,b.next);k=z(k,k.next)}}if(y)return g;if(a.length>
80*c){m=s=a[0];d=e=a[1];for(h=c;h<f;h+=c)l=a[h],b=a[h+1],l<m&&(m=l),b<d&&(d=b),l>s&&(s=l),b>e&&(e=b);s=Math.max(s-m,e-d)}A(k,g,c,m,d,s);return g}function H(a,b,c,e,f){var k;if(f===0<B(a,b,c,e))for(f=b;f<c;f+=e)k=J(f,a[f],a[f+1],k);else for(f=c-e;f>=b;f-=e)k=J(f,a[f],a[f+1],k);k&&w(k,k.next)&&(C(k),k=k.next);return k}function z(a,b){if(!a)return a;b||(b=a);var c=a,e,f=0,k=v*v/2;do{e=!1;if(!c.steiner&&(w(c,c.next)||0===t(c.prev,c,c.next))){C(c);c=b=c.prev;if(c===c.next)return null;e=!0}else c=c.next;
if(f++>k)return y=!0,null}while(e||c!==b);return b}function A(a,b,c,e,f,k,g){if(a){if(!g&&k){var m=a,d=m;do null===d.z&&(d.z=F(d.x,d.y,e,f,k)),d.prevZ=d.prev,d=d.nextZ=d.next;while(d!==m);d.prevZ.nextZ=null;d.prevZ=null;var m=d,s,l,h,p,n,u,q=1;do{d=m;h=m=null;for(p=0;d;){p++;l=d;for(s=n=0;s<q&&!(n++,l=l.nextZ,!l);s++);for(u=q;0<n||0<u&&l;)0===n?(s=l,l=l.nextZ,u--):0===u||!l?(s=d,d=d.nextZ,n--):d.z<=l.z?(s=d,d=d.nextZ,n--):(s=l,l=l.nextZ,u--),h?h.nextZ=s:m=s,s.prevZ=h,h=s;d=l}h.nextZ=null;q*=2}while(1<
p)}for(m=a;a.prev!==a.next;){d=a.prev;l=a.next;if(k)a:{h=a;u=e;var r=f,v=k;p=h.prev;n=h;q=h.next;if(0<=t(p,n,q))h=!1;else{var x=p.x>n.x?p.x>q.x?p.x:q.x:n.x>q.x?n.x:q.x,B=p.y>n.y?p.y>q.y?p.y:q.y:n.y>q.y?n.y:q.y;s=F(p.x<n.x?p.x<q.x?p.x:q.x:n.x<q.x?n.x:q.x,p.y<n.y?p.y<q.y?p.y:q.y:n.y<q.y?n.y:q.y,u,r,v);u=F(x,B,u,r,v);for(r=h.nextZ;r&&r.z<=u;){if(r!==h.prev&&r!==h.next&&E(p.x,p.y,n.x,n.y,q.x,q.y,r.x,r.y)&&0<=t(r.prev,r,r.next)){h=!1;break a}r=r.nextZ}for(r=h.prevZ;r&&r.z>=s;){if(r!==h.prev&&r!==h.next&&
E(p.x,p.y,n.x,n.y,q.x,q.y,r.x,r.y)&&0<=t(r.prev,r,r.next)){h=!1;break a}r=r.prevZ}h=!0}}else h=O(a);if(h)b.push(d.i/c),b.push(a.i/c),b.push(l.i/c),C(a),m=a=l.next;else{if(y)break;a=l;if(a===m){if(g)if(1===g){g=b;m=c;d=a;do l=d.prev,h=d.next.next,!w(l,h)&&(K(l,d,d.next,h)&&D(l,h)&&D(h,l))&&(g.push(l.i/m),g.push(d.i/m),g.push(h.i/m),C(d),C(d.next),d=a=h),d=d.next;while(d!==a);a=d;A(a,b,c,e,f,k,2)}else{if(2===g)a:{g=a;do{for(m=g.next.next;m!==g.prev;){if(d=g.i!==m.i)if(d=g.next.i!==m.i)if(d=g.prev.i!==
m.i){b:{d=g;l=m;h=d;do{if(h.i!==d.i&&h.next.i!==d.i&&h.i!==l.i&&h.next.i!==l.i&&K(h,h.next,d,l)){d=!0;break b}h=h.next}while(h!==d);d=!1}if(d=!d)if(d=D(g,m))if(d=D(m,g)){d=g;l=!1;h=(g.x+m.x)/2;p=(g.y+m.y)/2;do d.y>p!==d.next.y>p&&h<(d.next.x-d.x)*(p-d.y)/(d.next.y-d.y)+d.x&&(l=!l),d=d.next;while(d!==g);d=l}}if(d){a=I(g,m);g=z(g,g.next);a=z(a,a.next);A(g,b,c,e,f,k);A(a,b,c,e,f,k);break a}m=m.next}g=g.next}while(g!==a)}}else A(z(a),b,c,e,f,k,1);break}}}}}function O(a){var b=a.prev,c=a.next;if(0<=t(b,
a,c))return!1;for(var e=a.next.next,f=0;e!==a.prev;){if(E(b.x,b.y,a.x,a.y,c.x,c.y,e.x,e.y)&&0<=t(e.prev,e,e.next))return!1;e=e.next;if(f++>v)return y=!0,!1}return!0}function M(a,b){return a.x-b.x}function N(a,b){var c=b,e=a.x,f=a.y,k=-Infinity,g;do{if(!c)return null;if(f<=c.y&&f>=c.next.y){var m=c.x+(f-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(m<=e&&m>k){k=m;if(m===e){if(f===c.y)return c;if(f===c.next.y)return c.next}g=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!g)return null;if(e===k)return g.prev;
for(var m=g,d=g.x,s=g.y,l=Infinity,h,c=g.next;c!==m;){if(e>=c.x&&c.x>=d&&E(f<s?e:k,f,d,s,f<s?k:e,f,c.x,c.y))if(h=Math.abs(f-c.y)/(e-c.x),(h<l||h===l&&c.x>g.x)&&D(c,a))g=c,l=h;c=c.next}return g}function F(a,b,c,e,f){a=32767*(a-c)/f;b=32767*(b-e)/f;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function L(a){var b=a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function E(a,
b,c,e,f,k,g,m){return 0<=(f-g)*(b-m)-(a-g)*(k-m)&&0<=(a-g)*(e-m)-(c-g)*(b-m)&&0<=(c-g)*(k-m)-(f-g)*(e-m)}function t(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function w(a,b){return a.x===b.x&&a.y===b.y}function K(a,b,c,e){return w(a,b)&&w(c,e)||w(a,e)&&w(c,b)?!0:0<t(a,b,c)!==0<t(a,b,e)&&0<t(c,e,a)!==0<t(c,e,b)}function D(a,b){return 0>t(a.prev,a,a.next)?0<=t(a,b,a.next)&&0<=t(a,a.prev,b):0>t(a,b,a.prev)||0>t(a,a.next,b)}function I(a,b){var c=new G(a.i,a.x,a.y),e=new G(b.i,b.x,b.y),f=a.next,
k=b.prev;a.next=b;b.prev=a;c.next=f;f.prev=c;e.next=c;c.prev=e;k.next=e;e.prev=k;return e}function J(a,b,c,e){a=new G(a,b,c);e?(a.next=e.next,a.prev=e,e.next.prev=a,e.next=a):(a.prev=a,a.next=a);return a}function C(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function G(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function B(a,b,c,e){for(var f=0,k=c-e;b<c;b+=e)f+=(a[k]-a[b])*(a[b+
1]+a[k+1]),k=b;return f}var v,y;x.deviation=function(a,b,c,e){var f=b&&b.length,k=Math.abs(B(a,0,f?b[0]*c:a.length,c));if(f)for(var f=0,g=b.length;f<g;f++)k-=Math.abs(B(a,b[f]*c,f<g-1?b[f+1]*c:a.length,c));for(f=b=0;f<e.length;f+=3){var g=e[f]*c,m=e[f+1]*c,d=e[f+2]*c;b+=Math.abs((a[g]-a[d])*(a[m+1]-a[g+1])-(a[g]-a[m])*(a[d+1]-a[g+1]))}return 0===k&&0===b?0:Math.abs((b-k)/k)};x.flatten=function(a){for(var b=a[0][0].length,c={vertices:[],holes:[],dimensions:b},e=0,f=0;f<a.length;f++){for(var k=0;k<
a[f].length;k++)for(var g=0;g<b;g++)c.vertices.push(a[f][k][g]);0<f&&(e+=a[f-1].length,c.holes.push(e))}return c};return x});