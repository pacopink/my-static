// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/citation/templates/OnlineResourceElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'linkage\',minOccurs:1,label:\'${i18nArcGIS.cntOnlineRes.linkage}\'"\x3e\r\n  \x3c/div\x3e  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'protocol\',minOccurs:0,label:\'${i18nArcGIS.cntOnlineRes.protocol}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'appProfile\',minOccurs:0,label:\'${i18nArcGIS.cntOnlineRes.appProfile}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'orName\',minOccurs:0,label:\'${i18nArcGIS.cntOnlineRes.orName}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'orDesc\',minOccurs:0,label:\'${i18nArcGIS.cntOnlineRes.orDesc}\'"\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'orFunct\',minOccurs:0,label:\'${i18nArcGIS.codelist.CI_OnLineFunctionCode}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'OnFunctCd\',minOccurs:0,showHeader:false"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n        data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n          data-dojo-props\x3d"codelistType:\'CI_OnLineFunctionCode\'"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/citation/OnlineResourceElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/OnlineResourceElements.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.citation.OnlineResourceElements",a,d);return a});