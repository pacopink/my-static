// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/arcade/treeAnalysis",["require","exports"],function(y,r){function s(a,d,b,c){void 0!==a.fmin&&(a.min=a.fmin);void 0!==a.fmax&&(a.max=a.fmax);return"0"!==a.min&&b.length<Number(a.min)||"*"!==a.max&&b.length>Number(a.max)?-2:1}function t(a,d,b){if(null!==b.localScope&&void 0!==b.localScope[a.toLowerCase()]){var c=b.localScope[a.toLowerCase()];if("FormulaFunction"===c.type||"any"===c.type)return void 0===c.signature&&(c.signature={min:"0",max:"*"}),s(c.signature,a,d,b)}return void 0!==b.globalScope[a.toLowerCase()]&&
(c=b.globalScope[a.toLowerCase()],"FormulaFunction"===c.type||"any"===c.type)?(void 0===c.signature&&(c.signature={min:"0",max:"*"}),s(c.signature,a,d,b)):-1}function l(a,d){void 0===d&&(d=!0);var b=f(a,"SYNTAX","UNREOGNISED");try{switch(a.type){case "VariableDeclarator":return null!==a.init&&"FunctionExpression"===a.init.type?f(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==a.id.type?f(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==a.init?l(a.init,!1):"";case "VariableDeclaration":for(var c=
0;c<a.declarations.length;c++)if(b=l(a.declarations[c],d),""!==b)return b;return"";case "ForInStatement":b=l(a.left,d);if(""!==b)break;if("VariableDeclaration"===a.left.type){if(1<a.left.declarations.length)return f(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return f(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return f(a,"SYNTAX","LEFTNOTVAR");b=l(a.right,d);if(""!==b)break;b=l(a.body,d);if(""!==b)break;return"";case "ForStatement":if(null!==a.test&&(b=l(a.test,
d),""!==b))break;if(null!==a.init&&(b=l(a.init,d),""!==b))break;if(null!==a.update&&(b=l(a.update,d),""!==b))break;if(null!==a.body&&(b=l(a.body,d),""!==b))break;return"";case "ContinueStatement":return"";case "EmptyStatement":return"";case "BreakStatement":return"";case "IfStatement":b=l(a.test,d);if(""!==b)break;if(null!==a.consequent&&(b=l(a.consequent,!1),""!==b))break;if(null!==a.alternate&&(b=l(a.alternate,!1),""!==b))break;return"";case "BlockStatement":for(var e=[],c=0;c<a.body.length;c++)"EmptyStatement"!==
a.body[c].type&&e.push(a.body[c]);a.body=e;for(c=0;c<a.body.length;c++)if(b=l(a.body[c],d),""!==b)return b;return"";case "FunctionDeclaration":return!1===d?f(a,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==a.id.type?f(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):l(a.body,!1);case "ReturnStatement":return null!==a.argument?l(a.argument,d):"";case "UpdateExpression":return"Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type?f(a,"SYNTAX","ASSIGNMENTTOVARSONLY"):l(a.argument,d);case "AssignmentExpression":if("Identifier"!==
a.left.type&&"MemberExpression"!==a.left.type)return f(a,"SYNTAX","ASSIGNMENTTOVARSONLY");b=l(a.left,d);if(""!==b)break;switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:return f(a,"SYNTAX","OPERATORNOTRECOGNISED")}return l(a.right,!1);case "ExpressionStatement":return l(a.expression,!1);case "Identifier":b="";break;case "MemberExpression":b=l(a.object,d);if(""!==b)break;return!0===a.computed?l(a.property,d):"";case "Literal":return"";case "ThisExpression":return f(a,
"SYNTAX","NOTSUPPORTED");case "CallExpression":if("Identifier"!==a.callee.type)return f(a,"SYNTAX","ONLYNODESSUPPORTED");b="";for(c=0;c<a.arguments.length;c++)if(b=l(a.arguments[c],d),""!==b)return b;return"";case "UnaryExpression":b=l(a.argument,d);break;case "BinaryExpression":b=l(a.left,d);if(""!==b)break;b=l(a.right,d);if(""!==b)break;switch(a.operator){case "\x3d\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;default:return f(a,
"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "LogicalExpression":b=l(a.left,d);if(""!==b)break;b=l(a.right);if(""!==b)break;switch(a.operator){case "\x26\x26":case "||":break;default:return f(a,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case "ConditionalExpression":return f(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":b="";for(c=0;c<a.elements.length&&!(b=l(a.elements[c],d),""!==b);c++);break;case "Array":return f(a,"SYNTAX","NOTSUPPORTED");case "ObjectExpression":b="";for(c=0;c<a.properties.length&&
!(b="",null!==a.properties[c].key&&("Literal"!==a.properties[c].key.type&&"Identifier"!==a.properties[c].key.type&&(b=f(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===a.properties[c].key.type&&(e=a.properties[c].key.value,"string"===typeof e||e instanceof String||(b=f(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")))),""===b&&(b=l(a.properties[c],d)),""!==b);c++);break;case "Property":if("Literal"!==a.key.type&&"Identifier"!==a.key.type)return f(a,"SYNTAX","ONLYLITERAL");if("Identifier"!==a.key.type&&
(b=l(a.key,d),""!==b))break;b=l(a.value,d)}return b}catch(m){throw m;}}function m(a,d){var b=f(a,"SYNTAX","UNREOGNISED"),c=null,e="";try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type)return f(a,"SYNTAX","FUNCTIONVARIABLEDECLARATOR");null!==d.localScope?void 0!==d.localScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase():void 0!==d.globalScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase();var l=null===a.init?"":m(a.init,d);if(""!==l)return l;null===
d.localScope?d.globalScope[a.id.name.toLowerCase()]={type:"any"}:d.localScope[a.id.name.toLowerCase()]={type:"any"};return"";case "FunctionDeclaration":c=u(a.id.name.toLowerCase(),a,d);e=w(a,d);if(""!==e)return e;if(null!==d.localScope)return f(a,"SYNTAX","GLOBALFUNCTIONSONLY");c.isnative=!1;d.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[c]};return"";case "VariableDeclaration":for(var b="",h=0;h<a.declarations.length&&!(b=m(a.declarations[h],d),""!==b);h++);break;case "IfStatement":b=
m(a.test,d);if(""!==b)break;if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)return f(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION");if(null!==a.consequent&&(b=m(a.consequent,d),""!==b))break;if(null!==a.alternate&&(b=m(a.alternate,d),""!==b))break;return"";case "EmptyStatement":return"";case "BlockStatement":for(h=0;h<a.body.length;h++)if(b=m(a.body[h],d),""!==b)return b;return"";case "ReturnStatement":return null!==a.argument?m(a.argument,d):"";case "ForInStatement":if("VariableDeclaration"===
a.left.type){if(1<a.left.declarations.length)return f(a,"SYNTAX","ONLY1VAR");if(null!==a.left.declarations[0].init)return f(a,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==a.left.type)return f(a,"SYNTAX","LEFTNOTVAR");b=m(a.left,d);if(""!==b)break;b=m(a.right,d);if(""!==b)break;b=m(a.body,d);if(""!==b)break;return"";case "ForStatement":if(null!==a.init&&(b=m(a.init,d),""!==b))break;if(null!==a.test&&(b=m(a.test,d),""!==b))break;if(null!==a.body&&(b=m(a.body,d),""!==b))break;if(null!==a.update&&
(b=m(a.update,d),""!==b))break;return"";case "BreakStatement":return"";case "ContinueStatement":return"";case "UpdateExpression":if("Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type)return f(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var k=!1;if("MemberExpression"===a.argument.type)return m(a.argument,d);null!==d.localScope&&void 0!==d.localScope[a.argument.name.toLowerCase()]&&(k=!0);void 0!==d.globalScope[a.argument.name.toLowerCase()]&&(k=!0);return!1===k?"Identifier "+a.argument.name+
" has not been declared.":"";case "AssignmentExpression":if("Identifier"!==a.left.type&&"MemberExpression"!==a.left.type)return f(a,"SYNTAX","ASSIGNMENTTOVARSONLY");var g=m(a.right,d);if(""!==g)return g;k=!1;if("MemberExpression"===a.left.type)return g=m(a.left,d),""!==g?g:"";null!==d.localScope&&void 0!==d.localScope[a.left.name.toLowerCase()]&&(k=!0);void 0!==d.globalScope[a.left.name.toLowerCase()]&&(k=!0);return!1===k?"Identifier "+a.left.name+" has not been declared.":"";case "ExpressionStatement":return m(a.expression,
d);case "Identifier":var n=a.name.toLowerCase();if(null!==d.localScope&&void 0!==d.localScope[n])return"";b=void 0!==d.globalScope[n]?"":f(a,"SYNTAX","VARIABLENOTFOUND");break;case "MemberExpression":b=m(a.object,d);if(""!==b)break;return!0===a.computed?m(a.property,d):"";case "Literal":return"";case "ThisExpression":b=f(a,"SYNTAX","NOTSUPPORTED");break;case "CallExpression":if("Identifier"!==a.callee.type)return f(a,"SYNTAX","ONLYNODESSUPPORTED");b="";for(h=0;h<a.arguments.length;h++)if(b=m(a.arguments[h],
d),""!==b)return b;var p=t(a.callee.name,a.arguments,d);-1===p&&(b=f(a,"SYNTAX","NOTFOUND"));-2===p&&(b=f(a,"SYNTAX","WRONGSIGNATURE"));break;case "UnaryExpression":b=m(a.argument,d);break;case "BinaryExpression":b=m(a.left,d);if(""!==b)break;b=m(a.right,d);if(""!==b)break;return"";case "LogicalExpression":b=m(a.left,d);if(""!==b)break;if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)return f(a.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION");b=m(a.right,d);if(""!==b)break;
return"AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type?f(a.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"";case "ConditionalExpression":return f(a,"SYNTAX","NOTSUPPORTED");case "ArrayExpression":b="";for(h=0;h<a.elements.length&&!(b=m(a.elements[h],d),""!==b);h++);break;case "ObjectExpression":b="";for(h=0;h<a.properties.length;h++){b="";if(null!==a.properties[h].key&&("Literal"!==a.properties[h].key.type&&"Identifier"!==a.properties[h].key.type&&(b=f(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),
"Literal"===a.properties[h].key.type)){var q=a.properties[h].key.value;"string"===typeof q||q instanceof String||(b=f(a,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}""===b&&(b=m(a.properties[h],d));if(""!==b)break}break;case "Property":if("Literal"!==a.key.type&&"Identifier"!==a.key.type)return f(a,"SYNTAX","ONLYLITERAL");if("Identifier"!==a.key.type&&(b=m(a.key,d),""!==b))break;b=m(a.value,d);break;case "Array":return f(a,"SYNTAX","NOTSUPPORTED")}return b}catch(r){throw r;}}function g(a,d){var b=!1;try{switch(a.type){case "VariableDeclarator":return null!==
a.init?g(a.init,d):b;case "FunctionDeclaration":return g(a.body,d);case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)if(g(a.declarations[c],d))return!0;return b;case "IfStatement":return g(a.test,d)||null!==a.consequent&&g(a.consequent,d)||null!==a.alternate&&g(a.alternate,d)?!0:b;case "EmptyStatement":return b;case "BlockStatement":for(c=0;c<a.body.length;c++)if(g(a.body[c],d))return!0;return b;case "ReturnStatement":return null!==a.argument?g(a.argument,d):b;case "UpdateExpression":return g(a.argument,
d);case "AssignmentExpression":return(b=g(a.right,d))?b:g(a.left,d);case "ExpressionStatement":return g(a.expression,d);case "ForInStatement":return(b=g(a.left,d))||(b=g(a.right,d))?b:b=g(a.body,d);case "ForStatement":if(null!==a.init&&(b=g(a.init,d))||null!==a.test&&(b=g(a.test,d))||null!==a.body&&(b=g(a.body,d)))return b;null!==a.update&&(b=g(a.update,d));return b;case "BreakStatement":return b;case "ContinueStatement":return b;case "Compound":return b;case "Identifier":return d.toLowerCase()===
a.name.toLowerCase();case "MemberExpression":if(b=g(a.object,d))return b;!0===a.computed&&(b=g(a.property,d));return b;case "Literal":return b;case "ThisExpression":return b;case "CallExpression":for(c=0;c<a.arguments.length;c++)g(a.arguments[c],d)&&(b=!0);return b;case "ArrayExpression":for(c=0;c<a.elements.length;c++)g(a.elements[c],d)&&(b=!0);return b;case "UnaryExpression":return g(a.argument,d);case "BinaryExpression":return(b=g(a.left,d))?b:b=g(a.right,d);case "LogicalExpression":return(b=g(a.left,
d))?b:b=g(a.right,d);case "ObjectExpression":for(c=0;c<a.properties.length;c++)g(a.properties[c],d)&&(b=!0);return b;case "Property":return b=g(a.value,d);case "ConditionalExpression":return b;case "Array":return b;default:return b}}catch(e){throw e;}}function n(a,d){var b=!1;try{switch(a.type){case "VariableDeclarator":return null!==a.init?n(a.init,d):b;case "FunctionDeclaration":return n(a.body,d);case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)if(n(a.declarations[c],d))return!0;
return b;case "IfStatement":return n(a.test,d)||null!==a.consequent&&n(a.consequent,d)||null!==a.alternate&&n(a.alternate,d)?!0:b;case "EmptyStatement":return b;case "BlockStatement":for(c=0;c<a.body.length;c++)if(n(a.body[c],d))return!0;return b;case "ReturnStatement":return null!==a.argument?n(a.argument,d):b;case "UpdateExpression":return n(a.argument,d);case "AssignmentExpression":return n(a.left,d)?!0:n(a.right,d);case "ExpressionStatement":return n(a.expression,d);case "ForInStatement":return(b=
n(a.left,d))||(b=n(a.right,d))?b:b=n(a.body,d);case "ForStatement":if(null!==a.init&&(b=n(a.init,d))||null!==a.test&&(b=n(a.test,d))||null!==a.body&&(b=n(a.body,d)))return b;null!==a.update&&(b=n(a.update,d));return b;case "BreakStatement":return b;case "ContinueStatement":return b;case "Compound":return b;case "Identifier":return b;case "MemberExpression":if(b=n(a.object,d))return b;!0===a.computed&&(b=n(a.property,d));return b;case "Literal":return b;case "ThisExpression":return b;case "CallExpression":if(a.callee.name.toLowerCase()===
d.toLowerCase())return!0;for(c=0;c<a.arguments.length;c++)n(a.arguments[c],d)&&(b=!0);return b;case "ArrayExpression":for(c=0;c<a.elements.length;c++)n(a.elements[c],d)&&(b=!0);return b;case "UnaryExpression":return n(a.argument,d);case "BinaryExpression":return(b=n(a.left,d))?b:b=n(a.right,d);case "LogicalExpression":return(b=n(a.left,d))?b:b=n(a.right,d);case "ConditionalExpression":return b;case "ObjectExpression":for(c=0;c<a.properties.length;c++)n(a.properties[c],d)&&(b=!0);return b;case "Property":return b=
n(a.value,d);case "Array":return b;default:return b}}catch(e){throw e;}}function p(a,d){var b=[],c;try{switch(a.type){case "VariableDeclarator":return null!==a.init?p(a.init,d):b;case "FunctionDeclaration":return p(a.body,d);case "VariableDeclaration":for(var e=0;e<a.declarations.length;e++)c=p(a.declarations[e],d),b=b.concat(c);return b;case "ForInStatement":return c=p(a.left,d),b=b.concat(c),c=p(a.right,d),b=b.concat(c),c=p(a.body,d),b=b.concat(c);case "ForStatement":return null!==a.init&&(c=p(a.init,
d),b=b.concat(c)),null!==a.test&&(c=p(a.test,d),b=b.concat(c)),null!==a.body&&(c=p(a.body,d),b=b.concat(c)),null!==a.update&&(c=p(a.update,d),b=b.concat(c)),b;case "IfStatement":return c=p(a.test,d),b=b.concat(c),null!==a.consequent&&(c=p(a.consequent,d),b=b.concat(c)),null!==a.alternate&&(c=p(a.alternate,d),b=b.concat(c)),b;case "EmptyStatement":return b;case "BlockStatement":for(e=0;e<a.body.length;e++)c=p(a.body[e],d),b=b.concat(c);return b;case "ReturnStatement":return null!==a.argument?p(a.argument,
d):b;case "UpdateExpression":return p(a.argument,d);case "AssignmentExpression":return b=p(a.left,d),b=b.concat(p(a.right,d));case "ExpressionStatement":return p(a.expression,d);case "BreakStatement":return b;case "ContinueStatement":return b;case "Compound":return b;case "Identifier":return b;case "MemberExpression":if("Identifier"!==a.object.type)return b;if(!1===a.computed)b.push(a.object.name.toLowerCase()+"."+a.property.name.toLowerCase());else try{"Literal"===a.property.type&&"string"===typeof a.property.value&&
b.push(a.object.name.toLowerCase()+"."+a.property.value.toString().toLowerCase())}catch(f){}return b;case "Literal":return b;case "ThisExpression":return b;case "CallExpression":for(e=0;e<a.arguments.length;e++)c=p(a.arguments[e],d),b=b.concat(c);return b;case "ArrayExpression":for(e=0;e<a.elements.length;e++)c=p(a.elements[e],d),b=b.concat(c);return b;case "UnaryExpression":return p(a.argument,d);case "ObjectExpression":for(e=0;e<a.properties.length;e++)c=p(a.properties[e],d),b=b.concat(c);return b;
case "Property":return p(a.value,d);case "BinaryExpression":return c=p(a.left,d),b=b.concat(c),c=p(a.right,d),b=b.concat(c);case "LogicalExpression":return c=p(a.left,d),b=b.concat(c),c=p(a.right,d),b=b.concat(c);case "ConditionalExpression":return b;case "Array":return b;default:return b}}catch(h){throw h;}}function u(a,d,b){b=[];if(void 0!==d.params&&null!==d.params)for(var c=0;c<d.params.length;c++)b.push("any");return{name:a,"return":"any",params:b}}function w(a,d){for(var b={globalScope:d.globalScope,
localScope:{}},c=0;c<a.params.length;c++)b.localScope[a.params[c].name.toLowerCase()]={type:"any"};return m(a.body,b)}function v(a,d,b,c){var e={};if(void 0===a||null===a)a={};if(void 0===b||null===b)b={};e.infinity={type:"any"};e.textformatting={type:"any"};e.pi={type:"any"};for(var f in d)if("simple"!==c||"simple"===c&&"a"===d[f].av)e[f]={type:"FormulaFunction",signature:d[f]};for(d=0;d<b.length;d++)f=b[d],e[f.name]={type:"FormulaFunction",signature:f};for(f in a)e[f]=a[f],e[f].type="any";return e}
function f(a,d,b){var c="";switch(d){case "SYNTAX":c="Syntax Error: ";break;case "RUNTIME":c="Runtime Error: ";break;default:c="Syntax Error: "}try{switch(a.type){case "IfStatement":switch(b){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":c+=" Assignments not be made in logical tests";break;case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":c+=" Non Boolean used as Condition"}break;case "UpdateExpression":case "AssignmentExpression":switch(b){case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":c+=" Assignments not be made in logical tests";
break;case "ASSIGNMENTTOVARSONLY":c+=" Assignments can only be made to identifiers"}break;case "ExpressionStatement":c+=" Assignments can only be made to identifiers";break;case "FunctionDeclaration":switch(b){case "GLOBALFUNCTIONSONLY":c+=" Functions cannot be declared as variables";break;case "FUNCTIONMUSTHAVEIDENTIFIER":c+=" Function Definition must have an identifier"}break;case "VariableDeclaration":c+=" Only 1 variable can be declared at a time";break;case "VariableDeclarator":switch(b){case "FUNCTIONVARIABLEDECLARATOR":c+=
" Functions cannot be declared as variables";break;case "VARIABLEMUSTHAVEIDENTIFIER":c+=" Variable Definition must have an identifier"}break;case "Identifier":c+=" Identifier Not Found. ";c+=a.name;break;case "ObjectExpression":switch(b){case "OBJECTPROPERTYMUSTBESTRING":c+=" Property name must be a string"}break;case "ForStatement":switch(b){case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":c+=" Non Boolean used as Condition"}break;case "ForInStatement":switch(b){case "ONLY1VAR":c+=" Can only declare 1 var for use with IN";
break;case "CANNOTDECLAREVAL":c+=" Can only declare value for use with IN";break;case "LEFTNOVAR":c+="Must provide a variable to iterate with.";break;case "VARIABLENOTDECLARED":c+="Variable must be declared before it is used..";break;case "CANNOTITERATETHISTYPE":c+="This type cannot be used in an IN loop"}break;case "MemberExpression":switch(b){case "PROPERTYNOTFOUND":c+="Cannot find member property. ";c+=!1===a.computed?a.property.name:"";break;case "OUTOFBOUNDS":c+="Out of Bounds. ";c+=!1===a.computed?
a.property.name:"";break;case "NOTFOUND":c+="Cannot call member method on null. ";c+=!1===a.computed?a.property.name:"";break;case "INVALIDTYPE":c+="Cannot call member property on object of this type. ",c+=!1===a.computed?a.property.name:""}break;case "Property":switch(b){case "ONLYLITERAL":c+="Property names must be literals or identifiers"}break;case "Literal":break;case "ThisExpression":c+="THIS construct is not supported.";case "CallExpression":switch(b){case "WRONGSIGNATURE":c+="Function signature does not match: ";
c+=a.callee.name;break;case "ONLYNODESUPPORTED":c+="Functions must be declared.";c+=a.callee.name;break;case "NOTAFUNCTION":c+="Not a Function: ";c+=a.callee.name;break;case "NOTFOUND":c+="Function Not Found: "+a.callee.name}break;case "UnaryExpression":switch(b){case "NOTSUPPORTEDUNARYOPERATOR":c+="Operator "+a.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case "NOTSUPPORTEDTYPE":c+="Unary operator "+a.operator+" cannot be used with this argument.";
break}case "BinaryExpression":switch(b){case "OPERATORNOTRECOGNISED":c+="Binary Operator not recognised "+a.operator}break;case "LogicalExpression":return"";case "ConditionalExpression":c+="Conditional statements not supported.";break;case "ArrayExpression":switch(b){case "FUNCTIONCONTEXTILLEGAL":c+=" Cannot Put Function inside Array."}break;case "Array":c+="Expression contains unrecognised array structure.";break;default:c+="Expression contains unrecognised code structures."}}catch(e){throw e;}return c}
function q(a,d,b){return{line:a.loc.start.line,character:a.loc.start.column,reason:f(a,d,b)}}function x(a,d,b,c,e){d={globalScope:d.globalScope,localScope:{}};for(e=0;e<a.params.length;e++)d.localScope[a.params[e].name.toLowerCase()]={type:"any"};k(a.body,d,b,c,!1)}function k(a,d,b,c,e){void 0===e&&(e=!0);if(null===a)throw Error("Unnexpexted Expression Syntax");f(a,"SYNTAX","UNREOGNISED");var g=null;try{switch(a.type){case "VariableDeclarator":if(null!==a.init&&"FunctionExpression"===a.init.type){c.push(q(a,
"SYNTAX","FUNCTIONVARIABLEDECLARATOR"));break}"Identifier"!==a.id.type?c.push(q(a,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==d.localScope?void 0!==d.localScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase():void 0!==d.globalScope[a.id.name.toLowerCase()]&&a.id.name.toLowerCase(),null===d.localScope?d.globalScope[a.id.name.toLowerCase()]={type:"any"}:d.localScope[a.id.name.toLowerCase()]={type:"any"});null===a.init?"":k(a.init,d,b,c,e);break;case "FunctionDeclaration":!1===e&&c.push(q(a,"SYNTAX",
"GLOBALFUNCTIONSONLY"));"Identifier"!==a.id.type&&c.push(q(a,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"));g=u("",a,d);x(a,d,b,c,e);null!==d.localScope&&c.push(q(a,"SYNTAX","GLOBALFUNCTIONSONLY"));g.isnative=!1;"Identifier"===a.id.type&&(d.globalScope[a.id.name.toLowerCase()]={type:"FormulaFunction",signature:[g]});break;case "VariableDeclaration":for(var h=0;h<a.declarations.length;h++)k(a.declarations[h],d,b,c,e);break;case "IfStatement":null!==a.test&&(k(a.test,d,b,c,e),("AssignmentExpression"===a.test.type||
"UpdateExpression"===a.test.type)&&c.push(q(a.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));null!==a.consequent&&k(a.consequent,d,b,c,e);null!==a.alternate&&k(a.alternate,d,b,c,e);break;case "EmptyStatement":break;case "BlockStatement":if(null!==a.body)for(h=0;h<a.body.length;h++)k(a.body[h],d,b,c,e);break;case "ReturnStatement":null!==a.argument&&k(a.argument,d,b,c,e);break;case "ForInStatement":"VariableDeclaration"===a.left.type?(1<a.left.declarations.length&&c.push(q(a,"SYNTAX","ONLY1VAR")),
null!==a.left.declarations[0].init&&c.push(q(a,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==a.left.type&&c.push(q(a,"SYNTAX","LEFTNOTVAR"));k(a.left,d,b,c,e);k(a.right,d,b,c,e);k(a.body,d,b,c,e);break;case "ForStatement":null!==a.init&&k(a.init,d,b,c,e);null!==a.test&&k(a.test,d,b,c,e);null!==a.body&&k(a.body,d,b,c,e);null!==a.update&&k(a.update,d,b,c,e);break;case "BreakStatement":break;case "ContinueStatement":break;case "UpdateExpression":"Identifier"!==a.argument.type&&"MemberExpression"!==a.argument.type?
c.push(q(a,"SYNTAX","ASSIGNMENTTOVARSONLY")):("Identifier"===a.argument.type&&(g=!1,!1===b&&(null!==d.localScope&&void 0!==d.localScope[a.argument.name.toLowerCase()]&&(g=!0),void 0!==d.globalScope[a.argument.name.toLowerCase()]&&(g=!0),!1===g&&c.push({line:null===a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Identifier "+a.argument.name+" has not been declared."}))),"MemberExpression"===a.argument.type&&k(a.argument,d,b,c,e));break;case "AssignmentExpression":"Identifier"!==
a.left.type&&"MemberExpression"!==a.left.type&&c.push(q(a,"SYNTAX","ASSIGNMENTTOVARSONLY"));switch(a.operator){case "\x3d":case "/\x3d":case "*\x3d":case "%\x3d":case "+\x3d":case "-\x3d":break;default:c.push(q(a,"SYNTAX","OPERATORNOTRECOGNISED"))}k(a.right,d,b,c,e);g=!1;"Identifier"===a.left.type&&(null!==d.localScope&&void 0!==d.localScope[a.left.name.toLowerCase()]&&(g=!0),void 0!==d.globalScope[a.left.name.toLowerCase()]&&(g=!0),!1===b&&!1===g&&c.push({line:null===a?0:a.loc.start.line,character:null===
a?0:a.loc.start.column,reason:"Identifier "+a.argument.name+" has not been declared."}));"MemberExpression"===a.left.type&&k(a.left,d,b,c,e);break;case "ExpressionStatement":k(a.expression,d,b,c,e);break;case "Identifier":var l=a.name.toLowerCase();if(null!==d.localScope&&void 0!==d.localScope[l])break;if(void 0!==d.globalScope[l])break;else!1===b&&c.push(q(a,"SYNTAX","VARIABLENOTFOUND"));break;case "MemberExpression":k(a.object,d,b,c,e);!0===a.computed&&k(a.property,d,b,c,e);break;case "Literal":return"";
case "ThisExpression":c.push(q(a,"SYNTAX","NOTSUPPORTED"));break;case "CallExpression":"Identifier"!==a.callee.type&&c.push(q(a,"SYNTAX","ONLYNODESSUPPORTED"));for(h=0;h<a.arguments.length;h++)k(a.arguments[h],d,b,c,e);var m=t(a.callee.name,a.arguments,d);!1===b&&-1===m&&c.push(q(a,"SYNTAX","NOTFOUND"));-2===m&&c.push(q(a,"SYNTAX","WRONGSIGNATURE"));break;case "UnaryExpression":k(a.argument,d,b,c,e);break;case "BinaryExpression":k(a.left,d,b,c,e);k(a.right,d,b,c,e);switch(a.operator){case "\x3d\x3d":case "!\x3d":case "\x3c":case "\x3c\x3d":case "\x3e":case "\x3e\x3d":case "+":case "-":case "*":case "/":case "%":break;
default:c.push(q(a,"SYNTAX","OPERATORNOTRECOGNISED"))}break;case "LogicalExpression":switch(a.operator){case "\x26\x26":case "||":break;default:c.push(q(a,"SYNTAX","OPERATORNOTRECOGNISED"))}k(a.left,d,b,c,e);("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)&&c.push(q(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));k(a.right,d,b,c,e);("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)&&c.push(q(a,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));break;
case "ConditionalExpression":c.push(q(a,"SYNTAX","NOTSUPPORTED"));break;case "ArrayExpression":for(h=0;h<a.elements.length;h++)k(a.elements[h],d,b,c,e);break;case "Array":c.push(q(a,"SYNTAX","NOTSUPPORTED"));case "ObjectExpression":for(h=0;h<a.properties.length;h++)k(a.properties[h],d,b,c,e);break;case "Property":"Literal"!==a.key.type&&"Identifier"!==a.key.type&&c.push(q(a,"SYNTAX","ONLYLITERAL"));"Literal"===a.key.type&&k(a.key,d,b,c,e);k(a.value,d,b,c,e);break;default:c.push(q(a,"SYNTAX","UNRECOGNISED"))}}catch(n){c.push({line:null===
a?0:a.loc.start.line,character:null===a?0:a.loc.start.column,reason:"Unnexpected Syntax"})}}r.functionDecls={concatenate:{min:"0",max:"*",av:"a"},split:{min:"2",max:"4",av:"a"},guid:{min:"0",max:"1",av:"a"},today:{min:"0",max:"0",av:"a"},now:{min:"0",max:"0",av:"a"},timestamp:{min:"0",max:"0",av:"a"},day:{min:"1",max:"1",av:"a"},month:{min:"1",max:"1",av:"a"},year:{min:"1",max:"1",av:"a"},hour:{min:"1",max:"1",av:"a"},second:{min:"1",max:"1",av:"a"},millisecond:{min:"1",max:"1",av:"a"},minute:{min:"1",
max:"1",av:"a"},weekday:{min:"1",max:"1",av:"a"},toutc:{min:"1",max:"1",av:"a"},tolocal:{min:"1",max:"1",av:"a"},date:{min:"0",max:"7",av:"a"},datediff:{min:"2",max:"3",av:"a"},dateadd:{min:"2",max:"3",av:"a"},trim:{min:"1",max:"1",av:"a"},text:{min:"1",max:"2",av:"a"},left:{min:"2",max:"2",av:"a"},right:{min:"2",max:"2",av:"a"},mid:{min:"2",max:"3",av:"a"},upper:{min:"1",max:"1",av:"a"},proper:{min:"1",max:"2",av:"a"},lower:{min:"1",max:"1",av:"a"},find:{min:"2",max:"3",av:"a"},iif:{min:"3",max:"3",
av:"a"},decode:{min:"2",max:"*",av:"a"},when:{min:"2",max:"*",av:"a"},defaultvalue:{min:"2",max:"2",av:"a"},isempty:{min:"1",max:"1",av:"a"},maplayer:{min:"2",max:"3",av:"f"},domaincode:{min:"3",max:"4",av:"a"},domainname:{min:"2",max:"4",av:"a"},polygon:{min:"1",max:"1",av:"a"},point:{min:"1",max:"1",av:"a"},polyline:{min:"1",max:"1",av:"a"},extent:{min:"1",max:"1",av:"a"},multipoint:{min:"1",max:"1",av:"a"},geometry:{min:"1",max:"1",av:"a"},featurelayer:{min:"1",max:"3",av:"f"},featurecollection:{min:"1",
max:"1",av:"f"},buffer:{min:"2",max:"4",av:"f"},area:{min:"1",max:"2",av:"f"},sumarea:{min:"1",max:"2",av:"f"},length:{min:"1",max:"2",av:"f"},sumlength:{min:"1",max:"2",av:"f"},count:{min:"0",max:"*",av:"a"},filter:{min:"2",max:"2",av:"f"},envelopeintersects:{min:"2",max:"2",av:"f"},intersects:{min:"2",max:"2",av:"f"},contains:{min:"2",max:"2",av:"f"},overlaps:{min:"2",max:"2",av:"f"},within:{min:"2",max:"2",av:"f"},touches:{min:"2",max:"2",av:"f"},crosses:{min:"2",max:"2",av:"f"},union:{min:"1",
max:"2",av:"f",fmin:1},difference:{min:"2",max:"2",av:"f",fmin:2,fmax:3},intersection:{min:"2",max:"2",av:"f",fmin:2,fmax:3},symmetricdifference:{min:"2",max:"2",av:"f",fmin:2,fmax:3},number:{min:"1",max:"2",av:"a"},acos:{min:"1",max:"1",av:"a"},asin:{min:"1",max:"1",av:"a"},atan:{min:"1",max:"1",av:"a"},atan2:{min:"2",max:"2",av:"a"},ceil:{min:"1",max:"2",av:"a"},floor:{min:"1",max:"2",av:"a"},round:{min:"1",max:"2",av:"a"},cos:{min:"1",max:"1",av:"a"},exp:{min:"1",max:"1",av:"a"},log:{min:"1",max:"1",
av:"a"},min:{min:"0",max:"*",av:"a"},console:{min:"0",max:"*",av:"a"},max:{min:"0",max:"*",av:"a"},pow:{min:"2",max:"2",av:"a"},random:{min:"0",max:"0",av:"a"},sqrt:{min:"1",max:"1",av:"a"},sin:{min:"1",max:"1",av:"a"},tan:{min:"1",max:"1",av:"a"},abs:{min:"1",max:"1",av:"a"},isnan:{min:"1",max:"1",av:"a"},stdev:{min:"0",max:"*",av:"a"},average:{min:"0",max:"*",av:"a"},mean:{min:"0",max:"*",av:"a"},sum:{min:"0",max:"*",av:"a"},variance:{min:"0",max:"*",av:"a"},distinct:{min:"0",max:"*",av:"a"},addfield:{min:"3",
max:"3",av:"f"},removefield:{min:"2",max:"2",av:"f"},aggregate:{min:"3",max:"3",av:"f"},dissolve:{min:"2",max:"3",av:"f"},changeshape:{min:"2",max:"4",av:"f"},first:{min:"1",max:"1",av:"a"},top:{min:"2",max:"2",av:"a"},orderby:{min:"2",max:"2",av:"f"},"boolean":{min:"1",max:"1",av:"a"},dictionary:{min:"0",max:"*",av:"a"},servicearea:{min:"2",max:"*",av:"f"},equals:{min:"2",max:"2",av:"a"},"typeof":{min:"1",max:"1",av:"a"},reverse:{min:"1",max:"1",av:"a"},replace:{min:"3",max:"4",av:"a"},sort:{min:"1",
max:"2",av:"a"},feature:{min:"1",max:"*",av:"a"},haskey:{min:"2",max:"2",av:"a"},indexof:{min:"2",max:"2",av:"a"},centroid:{min:"1",max:"1",av:"f"},multiparttosinglepart:{min:"1",max:"1",av:"f"}};r.checkFunctionSignature=s;r.findFunction=t;r.validateLanguageNode=l;r.testValidityOfExpression=m;r.referencesMemberImpl=g;r.referencesMember=function(a,d){return!0===g(a.body[0].body,d.toLowerCase())?!0:!1};r.referencesFunctionImpl=n;r.referencesFunction=function(a,d){return!0===n(a.body[0].body,d)?!0:!1};
r.findFieldLiteralsImpl=p;r.findFieldLiterals=function(a,d){return p(a.body[0].body,d)};r.extractFunctionDeclaration=u;r.validateFunction=w;r.constructGlobalScope=v;r.validateScript=function(a,d,b){void 0===b&&(b="full");d={globalScope:v(d.vars,r.functionDecls,d.customFunctions,b),localScope:null};return m(a.body[0].body,d)};r.validateLanguage=function(a){return"BlockStatement"!==a.body[0].body.type?"Invalid formula content.":l(a.body[0].body)};r.nodeErrorMessage=f;r.makeError=q;r.extractAllIssuesInFunction=
x;r.extractAllIssues=k;r.checkScript=function(a,d,b,c){void 0===c&&(c="full");var e=[];if("BlockStatement"!==a.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];if(null===d||void 0===d)d={vars:{},customFunctions:[]};d={globalScope:v(d.vars,r.functionDecls,d.customFunctions,c),localScope:null};try{k(a.body[0].body,d,b,e)}catch(f){}return e}});