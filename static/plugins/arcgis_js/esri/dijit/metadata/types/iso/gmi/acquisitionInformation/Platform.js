// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/Platform.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3c!-- platform - designations of the platform from which the data were taken  \r\n         type\x3d"gmi:MI_Platform_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded" --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmi:platform\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.acquisitionSection.platform}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_Platform"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/Platform","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/iso/ObjectReference ./MI_Platform dojo/text!./templates/Platform.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.Platform",a,f);return a});