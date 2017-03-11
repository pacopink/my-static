// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/arcade/arcadeCompiler","require exports ../geometry/Polygon ../graphic ../geometry/Polyline ../geometry/Point ../geometry/Extent ../geometry/Multipoint ../SpatialReference ./languageUtils ./treeAnalysis ./Dictionary ./Feature ./functions/date ./functions/string ./functions/maths ./functions/geometry ./functions/stats ./ImmutablePathArray ./ImmutablePointArray ../geometry/Geometry".split(" "),function(ja,q,M,N,O,P,T,U,V,d,k,p,w,W,X,Y,Z,$,F,aa,ba){function m(b,a,c){try{return c(b,null,
a)}catch(e){throw e;}}function f(b,a){try{switch(a.type){case "EmptyStatement":return"lc.voidOperation";case "VariableDeclarator":return ca(b,a);case "VariableDeclaration":for(var c=[],e=0;e<a.declarations.length;e++)c.push(f(b,a.declarations[e]));return c.join("\n")+" \n lastStatement\x3d  lc.voidOperation; \n";case "BlockStatement":return Q(b,a);case "FunctionDeclaration":var d=a.id.name.toLowerCase(),n={applicationCache:void 0===b.applicationCache?null:b.applicationCache,spatialReference:b.spatialReference,
console:b.console,symbols:b.symbols,localScope:{_SymbolsMap:{}},depthCounter:b.depthCounter+1,globalScope:b.globalScope};if(64<n.depthCounter)throw Error("Exceeded maximum function depth");for(var c="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement \x3d lc.voidOperation; var lscope \x3d [];\n ",z=0;z<a.params.length;z++){var l=a.params[z].name.toLowerCase(),B=G(l,b);n.localScope._SymbolsMap[l]=B;c+="lscope['"+B+"']\x3darguments["+z.toString()+"];\n"}c+=Q(n,a.body)+"\n return lastStatement; }, runtimeCtx))";
c+="\n lastStatement \x3d lc.voidOperation; \n";void 0!==b.globalScope[d]?e="gscope['"+d+"']\x3d"+c:void 0!==b.globalScope._SymbolsMap[d]?e="gscope['"+b.globalScope._SymbolsMap[d]+"']\x3d"+c:(B=G(d,b),b.globalScope._SymbolsMap[d]=B,e="gscope['"+B+"']\x3d"+c);return e;case "ReturnStatement":var R;R=null===a.argument?"return lc.voidOperation;":"return "+f(b,a.argument)+";";return R;case "IfStatement":if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)throw Error(k.nodeErrorMessage(a.test,
"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var da=f(b,a.test),m=A(b),p="var "+m+" \x3d "+da+";\n if ("+m+" \x3d\x3d\x3d true) {\n"+S(b,a.consequent)+"\n }\n",p=null!==a.alternate?p+("else if ("+m+"\x3d\x3d\x3dfalse)   { \n"+S(b,a.alternate)+"}\n"):p+("else if ("+m+"\x3d\x3d\x3dfalse) { \n lastStatement \x3d lc.voidOperation;\n }\n");return p+="else { lang.error({type: '"+a.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n";case "ExpressionStatement":var s;s="AssignmentExpression"===
a.expression.type?"lastStatement \x3d lc.voidOperation; "+f(b,a.expression)+" \n ":"lastStatement \x3d "+f(b,a.expression)+";";return s;case "AssignmentExpression":return ea(b,a);case "UpdateExpression":return fa(b,a);case "BreakStatement":return"break;";case "ContinueStatement":return"continue;";case "ForStatement":c="lastStatement \x3d lc.voidOperation; \n";null!==a.init&&(c+=f(b,a.init));var q=A(b),t=A(b),c=c+("var "+q+" \x3d true;"),c=c+"\n do { ";null!==a.update&&(c+=" if ("+q+"\x3d\x3d\x3dfalse) {\n "+
f(b,a.update)+"  \n}\n "+q+"\x3dfalse; \n");null!==a.test&&(c+="var "+t+" \x3d "+f(b,a.test)+";",c+="if ("+t+"\x3d\x3d\x3dfalse) { break; } else if ("+t+"!\x3d\x3dtrue) { lang.error({type: '"+a.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n");c+=f(b,a.body);null!==a.update&&(c+="\n "+f(b,a.update));return c+("\n"+q+" \x3d true; \n} while(true);  lastStatement \x3d lc.voidOperation;");case "ForInStatement":var u=A(b),y=A(b),r=A(b),h="var "+u+" \x3d "+f(b,a.right)+";\n";"VariableDeclaration"===
a.left.type&&(h+=f(b,a.left));var v="VariableDeclaration"===a.left.type?a.left.declarations[0].id.name:a.left.name,v=v.toLowerCase(),c="";null!==b.localScope&&(void 0!==b.localScope[v]?c="lscope['"+v+"']":void 0!==b.localScope._SymbolsMap[v]&&(c="lscope['"+b.localScope._SymbolsMap[v]+"']"));""===c&&(void 0!==b.globalScope[v]?c="gscope['"+v+"']":void 0!==b.globalScope._SymbolsMap[v]&&(c="gscope['"+b.globalScope._SymbolsMap[v]+"']"));h+="if ("+u+"\x3d\x3d\x3dnull) {  lastStatement \x3d lc.voidOperation; }\n ";
h+="else if (lc.isArray("+u+") || lc.isString("+u+")) {";h+="var "+y+"\x3d"+u+".length; \n";h+="for(var "+r+"\x3d0; "+r+"\x3c"+y+"; "+r+"++) {\n";h+=c+"\x3d"+r+";\n";h+=f(b,a.body);h+="\n}\n";h+=" lastStatement \x3d lc.voidOperation; \n";h+=" \n}\n";h+="else if (lc.isImmutableArray("+u+")) {";h+="var "+y+"\x3d"+u+".length(); \n";h+="for(var "+r+"\x3d0; "+r+"\x3c"+y+"; "+r+"++) {\n";h+=c+"\x3d"+r+";\n";h+=f(b,a.body);h+="\n}\n";h+=" lastStatement \x3d lc.voidOperation; \n";h+=" \n}\n";h+="else if (( "+
u+" instanceof lang.Dictionary) || ( "+u+" instanceof lang.Feature)) {";h+="var "+y+"\x3d"+u+".keys(); \n";h+="for(var "+r+"\x3d0; "+r+"\x3c"+y+".length; "+r+"++) {\n";h+=c+"\x3d"+y+"["+r+"];\n";h+=f(b,a.body);h+="\n}\n";h+=" lastStatement \x3d lc.voidOperation; \n";h+=" \n}\n";return h+"else { lastStatement \x3d lc.voidOperation; } \n";case "Identifier":return ga(b,a);case "MemberExpression":var w;try{c=void 0,c=!0===a.computed?f(b,a.property):"'"+a.property.name+"'",w="lang.member("+f(b,a.object)+
","+c+")"}catch(F){throw F;}return w;case "Literal":return null===a.value||void 0===a.value?"null":JSON.stringify(a.value);case "ThisExpression":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "CallExpression":try{if("Identifier"!==a.callee.type)throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));var x=a.callee.name.toLowerCase(),e="";null!==b.localScope&&(void 0!==b.localScope[x]?e="lscope['"+x+"']":void 0!==b.localScope._SymbolsMap[x]&&(e="lscope['"+b.localScope._SymbolsMap[x]+
"']"));""===e&&(void 0!==b.globalScope[x]?e="gscope['"+x+"']":void 0!==b.globalScope._SymbolsMap[x]&&(e="gscope['"+b.globalScope._SymbolsMap[x]+"']"));if(""!==e){d="[";for(n=0;n<a.arguments.length;n++)0<n&&(d+=", "),d+=f(b,a.arguments[n]);c="lang.callfunc("+e+","+(d+"]")+",runtimeCtx)"}else throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));}catch(I){throw I;}return c;case "UnaryExpression":var C;try{C="lang.unary("+f(b,a.argument)+",'"+a.operator+"')"}catch(J){throw J;}return C;case "BinaryExpression":var D;
try{D="lang.binary("+f(b,a.left)+","+f(b,a.right)+",'"+a.operator+"')"}catch(K){throw K;}return D;case "LogicalExpression":var E;try{if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)throw Error(k.nodeErrorMessage(a.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)throw Error(k.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));E="lang.logical("+f(b,a.left)+","+f(b,a.right)+
",'"+a.operator+"')"}catch(L){throw L;}return E;case "ConditionalExpression":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":try{c=[];for(e=0;e<a.elements.length;e++)"Literal"===a.elements[e].type?c.push(f(b,a.elements[e])):c.push("lang.aCheck("+f(b,a.elements[e])+",'ArrayExpression')");z="["+c.join(",")+"]"}catch(M){throw M;}return z;case "ObjectExpression":c="lang.dictionary([";for(e=0;e<a.properties.length;e++){var H=a.properties[e],N="Identifier"===H.key.type?
"'"+H.key.name+"'":f(b,H.key),O=f(b,H.value);0<e&&(c+=",");c+="lang.strCheck("+N+",'ObjectExpression'),lang.aCheck("+O+", 'ObjectExpression')"}return c+"])";case "Property":throw Error("Should not get here");case "Array":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));default:throw Error(k.nodeErrorMessage(a,"RUNTIME","UNREOGNISED"));}}catch(P){throw P;}}function fa(b,a){var c=null,e="";if("MemberExpression"===a.argument.type)return c=f(b,a.argument.object),e=!0===a.argument.computed?
f(b,a.argument.property):"'"+a.argument.property.name+"'","lang.memberupdate("+c+","+e+",'"+a.operator+"',"+a.prefix+")";c=a.argument.name.toLowerCase();if(null!==b.localScope){if(void 0!==b.localScope[c])return"lang.update(lscope, '"+c+"','"+a.operator+"',"+a.prefix+")";if(void 0!==b.localScope._SymbolsMap[c])return"lang.update(lscope, '"+b.localScope._SymbolsMap[c]+"','"+a.operator+"',"+a.prefix+")"}if(void 0!==b.globalScope[c])return"lang.update(gscope, '"+c+"','"+a.operator+"',"+a.prefix+")";
if(void 0!==b.globalScope._SymbolsMap[c])return"lang.update(gscope, '"+b.globalScope._SymbolsMap[c]+"','"+a.operator+"',"+a.prefix+")";throw Error("Variable not recognised");}function ea(b,a){var c=f(b,a.right),e=null,d="";if("MemberExpression"===a.left.type)return e=f(b,a.left.object),d=!0===a.left.computed?f(b,a.left.property):"'"+a.left.property.name+"'","lang.assignmember("+e+","+d+",'"+a.operator+"',"+c+");";e=a.left.name.toLowerCase();if(null!==b.localScope){if(void 0!==b.localScope[e])return"lscope['"+
e+"']\x3dlang.assign("+c+",'"+a.operator+"', lscope['"+e+"']); ";if(void 0!==b.localScope._SymbolsMap[e])return"lscope['"+b.localScope._SymbolsMap[e]+"']\x3dlang.assign("+c+",'"+a.operator+"', lscope['"+b.localScope._SymbolsMap[e]+"']); "}if(void 0!==b.globalScope[e])return"gscope['"+e+"']\x3dlang.assign("+c+",'"+a.operator+"', gscope['"+e+"']); ";if(void 0!==b.globalScope._SymbolsMap[e])return"gscope['"+b.globalScope._SymbolsMap[e]+"']\x3dlang.assign("+c+",'"+a.operator+"', gscope['"+b.globalScope._SymbolsMap[e]+
"']); ";throw Error("Variable not recognised");}function S(b,a){return"BlockStatement"===a.type?f(b,a):"ReturnStatement"===a.type?f(b,a):"BreakStatement"===a.type?f(b,a):"ContinueStatement"===a.type?f(b,a):"UpdateExpression"===a.type?"lastStatement \x3d "+f(b,a)+";":"ExpressionStatement"===a.type?f(b,a):"ObjectExpression"===a.type?"lastStatement \x3d "+f(b,a)+";":f(b,a)}function Q(b,a){for(var c="",e=0;e<a.body.length;e++)c="ReturnStatement"===a.body[e].type?c+(f(b,a.body[e])+" \n"):"BreakStatement"===
a.body[e].type?c+(f(b,a.body[e])+" \n"):"ContinueStatement"===a.body[e].type?c+(f(b,a.body[e])+" \n"):"UpdateExpression"===a.body[e].type?c+("lastStatement \x3d "+f(b,a.body[e])+"; \n"):"ObjectExpression"===a.body[e].type?c+("lastStatement \x3d "+f(b,a.body[e])+"; \n"):c+(f(b,a.body[e])+" \n");return c}function ca(b,a){var c=null===a.init?null:f(b,a.init);c===d.voidOperation&&(c=null);var e=a.id.name.toLowerCase();if(null!==b.localScope){if(void 0!==b.localScope[e])return"lscope['"+e+"']\x3d"+c+";";
if(void 0!==b.localScope._SymbolsMap[e])return"lscope['"+b.localScope._SymbolsMap[e]+"']\x3d"+c+";";var g=G(e,b);b.localScope._SymbolsMap[e]=g;return"lscope['"+g+"']\x3d"+c+";"}if(void 0!==b.globalScope[e])return"gscope['"+e+"']\x3d"+c+";";if(void 0!==b.globalScope._SymbolsMap[e])return"gscope['"+b.globalScope._SymbolsMap[e]+"']\x3d"+c+";";g=G(e,b);b.globalScope._SymbolsMap[e]=g;return"gscope['"+g+"']\x3d"+c+";"}function ha(b,a,c){a=a.toLowerCase();switch(a){case "hasz":return b=b.hasZ,void 0===b?
!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=b.spatialReference._arcadeCacheId,void 0===a&&(c=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&(c=!1),c&&(s++,a=b.spatialReference._arcadeCacheId=s)),b=new p({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=
b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=d.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(s++,a=s,d.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new F(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=
d.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(s++,a=s,d.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new F(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;case "multipoint":switch(a){case "points":return a=d.isVersion4?b.cache._arcadeCacheId:b.getCacheValue("_arcadeCacheId"),void 0===a&&(s++,a=s,d.isVersion4?b.cache._arcadeCacheId=a:b.setCacheValue("_arcadeCacheId",a)),b=new aa(b.points,b.spatialReference,
!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(k.nodeErrorMessage(c,"RUNTIME","PROPERTYNOTFOUND"));}function ga(b,a){try{var c=a.name.toLowerCase();if(null!==b.localScope){if(void 0!==b.localScope[c])return"lscope['"+c+"']";if(void 0!==b.localScope._SymbolsMap[c])return"lscope['"+b.localScope._SymbolsMap[c]+"']"}if(void 0!==b.globalScope[c])return"gscope['"+c+"']";if(void 0!==b.globalScope._SymbolsMap[c])return"gscope['"+b.globalScope._SymbolsMap[c]+"']";throw Error(k.nodeErrorMessage(a,
"RUNTIME","VARIABLENOTFOUND"));}catch(e){throw e;}}function I(b){return null===b?"":d.isArray(b)||d.isImmutableArray(b)?"Array":d.isDate(b)?"Date":d.isString(b)?"String":d.isBoolean(b)?"Boolean":d.isNumber(b)?"Number":b instanceof p?"Dictionary":b instanceof w?"Feature":b instanceof P?"Point":b instanceof M?"Polygon":b instanceof O?"Polyline":b instanceof U?"Multipoint":b instanceof T?"Extent":d.isFunctionParameter(b)?"Function":b===d.voidOperation?"":"number"===typeof b&&isNaN(b)?"Number":"Unrecognised Type"}
function C(b,a,c,e){try{if(d.equalityTest(a[c],e))return a[c+1];var g=a.length-c;return 1===g?a[c]:2===g?null:C(b,a,c+2,e)}catch(n){throw n;}}function J(b,a,c,e){try{if(!0===e)return a[c+1];if(3===a.length-c)return a[c+2];var g=a[c+2];if(!1===d.isBoolean(g))throw Error("WHEN needs boolean test conditions");return J(b,a,c+2,g)}catch(n){throw n;}}function t(b,a){var c=b.length,e=Math.floor(c/2);if(0===c)return[];if(1===c)return[b[0]];for(var d=t(b.slice(0,e),a),c=t(b.slice(e,c),a),e=[];0<d.length||
0<c.length;)if(0<d.length&&0<c.length){var n=a(d[0],c[0]);isNaN(n)&&(n=0);0>=n?(e.push(d[0]),d=d.slice(1)):(e.push(c[0]),c=c.slice(1))}else 0<d.length?(e.push(d[0]),d=d.slice(1)):0<c.length&&(e.push(c[0]),c=c.slice(1));return e}function G(b,a){a.symbols.symbolCounter++;return"_T"+a.symbols.symbolCounter.toString()}function A(b){b.symbols.symbolCounter++;return"_Tvar"+b.symbols.symbolCounter.toString()}function ia(b,a,c){var d={};b||(b={});c||(c={});d._SymbolsMap={};d.textformatting=1;d.infinity=1;
d.pi=1;for(var g in a)d[g]=1;for(g in c)d[g]=1;for(g in b)d[g]=1;return d}function D(b){console.log(b)}var s=0,l={};W.registerFunctions(l,m);X.registerFunctions(l,m);Y.registerFunctions(l,m);Z.registerFunctions(l,m);$.registerFunctions(l,m);l["typeof"]=function(b,a){return m(b,a,function(b,a,g){d.pcCheck(g,1,1);b=I(g[0]);if("Unrecognised Type"===b)throw Error("Unrecognised Type");return b})};l.iif=function(b,a){try{return m(b,a,function(b,a,c){d.pcCheck(c,3,3);if(!1===d.isBoolean(c[0]))throw Error("IF Function must have a boolean test condition");
return c[0]?c[1]:c[2]})}catch(c){throw c;}};l.decode=function(b,a){try{return m(b,a,function(a,c,d){if(2>d.length)throw Error("Missing Parameters");if(2===d.length)return d[1];if(0===(d.length-1)%2)throw Error("Must have a default value result.");return C(b,d,1,d[0])})}catch(c){throw c;}};l.when=function(b,a){try{return m(b,a,function(a,c,f){if(3>f.length)throw Error("Missing Parameters");if(0===f.length%2)throw Error("Must have a default value result.");a=f[0];if(!1===d.isBoolean(a))throw Error("WHEN needs boolean test conditions");
return J(b,f,0,a)})}catch(c){throw c;}};l.top=function(b,a){return m(b,a,function(b,a,g){d.pcCheck(g,2,2);if(d.isArray(g[0]))return d.toNumber(g[1])>=g[0].length?g[0].slice(0):g[0].slice(0,d.toNumber(g[1]));if(d.isImmutableArray(g[0]))return d.toNumber(g[1])>=g[0].length()?g[0].slice(0):g[0].slice(0,d.toNumber(g[1]));throw Error("Top cannot accept this parameter type");})};l.first=function(b,a){return m(b,a,function(b,a,g){d.pcCheck(g,1,1);return d.isArray(g[0])?0===g[0].length?null:g[0][0]:d.isImmutableArray(g[0])?
0===g[0].length()?null:g[0].get(0):null})};l.sort=function(b,a){return m(b,a,function(b,a,g){d.pcCheck(g,1,2);a=g[0];d.isImmutableArray(a)&&(a=a.toArray());if(!1===d.isArray(a))throw Error("Illegal Argument");if(1<g.length){if(!1===d.isFunctionParameter(g[1]))throw Error("Illegal Argument");a=t(a,function(a,d){return K.callfunc(g[1],[a,d],b)})}else{if(0===a.length)return[];for(var f={},k=0;k<a.length;k++){var l=I(a[k]);""!==l&&(f[l]=!0)}if(!0===f.Array||!0===f.Dictionary||!0===f.Feature||!0===f.Point||
!0===f.Polygon||!0===f.Polyline||!0===f.Multipoint||!0===f.Extent||!0===f.Function)return a.slice(0);var k=0,l="",m;for(m in f)k++,l=m;a=1<k||"String"===l?t(a,function(a,b){if(null===a||void 0===a||a===d.voidOperation)return null===b||void 0===b||b===d.voidOperation?0:1;if(null===b||void 0===b||b===d.voidOperation)return-1;var c=d.toString(a),e=d.toString(b);return c<e?-1:c===e?0:1}):"Number"===l?t(a,function(a,b){return a-b}):"Boolean"===l?t(a,function(a,b){return a===b?0:b?-1:1}):"Date"===l?t(a,
function(a,b){return b-a}):a.slice(0)}return a})};for(var E in l)l[E]=new d.NativeFunction(l[E]);var L=function(){};L.prototype=l;q.functionHelper={fixSpatialReference:d.fixSpatialReference,parseArguments:function(b,a){for(var c=[],d=0;d<a.arguments.length;d++)c.push(f(b,a.arguments[d]));return c},standardFunction:m};q.executeScript=function(b,a,c){return b(a,c)};q.extractFieldLiterals=function(b,a){void 0===a&&(a=!1);return k.findFieldLiterals(b,a)};q.validateScript=function(b,a){return k.validateScript(b,
a,"simple")};q.referencesMember=function(b,a){return k.referencesMember(b,a)};q.referencesFunction=function(b,a){return k.referencesFunction(b,a)};var K={error:function(b,a,c){throw Error(k.nodeErrorMessage(b,a,c));},functionDepthchecker:function(b,a){return function(){a.depthCounte++;if(64<a.depthCounter)throw Error("Exceeded maximum function depth");var c=b.apply(this,arguments);a.depthCounte--;return c}},aCheck:function(b,a){if(d.isFunctionParameter(b))throw Error(k.nodeErrorMessage({type:a},"RUNTIME",
"FUNCTIONCONTEXTILLEGAL"));return b===d.voidOperation?null:b},Dictionary:p,Feature:w,dictionary:function(b){for(var a={},c=0;c<b.length;c+=2){if(d.isFunctionParameter(b[c+1]))throw Error("Illegal Argument");if(!1===d.isString(b[c]))throw Error("Illegal Argument");a[b[c].toString()]=b[c+1]===d.voidOperation?null:b[c+1]}b=new p(a);b.immutable=!1;return b},strCheck:function(b,a){if(!1===d.isString(b))throw Error("Illegal Argument");return b},unary:function(b,a){if(d.isBoolean(b)){if("!"===a)return!b;
if("-"===a)return-1*d.toNumber(b);if("+"===a)return 1*d.toNumber(b);throw Error(k.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("-"===a)return-1*d.toNumber(b);if("+"===a)return 1*d.toNumber(b);throw Error(k.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));},logical:function(b,a,c){if(d.isBoolean(b)&&d.isBoolean(a))switch(c){case "||":return b||a;case "\x26\x26":return b&&a;default:throw Error(k.nodeErrorMessage("LogicalExpression",
"RUNTIME","ONLYORORAND"));}else throw Error(k.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));},binary:function(b,a,c){switch(c){case "\x3d\x3d":return d.equalityTest(b,a);case "\x3d":return d.equalityTest(b,a);case "!\x3d":return!d.equalityTest(b,a);case "\x3c":return d.greaterThanLessThan(b,a,c);case "\x3e":return d.greaterThanLessThan(b,a,c);case "\x3c\x3d":return d.greaterThanLessThan(b,a,c);case "\x3e\x3d":return d.greaterThanLessThan(b,a,c);case "+":return d.isString(b)||d.isString(a)?
d.toString(b)+d.toString(a):d.toNumber(b)+d.toNumber(a);case "-":return d.toNumber(b)-d.toNumber(a);case "*":return d.toNumber(b)*d.toNumber(a);case "/":return d.toNumber(b)/d.toNumber(a);case "%":return d.toNumber(b)%d.toNumber(a);default:throw Error(k.nodeErrorMessage({type:"BinaryExpression"},"RUNTIME","OPERATORNOTRECOGNISED"));}},assign:function(b,a,c){switch(a){case "\x3d":return b===d.voidOperation?null:b;case "/\x3d":return d.toNumber(c)/d.toNumber(b);case "*\x3d":return d.toNumber(c)*d.toNumber(b);
case "-\x3d":return d.toNumber(c)-d.toNumber(b);case "+\x3d":return d.isString(c)||d.isString(b)?d.toString(c)+d.toString(b):d.toNumber(c)+d.toNumber(b);case "%\x3d":return d.toNumber(c)%d.toNumber(b);default:throw Error(k.nodeErrorMessage("AssignmentExpression","RUNTIME","OPERATORNOTRECOGNISED"));}},update:function(b,a,c,e){var g=d.toNumber(b[a]);b[a]="++"===c?g+1:g-1;return!1===e?g:"++"===c?g+1:g-1},memberupdate:function(b,a,c,e){var g;if(d.isArray(b))if(d.isNumber(a)){0>a&&(a=b.length+a);if(0>
a||a>=b.length)throw Error("Assignment outside of array bounds");g=d.toNumber(b[a]);b[a]="++"===c?g+1:g-1}else throw Error("Invalid Parameter");else if(b instanceof p){if(!1===d.isString(a))throw Error("Dictionary accessor must be a string");if(!0===b.hasField(a))g=d.toNumber(b.field(a)),b.setField(a,"++"===c?g+1:g-1);else throw Error("Invalid Parameter");}else if(b instanceof w){if(!1===d.isString(a))throw Error("Feature accessor must be a string");if(!0===b.hasField(a))g=d.toNumber(b.field(a)),
b.setField(a,"++"===c?g+1:g-1);else throw Error("Invalid Parameter");}else{if(d.isImmutableArray(b))throw Error("Array is Immutable");throw Error("Invalid Parameter");}return!1===e?g:"++"===c?g+1:g-1},assignmember:function(b,a,c,e){if(d.isArray(b))if(d.isNumber(a)){0>a&&(a=b.length+a);if(0>a||a>b.length)throw Error("Assignment outside of array bounds");if(a===b.length&&"\x3d"!==c)throw Error("Invalid Parameter");b[a]=this.assign(e,c,b[a])}else throw Error("Invalid Parameter");else if(b instanceof
p){if(!1===d.isString(a))throw Error("Dictionary accessor must be a string");if(!0===b.hasField(a))b.setField(a,this.assign(e,c,b.field(a)));else{if("\x3d"!==c)throw Error("Invalid Parameter");b.setField(a,this.assign(e,c,null))}}else if(b instanceof w){if(!1===d.isString(a))throw Error("Feature accessor must be a string");if(!0===b.hasField(a))b.setField(a,this.assign(e,c,b.field(a)));else{if("\x3d"!==c)throw Error("Invalid Parameter");b.setField(a,this.assign(e,c,null))}}else{if(d.isImmutableArray(b))throw Error("Array is Immutable");
throw Error("Invalid Parameter");}},member:function(b,a){if(null===b)throw Error(k.nodeErrorMessage("MemberExpression","RUNTIME","NOTFOUND"));if(b instanceof p||b instanceof w){if(d.isString(a))return b.field(a)}else if(b instanceof ba){if(d.isString(a))return ha(b,a,"MemberExpression")}else if(d.isArray(b)){if(d.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){0>a&&(a=b.length+a);if(a>=b.length||0>a)throw Error(k.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return b[a]}}else if(d.isString(b)){if(d.isNumber(a)&&
isFinite(a)&&Math.floor(a)===a){0>a&&(a=b.length+a);if(a>=b.length||0>a)throw Error(k.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return b[a]}}else if(d.isImmutableArray(b)&&d.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){0>a&&(a=b.length()+a);if(a>=b.length()||0>a)throw Error(k.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return b.get(a)}throw Error(k.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"));},callfunc:function(b,a,c){return b instanceof d.NativeFunction?
b.fn(c,a):b instanceof d.SizzleFunction?b.fn.apply(this,a):b.apply(this,a)}};q.compileScript=function(b,a){void 0===a&&(a=null);null===a&&(a={vars:{},customfunctions:{}});var c={globalScope:ia(a.vars,l,a.customfunctions),localScope:null,console:D,symbols:{symbolCounter:0}},c=f(c,b.body[0].body);""===c&&(c="lc.voidOperation;");var e={lc:d,lang:K,postProcess:function(a){a instanceof d.ReturnResult&&(a=a.value);a instanceof d.ImplicitResult&&(a=a.value);a===d.voidOperation&&(a=null);if(a===d.breakResult)throw Error("Cannot return BREAK");
if(a===d.continueResult)throw Error("Cannot return CONTINUE");if(d.isFunctionParameter(a))throw Error("Cannot return FUNCTION");return a},prepare:function(a,b){b||(b=new V(102100));var c=a.vars,d=a.customfunctions,e=new L;c||(c={});d||(d={});var f=new p({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});f.immutable=!1;e._SymbolsMap={textformatting:1,infinity:1,pi:1};e.textformatting=f;e.infinity=Number.POSITIVE_INFINITY;e.pi=Math.PI;for(var k in d)e[k]=d[k],
e._SymbolsMap[k]=1;for(k in c)e._SymbolsMap[k]=1,e[k]=c[k]instanceof N?new w(c[k]):c[k];return{spatialReference:b,globalScope:e,localScope:null,console:!a.console?D:a.console,symbols:{symbolCounter:0},depthCounter:1,applicationCache:void 0===a.applicationCache?null:a.applicationCache}}};return(new Function("context","spatialReference","var runtimeCtx\x3dthis.prepare(context, spatialReference);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+
c+"\n return lastStatement; } \n return this.postProcess(mainBody());")).bind(e)}});