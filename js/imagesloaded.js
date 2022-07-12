/* qTip2 v2.2.0 viewport svg | qtip2.com | Licensed MIT, GPL | Thu Mar 20 2014 05:03:31 */
/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}).call(this),/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */
function(a){"use strict";var b=document.documentElement,c=function(){};b.addEventListener?c=function(a,b,c){a.addEventListener(b,c,!1)}:b.attachEvent&&(c=function(b,c,d){b[c+d]=d.handleEvent?function(){var b=a.event;b.target=b.target||b.srcElement,d.handleEvent.call(d,b)}:function(){var c=a.event;c.target=c.target||c.srcElement,d.call(b,c)},b.attachEvent("on"+c,b[c+d])});var d=function(){};b.removeEventListener?d=function(a,b,c){a.removeEventListener(b,c,!1)}:b.detachEvent&&(d=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var e={bind:c,unbind:d};"function"==typeof define&&define.amd?define(e):a.eventie=e}(this),/*!
 * imagesLoaded v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */
function(a){"use strict";function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===i.call(a)}function d(a){var b=[];if(c(a))b=a;else if("number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,c){function e(a,c,g){if(!(this instanceof e))return new e(a,c);"string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=d(a),this.options=b({},this.options),"function"==typeof c?g=c:b(this.options,c),g&&this.on("always",g),this.getImages(),f&&(this.jqDeferred=new f.Deferred);var h=this;setTimeout(function(){h.check()})}function i(a){this.img=a}e.prototype=new a,e.prototype.options={},e.prototype.getImages=function(){this.images=[];for(var a=0,b=this.elements.length;b>a;a++){var c=this.elements[a];"IMG"===c.nodeName&&this.addImage(c);for(var d=c.querySelectorAll("img"),e=0,f=d.length;f>e;e++){var g=d[e];this.addImage(g)}}},e.prototype.addImage=function(a){var b=new i(a);this.images.push(b)},e.prototype.check=function(){function a(a,e){return b.options.debug&&h&&g.log("confirm",a,e),b.progress(a),c++,c===d&&b.complete(),!0}var b=this,c=0,d=this.images.length;if(this.hasAnyBroken=!1,!d)return this.complete(),void 0;for(var e=0;d>e;e++){var f=this.images[e];f.on("confirm",a),f.check()}},e.prototype.progress=function(a){this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded,this.emit("progress",this,a),this.jqDeferred&&this.jqDeferred.notify(this,a)},e.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(a,this),this.emit("always",this),this.jqDeferred){var b=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[b](this)}},f&&(f.fn.imagesLoaded=function(a,b){var c=new e(this,a,b);return c.jqDeferred.promise(f(this))});var j={};return i.prototype=new a,i.prototype.check=function(){var a=j[this.img.src];if(a)return this.useCached(a),void 0;if(j[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var b=this.proxyImage=new Image;c.bind(b,"load",this),c.bind(b,"error",this),b.src=this.img.src},i.prototype.useCached=function(a){if(a.isConfirmed)this.confirm(a.isLoaded,"cached was confirmed");else{var b=this;a.on("confirm",function(a){return b.confirm(a.isLoaded,"cache emitted confirmed"),!0})}},i.prototype.confirm=function(a,b){this.isConfirmed=!0,this.isLoaded=a,this.emit("confirm",this,b)},i.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},i.prototype.unbindProxyEvents=function(){c.unbind(this.proxyImage,"load",this),c.unbind(this.proxyImage,"error",this)},e}var f=a.jQuery,g=a.console,h="undefined"!=typeof g,i=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],e):a.imagesLoaded=e(a.EventEmitter,a.eventie)}(window);
