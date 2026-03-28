/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/wa-sqlite/dist/wa-sqlite-async.wasm":
/*!**********************************************************!*\
  !*** ./node_modules/wa-sqlite/dist/wa-sqlite-async.wasm ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f15c5abb5734f68d0037.wasm";

/***/ }),

/***/ "./node_modules/wa-sqlite/dist/wa-sqlite-async.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/wa-sqlite/dist/wa-sqlite-async.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Module = (() => {
  var _scriptDir = "file:///C:/Users/chadp/source/repos/wa-sqlite.BlazorWasmSqlite/wa-sqlite.BlazorWasmSqlite/NpmJS/node_modules/wa-sqlite/dist/wa-sqlite-async.mjs";
  
  return (
function(moduleArg = {}) {

var f=moduleArg,aa,ba;f.ready=new Promise((a,b)=>{aa=a;ba=b});var ca=Object.assign({},f),da="./this.program",ea=(a,b)=>{throw b;},fa="object"==typeof window,ia="function"==typeof importScripts,p="",ja;
if(fa||ia)ia?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),_scriptDir&&(p=_scriptDir),0!==p.indexOf("blob:")?p=p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):p="",ia&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ka=f.print||console.log.bind(console),t=f.printErr||console.error.bind(console);Object.assign(f,ca);ca=null;f.thisProgram&&(da=f.thisProgram);
f.quit&&(ea=f.quit);var la;f.wasmBinary&&(la=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&u("no native wasm support detected");var ma,v=!1,na,w,y,oa,z,B,pa,qa;function ra(){var a=ma.buffer;f.HEAP8=w=new Int8Array(a);f.HEAP16=oa=new Int16Array(a);f.HEAPU8=y=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAP32=z=new Int32Array(a);f.HEAPU32=B=new Uint32Array(a);f.HEAPF32=pa=new Float32Array(a);f.HEAPF64=qa=new Float64Array(a)}var sa=[],ta=[],ua=[],va=[],wa=0;
function xa(){var a=f.preRun.shift();sa.unshift(a)}var C=0,ya=null,za=null;function u(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";t(a);v=!0;na=1;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");ba(a);throw a;}function Aa(a){return a.startsWith("data:application/octet-stream;base64,")}var Ba;if(f.locateFile){if(Ba="wa-sqlite-async.wasm",!Aa(Ba)){var Ca=Ba;Ba=f.locateFile?f.locateFile(Ca,p):p+Ca}}else Ba=(new URL(/* asset import */ __webpack_require__(/*! wa-sqlite-async.wasm */ "./node_modules/wa-sqlite/dist/wa-sqlite-async.wasm"), __webpack_require__.b)).href;
function Da(a){if(a==Ba&&la)return new Uint8Array(la);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Ea(a){return la||!fa&&!ia||"function"!=typeof fetch?Promise.resolve().then(()=>Da(a)):fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Da(a))}
function Fa(a,b,c){return Ea(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{t(`failed to asynchronously prepare wasm: ${d}`);u(d)})}function Ga(a,b){var c=Ba;return la||"function"!=typeof WebAssembly.instantiateStreaming||Aa(c)||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){t(`wasm streaming compile failed: ${e}`);t("falling back to ArrayBuffer instantiation");return Fa(c,a,b)}))}var D,F;
function Ha(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}var Ia=a=>{for(;0<a.length;)a.shift()(f)};function I(a,b="i8"){b.endsWith("*")&&(b="*");switch(b){case "i1":return w[a>>0];case "i8":return w[a>>0];case "i16":return oa[a>>1];case "i32":return z[a>>2];case "i64":u("to do getValue(i64) use WASM_BIGINT");case "float":return pa[a>>2];case "double":return qa[a>>3];case "*":return B[a>>2];default:u(`invalid type for getValue: ${b}`)}}
function J(a,b,c="i8"){c.endsWith("*")&&(c="*");switch(c){case "i1":w[a>>0]=b;break;case "i8":w[a>>0]=b;break;case "i16":oa[a>>1]=b;break;case "i32":z[a>>2]=b;break;case "i64":u("to do setValue(i64) use WASM_BIGINT");case "float":pa[a>>2]=b;break;case "double":qa[a>>3]=b;break;case "*":B[a>>2]=b;break;default:u(`invalid type for setValue: ${c}`)}}
var Ja="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,K=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ja)return Ja.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
Ka=(a,b)=>{for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a},M=a=>{var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Ka(a.split("/").filter(d=>!!d),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a},La=a=>{var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b},Ma=a=>{if("/"===
a)return"/";a=M(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)},Na=()=>{if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues)return a=>crypto.getRandomValues(a);u("initRandomDevice")},Oa=a=>(Oa=Na())(a);
function Pa(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!=typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Ka(a.split("/").filter(d=>!!d),!b).join("/");return(b?"/":"")+a||"."}
var Qa=[],Ra=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Sa=(a,b,c,d)=>{if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var n=a.charCodeAt(++h);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>
12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e},Ta=[];function Ua(a,b){Ta[a]={input:[],Tb:[],dc:b};Va(a,Wa)}
var Wa={open(a){var b=Ta[a.node.hc];if(!b)throw new N(43);a.Ub=b;a.seekable=!1},close(a){a.Ub.dc.kc(a.Ub)},kc(a){a.Ub.dc.kc(a.Ub)},read(a,b,c,d){if(!a.Ub||!a.Ub.dc.zc)throw new N(60);for(var e=0,h=0;h<d;h++){try{var g=a.Ub.dc.zc(a.Ub)}catch(n){throw new N(29);}if(void 0===g&&0===e)throw new N(6);if(null===g||void 0===g)break;e++;b[c+h]=g}e&&(a.node.timestamp=Date.now());return e},write(a,b,c,d){if(!a.Ub||!a.Ub.dc.tc)throw new N(60);try{for(var e=0;e<d;e++)a.Ub.dc.tc(a.Ub,b[c+e])}catch(h){throw new N(29);
}d&&(a.node.timestamp=Date.now());return e}},Xa={zc(){a:{if(!Qa.length){var a=null;"undefined"!=typeof window&&"function"==typeof window.prompt?(a=window.prompt("Input: "),null!==a&&(a+="\n")):"function"==typeof readline&&(a=readline(),null!==a&&(a+="\n"));if(!a){var b=null;break a}b=Array(Ra(a)+1);a=Sa(a,b,0,b.length);b.length=a;Qa=b}b=Qa.shift()}return b},tc(a,b){null===b||10===b?(ka(K(a.Tb,0)),a.Tb=[]):0!=b&&a.Tb.push(b)},kc(a){a.Tb&&0<a.Tb.length&&(ka(K(a.Tb,0)),a.Tb=[])},$c(){return{Wc:25856,
Yc:5,Vc:191,Xc:35387,Uc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ad(){return 0},bd(){return[24,80]}},Ya={tc(a,b){null===b||10===b?(t(K(a.Tb,0)),a.Tb=[]):0!=b&&a.Tb.push(b)},kc(a){a.Tb&&0<a.Tb.length&&(t(K(a.Tb,0)),a.Tb=[])}};function Za(a,b){var c=a.Pb?a.Pb.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.Pb,a.Pb=new Uint8Array(b),0<a.Rb&&a.Pb.set(c.subarray(0,a.Rb),0))}
var O={Xb:null,Wb(){return O.createNode(null,"/",16895,0)},createNode(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new N(63);O.Xb||(O.Xb={dir:{node:{Vb:O.Eb.Vb,Sb:O.Eb.Sb,ec:O.Eb.ec,lc:O.Eb.lc,Dc:O.Eb.Dc,qc:O.Eb.qc,oc:O.Eb.oc,Cc:O.Eb.Cc,pc:O.Eb.pc},stream:{ac:O.Ob.ac}},file:{node:{Vb:O.Eb.Vb,Sb:O.Eb.Sb},stream:{ac:O.Ob.ac,read:O.Ob.read,write:O.Ob.write,wc:O.Ob.wc,mc:O.Ob.mc,nc:O.Ob.nc}},link:{node:{Vb:O.Eb.Vb,Sb:O.Eb.Sb,ic:O.Eb.ic},stream:{}},xc:{node:{Vb:O.Eb.Vb,Sb:O.Eb.Sb},stream:$a}});
c=ab(a,b,c,d);P(c.mode)?(c.Eb=O.Xb.dir.node,c.Ob=O.Xb.dir.stream,c.Pb={}):32768===(c.mode&61440)?(c.Eb=O.Xb.file.node,c.Ob=O.Xb.file.stream,c.Rb=0,c.Pb=null):40960===(c.mode&61440)?(c.Eb=O.Xb.link.node,c.Ob=O.Xb.link.stream):8192===(c.mode&61440)&&(c.Eb=O.Xb.xc.node,c.Ob=O.Xb.xc.stream);c.timestamp=Date.now();a&&(a.Pb[b]=c,a.timestamp=c.timestamp);return c},Zc(a){return a.Pb?a.Pb.subarray?a.Pb.subarray(0,a.Rb):new Uint8Array(a.Pb):new Uint8Array(0)},Eb:{Vb(a){var b={};b.Jc=8192===(a.mode&61440)?a.id:
1;b.Ac=a.id;b.mode=a.mode;b.Pc=1;b.uid=0;b.Mc=0;b.hc=a.hc;P(a.mode)?b.size=4096:32768===(a.mode&61440)?b.size=a.Rb:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.Fc=new Date(a.timestamp);b.Oc=new Date(a.timestamp);b.Ic=new Date(a.timestamp);b.Gc=4096;b.Hc=Math.ceil(b.size/b.Gc);return b},Sb(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);if(void 0!==b.size&&(b=b.size,a.Rb!=b))if(0==b)a.Pb=null,a.Rb=0;else{var c=a.Pb;a.Pb=new Uint8Array(b);c&&a.Pb.set(c.subarray(0,
Math.min(b,a.Rb)));a.Rb=b}},ec(){throw bb[44];},lc(a,b,c,d){return O.createNode(a,b,c,d)},Dc(a,b,c){if(P(a.mode)){try{var d=cb(b,c)}catch(h){}if(d)for(var e in d.Pb)throw new N(55);}delete a.parent.Pb[a.name];a.parent.timestamp=Date.now();a.name=c;b.Pb[c]=a;b.timestamp=a.parent.timestamp;a.parent=b},qc(a,b){delete a.Pb[b];a.timestamp=Date.now()},oc(a,b){var c=cb(a,b),d;for(d in c.Pb)throw new N(55);delete a.Pb[b];a.timestamp=Date.now()},Cc(a){var b=[".",".."],c;for(c in a.Pb)a.Pb.hasOwnProperty(c)&&
b.push(c);return b},pc(a,b,c){a=O.createNode(a,b,41471,0);a.link=c;return a},ic(a){if(40960!==(a.mode&61440))throw new N(28);return a.link}},Ob:{read(a,b,c,d,e){var h=a.node.Pb;if(e>=a.node.Rb)return 0;a=Math.min(a.node.Rb-e,d);if(8<a&&h.subarray)b.set(h.subarray(e,e+a),c);else for(d=0;d<a;d++)b[c+d]=h[e+d];return a},write(a,b,c,d,e,h){b.buffer===w.buffer&&(h=!1);if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.Pb||a.Pb.subarray)){if(h)return a.Pb=b.subarray(c,c+d),a.Rb=d;if(0===
a.Rb&&0===e)return a.Pb=b.slice(c,c+d),a.Rb=d;if(e+d<=a.Rb)return a.Pb.set(b.subarray(c,c+d),e),d}Za(a,e+d);if(a.Pb.subarray&&b.subarray)a.Pb.set(b.subarray(c,c+d),e);else for(h=0;h<d;h++)a.Pb[e+h]=b[c+h];a.Rb=Math.max(a.Rb,e+d);return d},ac(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.Rb);if(0>b)throw new N(28);return b},wc(a,b,c){Za(a.node,b+c);a.node.Rb=Math.max(a.node.Rb,b+c)},mc(a,b,c,d,e){if(32768!==(a.node.mode&61440))throw new N(43);a=a.node.Pb;if(e&2||a.buffer!==
w.buffer){if(0<c||c+b<a.length)a.subarray?a=a.subarray(c,c+b):a=Array.prototype.slice.call(a,c,c+b);c=!0;b=65536*Math.ceil(b/65536);(e=db(65536,b))?(y.fill(0,e,e+b),b=e):b=0;if(!b)throw new N(48);w.set(a,b)}else c=!1,b=a.byteOffset;return{Qc:b,Ec:c}},nc(a,b,c,d){O.Ob.write(a,b,0,d,c,!1);return 0}}},eb=(a,b)=>{var c=0;a&&(c|=365);b&&(c|=146);return c},fb=null,gb={},hb=[],ib=1,Q=null,jb=!0,N=null,bb={};
function R(a,b={}){a=Pa(a);if(!a)return{path:"",node:null};b=Object.assign({yc:!0,uc:0},b);if(8<b.uc)throw new N(32);a=a.split("/").filter(g=>!!g);for(var c=fb,d="/",e=0;e<a.length;e++){var h=e===a.length-1;if(h&&b.parent)break;c=cb(c,a[e]);d=M(d+"/"+a[e]);c.bc&&(!h||h&&b.yc)&&(c=c.bc.root);if(!h||b.$b)for(h=0;40960===(c.mode&61440);)if(c=kb(d),d=Pa(La(d),c),c=R(d,{uc:b.uc+1}).node,40<h++)throw new N(32);}return{path:d,node:c}}
function lb(a){for(var b;;){if(a===a.parent)return a=a.Wb.Bc,b?"/"!==a[a.length-1]?`${a}/${b}`:a+b:a;b=b?`${a.name}/${b}`:a.name;a=a.parent}}function mb(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%Q.length}function nb(a){var b=mb(a.parent.id,a.name);if(Q[b]===a)Q[b]=a.cc;else for(b=Q[b];b;){if(b.cc===a){b.cc=a.cc;break}b=b.cc}}
function cb(a,b){var c;if(c=(c=ob(a,"x"))?c:a.Eb.ec?0:2)throw new N(c,a);for(c=Q[mb(a.id,b)];c;c=c.cc){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.Eb.ec(a,b)}function ab(a,b,c,d){a=new pb(a,b,c,d);b=mb(a.parent.id,a.name);a.cc=Q[b];return Q[b]=a}function P(a){return 16384===(a&61440)}function qb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}
function ob(a,b){if(jb)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function rb(a,b){try{return cb(a,b),20}catch(c){}return ob(a,"wx")}function sb(a,b,c){try{var d=cb(a,b)}catch(e){return e.Qb}if(a=ob(a,"wx"))return a;if(c){if(!P(d.mode))return 54;if(d===d.parent||"/"===lb(d))return 10}else if(P(d.mode))return 31;return 0}function tb(){for(var a=0;4096>=a;a++)if(!hb[a])return a;throw new N(33);}
function S(a){a=hb[a];if(!a)throw new N(8);return a}function ub(a,b=-1){vb||(vb=function(){this.jc={}},vb.prototype={},Object.defineProperties(vb.prototype,{object:{get(){return this.node},set(c){this.node=c}},flags:{get(){return this.jc.flags},set(c){this.jc.flags=c}},position:{get(){return this.jc.position},set(c){this.jc.position=c}}}));a=Object.assign(new vb,a);-1==b&&(b=tb());a.Yb=b;return hb[b]=a}var $a={open(a){a.Ob=gb[a.node.hc].Ob;a.Ob.open&&a.Ob.open(a)},ac(){throw new N(70);}};
function Va(a,b){gb[a]={Ob:b}}function wb(a,b){var c="/"===b,d=!b;if(c&&fb)throw new N(10);if(!c&&!d){var e=R(b,{yc:!1});b=e.path;e=e.node;if(e.bc)throw new N(10);if(!P(e.mode))throw new N(54);}b={type:a,dd:{},Bc:b,Nc:[]};a=a.Wb(b);a.Wb=b;b.root=a;c?fb=a:e&&(e.bc=b,e.Wb&&e.Wb.Nc.push(b))}function xb(a,b,c){var d=R(a,{parent:!0}).node;a=Ma(a);if(!a||"."===a||".."===a)throw new N(28);var e=rb(d,a);if(e)throw new N(e);if(!d.Eb.lc)throw new N(63);return d.Eb.lc(d,a,b,c)}
function T(a,b){return xb(a,(void 0!==b?b:511)&1023|16384,0)}function yb(a,b,c){"undefined"==typeof c&&(c=b,b=438);xb(a,b|8192,c)}function zb(a,b){if(!Pa(a))throw new N(44);var c=R(b,{parent:!0}).node;if(!c)throw new N(44);b=Ma(b);var d=rb(c,b);if(d)throw new N(d);if(!c.Eb.pc)throw new N(63);c.Eb.pc(c,b,a)}function Ab(a){var b=R(a,{parent:!0}).node;a=Ma(a);var c=cb(b,a),d=sb(b,a,!0);if(d)throw new N(d);if(!b.Eb.oc)throw new N(63);if(c.bc)throw new N(10);b.Eb.oc(b,a);nb(c)}
function kb(a){a=R(a).node;if(!a)throw new N(44);if(!a.Eb.ic)throw new N(28);return Pa(lb(a.parent),a.Eb.ic(a))}function Bb(a,b){a=R(a,{$b:!b}).node;if(!a)throw new N(44);if(!a.Eb.Vb)throw new N(63);return a.Eb.Vb(a)}function Cb(a){return Bb(a,!0)}function Db(a,b){a="string"==typeof a?R(a,{$b:!0}).node:a;if(!a.Eb.Sb)throw new N(63);a.Eb.Sb(a,{mode:b&4095|a.mode&-4096,timestamp:Date.now()})}
function Eb(a,b){if(0>b)throw new N(28);a="string"==typeof a?R(a,{$b:!0}).node:a;if(!a.Eb.Sb)throw new N(63);if(P(a.mode))throw new N(31);if(32768!==(a.mode&61440))throw new N(28);var c=ob(a,"w");if(c)throw new N(c);a.Eb.Sb(a,{size:b,timestamp:Date.now()})}
function Fb(a,b,c){if(""===a)throw new N(44);if("string"==typeof b){var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[b];if("undefined"==typeof d)throw Error(`Unknown file open mode: ${b}`);b=d}c=b&64?("undefined"==typeof c?438:c)&4095|32768:0;if("object"==typeof a)var e=a;else{a=M(a);try{e=R(a,{$b:!(b&131072)}).node}catch(h){}}d=!1;if(b&64)if(e){if(b&128)throw new N(20);}else e=xb(a,c,0),d=!0;if(!e)throw new N(44);8192===(e.mode&61440)&&(b&=-513);if(b&65536&&!P(e.mode))throw new N(54);if(!d&&(c=
e?40960===(e.mode&61440)?32:P(e.mode)&&("r"!==qb(b)||b&512)?31:ob(e,qb(b)):44))throw new N(c);b&512&&!d&&Eb(e,0);b&=-131713;e=ub({node:e,path:lb(e),flags:b,seekable:!0,position:0,Ob:e.Ob,Tc:[],error:!1});e.Ob.open&&e.Ob.open(e);!f.logReadFiles||b&1||(Gb||(Gb={}),a in Gb||(Gb[a]=1));return e}function Hb(a,b,c){if(null===a.Yb)throw new N(8);if(!a.seekable||!a.Ob.ac)throw new N(70);if(0!=c&&1!=c&&2!=c)throw new N(28);a.position=a.Ob.ac(a,b,c);a.Tc=[]}
function Ib(){N||(N=function(a,b){this.name="ErrnoError";this.node=b;this.Rc=function(c){this.Qb=c};this.Rc(a);this.message="FS error"},N.prototype=Error(),N.prototype.constructor=N,[44].forEach(a=>{bb[a]=new N(a);bb[a].stack="<generic error, no stack>"}))}var Jb;
function Kb(a,b,c){a=M("/dev/"+a);var d=eb(!!b,!!c);Lb||(Lb=64);var e=Lb++<<8|0;Va(e,{open(h){h.seekable=!1},close(){c&&c.buffer&&c.buffer.length&&c(10)},read(h,g,n,k){for(var l=0,q=0;q<k;q++){try{var m=b()}catch(r){throw new N(29);}if(void 0===m&&0===l)throw new N(6);if(null===m||void 0===m)break;l++;g[n+q]=m}l&&(h.node.timestamp=Date.now());return l},write(h,g,n,k){for(var l=0;l<k;l++)try{c(g[n+l])}catch(q){throw new N(29);}k&&(h.node.timestamp=Date.now());return l}});yb(a,d,e)}var Lb,U={},vb,Gb;
function Mb(a,b,c){if("/"===b.charAt(0))return b;a=-100===a?"/":S(a).path;if(0==b.length){if(!c)throw new N(44);return a}return M(a+"/"+b)}
function Nb(a,b,c){try{var d=a(b)}catch(h){if(h&&h.node&&M(b)!==M(lb(h.node)))return-54;throw h;}z[c>>2]=d.Jc;z[c+4>>2]=d.mode;B[c+8>>2]=d.Pc;z[c+12>>2]=d.uid;z[c+16>>2]=d.Mc;z[c+20>>2]=d.hc;F=[d.size>>>0,(D=d.size,1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[c+24>>2]=F[0];z[c+28>>2]=F[1];z[c+32>>2]=4096;z[c+36>>2]=d.Hc;a=d.Fc.getTime();b=d.Oc.getTime();var e=d.Ic.getTime();F=[Math.floor(a/1E3)>>>0,(D=Math.floor(a/1E3),1<=+Math.abs(D)?0<D?+Math.floor(D/
4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[c+40>>2]=F[0];z[c+44>>2]=F[1];B[c+48>>2]=a%1E3*1E3;F=[Math.floor(b/1E3)>>>0,(D=Math.floor(b/1E3),1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[c+56>>2]=F[0];z[c+60>>2]=F[1];B[c+64>>2]=b%1E3*1E3;F=[Math.floor(e/1E3)>>>0,(D=Math.floor(e/1E3),1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[c+72>>2]=F[0];z[c+76>>2]=F[1];B[c+80>>2]=
e%1E3*1E3;F=[d.Ac>>>0,(D=d.Ac,1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[c+88>>2]=F[0];z[c+92>>2]=F[1];return 0}var Ob=void 0;function Pb(){var a=z[Ob>>2];Ob+=4;return a}
var Qb=(a,b)=>b+2097152>>>0<4194305-!!a?(a>>>0)+4294967296*b:NaN,Rb=[0,31,60,91,121,152,182,213,244,274,305,335],Sb=[0,31,59,90,120,151,181,212,243,273,304,334],Ub=a=>{var b=Ra(a)+1,c=Tb(b);c&&Sa(a,y,c,b);return c},Vb={},Xb=()=>{if(!Wb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:da||"./this.program"},b;for(b in Vb)void 0===Vb[b]?delete a[b]:a[b]=Vb[b];
var c=[];for(b in a)c.push(`${b}=${a[b]}`);Wb=c}return Wb},Wb;function Yb(){}function Zb(){}function $b(){}function ac(){}function bc(){}function cc(){}function dc(){}function ec(){}function fc(){}function gc(){}function hc(){}function ic(){}function jc(){}function kc(){}function lc(){}function mc(){}function nc(){}function oc(){}function pc(){}function qc(){}function rc(){}function sc(){}function tc(){}function uc(){}function vc(){}function wc(){}function xc(){}function yc(){}function zc(){}
function Ac(){}function Bc(){}function Cc(){}function Dc(){}function Ec(){}function Fc(){}function Gc(){}function Hc(){}function Ic(){}function Jc(){}function Kc(){}var Lc=a=>{na=a;if(!(noExitRuntime||0<wa)){if(f.onExit)f.onExit(a);v=!0}ea(a,new Ha(a))},Mc=a=>{a instanceof Ha||"unwind"==a||ea(1,a)},Nc=a=>{try{a()}catch(b){u(b)}};
function Oc(a){var b={},c;for(c in a)(function(d){var e=a[d];b[d]="function"==typeof e?function(){Pc.push(d);try{return e.apply(null,arguments)}finally{v||(Pc.pop()===d||u(),V&&1===X&&0===Pc.length&&(X=0,Nc(Qc),"undefined"!=typeof Fibers&&Fibers.ed()))}}:e})(c);return b}var X=0,V=null,Rc=0,Pc=[],Sc={},Tc={},Uc=0,Vc=null,Wc=[];function Xc(){return new Promise((a,b)=>{Vc={resolve:a,reject:b}})}
function Yc(){var a=Tb(16396),b=a+12;B[a>>2]=b;B[a+4>>2]=b+16384;b=Pc[0];var c=Sc[b];void 0===c&&(c=Uc++,Sc[b]=c,Tc[c]=b);z[a+8>>2]=c;return a}
function Zc(a){if(!v){if(0===X){var b=!1,c=!1;a((d=0)=>{if(!v&&(Rc=d,b=!0,c)){X=2;Nc(()=>$c(V));"undefined"!=typeof Browser&&Browser.sc.Lc&&Browser.sc.resume();d=!1;try{var e=(0,Y[Tc[z[V+8>>2]]])()}catch(n){e=n,d=!0}var h=!1;if(!V){var g=Vc;g&&(Vc=null,(d?g.reject:g.resolve)(e),h=!0)}if(d&&!h)throw e;}});c=!0;b||(X=1,V=Yc(),"undefined"!=typeof Browser&&Browser.sc.Lc&&Browser.sc.pause(),Nc(()=>ad(V)))}else 2===X?(X=0,Nc(bd),cd(V),V=null,Wc.forEach(d=>{if(!v)try{if(d(),!(noExitRuntime||0<wa))try{na=
d=na,Lc(d)}catch(e){Mc(e)}}catch(e){Mc(e)}})):u(`invalid state: ${X}`);return Rc}}function dd(a){return Zc(b=>{a().then(b)})}
var ed={},Z=(a,b,c,d,e)=>{function h(m){--wa;0!==k&&fd(k);return"string"===b?m?K(y,m):"":"boolean"===b?!!m:m}var g={string:m=>{var r=0;if(null!==m&&void 0!==m&&0!==m){r=Ra(m)+1;var x=gd(r);Sa(m,y,x,r);r=x}return r},array:m=>{var r=gd(m.length);w.set(m,r);return r}};a=f["_"+a];var n=[],k=0;if(d)for(var l=0;l<d.length;l++){var q=g[c[l]];q?(0===k&&(k=hd()),n[l]=q(d[l])):n[l]=d[l]}c=V;d=a.apply(null,n);e=e&&e.async;wa+=1;if(V!=c)return Xc().then(h);d=h(d);return e?Promise.resolve(d):d};
function pb(a,b,c,d){a||(a=this);this.parent=a;this.Wb=a.Wb;this.bc=null;this.id=ib++;this.name=b;this.mode=c;this.Eb={};this.Ob={};this.hc=d}Object.defineProperties(pb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}}});Ib();Q=Array(4096);wb(O,"/");T("/tmp");T("/home");T("/home/web_user");
(function(){T("/dev");Va(259,{read:()=>0,write:(d,e,h,g)=>g});yb("/dev/null",259);Ua(1280,Xa);Ua(1536,Ya);yb("/dev/tty",1280);yb("/dev/tty1",1536);var a=new Uint8Array(1024),b=0,c=()=>{0===b&&(b=Oa(a).byteLength);return a[--b]};Kb("random",c);Kb("urandom",c);T("/dev/shm");T("/dev/shm/tmp")})();
(function(){T("/proc");var a=T("/proc/self");T("/proc/self/fd");wb({Wb(){var b=ab(a,"fd",16895,73);b.Eb={ec(c,d){var e=S(+d);c={parent:null,Wb:{Bc:"fake"},Eb:{ic:()=>e.path}};return c.parent=c}};return b}},"/proc/self/fd")})();
(function(){const a=new Map;f.setAuthorizer=function(b,c,d){c?a.set(b,{f:c,vc:d}):a.delete(b);return Z("set_authorizer","number",["number"],[b])};Yb=function(b,c,d,e,h,g){if(a.has(b)){const {f:n,vc:k}=a.get(b);return n(k,c,d?d?K(y,d):"":null,e?e?K(y,e):"":null,h?h?K(y,h):"":null,g?g?K(y,g):"":null)}return 0}})();
(function(){function a(d,e){const h=[];for(let g=0;0!=d[e+g];++g){if(1E3<g)throw Error("C-string never terminated after 1k characters");h.push(d[e+g])}return String.fromCharCode(...h)}const b=new Map,c=new Map;f.createFunction=function(d,e,h,g,n,k){const l=b.size;b.set(l,{f:k,Zb:n});return Z("create_function","number","number string number number number number".split(" "),[d,e,h,g,l,0])};f.createAggregate=function(d,e,h,g,n,k,l){const q=b.size;b.set(q,{step:k,Kc:l,Zb:n});return Z("create_function",
"number","number string number number number number".split(" "),[d,e,h,g,q,1])};f.getFunctionUserData=function(d){return c.get(d)};f.updateHook=function(d,e){const h=b.size;b.set(h,e);return Z("update_hook","void",["number","number"],[d,h])};$b=function(d,e,h,g){d=b.get(d);c.set(e,d.Zb);d.f(e,new Uint32Array(y.buffer,g,h));c.delete(e)};bc=function(d,e,h,g){d=b.get(d);c.set(e,d.Zb);d.step(e,new Uint32Array(y.buffer,g,h));c.delete(e)};Zb=function(d,e){d=b.get(d);c.set(e,d.Zb);d.Kc(e);c.delete(e)};cc=
function(d,e,h,g,n,k){d=b.get(d);const l=y;n=BigInt(k)<<32n|BigInt(n)&4294967295n;d(e,a(l,h),a(l,g),n)}})();(function(){const a=new Map;f.progressHandler=function(b,c,d,e){d?a.set(b,{f:d,vc:e}):a.delete(b);return Z("progress_handler",null,["number","number"],[b,c])};ac=function(b){if(a.has(b)){const {f:c,vc:d}=a.get(b);return c(d)}return 0}})();
(function(){function a(k,l){const q=`get${k}`,m=`set${k}`;return new Proxy(new DataView(y.buffer,l,"Int32"===k?4:8),{get(r,x){if(x===q)return function(A,G){if(!G)throw Error("must be little endian");return r[x](A,G)};if(x===m)return function(A,G,E){if(!E)throw Error("must be little endian");return r[x](A,G,E)};if("string"===typeof x&&x.match(/^(get)|(set)/))throw Error("invalid type");return r[x]}})}const b="object"===typeof ed,c=new Map,d=new Map,e=new Map,h=b?new Set:null,g=b?new Set:null,n=new Map;
tc=function(k,l,q,m){n.set(k?K(y,k):"",{size:l,fc:Array.from(new Uint32Array(y.buffer,m,q))})};f.createModule=function(k,l,q,m){b&&(q.handleAsync=dd);const r=c.size;c.set(r,{module:q,Zb:m});m=0;q.xCreate&&(m|=1);q.xConnect&&(m|=2);q.xBestIndex&&(m|=4);q.xDisconnect&&(m|=8);q.xDestroy&&(m|=16);q.xOpen&&(m|=32);q.xClose&&(m|=64);q.xFilter&&(m|=128);q.xNext&&(m|=256);q.xEof&&(m|=512);q.xColumn&&(m|=1024);q.xRowid&&(m|=2048);q.xUpdate&&(m|=4096);q.xBegin&&(m|=8192);q.xSync&&(m|=16384);q.xCommit&&(m|=
32768);q.xRollback&&(m|=65536);q.xFindFunction&&(m|=131072);q.xRename&&(m|=262144);return Z("create_module","number",["number","string","number","number"],[k,l,r,m])};jc=function(k,l,q,m,r,x){l=c.get(l);d.set(r,l);if(b){h.delete(r);for(const A of h)d.delete(A)}m=Array.from(new Uint32Array(y.buffer,m,q)).map(A=>A?K(y,A):"");return l.module.xCreate(k,l.Zb,m,r,a("Int32",x))};ic=function(k,l,q,m,r,x){l=c.get(l);d.set(r,l);if(b){h.delete(r);for(const A of h)d.delete(A)}m=Array.from(new Uint32Array(y.buffer,
m,q)).map(A=>A?K(y,A):"");return l.module.xConnect(k,l.Zb,m,r,a("Int32",x))};ec=function(k,l){var q=d.get(k),m=n.get("sqlite3_index_info").fc;const r={};r.nConstraint=I(l+m[0],"i32");r.aConstraint=[];var x=I(l+m[1],"*"),A=n.get("sqlite3_index_constraint").size;for(var G=0;G<r.nConstraint;++G){var E=r.aConstraint,L=E.push,H=x+G*A,ha=n.get("sqlite3_index_constraint").fc,W={};W.iColumn=I(H+ha[0],"i32");W.op=I(H+ha[1],"i8");W.usable=!!I(H+ha[2],"i8");L.call(E,W)}r.nOrderBy=I(l+m[2],"i32");r.aOrderBy=
[];x=I(l+m[3],"*");A=n.get("sqlite3_index_orderby").size;for(G=0;G<r.nOrderBy;++G)E=r.aOrderBy,L=E.push,H=x+G*A,ha=n.get("sqlite3_index_orderby").fc,W={},W.iColumn=I(H+ha[0],"i32"),W.desc=!!I(H+ha[1],"i8"),L.call(E,W);r.aConstraintUsage=[];for(x=0;x<r.nConstraint;++x)r.aConstraintUsage.push({argvIndex:0,omit:!1});r.idxNum=I(l+m[5],"i32");r.idxStr=null;r.orderByConsumed=!!I(l+m[8],"i8");r.estimatedCost=I(l+m[9],"double");r.estimatedRows=I(l+m[10],"i32");r.idxFlags=I(l+m[11],"i32");r.colUsed=I(l+m[12],
"i32");k=q.module.xBestIndex(k,r);q=n.get("sqlite3_index_info").fc;m=I(l+q[4],"*");x=n.get("sqlite3_index_constraint_usage").size;for(L=0;L<r.nConstraint;++L)A=m+L*x,E=r.aConstraintUsage[L],H=n.get("sqlite3_index_constraint_usage").fc,J(A+H[0],E.argvIndex,"i32"),J(A+H[1],E.omit?1:0,"i8");J(l+q[5],r.idxNum,"i32");"string"===typeof r.idxStr&&(m=Ra(r.idxStr),x=Z("sqlite3_malloc","number",["number"],[m+1]),Sa(r.idxStr,y,x,m+1),J(l+q[6],x,"*"),J(l+q[7],1,"i32"));J(l+q[8],r.orderByConsumed,"i32");J(l+q[9],
r.estimatedCost,"double");J(l+q[10],r.estimatedRows,"i32");J(l+q[11],r.idxFlags,"i32");return k};lc=function(k){const l=d.get(k);b?h.add(k):d.delete(k);return l.module.xDisconnect(k)};kc=function(k){const l=d.get(k);b?h.add(k):d.delete(k);return l.module.xDestroy(k)};pc=function(k,l){const q=d.get(k);e.set(l,q);if(b){g.delete(l);for(const m of g)e.delete(m)}return q.module.xOpen(k,l)};fc=function(k){const l=e.get(k);b?g.add(k):e.delete(k);return l.module.xClose(k)};mc=function(k){return e.get(k).module.xEof(k)?
1:0};nc=function(k,l,q,m,r){const x=e.get(k);q=q?q?K(y,q):"":null;r=new Uint32Array(y.buffer,r,m);return x.module.xFilter(k,l,q,r)};oc=function(k){return e.get(k).module.xNext(k)};gc=function(k,l,q){return e.get(k).module.xColumn(k,l,q)};sc=function(k,l){return e.get(k).module.xRowid(k,a("BigInt64",l))};vc=function(k,l,q,m){const r=d.get(k);q=new Uint32Array(y.buffer,q,l);return r.module.xUpdate(k,q,a("BigInt64",m))};dc=function(k){return d.get(k).module.xBegin(k)};uc=function(k){return d.get(k).module.xSync(k)};
hc=function(k){return d.get(k).module.xCommit(k)};rc=function(k){return d.get(k).module.xRollback(k)};qc=function(k,l){const q=d.get(k);l=l?K(y,l):"";return q.module.xRename(k,l)}})();
(function(){function a(g,n){const k=`get${g}`,l=`set${g}`;return new Proxy(new DataView(y.buffer,n,"Int32"===g?4:8),{get(q,m){if(m===k)return function(r,x){if(!x)throw Error("must be little endian");return q[m](r,x)};if(m===l)return function(r,x,A){if(!A)throw Error("must be little endian");return q[m](r,x,A)};if("string"===typeof m&&m.match(/^(get)|(set)/))throw Error("invalid type");return q[m]}})}function b(g){g>>=2;return B[g]+B[g+1]*2**32}const c="object"===typeof ed,d=new Map,e=new Map;f.registerVFS=
function(g,n){if(Z("sqlite3_vfs_find","number",["string"],[g.name]))throw Error(`VFS '${g.name}' already registered`);c&&(g.handleAsync=dd);var k=g.cd??64;const l=f._malloc(4);n=Z("register_vfs","number",["string","number","number","number"],[g.name,k,n?1:0,l]);n||(k=I(l,"*"),d.set(k,g));f._free(l);return n};const h=c?new Set:null;yc=function(g){const n=e.get(g);c?h.add(g):e.delete(g);return n.xClose(g)};Fc=function(g,n,k,l){return e.get(g).xRead(g,y.subarray(n,n+k),b(l))};Kc=function(g,n,k,l){return e.get(g).xWrite(g,
y.subarray(n,n+k),b(l))};Ic=function(g,n){return e.get(g).xTruncate(g,b(n))};Hc=function(g,n){return e.get(g).xSync(g,n)};Cc=function(g,n){const k=e.get(g);n=a("BigInt64",n);return k.xFileSize(g,n)};Dc=function(g,n){return e.get(g).xLock(g,n)};Jc=function(g,n){return e.get(g).xUnlock(g,n)};xc=function(g,n){const k=e.get(g);n=a("Int32",n);return k.xCheckReservedLock(g,n)};Bc=function(g,n,k){const l=e.get(g);k=new DataView(y.buffer,k);return l.xFileControl(g,n,k)};Gc=function(g){return e.get(g).xSectorSize(g)};
Ac=function(g){return e.get(g).xDeviceCharacteristics(g)};Ec=function(g,n,k,l,q){g=d.get(g);e.set(k,g);if(c){h.delete(k);for(var m of h)e.delete(m)}m=null;if(l&64){m=1;const r=[];for(;m;){const x=y[n++];if(x)r.push(x);else switch(y[n]||(m=null),m){case 1:r.push(63);m=2;break;case 2:r.push(61);m=3;break;case 3:r.push(38),m=2}}m=(new TextDecoder).decode(new Uint8Array(r))}else n&&(m=n?K(y,n):"");q=a("Int32",q);return g.xOpen(m,k,l,q)};zc=function(g,n,k){return d.get(g).xDelete(n?K(y,n):"",k)};wc=function(g,
n,k,l){g=d.get(g);l=a("Int32",l);return g.xAccess(n?K(y,n):"",k,l)}})();
var kd={a:(a,b,c,d)=>{u(`Assertion failed: ${a?K(y,a):""}, at: `+[b?b?K(y,b):"":"unknown filename",c,d?d?K(y,d):"":"unknown function"])},K:function(a,b){try{return a=a?K(y,a):"",Db(a,b),0}catch(c){if("undefined"==typeof U||"ErrnoError"!==c.name)throw c;return-c.Qb}},M:function(a,b,c){try{b=b?K(y,b):"";b=Mb(a,b);if(c&-8)return-28;var d=R(b,{$b:!0}).node;if(!d)return-44;a="";c&4&&(a+="r");c&2&&(a+="w");c&1&&(a+="x");return a&&ob(d,a)?-2:0}catch(e){if("undefined"==typeof U||"ErrnoError"!==e.name)throw e;
return-e.Qb}},L:function(a,b){try{var c=S(a);Db(c.node,b);return 0}catch(d){if("undefined"==typeof U||"ErrnoError"!==d.name)throw d;return-d.Qb}},J:function(a){try{var b=S(a).node;var c="string"==typeof b?R(b,{$b:!0}).node:b;if(!c.Eb.Sb)throw new N(63);c.Eb.Sb(c,{timestamp:Date.now()});return 0}catch(d){if("undefined"==typeof U||"ErrnoError"!==d.name)throw d;return-d.Qb}},b:function(a,b,c){Ob=c;try{var d=S(a);switch(b){case 0:var e=Pb();if(0>e)return-28;for(;hb[e];)e++;return ub(d,e).Yb;case 1:case 2:return 0;
case 3:return d.flags;case 4:return e=Pb(),d.flags|=e,0;case 5:return e=Pb(),oa[e+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return z[jd()>>2]=28,-1;default:return-28}}catch(h){if("undefined"==typeof U||"ErrnoError"!==h.name)throw h;return-h.Qb}},I:function(a,b){try{var c=S(a);return Nb(Bb,c.path,b)}catch(d){if("undefined"==typeof U||"ErrnoError"!==d.name)throw d;return-d.Qb}},n:function(a,b,c){b=Qb(b,c);try{if(isNaN(b))return 61;var d=S(a);if(0===(d.flags&2097155))throw new N(28);
Eb(d.node,b);return 0}catch(e){if("undefined"==typeof U||"ErrnoError"!==e.name)throw e;return-e.Qb}},C:function(a,b){try{if(0===b)return-28;var c=Ra("/")+1;if(b<c)return-68;Sa("/",y,a,b);return c}catch(d){if("undefined"==typeof U||"ErrnoError"!==d.name)throw d;return-d.Qb}},F:function(a,b){try{return a=a?K(y,a):"",Nb(Cb,a,b)}catch(c){if("undefined"==typeof U||"ErrnoError"!==c.name)throw c;return-c.Qb}},z:function(a,b,c){try{return b=b?K(y,b):"",b=Mb(a,b),b=M(b),"/"===b[b.length-1]&&(b=b.substr(0,
b.length-1)),T(b,c),0}catch(d){if("undefined"==typeof U||"ErrnoError"!==d.name)throw d;return-d.Qb}},E:function(a,b,c,d){try{b=b?K(y,b):"";var e=d&256;b=Mb(a,b,d&4096);return Nb(e?Cb:Bb,b,c)}catch(h){if("undefined"==typeof U||"ErrnoError"!==h.name)throw h;return-h.Qb}},y:function(a,b,c,d){Ob=d;try{b=b?K(y,b):"";b=Mb(a,b);var e=d?Pb():0;return Fb(b,c,e).Yb}catch(h){if("undefined"==typeof U||"ErrnoError"!==h.name)throw h;return-h.Qb}},v:function(a,b,c,d){try{b=b?K(y,b):"";b=Mb(a,b);if(0>=d)return-28;
var e=kb(b),h=Math.min(d,Ra(e)),g=w[c+h];Sa(e,y,c,d+1);w[c+h]=g;return h}catch(n){if("undefined"==typeof U||"ErrnoError"!==n.name)throw n;return-n.Qb}},u:function(a){try{return a=a?K(y,a):"",Ab(a),0}catch(b){if("undefined"==typeof U||"ErrnoError"!==b.name)throw b;return-b.Qb}},G:function(a,b){try{return a=a?K(y,a):"",Nb(Bb,a,b)}catch(c){if("undefined"==typeof U||"ErrnoError"!==c.name)throw c;return-c.Qb}},r:function(a,b,c){try{b=b?K(y,b):"";b=Mb(a,b);if(0===c){a=b;var d=R(a,{parent:!0}).node;if(!d)throw new N(44);
var e=Ma(a),h=cb(d,e),g=sb(d,e,!1);if(g)throw new N(g);if(!d.Eb.qc)throw new N(63);if(h.bc)throw new N(10);d.Eb.qc(d,e);nb(h)}else 512===c?Ab(b):u("Invalid flags passed to unlinkat");return 0}catch(n){if("undefined"==typeof U||"ErrnoError"!==n.name)throw n;return-n.Qb}},q:function(a,b,c){try{b=b?K(y,b):"";b=Mb(a,b,!0);if(c){var d=B[c>>2]+4294967296*z[c+4>>2],e=z[c+8>>2];h=1E3*d+e/1E6;c+=16;d=B[c>>2]+4294967296*z[c+4>>2];e=z[c+8>>2];g=1E3*d+e/1E6}else var h=Date.now(),g=h;a=h;var n=R(b,{$b:!0}).node;
n.Eb.Sb(n,{timestamp:Math.max(a,g)});return 0}catch(k){if("undefined"==typeof U||"ErrnoError"!==k.name)throw k;return-k.Qb}},k:function(a,b,c){a=new Date(1E3*Qb(a,b));z[c>>2]=a.getSeconds();z[c+4>>2]=a.getMinutes();z[c+8>>2]=a.getHours();z[c+12>>2]=a.getDate();z[c+16>>2]=a.getMonth();z[c+20>>2]=a.getFullYear()-1900;z[c+24>>2]=a.getDay();b=a.getFullYear();z[c+28>>2]=(0!==b%4||0===b%100&&0!==b%400?Sb:Rb)[a.getMonth()]+a.getDate()-1|0;z[c+36>>2]=-(60*a.getTimezoneOffset());b=(new Date(a.getFullYear(),
6,1)).getTimezoneOffset();var d=(new Date(a.getFullYear(),0,1)).getTimezoneOffset();z[c+32>>2]=(b!=d&&a.getTimezoneOffset()==Math.min(d,b))|0},i:function(a,b,c,d,e,h,g,n){e=Qb(e,h);try{if(isNaN(e))return 61;var k=S(d);if(0!==(b&2)&&0===(c&2)&&2!==(k.flags&2097155))throw new N(2);if(1===(k.flags&2097155))throw new N(2);if(!k.Ob.mc)throw new N(43);var l=k.Ob.mc(k,a,e,b,c);var q=l.Qc;z[g>>2]=l.Ec;B[n>>2]=q;return 0}catch(m){if("undefined"==typeof U||"ErrnoError"!==m.name)throw m;return-m.Qb}},j:function(a,
b,c,d,e,h,g){h=Qb(h,g);try{if(isNaN(h))return 61;var n=S(e);if(c&2){if(32768!==(n.node.mode&61440))throw new N(43);d&2||n.Ob.nc&&n.Ob.nc(n,y.slice(a,a+b),h,b,d)}}catch(k){if("undefined"==typeof U||"ErrnoError"!==k.name)throw k;return-k.Qb}},s:(a,b,c)=>{function d(k){return(k=k.toTimeString().match(/\(([A-Za-z ]+)\)$/))?k[1]:"GMT"}var e=(new Date).getFullYear(),h=new Date(e,0,1),g=new Date(e,6,1);e=h.getTimezoneOffset();var n=g.getTimezoneOffset();B[a>>2]=60*Math.max(e,n);z[b>>2]=Number(e!=n);a=d(h);
b=d(g);a=Ub(a);b=Ub(b);n<e?(B[c>>2]=a,B[c+4>>2]=b):(B[c>>2]=b,B[c+4>>2]=a)},e:()=>Date.now(),d:()=>performance.now(),o:a=>{var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-ma.buffer.byteLength+65535)/65536;try{ma.grow(e);ra();var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},A:(a,b)=>{var c=0;Xb().forEach((d,e)=>{var h=b+c;e=B[a+4*e>>2]=h;for(h=
0;h<d.length;++h)w[e++>>0]=d.charCodeAt(h);w[e>>0]=0;c+=d.length+1});return 0},B:(a,b)=>{var c=Xb();B[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+1);B[b>>2]=d;return 0},f:function(a){try{var b=S(a);if(null===b.Yb)throw new N(8);b.rc&&(b.rc=null);try{b.Ob.close&&b.Ob.close(b)}catch(c){throw c;}finally{hb[b.Yb]=null}b.Yb=null;return 0}catch(c){if("undefined"==typeof U||"ErrnoError"!==c.name)throw c;return c.Qb}},p:function(a,b){try{var c=S(a);w[b>>0]=c.Ub?2:P(c.mode)?3:40960===(c.mode&61440)?7:
4;oa[b+2>>1]=0;F=[0,(D=0,1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[b+8>>2]=F[0];z[b+12>>2]=F[1];F=[0,(D=0,1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[b+16>>2]=F[0];z[b+20>>2]=F[1];return 0}catch(d){if("undefined"==typeof U||"ErrnoError"!==d.name)throw d;return d.Qb}},x:function(a,b,c,d){try{a:{var e=S(a);a=b;for(var h,g=b=0;g<c;g++){var n=B[a>>2],k=B[a+4>>2];a+=8;var l=e,q=n,m=k,r=h,x=
w;if(0>m||0>r)throw new N(28);if(null===l.Yb)throw new N(8);if(1===(l.flags&2097155))throw new N(8);if(P(l.node.mode))throw new N(31);if(!l.Ob.read)throw new N(28);var A="undefined"!=typeof r;if(!A)r=l.position;else if(!l.seekable)throw new N(70);var G=l.Ob.read(l,x,q,m,r);A||(l.position+=G);var E=G;if(0>E){var L=-1;break a}b+=E;if(E<k)break;"undefined"!==typeof h&&(h+=E)}L=b}B[d>>2]=L;return 0}catch(H){if("undefined"==typeof U||"ErrnoError"!==H.name)throw H;return H.Qb}},m:function(a,b,c,d,e){b=
Qb(b,c);try{if(isNaN(b))return 61;var h=S(a);Hb(h,b,d);F=[h.position>>>0,(D=h.position,1<=+Math.abs(D)?0<D?+Math.floor(D/4294967296)>>>0:~~+Math.ceil((D-+(~~D>>>0))/4294967296)>>>0:0)];z[e>>2]=F[0];z[e+4>>2]=F[1];h.rc&&0===b&&0===d&&(h.rc=null);return 0}catch(g){if("undefined"==typeof U||"ErrnoError"!==g.name)throw g;return g.Qb}},D:function(a){try{var b=S(a);return Zc(c=>{var d=b.node.Wb;d.type.Sc?d.type.Sc(d,!1,e=>{e?c(29):c(0)}):c(0)})}catch(c){if("undefined"==typeof U||"ErrnoError"!==c.name)throw c;
return c.Qb}},t:function(a,b,c,d){try{a:{var e=S(a);a=b;for(var h,g=b=0;g<c;g++){var n=B[a>>2],k=B[a+4>>2];a+=8;var l=e,q=n,m=k,r=h,x=w;if(0>m||0>r)throw new N(28);if(null===l.Yb)throw new N(8);if(0===(l.flags&2097155))throw new N(8);if(P(l.node.mode))throw new N(31);if(!l.Ob.write)throw new N(28);l.seekable&&l.flags&1024&&Hb(l,0,2);var A="undefined"!=typeof r;if(!A)r=l.position;else if(!l.seekable)throw new N(70);var G=l.Ob.write(l,x,q,m,r,void 0);A||(l.position+=G);var E=G;if(0>E){var L=-1;break a}b+=
E;"undefined"!==typeof h&&(h+=E)}L=b}B[d>>2]=L;return 0}catch(H){if("undefined"==typeof U||"ErrnoError"!==H.name)throw H;return H.Qb}},sa:Yb,O:Zb,ha:$b,ca:ac,Z:bc,H:cc,la:dc,w:ec,g:fc,oa:gc,ja:hc,ea:ic,fa:jc,h:kc,l:lc,pa:mc,ra:nc,qa:oc,da:pc,ga:qc,ia:rc,na:sc,c:tc,ka:uc,ma:vc,aa:wc,V:xc,$:yc,ba:zc,S:Ac,U:Bc,Y:Cc,X:Dc,R:Ec,Q:Fc,T:Gc,_:Hc,N:Ic,W:Jc,P:Kc},Y=function(){function a(c){c=c.exports;Y=c=Oc(c);ma=Y.ta;ra();ta.unshift(Y.ua);C--;f.monitorRunDependencies&&f.monitorRunDependencies(C);if(0==C&&
(null!==ya&&(clearInterval(ya),ya=null),za)){var d=za;za=null;d()}return c}var b={a:kd};C++;f.monitorRunDependencies&&f.monitorRunDependencies(C);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){t(`Module.instantiateWasm callback failed with error: ${c}`),ba(c)}Ga(b,function(c){a(c.instance)}).catch(ba);return{}}();f._sqlite3_vfs_find=a=>(f._sqlite3_vfs_find=Y.va)(a);f._sqlite3_malloc=a=>(f._sqlite3_malloc=Y.wa)(a);f._sqlite3_free=a=>(f._sqlite3_free=Y.xa)(a);
f._sqlite3_prepare_v2=(a,b,c,d,e)=>(f._sqlite3_prepare_v2=Y.ya)(a,b,c,d,e);f._sqlite3_step=a=>(f._sqlite3_step=Y.za)(a);f._sqlite3_column_int64=(a,b)=>(f._sqlite3_column_int64=Y.Aa)(a,b);f._sqlite3_column_int=(a,b)=>(f._sqlite3_column_int=Y.Ba)(a,b);f._sqlite3_finalize=a=>(f._sqlite3_finalize=Y.Ca)(a);f._sqlite3_reset=a=>(f._sqlite3_reset=Y.Da)(a);f._sqlite3_clear_bindings=a=>(f._sqlite3_clear_bindings=Y.Ea)(a);f._sqlite3_value_blob=a=>(f._sqlite3_value_blob=Y.Fa)(a);
f._sqlite3_value_text=a=>(f._sqlite3_value_text=Y.Ga)(a);f._sqlite3_value_bytes=a=>(f._sqlite3_value_bytes=Y.Ha)(a);f._sqlite3_value_double=a=>(f._sqlite3_value_double=Y.Ia)(a);f._sqlite3_value_int=a=>(f._sqlite3_value_int=Y.Ja)(a);f._sqlite3_value_int64=a=>(f._sqlite3_value_int64=Y.Ka)(a);f._sqlite3_value_type=a=>(f._sqlite3_value_type=Y.La)(a);f._sqlite3_result_blob=(a,b,c,d)=>(f._sqlite3_result_blob=Y.Ma)(a,b,c,d);f._sqlite3_result_double=(a,b)=>(f._sqlite3_result_double=Y.Na)(a,b);
f._sqlite3_result_error=(a,b,c)=>(f._sqlite3_result_error=Y.Oa)(a,b,c);f._sqlite3_result_int=(a,b)=>(f._sqlite3_result_int=Y.Pa)(a,b);f._sqlite3_result_int64=(a,b,c)=>(f._sqlite3_result_int64=Y.Qa)(a,b,c);f._sqlite3_result_null=a=>(f._sqlite3_result_null=Y.Ra)(a);f._sqlite3_result_text=(a,b,c,d)=>(f._sqlite3_result_text=Y.Sa)(a,b,c,d);f._sqlite3_column_count=a=>(f._sqlite3_column_count=Y.Ta)(a);f._sqlite3_data_count=a=>(f._sqlite3_data_count=Y.Ua)(a);
f._sqlite3_column_blob=(a,b)=>(f._sqlite3_column_blob=Y.Va)(a,b);f._sqlite3_column_bytes=(a,b)=>(f._sqlite3_column_bytes=Y.Wa)(a,b);f._sqlite3_column_double=(a,b)=>(f._sqlite3_column_double=Y.Xa)(a,b);f._sqlite3_column_text=(a,b)=>(f._sqlite3_column_text=Y.Ya)(a,b);f._sqlite3_column_type=(a,b)=>(f._sqlite3_column_type=Y.Za)(a,b);f._sqlite3_column_name=(a,b)=>(f._sqlite3_column_name=Y._a)(a,b);f._sqlite3_bind_blob=(a,b,c,d,e)=>(f._sqlite3_bind_blob=Y.$a)(a,b,c,d,e);
f._sqlite3_bind_double=(a,b,c)=>(f._sqlite3_bind_double=Y.ab)(a,b,c);f._sqlite3_bind_int=(a,b,c)=>(f._sqlite3_bind_int=Y.bb)(a,b,c);f._sqlite3_bind_int64=(a,b,c,d)=>(f._sqlite3_bind_int64=Y.cb)(a,b,c,d);f._sqlite3_bind_null=(a,b)=>(f._sqlite3_bind_null=Y.db)(a,b);f._sqlite3_bind_text=(a,b,c,d,e)=>(f._sqlite3_bind_text=Y.eb)(a,b,c,d,e);f._sqlite3_bind_parameter_count=a=>(f._sqlite3_bind_parameter_count=Y.fb)(a);f._sqlite3_bind_parameter_name=(a,b)=>(f._sqlite3_bind_parameter_name=Y.gb)(a,b);
f._sqlite3_sql=a=>(f._sqlite3_sql=Y.hb)(a);f._sqlite3_exec=(a,b,c,d,e)=>(f._sqlite3_exec=Y.ib)(a,b,c,d,e);f._sqlite3_errmsg=a=>(f._sqlite3_errmsg=Y.jb)(a);f._sqlite3_declare_vtab=(a,b)=>(f._sqlite3_declare_vtab=Y.kb)(a,b);f._sqlite3_libversion=()=>(f._sqlite3_libversion=Y.lb)();f._sqlite3_libversion_number=()=>(f._sqlite3_libversion_number=Y.mb)();f._sqlite3_changes=a=>(f._sqlite3_changes=Y.nb)(a);f._sqlite3_close=a=>(f._sqlite3_close=Y.ob)(a);
f._sqlite3_limit=(a,b,c)=>(f._sqlite3_limit=Y.pb)(a,b,c);f._sqlite3_open_v2=(a,b,c,d)=>(f._sqlite3_open_v2=Y.qb)(a,b,c,d);f._sqlite3_get_autocommit=a=>(f._sqlite3_get_autocommit=Y.rb)(a);var jd=()=>(jd=Y.sb)(),Tb=f._malloc=a=>(Tb=f._malloc=Y.tb)(a),cd=f._free=a=>(cd=f._free=Y.ub)(a);f._RegisterExtensionFunctions=a=>(f._RegisterExtensionFunctions=Y.vb)(a);f._set_authorizer=a=>(f._set_authorizer=Y.wb)(a);f._create_function=(a,b,c,d,e,h)=>(f._create_function=Y.xb)(a,b,c,d,e,h);
f._update_hook=(a,b)=>(f._update_hook=Y.yb)(a,b);f._create_module=(a,b,c,d)=>(f._create_module=Y.zb)(a,b,c,d);f._progress_handler=(a,b)=>(f._progress_handler=Y.Ab)(a,b);f._register_vfs=(a,b,c,d)=>(f._register_vfs=Y.Bb)(a,b,c,d);f._getSqliteFree=()=>(f._getSqliteFree=Y.Cb)();var ld=f._main=(a,b)=>(ld=f._main=Y.Db)(a,b),db=(a,b)=>(db=Y.Fb)(a,b),md=()=>(md=Y.Gb)(),hd=()=>(hd=Y.Hb)(),fd=a=>(fd=Y.Ib)(a),gd=a=>(gd=Y.Jb)(a),ad=a=>(ad=Y.Kb)(a),Qc=()=>(Qc=Y.Lb)(),$c=a=>($c=Y.Mb)(a),bd=()=>(bd=Y.Nb)();
f.getTempRet0=md;f.ccall=Z;f.cwrap=(a,b,c,d)=>{var e=!c||c.every(h=>"number"===h||"boolean"===h);return"string"!==b&&e&&!d?f["_"+a]:function(){return Z(a,b,c,arguments,d)}};f.setValue=J;f.getValue=I;f.UTF8ToString=(a,b)=>a?K(y,a,b):"";f.stringToUTF8=(a,b,c)=>Sa(a,y,b,c);f.lengthBytesUTF8=Ra;var nd;za=function od(){nd||pd();nd||(za=od)};
function pd(){function a(){if(!nd&&(nd=!0,f.calledRun=!0,!v)){f.noFSInit||Jb||(Jb=!0,Ib(),f.stdin=f.stdin,f.stdout=f.stdout,f.stderr=f.stderr,f.stdin?Kb("stdin",f.stdin):zb("/dev/tty","/dev/stdin"),f.stdout?Kb("stdout",null,f.stdout):zb("/dev/tty","/dev/stdout"),f.stderr?Kb("stderr",null,f.stderr):zb("/dev/tty1","/dev/stderr"),Fb("/dev/stdin",0),Fb("/dev/stdout",1),Fb("/dev/stderr",1));jb=!1;Ia(ta);Ia(ua);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(qd){var b=ld;try{var c=b(0,0);na=
c;Lc(c)}catch(d){Mc(d)}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),va.unshift(b);Ia(va)}}if(!(0<C)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)xa();Ia(sa);0<C||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();
var qd=!0;f.noInitialRun&&(qd=!1);pd();


  return moduleArg.ready
}

);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);

/***/ }),

/***/ "./node_modules/wa-sqlite/src/VFS.js":
/*!*******************************************!*\
  !*** ./node_modules/wa-sqlite/src/VFS.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   FILE_TYPE_MASK: () => (/* binding */ FILE_TYPE_MASK),
/* harmony export */   SQLITE_ABORT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ABORT),
/* harmony export */   SQLITE_ACCESS_EXISTS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ACCESS_EXISTS),
/* harmony export */   SQLITE_ACCESS_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ACCESS_READ),
/* harmony export */   SQLITE_ACCESS_READWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ACCESS_READWRITE),
/* harmony export */   SQLITE_ALTER_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ALTER_TABLE),
/* harmony export */   SQLITE_ANALYZE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ANALYZE),
/* harmony export */   SQLITE_ATTACH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ATTACH),
/* harmony export */   SQLITE_AUTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_AUTH),
/* harmony export */   SQLITE_BLOB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BLOB),
/* harmony export */   SQLITE_BUSY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY),
/* harmony export */   SQLITE_CANTOPEN: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CANTOPEN),
/* harmony export */   SQLITE_CONSTRAINT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT),
/* harmony export */   SQLITE_CONSTRAINT_CHECK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_CHECK),
/* harmony export */   SQLITE_CONSTRAINT_COMMITHOOK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_COMMITHOOK),
/* harmony export */   SQLITE_CONSTRAINT_FOREIGNKEY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_FOREIGNKEY),
/* harmony export */   SQLITE_CONSTRAINT_FUNCTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_FUNCTION),
/* harmony export */   SQLITE_CONSTRAINT_NOTNULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_NOTNULL),
/* harmony export */   SQLITE_CONSTRAINT_PINNED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_PINNED),
/* harmony export */   SQLITE_CONSTRAINT_PRIMARYKEY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_PRIMARYKEY),
/* harmony export */   SQLITE_CONSTRAINT_ROWID: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_ROWID),
/* harmony export */   SQLITE_CONSTRAINT_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_TRIGGER),
/* harmony export */   SQLITE_CONSTRAINT_UNIQUE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_UNIQUE),
/* harmony export */   SQLITE_CONSTRAINT_VTAB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_VTAB),
/* harmony export */   SQLITE_COPY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_COPY),
/* harmony export */   SQLITE_CORRUPT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CORRUPT),
/* harmony export */   SQLITE_CREATE_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_INDEX),
/* harmony export */   SQLITE_CREATE_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TABLE),
/* harmony export */   SQLITE_CREATE_TEMP_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_INDEX),
/* harmony export */   SQLITE_CREATE_TEMP_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_TABLE),
/* harmony export */   SQLITE_CREATE_TEMP_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_TRIGGER),
/* harmony export */   SQLITE_CREATE_TEMP_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_VIEW),
/* harmony export */   SQLITE_CREATE_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TRIGGER),
/* harmony export */   SQLITE_CREATE_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_VIEW),
/* harmony export */   SQLITE_CREATE_VTABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_VTABLE),
/* harmony export */   SQLITE_DELETE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DELETE),
/* harmony export */   SQLITE_DENY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DENY),
/* harmony export */   SQLITE_DETACH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DETACH),
/* harmony export */   SQLITE_DETERMINISTIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DETERMINISTIC),
/* harmony export */   SQLITE_DIRECTONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DIRECTONLY),
/* harmony export */   SQLITE_DONE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DONE),
/* harmony export */   SQLITE_DROP_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_INDEX),
/* harmony export */   SQLITE_DROP_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TABLE),
/* harmony export */   SQLITE_DROP_TEMP_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_INDEX),
/* harmony export */   SQLITE_DROP_TEMP_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_TABLE),
/* harmony export */   SQLITE_DROP_TEMP_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_TRIGGER),
/* harmony export */   SQLITE_DROP_TEMP_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_VIEW),
/* harmony export */   SQLITE_DROP_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TRIGGER),
/* harmony export */   SQLITE_DROP_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_VIEW),
/* harmony export */   SQLITE_DROP_VTABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_VTABLE),
/* harmony export */   SQLITE_EMPTY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_EMPTY),
/* harmony export */   SQLITE_ERROR: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ERROR),
/* harmony export */   SQLITE_FCNTL_BEGIN_ATOMIC_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_BEGIN_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_BUSYHANDLER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_BUSYHANDLER),
/* harmony export */   SQLITE_FCNTL_CHUNK_SIZE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_CHUNK_SIZE),
/* harmony export */   SQLITE_FCNTL_CKPT_DONE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_CKPT_DONE),
/* harmony export */   SQLITE_FCNTL_CKPT_START: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_CKPT_START),
/* harmony export */   SQLITE_FCNTL_COMMIT_ATOMIC_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_COMMIT_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_COMMIT_PHASETWO: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_COMMIT_PHASETWO),
/* harmony export */   SQLITE_FCNTL_DATA_VERSION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_DATA_VERSION),
/* harmony export */   SQLITE_FCNTL_FILE_POINTER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_FILE_POINTER),
/* harmony export */   SQLITE_FCNTL_GET_LOCKPROXYFILE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_GET_LOCKPROXYFILE),
/* harmony export */   SQLITE_FCNTL_HAS_MOVED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_HAS_MOVED),
/* harmony export */   SQLITE_FCNTL_JOURNAL_POINTER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_JOURNAL_POINTER),
/* harmony export */   SQLITE_FCNTL_LAST_ERRNO: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_LAST_ERRNO),
/* harmony export */   SQLITE_FCNTL_LOCKSTATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_LOCKSTATE),
/* harmony export */   SQLITE_FCNTL_LOCK_TIMEOUT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_LOCK_TIMEOUT),
/* harmony export */   SQLITE_FCNTL_MMAP_SIZE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_MMAP_SIZE),
/* harmony export */   SQLITE_FCNTL_OVERWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_OVERWRITE),
/* harmony export */   SQLITE_FCNTL_PDB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_PDB),
/* harmony export */   SQLITE_FCNTL_PERSIST_WAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_PERSIST_WAL),
/* harmony export */   SQLITE_FCNTL_POWERSAFE_OVERWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_POWERSAFE_OVERWRITE),
/* harmony export */   SQLITE_FCNTL_PRAGMA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_PRAGMA),
/* harmony export */   SQLITE_FCNTL_RBU: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_RBU),
/* harmony export */   SQLITE_FCNTL_RESERVE_BYTES: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_RESERVE_BYTES),
/* harmony export */   SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_SET_LOCKPROXYFILE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SET_LOCKPROXYFILE),
/* harmony export */   SQLITE_FCNTL_SIZE_HINT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SIZE_HINT),
/* harmony export */   SQLITE_FCNTL_SIZE_LIMIT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SIZE_LIMIT),
/* harmony export */   SQLITE_FCNTL_SYNC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SYNC),
/* harmony export */   SQLITE_FCNTL_SYNC_OMITTED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SYNC_OMITTED),
/* harmony export */   SQLITE_FCNTL_TEMPFILENAME: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_TEMPFILENAME),
/* harmony export */   SQLITE_FCNTL_TRACE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_TRACE),
/* harmony export */   SQLITE_FCNTL_VFSNAME: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_VFSNAME),
/* harmony export */   SQLITE_FCNTL_VFS_POINTER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_VFS_POINTER),
/* harmony export */   SQLITE_FCNTL_WAL_BLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WAL_BLOCK),
/* harmony export */   SQLITE_FCNTL_WIN32_AV_RETRY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WIN32_AV_RETRY),
/* harmony export */   SQLITE_FCNTL_WIN32_GET_HANDLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WIN32_GET_HANDLE),
/* harmony export */   SQLITE_FCNTL_WIN32_SET_HANDLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WIN32_SET_HANDLE),
/* harmony export */   SQLITE_FCNTL_ZIPVFS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_ZIPVFS),
/* harmony export */   SQLITE_FLOAT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FLOAT),
/* harmony export */   SQLITE_FORMAT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FORMAT),
/* harmony export */   SQLITE_FULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FULL),
/* harmony export */   SQLITE_FUNCTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FUNCTION),
/* harmony export */   SQLITE_IGNORE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IGNORE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_EQ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_EQ),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_FUNCTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_FUNCTION),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_GE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GLOB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_GLOB),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_GT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_IS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_IS),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNOT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_ISNOT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNOTNULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_ISNOTNULL),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_ISNULL),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_LE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LIKE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_LIKE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_LT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_MATCH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_MATCH),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_NE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_NE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_REGEXP: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_REGEXP),
/* harmony export */   SQLITE_INDEX_SCAN_UNIQUE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_SCAN_UNIQUE),
/* harmony export */   SQLITE_INNOCUOUS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INNOCUOUS),
/* harmony export */   SQLITE_INSERT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INSERT),
/* harmony export */   SQLITE_INTEGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTEGER),
/* harmony export */   SQLITE_INTERNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTERNAL),
/* harmony export */   SQLITE_INTERRUPT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTERRUPT),
/* harmony export */   SQLITE_IOCAP_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC),
/* harmony export */   SQLITE_IOCAP_ATOMIC16K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC16K),
/* harmony export */   SQLITE_IOCAP_ATOMIC1K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC1K),
/* harmony export */   SQLITE_IOCAP_ATOMIC2K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC2K),
/* harmony export */   SQLITE_IOCAP_ATOMIC32K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC32K),
/* harmony export */   SQLITE_IOCAP_ATOMIC4K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC4K),
/* harmony export */   SQLITE_IOCAP_ATOMIC512: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC512),
/* harmony export */   SQLITE_IOCAP_ATOMIC64K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC64K),
/* harmony export */   SQLITE_IOCAP_ATOMIC8K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC8K),
/* harmony export */   SQLITE_IOCAP_BATCH_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_BATCH_ATOMIC),
/* harmony export */   SQLITE_IOCAP_IMMUTABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_IMMUTABLE),
/* harmony export */   SQLITE_IOCAP_POWERSAFE_OVERWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_POWERSAFE_OVERWRITE),
/* harmony export */   SQLITE_IOCAP_SAFE_APPEND: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_SAFE_APPEND),
/* harmony export */   SQLITE_IOCAP_SEQUENTIAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_SEQUENTIAL),
/* harmony export */   SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN),
/* harmony export */   SQLITE_IOERR: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR),
/* harmony export */   SQLITE_IOERR_ACCESS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_ACCESS),
/* harmony export */   SQLITE_IOERR_BEGIN_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_BEGIN_ATOMIC),
/* harmony export */   SQLITE_IOERR_CHECKRESERVEDLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_CHECKRESERVEDLOCK),
/* harmony export */   SQLITE_IOERR_CLOSE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_CLOSE),
/* harmony export */   SQLITE_IOERR_COMMIT_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_COMMIT_ATOMIC),
/* harmony export */   SQLITE_IOERR_DATA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DATA),
/* harmony export */   SQLITE_IOERR_DELETE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DELETE),
/* harmony export */   SQLITE_IOERR_DELETE_NOENT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DELETE_NOENT),
/* harmony export */   SQLITE_IOERR_DIR_FSYNC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DIR_FSYNC),
/* harmony export */   SQLITE_IOERR_FSTAT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_FSTAT),
/* harmony export */   SQLITE_IOERR_FSYNC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_FSYNC),
/* harmony export */   SQLITE_IOERR_GETTEMPPATH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_GETTEMPPATH),
/* harmony export */   SQLITE_IOERR_LOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_LOCK),
/* harmony export */   SQLITE_IOERR_NOMEM: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_NOMEM),
/* harmony export */   SQLITE_IOERR_RDLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_RDLOCK),
/* harmony export */   SQLITE_IOERR_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_READ),
/* harmony export */   SQLITE_IOERR_ROLLBACK_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_ROLLBACK_ATOMIC),
/* harmony export */   SQLITE_IOERR_SEEK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_SEEK),
/* harmony export */   SQLITE_IOERR_SHORT_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_SHORT_READ),
/* harmony export */   SQLITE_IOERR_TRUNCATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_TRUNCATE),
/* harmony export */   SQLITE_IOERR_UNLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_UNLOCK),
/* harmony export */   SQLITE_IOERR_VNODE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_VNODE),
/* harmony export */   SQLITE_IOERR_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_WRITE),
/* harmony export */   SQLITE_LIMIT_ATTACHED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_ATTACHED),
/* harmony export */   SQLITE_LIMIT_COLUMN: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_COLUMN),
/* harmony export */   SQLITE_LIMIT_COMPOUND_SELECT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_COMPOUND_SELECT),
/* harmony export */   SQLITE_LIMIT_EXPR_DEPTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_EXPR_DEPTH),
/* harmony export */   SQLITE_LIMIT_FUNCTION_ARG: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_FUNCTION_ARG),
/* harmony export */   SQLITE_LIMIT_LENGTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_LENGTH),
/* harmony export */   SQLITE_LIMIT_LIKE_PATTERN_LENGTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_LIKE_PATTERN_LENGTH),
/* harmony export */   SQLITE_LIMIT_SQL_LENGTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_SQL_LENGTH),
/* harmony export */   SQLITE_LIMIT_TRIGGER_DEPTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_TRIGGER_DEPTH),
/* harmony export */   SQLITE_LIMIT_VARIABLE_NUMBER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_VARIABLE_NUMBER),
/* harmony export */   SQLITE_LIMIT_VDBE_OP: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_VDBE_OP),
/* harmony export */   SQLITE_LIMIT_WORKER_THREADS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_WORKER_THREADS),
/* harmony export */   SQLITE_LOCKED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCKED),
/* harmony export */   SQLITE_LOCK_EXCLUSIVE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE),
/* harmony export */   SQLITE_LOCK_NONE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE),
/* harmony export */   SQLITE_LOCK_PENDING: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_PENDING),
/* harmony export */   SQLITE_LOCK_RESERVED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED),
/* harmony export */   SQLITE_LOCK_SHARED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED),
/* harmony export */   SQLITE_MISMATCH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISMATCH),
/* harmony export */   SQLITE_MISUSE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE),
/* harmony export */   SQLITE_NOLFS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOLFS),
/* harmony export */   SQLITE_NOMEM: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOMEM),
/* harmony export */   SQLITE_NOTADB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTADB),
/* harmony export */   SQLITE_NOTFOUND: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND),
/* harmony export */   SQLITE_NOTICE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTICE),
/* harmony export */   SQLITE_NULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NULL),
/* harmony export */   SQLITE_OK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK),
/* harmony export */   SQLITE_OPEN_AUTOPROXY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_AUTOPROXY),
/* harmony export */   SQLITE_OPEN_CREATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_CREATE),
/* harmony export */   SQLITE_OPEN_DELETEONCLOSE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_DELETEONCLOSE),
/* harmony export */   SQLITE_OPEN_EXCLUSIVE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_EXCLUSIVE),
/* harmony export */   SQLITE_OPEN_FULLMUTEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_FULLMUTEX),
/* harmony export */   SQLITE_OPEN_MAIN_DB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_DB),
/* harmony export */   SQLITE_OPEN_MAIN_JOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_JOURNAL),
/* harmony export */   SQLITE_OPEN_MEMORY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MEMORY),
/* harmony export */   SQLITE_OPEN_NOFOLLOW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_NOFOLLOW),
/* harmony export */   SQLITE_OPEN_NOMUTEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_NOMUTEX),
/* harmony export */   SQLITE_OPEN_PRIVATECACHE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_PRIVATECACHE),
/* harmony export */   SQLITE_OPEN_READONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READONLY),
/* harmony export */   SQLITE_OPEN_READWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READWRITE),
/* harmony export */   SQLITE_OPEN_SHAREDCACHE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SHAREDCACHE),
/* harmony export */   SQLITE_OPEN_SUBJOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUBJOURNAL),
/* harmony export */   SQLITE_OPEN_SUPER_JOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUPER_JOURNAL),
/* harmony export */   SQLITE_OPEN_TEMP_DB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_DB),
/* harmony export */   SQLITE_OPEN_TEMP_JOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_JOURNAL),
/* harmony export */   SQLITE_OPEN_TRANSIENT_DB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TRANSIENT_DB),
/* harmony export */   SQLITE_OPEN_URI: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_URI),
/* harmony export */   SQLITE_OPEN_WAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_WAL),
/* harmony export */   SQLITE_PERM: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PERM),
/* harmony export */   SQLITE_PRAGMA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PRAGMA),
/* harmony export */   SQLITE_PROTOCOL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PROTOCOL),
/* harmony export */   SQLITE_RANGE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE),
/* harmony export */   SQLITE_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_READ),
/* harmony export */   SQLITE_READONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_READONLY),
/* harmony export */   SQLITE_RECURSIVE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RECURSIVE),
/* harmony export */   SQLITE_REINDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_REINDEX),
/* harmony export */   SQLITE_ROW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW),
/* harmony export */   SQLITE_SAVEPOINT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SAVEPOINT),
/* harmony export */   SQLITE_SCHEMA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SCHEMA),
/* harmony export */   SQLITE_SELECT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SELECT),
/* harmony export */   SQLITE_STATIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_STATIC),
/* harmony export */   SQLITE_SUBTYPE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SUBTYPE),
/* harmony export */   SQLITE_SYNC_DATAONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SYNC_DATAONLY),
/* harmony export */   SQLITE_SYNC_FULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SYNC_FULL),
/* harmony export */   SQLITE_SYNC_NORMAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SYNC_NORMAL),
/* harmony export */   SQLITE_TEXT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TEXT),
/* harmony export */   SQLITE_TOOBIG: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TOOBIG),
/* harmony export */   SQLITE_TRANSACTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TRANSACTION),
/* harmony export */   SQLITE_TRANSIENT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TRANSIENT),
/* harmony export */   SQLITE_UPDATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UPDATE),
/* harmony export */   SQLITE_UTF16: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF16),
/* harmony export */   SQLITE_UTF16BE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF16BE),
/* harmony export */   SQLITE_UTF16LE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF16LE),
/* harmony export */   SQLITE_UTF8: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF8),
/* harmony export */   SQLITE_WARNING: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_WARNING)
/* harmony export */ });
/* harmony import */ var _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sqlite-constants.js */ "./node_modules/wa-sqlite/src/sqlite-constants.js");
// Copyright 2022 Roy T. Hashimoto. All Rights Reserved.



// Base class for a VFS.
class Base {
  mxPathName = 64;

  /**
   * @param {number} fileId 
   * @returns {number}
   */
  xClose(fileId) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {number}
   */
  xRead(fileId, pData, iOffset) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {number}
   */
  xWrite(fileId, pData, iOffset) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * @param {number} fileId 
   * @param {number} iSize 
   * @returns {number}
   */
  xTruncate(fileId, iSize) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * @param {number} fileId 
   * @param {*} flags 
   * @returns {number}
   */
  xSync(fileId, flags) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {DataView} pSize64 
   * @returns {number}
   */
  xFileSize(fileId, pSize64) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {number}
   */
  xLock(fileId, flags) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {number}
   */
  xUnlock(fileId, flags) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {DataView} pResOut 
   * @returns {number}
   */
  xCheckReservedLock(fileId, pResOut) {
    pResOut.setInt32(0, 0, true);
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {number} op 
   * @param {DataView} pArg 
   * @returns {number}
   */
  xFileControl(fileId, op, pArg) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND;
  }

  /**
   * @param {number} fileId 
   * @returns {number}
   */
  xSectorSize(fileId) {
    return 512;
  }

  /**
   * @param {number} fileId 
   * @returns {number}
   */
  xDeviceCharacteristics(fileId) {
    return 0;
  }

  /**
   * @param {string?} name 
   * @param {number} fileId 
   * @param {number} flags 
   * @param {DataView} pOutFlags 
   * @returns {number}
   */
  xOpen(name, fileId, flags, pOutFlags) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CANTOPEN;
  }

  /**
   * @param {string} name 
   * @param {number} syncDir 
   * @returns {number}
   */
  xDelete(name, syncDir) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * @param {string} name 
   * @param {number} flags 
   * @param {DataView} pResOut 
   * @returns {number}
   */
  xAccess(name, flags, pResOut) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
  }

  /**
   * Handle asynchronous operation. This implementation will be overriden on
   * registration by an Asyncify build.
   * @param {function(): Promise<number>} f 
   * @returns {number}
   */
  handleAsync(f) {
    // This default implementation deliberately does not match the
    // declared signature. It will be used in testing VFS classes
    // separately from SQLite. This will work acceptably for methods
    // that simply return the handleAsync() result without using it.
    // @ts-ignore
    return f();
  }
}

const FILE_TYPE_MASK = [
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_DB,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_JOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_DB,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_JOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TRANSIENT_DB,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUBJOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUPER_JOURNAL
].reduce((mask, element) => mask | element);

/***/ }),

/***/ "./node_modules/wa-sqlite/src/examples/IDBBatchAtomicVFS.js":
/*!******************************************************************!*\
  !*** ./node_modules/wa-sqlite/src/examples/IDBBatchAtomicVFS.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDBBatchAtomicVFS: () => (/* binding */ IDBBatchAtomicVFS)
/* harmony export */ });
/* harmony import */ var _VFS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VFS.js */ "./node_modules/wa-sqlite/src/VFS.js");
/* harmony import */ var _WebLocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebLocks.js */ "./node_modules/wa-sqlite/src/examples/WebLocks.js");
/* harmony import */ var _IDBContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IDBContext.js */ "./node_modules/wa-sqlite/src/examples/IDBContext.js");
// Copyright 2022 Roy T. Hashimoto. All Rights Reserved.




const SECTOR_SIZE = 512;
const MAX_TASK_MILLIS = 3000;

/**
 * @typedef VFSOptions
 * @property {"default"|"strict"|"relaxed"} [durability]
 * @property {"deferred"|"manual"} [purge]
 * @property {number} [purgeAtLeast]
 */

/** @type {VFSOptions} */
const DEFAULT_OPTIONS = {
  durability: "default",
  purge: "deferred",
  purgeAtLeast: 16
};

function log(...args) {
  // console.debug(...args);
}

/**
 * @typedef FileBlock IndexedDB object with key [path, offset, version]
 * @property {string} path
 * @property {number} offset negative of position in file
 * @property {number} version
 * @property {Uint8Array} data
 *
 * @property {number} [fileSize] Only present on block 0
*/

/**
 * @typedef OpenedFileEntry
 * @property {string} path
 * @property {number} flags
 * @property {FileBlock} block0
 * @property {boolean} isMetadataChanged
 * @property {WebLocks} locks
 * 
 * @property {Set<number>} [changedPages]
 * @property {boolean} [overwrite]
 */

// This sample VFS stores optionally versioned writes to IndexedDB, which
// it uses with the SQLite xFileControl() batch atomic write feature.
class IDBBatchAtomicVFS extends _VFS_js__WEBPACK_IMPORTED_MODULE_0__.Base {
  #options;
  /** @type {Map<number, OpenedFileEntry>} */ #mapIdToFile = new Map();

  /** @type {IDBContext} */ #idb;
  /** @type {Set<string>} */ #pendingPurges = new Set();

  #taskTimestamp = performance.now();
  #pendingAsync = new Set();

  constructor(idbDatabaseName = 'wa-sqlite', options = DEFAULT_OPTIONS) {
    super();
    this.name = idbDatabaseName;
    this.#options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.#idb = new _IDBContext_js__WEBPACK_IMPORTED_MODULE_2__.IDBContext(openDatabase(idbDatabaseName), {
      durability: this.#options.durability
    });
  }

  async close() {
    for (const fileId of this.#mapIdToFile.keys()) {
      await this.xClose(fileId);
    }

    await this.#idb?.close();
    this.#idb = null;
  }

  /**
   * @param {string?} name 
   * @param {number} fileId 
   * @param {number} flags 
   * @param {DataView} pOutFlags 
   * @returns {number}
   */
  xOpen(name, fileId, flags, pOutFlags) {
    return this.handleAsync(async () => {
      if (name === null) name = `null_${fileId}`;
      log(`xOpen ${name} 0x${fileId.toString(16)} 0x${flags.toString(16)}`);

      try {
        // Filenames can be URLs, possibly with query parameters.
        const url = new URL(name, 'http://localhost/');
        /** @type {OpenedFileEntry} */ const file = {
          path: url.pathname,
          flags,
          block0: null,
          isMetadataChanged: true,
          locks: new _WebLocks_js__WEBPACK_IMPORTED_MODULE_1__.WebLocksExclusive(url.pathname)
        };
        this.#mapIdToFile.set(fileId, file);

        // Read the first block, which also contains the file metadata.
        await this.#idb.run('readwrite', async ({blocks}) => {
          file.block0 = await blocks.get(this.#bound(file, 0));
          if (!file.block0) {
            if (flags & _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_CREATE) {
              file.block0 = {
                path: file.path,
                offset: 0,
                version: 0,
                data: new Uint8Array(0),
                fileSize: 0
              };
              blocks.put(file.block0);
            } else {
              throw new Error(`file not found: ${file.path}`);
            }
          }
        });
        pOutFlags.setInt32(0, flags & _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READONLY, true);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
      } catch (e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CANTOPEN;
      }
    });
  }

  /**
   * @param {number} fileId 
   * @returns {number}
   */
  xClose(fileId) {
    return this.handleAsync(async () => {
      try {
        const file = this.#mapIdToFile.get(fileId);
        if (file) {
          log(`xClose ${file.path}`);

          this.#mapIdToFile.delete(fileId);
          if (file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_DELETEONCLOSE) {
            this.#idb.run('readwrite', ({blocks}) => {
              blocks.delete(IDBKeyRange.bound([file.path], [file.path, []]));
            });
          }
        }
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
      } catch (e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
      }
    });
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {number}
   */
  xRead(fileId, pData, iOffset) {
    return this.handleAsync(async () => {
      const file = this.#mapIdToFile.get(fileId);
      log(`xRead ${file.path} ${pData.byteLength} ${iOffset}`);

      try {
        // Read as many blocks as necessary to satisfy the read request.
        // Usually a read fits within a single write but there is at least
        // one case - rollback after journal spill - where reads cross
        // write boundaries so we have to allow for that.
        const result = await this.#idb.run('readonly', async ({blocks}) => {
          let pDataOffset = 0;
          while (pDataOffset < pData.byteLength) {
            // Fetch the IndexedDB block for this file location.
            const fileOffset = iOffset + pDataOffset;
            /** @type {FileBlock} */
            const block = fileOffset < file.block0.data.byteLength ?
              file.block0 :
              await blocks.get(this.#bound(file, -fileOffset));

            if (!block || block.data.byteLength - block.offset <= fileOffset) {
              pData.fill(0, pDataOffset);
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_SHORT_READ;
            }

            const buffer = pData.subarray(pDataOffset);
            const blockOffset = fileOffset + block.offset;
            const nBytesToCopy = Math.min(
              Math.max(block.data.byteLength - blockOffset, 0), // source bytes
              buffer.byteLength);                               // destination bytes
            buffer.set(block.data.subarray(blockOffset, blockOffset + nBytesToCopy));
            pDataOffset += nBytesToCopy;
          }
          return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
        });
        return result;
      } catch (e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
      }
    });
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {number}
   */
  xWrite(fileId, pData, iOffset) {
    // Handle asynchronously every MAX_TASK_MILLIS milliseconds. This is
    // tricky because Asyncify calls asynchronous methods twice: once
    // to initiate the call and unwinds the stack, then rewinds the
    // stack and calls again to retrieve the completed result.
    const rewound = this.#pendingAsync.has(fileId);
    if (rewound || performance.now() - this.#taskTimestamp > MAX_TASK_MILLIS) {
      const result = this.handleAsync(async () => {
        if (this.handleAsync !== super.handleAsync) {
          this.#pendingAsync.add(fileId);
        }
        await new Promise(resolve => setTimeout(resolve));

        const result = this.#xWriteHelper(fileId, pData, iOffset);
        this.#taskTimestamp = performance.now();
        return result;
      });

      if (rewound) this.#pendingAsync.delete(fileId);
      return result;
    }
    return this.#xWriteHelper(fileId, pData, iOffset);
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {number}
   */
  #xWriteHelper(fileId, pData, iOffset) {
    const file = this.#mapIdToFile.get(fileId);
    log(`xWrite ${file.path} ${pData.byteLength} ${iOffset}`);

    try {
      // Update file size if appending.
      const prevFileSize = file.block0.fileSize;
      if (file.block0.fileSize < iOffset + pData.byteLength) {
        file.block0.fileSize = iOffset + pData.byteLength;
        file.isMetadataChanged = true;
      }

      // Convert the write directly into an IndexedDB object. Our assumption
      // is that SQLite will only overwrite data with an xWrite of the same
      // offset and size unless the database page size changes, except when
      // changing database page size which is handled by #reblockIfNeeded().
      const block = iOffset === 0 ? file.block0 : {
        path: file.path,
        offset: -iOffset,
        version: file.block0.version,
        data: null
      };
      block.data = pData.slice();

      if (file.changedPages) {
        // This write is part of a batch atomic write. All writes in the
        // batch have a new version, so update the changed list to allow
        // old versions to be eventually deleted.
        if (prevFileSize === file.block0.fileSize) {
          file.changedPages.add(-iOffset);
        }

        // Defer writing block 0 to IndexedDB until batch commit.
        if (iOffset !== 0) {
          this.#idb.run('readwrite', ({blocks}) => blocks.put(block));
        }
      } else {
        // Not a batch atomic write so write through.
        this.#idb.run('readwrite', ({blocks}) => blocks.put(block));
      }

      // Clear dirty flag if page 0 was written.
      file.isMetadataChanged = iOffset === 0 ? false : file.isMetadataChanged;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    } catch (e) {
      console.error(e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
    }
  }

  /**
   * @param {number} fileId 
   * @param {number} iSize 
   * @returns {number}
   */
  xTruncate(fileId, iSize) {
    const file = this.#mapIdToFile.get(fileId);
    log(`xTruncate ${file.path} ${iSize}`);

    try {
      Object.assign(file.block0, {
        fileSize: iSize,
        data: file.block0.data.slice(0, iSize)
      });

      // Delete all blocks beyond the file size and update metadata.
      // This is never called within a transaction.
      const block0 = Object.assign({}, file.block0);
      this.#idb.run('readwrite', ({blocks})=> {
        blocks.delete(this.#bound(file, -Infinity, -iSize));
        blocks.put(block0);
      });
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    } catch (e) {
      console.error(e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
    }
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {number}
   */
  xSync(fileId, flags) {
    // Skip IndexedDB sync if durability is relaxed and the last
    // sync was recent enough.
    const rewound = this.#pendingAsync.has(fileId);
    if (rewound || this.#options.durability !== 'relaxed' ||
        performance.now() - this.#taskTimestamp > MAX_TASK_MILLIS) {
      const result = this.handleAsync(async () => {
        if (this.handleAsync !== super.handleAsync) {
          this.#pendingAsync.add(fileId);
        }

        const result = await this.#xSyncHelper(fileId, flags);
        this.#taskTimestamp = performance.now();
        return result;
      });

      if (rewound) this.#pendingAsync.delete(fileId);
      return result;
    }

    const file = this.#mapIdToFile.get(fileId);
    log(`xSync ${file.path} ${flags}`);
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {Promise<number>}
   */
  async #xSyncHelper(fileId, flags) {
    const file = this.#mapIdToFile.get(fileId);
    log(`xSync ${file.path} ${flags}`);
    try {
      if (file.isMetadataChanged) {
        // Metadata has changed so write block 0 to IndexedDB.
        this.#idb.run('readwrite', async ({blocks}) => {
          await blocks.put(file.block0);
        }); 
        file.isMetadataChanged = false;
      }
      await this.#idb.sync();
    } catch (e) {
      console.error(e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
    }
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {DataView} pSize64 
   * @returns {number}
   */
  xFileSize(fileId, pSize64) {
    const file = this.#mapIdToFile.get(fileId);
    log(`xFileSize ${file.path}`);

    pSize64.setBigInt64(0, BigInt(file.block0.fileSize), true)
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {number}
   */
  xLock(fileId, flags) {
    return this.handleAsync(async () => {
      const file = this.#mapIdToFile.get(fileId);
      log(`xLock ${file.path} ${flags}`);

      try {
        // Acquire the lock.
        const result = await file.locks.lock(flags);
        if (result === _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK && file.locks.state === _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED) {
          // Update block 0 in case another connection changed it.
          file.block0 = await this.#idb.run('readonly', ({blocks}) => {
            return blocks.get(this.#bound(file, 0));
          });
        }
        return result;
      } catch (e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
      }
    });
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {number}
   */
  xUnlock(fileId, flags) {
    return this.handleAsync(async () => {
      const file = this.#mapIdToFile.get(fileId);
      log(`xUnlock ${file.path} ${flags}`);
      
      try {
        return file.locks.unlock(flags);
      } catch(e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
      }
    });
  }

  /**
   * @param {number} fileId 
   * @param {DataView} pResOut 
   * @returns {number}
   */
  xCheckReservedLock(fileId, pResOut) {
    return this.handleAsync(async () => {
      const file = this.#mapIdToFile.get(fileId);
      log(`xCheckReservedLock ${file.path}`);

      const isReserved = await file.locks.isSomewhereReserved();
      pResOut.setInt32(0, isReserved ? 1 : 0, true);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    });
  }

  /**
   * @param {number} fileId 
   * @returns {number}
   */
  xSectorSize(fileId) {
    log('xSectorSize');
    return SECTOR_SIZE;
  }

  /**
   * @param {number} fileId 
   * @returns {number}
   */
  xDeviceCharacteristics(fileId) {
    log('xDeviceCharacteristics');
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_BATCH_ATOMIC |
           _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_SAFE_APPEND |
           _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_SEQUENTIAL |
           _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
  }

  /**
   * @param {number} fileId 
   * @param {number} op 
   * @param {DataView} pArg 
   * @returns {number}
   */
  xFileControl(fileId, op, pArg) {
    const file = this.#mapIdToFile.get(fileId);
    log(`xFileControl ${file.path} ${op}`);

    switch (op) {
      case 11: //SQLITE_FCNTL_OVERWRITE
        // This called on VACUUM. Set a flag so we know whether to check
        // later if the page size changed.
        file.overwrite = true;
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;

      case 21: // SQLITE_FCNTL_SYNC
        // This is called at the end of each database transaction, whether
        // it is batch atomic or not. Handle page size changes here.
        if (file.overwrite) {
          // As an optimization we only check for and handle a page file
          // changes if we know a VACUUM has been done because handleAsync()
          // has to unwind and rewind the stack. We must be sure to follow
          // the same conditional path in both calls.
          try {
            return this.handleAsync(async () => {
              await this.#reblockIfNeeded(file);
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
            });
          } catch (e) {
            console.error(e);
            return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
          }
        }

        if (file.isMetadataChanged) {
          // Metadata has changed so write block 0 to IndexedDB.
          try {
            this.#idb.run('readwrite', async ({blocks}) => {
              await blocks.put(file.block0);
            });
            file.isMetadataChanged = false;
          } catch (e) {
            console.error(e);
            return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
          }
        }
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;

      case 22: // SQLITE_FCNTL_COMMIT_PHASETWO
        // This is called after a commit is completed.
        file.overwrite = false;
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;

      case 31: // SQLITE_FCNTL_BEGIN_ATOMIC_WRITE
        return this.handleAsync(async () => {
          try {
            // Prepare a new version for IndexedDB blocks.
            file.block0.version--;
            file.changedPages = new Set();

            // Clear blocks from abandoned transactions that would conflict
            // with the new transaction.
            this.#idb.run('readwrite', async ({blocks}) => {
              const keys = await blocks.index('version').getAllKeys(IDBKeyRange.bound(
                [file.path],
                [file.path, file.block0.version]));
              for (const key of keys) {
                blocks.delete(key);
              }
            });
            return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
          } catch (e) {
            console.error(e);
            return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
          }
        });

      case 32: // SQLITE_FCNTL_COMMIT_ATOMIC_WRITE
        try {
          const block0 = Object.assign({}, file.block0);
          block0.data = block0.data.slice();
          const changedPages = file.changedPages;
          file.changedPages = null;
          file.isMetadataChanged = false;
          this.#idb.run('readwrite', async ({blocks})=> {
            // Write block 0 to commit the new version.
            blocks.put(block0);

            // Blocks to purge are saved in a special IndexedDB object with
            // an "index" of "purge". Add pages changed by this transaction.
            const purgeBlock = await blocks.get([file.path, 'purge', 0]) ?? {
              path: file.path,
              offset: 'purge',
              version: 0,
              data: new Map(),
              count: 0
            };

            purgeBlock.count += changedPages.size;
            for (const pageIndex of changedPages) {
              purgeBlock.data.set(pageIndex, block0.version);
            }

            blocks.put(purgeBlock);
            this.#maybePurge(file.path, purgeBlock.count);
          });
          return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
        } catch (e) {
          console.error(e);
          return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
        }

      case 33: // SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE
        return this.handleAsync(async () => {
          try {
            // Restore original state. Objects for the abandoned version will
            // be left in IndexedDB to be removed by the next atomic write
            // transaction.
            file.changedPages = null;
            file.isMetadataChanged = false;
            file.block0 = await this.#idb.run('readonly', ({blocks}) => {
              return blocks.get([file.path, 0, file.block0.version + 1]);
            });
            return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
          } catch (e) {
            console.error(e);
            return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
          }
        });

      default:
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND;
    }
  }

  /**
   * @param {string} name 
   * @param {number} flags 
   * @param {DataView} pResOut 
   * @returns {number}
   */
  xAccess(name, flags, pResOut) {
    return this.handleAsync(async () => {
      try {
        const path = new URL(name, 'file://localhost/').pathname;
        log(`xAccess ${path} ${flags}`);

        // Check if block 0 exists.
        const key = await this.#idb.run('readonly', ({blocks}) => {
          return blocks.getKey(this.#bound({path}, 0));
        });
        pResOut.setInt32(0, key ? 1 : 0, true);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
      } catch (e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
      }
    });
  }

  /**
   * @param {string} name 
   * @param {number} syncDir 
   * @returns {number}
   */
  xDelete(name, syncDir) {
    return this.handleAsync(async () => {
      const path = new URL(name, 'file://localhost/').pathname;
      log(`xDelete ${path} ${syncDir}`);

      try {
        this.#idb.run('readwrite', ({blocks}) => {
          return blocks.delete(IDBKeyRange.bound([path], [path, []]));
        });
        if (syncDir) {
          await this.#idb.sync();
        }
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
      } catch (e) {
        console.error(e);
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
      }
    });
  }

  /**
   * Purge obsolete blocks from a database file.
   * @param {string} path 
   */
  async purge(path) {
    const start = Date.now();
    await this.#idb.run('readwrite', async ({blocks}) => {
      const purgeBlock = await blocks.get([path, 'purge', 0]);
      if (purgeBlock) {
        for (const [pageOffset, version] of purgeBlock.data) {
          blocks.delete(IDBKeyRange.bound(
            [path, pageOffset, version],
            [path, pageOffset, Infinity],
            true, false));
        }
        await blocks.delete([path, 'purge', 0]);
      }
      log(`purge ${path} ${purgeBlock?.data.size ?? 0} pages in ${Date.now() - start} ms`);
    });
  }

  /**
   * Conditionally schedule a purge task.
   * @param {string} path 
   * @param {number} nPages 
   */
  #maybePurge(path, nPages) {
    if (this.#options.purge === 'manual' ||
        this.#pendingPurges.has(path) ||
        nPages < this.#options.purgeAtLeast) {
      // No purge needed.
      return;
    }
    
    if (globalThis.requestIdleCallback) {
      globalThis.requestIdleCallback(() => {
        this.purge(path);
        this.#pendingPurges.delete(path)
      });
    } else {
      setTimeout(() => {
        this.purge(path);
        this.#pendingPurges.delete(path)
      });
    }
    this.#pendingPurges.add(path);
  }

  #bound(file, begin, end = 0) {
    // Fetch newest block 0. For other blocks, use block 0 version.
    const version = !begin || -begin < file.block0.data.length ?
      -Infinity :
      file.block0.version;
    return IDBKeyRange.bound(
      [file.path, begin, version],
      [file.path, end, Infinity]);
  }

  // The database page size can be changed with PRAGMA page_size and VACUUM.
  // The updated file will be overwritten with a regular transaction using
  // the old page size. After that it will be read and written using the
  // new page size, so the IndexedDB objects must be combined or split
  // appropriately.
  async #reblockIfNeeded(file) {
    const oldPageSize = file.block0.data.length;
    if (oldPageSize < 18) return; // no page size defined

    const view = new DataView(file.block0.data.buffer, file.block0.data.byteOffset);
    let newPageSize = view.getUint16(16);
    if (newPageSize === 1) newPageSize = 65536;
    if (newPageSize === oldPageSize) return; // no page size change

    const maxPageSize = Math.max(oldPageSize, newPageSize);
    const nOldPages = maxPageSize / oldPageSize;
    const nNewPages = maxPageSize / newPageSize;

    const newPageCount = view.getUint32(28);
    const fileSize = newPageCount * newPageSize;

    const version = file.block0.version;
    await this.#idb.run('readwrite', async ({blocks}) => {
      // When the block size changes, the entire file is rewritten. Delete
      // all blocks older than block 0 to leave a single version at every
      // offset.
      const keys = await blocks.index('version').getAllKeys(IDBKeyRange.bound(
        [file.path, version + 1],
        [file.path, Infinity]
      ));
      for (const key of keys) {
        blocks.delete(key);
      }
      blocks.delete([file.path, 'purge', 0]);

      // Do the conversion in chunks of the larger of the page sizes.
      for (let iOffset = 0; iOffset < fileSize; iOffset += maxPageSize) {
        // Fetch nOldPages. They can be fetched in one request because
        // there is now a single version in the file.
        const oldPages = await blocks.getAll(
          IDBKeyRange.lowerBound([file.path, -(iOffset + maxPageSize), Infinity]),
          nOldPages);
        for (const oldPage of oldPages) {
          blocks.delete([oldPage.path, oldPage.offset, oldPage.version]);
        }

        // Convert to new pages.
        if (nNewPages === 1) {
          // Combine nOldPages old pages into a new page.
          const buffer = new Uint8Array(newPageSize);
          for (const oldPage of oldPages) {
            buffer.set(oldPage.data, -(iOffset + oldPage.offset));
          }
          const newPage = {
            path: file.path,
            offset: -iOffset,
            version,
            data: buffer
          };
          if (newPage.offset === 0) {
            newPage.fileSize = fileSize;
            file.block0 = newPage;
          }
          blocks.put(newPage);
        } else {
          // Split an old page into nNewPages new pages.
          const oldPage = oldPages[0];
          for (let i = 0; i < nNewPages; ++i) {
            const offset = -(iOffset + i * newPageSize);
            if (-offset >= fileSize) break;
            const newPage = {
              path: oldPage.path,
              offset,
              version,
              data: oldPage.data.subarray(i * newPageSize, (i + 1) * newPageSize)
            }
            if (newPage.offset === 0) {
              newPage.fileSize = fileSize;
              file.block0 = newPage;
            }
            blocks.put(newPage);
          }
        }
      }
    });
  }
}

function openDatabase(idbDatabaseName) {
  return new Promise((resolve, reject) => {
    const request = globalThis.indexedDB.open(idbDatabaseName, 5);
    request.addEventListener('upgradeneeded', function() {
      const blocks = request.result.createObjectStore('blocks', {
        keyPath: ['path', 'offset', 'version']
      });
      blocks.createIndex('version', ['path', 'version']);
    });
    request.addEventListener('success', () => {
      resolve(request.result);
    });
    request.addEventListener('error', () => {
      reject(request.error);
    });
  });
}

/***/ }),

/***/ "./node_modules/wa-sqlite/src/examples/IDBContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/wa-sqlite/src/examples/IDBContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDBContext: () => (/* binding */ IDBContext)
/* harmony export */ });
// Copyright 2022 Roy T. Hashimoto. All Rights Reserved.

// IndexedDB transactions older than this will be replaced.
const MAX_TRANSACTION_LIFETIME_MILLIS = 5_000;

// For debugging.
let nextTxId = 0;
const mapTxToId = new WeakMap();
function log(...args) {
  // console.debug(...args);
}

// This class manages IDBTransaction and IDBRequest instances. It tries
// to reuse transactions to minimize transaction overhead.
class IDBContext {
  /** @type {IDBDatabase} */ #db;
  /** @type {Promise<IDBDatabase>} */ #dbReady;
  #txOptions;

  /** @type {IDBTransaction} */ #tx = null;
  #txTimestamp = 0;
  #runChain = Promise.resolve();
  #putChain = Promise.resolve();

  /**
   * @param {IDBDatabase|Promise<IDBDatabase>} idbDatabase
   */
  constructor(idbDatabase, txOptions = { durability: 'default' }) {
    this.#dbReady = Promise.resolve(idbDatabase).then(db => this.#db = db);
    this.#txOptions = txOptions;
  }

  async close() {
    const db = this.#db ?? await this.#dbReady;
    await this.#runChain;
    await this.sync();
    db.close();
  }
  
  /**
   * Run a function with the provided object stores. The function
   * should be idempotent in case it is passed an expired transaction.
   * @param {IDBTransactionMode} mode
   * @param {(stores: Object.<string, ObjectStore>) => any} f 
   */
  async run(mode, f) {
    // Ensure that functions run sequentially.
    const result = this.#runChain.then(() => this.#run(mode, f));
    this.#runChain = result.catch(() => {});
    return result;
  }

  /**
   * @param {IDBTransactionMode} mode
   * @param {(stores: Object.<string, ObjectStore>) => any} f 
   * @returns 
   */
  async #run(mode, f) {
    const db = this.#db ?? await this.#dbReady;
    if (mode === 'readwrite' && this.#tx?.mode === 'readonly') {
      // Mode requires a new transaction.
      this.#tx = null;
    } else if (performance.now() - this.#txTimestamp > MAX_TRANSACTION_LIFETIME_MILLIS) {
      // Chrome times out transactions after 60 seconds so refresh preemptively.
      try {
        this.#tx?.commit();
      } catch (e) {
        // Explicit commit can fail but this can be ignored if it will
        // auto-commit anyway.
        if (e.name !== 'InvalidStateError') throw e;
      }

      // Skip to the next task to allow processing.
      await new Promise(resolve => setTimeout(resolve));
      this.#tx = null;
    }

    // Run the user function with a retry in case the transaction is invalid.
    for (let i = 0; i < 2; ++i) {
      if (!this.#tx) {
        // @ts-ignore
        this.#tx = db.transaction(db.objectStoreNames, mode, this.#txOptions);
        const timestamp = this.#txTimestamp = performance.now();

        // Chain the result of every transaction. If any transaction is
        // aborted then the next sync() call will throw.
        this.#putChain = this.#putChain.then(() => {
          return new Promise((resolve, reject) => {
            this.#tx.addEventListener('complete', event => {
              resolve();
              if (this.#tx === event.target) {
                this.#tx = null;
              }
              log(`transaction ${mapTxToId.get(event.target)} complete`);
            });
            this.#tx.addEventListener('abort', event => {
              console.warn('tx abort', (performance.now() - timestamp)/1000);
              // @ts-ignore
              const e = event.target.error;
              reject(e);
              if (this.#tx === event.target) {
                this.#tx = null;
              }
              log(`transaction ${mapTxToId.get(event.target)} aborted`, e);
            });
          });
        });

        log(`new transaction ${nextTxId} ${mode}`);
        mapTxToId.set(this.#tx, nextTxId++);
      }

      try {
        const stores = Object.fromEntries(Array.from(db.objectStoreNames, name => {
          return [name, new ObjectStore(this.#tx.objectStore(name))];
        }));
        return await f(stores);
      } catch (e) {
        this.#tx = null;
        if (i) throw e;
        // console.warn('retrying with new transaction');
      }
    }
  }

  async sync() {
    // Wait until all transactions since the previous sync have committed.
    // Throw if any transaction failed.
    await this.#runChain;
    await this.#putChain;
    this.#putChain = Promise.resolve();
  }
}

/**
 * Helper to convert IDBRequest to Promise.
 * @param {IDBRequest} request 
 * @returns {Promise}
 */
function wrapRequest(request) {
  return new Promise((resolve, reject) => {
    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
}

// IDBObjectStore wrapper passed to IDBContext run functions.
class ObjectStore {
  #objectStore;

  /**
   * @param {IDBObjectStore} objectStore 
   */
  constructor(objectStore) {
    this.#objectStore = objectStore;
  }

  /**
   * @param {IDBValidKey|IDBKeyRange} query 
   * @returns {Promise}
   */
  get(query) {
    log(`get ${this.#objectStore.name}`, query);
    const request = this.#objectStore.get(query);
    return wrapRequest(request);
  }

  /**
   * @param {IDBValidKey|IDBKeyRange} query 
   * @param {number} [count]
   * @returns {Promise}
   */
   getAll(query, count) {
    log(`getAll ${this.#objectStore.name}`, query, count);
    const request = this.#objectStore.getAll(query, count);
    return wrapRequest(request);
  }

  /**
   * @param {IDBValidKey|IDBKeyRange} query 
   * @returns {Promise<IDBValidKey>}
   */
  getKey(query) {
    log(`getKey ${this.#objectStore.name}`, query);
    const request = this.#objectStore.getKey(query);
    return wrapRequest(request);
  }

  /**
   * @param {IDBValidKey|IDBKeyRange} query 
   * @param {number} [count]
   * @returns {Promise}
   */
   getAllKeys(query, count) {
    log(`getAllKeys ${this.#objectStore.name}`, query, count);
    const request = this.#objectStore.getAllKeys(query, count);
    return wrapRequest(request);
  }

  /**
   * @param {any} value
   * @param {IDBValidKey} [key] 
   * @returns {Promise}
   */
   put(value, key) {
    log(`put ${this.#objectStore.name}`, value, key);
    const request = this.#objectStore.put(value, key);
    return wrapRequest(request);
  }

  /**
   * @param {IDBValidKey|IDBKeyRange} query 
   * @returns {Promise}
   */
   delete(query) {
    log(`delete ${this.#objectStore.name}`, query);
    const request = this.#objectStore.delete(query);
    return wrapRequest(request);
  }

  clear() {
    log(`clear ${this.#objectStore.name}`);
    const request = this.#objectStore.clear();
    return wrapRequest(request);
  }

  index(name) {
    return new Index(this.#objectStore.index(name));
  }
}

class Index {
  /** @type {IDBIndex} */ #index;

  /**
   * @param {IDBIndex} index 
   */
   constructor(index) {
    this.#index = index;
  }

  /**
   * @param {IDBValidKey|IDBKeyRange} query 
   * @param {number} [count]
   * @returns {Promise<IDBValidKey[]>}
   */
  getAllKeys(query, count) {
    log(`IDBIndex.getAllKeys ${this.#index.objectStore.name}<${this.#index.name}>`, query, count);
    const request = this.#index.getAllKeys(query, count);
    return wrapRequest(request);
  }
}

/***/ }),

/***/ "./node_modules/wa-sqlite/src/examples/WebLocks.js":
/*!*********************************************************!*\
  !*** ./node_modules/wa-sqlite/src/examples/WebLocks.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebLocksBase: () => (/* binding */ WebLocksBase),
/* harmony export */   WebLocksExclusive: () => (/* binding */ WebLocksExclusive),
/* harmony export */   WebLocksShared: () => (/* binding */ WebLocksShared)
/* harmony export */ });
/* harmony import */ var _VFS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VFS.js */ "./node_modules/wa-sqlite/src/VFS.js");
// Copyright 2022 Roy T. Hashimoto. All Rights Reserved.


const LOCK_TYPE_MASK =
  _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE |
  _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED |
  _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED |
  _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_PENDING |
  _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE;

class WebLocksBase {
  get state() { return this.#state; }
  #state = _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE;

  timeoutMillis = 0;

  /** @type {Map<string, (value: any) => void>} */ #releasers = new Map();
  /** @type {Promise<0|5|3850>} */ #pending = Promise.resolve(0);

  /**
   * @param {number} flags 
   * @returns {Promise<0|5|3850>} SQLITE_OK, SQLITE_BUSY, SQLITE_IOERR_LOCK
   */
  async lock(flags) {
    return this.#apply(this.#lock, flags);
  }

  /**
   * @param {number} flags 
   * @returns {Promise<0|5|3850>} SQLITE_OK, SQLITE_IOERR_LOCK
   */
  async unlock(flags) {
    return this.#apply(this.#unlock, flags);
  }

  /**
   * @returns {Promise<boolean>}
   */
  async isSomewhereReserved() {
    throw new Error('unimplemented');
  }

  /**
   * 
   * @param {(targetState: number) => void} method 
   * @param {number} flags 
   */
  async #apply(method, flags) {
    const targetState = flags & LOCK_TYPE_MASK;
    try {
      // Force locks and unlocks to run sequentially. This allows not
      // waiting for unlocks to complete.
      const call = () => method.call(this, targetState);
      await (this.#pending = this.#pending.then(call, call));
      this.#state = targetState;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    } catch (e) {
      if (e.name === 'AbortError') {
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
      }
      console.error(e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_LOCK;
    }
  }

  async #lock(targetState) {
    if (targetState === this.#state) return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    switch (this.#state) {
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE:
        switch (targetState) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
            return this._NONEtoSHARED();
          default:
            throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
        }

      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
        switch (targetState) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED:
            return this._SHAREDtoRESERVED();
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE:
            return this._SHAREDtoEXCLUSIVE();
          default:
            throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
        }
      
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED:
        switch (targetState) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE:
            return this._RESERVEDtoEXCLUSIVE();
          default:
            throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
        }

      default:
        throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
    }
  }

  async #unlock(targetState) {
    if (targetState === this.#state)  return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    switch (this.#state) {
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE:
        switch (targetState) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
            return this._EXCLUSIVEtoSHARED();
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE:
            return this._EXCLUSIVEtoNONE();
          default:
            throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
        }
      
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED:
        switch (targetState) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
            return this._RESERVEDtoSHARED();
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE:
            return this._RESERVEDtoNONE();
          default:
            throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
        }

      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
        switch (targetState) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE:
            return this._SHAREDtoNONE();
          default:
            throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
        }

      default:
        throw new Error(`unexpected transition ${this.#state} -> ${targetState}`);
    }
  }

  async _NONEtoSHARED() {
  }

  async _SHAREDtoEXCLUSIVE() {
    await this._SHAREDtoRESERVED();
    await this._RESERVEDtoEXCLUSIVE();
  }

  async _SHAREDtoRESERVED() {
  }

  async _RESERVEDtoEXCLUSIVE() {
  }

  async _EXCLUSIVEtoRESERVED() {
  }

  async _EXCLUSIVEtoSHARED() {
    await this._EXCLUSIVEtoRESERVED();
    await this._RESERVEDtoSHARED();
  }

  async _EXCLUSIVEtoNONE() {
    await this._EXCLUSIVEtoRESERVED();
    await this._RESERVEDtoSHARED();
    await this._SHAREDtoNONE();
  }

  async _RESERVEDtoSHARED() {
  }

  async _RESERVEDtoNONE() {
    await this._RESERVEDtoSHARED();
    await this._SHAREDtoNONE();
  }

  async _SHAREDtoNONE() {
  }

  /**
   * @param {string} lockName 
   * @param {LockOptions} options 
   * @returns {Promise<?Lock>}
   */
  _acquireWebLock(lockName, options) {
    return new Promise(async (resolve, reject) => {
      try {
        await navigator.locks.request(lockName, options, lock => {
          resolve(lock);
          if (lock) {
            return new Promise(release => this.#releasers.set(lockName, release));
          }
        });
      } catch(e) {
        reject(e);
      }
    });
  }

  /**
   * @param {string} lockName 
   */
  _releaseWebLock(lockName) {
    this.#releasers.get(lockName)?.();
    this.#releasers.delete(lockName);
  }

  /**
   * @param {string} lockName 
   */
  async _pollWebLock(lockName) {
    const query = await navigator.locks.query();
    return query.held.find(({name}) => name === lockName)?.mode;
  }

  /**
   * @returns {?AbortSignal}
   */
  _getTimeoutSignal() {
    if (this.timeoutMillis) {
      const abortController = new AbortController();
      setTimeout(() => abortController.abort(), this.timeoutMillis);
      return abortController.signal;
    }
    return undefined;
  }
}

class WebLocksExclusive extends WebLocksBase {
  /**
   * @param {string} name 
   */
  constructor(name) {
    super();
    this._lockName = name + '-outer';
    this._reservedName = name + '-reserved';
  }

  async isSomewhereReserved() {
    const mode = await this._pollWebLock(this._reservedName);
    return mode === 'exclusive';
  }

  async _NONEtoSHARED() {
    await this._acquireWebLock(this._lockName, {
      mode: 'exclusive',
      signal: this._getTimeoutSignal()
    });
  }

  async _SHAREDtoRESERVED() {
    await this._acquireWebLock(this._reservedName, {
      mode: 'exclusive',
      signal: this._getTimeoutSignal()
    });
  }

  async _RESERVEDtoSHARED() {
    this._releaseWebLock(this._reservedName);
  }

  async _SHAREDtoNONE() {
    this._releaseWebLock(this._lockName);
  }
}

class WebLocksShared extends WebLocksBase {
  maxRetryMillis = 1000;

  /**
   * @param {string} name 
   */
  constructor(name) {
    super();
    this._outerName = name + '-outer';
    this._innerName = name + '-inner';
  }

  async isSomewhereReserved() {
    const mode = await this._pollWebLock(this._outerName);
    return mode === 'exclusive';
  }

  async _NONEtoSHARED() {
    await this._acquireWebLock(this._outerName, {
      mode: 'shared',
      signal: this._getTimeoutSignal()
    });
    await this._acquireWebLock(this._innerName, {
      mode: 'shared',
      signal: this._getTimeoutSignal()
    });
    this._releaseWebLock(this._outerName);
  }

  async _SHAREDtoRESERVED() {
    let timeoutMillis = 1;
    while (true) {
      // Attempt to get the outer lock without blocking.
      const isLocked = await this._acquireWebLock(this._outerName, {
        mode: 'exclusive',
        ifAvailable: true
      });
      if (isLocked) break;

      if (await this.isSomewhereReserved()) {
        // Someone else has a reserved lock so retry cannot succeed.
        throw new DOMException('', 'AbortError');
      }

      await new Promise(resolve => setTimeout(resolve, timeoutMillis));
      timeoutMillis = Math.min(2 * timeoutMillis, this.maxRetryMillis);
    }
    this._releaseWebLock(this._innerName);
  }

  async _RESERVEDtoEXCLUSIVE() {
    await this._acquireWebLock(this._innerName, {
      mode: 'exclusive',
      signal: this._getTimeoutSignal()
    });
  }

  async _EXCLUSIVEtoRESERVED() {
    this._releaseWebLock(this._innerName);
  }

  async _RESERVEDtoSHARED() {
    await this._acquireWebLock(this._innerName, { mode: 'shared' });
    this._releaseWebLock(this._outerName);
  }

  async _SHAREDtoNONE() {
    this._releaseWebLock(this._innerName);
  }
}

/***/ }),

/***/ "./node_modules/wa-sqlite/src/sqlite-api.js":
/*!**************************************************!*\
  !*** ./node_modules/wa-sqlite/src/sqlite-api.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory),
/* harmony export */   SQLITE_ABORT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ABORT),
/* harmony export */   SQLITE_ACCESS_EXISTS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ACCESS_EXISTS),
/* harmony export */   SQLITE_ACCESS_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ACCESS_READ),
/* harmony export */   SQLITE_ACCESS_READWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ACCESS_READWRITE),
/* harmony export */   SQLITE_ALTER_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ALTER_TABLE),
/* harmony export */   SQLITE_ANALYZE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ANALYZE),
/* harmony export */   SQLITE_ATTACH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ATTACH),
/* harmony export */   SQLITE_AUTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_AUTH),
/* harmony export */   SQLITE_BLOB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BLOB),
/* harmony export */   SQLITE_BUSY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY),
/* harmony export */   SQLITE_CANTOPEN: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CANTOPEN),
/* harmony export */   SQLITE_CONSTRAINT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT),
/* harmony export */   SQLITE_CONSTRAINT_CHECK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_CHECK),
/* harmony export */   SQLITE_CONSTRAINT_COMMITHOOK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_COMMITHOOK),
/* harmony export */   SQLITE_CONSTRAINT_FOREIGNKEY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_FOREIGNKEY),
/* harmony export */   SQLITE_CONSTRAINT_FUNCTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_FUNCTION),
/* harmony export */   SQLITE_CONSTRAINT_NOTNULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_NOTNULL),
/* harmony export */   SQLITE_CONSTRAINT_PINNED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_PINNED),
/* harmony export */   SQLITE_CONSTRAINT_PRIMARYKEY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_PRIMARYKEY),
/* harmony export */   SQLITE_CONSTRAINT_ROWID: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_ROWID),
/* harmony export */   SQLITE_CONSTRAINT_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_TRIGGER),
/* harmony export */   SQLITE_CONSTRAINT_UNIQUE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_UNIQUE),
/* harmony export */   SQLITE_CONSTRAINT_VTAB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CONSTRAINT_VTAB),
/* harmony export */   SQLITE_COPY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_COPY),
/* harmony export */   SQLITE_CORRUPT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CORRUPT),
/* harmony export */   SQLITE_CREATE_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_INDEX),
/* harmony export */   SQLITE_CREATE_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TABLE),
/* harmony export */   SQLITE_CREATE_TEMP_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_INDEX),
/* harmony export */   SQLITE_CREATE_TEMP_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_TABLE),
/* harmony export */   SQLITE_CREATE_TEMP_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_TRIGGER),
/* harmony export */   SQLITE_CREATE_TEMP_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TEMP_VIEW),
/* harmony export */   SQLITE_CREATE_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_TRIGGER),
/* harmony export */   SQLITE_CREATE_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_VIEW),
/* harmony export */   SQLITE_CREATE_VTABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CREATE_VTABLE),
/* harmony export */   SQLITE_DELETE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DELETE),
/* harmony export */   SQLITE_DENY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DENY),
/* harmony export */   SQLITE_DETACH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DETACH),
/* harmony export */   SQLITE_DETERMINISTIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DETERMINISTIC),
/* harmony export */   SQLITE_DIRECTONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DIRECTONLY),
/* harmony export */   SQLITE_DONE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DONE),
/* harmony export */   SQLITE_DROP_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_INDEX),
/* harmony export */   SQLITE_DROP_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TABLE),
/* harmony export */   SQLITE_DROP_TEMP_INDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_INDEX),
/* harmony export */   SQLITE_DROP_TEMP_TABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_TABLE),
/* harmony export */   SQLITE_DROP_TEMP_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_TRIGGER),
/* harmony export */   SQLITE_DROP_TEMP_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TEMP_VIEW),
/* harmony export */   SQLITE_DROP_TRIGGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_TRIGGER),
/* harmony export */   SQLITE_DROP_VIEW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_VIEW),
/* harmony export */   SQLITE_DROP_VTABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DROP_VTABLE),
/* harmony export */   SQLITE_EMPTY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_EMPTY),
/* harmony export */   SQLITE_ERROR: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ERROR),
/* harmony export */   SQLITE_FCNTL_BEGIN_ATOMIC_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_BEGIN_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_BUSYHANDLER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_BUSYHANDLER),
/* harmony export */   SQLITE_FCNTL_CHUNK_SIZE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_CHUNK_SIZE),
/* harmony export */   SQLITE_FCNTL_CKPT_DONE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_CKPT_DONE),
/* harmony export */   SQLITE_FCNTL_CKPT_START: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_CKPT_START),
/* harmony export */   SQLITE_FCNTL_COMMIT_ATOMIC_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_COMMIT_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_COMMIT_PHASETWO: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_COMMIT_PHASETWO),
/* harmony export */   SQLITE_FCNTL_DATA_VERSION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_DATA_VERSION),
/* harmony export */   SQLITE_FCNTL_FILE_POINTER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_FILE_POINTER),
/* harmony export */   SQLITE_FCNTL_GET_LOCKPROXYFILE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_GET_LOCKPROXYFILE),
/* harmony export */   SQLITE_FCNTL_HAS_MOVED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_HAS_MOVED),
/* harmony export */   SQLITE_FCNTL_JOURNAL_POINTER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_JOURNAL_POINTER),
/* harmony export */   SQLITE_FCNTL_LAST_ERRNO: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_LAST_ERRNO),
/* harmony export */   SQLITE_FCNTL_LOCKSTATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_LOCKSTATE),
/* harmony export */   SQLITE_FCNTL_LOCK_TIMEOUT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_LOCK_TIMEOUT),
/* harmony export */   SQLITE_FCNTL_MMAP_SIZE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_MMAP_SIZE),
/* harmony export */   SQLITE_FCNTL_OVERWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_OVERWRITE),
/* harmony export */   SQLITE_FCNTL_PDB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_PDB),
/* harmony export */   SQLITE_FCNTL_PERSIST_WAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_PERSIST_WAL),
/* harmony export */   SQLITE_FCNTL_POWERSAFE_OVERWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_POWERSAFE_OVERWRITE),
/* harmony export */   SQLITE_FCNTL_PRAGMA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_PRAGMA),
/* harmony export */   SQLITE_FCNTL_RBU: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_RBU),
/* harmony export */   SQLITE_FCNTL_RESERVE_BYTES: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_RESERVE_BYTES),
/* harmony export */   SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_SET_LOCKPROXYFILE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SET_LOCKPROXYFILE),
/* harmony export */   SQLITE_FCNTL_SIZE_HINT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SIZE_HINT),
/* harmony export */   SQLITE_FCNTL_SIZE_LIMIT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SIZE_LIMIT),
/* harmony export */   SQLITE_FCNTL_SYNC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SYNC),
/* harmony export */   SQLITE_FCNTL_SYNC_OMITTED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_SYNC_OMITTED),
/* harmony export */   SQLITE_FCNTL_TEMPFILENAME: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_TEMPFILENAME),
/* harmony export */   SQLITE_FCNTL_TRACE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_TRACE),
/* harmony export */   SQLITE_FCNTL_VFSNAME: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_VFSNAME),
/* harmony export */   SQLITE_FCNTL_VFS_POINTER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_VFS_POINTER),
/* harmony export */   SQLITE_FCNTL_WAL_BLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WAL_BLOCK),
/* harmony export */   SQLITE_FCNTL_WIN32_AV_RETRY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WIN32_AV_RETRY),
/* harmony export */   SQLITE_FCNTL_WIN32_GET_HANDLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WIN32_GET_HANDLE),
/* harmony export */   SQLITE_FCNTL_WIN32_SET_HANDLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_WIN32_SET_HANDLE),
/* harmony export */   SQLITE_FCNTL_ZIPVFS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FCNTL_ZIPVFS),
/* harmony export */   SQLITE_FLOAT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FLOAT),
/* harmony export */   SQLITE_FORMAT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FORMAT),
/* harmony export */   SQLITE_FULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FULL),
/* harmony export */   SQLITE_FUNCTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FUNCTION),
/* harmony export */   SQLITE_IGNORE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IGNORE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_EQ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_EQ),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_FUNCTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_FUNCTION),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_GE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GLOB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_GLOB),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_GT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_IS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_IS),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNOT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_ISNOT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNOTNULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_ISNOTNULL),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_ISNULL),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_LE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LIKE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_LIKE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_LT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_MATCH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_MATCH),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_NE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_NE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_REGEXP: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_CONSTRAINT_REGEXP),
/* harmony export */   SQLITE_INDEX_SCAN_UNIQUE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INDEX_SCAN_UNIQUE),
/* harmony export */   SQLITE_INNOCUOUS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INNOCUOUS),
/* harmony export */   SQLITE_INSERT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INSERT),
/* harmony export */   SQLITE_INTEGER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTEGER),
/* harmony export */   SQLITE_INTERNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTERNAL),
/* harmony export */   SQLITE_INTERRUPT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTERRUPT),
/* harmony export */   SQLITE_IOCAP_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC),
/* harmony export */   SQLITE_IOCAP_ATOMIC16K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC16K),
/* harmony export */   SQLITE_IOCAP_ATOMIC1K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC1K),
/* harmony export */   SQLITE_IOCAP_ATOMIC2K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC2K),
/* harmony export */   SQLITE_IOCAP_ATOMIC32K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC32K),
/* harmony export */   SQLITE_IOCAP_ATOMIC4K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC4K),
/* harmony export */   SQLITE_IOCAP_ATOMIC512: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC512),
/* harmony export */   SQLITE_IOCAP_ATOMIC64K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC64K),
/* harmony export */   SQLITE_IOCAP_ATOMIC8K: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_ATOMIC8K),
/* harmony export */   SQLITE_IOCAP_BATCH_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_BATCH_ATOMIC),
/* harmony export */   SQLITE_IOCAP_IMMUTABLE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_IMMUTABLE),
/* harmony export */   SQLITE_IOCAP_POWERSAFE_OVERWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_POWERSAFE_OVERWRITE),
/* harmony export */   SQLITE_IOCAP_SAFE_APPEND: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_SAFE_APPEND),
/* harmony export */   SQLITE_IOCAP_SEQUENTIAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_SEQUENTIAL),
/* harmony export */   SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN),
/* harmony export */   SQLITE_IOERR: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR),
/* harmony export */   SQLITE_IOERR_ACCESS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_ACCESS),
/* harmony export */   SQLITE_IOERR_BEGIN_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_BEGIN_ATOMIC),
/* harmony export */   SQLITE_IOERR_CHECKRESERVEDLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_CHECKRESERVEDLOCK),
/* harmony export */   SQLITE_IOERR_CLOSE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_CLOSE),
/* harmony export */   SQLITE_IOERR_COMMIT_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_COMMIT_ATOMIC),
/* harmony export */   SQLITE_IOERR_DATA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DATA),
/* harmony export */   SQLITE_IOERR_DELETE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DELETE),
/* harmony export */   SQLITE_IOERR_DELETE_NOENT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DELETE_NOENT),
/* harmony export */   SQLITE_IOERR_DIR_FSYNC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_DIR_FSYNC),
/* harmony export */   SQLITE_IOERR_FSTAT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_FSTAT),
/* harmony export */   SQLITE_IOERR_FSYNC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_FSYNC),
/* harmony export */   SQLITE_IOERR_GETTEMPPATH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_GETTEMPPATH),
/* harmony export */   SQLITE_IOERR_LOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_LOCK),
/* harmony export */   SQLITE_IOERR_NOMEM: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_NOMEM),
/* harmony export */   SQLITE_IOERR_RDLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_RDLOCK),
/* harmony export */   SQLITE_IOERR_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_READ),
/* harmony export */   SQLITE_IOERR_ROLLBACK_ATOMIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_ROLLBACK_ATOMIC),
/* harmony export */   SQLITE_IOERR_SEEK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_SEEK),
/* harmony export */   SQLITE_IOERR_SHORT_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_SHORT_READ),
/* harmony export */   SQLITE_IOERR_TRUNCATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_TRUNCATE),
/* harmony export */   SQLITE_IOERR_UNLOCK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_UNLOCK),
/* harmony export */   SQLITE_IOERR_VNODE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_VNODE),
/* harmony export */   SQLITE_IOERR_WRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_WRITE),
/* harmony export */   SQLITE_LIMIT_ATTACHED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_ATTACHED),
/* harmony export */   SQLITE_LIMIT_COLUMN: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_COLUMN),
/* harmony export */   SQLITE_LIMIT_COMPOUND_SELECT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_COMPOUND_SELECT),
/* harmony export */   SQLITE_LIMIT_EXPR_DEPTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_EXPR_DEPTH),
/* harmony export */   SQLITE_LIMIT_FUNCTION_ARG: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_FUNCTION_ARG),
/* harmony export */   SQLITE_LIMIT_LENGTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_LENGTH),
/* harmony export */   SQLITE_LIMIT_LIKE_PATTERN_LENGTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_LIKE_PATTERN_LENGTH),
/* harmony export */   SQLITE_LIMIT_SQL_LENGTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_SQL_LENGTH),
/* harmony export */   SQLITE_LIMIT_TRIGGER_DEPTH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_TRIGGER_DEPTH),
/* harmony export */   SQLITE_LIMIT_VARIABLE_NUMBER: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_VARIABLE_NUMBER),
/* harmony export */   SQLITE_LIMIT_VDBE_OP: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_VDBE_OP),
/* harmony export */   SQLITE_LIMIT_WORKER_THREADS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LIMIT_WORKER_THREADS),
/* harmony export */   SQLITE_LOCKED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCKED),
/* harmony export */   SQLITE_LOCK_EXCLUSIVE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE),
/* harmony export */   SQLITE_LOCK_NONE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE),
/* harmony export */   SQLITE_LOCK_PENDING: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_PENDING),
/* harmony export */   SQLITE_LOCK_RESERVED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED),
/* harmony export */   SQLITE_LOCK_SHARED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED),
/* harmony export */   SQLITE_MISMATCH: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISMATCH),
/* harmony export */   SQLITE_MISUSE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE),
/* harmony export */   SQLITE_NOLFS: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOLFS),
/* harmony export */   SQLITE_NOMEM: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOMEM),
/* harmony export */   SQLITE_NOTADB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTADB),
/* harmony export */   SQLITE_NOTFOUND: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND),
/* harmony export */   SQLITE_NOTICE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTICE),
/* harmony export */   SQLITE_NULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NULL),
/* harmony export */   SQLITE_OK: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK),
/* harmony export */   SQLITE_OPEN_AUTOPROXY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_AUTOPROXY),
/* harmony export */   SQLITE_OPEN_CREATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_CREATE),
/* harmony export */   SQLITE_OPEN_DELETEONCLOSE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_DELETEONCLOSE),
/* harmony export */   SQLITE_OPEN_EXCLUSIVE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_EXCLUSIVE),
/* harmony export */   SQLITE_OPEN_FULLMUTEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_FULLMUTEX),
/* harmony export */   SQLITE_OPEN_MAIN_DB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_DB),
/* harmony export */   SQLITE_OPEN_MAIN_JOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_JOURNAL),
/* harmony export */   SQLITE_OPEN_MEMORY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MEMORY),
/* harmony export */   SQLITE_OPEN_NOFOLLOW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_NOFOLLOW),
/* harmony export */   SQLITE_OPEN_NOMUTEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_NOMUTEX),
/* harmony export */   SQLITE_OPEN_PRIVATECACHE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_PRIVATECACHE),
/* harmony export */   SQLITE_OPEN_READONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READONLY),
/* harmony export */   SQLITE_OPEN_READWRITE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READWRITE),
/* harmony export */   SQLITE_OPEN_SHAREDCACHE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SHAREDCACHE),
/* harmony export */   SQLITE_OPEN_SUBJOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUBJOURNAL),
/* harmony export */   SQLITE_OPEN_SUPER_JOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUPER_JOURNAL),
/* harmony export */   SQLITE_OPEN_TEMP_DB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_DB),
/* harmony export */   SQLITE_OPEN_TEMP_JOURNAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_JOURNAL),
/* harmony export */   SQLITE_OPEN_TRANSIENT_DB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TRANSIENT_DB),
/* harmony export */   SQLITE_OPEN_URI: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_URI),
/* harmony export */   SQLITE_OPEN_WAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_WAL),
/* harmony export */   SQLITE_PERM: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PERM),
/* harmony export */   SQLITE_PRAGMA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PRAGMA),
/* harmony export */   SQLITE_PROTOCOL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PROTOCOL),
/* harmony export */   SQLITE_RANGE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE),
/* harmony export */   SQLITE_READ: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_READ),
/* harmony export */   SQLITE_READONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_READONLY),
/* harmony export */   SQLITE_RECURSIVE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RECURSIVE),
/* harmony export */   SQLITE_REINDEX: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_REINDEX),
/* harmony export */   SQLITE_ROW: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW),
/* harmony export */   SQLITE_SAVEPOINT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SAVEPOINT),
/* harmony export */   SQLITE_SCHEMA: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SCHEMA),
/* harmony export */   SQLITE_SELECT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SELECT),
/* harmony export */   SQLITE_STATIC: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_STATIC),
/* harmony export */   SQLITE_SUBTYPE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SUBTYPE),
/* harmony export */   SQLITE_SYNC_DATAONLY: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SYNC_DATAONLY),
/* harmony export */   SQLITE_SYNC_FULL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SYNC_FULL),
/* harmony export */   SQLITE_SYNC_NORMAL: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_SYNC_NORMAL),
/* harmony export */   SQLITE_TEXT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TEXT),
/* harmony export */   SQLITE_TOOBIG: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TOOBIG),
/* harmony export */   SQLITE_TRANSACTION: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TRANSACTION),
/* harmony export */   SQLITE_TRANSIENT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TRANSIENT),
/* harmony export */   SQLITE_UPDATE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UPDATE),
/* harmony export */   SQLITE_UTF16: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF16),
/* harmony export */   SQLITE_UTF16BE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF16BE),
/* harmony export */   SQLITE_UTF16LE: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF16LE),
/* harmony export */   SQLITE_UTF8: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_UTF8),
/* harmony export */   SQLITE_WARNING: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_WARNING),
/* harmony export */   SQLiteError: () => (/* binding */ SQLiteError)
/* harmony export */ });
/* harmony import */ var _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sqlite-constants.js */ "./node_modules/wa-sqlite/src/sqlite-constants.js");
// Copyright 2021 Roy T. Hashimoto. All Rights Reserved.




const MAX_INT64 = 0x7fffffffffffffffn;
const MIN_INT64 = -0x8000000000000000n;

class SQLiteError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const async = true;

/**
 * Builds a Javascript API from the Emscripten module. This API is still
 * low-level and closely corresponds to the C API exported by the module,
 * but differs in some specifics like throwing exceptions on errors.
 * @param {*} Module SQLite Emscripten module
 * @returns {SQLiteAPI}
 */
function Factory(Module) {
  /** @type {SQLiteAPI} */ const sqlite3 = {};

  const sqliteFreeAddress = Module._getSqliteFree();

  // Allocate some space for 32-bit returned values.
  const tmp = Module._malloc(8);
  const tmpPtr = [tmp, tmp + 4];

  // Convert a JS string to a C string. sqlite3_malloc is used to allocate
  // memory (use sqlite3_free to deallocate).
  function createUTF8(s) {
    if (typeof s !== 'string') return 0;
    const n = Module.lengthBytesUTF8(s);
    const zts = Module._sqlite3_malloc(n + 1);
    Module.stringToUTF8(s, zts, n + 1);
    return zts;
  }

  /**
   * Concatenate 32-bit numbers into a 64-bit (signed) BigInt.
   * @param {number} lo32
   * @param {number} hi32
   * @returns {bigint}
   */
  function cvt32x2ToBigInt(lo32, hi32) {
    return (BigInt(hi32) << 32n) | (BigInt(lo32) & 0xffffffffn);
  }

  /**
   * Concatenate 32-bit numbers and return as number or BigInt, depending
   * on the value.
   * @param {number} lo32 
   * @param {number} hi32 
   * @returns {number|bigint}
   */
  const cvt32x2AsSafe = (function () {
    const hiMax = BigInt(Number.MAX_SAFE_INTEGER) >> 32n;
    const hiMin = BigInt(Number.MIN_SAFE_INTEGER) >> 32n;

    return function (lo32, hi32) {
      if (hi32 > hiMax || hi32 < hiMin) {
        // Can't be expressed as a Number so use BigInt.
        return cvt32x2ToBigInt(lo32, hi32);
      } else {
        // Combine the upper and lower 32-bit numbers. The complication is
        // that lo32 is a signed integer which makes manipulating its bits
        // a little tricky - the sign bit gets handled separately.
        return (hi32 * 0x100000000) + (lo32 & 0x7fffffff) - (lo32 & 0x80000000);
      }
    }
  })();

  const databases = new Set();
  function verifyDatabase(db) {
    if (!databases.has(db)) {
      throw new SQLiteError('not a database', _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE);
    }
  }

  const mapStmtToDB = new Map();
  function verifyStatement(stmt) {
    if (!mapStmtToDB.has(stmt)) {
      throw new SQLiteError('not a statement', _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE);
    }
  }

  sqlite3.bind_collection = function (stmt, bindings) {
    verifyStatement(stmt);
    const isArray = Array.isArray(bindings);
    const nBindings = sqlite3.bind_parameter_count(stmt);
    for (let i = 1; i <= nBindings; ++i) {
      const key = isArray ? i - 1 : sqlite3.bind_parameter_name(stmt, i);
      const value = bindings[key];
      if (value !== undefined) {
        sqlite3.bind(stmt, i, value);
      }
    }
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  };

  sqlite3.bind = function (stmt, i, value) {
    verifyStatement(stmt);
    switch (typeof value) {
      case 'number':
        if (value === (value | 0)) {
          return sqlite3.bind_int(stmt, i, value);
        } else {
          return sqlite3.bind_double(stmt, i, value);
        }
      case 'string':
        return sqlite3.bind_text(stmt, i, value);
      default:
        if (value instanceof Uint8Array || Array.isArray(value)) {
          return sqlite3.bind_blob(stmt, i, value);
        } else if (value === null) {
          return sqlite3.bind_null(stmt, i);
        } else if (typeof value === 'bigint') {
          return sqlite3.bind_int64(stmt, i, value);
        } else if (value === undefined) {
          // Existing binding (or NULL) will be used.
          return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTICE;
        } else {
          console.warn('unknown binding converted to null', value);
          return sqlite3.bind_null(stmt, i);
        }
    }
  };

  sqlite3.bind_blob = (function () {
    const fname = 'sqlite3_bind_blob';
    const f = Module.cwrap(fname, ...decl('nnnnn:n'));
    return function (stmt, i, value) {
      verifyStatement(stmt);
      // @ts-ignore
      const byteLength = value.byteLength ?? value.length;
      const ptr = Module._sqlite3_malloc(byteLength);
      Module.HEAPU8.subarray(ptr).set(value);
      const result = f(stmt, i, ptr, byteLength, sqliteFreeAddress);
      // trace(fname, result);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_parameter_count = (function () {
    const fname = 'sqlite3_bind_parameter_count';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.bind_double = (function () {
    const fname = 'sqlite3_bind_double';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function (stmt, i, value) {
      verifyStatement(stmt);
      const result = f(stmt, i, value);
      // trace(fname, result);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_int = (function () {
    const fname = 'sqlite3_bind_int';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function (stmt, i, value) {
      verifyStatement(stmt);
      if (value > 0x7fffffff || value < -0x80000000) return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE;

      const result = f(stmt, i, value);
      // trace(fname, result);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_int64 = (function () {
    const fname = 'sqlite3_bind_int64';
    const f = Module.cwrap(fname, ...decl('nnnn:n'));
    return function (stmt, i, value) {
      verifyStatement(stmt);
      if (value > MAX_INT64 || value < MIN_INT64) return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE;

      const lo32 = value & 0xffffffffn;
      const hi32 = value >> 32n;
      const result = f(stmt, i, Number(lo32), Number(hi32));
      // trace(fname, result);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_null = (function () {
    const fname = 'sqlite3_bind_null';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, i) {
      verifyStatement(stmt);
      const result = f(stmt, i);
      // trace(fname, result);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_parameter_name = (function () {
    const fname = 'sqlite3_bind_parameter_name';
    const f = Module.cwrap(fname, ...decl('n:s'));
    return function (stmt, i) {
      verifyStatement(stmt);
      const result = f(stmt, i);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.bind_text = (function () {
    const fname = 'sqlite3_bind_text';
    const f = Module.cwrap(fname, ...decl('nnnnn:n'));
    return function (stmt, i, value) {
      verifyStatement(stmt);
      const ptr = createUTF8(value);
      const result = f(stmt, i, ptr, -1, sqliteFreeAddress);
      // trace(fname, result);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.changes = (function () {
    const fname = 'sqlite3_changes';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (db) {
      verifyDatabase(db);
      const result = f(db);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.close = (function () {
    const fname = 'sqlite3_close';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function (db) {
      verifyDatabase(db);
      const result = await f(db);
      databases.delete(db);
      return check(fname, result, db);
    };
  })();

  sqlite3.column = function (stmt, iCol) {
    verifyStatement(stmt);
    const type = sqlite3.column_type(stmt, iCol);
    switch (type) {
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BLOB:
        return sqlite3.column_blob(stmt, iCol);
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FLOAT:
        return sqlite3.column_double(stmt, iCol);
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTEGER:
        const lo32 = sqlite3.column_int(stmt, iCol);
        const hi32 = Module.getTempRet0();
        return cvt32x2AsSafe(lo32, hi32);
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NULL:
        return null;
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TEXT:
        return sqlite3.column_text(stmt, iCol);
      default:
        throw new SQLiteError('unknown type', type);
    }
  };

  sqlite3.column_blob = (function () {
    const fname = 'sqlite3_column_blob';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const nBytes = sqlite3.column_bytes(stmt, iCol);
      const address = f(stmt, iCol);
      const result = Module.HEAPU8.subarray(address, address + nBytes);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_bytes = (function () {
    const fname = 'sqlite3_column_bytes';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_count = (function () {
    const fname = 'sqlite3_column_count';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_double = (function () {
    const fname = 'sqlite3_column_double';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_int = (function () {
    // Retrieve int64 but use only the lower 32 bits. The upper 32-bits are
    // accessible with Module.getTempRet0().
    const fname = 'sqlite3_column_int64';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_int64 = (function () {
    const fname = 'sqlite3_column_int64';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const lo32 = f(stmt, iCol);
      const hi32 = Module.getTempRet0();
      const result = cvt32x2ToBigInt(lo32, hi32);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_name = (function () {
    const fname = 'sqlite3_column_name';
    const f = Module.cwrap(fname, ...decl('nn:s'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_names = function (stmt) {
    const columns = [];
    const nColumns = sqlite3.column_count(stmt);
    for (let i = 0; i < nColumns; ++i) {
      columns.push(sqlite3.column_name(stmt, i));
    }
    return columns;
  };

  sqlite3.column_text = (function () {
    const fname = 'sqlite3_column_text';
    const f = Module.cwrap(fname, ...decl('nn:s'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.column_type = (function () {
    const fname = 'sqlite3_column_type';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.create_function = function (db, zFunctionName, nArg, eTextRep, pApp, xFunc, xStep, xFinal) {
    verifyDatabase(db);
    if (xFunc && !xStep && !xFinal) {
      const result = Module.createFunction(db, zFunctionName, nArg, eTextRep, pApp, xFunc);
      return check('sqlite3_create_function', result, db);
    }

    if (!xFunc && xStep && xFinal) {
      const result = Module.createAggregate(db, zFunctionName, nArg, eTextRep, pApp, xStep, xFinal);
      return check('sqlite3_create_function', result, db);
    }

    throw new SQLiteError('invalid function combination', _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE);
  };

  sqlite3.create_module = function (db, zName, module, appData) {
    verifyDatabase(db);
    const result = Module.createModule(db, zName, module, appData);
    return check('sqlite3_create_module', result, db);
  };

  sqlite3.data_count = (function () {
    const fname = 'sqlite3_data_count';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.declare_vtab = (function () {
    const fname = 'sqlite3_declare_vtab';
    const f = Module.cwrap(fname, ...decl('ns:n'));
    return function (pVTab, zSQL) {
      const result = f(pVTab, zSQL);
      return check('sqlite3_declare_vtab', result);
    }
  })();

  sqlite3.exec = async function (db, sql, callback) {
    for await (const stmt of sqlite3.statements(db, sql)) {
      let columns;
      while (await sqlite3.step(stmt) === _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {
        if (callback) {
          columns = columns ?? sqlite3.column_names(stmt);
          const row = sqlite3.row(stmt);
          await callback(row, columns);
        }
      }
    }
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  };

  sqlite3.run = async function (db, sql, params) {
    for await (const stmt of sqlite3.statements(db, sql)) {
      if (params) {
        sqlite3.bind_collection(stmt, params)
      }
      await sqlite3.step(stmt)
    }
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  };

  sqlite3.execWithParams = async function (db, sql, params) {
    let columns = [];
    const rows = []
    for await (const stmt of sqlite3.statements(db, sql)) {
      if (params) {
        sqlite3.bind_collection(stmt, params)
      }
      while (await sqlite3.step(stmt) === _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {
        columns = columns.length === 0 ? sqlite3.column_names(stmt) : columns;
        const row = sqlite3.row(stmt);
        rows.push(row)
        // await callback(row, columns);
      }
    }
    return {
      rows: rows,
      columns: columns
    }
  };

  sqlite3.executeBatch = async function (db, sqlQueries, params) {
    try {
      await sqlite3.run(db, `BEGIN EXCLUSIVE TRANSACTION`, null)
      for (let i = 0; i < sqlQueries.length; i++) {
        const bindParams = params ? params[i] : null;
        let stmt;
        const str = sqlite3.str_new(db, sqlQueries[i]);
        try {
          const sqlPointer = sqlite3.str_value(str)
          stmt = await sqlite3.prepare_v2(db, sqlPointer)
          if (bindParams) {
            sqlite3.bind_collection(stmt.stmt, bindParams)
          }
          await sqlite3.step(stmt.stmt)
        } finally {
          if (stmt?.stmt) {
            sqlite3.finalize(stmt.stmt);
          }
          sqlite3.str_finish(str);
        }
      }
      await sqlite3.run(db, `COMMIT`, null)
      return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
    } catch (error) {
      await sqlite3.run(db, `ROLLBACK`, null)
    }
  };

  sqlite3.finalize = (function () {
    const fname = 'sqlite3_finalize';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function (stmt) {
      if (!mapStmtToDB.has(stmt)) {
        return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE;
      }
      const result = await f(stmt);

      const db = mapStmtToDB.get(stmt);
      mapStmtToDB.delete(stmt)

      // Don't throw on error here. Typically the error has already been
      // thrown and finalize() is part of the cleanup.
      return result;
    };
  })();

  sqlite3.get_autocommit = (function () {
    const fname = 'sqlite3_get_autocommit';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (db) {
      const result = f(db);
      return result;
    };
  })();

  sqlite3.libversion = (function () {
    const fname = 'sqlite3_libversion';
    const f = Module.cwrap(fname, ...decl(':s'));
    return function () {
      const result = f();
      return result;
    };
  })();

  sqlite3.libversion_number = (function () {
    const fname = 'sqlite3_libversion_number';
    const f = Module.cwrap(fname, ...decl(':n'));
    return function () {
      const result = f();
      return result;
    };
  })();

  sqlite3.limit = (function () {
    const fname = 'sqlite3_limit';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function (db, id, newVal) {
      const result = f(db, id, newVal);
      return result;
    };
  })();

  sqlite3.open_v2 = (function () {
    const fname = 'sqlite3_open_v2';
    const f = Module.cwrap(fname, ...decl('snnn:n'), { async });
    return async function (zFilename, flags, zVfs) {
      flags = flags || _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_CREATE | _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READWRITE;
      zVfs = createUTF8(zVfs);
      const result = await f(zFilename, tmpPtr[0], flags, zVfs);

      const db = Module.getValue(tmpPtr[0], '*');
      databases.add(db);
      Module._sqlite3_free(zVfs);

      Module.ccall('RegisterExtensionFunctions', 'void', ['number'], [db]);
      check(fname, result);
      return db;
    };
  })();

  sqlite3.prepare_v2 = (function () {
    const fname = 'sqlite3_prepare_v2';
    const f = Module.cwrap(fname, ...decl('nnnnn:n'), { async });
    return async function (db, sql) {
      const result = await f(db, sql, -1, tmpPtr[0], tmpPtr[1]);
      check(fname, result, db);

      const stmt = Module.getValue(tmpPtr[0], '*');
      if (stmt) {
        mapStmtToDB.set(stmt, db);
        return { stmt, sql: Module.getValue(tmpPtr[1], '*') };
      }
      return null;
    };
  })();

  sqlite3.progress_handler = function (db, nProgressOps, handler, userData) {
    verifyDatabase(db);
    Module.progressHandler(db, nProgressOps, handler, userData);
  };;

  sqlite3.reset = (function () {
    const fname = 'sqlite3_reset';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function (stmt) {
      verifyStatement(stmt);
      const result = await f(stmt);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.result = function (context, value) {
    switch (typeof value) {
      case 'number':
        if (value === (value | 0)) {
          sqlite3.result_int(context, value);
        } else {
          sqlite3.result_double(context, value);
        }
        break;
      case 'string':
        sqlite3.result_text(context, value);
        break;
      default:
        if (value instanceof Uint8Array || Array.isArray(value)) {
          sqlite3.result_blob(context, value);
        } else if (value === null) {
          sqlite3.result_null(context);
        } else if (typeof value === 'bigint') {
          return sqlite3.result_int64(context, value);
        } else {
          console.warn('unknown result converted to null', value);
          sqlite3.result_null(context);
        }
        break;
    }

  };

  sqlite3.result_blob = (function () {
    const fname = 'sqlite3_result_blob';
    const f = Module.cwrap(fname, ...decl('nnnn:n'));
    return function (context, value) {
      // @ts-ignore
      const byteLength = value.byteLength ?? value.length;
      const ptr = Module._sqlite3_malloc(byteLength);
      Module.HEAPU8.subarray(ptr).set(value);
      f(context, ptr, byteLength, sqliteFreeAddress); // void return
    };
  })();

  sqlite3.result_double = (function () {
    const fname = 'sqlite3_result_double';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (context, value) {
      f(context, value); // void return
    };
  })();

  sqlite3.result_int = (function () {
    const fname = 'sqlite3_result_int';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function (context, value) {
      f(context, value); // void return
    };
  })();

  sqlite3.result_int64 = (function () {
    const fname = 'sqlite3_result_int64';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function (context, value) {
      if (value > MAX_INT64 || value < MIN_INT64) return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE;

      const lo32 = value & 0xffffffffn;
      const hi32 = value >> 32n;
      f(context, Number(lo32), Number(hi32)); // void return
    };
  })();

  sqlite3.result_null = (function () {
    const fname = 'sqlite3_result_null';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (context) {
      f(context); // void return
    };
  })();

  sqlite3.result_text = (function () {
    const fname = 'sqlite3_result_text';
    const f = Module.cwrap(fname, ...decl('nnnn:n'));
    return function (context, value) {
      const ptr = createUTF8(value);
      f(context, ptr, -1, sqliteFreeAddress); // void return
    };
  })();

  sqlite3.row = function (stmt) {
    const row = [];
    const nColumns = sqlite3.data_count(stmt);
    for (let i = 0; i < nColumns; ++i) {
      const value = sqlite3.column(stmt, i);

      // Copy blob if aliasing volatile WebAssembly memory. This avoids an
      // unnecessary copy if users monkey patch column_blob to copy.
      // @ts-ignore
      row.push(value?.buffer === Module.HEAPU8.buffer ? value.slice() : value);
    }
    return row;
  };

  sqlite3.set_authorizer = function (db, authFunction, userData) {
    verifyDatabase(db);
    const result = Module.setAuthorizer(db, authFunction, userData);
    return check('sqlite3_set_authorizer', result, db);
  };;

  sqlite3.sql = (function () {
    const fname = 'sqlite3_sql';
    const f = Module.cwrap(fname, ...decl('n:s'));
    return function (stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.statements = function (db, sql) {
    return (async function* () {
      const str = sqlite3.str_new(db, sql);
      let prepared = { stmt: null, sql: sqlite3.str_value(str) };
      try {
        while (prepared = await sqlite3.prepare_v2(db, prepared.sql)) {
          // console.log(sqlite3.sql(prepared.stmt));
          yield prepared.stmt;
          sqlite3.finalize(prepared.stmt);
          prepared.stmt = null;
        }
      } finally {
        if (prepared?.stmt) {
          sqlite3.finalize(prepared.stmt);
        }
        sqlite3.str_finish(str);
      }
    })();
  };

  sqlite3.step = (function () {
    const fname = 'sqlite3_step';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function (stmt) {
      verifyStatement(stmt);
      const result = await f(stmt);
      return check(fname, result, mapStmtToDB.get(stmt), [_sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW, _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DONE]);
    };
  })();

  // Duplicate some of the SQLite dynamic string API but without
  // calling SQLite (except for memory allocation). We need some way
  // to transfer Javascript strings and might as well use an API
  // that mimics the SQLite API.
  let stringId = 0;
  const strings = new Map();

  sqlite3.str_new = function (db, s = '') {
    const sBytes = Module.lengthBytesUTF8(s);
    const str = stringId++ & 0xffffffff;
    const data = {
      offset: Module._sqlite3_malloc(sBytes + 1),
      bytes: sBytes
    };
    strings.set(str, data);
    Module.stringToUTF8(s, data.offset, data.bytes + 1);
    return str;
  };

  sqlite3.str_appendall = function (str, s) {
    if (!strings.has(str)) {
      throw new SQLiteError('not a string', _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE);
    }
    const data = strings.get(str);

    const sBytes = Module.lengthBytesUTF8(s);
    const newBytes = data.bytes + sBytes;
    const newOffset = Module._sqlite3_malloc(newBytes + 1);
    const newArray = Module.HEAPU8.subarray(newOffset, newOffset + newBytes + 1);
    newArray.set(Module.HEAPU8.subarray(data.offset, data.offset + data.bytes));
    Module.stringToUTF8(s, newOffset + data.bytes, sBytes + 1);

    Module._sqlite3_free(data.offset);
    data.offset = newOffset;
    data.bytes = newBytes;
    strings.set(str, data);
  };

  sqlite3.str_finish = function (str) {
    if (!strings.has(str)) {
      throw new SQLiteError('not a string', _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE);
    }
    const data = strings.get(str);
    strings.delete(str);
    Module._sqlite3_free(data.offset);
  };

  sqlite3.str_value = function (str) {
    if (!strings.has(str)) {
      throw new SQLiteError('not a string', _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_MISUSE);
    }
    return strings.get(str).offset;
  };

  sqlite3.update_hook = function (db, xUpdate) {
    verifyDatabase(db);
    Module.updateHook(db, xUpdate);
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  sqlite3.user_data = function (context) {
    return Module.getFunctionUserData(context);
  };

  sqlite3.value = function (pValue) {
    const type = sqlite3.value_type(pValue);
    switch (type) {
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BLOB:
        return sqlite3.value_blob(pValue);
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_FLOAT:
        return sqlite3.value_double(pValue);
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_INTEGER:
        const lo32 = sqlite3.value_int(pValue);
        const hi32 = Module.getTempRet0();
        return cvt32x2AsSafe(lo32, hi32);
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NULL:
        return null;
      case _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_TEXT:
        return sqlite3.value_text(pValue);
      default:
        throw new SQLiteError('unknown type', type);
    }
  };

  sqlite3.value_blob = (function () {
    const fname = 'sqlite3_value_blob';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (pValue) {
      const nBytes = sqlite3.value_bytes(pValue);
      const address = f(pValue);
      const result = Module.HEAPU8.subarray(address, address + nBytes);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.value_bytes = (function () {
    const fname = 'sqlite3_value_bytes';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (pValue) {
      const result = f(pValue);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.value_double = (function () {
    const fname = 'sqlite3_value_double';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (pValue) {
      const result = f(pValue);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.value_int = (function () {
    const fname = 'sqlite3_value_int64';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (pValue) {
      const result = f(pValue);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.value_int64 = (function () {
    const fname = 'sqlite3_value_int64';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (pValue) {
      const lo32 = f(pValue);
      const hi32 = Module.getTempRet0();
      const result = cvt32x2ToBigInt(lo32, hi32);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.value_text = (function () {
    const fname = 'sqlite3_value_text';
    const f = Module.cwrap(fname, ...decl('n:s'));
    return function (pValue) {
      const result = f(pValue);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.value_type = (function () {
    const fname = 'sqlite3_value_type';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function (pValue) {
      const result = f(pValue);
      // trace(fname, result);
      return result;
    };
  })();

  sqlite3.vfs_register = function (vfs, makeDefault) {
    const result = Module.registerVFS(vfs, makeDefault);
    return check('sqlite3_vfs_register', result);
  };

  function check(fname, result, db = null, allowed = [_sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK]) {
    // trace(fname, result);
    if (allowed.includes(result)) return result;
    const message = db ?
      Module.ccall('sqlite3_errmsg', 'string', ['number'], [db]) :
      fname;
    throw new SQLiteError(message, result);
  }

  return sqlite3;
}

function trace(...args) {
  // const date = new Date();
  // const t = date.getHours().toString().padStart(2, '0') + ':' +
  //           date.getMinutes().toString().padStart(2, '0') + ':' +
  //           date.getSeconds().toString().padStart(2, '0') + '.' +
  //           date.getMilliseconds().toString().padStart(3, '0');
  // console.debug(t, ...args);
}

// Helper function to use a more compact signature specification.
function decl(s) {
  const result = [];
  const m = s.match(/([ns@]*):([nsv@])/);
  switch (m[2]) {
    case 'n': result.push('number'); break;
    case 's': result.push('string'); break;
    case 'v': result.push(null); break;
  }

  const args = [];
  for (let c of m[1]) {
    switch (c) {
      case 'n': args.push('number'); break;
      case 's': args.push('string'); break;
    }
  }
  result.push(args);
  return result;
}


/***/ }),

/***/ "./node_modules/wa-sqlite/src/sqlite-constants.js":
/*!********************************************************!*\
  !*** ./node_modules/wa-sqlite/src/sqlite-constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLITE_ABORT: () => (/* binding */ SQLITE_ABORT),
/* harmony export */   SQLITE_ACCESS_EXISTS: () => (/* binding */ SQLITE_ACCESS_EXISTS),
/* harmony export */   SQLITE_ACCESS_READ: () => (/* binding */ SQLITE_ACCESS_READ),
/* harmony export */   SQLITE_ACCESS_READWRITE: () => (/* binding */ SQLITE_ACCESS_READWRITE),
/* harmony export */   SQLITE_ALTER_TABLE: () => (/* binding */ SQLITE_ALTER_TABLE),
/* harmony export */   SQLITE_ANALYZE: () => (/* binding */ SQLITE_ANALYZE),
/* harmony export */   SQLITE_ATTACH: () => (/* binding */ SQLITE_ATTACH),
/* harmony export */   SQLITE_AUTH: () => (/* binding */ SQLITE_AUTH),
/* harmony export */   SQLITE_BLOB: () => (/* binding */ SQLITE_BLOB),
/* harmony export */   SQLITE_BUSY: () => (/* binding */ SQLITE_BUSY),
/* harmony export */   SQLITE_CANTOPEN: () => (/* binding */ SQLITE_CANTOPEN),
/* harmony export */   SQLITE_CONSTRAINT: () => (/* binding */ SQLITE_CONSTRAINT),
/* harmony export */   SQLITE_CONSTRAINT_CHECK: () => (/* binding */ SQLITE_CONSTRAINT_CHECK),
/* harmony export */   SQLITE_CONSTRAINT_COMMITHOOK: () => (/* binding */ SQLITE_CONSTRAINT_COMMITHOOK),
/* harmony export */   SQLITE_CONSTRAINT_FOREIGNKEY: () => (/* binding */ SQLITE_CONSTRAINT_FOREIGNKEY),
/* harmony export */   SQLITE_CONSTRAINT_FUNCTION: () => (/* binding */ SQLITE_CONSTRAINT_FUNCTION),
/* harmony export */   SQLITE_CONSTRAINT_NOTNULL: () => (/* binding */ SQLITE_CONSTRAINT_NOTNULL),
/* harmony export */   SQLITE_CONSTRAINT_PINNED: () => (/* binding */ SQLITE_CONSTRAINT_PINNED),
/* harmony export */   SQLITE_CONSTRAINT_PRIMARYKEY: () => (/* binding */ SQLITE_CONSTRAINT_PRIMARYKEY),
/* harmony export */   SQLITE_CONSTRAINT_ROWID: () => (/* binding */ SQLITE_CONSTRAINT_ROWID),
/* harmony export */   SQLITE_CONSTRAINT_TRIGGER: () => (/* binding */ SQLITE_CONSTRAINT_TRIGGER),
/* harmony export */   SQLITE_CONSTRAINT_UNIQUE: () => (/* binding */ SQLITE_CONSTRAINT_UNIQUE),
/* harmony export */   SQLITE_CONSTRAINT_VTAB: () => (/* binding */ SQLITE_CONSTRAINT_VTAB),
/* harmony export */   SQLITE_COPY: () => (/* binding */ SQLITE_COPY),
/* harmony export */   SQLITE_CORRUPT: () => (/* binding */ SQLITE_CORRUPT),
/* harmony export */   SQLITE_CREATE_INDEX: () => (/* binding */ SQLITE_CREATE_INDEX),
/* harmony export */   SQLITE_CREATE_TABLE: () => (/* binding */ SQLITE_CREATE_TABLE),
/* harmony export */   SQLITE_CREATE_TEMP_INDEX: () => (/* binding */ SQLITE_CREATE_TEMP_INDEX),
/* harmony export */   SQLITE_CREATE_TEMP_TABLE: () => (/* binding */ SQLITE_CREATE_TEMP_TABLE),
/* harmony export */   SQLITE_CREATE_TEMP_TRIGGER: () => (/* binding */ SQLITE_CREATE_TEMP_TRIGGER),
/* harmony export */   SQLITE_CREATE_TEMP_VIEW: () => (/* binding */ SQLITE_CREATE_TEMP_VIEW),
/* harmony export */   SQLITE_CREATE_TRIGGER: () => (/* binding */ SQLITE_CREATE_TRIGGER),
/* harmony export */   SQLITE_CREATE_VIEW: () => (/* binding */ SQLITE_CREATE_VIEW),
/* harmony export */   SQLITE_CREATE_VTABLE: () => (/* binding */ SQLITE_CREATE_VTABLE),
/* harmony export */   SQLITE_DELETE: () => (/* binding */ SQLITE_DELETE),
/* harmony export */   SQLITE_DENY: () => (/* binding */ SQLITE_DENY),
/* harmony export */   SQLITE_DETACH: () => (/* binding */ SQLITE_DETACH),
/* harmony export */   SQLITE_DETERMINISTIC: () => (/* binding */ SQLITE_DETERMINISTIC),
/* harmony export */   SQLITE_DIRECTONLY: () => (/* binding */ SQLITE_DIRECTONLY),
/* harmony export */   SQLITE_DONE: () => (/* binding */ SQLITE_DONE),
/* harmony export */   SQLITE_DROP_INDEX: () => (/* binding */ SQLITE_DROP_INDEX),
/* harmony export */   SQLITE_DROP_TABLE: () => (/* binding */ SQLITE_DROP_TABLE),
/* harmony export */   SQLITE_DROP_TEMP_INDEX: () => (/* binding */ SQLITE_DROP_TEMP_INDEX),
/* harmony export */   SQLITE_DROP_TEMP_TABLE: () => (/* binding */ SQLITE_DROP_TEMP_TABLE),
/* harmony export */   SQLITE_DROP_TEMP_TRIGGER: () => (/* binding */ SQLITE_DROP_TEMP_TRIGGER),
/* harmony export */   SQLITE_DROP_TEMP_VIEW: () => (/* binding */ SQLITE_DROP_TEMP_VIEW),
/* harmony export */   SQLITE_DROP_TRIGGER: () => (/* binding */ SQLITE_DROP_TRIGGER),
/* harmony export */   SQLITE_DROP_VIEW: () => (/* binding */ SQLITE_DROP_VIEW),
/* harmony export */   SQLITE_DROP_VTABLE: () => (/* binding */ SQLITE_DROP_VTABLE),
/* harmony export */   SQLITE_EMPTY: () => (/* binding */ SQLITE_EMPTY),
/* harmony export */   SQLITE_ERROR: () => (/* binding */ SQLITE_ERROR),
/* harmony export */   SQLITE_FCNTL_BEGIN_ATOMIC_WRITE: () => (/* binding */ SQLITE_FCNTL_BEGIN_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_BUSYHANDLER: () => (/* binding */ SQLITE_FCNTL_BUSYHANDLER),
/* harmony export */   SQLITE_FCNTL_CHUNK_SIZE: () => (/* binding */ SQLITE_FCNTL_CHUNK_SIZE),
/* harmony export */   SQLITE_FCNTL_CKPT_DONE: () => (/* binding */ SQLITE_FCNTL_CKPT_DONE),
/* harmony export */   SQLITE_FCNTL_CKPT_START: () => (/* binding */ SQLITE_FCNTL_CKPT_START),
/* harmony export */   SQLITE_FCNTL_COMMIT_ATOMIC_WRITE: () => (/* binding */ SQLITE_FCNTL_COMMIT_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_COMMIT_PHASETWO: () => (/* binding */ SQLITE_FCNTL_COMMIT_PHASETWO),
/* harmony export */   SQLITE_FCNTL_DATA_VERSION: () => (/* binding */ SQLITE_FCNTL_DATA_VERSION),
/* harmony export */   SQLITE_FCNTL_FILE_POINTER: () => (/* binding */ SQLITE_FCNTL_FILE_POINTER),
/* harmony export */   SQLITE_FCNTL_GET_LOCKPROXYFILE: () => (/* binding */ SQLITE_FCNTL_GET_LOCKPROXYFILE),
/* harmony export */   SQLITE_FCNTL_HAS_MOVED: () => (/* binding */ SQLITE_FCNTL_HAS_MOVED),
/* harmony export */   SQLITE_FCNTL_JOURNAL_POINTER: () => (/* binding */ SQLITE_FCNTL_JOURNAL_POINTER),
/* harmony export */   SQLITE_FCNTL_LAST_ERRNO: () => (/* binding */ SQLITE_FCNTL_LAST_ERRNO),
/* harmony export */   SQLITE_FCNTL_LOCKSTATE: () => (/* binding */ SQLITE_FCNTL_LOCKSTATE),
/* harmony export */   SQLITE_FCNTL_LOCK_TIMEOUT: () => (/* binding */ SQLITE_FCNTL_LOCK_TIMEOUT),
/* harmony export */   SQLITE_FCNTL_MMAP_SIZE: () => (/* binding */ SQLITE_FCNTL_MMAP_SIZE),
/* harmony export */   SQLITE_FCNTL_OVERWRITE: () => (/* binding */ SQLITE_FCNTL_OVERWRITE),
/* harmony export */   SQLITE_FCNTL_PDB: () => (/* binding */ SQLITE_FCNTL_PDB),
/* harmony export */   SQLITE_FCNTL_PERSIST_WAL: () => (/* binding */ SQLITE_FCNTL_PERSIST_WAL),
/* harmony export */   SQLITE_FCNTL_POWERSAFE_OVERWRITE: () => (/* binding */ SQLITE_FCNTL_POWERSAFE_OVERWRITE),
/* harmony export */   SQLITE_FCNTL_PRAGMA: () => (/* binding */ SQLITE_FCNTL_PRAGMA),
/* harmony export */   SQLITE_FCNTL_RBU: () => (/* binding */ SQLITE_FCNTL_RBU),
/* harmony export */   SQLITE_FCNTL_RESERVE_BYTES: () => (/* binding */ SQLITE_FCNTL_RESERVE_BYTES),
/* harmony export */   SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE: () => (/* binding */ SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE),
/* harmony export */   SQLITE_FCNTL_SET_LOCKPROXYFILE: () => (/* binding */ SQLITE_FCNTL_SET_LOCKPROXYFILE),
/* harmony export */   SQLITE_FCNTL_SIZE_HINT: () => (/* binding */ SQLITE_FCNTL_SIZE_HINT),
/* harmony export */   SQLITE_FCNTL_SIZE_LIMIT: () => (/* binding */ SQLITE_FCNTL_SIZE_LIMIT),
/* harmony export */   SQLITE_FCNTL_SYNC: () => (/* binding */ SQLITE_FCNTL_SYNC),
/* harmony export */   SQLITE_FCNTL_SYNC_OMITTED: () => (/* binding */ SQLITE_FCNTL_SYNC_OMITTED),
/* harmony export */   SQLITE_FCNTL_TEMPFILENAME: () => (/* binding */ SQLITE_FCNTL_TEMPFILENAME),
/* harmony export */   SQLITE_FCNTL_TRACE: () => (/* binding */ SQLITE_FCNTL_TRACE),
/* harmony export */   SQLITE_FCNTL_VFSNAME: () => (/* binding */ SQLITE_FCNTL_VFSNAME),
/* harmony export */   SQLITE_FCNTL_VFS_POINTER: () => (/* binding */ SQLITE_FCNTL_VFS_POINTER),
/* harmony export */   SQLITE_FCNTL_WAL_BLOCK: () => (/* binding */ SQLITE_FCNTL_WAL_BLOCK),
/* harmony export */   SQLITE_FCNTL_WIN32_AV_RETRY: () => (/* binding */ SQLITE_FCNTL_WIN32_AV_RETRY),
/* harmony export */   SQLITE_FCNTL_WIN32_GET_HANDLE: () => (/* binding */ SQLITE_FCNTL_WIN32_GET_HANDLE),
/* harmony export */   SQLITE_FCNTL_WIN32_SET_HANDLE: () => (/* binding */ SQLITE_FCNTL_WIN32_SET_HANDLE),
/* harmony export */   SQLITE_FCNTL_ZIPVFS: () => (/* binding */ SQLITE_FCNTL_ZIPVFS),
/* harmony export */   SQLITE_FLOAT: () => (/* binding */ SQLITE_FLOAT),
/* harmony export */   SQLITE_FORMAT: () => (/* binding */ SQLITE_FORMAT),
/* harmony export */   SQLITE_FULL: () => (/* binding */ SQLITE_FULL),
/* harmony export */   SQLITE_FUNCTION: () => (/* binding */ SQLITE_FUNCTION),
/* harmony export */   SQLITE_IGNORE: () => (/* binding */ SQLITE_IGNORE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_EQ: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_EQ),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_FUNCTION: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_FUNCTION),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GE: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_GE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GLOB: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_GLOB),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_GT: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_GT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_IS: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_IS),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNOT: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_ISNOT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNOTNULL: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_ISNOTNULL),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_ISNULL: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_ISNULL),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LE: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_LE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LIKE: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_LIKE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_LT: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_LT),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_MATCH: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_MATCH),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_NE: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_NE),
/* harmony export */   SQLITE_INDEX_CONSTRAINT_REGEXP: () => (/* binding */ SQLITE_INDEX_CONSTRAINT_REGEXP),
/* harmony export */   SQLITE_INDEX_SCAN_UNIQUE: () => (/* binding */ SQLITE_INDEX_SCAN_UNIQUE),
/* harmony export */   SQLITE_INNOCUOUS: () => (/* binding */ SQLITE_INNOCUOUS),
/* harmony export */   SQLITE_INSERT: () => (/* binding */ SQLITE_INSERT),
/* harmony export */   SQLITE_INTEGER: () => (/* binding */ SQLITE_INTEGER),
/* harmony export */   SQLITE_INTERNAL: () => (/* binding */ SQLITE_INTERNAL),
/* harmony export */   SQLITE_INTERRUPT: () => (/* binding */ SQLITE_INTERRUPT),
/* harmony export */   SQLITE_IOCAP_ATOMIC: () => (/* binding */ SQLITE_IOCAP_ATOMIC),
/* harmony export */   SQLITE_IOCAP_ATOMIC16K: () => (/* binding */ SQLITE_IOCAP_ATOMIC16K),
/* harmony export */   SQLITE_IOCAP_ATOMIC1K: () => (/* binding */ SQLITE_IOCAP_ATOMIC1K),
/* harmony export */   SQLITE_IOCAP_ATOMIC2K: () => (/* binding */ SQLITE_IOCAP_ATOMIC2K),
/* harmony export */   SQLITE_IOCAP_ATOMIC32K: () => (/* binding */ SQLITE_IOCAP_ATOMIC32K),
/* harmony export */   SQLITE_IOCAP_ATOMIC4K: () => (/* binding */ SQLITE_IOCAP_ATOMIC4K),
/* harmony export */   SQLITE_IOCAP_ATOMIC512: () => (/* binding */ SQLITE_IOCAP_ATOMIC512),
/* harmony export */   SQLITE_IOCAP_ATOMIC64K: () => (/* binding */ SQLITE_IOCAP_ATOMIC64K),
/* harmony export */   SQLITE_IOCAP_ATOMIC8K: () => (/* binding */ SQLITE_IOCAP_ATOMIC8K),
/* harmony export */   SQLITE_IOCAP_BATCH_ATOMIC: () => (/* binding */ SQLITE_IOCAP_BATCH_ATOMIC),
/* harmony export */   SQLITE_IOCAP_IMMUTABLE: () => (/* binding */ SQLITE_IOCAP_IMMUTABLE),
/* harmony export */   SQLITE_IOCAP_POWERSAFE_OVERWRITE: () => (/* binding */ SQLITE_IOCAP_POWERSAFE_OVERWRITE),
/* harmony export */   SQLITE_IOCAP_SAFE_APPEND: () => (/* binding */ SQLITE_IOCAP_SAFE_APPEND),
/* harmony export */   SQLITE_IOCAP_SEQUENTIAL: () => (/* binding */ SQLITE_IOCAP_SEQUENTIAL),
/* harmony export */   SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN: () => (/* binding */ SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN),
/* harmony export */   SQLITE_IOERR: () => (/* binding */ SQLITE_IOERR),
/* harmony export */   SQLITE_IOERR_ACCESS: () => (/* binding */ SQLITE_IOERR_ACCESS),
/* harmony export */   SQLITE_IOERR_BEGIN_ATOMIC: () => (/* binding */ SQLITE_IOERR_BEGIN_ATOMIC),
/* harmony export */   SQLITE_IOERR_CHECKRESERVEDLOCK: () => (/* binding */ SQLITE_IOERR_CHECKRESERVEDLOCK),
/* harmony export */   SQLITE_IOERR_CLOSE: () => (/* binding */ SQLITE_IOERR_CLOSE),
/* harmony export */   SQLITE_IOERR_COMMIT_ATOMIC: () => (/* binding */ SQLITE_IOERR_COMMIT_ATOMIC),
/* harmony export */   SQLITE_IOERR_DATA: () => (/* binding */ SQLITE_IOERR_DATA),
/* harmony export */   SQLITE_IOERR_DELETE: () => (/* binding */ SQLITE_IOERR_DELETE),
/* harmony export */   SQLITE_IOERR_DELETE_NOENT: () => (/* binding */ SQLITE_IOERR_DELETE_NOENT),
/* harmony export */   SQLITE_IOERR_DIR_FSYNC: () => (/* binding */ SQLITE_IOERR_DIR_FSYNC),
/* harmony export */   SQLITE_IOERR_FSTAT: () => (/* binding */ SQLITE_IOERR_FSTAT),
/* harmony export */   SQLITE_IOERR_FSYNC: () => (/* binding */ SQLITE_IOERR_FSYNC),
/* harmony export */   SQLITE_IOERR_GETTEMPPATH: () => (/* binding */ SQLITE_IOERR_GETTEMPPATH),
/* harmony export */   SQLITE_IOERR_LOCK: () => (/* binding */ SQLITE_IOERR_LOCK),
/* harmony export */   SQLITE_IOERR_NOMEM: () => (/* binding */ SQLITE_IOERR_NOMEM),
/* harmony export */   SQLITE_IOERR_RDLOCK: () => (/* binding */ SQLITE_IOERR_RDLOCK),
/* harmony export */   SQLITE_IOERR_READ: () => (/* binding */ SQLITE_IOERR_READ),
/* harmony export */   SQLITE_IOERR_ROLLBACK_ATOMIC: () => (/* binding */ SQLITE_IOERR_ROLLBACK_ATOMIC),
/* harmony export */   SQLITE_IOERR_SEEK: () => (/* binding */ SQLITE_IOERR_SEEK),
/* harmony export */   SQLITE_IOERR_SHORT_READ: () => (/* binding */ SQLITE_IOERR_SHORT_READ),
/* harmony export */   SQLITE_IOERR_TRUNCATE: () => (/* binding */ SQLITE_IOERR_TRUNCATE),
/* harmony export */   SQLITE_IOERR_UNLOCK: () => (/* binding */ SQLITE_IOERR_UNLOCK),
/* harmony export */   SQLITE_IOERR_VNODE: () => (/* binding */ SQLITE_IOERR_VNODE),
/* harmony export */   SQLITE_IOERR_WRITE: () => (/* binding */ SQLITE_IOERR_WRITE),
/* harmony export */   SQLITE_LIMIT_ATTACHED: () => (/* binding */ SQLITE_LIMIT_ATTACHED),
/* harmony export */   SQLITE_LIMIT_COLUMN: () => (/* binding */ SQLITE_LIMIT_COLUMN),
/* harmony export */   SQLITE_LIMIT_COMPOUND_SELECT: () => (/* binding */ SQLITE_LIMIT_COMPOUND_SELECT),
/* harmony export */   SQLITE_LIMIT_EXPR_DEPTH: () => (/* binding */ SQLITE_LIMIT_EXPR_DEPTH),
/* harmony export */   SQLITE_LIMIT_FUNCTION_ARG: () => (/* binding */ SQLITE_LIMIT_FUNCTION_ARG),
/* harmony export */   SQLITE_LIMIT_LENGTH: () => (/* binding */ SQLITE_LIMIT_LENGTH),
/* harmony export */   SQLITE_LIMIT_LIKE_PATTERN_LENGTH: () => (/* binding */ SQLITE_LIMIT_LIKE_PATTERN_LENGTH),
/* harmony export */   SQLITE_LIMIT_SQL_LENGTH: () => (/* binding */ SQLITE_LIMIT_SQL_LENGTH),
/* harmony export */   SQLITE_LIMIT_TRIGGER_DEPTH: () => (/* binding */ SQLITE_LIMIT_TRIGGER_DEPTH),
/* harmony export */   SQLITE_LIMIT_VARIABLE_NUMBER: () => (/* binding */ SQLITE_LIMIT_VARIABLE_NUMBER),
/* harmony export */   SQLITE_LIMIT_VDBE_OP: () => (/* binding */ SQLITE_LIMIT_VDBE_OP),
/* harmony export */   SQLITE_LIMIT_WORKER_THREADS: () => (/* binding */ SQLITE_LIMIT_WORKER_THREADS),
/* harmony export */   SQLITE_LOCKED: () => (/* binding */ SQLITE_LOCKED),
/* harmony export */   SQLITE_LOCK_EXCLUSIVE: () => (/* binding */ SQLITE_LOCK_EXCLUSIVE),
/* harmony export */   SQLITE_LOCK_NONE: () => (/* binding */ SQLITE_LOCK_NONE),
/* harmony export */   SQLITE_LOCK_PENDING: () => (/* binding */ SQLITE_LOCK_PENDING),
/* harmony export */   SQLITE_LOCK_RESERVED: () => (/* binding */ SQLITE_LOCK_RESERVED),
/* harmony export */   SQLITE_LOCK_SHARED: () => (/* binding */ SQLITE_LOCK_SHARED),
/* harmony export */   SQLITE_MISMATCH: () => (/* binding */ SQLITE_MISMATCH),
/* harmony export */   SQLITE_MISUSE: () => (/* binding */ SQLITE_MISUSE),
/* harmony export */   SQLITE_NOLFS: () => (/* binding */ SQLITE_NOLFS),
/* harmony export */   SQLITE_NOMEM: () => (/* binding */ SQLITE_NOMEM),
/* harmony export */   SQLITE_NOTADB: () => (/* binding */ SQLITE_NOTADB),
/* harmony export */   SQLITE_NOTFOUND: () => (/* binding */ SQLITE_NOTFOUND),
/* harmony export */   SQLITE_NOTICE: () => (/* binding */ SQLITE_NOTICE),
/* harmony export */   SQLITE_NULL: () => (/* binding */ SQLITE_NULL),
/* harmony export */   SQLITE_OK: () => (/* binding */ SQLITE_OK),
/* harmony export */   SQLITE_OPEN_AUTOPROXY: () => (/* binding */ SQLITE_OPEN_AUTOPROXY),
/* harmony export */   SQLITE_OPEN_CREATE: () => (/* binding */ SQLITE_OPEN_CREATE),
/* harmony export */   SQLITE_OPEN_DELETEONCLOSE: () => (/* binding */ SQLITE_OPEN_DELETEONCLOSE),
/* harmony export */   SQLITE_OPEN_EXCLUSIVE: () => (/* binding */ SQLITE_OPEN_EXCLUSIVE),
/* harmony export */   SQLITE_OPEN_FULLMUTEX: () => (/* binding */ SQLITE_OPEN_FULLMUTEX),
/* harmony export */   SQLITE_OPEN_MAIN_DB: () => (/* binding */ SQLITE_OPEN_MAIN_DB),
/* harmony export */   SQLITE_OPEN_MAIN_JOURNAL: () => (/* binding */ SQLITE_OPEN_MAIN_JOURNAL),
/* harmony export */   SQLITE_OPEN_MEMORY: () => (/* binding */ SQLITE_OPEN_MEMORY),
/* harmony export */   SQLITE_OPEN_NOFOLLOW: () => (/* binding */ SQLITE_OPEN_NOFOLLOW),
/* harmony export */   SQLITE_OPEN_NOMUTEX: () => (/* binding */ SQLITE_OPEN_NOMUTEX),
/* harmony export */   SQLITE_OPEN_PRIVATECACHE: () => (/* binding */ SQLITE_OPEN_PRIVATECACHE),
/* harmony export */   SQLITE_OPEN_READONLY: () => (/* binding */ SQLITE_OPEN_READONLY),
/* harmony export */   SQLITE_OPEN_READWRITE: () => (/* binding */ SQLITE_OPEN_READWRITE),
/* harmony export */   SQLITE_OPEN_SHAREDCACHE: () => (/* binding */ SQLITE_OPEN_SHAREDCACHE),
/* harmony export */   SQLITE_OPEN_SUBJOURNAL: () => (/* binding */ SQLITE_OPEN_SUBJOURNAL),
/* harmony export */   SQLITE_OPEN_SUPER_JOURNAL: () => (/* binding */ SQLITE_OPEN_SUPER_JOURNAL),
/* harmony export */   SQLITE_OPEN_TEMP_DB: () => (/* binding */ SQLITE_OPEN_TEMP_DB),
/* harmony export */   SQLITE_OPEN_TEMP_JOURNAL: () => (/* binding */ SQLITE_OPEN_TEMP_JOURNAL),
/* harmony export */   SQLITE_OPEN_TRANSIENT_DB: () => (/* binding */ SQLITE_OPEN_TRANSIENT_DB),
/* harmony export */   SQLITE_OPEN_URI: () => (/* binding */ SQLITE_OPEN_URI),
/* harmony export */   SQLITE_OPEN_WAL: () => (/* binding */ SQLITE_OPEN_WAL),
/* harmony export */   SQLITE_PERM: () => (/* binding */ SQLITE_PERM),
/* harmony export */   SQLITE_PRAGMA: () => (/* binding */ SQLITE_PRAGMA),
/* harmony export */   SQLITE_PROTOCOL: () => (/* binding */ SQLITE_PROTOCOL),
/* harmony export */   SQLITE_RANGE: () => (/* binding */ SQLITE_RANGE),
/* harmony export */   SQLITE_READ: () => (/* binding */ SQLITE_READ),
/* harmony export */   SQLITE_READONLY: () => (/* binding */ SQLITE_READONLY),
/* harmony export */   SQLITE_RECURSIVE: () => (/* binding */ SQLITE_RECURSIVE),
/* harmony export */   SQLITE_REINDEX: () => (/* binding */ SQLITE_REINDEX),
/* harmony export */   SQLITE_ROW: () => (/* binding */ SQLITE_ROW),
/* harmony export */   SQLITE_SAVEPOINT: () => (/* binding */ SQLITE_SAVEPOINT),
/* harmony export */   SQLITE_SCHEMA: () => (/* binding */ SQLITE_SCHEMA),
/* harmony export */   SQLITE_SELECT: () => (/* binding */ SQLITE_SELECT),
/* harmony export */   SQLITE_STATIC: () => (/* binding */ SQLITE_STATIC),
/* harmony export */   SQLITE_SUBTYPE: () => (/* binding */ SQLITE_SUBTYPE),
/* harmony export */   SQLITE_SYNC_DATAONLY: () => (/* binding */ SQLITE_SYNC_DATAONLY),
/* harmony export */   SQLITE_SYNC_FULL: () => (/* binding */ SQLITE_SYNC_FULL),
/* harmony export */   SQLITE_SYNC_NORMAL: () => (/* binding */ SQLITE_SYNC_NORMAL),
/* harmony export */   SQLITE_TEXT: () => (/* binding */ SQLITE_TEXT),
/* harmony export */   SQLITE_TOOBIG: () => (/* binding */ SQLITE_TOOBIG),
/* harmony export */   SQLITE_TRANSACTION: () => (/* binding */ SQLITE_TRANSACTION),
/* harmony export */   SQLITE_TRANSIENT: () => (/* binding */ SQLITE_TRANSIENT),
/* harmony export */   SQLITE_UPDATE: () => (/* binding */ SQLITE_UPDATE),
/* harmony export */   SQLITE_UTF16: () => (/* binding */ SQLITE_UTF16),
/* harmony export */   SQLITE_UTF16BE: () => (/* binding */ SQLITE_UTF16BE),
/* harmony export */   SQLITE_UTF16LE: () => (/* binding */ SQLITE_UTF16LE),
/* harmony export */   SQLITE_UTF8: () => (/* binding */ SQLITE_UTF8),
/* harmony export */   SQLITE_WARNING: () => (/* binding */ SQLITE_WARNING)
/* harmony export */ });
// Primary result codes.
// https://www.sqlite.org/rescode.html
const SQLITE_OK = 0;
const SQLITE_ERROR = 1;
const SQLITE_INTERNAL = 2;
const SQLITE_PERM = 3;
const SQLITE_ABORT = 4;
const SQLITE_BUSY = 5;
const SQLITE_LOCKED = 6;
const SQLITE_NOMEM = 7;
const SQLITE_READONLY = 8;
const SQLITE_INTERRUPT = 9;
const SQLITE_IOERR = 10;
const SQLITE_CORRUPT = 11;
const SQLITE_NOTFOUND = 12;
const SQLITE_FULL = 13;
const SQLITE_CANTOPEN = 14;
const SQLITE_PROTOCOL = 15;
const SQLITE_EMPTY = 16;
const SQLITE_SCHEMA = 17;
const SQLITE_TOOBIG = 18;
const SQLITE_CONSTRAINT = 19;
const SQLITE_MISMATCH = 20;
const SQLITE_MISUSE = 21;
const SQLITE_NOLFS = 22;
const SQLITE_AUTH = 23;
const SQLITE_FORMAT = 24;
const SQLITE_RANGE = 25;
const SQLITE_NOTADB = 26;
const SQLITE_NOTICE = 27;
const SQLITE_WARNING = 28;
const SQLITE_ROW = 100;
const SQLITE_DONE = 101;

// Extended error codes.
const SQLITE_IOERR_ACCESS = 3338;
const SQLITE_IOERR_CHECKRESERVEDLOCK = 3594;
const SQLITE_IOERR_CLOSE = 4106;
const SQLITE_IOERR_DATA = 8202;
const SQLITE_IOERR_DELETE = 2570;
const SQLITE_IOERR_DELETE_NOENT = 5898;
const SQLITE_IOERR_DIR_FSYNC = 1290;
const SQLITE_IOERR_FSTAT = 1802;
const SQLITE_IOERR_FSYNC = 1034;
const SQLITE_IOERR_GETTEMPPATH = 6410;
const SQLITE_IOERR_LOCK = 3850;
const SQLITE_IOERR_NOMEM = 3082;
const SQLITE_IOERR_READ = 266;
const SQLITE_IOERR_RDLOCK = 2314;
const SQLITE_IOERR_SEEK = 5642;
const SQLITE_IOERR_SHORT_READ = 522;
const SQLITE_IOERR_TRUNCATE = 1546;
const SQLITE_IOERR_UNLOCK = 2058;
const SQLITE_IOERR_VNODE = 6922;
const SQLITE_IOERR_WRITE = 778;
const SQLITE_IOERR_BEGIN_ATOMIC = 7434;
const SQLITE_IOERR_COMMIT_ATOMIC = 7690;
const SQLITE_IOERR_ROLLBACK_ATOMIC = 7946;

// Other extended result codes.
const SQLITE_CONSTRAINT_CHECK = 275;
const SQLITE_CONSTRAINT_COMMITHOOK = 531;
const SQLITE_CONSTRAINT_FOREIGNKEY = 787;
const SQLITE_CONSTRAINT_FUNCTION = 1043;
const SQLITE_CONSTRAINT_NOTNULL = 1299;
const SQLITE_CONSTRAINT_PINNED = 2835;
const SQLITE_CONSTRAINT_PRIMARYKEY = 1555;
const SQLITE_CONSTRAINT_ROWID = 2579;
const SQLITE_CONSTRAINT_TRIGGER = 1811;
const SQLITE_CONSTRAINT_UNIQUE = 2067;
const SQLITE_CONSTRAINT_VTAB = 2323;

// Open flags.
// https://www.sqlite.org/c3ref/c_open_autoproxy.html
const SQLITE_OPEN_READONLY = 0x00000001;
const SQLITE_OPEN_READWRITE = 0x00000002;
const SQLITE_OPEN_CREATE = 0x00000004;
const SQLITE_OPEN_DELETEONCLOSE = 0x00000008;
const SQLITE_OPEN_EXCLUSIVE = 0x00000010;
const SQLITE_OPEN_AUTOPROXY = 0x00000020;
const SQLITE_OPEN_URI = 0x00000040;
const SQLITE_OPEN_MEMORY = 0x00000080;
const SQLITE_OPEN_MAIN_DB = 0x00000100;
const SQLITE_OPEN_TEMP_DB = 0x00000200;
const SQLITE_OPEN_TRANSIENT_DB = 0x00000400;
const SQLITE_OPEN_MAIN_JOURNAL = 0x00000800;
const SQLITE_OPEN_TEMP_JOURNAL = 0x00001000;
const SQLITE_OPEN_SUBJOURNAL = 0x00002000;
const SQLITE_OPEN_SUPER_JOURNAL = 0x00004000;
const SQLITE_OPEN_NOMUTEX = 0x00008000;
const SQLITE_OPEN_FULLMUTEX = 0x00010000;
const SQLITE_OPEN_SHAREDCACHE = 0x00020000;
const SQLITE_OPEN_PRIVATECACHE = 0x00040000;
const SQLITE_OPEN_WAL = 0x00080000;
const SQLITE_OPEN_NOFOLLOW = 0x01000000;

// Locking levels.
// https://www.sqlite.org/c3ref/c_lock_exclusive.html
const SQLITE_LOCK_NONE = 0;
const SQLITE_LOCK_SHARED = 1;
const SQLITE_LOCK_RESERVED = 2;
const SQLITE_LOCK_PENDING = 3;
const SQLITE_LOCK_EXCLUSIVE = 4;

// Device characteristics.
// https://www.sqlite.org/c3ref/c_iocap_atomic.html
const SQLITE_IOCAP_ATOMIC = 0x00000001;
const SQLITE_IOCAP_ATOMIC512 = 0x00000002;
const SQLITE_IOCAP_ATOMIC1K = 0x00000004;
const SQLITE_IOCAP_ATOMIC2K = 0x00000008;
const SQLITE_IOCAP_ATOMIC4K = 0x00000010;
const SQLITE_IOCAP_ATOMIC8K = 0x00000020;
const SQLITE_IOCAP_ATOMIC16K = 0x00000040;
const SQLITE_IOCAP_ATOMIC32K = 0x00000080;
const SQLITE_IOCAP_ATOMIC64K = 0x00000100;
const SQLITE_IOCAP_SAFE_APPEND = 0x00000200;
const SQLITE_IOCAP_SEQUENTIAL = 0x00000400;
const SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN = 0x00000800;
const SQLITE_IOCAP_POWERSAFE_OVERWRITE = 0x00001000;
const SQLITE_IOCAP_IMMUTABLE = 0x00002000;
const SQLITE_IOCAP_BATCH_ATOMIC = 0x00004000;

// xAccess flags.
// https://www.sqlite.org/c3ref/c_access_exists.html
const SQLITE_ACCESS_EXISTS = 0;
const SQLITE_ACCESS_READWRITE = 1;
const SQLITE_ACCESS_READ = 2;

// File control opcodes
// https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlbeginatomicwrite
const SQLITE_FCNTL_LOCKSTATE = 1; 
const SQLITE_FCNTL_GET_LOCKPROXYFILE = 2; 
const SQLITE_FCNTL_SET_LOCKPROXYFILE = 3; 
const SQLITE_FCNTL_LAST_ERRNO = 4; 
const SQLITE_FCNTL_SIZE_HINT = 5; 
const SQLITE_FCNTL_CHUNK_SIZE = 6; 
const SQLITE_FCNTL_FILE_POINTER = 7; 
const SQLITE_FCNTL_SYNC_OMITTED = 8; 
const SQLITE_FCNTL_WIN32_AV_RETRY = 9; 
const SQLITE_FCNTL_PERSIST_WAL = 10; 
const SQLITE_FCNTL_OVERWRITE = 11; 
const SQLITE_FCNTL_VFSNAME = 12; 
const SQLITE_FCNTL_POWERSAFE_OVERWRITE = 13; 
const SQLITE_FCNTL_PRAGMA = 14; 
const SQLITE_FCNTL_BUSYHANDLER = 15; 
const SQLITE_FCNTL_TEMPFILENAME = 16; 
const SQLITE_FCNTL_MMAP_SIZE = 18; 
const SQLITE_FCNTL_TRACE = 19; 
const SQLITE_FCNTL_HAS_MOVED = 20; 
const SQLITE_FCNTL_SYNC = 21; 
const SQLITE_FCNTL_COMMIT_PHASETWO = 22; 
const SQLITE_FCNTL_WIN32_SET_HANDLE = 23; 
const SQLITE_FCNTL_WAL_BLOCK = 24; 
const SQLITE_FCNTL_ZIPVFS = 25; 
const SQLITE_FCNTL_RBU = 26; 
const SQLITE_FCNTL_VFS_POINTER = 27; 
const SQLITE_FCNTL_JOURNAL_POINTER = 28; 
const SQLITE_FCNTL_WIN32_GET_HANDLE = 29; 
const SQLITE_FCNTL_PDB = 30; 
const SQLITE_FCNTL_BEGIN_ATOMIC_WRITE = 31; 
const SQLITE_FCNTL_COMMIT_ATOMIC_WRITE = 32; 
const SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE = 33; 
const SQLITE_FCNTL_LOCK_TIMEOUT = 34; 
const SQLITE_FCNTL_DATA_VERSION = 35; 
const SQLITE_FCNTL_SIZE_LIMIT = 36; 
const SQLITE_FCNTL_CKPT_DONE = 37; 
const SQLITE_FCNTL_RESERVE_BYTES = 38; 
const SQLITE_FCNTL_CKPT_START = 39;

// Fundamental datatypes.
// https://www.sqlite.org/c3ref/c_blob.html
const SQLITE_INTEGER = 1;
const SQLITE_FLOAT = 2;
const SQLITE_TEXT = 3;
const SQLITE_BLOB = 4;
const SQLITE_NULL = 5;

// Special destructor behavior.
// https://www.sqlite.org/c3ref/c_static.html
const SQLITE_STATIC = 0;
const SQLITE_TRANSIENT = -1;

// Text encodings.
// https://sqlite.org/c3ref/c_any.html
const SQLITE_UTF8 = 1;     /* IMP: R-37514-35566 */
const SQLITE_UTF16LE = 2;  /* IMP: R-03371-37637 */
const SQLITE_UTF16BE = 3;  /* IMP: R-51971-34154 */
const SQLITE_UTF16 = 4;    /* Use native byte order */

// Module constraint ops.
const SQLITE_INDEX_CONSTRAINT_EQ        = 2;
const SQLITE_INDEX_CONSTRAINT_GT        = 4;
const SQLITE_INDEX_CONSTRAINT_LE        = 8;
const SQLITE_INDEX_CONSTRAINT_LT        = 16;
const SQLITE_INDEX_CONSTRAINT_GE        = 32;
const SQLITE_INDEX_CONSTRAINT_MATCH     = 64;
const SQLITE_INDEX_CONSTRAINT_LIKE      = 65;
const SQLITE_INDEX_CONSTRAINT_GLOB      = 66;
const SQLITE_INDEX_CONSTRAINT_REGEXP    = 67;
const SQLITE_INDEX_CONSTRAINT_NE        = 68;
const SQLITE_INDEX_CONSTRAINT_ISNOT     = 69;
const SQLITE_INDEX_CONSTRAINT_ISNOTNULL = 70;
const SQLITE_INDEX_CONSTRAINT_ISNULL    = 71;
const SQLITE_INDEX_CONSTRAINT_IS        = 72;
const SQLITE_INDEX_CONSTRAINT_FUNCTION  = 150;
const SQLITE_INDEX_SCAN_UNIQUE          = 1;  /* Scan visits at most = 1 row */

// Function flags
const SQLITE_DETERMINISTIC = 0x000000800;
const SQLITE_DIRECTONLY    = 0x000080000;
const SQLITE_SUBTYPE       = 0x000100000;
const SQLITE_INNOCUOUS     = 0x000200000;

// Sync flags
const SQLITE_SYNC_NORMAL   = 0x00002;
const SQLITE_SYNC_FULL     = 0x00003;
const SQLITE_SYNC_DATAONLY = 0x00010;

// Authorizer action codes
const SQLITE_CREATE_INDEX        = 1;
const SQLITE_CREATE_TABLE        = 2;
const SQLITE_CREATE_TEMP_INDEX   = 3;
const SQLITE_CREATE_TEMP_TABLE   = 4;
const SQLITE_CREATE_TEMP_TRIGGER = 5;
const SQLITE_CREATE_TEMP_VIEW    = 6;
const SQLITE_CREATE_TRIGGER      = 7;
const SQLITE_CREATE_VIEW         = 8;
const SQLITE_DELETE              = 9;
const SQLITE_DROP_INDEX          = 10;
const SQLITE_DROP_TABLE          = 11;
const SQLITE_DROP_TEMP_INDEX     = 12;
const SQLITE_DROP_TEMP_TABLE     = 13;
const SQLITE_DROP_TEMP_TRIGGER   = 14;
const SQLITE_DROP_TEMP_VIEW      = 15;
const SQLITE_DROP_TRIGGER        = 16;
const SQLITE_DROP_VIEW           = 17;
const SQLITE_INSERT              = 18;
const SQLITE_PRAGMA              = 19;
const SQLITE_READ                = 20;
const SQLITE_SELECT              = 21;
const SQLITE_TRANSACTION         = 22;
const SQLITE_UPDATE              = 23;
const SQLITE_ATTACH              = 24;
const SQLITE_DETACH              = 25;
const SQLITE_ALTER_TABLE         = 26;
const SQLITE_REINDEX             = 27;
const SQLITE_ANALYZE             = 28;
const SQLITE_CREATE_VTABLE       = 29;
const SQLITE_DROP_VTABLE         = 30;
const SQLITE_FUNCTION            = 31;
const SQLITE_SAVEPOINT           = 32;
const SQLITE_COPY                = 0;
const SQLITE_RECURSIVE           = 33;

// Authorizer return codes
const SQLITE_DENY   = 1;
const SQLITE_IGNORE = 2;

// Limit categories
const SQLITE_LIMIT_LENGTH              = 0;
const SQLITE_LIMIT_SQL_LENGTH          = 1;
const SQLITE_LIMIT_COLUMN              = 2;
const SQLITE_LIMIT_EXPR_DEPTH          = 3;
const SQLITE_LIMIT_COMPOUND_SELECT     = 4;
const SQLITE_LIMIT_VDBE_OP             = 5;
const SQLITE_LIMIT_FUNCTION_ARG        = 6;
const SQLITE_LIMIT_ATTACHED            = 7;
const SQLITE_LIMIT_LIKE_PATTERN_LENGTH = 8;
const SQLITE_LIMIT_VARIABLE_NUMBER     = 9;
const SQLITE_LIMIT_TRIGGER_DEPTH       = 10;
const SQLITE_LIMIT_WORKER_THREADS      = 11;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/sqlite-worker.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wa_sqlite_dist_wa_sqlite_async_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wa-sqlite/dist/wa-sqlite-async.mjs */ "./node_modules/wa-sqlite/dist/wa-sqlite-async.mjs");
/* harmony import */ var wa_sqlite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wa-sqlite */ "./node_modules/wa-sqlite/src/sqlite-api.js");
/* harmony import */ var wa_sqlite_src_examples_IDBBatchAtomicVFS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wa-sqlite/src/examples/IDBBatchAtomicVFS */ "./node_modules/wa-sqlite/src/examples/IDBBatchAtomicVFS.js");




let sqlite3 = null;
let currentDb = null;

async function ensureEngine() {
    if (sqlite3) return;
    const asyncModule = await (0,wa_sqlite_dist_wa_sqlite_async_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    sqlite3 = wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.Factory(asyncModule);
}

function resultToRow(columns, rowData) {
    const obj = {};
    for (let i = 0; i < rowData.length; i++) {
        obj[columns[i]] = rowData[i];
    }
    return obj;
}

const handlers = {
    async open(args) {
        const [dbName, fileName] = args;
        await ensureEngine();
        sqlite3.vfs_register(new wa_sqlite_src_examples_IDBBatchAtomicVFS__WEBPACK_IMPORTED_MODULE_2__.IDBBatchAtomicVFS(fileName));
        currentDb = await sqlite3.open_v2(
            dbName,
            wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_CREATE | wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_READWRITE | wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_URI,
            fileName
        );
        return currentDb;
    },

    async close() {
        if (currentDb === null) return;
        await sqlite3.close(currentDb);
        currentDb = null;
    },

    async execute(args) {
        const [dbConn, sql, parameters] = args;
        const result = { changes: 0, response: null, data: '', error: '' };
        try {
            for await (const stmt of sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    const bindResult = await sqlite3.bind_collection(stmt, parameters);
                    if (bindResult !== wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK) {
                        result.error = 'Unable to prepare statement. Check your syntax or parameters';
                        return result;
                    }
                }
                while (await sqlite3.step(stmt) === wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ROW) {}
                result.response = 'SQLITE_DONE';
                result.changes = sqlite3.changes(dbConn);
            }
        } catch (error) {
            result.error = error.message;
        }
        return result;
    },

    async query(args) {
        const [dbConn, sql, parameters] = args;
        const result = { data: [], error: '' };
        try {
            for await (const stmt of sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    const bindResult = await sqlite3.bind_collection(stmt, parameters);
                    if (bindResult !== wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK) {
                        result.error = 'Unable to prepare statement';
                        return result;
                    }
                }
                try {
                    let columns;
                    while (await sqlite3.step(stmt) === wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ROW) {
                        columns = columns ?? sqlite3.column_names(stmt);
                        const row = sqlite3.row(stmt);
                        result.data.push(resultToRow(columns, row));
                    }
                } catch (error) {
                    result.error = error.message;
                }
            }
        } catch (error) {
            result.error = error.message;
        }
        return result;
    },

    async executeBatch(args) {
        const [dbConn, batch] = args;
        let totalChanges = 0;
        const errors = [];
        for (let i = 0; i < batch.length; i++) {
            const { sql, params } = batch[i];
            try {
                for await (const stmt of sqlite3.statements(dbConn, sql)) {
                    if (params != null) {
                        const bindResult = await sqlite3.bind_collection(stmt, params);
                        if (bindResult !== wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK) {
                            errors.push({ index: i, error: 'Unable to prepare statement' });
                            continue;
                        }
                    }
                    while (await sqlite3.step(stmt) === wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ROW) {}
                    totalChanges += sqlite3.changes(dbConn);
                }
            } catch (error) {
                errors.push({ index: i, error: error.message });
            }
        }
        return { totalChanges, errors };
    },
};

self.onerror = function (e) {
    console.error('[sqlite-worker] uncaught error:', e.message || e);
};

self.onunhandledrejection = function (e) {
    console.error('[sqlite-worker] unhandled rejection:', e.reason);
};

self.onmessage = async function (e) {
    const { id, method, args } = e.data;
    const handler = handlers[method];
    if (!handler) {
        self.postMessage({ id, error: `Unknown method: ${method}` });
        return;
    }
    try {
        const result = await handler(args);
        self.postMessage({ id, result });
    } catch (err) {
        self.postMessage({ id, error: err.message || String(err) });
    }
};

self.postMessage({ type: 'ready' });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsK0RBQW9CO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDREQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQWdCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBZ0I7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNERBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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aUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMTdCQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTs7QUFFUDtBQUNBO0FBQ08sMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkJBQTJCOztBQUVsQztBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFckQ7QUFDTztBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDOVFQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDYnVFO0FBQ25DO0FBQ3lDOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsOEVBQXFCO0FBQ25ELGNBQWMsOENBQWM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUZBQWlCO0FBQ2xEO0FBQ0E7QUFDQSxZQUFZLHlEQUF5QixHQUFHLDREQUE0QixHQUFHLHNEQUFzQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdEQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxpREFBaUI7QUFDckU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnREFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlEQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0RBQWdCO0FBQzNELDBDQUEwQyxnREFBZ0Q7QUFDMUY7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlEQUFpQjtBQUN6RTtBQUNBO0FBQ0EsY0FBYztBQUNkLDhCQUE4QixnQ0FBZ0M7QUFDOUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCLE9BQU8sR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLE1BQU07QUFDTiwyQkFBMkIsdUNBQXVDO0FBQ2xFO0FBQ0E7O0FBRUEsbUJBQW1CLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy93YS1zcWxpdGUvZGlzdC93YS1zcWxpdGUtYXN5bmMubWpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL3dhLXNxbGl0ZS9zcmMvVkZTLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL3dhLXNxbGl0ZS9zcmMvZXhhbXBsZXMvSURCQmF0Y2hBdG9taWNWRlMuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvd2Etc3FsaXRlL3NyYy9leGFtcGxlcy9JREJDb250ZXh0LmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL3dhLXNxbGl0ZS9zcmMvZXhhbXBsZXMvV2ViTG9ja3MuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvd2Etc3FsaXRlL3NyYy9zcWxpdGUtYXBpLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL3dhLXNxbGl0ZS9zcmMvc3FsaXRlLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL3NyYy9zcWxpdGUtd29ya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIE1vZHVsZSA9ICgoKSA9PiB7XG4gIHZhciBfc2NyaXB0RGlyID0gaW1wb3J0Lm1ldGEudXJsO1xuICBcbiAgcmV0dXJuIChcbmZ1bmN0aW9uKG1vZHVsZUFyZyA9IHt9KSB7XG5cbnZhciBmPW1vZHVsZUFyZyxhYSxiYTtmLnJlYWR5PW5ldyBQcm9taXNlKChhLGIpPT57YWE9YTtiYT1ifSk7dmFyIGNhPU9iamVjdC5hc3NpZ24oe30sZiksZGE9XCIuL3RoaXMucHJvZ3JhbVwiLGVhPShhLGIpPT57dGhyb3cgYjt9LGZhPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3csaWE9XCJmdW5jdGlvblwiPT10eXBlb2YgaW1wb3J0U2NyaXB0cyxwPVwiXCIsamE7XG5pZihmYXx8aWEpaWE/cD1zZWxmLmxvY2F0aW9uLmhyZWY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZkb2N1bWVudC5jdXJyZW50U2NyaXB0JiYocD1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYyksX3NjcmlwdERpciYmKHA9X3NjcmlwdERpciksMCE9PXAuaW5kZXhPZihcImJsb2I6XCIpP3A9cC5zdWJzdHIoMCxwLnJlcGxhY2UoL1s/I10uKi8sXCJcIikubGFzdEluZGV4T2YoXCIvXCIpKzEpOnA9XCJcIixpYSYmKGphPWE9Pnt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiR0VUXCIsYSwhMSk7Yi5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO2Iuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYi5yZXNwb25zZSl9KTt2YXIga2E9Zi5wcmludHx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKSx0PWYucHJpbnRFcnJ8fGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKGYsY2EpO2NhPW51bGw7Zi50aGlzUHJvZ3JhbSYmKGRhPWYudGhpc1Byb2dyYW0pO1xuZi5xdWl0JiYoZWE9Zi5xdWl0KTt2YXIgbGE7Zi53YXNtQmluYXJ5JiYobGE9Zi53YXNtQmluYXJ5KTt2YXIgbm9FeGl0UnVudGltZT1mLm5vRXhpdFJ1bnRpbWV8fCEwO1wib2JqZWN0XCIhPXR5cGVvZiBXZWJBc3NlbWJseSYmdShcIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWRcIik7dmFyIG1hLHY9ITEsbmEsdyx5LG9hLHosQixwYSxxYTtmdW5jdGlvbiByYSgpe3ZhciBhPW1hLmJ1ZmZlcjtmLkhFQVA4PXc9bmV3IEludDhBcnJheShhKTtmLkhFQVAxNj1vYT1uZXcgSW50MTZBcnJheShhKTtmLkhFQVBVOD15PW5ldyBVaW50OEFycmF5KGEpO2YuSEVBUFUxNj1uZXcgVWludDE2QXJyYXkoYSk7Zi5IRUFQMzI9ej1uZXcgSW50MzJBcnJheShhKTtmLkhFQVBVMzI9Qj1uZXcgVWludDMyQXJyYXkoYSk7Zi5IRUFQRjMyPXBhPW5ldyBGbG9hdDMyQXJyYXkoYSk7Zi5IRUFQRjY0PXFhPW5ldyBGbG9hdDY0QXJyYXkoYSl9dmFyIHNhPVtdLHRhPVtdLHVhPVtdLHZhPVtdLHdhPTA7XG5mdW5jdGlvbiB4YSgpe3ZhciBhPWYucHJlUnVuLnNoaWZ0KCk7c2EudW5zaGlmdChhKX12YXIgQz0wLHlhPW51bGwsemE9bnVsbDtmdW5jdGlvbiB1KGEpe2lmKGYub25BYm9ydClmLm9uQWJvcnQoYSk7YT1cIkFib3J0ZWQoXCIrYStcIilcIjt0KGEpO3Y9ITA7bmE9MTthPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoYStcIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIik7YmEoYSk7dGhyb3cgYTt9ZnVuY3Rpb24gQWEoYSl7cmV0dXJuIGEuc3RhcnRzV2l0aChcImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIil9dmFyIEJhO2lmKGYubG9jYXRlRmlsZSl7aWYoQmE9XCJ3YS1zcWxpdGUtYXN5bmMud2FzbVwiLCFBYShCYSkpe3ZhciBDYT1CYTtCYT1mLmxvY2F0ZUZpbGU/Zi5sb2NhdGVGaWxlKENhLHApOnArQ2F9fWVsc2UgQmE9KG5ldyBVUkwoXCJ3YS1zcWxpdGUtYXN5bmMud2FzbVwiLGltcG9ydC5tZXRhLnVybCkpLmhyZWY7XG5mdW5jdGlvbiBEYShhKXtpZihhPT1CYSYmbGEpcmV0dXJuIG5ldyBVaW50OEFycmF5KGxhKTtpZihqYSlyZXR1cm4gamEoYSk7dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCI7fWZ1bmN0aW9uIEVhKGEpe3JldHVybiBsYXx8IWZhJiYhaWF8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGZldGNoP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PkRhKGEpKTpmZXRjaChhLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGI9PntpZighYi5vayl0aHJvd1wiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnXCIrYStcIidcIjtyZXR1cm4gYi5hcnJheUJ1ZmZlcigpfSkuY2F0Y2goKCk9PkRhKGEpKX1cbmZ1bmN0aW9uIEZhKGEsYixjKXtyZXR1cm4gRWEoYSkudGhlbihkPT5XZWJBc3NlbWJseS5pbnN0YW50aWF0ZShkLGIpKS50aGVuKGQ9PmQpLnRoZW4oYyxkPT57dChgZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogJHtkfWApO3UoZCl9KX1mdW5jdGlvbiBHYShhLGIpe3ZhciBjPUJhO3JldHVybiBsYXx8XCJmdW5jdGlvblwiIT10eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmd8fEFhKGMpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBmZXRjaD9GYShjLGEsYik6ZmV0Y2goYyx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihkPT5XZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhkLGEpLnRoZW4oYixmdW5jdGlvbihlKXt0KGB3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogJHtlfWApO3QoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKTtyZXR1cm4gRmEoYyxhLGIpfSkpfXZhciBELEY7XG5mdW5jdGlvbiBIYShhKXt0aGlzLm5hbWU9XCJFeGl0U3RhdHVzXCI7dGhpcy5tZXNzYWdlPWBQcm9ncmFtIHRlcm1pbmF0ZWQgd2l0aCBleGl0KCR7YX0pYDt0aGlzLnN0YXR1cz1hfXZhciBJYT1hPT57Zm9yKDswPGEubGVuZ3RoOylhLnNoaWZ0KCkoZil9O2Z1bmN0aW9uIEkoYSxiPVwiaThcIil7Yi5lbmRzV2l0aChcIipcIikmJihiPVwiKlwiKTtzd2l0Y2goYil7Y2FzZSBcImkxXCI6cmV0dXJuIHdbYT4+MF07Y2FzZSBcImk4XCI6cmV0dXJuIHdbYT4+MF07Y2FzZSBcImkxNlwiOnJldHVybiBvYVthPj4xXTtjYXNlIFwiaTMyXCI6cmV0dXJuIHpbYT4+Ml07Y2FzZSBcImk2NFwiOnUoXCJ0byBkbyBnZXRWYWx1ZShpNjQpIHVzZSBXQVNNX0JJR0lOVFwiKTtjYXNlIFwiZmxvYXRcIjpyZXR1cm4gcGFbYT4+Ml07Y2FzZSBcImRvdWJsZVwiOnJldHVybiBxYVthPj4zXTtjYXNlIFwiKlwiOnJldHVybiBCW2E+PjJdO2RlZmF1bHQ6dShgaW52YWxpZCB0eXBlIGZvciBnZXRWYWx1ZTogJHtifWApfX1cbmZ1bmN0aW9uIEooYSxiLGM9XCJpOFwiKXtjLmVuZHNXaXRoKFwiKlwiKSYmKGM9XCIqXCIpO3N3aXRjaChjKXtjYXNlIFwiaTFcIjp3W2E+PjBdPWI7YnJlYWs7Y2FzZSBcImk4XCI6d1thPj4wXT1iO2JyZWFrO2Nhc2UgXCJpMTZcIjpvYVthPj4xXT1iO2JyZWFrO2Nhc2UgXCJpMzJcIjp6W2E+PjJdPWI7YnJlYWs7Y2FzZSBcImk2NFwiOnUoXCJ0byBkbyBzZXRWYWx1ZShpNjQpIHVzZSBXQVNNX0JJR0lOVFwiKTtjYXNlIFwiZmxvYXRcIjpwYVthPj4yXT1iO2JyZWFrO2Nhc2UgXCJkb3VibGVcIjpxYVthPj4zXT1iO2JyZWFrO2Nhc2UgXCIqXCI6QlthPj4yXT1iO2JyZWFrO2RlZmF1bHQ6dShgaW52YWxpZCB0eXBlIGZvciBzZXRWYWx1ZTogJHtjfWApfX1cbnZhciBKYT1cInVuZGVmaW5lZFwiIT10eXBlb2YgVGV4dERlY29kZXI/bmV3IFRleHREZWNvZGVyKFwidXRmOFwiKTp2b2lkIDAsSz0oYSxiLGMpPT57dmFyIGQ9YitjO2ZvcihjPWI7YVtjXSYmIShjPj1kKTspKytjO2lmKDE2PGMtYiYmYS5idWZmZXImJkphKXJldHVybiBKYS5kZWNvZGUoYS5zdWJhcnJheShiLGMpKTtmb3IoZD1cIlwiO2I8Yzspe3ZhciBlPWFbYisrXTtpZihlJjEyOCl7dmFyIGg9YVtiKytdJjYzO2lmKDE5Mj09KGUmMjI0KSlkKz1TdHJpbmcuZnJvbUNoYXJDb2RlKChlJjMxKTw8NnxoKTtlbHNle3ZhciBnPWFbYisrXSY2MztlPTIyND09KGUmMjQwKT8oZSYxNSk8PDEyfGg8PDZ8ZzooZSY3KTw8MTh8aDw8MTJ8Zzw8NnxhW2IrK10mNjM7NjU1MzY+ZT9kKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGUpOihlLT02NTUzNixkKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGU+PjEwLDU2MzIwfGUmMTAyMykpfX1lbHNlIGQrPVN0cmluZy5mcm9tQ2hhckNvZGUoZSl9cmV0dXJuIGR9LFxuS2E9KGEsYik9Pntmb3IodmFyIGM9MCxkPWEubGVuZ3RoLTE7MDw9ZDtkLS0pe3ZhciBlPWFbZF07XCIuXCI9PT1lP2Euc3BsaWNlKGQsMSk6XCIuLlwiPT09ZT8oYS5zcGxpY2UoZCwxKSxjKyspOmMmJihhLnNwbGljZShkLDEpLGMtLSl9aWYoYilmb3IoO2M7Yy0tKWEudW5zaGlmdChcIi4uXCIpO3JldHVybiBhfSxNPWE9Pnt2YXIgYj1cIi9cIj09PWEuY2hhckF0KDApLGM9XCIvXCI9PT1hLnN1YnN0cigtMSk7KGE9S2EoYS5zcGxpdChcIi9cIikuZmlsdGVyKGQ9PiEhZCksIWIpLmpvaW4oXCIvXCIpKXx8Ynx8KGE9XCIuXCIpO2EmJmMmJihhKz1cIi9cIik7cmV0dXJuKGI/XCIvXCI6XCJcIikrYX0sTGE9YT0+e3ZhciBiPS9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvLmV4ZWMoYSkuc2xpY2UoMSk7YT1iWzBdO2I9YlsxXTtpZighYSYmIWIpcmV0dXJuXCIuXCI7YiYmKGI9Yi5zdWJzdHIoMCxiLmxlbmd0aC0xKSk7cmV0dXJuIGErYn0sTWE9YT0+e2lmKFwiL1wiPT09XG5hKXJldHVyblwiL1wiO2E9TShhKTthPWEucmVwbGFjZSgvXFwvJC8sXCJcIik7dmFyIGI9YS5sYXN0SW5kZXhPZihcIi9cIik7cmV0dXJuLTE9PT1iP2E6YS5zdWJzdHIoYisxKX0sTmE9KCk9PntpZihcIm9iamVjdFwiPT10eXBlb2YgY3J5cHRvJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKXJldHVybiBhPT5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGEpO3UoXCJpbml0UmFuZG9tRGV2aWNlXCIpfSxPYT1hPT4oT2E9TmEoKSkoYSk7XG5mdW5jdGlvbiBQYSgpe2Zvcih2YXIgYT1cIlwiLGI9ITEsYz1hcmd1bWVudHMubGVuZ3RoLTE7LTE8PWMmJiFiO2MtLSl7Yj0wPD1jP2FyZ3VtZW50c1tjXTpcIi9cIjtpZihcInN0cmluZ1wiIT10eXBlb2YgYil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3NcIik7aWYoIWIpcmV0dXJuXCJcIjthPWIrXCIvXCIrYTtiPVwiL1wiPT09Yi5jaGFyQXQoMCl9YT1LYShhLnNwbGl0KFwiL1wiKS5maWx0ZXIoZD0+ISFkKSwhYikuam9pbihcIi9cIik7cmV0dXJuKGI/XCIvXCI6XCJcIikrYXx8XCIuXCJ9XG52YXIgUWE9W10sUmE9YT0+e2Zvcih2YXIgYj0wLGM9MDtjPGEubGVuZ3RoOysrYyl7dmFyIGQ9YS5jaGFyQ29kZUF0KGMpOzEyNz49ZD9iKys6MjA0Nz49ZD9iKz0yOjU1Mjk2PD1kJiY1NzM0Mz49ZD8oYis9NCwrK2MpOmIrPTN9cmV0dXJuIGJ9LFNhPShhLGIsYyxkKT0+e2lmKCEoMDxkKSlyZXR1cm4gMDt2YXIgZT1jO2Q9YytkLTE7Zm9yKHZhciBoPTA7aDxhLmxlbmd0aDsrK2gpe3ZhciBnPWEuY2hhckNvZGVBdChoKTtpZig1NTI5Njw9ZyYmNTczNDM+PWcpe3ZhciBuPWEuY2hhckNvZGVBdCgrK2gpO2c9NjU1MzYrKChnJjEwMjMpPDwxMCl8biYxMDIzfWlmKDEyNz49Zyl7aWYoYz49ZClicmVhaztiW2MrK109Z31lbHNle2lmKDIwNDc+PWcpe2lmKGMrMT49ZClicmVhaztiW2MrK109MTkyfGc+PjZ9ZWxzZXtpZig2NTUzNT49Zyl7aWYoYysyPj1kKWJyZWFrO2JbYysrXT0yMjR8Zz4+MTJ9ZWxzZXtpZihjKzM+PWQpYnJlYWs7YltjKytdPTI0MHxnPj4xODtiW2MrK109MTI4fGc+PlxuMTImNjN9YltjKytdPTEyOHxnPj42JjYzfWJbYysrXT0xMjh8ZyY2M319YltjXT0wO3JldHVybiBjLWV9LFRhPVtdO2Z1bmN0aW9uIFVhKGEsYil7VGFbYV09e2lucHV0OltdLFRiOltdLGRjOmJ9O1ZhKGEsV2EpfVxudmFyIFdhPXtvcGVuKGEpe3ZhciBiPVRhW2Eubm9kZS5oY107aWYoIWIpdGhyb3cgbmV3IE4oNDMpO2EuVWI9YjthLnNlZWthYmxlPSExfSxjbG9zZShhKXthLlViLmRjLmtjKGEuVWIpfSxrYyhhKXthLlViLmRjLmtjKGEuVWIpfSxyZWFkKGEsYixjLGQpe2lmKCFhLlVifHwhYS5VYi5kYy56Yyl0aHJvdyBuZXcgTig2MCk7Zm9yKHZhciBlPTAsaD0wO2g8ZDtoKyspe3RyeXt2YXIgZz1hLlViLmRjLnpjKGEuVWIpfWNhdGNoKG4pe3Rocm93IG5ldyBOKDI5KTt9aWYodm9pZCAwPT09ZyYmMD09PWUpdGhyb3cgbmV3IE4oNik7aWYobnVsbD09PWd8fHZvaWQgMD09PWcpYnJlYWs7ZSsrO2JbYytoXT1nfWUmJihhLm5vZGUudGltZXN0YW1wPURhdGUubm93KCkpO3JldHVybiBlfSx3cml0ZShhLGIsYyxkKXtpZighYS5VYnx8IWEuVWIuZGMudGMpdGhyb3cgbmV3IE4oNjApO3RyeXtmb3IodmFyIGU9MDtlPGQ7ZSsrKWEuVWIuZGMudGMoYS5VYixiW2MrZV0pfWNhdGNoKGgpe3Rocm93IG5ldyBOKDI5KTtcbn1kJiYoYS5ub2RlLnRpbWVzdGFtcD1EYXRlLm5vdygpKTtyZXR1cm4gZX19LFhhPXt6Yygpe2E6e2lmKCFRYS5sZW5ndGgpe3ZhciBhPW51bGw7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LnByb21wdD8oYT13aW5kb3cucHJvbXB0KFwiSW5wdXQ6IFwiKSxudWxsIT09YSYmKGErPVwiXFxuXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiByZWFkbGluZSYmKGE9cmVhZGxpbmUoKSxudWxsIT09YSYmKGErPVwiXFxuXCIpKTtpZighYSl7dmFyIGI9bnVsbDticmVhayBhfWI9QXJyYXkoUmEoYSkrMSk7YT1TYShhLGIsMCxiLmxlbmd0aCk7Yi5sZW5ndGg9YTtRYT1ifWI9UWEuc2hpZnQoKX1yZXR1cm4gYn0sdGMoYSxiKXtudWxsPT09Ynx8MTA9PT1iPyhrYShLKGEuVGIsMCkpLGEuVGI9W10pOjAhPWImJmEuVGIucHVzaChiKX0sa2MoYSl7YS5UYiYmMDxhLlRiLmxlbmd0aCYmKGthKEsoYS5UYiwwKSksYS5UYj1bXSl9LCRjKCl7cmV0dXJue1djOjI1ODU2LFxuWWM6NSxWYzoxOTEsWGM6MzUzODcsVWM6WzMsMjgsMTI3LDIxLDQsMCwxLDAsMTcsMTksMjYsMCwxOCwxNSwyMywyMiwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXX19LGFkKCl7cmV0dXJuIDB9LGJkKCl7cmV0dXJuWzI0LDgwXX19LFlhPXt0YyhhLGIpe251bGw9PT1ifHwxMD09PWI/KHQoSyhhLlRiLDApKSxhLlRiPVtdKTowIT1iJiZhLlRiLnB1c2goYil9LGtjKGEpe2EuVGImJjA8YS5UYi5sZW5ndGgmJih0KEsoYS5UYiwwKSksYS5UYj1bXSl9fTtmdW5jdGlvbiBaYShhLGIpe3ZhciBjPWEuUGI/YS5QYi5sZW5ndGg6MDtjPj1ifHwoYj1NYXRoLm1heChiLGMqKDEwNDg1NzY+Yz8yOjEuMTI1KT4+PjApLDAhPWMmJihiPU1hdGgubWF4KGIsMjU2KSksYz1hLlBiLGEuUGI9bmV3IFVpbnQ4QXJyYXkoYiksMDxhLlJiJiZhLlBiLnNldChjLnN1YmFycmF5KDAsYS5SYiksMCkpfVxudmFyIE89e1hiOm51bGwsV2IoKXtyZXR1cm4gTy5jcmVhdGVOb2RlKG51bGwsXCIvXCIsMTY4OTUsMCl9LGNyZWF0ZU5vZGUoYSxiLGMsZCl7aWYoMjQ1NzY9PT0oYyY2MTQ0MCl8fDQwOTY9PT0oYyY2MTQ0MCkpdGhyb3cgbmV3IE4oNjMpO08uWGJ8fChPLlhiPXtkaXI6e25vZGU6e1ZiOk8uRWIuVmIsU2I6Ty5FYi5TYixlYzpPLkViLmVjLGxjOk8uRWIubGMsRGM6Ty5FYi5EYyxxYzpPLkViLnFjLG9jOk8uRWIub2MsQ2M6Ty5FYi5DYyxwYzpPLkViLnBjfSxzdHJlYW06e2FjOk8uT2IuYWN9fSxmaWxlOntub2RlOntWYjpPLkViLlZiLFNiOk8uRWIuU2J9LHN0cmVhbTp7YWM6Ty5PYi5hYyxyZWFkOk8uT2IucmVhZCx3cml0ZTpPLk9iLndyaXRlLHdjOk8uT2Iud2MsbWM6Ty5PYi5tYyxuYzpPLk9iLm5jfX0sbGluazp7bm9kZTp7VmI6Ty5FYi5WYixTYjpPLkViLlNiLGljOk8uRWIuaWN9LHN0cmVhbTp7fX0seGM6e25vZGU6e1ZiOk8uRWIuVmIsU2I6Ty5FYi5TYn0sc3RyZWFtOiRhfX0pO1xuYz1hYihhLGIsYyxkKTtQKGMubW9kZSk/KGMuRWI9Ty5YYi5kaXIubm9kZSxjLk9iPU8uWGIuZGlyLnN0cmVhbSxjLlBiPXt9KTozMjc2OD09PShjLm1vZGUmNjE0NDApPyhjLkViPU8uWGIuZmlsZS5ub2RlLGMuT2I9Ty5YYi5maWxlLnN0cmVhbSxjLlJiPTAsYy5QYj1udWxsKTo0MDk2MD09PShjLm1vZGUmNjE0NDApPyhjLkViPU8uWGIubGluay5ub2RlLGMuT2I9Ty5YYi5saW5rLnN0cmVhbSk6ODE5Mj09PShjLm1vZGUmNjE0NDApJiYoYy5FYj1PLlhiLnhjLm5vZGUsYy5PYj1PLlhiLnhjLnN0cmVhbSk7Yy50aW1lc3RhbXA9RGF0ZS5ub3coKTthJiYoYS5QYltiXT1jLGEudGltZXN0YW1wPWMudGltZXN0YW1wKTtyZXR1cm4gY30sWmMoYSl7cmV0dXJuIGEuUGI/YS5QYi5zdWJhcnJheT9hLlBiLnN1YmFycmF5KDAsYS5SYik6bmV3IFVpbnQ4QXJyYXkoYS5QYik6bmV3IFVpbnQ4QXJyYXkoMCl9LEViOntWYihhKXt2YXIgYj17fTtiLkpjPTgxOTI9PT0oYS5tb2RlJjYxNDQwKT9hLmlkOlxuMTtiLkFjPWEuaWQ7Yi5tb2RlPWEubW9kZTtiLlBjPTE7Yi51aWQ9MDtiLk1jPTA7Yi5oYz1hLmhjO1AoYS5tb2RlKT9iLnNpemU9NDA5NjozMjc2OD09PShhLm1vZGUmNjE0NDApP2Iuc2l6ZT1hLlJiOjQwOTYwPT09KGEubW9kZSY2MTQ0MCk/Yi5zaXplPWEubGluay5sZW5ndGg6Yi5zaXplPTA7Yi5GYz1uZXcgRGF0ZShhLnRpbWVzdGFtcCk7Yi5PYz1uZXcgRGF0ZShhLnRpbWVzdGFtcCk7Yi5JYz1uZXcgRGF0ZShhLnRpbWVzdGFtcCk7Yi5HYz00MDk2O2IuSGM9TWF0aC5jZWlsKGIuc2l6ZS9iLkdjKTtyZXR1cm4gYn0sU2IoYSxiKXt2b2lkIDAhPT1iLm1vZGUmJihhLm1vZGU9Yi5tb2RlKTt2b2lkIDAhPT1iLnRpbWVzdGFtcCYmKGEudGltZXN0YW1wPWIudGltZXN0YW1wKTtpZih2b2lkIDAhPT1iLnNpemUmJihiPWIuc2l6ZSxhLlJiIT1iKSlpZigwPT1iKWEuUGI9bnVsbCxhLlJiPTA7ZWxzZXt2YXIgYz1hLlBiO2EuUGI9bmV3IFVpbnQ4QXJyYXkoYik7YyYmYS5QYi5zZXQoYy5zdWJhcnJheSgwLFxuTWF0aC5taW4oYixhLlJiKSkpO2EuUmI9Yn19LGVjKCl7dGhyb3cgYmJbNDRdO30sbGMoYSxiLGMsZCl7cmV0dXJuIE8uY3JlYXRlTm9kZShhLGIsYyxkKX0sRGMoYSxiLGMpe2lmKFAoYS5tb2RlKSl7dHJ5e3ZhciBkPWNiKGIsYyl9Y2F0Y2goaCl7fWlmKGQpZm9yKHZhciBlIGluIGQuUGIpdGhyb3cgbmV3IE4oNTUpO31kZWxldGUgYS5wYXJlbnQuUGJbYS5uYW1lXTthLnBhcmVudC50aW1lc3RhbXA9RGF0ZS5ub3coKTthLm5hbWU9YztiLlBiW2NdPWE7Yi50aW1lc3RhbXA9YS5wYXJlbnQudGltZXN0YW1wO2EucGFyZW50PWJ9LHFjKGEsYil7ZGVsZXRlIGEuUGJbYl07YS50aW1lc3RhbXA9RGF0ZS5ub3coKX0sb2MoYSxiKXt2YXIgYz1jYihhLGIpLGQ7Zm9yKGQgaW4gYy5QYil0aHJvdyBuZXcgTig1NSk7ZGVsZXRlIGEuUGJbYl07YS50aW1lc3RhbXA9RGF0ZS5ub3coKX0sQ2MoYSl7dmFyIGI9W1wiLlwiLFwiLi5cIl0sYztmb3IoYyBpbiBhLlBiKWEuUGIuaGFzT3duUHJvcGVydHkoYykmJlxuYi5wdXNoKGMpO3JldHVybiBifSxwYyhhLGIsYyl7YT1PLmNyZWF0ZU5vZGUoYSxiLDQxNDcxLDApO2EubGluaz1jO3JldHVybiBhfSxpYyhhKXtpZig0MDk2MCE9PShhLm1vZGUmNjE0NDApKXRocm93IG5ldyBOKDI4KTtyZXR1cm4gYS5saW5rfX0sT2I6e3JlYWQoYSxiLGMsZCxlKXt2YXIgaD1hLm5vZGUuUGI7aWYoZT49YS5ub2RlLlJiKXJldHVybiAwO2E9TWF0aC5taW4oYS5ub2RlLlJiLWUsZCk7aWYoODxhJiZoLnN1YmFycmF5KWIuc2V0KGguc3ViYXJyYXkoZSxlK2EpLGMpO2Vsc2UgZm9yKGQ9MDtkPGE7ZCsrKWJbYytkXT1oW2UrZF07cmV0dXJuIGF9LHdyaXRlKGEsYixjLGQsZSxoKXtiLmJ1ZmZlcj09PXcuYnVmZmVyJiYoaD0hMSk7aWYoIWQpcmV0dXJuIDA7YT1hLm5vZGU7YS50aW1lc3RhbXA9RGF0ZS5ub3coKTtpZihiLnN1YmFycmF5JiYoIWEuUGJ8fGEuUGIuc3ViYXJyYXkpKXtpZihoKXJldHVybiBhLlBiPWIuc3ViYXJyYXkoYyxjK2QpLGEuUmI9ZDtpZigwPT09XG5hLlJiJiYwPT09ZSlyZXR1cm4gYS5QYj1iLnNsaWNlKGMsYytkKSxhLlJiPWQ7aWYoZStkPD1hLlJiKXJldHVybiBhLlBiLnNldChiLnN1YmFycmF5KGMsYytkKSxlKSxkfVphKGEsZStkKTtpZihhLlBiLnN1YmFycmF5JiZiLnN1YmFycmF5KWEuUGIuc2V0KGIuc3ViYXJyYXkoYyxjK2QpLGUpO2Vsc2UgZm9yKGg9MDtoPGQ7aCsrKWEuUGJbZStoXT1iW2MraF07YS5SYj1NYXRoLm1heChhLlJiLGUrZCk7cmV0dXJuIGR9LGFjKGEsYixjKXsxPT09Yz9iKz1hLnBvc2l0aW9uOjI9PT1jJiYzMjc2OD09PShhLm5vZGUubW9kZSY2MTQ0MCkmJihiKz1hLm5vZGUuUmIpO2lmKDA+Yil0aHJvdyBuZXcgTigyOCk7cmV0dXJuIGJ9LHdjKGEsYixjKXtaYShhLm5vZGUsYitjKTthLm5vZGUuUmI9TWF0aC5tYXgoYS5ub2RlLlJiLGIrYyl9LG1jKGEsYixjLGQsZSl7aWYoMzI3NjghPT0oYS5ub2RlLm1vZGUmNjE0NDApKXRocm93IG5ldyBOKDQzKTthPWEubm9kZS5QYjtpZihlJjJ8fGEuYnVmZmVyIT09XG53LmJ1ZmZlcil7aWYoMDxjfHxjK2I8YS5sZW5ndGgpYS5zdWJhcnJheT9hPWEuc3ViYXJyYXkoYyxjK2IpOmE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSxjLGMrYik7Yz0hMDtiPTY1NTM2Kk1hdGguY2VpbChiLzY1NTM2KTsoZT1kYig2NTUzNixiKSk/KHkuZmlsbCgwLGUsZStiKSxiPWUpOmI9MDtpZighYil0aHJvdyBuZXcgTig0OCk7dy5zZXQoYSxiKX1lbHNlIGM9ITEsYj1hLmJ5dGVPZmZzZXQ7cmV0dXJue1FjOmIsRWM6Y319LG5jKGEsYixjLGQpe08uT2Iud3JpdGUoYSxiLDAsZCxjLCExKTtyZXR1cm4gMH19fSxlYj0oYSxiKT0+e3ZhciBjPTA7YSYmKGN8PTM2NSk7YiYmKGN8PTE0Nik7cmV0dXJuIGN9LGZiPW51bGwsZ2I9e30saGI9W10saWI9MSxRPW51bGwsamI9ITAsTj1udWxsLGJiPXt9O1xuZnVuY3Rpb24gUihhLGI9e30pe2E9UGEoYSk7aWYoIWEpcmV0dXJue3BhdGg6XCJcIixub2RlOm51bGx9O2I9T2JqZWN0LmFzc2lnbih7eWM6ITAsdWM6MH0sYik7aWYoODxiLnVjKXRocm93IG5ldyBOKDMyKTthPWEuc3BsaXQoXCIvXCIpLmZpbHRlcihnPT4hIWcpO2Zvcih2YXIgYz1mYixkPVwiL1wiLGU9MDtlPGEubGVuZ3RoO2UrKyl7dmFyIGg9ZT09PWEubGVuZ3RoLTE7aWYoaCYmYi5wYXJlbnQpYnJlYWs7Yz1jYihjLGFbZV0pO2Q9TShkK1wiL1wiK2FbZV0pO2MuYmMmJighaHx8aCYmYi55YykmJihjPWMuYmMucm9vdCk7aWYoIWh8fGIuJGIpZm9yKGg9MDs0MDk2MD09PShjLm1vZGUmNjE0NDApOylpZihjPWtiKGQpLGQ9UGEoTGEoZCksYyksYz1SKGQse3VjOmIudWMrMX0pLm5vZGUsNDA8aCsrKXRocm93IG5ldyBOKDMyKTt9cmV0dXJue3BhdGg6ZCxub2RlOmN9fVxuZnVuY3Rpb24gbGIoYSl7Zm9yKHZhciBiOzspe2lmKGE9PT1hLnBhcmVudClyZXR1cm4gYT1hLldiLkJjLGI/XCIvXCIhPT1hW2EubGVuZ3RoLTFdP2Ake2F9LyR7Yn1gOmErYjphO2I9Yj9gJHthLm5hbWV9LyR7Yn1gOmEubmFtZTthPWEucGFyZW50fX1mdW5jdGlvbiBtYihhLGIpe2Zvcih2YXIgYz0wLGQ9MDtkPGIubGVuZ3RoO2QrKyljPShjPDw1KS1jK2IuY2hhckNvZGVBdChkKXwwO3JldHVybihhK2M+Pj4wKSVRLmxlbmd0aH1mdW5jdGlvbiBuYihhKXt2YXIgYj1tYihhLnBhcmVudC5pZCxhLm5hbWUpO2lmKFFbYl09PT1hKVFbYl09YS5jYztlbHNlIGZvcihiPVFbYl07Yjspe2lmKGIuY2M9PT1hKXtiLmNjPWEuY2M7YnJlYWt9Yj1iLmNjfX1cbmZ1bmN0aW9uIGNiKGEsYil7dmFyIGM7aWYoYz0oYz1vYihhLFwieFwiKSk/YzphLkViLmVjPzA6Mil0aHJvdyBuZXcgTihjLGEpO2ZvcihjPVFbbWIoYS5pZCxiKV07YztjPWMuY2Mpe3ZhciBkPWMubmFtZTtpZihjLnBhcmVudC5pZD09PWEuaWQmJmQ9PT1iKXJldHVybiBjfXJldHVybiBhLkViLmVjKGEsYil9ZnVuY3Rpb24gYWIoYSxiLGMsZCl7YT1uZXcgcGIoYSxiLGMsZCk7Yj1tYihhLnBhcmVudC5pZCxhLm5hbWUpO2EuY2M9UVtiXTtyZXR1cm4gUVtiXT1hfWZ1bmN0aW9uIFAoYSl7cmV0dXJuIDE2Mzg0PT09KGEmNjE0NDApfWZ1bmN0aW9uIHFiKGEpe3ZhciBiPVtcInJcIixcIndcIixcInJ3XCJdW2EmM107YSY1MTImJihiKz1cIndcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBvYihhLGIpe2lmKGpiKXJldHVybiAwO2lmKCFiLmluY2x1ZGVzKFwiclwiKXx8YS5tb2RlJjI5Mil7aWYoYi5pbmNsdWRlcyhcIndcIikmJiEoYS5tb2RlJjE0Nil8fGIuaW5jbHVkZXMoXCJ4XCIpJiYhKGEubW9kZSY3MykpcmV0dXJuIDJ9ZWxzZSByZXR1cm4gMjtyZXR1cm4gMH1mdW5jdGlvbiByYihhLGIpe3RyeXtyZXR1cm4gY2IoYSxiKSwyMH1jYXRjaChjKXt9cmV0dXJuIG9iKGEsXCJ3eFwiKX1mdW5jdGlvbiBzYihhLGIsYyl7dHJ5e3ZhciBkPWNiKGEsYil9Y2F0Y2goZSl7cmV0dXJuIGUuUWJ9aWYoYT1vYihhLFwid3hcIikpcmV0dXJuIGE7aWYoYyl7aWYoIVAoZC5tb2RlKSlyZXR1cm4gNTQ7aWYoZD09PWQucGFyZW50fHxcIi9cIj09PWxiKGQpKXJldHVybiAxMH1lbHNlIGlmKFAoZC5tb2RlKSlyZXR1cm4gMzE7cmV0dXJuIDB9ZnVuY3Rpb24gdGIoKXtmb3IodmFyIGE9MDs0MDk2Pj1hO2ErKylpZighaGJbYV0pcmV0dXJuIGE7dGhyb3cgbmV3IE4oMzMpO31cbmZ1bmN0aW9uIFMoYSl7YT1oYlthXTtpZighYSl0aHJvdyBuZXcgTig4KTtyZXR1cm4gYX1mdW5jdGlvbiB1YihhLGI9LTEpe3ZifHwodmI9ZnVuY3Rpb24oKXt0aGlzLmpjPXt9fSx2Yi5wcm90b3R5cGU9e30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModmIucHJvdG90eXBlLHtvYmplY3Q6e2dldCgpe3JldHVybiB0aGlzLm5vZGV9LHNldChjKXt0aGlzLm5vZGU9Y319LGZsYWdzOntnZXQoKXtyZXR1cm4gdGhpcy5qYy5mbGFnc30sc2V0KGMpe3RoaXMuamMuZmxhZ3M9Y319LHBvc2l0aW9uOntnZXQoKXtyZXR1cm4gdGhpcy5qYy5wb3NpdGlvbn0sc2V0KGMpe3RoaXMuamMucG9zaXRpb249Y319fSkpO2E9T2JqZWN0LmFzc2lnbihuZXcgdmIsYSk7LTE9PWImJihiPXRiKCkpO2EuWWI9YjtyZXR1cm4gaGJbYl09YX12YXIgJGE9e29wZW4oYSl7YS5PYj1nYlthLm5vZGUuaGNdLk9iO2EuT2Iub3BlbiYmYS5PYi5vcGVuKGEpfSxhYygpe3Rocm93IG5ldyBOKDcwKTt9fTtcbmZ1bmN0aW9uIFZhKGEsYil7Z2JbYV09e09iOmJ9fWZ1bmN0aW9uIHdiKGEsYil7dmFyIGM9XCIvXCI9PT1iLGQ9IWI7aWYoYyYmZmIpdGhyb3cgbmV3IE4oMTApO2lmKCFjJiYhZCl7dmFyIGU9UihiLHt5YzohMX0pO2I9ZS5wYXRoO2U9ZS5ub2RlO2lmKGUuYmMpdGhyb3cgbmV3IE4oMTApO2lmKCFQKGUubW9kZSkpdGhyb3cgbmV3IE4oNTQpO31iPXt0eXBlOmEsZGQ6e30sQmM6YixOYzpbXX07YT1hLldiKGIpO2EuV2I9YjtiLnJvb3Q9YTtjP2ZiPWE6ZSYmKGUuYmM9YixlLldiJiZlLldiLk5jLnB1c2goYikpfWZ1bmN0aW9uIHhiKGEsYixjKXt2YXIgZD1SKGEse3BhcmVudDohMH0pLm5vZGU7YT1NYShhKTtpZighYXx8XCIuXCI9PT1hfHxcIi4uXCI9PT1hKXRocm93IG5ldyBOKDI4KTt2YXIgZT1yYihkLGEpO2lmKGUpdGhyb3cgbmV3IE4oZSk7aWYoIWQuRWIubGMpdGhyb3cgbmV3IE4oNjMpO3JldHVybiBkLkViLmxjKGQsYSxiLGMpfVxuZnVuY3Rpb24gVChhLGIpe3JldHVybiB4YihhLCh2b2lkIDAhPT1iP2I6NTExKSYxMDIzfDE2Mzg0LDApfWZ1bmN0aW9uIHliKGEsYixjKXtcInVuZGVmaW5lZFwiPT10eXBlb2YgYyYmKGM9YixiPTQzOCk7eGIoYSxifDgxOTIsYyl9ZnVuY3Rpb24gemIoYSxiKXtpZighUGEoYSkpdGhyb3cgbmV3IE4oNDQpO3ZhciBjPVIoYix7cGFyZW50OiEwfSkubm9kZTtpZighYyl0aHJvdyBuZXcgTig0NCk7Yj1NYShiKTt2YXIgZD1yYihjLGIpO2lmKGQpdGhyb3cgbmV3IE4oZCk7aWYoIWMuRWIucGMpdGhyb3cgbmV3IE4oNjMpO2MuRWIucGMoYyxiLGEpfWZ1bmN0aW9uIEFiKGEpe3ZhciBiPVIoYSx7cGFyZW50OiEwfSkubm9kZTthPU1hKGEpO3ZhciBjPWNiKGIsYSksZD1zYihiLGEsITApO2lmKGQpdGhyb3cgbmV3IE4oZCk7aWYoIWIuRWIub2MpdGhyb3cgbmV3IE4oNjMpO2lmKGMuYmMpdGhyb3cgbmV3IE4oMTApO2IuRWIub2MoYixhKTtuYihjKX1cbmZ1bmN0aW9uIGtiKGEpe2E9UihhKS5ub2RlO2lmKCFhKXRocm93IG5ldyBOKDQ0KTtpZighYS5FYi5pYyl0aHJvdyBuZXcgTigyOCk7cmV0dXJuIFBhKGxiKGEucGFyZW50KSxhLkViLmljKGEpKX1mdW5jdGlvbiBCYihhLGIpe2E9UihhLHskYjohYn0pLm5vZGU7aWYoIWEpdGhyb3cgbmV3IE4oNDQpO2lmKCFhLkViLlZiKXRocm93IG5ldyBOKDYzKTtyZXR1cm4gYS5FYi5WYihhKX1mdW5jdGlvbiBDYihhKXtyZXR1cm4gQmIoYSwhMCl9ZnVuY3Rpb24gRGIoYSxiKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP1IoYSx7JGI6ITB9KS5ub2RlOmE7aWYoIWEuRWIuU2IpdGhyb3cgbmV3IE4oNjMpO2EuRWIuU2IoYSx7bW9kZTpiJjQwOTV8YS5tb2RlJi00MDk2LHRpbWVzdGFtcDpEYXRlLm5vdygpfSl9XG5mdW5jdGlvbiBFYihhLGIpe2lmKDA+Yil0aHJvdyBuZXcgTigyOCk7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9SKGEseyRiOiEwfSkubm9kZTphO2lmKCFhLkViLlNiKXRocm93IG5ldyBOKDYzKTtpZihQKGEubW9kZSkpdGhyb3cgbmV3IE4oMzEpO2lmKDMyNzY4IT09KGEubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oMjgpO3ZhciBjPW9iKGEsXCJ3XCIpO2lmKGMpdGhyb3cgbmV3IE4oYyk7YS5FYi5TYihhLHtzaXplOmIsdGltZXN0YW1wOkRhdGUubm93KCl9KX1cbmZ1bmN0aW9uIEZiKGEsYixjKXtpZihcIlwiPT09YSl0aHJvdyBuZXcgTig0NCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe3ZhciBkPXtyOjAsXCJyK1wiOjIsdzo1NzcsXCJ3K1wiOjU3OCxhOjEwODksXCJhK1wiOjEwOTB9W2JdO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkKXRocm93IEVycm9yKGBVbmtub3duIGZpbGUgb3BlbiBtb2RlOiAke2J9YCk7Yj1kfWM9YiY2ND8oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGM/NDM4OmMpJjQwOTV8MzI3Njg6MDtpZihcIm9iamVjdFwiPT10eXBlb2YgYSl2YXIgZT1hO2Vsc2V7YT1NKGEpO3RyeXtlPVIoYSx7JGI6IShiJjEzMTA3Mil9KS5ub2RlfWNhdGNoKGgpe319ZD0hMTtpZihiJjY0KWlmKGUpe2lmKGImMTI4KXRocm93IG5ldyBOKDIwKTt9ZWxzZSBlPXhiKGEsYywwKSxkPSEwO2lmKCFlKXRocm93IG5ldyBOKDQ0KTs4MTkyPT09KGUubW9kZSY2MTQ0MCkmJihiJj0tNTEzKTtpZihiJjY1NTM2JiYhUChlLm1vZGUpKXRocm93IG5ldyBOKDU0KTtpZighZCYmKGM9XG5lPzQwOTYwPT09KGUubW9kZSY2MTQ0MCk/MzI6UChlLm1vZGUpJiYoXCJyXCIhPT1xYihiKXx8YiY1MTIpPzMxOm9iKGUscWIoYikpOjQ0KSl0aHJvdyBuZXcgTihjKTtiJjUxMiYmIWQmJkViKGUsMCk7YiY9LTEzMTcxMztlPXViKHtub2RlOmUscGF0aDpsYihlKSxmbGFnczpiLHNlZWthYmxlOiEwLHBvc2l0aW9uOjAsT2I6ZS5PYixUYzpbXSxlcnJvcjohMX0pO2UuT2Iub3BlbiYmZS5PYi5vcGVuKGUpOyFmLmxvZ1JlYWRGaWxlc3x8YiYxfHwoR2J8fChHYj17fSksYSBpbiBHYnx8KEdiW2FdPTEpKTtyZXR1cm4gZX1mdW5jdGlvbiBIYihhLGIsYyl7aWYobnVsbD09PWEuWWIpdGhyb3cgbmV3IE4oOCk7aWYoIWEuc2Vla2FibGV8fCFhLk9iLmFjKXRocm93IG5ldyBOKDcwKTtpZigwIT1jJiYxIT1jJiYyIT1jKXRocm93IG5ldyBOKDI4KTthLnBvc2l0aW9uPWEuT2IuYWMoYSxiLGMpO2EuVGM9W119XG5mdW5jdGlvbiBJYigpe058fChOPWZ1bmN0aW9uKGEsYil7dGhpcy5uYW1lPVwiRXJybm9FcnJvclwiO3RoaXMubm9kZT1iO3RoaXMuUmM9ZnVuY3Rpb24oYyl7dGhpcy5RYj1jfTt0aGlzLlJjKGEpO3RoaXMubWVzc2FnZT1cIkZTIGVycm9yXCJ9LE4ucHJvdG90eXBlPUVycm9yKCksTi5wcm90b3R5cGUuY29uc3RydWN0b3I9TixbNDRdLmZvckVhY2goYT0+e2JiW2FdPW5ldyBOKGEpO2JiW2FdLnN0YWNrPVwiPGdlbmVyaWMgZXJyb3IsIG5vIHN0YWNrPlwifSkpfXZhciBKYjtcbmZ1bmN0aW9uIEtiKGEsYixjKXthPU0oXCIvZGV2L1wiK2EpO3ZhciBkPWViKCEhYiwhIWMpO0xifHwoTGI9NjQpO3ZhciBlPUxiKys8PDh8MDtWYShlLHtvcGVuKGgpe2guc2Vla2FibGU9ITF9LGNsb3NlKCl7YyYmYy5idWZmZXImJmMuYnVmZmVyLmxlbmd0aCYmYygxMCl9LHJlYWQoaCxnLG4sayl7Zm9yKHZhciBsPTAscT0wO3E8aztxKyspe3RyeXt2YXIgbT1iKCl9Y2F0Y2gocil7dGhyb3cgbmV3IE4oMjkpO31pZih2b2lkIDA9PT1tJiYwPT09bCl0aHJvdyBuZXcgTig2KTtpZihudWxsPT09bXx8dm9pZCAwPT09bSlicmVhaztsKys7Z1tuK3FdPW19bCYmKGgubm9kZS50aW1lc3RhbXA9RGF0ZS5ub3coKSk7cmV0dXJuIGx9LHdyaXRlKGgsZyxuLGspe2Zvcih2YXIgbD0wO2w8aztsKyspdHJ5e2MoZ1tuK2xdKX1jYXRjaChxKXt0aHJvdyBuZXcgTigyOSk7fWsmJihoLm5vZGUudGltZXN0YW1wPURhdGUubm93KCkpO3JldHVybiBsfX0pO3liKGEsZCxlKX12YXIgTGIsVT17fSx2YixHYjtcbmZ1bmN0aW9uIE1iKGEsYixjKXtpZihcIi9cIj09PWIuY2hhckF0KDApKXJldHVybiBiO2E9LTEwMD09PWE/XCIvXCI6UyhhKS5wYXRoO2lmKDA9PWIubGVuZ3RoKXtpZighYyl0aHJvdyBuZXcgTig0NCk7cmV0dXJuIGF9cmV0dXJuIE0oYStcIi9cIitiKX1cbmZ1bmN0aW9uIE5iKGEsYixjKXt0cnl7dmFyIGQ9YShiKX1jYXRjaChoKXtpZihoJiZoLm5vZGUmJk0oYikhPT1NKGxiKGgubm9kZSkpKXJldHVybi01NDt0aHJvdyBoO316W2M+PjJdPWQuSmM7eltjKzQ+PjJdPWQubW9kZTtCW2MrOD4+Ml09ZC5QYzt6W2MrMTI+PjJdPWQudWlkO3pbYysxNj4+Ml09ZC5NYzt6W2MrMjA+PjJdPWQuaGM7Rj1bZC5zaXplPj4+MCwoRD1kLnNpemUsMTw9K01hdGguYWJzKEQpPzA8RD8rTWF0aC5mbG9vcihELzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKEQtKyh+fkQ+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXTt6W2MrMjQ+PjJdPUZbMF07eltjKzI4Pj4yXT1GWzFdO3pbYyszMj4+Ml09NDA5Njt6W2MrMzY+PjJdPWQuSGM7YT1kLkZjLmdldFRpbWUoKTtiPWQuT2MuZ2V0VGltZSgpO3ZhciBlPWQuSWMuZ2V0VGltZSgpO0Y9W01hdGguZmxvb3IoYS8xRTMpPj4+MCwoRD1NYXRoLmZsb29yKGEvMUUzKSwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvXG40Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKChELSsofn5EPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV07eltjKzQwPj4yXT1GWzBdO3pbYys0ND4+Ml09RlsxXTtCW2MrNDg+PjJdPWElMUUzKjFFMztGPVtNYXRoLmZsb29yKGIvMUUzKT4+PjAsKEQ9TWF0aC5mbG9vcihiLzFFMyksMTw9K01hdGguYWJzKEQpPzA8RD8rTWF0aC5mbG9vcihELzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKEQtKyh+fkQ+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXTt6W2MrNTY+PjJdPUZbMF07eltjKzYwPj4yXT1GWzFdO0JbYys2ND4+Ml09YiUxRTMqMUUzO0Y9W01hdGguZmxvb3IoZS8xRTMpPj4+MCwoRD1NYXRoLmZsb29yKGUvMUUzKSwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgoRC0rKH5+RD4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldO3pbYys3Mj4+Ml09RlswXTt6W2MrNzY+PjJdPUZbMV07QltjKzgwPj4yXT1cbmUlMUUzKjFFMztGPVtkLkFjPj4+MCwoRD1kLkFjLDE8PStNYXRoLmFicyhEKT8wPEQ/K01hdGguZmxvb3IoRC80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKChELSsofn5EPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV07eltjKzg4Pj4yXT1GWzBdO3pbYys5Mj4+Ml09RlsxXTtyZXR1cm4gMH12YXIgT2I9dm9pZCAwO2Z1bmN0aW9uIFBiKCl7dmFyIGE9eltPYj4+Ml07T2IrPTQ7cmV0dXJuIGF9XG52YXIgUWI9KGEsYik9PmIrMjA5NzE1Mj4+PjA8NDE5NDMwNS0hIWE/KGE+Pj4wKSs0Mjk0OTY3Mjk2KmI6TmFOLFJiPVswLDMxLDYwLDkxLDEyMSwxNTIsMTgyLDIxMywyNDQsMjc0LDMwNSwzMzVdLFNiPVswLDMxLDU5LDkwLDEyMCwxNTEsMTgxLDIxMiwyNDMsMjczLDMwNCwzMzRdLFViPWE9Pnt2YXIgYj1SYShhKSsxLGM9VGIoYik7YyYmU2EoYSx5LGMsYik7cmV0dXJuIGN9LFZiPXt9LFhiPSgpPT57aWYoIVdiKXt2YXIgYT17VVNFUjpcIndlYl91c2VyXCIsTE9HTkFNRTpcIndlYl91c2VyXCIsUEFUSDpcIi9cIixQV0Q6XCIvXCIsSE9NRTpcIi9ob21lL3dlYl91c2VyXCIsTEFORzooXCJvYmplY3RcIj09dHlwZW9mIG5hdmlnYXRvciYmbmF2aWdhdG9yLmxhbmd1YWdlcyYmbmF2aWdhdG9yLmxhbmd1YWdlc1swXXx8XCJDXCIpLnJlcGxhY2UoXCItXCIsXCJfXCIpK1wiLlVURi04XCIsXzpkYXx8XCIuL3RoaXMucHJvZ3JhbVwifSxiO2ZvcihiIGluIFZiKXZvaWQgMD09PVZiW2JdP2RlbGV0ZSBhW2JdOmFbYl09VmJbYl07XG52YXIgYz1bXTtmb3IoYiBpbiBhKWMucHVzaChgJHtifT0ke2FbYl19YCk7V2I9Y31yZXR1cm4gV2J9LFdiO2Z1bmN0aW9uIFliKCl7fWZ1bmN0aW9uIFpiKCl7fWZ1bmN0aW9uICRiKCl7fWZ1bmN0aW9uIGFjKCl7fWZ1bmN0aW9uIGJjKCl7fWZ1bmN0aW9uIGNjKCl7fWZ1bmN0aW9uIGRjKCl7fWZ1bmN0aW9uIGVjKCl7fWZ1bmN0aW9uIGZjKCl7fWZ1bmN0aW9uIGdjKCl7fWZ1bmN0aW9uIGhjKCl7fWZ1bmN0aW9uIGljKCl7fWZ1bmN0aW9uIGpjKCl7fWZ1bmN0aW9uIGtjKCl7fWZ1bmN0aW9uIGxjKCl7fWZ1bmN0aW9uIG1jKCl7fWZ1bmN0aW9uIG5jKCl7fWZ1bmN0aW9uIG9jKCl7fWZ1bmN0aW9uIHBjKCl7fWZ1bmN0aW9uIHFjKCl7fWZ1bmN0aW9uIHJjKCl7fWZ1bmN0aW9uIHNjKCl7fWZ1bmN0aW9uIHRjKCl7fWZ1bmN0aW9uIHVjKCl7fWZ1bmN0aW9uIHZjKCl7fWZ1bmN0aW9uIHdjKCl7fWZ1bmN0aW9uIHhjKCl7fWZ1bmN0aW9uIHljKCl7fWZ1bmN0aW9uIHpjKCl7fVxuZnVuY3Rpb24gQWMoKXt9ZnVuY3Rpb24gQmMoKXt9ZnVuY3Rpb24gQ2MoKXt9ZnVuY3Rpb24gRGMoKXt9ZnVuY3Rpb24gRWMoKXt9ZnVuY3Rpb24gRmMoKXt9ZnVuY3Rpb24gR2MoKXt9ZnVuY3Rpb24gSGMoKXt9ZnVuY3Rpb24gSWMoKXt9ZnVuY3Rpb24gSmMoKXt9ZnVuY3Rpb24gS2MoKXt9dmFyIExjPWE9PntuYT1hO2lmKCEobm9FeGl0UnVudGltZXx8MDx3YSkpe2lmKGYub25FeGl0KWYub25FeGl0KGEpO3Y9ITB9ZWEoYSxuZXcgSGEoYSkpfSxNYz1hPT57YSBpbnN0YW5jZW9mIEhhfHxcInVud2luZFwiPT1hfHxlYSgxLGEpfSxOYz1hPT57dHJ5e2EoKX1jYXRjaChiKXt1KGIpfX07XG5mdW5jdGlvbiBPYyhhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpKGZ1bmN0aW9uKGQpe3ZhciBlPWFbZF07YltkXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKCl7UGMucHVzaChkKTt0cnl7cmV0dXJuIGUuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZpbmFsbHl7dnx8KFBjLnBvcCgpPT09ZHx8dSgpLFYmJjE9PT1YJiYwPT09UGMubGVuZ3RoJiYoWD0wLE5jKFFjKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgRmliZXJzJiZGaWJlcnMuZWQoKSkpfX06ZX0pKGMpO3JldHVybiBifXZhciBYPTAsVj1udWxsLFJjPTAsUGM9W10sU2M9e30sVGM9e30sVWM9MCxWYz1udWxsLFdjPVtdO2Z1bmN0aW9uIFhjKCl7cmV0dXJuIG5ldyBQcm9taXNlKChhLGIpPT57VmM9e3Jlc29sdmU6YSxyZWplY3Q6Yn19KX1cbmZ1bmN0aW9uIFljKCl7dmFyIGE9VGIoMTYzOTYpLGI9YSsxMjtCW2E+PjJdPWI7QlthKzQ+PjJdPWIrMTYzODQ7Yj1QY1swXTt2YXIgYz1TY1tiXTt2b2lkIDA9PT1jJiYoYz1VYysrLFNjW2JdPWMsVGNbY109Yik7elthKzg+PjJdPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiBaYyhhKXtpZighdil7aWYoMD09PVgpe3ZhciBiPSExLGM9ITE7YSgoZD0wKT0+e2lmKCF2JiYoUmM9ZCxiPSEwLGMpKXtYPTI7TmMoKCk9PiRjKFYpKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgQnJvd3NlciYmQnJvd3Nlci5zYy5MYyYmQnJvd3Nlci5zYy5yZXN1bWUoKTtkPSExO3RyeXt2YXIgZT0oMCxZW1RjW3pbVis4Pj4yXV1dKSgpfWNhdGNoKG4pe2U9bixkPSEwfXZhciBoPSExO2lmKCFWKXt2YXIgZz1WYztnJiYoVmM9bnVsbCwoZD9nLnJlamVjdDpnLnJlc29sdmUpKGUpLGg9ITApfWlmKGQmJiFoKXRocm93IGU7fX0pO2M9ITA7Ynx8KFg9MSxWPVljKCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJyb3dzZXImJkJyb3dzZXIuc2MuTGMmJkJyb3dzZXIuc2MucGF1c2UoKSxOYygoKT0+YWQoVikpKX1lbHNlIDI9PT1YPyhYPTAsTmMoYmQpLGNkKFYpLFY9bnVsbCxXYy5mb3JFYWNoKGQ9PntpZighdil0cnl7aWYoZCgpLCEobm9FeGl0UnVudGltZXx8MDx3YSkpdHJ5e25hPVxuZD1uYSxMYyhkKX1jYXRjaChlKXtNYyhlKX19Y2F0Y2goZSl7TWMoZSl9fSkpOnUoYGludmFsaWQgc3RhdGU6ICR7WH1gKTtyZXR1cm4gUmN9fWZ1bmN0aW9uIGRkKGEpe3JldHVybiBaYyhiPT57YSgpLnRoZW4oYil9KX1cbnZhciBlZD17fSxaPShhLGIsYyxkLGUpPT57ZnVuY3Rpb24gaChtKXstLXdhOzAhPT1rJiZmZChrKTtyZXR1cm5cInN0cmluZ1wiPT09Yj9tP0soeSxtKTpcIlwiOlwiYm9vbGVhblwiPT09Yj8hIW06bX12YXIgZz17c3RyaW5nOm09Pnt2YXIgcj0wO2lmKG51bGwhPT1tJiZ2b2lkIDAhPT1tJiYwIT09bSl7cj1SYShtKSsxO3ZhciB4PWdkKHIpO1NhKG0seSx4LHIpO3I9eH1yZXR1cm4gcn0sYXJyYXk6bT0+e3ZhciByPWdkKG0ubGVuZ3RoKTt3LnNldChtLHIpO3JldHVybiByfX07YT1mW1wiX1wiK2FdO3ZhciBuPVtdLGs9MDtpZihkKWZvcih2YXIgbD0wO2w8ZC5sZW5ndGg7bCsrKXt2YXIgcT1nW2NbbF1dO3E/KDA9PT1rJiYoaz1oZCgpKSxuW2xdPXEoZFtsXSkpOm5bbF09ZFtsXX1jPVY7ZD1hLmFwcGx5KG51bGwsbik7ZT1lJiZlLmFzeW5jO3dhKz0xO2lmKFYhPWMpcmV0dXJuIFhjKCkudGhlbihoKTtkPWgoZCk7cmV0dXJuIGU/UHJvbWlzZS5yZXNvbHZlKGQpOmR9O1xuZnVuY3Rpb24gcGIoYSxiLGMsZCl7YXx8KGE9dGhpcyk7dGhpcy5wYXJlbnQ9YTt0aGlzLldiPWEuV2I7dGhpcy5iYz1udWxsO3RoaXMuaWQ9aWIrKzt0aGlzLm5hbWU9Yjt0aGlzLm1vZGU9Yzt0aGlzLkViPXt9O3RoaXMuT2I9e307dGhpcy5oYz1kfU9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHBiLnByb3RvdHlwZSx7cmVhZDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDM2NT09PSh0aGlzLm1vZGUmMzY1KX0sc2V0OmZ1bmN0aW9uKGEpe2E/dGhpcy5tb2RlfD0zNjU6dGhpcy5tb2RlJj0tMzY2fX0sd3JpdGU6e2dldDpmdW5jdGlvbigpe3JldHVybiAxNDY9PT0odGhpcy5tb2RlJjE0Nil9LHNldDpmdW5jdGlvbihhKXthP3RoaXMubW9kZXw9MTQ2OnRoaXMubW9kZSY9LTE0N319fSk7SWIoKTtRPUFycmF5KDQwOTYpO3diKE8sXCIvXCIpO1QoXCIvdG1wXCIpO1QoXCIvaG9tZVwiKTtUKFwiL2hvbWUvd2ViX3VzZXJcIik7XG4oZnVuY3Rpb24oKXtUKFwiL2RldlwiKTtWYSgyNTkse3JlYWQ6KCk9PjAsd3JpdGU6KGQsZSxoLGcpPT5nfSk7eWIoXCIvZGV2L251bGxcIiwyNTkpO1VhKDEyODAsWGEpO1VhKDE1MzYsWWEpO3liKFwiL2Rldi90dHlcIiwxMjgwKTt5YihcIi9kZXYvdHR5MVwiLDE1MzYpO3ZhciBhPW5ldyBVaW50OEFycmF5KDEwMjQpLGI9MCxjPSgpPT57MD09PWImJihiPU9hKGEpLmJ5dGVMZW5ndGgpO3JldHVybiBhWy0tYl19O0tiKFwicmFuZG9tXCIsYyk7S2IoXCJ1cmFuZG9tXCIsYyk7VChcIi9kZXYvc2htXCIpO1QoXCIvZGV2L3NobS90bXBcIil9KSgpO1xuKGZ1bmN0aW9uKCl7VChcIi9wcm9jXCIpO3ZhciBhPVQoXCIvcHJvYy9zZWxmXCIpO1QoXCIvcHJvYy9zZWxmL2ZkXCIpO3diKHtXYigpe3ZhciBiPWFiKGEsXCJmZFwiLDE2ODk1LDczKTtiLkViPXtlYyhjLGQpe3ZhciBlPVMoK2QpO2M9e3BhcmVudDpudWxsLFdiOntCYzpcImZha2VcIn0sRWI6e2ljOigpPT5lLnBhdGh9fTtyZXR1cm4gYy5wYXJlbnQ9Y319O3JldHVybiBifX0sXCIvcHJvYy9zZWxmL2ZkXCIpfSkoKTtcbihmdW5jdGlvbigpe2NvbnN0IGE9bmV3IE1hcDtmLnNldEF1dGhvcml6ZXI9ZnVuY3Rpb24oYixjLGQpe2M/YS5zZXQoYix7ZjpjLHZjOmR9KTphLmRlbGV0ZShiKTtyZXR1cm4gWihcInNldF9hdXRob3JpemVyXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0sW2JdKX07WWI9ZnVuY3Rpb24oYixjLGQsZSxoLGcpe2lmKGEuaGFzKGIpKXtjb25zdCB7ZjpuLHZjOmt9PWEuZ2V0KGIpO3JldHVybiBuKGssYyxkP2Q/Syh5LGQpOlwiXCI6bnVsbCxlP2U/Syh5LGUpOlwiXCI6bnVsbCxoP2g/Syh5LGgpOlwiXCI6bnVsbCxnP2c/Syh5LGcpOlwiXCI6bnVsbCl9cmV0dXJuIDB9fSkoKTtcbihmdW5jdGlvbigpe2Z1bmN0aW9uIGEoZCxlKXtjb25zdCBoPVtdO2ZvcihsZXQgZz0wOzAhPWRbZStnXTsrK2cpe2lmKDFFMzxnKXRocm93IEVycm9yKFwiQy1zdHJpbmcgbmV2ZXIgdGVybWluYXRlZCBhZnRlciAxayBjaGFyYWN0ZXJzXCIpO2gucHVzaChkW2UrZ10pfXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmgpfWNvbnN0IGI9bmV3IE1hcCxjPW5ldyBNYXA7Zi5jcmVhdGVGdW5jdGlvbj1mdW5jdGlvbihkLGUsaCxnLG4sayl7Y29uc3QgbD1iLnNpemU7Yi5zZXQobCx7ZjprLFpiOm59KTtyZXR1cm4gWihcImNyZWF0ZV9mdW5jdGlvblwiLFwibnVtYmVyXCIsXCJudW1iZXIgc3RyaW5nIG51bWJlciBudW1iZXIgbnVtYmVyIG51bWJlclwiLnNwbGl0KFwiIFwiKSxbZCxlLGgsZyxsLDBdKX07Zi5jcmVhdGVBZ2dyZWdhdGU9ZnVuY3Rpb24oZCxlLGgsZyxuLGssbCl7Y29uc3QgcT1iLnNpemU7Yi5zZXQocSx7c3RlcDprLEtjOmwsWmI6bn0pO3JldHVybiBaKFwiY3JlYXRlX2Z1bmN0aW9uXCIsXG5cIm51bWJlclwiLFwibnVtYmVyIHN0cmluZyBudW1iZXIgbnVtYmVyIG51bWJlciBudW1iZXJcIi5zcGxpdChcIiBcIiksW2QsZSxoLGcscSwxXSl9O2YuZ2V0RnVuY3Rpb25Vc2VyRGF0YT1mdW5jdGlvbihkKXtyZXR1cm4gYy5nZXQoZCl9O2YudXBkYXRlSG9vaz1mdW5jdGlvbihkLGUpe2NvbnN0IGg9Yi5zaXplO2Iuc2V0KGgsZSk7cmV0dXJuIFooXCJ1cGRhdGVfaG9va1wiLFwidm9pZFwiLFtcIm51bWJlclwiLFwibnVtYmVyXCJdLFtkLGhdKX07JGI9ZnVuY3Rpb24oZCxlLGgsZyl7ZD1iLmdldChkKTtjLnNldChlLGQuWmIpO2QuZihlLG5ldyBVaW50MzJBcnJheSh5LmJ1ZmZlcixnLGgpKTtjLmRlbGV0ZShlKX07YmM9ZnVuY3Rpb24oZCxlLGgsZyl7ZD1iLmdldChkKTtjLnNldChlLGQuWmIpO2Quc3RlcChlLG5ldyBVaW50MzJBcnJheSh5LmJ1ZmZlcixnLGgpKTtjLmRlbGV0ZShlKX07WmI9ZnVuY3Rpb24oZCxlKXtkPWIuZ2V0KGQpO2Muc2V0KGUsZC5aYik7ZC5LYyhlKTtjLmRlbGV0ZShlKX07Y2M9XG5mdW5jdGlvbihkLGUsaCxnLG4sayl7ZD1iLmdldChkKTtjb25zdCBsPXk7bj1CaWdJbnQoayk8PDMybnxCaWdJbnQobikmNDI5NDk2NzI5NW47ZChlLGEobCxoKSxhKGwsZyksbil9fSkoKTsoZnVuY3Rpb24oKXtjb25zdCBhPW5ldyBNYXA7Zi5wcm9ncmVzc0hhbmRsZXI9ZnVuY3Rpb24oYixjLGQsZSl7ZD9hLnNldChiLHtmOmQsdmM6ZX0pOmEuZGVsZXRlKGIpO3JldHVybiBaKFwicHJvZ3Jlc3NfaGFuZGxlclwiLG51bGwsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0sW2IsY10pfTthYz1mdW5jdGlvbihiKXtpZihhLmhhcyhiKSl7Y29uc3Qge2Y6Yyx2YzpkfT1hLmdldChiKTtyZXR1cm4gYyhkKX1yZXR1cm4gMH19KSgpO1xuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShrLGwpe2NvbnN0IHE9YGdldCR7a31gLG09YHNldCR7a31gO3JldHVybiBuZXcgUHJveHkobmV3IERhdGFWaWV3KHkuYnVmZmVyLGwsXCJJbnQzMlwiPT09az80OjgpLHtnZXQocix4KXtpZih4PT09cSlyZXR1cm4gZnVuY3Rpb24oQSxHKXtpZighRyl0aHJvdyBFcnJvcihcIm11c3QgYmUgbGl0dGxlIGVuZGlhblwiKTtyZXR1cm4gclt4XShBLEcpfTtpZih4PT09bSlyZXR1cm4gZnVuY3Rpb24oQSxHLEUpe2lmKCFFKXRocm93IEVycm9yKFwibXVzdCBiZSBsaXR0bGUgZW5kaWFuXCIpO3JldHVybiByW3hdKEEsRyxFKX07aWYoXCJzdHJpbmdcIj09PXR5cGVvZiB4JiZ4Lm1hdGNoKC9eKGdldCl8KHNldCkvKSl0aHJvdyBFcnJvcihcImludmFsaWQgdHlwZVwiKTtyZXR1cm4gclt4XX19KX1jb25zdCBiPVwib2JqZWN0XCI9PT10eXBlb2YgZWQsYz1uZXcgTWFwLGQ9bmV3IE1hcCxlPW5ldyBNYXAsaD1iP25ldyBTZXQ6bnVsbCxnPWI/bmV3IFNldDpudWxsLG49bmV3IE1hcDtcbnRjPWZ1bmN0aW9uKGssbCxxLG0pe24uc2V0KGs/Syh5LGspOlwiXCIse3NpemU6bCxmYzpBcnJheS5mcm9tKG5ldyBVaW50MzJBcnJheSh5LmJ1ZmZlcixtLHEpKX0pfTtmLmNyZWF0ZU1vZHVsZT1mdW5jdGlvbihrLGwscSxtKXtiJiYocS5oYW5kbGVBc3luYz1kZCk7Y29uc3Qgcj1jLnNpemU7Yy5zZXQocix7bW9kdWxlOnEsWmI6bX0pO209MDtxLnhDcmVhdGUmJihtfD0xKTtxLnhDb25uZWN0JiYobXw9Mik7cS54QmVzdEluZGV4JiYobXw9NCk7cS54RGlzY29ubmVjdCYmKG18PTgpO3EueERlc3Ryb3kmJihtfD0xNik7cS54T3BlbiYmKG18PTMyKTtxLnhDbG9zZSYmKG18PTY0KTtxLnhGaWx0ZXImJihtfD0xMjgpO3EueE5leHQmJihtfD0yNTYpO3EueEVvZiYmKG18PTUxMik7cS54Q29sdW1uJiYobXw9MTAyNCk7cS54Um93aWQmJihtfD0yMDQ4KTtxLnhVcGRhdGUmJihtfD00MDk2KTtxLnhCZWdpbiYmKG18PTgxOTIpO3EueFN5bmMmJihtfD0xNjM4NCk7cS54Q29tbWl0JiYobXw9XG4zMjc2OCk7cS54Um9sbGJhY2smJihtfD02NTUzNik7cS54RmluZEZ1bmN0aW9uJiYobXw9MTMxMDcyKTtxLnhSZW5hbWUmJihtfD0yNjIxNDQpO3JldHVybiBaKFwiY3JlYXRlX21vZHVsZVwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJzdHJpbmdcIixcIm51bWJlclwiLFwibnVtYmVyXCJdLFtrLGwscixtXSl9O2pjPWZ1bmN0aW9uKGssbCxxLG0scix4KXtsPWMuZ2V0KGwpO2Quc2V0KHIsbCk7aWYoYil7aC5kZWxldGUocik7Zm9yKGNvbnN0IEEgb2YgaClkLmRlbGV0ZShBKX1tPUFycmF5LmZyb20obmV3IFVpbnQzMkFycmF5KHkuYnVmZmVyLG0scSkpLm1hcChBPT5BP0soeSxBKTpcIlwiKTtyZXR1cm4gbC5tb2R1bGUueENyZWF0ZShrLGwuWmIsbSxyLGEoXCJJbnQzMlwiLHgpKX07aWM9ZnVuY3Rpb24oayxsLHEsbSxyLHgpe2w9Yy5nZXQobCk7ZC5zZXQocixsKTtpZihiKXtoLmRlbGV0ZShyKTtmb3IoY29uc3QgQSBvZiBoKWQuZGVsZXRlKEEpfW09QXJyYXkuZnJvbShuZXcgVWludDMyQXJyYXkoeS5idWZmZXIsXG5tLHEpKS5tYXAoQT0+QT9LKHksQSk6XCJcIik7cmV0dXJuIGwubW9kdWxlLnhDb25uZWN0KGssbC5aYixtLHIsYShcIkludDMyXCIseCkpfTtlYz1mdW5jdGlvbihrLGwpe3ZhciBxPWQuZ2V0KGspLG09bi5nZXQoXCJzcWxpdGUzX2luZGV4X2luZm9cIikuZmM7Y29uc3Qgcj17fTtyLm5Db25zdHJhaW50PUkobCttWzBdLFwiaTMyXCIpO3IuYUNvbnN0cmFpbnQ9W107dmFyIHg9SShsK21bMV0sXCIqXCIpLEE9bi5nZXQoXCJzcWxpdGUzX2luZGV4X2NvbnN0cmFpbnRcIikuc2l6ZTtmb3IodmFyIEc9MDtHPHIubkNvbnN0cmFpbnQ7KytHKXt2YXIgRT1yLmFDb25zdHJhaW50LEw9RS5wdXNoLEg9eCtHKkEsaGE9bi5nZXQoXCJzcWxpdGUzX2luZGV4X2NvbnN0cmFpbnRcIikuZmMsVz17fTtXLmlDb2x1bW49SShIK2hhWzBdLFwiaTMyXCIpO1cub3A9SShIK2hhWzFdLFwiaThcIik7Vy51c2FibGU9ISFJKEgraGFbMl0sXCJpOFwiKTtMLmNhbGwoRSxXKX1yLm5PcmRlckJ5PUkobCttWzJdLFwiaTMyXCIpO3IuYU9yZGVyQnk9XG5bXTt4PUkobCttWzNdLFwiKlwiKTtBPW4uZ2V0KFwic3FsaXRlM19pbmRleF9vcmRlcmJ5XCIpLnNpemU7Zm9yKEc9MDtHPHIubk9yZGVyQnk7KytHKUU9ci5hT3JkZXJCeSxMPUUucHVzaCxIPXgrRypBLGhhPW4uZ2V0KFwic3FsaXRlM19pbmRleF9vcmRlcmJ5XCIpLmZjLFc9e30sVy5pQ29sdW1uPUkoSCtoYVswXSxcImkzMlwiKSxXLmRlc2M9ISFJKEgraGFbMV0sXCJpOFwiKSxMLmNhbGwoRSxXKTtyLmFDb25zdHJhaW50VXNhZ2U9W107Zm9yKHg9MDt4PHIubkNvbnN0cmFpbnQ7Kyt4KXIuYUNvbnN0cmFpbnRVc2FnZS5wdXNoKHthcmd2SW5kZXg6MCxvbWl0OiExfSk7ci5pZHhOdW09SShsK21bNV0sXCJpMzJcIik7ci5pZHhTdHI9bnVsbDtyLm9yZGVyQnlDb25zdW1lZD0hIUkobCttWzhdLFwiaThcIik7ci5lc3RpbWF0ZWRDb3N0PUkobCttWzldLFwiZG91YmxlXCIpO3IuZXN0aW1hdGVkUm93cz1JKGwrbVsxMF0sXCJpMzJcIik7ci5pZHhGbGFncz1JKGwrbVsxMV0sXCJpMzJcIik7ci5jb2xVc2VkPUkobCttWzEyXSxcblwiaTMyXCIpO2s9cS5tb2R1bGUueEJlc3RJbmRleChrLHIpO3E9bi5nZXQoXCJzcWxpdGUzX2luZGV4X2luZm9cIikuZmM7bT1JKGwrcVs0XSxcIipcIik7eD1uLmdldChcInNxbGl0ZTNfaW5kZXhfY29uc3RyYWludF91c2FnZVwiKS5zaXplO2ZvcihMPTA7TDxyLm5Db25zdHJhaW50OysrTClBPW0rTCp4LEU9ci5hQ29uc3RyYWludFVzYWdlW0xdLEg9bi5nZXQoXCJzcWxpdGUzX2luZGV4X2NvbnN0cmFpbnRfdXNhZ2VcIikuZmMsSihBK0hbMF0sRS5hcmd2SW5kZXgsXCJpMzJcIiksSihBK0hbMV0sRS5vbWl0PzE6MCxcImk4XCIpO0oobCtxWzVdLHIuaWR4TnVtLFwiaTMyXCIpO1wic3RyaW5nXCI9PT10eXBlb2Ygci5pZHhTdHImJihtPVJhKHIuaWR4U3RyKSx4PVooXCJzcWxpdGUzX21hbGxvY1wiLFwibnVtYmVyXCIsW1wibnVtYmVyXCJdLFttKzFdKSxTYShyLmlkeFN0cix5LHgsbSsxKSxKKGwrcVs2XSx4LFwiKlwiKSxKKGwrcVs3XSwxLFwiaTMyXCIpKTtKKGwrcVs4XSxyLm9yZGVyQnlDb25zdW1lZCxcImkzMlwiKTtKKGwrcVs5XSxcbnIuZXN0aW1hdGVkQ29zdCxcImRvdWJsZVwiKTtKKGwrcVsxMF0sci5lc3RpbWF0ZWRSb3dzLFwiaTMyXCIpO0oobCtxWzExXSxyLmlkeEZsYWdzLFwiaTMyXCIpO3JldHVybiBrfTtsYz1mdW5jdGlvbihrKXtjb25zdCBsPWQuZ2V0KGspO2I/aC5hZGQoayk6ZC5kZWxldGUoayk7cmV0dXJuIGwubW9kdWxlLnhEaXNjb25uZWN0KGspfTtrYz1mdW5jdGlvbihrKXtjb25zdCBsPWQuZ2V0KGspO2I/aC5hZGQoayk6ZC5kZWxldGUoayk7cmV0dXJuIGwubW9kdWxlLnhEZXN0cm95KGspfTtwYz1mdW5jdGlvbihrLGwpe2NvbnN0IHE9ZC5nZXQoayk7ZS5zZXQobCxxKTtpZihiKXtnLmRlbGV0ZShsKTtmb3IoY29uc3QgbSBvZiBnKWUuZGVsZXRlKG0pfXJldHVybiBxLm1vZHVsZS54T3BlbihrLGwpfTtmYz1mdW5jdGlvbihrKXtjb25zdCBsPWUuZ2V0KGspO2I/Zy5hZGQoayk6ZS5kZWxldGUoayk7cmV0dXJuIGwubW9kdWxlLnhDbG9zZShrKX07bWM9ZnVuY3Rpb24oayl7cmV0dXJuIGUuZ2V0KGspLm1vZHVsZS54RW9mKGspP1xuMTowfTtuYz1mdW5jdGlvbihrLGwscSxtLHIpe2NvbnN0IHg9ZS5nZXQoayk7cT1xP3E/Syh5LHEpOlwiXCI6bnVsbDtyPW5ldyBVaW50MzJBcnJheSh5LmJ1ZmZlcixyLG0pO3JldHVybiB4Lm1vZHVsZS54RmlsdGVyKGssbCxxLHIpfTtvYz1mdW5jdGlvbihrKXtyZXR1cm4gZS5nZXQoaykubW9kdWxlLnhOZXh0KGspfTtnYz1mdW5jdGlvbihrLGwscSl7cmV0dXJuIGUuZ2V0KGspLm1vZHVsZS54Q29sdW1uKGssbCxxKX07c2M9ZnVuY3Rpb24oayxsKXtyZXR1cm4gZS5nZXQoaykubW9kdWxlLnhSb3dpZChrLGEoXCJCaWdJbnQ2NFwiLGwpKX07dmM9ZnVuY3Rpb24oayxsLHEsbSl7Y29uc3Qgcj1kLmdldChrKTtxPW5ldyBVaW50MzJBcnJheSh5LmJ1ZmZlcixxLGwpO3JldHVybiByLm1vZHVsZS54VXBkYXRlKGsscSxhKFwiQmlnSW50NjRcIixtKSl9O2RjPWZ1bmN0aW9uKGspe3JldHVybiBkLmdldChrKS5tb2R1bGUueEJlZ2luKGspfTt1Yz1mdW5jdGlvbihrKXtyZXR1cm4gZC5nZXQoaykubW9kdWxlLnhTeW5jKGspfTtcbmhjPWZ1bmN0aW9uKGspe3JldHVybiBkLmdldChrKS5tb2R1bGUueENvbW1pdChrKX07cmM9ZnVuY3Rpb24oayl7cmV0dXJuIGQuZ2V0KGspLm1vZHVsZS54Um9sbGJhY2soayl9O3FjPWZ1bmN0aW9uKGssbCl7Y29uc3QgcT1kLmdldChrKTtsPWw/Syh5LGwpOlwiXCI7cmV0dXJuIHEubW9kdWxlLnhSZW5hbWUoayxsKX19KSgpO1xuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShnLG4pe2NvbnN0IGs9YGdldCR7Z31gLGw9YHNldCR7Z31gO3JldHVybiBuZXcgUHJveHkobmV3IERhdGFWaWV3KHkuYnVmZmVyLG4sXCJJbnQzMlwiPT09Zz80OjgpLHtnZXQocSxtKXtpZihtPT09aylyZXR1cm4gZnVuY3Rpb24ocix4KXtpZigheCl0aHJvdyBFcnJvcihcIm11c3QgYmUgbGl0dGxlIGVuZGlhblwiKTtyZXR1cm4gcVttXShyLHgpfTtpZihtPT09bClyZXR1cm4gZnVuY3Rpb24ocix4LEEpe2lmKCFBKXRocm93IEVycm9yKFwibXVzdCBiZSBsaXR0bGUgZW5kaWFuXCIpO3JldHVybiBxW21dKHIseCxBKX07aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBtJiZtLm1hdGNoKC9eKGdldCl8KHNldCkvKSl0aHJvdyBFcnJvcihcImludmFsaWQgdHlwZVwiKTtyZXR1cm4gcVttXX19KX1mdW5jdGlvbiBiKGcpe2c+Pj0yO3JldHVybiBCW2ddK0JbZysxXSoyKiozMn1jb25zdCBjPVwib2JqZWN0XCI9PT10eXBlb2YgZWQsZD1uZXcgTWFwLGU9bmV3IE1hcDtmLnJlZ2lzdGVyVkZTPVxuZnVuY3Rpb24oZyxuKXtpZihaKFwic3FsaXRlM192ZnNfZmluZFwiLFwibnVtYmVyXCIsW1wic3RyaW5nXCJdLFtnLm5hbWVdKSl0aHJvdyBFcnJvcihgVkZTICcke2cubmFtZX0nIGFscmVhZHkgcmVnaXN0ZXJlZGApO2MmJihnLmhhbmRsZUFzeW5jPWRkKTt2YXIgaz1nLmNkPz82NDtjb25zdCBsPWYuX21hbGxvYyg0KTtuPVooXCJyZWdpc3Rlcl92ZnNcIixcIm51bWJlclwiLFtcInN0cmluZ1wiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSxbZy5uYW1lLGssbj8xOjAsbF0pO258fChrPUkobCxcIipcIiksZC5zZXQoayxnKSk7Zi5fZnJlZShsKTtyZXR1cm4gbn07Y29uc3QgaD1jP25ldyBTZXQ6bnVsbDt5Yz1mdW5jdGlvbihnKXtjb25zdCBuPWUuZ2V0KGcpO2M/aC5hZGQoZyk6ZS5kZWxldGUoZyk7cmV0dXJuIG4ueENsb3NlKGcpfTtGYz1mdW5jdGlvbihnLG4sayxsKXtyZXR1cm4gZS5nZXQoZykueFJlYWQoZyx5LnN1YmFycmF5KG4sbitrKSxiKGwpKX07S2M9ZnVuY3Rpb24oZyxuLGssbCl7cmV0dXJuIGUuZ2V0KGcpLnhXcml0ZShnLFxueS5zdWJhcnJheShuLG4rayksYihsKSl9O0ljPWZ1bmN0aW9uKGcsbil7cmV0dXJuIGUuZ2V0KGcpLnhUcnVuY2F0ZShnLGIobikpfTtIYz1mdW5jdGlvbihnLG4pe3JldHVybiBlLmdldChnKS54U3luYyhnLG4pfTtDYz1mdW5jdGlvbihnLG4pe2NvbnN0IGs9ZS5nZXQoZyk7bj1hKFwiQmlnSW50NjRcIixuKTtyZXR1cm4gay54RmlsZVNpemUoZyxuKX07RGM9ZnVuY3Rpb24oZyxuKXtyZXR1cm4gZS5nZXQoZykueExvY2soZyxuKX07SmM9ZnVuY3Rpb24oZyxuKXtyZXR1cm4gZS5nZXQoZykueFVubG9jayhnLG4pfTt4Yz1mdW5jdGlvbihnLG4pe2NvbnN0IGs9ZS5nZXQoZyk7bj1hKFwiSW50MzJcIixuKTtyZXR1cm4gay54Q2hlY2tSZXNlcnZlZExvY2soZyxuKX07QmM9ZnVuY3Rpb24oZyxuLGspe2NvbnN0IGw9ZS5nZXQoZyk7az1uZXcgRGF0YVZpZXcoeS5idWZmZXIsayk7cmV0dXJuIGwueEZpbGVDb250cm9sKGcsbixrKX07R2M9ZnVuY3Rpb24oZyl7cmV0dXJuIGUuZ2V0KGcpLnhTZWN0b3JTaXplKGcpfTtcbkFjPWZ1bmN0aW9uKGcpe3JldHVybiBlLmdldChnKS54RGV2aWNlQ2hhcmFjdGVyaXN0aWNzKGcpfTtFYz1mdW5jdGlvbihnLG4sayxsLHEpe2c9ZC5nZXQoZyk7ZS5zZXQoayxnKTtpZihjKXtoLmRlbGV0ZShrKTtmb3IodmFyIG0gb2YgaCllLmRlbGV0ZShtKX1tPW51bGw7aWYobCY2NCl7bT0xO2NvbnN0IHI9W107Zm9yKDttOyl7Y29uc3QgeD15W24rK107aWYoeClyLnB1c2goeCk7ZWxzZSBzd2l0Y2goeVtuXXx8KG09bnVsbCksbSl7Y2FzZSAxOnIucHVzaCg2Myk7bT0yO2JyZWFrO2Nhc2UgMjpyLnB1c2goNjEpO209MzticmVhaztjYXNlIDM6ci5wdXNoKDM4KSxtPTJ9fW09KG5ldyBUZXh0RGVjb2RlcikuZGVjb2RlKG5ldyBVaW50OEFycmF5KHIpKX1lbHNlIG4mJihtPW4/Syh5LG4pOlwiXCIpO3E9YShcIkludDMyXCIscSk7cmV0dXJuIGcueE9wZW4obSxrLGwscSl9O3pjPWZ1bmN0aW9uKGcsbixrKXtyZXR1cm4gZC5nZXQoZykueERlbGV0ZShuP0soeSxuKTpcIlwiLGspfTt3Yz1mdW5jdGlvbihnLFxubixrLGwpe2c9ZC5nZXQoZyk7bD1hKFwiSW50MzJcIixsKTtyZXR1cm4gZy54QWNjZXNzKG4/Syh5LG4pOlwiXCIsayxsKX19KSgpO1xudmFyIGtkPXthOihhLGIsYyxkKT0+e3UoYEFzc2VydGlvbiBmYWlsZWQ6ICR7YT9LKHksYSk6XCJcIn0sIGF0OiBgK1tiP2I/Syh5LGIpOlwiXCI6XCJ1bmtub3duIGZpbGVuYW1lXCIsYyxkP2Q/Syh5LGQpOlwiXCI6XCJ1bmtub3duIGZ1bmN0aW9uXCJdKX0sSzpmdW5jdGlvbihhLGIpe3RyeXtyZXR1cm4gYT1hP0soeSxhKTpcIlwiLERiKGEsYiksMH1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztyZXR1cm4tYy5RYn19LE06ZnVuY3Rpb24oYSxiLGMpe3RyeXtiPWI/Syh5LGIpOlwiXCI7Yj1NYihhLGIpO2lmKGMmLTgpcmV0dXJuLTI4O3ZhciBkPVIoYix7JGI6ITB9KS5ub2RlO2lmKCFkKXJldHVybi00NDthPVwiXCI7YyY0JiYoYSs9XCJyXCIpO2MmMiYmKGErPVwid1wiKTtjJjEmJihhKz1cInhcIik7cmV0dXJuIGEmJm9iKGQsYSk/LTI6MH1jYXRjaChlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1lLm5hbWUpdGhyb3cgZTtcbnJldHVybi1lLlFifX0sTDpmdW5jdGlvbihhLGIpe3RyeXt2YXIgYz1TKGEpO0RiKGMubm9kZSxiKTtyZXR1cm4gMH1jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5RYn19LEo6ZnVuY3Rpb24oYSl7dHJ5e3ZhciBiPVMoYSkubm9kZTt2YXIgYz1cInN0cmluZ1wiPT10eXBlb2YgYj9SKGIseyRiOiEwfSkubm9kZTpiO2lmKCFjLkViLlNiKXRocm93IG5ldyBOKDYzKTtjLkViLlNiKGMse3RpbWVzdGFtcDpEYXRlLm5vdygpfSk7cmV0dXJuIDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUWJ9fSxiOmZ1bmN0aW9uKGEsYixjKXtPYj1jO3RyeXt2YXIgZD1TKGEpO3N3aXRjaChiKXtjYXNlIDA6dmFyIGU9UGIoKTtpZigwPmUpcmV0dXJuLTI4O2Zvcig7aGJbZV07KWUrKztyZXR1cm4gdWIoZCxlKS5ZYjtjYXNlIDE6Y2FzZSAyOnJldHVybiAwO1xuY2FzZSAzOnJldHVybiBkLmZsYWdzO2Nhc2UgNDpyZXR1cm4gZT1QYigpLGQuZmxhZ3N8PWUsMDtjYXNlIDU6cmV0dXJuIGU9UGIoKSxvYVtlKzA+PjFdPTIsMDtjYXNlIDY6Y2FzZSA3OnJldHVybiAwO2Nhc2UgMTY6Y2FzZSA4OnJldHVybi0yODtjYXNlIDk6cmV0dXJuIHpbamQoKT4+Ml09MjgsLTE7ZGVmYXVsdDpyZXR1cm4tMjh9fWNhdGNoKGgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWgubmFtZSl0aHJvdyBoO3JldHVybi1oLlFifX0sSTpmdW5jdGlvbihhLGIpe3RyeXt2YXIgYz1TKGEpO3JldHVybiBOYihCYixjLnBhdGgsYil9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUWJ9fSxuOmZ1bmN0aW9uKGEsYixjKXtiPVFiKGIsYyk7dHJ5e2lmKGlzTmFOKGIpKXJldHVybiA2MTt2YXIgZD1TKGEpO2lmKDA9PT0oZC5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTigyOCk7XG5FYihkLm5vZGUsYik7cmV0dXJuIDB9Y2F0Y2goZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ZS5uYW1lKXRocm93IGU7cmV0dXJuLWUuUWJ9fSxDOmZ1bmN0aW9uKGEsYil7dHJ5e2lmKDA9PT1iKXJldHVybi0yODt2YXIgYz1SYShcIi9cIikrMTtpZihiPGMpcmV0dXJuLTY4O1NhKFwiL1wiLHksYSxiKTtyZXR1cm4gY31jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5RYn19LEY6ZnVuY3Rpb24oYSxiKXt0cnl7cmV0dXJuIGE9YT9LKHksYSk6XCJcIixOYihDYixhLGIpfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybi1jLlFifX0sejpmdW5jdGlvbihhLGIsYyl7dHJ5e3JldHVybiBiPWI/Syh5LGIpOlwiXCIsYj1NYihhLGIpLGI9TShiKSxcIi9cIj09PWJbYi5sZW5ndGgtMV0mJihiPWIuc3Vic3RyKDAsXG5iLmxlbmd0aC0xKSksVChiLGMpLDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuLWQuUWJ9fSxFOmZ1bmN0aW9uKGEsYixjLGQpe3RyeXtiPWI/Syh5LGIpOlwiXCI7dmFyIGU9ZCYyNTY7Yj1NYihhLGIsZCY0MDk2KTtyZXR1cm4gTmIoZT9DYjpCYixiLGMpfWNhdGNoKGgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWgubmFtZSl0aHJvdyBoO3JldHVybi1oLlFifX0seTpmdW5jdGlvbihhLGIsYyxkKXtPYj1kO3RyeXtiPWI/Syh5LGIpOlwiXCI7Yj1NYihhLGIpO3ZhciBlPWQ/UGIoKTowO3JldHVybiBGYihiLGMsZSkuWWJ9Y2F0Y2goaCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09aC5uYW1lKXRocm93IGg7cmV0dXJuLWguUWJ9fSx2OmZ1bmN0aW9uKGEsYixjLGQpe3RyeXtiPWI/Syh5LGIpOlwiXCI7Yj1NYihhLGIpO2lmKDA+PWQpcmV0dXJuLTI4O1xudmFyIGU9a2IoYiksaD1NYXRoLm1pbihkLFJhKGUpKSxnPXdbYytoXTtTYShlLHksYyxkKzEpO3dbYytoXT1nO3JldHVybiBofWNhdGNoKG4pe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PW4ubmFtZSl0aHJvdyBuO3JldHVybi1uLlFifX0sdTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIGE9YT9LKHksYSk6XCJcIixBYihhKSwwfWNhdGNoKGIpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWIubmFtZSl0aHJvdyBiO3JldHVybi1iLlFifX0sRzpmdW5jdGlvbihhLGIpe3RyeXtyZXR1cm4gYT1hP0soeSxhKTpcIlwiLE5iKEJiLGEsYil9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7cmV0dXJuLWMuUWJ9fSxyOmZ1bmN0aW9uKGEsYixjKXt0cnl7Yj1iP0soeSxiKTpcIlwiO2I9TWIoYSxiKTtpZigwPT09Yyl7YT1iO3ZhciBkPVIoYSx7cGFyZW50OiEwfSkubm9kZTtpZighZCl0aHJvdyBuZXcgTig0NCk7XG52YXIgZT1NYShhKSxoPWNiKGQsZSksZz1zYihkLGUsITEpO2lmKGcpdGhyb3cgbmV3IE4oZyk7aWYoIWQuRWIucWMpdGhyb3cgbmV3IE4oNjMpO2lmKGguYmMpdGhyb3cgbmV3IE4oMTApO2QuRWIucWMoZCxlKTtuYihoKX1lbHNlIDUxMj09PWM/QWIoYik6dShcIkludmFsaWQgZmxhZ3MgcGFzc2VkIHRvIHVubGlua2F0XCIpO3JldHVybiAwfWNhdGNoKG4pe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PW4ubmFtZSl0aHJvdyBuO3JldHVybi1uLlFifX0scTpmdW5jdGlvbihhLGIsYyl7dHJ5e2I9Yj9LKHksYik6XCJcIjtiPU1iKGEsYiwhMCk7aWYoYyl7dmFyIGQ9QltjPj4yXSs0Mjk0OTY3Mjk2KnpbYys0Pj4yXSxlPXpbYys4Pj4yXTtoPTFFMypkK2UvMUU2O2MrPTE2O2Q9QltjPj4yXSs0Mjk0OTY3Mjk2KnpbYys0Pj4yXTtlPXpbYys4Pj4yXTtnPTFFMypkK2UvMUU2fWVsc2UgdmFyIGg9RGF0ZS5ub3coKSxnPWg7YT1oO3ZhciBuPVIoYix7JGI6ITB9KS5ub2RlO1xubi5FYi5TYihuLHt0aW1lc3RhbXA6TWF0aC5tYXgoYSxnKX0pO3JldHVybiAwfWNhdGNoKGspe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWsubmFtZSl0aHJvdyBrO3JldHVybi1rLlFifX0sazpmdW5jdGlvbihhLGIsYyl7YT1uZXcgRGF0ZSgxRTMqUWIoYSxiKSk7eltjPj4yXT1hLmdldFNlY29uZHMoKTt6W2MrND4+Ml09YS5nZXRNaW51dGVzKCk7eltjKzg+PjJdPWEuZ2V0SG91cnMoKTt6W2MrMTI+PjJdPWEuZ2V0RGF0ZSgpO3pbYysxNj4+Ml09YS5nZXRNb250aCgpO3pbYysyMD4+Ml09YS5nZXRGdWxsWWVhcigpLTE5MDA7eltjKzI0Pj4yXT1hLmdldERheSgpO2I9YS5nZXRGdWxsWWVhcigpO3pbYysyOD4+Ml09KDAhPT1iJTR8fDA9PT1iJTEwMCYmMCE9PWIlNDAwP1NiOlJiKVthLmdldE1vbnRoKCldK2EuZ2V0RGF0ZSgpLTF8MDt6W2MrMzY+PjJdPS0oNjAqYS5nZXRUaW1lem9uZU9mZnNldCgpKTtiPShuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksXG42LDEpKS5nZXRUaW1lem9uZU9mZnNldCgpO3ZhciBkPShuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksMCwxKSkuZ2V0VGltZXpvbmVPZmZzZXQoKTt6W2MrMzI+PjJdPShiIT1kJiZhLmdldFRpbWV6b25lT2Zmc2V0KCk9PU1hdGgubWluKGQsYikpfDB9LGk6ZnVuY3Rpb24oYSxiLGMsZCxlLGgsZyxuKXtlPVFiKGUsaCk7dHJ5e2lmKGlzTmFOKGUpKXJldHVybiA2MTt2YXIgaz1TKGQpO2lmKDAhPT0oYiYyKSYmMD09PShjJjIpJiYyIT09KGsuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oMik7aWYoMT09PShrLmZsYWdzJjIwOTcxNTUpKXRocm93IG5ldyBOKDIpO2lmKCFrLk9iLm1jKXRocm93IG5ldyBOKDQzKTt2YXIgbD1rLk9iLm1jKGssYSxlLGIsYyk7dmFyIHE9bC5RYzt6W2c+PjJdPWwuRWM7QltuPj4yXT1xO3JldHVybiAwfWNhdGNoKG0pe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PW0ubmFtZSl0aHJvdyBtO3JldHVybi1tLlFifX0sajpmdW5jdGlvbihhLFxuYixjLGQsZSxoLGcpe2g9UWIoaCxnKTt0cnl7aWYoaXNOYU4oaCkpcmV0dXJuIDYxO3ZhciBuPVMoZSk7aWYoYyYyKXtpZigzMjc2OCE9PShuLm5vZGUubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oNDMpO2QmMnx8bi5PYi5uYyYmbi5PYi5uYyhuLHkuc2xpY2UoYSxhK2IpLGgsYixkKX19Y2F0Y2goayl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ay5uYW1lKXRocm93IGs7cmV0dXJuLWsuUWJ9fSxzOihhLGIsYyk9PntmdW5jdGlvbiBkKGspe3JldHVybihrPWsudG9UaW1lU3RyaW5nKCkubWF0Y2goL1xcKChbQS1aYS16IF0rKVxcKSQvKSk/a1sxXTpcIkdNVFwifXZhciBlPShuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSxoPW5ldyBEYXRlKGUsMCwxKSxnPW5ldyBEYXRlKGUsNiwxKTtlPWguZ2V0VGltZXpvbmVPZmZzZXQoKTt2YXIgbj1nLmdldFRpbWV6b25lT2Zmc2V0KCk7QlthPj4yXT02MCpNYXRoLm1heChlLG4pO3pbYj4+Ml09TnVtYmVyKGUhPW4pO2E9ZChoKTtcbmI9ZChnKTthPVViKGEpO2I9VWIoYik7bjxlPyhCW2M+PjJdPWEsQltjKzQ+PjJdPWIpOihCW2M+PjJdPWIsQltjKzQ+PjJdPWEpfSxlOigpPT5EYXRlLm5vdygpLGQ6KCk9PnBlcmZvcm1hbmNlLm5vdygpLG86YT0+e3ZhciBiPXkubGVuZ3RoO2E+Pj49MDtpZigyMTQ3NDgzNjQ4PGEpcmV0dXJuITE7Zm9yKHZhciBjPTE7ND49YztjKj0yKXt2YXIgZD1iKigxKy4yL2MpO2Q9TWF0aC5taW4oZCxhKzEwMDY2MzI5Nik7dmFyIGU9TWF0aDtkPU1hdGgubWF4KGEsZCk7YTp7ZT0oZS5taW4uY2FsbChlLDIxNDc0ODM2NDgsZCsoNjU1MzYtZCU2NTUzNiklNjU1MzYpLW1hLmJ1ZmZlci5ieXRlTGVuZ3RoKzY1NTM1KS82NTUzNjt0cnl7bWEuZ3JvdyhlKTtyYSgpO3ZhciBoPTE7YnJlYWsgYX1jYXRjaChnKXt9aD12b2lkIDB9aWYoaClyZXR1cm4hMH1yZXR1cm4hMX0sQTooYSxiKT0+e3ZhciBjPTA7WGIoKS5mb3JFYWNoKChkLGUpPT57dmFyIGg9YitjO2U9QlthKzQqZT4+Ml09aDtmb3IoaD1cbjA7aDxkLmxlbmd0aDsrK2gpd1tlKys+PjBdPWQuY2hhckNvZGVBdChoKTt3W2U+PjBdPTA7Yys9ZC5sZW5ndGgrMX0pO3JldHVybiAwfSxCOihhLGIpPT57dmFyIGM9WGIoKTtCW2E+PjJdPWMubGVuZ3RoO3ZhciBkPTA7Yy5mb3JFYWNoKGU9PmQrPWUubGVuZ3RoKzEpO0JbYj4+Ml09ZDtyZXR1cm4gMH0sZjpmdW5jdGlvbihhKXt0cnl7dmFyIGI9UyhhKTtpZihudWxsPT09Yi5ZYil0aHJvdyBuZXcgTig4KTtiLnJjJiYoYi5yYz1udWxsKTt0cnl7Yi5PYi5jbG9zZSYmYi5PYi5jbG9zZShiKX1jYXRjaChjKXt0aHJvdyBjO31maW5hbGx5e2hiW2IuWWJdPW51bGx9Yi5ZYj1udWxsO3JldHVybiAwfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybiBjLlFifX0scDpmdW5jdGlvbihhLGIpe3RyeXt2YXIgYz1TKGEpO3dbYj4+MF09Yy5VYj8yOlAoYy5tb2RlKT8zOjQwOTYwPT09KGMubW9kZSY2MTQ0MCk/NzpcbjQ7b2FbYisyPj4xXT0wO0Y9WzAsKEQ9MCwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgoRC0rKH5+RD4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldO3pbYis4Pj4yXT1GWzBdO3pbYisxMj4+Ml09RlsxXTtGPVswLChEPTAsMTw9K01hdGguYWJzKEQpPzA8RD8rTWF0aC5mbG9vcihELzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKEQtKyh+fkQ+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXTt6W2IrMTY+PjJdPUZbMF07eltiKzIwPj4yXT1GWzFdO3JldHVybiAwfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybiBkLlFifX0seDpmdW5jdGlvbihhLGIsYyxkKXt0cnl7YTp7dmFyIGU9UyhhKTthPWI7Zm9yKHZhciBoLGc9Yj0wO2c8YztnKyspe3ZhciBuPUJbYT4+Ml0saz1CW2ErND4+Ml07YSs9ODt2YXIgbD1lLHE9bixtPWsscj1oLHg9XG53O2lmKDA+bXx8MD5yKXRocm93IG5ldyBOKDI4KTtpZihudWxsPT09bC5ZYil0aHJvdyBuZXcgTig4KTtpZigxPT09KGwuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oOCk7aWYoUChsLm5vZGUubW9kZSkpdGhyb3cgbmV3IE4oMzEpO2lmKCFsLk9iLnJlYWQpdGhyb3cgbmV3IE4oMjgpO3ZhciBBPVwidW5kZWZpbmVkXCIhPXR5cGVvZiByO2lmKCFBKXI9bC5wb3NpdGlvbjtlbHNlIGlmKCFsLnNlZWthYmxlKXRocm93IG5ldyBOKDcwKTt2YXIgRz1sLk9iLnJlYWQobCx4LHEsbSxyKTtBfHwobC5wb3NpdGlvbis9Ryk7dmFyIEU9RztpZigwPkUpe3ZhciBMPS0xO2JyZWFrIGF9Yis9RTtpZihFPGspYnJlYWs7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBoJiYoaCs9RSl9TD1ifUJbZD4+Ml09TDtyZXR1cm4gMH1jYXRjaChIKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1ILm5hbWUpdGhyb3cgSDtyZXR1cm4gSC5RYn19LG06ZnVuY3Rpb24oYSxiLGMsZCxlKXtiPVxuUWIoYixjKTt0cnl7aWYoaXNOYU4oYikpcmV0dXJuIDYxO3ZhciBoPVMoYSk7SGIoaCxiLGQpO0Y9W2gucG9zaXRpb24+Pj4wLChEPWgucG9zaXRpb24sMTw9K01hdGguYWJzKEQpPzA8RD8rTWF0aC5mbG9vcihELzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKEQtKyh+fkQ+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXTt6W2U+PjJdPUZbMF07eltlKzQ+PjJdPUZbMV07aC5yYyYmMD09PWImJjA9PT1kJiYoaC5yYz1udWxsKTtyZXR1cm4gMH1jYXRjaChnKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1nLm5hbWUpdGhyb3cgZztyZXR1cm4gZy5RYn19LEQ6ZnVuY3Rpb24oYSl7dHJ5e3ZhciBiPVMoYSk7cmV0dXJuIFpjKGM9Pnt2YXIgZD1iLm5vZGUuV2I7ZC50eXBlLlNjP2QudHlwZS5TYyhkLCExLGU9PntlP2MoMjkpOmMoMCl9KTpjKDApfSl9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7XG5yZXR1cm4gYy5RYn19LHQ6ZnVuY3Rpb24oYSxiLGMsZCl7dHJ5e2E6e3ZhciBlPVMoYSk7YT1iO2Zvcih2YXIgaCxnPWI9MDtnPGM7ZysrKXt2YXIgbj1CW2E+PjJdLGs9QlthKzQ+PjJdO2ErPTg7dmFyIGw9ZSxxPW4sbT1rLHI9aCx4PXc7aWYoMD5tfHwwPnIpdGhyb3cgbmV3IE4oMjgpO2lmKG51bGw9PT1sLlliKXRocm93IG5ldyBOKDgpO2lmKDA9PT0obC5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTig4KTtpZihQKGwubm9kZS5tb2RlKSl0aHJvdyBuZXcgTigzMSk7aWYoIWwuT2Iud3JpdGUpdGhyb3cgbmV3IE4oMjgpO2wuc2Vla2FibGUmJmwuZmxhZ3MmMTAyNCYmSGIobCwwLDIpO3ZhciBBPVwidW5kZWZpbmVkXCIhPXR5cGVvZiByO2lmKCFBKXI9bC5wb3NpdGlvbjtlbHNlIGlmKCFsLnNlZWthYmxlKXRocm93IG5ldyBOKDcwKTt2YXIgRz1sLk9iLndyaXRlKGwseCxxLG0scix2b2lkIDApO0F8fChsLnBvc2l0aW9uKz1HKTt2YXIgRT1HO2lmKDA+RSl7dmFyIEw9LTE7YnJlYWsgYX1iKz1cbkU7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBoJiYoaCs9RSl9TD1ifUJbZD4+Ml09TDtyZXR1cm4gMH1jYXRjaChIKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1ILm5hbWUpdGhyb3cgSDtyZXR1cm4gSC5RYn19LHNhOlliLE86WmIsaGE6JGIsY2E6YWMsWjpiYyxIOmNjLGxhOmRjLHc6ZWMsZzpmYyxvYTpnYyxqYTpoYyxlYTppYyxmYTpqYyxoOmtjLGw6bGMscGE6bWMscmE6bmMscWE6b2MsZGE6cGMsZ2E6cWMsaWE6cmMsbmE6c2MsYzp0YyxrYTp1YyxtYTp2YyxhYTp3YyxWOnhjLCQ6eWMsYmE6emMsUzpBYyxVOkJjLFk6Q2MsWDpEYyxSOkVjLFE6RmMsVDpHYyxfOkhjLE46SWMsVzpKYyxQOktjfSxZPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShjKXtjPWMuZXhwb3J0cztZPWM9T2MoYyk7bWE9WS50YTtyYSgpO3RhLnVuc2hpZnQoWS51YSk7Qy0tO2YubW9uaXRvclJ1bkRlcGVuZGVuY2llcyYmZi5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEMpO2lmKDA9PUMmJlxuKG51bGwhPT15YSYmKGNsZWFySW50ZXJ2YWwoeWEpLHlhPW51bGwpLHphKSl7dmFyIGQ9emE7emE9bnVsbDtkKCl9cmV0dXJuIGN9dmFyIGI9e2E6a2R9O0MrKztmLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMmJmYubW9uaXRvclJ1bkRlcGVuZGVuY2llcyhDKTtpZihmLmluc3RhbnRpYXRlV2FzbSl0cnl7cmV0dXJuIGYuaW5zdGFudGlhdGVXYXNtKGIsYSl9Y2F0Y2goYyl7dChgTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogJHtjfWApLGJhKGMpfUdhKGIsZnVuY3Rpb24oYyl7YShjLmluc3RhbmNlKX0pLmNhdGNoKGJhKTtyZXR1cm57fX0oKTtmLl9zcWxpdGUzX3Zmc19maW5kPWE9PihmLl9zcWxpdGUzX3Zmc19maW5kPVkudmEpKGEpO2YuX3NxbGl0ZTNfbWFsbG9jPWE9PihmLl9zcWxpdGUzX21hbGxvYz1ZLndhKShhKTtmLl9zcWxpdGUzX2ZyZWU9YT0+KGYuX3NxbGl0ZTNfZnJlZT1ZLnhhKShhKTtcbmYuX3NxbGl0ZTNfcHJlcGFyZV92Mj0oYSxiLGMsZCxlKT0+KGYuX3NxbGl0ZTNfcHJlcGFyZV92Mj1ZLnlhKShhLGIsYyxkLGUpO2YuX3NxbGl0ZTNfc3RlcD1hPT4oZi5fc3FsaXRlM19zdGVwPVkuemEpKGEpO2YuX3NxbGl0ZTNfY29sdW1uX2ludDY0PShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5faW50NjQ9WS5BYSkoYSxiKTtmLl9zcWxpdGUzX2NvbHVtbl9pbnQ9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9pbnQ9WS5CYSkoYSxiKTtmLl9zcWxpdGUzX2ZpbmFsaXplPWE9PihmLl9zcWxpdGUzX2ZpbmFsaXplPVkuQ2EpKGEpO2YuX3NxbGl0ZTNfcmVzZXQ9YT0+KGYuX3NxbGl0ZTNfcmVzZXQ9WS5EYSkoYSk7Zi5fc3FsaXRlM19jbGVhcl9iaW5kaW5ncz1hPT4oZi5fc3FsaXRlM19jbGVhcl9iaW5kaW5ncz1ZLkVhKShhKTtmLl9zcWxpdGUzX3ZhbHVlX2Jsb2I9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfYmxvYj1ZLkZhKShhKTtcbmYuX3NxbGl0ZTNfdmFsdWVfdGV4dD1hPT4oZi5fc3FsaXRlM192YWx1ZV90ZXh0PVkuR2EpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfYnl0ZXM9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfYnl0ZXM9WS5IYSkoYSk7Zi5fc3FsaXRlM192YWx1ZV9kb3VibGU9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfZG91YmxlPVkuSWEpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfaW50PWE9PihmLl9zcWxpdGUzX3ZhbHVlX2ludD1ZLkphKShhKTtmLl9zcWxpdGUzX3ZhbHVlX2ludDY0PWE9PihmLl9zcWxpdGUzX3ZhbHVlX2ludDY0PVkuS2EpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfdHlwZT1hPT4oZi5fc3FsaXRlM192YWx1ZV90eXBlPVkuTGEpKGEpO2YuX3NxbGl0ZTNfcmVzdWx0X2Jsb2I9KGEsYixjLGQpPT4oZi5fc3FsaXRlM19yZXN1bHRfYmxvYj1ZLk1hKShhLGIsYyxkKTtmLl9zcWxpdGUzX3Jlc3VsdF9kb3VibGU9KGEsYik9PihmLl9zcWxpdGUzX3Jlc3VsdF9kb3VibGU9WS5OYSkoYSxiKTtcbmYuX3NxbGl0ZTNfcmVzdWx0X2Vycm9yPShhLGIsYyk9PihmLl9zcWxpdGUzX3Jlc3VsdF9lcnJvcj1ZLk9hKShhLGIsYyk7Zi5fc3FsaXRlM19yZXN1bHRfaW50PShhLGIpPT4oZi5fc3FsaXRlM19yZXN1bHRfaW50PVkuUGEpKGEsYik7Zi5fc3FsaXRlM19yZXN1bHRfaW50NjQ9KGEsYixjKT0+KGYuX3NxbGl0ZTNfcmVzdWx0X2ludDY0PVkuUWEpKGEsYixjKTtmLl9zcWxpdGUzX3Jlc3VsdF9udWxsPWE9PihmLl9zcWxpdGUzX3Jlc3VsdF9udWxsPVkuUmEpKGEpO2YuX3NxbGl0ZTNfcmVzdWx0X3RleHQ9KGEsYixjLGQpPT4oZi5fc3FsaXRlM19yZXN1bHRfdGV4dD1ZLlNhKShhLGIsYyxkKTtmLl9zcWxpdGUzX2NvbHVtbl9jb3VudD1hPT4oZi5fc3FsaXRlM19jb2x1bW5fY291bnQ9WS5UYSkoYSk7Zi5fc3FsaXRlM19kYXRhX2NvdW50PWE9PihmLl9zcWxpdGUzX2RhdGFfY291bnQ9WS5VYSkoYSk7XG5mLl9zcWxpdGUzX2NvbHVtbl9ibG9iPShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fYmxvYj1ZLlZhKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX2J5dGVzPShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fYnl0ZXM9WS5XYSkoYSxiKTtmLl9zcWxpdGUzX2NvbHVtbl9kb3VibGU9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9kb3VibGU9WS5YYSkoYSxiKTtmLl9zcWxpdGUzX2NvbHVtbl90ZXh0PShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fdGV4dD1ZLllhKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX3R5cGU9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl90eXBlPVkuWmEpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fbmFtZT0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX25hbWU9WS5fYSkoYSxiKTtmLl9zcWxpdGUzX2JpbmRfYmxvYj0oYSxiLGMsZCxlKT0+KGYuX3NxbGl0ZTNfYmluZF9ibG9iPVkuJGEpKGEsYixjLGQsZSk7XG5mLl9zcWxpdGUzX2JpbmRfZG91YmxlPShhLGIsYyk9PihmLl9zcWxpdGUzX2JpbmRfZG91YmxlPVkuYWIpKGEsYixjKTtmLl9zcWxpdGUzX2JpbmRfaW50PShhLGIsYyk9PihmLl9zcWxpdGUzX2JpbmRfaW50PVkuYmIpKGEsYixjKTtmLl9zcWxpdGUzX2JpbmRfaW50NjQ9KGEsYixjLGQpPT4oZi5fc3FsaXRlM19iaW5kX2ludDY0PVkuY2IpKGEsYixjLGQpO2YuX3NxbGl0ZTNfYmluZF9udWxsPShhLGIpPT4oZi5fc3FsaXRlM19iaW5kX251bGw9WS5kYikoYSxiKTtmLl9zcWxpdGUzX2JpbmRfdGV4dD0oYSxiLGMsZCxlKT0+KGYuX3NxbGl0ZTNfYmluZF90ZXh0PVkuZWIpKGEsYixjLGQsZSk7Zi5fc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9jb3VudD1hPT4oZi5fc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9jb3VudD1ZLmZiKShhKTtmLl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWU9KGEsYik9PihmLl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWU9WS5nYikoYSxiKTtcbmYuX3NxbGl0ZTNfc3FsPWE9PihmLl9zcWxpdGUzX3NxbD1ZLmhiKShhKTtmLl9zcWxpdGUzX2V4ZWM9KGEsYixjLGQsZSk9PihmLl9zcWxpdGUzX2V4ZWM9WS5pYikoYSxiLGMsZCxlKTtmLl9zcWxpdGUzX2Vycm1zZz1hPT4oZi5fc3FsaXRlM19lcnJtc2c9WS5qYikoYSk7Zi5fc3FsaXRlM19kZWNsYXJlX3Z0YWI9KGEsYik9PihmLl9zcWxpdGUzX2RlY2xhcmVfdnRhYj1ZLmtiKShhLGIpO2YuX3NxbGl0ZTNfbGlidmVyc2lvbj0oKT0+KGYuX3NxbGl0ZTNfbGlidmVyc2lvbj1ZLmxiKSgpO2YuX3NxbGl0ZTNfbGlidmVyc2lvbl9udW1iZXI9KCk9PihmLl9zcWxpdGUzX2xpYnZlcnNpb25fbnVtYmVyPVkubWIpKCk7Zi5fc3FsaXRlM19jaGFuZ2VzPWE9PihmLl9zcWxpdGUzX2NoYW5nZXM9WS5uYikoYSk7Zi5fc3FsaXRlM19jbG9zZT1hPT4oZi5fc3FsaXRlM19jbG9zZT1ZLm9iKShhKTtcbmYuX3NxbGl0ZTNfbGltaXQ9KGEsYixjKT0+KGYuX3NxbGl0ZTNfbGltaXQ9WS5wYikoYSxiLGMpO2YuX3NxbGl0ZTNfb3Blbl92Mj0oYSxiLGMsZCk9PihmLl9zcWxpdGUzX29wZW5fdjI9WS5xYikoYSxiLGMsZCk7Zi5fc3FsaXRlM19nZXRfYXV0b2NvbW1pdD1hPT4oZi5fc3FsaXRlM19nZXRfYXV0b2NvbW1pdD1ZLnJiKShhKTt2YXIgamQ9KCk9PihqZD1ZLnNiKSgpLFRiPWYuX21hbGxvYz1hPT4oVGI9Zi5fbWFsbG9jPVkudGIpKGEpLGNkPWYuX2ZyZWU9YT0+KGNkPWYuX2ZyZWU9WS51YikoYSk7Zi5fUmVnaXN0ZXJFeHRlbnNpb25GdW5jdGlvbnM9YT0+KGYuX1JlZ2lzdGVyRXh0ZW5zaW9uRnVuY3Rpb25zPVkudmIpKGEpO2YuX3NldF9hdXRob3JpemVyPWE9PihmLl9zZXRfYXV0aG9yaXplcj1ZLndiKShhKTtmLl9jcmVhdGVfZnVuY3Rpb249KGEsYixjLGQsZSxoKT0+KGYuX2NyZWF0ZV9mdW5jdGlvbj1ZLnhiKShhLGIsYyxkLGUsaCk7XG5mLl91cGRhdGVfaG9vaz0oYSxiKT0+KGYuX3VwZGF0ZV9ob29rPVkueWIpKGEsYik7Zi5fY3JlYXRlX21vZHVsZT0oYSxiLGMsZCk9PihmLl9jcmVhdGVfbW9kdWxlPVkuemIpKGEsYixjLGQpO2YuX3Byb2dyZXNzX2hhbmRsZXI9KGEsYik9PihmLl9wcm9ncmVzc19oYW5kbGVyPVkuQWIpKGEsYik7Zi5fcmVnaXN0ZXJfdmZzPShhLGIsYyxkKT0+KGYuX3JlZ2lzdGVyX3Zmcz1ZLkJiKShhLGIsYyxkKTtmLl9nZXRTcWxpdGVGcmVlPSgpPT4oZi5fZ2V0U3FsaXRlRnJlZT1ZLkNiKSgpO3ZhciBsZD1mLl9tYWluPShhLGIpPT4obGQ9Zi5fbWFpbj1ZLkRiKShhLGIpLGRiPShhLGIpPT4oZGI9WS5GYikoYSxiKSxtZD0oKT0+KG1kPVkuR2IpKCksaGQ9KCk9PihoZD1ZLkhiKSgpLGZkPWE9PihmZD1ZLkliKShhKSxnZD1hPT4oZ2Q9WS5KYikoYSksYWQ9YT0+KGFkPVkuS2IpKGEpLFFjPSgpPT4oUWM9WS5MYikoKSwkYz1hPT4oJGM9WS5NYikoYSksYmQ9KCk9PihiZD1ZLk5iKSgpO1xuZi5nZXRUZW1wUmV0MD1tZDtmLmNjYWxsPVo7Zi5jd3JhcD0oYSxiLGMsZCk9Pnt2YXIgZT0hY3x8Yy5ldmVyeShoPT5cIm51bWJlclwiPT09aHx8XCJib29sZWFuXCI9PT1oKTtyZXR1cm5cInN0cmluZ1wiIT09YiYmZSYmIWQ/ZltcIl9cIithXTpmdW5jdGlvbigpe3JldHVybiBaKGEsYixjLGFyZ3VtZW50cyxkKX19O2Yuc2V0VmFsdWU9SjtmLmdldFZhbHVlPUk7Zi5VVEY4VG9TdHJpbmc9KGEsYik9PmE/Syh5LGEsYik6XCJcIjtmLnN0cmluZ1RvVVRGOD0oYSxiLGMpPT5TYShhLHksYixjKTtmLmxlbmd0aEJ5dGVzVVRGOD1SYTt2YXIgbmQ7emE9ZnVuY3Rpb24gb2QoKXtuZHx8cGQoKTtuZHx8KHphPW9kKX07XG5mdW5jdGlvbiBwZCgpe2Z1bmN0aW9uIGEoKXtpZighbmQmJihuZD0hMCxmLmNhbGxlZFJ1bj0hMCwhdikpe2Yubm9GU0luaXR8fEpifHwoSmI9ITAsSWIoKSxmLnN0ZGluPWYuc3RkaW4sZi5zdGRvdXQ9Zi5zdGRvdXQsZi5zdGRlcnI9Zi5zdGRlcnIsZi5zdGRpbj9LYihcInN0ZGluXCIsZi5zdGRpbik6emIoXCIvZGV2L3R0eVwiLFwiL2Rldi9zdGRpblwiKSxmLnN0ZG91dD9LYihcInN0ZG91dFwiLG51bGwsZi5zdGRvdXQpOnpiKFwiL2Rldi90dHlcIixcIi9kZXYvc3Rkb3V0XCIpLGYuc3RkZXJyP0tiKFwic3RkZXJyXCIsbnVsbCxmLnN0ZGVycik6emIoXCIvZGV2L3R0eTFcIixcIi9kZXYvc3RkZXJyXCIpLEZiKFwiL2Rldi9zdGRpblwiLDApLEZiKFwiL2Rldi9zdGRvdXRcIiwxKSxGYihcIi9kZXYvc3RkZXJyXCIsMSkpO2piPSExO0lhKHRhKTtJYSh1YSk7YWEoZik7aWYoZi5vblJ1bnRpbWVJbml0aWFsaXplZClmLm9uUnVudGltZUluaXRpYWxpemVkKCk7aWYocWQpe3ZhciBiPWxkO3RyeXt2YXIgYz1iKDAsMCk7bmE9XG5jO0xjKGMpfWNhdGNoKGQpe01jKGQpfX1pZihmLnBvc3RSdW4pZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYucG9zdFJ1biYmKGYucG9zdFJ1bj1bZi5wb3N0UnVuXSk7Zi5wb3N0UnVuLmxlbmd0aDspYj1mLnBvc3RSdW4uc2hpZnQoKSx2YS51bnNoaWZ0KGIpO0lhKHZhKX19aWYoISgwPEMpKXtpZihmLnByZVJ1bilmb3IoXCJmdW5jdGlvblwiPT10eXBlb2YgZi5wcmVSdW4mJihmLnByZVJ1bj1bZi5wcmVSdW5dKTtmLnByZVJ1bi5sZW5ndGg7KXhhKCk7SWEoc2EpOzA8Q3x8KGYuc2V0U3RhdHVzPyhmLnNldFN0YXR1cyhcIlJ1bm5pbmcuLi5cIiksc2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtmLnNldFN0YXR1cyhcIlwiKX0sMSk7YSgpfSwxKSk6YSgpKX19aWYoZi5wcmVJbml0KWZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiBmLnByZUluaXQmJihmLnByZUluaXQ9W2YucHJlSW5pdF0pOzA8Zi5wcmVJbml0Lmxlbmd0aDspZi5wcmVJbml0LnBvcCgpKCk7XG52YXIgcWQ9ITA7Zi5ub0luaXRpYWxSdW4mJihxZD0hMSk7cGQoKTtcblxuXG4gIHJldHVybiBtb2R1bGVBcmcucmVhZHlcbn1cblxuKTtcbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBNb2R1bGU7IiwiLy8gQ29weXJpZ2h0IDIwMjIgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbmltcG9ydCAqIGFzIFZGUyBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcWxpdGUtY29uc3RhbnRzLmpzJztcblxuLy8gQmFzZSBjbGFzcyBmb3IgYSBWRlMuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gIG14UGF0aE5hbWUgPSA2NDtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhDbG9zZShmaWxlSWQpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFJlYWQoZmlsZUlkLCBwRGF0YSwgaU9mZnNldCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4V3JpdGUoZmlsZUlkLCBwRGF0YSwgaU9mZnNldCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpU2l6ZSBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhUcnVuY2F0ZShmaWxlSWQsIGlTaXplKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHsqfSBmbGFncyBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhTeW5jKGZpbGVJZCwgZmxhZ3MpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwU2l6ZTY0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeEZpbGVTaXplKGZpbGVJZCwgcFNpemU2NCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhMb2NrKGZpbGVJZCwgZmxhZ3MpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4VW5sb2NrKGZpbGVJZCwgZmxhZ3MpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeENoZWNrUmVzZXJ2ZWRMb2NrKGZpbGVJZCwgcFJlc091dCkge1xuICAgIHBSZXNPdXQuc2V0SW50MzIoMCwgMCwgdHJ1ZSk7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwQXJnIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeEZpbGVDb250cm9sKGZpbGVJZCwgb3AsIHBBcmcpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9OT1RGT1VORDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFNlY3RvclNpemUoZmlsZUlkKSB7XG4gICAgcmV0dXJuIDUxMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeERldmljZUNoYXJhY3RlcmlzdGljcyhmaWxlSWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz99IG5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcE91dEZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeE9wZW4obmFtZSwgZmlsZUlkLCBmbGFncywgcE91dEZsYWdzKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfQ0FOVE9QRU47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeW5jRGlyIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeERlbGV0ZShuYW1lLCBzeW5jRGlyKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhBY2Nlc3MobmFtZSwgZmxhZ3MsIHBSZXNPdXQpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhpcyBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIG92ZXJyaWRlbiBvblxuICAgKiByZWdpc3RyYXRpb24gYnkgYW4gQXN5bmNpZnkgYnVpbGQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKTogUHJvbWlzZTxudW1iZXI+fSBmIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgaGFuZGxlQXN5bmMoZikge1xuICAgIC8vIFRoaXMgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBkZWxpYmVyYXRlbHkgZG9lcyBub3QgbWF0Y2ggdGhlXG4gICAgLy8gZGVjbGFyZWQgc2lnbmF0dXJlLiBJdCB3aWxsIGJlIHVzZWQgaW4gdGVzdGluZyBWRlMgY2xhc3Nlc1xuICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBTUUxpdGUuIFRoaXMgd2lsbCB3b3JrIGFjY2VwdGFibHkgZm9yIG1ldGhvZHNcbiAgICAvLyB0aGF0IHNpbXBseSByZXR1cm4gdGhlIGhhbmRsZUFzeW5jKCkgcmVzdWx0IHdpdGhvdXQgdXNpbmcgaXQuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBmKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZJTEVfVFlQRV9NQVNLID0gW1xuICBWRlMuU1FMSVRFX09QRU5fTUFJTl9EQixcbiAgVkZTLlNRTElURV9PUEVOX01BSU5fSk9VUk5BTCxcbiAgVkZTLlNRTElURV9PUEVOX1RFTVBfREIsXG4gIFZGUy5TUUxJVEVfT1BFTl9URU1QX0pPVVJOQUwsXG4gIFZGUy5TUUxJVEVfT1BFTl9UUkFOU0lFTlRfREIsXG4gIFZGUy5TUUxJVEVfT1BFTl9TVUJKT1VSTkFMLFxuICBWRlMuU1FMSVRFX09QRU5fU1VQRVJfSk9VUk5BTFxuXS5yZWR1Y2UoKG1hc2ssIGVsZW1lbnQpID0+IG1hc2sgfCBlbGVtZW50KTsiLCIvLyBDb3B5cmlnaHQgMjAyMiBSb3kgVC4gSGFzaGltb3RvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuaW1wb3J0ICogYXMgVkZTIGZyb20gJy4uL1ZGUy5qcyc7XG5pbXBvcnQgeyBXZWJMb2Nrc0V4Y2x1c2l2ZSBhcyBXZWJMb2NrcyB9IGZyb20gJy4vV2ViTG9ja3MuanMnO1xuaW1wb3J0IHsgSURCQ29udGV4dCB9IGZyb20gJy4vSURCQ29udGV4dC5qcyc7XG5cbmNvbnN0IFNFQ1RPUl9TSVpFID0gNTEyO1xuY29uc3QgTUFYX1RBU0tfTUlMTElTID0gMzAwMDtcblxuLyoqXG4gKiBAdHlwZWRlZiBWRlNPcHRpb25zXG4gKiBAcHJvcGVydHkge1wiZGVmYXVsdFwifFwic3RyaWN0XCJ8XCJyZWxheGVkXCJ9IFtkdXJhYmlsaXR5XVxuICogQHByb3BlcnR5IHtcImRlZmVycmVkXCJ8XCJtYW51YWxcIn0gW3B1cmdlXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtwdXJnZUF0TGVhc3RdXG4gKi9cblxuLyoqIEB0eXBlIHtWRlNPcHRpb25zfSAqL1xuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICBkdXJhYmlsaXR5OiBcImRlZmF1bHRcIixcbiAgcHVyZ2U6IFwiZGVmZXJyZWRcIixcbiAgcHVyZ2VBdExlYXN0OiAxNlxufTtcblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgLy8gY29uc29sZS5kZWJ1ZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBGaWxlQmxvY2sgSW5kZXhlZERCIG9iamVjdCB3aXRoIGtleSBbcGF0aCwgb2Zmc2V0LCB2ZXJzaW9uXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXQgbmVnYXRpdmUgb2YgcG9zaXRpb24gaW4gZmlsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7VWludDhBcnJheX0gZGF0YVxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZmlsZVNpemVdIE9ubHkgcHJlc2VudCBvbiBibG9jayAwXG4qL1xuXG4vKipcbiAqIEB0eXBlZGVmIE9wZW5lZEZpbGVFbnRyeVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmbGFnc1xuICogQHByb3BlcnR5IHtGaWxlQmxvY2t9IGJsb2NrMFxuICogQHByb3BlcnR5IHtib29sZWFufSBpc01ldGFkYXRhQ2hhbmdlZFxuICogQHByb3BlcnR5IHtXZWJMb2Nrc30gbG9ja3NcbiAqIFxuICogQHByb3BlcnR5IHtTZXQ8bnVtYmVyPn0gW2NoYW5nZWRQYWdlc11cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW292ZXJ3cml0ZV1cbiAqL1xuXG4vLyBUaGlzIHNhbXBsZSBWRlMgc3RvcmVzIG9wdGlvbmFsbHkgdmVyc2lvbmVkIHdyaXRlcyB0byBJbmRleGVkREIsIHdoaWNoXG4vLyBpdCB1c2VzIHdpdGggdGhlIFNRTGl0ZSB4RmlsZUNvbnRyb2woKSBiYXRjaCBhdG9taWMgd3JpdGUgZmVhdHVyZS5cbmV4cG9ydCBjbGFzcyBJREJCYXRjaEF0b21pY1ZGUyBleHRlbmRzIFZGUy5CYXNlIHtcbiAgI29wdGlvbnM7XG4gIC8qKiBAdHlwZSB7TWFwPG51bWJlciwgT3BlbmVkRmlsZUVudHJ5Pn0gKi8gI21hcElkVG9GaWxlID0gbmV3IE1hcCgpO1xuXG4gIC8qKiBAdHlwZSB7SURCQ29udGV4dH0gKi8gI2lkYjtcbiAgLyoqIEB0eXBlIHtTZXQ8c3RyaW5nPn0gKi8gI3BlbmRpbmdQdXJnZXMgPSBuZXcgU2V0KCk7XG5cbiAgI3Rhc2tUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgI3BlbmRpbmdBc3luYyA9IG5ldyBTZXQoKTtcblxuICBjb25zdHJ1Y3RvcihpZGJEYXRhYmFzZU5hbWUgPSAnd2Etc3FsaXRlJywgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lID0gaWRiRGF0YWJhc2VOYW1lO1xuICAgIHRoaXMuI29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpO1xuICAgIHRoaXMuI2lkYiA9IG5ldyBJREJDb250ZXh0KG9wZW5EYXRhYmFzZShpZGJEYXRhYmFzZU5hbWUpLCB7XG4gICAgICBkdXJhYmlsaXR5OiB0aGlzLiNvcHRpb25zLmR1cmFiaWxpdHlcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIGZvciAoY29uc3QgZmlsZUlkIG9mIHRoaXMuI21hcElkVG9GaWxlLmtleXMoKSkge1xuICAgICAgYXdhaXQgdGhpcy54Q2xvc2UoZmlsZUlkKTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLiNpZGI/LmNsb3NlKCk7XG4gICAgdGhpcy4jaWRiID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz99IG5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcE91dEZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeE9wZW4obmFtZSwgZmlsZUlkLCBmbGFncywgcE91dEZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IG51bGwpIG5hbWUgPSBgbnVsbF8ke2ZpbGVJZH1gO1xuICAgICAgbG9nKGB4T3BlbiAke25hbWV9IDB4JHtmaWxlSWQudG9TdHJpbmcoMTYpfSAweCR7ZmxhZ3MudG9TdHJpbmcoMTYpfWApO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBGaWxlbmFtZXMgY2FuIGJlIFVSTHMsIHBvc3NpYmx5IHdpdGggcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChuYW1lLCAnaHR0cDovL2xvY2FsaG9zdC8nKTtcbiAgICAgICAgLyoqIEB0eXBlIHtPcGVuZWRGaWxlRW50cnl9ICovIGNvbnN0IGZpbGUgPSB7XG4gICAgICAgICAgcGF0aDogdXJsLnBhdGhuYW1lLFxuICAgICAgICAgIGZsYWdzLFxuICAgICAgICAgIGJsb2NrMDogbnVsbCxcbiAgICAgICAgICBpc01ldGFkYXRhQ2hhbmdlZDogdHJ1ZSxcbiAgICAgICAgICBsb2NrczogbmV3IFdlYkxvY2tzKHVybC5wYXRobmFtZSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jbWFwSWRUb0ZpbGUuc2V0KGZpbGVJZCwgZmlsZSk7XG5cbiAgICAgICAgLy8gUmVhZCB0aGUgZmlyc3QgYmxvY2ssIHdoaWNoIGFsc28gY29udGFpbnMgdGhlIGZpbGUgbWV0YWRhdGEuXG4gICAgICAgIGF3YWl0IHRoaXMuI2lkYi5ydW4oJ3JlYWR3cml0ZScsIGFzeW5jICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgIGZpbGUuYmxvY2swID0gYXdhaXQgYmxvY2tzLmdldCh0aGlzLiNib3VuZChmaWxlLCAwKSk7XG4gICAgICAgICAgaWYgKCFmaWxlLmJsb2NrMCkge1xuICAgICAgICAgICAgaWYgKGZsYWdzICYgVkZTLlNRTElURV9PUEVOX0NSRUFURSkge1xuICAgICAgICAgICAgICBmaWxlLmJsb2NrMCA9IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IDAsXG4gICAgICAgICAgICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoMCksXG4gICAgICAgICAgICAgICAgZmlsZVNpemU6IDBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYmxvY2tzLnB1dChmaWxlLmJsb2NrMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZpbGUgbm90IGZvdW5kOiAke2ZpbGUucGF0aH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwT3V0RmxhZ3Muc2V0SW50MzIoMCwgZmxhZ3MgJiBWRlMuU1FMSVRFX09QRU5fUkVBRE9OTFksIHRydWUpO1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQ0FOVE9QRU47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhDbG9zZShmaWxlSWQpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgbG9nKGB4Q2xvc2UgJHtmaWxlLnBhdGh9YCk7XG5cbiAgICAgICAgICB0aGlzLiNtYXBJZFRvRmlsZS5kZWxldGUoZmlsZUlkKTtcbiAgICAgICAgICBpZiAoZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9ERUxFVEVPTkNMT1NFKSB7XG4gICAgICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICAgICAgYmxvY2tzLmRlbGV0ZShJREJLZXlSYW5nZS5ib3VuZChbZmlsZS5wYXRoXSwgW2ZpbGUucGF0aCwgW11dKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4UmVhZChmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgbG9nKGB4UmVhZCAke2ZpbGUucGF0aH0gJHtwRGF0YS5ieXRlTGVuZ3RofSAke2lPZmZzZXR9YCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFJlYWQgYXMgbWFueSBibG9ja3MgYXMgbmVjZXNzYXJ5IHRvIHNhdGlzZnkgdGhlIHJlYWQgcmVxdWVzdC5cbiAgICAgICAgLy8gVXN1YWxseSBhIHJlYWQgZml0cyB3aXRoaW4gYSBzaW5nbGUgd3JpdGUgYnV0IHRoZXJlIGlzIGF0IGxlYXN0XG4gICAgICAgIC8vIG9uZSBjYXNlIC0gcm9sbGJhY2sgYWZ0ZXIgam91cm5hbCBzcGlsbCAtIHdoZXJlIHJlYWRzIGNyb3NzXG4gICAgICAgIC8vIHdyaXRlIGJvdW5kYXJpZXMgc28gd2UgaGF2ZSB0byBhbGxvdyBmb3IgdGhhdC5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy4jaWRiLnJ1bigncmVhZG9ubHknLCBhc3luYyAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICBsZXQgcERhdGFPZmZzZXQgPSAwO1xuICAgICAgICAgIHdoaWxlIChwRGF0YU9mZnNldCA8IHBEYXRhLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEZldGNoIHRoZSBJbmRleGVkREIgYmxvY2sgZm9yIHRoaXMgZmlsZSBsb2NhdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVPZmZzZXQgPSBpT2Zmc2V0ICsgcERhdGFPZmZzZXQ7XG4gICAgICAgICAgICAvKiogQHR5cGUge0ZpbGVCbG9ja30gKi9cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gZmlsZU9mZnNldCA8IGZpbGUuYmxvY2swLmRhdGEuYnl0ZUxlbmd0aCA/XG4gICAgICAgICAgICAgIGZpbGUuYmxvY2swIDpcbiAgICAgICAgICAgICAgYXdhaXQgYmxvY2tzLmdldCh0aGlzLiNib3VuZChmaWxlLCAtZmlsZU9mZnNldCkpO1xuXG4gICAgICAgICAgICBpZiAoIWJsb2NrIHx8IGJsb2NrLmRhdGEuYnl0ZUxlbmd0aCAtIGJsb2NrLm9mZnNldCA8PSBmaWxlT2Zmc2V0KSB7XG4gICAgICAgICAgICAgIHBEYXRhLmZpbGwoMCwgcERhdGFPZmZzZXQpO1xuICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9TSE9SVF9SRUFEO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBwRGF0YS5zdWJhcnJheShwRGF0YU9mZnNldCk7XG4gICAgICAgICAgICBjb25zdCBibG9ja09mZnNldCA9IGZpbGVPZmZzZXQgKyBibG9jay5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBuQnl0ZXNUb0NvcHkgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgTWF0aC5tYXgoYmxvY2suZGF0YS5ieXRlTGVuZ3RoIC0gYmxvY2tPZmZzZXQsIDApLCAvLyBzb3VyY2UgYnl0ZXNcbiAgICAgICAgICAgICAgYnVmZmVyLmJ5dGVMZW5ndGgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXN0aW5hdGlvbiBieXRlc1xuICAgICAgICAgICAgYnVmZmVyLnNldChibG9jay5kYXRhLnN1YmFycmF5KGJsb2NrT2Zmc2V0LCBibG9ja09mZnNldCArIG5CeXRlc1RvQ29weSkpO1xuICAgICAgICAgICAgcERhdGFPZmZzZXQgKz0gbkJ5dGVzVG9Db3B5O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4V3JpdGUoZmlsZUlkLCBwRGF0YSwgaU9mZnNldCkge1xuICAgIC8vIEhhbmRsZSBhc3luY2hyb25vdXNseSBldmVyeSBNQVhfVEFTS19NSUxMSVMgbWlsbGlzZWNvbmRzLiBUaGlzIGlzXG4gICAgLy8gdHJpY2t5IGJlY2F1c2UgQXN5bmNpZnkgY2FsbHMgYXN5bmNocm9ub3VzIG1ldGhvZHMgdHdpY2U6IG9uY2VcbiAgICAvLyB0byBpbml0aWF0ZSB0aGUgY2FsbCBhbmQgdW53aW5kcyB0aGUgc3RhY2ssIHRoZW4gcmV3aW5kcyB0aGVcbiAgICAvLyBzdGFjayBhbmQgY2FsbHMgYWdhaW4gdG8gcmV0cmlldmUgdGhlIGNvbXBsZXRlZCByZXN1bHQuXG4gICAgY29uc3QgcmV3b3VuZCA9IHRoaXMuI3BlbmRpbmdBc3luYy5oYXMoZmlsZUlkKTtcbiAgICBpZiAocmV3b3VuZCB8fCBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuI3Rhc2tUaW1lc3RhbXAgPiBNQVhfVEFTS19NSUxMSVMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVBc3luYyAhPT0gc3VwZXIuaGFuZGxlQXN5bmMpIHtcbiAgICAgICAgICB0aGlzLiNwZW5kaW5nQXN5bmMuYWRkKGZpbGVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUpKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiN4V3JpdGVIZWxwZXIoZmlsZUlkLCBwRGF0YSwgaU9mZnNldCk7XG4gICAgICAgIHRoaXMuI3Rhc2tUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmV3b3VuZCkgdGhpcy4jcGVuZGluZ0FzeW5jLmRlbGV0ZShmaWxlSWQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3hXcml0ZUhlbHBlcihmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgI3hXcml0ZUhlbHBlcihmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgIGxvZyhgeFdyaXRlICR7ZmlsZS5wYXRofSAke3BEYXRhLmJ5dGVMZW5ndGh9ICR7aU9mZnNldH1gKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVcGRhdGUgZmlsZSBzaXplIGlmIGFwcGVuZGluZy5cbiAgICAgIGNvbnN0IHByZXZGaWxlU2l6ZSA9IGZpbGUuYmxvY2swLmZpbGVTaXplO1xuICAgICAgaWYgKGZpbGUuYmxvY2swLmZpbGVTaXplIDwgaU9mZnNldCArIHBEYXRhLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgZmlsZS5ibG9jazAuZmlsZVNpemUgPSBpT2Zmc2V0ICsgcERhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgZmlsZS5pc01ldGFkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnZlcnQgdGhlIHdyaXRlIGRpcmVjdGx5IGludG8gYW4gSW5kZXhlZERCIG9iamVjdC4gT3VyIGFzc3VtcHRpb25cbiAgICAgIC8vIGlzIHRoYXQgU1FMaXRlIHdpbGwgb25seSBvdmVyd3JpdGUgZGF0YSB3aXRoIGFuIHhXcml0ZSBvZiB0aGUgc2FtZVxuICAgICAgLy8gb2Zmc2V0IGFuZCBzaXplIHVubGVzcyB0aGUgZGF0YWJhc2UgcGFnZSBzaXplIGNoYW5nZXMsIGV4Y2VwdCB3aGVuXG4gICAgICAvLyBjaGFuZ2luZyBkYXRhYmFzZSBwYWdlIHNpemUgd2hpY2ggaXMgaGFuZGxlZCBieSAjcmVibG9ja0lmTmVlZGVkKCkuXG4gICAgICBjb25zdCBibG9jayA9IGlPZmZzZXQgPT09IDAgPyBmaWxlLmJsb2NrMCA6IHtcbiAgICAgICAgcGF0aDogZmlsZS5wYXRoLFxuICAgICAgICBvZmZzZXQ6IC1pT2Zmc2V0LFxuICAgICAgICB2ZXJzaW9uOiBmaWxlLmJsb2NrMC52ZXJzaW9uLFxuICAgICAgICBkYXRhOiBudWxsXG4gICAgICB9O1xuICAgICAgYmxvY2suZGF0YSA9IHBEYXRhLnNsaWNlKCk7XG5cbiAgICAgIGlmIChmaWxlLmNoYW5nZWRQYWdlcykge1xuICAgICAgICAvLyBUaGlzIHdyaXRlIGlzIHBhcnQgb2YgYSBiYXRjaCBhdG9taWMgd3JpdGUuIEFsbCB3cml0ZXMgaW4gdGhlXG4gICAgICAgIC8vIGJhdGNoIGhhdmUgYSBuZXcgdmVyc2lvbiwgc28gdXBkYXRlIHRoZSBjaGFuZ2VkIGxpc3QgdG8gYWxsb3dcbiAgICAgICAgLy8gb2xkIHZlcnNpb25zIHRvIGJlIGV2ZW50dWFsbHkgZGVsZXRlZC5cbiAgICAgICAgaWYgKHByZXZGaWxlU2l6ZSA9PT0gZmlsZS5ibG9jazAuZmlsZVNpemUpIHtcbiAgICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcy5hZGQoLWlPZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmZXIgd3JpdGluZyBibG9jayAwIHRvIEluZGV4ZWREQiB1bnRpbCBiYXRjaCBjb21taXQuXG4gICAgICAgIGlmIChpT2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgKHtibG9ja3N9KSA9PiBibG9ja3MucHV0KGJsb2NrKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBhIGJhdGNoIGF0b21pYyB3cml0ZSBzbyB3cml0ZSB0aHJvdWdoLlxuICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCAoe2Jsb2Nrc30pID0+IGJsb2Nrcy5wdXQoYmxvY2spKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgZGlydHkgZmxhZyBpZiBwYWdlIDAgd2FzIHdyaXR0ZW4uXG4gICAgICBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkID0gaU9mZnNldCA9PT0gMCA/IGZhbHNlIDogZmlsZS5pc01ldGFkYXRhQ2hhbmdlZDtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlTaXplIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFRydW5jYXRlKGZpbGVJZCwgaVNpemUpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgbG9nKGB4VHJ1bmNhdGUgJHtmaWxlLnBhdGh9ICR7aVNpemV9YCk7XG5cbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmFzc2lnbihmaWxlLmJsb2NrMCwge1xuICAgICAgICBmaWxlU2l6ZTogaVNpemUsXG4gICAgICAgIGRhdGE6IGZpbGUuYmxvY2swLmRhdGEuc2xpY2UoMCwgaVNpemUpXG4gICAgICB9KTtcblxuICAgICAgLy8gRGVsZXRlIGFsbCBibG9ja3MgYmV5b25kIHRoZSBmaWxlIHNpemUgYW5kIHVwZGF0ZSBtZXRhZGF0YS5cbiAgICAgIC8vIFRoaXMgaXMgbmV2ZXIgY2FsbGVkIHdpdGhpbiBhIHRyYW5zYWN0aW9uLlxuICAgICAgY29uc3QgYmxvY2swID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5ibG9jazApO1xuICAgICAgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgKHtibG9ja3N9KT0+IHtcbiAgICAgICAgYmxvY2tzLmRlbGV0ZSh0aGlzLiNib3VuZChmaWxlLCAtSW5maW5pdHksIC1pU2l6ZSkpO1xuICAgICAgICBibG9ja3MucHV0KGJsb2NrMCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFN5bmMoZmlsZUlkLCBmbGFncykge1xuICAgIC8vIFNraXAgSW5kZXhlZERCIHN5bmMgaWYgZHVyYWJpbGl0eSBpcyByZWxheGVkIGFuZCB0aGUgbGFzdFxuICAgIC8vIHN5bmMgd2FzIHJlY2VudCBlbm91Z2guXG4gICAgY29uc3QgcmV3b3VuZCA9IHRoaXMuI3BlbmRpbmdBc3luYy5oYXMoZmlsZUlkKTtcbiAgICBpZiAocmV3b3VuZCB8fCB0aGlzLiNvcHRpb25zLmR1cmFiaWxpdHkgIT09ICdyZWxheGVkJyB8fFxuICAgICAgICBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuI3Rhc2tUaW1lc3RhbXAgPiBNQVhfVEFTS19NSUxMSVMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVBc3luYyAhPT0gc3VwZXIuaGFuZGxlQXN5bmMpIHtcbiAgICAgICAgICB0aGlzLiNwZW5kaW5nQXN5bmMuYWRkKGZpbGVJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLiN4U3luY0hlbHBlcihmaWxlSWQsIGZsYWdzKTtcbiAgICAgICAgdGhpcy4jdGFza1RpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXdvdW5kKSB0aGlzLiNwZW5kaW5nQXN5bmMuZGVsZXRlKGZpbGVJZCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICBsb2coYHhTeW5jICR7ZmlsZS5wYXRofSAke2ZsYWdzfWApO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jICN4U3luY0hlbHBlcihmaWxlSWQsIGZsYWdzKSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgIGxvZyhgeFN5bmMgJHtmaWxlLnBhdGh9ICR7ZmxhZ3N9YCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkKSB7XG4gICAgICAgIC8vIE1ldGFkYXRhIGhhcyBjaGFuZ2VkIHNvIHdyaXRlIGJsb2NrIDAgdG8gSW5kZXhlZERCLlxuICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCBhc3luYyAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICBhd2FpdCBibG9ja3MucHV0KGZpbGUuYmxvY2swKTtcbiAgICAgICAgfSk7IFxuICAgICAgICBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLiNpZGIuc3luYygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICB9XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFNpemU2NCBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhGaWxlU2l6ZShmaWxlSWQsIHBTaXplNjQpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgbG9nKGB4RmlsZVNpemUgJHtmaWxlLnBhdGh9YCk7XG5cbiAgICBwU2l6ZTY0LnNldEJpZ0ludDY0KDAsIEJpZ0ludChmaWxlLmJsb2NrMC5maWxlU2l6ZSksIHRydWUpXG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeExvY2soZmlsZUlkLCBmbGFncykge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGxvZyhgeExvY2sgJHtmaWxlLnBhdGh9ICR7ZmxhZ3N9YCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEFjcXVpcmUgdGhlIGxvY2suXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbGUubG9ja3MubG9jayhmbGFncyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IFZGUy5TUUxJVEVfT0sgJiYgZmlsZS5sb2Nrcy5zdGF0ZSA9PT0gVkZTLlNRTElURV9MT0NLX1NIQVJFRCkge1xuICAgICAgICAgIC8vIFVwZGF0ZSBibG9jayAwIGluIGNhc2UgYW5vdGhlciBjb25uZWN0aW9uIGNoYW5nZWQgaXQuXG4gICAgICAgICAgZmlsZS5ibG9jazAgPSBhd2FpdCB0aGlzLiNpZGIucnVuKCdyZWFkb25seScsICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGJsb2Nrcy5nZXQodGhpcy4jYm91bmQoZmlsZSwgMCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhVbmxvY2soZmlsZUlkLCBmbGFncykge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGxvZyhgeFVubG9jayAke2ZpbGUucGF0aH0gJHtmbGFnc31gKTtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZpbGUubG9ja3MudW5sb2NrKGZsYWdzKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeENoZWNrUmVzZXJ2ZWRMb2NrKGZpbGVJZCwgcFJlc091dCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGxvZyhgeENoZWNrUmVzZXJ2ZWRMb2NrICR7ZmlsZS5wYXRofWApO1xuXG4gICAgICBjb25zdCBpc1Jlc2VydmVkID0gYXdhaXQgZmlsZS5sb2Nrcy5pc1NvbWV3aGVyZVJlc2VydmVkKCk7XG4gICAgICBwUmVzT3V0LnNldEludDMyKDAsIGlzUmVzZXJ2ZWQgPyAxIDogMCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFNlY3RvclNpemUoZmlsZUlkKSB7XG4gICAgbG9nKCd4U2VjdG9yU2l6ZScpO1xuICAgIHJldHVybiBTRUNUT1JfU0laRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeERldmljZUNoYXJhY3RlcmlzdGljcyhmaWxlSWQpIHtcbiAgICBsb2coJ3hEZXZpY2VDaGFyYWN0ZXJpc3RpY3MnKTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9JT0NBUF9CQVRDSF9BVE9NSUMgfFxuICAgICAgICAgICBWRlMuU1FMSVRFX0lPQ0FQX1NBRkVfQVBQRU5EIHxcbiAgICAgICAgICAgVkZTLlNRTElURV9JT0NBUF9TRVFVRU5USUFMIHxcbiAgICAgICAgICAgVkZTLlNRTElURV9JT0NBUF9VTkRFTEVUQUJMRV9XSEVOX09QRU47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwQXJnIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeEZpbGVDb250cm9sKGZpbGVJZCwgb3AsIHBBcmcpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgbG9nKGB4RmlsZUNvbnRyb2wgJHtmaWxlLnBhdGh9ICR7b3B9YCk7XG5cbiAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICBjYXNlIDExOiAvL1NRTElURV9GQ05UTF9PVkVSV1JJVEVcbiAgICAgICAgLy8gVGhpcyBjYWxsZWQgb24gVkFDVVVNLiBTZXQgYSBmbGFnIHNvIHdlIGtub3cgd2hldGhlciB0byBjaGVja1xuICAgICAgICAvLyBsYXRlciBpZiB0aGUgcGFnZSBzaXplIGNoYW5nZWQuXG4gICAgICAgIGZpbGUub3ZlcndyaXRlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG5cbiAgICAgIGNhc2UgMjE6IC8vIFNRTElURV9GQ05UTF9TWU5DXG4gICAgICAgIC8vIFRoaXMgaXMgY2FsbGVkIGF0IHRoZSBlbmQgb2YgZWFjaCBkYXRhYmFzZSB0cmFuc2FjdGlvbiwgd2hldGhlclxuICAgICAgICAvLyBpdCBpcyBiYXRjaCBhdG9taWMgb3Igbm90LiBIYW5kbGUgcGFnZSBzaXplIGNoYW5nZXMgaGVyZS5cbiAgICAgICAgaWYgKGZpbGUub3ZlcndyaXRlKSB7XG4gICAgICAgICAgLy8gQXMgYW4gb3B0aW1pemF0aW9uIHdlIG9ubHkgY2hlY2sgZm9yIGFuZCBoYW5kbGUgYSBwYWdlIGZpbGVcbiAgICAgICAgICAvLyBjaGFuZ2VzIGlmIHdlIGtub3cgYSBWQUNVVU0gaGFzIGJlZW4gZG9uZSBiZWNhdXNlIGhhbmRsZUFzeW5jKClcbiAgICAgICAgICAvLyBoYXMgdG8gdW53aW5kIGFuZCByZXdpbmQgdGhlIHN0YWNrLiBXZSBtdXN0IGJlIHN1cmUgdG8gZm9sbG93XG4gICAgICAgICAgLy8gdGhlIHNhbWUgY29uZGl0aW9uYWwgcGF0aCBpbiBib3RoIGNhbGxzLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuI3JlYmxvY2tJZk5lZWRlZChmaWxlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUuaXNNZXRhZGF0YUNoYW5nZWQpIHtcbiAgICAgICAgICAvLyBNZXRhZGF0YSBoYXMgY2hhbmdlZCBzbyB3cml0ZSBibG9jayAwIHRvIEluZGV4ZWREQi5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgYXN5bmMgKHtibG9ja3N9KSA9PiB7XG4gICAgICAgICAgICAgIGF3YWl0IGJsb2Nrcy5wdXQoZmlsZS5ibG9jazApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcblxuICAgICAgY2FzZSAyMjogLy8gU1FMSVRFX0ZDTlRMX0NPTU1JVF9QSEFTRVRXT1xuICAgICAgICAvLyBUaGlzIGlzIGNhbGxlZCBhZnRlciBhIGNvbW1pdCBpcyBjb21wbGV0ZWQuXG4gICAgICAgIGZpbGUub3ZlcndyaXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuXG4gICAgICBjYXNlIDMxOiAvLyBTUUxJVEVfRkNOVExfQkVHSU5fQVRPTUlDX1dSSVRFXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUHJlcGFyZSBhIG5ldyB2ZXJzaW9uIGZvciBJbmRleGVkREIgYmxvY2tzLlxuICAgICAgICAgICAgZmlsZS5ibG9jazAudmVyc2lvbi0tO1xuICAgICAgICAgICAgZmlsZS5jaGFuZ2VkUGFnZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIGJsb2NrcyBmcm9tIGFiYW5kb25lZCB0cmFuc2FjdGlvbnMgdGhhdCB3b3VsZCBjb25mbGljdFxuICAgICAgICAgICAgLy8gd2l0aCB0aGUgbmV3IHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgYXN5bmMgKHtibG9ja3N9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBhd2FpdCBibG9ja3MuaW5kZXgoJ3ZlcnNpb24nKS5nZXRBbGxLZXlzKElEQktleVJhbmdlLmJvdW5kKFxuICAgICAgICAgICAgICAgIFtmaWxlLnBhdGhdLFxuICAgICAgICAgICAgICAgIFtmaWxlLnBhdGgsIGZpbGUuYmxvY2swLnZlcnNpb25dKSk7XG4gICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBibG9ja3MuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgMzI6IC8vIFNRTElURV9GQ05UTF9DT01NSVRfQVRPTUlDX1dSSVRFXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgYmxvY2swID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5ibG9jazApO1xuICAgICAgICAgIGJsb2NrMC5kYXRhID0gYmxvY2swLmRhdGEuc2xpY2UoKTtcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkUGFnZXMgPSBmaWxlLmNoYW5nZWRQYWdlcztcbiAgICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcyA9IG51bGw7XG4gICAgICAgICAgZmlsZS5pc01ldGFkYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuI2lkYi5ydW4oJ3JlYWR3cml0ZScsIGFzeW5jICh7YmxvY2tzfSk9PiB7XG4gICAgICAgICAgICAvLyBXcml0ZSBibG9jayAwIHRvIGNvbW1pdCB0aGUgbmV3IHZlcnNpb24uXG4gICAgICAgICAgICBibG9ja3MucHV0KGJsb2NrMCk7XG5cbiAgICAgICAgICAgIC8vIEJsb2NrcyB0byBwdXJnZSBhcmUgc2F2ZWQgaW4gYSBzcGVjaWFsIEluZGV4ZWREQiBvYmplY3Qgd2l0aFxuICAgICAgICAgICAgLy8gYW4gXCJpbmRleFwiIG9mIFwicHVyZ2VcIi4gQWRkIHBhZ2VzIGNoYW5nZWQgYnkgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IHB1cmdlQmxvY2sgPSBhd2FpdCBibG9ja3MuZ2V0KFtmaWxlLnBhdGgsICdwdXJnZScsIDBdKSA/PyB7XG4gICAgICAgICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICAgICAgb2Zmc2V0OiAncHVyZ2UnLFxuICAgICAgICAgICAgICB2ZXJzaW9uOiAwLFxuICAgICAgICAgICAgICBkYXRhOiBuZXcgTWFwKCksXG4gICAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwdXJnZUJsb2NrLmNvdW50ICs9IGNoYW5nZWRQYWdlcy5zaXplO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYWdlSW5kZXggb2YgY2hhbmdlZFBhZ2VzKSB7XG4gICAgICAgICAgICAgIHB1cmdlQmxvY2suZGF0YS5zZXQocGFnZUluZGV4LCBibG9jazAudmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJsb2Nrcy5wdXQocHVyZ2VCbG9jayk7XG4gICAgICAgICAgICB0aGlzLiNtYXliZVB1cmdlKGZpbGUucGF0aCwgcHVyZ2VCbG9jay5jb3VudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgMzM6IC8vIFNRTElURV9GQ05UTF9ST0xMQkFDS19BVE9NSUNfV1JJVEVcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIHN0YXRlLiBPYmplY3RzIGZvciB0aGUgYWJhbmRvbmVkIHZlcnNpb24gd2lsbFxuICAgICAgICAgICAgLy8gYmUgbGVmdCBpbiBJbmRleGVkREIgdG8gYmUgcmVtb3ZlZCBieSB0aGUgbmV4dCBhdG9taWMgd3JpdGVcbiAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgZmlsZS5jaGFuZ2VkUGFnZXMgPSBudWxsO1xuICAgICAgICAgICAgZmlsZS5pc01ldGFkYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZmlsZS5ibG9jazAgPSBhd2FpdCB0aGlzLiNpZGIucnVuKCdyZWFkb25seScsICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYmxvY2tzLmdldChbZmlsZS5wYXRoLCAwLCBmaWxlLmJsb2NrMC52ZXJzaW9uICsgMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfTk9URk9VTkQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4QWNjZXNzKG5hbWUsIGZsYWdzLCBwUmVzT3V0KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IG5ldyBVUkwobmFtZSwgJ2ZpbGU6Ly9sb2NhbGhvc3QvJykucGF0aG5hbWU7XG4gICAgICAgIGxvZyhgeEFjY2VzcyAke3BhdGh9ICR7ZmxhZ3N9YCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmxvY2sgMCBleGlzdHMuXG4gICAgICAgIGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuI2lkYi5ydW4oJ3JlYWRvbmx5JywgKHtibG9ja3N9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGJsb2Nrcy5nZXRLZXkodGhpcy4jYm91bmQoe3BhdGh9LCAwKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwUmVzT3V0LnNldEludDMyKDAsIGtleSA/IDEgOiAwLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3luY0RpciBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhEZWxldGUobmFtZSwgc3luY0Rpcikge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgVVJMKG5hbWUsICdmaWxlOi8vbG9jYWxob3N0LycpLnBhdGhuYW1lO1xuICAgICAgbG9nKGB4RGVsZXRlICR7cGF0aH0gJHtzeW5jRGlyfWApO1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICByZXR1cm4gYmxvY2tzLmRlbGV0ZShJREJLZXlSYW5nZS5ib3VuZChbcGF0aF0sIFtwYXRoLCBbXV0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzeW5jRGlyKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy4jaWRiLnN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHVyZ2Ugb2Jzb2xldGUgYmxvY2tzIGZyb20gYSBkYXRhYmFzZSBmaWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICovXG4gIGFzeW5jIHB1cmdlKHBhdGgpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgYXdhaXQgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgYXN5bmMgKHtibG9ja3N9KSA9PiB7XG4gICAgICBjb25zdCBwdXJnZUJsb2NrID0gYXdhaXQgYmxvY2tzLmdldChbcGF0aCwgJ3B1cmdlJywgMF0pO1xuICAgICAgaWYgKHB1cmdlQmxvY2spIHtcbiAgICAgICAgZm9yIChjb25zdCBbcGFnZU9mZnNldCwgdmVyc2lvbl0gb2YgcHVyZ2VCbG9jay5kYXRhKSB7XG4gICAgICAgICAgYmxvY2tzLmRlbGV0ZShJREJLZXlSYW5nZS5ib3VuZChcbiAgICAgICAgICAgIFtwYXRoLCBwYWdlT2Zmc2V0LCB2ZXJzaW9uXSxcbiAgICAgICAgICAgIFtwYXRoLCBwYWdlT2Zmc2V0LCBJbmZpbml0eV0sXG4gICAgICAgICAgICB0cnVlLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGJsb2Nrcy5kZWxldGUoW3BhdGgsICdwdXJnZScsIDBdKTtcbiAgICAgIH1cbiAgICAgIGxvZyhgcHVyZ2UgJHtwYXRofSAke3B1cmdlQmxvY2s/LmRhdGEuc2l6ZSA/PyAwfSBwYWdlcyBpbiAke0RhdGUubm93KCkgLSBzdGFydH0gbXNgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25kaXRpb25hbGx5IHNjaGVkdWxlIGEgcHVyZ2UgdGFzay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuUGFnZXMgXG4gICAqL1xuICAjbWF5YmVQdXJnZShwYXRoLCBuUGFnZXMpIHtcbiAgICBpZiAodGhpcy4jb3B0aW9ucy5wdXJnZSA9PT0gJ21hbnVhbCcgfHxcbiAgICAgICAgdGhpcy4jcGVuZGluZ1B1cmdlcy5oYXMocGF0aCkgfHxcbiAgICAgICAgblBhZ2VzIDwgdGhpcy4jb3B0aW9ucy5wdXJnZUF0TGVhc3QpIHtcbiAgICAgIC8vIE5vIHB1cmdlIG5lZWRlZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjaykge1xuICAgICAgZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5wdXJnZShwYXRoKTtcbiAgICAgICAgdGhpcy4jcGVuZGluZ1B1cmdlcy5kZWxldGUocGF0aClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wdXJnZShwYXRoKTtcbiAgICAgICAgdGhpcy4jcGVuZGluZ1B1cmdlcy5kZWxldGUocGF0aClcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLiNwZW5kaW5nUHVyZ2VzLmFkZChwYXRoKTtcbiAgfVxuXG4gICNib3VuZChmaWxlLCBiZWdpbiwgZW5kID0gMCkge1xuICAgIC8vIEZldGNoIG5ld2VzdCBibG9jayAwLiBGb3Igb3RoZXIgYmxvY2tzLCB1c2UgYmxvY2sgMCB2ZXJzaW9uLlxuICAgIGNvbnN0IHZlcnNpb24gPSAhYmVnaW4gfHwgLWJlZ2luIDwgZmlsZS5ibG9jazAuZGF0YS5sZW5ndGggP1xuICAgICAgLUluZmluaXR5IDpcbiAgICAgIGZpbGUuYmxvY2swLnZlcnNpb247XG4gICAgcmV0dXJuIElEQktleVJhbmdlLmJvdW5kKFxuICAgICAgW2ZpbGUucGF0aCwgYmVnaW4sIHZlcnNpb25dLFxuICAgICAgW2ZpbGUucGF0aCwgZW5kLCBJbmZpbml0eV0pO1xuICB9XG5cbiAgLy8gVGhlIGRhdGFiYXNlIHBhZ2Ugc2l6ZSBjYW4gYmUgY2hhbmdlZCB3aXRoIFBSQUdNQSBwYWdlX3NpemUgYW5kIFZBQ1VVTS5cbiAgLy8gVGhlIHVwZGF0ZWQgZmlsZSB3aWxsIGJlIG92ZXJ3cml0dGVuIHdpdGggYSByZWd1bGFyIHRyYW5zYWN0aW9uIHVzaW5nXG4gIC8vIHRoZSBvbGQgcGFnZSBzaXplLiBBZnRlciB0aGF0IGl0IHdpbGwgYmUgcmVhZCBhbmQgd3JpdHRlbiB1c2luZyB0aGVcbiAgLy8gbmV3IHBhZ2Ugc2l6ZSwgc28gdGhlIEluZGV4ZWREQiBvYmplY3RzIG11c3QgYmUgY29tYmluZWQgb3Igc3BsaXRcbiAgLy8gYXBwcm9wcmlhdGVseS5cbiAgYXN5bmMgI3JlYmxvY2tJZk5lZWRlZChmaWxlKSB7XG4gICAgY29uc3Qgb2xkUGFnZVNpemUgPSBmaWxlLmJsb2NrMC5kYXRhLmxlbmd0aDtcbiAgICBpZiAob2xkUGFnZVNpemUgPCAxOCkgcmV0dXJuOyAvLyBubyBwYWdlIHNpemUgZGVmaW5lZFxuXG4gICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhmaWxlLmJsb2NrMC5kYXRhLmJ1ZmZlciwgZmlsZS5ibG9jazAuZGF0YS5ieXRlT2Zmc2V0KTtcbiAgICBsZXQgbmV3UGFnZVNpemUgPSB2aWV3LmdldFVpbnQxNigxNik7XG4gICAgaWYgKG5ld1BhZ2VTaXplID09PSAxKSBuZXdQYWdlU2l6ZSA9IDY1NTM2O1xuICAgIGlmIChuZXdQYWdlU2l6ZSA9PT0gb2xkUGFnZVNpemUpIHJldHVybjsgLy8gbm8gcGFnZSBzaXplIGNoYW5nZVxuXG4gICAgY29uc3QgbWF4UGFnZVNpemUgPSBNYXRoLm1heChvbGRQYWdlU2l6ZSwgbmV3UGFnZVNpemUpO1xuICAgIGNvbnN0IG5PbGRQYWdlcyA9IG1heFBhZ2VTaXplIC8gb2xkUGFnZVNpemU7XG4gICAgY29uc3Qgbk5ld1BhZ2VzID0gbWF4UGFnZVNpemUgLyBuZXdQYWdlU2l6ZTtcblxuICAgIGNvbnN0IG5ld1BhZ2VDb3VudCA9IHZpZXcuZ2V0VWludDMyKDI4KTtcbiAgICBjb25zdCBmaWxlU2l6ZSA9IG5ld1BhZ2VDb3VudCAqIG5ld1BhZ2VTaXplO1xuXG4gICAgY29uc3QgdmVyc2lvbiA9IGZpbGUuYmxvY2swLnZlcnNpb247XG4gICAgYXdhaXQgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgYXN5bmMgKHtibG9ja3N9KSA9PiB7XG4gICAgICAvLyBXaGVuIHRoZSBibG9jayBzaXplIGNoYW5nZXMsIHRoZSBlbnRpcmUgZmlsZSBpcyByZXdyaXR0ZW4uIERlbGV0ZVxuICAgICAgLy8gYWxsIGJsb2NrcyBvbGRlciB0aGFuIGJsb2NrIDAgdG8gbGVhdmUgYSBzaW5nbGUgdmVyc2lvbiBhdCBldmVyeVxuICAgICAgLy8gb2Zmc2V0LlxuICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IGJsb2Nrcy5pbmRleCgndmVyc2lvbicpLmdldEFsbEtleXMoSURCS2V5UmFuZ2UuYm91bmQoXG4gICAgICAgIFtmaWxlLnBhdGgsIHZlcnNpb24gKyAxXSxcbiAgICAgICAgW2ZpbGUucGF0aCwgSW5maW5pdHldXG4gICAgICApKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgYmxvY2tzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgYmxvY2tzLmRlbGV0ZShbZmlsZS5wYXRoLCAncHVyZ2UnLCAwXSk7XG5cbiAgICAgIC8vIERvIHRoZSBjb252ZXJzaW9uIGluIGNodW5rcyBvZiB0aGUgbGFyZ2VyIG9mIHRoZSBwYWdlIHNpemVzLlxuICAgICAgZm9yIChsZXQgaU9mZnNldCA9IDA7IGlPZmZzZXQgPCBmaWxlU2l6ZTsgaU9mZnNldCArPSBtYXhQYWdlU2l6ZSkge1xuICAgICAgICAvLyBGZXRjaCBuT2xkUGFnZXMuIFRoZXkgY2FuIGJlIGZldGNoZWQgaW4gb25lIHJlcXVlc3QgYmVjYXVzZVxuICAgICAgICAvLyB0aGVyZSBpcyBub3cgYSBzaW5nbGUgdmVyc2lvbiBpbiB0aGUgZmlsZS5cbiAgICAgICAgY29uc3Qgb2xkUGFnZXMgPSBhd2FpdCBibG9ja3MuZ2V0QWxsKFxuICAgICAgICAgIElEQktleVJhbmdlLmxvd2VyQm91bmQoW2ZpbGUucGF0aCwgLShpT2Zmc2V0ICsgbWF4UGFnZVNpemUpLCBJbmZpbml0eV0pLFxuICAgICAgICAgIG5PbGRQYWdlcyk7XG4gICAgICAgIGZvciAoY29uc3Qgb2xkUGFnZSBvZiBvbGRQYWdlcykge1xuICAgICAgICAgIGJsb2Nrcy5kZWxldGUoW29sZFBhZ2UucGF0aCwgb2xkUGFnZS5vZmZzZXQsIG9sZFBhZ2UudmVyc2lvbl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCB0byBuZXcgcGFnZXMuXG4gICAgICAgIGlmIChuTmV3UGFnZXMgPT09IDEpIHtcbiAgICAgICAgICAvLyBDb21iaW5lIG5PbGRQYWdlcyBvbGQgcGFnZXMgaW50byBhIG5ldyBwYWdlLlxuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KG5ld1BhZ2VTaXplKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IG9sZFBhZ2Ugb2Ygb2xkUGFnZXMpIHtcbiAgICAgICAgICAgIGJ1ZmZlci5zZXQob2xkUGFnZS5kYXRhLCAtKGlPZmZzZXQgKyBvbGRQYWdlLm9mZnNldCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdQYWdlID0ge1xuICAgICAgICAgICAgcGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgICAgb2Zmc2V0OiAtaU9mZnNldCxcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICBkYXRhOiBidWZmZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChuZXdQYWdlLm9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgbmV3UGFnZS5maWxlU2l6ZSA9IGZpbGVTaXplO1xuICAgICAgICAgICAgZmlsZS5ibG9jazAgPSBuZXdQYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja3MucHV0KG5ld1BhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNwbGl0IGFuIG9sZCBwYWdlIGludG8gbk5ld1BhZ2VzIG5ldyBwYWdlcy5cbiAgICAgICAgICBjb25zdCBvbGRQYWdlID0gb2xkUGFnZXNbMF07XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuTmV3UGFnZXM7ICsraSkge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gLShpT2Zmc2V0ICsgaSAqIG5ld1BhZ2VTaXplKTtcbiAgICAgICAgICAgIGlmICgtb2Zmc2V0ID49IGZpbGVTaXplKSBicmVhaztcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2UgPSB7XG4gICAgICAgICAgICAgIHBhdGg6IG9sZFBhZ2UucGF0aCxcbiAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgICAgICBkYXRhOiBvbGRQYWdlLmRhdGEuc3ViYXJyYXkoaSAqIG5ld1BhZ2VTaXplLCAoaSArIDEpICogbmV3UGFnZVNpemUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3UGFnZS5vZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgICAgbmV3UGFnZS5maWxlU2l6ZSA9IGZpbGVTaXplO1xuICAgICAgICAgICAgICBmaWxlLmJsb2NrMCA9IG5ld1BhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9ja3MucHV0KG5ld1BhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5EYXRhYmFzZShpZGJEYXRhYmFzZU5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gZ2xvYmFsVGhpcy5pbmRleGVkREIub3BlbihpZGJEYXRhYmFzZU5hbWUsIDUpO1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYmxvY2tzID0gcmVxdWVzdC5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoJ2Jsb2NrcycsIHtcbiAgICAgICAga2V5UGF0aDogWydwYXRoJywgJ29mZnNldCcsICd2ZXJzaW9uJ11cbiAgICAgIH0pO1xuICAgICAgYmxvY2tzLmNyZWF0ZUluZGV4KCd2ZXJzaW9uJywgWydwYXRoJywgJ3ZlcnNpb24nXSk7XG4gICAgfSk7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgKCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgfSk7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG59IiwiLy8gQ29weXJpZ2h0IDIwMjIgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuLy8gSW5kZXhlZERCIHRyYW5zYWN0aW9ucyBvbGRlciB0aGFuIHRoaXMgd2lsbCBiZSByZXBsYWNlZC5cbmNvbnN0IE1BWF9UUkFOU0FDVElPTl9MSUZFVElNRV9NSUxMSVMgPSA1XzAwMDtcblxuLy8gRm9yIGRlYnVnZ2luZy5cbmxldCBuZXh0VHhJZCA9IDA7XG5jb25zdCBtYXBUeFRvSWQgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgLy8gY29uc29sZS5kZWJ1ZyguLi5hcmdzKTtcbn1cblxuLy8gVGhpcyBjbGFzcyBtYW5hZ2VzIElEQlRyYW5zYWN0aW9uIGFuZCBJREJSZXF1ZXN0IGluc3RhbmNlcy4gSXQgdHJpZXNcbi8vIHRvIHJldXNlIHRyYW5zYWN0aW9ucyB0byBtaW5pbWl6ZSB0cmFuc2FjdGlvbiBvdmVyaGVhZC5cbmV4cG9ydCBjbGFzcyBJREJDb250ZXh0IHtcbiAgLyoqIEB0eXBlIHtJREJEYXRhYmFzZX0gKi8gI2RiO1xuICAvKiogQHR5cGUge1Byb21pc2U8SURCRGF0YWJhc2U+fSAqLyAjZGJSZWFkeTtcbiAgI3R4T3B0aW9ucztcblxuICAvKiogQHR5cGUge0lEQlRyYW5zYWN0aW9ufSAqLyAjdHggPSBudWxsO1xuICAjdHhUaW1lc3RhbXAgPSAwO1xuICAjcnVuQ2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgI3B1dENoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCRGF0YWJhc2V8UHJvbWlzZTxJREJEYXRhYmFzZT59IGlkYkRhdGFiYXNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZGJEYXRhYmFzZSwgdHhPcHRpb25zID0geyBkdXJhYmlsaXR5OiAnZGVmYXVsdCcgfSkge1xuICAgIHRoaXMuI2RiUmVhZHkgPSBQcm9taXNlLnJlc29sdmUoaWRiRGF0YWJhc2UpLnRoZW4oZGIgPT4gdGhpcy4jZGIgPSBkYik7XG4gICAgdGhpcy4jdHhPcHRpb25zID0gdHhPcHRpb25zO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgY29uc3QgZGIgPSB0aGlzLiNkYiA/PyBhd2FpdCB0aGlzLiNkYlJlYWR5O1xuICAgIGF3YWl0IHRoaXMuI3J1bkNoYWluO1xuICAgIGF3YWl0IHRoaXMuc3luYygpO1xuICAgIGRiLmNsb3NlKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSdW4gYSBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBvYmplY3Qgc3RvcmVzLiBUaGUgZnVuY3Rpb25cbiAgICogc2hvdWxkIGJlIGlkZW1wb3RlbnQgaW4gY2FzZSBpdCBpcyBwYXNzZWQgYW4gZXhwaXJlZCB0cmFuc2FjdGlvbi5cbiAgICogQHBhcmFtIHtJREJUcmFuc2FjdGlvbk1vZGV9IG1vZGVcbiAgICogQHBhcmFtIHsoc3RvcmVzOiBPYmplY3QuPHN0cmluZywgT2JqZWN0U3RvcmU+KSA9PiBhbnl9IGYgXG4gICAqL1xuICBhc3luYyBydW4obW9kZSwgZikge1xuICAgIC8vIEVuc3VyZSB0aGF0IGZ1bmN0aW9ucyBydW4gc2VxdWVudGlhbGx5LlxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI3J1bkNoYWluLnRoZW4oKCkgPT4gdGhpcy4jcnVuKG1vZGUsIGYpKTtcbiAgICB0aGlzLiNydW5DaGFpbiA9IHJlc3VsdC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lEQlRyYW5zYWN0aW9uTW9kZX0gbW9kZVxuICAgKiBAcGFyYW0geyhzdG9yZXM6IE9iamVjdC48c3RyaW5nLCBPYmplY3RTdG9yZT4pID0+IGFueX0gZiBcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBhc3luYyAjcnVuKG1vZGUsIGYpIHtcbiAgICBjb25zdCBkYiA9IHRoaXMuI2RiID8/IGF3YWl0IHRoaXMuI2RiUmVhZHk7XG4gICAgaWYgKG1vZGUgPT09ICdyZWFkd3JpdGUnICYmIHRoaXMuI3R4Py5tb2RlID09PSAncmVhZG9ubHknKSB7XG4gICAgICAvLyBNb2RlIHJlcXVpcmVzIGEgbmV3IHRyYW5zYWN0aW9uLlxuICAgICAgdGhpcy4jdHggPSBudWxsO1xuICAgIH0gZWxzZSBpZiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLiN0eFRpbWVzdGFtcCA+IE1BWF9UUkFOU0FDVElPTl9MSUZFVElNRV9NSUxMSVMpIHtcbiAgICAgIC8vIENocm9tZSB0aW1lcyBvdXQgdHJhbnNhY3Rpb25zIGFmdGVyIDYwIHNlY29uZHMgc28gcmVmcmVzaCBwcmVlbXB0aXZlbHkuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLiN0eD8uY29tbWl0KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGxpY2l0IGNvbW1pdCBjYW4gZmFpbCBidXQgdGhpcyBjYW4gYmUgaWdub3JlZCBpZiBpdCB3aWxsXG4gICAgICAgIC8vIGF1dG8tY29tbWl0IGFueXdheS5cbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ0ludmFsaWRTdGF0ZUVycm9yJykgdGhyb3cgZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCB0byB0aGUgbmV4dCB0YXNrIHRvIGFsbG93IHByb2Nlc3NpbmcuXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSkpO1xuICAgICAgdGhpcy4jdHggPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFJ1biB0aGUgdXNlciBmdW5jdGlvbiB3aXRoIGEgcmV0cnkgaW4gY2FzZSB0aGUgdHJhbnNhY3Rpb24gaXMgaW52YWxpZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7ICsraSkge1xuICAgICAgaWYgKCF0aGlzLiN0eCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuI3R4ID0gZGIudHJhbnNhY3Rpb24oZGIub2JqZWN0U3RvcmVOYW1lcywgbW9kZSwgdGhpcy4jdHhPcHRpb25zKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gdGhpcy4jdHhUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgICAvLyBDaGFpbiB0aGUgcmVzdWx0IG9mIGV2ZXJ5IHRyYW5zYWN0aW9uLiBJZiBhbnkgdHJhbnNhY3Rpb24gaXNcbiAgICAgICAgLy8gYWJvcnRlZCB0aGVuIHRoZSBuZXh0IHN5bmMoKSBjYWxsIHdpbGwgdGhyb3cuXG4gICAgICAgIHRoaXMuI3B1dENoYWluID0gdGhpcy4jcHV0Q2hhaW4udGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI3R4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiN0eCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jdHggPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxvZyhgdHJhbnNhY3Rpb24gJHttYXBUeFRvSWQuZ2V0KGV2ZW50LnRhcmdldCl9IGNvbXBsZXRlYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuI3R4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3R4IGFib3J0JywgKHBlcmZvcm1hbmNlLm5vdygpIC0gdGltZXN0YW1wKS8xMDAwKTtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBjb25zdCBlID0gZXZlbnQudGFyZ2V0LmVycm9yO1xuICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiN0eCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jdHggPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxvZyhgdHJhbnNhY3Rpb24gJHttYXBUeFRvSWQuZ2V0KGV2ZW50LnRhcmdldCl9IGFib3J0ZWRgLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsb2coYG5ldyB0cmFuc2FjdGlvbiAke25leHRUeElkfSAke21vZGV9YCk7XG4gICAgICAgIG1hcFR4VG9JZC5zZXQodGhpcy4jdHgsIG5leHRUeElkKyspO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzdG9yZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoQXJyYXkuZnJvbShkYi5vYmplY3RTdG9yZU5hbWVzLCBuYW1lID0+IHtcbiAgICAgICAgICByZXR1cm4gW25hbWUsIG5ldyBPYmplY3RTdG9yZSh0aGlzLiN0eC5vYmplY3RTdG9yZShuYW1lKSldO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBhd2FpdCBmKHN0b3Jlcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuI3R4ID0gbnVsbDtcbiAgICAgICAgaWYgKGkpIHRocm93IGU7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybigncmV0cnlpbmcgd2l0aCBuZXcgdHJhbnNhY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jKCkge1xuICAgIC8vIFdhaXQgdW50aWwgYWxsIHRyYW5zYWN0aW9ucyBzaW5jZSB0aGUgcHJldmlvdXMgc3luYyBoYXZlIGNvbW1pdHRlZC5cbiAgICAvLyBUaHJvdyBpZiBhbnkgdHJhbnNhY3Rpb24gZmFpbGVkLlxuICAgIGF3YWl0IHRoaXMuI3J1bkNoYWluO1xuICAgIGF3YWl0IHRoaXMuI3B1dENoYWluO1xuICAgIHRoaXMuI3B1dENoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gY29udmVydCBJREJSZXF1ZXN0IHRvIFByb21pc2UuXG4gKiBAcGFyYW0ge0lEQlJlcXVlc3R9IHJlcXVlc3QgXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gd3JhcFJlcXVlc3QocmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpKTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpKTtcbiAgfSk7XG59XG5cbi8vIElEQk9iamVjdFN0b3JlIHdyYXBwZXIgcGFzc2VkIHRvIElEQkNvbnRleHQgcnVuIGZ1bmN0aW9ucy5cbmNsYXNzIE9iamVjdFN0b3JlIHtcbiAgI29iamVjdFN0b3JlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lEQk9iamVjdFN0b3JlfSBvYmplY3RTdG9yZSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iamVjdFN0b3JlKSB7XG4gICAgdGhpcy4jb2JqZWN0U3RvcmUgPSBvYmplY3RTdG9yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lEQlZhbGlkS2V5fElEQktleVJhbmdlfSBxdWVyeSBcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQocXVlcnkpIHtcbiAgICBsb2coYGdldCAke3RoaXMuI29iamVjdFN0b3JlLm5hbWV9YCwgcXVlcnkpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNvYmplY3RTdG9yZS5nZXQocXVlcnkpO1xuICAgIHJldHVybiB3cmFwUmVxdWVzdChyZXF1ZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lEQlZhbGlkS2V5fElEQktleVJhbmdlfSBxdWVyeSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb3VudF1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICAgZ2V0QWxsKHF1ZXJ5LCBjb3VudCkge1xuICAgIGxvZyhgZ2V0QWxsICR7dGhpcy4jb2JqZWN0U3RvcmUubmFtZX1gLCBxdWVyeSwgY291bnQpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNvYmplY3RTdG9yZS5nZXRBbGwocXVlcnksIGNvdW50KTtcbiAgICByZXR1cm4gd3JhcFJlcXVlc3QocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtJREJWYWxpZEtleXxJREJLZXlSYW5nZX0gcXVlcnkgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElEQlZhbGlkS2V5Pn1cbiAgICovXG4gIGdldEtleShxdWVyeSkge1xuICAgIGxvZyhgZ2V0S2V5ICR7dGhpcy4jb2JqZWN0U3RvcmUubmFtZX1gLCBxdWVyeSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI29iamVjdFN0b3JlLmdldEtleShxdWVyeSk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCVmFsaWRLZXl8SURCS2V5UmFuZ2V9IHF1ZXJ5IFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gICBnZXRBbGxLZXlzKHF1ZXJ5LCBjb3VudCkge1xuICAgIGxvZyhgZ2V0QWxsS2V5cyAke3RoaXMuI29iamVjdFN0b3JlLm5hbWV9YCwgcXVlcnksIGNvdW50KTtcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy4jb2JqZWN0U3RvcmUuZ2V0QWxsS2V5cyhxdWVyeSwgY291bnQpO1xuICAgIHJldHVybiB3cmFwUmVxdWVzdChyZXF1ZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHBhcmFtIHtJREJWYWxpZEtleX0gW2tleV0gXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgIHB1dCh2YWx1ZSwga2V5KSB7XG4gICAgbG9nKGBwdXQgJHt0aGlzLiNvYmplY3RTdG9yZS5uYW1lfWAsIHZhbHVlLCBrZXkpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNvYmplY3RTdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCVmFsaWRLZXl8SURCS2V5UmFuZ2V9IHF1ZXJ5IFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gICBkZWxldGUocXVlcnkpIHtcbiAgICBsb2coYGRlbGV0ZSAke3RoaXMuI29iamVjdFN0b3JlLm5hbWV9YCwgcXVlcnkpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNvYmplY3RTdG9yZS5kZWxldGUocXVlcnkpO1xuICAgIHJldHVybiB3cmFwUmVxdWVzdChyZXF1ZXN0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvZyhgY2xlYXIgJHt0aGlzLiNvYmplY3RTdG9yZS5uYW1lfWApO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNvYmplY3RTdG9yZS5jbGVhcigpO1xuICAgIHJldHVybiB3cmFwUmVxdWVzdChyZXF1ZXN0KTtcbiAgfVxuXG4gIGluZGV4KG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEluZGV4KHRoaXMuI29iamVjdFN0b3JlLmluZGV4KG5hbWUpKTtcbiAgfVxufVxuXG5jbGFzcyBJbmRleCB7XG4gIC8qKiBAdHlwZSB7SURCSW5kZXh9ICovICNpbmRleDtcblxuICAvKipcbiAgICogQHBhcmFtIHtJREJJbmRleH0gaW5kZXggXG4gICAqL1xuICAgY29uc3RydWN0b3IoaW5kZXgpIHtcbiAgICB0aGlzLiNpbmRleCA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCVmFsaWRLZXl8SURCS2V5UmFuZ2V9IHF1ZXJ5IFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJREJWYWxpZEtleVtdPn1cbiAgICovXG4gIGdldEFsbEtleXMocXVlcnksIGNvdW50KSB7XG4gICAgbG9nKGBJREJJbmRleC5nZXRBbGxLZXlzICR7dGhpcy4jaW5kZXgub2JqZWN0U3RvcmUubmFtZX08JHt0aGlzLiNpbmRleC5uYW1lfT5gLCBxdWVyeSwgY291bnQpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNpbmRleC5nZXRBbGxLZXlzKHF1ZXJ5LCBjb3VudCk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG59IiwiLy8gQ29weXJpZ2h0IDIwMjIgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbmltcG9ydCAqIGFzIFZGUyBmcm9tICcuLi9WRlMuanMnO1xuXG5jb25zdCBMT0NLX1RZUEVfTUFTSyA9XG4gIFZGUy5TUUxJVEVfTE9DS19OT05FIHxcbiAgVkZTLlNRTElURV9MT0NLX1NIQVJFRCB8XG4gIFZGUy5TUUxJVEVfTE9DS19SRVNFUlZFRCB8XG4gIFZGUy5TUUxJVEVfTE9DS19QRU5ESU5HIHxcbiAgVkZTLlNRTElURV9MT0NLX0VYQ0xVU0lWRTtcblxuZXhwb3J0IGNsYXNzIFdlYkxvY2tzQmFzZSB7XG4gIGdldCBzdGF0ZSgpIHsgcmV0dXJuIHRoaXMuI3N0YXRlOyB9XG4gICNzdGF0ZSA9IFZGUy5TUUxJVEVfTE9DS19OT05FO1xuXG4gIHRpbWVvdXRNaWxsaXMgPSAwO1xuXG4gIC8qKiBAdHlwZSB7TWFwPHN0cmluZywgKHZhbHVlOiBhbnkpID0+IHZvaWQ+fSAqLyAjcmVsZWFzZXJzID0gbmV3IE1hcCgpO1xuICAvKiogQHR5cGUge1Byb21pc2U8MHw1fDM4NTA+fSAqLyAjcGVuZGluZyA9IFByb21pc2UucmVzb2x2ZSgwKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTwwfDV8Mzg1MD59IFNRTElURV9PSywgU1FMSVRFX0JVU1ksIFNRTElURV9JT0VSUl9MT0NLXG4gICAqL1xuICBhc3luYyBsb2NrKGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FwcGx5KHRoaXMuI2xvY2ssIGZsYWdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPDB8NXwzODUwPn0gU1FMSVRFX09LLCBTUUxJVEVfSU9FUlJfTE9DS1xuICAgKi9cbiAgYXN5bmMgdW5sb2NrKGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FwcGx5KHRoaXMuI3VubG9jaywgZmxhZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgYXN5bmMgaXNTb21ld2hlcmVSZXNlcnZlZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHsodGFyZ2V0U3RhdGU6IG51bWJlcikgPT4gdm9pZH0gbWV0aG9kIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqL1xuICBhc3luYyAjYXBwbHkobWV0aG9kLCBmbGFncykge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlID0gZmxhZ3MgJiBMT0NLX1RZUEVfTUFTSztcbiAgICB0cnkge1xuICAgICAgLy8gRm9yY2UgbG9ja3MgYW5kIHVubG9ja3MgdG8gcnVuIHNlcXVlbnRpYWxseS4gVGhpcyBhbGxvd3Mgbm90XG4gICAgICAvLyB3YWl0aW5nIGZvciB1bmxvY2tzIHRvIGNvbXBsZXRlLlxuICAgICAgY29uc3QgY2FsbCA9ICgpID0+IG1ldGhvZC5jYWxsKHRoaXMsIHRhcmdldFN0YXRlKTtcbiAgICAgIGF3YWl0ICh0aGlzLiNwZW5kaW5nID0gdGhpcy4jcGVuZGluZy50aGVuKGNhbGwsIGNhbGwpKTtcbiAgICAgIHRoaXMuI3N0YXRlID0gdGFyZ2V0U3RhdGU7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQlVTWTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9MT0NLO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jICNsb2NrKHRhcmdldFN0YXRlKSB7XG4gICAgaWYgKHRhcmdldFN0YXRlID09PSB0aGlzLiNzdGF0ZSkgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgc3dpdGNoICh0aGlzLiNzdGF0ZSkge1xuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfTk9ORTpcbiAgICAgICAgc3dpdGNoICh0YXJnZXRTdGF0ZSkge1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1NIQVJFRDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9OT05FdG9TSEFSRUQoKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHRyYW5zaXRpb24gJHt0aGlzLiNzdGF0ZX0gLT4gJHt0YXJnZXRTdGF0ZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19TSEFSRUQ6XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0U3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19SRVNFUlZFRDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9TSEFSRUR0b1JFU0VSVkVEKCk7XG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfRVhDTFVTSVZFOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1NIQVJFRHRvRVhDTFVTSVZFKCk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2l0aW9uICR7dGhpcy4jc3RhdGV9IC0+ICR7dGFyZ2V0U3RhdGV9YCk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfUkVTRVJWRUQ6XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0U3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19FWENMVVNJVkU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fUkVTRVJWRUR0b0VYQ0xVU0lWRSgpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgdHJhbnNpdGlvbiAke3RoaXMuI3N0YXRlfSAtPiAke3RhcmdldFN0YXRlfWApO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2l0aW9uICR7dGhpcy4jc3RhdGV9IC0+ICR7dGFyZ2V0U3RhdGV9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgI3VubG9jayh0YXJnZXRTdGF0ZSkge1xuICAgIGlmICh0YXJnZXRTdGF0ZSA9PT0gdGhpcy4jc3RhdGUpICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICBzd2l0Y2ggKHRoaXMuI3N0YXRlKSB7XG4gICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19FWENMVVNJVkU6XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0U3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19TSEFSRUQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fRVhDTFVTSVZFdG9TSEFSRUQoKTtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19OT05FOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX0VYQ0xVU0lWRXRvTk9ORSgpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgdHJhbnNpdGlvbiAke3RoaXMuI3N0YXRlfSAtPiAke3RhcmdldFN0YXRlfWApO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1JFU0VSVkVEOlxuICAgICAgICBzd2l0Y2ggKHRhcmdldFN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfU0hBUkVEOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1JFU0VSVkVEdG9TSEFSRUQoKTtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19OT05FOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1JFU0VSVkVEdG9OT05FKCk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2l0aW9uICR7dGhpcy4jc3RhdGV9IC0+ICR7dGFyZ2V0U3RhdGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfU0hBUkVEOlxuICAgICAgICBzd2l0Y2ggKHRhcmdldFN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfTk9ORTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9TSEFSRUR0b05PTkUoKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHRyYW5zaXRpb24gJHt0aGlzLiNzdGF0ZX0gLT4gJHt0YXJnZXRTdGF0ZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgdHJhbnNpdGlvbiAke3RoaXMuI3N0YXRlfSAtPiAke3RhcmdldFN0YXRlfWApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9OT05FdG9TSEFSRUQoKSB7XG4gIH1cblxuICBhc3luYyBfU0hBUkVEdG9FWENMVVNJVkUoKSB7XG4gICAgYXdhaXQgdGhpcy5fU0hBUkVEdG9SRVNFUlZFRCgpO1xuICAgIGF3YWl0IHRoaXMuX1JFU0VSVkVEdG9FWENMVVNJVkUoKTtcbiAgfVxuXG4gIGFzeW5jIF9TSEFSRUR0b1JFU0VSVkVEKCkge1xuICB9XG5cbiAgYXN5bmMgX1JFU0VSVkVEdG9FWENMVVNJVkUoKSB7XG4gIH1cblxuICBhc3luYyBfRVhDTFVTSVZFdG9SRVNFUlZFRCgpIHtcbiAgfVxuXG4gIGFzeW5jIF9FWENMVVNJVkV0b1NIQVJFRCgpIHtcbiAgICBhd2FpdCB0aGlzLl9FWENMVVNJVkV0b1JFU0VSVkVEKCk7XG4gICAgYXdhaXQgdGhpcy5fUkVTRVJWRUR0b1NIQVJFRCgpO1xuICB9XG5cbiAgYXN5bmMgX0VYQ0xVU0lWRXRvTk9ORSgpIHtcbiAgICBhd2FpdCB0aGlzLl9FWENMVVNJVkV0b1JFU0VSVkVEKCk7XG4gICAgYXdhaXQgdGhpcy5fUkVTRVJWRUR0b1NIQVJFRCgpO1xuICAgIGF3YWl0IHRoaXMuX1NIQVJFRHRvTk9ORSgpO1xuICB9XG5cbiAgYXN5bmMgX1JFU0VSVkVEdG9TSEFSRUQoKSB7XG4gIH1cblxuICBhc3luYyBfUkVTRVJWRUR0b05PTkUoKSB7XG4gICAgYXdhaXQgdGhpcy5fUkVTRVJWRUR0b1NIQVJFRCgpO1xuICAgIGF3YWl0IHRoaXMuX1NIQVJFRHRvTk9ORSgpO1xuICB9XG5cbiAgYXN5bmMgX1NIQVJFRHRvTk9ORSgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9ja05hbWUgXG4gICAqIEBwYXJhbSB7TG9ja09wdGlvbnN9IG9wdGlvbnMgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPD9Mb2NrPn1cbiAgICovXG4gIF9hY3F1aXJlV2ViTG9jayhsb2NrTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3IubG9ja3MucmVxdWVzdChsb2NrTmFtZSwgb3B0aW9ucywgbG9jayA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShsb2NrKTtcbiAgICAgICAgICBpZiAobG9jaykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlbGVhc2UgPT4gdGhpcy4jcmVsZWFzZXJzLnNldChsb2NrTmFtZSwgcmVsZWFzZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NrTmFtZSBcbiAgICovXG4gIF9yZWxlYXNlV2ViTG9jayhsb2NrTmFtZSkge1xuICAgIHRoaXMuI3JlbGVhc2Vycy5nZXQobG9ja05hbWUpPy4oKTtcbiAgICB0aGlzLiNyZWxlYXNlcnMuZGVsZXRlKGxvY2tOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9ja05hbWUgXG4gICAqL1xuICBhc3luYyBfcG9sbFdlYkxvY2sobG9ja05hbWUpIHtcbiAgICBjb25zdCBxdWVyeSA9IGF3YWl0IG5hdmlnYXRvci5sb2Nrcy5xdWVyeSgpO1xuICAgIHJldHVybiBxdWVyeS5oZWxkLmZpbmQoKHtuYW1lfSkgPT4gbmFtZSA9PT0gbG9ja05hbWUpPy5tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHs/QWJvcnRTaWduYWx9XG4gICAqL1xuICBfZ2V0VGltZW91dFNpZ25hbCgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0TWlsbGlzKSB7XG4gICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGFib3J0Q29udHJvbGxlci5hYm9ydCgpLCB0aGlzLnRpbWVvdXRNaWxsaXMpO1xuICAgICAgcmV0dXJuIGFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYkxvY2tzRXhjbHVzaXZlIGV4dGVuZHMgV2ViTG9ja3NCYXNlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbG9ja05hbWUgPSBuYW1lICsgJy1vdXRlcic7XG4gICAgdGhpcy5fcmVzZXJ2ZWROYW1lID0gbmFtZSArICctcmVzZXJ2ZWQnO1xuICB9XG5cbiAgYXN5bmMgaXNTb21ld2hlcmVSZXNlcnZlZCgpIHtcbiAgICBjb25zdCBtb2RlID0gYXdhaXQgdGhpcy5fcG9sbFdlYkxvY2sodGhpcy5fcmVzZXJ2ZWROYW1lKTtcbiAgICByZXR1cm4gbW9kZSA9PT0gJ2V4Y2x1c2l2ZSc7XG4gIH1cblxuICBhc3luYyBfTk9ORXRvU0hBUkVEKCkge1xuICAgIGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX2xvY2tOYW1lLCB7XG4gICAgICBtb2RlOiAnZXhjbHVzaXZlJyxcbiAgICAgIHNpZ25hbDogdGhpcy5fZ2V0VGltZW91dFNpZ25hbCgpXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfU0hBUkVEdG9SRVNFUlZFRCgpIHtcbiAgICBhd2FpdCB0aGlzLl9hY3F1aXJlV2ViTG9jayh0aGlzLl9yZXNlcnZlZE5hbWUsIHtcbiAgICAgIG1vZGU6ICdleGNsdXNpdmUnLFxuICAgICAgc2lnbmFsOiB0aGlzLl9nZXRUaW1lb3V0U2lnbmFsKClcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9SRVNFUlZFRHRvU0hBUkVEKCkge1xuICAgIHRoaXMuX3JlbGVhc2VXZWJMb2NrKHRoaXMuX3Jlc2VydmVkTmFtZSk7XG4gIH1cblxuICBhc3luYyBfU0hBUkVEdG9OT05FKCkge1xuICAgIHRoaXMuX3JlbGVhc2VXZWJMb2NrKHRoaXMuX2xvY2tOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2ViTG9ja3NTaGFyZWQgZXh0ZW5kcyBXZWJMb2Nrc0Jhc2Uge1xuICBtYXhSZXRyeU1pbGxpcyA9IDEwMDA7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fb3V0ZXJOYW1lID0gbmFtZSArICctb3V0ZXInO1xuICAgIHRoaXMuX2lubmVyTmFtZSA9IG5hbWUgKyAnLWlubmVyJztcbiAgfVxuXG4gIGFzeW5jIGlzU29tZXdoZXJlUmVzZXJ2ZWQoKSB7XG4gICAgY29uc3QgbW9kZSA9IGF3YWl0IHRoaXMuX3BvbGxXZWJMb2NrKHRoaXMuX291dGVyTmFtZSk7XG4gICAgcmV0dXJuIG1vZGUgPT09ICdleGNsdXNpdmUnO1xuICB9XG5cbiAgYXN5bmMgX05PTkV0b1NIQVJFRCgpIHtcbiAgICBhd2FpdCB0aGlzLl9hY3F1aXJlV2ViTG9jayh0aGlzLl9vdXRlck5hbWUsIHtcbiAgICAgIG1vZGU6ICdzaGFyZWQnLFxuICAgICAgc2lnbmFsOiB0aGlzLl9nZXRUaW1lb3V0U2lnbmFsKClcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLl9hY3F1aXJlV2ViTG9jayh0aGlzLl9pbm5lck5hbWUsIHtcbiAgICAgIG1vZGU6ICdzaGFyZWQnLFxuICAgICAgc2lnbmFsOiB0aGlzLl9nZXRUaW1lb3V0U2lnbmFsKClcbiAgICB9KTtcbiAgICB0aGlzLl9yZWxlYXNlV2ViTG9jayh0aGlzLl9vdXRlck5hbWUpO1xuICB9XG5cbiAgYXN5bmMgX1NIQVJFRHRvUkVTRVJWRUQoKSB7XG4gICAgbGV0IHRpbWVvdXRNaWxsaXMgPSAxO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAvLyBBdHRlbXB0IHRvIGdldCB0aGUgb3V0ZXIgbG9jayB3aXRob3V0IGJsb2NraW5nLlxuICAgICAgY29uc3QgaXNMb2NrZWQgPSBhd2FpdCB0aGlzLl9hY3F1aXJlV2ViTG9jayh0aGlzLl9vdXRlck5hbWUsIHtcbiAgICAgICAgbW9kZTogJ2V4Y2x1c2l2ZScsXG4gICAgICAgIGlmQXZhaWxhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGlmIChpc0xvY2tlZCkgYnJlYWs7XG5cbiAgICAgIGlmIChhd2FpdCB0aGlzLmlzU29tZXdoZXJlUmVzZXJ2ZWQoKSkge1xuICAgICAgICAvLyBTb21lb25lIGVsc2UgaGFzIGEgcmVzZXJ2ZWQgbG9jayBzbyByZXRyeSBjYW5ub3Qgc3VjY2VlZC5cbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignJywgJ0Fib3J0RXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXRNaWxsaXMpKTtcbiAgICAgIHRpbWVvdXRNaWxsaXMgPSBNYXRoLm1pbigyICogdGltZW91dE1pbGxpcywgdGhpcy5tYXhSZXRyeU1pbGxpcyk7XG4gICAgfVxuICAgIHRoaXMuX3JlbGVhc2VXZWJMb2NrKHRoaXMuX2lubmVyTmFtZSk7XG4gIH1cblxuICBhc3luYyBfUkVTRVJWRUR0b0VYQ0xVU0lWRSgpIHtcbiAgICBhd2FpdCB0aGlzLl9hY3F1aXJlV2ViTG9jayh0aGlzLl9pbm5lck5hbWUsIHtcbiAgICAgIG1vZGU6ICdleGNsdXNpdmUnLFxuICAgICAgc2lnbmFsOiB0aGlzLl9nZXRUaW1lb3V0U2lnbmFsKClcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9FWENMVVNJVkV0b1JFU0VSVkVEKCkge1xuICAgIHRoaXMuX3JlbGVhc2VXZWJMb2NrKHRoaXMuX2lubmVyTmFtZSk7XG4gIH1cblxuICBhc3luYyBfUkVTRVJWRUR0b1NIQVJFRCgpIHtcbiAgICBhd2FpdCB0aGlzLl9hY3F1aXJlV2ViTG9jayh0aGlzLl9pbm5lck5hbWUsIHsgbW9kZTogJ3NoYXJlZCcgfSk7XG4gICAgdGhpcy5fcmVsZWFzZVdlYkxvY2sodGhpcy5fb3V0ZXJOYW1lKTtcbiAgfVxuXG4gIGFzeW5jIF9TSEFSRUR0b05PTkUoKSB7XG4gICAgdGhpcy5fcmVsZWFzZVdlYkxvY2sodGhpcy5faW5uZXJOYW1lKTtcbiAgfVxufSIsIi8vIENvcHlyaWdodCAyMDIxIFJveSBULiBIYXNoaW1vdG8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbmltcG9ydCAqIGFzIFNRTGl0ZSBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcWxpdGUtY29uc3RhbnRzLmpzJztcblxuY29uc3QgTUFYX0lOVDY0ID0gMHg3ZmZmZmZmZmZmZmZmZmZmbjtcbmNvbnN0IE1JTl9JTlQ2NCA9IC0weDgwMDAwMDAwMDAwMDAwMDBuO1xuXG5leHBvcnQgY2xhc3MgU1FMaXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cbmNvbnN0IGFzeW5jID0gdHJ1ZTtcblxuLyoqXG4gKiBCdWlsZHMgYSBKYXZhc2NyaXB0IEFQSSBmcm9tIHRoZSBFbXNjcmlwdGVuIG1vZHVsZS4gVGhpcyBBUEkgaXMgc3RpbGxcbiAqIGxvdy1sZXZlbCBhbmQgY2xvc2VseSBjb3JyZXNwb25kcyB0byB0aGUgQyBBUEkgZXhwb3J0ZWQgYnkgdGhlIG1vZHVsZSxcbiAqIGJ1dCBkaWZmZXJzIGluIHNvbWUgc3BlY2lmaWNzIGxpa2UgdGhyb3dpbmcgZXhjZXB0aW9ucyBvbiBlcnJvcnMuXG4gKiBAcGFyYW0geyp9IE1vZHVsZSBTUUxpdGUgRW1zY3JpcHRlbiBtb2R1bGVcbiAqIEByZXR1cm5zIHtTUUxpdGVBUEl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBGYWN0b3J5KE1vZHVsZSkge1xuICAvKiogQHR5cGUge1NRTGl0ZUFQSX0gKi8gY29uc3Qgc3FsaXRlMyA9IHt9O1xuXG4gIGNvbnN0IHNxbGl0ZUZyZWVBZGRyZXNzID0gTW9kdWxlLl9nZXRTcWxpdGVGcmVlKCk7XG5cbiAgLy8gQWxsb2NhdGUgc29tZSBzcGFjZSBmb3IgMzItYml0IHJldHVybmVkIHZhbHVlcy5cbiAgY29uc3QgdG1wID0gTW9kdWxlLl9tYWxsb2MoOCk7XG4gIGNvbnN0IHRtcFB0ciA9IFt0bXAsIHRtcCArIDRdO1xuXG4gIC8vIENvbnZlcnQgYSBKUyBzdHJpbmcgdG8gYSBDIHN0cmluZy4gc3FsaXRlM19tYWxsb2MgaXMgdXNlZCB0byBhbGxvY2F0ZVxuICAvLyBtZW1vcnkgKHVzZSBzcWxpdGUzX2ZyZWUgdG8gZGVhbGxvY2F0ZSkuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVURjgocykge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAwO1xuICAgIGNvbnN0IG4gPSBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4KHMpO1xuICAgIGNvbnN0IHp0cyA9IE1vZHVsZS5fc3FsaXRlM19tYWxsb2MobiArIDEpO1xuICAgIE1vZHVsZS5zdHJpbmdUb1VURjgocywgenRzLCBuICsgMSk7XG4gICAgcmV0dXJuIHp0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZSAzMi1iaXQgbnVtYmVycyBpbnRvIGEgNjQtYml0IChzaWduZWQpIEJpZ0ludC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvMzJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhpMzJcbiAgICogQHJldHVybnMge2JpZ2ludH1cbiAgICovXG4gIGZ1bmN0aW9uIGN2dDMyeDJUb0JpZ0ludChsbzMyLCBoaTMyKSB7XG4gICAgcmV0dXJuIChCaWdJbnQoaGkzMikgPDwgMzJuKSB8IChCaWdJbnQobG8zMikgJiAweGZmZmZmZmZmbik7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGUgMzItYml0IG51bWJlcnMgYW5kIHJldHVybiBhcyBudW1iZXIgb3IgQmlnSW50LCBkZXBlbmRpbmdcbiAgICogb24gdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbG8zMiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhpMzIgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8YmlnaW50fVxuICAgKi9cbiAgY29uc3QgY3Z0MzJ4MkFzU2FmZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGlNYXggPSBCaWdJbnQoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpID4+IDMybjtcbiAgICBjb25zdCBoaU1pbiA9IEJpZ0ludChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUikgPj4gMzJuO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsbzMyLCBoaTMyKSB7XG4gICAgICBpZiAoaGkzMiA+IGhpTWF4IHx8IGhpMzIgPCBoaU1pbikge1xuICAgICAgICAvLyBDYW4ndCBiZSBleHByZXNzZWQgYXMgYSBOdW1iZXIgc28gdXNlIEJpZ0ludC5cbiAgICAgICAgcmV0dXJuIGN2dDMyeDJUb0JpZ0ludChsbzMyLCBoaTMyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbWJpbmUgdGhlIHVwcGVyIGFuZCBsb3dlciAzMi1iaXQgbnVtYmVycy4gVGhlIGNvbXBsaWNhdGlvbiBpc1xuICAgICAgICAvLyB0aGF0IGxvMzIgaXMgYSBzaWduZWQgaW50ZWdlciB3aGljaCBtYWtlcyBtYW5pcHVsYXRpbmcgaXRzIGJpdHNcbiAgICAgICAgLy8gYSBsaXR0bGUgdHJpY2t5IC0gdGhlIHNpZ24gYml0IGdldHMgaGFuZGxlZCBzZXBhcmF0ZWx5LlxuICAgICAgICByZXR1cm4gKGhpMzIgKiAweDEwMDAwMDAwMCkgKyAobG8zMiAmIDB4N2ZmZmZmZmYpIC0gKGxvMzIgJiAweDgwMDAwMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgY29uc3QgZGF0YWJhc2VzID0gbmV3IFNldCgpO1xuICBmdW5jdGlvbiB2ZXJpZnlEYXRhYmFzZShkYikge1xuICAgIGlmICghZGF0YWJhc2VzLmhhcyhkYikpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgZGF0YWJhc2UnLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RtdFRvREIgPSBuZXcgTWFwKCk7XG4gIGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdG10KSB7XG4gICAgaWYgKCFtYXBTdG10VG9EQi5oYXMoc3RtdCkpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgc3RhdGVtZW50JywgU1FMaXRlLlNRTElURV9NSVNVU0UpO1xuICAgIH1cbiAgfVxuXG4gIHNxbGl0ZTMuYmluZF9jb2xsZWN0aW9uID0gZnVuY3Rpb24gKHN0bXQsIGJpbmRpbmdzKSB7XG4gICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJpbmRpbmdzKTtcbiAgICBjb25zdCBuQmluZGluZ3MgPSBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX2NvdW50KHN0bXQpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5CaW5kaW5nczsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBpc0FycmF5ID8gaSAtIDEgOiBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX25hbWUoc3RtdCwgaSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGJpbmRpbmdzW2tleV07XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzcWxpdGUzLmJpbmQoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU1FMaXRlLlNRTElURV9PSztcbiAgfTtcblxuICBzcWxpdGUzLmJpbmQgPSBmdW5jdGlvbiAoc3RtdCwgaSwgdmFsdWUpIHtcbiAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gKHZhbHVlIHwgMCkpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX2ludChzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF9kb3VibGUoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX3RleHQoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfYmxvYihzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX251bGwoc3RtdCwgaSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYmlnaW50Jykge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfaW50NjQoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFeGlzdGluZyBiaW5kaW5nIChvciBOVUxMKSB3aWxsIGJlIHVzZWQuXG4gICAgICAgICAgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfTk9USUNFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybigndW5rbm93biBiaW5kaW5nIGNvbnZlcnRlZCB0byBudWxsJywgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfbnVsbChzdG10LCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLmJpbmRfYmxvYiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2Jsb2InO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpLCB2YWx1ZSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHZhbHVlLmJ5dGVMZW5ndGggPz8gdmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3QgcHRyID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhieXRlTGVuZ3RoKTtcbiAgICAgIE1vZHVsZS5IRUFQVTguc3ViYXJyYXkocHRyKS5zZXQodmFsdWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCBwdHIsIGJ5dGVMZW5ndGgsIHNxbGl0ZUZyZWVBZGRyZXNzKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX2NvdW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2NvdW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX2RvdWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpLCB2YWx1ZSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX2ludCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2ludCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpLCB2YWx1ZSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgaWYgKHZhbHVlID4gMHg3ZmZmZmZmZiB8fCB2YWx1ZSA8IC0weDgwMDAwMDAwKSByZXR1cm4gU1FMaXRlLlNRTElURV9SQU5HRTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX2ludDY0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfaW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBpZiAodmFsdWUgPiBNQVhfSU5UNjQgfHwgdmFsdWUgPCBNSU5fSU5UNjQpIHJldHVybiBTUUxpdGUuU1FMSVRFX1JBTkdFO1xuXG4gICAgICBjb25zdCBsbzMyID0gdmFsdWUgJiAweGZmZmZmZmZmbjtcbiAgICAgIGNvbnN0IGhpMzIgPSB2YWx1ZSA+PiAzMm47XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIE51bWJlcihsbzMyKSwgTnVtYmVyKGhpMzIpKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfbnVsbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX251bGwnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGkpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfbmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9uYW1lJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGkpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX3RleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF90ZXh0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm5ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaSwgdmFsdWUpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHB0ciA9IGNyZWF0ZVVURjgodmFsdWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCBwdHIsIC0xLCBzcWxpdGVGcmVlQWRkcmVzcyk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jaGFuZ2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NoYW5nZXMnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRiKSB7XG4gICAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKGRiKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY2xvc2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY2xvc2UnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGIpIHtcbiAgICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoZGIpO1xuICAgICAgZGF0YWJhc2VzLmRlbGV0ZShkYik7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgZGIpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW4gPSBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICBjb25zdCB0eXBlID0gc3FsaXRlMy5jb2x1bW5fdHlwZShzdG10LCBpQ29sKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9CTE9COlxuICAgICAgICByZXR1cm4gc3FsaXRlMy5jb2x1bW5fYmxvYihzdG10LCBpQ29sKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9GTE9BVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMuY29sdW1uX2RvdWJsZShzdG10LCBpQ29sKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9JTlRFR0VSOlxuICAgICAgICBjb25zdCBsbzMyID0gc3FsaXRlMy5jb2x1bW5faW50KHN0bXQsIGlDb2wpO1xuICAgICAgICBjb25zdCBoaTMyID0gTW9kdWxlLmdldFRlbXBSZXQwKCk7XG4gICAgICAgIHJldHVybiBjdnQzMngyQXNTYWZlKGxvMzIsIGhpMzIpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX05VTEw6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX1RFWFQ6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmNvbHVtbl90ZXh0KHN0bXQsIGlDb2wpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCd1bmtub3duIHR5cGUnLCB0eXBlKTtcbiAgICB9XG4gIH07XG5cbiAgc3FsaXRlMy5jb2x1bW5fYmxvYiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IG5CeXRlcyA9IHNxbGl0ZTMuY29sdW1uX2J5dGVzKHN0bXQsIGlDb2wpO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuSEVBUFU4LnN1YmFycmF5KGFkZHJlc3MsIGFkZHJlc3MgKyBuQnl0ZXMpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fYnl0ZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2J5dGVzJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX2NvdW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9jb3VudCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX2RvdWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fZG91YmxlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX2ludCA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0cmlldmUgaW50NjQgYnV0IHVzZSBvbmx5IHRoZSBsb3dlciAzMiBiaXRzLiBUaGUgdXBwZXIgMzItYml0cyBhcmVcbiAgICAvLyBhY2Nlc3NpYmxlIHdpdGggTW9kdWxlLmdldFRlbXBSZXQwKCkuXG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5faW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5faW50NjQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgbG8zMiA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICBjb25zdCBoaTMyID0gTW9kdWxlLmdldFRlbXBSZXQwKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMik7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9uYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9uYW1lJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX25hbWVzID0gZnVuY3Rpb24gKHN0bXQpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgY29uc3QgbkNvbHVtbnMgPSBzcWxpdGUzLmNvbHVtbl9jb3VudChzdG10KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5Db2x1bW5zOyArK2kpIHtcbiAgICAgIGNvbHVtbnMucHVzaChzcWxpdGUzLmNvbHVtbl9uYW1lKHN0bXQsIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH07XG5cbiAgc3FsaXRlMy5jb2x1bW5fdGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fdGV4dCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl90eXBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl90eXBlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY3JlYXRlX2Z1bmN0aW9uID0gZnVuY3Rpb24gKGRiLCB6RnVuY3Rpb25OYW1lLCBuQXJnLCBlVGV4dFJlcCwgcEFwcCwgeEZ1bmMsIHhTdGVwLCB4RmluYWwpIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgaWYgKHhGdW5jICYmICF4U3RlcCAmJiAheEZpbmFsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuY3JlYXRlRnVuY3Rpb24oZGIsIHpGdW5jdGlvbk5hbWUsIG5BcmcsIGVUZXh0UmVwLCBwQXBwLCB4RnVuYyk7XG4gICAgICByZXR1cm4gY2hlY2soJ3NxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uJywgcmVzdWx0LCBkYik7XG4gICAgfVxuXG4gICAgaWYgKCF4RnVuYyAmJiB4U3RlcCAmJiB4RmluYWwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5jcmVhdGVBZ2dyZWdhdGUoZGIsIHpGdW5jdGlvbk5hbWUsIG5BcmcsIGVUZXh0UmVwLCBwQXBwLCB4U3RlcCwgeEZpbmFsKTtcbiAgICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19jcmVhdGVfZnVuY3Rpb24nLCByZXN1bHQsIGRiKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ2ludmFsaWQgZnVuY3Rpb24gY29tYmluYXRpb24nLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gIH07XG5cbiAgc3FsaXRlMy5jcmVhdGVfbW9kdWxlID0gZnVuY3Rpb24gKGRiLCB6TmFtZSwgbW9kdWxlLCBhcHBEYXRhKSB7XG4gICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5jcmVhdGVNb2R1bGUoZGIsIHpOYW1lLCBtb2R1bGUsIGFwcERhdGEpO1xuICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19jcmVhdGVfbW9kdWxlJywgcmVzdWx0LCBkYik7XG4gIH07XG5cbiAgc3FsaXRlMy5kYXRhX2NvdW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2RhdGFfY291bnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmRlY2xhcmVfdnRhYiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19kZWNsYXJlX3Z0YWInO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25zOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVlRhYiwgelNRTCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVlRhYiwgelNRTCk7XG4gICAgICByZXR1cm4gY2hlY2soJ3NxbGl0ZTNfZGVjbGFyZV92dGFiJywgcmVzdWx0KTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5leGVjID0gYXN5bmMgZnVuY3Rpb24gKGRiLCBzcWwsIGNhbGxiYWNrKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBzdG10IG9mIHNxbGl0ZTMuc3RhdGVtZW50cyhkYiwgc3FsKSkge1xuICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICB3aGlsZSAoYXdhaXQgc3FsaXRlMy5zdGVwKHN0bXQpID09PSBTUUxpdGUuU1FMSVRFX1JPVykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA/PyBzcWxpdGUzLmNvbHVtbl9uYW1lcyhzdG10KTtcbiAgICAgICAgICBjb25zdCByb3cgPSBzcWxpdGUzLnJvdyhzdG10KTtcbiAgICAgICAgICBhd2FpdCBjYWxsYmFjayhyb3csIGNvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX09LO1xuICB9O1xuXG4gIHNxbGl0ZTMucnVuID0gYXN5bmMgZnVuY3Rpb24gKGRiLCBzcWwsIHBhcmFtcykge1xuICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGIsIHNxbCkpIHtcbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1zKVxuICAgICAgfVxuICAgICAgYXdhaXQgc3FsaXRlMy5zdGVwKHN0bXQpXG4gICAgfVxuICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX09LO1xuICB9O1xuXG4gIHNxbGl0ZTMuZXhlY1dpdGhQYXJhbXMgPSBhc3luYyBmdW5jdGlvbiAoZGIsIHNxbCwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbHVtbnMgPSBbXTtcbiAgICBjb25zdCByb3dzID0gW11cbiAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiLCBzcWwpKSB7XG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIHNxbGl0ZTMuYmluZF9jb2xsZWN0aW9uKHN0bXQsIHBhcmFtcylcbiAgICAgIH1cbiAgICAgIHdoaWxlIChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkgPT09IFNRTGl0ZS5TUUxJVEVfUk9XKSB7XG4gICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zLmxlbmd0aCA9PT0gMCA/IHNxbGl0ZTMuY29sdW1uX25hbWVzKHN0bXQpIDogY29sdW1ucztcbiAgICAgICAgY29uc3Qgcm93ID0gc3FsaXRlMy5yb3coc3RtdCk7XG4gICAgICAgIHJvd3MucHVzaChyb3cpXG4gICAgICAgIC8vIGF3YWl0IGNhbGxiYWNrKHJvdywgY29sdW1ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByb3dzOiByb3dzLFxuICAgICAgY29sdW1uczogY29sdW1uc1xuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLmV4ZWN1dGVCYXRjaCA9IGFzeW5jIGZ1bmN0aW9uIChkYiwgc3FsUXVlcmllcywgcGFyYW1zKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNxbGl0ZTMucnVuKGRiLCBgQkVHSU4gRVhDTFVTSVZFIFRSQU5TQUNUSU9OYCwgbnVsbClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3FsUXVlcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBiaW5kUGFyYW1zID0gcGFyYW1zID8gcGFyYW1zW2ldIDogbnVsbDtcbiAgICAgICAgbGV0IHN0bXQ7XG4gICAgICAgIGNvbnN0IHN0ciA9IHNxbGl0ZTMuc3RyX25ldyhkYiwgc3FsUXVlcmllc1tpXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc3FsUG9pbnRlciA9IHNxbGl0ZTMuc3RyX3ZhbHVlKHN0cilcbiAgICAgICAgICBzdG10ID0gYXdhaXQgc3FsaXRlMy5wcmVwYXJlX3YyKGRiLCBzcWxQb2ludGVyKVxuICAgICAgICAgIGlmIChiaW5kUGFyYW1zKSB7XG4gICAgICAgICAgICBzcWxpdGUzLmJpbmRfY29sbGVjdGlvbihzdG10LnN0bXQsIGJpbmRQYXJhbXMpXG4gICAgICAgICAgfVxuICAgICAgICAgIGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10LnN0bXQpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHN0bXQ/LnN0bXQpIHtcbiAgICAgICAgICAgIHNxbGl0ZTMuZmluYWxpemUoc3RtdC5zdG10KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3FsaXRlMy5zdHJfZmluaXNoKHN0cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNxbGl0ZTMucnVuKGRiLCBgQ09NTUlUYCwgbnVsbClcbiAgICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBzcWxpdGUzLnJ1bihkYiwgYFJPTExCQUNLYCwgbnVsbClcbiAgICB9XG4gIH07XG5cbiAgc3FsaXRlMy5maW5hbGl6ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19maW5hbGl6ZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChzdG10KSB7XG4gICAgICBpZiAoIW1hcFN0bXRUb0RCLmhhcyhzdG10KSkge1xuICAgICAgICByZXR1cm4gU1FMaXRlLlNRTElURV9NSVNVU0U7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHN0bXQpO1xuXG4gICAgICBjb25zdCBkYiA9IG1hcFN0bXRUb0RCLmdldChzdG10KTtcbiAgICAgIG1hcFN0bXRUb0RCLmRlbGV0ZShzdG10KVxuXG4gICAgICAvLyBEb24ndCB0aHJvdyBvbiBlcnJvciBoZXJlLiBUeXBpY2FsbHkgdGhlIGVycm9yIGhhcyBhbHJlYWR5IGJlZW5cbiAgICAgIC8vIHRocm93biBhbmQgZmluYWxpemUoKSBpcyBwYXJ0IG9mIHRoZSBjbGVhbnVwLlxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuZ2V0X2F1dG9jb21taXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfZ2V0X2F1dG9jb21taXQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRiKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKGRiKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmxpYnZlcnNpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfbGlidmVyc2lvbic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmxpYnZlcnNpb25fbnVtYmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2xpYnZlcnNpb25fbnVtYmVyJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCc6bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZigpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMubGltaXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfbGltaXQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGIsIGlkLCBuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIsIGlkLCBuZXdWYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMub3Blbl92MiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19vcGVuX3YyJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdzbm5uOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHpGaWxlbmFtZSwgZmxhZ3MsIHpWZnMpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MgfHwgU1FMaXRlLlNRTElURV9PUEVOX0NSRUFURSB8IFNRTGl0ZS5TUUxJVEVfT1BFTl9SRUFEV1JJVEU7XG4gICAgICB6VmZzID0gY3JlYXRlVVRGOCh6VmZzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoekZpbGVuYW1lLCB0bXBQdHJbMF0sIGZsYWdzLCB6VmZzKTtcblxuICAgICAgY29uc3QgZGIgPSBNb2R1bGUuZ2V0VmFsdWUodG1wUHRyWzBdLCAnKicpO1xuICAgICAgZGF0YWJhc2VzLmFkZChkYik7XG4gICAgICBNb2R1bGUuX3NxbGl0ZTNfZnJlZSh6VmZzKTtcblxuICAgICAgTW9kdWxlLmNjYWxsKCdSZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9ucycsICd2b2lkJywgWydudW1iZXInXSwgW2RiXSk7XG4gICAgICBjaGVjayhmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiBkYjtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucHJlcGFyZV92MiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19wcmVwYXJlX3YyJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm5ubjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkYiwgc3FsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKGRiLCBzcWwsIC0xLCB0bXBQdHJbMF0sIHRtcFB0clsxXSk7XG4gICAgICBjaGVjayhmbmFtZSwgcmVzdWx0LCBkYik7XG5cbiAgICAgIGNvbnN0IHN0bXQgPSBNb2R1bGUuZ2V0VmFsdWUodG1wUHRyWzBdLCAnKicpO1xuICAgICAgaWYgKHN0bXQpIHtcbiAgICAgICAgbWFwU3RtdFRvREIuc2V0KHN0bXQsIGRiKTtcbiAgICAgICAgcmV0dXJuIHsgc3RtdCwgc3FsOiBNb2R1bGUuZ2V0VmFsdWUodG1wUHRyWzFdLCAnKicpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucHJvZ3Jlc3NfaGFuZGxlciA9IGZ1bmN0aW9uIChkYiwgblByb2dyZXNzT3BzLCBoYW5kbGVyLCB1c2VyRGF0YSkge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICBNb2R1bGUucHJvZ3Jlc3NIYW5kbGVyKGRiLCBuUHJvZ3Jlc3NPcHMsIGhhbmRsZXIsIHVzZXJEYXRhKTtcbiAgfTs7XG5cbiAgc3FsaXRlMy5yZXNldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXNldCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHN0bXQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdCA9IGZ1bmN0aW9uIChjb250ZXh0LCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpZiAodmFsdWUgPT09ICh2YWx1ZSB8IDApKSB7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfaW50KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcWxpdGUzLnJlc3VsdF9kb3VibGUoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgc3FsaXRlMy5yZXN1bHRfdGV4dChjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHNxbGl0ZTMucmVzdWx0X2Jsb2IoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfbnVsbChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMucmVzdWx0X2ludDY0KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3Vua25vd24gcmVzdWx0IGNvbnZlcnRlZCB0byBudWxsJywgdmFsdWUpO1xuICAgICAgICAgIHNxbGl0ZTMucmVzdWx0X251bGwoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH07XG5cbiAgc3FsaXRlMy5yZXN1bHRfYmxvYiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSB2YWx1ZS5ieXRlTGVuZ3RoID8/IHZhbHVlLmxlbmd0aDtcbiAgICAgIGNvbnN0IHB0ciA9IE1vZHVsZS5fc3FsaXRlM19tYWxsb2MoYnl0ZUxlbmd0aCk7XG4gICAgICBNb2R1bGUuSEVBUFU4LnN1YmFycmF5KHB0cikuc2V0KHZhbHVlKTtcbiAgICAgIGYoY29udGV4dCwgcHRyLCBieXRlTGVuZ3RoLCBzcWxpdGVGcmVlQWRkcmVzcyk7IC8vIHZvaWQgcmV0dXJuXG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdF9kb3VibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgICBmKGNvbnRleHQsIHZhbHVlKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X2ludCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfaW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGYoY29udGV4dCwgdmFsdWUpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfaW50NjQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPiBNQVhfSU5UNjQgfHwgdmFsdWUgPCBNSU5fSU5UNjQpIHJldHVybiBTUUxpdGUuU1FMSVRFX1JBTkdFO1xuXG4gICAgICBjb25zdCBsbzMyID0gdmFsdWUgJiAweGZmZmZmZmZmbjtcbiAgICAgIGNvbnN0IGhpMzIgPSB2YWx1ZSA+PiAzMm47XG4gICAgICBmKGNvbnRleHQsIE51bWJlcihsbzMyKSwgTnVtYmVyKGhpMzIpKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X251bGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X251bGwnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIGYoY29udGV4dCk7IC8vIHZvaWQgcmV0dXJuXG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdF90ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF90ZXh0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0LCB2YWx1ZSkge1xuICAgICAgY29uc3QgcHRyID0gY3JlYXRlVVRGOCh2YWx1ZSk7XG4gICAgICBmKGNvbnRleHQsIHB0ciwgLTEsIHNxbGl0ZUZyZWVBZGRyZXNzKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucm93ID0gZnVuY3Rpb24gKHN0bXQpIHtcbiAgICBjb25zdCByb3cgPSBbXTtcbiAgICBjb25zdCBuQ29sdW1ucyA9IHNxbGl0ZTMuZGF0YV9jb3VudChzdG10KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5Db2x1bW5zOyArK2kpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3FsaXRlMy5jb2x1bW4oc3RtdCwgaSk7XG5cbiAgICAgIC8vIENvcHkgYmxvYiBpZiBhbGlhc2luZyB2b2xhdGlsZSBXZWJBc3NlbWJseSBtZW1vcnkuIFRoaXMgYXZvaWRzIGFuXG4gICAgICAvLyB1bm5lY2Vzc2FyeSBjb3B5IGlmIHVzZXJzIG1vbmtleSBwYXRjaCBjb2x1bW5fYmxvYiB0byBjb3B5LlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcm93LnB1c2godmFsdWU/LmJ1ZmZlciA9PT0gTW9kdWxlLkhFQVBVOC5idWZmZXIgPyB2YWx1ZS5zbGljZSgpIDogdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIHNxbGl0ZTMuc2V0X2F1dGhvcml6ZXIgPSBmdW5jdGlvbiAoZGIsIGF1dGhGdW5jdGlvbiwgdXNlckRhdGEpIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLnNldEF1dGhvcml6ZXIoZGIsIGF1dGhGdW5jdGlvbiwgdXNlckRhdGEpO1xuICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19zZXRfYXV0aG9yaXplcicsIHJlc3VsdCwgZGIpO1xuICB9OztcblxuICBzcWxpdGUzLnNxbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19zcWwnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnN0YXRlbWVudHMgPSBmdW5jdGlvbiAoZGIsIHNxbCkge1xuICAgIHJldHVybiAoYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICAgIGNvbnN0IHN0ciA9IHNxbGl0ZTMuc3RyX25ldyhkYiwgc3FsKTtcbiAgICAgIGxldCBwcmVwYXJlZCA9IHsgc3RtdDogbnVsbCwgc3FsOiBzcWxpdGUzLnN0cl92YWx1ZShzdHIpIH07XG4gICAgICB0cnkge1xuICAgICAgICB3aGlsZSAocHJlcGFyZWQgPSBhd2FpdCBzcWxpdGUzLnByZXBhcmVfdjIoZGIsIHByZXBhcmVkLnNxbCkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzcWxpdGUzLnNxbChwcmVwYXJlZC5zdG10KSk7XG4gICAgICAgICAgeWllbGQgcHJlcGFyZWQuc3RtdDtcbiAgICAgICAgICBzcWxpdGUzLmZpbmFsaXplKHByZXBhcmVkLnN0bXQpO1xuICAgICAgICAgIHByZXBhcmVkLnN0bXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocHJlcGFyZWQ/LnN0bXQpIHtcbiAgICAgICAgICBzcWxpdGUzLmZpbmFsaXplKHByZXBhcmVkLnN0bXQpO1xuICAgICAgICB9XG4gICAgICAgIHNxbGl0ZTMuc3RyX2ZpbmlzaChzdHIpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH07XG5cbiAgc3FsaXRlMy5zdGVwID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3N0ZXAnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiAoc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzdG10KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCksIFtTUUxpdGUuU1FMSVRFX1JPVywgU1FMaXRlLlNRTElURV9ET05FXSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICAvLyBEdXBsaWNhdGUgc29tZSBvZiB0aGUgU1FMaXRlIGR5bmFtaWMgc3RyaW5nIEFQSSBidXQgd2l0aG91dFxuICAvLyBjYWxsaW5nIFNRTGl0ZSAoZXhjZXB0IGZvciBtZW1vcnkgYWxsb2NhdGlvbikuIFdlIG5lZWQgc29tZSB3YXlcbiAgLy8gdG8gdHJhbnNmZXIgSmF2YXNjcmlwdCBzdHJpbmdzIGFuZCBtaWdodCBhcyB3ZWxsIHVzZSBhbiBBUElcbiAgLy8gdGhhdCBtaW1pY3MgdGhlIFNRTGl0ZSBBUEkuXG4gIGxldCBzdHJpbmdJZCA9IDA7XG4gIGNvbnN0IHN0cmluZ3MgPSBuZXcgTWFwKCk7XG5cbiAgc3FsaXRlMy5zdHJfbmV3ID0gZnVuY3Rpb24gKGRiLCBzID0gJycpIHtcbiAgICBjb25zdCBzQnl0ZXMgPSBNb2R1bGUubGVuZ3RoQnl0ZXNVVEY4KHMpO1xuICAgIGNvbnN0IHN0ciA9IHN0cmluZ0lkKysgJiAweGZmZmZmZmZmO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBvZmZzZXQ6IE1vZHVsZS5fc3FsaXRlM19tYWxsb2Moc0J5dGVzICsgMSksXG4gICAgICBieXRlczogc0J5dGVzXG4gICAgfTtcbiAgICBzdHJpbmdzLnNldChzdHIsIGRhdGEpO1xuICAgIE1vZHVsZS5zdHJpbmdUb1VURjgocywgZGF0YS5vZmZzZXQsIGRhdGEuYnl0ZXMgKyAxKTtcbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHNxbGl0ZTMuc3RyX2FwcGVuZGFsbCA9IGZ1bmN0aW9uIChzdHIsIHMpIHtcbiAgICBpZiAoIXN0cmluZ3MuaGFzKHN0cikpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgc3RyaW5nJywgU1FMaXRlLlNRTElURV9NSVNVU0UpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gc3RyaW5ncy5nZXQoc3RyKTtcblxuICAgIGNvbnN0IHNCeXRlcyA9IE1vZHVsZS5sZW5ndGhCeXRlc1VURjgocyk7XG4gICAgY29uc3QgbmV3Qnl0ZXMgPSBkYXRhLmJ5dGVzICsgc0J5dGVzO1xuICAgIGNvbnN0IG5ld09mZnNldCA9IE1vZHVsZS5fc3FsaXRlM19tYWxsb2MobmV3Qnl0ZXMgKyAxKTtcbiAgICBjb25zdCBuZXdBcnJheSA9IE1vZHVsZS5IRUFQVTguc3ViYXJyYXkobmV3T2Zmc2V0LCBuZXdPZmZzZXQgKyBuZXdCeXRlcyArIDEpO1xuICAgIG5ld0FycmF5LnNldChNb2R1bGUuSEVBUFU4LnN1YmFycmF5KGRhdGEub2Zmc2V0LCBkYXRhLm9mZnNldCArIGRhdGEuYnl0ZXMpKTtcbiAgICBNb2R1bGUuc3RyaW5nVG9VVEY4KHMsIG5ld09mZnNldCArIGRhdGEuYnl0ZXMsIHNCeXRlcyArIDEpO1xuXG4gICAgTW9kdWxlLl9zcWxpdGUzX2ZyZWUoZGF0YS5vZmZzZXQpO1xuICAgIGRhdGEub2Zmc2V0ID0gbmV3T2Zmc2V0O1xuICAgIGRhdGEuYnl0ZXMgPSBuZXdCeXRlcztcbiAgICBzdHJpbmdzLnNldChzdHIsIGRhdGEpO1xuICB9O1xuXG4gIHNxbGl0ZTMuc3RyX2ZpbmlzaCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAoIXN0cmluZ3MuaGFzKHN0cikpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgc3RyaW5nJywgU1FMaXRlLlNRTElURV9NSVNVU0UpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gc3RyaW5ncy5nZXQoc3RyKTtcbiAgICBzdHJpbmdzLmRlbGV0ZShzdHIpO1xuICAgIE1vZHVsZS5fc3FsaXRlM19mcmVlKGRhdGEub2Zmc2V0KTtcbiAgfTtcblxuICBzcWxpdGUzLnN0cl92YWx1ZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAoIXN0cmluZ3MuaGFzKHN0cikpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgc3RyaW5nJywgU1FMaXRlLlNRTElURV9NSVNVU0UpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5ncy5nZXQoc3RyKS5vZmZzZXQ7XG4gIH07XG5cbiAgc3FsaXRlMy51cGRhdGVfaG9vayA9IGZ1bmN0aW9uIChkYiwgeFVwZGF0ZSkge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICBNb2R1bGUudXBkYXRlSG9vayhkYiwgeFVwZGF0ZSk7XG4gICAgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfT0s7XG4gIH1cblxuICBzcWxpdGUzLnVzZXJfZGF0YSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIE1vZHVsZS5nZXRGdW5jdGlvblVzZXJEYXRhKGNvbnRleHQpO1xuICB9O1xuXG4gIHNxbGl0ZTMudmFsdWUgPSBmdW5jdGlvbiAocFZhbHVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHNxbGl0ZTMudmFsdWVfdHlwZShwVmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0JMT0I6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLnZhbHVlX2Jsb2IocFZhbHVlKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9GTE9BVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMudmFsdWVfZG91YmxlKHBWYWx1ZSk7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfSU5URUdFUjpcbiAgICAgICAgY29uc3QgbG8zMiA9IHNxbGl0ZTMudmFsdWVfaW50KHBWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgICAgcmV0dXJuIGN2dDMyeDJBc1NhZmUobG8zMiwgaGkzMik7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfTlVMTDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfVEVYVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMudmFsdWVfdGV4dChwVmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCd1bmtub3duIHR5cGUnLCB0eXBlKTtcbiAgICB9XG4gIH07XG5cbiAgc3FsaXRlMy52YWx1ZV9ibG9iID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2Jsb2InO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBWYWx1ZSkge1xuICAgICAgY29uc3QgbkJ5dGVzID0gc3FsaXRlMy52YWx1ZV9ieXRlcyhwVmFsdWUpO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGYocFZhbHVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5IRUFQVTguc3ViYXJyYXkoYWRkcmVzcywgYWRkcmVzcyArIG5CeXRlcyk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX2J5dGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2J5dGVzJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfZG91YmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocFZhbHVlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWYWx1ZSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX2ludCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocFZhbHVlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWYWx1ZSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX2ludDY0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICAgIGNvbnN0IGxvMzIgPSBmKHBWYWx1ZSk7XG4gICAgICBjb25zdCBoaTMyID0gTW9kdWxlLmdldFRlbXBSZXQwKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMik7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX3RleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfdGV4dCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocFZhbHVlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWYWx1ZSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX3R5cGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfdHlwZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocFZhbHVlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWYWx1ZSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZmc19yZWdpc3RlciA9IGZ1bmN0aW9uICh2ZnMsIG1ha2VEZWZhdWx0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLnJlZ2lzdGVyVkZTKHZmcywgbWFrZURlZmF1bHQpO1xuICAgIHJldHVybiBjaGVjaygnc3FsaXRlM192ZnNfcmVnaXN0ZXInLCByZXN1bHQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNoZWNrKGZuYW1lLCByZXN1bHQsIGRiID0gbnVsbCwgYWxsb3dlZCA9IFtTUUxpdGUuU1FMSVRFX09LXSkge1xuICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgIGlmIChhbGxvd2VkLmluY2x1ZGVzKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRiID9cbiAgICAgIE1vZHVsZS5jY2FsbCgnc3FsaXRlM19lcnJtc2cnLCAnc3RyaW5nJywgWydudW1iZXInXSwgW2RiXSkgOlxuICAgICAgZm5hbWU7XG4gICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKG1lc3NhZ2UsIHJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gc3FsaXRlMztcbn1cblxuZnVuY3Rpb24gdHJhY2UoLi4uYXJncykge1xuICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgLy8gY29uc3QgdCA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykgKyAnOicgK1xuICAvLyAgICAgICAgICAgZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpICsgJzonICtcbiAgLy8gICAgICAgICAgIGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSArICcuJyArXG4gIC8vICAgICAgICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKTtcbiAgLy8gY29uc29sZS5kZWJ1Zyh0LCAuLi5hcmdzKTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVzZSBhIG1vcmUgY29tcGFjdCBzaWduYXR1cmUgc3BlY2lmaWNhdGlvbi5cbmZ1bmN0aW9uIGRlY2wocykge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgbSA9IHMubWF0Y2goLyhbbnNAXSopOihbbnN2QF0pLyk7XG4gIHN3aXRjaCAobVsyXSkge1xuICAgIGNhc2UgJ24nOiByZXN1bHQucHVzaCgnbnVtYmVyJyk7IGJyZWFrO1xuICAgIGNhc2UgJ3MnOiByZXN1bHQucHVzaCgnc3RyaW5nJyk7IGJyZWFrO1xuICAgIGNhc2UgJ3YnOiByZXN1bHQucHVzaChudWxsKTsgYnJlYWs7XG4gIH1cblxuICBjb25zdCBhcmdzID0gW107XG4gIGZvciAobGV0IGMgb2YgbVsxXSkge1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAnbic6IGFyZ3MucHVzaCgnbnVtYmVyJyk7IGJyZWFrO1xuICAgICAgY2FzZSAncyc6IGFyZ3MucHVzaCgnc3RyaW5nJyk7IGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChhcmdzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vIFByaW1hcnkgcmVzdWx0IGNvZGVzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9yZXNjb2RlLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfT0sgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9FUlJPUiA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOVEVSTkFMID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUEVSTSA9IDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FCT1JUID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQlVTWSA9IDU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tFRCA9IDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PTUVNID0gNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkVBRE9OTFkgPSA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTlRFUlJVUFQgPSA5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUiA9IDEwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT1JSVVBUID0gMTE7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PVEZPVU5EID0gMTI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0ZVTEwgPSAxMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ0FOVE9QRU4gPSAxNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUFJPVE9DT0wgPSAxNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRU1QVFkgPSAxNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfU0NIRU1BID0gMTc7XG5leHBvcnQgY29uc3QgU1FMSVRFX1RPT0JJRyA9IDE4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UID0gMTk7XG5leHBvcnQgY29uc3QgU1FMSVRFX01JU01BVENIID0gMjA7XG5leHBvcnQgY29uc3QgU1FMSVRFX01JU1VTRSA9IDIxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9OT0xGUyA9IDIyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BVVRIID0gMjM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0ZPUk1BVCA9IDI0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9SQU5HRSA9IDI1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9OT1RBREIgPSAyNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9USUNFID0gMjc7XG5leHBvcnQgY29uc3QgU1FMSVRFX1dBUk5JTkcgPSAyODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUk9XID0gMTAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9ET05FID0gMTAxO1xuXG4vLyBFeHRlbmRlZCBlcnJvciBjb2Rlcy5cbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfQUNDRVNTID0gMzMzODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfQ0hFQ0tSRVNFUlZFRExPQ0sgPSAzNTk0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9DTE9TRSA9IDQxMDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RBVEEgPSA4MjAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9ERUxFVEUgPSAyNTcwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9ERUxFVEVfTk9FTlQgPSA1ODk4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9ESVJfRlNZTkMgPSAxMjkwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9GU1RBVCA9IDE4MDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0ZTWU5DID0gMTAzNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfR0VUVEVNUFBBVEggPSA2NDEwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9MT0NLID0gMzg1MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfTk9NRU0gPSAzMDgyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9SRUFEID0gMjY2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9SRExPQ0sgPSAyMzE0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9TRUVLID0gNTY0MjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfU0hPUlRfUkVBRCA9IDUyMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfVFJVTkNBVEUgPSAxNTQ2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9VTkxPQ0sgPSAyMDU4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9WTk9ERSA9IDY5MjI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1dSSVRFID0gNzc4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9CRUdJTl9BVE9NSUMgPSA3NDM0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9DT01NSVRfQVRPTUlDID0gNzY5MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfUk9MTEJBQ0tfQVRPTUlDID0gNzk0NjtcblxuLy8gT3RoZXIgZXh0ZW5kZWQgcmVzdWx0IGNvZGVzLlxuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX0NIRUNLID0gMjc1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX0NPTU1JVEhPT0sgPSA1MzE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfRk9SRUlHTktFWSA9IDc4NztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9GVU5DVElPTiA9IDEwNDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfTk9UTlVMTCA9IDEyOTk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfUElOTkVEID0gMjgzNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9QUklNQVJZS0VZID0gMTU1NTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9ST1dJRCA9IDI1Nzk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfVFJJR0dFUiA9IDE4MTE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfVU5JUVVFID0gMjA2NztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9WVEFCID0gMjMyMztcblxuLy8gT3BlbiBmbGFncy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19vcGVuX2F1dG9wcm94eS5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fUkVBRE9OTFkgPSAweDAwMDAwMDAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1JFQURXUklURSA9IDB4MDAwMDAwMDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fQ1JFQVRFID0gMHgwMDAwMDAwNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9ERUxFVEVPTkNMT1NFID0gMHgwMDAwMDAwODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9FWENMVVNJVkUgPSAweDAwMDAwMDEwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0FVVE9QUk9YWSA9IDB4MDAwMDAwMjA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fVVJJID0gMHgwMDAwMDA0MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9NRU1PUlkgPSAweDAwMDAwMDgwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX01BSU5fREIgPSAweDAwMDAwMTAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1RFTVBfREIgPSAweDAwMDAwMjAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1RSQU5TSUVOVF9EQiA9IDB4MDAwMDA0MDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTUFJTl9KT1VSTkFMID0gMHgwMDAwMDgwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9URU1QX0pPVVJOQUwgPSAweDAwMDAxMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1NVQkpPVVJOQUwgPSAweDAwMDAyMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1NVUEVSX0pPVVJOQUwgPSAweDAwMDA0MDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX05PTVVURVggPSAweDAwMDA4MDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0ZVTExNVVRFWCA9IDB4MDAwMTAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fU0hBUkVEQ0FDSEUgPSAweDAwMDIwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1BSSVZBVEVDQUNIRSA9IDB4MDAwNDAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fV0FMID0gMHgwMDA4MDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9OT0ZPTExPVyA9IDB4MDEwMDAwMDA7XG5cbi8vIExvY2tpbmcgbGV2ZWxzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX2xvY2tfZXhjbHVzaXZlLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS19OT05FID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS19TSEFSRUQgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX1JFU0VSVkVEID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS19QRU5ESU5HID0gMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS19FWENMVVNJVkUgPSA0O1xuXG4vLyBEZXZpY2UgY2hhcmFjdGVyaXN0aWNzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX2lvY2FwX2F0b21pYy5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQyA9IDB4MDAwMDAwMDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzUxMiA9IDB4MDAwMDAwMDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzFLID0gMHgwMDAwMDAwNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDMksgPSAweDAwMDAwMDA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUM0SyA9IDB4MDAwMDAwMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzhLID0gMHgwMDAwMDAyMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDMTZLID0gMHgwMDAwMDA0MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDMzJLID0gMHgwMDAwMDA4MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDNjRLID0gMHgwMDAwMDEwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfU0FGRV9BUFBFTkQgPSAweDAwMDAwMjAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9TRVFVRU5USUFMID0gMHgwMDAwMDQwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfVU5ERUxFVEFCTEVfV0hFTl9PUEVOID0gMHgwMDAwMDgwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfUE9XRVJTQUZFX09WRVJXUklURSA9IDB4MDAwMDEwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0lNTVVUQUJMRSA9IDB4MDAwMDIwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0JBVENIX0FUT01JQyA9IDB4MDAwMDQwMDA7XG5cbi8vIHhBY2Nlc3MgZmxhZ3MuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfYWNjZXNzX2V4aXN0cy5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX0FDQ0VTU19FWElTVFMgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BQ0NFU1NfUkVBRFdSSVRFID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUNDRVNTX1JFQUQgPSAyO1xuXG4vLyBGaWxlIGNvbnRyb2wgb3Bjb2Rlc1xuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX2ZjbnRsX2JlZ2luX2F0b21pY193cml0ZS5odG1sI3NxbGl0ZWZjbnRsYmVnaW5hdG9taWN3cml0ZVxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9MT0NLU1RBVEUgPSAxOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfR0VUX0xPQ0tQUk9YWUZJTEUgPSAyOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfU0VUX0xPQ0tQUk9YWUZJTEUgPSAzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfTEFTVF9FUlJOTyA9IDQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TSVpFX0hJTlQgPSA1OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQ0hVTktfU0laRSA9IDY7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9GSUxFX1BPSU5URVIgPSA3OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfU1lOQ19PTUlUVEVEID0gODsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1dJTjMyX0FWX1JFVFJZID0gOTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1BFUlNJU1RfV0FMID0gMTA7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9PVkVSV1JJVEUgPSAxMTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1ZGU05BTUUgPSAxMjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1BPV0VSU0FGRV9PVkVSV1JJVEUgPSAxMzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1BSQUdNQSA9IDE0OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQlVTWUhBTkRMRVIgPSAxNTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1RFTVBGSUxFTkFNRSA9IDE2OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfTU1BUF9TSVpFID0gMTg7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9UUkFDRSA9IDE5OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfSEFTX01PVkVEID0gMjA7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TWU5DID0gMjE7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9DT01NSVRfUEhBU0VUV08gPSAyMjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1dJTjMyX1NFVF9IQU5ETEUgPSAyMzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1dBTF9CTE9DSyA9IDI0OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfWklQVkZTID0gMjU7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9SQlUgPSAyNjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1ZGU19QT0lOVEVSID0gMjc7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9KT1VSTkFMX1BPSU5URVIgPSAyODsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1dJTjMyX0dFVF9IQU5ETEUgPSAyOTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1BEQiA9IDMwOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQkVHSU5fQVRPTUlDX1dSSVRFID0gMzE7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9DT01NSVRfQVRPTUlDX1dSSVRFID0gMzI7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9ST0xMQkFDS19BVE9NSUNfV1JJVEUgPSAzMzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0xPQ0tfVElNRU9VVCA9IDM0OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfREFUQV9WRVJTSU9OID0gMzU7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TSVpFX0xJTUlUID0gMzY7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9DS1BUX0RPTkUgPSAzNzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1JFU0VSVkVfQllURVMgPSAzODsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NLUFRfU1RBUlQgPSAzOTtcblxuLy8gRnVuZGFtZW50YWwgZGF0YXR5cGVzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX2Jsb2IuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9JTlRFR0VSID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkxPQVQgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9URVhUID0gMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQkxPQiA9IDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX05VTEwgPSA1O1xuXG4vLyBTcGVjaWFsIGRlc3RydWN0b3IgYmVoYXZpb3IuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2Nfc3RhdGljLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfU1RBVElDID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfVFJBTlNJRU5UID0gLTE7XG5cbi8vIFRleHQgZW5jb2RpbmdzLlxuLy8gaHR0cHM6Ly9zcWxpdGUub3JnL2MzcmVmL2NfYW55Lmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfVVRGOCA9IDE7ICAgICAvKiBJTVA6IFItMzc1MTQtMzU1NjYgKi9cbmV4cG9ydCBjb25zdCBTUUxJVEVfVVRGMTZMRSA9IDI7ICAvKiBJTVA6IFItMDMzNzEtMzc2MzcgKi9cbmV4cG9ydCBjb25zdCBTUUxJVEVfVVRGMTZCRSA9IDM7ICAvKiBJTVA6IFItNTE5NzEtMzQxNTQgKi9cbmV4cG9ydCBjb25zdCBTUUxJVEVfVVRGMTYgPSA0OyAgICAvKiBVc2UgbmF0aXZlIGJ5dGUgb3JkZXIgKi9cblxuLy8gTW9kdWxlIGNvbnN0cmFpbnQgb3BzLlxuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0VRICAgICAgICA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfR1QgICAgICAgID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9MRSAgICAgICAgPSA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0xUICAgICAgICA9IDE2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0dFICAgICAgICA9IDMyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX01BVENIICAgICA9IDY0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0xJS0UgICAgICA9IDY1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0dMT0IgICAgICA9IDY2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX1JFR0VYUCAgICA9IDY3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX05FICAgICAgICA9IDY4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0lTTk9UICAgICA9IDY5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0lTTk9UTlVMTCA9IDcwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0lTTlVMTCAgICA9IDcxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0lTICAgICAgICA9IDcyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0ZVTkNUSU9OICA9IDE1MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfU0NBTl9VTklRVUUgICAgICAgICAgPSAxOyAgLyogU2NhbiB2aXNpdHMgYXQgbW9zdCA9IDEgcm93ICovXG5cbi8vIEZ1bmN0aW9uIGZsYWdzXG5leHBvcnQgY29uc3QgU1FMSVRFX0RFVEVSTUlOSVNUSUMgPSAweDAwMDAwMDgwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRElSRUNUT05MWSAgICA9IDB4MDAwMDgwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TVUJUWVBFICAgICAgID0gMHgwMDAxMDAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOTk9DVU9VUyAgICAgPSAweDAwMDIwMDAwMDtcblxuLy8gU3luYyBmbGFnc1xuZXhwb3J0IGNvbnN0IFNRTElURV9TWU5DX05PUk1BTCAgID0gMHgwMDAwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfU1lOQ19GVUxMICAgICA9IDB4MDAwMDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NZTkNfREFUQU9OTFkgPSAweDAwMDEwO1xuXG4vLyBBdXRob3JpemVyIGFjdGlvbiBjb2Rlc1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfSU5ERVggICAgICAgID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RBQkxFICAgICAgICA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9URU1QX0lOREVYICAgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEVNUF9UQUJMRSAgID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RFTVBfVFJJR0dFUiA9IDU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9URU1QX1ZJRVcgICAgPSA2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVFJJR0dFUiAgICAgID0gNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1ZJRVcgICAgICAgICA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RFTEVURSAgICAgICAgICAgICAgPSA5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX0lOREVYICAgICAgICAgID0gMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVEFCTEUgICAgICAgICAgPSAxMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9URU1QX0lOREVYICAgICA9IDEyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RFTVBfVEFCTEUgICAgID0gMTM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVEVNUF9UUklHR0VSICAgPSAxNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9URU1QX1ZJRVcgICAgICA9IDE1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RSSUdHRVIgICAgICAgID0gMTY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVklFVyAgICAgICAgICAgPSAxNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5TRVJUICAgICAgICAgICAgICA9IDE4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9QUkFHTUEgICAgICAgICAgICAgID0gMTk7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JFQUQgICAgICAgICAgICAgICAgPSAyMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfU0VMRUNUICAgICAgICAgICAgICA9IDIxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9UUkFOU0FDVElPTiAgICAgICAgID0gMjI7XG5leHBvcnQgY29uc3QgU1FMSVRFX1VQREFURSAgICAgICAgICAgICAgPSAyMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQVRUQUNIICAgICAgICAgICAgICA9IDI0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9ERVRBQ0ggICAgICAgICAgICAgID0gMjU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FMVEVSX1RBQkxFICAgICAgICAgPSAyNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkVJTkRFWCAgICAgICAgICAgICA9IDI3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9BTkFMWVpFICAgICAgICAgICAgID0gMjg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9WVEFCTEUgICAgICAgPSAyOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9WVEFCTEUgICAgICAgICA9IDMwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9GVU5DVElPTiAgICAgICAgICAgID0gMzE7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NBVkVQT0lOVCAgICAgICAgICAgPSAzMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09QWSAgICAgICAgICAgICAgICA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JFQ1VSU0lWRSAgICAgICAgICAgPSAzMztcblxuLy8gQXV0aG9yaXplciByZXR1cm4gY29kZXNcbmV4cG9ydCBjb25zdCBTUUxJVEVfREVOWSAgID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSUdOT1JFID0gMjtcblxuLy8gTGltaXQgY2F0ZWdvcmllc1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9MRU5HVEggICAgICAgICAgICAgID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfU1FMX0xFTkdUSCAgICAgICAgICA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0NPTFVNTiAgICAgICAgICAgICAgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9FWFBSX0RFUFRIICAgICAgICAgID0gMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfQ09NUE9VTkRfU0VMRUNUICAgICA9IDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1ZEQkVfT1AgICAgICAgICAgICAgPSA1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9GVU5DVElPTl9BUkcgICAgICAgID0gNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfQVRUQUNIRUQgICAgICAgICAgICA9IDc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0xJS0VfUEFUVEVSTl9MRU5HVEggPSA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9WQVJJQUJMRV9OVU1CRVIgICAgID0gOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfVFJJR0dFUl9ERVBUSCAgICAgICA9IDEwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9XT1JLRVJfVEhSRUFEUyAgICAgID0gMTE7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IHNlbGYubG9jYXRpb24gKyBcIlwiO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMVxufTtcblxuLy8gbm8gY2h1bmsgaW5zdGFsbCBmdW5jdGlvbiBuZWVkZWRcbi8vIG5vIGNodW5rIGxvYWRpbmdcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsImltcG9ydCBTUUxpdGVBc3luY0VTTUZhY3RvcnkgZnJvbSAnd2Etc3FsaXRlL2Rpc3Qvd2Etc3FsaXRlLWFzeW5jLm1qcyc7XG5pbXBvcnQgKiBhcyBTUUxpdGUgZnJvbSAnd2Etc3FsaXRlJztcbmltcG9ydCB7IElEQkJhdGNoQXRvbWljVkZTIH0gZnJvbSAnd2Etc3FsaXRlL3NyYy9leGFtcGxlcy9JREJCYXRjaEF0b21pY1ZGUyc7XG5cbmxldCBzcWxpdGUzID0gbnVsbDtcbmxldCBjdXJyZW50RGIgPSBudWxsO1xuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVFbmdpbmUoKSB7XG4gICAgaWYgKHNxbGl0ZTMpIHJldHVybjtcbiAgICBjb25zdCBhc3luY01vZHVsZSA9IGF3YWl0IFNRTGl0ZUFzeW5jRVNNRmFjdG9yeSgpO1xuICAgIHNxbGl0ZTMgPSBTUUxpdGUuRmFjdG9yeShhc3luY01vZHVsZSk7XG59XG5cbmZ1bmN0aW9uIHJlc3VsdFRvUm93KGNvbHVtbnMsIHJvd0RhdGEpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb2JqW2NvbHVtbnNbaV1dID0gcm93RGF0YVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgYXN5bmMgb3BlbihhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtkYk5hbWUsIGZpbGVOYW1lXSA9IGFyZ3M7XG4gICAgICAgIGF3YWl0IGVuc3VyZUVuZ2luZSgpO1xuICAgICAgICBzcWxpdGUzLnZmc19yZWdpc3RlcihuZXcgSURCQmF0Y2hBdG9taWNWRlMoZmlsZU5hbWUpKTtcbiAgICAgICAgY3VycmVudERiID0gYXdhaXQgc3FsaXRlMy5vcGVuX3YyKFxuICAgICAgICAgICAgZGJOYW1lLFxuICAgICAgICAgICAgU1FMaXRlLlNRTElURV9PUEVOX0NSRUFURSB8IFNRTGl0ZS5TUUxJVEVfT1BFTl9SRUFEV1JJVEUgfCBTUUxpdGUuU1FMSVRFX09QRU5fVVJJLFxuICAgICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnREYjtcbiAgICB9LFxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmIChjdXJyZW50RGIgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgYXdhaXQgc3FsaXRlMy5jbG9zZShjdXJyZW50RGIpO1xuICAgICAgICBjdXJyZW50RGIgPSBudWxsO1xuICAgIH0sXG5cbiAgICBhc3luYyBleGVjdXRlKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgW2RiQ29ubiwgc3FsLCBwYXJhbWV0ZXJzXSA9IGFyZ3M7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgY2hhbmdlczogMCwgcmVzcG9uc2U6IG51bGwsIGRhdGE6ICcnLCBlcnJvcjogJycgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kUmVzdWx0ICE9PSBTUUxpdGUuU1FMSVRFX09LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50LiBDaGVjayB5b3VyIHN5bnRheCBvciBwYXJhbWV0ZXJzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10KSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHt9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJlc3BvbnNlID0gJ1NRTElURV9ET05FJztcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hhbmdlcyA9IHNxbGl0ZTMuY2hhbmdlcyhkYkNvbm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBhc3luYyBxdWVyeShhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtkYkNvbm4sIHNxbCwgcGFyYW1ldGVyc10gPSBhcmdzO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7IGRhdGE6IFtdLCBlcnJvcjogJycgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kUmVzdWx0ICE9PSBTUUxpdGUuU1FMSVRFX09LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkgPT09IFNRTGl0ZS5TUUxJVEVfUk9XKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA/PyBzcWxpdGUzLmNvbHVtbl9uYW1lcyhzdG10KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHNxbGl0ZTMucm93KHN0bXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChyZXN1bHRUb1Jvdyhjb2x1bW5zLCByb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBhc3luYyBleGVjdXRlQmF0Y2goYXJncykge1xuICAgICAgICBjb25zdCBbZGJDb25uLCBiYXRjaF0gPSBhcmdzO1xuICAgICAgICBsZXQgdG90YWxDaGFuZ2VzID0gMDtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3FsLCBwYXJhbXMgfSA9IGJhdGNoW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiQ29ubiwgc3FsKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRSZXN1bHQgPSBhd2FpdCBzcWxpdGUzLmJpbmRfY29sbGVjdGlvbihzdG10LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRSZXN1bHQgIT09IFNRTGl0ZS5TUUxJVEVfT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCh7IGluZGV4OiBpLCBlcnJvcjogJ1VuYWJsZSB0byBwcmVwYXJlIHN0YXRlbWVudCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10KSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHt9XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2hhbmdlcyArPSBzcWxpdGUzLmNoYW5nZXMoZGJDb25uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHsgaW5kZXg6IGksIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRvdGFsQ2hhbmdlcywgZXJyb3JzIH07XG4gICAgfSxcbn07XG5cbnNlbGYub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignW3NxbGl0ZS13b3JrZXJdIHVuY2F1Z2h0IGVycm9yOicsIGUubWVzc2FnZSB8fCBlKTtcbn07XG5cbnNlbGYub251bmhhbmRsZWRyZWplY3Rpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tzcWxpdGUtd29ya2VyXSB1bmhhbmRsZWQgcmVqZWN0aW9uOicsIGUucmVhc29uKTtcbn07XG5cbnNlbGYub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCB7IGlkLCBtZXRob2QsIGFyZ3MgfSA9IGUuZGF0YTtcbiAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbbWV0aG9kXTtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkLCBlcnJvcjogYFVua25vd24gbWV0aG9kOiAke21ldGhvZH1gIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZXIoYXJncyk7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBpZCwgcmVzdWx0IH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQsIGVycm9yOiBlcnIubWVzc2FnZSB8fCBTdHJpbmcoZXJyKSB9KTtcbiAgICB9XG59O1xuXG5zZWxmLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3JlYWR5JyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==