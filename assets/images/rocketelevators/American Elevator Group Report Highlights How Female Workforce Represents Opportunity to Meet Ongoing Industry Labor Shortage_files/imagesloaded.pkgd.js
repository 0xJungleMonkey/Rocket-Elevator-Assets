/*!
* imagesLoaded PACKAGED v3.2.0
* JavaScript is all like "You images are done yet or what?"
* MIT License
*//*!
* EventEmitter v4.2.6 - git.io/ee
* Oliver Caldwell
* MIT license
* @preserve
*/(function(){'use strict';function EventEmitter(){}
var proto=EventEmitter.prototype;var exports=this;var originalGlobalValue=exports.EventEmitter;function indexOfListener(listeners,listener){var i=listeners.length;while(i--){if(listeners[i].listener===listener){return i;}}
return-1;}
function alias(name){return function aliasClosure(){return this[name].apply(this,arguments);};}
proto.getListeners=function getListeners(evt){var events=this._getEvents();var response;var key;if(typeof evt==='object'){response={};for(key in events){if(events.hasOwnProperty(key)&&evt.test(key)){response[key]=events[key];}}}
else{response=events[evt]||(events[evt]=[]);}
return response;};proto.flattenListeners=function flattenListeners(listeners){var flatListeners=[];var i;for(i=0;i<listeners.length;i+=1){flatListeners.push(listeners[i].listener);}
return flatListeners;};proto.getListenersAsObject=function getListenersAsObject(evt){var listeners=this.getListeners(evt);var response;if(listeners instanceof Array){response={};response[evt]=listeners;}
return response||listeners;};proto.addListener=function addListener(evt,listener){var listeners=this.getListenersAsObject(evt);var listenerIsWrapped=typeof listener==='object';var key;for(key in listeners){if(listeners.hasOwnProperty(key)&&indexOfListener(listeners[key],listener)===-1){listeners[key].push(listenerIsWrapped?listener:{listener:listener,once:false});}}
return this;};proto.on=alias('addListener');proto.addOnceListener=function addOnceListener(evt,listener){return this.addListener(evt,{listener:listener,once:true});};proto.once=alias('addOnceListener');proto.defineEvent=function defineEvent(evt){this.getListeners(evt);return this;};proto.defineEvents=function defineEvents(evts){for(var i=0;i<evts.length;i+=1){this.defineEvent(evts[i]);}
return this;};proto.removeListener=function removeListener(evt,listener){var listeners=this.getListenersAsObject(evt);var index;var key;for(key in listeners){if(listeners.hasOwnProperty(key)){index=indexOfListener(listeners[key],listener);if(index!==-1){listeners[key].splice(index,1);}}}
return this;};proto.off=alias('removeListener');proto.addListeners=function addListeners(evt,listeners){return this.manipulateListeners(false,evt,listeners);};proto.removeListeners=function removeListeners(evt,listeners){return this.manipulateListeners(true,evt,listeners);};proto.manipulateListeners=function manipulateListeners(remove,evt,listeners){var i;var value;var single=remove?this.removeListener:this.addListener;var multiple=remove?this.removeListeners:this.addListeners;if(typeof evt==='object'&&!(evt instanceof RegExp)){for(i in evt){if(evt.hasOwnProperty(i)&&(value=evt[i])){if(typeof value==='function'){single.call(this,i,value);}
else{multiple.call(this,i,value);}}}}
else{i=listeners.length;while(i--){single.call(this,evt,listeners[i]);}}
return this;};proto.removeEvent=function removeEvent(evt){var type=typeof evt;var events=this._getEvents();var key;if(type==='string'){delete events[evt];}
else if(type==='object'){for(key in events){if(events.hasOwnProperty(key)&&evt.test(key)){delete events[key];}}}
else{delete this._events;}
return this;};proto.removeAllListeners=alias('removeEvent');proto.emitEvent=function emitEvent(evt,args){var listeners=this.getListenersAsObject(evt);var listener;var i;var key;var response;for(key in listeners){if(listeners.hasOwnProperty(key)){i=listeners[key].length;while(i--){listener=listeners[key][i];if(listener.once===true){this.removeListener(evt,listener.listener);}
response=listener.listener.apply(this,args||[]);if(response===this._getOnceReturnValue()){this.removeListener(evt,listener.listener);}}}}
return this;};proto.trigger=alias('emitEvent');proto.emit=function emit(evt){var args=Array.prototype.slice.call(arguments,1);return this.emitEvent(evt,args);};proto.setOnceReturnValue=function setOnceReturnValue(value){this._onceReturnValue=value;return this;};proto._getOnceReturnValue=function _getOnceReturnValue(){if(this.hasOwnProperty('_onceReturnValue')){return this._onceReturnValue;}
else{return true;}};proto._getEvents=function _getEvents(){return this._events||(this._events={});};EventEmitter.noConflict=function noConflict(){exports.EventEmitter=originalGlobalValue;return EventEmitter;};if(typeof define==='function'&&define.amd){define('eventEmitter/EventEmitter',[],function(){return EventEmitter;});}
else if(typeof module==='object'&&module.exports){module.exports=EventEmitter;}
else{this.EventEmitter=EventEmitter;}}.call(this));/*!
* eventie v1.0.4
* event binding helper
* eventie.bind( elem, 'click', myFn )
* eventie.unbind( elem, 'click', myFn )
*/(function(window){var docElem=document.documentElement;var bind=function(){};function getIEEvent(obj){var event=window.event;event.target=event.target||event.srcElement||obj;return event;}
if(docElem.addEventListener){bind=function(obj,type,fn){obj.addEventListener(type,fn,false);};}else if(docElem.attachEvent){bind=function(obj,type,fn){obj[type+fn]=fn.handleEvent?function(){var event=getIEEvent(obj);fn.handleEvent.call(fn,event);}:function(){var event=getIEEvent(obj);fn.call(obj,event);};obj.attachEvent("on"+type,obj[type+fn]);};}
var unbind=function(){};if(docElem.removeEventListener){unbind=function(obj,type,fn){obj.removeEventListener(type,fn,false);};}else if(docElem.detachEvent){unbind=function(obj,type,fn){obj.detachEvent("on"+type,obj[type+fn]);try{delete obj[type+fn];}catch(err){obj[type+fn]=undefined;}};}
var eventie={bind:bind,unbind:unbind};if(typeof define==='function'&&define.amd){define('eventie/eventie',eventie);}else{window.eventie=eventie;}})(this);/*!
* imagesLoaded v3.2.0
* JavaScript is all like "You images are done yet or what?"
* MIT License
*/(function(window,factory){'use strict';if(typeof define=='function'&&define.amd){define(['eventEmitter/EventEmitter','eventie/eventie'],function(EventEmitter,eventie){return factory(window,EventEmitter,eventie);});}else if(typeof module=='object'&&module.exports){module.exports=factory(window,require('wolfy87-eventemitter'),require('eventie'));}else{window.imagesLoaded=factory(window,window.EventEmitter,window.eventie);}})(window,function factory(window,EventEmitter,eventie){var $=window.jQuery;var console=window.console;function extend(a,b){for(var prop in b){a[prop]=b[prop];}
return a;}
var objToString=Object.prototype.toString;function isArray(obj){return objToString.call(obj)=='[object Array]';}
function makeArray(obj){var ary=[];if(isArray(obj)){ary=obj;}else if(typeof obj.length=='number'){for(var i=0;i<obj.length;i++){ary.push(obj[i]);}}else{ary.push(obj);}
return ary;}
function ImagesLoaded(elem,options,onAlways){if(!(this instanceof ImagesLoaded)){return new ImagesLoaded(elem,options,onAlways);}
if(typeof elem=='string'){elem=document.querySelectorAll(elem);}
this.elements=makeArray(elem);this.options=extend({},this.options);if(typeof options=='function'){onAlways=options;}else{extend(this.options,options);}
if(onAlways){this.on('always',onAlways);}
this.getImages();if($){this.jqDeferred=new $.Deferred();}
var _this=this;setTimeout(function(){_this.check();});}
ImagesLoaded.prototype=new EventEmitter();ImagesLoaded.prototype.options={};ImagesLoaded.prototype.getImages=function(){this.images=[];for(var i=0;i<this.elements.length;i++){var elem=this.elements[i];this.addElementImages(elem);}};ImagesLoaded.prototype.addElementImages=function(elem){if(elem.nodeName=='IMG'){this.addImage(elem);}
if(this.options.background===true){this.addElementBackgroundImages(elem);}
var nodeType=elem.nodeType;if(!nodeType||!elementNodeTypes[nodeType]){return;}
var childImgs=elem.querySelectorAll('img');for(var i=0;i<childImgs.length;i++){var img=childImgs[i];this.addImage(img);}
if(typeof this.options.background=='string'){var children=elem.querySelectorAll(this.options.background);for(i=0;i<children.length;i++){var child=children[i];this.addElementBackgroundImages(child);}}};var elementNodeTypes={1:true,9:true,11:true};ImagesLoaded.prototype.addElementBackgroundImages=function(elem){var style=getStyle(elem);var reURL=/url\(['"]*([^'"\)]+)['"]*\)/gi;var matches=reURL.exec(style.backgroundImage);while(matches!==null){var url=matches&&matches[1];if(url){this.addBackground(url,elem);}
matches=reURL.exec(style.backgroundImage);}};var getStyle=window.getComputedStyle||function(elem){return elem.currentStyle;};ImagesLoaded.prototype.addImage=function(img){var loadingImage=new LoadingImage(img);this.images.push(loadingImage);};ImagesLoaded.prototype.addBackground=function(url,elem){var background=new Background(url,elem);this.images.push(background);};ImagesLoaded.prototype.check=function(){var _this=this;this.progressedCount=0;this.hasAnyBroken=false;if(!this.images.length){this.complete();return;}
function onProgress(image,elem,message){setTimeout(function(){_this.progress(image,elem,message);});}
for(var i=0;i<this.images.length;i++){var loadingImage=this.images[i];loadingImage.once('progress',onProgress);loadingImage.check();}};ImagesLoaded.prototype.progress=function(image,elem,message){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!image.isLoaded;this.emit('progress',this,image,elem);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,image);}
if(this.progressedCount==this.images.length){this.complete();}
if(this.options.debug&&console){console.log('progress: '+message,image,elem);}};ImagesLoaded.prototype.complete=function(){var eventName=this.hasAnyBroken?'fail':'done';this.isComplete=true;this.emit(eventName,this);this.emit('always',this);if(this.jqDeferred){var jqMethod=this.hasAnyBroken?'reject':'resolve';this.jqDeferred[jqMethod](this);}};function LoadingImage(img){this.img=img;}
LoadingImage.prototype=new EventEmitter();LoadingImage.prototype.check=function(){var isComplete=this.getIsImageComplete();if(isComplete){this.confirm(this.img.naturalWidth!==0,'naturalWidth');return;}
this.proxyImage=new Image();eventie.bind(this.proxyImage,'load',this);eventie.bind(this.proxyImage,'error',this);eventie.bind(this.img,'load',this);eventie.bind(this.img,'error',this);this.proxyImage.src=this.img.src;};LoadingImage.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth!==undefined;};LoadingImage.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emit('progress',this,this.img,message);};LoadingImage.prototype.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};LoadingImage.prototype.onload=function(){this.confirm(true,'onload');this.unbindEvents();};LoadingImage.prototype.onerror=function(){this.confirm(false,'onerror');this.unbindEvents();};LoadingImage.prototype.unbindEvents=function(){eventie.unbind(this.proxyImage,'load',this);eventie.unbind(this.proxyImage,'error',this);eventie.unbind(this.img,'load',this);eventie.unbind(this.img,'error',this);};function Background(url,element){this.url=url;this.element=element;this.img=new Image();}
Background.prototype=new LoadingImage();Background.prototype.check=function(){eventie.bind(this.img,'load',this);eventie.bind(this.img,'error',this);this.img.src=this.url;var isComplete=this.getIsImageComplete();if(isComplete){this.confirm(this.img.naturalWidth!==0,'naturalWidth');this.unbindEvents();}};Background.prototype.unbindEvents=function(){eventie.unbind(this.img,'load',this);eventie.unbind(this.img,'error',this);};Background.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emit('progress',this,this.element,message);};ImagesLoaded.makeJQueryPlugin=function(jQuery){jQuery=jQuery||window.jQuery;if(!jQuery){return;}
$=jQuery;$.fn.imagesLoaded=function(options,callback){var instance=new ImagesLoaded(this,options,callback);return instance.jqDeferred.promise($(this));};};ImagesLoaded.makeJQueryPlugin();return ImagesLoaded;});