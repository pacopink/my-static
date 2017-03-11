// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/ReconstructTracks.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"reconstructIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.reconstructTracks}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.reconstructTracks}\x3c/a\x3e\r\n              \x3c/nav\x3e              \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_toolDescription" \x3e\x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputFeatures}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.trackField}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"trackFields"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1" style\x3d"width:100%;margin-top:10px;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_trackFieldSelect"\x3e\x3c/select\x3e\r\n              \x3c!--\x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_trackFieldSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleTrackFieldChange"\x3e\x3c/select\x3e--\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.methodLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"method"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_methodSelect"\x3e\r\n                \x3coption value\x3d"Geodesic"\x3e${i18n.geodesicLabel}\x3c/option\x3e\r\n                \x3coption value\x3d"Planar"\x3e${i18n.planarLabel}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.bufField}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"bufferField"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3ctable style\x3d"width:90%"\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd colspan\x3d"2"\x3e\r\n                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_bufFieldOutput" value\x3d""\x3e\x3c/input\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd class\x3d"shortTextInput"\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.add}\',iconClass:\'esriAnalysisExpIcon\',showLabel: false" data-dojo-attach-point\x3d"_expBtn" data-dojo-attach-event\x3d"onClick:_handleExpBtnClick"\x3e\x3c/div\x3e\r\n                  \x3c/td\x3e\r\n               \x3c/tr\x3e\r\n              \x3c/table\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.durSplit}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeSplit"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDurSplitValue" data-dojo-props\x3d"intermediateChanges:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_durSplitValue" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"/\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_durSplitUnitsSelect" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n  \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.sixLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.addStatsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"summaryFields"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3c!--\x3ctr data-dojo-attach-point\x3d"_datastoreLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_datastoreLabel"\x3e${i18n.sevenLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.datastoreLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"dataStore"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_selectDataStore"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_datastoreSelect"\x3e\r\n                \x3coption value\x3d"relational"\x3e${i18n.relationalDS}\x3c/option\x3e\r\n                \x3coption value\x3d"spatialtemporal" selected\x3d"true"\x3e${i18n.spatialDS}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e--\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.sevenLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"_exprDialog"\x3e\r\n      \x3cdiv class\x3d"esriBufExpressionFormCtr"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_expressionCtr"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/ReconstructTracks","require dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dojox/form/CheckedMultiSelect ../../kernel ../../lang ./AnalysisBase ./utils ./CreditEstimator ./_AnalysisOptions ../CalculateField dojo/i18n!../../nls/jsapi dojo/text!./templates/ReconstructTracks.html".split(" "),
function(t,u,l,d,e,m,g,v,I,n,k,J,h,w,x,y,z,A,B,C,p,K,L,M,q,N,O,P,Q,R,S,D,r,E,f,T,F,G,s,H){l=l([y,z,A,B,C,F,E],{declaredClass:"esri.dijit.analysis.ReconstructTracks",templateString:H,widgetsInTemplate:!0,inputLayer:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"ReconstructTracks",helpFileName:"ReconstructTracks",resultParameter:"output",constructor:function(a){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);
e.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,s.aggregatePointsTool);d.mixin(this.i18n,s.reconstructTracksTool)},postCreate:function(){this.inherited(arguments);x.add(this._form.domNode,"esriSimpleForm");k.set(this._trackFieldSelect.selectNode,"width","90%");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._durSplitValue.set("isInRange",d.hitch(this._durSplitValue,f.isGreaterThanZero));
this._durSplitValue.set("rangeMessage",this.i18n.greaterThanZeroMsg);this._buildUI()},startup:function(){},_onClose:function(a){this._aspectHandle&&(this._aspectHandle.remove(),this._aspectHandle=null);a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c=this.constructAnalysisInputLyrObj(this.inputLayer,!0);a.inputLayer=c;a.trackFields=this._trackFieldSelect.get("value").toString();
a.method=this._methodSelect.get("value");this._bufFieldOutput.get("value")&&(a.bufferField="\x3d "+this._bufFieldOutput.get("value"));a.summaryFields=g.toJson(this.get("summaryFields"));this._durSplitValue.get("value")&&(a.timeSplit=this._durSplitValue.get("value"),a.timeSplitUnit=this._durSplitUnitsSelect.get("value"));this.returnFeatureCollection||(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=
g.toJson({extent:this.map.extent._normalize(!0)}));b.jobParams=a;b.itemParams={description:n.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:n.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&(b.isSpatioTemporalDataStore=!0);console.log(b);this.execute(b)}},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&
(a.inputLayer=g.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),a.SummaryFields=g.toJson(this.get("summaryFields")),this.returnFeatureCollection||(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),a.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(a.GroupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)})),
this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleBrowseItemsSelect:function(a){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:a.dialog||this._browsedlg,widget:this}).always(d.hitch(this,this._updateAnalysisLayerUI,!0))},_handleAttrSelectChange:function(a){var b;
"0"!==a&&(b=this.get("statisticSelect"),(a=this.getOptions(a))&&a.type&&f.addStatisticsOptions({selectWidget:b,type:a.type,showGeoAnalyticsParams:this.showGeoAnalyticsParams}),"0"!==b.get("value")&&!b.get("isnewRowAdded")&&(a=b.get("removeTd"),k.set(a,"display","block"),a=b.get("referenceWidget"),d.hitch(a,a._createStatsRow()),b.set("isnewRowAdded",!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),a.get("value")&&("0"!==a.get("value")&&c&&"0"!==
c)&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),k.set(c,"display","block"),c=this.get("referenceWidget"),d.hitch(c,c._createStatsRow()),this.set("isnewRowAdded",!0)))},_handleDistUnitsChange:function(a){},_handleDurSplitValue:function(a){},_save:function(){},_buildUI:function(){var a=!0;f.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),f.populateAnalysisLayers(this,
"inputLayer","inputLayers"));f.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._durSplitUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes},{value:"Hours",label:this.i18n.hours},{value:"Days",label:this.i18n.days},{value:"Weeks",label:this.i18n.weeks},{value:"Months",label:this.i18n.months},{value:"Years",label:this.i18n.years}]);e.forEach(this.summaryFields,
function(a){this._currentAttrSelect.set("value",a.onStatisticField);d.hitch(this._currentAttrSelect,this._handleAttrSelectChange,a.onStatisticField)();this._currentStatsSelect.set("value",a.statisticType);d.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",a.statisticType)()},this);k.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;f.setupFoldersUI({folderStore:this.folderStore,
folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));k.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.set("groupBySelect",this.groupByField);k.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._updateAnalysisLayerUI(a);this._loadConnections()},_loadConnections:function(){this.on("start",
d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1))},_createStatsRow:function(){var a,b,c,e,g;a=h.create("tr",null,this._afterStatsRow,"before");c=h.create("td",{style:{width:"45%",maxWidth:"100px"}},a);b=h.create("td",{style:{width:"55%",maxWidth:"104px"}},a);c=new q({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},h.create("select",null,c));f.addAttributeOptions({selectWidget:c,
layer:this.inputLayer,allowStringType:!0});b=new q({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},h.create("select",null,b));f.addStatisticsOptions({selectWidget:b,showGeoAnalyticsParams:!0});c.set("statisticSelect",b);c.set("showGeoAnalyticsParams",this.showGeoAnalyticsParams);m.connect(c,"onChange",this._handleAttrSelectChange);g=h.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},a);e=h.create("a",{title:this.i18n.removeAttrStats,
"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+t.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},g);m.connect(e,"onclick",d.hitch(this,this._removeStatsRow,a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",g);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},_removeStatsRow:function(a){e.forEach(p.findWidgets(a),function(a){a.destroyRecursive()});
h.destroy(a)},_removeStatsRows:function(){e.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"  AND tags:"polygon"'),this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),
this._browseLyrsdlg.browseItems.set("query",a)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint","esriGeometryPolygon"],this._isAnalysisSelect=this._browseLyrsdlg.browseItems.plugIn.checkTimeFilter=!0,this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this._expBtn.set("disabled",!this.inputLayer);this._bufFieldOutput.set("disabled",!this.inputLayer);this.inputLayer&&(f.addAttributeOptions({selectWidget:this._trackFieldSelect,
layer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),this._removeStatsRows(),this._createStatsRow(),a&&(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{inputLayername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)),this._calcField?this._calcField&&this._calcField.layer!==this.inputLayer&&(this._bufFieldOutput.set("value",""),this._calcField.reset(),this._calcField.set("layer",this.inputLayer)):(a=e.filter(this.inputLayer.fields,function(a){return-1!==
e.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)}),console.log(a),a=f.getExprFunctions(),this._calcField=new G({layer:this.inputLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",helperMethods:a,css:{base:"esriBufFieldExp",addButton:"btn calcite primary",closeButton:"btn calcite cancel"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add},this._expressionCtr),this._calcField.startup(),k.set(this._calcField._validateBtn.domNode,
"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=u.around(this._calcField,"_handleAddButtonClick",d.hitch(this,function(a){return d.hitch(this,function(a,b){var d=this._calcField.get("expression")[0];this._bufFieldOutput.set("value",d.sqlExpression);this._exprDialog.hide()})})),this._calcField.on("close",d.hitch(this,function(){this._exprDialog.hide()}))))},_handleExpBtnClick:function(){this._calcField.reset();this._exprDialog.show()},
_handleCalculateSuccess:function(a){this._dialog.hide()},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){if(r.isDefined(a)&&("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType||"esriGeometryPolygon"===a.geometryType))this.inputLayer=a},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a=[],b,c;w(".statsSelect",
this.domNode).forEach(function(d,f){b=p.byNode(d);c=b.get("attributeSelect");if("0"!==c.get("value")&&"0"!==b.get("value")){var e={};e.statisticType=b.get("value");e.onStatisticField=c.get("value");a.push(e)}});return a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return f.validateServiceName(a,{textInput:this._outputLayerInput})},_setInputLayersAttr:function(a){r.isDefined(a)&&(this.inputLayers=a=e.filter(a,function(a,c){return-1!==e.indexOf(["esriGeometryPoint",
"esriGeometryMultipoint","esriGeometryPolygon"],a.geometryType)}))},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}});v("extend-esri")&&d.setObject("dijit.analysis.ReconstructTracks",l,D);return l});