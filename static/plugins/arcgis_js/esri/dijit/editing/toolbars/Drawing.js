// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/toolbars/Drawing","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/has dijit/_CssStateMixin ../Util ./ToolbarBase ../tools/ButtonToolBase ../tools/Cut ../tools/Union ../tools/Reshape ../tools/Editing ../tools/EditingTools ../tools/Selection ../tools/SelectionTools ../../../kernel".split(" "),function(c,a,e,f,g,h,k,l,b,m,n,p,q,d,r,s,t){c=c([l,h],{declaredClass:"esri.dijit.editing.toolbars.Drawing",onShowAttributeInspector:function(){},_activateTool:function(a,
b){this._settings.editor._activeTool=a;"EDITING"!==a&&this._settings.templatePicker.clearSelection();"ATTRIBUTES"!==a&&this._settings.editor._hideAttributeInspector();"CLEAR"!==a&&this.inherited(arguments)},_initializeToolbar:function(){e.forEach(this._settings.layers,function(a){this._tbConnects.push(f.connect(a,"onSelectionComplete",this,"_updateUI"))},this)},activateEditing:function(a,b){this._tools.EDITING._activateTool(a,b.geometryType);this._activeTool=this._tools.EDITING;this._activeTool.setChecked(!0)},
_updateUI:function(){this._settings.undoManager&&(this._tools.UNDO.set("disabled",!1===this._settings.undoManager.canUndo),this._tools.REDO.set("disabled",!1===this._settings.undoManager.canRedo));this._selectedFeatures=k.getSelection(this._settings.layers);var a=this._selectedFeatures.length;this._tools.DELETE&&this._tools.DELETE.set("disabled",0>=a);this._tools.CLEAR&&this._tools.CLEAR.set("disabled",0>=a);this._tools.ATTRIBUTES&&this._tools.ATTRIBUTES.set("disabled",0>=a);this._tools.UNION&&this._tools.UNION.set("disabled",
2>a)},_toolFinished:function(a){if("ATTRIBUTES"===a&&this._selectedFeatures&&this._selectedFeatures.length)this.onShowAttributeInspector(this._selectedFeatures[0]);if("SELECT"===a||"CUT"===a||"RESHAPING"===a||"EDITING"===a)this._activeTool.deactivate(),this._activeTool.setChecked(!1),this._activeTool=null;if("DELETE"===a)this.onDelete();this._settings.editor._activeTool=null;this._updateUI()},_createTools:function(){this._tools.SELECT=new r({settings:this._settings,onClick:a.hitch(this,"_activateTool",
"SELECT",!0),onFinished:a.hitch(this,"_toolFinished","SELECT")});this.addChild(this._tools.SELECT);this._tools.CLEAR=new b(a.mixin(s.selectClear,{settings:this._settings,onClick:a.hitch(this._settings.editor,"_clearSelection",!1)}));this.addChild(this._tools.CLEAR);this._createSeparator();this._tools.ATTRIBUTES=new b(a.mixin(d.attributes,{settings:this._settings,onClick:a.hitch(this,"_toolFinished","ATTRIBUTES")}));this.addChild(this._tools.ATTRIBUTES);this._createSeparator();this._tools.EDITING=
new q({settings:this._settings,onClick:a.hitch(this,"_activateTool","EDITING",!0),onApplyEdits:a.hitch(this,"onApplyEdits"),onFinished:a.hitch(this,"_toolFinished","EDITING")});this.addChild(this._tools.EDITING);this._tools.DELETE=new b(a.mixin(d.del,{settings:this._settings,onClick:a.hitch(this,"_toolFinished","DELETE")}));this.addChild(this._tools.DELETE);this._settings.toolbarOptions&&((this._settings.toolbarOptions.cutVisible||this._settings.toolbarOptions.mergeVisible||this._settings.toolbarOptions.reshapeVisible)&&
this._createSeparator(),this._settings.toolbarOptions.cutVisible&&(this._tools.CUT=new m({settings:this._settings,onFinished:a.hitch(this,"_toolFinished","CUT"),onClick:a.hitch(this,"_activateTool","CUT",!0),onApplyEdits:a.hitch(this,"onApplyEdits")}),this.addChild(this._tools.CUT)),this._settings.toolbarOptions.mergeVisible&&(this._tools.UNION=new n({settings:this._settings,onFinished:a.hitch(this,"_toolFinished","UNION"),onApplyEdits:a.hitch(this,"onApplyEdits")}),this.addChild(this._tools.UNION)),
this._settings.toolbarOptions.reshapeVisible&&(this._tools.RESHAPING=new p({settings:this._settings,onClick:a.hitch(this,"_activateTool","RESHAPING",!0),onFinished:a.hitch(this,"_toolFinished","RESHAPING"),onApplyEdits:a.hitch(this,"onApplyEdits")}),this.addChild(this._tools.RESHAPING)));this._settings.enableUndoRedo&&(this._createSeparator(),this._tools.UNDO=new b(a.mixin(d.undo,{settings:this._settings,disabled:!0,onClick:a.hitch(this,function(){this._tools.UNDO.set("disabled",!0);this._tools.REDO.set("disabled",
!0);this._settings.editor._undo()})})),this.addChild(this._tools.UNDO),this._tools.REDO=new b(a.mixin(d.redo,{settings:this._settings,disabled:!0,onClick:a.hitch(this,function(){this._tools.UNDO.set("disabled",!0);this._tools.REDO.set("disabled",!0);this._settings.editor._redo()})})),this.addChild(this._tools.REDO))}});g("extend-esri")&&a.setObject("dijit.editing.toolbars.Drawing",c,t);return c});