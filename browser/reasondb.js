(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (Buffer){
"use strict";var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _stringify=require("babel-runtime/core-js/json/stringify");var _stringify2=_interopRequireDefault(_stringify);var _get2=require("babel-runtime/helpers/get");var _get3=_interopRequireDefault(_get2);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _create=require("babel-runtime/core-js/object/create");var _create2=_interopRequireDefault(_create);var _getOwnPropertyDescriptor=require("babel-runtime/core-js/object/get-own-property-descriptor");var _getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor);var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);var _set=require("babel-runtime/core-js/set");var _set2=_interopRequireDefault(_set);var _defineProperty=require("babel-runtime/core-js/object/define-property");var _defineProperty2=_interopRequireDefault(_defineProperty);var _getOwnPropertyNames=require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2=_interopRequireDefault(_getOwnPropertyNames);var _keys=require("babel-runtime/core-js/object/keys");var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _promise=require("babel-runtime/core-js/promise");var _promise2=_interopRequireDefault(_promise);var _asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* 
The MIT License (MIT)

Copyright (c) 2016 AnyWhichWay, Simon Y. Blackwell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/(function(){var _this=this;var forEachAsync=function(){var _ref2=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(f){var iterable,i;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:iterable=this;i=0;case 2:if(!(i<iterable.length)){_context2.next=8;break;}_context2.next=5;return asynchronize(f(iterable[i]));case 5:i++;_context2.next=2;break;case 8:return _context2.abrupt("return");case 9:case"end":return _context2.stop();}}},_callee2,this);}));return function forEachAsync(_x2){return _ref2.apply(this,arguments);};}();var everyAsync=function(){var _ref3=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(f){var iterable,i;return _regenerator2.default.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:iterable=this;i=0;case 2:if(!(i<iterable.length)){_context3.next=10;break;}_context3.next=5;return asynchronize(f(iterable[i]));case 5:if(_context3.sent){_context3.next=7;break;}return _context3.abrupt("return",false);case 7:i++;_context3.next=2;break;case 10:return _context3.abrupt("return",true);case 11:case"end":return _context3.stop();}}},_callee3,this);}));return function everyAsync(_x3){return _ref3.apply(this,arguments);};}();var someAsync=function(){var _ref4=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(f){var iterable,i;return _regenerator2.default.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:iterable=this;i=0;case 2:if(!(i<iterable.length)){_context4.next=10;break;}_context4.next=5;return asynchronize(f(iterable[i]));case 5:if(!_context4.sent){_context4.next=7;break;}return _context4.abrupt("return",true);case 7:i++;_context4.next=2;break;case 10:return _context4.abrupt("return",false);case 11:case"end":return _context4.stop();}}},_callee4,this);}));return function someAsync(_x4){return _ref4.apply(this,arguments);};}();var _uuid=void 0,fs=void 0;if(typeof window==="undefined"){var r=require;_uuid=r("uuid");fs=r("fs");}var asynchronize=function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(value){return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(value instanceof _promise2.default)){_context.next=2;break;}return _context.abrupt("return",value);case 2:return _context.abrupt("return",_promise2.default.resolve(value));case 3:case"end":return _context.stop();}}},_callee,_this);}));return function asynchronize(_x){return _ref.apply(this,arguments);};}();var Activity=function(){function Activity(){var abort=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};(0,_classCallCheck3.default)(this,Activity);var me=this;me.steps=[];me.abort=function(result){me.aborted=true;abort(result);};me.reset();}(0,_createClass3.default)(Activity,[{key:"exec",value:function exec(){var i=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var value=arguments[1];if(this.aborted){return;}var me=this,step=me.steps[i],steps=Array.isArray(step)?step:[step];steps.every(function(step){if(!step){console.log("WARNING: undefined Activity step");return;}if(step instanceof _promise2.default||step.constructor.name==="Promise"&&typeof step.then==="function"){step.then(function(result){return me.complete(i,result);});return false;}else{var result=step(value,me.abort);if(result instanceof _promise2.default||result&&result.constructor.name==="Promise"&&typeof result.then==="function"){result.then(function(result){return me.complete(i,result);});return false;}me.complete(i,result);return true;}});return me.promise;}},{key:"reset",value:function reset(){var me=this;me.aborted=false;me.results=[];me.promise=new _promise2.default(function(resolve,reject){me.resolve=resolve;me.reject=reject;});}},{key:"step",value:function step(f){if(f){this.steps.push(f);}return this;}},{key:"complete",value:function complete(i,result){var me=this;if(i<me.steps.length-1){if(typeof result!=="undefined"){me.results[i]=result;}me.exec(i+1,result);}else{me.resolve(me.results);}}}]);return Activity;}();Array.indexKeys=["length","$max","$min","$avg","*"];Array.reindexCalls=["push","pop","splice","reverse","fill","shift","unshift"];Array.fromJSON=function(json){var array=[];(0,_keys2.default)(json).forEach(function(key){array[key]=json[key];});return array;};Object.defineProperty(Array.prototype,"$max",{enumerable:false,configurable:true,get:function get(){var result=void 0;this.forEach(function(value){result=result!=null?value>result?value:result:value;});return result;},set:function set(){}});Object.defineProperty(Array.prototype,"$min",{enumerable:false,configurable:true,get:function get(){var result=void 0;this.forEach(function(value){result=result!=null?value<result?value:result:value;});return result;},set:function set(){}});Object.defineProperty(Array.prototype,"$avg",{enumerable:false,configurable:true,get:function get(){var result=0,count=0;this.forEach(function(value){var v=value.valueOf();if(typeof v==="number"){count++;result+=v;}});return result/count;},set:function set(){}});Date.indexKeys=["*"];Date.reindexCalls=[];Date.fromJSON=function(json){var dt=new Date(json.time);(0,_keys2.default)(json).forEach(function(key){if(key!=="time"){dt[key]=json[key];}});return dt;};(0,_getOwnPropertyNames2.default)(Date.prototype).forEach(function(key){if(key.indexOf("get")===0){var name=key.indexOf("UTC")>=0?key.slice(3):key.charAt(3).toLowerCase()+key.slice(4),setkey="set"+key.slice(3),get=function get(){return this[key]();},set=function set(value){if(Date.prototype[setKey]){Date.prototype[setKey].call(this,value);}return true;};(0,_defineProperty2.default)(Date.prototype,name,{enumerable:false,configurable:true,get:get,set:set});Date.indexKeys.push(name);if(Date.prototype[setkey]){Date.reindexCalls.push(setkey);}}});function intersector(objects){return function intersection(){var min=Infinity,// length of shortest array argument
shrtst=0,// index of shortest array argument
set=objects?new _set2.default():{};rslt=[],// result
mxj=arguments.length-1;for(var j=0;j<=mxj;j++){// find index of shortest array argument
var l=arguments[j].length;if(l<min){shrtst=j;min=l;}}var shrt=arguments[shrtst],mxi=shrt.length;for(var i=0;i<mxi;i++){// initialize set of possible values from shortest array
if(objects){set.add(shrt[i]);}else{set[shrt[i]]=1;};}for(var j=0;j<=mxj;j++){// loop through all array arguments
var array=arguments[j],mxk=array.length;for(var k=0;k<mxk;k++){// loop through all values
var item=array[k];if(objects&&set.has(item)||set[item]){// if value is possible
if(j===mxj){// and all arrays have it (or we would not be at this point)
rslt.push(item);// add to results
}}}}return rslt;};}var intersection=intersector();//soundex from https://gist.github.com/shawndumas/1262659
function soundex(a){a=(a+"").toLowerCase().split("");var c=a.shift(),b="",d={a:"",e:"",i:"",o:"",u:"",b:1,f:1,p:1,v:1,c:2,g:2,j:2,k:2,q:2,s:2,x:2,z:2,d:3,t:3,l:4,m:5,n:5,r:6},b=c+a.map(function(a){return d[a];}).filter(function(a,b,e){return 0===b?a!==d[c]:a!==e[b-1];}).join("");return(b+"000").slice(0,4).toUpperCase();};// http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}//Shanti R Rao and Potluri M Rao, "Sample Size Calculator", 
//Raosoft Inc., 2009, http://www.raosoft.com/samplesize.html
//probCriticalNormal function is adapted from an algorithm published
//in Numerical Recipes in Fortran.
function probCriticalNormal(a){var d,e,b,c;b=[0,-.322232431088,-1,-.342242088547,-.0204231210245,-4.53642210148E-5];var f=[0,.099348462606,.588581570495,.531103462366,.10353775285,.0038560700634];a=.5-a/2;if(1E-8>=a)b=6;else if(.5==a)b=0;else{a=Math.sqrt(Math.log(1/(a*a)));d=b[5];e=f[5];for(c=4;1<=c;c--){d=d*a+b[c],e=e*a+f[c];}b=a+d/e;}return b;};function samplesize(confidence,margin,population){var response=50,pcn=probCriticalNormal(confidence/100.0),d1=pcn*pcn*response*(100.0-response),d2=(population-1.0)*(margin*margin)+d1;if(d2>0.0)return Math.ceil(population*d1/d2);return 0.0;}function CXProduct(collections,filter){this.collections=collections?collections:[];this.filter=filter;Object.defineProperty(this,"length",{set:function set(){},get:function get(){if(this.collections.length===0){return 0;}if(this.start!==undefined&&this.end!==undefined){return this.end-this.start;};var size=1;this.collections.forEach(function(collection){size*=collection.length;});return size;}});Object.defineProperty(this,"size",{set:function set(){},get:function get(){return this.length;}});}// there is probably an alogorithm that never returns null if index is in range and takes into account the restrict right
CXProduct.prototype.get=function(index){var me=this,c=[];function get(n,collections,dm,c){for(var i=collections.length;i--;){c[i]=collections[i][(n/dm[i][0]<<0)%dm[i][1]];}}for(var dm=[],f=1,l,i=me.collections.length;i--;f*=l){dm[i]=[f,l=me.collections[i].length];}get(index,me.collections,dm,c);if(me.filter(c)){return c.slice(0);}};var Cursor=function(){function Cursor(classes,cxProductOrRows,projection){var classVars=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};(0,_classCallCheck3.default)(this,Cursor);var me=this;me.classes=classes;if(Array.isArray(cxProductOrRows)){me.rows=cxProductOrRows;}else{me.cxproduct=cxProductOrRows;}me.projection=projection;me.classVarMap={};me.classVars=classVars;(0,_keys2.default)(classVars).forEach(function(classVar,i){me.classVarMap[classVar]=i;});}(0,_createClass3.default)(Cursor,[{key:"first",value:function(){var _ref5=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(count){var cursor;return _regenerator2.default.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:cursor=this;return _context5.abrupt("return",new _promise2.default(function(resolve,reject){var results=[];cursor.forEach(function(row){if(results.length<count){results.push(row);}if(results.length===count){resolve(results);}}).then(function(){if(results.length<count){resolve(results);}});}));case 2:case"end":return _context5.stop();}}},_callee5,this);}));function first(_x8){return _ref5.apply(this,arguments);}return first;}()},{key:"forEach",value:function(){var _ref6=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(f){var cursor;return _regenerator2.default.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:cursor=this;return _context6.abrupt("return",new _promise2.default(function(resolve,reject){var promises=[],results=[],i=0;function rows(){promises.push(cursor.get(i).then(function(row){if(row){var result=f(row,i,cursor);if(!(result instanceof _promise2.default)){result=_promise2.default.resolve(result);}results.push(result);}}));i++;if(i<cursor.maxCount){rows();}}rows();_promise2.default.all(promises).then(function(rows){resolve(results);});//resolve(promises);
}));case 2:case"end":return _context6.stop();}}},_callee6,this);}));function forEach(_x9){return _ref6.apply(this,arguments);}return forEach;}()},{key:"every",value:function(){var _ref7=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(f){var cursor,result;return _regenerator2.default.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:cursor=this;result=true;return _context7.abrupt("return",new _promise2.default(function(resolve,reject){cursor.forEach(function(row){if(result&&!f(row)){result=false;resolve(false);};}).then(function(){if(result){resolve(result);}});}));case 3:case"end":return _context7.stop();}}},_callee7,this);}));function every(_x10){return _ref7.apply(this,arguments);}return every;}()},{key:"random",value:function(){var _ref8=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(count){var cursor,done,results,maxcount,resolver,rejector,promise,select;return _regenerator2.default.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:cursor=this,done={},results=[];maxcount=cursor.maxCount,resolver=void 0,rejector=void 0;promise=new _promise2.default(function(resolve,reject){resolver=resolve;rejector=reject;}),select=function select(){var i=getRandomInt(0,cursor.maxCount-1);if(!done[i]){done[i]=true;cursor.get(i).then(function(row){if(row){if(results.length<count&&results.length<maxcount){results.push(row);}if(results.length===count||results.length===maxcount){resolver(results);return;}}else{maxcount--;}select();});}else{select();}};select();return _context8.abrupt("return",promise);case 5:case"end":return _context8.stop();}}},_callee8,this);}));function random(_x11){return _ref8.apply(this,arguments);}return random;}()},{key:"sample",value:function(){var _ref9=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(confidence,margin){var cursor,done,results,resolver,rejector,promise;return _regenerator2.default.wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:cursor=this,done={},results=[];resolver=void 0,rejector=void 0;promise=new _promise2.default(function(resolve,reject){resolver=resolve;rejector=reject;});cursor.count().then(function(population){var count=samplesize(confidence,margin,population),select=function select(){var i=getRandomInt(0,cursor.maxCount-1);if(!done[i]){done[i]=true;cursor.get(i).then(function(row){if(row){if(results.length<count){results.push(row);}if(results.length===count){resolver(results);return;}}select();});}else{select();}};select();});return _context9.abrupt("return",promise);case 5:case"end":return _context9.stop();}}},_callee9,this);}));function sample(_x12,_x13){return _ref9.apply(this,arguments);}return sample;}()},{key:"some",value:function(){var _ref10=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(f){var cursor,result;return _regenerator2.default.wrap(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:cursor=this;result=false;return _context10.abrupt("return",new _promise2.default(function(resolve,reject){cursor.forEach(function(row){if(f(row)){result=true;resolve(true);}}).then(function(){if(!result){resolve(false);}});}));case 3:case"end":return _context10.stop();}}},_callee10,this);}));function some(_x14){return _ref10.apply(this,arguments);}return some;}()},{key:"count",value:function(){var _ref11=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(){var cursor,i;return _regenerator2.default.wrap(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:cursor=this;i=0;return _context11.abrupt("return",new _promise2.default(function(resolve,reject){cursor.forEach(function(row){i++;}).then(function(){resolve(i);});}));case 3:case"end":return _context11.stop();}}},_callee11,this);}));function count(){return _ref11.apply(this,arguments);}return count;}()},{key:"get",value:function(){var _ref12=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(rowNumber){var me,_ret;return _regenerator2.default.wrap(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:me=this;if(!me.rows){_context12.next=7;break;}if(!(rowNumber<me.maxCount)){_context12.next=6;break;}_ret=function(){var result=void 0;if(me.projection){var _ret2=function(){var instances=me.rows[rowNumber];result={};if(!(0,_keys2.default)(me.projection).every(function(property){var colspec=me.projection[property];if(colspec&&(typeof colspec==="undefined"?"undefined":(0,_typeof3.default)(colspec))==="object"){var classVar=(0,_keys2.default)(colspec)[0],key=colspec[classVar],col=me.classVarMap[classVar];if(instances[col]){result[property]=instances[col][key];return true;}}})){return{v:{v:undefined}};}}();if((typeof _ret2==="undefined"?"undefined":(0,_typeof3.default)(_ret2))==="object")return _ret2.v;}else{result=me.rows[rowNumber];}return{v:result};}();if(!((typeof _ret==="undefined"?"undefined":(0,_typeof3.default)(_ret))==="object")){_context12.next=6;break;}return _context12.abrupt("return",_ret.v);case 6:return _context12.abrupt("return",undefined);case 7:return _context12.abrupt("return",new _promise2.default(function(resolve,reject){var promises=[],vars=(0,_keys2.default)(me.classVars);if(rowNumber>=0&&rowNumber<me.cxproduct.length){(function(){var row=me.cxproduct.get(rowNumber);if(row){row.forEach(function(id,col){var classVar=vars[col],cls=me.classVars[classVar];promises.push(cls.index.get(row[col]));});_promise2.default.all(promises).then(function(instances){var result=void 0;if(me.projection){result={};if(!(0,_keys2.default)(me.projection).every(function(property){var colspec=me.projection[property];if(colspec&&(typeof colspec==="undefined"?"undefined":(0,_typeof3.default)(colspec))==="object"){var classVar=(0,_keys2.default)(colspec)[0],key=colspec[classVar],col=me.classVarMap[classVar];if(instances[col]){result[property]=instances[col][key];return true;}}})){resolve();}}else{result=[];if(!instances.every(function(instance){if(instance){result.push(instance);return true;}})){resolve();}}resolve(result);});}else{resolve();}})();}else{resolve();}}));case 8:case"end":return _context12.stop();}}},_callee12,this);}));function get(_x15){return _ref12.apply(this,arguments);}return get;}()},{key:"maxCount",get:function get(){return this.rows?this.rows.length:this.cxproduct.length;}}]);return Cursor;}();function stream(object,db){var fired={},cls=object.constructor;Index.keys(object).forEach(function(key){if(db.patterns[cls.name]&&db.patterns[cls.name][key]){(0,_keys2.default)(db.patterns[cls.name][key]).forEach(function(patternId){if(fired[patternId]){return;}(0,_keys2.default)(db.patterns[cls.name][key][patternId]).forEach(function(classVar){var pattern=db.patterns[cls.name][key][patternId][classVar],when={};var projection=void 0;if(!pattern.action){return;}if(pattern.projection){projection={};(0,_keys2.default)(pattern.projection).forEach(function(key){if(key!==db.keyProperty){projection[key]=pattern.projection[key];}});}(0,_keys2.default)(pattern.when).forEach(function(key){if(key!==db.keyProperty){when[key]={};(0,_keys2.default)(pattern.when[key]).forEach(function(wkey){when[key][wkey]=pattern.when[key][wkey];});if(pattern.classVars[key]&&object instanceof pattern.classVars[key]){when[key][db.keyProperty]=object[db.keyProperty];}}});db.select(projection).from(pattern.classVars).where(when).exec().then(function(cursor){if(!fired[patternId]&&cursor.maxCount>0){fired[patternId]=true;pattern.action(cursor);}});});});}});}var Index=function(){function Index(cls){var keyProperty=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"@key";var db=arguments[2];var StorageType=arguments.length>3&&arguments[3]!==undefined?arguments[3]:db?db.storageType:MemStore;var clear=arguments.length>4&&arguments[4]!==undefined?arguments[4]:db?db.clear:false;(0,_classCallCheck3.default)(this,Index);var me=this;cls.index=me;me.saveAsync=db.saveIndexAsync;me.keys={};me.store=new StorageType(cls.name,keyProperty,db,clear);me.name=cls.name;me.pending={};}(0,_createClass3.default)(Index,[{key:"isInstanceKey",value:function isInstanceKey(key){if(key.indexOf(this.name+"@")===0){return true;}}},{key:"clear",value:function(){var _ref13=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(){var index,promises;return _regenerator2.default.wrap(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:index=this,promises=[];(0,_keys2.default)(index).forEach(function(key){promises.push(index.delete(key));});return _context13.abrupt("return",new _promise2.default(function(resolve,reject){_promise2.default.all(promises).then(function(){resolve();});}));case 3:case"end":return _context13.stop();}}},_callee13,this);}));function clear(){return _ref13.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref14=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(id){var index,store,keyProperty,pending,doit,_ret4;return _regenerator2.default.wrap(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:doit=function doit(){return new _promise2.default(function(resolve,reject){index.get(id,function(object){var promises=[];promises.push(store.delete(id,true).catch(function(e){console.log(e);}));if(object){Index.keys(object).forEach(function(key){promises.push(new _promise2.default(function(resolve,reject){index.get(key,function(node){if(!node){resolve();return;}var value=object[key],type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value);if(type==="object"){if(!value){if(node.null){delete node.null[id];}}else if(value[keyProperty]){var idvalue=value[keyProperty];if(node[idvalue][type]&&node[idvalue][type][id]){delete node[idvalue][type][id];}}index.save(key,function(){resolve(true);}).catch(function(e){console.log(e);});;}else if(type!=="undefined"){if(!node[value]||!node[value][type]||!node[value][type][id]){resolve();return;}delete node[value][type][id];index.save(key).then(function(){resolve(true);}).catch(function(e){console.log(e);});}});}).catch(function(e){console.log(e);}));});}_promise2.default.all(promises).then(function(){if(object){delete object[keyProperty];}delete index.keys[id];resolve();}).catch(function(e){console.log(e);});}).catch(function(e){console.log(e);});});};index=this,store=index.store,keyProperty=store.keyProperty,pending=index.pending[id];if(!pending){_context14.next=6;break;}return _context14.abrupt("return",new _promise2.default(function(resolve,reject){pending.then(function(result){if(typeof result!=="undefined"){var _pending=doit();index.pending[id]=_pending;_pending.then(function(){//console.log("deleted")
resolve(true);});}});}));case 6:_ret4=function(){var pending=index.pending[id]=doit();return{v:new _promise2.default(function(resolve,reject){pending.then(function(result){delete index.pending[id];resolve(true);});})};}();if(!((typeof _ret4==="undefined"?"undefined":(0,_typeof3.default)(_ret4))==="object")){_context14.next=9;break;}return _context14.abrupt("return",_ret4.v);case 9:case"end":return _context14.stop();}}},_callee14,this);}));function _delete(_x19){return _ref14.apply(this,arguments);}return _delete;}()},{key:"flush",value:function flush(key){var index=this,indexkey=this.isInstanceKey(key)?key:index.name+"."+key,desc=(0,_getOwnPropertyDescriptor2.default)(index.keys,indexkey);if(desc){//index.keys[key] = false;
//index.keys[indexkey] = false;
delete index.keys[indexkey];}}},{key:"get",value:function(){var _ref15=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(key,f,init){var index,indexkey,promise,value,resolver,rejector,activity;return _regenerator2.default.wrap(function _callee15$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:index=this,indexkey=this.isInstanceKey(key)?key:index.name+"."+key;promise=index.pending[key],value=index.keys[indexkey];if(!promise){_context15.next=4;break;}return _context15.abrupt("return",promise);case 4:if(value){_context15.next=10;break;}if(init){value=index.keys[indexkey]={};}resolver=void 0,rejector=void 0;promise=index.pending[key]=new _promise2.default(function(resolve,reject){resolver=resolve;rejector=reject;});activity=new Activity(resolver).step(function(){return index.store.get(indexkey);}).step(function(storedvalue,abort){delete index.pending[key];var type=typeof storedvalue==="undefined"?"undefined":(0,_typeof3.default)(storedvalue);if(type==="undefined"){if(init){value=index.keys[indexkey]={};}}else{value=index.keys[indexkey]=storedvalue;if(type==="object"&&index.isInstanceKey(key)){return index.index(value,false,index.store.db.activate);}}return value;}).step(f).step(resolver).exec();return _context15.abrupt("return",promise);case 10:if(f){f(value);}return _context15.abrupt("return",_promise2.default.resolve(value));case 12:case"end":return _context15.stop();}}},_callee15,this);}));function get(_x20,_x21,_x22){return _ref15.apply(this,arguments);}return get;}()},{key:"index",value:function(){var _ref16=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16(object,reIndex,activate){var index,store,cls,id,resolver,rejector,promise,indexed;return _regenerator2.default.wrap(function _callee16$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:index=this,store=index.store,cls=object.constructor,id=object[store.keyProperty];resolver=void 0,rejector=void 0;promise=new _promise2.default(function(resolve,reject){resolver=resolve;rejector=reject;});index.keys[id]=object;if(object.constructor.reindexCalls){object.constructor.reindexCalls.forEach(function(fname){var f=object[fname];if(!f.reindexer){(0,_defineProperty2.default)(object,fname,{configurable:true,writable:true,value:function value(){var me=this;f.call.apply(f,[me].concat(Array.prototype.slice.call(arguments)));index.index(me,true,db.activate).then(function(){stream(me,db);});}});object[fname].reindexer=true;}});}indexed=reIndex?store.set(id,object,true):_promise2.default.resolve();indexed.then(function(){var activity=new Activity(resolver);Index.keys(object).forEach(function(key){var value=object[key],desc=(0,_getOwnPropertyDescriptor2.default)(object,key);function get(){return get.value;}if(!reIndex){get.value=value;}function set(value,first){var instance=this,cls=instance.constructor,index=cls.index,store=index.store,indexkey=cls.name+"."+key,keyProperty=store.keyProperty,db=store.db,id=instance[keyProperty],oldvalue=get.value,oldtype=typeof oldvalue==="undefined"?"undefined":(0,_typeof3.default)(oldvalue);var type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value);if(oldtype==="undefined"||oldvalue!=value){if(type==="undefined"){delete get.value;}else{get.value=value;}if(type==="function"){value=value.call(instance);type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value);}return new _promise2.default(function(resolve,reject){index.get(key,function(node){node=index.keys[indexkey];// re-assign since 1) we know it is loaded and initialized, 2) it may have been overwritten by another async
if(!instance[keyProperty]){// object may have been deleted by another async call!
if(node[oldvalue]&&node[oldvalue][oldtype]){delete node[oldvalue][oldtype][id];}resolve(true);return;}if(value&&type==="object"){var ocls=value.constructor;if(!ocls.index){db.index(ocls);}ocls.index.put(value).then(function(){var okey=value[keyProperty],otype=value.constructor.name;if(!node[okey]){node[okey]={};}if(!node[okey][otype]){node[okey][otype]={};}node[okey][otype][id]=true;var restorable=false;if(node[oldvalue]&&node[oldvalue][oldtype]){delete node[oldvalue][oldtype][id];restorable=true;}var promise=first?_promise2.default.resolve():store.set(id,instance,true);promise.then(function(){index.save(key,function(){resolve(true);if(!first){stream(object,db);}}).catch(function(e){throw e;});}).catch(function(e){delete node[okey][otype][id];if(restorable){node[oldvalue][oldtype][id]=true;}});;});}else if(type!=="undefined"){(function(){if(!node[value]){node[value]={};}if(!node[value][type]){node[value][type]={};}node[value][type][id]=true;var restorable=false;if(node[oldvalue]&&node[oldvalue][oldtype]){delete node[oldvalue][oldtype][id];restorable=true;}var promise=first?_promise2.default.resolve():store.set(id,instance,true);promise.then(function(){index.keys[key]=node;index.save(key,function(){resolve(true);if(!first){stream(object,db);}});/*index.store.set(index.name + "." + key,node).then(() => {
                  	resolve(true);
                  	if(!first) {
                  		stream(object,db);
                  	}
                  });*/}).catch(function(e){delete node[value][type][id];if(restorable){node[oldvalue][oldtype][id]=true;}});})();}},true);});}else{return _promise2.default.resolve(true);}}var writable=desc&&!!desc.configurable&&!!desc.writable;if(activate&&desc&&writable&&!desc.get&&!desc.set){delete desc.writable;delete desc.value;desc.get=get;desc.set=set;(0,_defineProperty2.default)(object,key,desc);}if(reIndex){activity.step(function(){return set.call(object,value,true);});}});activity.step(function(){return resolver(object);}).exec();});return _context16.abrupt("return",promise);case 8:case"end":return _context16.stop();}}},_callee16,this);}));function index(_x23,_x24,_x25){return _ref16.apply(this,arguments);}return index;}()},{key:"instances",value:function(){var _ref17=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17(keyArray,cls){var index,results,i;return _regenerator2.default.wrap(function _callee17$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:index=this,results=[];i=0;case 2:if(!(i<keyArray.length)){_context17.next=14;break;}_context17.prev=3;_context17.next=6;return index.get(keyArray[i],function(instance){if(!cls||instance instanceof cls){results.push(instance);}});case 6:_context17.next=11;break;case 8:_context17.prev=8;_context17.t0=_context17["catch"](3);console.log(_context17.t0);case 11:i++;_context17.next=2;break;case 14:return _context17.abrupt("return",results);case 15:case"end":return _context17.stop();}}},_callee17,this,[[3,8]]);}));function instances(_x26,_x27){return _ref17.apply(this,arguments);}return instances;}()},{key:"match",value:function(){var _ref18=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18(pattern){var classVars=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var classMatches=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var restrictRight=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var classVar=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"$self";var parentKey=arguments[5];var nestedClass=arguments[6];var keys,literals,tests,nestedobjects,joinvars,joins,cols,nodes,results,currentclass,index,keyProperty,i,key;return _regenerator2.default.wrap(function _callee18$(_context18){while(1){switch(_context18.prev=_context18.next){case 0:keys=(0,_keys2.default)(pattern).filter(function(key){return key!="$class";}),literals={},tests={},nestedobjects={},joinvars={},joins={},cols={},nodes=[];results=classMatches,currentclass=pattern.$class?pattern.$class:nestedClass?nestedClass:classVars[classVar]?classVars[classVar]:Object;if(!(typeof currentclass==="string")){_context18.next=10;break;}_context18.prev=3;currentclass=new Function("return "+currentclass)();_context18.next=10;break;case 7:_context18.prev=7;_context18.t0=_context18["catch"](3);return _context18.abrupt("return",_promise2.default.resolve([]));case 10:index=currentclass.index,keyProperty=currentclass.name+"."+index.store.keyProperty;(0,_keys2.default)(classVars).forEach(function(classVar,i){cols[classVar]=i;if(!results[classVar]){results[classVar]=null;}if(!restrictRight[i]){restrictRight[i]={};};});i=0;case 13:if(!(i<keys.length)){_context18.next=30;break;}key=keys[i];if(classVars[key]){_context18.next=27;break;}_context18.prev=16;_context18.t1=nodes;_context18.next=20;return index.get(key);case 20:_context18.t2=_context18.sent;_context18.t1.push.call(_context18.t1,_context18.t2);_context18.next=27;break;case 24:_context18.prev=24;_context18.t3=_context18["catch"](16);console.log(_context18.t3);case 27:i++;_context18.next=13;break;case 30:return _context18.abrupt("return",new _promise2.default(function(resolve,reject){// db.select({name: {$o1: "name"}}).from({$o1: Object,$o2: Object}).where({$o1: {name: {$o2: "name"}}})
nodes.every(function(node,i){var key=keys[i],value=pattern[key],type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value);if(!node){if(type==="undefined"){return true;}results[classVar]=[];return false;}if(type!=="object"){return literals[i]=true;}(0,_keys2.default)(value).forEach(function(key){if(classVars[key]){var rightClass=nestedClass?nestedClass:classVars[key],rightKeyProperty=rightClass.index.store.keyProperty,rightProperty=value[key];joins[i]={rightVar:key,rightClass:rightClass,rightKeyProperty:rightKeyProperty,rightProperty:rightProperty,test:Index.$eeq};return;}if(key[0]==="$"){var testvalue=value[key],test=Index[key];if(typeof test==="function"){if(testvalue&&(typeof testvalue==="undefined"?"undefined":(0,_typeof3.default)(testvalue))==="object"){var second=(0,_keys2.default)(testvalue)[0];if(classVars[second]){var _rightClass=nestedClass?nestedClass:classVars[second],_rightKeyProperty=_rightClass.index.store.keyProperty,_rightProperty=testvalue[second];return joins[i]={rightVar:second,rightClass:_rightClass,rightKeyProperty:_rightKeyProperty,rightProperty:_rightProperty,test:test};}}tests[i]=true;return;}}nestedobjects[i]=true;return;});return true;});if(results[classVar]&&results[classVar].length===0){resolve([]);return;}var exclude=[];nodes.every(function(node,i){if(!literals[i]){return true;}var key=keys[i],value=pattern[key],type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value);if(type==="undefined"){(0,_keys2.default)(node).forEach(function(testValue){(0,_keys2.default)(node[testValue]).forEach(function(testType){exclude=exclude.concat((0,_keys2.default)(node[testValue][testType]));});});return true;}if(!node[value]||!node[value][type]){results[classVar]=[];return false;}var ids=(0,_keys2.default)(node[value][type]).filter(function(id){return!currentclass||id.indexOf(currentclass.name+"@")===0;});results[classVar]=results[classVar]?intersection(results[classVar],ids):ids;return results[classVar].length>0;});if(results[classVar]&&results[classVar].length===0){resolve([]);return;}nodes.every(function(node,i){if(!tests[i]){return true;}var key=keys[i],predicate=pattern[key],testname=(0,_keys2.default)(predicate)[0],value=predicate[testname],type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value),test=Index[testname];var ids=[];if(type==="undefined"&&(testname==="$eq"||testname==="$eeq")){(0,_keys2.default)(node).forEach(function(testValue){(0,_keys2.default)(node[testValue]).forEach(function(testType){exclude=exclude.concat((0,_keys2.default)(node[testValue][testType]));});});return true;}(0,_keys2.default)(node).forEach(function(testValue){(0,_keys2.default)(node[testValue]).forEach(function(testType){if(test(Index.coerce(testValue,testType),value)){ids=ids.concat((0,_keys2.default)(node[testValue][testType]));}});});ids=ids.filter(function(id){return!currentclass||id.indexOf(currentclass.name+"@")===0;});results[classVar]=results[classVar]?intersection(results[classVar],ids):intersection(ids,ids);return results[classVar].length>0;});if(results[classVar]&&results[classVar].length===0){resolve([]);return;}var promises=[],childnodes=[],nestedtypes=[];nodes.forEach(function(node,i){if(!nestedobjects[i]){return;}var key=keys[i],nestedobject=pattern[key];(0,_keys2.default)(node).forEach(function(key){if(key.indexOf("@")>0){var parts=key.split("@"),clsname=parts[0];if(!nestedtypes[clsname]){nestedtypes[clsname]=[];}childnodes.push(node);nestedtypes.push(new Function("return "+clsname)());}});nestedtypes.forEach(function(nestedtype){promises.push(nestedtype.index.match(nestedobject,classVars,classMatches,restrictRight,classVar+"$"+nestedtype.name,key,nestedtype));});});_promise2.default.all(promises).then(function(childidsets){childidsets.every(function(childids,i){var node=childnodes[i],nestedtype=nestedtypes[i];var ids=[];childids.forEach(function(id){//if(clsprefix && id.indexOf(clsprefix)!==0) { return; } // tests for $class
if(node[id]){ids=ids.concat((0,_keys2.default)(node[id][nestedtype.name]));}});ids=ids.filter(function(id){return!currentclass||id.indexOf(currentclass.name+"@")===0;});results[classVar]=results[classVar]?intersection(results[classVar],ids):intersection(ids,ids);return results[classVar].length>0;});if(results[classVar]&&results[classVar].length===0){resolve([]);return;}var promises=[];nodes.forEach(function(node,i){// db.select({name: {$o1: "name"}}).from({$o1: Object,$o2: Object}).where({$o1: {name: {$o2: "name"}}})
var join=joins[i];if(!join){return true;}promises.push(join.rightClass.index.get(join.rightProperty));promises.push(join.rightClass.index.get(join.rightProperty));});_promise2.default.all(promises).then(function(rightnodes){// variable not used, promises just ensure nodes loaded for matching
if(!results[classVar]){results[classVar]=(0,_keys2.default)(index.keys[keyProperty]).filter(function(id){return!currentclass||id.indexOf(currentclass.name+"@")===0;});;}nodes.every(function(node,i){// db.select({name: {$o1: "name"}}).from({$o1: Object,$o2: Object}).where({$o1: {name: {$o2: "name"}}})
var join=joins[i];// {rightVar: second, rightIndex:classVars[second].index, rightProperty:testvalue[second], test:test};
if(!join){return true;}if(cols[join.rightVar]===0){return true;}var rightIndex=join.rightClass.index,rightKeyProperty=join.rightClass.name+"."+join.rightKeyProperty,rightProperty=join.rightClass.name+"."+join.rightProperty;if(!rightIndex.keys[rightProperty]){results[classVar]=[];return false;}if(!results[join.rightVar]){results[join.rightVar]=(0,_keys2.default)(rightIndex.keys[rightKeyProperty]).filter(function(id){return!currentclass||id.indexOf(rightIndex.name+"@")===0;});}var leftids=[];(0,_keys2.default)(node).forEach(function(leftValue){(0,_keys2.default)(node[leftValue]).forEach(function(leftType){var innerleftids=(0,_keys2.default)(node[leftValue][leftType]),innerrightids=[],some=false,pnode=rightIndex.keys[rightProperty];(0,_keys2.default)(pnode).forEach(function(rightValue){var vnode=pnode[rightValue];(0,_keys2.default)(vnode).forEach(function(rightType){if(join.test(Index.coerce(leftValue,leftType),Index.coerce(rightValue,rightType))){some=true;innerrightids=innerrightids.concat((0,_keys2.default)(vnode[rightType]));}});});if(some){leftids=leftids.concat(innerleftids);// do we need to filter for class?
innerrightids=intersection(innerrightids,innerrightids);// do we need to filter for class?
innerleftids.forEach(function(id,i){restrictRight[cols[join.rightVar]][id]=restrictRight[cols[join.rightVar]][id]?intersection(restrictRight[cols[join.rightVar]][id],innerrightids):innerrightids;});}});});results[classVar]=results[classVar]&&leftids.length>0?intersection(results[classVar],leftids):leftids;return results[classVar]&&results[classVar].length>0;});if(results[classVar]&&results[classVar].length>0){resolve(results[classVar].filter(function(item){return exclude.indexOf(item)===-1;}));return;}resolve([]);});});}));case 31:case"end":return _context18.stop();}}},_callee18,this,[[3,7],[16,24]]);}));function match(_x28,_x29,_x30,_x31,_x32,_x33,_x34){return _ref18.apply(this,arguments);}return match;}()},{key:"put",value:function(){var _ref19=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19(object){var index,store,db,keyProperty,_id;return _regenerator2.default.wrap(function _callee19$(_context19){while(1){switch(_context19.prev=_context19.next){case 0:index=this,store=index.store,db=store.db,keyProperty=store.keyProperty;if(!object[keyProperty]){_id=object.constructor.name+"@"+(_uuid?_uuid.v4():uuid.v4());(0,_defineProperty2.default)(object,keyProperty,{enumerable:true,configurable:true,value:_id});}store.addScope(object);return _context19.abrupt("return",index.index(object,true,db.activate));case 4:case"end":return _context19.stop();}}},_callee19,this);}));function put(_x39){return _ref19.apply(this,arguments);}return put;}()},{key:"save",value:function(){var _ref20=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20(key,f){var index,isinstance,indexkey,node;return _regenerator2.default.wrap(function _callee20$(_context20){while(1){switch(_context20.prev=_context20.next){case 0:index=this,isinstance=index.isInstanceKey(key),indexkey=isinstance?key:index.name+"."+key,node=index.keys[indexkey];if(!node){_context20.next=9;break;}if(!index.saveAsync){_context20.next=8;break;}if(f){f();}if(!index.save.pending){index.save.pending={};}if(index.save.pending[indexkey]){clearTimeout(index.save.pending[indexkey]);}index.save.pending[indexkey]=setTimeout(function(){index.store.set(indexkey,node);delete index.save.pending[indexkey];});return _context20.abrupt("return",_promise2.default.resolve());case 8:return _context20.abrupt("return",index.store.set(indexkey,node).then(function(){if(f){f();}}).catch(function(e){console.log(e);}));case 9:return _context20.abrupt("return",_promise2.default.resolve());case 10:case"end":return _context20.stop();}}},_callee20,this);}));function save(_x40,_x41){return _ref20.apply(this,arguments);}return save;}()}],[{key:"coerce",value:function coerce(value,type){var conversions={string:{number:parseFloat,boolean:function boolean(value){return["true","yes","on"].indexOf(value)>=0?true:["false","no","off"].indexOf(value)>=0?false:value;}},number:{string:function string(value){return value+"";},boolean:function boolean(value){return!!value;}},boolean:{number:function number(value){return value?1:0;},string:function string(value){return value+"";}}},vtype=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value);if(type===vtype){return value;}if(conversions[vtype]&&conversions[vtype][type]){return conversions[vtype][type](value);}return value;}},{key:"keys",value:function keys(object){var indexkeys=void 0;if(object.indexKeys){indexkeys=object.indexKeys;}else if(object.constructor.indexKeys){indexkeys=object.constructor.indexKeys;}if(indexkeys){var i=indexkeys.indexOf("*");if(i>=0){indexkeys=indexkeys.concat((0,_keys2.default)(object));}}else{indexkeys=(0,_keys2.default)(object);}return indexkeys.filter(function(key){if(object.constructor.skipKeys&&object.constructor.skipKeys.indexOf(key)>=0){return false;}return key!=="*";});}}]);return Index;}();Index.$=function(value,f){return f(value);};Index.$typeof=function(){return true;// test is done in method find
};Index.$lt=function(value,testValue){return value<testValue;};Index["<"]=Index.$lt;Index.$lte=function(value,testValue){return value<=testValue;};Index["<="]=Index.$lte;Index.$eq=function(value,testValue){return value==testValue;};Index["=="]=Index.$eq;Index.$neq=function(value,testValue){return value!=testValue;};Index["!="]=Index.$neq;Index.$eeq=function(value,testValue){return value===testValue;};Index["==="]=Index.$eeq;Index.$echoes=function(value,testValue){return value==testValue||soundex(value)===soundex(testValue);};Index.$matches=function(value,testValue){return value.search(testValue)>=0;};Index.$in=function(value,testValue){if(testValue.indexOf){return testValue.indexOf(value)>=0;}if(testValue.includes){return testValue.includes(value);}return false;};Index.$nin=function(value,testValue){return!Index.$in(value,testValue);};Index.$between=function(value,testValue){var end1=testValue[0],end2=testValue[1],inclusive=testValue[2],start=Math.min(end1,end2),stop=Math.max(end1,end2);if(inclusive){return value>=start&&value<=stop;}return value>start&&value<stop;};Index.$outside=function(value,testValue){return!Index.$between(value,testValue.concat(true));};Index.$gte=function(value,testValue){return value>=testValue;};Index[">="]=Index.$gte;Index.$gt=function(value,testValue){return value>testValue;};Index[">"]=Index.$gt;var Store=function(){function Store(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Object";var keyProperty=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"@key";var db=arguments[2];(0,_classCallCheck3.default)(this,Store);this.name=name;this.keyProperty=keyProperty;this.db=db;this.scope={};this.ready=function(){var _ref21=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee21(clear){return _regenerator2.default.wrap(function _callee21$(_context21){while(1){switch(_context21.prev=_context21.next){case 0:if(!this.ready.promised){_context21.next=2;break;}return _context21.abrupt("return",this.ready.promised);case 2:this.ready.promised=clear&&this.clear?this.clear():_promise2.default.resolve();return _context21.abrupt("return",this.ready.promised);case 4:case"end":return _context21.stop();}}},_callee21,this);}));return function(_x44){return _ref21.apply(this,arguments);};}();this.pending={};this.data={};}(0,_createClass3.default)(Store,[{key:"addScope",value:function addScope(value){var me=this;if(value&&(typeof value==="undefined"?"undefined":(0,_typeof3.default)(value))==="object"){me.scope[value.constructor.name]=value.constructor;(0,_keys2.default)(value).forEach(function(property){me.addScope(value[property]);});}}},{key:"delete",value:function _delete(key){var action=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};var me=this;var promise=me.pending[key];delete me.data[key];if(!promise){promise=me.pending[key]=new _promise2.default(function(resolve,reject){me.pending[key]=me.ready().then(function(){return action();});me.pending[key].then(function(){delete me.pending[key];resolve();});});return promise;}return new _promise2.default(function(resolve,reject){promise.then(function(){me.pending[key]=me.ready().then(function(){return action();});me.pending[key].then(function(){delete me.pending[key];resolve();});});});}},{key:"get",value:function get(key){var action=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};var me=this,result=me.data[key];var promise=me.pending[key];if(result){return _promise2.default.resolve(result);}if(!promise){promise=me.pending[key]=new _promise2.default(function(resolve,reject){me.pending[key]=me.ready().then(function(){return action();});me.pending[key].then(function(result){if(result){me.restore(result).then(function(result){me.data[key]=result;resolve(result);});}else{delete me.data[key];resolve(result);}delete me.pending[key];});});return promise;}return new _promise2.default(function(resolve,reject){promise.then(function(){me.pending[key]=me.ready().then(function(){return action();});me.pending[key].then(function(result){if(result){me.restore(result).then(function(result){me.data[key]=result;resolve(result);});}else{delete me.data[key];resolve(result);}delete me.pending[key];});});});}},{key:"normalize",value:function normalize(value,recursing){var me=this,type=typeof value==="undefined"?"undefined":(0,_typeof3.default)(value),keyProperty=me.keyProperty;var result=void 0;if(value&&type==="object"){(function(){var id=value[keyProperty];if(!id){id=value.constructor.name+"@"+(_uuid?_uuid.v4():uuid.v4());(0,_defineProperty2.default)(value,keyProperty,{enumerable:true,configurable:true,value:id});}var json=value.toJSON?value.toJSON():value;if((typeof json==="undefined"?"undefined":(0,_typeof3.default)(json))!=="object"){json=value;}me.addScope(value);result={};if(recursing){result[keyProperty]=id;}else{if(json instanceof Date){result.time=json.getTime();}(0,_keys2.default)(json).forEach(function(key,i){if(typeof json[key]!=="function"){result[key]=me.normalize(json[key],true);}});}})();}else{result=value;}return result;}// add cache support to prevent loops
},{key:"restore",value:function(){var _ref22=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee24(json,recurse){var _this2=this;var cache=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var me,type,_ret7;return _regenerator2.default.wrap(function _callee24$(_context24){while(1){switch(_context24.prev=_context24.next){case 0:me=this,type=typeof json==="undefined"?"undefined":(0,_typeof3.default)(json);if(!(json&&type==="object")){_context24.next=6;break;}return _context24.delegateYield(_regenerator2.default.mark(function _callee23(){var key,keys,keymap,parts,cls,_ret8,_ret9,_ret10,_ret11;return _regenerator2.default.wrap(function _callee23$(_context23){while(1){switch(_context23.prev=_context23.next){case 0:key=json[me.keyProperty],keys=(0,_keys2.default)(json),keymap={};if(!(typeof key==="string")){_context23.next=34;break;}parts=key.split("@");cls=me.scope[parts[0]];if(cls){_context23.next=14;break;}_context23.prev=5;me.scope[parts[0]]=cls=Function("return "+parts[0])();_context23.next=14;break;case 9:_context23.prev=9;_context23.t0=_context23["catch"](5);_ret8=function(){var promises=[];keys.forEach(function(property,i){keymap[i]=property;promises.push(me.restore(json[property],true,cache));});return{v:{v:new _promise2.default(function(resolve,reject){_promise2.default.all(promises).then(function(results){results.forEach(function(data,i){json[keymap[i]]=data;});resolve(json);});})}};}();if(!((typeof _ret8==="undefined"?"undefined":(0,_typeof3.default)(_ret8))==="object")){_context23.next=14;break;}return _context23.abrupt("return",_ret8.v);case 14:if(!(keys.length===1)){_context23.next=21;break;}return _context23.delegateYield(_regenerator2.default.mark(function _callee22(){var object,_instance,instance,promises;return _regenerator2.default.wrap(function _callee22$(_context22){while(1){switch(_context22.prev=_context22.next){case 0:object=void 0;_context22.prev=1;_context22.next=4;return cls.index.get(key);case 4:object=_context22.sent;_context22.next=10;break;case 7:_context22.prev=7;_context22.t0=_context22["catch"](1);console.log(_context22.t0);case 10:if(!(object instanceof cls)){_context22.next=12;break;}return _context22.abrupt("return",{v:{v:_promise2.default.resolve(object)}});case 12:if(!(cls.fromJSON&&object)){_context22.next=16;break;}_instance=cls.fromJSON(object);_instance[cls.index.store.keyProperty]=key;return _context22.abrupt("return",{v:{v:_promise2.default.resolve(_instance)}});case 16:instance=(0,_create2.default)(cls.prototype);if(!(typeof object==="undefined")){_context22.next=20;break;}instance[cls.index.store.keyProperty]=key;return _context22.abrupt("return",{v:{v:_promise2.default.resolve(instance)}});case 20:promises=[];if(object&&(typeof object==="undefined"?"undefined":(0,_typeof3.default)(object))==="object"){(0,_keys2.default)(object).forEach(function(property,i){keymap[i]=property;promises.push(me.restore(object[property],true,cache));});}return _context22.abrupt("return",{v:{v:new _promise2.default(function(resolve,reject){_promise2.default.all(promises).then(function(results){results.forEach(function(data,i){instance[keymap[i]]=data;});resolve(instance);});})}});case 23:case"end":return _context22.stop();}}},_callee22,_this2,[[1,7]]);})(),"t1",16);case 16:_ret9=_context23.t1;if(!((typeof _ret9==="undefined"?"undefined":(0,_typeof3.default)(_ret9))==="object")){_context23.next=19;break;}return _context23.abrupt("return",_ret9.v);case 19:_context23.next=34;break;case 21:if(!(json instanceof cls)){_context23.next=27;break;}_ret10=function(){var promises=[];keys.forEach(function(property,i){keymap[i]=property;promises.push(me.restore(json[property],true,cache).catch(function(e){console.log(e);}));});return{v:{v:new _promise2.default(function(resolve,reject){_promise2.default.all(promises).then(function(results){results.forEach(function(data,i){json[keymap[i]]=data;});resolve(json);});})}};}();if(!((typeof _ret10==="undefined"?"undefined":(0,_typeof3.default)(_ret10))==="object")){_context23.next=25;break;}return _context23.abrupt("return",_ret10.v);case 25:_context23.next=34;break;case 27:if(!cls.fromJSON){_context23.next=31;break;}return _context23.abrupt("return",{v:_promise2.default.resolve(cls.fromJSON(json))});case 31:_ret11=function(){var instance=(0,_create2.default)(cls.prototype),promises=[];keys.forEach(function(property,i){keymap[i]=property;promises.push(me.restore(json[property],true,cache));});return{v:{v:new _promise2.default(function(resolve,reject){_promise2.default.all(promises).then(function(results){results.forEach(function(data,i){instance[keymap[i]]=data;});resolve(instance);});})}};}();if(!((typeof _ret11==="undefined"?"undefined":(0,_typeof3.default)(_ret11))==="object")){_context23.next=34;break;}return _context23.abrupt("return",_ret11.v);case 34:case"end":return _context23.stop();}}},_callee23,_this2,[[5,9]]);})(),"t0",3);case 3:_ret7=_context24.t0;if(!((typeof _ret7==="undefined"?"undefined":(0,_typeof3.default)(_ret7))==="object")){_context24.next=6;break;}return _context24.abrupt("return",_ret7.v);case 6:return _context24.abrupt("return",_promise2.default.resolve(json));case 7:case"end":return _context24.stop();}}},_callee24,this);}));function restore(_x47,_x48,_x49){return _ref22.apply(this,arguments);}return restore;}()},{key:"set",value:function set(key,value,normalize){var action=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){};var me=this;var promise=me.pending[key];me.data[key]=value;if(!promise){promise=me.pending[key]=new _promise2.default(function(resolve,reject){me.pending[key]=me.ready().then(function(){return action(normalize?me.normalize(value):value);});me.pending[key].then(function(result){delete me.pending[key];resolve();});});return promise;}return new _promise2.default(function(resolve,reject){promise.then(function(){me.pending[key]=me.ready().then(function(){return action(normalize?me.normalize(value):value);});me.pending[key].then(function(result){delete me.pending[key];resolve();});});});}}]);return Store;}();var MemStore=function(_Store){(0,_inherits3.default)(MemStore,_Store);function MemStore(name,keyProperty,db){(0,_classCallCheck3.default)(this,MemStore);var _this3=(0,_possibleConstructorReturn3.default)(this,(MemStore.__proto__||(0,_getPrototypeOf2.default)(MemStore)).call(this,name,keyProperty,db));_this3.data={};return _this3;}(0,_createClass3.default)(MemStore,[{key:"clear",value:function(){var _ref23=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee25(){var me;return _regenerator2.default.wrap(function _callee25$(_context25){while(1){switch(_context25.prev=_context25.next){case 0:me=this;(0,_keys2.default)(me.data).forEach(function(key){delete me.data[key];});return _context25.abrupt("return",true);case 3:case"end":return _context25.stop();}}},_callee25,this);}));function clear(){return _ref23.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref24=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee26(key){return _regenerator2.default.wrap(function _callee26$(_context26){while(1){switch(_context26.prev=_context26.next){case 0:if(!this.data[key]){_context26.next=3;break;}delete this.data[key];return _context26.abrupt("return",true);case 3:return _context26.abrupt("return",false);case 4:case"end":return _context26.stop();}}},_callee26,this);}));function _delete(_x52){return _ref24.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref25=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee27(key){return _regenerator2.default.wrap(function _callee27$(_context27){while(1){switch(_context27.prev=_context27.next){case 0:return _context27.abrupt("return",this.data[key]);case 1:case"end":return _context27.stop();}}},_callee27,this);}));function get(_x53){return _ref25.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref26=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee28(key,value){return _regenerator2.default.wrap(function _callee28$(_context28){while(1){switch(_context28.prev=_context28.next){case 0:this.data[key]=value;return _context28.abrupt("return",true);case 2:case"end":return _context28.stop();}}},_callee28,this);}));function set(_x54,_x55){return _ref26.apply(this,arguments);}return set;}()}]);return MemStore;}(Store);var IronCacheStore=function(_Store2){(0,_inherits3.default)(IronCacheStore,_Store2);function IronCacheStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,IronCacheStore);var _this4=(0,_possibleConstructorReturn3.default)(this,(IronCacheStore.__proto__||(0,_getPrototypeOf2.default)(IronCacheStore)).call(this,name,keyProperty,db));_this4.ready(clear);return _this4;}(0,_createClass3.default)(IronCacheStore,[{key:"clear",value:function(){var _ref27=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee29(){var me;return _regenerator2.default.wrap(function _callee29$(_context29){while(1){switch(_context29.prev=_context29.next){case 0:me=this;return _context29.abrupt("return",new _promise2.default(function(resolve,reject){me.db.ironCacheClient.clearCache(me.name,function(err,res){if(err){resolve(false);}else{resolve(true);}});}));case 2:case"end":return _context29.stop();}}},_callee29,this);}));function clear(){return _ref27.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref28=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee30(key){var me;return _regenerator2.default.wrap(function _callee30$(_context30){while(1){switch(_context30.prev=_context30.next){case 0:me=this;return _context30.abrupt("return",(0,_get3.default)(IronCacheStore.prototype.__proto__||(0,_getPrototypeOf2.default)(IronCacheStore.prototype),"delete",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.db.ironCacheClient.del(me.name,key,function(err,res){if(err){reject(err);}else{resolve(true);}});});}));case 2:case"end":return _context30.stop();}}},_callee30,this);}));function _delete(_x56){return _ref28.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref29=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee31(key){var me;return _regenerator2.default.wrap(function _callee31$(_context31){while(1){switch(_context31.prev=_context31.next){case 0:me=this;return _context31.abrupt("return",(0,_get3.default)(IronCacheStore.prototype.__proto__||(0,_getPrototypeOf2.default)(IronCacheStore.prototype),"get",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.db.ironCacheClient.get(me.name,key,function(err,res){if(err){resolve();}else{resolve(JSON.parse(res.value));}});});}));case 2:case"end":return _context31.stop();}}},_callee31,this);}));function get(_x57){return _ref29.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref30=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee32(key,value,normalize){var me;return _regenerator2.default.wrap(function _callee32$(_context32){while(1){switch(_context32.prev=_context32.next){case 0:me=this;return _context32.abrupt("return",(0,_get3.default)(IronCacheStore.prototype.__proto__||(0,_getPrototypeOf2.default)(IronCacheStore.prototype),"set",this).call(this,key,value,normalize,function(normalized){return new _promise2.default(function(resolve,reject){me.db.ironCacheClient.put(me.name,key,{value:(0,_stringify2.default)(normalized)},function(err,res){if(err){reject(err);}else{resolve(true);}});});}));case 2:case"end":return _context32.stop();}}},_callee32,this);}));function set(_x58,_x59,_x60){return _ref30.apply(this,arguments);}return set;}()}]);return IronCacheStore;}(Store);var RedisStore=function(_Store3){(0,_inherits3.default)(RedisStore,_Store3);function RedisStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,RedisStore);var _this5=(0,_possibleConstructorReturn3.default)(this,(RedisStore.__proto__||(0,_getPrototypeOf2.default)(RedisStore)).call(this,name,keyProperty,db));_this5.storage=_this5.db.redisClient;_this5.storage.delete=_this5.storage.del;_this5.ready(clear);return _this5;}(0,_createClass3.default)(RedisStore,[{key:"clear",value:function(){var _ref31=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee33(){var me;return _regenerator2.default.wrap(function _callee33$(_context33){while(1){switch(_context33.prev=_context33.next){case 0:me=this;return _context33.abrupt("return",new _promise2.default(function(resolve,reject){var key=me.name+"."+me.keyProperty;me.storage.hkeys(me.name,function(err,values){if(err){resolve();}else{if(values.length===0){resolve();}else{(function(){var multi=me.storage.multi();values.forEach(function(id){multi=multi.hdel(me.name,id,function(err,res){if(err){reject(err);}else{resolve(true);}});});multi.exec(function(err,replies){if(err){console.log(err);reject(err);}else{resolve(true);}});})();}}});}));case 2:case"end":return _context33.stop();}}},_callee33,this);}));function clear(){return _ref31.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref32=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee34(key){var me;return _regenerator2.default.wrap(function _callee34$(_context34){while(1){switch(_context34.prev=_context34.next){case 0:me=this;return _context34.abrupt("return",(0,_get3.default)(RedisStore.prototype.__proto__||(0,_getPrototypeOf2.default)(RedisStore.prototype),"delete",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.hdel(me.name,key,function(err,res){if(err){reject(err);}else{resolve();}});});}));case 2:case"end":return _context34.stop();}}},_callee34,this);}));function _delete(_x61){return _ref32.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref33=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee35(key){var me;return _regenerator2.default.wrap(function _callee35$(_context35){while(1){switch(_context35.prev=_context35.next){case 0:me=this;return _context35.abrupt("return",(0,_get3.default)(RedisStore.prototype.__proto__||(0,_getPrototypeOf2.default)(RedisStore.prototype),"get",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.hget(me.name,key,function(err,value){if(err){resolve();}else{if(!value){resolve();}else{resolve(JSON.parse(value));}}});});}));case 2:case"end":return _context35.stop();}}},_callee35,this);}));function get(_x62){return _ref33.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref34=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee36(key,value,normalize){var me;return _regenerator2.default.wrap(function _callee36$(_context36){while(1){switch(_context36.prev=_context36.next){case 0:me=this;return _context36.abrupt("return",(0,_get3.default)(RedisStore.prototype.__proto__||(0,_getPrototypeOf2.default)(RedisStore.prototype),"set",this).call(this,key,value,normalize,function(normalized){return new _promise2.default(function(resolve,reject){me.storage.hset(me.name,key,(0,_stringify2.default)(normalized),function(err,res){if(err){reject(err);}else{resolve();}});});}));case 2:case"end":return _context36.stop();}}},_callee36,this);}));function set(_x63,_x64,_x65){return _ref34.apply(this,arguments);}return set;}()}]);return RedisStore;}(Store);var MemcachedStore=function(_Store4){(0,_inherits3.default)(MemcachedStore,_Store4);function MemcachedStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,MemcachedStore);var _this6=(0,_possibleConstructorReturn3.default)(this,(MemcachedStore.__proto__||(0,_getPrototypeOf2.default)(MemcachedStore)).call(this,name,keyProperty,db));_this6.storage=_this6.db.memcachedClient;_this6.ready(clear);return _this6;}(0,_createClass3.default)(MemcachedStore,[{key:"clear",value:function(){var _ref35=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee37(){var me;return _regenerator2.default.wrap(function _callee37$(_context37){while(1){switch(_context37.prev=_context37.next){case 0:me=this;return _context37.abrupt("return",new _promise2.default(function(resolve,reject){var key=me.name+"."+me.keyProperty;me.storage.get(key,function(err,value){if(err){resolve();}else{if(!value){resolve();}else{me.storage.delete(key,function(err,res){if(err){reject(err);}else{resolve(true);}});}}});}));case 2:case"end":return _context37.stop();}}},_callee37,this);}));function clear(){return _ref35.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref36=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee38(key){var me;return _regenerator2.default.wrap(function _callee38$(_context38){while(1){switch(_context38.prev=_context38.next){case 0:me=this;return _context38.abrupt("return",(0,_get3.default)(MemcachedStore.prototype.__proto__||(0,_getPrototypeOf2.default)(MemcachedStore.prototype),"delete",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.delete(key,function(err,res){if(err){reject(err);}else{resolve(true);}});});}));case 2:case"end":return _context38.stop();}}},_callee38,this);}));function _delete(_x66){return _ref36.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref37=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee39(key){var me;return _regenerator2.default.wrap(function _callee39$(_context39){while(1){switch(_context39.prev=_context39.next){case 0:me=this;return _context39.abrupt("return",(0,_get3.default)(MemcachedStore.prototype.__proto__||(0,_getPrototypeOf2.default)(MemcachedStore.prototype),"get",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.get(key,function(err,value,key){if(err){resolve();}else{if(!value){resolve();}else{resolve(JSON.parse(value));}}});});}));case 2:case"end":return _context39.stop();}}},_callee39,this);}));function get(_x67){return _ref37.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref38=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee40(key,value,normalize){var me;return _regenerator2.default.wrap(function _callee40$(_context40){while(1){switch(_context40.prev=_context40.next){case 0:me=this;return _context40.abrupt("return",(0,_get3.default)(MemcachedStore.prototype.__proto__||(0,_getPrototypeOf2.default)(MemcachedStore.prototype),"set",this).call(this,key,value,normalize,function(normalized){return new _promise2.default(function(resolve,reject){me.storage.set(key,(0,_stringify2.default)(normalized),function(err,res){if(err){reject(err);}else{resolve(true);}});});}));case 2:case"end":return _context40.stop();}}},_callee40,this);}));function set(_x68,_x69,_x70){return _ref38.apply(this,arguments);}return set;}()}]);return MemcachedStore;}(Store);function blockString(block){var encoding=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"utf8";return"["+bytePadEnd(block[0]+"",20," ",encoding)+","+bytePadEnd(block[1]+"",20," ",encoding)+"]";}function bytePadEnd(str,length,pad){var encoding=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"utf8";var needed=length-Buffer.byteLength(str,encoding);if(needed>0){return str+Buffer.alloc(needed," ",encoding).toString(encoding);}return str;}var JSONBlockStore=function(_Store5){(0,_inherits3.default)(JSONBlockStore,_Store5);function JSONBlockStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,JSONBlockStore);var _this7=(0,_possibleConstructorReturn3.default)(this,(JSONBlockStore.__proto__||(0,_getPrototypeOf2.default)(JSONBlockStore)).call(this,name,keyProperty,db));_this7.path=db.name+"/"+name;_this7.encoding="utf8";_this7.opened=false;if(clear){_this7.clear();}return _this7;}(0,_createClass3.default)(JSONBlockStore,[{key:"open",value:function open(){// also add a transactional file class <file>.json, <file>.queue.json, <file>.<line> (line currently processing), <file>.done.json (lines processed)
try{this.freefd=fs.openSync(this.path+"/free.json","r+");}catch(e){this.freefd=fs.openSync(this.path+"/free.json","w+");}try{this.blocksfd=fs.openSync(this.path+"/blocks.json","r+");// r+ block offsets and lengths for ids
}catch(e){this.blocksfd=fs.openSync(this.path+"/blocks.json","w+");}try{this.storefd=fs.openSync(this.path+"/store.json","r+");// the actual data
}catch(e){this.storefd=fs.openSync(this.path+"/store.json","w+");}var blocks=fs.readFileSync(this.path+"/blocks.json",this.encoding),// {<id>:{start:start,end:end,length:length}[,...]}
freestat=fs.statSync(this.path+"/free.json"),blocksstat=fs.statSync(this.path+"/blocks.json"),storestat=fs.statSync(this.path+"/store.json");var free=fs.readFileSync(this.path+"/free.json",this.encoding);// [{start:start,end:end,length:length}[,...]]
if(free.length===0){this.free=[];}else{free=free.trim();if(free[0]===","){free=free.substring(1);}if(free[free.length-1]===","){free=free.substring(0,free.length-1);}this.free=JSON.parse("["+free+"]");}this.blocks=blocks.length>0?JSON.parse(blocks):{};this.freeSize=freestat.size;this.blocksSize=blocksstat.size;this.storeSize=storestat.size;this.opened=true;return true;}},{key:"alloc",value:function alloc(length){var encoding=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"utf8";var me=this;var block=void 0;if(!me.alloc.size){me.alloc.size=Buffer.byteLength(blockString([0,0],encoding),encoding);me.alloc.empty=bytePadEnd("null",me.alloc.size," ",encoding);}for(var i=0;i<me.free.length;i++){block=me.free[i];if(block&&block[1]-block[0]>=length){var position=(me.alloc.size+1)*i;me.free[i]=null;fs.writeSync(me.freefd,me.alloc.empty,position,encoding);return block;}}var start=me.storeSize===0?0:me.storeSize+1;return[start,start+length];}},{key:"clear",value:function(){var _ref39=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee41(){return _regenerator2.default.wrap(function _callee41$(_context41){while(1){switch(_context41.prev=_context41.next){case 0:if(!this.opened){this.open();}fs.ftruncateSync(this.freefd);fs.ftruncateSync(this.blocksfd);fs.ftruncateSync(this.storefd);this.freeSize=0;this.blocksSize=0;this.storeSize=0;this.free=[];this.blocks={};case 9:case"end":return _context41.stop();}}},_callee41,this);}));function clear(){return _ref39.apply(this,arguments);}return clear;}()},{key:"compress",value:function compress(){var me=this;if(!me.opened){me.open();}var newfree=[];me.freeSize=0;me.free.forEach(function(block,i){if(block){newfree.push(block);var str=blockString(block,me.encoding)+",";fs.writeSync(me.freefd,str,me.freeSize,me.encoding);me.freeSize+=Buffer.byteLength(str,me.encoding);}});me.free=newfree;fs.ftruncateSync(me.freefd,me.freeSize);me.blocksSize=1;me.storeSize=0;fs.writeSync(me.blocksfd,"{",0,me.encoding);(0,_keys2.default)(me.blocks).forEach(function(key,i){var str='"'+key+'":'+(0,_stringify2.default)(me.blocks[key])+",";fs.writeSync(me.blocksfd,str,me.blocksSize,me.encoding);me.blocksSize+=Buffer.byteLength(str,me.encoding);});fs.writeSync(me.blocksfd,"}",me.blocksSize-1,me.encoding);fs.ftruncateSync(me.blocksfd,me.blocksSize);}},{key:"delete",value:function(){var _ref40=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee42(id){var me,block,blanks,str,fposition;return _regenerator2.default.wrap(function _callee42$(_context42){while(1){switch(_context42.prev=_context42.next){case 0:me=this;if(!me.opened){me.open();}block=me.blocks[id];if(block){blanks=bytePadEnd("",block[1]-block[0],me.encoding);delete me.blocks[id];fs.writeSync(me.storefd,blanks,block[0],"utf8");// write blank padding
me.free.push(block);str=blockString(block,me.encoding)+",";fs.writeSync(me.freefd,str,me.freeSize,me.encoding);me.freeSize+=Buffer.byteLength(str,me.encoding);str=(me.blocksSize===0?'{':',')+'"'+id+'":null}';fposition=me.blocksSize===0?0:me.blocksSize-1;fs.writeSync(me.blocksfd,str,fposition,me.encoding);me.blocksSize=fposition+Buffer.byteLength(str,me.encoding);}case 4:case"end":return _context42.stop();}}},_callee42,this);}));function _delete(_x74){return _ref40.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref41=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee43(id){var me,block,buffer,result;return _regenerator2.default.wrap(function _callee43$(_context43){while(1){switch(_context43.prev=_context43.next){case 0:me=this;if(!me.opened){me.open();}block=me.blocks[id];if(!block){_context43.next=8;break;}buffer=Buffer.alloc(block[1]-block[0]);fs.readSync(me.storefd,buffer,0,block[1]-block[0],block[0]);result=JSON.parse(buffer.toString());return _context43.abrupt("return",(0,_get3.default)(JSONBlockStore.prototype.__proto__||(0,_getPrototypeOf2.default)(JSONBlockStore.prototype),"restore",this).call(this,result.value));case 8:case"end":return _context43.stop();}}},_callee43,this);}));function get(_x75){return _ref41.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref42=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee44(id,data){var me,block,str,blen,freeblock,fposition;return _regenerator2.default.wrap(function _callee44$(_context44){while(1){switch(_context44.prev=_context44.next){case 0:me=this;if(!me.opened){me.open();}block=me.blocks[id];str='{"id":"'+id+'","value":'+(0,_stringify2.default)(data)+'}';blen=Buffer.byteLength(str,'utf8');if(!block){_context44.next=9;break;}if(!(block[0]+blen-1<block[1])){_context44.next=9;break;}// and update is same or smaller
fs.writeSync(me.storefd,bytePadEnd(str,block[1]-block[0],me.encoding),block[0],me.encoding);// write the data with blank padding
return _context44.abrupt("return");case 9:freeblock=me.alloc(blen,me.encoding);// find a free block large enough
fs.writeSync(me.storefd,bytePadEnd(str,freeblock[1]-freeblock[0],me.encoding),freeblock[0]);// write the data with blank padding
me.storeSize=Math.max(freeblock[1],me.storeSize);me.blocks[id]=freeblock;// update the blocks info
if(block){// free old block which was too small, if there was one
fs.writeSync(me.storefd,bytePadEnd("",block[1]-block[0]," "),block[0],me.encoding);// write blank padding
me.free.push(block);str=blockString(block,me.encoding)+",";fs.writeSync(me.freefd,str,me.freeSize,me.encoding);me.freeSize+=Buffer.byteLength(str,me.encoding);}str=(me.blocksSize===0?'{':',')+'"'+id+'":'+(0,_stringify2.default)(freeblock)+"}";fposition=me.blocksSize===0?0:me.blocksSize-1;fs.writeSync(me.blocksfd,str,fposition,me.encoding);me.blocksSize=fposition+Buffer.byteLength(str,me.encoding);case 18:case"end":return _context44.stop();}}},_callee44,this);}));function set(_x76,_x77){return _ref42.apply(this,arguments);}return set;}()}]);return JSONBlockStore;}(Store);var LevelUPStore=function(_Store6){(0,_inherits3.default)(LevelUPStore,_Store6);function LevelUPStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,LevelUPStore);var _this8=(0,_possibleConstructorReturn3.default)(this,(LevelUPStore.__proto__||(0,_getPrototypeOf2.default)(LevelUPStore)).call(this,name,keyProperty,db));_this8.storage=db.levelUPClient(db.name+"/"+name);//db.levelUPClient(db.name);
_this8.ready(clear);return _this8;}(0,_createClass3.default)(LevelUPStore,[{key:"clear",value:function(){var _ref43=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee45(){var me,promises,resolver,rejector,promise;return _regenerator2.default.wrap(function _callee45$(_context45){while(1){switch(_context45.prev=_context45.next){case 0:me=this,promises=[];resolver=void 0,rejector=void 0;promise=new _promise2.default(function(resolve,reject){resolver=resolve;rejector=reject;});me.storage.createKeyStream().on("data",function(key){promises.push(me.delete(key,true));}).on("end",function(){_promise2.default.all(promises).then(function(){resolver(true);});}).on("error",function(){rejector(err);});return _context45.abrupt("return",promise);case 5:case"end":return _context45.stop();}}},_callee45,this);}));function clear(){return _ref43.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref44=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee46(key){var me;return _regenerator2.default.wrap(function _callee46$(_context46){while(1){switch(_context46.prev=_context46.next){case 0:me=this;return _context46.abrupt("return",(0,_get3.default)(LevelUPStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LevelUPStore.prototype),"delete",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.del(key+".json",{},function(err){if(err){if(err.notFound){resolve(true);}else{reject(err);}}else{resolve(true);}});});}));case 2:case"end":return _context46.stop();}}},_callee46,this);}));function _delete(_x78){return _ref44.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref45=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee47(key){var me;return _regenerator2.default.wrap(function _callee47$(_context47){while(1){switch(_context47.prev=_context47.next){case 0:me=this;return _context47.abrupt("return",(0,_get3.default)(LevelUPStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LevelUPStore.prototype),"get",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.get(key+".json",{},function(err,value){if(err){if(err.notFound){resolve();}else{reject(err);}}else if(!value){resolve();}else{resolve(JSON.parse(value));}});});}));case 2:case"end":return _context47.stop();}}},_callee47,this);}));function get(_x79){return _ref45.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref46=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee48(key,value,normalize){var me;return _regenerator2.default.wrap(function _callee48$(_context48){while(1){switch(_context48.prev=_context48.next){case 0:me=this;return _context48.abrupt("return",(0,_get3.default)(LevelUPStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LevelUPStore.prototype),"set",this).call(this,key,value,normalize,function(normalized){return new _promise2.default(function(resolve,reject){me.storage.put(key+".json",(0,_stringify2.default)(normalized),{},function(err){if(err){reject(err);}else{resolve(true);}});});}));case 2:case"end":return _context48.stop();}}},_callee48,this);}));function set(_x80,_x81,_x82){return _ref46.apply(this,arguments);}return set;}()}]);return LevelUPStore;}(Store);var LocalStore=function(_Store7){(0,_inherits3.default)(LocalStore,_Store7);function LocalStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,LocalStore);var _this9=(0,_possibleConstructorReturn3.default)(this,(LocalStore.__proto__||(0,_getPrototypeOf2.default)(LocalStore)).call(this,name,keyProperty,db));if(typeof window!=="undefined"){_this9.storage=window.localStorage;}else{var _r=require,LocalStorage=_r("./LocalStorage.js").LocalStorage;_this9.storage=new LocalStorage(db.name+"/"+name);}if(clear){_this9.storage.clear();}return _this9;}(0,_createClass3.default)(LocalStore,[{key:"clear",value:function(){var _ref47=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee49(){return _regenerator2.default.wrap(function _callee49$(_context49){while(1){switch(_context49.prev=_context49.next){case 0:this.storage.clear();return _context49.abrupt("return",true);case 2:case"end":return _context49.stop();}}},_callee49,this);}));function clear(){return _ref47.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref48=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee50(key){var _this10=this;return _regenerator2.default.wrap(function _callee50$(_context50){while(1){switch(_context50.prev=_context50.next){case 0:return _context50.abrupt("return",(0,_get3.default)(LocalStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LocalStore.prototype),"delete",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){_this10.storage.removeItem(key+".json");resolve(true);});}));case 1:case"end":return _context50.stop();}}},_callee50,this);}));function _delete(_x83){return _ref48.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref49=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee51(key){var me;return _regenerator2.default.wrap(function _callee51$(_context51){while(1){switch(_context51.prev=_context51.next){case 0:me=this;return _context51.abrupt("return",(0,_get3.default)(LocalStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LocalStore.prototype),"get",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){var value=me.storage.getItem(key+".json");if(!value){resolve();}else{resolve(JSON.parse(value));}});}));case 2:case"end":return _context51.stop();}}},_callee51,this);}));function get(_x84){return _ref49.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref50=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee52(key,value,normalize){var me;return _regenerator2.default.wrap(function _callee52$(_context52){while(1){switch(_context52.prev=_context52.next){case 0:me=this;return _context52.abrupt("return",(0,_get3.default)(LocalStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LocalStore.prototype),"set",this).call(this,key,value,normalize,function(normalized){return new _promise2.default(function(resolve,reject){me.storage.setItem(key+".json",(0,_stringify2.default)(normalized));resolve(true);});}));case 2:case"end":return _context52.stop();}}},_callee52,this);}));function set(_x85,_x86,_x87){return _ref50.apply(this,arguments);}return set;}()}]);return LocalStore;}(Store);var LocalForageStore=function(_Store8){(0,_inherits3.default)(LocalForageStore,_Store8);function LocalForageStore(name,keyProperty,db,clear){(0,_classCallCheck3.default)(this,LocalForageStore);var _this11=(0,_possibleConstructorReturn3.default)(this,(LocalForageStore.__proto__||(0,_getPrototypeOf2.default)(LocalForageStore)).call(this,name,keyProperty,db));if(typeof window!=="undefined"){//window.localforage.config({name:"ReasonDB"})
_this11.storage=window.localforage;}else{var _ret13;return _ret13=new LocalStore(name,keyProperty,db,clear),(0,_possibleConstructorReturn3.default)(_this11,_ret13);}if(clear){_this11.storage.clear();}return _this11;}(0,_createClass3.default)(LocalForageStore,[{key:"clear",value:function(){var _ref51=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee53(){return _regenerator2.default.wrap(function _callee53$(_context53){while(1){switch(_context53.prev=_context53.next){case 0:_context53.prev=0;_context53.next=3;return this.storage.clear();case 3:_context53.next=8;break;case 5:_context53.prev=5;_context53.t0=_context53["catch"](0);console.log(_context53.t0);case 8:return _context53.abrupt("return",true);case 9:case"end":return _context53.stop();}}},_callee53,this,[[0,5]]);}));function clear(){return _ref51.apply(this,arguments);}return clear;}()},{key:"delete",value:function(){var _ref52=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee54(key){var me;return _regenerator2.default.wrap(function _callee54$(_context54){while(1){switch(_context54.prev=_context54.next){case 0:me=this;return _context54.abrupt("return",(0,_get3.default)(LocalForageStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LocalForageStore.prototype),"delete",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.removeItem(key+".json").then(function(){resolve(true);});});}));case 2:case"end":return _context54.stop();}}},_callee54,this);}));function _delete(_x88){return _ref52.apply(this,arguments);}return _delete;}()},{key:"get",value:function(){var _ref53=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee55(key){var me;return _regenerator2.default.wrap(function _callee55$(_context55){while(1){switch(_context55.prev=_context55.next){case 0:me=this;return _context55.abrupt("return",(0,_get3.default)(LocalForageStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LocalForageStore.prototype),"get",this).call(this,key,function(){return new _promise2.default(function(resolve,reject){me.storage.getItem(key+".json").then(function(result){if(!result){resolve();}else{resolve(result);}});});}));case 2:case"end":return _context55.stop();}}},_callee55,this);}));function get(_x89){return _ref53.apply(this,arguments);}return get;}()},{key:"set",value:function(){var _ref54=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee56(key,value,normalize){var me;return _regenerator2.default.wrap(function _callee56$(_context56){while(1){switch(_context56.prev=_context56.next){case 0:me=this;return _context56.abrupt("return",(0,_get3.default)(LocalForageStore.prototype.__proto__||(0,_getPrototypeOf2.default)(LocalForageStore.prototype),"set",this).call(this,key,value,normalize,function(normalized){return new _promise2.default(function(resolve,reject){me.storage.setItem(key+".json",normalized).then(function(){resolve(true);});});}));case 2:case"end":return _context56.stop();}}},_callee56,this);}));function set(_x90,_x91,_x92){return _ref54.apply(this,arguments);}return set;}()}]);return LocalForageStore;}(Store);var ReasonDB=function(){function ReasonDB(name){var keyProperty=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"@key";var storageType=arguments[2];var clear=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var activate=arguments.length>4&&arguments[4]!==undefined?arguments[4]:true;var options=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};(0,_classCallCheck3.default)(this,ReasonDB);// make the additional args part of a config object, add a config option for active or passive objects
var db=this;if(typeof storageType==="undefined"){console.log("WARNING: storageType undefined, defaulting to ReasonDB.MemStore.");storageType=MemStore;}db.name=name;db.keyProperty=keyProperty;db.storageType=storageType;db.clear=clear;db.classes={};db.activate=activate;(0,_keys2.default)(options).forEach(function(key){db[key]=options[key];});delete Object.index;db.index(Object,keyProperty,storageType,clear);db.Pattern=function(){function Pattern(projection,classVars,when,then){(0,_classCallCheck3.default)(this,Pattern);var me=this;me.projection=projection;me.classNames={};Object.defineProperty(me,"classVars",{configurable:true,writable:true,value:classVars});(0,_keys2.default)(classVars).forEach(function(classVar){me.classNames[classVar]=me.classVars[classVar].name;});Object.defineProperty(me,"when",{configurable:true,writable:true,value:when});Object.defineProperty(me,"then",{configurable:true,writable:true,value:then});Pattern.index.put(me);}(0,_createClass3.default)(Pattern,[{key:"toJSON",value:function toJSON(){var me=this,result={};result[db.keyProperty]=me[db.keyProperty];result.classVars=me.classNames;result.when=me.when;return result;}}]);return Pattern;}();db.index(Array,keyProperty,storageType,clear);db.index(Date,keyProperty,storageType,clear);db.index(db.Pattern,keyProperty,storageType,clear);db.patterns={};}(0,_createClass3.default)(ReasonDB,[{key:"deleteIndex",value:function(){var _ref55=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee57(cls){return _regenerator2.default.wrap(function _callee57$(_context57){while(1){switch(_context57.prev=_context57.next){case 0:if(!cls.index){_context57.next=11;break;}_context57.prev=1;_context57.next=4;return cls.index.clear();case 4:_context57.next=9;break;case 6:_context57.prev=6;_context57.t0=_context57["catch"](1);console.log(_context57.t0);case 9:delete cls.index;;case 11:case"end":return _context57.stop();}}},_callee57,this,[[1,6]]);}));function deleteIndex(_x97){return _ref55.apply(this,arguments);}return deleteIndex;}()},{key:"index",value:function index(cls,keyProperty,storageType,clear){var db=this;keyProperty=keyProperty?keyProperty:db.keyProperty;storageType=storageType?storageType:db.storageType;clear=clear?clear:db.clear;if(!cls.index||clear){cls.index=new Index(cls,keyProperty,db,storageType,clear);db.classes[cls.name]=cls;}return cls.index;}},{key:"delete",value:function _delete(){var db=this;return{from:function from(classVars){return{where:function where(pattern){return{exec:function exec(){return new _promise2.default(function(resolve,reject){db.select().from(classVars).where(pattern).exec().then(function(cursor){cursor.count().then(function(count){if(count>0){var _ret14=function(){var promises=[];(0,_keys2.default)(cursor.classVarMap).forEach(function(classVar){var i=cursor.classVarMap[classVar],cls=classVars[classVar];cursor.cxproduct.collections[i].forEach(function(id){promises.push(cls.index.delete(id).catch(function(e){console.log(e);}));});});_promise2.default.all(promises).then(function(results){resolve(results);}).catch(function(e){console.log(e);});return{v:void 0};}();if((typeof _ret14==="undefined"?"undefined":(0,_typeof3.default)(_ret14))==="object")return _ret14.v;}resolve([]);});});});}};}};}};}},{key:"insert",value:function insert(){var db=this,objects=[].slice.call(arguments,0);return{into:function into(cls){var classes=void 0;if(arguments.length===1){classes=new(Function.prototype.bind.apply(Array,[null].concat((0,_toConsumableArray3.default)(objects))))();classes.forEach(function(object,i){classes[i]=cls;});}else{var _slice;classes=(_slice=[].slice).call.apply(_slice,Array.prototype.slice.call(arguments).concat([0]));}return{exec:function exec(){var activity=new Activity();objects.forEach(function(object,i){activity.step(function(){var instance=void 0;if(object instanceof cls){instance=object;}else if(cls.fromJSON){instance=cls.fromJSON(object);}else{instance=(0,_create2.default)(cls.prototype);Object.defineProperty(instance,"constructor",{configurable:true,writable:true,value:cls});(0,_keys2.default)(object).forEach(function(key){instance[key]=object[key];});}if(!cls.index){cls.index=db.index(cls);}return cls.index.put(instance);});});activity.step(function(){activity.results.forEach(function(instance){stream(instance,db);});});return activity.exec();}};},exec:function exec(){var classes=[];objects.forEach(function(object){classes.push(object.constructor);});return this.into.apply(this,classes).exec();}};}},{key:"select",value:function select(projection){var db=this;return{first:function first(count){var me=this;me.firstCount=count;return{from:function from(classVars){return me.from(classVars);}};},random:function random(count){var me=this;me.randomCount=count;return{from:function from(classVars){return me.from(classVars);}};},sample:function sample(confidence,range){var me=this;me.sampleSpec={confidence:confidence,range:range};return{from:function from(classVars){return me.from(classVars);}};},from:function from(classVars){var select=this;return{where:function where(pattern,restrictVar,instanceId){return{orderBy:function orderBy(ordering){// {$o: {name: "asc"}}
var me=this;me.ordering=ordering;return{exec:function exec(){return me.exec();}};},exec:function exec(ordering){return new _promise2.default(function(resolve,reject){var matches={},restrictright={},matchvars=[],activity=new Activity();if(typeof pattern==="function"){(function(){var classes=[];(0,_keys2.default)(classVars).forEach(function(key){classes.push(classVars[key]);});asynchronize(pattern.apply(undefined,classes)).then(function(rows){var cursor=new Cursor(classes,rows,projection,classVars);if(select.firstCount){cursor.first(select.firstCount).then(function(rows){resolve(new Cursor(classes,rows));});}else if(select.randomCount){cursor.random(select.randomCount).then(function(rows){resolve(new Cursor(classes,rows));});}else if(select.sampleSpec){cursor.sample(select.sampleSpec.confidence,select.sampleSpec.range).then(function(rows){resolve(new Cursor(classes,rows));});}else{resolve(cursor);// ,matches
}});})();}else{(0,_keys2.default)(pattern).forEach(function(classVar){if(!classVars[classVar]){return;}if(!classVars[classVar].index){db.index(classVars[classVar]);}matchvars.push(classVar);activity.step(function(){return classVars[classVar].index.match(pattern[classVar],classVars,matches,restrictright,classVar);});});activity.step(function(){var pass=true;activity.results.every(function(result,i){if(result.length===0){pass=false;}return pass;});if(!pass){resolve(new Cursor([],new CXProduct([]),projection,{}),matches);}else{var _ret16=function(){var classes=[],collections=[],promises=[],vars=[],classVarMap={},filter=function filter(row,index,cxp){return row.every(function(item,i){if(!item){return false;}if(i===0||!restrictright[i]){return true;}var prev=row[i-1];return!restrictright[i][prev]||restrictright[i][prev].indexOf(item)>=0;});};(0,_keys2.default)(classVars).forEach(function(classVar){if(matches[classVar]){collections.push(matches[classVar]);classes.push(classVars[classVar]);}});var cursor=new Cursor(classes,new CXProduct(collections,filter),projection,classVars);if(select.firstCount){cursor.first(select.firstCount).then(function(rows){resolve(new Cursor(classes,rows));});}else if(select.randomCount){cursor.random(select.randomCount).then(function(rows){resolve(new Cursor(classes,rows));});}else if(select.sampleSpec){cursor.sample(select.sampleSpec.confidence,select.sampleSpec.range).then(function(rows){resolve(new Cursor(classes,rows));});}else{resolve(cursor,matches);}return{v:null};}();if((typeof _ret16==="undefined"?"undefined":(0,_typeof3.default)(_ret16))==="object")return _ret16.v;}}).exec();}});}};}};}};}},{key:"update",value:function update(classVars){var db=this;return{set:function set(values){return{where:function where(pattern){return{exec:function exec(){return new _promise2.default(function(resolve,reject){var updated={},promises=[];db.select().from(classVars).where(pattern).exec().then(function(cursor,matches){var vars=(0,_keys2.default)(classVars);promises.push(cursor.forEach(function(row){row.forEach(function(object,i){var classVar=vars[i];var activated=void 0;if(values[classVar]){(0,_keys2.default)(values[classVar]).forEach(function(property){var value=values[classVar][property];if(value&&(typeof value==="undefined"?"undefined":(0,_typeof3.default)(value))==="object"){var sourcevar=(0,_keys2.default)(value)[0];if(classVars[sourcevar]){var j=vars.indexOf(sourcevar);value=row[j][value[sourcevar]];}}activated=activated===false||typeof object[property]==="undefined"?false:db.activate;if(object[property]!==value){object[property]=value;updated[object[db.keyProperty]]=true;}});if(!activated){promises.push(db.save(object).exec());}}});}));});_promise2.default.all(promises).then(function(){resolve((0,_keys2.default)(updated).length);});});}};}};}};}},{key:"when",value:function when(whenPattern){var db=this;return{from:function from(classVars){return{select:function select(projection){var pattern=new db.Pattern(projection,classVars,whenPattern);//	promise = new Promise((resolve,reject) => { pattern.resolver = resolve; pattern.rejector = reject; });
(0,_keys2.default)(whenPattern).forEach(function(classVar){if(classVar[0]!=="$"){return;}var cls=classVars[classVar];if(!db.patterns[cls.name]){db.patterns[cls.name]={};}(0,_keys2.default)(whenPattern[classVar]).forEach(function(property){if(!db.patterns[cls.name][property]){db.patterns[cls.name][property]={};}if(!db.patterns[cls.name][property][pattern[db.keyProperty]]){db.patterns[cls.name][property][pattern[db.keyProperty]]={};}if(!db.patterns[cls.name][property][pattern[db.keyProperty]][classVar]){db.patterns[cls.name][property][pattern[db.keyProperty]][classVar]=pattern;}});});return{then:function then(f){Object.defineProperty(pattern,"action",{configurable:true,writable:true,value:f});}};}};}};}}]);return ReasonDB;}();ReasonDB.prototype.save=ReasonDB.prototype.insert;ReasonDB.LocalStore=LocalStore;ReasonDB.MemStore=MemStore;ReasonDB.LocalForageStore=LocalForageStore;ReasonDB.IronCacheStore=IronCacheStore;ReasonDB.RedisStore=RedisStore;ReasonDB.MemcachedStore=MemcachedStore;ReasonDB.LevelUPStore=LevelUPStore;ReasonDB.JSONBlockStore=JSONBlockStore;ReasonDB.Activity=Activity;if(typeof module!=="undefined"){module.exports=ReasonDB;}if(typeof window!=="undefined"){window.ReasonDB=ReasonDB;}})();

}).call(this,require("buffer").Buffer)
},{"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/create":4,"babel-runtime/core-js/object/define-property":5,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/object/get-own-property-names":7,"babel-runtime/core-js/object/get-prototype-of":8,"babel-runtime/core-js/object/keys":9,"babel-runtime/core-js/promise":11,"babel-runtime/core-js/set":12,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/get":18,"babel-runtime/helpers/inherits":19,"babel-runtime/helpers/possibleConstructorReturn":20,"babel-runtime/helpers/toConsumableArray":21,"babel-runtime/helpers/typeof":22,"babel-runtime/regenerator":23,"buffer":25}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":27}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":28}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":29}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":30}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":31}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-names"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-names":32}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":33}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":34}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":35}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":36}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":37}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":38}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":39}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":11}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":5}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":6,"../core-js/object/get-prototype-of":8}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":4,"../core-js/object/set-prototype-of":10,"../helpers/typeof":22}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":22}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":2}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":13,"../core-js/symbol/iterator":14}],23:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":139}],24:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],25:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":24,"ieee754":137,"isarray":26}],26:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":54,"../../modules/es6.array.from":119,"../../modules/es6.string.iterator":131}],28:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":54}],29:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":54,"../../modules/es6.object.create":121}],30:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":54,"../../modules/es6.object.define-property":122}],31:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":54,"../../modules/es6.object.get-own-property-descriptor":123}],32:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-names');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyNames(it){
  return $Object.getOwnPropertyNames(it);
};
},{"../../modules/_core":54,"../../modules/es6.object.get-own-property-names":124}],33:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":54,"../../modules/es6.object.get-prototype-of":125}],34:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":54,"../../modules/es6.object.keys":126}],35:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":54,"../../modules/es6.object.set-prototype-of":127}],36:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":54,"../modules/es6.object.to-string":128,"../modules/es6.promise":129,"../modules/es6.string.iterator":131,"../modules/web.dom.iterable":136}],37:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/_core').Set;
},{"../modules/_core":54,"../modules/es6.object.to-string":128,"../modules/es6.set":130,"../modules/es6.string.iterator":131,"../modules/es7.set.to-json":133,"../modules/web.dom.iterable":136}],38:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":54,"../../modules/es6.object.to-string":128,"../../modules/es6.symbol":132,"../../modules/es7.symbol.async-iterator":134,"../../modules/es7.symbol.observable":135}],39:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":116,"../../modules/es6.string.iterator":131,"../../modules/web.dom.iterable":136}],40:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],41:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],42:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],43:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":74}],44:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":64}],45:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":108,"./_to-iobject":110,"./_to-length":111}],46:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":48,"./_ctx":56,"./_iobject":71,"./_to-length":111,"./_to-object":112}],47:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":73,"./_is-object":74,"./_wks":117}],48:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":47}],49:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":50,"./_wks":117}],50:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],51:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":42,"./_ctx":56,"./_defined":57,"./_descriptors":58,"./_for-of":64,"./_iter-define":77,"./_iter-step":79,"./_meta":83,"./_object-create":85,"./_object-dp":86,"./_redefine-all":98,"./_set-species":101}],52:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":44,"./_classof":49}],53:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":42,"./_array-methods":46,"./_descriptors":58,"./_export":62,"./_fails":63,"./_for-of":64,"./_global":65,"./_hide":67,"./_is-object":74,"./_meta":83,"./_object-dp":86,"./_redefine-all":98,"./_set-to-string-tag":102}],54:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],55:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":86,"./_property-desc":97}],56:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":40}],57:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],58:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":63}],59:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":65,"./_is-object":74}],60:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],61:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":91,"./_object-keys":94,"./_object-pie":95}],62:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":54,"./_ctx":56,"./_global":65,"./_hide":67}],63:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],64:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":43,"./_ctx":56,"./_is-array-iter":72,"./_iter-call":75,"./_to-length":111,"./core.get-iterator-method":118}],65:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],66:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],67:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":58,"./_object-dp":86,"./_property-desc":97}],68:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":65}],69:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":58,"./_dom-create":59,"./_fails":63}],70:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],71:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":50}],72:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":80,"./_wks":117}],73:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":50}],74:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],75:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":43}],76:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":67,"./_object-create":85,"./_property-desc":97,"./_set-to-string-tag":102,"./_wks":117}],77:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":62,"./_has":66,"./_hide":67,"./_iter-create":76,"./_iterators":80,"./_library":82,"./_object-gpo":92,"./_redefine":99,"./_set-to-string-tag":102,"./_wks":117}],78:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":117}],79:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],80:[function(require,module,exports){
module.exports = {};
},{}],81:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":94,"./_to-iobject":110}],82:[function(require,module,exports){
module.exports = true;
},{}],83:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":63,"./_has":66,"./_is-object":74,"./_object-dp":86,"./_uid":114}],84:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":50,"./_global":65,"./_task":107}],85:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":43,"./_dom-create":59,"./_enum-bug-keys":60,"./_html":68,"./_object-dps":87,"./_shared-key":103}],86:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":43,"./_descriptors":58,"./_ie8-dom-define":69,"./_to-primitive":113}],87:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":43,"./_descriptors":58,"./_object-dp":86,"./_object-keys":94}],88:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":58,"./_has":66,"./_ie8-dom-define":69,"./_object-pie":95,"./_property-desc":97,"./_to-iobject":110,"./_to-primitive":113}],89:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":90,"./_to-iobject":110}],90:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":60,"./_object-keys-internal":93}],91:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],92:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":66,"./_shared-key":103,"./_to-object":112}],93:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":45,"./_has":66,"./_shared-key":103,"./_to-iobject":110}],94:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":60,"./_object-keys-internal":93}],95:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],96:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":54,"./_export":62,"./_fails":63}],97:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],98:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":67}],99:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":67}],100:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":43,"./_ctx":56,"./_is-object":74,"./_object-gopd":88}],101:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":54,"./_descriptors":58,"./_global":65,"./_object-dp":86,"./_wks":117}],102:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":66,"./_object-dp":86,"./_wks":117}],103:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":104,"./_uid":114}],104:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":65}],105:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":40,"./_an-object":43,"./_wks":117}],106:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":57,"./_to-integer":109}],107:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":50,"./_ctx":56,"./_dom-create":59,"./_global":65,"./_html":68,"./_invoke":70}],108:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":109}],109:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],110:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":57,"./_iobject":71}],111:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":109}],112:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":57}],113:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":74}],114:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],115:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":54,"./_global":65,"./_library":82,"./_object-dp":86,"./_wks-ext":116}],116:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":117}],117:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":65,"./_shared":104,"./_uid":114}],118:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":49,"./_core":54,"./_iterators":80,"./_wks":117}],119:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":55,"./_ctx":56,"./_export":62,"./_is-array-iter":72,"./_iter-call":75,"./_iter-detect":78,"./_to-length":111,"./_to-object":112,"./core.get-iterator-method":118}],120:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":41,"./_iter-define":77,"./_iter-step":79,"./_iterators":80,"./_to-iobject":110}],121:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":62,"./_object-create":85}],122:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":58,"./_export":62,"./_object-dp":86}],123:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":88,"./_object-sap":96,"./_to-iobject":110}],124:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function(){
  return require('./_object-gopn-ext').f;
});
},{"./_object-gopn-ext":89,"./_object-sap":96}],125:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":92,"./_object-sap":96,"./_to-object":112}],126:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":94,"./_object-sap":96,"./_to-object":112}],127:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":62,"./_set-proto":100}],128:[function(require,module,exports){

},{}],129:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":40,"./_an-instance":42,"./_classof":49,"./_core":54,"./_ctx":56,"./_export":62,"./_for-of":64,"./_global":65,"./_is-object":74,"./_iter-detect":78,"./_library":82,"./_microtask":84,"./_redefine-all":98,"./_set-species":101,"./_set-to-string-tag":102,"./_species-constructor":105,"./_task":107,"./_wks":117}],130:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.2 Set Objects
module.exports = require('./_collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":53,"./_collection-strong":51}],131:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":77,"./_string-at":106}],132:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":43,"./_descriptors":58,"./_enum-keys":61,"./_export":62,"./_fails":63,"./_global":65,"./_has":66,"./_hide":67,"./_is-array":73,"./_keyof":81,"./_library":82,"./_meta":83,"./_object-create":85,"./_object-dp":86,"./_object-gopd":88,"./_object-gopn":90,"./_object-gopn-ext":89,"./_object-gops":91,"./_object-keys":94,"./_object-pie":95,"./_property-desc":97,"./_redefine":99,"./_set-to-string-tag":102,"./_shared":104,"./_to-iobject":110,"./_to-primitive":113,"./_uid":114,"./_wks":117,"./_wks-define":115,"./_wks-ext":116}],133:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Set', {toJSON: require('./_collection-to-json')('Set')});
},{"./_collection-to-json":52,"./_export":62}],134:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":115}],135:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":115}],136:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":65,"./_hide":67,"./_iterators":80,"./_wks":117,"./es6.array.iterator":120}],137:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],138:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],139:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":140}],140:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":138}]},{},[1]);
