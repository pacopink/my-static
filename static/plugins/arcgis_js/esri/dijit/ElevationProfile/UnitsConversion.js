// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/dijit/ElevationProfile/UnitsConversion","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array ../../lang ../../units".split(" "),function(e,f,l,k,g,a){e=f([e],{declaredClass:"UnitsConversion",UNIT_TYPE:{UNKNOWN:-1,UNSUPPORTED:0,LENGTH:1,AREA:2},UNIT_LABEL:{esriMillimeters:"Millimeters",esriCentimeters:"Centimeters",esriDecimeters:"Decimeters",esriMeters:"Meters",esriKilometers:"Kilometers",esriInches:"Inches",esriFeet:"Feet",esriYards:"Yards",esriMiles:"Miles",esriNauticalMiles:"Nautical Miles",
esriAcres:"Acres",esriAres:"Ares",esriHectares:"Hectares",esriSquareInches:"Square Inches",esriSquareFeet:"Square Feet",esriSquareYards:"Square Yards",esriSquareMiles:"Square Miles",esriSquareNauticalMiles:"Square Nautical Miles",esriSquareMillimeters:"Square Millimeters",esriSquareCentimeters:"Square Centimeters",esriSquareDecimeters:"Square Decimeters",esriSquareMeters:"Square Meters",esriSquareKilometers:"Square Kilometers"},UNIT_ABBR_LABEL:{esriMillimeters:"mm",esriCentimeters:"cm",esriDecimeters:"dm",
esriMeters:"m",esriKilometers:"km",esriInches:"in",esriFeet:"ft",esriYards:"yd",esriMiles:"mi",esriNauticalMiles:"nmi",esriAcres:"ac",esriHectares:"ha",esriSquareInches:"in\u00b2",esriSquareFeet:"ft\u00b2",esriSquareYards:"yd\u00b2",esriSquareMiles:"mi\u00b2",esriSquareNauticalMiles:"nmi\u00b2",esriSquareMillimeters:"mm\u00b2",esriSquareCentimeters:"cm\u00b2",esriSquareDecimeters:"dm\u00b2",esriSquareMeters:"m\u00b2",esriSquareKilometers:"km\u00b2"},constructor:function(a){f.safeMixin(this,a);this.runTests&&
this._runTests()},convert:function(a,b,c){return a instanceof Array?this._convertMultipleFromValues(a,b,c):c instanceof Array?this._convertMultipleToUnits(a,b,c):this._convertSingle(a,b,c)},_convertMultipleFromValues:function(a,b,c){return k.forEach(a,function(a){return this._convertSingle(a,b,c)},this)},_convertMultipleToUnits:function(a,b,c){return k.forEach(c,function(c){return this._convertSingle(a,b,c)},this)},_convertSingle:function(a,b,c){var d=!0;if(!g.isDefined(a)||isNaN(a))this._emitError("The 'From' Value must be a valid numeric value: "+
a),d=!1;g.isDefined(b)||(this._emitError("The 'From' Units must be defined: "+b),d=!1);g.isDefined(c)||(this._emitError("The 'To' Units must be defined: "+c),d=!1);a instanceof Array&&(this._emitError("Only single 'From' Value supported: "+a),d=!1);b instanceof Array&&(this._emitError("Only single 'From' Units supported: "+b),d=!1);c instanceof Array&&(this._emitError("Only single 'To' Units supported: "+c),d=!1);var e=this._getType(b),f=this._getType(c);e===this.UNIT_TYPE.UNSUPPORTED&&(this._emitError("Unsupported 'From' Units: "+
b),d=!1);f===this.UNIT_TYPE.UNSUPPORTED&&(this._emitError("Unsupported 'To' Units: "+c),d=!1);e!==f&&(this._emitError("Incompatible 'From' and 'To' Units: "+b+" and "+c),d=!1);return d?b===c?+a:+a/this._perMeter(b)*this._perMeter(c):Number.NaN},_getType:function(h){var b=null;switch(h){case a.ACRES:b=this.UNIT_TYPE.AREA;break;case a.ARES:b=this.UNIT_TYPE.AREA;break;case a.CENTIMETERS:b=this.UNIT_TYPE.LENGTH;break;case a.DECIMETERS:b=this.UNIT_TYPE.LENGTH;break;case a.FEET:b=this.UNIT_TYPE.LENGTH;
break;case a.HECTARES:b=this.UNIT_TYPE.AREA;break;case a.INCHES:b=this.UNIT_TYPE.LENGTH;break;case a.KILOMETERS:b=this.UNIT_TYPE.LENGTH;break;case a.METERS:b=this.UNIT_TYPE.LENGTH;break;case a.MILES:b=this.UNIT_TYPE.LENGTH;break;case a.MILLIMETERS:b=this.UNIT_TYPE.LENGTH;break;case a.NAUTICAL_MILES:b=this.UNIT_TYPE.LENGTH;break;case a.SQUARE_CENTIMETERS:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_DECIMETERS:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_FEET:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_INCHES:b=
this.UNIT_TYPE.AREA;break;case a.SQUARE_KILOMETERS:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_METERS:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_MILES:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_MILLIMETERS:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_NAUTICAL_MILES:b=this.UNIT_TYPE.AREA;break;case a.SQUARE_YARDS:b=this.UNIT_TYPE.AREA;break;case a.YARDS:b=this.UNIT_TYPE.LENGTH;break;default:b=this.UNIT_TYPE.UNSUPPORTED}return b},_perMeter:function(h){var b=1;switch(h){case a.MILLIMETERS:b=1E3;break;case a.CENTIMETERS:b=
100;break;case a.DECIMETERS:b=10;break;case a.METERS:b=1;break;case a.KILOMETERS:b=0.0010;break;case a.INCHES:b=1/0.0254;break;case a.FEET:b=1/0.3048;break;case a.YARDS:b=1/0.9144;break;case a.MILES:b=1/1609.344;break;case a.NAUTICAL_MILES:b=1/1852;break;case a.ACRES:b=2.4710538E-4;break;case a.ARES:b=0.01;break;case a.HECTARES:b=1E-4;break;case a.SQUARE_INCHES:b=1550.0031;break;case a.SQUARE_FEET:b=10.7639104;break;case a.SQUARE_YARDS:b=1.19599005;break;case a.SQUARE_MILES:b=3.86102159E-7;break;
case a.SQUARE_NAUTICAL_MILES:b=2.9155335E-7;break;case a.SQUARE_MILLIMETERS:b=1E6;break;case a.SQUARE_CENTIMETERS:b=1E4;break;case a.SQUARE_DECIMETERS:b=100;break;case a.SQUARE_METERS:b=1;break;case a.SQUARE_KILOMETERS:b=1E-6}return b},getAbbrLabel:function(a){return this.UNIT_ABBR_LABEL[a]||"Unknown"},getFullLabel:function(a){return this.UNIT_LABEL[a]||"Unknown"},_emitError:function(a){this.emit("error",Error(a))}});e.version="0.1.0";return e});