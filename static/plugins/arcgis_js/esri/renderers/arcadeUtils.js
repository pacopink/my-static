// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/renderers/arcadeUtils",["dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../arcade/arcade"],function(g,h,m,n,e){var k={vars:{$feature:"any",$view:"any"}},l=/^\$feature\./i,f={createSyntaxTree:function(a,b){b=b||g.clone(k);var c;try{c=a?e.parseScript(a,b):null}catch(d){c=null}return c},createFunction:function(a,b){b=b||g.clone(k);var c="string"===typeof a?f.createSyntaxTree(a,b):a,d;try{d=c?e.compileScript(c,b):null}catch(p){d=null}return d},createExecContext:function(a,b){return{vars:{$feature:e.constructFeature(a),
$view:b}}},evalSyntaxTree:function(a,b){return e.executeScript(a,b,-1)},executeFunction:function(a,b){return a?a(b,-1):null},extractFieldNames:function(a,b){var c="string"===typeof a?f.createSyntaxTree(a,b):a,c=e.extractFieldLiterals(c),d=[];h.forEach(c,function(a){l.test(a)&&(a=a.replace(l,""),d.push(a))});d.sort();return h.filter(d,function(a,b){return 0===b||d[b-1]!==a})},dependsOnView:function(a){return e.referencesMember(a,"$view")}};m("extend-esri")&&g.setObject("renderer.arcadeUtils",f,n);
return f});