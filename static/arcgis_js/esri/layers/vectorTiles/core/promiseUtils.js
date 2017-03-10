// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/promiseUtils",["require","exports","dojo/Deferred","./Error"],function(h,c,f,g){c.eachAlways=function(b){var a=new f,e=[],d=b.length;0===d&&a.resolve(e);b.forEach(function(b){var c={promise:b};e.push(c);b.then(function(a){c.value=a}).otherwise(function(a){c.error=a}).then(function(){--d;0===d&&a.resolve(e)})});return a.promise};c.create=function(b){var a=new f;b(function(b){void 0===b&&(b=null);return a.resolve(b)},a.reject);return a.promise};c.reject=function(b){var a=
new f;a.reject(b);return a.promise};c.resolve=function(b){void 0===b&&(b=null);var a=new f;a.resolve(b);return a.promise};c.after=function(b,a){void 0===a&&(a=null);var e=0,d=new f(function(){e&&(clearTimeout(e),e=0)}),e=setTimeout(function(){d.resolve(a)},b);return d.promise};c.timeout=function(b,a,e){var d=0,c=new f(b.cancel);b.then(function(a){c.isFulfilled()||(c.resolve(a),d&&(clearTimeout(d),d=0))});b.otherwise(function(a){c.isFulfilled()||(c.reject(a),d&&(clearTimeout(d),d=0))});d=setTimeout(function(){c.reject(e||
g("promiseUtils:timeout","The wrapped promise did not resolve within "+a+" ms"))},a);return c.promise};c.wrapCallback=function(b){var a=!1,c=new f(function(){return a=!0});b(function(b){a||c.resolve(b)});return c.promise}});