// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/Attribute.html":'\x3cdiv class\x3d"gxeAttribute gxeIndent"\x3e\r\n  \x3cdiv class\x3d"gxeContainer" data-dojo-attach-point\x3d"containerNode" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/form/Attribute","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../../kernel ../base/XNode dojo/text!./templates/Attribute.html ./InputText".split(" "),function(a,f,p,c,d,g,h,k,l,m,n){a=a(l,{_isGxeAttribute:!0,_isOptionallyOff:!1,templateString:m,label:null,target:null,fixed:!1,minOccurs:0,maxOccurs:1,noIndent:!1,showHeader:!0,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||
(this.buildPath(),this.gxeDocument&&this.gxeDocument.beforeInitializeAttribute(this),this.initializeAttribute(),this.gxeDocument&&this.gxeDocument.afterInitializeAttribute(this),this._publishStarted(),this.inherited(arguments))},connectInputWidget:function(e){var a=this.gxeDocument&&this.gxeDocument.isViewOnly,b=this.findInputWidget();!b&&e&&(e=d.create("div",{},this.containerNode),b=new n({},e));b&&(this.inputWidget=b,b.parentXNode=this,b.connectXNode(this,a))},initializeAttribute:function(){this.getLabelString();
var a=0===this.minOccurs;this.showHeader?(this.labelNode=d.create("div",{},this.domNode,"first"),this.labelNode.innerHTML=this.getLabelString(),a?c.add(this.labelNode,"gxeOptionalLabel"):c.add(this.labelNode,"gxeMandatoryLabel"),this.noIndent&&c.remove(this.domNode,"gxeIndent")):(c.remove(this.domNode,"gxeIndent"),this.headerNode&&(d.destroy(this.headerNode),this.labelNode=this.headerNode=null));this.hide||g.set(this.containerNode,"display","block");this.connectInputWidget(!0)}});h("extend-esri")&&
f.setObject("dijit.metadata.form.Attribute",a,k);return a});