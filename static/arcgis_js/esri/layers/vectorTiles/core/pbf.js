// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/pbf",["require","exports"],function(h,k){return function(){function c(a,b,e,d){this._tag=0;this._dataType=99;this._data=a;this._dataView=b;this._pos=e||0;this._end=d||a.byteLength}c.prototype.clone=function(){return new c(this._data,this._dataView,this._pos,this._end)};c.prototype.next=function(a){for(;;){if(this._pos===this._end)return!1;var b=this._decodeVarint();this._tag=b>>3;this._dataType=b&7;if(!a||a===this._tag)break;this.skip()}return!0};c.prototype.empty=
function(){return this._pos>=this._end};c.prototype.tag=function(){return this._tag};c.prototype.getInt32=function(){return this._decodeVarint()};c.prototype.getInt64=function(){return this._decodeVarint()};c.prototype.getUInt32=function(){return this._decodeVarint()};c.prototype.getUInt64=function(){return this._decodeVarint()};c.prototype.getSInt32=function(){return this._decodeSVarint()};c.prototype.getSInt64=function(){return this._decodeSVarint()};c.prototype.getBool=function(){var a=0!==this._data[this._pos];
this._skip(1);return a};c.prototype.getEnum=function(){return this._decodeVarint()};c.prototype.getFixed64=function(){var a=this._dataView,b=this._pos,a=a.getUint32(b,!0)+4294967296*a.getUint32(b+4,!0);this._skip(8);return a};c.prototype.getSFixed64=function(){var a=this._dataView,b=this._pos,a=a.getUint32(b,!0)+4294967296*a.getInt32(b+4,!0);this._skip(8);return a};c.prototype.getDouble=function(){var a=this._dataView.getFloat64(this._pos,!0);this._skip(8);return a};c.prototype.getFixed32=function(){var a=
this._dataView.getUint32(this._pos,!0);this._skip(4);return a};c.prototype.getSFixed32=function(){var a=this._dataView.getInt32(this._pos,!0);this._skip(4);return a};c.prototype.getFloat=function(){var a=this._dataView.getFloat32(this._pos,!0);this._skip(4);return a};c.prototype.getString=function(){var a=this._getLength(),b=this._pos,b=this._toString(this._data,b,b+a);this._skip(a);return b};c.prototype.getBytes=function(){var a=this._getLength(),b=this._pos,b=this._toBytes(this._data,b,b+a);this._skip(a);
return b};c.prototype.getMessage=function(){var a=this._getLength(),b=this._pos,b=new c(this._data,this._dataView,b,b+a);this._skip(a);return b};c.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw Error("Invalid data type!");}};c.prototype._skip=function(a){if(this._pos+a>this._end)throw Error("Attempt to skip past the end of buffer!");this._pos+=a};c.prototype._decodeVarint=
function(){var a=this._data,b=this._pos,e=0,d;if(10<=this._end-b){if(d=a[b++],e|=d&127,0!==(d&128)&&(d=a[b++],e|=(d&127)<<7,0!==(d&128)&&(d=a[b++],e|=(d&127)<<14,0!==(d&128)&&(d=a[b++],e|=(d&127)<<21,0!==(d&128)&&(d=a[b++],e+=268435456*(d&127),0!==(d&128)&&(d=a[b++],e+=34359738368*(d&127),0!==(d&128)&&(d=a[b++],e+=4398046511104*(d&127),0!==(d&128)&&(d=a[b++],e+=562949953421312*(d&127),0!==(d&128)&&(d=a[b++],e+=72057594037927936*(d&127),0!==(d&128)&&(d=a[b++],e+=9223372036854775E3*(d&127),0!==(d&128)))))))))))throw Error("Varint too long!");
}else{for(var c=1;b!==this._end;){d=a[b];if(0===(d&128))break;++b;e+=(d&127)*c;c*=128}if(b===this._end)throw Error("Varint overrun!");++b;e+=d*c}this._pos=b;return e};c.prototype._decodeSVarint=function(){var a=this._decodeVarint();return a%2?-(a+1)/2:a/2};c.prototype._getLength=function(){if(2!==this._dataType)throw Error("Not a delimited data type!");return this._decodeVarint()};c.prototype._toString=function(a,b,c){var d="",f="";for(c=Math.min(this._end,c);b<c;++b){var g=a[b];g&128?f+="%"+g.toString(16):
(d+=decodeURIComponent(f)+String.fromCharCode(g),f="")}f.length&&(d+=decodeURIComponent(f));return d};c.prototype._toBytes=function(a,b,c){c=Math.min(this._end,c);return new Uint8Array(a.buffer,b,c-b)};return c}()});