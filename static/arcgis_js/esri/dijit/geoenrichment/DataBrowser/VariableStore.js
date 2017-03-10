// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/VariableStore","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/store/util/SimpleQueryEngine dojo/store/util/QueryResults ./DeferredStore ./KeywordFilter".split(" "),function(p,k,h,q,r,s,m,t){return p(null,{categories:null,dataCollections:null,favorites:null,idProperty:"fullName",_data:null,_variables:null,queryEngine:r,constructor:function(){this.categories=new m({syncQuery:k.hitch(this,this._queryCategories)});this.dataCollections=
new m({syncQuery:k.hitch(this,this._queryDataCollections)})},_queryCategories:function(a,c){a=this._cleanUpCountryID(a);var b;"object"==typeof a&&a.dataCollectionID?(b=this.dataCollections.get(a.dataCollectionID),delete a.dataCollectionID,b=!b?[]:b.categories):b=this.categories.data;return this.categories.queryEngine(a,c)(b)},_queryDataCollections:function(a,c){a=this._cleanUpCountryID(a);var b;"object"==typeof a&&a.categoryID?(b=this.categories.get(a.categoryID),delete a.categoryID,b=!b?[]:b.dataCollections):
b=this.dataCollections.data;return this.dataCollections.queryEngine(a,c)(b)},_cleanUpCountryID:function(a){"object"==typeof a&&(a=k.mixin({},a),"countryID"in a&&delete a.countryID);return a},_clearAllStores:function(){this._data=[];this._variables={};this.categories.setData();this.dataCollections.setData()},synchronize:function(a){return(new q).resolve()},get:function(a){return this._variables[a]||null},getIdentity:function(a){return a&&a[this.idProperty]||null},query:function(a,c){return this._asyncQuery(a,
c)},_asyncQuery:function(a,c,b){return s(m.resolveCallback(b&&b._resolver||this.categories.resolver,a,k.hitch(this,this._syncQuery,a,c,b)))},_syncQuery:function(a,c,b){var d={},e=[b&&b.queryFilter||k.hitch(this,this.queryFilter)];if("function"==typeof a)e.push(a);else{a=a||{};var g,f,l;for(l in a)switch(l){case "countryID":break;case "categoryID":case "dataCollectionID":d[l]=a[l];break;case "searchString":var h=new t(a[l]);e.push(function(a){return h.match(a)});break;case "favorites":var n=a[l];n&&
(n=b&&"undefined"!==typeof b.favorites?b.favorites:this.favorites,e.push(k.hitch(this,function(a){return n&&n.contains&&n.contains(this.getIdentity(a))})));break;case "filters":var m=this._prepareFilterHash(a[l]);m&&e.push(function(a){for(var b in a.filteringTags)if(m[b]||m["*"])return!0;return!1});break;case "additionalData":f=a[l];break;default:g=g||{},g[l]=a[l]}g&&e.push(function(a){for(var b in g){var c=g[b];if(c&&c.test){if(!c.test(a[b],a))return!1}else if(c!=a[b])return!1}return!0})}a=this._composeQuery(e);
if(d.dataCollectionID)b=this.dataCollections.get(d.dataCollectionID),!b&&f&&(b=f.getDataCollection(d.dataCollectionID));else if(d.categoryID)b=this.categories.get(d.categoryID),!b&&f&&(b=f.getCategory(d.categoryID));else return this._query(this._data,a,c,[f&&f.getVariables(),this._getCustomData()]);return b&&b.query(a,c)||[]},_composeQuery:function(a){return 1==a.length?a[0]:function(c){return h.every(a,function(a){return a(c)})}},queryFilter:function(a){return!0},_query:function(a,c,b,d){var e=a.length;
this._addAdditionalData(a,d);c=this.queryEngine(c,b)(a);a.length=e;return c},_addAdditionalData:function(a,c){h.forEach(c,function(b){b instanceof Array?this._addAdditionalData(a,b):b&&a.push(b)},this)},getPopularVariables:function(a,c,b){return a&&a.getPopularVariables?a.getPopularVariables(c,b):[]},_getCustomData:function(){return null},_getCustomCategoryData:function(a){return null},_getCustomDataCollectionData:function(a){return null},getRefineFilters:function(a){var c={};if(a.dataCollectionID){var b=
this.dataCollections.get(a.dataCollectionID);!b&&a.additionalData&&(b=a.additionalData.getDataCollection(a.dataCollectionID));b&&b.filters&&this._combineFilters(b.filters,c)}else a.categoryID?(b=this.categories.get(a.categoryID),!b&&a.additionalData&&(b=a.additionalData.getCategory(a.categoryID)),b&&this._collectCategoryFilters(b,c)):this._collectAllFilters(c,a.additionalData);if((a=this._prepareFilterHash(a.filters))&&!a["*"]){var b=c,c={},d;for(d in b)a[d]&&(c[d]=b[d])}return c},_prepareFilterHash:function(a){"string"==
typeof a&&(a=a.split(","));if(!a||!a.length)return null;var c={};h.forEach(a,function(a){c[k.trim(a)]=!0});return c},_collectAllFilters:function(a,c){h.forEach(this.categories.data,function(b){this._collectCategoryFilters(b,a)},this);h.forEach(c&&c.getCategories(),function(b){this._collectCategoryFilters(b,a)},this)},_collectCategoryFilters:function(a,c){h.forEach(a.dataCollections,function(a){this._combineFilters(a.filters,c)},this)},_combineFilters:function(a,c){for(var b in a){var d=a[b],e=c[d.id];
e?this._mergeFilter(e,d):(e=k.mixin({},d),c[d.id]=e)}},_mergeFilter:function(a,c){if(a.type==c.type)if("Range"==a.type){var b=a.rangeMin,d=c.rangeMin;!isNaN(b)&&(!isNaN(d)&&b>d)&&(a.rangeMin=d);b=a.rangeMax;d=c.rangeMax;!isNaN(b)&&(!isNaN(d)&&b<d)&&(a.rangeMax=d)}else b=this._arrayToObject(a.enumValues.split(",")),d=c.enumValues.split(","),h.forEach(d,function(c){b[c]||(a.enumValues+=","+c)})},getStates:function(a){return null},_processDataCollections:function(a,c){c=c||{variables:{},categories:{},
dataCollections:[]};h.forEach(a,function(a){if(!this._isDataCollectionDisallowed(a)){var b=a.variables||a.data;a=k.mixin({id:a.id||a.dataCollectionID},a.metadata);h.forEach(a.filters,function(a){this._prepareFilter(a)},this);a.filters=this._arrayToObject(a.filters,"id");a.hash={};a.data=a.variables=[];var g=this;a.query=function(a,b){return g._query(this.data,a,b,g._getCustomDataCollectionData(this))};var f=[];h.forEach(a.categories,function(b){f.push(this._prepareCategory(b,a,c))},this);a.categories=
f;h.forEach(b,function(b){this._processVariable(b,a,c)},this);c.dataCollections.push(a)}},this);var b=this.categories.queryEngine({},{sort:[{attribute:"displayOrder",descending:!0}]})(this._objectToArray(c.categories));this.categories.setData(b);this.dataCollections.setData(c.dataCollections);return c},_prepareFilter:function(a){"Range"==a.type?(a.rangeMin=Number(a.rangeMin),a.rangeMin||(a.rangeMin=0),a.rangeMax=Number(a.rangeMax)):a.enumValues=this._trimArray(a.enumValues.split(",")).join(",")},
_prepareCategory:function(a,c,b){var d=Number(a.displayOrder)||0,e=b.categories[a.id];if(e)e.displayOrder=Math.max(d,e.displayOrder);else{e=a;e.hash={};e.data=[];e.dataCollections=[];e.displayOrder=d;e.popularityHash={};var g=this;e.query=function(a,b){return g._query(this.data,a,b,g._getCustomCategoryData(this))};e.getPopularVariables=function(a,b){this.popularityArray||(this.popularityArray=g._objectToArray(this.popularityHash));return g._queryPopularVariables(this.popularityArray,a,b)};b.categories[a.id]=
e}e.dataCollections.push(c);return e},_queryPopularVariables:function(a,c,b){var d=this,e=b&&b.queryFilter||this.queryFilter;a=this.queryEngine(function(a){return(a=d.get(a.id))?e(a):!1},c)(a);for(c=0;c<a.length;c++)a[c]=this.get(a[c].id);return a},_processVariable:function(a,c,b){var d=a.popularity;void 0!==d&&(delete a.popularity,d=Number(d));if(!this._isVariableDisallowed(a)){this._prepareVariable(a);var e=this._createUniqueVariableId(a),g=c.id+"."+a.id,f=b.variables[e];f?(k.mixin(f.filteringTags,
a.filteringTags),a.indexBase&&(f.indexBase=a.indexBase),a.hideInDataBrowser||(f.hideInDataBrowser=!1)):(f=a,f[this.idProperty]=g,b.variables[e]=f,this._data.push(f));this._registerVariable(f,g);this._isVariableAllowedInCategories(a,c)&&(g=f[this.idProperty],c.hash[f.id]||(c.hash[f.id]=f,c.data.push(f)),h.forEach(c.categories,function(a){a.hash[g]||(a.hash[g]=f,a.data.push(f));if(d){var b=a.popularityHash[g];b?b.popularity<d&&(b.popularity=d):(b={id:g,popularity:d},a.popularityHash[g]=b)}},this))}},
_isDataCollectionDisallowed:function(a){return!a.metadata||!a.metadata.categories},_isVariableDisallowed:function(a){return!1},_createUniqueVariableId:function(a){return a.id+"."+a.description},_registerVariable:function(a,c){this._variables[c]=a},_isVariableAllowedInCategories:function(a,c){return!0},_prepareVariable:function(a){a.filteringTags=this._arrayToObject(a.filteringTags,"id");a.description||(a.description=a.alias)},_trimArray:function(a){for(var c=0;c<a.length;c++)a[c]=k.trim(a[c]);return a},
_objectToArray:function(a){var c=[],b;for(b in a)c.push(a[b]);return c},_arrayToObject:function(a,c){var b={};h.forEach(a,function(a){b[c?a[c]:a]=a});return b}})});