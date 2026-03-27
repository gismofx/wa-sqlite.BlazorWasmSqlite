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




console.log('[sqlite-worker] module loaded successfully');

let sqlite3 = null;
let currentDb = null;

async function ensureEngine() {
    if (sqlite3) return;
    const asyncModule = await (0,wa_sqlite_dist_wa_sqlite_async_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    sqlite3 = wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.Factory(asyncModule);
    console.log('[sqlite-worker] engine ready');
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

console.log('[sqlite-worker] posting ready');
self.postMessage({ type: 'ready' });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLXdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQSxtQkFBbUIsaUpBQWU7QUFDbEM7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkIsc0JBQXNCLDRCQUE0QixLQUFLLEtBQUssRUFBRSx1QkFBdUIsbUNBQW1DLFNBQVM7QUFDakksa1BBQWtQLHlCQUF5QixtQkFBbUIsNkJBQTZCLGFBQWEsa0NBQWtDLEVBQUUsb0ZBQW9GLG9CQUFvQixRQUFRO0FBQzVkLG9CQUFvQixPQUFPLGdDQUFnQyxzQ0FBc0MsbUVBQW1FLGdDQUFnQyxjQUFjLGdCQUFnQiwyQkFBMkIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLCtCQUErQixpQ0FBaUMsaUNBQWlDO0FBQ25kLGNBQWMsdUJBQXVCLGNBQWMsd0JBQXdCLGNBQWMsMEJBQTBCLG1CQUFtQixLQUFLLEtBQUssS0FBSyw2RUFBNkUsTUFBTSxTQUFTLGVBQWUsbURBQW1ELFVBQVUsT0FBTyxpQkFBaUIsc0NBQXNDLFVBQVUseUNBQXlDLGlCQUFpQiwrSUFBc0M7QUFDcmUsZUFBZSx1Q0FBdUMsbUJBQW1CLHdEQUF3RCxlQUFlLHlGQUF5RiwwQkFBMEIsV0FBVywyREFBMkQsdUJBQXVCO0FBQ2hXLG1CQUFtQix5RUFBeUUsNENBQTRDLEVBQUUsR0FBRyxLQUFLLEVBQUUsaUJBQWlCLFNBQVMsbUhBQW1ILDBCQUEwQixtRUFBbUUsb0NBQW9DLEVBQUUsR0FBRywrQ0FBK0MsaUJBQWlCLEdBQUc7QUFDMWUsZUFBZSx1QkFBdUIsNkNBQTZDLEVBQUUsR0FBRyxjQUFjLFdBQVcsS0FBSyxXQUFXLGVBQWUscUJBQXFCLHlCQUF5QixVQUFVLHlCQUF5Qix5QkFBeUIsMkJBQTJCLDBCQUEwQixvREFBb0QsNkJBQTZCLDhCQUE4Qix3QkFBd0Isd0NBQXdDLEVBQUU7QUFDaGUsdUJBQXVCLHlCQUF5QixVQUFVLG9CQUFvQixNQUFNLG9CQUFvQixNQUFNLHNCQUFzQixNQUFNLHFCQUFxQixNQUFNLG9EQUFvRCx3QkFBd0IsTUFBTSx5QkFBeUIsTUFBTSxtQkFBbUIsTUFBTSx3Q0FBd0MsRUFBRTtBQUN6VixrRkFBa0YsVUFBVSxRQUFRLGNBQWMsS0FBSywwREFBMEQsU0FBUyxJQUFJLEVBQUUsYUFBYSxVQUFVLGdCQUFnQixvREFBb0QsS0FBSyxnQkFBZ0IsZ0VBQWdFLCtGQUErRiwrQkFBK0IsU0FBUztBQUN2ZixXQUFXLHlCQUF5QixLQUFLLEtBQUssV0FBVywwRUFBMEUsVUFBVSxFQUFFLG9CQUFvQixTQUFTLE9BQU8sNkNBQTZDLDZEQUE2RCxlQUFlLG1CQUFtQixRQUFRLCtCQUErQixJQUFJLG9EQUFvRCxPQUFPLE9BQU8sb0JBQW9CLDhCQUE4QixXQUFXLFFBQVE7QUFDamYsWUFBWSxPQUFPLHNCQUFzQix5QkFBeUIsNkJBQTZCLFNBQVMsMEdBQTBHLHNCQUFzQjtBQUN4TyxjQUFjLHVDQUF1QyxVQUFVLEtBQUssd0JBQXdCLHVGQUF1RixlQUFlLFVBQVUsb0JBQW9CLCtDQUErQztBQUMvUSxpQkFBaUIsZ0JBQWdCLFdBQVcsS0FBSyxzQkFBc0IsMkRBQTJELFNBQVMsZ0JBQWdCLG1CQUFtQixRQUFRLFFBQVEsWUFBWSxXQUFXLEtBQUssc0JBQXNCLHVCQUF1Qix3QkFBd0IsOEJBQThCLFdBQVcsY0FBYyxTQUFTLEtBQUssWUFBWSxnQkFBZ0IsZ0JBQWdCLEtBQUssYUFBYSxnQkFBZ0IsaUJBQWlCLEtBQUssZ0JBQWdCLGlCQUFpQjtBQUN6ZSxNQUFNLG1CQUFtQixpQkFBaUIsT0FBTyxXQUFXLE9BQU8saUJBQWlCLE9BQU8scUJBQXFCO0FBQ2hILFFBQVEsUUFBUSxvQkFBb0Isc0JBQXNCLE9BQU8sY0FBYyxVQUFVLGlCQUFpQixPQUFPLGlCQUFpQixlQUFlLHNDQUFzQyxnQkFBZ0IsSUFBSSxLQUFLLElBQUksdUJBQXVCLFNBQVMsaUJBQWlCLG9DQUFvQyw4QkFBOEIsSUFBSSxTQUFTLGlDQUFpQyxTQUFTLGdCQUFnQixzQ0FBc0MsSUFBSSxZQUFZLElBQUksNEJBQTRCLFNBQVM7QUFDN2UsQ0FBQyxpQ0FBaUMsVUFBVSxLQUFLLEtBQUssR0FBRyxlQUFlLFdBQVcsOEtBQThLLE9BQU8sV0FBVyxRQUFRLGlCQUFpQixxQkFBcUIsV0FBVyxLQUFLLGFBQWEsU0FBUyxTQUFTLDREQUE0RCxPQUFPLDZDQUE2QyxNQUFNLE9BQU87QUFDN2Usc0dBQXNHLE1BQU0sU0FBUyxNQUFNLGVBQWUsS0FBSyxRQUFRLDJEQUEyRCxPQUFPLDhDQUE4QyxpQkFBaUIseUJBQXlCO0FBQ2pULE9BQU8sYUFBYSxzQ0FBc0MscUJBQXFCLHVEQUF1RCxhQUFhLEtBQUssTUFBTSxtR0FBbUcsU0FBUyxZQUFZLE9BQU8sTUFBTSxzQkFBc0IsU0FBUyw2RUFBNkUsT0FBTyxNQUFNLGlDQUFpQyxXQUFXLEtBQUssTUFBTSxzQkFBc0IsWUFBWTtBQUNyZixjQUFjLDBEQUEwRCx3TkFBd04sdUJBQXVCLHVDQUF1QyxTQUFTLE9BQU8sdUZBQXVGLEtBQUssTUFBTSxTQUFTO0FBQ3pkLEVBQUUsVUFBVSxjQUFjLE9BQU8sUUFBUSxPQUFPLFVBQVUsOEdBQThHLDJCQUEyQiwyQkFBMkIsMkJBQTJCLFVBQVUsNEJBQTRCLFNBQVMsU0FBUyxpQ0FBaUMsZ0RBQWdELGdFQUFnRSxLQUFLLFdBQVcsdUJBQXVCO0FBQ3plLG1CQUFtQixRQUFRLE1BQU0sY0FBYyxhQUFhLDZCQUE2QixXQUFXLGNBQWMsSUFBSSxjQUFjLFVBQVUsd0NBQXdDLDJCQUEyQiw4QkFBOEIsU0FBUyxVQUFVLCtCQUErQixXQUFXLFNBQVMsZUFBZSx1QkFBdUIsU0FBUyxnQkFBZ0IsOEJBQThCLGVBQWUsdUJBQXVCLE9BQU8sbUJBQW1CO0FBQ2xkLFVBQVUsU0FBUyxXQUFXLDRCQUE0QixTQUFTLFNBQVMsT0FBTywwQ0FBMEMsZUFBZSxLQUFLLGdCQUFnQixnQkFBZ0IseUJBQXlCLDBCQUEwQiw4Q0FBOEMsYUFBYSxJQUFJLGtCQUFrQixTQUFTLG9CQUFvQiw0QkFBNEIsZUFBZSxTQUFTLHVCQUF1Qix1Q0FBdUMsMENBQTBDO0FBQzllLDhDQUE4QyxvREFBb0QsVUFBVSwyREFBMkQsYUFBYSxJQUFJLHFCQUFxQix3QkFBd0IsU0FBUyxXQUFXLHVFQUF1RSx1QkFBdUIsU0FBUyxXQUFXLGVBQWUsa0NBQWtDLGVBQWUsK0NBQStDLFlBQVk7QUFDdGUsVUFBVSwwRkFBMEYsS0FBSywyQkFBMkIsMENBQTBDLHNCQUFzQixXQUFXLHlCQUF5QixPQUFPLFdBQVcsYUFBYSx5QkFBeUIsV0FBVyxZQUFZLFFBQVEsWUFBWSxZQUFZLFNBQVMsY0FBYztBQUM5VyxpQkFBaUIsRUFBRSxRQUFRLGFBQWEsbUJBQW1CLGlCQUFpQixXQUFXLElBQUksMEJBQTBCLDhCQUE4Qix1QkFBdUIsV0FBVyxLQUFLLHFCQUFxQixxQkFBcUIsYUFBYSxnQkFBZ0IsbUNBQW1DLG9CQUFvQix1QkFBdUIsaUNBQWlDLFVBQVUsK0JBQStCLE9BQU87QUFDaGEsZUFBZSxXQUFXLEVBQUUsMERBQTBELEVBQUUsR0FBRyxFQUFFLFFBQVEsT0FBTyxPQUFPLEdBQUcsRUFBRSxTQUFTLFlBQVksaUJBQWlCLGdCQUFnQixXQUFXLGlDQUFpQyx5QkFBeUIsZUFBZSw2QkFBNkIsc0JBQXNCLGdCQUFnQixFQUFFLEVBQUUsYUFBYSxVQUFVLE1BQU07QUFDdFcsaUJBQWlCLE1BQU0sa0RBQWtELG9CQUFvQixFQUFFLFFBQVEsYUFBYSxzQ0FBc0Msb0JBQW9CLHFCQUFxQixrQkFBa0IseUJBQXlCLFVBQVUsY0FBYyxjQUFjLHlCQUF5QixlQUFlLDBCQUEwQixnQkFBZ0I7QUFDdFcsaUJBQWlCLGVBQWUsaUNBQWlDLDBFQUEwRSxjQUFjLFNBQVMsaUJBQWlCLElBQUksa0JBQWtCLFVBQVUsa0JBQWtCLG1CQUFtQixJQUFJLGNBQWMsU0FBUyxZQUFZLHlCQUF5QixNQUFNLHdCQUF3Qix1Q0FBdUMsNEJBQTRCLFNBQVMsY0FBYyxZQUFZLFFBQVEsdUJBQXVCO0FBQzNkLGNBQWMsUUFBUSxxQkFBcUIsU0FBUyxvQkFBb0IsbUJBQW1CLFdBQVcsZ0JBQWdCLHVDQUF1QyxRQUFRLE1BQU0saUJBQWlCLFFBQVEsYUFBYSxRQUFRLE1BQU0scUJBQXFCLFFBQVEsaUJBQWlCLFdBQVcsTUFBTSx3QkFBd0IsUUFBUSxxQkFBcUIsR0FBRywwQkFBMEIsZ0JBQWdCLE9BQU8sZUFBZSxRQUFRLFFBQVEsc0JBQXNCLHdCQUF3QixNQUFNO0FBQzFkLGlCQUFpQixPQUFPLE1BQU0saUJBQWlCLG1CQUFtQix5QkFBeUIsV0FBVyxXQUFXLE1BQU0sRUFBRSxTQUFTLFNBQVMsd0JBQXdCLCtCQUErQixHQUFHLFlBQVksYUFBYSxVQUFVLE9BQU8sU0FBUyx5Q0FBeUMsbUJBQW1CLFdBQVcsVUFBVSxPQUFPLFFBQVEseUNBQXlDLGNBQWMsb0JBQW9CLDRCQUE0QjtBQUMvYixnQkFBZ0IsNkNBQTZDLG1CQUFtQixtQ0FBbUMsZUFBZSxpQkFBaUIsMEJBQTBCLFdBQVcsVUFBVSxPQUFPLHNCQUFzQixRQUFRLGNBQWMsb0JBQW9CLDRCQUE0QixlQUFlLGVBQWUsV0FBVyxVQUFVLE9BQU8sUUFBUSwyQkFBMkIsb0JBQW9CLDRCQUE0Qix3QkFBd0IsYUFBYTtBQUN2ZCxlQUFlLFlBQVksc0JBQXNCLDRCQUE0QixtQ0FBbUMsaUJBQWlCLE9BQU8sTUFBTSxPQUFPLHNCQUFzQiw0QkFBNEIsa0JBQWtCLGVBQWUsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsTUFBTSxTQUFTLDRCQUE0QixXQUFXLDhDQUE4QztBQUN2WSxpQkFBaUIsdUJBQXVCLDBCQUEwQixNQUFNLFNBQVMsNEJBQTRCLDZCQUE2QiwwQ0FBMEMsZ0JBQWdCLG9CQUFvQixXQUFXLDRCQUE0QjtBQUMvUCxtQkFBbUIsMEJBQTBCLHVCQUF1QixPQUFPLDJDQUEyQyxJQUFJLGdFQUFnRSxFQUFFLEdBQUcsSUFBSSxrREFBa0QsOEJBQThCLEtBQUssT0FBTyxJQUFJLE9BQU8sZUFBZSxPQUFPLFdBQVcsS0FBSyxjQUFjLDBCQUEwQixzQkFBc0Isc0JBQXNCLGlDQUFpQyx1Q0FBdUM7QUFDNWUsOEZBQThGLG1CQUFtQixXQUFXLE1BQU0sd0VBQXdFLEVBQUUsd0JBQXdCLGlDQUFpQyxzQkFBc0IsU0FBUyxtQkFBbUIsOEJBQThCLHlDQUF5QyxvQ0FBb0MsMEJBQTBCO0FBQzViLGNBQWMsb0JBQW9CLHVCQUF1QixZQUFZLG9CQUFvQixXQUFXLFdBQVcsd0JBQXdCLGdFQUFnRSxlQUFlLHdDQUF3QyxHQUFHO0FBQ2pRLG1CQUFtQixlQUFlLGtCQUFrQixZQUFZLGdCQUFnQixNQUFNLFFBQVEsY0FBYyxTQUFTLG9DQUFvQyxlQUFlLGdCQUFnQixJQUFJLEtBQUssSUFBSSxVQUFVLFNBQVMsaUJBQWlCLG9DQUFvQyw4QkFBOEIsSUFBSSxTQUFTLGlDQUFpQyxTQUFTLGdCQUFnQixZQUFZLElBQUksUUFBUSxVQUFVLFNBQVMsaUJBQWlCLGlDQUFpQyxVQUFVLEVBQUUsVUFBVSxXQUFXO0FBQ2hmLG1CQUFtQiw4QkFBOEIseUJBQXlCLGdCQUFnQixzQkFBc0IsU0FBUztBQUN6SCxtQkFBbUIsSUFBSSxXQUFXLFNBQVMsNkNBQTZDLFNBQVMsYUFBYSxpQkFBaUIsZUFBZSxpQkFBaUIsZ0JBQWdCLGdCQUFnQiwwSEFBMEgsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIscUJBQXFCO0FBQ2hiLGdFQUFnRSxnQkFBZ0IsZ0JBQWdCLHFCQUFxQixnSkFBZ0osZ0JBQWdCLGdCQUFnQixxQkFBcUIsZ0pBQWdKLGdCQUFnQixnQkFBZ0I7QUFDMWUsVUFBVSxzSEFBc0gsZ0JBQWdCLGdCQUFnQixTQUFTLGNBQWMsY0FBYyxlQUFlLE1BQU07QUFDMU4sd0tBQXdLLHNCQUFzQixlQUFlLFNBQVMsTUFBTSxTQUFTLFFBQVEsT0FBTywrTUFBK00sR0FBRztBQUN0YyxTQUFTLHFCQUFxQixFQUFFLEdBQUcsS0FBSyxHQUFHLEtBQUssVUFBVSxJQUFJLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWU7QUFDbGUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLFdBQVcsS0FBSywyQkFBMkIsd0JBQXdCLEtBQUssZ0JBQWdCLFFBQVEsc0NBQXNDLFFBQVEsSUFBSSxJQUFJLFNBQVM7QUFDcFUsZUFBZSxRQUFRLEdBQUcsd0JBQXdCLFdBQVcscUNBQXFDLFdBQVcsSUFBSSwrQkFBK0IsUUFBUSxzR0FBc0csR0FBRyxLQUFLLFNBQVMsK0JBQStCLE1BQU0sb0JBQW9CLGNBQWMsMkJBQTJCLElBQUksb0JBQW9CO0FBQ3pZLGNBQWMsdUJBQXVCLFVBQVUsa0JBQWtCLFFBQVEsWUFBWSxxQ0FBcUMsWUFBWTtBQUN0SSxlQUFlLE9BQU8sVUFBVSxjQUFjLFVBQVUsc0JBQXNCLElBQUksY0FBYyxnRUFBZ0UsS0FBSyxJQUFJLDZCQUE2QixTQUFTLFNBQVMsU0FBUyxPQUFPLFNBQVMsNENBQTRDLG1CQUFtQixFQUFFLEtBQUssNkZBQTZGLG1EQUFtRCxVQUFVLGtDQUFrQztBQUNuZixXQUFXLFNBQVMsT0FBTyxTQUFTLE9BQU8sdUJBQXVCLEVBQUUsR0FBRyxXQUFXLGVBQWUsY0FBYyxZQUFZO0FBQzNILFNBQVMsaUJBQWlCLGNBQWMsS0FBSyxhQUFhLG1EQUFtRCxPQUFPLFdBQVcsUUFBUSxnQ0FBZ0MsVUFBVSxZQUFZLFlBQVksSUFBSSxTQUFTLFdBQVcsbUJBQW1CLFdBQVcsV0FBVyxXQUFXLGFBQWEsaUJBQWlCLFdBQVcsS0FBSyxjQUFjLDJDQUEyQyxJQUFJLGtCQUFrQixhQUFhLE1BQU0sNEJBQTRCLE9BQU87QUFDeGMscUJBQXFCLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsc0NBQXNDLE1BQU0sZUFBZSw2QkFBNkIsaUJBQWlCLGtDQUFrQyxRQUFRLGVBQWUsNkJBQTZCLGlCQUFpQixtQ0FBbUMsRUFBRSxLQUFLLGNBQWMsVUFBVSxVQUFVLFdBQVc7QUFDcmIsWUFBWSxVQUFVLFFBQVEsOEJBQThCLEVBQUUsb0JBQW9CLFlBQVksWUFBWSxvQkFBb0IscUJBQXFCLHNDQUFzQyw0QkFBNEIsZUFBZSxlQUFlLGdCQUFnQixjQUFjLGtCQUFrQjtBQUNuUyxZQUFZLFdBQVcsc0JBQXNCLG1CQUFtQixJQUFJLEtBQUssMEJBQTBCLE1BQU0sUUFBUSxZQUFZLEdBQUcsZ0JBQWdCLFVBQVUsS0FBSyxnQkFBZ0Isb0JBQW9CLFVBQVUsa0JBQWtCO0FBQy9OLFlBQVksZ0JBQWdCLGdDQUFnQyxXQUFXLFNBQVMsY0FBYyxvREFBb0QseUJBQXlCLGFBQWEsT0FBTyxTQUFTLFVBQVUsMEZBQTBGLFVBQVU7QUFDdFQsWUFBWSxnQkFBZ0IsV0FBVyxZQUFZLFVBQVUsS0FBSyxzRUFBc0UsZUFBZSxpQ0FBaUMsMEJBQTBCLHVDQUF1QyxlQUFlLFNBQVMsU0FBUyxFQUFFLDJHQUEyRywwQ0FBMEMsZUFBZSxTQUFTLGlCQUFpQixFQUFFO0FBQzVkLGdGQUFnRixrQ0FBa0MsaUJBQWlCLDJCQUEyQixlQUFlLFdBQVcsMERBQTBELHFCQUFxQixXQUFXLGNBQWMscUNBQXFDLGFBQWEscUJBQXFCLFdBQVcsY0FBYyx3Q0FBd0MsYUFBYSxpQkFBaUIsV0FBVyxjQUFjLFFBQVEsYUFBYTtBQUNwZixzQkFBc0IsV0FBVyxVQUFVLHVDQUF1QyxzQkFBc0IsSUFBSSxZQUFZLGdCQUFnQixvQ0FBb0MsV0FBVyxTQUFTLGNBQWMsNkRBQTZELGVBQWUsYUFBYSxPQUFPLFNBQVMsVUFBVSxZQUFZLFVBQVU7QUFDdlYsWUFBWSxnQkFBZ0IsY0FBYyxFQUFFLFVBQVUsRUFBRSxFQUFFLDJEQUEyRCxTQUFTLDhCQUE4QiwyQ0FBMkMsa0JBQWtCLGdDQUFnQywyQ0FBMkMsb0JBQW9CLDRFQUE0RSxhQUFhLEVBQUU7QUFDbloscUJBQXFCLG1CQUFtQixvREFBb0QsR0FBRyxpQ0FBaUMsc0JBQXNCLGVBQWUsU0FBUyxjQUFjLEVBQUUsSUFBSSxrQkFBa0IsbUJBQW1CLHFCQUFxQixzQkFBc0Isb0JBQW9CLGlCQUFpQixrQkFBa0Isb0JBQW9CLGtCQUFrQixpQkFBaUIscUJBQXFCLG9CQUFvQixxQkFBcUIsb0JBQW9CLG9CQUFvQjtBQUN0ZSxPQUFPLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLG9GQUFvRix5QkFBeUIsV0FBVyxXQUFXLE1BQU0sWUFBWSw2QkFBNkIsZ0VBQWdFLGtEQUFrRCx5QkFBeUIsV0FBVyxXQUFXLE1BQU0sWUFBWSw2QkFBNkI7QUFDcmQsMEJBQTBCLG1EQUFtRCxpQkFBaUIsZ0RBQWdELFdBQVcsOEJBQThCLGlCQUFpQiw2REFBNkQsWUFBWSxnQkFBZ0IsS0FBSyxrRkFBa0YsMkJBQTJCLHFCQUFxQiwyQkFBMkIsWUFBWSwyQkFBMkI7QUFDMWUsR0FBRyxnQkFBZ0Isc0NBQXNDLFFBQVEsYUFBYSwyRUFBMkUsaUVBQWlFLHNCQUFzQixRQUFRLGdCQUFnQiw2QkFBNkIsb0JBQW9CLEVBQUUseUJBQXlCLGNBQWMsbUNBQW1DLG1DQUFtQyxpQ0FBaUMsNEJBQTRCO0FBQ3JlLE9BQU8sMkJBQTJCLGlDQUFpQyxnQkFBZ0IsK0NBQStDLFFBQVEsZ0JBQWdCLHVJQUF1SSx5QkFBeUIsb0pBQW9KLGtDQUFrQztBQUNoZiwwQkFBMEIsaUNBQWlDLDRCQUE0QixVQUFVLGVBQWUsaUJBQWlCLHVCQUF1QixnQ0FBZ0MsZUFBZSxpQkFBaUIsdUJBQXVCLDZCQUE2QixpQkFBaUIsaUJBQWlCLFdBQVcsTUFBTSxZQUFZLDZCQUE2Qiw0QkFBNEIsZUFBZSxpQkFBaUIsdUJBQXVCLDJCQUEyQixlQUFlO0FBQ3JlLEtBQUssdUJBQXVCLGlCQUFpQixxQkFBcUIsZ0NBQWdDLGtDQUFrQyxlQUFlLGlDQUFpQyxtQkFBbUIsdUNBQXVDLGlCQUFpQixrREFBa0QscUJBQXFCLGlCQUFpQixnQ0FBZ0MsOENBQThDLGVBQWUsa0NBQWtDLGVBQWU7QUFDcmUsZUFBZSxtQ0FBbUMsZUFBZSxxQ0FBcUMsaUJBQWlCLGlCQUFpQixjQUFjLDhCQUE4QjtBQUNwTCxZQUFZLGdCQUFnQixjQUFjLEVBQUUsVUFBVSxFQUFFLEVBQUUsMkRBQTJELFNBQVMsOEJBQThCLDJDQUEyQyxrQkFBa0IsZ0NBQWdDLDJDQUEyQyxvQkFBb0IsNEVBQTRFLGFBQWEsRUFBRSxjQUFjLE1BQU0seUJBQXlCLGlEQUFpRDtBQUNqZixjQUFjLDBFQUEwRSxPQUFPLHVCQUF1QixzQkFBc0IsZUFBZSxxQkFBcUIsc0ZBQXNGLDJCQUEyQixXQUFXLFVBQVUsdUJBQXVCLGVBQWUsaUJBQWlCLHVCQUF1QixvQkFBb0IscUJBQXFCLGlEQUFpRCxxQkFBcUI7QUFDbmYseUJBQXlCLGlCQUFpQixtQ0FBbUMsaUJBQWlCLDRCQUE0QixpQkFBaUIsaUJBQWlCLGtCQUFrQix5QkFBeUIsaUJBQWlCLDRCQUE0QixpQkFBaUIsOEJBQThCLGlCQUFpQixpQkFBaUIsZUFBZSxrQ0FBa0MsbUJBQW1CLGlCQUFpQiwyQkFBMkIsOEJBQThCLGVBQWU7QUFDbGUsZUFBZSwyQ0FBMkMsdUJBQXVCLFdBQVcsV0FBVyxNQUFNLFlBQVksMkJBQTJCLE9BQU8sU0FBUyxJQUFJLFdBQVcsS0FBSyxFQUFFLEVBQUUsZUFBZSxlQUFlLDhCQUE4QixrQkFBa0IsSUFBSSxNQUFNLGtCQUFrQixJQUFJLE1BQU0sdUJBQXVCLDhDQUE4Qyx3QkFBd0IsZUFBZSx5QkFBeUIsbUJBQW1CLHdDQUF3QztBQUNoZixPQUFPLFdBQVcsZUFBZSxtQ0FBbUM7QUFDcEUsUUFBUSxjQUFjLHVCQUF1QixZQUFZLCtFQUErRSxpQkFBaUIsSUFBSSwrQkFBK0IsU0FBUyx3REFBd0QsYUFBYSxtQkFBbUIsSUFBSSxjQUFjLFVBQVUsa0JBQWtCLFdBQVcsTUFBTSxPQUFPLGdCQUFnQixLQUFLLGNBQWMsY0FBYyxjQUFjLHVCQUF1QixTQUFTO0FBQ2xjLGFBQWEsaUJBQWlCLElBQUksV0FBVyxhQUFhLFNBQVMsU0FBUyx3REFBd0QsYUFBYSxlQUFlLElBQUksZ0JBQWdCLDhCQUE4QixNQUFNLFNBQVMsNEJBQTRCLFdBQVcscUJBQXFCLEVBQUUsU0FBUyxTQUFTLHdEQUF3RCxhQUFhLG1CQUFtQixLQUFLLElBQUksV0FBVyxVQUFVLGtCQUFrQixpQkFBaUIsS0FBSyxNQUFNLEtBQUssa0JBQWtCO0FBQzVlLHNCQUFzQixrQ0FBa0Msb0NBQW9DLHVCQUF1Qix5QkFBeUIsK0JBQStCLG1CQUFtQixTQUFTLHdEQUF3RCxhQUFhLGlCQUFpQixJQUFJLFdBQVcsdUJBQXVCLFNBQVMsd0RBQXdELGFBQWEsbUJBQW1CLFVBQVUsSUFBSSxzQkFBc0IsV0FBVztBQUNuZCxhQUFhLFNBQVMsU0FBUyx3REFBd0QsYUFBYSxpQkFBaUIsSUFBSSxtQkFBbUIsZ0JBQWdCLGlCQUFpQixjQUFjLFNBQVMsU0FBUyx3REFBd0QsYUFBYSxpQkFBaUIsSUFBSSxnQ0FBZ0MsU0FBUyx3REFBd0QsYUFBYSxtQkFBbUIsSUFBSTtBQUM1YSxzQkFBc0IsU0FBUyx3REFBd0QsYUFBYSxxQkFBcUIsSUFBSSxjQUFjLFlBQVksaUJBQWlCLHVCQUF1QixTQUFTLHdEQUF3RCxhQUFhLHFCQUFxQixLQUFLLElBQUksY0FBYyxVQUFVLGVBQWUsb0JBQW9CLFNBQVMsd0RBQXdELGFBQWEscUJBQXFCLElBQUksY0FBYyxVQUFVO0FBQ3JlLHlDQUF5QyxjQUFjLFNBQVMsU0FBUyxTQUFTLHdEQUF3RCxhQUFhLGVBQWUsSUFBSSw2QkFBNkIsU0FBUyx3REFBd0QsYUFBYSxpQkFBaUIsSUFBSSxnQ0FBZ0MsU0FBUyx3REFBd0QsYUFBYSxtQkFBbUIsSUFBSSxjQUFjLFVBQVUsVUFBVSxJQUFJLFdBQVcsVUFBVSxPQUFPO0FBQ2pmLG1DQUFtQyxvQkFBb0IsNEJBQTRCLHdCQUF3QixhQUFhLE1BQU0seURBQXlELFNBQVMsU0FBUyx3REFBd0QsYUFBYSxtQkFBbUIsSUFBSSxjQUFjLGFBQWEsTUFBTSwrQ0FBK0MsY0FBYyxNQUFNLCtCQUErQixZQUFZLGNBQWMsMEJBQTBCLElBQUksV0FBVyxNQUFNO0FBQ2pmLFdBQVcsd0JBQXdCLEVBQUUsU0FBUyxTQUFTLHdEQUF3RCxhQUFhLG1CQUFtQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLGtCQUFrQiwrRUFBK0UsdUNBQXVDO0FBQzNkLDBCQUEwQiwwREFBMEQsMERBQTBELDZCQUE2QixVQUFVLElBQUksc0JBQXNCLFdBQVcsOERBQThELHdDQUF3Qyw0QkFBNEIseUJBQXlCLFdBQVcsYUFBYSxVQUFVLFNBQVMsU0FBUyx3REFBd0QsYUFBYTtBQUM5ZSxhQUFhLFVBQVUsSUFBSSxzQkFBc0IsV0FBVyxRQUFRLCtDQUErQywrQ0FBK0MsU0FBUyx3REFBd0QsYUFBYSxhQUFhLGNBQWMsaUVBQWlFLG1FQUFtRSx3QkFBd0IsNEJBQTRCLHlCQUF5QixxQkFBcUI7QUFDamYsT0FBTyxRQUFRLFFBQVEsb0RBQW9ELGdEQUFnRCxlQUFlLE9BQU8seUJBQXlCLFlBQVksS0FBSyxNQUFNLGlCQUFpQiwwQkFBMEIsV0FBVyxnQkFBZ0IsR0FBRyxzRkFBc0YsSUFBSSxXQUFXLEtBQUssUUFBUSxRQUFRLFVBQVUsU0FBUyxjQUFjLFNBQVMsV0FBVyxRQUFRLHFCQUFxQixVQUFVLGdCQUFnQjtBQUNoZixFQUFFLFdBQVcsOEJBQThCLFVBQVUsY0FBYyxFQUFFLFNBQVMsV0FBVyxXQUFXLGlCQUFpQixRQUFRLDRCQUE0QixVQUFVLFNBQVMsZUFBZSxJQUFJLFdBQVcsOEJBQThCLGtCQUFrQixJQUFJLDBCQUEwQixTQUFTLFNBQVMsUUFBUSxjQUFjLFVBQVUsU0FBUyxTQUFTLHdEQUF3RCxhQUFhLGlCQUFpQixJQUFJLFdBQVc7QUFDamMsRUFBRSxhQUFhLDRHQUE0RyxlQUFlLGdCQUFnQiw0R0FBNEcsZ0JBQWdCLGdCQUFnQixTQUFTLFNBQVMsd0RBQXdELGFBQWEscUJBQXFCLElBQUksR0FBRyxXQUFXLElBQUksZ0JBQWdCLElBQUksS0FBSywwQkFBMEIsS0FBSztBQUNoZSxFQUFFLDRCQUE0Qiw4QkFBOEIsd0NBQXdDLGtDQUFrQyw4QkFBOEIsNEJBQTRCLG1CQUFtQixvQ0FBb0MsMkJBQTJCLG1CQUFtQixRQUFRLFFBQVEsU0FBUyxRQUFRLEtBQUssYUFBYSwrQkFBK0IsSUFBSSxVQUFVLFNBQVMsU0FBUyx3REFBd0QsYUFBYSx1QkFBdUI7QUFDbmYsUUFBUSxJQUFJLHNCQUFzQixXQUFXLFVBQVUsa0lBQWtJLGFBQWEsZUFBZSxnQ0FBZ0MsU0FBUyxTQUFTLHdEQUF3RCxhQUFhLGVBQWUsSUFBSSxXQUFXLGNBQWMsZ0JBQWdCLDZCQUE2QixhQUFhLE9BQU8sRUFBRSxTQUFTO0FBQ3BjLGFBQWEscUJBQXFCLElBQUksR0FBRyxXQUFXLElBQUksZ0JBQWdCLElBQUksS0FBSywwQkFBMEIsS0FBSyx3QkFBd0IsNEJBQTRCLDhCQUE4Qix3Q0FBd0Msa0NBQWtDLCtCQUErQixvQ0FBb0MsNEJBQTRCLG1CQUFtQixvQ0FBb0MsbUNBQW1DLG1CQUFtQixRQUFRLFFBQVEsU0FBUyxRQUFRO0FBQ3pmLEVBQUUsK0JBQStCLElBQUksVUFBVSxTQUFTLFNBQVMsd0RBQXdELGFBQWEsNE5BQTROLGNBQWMsY0FBYyxZQUFZLFVBQVUsUUFBUSxLQUFLLGlCQUFpQixJQUFJLHNEQUFzRDtBQUM1ZSw2Q0FBNkMsU0FBUyxRQUFRLElBQUksU0FBUyxPQUFPLE1BQU0sSUFBSSxzREFBc0QseUJBQXlCLDhCQUE4QixTQUFTLHdEQUF3RCxFQUFFLFNBQVMsaUJBQWlCLGNBQWMsWUFBWSxTQUFTLEdBQUcscURBQXFELGlEQUFpRDtBQUNsYiwyRUFBMkUsNkNBQTZDLG1FQUFtRSwrREFBK0QscURBQXFELCtDQUErQyxpRUFBaUU7QUFDL1oseURBQXlELDJEQUEyRCw2REFBNkQsdURBQXVELDJEQUEyRCx5REFBeUQseUVBQXlFO0FBQ3JhLHVFQUF1RSwrREFBK0QsdUVBQXVFLDJEQUEyRCx5RUFBeUUsNkRBQTZEO0FBQzlZLGlFQUFpRSxtRUFBbUUscUVBQXFFLGlFQUFpRSxpRUFBaUUsaUVBQWlFO0FBQzVZLHFFQUFxRSwrREFBK0QsdUVBQXVFLDZEQUE2RCx5RUFBeUUsNkVBQTZFO0FBQzlaLDJDQUEyQywrREFBK0QsaURBQWlELG1FQUFtRSx5REFBeUQsdUVBQXVFLG1EQUFtRDtBQUNqWix5REFBeUQsaUVBQWlFLGlFQUFpRSxpR0FBaUcseUVBQXlFLGlEQUFpRDtBQUN0WixpREFBaUQsNkRBQTZELDJEQUEyRCwyREFBMkQsK0NBQStDO0FBQ25SLGlCQUFpQixVQUFVLG9CQUFvQixrREFBa0QsOENBQThDLDhCQUE4QixhQUFhLGFBQWEsb0NBQW9DLG9DQUFvQyxxQkFBcUIsT0FBTyxpQkFBaUIsU0FBUztBQUNyVSxjQUFjLGFBQWEsbUNBQW1DLHVVQUF1VSxNQUFNLE9BQU8sT0FBTyxNQUFNLG1EQUFtRCxPQUFPLFNBQVMsSUFBSSxhQUFhO0FBQ25mLEVBQUUsTUFBTSxTQUFTLE9BQU8sdUVBQXVFLGlCQUFpQixtQ0FBbUMsUUFBUSxXQUFXLG1FQUFtRSxnQkFBZ0IsTUFBTSxPQUFPLG1FQUFtRSxzQkFBc0IsZ0JBQWdCLElBQUksSUFBSSxXQUFXLHVFQUF1RSxtQkFBbUI7QUFDNWQsVUFBVSx3QkFBd0I7OztBQUdsQztBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhyQjtBQUM2QztBQUNQOztBQUV0QztBQUNPO0FBQ1A7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDhEQUFnQjtBQUMzQjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFlBQVk7QUFDekIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBZ0I7QUFDM0I7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQWdCO0FBQzNCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQWdCO0FBQzNCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsR0FBRztBQUNoQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyw4REFBZ0I7QUFDM0I7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxpRUFBbUI7QUFDOUI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsaUVBQW1CO0FBQzlCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsOERBQWdCO0FBQzNCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDhEQUFnQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QjtBQUMxQyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxFQUFFLHFFQUF1QjtBQUN6QixFQUFFLDBFQUE0QjtBQUM5QixFQUFFLHFFQUF1QjtBQUN6QixFQUFFLDBFQUE0QjtBQUM5QixFQUFFLDBFQUE0QjtBQUM5QixFQUFFLHdFQUEwQjtBQUM1QixFQUFFLDJFQUE2QjtBQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDaUM7QUFDNkI7QUFDakI7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDLGNBQWMscUJBQXFCO0FBQ25DLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsWUFBWTtBQUMxQjtBQUNBLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFdBQVc7QUFDekIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsVUFBVTtBQUN4QjtBQUNBLGNBQWMsYUFBYTtBQUMzQixjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNPLGdDQUFnQyx5Q0FBUTtBQUMvQztBQUNBLGFBQWEsOEJBQThCOztBQUUzQyxhQUFhLFlBQVk7QUFDekIsYUFBYSxhQUFhOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvQkFBb0Isc0RBQVU7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQyxtQkFBbUIsTUFBTSxJQUFJLHFCQUFxQixJQUFJLG1CQUFtQjs7QUFFekU7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBUTtBQUM3QjtBQUNBOztBQUVBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBLHdCQUF3Qix1REFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxpREFBaUQsVUFBVTtBQUMzRDtBQUNBO0FBQ0EsU0FBUztBQUNULHNDQUFzQyx5REFBd0I7QUFDOUQsZUFBZSw4Q0FBYTtBQUM1QixRQUFRO0FBQ1I7QUFDQSxlQUFlLG9EQUFtQjtBQUNsQztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7O0FBRWxDO0FBQ0EsMkJBQTJCLDhEQUE2QjtBQUN4RCx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZSw4Q0FBYTtBQUM1QixRQUFRO0FBQ1I7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFlBQVk7QUFDekIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxPQUFPO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQTJCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4Q0FBYTtBQUM5QixTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFlBQVk7QUFDekIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxRQUFROztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBLFFBQVE7QUFDUjtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVyxFQUFFLE1BQU07O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsYUFBYSw4Q0FBYTtBQUMxQixNQUFNO0FBQ047QUFDQSxhQUFhLGlEQUFnQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixXQUFXLEVBQUUsTUFBTTtBQUNwQyxXQUFXLDhDQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVcsRUFBRSxNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0EsV0FBVyw4Q0FBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVOztBQUUvQjtBQUNBLFdBQVcsOENBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXLEVBQUUsTUFBTTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhDQUFhLHlCQUF5Qix1REFBc0I7QUFDbkY7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsZUFBZSxpREFBZ0I7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXLEVBQUUsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7O0FBRTFDO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBNkI7QUFDeEMsV0FBVyw2REFBNEI7QUFDdkMsV0FBVyw0REFBMkI7QUFDdEMsV0FBVyx1RUFBc0M7QUFDakQ7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVcsRUFBRSxHQUFHOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBYTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBYTtBQUNsQyxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0EsbUJBQW1CLGlEQUFnQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsbUJBQW1CLGlEQUFnQjtBQUNuQztBQUNBO0FBQ0EsZUFBZSw4Q0FBYTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBYTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CLDhDQUFhO0FBQ2hDLFlBQVk7QUFDWjtBQUNBLG1CQUFtQixpREFBZ0I7QUFDbkM7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGlCQUFpQiw4Q0FBYTtBQUM5QixVQUFVO0FBQ1Y7QUFDQSxpQkFBaUIsaURBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsT0FBTztBQUNuRTtBQUNBLGFBQWE7QUFDYixtQkFBbUIsOENBQWE7QUFDaEMsWUFBWTtBQUNaO0FBQ0EsbUJBQW1CLGlEQUFnQjtBQUNuQztBQUNBLFNBQVM7O0FBRVQ7QUFDQSxlQUFlLG9EQUFtQjtBQUNsQztBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTSxFQUFFLE1BQU07O0FBRXJDO0FBQ0Esc0RBQXNELE9BQU87QUFDN0QsNENBQTRDLEtBQUs7QUFDakQsU0FBUztBQUNUO0FBQ0EsZUFBZSw4Q0FBYTtBQUM1QixRQUFRO0FBQ1I7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU0sRUFBRSxRQUFROztBQUVyQztBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQWE7QUFDNUIsUUFBUTtBQUNSO0FBQ0EsZUFBZSxpREFBZ0I7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLEVBQUUsNEJBQTRCLFdBQVcsb0JBQW9CO0FBQ3RGLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNsekJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQLGFBQWEsYUFBYTtBQUMxQixhQUFhLHNCQUFzQjtBQUNuQzs7QUFFQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSwrQ0FBK0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsK0NBQStDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkJBQTZCO0FBQzlELGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUzs7QUFFVCwrQkFBK0IsVUFBVSxFQUFFLEtBQUs7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxhQUFhO0FBQzFCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsZUFBZTtBQUNmO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxVQUFVOztBQUV2QjtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLCtCQUErQiw2QkFBNkIsR0FBRyxpQkFBaUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1BBO0FBQ2lDOztBQUVqQztBQUNBLEVBQUUscURBQW9CO0FBQ3RCLEVBQUUsdURBQXNCO0FBQ3hCLEVBQUUseURBQXdCO0FBQzFCLEVBQUUsd0RBQXVCO0FBQ3pCLEVBQUUsMERBQXlCOztBQUVwQjtBQUNQLGdCQUFnQjtBQUNoQixXQUFXLHFEQUFvQjs7QUFFL0I7O0FBRUEsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQkFBbUI7O0FBRWhDO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQjtBQUM1QyxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBYTtBQUMxQixNQUFNO0FBQ047QUFDQSxlQUFlLGdEQUFlO0FBQzlCO0FBQ0E7QUFDQSxhQUFhLHNEQUFxQjtBQUNsQztBQUNBOztBQUVBO0FBQ0EsNENBQTRDLDhDQUFhO0FBQ3pEO0FBQ0EsV0FBVyxxREFBb0I7QUFDL0I7QUFDQSxlQUFlLHVEQUFzQjtBQUNyQztBQUNBO0FBQ0EscURBQXFELGFBQWEsS0FBSyxZQUFZO0FBQ25GOztBQUVBLFdBQVcsdURBQXNCO0FBQ2pDO0FBQ0EsZUFBZSx5REFBd0I7QUFDdkM7QUFDQSxlQUFlLDBEQUF5QjtBQUN4QztBQUNBO0FBQ0EscURBQXFELGFBQWEsS0FBSyxZQUFZO0FBQ25GO0FBQ0E7QUFDQSxXQUFXLHlEQUF3QjtBQUNuQztBQUNBLGVBQWUsMERBQXlCO0FBQ3hDO0FBQ0E7QUFDQSxxREFBcUQsYUFBYSxLQUFLLFlBQVk7QUFDbkY7O0FBRUE7QUFDQSxpREFBaUQsYUFBYSxLQUFLLFlBQVk7QUFDL0U7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyw4Q0FBYTtBQUMxRDtBQUNBLFdBQVcsMERBQXlCO0FBQ3BDO0FBQ0EsZUFBZSx1REFBc0I7QUFDckM7QUFDQSxlQUFlLHFEQUFvQjtBQUNuQztBQUNBO0FBQ0EscURBQXFELGFBQWEsS0FBSyxZQUFZO0FBQ25GO0FBQ0E7QUFDQSxXQUFXLHlEQUF3QjtBQUNuQztBQUNBLGVBQWUsdURBQXNCO0FBQ3JDO0FBQ0EsZUFBZSxxREFBb0I7QUFDbkM7QUFDQTtBQUNBLHFEQUFxRCxhQUFhLEtBQUssWUFBWTtBQUNuRjs7QUFFQSxXQUFXLHVEQUFzQjtBQUNqQztBQUNBLGVBQWUscURBQW9CO0FBQ25DO0FBQ0E7QUFDQSxxREFBcUQsYUFBYSxLQUFLLFlBQVk7QUFDbkY7O0FBRUE7QUFDQSxpREFBaUQsYUFBYSxLQUFLLFlBQVk7QUFDL0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELGdCQUFnQjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFVQTs7QUFFZ0Q7QUFDVjs7QUFFdEM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhO0FBQ2I7QUFDTztBQUNQLGFBQWEsV0FBVzs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0RBQW9CO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLCtEQUFvQjtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFnQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxpQkFBaUIsK0RBQW9CO0FBQ3JDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCw4REFBbUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDhEQUFtQjs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZEQUFrQjtBQUM3QjtBQUNBLFdBQVcsOERBQW1CO0FBQzlCO0FBQ0EsV0FBVyxnRUFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2REFBa0I7QUFDN0I7QUFDQSxXQUFXLDZEQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsK0RBQW9CO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDREQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQWdCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBZ0I7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNERBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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aUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMTdCQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTs7QUFFUDtBQUNBO0FBQ08sMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkJBQTJCOztBQUVsQztBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFckQ7QUFDTztBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDOVFQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDYnVFO0FBQ25DO0FBQ3lDOztBQUU3RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsOEVBQXFCO0FBQ25ELGNBQWMsOENBQWM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1RkFBaUI7QUFDbEQ7QUFDQTtBQUNBLFlBQVkseURBQXlCLEdBQUcsNERBQTRCLEdBQUcsc0RBQXNCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0RBQWdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlEQUFpQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdEQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsaURBQWlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCLE9BQU8sR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLE1BQU07QUFDTiwyQkFBMkIsdUNBQXVDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL3dhLXNxbGl0ZS9kaXN0L3dhLXNxbGl0ZS1hc3luYy5tanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvd2Etc3FsaXRlL3NyYy9WRlMuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvd2Etc3FsaXRlL3NyYy9leGFtcGxlcy9JREJCYXRjaEF0b21pY1ZGUy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy93YS1zcWxpdGUvc3JjL2V4YW1wbGVzL0lEQkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvd2Etc3FsaXRlL3NyYy9leGFtcGxlcy9XZWJMb2Nrcy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy93YS1zcWxpdGUvc3JjL3NxbGl0ZS1hcGkuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvd2Etc3FsaXRlL3NyYy9zcWxpdGUtY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vc3JjL3NxbGl0ZS13b3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgTW9kdWxlID0gKCgpID0+IHtcbiAgdmFyIF9zY3JpcHREaXIgPSBpbXBvcnQubWV0YS51cmw7XG4gIFxuICByZXR1cm4gKFxuZnVuY3Rpb24obW9kdWxlQXJnID0ge30pIHtcblxudmFyIGY9bW9kdWxlQXJnLGFhLGJhO2YucmVhZHk9bmV3IFByb21pc2UoKGEsYik9PnthYT1hO2JhPWJ9KTt2YXIgY2E9T2JqZWN0LmFzc2lnbih7fSxmKSxkYT1cIi4vdGhpcy5wcm9ncmFtXCIsZWE9KGEsYik9Pnt0aHJvdyBiO30sZmE9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyxpYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpbXBvcnRTY3JpcHRzLHA9XCJcIixqYTtcbmlmKGZhfHxpYSlpYT9wPXNlbGYubG9jYXRpb24uaHJlZjpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmRvY3VtZW50LmN1cnJlbnRTY3JpcHQmJihwPWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjKSxfc2NyaXB0RGlyJiYocD1fc2NyaXB0RGlyKSwwIT09cC5pbmRleE9mKFwiYmxvYjpcIik/cD1wLnN1YnN0cigwLHAucmVwbGFjZSgvWz8jXS4qLyxcIlwiKS5sYXN0SW5kZXhPZihcIi9cIikrMSk6cD1cIlwiLGlhJiYoamE9YT0+e3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJHRVRcIixhLCExKTtiLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7Yi5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheShiLnJlc3BvbnNlKX0pO3ZhciBrYT1mLnByaW50fHxjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLHQ9Zi5wcmludEVycnx8Y29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oZixjYSk7Y2E9bnVsbDtmLnRoaXNQcm9ncmFtJiYoZGE9Zi50aGlzUHJvZ3JhbSk7XG5mLnF1aXQmJihlYT1mLnF1aXQpO3ZhciBsYTtmLndhc21CaW5hcnkmJihsYT1mLndhc21CaW5hcnkpO3ZhciBub0V4aXRSdW50aW1lPWYubm9FeGl0UnVudGltZXx8ITA7XCJvYmplY3RcIiE9dHlwZW9mIFdlYkFzc2VtYmx5JiZ1KFwibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZFwiKTt2YXIgbWEsdj0hMSxuYSx3LHksb2EseixCLHBhLHFhO2Z1bmN0aW9uIHJhKCl7dmFyIGE9bWEuYnVmZmVyO2YuSEVBUDg9dz1uZXcgSW50OEFycmF5KGEpO2YuSEVBUDE2PW9hPW5ldyBJbnQxNkFycmF5KGEpO2YuSEVBUFU4PXk9bmV3IFVpbnQ4QXJyYXkoYSk7Zi5IRUFQVTE2PW5ldyBVaW50MTZBcnJheShhKTtmLkhFQVAzMj16PW5ldyBJbnQzMkFycmF5KGEpO2YuSEVBUFUzMj1CPW5ldyBVaW50MzJBcnJheShhKTtmLkhFQVBGMzI9cGE9bmV3IEZsb2F0MzJBcnJheShhKTtmLkhFQVBGNjQ9cWE9bmV3IEZsb2F0NjRBcnJheShhKX12YXIgc2E9W10sdGE9W10sdWE9W10sdmE9W10sd2E9MDtcbmZ1bmN0aW9uIHhhKCl7dmFyIGE9Zi5wcmVSdW4uc2hpZnQoKTtzYS51bnNoaWZ0KGEpfXZhciBDPTAseWE9bnVsbCx6YT1udWxsO2Z1bmN0aW9uIHUoYSl7aWYoZi5vbkFib3J0KWYub25BYm9ydChhKTthPVwiQWJvcnRlZChcIithK1wiKVwiO3QoYSk7dj0hMDtuYT0xO2E9bmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcihhK1wiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiKTtiYShhKTt0aHJvdyBhO31mdW5jdGlvbiBBYShhKXtyZXR1cm4gYS5zdGFydHNXaXRoKFwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiKX12YXIgQmE7aWYoZi5sb2NhdGVGaWxlKXtpZihCYT1cIndhLXNxbGl0ZS1hc3luYy53YXNtXCIsIUFhKEJhKSl7dmFyIENhPUJhO0JhPWYubG9jYXRlRmlsZT9mLmxvY2F0ZUZpbGUoQ2EscCk6cCtDYX19ZWxzZSBCYT0obmV3IFVSTChcIndhLXNxbGl0ZS1hc3luYy53YXNtXCIsaW1wb3J0Lm1ldGEudXJsKSkuaHJlZjtcbmZ1bmN0aW9uIERhKGEpe2lmKGE9PUJhJiZsYSlyZXR1cm4gbmV3IFVpbnQ4QXJyYXkobGEpO2lmKGphKXJldHVybiBqYShhKTt0aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIjt9ZnVuY3Rpb24gRWEoYSl7cmV0dXJuIGxhfHwhZmEmJiFpYXx8XCJmdW5jdGlvblwiIT10eXBlb2YgZmV0Y2g/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+RGEoYSkpOmZldGNoKGEse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4oYj0+e2lmKCFiLm9rKXRocm93XCJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICdcIithK1wiJ1wiO3JldHVybiBiLmFycmF5QnVmZmVyKCl9KS5jYXRjaCgoKT0+RGEoYSkpfVxuZnVuY3Rpb24gRmEoYSxiLGMpe3JldHVybiBFYShhKS50aGVuKGQ9PldlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGQsYikpLnRoZW4oZD0+ZCkudGhlbihjLGQ9Pnt0KGBmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAke2R9YCk7dShkKX0pfWZ1bmN0aW9uIEdhKGEsYil7dmFyIGM9QmE7cmV0dXJuIGxhfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZ3x8QWEoYyl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGZldGNoP0ZhKGMsYSxiKTpmZXRjaChjLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKGQ9PldlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKGQsYSkudGhlbihiLGZ1bmN0aW9uKGUpe3QoYHdhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAke2V9YCk7dChcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO3JldHVybiBGYShjLGEsYil9KSl9dmFyIEQsRjtcbmZ1bmN0aW9uIEhhKGEpe3RoaXMubmFtZT1cIkV4aXRTdGF0dXNcIjt0aGlzLm1lc3NhZ2U9YFByb2dyYW0gdGVybWluYXRlZCB3aXRoIGV4aXQoJHthfSlgO3RoaXMuc3RhdHVzPWF9dmFyIElhPWE9Pntmb3IoOzA8YS5sZW5ndGg7KWEuc2hpZnQoKShmKX07ZnVuY3Rpb24gSShhLGI9XCJpOFwiKXtiLmVuZHNXaXRoKFwiKlwiKSYmKGI9XCIqXCIpO3N3aXRjaChiKXtjYXNlIFwiaTFcIjpyZXR1cm4gd1thPj4wXTtjYXNlIFwiaThcIjpyZXR1cm4gd1thPj4wXTtjYXNlIFwiaTE2XCI6cmV0dXJuIG9hW2E+PjFdO2Nhc2UgXCJpMzJcIjpyZXR1cm4gelthPj4yXTtjYXNlIFwiaTY0XCI6dShcInRvIGRvIGdldFZhbHVlKGk2NCkgdXNlIFdBU01fQklHSU5UXCIpO2Nhc2UgXCJmbG9hdFwiOnJldHVybiBwYVthPj4yXTtjYXNlIFwiZG91YmxlXCI6cmV0dXJuIHFhW2E+PjNdO2Nhc2UgXCIqXCI6cmV0dXJuIEJbYT4+Ml07ZGVmYXVsdDp1KGBpbnZhbGlkIHR5cGUgZm9yIGdldFZhbHVlOiAke2J9YCl9fVxuZnVuY3Rpb24gSihhLGIsYz1cImk4XCIpe2MuZW5kc1dpdGgoXCIqXCIpJiYoYz1cIipcIik7c3dpdGNoKGMpe2Nhc2UgXCJpMVwiOndbYT4+MF09YjticmVhaztjYXNlIFwiaThcIjp3W2E+PjBdPWI7YnJlYWs7Y2FzZSBcImkxNlwiOm9hW2E+PjFdPWI7YnJlYWs7Y2FzZSBcImkzMlwiOnpbYT4+Ml09YjticmVhaztjYXNlIFwiaTY0XCI6dShcInRvIGRvIHNldFZhbHVlKGk2NCkgdXNlIFdBU01fQklHSU5UXCIpO2Nhc2UgXCJmbG9hdFwiOnBhW2E+PjJdPWI7YnJlYWs7Y2FzZSBcImRvdWJsZVwiOnFhW2E+PjNdPWI7YnJlYWs7Y2FzZSBcIipcIjpCW2E+PjJdPWI7YnJlYWs7ZGVmYXVsdDp1KGBpbnZhbGlkIHR5cGUgZm9yIHNldFZhbHVlOiAke2N9YCl9fVxudmFyIEphPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBUZXh0RGVjb2Rlcj9uZXcgVGV4dERlY29kZXIoXCJ1dGY4XCIpOnZvaWQgMCxLPShhLGIsYyk9Pnt2YXIgZD1iK2M7Zm9yKGM9YjthW2NdJiYhKGM+PWQpOykrK2M7aWYoMTY8Yy1iJiZhLmJ1ZmZlciYmSmEpcmV0dXJuIEphLmRlY29kZShhLnN1YmFycmF5KGIsYykpO2ZvcihkPVwiXCI7YjxjOyl7dmFyIGU9YVtiKytdO2lmKGUmMTI4KXt2YXIgaD1hW2IrK10mNjM7aWYoMTkyPT0oZSYyMjQpKWQrPVN0cmluZy5mcm9tQ2hhckNvZGUoKGUmMzEpPDw2fGgpO2Vsc2V7dmFyIGc9YVtiKytdJjYzO2U9MjI0PT0oZSYyNDApPyhlJjE1KTw8MTJ8aDw8NnxnOihlJjcpPDwxOHxoPDwxMnxnPDw2fGFbYisrXSY2Mzs2NTUzNj5lP2QrPVN0cmluZy5mcm9tQ2hhckNvZGUoZSk6KGUtPTY1NTM2LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8ZT4+MTAsNTYzMjB8ZSYxMDIzKSl9fWVsc2UgZCs9U3RyaW5nLmZyb21DaGFyQ29kZShlKX1yZXR1cm4gZH0sXG5LYT0oYSxiKT0+e2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGgtMTswPD1kO2QtLSl7dmFyIGU9YVtkXTtcIi5cIj09PWU/YS5zcGxpY2UoZCwxKTpcIi4uXCI9PT1lPyhhLnNwbGljZShkLDEpLGMrKyk6YyYmKGEuc3BsaWNlKGQsMSksYy0tKX1pZihiKWZvcig7YztjLS0pYS51bnNoaWZ0KFwiLi5cIik7cmV0dXJuIGF9LE09YT0+e3ZhciBiPVwiL1wiPT09YS5jaGFyQXQoMCksYz1cIi9cIj09PWEuc3Vic3RyKC0xKTsoYT1LYShhLnNwbGl0KFwiL1wiKS5maWx0ZXIoZD0+ISFkKSwhYikuam9pbihcIi9cIikpfHxifHwoYT1cIi5cIik7YSYmYyYmKGErPVwiL1wiKTtyZXR1cm4oYj9cIi9cIjpcIlwiKSthfSxMYT1hPT57dmFyIGI9L14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC8uZXhlYyhhKS5zbGljZSgxKTthPWJbMF07Yj1iWzFdO2lmKCFhJiYhYilyZXR1cm5cIi5cIjtiJiYoYj1iLnN1YnN0cigwLGIubGVuZ3RoLTEpKTtyZXR1cm4gYStifSxNYT1hPT57aWYoXCIvXCI9PT1cbmEpcmV0dXJuXCIvXCI7YT1NKGEpO2E9YS5yZXBsYWNlKC9cXC8kLyxcIlwiKTt2YXIgYj1hLmxhc3RJbmRleE9mKFwiL1wiKTtyZXR1cm4tMT09PWI/YTphLnN1YnN0cihiKzEpfSxOYT0oKT0+e2lmKFwib2JqZWN0XCI9PXR5cGVvZiBjcnlwdG8mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpcmV0dXJuIGE9PmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYSk7dShcImluaXRSYW5kb21EZXZpY2VcIil9LE9hPWE9PihPYT1OYSgpKShhKTtcbmZ1bmN0aW9uIFBhKCl7Zm9yKHZhciBhPVwiXCIsYj0hMSxjPWFyZ3VtZW50cy5sZW5ndGgtMTstMTw9YyYmIWI7Yy0tKXtiPTA8PWM/YXJndW1lbnRzW2NdOlwiL1wiO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5nc1wiKTtpZighYilyZXR1cm5cIlwiO2E9YitcIi9cIithO2I9XCIvXCI9PT1iLmNoYXJBdCgwKX1hPUthKGEuc3BsaXQoXCIvXCIpLmZpbHRlcihkPT4hIWQpLCFiKS5qb2luKFwiL1wiKTtyZXR1cm4oYj9cIi9cIjpcIlwiKSthfHxcIi5cIn1cbnZhciBRYT1bXSxSYT1hPT57Zm9yKHZhciBiPTAsYz0wO2M8YS5sZW5ndGg7KytjKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7MTI3Pj1kP2IrKzoyMDQ3Pj1kP2IrPTI6NTUyOTY8PWQmJjU3MzQzPj1kPyhiKz00LCsrYyk6Yis9M31yZXR1cm4gYn0sU2E9KGEsYixjLGQpPT57aWYoISgwPGQpKXJldHVybiAwO3ZhciBlPWM7ZD1jK2QtMTtmb3IodmFyIGg9MDtoPGEubGVuZ3RoOysraCl7dmFyIGc9YS5jaGFyQ29kZUF0KGgpO2lmKDU1Mjk2PD1nJiY1NzM0Mz49Zyl7dmFyIG49YS5jaGFyQ29kZUF0KCsraCk7Zz02NTUzNisoKGcmMTAyMyk8PDEwKXxuJjEwMjN9aWYoMTI3Pj1nKXtpZihjPj1kKWJyZWFrO2JbYysrXT1nfWVsc2V7aWYoMjA0Nz49Zyl7aWYoYysxPj1kKWJyZWFrO2JbYysrXT0xOTJ8Zz4+Nn1lbHNle2lmKDY1NTM1Pj1nKXtpZihjKzI+PWQpYnJlYWs7YltjKytdPTIyNHxnPj4xMn1lbHNle2lmKGMrMz49ZClicmVhaztiW2MrK109MjQwfGc+PjE4O2JbYysrXT0xMjh8Zz4+XG4xMiY2M31iW2MrK109MTI4fGc+PjYmNjN9YltjKytdPTEyOHxnJjYzfX1iW2NdPTA7cmV0dXJuIGMtZX0sVGE9W107ZnVuY3Rpb24gVWEoYSxiKXtUYVthXT17aW5wdXQ6W10sVGI6W10sZGM6Yn07VmEoYSxXYSl9XG52YXIgV2E9e29wZW4oYSl7dmFyIGI9VGFbYS5ub2RlLmhjXTtpZighYil0aHJvdyBuZXcgTig0Myk7YS5VYj1iO2Euc2Vla2FibGU9ITF9LGNsb3NlKGEpe2EuVWIuZGMua2MoYS5VYil9LGtjKGEpe2EuVWIuZGMua2MoYS5VYil9LHJlYWQoYSxiLGMsZCl7aWYoIWEuVWJ8fCFhLlViLmRjLnpjKXRocm93IG5ldyBOKDYwKTtmb3IodmFyIGU9MCxoPTA7aDxkO2grKyl7dHJ5e3ZhciBnPWEuVWIuZGMuemMoYS5VYil9Y2F0Y2gobil7dGhyb3cgbmV3IE4oMjkpO31pZih2b2lkIDA9PT1nJiYwPT09ZSl0aHJvdyBuZXcgTig2KTtpZihudWxsPT09Z3x8dm9pZCAwPT09ZylicmVhaztlKys7YltjK2hdPWd9ZSYmKGEubm9kZS50aW1lc3RhbXA9RGF0ZS5ub3coKSk7cmV0dXJuIGV9LHdyaXRlKGEsYixjLGQpe2lmKCFhLlVifHwhYS5VYi5kYy50Yyl0aHJvdyBuZXcgTig2MCk7dHJ5e2Zvcih2YXIgZT0wO2U8ZDtlKyspYS5VYi5kYy50YyhhLlViLGJbYytlXSl9Y2F0Y2goaCl7dGhyb3cgbmV3IE4oMjkpO1xufWQmJihhLm5vZGUudGltZXN0YW1wPURhdGUubm93KCkpO3JldHVybiBlfX0sWGE9e3pjKCl7YTp7aWYoIVFhLmxlbmd0aCl7dmFyIGE9bnVsbDtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cucHJvbXB0PyhhPXdpbmRvdy5wcm9tcHQoXCJJbnB1dDogXCIpLG51bGwhPT1hJiYoYSs9XCJcXG5cIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHJlYWRsaW5lJiYoYT1yZWFkbGluZSgpLG51bGwhPT1hJiYoYSs9XCJcXG5cIikpO2lmKCFhKXt2YXIgYj1udWxsO2JyZWFrIGF9Yj1BcnJheShSYShhKSsxKTthPVNhKGEsYiwwLGIubGVuZ3RoKTtiLmxlbmd0aD1hO1FhPWJ9Yj1RYS5zaGlmdCgpfXJldHVybiBifSx0YyhhLGIpe251bGw9PT1ifHwxMD09PWI/KGthKEsoYS5UYiwwKSksYS5UYj1bXSk6MCE9YiYmYS5UYi5wdXNoKGIpfSxrYyhhKXthLlRiJiYwPGEuVGIubGVuZ3RoJiYoa2EoSyhhLlRiLDApKSxhLlRiPVtdKX0sJGMoKXtyZXR1cm57V2M6MjU4NTYsXG5ZYzo1LFZjOjE5MSxYYzozNTM4NyxVYzpbMywyOCwxMjcsMjEsNCwwLDEsMCwxNywxOSwyNiwwLDE4LDE1LDIzLDIyLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdfX0sYWQoKXtyZXR1cm4gMH0sYmQoKXtyZXR1cm5bMjQsODBdfX0sWWE9e3RjKGEsYil7bnVsbD09PWJ8fDEwPT09Yj8odChLKGEuVGIsMCkpLGEuVGI9W10pOjAhPWImJmEuVGIucHVzaChiKX0sa2MoYSl7YS5UYiYmMDxhLlRiLmxlbmd0aCYmKHQoSyhhLlRiLDApKSxhLlRiPVtdKX19O2Z1bmN0aW9uIFphKGEsYil7dmFyIGM9YS5QYj9hLlBiLmxlbmd0aDowO2M+PWJ8fChiPU1hdGgubWF4KGIsYyooMTA0ODU3Nj5jPzI6MS4xMjUpPj4+MCksMCE9YyYmKGI9TWF0aC5tYXgoYiwyNTYpKSxjPWEuUGIsYS5QYj1uZXcgVWludDhBcnJheShiKSwwPGEuUmImJmEuUGIuc2V0KGMuc3ViYXJyYXkoMCxhLlJiKSwwKSl9XG52YXIgTz17WGI6bnVsbCxXYigpe3JldHVybiBPLmNyZWF0ZU5vZGUobnVsbCxcIi9cIiwxNjg5NSwwKX0sY3JlYXRlTm9kZShhLGIsYyxkKXtpZigyNDU3Nj09PShjJjYxNDQwKXx8NDA5Nj09PShjJjYxNDQwKSl0aHJvdyBuZXcgTig2Myk7Ty5YYnx8KE8uWGI9e2Rpcjp7bm9kZTp7VmI6Ty5FYi5WYixTYjpPLkViLlNiLGVjOk8uRWIuZWMsbGM6Ty5FYi5sYyxEYzpPLkViLkRjLHFjOk8uRWIucWMsb2M6Ty5FYi5vYyxDYzpPLkViLkNjLHBjOk8uRWIucGN9LHN0cmVhbTp7YWM6Ty5PYi5hY319LGZpbGU6e25vZGU6e1ZiOk8uRWIuVmIsU2I6Ty5FYi5TYn0sc3RyZWFtOnthYzpPLk9iLmFjLHJlYWQ6Ty5PYi5yZWFkLHdyaXRlOk8uT2Iud3JpdGUsd2M6Ty5PYi53YyxtYzpPLk9iLm1jLG5jOk8uT2IubmN9fSxsaW5rOntub2RlOntWYjpPLkViLlZiLFNiOk8uRWIuU2IsaWM6Ty5FYi5pY30sc3RyZWFtOnt9fSx4Yzp7bm9kZTp7VmI6Ty5FYi5WYixTYjpPLkViLlNifSxzdHJlYW06JGF9fSk7XG5jPWFiKGEsYixjLGQpO1AoYy5tb2RlKT8oYy5FYj1PLlhiLmRpci5ub2RlLGMuT2I9Ty5YYi5kaXIuc3RyZWFtLGMuUGI9e30pOjMyNzY4PT09KGMubW9kZSY2MTQ0MCk/KGMuRWI9Ty5YYi5maWxlLm5vZGUsYy5PYj1PLlhiLmZpbGUuc3RyZWFtLGMuUmI9MCxjLlBiPW51bGwpOjQwOTYwPT09KGMubW9kZSY2MTQ0MCk/KGMuRWI9Ty5YYi5saW5rLm5vZGUsYy5PYj1PLlhiLmxpbmsuc3RyZWFtKTo4MTkyPT09KGMubW9kZSY2MTQ0MCkmJihjLkViPU8uWGIueGMubm9kZSxjLk9iPU8uWGIueGMuc3RyZWFtKTtjLnRpbWVzdGFtcD1EYXRlLm5vdygpO2EmJihhLlBiW2JdPWMsYS50aW1lc3RhbXA9Yy50aW1lc3RhbXApO3JldHVybiBjfSxaYyhhKXtyZXR1cm4gYS5QYj9hLlBiLnN1YmFycmF5P2EuUGIuc3ViYXJyYXkoMCxhLlJiKTpuZXcgVWludDhBcnJheShhLlBiKTpuZXcgVWludDhBcnJheSgwKX0sRWI6e1ZiKGEpe3ZhciBiPXt9O2IuSmM9ODE5Mj09PShhLm1vZGUmNjE0NDApP2EuaWQ6XG4xO2IuQWM9YS5pZDtiLm1vZGU9YS5tb2RlO2IuUGM9MTtiLnVpZD0wO2IuTWM9MDtiLmhjPWEuaGM7UChhLm1vZGUpP2Iuc2l6ZT00MDk2OjMyNzY4PT09KGEubW9kZSY2MTQ0MCk/Yi5zaXplPWEuUmI6NDA5NjA9PT0oYS5tb2RlJjYxNDQwKT9iLnNpemU9YS5saW5rLmxlbmd0aDpiLnNpemU9MDtiLkZjPW5ldyBEYXRlKGEudGltZXN0YW1wKTtiLk9jPW5ldyBEYXRlKGEudGltZXN0YW1wKTtiLkljPW5ldyBEYXRlKGEudGltZXN0YW1wKTtiLkdjPTQwOTY7Yi5IYz1NYXRoLmNlaWwoYi5zaXplL2IuR2MpO3JldHVybiBifSxTYihhLGIpe3ZvaWQgMCE9PWIubW9kZSYmKGEubW9kZT1iLm1vZGUpO3ZvaWQgMCE9PWIudGltZXN0YW1wJiYoYS50aW1lc3RhbXA9Yi50aW1lc3RhbXApO2lmKHZvaWQgMCE9PWIuc2l6ZSYmKGI9Yi5zaXplLGEuUmIhPWIpKWlmKDA9PWIpYS5QYj1udWxsLGEuUmI9MDtlbHNle3ZhciBjPWEuUGI7YS5QYj1uZXcgVWludDhBcnJheShiKTtjJiZhLlBiLnNldChjLnN1YmFycmF5KDAsXG5NYXRoLm1pbihiLGEuUmIpKSk7YS5SYj1ifX0sZWMoKXt0aHJvdyBiYls0NF07fSxsYyhhLGIsYyxkKXtyZXR1cm4gTy5jcmVhdGVOb2RlKGEsYixjLGQpfSxEYyhhLGIsYyl7aWYoUChhLm1vZGUpKXt0cnl7dmFyIGQ9Y2IoYixjKX1jYXRjaChoKXt9aWYoZClmb3IodmFyIGUgaW4gZC5QYil0aHJvdyBuZXcgTig1NSk7fWRlbGV0ZSBhLnBhcmVudC5QYlthLm5hbWVdO2EucGFyZW50LnRpbWVzdGFtcD1EYXRlLm5vdygpO2EubmFtZT1jO2IuUGJbY109YTtiLnRpbWVzdGFtcD1hLnBhcmVudC50aW1lc3RhbXA7YS5wYXJlbnQ9Yn0scWMoYSxiKXtkZWxldGUgYS5QYltiXTthLnRpbWVzdGFtcD1EYXRlLm5vdygpfSxvYyhhLGIpe3ZhciBjPWNiKGEsYiksZDtmb3IoZCBpbiBjLlBiKXRocm93IG5ldyBOKDU1KTtkZWxldGUgYS5QYltiXTthLnRpbWVzdGFtcD1EYXRlLm5vdygpfSxDYyhhKXt2YXIgYj1bXCIuXCIsXCIuLlwiXSxjO2ZvcihjIGluIGEuUGIpYS5QYi5oYXNPd25Qcm9wZXJ0eShjKSYmXG5iLnB1c2goYyk7cmV0dXJuIGJ9LHBjKGEsYixjKXthPU8uY3JlYXRlTm9kZShhLGIsNDE0NzEsMCk7YS5saW5rPWM7cmV0dXJuIGF9LGljKGEpe2lmKDQwOTYwIT09KGEubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oMjgpO3JldHVybiBhLmxpbmt9fSxPYjp7cmVhZChhLGIsYyxkLGUpe3ZhciBoPWEubm9kZS5QYjtpZihlPj1hLm5vZGUuUmIpcmV0dXJuIDA7YT1NYXRoLm1pbihhLm5vZGUuUmItZSxkKTtpZig4PGEmJmguc3ViYXJyYXkpYi5zZXQoaC5zdWJhcnJheShlLGUrYSksYyk7ZWxzZSBmb3IoZD0wO2Q8YTtkKyspYltjK2RdPWhbZStkXTtyZXR1cm4gYX0sd3JpdGUoYSxiLGMsZCxlLGgpe2IuYnVmZmVyPT09dy5idWZmZXImJihoPSExKTtpZighZClyZXR1cm4gMDthPWEubm9kZTthLnRpbWVzdGFtcD1EYXRlLm5vdygpO2lmKGIuc3ViYXJyYXkmJighYS5QYnx8YS5QYi5zdWJhcnJheSkpe2lmKGgpcmV0dXJuIGEuUGI9Yi5zdWJhcnJheShjLGMrZCksYS5SYj1kO2lmKDA9PT1cbmEuUmImJjA9PT1lKXJldHVybiBhLlBiPWIuc2xpY2UoYyxjK2QpLGEuUmI9ZDtpZihlK2Q8PWEuUmIpcmV0dXJuIGEuUGIuc2V0KGIuc3ViYXJyYXkoYyxjK2QpLGUpLGR9WmEoYSxlK2QpO2lmKGEuUGIuc3ViYXJyYXkmJmIuc3ViYXJyYXkpYS5QYi5zZXQoYi5zdWJhcnJheShjLGMrZCksZSk7ZWxzZSBmb3IoaD0wO2g8ZDtoKyspYS5QYltlK2hdPWJbYytoXTthLlJiPU1hdGgubWF4KGEuUmIsZStkKTtyZXR1cm4gZH0sYWMoYSxiLGMpezE9PT1jP2IrPWEucG9zaXRpb246Mj09PWMmJjMyNzY4PT09KGEubm9kZS5tb2RlJjYxNDQwKSYmKGIrPWEubm9kZS5SYik7aWYoMD5iKXRocm93IG5ldyBOKDI4KTtyZXR1cm4gYn0sd2MoYSxiLGMpe1phKGEubm9kZSxiK2MpO2Eubm9kZS5SYj1NYXRoLm1heChhLm5vZGUuUmIsYitjKX0sbWMoYSxiLGMsZCxlKXtpZigzMjc2OCE9PShhLm5vZGUubW9kZSY2MTQ0MCkpdGhyb3cgbmV3IE4oNDMpO2E9YS5ub2RlLlBiO2lmKGUmMnx8YS5idWZmZXIhPT1cbncuYnVmZmVyKXtpZigwPGN8fGMrYjxhLmxlbmd0aClhLnN1YmFycmF5P2E9YS5zdWJhcnJheShjLGMrYik6YT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLGMsYytiKTtjPSEwO2I9NjU1MzYqTWF0aC5jZWlsKGIvNjU1MzYpOyhlPWRiKDY1NTM2LGIpKT8oeS5maWxsKDAsZSxlK2IpLGI9ZSk6Yj0wO2lmKCFiKXRocm93IG5ldyBOKDQ4KTt3LnNldChhLGIpfWVsc2UgYz0hMSxiPWEuYnl0ZU9mZnNldDtyZXR1cm57UWM6YixFYzpjfX0sbmMoYSxiLGMsZCl7Ty5PYi53cml0ZShhLGIsMCxkLGMsITEpO3JldHVybiAwfX19LGViPShhLGIpPT57dmFyIGM9MDthJiYoY3w9MzY1KTtiJiYoY3w9MTQ2KTtyZXR1cm4gY30sZmI9bnVsbCxnYj17fSxoYj1bXSxpYj0xLFE9bnVsbCxqYj0hMCxOPW51bGwsYmI9e307XG5mdW5jdGlvbiBSKGEsYj17fSl7YT1QYShhKTtpZighYSlyZXR1cm57cGF0aDpcIlwiLG5vZGU6bnVsbH07Yj1PYmplY3QuYXNzaWduKHt5YzohMCx1YzowfSxiKTtpZig4PGIudWMpdGhyb3cgbmV3IE4oMzIpO2E9YS5zcGxpdChcIi9cIikuZmlsdGVyKGc9PiEhZyk7Zm9yKHZhciBjPWZiLGQ9XCIvXCIsZT0wO2U8YS5sZW5ndGg7ZSsrKXt2YXIgaD1lPT09YS5sZW5ndGgtMTtpZihoJiZiLnBhcmVudClicmVhaztjPWNiKGMsYVtlXSk7ZD1NKGQrXCIvXCIrYVtlXSk7Yy5iYyYmKCFofHxoJiZiLnljKSYmKGM9Yy5iYy5yb290KTtpZighaHx8Yi4kYilmb3IoaD0wOzQwOTYwPT09KGMubW9kZSY2MTQ0MCk7KWlmKGM9a2IoZCksZD1QYShMYShkKSxjKSxjPVIoZCx7dWM6Yi51YysxfSkubm9kZSw0MDxoKyspdGhyb3cgbmV3IE4oMzIpO31yZXR1cm57cGF0aDpkLG5vZGU6Y319XG5mdW5jdGlvbiBsYihhKXtmb3IodmFyIGI7Oyl7aWYoYT09PWEucGFyZW50KXJldHVybiBhPWEuV2IuQmMsYj9cIi9cIiE9PWFbYS5sZW5ndGgtMV0/YCR7YX0vJHtifWA6YStiOmE7Yj1iP2Ake2EubmFtZX0vJHtifWA6YS5uYW1lO2E9YS5wYXJlbnR9fWZ1bmN0aW9uIG1iKGEsYil7Zm9yKHZhciBjPTAsZD0wO2Q8Yi5sZW5ndGg7ZCsrKWM9KGM8PDUpLWMrYi5jaGFyQ29kZUF0KGQpfDA7cmV0dXJuKGErYz4+PjApJVEubGVuZ3RofWZ1bmN0aW9uIG5iKGEpe3ZhciBiPW1iKGEucGFyZW50LmlkLGEubmFtZSk7aWYoUVtiXT09PWEpUVtiXT1hLmNjO2Vsc2UgZm9yKGI9UVtiXTtiOyl7aWYoYi5jYz09PWEpe2IuY2M9YS5jYzticmVha31iPWIuY2N9fVxuZnVuY3Rpb24gY2IoYSxiKXt2YXIgYztpZihjPShjPW9iKGEsXCJ4XCIpKT9jOmEuRWIuZWM/MDoyKXRocm93IG5ldyBOKGMsYSk7Zm9yKGM9UVttYihhLmlkLGIpXTtjO2M9Yy5jYyl7dmFyIGQ9Yy5uYW1lO2lmKGMucGFyZW50LmlkPT09YS5pZCYmZD09PWIpcmV0dXJuIGN9cmV0dXJuIGEuRWIuZWMoYSxiKX1mdW5jdGlvbiBhYihhLGIsYyxkKXthPW5ldyBwYihhLGIsYyxkKTtiPW1iKGEucGFyZW50LmlkLGEubmFtZSk7YS5jYz1RW2JdO3JldHVybiBRW2JdPWF9ZnVuY3Rpb24gUChhKXtyZXR1cm4gMTYzODQ9PT0oYSY2MTQ0MCl9ZnVuY3Rpb24gcWIoYSl7dmFyIGI9W1wiclwiLFwid1wiLFwicndcIl1bYSYzXTthJjUxMiYmKGIrPVwid1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIG9iKGEsYil7aWYoamIpcmV0dXJuIDA7aWYoIWIuaW5jbHVkZXMoXCJyXCIpfHxhLm1vZGUmMjkyKXtpZihiLmluY2x1ZGVzKFwid1wiKSYmIShhLm1vZGUmMTQ2KXx8Yi5pbmNsdWRlcyhcInhcIikmJiEoYS5tb2RlJjczKSlyZXR1cm4gMn1lbHNlIHJldHVybiAyO3JldHVybiAwfWZ1bmN0aW9uIHJiKGEsYil7dHJ5e3JldHVybiBjYihhLGIpLDIwfWNhdGNoKGMpe31yZXR1cm4gb2IoYSxcInd4XCIpfWZ1bmN0aW9uIHNiKGEsYixjKXt0cnl7dmFyIGQ9Y2IoYSxiKX1jYXRjaChlKXtyZXR1cm4gZS5RYn1pZihhPW9iKGEsXCJ3eFwiKSlyZXR1cm4gYTtpZihjKXtpZighUChkLm1vZGUpKXJldHVybiA1NDtpZihkPT09ZC5wYXJlbnR8fFwiL1wiPT09bGIoZCkpcmV0dXJuIDEwfWVsc2UgaWYoUChkLm1vZGUpKXJldHVybiAzMTtyZXR1cm4gMH1mdW5jdGlvbiB0Yigpe2Zvcih2YXIgYT0wOzQwOTY+PWE7YSsrKWlmKCFoYlthXSlyZXR1cm4gYTt0aHJvdyBuZXcgTigzMyk7fVxuZnVuY3Rpb24gUyhhKXthPWhiW2FdO2lmKCFhKXRocm93IG5ldyBOKDgpO3JldHVybiBhfWZ1bmN0aW9uIHViKGEsYj0tMSl7dmJ8fCh2Yj1mdW5jdGlvbigpe3RoaXMuamM9e319LHZiLnByb3RvdHlwZT17fSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh2Yi5wcm90b3R5cGUse29iamVjdDp7Z2V0KCl7cmV0dXJuIHRoaXMubm9kZX0sc2V0KGMpe3RoaXMubm9kZT1jfX0sZmxhZ3M6e2dldCgpe3JldHVybiB0aGlzLmpjLmZsYWdzfSxzZXQoYyl7dGhpcy5qYy5mbGFncz1jfX0scG9zaXRpb246e2dldCgpe3JldHVybiB0aGlzLmpjLnBvc2l0aW9ufSxzZXQoYyl7dGhpcy5qYy5wb3NpdGlvbj1jfX19KSk7YT1PYmplY3QuYXNzaWduKG5ldyB2YixhKTstMT09YiYmKGI9dGIoKSk7YS5ZYj1iO3JldHVybiBoYltiXT1hfXZhciAkYT17b3BlbihhKXthLk9iPWdiW2Eubm9kZS5oY10uT2I7YS5PYi5vcGVuJiZhLk9iLm9wZW4oYSl9LGFjKCl7dGhyb3cgbmV3IE4oNzApO319O1xuZnVuY3Rpb24gVmEoYSxiKXtnYlthXT17T2I6Yn19ZnVuY3Rpb24gd2IoYSxiKXt2YXIgYz1cIi9cIj09PWIsZD0hYjtpZihjJiZmYil0aHJvdyBuZXcgTigxMCk7aWYoIWMmJiFkKXt2YXIgZT1SKGIse3ljOiExfSk7Yj1lLnBhdGg7ZT1lLm5vZGU7aWYoZS5iYyl0aHJvdyBuZXcgTigxMCk7aWYoIVAoZS5tb2RlKSl0aHJvdyBuZXcgTig1NCk7fWI9e3R5cGU6YSxkZDp7fSxCYzpiLE5jOltdfTthPWEuV2IoYik7YS5XYj1iO2Iucm9vdD1hO2M/ZmI9YTplJiYoZS5iYz1iLGUuV2ImJmUuV2IuTmMucHVzaChiKSl9ZnVuY3Rpb24geGIoYSxiLGMpe3ZhciBkPVIoYSx7cGFyZW50OiEwfSkubm9kZTthPU1hKGEpO2lmKCFhfHxcIi5cIj09PWF8fFwiLi5cIj09PWEpdGhyb3cgbmV3IE4oMjgpO3ZhciBlPXJiKGQsYSk7aWYoZSl0aHJvdyBuZXcgTihlKTtpZighZC5FYi5sYyl0aHJvdyBuZXcgTig2Myk7cmV0dXJuIGQuRWIubGMoZCxhLGIsYyl9XG5mdW5jdGlvbiBUKGEsYil7cmV0dXJuIHhiKGEsKHZvaWQgMCE9PWI/Yjo1MTEpJjEwMjN8MTYzODQsMCl9ZnVuY3Rpb24geWIoYSxiLGMpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBjJiYoYz1iLGI9NDM4KTt4YihhLGJ8ODE5MixjKX1mdW5jdGlvbiB6YihhLGIpe2lmKCFQYShhKSl0aHJvdyBuZXcgTig0NCk7dmFyIGM9UihiLHtwYXJlbnQ6ITB9KS5ub2RlO2lmKCFjKXRocm93IG5ldyBOKDQ0KTtiPU1hKGIpO3ZhciBkPXJiKGMsYik7aWYoZCl0aHJvdyBuZXcgTihkKTtpZighYy5FYi5wYyl0aHJvdyBuZXcgTig2Myk7Yy5FYi5wYyhjLGIsYSl9ZnVuY3Rpb24gQWIoYSl7dmFyIGI9UihhLHtwYXJlbnQ6ITB9KS5ub2RlO2E9TWEoYSk7dmFyIGM9Y2IoYixhKSxkPXNiKGIsYSwhMCk7aWYoZCl0aHJvdyBuZXcgTihkKTtpZighYi5FYi5vYyl0aHJvdyBuZXcgTig2Myk7aWYoYy5iYyl0aHJvdyBuZXcgTigxMCk7Yi5FYi5vYyhiLGEpO25iKGMpfVxuZnVuY3Rpb24ga2IoYSl7YT1SKGEpLm5vZGU7aWYoIWEpdGhyb3cgbmV3IE4oNDQpO2lmKCFhLkViLmljKXRocm93IG5ldyBOKDI4KTtyZXR1cm4gUGEobGIoYS5wYXJlbnQpLGEuRWIuaWMoYSkpfWZ1bmN0aW9uIEJiKGEsYil7YT1SKGEseyRiOiFifSkubm9kZTtpZighYSl0aHJvdyBuZXcgTig0NCk7aWYoIWEuRWIuVmIpdGhyb3cgbmV3IE4oNjMpO3JldHVybiBhLkViLlZiKGEpfWZ1bmN0aW9uIENiKGEpe3JldHVybiBCYihhLCEwKX1mdW5jdGlvbiBEYihhLGIpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/UihhLHskYjohMH0pLm5vZGU6YTtpZighYS5FYi5TYil0aHJvdyBuZXcgTig2Myk7YS5FYi5TYihhLHttb2RlOmImNDA5NXxhLm1vZGUmLTQwOTYsdGltZXN0YW1wOkRhdGUubm93KCl9KX1cbmZ1bmN0aW9uIEViKGEsYil7aWYoMD5iKXRocm93IG5ldyBOKDI4KTthPVwic3RyaW5nXCI9PXR5cGVvZiBhP1IoYSx7JGI6ITB9KS5ub2RlOmE7aWYoIWEuRWIuU2IpdGhyb3cgbmV3IE4oNjMpO2lmKFAoYS5tb2RlKSl0aHJvdyBuZXcgTigzMSk7aWYoMzI3NjghPT0oYS5tb2RlJjYxNDQwKSl0aHJvdyBuZXcgTigyOCk7dmFyIGM9b2IoYSxcIndcIik7aWYoYyl0aHJvdyBuZXcgTihjKTthLkViLlNiKGEse3NpemU6Yix0aW1lc3RhbXA6RGF0ZS5ub3coKX0pfVxuZnVuY3Rpb24gRmIoYSxiLGMpe2lmKFwiXCI9PT1hKXRocm93IG5ldyBOKDQ0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7dmFyIGQ9e3I6MCxcInIrXCI6Mix3OjU3NyxcIncrXCI6NTc4LGE6MTA4OSxcImErXCI6MTA5MH1bYl07aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGQpdGhyb3cgRXJyb3IoYFVua25vd24gZmlsZSBvcGVuIG1vZGU6ICR7Yn1gKTtiPWR9Yz1iJjY0PyhcInVuZGVmaW5lZFwiPT10eXBlb2YgYz80Mzg6YykmNDA5NXwzMjc2ODowO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXZhciBlPWE7ZWxzZXthPU0oYSk7dHJ5e2U9UihhLHskYjohKGImMTMxMDcyKX0pLm5vZGV9Y2F0Y2goaCl7fX1kPSExO2lmKGImNjQpaWYoZSl7aWYoYiYxMjgpdGhyb3cgbmV3IE4oMjApO31lbHNlIGU9eGIoYSxjLDApLGQ9ITA7aWYoIWUpdGhyb3cgbmV3IE4oNDQpOzgxOTI9PT0oZS5tb2RlJjYxNDQwKSYmKGImPS01MTMpO2lmKGImNjU1MzYmJiFQKGUubW9kZSkpdGhyb3cgbmV3IE4oNTQpO2lmKCFkJiYoYz1cbmU/NDA5NjA9PT0oZS5tb2RlJjYxNDQwKT8zMjpQKGUubW9kZSkmJihcInJcIiE9PXFiKGIpfHxiJjUxMik/MzE6b2IoZSxxYihiKSk6NDQpKXRocm93IG5ldyBOKGMpO2ImNTEyJiYhZCYmRWIoZSwwKTtiJj0tMTMxNzEzO2U9dWIoe25vZGU6ZSxwYXRoOmxiKGUpLGZsYWdzOmIsc2Vla2FibGU6ITAscG9zaXRpb246MCxPYjplLk9iLFRjOltdLGVycm9yOiExfSk7ZS5PYi5vcGVuJiZlLk9iLm9wZW4oZSk7IWYubG9nUmVhZEZpbGVzfHxiJjF8fChHYnx8KEdiPXt9KSxhIGluIEdifHwoR2JbYV09MSkpO3JldHVybiBlfWZ1bmN0aW9uIEhiKGEsYixjKXtpZihudWxsPT09YS5ZYil0aHJvdyBuZXcgTig4KTtpZighYS5zZWVrYWJsZXx8IWEuT2IuYWMpdGhyb3cgbmV3IE4oNzApO2lmKDAhPWMmJjEhPWMmJjIhPWMpdGhyb3cgbmV3IE4oMjgpO2EucG9zaXRpb249YS5PYi5hYyhhLGIsYyk7YS5UYz1bXX1cbmZ1bmN0aW9uIEliKCl7Tnx8KE49ZnVuY3Rpb24oYSxiKXt0aGlzLm5hbWU9XCJFcnJub0Vycm9yXCI7dGhpcy5ub2RlPWI7dGhpcy5SYz1mdW5jdGlvbihjKXt0aGlzLlFiPWN9O3RoaXMuUmMoYSk7dGhpcy5tZXNzYWdlPVwiRlMgZXJyb3JcIn0sTi5wcm90b3R5cGU9RXJyb3IoKSxOLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1OLFs0NF0uZm9yRWFjaChhPT57YmJbYV09bmV3IE4oYSk7YmJbYV0uc3RhY2s9XCI8Z2VuZXJpYyBlcnJvciwgbm8gc3RhY2s+XCJ9KSl9dmFyIEpiO1xuZnVuY3Rpb24gS2IoYSxiLGMpe2E9TShcIi9kZXYvXCIrYSk7dmFyIGQ9ZWIoISFiLCEhYyk7TGJ8fChMYj02NCk7dmFyIGU9TGIrKzw8OHwwO1ZhKGUse29wZW4oaCl7aC5zZWVrYWJsZT0hMX0sY2xvc2UoKXtjJiZjLmJ1ZmZlciYmYy5idWZmZXIubGVuZ3RoJiZjKDEwKX0scmVhZChoLGcsbixrKXtmb3IodmFyIGw9MCxxPTA7cTxrO3ErKyl7dHJ5e3ZhciBtPWIoKX1jYXRjaChyKXt0aHJvdyBuZXcgTigyOSk7fWlmKHZvaWQgMD09PW0mJjA9PT1sKXRocm93IG5ldyBOKDYpO2lmKG51bGw9PT1tfHx2b2lkIDA9PT1tKWJyZWFrO2wrKztnW24rcV09bX1sJiYoaC5ub2RlLnRpbWVzdGFtcD1EYXRlLm5vdygpKTtyZXR1cm4gbH0sd3JpdGUoaCxnLG4sayl7Zm9yKHZhciBsPTA7bDxrO2wrKyl0cnl7YyhnW24rbF0pfWNhdGNoKHEpe3Rocm93IG5ldyBOKDI5KTt9ayYmKGgubm9kZS50aW1lc3RhbXA9RGF0ZS5ub3coKSk7cmV0dXJuIGx9fSk7eWIoYSxkLGUpfXZhciBMYixVPXt9LHZiLEdiO1xuZnVuY3Rpb24gTWIoYSxiLGMpe2lmKFwiL1wiPT09Yi5jaGFyQXQoMCkpcmV0dXJuIGI7YT0tMTAwPT09YT9cIi9cIjpTKGEpLnBhdGg7aWYoMD09Yi5sZW5ndGgpe2lmKCFjKXRocm93IG5ldyBOKDQ0KTtyZXR1cm4gYX1yZXR1cm4gTShhK1wiL1wiK2IpfVxuZnVuY3Rpb24gTmIoYSxiLGMpe3RyeXt2YXIgZD1hKGIpfWNhdGNoKGgpe2lmKGgmJmgubm9kZSYmTShiKSE9PU0obGIoaC5ub2RlKSkpcmV0dXJuLTU0O3Rocm93IGg7fXpbYz4+Ml09ZC5KYzt6W2MrND4+Ml09ZC5tb2RlO0JbYys4Pj4yXT1kLlBjO3pbYysxMj4+Ml09ZC51aWQ7eltjKzE2Pj4yXT1kLk1jO3pbYysyMD4+Ml09ZC5oYztGPVtkLnNpemU+Pj4wLChEPWQuc2l6ZSwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgoRC0rKH5+RD4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldO3pbYysyND4+Ml09RlswXTt6W2MrMjg+PjJdPUZbMV07eltjKzMyPj4yXT00MDk2O3pbYyszNj4+Ml09ZC5IYzthPWQuRmMuZ2V0VGltZSgpO2I9ZC5PYy5nZXRUaW1lKCk7dmFyIGU9ZC5JYy5nZXRUaW1lKCk7Rj1bTWF0aC5mbG9vcihhLzFFMyk+Pj4wLChEPU1hdGguZmxvb3IoYS8xRTMpLDE8PStNYXRoLmFicyhEKT8wPEQ/K01hdGguZmxvb3IoRC9cbjQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKEQtKyh+fkQ+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXTt6W2MrNDA+PjJdPUZbMF07eltjKzQ0Pj4yXT1GWzFdO0JbYys0OD4+Ml09YSUxRTMqMUUzO0Y9W01hdGguZmxvb3IoYi8xRTMpPj4+MCwoRD1NYXRoLmZsb29yKGIvMUUzKSwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgoRC0rKH5+RD4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldO3pbYys1Nj4+Ml09RlswXTt6W2MrNjA+PjJdPUZbMV07QltjKzY0Pj4yXT1iJTFFMyoxRTM7Rj1bTWF0aC5mbG9vcihlLzFFMyk+Pj4wLChEPU1hdGguZmxvb3IoZS8xRTMpLDE8PStNYXRoLmFicyhEKT8wPEQ/K01hdGguZmxvb3IoRC80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKChELSsofn5EPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV07eltjKzcyPj4yXT1GWzBdO3pbYys3Nj4+Ml09RlsxXTtCW2MrODA+PjJdPVxuZSUxRTMqMUUzO0Y9W2QuQWM+Pj4wLChEPWQuQWMsMTw9K01hdGguYWJzKEQpPzA8RD8rTWF0aC5mbG9vcihELzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKEQtKyh+fkQ+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXTt6W2MrODg+PjJdPUZbMF07eltjKzkyPj4yXT1GWzFdO3JldHVybiAwfXZhciBPYj12b2lkIDA7ZnVuY3Rpb24gUGIoKXt2YXIgYT16W09iPj4yXTtPYis9NDtyZXR1cm4gYX1cbnZhciBRYj0oYSxiKT0+YisyMDk3MTUyPj4+MDw0MTk0MzA1LSEhYT8oYT4+PjApKzQyOTQ5NjcyOTYqYjpOYU4sUmI9WzAsMzEsNjAsOTEsMTIxLDE1MiwxODIsMjEzLDI0NCwyNzQsMzA1LDMzNV0sU2I9WzAsMzEsNTksOTAsMTIwLDE1MSwxODEsMjEyLDI0MywyNzMsMzA0LDMzNF0sVWI9YT0+e3ZhciBiPVJhKGEpKzEsYz1UYihiKTtjJiZTYShhLHksYyxiKTtyZXR1cm4gY30sVmI9e30sWGI9KCk9PntpZighV2Ipe3ZhciBhPXtVU0VSOlwid2ViX3VzZXJcIixMT0dOQU1FOlwid2ViX3VzZXJcIixQQVRIOlwiL1wiLFBXRDpcIi9cIixIT01FOlwiL2hvbWUvd2ViX3VzZXJcIixMQU5HOihcIm9iamVjdFwiPT10eXBlb2YgbmF2aWdhdG9yJiZuYXZpZ2F0b3IubGFuZ3VhZ2VzJiZuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdfHxcIkNcIikucmVwbGFjZShcIi1cIixcIl9cIikrXCIuVVRGLThcIixfOmRhfHxcIi4vdGhpcy5wcm9ncmFtXCJ9LGI7Zm9yKGIgaW4gVmIpdm9pZCAwPT09VmJbYl0/ZGVsZXRlIGFbYl06YVtiXT1WYltiXTtcbnZhciBjPVtdO2ZvcihiIGluIGEpYy5wdXNoKGAke2J9PSR7YVtiXX1gKTtXYj1jfXJldHVybiBXYn0sV2I7ZnVuY3Rpb24gWWIoKXt9ZnVuY3Rpb24gWmIoKXt9ZnVuY3Rpb24gJGIoKXt9ZnVuY3Rpb24gYWMoKXt9ZnVuY3Rpb24gYmMoKXt9ZnVuY3Rpb24gY2MoKXt9ZnVuY3Rpb24gZGMoKXt9ZnVuY3Rpb24gZWMoKXt9ZnVuY3Rpb24gZmMoKXt9ZnVuY3Rpb24gZ2MoKXt9ZnVuY3Rpb24gaGMoKXt9ZnVuY3Rpb24gaWMoKXt9ZnVuY3Rpb24gamMoKXt9ZnVuY3Rpb24ga2MoKXt9ZnVuY3Rpb24gbGMoKXt9ZnVuY3Rpb24gbWMoKXt9ZnVuY3Rpb24gbmMoKXt9ZnVuY3Rpb24gb2MoKXt9ZnVuY3Rpb24gcGMoKXt9ZnVuY3Rpb24gcWMoKXt9ZnVuY3Rpb24gcmMoKXt9ZnVuY3Rpb24gc2MoKXt9ZnVuY3Rpb24gdGMoKXt9ZnVuY3Rpb24gdWMoKXt9ZnVuY3Rpb24gdmMoKXt9ZnVuY3Rpb24gd2MoKXt9ZnVuY3Rpb24geGMoKXt9ZnVuY3Rpb24geWMoKXt9ZnVuY3Rpb24gemMoKXt9XG5mdW5jdGlvbiBBYygpe31mdW5jdGlvbiBCYygpe31mdW5jdGlvbiBDYygpe31mdW5jdGlvbiBEYygpe31mdW5jdGlvbiBFYygpe31mdW5jdGlvbiBGYygpe31mdW5jdGlvbiBHYygpe31mdW5jdGlvbiBIYygpe31mdW5jdGlvbiBJYygpe31mdW5jdGlvbiBKYygpe31mdW5jdGlvbiBLYygpe312YXIgTGM9YT0+e25hPWE7aWYoIShub0V4aXRSdW50aW1lfHwwPHdhKSl7aWYoZi5vbkV4aXQpZi5vbkV4aXQoYSk7dj0hMH1lYShhLG5ldyBIYShhKSl9LE1jPWE9PnthIGluc3RhbmNlb2YgSGF8fFwidW53aW5kXCI9PWF8fGVhKDEsYSl9LE5jPWE9Pnt0cnl7YSgpfWNhdGNoKGIpe3UoYil9fTtcbmZ1bmN0aW9uIE9jKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSkoZnVuY3Rpb24oZCl7dmFyIGU9YVtkXTtiW2RdPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZnVuY3Rpb24oKXtQYy5wdXNoKGQpO3RyeXtyZXR1cm4gZS5hcHBseShudWxsLGFyZ3VtZW50cyl9ZmluYWxseXt2fHwoUGMucG9wKCk9PT1kfHx1KCksViYmMT09PVgmJjA9PT1QYy5sZW5ndGgmJihYPTAsTmMoUWMpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWJlcnMmJkZpYmVycy5lZCgpKSl9fTplfSkoYyk7cmV0dXJuIGJ9dmFyIFg9MCxWPW51bGwsUmM9MCxQYz1bXSxTYz17fSxUYz17fSxVYz0wLFZjPW51bGwsV2M9W107ZnVuY3Rpb24gWGMoKXtyZXR1cm4gbmV3IFByb21pc2UoKGEsYik9PntWYz17cmVzb2x2ZTphLHJlamVjdDpifX0pfVxuZnVuY3Rpb24gWWMoKXt2YXIgYT1UYigxNjM5NiksYj1hKzEyO0JbYT4+Ml09YjtCW2ErND4+Ml09YisxNjM4NDtiPVBjWzBdO3ZhciBjPVNjW2JdO3ZvaWQgMD09PWMmJihjPVVjKyssU2NbYl09YyxUY1tjXT1iKTt6W2ErOD4+Ml09YztyZXR1cm4gYX1cbmZ1bmN0aW9uIFpjKGEpe2lmKCF2KXtpZigwPT09WCl7dmFyIGI9ITEsYz0hMTthKChkPTApPT57aWYoIXYmJihSYz1kLGI9ITAsYykpe1g9MjtOYygoKT0+JGMoVikpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBCcm93c2VyJiZCcm93c2VyLnNjLkxjJiZCcm93c2VyLnNjLnJlc3VtZSgpO2Q9ITE7dHJ5e3ZhciBlPSgwLFlbVGNbeltWKzg+PjJdXV0pKCl9Y2F0Y2gobil7ZT1uLGQ9ITB9dmFyIGg9ITE7aWYoIVYpe3ZhciBnPVZjO2cmJihWYz1udWxsLChkP2cucmVqZWN0OmcucmVzb2x2ZSkoZSksaD0hMCl9aWYoZCYmIWgpdGhyb3cgZTt9fSk7Yz0hMDtifHwoWD0xLFY9WWMoKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgQnJvd3NlciYmQnJvd3Nlci5zYy5MYyYmQnJvd3Nlci5zYy5wYXVzZSgpLE5jKCgpPT5hZChWKSkpfWVsc2UgMj09PVg/KFg9MCxOYyhiZCksY2QoViksVj1udWxsLFdjLmZvckVhY2goZD0+e2lmKCF2KXRyeXtpZihkKCksIShub0V4aXRSdW50aW1lfHwwPHdhKSl0cnl7bmE9XG5kPW5hLExjKGQpfWNhdGNoKGUpe01jKGUpfX1jYXRjaChlKXtNYyhlKX19KSk6dShgaW52YWxpZCBzdGF0ZTogJHtYfWApO3JldHVybiBSY319ZnVuY3Rpb24gZGQoYSl7cmV0dXJuIFpjKGI9PnthKCkudGhlbihiKX0pfVxudmFyIGVkPXt9LFo9KGEsYixjLGQsZSk9PntmdW5jdGlvbiBoKG0pey0td2E7MCE9PWsmJmZkKGspO3JldHVyblwic3RyaW5nXCI9PT1iP20/Syh5LG0pOlwiXCI6XCJib29sZWFuXCI9PT1iPyEhbTptfXZhciBnPXtzdHJpbmc6bT0+e3ZhciByPTA7aWYobnVsbCE9PW0mJnZvaWQgMCE9PW0mJjAhPT1tKXtyPVJhKG0pKzE7dmFyIHg9Z2Qocik7U2EobSx5LHgscik7cj14fXJldHVybiByfSxhcnJheTptPT57dmFyIHI9Z2QobS5sZW5ndGgpO3cuc2V0KG0scik7cmV0dXJuIHJ9fTthPWZbXCJfXCIrYV07dmFyIG49W10saz0wO2lmKGQpZm9yKHZhciBsPTA7bDxkLmxlbmd0aDtsKyspe3ZhciBxPWdbY1tsXV07cT8oMD09PWsmJihrPWhkKCkpLG5bbF09cShkW2xdKSk6bltsXT1kW2xdfWM9VjtkPWEuYXBwbHkobnVsbCxuKTtlPWUmJmUuYXN5bmM7d2ErPTE7aWYoViE9YylyZXR1cm4gWGMoKS50aGVuKGgpO2Q9aChkKTtyZXR1cm4gZT9Qcm9taXNlLnJlc29sdmUoZCk6ZH07XG5mdW5jdGlvbiBwYihhLGIsYyxkKXthfHwoYT10aGlzKTt0aGlzLnBhcmVudD1hO3RoaXMuV2I9YS5XYjt0aGlzLmJjPW51bGw7dGhpcy5pZD1pYisrO3RoaXMubmFtZT1iO3RoaXMubW9kZT1jO3RoaXMuRWI9e307dGhpcy5PYj17fTt0aGlzLmhjPWR9T2JqZWN0LmRlZmluZVByb3BlcnRpZXMocGIucHJvdG90eXBlLHtyZWFkOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gMzY1PT09KHRoaXMubW9kZSYzNjUpfSxzZXQ6ZnVuY3Rpb24oYSl7YT90aGlzLm1vZGV8PTM2NTp0aGlzLm1vZGUmPS0zNjZ9fSx3cml0ZTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDE0Nj09PSh0aGlzLm1vZGUmMTQ2KX0sc2V0OmZ1bmN0aW9uKGEpe2E/dGhpcy5tb2RlfD0xNDY6dGhpcy5tb2RlJj0tMTQ3fX19KTtJYigpO1E9QXJyYXkoNDA5Nik7d2IoTyxcIi9cIik7VChcIi90bXBcIik7VChcIi9ob21lXCIpO1QoXCIvaG9tZS93ZWJfdXNlclwiKTtcbihmdW5jdGlvbigpe1QoXCIvZGV2XCIpO1ZhKDI1OSx7cmVhZDooKT0+MCx3cml0ZTooZCxlLGgsZyk9Pmd9KTt5YihcIi9kZXYvbnVsbFwiLDI1OSk7VWEoMTI4MCxYYSk7VWEoMTUzNixZYSk7eWIoXCIvZGV2L3R0eVwiLDEyODApO3liKFwiL2Rldi90dHkxXCIsMTUzNik7dmFyIGE9bmV3IFVpbnQ4QXJyYXkoMTAyNCksYj0wLGM9KCk9PnswPT09YiYmKGI9T2EoYSkuYnl0ZUxlbmd0aCk7cmV0dXJuIGFbLS1iXX07S2IoXCJyYW5kb21cIixjKTtLYihcInVyYW5kb21cIixjKTtUKFwiL2Rldi9zaG1cIik7VChcIi9kZXYvc2htL3RtcFwiKX0pKCk7XG4oZnVuY3Rpb24oKXtUKFwiL3Byb2NcIik7dmFyIGE9VChcIi9wcm9jL3NlbGZcIik7VChcIi9wcm9jL3NlbGYvZmRcIik7d2Ioe1diKCl7dmFyIGI9YWIoYSxcImZkXCIsMTY4OTUsNzMpO2IuRWI9e2VjKGMsZCl7dmFyIGU9UygrZCk7Yz17cGFyZW50Om51bGwsV2I6e0JjOlwiZmFrZVwifSxFYjp7aWM6KCk9PmUucGF0aH19O3JldHVybiBjLnBhcmVudD1jfX07cmV0dXJuIGJ9fSxcIi9wcm9jL3NlbGYvZmRcIil9KSgpO1xuKGZ1bmN0aW9uKCl7Y29uc3QgYT1uZXcgTWFwO2Yuc2V0QXV0aG9yaXplcj1mdW5jdGlvbihiLGMsZCl7Yz9hLnNldChiLHtmOmMsdmM6ZH0pOmEuZGVsZXRlKGIpO3JldHVybiBaKFwic2V0X2F1dGhvcml6ZXJcIixcIm51bWJlclwiLFtcIm51bWJlclwiXSxbYl0pfTtZYj1mdW5jdGlvbihiLGMsZCxlLGgsZyl7aWYoYS5oYXMoYikpe2NvbnN0IHtmOm4sdmM6a309YS5nZXQoYik7cmV0dXJuIG4oayxjLGQ/ZD9LKHksZCk6XCJcIjpudWxsLGU/ZT9LKHksZSk6XCJcIjpudWxsLGg/aD9LKHksaCk6XCJcIjpudWxsLGc/Zz9LKHksZyk6XCJcIjpudWxsKX1yZXR1cm4gMH19KSgpO1xuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShkLGUpe2NvbnN0IGg9W107Zm9yKGxldCBnPTA7MCE9ZFtlK2ddOysrZyl7aWYoMUUzPGcpdGhyb3cgRXJyb3IoXCJDLXN0cmluZyBuZXZlciB0ZXJtaW5hdGVkIGFmdGVyIDFrIGNoYXJhY3RlcnNcIik7aC5wdXNoKGRbZStnXSl9cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uaCl9Y29uc3QgYj1uZXcgTWFwLGM9bmV3IE1hcDtmLmNyZWF0ZUZ1bmN0aW9uPWZ1bmN0aW9uKGQsZSxoLGcsbixrKXtjb25zdCBsPWIuc2l6ZTtiLnNldChsLHtmOmssWmI6bn0pO3JldHVybiBaKFwiY3JlYXRlX2Z1bmN0aW9uXCIsXCJudW1iZXJcIixcIm51bWJlciBzdHJpbmcgbnVtYmVyIG51bWJlciBudW1iZXIgbnVtYmVyXCIuc3BsaXQoXCIgXCIpLFtkLGUsaCxnLGwsMF0pfTtmLmNyZWF0ZUFnZ3JlZ2F0ZT1mdW5jdGlvbihkLGUsaCxnLG4sayxsKXtjb25zdCBxPWIuc2l6ZTtiLnNldChxLHtzdGVwOmssS2M6bCxaYjpufSk7cmV0dXJuIFooXCJjcmVhdGVfZnVuY3Rpb25cIixcblwibnVtYmVyXCIsXCJudW1iZXIgc3RyaW5nIG51bWJlciBudW1iZXIgbnVtYmVyIG51bWJlclwiLnNwbGl0KFwiIFwiKSxbZCxlLGgsZyxxLDFdKX07Zi5nZXRGdW5jdGlvblVzZXJEYXRhPWZ1bmN0aW9uKGQpe3JldHVybiBjLmdldChkKX07Zi51cGRhdGVIb29rPWZ1bmN0aW9uKGQsZSl7Y29uc3QgaD1iLnNpemU7Yi5zZXQoaCxlKTtyZXR1cm4gWihcInVwZGF0ZV9ob29rXCIsXCJ2b2lkXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIl0sW2QsaF0pfTskYj1mdW5jdGlvbihkLGUsaCxnKXtkPWIuZ2V0KGQpO2Muc2V0KGUsZC5aYik7ZC5mKGUsbmV3IFVpbnQzMkFycmF5KHkuYnVmZmVyLGcsaCkpO2MuZGVsZXRlKGUpfTtiYz1mdW5jdGlvbihkLGUsaCxnKXtkPWIuZ2V0KGQpO2Muc2V0KGUsZC5aYik7ZC5zdGVwKGUsbmV3IFVpbnQzMkFycmF5KHkuYnVmZmVyLGcsaCkpO2MuZGVsZXRlKGUpfTtaYj1mdW5jdGlvbihkLGUpe2Q9Yi5nZXQoZCk7Yy5zZXQoZSxkLlpiKTtkLktjKGUpO2MuZGVsZXRlKGUpfTtjYz1cbmZ1bmN0aW9uKGQsZSxoLGcsbixrKXtkPWIuZ2V0KGQpO2NvbnN0IGw9eTtuPUJpZ0ludChrKTw8MzJufEJpZ0ludChuKSY0Mjk0OTY3Mjk1bjtkKGUsYShsLGgpLGEobCxnKSxuKX19KSgpOyhmdW5jdGlvbigpe2NvbnN0IGE9bmV3IE1hcDtmLnByb2dyZXNzSGFuZGxlcj1mdW5jdGlvbihiLGMsZCxlKXtkP2Euc2V0KGIse2Y6ZCx2YzplfSk6YS5kZWxldGUoYik7cmV0dXJuIFooXCJwcm9ncmVzc19oYW5kbGVyXCIsbnVsbCxbXCJudW1iZXJcIixcIm51bWJlclwiXSxbYixjXSl9O2FjPWZ1bmN0aW9uKGIpe2lmKGEuaGFzKGIpKXtjb25zdCB7ZjpjLHZjOmR9PWEuZ2V0KGIpO3JldHVybiBjKGQpfXJldHVybiAwfX0pKCk7XG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGssbCl7Y29uc3QgcT1gZ2V0JHtrfWAsbT1gc2V0JHtrfWA7cmV0dXJuIG5ldyBQcm94eShuZXcgRGF0YVZpZXcoeS5idWZmZXIsbCxcIkludDMyXCI9PT1rPzQ6OCkse2dldChyLHgpe2lmKHg9PT1xKXJldHVybiBmdW5jdGlvbihBLEcpe2lmKCFHKXRocm93IEVycm9yKFwibXVzdCBiZSBsaXR0bGUgZW5kaWFuXCIpO3JldHVybiByW3hdKEEsRyl9O2lmKHg9PT1tKXJldHVybiBmdW5jdGlvbihBLEcsRSl7aWYoIUUpdGhyb3cgRXJyb3IoXCJtdXN0IGJlIGxpdHRsZSBlbmRpYW5cIik7cmV0dXJuIHJbeF0oQSxHLEUpfTtpZihcInN0cmluZ1wiPT09dHlwZW9mIHgmJngubWF0Y2goL14oZ2V0KXwoc2V0KS8pKXRocm93IEVycm9yKFwiaW52YWxpZCB0eXBlXCIpO3JldHVybiByW3hdfX0pfWNvbnN0IGI9XCJvYmplY3RcIj09PXR5cGVvZiBlZCxjPW5ldyBNYXAsZD1uZXcgTWFwLGU9bmV3IE1hcCxoPWI/bmV3IFNldDpudWxsLGc9Yj9uZXcgU2V0Om51bGwsbj1uZXcgTWFwO1xudGM9ZnVuY3Rpb24oayxsLHEsbSl7bi5zZXQoaz9LKHksayk6XCJcIix7c2l6ZTpsLGZjOkFycmF5LmZyb20obmV3IFVpbnQzMkFycmF5KHkuYnVmZmVyLG0scSkpfSl9O2YuY3JlYXRlTW9kdWxlPWZ1bmN0aW9uKGssbCxxLG0pe2ImJihxLmhhbmRsZUFzeW5jPWRkKTtjb25zdCByPWMuc2l6ZTtjLnNldChyLHttb2R1bGU6cSxaYjptfSk7bT0wO3EueENyZWF0ZSYmKG18PTEpO3EueENvbm5lY3QmJihtfD0yKTtxLnhCZXN0SW5kZXgmJihtfD00KTtxLnhEaXNjb25uZWN0JiYobXw9OCk7cS54RGVzdHJveSYmKG18PTE2KTtxLnhPcGVuJiYobXw9MzIpO3EueENsb3NlJiYobXw9NjQpO3EueEZpbHRlciYmKG18PTEyOCk7cS54TmV4dCYmKG18PTI1Nik7cS54RW9mJiYobXw9NTEyKTtxLnhDb2x1bW4mJihtfD0xMDI0KTtxLnhSb3dpZCYmKG18PTIwNDgpO3EueFVwZGF0ZSYmKG18PTQwOTYpO3EueEJlZ2luJiYobXw9ODE5Mik7cS54U3luYyYmKG18PTE2Mzg0KTtxLnhDb21taXQmJihtfD1cbjMyNzY4KTtxLnhSb2xsYmFjayYmKG18PTY1NTM2KTtxLnhGaW5kRnVuY3Rpb24mJihtfD0xMzEwNzIpO3EueFJlbmFtZSYmKG18PTI2MjE0NCk7cmV0dXJuIFooXCJjcmVhdGVfbW9kdWxlXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0sW2ssbCxyLG1dKX07amM9ZnVuY3Rpb24oayxsLHEsbSxyLHgpe2w9Yy5nZXQobCk7ZC5zZXQocixsKTtpZihiKXtoLmRlbGV0ZShyKTtmb3IoY29uc3QgQSBvZiBoKWQuZGVsZXRlKEEpfW09QXJyYXkuZnJvbShuZXcgVWludDMyQXJyYXkoeS5idWZmZXIsbSxxKSkubWFwKEE9PkE/Syh5LEEpOlwiXCIpO3JldHVybiBsLm1vZHVsZS54Q3JlYXRlKGssbC5aYixtLHIsYShcIkludDMyXCIseCkpfTtpYz1mdW5jdGlvbihrLGwscSxtLHIseCl7bD1jLmdldChsKTtkLnNldChyLGwpO2lmKGIpe2guZGVsZXRlKHIpO2Zvcihjb25zdCBBIG9mIGgpZC5kZWxldGUoQSl9bT1BcnJheS5mcm9tKG5ldyBVaW50MzJBcnJheSh5LmJ1ZmZlcixcbm0scSkpLm1hcChBPT5BP0soeSxBKTpcIlwiKTtyZXR1cm4gbC5tb2R1bGUueENvbm5lY3QoayxsLlpiLG0scixhKFwiSW50MzJcIix4KSl9O2VjPWZ1bmN0aW9uKGssbCl7dmFyIHE9ZC5nZXQoayksbT1uLmdldChcInNxbGl0ZTNfaW5kZXhfaW5mb1wiKS5mYztjb25zdCByPXt9O3IubkNvbnN0cmFpbnQ9SShsK21bMF0sXCJpMzJcIik7ci5hQ29uc3RyYWludD1bXTt2YXIgeD1JKGwrbVsxXSxcIipcIiksQT1uLmdldChcInNxbGl0ZTNfaW5kZXhfY29uc3RyYWludFwiKS5zaXplO2Zvcih2YXIgRz0wO0c8ci5uQ29uc3RyYWludDsrK0cpe3ZhciBFPXIuYUNvbnN0cmFpbnQsTD1FLnB1c2gsSD14K0cqQSxoYT1uLmdldChcInNxbGl0ZTNfaW5kZXhfY29uc3RyYWludFwiKS5mYyxXPXt9O1cuaUNvbHVtbj1JKEgraGFbMF0sXCJpMzJcIik7Vy5vcD1JKEgraGFbMV0sXCJpOFwiKTtXLnVzYWJsZT0hIUkoSCtoYVsyXSxcImk4XCIpO0wuY2FsbChFLFcpfXIubk9yZGVyQnk9SShsK21bMl0sXCJpMzJcIik7ci5hT3JkZXJCeT1cbltdO3g9SShsK21bM10sXCIqXCIpO0E9bi5nZXQoXCJzcWxpdGUzX2luZGV4X29yZGVyYnlcIikuc2l6ZTtmb3IoRz0wO0c8ci5uT3JkZXJCeTsrK0cpRT1yLmFPcmRlckJ5LEw9RS5wdXNoLEg9eCtHKkEsaGE9bi5nZXQoXCJzcWxpdGUzX2luZGV4X29yZGVyYnlcIikuZmMsVz17fSxXLmlDb2x1bW49SShIK2hhWzBdLFwiaTMyXCIpLFcuZGVzYz0hIUkoSCtoYVsxXSxcImk4XCIpLEwuY2FsbChFLFcpO3IuYUNvbnN0cmFpbnRVc2FnZT1bXTtmb3IoeD0wO3g8ci5uQ29uc3RyYWludDsrK3gpci5hQ29uc3RyYWludFVzYWdlLnB1c2goe2FyZ3ZJbmRleDowLG9taXQ6ITF9KTtyLmlkeE51bT1JKGwrbVs1XSxcImkzMlwiKTtyLmlkeFN0cj1udWxsO3Iub3JkZXJCeUNvbnN1bWVkPSEhSShsK21bOF0sXCJpOFwiKTtyLmVzdGltYXRlZENvc3Q9SShsK21bOV0sXCJkb3VibGVcIik7ci5lc3RpbWF0ZWRSb3dzPUkobCttWzEwXSxcImkzMlwiKTtyLmlkeEZsYWdzPUkobCttWzExXSxcImkzMlwiKTtyLmNvbFVzZWQ9SShsK21bMTJdLFxuXCJpMzJcIik7az1xLm1vZHVsZS54QmVzdEluZGV4KGsscik7cT1uLmdldChcInNxbGl0ZTNfaW5kZXhfaW5mb1wiKS5mYzttPUkobCtxWzRdLFwiKlwiKTt4PW4uZ2V0KFwic3FsaXRlM19pbmRleF9jb25zdHJhaW50X3VzYWdlXCIpLnNpemU7Zm9yKEw9MDtMPHIubkNvbnN0cmFpbnQ7KytMKUE9bStMKngsRT1yLmFDb25zdHJhaW50VXNhZ2VbTF0sSD1uLmdldChcInNxbGl0ZTNfaW5kZXhfY29uc3RyYWludF91c2FnZVwiKS5mYyxKKEErSFswXSxFLmFyZ3ZJbmRleCxcImkzMlwiKSxKKEErSFsxXSxFLm9taXQ/MTowLFwiaThcIik7SihsK3FbNV0sci5pZHhOdW0sXCJpMzJcIik7XCJzdHJpbmdcIj09PXR5cGVvZiByLmlkeFN0ciYmKG09UmEoci5pZHhTdHIpLHg9WihcInNxbGl0ZTNfbWFsbG9jXCIsXCJudW1iZXJcIixbXCJudW1iZXJcIl0sW20rMV0pLFNhKHIuaWR4U3RyLHkseCxtKzEpLEoobCtxWzZdLHgsXCIqXCIpLEoobCtxWzddLDEsXCJpMzJcIikpO0oobCtxWzhdLHIub3JkZXJCeUNvbnN1bWVkLFwiaTMyXCIpO0oobCtxWzldLFxuci5lc3RpbWF0ZWRDb3N0LFwiZG91YmxlXCIpO0oobCtxWzEwXSxyLmVzdGltYXRlZFJvd3MsXCJpMzJcIik7SihsK3FbMTFdLHIuaWR4RmxhZ3MsXCJpMzJcIik7cmV0dXJuIGt9O2xjPWZ1bmN0aW9uKGspe2NvbnN0IGw9ZC5nZXQoayk7Yj9oLmFkZChrKTpkLmRlbGV0ZShrKTtyZXR1cm4gbC5tb2R1bGUueERpc2Nvbm5lY3Qoayl9O2tjPWZ1bmN0aW9uKGspe2NvbnN0IGw9ZC5nZXQoayk7Yj9oLmFkZChrKTpkLmRlbGV0ZShrKTtyZXR1cm4gbC5tb2R1bGUueERlc3Ryb3koayl9O3BjPWZ1bmN0aW9uKGssbCl7Y29uc3QgcT1kLmdldChrKTtlLnNldChsLHEpO2lmKGIpe2cuZGVsZXRlKGwpO2Zvcihjb25zdCBtIG9mIGcpZS5kZWxldGUobSl9cmV0dXJuIHEubW9kdWxlLnhPcGVuKGssbCl9O2ZjPWZ1bmN0aW9uKGspe2NvbnN0IGw9ZS5nZXQoayk7Yj9nLmFkZChrKTplLmRlbGV0ZShrKTtyZXR1cm4gbC5tb2R1bGUueENsb3NlKGspfTttYz1mdW5jdGlvbihrKXtyZXR1cm4gZS5nZXQoaykubW9kdWxlLnhFb2Yoayk/XG4xOjB9O25jPWZ1bmN0aW9uKGssbCxxLG0scil7Y29uc3QgeD1lLmdldChrKTtxPXE/cT9LKHkscSk6XCJcIjpudWxsO3I9bmV3IFVpbnQzMkFycmF5KHkuYnVmZmVyLHIsbSk7cmV0dXJuIHgubW9kdWxlLnhGaWx0ZXIoayxsLHEscil9O29jPWZ1bmN0aW9uKGspe3JldHVybiBlLmdldChrKS5tb2R1bGUueE5leHQoayl9O2djPWZ1bmN0aW9uKGssbCxxKXtyZXR1cm4gZS5nZXQoaykubW9kdWxlLnhDb2x1bW4oayxsLHEpfTtzYz1mdW5jdGlvbihrLGwpe3JldHVybiBlLmdldChrKS5tb2R1bGUueFJvd2lkKGssYShcIkJpZ0ludDY0XCIsbCkpfTt2Yz1mdW5jdGlvbihrLGwscSxtKXtjb25zdCByPWQuZ2V0KGspO3E9bmV3IFVpbnQzMkFycmF5KHkuYnVmZmVyLHEsbCk7cmV0dXJuIHIubW9kdWxlLnhVcGRhdGUoayxxLGEoXCJCaWdJbnQ2NFwiLG0pKX07ZGM9ZnVuY3Rpb24oayl7cmV0dXJuIGQuZ2V0KGspLm1vZHVsZS54QmVnaW4oayl9O3VjPWZ1bmN0aW9uKGspe3JldHVybiBkLmdldChrKS5tb2R1bGUueFN5bmMoayl9O1xuaGM9ZnVuY3Rpb24oayl7cmV0dXJuIGQuZ2V0KGspLm1vZHVsZS54Q29tbWl0KGspfTtyYz1mdW5jdGlvbihrKXtyZXR1cm4gZC5nZXQoaykubW9kdWxlLnhSb2xsYmFjayhrKX07cWM9ZnVuY3Rpb24oayxsKXtjb25zdCBxPWQuZ2V0KGspO2w9bD9LKHksbCk6XCJcIjtyZXR1cm4gcS5tb2R1bGUueFJlbmFtZShrLGwpfX0pKCk7XG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGcsbil7Y29uc3Qgaz1gZ2V0JHtnfWAsbD1gc2V0JHtnfWA7cmV0dXJuIG5ldyBQcm94eShuZXcgRGF0YVZpZXcoeS5idWZmZXIsbixcIkludDMyXCI9PT1nPzQ6OCkse2dldChxLG0pe2lmKG09PT1rKXJldHVybiBmdW5jdGlvbihyLHgpe2lmKCF4KXRocm93IEVycm9yKFwibXVzdCBiZSBsaXR0bGUgZW5kaWFuXCIpO3JldHVybiBxW21dKHIseCl9O2lmKG09PT1sKXJldHVybiBmdW5jdGlvbihyLHgsQSl7aWYoIUEpdGhyb3cgRXJyb3IoXCJtdXN0IGJlIGxpdHRsZSBlbmRpYW5cIik7cmV0dXJuIHFbbV0ocix4LEEpfTtpZihcInN0cmluZ1wiPT09dHlwZW9mIG0mJm0ubWF0Y2goL14oZ2V0KXwoc2V0KS8pKXRocm93IEVycm9yKFwiaW52YWxpZCB0eXBlXCIpO3JldHVybiBxW21dfX0pfWZ1bmN0aW9uIGIoZyl7Zz4+PTI7cmV0dXJuIEJbZ10rQltnKzFdKjIqKjMyfWNvbnN0IGM9XCJvYmplY3RcIj09PXR5cGVvZiBlZCxkPW5ldyBNYXAsZT1uZXcgTWFwO2YucmVnaXN0ZXJWRlM9XG5mdW5jdGlvbihnLG4pe2lmKFooXCJzcWxpdGUzX3Zmc19maW5kXCIsXCJudW1iZXJcIixbXCJzdHJpbmdcIl0sW2cubmFtZV0pKXRocm93IEVycm9yKGBWRlMgJyR7Zy5uYW1lfScgYWxyZWFkeSByZWdpc3RlcmVkYCk7YyYmKGcuaGFuZGxlQXN5bmM9ZGQpO3ZhciBrPWcuY2Q/PzY0O2NvbnN0IGw9Zi5fbWFsbG9jKDQpO249WihcInJlZ2lzdGVyX3Zmc1wiLFwibnVtYmVyXCIsW1wic3RyaW5nXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdLFtnLm5hbWUsayxuPzE6MCxsXSk7bnx8KGs9SShsLFwiKlwiKSxkLnNldChrLGcpKTtmLl9mcmVlKGwpO3JldHVybiBufTtjb25zdCBoPWM/bmV3IFNldDpudWxsO3ljPWZ1bmN0aW9uKGcpe2NvbnN0IG49ZS5nZXQoZyk7Yz9oLmFkZChnKTplLmRlbGV0ZShnKTtyZXR1cm4gbi54Q2xvc2UoZyl9O0ZjPWZ1bmN0aW9uKGcsbixrLGwpe3JldHVybiBlLmdldChnKS54UmVhZChnLHkuc3ViYXJyYXkobixuK2spLGIobCkpfTtLYz1mdW5jdGlvbihnLG4sayxsKXtyZXR1cm4gZS5nZXQoZykueFdyaXRlKGcsXG55LnN1YmFycmF5KG4sbitrKSxiKGwpKX07SWM9ZnVuY3Rpb24oZyxuKXtyZXR1cm4gZS5nZXQoZykueFRydW5jYXRlKGcsYihuKSl9O0hjPWZ1bmN0aW9uKGcsbil7cmV0dXJuIGUuZ2V0KGcpLnhTeW5jKGcsbil9O0NjPWZ1bmN0aW9uKGcsbil7Y29uc3Qgaz1lLmdldChnKTtuPWEoXCJCaWdJbnQ2NFwiLG4pO3JldHVybiBrLnhGaWxlU2l6ZShnLG4pfTtEYz1mdW5jdGlvbihnLG4pe3JldHVybiBlLmdldChnKS54TG9jayhnLG4pfTtKYz1mdW5jdGlvbihnLG4pe3JldHVybiBlLmdldChnKS54VW5sb2NrKGcsbil9O3hjPWZ1bmN0aW9uKGcsbil7Y29uc3Qgaz1lLmdldChnKTtuPWEoXCJJbnQzMlwiLG4pO3JldHVybiBrLnhDaGVja1Jlc2VydmVkTG9jayhnLG4pfTtCYz1mdW5jdGlvbihnLG4sayl7Y29uc3QgbD1lLmdldChnKTtrPW5ldyBEYXRhVmlldyh5LmJ1ZmZlcixrKTtyZXR1cm4gbC54RmlsZUNvbnRyb2woZyxuLGspfTtHYz1mdW5jdGlvbihnKXtyZXR1cm4gZS5nZXQoZykueFNlY3RvclNpemUoZyl9O1xuQWM9ZnVuY3Rpb24oZyl7cmV0dXJuIGUuZ2V0KGcpLnhEZXZpY2VDaGFyYWN0ZXJpc3RpY3MoZyl9O0VjPWZ1bmN0aW9uKGcsbixrLGwscSl7Zz1kLmdldChnKTtlLnNldChrLGcpO2lmKGMpe2guZGVsZXRlKGspO2Zvcih2YXIgbSBvZiBoKWUuZGVsZXRlKG0pfW09bnVsbDtpZihsJjY0KXttPTE7Y29uc3Qgcj1bXTtmb3IoO207KXtjb25zdCB4PXlbbisrXTtpZih4KXIucHVzaCh4KTtlbHNlIHN3aXRjaCh5W25dfHwobT1udWxsKSxtKXtjYXNlIDE6ci5wdXNoKDYzKTttPTI7YnJlYWs7Y2FzZSAyOnIucHVzaCg2MSk7bT0zO2JyZWFrO2Nhc2UgMzpyLnB1c2goMzgpLG09Mn19bT0obmV3IFRleHREZWNvZGVyKS5kZWNvZGUobmV3IFVpbnQ4QXJyYXkocikpfWVsc2UgbiYmKG09bj9LKHksbik6XCJcIik7cT1hKFwiSW50MzJcIixxKTtyZXR1cm4gZy54T3BlbihtLGssbCxxKX07emM9ZnVuY3Rpb24oZyxuLGspe3JldHVybiBkLmdldChnKS54RGVsZXRlKG4/Syh5LG4pOlwiXCIsayl9O3djPWZ1bmN0aW9uKGcsXG5uLGssbCl7Zz1kLmdldChnKTtsPWEoXCJJbnQzMlwiLGwpO3JldHVybiBnLnhBY2Nlc3Mobj9LKHksbik6XCJcIixrLGwpfX0pKCk7XG52YXIga2Q9e2E6KGEsYixjLGQpPT57dShgQXNzZXJ0aW9uIGZhaWxlZDogJHthP0soeSxhKTpcIlwifSwgYXQ6IGArW2I/Yj9LKHksYik6XCJcIjpcInVua25vd24gZmlsZW5hbWVcIixjLGQ/ZD9LKHksZCk6XCJcIjpcInVua25vd24gZnVuY3Rpb25cIl0pfSxLOmZ1bmN0aW9uKGEsYil7dHJ5e3JldHVybiBhPWE/Syh5LGEpOlwiXCIsRGIoYSxiKSwwfWNhdGNoKGMpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWMubmFtZSl0aHJvdyBjO3JldHVybi1jLlFifX0sTTpmdW5jdGlvbihhLGIsYyl7dHJ5e2I9Yj9LKHksYik6XCJcIjtiPU1iKGEsYik7aWYoYyYtOClyZXR1cm4tMjg7dmFyIGQ9UihiLHskYjohMH0pLm5vZGU7aWYoIWQpcmV0dXJuLTQ0O2E9XCJcIjtjJjQmJihhKz1cInJcIik7YyYyJiYoYSs9XCJ3XCIpO2MmMSYmKGErPVwieFwiKTtyZXR1cm4gYSYmb2IoZCxhKT8tMjowfWNhdGNoKGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWUubmFtZSl0aHJvdyBlO1xucmV0dXJuLWUuUWJ9fSxMOmZ1bmN0aW9uKGEsYil7dHJ5e3ZhciBjPVMoYSk7RGIoYy5ub2RlLGIpO3JldHVybiAwfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybi1kLlFifX0sSjpmdW5jdGlvbihhKXt0cnl7dmFyIGI9UyhhKS5ub2RlO3ZhciBjPVwic3RyaW5nXCI9PXR5cGVvZiBiP1IoYix7JGI6ITB9KS5ub2RlOmI7aWYoIWMuRWIuU2IpdGhyb3cgbmV3IE4oNjMpO2MuRWIuU2IoYyx7dGltZXN0YW1wOkRhdGUubm93KCl9KTtyZXR1cm4gMH1jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5RYn19LGI6ZnVuY3Rpb24oYSxiLGMpe09iPWM7dHJ5e3ZhciBkPVMoYSk7c3dpdGNoKGIpe2Nhc2UgMDp2YXIgZT1QYigpO2lmKDA+ZSlyZXR1cm4tMjg7Zm9yKDtoYltlXTspZSsrO3JldHVybiB1YihkLGUpLlliO2Nhc2UgMTpjYXNlIDI6cmV0dXJuIDA7XG5jYXNlIDM6cmV0dXJuIGQuZmxhZ3M7Y2FzZSA0OnJldHVybiBlPVBiKCksZC5mbGFnc3w9ZSwwO2Nhc2UgNTpyZXR1cm4gZT1QYigpLG9hW2UrMD4+MV09MiwwO2Nhc2UgNjpjYXNlIDc6cmV0dXJuIDA7Y2FzZSAxNjpjYXNlIDg6cmV0dXJuLTI4O2Nhc2UgOTpyZXR1cm4geltqZCgpPj4yXT0yOCwtMTtkZWZhdWx0OnJldHVybi0yOH19Y2F0Y2goaCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09aC5uYW1lKXRocm93IGg7cmV0dXJuLWguUWJ9fSxJOmZ1bmN0aW9uKGEsYil7dHJ5e3ZhciBjPVMoYSk7cmV0dXJuIE5iKEJiLGMucGF0aCxiKX1jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5RYn19LG46ZnVuY3Rpb24oYSxiLGMpe2I9UWIoYixjKTt0cnl7aWYoaXNOYU4oYikpcmV0dXJuIDYxO3ZhciBkPVMoYSk7aWYoMD09PShkLmZsYWdzJjIwOTcxNTUpKXRocm93IG5ldyBOKDI4KTtcbkViKGQubm9kZSxiKTtyZXR1cm4gMH1jYXRjaChlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1lLm5hbWUpdGhyb3cgZTtyZXR1cm4tZS5RYn19LEM6ZnVuY3Rpb24oYSxiKXt0cnl7aWYoMD09PWIpcmV0dXJuLTI4O3ZhciBjPVJhKFwiL1wiKSsxO2lmKGI8YylyZXR1cm4tNjg7U2EoXCIvXCIseSxhLGIpO3JldHVybiBjfWNhdGNoKGQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWQubmFtZSl0aHJvdyBkO3JldHVybi1kLlFifX0sRjpmdW5jdGlvbihhLGIpe3RyeXtyZXR1cm4gYT1hP0soeSxhKTpcIlwiLE5iKENiLGEsYil9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7cmV0dXJuLWMuUWJ9fSx6OmZ1bmN0aW9uKGEsYixjKXt0cnl7cmV0dXJuIGI9Yj9LKHksYik6XCJcIixiPU1iKGEsYiksYj1NKGIpLFwiL1wiPT09YltiLmxlbmd0aC0xXSYmKGI9Yi5zdWJzdHIoMCxcbmIubGVuZ3RoLTEpKSxUKGIsYyksMH1jYXRjaChkKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1kLm5hbWUpdGhyb3cgZDtyZXR1cm4tZC5RYn19LEU6ZnVuY3Rpb24oYSxiLGMsZCl7dHJ5e2I9Yj9LKHksYik6XCJcIjt2YXIgZT1kJjI1NjtiPU1iKGEsYixkJjQwOTYpO3JldHVybiBOYihlP0NiOkJiLGIsYyl9Y2F0Y2goaCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09aC5uYW1lKXRocm93IGg7cmV0dXJuLWguUWJ9fSx5OmZ1bmN0aW9uKGEsYixjLGQpe09iPWQ7dHJ5e2I9Yj9LKHksYik6XCJcIjtiPU1iKGEsYik7dmFyIGU9ZD9QYigpOjA7cmV0dXJuIEZiKGIsYyxlKS5ZYn1jYXRjaChoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1oLm5hbWUpdGhyb3cgaDtyZXR1cm4taC5RYn19LHY6ZnVuY3Rpb24oYSxiLGMsZCl7dHJ5e2I9Yj9LKHksYik6XCJcIjtiPU1iKGEsYik7aWYoMD49ZClyZXR1cm4tMjg7XG52YXIgZT1rYihiKSxoPU1hdGgubWluKGQsUmEoZSkpLGc9d1tjK2hdO1NhKGUseSxjLGQrMSk7d1tjK2hdPWc7cmV0dXJuIGh9Y2F0Y2gobil7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09bi5uYW1lKXRocm93IG47cmV0dXJuLW4uUWJ9fSx1OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gYT1hP0soeSxhKTpcIlwiLEFiKGEpLDB9Y2F0Y2goYil7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09Yi5uYW1lKXRocm93IGI7cmV0dXJuLWIuUWJ9fSxHOmZ1bmN0aW9uKGEsYil7dHJ5e3JldHVybiBhPWE/Syh5LGEpOlwiXCIsTmIoQmIsYSxiKX1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztyZXR1cm4tYy5RYn19LHI6ZnVuY3Rpb24oYSxiLGMpe3RyeXtiPWI/Syh5LGIpOlwiXCI7Yj1NYihhLGIpO2lmKDA9PT1jKXthPWI7dmFyIGQ9UihhLHtwYXJlbnQ6ITB9KS5ub2RlO2lmKCFkKXRocm93IG5ldyBOKDQ0KTtcbnZhciBlPU1hKGEpLGg9Y2IoZCxlKSxnPXNiKGQsZSwhMSk7aWYoZyl0aHJvdyBuZXcgTihnKTtpZighZC5FYi5xYyl0aHJvdyBuZXcgTig2Myk7aWYoaC5iYyl0aHJvdyBuZXcgTigxMCk7ZC5FYi5xYyhkLGUpO25iKGgpfWVsc2UgNTEyPT09Yz9BYihiKTp1KFwiSW52YWxpZCBmbGFncyBwYXNzZWQgdG8gdW5saW5rYXRcIik7cmV0dXJuIDB9Y2F0Y2gobil7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09bi5uYW1lKXRocm93IG47cmV0dXJuLW4uUWJ9fSxxOmZ1bmN0aW9uKGEsYixjKXt0cnl7Yj1iP0soeSxiKTpcIlwiO2I9TWIoYSxiLCEwKTtpZihjKXt2YXIgZD1CW2M+PjJdKzQyOTQ5NjcyOTYqeltjKzQ+PjJdLGU9eltjKzg+PjJdO2g9MUUzKmQrZS8xRTY7Yys9MTY7ZD1CW2M+PjJdKzQyOTQ5NjcyOTYqeltjKzQ+PjJdO2U9eltjKzg+PjJdO2c9MUUzKmQrZS8xRTZ9ZWxzZSB2YXIgaD1EYXRlLm5vdygpLGc9aDthPWg7dmFyIG49UihiLHskYjohMH0pLm5vZGU7XG5uLkViLlNiKG4se3RpbWVzdGFtcDpNYXRoLm1heChhLGcpfSk7cmV0dXJuIDB9Y2F0Y2goayl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ay5uYW1lKXRocm93IGs7cmV0dXJuLWsuUWJ9fSxrOmZ1bmN0aW9uKGEsYixjKXthPW5ldyBEYXRlKDFFMypRYihhLGIpKTt6W2M+PjJdPWEuZ2V0U2Vjb25kcygpO3pbYys0Pj4yXT1hLmdldE1pbnV0ZXMoKTt6W2MrOD4+Ml09YS5nZXRIb3VycygpO3pbYysxMj4+Ml09YS5nZXREYXRlKCk7eltjKzE2Pj4yXT1hLmdldE1vbnRoKCk7eltjKzIwPj4yXT1hLmdldEZ1bGxZZWFyKCktMTkwMDt6W2MrMjQ+PjJdPWEuZ2V0RGF5KCk7Yj1hLmdldEZ1bGxZZWFyKCk7eltjKzI4Pj4yXT0oMCE9PWIlNHx8MD09PWIlMTAwJiYwIT09YiU0MDA/U2I6UmIpW2EuZ2V0TW9udGgoKV0rYS5nZXREYXRlKCktMXwwO3pbYyszNj4+Ml09LSg2MCphLmdldFRpbWV6b25lT2Zmc2V0KCkpO2I9KG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxcbjYsMSkpLmdldFRpbWV6b25lT2Zmc2V0KCk7dmFyIGQ9KG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSwwLDEpKS5nZXRUaW1lem9uZU9mZnNldCgpO3pbYyszMj4+Ml09KGIhPWQmJmEuZ2V0VGltZXpvbmVPZmZzZXQoKT09TWF0aC5taW4oZCxiKSl8MH0saTpmdW5jdGlvbihhLGIsYyxkLGUsaCxnLG4pe2U9UWIoZSxoKTt0cnl7aWYoaXNOYU4oZSkpcmV0dXJuIDYxO3ZhciBrPVMoZCk7aWYoMCE9PShiJjIpJiYwPT09KGMmMikmJjIhPT0oay5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTigyKTtpZigxPT09KGsuZmxhZ3MmMjA5NzE1NSkpdGhyb3cgbmV3IE4oMik7aWYoIWsuT2IubWMpdGhyb3cgbmV3IE4oNDMpO3ZhciBsPWsuT2IubWMoayxhLGUsYixjKTt2YXIgcT1sLlFjO3pbZz4+Ml09bC5FYztCW24+PjJdPXE7cmV0dXJuIDB9Y2F0Y2gobSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09bS5uYW1lKXRocm93IG07cmV0dXJuLW0uUWJ9fSxqOmZ1bmN0aW9uKGEsXG5iLGMsZCxlLGgsZyl7aD1RYihoLGcpO3RyeXtpZihpc05hTihoKSlyZXR1cm4gNjE7dmFyIG49UyhlKTtpZihjJjIpe2lmKDMyNzY4IT09KG4ubm9kZS5tb2RlJjYxNDQwKSl0aHJvdyBuZXcgTig0Myk7ZCYyfHxuLk9iLm5jJiZuLk9iLm5jKG4seS5zbGljZShhLGErYiksaCxiLGQpfX1jYXRjaChrKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1rLm5hbWUpdGhyb3cgaztyZXR1cm4tay5RYn19LHM6KGEsYixjKT0+e2Z1bmN0aW9uIGQoayl7cmV0dXJuKGs9ay50b1RpbWVTdHJpbmcoKS5tYXRjaCgvXFwoKFtBLVphLXogXSspXFwpJC8pKT9rWzFdOlwiR01UXCJ9dmFyIGU9KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLGg9bmV3IERhdGUoZSwwLDEpLGc9bmV3IERhdGUoZSw2LDEpO2U9aC5nZXRUaW1lem9uZU9mZnNldCgpO3ZhciBuPWcuZ2V0VGltZXpvbmVPZmZzZXQoKTtCW2E+PjJdPTYwKk1hdGgubWF4KGUsbik7eltiPj4yXT1OdW1iZXIoZSE9bik7YT1kKGgpO1xuYj1kKGcpO2E9VWIoYSk7Yj1VYihiKTtuPGU/KEJbYz4+Ml09YSxCW2MrND4+Ml09Yik6KEJbYz4+Ml09YixCW2MrND4+Ml09YSl9LGU6KCk9PkRhdGUubm93KCksZDooKT0+cGVyZm9ybWFuY2Uubm93KCksbzphPT57dmFyIGI9eS5sZW5ndGg7YT4+Pj0wO2lmKDIxNDc0ODM2NDg8YSlyZXR1cm4hMTtmb3IodmFyIGM9MTs0Pj1jO2MqPTIpe3ZhciBkPWIqKDErLjIvYyk7ZD1NYXRoLm1pbihkLGErMTAwNjYzMjk2KTt2YXIgZT1NYXRoO2Q9TWF0aC5tYXgoYSxkKTthOntlPShlLm1pbi5jYWxsKGUsMjE0NzQ4MzY0OCxkKyg2NTUzNi1kJTY1NTM2KSU2NTUzNiktbWEuYnVmZmVyLmJ5dGVMZW5ndGgrNjU1MzUpLzY1NTM2O3RyeXttYS5ncm93KGUpO3JhKCk7dmFyIGg9MTticmVhayBhfWNhdGNoKGcpe31oPXZvaWQgMH1pZihoKXJldHVybiEwfXJldHVybiExfSxBOihhLGIpPT57dmFyIGM9MDtYYigpLmZvckVhY2goKGQsZSk9Pnt2YXIgaD1iK2M7ZT1CW2ErNCplPj4yXT1oO2ZvcihoPVxuMDtoPGQubGVuZ3RoOysraCl3W2UrKz4+MF09ZC5jaGFyQ29kZUF0KGgpO3dbZT4+MF09MDtjKz1kLmxlbmd0aCsxfSk7cmV0dXJuIDB9LEI6KGEsYik9Pnt2YXIgYz1YYigpO0JbYT4+Ml09Yy5sZW5ndGg7dmFyIGQ9MDtjLmZvckVhY2goZT0+ZCs9ZS5sZW5ndGgrMSk7QltiPj4yXT1kO3JldHVybiAwfSxmOmZ1bmN0aW9uKGEpe3RyeXt2YXIgYj1TKGEpO2lmKG51bGw9PT1iLlliKXRocm93IG5ldyBOKDgpO2IucmMmJihiLnJjPW51bGwpO3RyeXtiLk9iLmNsb3NlJiZiLk9iLmNsb3NlKGIpfWNhdGNoKGMpe3Rocm93IGM7fWZpbmFsbHl7aGJbYi5ZYl09bnVsbH1iLlliPW51bGw7cmV0dXJuIDB9Y2F0Y2goYyl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09Yy5uYW1lKXRocm93IGM7cmV0dXJuIGMuUWJ9fSxwOmZ1bmN0aW9uKGEsYil7dHJ5e3ZhciBjPVMoYSk7d1tiPj4wXT1jLlViPzI6UChjLm1vZGUpPzM6NDA5NjA9PT0oYy5tb2RlJjYxNDQwKT83OlxuNDtvYVtiKzI+PjFdPTA7Rj1bMCwoRD0wLDE8PStNYXRoLmFicyhEKT8wPEQ/K01hdGguZmxvb3IoRC80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKChELSsofn5EPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV07eltiKzg+PjJdPUZbMF07eltiKzEyPj4yXT1GWzFdO0Y9WzAsKEQ9MCwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgoRC0rKH5+RD4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldO3pbYisxNj4+Ml09RlswXTt6W2IrMjA+PjJdPUZbMV07cmV0dXJuIDB9Y2F0Y2goZCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFV8fFwiRXJybm9FcnJvclwiIT09ZC5uYW1lKXRocm93IGQ7cmV0dXJuIGQuUWJ9fSx4OmZ1bmN0aW9uKGEsYixjLGQpe3RyeXthOnt2YXIgZT1TKGEpO2E9Yjtmb3IodmFyIGgsZz1iPTA7ZzxjO2crKyl7dmFyIG49QlthPj4yXSxrPUJbYSs0Pj4yXTthKz04O3ZhciBsPWUscT1uLG09ayxyPWgseD1cbnc7aWYoMD5tfHwwPnIpdGhyb3cgbmV3IE4oMjgpO2lmKG51bGw9PT1sLlliKXRocm93IG5ldyBOKDgpO2lmKDE9PT0obC5mbGFncyYyMDk3MTU1KSl0aHJvdyBuZXcgTig4KTtpZihQKGwubm9kZS5tb2RlKSl0aHJvdyBuZXcgTigzMSk7aWYoIWwuT2IucmVhZCl0aHJvdyBuZXcgTigyOCk7dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHI7aWYoIUEpcj1sLnBvc2l0aW9uO2Vsc2UgaWYoIWwuc2Vla2FibGUpdGhyb3cgbmV3IE4oNzApO3ZhciBHPWwuT2IucmVhZChsLHgscSxtLHIpO0F8fChsLnBvc2l0aW9uKz1HKTt2YXIgRT1HO2lmKDA+RSl7dmFyIEw9LTE7YnJlYWsgYX1iKz1FO2lmKEU8aylicmVhaztcInVuZGVmaW5lZFwiIT09dHlwZW9mIGgmJihoKz1FKX1MPWJ9QltkPj4yXT1MO3JldHVybiAwfWNhdGNoKEgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PUgubmFtZSl0aHJvdyBIO3JldHVybiBILlFifX0sbTpmdW5jdGlvbihhLGIsYyxkLGUpe2I9XG5RYihiLGMpO3RyeXtpZihpc05hTihiKSlyZXR1cm4gNjE7dmFyIGg9UyhhKTtIYihoLGIsZCk7Rj1baC5wb3NpdGlvbj4+PjAsKEQ9aC5wb3NpdGlvbiwxPD0rTWF0aC5hYnMoRCk/MDxEPytNYXRoLmZsb29yKEQvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgoRC0rKH5+RD4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldO3pbZT4+Ml09RlswXTt6W2UrND4+Ml09RlsxXTtoLnJjJiYwPT09YiYmMD09PWQmJihoLnJjPW51bGwpO3JldHVybiAwfWNhdGNoKGcpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PWcubmFtZSl0aHJvdyBnO3JldHVybiBnLlFifX0sRDpmdW5jdGlvbihhKXt0cnl7dmFyIGI9UyhhKTtyZXR1cm4gWmMoYz0+e3ZhciBkPWIubm9kZS5XYjtkLnR5cGUuU2M/ZC50eXBlLlNjKGQsITEsZT0+e2U/YygyOSk6YygwKX0pOmMoMCl9KX1jYXRjaChjKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgVXx8XCJFcnJub0Vycm9yXCIhPT1jLm5hbWUpdGhyb3cgYztcbnJldHVybiBjLlFifX0sdDpmdW5jdGlvbihhLGIsYyxkKXt0cnl7YTp7dmFyIGU9UyhhKTthPWI7Zm9yKHZhciBoLGc9Yj0wO2c8YztnKyspe3ZhciBuPUJbYT4+Ml0saz1CW2ErND4+Ml07YSs9ODt2YXIgbD1lLHE9bixtPWsscj1oLHg9dztpZigwPm18fDA+cil0aHJvdyBuZXcgTigyOCk7aWYobnVsbD09PWwuWWIpdGhyb3cgbmV3IE4oOCk7aWYoMD09PShsLmZsYWdzJjIwOTcxNTUpKXRocm93IG5ldyBOKDgpO2lmKFAobC5ub2RlLm1vZGUpKXRocm93IG5ldyBOKDMxKTtpZighbC5PYi53cml0ZSl0aHJvdyBuZXcgTigyOCk7bC5zZWVrYWJsZSYmbC5mbGFncyYxMDI0JiZIYihsLDAsMik7dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHI7aWYoIUEpcj1sLnBvc2l0aW9uO2Vsc2UgaWYoIWwuc2Vla2FibGUpdGhyb3cgbmV3IE4oNzApO3ZhciBHPWwuT2Iud3JpdGUobCx4LHEsbSxyLHZvaWQgMCk7QXx8KGwucG9zaXRpb24rPUcpO3ZhciBFPUc7aWYoMD5FKXt2YXIgTD0tMTticmVhayBhfWIrPVxuRTtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGgmJihoKz1FKX1MPWJ9QltkPj4yXT1MO3JldHVybiAwfWNhdGNoKEgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVfHxcIkVycm5vRXJyb3JcIiE9PUgubmFtZSl0aHJvdyBIO3JldHVybiBILlFifX0sc2E6WWIsTzpaYixoYTokYixjYTphYyxaOmJjLEg6Y2MsbGE6ZGMsdzplYyxnOmZjLG9hOmdjLGphOmhjLGVhOmljLGZhOmpjLGg6a2MsbDpsYyxwYTptYyxyYTpuYyxxYTpvYyxkYTpwYyxnYTpxYyxpYTpyYyxuYTpzYyxjOnRjLGthOnVjLG1hOnZjLGFhOndjLFY6eGMsJDp5YyxiYTp6YyxTOkFjLFU6QmMsWTpDYyxYOkRjLFI6RWMsUTpGYyxUOkdjLF86SGMsTjpJYyxXOkpjLFA6S2N9LFk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGMpe2M9Yy5leHBvcnRzO1k9Yz1PYyhjKTttYT1ZLnRhO3JhKCk7dGEudW5zaGlmdChZLnVhKTtDLS07Zi5tb25pdG9yUnVuRGVwZW5kZW5jaWVzJiZmLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoQyk7aWYoMD09QyYmXG4obnVsbCE9PXlhJiYoY2xlYXJJbnRlcnZhbCh5YSkseWE9bnVsbCksemEpKXt2YXIgZD16YTt6YT1udWxsO2QoKX1yZXR1cm4gY312YXIgYj17YTprZH07QysrO2YubW9uaXRvclJ1bkRlcGVuZGVuY2llcyYmZi5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKEMpO2lmKGYuaW5zdGFudGlhdGVXYXNtKXRyeXtyZXR1cm4gZi5pbnN0YW50aWF0ZVdhc20oYixhKX1jYXRjaChjKXt0KGBNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAke2N9YCksYmEoYyl9R2EoYixmdW5jdGlvbihjKXthKGMuaW5zdGFuY2UpfSkuY2F0Y2goYmEpO3JldHVybnt9fSgpO2YuX3NxbGl0ZTNfdmZzX2ZpbmQ9YT0+KGYuX3NxbGl0ZTNfdmZzX2ZpbmQ9WS52YSkoYSk7Zi5fc3FsaXRlM19tYWxsb2M9YT0+KGYuX3NxbGl0ZTNfbWFsbG9jPVkud2EpKGEpO2YuX3NxbGl0ZTNfZnJlZT1hPT4oZi5fc3FsaXRlM19mcmVlPVkueGEpKGEpO1xuZi5fc3FsaXRlM19wcmVwYXJlX3YyPShhLGIsYyxkLGUpPT4oZi5fc3FsaXRlM19wcmVwYXJlX3YyPVkueWEpKGEsYixjLGQsZSk7Zi5fc3FsaXRlM19zdGVwPWE9PihmLl9zcWxpdGUzX3N0ZXA9WS56YSkoYSk7Zi5fc3FsaXRlM19jb2x1bW5faW50NjQ9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9pbnQ2ND1ZLkFhKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX2ludD0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX2ludD1ZLkJhKShhLGIpO2YuX3NxbGl0ZTNfZmluYWxpemU9YT0+KGYuX3NxbGl0ZTNfZmluYWxpemU9WS5DYSkoYSk7Zi5fc3FsaXRlM19yZXNldD1hPT4oZi5fc3FsaXRlM19yZXNldD1ZLkRhKShhKTtmLl9zcWxpdGUzX2NsZWFyX2JpbmRpbmdzPWE9PihmLl9zcWxpdGUzX2NsZWFyX2JpbmRpbmdzPVkuRWEpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfYmxvYj1hPT4oZi5fc3FsaXRlM192YWx1ZV9ibG9iPVkuRmEpKGEpO1xuZi5fc3FsaXRlM192YWx1ZV90ZXh0PWE9PihmLl9zcWxpdGUzX3ZhbHVlX3RleHQ9WS5HYSkoYSk7Zi5fc3FsaXRlM192YWx1ZV9ieXRlcz1hPT4oZi5fc3FsaXRlM192YWx1ZV9ieXRlcz1ZLkhhKShhKTtmLl9zcWxpdGUzX3ZhbHVlX2RvdWJsZT1hPT4oZi5fc3FsaXRlM192YWx1ZV9kb3VibGU9WS5JYSkoYSk7Zi5fc3FsaXRlM192YWx1ZV9pbnQ9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfaW50PVkuSmEpKGEpO2YuX3NxbGl0ZTNfdmFsdWVfaW50NjQ9YT0+KGYuX3NxbGl0ZTNfdmFsdWVfaW50NjQ9WS5LYSkoYSk7Zi5fc3FsaXRlM192YWx1ZV90eXBlPWE9PihmLl9zcWxpdGUzX3ZhbHVlX3R5cGU9WS5MYSkoYSk7Zi5fc3FsaXRlM19yZXN1bHRfYmxvYj0oYSxiLGMsZCk9PihmLl9zcWxpdGUzX3Jlc3VsdF9ibG9iPVkuTWEpKGEsYixjLGQpO2YuX3NxbGl0ZTNfcmVzdWx0X2RvdWJsZT0oYSxiKT0+KGYuX3NxbGl0ZTNfcmVzdWx0X2RvdWJsZT1ZLk5hKShhLGIpO1xuZi5fc3FsaXRlM19yZXN1bHRfZXJyb3I9KGEsYixjKT0+KGYuX3NxbGl0ZTNfcmVzdWx0X2Vycm9yPVkuT2EpKGEsYixjKTtmLl9zcWxpdGUzX3Jlc3VsdF9pbnQ9KGEsYik9PihmLl9zcWxpdGUzX3Jlc3VsdF9pbnQ9WS5QYSkoYSxiKTtmLl9zcWxpdGUzX3Jlc3VsdF9pbnQ2ND0oYSxiLGMpPT4oZi5fc3FsaXRlM19yZXN1bHRfaW50NjQ9WS5RYSkoYSxiLGMpO2YuX3NxbGl0ZTNfcmVzdWx0X251bGw9YT0+KGYuX3NxbGl0ZTNfcmVzdWx0X251bGw9WS5SYSkoYSk7Zi5fc3FsaXRlM19yZXN1bHRfdGV4dD0oYSxiLGMsZCk9PihmLl9zcWxpdGUzX3Jlc3VsdF90ZXh0PVkuU2EpKGEsYixjLGQpO2YuX3NxbGl0ZTNfY29sdW1uX2NvdW50PWE9PihmLl9zcWxpdGUzX2NvbHVtbl9jb3VudD1ZLlRhKShhKTtmLl9zcWxpdGUzX2RhdGFfY291bnQ9YT0+KGYuX3NxbGl0ZTNfZGF0YV9jb3VudD1ZLlVhKShhKTtcbmYuX3NxbGl0ZTNfY29sdW1uX2Jsb2I9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9ibG9iPVkuVmEpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fYnl0ZXM9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl9ieXRlcz1ZLldhKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX2RvdWJsZT0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX2RvdWJsZT1ZLlhhKShhLGIpO2YuX3NxbGl0ZTNfY29sdW1uX3RleHQ9KGEsYik9PihmLl9zcWxpdGUzX2NvbHVtbl90ZXh0PVkuWWEpKGEsYik7Zi5fc3FsaXRlM19jb2x1bW5fdHlwZT0oYSxiKT0+KGYuX3NxbGl0ZTNfY29sdW1uX3R5cGU9WS5aYSkoYSxiKTtmLl9zcWxpdGUzX2NvbHVtbl9uYW1lPShhLGIpPT4oZi5fc3FsaXRlM19jb2x1bW5fbmFtZT1ZLl9hKShhLGIpO2YuX3NxbGl0ZTNfYmluZF9ibG9iPShhLGIsYyxkLGUpPT4oZi5fc3FsaXRlM19iaW5kX2Jsb2I9WS4kYSkoYSxiLGMsZCxlKTtcbmYuX3NxbGl0ZTNfYmluZF9kb3VibGU9KGEsYixjKT0+KGYuX3NxbGl0ZTNfYmluZF9kb3VibGU9WS5hYikoYSxiLGMpO2YuX3NxbGl0ZTNfYmluZF9pbnQ9KGEsYixjKT0+KGYuX3NxbGl0ZTNfYmluZF9pbnQ9WS5iYikoYSxiLGMpO2YuX3NxbGl0ZTNfYmluZF9pbnQ2ND0oYSxiLGMsZCk9PihmLl9zcWxpdGUzX2JpbmRfaW50NjQ9WS5jYikoYSxiLGMsZCk7Zi5fc3FsaXRlM19iaW5kX251bGw9KGEsYik9PihmLl9zcWxpdGUzX2JpbmRfbnVsbD1ZLmRiKShhLGIpO2YuX3NxbGl0ZTNfYmluZF90ZXh0PShhLGIsYyxkLGUpPT4oZi5fc3FsaXRlM19iaW5kX3RleHQ9WS5lYikoYSxiLGMsZCxlKTtmLl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2NvdW50PWE9PihmLl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2NvdW50PVkuZmIpKGEpO2YuX3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfbmFtZT0oYSxiKT0+KGYuX3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfbmFtZT1ZLmdiKShhLGIpO1xuZi5fc3FsaXRlM19zcWw9YT0+KGYuX3NxbGl0ZTNfc3FsPVkuaGIpKGEpO2YuX3NxbGl0ZTNfZXhlYz0oYSxiLGMsZCxlKT0+KGYuX3NxbGl0ZTNfZXhlYz1ZLmliKShhLGIsYyxkLGUpO2YuX3NxbGl0ZTNfZXJybXNnPWE9PihmLl9zcWxpdGUzX2Vycm1zZz1ZLmpiKShhKTtmLl9zcWxpdGUzX2RlY2xhcmVfdnRhYj0oYSxiKT0+KGYuX3NxbGl0ZTNfZGVjbGFyZV92dGFiPVkua2IpKGEsYik7Zi5fc3FsaXRlM19saWJ2ZXJzaW9uPSgpPT4oZi5fc3FsaXRlM19saWJ2ZXJzaW9uPVkubGIpKCk7Zi5fc3FsaXRlM19saWJ2ZXJzaW9uX251bWJlcj0oKT0+KGYuX3NxbGl0ZTNfbGlidmVyc2lvbl9udW1iZXI9WS5tYikoKTtmLl9zcWxpdGUzX2NoYW5nZXM9YT0+KGYuX3NxbGl0ZTNfY2hhbmdlcz1ZLm5iKShhKTtmLl9zcWxpdGUzX2Nsb3NlPWE9PihmLl9zcWxpdGUzX2Nsb3NlPVkub2IpKGEpO1xuZi5fc3FsaXRlM19saW1pdD0oYSxiLGMpPT4oZi5fc3FsaXRlM19saW1pdD1ZLnBiKShhLGIsYyk7Zi5fc3FsaXRlM19vcGVuX3YyPShhLGIsYyxkKT0+KGYuX3NxbGl0ZTNfb3Blbl92Mj1ZLnFiKShhLGIsYyxkKTtmLl9zcWxpdGUzX2dldF9hdXRvY29tbWl0PWE9PihmLl9zcWxpdGUzX2dldF9hdXRvY29tbWl0PVkucmIpKGEpO3ZhciBqZD0oKT0+KGpkPVkuc2IpKCksVGI9Zi5fbWFsbG9jPWE9PihUYj1mLl9tYWxsb2M9WS50YikoYSksY2Q9Zi5fZnJlZT1hPT4oY2Q9Zi5fZnJlZT1ZLnViKShhKTtmLl9SZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9ucz1hPT4oZi5fUmVnaXN0ZXJFeHRlbnNpb25GdW5jdGlvbnM9WS52YikoYSk7Zi5fc2V0X2F1dGhvcml6ZXI9YT0+KGYuX3NldF9hdXRob3JpemVyPVkud2IpKGEpO2YuX2NyZWF0ZV9mdW5jdGlvbj0oYSxiLGMsZCxlLGgpPT4oZi5fY3JlYXRlX2Z1bmN0aW9uPVkueGIpKGEsYixjLGQsZSxoKTtcbmYuX3VwZGF0ZV9ob29rPShhLGIpPT4oZi5fdXBkYXRlX2hvb2s9WS55YikoYSxiKTtmLl9jcmVhdGVfbW9kdWxlPShhLGIsYyxkKT0+KGYuX2NyZWF0ZV9tb2R1bGU9WS56YikoYSxiLGMsZCk7Zi5fcHJvZ3Jlc3NfaGFuZGxlcj0oYSxiKT0+KGYuX3Byb2dyZXNzX2hhbmRsZXI9WS5BYikoYSxiKTtmLl9yZWdpc3Rlcl92ZnM9KGEsYixjLGQpPT4oZi5fcmVnaXN0ZXJfdmZzPVkuQmIpKGEsYixjLGQpO2YuX2dldFNxbGl0ZUZyZWU9KCk9PihmLl9nZXRTcWxpdGVGcmVlPVkuQ2IpKCk7dmFyIGxkPWYuX21haW49KGEsYik9PihsZD1mLl9tYWluPVkuRGIpKGEsYiksZGI9KGEsYik9PihkYj1ZLkZiKShhLGIpLG1kPSgpPT4obWQ9WS5HYikoKSxoZD0oKT0+KGhkPVkuSGIpKCksZmQ9YT0+KGZkPVkuSWIpKGEpLGdkPWE9PihnZD1ZLkpiKShhKSxhZD1hPT4oYWQ9WS5LYikoYSksUWM9KCk9PihRYz1ZLkxiKSgpLCRjPWE9PigkYz1ZLk1iKShhKSxiZD0oKT0+KGJkPVkuTmIpKCk7XG5mLmdldFRlbXBSZXQwPW1kO2YuY2NhbGw9WjtmLmN3cmFwPShhLGIsYyxkKT0+e3ZhciBlPSFjfHxjLmV2ZXJ5KGg9PlwibnVtYmVyXCI9PT1ofHxcImJvb2xlYW5cIj09PWgpO3JldHVyblwic3RyaW5nXCIhPT1iJiZlJiYhZD9mW1wiX1wiK2FdOmZ1bmN0aW9uKCl7cmV0dXJuIFooYSxiLGMsYXJndW1lbnRzLGQpfX07Zi5zZXRWYWx1ZT1KO2YuZ2V0VmFsdWU9STtmLlVURjhUb1N0cmluZz0oYSxiKT0+YT9LKHksYSxiKTpcIlwiO2Yuc3RyaW5nVG9VVEY4PShhLGIsYyk9PlNhKGEseSxiLGMpO2YubGVuZ3RoQnl0ZXNVVEY4PVJhO3ZhciBuZDt6YT1mdW5jdGlvbiBvZCgpe25kfHxwZCgpO25kfHwoemE9b2QpfTtcbmZ1bmN0aW9uIHBkKCl7ZnVuY3Rpb24gYSgpe2lmKCFuZCYmKG5kPSEwLGYuY2FsbGVkUnVuPSEwLCF2KSl7Zi5ub0ZTSW5pdHx8SmJ8fChKYj0hMCxJYigpLGYuc3RkaW49Zi5zdGRpbixmLnN0ZG91dD1mLnN0ZG91dCxmLnN0ZGVycj1mLnN0ZGVycixmLnN0ZGluP0tiKFwic3RkaW5cIixmLnN0ZGluKTp6YihcIi9kZXYvdHR5XCIsXCIvZGV2L3N0ZGluXCIpLGYuc3Rkb3V0P0tiKFwic3Rkb3V0XCIsbnVsbCxmLnN0ZG91dCk6emIoXCIvZGV2L3R0eVwiLFwiL2Rldi9zdGRvdXRcIiksZi5zdGRlcnI/S2IoXCJzdGRlcnJcIixudWxsLGYuc3RkZXJyKTp6YihcIi9kZXYvdHR5MVwiLFwiL2Rldi9zdGRlcnJcIiksRmIoXCIvZGV2L3N0ZGluXCIsMCksRmIoXCIvZGV2L3N0ZG91dFwiLDEpLEZiKFwiL2Rldi9zdGRlcnJcIiwxKSk7amI9ITE7SWEodGEpO0lhKHVhKTthYShmKTtpZihmLm9uUnVudGltZUluaXRpYWxpemVkKWYub25SdW50aW1lSW5pdGlhbGl6ZWQoKTtpZihxZCl7dmFyIGI9bGQ7dHJ5e3ZhciBjPWIoMCwwKTtuYT1cbmM7TGMoYyl9Y2F0Y2goZCl7TWMoZCl9fWlmKGYucG9zdFJ1bilmb3IoXCJmdW5jdGlvblwiPT10eXBlb2YgZi5wb3N0UnVuJiYoZi5wb3N0UnVuPVtmLnBvc3RSdW5dKTtmLnBvc3RSdW4ubGVuZ3RoOyliPWYucG9zdFJ1bi5zaGlmdCgpLHZhLnVuc2hpZnQoYik7SWEodmEpfX1pZighKDA8Qykpe2lmKGYucHJlUnVuKWZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiBmLnByZVJ1biYmKGYucHJlUnVuPVtmLnByZVJ1bl0pO2YucHJlUnVuLmxlbmd0aDspeGEoKTtJYShzYSk7MDxDfHwoZi5zZXRTdGF0dXM/KGYuc2V0U3RhdHVzKFwiUnVubmluZy4uLlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2Yuc2V0U3RhdHVzKFwiXCIpfSwxKTthKCl9LDEpKTphKCkpfX1pZihmLnByZUluaXQpZm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYucHJlSW5pdCYmKGYucHJlSW5pdD1bZi5wcmVJbml0XSk7MDxmLnByZUluaXQubGVuZ3RoOylmLnByZUluaXQucG9wKCkoKTtcbnZhciBxZD0hMDtmLm5vSW5pdGlhbFJ1biYmKHFkPSExKTtwZCgpO1xuXG5cbiAgcmV0dXJuIG1vZHVsZUFyZy5yZWFkeVxufVxuXG4pO1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IE1vZHVsZTsiLCIvLyBDb3B5cmlnaHQgMjAyMiBSb3kgVC4gSGFzaGltb3RvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuaW1wb3J0ICogYXMgVkZTIGZyb20gJy4vc3FsaXRlLWNvbnN0YW50cy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuXG4vLyBCYXNlIGNsYXNzIGZvciBhIFZGUy5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgbXhQYXRoTmFtZSA9IDY0O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeENsb3NlKGZpbGVJZCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4UmVhZChmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhXcml0ZShmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlTaXplIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFRydW5jYXRlKGZpbGVJZCwgaVNpemUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0geyp9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFN5bmMoZmlsZUlkLCBmbGFncykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBTaXplNjQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4RmlsZVNpemUoZmlsZUlkLCBwU2l6ZTY0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeExvY2soZmlsZUlkLCBmbGFncykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhVbmxvY2soZmlsZUlkLCBmbGFncykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4Q2hlY2tSZXNlcnZlZExvY2soZmlsZUlkLCBwUmVzT3V0KSB7XG4gICAgcFJlc091dC5zZXRJbnQzMigwLCAwLCB0cnVlKTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3AgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBBcmcgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4RmlsZUNvbnRyb2woZmlsZUlkLCBvcCwgcEFyZykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX05PVEZPVU5EO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4U2VjdG9yU2l6ZShmaWxlSWQpIHtcbiAgICByZXR1cm4gNTEyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4RGV2aWNlQ2hhcmFjdGVyaXN0aWNzKGZpbGVJZCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gbmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwT3V0RmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4T3BlbihuYW1lLCBmaWxlSWQsIGZsYWdzLCBwT3V0RmxhZ3MpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9DQU5UT1BFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN5bmNEaXIgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4RGVsZXRlKG5hbWUsIHN5bmNEaXIpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeEFjY2VzcyhuYW1lLCBmbGFncywgcFJlc091dCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGlzIGltcGxlbWVudGF0aW9uIHdpbGwgYmUgb3ZlcnJpZGVuIG9uXG4gICAqIHJlZ2lzdHJhdGlvbiBieSBhbiBBc3luY2lmeSBidWlsZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigpOiBQcm9taXNlPG51bWJlcj59IGYgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBoYW5kbGVBc3luYyhmKSB7XG4gICAgLy8gVGhpcyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGRlbGliZXJhdGVseSBkb2VzIG5vdCBtYXRjaCB0aGVcbiAgICAvLyBkZWNsYXJlZCBzaWduYXR1cmUuIEl0IHdpbGwgYmUgdXNlZCBpbiB0ZXN0aW5nIFZGUyBjbGFzc2VzXG4gICAgLy8gc2VwYXJhdGVseSBmcm9tIFNRTGl0ZS4gVGhpcyB3aWxsIHdvcmsgYWNjZXB0YWJseSBmb3IgbWV0aG9kc1xuICAgIC8vIHRoYXQgc2ltcGx5IHJldHVybiB0aGUgaGFuZGxlQXN5bmMoKSByZXN1bHQgd2l0aG91dCB1c2luZyBpdC5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGYoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRklMRV9UWVBFX01BU0sgPSBbXG4gIFZGUy5TUUxJVEVfT1BFTl9NQUlOX0RCLFxuICBWRlMuU1FMSVRFX09QRU5fTUFJTl9KT1VSTkFMLFxuICBWRlMuU1FMSVRFX09QRU5fVEVNUF9EQixcbiAgVkZTLlNRTElURV9PUEVOX1RFTVBfSk9VUk5BTCxcbiAgVkZTLlNRTElURV9PUEVOX1RSQU5TSUVOVF9EQixcbiAgVkZTLlNRTElURV9PUEVOX1NVQkpPVVJOQUwsXG4gIFZGUy5TUUxJVEVfT1BFTl9TVVBFUl9KT1VSTkFMXG5dLnJlZHVjZSgobWFzaywgZWxlbWVudCkgPT4gbWFzayB8IGVsZW1lbnQpOyIsIi8vIENvcHlyaWdodCAyMDIyIFJveSBULiBIYXNoaW1vdG8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5pbXBvcnQgKiBhcyBWRlMgZnJvbSAnLi4vVkZTLmpzJztcbmltcG9ydCB7IFdlYkxvY2tzRXhjbHVzaXZlIGFzIFdlYkxvY2tzIH0gZnJvbSAnLi9XZWJMb2Nrcy5qcyc7XG5pbXBvcnQgeyBJREJDb250ZXh0IH0gZnJvbSAnLi9JREJDb250ZXh0LmpzJztcblxuY29uc3QgU0VDVE9SX1NJWkUgPSA1MTI7XG5jb25zdCBNQVhfVEFTS19NSUxMSVMgPSAzMDAwO1xuXG4vKipcbiAqIEB0eXBlZGVmIFZGU09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7XCJkZWZhdWx0XCJ8XCJzdHJpY3RcInxcInJlbGF4ZWRcIn0gW2R1cmFiaWxpdHldXG4gKiBAcHJvcGVydHkge1wiZGVmZXJyZWRcInxcIm1hbnVhbFwifSBbcHVyZ2VdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3B1cmdlQXRMZWFzdF1cbiAqL1xuXG4vKiogQHR5cGUge1ZGU09wdGlvbnN9ICovXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gIGR1cmFiaWxpdHk6IFwiZGVmYXVsdFwiLFxuICBwdXJnZTogXCJkZWZlcnJlZFwiLFxuICBwdXJnZUF0TGVhc3Q6IDE2XG59O1xuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuICAvLyBjb25zb2xlLmRlYnVnKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIEZpbGVCbG9jayBJbmRleGVkREIgb2JqZWN0IHdpdGgga2V5IFtwYXRoLCBvZmZzZXQsIHZlcnNpb25dXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldCBuZWdhdGl2ZSBvZiBwb3NpdGlvbiBpbiBmaWxlXG4gKiBAcHJvcGVydHkge251bWJlcn0gdmVyc2lvblxuICogQHByb3BlcnR5IHtVaW50OEFycmF5fSBkYXRhXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtmaWxlU2l6ZV0gT25seSBwcmVzZW50IG9uIGJsb2NrIDBcbiovXG5cbi8qKlxuICogQHR5cGVkZWYgT3BlbmVkRmlsZUVudHJ5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGZsYWdzXG4gKiBAcHJvcGVydHkge0ZpbGVCbG9ja30gYmxvY2swXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzTWV0YWRhdGFDaGFuZ2VkXG4gKiBAcHJvcGVydHkge1dlYkxvY2tzfSBsb2Nrc1xuICogXG4gKiBAcHJvcGVydHkge1NldDxudW1iZXI+fSBbY2hhbmdlZFBhZ2VzXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3ZlcndyaXRlXVxuICovXG5cbi8vIFRoaXMgc2FtcGxlIFZGUyBzdG9yZXMgb3B0aW9uYWxseSB2ZXJzaW9uZWQgd3JpdGVzIHRvIEluZGV4ZWREQiwgd2hpY2hcbi8vIGl0IHVzZXMgd2l0aCB0aGUgU1FMaXRlIHhGaWxlQ29udHJvbCgpIGJhdGNoIGF0b21pYyB3cml0ZSBmZWF0dXJlLlxuZXhwb3J0IGNsYXNzIElEQkJhdGNoQXRvbWljVkZTIGV4dGVuZHMgVkZTLkJhc2Uge1xuICAjb3B0aW9ucztcbiAgLyoqIEB0eXBlIHtNYXA8bnVtYmVyLCBPcGVuZWRGaWxlRW50cnk+fSAqLyAjbWFwSWRUb0ZpbGUgPSBuZXcgTWFwKCk7XG5cbiAgLyoqIEB0eXBlIHtJREJDb250ZXh0fSAqLyAjaWRiO1xuICAvKiogQHR5cGUge1NldDxzdHJpbmc+fSAqLyAjcGVuZGluZ1B1cmdlcyA9IG5ldyBTZXQoKTtcblxuICAjdGFza1RpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAjcGVuZGluZ0FzeW5jID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0cnVjdG9yKGlkYkRhdGFiYXNlTmFtZSA9ICd3YS1zcWxpdGUnLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hbWUgPSBpZGJEYXRhYmFzZU5hbWU7XG4gICAgdGhpcy4jb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XG4gICAgdGhpcy4jaWRiID0gbmV3IElEQkNvbnRleHQob3BlbkRhdGFiYXNlKGlkYkRhdGFiYXNlTmFtZSksIHtcbiAgICAgIGR1cmFiaWxpdHk6IHRoaXMuI29wdGlvbnMuZHVyYWJpbGl0eVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgZm9yIChjb25zdCBmaWxlSWQgb2YgdGhpcy4jbWFwSWRUb0ZpbGUua2V5cygpKSB7XG4gICAgICBhd2FpdCB0aGlzLnhDbG9zZShmaWxlSWQpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuI2lkYj8uY2xvc2UoKTtcbiAgICB0aGlzLiNpZGIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gbmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwT3V0RmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4T3BlbihuYW1lLCBmaWxlSWQsIGZsYWdzLCBwT3V0RmxhZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICBpZiAobmFtZSA9PT0gbnVsbCkgbmFtZSA9IGBudWxsXyR7ZmlsZUlkfWA7XG4gICAgICBsb2coYHhPcGVuICR7bmFtZX0gMHgke2ZpbGVJZC50b1N0cmluZygxNil9IDB4JHtmbGFncy50b1N0cmluZygxNil9YCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEZpbGVuYW1lcyBjYW4gYmUgVVJMcywgcG9zc2libHkgd2l0aCBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKG5hbWUsICdodHRwOi8vbG9jYWxob3N0LycpO1xuICAgICAgICAvKiogQHR5cGUge09wZW5lZEZpbGVFbnRyeX0gKi8gY29uc3QgZmlsZSA9IHtcbiAgICAgICAgICBwYXRoOiB1cmwucGF0aG5hbWUsXG4gICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgYmxvY2swOiBudWxsLFxuICAgICAgICAgIGlzTWV0YWRhdGFDaGFuZ2VkOiB0cnVlLFxuICAgICAgICAgIGxvY2tzOiBuZXcgV2ViTG9ja3ModXJsLnBhdGhuYW1lKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiNtYXBJZFRvRmlsZS5zZXQoZmlsZUlkLCBmaWxlKTtcblxuICAgICAgICAvLyBSZWFkIHRoZSBmaXJzdCBibG9jaywgd2hpY2ggYWxzbyBjb250YWlucyB0aGUgZmlsZSBtZXRhZGF0YS5cbiAgICAgICAgYXdhaXQgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgYXN5bmMgKHtibG9ja3N9KSA9PiB7XG4gICAgICAgICAgZmlsZS5ibG9jazAgPSBhd2FpdCBibG9ja3MuZ2V0KHRoaXMuI2JvdW5kKGZpbGUsIDApKTtcbiAgICAgICAgICBpZiAoIWZpbGUuYmxvY2swKSB7XG4gICAgICAgICAgICBpZiAoZmxhZ3MgJiBWRlMuU1FMSVRFX09QRU5fQ1JFQVRFKSB7XG4gICAgICAgICAgICAgIGZpbGUuYmxvY2swID0ge1xuICAgICAgICAgICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBuZXcgVWludDhBcnJheSgwKSxcbiAgICAgICAgICAgICAgICBmaWxlU2l6ZTogMFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBibG9ja3MucHV0KGZpbGUuYmxvY2swKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmlsZSBub3QgZm91bmQ6ICR7ZmlsZS5wYXRofWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBPdXRGbGFncy5zZXRJbnQzMigwLCBmbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9SRUFET05MWSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9DQU5UT1BFTjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeENsb3NlKGZpbGVJZCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICBsb2coYHhDbG9zZSAke2ZpbGUucGF0aH1gKTtcblxuICAgICAgICAgIHRoaXMuI21hcElkVG9GaWxlLmRlbGV0ZShmaWxlSWQpO1xuICAgICAgICAgIGlmIChmaWxlLmZsYWdzICYgVkZTLlNRTElURV9PUEVOX0RFTEVURU9OQ0xPU0UpIHtcbiAgICAgICAgICAgIHRoaXMuI2lkYi5ydW4oJ3JlYWR3cml0ZScsICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgICAgICBibG9ja3MuZGVsZXRlKElEQktleVJhbmdlLmJvdW5kKFtmaWxlLnBhdGhdLCBbZmlsZS5wYXRoLCBbXV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhSZWFkKGZpbGVJZCwgcERhdGEsIGlPZmZzZXQpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgICBsb2coYHhSZWFkICR7ZmlsZS5wYXRofSAke3BEYXRhLmJ5dGVMZW5ndGh9ICR7aU9mZnNldH1gKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gUmVhZCBhcyBtYW55IGJsb2NrcyBhcyBuZWNlc3NhcnkgdG8gc2F0aXNmeSB0aGUgcmVhZCByZXF1ZXN0LlxuICAgICAgICAvLyBVc3VhbGx5IGEgcmVhZCBmaXRzIHdpdGhpbiBhIHNpbmdsZSB3cml0ZSBidXQgdGhlcmUgaXMgYXQgbGVhc3RcbiAgICAgICAgLy8gb25lIGNhc2UgLSByb2xsYmFjayBhZnRlciBqb3VybmFsIHNwaWxsIC0gd2hlcmUgcmVhZHMgY3Jvc3NcbiAgICAgICAgLy8gd3JpdGUgYm91bmRhcmllcyBzbyB3ZSBoYXZlIHRvIGFsbG93IGZvciB0aGF0LlxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLiNpZGIucnVuKCdyZWFkb25seScsIGFzeW5jICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgIGxldCBwRGF0YU9mZnNldCA9IDA7XG4gICAgICAgICAgd2hpbGUgKHBEYXRhT2Zmc2V0IDwgcERhdGEuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIEluZGV4ZWREQiBibG9jayBmb3IgdGhpcyBmaWxlIGxvY2F0aW9uLlxuICAgICAgICAgICAgY29uc3QgZmlsZU9mZnNldCA9IGlPZmZzZXQgKyBwRGF0YU9mZnNldDtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7RmlsZUJsb2NrfSAqL1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWxlT2Zmc2V0IDwgZmlsZS5ibG9jazAuZGF0YS5ieXRlTGVuZ3RoID9cbiAgICAgICAgICAgICAgZmlsZS5ibG9jazAgOlxuICAgICAgICAgICAgICBhd2FpdCBibG9ja3MuZ2V0KHRoaXMuI2JvdW5kKGZpbGUsIC1maWxlT2Zmc2V0KSk7XG5cbiAgICAgICAgICAgIGlmICghYmxvY2sgfHwgYmxvY2suZGF0YS5ieXRlTGVuZ3RoIC0gYmxvY2sub2Zmc2V0IDw9IGZpbGVPZmZzZXQpIHtcbiAgICAgICAgICAgICAgcERhdGEuZmlsbCgwLCBwRGF0YU9mZnNldCk7XG4gICAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1NIT1JUX1JFQUQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHBEYXRhLnN1YmFycmF5KHBEYXRhT2Zmc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrT2Zmc2V0ID0gZmlsZU9mZnNldCArIGJsb2NrLm9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IG5CeXRlc1RvQ29weSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBNYXRoLm1heChibG9jay5kYXRhLmJ5dGVMZW5ndGggLSBibG9ja09mZnNldCwgMCksIC8vIHNvdXJjZSBieXRlc1xuICAgICAgICAgICAgICBidWZmZXIuYnl0ZUxlbmd0aCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlc3RpbmF0aW9uIGJ5dGVzXG4gICAgICAgICAgICBidWZmZXIuc2V0KGJsb2NrLmRhdGEuc3ViYXJyYXkoYmxvY2tPZmZzZXQsIGJsb2NrT2Zmc2V0ICsgbkJ5dGVzVG9Db3B5KSk7XG4gICAgICAgICAgICBwRGF0YU9mZnNldCArPSBuQnl0ZXNUb0NvcHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhXcml0ZShmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgLy8gSGFuZGxlIGFzeW5jaHJvbm91c2x5IGV2ZXJ5IE1BWF9UQVNLX01JTExJUyBtaWxsaXNlY29uZHMuIFRoaXMgaXNcbiAgICAvLyB0cmlja3kgYmVjYXVzZSBBc3luY2lmeSBjYWxscyBhc3luY2hyb25vdXMgbWV0aG9kcyB0d2ljZTogb25jZVxuICAgIC8vIHRvIGluaXRpYXRlIHRoZSBjYWxsIGFuZCB1bndpbmRzIHRoZSBzdGFjaywgdGhlbiByZXdpbmRzIHRoZVxuICAgIC8vIHN0YWNrIGFuZCBjYWxscyBhZ2FpbiB0byByZXRyaWV2ZSB0aGUgY29tcGxldGVkIHJlc3VsdC5cbiAgICBjb25zdCByZXdvdW5kID0gdGhpcy4jcGVuZGluZ0FzeW5jLmhhcyhmaWxlSWQpO1xuICAgIGlmIChyZXdvdW5kIHx8IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy4jdGFza1RpbWVzdGFtcCA+IE1BWF9UQVNLX01JTExJUykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUFzeW5jICE9PSBzdXBlci5oYW5kbGVBc3luYykge1xuICAgICAgICAgIHRoaXMuI3BlbmRpbmdBc3luYy5hZGQoZmlsZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSkpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI3hXcml0ZUhlbHBlcihmaWxlSWQsIHBEYXRhLCBpT2Zmc2V0KTtcbiAgICAgICAgdGhpcy4jdGFza1RpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXdvdW5kKSB0aGlzLiNwZW5kaW5nQXN5bmMuZGVsZXRlKGZpbGVJZCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jeFdyaXRlSGVscGVyKGZpbGVJZCwgcERhdGEsIGlPZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICAjeFdyaXRlSGVscGVyKGZpbGVJZCwgcERhdGEsIGlPZmZzZXQpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgbG9nKGB4V3JpdGUgJHtmaWxlLnBhdGh9ICR7cERhdGEuYnl0ZUxlbmd0aH0gJHtpT2Zmc2V0fWApO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVwZGF0ZSBmaWxlIHNpemUgaWYgYXBwZW5kaW5nLlxuICAgICAgY29uc3QgcHJldkZpbGVTaXplID0gZmlsZS5ibG9jazAuZmlsZVNpemU7XG4gICAgICBpZiAoZmlsZS5ibG9jazAuZmlsZVNpemUgPCBpT2Zmc2V0ICsgcERhdGEuYnl0ZUxlbmd0aCkge1xuICAgICAgICBmaWxlLmJsb2NrMC5maWxlU2l6ZSA9IGlPZmZzZXQgKyBwRGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udmVydCB0aGUgd3JpdGUgZGlyZWN0bHkgaW50byBhbiBJbmRleGVkREIgb2JqZWN0LiBPdXIgYXNzdW1wdGlvblxuICAgICAgLy8gaXMgdGhhdCBTUUxpdGUgd2lsbCBvbmx5IG92ZXJ3cml0ZSBkYXRhIHdpdGggYW4geFdyaXRlIG9mIHRoZSBzYW1lXG4gICAgICAvLyBvZmZzZXQgYW5kIHNpemUgdW5sZXNzIHRoZSBkYXRhYmFzZSBwYWdlIHNpemUgY2hhbmdlcywgZXhjZXB0IHdoZW5cbiAgICAgIC8vIGNoYW5naW5nIGRhdGFiYXNlIHBhZ2Ugc2l6ZSB3aGljaCBpcyBoYW5kbGVkIGJ5ICNyZWJsb2NrSWZOZWVkZWQoKS5cbiAgICAgIGNvbnN0IGJsb2NrID0gaU9mZnNldCA9PT0gMCA/IGZpbGUuYmxvY2swIDoge1xuICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgIG9mZnNldDogLWlPZmZzZXQsXG4gICAgICAgIHZlcnNpb246IGZpbGUuYmxvY2swLnZlcnNpb24sXG4gICAgICAgIGRhdGE6IG51bGxcbiAgICAgIH07XG4gICAgICBibG9jay5kYXRhID0gcERhdGEuc2xpY2UoKTtcblxuICAgICAgaWYgKGZpbGUuY2hhbmdlZFBhZ2VzKSB7XG4gICAgICAgIC8vIFRoaXMgd3JpdGUgaXMgcGFydCBvZiBhIGJhdGNoIGF0b21pYyB3cml0ZS4gQWxsIHdyaXRlcyBpbiB0aGVcbiAgICAgICAgLy8gYmF0Y2ggaGF2ZSBhIG5ldyB2ZXJzaW9uLCBzbyB1cGRhdGUgdGhlIGNoYW5nZWQgbGlzdCB0byBhbGxvd1xuICAgICAgICAvLyBvbGQgdmVyc2lvbnMgdG8gYmUgZXZlbnR1YWxseSBkZWxldGVkLlxuICAgICAgICBpZiAocHJldkZpbGVTaXplID09PSBmaWxlLmJsb2NrMC5maWxlU2l6ZSkge1xuICAgICAgICAgIGZpbGUuY2hhbmdlZFBhZ2VzLmFkZCgtaU9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZlciB3cml0aW5nIGJsb2NrIDAgdG8gSW5kZXhlZERCIHVudGlsIGJhdGNoIGNvbW1pdC5cbiAgICAgICAgaWYgKGlPZmZzZXQgIT09IDApIHtcbiAgICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCAoe2Jsb2Nrc30pID0+IGJsb2Nrcy5wdXQoYmxvY2spKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90IGEgYmF0Y2ggYXRvbWljIHdyaXRlIHNvIHdyaXRlIHRocm91Z2guXG4gICAgICAgIHRoaXMuI2lkYi5ydW4oJ3JlYWR3cml0ZScsICh7YmxvY2tzfSkgPT4gYmxvY2tzLnB1dChibG9jaykpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBkaXJ0eSBmbGFnIGlmIHBhZ2UgMCB3YXMgd3JpdHRlbi5cbiAgICAgIGZpbGUuaXNNZXRhZGF0YUNoYW5nZWQgPSBpT2Zmc2V0ID09PSAwID8gZmFsc2UgOiBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaVNpemUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4VHJ1bmNhdGUoZmlsZUlkLCBpU2l6ZSkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICBsb2coYHhUcnVuY2F0ZSAke2ZpbGUucGF0aH0gJHtpU2l6ZX1gKTtcblxuICAgIHRyeSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZpbGUuYmxvY2swLCB7XG4gICAgICAgIGZpbGVTaXplOiBpU2l6ZSxcbiAgICAgICAgZGF0YTogZmlsZS5ibG9jazAuZGF0YS5zbGljZSgwLCBpU2l6ZSlcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEZWxldGUgYWxsIGJsb2NrcyBiZXlvbmQgdGhlIGZpbGUgc2l6ZSBhbmQgdXBkYXRlIG1ldGFkYXRhLlxuICAgICAgLy8gVGhpcyBpcyBuZXZlciBjYWxsZWQgd2l0aGluIGEgdHJhbnNhY3Rpb24uXG4gICAgICBjb25zdCBibG9jazAgPSBPYmplY3QuYXNzaWduKHt9LCBmaWxlLmJsb2NrMCk7XG4gICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCAoe2Jsb2Nrc30pPT4ge1xuICAgICAgICBibG9ja3MuZGVsZXRlKHRoaXMuI2JvdW5kKGZpbGUsIC1JbmZpbml0eSwgLWlTaXplKSk7XG4gICAgICAgIGJsb2Nrcy5wdXQoYmxvY2swKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4U3luYyhmaWxlSWQsIGZsYWdzKSB7XG4gICAgLy8gU2tpcCBJbmRleGVkREIgc3luYyBpZiBkdXJhYmlsaXR5IGlzIHJlbGF4ZWQgYW5kIHRoZSBsYXN0XG4gICAgLy8gc3luYyB3YXMgcmVjZW50IGVub3VnaC5cbiAgICBjb25zdCByZXdvdW5kID0gdGhpcy4jcGVuZGluZ0FzeW5jLmhhcyhmaWxlSWQpO1xuICAgIGlmIChyZXdvdW5kIHx8IHRoaXMuI29wdGlvbnMuZHVyYWJpbGl0eSAhPT0gJ3JlbGF4ZWQnIHx8XG4gICAgICAgIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy4jdGFza1RpbWVzdGFtcCA+IE1BWF9UQVNLX01JTExJUykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUFzeW5jICE9PSBzdXBlci5oYW5kbGVBc3luYykge1xuICAgICAgICAgIHRoaXMuI3BlbmRpbmdBc3luYy5hZGQoZmlsZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuI3hTeW5jSGVscGVyKGZpbGVJZCwgZmxhZ3MpO1xuICAgICAgICB0aGlzLiN0YXNrVGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJld291bmQpIHRoaXMuI3BlbmRpbmdBc3luYy5kZWxldGUoZmlsZUlkKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgIGxvZyhgeFN5bmMgJHtmaWxlLnBhdGh9ICR7ZmxhZ3N9YCk7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgI3hTeW5jSGVscGVyKGZpbGVJZCwgZmxhZ3MpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy4jbWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgbG9nKGB4U3luYyAke2ZpbGUucGF0aH0gJHtmbGFnc31gKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGZpbGUuaXNNZXRhZGF0YUNoYW5nZWQpIHtcbiAgICAgICAgLy8gTWV0YWRhdGEgaGFzIGNoYW5nZWQgc28gd3JpdGUgYmxvY2sgMCB0byBJbmRleGVkREIuXG4gICAgICAgIHRoaXMuI2lkYi5ydW4oJ3JlYWR3cml0ZScsIGFzeW5jICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgIGF3YWl0IGJsb2Nrcy5wdXQoZmlsZS5ibG9jazApO1xuICAgICAgICB9KTsgXG4gICAgICAgIGZpbGUuaXNNZXRhZGF0YUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuI2lkYi5zeW5jKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgIH1cbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwU2l6ZTY0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeEZpbGVTaXplKGZpbGVJZCwgcFNpemU2NCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICBsb2coYHhGaWxlU2l6ZSAke2ZpbGUucGF0aH1gKTtcblxuICAgIHBTaXplNjQuc2V0QmlnSW50NjQoMCwgQmlnSW50KGZpbGUuYmxvY2swLmZpbGVTaXplKSwgdHJ1ZSlcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4TG9jayhmaWxlSWQsIGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgbG9nKGB4TG9jayAke2ZpbGUucGF0aH0gJHtmbGFnc31gKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQWNxdWlyZSB0aGUgbG9jay5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmlsZS5sb2Nrcy5sb2NrKGZsYWdzKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gVkZTLlNRTElURV9PSyAmJiBmaWxlLmxvY2tzLnN0YXRlID09PSBWRlMuU1FMSVRFX0xPQ0tfU0hBUkVEKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIGJsb2NrIDAgaW4gY2FzZSBhbm90aGVyIGNvbm5lY3Rpb24gY2hhbmdlZCBpdC5cbiAgICAgICAgICBmaWxlLmJsb2NrMCA9IGF3YWl0IHRoaXMuI2lkYi5ydW4oJ3JlYWRvbmx5JywgKHtibG9ja3N9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYmxvY2tzLmdldCh0aGlzLiNib3VuZChmaWxlLCAwKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeFVubG9jayhmaWxlSWQsIGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgbG9nKGB4VW5sb2NrICR7ZmlsZS5wYXRofSAke2ZsYWdzfWApO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZmlsZS5sb2Nrcy51bmxvY2soZmxhZ3MpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4Q2hlY2tSZXNlcnZlZExvY2soZmlsZUlkLCBwUmVzT3V0KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuI21hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgbG9nKGB4Q2hlY2tSZXNlcnZlZExvY2sgJHtmaWxlLnBhdGh9YCk7XG5cbiAgICAgIGNvbnN0IGlzUmVzZXJ2ZWQgPSBhd2FpdCBmaWxlLmxvY2tzLmlzU29tZXdoZXJlUmVzZXJ2ZWQoKTtcbiAgICAgIHBSZXNPdXQuc2V0SW50MzIoMCwgaXNSZXNlcnZlZCA/IDEgOiAwLCB0cnVlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4U2VjdG9yU2l6ZShmaWxlSWQpIHtcbiAgICBsb2coJ3hTZWN0b3JTaXplJyk7XG4gICAgcmV0dXJuIFNFQ1RPUl9TSVpFO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4RGV2aWNlQ2hhcmFjdGVyaXN0aWNzKGZpbGVJZCkge1xuICAgIGxvZygneERldmljZUNoYXJhY3RlcmlzdGljcycpO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPQ0FQX0JBVENIX0FUT01JQyB8XG4gICAgICAgICAgIFZGUy5TUUxJVEVfSU9DQVBfU0FGRV9BUFBFTkQgfFxuICAgICAgICAgICBWRlMuU1FMSVRFX0lPQ0FQX1NFUVVFTlRJQUwgfFxuICAgICAgICAgICBWRlMuU1FMSVRFX0lPQ0FQX1VOREVMRVRBQkxFX1dIRU5fT1BFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3AgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBBcmcgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB4RmlsZUNvbnRyb2woZmlsZUlkLCBvcCwgcEFyZykge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLiNtYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICBsb2coYHhGaWxlQ29udHJvbCAke2ZpbGUucGF0aH0gJHtvcH1gKTtcblxuICAgIHN3aXRjaCAob3ApIHtcbiAgICAgIGNhc2UgMTE6IC8vU1FMSVRFX0ZDTlRMX09WRVJXUklURVxuICAgICAgICAvLyBUaGlzIGNhbGxlZCBvbiBWQUNVVU0uIFNldCBhIGZsYWcgc28gd2Uga25vdyB3aGV0aGVyIHRvIGNoZWNrXG4gICAgICAgIC8vIGxhdGVyIGlmIHRoZSBwYWdlIHNpemUgY2hhbmdlZC5cbiAgICAgICAgZmlsZS5vdmVyd3JpdGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcblxuICAgICAgY2FzZSAyMTogLy8gU1FMSVRFX0ZDTlRMX1NZTkNcbiAgICAgICAgLy8gVGhpcyBpcyBjYWxsZWQgYXQgdGhlIGVuZCBvZiBlYWNoIGRhdGFiYXNlIHRyYW5zYWN0aW9uLCB3aGV0aGVyXG4gICAgICAgIC8vIGl0IGlzIGJhdGNoIGF0b21pYyBvciBub3QuIEhhbmRsZSBwYWdlIHNpemUgY2hhbmdlcyBoZXJlLlxuICAgICAgICBpZiAoZmlsZS5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAvLyBBcyBhbiBvcHRpbWl6YXRpb24gd2Ugb25seSBjaGVjayBmb3IgYW5kIGhhbmRsZSBhIHBhZ2UgZmlsZVxuICAgICAgICAgIC8vIGNoYW5nZXMgaWYgd2Uga25vdyBhIFZBQ1VVTSBoYXMgYmVlbiBkb25lIGJlY2F1c2UgaGFuZGxlQXN5bmMoKVxuICAgICAgICAgIC8vIGhhcyB0byB1bndpbmQgYW5kIHJld2luZCB0aGUgc3RhY2suIFdlIG11c3QgYmUgc3VyZSB0byBmb2xsb3dcbiAgICAgICAgICAvLyB0aGUgc2FtZSBjb25kaXRpb25hbCBwYXRoIGluIGJvdGggY2FsbHMuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy4jcmVibG9ja0lmTmVlZGVkKGZpbGUpO1xuICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsZS5pc01ldGFkYXRhQ2hhbmdlZCkge1xuICAgICAgICAgIC8vIE1ldGFkYXRhIGhhcyBjaGFuZ2VkIHNvIHdyaXRlIGJsb2NrIDAgdG8gSW5kZXhlZERCLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCBhc3luYyAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgYmxvY2tzLnB1dChmaWxlLmJsb2NrMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbGUuaXNNZXRhZGF0YUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuXG4gICAgICBjYXNlIDIyOiAvLyBTUUxJVEVfRkNOVExfQ09NTUlUX1BIQVNFVFdPXG4gICAgICAgIC8vIFRoaXMgaXMgY2FsbGVkIGFmdGVyIGEgY29tbWl0IGlzIGNvbXBsZXRlZC5cbiAgICAgICAgZmlsZS5vdmVyd3JpdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG5cbiAgICAgIGNhc2UgMzE6IC8vIFNRTElURV9GQ05UTF9CRUdJTl9BVE9NSUNfV1JJVEVcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQcmVwYXJlIGEgbmV3IHZlcnNpb24gZm9yIEluZGV4ZWREQiBibG9ja3MuXG4gICAgICAgICAgICBmaWxlLmJsb2NrMC52ZXJzaW9uLS07XG4gICAgICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgYmxvY2tzIGZyb20gYWJhbmRvbmVkIHRyYW5zYWN0aW9ucyB0aGF0IHdvdWxkIGNvbmZsaWN0XG4gICAgICAgICAgICAvLyB3aXRoIHRoZSBuZXcgdHJhbnNhY3Rpb24uXG4gICAgICAgICAgICB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCBhc3luYyAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IGJsb2Nrcy5pbmRleCgndmVyc2lvbicpLmdldEFsbEtleXMoSURCS2V5UmFuZ2UuYm91bmQoXG4gICAgICAgICAgICAgICAgW2ZpbGUucGF0aF0sXG4gICAgICAgICAgICAgICAgW2ZpbGUucGF0aCwgZmlsZS5ibG9jazAudmVyc2lvbl0pKTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIGJsb2Nrcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAzMjogLy8gU1FMSVRFX0ZDTlRMX0NPTU1JVF9BVE9NSUNfV1JJVEVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBibG9jazAgPSBPYmplY3QuYXNzaWduKHt9LCBmaWxlLmJsb2NrMCk7XG4gICAgICAgICAgYmxvY2swLmRhdGEgPSBibG9jazAuZGF0YS5zbGljZSgpO1xuICAgICAgICAgIGNvbnN0IGNoYW5nZWRQYWdlcyA9IGZpbGUuY2hhbmdlZFBhZ2VzO1xuICAgICAgICAgIGZpbGUuY2hhbmdlZFBhZ2VzID0gbnVsbDtcbiAgICAgICAgICBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4jaWRiLnJ1bigncmVhZHdyaXRlJywgYXN5bmMgKHtibG9ja3N9KT0+IHtcbiAgICAgICAgICAgIC8vIFdyaXRlIGJsb2NrIDAgdG8gY29tbWl0IHRoZSBuZXcgdmVyc2lvbi5cbiAgICAgICAgICAgIGJsb2Nrcy5wdXQoYmxvY2swKTtcblxuICAgICAgICAgICAgLy8gQmxvY2tzIHRvIHB1cmdlIGFyZSBzYXZlZCBpbiBhIHNwZWNpYWwgSW5kZXhlZERCIG9iamVjdCB3aXRoXG4gICAgICAgICAgICAvLyBhbiBcImluZGV4XCIgb2YgXCJwdXJnZVwiLiBBZGQgcGFnZXMgY2hhbmdlZCBieSB0aGlzIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgY29uc3QgcHVyZ2VCbG9jayA9IGF3YWl0IGJsb2Nrcy5nZXQoW2ZpbGUucGF0aCwgJ3B1cmdlJywgMF0pID8/IHtcbiAgICAgICAgICAgICAgcGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgICAgICBvZmZzZXQ6ICdwdXJnZScsXG4gICAgICAgICAgICAgIHZlcnNpb246IDAsXG4gICAgICAgICAgICAgIGRhdGE6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHB1cmdlQmxvY2suY291bnQgKz0gY2hhbmdlZFBhZ2VzLnNpemU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhZ2VJbmRleCBvZiBjaGFuZ2VkUGFnZXMpIHtcbiAgICAgICAgICAgICAgcHVyZ2VCbG9jay5kYXRhLnNldChwYWdlSW5kZXgsIGJsb2NrMC52ZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmxvY2tzLnB1dChwdXJnZUJsb2NrKTtcbiAgICAgICAgICAgIHRoaXMuI21heWJlUHVyZ2UoZmlsZS5wYXRoLCBwdXJnZUJsb2NrLmNvdW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAzMzogLy8gU1FMSVRFX0ZDTlRMX1JPTExCQUNLX0FUT01JQ19XUklURVxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgc3RhdGUuIE9iamVjdHMgZm9yIHRoZSBhYmFuZG9uZWQgdmVyc2lvbiB3aWxsXG4gICAgICAgICAgICAvLyBiZSBsZWZ0IGluIEluZGV4ZWREQiB0byBiZSByZW1vdmVkIGJ5IHRoZSBuZXh0IGF0b21pYyB3cml0ZVxuICAgICAgICAgICAgLy8gdHJhbnNhY3Rpb24uXG4gICAgICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcyA9IG51bGw7XG4gICAgICAgICAgICBmaWxlLmlzTWV0YWRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICBmaWxlLmJsb2NrMCA9IGF3YWl0IHRoaXMuI2lkYi5ydW4oJ3JlYWRvbmx5JywgKHtibG9ja3N9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBibG9ja3MuZ2V0KFtmaWxlLnBhdGgsIDAsIGZpbGUuYmxvY2swLnZlcnNpb24gKyAxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9OT1RGT1VORDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHhBY2Nlc3MobmFtZSwgZmxhZ3MsIHBSZXNPdXQpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXRoID0gbmV3IFVSTChuYW1lLCAnZmlsZTovL2xvY2FsaG9zdC8nKS5wYXRobmFtZTtcbiAgICAgICAgbG9nKGB4QWNjZXNzICR7cGF0aH0gJHtmbGFnc31gKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBibG9jayAwIGV4aXN0cy5cbiAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgdGhpcy4jaWRiLnJ1bigncmVhZG9ubHknLCAoe2Jsb2Nrc30pID0+IHtcbiAgICAgICAgICByZXR1cm4gYmxvY2tzLmdldEtleSh0aGlzLiNib3VuZCh7cGF0aH0sIDApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBSZXNPdXQuc2V0SW50MzIoMCwga2V5ID8gMSA6IDAsIHRydWUpO1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeW5jRGlyIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgeERlbGV0ZShuYW1lLCBzeW5jRGlyKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IG5ldyBVUkwobmFtZSwgJ2ZpbGU6Ly9sb2NhbGhvc3QvJykucGF0aG5hbWU7XG4gICAgICBsb2coYHhEZWxldGUgJHtwYXRofSAke3N5bmNEaXJ9YCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuI2lkYi5ydW4oJ3JlYWR3cml0ZScsICh7YmxvY2tzfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBibG9ja3MuZGVsZXRlKElEQktleVJhbmdlLmJvdW5kKFtwYXRoXSwgW3BhdGgsIFtdXSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN5bmNEaXIpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLiNpZGIuc3luYygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXJnZSBvYnNvbGV0ZSBibG9ja3MgZnJvbSBhIGRhdGFiYXNlIGZpbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICAgKi9cbiAgYXN5bmMgcHVyZ2UocGF0aCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBhd2FpdCB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCBhc3luYyAoe2Jsb2Nrc30pID0+IHtcbiAgICAgIGNvbnN0IHB1cmdlQmxvY2sgPSBhd2FpdCBibG9ja3MuZ2V0KFtwYXRoLCAncHVyZ2UnLCAwXSk7XG4gICAgICBpZiAocHVyZ2VCbG9jaykge1xuICAgICAgICBmb3IgKGNvbnN0IFtwYWdlT2Zmc2V0LCB2ZXJzaW9uXSBvZiBwdXJnZUJsb2NrLmRhdGEpIHtcbiAgICAgICAgICBibG9ja3MuZGVsZXRlKElEQktleVJhbmdlLmJvdW5kKFxuICAgICAgICAgICAgW3BhdGgsIHBhZ2VPZmZzZXQsIHZlcnNpb25dLFxuICAgICAgICAgICAgW3BhdGgsIHBhZ2VPZmZzZXQsIEluZmluaXR5XSxcbiAgICAgICAgICAgIHRydWUsIGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgYmxvY2tzLmRlbGV0ZShbcGF0aCwgJ3B1cmdlJywgMF0pO1xuICAgICAgfVxuICAgICAgbG9nKGBwdXJnZSAke3BhdGh9ICR7cHVyZ2VCbG9jaz8uZGF0YS5zaXplID8/IDB9IHBhZ2VzIGluICR7RGF0ZS5ub3coKSAtIHN0YXJ0fSBtc2ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsbHkgc2NoZWR1bGUgYSBwdXJnZSB0YXNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5QYWdlcyBcbiAgICovXG4gICNtYXliZVB1cmdlKHBhdGgsIG5QYWdlcykge1xuICAgIGlmICh0aGlzLiNvcHRpb25zLnB1cmdlID09PSAnbWFudWFsJyB8fFxuICAgICAgICB0aGlzLiNwZW5kaW5nUHVyZ2VzLmhhcyhwYXRoKSB8fFxuICAgICAgICBuUGFnZXMgPCB0aGlzLiNvcHRpb25zLnB1cmdlQXRMZWFzdCkge1xuICAgICAgLy8gTm8gcHVyZ2UgbmVlZGVkLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB7XG4gICAgICBnbG9iYWxUaGlzLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnB1cmdlKHBhdGgpO1xuICAgICAgICB0aGlzLiNwZW5kaW5nUHVyZ2VzLmRlbGV0ZShwYXRoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnB1cmdlKHBhdGgpO1xuICAgICAgICB0aGlzLiNwZW5kaW5nUHVyZ2VzLmRlbGV0ZShwYXRoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuI3BlbmRpbmdQdXJnZXMuYWRkKHBhdGgpO1xuICB9XG5cbiAgI2JvdW5kKGZpbGUsIGJlZ2luLCBlbmQgPSAwKSB7XG4gICAgLy8gRmV0Y2ggbmV3ZXN0IGJsb2NrIDAuIEZvciBvdGhlciBibG9ja3MsIHVzZSBibG9jayAwIHZlcnNpb24uXG4gICAgY29uc3QgdmVyc2lvbiA9ICFiZWdpbiB8fCAtYmVnaW4gPCBmaWxlLmJsb2NrMC5kYXRhLmxlbmd0aCA/XG4gICAgICAtSW5maW5pdHkgOlxuICAgICAgZmlsZS5ibG9jazAudmVyc2lvbjtcbiAgICByZXR1cm4gSURCS2V5UmFuZ2UuYm91bmQoXG4gICAgICBbZmlsZS5wYXRoLCBiZWdpbiwgdmVyc2lvbl0sXG4gICAgICBbZmlsZS5wYXRoLCBlbmQsIEluZmluaXR5XSk7XG4gIH1cblxuICAvLyBUaGUgZGF0YWJhc2UgcGFnZSBzaXplIGNhbiBiZSBjaGFuZ2VkIHdpdGggUFJBR01BIHBhZ2Vfc2l6ZSBhbmQgVkFDVVVNLlxuICAvLyBUaGUgdXBkYXRlZCBmaWxlIHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2l0aCBhIHJlZ3VsYXIgdHJhbnNhY3Rpb24gdXNpbmdcbiAgLy8gdGhlIG9sZCBwYWdlIHNpemUuIEFmdGVyIHRoYXQgaXQgd2lsbCBiZSByZWFkIGFuZCB3cml0dGVuIHVzaW5nIHRoZVxuICAvLyBuZXcgcGFnZSBzaXplLCBzbyB0aGUgSW5kZXhlZERCIG9iamVjdHMgbXVzdCBiZSBjb21iaW5lZCBvciBzcGxpdFxuICAvLyBhcHByb3ByaWF0ZWx5LlxuICBhc3luYyAjcmVibG9ja0lmTmVlZGVkKGZpbGUpIHtcbiAgICBjb25zdCBvbGRQYWdlU2l6ZSA9IGZpbGUuYmxvY2swLmRhdGEubGVuZ3RoO1xuICAgIGlmIChvbGRQYWdlU2l6ZSA8IDE4KSByZXR1cm47IC8vIG5vIHBhZ2Ugc2l6ZSBkZWZpbmVkXG5cbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGZpbGUuYmxvY2swLmRhdGEuYnVmZmVyLCBmaWxlLmJsb2NrMC5kYXRhLmJ5dGVPZmZzZXQpO1xuICAgIGxldCBuZXdQYWdlU2l6ZSA9IHZpZXcuZ2V0VWludDE2KDE2KTtcbiAgICBpZiAobmV3UGFnZVNpemUgPT09IDEpIG5ld1BhZ2VTaXplID0gNjU1MzY7XG4gICAgaWYgKG5ld1BhZ2VTaXplID09PSBvbGRQYWdlU2l6ZSkgcmV0dXJuOyAvLyBubyBwYWdlIHNpemUgY2hhbmdlXG5cbiAgICBjb25zdCBtYXhQYWdlU2l6ZSA9IE1hdGgubWF4KG9sZFBhZ2VTaXplLCBuZXdQYWdlU2l6ZSk7XG4gICAgY29uc3Qgbk9sZFBhZ2VzID0gbWF4UGFnZVNpemUgLyBvbGRQYWdlU2l6ZTtcbiAgICBjb25zdCBuTmV3UGFnZXMgPSBtYXhQYWdlU2l6ZSAvIG5ld1BhZ2VTaXplO1xuXG4gICAgY29uc3QgbmV3UGFnZUNvdW50ID0gdmlldy5nZXRVaW50MzIoMjgpO1xuICAgIGNvbnN0IGZpbGVTaXplID0gbmV3UGFnZUNvdW50ICogbmV3UGFnZVNpemU7XG5cbiAgICBjb25zdCB2ZXJzaW9uID0gZmlsZS5ibG9jazAudmVyc2lvbjtcbiAgICBhd2FpdCB0aGlzLiNpZGIucnVuKCdyZWFkd3JpdGUnLCBhc3luYyAoe2Jsb2Nrc30pID0+IHtcbiAgICAgIC8vIFdoZW4gdGhlIGJsb2NrIHNpemUgY2hhbmdlcywgdGhlIGVudGlyZSBmaWxlIGlzIHJld3JpdHRlbi4gRGVsZXRlXG4gICAgICAvLyBhbGwgYmxvY2tzIG9sZGVyIHRoYW4gYmxvY2sgMCB0byBsZWF2ZSBhIHNpbmdsZSB2ZXJzaW9uIGF0IGV2ZXJ5XG4gICAgICAvLyBvZmZzZXQuXG4gICAgICBjb25zdCBrZXlzID0gYXdhaXQgYmxvY2tzLmluZGV4KCd2ZXJzaW9uJykuZ2V0QWxsS2V5cyhJREJLZXlSYW5nZS5ib3VuZChcbiAgICAgICAgW2ZpbGUucGF0aCwgdmVyc2lvbiArIDFdLFxuICAgICAgICBbZmlsZS5wYXRoLCBJbmZpbml0eV1cbiAgICAgICkpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBibG9ja3MuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICBibG9ja3MuZGVsZXRlKFtmaWxlLnBhdGgsICdwdXJnZScsIDBdKTtcblxuICAgICAgLy8gRG8gdGhlIGNvbnZlcnNpb24gaW4gY2h1bmtzIG9mIHRoZSBsYXJnZXIgb2YgdGhlIHBhZ2Ugc2l6ZXMuXG4gICAgICBmb3IgKGxldCBpT2Zmc2V0ID0gMDsgaU9mZnNldCA8IGZpbGVTaXplOyBpT2Zmc2V0ICs9IG1heFBhZ2VTaXplKSB7XG4gICAgICAgIC8vIEZldGNoIG5PbGRQYWdlcy4gVGhleSBjYW4gYmUgZmV0Y2hlZCBpbiBvbmUgcmVxdWVzdCBiZWNhdXNlXG4gICAgICAgIC8vIHRoZXJlIGlzIG5vdyBhIHNpbmdsZSB2ZXJzaW9uIGluIHRoZSBmaWxlLlxuICAgICAgICBjb25zdCBvbGRQYWdlcyA9IGF3YWl0IGJsb2Nrcy5nZXRBbGwoXG4gICAgICAgICAgSURCS2V5UmFuZ2UubG93ZXJCb3VuZChbZmlsZS5wYXRoLCAtKGlPZmZzZXQgKyBtYXhQYWdlU2l6ZSksIEluZmluaXR5XSksXG4gICAgICAgICAgbk9sZFBhZ2VzKTtcbiAgICAgICAgZm9yIChjb25zdCBvbGRQYWdlIG9mIG9sZFBhZ2VzKSB7XG4gICAgICAgICAgYmxvY2tzLmRlbGV0ZShbb2xkUGFnZS5wYXRoLCBvbGRQYWdlLm9mZnNldCwgb2xkUGFnZS52ZXJzaW9uXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb252ZXJ0IHRvIG5ldyBwYWdlcy5cbiAgICAgICAgaWYgKG5OZXdQYWdlcyA9PT0gMSkge1xuICAgICAgICAgIC8vIENvbWJpbmUgbk9sZFBhZ2VzIG9sZCBwYWdlcyBpbnRvIGEgbmV3IHBhZ2UuXG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkobmV3UGFnZVNpemUpO1xuICAgICAgICAgIGZvciAoY29uc3Qgb2xkUGFnZSBvZiBvbGRQYWdlcykge1xuICAgICAgICAgICAgYnVmZmVyLnNldChvbGRQYWdlLmRhdGEsIC0oaU9mZnNldCArIG9sZFBhZ2Uub2Zmc2V0KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1BhZ2UgPSB7XG4gICAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICBvZmZzZXQ6IC1pT2Zmc2V0LFxuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIGRhdGE6IGJ1ZmZlclxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKG5ld1BhZ2Uub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgICBuZXdQYWdlLmZpbGVTaXplID0gZmlsZVNpemU7XG4gICAgICAgICAgICBmaWxlLmJsb2NrMCA9IG5ld1BhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2Nrcy5wdXQobmV3UGFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU3BsaXQgYW4gb2xkIHBhZ2UgaW50byBuTmV3UGFnZXMgbmV3IHBhZ2VzLlxuICAgICAgICAgIGNvbnN0IG9sZFBhZ2UgPSBvbGRQYWdlc1swXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5OZXdQYWdlczsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAtKGlPZmZzZXQgKyBpICogbmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgaWYgKC1vZmZzZXQgPj0gZmlsZVNpemUpIGJyZWFrO1xuICAgICAgICAgICAgY29uc3QgbmV3UGFnZSA9IHtcbiAgICAgICAgICAgICAgcGF0aDogb2xkUGFnZS5wYXRoLFxuICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICAgIGRhdGE6IG9sZFBhZ2UuZGF0YS5zdWJhcnJheShpICogbmV3UGFnZVNpemUsIChpICsgMSkgKiBuZXdQYWdlU2l6ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdQYWdlLm9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgICBuZXdQYWdlLmZpbGVTaXplID0gZmlsZVNpemU7XG4gICAgICAgICAgICAgIGZpbGUuYmxvY2swID0gbmV3UGFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2Nrcy5wdXQobmV3UGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkRhdGFiYXNlKGlkYkRhdGFiYXNlTmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBnbG9iYWxUaGlzLmluZGV4ZWREQi5vcGVuKGlkYkRhdGFiYXNlTmFtZSwgNSk7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBibG9ja3MgPSByZXF1ZXN0LnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZSgnYmxvY2tzJywge1xuICAgICAgICBrZXlQYXRoOiBbJ3BhdGgnLCAnb2Zmc2V0JywgJ3ZlcnNpb24nXVxuICAgICAgfSk7XG4gICAgICBibG9ja3MuY3JlYXRlSW5kZXgoJ3ZlcnNpb24nLCBbJ3BhdGgnLCAndmVyc2lvbiddKTtcbiAgICB9KTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCAoKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICB9KTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcbn0iLCIvLyBDb3B5cmlnaHQgMjAyMiBSb3kgVC4gSGFzaGltb3RvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG4vLyBJbmRleGVkREIgdHJhbnNhY3Rpb25zIG9sZGVyIHRoYW4gdGhpcyB3aWxsIGJlIHJlcGxhY2VkLlxuY29uc3QgTUFYX1RSQU5TQUNUSU9OX0xJRkVUSU1FX01JTExJUyA9IDVfMDAwO1xuXG4vLyBGb3IgZGVidWdnaW5nLlxubGV0IG5leHRUeElkID0gMDtcbmNvbnN0IG1hcFR4VG9JZCA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuICAvLyBjb25zb2xlLmRlYnVnKC4uLmFyZ3MpO1xufVxuXG4vLyBUaGlzIGNsYXNzIG1hbmFnZXMgSURCVHJhbnNhY3Rpb24gYW5kIElEQlJlcXVlc3QgaW5zdGFuY2VzLiBJdCB0cmllc1xuLy8gdG8gcmV1c2UgdHJhbnNhY3Rpb25zIHRvIG1pbmltaXplIHRyYW5zYWN0aW9uIG92ZXJoZWFkLlxuZXhwb3J0IGNsYXNzIElEQkNvbnRleHQge1xuICAvKiogQHR5cGUge0lEQkRhdGFiYXNlfSAqLyAjZGI7XG4gIC8qKiBAdHlwZSB7UHJvbWlzZTxJREJEYXRhYmFzZT59ICovICNkYlJlYWR5O1xuICAjdHhPcHRpb25zO1xuXG4gIC8qKiBAdHlwZSB7SURCVHJhbnNhY3Rpb259ICovICN0eCA9IG51bGw7XG4gICN0eFRpbWVzdGFtcCA9IDA7XG4gICNydW5DaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAjcHV0Q2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtJREJEYXRhYmFzZXxQcm9taXNlPElEQkRhdGFiYXNlPn0gaWRiRGF0YWJhc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkYkRhdGFiYXNlLCB0eE9wdGlvbnMgPSB7IGR1cmFiaWxpdHk6ICdkZWZhdWx0JyB9KSB7XG4gICAgdGhpcy4jZGJSZWFkeSA9IFByb21pc2UucmVzb2x2ZShpZGJEYXRhYmFzZSkudGhlbihkYiA9PiB0aGlzLiNkYiA9IGRiKTtcbiAgICB0aGlzLiN0eE9wdGlvbnMgPSB0eE9wdGlvbnM7XG4gIH1cblxuICBhc3luYyBjbG9zZSgpIHtcbiAgICBjb25zdCBkYiA9IHRoaXMuI2RiID8/IGF3YWl0IHRoaXMuI2RiUmVhZHk7XG4gICAgYXdhaXQgdGhpcy4jcnVuQ2hhaW47XG4gICAgYXdhaXQgdGhpcy5zeW5jKCk7XG4gICAgZGIuY2xvc2UoKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJ1biBhIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIG9iamVjdCBzdG9yZXMuIFRoZSBmdW5jdGlvblxuICAgKiBzaG91bGQgYmUgaWRlbXBvdGVudCBpbiBjYXNlIGl0IGlzIHBhc3NlZCBhbiBleHBpcmVkIHRyYW5zYWN0aW9uLlxuICAgKiBAcGFyYW0ge0lEQlRyYW5zYWN0aW9uTW9kZX0gbW9kZVxuICAgKiBAcGFyYW0geyhzdG9yZXM6IE9iamVjdC48c3RyaW5nLCBPYmplY3RTdG9yZT4pID0+IGFueX0gZiBcbiAgICovXG4gIGFzeW5jIHJ1bihtb2RlLCBmKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZnVuY3Rpb25zIHJ1biBzZXF1ZW50aWFsbHkuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy4jcnVuQ2hhaW4udGhlbigoKSA9PiB0aGlzLiNydW4obW9kZSwgZikpO1xuICAgIHRoaXMuI3J1bkNoYWluID0gcmVzdWx0LmNhdGNoKCgpID0+IHt9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCVHJhbnNhY3Rpb25Nb2RlfSBtb2RlXG4gICAqIEBwYXJhbSB7KHN0b3JlczogT2JqZWN0LjxzdHJpbmcsIE9iamVjdFN0b3JlPikgPT4gYW55fSBmIFxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGFzeW5jICNydW4obW9kZSwgZikge1xuICAgIGNvbnN0IGRiID0gdGhpcy4jZGIgPz8gYXdhaXQgdGhpcy4jZGJSZWFkeTtcbiAgICBpZiAobW9kZSA9PT0gJ3JlYWR3cml0ZScgJiYgdGhpcy4jdHg/Lm1vZGUgPT09ICdyZWFkb25seScpIHtcbiAgICAgIC8vIE1vZGUgcmVxdWlyZXMgYSBuZXcgdHJhbnNhY3Rpb24uXG4gICAgICB0aGlzLiN0eCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuI3R4VGltZXN0YW1wID4gTUFYX1RSQU5TQUNUSU9OX0xJRkVUSU1FX01JTExJUykge1xuICAgICAgLy8gQ2hyb21lIHRpbWVzIG91dCB0cmFuc2FjdGlvbnMgYWZ0ZXIgNjAgc2Vjb25kcyBzbyByZWZyZXNoIHByZWVtcHRpdmVseS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuI3R4Py5jb21taXQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwbGljaXQgY29tbWl0IGNhbiBmYWlsIGJ1dCB0aGlzIGNhbiBiZSBpZ25vcmVkIGlmIGl0IHdpbGxcbiAgICAgICAgLy8gYXV0by1jb21taXQgYW55d2F5LlxuICAgICAgICBpZiAoZS5uYW1lICE9PSAnSW52YWxpZFN0YXRlRXJyb3InKSB0aHJvdyBlO1xuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIHRvIHRoZSBuZXh0IHRhc2sgdG8gYWxsb3cgcHJvY2Vzc2luZy5cbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlKSk7XG4gICAgICB0aGlzLiN0eCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUnVuIHRoZSB1c2VyIGZ1bmN0aW9uIHdpdGggYSByZXRyeSBpbiBjYXNlIHRoZSB0cmFuc2FjdGlvbiBpcyBpbnZhbGlkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XG4gICAgICBpZiAoIXRoaXMuI3R4KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy4jdHggPSBkYi50cmFuc2FjdGlvbihkYi5vYmplY3RTdG9yZU5hbWVzLCBtb2RlLCB0aGlzLiN0eE9wdGlvbnMpO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSB0aGlzLiN0eFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICAgIC8vIENoYWluIHRoZSByZXN1bHQgb2YgZXZlcnkgdHJhbnNhY3Rpb24uIElmIGFueSB0cmFuc2FjdGlvbiBpc1xuICAgICAgICAvLyBhYm9ydGVkIHRoZW4gdGhlIG5leHQgc3luYygpIGNhbGwgd2lsbCB0aHJvdy5cbiAgICAgICAgdGhpcy4jcHV0Q2hhaW4gPSB0aGlzLiNwdXRDaGFpbi50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI3R4ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0eCA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbG9nKGB0cmFuc2FjdGlvbiAke21hcFR4VG9JZC5nZXQoZXZlbnQudGFyZ2V0KX0gY29tcGxldGVgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4jdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybigndHggYWJvcnQnLCAocGVyZm9ybWFuY2Uubm93KCkgLSB0aW1lc3RhbXApLzEwMDApO1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGNvbnN0IGUgPSBldmVudC50YXJnZXQuZXJyb3I7XG4gICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI3R4ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiN0eCA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbG9nKGB0cmFuc2FjdGlvbiAke21hcFR4VG9JZC5nZXQoZXZlbnQudGFyZ2V0KX0gYWJvcnRlZGAsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvZyhgbmV3IHRyYW5zYWN0aW9uICR7bmV4dFR4SWR9ICR7bW9kZX1gKTtcbiAgICAgICAgbWFwVHhUb0lkLnNldCh0aGlzLiN0eCwgbmV4dFR4SWQrKyk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0b3JlcyA9IE9iamVjdC5mcm9tRW50cmllcyhBcnJheS5mcm9tKGRiLm9iamVjdFN0b3JlTmFtZXMsIG5hbWUgPT4ge1xuICAgICAgICAgIHJldHVybiBbbmFtZSwgbmV3IE9iamVjdFN0b3JlKHRoaXMuI3R4Lm9iamVjdFN0b3JlKG5hbWUpKV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGYoc3RvcmVzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy4jdHggPSBudWxsO1xuICAgICAgICBpZiAoaSkgdGhyb3cgZTtcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdyZXRyeWluZyB3aXRoIG5ldyB0cmFuc2FjdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN5bmMoKSB7XG4gICAgLy8gV2FpdCB1bnRpbCBhbGwgdHJhbnNhY3Rpb25zIHNpbmNlIHRoZSBwcmV2aW91cyBzeW5jIGhhdmUgY29tbWl0dGVkLlxuICAgIC8vIFRocm93IGlmIGFueSB0cmFuc2FjdGlvbiBmYWlsZWQuXG4gICAgYXdhaXQgdGhpcy4jcnVuQ2hhaW47XG4gICAgYXdhaXQgdGhpcy4jcHV0Q2hhaW47XG4gICAgdGhpcy4jcHV0Q2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBjb252ZXJ0IElEQlJlcXVlc3QgdG8gUHJvbWlzZS5cbiAqIEBwYXJhbSB7SURCUmVxdWVzdH0gcmVxdWVzdCBcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiB3cmFwUmVxdWVzdChyZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCkpO1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcikpO1xuICB9KTtcbn1cblxuLy8gSURCT2JqZWN0U3RvcmUgd3JhcHBlciBwYXNzZWQgdG8gSURCQ29udGV4dCBydW4gZnVuY3Rpb25zLlxuY2xhc3MgT2JqZWN0U3RvcmUge1xuICAjb2JqZWN0U3RvcmU7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCT2JqZWN0U3RvcmV9IG9iamVjdFN0b3JlIFxuICAgKi9cbiAgY29uc3RydWN0b3Iob2JqZWN0U3RvcmUpIHtcbiAgICB0aGlzLiNvYmplY3RTdG9yZSA9IG9iamVjdFN0b3JlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCVmFsaWRLZXl8SURCS2V5UmFuZ2V9IHF1ZXJ5IFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldChxdWVyeSkge1xuICAgIGxvZyhgZ2V0ICR7dGhpcy4jb2JqZWN0U3RvcmUubmFtZX1gLCBxdWVyeSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI29iamVjdFN0b3JlLmdldChxdWVyeSk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SURCVmFsaWRLZXl8SURCS2V5UmFuZ2V9IHF1ZXJ5IFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gICBnZXRBbGwocXVlcnksIGNvdW50KSB7XG4gICAgbG9nKGBnZXRBbGwgJHt0aGlzLiNvYmplY3RTdG9yZS5uYW1lfWAsIHF1ZXJ5LCBjb3VudCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI29iamVjdFN0b3JlLmdldEFsbChxdWVyeSwgY291bnQpO1xuICAgIHJldHVybiB3cmFwUmVxdWVzdChyZXF1ZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lEQlZhbGlkS2V5fElEQktleVJhbmdlfSBxdWVyeSBcbiAgICogQHJldHVybnMge1Byb21pc2U8SURCVmFsaWRLZXk+fVxuICAgKi9cbiAgZ2V0S2V5KHF1ZXJ5KSB7XG4gICAgbG9nKGBnZXRLZXkgJHt0aGlzLiNvYmplY3RTdG9yZS5uYW1lfWAsIHF1ZXJ5KTtcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy4jb2JqZWN0U3RvcmUuZ2V0S2V5KHF1ZXJ5KTtcbiAgICByZXR1cm4gd3JhcFJlcXVlc3QocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtJREJWYWxpZEtleXxJREJLZXlSYW5nZX0gcXVlcnkgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgIGdldEFsbEtleXMocXVlcnksIGNvdW50KSB7XG4gICAgbG9nKGBnZXRBbGxLZXlzICR7dGhpcy4jb2JqZWN0U3RvcmUubmFtZX1gLCBxdWVyeSwgY291bnQpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLiNvYmplY3RTdG9yZS5nZXRBbGxLZXlzKHF1ZXJ5LCBjb3VudCk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge0lEQlZhbGlkS2V5fSBba2V5XSBcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICAgcHV0KHZhbHVlLCBrZXkpIHtcbiAgICBsb2coYHB1dCAke3RoaXMuI29iamVjdFN0b3JlLm5hbWV9YCwgdmFsdWUsIGtleSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI29iamVjdFN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICByZXR1cm4gd3JhcFJlcXVlc3QocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtJREJWYWxpZEtleXxJREJLZXlSYW5nZX0gcXVlcnkgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgIGRlbGV0ZShxdWVyeSkge1xuICAgIGxvZyhgZGVsZXRlICR7dGhpcy4jb2JqZWN0U3RvcmUubmFtZX1gLCBxdWVyeSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI29iamVjdFN0b3JlLmRlbGV0ZShxdWVyeSk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgbG9nKGBjbGVhciAke3RoaXMuI29iamVjdFN0b3JlLm5hbWV9YCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI29iamVjdFN0b3JlLmNsZWFyKCk7XG4gICAgcmV0dXJuIHdyYXBSZXF1ZXN0KHJlcXVlc3QpO1xuICB9XG5cbiAgaW5kZXgobmFtZSkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy4jb2JqZWN0U3RvcmUuaW5kZXgobmFtZSkpO1xuICB9XG59XG5cbmNsYXNzIEluZGV4IHtcbiAgLyoqIEB0eXBlIHtJREJJbmRleH0gKi8gI2luZGV4O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lEQkluZGV4fSBpbmRleCBcbiAgICovXG4gICBjb25zdHJ1Y3RvcihpbmRleCkge1xuICAgIHRoaXMuI2luZGV4ID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtJREJWYWxpZEtleXxJREJLZXlSYW5nZX0gcXVlcnkgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElEQlZhbGlkS2V5W10+fVxuICAgKi9cbiAgZ2V0QWxsS2V5cyhxdWVyeSwgY291bnQpIHtcbiAgICBsb2coYElEQkluZGV4LmdldEFsbEtleXMgJHt0aGlzLiNpbmRleC5vYmplY3RTdG9yZS5uYW1lfTwke3RoaXMuI2luZGV4Lm5hbWV9PmAsIHF1ZXJ5LCBjb3VudCk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuI2luZGV4LmdldEFsbEtleXMocXVlcnksIGNvdW50KTtcbiAgICByZXR1cm4gd3JhcFJlcXVlc3QocmVxdWVzdCk7XG4gIH1cbn0iLCIvLyBDb3B5cmlnaHQgMjAyMiBSb3kgVC4gSGFzaGltb3RvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuaW1wb3J0ICogYXMgVkZTIGZyb20gJy4uL1ZGUy5qcyc7XG5cbmNvbnN0IExPQ0tfVFlQRV9NQVNLID1cbiAgVkZTLlNRTElURV9MT0NLX05PTkUgfFxuICBWRlMuU1FMSVRFX0xPQ0tfU0hBUkVEIHxcbiAgVkZTLlNRTElURV9MT0NLX1JFU0VSVkVEIHxcbiAgVkZTLlNRTElURV9MT0NLX1BFTkRJTkcgfFxuICBWRlMuU1FMSVRFX0xPQ0tfRVhDTFVTSVZFO1xuXG5leHBvcnQgY2xhc3MgV2ViTG9ja3NCYXNlIHtcbiAgZ2V0IHN0YXRlKCkgeyByZXR1cm4gdGhpcy4jc3RhdGU7IH1cbiAgI3N0YXRlID0gVkZTLlNRTElURV9MT0NLX05PTkU7XG5cbiAgdGltZW91dE1pbGxpcyA9IDA7XG5cbiAgLyoqIEB0eXBlIHtNYXA8c3RyaW5nLCAodmFsdWU6IGFueSkgPT4gdm9pZD59ICovICNyZWxlYXNlcnMgPSBuZXcgTWFwKCk7XG4gIC8qKiBAdHlwZSB7UHJvbWlzZTwwfDV8Mzg1MD59ICovICNwZW5kaW5nID0gUHJvbWlzZS5yZXNvbHZlKDApO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPDB8NXwzODUwPn0gU1FMSVRFX09LLCBTUUxJVEVfQlVTWSwgU1FMSVRFX0lPRVJSX0xPQ0tcbiAgICovXG4gIGFzeW5jIGxvY2soZmxhZ3MpIHtcbiAgICByZXR1cm4gdGhpcy4jYXBwbHkodGhpcy4jbG9jaywgZmxhZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge1Byb21pc2U8MHw1fDM4NTA+fSBTUUxJVEVfT0ssIFNRTElURV9JT0VSUl9MT0NLXG4gICAqL1xuICBhc3luYyB1bmxvY2soZmxhZ3MpIHtcbiAgICByZXR1cm4gdGhpcy4jYXBwbHkodGhpcy4jdW5sb2NrLCBmbGFncyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBhc3luYyBpc1NvbWV3aGVyZVJlc2VydmVkKCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0geyh0YXJnZXRTdGF0ZTogbnVtYmVyKSA9PiB2b2lkfSBtZXRob2QgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICovXG4gIGFzeW5jICNhcHBseShtZXRob2QsIGZsYWdzKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGUgPSBmbGFncyAmIExPQ0tfVFlQRV9NQVNLO1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3JjZSBsb2NrcyBhbmQgdW5sb2NrcyB0byBydW4gc2VxdWVudGlhbGx5LiBUaGlzIGFsbG93cyBub3RcbiAgICAgIC8vIHdhaXRpbmcgZm9yIHVubG9ja3MgdG8gY29tcGxldGUuXG4gICAgICBjb25zdCBjYWxsID0gKCkgPT4gbWV0aG9kLmNhbGwodGhpcywgdGFyZ2V0U3RhdGUpO1xuICAgICAgYXdhaXQgKHRoaXMuI3BlbmRpbmcgPSB0aGlzLiNwZW5kaW5nLnRoZW4oY2FsbCwgY2FsbCkpO1xuICAgICAgdGhpcy4jc3RhdGUgPSB0YXJnZXRTdGF0ZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgfVxuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0xPQ0s7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgI2xvY2sodGFyZ2V0U3RhdGUpIHtcbiAgICBpZiAodGFyZ2V0U3RhdGUgPT09IHRoaXMuI3N0YXRlKSByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICBzd2l0Y2ggKHRoaXMuI3N0YXRlKSB7XG4gICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19OT05FOlxuICAgICAgICBzd2l0Y2ggKHRhcmdldFN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfU0hBUkVEOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX05PTkV0b1NIQVJFRCgpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgdHJhbnNpdGlvbiAke3RoaXMuI3N0YXRlfSAtPiAke3RhcmdldFN0YXRlfWApO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1NIQVJFRDpcbiAgICAgICAgc3dpdGNoICh0YXJnZXRTdGF0ZSkge1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1JFU0VSVkVEOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1NIQVJFRHRvUkVTRVJWRUQoKTtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19FWENMVVNJVkU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fU0hBUkVEdG9FWENMVVNJVkUoKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHRyYW5zaXRpb24gJHt0aGlzLiNzdGF0ZX0gLT4gJHt0YXJnZXRTdGF0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19SRVNFUlZFRDpcbiAgICAgICAgc3dpdGNoICh0YXJnZXRTdGF0ZSkge1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX0VYQ0xVU0lWRTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9SRVNFUlZFRHRvRVhDTFVTSVZFKCk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2l0aW9uICR7dGhpcy4jc3RhdGV9IC0+ICR7dGFyZ2V0U3RhdGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHRyYW5zaXRpb24gJHt0aGlzLiNzdGF0ZX0gLT4gJHt0YXJnZXRTdGF0ZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyAjdW5sb2NrKHRhcmdldFN0YXRlKSB7XG4gICAgaWYgKHRhcmdldFN0YXRlID09PSB0aGlzLiNzdGF0ZSkgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIHN3aXRjaCAodGhpcy4jc3RhdGUpIHtcbiAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX0VYQ0xVU0lWRTpcbiAgICAgICAgc3dpdGNoICh0YXJnZXRTdGF0ZSkge1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1NIQVJFRDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9FWENMVVNJVkV0b1NIQVJFRCgpO1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX05PTkU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fRVhDTFVTSVZFdG9OT05FKCk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2l0aW9uICR7dGhpcy4jc3RhdGV9IC0+ICR7dGFyZ2V0U3RhdGV9YCk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfUkVTRVJWRUQ6XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0U3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19TSEFSRUQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fUkVTRVJWRUR0b1NIQVJFRCgpO1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX05PTkU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fUkVTRVJWRUR0b05PTkUoKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHRyYW5zaXRpb24gJHt0aGlzLiNzdGF0ZX0gLT4gJHt0YXJnZXRTdGF0ZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19TSEFSRUQ6XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0U3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19OT05FOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1NIQVJFRHRvTk9ORSgpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgdHJhbnNpdGlvbiAke3RoaXMuI3N0YXRlfSAtPiAke3RhcmdldFN0YXRlfWApO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2l0aW9uICR7dGhpcy4jc3RhdGV9IC0+ICR7dGFyZ2V0U3RhdGV9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX05PTkV0b1NIQVJFRCgpIHtcbiAgfVxuXG4gIGFzeW5jIF9TSEFSRUR0b0VYQ0xVU0lWRSgpIHtcbiAgICBhd2FpdCB0aGlzLl9TSEFSRUR0b1JFU0VSVkVEKCk7XG4gICAgYXdhaXQgdGhpcy5fUkVTRVJWRUR0b0VYQ0xVU0lWRSgpO1xuICB9XG5cbiAgYXN5bmMgX1NIQVJFRHRvUkVTRVJWRUQoKSB7XG4gIH1cblxuICBhc3luYyBfUkVTRVJWRUR0b0VYQ0xVU0lWRSgpIHtcbiAgfVxuXG4gIGFzeW5jIF9FWENMVVNJVkV0b1JFU0VSVkVEKCkge1xuICB9XG5cbiAgYXN5bmMgX0VYQ0xVU0lWRXRvU0hBUkVEKCkge1xuICAgIGF3YWl0IHRoaXMuX0VYQ0xVU0lWRXRvUkVTRVJWRUQoKTtcbiAgICBhd2FpdCB0aGlzLl9SRVNFUlZFRHRvU0hBUkVEKCk7XG4gIH1cblxuICBhc3luYyBfRVhDTFVTSVZFdG9OT05FKCkge1xuICAgIGF3YWl0IHRoaXMuX0VYQ0xVU0lWRXRvUkVTRVJWRUQoKTtcbiAgICBhd2FpdCB0aGlzLl9SRVNFUlZFRHRvU0hBUkVEKCk7XG4gICAgYXdhaXQgdGhpcy5fU0hBUkVEdG9OT05FKCk7XG4gIH1cblxuICBhc3luYyBfUkVTRVJWRUR0b1NIQVJFRCgpIHtcbiAgfVxuXG4gIGFzeW5jIF9SRVNFUlZFRHRvTk9ORSgpIHtcbiAgICBhd2FpdCB0aGlzLl9SRVNFUlZFRHRvU0hBUkVEKCk7XG4gICAgYXdhaXQgdGhpcy5fU0hBUkVEdG9OT05FKCk7XG4gIH1cblxuICBhc3luYyBfU0hBUkVEdG9OT05FKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NrTmFtZSBcbiAgICogQHBhcmFtIHtMb2NrT3B0aW9uc30gb3B0aW9ucyBcbiAgICogQHJldHVybnMge1Byb21pc2U8P0xvY2s+fVxuICAgKi9cbiAgX2FjcXVpcmVXZWJMb2NrKGxvY2tOYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5sb2Nrcy5yZXF1ZXN0KGxvY2tOYW1lLCBvcHRpb25zLCBsb2NrID0+IHtcbiAgICAgICAgICByZXNvbHZlKGxvY2spO1xuICAgICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVsZWFzZSA9PiB0aGlzLiNyZWxlYXNlcnMuc2V0KGxvY2tOYW1lLCByZWxlYXNlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2tOYW1lIFxuICAgKi9cbiAgX3JlbGVhc2VXZWJMb2NrKGxvY2tOYW1lKSB7XG4gICAgdGhpcy4jcmVsZWFzZXJzLmdldChsb2NrTmFtZSk/LigpO1xuICAgIHRoaXMuI3JlbGVhc2Vycy5kZWxldGUobG9ja05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NrTmFtZSBcbiAgICovXG4gIGFzeW5jIF9wb2xsV2ViTG9jayhsb2NrTmFtZSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgbmF2aWdhdG9yLmxvY2tzLnF1ZXJ5KCk7XG4gICAgcmV0dXJuIHF1ZXJ5LmhlbGQuZmluZCgoe25hbWV9KSA9PiBuYW1lID09PSBsb2NrTmFtZSk/Lm1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgez9BYm9ydFNpZ25hbH1cbiAgICovXG4gIF9nZXRUaW1lb3V0U2lnbmFsKCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXRNaWxsaXMpIHtcbiAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gYWJvcnRDb250cm9sbGVyLmFib3J0KCksIHRoaXMudGltZW91dE1pbGxpcyk7XG4gICAgICByZXR1cm4gYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2ViTG9ja3NFeGNsdXNpdmUgZXh0ZW5kcyBXZWJMb2Nrc0Jhc2Uge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9sb2NrTmFtZSA9IG5hbWUgKyAnLW91dGVyJztcbiAgICB0aGlzLl9yZXNlcnZlZE5hbWUgPSBuYW1lICsgJy1yZXNlcnZlZCc7XG4gIH1cblxuICBhc3luYyBpc1NvbWV3aGVyZVJlc2VydmVkKCkge1xuICAgIGNvbnN0IG1vZGUgPSBhd2FpdCB0aGlzLl9wb2xsV2ViTG9jayh0aGlzLl9yZXNlcnZlZE5hbWUpO1xuICAgIHJldHVybiBtb2RlID09PSAnZXhjbHVzaXZlJztcbiAgfVxuXG4gIGFzeW5jIF9OT05FdG9TSEFSRUQoKSB7XG4gICAgYXdhaXQgdGhpcy5fYWNxdWlyZVdlYkxvY2sodGhpcy5fbG9ja05hbWUsIHtcbiAgICAgIG1vZGU6ICdleGNsdXNpdmUnLFxuICAgICAgc2lnbmFsOiB0aGlzLl9nZXRUaW1lb3V0U2lnbmFsKClcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9TSEFSRUR0b1JFU0VSVkVEKCkge1xuICAgIGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX3Jlc2VydmVkTmFtZSwge1xuICAgICAgbW9kZTogJ2V4Y2x1c2l2ZScsXG4gICAgICBzaWduYWw6IHRoaXMuX2dldFRpbWVvdXRTaWduYWwoKVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgX1JFU0VSVkVEdG9TSEFSRUQoKSB7XG4gICAgdGhpcy5fcmVsZWFzZVdlYkxvY2sodGhpcy5fcmVzZXJ2ZWROYW1lKTtcbiAgfVxuXG4gIGFzeW5jIF9TSEFSRUR0b05PTkUoKSB7XG4gICAgdGhpcy5fcmVsZWFzZVdlYkxvY2sodGhpcy5fbG9ja05hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJMb2Nrc1NoYXJlZCBleHRlbmRzIFdlYkxvY2tzQmFzZSB7XG4gIG1heFJldHJ5TWlsbGlzID0gMTAwMDtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9vdXRlck5hbWUgPSBuYW1lICsgJy1vdXRlcic7XG4gICAgdGhpcy5faW5uZXJOYW1lID0gbmFtZSArICctaW5uZXInO1xuICB9XG5cbiAgYXN5bmMgaXNTb21ld2hlcmVSZXNlcnZlZCgpIHtcbiAgICBjb25zdCBtb2RlID0gYXdhaXQgdGhpcy5fcG9sbFdlYkxvY2sodGhpcy5fb3V0ZXJOYW1lKTtcbiAgICByZXR1cm4gbW9kZSA9PT0gJ2V4Y2x1c2l2ZSc7XG4gIH1cblxuICBhc3luYyBfTk9ORXRvU0hBUkVEKCkge1xuICAgIGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX291dGVyTmFtZSwge1xuICAgICAgbW9kZTogJ3NoYXJlZCcsXG4gICAgICBzaWduYWw6IHRoaXMuX2dldFRpbWVvdXRTaWduYWwoKVxuICAgIH0pO1xuICAgIGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX2lubmVyTmFtZSwge1xuICAgICAgbW9kZTogJ3NoYXJlZCcsXG4gICAgICBzaWduYWw6IHRoaXMuX2dldFRpbWVvdXRTaWduYWwoKVxuICAgIH0pO1xuICAgIHRoaXMuX3JlbGVhc2VXZWJMb2NrKHRoaXMuX291dGVyTmFtZSk7XG4gIH1cblxuICBhc3luYyBfU0hBUkVEdG9SRVNFUlZFRCgpIHtcbiAgICBsZXQgdGltZW91dE1pbGxpcyA9IDE7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IHRoZSBvdXRlciBsb2NrIHdpdGhvdXQgYmxvY2tpbmcuXG4gICAgICBjb25zdCBpc0xvY2tlZCA9IGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX291dGVyTmFtZSwge1xuICAgICAgICBtb2RlOiAnZXhjbHVzaXZlJyxcbiAgICAgICAgaWZBdmFpbGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzTG9ja2VkKSBicmVhaztcblxuICAgICAgaWYgKGF3YWl0IHRoaXMuaXNTb21ld2hlcmVSZXNlcnZlZCgpKSB7XG4gICAgICAgIC8vIFNvbWVvbmUgZWxzZSBoYXMgYSByZXNlcnZlZCBsb2NrIHNvIHJldHJ5IGNhbm5vdCBzdWNjZWVkLlxuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCcnLCAnQWJvcnRFcnJvcicpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dE1pbGxpcykpO1xuICAgICAgdGltZW91dE1pbGxpcyA9IE1hdGgubWluKDIgKiB0aW1lb3V0TWlsbGlzLCB0aGlzLm1heFJldHJ5TWlsbGlzKTtcbiAgICB9XG4gICAgdGhpcy5fcmVsZWFzZVdlYkxvY2sodGhpcy5faW5uZXJOYW1lKTtcbiAgfVxuXG4gIGFzeW5jIF9SRVNFUlZFRHRvRVhDTFVTSVZFKCkge1xuICAgIGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX2lubmVyTmFtZSwge1xuICAgICAgbW9kZTogJ2V4Y2x1c2l2ZScsXG4gICAgICBzaWduYWw6IHRoaXMuX2dldFRpbWVvdXRTaWduYWwoKVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgX0VYQ0xVU0lWRXRvUkVTRVJWRUQoKSB7XG4gICAgdGhpcy5fcmVsZWFzZVdlYkxvY2sodGhpcy5faW5uZXJOYW1lKTtcbiAgfVxuXG4gIGFzeW5jIF9SRVNFUlZFRHRvU0hBUkVEKCkge1xuICAgIGF3YWl0IHRoaXMuX2FjcXVpcmVXZWJMb2NrKHRoaXMuX2lubmVyTmFtZSwgeyBtb2RlOiAnc2hhcmVkJyB9KTtcbiAgICB0aGlzLl9yZWxlYXNlV2ViTG9jayh0aGlzLl9vdXRlck5hbWUpO1xuICB9XG5cbiAgYXN5bmMgX1NIQVJFRHRvTk9ORSgpIHtcbiAgICB0aGlzLl9yZWxlYXNlV2ViTG9jayh0aGlzLl9pbm5lck5hbWUpO1xuICB9XG59IiwiLy8gQ29weXJpZ2h0IDIwMjEgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuaW1wb3J0ICogYXMgU1FMaXRlIGZyb20gJy4vc3FsaXRlLWNvbnN0YW50cy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuXG5jb25zdCBNQVhfSU5UNjQgPSAweDdmZmZmZmZmZmZmZmZmZmZuO1xuY29uc3QgTUlOX0lOVDY0ID0gLTB4ODAwMDAwMDAwMDAwMDAwMG47XG5cbmV4cG9ydCBjbGFzcyBTUUxpdGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cbn1cblxuY29uc3QgYXN5bmMgPSB0cnVlO1xuXG4vKipcbiAqIEJ1aWxkcyBhIEphdmFzY3JpcHQgQVBJIGZyb20gdGhlIEVtc2NyaXB0ZW4gbW9kdWxlLiBUaGlzIEFQSSBpcyBzdGlsbFxuICogbG93LWxldmVsIGFuZCBjbG9zZWx5IGNvcnJlc3BvbmRzIHRvIHRoZSBDIEFQSSBleHBvcnRlZCBieSB0aGUgbW9kdWxlLFxuICogYnV0IGRpZmZlcnMgaW4gc29tZSBzcGVjaWZpY3MgbGlrZSB0aHJvd2luZyBleGNlcHRpb25zIG9uIGVycm9ycy5cbiAqIEBwYXJhbSB7Kn0gTW9kdWxlIFNRTGl0ZSBFbXNjcmlwdGVuIG1vZHVsZVxuICogQHJldHVybnMge1NRTGl0ZUFQSX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZhY3RvcnkoTW9kdWxlKSB7XG4gIC8qKiBAdHlwZSB7U1FMaXRlQVBJfSAqLyBjb25zdCBzcWxpdGUzID0ge307XG5cbiAgY29uc3Qgc3FsaXRlRnJlZUFkZHJlc3MgPSBNb2R1bGUuX2dldFNxbGl0ZUZyZWUoKTtcblxuICAvLyBBbGxvY2F0ZSBzb21lIHNwYWNlIGZvciAzMi1iaXQgcmV0dXJuZWQgdmFsdWVzLlxuICBjb25zdCB0bXAgPSBNb2R1bGUuX21hbGxvYyg4KTtcbiAgY29uc3QgdG1wUHRyID0gW3RtcCwgdG1wICsgNF07XG5cbiAgLy8gQ29udmVydCBhIEpTIHN0cmluZyB0byBhIEMgc3RyaW5nLiBzcWxpdGUzX21hbGxvYyBpcyB1c2VkIHRvIGFsbG9jYXRlXG4gIC8vIG1lbW9yeSAodXNlIHNxbGl0ZTNfZnJlZSB0byBkZWFsbG9jYXRlKS5cbiAgZnVuY3Rpb24gY3JlYXRlVVRGOChzKSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuIDA7XG4gICAgY29uc3QgbiA9IE1vZHVsZS5sZW5ndGhCeXRlc1VURjgocyk7XG4gICAgY29uc3QgenRzID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhuICsgMSk7XG4gICAgTW9kdWxlLnN0cmluZ1RvVVRGOChzLCB6dHMsIG4gKyAxKTtcbiAgICByZXR1cm4genRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlIDMyLWJpdCBudW1iZXJzIGludG8gYSA2NC1iaXQgKHNpZ25lZCkgQmlnSW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbG8zMlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGkzMlxuICAgKiBAcmV0dXJucyB7YmlnaW50fVxuICAgKi9cbiAgZnVuY3Rpb24gY3Z0MzJ4MlRvQmlnSW50KGxvMzIsIGhpMzIpIHtcbiAgICByZXR1cm4gKEJpZ0ludChoaTMyKSA8PCAzMm4pIHwgKEJpZ0ludChsbzMyKSAmIDB4ZmZmZmZmZmZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZSAzMi1iaXQgbnVtYmVycyBhbmQgcmV0dXJuIGFzIG51bWJlciBvciBCaWdJbnQsIGRlcGVuZGluZ1xuICAgKiBvbiB0aGUgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsbzMyIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaGkzMiBcbiAgICogQHJldHVybnMge251bWJlcnxiaWdpbnR9XG4gICAqL1xuICBjb25zdCBjdnQzMngyQXNTYWZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoaU1heCA9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgPj4gMzJuO1xuICAgIGNvbnN0IGhpTWluID0gQmlnSW50KE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKSA+PiAzMm47XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGxvMzIsIGhpMzIpIHtcbiAgICAgIGlmIChoaTMyID4gaGlNYXggfHwgaGkzMiA8IGhpTWluKSB7XG4gICAgICAgIC8vIENhbid0IGJlIGV4cHJlc3NlZCBhcyBhIE51bWJlciBzbyB1c2UgQmlnSW50LlxuICAgICAgICByZXR1cm4gY3Z0MzJ4MlRvQmlnSW50KGxvMzIsIGhpMzIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ29tYmluZSB0aGUgdXBwZXIgYW5kIGxvd2VyIDMyLWJpdCBudW1iZXJzLiBUaGUgY29tcGxpY2F0aW9uIGlzXG4gICAgICAgIC8vIHRoYXQgbG8zMiBpcyBhIHNpZ25lZCBpbnRlZ2VyIHdoaWNoIG1ha2VzIG1hbmlwdWxhdGluZyBpdHMgYml0c1xuICAgICAgICAvLyBhIGxpdHRsZSB0cmlja3kgLSB0aGUgc2lnbiBiaXQgZ2V0cyBoYW5kbGVkIHNlcGFyYXRlbHkuXG4gICAgICAgIHJldHVybiAoaGkzMiAqIDB4MTAwMDAwMDAwKSArIChsbzMyICYgMHg3ZmZmZmZmZikgLSAobG8zMiAmIDB4ODAwMDAwMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICBjb25zdCBkYXRhYmFzZXMgPSBuZXcgU2V0KCk7XG4gIGZ1bmN0aW9uIHZlcmlmeURhdGFiYXNlKGRiKSB7XG4gICAgaWYgKCFkYXRhYmFzZXMuaGFzKGRiKSkge1xuICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCdub3QgYSBkYXRhYmFzZScsIFNRTGl0ZS5TUUxJVEVfTUlTVVNFKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXBTdG10VG9EQiA9IG5ldyBNYXAoKTtcbiAgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0bXQpIHtcbiAgICBpZiAoIW1hcFN0bXRUb0RCLmhhcyhzdG10KSkge1xuICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCdub3QgYSBzdGF0ZW1lbnQnLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gICAgfVxuICB9XG5cbiAgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24gPSBmdW5jdGlvbiAoc3RtdCwgYmluZGluZ3MpIHtcbiAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmluZGluZ3MpO1xuICAgIGNvbnN0IG5CaW5kaW5ncyA9IHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfY291bnQoc3RtdCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbkJpbmRpbmdzOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGlzQXJyYXkgPyBpIC0gMSA6IHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfbmFtZShzdG10LCBpKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gYmluZGluZ3Nba2V5XTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNxbGl0ZTMuYmluZChzdG10LCBpLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX09LO1xuICB9O1xuXG4gIHNxbGl0ZTMuYmluZCA9IGZ1bmN0aW9uIChzdG10LCBpLCB2YWx1ZSkge1xuICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaWYgKHZhbHVlID09PSAodmFsdWUgfCAwKSkge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfaW50KHN0bXQsIGksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX2RvdWJsZShzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfdGV4dChzdG10LCBpLCB2YWx1ZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF9ibG9iKHN0bXQsIGksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfbnVsbChzdG10LCBpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF9pbnQ2NChzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEV4aXN0aW5nIGJpbmRpbmcgKG9yIE5VTEwpIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICByZXR1cm4gU1FMaXRlLlNRTElURV9OT1RJQ0U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmtub3duIGJpbmRpbmcgY29udmVydGVkIHRvIG51bGwnLCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF9udWxsKHN0bXQsIGkpO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNxbGl0ZTMuYmluZF9ibG9iID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBieXRlTGVuZ3RoID0gdmFsdWUuYnl0ZUxlbmd0aCA/PyB2YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBwdHIgPSBNb2R1bGUuX3NxbGl0ZTNfbWFsbG9jKGJ5dGVMZW5ndGgpO1xuICAgICAgTW9kdWxlLkhFQVBVOC5zdWJhcnJheShwdHIpLnNldCh2YWx1ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHB0ciwgYnl0ZUxlbmd0aCwgc3FsaXRlRnJlZUFkZHJlc3MpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfY291bnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfY291bnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfZG91YmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfZG91YmxlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfaW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfaW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBpZiAodmFsdWUgPiAweDdmZmZmZmZmIHx8IHZhbHVlIDwgLTB4ODAwMDAwMDApIHJldHVybiBTUUxpdGUuU1FMSVRFX1JBTkdFO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfaW50NjQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaSwgdmFsdWUpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGlmICh2YWx1ZSA+IE1BWF9JTlQ2NCB8fCB2YWx1ZSA8IE1JTl9JTlQ2NCkgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfUkFOR0U7XG5cbiAgICAgIGNvbnN0IGxvMzIgPSB2YWx1ZSAmIDB4ZmZmZmZmZmZuO1xuICAgICAgY29uc3QgaGkzMiA9IHZhbHVlID4+IDMybjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSwgTnVtYmVyKGxvMzIpLCBOdW1iZXIoaGkzMikpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9udWxsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfbnVsbCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGkpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX3BhcmFtZXRlcl9uYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGkpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfdGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX3RleHQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpLCB2YWx1ZSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcHRyID0gY3JlYXRlVVRGOCh2YWx1ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHB0ciwgLTEsIHNxbGl0ZUZyZWVBZGRyZXNzKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNoYW5nZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY2hhbmdlcyc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGIpIHtcbiAgICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jbG9zZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jbG9zZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkYikge1xuICAgICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihkYik7XG4gICAgICBkYXRhYmFzZXMuZGVsZXRlKGRiKTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBkYik7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbiA9IGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgIGNvbnN0IHR5cGUgPSBzcWxpdGUzLmNvbHVtbl90eXBlKHN0bXQsIGlDb2wpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0JMT0I6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmNvbHVtbl9ibG9iKHN0bXQsIGlDb2wpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0ZMT0FUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy5jb2x1bW5fZG91YmxlKHN0bXQsIGlDb2wpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0lOVEVHRVI6XG4gICAgICAgIGNvbnN0IGxvMzIgPSBzcWxpdGUzLmNvbHVtbl9pbnQoc3RtdCwgaUNvbCk7XG4gICAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgICAgcmV0dXJuIGN2dDMyeDJBc1NhZmUobG8zMiwgaGkzMik7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfTlVMTDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfVEVYVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMuY29sdW1uX3RleHQoc3RtdCwgaUNvbCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ3Vua25vd24gdHlwZScsIHR5cGUpO1xuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLmNvbHVtbl9ibG9iID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9ibG9iJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgbkJ5dGVzID0gc3FsaXRlMy5jb2x1bW5fYnl0ZXMoc3RtdCwgaUNvbCk7XG4gICAgICBjb25zdCBhZGRyZXNzID0gZihzdG10LCBpQ29sKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5IRUFQVTguc3ViYXJyYXkoYWRkcmVzcywgYWRkcmVzcyArIG5CeXRlcyk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9ieXRlcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fYnl0ZXMnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fY291bnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2NvdW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fZG91YmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9kb3VibGUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5faW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXRyaWV2ZSBpbnQ2NCBidXQgdXNlIG9ubHkgdGhlIGxvd2VyIDMyIGJpdHMuIFRoZSB1cHBlciAzMi1iaXRzIGFyZVxuICAgIC8vIGFjY2Vzc2libGUgd2l0aCBNb2R1bGUuZ2V0VGVtcFJldDAoKS5cbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICAvLyB0cmFjZShmbmFtZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9pbnQ2NCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5faW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCBsbzMyID0gZihzdG10LCBpQ29sKTtcbiAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGN2dDMyeDJUb0JpZ0ludChsbzMyLCBoaTMyKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX25hbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX25hbWUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fbmFtZXMgPSBmdW5jdGlvbiAoc3RtdCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICBjb25zdCBuQ29sdW1ucyA9IHNxbGl0ZTMuY29sdW1uX2NvdW50KHN0bXQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkNvbHVtbnM7ICsraSkge1xuICAgICAgY29sdW1ucy5wdXNoKHNxbGl0ZTMuY29sdW1uX25hbWUoc3RtdCwgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfTtcblxuICBzcWxpdGUzLmNvbHVtbl90ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl90ZXh0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX3R5cGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX3R5cGUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jcmVhdGVfZnVuY3Rpb24gPSBmdW5jdGlvbiAoZGIsIHpGdW5jdGlvbk5hbWUsIG5BcmcsIGVUZXh0UmVwLCBwQXBwLCB4RnVuYywgeFN0ZXAsIHhGaW5hbCkge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICBpZiAoeEZ1bmMgJiYgIXhTdGVwICYmICF4RmluYWwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5jcmVhdGVGdW5jdGlvbihkYiwgekZ1bmN0aW9uTmFtZSwgbkFyZywgZVRleHRSZXAsIHBBcHAsIHhGdW5jKTtcbiAgICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19jcmVhdGVfZnVuY3Rpb24nLCByZXN1bHQsIGRiKTtcbiAgICB9XG5cbiAgICBpZiAoIXhGdW5jICYmIHhTdGVwICYmIHhGaW5hbCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLmNyZWF0ZUFnZ3JlZ2F0ZShkYiwgekZ1bmN0aW9uTmFtZSwgbkFyZywgZVRleHRSZXAsIHBBcHAsIHhTdGVwLCB4RmluYWwpO1xuICAgICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbicsIHJlc3VsdCwgZGIpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignaW52YWxpZCBmdW5jdGlvbiBjb21iaW5hdGlvbicsIFNRTGl0ZS5TUUxJVEVfTUlTVVNFKTtcbiAgfTtcblxuICBzcWxpdGUzLmNyZWF0ZV9tb2R1bGUgPSBmdW5jdGlvbiAoZGIsIHpOYW1lLCBtb2R1bGUsIGFwcERhdGEpIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLmNyZWF0ZU1vZHVsZShkYiwgek5hbWUsIG1vZHVsZSwgYXBwRGF0YSk7XG4gICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX2NyZWF0ZV9tb2R1bGUnLCByZXN1bHQsIGRiKTtcbiAgfTtcblxuICBzcWxpdGUzLmRhdGFfY291bnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfZGF0YV9jb3VudCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuZGVjbGFyZV92dGFiID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2RlY2xhcmVfdnRhYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbnM6bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBWVGFiLCB6U1FMKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWVGFiLCB6U1FMKTtcbiAgICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19kZWNsYXJlX3Z0YWInLCByZXN1bHQpO1xuICAgIH1cbiAgfSkoKTtcblxuICBzcWxpdGUzLmV4ZWMgPSBhc3luYyBmdW5jdGlvbiAoZGIsIHNxbCwgY2FsbGJhY2spIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiLCBzcWwpKSB7XG4gICAgICBsZXQgY29sdW1ucztcbiAgICAgIHdoaWxlIChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkgPT09IFNRTGl0ZS5TUUxJVEVfUk9XKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zID8/IHNxbGl0ZTMuY29sdW1uX25hbWVzKHN0bXQpO1xuICAgICAgICAgIGNvbnN0IHJvdyA9IHNxbGl0ZTMucm93KHN0bXQpO1xuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHJvdywgY29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfT0s7XG4gIH07XG5cbiAgc3FsaXRlMy5ydW4gPSBhc3luYyBmdW5jdGlvbiAoZGIsIHNxbCwgcGFyYW1zKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBzdG10IG9mIHNxbGl0ZTMuc3RhdGVtZW50cyhkYiwgc3FsKSkge1xuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBzcWxpdGUzLmJpbmRfY29sbGVjdGlvbihzdG10LCBwYXJhbXMpXG4gICAgICB9XG4gICAgICBhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdClcbiAgICB9XG4gICAgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfT0s7XG4gIH07XG5cbiAgc3FsaXRlMy5leGVjV2l0aFBhcmFtcyA9IGFzeW5jIGZ1bmN0aW9uIChkYiwgc3FsLCBwYXJhbXMpIHtcbiAgICBsZXQgY29sdW1ucyA9IFtdO1xuICAgIGNvbnN0IHJvd3MgPSBbXVxuICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGIsIHNxbCkpIHtcbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1zKVxuICAgICAgfVxuICAgICAgd2hpbGUgKGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10KSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHtcbiAgICAgICAgY29sdW1ucyA9IGNvbHVtbnMubGVuZ3RoID09PSAwID8gc3FsaXRlMy5jb2x1bW5fbmFtZXMoc3RtdCkgOiBjb2x1bW5zO1xuICAgICAgICBjb25zdCByb3cgPSBzcWxpdGUzLnJvdyhzdG10KTtcbiAgICAgICAgcm93cy5wdXNoKHJvdylcbiAgICAgICAgLy8gYXdhaXQgY2FsbGJhY2socm93LCBjb2x1bW5zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICBjb2x1bW5zOiBjb2x1bW5zXG4gICAgfVxuICB9O1xuXG4gIHNxbGl0ZTMuZXhlY3V0ZUJhdGNoID0gYXN5bmMgZnVuY3Rpb24gKGRiLCBzcWxRdWVyaWVzLCBwYXJhbXMpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3FsaXRlMy5ydW4oZGIsIGBCRUdJTiBFWENMVVNJVkUgVFJBTlNBQ1RJT05gLCBudWxsKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcWxRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJpbmRQYXJhbXMgPSBwYXJhbXMgPyBwYXJhbXNbaV0gOiBudWxsO1xuICAgICAgICBsZXQgc3RtdDtcbiAgICAgICAgY29uc3Qgc3RyID0gc3FsaXRlMy5zdHJfbmV3KGRiLCBzcWxRdWVyaWVzW2ldKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzcWxQb2ludGVyID0gc3FsaXRlMy5zdHJfdmFsdWUoc3RyKVxuICAgICAgICAgIHN0bXQgPSBhd2FpdCBzcWxpdGUzLnByZXBhcmVfdjIoZGIsIHNxbFBvaW50ZXIpXG4gICAgICAgICAgaWYgKGJpbmRQYXJhbXMpIHtcbiAgICAgICAgICAgIHNxbGl0ZTMuYmluZF9jb2xsZWN0aW9uKHN0bXQuc3RtdCwgYmluZFBhcmFtcylcbiAgICAgICAgICB9XG4gICAgICAgICAgYXdhaXQgc3FsaXRlMy5zdGVwKHN0bXQuc3RtdClcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoc3RtdD8uc3RtdCkge1xuICAgICAgICAgICAgc3FsaXRlMy5maW5hbGl6ZShzdG10LnN0bXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcWxpdGUzLnN0cl9maW5pc2goc3RyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgc3FsaXRlMy5ydW4oZGIsIGBDT01NSVRgLCBudWxsKVxuICAgICAgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGF3YWl0IHNxbGl0ZTMucnVuKGRiLCBgUk9MTEJBQ0tgLCBudWxsKVxuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLmZpbmFsaXplID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2ZpbmFsaXplJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHN0bXQpIHtcbiAgICAgIGlmICghbWFwU3RtdFRvREIuaGFzKHN0bXQpKSB7XG4gICAgICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX01JU1VTRTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3RtdCk7XG5cbiAgICAgIGNvbnN0IGRiID0gbWFwU3RtdFRvREIuZ2V0KHN0bXQpO1xuICAgICAgbWFwU3RtdFRvREIuZGVsZXRlKHN0bXQpXG5cbiAgICAgIC8vIERvbid0IHRocm93IG9uIGVycm9yIGhlcmUuIFR5cGljYWxseSB0aGUgZXJyb3IgaGFzIGFscmVhZHkgYmVlblxuICAgICAgLy8gdGhyb3duIGFuZCBmaW5hbGl6ZSgpIGlzIHBhcnQgb2YgdGhlIGNsZWFudXAuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5nZXRfYXV0b2NvbW1pdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19nZXRfYXV0b2NvbW1pdCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMubGlidmVyc2lvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19saWJ2ZXJzaW9uJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCc6cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZigpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMubGlidmVyc2lvbl9udW1iZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfbGlidmVyc2lvbl9udW1iZXInO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJzpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5saW1pdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19saW1pdCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYiwgaWQsIG5ld1ZhbCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihkYiwgaWQsIG5ld1ZhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5vcGVuX3YyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX29wZW5fdjInO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ3Nubm46bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiAoekZpbGVuYW1lLCBmbGFncywgelZmcykge1xuICAgICAgZmxhZ3MgPSBmbGFncyB8fCBTUUxpdGUuU1FMSVRFX09QRU5fQ1JFQVRFIHwgU1FMaXRlLlNRTElURV9PUEVOX1JFQURXUklURTtcbiAgICAgIHpWZnMgPSBjcmVhdGVVVEY4KHpWZnMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZih6RmlsZW5hbWUsIHRtcFB0clswXSwgZmxhZ3MsIHpWZnMpO1xuXG4gICAgICBjb25zdCBkYiA9IE1vZHVsZS5nZXRWYWx1ZSh0bXBQdHJbMF0sICcqJyk7XG4gICAgICBkYXRhYmFzZXMuYWRkKGRiKTtcbiAgICAgIE1vZHVsZS5fc3FsaXRlM19mcmVlKHpWZnMpO1xuXG4gICAgICBNb2R1bGUuY2NhbGwoJ1JlZ2lzdGVyRXh0ZW5zaW9uRnVuY3Rpb25zJywgJ3ZvaWQnLCBbJ251bWJlciddLCBbZGJdKTtcbiAgICAgIGNoZWNrKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIGRiO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5wcmVwYXJlX3YyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ByZXBhcmVfdjInO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm5uOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRiLCBzcWwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoZGIsIHNxbCwgLTEsIHRtcFB0clswXSwgdG1wUHRyWzFdKTtcbiAgICAgIGNoZWNrKGZuYW1lLCByZXN1bHQsIGRiKTtcblxuICAgICAgY29uc3Qgc3RtdCA9IE1vZHVsZS5nZXRWYWx1ZSh0bXBQdHJbMF0sICcqJyk7XG4gICAgICBpZiAoc3RtdCkge1xuICAgICAgICBtYXBTdG10VG9EQi5zZXQoc3RtdCwgZGIpO1xuICAgICAgICByZXR1cm4geyBzdG10LCBzcWw6IE1vZHVsZS5nZXRWYWx1ZSh0bXBQdHJbMV0sICcqJykgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5wcm9ncmVzc19oYW5kbGVyID0gZnVuY3Rpb24gKGRiLCBuUHJvZ3Jlc3NPcHMsIGhhbmRsZXIsIHVzZXJEYXRhKSB7XG4gICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuICAgIE1vZHVsZS5wcm9ncmVzc0hhbmRsZXIoZGIsIG5Qcm9ncmVzc09wcywgaGFuZGxlciwgdXNlckRhdGEpO1xuICB9OztcblxuICBzcWxpdGUzLnJlc2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc2V0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3RtdCk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0ID0gZnVuY3Rpb24gKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gKHZhbHVlIHwgMCkpIHtcbiAgICAgICAgICBzcWxpdGUzLnJlc3VsdF9pbnQoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxbGl0ZTMucmVzdWx0X2RvdWJsZShjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBzcWxpdGUzLnJlc3VsdF90ZXh0KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfYmxvYihjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBzcWxpdGUzLnJlc3VsdF9udWxsKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5yZXN1bHRfaW50NjQoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybigndW5rbm93biByZXN1bHQgY29udmVydGVkIHRvIG51bGwnLCB2YWx1ZSk7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfbnVsbChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfTtcblxuICBzcWxpdGUzLnJlc3VsdF9ibG9iID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF9ibG9iJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0LCB2YWx1ZSkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHZhbHVlLmJ5dGVMZW5ndGggPz8gdmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3QgcHRyID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhieXRlTGVuZ3RoKTtcbiAgICAgIE1vZHVsZS5IRUFQVTguc3ViYXJyYXkocHRyKS5zZXQodmFsdWUpO1xuICAgICAgZihjb250ZXh0LCBwdHIsIGJ5dGVMZW5ndGgsIHNxbGl0ZUZyZWVBZGRyZXNzKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X2RvdWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfZG91YmxlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGYoY29udGV4dCwgdmFsdWUpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfaW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF9pbnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0LCB2YWx1ZSkge1xuICAgICAgZihjb250ZXh0LCB2YWx1ZSk7IC8vIHZvaWQgcmV0dXJuXG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdF9pbnQ2NCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfaW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA+IE1BWF9JTlQ2NCB8fCB2YWx1ZSA8IE1JTl9JTlQ2NCkgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfUkFOR0U7XG5cbiAgICAgIGNvbnN0IGxvMzIgPSB2YWx1ZSAmIDB4ZmZmZmZmZmZuO1xuICAgICAgY29uc3QgaGkzMiA9IHZhbHVlID4+IDMybjtcbiAgICAgIGYoY29udGV4dCwgTnVtYmVyKGxvMzIpLCBOdW1iZXIoaGkzMikpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfbnVsbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfbnVsbCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZihjb250ZXh0KTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X3RleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X3RleHQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgICBjb25zdCBwdHIgPSBjcmVhdGVVVEY4KHZhbHVlKTtcbiAgICAgIGYoY29udGV4dCwgcHRyLCAtMSwgc3FsaXRlRnJlZUFkZHJlc3MpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yb3cgPSBmdW5jdGlvbiAoc3RtdCkge1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIGNvbnN0IG5Db2x1bW5zID0gc3FsaXRlMy5kYXRhX2NvdW50KHN0bXQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkNvbHVtbnM7ICsraSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzcWxpdGUzLmNvbHVtbihzdG10LCBpKTtcblxuICAgICAgLy8gQ29weSBibG9iIGlmIGFsaWFzaW5nIHZvbGF0aWxlIFdlYkFzc2VtYmx5IG1lbW9yeS4gVGhpcyBhdm9pZHMgYW5cbiAgICAgIC8vIHVubmVjZXNzYXJ5IGNvcHkgaWYgdXNlcnMgbW9ua2V5IHBhdGNoIGNvbHVtbl9ibG9iIHRvIGNvcHkuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByb3cucHVzaCh2YWx1ZT8uYnVmZmVyID09PSBNb2R1bGUuSEVBUFU4LmJ1ZmZlciA/IHZhbHVlLnNsaWNlKCkgOiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgc3FsaXRlMy5zZXRfYXV0aG9yaXplciA9IGZ1bmN0aW9uIChkYiwgYXV0aEZ1bmN0aW9uLCB1c2VyRGF0YSkge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuc2V0QXV0aG9yaXplcihkYiwgYXV0aEZ1bmN0aW9uLCB1c2VyRGF0YSk7XG4gICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX3NldF9hdXRob3JpemVyJywgcmVzdWx0LCBkYik7XG4gIH07O1xuXG4gIHNxbGl0ZTMuc3FsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3NxbCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuc3RhdGVtZW50cyA9IGZ1bmN0aW9uIChkYiwgc3FsKSB7XG4gICAgcmV0dXJuIChhc3luYyBmdW5jdGlvbiogKCkge1xuICAgICAgY29uc3Qgc3RyID0gc3FsaXRlMy5zdHJfbmV3KGRiLCBzcWwpO1xuICAgICAgbGV0IHByZXBhcmVkID0geyBzdG10OiBudWxsLCBzcWw6IHNxbGl0ZTMuc3RyX3ZhbHVlKHN0cikgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdoaWxlIChwcmVwYXJlZCA9IGF3YWl0IHNxbGl0ZTMucHJlcGFyZV92MihkYiwgcHJlcGFyZWQuc3FsKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNxbGl0ZTMuc3FsKHByZXBhcmVkLnN0bXQpKTtcbiAgICAgICAgICB5aWVsZCBwcmVwYXJlZC5zdG10O1xuICAgICAgICAgIHNxbGl0ZTMuZmluYWxpemUocHJlcGFyZWQuc3RtdCk7XG4gICAgICAgICAgcHJlcGFyZWQuc3RtdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChwcmVwYXJlZD8uc3RtdCkge1xuICAgICAgICAgIHNxbGl0ZTMuZmluYWxpemUocHJlcGFyZWQuc3RtdCk7XG4gICAgICAgIH1cbiAgICAgICAgc3FsaXRlMy5zdHJfZmluaXNoKHN0cik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfTtcblxuICBzcWxpdGUzLnN0ZXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfc3RlcCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHN0bXQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSwgW1NRTGl0ZS5TUUxJVEVfUk9XLCBTUUxpdGUuU1FMSVRFX0RPTkVdKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIC8vIER1cGxpY2F0ZSBzb21lIG9mIHRoZSBTUUxpdGUgZHluYW1pYyBzdHJpbmcgQVBJIGJ1dCB3aXRob3V0XG4gIC8vIGNhbGxpbmcgU1FMaXRlIChleGNlcHQgZm9yIG1lbW9yeSBhbGxvY2F0aW9uKS4gV2UgbmVlZCBzb21lIHdheVxuICAvLyB0byB0cmFuc2ZlciBKYXZhc2NyaXB0IHN0cmluZ3MgYW5kIG1pZ2h0IGFzIHdlbGwgdXNlIGFuIEFQSVxuICAvLyB0aGF0IG1pbWljcyB0aGUgU1FMaXRlIEFQSS5cbiAgbGV0IHN0cmluZ0lkID0gMDtcbiAgY29uc3Qgc3RyaW5ncyA9IG5ldyBNYXAoKTtcblxuICBzcWxpdGUzLnN0cl9uZXcgPSBmdW5jdGlvbiAoZGIsIHMgPSAnJykge1xuICAgIGNvbnN0IHNCeXRlcyA9IE1vZHVsZS5sZW5ndGhCeXRlc1VURjgocyk7XG4gICAgY29uc3Qgc3RyID0gc3RyaW5nSWQrKyAmIDB4ZmZmZmZmZmY7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG9mZnNldDogTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhzQnl0ZXMgKyAxKSxcbiAgICAgIGJ5dGVzOiBzQnl0ZXNcbiAgICB9O1xuICAgIHN0cmluZ3Muc2V0KHN0ciwgZGF0YSk7XG4gICAgTW9kdWxlLnN0cmluZ1RvVVRGOChzLCBkYXRhLm9mZnNldCwgZGF0YS5ieXRlcyArIDEpO1xuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgc3FsaXRlMy5zdHJfYXBwZW5kYWxsID0gZnVuY3Rpb24gKHN0ciwgcykge1xuICAgIGlmICghc3RyaW5ncy5oYXMoc3RyKSkge1xuICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCdub3QgYSBzdHJpbmcnLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBzdHJpbmdzLmdldChzdHIpO1xuXG4gICAgY29uc3Qgc0J5dGVzID0gTW9kdWxlLmxlbmd0aEJ5dGVzVVRGOChzKTtcbiAgICBjb25zdCBuZXdCeXRlcyA9IGRhdGEuYnl0ZXMgKyBzQnl0ZXM7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhuZXdCeXRlcyArIDEpO1xuICAgIGNvbnN0IG5ld0FycmF5ID0gTW9kdWxlLkhFQVBVOC5zdWJhcnJheShuZXdPZmZzZXQsIG5ld09mZnNldCArIG5ld0J5dGVzICsgMSk7XG4gICAgbmV3QXJyYXkuc2V0KE1vZHVsZS5IRUFQVTguc3ViYXJyYXkoZGF0YS5vZmZzZXQsIGRhdGEub2Zmc2V0ICsgZGF0YS5ieXRlcykpO1xuICAgIE1vZHVsZS5zdHJpbmdUb1VURjgocywgbmV3T2Zmc2V0ICsgZGF0YS5ieXRlcywgc0J5dGVzICsgMSk7XG5cbiAgICBNb2R1bGUuX3NxbGl0ZTNfZnJlZShkYXRhLm9mZnNldCk7XG4gICAgZGF0YS5vZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgZGF0YS5ieXRlcyA9IG5ld0J5dGVzO1xuICAgIHN0cmluZ3Muc2V0KHN0ciwgZGF0YSk7XG4gIH07XG5cbiAgc3FsaXRlMy5zdHJfZmluaXNoID0gZnVuY3Rpb24gKHN0cikge1xuICAgIGlmICghc3RyaW5ncy5oYXMoc3RyKSkge1xuICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCdub3QgYSBzdHJpbmcnLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBzdHJpbmdzLmdldChzdHIpO1xuICAgIHN0cmluZ3MuZGVsZXRlKHN0cik7XG4gICAgTW9kdWxlLl9zcWxpdGUzX2ZyZWUoZGF0YS5vZmZzZXQpO1xuICB9O1xuXG4gIHNxbGl0ZTMuc3RyX3ZhbHVlID0gZnVuY3Rpb24gKHN0cikge1xuICAgIGlmICghc3RyaW5ncy5oYXMoc3RyKSkge1xuICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCdub3QgYSBzdHJpbmcnLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdzLmdldChzdHIpLm9mZnNldDtcbiAgfTtcblxuICBzcWxpdGUzLnVwZGF0ZV9ob29rID0gZnVuY3Rpb24gKGRiLCB4VXBkYXRlKSB7XG4gICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuICAgIE1vZHVsZS51cGRhdGVIb29rKGRiLCB4VXBkYXRlKTtcbiAgICByZXR1cm4gU1FMaXRlLlNRTElURV9PSztcbiAgfVxuXG4gIHNxbGl0ZTMudXNlcl9kYXRhID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICByZXR1cm4gTW9kdWxlLmdldEZ1bmN0aW9uVXNlckRhdGEoY29udGV4dCk7XG4gIH07XG5cbiAgc3FsaXRlMy52YWx1ZSA9IGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gc3FsaXRlMy52YWx1ZV90eXBlKHBWYWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfQkxPQjpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMudmFsdWVfYmxvYihwVmFsdWUpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0ZMT0FUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy52YWx1ZV9kb3VibGUocFZhbHVlKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9JTlRFR0VSOlxuICAgICAgICBjb25zdCBsbzMyID0gc3FsaXRlMy52YWx1ZV9pbnQocFZhbHVlKTtcbiAgICAgICAgY29uc3QgaGkzMiA9IE1vZHVsZS5nZXRUZW1wUmV0MCgpO1xuICAgICAgICByZXR1cm4gY3Z0MzJ4MkFzU2FmZShsbzMyLCBoaTMyKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9OVUxMOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9URVhUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy52YWx1ZV90ZXh0KHBWYWx1ZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ3Vua25vd24gdHlwZScsIHR5cGUpO1xuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLnZhbHVlX2Jsb2IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocFZhbHVlKSB7XG4gICAgICBjb25zdCBuQnl0ZXMgPSBzcWxpdGUzLnZhbHVlX2J5dGVzKHBWYWx1ZSk7XG4gICAgICBjb25zdCBhZGRyZXNzID0gZihwVmFsdWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLkhFQVBVOC5zdWJhcnJheShhZGRyZXNzLCBhZGRyZXNzICsgbkJ5dGVzKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfYnl0ZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfYnl0ZXMnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBWYWx1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVmFsdWUpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy52YWx1ZV9kb3VibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfZG91YmxlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfaW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfaW50NjQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfaW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBWYWx1ZSkge1xuICAgICAgY29uc3QgbG8zMiA9IGYocFZhbHVlKTtcbiAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGN2dDMyeDJUb0JpZ0ludChsbzMyLCBoaTMyKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfdGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV90ZXh0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfdHlwZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV90eXBlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmZzX3JlZ2lzdGVyID0gZnVuY3Rpb24gKHZmcywgbWFrZURlZmF1bHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUucmVnaXN0ZXJWRlModmZzLCBtYWtlRGVmYXVsdCk7XG4gICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX3Zmc19yZWdpc3RlcicsIHJlc3VsdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2hlY2soZm5hbWUsIHJlc3VsdCwgZGIgPSBudWxsLCBhbGxvd2VkID0gW1NRTGl0ZS5TUUxJVEVfT0tdKSB7XG4gICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgaWYgKGFsbG93ZWQuaW5jbHVkZXMocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICBjb25zdCBtZXNzYWdlID0gZGIgP1xuICAgICAgTW9kdWxlLmNjYWxsKCdzcWxpdGUzX2Vycm1zZycsICdzdHJpbmcnLCBbJ251bWJlciddLCBbZGJdKSA6XG4gICAgICBmbmFtZTtcbiAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IobWVzc2FnZSwgcmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiBzcWxpdGUzO1xufVxuXG5mdW5jdGlvbiB0cmFjZSguLi5hcmdzKSB7XG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAvLyBjb25zdCB0ID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSArICc6JyArXG4gIC8vICAgICAgICAgICBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykgKyAnOicgK1xuICAvLyAgICAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpICsgJy4nICtcbiAgLy8gICAgICAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpO1xuICAvLyBjb25zb2xlLmRlYnVnKHQsIC4uLmFyZ3MpO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXNlIGEgbW9yZSBjb21wYWN0IHNpZ25hdHVyZSBzcGVjaWZpY2F0aW9uLlxuZnVuY3Rpb24gZGVjbChzKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBtID0gcy5tYXRjaCgvKFtuc0BdKik6KFtuc3ZAXSkvKTtcbiAgc3dpdGNoIChtWzJdKSB7XG4gICAgY2FzZSAnbic6IHJlc3VsdC5wdXNoKCdudW1iZXInKTsgYnJlYWs7XG4gICAgY2FzZSAncyc6IHJlc3VsdC5wdXNoKCdzdHJpbmcnKTsgYnJlYWs7XG4gICAgY2FzZSAndic6IHJlc3VsdC5wdXNoKG51bGwpOyBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGFyZ3MgPSBbXTtcbiAgZm9yIChsZXQgYyBvZiBtWzFdKSB7XG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICduJzogYXJncy5wdXNoKCdudW1iZXInKTsgYnJlYWs7XG4gICAgICBjYXNlICdzJzogYXJncy5wdXNoKCdzdHJpbmcnKTsgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKGFyZ3MpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gUHJpbWFyeSByZXN1bHQgY29kZXMuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL3Jlc2NvZGUuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9PSyA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0VSUk9SID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5URVJOQUwgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9QRVJNID0gMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUJPUlQgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9CVVNZID0gNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS0VEID0gNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9NRU0gPSA3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9SRUFET05MWSA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOVEVSUlVQVCA9IDk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSID0gMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPUlJVUFQgPSAxMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9URk9VTkQgPSAxMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRlVMTCA9IDEzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DQU5UT1BFTiA9IDE0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9QUk9UT0NPTCA9IDE1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9FTVBUWSA9IDE2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9TQ0hFTUEgPSAxNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfVE9PQklHID0gMTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlQgPSAxOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTUlTTUFUQ0ggPSAyMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTUlTVVNFID0gMjE7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PTEZTID0gMjI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FVVEggPSAyMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfRk9STUFUID0gMjQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JBTkdFID0gMjU7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PVEFEQiA9IDI2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9OT1RJQ0UgPSAyNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfV0FSTklORyA9IDI4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9ST1cgPSAxMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RPTkUgPSAxMDE7XG5cbi8vIEV4dGVuZGVkIGVycm9yIGNvZGVzLlxuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9BQ0NFU1MgPSAzMzM4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9DSEVDS1JFU0VSVkVETE9DSyA9IDM1OTQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0NMT1NFID0gNDEwNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfREFUQSA9IDgyMDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RFTEVURSA9IDI1NzA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RFTEVURV9OT0VOVCA9IDU4OTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RJUl9GU1lOQyA9IDEyOTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0ZTVEFUID0gMTgwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfRlNZTkMgPSAxMDM0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9HRVRURU1QUEFUSCA9IDY0MTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0xPQ0sgPSAzODUwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9OT01FTSA9IDMwODI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1JFQUQgPSAyNjY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1JETE9DSyA9IDIzMTQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1NFRUsgPSA1NjQyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9TSE9SVF9SRUFEID0gNTIyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9UUlVOQ0FURSA9IDE1NDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1VOTE9DSyA9IDIwNTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1ZOT0RFID0gNjkyMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfV1JJVEUgPSA3Nzg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0JFR0lOX0FUT01JQyA9IDc0MzQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0NPTU1JVF9BVE9NSUMgPSA3NjkwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9ST0xMQkFDS19BVE9NSUMgPSA3OTQ2O1xuXG4vLyBPdGhlciBleHRlbmRlZCByZXN1bHQgY29kZXMuXG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfQ0hFQ0sgPSAyNzU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfQ09NTUlUSE9PSyA9IDUzMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9GT1JFSUdOS0VZID0gNzg3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX0ZVTkNUSU9OID0gMTA0MztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9OT1ROVUxMID0gMTI5OTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9QSU5ORUQgPSAyODM1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1BSSU1BUllLRVkgPSAxNTU1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1JPV0lEID0gMjU3OTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9UUklHR0VSID0gMTgxMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9VTklRVUUgPSAyMDY3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1ZUQUIgPSAyMzIzO1xuXG4vLyBPcGVuIGZsYWdzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX29wZW5fYXV0b3Byb3h5Lmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9SRUFET05MWSA9IDB4MDAwMDAwMDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fUkVBRFdSSVRFID0gMHgwMDAwMDAwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9DUkVBVEUgPSAweDAwMDAwMDA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0RFTEVURU9OQ0xPU0UgPSAweDAwMDAwMDA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0VYQ0xVU0lWRSA9IDB4MDAwMDAwMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fQVVUT1BST1hZID0gMHgwMDAwMDAyMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9VUkkgPSAweDAwMDAwMDQwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX01FTU9SWSA9IDB4MDAwMDAwODA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTUFJTl9EQiA9IDB4MDAwMDAxMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fVEVNUF9EQiA9IDB4MDAwMDAyMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fVFJBTlNJRU5UX0RCID0gMHgwMDAwMDQwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9NQUlOX0pPVVJOQUwgPSAweDAwMDAwODAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1RFTVBfSk9VUk5BTCA9IDB4MDAwMDEwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fU1VCSk9VUk5BTCA9IDB4MDAwMDIwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fU1VQRVJfSk9VUk5BTCA9IDB4MDAwMDQwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTk9NVVRFWCA9IDB4MDAwMDgwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fRlVMTE1VVEVYID0gMHgwMDAxMDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9TSEFSRURDQUNIRSA9IDB4MDAwMjAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fUFJJVkFURUNBQ0hFID0gMHgwMDA0MDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9XQUwgPSAweDAwMDgwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX05PRk9MTE9XID0gMHgwMTAwMDAwMDtcblxuLy8gTG9ja2luZyBsZXZlbHMuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfbG9ja19leGNsdXNpdmUuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX1NIQVJFRCA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tfUkVTRVJWRUQgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX1BFTkRJTkcgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX0VYQ0xVU0lWRSA9IDQ7XG5cbi8vIERldmljZSBjaGFyYWN0ZXJpc3RpY3MuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfaW9jYXBfYXRvbWljLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDID0gMHgwMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDNTEyID0gMHgwMDAwMDAwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDMUsgPSAweDAwMDAwMDA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMySyA9IDB4MDAwMDAwMDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzRLID0gMHgwMDAwMDAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDOEsgPSAweDAwMDAwMDIwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMxNksgPSAweDAwMDAwMDQwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMzMksgPSAweDAwMDAwMDgwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUM2NEsgPSAweDAwMDAwMTAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9TQUZFX0FQUEVORCA9IDB4MDAwMDAyMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX1NFUVVFTlRJQUwgPSAweDAwMDAwNDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9VTkRFTEVUQUJMRV9XSEVOX09QRU4gPSAweDAwMDAwODAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9QT1dFUlNBRkVfT1ZFUldSSVRFID0gMHgwMDAwMTAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfSU1NVVRBQkxFID0gMHgwMDAwMjAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQkFUQ0hfQVRPTUlDID0gMHgwMDAwNDAwMDtcblxuLy8geEFjY2VzcyBmbGFncy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19hY2Nlc3NfZXhpc3RzLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUNDRVNTX0VYSVNUUyA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FDQ0VTU19SRUFEV1JJVEUgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BQ0NFU1NfUkVBRCA9IDI7XG5cbi8vIEZpbGUgY29udHJvbCBvcGNvZGVzXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfZmNudGxfYmVnaW5fYXRvbWljX3dyaXRlLmh0bWwjc3FsaXRlZmNudGxiZWdpbmF0b21pY3dyaXRlXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0xPQ0tTVEFURSA9IDE7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9HRVRfTE9DS1BST1hZRklMRSA9IDI7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TRVRfTE9DS1BST1hZRklMRSA9IDM7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9MQVNUX0VSUk5PID0gNDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NJWkVfSElOVCA9IDU7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9DSFVOS19TSVpFID0gNjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0ZJTEVfUE9JTlRFUiA9IDc7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TWU5DX09NSVRURUQgPSA4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0lOMzJfQVZfUkVUUlkgPSA5OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUEVSU0lTVF9XQUwgPSAxMDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX09WRVJXUklURSA9IDExOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVkZTTkFNRSA9IDEyOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUE9XRVJTQUZFX09WRVJXUklURSA9IDEzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUFJBR01BID0gMTQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9CVVNZSEFORExFUiA9IDE1OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVEVNUEZJTEVOQU1FID0gMTY7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9NTUFQX1NJWkUgPSAxODsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1RSQUNFID0gMTk7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9IQVNfTU9WRUQgPSAyMDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NZTkMgPSAyMTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NPTU1JVF9QSEFTRVRXTyA9IDIyOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0lOMzJfU0VUX0hBTkRMRSA9IDIzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0FMX0JMT0NLID0gMjQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9aSVBWRlMgPSAyNTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1JCVSA9IDI2OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVkZTX1BPSU5URVIgPSAyNzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0pPVVJOQUxfUE9JTlRFUiA9IDI4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0lOMzJfR0VUX0hBTkRMRSA9IDI5OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUERCID0gMzA7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9CRUdJTl9BVE9NSUNfV1JJVEUgPSAzMTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NPTU1JVF9BVE9NSUNfV1JJVEUgPSAzMjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1JPTExCQUNLX0FUT01JQ19XUklURSA9IDMzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfTE9DS19USU1FT1VUID0gMzQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9EQVRBX1ZFUlNJT04gPSAzNTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NJWkVfTElNSVQgPSAzNjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NLUFRfRE9ORSA9IDM3OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUkVTRVJWRV9CWVRFUyA9IDM4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQ0tQVF9TVEFSVCA9IDM5O1xuXG4vLyBGdW5kYW1lbnRhbCBkYXRhdHlwZXMuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfYmxvYi5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX0lOVEVHRVIgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9GTE9BVCA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX1RFWFQgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9CTE9CID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTlVMTCA9IDU7XG5cbi8vIFNwZWNpYWwgZGVzdHJ1Y3RvciBiZWhhdmlvci5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19zdGF0aWMuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9TVEFUSUMgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9UUkFOU0lFTlQgPSAtMTtcblxuLy8gVGV4dCBlbmNvZGluZ3MuXG4vLyBodHRwczovL3NxbGl0ZS5vcmcvYzNyZWYvY19hbnkuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9VVEY4ID0gMTsgICAgIC8qIElNUDogUi0zNzUxNC0zNTU2NiAqL1xuZXhwb3J0IGNvbnN0IFNRTElURV9VVEYxNkxFID0gMjsgIC8qIElNUDogUi0wMzM3MS0zNzYzNyAqL1xuZXhwb3J0IGNvbnN0IFNRTElURV9VVEYxNkJFID0gMzsgIC8qIElNUDogUi01MTk3MS0zNDE1NCAqL1xuZXhwb3J0IGNvbnN0IFNRTElURV9VVEYxNiA9IDQ7ICAgIC8qIFVzZSBuYXRpdmUgYnl0ZSBvcmRlciAqL1xuXG4vLyBNb2R1bGUgY29uc3RyYWludCBvcHMuXG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfRVEgICAgICAgID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9HVCAgICAgICAgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0xFICAgICAgICA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTFQgICAgICAgID0gMTY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfR0UgICAgICAgID0gMzI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTUFUQ0ggICAgID0gNjQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTElLRSAgICAgID0gNjU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfR0xPQiAgICAgID0gNjY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfUkVHRVhQICAgID0gNjc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTkUgICAgICAgID0gNjg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVNOT1QgICAgID0gNjk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVNOT1ROVUxMID0gNzA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVNOVUxMICAgID0gNzE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVMgICAgICAgID0gNzI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfRlVOQ1RJT04gID0gMTUwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9TQ0FOX1VOSVFVRSAgICAgICAgICA9IDE7ICAvKiBTY2FuIHZpc2l0cyBhdCBtb3N0ID0gMSByb3cgKi9cblxuLy8gRnVuY3Rpb24gZmxhZ3NcbmV4cG9ydCBjb25zdCBTUUxJVEVfREVURVJNSU5JU1RJQyA9IDB4MDAwMDAwODAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9ESVJFQ1RPTkxZICAgID0gMHgwMDAwODAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NVQlRZUEUgICAgICAgPSAweDAwMDEwMDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5OT0NVT1VTICAgICA9IDB4MDAwMjAwMDAwO1xuXG4vLyBTeW5jIGZsYWdzXG5leHBvcnQgY29uc3QgU1FMSVRFX1NZTkNfTk9STUFMICAgPSAweDAwMDAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TWU5DX0ZVTEwgICAgID0gMHgwMDAwMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfU1lOQ19EQVRBT05MWSA9IDB4MDAwMTA7XG5cbi8vIEF1dGhvcml6ZXIgYWN0aW9uIGNvZGVzXG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9JTkRFWCAgICAgICAgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEFCTEUgICAgICAgID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RFTVBfSU5ERVggICA9IDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9URU1QX1RBQkxFICAgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEVNUF9UUklHR0VSID0gNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RFTVBfVklFVyAgICA9IDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9UUklHR0VSICAgICAgPSA3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVklFVyAgICAgICAgID0gODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfREVMRVRFICAgICAgICAgICAgICA9IDk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfSU5ERVggICAgICAgICAgPSAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9UQUJMRSAgICAgICAgICA9IDExO1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RFTVBfSU5ERVggICAgID0gMTI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVEVNUF9UQUJMRSAgICAgPSAxMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9URU1QX1RSSUdHRVIgICA9IDE0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RFTVBfVklFVyAgICAgID0gMTU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVFJJR0dFUiAgICAgICAgPSAxNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9WSUVXICAgICAgICAgICA9IDE3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTlNFUlQgICAgICAgICAgICAgID0gMTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX1BSQUdNQSAgICAgICAgICAgICAgPSAxOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkVBRCAgICAgICAgICAgICAgICA9IDIwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TRUxFQ1QgICAgICAgICAgICAgID0gMjE7XG5leHBvcnQgY29uc3QgU1FMSVRFX1RSQU5TQUNUSU9OICAgICAgICAgPSAyMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfVVBEQVRFICAgICAgICAgICAgICA9IDIzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BVFRBQ0ggICAgICAgICAgICAgID0gMjQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RFVEFDSCAgICAgICAgICAgICAgPSAyNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUxURVJfVEFCTEUgICAgICAgICA9IDI2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9SRUlOREVYICAgICAgICAgICAgID0gMjc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FOQUxZWkUgICAgICAgICAgICAgPSAyODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1ZUQUJMRSAgICAgICA9IDI5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1ZUQUJMRSAgICAgICAgID0gMzA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0ZVTkNUSU9OICAgICAgICAgICAgPSAzMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfU0FWRVBPSU5UICAgICAgICAgICA9IDMyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT1BZICAgICAgICAgICAgICAgID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkVDVVJTSVZFICAgICAgICAgICA9IDMzO1xuXG4vLyBBdXRob3JpemVyIHJldHVybiBjb2Rlc1xuZXhwb3J0IGNvbnN0IFNRTElURV9ERU5ZICAgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JR05PUkUgPSAyO1xuXG4vLyBMaW1pdCBjYXRlZ29yaWVzXG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0xFTkdUSCAgICAgICAgICAgICAgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9TUUxfTEVOR1RIICAgICAgICAgID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfQ09MVU1OICAgICAgICAgICAgICA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0VYUFJfREVQVEggICAgICAgICAgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9DT01QT1VORF9TRUxFQ1QgICAgID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfVkRCRV9PUCAgICAgICAgICAgICA9IDU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0ZVTkNUSU9OX0FSRyAgICAgICAgPSA2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9BVFRBQ0hFRCAgICAgICAgICAgID0gNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfTElLRV9QQVRURVJOX0xFTkdUSCA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1ZBUklBQkxFX05VTUJFUiAgICAgPSA5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9UUklHR0VSX0RFUFRIICAgICAgID0gMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1dPUktFUl9USFJFQURTICAgICAgPSAxMTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gc2VsZi5sb2NhdGlvbiArIFwiXCI7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAxXG59O1xuXG4vLyBubyBjaHVuayBpbnN0YWxsIGZ1bmN0aW9uIG5lZWRlZFxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwiaW1wb3J0IFNRTGl0ZUFzeW5jRVNNRmFjdG9yeSBmcm9tICd3YS1zcWxpdGUvZGlzdC93YS1zcWxpdGUtYXN5bmMubWpzJztcbmltcG9ydCAqIGFzIFNRTGl0ZSBmcm9tICd3YS1zcWxpdGUnO1xuaW1wb3J0IHsgSURCQmF0Y2hBdG9taWNWRlMgfSBmcm9tICd3YS1zcWxpdGUvc3JjL2V4YW1wbGVzL0lEQkJhdGNoQXRvbWljVkZTJztcblxuY29uc29sZS5sb2coJ1tzcWxpdGUtd29ya2VyXSBtb2R1bGUgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xuXG5sZXQgc3FsaXRlMyA9IG51bGw7XG5sZXQgY3VycmVudERiID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlRW5naW5lKCkge1xuICAgIGlmIChzcWxpdGUzKSByZXR1cm47XG4gICAgY29uc3QgYXN5bmNNb2R1bGUgPSBhd2FpdCBTUUxpdGVBc3luY0VTTUZhY3RvcnkoKTtcbiAgICBzcWxpdGUzID0gU1FMaXRlLkZhY3RvcnkoYXN5bmNNb2R1bGUpO1xuICAgIGNvbnNvbGUubG9nKCdbc3FsaXRlLXdvcmtlcl0gZW5naW5lIHJlYWR5Jyk7XG59XG5cbmZ1bmN0aW9uIHJlc3VsdFRvUm93KGNvbHVtbnMsIHJvd0RhdGEpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb2JqW2NvbHVtbnNbaV1dID0gcm93RGF0YVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgYXN5bmMgb3BlbihhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtkYk5hbWUsIGZpbGVOYW1lXSA9IGFyZ3M7XG4gICAgICAgIGF3YWl0IGVuc3VyZUVuZ2luZSgpO1xuICAgICAgICBzcWxpdGUzLnZmc19yZWdpc3RlcihuZXcgSURCQmF0Y2hBdG9taWNWRlMoZmlsZU5hbWUpKTtcbiAgICAgICAgY3VycmVudERiID0gYXdhaXQgc3FsaXRlMy5vcGVuX3YyKFxuICAgICAgICAgICAgZGJOYW1lLFxuICAgICAgICAgICAgU1FMaXRlLlNRTElURV9PUEVOX0NSRUFURSB8IFNRTGl0ZS5TUUxJVEVfT1BFTl9SRUFEV1JJVEUgfCBTUUxpdGUuU1FMSVRFX09QRU5fVVJJLFxuICAgICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnREYjtcbiAgICB9LFxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmIChjdXJyZW50RGIgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgYXdhaXQgc3FsaXRlMy5jbG9zZShjdXJyZW50RGIpO1xuICAgICAgICBjdXJyZW50RGIgPSBudWxsO1xuICAgIH0sXG5cbiAgICBhc3luYyBleGVjdXRlKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgW2RiQ29ubiwgc3FsLCBwYXJhbWV0ZXJzXSA9IGFyZ3M7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgY2hhbmdlczogMCwgcmVzcG9uc2U6IG51bGwsIGRhdGE6ICcnLCBlcnJvcjogJycgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kUmVzdWx0ICE9PSBTUUxpdGUuU1FMSVRFX09LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50LiBDaGVjayB5b3VyIHN5bnRheCBvciBwYXJhbWV0ZXJzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10KSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHt9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJlc3BvbnNlID0gJ1NRTElURV9ET05FJztcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hhbmdlcyA9IHNxbGl0ZTMuY2hhbmdlcyhkYkNvbm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBhc3luYyBxdWVyeShhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtkYkNvbm4sIHNxbCwgcGFyYW1ldGVyc10gPSBhcmdzO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7IGRhdGE6IFtdLCBlcnJvcjogJycgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kUmVzdWx0ICE9PSBTUUxpdGUuU1FMSVRFX09LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkgPT09IFNRTGl0ZS5TUUxJVEVfUk9XKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA/PyBzcWxpdGUzLmNvbHVtbl9uYW1lcyhzdG10KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHNxbGl0ZTMucm93KHN0bXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChyZXN1bHRUb1Jvdyhjb2x1bW5zLCByb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG59O1xuXG5zZWxmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tzcWxpdGUtd29ya2VyXSB1bmNhdWdodCBlcnJvcjonLCBlLm1lc3NhZ2UgfHwgZSk7XG59O1xuXG5zZWxmLm9udW5oYW5kbGVkcmVqZWN0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbc3FsaXRlLXdvcmtlcl0gdW5oYW5kbGVkIHJlamVjdGlvbjonLCBlLnJlYXNvbik7XG59O1xuXG5zZWxmLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgeyBpZCwgbWV0aG9kLCBhcmdzIH0gPSBlLmRhdGE7XG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW21ldGhvZF07XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBpZCwgZXJyb3I6IGBVbmtub3duIG1ldGhvZDogJHttZXRob2R9YCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBoYW5kbGVyKGFyZ3MpO1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQsIHJlc3VsdCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkLCBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgU3RyaW5nKGVycikgfSk7XG4gICAgfVxufTtcblxuY29uc29sZS5sb2coJ1tzcWxpdGUtd29ya2VyXSBwb3N0aW5nIHJlYWR5Jyk7XG5zZWxmLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3JlYWR5JyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==