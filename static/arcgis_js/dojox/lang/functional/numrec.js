//>>built
define("dojox/lang/functional/numrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(b,l,e){b.provide("dojox.lang.functional.numrec");b.require("dojox.lang.functional.lambda");b.require("dojox.lang.functional.util");(function(){var c=e.lang.functional,b=c.inlineLambda,k=["_r","_i"];c.numrec=function(e,f){var d,a,g={};a=function(a){g[a]=1};"string"==typeof f?a=b(f,k,a):(d=c.lambda(f),a="_a.call(this, _r, _i)");var h=c.keys(g);a=new Function(["_x"],
"var _t\x3darguments.callee,_r\x3d_t.t,_i".concat(h.length?","+h.join(","):"",d?",_a\x3d_t.a":"",";for(_i\x3d1;_i\x3c\x3d_x;++_i){_r\x3d",a,"}return _r"));a.t=e;d&&(a.a=d);return a}})()});