/**
 * skylark-slax-runtime - The skylark shells widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-slax/skylark-slax-runtime/
 * @license MIT
 */
!function(factory,globals){var define=globals.define,require=globals.require,isAmd="function"==typeof define&&define.amd,isCmd=!isAmd&&"undefined"!=typeof exports;if(!isAmd&&!define){var map={};define=globals.define=function(r,e,s){"function"==typeof s?(map[r]={factory:s,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var s=e.split("/"),a=r.split("/");s.pop();for(var t=0;t<a.length;t++)"."!=a[t]&&(".."==a[t]?s.pop():s.push(a[t]));return s.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):map[r]={factory:null,resolved:!0,exports:s}},require=globals.require=function(r){if(!map.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=map[r];if(!module.resolved){var e=[];module.deps.forEach(function(r){e.push(require(r))}),module.exports=module.factory.apply(globals,e)||null,module.resolved=!0}return module.exports}}if(!define)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(define,require){define("skylark-slax-runtime/slax",["skylark-langx-ns","skylark-langx-objects","skylark-langx-hoster","skylark-langx-async","skylark-net-http/Xhr","skylark-domx-eventer"],function(skylark,objects,hoster,async,Xhr,eventer){var _config={},_rootUrl="",_baseUrl="",slax={prepare:function(config){var p,slaxRoot,slaxApp;if(config||(config=hoster.global.slaxConfig),!config)for(var scripts=document.getElementsByTagName("script"),i=0,script,slaxDir,src,match;i<scripts.length;)if(script=scripts[i++],(src=script.getAttribute("src"))&&(match=src.match(/(((.*)\/)|^)skylark-slax-runtime([0-9A-Za-z\-]*)\.js(\W|$)/i))){slaxDir=match[3]||"",(src=script.getAttribute("data-slax-config"))?config=eval("({ "+src+" })"):(slaxRoot=script.getAttribute("data-slax-root"),void 0==slaxRoot&&(slaxRoot=slaxDir),slaxApp=script.getAttribute("data-slax-app"));break}if(config)objects.mixin(_config,config),p=async.Deferred.resolve();else{var d=new async.Deferred,p=d.promise;Xhr.get(slaxRoot+"/slax-config.json").then(function(r){if(slaxApp){for(var e,s=0;s<r.apps.length;s++)r.apps[s].name==slaxApp&&(e=slaxRoot+r.apps[s].dir);Xhr.get(e+"/spa.json").then(function(r){objects.mixin(_config,r),d.resolve()})}else objects.mixin(_config,r),d.resolve()})}return p},start:function(){var r=_config;require.config(r.runtime);var e=function(e,s){var a=e(s=s||r);hoster.global.go=function(r,e){a.go(r,e)},a.prepare().then(function(){a.run()})};r.spaModule?require([r.spaModule],function(r){r._start?r._start().then(function(s){e(r,s)}):e(r)}):e(skylark.spa)}};return define("slax",[],function(){return slax}),skylark.attach("slax",slax)}),define("skylark-slax-runtime/cache",["./slax","skylark-storages-cache"],function(r,e){return r.cache={}}),define("skylark-slax-runtime/main",["./slax","./cache","skylark-langx","skylark-domx","skylark-domx-files","skylark-domx-images","skylark-domx-colorpicker","skylark-domx-gradienter","skylark-jquery","skylark-ajaxfy-spa","skylark-data-entities","skylark-io-streams"],function(r){return r}),define("skylark-slax-runtime",["skylark-slax-runtime/main"],function(r){return r})}(define,require),!isAmd){var skylarkjs=require("skylark-langx-ns");isCmd?module.exports=skylarkjs:globals.skylarkjs=skylarkjs}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-slax-runtime.js.map
