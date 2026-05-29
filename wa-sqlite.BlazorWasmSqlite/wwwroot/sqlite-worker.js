/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.wasm"
/*!**********************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.wasm ***!
  \**********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3799ad9fa561c3ecc02.wasm";

/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function Module(moduleArg={}){var moduleRtn;var Module=moduleArg;var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName="file:///C:/Users/chadp/source/repos/wa-sqlite.BlazorWasmSqlite/wa-sqlite.BlazorWasmSqlite/NpmJS/node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var out=console.log.bind(console);var err=console.error.bind(console);var wasmBinary;var ABORT=false;var EXITSTATUS;var readyPromiseResolve,readyPromiseReject;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b)}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["__wasm_call_ctors"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject?.(e);throw e}var wasmBinaryFile;function findWasmBinary(){if(Module["locateFile"]){return locateFile("wa-sqlite-jspi.wasm")}return new URL(/* asset import */ __webpack_require__(/*! wa-sqlite-jspi.wasm */ "./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.wasm"), __webpack_require__.b).href}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){Asyncify.instrumentWasmImports(wasmImports);var imports={env:wasmImports,wasi_snapshot_preview1:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;wasmExports=Asyncify.instrumentWasmExports(wasmExports);assignWasmExports(wasmExports);updateMemoryViews();return wasmExports}function receiveInstantiationResult(result){return receiveInstance(result["instance"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}var tempDouble;var tempI64;class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr];case"i8":return HEAP8[ptr];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":abort("to do getValue(i64) use WASM_BIGINT");case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}var noExitRuntime=true;function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr]=value;break;case"i8":HEAP8[ptr]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":abort("to do setValue(i64) use WASM_BIGINT");case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();var UTF8Decoder=new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>{if(!ptr)return"";var end=findStringEnd(HEAPU8,ptr,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(HEAPU8.subarray(ptr,end))};var ___assert_fail=(condition,filename,line,func)=>abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"]);var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\/]+|\/)\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>crypto.getRandomValues(view);var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);return UTF8Decoder.decode(heapOrArray.buffer?heapOrArray.subarray(idx,endPtr):new Uint8Array(heapOrArray.slice(idx,endPtr)))};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>HEAPU8.fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}HEAP8.set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}if(perms.includes("w")&&!(node.mode&146)){return 2}if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else if(FS.isDir(node.mode)){return 31}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}var mode=FS.flagsToPermissionString(flags);if(FS.isDir(node.mode)){if(mode!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,mode)},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){HEAPU32[buf>>2]=stat.dev;HEAPU32[buf+4>>2]=stat.mode;HEAPU32[buf+8>>2]=stat.nlink;HEAPU32[buf+12>>2]=stat.uid;HEAPU32[buf+16>>2]=stat.gid;HEAPU32[buf+20>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];HEAP32[buf+32>>2]=4096;HEAP32[buf+36>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=atime%1e3*1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=mtime%1e3*1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=ctime%1e3*1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];return 0},writeStatFs(buf,stats){HEAPU32[buf+4>>2]=stats.bsize;HEAPU32[buf+60>>2]=stats.bsize;tempI64=[stats.blocks>>>0,(tempDouble=stats.blocks,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+8>>2]=tempI64[0],HEAP32[buf+12>>2]=tempI64[1];tempI64=[stats.bfree>>>0,(tempDouble=stats.bfree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+16>>2]=tempI64[0],HEAP32[buf+20>>2]=tempI64[1];tempI64=[stats.bavail>>>0,(tempDouble=stats.bavail,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];tempI64=[stats.files>>>0,(tempDouble=stats.files,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+32>>2]=tempI64[0],HEAP32[buf+36>>2]=tempI64[1];tempI64=[stats.ffree>>>0,(tempDouble=stats.ffree,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=stats.fsid;HEAPU32[buf+64>>2]=stats.flags;HEAPU32[buf+56>>2]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchmod(fd,mode){try{FS.fchmod(fd,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fchown32(fd,owner,group){try{FS.fchown(fd,owner,group);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var syscallGetVarargI=()=>{var ret=HEAP32[+SYSCALLS.varargs>>2];SYSCALLS.varargs+=4;return ret};var syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 12:{var arg=syscallGetVarargP();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 13:case 14:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function ___syscall_ftruncate64(fd,length_low,length_high){var length=convertI32PairToI53Checked(length_low,length_high);try{if(isNaN(length))return-61;FS.ftruncate(fd,length);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_readlinkat(dirfd,path,buf,bufsize){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(bufsize<=0)return-28;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(!flags){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{return-28}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);var now=Date.now(),atime,mtime;if(!times){atime=now;mtime=now}else{var seconds=readI53FromI64(times);var nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){atime=now}else if(nanoseconds==1073741822){atime=null}else{atime=seconds*1e3+nanoseconds/(1e3*1e3)}times+=16;seconds=readI53FromI64(times);nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){mtime=now}else if(nanoseconds==1073741822){mtime=null}else{mtime=seconds*1e3+nanoseconds/(1e3*1e3)}}if((mtime??atime)!==null){FS.utime(path,atime,mtime)}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");var runtimeKeepaliveCounter=0;var __emscripten_runtime_keepalive_clear=()=>{noExitRuntime=false;runtimeKeepaliveCounter=0};var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}function __mmap_js(len,prot,flags,fd,offset_low,offset_high,allocated,addr){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset_low,offset_high){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var timers={};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;var maybeExit=()=>{if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{return func()}catch(e){handleException(e)}finally{maybeExit()}};var _emscripten_get_now=()=>performance.now();var __setitimer_js=(which,timeout_ms)=>{if(timers[which]){clearTimeout(timers[which].id);delete timers[which]}if(!timeout_ms)return 0;var id=setTimeout(()=>{delete timers[which];callUserCallback(()=>__emscripten_timeout(which,_emscripten_get_now()))},timeout_ms);timers[which]={id,timeout_ms};return 0};var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_date_now=()=>Date.now();var getHeapMax=()=>2147483648;var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;HEAPU32[__environ+envp>>2]=ptr;bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=4}return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}HEAPU32[penviron_buf_size>>2]=bufSize;return 0};function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var rightsBase=0;var rightsInheriting=0;var flags=0;{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4}HEAP8[pbuf]=type;HEAP16[pbuf+2>>1]=flags;tempI64=[rightsBase>>>0,(tempDouble=rightsBase,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+8>>2]=tempI64[0],HEAP32[pbuf+12>>2]=tempI64[1];tempI64=[rightsInheriting>>>0,(tempDouble=rightsInheriting,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[pbuf+16>>2]=tempI64[0],HEAP32[pbuf+20>>2]=tempI64[1];return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var _fd_sync=function(fd){let innerFunc=()=>{try{var stream=SYSCALLS.getStreamFromFD(fd);var rtn=stream.stream_ops?.fsync?.(stream);return new Promise(resolve=>{var mount=stream.node.mount;if(mount?.type.syncfs){mount.type.syncfs(mount,false,err=>resolve(err?29:0))}else{resolve(rtn)}})}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}};return Asyncify.handleAsync(innerFunc)};_fd_sync.isAsync=true;var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var adapters_support=function(){const handleAsync=typeof Asyncify==="object"?Asyncify.handleAsync.bind(Asyncify):null;Module["handleAsync"]=handleAsync;const targets=new Map;Module["setCallback"]=(key,target)=>targets.set(key,target);Module["getCallback"]=key=>targets.get(key);Module["deleteCallback"]=key=>targets.delete(key);adapters_support=function(isAsync,key,...args){const receiver=targets.get(key);let methodName=null;const f=typeof receiver==="function"?receiver:receiver[methodName=UTF8ToString(args.shift())];if(isAsync){if(handleAsync){return handleAsync(()=>f.apply(receiver,args))}throw new Error("Synchronous WebAssembly cannot call async function")}const result=f.apply(receiver,args);if(typeof result?.then=="function"){console.error("unexpected Promise",f);throw new Error(`${methodName} unexpectedly returned a Promise`)}return result}};function _ipp(...args){return adapters_support(false,...args)}function _ipp_async(...args){return adapters_support(true,...args)}_ipp_async.isAsync=true;function _ippipppp(...args){return adapters_support(false,...args)}function _ippipppp_async(...args){return adapters_support(true,...args)}_ippipppp_async.isAsync=true;function _ippp(...args){return adapters_support(false,...args)}function _ippp_async(...args){return adapters_support(true,...args)}_ippp_async.isAsync=true;function _ipppi(...args){return adapters_support(false,...args)}function _ipppi_async(...args){return adapters_support(true,...args)}_ipppi_async.isAsync=true;function _ipppiii(...args){return adapters_support(false,...args)}function _ipppiii_async(...args){return adapters_support(true,...args)}_ipppiii_async.isAsync=true;function _ipppiiip(...args){return adapters_support(false,...args)}function _ipppiiip_async(...args){return adapters_support(true,...args)}_ipppiiip_async.isAsync=true;function _ipppip(...args){return adapters_support(false,...args)}function _ipppip_async(...args){return adapters_support(true,...args)}_ipppip_async.isAsync=true;function _ipppj(...args){return adapters_support(false,...args)}function _ipppj_async(...args){return adapters_support(true,...args)}_ipppj_async.isAsync=true;function _ipppp(...args){return adapters_support(false,...args)}function _ipppp_async(...args){return adapters_support(true,...args)}_ipppp_async.isAsync=true;function _ippppi(...args){return adapters_support(false,...args)}function _ippppi_async(...args){return adapters_support(true,...args)}_ippppi_async.isAsync=true;function _ippppij(...args){return adapters_support(false,...args)}function _ippppij_async(...args){return adapters_support(true,...args)}_ippppij_async.isAsync=true;function _ippppip(...args){return adapters_support(false,...args)}function _ippppip_async(...args){return adapters_support(true,...args)}_ippppip_async.isAsync=true;function _ipppppip(...args){return adapters_support(false,...args)}function _ipppppip_async(...args){return adapters_support(true,...args)}_ipppppip_async.isAsync=true;function _vppippii(...args){return adapters_support(false,...args)}function _vppippii_async(...args){return adapters_support(true,...args)}_vppippii_async.isAsync=true;function _vppp(...args){return adapters_support(false,...args)}function _vppp_async(...args){return adapters_support(true,...args)}_vppp_async.isAsync=true;function _vpppip(...args){return adapters_support(false,...args)}function _vpppip_async(...args){return adapters_support(true,...args)}_vpppip_async.isAsync=true;var Asyncify={instrumentWasmImports(imports){var importPattern=/^(ipp|ipp_async|ippp|ippp_async|vppp|vppp_async|ipppj|ipppj_async|ipppi|ipppi_async|ipppp|ipppp_async|ipppip|ipppip_async|vpppip|vpppip_async|ippppi|ippppi_async|ippppij|ippppij_async|ipppiii|ipppiii_async|ippppip|ippppip_async|ippipppp|ippipppp_async|ipppppip|ipppppip_async|ipppiiip|ipppiiip_async|vppippii|vppippii_async|invoke_.*|__asyncjs__.*)$/;for(let[x,original]of Object.entries(imports)){if(typeof original=="function"){let isAsyncifyImport=original.isAsync||importPattern.test(x);if(isAsyncifyImport){imports[x]=original=new WebAssembly.Suspending(original)}}}},instrumentWasmExports(exports){var exportPattern=/^(sqlite3_close|sqlite3_finalize|sqlite3_open_v2|sqlite3_prepare|sqlite3_prepare16|sqlite3_prepare_v2|sqlite3_prepare16_v2|sqlite3_prepare_v3|sqlite3_prepare16_v3|sqlite3_reset|sqlite3_step|main|__main_argc_argv)$/;Asyncify.asyncExports=new Set;var ret={};for(let[x,original]of Object.entries(exports)){if(typeof original=="function"){let isAsyncifyExport=exportPattern.test(x);if(isAsyncifyExport){Asyncify.asyncExports.add(original);original=Asyncify.makeAsyncFunction(original)}ret[x]=original}else{ret[x]=original}}return ret},asyncExports:null,isAsyncExport(func){return Asyncify.asyncExports?.has(func)},handleAsync:async startAsync=>{try{return await startAsync()}finally{}},handleSleep:startAsync=>Asyncify.handleAsync(()=>new Promise(startAsync)),makeAsyncFunction(original){return WebAssembly.promising(original)}};var wasmTableMirror=[];var getWasmTableEntry=funcPtr=>{var func=wasmTableMirror[funcPtr];if(!func){wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr);if(Asyncify.isAsyncExport(func)){wasmTableMirror[funcPtr]=func=Asyncify.makeAsyncFunction(func)}}return func};var updateTableMap=(offset,count)=>{if(functionsInTableMap){for(var i=offset;i<offset+count;i++){var item=getWasmTableEntry(i);if(item){functionsInTableMap.set(item,i)}}}};var functionsInTableMap;var getFunctionAddress=func=>{if(!functionsInTableMap){functionsInTableMap=new WeakMap;updateTableMap(0,wasmTable.length)}return functionsInTableMap.get(func)||0};var freeTableIndexes=[];var getEmptyTableSlot=()=>{if(freeTableIndexes.length){return freeTableIndexes.pop()}return wasmTable["grow"](1)};var setWasmTableEntry=(idx,func)=>{wasmTable.set(idx,func);wasmTableMirror[idx]=wasmTable.get(idx)};var uleb128EncodeWithLen=arr=>{const n=arr.length;return[n%128|128,n>>7,...arr]};var wasmTypeCodes={i:127,p:127,j:126,f:125,d:124,e:111};var generateTypePack=types=>uleb128EncodeWithLen(Array.from(types,type=>{var code=wasmTypeCodes[type];return code}));var convertJsFunctionToWasm=(func,sig)=>{var bytes=Uint8Array.of(0,97,115,109,1,0,0,0,1,...uleb128EncodeWithLen([1,96,...generateTypePack(sig.slice(1)),...generateTypePack(sig[0]==="v"?"":sig[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{e:{f:func}});var wrappedFunc=instance.exports["f"];return wrappedFunc};var addFunction=(func,sig)=>{var rtn=getFunctionAddress(func);if(rtn){return rtn}var ret=getEmptyTableSlot();try{setWasmTableEntry(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}var wrapped=convertJsFunctionToWasm(func,sig);setWasmTableEntry(ret,wrapped)}functionsInTableMap.set(func,ret);return ret};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}var asyncMode=opts?.async;if(asyncMode)return ret.then(onDone);ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var getTempRet0=val=>__emscripten_tempret_get();var stringToUTF16=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr};var stringToUTF32=(str,outPtr,maxBytesToWrite)=>{maxBytesToWrite??=2147483647;if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codePoint=str.codePointAt(i);if(codePoint>65535){i++}HEAP32[outPtr>>2]=codePoint;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr};var AsciiToString=ptr=>{var str="";while(1){var ch=HEAPU8[ptr++];if(!ch)return str;str+=String.fromCharCode(ch)}};var UTF16Decoder=new TextDecoder("utf-16le");var UTF16ToString=(ptr,maxBytesToRead,ignoreNul)=>{var idx=ptr>>1;var endIdx=findStringEnd(HEAPU16,idx,maxBytesToRead/2,ignoreNul);return UTF16Decoder.decode(HEAPU16.subarray(idx,endIdx))};var UTF32ToString=(ptr,maxBytesToRead,ignoreNul)=>{var str="";var startIdx=ptr>>2;for(var i=0;!(i>=maxBytesToRead/4);i++){var utf32=HEAPU32[startIdx+i];if(!utf32&&!ignoreNul)break;str+=String.fromCodePoint(utf32)}return str};var intArrayToString=array=>{var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")};var _getTempRet0=getTempRet0;FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();adapters_support();{if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["getTempRet0"]=getTempRet0;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["addFunction"]=addFunction;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["UTF8ToString"]=UTF8ToString;Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;Module["intArrayFromString"]=intArrayFromString;Module["intArrayToString"]=intArrayToString;Module["AsciiToString"]=AsciiToString;Module["UTF16ToString"]=UTF16ToString;Module["stringToUTF16"]=stringToUTF16;Module["UTF32ToString"]=UTF32ToString;Module["stringToUTF32"]=stringToUTF32;Module["writeArrayToMemory"]=writeArrayToMemory;Module["_getTempRet0"]=_getTempRet0;var _powersync_init_static,_sqlite3_status64,_sqlite3_status,_sqlite3_msize,_sqlite3_db_status,_sqlite3_vfs_find,_sqlite3_vfs_register,_sqlite3_vfs_unregister,_sqlite3_release_memory,_sqlite3_soft_heap_limit64,_sqlite3_memory_used,_sqlite3_hard_heap_limit64,_sqlite3_memory_highwater,_sqlite3_malloc,_sqlite3_malloc64,_sqlite3_free,_sqlite3_realloc,_sqlite3_realloc64,_sqlite3_str_vappendf,_sqlite3_str_append,_sqlite3_str_appendchar,_sqlite3_str_appendall,_sqlite3_str_appendf,_sqlite3_str_finish,_sqlite3_str_errcode,_sqlite3_str_length,_sqlite3_str_value,_sqlite3_str_reset,_sqlite3_str_new,_sqlite3_vmprintf,_sqlite3_mprintf,_sqlite3_vsnprintf,_sqlite3_snprintf,_sqlite3_log,_sqlite3_randomness,_sqlite3_stricmp,_sqlite3_strnicmp,_sqlite3_os_init,_sqlite3_os_end,_sqlite3_serialize,_sqlite3_prepare_v2,_sqlite3_step,_sqlite3_column_int64,_sqlite3_reset,_sqlite3_exec,_sqlite3_column_int,_sqlite3_finalize,_sqlite3_deserialize,_sqlite3_database_file_object,_sqlite3_backup_init,_sqlite3_backup_step,_sqlite3_backup_finish,_sqlite3_backup_remaining,_sqlite3_backup_pagecount,_sqlite3_clear_bindings,_sqlite3_value_blob,_sqlite3_value_text,_sqlite3_value_bytes,_sqlite3_value_bytes16,_sqlite3_value_double,_sqlite3_value_int,_sqlite3_value_int64,_sqlite3_value_subtype,_sqlite3_value_pointer,_sqlite3_value_text16,_sqlite3_value_text16be,_sqlite3_value_text16le,_sqlite3_value_type,_sqlite3_value_encoding,_sqlite3_value_nochange,_sqlite3_value_frombind,_sqlite3_value_dup,_sqlite3_value_free,_sqlite3_result_blob,_sqlite3_result_blob64,_sqlite3_result_double,_sqlite3_result_error,_sqlite3_result_error16,_sqlite3_result_int,_sqlite3_result_int64,_sqlite3_result_null,_sqlite3_result_pointer,_sqlite3_result_subtype,_sqlite3_result_text,_sqlite3_result_text64,_sqlite3_result_text16,_sqlite3_result_text16be,_sqlite3_result_text16le,_sqlite3_result_value,_sqlite3_result_error_toobig,_sqlite3_result_zeroblob,_sqlite3_result_zeroblob64,_sqlite3_result_error_code,_sqlite3_result_error_nomem,_sqlite3_user_data,_sqlite3_context_db_handle,_sqlite3_vtab_nochange,_sqlite3_vtab_in_first,_sqlite3_vtab_in_next,_sqlite3_aggregate_context,_sqlite3_get_auxdata,_sqlite3_set_auxdata,_sqlite3_column_count,_sqlite3_data_count,_sqlite3_column_blob,_sqlite3_column_bytes,_sqlite3_column_bytes16,_sqlite3_column_double,_sqlite3_column_text,_sqlite3_column_value,_sqlite3_column_text16,_sqlite3_column_type,_sqlite3_column_name,_sqlite3_column_name16,_sqlite3_bind_blob,_sqlite3_bind_blob64,_sqlite3_bind_double,_sqlite3_bind_int,_sqlite3_bind_int64,_sqlite3_bind_null,_sqlite3_bind_pointer,_sqlite3_bind_text,_sqlite3_bind_text64,_sqlite3_bind_text16,_sqlite3_bind_value,_sqlite3_bind_zeroblob,_sqlite3_bind_zeroblob64,_sqlite3_bind_parameter_count,_sqlite3_bind_parameter_name,_sqlite3_bind_parameter_index,_sqlite3_db_handle,_sqlite3_stmt_readonly,_sqlite3_stmt_isexplain,_sqlite3_stmt_explain,_sqlite3_stmt_busy,_sqlite3_next_stmt,_sqlite3_stmt_status,_sqlite3_sql,_sqlite3_expanded_sql,_sqlite3_value_numeric_type,_sqlite3_blob_open,_sqlite3_blob_close,_sqlite3_blob_read,_sqlite3_blob_write,_sqlite3_blob_bytes,_sqlite3_blob_reopen,_sqlite3_set_authorizer,_sqlite3_strglob,_sqlite3_strlike,_sqlite3_errmsg,_sqlite3_load_extension,_sqlite3_enable_load_extension,_sqlite3_auto_extension,_sqlite3_cancel_auto_extension,_sqlite3_reset_auto_extension,_sqlite3_prepare,_sqlite3_prepare_v3,_sqlite3_prepare16,_sqlite3_prepare16_v2,_sqlite3_prepare16_v3,_sqlite3_get_table,_sqlite3_free_table,_sqlite3_create_module,_sqlite3_create_module_v2,_sqlite3_drop_modules,_sqlite3_declare_vtab,_sqlite3_vtab_on_conflict,_sqlite3_vtab_config,_sqlite3_vtab_collation,_sqlite3_vtab_in,_sqlite3_vtab_rhs_value,_sqlite3_vtab_distinct,_sqlite3_keyword_name,_sqlite3_keyword_count,_sqlite3_keyword_check,_sqlite3_complete,_sqlite3_complete16,_sqlite3_libversion,_sqlite3_libversion_number,_sqlite3_threadsafe,_sqlite3_initialize,_sqlite3_shutdown,_sqlite3_config,_sqlite3_db_mutex,_sqlite3_db_release_memory,_sqlite3_db_cacheflush,_sqlite3_db_config,_sqlite3_last_insert_rowid,_sqlite3_set_last_insert_rowid,_sqlite3_changes64,_sqlite3_changes,_sqlite3_total_changes64,_sqlite3_total_changes,_sqlite3_txn_state,_sqlite3_close,_sqlite3_close_v2,_sqlite3_busy_handler,_sqlite3_progress_handler,_sqlite3_busy_timeout,_sqlite3_interrupt,_sqlite3_is_interrupted,_sqlite3_create_function,_sqlite3_create_function_v2,_sqlite3_create_window_function,_sqlite3_create_function16,_sqlite3_overload_function,_sqlite3_trace_v2,_sqlite3_commit_hook,_sqlite3_update_hook,_sqlite3_rollback_hook,_sqlite3_autovacuum_pages,_sqlite3_wal_autocheckpoint,_sqlite3_wal_hook,_sqlite3_wal_checkpoint_v2,_sqlite3_wal_checkpoint,_sqlite3_error_offset,_sqlite3_errmsg16,_sqlite3_errcode,_sqlite3_extended_errcode,_sqlite3_system_errno,_sqlite3_errstr,_sqlite3_limit,_sqlite3_open,_sqlite3_open_v2,_sqlite3_open16,_sqlite3_create_collation,_sqlite3_create_collation_v2,_sqlite3_create_collation16,_sqlite3_collation_needed,_sqlite3_collation_needed16,_sqlite3_get_clientdata,_sqlite3_set_clientdata,_sqlite3_get_autocommit,_sqlite3_table_column_metadata,_sqlite3_sleep,_sqlite3_extended_result_codes,_sqlite3_file_control,_sqlite3_test_control,_sqlite3_create_filename,_sqlite3_free_filename,_sqlite3_uri_parameter,_sqlite3_uri_key,_sqlite3_uri_boolean,_sqlite3_uri_int64,_sqlite3_filename_database,_sqlite3_filename_journal,_sqlite3_filename_wal,_sqlite3_db_name,_sqlite3_db_filename,_sqlite3_db_readonly,_sqlite3_compileoption_used,_sqlite3_compileoption_get,_sqlite3_sourceid,_memcmp,_malloc,_free,_RegisterExtensionFunctions,_getSqliteFree,_main,_libauthorizer_set_authorizer,_libfunction_create_function,_libhook_commit_hook,_libhook_update_hook,_libprogress_progress_handler,_libvfs_vfs_register,_memcpy,_memset,_emscripten_builtin_memalign,__emscripten_timeout,__emscripten_tempret_get,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,dynCall_viiiij,dynCall_vijii,dynCall_iiiij,dynCall_viji,dynCall_iij,dynCall_iijii,dynCall_iiji,dynCall_iiiiiij,dynCall_iiij,dynCall_jii,dynCall_ji,dynCall_vij,dynCall_iiiiijii,dynCall_j,dynCall_jj,dynCall_jiij,dynCall_iiiiji,dynCall_iiiijii,dynCall_ij,dynCall_viiji,dynCall_viijii,dynCall_iiiijji,memory,_sqlite3_version,__indirect_function_table,wasmMemory,wasmTable;function assignWasmExports(wasmExports){_powersync_init_static=Module["_powersync_init_static"]=wasmExports["powersync_init_static"];_sqlite3_status64=Module["_sqlite3_status64"]=wasmExports["sqlite3_status64"];_sqlite3_status=Module["_sqlite3_status"]=wasmExports["sqlite3_status"];_sqlite3_msize=Module["_sqlite3_msize"]=wasmExports["sqlite3_msize"];_sqlite3_db_status=Module["_sqlite3_db_status"]=wasmExports["sqlite3_db_status"];_sqlite3_vfs_find=Module["_sqlite3_vfs_find"]=wasmExports["sqlite3_vfs_find"];_sqlite3_vfs_register=Module["_sqlite3_vfs_register"]=wasmExports["sqlite3_vfs_register"];_sqlite3_vfs_unregister=Module["_sqlite3_vfs_unregister"]=wasmExports["sqlite3_vfs_unregister"];_sqlite3_release_memory=Module["_sqlite3_release_memory"]=wasmExports["sqlite3_release_memory"];_sqlite3_soft_heap_limit64=Module["_sqlite3_soft_heap_limit64"]=wasmExports["sqlite3_soft_heap_limit64"];_sqlite3_memory_used=Module["_sqlite3_memory_used"]=wasmExports["sqlite3_memory_used"];_sqlite3_hard_heap_limit64=Module["_sqlite3_hard_heap_limit64"]=wasmExports["sqlite3_hard_heap_limit64"];_sqlite3_memory_highwater=Module["_sqlite3_memory_highwater"]=wasmExports["sqlite3_memory_highwater"];_sqlite3_malloc=Module["_sqlite3_malloc"]=wasmExports["sqlite3_malloc"];_sqlite3_malloc64=Module["_sqlite3_malloc64"]=wasmExports["sqlite3_malloc64"];_sqlite3_free=Module["_sqlite3_free"]=wasmExports["sqlite3_free"];_sqlite3_realloc=Module["_sqlite3_realloc"]=wasmExports["sqlite3_realloc"];_sqlite3_realloc64=Module["_sqlite3_realloc64"]=wasmExports["sqlite3_realloc64"];_sqlite3_str_vappendf=Module["_sqlite3_str_vappendf"]=wasmExports["sqlite3_str_vappendf"];_sqlite3_str_append=Module["_sqlite3_str_append"]=wasmExports["sqlite3_str_append"];_sqlite3_str_appendchar=Module["_sqlite3_str_appendchar"]=wasmExports["sqlite3_str_appendchar"];_sqlite3_str_appendall=Module["_sqlite3_str_appendall"]=wasmExports["sqlite3_str_appendall"];_sqlite3_str_appendf=Module["_sqlite3_str_appendf"]=wasmExports["sqlite3_str_appendf"];_sqlite3_str_finish=Module["_sqlite3_str_finish"]=wasmExports["sqlite3_str_finish"];_sqlite3_str_errcode=Module["_sqlite3_str_errcode"]=wasmExports["sqlite3_str_errcode"];_sqlite3_str_length=Module["_sqlite3_str_length"]=wasmExports["sqlite3_str_length"];_sqlite3_str_value=Module["_sqlite3_str_value"]=wasmExports["sqlite3_str_value"];_sqlite3_str_reset=Module["_sqlite3_str_reset"]=wasmExports["sqlite3_str_reset"];_sqlite3_str_new=Module["_sqlite3_str_new"]=wasmExports["sqlite3_str_new"];_sqlite3_vmprintf=Module["_sqlite3_vmprintf"]=wasmExports["sqlite3_vmprintf"];_sqlite3_mprintf=Module["_sqlite3_mprintf"]=wasmExports["sqlite3_mprintf"];_sqlite3_vsnprintf=Module["_sqlite3_vsnprintf"]=wasmExports["sqlite3_vsnprintf"];_sqlite3_snprintf=Module["_sqlite3_snprintf"]=wasmExports["sqlite3_snprintf"];_sqlite3_log=Module["_sqlite3_log"]=wasmExports["sqlite3_log"];_sqlite3_randomness=Module["_sqlite3_randomness"]=wasmExports["sqlite3_randomness"];_sqlite3_stricmp=Module["_sqlite3_stricmp"]=wasmExports["sqlite3_stricmp"];_sqlite3_strnicmp=Module["_sqlite3_strnicmp"]=wasmExports["sqlite3_strnicmp"];_sqlite3_os_init=Module["_sqlite3_os_init"]=wasmExports["sqlite3_os_init"];_sqlite3_os_end=Module["_sqlite3_os_end"]=wasmExports["sqlite3_os_end"];_sqlite3_serialize=Module["_sqlite3_serialize"]=wasmExports["sqlite3_serialize"];_sqlite3_prepare_v2=Module["_sqlite3_prepare_v2"]=wasmExports["sqlite3_prepare_v2"];_sqlite3_step=Module["_sqlite3_step"]=wasmExports["sqlite3_step"];_sqlite3_column_int64=Module["_sqlite3_column_int64"]=wasmExports["sqlite3_column_int64"];_sqlite3_reset=Module["_sqlite3_reset"]=wasmExports["sqlite3_reset"];_sqlite3_exec=Module["_sqlite3_exec"]=wasmExports["sqlite3_exec"];_sqlite3_column_int=Module["_sqlite3_column_int"]=wasmExports["sqlite3_column_int"];_sqlite3_finalize=Module["_sqlite3_finalize"]=wasmExports["sqlite3_finalize"];_sqlite3_deserialize=Module["_sqlite3_deserialize"]=wasmExports["sqlite3_deserialize"];_sqlite3_database_file_object=Module["_sqlite3_database_file_object"]=wasmExports["sqlite3_database_file_object"];_sqlite3_backup_init=Module["_sqlite3_backup_init"]=wasmExports["sqlite3_backup_init"];_sqlite3_backup_step=Module["_sqlite3_backup_step"]=wasmExports["sqlite3_backup_step"];_sqlite3_backup_finish=Module["_sqlite3_backup_finish"]=wasmExports["sqlite3_backup_finish"];_sqlite3_backup_remaining=Module["_sqlite3_backup_remaining"]=wasmExports["sqlite3_backup_remaining"];_sqlite3_backup_pagecount=Module["_sqlite3_backup_pagecount"]=wasmExports["sqlite3_backup_pagecount"];_sqlite3_clear_bindings=Module["_sqlite3_clear_bindings"]=wasmExports["sqlite3_clear_bindings"];_sqlite3_value_blob=Module["_sqlite3_value_blob"]=wasmExports["sqlite3_value_blob"];_sqlite3_value_text=Module["_sqlite3_value_text"]=wasmExports["sqlite3_value_text"];_sqlite3_value_bytes=Module["_sqlite3_value_bytes"]=wasmExports["sqlite3_value_bytes"];_sqlite3_value_bytes16=Module["_sqlite3_value_bytes16"]=wasmExports["sqlite3_value_bytes16"];_sqlite3_value_double=Module["_sqlite3_value_double"]=wasmExports["sqlite3_value_double"];_sqlite3_value_int=Module["_sqlite3_value_int"]=wasmExports["sqlite3_value_int"];_sqlite3_value_int64=Module["_sqlite3_value_int64"]=wasmExports["sqlite3_value_int64"];_sqlite3_value_subtype=Module["_sqlite3_value_subtype"]=wasmExports["sqlite3_value_subtype"];_sqlite3_value_pointer=Module["_sqlite3_value_pointer"]=wasmExports["sqlite3_value_pointer"];_sqlite3_value_text16=Module["_sqlite3_value_text16"]=wasmExports["sqlite3_value_text16"];_sqlite3_value_text16be=Module["_sqlite3_value_text16be"]=wasmExports["sqlite3_value_text16be"];_sqlite3_value_text16le=Module["_sqlite3_value_text16le"]=wasmExports["sqlite3_value_text16le"];_sqlite3_value_type=Module["_sqlite3_value_type"]=wasmExports["sqlite3_value_type"];_sqlite3_value_encoding=Module["_sqlite3_value_encoding"]=wasmExports["sqlite3_value_encoding"];_sqlite3_value_nochange=Module["_sqlite3_value_nochange"]=wasmExports["sqlite3_value_nochange"];_sqlite3_value_frombind=Module["_sqlite3_value_frombind"]=wasmExports["sqlite3_value_frombind"];_sqlite3_value_dup=Module["_sqlite3_value_dup"]=wasmExports["sqlite3_value_dup"];_sqlite3_value_free=Module["_sqlite3_value_free"]=wasmExports["sqlite3_value_free"];_sqlite3_result_blob=Module["_sqlite3_result_blob"]=wasmExports["sqlite3_result_blob"];_sqlite3_result_blob64=Module["_sqlite3_result_blob64"]=wasmExports["sqlite3_result_blob64"];_sqlite3_result_double=Module["_sqlite3_result_double"]=wasmExports["sqlite3_result_double"];_sqlite3_result_error=Module["_sqlite3_result_error"]=wasmExports["sqlite3_result_error"];_sqlite3_result_error16=Module["_sqlite3_result_error16"]=wasmExports["sqlite3_result_error16"];_sqlite3_result_int=Module["_sqlite3_result_int"]=wasmExports["sqlite3_result_int"];_sqlite3_result_int64=Module["_sqlite3_result_int64"]=wasmExports["sqlite3_result_int64"];_sqlite3_result_null=Module["_sqlite3_result_null"]=wasmExports["sqlite3_result_null"];_sqlite3_result_pointer=Module["_sqlite3_result_pointer"]=wasmExports["sqlite3_result_pointer"];_sqlite3_result_subtype=Module["_sqlite3_result_subtype"]=wasmExports["sqlite3_result_subtype"];_sqlite3_result_text=Module["_sqlite3_result_text"]=wasmExports["sqlite3_result_text"];_sqlite3_result_text64=Module["_sqlite3_result_text64"]=wasmExports["sqlite3_result_text64"];_sqlite3_result_text16=Module["_sqlite3_result_text16"]=wasmExports["sqlite3_result_text16"];_sqlite3_result_text16be=Module["_sqlite3_result_text16be"]=wasmExports["sqlite3_result_text16be"];_sqlite3_result_text16le=Module["_sqlite3_result_text16le"]=wasmExports["sqlite3_result_text16le"];_sqlite3_result_value=Module["_sqlite3_result_value"]=wasmExports["sqlite3_result_value"];_sqlite3_result_error_toobig=Module["_sqlite3_result_error_toobig"]=wasmExports["sqlite3_result_error_toobig"];_sqlite3_result_zeroblob=Module["_sqlite3_result_zeroblob"]=wasmExports["sqlite3_result_zeroblob"];_sqlite3_result_zeroblob64=Module["_sqlite3_result_zeroblob64"]=wasmExports["sqlite3_result_zeroblob64"];_sqlite3_result_error_code=Module["_sqlite3_result_error_code"]=wasmExports["sqlite3_result_error_code"];_sqlite3_result_error_nomem=Module["_sqlite3_result_error_nomem"]=wasmExports["sqlite3_result_error_nomem"];_sqlite3_user_data=Module["_sqlite3_user_data"]=wasmExports["sqlite3_user_data"];_sqlite3_context_db_handle=Module["_sqlite3_context_db_handle"]=wasmExports["sqlite3_context_db_handle"];_sqlite3_vtab_nochange=Module["_sqlite3_vtab_nochange"]=wasmExports["sqlite3_vtab_nochange"];_sqlite3_vtab_in_first=Module["_sqlite3_vtab_in_first"]=wasmExports["sqlite3_vtab_in_first"];_sqlite3_vtab_in_next=Module["_sqlite3_vtab_in_next"]=wasmExports["sqlite3_vtab_in_next"];_sqlite3_aggregate_context=Module["_sqlite3_aggregate_context"]=wasmExports["sqlite3_aggregate_context"];_sqlite3_get_auxdata=Module["_sqlite3_get_auxdata"]=wasmExports["sqlite3_get_auxdata"];_sqlite3_set_auxdata=Module["_sqlite3_set_auxdata"]=wasmExports["sqlite3_set_auxdata"];_sqlite3_column_count=Module["_sqlite3_column_count"]=wasmExports["sqlite3_column_count"];_sqlite3_data_count=Module["_sqlite3_data_count"]=wasmExports["sqlite3_data_count"];_sqlite3_column_blob=Module["_sqlite3_column_blob"]=wasmExports["sqlite3_column_blob"];_sqlite3_column_bytes=Module["_sqlite3_column_bytes"]=wasmExports["sqlite3_column_bytes"];_sqlite3_column_bytes16=Module["_sqlite3_column_bytes16"]=wasmExports["sqlite3_column_bytes16"];_sqlite3_column_double=Module["_sqlite3_column_double"]=wasmExports["sqlite3_column_double"];_sqlite3_column_text=Module["_sqlite3_column_text"]=wasmExports["sqlite3_column_text"];_sqlite3_column_value=Module["_sqlite3_column_value"]=wasmExports["sqlite3_column_value"];_sqlite3_column_text16=Module["_sqlite3_column_text16"]=wasmExports["sqlite3_column_text16"];_sqlite3_column_type=Module["_sqlite3_column_type"]=wasmExports["sqlite3_column_type"];_sqlite3_column_name=Module["_sqlite3_column_name"]=wasmExports["sqlite3_column_name"];_sqlite3_column_name16=Module["_sqlite3_column_name16"]=wasmExports["sqlite3_column_name16"];_sqlite3_bind_blob=Module["_sqlite3_bind_blob"]=wasmExports["sqlite3_bind_blob"];_sqlite3_bind_blob64=Module["_sqlite3_bind_blob64"]=wasmExports["sqlite3_bind_blob64"];_sqlite3_bind_double=Module["_sqlite3_bind_double"]=wasmExports["sqlite3_bind_double"];_sqlite3_bind_int=Module["_sqlite3_bind_int"]=wasmExports["sqlite3_bind_int"];_sqlite3_bind_int64=Module["_sqlite3_bind_int64"]=wasmExports["sqlite3_bind_int64"];_sqlite3_bind_null=Module["_sqlite3_bind_null"]=wasmExports["sqlite3_bind_null"];_sqlite3_bind_pointer=Module["_sqlite3_bind_pointer"]=wasmExports["sqlite3_bind_pointer"];_sqlite3_bind_text=Module["_sqlite3_bind_text"]=wasmExports["sqlite3_bind_text"];_sqlite3_bind_text64=Module["_sqlite3_bind_text64"]=wasmExports["sqlite3_bind_text64"];_sqlite3_bind_text16=Module["_sqlite3_bind_text16"]=wasmExports["sqlite3_bind_text16"];_sqlite3_bind_value=Module["_sqlite3_bind_value"]=wasmExports["sqlite3_bind_value"];_sqlite3_bind_zeroblob=Module["_sqlite3_bind_zeroblob"]=wasmExports["sqlite3_bind_zeroblob"];_sqlite3_bind_zeroblob64=Module["_sqlite3_bind_zeroblob64"]=wasmExports["sqlite3_bind_zeroblob64"];_sqlite3_bind_parameter_count=Module["_sqlite3_bind_parameter_count"]=wasmExports["sqlite3_bind_parameter_count"];_sqlite3_bind_parameter_name=Module["_sqlite3_bind_parameter_name"]=wasmExports["sqlite3_bind_parameter_name"];_sqlite3_bind_parameter_index=Module["_sqlite3_bind_parameter_index"]=wasmExports["sqlite3_bind_parameter_index"];_sqlite3_db_handle=Module["_sqlite3_db_handle"]=wasmExports["sqlite3_db_handle"];_sqlite3_stmt_readonly=Module["_sqlite3_stmt_readonly"]=wasmExports["sqlite3_stmt_readonly"];_sqlite3_stmt_isexplain=Module["_sqlite3_stmt_isexplain"]=wasmExports["sqlite3_stmt_isexplain"];_sqlite3_stmt_explain=Module["_sqlite3_stmt_explain"]=wasmExports["sqlite3_stmt_explain"];_sqlite3_stmt_busy=Module["_sqlite3_stmt_busy"]=wasmExports["sqlite3_stmt_busy"];_sqlite3_next_stmt=Module["_sqlite3_next_stmt"]=wasmExports["sqlite3_next_stmt"];_sqlite3_stmt_status=Module["_sqlite3_stmt_status"]=wasmExports["sqlite3_stmt_status"];_sqlite3_sql=Module["_sqlite3_sql"]=wasmExports["sqlite3_sql"];_sqlite3_expanded_sql=Module["_sqlite3_expanded_sql"]=wasmExports["sqlite3_expanded_sql"];_sqlite3_value_numeric_type=Module["_sqlite3_value_numeric_type"]=wasmExports["sqlite3_value_numeric_type"];_sqlite3_blob_open=Module["_sqlite3_blob_open"]=wasmExports["sqlite3_blob_open"];_sqlite3_blob_close=Module["_sqlite3_blob_close"]=wasmExports["sqlite3_blob_close"];_sqlite3_blob_read=Module["_sqlite3_blob_read"]=wasmExports["sqlite3_blob_read"];_sqlite3_blob_write=Module["_sqlite3_blob_write"]=wasmExports["sqlite3_blob_write"];_sqlite3_blob_bytes=Module["_sqlite3_blob_bytes"]=wasmExports["sqlite3_blob_bytes"];_sqlite3_blob_reopen=Module["_sqlite3_blob_reopen"]=wasmExports["sqlite3_blob_reopen"];_sqlite3_set_authorizer=Module["_sqlite3_set_authorizer"]=wasmExports["sqlite3_set_authorizer"];_sqlite3_strglob=Module["_sqlite3_strglob"]=wasmExports["sqlite3_strglob"];_sqlite3_strlike=Module["_sqlite3_strlike"]=wasmExports["sqlite3_strlike"];_sqlite3_errmsg=Module["_sqlite3_errmsg"]=wasmExports["sqlite3_errmsg"];_sqlite3_load_extension=Module["_sqlite3_load_extension"]=wasmExports["sqlite3_load_extension"];_sqlite3_enable_load_extension=Module["_sqlite3_enable_load_extension"]=wasmExports["sqlite3_enable_load_extension"];_sqlite3_auto_extension=Module["_sqlite3_auto_extension"]=wasmExports["sqlite3_auto_extension"];_sqlite3_cancel_auto_extension=Module["_sqlite3_cancel_auto_extension"]=wasmExports["sqlite3_cancel_auto_extension"];_sqlite3_reset_auto_extension=Module["_sqlite3_reset_auto_extension"]=wasmExports["sqlite3_reset_auto_extension"];_sqlite3_prepare=Module["_sqlite3_prepare"]=wasmExports["sqlite3_prepare"];_sqlite3_prepare_v3=Module["_sqlite3_prepare_v3"]=wasmExports["sqlite3_prepare_v3"];_sqlite3_prepare16=Module["_sqlite3_prepare16"]=wasmExports["sqlite3_prepare16"];_sqlite3_prepare16_v2=Module["_sqlite3_prepare16_v2"]=wasmExports["sqlite3_prepare16_v2"];_sqlite3_prepare16_v3=Module["_sqlite3_prepare16_v3"]=wasmExports["sqlite3_prepare16_v3"];_sqlite3_get_table=Module["_sqlite3_get_table"]=wasmExports["sqlite3_get_table"];_sqlite3_free_table=Module["_sqlite3_free_table"]=wasmExports["sqlite3_free_table"];_sqlite3_create_module=Module["_sqlite3_create_module"]=wasmExports["sqlite3_create_module"];_sqlite3_create_module_v2=Module["_sqlite3_create_module_v2"]=wasmExports["sqlite3_create_module_v2"];_sqlite3_drop_modules=Module["_sqlite3_drop_modules"]=wasmExports["sqlite3_drop_modules"];_sqlite3_declare_vtab=Module["_sqlite3_declare_vtab"]=wasmExports["sqlite3_declare_vtab"];_sqlite3_vtab_on_conflict=Module["_sqlite3_vtab_on_conflict"]=wasmExports["sqlite3_vtab_on_conflict"];_sqlite3_vtab_config=Module["_sqlite3_vtab_config"]=wasmExports["sqlite3_vtab_config"];_sqlite3_vtab_collation=Module["_sqlite3_vtab_collation"]=wasmExports["sqlite3_vtab_collation"];_sqlite3_vtab_in=Module["_sqlite3_vtab_in"]=wasmExports["sqlite3_vtab_in"];_sqlite3_vtab_rhs_value=Module["_sqlite3_vtab_rhs_value"]=wasmExports["sqlite3_vtab_rhs_value"];_sqlite3_vtab_distinct=Module["_sqlite3_vtab_distinct"]=wasmExports["sqlite3_vtab_distinct"];_sqlite3_keyword_name=Module["_sqlite3_keyword_name"]=wasmExports["sqlite3_keyword_name"];_sqlite3_keyword_count=Module["_sqlite3_keyword_count"]=wasmExports["sqlite3_keyword_count"];_sqlite3_keyword_check=Module["_sqlite3_keyword_check"]=wasmExports["sqlite3_keyword_check"];_sqlite3_complete=Module["_sqlite3_complete"]=wasmExports["sqlite3_complete"];_sqlite3_complete16=Module["_sqlite3_complete16"]=wasmExports["sqlite3_complete16"];_sqlite3_libversion=Module["_sqlite3_libversion"]=wasmExports["sqlite3_libversion"];_sqlite3_libversion_number=Module["_sqlite3_libversion_number"]=wasmExports["sqlite3_libversion_number"];_sqlite3_threadsafe=Module["_sqlite3_threadsafe"]=wasmExports["sqlite3_threadsafe"];_sqlite3_initialize=Module["_sqlite3_initialize"]=wasmExports["sqlite3_initialize"];_sqlite3_shutdown=Module["_sqlite3_shutdown"]=wasmExports["sqlite3_shutdown"];_sqlite3_config=Module["_sqlite3_config"]=wasmExports["sqlite3_config"];_sqlite3_db_mutex=Module["_sqlite3_db_mutex"]=wasmExports["sqlite3_db_mutex"];_sqlite3_db_release_memory=Module["_sqlite3_db_release_memory"]=wasmExports["sqlite3_db_release_memory"];_sqlite3_db_cacheflush=Module["_sqlite3_db_cacheflush"]=wasmExports["sqlite3_db_cacheflush"];_sqlite3_db_config=Module["_sqlite3_db_config"]=wasmExports["sqlite3_db_config"];_sqlite3_last_insert_rowid=Module["_sqlite3_last_insert_rowid"]=wasmExports["sqlite3_last_insert_rowid"];_sqlite3_set_last_insert_rowid=Module["_sqlite3_set_last_insert_rowid"]=wasmExports["sqlite3_set_last_insert_rowid"];_sqlite3_changes64=Module["_sqlite3_changes64"]=wasmExports["sqlite3_changes64"];_sqlite3_changes=Module["_sqlite3_changes"]=wasmExports["sqlite3_changes"];_sqlite3_total_changes64=Module["_sqlite3_total_changes64"]=wasmExports["sqlite3_total_changes64"];_sqlite3_total_changes=Module["_sqlite3_total_changes"]=wasmExports["sqlite3_total_changes"];_sqlite3_txn_state=Module["_sqlite3_txn_state"]=wasmExports["sqlite3_txn_state"];_sqlite3_close=Module["_sqlite3_close"]=wasmExports["sqlite3_close"];_sqlite3_close_v2=Module["_sqlite3_close_v2"]=wasmExports["sqlite3_close_v2"];_sqlite3_busy_handler=Module["_sqlite3_busy_handler"]=wasmExports["sqlite3_busy_handler"];_sqlite3_progress_handler=Module["_sqlite3_progress_handler"]=wasmExports["sqlite3_progress_handler"];_sqlite3_busy_timeout=Module["_sqlite3_busy_timeout"]=wasmExports["sqlite3_busy_timeout"];_sqlite3_interrupt=Module["_sqlite3_interrupt"]=wasmExports["sqlite3_interrupt"];_sqlite3_is_interrupted=Module["_sqlite3_is_interrupted"]=wasmExports["sqlite3_is_interrupted"];_sqlite3_create_function=Module["_sqlite3_create_function"]=wasmExports["sqlite3_create_function"];_sqlite3_create_function_v2=Module["_sqlite3_create_function_v2"]=wasmExports["sqlite3_create_function_v2"];_sqlite3_create_window_function=Module["_sqlite3_create_window_function"]=wasmExports["sqlite3_create_window_function"];_sqlite3_create_function16=Module["_sqlite3_create_function16"]=wasmExports["sqlite3_create_function16"];_sqlite3_overload_function=Module["_sqlite3_overload_function"]=wasmExports["sqlite3_overload_function"];_sqlite3_trace_v2=Module["_sqlite3_trace_v2"]=wasmExports["sqlite3_trace_v2"];_sqlite3_commit_hook=Module["_sqlite3_commit_hook"]=wasmExports["sqlite3_commit_hook"];_sqlite3_update_hook=Module["_sqlite3_update_hook"]=wasmExports["sqlite3_update_hook"];_sqlite3_rollback_hook=Module["_sqlite3_rollback_hook"]=wasmExports["sqlite3_rollback_hook"];_sqlite3_autovacuum_pages=Module["_sqlite3_autovacuum_pages"]=wasmExports["sqlite3_autovacuum_pages"];_sqlite3_wal_autocheckpoint=Module["_sqlite3_wal_autocheckpoint"]=wasmExports["sqlite3_wal_autocheckpoint"];_sqlite3_wal_hook=Module["_sqlite3_wal_hook"]=wasmExports["sqlite3_wal_hook"];_sqlite3_wal_checkpoint_v2=Module["_sqlite3_wal_checkpoint_v2"]=wasmExports["sqlite3_wal_checkpoint_v2"];_sqlite3_wal_checkpoint=Module["_sqlite3_wal_checkpoint"]=wasmExports["sqlite3_wal_checkpoint"];_sqlite3_error_offset=Module["_sqlite3_error_offset"]=wasmExports["sqlite3_error_offset"];_sqlite3_errmsg16=Module["_sqlite3_errmsg16"]=wasmExports["sqlite3_errmsg16"];_sqlite3_errcode=Module["_sqlite3_errcode"]=wasmExports["sqlite3_errcode"];_sqlite3_extended_errcode=Module["_sqlite3_extended_errcode"]=wasmExports["sqlite3_extended_errcode"];_sqlite3_system_errno=Module["_sqlite3_system_errno"]=wasmExports["sqlite3_system_errno"];_sqlite3_errstr=Module["_sqlite3_errstr"]=wasmExports["sqlite3_errstr"];_sqlite3_limit=Module["_sqlite3_limit"]=wasmExports["sqlite3_limit"];_sqlite3_open=Module["_sqlite3_open"]=wasmExports["sqlite3_open"];_sqlite3_open_v2=Module["_sqlite3_open_v2"]=wasmExports["sqlite3_open_v2"];_sqlite3_open16=Module["_sqlite3_open16"]=wasmExports["sqlite3_open16"];_sqlite3_create_collation=Module["_sqlite3_create_collation"]=wasmExports["sqlite3_create_collation"];_sqlite3_create_collation_v2=Module["_sqlite3_create_collation_v2"]=wasmExports["sqlite3_create_collation_v2"];_sqlite3_create_collation16=Module["_sqlite3_create_collation16"]=wasmExports["sqlite3_create_collation16"];_sqlite3_collation_needed=Module["_sqlite3_collation_needed"]=wasmExports["sqlite3_collation_needed"];_sqlite3_collation_needed16=Module["_sqlite3_collation_needed16"]=wasmExports["sqlite3_collation_needed16"];_sqlite3_get_clientdata=Module["_sqlite3_get_clientdata"]=wasmExports["sqlite3_get_clientdata"];_sqlite3_set_clientdata=Module["_sqlite3_set_clientdata"]=wasmExports["sqlite3_set_clientdata"];_sqlite3_get_autocommit=Module["_sqlite3_get_autocommit"]=wasmExports["sqlite3_get_autocommit"];_sqlite3_table_column_metadata=Module["_sqlite3_table_column_metadata"]=wasmExports["sqlite3_table_column_metadata"];_sqlite3_sleep=Module["_sqlite3_sleep"]=wasmExports["sqlite3_sleep"];_sqlite3_extended_result_codes=Module["_sqlite3_extended_result_codes"]=wasmExports["sqlite3_extended_result_codes"];_sqlite3_file_control=Module["_sqlite3_file_control"]=wasmExports["sqlite3_file_control"];_sqlite3_test_control=Module["_sqlite3_test_control"]=wasmExports["sqlite3_test_control"];_sqlite3_create_filename=Module["_sqlite3_create_filename"]=wasmExports["sqlite3_create_filename"];_sqlite3_free_filename=Module["_sqlite3_free_filename"]=wasmExports["sqlite3_free_filename"];_sqlite3_uri_parameter=Module["_sqlite3_uri_parameter"]=wasmExports["sqlite3_uri_parameter"];_sqlite3_uri_key=Module["_sqlite3_uri_key"]=wasmExports["sqlite3_uri_key"];_sqlite3_uri_boolean=Module["_sqlite3_uri_boolean"]=wasmExports["sqlite3_uri_boolean"];_sqlite3_uri_int64=Module["_sqlite3_uri_int64"]=wasmExports["sqlite3_uri_int64"];_sqlite3_filename_database=Module["_sqlite3_filename_database"]=wasmExports["sqlite3_filename_database"];_sqlite3_filename_journal=Module["_sqlite3_filename_journal"]=wasmExports["sqlite3_filename_journal"];_sqlite3_filename_wal=Module["_sqlite3_filename_wal"]=wasmExports["sqlite3_filename_wal"];_sqlite3_db_name=Module["_sqlite3_db_name"]=wasmExports["sqlite3_db_name"];_sqlite3_db_filename=Module["_sqlite3_db_filename"]=wasmExports["sqlite3_db_filename"];_sqlite3_db_readonly=Module["_sqlite3_db_readonly"]=wasmExports["sqlite3_db_readonly"];_sqlite3_compileoption_used=Module["_sqlite3_compileoption_used"]=wasmExports["sqlite3_compileoption_used"];_sqlite3_compileoption_get=Module["_sqlite3_compileoption_get"]=wasmExports["sqlite3_compileoption_get"];_sqlite3_sourceid=Module["_sqlite3_sourceid"]=wasmExports["sqlite3_sourceid"];_memcmp=Module["_memcmp"]=wasmExports["memcmp"];_malloc=Module["_malloc"]=wasmExports["malloc"];_free=Module["_free"]=wasmExports["free"];_RegisterExtensionFunctions=Module["_RegisterExtensionFunctions"]=wasmExports["RegisterExtensionFunctions"];_getSqliteFree=Module["_getSqliteFree"]=wasmExports["getSqliteFree"];_main=Module["_main"]=wasmExports["main"];_libauthorizer_set_authorizer=Module["_libauthorizer_set_authorizer"]=wasmExports["libauthorizer_set_authorizer"];_libfunction_create_function=Module["_libfunction_create_function"]=wasmExports["libfunction_create_function"];_libhook_commit_hook=Module["_libhook_commit_hook"]=wasmExports["libhook_commit_hook"];_libhook_update_hook=Module["_libhook_update_hook"]=wasmExports["libhook_update_hook"];_libprogress_progress_handler=Module["_libprogress_progress_handler"]=wasmExports["libprogress_progress_handler"];_libvfs_vfs_register=Module["_libvfs_vfs_register"]=wasmExports["libvfs_vfs_register"];_memcpy=Module["_memcpy"]=wasmExports["memcpy"];_memset=Module["_memset"]=wasmExports["memset"];_emscripten_builtin_memalign=wasmExports["emscripten_builtin_memalign"];__emscripten_timeout=wasmExports["_emscripten_timeout"];__emscripten_tempret_get=wasmExports["_emscripten_tempret_get"];__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"];__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"];_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"];dynCall_viiiij=wasmExports["dynCall_viiiij"];dynCall_vijii=wasmExports["dynCall_vijii"];dynCall_iiiij=wasmExports["dynCall_iiiij"];dynCall_viji=wasmExports["dynCall_viji"];dynCall_iij=wasmExports["dynCall_iij"];dynCall_iijii=wasmExports["dynCall_iijii"];dynCall_iiji=wasmExports["dynCall_iiji"];dynCall_iiiiiij=wasmExports["dynCall_iiiiiij"];dynCall_iiij=wasmExports["dynCall_iiij"];dynCall_jii=wasmExports["dynCall_jii"];dynCall_ji=wasmExports["dynCall_ji"];dynCall_vij=wasmExports["dynCall_vij"];dynCall_iiiiijii=wasmExports["dynCall_iiiiijii"];dynCall_j=wasmExports["dynCall_j"];dynCall_jj=wasmExports["dynCall_jj"];dynCall_jiij=wasmExports["dynCall_jiij"];dynCall_iiiiji=wasmExports["dynCall_iiiiji"];dynCall_iiiijii=wasmExports["dynCall_iiiijii"];dynCall_ij=wasmExports["dynCall_ij"];dynCall_viiji=wasmExports["dynCall_viiji"];dynCall_viijii=wasmExports["dynCall_viijii"];dynCall_iiiijji=wasmExports["dynCall_iiiijji"];memory=wasmMemory=wasmExports["memory"];_sqlite3_version=Module["_sqlite3_version"]=wasmExports["sqlite3_version"].value;__indirect_function_table=wasmTable=wasmExports["__indirect_function_table"]}var wasmImports={__assert_fail:___assert_fail,__syscall_chmod:___syscall_chmod,__syscall_faccessat:___syscall_faccessat,__syscall_fchmod:___syscall_fchmod,__syscall_fchown32:___syscall_fchown32,__syscall_fcntl64:___syscall_fcntl64,__syscall_fstat64:___syscall_fstat64,__syscall_ftruncate64:___syscall_ftruncate64,__syscall_getcwd:___syscall_getcwd,__syscall_lstat64:___syscall_lstat64,__syscall_mkdirat:___syscall_mkdirat,__syscall_newfstatat:___syscall_newfstatat,__syscall_openat:___syscall_openat,__syscall_readlinkat:___syscall_readlinkat,__syscall_rmdir:___syscall_rmdir,__syscall_stat64:___syscall_stat64,__syscall_unlinkat:___syscall_unlinkat,__syscall_utimensat:___syscall_utimensat,_abort_js:__abort_js,_emscripten_runtime_keepalive_clear:__emscripten_runtime_keepalive_clear,_localtime_js:__localtime_js,_mmap_js:__mmap_js,_munmap_js:__munmap_js,_setitimer_js:__setitimer_js,_tzset_js:__tzset_js,emscripten_date_now:_emscripten_date_now,emscripten_get_now:_emscripten_get_now,emscripten_resize_heap:_emscripten_resize_heap,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,fd_close:_fd_close,fd_fdstat_get:_fd_fdstat_get,fd_read:_fd_read,fd_seek:_fd_seek,fd_sync:_fd_sync,fd_write:_fd_write,ipp:_ipp,ipp_async:_ipp_async,ippipppp:_ippipppp,ippipppp_async:_ippipppp_async,ippp:_ippp,ippp_async:_ippp_async,ipppi:_ipppi,ipppi_async:_ipppi_async,ipppiii:_ipppiii,ipppiii_async:_ipppiii_async,ipppiiip:_ipppiiip,ipppiiip_async:_ipppiiip_async,ipppip:_ipppip,ipppip_async:_ipppip_async,ipppj:_ipppj,ipppj_async:_ipppj_async,ipppp:_ipppp,ipppp_async:_ipppp_async,ippppi:_ippppi,ippppi_async:_ippppi_async,ippppij:_ippppij,ippppij_async:_ippppij_async,ippppip:_ippppip,ippppip_async:_ippppip_async,ipppppip:_ipppppip,ipppppip_async:_ipppppip_async,proc_exit:_proc_exit,vppippii:_vppippii,vppippii_async:_vppippii_async,vppp:_vppp,vppp_async:_vppp_async,vpppip:_vpppip,vpppip_async:_vpppip_async};async function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,argv);ret=await ret;exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}async function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve?.(Module);Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)await callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;wasmExports=await (createWasm());run();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["set_authorizer"]=function(db,xAuthorizer,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xAuthorizer instanceof AsyncFunction?1:0,"i32");const result=ccall("libauthorizer_set_authorizer","number",["number","number","number"],[db,xAuthorizer?1:0,pAsyncFlags]);if(!result&&xAuthorizer){Module["setCallback"](pAsyncFlags,(_,iAction,p3,p4,p5,p6)=>xAuthorizer(pApp,iAction,p3,p4,p5,p6))}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;const FUNC_METHODS=["xFunc","xStep","xFinal"];const mapFunctionNameToKey=new Map;Module["create_function"]=function(db,zFunctionName,nArg,eTextRep,pApp,xFunc,xStep,xFinal){const pAsyncFlags=Module["_sqlite3_malloc"](4);const target={xFunc,xStep,xFinal};setValue(pAsyncFlags,FUNC_METHODS.reduce((mask,method,i)=>{if(target[method]instanceof AsyncFunction){return mask|1<<i}return mask},0),"i32");const result=ccall("libfunction_create_function","number",["number","string","number","number","number","number","number","number"],[db,zFunctionName,nArg,eTextRep,pAsyncFlags,xFunc?1:0,xStep?1:0,xFinal?1:0]);if(!result){if(mapFunctionNameToKey.has(zFunctionName)){const oldKey=mapFunctionNameToKey.get(zFunctionName);Module["deleteCallback"](oldKey)}mapFunctionNameToKey.set(zFunctionName,pAsyncFlags);Module["setCallback"](pAsyncFlags,{xFunc,xStep,xFinal})}return result}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["update_hook"]=function(db,xUpdateHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xUpdateHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_update_hook","void",["number","number","number"],[db,xUpdateHook?1:0,pAsyncFlags]);if(xUpdateHook){Module["setCallback"](pAsyncFlags,(_,iUpdateType,dbName,tblName,lo32,hi32)=>xUpdateHook(iUpdateType,dbName,tblName,lo32,hi32))}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["commit_hook"]=function(db,xCommitHook){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xCommitHook instanceof AsyncFunction?1:0,"i32");ccall("libhook_commit_hook","void",["number","number","number"],[db,xCommitHook?1:0,pAsyncFlags]);if(xCommitHook){Module["setCallback"](pAsyncFlags,_=>xCommitHook())}}})();(function(){const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;let pAsyncFlags=0;Module["progress_handler"]=function(db,nOps,xProgress,pApp){if(pAsyncFlags){Module["deleteCallback"](pAsyncFlags);Module["_sqlite3_free"](pAsyncFlags);pAsyncFlags=0}pAsyncFlags=Module["_sqlite3_malloc"](4);setValue(pAsyncFlags,xProgress instanceof AsyncFunction?1:0,"i32");ccall("libprogress_progress_handler","number",["number","number","number","number"],[db,nOps,xProgress?1:0,pAsyncFlags]);if(xProgress){Module["setCallback"](pAsyncFlags,_=>xProgress(pApp))}}})();(function(){const VFS_METHODS=["xOpen","xDelete","xAccess","xFullPathname","xRandomness","xSleep","xCurrentTime","xGetLastError","xCurrentTimeInt64","xClose","xRead","xWrite","xTruncate","xSync","xFileSize","xLock","xUnlock","xCheckReservedLock","xFileControl","xSectorSize","xDeviceCharacteristics","xShmMap","xShmLock","xShmBarrier","xShmUnmap"];const mapVFSNameToKey=new Map;Module["vfs_register"]=function(vfs,makeDefault){let methodMask=0;let asyncMask=0;VFS_METHODS.forEach((method,i)=>{if(vfs[method]){methodMask|=1<<i;if(vfs["hasAsyncMethod"](method)){asyncMask|=1<<i}}});const vfsReturn=Module["_sqlite3_malloc"](4);try{const result=ccall("libvfs_vfs_register","number",["string","number","number","number","number","number"],[vfs.name,vfs.mxPathname,methodMask,asyncMask,makeDefault?1:0,vfsReturn]);if(!result){if(mapVFSNameToKey.has(vfs.name)){const oldKey=mapVFSNameToKey.get(vfs.name);Module["deleteCallback"](oldKey)}const key=getValue(vfsReturn,"*");mapVFSNameToKey.set(vfs.name,key);Module["setCallback"](key,vfs)}return result}finally{Module["_sqlite3_free"](vfsReturn)}}})();if(runtimeInitialized){moduleRtn=Module}else{moduleRtn=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject})}
;return moduleRtn}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);


/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/src/FacadeVFS.js"
/*!**************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/src/FacadeVFS.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacadeVFS: () => (/* binding */ FacadeVFS)
/* harmony export */ });
/* harmony import */ var _VFS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VFS.js */ "./node_modules/@journeyapps/wa-sqlite/src/VFS.js");
// Copyright 2024 Roy T. Hashimoto. All Rights Reserved.


const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

// Milliseconds since Julian epoch as a BigInt.
// https://github.com/sqlite/sqlite/blob/e57527c14f7b7cfa6e32eeab5c549d50c4fa3674/src/os_unix.c#L6872-L6882
const UNIX_EPOCH = 24405875n * 8640000n;

// Convenience base class for a JavaScript VFS.
// The raw xOpen, xRead, etc. function signatures receive only C primitives
// which aren't easy to work with. This class provides corresponding calls
// like jOpen, jRead, etc., which receive JavaScript-friendlier arguments
// such as string, Uint8Array, and DataView.
class FacadeVFS extends _VFS_js__WEBPACK_IMPORTED_MODULE_0__.Base {
  /**
   * @param {string} name 
   * @param {object} module 
   */
  constructor(name, module) {
    super(name, module);
  }

  /**
   * Override to indicate which methods are asynchronous.
   * @param {string} methodName 
   * @returns {boolean}
   */
  hasAsyncMethod(methodName) {
    // The input argument is a string like "xOpen", so convert to "jOpen".
    // Then check if the method exists and is async.
    const jMethodName = `j${methodName.slice(1)}`;
    return this[jMethodName] instanceof AsyncFunction;
  }
  
  /**
   * Return the filename for a file id for use by mixins.
   * @param {number} pFile 
   * @returns {string}
   */
  getFilename(pFile) {
    throw new Error('unimplemented');
  }

  /**
   * @param {string?} filename 
   * @param {number} pFile 
   * @param {number} flags 
   * @param {DataView} pOutFlags 
   * @returns {number|Promise<number>}
   */
  jOpen(filename, pFile, flags, pOutFlags) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CANTOPEN;
  }

  /**
   * @param {string} filename 
   * @param {number} syncDir 
   * @returns {number|Promise<number>}
   */
  jDelete(filename, syncDir) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {string} filename 
   * @param {number} flags 
   * @param {DataView} pResOut 
   * @returns {number|Promise<number>}
   */
  jAccess(filename, flags, pResOut) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {string} filename 
   * @param {Uint8Array} zOut 
   * @returns {number|Promise<number>}
   */
  jFullPathname(filename, zOut) {
    // Copy the filename to the output buffer.
    const { read, written } = new TextEncoder().encodeInto(filename, zOut);
    if (read < filename.length) return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
    if (written >= zOut.length) return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR;
    zOut[written] = 0;
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {Uint8Array} zBuf 
   * @returns {number|Promise<number>}
   */
  jGetLastError(zBuf) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  jClose(pFile) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {Uint8Array} pData 
   * @param {number} iOffset 
   * @returns {number|Promise<number>}
   */
  jRead(pFile, pData, iOffset) {
    pData.fill(0);
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_SHORT_READ;
  }

  /**
   * @param {number} pFile 
   * @param {Uint8Array} pData 
   * @param {number} iOffset 
   * @returns {number|Promise<number>}
   */
  jWrite(pFile, pData, iOffset) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_WRITE;
  }

  /**
   * @param {number} pFile 
   * @param {number} size 
   * @returns {number|Promise<number>}
   */
  jTruncate(pFile, size) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} flags 
   * @returns {number|Promise<number>}
   */
  jSync(pFile, flags) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {DataView} pSize
   * @returns {number|Promise<number>}
   */
  jFileSize(pFile, pSize) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} lockType 
   * @returns {number|Promise<number>}
   */
  jLock(pFile, lockType) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} lockType 
   * @returns {number|Promise<number>}
   */
  jUnlock(pFile, lockType) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {DataView} pResOut 
   * @returns {number|Promise<number>}
   */
  jCheckReservedLock(pFile, pResOut) {
    pResOut.setInt32(0, 0, true);
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile
   * @param {number} op
   * @param {DataView} pArg
   * @returns {number|Promise<number>}
   */
  jFileControl(pFile, op, pArg) {
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND;
  }

  /**
   * @param {number} pFile
   * @returns {number|Promise<number>}
   */
  jSectorSize(pFile) {
    return super.xSectorSize(pFile);
  }

  /**
   * @param {number} pFile
   * @returns {number|Promise<number>}
   */
  jDeviceCharacteristics(pFile) {
    return 0;
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} pFile 
   * @param {number} flags 
   * @param {number} pOutFlags 
   * @returns {number|Promise<number>}
   */
  xOpen(pVfs, zName, pFile, flags, pOutFlags) {
    const filename = this.#decodeFilename(zName, flags);
    const pOutFlagsView = this.#makeTypedDataView('Int32', pOutFlags);
    this['log']?.('jOpen', filename, pFile, '0x' + flags.toString(16));
    return this.jOpen(filename, pFile, flags, pOutFlagsView);
  }

  /**
   * @param {number} pVfs 
   * @param {number} nByte 
   * @param {number} pCharOut
   * @returns {number|Promise<number>}
   */
  xRandomness(pVfs, nByte, pCharOut) {
    const randomArray = new Uint8Array(nByte);
    crypto.getRandomValues(randomArray);
    // Copy randomArray to the WebAssembly memory
    const buffer = pCharOut; // Pointer to memory in WebAssembly
    this._module.HEAPU8.set(randomArray, buffer); // Copy randomArray into memory starting at buffer
    return nByte;
  }

  /**
   * Gets the current time as milliseconds since Unix epoch
   * @param {number} pVfs pointer to the VFS
   * @param {number} pTime pointer to write the time value
   * @returns {number} SQLite error code
   */
  xCurrentTimeInt64(pVfs, pTime) {
    // Create a DataView to write the current time
    const timeView = this.#makeTypedDataView('BigInt64', pTime);
  
    const currentTime = BigInt(Date.now());
    // Convert the current time to milliseconds since Unix epoch
    const value = UNIX_EPOCH + currentTime;
    
    // Write the time value to the pointer location
    timeView.setBigInt64(0, value, true);
    
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} syncDir 
   * @returns {number|Promise<number>}
   */
  xDelete(pVfs, zName, syncDir) {
    const filename = this._module.UTF8ToString(zName);
    this['log']?.('jDelete', filename, syncDir);
    return this.jDelete(filename, syncDir);
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} flags 
   * @param {number} pResOut 
   * @returns {number|Promise<number>}
   */
  xAccess(pVfs, zName, flags, pResOut) {
    const filename = this._module.UTF8ToString(zName);
    const pResOutView = this.#makeTypedDataView('Int32', pResOut);
    this['log']?.('jAccess', filename, flags);
    return this.jAccess(filename, flags, pResOutView);
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} nOut 
   * @param {number} zOut 
   * @returns {number|Promise<number>}
   */
  xFullPathname(pVfs, zName, nOut, zOut) {
    const filename = this._module.UTF8ToString(zName);
    const zOutArray = this._module.HEAPU8.subarray(zOut, zOut + nOut);
    this['log']?.('jFullPathname', filename, nOut);
    return this.jFullPathname(filename, zOutArray);
  }

  /**
   * @param {number} pVfs 
   * @param {number} nBuf 
   * @param {number} zBuf 
   * @returns {number|Promise<number>}
   */
  xGetLastError(pVfs, nBuf, zBuf) {
    const zBufArray = this._module.HEAPU8.subarray(zBuf, zBuf + nBuf);
    this['log']?.('jGetLastError', nBuf);
    return this.jGetLastError(zBufArray);
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  xClose(pFile) {
    this['log']?.('jClose', pFile);
    return this.jClose(pFile);
  }

  /**
   * @param {number} pFile 
   * @param {number} pData 
   * @param {number} iAmt 
   * @param {number} iOffsetLo 
   * @param {number} iOffsetHi 
   * @returns {number|Promise<number>}
   */
  xRead(pFile, pData, iAmt, iOffsetLo, iOffsetHi) {
    const pDataArray = this.#makeDataArray(pData, iAmt);
    const iOffset = delegalize(iOffsetLo, iOffsetHi);
    this['log']?.('jRead', pFile, iAmt, iOffset);
    return this.jRead(pFile, pDataArray, iOffset);
  }

  /**
   * @param {number} pFile 
   * @param {number} pData 
   * @param {number} iAmt 
   * @param {number} iOffsetLo 
   * @param {number} iOffsetHi 
   * @returns {number|Promise<number>}
   */
  xWrite(pFile, pData, iAmt, iOffsetLo, iOffsetHi) {
    const pDataArray = this.#makeDataArray(pData, iAmt);
    const iOffset = delegalize(iOffsetLo, iOffsetHi);
    this['log']?.('jWrite', pFile, pDataArray, iOffset);
    return this.jWrite(pFile, pDataArray, iOffset);
  }

  /**
   * @param {number} pFile 
   * @param {number} sizeLo 
   * @param {number} sizeHi 
   * @returns {number|Promise<number>}
   */
  xTruncate(pFile, sizeLo, sizeHi) {
    const size = delegalize(sizeLo, sizeHi);
    this['log']?.('jTruncate', pFile, size);
    return this.jTruncate(pFile, size);
  }

  /**
   * @param {number} pFile 
   * @param {number} flags 
   * @returns {number|Promise<number>}
   */
  xSync(pFile, flags) {
    this['log']?.('jSync', pFile, flags);
    return this.jSync(pFile, flags);
  }

  /**
   * 
   * @param {number} pFile 
   * @param {number} pSize 
   * @returns {number|Promise<number>}
   */
  xFileSize(pFile, pSize) {
    const pSizeView = this.#makeTypedDataView('BigInt64', pSize);
    this['log']?.('jFileSize', pFile);
    return this.jFileSize(pFile, pSizeView);
  }

  /**
   * @param {number} pFile 
   * @param {number} lockType 
   * @returns {number|Promise<number>}
   */
  xLock(pFile, lockType) {
    this['log']?.('jLock', pFile, lockType);
    return this.jLock(pFile, lockType);
  }

  /**
   * @param {number} pFile 
   * @param {number} lockType 
   * @returns {number|Promise<number>}
   */
  xUnlock(pFile, lockType) {
    this['log']?.('jUnlock', pFile, lockType);
    return this.jUnlock(pFile, lockType);
  } 

  /**
   * @param {number} pFile 
   * @param {number} pResOut 
   * @returns {number|Promise<number>}
   */
  xCheckReservedLock(pFile, pResOut) {
    const pResOutView = this.#makeTypedDataView('Int32', pResOut);
    this['log']?.('jCheckReservedLock', pFile);
    return this.jCheckReservedLock(pFile, pResOutView);
  }

  /**
   * @param {number} pFile 
   * @param {number} op 
   * @param {number} pArg 
   * @returns {number|Promise<number>}
   */
  xFileControl(pFile, op, pArg) {
    const pArgView = new DataView(
      this._module.HEAPU8.buffer,
      this._module.HEAPU8.byteOffset + pArg);
    this['log']?.('jFileControl', pFile, op, pArgView);
    return this.jFileControl(pFile, op, pArgView);
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  xSectorSize(pFile) {
    this['log']?.('jSectorSize', pFile);
    return this.jSectorSize(pFile);
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  xDeviceCharacteristics(pFile) {
    this['log']?.('jDeviceCharacteristics', pFile);
    return this.jDeviceCharacteristics(pFile);
  }

  /**
   * Wrapped DataView for pointer arguments.
   * Pointers to a single value are passed using a DataView-like class.
   * This wrapper class prevents use of incorrect type or endianness, and
   * reacquires the underlying buffer when the WebAssembly memory is resized.
   * @param {'Int32'|'BigInt64'} type 
   * @param {number} byteOffset 
   * @returns {DataView}
   */
  #makeTypedDataView(type, byteOffset) {
    // @ts-ignore
    return new DataViewProxy(this._module, byteOffset, type);
  }

  /**
   * Wrapped Uint8Array for buffer arguments.
   * Memory blocks are passed as a Uint8Array-like class. This wrapper
   * class reacquires the underlying buffer when the WebAssembly memory
   * is resized.
   * @param {number} byteOffset 
   * @param {number} byteLength 
   * @returns {Uint8Array}
   */
  #makeDataArray(byteOffset, byteLength) {
    // @ts-ignore
    return new Uint8ArrayProxy(this._module, byteOffset, byteLength);
  }

  #decodeFilename(zName, flags) {
    if (flags & _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_URI) {
      // The first null-terminated string is the URI path. Subsequent
      // strings are query parameter keys and values.
      // https://www.sqlite.org/c3ref/open.html#urifilenamesinsqlite3open
      let pName = zName;
      let state = 1;
      const charCodes = [];
      while (state) {
        const charCode = this._module.HEAPU8[pName++];
        if (charCode) {
          charCodes.push(charCode);
        } else {
          if (!this._module.HEAPU8[pName]) state = null;
          switch (state) {
            case 1: // path
              charCodes.push('?'.charCodeAt(0));
              state = 2;
              break;
            case 2: // key
              charCodes.push('='.charCodeAt(0));
              state = 3;
              break;
            case 3: // value
              charCodes.push('&'.charCodeAt(0));
              state = 2;
              break;
          }
        }
      }
      return  new TextDecoder().decode(new Uint8Array(charCodes));
    }
    return zName ? this._module.UTF8ToString(zName) : null;
  }
}

// Emscripten "legalizes" 64-bit integer arguments by passing them as
// two 32-bit signed integers.
function delegalize(lo32, hi32) {
  return (hi32 * 0x100000000) + lo32 + (lo32 < 0 ? 2**32 : 0);
}

// This class provides a Uint8Array-like interface for a WebAssembly memory
// buffer. It is used to access memory blocks passed as arguments to
// xRead, xWrite, etc. The class reacquires the underlying buffer when the
// WebAssembly memory is resized, which can happen when the memory is
// detached and resized by the WebAssembly module.
//
// Note that although this class implements the same methods as Uint8Array,
// it is not a real Uint8Array and passing it to functions that expect
// a Uint8Array may not work. Use subarray() to get a real Uint8Array
// if needed.
class Uint8ArrayProxy {
  #module;

  #_array = new Uint8Array()
  get #array() {
    if (this.#_array.buffer.byteLength === 0) {
      // WebAssembly memory resize detached the buffer so re-create the
      // array with the new buffer.
      this.#_array = this.#module.HEAPU8.subarray(
        this.byteOffset,
        this.byteOffset + this.byteLength);
    }
    return this.#_array;
  }

  /**
   * @param {*} module
   * @param {number} byteOffset 
   * @param {number} byteLength 
   */
  constructor(module, byteOffset, byteLength) {
    this.#module = module;
    this.byteOffset = byteOffset;
    this.length = this.byteLength = byteLength;
  }

  get buffer() {
    return this.#array.buffer;
  }

  at(index) {
    return this.#array.at(index);
  }
  copyWithin(target, start, end) {
    this.#array.copyWithin(target, start, end);
  }
  entries() {
    return this.#array.entries();
  }
  every(predicate) {
    return this.#array.every(predicate);
  }
  fill(value, start, end) {
    this.#array.fill(value, start, end);
  }
  filter(predicate) {
    return this.#array.filter(predicate);
  }
  find(predicate) {
    return this.#array.find(predicate);
  }
  findIndex(predicate) {
    return this.#array.findIndex(predicate);
  }
  findLast(predicate) {
    return this.#array.findLast(predicate);
  }
  findLastIndex(predicate) {
    return this.#array.findLastIndex(predicate);
  }
  forEach(callback) {
    this.#array.forEach(callback);
  }
  includes(value, start) {
    return this.#array.includes(value, start);
  }
  indexOf(value, start) {
    return this.#array.indexOf(value, start);
  }
  join(separator) {
    return this.#array.join(separator);
  }
  keys() {
    return this.#array.keys();
  }
  lastIndexOf(value, start) {
    return this.#array.lastIndexOf(value, start);
  }
  map(callback) {
    return this.#array.map(callback);
  }
  reduce(callback, initialValue) {
    return this.#array.reduce(callback, initialValue);
  }
  reduceRight(callback, initialValue) {
    return this.#array.reduceRight(callback, initialValue);
  }
  reverse() {
    this.#array.reverse();
  }
  set(array, offset) {
    this.#array.set(array, offset);
  }
  slice(start, end) {
    return this.#array.slice(start, end);
  }
  some(predicate) {
    return this.#array.some(predicate);
  }
  sort(compareFn) {
    this.#array.sort(compareFn);
  }
  subarray(begin, end) {
    return this.#array.subarray(begin, end);
  }
  toLocaleString(locales, options) {
    // @ts-ignore
    return this.#array.toLocaleString(locales, options);
  }
  toReversed() {
    return this.#array.toReversed();
  }
  toSorted(compareFn) {
    return this.#array.toSorted(compareFn);
  }
  toString() {
    return this.#array.toString();
  }
  values() {
    return this.#array.values();
  }
  with(index, value) {
    return this.#array.with(index, value);
  }
  [Symbol.iterator]() {
    return this.#array[Symbol.iterator]();
  }
}

// This class provides a DataView-like interface for a WebAssembly memory
// buffer, restricted to either Int32 or BigInt64 types. It also reacquires
// the underlying buffer when the WebAssembly memory is resized, which can
// happen when the memory is detached and resized by the WebAssembly module.
class DataViewProxy {
  #module;
  #type;

  #_view = new DataView(new ArrayBuffer(0));
  get #view() {
    if (this.#_view.buffer.byteLength === 0) {
      // WebAssembly memory resize detached the buffer so re-create the
      // view with the new buffer.
      this.#_view = new DataView(
        this.#module.HEAPU8.buffer,
        this.#module.HEAPU8.byteOffset + this.byteOffset);
    }
    return this.#_view;
  }

  /**
   * @param {*} module
   * @param {number} byteOffset 
   * @param {'Int32'|'BigInt64'} type
   */
  constructor(module, byteOffset, type) {
    this.#module = module;
    this.byteOffset = byteOffset;
    this.#type = type;
  }

  get buffer() {
    return this.#view.buffer;
  }
  get byteLength() {
    return this.#type === 'Int32' ? 4 : 8;
  }

  getInt32(byteOffset, littleEndian) {
    if (this.#type !== 'Int32') {
      throw new Error('invalid type');
    }
    if (!littleEndian) throw new Error('must be little endian');
    return this.#view.getInt32(byteOffset, littleEndian);
  }
  setInt32(byteOffset, value, littleEndian) {
    if (this.#type !== 'Int32') {
      throw new Error('invalid type');
    }
    if (!littleEndian) throw new Error('must be little endian');
    this.#view.setInt32(byteOffset, value, littleEndian);
  }
  getBigInt64(byteOffset, littleEndian) {
    if (this.#type !== 'BigInt64') {
      throw new Error('invalid type');
    }
    if (!littleEndian) throw new Error('must be little endian');
    return this.#view.getBigInt64(byteOffset, littleEndian);
  }
  setBigInt64(byteOffset, value, littleEndian) {
    if (this.#type !== 'BigInt64') {
      throw new Error('invalid type');
    }
    if (!littleEndian) throw new Error('must be little endian');
    this.#view.setBigInt64(byteOffset, value, littleEndian);
  }
}

/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/src/VFS.js"
/*!********************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/src/VFS.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/* harmony export */   SQLITE_PREPARE_NORMALIZED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PREPARE_NORMALIZED),
/* harmony export */   SQLITE_PREPARE_NO_VTAB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PREPARE_NO_VTAB),
/* harmony export */   SQLITE_PREPARE_PERSISTENT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PREPARE_PERSISTENT),
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
/* harmony import */ var _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sqlite-constants.js */ "./node_modules/@journeyapps/wa-sqlite/src/sqlite-constants.js");
// Copyright 2024 Roy T. Hashimoto. All Rights Reserved.



const DEFAULT_SECTOR_SIZE = 512;

// Base class for a VFS.
class Base {
  name;
  mxPathname = 64;
  _module;

  /**
   * @param {string} name 
   * @param {object} module 
   */
  constructor(name, module) {
    this.name = name;
    this._module = module;
  }

  /**
   * @returns {void|Promise<void>} 
   */
  close() {
  }

  /**
   * @returns {boolean|Promise<boolean>}
   */
  isReady() {
    return true;
  }

  /**
   * Overload in subclasses to indicate which methods are asynchronous.
   * @param {string} methodName 
   * @returns {boolean}
   */
  hasAsyncMethod(methodName) {
    return false;
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} pFile 
   * @param {number} flags 
   * @param {number} pOutFlags 
   * @returns {number|Promise<number>}
   */
  xOpen(pVfs, zName, pFile, flags, pOutFlags) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_CANTOPEN;
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} syncDir 
   * @returns {number|Promise<number>}
   */
  xDelete(pVfs, zName, syncDir) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} flags 
   * @param {number} pResOut 
   * @returns {number|Promise<number>}
   */
  xAccess(pVfs, zName, flags, pResOut) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pVfs 
   * @param {number} zName 
   * @param {number} nOut 
   * @param {number} zOut 
   * @returns {number|Promise<number>}
   */
  xFullPathname(pVfs, zName, nOut, zOut) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pVfs 
   * @param {number} nBuf 
   * @param {number} zBuf 
   * @returns {number|Promise<number>}
   */
  xGetLastError(pVfs, nBuf, zBuf) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  xClose(pFile) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} pData 
   * @param {number} iAmt 
   * @param {number} iOffsetLo 
   * @param {number} iOffsetHi 
   * @returns {number|Promise<number>}
   */
  xRead(pFile, pData, iAmt, iOffsetLo, iOffsetHi) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} pData 
   * @param {number} iAmt 
   * @param {number} iOffsetLo 
   * @param {number} iOffsetHi 
   * @returns {number|Promise<number>}
   */
  xWrite(pFile, pData, iAmt, iOffsetLo, iOffsetHi) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} sizeLo 
   * @param {number} sizeHi 
   * @returns {number|Promise<number>}
   */
  xTruncate(pFile, sizeLo, sizeHi) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} flags 
   * @returns {number|Promise<number>}
   */
  xSync(pFile, flags) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * 
   * @param {number} pFile 
   * @param {number} pSize 
   * @returns {number|Promise<number>}
   */
  xFileSize(pFile, pSize) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} lockType 
   * @returns {number|Promise<number>}
   */
  xLock(pFile, lockType) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} lockType 
   * @returns {number|Promise<number>}
   */
  xUnlock(pFile, lockType) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  } 

  /**
   * @param {number} pFile 
   * @param {number} pResOut 
   * @returns {number|Promise<number>}
   */
  xCheckReservedLock(pFile, pResOut) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} pFile 
   * @param {number} op 
   * @param {number} pArg 
   * @returns {number|Promise<number>}
   */
  xFileControl(pFile, op, pArg) {
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND;
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  xSectorSize(pFile) {
    return DEFAULT_SECTOR_SIZE;
  }

  /**
   * @param {number} pFile 
   * @returns {number|Promise<number>}
   */
  xDeviceCharacteristics(pFile) {
    return 0;
  }
}

const FILE_TYPE_MASK = [
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_DB,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_MAIN_JOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_DB,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TEMP_JOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_TRANSIENT_DB,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUBJOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_SUPER_JOURNAL,
  _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_WAL
].reduce((mask, element) => mask | element);

/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/src/WebLocksMixin.js"
/*!******************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/src/WebLocksMixin.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebLocksMixin: () => (/* binding */ WebLocksMixin)
/* harmony export */ });
/* harmony import */ var _VFS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VFS.js */ "./node_modules/@journeyapps/wa-sqlite/src/VFS.js");


// Options for navigator.locks.request().
/** @type {LockOptions} */ const SHARED = { mode: 'shared' };
/** @type {LockOptions} */ const POLL_SHARED = { ifAvailable: true, mode: 'shared' };
/** @type {LockOptions} */ const POLL_EXCLUSIVE = { ifAvailable: true, mode: 'exclusive' };

const POLICIES = ['exclusive', 'shared', 'shared+hint'];

/**
 * @typedef LockState
 * @property {string} baseName
 * @property {number} type
 * @property {boolean} writeHint
 * 
 * These properties are functions that release a specific lock.
 * @property {(() => void)?} [gate]
 * @property {(() => void)?} [access]
 * @property {(() => void)?} [reserved]
 * @property {(() => void)?} [hint]
 */

/**
 * Mix-in for FacadeVFS that implements the SQLite VFS locking protocol.
 * @param {*} superclass FacadeVFS (or subclass)
 * @returns 
 */
const WebLocksMixin = superclass => class extends superclass {
  #options = {
    lockPolicy: 'exclusive',
    lockTimeout: Infinity
  };

  /** @type {Map<number, LockState>} */ #mapIdToState = new Map();

  constructor(name, module, options) {
    super(name, module, options);
    Object.assign(this.#options, options);
    if (POLICIES.indexOf(this.#options.lockPolicy) === -1) {
      throw new Error(`WebLocksMixin: invalid lock mode: ${options.lockPolicy}`);
    }
  }

  /**
   * @param {number} fileId 
   * @param {number} lockType 
   * @returns {Promise<number>}
   */
  async jLock(fileId, lockType) {
    try {
      const lockState = this.#getLockState(fileId);
      if (lockType <= lockState.type) return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  
      switch (this.#options.lockPolicy) {
        case 'exclusive':
          return await this.#lockExclusive(lockState, lockType);
        case 'shared':
        case 'shared+hint':
          return await this.#lockShared(lockState, lockType);
      }
    } catch (e) {
      console.error('WebLocksMixin: lock error', e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_LOCK;
    }
  }
  
  /**
   * @param {number} fileId 
   * @param {number} lockType 
   * @returns {Promise<number>}
   */
  async jUnlock(fileId, lockType) {
    try {
      const lockState = this.#getLockState(fileId);
      if (!(lockType < lockState.type)) return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  
      switch (this.#options.lockPolicy) {
        case 'exclusive':
          return await this.#unlockExclusive(lockState, lockType);
        case 'shared':
        case 'shared+hint':
            return await this.#unlockShared(lockState, lockType);
      }
    } catch (e) {
      console.error('WebLocksMixin: unlock error', e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_UNLOCK;
    }
  }

  /**
   * @param {number} fileId 
   * @param {DataView} pResOut 
   * @returns {Promise<number>}
   */
  async jCheckReservedLock(fileId, pResOut) {
    try {
      const lockState = this.#getLockState(fileId);
      switch (this.#options.lockPolicy) {
        case 'exclusive':
          return this.#checkReservedExclusive(lockState, pResOut);
        case 'shared':
        case 'shared+hint':
          return await this.#checkReservedShared(lockState, pResOut);
      }
    } catch (e) {
      console.error('WebLocksMixin: check reserved lock error', e);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_IOERR_CHECKRESERVEDLOCK;
    }
    pResOut.setInt32(0, 0, true);
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {number} fileId
   * @param {number} op
   * @param {DataView} pArg
   * @returns {number|Promise<number>}
   */
  jFileControl(fileId, op, pArg) {
    if (op === WebLocksMixin.WRITE_HINT_OP_CODE &&
        this.#options.lockPolicy === 'shared+hint'){
      const lockState = this.#getLockState(fileId);
      lockState.writeHint = true;
    }
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_NOTFOUND;
  }

  #getLockState(fileId) {
    let lockState = this.#mapIdToState.get(fileId);
    if (!lockState) {
      // The state doesn't exist yet so create it.
      const name = this.getFilename(fileId);
      lockState = {
        baseName: name,
        type: _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE,
        writeHint: false
      };
      this.#mapIdToState.set(fileId, lockState);
    }
    return lockState
  }

  /**
   * @param {LockState} lockState 
   * @param {number} lockType 
   * @returns 
   */
  async #lockExclusive(lockState, lockType) {
    if (!lockState.access) {
      if (!await this.#acquire(lockState, 'access')) {
        return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
      }
      console.assert(!!lockState.access);
    }
    lockState.type = lockType;
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {LockState} lockState 
   * @param {number} lockType 
   * @returns {number}
   */
  #unlockExclusive(lockState, lockType) {
    if (lockType === _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE) {
      lockState.access?.();
      console.assert(!lockState.access);
    }
    lockState.type = lockType;
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {LockState} lockState 
   * @param {DataView} pResOut 
   * @returns {number}
   */
  #checkReservedExclusive(lockState, pResOut) {
    pResOut.setInt32(0, 0, true);
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {LockState} lockState 
   * @param {number} lockType 
   * @returns 
   */
  async #lockShared(lockState, lockType) {
    switch (lockState.type) {
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE:
        switch (lockType) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
            if (lockState.writeHint) {
              // xFileControl() has hinted that this transaction will
              // write. Acquire the hint lock, which is required to reach
              // the RESERVED state.
              if (!await this.#acquire(lockState, 'hint')) {
                // Timeout before lock acquired.
                return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
              }
            }

            // Must have the gate lock to request the access lock.
            if (!await this.#acquire(lockState, 'gate', SHARED)) {
                // Timeout before lock acquired.
                lockState.hint?.();
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
            }
            await this.#acquire(lockState, 'access', SHARED);
            lockState.gate();
            console.assert(!lockState.gate);
            console.assert(!!lockState.access);
            console.assert(!lockState.reserved);
            break;

          default:
            throw new Error('unsupported lock transition');
        }
        break;
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_SHARED:
        switch (lockType) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED:
            if (this.#options.lockPolicy === 'shared+hint') {
              // Ideally we should already have the hint lock, but if not
              // poll for it here.
              if (!lockState.hint &&
                !await this.#acquire(lockState, 'hint', POLL_EXCLUSIVE)) {
                // Another connection has the hint lock so this is a
                // deadlock. This connection must retry.
                return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
              }
            }

            // Poll for the reserved lock. This should always succeed
            // if all clients use the 'shared+hint' policy.
            if (!await this.#acquire(lockState, 'reserved', POLL_EXCLUSIVE)) {
              // This is a deadlock. The connection holding the reserved
              // lock blocks us, and it can't acquire an exclusive access
              // lock because we hold a shared access lock. This connection
              // must retry.
              lockState.hint?.();
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
            }
            lockState.access();
            console.assert(!lockState.gate);
            console.assert(!lockState.access);
            console.assert(!!lockState.reserved);
            break;

          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE:
            // Jumping directly from SHARED to EXCLUSIVE without passing
            // through RESERVED is only done with a hot journal.
            if (!await this.#acquire(lockState, 'gate')) {
              // Timeout before lock acquired.
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
            }
            lockState.access();
            if (!await this.#acquire(lockState, 'access')) {
              // Timeout before lock acquired.
              lockState.gate();
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
            }
            console.assert(!!lockState.gate);
            console.assert(!!lockState.access);
            console.assert(!lockState.reserved);
            break;

          default:
            throw new Error('unsupported lock transition');
        }
        break;
      case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED:
        switch (lockType) {
          case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE:
            // Prevent other connections from entering the SHARED state.
            if (!await this.#acquire(lockState, 'gate')) {
              // Timeout before lock acquired.
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
            }

            // Block until all other connections exit the SHARED state.
            if (!await this.#acquire(lockState, 'access')) {
              // Timeout before lock acquired.
              lockState.gate();
              return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_BUSY;
            }
            console.assert(!!lockState.gate);
            console.assert(!!lockState.access);
            console.assert(!!lockState.reserved);
            break;

          default:
            throw new Error('unsupported lock transition');
        }
        break;
    }
    lockState.type = lockType;
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {LockState} lockState 
   * @param {number} lockType 
   * @returns 
   */
  async #unlockShared(lockState, lockType) {
    // lockType can only be SQLITE_LOCK_SHARED or SQLITE_LOCK_NONE.
    if (lockType === _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_NONE) {
      lockState.access?.();
      lockState.gate?.();
      lockState.reserved?.();
      lockState.hint?.();
      lockState.writeHint = false;
      console.assert(!lockState.access);
      console.assert(!lockState.gate);
      console.assert(!lockState.reserved);
      console.assert(!lockState.hint);
    } else { // lockType === VFS.SQLITE_LOCK_SHARED
      switch (lockState.type) {
        case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_EXCLUSIVE:
          // Release our exclusive access lock and reacquire it with a
          // shared lock. This should always succeed because we hold
          // the gate lock.
          lockState.access();
          await this.#acquire(lockState, 'access', SHARED);

          // Release our gate and reserved locks. We might not have a
          // reserved lock if we were handling a hot journal.
          lockState.gate();
          lockState.reserved?.();
          lockState.hint?.();
          console.assert(!!lockState.access);
          console.assert(!lockState.gate);
          console.assert(!lockState.reserved);
          break;

        case _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_LOCK_RESERVED:
          // This transition is rare, probably only on an I/O error
          // while writing to a journal file.
          await this.#acquire(lockState, 'access', SHARED);
          lockState.reserved();
          lockState.hint?.();
          console.assert(!!lockState.access);
          console.assert(!lockState.gate);
          console.assert(!lockState.reserved);
          break;
      }
    }
    lockState.type = lockType;
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {LockState} lockState 
   * @param {DataView} pResOut 
   * @returns {Promise<number>}
   */
  async #checkReservedShared(lockState, pResOut) {
    if (await this.#acquire(lockState, 'reserved', POLL_SHARED)) {
      // We were able to get the lock so it was not reserved.
      lockState.reserved();
      pResOut.setInt32(0, 0, true);
    } else {
      pResOut.setInt32(0, 1, true);
    }
    return _VFS_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  }

  /**
   * @param {LockState} lockState 
   * @param {'gate'|'access'|'reserved'|'hint'} name
   * @param {LockOptions} options 
   * @returns {Promise<boolean>}
   */
  #acquire(lockState, name, options = {}) {
    console.assert(!lockState[name]);
    return new Promise(resolve => {
      if (!options.ifAvailable && this.#options.lockTimeout < Infinity) {
        // Add a timeout to the lock request.
        const controller = new AbortController();
        options = Object.assign({}, options, { signal: controller.signal });
        setTimeout(() => {
          controller.abort();
          resolve?.(false);
        }, this.#options.lockTimeout);
      }

      const lockName = `lock##${lockState.baseName}##${name}`;
      navigator.locks.request(lockName, options, lock => {
        if (lock) {
          return new Promise(release => {
            lockState[name] = () => {
              release();
              lockState[name] = null;
            };
            resolve(true);
            resolve = null;
          });
        } else {
          lockState[name] = null;
          resolve(false);
          resolve = null;
        }
      }).catch(e => {
        if (e.name !== 'AbortError') throw e;
      });
    });
  }
}

WebLocksMixin.WRITE_HINT_OP_CODE = -9999;

/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDBBatchAtomicVFS: () => (/* binding */ IDBBatchAtomicVFS),
/* harmony export */   IDBContext: () => (/* binding */ IDBContext)
/* harmony export */ });
/* harmony import */ var _FacadeVFS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FacadeVFS.js */ "./node_modules/@journeyapps/wa-sqlite/src/FacadeVFS.js");
/* harmony import */ var _VFS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VFS.js */ "./node_modules/@journeyapps/wa-sqlite/src/VFS.js");
/* harmony import */ var _WebLocksMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebLocksMixin.js */ "./node_modules/@journeyapps/wa-sqlite/src/WebLocksMixin.js");
// Copyright 2024 Roy T. Hashimoto. All Rights Reserved.




const RETRYABLE_ERRORS = new Set([
  'TransactionInactiveError',
  'InvalidStateError'
]);

/**
 * @typedef Metadata
 * @property {string} name
 * @property {number} fileSize
 * @property {number} version
 * @property {number} [pendingVersion]
 */

class File {
  /** @type {string} */ path;
  /** @type {number} */ flags;

  /** @type {Metadata} */ metadata;
  /** @type {number} */ fileSize = 0;

  /** @type {boolean} */ needsMetadataSync = false;
  /** @type {Metadata} */ rollback = null;
  /** @type {Set<number>} */ changedPages = new Set();

  /** @type {string} */ synchronous = 'full';
  /** @type {IDBTransactionOptions} */ txOptions = { durability: 'strict' };

  constructor(path, flags, metadata) {
    this.path = path;
    this.flags = flags;
    this.metadata = metadata;
  }
}

class IDBBatchAtomicVFS extends (0,_WebLocksMixin_js__WEBPACK_IMPORTED_MODULE_2__.WebLocksMixin)(_FacadeVFS_js__WEBPACK_IMPORTED_MODULE_0__.FacadeVFS) {
  /** @type {Map<number, File>} */ mapIdToFile = new Map();
  lastError = null;

  log = null; // console.log

  /** @type {Promise} */ #isReady;
  /** @type {IDBContext} */ #idb;

  static async create(name, module, options) {
    const vfs = new IDBBatchAtomicVFS(name, module, options);
    await vfs.isReady();
    return vfs;
  }

  constructor(name, module, options = {}) {
    super(name, module, options);
    this.#isReady = this.#initialize(options.idbName ?? name);
  }

  async #initialize(name) {
    this.#idb = await IDBContext.create(name);
  }

  close() {
    this.#idb.close();
  }
  
  async isReady() {
    await super.isReady();
    await this.#isReady;
  }

  getFilename(fileId) {
    const pathname = this.mapIdToFile.get(fileId).path;
    return `IDB(${this.name}):${pathname}`
  }
  
  /**
   * @param {string?} zName 
   * @param {number} fileId 
   * @param {number} flags 
   * @param {DataView} pOutFlags 
   * @returns {Promise<number>}
   */
  async jOpen(zName, fileId, flags, pOutFlags) {
    try {
      const url = new URL(zName || Math.random().toString(36).slice(2), 'file://');
      const path = url.pathname;

      let meta = await this.#idb.q(({ metadata }) => metadata.get(path));
      if (!meta && (flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_CREATE)) {
        meta = {
          name: path,
          fileSize: 0,
          version: 0
        };
        await this.#idb.q(({ metadata }) => metadata.put(meta), 'rw');
      }
      
      if (!meta) {
        throw new Error(`File ${path} not found`);
      }

      const file = new File(path, flags, meta);
      this.mapIdToFile.set(fileId, file);
      pOutFlags.setInt32(0, flags, true);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_CANTOPEN;
    }
  }

  /**
   * @param {string} zName 
   * @param {number} syncDir 
   * @returns {Promise<number>}
   */
  async jDelete(zName, syncDir) {
    try {
      const url = new URL(zName, 'file://');
      const path = url.pathname;

      this.#idb.q(({ metadata, blocks }) => {
        const range = IDBKeyRange.bound([path, -Infinity], [path, Infinity]);
        blocks.delete(range);
        metadata.delete(path);
      }, 'rw');

      if (syncDir) {
        await this.#idb.sync(false);
      }
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_DELETE;
    }
  }

  /**
   * @param {string} zName 
   * @param {number} flags 
   * @param {DataView} pResOut 
   * @returns {Promise<number>}
   */
  async jAccess(zName, flags, pResOut) {
    try {
      const url = new URL(zName, 'file://');
      const path = url.pathname;

      const meta = await this.#idb.q(({ metadata }) => metadata.get(path));
      pResOut.setInt32(0, meta ? 1 : 0, true);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_ACCESS;
    } 
  }

  /**
   * @param {number} fileId 
   * @returns {Promise<number>}
   */
  async jClose(fileId) {
    try {
      const file = this.mapIdToFile.get(fileId);
      this.mapIdToFile.delete(fileId);

      if (file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_DELETEONCLOSE) {
        await this.#idb.q(({ metadata, blocks }) => {
          metadata.delete(file.path);
          blocks.delete(IDBKeyRange.bound([file.path, 0], [file.path, Infinity]));
        }, 'rw');        
      }

      if (file.needsMetadataSync) {
        this.#idb.q(({ metadata }) => metadata.put(file.metadata), 'rw');
      }
      await this.#idb.sync(file.synchronous === 'full');
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_CLOSE;
    }
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {Promise<number>}
   */
  async jRead(fileId, pData, iOffset) {
    try {
      const file = this.mapIdToFile.get(fileId);

      let pDataOffset = 0;
      while (pDataOffset < pData.byteLength) {
        // Fetch the IndexedDB block for this file location.
        const fileOffset = iOffset + pDataOffset;
        const block = await this.#idb.q(({ blocks }) => {
          const range = IDBKeyRange.bound([file.path, -fileOffset], [file.path, Infinity]);
          return blocks.get(range);
        });       
        
        if (!block || block.data.byteLength - block.offset <= fileOffset) {
          pData.fill(0, pDataOffset);
          return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_SHORT_READ;
        }

        // Copy block data.
        const dst = pData.subarray(pDataOffset);
        const srcOffset = fileOffset + block.offset;
        const nBytesToCopy = Math.min(
          Math.max(block.data.byteLength - srcOffset, 0),
          dst.byteLength);
        dst.set(block.data.subarray(srcOffset, srcOffset + nBytesToCopy));
        pDataOffset += nBytesToCopy;
      }
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_READ;
    }
  }

  /**
   * @param {number} fileId 
   * @param {Uint8Array} pData 
   * @param {number} iOffset
   * @returns {number}
   */
  jWrite(fileId, pData, iOffset) {
    try {
      const file = this.mapIdToFile.get(fileId);
      if (file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_MAIN_DB) {
        if (!file.rollback) {
          // Begin a new write transaction.
          // Add pendingVersion to the metadata in IndexedDB. If we crash
          // during the transaction, this lets subsequent connections
          // know to remove blocks from the failed transaction.
          const pending = Object.assign(
            { pendingVersion: file.metadata.version - 1 },
            file.metadata);
          this.#idb.q(({ metadata }) => metadata.put(pending), 'rw', file.txOptions);

          file.rollback = Object.assign({}, file.metadata);
          file.metadata.version--;
        }
      }

      if (file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_MAIN_DB) {
        file.changedPages.add(iOffset);
      }

      const data = pData.slice();
      const version = file.metadata.version;
      const isOverwrite = iOffset < file.metadata.fileSize;
      if (!isOverwrite ||
          file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_MAIN_DB ||
          file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_TEMP_DB) {
        const block = {
          path: file.path,
          offset: -iOffset,
          version: version,
          data: pData.slice()
        };
        this.#idb.q(({ blocks }) => {
          blocks.put(block);
          file.changedPages.add(iOffset);
        }, 'rw', file.txOptions);
      } else {
        this.#idb.q(async ({ blocks }) => {
          // Read the existing block.
          const range = IDBKeyRange.bound(
            [file.path, -iOffset],
            [file.path, Infinity]);
          const block = await blocks.get(range);

          // Modify the block data.
          // @ts-ignore
          block.data.subarray(iOffset + block.offset).set(data);

          // Write back.
          blocks.put(block);
        }, 'rw', file.txOptions);

      }

      if (file.metadata.fileSize < iOffset + pData.length) {
        file.metadata.fileSize = iOffset + pData.length;
        file.needsMetadataSync = true;
      }
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_WRITE;
    }
  }

  /**
   * @param {number} fileId 
   * @param {number} iSize 
   * @returns {number}
   */
  jTruncate(fileId, iSize) {
    try {
      const file = this.mapIdToFile.get(fileId);
      if (iSize < file.metadata.fileSize) {
        this.#idb.q(({ blocks }) => {
          const range = IDBKeyRange.bound(
            [file.path, -Infinity],
            [file.path, -iSize, Infinity]);
          blocks.delete(range);
        }, 'rw', file.txOptions);
        file.metadata.fileSize = iSize;
        file.needsMetadataSync = true;
      }
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_TRUNCATE;
    }
  }

  /**
   * @param {number} fileId 
   * @param {number} flags 
   * @returns {Promise<number>}
   */
  async jSync(fileId, flags) {
    try {
      const file = this.mapIdToFile.get(fileId);
      if (file.needsMetadataSync) {
        this.#idb.q(({ metadata }) => metadata.put(file.metadata), 'rw', file.txOptions);
        file.needsMetadataSync = false;
      }

      if (file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_MAIN_DB) {
        // Sync is only needed here for durability. Visibility for other
        // connections is ensured in jUnlock().
        if (file.synchronous === 'full') {
          await this.#idb.sync(true);
        }
      } else {
        await this.#idb.sync(file.synchronous === 'full');
      }
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_FSYNC;
    }
  }

  /**
   * @param {number} fileId 
   * @param {DataView} pSize64 
   * @returns {number}
   */
  jFileSize(fileId, pSize64) {
    try {
      const file = this.mapIdToFile.get(fileId);
      pSize64.setBigInt64(0, BigInt(file.metadata.fileSize), true);
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR_FSTAT;
    }
  }

  /**
   * @param {number} fileId 
   * @param {number} lockType 
   * @returns {Promise<number>}
   */
  async jLock(fileId, lockType) {
    // Call the actual lock implementation.
    const file = this.mapIdToFile.get(fileId);
    const result = await super.jLock(fileId, lockType);

    if (lockType === _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_LOCK_SHARED) {
      // Update metadata.
      file.metadata = await this.#idb.q(async ({ metadata, blocks }) => {
        // @ts-ignore
        /** @type {Metadata} */ const m = await metadata.get(file.path);
        if (m.pendingVersion) {
          console.warn(`removing failed transaction ${m.pendingVersion}`);
          await new Promise((resolve, reject) => {
            const range = IDBKeyRange.bound([m.name, -Infinity], [m.name, Infinity]);
            const request = blocks.openCursor(range);
            request.onsuccess = () => {
              const cursor = request.result;
              if (cursor) {
                const block = cursor.value;
                if (block.version < m.version) {
                  cursor.delete();
                }
                cursor.continue();
              } else {
                resolve();
              }
            };
            request.onerror = () => reject(request.error);
          })

          delete m.pendingVersion;
          metadata.put(m);
        }
        return m;
      }, 'rw', file.txOptions);
    }
    return result;
  }

  /**
   * @param {number} fileId 
   * @param {number} lockType 
   * @returns {Promise<number>}
   */
  async jUnlock(fileId, lockType) {
    if (lockType === _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_LOCK_NONE) {
      const file = this.mapIdToFile.get(fileId);
      await this.#idb.sync(file.synchronous === 'full');
    }

    // Call the actual unlock implementation.
    return super.jUnlock(fileId, lockType);
  }

  /**
   * @param {number} fileId
   * @param {number} op
   * @param {DataView} pArg
   * @returns {number|Promise<number>}
   */
  jFileControl(fileId, op, pArg) {
    try {
      const file = this.mapIdToFile.get(fileId);
      switch (op) {
        case _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_FCNTL_PRAGMA:
          const key = extractString(pArg, 4);
          const value = extractString(pArg, 8);
          this.log?.('xFileControl', file.path, 'PRAGMA', key, value);
          const setPragmaResponse = response => {
            const encoded = new TextEncoder().encode(response);
            const out = this._module._sqlite3_malloc(encoded.byteLength);
            const outArray = this._module.HEAPU8.subarray(out, out + encoded.byteLength);
            outArray.set(encoded);
            pArg.setUint32(0, out, true);
            return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ERROR;
          };
          switch (key.toLowerCase()) {
            case 'page_size':
              if (file.flags & _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_MAIN_DB) {
                // Don't allow changing the page size.
                if (value && file.metadata.fileSize) {
                  return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ERROR;
                }
              }
              break;
            case 'synchronous':
              if (value) {
                switch (value.toLowerCase()) {
                  case '0':
                  case 'off':
                    file.synchronous = 'off';
                    file.txOptions = { durability: 'relaxed' };
                    break;
                  case '1':
                  case 'normal':
                    file.synchronous = 'normal';
                    file.txOptions = { durability: 'relaxed' };
                    break;
                  case '2':
                  case '3':
                  case 'full':
                  case 'extra':
                    file.synchronous = 'full';
                    file.txOptions = { durability: 'strict' };
                    break;
                }
              }
              break;
            case 'write_hint':
              return super.jFileControl(fileId, _WebLocksMixin_js__WEBPACK_IMPORTED_MODULE_2__.WebLocksMixin.WRITE_HINT_OP_CODE, null);
            }
          break;
        case _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_FCNTL_SYNC:
          this.log?.('xFileControl', file.path, 'SYNC');
          if (file.rollback) {
            const commitMetadata = Object.assign({}, file.metadata);
            const prevFileSize = file.rollback.fileSize
            this.#idb.q(({ metadata, blocks }) => {
              metadata.put(commitMetadata);

              // Remove old page versions.
              for (const offset of file.changedPages) {
                if (offset < prevFileSize) {
                  const range = IDBKeyRange.bound(
                    [file.path, -offset, commitMetadata.version],
                    [file.path, -offset, Infinity],
                    true);
                  blocks.delete(range);
                }
              }
              file.changedPages.clear();
            }, 'rw', file.txOptions);
            file.needsMetadataSync = false;
            file.rollback = null;
          }
          break;
        case _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_FCNTL_BEGIN_ATOMIC_WRITE:
          // Every write transaction is atomic, so this is a no-op.
          this.log?.('xFileControl', file.path, 'BEGIN_ATOMIC_WRITE');
          return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
        case _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_FCNTL_COMMIT_ATOMIC_WRITE:
          // Every write transaction is atomic, so this is a no-op.
          this.log?.('xFileControl', file.path, 'COMMIT_ATOMIC_WRITE');
          return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
        case _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_FCNTL_ROLLBACK_ATOMIC_WRITE:
          this.log?.('xFileControl', file.path, 'ROLLBACK_ATOMIC_WRITE');
          file.metadata = file.rollback;
          const rollbackMetadata = Object.assign({}, file.metadata);
          this.#idb.q(({ metadata, blocks }) => {
            metadata.put(rollbackMetadata);

            // Remove pages.
            for (const offset of file.changedPages) {
              blocks.delete([file.path, -offset, rollbackMetadata.version - 1]);
            }
            file.changedPages.clear();
          }, 'rw', file.txOptions);
          file.needsMetadataSync = false;
          file.rollback = null;
          return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK;
      }
    } catch (e) {
      this.lastError = e;
      return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOERR;
    }
    return super.jFileControl(fileId, op, pArg);
  }
  
  /**
   * @param {number} pFile
   * @returns {number|Promise<number>}
   */
  jDeviceCharacteristics(pFile) {
    return 0
    | _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOCAP_BATCH_ATOMIC
    | _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
  }

  /**
   * @param {Uint8Array} zBuf 
   * @returns {number|Promise<number>}
   */
  jGetLastError(zBuf) {
    if (this.lastError) {
      console.error(this.lastError);
      const outputArray = zBuf.subarray(0, zBuf.byteLength - 1);
      const { written } = new TextEncoder().encodeInto(this.lastError.message, outputArray);
      zBuf[written] = 0;
    }
    return _VFS_js__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK
  }
}

function extractString(dataView, offset) {
  const p = dataView.getUint32(offset, true);
  if (p) {
    const chars = new Uint8Array(dataView.buffer, p);
    return new TextDecoder().decode(chars.subarray(0, chars.indexOf(0)));
  }
  return null;
}

class IDBContext {
  /** @type {IDBDatabase} */ #database;

  /** @type {Promise} */ #chain = null;
  /** @type {Promise<any>} */ #txComplete = Promise.resolve();
  /** @type {IDBRequest?} */ #request = null;
  /** @type {WeakSet<IDBTransaction>} */ #txPending = new WeakSet();
  
  log = null;

  static async create(name) {
    const database = await new Promise((resolve, reject) => {
      const request = indexedDB.open(name, 6);
      request.onupgradeneeded = async event => {
        const db = request.result;
        if (event.oldVersion) {
          console.log(`Upgrading IndexedDB from version ${event.oldVersion}`);
        }
        switch (event.oldVersion) {
          case 0:
            // Start with the original schema.
            db.createObjectStore('blocks', { keyPath: ['path', 'offset', 'version']})
              .createIndex('version', ['path', 'version']);
            // fall through intentionally
          case 5:
            const tx = request.transaction;
            const blocks = tx.objectStore('blocks');
            blocks.deleteIndex('version');
            const metadata = db.createObjectStore('metadata', { keyPath: 'name' });

            await new Promise((resolve, reject) => {
              // Iterate over all the blocks.
              let lastBlock = {};
              const request = tx.objectStore('blocks').openCursor();
              request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                  const block = cursor.value;
                  if (typeof block.offset !== 'number' ||
                      (block.path === lastBlock.path && block.offset === lastBlock.offset)) {
                    // Remove superceded block (or the "purge" info).
                    cursor.delete();
                  } else if (block.offset === 0) {
                    // Move metadata to its own store.
                    metadata.put({
                      name: block.path,
                      fileSize: block.fileSize,
                      version: block.version
                    });

                    delete block.fileSize;
                    cursor.update(block);
                  }
                  lastBlock = block;
                  cursor.continue();
                } else {
                  resolve();
                }
              };
              request.onerror = () => reject(request.error);
            });
            break;
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return new IDBContext(database);
  }

  constructor(database) {
    this.#database = database;
  }

  close() {
    this.#database.close();
  }

  /**
   * @param {(stores: Object.<string, IDBObjectStore>) => any} f 
   * @param {'ro'|'rw'} mode 
   * @returns {Promise<any>}
   */
  q(f, mode = 'ro', options = {}) {
    /** @type {IDBTransactionMode} */
    const txMode = mode === 'ro' ? 'readonly' : 'readwrite';
    const txOptions = Object.assign({
      /** @type {IDBTransactionDurability} */ durability: 'default'
    }, options);

    // Ensure that queries run sequentially. If any function rejects,
    // or any request has an error, or the transaction does not commit,
    // then no subsequent functions will run until sync() or reset().
    this.#chain = (this.#chain || Promise.resolve())
      .then(() => this.#q(f, txMode, txOptions));
    return this.#chain;
  }

  /**
   * @param {(stores: Object.<string, IDBObjectStore>) => any} f 
   * @param {IDBTransactionMode} mode 
   * @param {IDBTransactionOptions} options
   * @returns {Promise<any>}
   */
  async #q(f, mode, options) {
    /** @type {IDBTransaction} */ let tx;
    if (this.#request &&
        this.#txPending.has(this.#request.transaction) &&
        this.#request.transaction.mode >= mode &&
        this.#request.transaction.durability === options.durability) {
      // The previous request transaction is compatible and has
      // not yet completed.
      tx = this.#request.transaction;

      // If the previous request is pending, wait for it to complete.
      // This ensures that the transaction will be active.
      if (this.#request.readyState === 'pending') {
        await new Promise(resolve => {
          this.#request.addEventListener('success', resolve, { once: true });
          this.#request.addEventListener('error', resolve, { once: true });
        });
      }
    }

    for (let i = 0; i < 2; ++i) {
      if (!tx) {
        // The current transaction is missing or doesn't match so
        // replace it with a new one. wait for the previous
        // transaction to complete so the lifetimes do not overlap.
        await this.#txComplete;

        // Create the new transaction.
        // @ts-ignore
        tx = this.#database.transaction(this.#database.objectStoreNames, mode, options);
        this.log?.('IDBTransaction open', mode);
        this.#txPending.add(tx);
        this.#txComplete = new Promise((resolve, reject) => {
          tx.addEventListener('complete', () => {
            this.log?.('IDBTransaction complete');
            this.#txPending.delete(tx);
            resolve();
          });
          tx.addEventListener('abort', () => {
            this.#txPending.delete(tx);
            reject(new Error('transaction aborted'));
          });
        });
      }

      try {
        // @ts-ignore
        // Create object store proxies.
        const objectStores = [...tx.objectStoreNames].map(name => {
          return [name, this.proxyStoreOrIndex(tx.objectStore(name))];
        });

        // Execute the function.
        return await f(Object.fromEntries(objectStores));
      } catch (e) {
        // Use a new transaction if this one was inactive. This will
        // happen if the last request in the transaction completed
        // in a previous task but the transaction has not yet committed.
        if (!i && RETRYABLE_ERRORS.has(e.name)) {
          this.log?.(`${e.name}, retrying`);
          tx = null;
          continue;
        }
        throw e;
      }
    }
  }

  /**
   * Object store methods that return an IDBRequest, except for cursor
   * creation, are wrapped to return a Promise. In addition, the
   * request is used internally for chaining.
   * @param {IDBObjectStore} objectStore 
   * @returns 
   */
  proxyStoreOrIndex(objectStore) {
    return new Proxy(objectStore, {
      get: (target, property, receiver) => {
        const result = Reflect.get(target, property, receiver);
        if (typeof result === 'function') {
          return (...args) => {
            const maybeRequest = Reflect.apply(result, target, args);
            // @ts-ignore
            if (maybeRequest instanceof IDBRequest && !property.endsWith('Cursor')) {
              // // Debug logging.
              // this.log?.(`${target.name}.${String(property)}`, args);
              // maybeRequest.addEventListener('success', () => {
              //   this.log?.(`${target.name}.${String(property)} success`, maybeRequest.result);
              // });
              // maybeRequest.addEventListener('error', () => {
              //   this.log?.(`${target.name}.${String(property)} error`, maybeRequest.error);
              // });
              
              // Save the request.
              this.#request = maybeRequest;

              // Abort the transaction on error.
              maybeRequest.addEventListener('error', () => {
                console.error(maybeRequest.error);
                maybeRequest.transaction.abort();
              }, { once: true });              

              // Return a Promise.
              return wrap(maybeRequest);
            }
            return maybeRequest;
          }
        }
        return result;
      }
    });
  }

  /**
   * @param {boolean} durable 
   */
  async sync(durable) {
    if (this.#chain) {
      // This waits for all IndexedDB calls to be made.
      await this.#chain;
      if (durable) {
        // This waits for the final transaction to commit.
        await this.#txComplete;
      }
      this.reset();
    }
  }

  reset() {
    this.#chain = null;
    this.#txComplete = Promise.resolve();
    this.#request = null;
  }
}

/**
 * @param {IDBRequest} request 
 * @returns {Promise}
 */
function wrap(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}



/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/src/sqlite-api.js"
/*!***************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/src/sqlite-api.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/* harmony export */   SQLITE_PREPARE_NORMALIZED: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PREPARE_NORMALIZED),
/* harmony export */   SQLITE_PREPARE_NO_VTAB: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PREPARE_NO_VTAB),
/* harmony export */   SQLITE_PREPARE_PERSISTENT: () => (/* reexport safe */ _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_PREPARE_PERSISTENT),
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
/* harmony import */ var _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sqlite-constants.js */ "./node_modules/@journeyapps/wa-sqlite/src/sqlite-constants.js");
// Copyright 2021 Roy T. Hashimoto. All Rights Reserved.




/**
 * Need to have a serializer for bigint
 * https://github.com/GoogleChromeLabs/jsbi/issues/30
 */
if (typeof BigInt.prototype['toJSON'] == 'undefined') {
  BigInt.prototype['toJSON'] = function() {
    return this.toString();
  };
}

const MAX_INT64 = 0x7fffffffffffffffn;
const MIN_INT64 = -0x8000000000000000n;

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

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

  Module.retryOps = [];
  const sqliteFreeAddress = Module._getSqliteFree();

  // Allocate some space for 32-bit returned values.
  const tmp = Module._malloc(8);
  const tmpPtr = [tmp, tmp + 4];

  const textEncoder = new TextEncoder();
  // Convert a JS string to a C string. sqlite3_malloc is used to allocate
  // memory (use sqlite3_free to deallocate).
  function createUTF8(s) {
    if (typeof s !== 'string') return 0;
    const utf8 = textEncoder.encode(s);
    const zts = Module._sqlite3_malloc(utf8.byteLength + 1);
    Module.HEAPU8.set(utf8, zts);
    Module.HEAPU8[zts + utf8.byteLength] = 0;
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

  // /**
  //  * Setup table change update callback
  //  */
  // var onTableChangedFunctionPointer = Module.addFunction(onTableUpdate);
  // var passFnPointer = Module.cwrap('passFnPointer', 'undefined', ['number']);
  // passFnPointer(onTableChangedFunctionPointer);
  /**
   * Concatenate 32-bit numbers and return as number or BigInt, depending
   * on the value.
   * @param {number} lo32
   * @param {number} hi32
   * @returns {number|bigint}
   */
  const cvt32x2AsSafe = (function() {
    const hiMax = BigInt(Number.MAX_SAFE_INTEGER) >> 32n;
    const hiMin = BigInt(Number.MIN_SAFE_INTEGER) >> 32n;

    return function(lo32, hi32) {
      if (hi32 > hiMax || hi32 < hiMin) {
        // Can't be expressed as a Number so use BigInt.
        return cvt32x2ToBigInt(lo32, hi32);
      } else {
        // Combine the upper and lower 32-bit numbers. The complication is
        // that lo32 is a signed integer which makes manipulating its bits
        // a little tricky - the sign bit gets handled separately.
        return hi32 * 0x100000000 + (lo32 & 0x7fffffff) - (lo32 & 0x80000000);
      }
    };
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

  sqlite3.bind_collection = function(stmt, bindings) {
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

  sqlite3.bind = function(stmt, i, value) {
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
      case "boolean":
        return sqlite3.bind_int(stmt, i, value ? 1 : 0);
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

  sqlite3.bind_blob = (function() {
    const fname = 'sqlite3_bind_blob';
    const f = Module.cwrap(fname, ...decl('nnnnn:n'));
    return function(stmt, i, value) {
      verifyStatement(stmt);
      // @ts-ignore
      const byteLength = value.byteLength ?? value.length;
      const ptr = Module._sqlite3_malloc(byteLength);
      Module.HEAPU8.subarray(ptr).set(value);
      const result = f(stmt, i, ptr, byteLength, sqliteFreeAddress);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_parameter_count = (function() {
    const fname = 'sqlite3_bind_parameter_count';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      return result;
    };
  })();

  sqlite3.bind_double = (function() {
    const fname = 'sqlite3_bind_double';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function(stmt, i, value) {
      verifyStatement(stmt);
      const result = f(stmt, i, value);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_int = (function() {
    const fname = 'sqlite3_bind_int';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function(stmt, i, value) {
      verifyStatement(stmt);
      if (value > 0x7fffffff || value < -0x80000000) return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE;

      const result = f(stmt, i, value);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_int64 = (function() {
    const fname = 'sqlite3_bind_int64';
    const f = Module.cwrap(fname, ...decl('nnnn:n'));
    return function(stmt, i, value) {
      verifyStatement(stmt);
      if (value > MAX_INT64 || value < MIN_INT64) return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE;

      const lo32 = value & 0xffffffffn;
      const hi32 = value >> 32n;
      const result = f(stmt, i, Number(lo32), Number(hi32));
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_null = (function() {
    const fname = 'sqlite3_bind_null';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, i) {
      verifyStatement(stmt);
      const result = f(stmt, i);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.bind_parameter_name = (function() {
    const fname = 'sqlite3_bind_parameter_name';
    const f = Module.cwrap(fname, ...decl('n:s'));
    return function(stmt, i) {
      verifyStatement(stmt);
      const result = f(stmt, i);
      return result;
    };
  })();

  sqlite3.bind_text = (function() {
    const fname = 'sqlite3_bind_text';
    const f = Module.cwrap(fname, ...decl('nnnnn:n'));
    return function(stmt, i, value) {
      verifyStatement(stmt);
      const ptr = createUTF8(value);
      const result = f(stmt, i, ptr, -1, sqliteFreeAddress);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.changes = (function() {
    const fname = 'sqlite3_changes';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(db) {
      verifyDatabase(db);
      const result = f(db);
      return result;
    };
  })();

  sqlite3.clear_bindings = (function() {
    const fname = 'sqlite3_clear_bindings';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.last_insert_id = (function() {
    const fname = 'sqlite3_last_insert_rowid';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(db) {
      verifyDatabase(db);
      const result = f(db);
      // trace(fname, result);
      return result;
    };
  })();
  
  sqlite3.close = (function() {
    const fname = 'sqlite3_close';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function(db) {
      verifyDatabase(db);
      const result = await f(db);
      databases.delete(db);
      return check(fname, result, db);
    };
  })();

  sqlite3.column = function(stmt, iCol) {
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

  sqlite3.column_blob = (function() {
    const fname = 'sqlite3_column_blob';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const nBytes = sqlite3.column_bytes(stmt, iCol);
      const address = f(stmt, iCol);
      const result = Module.HEAPU8.subarray(address, address + nBytes);
      return result;
    };
  })();

  sqlite3.column_bytes = (function() {
    const fname = 'sqlite3_column_bytes';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      return result;
    };
  })();

  sqlite3.column_count = (function() {
    const fname = 'sqlite3_column_count';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      return result;
    };
  })();

  sqlite3.column_double = (function() {
    const fname = 'sqlite3_column_double';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      return result;
    };
  })();

  sqlite3.column_int = (function() {
    // Retrieve int64 but use only the lower 32 bits. The upper 32-bits are
    // accessible with Module.getTempRet0().
    const fname = 'sqlite3_column_int64';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      return result;
    };
  })();

  sqlite3.column_int64 = (function() {
    const fname = 'sqlite3_column_int64';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const lo32 = f(stmt, iCol);
      const hi32 = Module.getTempRet0();
      const result = cvt32x2ToBigInt(lo32, hi32);
      return result;
    };
  })();

  sqlite3.column_name = (function() {
    const fname = 'sqlite3_column_name';
    const f = Module.cwrap(fname, ...decl('nn:s'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      return result;
    };
  })();

  sqlite3.column_names = function(stmt) {
    const columns = [];
    const nColumns = sqlite3.column_count(stmt);
    for (let i = 0; i < nColumns; ++i) {
      columns.push(sqlite3.column_name(stmt, i));
    }
    return columns;
  };

  sqlite3.column_text = (function() {
    const fname = 'sqlite3_column_text';
    const f = Module.cwrap(fname, ...decl('nn:s'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      return result;
    };
  })();

  sqlite3.column_type = (function() {
    const fname = 'sqlite3_column_type';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(stmt, iCol) {
      verifyStatement(stmt);
      const result = f(stmt, iCol);
      return result;
    };
  })();

  sqlite3.create_function = function(db, zFunctionName, nArg, eTextRep, pApp, xFunc, xStep, xFinal) {
    verifyDatabase(db);
    
    // Convert SQLite callback arguments to JavaScript-friendly arguments.
    function adapt(f) {
      return f instanceof AsyncFunction ?
        (async (ctx, n, values) => f(ctx, Module.HEAP32.subarray(values / 4, values / 4 + n))) :
        ((ctx, n, values) => f(ctx, Module.HEAP32.subarray(values / 4, values / 4 + n)));
    }

    const result = Module.create_function(
      db,
      zFunctionName,
      nArg,
      eTextRep,
      pApp,
      xFunc && adapt(xFunc),
      xStep && adapt(xStep),
      xFinal);
    return check('sqlite3_create_function', result, db);
  };

  sqlite3.data_count = (function() {
    const fname = 'sqlite3_data_count';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      return result;
    };
  })();

  sqlite3.exec = async function(db, sql, callback) {
    for await (const stmt of sqlite3.statements(db, sql)) {
      let columns;
      while ((await sqlite3.step(stmt)) === _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {
        if (callback) {
          columns = columns ?? sqlite3.column_names(stmt);
          const row = sqlite3.row(stmt);
          await callback(row, columns);
        }
      }
    }
    return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK;
  };

  sqlite3.finalize = (function() {
    const fname = 'sqlite3_finalize';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function(stmt) {
      const result = await f(stmt);
      mapStmtToDB.delete(stmt)

      // Don't throw on error here. Typically the error has already been
      // thrown and finalize() is part of the cleanup.
      return result;
    };
  })();

  sqlite3.get_autocommit = (function() {
    const fname = 'sqlite3_get_autocommit';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(db) {
      const result = f(db);
      return result;
    };
  })();

  sqlite3.libversion = (function() {
    const fname = 'sqlite3_libversion';
    const f = Module.cwrap(fname, ...decl(':s'));
    return function() {
      const result = f();
      return result;
    };
  })();

  sqlite3.libversion_number = (function() {
    const fname = 'sqlite3_libversion_number';
    const f = Module.cwrap(fname, ...decl(':n'));
    return function() {
      const result = f();
      return result;
    };
  })();

  sqlite3.limit = (function() {
    const fname = 'sqlite3_limit';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function(db, id, newVal) {
      const result = f(db, id, newVal);
      return result;
    };
  })();

  sqlite3.open_v2 = (function() {
    const fname = 'sqlite3_open_v2';
    const f = Module.cwrap(fname, ...decl('snnn:n'), { async });
    return async function(zFilename, flags, zVfs) {
      flags = flags || _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_CREATE | _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READWRITE;
      zVfs = createUTF8(zVfs);
      try {
        // Allow retry operations.
        const rc = await retry(() => f(zFilename, tmpPtr[0], flags, zVfs));

        const db = Module.getValue(tmpPtr[0], '*');
        databases.add(db);

        Module.ccall('RegisterExtensionFunctions', 'number', ['number'], [db]);
        check(fname, rc);
        return db;
      } finally {
        Module._sqlite3_free(zVfs);
      }
    };
  })();

  sqlite3.progress_handler = function(db, nProgressOps, handler, userData) {
    verifyDatabase(db);
    Module.progress_handler(db, nProgressOps, handler, userData);
  };;

  sqlite3.reset = (function() {
    const fname = 'sqlite3_reset';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function(stmt) {
      verifyStatement(stmt);
      const result = await f(stmt);
      return check(fname, result, mapStmtToDB.get(stmt));
    };
  })();

  sqlite3.result = function(context, value) {
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

  sqlite3.result_blob = (function() {
    const fname = 'sqlite3_result_blob';
    const f = Module.cwrap(fname, ...decl('nnnn:n'));
    return function(context, value) {
      // @ts-ignore
      const byteLength = value.byteLength ?? value.length;
      const ptr = Module._sqlite3_malloc(byteLength);
      Module.HEAPU8.subarray(ptr).set(value);
      f(context, ptr, byteLength, sqliteFreeAddress); // void return
    };
  })();

  sqlite3.result_double = (function() {
    const fname = 'sqlite3_result_double';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(context, value) {
      f(context, value); // void return
    };
  })();

  sqlite3.result_int = (function() {
    const fname = 'sqlite3_result_int';
    const f = Module.cwrap(fname, ...decl('nn:n'));
    return function(context, value) {
      f(context, value); // void return
    };
  })();

  sqlite3.result_int64 = (function() {
    const fname = 'sqlite3_result_int64';
    const f = Module.cwrap(fname, ...decl('nnn:n'));
    return function(context, value) {
      if (value > MAX_INT64 || value < MIN_INT64) return _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_RANGE;

      const lo32 = value & 0xffffffffn;
      const hi32 = value >> 32n;
      f(context, Number(lo32), Number(hi32)); // void return
    };
  })();

  sqlite3.result_null = (function() {
    const fname = 'sqlite3_result_null';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(context) {
      f(context); // void return
    };
  })();

  sqlite3.result_text = (function() {
    const fname = 'sqlite3_result_text';
    const f = Module.cwrap(fname, ...decl('nnnn:n'));
    return function(context, value) {
      const ptr = createUTF8(value);
      f(context, ptr, -1, sqliteFreeAddress); // void return
    };
  })();

  sqlite3.row = function(stmt) {
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

  sqlite3.set_authorizer = function(db, xAuth, pApp) {
    verifyDatabase(db);

    // Convert SQLite callback arguments to JavaScript-friendly arguments.
    function cvtArgs(_, iAction, p3, p4, p5, p6) {
      return [
        _,
        iAction,
        Module.UTF8ToString(p3),
        Module.UTF8ToString(p4),
        Module.UTF8ToString(p5),
        Module.UTF8ToString(p6)
      ];
    };
    function adapt(f) {
      return f instanceof AsyncFunction ?
        (async (_, iAction, p3, p4, p5, p6) => f(...cvtArgs(_, iAction, p3, p4, p5, p6))) :
        ((_, iAction, p3, p4, p5, p6) => f(...cvtArgs(_, iAction, p3, p4, p5, p6)));
    }

    const result = Module.set_authorizer(db, adapt(xAuth), pApp);
    return check('sqlite3_set_authorizer', result, db);
  };

  sqlite3.sql = (function() {
    const fname = 'sqlite3_sql';
    const f = Module.cwrap(fname, ...decl('n:s'));
    return function(stmt) {
      verifyStatement(stmt);
      const result = f(stmt);
      return result;
    };
  })();

  sqlite3.statements = function(db, sql, options = {}) {
    const prepare = Module.cwrap(
      'sqlite3_prepare_v3',
      'number',
      ['number', 'number', 'number', 'number', 'number', 'number'],
      { async: true });

    return (async function*() {
      const onFinally = [];
      try {
        // Encode SQL string to UTF-8.
        const utf8 = textEncoder.encode(sql);

        // Copy encoded string to WebAssembly memory. The SQLite docs say
        // zero-termination is a minor optimization so add room for that.
        // Also add space for the statement handle and SQL tail pointer.
        const allocSize = utf8.byteLength - (utf8.byteLength % 4) + 12;
        const pzHead = Module._sqlite3_malloc(allocSize);
        const pzEnd = pzHead + utf8.byteLength + 1;
        onFinally.push(() => Module._sqlite3_free(pzHead));
        Module.HEAPU8.set(utf8, pzHead);
        Module.HEAPU8[pzEnd - 1] = 0;
  
        // Use extra space for the statement handle and SQL tail pointer.
        const pStmt = pzHead + allocSize - 8;
        const pzTail = pzHead + allocSize - 4;

        // Ensure that statement handles are not leaked.
        let stmt;
        function maybeFinalize() {
          if (stmt && !options.unscoped) {
            sqlite3.finalize(stmt);
          }
          stmt = 0;
        }
        onFinally.push(maybeFinalize);
        
        // Loop over statements.
        Module.setValue(pzTail, pzHead, '*');
        do {
          // Reclaim resources for the previous iteration.
          maybeFinalize();

          // Call sqlite3_prepare_v3() for the next statement.
          // Allow retry operations.
          const zTail = Module.getValue(pzTail, '*');
          const rc = await retry(() => {
            return prepare(
              db,
              zTail,
              pzEnd - pzTail,
              options.flags || 0,
              pStmt,
              pzTail);
          });

          if (rc !== _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK) {
            check('sqlite3_prepare_v3', rc, db);
          }
          
          stmt = Module.getValue(pStmt, '*');
          if (stmt) {
            mapStmtToDB.set(stmt, db);
            yield stmt;
          }
        } while (stmt);
      } finally {
        while (onFinally.length) {
          onFinally.pop()();
        }
      }
    })();
  };

  sqlite3.step = (function() {
    const fname = 'sqlite3_step';
    const f = Module.cwrap(fname, ...decl('n:n'), { async });
    return async function(stmt) {
      verifyStatement(stmt);

      // Allow retry operations.
      const rc = await retry(() => f(stmt));

      return check(fname, rc, mapStmtToDB.get(stmt), [_sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW, _sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_DONE]);
    };
  })();

  sqlite3.commit_hook = function(db, xCommitHook) {
    verifyDatabase(db);
    Module.commit_hook(db, xCommitHook);
  };

  sqlite3.update_hook = function(db, xUpdateHook) {
    verifyDatabase(db);

    // Convert SQLite callback arguments to JavaScript-friendly arguments.
    function cvtArgs(iUpdateType, dbName, tblName, lo32, hi32) {
      return [
        iUpdateType,
        Module.UTF8ToString(dbName),
        Module.UTF8ToString(tblName),
		cvt32x2ToBigInt(lo32, hi32)
      ];
    };
    function adapt(f) {
      return f instanceof AsyncFunction ?
        (async (iUpdateType, dbName, tblName, lo32, hi32) => f(...cvtArgs(iUpdateType, dbName, tblName, lo32, hi32))) :
        ((iUpdateType, dbName, tblName, lo32, hi32) => f(...cvtArgs(iUpdateType, dbName, tblName, lo32, hi32)));
    }

    Module.update_hook(db, adapt(xUpdateHook));
  };;

  sqlite3.value = function(pValue) {
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

  sqlite3.value_blob = (function() {
    const fname = 'sqlite3_value_blob';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(pValue) {
      const nBytes = sqlite3.value_bytes(pValue);
      const address = f(pValue);
      const result = Module.HEAPU8.subarray(address, address + nBytes);
      return result;
    };
  })();

  sqlite3.value_bytes = (function() {
    const fname = 'sqlite3_value_bytes';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(pValue) {
      const result = f(pValue);
      return result;
    };
  })();

  sqlite3.value_double = (function() {
    const fname = 'sqlite3_value_double';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(pValue) {
      const result = f(pValue);
      return result;
    };
  })();

  sqlite3.value_int = (function() {
    const fname = 'sqlite3_value_int64';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(pValue) {
      const result = f(pValue);
      return result;
    };
  })();

  sqlite3.value_int64 = (function() {
    const fname = 'sqlite3_value_int64';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(pValue) {
      const lo32 = f(pValue);
      const hi32 = Module.getTempRet0();
      const result = cvt32x2ToBigInt(lo32, hi32);
      return result;
    };
  })();

  sqlite3.value_text = (function() {
    const fname = 'sqlite3_value_text';
    const f = Module.cwrap(fname, ...decl('n:s'));
    return function(pValue) {
      const result = f(pValue);
      return result;
    };
  })();

  sqlite3.value_type = (function() {
    const fname = 'sqlite3_value_type';
    const f = Module.cwrap(fname, ...decl('n:n'));
    return function(pValue) {
      const result = f(pValue);
      return result;
    };
  })();

  sqlite3.vfs_register = function(vfs, makeDefault) {
    const result = Module.vfs_register(vfs, makeDefault);
    return check('sqlite3_vfs_register', result);
  };

  function check(fname, result, db = null, allowed = [_sqlite_constants_js__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK]) {
    if (allowed.includes(result)) return result;
    const message = db ? Module.ccall('sqlite3_errmsg', 'string', ['number'], [db]) : fname;
    throw new SQLiteError(message, result);
  }

  // This function is used to automatically retry failed calls that
  // have pending retry operations that should allow the retry to
  // succeed.
  async function retry(f) {
    let rc;
    do {
      // Wait for all pending retry operations to complete. This is
      // normally empty on the first loop iteration.
      if (Module.retryOps.length) {
        try {
          await Promise.all(Module.retryOps);
        } finally {
          Module.retryOps = [];
        }
      }
      
      rc = await f();

      // Retry on failure with new pending retry operations.
    } while (rc && Module.retryOps.length);
    return rc;
  }

  return sqlite3;
}

// Helper function to use a more compact signature specification.
function decl(s) {
  const result = [];
  const m = s.match(/([ns@]*):([nsv@])/);
  switch (m[2]) {
    case 'n':
      result.push('number');
      break;
    case 's':
      result.push('string');
      break;
    case 'v':
      result.push(null);
      break;
  }

  const args = [];
  for (let c of m[1]) {
    switch (c) {
      case 'n':
        args.push('number');
        break;
      case 's':
        args.push('string');
        break;
    }
  }
  result.push(args);
  return result;
}


/***/ },

/***/ "./node_modules/@journeyapps/wa-sqlite/src/sqlite-constants.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@journeyapps/wa-sqlite/src/sqlite-constants.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
/* harmony export */   SQLITE_PREPARE_NORMALIZED: () => (/* binding */ SQLITE_PREPARE_NORMALIZED),
/* harmony export */   SQLITE_PREPARE_NO_VTAB: () => (/* binding */ SQLITE_PREPARE_NO_VTAB),
/* harmony export */   SQLITE_PREPARE_PERSISTENT: () => (/* binding */ SQLITE_PREPARE_PERSISTENT),
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

const SQLITE_PREPARE_PERSISTENT = 0x01;
const SQLITE_PREPARE_NORMALIZED = 0x02;
const SQLITE_PREPARE_NO_VTAB = 0x04;

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/sqlite-worker.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _journeyapps_wa_sqlite_dist_wa_sqlite_jspi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs */ "./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs");
/* harmony import */ var _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @journeyapps/wa-sqlite */ "./node_modules/@journeyapps/wa-sqlite/src/sqlite-api.js");
/* harmony import */ var _journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS */ "./node_modules/@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js");
// @journeyapps/wa-sqlite is the actively-maintained PowerSync fork of rhashimoto/wa-sqlite.
// The original npm package (wa-sqlite@1.0.0) is 2 years stale and contains a WASM memory
// OOB bug that causes "disk image is malformed" corruption on large seeds.
// JSPI build (wa-sqlite-jspi.mjs) is used instead of Asyncify (wa-sqlite-async.mjs) because
// Asyncify triggers a Windows debugger access violation during WASM JIT compilation.
// JSPI is stable in Chrome 137+ (unflagged) and has no stack-rewriting overhead.




let sqlite3 = null;
// asyncModule is module-scoped (not local to ensureEngine) so it can be passed to
// IDBBatchAtomicVFS.create(). The new API requires the Emscripten module object to
// resolve helpers like UTF8ToString that the VFS uses internally.
let asyncModule = null;
let currentDb = null;
// Map of fileName → VFS instance so we can close IDB connections when the database
// is closed. This releases the IndexedDB lock, allowing indexedDB.deleteDatabase() to succeed.
const registeredVfs = new Map();

async function ensureEngine() {
    if (sqlite3) return;
    asyncModule = await (0,_journeyapps_wa_sqlite_dist_wa_sqlite_jspi_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    sqlite3 = _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.Factory(asyncModule);
}

function resultToRow(columns, rowData) {
    const obj = {};
    for (let i = 0; i < rowData.length; i++) {
        const val = rowData[i];
        // Uint8Array (BLOB) — copy out of volatile WASM memory immediately.
        // With JSPI, Module.HEAPU8 may be replaced between async suspensions,
        // leaving any subarray view stale. Slice to a standalone copy.
        obj[columns[i]] = (val instanceof Uint8Array) ? val.slice() : val;
    }
    return obj;
}

const handlers = {
    async open(args) {
        const [dbName, fileName] = args;
        await ensureEngine();
        if (!registeredVfs.has(fileName)) {
            const vfs = await _journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS__WEBPACK_IMPORTED_MODULE_2__.IDBBatchAtomicVFS.create(fileName, asyncModule);
            sqlite3.vfs_register(vfs);
            registeredVfs.set(fileName, vfs);
        }
        currentDb = await sqlite3.open_v2(
            dbName,
            _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_CREATE | _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_READWRITE | _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OPEN_URI,
            fileName
        );
        return currentDb;
    },

    async close() {
        if (currentDb === null) return;
        await sqlite3.close(currentDb);
        currentDb = null;
        // Close all VFS IDB connections so the IndexedDB lock is released.
        // Required before indexedDB.deleteDatabase() can succeed.
        for (const vfs of registeredVfs.values()) {
            vfs.close();
        }
        registeredVfs.clear();
    },

    /**
     * execute — run a single SQL statement (INSERT/UPDATE/DELETE/DDL).
     * @param {[number, string, Object|null]} args - [dbConn, sql, parameters]
     * @returns {{ changes: number, response: string, data: string, error: string }}
     */
    async execute(args) {
        const [dbConn, sql, parameters] = args;
        const result = { changes: 0, response: null, data: '', error: '' };
        try {
            for await (const stmt of sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    const bindResult = await sqlite3.bind_collection(stmt, parameters);
                    if (bindResult !== _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK) {
                        result.error = 'Unable to prepare statement. Check your syntax or parameters';
                        return result;
                    }
                }
                while (await sqlite3.step(stmt) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ROW) {}
                result.response = 'SQLITE_DONE';
                result.changes = sqlite3.changes(dbConn);
            }
        } catch (error) {
            result.error = error.message;
        }
        return result;
    },

    /**
     * query — execute a SQL SELECT and return all rows as objects.
     * @param {[number, string, Object|null]} args - [dbConn, sql, parameters]
     * @returns {{ data: Object[], error: string }}
     */
    async query(args) {
        const [dbConn, sql, parameters] = args;
        const result = { data: [], error: '' };
        try {
            for await (const stmt of sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    const bindResult = await sqlite3.bind_collection(stmt, parameters);
                    if (bindResult !== _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK) {
                        result.error = 'Unable to prepare statement';
                        return result;
                    }
                }
                try {
                    let columns;
                    while (await sqlite3.step(stmt) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ROW) {
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

    /**
     * bulkInsertRawUpsert — upsert from \0-delimited raw payload.
     * Uses INSERT INTO ... ON CONFLICT(pk) DO UPDATE SET — preserves existing row data.
     * Use for incremental sync where rows may already exist locally.
     * For initial seeding into empty tables, use bulkInsertRaw instead.
     * @param {[number, string]} args - [dbConn, payload]
     * @returns {{ totalChanges: number, errors: Array }}
     */
    async bulkInsertRawUpsert(args) {
        return await handlers._bulkInsertRawImpl(args, true);
    },

    /**
     * bulkInsertRaw — zero-deserialization seed path.
     * Uses INSERT OR REPLACE INTO — no index lookup, fastest path for empty tables.
     * Use for initial seeding only. For incremental sync, use bulkInsertRawUpsert.
     * @param {[number, string]} args - [dbConn, payload]
     * @returns {{ totalChanges: number, errors: Array }}
     */
    async bulkInsertRaw(args) {
        return await handlers._bulkInsertRawImpl(args, false);
    },

    async _bulkInsertRawImpl(args, isUpsert) {
        const [dbConn, payload] = args;

        // Parse \0-delimited format (no outer JSON — zero C# encoding overhead)
        // Header: table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0colN\0
        // Body:   rawLine1\0rawLine2\0... (each is a full NDJSON row line)
        const parts = payload.split('\0');
        let i = 0;
        const table      = parts[i++];
        const primaryKey = parts[i++];
        const rowsPerStmt = parseInt(parts[i++]);
        const colCount   = parseInt(parts[i++]);
        const columns    = parts.slice(i, i + colCount);
        i += colCount;
        // Remaining parts are raw NDJSON lines (last element is empty string after trailing \0)
        const totalLines = parts.length - 1 - i;

        if (totalLines === 0) return { totalChanges: 0, errors: [] };

        const colList = columns.join(',');
        let totalChanges = 0;
        const errors = [];

        const updateSet = isUpsert
            ? columns.filter(c => c !== primaryKey).map(c => `${c}=excluded.${c}`).join(',')
            : null;

        const sqlCache = new Map();
        function getSql(rowCount) {
            if (sqlCache.has(rowCount)) return sqlCache.get(rowCount);
            const placeholders = [];
            for (let r = 0; r < rowCount; r++) {
                placeholders.push('(' + new Array(colCount).fill('?').join(',') + ')');
            }
            const sql = isUpsert
                ? `INSERT INTO ${table} (${colList}) VALUES ${placeholders.join(',')} ON CONFLICT(${primaryKey}) DO UPDATE SET ${updateSet}`
                : `INSERT OR REPLACE INTO ${table} (${colList}) VALUES ${placeholders.join(',')}`;
            sqlCache.set(rowCount, sql);
            return sql;
        }

        // Each part is a raw NDJSON line — may be "row" (single) or "rows" (bundle).
        // Expand all lines into a flat params array for the current statement batch.
        // JS handles expansion natively at V8 speed — zero C# per-line cost.
        const allParams = [];
        let totalRows = 0;
        for (let li = 0; li < totalLines; li++) {
            const lineObj = JSON.parse(parts[i + li]);
            if (lineObj.rows) {
                for (const dataObj of lineObj.rows) {
                    for (let c = 0; c < colCount; c++) {
                        const val = dataObj[columns[c]];
                        allParams.push(val === true ? 1 : val === false ? 0 : (val !== undefined ? val : null));
                    }
                    totalRows++;
                }
            } else {
                const dataObj = lineObj.data ?? lineObj;
                for (let c = 0; c < colCount; c++) {
                    const val = dataObj[columns[c]];
                    allParams.push(val === true ? 1 : val === false ? 0 : (val !== undefined ? val : null));
                }
                totalRows++;
            }
        }

        // Execute in rowsPerStmt-sized statement batches
        let rowIndex = 0;
        while (rowIndex < totalRows) {
            const stmtRowCount = Math.min(rowsPerStmt, totalRows - rowIndex);
            const sql = getSql(stmtRowCount);
            const params = allParams.slice(rowIndex * colCount, (rowIndex + stmtRowCount) * colCount);

            try {
                for await (const stmt of sqlite3.statements(dbConn, sql)) {
                    const bindResult = await sqlite3.bind_collection(stmt, params);
                    if (bindResult !== _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_OK) {
                        errors.push({ index: rowIndex, error: 'bind_collection failed' });
                        break;
                    }
                    while (await sqlite3.step(stmt) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_1__.SQLITE_ROW) {}
                    totalChanges += sqlite3.changes(dbConn);
                }
            } catch (error) {
                errors.push({ index: rowIndex, error: error.message });
            }

            rowIndex += stmtRowCount;
        }

        return { totalChanges, errors, firstError: errors.length > 0 ? errors[0].error : null };
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0RBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEdBQUc7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLFFBQVE7QUFDckIsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL3NCQTtBQUM2QztBQUNQOztBQUV0Qzs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLGlFQUFtQjtBQUM5Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsaUVBQW1CO0FBQzlCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLEVBQUUscUVBQXVCO0FBQ3pCLEVBQUUsMEVBQTRCO0FBQzlCLEVBQUUscUVBQXVCO0FBQ3pCLEVBQUUsMEVBQTRCO0FBQzlCLEVBQUUsMEVBQTRCO0FBQzlCLEVBQUUsd0VBQTBCO0FBQzVCLEVBQUUsMkVBQTZCO0FBQy9CLEVBQUUsaUVBQW1CO0FBQ3JCLDRDOzs7Ozs7Ozs7Ozs7Ozs7QUM3TmdDOztBQUVoQztBQUNBLFdBQVcsYUFBYSxvQkFBb0I7QUFDNUMsV0FBVyxhQUFhLHlCQUF5QjtBQUNqRCxXQUFXLGFBQWEsNEJBQTRCOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QixjQUFjLGVBQWU7QUFDN0IsY0FBYyxlQUFlO0FBQzdCLGNBQWMsZUFBZTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx3QkFBd0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELG1CQUFtQjtBQUM5RTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsOENBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGFBQWEsc0RBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsOENBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGFBQWEsd0RBQXVCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsYUFBYSxtRUFBa0M7QUFDL0M7QUFDQTtBQUNBLFdBQVcsOENBQWE7QUFDeEI7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9EQUFtQjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLHFCQUFxQixxREFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFhO0FBQ3hCOztBQUVBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFvQjtBQUMvQjtBQUNBLGVBQWUsdURBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBZTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBc0I7QUFDakM7QUFDQSxlQUFlLHlEQUF3QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBZTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsMERBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseURBQXdCO0FBQ25DO0FBQ0EsZUFBZSwwREFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFlO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscURBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sT0FBTztBQUNiO0FBQ0EsYUFBYSwwREFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx5REFBd0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsV0FBVyw4Q0FBYTtBQUN4Qjs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLG1DQUFtQztBQUNoRCxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsYUFBYSwyQkFBMkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLGdDQUFnQyxtQkFBbUIsSUFBSSxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFaQTtBQUM0QztBQUNYO0FBQ21COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTs7QUFFckIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTs7QUFFckIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsVUFBVTtBQUN2QixhQUFhLGFBQWE7O0FBRTFCLGFBQWEsUUFBUTtBQUNyQixhQUFhLHVCQUF1QixpQkFBaUI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxnQ0FBZ0MsZ0VBQWEsQ0FBQyxvREFBUztBQUM5RCxhQUFhLG1CQUFtQjtBQUNoQzs7QUFFQSxjQUFjOztBQUVkLGFBQWEsU0FBUztBQUN0QixhQUFhLFlBQVk7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVUsSUFBSSxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsVUFBVTtBQUNoRCw0QkFBNEIsdURBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsTUFBTTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBLGFBQWEsb0RBQW1CO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBLGFBQWEsd0RBQXVCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBLGFBQWEsOENBQWE7QUFDMUIsTUFBTTtBQUNOO0FBQ0EsYUFBYSx3REFBdUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsOERBQTZCO0FBQ3BELDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBLGFBQWEsdURBQXNCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0REFBMkI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBYTtBQUMxQixNQUFNO0FBQ047QUFDQSxhQUFhLHNEQUFxQjtBQUNsQztBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUEyQztBQUN6RDtBQUNBLHlCQUF5QixVQUFVOztBQUVuQywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix3REFBdUI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBdUI7QUFDOUMsdUJBQXVCLHdEQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUiw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOENBQWE7QUFDMUIsTUFBTTtBQUNOO0FBQ0EsYUFBYSx1REFBc0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBLGFBQWEsMERBQXlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTs7QUFFQSx1QkFBdUIsd0RBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGFBQWEsOENBQWE7QUFDMUIsTUFBTTtBQUNOO0FBQ0EsYUFBYSx1REFBc0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUFhO0FBQzFCLE1BQU07QUFDTjtBQUNBLGFBQWEsdURBQXNCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix1REFBc0I7QUFDM0M7QUFDQSxpREFBaUQsa0JBQWtCO0FBQ25FO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQSxzREFBc0QsaUJBQWlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxxQkFBcUIscURBQW9CO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUF1QjtBQUN0RDtBQUNBO0FBQ0EseUJBQXlCLGlEQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNERBQWE7QUFDN0Q7QUFDQTtBQUNBLGFBQWEsc0RBQXFCO0FBQ2xDO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9FQUFtQztBQUNoRDtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFhO0FBQzlCLGFBQWEscUVBQW9DO0FBQ2pEO0FBQ0E7QUFDQSxpQkFBaUIsOENBQWE7QUFDOUIsYUFBYSx1RUFBc0M7QUFDbkQ7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCx5QkFBeUIsa0JBQWtCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGlCQUFpQiw4Q0FBYTtBQUM5QjtBQUNBLE1BQU07QUFDTjtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQTZCO0FBQ25DLE1BQU0sdUVBQXNDO0FBQzVDOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQSxXQUFXLDhDQUFhO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGFBQWEsYUFBYTs7QUFFMUIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsY0FBYztBQUMzQixhQUFhLGFBQWE7QUFDMUIsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsaUJBQWlCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHVDQUF1QztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsaUJBQWlCOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9ELGFBQWEsV0FBVztBQUN4QixlQUFlO0FBQ2Y7QUFDQSxnQ0FBZ0M7QUFDaEMsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0MsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9ELGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsdUJBQXVCO0FBQ3BDLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsWUFBWTtBQUMzRSw2REFBNkQsWUFBWTtBQUN6RSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVksR0FBRyxpQkFBaUI7QUFDL0Q7QUFDQSxpQ0FBaUMsWUFBWSxHQUFHLGtCQUFrQjtBQUNsRSxrQkFBa0I7QUFDbEI7QUFDQSxpQ0FBaUMsWUFBWSxHQUFHLGtCQUFrQjtBQUNsRSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxJQUFJLFlBQVk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3p6QkE7O0FBRWdEO0FBQ1Y7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhEQUE4RDs7QUFFdkQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWE7QUFDYjtBQUNPO0FBQ1AsYUFBYSxXQUFXOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywrREFBb0I7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsK0RBQW9CO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQWdCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxpQkFBaUIsK0RBQW9CO0FBQ3JDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCw4REFBbUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw4REFBbUI7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZEQUFrQjtBQUM3QjtBQUNBLFdBQVcsOERBQW1CO0FBQzlCO0FBQ0EsV0FBVyxnRUFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2REFBa0I7QUFDN0I7QUFDQSxXQUFXLDZEQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw0REFBaUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFnQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU87QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0EsdUJBQXVCLG9FQUF5QixHQUFHLHVFQUE0QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw4REFBbUI7O0FBRTVFO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGFBQWE7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYLHFCQUFxQiwyREFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0QsNERBQWlCLEVBQUUsNkRBQWtCO0FBQzNGO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZEQUFrQjtBQUM3QjtBQUNBLFdBQVcsOERBQW1CO0FBQzlCO0FBQ0EsV0FBVyxnRUFBcUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2REFBa0I7QUFDN0I7QUFDQSxXQUFXLDZEQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCwyREFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbDdCQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTs7QUFFUDtBQUNBO0FBQ08sMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkJBQTJCOztBQUVsQztBQUNPO0FBQ0E7QUFD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QSwyQkFBMkIsOEJBQThCLE9BQU8sR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLE1BQU07QUFDTiwyQkFBMkIsdUNBQXVDO0FBQ2xFO0FBQ0E7O0FBRUEsbUJBQW1CLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy9Aam91cm5leWFwcHMvd2Etc3FsaXRlL2Rpc3Qvd2Etc3FsaXRlLWpzcGkubWpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvc3JjL0ZhY2FkZVZGUy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy9Aam91cm5leWFwcHMvd2Etc3FsaXRlL3NyYy9WRlMuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZS9zcmMvV2ViTG9ja3NNaXhpbi5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy9Aam91cm5leWFwcHMvd2Etc3FsaXRlL3NyYy9leGFtcGxlcy9JREJCYXRjaEF0b21pY1ZGUy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy9Aam91cm5leWFwcHMvd2Etc3FsaXRlL3NyYy9zcWxpdGUtYXBpLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvc3JjL3NxbGl0ZS1jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9zcmMvc3FsaXRlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBNb2R1bGUobW9kdWxlQXJnPXt9KXt2YXIgbW9kdWxlUnRuO3ZhciBNb2R1bGU9bW9kdWxlQXJnO3ZhciBFTlZJUk9OTUVOVF9JU19XRUI9ISFnbG9iYWxUaGlzLndpbmRvdzt2YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSPSEhZ2xvYmFsVGhpcy5Xb3JrZXJHbG9iYWxTY29wZTt2YXIgRU5WSVJPTk1FTlRfSVNfTk9ERT1nbG9iYWxUaGlzLnByb2Nlc3M/LnZlcnNpb25zPy5ub2RlJiZnbG9iYWxUaGlzLnByb2Nlc3M/LnR5cGUhPVwicmVuZGVyZXJcIjt2YXIgYXJndW1lbnRzXz1bXTt2YXIgdGhpc1Byb2dyYW09XCIuL3RoaXMucHJvZ3JhbVwiO3ZhciBxdWl0Xz0oc3RhdHVzLHRvVGhyb3cpPT57dGhyb3cgdG9UaHJvd307dmFyIF9zY3JpcHROYW1lPWltcG9ydC5tZXRhLnVybDt2YXIgc2NyaXB0RGlyZWN0b3J5PVwiXCI7ZnVuY3Rpb24gbG9jYXRlRmlsZShwYXRoKXtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXtyZXR1cm4gTW9kdWxlW1wibG9jYXRlRmlsZVwiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkQXN5bmMscmVhZEJpbmFyeTtpZihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUil7dHJ5e3NjcmlwdERpcmVjdG9yeT1uZXcgVVJMKFwiLlwiLF9zY3JpcHROYW1lKS5ocmVmfWNhdGNoe317aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKX19cmVhZEFzeW5jPWFzeW5jIHVybD0+e3ZhciByZXNwb25zZT1hd2FpdCBmZXRjaCh1cmwse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pO2lmKHJlc3BvbnNlLm9rKXtyZXR1cm4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKX10aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzK1wiIDogXCIrcmVzcG9uc2UudXJsKX19fWVsc2V7fXZhciBvdXQ9Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgZXJyPWNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTt2YXIgd2FzbUJpbmFyeTt2YXIgQUJPUlQ9ZmFsc2U7dmFyIEVYSVRTVEFUVVM7dmFyIHJlYWR5UHJvbWlzZVJlc29sdmUscmVhZHlQcm9taXNlUmVqZWN0O3ZhciBIRUFQOCxIRUFQVTgsSEVBUDE2LEhFQVBVMTYsSEVBUDMyLEhFQVBVMzIsSEVBUEYzMixIRUFQRjY0O3ZhciBydW50aW1lSW5pdGlhbGl6ZWQ9ZmFsc2U7ZnVuY3Rpb24gdXBkYXRlTWVtb3J5Vmlld3MoKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjtIRUFQOD1uZXcgSW50OEFycmF5KGIpO0hFQVAxNj1uZXcgSW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQVThcIl09SEVBUFU4PW5ldyBVaW50OEFycmF5KGIpO0hFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVAzMlwiXT1IRUFQMzI9bmV3IEludDMyQXJyYXkoYik7SEVBUFUzMj1uZXcgVWludDMyQXJyYXkoYik7SEVBUEYzMj1uZXcgRmxvYXQzMkFycmF5KGIpO0hFQVBGNjQ9bmV3IEZsb2F0NjRBcnJheShiKX1mdW5jdGlvbiBwcmVSdW4oKXtpZihNb2R1bGVbXCJwcmVSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVSdW5cIl09W01vZHVsZVtcInByZVJ1blwiXV07d2hpbGUoTW9kdWxlW1wicHJlUnVuXCJdLmxlbmd0aCl7YWRkT25QcmVSdW4oTW9kdWxlW1wicHJlUnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhvblByZVJ1bnMpfWZ1bmN0aW9uIGluaXRSdW50aW1lKCl7cnVudGltZUluaXRpYWxpemVkPXRydWU7aWYoIU1vZHVsZVtcIm5vRlNJbml0XCJdJiYhRlMuaW5pdGlhbGl6ZWQpRlMuaW5pdCgpO1RUWS5pbml0KCk7d2FzbUV4cG9ydHNbXCJfX3dhc21fY2FsbF9jdG9yc1wiXSgpO0ZTLmlnbm9yZVBlcm1pc3Npb25zPWZhbHNlfWZ1bmN0aW9uIHByZU1haW4oKXt9ZnVuY3Rpb24gcG9zdFJ1bigpe2lmKE1vZHVsZVtcInBvc3RSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwb3N0UnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicG9zdFJ1blwiXT1bTW9kdWxlW1wicG9zdFJ1blwiXV07d2hpbGUoTW9kdWxlW1wicG9zdFJ1blwiXS5sZW5ndGgpe2FkZE9uUG9zdFJ1bihNb2R1bGVbXCJwb3N0UnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhvblBvc3RSdW5zKX1mdW5jdGlvbiBhYm9ydCh3aGF0KXtNb2R1bGVbXCJvbkFib3J0XCJdPy4od2hhdCk7d2hhdD1cIkFib3J0ZWQoXCIrd2hhdCtcIilcIjtlcnIod2hhdCk7QUJPUlQ9dHJ1ZTt3aGF0Kz1cIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIjt2YXIgZT1uZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKHdoYXQpO3JlYWR5UHJvbWlzZVJlamVjdD8uKGUpO3Rocm93IGV9dmFyIHdhc21CaW5hcnlGaWxlO2Z1bmN0aW9uIGZpbmRXYXNtQmluYXJ5KCl7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7cmV0dXJuIGxvY2F0ZUZpbGUoXCJ3YS1zcWxpdGUtanNwaS53YXNtXCIpfXJldHVybiBuZXcgVVJMKFwid2Etc3FsaXRlLWpzcGkud2FzbVwiLGltcG9ydC5tZXRhLnVybCkuaHJlZn1mdW5jdGlvbiBnZXRCaW5hcnlTeW5jKGZpbGUpe2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCJ9YXN5bmMgZnVuY3Rpb24gZ2V0V2FzbUJpbmFyeShiaW5hcnlGaWxlKXtpZighd2FzbUJpbmFyeSl7dHJ5e3ZhciByZXNwb25zZT1hd2FpdCByZWFkQXN5bmMoYmluYXJ5RmlsZSk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3BvbnNlKX1jYXRjaHt9fXJldHVybiBnZXRCaW5hcnlTeW5jKGJpbmFyeUZpbGUpfWFzeW5jIGZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzKXt0cnl7dmFyIGJpbmFyeT1hd2FpdCBnZXRXYXNtQmluYXJ5KGJpbmFyeUZpbGUpO3ZhciBpbnN0YW5jZT1hd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW1wb3J0cyk7cmV0dXJuIGluc3RhbmNlfWNhdGNoKHJlYXNvbil7ZXJyKGBmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAke3JlYXNvbn1gKTthYm9ydChyZWFzb24pfX1hc3luYyBmdW5jdGlvbiBpbnN0YW50aWF0ZUFzeW5jKGJpbmFyeSxiaW5hcnlGaWxlLGltcG9ydHMpe2lmKCFiaW5hcnkpe3RyeXt2YXIgcmVzcG9uc2U9ZmV0Y2goYmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSk7dmFyIGluc3RhbnRpYXRpb25SZXN1bHQ9YXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVzcG9uc2UsaW1wb3J0cyk7cmV0dXJuIGluc3RhbnRpYXRpb25SZXN1bHR9Y2F0Y2gocmVhc29uKXtlcnIoYHdhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAke3JlYXNvbn1gKTtlcnIoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKX19cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzKX1mdW5jdGlvbiBnZXRXYXNtSW1wb3J0cygpe0FzeW5jaWZ5Lmluc3RydW1lbnRXYXNtSW1wb3J0cyh3YXNtSW1wb3J0cyk7dmFyIGltcG9ydHM9e2Vudjp3YXNtSW1wb3J0cyx3YXNpX3NuYXBzaG90X3ByZXZpZXcxOndhc21JbXBvcnRzfTtyZXR1cm4gaW1wb3J0c31hc3luYyBmdW5jdGlvbiBjcmVhdGVXYXNtKCl7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLG1vZHVsZSl7d2FzbUV4cG9ydHM9aW5zdGFuY2UuZXhwb3J0czt3YXNtRXhwb3J0cz1Bc3luY2lmeS5pbnN0cnVtZW50V2FzbUV4cG9ydHMod2FzbUV4cG9ydHMpO2Fzc2lnbldhc21FeHBvcnRzKHdhc21FeHBvcnRzKTt1cGRhdGVNZW1vcnlWaWV3cygpO3JldHVybiB3YXNtRXhwb3J0c31mdW5jdGlvbiByZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdChyZXN1bHQpe3JldHVybiByZWNlaXZlSW5zdGFuY2UocmVzdWx0W1wiaW5zdGFuY2VcIl0pfXZhciBpbmZvPWdldFdhc21JbXBvcnRzKCk7aWYoTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e01vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXShpbmZvLChpbnN0LG1vZCk9PntyZXNvbHZlKHJlY2VpdmVJbnN0YW5jZShpbnN0LG1vZCkpfSl9KX13YXNtQmluYXJ5RmlsZT8/PWZpbmRXYXNtQmluYXJ5KCk7dmFyIHJlc3VsdD1hd2FpdCBpbnN0YW50aWF0ZUFzeW5jKHdhc21CaW5hcnksd2FzbUJpbmFyeUZpbGUsaW5mbyk7dmFyIGV4cG9ydHM9cmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KTtyZXR1cm4gZXhwb3J0c312YXIgdGVtcERvdWJsZTt2YXIgdGVtcEk2NDtjbGFzcyBFeGl0U3RhdHVze25hbWU9XCJFeGl0U3RhdHVzXCI7Y29uc3RydWN0b3Ioc3RhdHVzKXt0aGlzLm1lc3NhZ2U9YFByb2dyYW0gdGVybWluYXRlZCB3aXRoIGV4aXQoJHtzdGF0dXN9KWA7dGhpcy5zdGF0dXM9c3RhdHVzfX12YXIgY2FsbFJ1bnRpbWVDYWxsYmFja3M9Y2FsbGJhY2tzPT57d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX07dmFyIG9uUG9zdFJ1bnM9W107dmFyIGFkZE9uUG9zdFJ1bj1jYj0+b25Qb3N0UnVucy5wdXNoKGNiKTt2YXIgb25QcmVSdW5zPVtdO3ZhciBhZGRPblByZVJ1bj1jYj0+b25QcmVSdW5zLnB1c2goY2IpO2Z1bmN0aW9uIGdldFZhbHVlKHB0cix0eXBlPVwiaThcIil7aWYodHlwZS5lbmRzV2l0aChcIipcIikpdHlwZT1cIipcIjtzd2l0Y2godHlwZSl7Y2FzZVwiaTFcIjpyZXR1cm4gSEVBUDhbcHRyXTtjYXNlXCJpOFwiOnJldHVybiBIRUFQOFtwdHJdO2Nhc2VcImkxNlwiOnJldHVybiBIRUFQMTZbcHRyPj4xXTtjYXNlXCJpMzJcIjpyZXR1cm4gSEVBUDMyW3B0cj4+Ml07Y2FzZVwiaTY0XCI6YWJvcnQoXCJ0byBkbyBnZXRWYWx1ZShpNjQpIHVzZSBXQVNNX0JJR0lOVFwiKTtjYXNlXCJmbG9hdFwiOnJldHVybiBIRUFQRjMyW3B0cj4+Ml07Y2FzZVwiZG91YmxlXCI6cmV0dXJuIEhFQVBGNjRbcHRyPj4zXTtjYXNlXCIqXCI6cmV0dXJuIEhFQVBVMzJbcHRyPj4yXTtkZWZhdWx0OmFib3J0KGBpbnZhbGlkIHR5cGUgZm9yIGdldFZhbHVlOiAke3R5cGV9YCl9fXZhciBub0V4aXRSdW50aW1lPXRydWU7ZnVuY3Rpb24gc2V0VmFsdWUocHRyLHZhbHVlLHR5cGU9XCJpOFwiKXtpZih0eXBlLmVuZHNXaXRoKFwiKlwiKSl0eXBlPVwiKlwiO3N3aXRjaCh0eXBlKXtjYXNlXCJpMVwiOkhFQVA4W3B0cl09dmFsdWU7YnJlYWs7Y2FzZVwiaThcIjpIRUFQOFtwdHJdPXZhbHVlO2JyZWFrO2Nhc2VcImkxNlwiOkhFQVAxNltwdHI+PjFdPXZhbHVlO2JyZWFrO2Nhc2VcImkzMlwiOkhFQVAzMltwdHI+PjJdPXZhbHVlO2JyZWFrO2Nhc2VcImk2NFwiOmFib3J0KFwidG8gZG8gc2V0VmFsdWUoaTY0KSB1c2UgV0FTTV9CSUdJTlRcIik7Y2FzZVwiZmxvYXRcIjpIRUFQRjMyW3B0cj4+Ml09dmFsdWU7YnJlYWs7Y2FzZVwiZG91YmxlXCI6SEVBUEY2NFtwdHI+PjNdPXZhbHVlO2JyZWFrO2Nhc2VcIipcIjpIRUFQVTMyW3B0cj4+Ml09dmFsdWU7YnJlYWs7ZGVmYXVsdDphYm9ydChgaW52YWxpZCB0eXBlIGZvciBzZXRWYWx1ZTogJHt0eXBlfWApfX12YXIgc3RhY2tSZXN0b3JlPXZhbD0+X19lbXNjcmlwdGVuX3N0YWNrX3Jlc3RvcmUodmFsKTt2YXIgc3RhY2tTYXZlPSgpPT5fZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudCgpO3ZhciBVVEY4RGVjb2Rlcj1uZXcgVGV4dERlY29kZXI7dmFyIGZpbmRTdHJpbmdFbmQ9KGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCxpZ25vcmVOdWwpPT57dmFyIG1heElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7aWYoaWdub3JlTnVsKXJldHVybiBtYXhJZHg7d2hpbGUoaGVhcE9yQXJyYXlbaWR4XSYmIShpZHg+PW1heElkeCkpKytpZHg7cmV0dXJuIGlkeH07dmFyIFVURjhUb1N0cmluZz0ocHRyLG1heEJ5dGVzVG9SZWFkLGlnbm9yZU51bCk9PntpZighcHRyKXJldHVyblwiXCI7dmFyIGVuZD1maW5kU3RyaW5nRW5kKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQsaWdub3JlTnVsKTtyZXR1cm4gVVRGOERlY29kZXIuZGVjb2RlKEhFQVBVOC5zdWJhcnJheShwdHIsZW5kKSl9O3ZhciBfX19hc3NlcnRfZmFpbD0oY29uZGl0aW9uLGZpbGVuYW1lLGxpbmUsZnVuYyk9PmFib3J0KGBBc3NlcnRpb24gZmFpbGVkOiAke1VURjhUb1N0cmluZyhjb25kaXRpb24pfSwgYXQ6IGArW2ZpbGVuYW1lP1VURjhUb1N0cmluZyhmaWxlbmFtZSk6XCJ1bmtub3duIGZpbGVuYW1lXCIsbGluZSxmdW5jP1VURjhUb1N0cmluZyhmdW5jKTpcInVua25vd24gZnVuY3Rpb25cIl0pO3ZhciBQQVRIPXtpc0FiczpwYXRoPT5wYXRoLmNoYXJBdCgwKT09PVwiL1wiLHNwbGl0UGF0aDpmaWxlbmFtZT0+e3ZhciBzcGxpdFBhdGhSZT0vXihcXC8/fCkoW1xcc1xcU10qPykoKD86XFwuezEsMn18W15cXC9dKz98KShcXC5bXi5cXC9dKnwpKSg/OltcXC9dKikkLztyZXR1cm4gc3BsaXRQYXRoUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSl9LG5vcm1hbGl6ZUFycmF5OihwYXJ0cyxhbGxvd0Fib3ZlUm9vdCk9Pnt2YXIgdXA9MDtmb3IodmFyIGk9cGFydHMubGVuZ3RoLTE7aT49MDtpLS0pe3ZhciBsYXN0PXBhcnRzW2ldO2lmKGxhc3Q9PT1cIi5cIil7cGFydHMuc3BsaWNlKGksMSl9ZWxzZSBpZihsYXN0PT09XCIuLlwiKXtwYXJ0cy5zcGxpY2UoaSwxKTt1cCsrfWVsc2UgaWYodXApe3BhcnRzLnNwbGljZShpLDEpO3VwLS19fWlmKGFsbG93QWJvdmVSb290KXtmb3IoO3VwO3VwLS0pe3BhcnRzLnVuc2hpZnQoXCIuLlwiKX19cmV0dXJuIHBhcnRzfSxub3JtYWxpemU6cGF0aD0+e3ZhciBpc0Fic29sdXRlPVBBVEguaXNBYnMocGF0aCksdHJhaWxpbmdTbGFzaD1wYXRoLnNsaWNlKC0xKT09PVwiL1wiO3BhdGg9UEFUSC5ub3JtYWxpemVBcnJheShwYXRoLnNwbGl0KFwiL1wiKS5maWx0ZXIocD0+ISFwKSwhaXNBYnNvbHV0ZSkuam9pbihcIi9cIik7aWYoIXBhdGgmJiFpc0Fic29sdXRlKXtwYXRoPVwiLlwifWlmKHBhdGgmJnRyYWlsaW5nU2xhc2gpe3BhdGgrPVwiL1wifXJldHVybihpc0Fic29sdXRlP1wiL1wiOlwiXCIpK3BhdGh9LGRpcm5hbWU6cGF0aD0+e3ZhciByZXN1bHQ9UEFUSC5zcGxpdFBhdGgocGF0aCkscm9vdD1yZXN1bHRbMF0sZGlyPXJlc3VsdFsxXTtpZighcm9vdCYmIWRpcil7cmV0dXJuXCIuXCJ9aWYoZGlyKXtkaXI9ZGlyLnNsaWNlKDAsLTEpfXJldHVybiByb290K2Rpcn0sYmFzZW5hbWU6cGF0aD0+cGF0aCYmcGF0aC5tYXRjaCgvKFteXFwvXSt8XFwvKVxcLyokLylbMV0sam9pbjooLi4ucGF0aHMpPT5QQVRILm5vcm1hbGl6ZShwYXRocy5qb2luKFwiL1wiKSksam9pbjI6KGwscik9PlBBVEgubm9ybWFsaXplKGwrXCIvXCIrcil9O3ZhciBpbml0UmFuZG9tRmlsbD0oKT0+dmlldz0+Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyh2aWV3KTt2YXIgcmFuZG9tRmlsbD12aWV3PT57KHJhbmRvbUZpbGw9aW5pdFJhbmRvbUZpbGwoKSkodmlldyl9O3ZhciBQQVRIX0ZTPXtyZXNvbHZlOiguLi5hcmdzKT0+e3ZhciByZXNvbHZlZFBhdGg9XCJcIixyZXNvbHZlZEFic29sdXRlPWZhbHNlO2Zvcih2YXIgaT1hcmdzLmxlbmd0aC0xO2k+PS0xJiYhcmVzb2x2ZWRBYnNvbHV0ZTtpLS0pe3ZhciBwYXRoPWk+PTA/YXJnc1tpXTpGUy5jd2QoKTtpZih0eXBlb2YgcGF0aCE9XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzXCIpfWVsc2UgaWYoIXBhdGgpe3JldHVyblwiXCJ9cmVzb2x2ZWRQYXRoPXBhdGgrXCIvXCIrcmVzb2x2ZWRQYXRoO3Jlc29sdmVkQWJzb2x1dGU9UEFUSC5pc0FicyhwYXRoKX1yZXNvbHZlZFBhdGg9UEFUSC5ub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoXCIvXCIpLmZpbHRlcihwPT4hIXApLCFyZXNvbHZlZEFic29sdXRlKS5qb2luKFwiL1wiKTtyZXR1cm4ocmVzb2x2ZWRBYnNvbHV0ZT9cIi9cIjpcIlwiKStyZXNvbHZlZFBhdGh8fFwiLlwifSxyZWxhdGl2ZTooZnJvbSx0byk9Pntmcm9tPVBBVEhfRlMucmVzb2x2ZShmcm9tKS5zbGljZSgxKTt0bz1QQVRIX0ZTLnJlc29sdmUodG8pLnNsaWNlKDEpO2Z1bmN0aW9uIHRyaW0oYXJyKXt2YXIgc3RhcnQ9MDtmb3IoO3N0YXJ0PGFyci5sZW5ndGg7c3RhcnQrKyl7aWYoYXJyW3N0YXJ0XSE9PVwiXCIpYnJlYWt9dmFyIGVuZD1hcnIubGVuZ3RoLTE7Zm9yKDtlbmQ+PTA7ZW5kLS0pe2lmKGFycltlbmRdIT09XCJcIilicmVha31pZihzdGFydD5lbmQpcmV0dXJuW107cmV0dXJuIGFyci5zbGljZShzdGFydCxlbmQtc3RhcnQrMSl9dmFyIGZyb21QYXJ0cz10cmltKGZyb20uc3BsaXQoXCIvXCIpKTt2YXIgdG9QYXJ0cz10cmltKHRvLnNwbGl0KFwiL1wiKSk7dmFyIGxlbmd0aD1NYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLHRvUGFydHMubGVuZ3RoKTt2YXIgc2FtZVBhcnRzTGVuZ3RoPWxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe2lmKGZyb21QYXJ0c1tpXSE9PXRvUGFydHNbaV0pe3NhbWVQYXJ0c0xlbmd0aD1pO2JyZWFrfX12YXIgb3V0cHV0UGFydHM9W107Zm9yKHZhciBpPXNhbWVQYXJ0c0xlbmd0aDtpPGZyb21QYXJ0cy5sZW5ndGg7aSsrKXtvdXRwdXRQYXJ0cy5wdXNoKFwiLi5cIil9b3V0cHV0UGFydHM9b3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7cmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oXCIvXCIpfX07dmFyIFVURjhBcnJheVRvU3RyaW5nPShoZWFwT3JBcnJheSxpZHg9MCxtYXhCeXRlc1RvUmVhZCxpZ25vcmVOdWwpPT57dmFyIGVuZFB0cj1maW5kU3RyaW5nRW5kKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCxpZ25vcmVOdWwpO3JldHVybiBVVEY4RGVjb2Rlci5kZWNvZGUoaGVhcE9yQXJyYXkuYnVmZmVyP2hlYXBPckFycmF5LnN1YmFycmF5KGlkeCxlbmRQdHIpOm5ldyBVaW50OEFycmF5KGhlYXBPckFycmF5LnNsaWNlKGlkeCxlbmRQdHIpKSl9O3ZhciBGU19zdGRpbl9nZXRDaGFyX2J1ZmZlcj1bXTt2YXIgbGVuZ3RoQnl0ZXNVVEY4PXN0cj0+e3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgYz1zdHIuY2hhckNvZGVBdChpKTtpZihjPD0xMjcpe2xlbisrfWVsc2UgaWYoYzw9MjA0Nyl7bGVuKz0yfWVsc2UgaWYoYz49NTUyOTYmJmM8PTU3MzQzKXtsZW4rPTQ7KytpfWVsc2V7bGVuKz0zfX1yZXR1cm4gbGVufTt2YXIgc3RyaW5nVG9VVEY4QXJyYXk9KHN0cixoZWFwLG91dElkeCxtYXhCeXRlc1RvV3JpdGUpPT57aWYoIShtYXhCeXRlc1RvV3JpdGU+MCkpcmV0dXJuIDA7dmFyIHN0YXJ0SWR4PW91dElkeDt2YXIgZW5kSWR4PW91dElkeCttYXhCeXRlc1RvV3JpdGUtMTtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgdT1zdHIuY29kZVBvaW50QXQoaSk7aWYodTw9MTI3KXtpZihvdXRJZHg+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT11fWVsc2UgaWYodTw9MjA0Nyl7aWYob3V0SWR4KzE+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0xOTJ8dT4+NjtoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNlIGlmKHU8PTY1NTM1KXtpZihvdXRJZHgrMj49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTIyNHx1Pj4xMjtoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNle2lmKG91dElkeCszPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjQwfHU+PjE4O2hlYXBbb3V0SWR4KytdPTEyOHx1Pj4xMiY2MztoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2MztpKyt9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9O3ZhciBpbnRBcnJheUZyb21TdHJpbmc9KHN0cmluZ3ksZG9udEFkZE51bGwsbGVuZ3RoKT0+e3ZhciBsZW49bGVuZ3RoPjA/bGVuZ3RoOmxlbmd0aEJ5dGVzVVRGOChzdHJpbmd5KSsxO3ZhciB1OGFycmF5PW5ldyBBcnJheShsZW4pO3ZhciBudW1CeXRlc1dyaXR0ZW49c3RyaW5nVG9VVEY4QXJyYXkoc3RyaW5neSx1OGFycmF5LDAsdThhcnJheS5sZW5ndGgpO2lmKGRvbnRBZGROdWxsKXU4YXJyYXkubGVuZ3RoPW51bUJ5dGVzV3JpdHRlbjtyZXR1cm4gdThhcnJheX07dmFyIEZTX3N0ZGluX2dldENoYXI9KCk9PntpZighRlNfc3RkaW5fZ2V0Q2hhcl9idWZmZXIubGVuZ3RoKXt2YXIgcmVzdWx0PW51bGw7aWYoZ2xvYmFsVGhpcy53aW5kb3c/LnByb21wdCl7cmVzdWx0PXdpbmRvdy5wcm9tcHQoXCJJbnB1dDogXCIpO2lmKHJlc3VsdCE9PW51bGwpe3Jlc3VsdCs9XCJcXG5cIn19ZWxzZXt9aWYoIXJlc3VsdCl7cmV0dXJuIG51bGx9RlNfc3RkaW5fZ2V0Q2hhcl9idWZmZXI9aW50QXJyYXlGcm9tU3RyaW5nKHJlc3VsdCx0cnVlKX1yZXR1cm4gRlNfc3RkaW5fZ2V0Q2hhcl9idWZmZXIuc2hpZnQoKX07dmFyIFRUWT17dHR5czpbXSxpbml0KCl7fSxzaHV0ZG93bigpe30scmVnaXN0ZXIoZGV2LG9wcyl7VFRZLnR0eXNbZGV2XT17aW5wdXQ6W10sb3V0cHV0OltdLG9wc307RlMucmVnaXN0ZXJEZXZpY2UoZGV2LFRUWS5zdHJlYW1fb3BzKX0sc3RyZWFtX29wczp7b3BlbihzdHJlYW0pe3ZhciB0dHk9VFRZLnR0eXNbc3RyZWFtLm5vZGUucmRldl07aWYoIXR0eSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDMpfXN0cmVhbS50dHk9dHR5O3N0cmVhbS5zZWVrYWJsZT1mYWxzZX0sY2xvc2Uoc3RyZWFtKXtzdHJlYW0udHR5Lm9wcy5mc3luYyhzdHJlYW0udHR5KX0sZnN5bmMoc3RyZWFtKXtzdHJlYW0udHR5Lm9wcy5mc3luYyhzdHJlYW0udHR5KX0scmVhZChzdHJlYW0sYnVmZmVyLG9mZnNldCxsZW5ndGgscG9zKXtpZighc3RyZWFtLnR0eXx8IXN0cmVhbS50dHkub3BzLmdldF9jaGFyKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig2MCl9dmFyIGJ5dGVzUmVhZD0wO2Zvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7dmFyIHJlc3VsdDt0cnl7cmVzdWx0PXN0cmVhbS50dHkub3BzLmdldF9jaGFyKHN0cmVhbS50dHkpfWNhdGNoKGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDI5KX1pZihyZXN1bHQ9PT11bmRlZmluZWQmJmJ5dGVzUmVhZD09PTApe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDYpfWlmKHJlc3VsdD09PW51bGx8fHJlc3VsdD09PXVuZGVmaW5lZClicmVhaztieXRlc1JlYWQrKztidWZmZXJbb2Zmc2V0K2ldPXJlc3VsdH1pZihieXRlc1JlYWQpe3N0cmVhbS5ub2RlLmF0aW1lPURhdGUubm93KCl9cmV0dXJuIGJ5dGVzUmVhZH0sd3JpdGUoc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuZ3RoLHBvcyl7aWYoIXN0cmVhbS50dHl8fCFzdHJlYW0udHR5Lm9wcy5wdXRfY2hhcil7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNjApfXRyeXtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3N0cmVhbS50dHkub3BzLnB1dF9jaGFyKHN0cmVhbS50dHksYnVmZmVyW29mZnNldCtpXSl9fWNhdGNoKGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDI5KX1pZihsZW5ndGgpe3N0cmVhbS5ub2RlLm10aW1lPXN0cmVhbS5ub2RlLmN0aW1lPURhdGUubm93KCl9cmV0dXJuIGl9fSxkZWZhdWx0X3R0eV9vcHM6e2dldF9jaGFyKHR0eSl7cmV0dXJuIEZTX3N0ZGluX2dldENoYXIoKX0scHV0X2NoYXIodHR5LHZhbCl7aWYodmFsPT09bnVsbHx8dmFsPT09MTApe291dChVVEY4QXJyYXlUb1N0cmluZyh0dHkub3V0cHV0KSk7dHR5Lm91dHB1dD1bXX1lbHNle2lmKHZhbCE9MCl0dHkub3V0cHV0LnB1c2godmFsKX19LGZzeW5jKHR0eSl7aWYodHR5Lm91dHB1dD8ubGVuZ3RoPjApe291dChVVEY4QXJyYXlUb1N0cmluZyh0dHkub3V0cHV0KSk7dHR5Lm91dHB1dD1bXX19LGlvY3RsX3RjZ2V0cyh0dHkpe3JldHVybntjX2lmbGFnOjI1ODU2LGNfb2ZsYWc6NSxjX2NmbGFnOjE5MSxjX2xmbGFnOjM1Mzg3LGNfY2M6WzMsMjgsMTI3LDIxLDQsMCwxLDAsMTcsMTksMjYsMCwxOCwxNSwyMywyMiwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXX19LGlvY3RsX3Rjc2V0cyh0dHksb3B0aW9uYWxfYWN0aW9ucyxkYXRhKXtyZXR1cm4gMH0saW9jdGxfdGlvY2d3aW5zeih0dHkpe3JldHVyblsyNCw4MF19fSxkZWZhdWx0X3R0eTFfb3BzOntwdXRfY2hhcih0dHksdmFsKXtpZih2YWw9PT1udWxsfHx2YWw9PT0xMCl7ZXJyKFVURjhBcnJheVRvU3RyaW5nKHR0eS5vdXRwdXQpKTt0dHkub3V0cHV0PVtdfWVsc2V7aWYodmFsIT0wKXR0eS5vdXRwdXQucHVzaCh2YWwpfX0sZnN5bmModHR5KXtpZih0dHkub3V0cHV0Py5sZW5ndGg+MCl7ZXJyKFVURjhBcnJheVRvU3RyaW5nKHR0eS5vdXRwdXQpKTt0dHkub3V0cHV0PVtdfX19fTt2YXIgemVyb01lbW9yeT0ocHRyLHNpemUpPT5IRUFQVTguZmlsbCgwLHB0cixwdHIrc2l6ZSk7dmFyIGFsaWduTWVtb3J5PShzaXplLGFsaWdubWVudCk9Pk1hdGguY2VpbChzaXplL2FsaWdubWVudCkqYWxpZ25tZW50O3ZhciBtbWFwQWxsb2M9c2l6ZT0+e3NpemU9YWxpZ25NZW1vcnkoc2l6ZSw2NTUzNik7dmFyIHB0cj1fZW1zY3JpcHRlbl9idWlsdGluX21lbWFsaWduKDY1NTM2LHNpemUpO2lmKHB0cil6ZXJvTWVtb3J5KHB0cixzaXplKTtyZXR1cm4gcHRyfTt2YXIgTUVNRlM9e29wc190YWJsZTpudWxsLG1vdW50KG1vdW50KXtyZXR1cm4gTUVNRlMuY3JlYXRlTm9kZShudWxsLFwiL1wiLDE2ODk1LDApfSxjcmVhdGVOb2RlKHBhcmVudCxuYW1lLG1vZGUsZGV2KXtpZihGUy5pc0Jsa2Rldihtb2RlKXx8RlMuaXNGSUZPKG1vZGUpKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig2Myl9TUVNRlMub3BzX3RhYmxlfHw9e2Rpcjp7bm9kZTp7Z2V0YXR0cjpNRU1GUy5ub2RlX29wcy5nZXRhdHRyLHNldGF0dHI6TUVNRlMubm9kZV9vcHMuc2V0YXR0cixsb29rdXA6TUVNRlMubm9kZV9vcHMubG9va3VwLG1rbm9kOk1FTUZTLm5vZGVfb3BzLm1rbm9kLHJlbmFtZTpNRU1GUy5ub2RlX29wcy5yZW5hbWUsdW5saW5rOk1FTUZTLm5vZGVfb3BzLnVubGluayxybWRpcjpNRU1GUy5ub2RlX29wcy5ybWRpcixyZWFkZGlyOk1FTUZTLm5vZGVfb3BzLnJlYWRkaXIsc3ltbGluazpNRU1GUy5ub2RlX29wcy5zeW1saW5rfSxzdHJlYW06e2xsc2VlazpNRU1GUy5zdHJlYW1fb3BzLmxsc2Vla319LGZpbGU6e25vZGU6e2dldGF0dHI6TUVNRlMubm9kZV9vcHMuZ2V0YXR0cixzZXRhdHRyOk1FTUZTLm5vZGVfb3BzLnNldGF0dHJ9LHN0cmVhbTp7bGxzZWVrOk1FTUZTLnN0cmVhbV9vcHMubGxzZWVrLHJlYWQ6TUVNRlMuc3RyZWFtX29wcy5yZWFkLHdyaXRlOk1FTUZTLnN0cmVhbV9vcHMud3JpdGUsbW1hcDpNRU1GUy5zdHJlYW1fb3BzLm1tYXAsbXN5bmM6TUVNRlMuc3RyZWFtX29wcy5tc3luY319LGxpbms6e25vZGU6e2dldGF0dHI6TUVNRlMubm9kZV9vcHMuZ2V0YXR0cixzZXRhdHRyOk1FTUZTLm5vZGVfb3BzLnNldGF0dHIscmVhZGxpbms6TUVNRlMubm9kZV9vcHMucmVhZGxpbmt9LHN0cmVhbTp7fX0sY2hyZGV2Ontub2RlOntnZXRhdHRyOk1FTUZTLm5vZGVfb3BzLmdldGF0dHIsc2V0YXR0cjpNRU1GUy5ub2RlX29wcy5zZXRhdHRyfSxzdHJlYW06RlMuY2hyZGV2X3N0cmVhbV9vcHN9fTt2YXIgbm9kZT1GUy5jcmVhdGVOb2RlKHBhcmVudCxuYW1lLG1vZGUsZGV2KTtpZihGUy5pc0Rpcihub2RlLm1vZGUpKXtub2RlLm5vZGVfb3BzPU1FTUZTLm9wc190YWJsZS5kaXIubm9kZTtub2RlLnN0cmVhbV9vcHM9TUVNRlMub3BzX3RhYmxlLmRpci5zdHJlYW07bm9kZS5jb250ZW50cz17fX1lbHNlIGlmKEZTLmlzRmlsZShub2RlLm1vZGUpKXtub2RlLm5vZGVfb3BzPU1FTUZTLm9wc190YWJsZS5maWxlLm5vZGU7bm9kZS5zdHJlYW1fb3BzPU1FTUZTLm9wc190YWJsZS5maWxlLnN0cmVhbTtub2RlLnVzZWRCeXRlcz0wO25vZGUuY29udGVudHM9bnVsbH1lbHNlIGlmKEZTLmlzTGluayhub2RlLm1vZGUpKXtub2RlLm5vZGVfb3BzPU1FTUZTLm9wc190YWJsZS5saW5rLm5vZGU7bm9kZS5zdHJlYW1fb3BzPU1FTUZTLm9wc190YWJsZS5saW5rLnN0cmVhbX1lbHNlIGlmKEZTLmlzQ2hyZGV2KG5vZGUubW9kZSkpe25vZGUubm9kZV9vcHM9TUVNRlMub3BzX3RhYmxlLmNocmRldi5ub2RlO25vZGUuc3RyZWFtX29wcz1NRU1GUy5vcHNfdGFibGUuY2hyZGV2LnN0cmVhbX1ub2RlLmF0aW1lPW5vZGUubXRpbWU9bm9kZS5jdGltZT1EYXRlLm5vdygpO2lmKHBhcmVudCl7cGFyZW50LmNvbnRlbnRzW25hbWVdPW5vZGU7cGFyZW50LmF0aW1lPXBhcmVudC5tdGltZT1wYXJlbnQuY3RpbWU9bm9kZS5hdGltZX1yZXR1cm4gbm9kZX0sZ2V0RmlsZURhdGFBc1R5cGVkQXJyYXkobm9kZSl7aWYoIW5vZGUuY29udGVudHMpcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO2lmKG5vZGUuY29udGVudHMuc3ViYXJyYXkpcmV0dXJuIG5vZGUuY29udGVudHMuc3ViYXJyYXkoMCxub2RlLnVzZWRCeXRlcyk7cmV0dXJuIG5ldyBVaW50OEFycmF5KG5vZGUuY29udGVudHMpfSxleHBhbmRGaWxlU3RvcmFnZShub2RlLG5ld0NhcGFjaXR5KXt2YXIgcHJldkNhcGFjaXR5PW5vZGUuY29udGVudHM/bm9kZS5jb250ZW50cy5sZW5ndGg6MDtpZihwcmV2Q2FwYWNpdHk+PW5ld0NhcGFjaXR5KXJldHVybjt2YXIgQ0FQQUNJVFlfRE9VQkxJTkdfTUFYPTEwMjQqMTAyNDtuZXdDYXBhY2l0eT1NYXRoLm1heChuZXdDYXBhY2l0eSxwcmV2Q2FwYWNpdHkqKHByZXZDYXBhY2l0eTxDQVBBQ0lUWV9ET1VCTElOR19NQVg/MjoxLjEyNSk+Pj4wKTtpZihwcmV2Q2FwYWNpdHkhPTApbmV3Q2FwYWNpdHk9TWF0aC5tYXgobmV3Q2FwYWNpdHksMjU2KTt2YXIgb2xkQ29udGVudHM9bm9kZS5jb250ZW50cztub2RlLmNvbnRlbnRzPW5ldyBVaW50OEFycmF5KG5ld0NhcGFjaXR5KTtpZihub2RlLnVzZWRCeXRlcz4wKW5vZGUuY29udGVudHMuc2V0KG9sZENvbnRlbnRzLnN1YmFycmF5KDAsbm9kZS51c2VkQnl0ZXMpLDApfSxyZXNpemVGaWxlU3RvcmFnZShub2RlLG5ld1NpemUpe2lmKG5vZGUudXNlZEJ5dGVzPT1uZXdTaXplKXJldHVybjtpZihuZXdTaXplPT0wKXtub2RlLmNvbnRlbnRzPW51bGw7bm9kZS51c2VkQnl0ZXM9MH1lbHNle3ZhciBvbGRDb250ZW50cz1ub2RlLmNvbnRlbnRzO25vZGUuY29udGVudHM9bmV3IFVpbnQ4QXJyYXkobmV3U2l6ZSk7aWYob2xkQ29udGVudHMpe25vZGUuY29udGVudHMuc2V0KG9sZENvbnRlbnRzLnN1YmFycmF5KDAsTWF0aC5taW4obmV3U2l6ZSxub2RlLnVzZWRCeXRlcykpKX1ub2RlLnVzZWRCeXRlcz1uZXdTaXplfX0sbm9kZV9vcHM6e2dldGF0dHIobm9kZSl7dmFyIGF0dHI9e307YXR0ci5kZXY9RlMuaXNDaHJkZXYobm9kZS5tb2RlKT9ub2RlLmlkOjE7YXR0ci5pbm89bm9kZS5pZDthdHRyLm1vZGU9bm9kZS5tb2RlO2F0dHIubmxpbms9MTthdHRyLnVpZD0wO2F0dHIuZ2lkPTA7YXR0ci5yZGV2PW5vZGUucmRldjtpZihGUy5pc0Rpcihub2RlLm1vZGUpKXthdHRyLnNpemU9NDA5Nn1lbHNlIGlmKEZTLmlzRmlsZShub2RlLm1vZGUpKXthdHRyLnNpemU9bm9kZS51c2VkQnl0ZXN9ZWxzZSBpZihGUy5pc0xpbmsobm9kZS5tb2RlKSl7YXR0ci5zaXplPW5vZGUubGluay5sZW5ndGh9ZWxzZXthdHRyLnNpemU9MH1hdHRyLmF0aW1lPW5ldyBEYXRlKG5vZGUuYXRpbWUpO2F0dHIubXRpbWU9bmV3IERhdGUobm9kZS5tdGltZSk7YXR0ci5jdGltZT1uZXcgRGF0ZShub2RlLmN0aW1lKTthdHRyLmJsa3NpemU9NDA5NjthdHRyLmJsb2Nrcz1NYXRoLmNlaWwoYXR0ci5zaXplL2F0dHIuYmxrc2l6ZSk7cmV0dXJuIGF0dHJ9LHNldGF0dHIobm9kZSxhdHRyKXtmb3IoY29uc3Qga2V5IG9mW1wibW9kZVwiLFwiYXRpbWVcIixcIm10aW1lXCIsXCJjdGltZVwiXSl7aWYoYXR0cltrZXldIT1udWxsKXtub2RlW2tleV09YXR0cltrZXldfX1pZihhdHRyLnNpemUhPT11bmRlZmluZWQpe01FTUZTLnJlc2l6ZUZpbGVTdG9yYWdlKG5vZGUsYXR0ci5zaXplKX19LGxvb2t1cChwYXJlbnQsbmFtZSl7aWYoIU1FTUZTLmRvZXNOb3RFeGlzdEVycm9yKXtNRU1GUy5kb2VzTm90RXhpc3RFcnJvcj1uZXcgRlMuRXJybm9FcnJvcig0NCk7TUVNRlMuZG9lc05vdEV4aXN0RXJyb3Iuc3RhY2s9XCI8Z2VuZXJpYyBlcnJvciwgbm8gc3RhY2s+XCJ9dGhyb3cgTUVNRlMuZG9lc05vdEV4aXN0RXJyb3J9LG1rbm9kKHBhcmVudCxuYW1lLG1vZGUsZGV2KXtyZXR1cm4gTUVNRlMuY3JlYXRlTm9kZShwYXJlbnQsbmFtZSxtb2RlLGRldil9LHJlbmFtZShvbGRfbm9kZSxuZXdfZGlyLG5ld19uYW1lKXt2YXIgbmV3X25vZGU7dHJ5e25ld19ub2RlPUZTLmxvb2t1cE5vZGUobmV3X2RpcixuZXdfbmFtZSl9Y2F0Y2goZSl7fWlmKG5ld19ub2RlKXtpZihGUy5pc0RpcihvbGRfbm9kZS5tb2RlKSl7Zm9yKHZhciBpIGluIG5ld19ub2RlLmNvbnRlbnRzKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig1NSl9fUZTLmhhc2hSZW1vdmVOb2RlKG5ld19ub2RlKX1kZWxldGUgb2xkX25vZGUucGFyZW50LmNvbnRlbnRzW29sZF9ub2RlLm5hbWVdO25ld19kaXIuY29udGVudHNbbmV3X25hbWVdPW9sZF9ub2RlO29sZF9ub2RlLm5hbWU9bmV3X25hbWU7bmV3X2Rpci5jdGltZT1uZXdfZGlyLm10aW1lPW9sZF9ub2RlLnBhcmVudC5jdGltZT1vbGRfbm9kZS5wYXJlbnQubXRpbWU9RGF0ZS5ub3coKX0sdW5saW5rKHBhcmVudCxuYW1lKXtkZWxldGUgcGFyZW50LmNvbnRlbnRzW25hbWVdO3BhcmVudC5jdGltZT1wYXJlbnQubXRpbWU9RGF0ZS5ub3coKX0scm1kaXIocGFyZW50LG5hbWUpe3ZhciBub2RlPUZTLmxvb2t1cE5vZGUocGFyZW50LG5hbWUpO2Zvcih2YXIgaSBpbiBub2RlLmNvbnRlbnRzKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig1NSl9ZGVsZXRlIHBhcmVudC5jb250ZW50c1tuYW1lXTtwYXJlbnQuY3RpbWU9cGFyZW50Lm10aW1lPURhdGUubm93KCl9LHJlYWRkaXIobm9kZSl7cmV0dXJuW1wiLlwiLFwiLi5cIiwuLi5PYmplY3Qua2V5cyhub2RlLmNvbnRlbnRzKV19LHN5bWxpbmsocGFyZW50LG5ld25hbWUsb2xkcGF0aCl7dmFyIG5vZGU9TUVNRlMuY3JlYXRlTm9kZShwYXJlbnQsbmV3bmFtZSw1MTF8NDA5NjAsMCk7bm9kZS5saW5rPW9sZHBhdGg7cmV0dXJuIG5vZGV9LHJlYWRsaW5rKG5vZGUpe2lmKCFGUy5pc0xpbmsobm9kZS5tb2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfXJldHVybiBub2RlLmxpbmt9fSxzdHJlYW1fb3BzOntyZWFkKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxwb3NpdGlvbil7dmFyIGNvbnRlbnRzPXN0cmVhbS5ub2RlLmNvbnRlbnRzO2lmKHBvc2l0aW9uPj1zdHJlYW0ubm9kZS51c2VkQnl0ZXMpcmV0dXJuIDA7dmFyIHNpemU9TWF0aC5taW4oc3RyZWFtLm5vZGUudXNlZEJ5dGVzLXBvc2l0aW9uLGxlbmd0aCk7aWYoc2l6ZT44JiZjb250ZW50cy5zdWJhcnJheSl7YnVmZmVyLnNldChjb250ZW50cy5zdWJhcnJheShwb3NpdGlvbixwb3NpdGlvbitzaXplKSxvZmZzZXQpfWVsc2V7Zm9yKHZhciBpPTA7aTxzaXplO2krKylidWZmZXJbb2Zmc2V0K2ldPWNvbnRlbnRzW3Bvc2l0aW9uK2ldfXJldHVybiBzaXplfSx3cml0ZShzdHJlYW0sYnVmZmVyLG9mZnNldCxsZW5ndGgscG9zaXRpb24sY2FuT3duKXtpZihidWZmZXIuYnVmZmVyPT09SEVBUDguYnVmZmVyKXtjYW5Pd249ZmFsc2V9aWYoIWxlbmd0aClyZXR1cm4gMDt2YXIgbm9kZT1zdHJlYW0ubm9kZTtub2RlLm10aW1lPW5vZGUuY3RpbWU9RGF0ZS5ub3coKTtpZihidWZmZXIuc3ViYXJyYXkmJighbm9kZS5jb250ZW50c3x8bm9kZS5jb250ZW50cy5zdWJhcnJheSkpe2lmKGNhbk93bil7bm9kZS5jb250ZW50cz1idWZmZXIuc3ViYXJyYXkob2Zmc2V0LG9mZnNldCtsZW5ndGgpO25vZGUudXNlZEJ5dGVzPWxlbmd0aDtyZXR1cm4gbGVuZ3RofWVsc2UgaWYobm9kZS51c2VkQnl0ZXM9PT0wJiZwb3NpdGlvbj09PTApe25vZGUuY29udGVudHM9YnVmZmVyLnNsaWNlKG9mZnNldCxvZmZzZXQrbGVuZ3RoKTtub2RlLnVzZWRCeXRlcz1sZW5ndGg7cmV0dXJuIGxlbmd0aH1lbHNlIGlmKHBvc2l0aW9uK2xlbmd0aDw9bm9kZS51c2VkQnl0ZXMpe25vZGUuY29udGVudHMuc2V0KGJ1ZmZlci5zdWJhcnJheShvZmZzZXQsb2Zmc2V0K2xlbmd0aCkscG9zaXRpb24pO3JldHVybiBsZW5ndGh9fU1FTUZTLmV4cGFuZEZpbGVTdG9yYWdlKG5vZGUscG9zaXRpb24rbGVuZ3RoKTtpZihub2RlLmNvbnRlbnRzLnN1YmFycmF5JiZidWZmZXIuc3ViYXJyYXkpe25vZGUuY29udGVudHMuc2V0KGJ1ZmZlci5zdWJhcnJheShvZmZzZXQsb2Zmc2V0K2xlbmd0aCkscG9zaXRpb24pfWVsc2V7Zm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtub2RlLmNvbnRlbnRzW3Bvc2l0aW9uK2ldPWJ1ZmZlcltvZmZzZXQraV19fW5vZGUudXNlZEJ5dGVzPU1hdGgubWF4KG5vZGUudXNlZEJ5dGVzLHBvc2l0aW9uK2xlbmd0aCk7cmV0dXJuIGxlbmd0aH0sbGxzZWVrKHN0cmVhbSxvZmZzZXQsd2hlbmNlKXt2YXIgcG9zaXRpb249b2Zmc2V0O2lmKHdoZW5jZT09PTEpe3Bvc2l0aW9uKz1zdHJlYW0ucG9zaXRpb259ZWxzZSBpZih3aGVuY2U9PT0yKXtpZihGUy5pc0ZpbGUoc3RyZWFtLm5vZGUubW9kZSkpe3Bvc2l0aW9uKz1zdHJlYW0ubm9kZS51c2VkQnl0ZXN9fWlmKHBvc2l0aW9uPDApe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDI4KX1yZXR1cm4gcG9zaXRpb259LG1tYXAoc3RyZWFtLGxlbmd0aCxwb3NpdGlvbixwcm90LGZsYWdzKXtpZighRlMuaXNGaWxlKHN0cmVhbS5ub2RlLm1vZGUpKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig0Myl9dmFyIHB0cjt2YXIgYWxsb2NhdGVkO3ZhciBjb250ZW50cz1zdHJlYW0ubm9kZS5jb250ZW50cztpZighKGZsYWdzJjIpJiZjb250ZW50cyYmY29udGVudHMuYnVmZmVyPT09SEVBUDguYnVmZmVyKXthbGxvY2F0ZWQ9ZmFsc2U7cHRyPWNvbnRlbnRzLmJ5dGVPZmZzZXR9ZWxzZXthbGxvY2F0ZWQ9dHJ1ZTtwdHI9bW1hcEFsbG9jKGxlbmd0aCk7aWYoIXB0cil7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDgpfWlmKGNvbnRlbnRzKXtpZihwb3NpdGlvbj4wfHxwb3NpdGlvbitsZW5ndGg8Y29udGVudHMubGVuZ3RoKXtpZihjb250ZW50cy5zdWJhcnJheSl7Y29udGVudHM9Y29udGVudHMuc3ViYXJyYXkocG9zaXRpb24scG9zaXRpb24rbGVuZ3RoKX1lbHNle2NvbnRlbnRzPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRlbnRzLHBvc2l0aW9uLHBvc2l0aW9uK2xlbmd0aCl9fUhFQVA4LnNldChjb250ZW50cyxwdHIpfX1yZXR1cm57cHRyLGFsbG9jYXRlZH19LG1zeW5jKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxtbWFwRmxhZ3Mpe01FTUZTLnN0cmVhbV9vcHMud3JpdGUoc3RyZWFtLGJ1ZmZlciwwLGxlbmd0aCxvZmZzZXQsZmFsc2UpO3JldHVybiAwfX19O3ZhciBGU19tb2RlU3RyaW5nVG9GbGFncz1zdHI9Pnt2YXIgZmxhZ01vZGVzPXtyOjAsXCJyK1wiOjIsdzo1MTJ8NjR8MSxcIncrXCI6NTEyfDY0fDIsYToxMDI0fDY0fDEsXCJhK1wiOjEwMjR8NjR8Mn07dmFyIGZsYWdzPWZsYWdNb2Rlc1tzdHJdO2lmKHR5cGVvZiBmbGFncz09XCJ1bmRlZmluZWRcIil7dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZpbGUgb3BlbiBtb2RlOiAke3N0cn1gKX1yZXR1cm4gZmxhZ3N9O3ZhciBGU19nZXRNb2RlPShjYW5SZWFkLGNhbldyaXRlKT0+e3ZhciBtb2RlPTA7aWYoY2FuUmVhZCltb2RlfD0yOTJ8NzM7aWYoY2FuV3JpdGUpbW9kZXw9MTQ2O3JldHVybiBtb2RlfTt2YXIgYXN5bmNMb2FkPWFzeW5jIHVybD0+e3ZhciBhcnJheUJ1ZmZlcj1hd2FpdCByZWFkQXN5bmModXJsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpfTt2YXIgRlNfY3JlYXRlRGF0YUZpbGU9KC4uLmFyZ3MpPT5GUy5jcmVhdGVEYXRhRmlsZSguLi5hcmdzKTt2YXIgZ2V0VW5pcXVlUnVuRGVwZW5kZW5jeT1pZD0+aWQ7dmFyIHJ1bkRlcGVuZGVuY2llcz0wO3ZhciBkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDt2YXIgcmVtb3ZlUnVuRGVwZW5kZW5jeT1pZD0+e3J1bkRlcGVuZGVuY2llcy0tO01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0/LihydW5EZXBlbmRlbmNpZXMpO2lmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCl9fX07dmFyIGFkZFJ1bkRlcGVuZGVuY3k9aWQ9PntydW5EZXBlbmRlbmNpZXMrKztNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdPy4ocnVuRGVwZW5kZW5jaWVzKX07dmFyIHByZWxvYWRQbHVnaW5zPVtdO3ZhciBGU19oYW5kbGVkQnlQcmVsb2FkUGx1Z2luPWFzeW5jKGJ5dGVBcnJheSxmdWxsbmFtZSk9PntpZih0eXBlb2YgQnJvd3NlciE9XCJ1bmRlZmluZWRcIilCcm93c2VyLmluaXQoKTtmb3IodmFyIHBsdWdpbiBvZiBwcmVsb2FkUGx1Z2lucyl7aWYocGx1Z2luW1wiY2FuSGFuZGxlXCJdKGZ1bGxuYW1lKSl7cmV0dXJuIHBsdWdpbltcImhhbmRsZVwiXShieXRlQXJyYXksZnVsbG5hbWUpfX1yZXR1cm4gYnl0ZUFycmF5fTt2YXIgRlNfcHJlbG9hZEZpbGU9YXN5bmMocGFyZW50LG5hbWUsdXJsLGNhblJlYWQsY2FuV3JpdGUsZG9udENyZWF0ZUZpbGUsY2FuT3duLHByZUZpbmlzaCk9Pnt2YXIgZnVsbG5hbWU9bmFtZT9QQVRIX0ZTLnJlc29sdmUoUEFUSC5qb2luMihwYXJlbnQsbmFtZSkpOnBhcmVudDt2YXIgZGVwPWdldFVuaXF1ZVJ1bkRlcGVuZGVuY3koYGNwICR7ZnVsbG5hbWV9YCk7YWRkUnVuRGVwZW5kZW5jeShkZXApO3RyeXt2YXIgYnl0ZUFycmF5PXVybDtpZih0eXBlb2YgdXJsPT1cInN0cmluZ1wiKXtieXRlQXJyYXk9YXdhaXQgYXN5bmNMb2FkKHVybCl9Ynl0ZUFycmF5PWF3YWl0IEZTX2hhbmRsZWRCeVByZWxvYWRQbHVnaW4oYnl0ZUFycmF5LGZ1bGxuYW1lKTtwcmVGaW5pc2g/LigpO2lmKCFkb250Q3JlYXRlRmlsZSl7RlNfY3JlYXRlRGF0YUZpbGUocGFyZW50LG5hbWUsYnl0ZUFycmF5LGNhblJlYWQsY2FuV3JpdGUsY2FuT3duKX19ZmluYWxseXtyZW1vdmVSdW5EZXBlbmRlbmN5KGRlcCl9fTt2YXIgRlNfY3JlYXRlUHJlbG9hZGVkRmlsZT0ocGFyZW50LG5hbWUsdXJsLGNhblJlYWQsY2FuV3JpdGUsb25sb2FkLG9uZXJyb3IsZG9udENyZWF0ZUZpbGUsY2FuT3duLHByZUZpbmlzaCk9PntGU19wcmVsb2FkRmlsZShwYXJlbnQsbmFtZSx1cmwsY2FuUmVhZCxjYW5Xcml0ZSxkb250Q3JlYXRlRmlsZSxjYW5Pd24scHJlRmluaXNoKS50aGVuKG9ubG9hZCkuY2F0Y2gob25lcnJvcil9O3ZhciBGUz17cm9vdDpudWxsLG1vdW50czpbXSxkZXZpY2VzOnt9LHN0cmVhbXM6W10sbmV4dElub2RlOjEsbmFtZVRhYmxlOm51bGwsY3VycmVudFBhdGg6XCIvXCIsaW5pdGlhbGl6ZWQ6ZmFsc2UsaWdub3JlUGVybWlzc2lvbnM6dHJ1ZSxmaWxlc3lzdGVtczpudWxsLHN5bmNGU1JlcXVlc3RzOjAsRXJybm9FcnJvcjpjbGFzc3tuYW1lPVwiRXJybm9FcnJvclwiO2NvbnN0cnVjdG9yKGVycm5vKXt0aGlzLmVycm5vPWVycm5vfX0sRlNTdHJlYW06Y2xhc3N7c2hhcmVkPXt9O2dldCBvYmplY3QoKXtyZXR1cm4gdGhpcy5ub2RlfXNldCBvYmplY3QodmFsKXt0aGlzLm5vZGU9dmFsfWdldCBpc1JlYWQoKXtyZXR1cm4odGhpcy5mbGFncyYyMDk3MTU1KSE9PTF9Z2V0IGlzV3JpdGUoKXtyZXR1cm4odGhpcy5mbGFncyYyMDk3MTU1KSE9PTB9Z2V0IGlzQXBwZW5kKCl7cmV0dXJuIHRoaXMuZmxhZ3MmMTAyNH1nZXQgZmxhZ3MoKXtyZXR1cm4gdGhpcy5zaGFyZWQuZmxhZ3N9c2V0IGZsYWdzKHZhbCl7dGhpcy5zaGFyZWQuZmxhZ3M9dmFsfWdldCBwb3NpdGlvbigpe3JldHVybiB0aGlzLnNoYXJlZC5wb3NpdGlvbn1zZXQgcG9zaXRpb24odmFsKXt0aGlzLnNoYXJlZC5wb3NpdGlvbj12YWx9fSxGU05vZGU6Y2xhc3N7bm9kZV9vcHM9e307c3RyZWFtX29wcz17fTtyZWFkTW9kZT0yOTJ8NzM7d3JpdGVNb2RlPTE0Njttb3VudGVkPW51bGw7Y29uc3RydWN0b3IocGFyZW50LG5hbWUsbW9kZSxyZGV2KXtpZighcGFyZW50KXtwYXJlbnQ9dGhpc310aGlzLnBhcmVudD1wYXJlbnQ7dGhpcy5tb3VudD1wYXJlbnQubW91bnQ7dGhpcy5pZD1GUy5uZXh0SW5vZGUrKzt0aGlzLm5hbWU9bmFtZTt0aGlzLm1vZGU9bW9kZTt0aGlzLnJkZXY9cmRldjt0aGlzLmF0aW1lPXRoaXMubXRpbWU9dGhpcy5jdGltZT1EYXRlLm5vdygpfWdldCByZWFkKCl7cmV0dXJuKHRoaXMubW9kZSZ0aGlzLnJlYWRNb2RlKT09PXRoaXMucmVhZE1vZGV9c2V0IHJlYWQodmFsKXt2YWw/dGhpcy5tb2RlfD10aGlzLnJlYWRNb2RlOnRoaXMubW9kZSY9fnRoaXMucmVhZE1vZGV9Z2V0IHdyaXRlKCl7cmV0dXJuKHRoaXMubW9kZSZ0aGlzLndyaXRlTW9kZSk9PT10aGlzLndyaXRlTW9kZX1zZXQgd3JpdGUodmFsKXt2YWw/dGhpcy5tb2RlfD10aGlzLndyaXRlTW9kZTp0aGlzLm1vZGUmPX50aGlzLndyaXRlTW9kZX1nZXQgaXNGb2xkZXIoKXtyZXR1cm4gRlMuaXNEaXIodGhpcy5tb2RlKX1nZXQgaXNEZXZpY2UoKXtyZXR1cm4gRlMuaXNDaHJkZXYodGhpcy5tb2RlKX19LGxvb2t1cFBhdGgocGF0aCxvcHRzPXt9KXtpZighcGF0aCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDQpfW9wdHMuZm9sbG93X21vdW50Pz89dHJ1ZTtpZighUEFUSC5pc0FicyhwYXRoKSl7cGF0aD1GUy5jd2QoKStcIi9cIitwYXRofWxpbmtsb29wOmZvcih2YXIgbmxpbmtzPTA7bmxpbmtzPDQwO25saW5rcysrKXt2YXIgcGFydHM9cGF0aC5zcGxpdChcIi9cIikuZmlsdGVyKHA9PiEhcCk7dmFyIGN1cnJlbnQ9RlMucm9vdDt2YXIgY3VycmVudF9wYXRoPVwiL1wiO2Zvcih2YXIgaT0wO2k8cGFydHMubGVuZ3RoO2krKyl7dmFyIGlzbGFzdD1pPT09cGFydHMubGVuZ3RoLTE7aWYoaXNsYXN0JiZvcHRzLnBhcmVudCl7YnJlYWt9aWYocGFydHNbaV09PT1cIi5cIil7Y29udGludWV9aWYocGFydHNbaV09PT1cIi4uXCIpe2N1cnJlbnRfcGF0aD1QQVRILmRpcm5hbWUoY3VycmVudF9wYXRoKTtpZihGUy5pc1Jvb3QoY3VycmVudCkpe3BhdGg9Y3VycmVudF9wYXRoK1wiL1wiK3BhcnRzLnNsaWNlKGkrMSkuam9pbihcIi9cIik7bmxpbmtzLS07Y29udGludWUgbGlua2xvb3B9ZWxzZXtjdXJyZW50PWN1cnJlbnQucGFyZW50fWNvbnRpbnVlfWN1cnJlbnRfcGF0aD1QQVRILmpvaW4yKGN1cnJlbnRfcGF0aCxwYXJ0c1tpXSk7dHJ5e2N1cnJlbnQ9RlMubG9va3VwTm9kZShjdXJyZW50LHBhcnRzW2ldKX1jYXRjaChlKXtpZihlPy5lcnJubz09PTQ0JiZpc2xhc3QmJm9wdHMubm9lbnRfb2theSl7cmV0dXJue3BhdGg6Y3VycmVudF9wYXRofX10aHJvdyBlfWlmKEZTLmlzTW91bnRwb2ludChjdXJyZW50KSYmKCFpc2xhc3R8fG9wdHMuZm9sbG93X21vdW50KSl7Y3VycmVudD1jdXJyZW50Lm1vdW50ZWQucm9vdH1pZihGUy5pc0xpbmsoY3VycmVudC5tb2RlKSYmKCFpc2xhc3R8fG9wdHMuZm9sbG93KSl7aWYoIWN1cnJlbnQubm9kZV9vcHMucmVhZGxpbmspe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDUyKX12YXIgbGluaz1jdXJyZW50Lm5vZGVfb3BzLnJlYWRsaW5rKGN1cnJlbnQpO2lmKCFQQVRILmlzQWJzKGxpbmspKXtsaW5rPVBBVEguZGlybmFtZShjdXJyZW50X3BhdGgpK1wiL1wiK2xpbmt9cGF0aD1saW5rK1wiL1wiK3BhcnRzLnNsaWNlKGkrMSkuam9pbihcIi9cIik7Y29udGludWUgbGlua2xvb3B9fXJldHVybntwYXRoOmN1cnJlbnRfcGF0aCxub2RlOmN1cnJlbnR9fXRocm93IG5ldyBGUy5FcnJub0Vycm9yKDMyKX0sZ2V0UGF0aChub2RlKXt2YXIgcGF0aDt3aGlsZSh0cnVlKXtpZihGUy5pc1Jvb3Qobm9kZSkpe3ZhciBtb3VudD1ub2RlLm1vdW50Lm1vdW50cG9pbnQ7aWYoIXBhdGgpcmV0dXJuIG1vdW50O3JldHVybiBtb3VudFttb3VudC5sZW5ndGgtMV0hPT1cIi9cIj9gJHttb3VudH0vJHtwYXRofWA6bW91bnQrcGF0aH1wYXRoPXBhdGg/YCR7bm9kZS5uYW1lfS8ke3BhdGh9YDpub2RlLm5hbWU7bm9kZT1ub2RlLnBhcmVudH19LGhhc2hOYW1lKHBhcmVudGlkLG5hbWUpe3ZhciBoYXNoPTA7Zm9yKHZhciBpPTA7aTxuYW1lLmxlbmd0aDtpKyspe2hhc2g9KGhhc2g8PDUpLWhhc2grbmFtZS5jaGFyQ29kZUF0KGkpfDB9cmV0dXJuKHBhcmVudGlkK2hhc2g+Pj4wKSVGUy5uYW1lVGFibGUubGVuZ3RofSxoYXNoQWRkTm9kZShub2RlKXt2YXIgaGFzaD1GUy5oYXNoTmFtZShub2RlLnBhcmVudC5pZCxub2RlLm5hbWUpO25vZGUubmFtZV9uZXh0PUZTLm5hbWVUYWJsZVtoYXNoXTtGUy5uYW1lVGFibGVbaGFzaF09bm9kZX0saGFzaFJlbW92ZU5vZGUobm9kZSl7dmFyIGhhc2g9RlMuaGFzaE5hbWUobm9kZS5wYXJlbnQuaWQsbm9kZS5uYW1lKTtpZihGUy5uYW1lVGFibGVbaGFzaF09PT1ub2RlKXtGUy5uYW1lVGFibGVbaGFzaF09bm9kZS5uYW1lX25leHR9ZWxzZXt2YXIgY3VycmVudD1GUy5uYW1lVGFibGVbaGFzaF07d2hpbGUoY3VycmVudCl7aWYoY3VycmVudC5uYW1lX25leHQ9PT1ub2RlKXtjdXJyZW50Lm5hbWVfbmV4dD1ub2RlLm5hbWVfbmV4dDticmVha31jdXJyZW50PWN1cnJlbnQubmFtZV9uZXh0fX19LGxvb2t1cE5vZGUocGFyZW50LG5hbWUpe3ZhciBlcnJDb2RlPUZTLm1heUxvb2t1cChwYXJlbnQpO2lmKGVyckNvZGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKGVyckNvZGUpfXZhciBoYXNoPUZTLmhhc2hOYW1lKHBhcmVudC5pZCxuYW1lKTtmb3IodmFyIG5vZGU9RlMubmFtZVRhYmxlW2hhc2hdO25vZGU7bm9kZT1ub2RlLm5hbWVfbmV4dCl7dmFyIG5vZGVOYW1lPW5vZGUubmFtZTtpZihub2RlLnBhcmVudC5pZD09PXBhcmVudC5pZCYmbm9kZU5hbWU9PT1uYW1lKXtyZXR1cm4gbm9kZX19cmV0dXJuIEZTLmxvb2t1cChwYXJlbnQsbmFtZSl9LGNyZWF0ZU5vZGUocGFyZW50LG5hbWUsbW9kZSxyZGV2KXt2YXIgbm9kZT1uZXcgRlMuRlNOb2RlKHBhcmVudCxuYW1lLG1vZGUscmRldik7RlMuaGFzaEFkZE5vZGUobm9kZSk7cmV0dXJuIG5vZGV9LGRlc3Ryb3lOb2RlKG5vZGUpe0ZTLmhhc2hSZW1vdmVOb2RlKG5vZGUpfSxpc1Jvb3Qobm9kZSl7cmV0dXJuIG5vZGU9PT1ub2RlLnBhcmVudH0saXNNb3VudHBvaW50KG5vZGUpe3JldHVybiEhbm9kZS5tb3VudGVkfSxpc0ZpbGUobW9kZSl7cmV0dXJuKG1vZGUmNjE0NDApPT09MzI3Njh9LGlzRGlyKG1vZGUpe3JldHVybihtb2RlJjYxNDQwKT09PTE2Mzg0fSxpc0xpbmsobW9kZSl7cmV0dXJuKG1vZGUmNjE0NDApPT09NDA5NjB9LGlzQ2hyZGV2KG1vZGUpe3JldHVybihtb2RlJjYxNDQwKT09PTgxOTJ9LGlzQmxrZGV2KG1vZGUpe3JldHVybihtb2RlJjYxNDQwKT09PTI0NTc2fSxpc0ZJRk8obW9kZSl7cmV0dXJuKG1vZGUmNjE0NDApPT09NDA5Nn0saXNTb2NrZXQobW9kZSl7cmV0dXJuKG1vZGUmNDkxNTIpPT09NDkxNTJ9LGZsYWdzVG9QZXJtaXNzaW9uU3RyaW5nKGZsYWcpe3ZhciBwZXJtcz1bXCJyXCIsXCJ3XCIsXCJyd1wiXVtmbGFnJjNdO2lmKGZsYWcmNTEyKXtwZXJtcys9XCJ3XCJ9cmV0dXJuIHBlcm1zfSxub2RlUGVybWlzc2lvbnMobm9kZSxwZXJtcyl7aWYoRlMuaWdub3JlUGVybWlzc2lvbnMpe3JldHVybiAwfWlmKHBlcm1zLmluY2x1ZGVzKFwiclwiKSYmIShub2RlLm1vZGUmMjkyKSl7cmV0dXJuIDJ9aWYocGVybXMuaW5jbHVkZXMoXCJ3XCIpJiYhKG5vZGUubW9kZSYxNDYpKXtyZXR1cm4gMn1pZihwZXJtcy5pbmNsdWRlcyhcInhcIikmJiEobm9kZS5tb2RlJjczKSl7cmV0dXJuIDJ9cmV0dXJuIDB9LG1heUxvb2t1cChkaXIpe2lmKCFGUy5pc0RpcihkaXIubW9kZSkpcmV0dXJuIDU0O3ZhciBlcnJDb2RlPUZTLm5vZGVQZXJtaXNzaW9ucyhkaXIsXCJ4XCIpO2lmKGVyckNvZGUpcmV0dXJuIGVyckNvZGU7aWYoIWRpci5ub2RlX29wcy5sb29rdXApcmV0dXJuIDI7cmV0dXJuIDB9LG1heUNyZWF0ZShkaXIsbmFtZSl7aWYoIUZTLmlzRGlyKGRpci5tb2RlKSl7cmV0dXJuIDU0fXRyeXt2YXIgbm9kZT1GUy5sb29rdXBOb2RlKGRpcixuYW1lKTtyZXR1cm4gMjB9Y2F0Y2goZSl7fXJldHVybiBGUy5ub2RlUGVybWlzc2lvbnMoZGlyLFwid3hcIil9LG1heURlbGV0ZShkaXIsbmFtZSxpc2Rpcil7dmFyIG5vZGU7dHJ5e25vZGU9RlMubG9va3VwTm9kZShkaXIsbmFtZSl9Y2F0Y2goZSl7cmV0dXJuIGUuZXJybm99dmFyIGVyckNvZGU9RlMubm9kZVBlcm1pc3Npb25zKGRpcixcInd4XCIpO2lmKGVyckNvZGUpe3JldHVybiBlcnJDb2RlfWlmKGlzZGlyKXtpZighRlMuaXNEaXIobm9kZS5tb2RlKSl7cmV0dXJuIDU0fWlmKEZTLmlzUm9vdChub2RlKXx8RlMuZ2V0UGF0aChub2RlKT09PUZTLmN3ZCgpKXtyZXR1cm4gMTB9fWVsc2UgaWYoRlMuaXNEaXIobm9kZS5tb2RlKSl7cmV0dXJuIDMxfXJldHVybiAwfSxtYXlPcGVuKG5vZGUsZmxhZ3Mpe2lmKCFub2RlKXtyZXR1cm4gNDR9aWYoRlMuaXNMaW5rKG5vZGUubW9kZSkpe3JldHVybiAzMn12YXIgbW9kZT1GUy5mbGFnc1RvUGVybWlzc2lvblN0cmluZyhmbGFncyk7aWYoRlMuaXNEaXIobm9kZS5tb2RlKSl7aWYobW9kZSE9PVwiclwifHxmbGFncyYoNTEyfDY0KSl7cmV0dXJuIDMxfX1yZXR1cm4gRlMubm9kZVBlcm1pc3Npb25zKG5vZGUsbW9kZSl9LGNoZWNrT3BFeGlzdHMob3AsZXJyKXtpZighb3Ape3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKGVycil9cmV0dXJuIG9wfSxNQVhfT1BFTl9GRFM6NDA5NixuZXh0ZmQoKXtmb3IodmFyIGZkPTA7ZmQ8PUZTLk1BWF9PUEVOX0ZEUztmZCsrKXtpZighRlMuc3RyZWFtc1tmZF0pe3JldHVybiBmZH19dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMzMpfSxnZXRTdHJlYW1DaGVja2VkKGZkKXt2YXIgc3RyZWFtPUZTLmdldFN0cmVhbShmZCk7aWYoIXN0cmVhbSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoOCl9cmV0dXJuIHN0cmVhbX0sZ2V0U3RyZWFtOmZkPT5GUy5zdHJlYW1zW2ZkXSxjcmVhdGVTdHJlYW0oc3RyZWFtLGZkPS0xKXtzdHJlYW09T2JqZWN0LmFzc2lnbihuZXcgRlMuRlNTdHJlYW0sc3RyZWFtKTtpZihmZD09LTEpe2ZkPUZTLm5leHRmZCgpfXN0cmVhbS5mZD1mZDtGUy5zdHJlYW1zW2ZkXT1zdHJlYW07cmV0dXJuIHN0cmVhbX0sY2xvc2VTdHJlYW0oZmQpe0ZTLnN0cmVhbXNbZmRdPW51bGx9LGR1cFN0cmVhbShvcmlnU3RyZWFtLGZkPS0xKXt2YXIgc3RyZWFtPUZTLmNyZWF0ZVN0cmVhbShvcmlnU3RyZWFtLGZkKTtzdHJlYW0uc3RyZWFtX29wcz8uZHVwPy4oc3RyZWFtKTtyZXR1cm4gc3RyZWFtfSxkb1NldEF0dHIoc3RyZWFtLG5vZGUsYXR0cil7dmFyIHNldGF0dHI9c3RyZWFtPy5zdHJlYW1fb3BzLnNldGF0dHI7dmFyIGFyZz1zZXRhdHRyP3N0cmVhbTpub2RlO3NldGF0dHI/Pz1ub2RlLm5vZGVfb3BzLnNldGF0dHI7RlMuY2hlY2tPcEV4aXN0cyhzZXRhdHRyLDYzKTtzZXRhdHRyKGFyZyxhdHRyKX0sY2hyZGV2X3N0cmVhbV9vcHM6e29wZW4oc3RyZWFtKXt2YXIgZGV2aWNlPUZTLmdldERldmljZShzdHJlYW0ubm9kZS5yZGV2KTtzdHJlYW0uc3RyZWFtX29wcz1kZXZpY2Uuc3RyZWFtX29wcztzdHJlYW0uc3RyZWFtX29wcy5vcGVuPy4oc3RyZWFtKX0sbGxzZWVrKCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNzApfX0sbWFqb3I6ZGV2PT5kZXY+PjgsbWlub3I6ZGV2PT5kZXYmMjU1LG1ha2VkZXY6KG1hLG1pKT0+bWE8PDh8bWkscmVnaXN0ZXJEZXZpY2UoZGV2LG9wcyl7RlMuZGV2aWNlc1tkZXZdPXtzdHJlYW1fb3BzOm9wc319LGdldERldmljZTpkZXY9PkZTLmRldmljZXNbZGV2XSxnZXRNb3VudHMobW91bnQpe3ZhciBtb3VudHM9W107dmFyIGNoZWNrPVttb3VudF07d2hpbGUoY2hlY2subGVuZ3RoKXt2YXIgbT1jaGVjay5wb3AoKTttb3VudHMucHVzaChtKTtjaGVjay5wdXNoKC4uLm0ubW91bnRzKX1yZXR1cm4gbW91bnRzfSxzeW5jZnMocG9wdWxhdGUsY2FsbGJhY2spe2lmKHR5cGVvZiBwb3B1bGF0ZT09XCJmdW5jdGlvblwiKXtjYWxsYmFjaz1wb3B1bGF0ZTtwb3B1bGF0ZT1mYWxzZX1GUy5zeW5jRlNSZXF1ZXN0cysrO2lmKEZTLnN5bmNGU1JlcXVlc3RzPjEpe2Vycihgd2FybmluZzogJHtGUy5zeW5jRlNSZXF1ZXN0c30gRlMuc3luY2ZzIG9wZXJhdGlvbnMgaW4gZmxpZ2h0IGF0IG9uY2UsIHByb2JhYmx5IGp1c3QgZG9pbmcgZXh0cmEgd29ya2ApfXZhciBtb3VudHM9RlMuZ2V0TW91bnRzKEZTLnJvb3QubW91bnQpO3ZhciBjb21wbGV0ZWQ9MDtmdW5jdGlvbiBkb0NhbGxiYWNrKGVyckNvZGUpe0ZTLnN5bmNGU1JlcXVlc3RzLS07cmV0dXJuIGNhbGxiYWNrKGVyckNvZGUpfWZ1bmN0aW9uIGRvbmUoZXJyQ29kZSl7aWYoZXJyQ29kZSl7aWYoIWRvbmUuZXJyb3JlZCl7ZG9uZS5lcnJvcmVkPXRydWU7cmV0dXJuIGRvQ2FsbGJhY2soZXJyQ29kZSl9cmV0dXJufWlmKCsrY29tcGxldGVkPj1tb3VudHMubGVuZ3RoKXtkb0NhbGxiYWNrKG51bGwpfX1mb3IodmFyIG1vdW50IG9mIG1vdW50cyl7aWYobW91bnQudHlwZS5zeW5jZnMpe21vdW50LnR5cGUuc3luY2ZzKG1vdW50LHBvcHVsYXRlLGRvbmUpfWVsc2V7ZG9uZShudWxsKX19fSxtb3VudCh0eXBlLG9wdHMsbW91bnRwb2ludCl7dmFyIHJvb3Q9bW91bnRwb2ludD09PVwiL1wiO3ZhciBwc2V1ZG89IW1vdW50cG9pbnQ7dmFyIG5vZGU7aWYocm9vdCYmRlMucm9vdCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMTApfWVsc2UgaWYoIXJvb3QmJiFwc2V1ZG8pe3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChtb3VudHBvaW50LHtmb2xsb3dfbW91bnQ6ZmFsc2V9KTttb3VudHBvaW50PWxvb2t1cC5wYXRoO25vZGU9bG9va3VwLm5vZGU7aWYoRlMuaXNNb3VudHBvaW50KG5vZGUpKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcigxMCl9aWYoIUZTLmlzRGlyKG5vZGUubW9kZSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDU0KX19dmFyIG1vdW50PXt0eXBlLG9wdHMsbW91bnRwb2ludCxtb3VudHM6W119O3ZhciBtb3VudFJvb3Q9dHlwZS5tb3VudChtb3VudCk7bW91bnRSb290Lm1vdW50PW1vdW50O21vdW50LnJvb3Q9bW91bnRSb290O2lmKHJvb3Qpe0ZTLnJvb3Q9bW91bnRSb290fWVsc2UgaWYobm9kZSl7bm9kZS5tb3VudGVkPW1vdW50O2lmKG5vZGUubW91bnQpe25vZGUubW91bnQubW91bnRzLnB1c2gobW91bnQpfX1yZXR1cm4gbW91bnRSb290fSx1bm1vdW50KG1vdW50cG9pbnQpe3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChtb3VudHBvaW50LHtmb2xsb3dfbW91bnQ6ZmFsc2V9KTtpZighRlMuaXNNb3VudHBvaW50KGxvb2t1cC5ub2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfXZhciBub2RlPWxvb2t1cC5ub2RlO3ZhciBtb3VudD1ub2RlLm1vdW50ZWQ7dmFyIG1vdW50cz1GUy5nZXRNb3VudHMobW91bnQpO2Zvcih2YXJbaGFzaCxjdXJyZW50XW9mIE9iamVjdC5lbnRyaWVzKEZTLm5hbWVUYWJsZSkpe3doaWxlKGN1cnJlbnQpe3ZhciBuZXh0PWN1cnJlbnQubmFtZV9uZXh0O2lmKG1vdW50cy5pbmNsdWRlcyhjdXJyZW50Lm1vdW50KSl7RlMuZGVzdHJveU5vZGUoY3VycmVudCl9Y3VycmVudD1uZXh0fX1ub2RlLm1vdW50ZWQ9bnVsbDt2YXIgaWR4PW5vZGUubW91bnQubW91bnRzLmluZGV4T2YobW91bnQpO25vZGUubW91bnQubW91bnRzLnNwbGljZShpZHgsMSl9LGxvb2t1cChwYXJlbnQsbmFtZSl7cmV0dXJuIHBhcmVudC5ub2RlX29wcy5sb29rdXAocGFyZW50LG5hbWUpfSxta25vZChwYXRoLG1vZGUsZGV2KXt2YXIgbG9va3VwPUZTLmxvb2t1cFBhdGgocGF0aCx7cGFyZW50OnRydWV9KTt2YXIgcGFyZW50PWxvb2t1cC5ub2RlO3ZhciBuYW1lPVBBVEguYmFzZW5hbWUocGF0aCk7aWYoIW5hbWUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDI4KX1pZihuYW1lPT09XCIuXCJ8fG5hbWU9PT1cIi4uXCIpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDIwKX12YXIgZXJyQ29kZT1GUy5tYXlDcmVhdGUocGFyZW50LG5hbWUpO2lmKGVyckNvZGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKGVyckNvZGUpfWlmKCFwYXJlbnQubm9kZV9vcHMubWtub2Qpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDYzKX1yZXR1cm4gcGFyZW50Lm5vZGVfb3BzLm1rbm9kKHBhcmVudCxuYW1lLG1vZGUsZGV2KX0sc3RhdGZzKHBhdGgpe3JldHVybiBGUy5zdGF0ZnNOb2RlKEZTLmxvb2t1cFBhdGgocGF0aCx7Zm9sbG93OnRydWV9KS5ub2RlKX0sc3RhdGZzU3RyZWFtKHN0cmVhbSl7cmV0dXJuIEZTLnN0YXRmc05vZGUoc3RyZWFtLm5vZGUpfSxzdGF0ZnNOb2RlKG5vZGUpe3ZhciBydG49e2JzaXplOjQwOTYsZnJzaXplOjQwOTYsYmxvY2tzOjFlNixiZnJlZTo1ZTUsYmF2YWlsOjVlNSxmaWxlczpGUy5uZXh0SW5vZGUsZmZyZWU6RlMubmV4dElub2RlLTEsZnNpZDo0MixmbGFnczoyLG5hbWVsZW46MjU1fTtpZihub2RlLm5vZGVfb3BzLnN0YXRmcyl7T2JqZWN0LmFzc2lnbihydG4sbm9kZS5ub2RlX29wcy5zdGF0ZnMobm9kZS5tb3VudC5vcHRzLnJvb3QpKX1yZXR1cm4gcnRufSxjcmVhdGUocGF0aCxtb2RlPTQzOCl7bW9kZSY9NDA5NTttb2RlfD0zMjc2ODtyZXR1cm4gRlMubWtub2QocGF0aCxtb2RlLDApfSxta2RpcihwYXRoLG1vZGU9NTExKXttb2RlJj01MTF8NTEyO21vZGV8PTE2Mzg0O3JldHVybiBGUy5ta25vZChwYXRoLG1vZGUsMCl9LG1rZGlyVHJlZShwYXRoLG1vZGUpe3ZhciBkaXJzPXBhdGguc3BsaXQoXCIvXCIpO3ZhciBkPVwiXCI7Zm9yKHZhciBkaXIgb2YgZGlycyl7aWYoIWRpciljb250aW51ZTtpZihkfHxQQVRILmlzQWJzKHBhdGgpKWQrPVwiL1wiO2QrPWRpcjt0cnl7RlMubWtkaXIoZCxtb2RlKX1jYXRjaChlKXtpZihlLmVycm5vIT0yMCl0aHJvdyBlfX19LG1rZGV2KHBhdGgsbW9kZSxkZXYpe2lmKHR5cGVvZiBkZXY9PVwidW5kZWZpbmVkXCIpe2Rldj1tb2RlO21vZGU9NDM4fW1vZGV8PTgxOTI7cmV0dXJuIEZTLm1rbm9kKHBhdGgsbW9kZSxkZXYpfSxzeW1saW5rKG9sZHBhdGgsbmV3cGF0aCl7aWYoIVBBVEhfRlMucmVzb2x2ZShvbGRwYXRoKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDQpfXZhciBsb29rdXA9RlMubG9va3VwUGF0aChuZXdwYXRoLHtwYXJlbnQ6dHJ1ZX0pO3ZhciBwYXJlbnQ9bG9va3VwLm5vZGU7aWYoIXBhcmVudCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDQpfXZhciBuZXduYW1lPVBBVEguYmFzZW5hbWUobmV3cGF0aCk7dmFyIGVyckNvZGU9RlMubWF5Q3JlYXRlKHBhcmVudCxuZXduYW1lKTtpZihlcnJDb2RlKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcihlcnJDb2RlKX1pZighcGFyZW50Lm5vZGVfb3BzLnN5bWxpbmspe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDYzKX1yZXR1cm4gcGFyZW50Lm5vZGVfb3BzLnN5bWxpbmsocGFyZW50LG5ld25hbWUsb2xkcGF0aCl9LHJlbmFtZShvbGRfcGF0aCxuZXdfcGF0aCl7dmFyIG9sZF9kaXJuYW1lPVBBVEguZGlybmFtZShvbGRfcGF0aCk7dmFyIG5ld19kaXJuYW1lPVBBVEguZGlybmFtZShuZXdfcGF0aCk7dmFyIG9sZF9uYW1lPVBBVEguYmFzZW5hbWUob2xkX3BhdGgpO3ZhciBuZXdfbmFtZT1QQVRILmJhc2VuYW1lKG5ld19wYXRoKTt2YXIgbG9va3VwLG9sZF9kaXIsbmV3X2Rpcjtsb29rdXA9RlMubG9va3VwUGF0aChvbGRfcGF0aCx7cGFyZW50OnRydWV9KTtvbGRfZGlyPWxvb2t1cC5ub2RlO2xvb2t1cD1GUy5sb29rdXBQYXRoKG5ld19wYXRoLHtwYXJlbnQ6dHJ1ZX0pO25ld19kaXI9bG9va3VwLm5vZGU7aWYoIW9sZF9kaXJ8fCFuZXdfZGlyKXRocm93IG5ldyBGUy5FcnJub0Vycm9yKDQ0KTtpZihvbGRfZGlyLm1vdW50IT09bmV3X2Rpci5tb3VudCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNzUpfXZhciBvbGRfbm9kZT1GUy5sb29rdXBOb2RlKG9sZF9kaXIsb2xkX25hbWUpO3ZhciByZWxhdGl2ZT1QQVRIX0ZTLnJlbGF0aXZlKG9sZF9wYXRoLG5ld19kaXJuYW1lKTtpZihyZWxhdGl2ZS5jaGFyQXQoMCkhPT1cIi5cIil7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfXJlbGF0aXZlPVBBVEhfRlMucmVsYXRpdmUobmV3X3BhdGgsb2xkX2Rpcm5hbWUpO2lmKHJlbGF0aXZlLmNoYXJBdCgwKSE9PVwiLlwiKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig1NSl9dmFyIG5ld19ub2RlO3RyeXtuZXdfbm9kZT1GUy5sb29rdXBOb2RlKG5ld19kaXIsbmV3X25hbWUpfWNhdGNoKGUpe31pZihvbGRfbm9kZT09PW5ld19ub2RlKXtyZXR1cm59dmFyIGlzZGlyPUZTLmlzRGlyKG9sZF9ub2RlLm1vZGUpO3ZhciBlcnJDb2RlPUZTLm1heURlbGV0ZShvbGRfZGlyLG9sZF9uYW1lLGlzZGlyKTtpZihlcnJDb2RlKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcihlcnJDb2RlKX1lcnJDb2RlPW5ld19ub2RlP0ZTLm1heURlbGV0ZShuZXdfZGlyLG5ld19uYW1lLGlzZGlyKTpGUy5tYXlDcmVhdGUobmV3X2RpcixuZXdfbmFtZSk7aWYoZXJyQ29kZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoZXJyQ29kZSl9aWYoIW9sZF9kaXIubm9kZV9vcHMucmVuYW1lKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig2Myl9aWYoRlMuaXNNb3VudHBvaW50KG9sZF9ub2RlKXx8bmV3X25vZGUmJkZTLmlzTW91bnRwb2ludChuZXdfbm9kZSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDEwKX1pZihuZXdfZGlyIT09b2xkX2Rpcil7ZXJyQ29kZT1GUy5ub2RlUGVybWlzc2lvbnMob2xkX2RpcixcIndcIik7aWYoZXJyQ29kZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoZXJyQ29kZSl9fUZTLmhhc2hSZW1vdmVOb2RlKG9sZF9ub2RlKTt0cnl7b2xkX2Rpci5ub2RlX29wcy5yZW5hbWUob2xkX25vZGUsbmV3X2RpcixuZXdfbmFtZSk7b2xkX25vZGUucGFyZW50PW5ld19kaXJ9Y2F0Y2goZSl7dGhyb3cgZX1maW5hbGx5e0ZTLmhhc2hBZGROb2RlKG9sZF9ub2RlKX19LHJtZGlyKHBhdGgpe3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChwYXRoLHtwYXJlbnQ6dHJ1ZX0pO3ZhciBwYXJlbnQ9bG9va3VwLm5vZGU7dmFyIG5hbWU9UEFUSC5iYXNlbmFtZShwYXRoKTt2YXIgbm9kZT1GUy5sb29rdXBOb2RlKHBhcmVudCxuYW1lKTt2YXIgZXJyQ29kZT1GUy5tYXlEZWxldGUocGFyZW50LG5hbWUsdHJ1ZSk7aWYoZXJyQ29kZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoZXJyQ29kZSl9aWYoIXBhcmVudC5ub2RlX29wcy5ybWRpcil7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNjMpfWlmKEZTLmlzTW91bnRwb2ludChub2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMTApfXBhcmVudC5ub2RlX29wcy5ybWRpcihwYXJlbnQsbmFtZSk7RlMuZGVzdHJveU5vZGUobm9kZSl9LHJlYWRkaXIocGF0aCl7dmFyIGxvb2t1cD1GUy5sb29rdXBQYXRoKHBhdGgse2ZvbGxvdzp0cnVlfSk7dmFyIG5vZGU9bG9va3VwLm5vZGU7dmFyIHJlYWRkaXI9RlMuY2hlY2tPcEV4aXN0cyhub2RlLm5vZGVfb3BzLnJlYWRkaXIsNTQpO3JldHVybiByZWFkZGlyKG5vZGUpfSx1bmxpbmsocGF0aCl7dmFyIGxvb2t1cD1GUy5sb29rdXBQYXRoKHBhdGgse3BhcmVudDp0cnVlfSk7dmFyIHBhcmVudD1sb29rdXAubm9kZTtpZighcGFyZW50KXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig0NCl9dmFyIG5hbWU9UEFUSC5iYXNlbmFtZShwYXRoKTt2YXIgbm9kZT1GUy5sb29rdXBOb2RlKHBhcmVudCxuYW1lKTt2YXIgZXJyQ29kZT1GUy5tYXlEZWxldGUocGFyZW50LG5hbWUsZmFsc2UpO2lmKGVyckNvZGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKGVyckNvZGUpfWlmKCFwYXJlbnQubm9kZV9vcHMudW5saW5rKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig2Myl9aWYoRlMuaXNNb3VudHBvaW50KG5vZGUpKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcigxMCl9cGFyZW50Lm5vZGVfb3BzLnVubGluayhwYXJlbnQsbmFtZSk7RlMuZGVzdHJveU5vZGUobm9kZSl9LHJlYWRsaW5rKHBhdGgpe3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChwYXRoKTt2YXIgbGluaz1sb29rdXAubm9kZTtpZighbGluayl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDQpfWlmKCFsaW5rLm5vZGVfb3BzLnJlYWRsaW5rKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcigyOCl9cmV0dXJuIGxpbmsubm9kZV9vcHMucmVhZGxpbmsobGluayl9LHN0YXQocGF0aCxkb250Rm9sbG93KXt2YXIgbG9va3VwPUZTLmxvb2t1cFBhdGgocGF0aCx7Zm9sbG93OiFkb250Rm9sbG93fSk7dmFyIG5vZGU9bG9va3VwLm5vZGU7dmFyIGdldGF0dHI9RlMuY2hlY2tPcEV4aXN0cyhub2RlLm5vZGVfb3BzLmdldGF0dHIsNjMpO3JldHVybiBnZXRhdHRyKG5vZGUpfSxmc3RhdChmZCl7dmFyIHN0cmVhbT1GUy5nZXRTdHJlYW1DaGVja2VkKGZkKTt2YXIgbm9kZT1zdHJlYW0ubm9kZTt2YXIgZ2V0YXR0cj1zdHJlYW0uc3RyZWFtX29wcy5nZXRhdHRyO3ZhciBhcmc9Z2V0YXR0cj9zdHJlYW06bm9kZTtnZXRhdHRyPz89bm9kZS5ub2RlX29wcy5nZXRhdHRyO0ZTLmNoZWNrT3BFeGlzdHMoZ2V0YXR0ciw2Myk7cmV0dXJuIGdldGF0dHIoYXJnKX0sbHN0YXQocGF0aCl7cmV0dXJuIEZTLnN0YXQocGF0aCx0cnVlKX0sZG9DaG1vZChzdHJlYW0sbm9kZSxtb2RlLGRvbnRGb2xsb3cpe0ZTLmRvU2V0QXR0cihzdHJlYW0sbm9kZSx7bW9kZTptb2RlJjQwOTV8bm9kZS5tb2RlJn40MDk1LGN0aW1lOkRhdGUubm93KCksZG9udEZvbGxvd30pfSxjaG1vZChwYXRoLG1vZGUsZG9udEZvbGxvdyl7dmFyIG5vZGU7aWYodHlwZW9mIHBhdGg9PVwic3RyaW5nXCIpe3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChwYXRoLHtmb2xsb3c6IWRvbnRGb2xsb3d9KTtub2RlPWxvb2t1cC5ub2RlfWVsc2V7bm9kZT1wYXRofUZTLmRvQ2htb2QobnVsbCxub2RlLG1vZGUsZG9udEZvbGxvdyl9LGxjaG1vZChwYXRoLG1vZGUpe0ZTLmNobW9kKHBhdGgsbW9kZSx0cnVlKX0sZmNobW9kKGZkLG1vZGUpe3ZhciBzdHJlYW09RlMuZ2V0U3RyZWFtQ2hlY2tlZChmZCk7RlMuZG9DaG1vZChzdHJlYW0sc3RyZWFtLm5vZGUsbW9kZSxmYWxzZSl9LGRvQ2hvd24oc3RyZWFtLG5vZGUsZG9udEZvbGxvdyl7RlMuZG9TZXRBdHRyKHN0cmVhbSxub2RlLHt0aW1lc3RhbXA6RGF0ZS5ub3coKSxkb250Rm9sbG93fSl9LGNob3duKHBhdGgsdWlkLGdpZCxkb250Rm9sbG93KXt2YXIgbm9kZTtpZih0eXBlb2YgcGF0aD09XCJzdHJpbmdcIil7dmFyIGxvb2t1cD1GUy5sb29rdXBQYXRoKHBhdGgse2ZvbGxvdzohZG9udEZvbGxvd30pO25vZGU9bG9va3VwLm5vZGV9ZWxzZXtub2RlPXBhdGh9RlMuZG9DaG93bihudWxsLG5vZGUsZG9udEZvbGxvdyl9LGxjaG93bihwYXRoLHVpZCxnaWQpe0ZTLmNob3duKHBhdGgsdWlkLGdpZCx0cnVlKX0sZmNob3duKGZkLHVpZCxnaWQpe3ZhciBzdHJlYW09RlMuZ2V0U3RyZWFtQ2hlY2tlZChmZCk7RlMuZG9DaG93bihzdHJlYW0sc3RyZWFtLm5vZGUsZmFsc2UpfSxkb1RydW5jYXRlKHN0cmVhbSxub2RlLGxlbil7aWYoRlMuaXNEaXIobm9kZS5tb2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMzEpfWlmKCFGUy5pc0ZpbGUobm9kZS5tb2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfXZhciBlcnJDb2RlPUZTLm5vZGVQZXJtaXNzaW9ucyhub2RlLFwid1wiKTtpZihlcnJDb2RlKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcihlcnJDb2RlKX1GUy5kb1NldEF0dHIoc3RyZWFtLG5vZGUse3NpemU6bGVuLHRpbWVzdGFtcDpEYXRlLm5vdygpfSl9LHRydW5jYXRlKHBhdGgsbGVuKXtpZihsZW48MCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfXZhciBub2RlO2lmKHR5cGVvZiBwYXRoPT1cInN0cmluZ1wiKXt2YXIgbG9va3VwPUZTLmxvb2t1cFBhdGgocGF0aCx7Zm9sbG93OnRydWV9KTtub2RlPWxvb2t1cC5ub2RlfWVsc2V7bm9kZT1wYXRofUZTLmRvVHJ1bmNhdGUobnVsbCxub2RlLGxlbil9LGZ0cnVuY2F0ZShmZCxsZW4pe3ZhciBzdHJlYW09RlMuZ2V0U3RyZWFtQ2hlY2tlZChmZCk7aWYobGVuPDB8fChzdHJlYW0uZmxhZ3MmMjA5NzE1NSk9PT0wKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcigyOCl9RlMuZG9UcnVuY2F0ZShzdHJlYW0sc3RyZWFtLm5vZGUsbGVuKX0sdXRpbWUocGF0aCxhdGltZSxtdGltZSl7dmFyIGxvb2t1cD1GUy5sb29rdXBQYXRoKHBhdGgse2ZvbGxvdzp0cnVlfSk7dmFyIG5vZGU9bG9va3VwLm5vZGU7dmFyIHNldGF0dHI9RlMuY2hlY2tPcEV4aXN0cyhub2RlLm5vZGVfb3BzLnNldGF0dHIsNjMpO3NldGF0dHIobm9kZSx7YXRpbWUsbXRpbWV9KX0sb3BlbihwYXRoLGZsYWdzLG1vZGU9NDM4KXtpZihwYXRoPT09XCJcIil7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDQpfWZsYWdzPXR5cGVvZiBmbGFncz09XCJzdHJpbmdcIj9GU19tb2RlU3RyaW5nVG9GbGFncyhmbGFncyk6ZmxhZ3M7aWYoZmxhZ3MmNjQpe21vZGU9bW9kZSY0MDk1fDMyNzY4fWVsc2V7bW9kZT0wfXZhciBub2RlO3ZhciBpc0RpclBhdGg7aWYodHlwZW9mIHBhdGg9PVwib2JqZWN0XCIpe25vZGU9cGF0aH1lbHNle2lzRGlyUGF0aD1wYXRoLmVuZHNXaXRoKFwiL1wiKTt2YXIgbG9va3VwPUZTLmxvb2t1cFBhdGgocGF0aCx7Zm9sbG93OiEoZmxhZ3MmMTMxMDcyKSxub2VudF9va2F5OnRydWV9KTtub2RlPWxvb2t1cC5ub2RlO3BhdGg9bG9va3VwLnBhdGh9dmFyIGNyZWF0ZWQ9ZmFsc2U7aWYoZmxhZ3MmNjQpe2lmKG5vZGUpe2lmKGZsYWdzJjEyOCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjApfX1lbHNlIGlmKGlzRGlyUGF0aCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMzEpfWVsc2V7bm9kZT1GUy5ta25vZChwYXRoLG1vZGV8NTExLDApO2NyZWF0ZWQ9dHJ1ZX19aWYoIW5vZGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDQ0KX1pZihGUy5pc0NocmRldihub2RlLm1vZGUpKXtmbGFncyY9fjUxMn1pZihmbGFncyY2NTUzNiYmIUZTLmlzRGlyKG5vZGUubW9kZSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDU0KX1pZighY3JlYXRlZCl7dmFyIGVyckNvZGU9RlMubWF5T3Blbihub2RlLGZsYWdzKTtpZihlcnJDb2RlKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcihlcnJDb2RlKX19aWYoZmxhZ3MmNTEyJiYhY3JlYXRlZCl7RlMudHJ1bmNhdGUobm9kZSwwKX1mbGFncyY9figxMjh8NTEyfDEzMTA3Mik7dmFyIHN0cmVhbT1GUy5jcmVhdGVTdHJlYW0oe25vZGUscGF0aDpGUy5nZXRQYXRoKG5vZGUpLGZsYWdzLHNlZWthYmxlOnRydWUscG9zaXRpb246MCxzdHJlYW1fb3BzOm5vZGUuc3RyZWFtX29wcyx1bmdvdHRlbjpbXSxlcnJvcjpmYWxzZX0pO2lmKHN0cmVhbS5zdHJlYW1fb3BzLm9wZW4pe3N0cmVhbS5zdHJlYW1fb3BzLm9wZW4oc3RyZWFtKX1pZihjcmVhdGVkKXtGUy5jaG1vZChub2RlLG1vZGUmNTExKX1yZXR1cm4gc3RyZWFtfSxjbG9zZShzdHJlYW0pe2lmKEZTLmlzQ2xvc2VkKHN0cmVhbSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDgpfWlmKHN0cmVhbS5nZXRkZW50cylzdHJlYW0uZ2V0ZGVudHM9bnVsbDt0cnl7aWYoc3RyZWFtLnN0cmVhbV9vcHMuY2xvc2Upe3N0cmVhbS5zdHJlYW1fb3BzLmNsb3NlKHN0cmVhbSl9fWNhdGNoKGUpe3Rocm93IGV9ZmluYWxseXtGUy5jbG9zZVN0cmVhbShzdHJlYW0uZmQpfXN0cmVhbS5mZD1udWxsfSxpc0Nsb3NlZChzdHJlYW0pe3JldHVybiBzdHJlYW0uZmQ9PT1udWxsfSxsbHNlZWsoc3RyZWFtLG9mZnNldCx3aGVuY2Upe2lmKEZTLmlzQ2xvc2VkKHN0cmVhbSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDgpfWlmKCFzdHJlYW0uc2Vla2FibGV8fCFzdHJlYW0uc3RyZWFtX29wcy5sbHNlZWspe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDcwKX1pZih3aGVuY2UhPTAmJndoZW5jZSE9MSYmd2hlbmNlIT0yKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcigyOCl9c3RyZWFtLnBvc2l0aW9uPXN0cmVhbS5zdHJlYW1fb3BzLmxsc2VlayhzdHJlYW0sb2Zmc2V0LHdoZW5jZSk7c3RyZWFtLnVuZ290dGVuPVtdO3JldHVybiBzdHJlYW0ucG9zaXRpb259LHJlYWQoc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuZ3RoLHBvc2l0aW9uKXtpZihsZW5ndGg8MHx8cG9zaXRpb248MCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfWlmKEZTLmlzQ2xvc2VkKHN0cmVhbSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDgpfWlmKChzdHJlYW0uZmxhZ3MmMjA5NzE1NSk9PT0xKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig4KX1pZihGUy5pc0RpcihzdHJlYW0ubm9kZS5tb2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMzEpfWlmKCFzdHJlYW0uc3RyZWFtX29wcy5yZWFkKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcigyOCl9dmFyIHNlZWtpbmc9dHlwZW9mIHBvc2l0aW9uIT1cInVuZGVmaW5lZFwiO2lmKCFzZWVraW5nKXtwb3NpdGlvbj1zdHJlYW0ucG9zaXRpb259ZWxzZSBpZighc3RyZWFtLnNlZWthYmxlKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig3MCl9dmFyIGJ5dGVzUmVhZD1zdHJlYW0uc3RyZWFtX29wcy5yZWFkKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxwb3NpdGlvbik7aWYoIXNlZWtpbmcpc3RyZWFtLnBvc2l0aW9uKz1ieXRlc1JlYWQ7cmV0dXJuIGJ5dGVzUmVhZH0sd3JpdGUoc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuZ3RoLHBvc2l0aW9uLGNhbk93bil7aWYobGVuZ3RoPDB8fHBvc2l0aW9uPDApe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDI4KX1pZihGUy5pc0Nsb3NlZChzdHJlYW0pKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig4KX1pZigoc3RyZWFtLmZsYWdzJjIwOTcxNTUpPT09MCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoOCl9aWYoRlMuaXNEaXIoc3RyZWFtLm5vZGUubW9kZSkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDMxKX1pZighc3RyZWFtLnN0cmVhbV9vcHMud3JpdGUpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDI4KX1pZihzdHJlYW0uc2Vla2FibGUmJnN0cmVhbS5mbGFncyYxMDI0KXtGUy5sbHNlZWsoc3RyZWFtLDAsMil9dmFyIHNlZWtpbmc9dHlwZW9mIHBvc2l0aW9uIT1cInVuZGVmaW5lZFwiO2lmKCFzZWVraW5nKXtwb3NpdGlvbj1zdHJlYW0ucG9zaXRpb259ZWxzZSBpZighc3RyZWFtLnNlZWthYmxlKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig3MCl9dmFyIGJ5dGVzV3JpdHRlbj1zdHJlYW0uc3RyZWFtX29wcy53cml0ZShzdHJlYW0sYnVmZmVyLG9mZnNldCxsZW5ndGgscG9zaXRpb24sY2FuT3duKTtpZighc2Vla2luZylzdHJlYW0ucG9zaXRpb24rPWJ5dGVzV3JpdHRlbjtyZXR1cm4gYnl0ZXNXcml0dGVufSxtbWFwKHN0cmVhbSxsZW5ndGgscG9zaXRpb24scHJvdCxmbGFncyl7aWYoKHByb3QmMikhPT0wJiYoZmxhZ3MmMik9PT0wJiYoc3RyZWFtLmZsYWdzJjIwOTcxNTUpIT09Mil7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMil9aWYoKHN0cmVhbS5mbGFncyYyMDk3MTU1KT09PTEpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDIpfWlmKCFzdHJlYW0uc3RyZWFtX29wcy5tbWFwKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig0Myl9aWYoIWxlbmd0aCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjgpfXJldHVybiBzdHJlYW0uc3RyZWFtX29wcy5tbWFwKHN0cmVhbSxsZW5ndGgscG9zaXRpb24scHJvdCxmbGFncyl9LG1zeW5jKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxtbWFwRmxhZ3Mpe2lmKCFzdHJlYW0uc3RyZWFtX29wcy5tc3luYyl7cmV0dXJuIDB9cmV0dXJuIHN0cmVhbS5zdHJlYW1fb3BzLm1zeW5jKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxtbWFwRmxhZ3MpfSxpb2N0bChzdHJlYW0sY21kLGFyZyl7aWYoIXN0cmVhbS5zdHJlYW1fb3BzLmlvY3RsKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig1OSl9cmV0dXJuIHN0cmVhbS5zdHJlYW1fb3BzLmlvY3RsKHN0cmVhbSxjbWQsYXJnKX0scmVhZEZpbGUocGF0aCxvcHRzPXt9KXtvcHRzLmZsYWdzPW9wdHMuZmxhZ3N8fDA7b3B0cy5lbmNvZGluZz1vcHRzLmVuY29kaW5nfHxcImJpbmFyeVwiO2lmKG9wdHMuZW5jb2RpbmchPT1cInV0ZjhcIiYmb3B0cy5lbmNvZGluZyE9PVwiYmluYXJ5XCIpe2Fib3J0KGBJbnZhbGlkIGVuY29kaW5nIHR5cGUgXCIke29wdHMuZW5jb2Rpbmd9XCJgKX12YXIgc3RyZWFtPUZTLm9wZW4ocGF0aCxvcHRzLmZsYWdzKTt2YXIgc3RhdD1GUy5zdGF0KHBhdGgpO3ZhciBsZW5ndGg9c3RhdC5zaXplO3ZhciBidWY9bmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtGUy5yZWFkKHN0cmVhbSxidWYsMCxsZW5ndGgsMCk7aWYob3B0cy5lbmNvZGluZz09PVwidXRmOFwiKXtidWY9VVRGOEFycmF5VG9TdHJpbmcoYnVmKX1GUy5jbG9zZShzdHJlYW0pO3JldHVybiBidWZ9LHdyaXRlRmlsZShwYXRoLGRhdGEsb3B0cz17fSl7b3B0cy5mbGFncz1vcHRzLmZsYWdzfHw1Nzc7dmFyIHN0cmVhbT1GUy5vcGVuKHBhdGgsb3B0cy5mbGFncyxvcHRzLm1vZGUpO2lmKHR5cGVvZiBkYXRhPT1cInN0cmluZ1wiKXtkYXRhPW5ldyBVaW50OEFycmF5KGludEFycmF5RnJvbVN0cmluZyhkYXRhLHRydWUpKX1pZihBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpe0ZTLndyaXRlKHN0cmVhbSxkYXRhLDAsZGF0YS5ieXRlTGVuZ3RoLHVuZGVmaW5lZCxvcHRzLmNhbk93bil9ZWxzZXthYm9ydChcIlVuc3VwcG9ydGVkIGRhdGEgdHlwZVwiKX1GUy5jbG9zZShzdHJlYW0pfSxjd2Q6KCk9PkZTLmN1cnJlbnRQYXRoLGNoZGlyKHBhdGgpe3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChwYXRoLHtmb2xsb3c6dHJ1ZX0pO2lmKGxvb2t1cC5ub2RlPT09bnVsbCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNDQpfWlmKCFGUy5pc0Rpcihsb29rdXAubm9kZS5tb2RlKSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNTQpfXZhciBlcnJDb2RlPUZTLm5vZGVQZXJtaXNzaW9ucyhsb29rdXAubm9kZSxcInhcIik7aWYoZXJyQ29kZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoZXJyQ29kZSl9RlMuY3VycmVudFBhdGg9bG9va3VwLnBhdGh9LGNyZWF0ZURlZmF1bHREaXJlY3Rvcmllcygpe0ZTLm1rZGlyKFwiL3RtcFwiKTtGUy5ta2RpcihcIi9ob21lXCIpO0ZTLm1rZGlyKFwiL2hvbWUvd2ViX3VzZXJcIil9LGNyZWF0ZURlZmF1bHREZXZpY2VzKCl7RlMubWtkaXIoXCIvZGV2XCIpO0ZTLnJlZ2lzdGVyRGV2aWNlKEZTLm1ha2VkZXYoMSwzKSx7cmVhZDooKT0+MCx3cml0ZTooc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuZ3RoLHBvcyk9Pmxlbmd0aCxsbHNlZWs6KCk9PjB9KTtGUy5ta2RldihcIi9kZXYvbnVsbFwiLEZTLm1ha2VkZXYoMSwzKSk7VFRZLnJlZ2lzdGVyKEZTLm1ha2VkZXYoNSwwKSxUVFkuZGVmYXVsdF90dHlfb3BzKTtUVFkucmVnaXN0ZXIoRlMubWFrZWRldig2LDApLFRUWS5kZWZhdWx0X3R0eTFfb3BzKTtGUy5ta2RldihcIi9kZXYvdHR5XCIsRlMubWFrZWRldig1LDApKTtGUy5ta2RldihcIi9kZXYvdHR5MVwiLEZTLm1ha2VkZXYoNiwwKSk7dmFyIHJhbmRvbUJ1ZmZlcj1uZXcgVWludDhBcnJheSgxMDI0KSxyYW5kb21MZWZ0PTA7dmFyIHJhbmRvbUJ5dGU9KCk9PntpZihyYW5kb21MZWZ0PT09MCl7cmFuZG9tRmlsbChyYW5kb21CdWZmZXIpO3JhbmRvbUxlZnQ9cmFuZG9tQnVmZmVyLmJ5dGVMZW5ndGh9cmV0dXJuIHJhbmRvbUJ1ZmZlclstLXJhbmRvbUxlZnRdfTtGUy5jcmVhdGVEZXZpY2UoXCIvZGV2XCIsXCJyYW5kb21cIixyYW5kb21CeXRlKTtGUy5jcmVhdGVEZXZpY2UoXCIvZGV2XCIsXCJ1cmFuZG9tXCIscmFuZG9tQnl0ZSk7RlMubWtkaXIoXCIvZGV2L3NobVwiKTtGUy5ta2RpcihcIi9kZXYvc2htL3RtcFwiKX0sY3JlYXRlU3BlY2lhbERpcmVjdG9yaWVzKCl7RlMubWtkaXIoXCIvcHJvY1wiKTt2YXIgcHJvY19zZWxmPUZTLm1rZGlyKFwiL3Byb2Mvc2VsZlwiKTtGUy5ta2RpcihcIi9wcm9jL3NlbGYvZmRcIik7RlMubW91bnQoe21vdW50KCl7dmFyIG5vZGU9RlMuY3JlYXRlTm9kZShwcm9jX3NlbGYsXCJmZFwiLDE2ODk1LDczKTtub2RlLnN0cmVhbV9vcHM9e2xsc2VlazpNRU1GUy5zdHJlYW1fb3BzLmxsc2Vla307bm9kZS5ub2RlX29wcz17bG9va3VwKHBhcmVudCxuYW1lKXt2YXIgZmQ9K25hbWU7dmFyIHN0cmVhbT1GUy5nZXRTdHJlYW1DaGVja2VkKGZkKTt2YXIgcmV0PXtwYXJlbnQ6bnVsbCxtb3VudDp7bW91bnRwb2ludDpcImZha2VcIn0sbm9kZV9vcHM6e3JlYWRsaW5rOigpPT5zdHJlYW0ucGF0aH0saWQ6ZmQrMX07cmV0LnBhcmVudD1yZXQ7cmV0dXJuIHJldH0scmVhZGRpcigpe3JldHVybiBBcnJheS5mcm9tKEZTLnN0cmVhbXMuZW50cmllcygpKS5maWx0ZXIoKFtrLHZdKT0+dikubWFwKChbayx2XSk9PmsudG9TdHJpbmcoKSl9fTtyZXR1cm4gbm9kZX19LHt9LFwiL3Byb2Mvc2VsZi9mZFwiKX0sY3JlYXRlU3RhbmRhcmRTdHJlYW1zKGlucHV0LG91dHB1dCxlcnJvcil7aWYoaW5wdXQpe0ZTLmNyZWF0ZURldmljZShcIi9kZXZcIixcInN0ZGluXCIsaW5wdXQpfWVsc2V7RlMuc3ltbGluayhcIi9kZXYvdHR5XCIsXCIvZGV2L3N0ZGluXCIpfWlmKG91dHB1dCl7RlMuY3JlYXRlRGV2aWNlKFwiL2RldlwiLFwic3Rkb3V0XCIsbnVsbCxvdXRwdXQpfWVsc2V7RlMuc3ltbGluayhcIi9kZXYvdHR5XCIsXCIvZGV2L3N0ZG91dFwiKX1pZihlcnJvcil7RlMuY3JlYXRlRGV2aWNlKFwiL2RldlwiLFwic3RkZXJyXCIsbnVsbCxlcnJvcil9ZWxzZXtGUy5zeW1saW5rKFwiL2Rldi90dHkxXCIsXCIvZGV2L3N0ZGVyclwiKX12YXIgc3RkaW49RlMub3BlbihcIi9kZXYvc3RkaW5cIiwwKTt2YXIgc3Rkb3V0PUZTLm9wZW4oXCIvZGV2L3N0ZG91dFwiLDEpO3ZhciBzdGRlcnI9RlMub3BlbihcIi9kZXYvc3RkZXJyXCIsMSl9LHN0YXRpY0luaXQoKXtGUy5uYW1lVGFibGU9bmV3IEFycmF5KDQwOTYpO0ZTLm1vdW50KE1FTUZTLHt9LFwiL1wiKTtGUy5jcmVhdGVEZWZhdWx0RGlyZWN0b3JpZXMoKTtGUy5jcmVhdGVEZWZhdWx0RGV2aWNlcygpO0ZTLmNyZWF0ZVNwZWNpYWxEaXJlY3RvcmllcygpO0ZTLmZpbGVzeXN0ZW1zPXtNRU1GU319LGluaXQoaW5wdXQsb3V0cHV0LGVycm9yKXtGUy5pbml0aWFsaXplZD10cnVlO2lucHV0Pz89TW9kdWxlW1wic3RkaW5cIl07b3V0cHV0Pz89TW9kdWxlW1wic3Rkb3V0XCJdO2Vycm9yPz89TW9kdWxlW1wic3RkZXJyXCJdO0ZTLmNyZWF0ZVN0YW5kYXJkU3RyZWFtcyhpbnB1dCxvdXRwdXQsZXJyb3IpfSxxdWl0KCl7RlMuaW5pdGlhbGl6ZWQ9ZmFsc2U7Zm9yKHZhciBzdHJlYW0gb2YgRlMuc3RyZWFtcyl7aWYoc3RyZWFtKXtGUy5jbG9zZShzdHJlYW0pfX19LGZpbmRPYmplY3QocGF0aCxkb250UmVzb2x2ZUxhc3RMaW5rKXt2YXIgcmV0PUZTLmFuYWx5emVQYXRoKHBhdGgsZG9udFJlc29sdmVMYXN0TGluayk7aWYoIXJldC5leGlzdHMpe3JldHVybiBudWxsfXJldHVybiByZXQub2JqZWN0fSxhbmFseXplUGF0aChwYXRoLGRvbnRSZXNvbHZlTGFzdExpbmspe3RyeXt2YXIgbG9va3VwPUZTLmxvb2t1cFBhdGgocGF0aCx7Zm9sbG93OiFkb250UmVzb2x2ZUxhc3RMaW5rfSk7cGF0aD1sb29rdXAucGF0aH1jYXRjaChlKXt9dmFyIHJldD17aXNSb290OmZhbHNlLGV4aXN0czpmYWxzZSxlcnJvcjowLG5hbWU6bnVsbCxwYXRoOm51bGwsb2JqZWN0Om51bGwscGFyZW50RXhpc3RzOmZhbHNlLHBhcmVudFBhdGg6bnVsbCxwYXJlbnRPYmplY3Q6bnVsbH07dHJ5e3ZhciBsb29rdXA9RlMubG9va3VwUGF0aChwYXRoLHtwYXJlbnQ6dHJ1ZX0pO3JldC5wYXJlbnRFeGlzdHM9dHJ1ZTtyZXQucGFyZW50UGF0aD1sb29rdXAucGF0aDtyZXQucGFyZW50T2JqZWN0PWxvb2t1cC5ub2RlO3JldC5uYW1lPVBBVEguYmFzZW5hbWUocGF0aCk7bG9va3VwPUZTLmxvb2t1cFBhdGgocGF0aCx7Zm9sbG93OiFkb250UmVzb2x2ZUxhc3RMaW5rfSk7cmV0LmV4aXN0cz10cnVlO3JldC5wYXRoPWxvb2t1cC5wYXRoO3JldC5vYmplY3Q9bG9va3VwLm5vZGU7cmV0Lm5hbWU9bG9va3VwLm5vZGUubmFtZTtyZXQuaXNSb290PWxvb2t1cC5wYXRoPT09XCIvXCJ9Y2F0Y2goZSl7cmV0LmVycm9yPWUuZXJybm99cmV0dXJuIHJldH0sY3JlYXRlUGF0aChwYXJlbnQscGF0aCxjYW5SZWFkLGNhbldyaXRlKXtwYXJlbnQ9dHlwZW9mIHBhcmVudD09XCJzdHJpbmdcIj9wYXJlbnQ6RlMuZ2V0UGF0aChwYXJlbnQpO3ZhciBwYXJ0cz1wYXRoLnNwbGl0KFwiL1wiKS5yZXZlcnNlKCk7d2hpbGUocGFydHMubGVuZ3RoKXt2YXIgcGFydD1wYXJ0cy5wb3AoKTtpZighcGFydCljb250aW51ZTt2YXIgY3VycmVudD1QQVRILmpvaW4yKHBhcmVudCxwYXJ0KTt0cnl7RlMubWtkaXIoY3VycmVudCl9Y2F0Y2goZSl7aWYoZS5lcnJubyE9MjApdGhyb3cgZX1wYXJlbnQ9Y3VycmVudH1yZXR1cm4gY3VycmVudH0sY3JlYXRlRmlsZShwYXJlbnQsbmFtZSxwcm9wZXJ0aWVzLGNhblJlYWQsY2FuV3JpdGUpe3ZhciBwYXRoPVBBVEguam9pbjIodHlwZW9mIHBhcmVudD09XCJzdHJpbmdcIj9wYXJlbnQ6RlMuZ2V0UGF0aChwYXJlbnQpLG5hbWUpO3ZhciBtb2RlPUZTX2dldE1vZGUoY2FuUmVhZCxjYW5Xcml0ZSk7cmV0dXJuIEZTLmNyZWF0ZShwYXRoLG1vZGUpfSxjcmVhdGVEYXRhRmlsZShwYXJlbnQsbmFtZSxkYXRhLGNhblJlYWQsY2FuV3JpdGUsY2FuT3duKXt2YXIgcGF0aD1uYW1lO2lmKHBhcmVudCl7cGFyZW50PXR5cGVvZiBwYXJlbnQ9PVwic3RyaW5nXCI/cGFyZW50OkZTLmdldFBhdGgocGFyZW50KTtwYXRoPW5hbWU/UEFUSC5qb2luMihwYXJlbnQsbmFtZSk6cGFyZW50fXZhciBtb2RlPUZTX2dldE1vZGUoY2FuUmVhZCxjYW5Xcml0ZSk7dmFyIG5vZGU9RlMuY3JlYXRlKHBhdGgsbW9kZSk7aWYoZGF0YSl7aWYodHlwZW9mIGRhdGE9PVwic3RyaW5nXCIpe3ZhciBhcnI9bmV3IEFycmF5KGRhdGEubGVuZ3RoKTtmb3IodmFyIGk9MCxsZW49ZGF0YS5sZW5ndGg7aTxsZW47KytpKWFycltpXT1kYXRhLmNoYXJDb2RlQXQoaSk7ZGF0YT1hcnJ9RlMuY2htb2Qobm9kZSxtb2RlfDE0Nik7dmFyIHN0cmVhbT1GUy5vcGVuKG5vZGUsNTc3KTtGUy53cml0ZShzdHJlYW0sZGF0YSwwLGRhdGEubGVuZ3RoLDAsY2FuT3duKTtGUy5jbG9zZShzdHJlYW0pO0ZTLmNobW9kKG5vZGUsbW9kZSl9fSxjcmVhdGVEZXZpY2UocGFyZW50LG5hbWUsaW5wdXQsb3V0cHV0KXt2YXIgcGF0aD1QQVRILmpvaW4yKHR5cGVvZiBwYXJlbnQ9PVwic3RyaW5nXCI/cGFyZW50OkZTLmdldFBhdGgocGFyZW50KSxuYW1lKTt2YXIgbW9kZT1GU19nZXRNb2RlKCEhaW5wdXQsISFvdXRwdXQpO0ZTLmNyZWF0ZURldmljZS5tYWpvcj8/PTY0O3ZhciBkZXY9RlMubWFrZWRldihGUy5jcmVhdGVEZXZpY2UubWFqb3IrKywwKTtGUy5yZWdpc3RlckRldmljZShkZXYse29wZW4oc3RyZWFtKXtzdHJlYW0uc2Vla2FibGU9ZmFsc2V9LGNsb3NlKHN0cmVhbSl7aWYob3V0cHV0Py5idWZmZXI/Lmxlbmd0aCl7b3V0cHV0KDEwKX19LHJlYWQoc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuZ3RoLHBvcyl7dmFyIGJ5dGVzUmVhZD0wO2Zvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7dmFyIHJlc3VsdDt0cnl7cmVzdWx0PWlucHV0KCl9Y2F0Y2goZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjkpfWlmKHJlc3VsdD09PXVuZGVmaW5lZCYmYnl0ZXNSZWFkPT09MCl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoNil9aWYocmVzdWx0PT09bnVsbHx8cmVzdWx0PT09dW5kZWZpbmVkKWJyZWFrO2J5dGVzUmVhZCsrO2J1ZmZlcltvZmZzZXQraV09cmVzdWx0fWlmKGJ5dGVzUmVhZCl7c3RyZWFtLm5vZGUuYXRpbWU9RGF0ZS5ub3coKX1yZXR1cm4gYnl0ZXNSZWFkfSx3cml0ZShzdHJlYW0sYnVmZmVyLG9mZnNldCxsZW5ndGgscG9zKXtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3RyeXtvdXRwdXQoYnVmZmVyW29mZnNldCtpXSl9Y2F0Y2goZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjkpfX1pZihsZW5ndGgpe3N0cmVhbS5ub2RlLm10aW1lPXN0cmVhbS5ub2RlLmN0aW1lPURhdGUubm93KCl9cmV0dXJuIGl9fSk7cmV0dXJuIEZTLm1rZGV2KHBhdGgsbW9kZSxkZXYpfSxmb3JjZUxvYWRGaWxlKG9iail7aWYob2JqLmlzRGV2aWNlfHxvYmouaXNGb2xkZXJ8fG9iai5saW5rfHxvYmouY29udGVudHMpcmV0dXJuIHRydWU7aWYoZ2xvYmFsVGhpcy5YTUxIdHRwUmVxdWVzdCl7YWJvcnQoXCJMYXp5IGxvYWRpbmcgc2hvdWxkIGhhdmUgYmVlbiBwZXJmb3JtZWQgKGNvbnRlbnRzIHNldCkgaW4gY3JlYXRlTGF6eUZpbGUsIGJ1dCBpdCB3YXMgbm90LiBMYXp5IGxvYWRpbmcgb25seSB3b3JrcyBpbiB3ZWIgd29ya2Vycy4gVXNlIC0tZW1iZWQtZmlsZSBvciAtLXByZWxvYWQtZmlsZSBpbiBlbWNjIG9uIHRoZSBtYWluIHRocmVhZC5cIil9ZWxzZXt0cnl7b2JqLmNvbnRlbnRzPXJlYWRCaW5hcnkob2JqLnVybCl9Y2F0Y2goZSl7dGhyb3cgbmV3IEZTLkVycm5vRXJyb3IoMjkpfX19LGNyZWF0ZUxhenlGaWxlKHBhcmVudCxuYW1lLHVybCxjYW5SZWFkLGNhbldyaXRlKXtjbGFzcyBMYXp5VWludDhBcnJheXtsZW5ndGhLbm93bj1mYWxzZTtjaHVua3M9W107Z2V0KGlkeCl7aWYoaWR4PnRoaXMubGVuZ3RoLTF8fGlkeDwwKXtyZXR1cm4gdW5kZWZpbmVkfXZhciBjaHVua09mZnNldD1pZHgldGhpcy5jaHVua1NpemU7dmFyIGNodW5rTnVtPWlkeC90aGlzLmNodW5rU2l6ZXwwO3JldHVybiB0aGlzLmdldHRlcihjaHVua051bSlbY2h1bmtPZmZzZXRdfXNldERhdGFHZXR0ZXIoZ2V0dGVyKXt0aGlzLmdldHRlcj1nZXR0ZXJ9Y2FjaGVMZW5ndGgoKXt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkhFQURcIix1cmwsZmFsc2UpO3hoci5zZW5kKG51bGwpO2lmKCEoeGhyLnN0YXR1cz49MjAwJiZ4aHIuc3RhdHVzPDMwMHx8eGhyLnN0YXR1cz09PTMwNCkpYWJvcnQoXCJDb3VsZG4ndCBsb2FkIFwiK3VybCtcIi4gU3RhdHVzOiBcIit4aHIuc3RhdHVzKTt2YXIgZGF0YWxlbmd0aD1OdW1iZXIoeGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1sZW5ndGhcIikpO3ZhciBoZWFkZXI7dmFyIGhhc0J5dGVTZXJ2aW5nPShoZWFkZXI9eGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQWNjZXB0LVJhbmdlc1wiKSkmJmhlYWRlcj09PVwiYnl0ZXNcIjt2YXIgdXNlc0d6aXA9KGhlYWRlcj14aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LUVuY29kaW5nXCIpKSYmaGVhZGVyPT09XCJnemlwXCI7dmFyIGNodW5rU2l6ZT0xMDI0KjEwMjQ7aWYoIWhhc0J5dGVTZXJ2aW5nKWNodW5rU2l6ZT1kYXRhbGVuZ3RoO3ZhciBkb1hIUj0oZnJvbSx0byk9PntpZihmcm9tPnRvKWFib3J0KFwiaW52YWxpZCByYW5nZSAoXCIrZnJvbStcIiwgXCIrdG8rXCIpIG9yIG5vIGJ5dGVzIHJlcXVlc3RlZCFcIik7aWYodG8+ZGF0YWxlbmd0aC0xKWFib3J0KFwib25seSBcIitkYXRhbGVuZ3RoK1wiIGJ5dGVzIGF2YWlsYWJsZSEgcHJvZ3JhbW1lciBlcnJvciFcIik7dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO2lmKGRhdGFsZW5ndGghPT1jaHVua1NpemUpeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLFwiYnl0ZXM9XCIrZnJvbStcIi1cIit0byk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7aWYoeGhyLm92ZXJyaWRlTWltZVR5cGUpe3hoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpbjsgY2hhcnNldD14LXVzZXItZGVmaW5lZFwiKX14aHIuc2VuZChudWxsKTtpZighKHhoci5zdGF0dXM+PTIwMCYmeGhyLnN0YXR1czwzMDB8fHhoci5zdGF0dXM9PT0zMDQpKWFib3J0KFwiQ291bGRuJ3QgbG9hZCBcIit1cmwrXCIuIFN0YXR1czogXCIreGhyLnN0YXR1cyk7aWYoeGhyLnJlc3BvbnNlIT09dW5kZWZpbmVkKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlfHxbXSl9cmV0dXJuIGludEFycmF5RnJvbVN0cmluZyh4aHIucmVzcG9uc2VUZXh0fHxcIlwiLHRydWUpfTt2YXIgbGF6eUFycmF5PXRoaXM7bGF6eUFycmF5LnNldERhdGFHZXR0ZXIoY2h1bmtOdW09Pnt2YXIgc3RhcnQ9Y2h1bmtOdW0qY2h1bmtTaXplO3ZhciBlbmQ9KGNodW5rTnVtKzEpKmNodW5rU2l6ZS0xO2VuZD1NYXRoLm1pbihlbmQsZGF0YWxlbmd0aC0xKTtpZih0eXBlb2YgbGF6eUFycmF5LmNodW5rc1tjaHVua051bV09PVwidW5kZWZpbmVkXCIpe2xhenlBcnJheS5jaHVua3NbY2h1bmtOdW1dPWRvWEhSKHN0YXJ0LGVuZCl9aWYodHlwZW9mIGxhenlBcnJheS5jaHVua3NbY2h1bmtOdW1dPT1cInVuZGVmaW5lZFwiKWFib3J0KFwiZG9YSFIgZmFpbGVkIVwiKTtyZXR1cm4gbGF6eUFycmF5LmNodW5rc1tjaHVua051bV19KTtpZih1c2VzR3ppcHx8IWRhdGFsZW5ndGgpe2NodW5rU2l6ZT1kYXRhbGVuZ3RoPTE7ZGF0YWxlbmd0aD10aGlzLmdldHRlcigwKS5sZW5ndGg7Y2h1bmtTaXplPWRhdGFsZW5ndGg7b3V0KFwiTGF6eUZpbGVzIG9uIGd6aXAgZm9yY2VzIGRvd25sb2FkIG9mIHRoZSB3aG9sZSBmaWxlIHdoZW4gbGVuZ3RoIGlzIGFjY2Vzc2VkXCIpfXRoaXMuX2xlbmd0aD1kYXRhbGVuZ3RoO3RoaXMuX2NodW5rU2l6ZT1jaHVua1NpemU7dGhpcy5sZW5ndGhLbm93bj10cnVlfWdldCBsZW5ndGgoKXtpZighdGhpcy5sZW5ndGhLbm93bil7dGhpcy5jYWNoZUxlbmd0aCgpfXJldHVybiB0aGlzLl9sZW5ndGh9Z2V0IGNodW5rU2l6ZSgpe2lmKCF0aGlzLmxlbmd0aEtub3duKXt0aGlzLmNhY2hlTGVuZ3RoKCl9cmV0dXJuIHRoaXMuX2NodW5rU2l6ZX19aWYoZ2xvYmFsVGhpcy5YTUxIdHRwUmVxdWVzdCl7aWYoIUVOVklST05NRU5UX0lTX1dPUktFUilhYm9ydChcIkNhbm5vdCBkbyBzeW5jaHJvbm91cyBiaW5hcnkgWEhScyBvdXRzaWRlIHdlYndvcmtlcnMgaW4gbW9kZXJuIGJyb3dzZXJzLiBVc2UgLS1lbWJlZC1maWxlIG9yIC0tcHJlbG9hZC1maWxlIGluIGVtY2NcIik7dmFyIGxhenlBcnJheT1uZXcgTGF6eVVpbnQ4QXJyYXk7dmFyIHByb3BlcnRpZXM9e2lzRGV2aWNlOmZhbHNlLGNvbnRlbnRzOmxhenlBcnJheX19ZWxzZXt2YXIgcHJvcGVydGllcz17aXNEZXZpY2U6ZmFsc2UsdXJsfX12YXIgbm9kZT1GUy5jcmVhdGVGaWxlKHBhcmVudCxuYW1lLHByb3BlcnRpZXMsY2FuUmVhZCxjYW5Xcml0ZSk7aWYocHJvcGVydGllcy5jb250ZW50cyl7bm9kZS5jb250ZW50cz1wcm9wZXJ0aWVzLmNvbnRlbnRzfWVsc2UgaWYocHJvcGVydGllcy51cmwpe25vZGUuY29udGVudHM9bnVsbDtub2RlLnVybD1wcm9wZXJ0aWVzLnVybH1PYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLHt1c2VkQnl0ZXM6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRlbnRzLmxlbmd0aH19fSk7dmFyIHN0cmVhbV9vcHM9e307Zm9yKGNvbnN0W2tleSxmbl1vZiBPYmplY3QuZW50cmllcyhub2RlLnN0cmVhbV9vcHMpKXtzdHJlYW1fb3BzW2tleV09KC4uLmFyZ3MpPT57RlMuZm9yY2VMb2FkRmlsZShub2RlKTtyZXR1cm4gZm4oLi4uYXJncyl9fWZ1bmN0aW9uIHdyaXRlQ2h1bmtzKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxwb3NpdGlvbil7dmFyIGNvbnRlbnRzPXN0cmVhbS5ub2RlLmNvbnRlbnRzO2lmKHBvc2l0aW9uPj1jb250ZW50cy5sZW5ndGgpcmV0dXJuIDA7dmFyIHNpemU9TWF0aC5taW4oY29udGVudHMubGVuZ3RoLXBvc2l0aW9uLGxlbmd0aCk7aWYoY29udGVudHMuc2xpY2Upe2Zvcih2YXIgaT0wO2k8c2l6ZTtpKyspe2J1ZmZlcltvZmZzZXQraV09Y29udGVudHNbcG9zaXRpb24raV19fWVsc2V7Zm9yKHZhciBpPTA7aTxzaXplO2krKyl7YnVmZmVyW29mZnNldCtpXT1jb250ZW50cy5nZXQocG9zaXRpb24raSl9fXJldHVybiBzaXplfXN0cmVhbV9vcHMucmVhZD0oc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuZ3RoLHBvc2l0aW9uKT0+e0ZTLmZvcmNlTG9hZEZpbGUobm9kZSk7cmV0dXJuIHdyaXRlQ2h1bmtzKHN0cmVhbSxidWZmZXIsb2Zmc2V0LGxlbmd0aCxwb3NpdGlvbil9O3N0cmVhbV9vcHMubW1hcD0oc3RyZWFtLGxlbmd0aCxwb3NpdGlvbixwcm90LGZsYWdzKT0+e0ZTLmZvcmNlTG9hZEZpbGUobm9kZSk7dmFyIHB0cj1tbWFwQWxsb2MobGVuZ3RoKTtpZighcHRyKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig0OCl9d3JpdGVDaHVua3Moc3RyZWFtLEhFQVA4LHB0cixsZW5ndGgscG9zaXRpb24pO3JldHVybntwdHIsYWxsb2NhdGVkOnRydWV9fTtub2RlLnN0cmVhbV9vcHM9c3RyZWFtX29wcztyZXR1cm4gbm9kZX19O3ZhciBTWVNDQUxMUz17Y2FsY3VsYXRlQXQoZGlyZmQscGF0aCxhbGxvd0VtcHR5KXtpZihQQVRILmlzQWJzKHBhdGgpKXtyZXR1cm4gcGF0aH12YXIgZGlyO2lmKGRpcmZkPT09LTEwMCl7ZGlyPUZTLmN3ZCgpfWVsc2V7dmFyIGRpcnN0cmVhbT1TWVNDQUxMUy5nZXRTdHJlYW1Gcm9tRkQoZGlyZmQpO2Rpcj1kaXJzdHJlYW0ucGF0aH1pZihwYXRoLmxlbmd0aD09MCl7aWYoIWFsbG93RW1wdHkpe3Rocm93IG5ldyBGUy5FcnJub0Vycm9yKDQ0KX1yZXR1cm4gZGlyfXJldHVybiBkaXIrXCIvXCIrcGF0aH0sd3JpdGVTdGF0KGJ1ZixzdGF0KXtIRUFQVTMyW2J1Zj4+Ml09c3RhdC5kZXY7SEVBUFUzMltidWYrND4+Ml09c3RhdC5tb2RlO0hFQVBVMzJbYnVmKzg+PjJdPXN0YXQubmxpbms7SEVBUFUzMltidWYrMTI+PjJdPXN0YXQudWlkO0hFQVBVMzJbYnVmKzE2Pj4yXT1zdGF0LmdpZDtIRUFQVTMyW2J1ZisyMD4+Ml09c3RhdC5yZGV2O3RlbXBJNjQ9W3N0YXQuc2l6ZT4+PjAsKHRlbXBEb3VibGU9c3RhdC5zaXplLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW2J1ZisyND4+Ml09dGVtcEk2NFswXSxIRUFQMzJbYnVmKzI4Pj4yXT10ZW1wSTY0WzFdO0hFQVAzMltidWYrMzI+PjJdPTQwOTY7SEVBUDMyW2J1ZiszNj4+Ml09c3RhdC5ibG9ja3M7dmFyIGF0aW1lPXN0YXQuYXRpbWUuZ2V0VGltZSgpO3ZhciBtdGltZT1zdGF0Lm10aW1lLmdldFRpbWUoKTt2YXIgY3RpbWU9c3RhdC5jdGltZS5nZXRUaW1lKCk7dGVtcEk2ND1bTWF0aC5mbG9vcihhdGltZS8xZTMpPj4+MCwodGVtcERvdWJsZT1NYXRoLmZsb29yKGF0aW1lLzFlMyksK01hdGguYWJzKHRlbXBEb3VibGUpPj0xP3RlbXBEb3VibGU+MD8rTWF0aC5mbG9vcih0ZW1wRG91YmxlLzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKHRlbXBEb3VibGUtKyh+fnRlbXBEb3VibGU+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXSxIRUFQMzJbYnVmKzQwPj4yXT10ZW1wSTY0WzBdLEhFQVAzMltidWYrNDQ+PjJdPXRlbXBJNjRbMV07SEVBUFUzMltidWYrNDg+PjJdPWF0aW1lJTFlMyoxZTMqMWUzO3RlbXBJNjQ9W01hdGguZmxvb3IobXRpbWUvMWUzKT4+PjAsKHRlbXBEb3VibGU9TWF0aC5mbG9vcihtdGltZS8xZTMpLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW2J1Zis1Nj4+Ml09dGVtcEk2NFswXSxIRUFQMzJbYnVmKzYwPj4yXT10ZW1wSTY0WzFdO0hFQVBVMzJbYnVmKzY0Pj4yXT1tdGltZSUxZTMqMWUzKjFlMzt0ZW1wSTY0PVtNYXRoLmZsb29yKGN0aW1lLzFlMyk+Pj4wLCh0ZW1wRG91YmxlPU1hdGguZmxvb3IoY3RpbWUvMWUzKSwrTWF0aC5hYnModGVtcERvdWJsZSk+PTE/dGVtcERvdWJsZT4wPytNYXRoLmZsb29yKHRlbXBEb3VibGUvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgodGVtcERvdWJsZS0rKH5+dGVtcERvdWJsZT4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldLEhFQVAzMltidWYrNzI+PjJdPXRlbXBJNjRbMF0sSEVBUDMyW2J1Zis3Nj4+Ml09dGVtcEk2NFsxXTtIRUFQVTMyW2J1Zis4MD4+Ml09Y3RpbWUlMWUzKjFlMyoxZTM7dGVtcEk2ND1bc3RhdC5pbm8+Pj4wLCh0ZW1wRG91YmxlPXN0YXQuaW5vLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW2J1Zis4OD4+Ml09dGVtcEk2NFswXSxIRUFQMzJbYnVmKzkyPj4yXT10ZW1wSTY0WzFdO3JldHVybiAwfSx3cml0ZVN0YXRGcyhidWYsc3RhdHMpe0hFQVBVMzJbYnVmKzQ+PjJdPXN0YXRzLmJzaXplO0hFQVBVMzJbYnVmKzYwPj4yXT1zdGF0cy5ic2l6ZTt0ZW1wSTY0PVtzdGF0cy5ibG9ja3M+Pj4wLCh0ZW1wRG91YmxlPXN0YXRzLmJsb2NrcywrTWF0aC5hYnModGVtcERvdWJsZSk+PTE/dGVtcERvdWJsZT4wPytNYXRoLmZsb29yKHRlbXBEb3VibGUvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgodGVtcERvdWJsZS0rKH5+dGVtcERvdWJsZT4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldLEhFQVAzMltidWYrOD4+Ml09dGVtcEk2NFswXSxIRUFQMzJbYnVmKzEyPj4yXT10ZW1wSTY0WzFdO3RlbXBJNjQ9W3N0YXRzLmJmcmVlPj4+MCwodGVtcERvdWJsZT1zdGF0cy5iZnJlZSwrTWF0aC5hYnModGVtcERvdWJsZSk+PTE/dGVtcERvdWJsZT4wPytNYXRoLmZsb29yKHRlbXBEb3VibGUvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgodGVtcERvdWJsZS0rKH5+dGVtcERvdWJsZT4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldLEhFQVAzMltidWYrMTY+PjJdPXRlbXBJNjRbMF0sSEVBUDMyW2J1ZisyMD4+Ml09dGVtcEk2NFsxXTt0ZW1wSTY0PVtzdGF0cy5iYXZhaWw+Pj4wLCh0ZW1wRG91YmxlPXN0YXRzLmJhdmFpbCwrTWF0aC5hYnModGVtcERvdWJsZSk+PTE/dGVtcERvdWJsZT4wPytNYXRoLmZsb29yKHRlbXBEb3VibGUvNDI5NDk2NzI5Nik+Pj4wOn5+K01hdGguY2VpbCgodGVtcERvdWJsZS0rKH5+dGVtcERvdWJsZT4+PjApKS80Mjk0OTY3Mjk2KT4+PjA6MCldLEhFQVAzMltidWYrMjQ+PjJdPXRlbXBJNjRbMF0sSEVBUDMyW2J1ZisyOD4+Ml09dGVtcEk2NFsxXTt0ZW1wSTY0PVtzdGF0cy5maWxlcz4+PjAsKHRlbXBEb3VibGU9c3RhdHMuZmlsZXMsK01hdGguYWJzKHRlbXBEb3VibGUpPj0xP3RlbXBEb3VibGU+MD8rTWF0aC5mbG9vcih0ZW1wRG91YmxlLzQyOTQ5NjcyOTYpPj4+MDp+fitNYXRoLmNlaWwoKHRlbXBEb3VibGUtKyh+fnRlbXBEb3VibGU+Pj4wKSkvNDI5NDk2NzI5Nik+Pj4wOjApXSxIRUFQMzJbYnVmKzMyPj4yXT10ZW1wSTY0WzBdLEhFQVAzMltidWYrMzY+PjJdPXRlbXBJNjRbMV07dGVtcEk2ND1bc3RhdHMuZmZyZWU+Pj4wLCh0ZW1wRG91YmxlPXN0YXRzLmZmcmVlLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW2J1Zis0MD4+Ml09dGVtcEk2NFswXSxIRUFQMzJbYnVmKzQ0Pj4yXT10ZW1wSTY0WzFdO0hFQVBVMzJbYnVmKzQ4Pj4yXT1zdGF0cy5mc2lkO0hFQVBVMzJbYnVmKzY0Pj4yXT1zdGF0cy5mbGFncztIRUFQVTMyW2J1Zis1Nj4+Ml09c3RhdHMubmFtZWxlbn0sZG9Nc3luYyhhZGRyLHN0cmVhbSxsZW4sZmxhZ3Msb2Zmc2V0KXtpZighRlMuaXNGaWxlKHN0cmVhbS5ub2RlLm1vZGUpKXt0aHJvdyBuZXcgRlMuRXJybm9FcnJvcig0Myl9aWYoZmxhZ3MmMil7cmV0dXJuIDB9dmFyIGJ1ZmZlcj1IRUFQVTguc2xpY2UoYWRkcixhZGRyK2xlbik7RlMubXN5bmMoc3RyZWFtLGJ1ZmZlcixvZmZzZXQsbGVuLGZsYWdzKX0sZ2V0U3RyZWFtRnJvbUZEKGZkKXt2YXIgc3RyZWFtPUZTLmdldFN0cmVhbUNoZWNrZWQoZmQpO3JldHVybiBzdHJlYW19LHZhcmFyZ3M6dW5kZWZpbmVkLGdldFN0cihwdHIpe3ZhciByZXQ9VVRGOFRvU3RyaW5nKHB0cik7cmV0dXJuIHJldH19O2Z1bmN0aW9uIF9fX3N5c2NhbGxfY2htb2QocGF0aCxtb2RlKXt0cnl7cGF0aD1TWVNDQUxMUy5nZXRTdHIocGF0aCk7RlMuY2htb2QocGF0aCxtb2RlKTtyZXR1cm4gMH1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fWZ1bmN0aW9uIF9fX3N5c2NhbGxfZmFjY2Vzc2F0KGRpcmZkLHBhdGgsYW1vZGUsZmxhZ3Mpe3RyeXtwYXRoPVNZU0NBTExTLmdldFN0cihwYXRoKTtwYXRoPVNZU0NBTExTLmNhbGN1bGF0ZUF0KGRpcmZkLHBhdGgpO2lmKGFtb2RlJn43KXtyZXR1cm4tMjh9dmFyIGxvb2t1cD1GUy5sb29rdXBQYXRoKHBhdGgse2ZvbGxvdzp0cnVlfSk7dmFyIG5vZGU9bG9va3VwLm5vZGU7aWYoIW5vZGUpe3JldHVybi00NH12YXIgcGVybXM9XCJcIjtpZihhbW9kZSY0KXBlcm1zKz1cInJcIjtpZihhbW9kZSYyKXBlcm1zKz1cIndcIjtpZihhbW9kZSYxKXBlcm1zKz1cInhcIjtpZihwZXJtcyYmRlMubm9kZVBlcm1pc3Npb25zKG5vZGUscGVybXMpKXtyZXR1cm4tMn1yZXR1cm4gMH1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fWZ1bmN0aW9uIF9fX3N5c2NhbGxfZmNobW9kKGZkLG1vZGUpe3RyeXtGUy5mY2htb2QoZmQsbW9kZSk7cmV0dXJuIDB9Y2F0Y2goZSl7aWYodHlwZW9mIEZTPT1cInVuZGVmaW5lZFwifHwhKGUubmFtZT09PVwiRXJybm9FcnJvclwiKSl0aHJvdyBlO3JldHVybi1lLmVycm5vfX1mdW5jdGlvbiBfX19zeXNjYWxsX2ZjaG93bjMyKGZkLG93bmVyLGdyb3VwKXt0cnl7RlMuZmNob3duKGZkLG93bmVyLGdyb3VwKTtyZXR1cm4gMH1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fXZhciBzeXNjYWxsR2V0VmFyYXJnST0oKT0+e3ZhciByZXQ9SEVBUDMyWytTWVNDQUxMUy52YXJhcmdzPj4yXTtTWVNDQUxMUy52YXJhcmdzKz00O3JldHVybiByZXR9O3ZhciBzeXNjYWxsR2V0VmFyYXJnUD1zeXNjYWxsR2V0VmFyYXJnSTtmdW5jdGlvbiBfX19zeXNjYWxsX2ZjbnRsNjQoZmQsY21kLHZhcmFyZ3Mpe1NZU0NBTExTLnZhcmFyZ3M9dmFyYXJnczt0cnl7dmFyIHN0cmVhbT1TWVNDQUxMUy5nZXRTdHJlYW1Gcm9tRkQoZmQpO3N3aXRjaChjbWQpe2Nhc2UgMDp7dmFyIGFyZz1zeXNjYWxsR2V0VmFyYXJnSSgpO2lmKGFyZzwwKXtyZXR1cm4tMjh9d2hpbGUoRlMuc3RyZWFtc1thcmddKXthcmcrK312YXIgbmV3U3RyZWFtO25ld1N0cmVhbT1GUy5kdXBTdHJlYW0oc3RyZWFtLGFyZyk7cmV0dXJuIG5ld1N0cmVhbS5mZH1jYXNlIDE6Y2FzZSAyOnJldHVybiAwO2Nhc2UgMzpyZXR1cm4gc3RyZWFtLmZsYWdzO2Nhc2UgNDp7dmFyIGFyZz1zeXNjYWxsR2V0VmFyYXJnSSgpO3N0cmVhbS5mbGFnc3w9YXJnO3JldHVybiAwfWNhc2UgMTI6e3ZhciBhcmc9c3lzY2FsbEdldFZhcmFyZ1AoKTt2YXIgb2Zmc2V0PTA7SEVBUDE2W2FyZytvZmZzZXQ+PjFdPTI7cmV0dXJuIDB9Y2FzZSAxMzpjYXNlIDE0OnJldHVybiAwfXJldHVybi0yOH1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fWZ1bmN0aW9uIF9fX3N5c2NhbGxfZnN0YXQ2NChmZCxidWYpe3RyeXtyZXR1cm4gU1lTQ0FMTFMud3JpdGVTdGF0KGJ1ZixGUy5mc3RhdChmZCkpfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319dmFyIGNvbnZlcnRJMzJQYWlyVG9JNTNDaGVja2VkPShsbyxoaSk9PmhpKzIwOTcxNTI+Pj4wPDQxOTQzMDUtISFsbz8obG8+Pj4wKStoaSo0Mjk0OTY3Mjk2Ok5hTjtmdW5jdGlvbiBfX19zeXNjYWxsX2Z0cnVuY2F0ZTY0KGZkLGxlbmd0aF9sb3csbGVuZ3RoX2hpZ2gpe3ZhciBsZW5ndGg9Y29udmVydEkzMlBhaXJUb0k1M0NoZWNrZWQobGVuZ3RoX2xvdyxsZW5ndGhfaGlnaCk7dHJ5e2lmKGlzTmFOKGxlbmd0aCkpcmV0dXJuLTYxO0ZTLmZ0cnVuY2F0ZShmZCxsZW5ndGgpO3JldHVybiAwfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319dmFyIHN0cmluZ1RvVVRGOD0oc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpPT5zdHJpbmdUb1VURjhBcnJheShzdHIsSEVBUFU4LG91dFB0cixtYXhCeXRlc1RvV3JpdGUpO2Z1bmN0aW9uIF9fX3N5c2NhbGxfZ2V0Y3dkKGJ1ZixzaXplKXt0cnl7aWYoc2l6ZT09PTApcmV0dXJuLTI4O3ZhciBjd2Q9RlMuY3dkKCk7dmFyIGN3ZExlbmd0aEluQnl0ZXM9bGVuZ3RoQnl0ZXNVVEY4KGN3ZCkrMTtpZihzaXplPGN3ZExlbmd0aEluQnl0ZXMpcmV0dXJuLTY4O3N0cmluZ1RvVVRGOChjd2QsYnVmLHNpemUpO3JldHVybiBjd2RMZW5ndGhJbkJ5dGVzfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319ZnVuY3Rpb24gX19fc3lzY2FsbF9sc3RhdDY0KHBhdGgsYnVmKXt0cnl7cGF0aD1TWVNDQUxMUy5nZXRTdHIocGF0aCk7cmV0dXJuIFNZU0NBTExTLndyaXRlU3RhdChidWYsRlMubHN0YXQocGF0aCkpfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319ZnVuY3Rpb24gX19fc3lzY2FsbF9ta2RpcmF0KGRpcmZkLHBhdGgsbW9kZSl7dHJ5e3BhdGg9U1lTQ0FMTFMuZ2V0U3RyKHBhdGgpO3BhdGg9U1lTQ0FMTFMuY2FsY3VsYXRlQXQoZGlyZmQscGF0aCk7RlMubWtkaXIocGF0aCxtb2RlLDApO3JldHVybiAwfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319ZnVuY3Rpb24gX19fc3lzY2FsbF9uZXdmc3RhdGF0KGRpcmZkLHBhdGgsYnVmLGZsYWdzKXt0cnl7cGF0aD1TWVNDQUxMUy5nZXRTdHIocGF0aCk7dmFyIG5vZm9sbG93PWZsYWdzJjI1Njt2YXIgYWxsb3dFbXB0eT1mbGFncyY0MDk2O2ZsYWdzPWZsYWdzJn42NDAwO3BhdGg9U1lTQ0FMTFMuY2FsY3VsYXRlQXQoZGlyZmQscGF0aCxhbGxvd0VtcHR5KTtyZXR1cm4gU1lTQ0FMTFMud3JpdGVTdGF0KGJ1Zixub2ZvbGxvdz9GUy5sc3RhdChwYXRoKTpGUy5zdGF0KHBhdGgpKX1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fWZ1bmN0aW9uIF9fX3N5c2NhbGxfb3BlbmF0KGRpcmZkLHBhdGgsZmxhZ3MsdmFyYXJncyl7U1lTQ0FMTFMudmFyYXJncz12YXJhcmdzO3RyeXtwYXRoPVNZU0NBTExTLmdldFN0cihwYXRoKTtwYXRoPVNZU0NBTExTLmNhbGN1bGF0ZUF0KGRpcmZkLHBhdGgpO3ZhciBtb2RlPXZhcmFyZ3M/c3lzY2FsbEdldFZhcmFyZ0koKTowO3JldHVybiBGUy5vcGVuKHBhdGgsZmxhZ3MsbW9kZSkuZmR9Y2F0Y2goZSl7aWYodHlwZW9mIEZTPT1cInVuZGVmaW5lZFwifHwhKGUubmFtZT09PVwiRXJybm9FcnJvclwiKSl0aHJvdyBlO3JldHVybi1lLmVycm5vfX1mdW5jdGlvbiBfX19zeXNjYWxsX3JlYWRsaW5rYXQoZGlyZmQscGF0aCxidWYsYnVmc2l6ZSl7dHJ5e3BhdGg9U1lTQ0FMTFMuZ2V0U3RyKHBhdGgpO3BhdGg9U1lTQ0FMTFMuY2FsY3VsYXRlQXQoZGlyZmQscGF0aCk7aWYoYnVmc2l6ZTw9MClyZXR1cm4tMjg7dmFyIHJldD1GUy5yZWFkbGluayhwYXRoKTt2YXIgbGVuPU1hdGgubWluKGJ1ZnNpemUsbGVuZ3RoQnl0ZXNVVEY4KHJldCkpO3ZhciBlbmRDaGFyPUhFQVA4W2J1ZitsZW5dO3N0cmluZ1RvVVRGOChyZXQsYnVmLGJ1ZnNpemUrMSk7SEVBUDhbYnVmK2xlbl09ZW5kQ2hhcjtyZXR1cm4gbGVufWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319ZnVuY3Rpb24gX19fc3lzY2FsbF9ybWRpcihwYXRoKXt0cnl7cGF0aD1TWVNDQUxMUy5nZXRTdHIocGF0aCk7RlMucm1kaXIocGF0aCk7cmV0dXJuIDB9Y2F0Y2goZSl7aWYodHlwZW9mIEZTPT1cInVuZGVmaW5lZFwifHwhKGUubmFtZT09PVwiRXJybm9FcnJvclwiKSl0aHJvdyBlO3JldHVybi1lLmVycm5vfX1mdW5jdGlvbiBfX19zeXNjYWxsX3N0YXQ2NChwYXRoLGJ1Zil7dHJ5e3BhdGg9U1lTQ0FMTFMuZ2V0U3RyKHBhdGgpO3JldHVybiBTWVNDQUxMUy53cml0ZVN0YXQoYnVmLEZTLnN0YXQocGF0aCkpfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319ZnVuY3Rpb24gX19fc3lzY2FsbF91bmxpbmthdChkaXJmZCxwYXRoLGZsYWdzKXt0cnl7cGF0aD1TWVNDQUxMUy5nZXRTdHIocGF0aCk7cGF0aD1TWVNDQUxMUy5jYWxjdWxhdGVBdChkaXJmZCxwYXRoKTtpZighZmxhZ3Mpe0ZTLnVubGluayhwYXRoKX1lbHNlIGlmKGZsYWdzPT09NTEyKXtGUy5ybWRpcihwYXRoKX1lbHNle3JldHVybi0yOH1yZXR1cm4gMH1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fXZhciByZWFkSTUzRnJvbUk2ND1wdHI9PkhFQVBVMzJbcHRyPj4yXStIRUFQMzJbcHRyKzQ+PjJdKjQyOTQ5NjcyOTY7ZnVuY3Rpb24gX19fc3lzY2FsbF91dGltZW5zYXQoZGlyZmQscGF0aCx0aW1lcyxmbGFncyl7dHJ5e3BhdGg9U1lTQ0FMTFMuZ2V0U3RyKHBhdGgpO3BhdGg9U1lTQ0FMTFMuY2FsY3VsYXRlQXQoZGlyZmQscGF0aCx0cnVlKTt2YXIgbm93PURhdGUubm93KCksYXRpbWUsbXRpbWU7aWYoIXRpbWVzKXthdGltZT1ub3c7bXRpbWU9bm93fWVsc2V7dmFyIHNlY29uZHM9cmVhZEk1M0Zyb21JNjQodGltZXMpO3ZhciBuYW5vc2Vjb25kcz1IRUFQMzJbdGltZXMrOD4+Ml07aWYobmFub3NlY29uZHM9PTEwNzM3NDE4MjMpe2F0aW1lPW5vd31lbHNlIGlmKG5hbm9zZWNvbmRzPT0xMDczNzQxODIyKXthdGltZT1udWxsfWVsc2V7YXRpbWU9c2Vjb25kcyoxZTMrbmFub3NlY29uZHMvKDFlMyoxZTMpfXRpbWVzKz0xNjtzZWNvbmRzPXJlYWRJNTNGcm9tSTY0KHRpbWVzKTtuYW5vc2Vjb25kcz1IRUFQMzJbdGltZXMrOD4+Ml07aWYobmFub3NlY29uZHM9PTEwNzM3NDE4MjMpe210aW1lPW5vd31lbHNlIGlmKG5hbm9zZWNvbmRzPT0xMDczNzQxODIyKXttdGltZT1udWxsfWVsc2V7bXRpbWU9c2Vjb25kcyoxZTMrbmFub3NlY29uZHMvKDFlMyoxZTMpfX1pZigobXRpbWU/P2F0aW1lKSE9PW51bGwpe0ZTLnV0aW1lKHBhdGgsYXRpbWUsbXRpbWUpfXJldHVybiAwfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319dmFyIF9fYWJvcnRfanM9KCk9PmFib3J0KFwiXCIpO3ZhciBydW50aW1lS2VlcGFsaXZlQ291bnRlcj0wO3ZhciBfX2Vtc2NyaXB0ZW5fcnVudGltZV9rZWVwYWxpdmVfY2xlYXI9KCk9Pntub0V4aXRSdW50aW1lPWZhbHNlO3J1bnRpbWVLZWVwYWxpdmVDb3VudGVyPTB9O3ZhciBpc0xlYXBZZWFyPXllYXI9PnllYXIlND09PTAmJih5ZWFyJTEwMCE9PTB8fHllYXIlNDAwPT09MCk7dmFyIE1PTlRIX0RBWVNfTEVBUF9DVU1VTEFUSVZFPVswLDMxLDYwLDkxLDEyMSwxNTIsMTgyLDIxMywyNDQsMjc0LDMwNSwzMzVdO3ZhciBNT05USF9EQVlTX1JFR1VMQVJfQ1VNVUxBVElWRT1bMCwzMSw1OSw5MCwxMjAsMTUxLDE4MSwyMTIsMjQzLDI3MywzMDQsMzM0XTt2YXIgeWRheUZyb21EYXRlPWRhdGU9Pnt2YXIgbGVhcD1pc0xlYXBZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7dmFyIG1vbnRoRGF5c0N1bXVsYXRpdmU9bGVhcD9NT05USF9EQVlTX0xFQVBfQ1VNVUxBVElWRTpNT05USF9EQVlTX1JFR1VMQVJfQ1VNVUxBVElWRTt2YXIgeWRheT1tb250aERheXNDdW11bGF0aXZlW2RhdGUuZ2V0TW9udGgoKV0rZGF0ZS5nZXREYXRlKCktMTtyZXR1cm4geWRheX07ZnVuY3Rpb24gX19sb2NhbHRpbWVfanModGltZV9sb3csdGltZV9oaWdoLHRtUHRyKXt2YXIgdGltZT1jb252ZXJ0STMyUGFpclRvSTUzQ2hlY2tlZCh0aW1lX2xvdyx0aW1lX2hpZ2gpO3ZhciBkYXRlPW5ldyBEYXRlKHRpbWUqMWUzKTtIRUFQMzJbdG1QdHI+PjJdPWRhdGUuZ2V0U2Vjb25kcygpO0hFQVAzMlt0bVB0cis0Pj4yXT1kYXRlLmdldE1pbnV0ZXMoKTtIRUFQMzJbdG1QdHIrOD4+Ml09ZGF0ZS5nZXRIb3VycygpO0hFQVAzMlt0bVB0cisxMj4+Ml09ZGF0ZS5nZXREYXRlKCk7SEVBUDMyW3RtUHRyKzE2Pj4yXT1kYXRlLmdldE1vbnRoKCk7SEVBUDMyW3RtUHRyKzIwPj4yXT1kYXRlLmdldEZ1bGxZZWFyKCktMTkwMDtIRUFQMzJbdG1QdHIrMjQ+PjJdPWRhdGUuZ2V0RGF5KCk7dmFyIHlkYXk9eWRheUZyb21EYXRlKGRhdGUpfDA7SEVBUDMyW3RtUHRyKzI4Pj4yXT15ZGF5O0hFQVAzMlt0bVB0ciszNj4+Ml09LShkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkqNjApO3ZhciBzdGFydD1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksMCwxKTt2YXIgc3VtbWVyT2Zmc2V0PW5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSw2LDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7dmFyIHdpbnRlck9mZnNldD1zdGFydC5nZXRUaW1lem9uZU9mZnNldCgpO3ZhciBkc3Q9KHN1bW1lck9mZnNldCE9d2ludGVyT2Zmc2V0JiZkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk9PU1hdGgubWluKHdpbnRlck9mZnNldCxzdW1tZXJPZmZzZXQpKXwwO0hFQVAzMlt0bVB0ciszMj4+Ml09ZHN0fWZ1bmN0aW9uIF9fbW1hcF9qcyhsZW4scHJvdCxmbGFncyxmZCxvZmZzZXRfbG93LG9mZnNldF9oaWdoLGFsbG9jYXRlZCxhZGRyKXt2YXIgb2Zmc2V0PWNvbnZlcnRJMzJQYWlyVG9JNTNDaGVja2VkKG9mZnNldF9sb3csb2Zmc2V0X2hpZ2gpO3RyeXt2YXIgc3RyZWFtPVNZU0NBTExTLmdldFN0cmVhbUZyb21GRChmZCk7dmFyIHJlcz1GUy5tbWFwKHN0cmVhbSxsZW4sb2Zmc2V0LHByb3QsZmxhZ3MpO3ZhciBwdHI9cmVzLnB0cjtIRUFQMzJbYWxsb2NhdGVkPj4yXT1yZXMuYWxsb2NhdGVkO0hFQVBVMzJbYWRkcj4+Ml09cHRyO3JldHVybiAwfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4tZS5lcnJub319ZnVuY3Rpb24gX19tdW5tYXBfanMoYWRkcixsZW4scHJvdCxmbGFncyxmZCxvZmZzZXRfbG93LG9mZnNldF9oaWdoKXt2YXIgb2Zmc2V0PWNvbnZlcnRJMzJQYWlyVG9JNTNDaGVja2VkKG9mZnNldF9sb3csb2Zmc2V0X2hpZ2gpO3RyeXt2YXIgc3RyZWFtPVNZU0NBTExTLmdldFN0cmVhbUZyb21GRChmZCk7aWYocHJvdCYyKXtTWVNDQUxMUy5kb01zeW5jKGFkZHIsc3RyZWFtLGxlbixmbGFncyxvZmZzZXQpfX1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuLWUuZXJybm99fXZhciB0aW1lcnM9e307dmFyIGhhbmRsZUV4Y2VwdGlvbj1lPT57aWYoZSBpbnN0YW5jZW9mIEV4aXRTdGF0dXN8fGU9PVwidW53aW5kXCIpe3JldHVybiBFWElUU1RBVFVTfXF1aXRfKDEsZSl9O3ZhciBrZWVwUnVudGltZUFsaXZlPSgpPT5ub0V4aXRSdW50aW1lfHxydW50aW1lS2VlcGFsaXZlQ291bnRlcj4wO3ZhciBfcHJvY19leGl0PWNvZGU9PntFWElUU1RBVFVTPWNvZGU7aWYoIWtlZXBSdW50aW1lQWxpdmUoKSl7TW9kdWxlW1wib25FeGl0XCJdPy4oY29kZSk7QUJPUlQ9dHJ1ZX1xdWl0Xyhjb2RlLG5ldyBFeGl0U3RhdHVzKGNvZGUpKX07dmFyIGV4aXRKUz0oc3RhdHVzLGltcGxpY2l0KT0+e0VYSVRTVEFUVVM9c3RhdHVzO19wcm9jX2V4aXQoc3RhdHVzKX07dmFyIF9leGl0PWV4aXRKUzt2YXIgbWF5YmVFeGl0PSgpPT57aWYoIWtlZXBSdW50aW1lQWxpdmUoKSl7dHJ5e19leGl0KEVYSVRTVEFUVVMpfWNhdGNoKGUpe2hhbmRsZUV4Y2VwdGlvbihlKX19fTt2YXIgY2FsbFVzZXJDYWxsYmFjaz1mdW5jPT57aWYoQUJPUlQpe3JldHVybn10cnl7cmV0dXJuIGZ1bmMoKX1jYXRjaChlKXtoYW5kbGVFeGNlcHRpb24oZSl9ZmluYWxseXttYXliZUV4aXQoKX19O3ZhciBfZW1zY3JpcHRlbl9nZXRfbm93PSgpPT5wZXJmb3JtYW5jZS5ub3coKTt2YXIgX19zZXRpdGltZXJfanM9KHdoaWNoLHRpbWVvdXRfbXMpPT57aWYodGltZXJzW3doaWNoXSl7Y2xlYXJUaW1lb3V0KHRpbWVyc1t3aGljaF0uaWQpO2RlbGV0ZSB0aW1lcnNbd2hpY2hdfWlmKCF0aW1lb3V0X21zKXJldHVybiAwO3ZhciBpZD1zZXRUaW1lb3V0KCgpPT57ZGVsZXRlIHRpbWVyc1t3aGljaF07Y2FsbFVzZXJDYWxsYmFjaygoKT0+X19lbXNjcmlwdGVuX3RpbWVvdXQod2hpY2gsX2Vtc2NyaXB0ZW5fZ2V0X25vdygpKSl9LHRpbWVvdXRfbXMpO3RpbWVyc1t3aGljaF09e2lkLHRpbWVvdXRfbXN9O3JldHVybiAwfTt2YXIgX190enNldF9qcz0odGltZXpvbmUsZGF5bGlnaHQsc3RkX25hbWUsZHN0X25hbWUpPT57dmFyIGN1cnJlbnRZZWFyPShuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKTt2YXIgd2ludGVyPW5ldyBEYXRlKGN1cnJlbnRZZWFyLDAsMSk7dmFyIHN1bW1lcj1uZXcgRGF0ZShjdXJyZW50WWVhciw2LDEpO3ZhciB3aW50ZXJPZmZzZXQ9d2ludGVyLmdldFRpbWV6b25lT2Zmc2V0KCk7dmFyIHN1bW1lck9mZnNldD1zdW1tZXIuZ2V0VGltZXpvbmVPZmZzZXQoKTt2YXIgc3RkVGltZXpvbmVPZmZzZXQ9TWF0aC5tYXgod2ludGVyT2Zmc2V0LHN1bW1lck9mZnNldCk7SEVBUFUzMlt0aW1lem9uZT4+Ml09c3RkVGltZXpvbmVPZmZzZXQqNjA7SEVBUDMyW2RheWxpZ2h0Pj4yXT1OdW1iZXIod2ludGVyT2Zmc2V0IT1zdW1tZXJPZmZzZXQpO3ZhciBleHRyYWN0Wm9uZT10aW1lem9uZU9mZnNldD0+e3ZhciBzaWduPXRpbWV6b25lT2Zmc2V0Pj0wP1wiLVwiOlwiK1wiO3ZhciBhYnNPZmZzZXQ9TWF0aC5hYnModGltZXpvbmVPZmZzZXQpO3ZhciBob3Vycz1TdHJpbmcoTWF0aC5mbG9vcihhYnNPZmZzZXQvNjApKS5wYWRTdGFydCgyLFwiMFwiKTt2YXIgbWludXRlcz1TdHJpbmcoYWJzT2Zmc2V0JTYwKS5wYWRTdGFydCgyLFwiMFwiKTtyZXR1cm5gVVRDJHtzaWdufSR7aG91cnN9JHttaW51dGVzfWB9O3ZhciB3aW50ZXJOYW1lPWV4dHJhY3Rab25lKHdpbnRlck9mZnNldCk7dmFyIHN1bW1lck5hbWU9ZXh0cmFjdFpvbmUoc3VtbWVyT2Zmc2V0KTtpZihzdW1tZXJPZmZzZXQ8d2ludGVyT2Zmc2V0KXtzdHJpbmdUb1VURjgod2ludGVyTmFtZSxzdGRfbmFtZSwxNyk7c3RyaW5nVG9VVEY4KHN1bW1lck5hbWUsZHN0X25hbWUsMTcpfWVsc2V7c3RyaW5nVG9VVEY4KHdpbnRlck5hbWUsZHN0X25hbWUsMTcpO3N0cmluZ1RvVVRGOChzdW1tZXJOYW1lLHN0ZF9uYW1lLDE3KX19O3ZhciBfZW1zY3JpcHRlbl9kYXRlX25vdz0oKT0+RGF0ZS5ub3coKTt2YXIgZ2V0SGVhcE1heD0oKT0+MjE0NzQ4MzY0ODt2YXIgZ3Jvd01lbW9yeT1zaXplPT57dmFyIG9sZEhlYXBTaXplPXdhc21NZW1vcnkuYnVmZmVyLmJ5dGVMZW5ndGg7dmFyIHBhZ2VzPShzaXplLW9sZEhlYXBTaXplKzY1NTM1KS82NTUzNnwwO3RyeXt3YXNtTWVtb3J5Lmdyb3cocGFnZXMpO3VwZGF0ZU1lbW9yeVZpZXdzKCk7cmV0dXJuIDF9Y2F0Y2goZSl7fX07dmFyIF9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwPXJlcXVlc3RlZFNpemU9Pnt2YXIgb2xkU2l6ZT1IRUFQVTgubGVuZ3RoO3JlcXVlc3RlZFNpemU+Pj49MDt2YXIgbWF4SGVhcFNpemU9Z2V0SGVhcE1heCgpO2lmKHJlcXVlc3RlZFNpemU+bWF4SGVhcFNpemUpe3JldHVybiBmYWxzZX1mb3IodmFyIGN1dERvd249MTtjdXREb3duPD00O2N1dERvd24qPTIpe3ZhciBvdmVyR3Jvd25IZWFwU2l6ZT1vbGRTaXplKigxKy4yL2N1dERvd24pO292ZXJHcm93bkhlYXBTaXplPU1hdGgubWluKG92ZXJHcm93bkhlYXBTaXplLHJlcXVlc3RlZFNpemUrMTAwNjYzMjk2KTt2YXIgbmV3U2l6ZT1NYXRoLm1pbihtYXhIZWFwU2l6ZSxhbGlnbk1lbW9yeShNYXRoLm1heChyZXF1ZXN0ZWRTaXplLG92ZXJHcm93bkhlYXBTaXplKSw2NTUzNikpO3ZhciByZXBsYWNlbWVudD1ncm93TWVtb3J5KG5ld1NpemUpO2lmKHJlcGxhY2VtZW50KXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfTt2YXIgRU5WPXt9O3ZhciBnZXRFeGVjdXRhYmxlTmFtZT0oKT0+dGhpc1Byb2dyYW18fFwiLi90aGlzLnByb2dyYW1cIjt2YXIgZ2V0RW52U3RyaW5ncz0oKT0+e2lmKCFnZXRFbnZTdHJpbmdzLnN0cmluZ3Mpe3ZhciBsYW5nPShnbG9iYWxUaGlzLm5hdmlnYXRvcj8ubGFuZ3VhZ2U/P1wiQ1wiKS5yZXBsYWNlKFwiLVwiLFwiX1wiKStcIi5VVEYtOFwiO3ZhciBlbnY9e1VTRVI6XCJ3ZWJfdXNlclwiLExPR05BTUU6XCJ3ZWJfdXNlclwiLFBBVEg6XCIvXCIsUFdEOlwiL1wiLEhPTUU6XCIvaG9tZS93ZWJfdXNlclwiLExBTkc6bGFuZyxfOmdldEV4ZWN1dGFibGVOYW1lKCl9O2Zvcih2YXIgeCBpbiBFTlYpe2lmKEVOVlt4XT09PXVuZGVmaW5lZClkZWxldGUgZW52W3hdO2Vsc2UgZW52W3hdPUVOVlt4XX12YXIgc3RyaW5ncz1bXTtmb3IodmFyIHggaW4gZW52KXtzdHJpbmdzLnB1c2goYCR7eH09JHtlbnZbeF19YCl9Z2V0RW52U3RyaW5ncy5zdHJpbmdzPXN0cmluZ3N9cmV0dXJuIGdldEVudlN0cmluZ3Muc3RyaW5nc307dmFyIF9lbnZpcm9uX2dldD0oX19lbnZpcm9uLGVudmlyb25fYnVmKT0+e3ZhciBidWZTaXplPTA7dmFyIGVudnA9MDtmb3IodmFyIHN0cmluZyBvZiBnZXRFbnZTdHJpbmdzKCkpe3ZhciBwdHI9ZW52aXJvbl9idWYrYnVmU2l6ZTtIRUFQVTMyW19fZW52aXJvbitlbnZwPj4yXT1wdHI7YnVmU2l6ZSs9c3RyaW5nVG9VVEY4KHN0cmluZyxwdHIsSW5maW5pdHkpKzE7ZW52cCs9NH1yZXR1cm4gMH07dmFyIF9lbnZpcm9uX3NpemVzX2dldD0ocGVudmlyb25fY291bnQscGVudmlyb25fYnVmX3NpemUpPT57dmFyIHN0cmluZ3M9Z2V0RW52U3RyaW5ncygpO0hFQVBVMzJbcGVudmlyb25fY291bnQ+PjJdPXN0cmluZ3MubGVuZ3RoO3ZhciBidWZTaXplPTA7Zm9yKHZhciBzdHJpbmcgb2Ygc3RyaW5ncyl7YnVmU2l6ZSs9bGVuZ3RoQnl0ZXNVVEY4KHN0cmluZykrMX1IRUFQVTMyW3BlbnZpcm9uX2J1Zl9zaXplPj4yXT1idWZTaXplO3JldHVybiAwfTtmdW5jdGlvbiBfZmRfY2xvc2UoZmQpe3RyeXt2YXIgc3RyZWFtPVNZU0NBTExTLmdldFN0cmVhbUZyb21GRChmZCk7RlMuY2xvc2Uoc3RyZWFtKTtyZXR1cm4gMH1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuIGUuZXJybm99fWZ1bmN0aW9uIF9mZF9mZHN0YXRfZ2V0KGZkLHBidWYpe3RyeXt2YXIgcmlnaHRzQmFzZT0wO3ZhciByaWdodHNJbmhlcml0aW5nPTA7dmFyIGZsYWdzPTA7e3ZhciBzdHJlYW09U1lTQ0FMTFMuZ2V0U3RyZWFtRnJvbUZEKGZkKTt2YXIgdHlwZT1zdHJlYW0udHR5PzI6RlMuaXNEaXIoc3RyZWFtLm1vZGUpPzM6RlMuaXNMaW5rKHN0cmVhbS5tb2RlKT83OjR9SEVBUDhbcGJ1Zl09dHlwZTtIRUFQMTZbcGJ1ZisyPj4xXT1mbGFnczt0ZW1wSTY0PVtyaWdodHNCYXNlPj4+MCwodGVtcERvdWJsZT1yaWdodHNCYXNlLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW3BidWYrOD4+Ml09dGVtcEk2NFswXSxIRUFQMzJbcGJ1ZisxMj4+Ml09dGVtcEk2NFsxXTt0ZW1wSTY0PVtyaWdodHNJbmhlcml0aW5nPj4+MCwodGVtcERvdWJsZT1yaWdodHNJbmhlcml0aW5nLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW3BidWYrMTY+PjJdPXRlbXBJNjRbMF0sSEVBUDMyW3BidWYrMjA+PjJdPXRlbXBJNjRbMV07cmV0dXJuIDB9Y2F0Y2goZSl7aWYodHlwZW9mIEZTPT1cInVuZGVmaW5lZFwifHwhKGUubmFtZT09PVwiRXJybm9FcnJvclwiKSl0aHJvdyBlO3JldHVybiBlLmVycm5vfX12YXIgZG9SZWFkdj0oc3RyZWFtLGlvdixpb3ZjbnQsb2Zmc2V0KT0+e3ZhciByZXQ9MDtmb3IodmFyIGk9MDtpPGlvdmNudDtpKyspe3ZhciBwdHI9SEVBUFUzMltpb3Y+PjJdO3ZhciBsZW49SEVBUFUzMltpb3YrND4+Ml07aW92Kz04O3ZhciBjdXJyPUZTLnJlYWQoc3RyZWFtLEhFQVA4LHB0cixsZW4sb2Zmc2V0KTtpZihjdXJyPDApcmV0dXJuLTE7cmV0Kz1jdXJyO2lmKGN1cnI8bGVuKWJyZWFrO2lmKHR5cGVvZiBvZmZzZXQhPVwidW5kZWZpbmVkXCIpe29mZnNldCs9Y3Vycn19cmV0dXJuIHJldH07ZnVuY3Rpb24gX2ZkX3JlYWQoZmQsaW92LGlvdmNudCxwbnVtKXt0cnl7dmFyIHN0cmVhbT1TWVNDQUxMUy5nZXRTdHJlYW1Gcm9tRkQoZmQpO3ZhciBudW09ZG9SZWFkdihzdHJlYW0saW92LGlvdmNudCk7SEVBUFUzMltwbnVtPj4yXT1udW07cmV0dXJuIDB9Y2F0Y2goZSl7aWYodHlwZW9mIEZTPT1cInVuZGVmaW5lZFwifHwhKGUubmFtZT09PVwiRXJybm9FcnJvclwiKSl0aHJvdyBlO3JldHVybiBlLmVycm5vfX1mdW5jdGlvbiBfZmRfc2VlayhmZCxvZmZzZXRfbG93LG9mZnNldF9oaWdoLHdoZW5jZSxuZXdPZmZzZXQpe3ZhciBvZmZzZXQ9Y29udmVydEkzMlBhaXJUb0k1M0NoZWNrZWQob2Zmc2V0X2xvdyxvZmZzZXRfaGlnaCk7dHJ5e2lmKGlzTmFOKG9mZnNldCkpcmV0dXJuIDYxO3ZhciBzdHJlYW09U1lTQ0FMTFMuZ2V0U3RyZWFtRnJvbUZEKGZkKTtGUy5sbHNlZWsoc3RyZWFtLG9mZnNldCx3aGVuY2UpO3RlbXBJNjQ9W3N0cmVhbS5wb3NpdGlvbj4+PjAsKHRlbXBEb3VibGU9c3RyZWFtLnBvc2l0aW9uLCtNYXRoLmFicyh0ZW1wRG91YmxlKT49MT90ZW1wRG91YmxlPjA/K01hdGguZmxvb3IodGVtcERvdWJsZS80Mjk0OTY3Mjk2KT4+PjA6fn4rTWF0aC5jZWlsKCh0ZW1wRG91YmxlLSsofn50ZW1wRG91YmxlPj4+MCkpLzQyOTQ5NjcyOTYpPj4+MDowKV0sSEVBUDMyW25ld09mZnNldD4+Ml09dGVtcEk2NFswXSxIRUFQMzJbbmV3T2Zmc2V0KzQ+PjJdPXRlbXBJNjRbMV07aWYoc3RyZWFtLmdldGRlbnRzJiZvZmZzZXQ9PT0wJiZ3aGVuY2U9PT0wKXN0cmVhbS5nZXRkZW50cz1udWxsO3JldHVybiAwfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4gZS5lcnJub319dmFyIF9mZF9zeW5jPWZ1bmN0aW9uKGZkKXtsZXQgaW5uZXJGdW5jPSgpPT57dHJ5e3ZhciBzdHJlYW09U1lTQ0FMTFMuZ2V0U3RyZWFtRnJvbUZEKGZkKTt2YXIgcnRuPXN0cmVhbS5zdHJlYW1fb3BzPy5mc3luYz8uKHN0cmVhbSk7cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmU9Pnt2YXIgbW91bnQ9c3RyZWFtLm5vZGUubW91bnQ7aWYobW91bnQ/LnR5cGUuc3luY2ZzKXttb3VudC50eXBlLnN5bmNmcyhtb3VudCxmYWxzZSxlcnI9PnJlc29sdmUoZXJyPzI5OjApKX1lbHNle3Jlc29sdmUocnRuKX19KX1jYXRjaChlKXtpZih0eXBlb2YgRlM9PVwidW5kZWZpbmVkXCJ8fCEoZS5uYW1lPT09XCJFcnJub0Vycm9yXCIpKXRocm93IGU7cmV0dXJuIGUuZXJybm99fTtyZXR1cm4gQXN5bmNpZnkuaGFuZGxlQXN5bmMoaW5uZXJGdW5jKX07X2ZkX3N5bmMuaXNBc3luYz10cnVlO3ZhciBkb1dyaXRldj0oc3RyZWFtLGlvdixpb3ZjbnQsb2Zmc2V0KT0+e3ZhciByZXQ9MDtmb3IodmFyIGk9MDtpPGlvdmNudDtpKyspe3ZhciBwdHI9SEVBUFUzMltpb3Y+PjJdO3ZhciBsZW49SEVBUFUzMltpb3YrND4+Ml07aW92Kz04O3ZhciBjdXJyPUZTLndyaXRlKHN0cmVhbSxIRUFQOCxwdHIsbGVuLG9mZnNldCk7aWYoY3VycjwwKXJldHVybi0xO3JldCs9Y3VycjtpZihjdXJyPGxlbil7YnJlYWt9aWYodHlwZW9mIG9mZnNldCE9XCJ1bmRlZmluZWRcIil7b2Zmc2V0Kz1jdXJyfX1yZXR1cm4gcmV0fTtmdW5jdGlvbiBfZmRfd3JpdGUoZmQsaW92LGlvdmNudCxwbnVtKXt0cnl7dmFyIHN0cmVhbT1TWVNDQUxMUy5nZXRTdHJlYW1Gcm9tRkQoZmQpO3ZhciBudW09ZG9Xcml0ZXYoc3RyZWFtLGlvdixpb3ZjbnQpO0hFQVBVMzJbcG51bT4+Ml09bnVtO3JldHVybiAwfWNhdGNoKGUpe2lmKHR5cGVvZiBGUz09XCJ1bmRlZmluZWRcInx8IShlLm5hbWU9PT1cIkVycm5vRXJyb3JcIikpdGhyb3cgZTtyZXR1cm4gZS5lcnJub319dmFyIGFkYXB0ZXJzX3N1cHBvcnQ9ZnVuY3Rpb24oKXtjb25zdCBoYW5kbGVBc3luYz10eXBlb2YgQXN5bmNpZnk9PT1cIm9iamVjdFwiP0FzeW5jaWZ5LmhhbmRsZUFzeW5jLmJpbmQoQXN5bmNpZnkpOm51bGw7TW9kdWxlW1wiaGFuZGxlQXN5bmNcIl09aGFuZGxlQXN5bmM7Y29uc3QgdGFyZ2V0cz1uZXcgTWFwO01vZHVsZVtcInNldENhbGxiYWNrXCJdPShrZXksdGFyZ2V0KT0+dGFyZ2V0cy5zZXQoa2V5LHRhcmdldCk7TW9kdWxlW1wiZ2V0Q2FsbGJhY2tcIl09a2V5PT50YXJnZXRzLmdldChrZXkpO01vZHVsZVtcImRlbGV0ZUNhbGxiYWNrXCJdPWtleT0+dGFyZ2V0cy5kZWxldGUoa2V5KTthZGFwdGVyc19zdXBwb3J0PWZ1bmN0aW9uKGlzQXN5bmMsa2V5LC4uLmFyZ3Mpe2NvbnN0IHJlY2VpdmVyPXRhcmdldHMuZ2V0KGtleSk7bGV0IG1ldGhvZE5hbWU9bnVsbDtjb25zdCBmPXR5cGVvZiByZWNlaXZlcj09PVwiZnVuY3Rpb25cIj9yZWNlaXZlcjpyZWNlaXZlclttZXRob2ROYW1lPVVURjhUb1N0cmluZyhhcmdzLnNoaWZ0KCkpXTtpZihpc0FzeW5jKXtpZihoYW5kbGVBc3luYyl7cmV0dXJuIGhhbmRsZUFzeW5jKCgpPT5mLmFwcGx5KHJlY2VpdmVyLGFyZ3MpKX10aHJvdyBuZXcgRXJyb3IoXCJTeW5jaHJvbm91cyBXZWJBc3NlbWJseSBjYW5ub3QgY2FsbCBhc3luYyBmdW5jdGlvblwiKX1jb25zdCByZXN1bHQ9Zi5hcHBseShyZWNlaXZlcixhcmdzKTtpZih0eXBlb2YgcmVzdWx0Py50aGVuPT1cImZ1bmN0aW9uXCIpe2NvbnNvbGUuZXJyb3IoXCJ1bmV4cGVjdGVkIFByb21pc2VcIixmKTt0aHJvdyBuZXcgRXJyb3IoYCR7bWV0aG9kTmFtZX0gdW5leHBlY3RlZGx5IHJldHVybmVkIGEgUHJvbWlzZWApfXJldHVybiByZXN1bHR9fTtmdW5jdGlvbiBfaXBwKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KGZhbHNlLC4uLmFyZ3MpfWZ1bmN0aW9uIF9pcHBfYXN5bmMoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQodHJ1ZSwuLi5hcmdzKX1faXBwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwaXBwcHAoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX2lwcGlwcHBwX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X2lwcGlwcHBwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcCguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydChmYWxzZSwuLi5hcmdzKX1mdW5jdGlvbiBfaXBwcF9hc3luYyguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydCh0cnVlLC4uLmFyZ3MpfV9pcHBwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcGkoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX2lwcHBpX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X2lwcHBpX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcGlpaSguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydChmYWxzZSwuLi5hcmdzKX1mdW5jdGlvbiBfaXBwcGlpaV9hc3luYyguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydCh0cnVlLC4uLmFyZ3MpfV9pcHBwaWlpX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcGlpaXAoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX2lwcHBpaWlwX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X2lwcHBpaWlwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcGlwKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KGZhbHNlLC4uLmFyZ3MpfWZ1bmN0aW9uIF9pcHBwaXBfYXN5bmMoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQodHJ1ZSwuLi5hcmdzKX1faXBwcGlwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcGooLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX2lwcHBqX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X2lwcHBqX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcHAoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX2lwcHBwX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X2lwcHBwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcHBpKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KGZhbHNlLC4uLmFyZ3MpfWZ1bmN0aW9uIF9pcHBwcGlfYXN5bmMoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQodHJ1ZSwuLi5hcmdzKX1faXBwcHBpX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcHBpaiguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydChmYWxzZSwuLi5hcmdzKX1mdW5jdGlvbiBfaXBwcHBpal9hc3luYyguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydCh0cnVlLC4uLmFyZ3MpfV9pcHBwcGlqX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcHBpcCguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydChmYWxzZSwuLi5hcmdzKX1mdW5jdGlvbiBfaXBwcHBpcF9hc3luYyguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydCh0cnVlLC4uLmFyZ3MpfV9pcHBwcGlwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfaXBwcHBwaXAoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX2lwcHBwcGlwX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X2lwcHBwcGlwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfdnBwaXBwaWkoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQoZmFsc2UsLi4uYXJncyl9ZnVuY3Rpb24gX3ZwcGlwcGlpX2FzeW5jKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KHRydWUsLi4uYXJncyl9X3ZwcGlwcGlpX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfdnBwcCguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydChmYWxzZSwuLi5hcmdzKX1mdW5jdGlvbiBfdnBwcF9hc3luYyguLi5hcmdzKXtyZXR1cm4gYWRhcHRlcnNfc3VwcG9ydCh0cnVlLC4uLmFyZ3MpfV92cHBwX2FzeW5jLmlzQXN5bmM9dHJ1ZTtmdW5jdGlvbiBfdnBwcGlwKC4uLmFyZ3Mpe3JldHVybiBhZGFwdGVyc19zdXBwb3J0KGZhbHNlLC4uLmFyZ3MpfWZ1bmN0aW9uIF92cHBwaXBfYXN5bmMoLi4uYXJncyl7cmV0dXJuIGFkYXB0ZXJzX3N1cHBvcnQodHJ1ZSwuLi5hcmdzKX1fdnBwcGlwX2FzeW5jLmlzQXN5bmM9dHJ1ZTt2YXIgQXN5bmNpZnk9e2luc3RydW1lbnRXYXNtSW1wb3J0cyhpbXBvcnRzKXt2YXIgaW1wb3J0UGF0dGVybj0vXihpcHB8aXBwX2FzeW5jfGlwcHB8aXBwcF9hc3luY3x2cHBwfHZwcHBfYXN5bmN8aXBwcGp8aXBwcGpfYXN5bmN8aXBwcGl8aXBwcGlfYXN5bmN8aXBwcHB8aXBwcHBfYXN5bmN8aXBwcGlwfGlwcHBpcF9hc3luY3x2cHBwaXB8dnBwcGlwX2FzeW5jfGlwcHBwaXxpcHBwcGlfYXN5bmN8aXBwcHBpanxpcHBwcGlqX2FzeW5jfGlwcHBpaWl8aXBwcGlpaV9hc3luY3xpcHBwcGlwfGlwcHBwaXBfYXN5bmN8aXBwaXBwcHB8aXBwaXBwcHBfYXN5bmN8aXBwcHBwaXB8aXBwcHBwaXBfYXN5bmN8aXBwcGlpaXB8aXBwcGlpaXBfYXN5bmN8dnBwaXBwaWl8dnBwaXBwaWlfYXN5bmN8aW52b2tlXy4qfF9fYXN5bmNqc19fLiopJC87Zm9yKGxldFt4LG9yaWdpbmFsXW9mIE9iamVjdC5lbnRyaWVzKGltcG9ydHMpKXtpZih0eXBlb2Ygb3JpZ2luYWw9PVwiZnVuY3Rpb25cIil7bGV0IGlzQXN5bmNpZnlJbXBvcnQ9b3JpZ2luYWwuaXNBc3luY3x8aW1wb3J0UGF0dGVybi50ZXN0KHgpO2lmKGlzQXN5bmNpZnlJbXBvcnQpe2ltcG9ydHNbeF09b3JpZ2luYWw9bmV3IFdlYkFzc2VtYmx5LlN1c3BlbmRpbmcob3JpZ2luYWwpfX19fSxpbnN0cnVtZW50V2FzbUV4cG9ydHMoZXhwb3J0cyl7dmFyIGV4cG9ydFBhdHRlcm49L14oc3FsaXRlM19jbG9zZXxzcWxpdGUzX2ZpbmFsaXplfHNxbGl0ZTNfb3Blbl92MnxzcWxpdGUzX3ByZXBhcmV8c3FsaXRlM19wcmVwYXJlMTZ8c3FsaXRlM19wcmVwYXJlX3YyfHNxbGl0ZTNfcHJlcGFyZTE2X3YyfHNxbGl0ZTNfcHJlcGFyZV92M3xzcWxpdGUzX3ByZXBhcmUxNl92M3xzcWxpdGUzX3Jlc2V0fHNxbGl0ZTNfc3RlcHxtYWlufF9fbWFpbl9hcmdjX2FyZ3YpJC87QXN5bmNpZnkuYXN5bmNFeHBvcnRzPW5ldyBTZXQ7dmFyIHJldD17fTtmb3IobGV0W3gsb3JpZ2luYWxdb2YgT2JqZWN0LmVudHJpZXMoZXhwb3J0cykpe2lmKHR5cGVvZiBvcmlnaW5hbD09XCJmdW5jdGlvblwiKXtsZXQgaXNBc3luY2lmeUV4cG9ydD1leHBvcnRQYXR0ZXJuLnRlc3QoeCk7aWYoaXNBc3luY2lmeUV4cG9ydCl7QXN5bmNpZnkuYXN5bmNFeHBvcnRzLmFkZChvcmlnaW5hbCk7b3JpZ2luYWw9QXN5bmNpZnkubWFrZUFzeW5jRnVuY3Rpb24ob3JpZ2luYWwpfXJldFt4XT1vcmlnaW5hbH1lbHNle3JldFt4XT1vcmlnaW5hbH19cmV0dXJuIHJldH0sYXN5bmNFeHBvcnRzOm51bGwsaXNBc3luY0V4cG9ydChmdW5jKXtyZXR1cm4gQXN5bmNpZnkuYXN5bmNFeHBvcnRzPy5oYXMoZnVuYyl9LGhhbmRsZUFzeW5jOmFzeW5jIHN0YXJ0QXN5bmM9Pnt0cnl7cmV0dXJuIGF3YWl0IHN0YXJ0QXN5bmMoKX1maW5hbGx5e319LGhhbmRsZVNsZWVwOnN0YXJ0QXN5bmM9PkFzeW5jaWZ5LmhhbmRsZUFzeW5jKCgpPT5uZXcgUHJvbWlzZShzdGFydEFzeW5jKSksbWFrZUFzeW5jRnVuY3Rpb24ob3JpZ2luYWwpe3JldHVybiBXZWJBc3NlbWJseS5wcm9taXNpbmcob3JpZ2luYWwpfX07dmFyIHdhc21UYWJsZU1pcnJvcj1bXTt2YXIgZ2V0V2FzbVRhYmxlRW50cnk9ZnVuY1B0cj0+e3ZhciBmdW5jPXdhc21UYWJsZU1pcnJvcltmdW5jUHRyXTtpZighZnVuYyl7d2FzbVRhYmxlTWlycm9yW2Z1bmNQdHJdPWZ1bmM9d2FzbVRhYmxlLmdldChmdW5jUHRyKTtpZihBc3luY2lmeS5pc0FzeW5jRXhwb3J0KGZ1bmMpKXt3YXNtVGFibGVNaXJyb3JbZnVuY1B0cl09ZnVuYz1Bc3luY2lmeS5tYWtlQXN5bmNGdW5jdGlvbihmdW5jKX19cmV0dXJuIGZ1bmN9O3ZhciB1cGRhdGVUYWJsZU1hcD0ob2Zmc2V0LGNvdW50KT0+e2lmKGZ1bmN0aW9uc0luVGFibGVNYXApe2Zvcih2YXIgaT1vZmZzZXQ7aTxvZmZzZXQrY291bnQ7aSsrKXt2YXIgaXRlbT1nZXRXYXNtVGFibGVFbnRyeShpKTtpZihpdGVtKXtmdW5jdGlvbnNJblRhYmxlTWFwLnNldChpdGVtLGkpfX19fTt2YXIgZnVuY3Rpb25zSW5UYWJsZU1hcDt2YXIgZ2V0RnVuY3Rpb25BZGRyZXNzPWZ1bmM9PntpZighZnVuY3Rpb25zSW5UYWJsZU1hcCl7ZnVuY3Rpb25zSW5UYWJsZU1hcD1uZXcgV2Vha01hcDt1cGRhdGVUYWJsZU1hcCgwLHdhc21UYWJsZS5sZW5ndGgpfXJldHVybiBmdW5jdGlvbnNJblRhYmxlTWFwLmdldChmdW5jKXx8MH07dmFyIGZyZWVUYWJsZUluZGV4ZXM9W107dmFyIGdldEVtcHR5VGFibGVTbG90PSgpPT57aWYoZnJlZVRhYmxlSW5kZXhlcy5sZW5ndGgpe3JldHVybiBmcmVlVGFibGVJbmRleGVzLnBvcCgpfXJldHVybiB3YXNtVGFibGVbXCJncm93XCJdKDEpfTt2YXIgc2V0V2FzbVRhYmxlRW50cnk9KGlkeCxmdW5jKT0+e3dhc21UYWJsZS5zZXQoaWR4LGZ1bmMpO3dhc21UYWJsZU1pcnJvcltpZHhdPXdhc21UYWJsZS5nZXQoaWR4KX07dmFyIHVsZWIxMjhFbmNvZGVXaXRoTGVuPWFycj0+e2NvbnN0IG49YXJyLmxlbmd0aDtyZXR1cm5bbiUxMjh8MTI4LG4+PjcsLi4uYXJyXX07dmFyIHdhc21UeXBlQ29kZXM9e2k6MTI3LHA6MTI3LGo6MTI2LGY6MTI1LGQ6MTI0LGU6MTExfTt2YXIgZ2VuZXJhdGVUeXBlUGFjaz10eXBlcz0+dWxlYjEyOEVuY29kZVdpdGhMZW4oQXJyYXkuZnJvbSh0eXBlcyx0eXBlPT57dmFyIGNvZGU9d2FzbVR5cGVDb2Rlc1t0eXBlXTtyZXR1cm4gY29kZX0pKTt2YXIgY29udmVydEpzRnVuY3Rpb25Ub1dhc209KGZ1bmMsc2lnKT0+e3ZhciBieXRlcz1VaW50OEFycmF5Lm9mKDAsOTcsMTE1LDEwOSwxLDAsMCwwLDEsLi4udWxlYjEyOEVuY29kZVdpdGhMZW4oWzEsOTYsLi4uZ2VuZXJhdGVUeXBlUGFjayhzaWcuc2xpY2UoMSkpLC4uLmdlbmVyYXRlVHlwZVBhY2soc2lnWzBdPT09XCJ2XCI/XCJcIjpzaWdbMF0pXSksMiw3LDEsMSwxMDEsMSwxMDIsMCwwLDcsNSwxLDEsMTAyLDAsMCk7dmFyIG1vZHVsZT1uZXcgV2ViQXNzZW1ibHkuTW9kdWxlKGJ5dGVzKTt2YXIgaW5zdGFuY2U9bmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKG1vZHVsZSx7ZTp7ZjpmdW5jfX0pO3ZhciB3cmFwcGVkRnVuYz1pbnN0YW5jZS5leHBvcnRzW1wiZlwiXTtyZXR1cm4gd3JhcHBlZEZ1bmN9O3ZhciBhZGRGdW5jdGlvbj0oZnVuYyxzaWcpPT57dmFyIHJ0bj1nZXRGdW5jdGlvbkFkZHJlc3MoZnVuYyk7aWYocnRuKXtyZXR1cm4gcnRufXZhciByZXQ9Z2V0RW1wdHlUYWJsZVNsb3QoKTt0cnl7c2V0V2FzbVRhYmxlRW50cnkocmV0LGZ1bmMpfWNhdGNoKGVycil7aWYoIShlcnIgaW5zdGFuY2VvZiBUeXBlRXJyb3IpKXt0aHJvdyBlcnJ9dmFyIHdyYXBwZWQ9Y29udmVydEpzRnVuY3Rpb25Ub1dhc20oZnVuYyxzaWcpO3NldFdhc21UYWJsZUVudHJ5KHJldCx3cmFwcGVkKX1mdW5jdGlvbnNJblRhYmxlTWFwLnNldChmdW5jLHJldCk7cmV0dXJuIHJldH07dmFyIGdldENGdW5jPWlkZW50PT57dmFyIGZ1bmM9TW9kdWxlW1wiX1wiK2lkZW50XTtyZXR1cm4gZnVuY307dmFyIHdyaXRlQXJyYXlUb01lbW9yeT0oYXJyYXksYnVmZmVyKT0+e0hFQVA4LnNldChhcnJheSxidWZmZXIpfTt2YXIgc3RhY2tBbGxvYz1zej0+X19lbXNjcmlwdGVuX3N0YWNrX2FsbG9jKHN6KTt2YXIgc3RyaW5nVG9VVEY4T25TdGFjaz1zdHI9Pnt2YXIgc2l6ZT1sZW5ndGhCeXRlc1VURjgoc3RyKSsxO3ZhciByZXQ9c3RhY2tBbGxvYyhzaXplKTtzdHJpbmdUb1VURjgoc3RyLHJldCxzaXplKTtyZXR1cm4gcmV0fTt2YXIgY2NhbGw9KGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsYXJncyxvcHRzKT0+e3ZhciB0b0M9e3N0cmluZzpzdHI9Pnt2YXIgcmV0PTA7aWYoc3RyIT09bnVsbCYmc3RyIT09dW5kZWZpbmVkJiZzdHIhPT0wKXtyZXQ9c3RyaW5nVG9VVEY4T25TdGFjayhzdHIpfXJldHVybiByZXR9LGFycmF5OmFycj0+e3ZhciByZXQ9c3RhY2tBbGxvYyhhcnIubGVuZ3RoKTt3cml0ZUFycmF5VG9NZW1vcnkoYXJyLHJldCk7cmV0dXJuIHJldH19O2Z1bmN0aW9uIGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpe2lmKHJldHVyblR5cGU9PT1cInN0cmluZ1wiKXtyZXR1cm4gVVRGOFRvU3RyaW5nKHJldCl9aWYocmV0dXJuVHlwZT09PVwiYm9vbGVhblwiKXJldHVybiBCb29sZWFuKHJldCk7cmV0dXJuIHJldH12YXIgZnVuYz1nZXRDRnVuYyhpZGVudCk7dmFyIGNBcmdzPVtdO3ZhciBzdGFjaz0wO2lmKGFyZ3Mpe2Zvcih2YXIgaT0wO2k8YXJncy5sZW5ndGg7aSsrKXt2YXIgY29udmVydGVyPXRvQ1thcmdUeXBlc1tpXV07aWYoY29udmVydGVyKXtpZihzdGFjaz09PTApc3RhY2s9c3RhY2tTYXZlKCk7Y0FyZ3NbaV09Y29udmVydGVyKGFyZ3NbaV0pfWVsc2V7Y0FyZ3NbaV09YXJnc1tpXX19fXZhciByZXQ9ZnVuYyguLi5jQXJncyk7ZnVuY3Rpb24gb25Eb25lKHJldCl7aWYoc3RhY2shPT0wKXN0YWNrUmVzdG9yZShzdGFjayk7cmV0dXJuIGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpfXZhciBhc3luY01vZGU9b3B0cz8uYXN5bmM7aWYoYXN5bmNNb2RlKXJldHVybiByZXQudGhlbihvbkRvbmUpO3JldD1vbkRvbmUocmV0KTtyZXR1cm4gcmV0fTt2YXIgY3dyYXA9KGlkZW50LHJldHVyblR5cGUsYXJnVHlwZXMsb3B0cyk9Pnt2YXIgbnVtZXJpY0FyZ3M9IWFyZ1R5cGVzfHxhcmdUeXBlcy5ldmVyeSh0eXBlPT50eXBlPT09XCJudW1iZXJcInx8dHlwZT09PVwiYm9vbGVhblwiKTt2YXIgbnVtZXJpY1JldD1yZXR1cm5UeXBlIT09XCJzdHJpbmdcIjtpZihudW1lcmljUmV0JiZudW1lcmljQXJncyYmIW9wdHMpe3JldHVybiBnZXRDRnVuYyhpZGVudCl9cmV0dXJuKC4uLmFyZ3MpPT5jY2FsbChpZGVudCxyZXR1cm5UeXBlLGFyZ1R5cGVzLGFyZ3Msb3B0cyl9O3ZhciBnZXRUZW1wUmV0MD12YWw9Pl9fZW1zY3JpcHRlbl90ZW1wcmV0X2dldCgpO3ZhciBzdHJpbmdUb1VURjE2PShzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSk9PnttYXhCeXRlc1RvV3JpdGU/Pz0yMTQ3NDgzNjQ3O2lmKG1heEJ5dGVzVG9Xcml0ZTwyKXJldHVybiAwO21heEJ5dGVzVG9Xcml0ZS09Mjt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBudW1DaGFyc1RvV3JpdGU9bWF4Qnl0ZXNUb1dyaXRlPHN0ci5sZW5ndGgqMj9tYXhCeXRlc1RvV3JpdGUvMjpzdHIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bnVtQ2hhcnNUb1dyaXRlOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO0hFQVAxNltvdXRQdHI+PjFdPWNvZGVVbml0O291dFB0cis9Mn1IRUFQMTZbb3V0UHRyPj4xXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9O3ZhciBzdHJpbmdUb1VURjMyPShzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSk9PnttYXhCeXRlc1RvV3JpdGU/Pz0yMTQ3NDgzNjQ3O2lmKG1heEJ5dGVzVG9Xcml0ZTw0KXJldHVybiAwO3ZhciBzdGFydFB0cj1vdXRQdHI7dmFyIGVuZFB0cj1zdGFydFB0cittYXhCeXRlc1RvV3JpdGUtNDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVBvaW50PXN0ci5jb2RlUG9pbnRBdChpKTtpZihjb2RlUG9pbnQ+NjU1MzUpe2krK31IRUFQMzJbb3V0UHRyPj4yXT1jb2RlUG9pbnQ7b3V0UHRyKz00O2lmKG91dFB0cis0PmVuZFB0cilicmVha31IRUFQMzJbb3V0UHRyPj4yXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9O3ZhciBBc2NpaVRvU3RyaW5nPXB0cj0+e3ZhciBzdHI9XCJcIjt3aGlsZSgxKXt2YXIgY2g9SEVBUFU4W3B0cisrXTtpZighY2gpcmV0dXJuIHN0cjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoY2gpfX07dmFyIFVURjE2RGVjb2Rlcj1uZXcgVGV4dERlY29kZXIoXCJ1dGYtMTZsZVwiKTt2YXIgVVRGMTZUb1N0cmluZz0ocHRyLG1heEJ5dGVzVG9SZWFkLGlnbm9yZU51bCk9Pnt2YXIgaWR4PXB0cj4+MTt2YXIgZW5kSWR4PWZpbmRTdHJpbmdFbmQoSEVBUFUxNixpZHgsbWF4Qnl0ZXNUb1JlYWQvMixpZ25vcmVOdWwpO3JldHVybiBVVEYxNkRlY29kZXIuZGVjb2RlKEhFQVBVMTYuc3ViYXJyYXkoaWR4LGVuZElkeCkpfTt2YXIgVVRGMzJUb1N0cmluZz0ocHRyLG1heEJ5dGVzVG9SZWFkLGlnbm9yZU51bCk9Pnt2YXIgc3RyPVwiXCI7dmFyIHN0YXJ0SWR4PXB0cj4+Mjtmb3IodmFyIGk9MDshKGk+PW1heEJ5dGVzVG9SZWFkLzQpO2krKyl7dmFyIHV0ZjMyPUhFQVBVMzJbc3RhcnRJZHgraV07aWYoIXV0ZjMyJiYhaWdub3JlTnVsKWJyZWFrO3N0cis9U3RyaW5nLmZyb21Db2RlUG9pbnQodXRmMzIpfXJldHVybiBzdHJ9O3ZhciBpbnRBcnJheVRvU3RyaW5nPWFycmF5PT57dmFyIHJldD1bXTtmb3IodmFyIGk9MDtpPGFycmF5Lmxlbmd0aDtpKyspe3ZhciBjaHI9YXJyYXlbaV07aWYoY2hyPjI1NSl7Y2hyJj0yNTV9cmV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpKX1yZXR1cm4gcmV0LmpvaW4oXCJcIil9O3ZhciBfZ2V0VGVtcFJldDA9Z2V0VGVtcFJldDA7RlMuY3JlYXRlUHJlbG9hZGVkRmlsZT1GU19jcmVhdGVQcmVsb2FkZWRGaWxlO0ZTLnByZWxvYWRGaWxlPUZTX3ByZWxvYWRGaWxlO0ZTLnN0YXRpY0luaXQoKTthZGFwdGVyc19zdXBwb3J0KCk7e2lmKE1vZHVsZVtcIm5vRXhpdFJ1bnRpbWVcIl0pbm9FeGl0UnVudGltZT1Nb2R1bGVbXCJub0V4aXRSdW50aW1lXCJdO2lmKE1vZHVsZVtcInByZWxvYWRQbHVnaW5zXCJdKXByZWxvYWRQbHVnaW5zPU1vZHVsZVtcInByZWxvYWRQbHVnaW5zXCJdO2lmKE1vZHVsZVtcInByaW50XCJdKW91dD1Nb2R1bGVbXCJwcmludFwiXTtpZihNb2R1bGVbXCJwcmludEVyclwiXSllcnI9TW9kdWxlW1wicHJpbnRFcnJcIl07aWYoTW9kdWxlW1wid2FzbUJpbmFyeVwiXSl3YXNtQmluYXJ5PU1vZHVsZVtcIndhc21CaW5hcnlcIl07aWYoTW9kdWxlW1wiYXJndW1lbnRzXCJdKWFyZ3VtZW50c189TW9kdWxlW1wiYXJndW1lbnRzXCJdO2lmKE1vZHVsZVtcInRoaXNQcm9ncmFtXCJdKXRoaXNQcm9ncmFtPU1vZHVsZVtcInRoaXNQcm9ncmFtXCJdO2lmKE1vZHVsZVtcInByZUluaXRcIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVJbml0XCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlSW5pdFwiXT1bTW9kdWxlW1wicHJlSW5pdFwiXV07d2hpbGUoTW9kdWxlW1wicHJlSW5pdFwiXS5sZW5ndGg+MCl7TW9kdWxlW1wicHJlSW5pdFwiXS5zaGlmdCgpKCl9fX1Nb2R1bGVbXCJnZXRUZW1wUmV0MFwiXT1nZXRUZW1wUmV0MDtNb2R1bGVbXCJjY2FsbFwiXT1jY2FsbDtNb2R1bGVbXCJjd3JhcFwiXT1jd3JhcDtNb2R1bGVbXCJhZGRGdW5jdGlvblwiXT1hZGRGdW5jdGlvbjtNb2R1bGVbXCJzZXRWYWx1ZVwiXT1zZXRWYWx1ZTtNb2R1bGVbXCJnZXRWYWx1ZVwiXT1nZXRWYWx1ZTtNb2R1bGVbXCJVVEY4VG9TdHJpbmdcIl09VVRGOFRvU3RyaW5nO01vZHVsZVtcInN0cmluZ1RvVVRGOFwiXT1zdHJpbmdUb1VURjg7TW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEY4XCJdPWxlbmd0aEJ5dGVzVVRGODtNb2R1bGVbXCJpbnRBcnJheUZyb21TdHJpbmdcIl09aW50QXJyYXlGcm9tU3RyaW5nO01vZHVsZVtcImludEFycmF5VG9TdHJpbmdcIl09aW50QXJyYXlUb1N0cmluZztNb2R1bGVbXCJBc2NpaVRvU3RyaW5nXCJdPUFzY2lpVG9TdHJpbmc7TW9kdWxlW1wiVVRGMTZUb1N0cmluZ1wiXT1VVEYxNlRvU3RyaW5nO01vZHVsZVtcInN0cmluZ1RvVVRGMTZcIl09c3RyaW5nVG9VVEYxNjtNb2R1bGVbXCJVVEYzMlRvU3RyaW5nXCJdPVVURjMyVG9TdHJpbmc7TW9kdWxlW1wic3RyaW5nVG9VVEYzMlwiXT1zdHJpbmdUb1VURjMyO01vZHVsZVtcIndyaXRlQXJyYXlUb01lbW9yeVwiXT13cml0ZUFycmF5VG9NZW1vcnk7TW9kdWxlW1wiX2dldFRlbXBSZXQwXCJdPV9nZXRUZW1wUmV0MDt2YXIgX3Bvd2Vyc3luY19pbml0X3N0YXRpYyxfc3FsaXRlM19zdGF0dXM2NCxfc3FsaXRlM19zdGF0dXMsX3NxbGl0ZTNfbXNpemUsX3NxbGl0ZTNfZGJfc3RhdHVzLF9zcWxpdGUzX3Zmc19maW5kLF9zcWxpdGUzX3Zmc19yZWdpc3Rlcixfc3FsaXRlM192ZnNfdW5yZWdpc3Rlcixfc3FsaXRlM19yZWxlYXNlX21lbW9yeSxfc3FsaXRlM19zb2Z0X2hlYXBfbGltaXQ2NCxfc3FsaXRlM19tZW1vcnlfdXNlZCxfc3FsaXRlM19oYXJkX2hlYXBfbGltaXQ2NCxfc3FsaXRlM19tZW1vcnlfaGlnaHdhdGVyLF9zcWxpdGUzX21hbGxvYyxfc3FsaXRlM19tYWxsb2M2NCxfc3FsaXRlM19mcmVlLF9zcWxpdGUzX3JlYWxsb2MsX3NxbGl0ZTNfcmVhbGxvYzY0LF9zcWxpdGUzX3N0cl92YXBwZW5kZixfc3FsaXRlM19zdHJfYXBwZW5kLF9zcWxpdGUzX3N0cl9hcHBlbmRjaGFyLF9zcWxpdGUzX3N0cl9hcHBlbmRhbGwsX3NxbGl0ZTNfc3RyX2FwcGVuZGYsX3NxbGl0ZTNfc3RyX2ZpbmlzaCxfc3FsaXRlM19zdHJfZXJyY29kZSxfc3FsaXRlM19zdHJfbGVuZ3RoLF9zcWxpdGUzX3N0cl92YWx1ZSxfc3FsaXRlM19zdHJfcmVzZXQsX3NxbGl0ZTNfc3RyX25ldyxfc3FsaXRlM192bXByaW50Zixfc3FsaXRlM19tcHJpbnRmLF9zcWxpdGUzX3ZzbnByaW50Zixfc3FsaXRlM19zbnByaW50Zixfc3FsaXRlM19sb2csX3NxbGl0ZTNfcmFuZG9tbmVzcyxfc3FsaXRlM19zdHJpY21wLF9zcWxpdGUzX3N0cm5pY21wLF9zcWxpdGUzX29zX2luaXQsX3NxbGl0ZTNfb3NfZW5kLF9zcWxpdGUzX3NlcmlhbGl6ZSxfc3FsaXRlM19wcmVwYXJlX3YyLF9zcWxpdGUzX3N0ZXAsX3NxbGl0ZTNfY29sdW1uX2ludDY0LF9zcWxpdGUzX3Jlc2V0LF9zcWxpdGUzX2V4ZWMsX3NxbGl0ZTNfY29sdW1uX2ludCxfc3FsaXRlM19maW5hbGl6ZSxfc3FsaXRlM19kZXNlcmlhbGl6ZSxfc3FsaXRlM19kYXRhYmFzZV9maWxlX29iamVjdCxfc3FsaXRlM19iYWNrdXBfaW5pdCxfc3FsaXRlM19iYWNrdXBfc3RlcCxfc3FsaXRlM19iYWNrdXBfZmluaXNoLF9zcWxpdGUzX2JhY2t1cF9yZW1haW5pbmcsX3NxbGl0ZTNfYmFja3VwX3BhZ2Vjb3VudCxfc3FsaXRlM19jbGVhcl9iaW5kaW5ncyxfc3FsaXRlM192YWx1ZV9ibG9iLF9zcWxpdGUzX3ZhbHVlX3RleHQsX3NxbGl0ZTNfdmFsdWVfYnl0ZXMsX3NxbGl0ZTNfdmFsdWVfYnl0ZXMxNixfc3FsaXRlM192YWx1ZV9kb3VibGUsX3NxbGl0ZTNfdmFsdWVfaW50LF9zcWxpdGUzX3ZhbHVlX2ludDY0LF9zcWxpdGUzX3ZhbHVlX3N1YnR5cGUsX3NxbGl0ZTNfdmFsdWVfcG9pbnRlcixfc3FsaXRlM192YWx1ZV90ZXh0MTYsX3NxbGl0ZTNfdmFsdWVfdGV4dDE2YmUsX3NxbGl0ZTNfdmFsdWVfdGV4dDE2bGUsX3NxbGl0ZTNfdmFsdWVfdHlwZSxfc3FsaXRlM192YWx1ZV9lbmNvZGluZyxfc3FsaXRlM192YWx1ZV9ub2NoYW5nZSxfc3FsaXRlM192YWx1ZV9mcm9tYmluZCxfc3FsaXRlM192YWx1ZV9kdXAsX3NxbGl0ZTNfdmFsdWVfZnJlZSxfc3FsaXRlM19yZXN1bHRfYmxvYixfc3FsaXRlM19yZXN1bHRfYmxvYjY0LF9zcWxpdGUzX3Jlc3VsdF9kb3VibGUsX3NxbGl0ZTNfcmVzdWx0X2Vycm9yLF9zcWxpdGUzX3Jlc3VsdF9lcnJvcjE2LF9zcWxpdGUzX3Jlc3VsdF9pbnQsX3NxbGl0ZTNfcmVzdWx0X2ludDY0LF9zcWxpdGUzX3Jlc3VsdF9udWxsLF9zcWxpdGUzX3Jlc3VsdF9wb2ludGVyLF9zcWxpdGUzX3Jlc3VsdF9zdWJ0eXBlLF9zcWxpdGUzX3Jlc3VsdF90ZXh0LF9zcWxpdGUzX3Jlc3VsdF90ZXh0NjQsX3NxbGl0ZTNfcmVzdWx0X3RleHQxNixfc3FsaXRlM19yZXN1bHRfdGV4dDE2YmUsX3NxbGl0ZTNfcmVzdWx0X3RleHQxNmxlLF9zcWxpdGUzX3Jlc3VsdF92YWx1ZSxfc3FsaXRlM19yZXN1bHRfZXJyb3JfdG9vYmlnLF9zcWxpdGUzX3Jlc3VsdF96ZXJvYmxvYixfc3FsaXRlM19yZXN1bHRfemVyb2Jsb2I2NCxfc3FsaXRlM19yZXN1bHRfZXJyb3JfY29kZSxfc3FsaXRlM19yZXN1bHRfZXJyb3Jfbm9tZW0sX3NxbGl0ZTNfdXNlcl9kYXRhLF9zcWxpdGUzX2NvbnRleHRfZGJfaGFuZGxlLF9zcWxpdGUzX3Z0YWJfbm9jaGFuZ2UsX3NxbGl0ZTNfdnRhYl9pbl9maXJzdCxfc3FsaXRlM192dGFiX2luX25leHQsX3NxbGl0ZTNfYWdncmVnYXRlX2NvbnRleHQsX3NxbGl0ZTNfZ2V0X2F1eGRhdGEsX3NxbGl0ZTNfc2V0X2F1eGRhdGEsX3NxbGl0ZTNfY29sdW1uX2NvdW50LF9zcWxpdGUzX2RhdGFfY291bnQsX3NxbGl0ZTNfY29sdW1uX2Jsb2IsX3NxbGl0ZTNfY29sdW1uX2J5dGVzLF9zcWxpdGUzX2NvbHVtbl9ieXRlczE2LF9zcWxpdGUzX2NvbHVtbl9kb3VibGUsX3NxbGl0ZTNfY29sdW1uX3RleHQsX3NxbGl0ZTNfY29sdW1uX3ZhbHVlLF9zcWxpdGUzX2NvbHVtbl90ZXh0MTYsX3NxbGl0ZTNfY29sdW1uX3R5cGUsX3NxbGl0ZTNfY29sdW1uX25hbWUsX3NxbGl0ZTNfY29sdW1uX25hbWUxNixfc3FsaXRlM19iaW5kX2Jsb2IsX3NxbGl0ZTNfYmluZF9ibG9iNjQsX3NxbGl0ZTNfYmluZF9kb3VibGUsX3NxbGl0ZTNfYmluZF9pbnQsX3NxbGl0ZTNfYmluZF9pbnQ2NCxfc3FsaXRlM19iaW5kX251bGwsX3NxbGl0ZTNfYmluZF9wb2ludGVyLF9zcWxpdGUzX2JpbmRfdGV4dCxfc3FsaXRlM19iaW5kX3RleHQ2NCxfc3FsaXRlM19iaW5kX3RleHQxNixfc3FsaXRlM19iaW5kX3ZhbHVlLF9zcWxpdGUzX2JpbmRfemVyb2Jsb2IsX3NxbGl0ZTNfYmluZF96ZXJvYmxvYjY0LF9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2NvdW50LF9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWUsX3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfaW5kZXgsX3NxbGl0ZTNfZGJfaGFuZGxlLF9zcWxpdGUzX3N0bXRfcmVhZG9ubHksX3NxbGl0ZTNfc3RtdF9pc2V4cGxhaW4sX3NxbGl0ZTNfc3RtdF9leHBsYWluLF9zcWxpdGUzX3N0bXRfYnVzeSxfc3FsaXRlM19uZXh0X3N0bXQsX3NxbGl0ZTNfc3RtdF9zdGF0dXMsX3NxbGl0ZTNfc3FsLF9zcWxpdGUzX2V4cGFuZGVkX3NxbCxfc3FsaXRlM192YWx1ZV9udW1lcmljX3R5cGUsX3NxbGl0ZTNfYmxvYl9vcGVuLF9zcWxpdGUzX2Jsb2JfY2xvc2UsX3NxbGl0ZTNfYmxvYl9yZWFkLF9zcWxpdGUzX2Jsb2Jfd3JpdGUsX3NxbGl0ZTNfYmxvYl9ieXRlcyxfc3FsaXRlM19ibG9iX3Jlb3Blbixfc3FsaXRlM19zZXRfYXV0aG9yaXplcixfc3FsaXRlM19zdHJnbG9iLF9zcWxpdGUzX3N0cmxpa2UsX3NxbGl0ZTNfZXJybXNnLF9zcWxpdGUzX2xvYWRfZXh0ZW5zaW9uLF9zcWxpdGUzX2VuYWJsZV9sb2FkX2V4dGVuc2lvbixfc3FsaXRlM19hdXRvX2V4dGVuc2lvbixfc3FsaXRlM19jYW5jZWxfYXV0b19leHRlbnNpb24sX3NxbGl0ZTNfcmVzZXRfYXV0b19leHRlbnNpb24sX3NxbGl0ZTNfcHJlcGFyZSxfc3FsaXRlM19wcmVwYXJlX3YzLF9zcWxpdGUzX3ByZXBhcmUxNixfc3FsaXRlM19wcmVwYXJlMTZfdjIsX3NxbGl0ZTNfcHJlcGFyZTE2X3YzLF9zcWxpdGUzX2dldF90YWJsZSxfc3FsaXRlM19mcmVlX3RhYmxlLF9zcWxpdGUzX2NyZWF0ZV9tb2R1bGUsX3NxbGl0ZTNfY3JlYXRlX21vZHVsZV92Mixfc3FsaXRlM19kcm9wX21vZHVsZXMsX3NxbGl0ZTNfZGVjbGFyZV92dGFiLF9zcWxpdGUzX3Z0YWJfb25fY29uZmxpY3QsX3NxbGl0ZTNfdnRhYl9jb25maWcsX3NxbGl0ZTNfdnRhYl9jb2xsYXRpb24sX3NxbGl0ZTNfdnRhYl9pbixfc3FsaXRlM192dGFiX3Joc192YWx1ZSxfc3FsaXRlM192dGFiX2Rpc3RpbmN0LF9zcWxpdGUzX2tleXdvcmRfbmFtZSxfc3FsaXRlM19rZXl3b3JkX2NvdW50LF9zcWxpdGUzX2tleXdvcmRfY2hlY2ssX3NxbGl0ZTNfY29tcGxldGUsX3NxbGl0ZTNfY29tcGxldGUxNixfc3FsaXRlM19saWJ2ZXJzaW9uLF9zcWxpdGUzX2xpYnZlcnNpb25fbnVtYmVyLF9zcWxpdGUzX3RocmVhZHNhZmUsX3NxbGl0ZTNfaW5pdGlhbGl6ZSxfc3FsaXRlM19zaHV0ZG93bixfc3FsaXRlM19jb25maWcsX3NxbGl0ZTNfZGJfbXV0ZXgsX3NxbGl0ZTNfZGJfcmVsZWFzZV9tZW1vcnksX3NxbGl0ZTNfZGJfY2FjaGVmbHVzaCxfc3FsaXRlM19kYl9jb25maWcsX3NxbGl0ZTNfbGFzdF9pbnNlcnRfcm93aWQsX3NxbGl0ZTNfc2V0X2xhc3RfaW5zZXJ0X3Jvd2lkLF9zcWxpdGUzX2NoYW5nZXM2NCxfc3FsaXRlM19jaGFuZ2VzLF9zcWxpdGUzX3RvdGFsX2NoYW5nZXM2NCxfc3FsaXRlM190b3RhbF9jaGFuZ2VzLF9zcWxpdGUzX3R4bl9zdGF0ZSxfc3FsaXRlM19jbG9zZSxfc3FsaXRlM19jbG9zZV92Mixfc3FsaXRlM19idXN5X2hhbmRsZXIsX3NxbGl0ZTNfcHJvZ3Jlc3NfaGFuZGxlcixfc3FsaXRlM19idXN5X3RpbWVvdXQsX3NxbGl0ZTNfaW50ZXJydXB0LF9zcWxpdGUzX2lzX2ludGVycnVwdGVkLF9zcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbixfc3FsaXRlM19jcmVhdGVfZnVuY3Rpb25fdjIsX3NxbGl0ZTNfY3JlYXRlX3dpbmRvd19mdW5jdGlvbixfc3FsaXRlM19jcmVhdGVfZnVuY3Rpb24xNixfc3FsaXRlM19vdmVybG9hZF9mdW5jdGlvbixfc3FsaXRlM190cmFjZV92Mixfc3FsaXRlM19jb21taXRfaG9vayxfc3FsaXRlM191cGRhdGVfaG9vayxfc3FsaXRlM19yb2xsYmFja19ob29rLF9zcWxpdGUzX2F1dG92YWN1dW1fcGFnZXMsX3NxbGl0ZTNfd2FsX2F1dG9jaGVja3BvaW50LF9zcWxpdGUzX3dhbF9ob29rLF9zcWxpdGUzX3dhbF9jaGVja3BvaW50X3YyLF9zcWxpdGUzX3dhbF9jaGVja3BvaW50LF9zcWxpdGUzX2Vycm9yX29mZnNldCxfc3FsaXRlM19lcnJtc2cxNixfc3FsaXRlM19lcnJjb2RlLF9zcWxpdGUzX2V4dGVuZGVkX2VycmNvZGUsX3NxbGl0ZTNfc3lzdGVtX2Vycm5vLF9zcWxpdGUzX2VycnN0cixfc3FsaXRlM19saW1pdCxfc3FsaXRlM19vcGVuLF9zcWxpdGUzX29wZW5fdjIsX3NxbGl0ZTNfb3BlbjE2LF9zcWxpdGUzX2NyZWF0ZV9jb2xsYXRpb24sX3NxbGl0ZTNfY3JlYXRlX2NvbGxhdGlvbl92Mixfc3FsaXRlM19jcmVhdGVfY29sbGF0aW9uMTYsX3NxbGl0ZTNfY29sbGF0aW9uX25lZWRlZCxfc3FsaXRlM19jb2xsYXRpb25fbmVlZGVkMTYsX3NxbGl0ZTNfZ2V0X2NsaWVudGRhdGEsX3NxbGl0ZTNfc2V0X2NsaWVudGRhdGEsX3NxbGl0ZTNfZ2V0X2F1dG9jb21taXQsX3NxbGl0ZTNfdGFibGVfY29sdW1uX21ldGFkYXRhLF9zcWxpdGUzX3NsZWVwLF9zcWxpdGUzX2V4dGVuZGVkX3Jlc3VsdF9jb2Rlcyxfc3FsaXRlM19maWxlX2NvbnRyb2wsX3NxbGl0ZTNfdGVzdF9jb250cm9sLF9zcWxpdGUzX2NyZWF0ZV9maWxlbmFtZSxfc3FsaXRlM19mcmVlX2ZpbGVuYW1lLF9zcWxpdGUzX3VyaV9wYXJhbWV0ZXIsX3NxbGl0ZTNfdXJpX2tleSxfc3FsaXRlM191cmlfYm9vbGVhbixfc3FsaXRlM191cmlfaW50NjQsX3NxbGl0ZTNfZmlsZW5hbWVfZGF0YWJhc2UsX3NxbGl0ZTNfZmlsZW5hbWVfam91cm5hbCxfc3FsaXRlM19maWxlbmFtZV93YWwsX3NxbGl0ZTNfZGJfbmFtZSxfc3FsaXRlM19kYl9maWxlbmFtZSxfc3FsaXRlM19kYl9yZWFkb25seSxfc3FsaXRlM19jb21waWxlb3B0aW9uX3VzZWQsX3NxbGl0ZTNfY29tcGlsZW9wdGlvbl9nZXQsX3NxbGl0ZTNfc291cmNlaWQsX21lbWNtcCxfbWFsbG9jLF9mcmVlLF9SZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9ucyxfZ2V0U3FsaXRlRnJlZSxfbWFpbixfbGliYXV0aG9yaXplcl9zZXRfYXV0aG9yaXplcixfbGliZnVuY3Rpb25fY3JlYXRlX2Z1bmN0aW9uLF9saWJob29rX2NvbW1pdF9ob29rLF9saWJob29rX3VwZGF0ZV9ob29rLF9saWJwcm9ncmVzc19wcm9ncmVzc19oYW5kbGVyLF9saWJ2ZnNfdmZzX3JlZ2lzdGVyLF9tZW1jcHksX21lbXNldCxfZW1zY3JpcHRlbl9idWlsdGluX21lbWFsaWduLF9fZW1zY3JpcHRlbl90aW1lb3V0LF9fZW1zY3JpcHRlbl90ZW1wcmV0X2dldCxfX2Vtc2NyaXB0ZW5fc3RhY2tfcmVzdG9yZSxfX2Vtc2NyaXB0ZW5fc3RhY2tfYWxsb2MsX2Vtc2NyaXB0ZW5fc3RhY2tfZ2V0X2N1cnJlbnQsZHluQ2FsbF92aWlpaWosZHluQ2FsbF92aWppaSxkeW5DYWxsX2lpaWlqLGR5bkNhbGxfdmlqaSxkeW5DYWxsX2lpaixkeW5DYWxsX2lpamlpLGR5bkNhbGxfaWlqaSxkeW5DYWxsX2lpaWlpaWosZHluQ2FsbF9paWlqLGR5bkNhbGxfamlpLGR5bkNhbGxfamksZHluQ2FsbF92aWosZHluQ2FsbF9paWlpaWppaSxkeW5DYWxsX2osZHluQ2FsbF9qaixkeW5DYWxsX2ppaWosZHluQ2FsbF9paWlpamksZHluQ2FsbF9paWlpamlpLGR5bkNhbGxfaWosZHluQ2FsbF92aWlqaSxkeW5DYWxsX3ZpaWppaSxkeW5DYWxsX2lpaWlqamksbWVtb3J5LF9zcWxpdGUzX3ZlcnNpb24sX19pbmRpcmVjdF9mdW5jdGlvbl90YWJsZSx3YXNtTWVtb3J5LHdhc21UYWJsZTtmdW5jdGlvbiBhc3NpZ25XYXNtRXhwb3J0cyh3YXNtRXhwb3J0cyl7X3Bvd2Vyc3luY19pbml0X3N0YXRpYz1Nb2R1bGVbXCJfcG93ZXJzeW5jX2luaXRfc3RhdGljXCJdPXdhc21FeHBvcnRzW1wicG93ZXJzeW5jX2luaXRfc3RhdGljXCJdO19zcWxpdGUzX3N0YXR1czY0PU1vZHVsZVtcIl9zcWxpdGUzX3N0YXR1czY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdGF0dXM2NFwiXTtfc3FsaXRlM19zdGF0dXM9TW9kdWxlW1wiX3NxbGl0ZTNfc3RhdHVzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdGF0dXNcIl07X3NxbGl0ZTNfbXNpemU9TW9kdWxlW1wiX3NxbGl0ZTNfbXNpemVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX21zaXplXCJdO19zcWxpdGUzX2RiX3N0YXR1cz1Nb2R1bGVbXCJfc3FsaXRlM19kYl9zdGF0dXNcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2RiX3N0YXR1c1wiXTtfc3FsaXRlM192ZnNfZmluZD1Nb2R1bGVbXCJfc3FsaXRlM192ZnNfZmluZFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmZzX2ZpbmRcIl07X3NxbGl0ZTNfdmZzX3JlZ2lzdGVyPU1vZHVsZVtcIl9zcWxpdGUzX3Zmc19yZWdpc3RlclwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmZzX3JlZ2lzdGVyXCJdO19zcWxpdGUzX3Zmc191bnJlZ2lzdGVyPU1vZHVsZVtcIl9zcWxpdGUzX3Zmc191bnJlZ2lzdGVyXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192ZnNfdW5yZWdpc3RlclwiXTtfc3FsaXRlM19yZWxlYXNlX21lbW9yeT1Nb2R1bGVbXCJfc3FsaXRlM19yZWxlYXNlX21lbW9yeVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVsZWFzZV9tZW1vcnlcIl07X3NxbGl0ZTNfc29mdF9oZWFwX2xpbWl0NjQ9TW9kdWxlW1wiX3NxbGl0ZTNfc29mdF9oZWFwX2xpbWl0NjRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3NvZnRfaGVhcF9saW1pdDY0XCJdO19zcWxpdGUzX21lbW9yeV91c2VkPU1vZHVsZVtcIl9zcWxpdGUzX21lbW9yeV91c2VkXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19tZW1vcnlfdXNlZFwiXTtfc3FsaXRlM19oYXJkX2hlYXBfbGltaXQ2ND1Nb2R1bGVbXCJfc3FsaXRlM19oYXJkX2hlYXBfbGltaXQ2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfaGFyZF9oZWFwX2xpbWl0NjRcIl07X3NxbGl0ZTNfbWVtb3J5X2hpZ2h3YXRlcj1Nb2R1bGVbXCJfc3FsaXRlM19tZW1vcnlfaGlnaHdhdGVyXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19tZW1vcnlfaGlnaHdhdGVyXCJdO19zcWxpdGUzX21hbGxvYz1Nb2R1bGVbXCJfc3FsaXRlM19tYWxsb2NcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX21hbGxvY1wiXTtfc3FsaXRlM19tYWxsb2M2ND1Nb2R1bGVbXCJfc3FsaXRlM19tYWxsb2M2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfbWFsbG9jNjRcIl07X3NxbGl0ZTNfZnJlZT1Nb2R1bGVbXCJfc3FsaXRlM19mcmVlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19mcmVlXCJdO19zcWxpdGUzX3JlYWxsb2M9TW9kdWxlW1wiX3NxbGl0ZTNfcmVhbGxvY1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVhbGxvY1wiXTtfc3FsaXRlM19yZWFsbG9jNjQ9TW9kdWxlW1wiX3NxbGl0ZTNfcmVhbGxvYzY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZWFsbG9jNjRcIl07X3NxbGl0ZTNfc3RyX3ZhcHBlbmRmPU1vZHVsZVtcIl9zcWxpdGUzX3N0cl92YXBwZW5kZlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RyX3ZhcHBlbmRmXCJdO19zcWxpdGUzX3N0cl9hcHBlbmQ9TW9kdWxlW1wiX3NxbGl0ZTNfc3RyX2FwcGVuZFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RyX2FwcGVuZFwiXTtfc3FsaXRlM19zdHJfYXBwZW5kY2hhcj1Nb2R1bGVbXCJfc3FsaXRlM19zdHJfYXBwZW5kY2hhclwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RyX2FwcGVuZGNoYXJcIl07X3NxbGl0ZTNfc3RyX2FwcGVuZGFsbD1Nb2R1bGVbXCJfc3FsaXRlM19zdHJfYXBwZW5kYWxsXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdHJfYXBwZW5kYWxsXCJdO19zcWxpdGUzX3N0cl9hcHBlbmRmPU1vZHVsZVtcIl9zcWxpdGUzX3N0cl9hcHBlbmRmXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdHJfYXBwZW5kZlwiXTtfc3FsaXRlM19zdHJfZmluaXNoPU1vZHVsZVtcIl9zcWxpdGUzX3N0cl9maW5pc2hcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0cl9maW5pc2hcIl07X3NxbGl0ZTNfc3RyX2VycmNvZGU9TW9kdWxlW1wiX3NxbGl0ZTNfc3RyX2VycmNvZGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0cl9lcnJjb2RlXCJdO19zcWxpdGUzX3N0cl9sZW5ndGg9TW9kdWxlW1wiX3NxbGl0ZTNfc3RyX2xlbmd0aFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RyX2xlbmd0aFwiXTtfc3FsaXRlM19zdHJfdmFsdWU9TW9kdWxlW1wiX3NxbGl0ZTNfc3RyX3ZhbHVlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdHJfdmFsdWVcIl07X3NxbGl0ZTNfc3RyX3Jlc2V0PU1vZHVsZVtcIl9zcWxpdGUzX3N0cl9yZXNldFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RyX3Jlc2V0XCJdO19zcWxpdGUzX3N0cl9uZXc9TW9kdWxlW1wiX3NxbGl0ZTNfc3RyX25ld1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RyX25ld1wiXTtfc3FsaXRlM192bXByaW50Zj1Nb2R1bGVbXCJfc3FsaXRlM192bXByaW50ZlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdm1wcmludGZcIl07X3NxbGl0ZTNfbXByaW50Zj1Nb2R1bGVbXCJfc3FsaXRlM19tcHJpbnRmXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19tcHJpbnRmXCJdO19zcWxpdGUzX3ZzbnByaW50Zj1Nb2R1bGVbXCJfc3FsaXRlM192c25wcmludGZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZzbnByaW50ZlwiXTtfc3FsaXRlM19zbnByaW50Zj1Nb2R1bGVbXCJfc3FsaXRlM19zbnByaW50ZlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc25wcmludGZcIl07X3NxbGl0ZTNfbG9nPU1vZHVsZVtcIl9zcWxpdGUzX2xvZ1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfbG9nXCJdO19zcWxpdGUzX3JhbmRvbW5lc3M9TW9kdWxlW1wiX3NxbGl0ZTNfcmFuZG9tbmVzc1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmFuZG9tbmVzc1wiXTtfc3FsaXRlM19zdHJpY21wPU1vZHVsZVtcIl9zcWxpdGUzX3N0cmljbXBcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0cmljbXBcIl07X3NxbGl0ZTNfc3RybmljbXA9TW9kdWxlW1wiX3NxbGl0ZTNfc3RybmljbXBcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0cm5pY21wXCJdO19zcWxpdGUzX29zX2luaXQ9TW9kdWxlW1wiX3NxbGl0ZTNfb3NfaW5pdFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfb3NfaW5pdFwiXTtfc3FsaXRlM19vc19lbmQ9TW9kdWxlW1wiX3NxbGl0ZTNfb3NfZW5kXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19vc19lbmRcIl07X3NxbGl0ZTNfc2VyaWFsaXplPU1vZHVsZVtcIl9zcWxpdGUzX3NlcmlhbGl6ZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc2VyaWFsaXplXCJdO19zcWxpdGUzX3ByZXBhcmVfdjI9TW9kdWxlW1wiX3NxbGl0ZTNfcHJlcGFyZV92MlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcHJlcGFyZV92MlwiXTtfc3FsaXRlM19zdGVwPU1vZHVsZVtcIl9zcWxpdGUzX3N0ZXBcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0ZXBcIl07X3NxbGl0ZTNfY29sdW1uX2ludDY0PU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9pbnQ2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY29sdW1uX2ludDY0XCJdO19zcWxpdGUzX3Jlc2V0PU1vZHVsZVtcIl9zcWxpdGUzX3Jlc2V0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXNldFwiXTtfc3FsaXRlM19leGVjPU1vZHVsZVtcIl9zcWxpdGUzX2V4ZWNcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2V4ZWNcIl07X3NxbGl0ZTNfY29sdW1uX2ludD1Nb2R1bGVbXCJfc3FsaXRlM19jb2x1bW5faW50XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jb2x1bW5faW50XCJdO19zcWxpdGUzX2ZpbmFsaXplPU1vZHVsZVtcIl9zcWxpdGUzX2ZpbmFsaXplXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19maW5hbGl6ZVwiXTtfc3FsaXRlM19kZXNlcmlhbGl6ZT1Nb2R1bGVbXCJfc3FsaXRlM19kZXNlcmlhbGl6ZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZGVzZXJpYWxpemVcIl07X3NxbGl0ZTNfZGF0YWJhc2VfZmlsZV9vYmplY3Q9TW9kdWxlW1wiX3NxbGl0ZTNfZGF0YWJhc2VfZmlsZV9vYmplY3RcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2RhdGFiYXNlX2ZpbGVfb2JqZWN0XCJdO19zcWxpdGUzX2JhY2t1cF9pbml0PU1vZHVsZVtcIl9zcWxpdGUzX2JhY2t1cF9pbml0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19iYWNrdXBfaW5pdFwiXTtfc3FsaXRlM19iYWNrdXBfc3RlcD1Nb2R1bGVbXCJfc3FsaXRlM19iYWNrdXBfc3RlcFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmFja3VwX3N0ZXBcIl07X3NxbGl0ZTNfYmFja3VwX2ZpbmlzaD1Nb2R1bGVbXCJfc3FsaXRlM19iYWNrdXBfZmluaXNoXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19iYWNrdXBfZmluaXNoXCJdO19zcWxpdGUzX2JhY2t1cF9yZW1haW5pbmc9TW9kdWxlW1wiX3NxbGl0ZTNfYmFja3VwX3JlbWFpbmluZ1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmFja3VwX3JlbWFpbmluZ1wiXTtfc3FsaXRlM19iYWNrdXBfcGFnZWNvdW50PU1vZHVsZVtcIl9zcWxpdGUzX2JhY2t1cF9wYWdlY291bnRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JhY2t1cF9wYWdlY291bnRcIl07X3NxbGl0ZTNfY2xlYXJfYmluZGluZ3M9TW9kdWxlW1wiX3NxbGl0ZTNfY2xlYXJfYmluZGluZ3NcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NsZWFyX2JpbmRpbmdzXCJdO19zcWxpdGUzX3ZhbHVlX2Jsb2I9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfYmxvYlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmFsdWVfYmxvYlwiXTtfc3FsaXRlM192YWx1ZV90ZXh0PU1vZHVsZVtcIl9zcWxpdGUzX3ZhbHVlX3RleHRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX3RleHRcIl07X3NxbGl0ZTNfdmFsdWVfYnl0ZXM9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfYnl0ZXNcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX2J5dGVzXCJdO19zcWxpdGUzX3ZhbHVlX2J5dGVzMTY9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfYnl0ZXMxNlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmFsdWVfYnl0ZXMxNlwiXTtfc3FsaXRlM192YWx1ZV9kb3VibGU9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfZG91YmxlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192YWx1ZV9kb3VibGVcIl07X3NxbGl0ZTNfdmFsdWVfaW50PU1vZHVsZVtcIl9zcWxpdGUzX3ZhbHVlX2ludFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmFsdWVfaW50XCJdO19zcWxpdGUzX3ZhbHVlX2ludDY0PU1vZHVsZVtcIl9zcWxpdGUzX3ZhbHVlX2ludDY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192YWx1ZV9pbnQ2NFwiXTtfc3FsaXRlM192YWx1ZV9zdWJ0eXBlPU1vZHVsZVtcIl9zcWxpdGUzX3ZhbHVlX3N1YnR5cGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX3N1YnR5cGVcIl07X3NxbGl0ZTNfdmFsdWVfcG9pbnRlcj1Nb2R1bGVbXCJfc3FsaXRlM192YWx1ZV9wb2ludGVyXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192YWx1ZV9wb2ludGVyXCJdO19zcWxpdGUzX3ZhbHVlX3RleHQxNj1Nb2R1bGVbXCJfc3FsaXRlM192YWx1ZV90ZXh0MTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX3RleHQxNlwiXTtfc3FsaXRlM192YWx1ZV90ZXh0MTZiZT1Nb2R1bGVbXCJfc3FsaXRlM192YWx1ZV90ZXh0MTZiZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmFsdWVfdGV4dDE2YmVcIl07X3NxbGl0ZTNfdmFsdWVfdGV4dDE2bGU9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfdGV4dDE2bGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX3RleHQxNmxlXCJdO19zcWxpdGUzX3ZhbHVlX3R5cGU9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfdHlwZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmFsdWVfdHlwZVwiXTtfc3FsaXRlM192YWx1ZV9lbmNvZGluZz1Nb2R1bGVbXCJfc3FsaXRlM192YWx1ZV9lbmNvZGluZ1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmFsdWVfZW5jb2RpbmdcIl07X3NxbGl0ZTNfdmFsdWVfbm9jaGFuZ2U9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfbm9jaGFuZ2VcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX25vY2hhbmdlXCJdO19zcWxpdGUzX3ZhbHVlX2Zyb21iaW5kPU1vZHVsZVtcIl9zcWxpdGUzX3ZhbHVlX2Zyb21iaW5kXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192YWx1ZV9mcm9tYmluZFwiXTtfc3FsaXRlM192YWx1ZV9kdXA9TW9kdWxlW1wiX3NxbGl0ZTNfdmFsdWVfZHVwXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192YWx1ZV9kdXBcIl07X3NxbGl0ZTNfdmFsdWVfZnJlZT1Nb2R1bGVbXCJfc3FsaXRlM192YWx1ZV9mcmVlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192YWx1ZV9mcmVlXCJdO19zcWxpdGUzX3Jlc3VsdF9ibG9iPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF9ibG9iXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfYmxvYlwiXTtfc3FsaXRlM19yZXN1bHRfYmxvYjY0PU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF9ibG9iNjRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Jlc3VsdF9ibG9iNjRcIl07X3NxbGl0ZTNfcmVzdWx0X2RvdWJsZT1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfZG91YmxlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfZG91YmxlXCJdO19zcWxpdGUzX3Jlc3VsdF9lcnJvcj1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfZXJyb3JcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Jlc3VsdF9lcnJvclwiXTtfc3FsaXRlM19yZXN1bHRfZXJyb3IxNj1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfZXJyb3IxNlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X2Vycm9yMTZcIl07X3NxbGl0ZTNfcmVzdWx0X2ludD1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfaW50XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfaW50XCJdO19zcWxpdGUzX3Jlc3VsdF9pbnQ2ND1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfaW50NjRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Jlc3VsdF9pbnQ2NFwiXTtfc3FsaXRlM19yZXN1bHRfbnVsbD1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfbnVsbFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X251bGxcIl07X3NxbGl0ZTNfcmVzdWx0X3BvaW50ZXI9TW9kdWxlW1wiX3NxbGl0ZTNfcmVzdWx0X3BvaW50ZXJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Jlc3VsdF9wb2ludGVyXCJdO19zcWxpdGUzX3Jlc3VsdF9zdWJ0eXBlPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF9zdWJ0eXBlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfc3VidHlwZVwiXTtfc3FsaXRlM19yZXN1bHRfdGV4dD1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfdGV4dFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X3RleHRcIl07X3NxbGl0ZTNfcmVzdWx0X3RleHQ2ND1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfdGV4dDY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfdGV4dDY0XCJdO19zcWxpdGUzX3Jlc3VsdF90ZXh0MTY9TW9kdWxlW1wiX3NxbGl0ZTNfcmVzdWx0X3RleHQxNlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X3RleHQxNlwiXTtfc3FsaXRlM19yZXN1bHRfdGV4dDE2YmU9TW9kdWxlW1wiX3NxbGl0ZTNfcmVzdWx0X3RleHQxNmJlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfdGV4dDE2YmVcIl07X3NxbGl0ZTNfcmVzdWx0X3RleHQxNmxlPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF90ZXh0MTZsZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X3RleHQxNmxlXCJdO19zcWxpdGUzX3Jlc3VsdF92YWx1ZT1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfdmFsdWVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Jlc3VsdF92YWx1ZVwiXTtfc3FsaXRlM19yZXN1bHRfZXJyb3JfdG9vYmlnPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF9lcnJvcl90b29iaWdcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Jlc3VsdF9lcnJvcl90b29iaWdcIl07X3NxbGl0ZTNfcmVzdWx0X3plcm9ibG9iPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF96ZXJvYmxvYlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X3plcm9ibG9iXCJdO19zcWxpdGUzX3Jlc3VsdF96ZXJvYmxvYjY0PU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF96ZXJvYmxvYjY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXN1bHRfemVyb2Jsb2I2NFwiXTtfc3FsaXRlM19yZXN1bHRfZXJyb3JfY29kZT1Nb2R1bGVbXCJfc3FsaXRlM19yZXN1bHRfZXJyb3JfY29kZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X2Vycm9yX2NvZGVcIl07X3NxbGl0ZTNfcmVzdWx0X2Vycm9yX25vbWVtPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc3VsdF9lcnJvcl9ub21lbVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcmVzdWx0X2Vycm9yX25vbWVtXCJdO19zcWxpdGUzX3VzZXJfZGF0YT1Nb2R1bGVbXCJfc3FsaXRlM191c2VyX2RhdGFcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3VzZXJfZGF0YVwiXTtfc3FsaXRlM19jb250ZXh0X2RiX2hhbmRsZT1Nb2R1bGVbXCJfc3FsaXRlM19jb250ZXh0X2RiX2hhbmRsZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY29udGV4dF9kYl9oYW5kbGVcIl07X3NxbGl0ZTNfdnRhYl9ub2NoYW5nZT1Nb2R1bGVbXCJfc3FsaXRlM192dGFiX25vY2hhbmdlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192dGFiX25vY2hhbmdlXCJdO19zcWxpdGUzX3Z0YWJfaW5fZmlyc3Q9TW9kdWxlW1wiX3NxbGl0ZTNfdnRhYl9pbl9maXJzdFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdnRhYl9pbl9maXJzdFwiXTtfc3FsaXRlM192dGFiX2luX25leHQ9TW9kdWxlW1wiX3NxbGl0ZTNfdnRhYl9pbl9uZXh0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192dGFiX2luX25leHRcIl07X3NxbGl0ZTNfYWdncmVnYXRlX2NvbnRleHQ9TW9kdWxlW1wiX3NxbGl0ZTNfYWdncmVnYXRlX2NvbnRleHRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2FnZ3JlZ2F0ZV9jb250ZXh0XCJdO19zcWxpdGUzX2dldF9hdXhkYXRhPU1vZHVsZVtcIl9zcWxpdGUzX2dldF9hdXhkYXRhXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19nZXRfYXV4ZGF0YVwiXTtfc3FsaXRlM19zZXRfYXV4ZGF0YT1Nb2R1bGVbXCJfc3FsaXRlM19zZXRfYXV4ZGF0YVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc2V0X2F1eGRhdGFcIl07X3NxbGl0ZTNfY29sdW1uX2NvdW50PU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9jb3VudFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY29sdW1uX2NvdW50XCJdO19zcWxpdGUzX2RhdGFfY291bnQ9TW9kdWxlW1wiX3NxbGl0ZTNfZGF0YV9jb3VudFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZGF0YV9jb3VudFwiXTtfc3FsaXRlM19jb2x1bW5fYmxvYj1Nb2R1bGVbXCJfc3FsaXRlM19jb2x1bW5fYmxvYlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY29sdW1uX2Jsb2JcIl07X3NxbGl0ZTNfY29sdW1uX2J5dGVzPU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9ieXRlc1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY29sdW1uX2J5dGVzXCJdO19zcWxpdGUzX2NvbHVtbl9ieXRlczE2PU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9ieXRlczE2XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jb2x1bW5fYnl0ZXMxNlwiXTtfc3FsaXRlM19jb2x1bW5fZG91YmxlPU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9kb3VibGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbHVtbl9kb3VibGVcIl07X3NxbGl0ZTNfY29sdW1uX3RleHQ9TW9kdWxlW1wiX3NxbGl0ZTNfY29sdW1uX3RleHRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbHVtbl90ZXh0XCJdO19zcWxpdGUzX2NvbHVtbl92YWx1ZT1Nb2R1bGVbXCJfc3FsaXRlM19jb2x1bW5fdmFsdWVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbHVtbl92YWx1ZVwiXTtfc3FsaXRlM19jb2x1bW5fdGV4dDE2PU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl90ZXh0MTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbHVtbl90ZXh0MTZcIl07X3NxbGl0ZTNfY29sdW1uX3R5cGU9TW9kdWxlW1wiX3NxbGl0ZTNfY29sdW1uX3R5cGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbHVtbl90eXBlXCJdO19zcWxpdGUzX2NvbHVtbl9uYW1lPU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9uYW1lXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jb2x1bW5fbmFtZVwiXTtfc3FsaXRlM19jb2x1bW5fbmFtZTE2PU1vZHVsZVtcIl9zcWxpdGUzX2NvbHVtbl9uYW1lMTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbHVtbl9uYW1lMTZcIl07X3NxbGl0ZTNfYmluZF9ibG9iPU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfYmxvYlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF9ibG9iXCJdO19zcWxpdGUzX2JpbmRfYmxvYjY0PU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfYmxvYjY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19iaW5kX2Jsb2I2NFwiXTtfc3FsaXRlM19iaW5kX2RvdWJsZT1Nb2R1bGVbXCJfc3FsaXRlM19iaW5kX2RvdWJsZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF9kb3VibGVcIl07X3NxbGl0ZTNfYmluZF9pbnQ9TW9kdWxlW1wiX3NxbGl0ZTNfYmluZF9pbnRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JpbmRfaW50XCJdO19zcWxpdGUzX2JpbmRfaW50NjQ9TW9kdWxlW1wiX3NxbGl0ZTNfYmluZF9pbnQ2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF9pbnQ2NFwiXTtfc3FsaXRlM19iaW5kX251bGw9TW9kdWxlW1wiX3NxbGl0ZTNfYmluZF9udWxsXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19iaW5kX251bGxcIl07X3NxbGl0ZTNfYmluZF9wb2ludGVyPU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfcG9pbnRlclwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF9wb2ludGVyXCJdO19zcWxpdGUzX2JpbmRfdGV4dD1Nb2R1bGVbXCJfc3FsaXRlM19iaW5kX3RleHRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JpbmRfdGV4dFwiXTtfc3FsaXRlM19iaW5kX3RleHQ2ND1Nb2R1bGVbXCJfc3FsaXRlM19iaW5kX3RleHQ2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF90ZXh0NjRcIl07X3NxbGl0ZTNfYmluZF90ZXh0MTY9TW9kdWxlW1wiX3NxbGl0ZTNfYmluZF90ZXh0MTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JpbmRfdGV4dDE2XCJdO19zcWxpdGUzX2JpbmRfdmFsdWU9TW9kdWxlW1wiX3NxbGl0ZTNfYmluZF92YWx1ZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF92YWx1ZVwiXTtfc3FsaXRlM19iaW5kX3plcm9ibG9iPU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfemVyb2Jsb2JcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JpbmRfemVyb2Jsb2JcIl07X3NxbGl0ZTNfYmluZF96ZXJvYmxvYjY0PU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfemVyb2Jsb2I2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYmluZF96ZXJvYmxvYjY0XCJdO19zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2NvdW50PU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2NvdW50XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19iaW5kX3BhcmFtZXRlcl9jb3VudFwiXTtfc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9uYW1lPU1vZHVsZVtcIl9zcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWVcIl07X3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfaW5kZXg9TW9kdWxlW1wiX3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfaW5kZXhcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2JpbmRfcGFyYW1ldGVyX2luZGV4XCJdO19zcWxpdGUzX2RiX2hhbmRsZT1Nb2R1bGVbXCJfc3FsaXRlM19kYl9oYW5kbGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2RiX2hhbmRsZVwiXTtfc3FsaXRlM19zdG10X3JlYWRvbmx5PU1vZHVsZVtcIl9zcWxpdGUzX3N0bXRfcmVhZG9ubHlcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0bXRfcmVhZG9ubHlcIl07X3NxbGl0ZTNfc3RtdF9pc2V4cGxhaW49TW9kdWxlW1wiX3NxbGl0ZTNfc3RtdF9pc2V4cGxhaW5cIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0bXRfaXNleHBsYWluXCJdO19zcWxpdGUzX3N0bXRfZXhwbGFpbj1Nb2R1bGVbXCJfc3FsaXRlM19zdG10X2V4cGxhaW5cIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3N0bXRfZXhwbGFpblwiXTtfc3FsaXRlM19zdG10X2J1c3k9TW9kdWxlW1wiX3NxbGl0ZTNfc3RtdF9idXN5XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdG10X2J1c3lcIl07X3NxbGl0ZTNfbmV4dF9zdG10PU1vZHVsZVtcIl9zcWxpdGUzX25leHRfc3RtdFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfbmV4dF9zdG10XCJdO19zcWxpdGUzX3N0bXRfc3RhdHVzPU1vZHVsZVtcIl9zcWxpdGUzX3N0bXRfc3RhdHVzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdG10X3N0YXR1c1wiXTtfc3FsaXRlM19zcWw9TW9kdWxlW1wiX3NxbGl0ZTNfc3FsXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zcWxcIl07X3NxbGl0ZTNfZXhwYW5kZWRfc3FsPU1vZHVsZVtcIl9zcWxpdGUzX2V4cGFuZGVkX3NxbFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZXhwYW5kZWRfc3FsXCJdO19zcWxpdGUzX3ZhbHVlX251bWVyaWNfdHlwZT1Nb2R1bGVbXCJfc3FsaXRlM192YWx1ZV9udW1lcmljX3R5cGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ZhbHVlX251bWVyaWNfdHlwZVwiXTtfc3FsaXRlM19ibG9iX29wZW49TW9kdWxlW1wiX3NxbGl0ZTNfYmxvYl9vcGVuXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19ibG9iX29wZW5cIl07X3NxbGl0ZTNfYmxvYl9jbG9zZT1Nb2R1bGVbXCJfc3FsaXRlM19ibG9iX2Nsb3NlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19ibG9iX2Nsb3NlXCJdO19zcWxpdGUzX2Jsb2JfcmVhZD1Nb2R1bGVbXCJfc3FsaXRlM19ibG9iX3JlYWRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2Jsb2JfcmVhZFwiXTtfc3FsaXRlM19ibG9iX3dyaXRlPU1vZHVsZVtcIl9zcWxpdGUzX2Jsb2Jfd3JpdGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2Jsb2Jfd3JpdGVcIl07X3NxbGl0ZTNfYmxvYl9ieXRlcz1Nb2R1bGVbXCJfc3FsaXRlM19ibG9iX2J5dGVzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19ibG9iX2J5dGVzXCJdO19zcWxpdGUzX2Jsb2JfcmVvcGVuPU1vZHVsZVtcIl9zcWxpdGUzX2Jsb2JfcmVvcGVuXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19ibG9iX3Jlb3BlblwiXTtfc3FsaXRlM19zZXRfYXV0aG9yaXplcj1Nb2R1bGVbXCJfc3FsaXRlM19zZXRfYXV0aG9yaXplclwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc2V0X2F1dGhvcml6ZXJcIl07X3NxbGl0ZTNfc3RyZ2xvYj1Nb2R1bGVbXCJfc3FsaXRlM19zdHJnbG9iXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zdHJnbG9iXCJdO19zcWxpdGUzX3N0cmxpa2U9TW9kdWxlW1wiX3NxbGl0ZTNfc3RybGlrZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3RybGlrZVwiXTtfc3FsaXRlM19lcnJtc2c9TW9kdWxlW1wiX3NxbGl0ZTNfZXJybXNnXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19lcnJtc2dcIl07X3NxbGl0ZTNfbG9hZF9leHRlbnNpb249TW9kdWxlW1wiX3NxbGl0ZTNfbG9hZF9leHRlbnNpb25cIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2xvYWRfZXh0ZW5zaW9uXCJdO19zcWxpdGUzX2VuYWJsZV9sb2FkX2V4dGVuc2lvbj1Nb2R1bGVbXCJfc3FsaXRlM19lbmFibGVfbG9hZF9leHRlbnNpb25cIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2VuYWJsZV9sb2FkX2V4dGVuc2lvblwiXTtfc3FsaXRlM19hdXRvX2V4dGVuc2lvbj1Nb2R1bGVbXCJfc3FsaXRlM19hdXRvX2V4dGVuc2lvblwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYXV0b19leHRlbnNpb25cIl07X3NxbGl0ZTNfY2FuY2VsX2F1dG9fZXh0ZW5zaW9uPU1vZHVsZVtcIl9zcWxpdGUzX2NhbmNlbF9hdXRvX2V4dGVuc2lvblwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY2FuY2VsX2F1dG9fZXh0ZW5zaW9uXCJdO19zcWxpdGUzX3Jlc2V0X2F1dG9fZXh0ZW5zaW9uPU1vZHVsZVtcIl9zcWxpdGUzX3Jlc2V0X2F1dG9fZXh0ZW5zaW9uXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19yZXNldF9hdXRvX2V4dGVuc2lvblwiXTtfc3FsaXRlM19wcmVwYXJlPU1vZHVsZVtcIl9zcWxpdGUzX3ByZXBhcmVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ByZXBhcmVcIl07X3NxbGl0ZTNfcHJlcGFyZV92Mz1Nb2R1bGVbXCJfc3FsaXRlM19wcmVwYXJlX3YzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19wcmVwYXJlX3YzXCJdO19zcWxpdGUzX3ByZXBhcmUxNj1Nb2R1bGVbXCJfc3FsaXRlM19wcmVwYXJlMTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3ByZXBhcmUxNlwiXTtfc3FsaXRlM19wcmVwYXJlMTZfdjI9TW9kdWxlW1wiX3NxbGl0ZTNfcHJlcGFyZTE2X3YyXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19wcmVwYXJlMTZfdjJcIl07X3NxbGl0ZTNfcHJlcGFyZTE2X3YzPU1vZHVsZVtcIl9zcWxpdGUzX3ByZXBhcmUxNl92M1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfcHJlcGFyZTE2X3YzXCJdO19zcWxpdGUzX2dldF90YWJsZT1Nb2R1bGVbXCJfc3FsaXRlM19nZXRfdGFibGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2dldF90YWJsZVwiXTtfc3FsaXRlM19mcmVlX3RhYmxlPU1vZHVsZVtcIl9zcWxpdGUzX2ZyZWVfdGFibGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2ZyZWVfdGFibGVcIl07X3NxbGl0ZTNfY3JlYXRlX21vZHVsZT1Nb2R1bGVbXCJfc3FsaXRlM19jcmVhdGVfbW9kdWxlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jcmVhdGVfbW9kdWxlXCJdO19zcWxpdGUzX2NyZWF0ZV9tb2R1bGVfdjI9TW9kdWxlW1wiX3NxbGl0ZTNfY3JlYXRlX21vZHVsZV92MlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY3JlYXRlX21vZHVsZV92MlwiXTtfc3FsaXRlM19kcm9wX21vZHVsZXM9TW9kdWxlW1wiX3NxbGl0ZTNfZHJvcF9tb2R1bGVzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19kcm9wX21vZHVsZXNcIl07X3NxbGl0ZTNfZGVjbGFyZV92dGFiPU1vZHVsZVtcIl9zcWxpdGUzX2RlY2xhcmVfdnRhYlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZGVjbGFyZV92dGFiXCJdO19zcWxpdGUzX3Z0YWJfb25fY29uZmxpY3Q9TW9kdWxlW1wiX3NxbGl0ZTNfdnRhYl9vbl9jb25mbGljdFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdnRhYl9vbl9jb25mbGljdFwiXTtfc3FsaXRlM192dGFiX2NvbmZpZz1Nb2R1bGVbXCJfc3FsaXRlM192dGFiX2NvbmZpZ1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdnRhYl9jb25maWdcIl07X3NxbGl0ZTNfdnRhYl9jb2xsYXRpb249TW9kdWxlW1wiX3NxbGl0ZTNfdnRhYl9jb2xsYXRpb25cIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Z0YWJfY29sbGF0aW9uXCJdO19zcWxpdGUzX3Z0YWJfaW49TW9kdWxlW1wiX3NxbGl0ZTNfdnRhYl9pblwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdnRhYl9pblwiXTtfc3FsaXRlM192dGFiX3Joc192YWx1ZT1Nb2R1bGVbXCJfc3FsaXRlM192dGFiX3Joc192YWx1ZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdnRhYl9yaHNfdmFsdWVcIl07X3NxbGl0ZTNfdnRhYl9kaXN0aW5jdD1Nb2R1bGVbXCJfc3FsaXRlM192dGFiX2Rpc3RpbmN0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM192dGFiX2Rpc3RpbmN0XCJdO19zcWxpdGUzX2tleXdvcmRfbmFtZT1Nb2R1bGVbXCJfc3FsaXRlM19rZXl3b3JkX25hbWVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2tleXdvcmRfbmFtZVwiXTtfc3FsaXRlM19rZXl3b3JkX2NvdW50PU1vZHVsZVtcIl9zcWxpdGUzX2tleXdvcmRfY291bnRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2tleXdvcmRfY291bnRcIl07X3NxbGl0ZTNfa2V5d29yZF9jaGVjaz1Nb2R1bGVbXCJfc3FsaXRlM19rZXl3b3JkX2NoZWNrXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19rZXl3b3JkX2NoZWNrXCJdO19zcWxpdGUzX2NvbXBsZXRlPU1vZHVsZVtcIl9zcWxpdGUzX2NvbXBsZXRlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jb21wbGV0ZVwiXTtfc3FsaXRlM19jb21wbGV0ZTE2PU1vZHVsZVtcIl9zcWxpdGUzX2NvbXBsZXRlMTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbXBsZXRlMTZcIl07X3NxbGl0ZTNfbGlidmVyc2lvbj1Nb2R1bGVbXCJfc3FsaXRlM19saWJ2ZXJzaW9uXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19saWJ2ZXJzaW9uXCJdO19zcWxpdGUzX2xpYnZlcnNpb25fbnVtYmVyPU1vZHVsZVtcIl9zcWxpdGUzX2xpYnZlcnNpb25fbnVtYmVyXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19saWJ2ZXJzaW9uX251bWJlclwiXTtfc3FsaXRlM190aHJlYWRzYWZlPU1vZHVsZVtcIl9zcWxpdGUzX3RocmVhZHNhZmVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3RocmVhZHNhZmVcIl07X3NxbGl0ZTNfaW5pdGlhbGl6ZT1Nb2R1bGVbXCJfc3FsaXRlM19pbml0aWFsaXplXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19pbml0aWFsaXplXCJdO19zcWxpdGUzX3NodXRkb3duPU1vZHVsZVtcIl9zcWxpdGUzX3NodXRkb3duXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zaHV0ZG93blwiXTtfc3FsaXRlM19jb25maWc9TW9kdWxlW1wiX3NxbGl0ZTNfY29uZmlnXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jb25maWdcIl07X3NxbGl0ZTNfZGJfbXV0ZXg9TW9kdWxlW1wiX3NxbGl0ZTNfZGJfbXV0ZXhcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2RiX211dGV4XCJdO19zcWxpdGUzX2RiX3JlbGVhc2VfbWVtb3J5PU1vZHVsZVtcIl9zcWxpdGUzX2RiX3JlbGVhc2VfbWVtb3J5XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19kYl9yZWxlYXNlX21lbW9yeVwiXTtfc3FsaXRlM19kYl9jYWNoZWZsdXNoPU1vZHVsZVtcIl9zcWxpdGUzX2RiX2NhY2hlZmx1c2hcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2RiX2NhY2hlZmx1c2hcIl07X3NxbGl0ZTNfZGJfY29uZmlnPU1vZHVsZVtcIl9zcWxpdGUzX2RiX2NvbmZpZ1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZGJfY29uZmlnXCJdO19zcWxpdGUzX2xhc3RfaW5zZXJ0X3Jvd2lkPU1vZHVsZVtcIl9zcWxpdGUzX2xhc3RfaW5zZXJ0X3Jvd2lkXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19sYXN0X2luc2VydF9yb3dpZFwiXTtfc3FsaXRlM19zZXRfbGFzdF9pbnNlcnRfcm93aWQ9TW9kdWxlW1wiX3NxbGl0ZTNfc2V0X2xhc3RfaW5zZXJ0X3Jvd2lkXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19zZXRfbGFzdF9pbnNlcnRfcm93aWRcIl07X3NxbGl0ZTNfY2hhbmdlczY0PU1vZHVsZVtcIl9zcWxpdGUzX2NoYW5nZXM2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY2hhbmdlczY0XCJdO19zcWxpdGUzX2NoYW5nZXM9TW9kdWxlW1wiX3NxbGl0ZTNfY2hhbmdlc1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY2hhbmdlc1wiXTtfc3FsaXRlM190b3RhbF9jaGFuZ2VzNjQ9TW9kdWxlW1wiX3NxbGl0ZTNfdG90YWxfY2hhbmdlczY0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM190b3RhbF9jaGFuZ2VzNjRcIl07X3NxbGl0ZTNfdG90YWxfY2hhbmdlcz1Nb2R1bGVbXCJfc3FsaXRlM190b3RhbF9jaGFuZ2VzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM190b3RhbF9jaGFuZ2VzXCJdO19zcWxpdGUzX3R4bl9zdGF0ZT1Nb2R1bGVbXCJfc3FsaXRlM190eG5fc3RhdGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3R4bl9zdGF0ZVwiXTtfc3FsaXRlM19jbG9zZT1Nb2R1bGVbXCJfc3FsaXRlM19jbG9zZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY2xvc2VcIl07X3NxbGl0ZTNfY2xvc2VfdjI9TW9kdWxlW1wiX3NxbGl0ZTNfY2xvc2VfdjJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2Nsb3NlX3YyXCJdO19zcWxpdGUzX2J1c3lfaGFuZGxlcj1Nb2R1bGVbXCJfc3FsaXRlM19idXN5X2hhbmRsZXJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2J1c3lfaGFuZGxlclwiXTtfc3FsaXRlM19wcm9ncmVzc19oYW5kbGVyPU1vZHVsZVtcIl9zcWxpdGUzX3Byb2dyZXNzX2hhbmRsZXJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3Byb2dyZXNzX2hhbmRsZXJcIl07X3NxbGl0ZTNfYnVzeV90aW1lb3V0PU1vZHVsZVtcIl9zcWxpdGUzX2J1c3lfdGltZW91dFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfYnVzeV90aW1lb3V0XCJdO19zcWxpdGUzX2ludGVycnVwdD1Nb2R1bGVbXCJfc3FsaXRlM19pbnRlcnJ1cHRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2ludGVycnVwdFwiXTtfc3FsaXRlM19pc19pbnRlcnJ1cHRlZD1Nb2R1bGVbXCJfc3FsaXRlM19pc19pbnRlcnJ1cHRlZFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfaXNfaW50ZXJydXB0ZWRcIl07X3NxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uPU1vZHVsZVtcIl9zcWxpdGUzX2NyZWF0ZV9mdW5jdGlvblwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uXCJdO19zcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbl92Mj1Nb2R1bGVbXCJfc3FsaXRlM19jcmVhdGVfZnVuY3Rpb25fdjJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbl92MlwiXTtfc3FsaXRlM19jcmVhdGVfd2luZG93X2Z1bmN0aW9uPU1vZHVsZVtcIl9zcWxpdGUzX2NyZWF0ZV93aW5kb3dfZnVuY3Rpb25cIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NyZWF0ZV93aW5kb3dfZnVuY3Rpb25cIl07X3NxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uMTY9TW9kdWxlW1wiX3NxbGl0ZTNfY3JlYXRlX2Z1bmN0aW9uMTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbjE2XCJdO19zcWxpdGUzX292ZXJsb2FkX2Z1bmN0aW9uPU1vZHVsZVtcIl9zcWxpdGUzX292ZXJsb2FkX2Z1bmN0aW9uXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19vdmVybG9hZF9mdW5jdGlvblwiXTtfc3FsaXRlM190cmFjZV92Mj1Nb2R1bGVbXCJfc3FsaXRlM190cmFjZV92MlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdHJhY2VfdjJcIl07X3NxbGl0ZTNfY29tbWl0X2hvb2s9TW9kdWxlW1wiX3NxbGl0ZTNfY29tbWl0X2hvb2tcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbW1pdF9ob29rXCJdO19zcWxpdGUzX3VwZGF0ZV9ob29rPU1vZHVsZVtcIl9zcWxpdGUzX3VwZGF0ZV9ob29rXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM191cGRhdGVfaG9va1wiXTtfc3FsaXRlM19yb2xsYmFja19ob29rPU1vZHVsZVtcIl9zcWxpdGUzX3JvbGxiYWNrX2hvb2tcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3JvbGxiYWNrX2hvb2tcIl07X3NxbGl0ZTNfYXV0b3ZhY3V1bV9wYWdlcz1Nb2R1bGVbXCJfc3FsaXRlM19hdXRvdmFjdXVtX3BhZ2VzXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19hdXRvdmFjdXVtX3BhZ2VzXCJdO19zcWxpdGUzX3dhbF9hdXRvY2hlY2twb2ludD1Nb2R1bGVbXCJfc3FsaXRlM193YWxfYXV0b2NoZWNrcG9pbnRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3dhbF9hdXRvY2hlY2twb2ludFwiXTtfc3FsaXRlM193YWxfaG9vaz1Nb2R1bGVbXCJfc3FsaXRlM193YWxfaG9va1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfd2FsX2hvb2tcIl07X3NxbGl0ZTNfd2FsX2NoZWNrcG9pbnRfdjI9TW9kdWxlW1wiX3NxbGl0ZTNfd2FsX2NoZWNrcG9pbnRfdjJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3dhbF9jaGVja3BvaW50X3YyXCJdO19zcWxpdGUzX3dhbF9jaGVja3BvaW50PU1vZHVsZVtcIl9zcWxpdGUzX3dhbF9jaGVja3BvaW50XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM193YWxfY2hlY2twb2ludFwiXTtfc3FsaXRlM19lcnJvcl9vZmZzZXQ9TW9kdWxlW1wiX3NxbGl0ZTNfZXJyb3Jfb2Zmc2V0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19lcnJvcl9vZmZzZXRcIl07X3NxbGl0ZTNfZXJybXNnMTY9TW9kdWxlW1wiX3NxbGl0ZTNfZXJybXNnMTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2Vycm1zZzE2XCJdO19zcWxpdGUzX2VycmNvZGU9TW9kdWxlW1wiX3NxbGl0ZTNfZXJyY29kZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZXJyY29kZVwiXTtfc3FsaXRlM19leHRlbmRlZF9lcnJjb2RlPU1vZHVsZVtcIl9zcWxpdGUzX2V4dGVuZGVkX2VycmNvZGVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2V4dGVuZGVkX2VycmNvZGVcIl07X3NxbGl0ZTNfc3lzdGVtX2Vycm5vPU1vZHVsZVtcIl9zcWxpdGUzX3N5c3RlbV9lcnJub1wiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfc3lzdGVtX2Vycm5vXCJdO19zcWxpdGUzX2VycnN0cj1Nb2R1bGVbXCJfc3FsaXRlM19lcnJzdHJcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2VycnN0clwiXTtfc3FsaXRlM19saW1pdD1Nb2R1bGVbXCJfc3FsaXRlM19saW1pdFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfbGltaXRcIl07X3NxbGl0ZTNfb3Blbj1Nb2R1bGVbXCJfc3FsaXRlM19vcGVuXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19vcGVuXCJdO19zcWxpdGUzX29wZW5fdjI9TW9kdWxlW1wiX3NxbGl0ZTNfb3Blbl92MlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfb3Blbl92MlwiXTtfc3FsaXRlM19vcGVuMTY9TW9kdWxlW1wiX3NxbGl0ZTNfb3BlbjE2XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19vcGVuMTZcIl07X3NxbGl0ZTNfY3JlYXRlX2NvbGxhdGlvbj1Nb2R1bGVbXCJfc3FsaXRlM19jcmVhdGVfY29sbGF0aW9uXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jcmVhdGVfY29sbGF0aW9uXCJdO19zcWxpdGUzX2NyZWF0ZV9jb2xsYXRpb25fdjI9TW9kdWxlW1wiX3NxbGl0ZTNfY3JlYXRlX2NvbGxhdGlvbl92MlwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY3JlYXRlX2NvbGxhdGlvbl92MlwiXTtfc3FsaXRlM19jcmVhdGVfY29sbGF0aW9uMTY9TW9kdWxlW1wiX3NxbGl0ZTNfY3JlYXRlX2NvbGxhdGlvbjE2XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jcmVhdGVfY29sbGF0aW9uMTZcIl07X3NxbGl0ZTNfY29sbGF0aW9uX25lZWRlZD1Nb2R1bGVbXCJfc3FsaXRlM19jb2xsYXRpb25fbmVlZGVkXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19jb2xsYXRpb25fbmVlZGVkXCJdO19zcWxpdGUzX2NvbGxhdGlvbl9uZWVkZWQxNj1Nb2R1bGVbXCJfc3FsaXRlM19jb2xsYXRpb25fbmVlZGVkMTZcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbGxhdGlvbl9uZWVkZWQxNlwiXTtfc3FsaXRlM19nZXRfY2xpZW50ZGF0YT1Nb2R1bGVbXCJfc3FsaXRlM19nZXRfY2xpZW50ZGF0YVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZ2V0X2NsaWVudGRhdGFcIl07X3NxbGl0ZTNfc2V0X2NsaWVudGRhdGE9TW9kdWxlW1wiX3NxbGl0ZTNfc2V0X2NsaWVudGRhdGFcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3NldF9jbGllbnRkYXRhXCJdO19zcWxpdGUzX2dldF9hdXRvY29tbWl0PU1vZHVsZVtcIl9zcWxpdGUzX2dldF9hdXRvY29tbWl0XCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19nZXRfYXV0b2NvbW1pdFwiXTtfc3FsaXRlM190YWJsZV9jb2x1bW5fbWV0YWRhdGE9TW9kdWxlW1wiX3NxbGl0ZTNfdGFibGVfY29sdW1uX21ldGFkYXRhXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM190YWJsZV9jb2x1bW5fbWV0YWRhdGFcIl07X3NxbGl0ZTNfc2xlZXA9TW9kdWxlW1wiX3NxbGl0ZTNfc2xlZXBcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3NsZWVwXCJdO19zcWxpdGUzX2V4dGVuZGVkX3Jlc3VsdF9jb2Rlcz1Nb2R1bGVbXCJfc3FsaXRlM19leHRlbmRlZF9yZXN1bHRfY29kZXNcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2V4dGVuZGVkX3Jlc3VsdF9jb2Rlc1wiXTtfc3FsaXRlM19maWxlX2NvbnRyb2w9TW9kdWxlW1wiX3NxbGl0ZTNfZmlsZV9jb250cm9sXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19maWxlX2NvbnRyb2xcIl07X3NxbGl0ZTNfdGVzdF9jb250cm9sPU1vZHVsZVtcIl9zcWxpdGUzX3Rlc3RfY29udHJvbFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdGVzdF9jb250cm9sXCJdO19zcWxpdGUzX2NyZWF0ZV9maWxlbmFtZT1Nb2R1bGVbXCJfc3FsaXRlM19jcmVhdGVfZmlsZW5hbWVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NyZWF0ZV9maWxlbmFtZVwiXTtfc3FsaXRlM19mcmVlX2ZpbGVuYW1lPU1vZHVsZVtcIl9zcWxpdGUzX2ZyZWVfZmlsZW5hbWVcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2ZyZWVfZmlsZW5hbWVcIl07X3NxbGl0ZTNfdXJpX3BhcmFtZXRlcj1Nb2R1bGVbXCJfc3FsaXRlM191cmlfcGFyYW1ldGVyXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM191cmlfcGFyYW1ldGVyXCJdO19zcWxpdGUzX3VyaV9rZXk9TW9kdWxlW1wiX3NxbGl0ZTNfdXJpX2tleVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdXJpX2tleVwiXTtfc3FsaXRlM191cmlfYm9vbGVhbj1Nb2R1bGVbXCJfc3FsaXRlM191cmlfYm9vbGVhblwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdXJpX2Jvb2xlYW5cIl07X3NxbGl0ZTNfdXJpX2ludDY0PU1vZHVsZVtcIl9zcWxpdGUzX3VyaV9pbnQ2NFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdXJpX2ludDY0XCJdO19zcWxpdGUzX2ZpbGVuYW1lX2RhdGFiYXNlPU1vZHVsZVtcIl9zcWxpdGUzX2ZpbGVuYW1lX2RhdGFiYXNlXCJdPXdhc21FeHBvcnRzW1wic3FsaXRlM19maWxlbmFtZV9kYXRhYmFzZVwiXTtfc3FsaXRlM19maWxlbmFtZV9qb3VybmFsPU1vZHVsZVtcIl9zcWxpdGUzX2ZpbGVuYW1lX2pvdXJuYWxcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2ZpbGVuYW1lX2pvdXJuYWxcIl07X3NxbGl0ZTNfZmlsZW5hbWVfd2FsPU1vZHVsZVtcIl9zcWxpdGUzX2ZpbGVuYW1lX3dhbFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZmlsZW5hbWVfd2FsXCJdO19zcWxpdGUzX2RiX25hbWU9TW9kdWxlW1wiX3NxbGl0ZTNfZGJfbmFtZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZGJfbmFtZVwiXTtfc3FsaXRlM19kYl9maWxlbmFtZT1Nb2R1bGVbXCJfc3FsaXRlM19kYl9maWxlbmFtZVwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfZGJfZmlsZW5hbWVcIl07X3NxbGl0ZTNfZGJfcmVhZG9ubHk9TW9kdWxlW1wiX3NxbGl0ZTNfZGJfcmVhZG9ubHlcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2RiX3JlYWRvbmx5XCJdO19zcWxpdGUzX2NvbXBpbGVvcHRpb25fdXNlZD1Nb2R1bGVbXCJfc3FsaXRlM19jb21waWxlb3B0aW9uX3VzZWRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX2NvbXBpbGVvcHRpb25fdXNlZFwiXTtfc3FsaXRlM19jb21waWxlb3B0aW9uX2dldD1Nb2R1bGVbXCJfc3FsaXRlM19jb21waWxlb3B0aW9uX2dldFwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfY29tcGlsZW9wdGlvbl9nZXRcIl07X3NxbGl0ZTNfc291cmNlaWQ9TW9kdWxlW1wiX3NxbGl0ZTNfc291cmNlaWRcIl09d2FzbUV4cG9ydHNbXCJzcWxpdGUzX3NvdXJjZWlkXCJdO19tZW1jbXA9TW9kdWxlW1wiX21lbWNtcFwiXT13YXNtRXhwb3J0c1tcIm1lbWNtcFwiXTtfbWFsbG9jPU1vZHVsZVtcIl9tYWxsb2NcIl09d2FzbUV4cG9ydHNbXCJtYWxsb2NcIl07X2ZyZWU9TW9kdWxlW1wiX2ZyZWVcIl09d2FzbUV4cG9ydHNbXCJmcmVlXCJdO19SZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9ucz1Nb2R1bGVbXCJfUmVnaXN0ZXJFeHRlbnNpb25GdW5jdGlvbnNcIl09d2FzbUV4cG9ydHNbXCJSZWdpc3RlckV4dGVuc2lvbkZ1bmN0aW9uc1wiXTtfZ2V0U3FsaXRlRnJlZT1Nb2R1bGVbXCJfZ2V0U3FsaXRlRnJlZVwiXT13YXNtRXhwb3J0c1tcImdldFNxbGl0ZUZyZWVcIl07X21haW49TW9kdWxlW1wiX21haW5cIl09d2FzbUV4cG9ydHNbXCJtYWluXCJdO19saWJhdXRob3JpemVyX3NldF9hdXRob3JpemVyPU1vZHVsZVtcIl9saWJhdXRob3JpemVyX3NldF9hdXRob3JpemVyXCJdPXdhc21FeHBvcnRzW1wibGliYXV0aG9yaXplcl9zZXRfYXV0aG9yaXplclwiXTtfbGliZnVuY3Rpb25fY3JlYXRlX2Z1bmN0aW9uPU1vZHVsZVtcIl9saWJmdW5jdGlvbl9jcmVhdGVfZnVuY3Rpb25cIl09d2FzbUV4cG9ydHNbXCJsaWJmdW5jdGlvbl9jcmVhdGVfZnVuY3Rpb25cIl07X2xpYmhvb2tfY29tbWl0X2hvb2s9TW9kdWxlW1wiX2xpYmhvb2tfY29tbWl0X2hvb2tcIl09d2FzbUV4cG9ydHNbXCJsaWJob29rX2NvbW1pdF9ob29rXCJdO19saWJob29rX3VwZGF0ZV9ob29rPU1vZHVsZVtcIl9saWJob29rX3VwZGF0ZV9ob29rXCJdPXdhc21FeHBvcnRzW1wibGliaG9va191cGRhdGVfaG9va1wiXTtfbGlicHJvZ3Jlc3NfcHJvZ3Jlc3NfaGFuZGxlcj1Nb2R1bGVbXCJfbGlicHJvZ3Jlc3NfcHJvZ3Jlc3NfaGFuZGxlclwiXT13YXNtRXhwb3J0c1tcImxpYnByb2dyZXNzX3Byb2dyZXNzX2hhbmRsZXJcIl07X2xpYnZmc192ZnNfcmVnaXN0ZXI9TW9kdWxlW1wiX2xpYnZmc192ZnNfcmVnaXN0ZXJcIl09d2FzbUV4cG9ydHNbXCJsaWJ2ZnNfdmZzX3JlZ2lzdGVyXCJdO19tZW1jcHk9TW9kdWxlW1wiX21lbWNweVwiXT13YXNtRXhwb3J0c1tcIm1lbWNweVwiXTtfbWVtc2V0PU1vZHVsZVtcIl9tZW1zZXRcIl09d2FzbUV4cG9ydHNbXCJtZW1zZXRcIl07X2Vtc2NyaXB0ZW5fYnVpbHRpbl9tZW1hbGlnbj13YXNtRXhwb3J0c1tcImVtc2NyaXB0ZW5fYnVpbHRpbl9tZW1hbGlnblwiXTtfX2Vtc2NyaXB0ZW5fdGltZW91dD13YXNtRXhwb3J0c1tcIl9lbXNjcmlwdGVuX3RpbWVvdXRcIl07X19lbXNjcmlwdGVuX3RlbXByZXRfZ2V0PXdhc21FeHBvcnRzW1wiX2Vtc2NyaXB0ZW5fdGVtcHJldF9nZXRcIl07X19lbXNjcmlwdGVuX3N0YWNrX3Jlc3RvcmU9d2FzbUV4cG9ydHNbXCJfZW1zY3JpcHRlbl9zdGFja19yZXN0b3JlXCJdO19fZW1zY3JpcHRlbl9zdGFja19hbGxvYz13YXNtRXhwb3J0c1tcIl9lbXNjcmlwdGVuX3N0YWNrX2FsbG9jXCJdO19lbXNjcmlwdGVuX3N0YWNrX2dldF9jdXJyZW50PXdhc21FeHBvcnRzW1wiZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudFwiXTtkeW5DYWxsX3ZpaWlpaj13YXNtRXhwb3J0c1tcImR5bkNhbGxfdmlpaWlqXCJdO2R5bkNhbGxfdmlqaWk9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX3ZpamlpXCJdO2R5bkNhbGxfaWlpaWo9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX2lpaWlqXCJdO2R5bkNhbGxfdmlqaT13YXNtRXhwb3J0c1tcImR5bkNhbGxfdmlqaVwiXTtkeW5DYWxsX2lpaj13YXNtRXhwb3J0c1tcImR5bkNhbGxfaWlqXCJdO2R5bkNhbGxfaWlqaWk9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX2lpamlpXCJdO2R5bkNhbGxfaWlqaT13YXNtRXhwb3J0c1tcImR5bkNhbGxfaWlqaVwiXTtkeW5DYWxsX2lpaWlpaWo9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX2lpaWlpaWpcIl07ZHluQ2FsbF9paWlqPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9paWlqXCJdO2R5bkNhbGxfamlpPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9qaWlcIl07ZHluQ2FsbF9qaT13YXNtRXhwb3J0c1tcImR5bkNhbGxfamlcIl07ZHluQ2FsbF92aWo9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX3ZpalwiXTtkeW5DYWxsX2lpaWlpamlpPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9paWlpaWppaVwiXTtkeW5DYWxsX2o9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX2pcIl07ZHluQ2FsbF9qaj13YXNtRXhwb3J0c1tcImR5bkNhbGxfampcIl07ZHluQ2FsbF9qaWlqPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9qaWlqXCJdO2R5bkNhbGxfaWlpaWppPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9paWlpamlcIl07ZHluQ2FsbF9paWlpamlpPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9paWlpamlpXCJdO2R5bkNhbGxfaWo9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX2lqXCJdO2R5bkNhbGxfdmlpamk9d2FzbUV4cG9ydHNbXCJkeW5DYWxsX3ZpaWppXCJdO2R5bkNhbGxfdmlpamlpPXdhc21FeHBvcnRzW1wiZHluQ2FsbF92aWlqaWlcIl07ZHluQ2FsbF9paWlpamppPXdhc21FeHBvcnRzW1wiZHluQ2FsbF9paWlpamppXCJdO21lbW9yeT13YXNtTWVtb3J5PXdhc21FeHBvcnRzW1wibWVtb3J5XCJdO19zcWxpdGUzX3ZlcnNpb249TW9kdWxlW1wiX3NxbGl0ZTNfdmVyc2lvblwiXT13YXNtRXhwb3J0c1tcInNxbGl0ZTNfdmVyc2lvblwiXS52YWx1ZTtfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlPXdhc21UYWJsZT13YXNtRXhwb3J0c1tcIl9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGVcIl19dmFyIHdhc21JbXBvcnRzPXtfX2Fzc2VydF9mYWlsOl9fX2Fzc2VydF9mYWlsLF9fc3lzY2FsbF9jaG1vZDpfX19zeXNjYWxsX2NobW9kLF9fc3lzY2FsbF9mYWNjZXNzYXQ6X19fc3lzY2FsbF9mYWNjZXNzYXQsX19zeXNjYWxsX2ZjaG1vZDpfX19zeXNjYWxsX2ZjaG1vZCxfX3N5c2NhbGxfZmNob3duMzI6X19fc3lzY2FsbF9mY2hvd24zMixfX3N5c2NhbGxfZmNudGw2NDpfX19zeXNjYWxsX2ZjbnRsNjQsX19zeXNjYWxsX2ZzdGF0NjQ6X19fc3lzY2FsbF9mc3RhdDY0LF9fc3lzY2FsbF9mdHJ1bmNhdGU2NDpfX19zeXNjYWxsX2Z0cnVuY2F0ZTY0LF9fc3lzY2FsbF9nZXRjd2Q6X19fc3lzY2FsbF9nZXRjd2QsX19zeXNjYWxsX2xzdGF0NjQ6X19fc3lzY2FsbF9sc3RhdDY0LF9fc3lzY2FsbF9ta2RpcmF0Ol9fX3N5c2NhbGxfbWtkaXJhdCxfX3N5c2NhbGxfbmV3ZnN0YXRhdDpfX19zeXNjYWxsX25ld2ZzdGF0YXQsX19zeXNjYWxsX29wZW5hdDpfX19zeXNjYWxsX29wZW5hdCxfX3N5c2NhbGxfcmVhZGxpbmthdDpfX19zeXNjYWxsX3JlYWRsaW5rYXQsX19zeXNjYWxsX3JtZGlyOl9fX3N5c2NhbGxfcm1kaXIsX19zeXNjYWxsX3N0YXQ2NDpfX19zeXNjYWxsX3N0YXQ2NCxfX3N5c2NhbGxfdW5saW5rYXQ6X19fc3lzY2FsbF91bmxpbmthdCxfX3N5c2NhbGxfdXRpbWVuc2F0Ol9fX3N5c2NhbGxfdXRpbWVuc2F0LF9hYm9ydF9qczpfX2Fib3J0X2pzLF9lbXNjcmlwdGVuX3J1bnRpbWVfa2VlcGFsaXZlX2NsZWFyOl9fZW1zY3JpcHRlbl9ydW50aW1lX2tlZXBhbGl2ZV9jbGVhcixfbG9jYWx0aW1lX2pzOl9fbG9jYWx0aW1lX2pzLF9tbWFwX2pzOl9fbW1hcF9qcyxfbXVubWFwX2pzOl9fbXVubWFwX2pzLF9zZXRpdGltZXJfanM6X19zZXRpdGltZXJfanMsX3R6c2V0X2pzOl9fdHpzZXRfanMsZW1zY3JpcHRlbl9kYXRlX25vdzpfZW1zY3JpcHRlbl9kYXRlX25vdyxlbXNjcmlwdGVuX2dldF9ub3c6X2Vtc2NyaXB0ZW5fZ2V0X25vdyxlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwOl9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwLGVudmlyb25fZ2V0Ol9lbnZpcm9uX2dldCxlbnZpcm9uX3NpemVzX2dldDpfZW52aXJvbl9zaXplc19nZXQsZmRfY2xvc2U6X2ZkX2Nsb3NlLGZkX2Zkc3RhdF9nZXQ6X2ZkX2Zkc3RhdF9nZXQsZmRfcmVhZDpfZmRfcmVhZCxmZF9zZWVrOl9mZF9zZWVrLGZkX3N5bmM6X2ZkX3N5bmMsZmRfd3JpdGU6X2ZkX3dyaXRlLGlwcDpfaXBwLGlwcF9hc3luYzpfaXBwX2FzeW5jLGlwcGlwcHBwOl9pcHBpcHBwcCxpcHBpcHBwcF9hc3luYzpfaXBwaXBwcHBfYXN5bmMsaXBwcDpfaXBwcCxpcHBwX2FzeW5jOl9pcHBwX2FzeW5jLGlwcHBpOl9pcHBwaSxpcHBwaV9hc3luYzpfaXBwcGlfYXN5bmMsaXBwcGlpaTpfaXBwcGlpaSxpcHBwaWlpX2FzeW5jOl9pcHBwaWlpX2FzeW5jLGlwcHBpaWlwOl9pcHBwaWlpcCxpcHBwaWlpcF9hc3luYzpfaXBwcGlpaXBfYXN5bmMsaXBwcGlwOl9pcHBwaXAsaXBwcGlwX2FzeW5jOl9pcHBwaXBfYXN5bmMsaXBwcGo6X2lwcHBqLGlwcHBqX2FzeW5jOl9pcHBwal9hc3luYyxpcHBwcDpfaXBwcHAsaXBwcHBfYXN5bmM6X2lwcHBwX2FzeW5jLGlwcHBwaTpfaXBwcHBpLGlwcHBwaV9hc3luYzpfaXBwcHBpX2FzeW5jLGlwcHBwaWo6X2lwcHBwaWosaXBwcHBpal9hc3luYzpfaXBwcHBpal9hc3luYyxpcHBwcGlwOl9pcHBwcGlwLGlwcHBwaXBfYXN5bmM6X2lwcHBwaXBfYXN5bmMsaXBwcHBwaXA6X2lwcHBwcGlwLGlwcHBwcGlwX2FzeW5jOl9pcHBwcHBpcF9hc3luYyxwcm9jX2V4aXQ6X3Byb2NfZXhpdCx2cHBpcHBpaTpfdnBwaXBwaWksdnBwaXBwaWlfYXN5bmM6X3ZwcGlwcGlpX2FzeW5jLHZwcHA6X3ZwcHAsdnBwcF9hc3luYzpfdnBwcF9hc3luYyx2cHBwaXA6X3ZwcHBpcCx2cHBwaXBfYXN5bmM6X3ZwcHBpcF9hc3luY307YXN5bmMgZnVuY3Rpb24gY2FsbE1haW4oKXt2YXIgZW50cnlGdW5jdGlvbj1fbWFpbjt2YXIgYXJnYz0wO3ZhciBhcmd2PTA7dHJ5e3ZhciByZXQ9ZW50cnlGdW5jdGlvbihhcmdjLGFyZ3YpO3JldD1hd2FpdCByZXQ7ZXhpdEpTKHJldCx0cnVlKTtyZXR1cm4gcmV0fWNhdGNoKGUpe3JldHVybiBoYW5kbGVFeGNlcHRpb24oZSl9fWZ1bmN0aW9uIHJ1bigpe2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuO3JldHVybn1wcmVSdW4oKTtpZihydW5EZXBlbmRlbmNpZXM+MCl7ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPXJ1bjtyZXR1cm59YXN5bmMgZnVuY3Rpb24gZG9SdW4oKXtNb2R1bGVbXCJjYWxsZWRSdW5cIl09dHJ1ZTtpZihBQk9SVClyZXR1cm47aW5pdFJ1bnRpbWUoKTtwcmVNYWluKCk7cmVhZHlQcm9taXNlUmVzb2x2ZT8uKE1vZHVsZSk7TW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0/LigpO3ZhciBub0luaXRpYWxSdW49TW9kdWxlW1wibm9Jbml0aWFsUnVuXCJdfHxmYWxzZTtpZighbm9Jbml0aWFsUnVuKWF3YWl0IGNhbGxNYWluKCk7cG9zdFJ1bigpfWlmKE1vZHVsZVtcInNldFN0YXR1c1wiXSl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiUnVubmluZy4uLlwiKTtzZXRUaW1lb3V0KCgpPT57c2V0VGltZW91dCgoKT0+TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiXCIpLDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19dmFyIHdhc21FeHBvcnRzO3dhc21FeHBvcnRzPWF3YWl0IChjcmVhdGVXYXNtKCkpO3J1bigpOyhmdW5jdGlvbigpe2NvbnN0IEFzeW5jRnVuY3Rpb249T2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCl7fSkuY29uc3RydWN0b3I7bGV0IHBBc3luY0ZsYWdzPTA7TW9kdWxlW1wic2V0X2F1dGhvcml6ZXJcIl09ZnVuY3Rpb24oZGIseEF1dGhvcml6ZXIscEFwcCl7aWYocEFzeW5jRmxhZ3Mpe01vZHVsZVtcImRlbGV0ZUNhbGxiYWNrXCJdKHBBc3luY0ZsYWdzKTtNb2R1bGVbXCJfc3FsaXRlM19mcmVlXCJdKHBBc3luY0ZsYWdzKTtwQXN5bmNGbGFncz0wfXBBc3luY0ZsYWdzPU1vZHVsZVtcIl9zcWxpdGUzX21hbGxvY1wiXSg0KTtzZXRWYWx1ZShwQXN5bmNGbGFncyx4QXV0aG9yaXplciBpbnN0YW5jZW9mIEFzeW5jRnVuY3Rpb24/MTowLFwiaTMyXCIpO2NvbnN0IHJlc3VsdD1jY2FsbChcImxpYmF1dGhvcml6ZXJfc2V0X2F1dGhvcml6ZXJcIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0sW2RiLHhBdXRob3JpemVyPzE6MCxwQXN5bmNGbGFnc10pO2lmKCFyZXN1bHQmJnhBdXRob3JpemVyKXtNb2R1bGVbXCJzZXRDYWxsYmFja1wiXShwQXN5bmNGbGFncywoXyxpQWN0aW9uLHAzLHA0LHA1LHA2KT0+eEF1dGhvcml6ZXIocEFwcCxpQWN0aW9uLHAzLHA0LHA1LHA2KSl9cmV0dXJuIHJlc3VsdH19KSgpOyhmdW5jdGlvbigpe2NvbnN0IEFzeW5jRnVuY3Rpb249T2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCl7fSkuY29uc3RydWN0b3I7Y29uc3QgRlVOQ19NRVRIT0RTPVtcInhGdW5jXCIsXCJ4U3RlcFwiLFwieEZpbmFsXCJdO2NvbnN0IG1hcEZ1bmN0aW9uTmFtZVRvS2V5PW5ldyBNYXA7TW9kdWxlW1wiY3JlYXRlX2Z1bmN0aW9uXCJdPWZ1bmN0aW9uKGRiLHpGdW5jdGlvbk5hbWUsbkFyZyxlVGV4dFJlcCxwQXBwLHhGdW5jLHhTdGVwLHhGaW5hbCl7Y29uc3QgcEFzeW5jRmxhZ3M9TW9kdWxlW1wiX3NxbGl0ZTNfbWFsbG9jXCJdKDQpO2NvbnN0IHRhcmdldD17eEZ1bmMseFN0ZXAseEZpbmFsfTtzZXRWYWx1ZShwQXN5bmNGbGFncyxGVU5DX01FVEhPRFMucmVkdWNlKChtYXNrLG1ldGhvZCxpKT0+e2lmKHRhcmdldFttZXRob2RdaW5zdGFuY2VvZiBBc3luY0Z1bmN0aW9uKXtyZXR1cm4gbWFza3wxPDxpfXJldHVybiBtYXNrfSwwKSxcImkzMlwiKTtjb25zdCByZXN1bHQ9Y2NhbGwoXCJsaWJmdW5jdGlvbl9jcmVhdGVfZnVuY3Rpb25cIixcIm51bWJlclwiLFtcIm51bWJlclwiLFwic3RyaW5nXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdLFtkYix6RnVuY3Rpb25OYW1lLG5BcmcsZVRleHRSZXAscEFzeW5jRmxhZ3MseEZ1bmM/MTowLHhTdGVwPzE6MCx4RmluYWw/MTowXSk7aWYoIXJlc3VsdCl7aWYobWFwRnVuY3Rpb25OYW1lVG9LZXkuaGFzKHpGdW5jdGlvbk5hbWUpKXtjb25zdCBvbGRLZXk9bWFwRnVuY3Rpb25OYW1lVG9LZXkuZ2V0KHpGdW5jdGlvbk5hbWUpO01vZHVsZVtcImRlbGV0ZUNhbGxiYWNrXCJdKG9sZEtleSl9bWFwRnVuY3Rpb25OYW1lVG9LZXkuc2V0KHpGdW5jdGlvbk5hbWUscEFzeW5jRmxhZ3MpO01vZHVsZVtcInNldENhbGxiYWNrXCJdKHBBc3luY0ZsYWdzLHt4RnVuYyx4U3RlcCx4RmluYWx9KX1yZXR1cm4gcmVzdWx0fX0pKCk7KGZ1bmN0aW9uKCl7Y29uc3QgQXN5bmNGdW5jdGlvbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvcjtsZXQgcEFzeW5jRmxhZ3M9MDtNb2R1bGVbXCJ1cGRhdGVfaG9va1wiXT1mdW5jdGlvbihkYix4VXBkYXRlSG9vayl7aWYocEFzeW5jRmxhZ3Mpe01vZHVsZVtcImRlbGV0ZUNhbGxiYWNrXCJdKHBBc3luY0ZsYWdzKTtNb2R1bGVbXCJfc3FsaXRlM19mcmVlXCJdKHBBc3luY0ZsYWdzKTtwQXN5bmNGbGFncz0wfXBBc3luY0ZsYWdzPU1vZHVsZVtcIl9zcWxpdGUzX21hbGxvY1wiXSg0KTtzZXRWYWx1ZShwQXN5bmNGbGFncyx4VXBkYXRlSG9vayBpbnN0YW5jZW9mIEFzeW5jRnVuY3Rpb24/MTowLFwiaTMyXCIpO2NjYWxsKFwibGliaG9va191cGRhdGVfaG9va1wiLFwidm9pZFwiLFtcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0sW2RiLHhVcGRhdGVIb29rPzE6MCxwQXN5bmNGbGFnc10pO2lmKHhVcGRhdGVIb29rKXtNb2R1bGVbXCJzZXRDYWxsYmFja1wiXShwQXN5bmNGbGFncywoXyxpVXBkYXRlVHlwZSxkYk5hbWUsdGJsTmFtZSxsbzMyLGhpMzIpPT54VXBkYXRlSG9vayhpVXBkYXRlVHlwZSxkYk5hbWUsdGJsTmFtZSxsbzMyLGhpMzIpKX19fSkoKTsoZnVuY3Rpb24oKXtjb25zdCBBc3luY0Z1bmN0aW9uPU9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpe30pLmNvbnN0cnVjdG9yO2xldCBwQXN5bmNGbGFncz0wO01vZHVsZVtcImNvbW1pdF9ob29rXCJdPWZ1bmN0aW9uKGRiLHhDb21taXRIb29rKXtpZihwQXN5bmNGbGFncyl7TW9kdWxlW1wiZGVsZXRlQ2FsbGJhY2tcIl0ocEFzeW5jRmxhZ3MpO01vZHVsZVtcIl9zcWxpdGUzX2ZyZWVcIl0ocEFzeW5jRmxhZ3MpO3BBc3luY0ZsYWdzPTB9cEFzeW5jRmxhZ3M9TW9kdWxlW1wiX3NxbGl0ZTNfbWFsbG9jXCJdKDQpO3NldFZhbHVlKHBBc3luY0ZsYWdzLHhDb21taXRIb29rIGluc3RhbmNlb2YgQXN5bmNGdW5jdGlvbj8xOjAsXCJpMzJcIik7Y2NhbGwoXCJsaWJob29rX2NvbW1pdF9ob29rXCIsXCJ2b2lkXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiXSxbZGIseENvbW1pdEhvb2s/MTowLHBBc3luY0ZsYWdzXSk7aWYoeENvbW1pdEhvb2spe01vZHVsZVtcInNldENhbGxiYWNrXCJdKHBBc3luY0ZsYWdzLF89PnhDb21taXRIb29rKCkpfX19KSgpOyhmdW5jdGlvbigpe2NvbnN0IEFzeW5jRnVuY3Rpb249T2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCl7fSkuY29uc3RydWN0b3I7bGV0IHBBc3luY0ZsYWdzPTA7TW9kdWxlW1wicHJvZ3Jlc3NfaGFuZGxlclwiXT1mdW5jdGlvbihkYixuT3BzLHhQcm9ncmVzcyxwQXBwKXtpZihwQXN5bmNGbGFncyl7TW9kdWxlW1wiZGVsZXRlQ2FsbGJhY2tcIl0ocEFzeW5jRmxhZ3MpO01vZHVsZVtcIl9zcWxpdGUzX2ZyZWVcIl0ocEFzeW5jRmxhZ3MpO3BBc3luY0ZsYWdzPTB9cEFzeW5jRmxhZ3M9TW9kdWxlW1wiX3NxbGl0ZTNfbWFsbG9jXCJdKDQpO3NldFZhbHVlKHBBc3luY0ZsYWdzLHhQcm9ncmVzcyBpbnN0YW5jZW9mIEFzeW5jRnVuY3Rpb24/MTowLFwiaTMyXCIpO2NjYWxsKFwibGlicHJvZ3Jlc3NfcHJvZ3Jlc3NfaGFuZGxlclwiLFwibnVtYmVyXCIsW1wibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCJdLFtkYixuT3BzLHhQcm9ncmVzcz8xOjAscEFzeW5jRmxhZ3NdKTtpZih4UHJvZ3Jlc3Mpe01vZHVsZVtcInNldENhbGxiYWNrXCJdKHBBc3luY0ZsYWdzLF89PnhQcm9ncmVzcyhwQXBwKSl9fX0pKCk7KGZ1bmN0aW9uKCl7Y29uc3QgVkZTX01FVEhPRFM9W1wieE9wZW5cIixcInhEZWxldGVcIixcInhBY2Nlc3NcIixcInhGdWxsUGF0aG5hbWVcIixcInhSYW5kb21uZXNzXCIsXCJ4U2xlZXBcIixcInhDdXJyZW50VGltZVwiLFwieEdldExhc3RFcnJvclwiLFwieEN1cnJlbnRUaW1lSW50NjRcIixcInhDbG9zZVwiLFwieFJlYWRcIixcInhXcml0ZVwiLFwieFRydW5jYXRlXCIsXCJ4U3luY1wiLFwieEZpbGVTaXplXCIsXCJ4TG9ja1wiLFwieFVubG9ja1wiLFwieENoZWNrUmVzZXJ2ZWRMb2NrXCIsXCJ4RmlsZUNvbnRyb2xcIixcInhTZWN0b3JTaXplXCIsXCJ4RGV2aWNlQ2hhcmFjdGVyaXN0aWNzXCIsXCJ4U2htTWFwXCIsXCJ4U2htTG9ja1wiLFwieFNobUJhcnJpZXJcIixcInhTaG1Vbm1hcFwiXTtjb25zdCBtYXBWRlNOYW1lVG9LZXk9bmV3IE1hcDtNb2R1bGVbXCJ2ZnNfcmVnaXN0ZXJcIl09ZnVuY3Rpb24odmZzLG1ha2VEZWZhdWx0KXtsZXQgbWV0aG9kTWFzaz0wO2xldCBhc3luY01hc2s9MDtWRlNfTUVUSE9EUy5mb3JFYWNoKChtZXRob2QsaSk9PntpZih2ZnNbbWV0aG9kXSl7bWV0aG9kTWFza3w9MTw8aTtpZih2ZnNbXCJoYXNBc3luY01ldGhvZFwiXShtZXRob2QpKXthc3luY01hc2t8PTE8PGl9fX0pO2NvbnN0IHZmc1JldHVybj1Nb2R1bGVbXCJfc3FsaXRlM19tYWxsb2NcIl0oNCk7dHJ5e2NvbnN0IHJlc3VsdD1jY2FsbChcImxpYnZmc192ZnNfcmVnaXN0ZXJcIixcIm51bWJlclwiLFtcInN0cmluZ1wiLFwibnVtYmVyXCIsXCJudW1iZXJcIixcIm51bWJlclwiLFwibnVtYmVyXCIsXCJudW1iZXJcIl0sW3Zmcy5uYW1lLHZmcy5teFBhdGhuYW1lLG1ldGhvZE1hc2ssYXN5bmNNYXNrLG1ha2VEZWZhdWx0PzE6MCx2ZnNSZXR1cm5dKTtpZighcmVzdWx0KXtpZihtYXBWRlNOYW1lVG9LZXkuaGFzKHZmcy5uYW1lKSl7Y29uc3Qgb2xkS2V5PW1hcFZGU05hbWVUb0tleS5nZXQodmZzLm5hbWUpO01vZHVsZVtcImRlbGV0ZUNhbGxiYWNrXCJdKG9sZEtleSl9Y29uc3Qga2V5PWdldFZhbHVlKHZmc1JldHVybixcIipcIik7bWFwVkZTTmFtZVRvS2V5LnNldCh2ZnMubmFtZSxrZXkpO01vZHVsZVtcInNldENhbGxiYWNrXCJdKGtleSx2ZnMpfXJldHVybiByZXN1bHR9ZmluYWxseXtNb2R1bGVbXCJfc3FsaXRlM19mcmVlXCJdKHZmc1JldHVybil9fX0pKCk7aWYocnVudGltZUluaXRpYWxpemVkKXttb2R1bGVSdG49TW9kdWxlfWVsc2V7bW9kdWxlUnRuPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntyZWFkeVByb21pc2VSZXNvbHZlPXJlc29sdmU7cmVhZHlQcm9taXNlUmVqZWN0PXJlamVjdH0pfVxuO3JldHVybiBtb2R1bGVSdG59ZXhwb3J0IGRlZmF1bHQgTW9kdWxlO1xuIiwiLy8gQ29weXJpZ2h0IDIwMjQgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbmltcG9ydCAqIGFzIFZGUyBmcm9tICcuL1ZGUy5qcyc7XG5cbmNvbnN0IEFzeW5jRnVuY3Rpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvcjtcblxuLy8gTWlsbGlzZWNvbmRzIHNpbmNlIEp1bGlhbiBlcG9jaCBhcyBhIEJpZ0ludC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zcWxpdGUvc3FsaXRlL2Jsb2IvZTU3NTI3YzE0ZjdiN2NmYTZlMzJlZWFiNWM1NDlkNTBjNGZhMzY3NC9zcmMvb3NfdW5peC5jI0w2ODcyLUw2ODgyXG5jb25zdCBVTklYX0VQT0NIID0gMjQ0MDU4NzVuICogODY0MDAwMG47XG5cbi8vIENvbnZlbmllbmNlIGJhc2UgY2xhc3MgZm9yIGEgSmF2YVNjcmlwdCBWRlMuXG4vLyBUaGUgcmF3IHhPcGVuLCB4UmVhZCwgZXRjLiBmdW5jdGlvbiBzaWduYXR1cmVzIHJlY2VpdmUgb25seSBDIHByaW1pdGl2ZXNcbi8vIHdoaWNoIGFyZW4ndCBlYXN5IHRvIHdvcmsgd2l0aC4gVGhpcyBjbGFzcyBwcm92aWRlcyBjb3JyZXNwb25kaW5nIGNhbGxzXG4vLyBsaWtlIGpPcGVuLCBqUmVhZCwgZXRjLiwgd2hpY2ggcmVjZWl2ZSBKYXZhU2NyaXB0LWZyaWVuZGxpZXIgYXJndW1lbnRzXG4vLyBzdWNoIGFzIHN0cmluZywgVWludDhBcnJheSwgYW5kIERhdGFWaWV3LlxuZXhwb3J0IGNsYXNzIEZhY2FkZVZGUyBleHRlbmRzIFZGUy5CYXNlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlIFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgbW9kdWxlKSB7XG4gICAgc3VwZXIobmFtZSwgbW9kdWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0byBpbmRpY2F0ZSB3aGljaCBtZXRob2RzIGFyZSBhc3luY2hyb25vdXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0FzeW5jTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAvLyBUaGUgaW5wdXQgYXJndW1lbnQgaXMgYSBzdHJpbmcgbGlrZSBcInhPcGVuXCIsIHNvIGNvbnZlcnQgdG8gXCJqT3BlblwiLlxuICAgIC8vIFRoZW4gY2hlY2sgaWYgdGhlIG1ldGhvZCBleGlzdHMgYW5kIGlzIGFzeW5jLlxuICAgIGNvbnN0IGpNZXRob2ROYW1lID0gYGoke21ldGhvZE5hbWUuc2xpY2UoMSl9YDtcbiAgICByZXR1cm4gdGhpc1tqTWV0aG9kTmFtZV0gaW5zdGFuY2VvZiBBc3luY0Z1bmN0aW9uO1xuICB9XG4gIFxuICAvKipcbiAgICogUmV0dXJuIHRoZSBmaWxlbmFtZSBmb3IgYSBmaWxlIGlkIGZvciB1c2UgYnkgbWl4aW5zLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRGaWxlbmFtZShwRmlsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gZmlsZW5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwT3V0RmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgak9wZW4oZmlsZW5hbWUsIHBGaWxlLCBmbGFncywgcE91dEZsYWdzKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfQ0FOVE9QRU47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3luY0RpciBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqRGVsZXRlKGZpbGVuYW1lLCBzeW5jRGlyKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakFjY2VzcyhmaWxlbmFtZSwgZmxhZ3MsIHBSZXNPdXQpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gek91dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqRnVsbFBhdGhuYW1lKGZpbGVuYW1lLCB6T3V0KSB7XG4gICAgLy8gQ29weSB0aGUgZmlsZW5hbWUgdG8gdGhlIG91dHB1dCBidWZmZXIuXG4gICAgY29uc3QgeyByZWFkLCB3cml0dGVuIH0gPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGVJbnRvKGZpbGVuYW1lLCB6T3V0KTtcbiAgICBpZiAocmVhZCA8IGZpbGVuYW1lLmxlbmd0aCkgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgaWYgKHdyaXR0ZW4gPj0gek91dC5sZW5ndGgpIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgIHpPdXRbd3JpdHRlbl0gPSAwO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gekJ1ZiBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqR2V0TGFzdEVycm9yKHpCdWYpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakNsb3NlKHBGaWxlKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqUmVhZChwRmlsZSwgcERhdGEsIGlPZmZzZXQpIHtcbiAgICBwRGF0YS5maWxsKDApO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1NIT1JUX1JFQUQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqV3JpdGUocEZpbGUsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfV1JJVEU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqVHJ1bmNhdGUocEZpbGUsIHNpemUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqU3luYyhwRmlsZSwgZmxhZ3MpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBTaXplXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakZpbGVTaXplKHBGaWxlLCBwU2l6ZSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2tUeXBlIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpMb2NrKHBGaWxlLCBsb2NrVHlwZSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2tUeXBlIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpVbmxvY2socEZpbGUsIGxvY2tUeXBlKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpDaGVja1Jlc2VydmVkTG9jayhwRmlsZSwgcFJlc091dCkge1xuICAgIHBSZXNPdXQuc2V0SW50MzIoMCwgMCwgdHJ1ZSk7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwQXJnXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakZpbGVDb250cm9sKHBGaWxlLCBvcCwgcEFyZykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX05PVEZPVU5EO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpTZWN0b3JTaXplKHBGaWxlKSB7XG4gICAgcmV0dXJuIHN1cGVyLnhTZWN0b3JTaXplKHBGaWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGVcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHBGaWxlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwT3V0RmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeE9wZW4ocFZmcywgek5hbWUsIHBGaWxlLCBmbGFncywgcE91dEZsYWdzKSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSB0aGlzLiNkZWNvZGVGaWxlbmFtZSh6TmFtZSwgZmxhZ3MpO1xuICAgIGNvbnN0IHBPdXRGbGFnc1ZpZXcgPSB0aGlzLiNtYWtlVHlwZWREYXRhVmlldygnSW50MzInLCBwT3V0RmxhZ3MpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pPcGVuJywgZmlsZW5hbWUsIHBGaWxlLCAnMHgnICsgZmxhZ3MudG9TdHJpbmcoMTYpKTtcbiAgICByZXR1cm4gdGhpcy5qT3BlbihmaWxlbmFtZSwgcEZpbGUsIGZsYWdzLCBwT3V0RmxhZ3NWaWV3KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcENoYXJPdXRcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4UmFuZG9tbmVzcyhwVmZzLCBuQnl0ZSwgcENoYXJPdXQpIHtcbiAgICBjb25zdCByYW5kb21BcnJheSA9IG5ldyBVaW50OEFycmF5KG5CeXRlKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbUFycmF5KTtcbiAgICAvLyBDb3B5IHJhbmRvbUFycmF5IHRvIHRoZSBXZWJBc3NlbWJseSBtZW1vcnlcbiAgICBjb25zdCBidWZmZXIgPSBwQ2hhck91dDsgLy8gUG9pbnRlciB0byBtZW1vcnkgaW4gV2ViQXNzZW1ibHlcbiAgICB0aGlzLl9tb2R1bGUuSEVBUFU4LnNldChyYW5kb21BcnJheSwgYnVmZmVyKTsgLy8gQ29weSByYW5kb21BcnJheSBpbnRvIG1lbW9yeSBzdGFydGluZyBhdCBidWZmZXJcbiAgICByZXR1cm4gbkJ5dGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCB0aW1lIGFzIG1pbGxpc2Vjb25kcyBzaW5jZSBVbml4IGVwb2NoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIHBvaW50ZXIgdG8gdGhlIFZGU1xuICAgKiBAcGFyYW0ge251bWJlcn0gcFRpbWUgcG9pbnRlciB0byB3cml0ZSB0aGUgdGltZSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBTUUxpdGUgZXJyb3IgY29kZVxuICAgKi9cbiAgeEN1cnJlbnRUaW1lSW50NjQocFZmcywgcFRpbWUpIHtcbiAgICAvLyBDcmVhdGUgYSBEYXRhVmlldyB0byB3cml0ZSB0aGUgY3VycmVudCB0aW1lXG4gICAgY29uc3QgdGltZVZpZXcgPSB0aGlzLiNtYWtlVHlwZWREYXRhVmlldygnQmlnSW50NjQnLCBwVGltZSk7XG4gIFxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gQmlnSW50KERhdGUubm93KCkpO1xuICAgIC8vIENvbnZlcnQgdGhlIGN1cnJlbnQgdGltZSB0byBtaWxsaXNlY29uZHMgc2luY2UgVW5peCBlcG9jaFxuICAgIGNvbnN0IHZhbHVlID0gVU5JWF9FUE9DSCArIGN1cnJlbnRUaW1lO1xuICAgIFxuICAgIC8vIFdyaXRlIHRoZSB0aW1lIHZhbHVlIHRvIHRoZSBwb2ludGVyIGxvY2F0aW9uXG4gICAgdGltZVZpZXcuc2V0QmlnSW50NjQoMCwgdmFsdWUsIHRydWUpO1xuICAgIFxuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeW5jRGlyIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhEZWxldGUocFZmcywgek5hbWUsIHN5bmNEaXIpIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRoaXMuX21vZHVsZS5VVEY4VG9TdHJpbmcoek5hbWUpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pEZWxldGUnLCBmaWxlbmFtZSwgc3luY0Rpcik7XG4gICAgcmV0dXJuIHRoaXMuakRlbGV0ZShmaWxlbmFtZSwgc3luY0Rpcik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4QWNjZXNzKHBWZnMsIHpOYW1lLCBmbGFncywgcFJlc091dCkge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGhpcy5fbW9kdWxlLlVURjhUb1N0cmluZyh6TmFtZSk7XG4gICAgY29uc3QgcFJlc091dFZpZXcgPSB0aGlzLiNtYWtlVHlwZWREYXRhVmlldygnSW50MzInLCBwUmVzT3V0KTtcbiAgICB0aGlzWydsb2cnXT8uKCdqQWNjZXNzJywgZmlsZW5hbWUsIGZsYWdzKTtcbiAgICByZXR1cm4gdGhpcy5qQWNjZXNzKGZpbGVuYW1lLCBmbGFncywgcFJlc091dFZpZXcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuT3V0IFxuICAgKiBAcGFyYW0ge251bWJlcn0gek91dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RnVsbFBhdGhuYW1lKHBWZnMsIHpOYW1lLCBuT3V0LCB6T3V0KSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSB0aGlzLl9tb2R1bGUuVVRGOFRvU3RyaW5nKHpOYW1lKTtcbiAgICBjb25zdCB6T3V0QXJyYXkgPSB0aGlzLl9tb2R1bGUuSEVBUFU4LnN1YmFycmF5KHpPdXQsIHpPdXQgKyBuT3V0KTtcbiAgICB0aGlzWydsb2cnXT8uKCdqRnVsbFBhdGhuYW1lJywgZmlsZW5hbWUsIG5PdXQpO1xuICAgIHJldHVybiB0aGlzLmpGdWxsUGF0aG5hbWUoZmlsZW5hbWUsIHpPdXRBcnJheSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuQnVmIFxuICAgKiBAcGFyYW0ge251bWJlcn0gekJ1ZiBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4R2V0TGFzdEVycm9yKHBWZnMsIG5CdWYsIHpCdWYpIHtcbiAgICBjb25zdCB6QnVmQXJyYXkgPSB0aGlzLl9tb2R1bGUuSEVBUFU4LnN1YmFycmF5KHpCdWYsIHpCdWYgKyBuQnVmKTtcbiAgICB0aGlzWydsb2cnXT8uKCdqR2V0TGFzdEVycm9yJywgbkJ1Zik7XG4gICAgcmV0dXJuIHRoaXMuakdldExhc3RFcnJvcih6QnVmQXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4Q2xvc2UocEZpbGUpIHtcbiAgICB0aGlzWydsb2cnXT8uKCdqQ2xvc2UnLCBwRmlsZSk7XG4gICAgcmV0dXJuIHRoaXMuakNsb3NlKHBGaWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlBbXQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0TG8gXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0SGkgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFJlYWQocEZpbGUsIHBEYXRhLCBpQW10LCBpT2Zmc2V0TG8sIGlPZmZzZXRIaSkge1xuICAgIGNvbnN0IHBEYXRhQXJyYXkgPSB0aGlzLiNtYWtlRGF0YUFycmF5KHBEYXRhLCBpQW10KTtcbiAgICBjb25zdCBpT2Zmc2V0ID0gZGVsZWdhbGl6ZShpT2Zmc2V0TG8sIGlPZmZzZXRIaSk7XG4gICAgdGhpc1snbG9nJ10/LignalJlYWQnLCBwRmlsZSwgaUFtdCwgaU9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXMualJlYWQocEZpbGUsIHBEYXRhQXJyYXksIGlPZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaUFtdCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRMbyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRIaSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4V3JpdGUocEZpbGUsIHBEYXRhLCBpQW10LCBpT2Zmc2V0TG8sIGlPZmZzZXRIaSkge1xuICAgIGNvbnN0IHBEYXRhQXJyYXkgPSB0aGlzLiNtYWtlRGF0YUFycmF5KHBEYXRhLCBpQW10KTtcbiAgICBjb25zdCBpT2Zmc2V0ID0gZGVsZWdhbGl6ZShpT2Zmc2V0TG8sIGlPZmZzZXRIaSk7XG4gICAgdGhpc1snbG9nJ10/LignaldyaXRlJywgcEZpbGUsIHBEYXRhQXJyYXksIGlPZmZzZXQpO1xuICAgIHJldHVybiB0aGlzLmpXcml0ZShwRmlsZSwgcERhdGFBcnJheSwgaU9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZUxvIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZUhpIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhUcnVuY2F0ZShwRmlsZSwgc2l6ZUxvLCBzaXplSGkpIHtcbiAgICBjb25zdCBzaXplID0gZGVsZWdhbGl6ZShzaXplTG8sIHNpemVIaSk7XG4gICAgdGhpc1snbG9nJ10/LignalRydW5jYXRlJywgcEZpbGUsIHNpemUpO1xuICAgIHJldHVybiB0aGlzLmpUcnVuY2F0ZShwRmlsZSwgc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFN5bmMocEZpbGUsIGZsYWdzKSB7XG4gICAgdGhpc1snbG9nJ10/LignalN5bmMnLCBwRmlsZSwgZmxhZ3MpO1xuICAgIHJldHVybiB0aGlzLmpTeW5jKHBGaWxlLCBmbGFncyk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBTaXplIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhGaWxlU2l6ZShwRmlsZSwgcFNpemUpIHtcbiAgICBjb25zdCBwU2l6ZVZpZXcgPSB0aGlzLiNtYWtlVHlwZWREYXRhVmlldygnQmlnSW50NjQnLCBwU2l6ZSk7XG4gICAgdGhpc1snbG9nJ10/LignakZpbGVTaXplJywgcEZpbGUpO1xuICAgIHJldHVybiB0aGlzLmpGaWxlU2l6ZShwRmlsZSwgcFNpemVWaWV3KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4TG9jayhwRmlsZSwgbG9ja1R5cGUpIHtcbiAgICB0aGlzWydsb2cnXT8uKCdqTG9jaycsIHBGaWxlLCBsb2NrVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuakxvY2socEZpbGUsIGxvY2tUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4VW5sb2NrKHBGaWxlLCBsb2NrVHlwZSkge1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pVbmxvY2snLCBwRmlsZSwgbG9ja1R5cGUpO1xuICAgIHJldHVybiB0aGlzLmpVbmxvY2socEZpbGUsIGxvY2tUeXBlKTtcbiAgfSBcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4Q2hlY2tSZXNlcnZlZExvY2socEZpbGUsIHBSZXNPdXQpIHtcbiAgICBjb25zdCBwUmVzT3V0VmlldyA9IHRoaXMuI21ha2VUeXBlZERhdGFWaWV3KCdJbnQzMicsIHBSZXNPdXQpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pDaGVja1Jlc2VydmVkTG9jaycsIHBGaWxlKTtcbiAgICByZXR1cm4gdGhpcy5qQ2hlY2tSZXNlcnZlZExvY2socEZpbGUsIHBSZXNPdXRWaWV3KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBBcmcgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeEZpbGVDb250cm9sKHBGaWxlLCBvcCwgcEFyZykge1xuICAgIGNvbnN0IHBBcmdWaWV3ID0gbmV3IERhdGFWaWV3KFxuICAgICAgdGhpcy5fbW9kdWxlLkhFQVBVOC5idWZmZXIsXG4gICAgICB0aGlzLl9tb2R1bGUuSEVBUFU4LmJ5dGVPZmZzZXQgKyBwQXJnKTtcbiAgICB0aGlzWydsb2cnXT8uKCdqRmlsZUNvbnRyb2wnLCBwRmlsZSwgb3AsIHBBcmdWaWV3KTtcbiAgICByZXR1cm4gdGhpcy5qRmlsZUNvbnRyb2wocEZpbGUsIG9wLCBwQXJnVmlldyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhTZWN0b3JTaXplKHBGaWxlKSB7XG4gICAgdGhpc1snbG9nJ10/LignalNlY3RvclNpemUnLCBwRmlsZSk7XG4gICAgcmV0dXJuIHRoaXMualNlY3RvclNpemUocEZpbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHBGaWxlKSB7XG4gICAgdGhpc1snbG9nJ10/LignakRldmljZUNoYXJhY3RlcmlzdGljcycsIHBGaWxlKTtcbiAgICByZXR1cm4gdGhpcy5qRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHBGaWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVkIERhdGFWaWV3IGZvciBwb2ludGVyIGFyZ3VtZW50cy5cbiAgICogUG9pbnRlcnMgdG8gYSBzaW5nbGUgdmFsdWUgYXJlIHBhc3NlZCB1c2luZyBhIERhdGFWaWV3LWxpa2UgY2xhc3MuXG4gICAqIFRoaXMgd3JhcHBlciBjbGFzcyBwcmV2ZW50cyB1c2Ugb2YgaW5jb3JyZWN0IHR5cGUgb3IgZW5kaWFubmVzcywgYW5kXG4gICAqIHJlYWNxdWlyZXMgdGhlIHVuZGVybHlpbmcgYnVmZmVyIHdoZW4gdGhlIFdlYkFzc2VtYmx5IG1lbW9yeSBpcyByZXNpemVkLlxuICAgKiBAcGFyYW0geydJbnQzMid8J0JpZ0ludDY0J30gdHlwZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVPZmZzZXQgXG4gICAqIEByZXR1cm5zIHtEYXRhVmlld31cbiAgICovXG4gICNtYWtlVHlwZWREYXRhVmlldyh0eXBlLCBieXRlT2Zmc2V0KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBuZXcgRGF0YVZpZXdQcm94eSh0aGlzLl9tb2R1bGUsIGJ5dGVPZmZzZXQsIHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZWQgVWludDhBcnJheSBmb3IgYnVmZmVyIGFyZ3VtZW50cy5cbiAgICogTWVtb3J5IGJsb2NrcyBhcmUgcGFzc2VkIGFzIGEgVWludDhBcnJheS1saWtlIGNsYXNzLiBUaGlzIHdyYXBwZXJcbiAgICogY2xhc3MgcmVhY3F1aXJlcyB0aGUgdW5kZXJseWluZyBidWZmZXIgd2hlbiB0aGUgV2ViQXNzZW1ibHkgbWVtb3J5XG4gICAqIGlzIHJlc2l6ZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlT2Zmc2V0IFxuICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZUxlbmd0aCBcbiAgICogQHJldHVybnMge1VpbnQ4QXJyYXl9XG4gICAqL1xuICAjbWFrZURhdGFBcnJheShieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheVByb3h5KHRoaXMuX21vZHVsZSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XG4gIH1cblxuICAjZGVjb2RlRmlsZW5hbWUoek5hbWUsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzICYgVkZTLlNRTElURV9PUEVOX1VSSSkge1xuICAgICAgLy8gVGhlIGZpcnN0IG51bGwtdGVybWluYXRlZCBzdHJpbmcgaXMgdGhlIFVSSSBwYXRoLiBTdWJzZXF1ZW50XG4gICAgICAvLyBzdHJpbmdzIGFyZSBxdWVyeSBwYXJhbWV0ZXIga2V5cyBhbmQgdmFsdWVzLlxuICAgICAgLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9vcGVuLmh0bWwjdXJpZmlsZW5hbWVzaW5zcWxpdGUzb3BlblxuICAgICAgbGV0IHBOYW1lID0gek5hbWU7XG4gICAgICBsZXQgc3RhdGUgPSAxO1xuICAgICAgY29uc3QgY2hhckNvZGVzID0gW107XG4gICAgICB3aGlsZSAoc3RhdGUpIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSB0aGlzLl9tb2R1bGUuSEVBUFU4W3BOYW1lKytdO1xuICAgICAgICBpZiAoY2hhckNvZGUpIHtcbiAgICAgICAgICBjaGFyQ29kZXMucHVzaChjaGFyQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9tb2R1bGUuSEVBUFU4W3BOYW1lXSkgc3RhdGUgPSBudWxsO1xuICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gcGF0aFxuICAgICAgICAgICAgICBjaGFyQ29kZXMucHVzaCgnPycuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICAgIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IC8vIGtleVxuICAgICAgICAgICAgICBjaGFyQ29kZXMucHVzaCgnPScuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICAgIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IC8vIHZhbHVlXG4gICAgICAgICAgICAgIGNoYXJDb2Rlcy5wdXNoKCcmJy5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgICAgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAgbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBVaW50OEFycmF5KGNoYXJDb2RlcykpO1xuICAgIH1cbiAgICByZXR1cm4gek5hbWUgPyB0aGlzLl9tb2R1bGUuVVRGOFRvU3RyaW5nKHpOYW1lKSA6IG51bGw7XG4gIH1cbn1cblxuLy8gRW1zY3JpcHRlbiBcImxlZ2FsaXplc1wiIDY0LWJpdCBpbnRlZ2VyIGFyZ3VtZW50cyBieSBwYXNzaW5nIHRoZW0gYXNcbi8vIHR3byAzMi1iaXQgc2lnbmVkIGludGVnZXJzLlxuZnVuY3Rpb24gZGVsZWdhbGl6ZShsbzMyLCBoaTMyKSB7XG4gIHJldHVybiAoaGkzMiAqIDB4MTAwMDAwMDAwKSArIGxvMzIgKyAobG8zMiA8IDAgPyAyKiozMiA6IDApO1xufVxuXG4vLyBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgVWludDhBcnJheS1saWtlIGludGVyZmFjZSBmb3IgYSBXZWJBc3NlbWJseSBtZW1vcnlcbi8vIGJ1ZmZlci4gSXQgaXMgdXNlZCB0byBhY2Nlc3MgbWVtb3J5IGJsb2NrcyBwYXNzZWQgYXMgYXJndW1lbnRzIHRvXG4vLyB4UmVhZCwgeFdyaXRlLCBldGMuIFRoZSBjbGFzcyByZWFjcXVpcmVzIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlciB3aGVuIHRoZVxuLy8gV2ViQXNzZW1ibHkgbWVtb3J5IGlzIHJlc2l6ZWQsIHdoaWNoIGNhbiBoYXBwZW4gd2hlbiB0aGUgbWVtb3J5IGlzXG4vLyBkZXRhY2hlZCBhbmQgcmVzaXplZCBieSB0aGUgV2ViQXNzZW1ibHkgbW9kdWxlLlxuLy9cbi8vIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIHNhbWUgbWV0aG9kcyBhcyBVaW50OEFycmF5LFxuLy8gaXQgaXMgbm90IGEgcmVhbCBVaW50OEFycmF5IGFuZCBwYXNzaW5nIGl0IHRvIGZ1bmN0aW9ucyB0aGF0IGV4cGVjdFxuLy8gYSBVaW50OEFycmF5IG1heSBub3Qgd29yay4gVXNlIHN1YmFycmF5KCkgdG8gZ2V0IGEgcmVhbCBVaW50OEFycmF5XG4vLyBpZiBuZWVkZWQuXG5jbGFzcyBVaW50OEFycmF5UHJveHkge1xuICAjbW9kdWxlO1xuXG4gICNfYXJyYXkgPSBuZXcgVWludDhBcnJheSgpXG4gIGdldCAjYXJyYXkoKSB7XG4gICAgaWYgKHRoaXMuI19hcnJheS5idWZmZXIuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gV2ViQXNzZW1ibHkgbWVtb3J5IHJlc2l6ZSBkZXRhY2hlZCB0aGUgYnVmZmVyIHNvIHJlLWNyZWF0ZSB0aGVcbiAgICAgIC8vIGFycmF5IHdpdGggdGhlIG5ldyBidWZmZXIuXG4gICAgICB0aGlzLiNfYXJyYXkgPSB0aGlzLiNtb2R1bGUuSEVBUFU4LnN1YmFycmF5KFxuICAgICAgICB0aGlzLmJ5dGVPZmZzZXQsXG4gICAgICAgIHRoaXMuYnl0ZU9mZnNldCArIHRoaXMuYnl0ZUxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNfYXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsqfSBtb2R1bGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVPZmZzZXQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlTGVuZ3RoIFxuICAgKi9cbiAgY29uc3RydWN0b3IobW9kdWxlLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgdGhpcy4jbW9kdWxlID0gbW9kdWxlO1xuICAgIHRoaXMuYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQ7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuYnVmZmVyO1xuICB9XG5cbiAgYXQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuYXQoaW5kZXgpO1xuICB9XG4gIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kKSB7XG4gICAgdGhpcy4jYXJyYXkuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQpO1xuICB9XG4gIGVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmVudHJpZXMoKTtcbiAgfVxuICBldmVyeShwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuZXZlcnkocHJlZGljYXRlKTtcbiAgfVxuICBmaWxsKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gICAgdGhpcy4jYXJyYXkuZmlsbCh2YWx1ZSwgc3RhcnQsIGVuZCk7XG4gIH1cbiAgZmlsdGVyKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5maWx0ZXIocHJlZGljYXRlKTtcbiAgfVxuICBmaW5kKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5maW5kKHByZWRpY2F0ZSk7XG4gIH1cbiAgZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5maW5kSW5kZXgocHJlZGljYXRlKTtcbiAgfVxuICBmaW5kTGFzdChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuZmluZExhc3QocHJlZGljYXRlKTtcbiAgfVxuICBmaW5kTGFzdEluZGV4KHByZWRpY2F0ZSkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5maW5kTGFzdEluZGV4KHByZWRpY2F0ZSk7XG4gIH1cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuI2FycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG4gIGluY2x1ZGVzKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5pbmNsdWRlcyh2YWx1ZSwgc3RhcnQpO1xuICB9XG4gIGluZGV4T2YodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmluZGV4T2YodmFsdWUsIHN0YXJ0KTtcbiAgfVxuICBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5qb2luKHNlcGFyYXRvcik7XG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkua2V5cygpO1xuICB9XG4gIGxhc3RJbmRleE9mKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5sYXN0SW5kZXhPZih2YWx1ZSwgc3RhcnQpO1xuICB9XG4gIG1hcChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG4gIHJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuICByZWR1Y2VSaWdodChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnJlZHVjZVJpZ2h0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG4gIHJldmVyc2UoKSB7XG4gICAgdGhpcy4jYXJyYXkucmV2ZXJzZSgpO1xuICB9XG4gIHNldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgdGhpcy4jYXJyYXkuc2V0KGFycmF5LCBvZmZzZXQpO1xuICB9XG4gIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH1cbiAgc29tZShwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuc29tZShwcmVkaWNhdGUpO1xuICB9XG4gIHNvcnQoY29tcGFyZUZuKSB7XG4gICAgdGhpcy4jYXJyYXkuc29ydChjb21wYXJlRm4pO1xuICB9XG4gIHN1YmFycmF5KGJlZ2luLCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuc3ViYXJyYXkoYmVnaW4sIGVuZCk7XG4gIH1cbiAgdG9Mb2NhbGVTdHJpbmcobG9jYWxlcywgb3B0aW9ucykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywgb3B0aW9ucyk7XG4gIH1cbiAgdG9SZXZlcnNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkudG9SZXZlcnNlZCgpO1xuICB9XG4gIHRvU29ydGVkKGNvbXBhcmVGbikge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS50b1NvcnRlZChjb21wYXJlRm4pO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS50b1N0cmluZygpO1xuICB9XG4gIHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkudmFsdWVzKCk7XG4gIH1cbiAgd2l0aChpbmRleCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkud2l0aChpbmRleCwgdmFsdWUpO1xuICB9XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cbn1cblxuLy8gVGhpcyBjbGFzcyBwcm92aWRlcyBhIERhdGFWaWV3LWxpa2UgaW50ZXJmYWNlIGZvciBhIFdlYkFzc2VtYmx5IG1lbW9yeVxuLy8gYnVmZmVyLCByZXN0cmljdGVkIHRvIGVpdGhlciBJbnQzMiBvciBCaWdJbnQ2NCB0eXBlcy4gSXQgYWxzbyByZWFjcXVpcmVzXG4vLyB0aGUgdW5kZXJseWluZyBidWZmZXIgd2hlbiB0aGUgV2ViQXNzZW1ibHkgbWVtb3J5IGlzIHJlc2l6ZWQsIHdoaWNoIGNhblxuLy8gaGFwcGVuIHdoZW4gdGhlIG1lbW9yeSBpcyBkZXRhY2hlZCBhbmQgcmVzaXplZCBieSB0aGUgV2ViQXNzZW1ibHkgbW9kdWxlLlxuY2xhc3MgRGF0YVZpZXdQcm94eSB7XG4gICNtb2R1bGU7XG4gICN0eXBlO1xuXG4gICNfdmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMCkpO1xuICBnZXQgI3ZpZXcoKSB7XG4gICAgaWYgKHRoaXMuI192aWV3LmJ1ZmZlci5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBXZWJBc3NlbWJseSBtZW1vcnkgcmVzaXplIGRldGFjaGVkIHRoZSBidWZmZXIgc28gcmUtY3JlYXRlIHRoZVxuICAgICAgLy8gdmlldyB3aXRoIHRoZSBuZXcgYnVmZmVyLlxuICAgICAgdGhpcy4jX3ZpZXcgPSBuZXcgRGF0YVZpZXcoXG4gICAgICAgIHRoaXMuI21vZHVsZS5IRUFQVTguYnVmZmVyLFxuICAgICAgICB0aGlzLiNtb2R1bGUuSEVBUFU4LmJ5dGVPZmZzZXQgKyB0aGlzLmJ5dGVPZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jX3ZpZXc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsqfSBtb2R1bGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVPZmZzZXQgXG4gICAqIEBwYXJhbSB7J0ludDMyJ3wnQmlnSW50NjQnfSB0eXBlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihtb2R1bGUsIGJ5dGVPZmZzZXQsIHR5cGUpIHtcbiAgICB0aGlzLiNtb2R1bGUgPSBtb2R1bGU7XG4gICAgdGhpcy5ieXRlT2Zmc2V0ID0gYnl0ZU9mZnNldDtcbiAgICB0aGlzLiN0eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldCBidWZmZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZpZXcuYnVmZmVyO1xuICB9XG4gIGdldCBieXRlTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlID09PSAnSW50MzInID8gNCA6IDg7XG4gIH1cblxuICBnZXRJbnQzMihieXRlT2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAodGhpcy4jdHlwZSAhPT0gJ0ludDMyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKCFsaXR0bGVFbmRpYW4pIHRocm93IG5ldyBFcnJvcignbXVzdCBiZSBsaXR0bGUgZW5kaWFuJyk7XG4gICAgcmV0dXJuIHRoaXMuI3ZpZXcuZ2V0SW50MzIoYnl0ZU9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgfVxuICBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSwgbGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKHRoaXMuI3R5cGUgIT09ICdJbnQzMicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0eXBlJyk7XG4gICAgfVxuICAgIGlmICghbGl0dGxlRW5kaWFuKSB0aHJvdyBuZXcgRXJyb3IoJ211c3QgYmUgbGl0dGxlIGVuZGlhbicpO1xuICAgIHRoaXMuI3ZpZXcuc2V0SW50MzIoYnl0ZU9mZnNldCwgdmFsdWUsIGxpdHRsZUVuZGlhbik7XG4gIH1cbiAgZ2V0QmlnSW50NjQoYnl0ZU9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKHRoaXMuI3R5cGUgIT09ICdCaWdJbnQ2NCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0eXBlJyk7XG4gICAgfVxuICAgIGlmICghbGl0dGxlRW5kaWFuKSB0aHJvdyBuZXcgRXJyb3IoJ211c3QgYmUgbGl0dGxlIGVuZGlhbicpO1xuICAgIHJldHVybiB0aGlzLiN2aWV3LmdldEJpZ0ludDY0KGJ5dGVPZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gIH1cbiAgc2V0QmlnSW50NjQoYnl0ZU9mZnNldCwgdmFsdWUsIGxpdHRsZUVuZGlhbikge1xuICAgIGlmICh0aGlzLiN0eXBlICE9PSAnQmlnSW50NjQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZScpO1xuICAgIH1cbiAgICBpZiAoIWxpdHRsZUVuZGlhbikgdGhyb3cgbmV3IEVycm9yKCdtdXN0IGJlIGxpdHRsZSBlbmRpYW4nKTtcbiAgICB0aGlzLiN2aWV3LnNldEJpZ0ludDY0KGJ5dGVPZmZzZXQsIHZhbHVlLCBsaXR0bGVFbmRpYW4pO1xuICB9XG59IiwiLy8gQ29weXJpZ2h0IDIwMjQgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbmltcG9ydCAqIGFzIFZGUyBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcWxpdGUtY29uc3RhbnRzLmpzJztcblxuY29uc3QgREVGQVVMVF9TRUNUT1JfU0laRSA9IDUxMjtcblxuLy8gQmFzZSBjbGFzcyBmb3IgYSBWRlMuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gIG5hbWU7XG4gIG14UGF0aG5hbWUgPSA2NDtcbiAgX21vZHVsZTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGUgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYW1lLCBtb2R1bGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuX21vZHVsZSA9IG1vZHVsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7dm9pZHxQcm9taXNlPHZvaWQ+fSBcbiAgICovXG4gIGNsb3NlKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufFByb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsb2FkIGluIHN1YmNsYXNzZXMgdG8gaW5kaWNhdGUgd2hpY2ggbWV0aG9kcyBhcmUgYXN5bmNocm9ub3VzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBoYXNBc3luY01ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcE91dEZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhPcGVuKHBWZnMsIHpOYW1lLCBwRmlsZSwgZmxhZ3MsIHBPdXRGbGFncykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0NBTlRPUEVOO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeW5jRGlyIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhEZWxldGUocFZmcywgek5hbWUsIHN5bmNEaXIpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpOYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhBY2Nlc3MocFZmcywgek5hbWUsIGZsYWdzLCBwUmVzT3V0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5PdXQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB6T3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhGdWxsUGF0aG5hbWUocFZmcywgek5hbWUsIG5PdXQsIHpPdXQpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5CdWYgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB6QnVmIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhHZXRMYXN0RXJyb3IocFZmcywgbkJ1ZiwgekJ1Zikge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4Q2xvc2UocEZpbGUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlBbXQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0TG8gXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0SGkgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFJlYWQocEZpbGUsIHBEYXRhLCBpQW10LCBpT2Zmc2V0TG8sIGlPZmZzZXRIaSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaUFtdCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRMbyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRIaSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4V3JpdGUocEZpbGUsIHBEYXRhLCBpQW10LCBpT2Zmc2V0TG8sIGlPZmZzZXRIaSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVMbyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVIaSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4VHJ1bmNhdGUocEZpbGUsIHNpemVMbywgc2l6ZUhpKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFN5bmMocEZpbGUsIGZsYWdzKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBTaXplIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhGaWxlU2l6ZShwRmlsZSwgcFNpemUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4TG9jayhwRmlsZSwgbG9ja1R5cGUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4VW5sb2NrKHBGaWxlLCBsb2NrVHlwZSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9IFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhDaGVja1Jlc2VydmVkTG9jayhwRmlsZSwgcFJlc091dCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcEFyZyBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RmlsZUNvbnRyb2wocEZpbGUsIG9wLCBwQXJnKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfTk9URk9VTkQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhTZWN0b3JTaXplKHBGaWxlKSB7XG4gICAgcmV0dXJuIERFRkFVTFRfU0VDVE9SX1NJWkU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhEZXZpY2VDaGFyYWN0ZXJpc3RpY3MocEZpbGUpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRklMRV9UWVBFX01BU0sgPSBbXG4gIFZGUy5TUUxJVEVfT1BFTl9NQUlOX0RCLFxuICBWRlMuU1FMSVRFX09QRU5fTUFJTl9KT1VSTkFMLFxuICBWRlMuU1FMSVRFX09QRU5fVEVNUF9EQixcbiAgVkZTLlNRTElURV9PUEVOX1RFTVBfSk9VUk5BTCxcbiAgVkZTLlNRTElURV9PUEVOX1RSQU5TSUVOVF9EQixcbiAgVkZTLlNRTElURV9PUEVOX1NVQkpPVVJOQUwsXG4gIFZGUy5TUUxJVEVfT1BFTl9TVVBFUl9KT1VSTkFMLFxuICBWRlMuU1FMSVRFX09QRU5fV0FMXG5dLnJlZHVjZSgobWFzaywgZWxlbWVudCkgPT4gbWFzayB8IGVsZW1lbnQpOyIsImltcG9ydCAqIGFzIFZGUyBmcm9tICcuL1ZGUy5qcyc7XG5cbi8vIE9wdGlvbnMgZm9yIG5hdmlnYXRvci5sb2Nrcy5yZXF1ZXN0KCkuXG4vKiogQHR5cGUge0xvY2tPcHRpb25zfSAqLyBjb25zdCBTSEFSRUQgPSB7IG1vZGU6ICdzaGFyZWQnIH07XG4vKiogQHR5cGUge0xvY2tPcHRpb25zfSAqLyBjb25zdCBQT0xMX1NIQVJFRCA9IHsgaWZBdmFpbGFibGU6IHRydWUsIG1vZGU6ICdzaGFyZWQnIH07XG4vKiogQHR5cGUge0xvY2tPcHRpb25zfSAqLyBjb25zdCBQT0xMX0VYQ0xVU0lWRSA9IHsgaWZBdmFpbGFibGU6IHRydWUsIG1vZGU6ICdleGNsdXNpdmUnIH07XG5cbmNvbnN0IFBPTElDSUVTID0gWydleGNsdXNpdmUnLCAnc2hhcmVkJywgJ3NoYXJlZCtoaW50J107XG5cbi8qKlxuICogQHR5cGVkZWYgTG9ja1N0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYmFzZU5hbWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHdyaXRlSGludFxuICogXG4gKiBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBmdW5jdGlvbnMgdGhhdCByZWxlYXNlIGEgc3BlY2lmaWMgbG9jay5cbiAqIEBwcm9wZXJ0eSB7KCgpID0+IHZvaWQpP30gW2dhdGVdXG4gKiBAcHJvcGVydHkgeygoKSA9PiB2b2lkKT99IFthY2Nlc3NdXG4gKiBAcHJvcGVydHkgeygoKSA9PiB2b2lkKT99IFtyZXNlcnZlZF1cbiAqIEBwcm9wZXJ0eSB7KCgpID0+IHZvaWQpP30gW2hpbnRdXG4gKi9cblxuLyoqXG4gKiBNaXgtaW4gZm9yIEZhY2FkZVZGUyB0aGF0IGltcGxlbWVudHMgdGhlIFNRTGl0ZSBWRlMgbG9ja2luZyBwcm90b2NvbC5cbiAqIEBwYXJhbSB7Kn0gc3VwZXJjbGFzcyBGYWNhZGVWRlMgKG9yIHN1YmNsYXNzKVxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBjb25zdCBXZWJMb2Nrc01peGluID0gc3VwZXJjbGFzcyA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICAjb3B0aW9ucyA9IHtcbiAgICBsb2NrUG9saWN5OiAnZXhjbHVzaXZlJyxcbiAgICBsb2NrVGltZW91dDogSW5maW5pdHlcbiAgfTtcblxuICAvKiogQHR5cGUge01hcDxudW1iZXIsIExvY2tTdGF0ZT59ICovICNtYXBJZFRvU3RhdGUgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgbW9kdWxlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobmFtZSwgbW9kdWxlLCBvcHRpb25zKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIGlmIChQT0xJQ0lFUy5pbmRleE9mKHRoaXMuI29wdGlvbnMubG9ja1BvbGljeSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFdlYkxvY2tzTWl4aW46IGludmFsaWQgbG9jayBtb2RlOiAke29wdGlvbnMubG9ja1BvbGljeX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2tUeXBlIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgakxvY2soZmlsZUlkLCBsb2NrVHlwZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NrU3RhdGUgPSB0aGlzLiNnZXRMb2NrU3RhdGUoZmlsZUlkKTtcbiAgICAgIGlmIChsb2NrVHlwZSA8PSBsb2NrU3RhdGUudHlwZSkgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIFxuICAgICAgc3dpdGNoICh0aGlzLiNvcHRpb25zLmxvY2tQb2xpY3kpIHtcbiAgICAgICAgY2FzZSAnZXhjbHVzaXZlJzpcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy4jbG9ja0V4Y2x1c2l2ZShsb2NrU3RhdGUsIGxvY2tUeXBlKTtcbiAgICAgICAgY2FzZSAnc2hhcmVkJzpcbiAgICAgICAgY2FzZSAnc2hhcmVkK2hpbnQnOlxuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiNsb2NrU2hhcmVkKGxvY2tTdGF0ZSwgbG9ja1R5cGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYkxvY2tzTWl4aW46IGxvY2sgZXJyb3InLCBlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0xPQ0s7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2tUeXBlIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgalVubG9jayhmaWxlSWQsIGxvY2tUeXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2tTdGF0ZSA9IHRoaXMuI2dldExvY2tTdGF0ZShmaWxlSWQpO1xuICAgICAgaWYgKCEobG9ja1R5cGUgPCBsb2NrU3RhdGUudHlwZSkpIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICBcbiAgICAgIHN3aXRjaCAodGhpcy4jb3B0aW9ucy5sb2NrUG9saWN5KSB7XG4gICAgICAgIGNhc2UgJ2V4Y2x1c2l2ZSc6XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI3VubG9ja0V4Y2x1c2l2ZShsb2NrU3RhdGUsIGxvY2tUeXBlKTtcbiAgICAgICAgY2FzZSAnc2hhcmVkJzpcbiAgICAgICAgY2FzZSAnc2hhcmVkK2hpbnQnOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI3VubG9ja1NoYXJlZChsb2NrU3RhdGUsIGxvY2tUeXBlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXZWJMb2Nrc01peGluOiB1bmxvY2sgZXJyb3InLCBlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1VOTE9DSztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFJlc091dCBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpDaGVja1Jlc2VydmVkTG9jayhmaWxlSWQsIHBSZXNPdXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9ja1N0YXRlID0gdGhpcy4jZ2V0TG9ja1N0YXRlKGZpbGVJZCk7XG4gICAgICBzd2l0Y2ggKHRoaXMuI29wdGlvbnMubG9ja1BvbGljeSkge1xuICAgICAgICBjYXNlICdleGNsdXNpdmUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLiNjaGVja1Jlc2VydmVkRXhjbHVzaXZlKGxvY2tTdGF0ZSwgcFJlc091dCk7XG4gICAgICAgIGNhc2UgJ3NoYXJlZCc6XG4gICAgICAgIGNhc2UgJ3NoYXJlZCtoaW50JzpcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy4jY2hlY2tSZXNlcnZlZFNoYXJlZChsb2NrU3RhdGUsIHBSZXNPdXQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYkxvY2tzTWl4aW46IGNoZWNrIHJlc2VydmVkIGxvY2sgZXJyb3InLCBlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0NIRUNLUkVTRVJWRURMT0NLO1xuICAgIH1cbiAgICBwUmVzT3V0LnNldEludDMyKDAsIDAsIHRydWUpO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBBcmdcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqRmlsZUNvbnRyb2woZmlsZUlkLCBvcCwgcEFyZykge1xuICAgIGlmIChvcCA9PT0gV2ViTG9ja3NNaXhpbi5XUklURV9ISU5UX09QX0NPREUgJiZcbiAgICAgICAgdGhpcy4jb3B0aW9ucy5sb2NrUG9saWN5ID09PSAnc2hhcmVkK2hpbnQnKXtcbiAgICAgIGNvbnN0IGxvY2tTdGF0ZSA9IHRoaXMuI2dldExvY2tTdGF0ZShmaWxlSWQpO1xuICAgICAgbG9ja1N0YXRlLndyaXRlSGludCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBWRlMuU1FMSVRFX05PVEZPVU5EO1xuICB9XG5cbiAgI2dldExvY2tTdGF0ZShmaWxlSWQpIHtcbiAgICBsZXQgbG9ja1N0YXRlID0gdGhpcy4jbWFwSWRUb1N0YXRlLmdldChmaWxlSWQpO1xuICAgIGlmICghbG9ja1N0YXRlKSB7XG4gICAgICAvLyBUaGUgc3RhdGUgZG9lc24ndCBleGlzdCB5ZXQgc28gY3JlYXRlIGl0LlxuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0RmlsZW5hbWUoZmlsZUlkKTtcbiAgICAgIGxvY2tTdGF0ZSA9IHtcbiAgICAgICAgYmFzZU5hbWU6IG5hbWUsXG4gICAgICAgIHR5cGU6IFZGUy5TUUxJVEVfTE9DS19OT05FLFxuICAgICAgICB3cml0ZUhpbnQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy4jbWFwSWRUb1N0YXRlLnNldChmaWxlSWQsIGxvY2tTdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NrU3RhdGVcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvY2tTdGF0ZX0gbG9ja1N0YXRlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgYXN5bmMgI2xvY2tFeGNsdXNpdmUobG9ja1N0YXRlLCBsb2NrVHlwZSkge1xuICAgIGlmICghbG9ja1N0YXRlLmFjY2Vzcykge1xuICAgICAgaWYgKCFhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2FjY2VzcycpKSB7XG4gICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0JVU1k7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmFzc2VydCghIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgIH1cbiAgICBsb2NrU3RhdGUudHlwZSA9IGxvY2tUeXBlO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG9ja1N0YXRlfSBsb2NrU3RhdGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gICN1bmxvY2tFeGNsdXNpdmUobG9ja1N0YXRlLCBsb2NrVHlwZSkge1xuICAgIGlmIChsb2NrVHlwZSA9PT0gVkZTLlNRTElURV9MT0NLX05PTkUpIHtcbiAgICAgIGxvY2tTdGF0ZS5hY2Nlc3M/LigpO1xuICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgIH1cbiAgICBsb2NrU3RhdGUudHlwZSA9IGxvY2tUeXBlO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG9ja1N0YXRlfSBsb2NrU3RhdGUgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICAjY2hlY2tSZXNlcnZlZEV4Y2x1c2l2ZShsb2NrU3RhdGUsIHBSZXNPdXQpIHtcbiAgICBwUmVzT3V0LnNldEludDMyKDAsIDAsIHRydWUpO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG9ja1N0YXRlfSBsb2NrU3RhdGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBhc3luYyAjbG9ja1NoYXJlZChsb2NrU3RhdGUsIGxvY2tUeXBlKSB7XG4gICAgc3dpdGNoIChsb2NrU3RhdGUudHlwZSkge1xuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfTk9ORTpcbiAgICAgICAgc3dpdGNoIChsb2NrVHlwZSkge1xuICAgICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1NIQVJFRDpcbiAgICAgICAgICAgIGlmIChsb2NrU3RhdGUud3JpdGVIaW50KSB7XG4gICAgICAgICAgICAgIC8vIHhGaWxlQ29udHJvbCgpIGhhcyBoaW50ZWQgdGhhdCB0aGlzIHRyYW5zYWN0aW9uIHdpbGxcbiAgICAgICAgICAgICAgLy8gd3JpdGUuIEFjcXVpcmUgdGhlIGhpbnQgbG9jaywgd2hpY2ggaXMgcmVxdWlyZWQgdG8gcmVhY2hcbiAgICAgICAgICAgICAgLy8gdGhlIFJFU0VSVkVEIHN0YXRlLlxuICAgICAgICAgICAgICBpZiAoIWF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAnaGludCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGltZW91dCBiZWZvcmUgbG9jayBhY3F1aXJlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE11c3QgaGF2ZSB0aGUgZ2F0ZSBsb2NrIHRvIHJlcXVlc3QgdGhlIGFjY2VzcyBsb2NrLlxuICAgICAgICAgICAgaWYgKCFhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2dhdGUnLCBTSEFSRUQpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGltZW91dCBiZWZvcmUgbG9jayBhY3F1aXJlZC5cbiAgICAgICAgICAgICAgICBsb2NrU3RhdGUuaGludD8uKCk7XG4gICAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0JVU1k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2FjY2VzcycsIFNIQVJFRCk7XG4gICAgICAgICAgICBsb2NrU3RhdGUuZ2F0ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5nYXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCEhbG9ja1N0YXRlLmFjY2Vzcyk7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCghbG9ja1N0YXRlLnJlc2VydmVkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgbG9jayB0cmFuc2l0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19TSEFSRUQ6XG4gICAgICAgIHN3aXRjaCAobG9ja1R5cGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19SRVNFUlZFRDpcbiAgICAgICAgICAgIGlmICh0aGlzLiNvcHRpb25zLmxvY2tQb2xpY3kgPT09ICdzaGFyZWQraGludCcpIHtcbiAgICAgICAgICAgICAgLy8gSWRlYWxseSB3ZSBzaG91bGQgYWxyZWFkeSBoYXZlIHRoZSBoaW50IGxvY2ssIGJ1dCBpZiBub3RcbiAgICAgICAgICAgICAgLy8gcG9sbCBmb3IgaXQgaGVyZS5cbiAgICAgICAgICAgICAgaWYgKCFsb2NrU3RhdGUuaGludCAmJlxuICAgICAgICAgICAgICAgICFhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2hpbnQnLCBQT0xMX0VYQ0xVU0lWRSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBbm90aGVyIGNvbm5lY3Rpb24gaGFzIHRoZSBoaW50IGxvY2sgc28gdGhpcyBpcyBhXG4gICAgICAgICAgICAgICAgLy8gZGVhZGxvY2suIFRoaXMgY29ubmVjdGlvbiBtdXN0IHJldHJ5LlxuICAgICAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0JVU1k7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUG9sbCBmb3IgdGhlIHJlc2VydmVkIGxvY2suIFRoaXMgc2hvdWxkIGFsd2F5cyBzdWNjZWVkXG4gICAgICAgICAgICAvLyBpZiBhbGwgY2xpZW50cyB1c2UgdGhlICdzaGFyZWQraGludCcgcG9saWN5LlxuICAgICAgICAgICAgaWYgKCFhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ3Jlc2VydmVkJywgUE9MTF9FWENMVVNJVkUpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBkZWFkbG9jay4gVGhlIGNvbm5lY3Rpb24gaG9sZGluZyB0aGUgcmVzZXJ2ZWRcbiAgICAgICAgICAgICAgLy8gbG9jayBibG9ja3MgdXMsIGFuZCBpdCBjYW4ndCBhY3F1aXJlIGFuIGV4Y2x1c2l2ZSBhY2Nlc3NcbiAgICAgICAgICAgICAgLy8gbG9jayBiZWNhdXNlIHdlIGhvbGQgYSBzaGFyZWQgYWNjZXNzIGxvY2suIFRoaXMgY29ubmVjdGlvblxuICAgICAgICAgICAgICAvLyBtdXN0IHJldHJ5LlxuICAgICAgICAgICAgICBsb2NrU3RhdGUuaGludD8uKCk7XG4gICAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0JVU1k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NrU3RhdGUuYWNjZXNzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCghbG9ja1N0YXRlLmdhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUucmVzZXJ2ZWQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19FWENMVVNJVkU6XG4gICAgICAgICAgICAvLyBKdW1waW5nIGRpcmVjdGx5IGZyb20gU0hBUkVEIHRvIEVYQ0xVU0lWRSB3aXRob3V0IHBhc3NpbmdcbiAgICAgICAgICAgIC8vIHRocm91Z2ggUkVTRVJWRUQgaXMgb25seSBkb25lIHdpdGggYSBob3Qgam91cm5hbC5cbiAgICAgICAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdnYXRlJykpIHtcbiAgICAgICAgICAgICAgLy8gVGltZW91dCBiZWZvcmUgbG9jayBhY3F1aXJlZC5cbiAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQlVTWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2tTdGF0ZS5hY2Nlc3MoKTtcbiAgICAgICAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdhY2Nlc3MnKSkge1xuICAgICAgICAgICAgICAvLyBUaW1lb3V0IGJlZm9yZSBsb2NrIGFjcXVpcmVkLlxuICAgICAgICAgICAgICBsb2NrU3RhdGUuZ2F0ZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUuZ2F0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCghIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5yZXNlcnZlZCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIGxvY2sgdHJhbnNpdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfUkVTRVJWRUQ6XG4gICAgICAgIHN3aXRjaCAobG9ja1R5cGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19FWENMVVNJVkU6XG4gICAgICAgICAgICAvLyBQcmV2ZW50IG90aGVyIGNvbm5lY3Rpb25zIGZyb20gZW50ZXJpbmcgdGhlIFNIQVJFRCBzdGF0ZS5cbiAgICAgICAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdnYXRlJykpIHtcbiAgICAgICAgICAgICAgLy8gVGltZW91dCBiZWZvcmUgbG9jayBhY3F1aXJlZC5cbiAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQlVTWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQmxvY2sgdW50aWwgYWxsIG90aGVyIGNvbm5lY3Rpb25zIGV4aXQgdGhlIFNIQVJFRCBzdGF0ZS5cbiAgICAgICAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdhY2Nlc3MnKSkge1xuICAgICAgICAgICAgICAvLyBUaW1lb3V0IGJlZm9yZSBsb2NrIGFjcXVpcmVkLlxuICAgICAgICAgICAgICBsb2NrU3RhdGUuZ2F0ZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUuZ2F0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCghIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUucmVzZXJ2ZWQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBsb2NrIHRyYW5zaXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbG9ja1N0YXRlLnR5cGUgPSBsb2NrVHlwZTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvY2tTdGF0ZX0gbG9ja1N0YXRlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgYXN5bmMgI3VubG9ja1NoYXJlZChsb2NrU3RhdGUsIGxvY2tUeXBlKSB7XG4gICAgLy8gbG9ja1R5cGUgY2FuIG9ubHkgYmUgU1FMSVRFX0xPQ0tfU0hBUkVEIG9yIFNRTElURV9MT0NLX05PTkUuXG4gICAgaWYgKGxvY2tUeXBlID09PSBWRlMuU1FMSVRFX0xPQ0tfTk9ORSkge1xuICAgICAgbG9ja1N0YXRlLmFjY2Vzcz8uKCk7XG4gICAgICBsb2NrU3RhdGUuZ2F0ZT8uKCk7XG4gICAgICBsb2NrU3RhdGUucmVzZXJ2ZWQ/LigpO1xuICAgICAgbG9ja1N0YXRlLmhpbnQ/LigpO1xuICAgICAgbG9ja1N0YXRlLndyaXRlSGludCA9IGZhbHNlO1xuICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5nYXRlKTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUucmVzZXJ2ZWQpO1xuICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5oaW50KTtcbiAgICB9IGVsc2UgeyAvLyBsb2NrVHlwZSA9PT0gVkZTLlNRTElURV9MT0NLX1NIQVJFRFxuICAgICAgc3dpdGNoIChsb2NrU3RhdGUudHlwZSkge1xuICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19FWENMVVNJVkU6XG4gICAgICAgICAgLy8gUmVsZWFzZSBvdXIgZXhjbHVzaXZlIGFjY2VzcyBsb2NrIGFuZCByZWFjcXVpcmUgaXQgd2l0aCBhXG4gICAgICAgICAgLy8gc2hhcmVkIGxvY2suIFRoaXMgc2hvdWxkIGFsd2F5cyBzdWNjZWVkIGJlY2F1c2Ugd2UgaG9sZFxuICAgICAgICAgIC8vIHRoZSBnYXRlIGxvY2suXG4gICAgICAgICAgbG9ja1N0YXRlLmFjY2VzcygpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAnYWNjZXNzJywgU0hBUkVEKTtcblxuICAgICAgICAgIC8vIFJlbGVhc2Ugb3VyIGdhdGUgYW5kIHJlc2VydmVkIGxvY2tzLiBXZSBtaWdodCBub3QgaGF2ZSBhXG4gICAgICAgICAgLy8gcmVzZXJ2ZWQgbG9jayBpZiB3ZSB3ZXJlIGhhbmRsaW5nIGEgaG90IGpvdXJuYWwuXG4gICAgICAgICAgbG9ja1N0YXRlLmdhdGUoKTtcbiAgICAgICAgICBsb2NrU3RhdGUucmVzZXJ2ZWQ/LigpO1xuICAgICAgICAgIGxvY2tTdGF0ZS5oaW50Py4oKTtcbiAgICAgICAgICBjb25zb2xlLmFzc2VydCghIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuZ2F0ZSk7XG4gICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5yZXNlcnZlZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfUkVTRVJWRUQ6XG4gICAgICAgICAgLy8gVGhpcyB0cmFuc2l0aW9uIGlzIHJhcmUsIHByb2JhYmx5IG9ubHkgb24gYW4gSS9PIGVycm9yXG4gICAgICAgICAgLy8gd2hpbGUgd3JpdGluZyB0byBhIGpvdXJuYWwgZmlsZS5cbiAgICAgICAgICBhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2FjY2VzcycsIFNIQVJFRCk7XG4gICAgICAgICAgbG9ja1N0YXRlLnJlc2VydmVkKCk7XG4gICAgICAgICAgbG9ja1N0YXRlLmhpbnQ/LigpO1xuICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCEhbG9ja1N0YXRlLmFjY2Vzcyk7XG4gICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5nYXRlKTtcbiAgICAgICAgICBjb25zb2xlLmFzc2VydCghbG9ja1N0YXRlLnJlc2VydmVkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgbG9ja1N0YXRlLnR5cGUgPSBsb2NrVHlwZTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvY2tTdGF0ZX0gbG9ja1N0YXRlIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgI2NoZWNrUmVzZXJ2ZWRTaGFyZWQobG9ja1N0YXRlLCBwUmVzT3V0KSB7XG4gICAgaWYgKGF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAncmVzZXJ2ZWQnLCBQT0xMX1NIQVJFRCkpIHtcbiAgICAgIC8vIFdlIHdlcmUgYWJsZSB0byBnZXQgdGhlIGxvY2sgc28gaXQgd2FzIG5vdCByZXNlcnZlZC5cbiAgICAgIGxvY2tTdGF0ZS5yZXNlcnZlZCgpO1xuICAgICAgcFJlc091dC5zZXRJbnQzMigwLCAwLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcFJlc091dC5zZXRJbnQzMigwLCAxLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtMb2NrU3RhdGV9IGxvY2tTdGF0ZSBcbiAgICogQHBhcmFtIHsnZ2F0ZSd8J2FjY2Vzcyd8J3Jlc2VydmVkJ3wnaGludCd9IG5hbWVcbiAgICogQHBhcmFtIHtMb2NrT3B0aW9uc30gb3B0aW9ucyBcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICAjYWNxdWlyZShsb2NrU3RhdGUsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGVbbmFtZV0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5pZkF2YWlsYWJsZSAmJiB0aGlzLiNvcHRpb25zLmxvY2tUaW1lb3V0IDwgSW5maW5pdHkpIHtcbiAgICAgICAgLy8gQWRkIGEgdGltZW91dCB0byB0aGUgbG9jayByZXF1ZXN0LlxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgcmVzb2x2ZT8uKGZhbHNlKTtcbiAgICAgICAgfSwgdGhpcy4jb3B0aW9ucy5sb2NrVGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvY2tOYW1lID0gYGxvY2sjIyR7bG9ja1N0YXRlLmJhc2VOYW1lfSMjJHtuYW1lfWA7XG4gICAgICBuYXZpZ2F0b3IubG9ja3MucmVxdWVzdChsb2NrTmFtZSwgb3B0aW9ucywgbG9jayA9PiB7XG4gICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlbGVhc2UgPT4ge1xuICAgICAgICAgICAgbG9ja1N0YXRlW25hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgICByZWxlYXNlKCk7XG4gICAgICAgICAgICAgIGxvY2tTdGF0ZVtuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUgPSBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2tTdGF0ZVtuYW1lXSA9IG51bGw7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgcmVzb2x2ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICBpZiAoZS5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5XZWJMb2Nrc01peGluLldSSVRFX0hJTlRfT1BfQ09ERSA9IC05OTk5OyIsIi8vIENvcHlyaWdodCAyMDI0IFJveSBULiBIYXNoaW1vdG8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5pbXBvcnQgeyBGYWNhZGVWRlMgfSBmcm9tICcuLi9GYWNhZGVWRlMuanMnO1xuaW1wb3J0ICogYXMgVkZTIGZyb20gJy4uL1ZGUy5qcyc7XG5pbXBvcnQgeyBXZWJMb2Nrc01peGluIH0gZnJvbSAnLi4vV2ViTG9ja3NNaXhpbi5qcyc7XG5cbmNvbnN0IFJFVFJZQUJMRV9FUlJPUlMgPSBuZXcgU2V0KFtcbiAgJ1RyYW5zYWN0aW9uSW5hY3RpdmVFcnJvcicsXG4gICdJbnZhbGlkU3RhdGVFcnJvcidcbl0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIE1ldGFkYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGZpbGVTaXplXG4gKiBAcHJvcGVydHkge251bWJlcn0gdmVyc2lvblxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtwZW5kaW5nVmVyc2lvbl1cbiAqL1xuXG5jbGFzcyBGaWxlIHtcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovIHBhdGg7XG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyBmbGFncztcblxuICAvKiogQHR5cGUge01ldGFkYXRhfSAqLyBtZXRhZGF0YTtcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovIGZpbGVTaXplID0gMDtcblxuICAvKiogQHR5cGUge2Jvb2xlYW59ICovIG5lZWRzTWV0YWRhdGFTeW5jID0gZmFsc2U7XG4gIC8qKiBAdHlwZSB7TWV0YWRhdGF9ICovIHJvbGxiYWNrID0gbnVsbDtcbiAgLyoqIEB0eXBlIHtTZXQ8bnVtYmVyPn0gKi8gY2hhbmdlZFBhZ2VzID0gbmV3IFNldCgpO1xuXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyBzeW5jaHJvbm91cyA9ICdmdWxsJztcbiAgLyoqIEB0eXBlIHtJREJUcmFuc2FjdGlvbk9wdGlvbnN9ICovIHR4T3B0aW9ucyA9IHsgZHVyYWJpbGl0eTogJ3N0cmljdCcgfTtcblxuICBjb25zdHJ1Y3RvcihwYXRoLCBmbGFncywgbWV0YWRhdGEpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuZmxhZ3MgPSBmbGFncztcbiAgICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIElEQkJhdGNoQXRvbWljVkZTIGV4dGVuZHMgV2ViTG9ja3NNaXhpbihGYWNhZGVWRlMpIHtcbiAgLyoqIEB0eXBlIHtNYXA8bnVtYmVyLCBGaWxlPn0gKi8gbWFwSWRUb0ZpbGUgPSBuZXcgTWFwKCk7XG4gIGxhc3RFcnJvciA9IG51bGw7XG5cbiAgbG9nID0gbnVsbDsgLy8gY29uc29sZS5sb2dcblxuICAvKiogQHR5cGUge1Byb21pc2V9ICovICNpc1JlYWR5O1xuICAvKiogQHR5cGUge0lEQkNvbnRleHR9ICovICNpZGI7XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShuYW1lLCBtb2R1bGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB2ZnMgPSBuZXcgSURCQmF0Y2hBdG9taWNWRlMobmFtZSwgbW9kdWxlLCBvcHRpb25zKTtcbiAgICBhd2FpdCB2ZnMuaXNSZWFkeSgpO1xuICAgIHJldHVybiB2ZnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lLCBtb2R1bGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG5hbWUsIG1vZHVsZSwgb3B0aW9ucyk7XG4gICAgdGhpcy4jaXNSZWFkeSA9IHRoaXMuI2luaXRpYWxpemUob3B0aW9ucy5pZGJOYW1lID8/IG5hbWUpO1xuICB9XG5cbiAgYXN5bmMgI2luaXRpYWxpemUobmFtZSkge1xuICAgIHRoaXMuI2lkYiA9IGF3YWl0IElEQkNvbnRleHQuY3JlYXRlKG5hbWUpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy4jaWRiLmNsb3NlKCk7XG4gIH1cbiAgXG4gIGFzeW5jIGlzUmVhZHkoKSB7XG4gICAgYXdhaXQgc3VwZXIuaXNSZWFkeSgpO1xuICAgIGF3YWl0IHRoaXMuI2lzUmVhZHk7XG4gIH1cblxuICBnZXRGaWxlbmFtZShmaWxlSWQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCkucGF0aDtcbiAgICByZXR1cm4gYElEQigke3RoaXMubmFtZX0pOiR7cGF0aG5hbWV9YFxuICB9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmc/fSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwT3V0RmxhZ3MgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBhc3luYyBqT3Blbih6TmFtZSwgZmlsZUlkLCBmbGFncywgcE91dEZsYWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoek5hbWUgfHwgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksICdmaWxlOi8vJyk7XG4gICAgICBjb25zdCBwYXRoID0gdXJsLnBhdGhuYW1lO1xuXG4gICAgICBsZXQgbWV0YSA9IGF3YWl0IHRoaXMuI2lkYi5xKCh7IG1ldGFkYXRhIH0pID0+IG1ldGFkYXRhLmdldChwYXRoKSk7XG4gICAgICBpZiAoIW1ldGEgJiYgKGZsYWdzICYgVkZTLlNRTElURV9PUEVOX0NSRUFURSkpIHtcbiAgICAgICAgbWV0YSA9IHtcbiAgICAgICAgICBuYW1lOiBwYXRoLFxuICAgICAgICAgIGZpbGVTaXplOiAwLFxuICAgICAgICAgIHZlcnNpb246IDBcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgdGhpcy4jaWRiLnEoKHsgbWV0YWRhdGEgfSkgPT4gbWV0YWRhdGEucHV0KG1ldGEpLCAncncnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCFtZXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmlsZSAke3BhdGh9IG5vdCBmb3VuZGApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgZmxhZ3MsIG1ldGEpO1xuICAgICAgdGhpcy5tYXBJZFRvRmlsZS5zZXQoZmlsZUlkLCBmaWxlKTtcbiAgICAgIHBPdXRGbGFncy5zZXRJbnQzMigwLCBmbGFncywgdHJ1ZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxhc3RFcnJvciA9IGU7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9DQU5UT1BFTjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHpOYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3luY0RpciBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpEZWxldGUoek5hbWUsIHN5bmNEaXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh6TmFtZSwgJ2ZpbGU6Ly8nKTtcbiAgICAgIGNvbnN0IHBhdGggPSB1cmwucGF0aG5hbWU7XG5cbiAgICAgIHRoaXMuI2lkYi5xKCh7IG1ldGFkYXRhLCBibG9ja3MgfSkgPT4ge1xuICAgICAgICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKFtwYXRoLCAtSW5maW5pdHldLCBbcGF0aCwgSW5maW5pdHldKTtcbiAgICAgICAgYmxvY2tzLmRlbGV0ZShyYW5nZSk7XG4gICAgICAgIG1ldGFkYXRhLmRlbGV0ZShwYXRoKTtcbiAgICAgIH0sICdydycpO1xuXG4gICAgICBpZiAoc3luY0Rpcikge1xuICAgICAgICBhd2FpdCB0aGlzLiNpZGIuc3luYyhmYWxzZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxhc3RFcnJvciA9IGU7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9ERUxFVEU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgakFjY2Vzcyh6TmFtZSwgZmxhZ3MsIHBSZXNPdXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh6TmFtZSwgJ2ZpbGU6Ly8nKTtcbiAgICAgIGNvbnN0IHBhdGggPSB1cmwucGF0aG5hbWU7XG5cbiAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSB9KSA9PiBtZXRhZGF0YS5nZXQocGF0aCkpO1xuICAgICAgcFJlc091dC5zZXRJbnQzMigwLCBtZXRhID8gMSA6IDAsIHRydWUpO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfQUNDRVNTO1xuICAgIH0gXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpDbG9zZShmaWxlSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgICB0aGlzLm1hcElkVG9GaWxlLmRlbGV0ZShmaWxlSWQpO1xuXG4gICAgICBpZiAoZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9ERUxFVEVPTkNMT1NFKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuI2lkYi5xKCh7IG1ldGFkYXRhLCBibG9ja3MgfSkgPT4ge1xuICAgICAgICAgIG1ldGFkYXRhLmRlbGV0ZShmaWxlLnBhdGgpO1xuICAgICAgICAgIGJsb2Nrcy5kZWxldGUoSURCS2V5UmFuZ2UuYm91bmQoW2ZpbGUucGF0aCwgMF0sIFtmaWxlLnBhdGgsIEluZmluaXR5XSkpO1xuICAgICAgICB9LCAncncnKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZS5uZWVkc01ldGFkYXRhU3luYykge1xuICAgICAgICB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSB9KSA9PiBtZXRhZGF0YS5wdXQoZmlsZS5tZXRhZGF0YSksICdydycpO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy4jaWRiLnN5bmMoZmlsZS5zeW5jaHJvbm91cyA9PT0gJ2Z1bGwnKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0NMT1NFO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgalJlYWQoZmlsZUlkLCBwRGF0YSwgaU9mZnNldCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcblxuICAgICAgbGV0IHBEYXRhT2Zmc2V0ID0gMDtcbiAgICAgIHdoaWxlIChwRGF0YU9mZnNldCA8IHBEYXRhLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgLy8gRmV0Y2ggdGhlIEluZGV4ZWREQiBibG9jayBmb3IgdGhpcyBmaWxlIGxvY2F0aW9uLlxuICAgICAgICBjb25zdCBmaWxlT2Zmc2V0ID0gaU9mZnNldCArIHBEYXRhT2Zmc2V0O1xuICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMuI2lkYi5xKCh7IGJsb2NrcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChbZmlsZS5wYXRoLCAtZmlsZU9mZnNldF0sIFtmaWxlLnBhdGgsIEluZmluaXR5XSk7XG4gICAgICAgICAgcmV0dXJuIGJsb2Nrcy5nZXQocmFuZ2UpO1xuICAgICAgICB9KTsgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIWJsb2NrIHx8IGJsb2NrLmRhdGEuYnl0ZUxlbmd0aCAtIGJsb2NrLm9mZnNldCA8PSBmaWxlT2Zmc2V0KSB7XG4gICAgICAgICAgcERhdGEuZmlsbCgwLCBwRGF0YU9mZnNldCk7XG4gICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfU0hPUlRfUkVBRDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgYmxvY2sgZGF0YS5cbiAgICAgICAgY29uc3QgZHN0ID0gcERhdGEuc3ViYXJyYXkocERhdGFPZmZzZXQpO1xuICAgICAgICBjb25zdCBzcmNPZmZzZXQgPSBmaWxlT2Zmc2V0ICsgYmxvY2sub2Zmc2V0O1xuICAgICAgICBjb25zdCBuQnl0ZXNUb0NvcHkgPSBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChibG9jay5kYXRhLmJ5dGVMZW5ndGggLSBzcmNPZmZzZXQsIDApLFxuICAgICAgICAgIGRzdC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgZHN0LnNldChibG9jay5kYXRhLnN1YmFycmF5KHNyY09mZnNldCwgc3JjT2Zmc2V0ICsgbkJ5dGVzVG9Db3B5KSk7XG4gICAgICAgIHBEYXRhT2Zmc2V0ICs9IG5CeXRlc1RvQ29weTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1JFQUQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7VWludDhBcnJheX0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBqV3JpdGUoZmlsZUlkLCBwRGF0YSwgaU9mZnNldCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGlmIChmaWxlLmZsYWdzICYgVkZTLlNRTElURV9PUEVOX01BSU5fREIpIHtcbiAgICAgICAgaWYgKCFmaWxlLnJvbGxiYWNrKSB7XG4gICAgICAgICAgLy8gQmVnaW4gYSBuZXcgd3JpdGUgdHJhbnNhY3Rpb24uXG4gICAgICAgICAgLy8gQWRkIHBlbmRpbmdWZXJzaW9uIHRvIHRoZSBtZXRhZGF0YSBpbiBJbmRleGVkREIuIElmIHdlIGNyYXNoXG4gICAgICAgICAgLy8gZHVyaW5nIHRoZSB0cmFuc2FjdGlvbiwgdGhpcyBsZXRzIHN1YnNlcXVlbnQgY29ubmVjdGlvbnNcbiAgICAgICAgICAvLyBrbm93IHRvIHJlbW92ZSBibG9ja3MgZnJvbSB0aGUgZmFpbGVkIHRyYW5zYWN0aW9uLlxuICAgICAgICAgIGNvbnN0IHBlbmRpbmcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgeyBwZW5kaW5nVmVyc2lvbjogZmlsZS5tZXRhZGF0YS52ZXJzaW9uIC0gMSB9LFxuICAgICAgICAgICAgZmlsZS5tZXRhZGF0YSk7XG4gICAgICAgICAgdGhpcy4jaWRiLnEoKHsgbWV0YWRhdGEgfSkgPT4gbWV0YWRhdGEucHV0KHBlbmRpbmcpLCAncncnLCBmaWxlLnR4T3B0aW9ucyk7XG5cbiAgICAgICAgICBmaWxlLnJvbGxiYWNrID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5tZXRhZGF0YSk7XG4gICAgICAgICAgZmlsZS5tZXRhZGF0YS52ZXJzaW9uLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUuZmxhZ3MgJiBWRlMuU1FMSVRFX09QRU5fTUFJTl9EQikge1xuICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcy5hZGQoaU9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBwRGF0YS5zbGljZSgpO1xuICAgICAgY29uc3QgdmVyc2lvbiA9IGZpbGUubWV0YWRhdGEudmVyc2lvbjtcbiAgICAgIGNvbnN0IGlzT3ZlcndyaXRlID0gaU9mZnNldCA8IGZpbGUubWV0YWRhdGEuZmlsZVNpemU7XG4gICAgICBpZiAoIWlzT3ZlcndyaXRlIHx8XG4gICAgICAgICAgZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9NQUlOX0RCIHx8XG4gICAgICAgICAgZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9URU1QX0RCKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0ge1xuICAgICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICBvZmZzZXQ6IC1pT2Zmc2V0LFxuICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgZGF0YTogcERhdGEuc2xpY2UoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiNpZGIucSgoeyBibG9ja3MgfSkgPT4ge1xuICAgICAgICAgIGJsb2Nrcy5wdXQoYmxvY2spO1xuICAgICAgICAgIGZpbGUuY2hhbmdlZFBhZ2VzLmFkZChpT2Zmc2V0KTtcbiAgICAgICAgfSwgJ3J3JywgZmlsZS50eE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jaWRiLnEoYXN5bmMgKHsgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgICAvLyBSZWFkIHRoZSBleGlzdGluZyBibG9jay5cbiAgICAgICAgICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKFxuICAgICAgICAgICAgW2ZpbGUucGF0aCwgLWlPZmZzZXRdLFxuICAgICAgICAgICAgW2ZpbGUucGF0aCwgSW5maW5pdHldKTtcbiAgICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IGJsb2Nrcy5nZXQocmFuZ2UpO1xuXG4gICAgICAgICAgLy8gTW9kaWZ5IHRoZSBibG9jayBkYXRhLlxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBibG9jay5kYXRhLnN1YmFycmF5KGlPZmZzZXQgKyBibG9jay5vZmZzZXQpLnNldChkYXRhKTtcblxuICAgICAgICAgIC8vIFdyaXRlIGJhY2suXG4gICAgICAgICAgYmxvY2tzLnB1dChibG9jayk7XG4gICAgICAgIH0sICdydycsIGZpbGUudHhPcHRpb25zKTtcblxuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZS5tZXRhZGF0YS5maWxlU2l6ZSA8IGlPZmZzZXQgKyBwRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZmlsZS5tZXRhZGF0YS5maWxlU2l6ZSA9IGlPZmZzZXQgKyBwRGF0YS5sZW5ndGg7XG4gICAgICAgIGZpbGUubmVlZHNNZXRhZGF0YVN5bmMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfV1JJVEU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpU2l6ZSBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGpUcnVuY2F0ZShmaWxlSWQsIGlTaXplKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLm1hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgaWYgKGlTaXplIDwgZmlsZS5tZXRhZGF0YS5maWxlU2l6ZSkge1xuICAgICAgICB0aGlzLiNpZGIucSgoeyBibG9ja3MgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoXG4gICAgICAgICAgICBbZmlsZS5wYXRoLCAtSW5maW5pdHldLFxuICAgICAgICAgICAgW2ZpbGUucGF0aCwgLWlTaXplLCBJbmZpbml0eV0pO1xuICAgICAgICAgIGJsb2Nrcy5kZWxldGUocmFuZ2UpO1xuICAgICAgICB9LCAncncnLCBmaWxlLnR4T3B0aW9ucyk7XG4gICAgICAgIGZpbGUubWV0YWRhdGEuZmlsZVNpemUgPSBpU2l6ZTtcbiAgICAgICAgZmlsZS5uZWVkc01ldGFkYXRhU3luYyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxhc3RFcnJvciA9IGU7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9UUlVOQ0FURTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgalN5bmMoZmlsZUlkLCBmbGFncykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGlmIChmaWxlLm5lZWRzTWV0YWRhdGFTeW5jKSB7XG4gICAgICAgIHRoaXMuI2lkYi5xKCh7IG1ldGFkYXRhIH0pID0+IG1ldGFkYXRhLnB1dChmaWxlLm1ldGFkYXRhKSwgJ3J3JywgZmlsZS50eE9wdGlvbnMpO1xuICAgICAgICBmaWxlLm5lZWRzTWV0YWRhdGFTeW5jID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlLmZsYWdzICYgVkZTLlNRTElURV9PUEVOX01BSU5fREIpIHtcbiAgICAgICAgLy8gU3luYyBpcyBvbmx5IG5lZWRlZCBoZXJlIGZvciBkdXJhYmlsaXR5LiBWaXNpYmlsaXR5IGZvciBvdGhlclxuICAgICAgICAvLyBjb25uZWN0aW9ucyBpcyBlbnN1cmVkIGluIGpVbmxvY2soKS5cbiAgICAgICAgaWYgKGZpbGUuc3luY2hyb25vdXMgPT09ICdmdWxsJykge1xuICAgICAgICAgIGF3YWl0IHRoaXMuI2lkYi5zeW5jKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLiNpZGIuc3luYyhmaWxlLnN5bmNocm9ub3VzID09PSAnZnVsbCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfRlNZTkM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBTaXplNjQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBqRmlsZVNpemUoZmlsZUlkLCBwU2l6ZTY0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLm1hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgcFNpemU2NC5zZXRCaWdJbnQ2NCgwLCBCaWdJbnQoZmlsZS5tZXRhZGF0YS5maWxlU2l6ZSksIHRydWUpO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfRlNUQVQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpMb2NrKGZpbGVJZCwgbG9ja1R5cGUpIHtcbiAgICAvLyBDYWxsIHRoZSBhY3R1YWwgbG9jayBpbXBsZW1lbnRhdGlvbi5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBlci5qTG9jayhmaWxlSWQsIGxvY2tUeXBlKTtcblxuICAgIGlmIChsb2NrVHlwZSA9PT0gVkZTLlNRTElURV9MT0NLX1NIQVJFRCkge1xuICAgICAgLy8gVXBkYXRlIG1ldGFkYXRhLlxuICAgICAgZmlsZS5tZXRhZGF0YSA9IGF3YWl0IHRoaXMuI2lkYi5xKGFzeW5jICh7IG1ldGFkYXRhLCBibG9ja3MgfSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC8qKiBAdHlwZSB7TWV0YWRhdGF9ICovIGNvbnN0IG0gPSBhd2FpdCBtZXRhZGF0YS5nZXQoZmlsZS5wYXRoKTtcbiAgICAgICAgaWYgKG0ucGVuZGluZ1ZlcnNpb24pIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYHJlbW92aW5nIGZhaWxlZCB0cmFuc2FjdGlvbiAke20ucGVuZGluZ1ZlcnNpb259YCk7XG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChbbS5uYW1lLCAtSW5maW5pdHldLCBbbS5uYW1lLCBJbmZpbml0eV0pO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGJsb2Nrcy5vcGVuQ3Vyc29yKHJhbmdlKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdDtcbiAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChibG9jay52ZXJzaW9uIDwgbS52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3IuZGVsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZGVsZXRlIG0ucGVuZGluZ1ZlcnNpb247XG4gICAgICAgICAgbWV0YWRhdGEucHV0KG0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfSwgJ3J3JywgZmlsZS50eE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpVbmxvY2soZmlsZUlkLCBsb2NrVHlwZSkge1xuICAgIGlmIChsb2NrVHlwZSA9PT0gVkZTLlNRTElURV9MT0NLX05PTkUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLm1hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgYXdhaXQgdGhpcy4jaWRiLnN5bmMoZmlsZS5zeW5jaHJvbm91cyA9PT0gJ2Z1bGwnKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBhY3R1YWwgdW5sb2NrIGltcGxlbWVudGF0aW9uLlxuICAgIHJldHVybiBzdXBlci5qVW5sb2NrKGZpbGVJZCwgbG9ja1R5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBBcmdcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqRmlsZUNvbnRyb2woZmlsZUlkLCBvcCwgcEFyZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0ZDTlRMX1BSQUdNQTpcbiAgICAgICAgICBjb25zdCBrZXkgPSBleHRyYWN0U3RyaW5nKHBBcmcsIDQpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXh0cmFjdFN0cmluZyhwQXJnLCA4KTtcbiAgICAgICAgICB0aGlzLmxvZz8uKCd4RmlsZUNvbnRyb2wnLCBmaWxlLnBhdGgsICdQUkFHTUEnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICBjb25zdCBzZXRQcmFnbWFSZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0gdGhpcy5fbW9kdWxlLl9zcWxpdGUzX21hbGxvYyhlbmNvZGVkLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgY29uc3Qgb3V0QXJyYXkgPSB0aGlzLl9tb2R1bGUuSEVBUFU4LnN1YmFycmF5KG91dCwgb3V0ICsgZW5jb2RlZC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIG91dEFycmF5LnNldChlbmNvZGVkKTtcbiAgICAgICAgICAgIHBBcmcuc2V0VWludDMyKDAsIG91dCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9FUlJPUjtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN3aXRjaCAoa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3BhZ2Vfc2l6ZSc6XG4gICAgICAgICAgICAgIGlmIChmaWxlLmZsYWdzICYgVkZTLlNRTElURV9PUEVOX01BSU5fREIpIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBhbGxvdyBjaGFuZ2luZyB0aGUgcGFnZSBzaXplLlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBmaWxlLm1ldGFkYXRhLmZpbGVTaXplKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9FUlJPUjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzeW5jaHJvbm91cyc6XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgICBjYXNlICdvZmYnOlxuICAgICAgICAgICAgICAgICAgICBmaWxlLnN5bmNocm9ub3VzID0gJ29mZic7XG4gICAgICAgICAgICAgICAgICAgIGZpbGUudHhPcHRpb25zID0geyBkdXJhYmlsaXR5OiAncmVsYXhlZCcgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgICAgICAgICAgICAgIGZpbGUuc3luY2hyb25vdXMgPSAnbm9ybWFsJztcbiAgICAgICAgICAgICAgICAgICAgZmlsZS50eE9wdGlvbnMgPSB7IGR1cmFiaWxpdHk6ICdyZWxheGVkJyB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4dHJhJzpcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5zeW5jaHJvbm91cyA9ICdmdWxsJztcbiAgICAgICAgICAgICAgICAgICAgZmlsZS50eE9wdGlvbnMgPSB7IGR1cmFiaWxpdHk6ICdzdHJpY3QnIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dyaXRlX2hpbnQnOlxuICAgICAgICAgICAgICByZXR1cm4gc3VwZXIuakZpbGVDb250cm9sKGZpbGVJZCwgV2ViTG9ja3NNaXhpbi5XUklURV9ISU5UX09QX0NPREUsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFZGUy5TUUxJVEVfRkNOVExfU1lOQzpcbiAgICAgICAgICB0aGlzLmxvZz8uKCd4RmlsZUNvbnRyb2wnLCBmaWxlLnBhdGgsICdTWU5DJyk7XG4gICAgICAgICAgaWYgKGZpbGUucm9sbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdE1ldGFkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5tZXRhZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBwcmV2RmlsZVNpemUgPSBmaWxlLnJvbGxiYWNrLmZpbGVTaXplXG4gICAgICAgICAgICB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSwgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgICAgICAgbWV0YWRhdGEucHV0KGNvbW1pdE1ldGFkYXRhKTtcblxuICAgICAgICAgICAgICAvLyBSZW1vdmUgb2xkIHBhZ2UgdmVyc2lvbnMuXG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgb2Zmc2V0IG9mIGZpbGUuY2hhbmdlZFBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8IHByZXZGaWxlU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChcbiAgICAgICAgICAgICAgICAgICAgW2ZpbGUucGF0aCwgLW9mZnNldCwgY29tbWl0TWV0YWRhdGEudmVyc2lvbl0sXG4gICAgICAgICAgICAgICAgICAgIFtmaWxlLnBhdGgsIC1vZmZzZXQsIEluZmluaXR5XSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBibG9ja3MuZGVsZXRlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmlsZS5jaGFuZ2VkUGFnZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIH0sICdydycsIGZpbGUudHhPcHRpb25zKTtcbiAgICAgICAgICAgIGZpbGUubmVlZHNNZXRhZGF0YVN5bmMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZpbGUucm9sbGJhY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0ZDTlRMX0JFR0lOX0FUT01JQ19XUklURTpcbiAgICAgICAgICAvLyBFdmVyeSB3cml0ZSB0cmFuc2FjdGlvbiBpcyBhdG9taWMsIHNvIHRoaXMgaXMgYSBuby1vcC5cbiAgICAgICAgICB0aGlzLmxvZz8uKCd4RmlsZUNvbnRyb2wnLCBmaWxlLnBhdGgsICdCRUdJTl9BVE9NSUNfV1JJVEUnKTtcbiAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0ZDTlRMX0NPTU1JVF9BVE9NSUNfV1JJVEU6XG4gICAgICAgICAgLy8gRXZlcnkgd3JpdGUgdHJhbnNhY3Rpb24gaXMgYXRvbWljLCBzbyB0aGlzIGlzIGEgbm8tb3AuXG4gICAgICAgICAgdGhpcy5sb2c/LigneEZpbGVDb250cm9sJywgZmlsZS5wYXRoLCAnQ09NTUlUX0FUT01JQ19XUklURScpO1xuICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgICAgICBjYXNlIFZGUy5TUUxJVEVfRkNOVExfUk9MTEJBQ0tfQVRPTUlDX1dSSVRFOlxuICAgICAgICAgIHRoaXMubG9nPy4oJ3hGaWxlQ29udHJvbCcsIGZpbGUucGF0aCwgJ1JPTExCQUNLX0FUT01JQ19XUklURScpO1xuICAgICAgICAgIGZpbGUubWV0YWRhdGEgPSBmaWxlLnJvbGxiYWNrO1xuICAgICAgICAgIGNvbnN0IHJvbGxiYWNrTWV0YWRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBmaWxlLm1ldGFkYXRhKTtcbiAgICAgICAgICB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSwgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgICAgIG1ldGFkYXRhLnB1dChyb2xsYmFja01ldGFkYXRhKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHBhZ2VzLlxuICAgICAgICAgICAgZm9yIChjb25zdCBvZmZzZXQgb2YgZmlsZS5jaGFuZ2VkUGFnZXMpIHtcbiAgICAgICAgICAgICAgYmxvY2tzLmRlbGV0ZShbZmlsZS5wYXRoLCAtb2Zmc2V0LCByb2xsYmFja01ldGFkYXRhLnZlcnNpb24gLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcy5jbGVhcigpO1xuICAgICAgICAgIH0sICdydycsIGZpbGUudHhPcHRpb25zKTtcbiAgICAgICAgICBmaWxlLm5lZWRzTWV0YWRhdGFTeW5jID0gZmFsc2U7XG4gICAgICAgICAgZmlsZS5yb2xsYmFjayA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlI7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5qRmlsZUNvbnRyb2woZmlsZUlkLCBvcCwgcEFyZyk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGVcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHBGaWxlKSB7XG4gICAgcmV0dXJuIDBcbiAgICB8IFZGUy5TUUxJVEVfSU9DQVBfQkFUQ0hfQVRPTUlDXG4gICAgfCBWRlMuU1FMSVRFX0lPQ0FQX1VOREVMRVRBQkxFX1dIRU5fT1BFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHpCdWYgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakdldExhc3RFcnJvcih6QnVmKSB7XG4gICAgaWYgKHRoaXMubGFzdEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMubGFzdEVycm9yKTtcbiAgICAgIGNvbnN0IG91dHB1dEFycmF5ID0gekJ1Zi5zdWJhcnJheSgwLCB6QnVmLmJ5dGVMZW5ndGggLSAxKTtcbiAgICAgIGNvbnN0IHsgd3JpdHRlbiB9ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlSW50byh0aGlzLmxhc3RFcnJvci5tZXNzYWdlLCBvdXRwdXRBcnJheSk7XG4gICAgICB6QnVmW3dyaXR0ZW5dID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0tcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0U3RyaW5nKGRhdGFWaWV3LCBvZmZzZXQpIHtcbiAgY29uc3QgcCA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQsIHRydWUpO1xuICBpZiAocCkge1xuICAgIGNvbnN0IGNoYXJzID0gbmV3IFVpbnQ4QXJyYXkoZGF0YVZpZXcuYnVmZmVyLCBwKTtcbiAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGNoYXJzLnN1YmFycmF5KDAsIGNoYXJzLmluZGV4T2YoMCkpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIElEQkNvbnRleHQge1xuICAvKiogQHR5cGUge0lEQkRhdGFiYXNlfSAqLyAjZGF0YWJhc2U7XG5cbiAgLyoqIEB0eXBlIHtQcm9taXNlfSAqLyAjY2hhaW4gPSBudWxsO1xuICAvKiogQHR5cGUge1Byb21pc2U8YW55Pn0gKi8gI3R4Q29tcGxldGUgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgLyoqIEB0eXBlIHtJREJSZXF1ZXN0P30gKi8gI3JlcXVlc3QgPSBudWxsO1xuICAvKiogQHR5cGUge1dlYWtTZXQ8SURCVHJhbnNhY3Rpb24+fSAqLyAjdHhQZW5kaW5nID0gbmV3IFdlYWtTZXQoKTtcbiAgXG4gIGxvZyA9IG51bGw7XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShuYW1lKSB7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgNik7XG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0LnJlc3VsdDtcbiAgICAgICAgaWYgKGV2ZW50Lm9sZFZlcnNpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVXBncmFkaW5nIEluZGV4ZWREQiBmcm9tIHZlcnNpb24gJHtldmVudC5vbGRWZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZXZlbnQub2xkVmVyc2lvbikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggdGhlIG9yaWdpbmFsIHNjaGVtYS5cbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdibG9ja3MnLCB7IGtleVBhdGg6IFsncGF0aCcsICdvZmZzZXQnLCAndmVyc2lvbiddfSlcbiAgICAgICAgICAgICAgLmNyZWF0ZUluZGV4KCd2ZXJzaW9uJywgWydwYXRoJywgJ3ZlcnNpb24nXSk7XG4gICAgICAgICAgICAvLyBmYWxsIHRocm91Z2ggaW50ZW50aW9uYWxseVxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gcmVxdWVzdC50cmFuc2FjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrcyA9IHR4Lm9iamVjdFN0b3JlKCdibG9ja3MnKTtcbiAgICAgICAgICAgIGJsb2Nrcy5kZWxldGVJbmRleCgndmVyc2lvbicpO1xuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgnbWV0YWRhdGEnLCB7IGtleVBhdGg6ICduYW1lJyB9KTtcblxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHRoZSBibG9ja3MuXG4gICAgICAgICAgICAgIGxldCBsYXN0QmxvY2sgPSB7fTtcbiAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHR4Lm9iamVjdFN0b3JlKCdibG9ja3MnKS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IHJlcXVlc3QucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jay5vZmZzZXQgIT09ICdudW1iZXInIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKGJsb2NrLnBhdGggPT09IGxhc3RCbG9jay5wYXRoICYmIGJsb2NrLm9mZnNldCA9PT0gbGFzdEJsb2NrLm9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHN1cGVyY2VkZWQgYmxvY2sgKG9yIHRoZSBcInB1cmdlXCIgaW5mbykuXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvY2sub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbWV0YWRhdGEgdG8gaXRzIG93biBzdG9yZS5cbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEucHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBibG9jay5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVTaXplOiBibG9jay5maWxlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiBibG9jay52ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBibG9jay5maWxlU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnVwZGF0ZShibG9jayk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYXN0QmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IElEQkNvbnRleHQoZGF0YWJhc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZGF0YWJhc2UpIHtcbiAgICB0aGlzLiNkYXRhYmFzZSA9IGRhdGFiYXNlO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy4jZGF0YWJhc2UuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyhzdG9yZXM6IE9iamVjdC48c3RyaW5nLCBJREJPYmplY3RTdG9yZT4pID0+IGFueX0gZiBcbiAgICogQHBhcmFtIHsncm8nfCdydyd9IG1vZGUgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBxKGYsIG1vZGUgPSAncm8nLCBvcHRpb25zID0ge30pIHtcbiAgICAvKiogQHR5cGUge0lEQlRyYW5zYWN0aW9uTW9kZX0gKi9cbiAgICBjb25zdCB0eE1vZGUgPSBtb2RlID09PSAncm8nID8gJ3JlYWRvbmx5JyA6ICdyZWFkd3JpdGUnO1xuICAgIGNvbnN0IHR4T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgLyoqIEB0eXBlIHtJREJUcmFuc2FjdGlvbkR1cmFiaWxpdHl9ICovIGR1cmFiaWxpdHk6ICdkZWZhdWx0J1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgcXVlcmllcyBydW4gc2VxdWVudGlhbGx5LiBJZiBhbnkgZnVuY3Rpb24gcmVqZWN0cyxcbiAgICAvLyBvciBhbnkgcmVxdWVzdCBoYXMgYW4gZXJyb3IsIG9yIHRoZSB0cmFuc2FjdGlvbiBkb2VzIG5vdCBjb21taXQsXG4gICAgLy8gdGhlbiBubyBzdWJzZXF1ZW50IGZ1bmN0aW9ucyB3aWxsIHJ1biB1bnRpbCBzeW5jKCkgb3IgcmVzZXQoKS5cbiAgICB0aGlzLiNjaGFpbiA9ICh0aGlzLiNjaGFpbiB8fCBQcm9taXNlLnJlc29sdmUoKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuI3EoZiwgdHhNb2RlLCB0eE9wdGlvbnMpKTtcbiAgICByZXR1cm4gdGhpcy4jY2hhaW47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsoc3RvcmVzOiBPYmplY3QuPHN0cmluZywgSURCT2JqZWN0U3RvcmU+KSA9PiBhbnl9IGYgXG4gICAqIEBwYXJhbSB7SURCVHJhbnNhY3Rpb25Nb2RlfSBtb2RlIFxuICAgKiBAcGFyYW0ge0lEQlRyYW5zYWN0aW9uT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgYXN5bmMgI3EoZiwgbW9kZSwgb3B0aW9ucykge1xuICAgIC8qKiBAdHlwZSB7SURCVHJhbnNhY3Rpb259ICovIGxldCB0eDtcbiAgICBpZiAodGhpcy4jcmVxdWVzdCAmJlxuICAgICAgICB0aGlzLiN0eFBlbmRpbmcuaGFzKHRoaXMuI3JlcXVlc3QudHJhbnNhY3Rpb24pICYmXG4gICAgICAgIHRoaXMuI3JlcXVlc3QudHJhbnNhY3Rpb24ubW9kZSA+PSBtb2RlICYmXG4gICAgICAgIHRoaXMuI3JlcXVlc3QudHJhbnNhY3Rpb24uZHVyYWJpbGl0eSA9PT0gb3B0aW9ucy5kdXJhYmlsaXR5KSB7XG4gICAgICAvLyBUaGUgcHJldmlvdXMgcmVxdWVzdCB0cmFuc2FjdGlvbiBpcyBjb21wYXRpYmxlIGFuZCBoYXNcbiAgICAgIC8vIG5vdCB5ZXQgY29tcGxldGVkLlxuICAgICAgdHggPSB0aGlzLiNyZXF1ZXN0LnRyYW5zYWN0aW9uO1xuXG4gICAgICAvLyBJZiB0aGUgcHJldmlvdXMgcmVxdWVzdCBpcyBwZW5kaW5nLCB3YWl0IGZvciBpdCB0byBjb21wbGV0ZS5cbiAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSB0cmFuc2FjdGlvbiB3aWxsIGJlIGFjdGl2ZS5cbiAgICAgIGlmICh0aGlzLiNyZXF1ZXN0LnJlYWR5U3RhdGUgPT09ICdwZW5kaW5nJykge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB0aGlzLiNyZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCByZXNvbHZlLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgdGhpcy4jcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlc29sdmUsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcbiAgICAgIGlmICghdHgpIHtcbiAgICAgICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNhY3Rpb24gaXMgbWlzc2luZyBvciBkb2Vzbid0IG1hdGNoIHNvXG4gICAgICAgIC8vIHJlcGxhY2UgaXQgd2l0aCBhIG5ldyBvbmUuIHdhaXQgZm9yIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyB0cmFuc2FjdGlvbiB0byBjb21wbGV0ZSBzbyB0aGUgbGlmZXRpbWVzIGRvIG5vdCBvdmVybGFwLlxuICAgICAgICBhd2FpdCB0aGlzLiN0eENvbXBsZXRlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IHRyYW5zYWN0aW9uLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHR4ID0gdGhpcy4jZGF0YWJhc2UudHJhbnNhY3Rpb24odGhpcy4jZGF0YWJhc2Uub2JqZWN0U3RvcmVOYW1lcywgbW9kZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMubG9nPy4oJ0lEQlRyYW5zYWN0aW9uIG9wZW4nLCBtb2RlKTtcbiAgICAgICAgdGhpcy4jdHhQZW5kaW5nLmFkZCh0eCk7XG4gICAgICAgIHRoaXMuI3R4Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZz8uKCdJREJUcmFuc2FjdGlvbiBjb21wbGV0ZScpO1xuICAgICAgICAgICAgdGhpcy4jdHhQZW5kaW5nLmRlbGV0ZSh0eCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiN0eFBlbmRpbmcuZGVsZXRlKHR4KTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3RyYW5zYWN0aW9uIGFib3J0ZWQnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC8vIENyZWF0ZSBvYmplY3Qgc3RvcmUgcHJveGllcy5cbiAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmVzID0gWy4uLnR4Lm9iamVjdFN0b3JlTmFtZXNdLm1hcChuYW1lID0+IHtcbiAgICAgICAgICByZXR1cm4gW25hbWUsIHRoaXMucHJveHlTdG9yZU9ySW5kZXgodHgub2JqZWN0U3RvcmUobmFtZSkpXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgZnVuY3Rpb24uXG4gICAgICAgIHJldHVybiBhd2FpdCBmKE9iamVjdC5mcm9tRW50cmllcyhvYmplY3RTdG9yZXMpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gVXNlIGEgbmV3IHRyYW5zYWN0aW9uIGlmIHRoaXMgb25lIHdhcyBpbmFjdGl2ZS4gVGhpcyB3aWxsXG4gICAgICAgIC8vIGhhcHBlbiBpZiB0aGUgbGFzdCByZXF1ZXN0IGluIHRoZSB0cmFuc2FjdGlvbiBjb21wbGV0ZWRcbiAgICAgICAgLy8gaW4gYSBwcmV2aW91cyB0YXNrIGJ1dCB0aGUgdHJhbnNhY3Rpb24gaGFzIG5vdCB5ZXQgY29tbWl0dGVkLlxuICAgICAgICBpZiAoIWkgJiYgUkVUUllBQkxFX0VSUk9SUy5oYXMoZS5uYW1lKSkge1xuICAgICAgICAgIHRoaXMubG9nPy4oYCR7ZS5uYW1lfSwgcmV0cnlpbmdgKTtcbiAgICAgICAgICB0eCA9IG51bGw7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT2JqZWN0IHN0b3JlIG1ldGhvZHMgdGhhdCByZXR1cm4gYW4gSURCUmVxdWVzdCwgZXhjZXB0IGZvciBjdXJzb3JcbiAgICogY3JlYXRpb24sIGFyZSB3cmFwcGVkIHRvIHJldHVybiBhIFByb21pc2UuIEluIGFkZGl0aW9uLCB0aGVcbiAgICogcmVxdWVzdCBpcyB1c2VkIGludGVybmFsbHkgZm9yIGNoYWluaW5nLlxuICAgKiBAcGFyYW0ge0lEQk9iamVjdFN0b3JlfSBvYmplY3RTdG9yZSBcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBwcm94eVN0b3JlT3JJbmRleChvYmplY3RTdG9yZSkge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqZWN0U3RvcmUsIHtcbiAgICAgIGdldDogKHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heWJlUmVxdWVzdCA9IFJlZmxlY3QuYXBwbHkocmVzdWx0LCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKG1heWJlUmVxdWVzdCBpbnN0YW5jZW9mIElEQlJlcXVlc3QgJiYgIXByb3BlcnR5LmVuZHNXaXRoKCdDdXJzb3InKSkge1xuICAgICAgICAgICAgICAvLyAvLyBEZWJ1ZyBsb2dnaW5nLlxuICAgICAgICAgICAgICAvLyB0aGlzLmxvZz8uKGAke3RhcmdldC5uYW1lfS4ke1N0cmluZyhwcm9wZXJ0eSl9YCwgYXJncyk7XG4gICAgICAgICAgICAgIC8vIG1heWJlUmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMubG9nPy4oYCR7dGFyZ2V0Lm5hbWV9LiR7U3RyaW5nKHByb3BlcnR5KX0gc3VjY2Vzc2AsIG1heWJlUmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgLy8gbWF5YmVSZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMubG9nPy4oYCR7dGFyZ2V0Lm5hbWV9LiR7U3RyaW5nKHByb3BlcnR5KX0gZXJyb3JgLCBtYXliZVJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFNhdmUgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgIHRoaXMuI3JlcXVlc3QgPSBtYXliZVJlcXVlc3Q7XG5cbiAgICAgICAgICAgICAgLy8gQWJvcnQgdGhlIHRyYW5zYWN0aW9uIG9uIGVycm9yLlxuICAgICAgICAgICAgICBtYXliZVJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtYXliZVJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgICAgIG1heWJlUmVxdWVzdC50cmFuc2FjdGlvbi5hYm9ydCgpO1xuICAgICAgICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7ICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAvLyBSZXR1cm4gYSBQcm9taXNlLlxuICAgICAgICAgICAgICByZXR1cm4gd3JhcChtYXliZVJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1heWJlUmVxdWVzdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGR1cmFibGUgXG4gICAqL1xuICBhc3luYyBzeW5jKGR1cmFibGUpIHtcbiAgICBpZiAodGhpcy4jY2hhaW4pIHtcbiAgICAgIC8vIFRoaXMgd2FpdHMgZm9yIGFsbCBJbmRleGVkREIgY2FsbHMgdG8gYmUgbWFkZS5cbiAgICAgIGF3YWl0IHRoaXMuI2NoYWluO1xuICAgICAgaWYgKGR1cmFibGUpIHtcbiAgICAgICAgLy8gVGhpcyB3YWl0cyBmb3IgdGhlIGZpbmFsIHRyYW5zYWN0aW9uIHRvIGNvbW1pdC5cbiAgICAgICAgYXdhaXQgdGhpcy4jdHhDb21wbGV0ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLiNjaGFpbiA9IG51bGw7XG4gICAgdGhpcy4jdHhDb21wbGV0ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHRoaXMuI3JlcXVlc3QgPSBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtJREJSZXF1ZXN0fSByZXF1ZXN0IFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIHdyYXAocmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICB9KTtcbn1cblxuIiwiLy8gQ29weXJpZ2h0IDIwMjEgUm95IFQuIEhhc2hpbW90by4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuaW1wb3J0ICogYXMgU1FMaXRlIGZyb20gJy4vc3FsaXRlLWNvbnN0YW50cy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuXG4vKipcbiAqIE5lZWQgdG8gaGF2ZSBhIHNlcmlhbGl6ZXIgZm9yIGJpZ2ludFxuICogaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvanNiaS9pc3N1ZXMvMzBcbiAqL1xuaWYgKHR5cGVvZiBCaWdJbnQucHJvdG90eXBlWyd0b0pTT04nXSA9PSAndW5kZWZpbmVkJykge1xuICBCaWdJbnQucHJvdG90eXBlWyd0b0pTT04nXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gIH07XG59XG5cbmNvbnN0IE1BWF9JTlQ2NCA9IDB4N2ZmZmZmZmZmZmZmZmZmZm47XG5jb25zdCBNSU5fSU5UNjQgPSAtMHg4MDAwMDAwMDAwMDAwMDAwbjtcblxuY29uc3QgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpe30pLmNvbnN0cnVjdG9yO1xuXG5leHBvcnQgY2xhc3MgU1FMaXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cbmNvbnN0IGFzeW5jID0gdHJ1ZTtcblxuXG4vKipcbiAqIEJ1aWxkcyBhIEphdmFzY3JpcHQgQVBJIGZyb20gdGhlIEVtc2NyaXB0ZW4gbW9kdWxlLiBUaGlzIEFQSSBpcyBzdGlsbFxuICogbG93LWxldmVsIGFuZCBjbG9zZWx5IGNvcnJlc3BvbmRzIHRvIHRoZSBDIEFQSSBleHBvcnRlZCBieSB0aGUgbW9kdWxlLFxuICogYnV0IGRpZmZlcnMgaW4gc29tZSBzcGVjaWZpY3MgbGlrZSB0aHJvd2luZyBleGNlcHRpb25zIG9uIGVycm9ycy5cbiAqIEBwYXJhbSB7Kn0gTW9kdWxlIFNRTGl0ZSBFbXNjcmlwdGVuIG1vZHVsZVxuICogQHJldHVybnMge1NRTGl0ZUFQSX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZhY3RvcnkoTW9kdWxlKSB7XG4gIC8qKiBAdHlwZSB7U1FMaXRlQVBJfSAqLyBjb25zdCBzcWxpdGUzID0ge307XG5cbiAgTW9kdWxlLnJldHJ5T3BzID0gW107XG4gIGNvbnN0IHNxbGl0ZUZyZWVBZGRyZXNzID0gTW9kdWxlLl9nZXRTcWxpdGVGcmVlKCk7XG5cbiAgLy8gQWxsb2NhdGUgc29tZSBzcGFjZSBmb3IgMzItYml0IHJldHVybmVkIHZhbHVlcy5cbiAgY29uc3QgdG1wID0gTW9kdWxlLl9tYWxsb2MoOCk7XG4gIGNvbnN0IHRtcFB0ciA9IFt0bXAsIHRtcCArIDRdO1xuXG4gIGNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gIC8vIENvbnZlcnQgYSBKUyBzdHJpbmcgdG8gYSBDIHN0cmluZy4gc3FsaXRlM19tYWxsb2MgaXMgdXNlZCB0byBhbGxvY2F0ZVxuICAvLyBtZW1vcnkgKHVzZSBzcWxpdGUzX2ZyZWUgdG8gZGVhbGxvY2F0ZSkuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVURjgocykge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAwO1xuICAgIGNvbnN0IHV0ZjggPSB0ZXh0RW5jb2Rlci5lbmNvZGUocyk7XG4gICAgY29uc3QgenRzID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyh1dGY4LmJ5dGVMZW5ndGggKyAxKTtcbiAgICBNb2R1bGUuSEVBUFU4LnNldCh1dGY4LCB6dHMpO1xuICAgIE1vZHVsZS5IRUFQVThbenRzICsgdXRmOC5ieXRlTGVuZ3RoXSA9IDA7XG4gICAgcmV0dXJuIHp0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZSAzMi1iaXQgbnVtYmVycyBpbnRvIGEgNjQtYml0IChzaWduZWQpIEJpZ0ludC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvMzJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhpMzJcbiAgICogQHJldHVybnMge2JpZ2ludH1cbiAgICovXG4gIGZ1bmN0aW9uIGN2dDMyeDJUb0JpZ0ludChsbzMyLCBoaTMyKSB7XG4gICAgcmV0dXJuIChCaWdJbnQoaGkzMikgPDwgMzJuKSB8IChCaWdJbnQobG8zMikgJiAweGZmZmZmZmZmbik7XG4gIH1cblxuICAvLyAvKipcbiAgLy8gICogU2V0dXAgdGFibGUgY2hhbmdlIHVwZGF0ZSBjYWxsYmFja1xuICAvLyAgKi9cbiAgLy8gdmFyIG9uVGFibGVDaGFuZ2VkRnVuY3Rpb25Qb2ludGVyID0gTW9kdWxlLmFkZEZ1bmN0aW9uKG9uVGFibGVVcGRhdGUpO1xuICAvLyB2YXIgcGFzc0ZuUG9pbnRlciA9IE1vZHVsZS5jd3JhcCgncGFzc0ZuUG9pbnRlcicsICd1bmRlZmluZWQnLCBbJ251bWJlciddKTtcbiAgLy8gcGFzc0ZuUG9pbnRlcihvblRhYmxlQ2hhbmdlZEZ1bmN0aW9uUG9pbnRlcik7XG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZSAzMi1iaXQgbnVtYmVycyBhbmQgcmV0dXJuIGFzIG51bWJlciBvciBCaWdJbnQsIGRlcGVuZGluZ1xuICAgKiBvbiB0aGUgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsbzMyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoaTMyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8YmlnaW50fVxuICAgKi9cbiAgY29uc3QgY3Z0MzJ4MkFzU2FmZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBoaU1heCA9IEJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgPj4gMzJuO1xuICAgIGNvbnN0IGhpTWluID0gQmlnSW50KE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKSA+PiAzMm47XG5cbiAgICByZXR1cm4gZnVuY3Rpb24obG8zMiwgaGkzMikge1xuICAgICAgaWYgKGhpMzIgPiBoaU1heCB8fCBoaTMyIDwgaGlNaW4pIHtcbiAgICAgICAgLy8gQ2FuJ3QgYmUgZXhwcmVzc2VkIGFzIGEgTnVtYmVyIHNvIHVzZSBCaWdJbnQuXG4gICAgICAgIHJldHVybiBjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb21iaW5lIHRoZSB1cHBlciBhbmQgbG93ZXIgMzItYml0IG51bWJlcnMuIFRoZSBjb21wbGljYXRpb24gaXNcbiAgICAgICAgLy8gdGhhdCBsbzMyIGlzIGEgc2lnbmVkIGludGVnZXIgd2hpY2ggbWFrZXMgbWFuaXB1bGF0aW5nIGl0cyBiaXRzXG4gICAgICAgIC8vIGEgbGl0dGxlIHRyaWNreSAtIHRoZSBzaWduIGJpdCBnZXRzIGhhbmRsZWQgc2VwYXJhdGVseS5cbiAgICAgICAgcmV0dXJuIGhpMzIgKiAweDEwMDAwMDAwMCArIChsbzMyICYgMHg3ZmZmZmZmZikgLSAobG8zMiAmIDB4ODAwMDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZGF0YWJhc2VzID0gbmV3IFNldCgpO1xuICBmdW5jdGlvbiB2ZXJpZnlEYXRhYmFzZShkYikge1xuICAgIGlmICghZGF0YWJhc2VzLmhhcyhkYikpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgZGF0YWJhc2UnLCBTUUxpdGUuU1FMSVRFX01JU1VTRSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFwU3RtdFRvREIgPSBuZXcgTWFwKCk7XG4gIGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdG10KSB7XG4gICAgaWYgKCFtYXBTdG10VG9EQi5oYXMoc3RtdCkpIHtcbiAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcignbm90IGEgc3RhdGVtZW50JywgU1FMaXRlLlNRTElURV9NSVNVU0UpO1xuICAgIH1cbiAgfVxuXG4gIHNxbGl0ZTMuYmluZF9jb2xsZWN0aW9uID0gZnVuY3Rpb24oc3RtdCwgYmluZGluZ3MpIHtcbiAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmluZGluZ3MpO1xuICAgIGNvbnN0IG5CaW5kaW5ncyA9IHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfY291bnQoc3RtdCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbkJpbmRpbmdzOyArK2kpIHtcbiAgICAgIGNvbnN0IGtleSA9IGlzQXJyYXkgPyBpIC0gMSA6IHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfbmFtZShzdG10LCBpKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gYmluZGluZ3Nba2V5XTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNxbGl0ZTMuYmluZChzdG10LCBpLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX09LO1xuICB9O1xuXG4gIHNxbGl0ZTMuYmluZCA9IGZ1bmN0aW9uKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpZiAodmFsdWUgPT09ICh2YWx1ZSB8IDApKSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF9pbnQoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfZG91YmxlKHN0bXQsIGksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF90ZXh0KHN0bXQsIGksIHZhbHVlKTtcbiAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfaW50KHN0bXQsIGksIHZhbHVlID8gMSA6IDApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfYmxvYihzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX251bGwoc3RtdCwgaSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYmlnaW50Jykge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfaW50NjQoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBFeGlzdGluZyBiaW5kaW5nIChvciBOVUxMKSB3aWxsIGJlIHVzZWQuXG4gICAgICAgICAgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfTk9USUNFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybigndW5rbm93biBiaW5kaW5nIGNvbnZlcnRlZCB0byBudWxsJywgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfbnVsbChzdG10LCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLmJpbmRfYmxvYiA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaSwgdmFsdWUpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSB2YWx1ZS5ieXRlTGVuZ3RoID8/IHZhbHVlLmxlbmd0aDtcbiAgICAgIGNvbnN0IHB0ciA9IE1vZHVsZS5fc3FsaXRlM19tYWxsb2MoYnl0ZUxlbmd0aCk7XG4gICAgICBNb2R1bGUuSEVBUFU4LnN1YmFycmF5KHB0cikuc2V0KHZhbHVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSwgcHRyLCBieXRlTGVuZ3RoLCBzcWxpdGVGcmVlQWRkcmVzcyk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfY291bnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9jb3VudCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9kb3VibGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHZhbHVlKTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX2ludCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfaW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaSwgdmFsdWUpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGlmICh2YWx1ZSA+IDB4N2ZmZmZmZmYgfHwgdmFsdWUgPCAtMHg4MDAwMDAwMCkgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfUkFOR0U7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfaW50NjQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBpZiAodmFsdWUgPiBNQVhfSU5UNjQgfHwgdmFsdWUgPCBNSU5fSU5UNjQpIHJldHVybiBTUUxpdGUuU1FMSVRFX1JBTkdFO1xuXG4gICAgICBjb25zdCBsbzMyID0gdmFsdWUgJiAweGZmZmZmZmZmbjtcbiAgICAgIGNvbnN0IGhpMzIgPSB2YWx1ZSA+PiAzMm47XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIE51bWJlcihsbzMyKSwgTnVtYmVyKGhpMzIpKTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX251bGwgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX251bGwnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGkpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9wYXJhbWV0ZXJfbmFtZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfcGFyYW1ldGVyX25hbWUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfdGV4dCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2JpbmRfdGV4dCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaSwgdmFsdWUpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHB0ciA9IGNyZWF0ZVVURjgodmFsdWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCBwdHIsIC0xLCBzcWxpdGVGcmVlQWRkcmVzcyk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY2hhbmdlcyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NoYW5nZXMnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGIpIHtcbiAgICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY2xlYXJfYmluZGluZ3MgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jbGVhcl9iaW5kaW5ncyc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmxhc3RfaW5zZXJ0X2lkID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfbGFzdF9pbnNlcnRfcm93aWQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGIpIHtcbiAgICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIpO1xuICAgICAgLy8gdHJhY2UoZm5hbWUsIHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG4gIFxuICBzcWxpdGUzLmNsb3NlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY2xvc2UnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbihkYikge1xuICAgICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihkYik7XG4gICAgICBkYXRhYmFzZXMuZGVsZXRlKGRiKTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBkYik7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbiA9IGZ1bmN0aW9uKHN0bXQsIGlDb2wpIHtcbiAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgY29uc3QgdHlwZSA9IHNxbGl0ZTMuY29sdW1uX3R5cGUoc3RtdCwgaUNvbCk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfQkxPQjpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMuY29sdW1uX2Jsb2Ioc3RtdCwgaUNvbCk7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfRkxPQVQ6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmNvbHVtbl9kb3VibGUoc3RtdCwgaUNvbCk7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfSU5URUdFUjpcbiAgICAgICAgY29uc3QgbG8zMiA9IHNxbGl0ZTMuY29sdW1uX2ludChzdG10LCBpQ29sKTtcbiAgICAgICAgY29uc3QgaGkzMiA9IE1vZHVsZS5nZXRUZW1wUmV0MCgpO1xuICAgICAgICByZXR1cm4gY3Z0MzJ4MkFzU2FmZShsbzMyLCBoaTMyKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9OVUxMOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9URVhUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy5jb2x1bW5fdGV4dChzdG10LCBpQ29sKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBTUUxpdGVFcnJvcigndW5rbm93biB0eXBlJywgdHlwZSk7XG4gICAgfVxuICB9O1xuXG4gIHNxbGl0ZTMuY29sdW1uX2Jsb2IgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgbkJ5dGVzID0gc3FsaXRlMy5jb2x1bW5fYnl0ZXMoc3RtdCwgaUNvbCk7XG4gICAgICBjb25zdCBhZGRyZXNzID0gZihzdG10LCBpQ29sKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5IRUFQVTguc3ViYXJyYXkoYWRkcmVzcywgYWRkcmVzcyArIG5CeXRlcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fYnl0ZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fYnl0ZXMnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fY291bnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fY291bnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9kb3VibGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fZG91YmxlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX2ludCA9IChmdW5jdGlvbigpIHtcbiAgICAvLyBSZXRyaWV2ZSBpbnQ2NCBidXQgdXNlIG9ubHkgdGhlIGxvd2VyIDMyIGJpdHMuIFRoZSB1cHBlciAzMi1iaXRzIGFyZVxuICAgIC8vIGFjY2Vzc2libGUgd2l0aCBNb2R1bGUuZ2V0VGVtcFJldDAoKS5cbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9pbnQ2NCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgbG8zMiA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICBjb25zdCBoaTMyID0gTW9kdWxlLmdldFRlbXBSZXQwKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fbmFtZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl9uYW1lJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX25hbWVzID0gZnVuY3Rpb24oc3RtdCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICBjb25zdCBuQ29sdW1ucyA9IHNxbGl0ZTMuY29sdW1uX2NvdW50KHN0bXQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkNvbHVtbnM7ICsraSkge1xuICAgICAgY29sdW1ucy5wdXNoKHNxbGl0ZTMuY29sdW1uX25hbWUoc3RtdCwgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfTtcblxuICBzcWxpdGUzLmNvbHVtbl90ZXh0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX3RleHQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fdHlwZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl90eXBlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY3JlYXRlX2Z1bmN0aW9uID0gZnVuY3Rpb24oZGIsIHpGdW5jdGlvbk5hbWUsIG5BcmcsIGVUZXh0UmVwLCBwQXBwLCB4RnVuYywgeFN0ZXAsIHhGaW5hbCkge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICBcbiAgICAvLyBDb252ZXJ0IFNRTGl0ZSBjYWxsYmFjayBhcmd1bWVudHMgdG8gSmF2YVNjcmlwdC1mcmllbmRseSBhcmd1bWVudHMuXG4gICAgZnVuY3Rpb24gYWRhcHQoZikge1xuICAgICAgcmV0dXJuIGYgaW5zdGFuY2VvZiBBc3luY0Z1bmN0aW9uID9cbiAgICAgICAgKGFzeW5jIChjdHgsIG4sIHZhbHVlcykgPT4gZihjdHgsIE1vZHVsZS5IRUFQMzIuc3ViYXJyYXkodmFsdWVzIC8gNCwgdmFsdWVzIC8gNCArIG4pKSkgOlxuICAgICAgICAoKGN0eCwgbiwgdmFsdWVzKSA9PiBmKGN0eCwgTW9kdWxlLkhFQVAzMi5zdWJhcnJheSh2YWx1ZXMgLyA0LCB2YWx1ZXMgLyA0ICsgbikpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuY3JlYXRlX2Z1bmN0aW9uKFxuICAgICAgZGIsXG4gICAgICB6RnVuY3Rpb25OYW1lLFxuICAgICAgbkFyZyxcbiAgICAgIGVUZXh0UmVwLFxuICAgICAgcEFwcCxcbiAgICAgIHhGdW5jICYmIGFkYXB0KHhGdW5jKSxcbiAgICAgIHhTdGVwICYmIGFkYXB0KHhTdGVwKSxcbiAgICAgIHhGaW5hbCk7XG4gICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX2NyZWF0ZV9mdW5jdGlvbicsIHJlc3VsdCwgZGIpO1xuICB9O1xuXG4gIHNxbGl0ZTMuZGF0YV9jb3VudCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2RhdGFfY291bnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmV4ZWMgPSBhc3luYyBmdW5jdGlvbihkYiwgc3FsLCBjYWxsYmFjaykge1xuICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGIsIHNxbCkpIHtcbiAgICAgIGxldCBjb2x1bW5zO1xuICAgICAgd2hpbGUgKChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkpID09PSBTUUxpdGUuU1FMSVRFX1JPVykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA/PyBzcWxpdGUzLmNvbHVtbl9uYW1lcyhzdG10KTtcbiAgICAgICAgICBjb25zdCByb3cgPSBzcWxpdGUzLnJvdyhzdG10KTtcbiAgICAgICAgICBhd2FpdCBjYWxsYmFjayhyb3csIGNvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX09LO1xuICB9O1xuXG4gIHNxbGl0ZTMuZmluYWxpemUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19maW5hbGl6ZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKHN0bXQpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoc3RtdCk7XG4gICAgICBtYXBTdG10VG9EQi5kZWxldGUoc3RtdClcblxuICAgICAgLy8gRG9uJ3QgdGhyb3cgb24gZXJyb3IgaGVyZS4gVHlwaWNhbGx5IHRoZSBlcnJvciBoYXMgYWxyZWFkeSBiZWVuXG4gICAgICAvLyB0aHJvd24gYW5kIGZpbmFsaXplKCkgaXMgcGFydCBvZiB0aGUgY2xlYW51cC5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmdldF9hdXRvY29tbWl0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfZ2V0X2F1dG9jb21taXQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMubGlidmVyc2lvbiA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2xpYnZlcnNpb24nO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJzpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmxpYnZlcnNpb25fbnVtYmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfbGlidmVyc2lvbl9udW1iZXInO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJzpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmxpbWl0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfbGltaXQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihkYiwgaWQsIG5ld1ZhbCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihkYiwgaWQsIG5ld1ZhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5vcGVuX3YyID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfb3Blbl92Mic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnc25ubjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKHpGaWxlbmFtZSwgZmxhZ3MsIHpWZnMpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MgfHwgU1FMaXRlLlNRTElURV9PUEVOX0NSRUFURSB8IFNRTGl0ZS5TUUxJVEVfT1BFTl9SRUFEV1JJVEU7XG4gICAgICB6VmZzID0gY3JlYXRlVVRGOCh6VmZzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEFsbG93IHJldHJ5IG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IHJjID0gYXdhaXQgcmV0cnkoKCkgPT4gZih6RmlsZW5hbWUsIHRtcFB0clswXSwgZmxhZ3MsIHpWZnMpKTtcblxuICAgICAgICBjb25zdCBkYiA9IE1vZHVsZS5nZXRWYWx1ZSh0bXBQdHJbMF0sICcqJyk7XG4gICAgICAgIGRhdGFiYXNlcy5hZGQoZGIpO1xuXG4gICAgICAgIE1vZHVsZS5jY2FsbCgnUmVnaXN0ZXJFeHRlbnNpb25GdW5jdGlvbnMnLCAnbnVtYmVyJywgWydudW1iZXInXSwgW2RiXSk7XG4gICAgICAgIGNoZWNrKGZuYW1lLCByYyk7XG4gICAgICAgIHJldHVybiBkYjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIE1vZHVsZS5fc3FsaXRlM19mcmVlKHpWZnMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5wcm9ncmVzc19oYW5kbGVyID0gZnVuY3Rpb24oZGIsIG5Qcm9ncmVzc09wcywgaGFuZGxlciwgdXNlckRhdGEpIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgTW9kdWxlLnByb2dyZXNzX2hhbmRsZXIoZGIsIG5Qcm9ncmVzc09wcywgaGFuZGxlciwgdXNlckRhdGEpO1xuICB9OztcblxuICBzcWxpdGUzLnJlc2V0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzZXQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbihzdG10KSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHN0bXQpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdCA9IGZ1bmN0aW9uKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gKHZhbHVlIHwgMCkpIHtcbiAgICAgICAgICBzcWxpdGUzLnJlc3VsdF9pbnQoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxbGl0ZTMucmVzdWx0X2RvdWJsZShjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBzcWxpdGUzLnJlc3VsdF90ZXh0KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfYmxvYihjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBzcWxpdGUzLnJlc3VsdF9udWxsKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5yZXN1bHRfaW50NjQoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybigndW5rbm93biByZXN1bHQgY29udmVydGVkIHRvIG51bGwnLCB2YWx1ZSk7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfbnVsbChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgc3FsaXRlMy5yZXN1bHRfYmxvYiA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF9ibG9iJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBieXRlTGVuZ3RoID0gdmFsdWUuYnl0ZUxlbmd0aCA/PyB2YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBwdHIgPSBNb2R1bGUuX3NxbGl0ZTNfbWFsbG9jKGJ5dGVMZW5ndGgpO1xuICAgICAgTW9kdWxlLkhFQVBVOC5zdWJhcnJheShwdHIpLnNldCh2YWx1ZSk7XG4gICAgICBmKGNvbnRleHQsIHB0ciwgYnl0ZUxlbmd0aCwgc3FsaXRlRnJlZUFkZHJlc3MpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfZG91YmxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGYoY29udGV4dCwgdmFsdWUpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfaW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X2ludCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGYoY29udGV4dCwgdmFsdWUpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfaW50NjQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfaW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihjb250ZXh0LCB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID4gTUFYX0lOVDY0IHx8IHZhbHVlIDwgTUlOX0lOVDY0KSByZXR1cm4gU1FMaXRlLlNRTElURV9SQU5HRTtcblxuICAgICAgY29uc3QgbG8zMiA9IHZhbHVlICYgMHhmZmZmZmZmZm47XG4gICAgICBjb25zdCBoaTMyID0gdmFsdWUgPj4gMzJuO1xuICAgICAgZihjb250ZXh0LCBOdW1iZXIobG8zMiksIE51bWJlcihoaTMyKSk7IC8vIHZvaWQgcmV0dXJuXG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdF9udWxsID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X251bGwnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgZihjb250ZXh0KTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X3RleHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfdGV4dCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihjb250ZXh0LCB2YWx1ZSkge1xuICAgICAgY29uc3QgcHRyID0gY3JlYXRlVVRGOCh2YWx1ZSk7XG4gICAgICBmKGNvbnRleHQsIHB0ciwgLTEsIHNxbGl0ZUZyZWVBZGRyZXNzKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucm93ID0gZnVuY3Rpb24oc3RtdCkge1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIGNvbnN0IG5Db2x1bW5zID0gc3FsaXRlMy5kYXRhX2NvdW50KHN0bXQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbkNvbHVtbnM7ICsraSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzcWxpdGUzLmNvbHVtbihzdG10LCBpKTtcblxuICAgICAgLy8gQ29weSBibG9iIGlmIGFsaWFzaW5nIHZvbGF0aWxlIFdlYkFzc2VtYmx5IG1lbW9yeS4gVGhpcyBhdm9pZHMgYW5cbiAgICAgIC8vIHVubmVjZXNzYXJ5IGNvcHkgaWYgdXNlcnMgbW9ua2V5IHBhdGNoIGNvbHVtbl9ibG9iIHRvIGNvcHkuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByb3cucHVzaCh2YWx1ZT8uYnVmZmVyID09PSBNb2R1bGUuSEVBUFU4LmJ1ZmZlciA/IHZhbHVlLnNsaWNlKCkgOiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgc3FsaXRlMy5zZXRfYXV0aG9yaXplciA9IGZ1bmN0aW9uKGRiLCB4QXV0aCwgcEFwcCkge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcblxuICAgIC8vIENvbnZlcnQgU1FMaXRlIGNhbGxiYWNrIGFyZ3VtZW50cyB0byBKYXZhU2NyaXB0LWZyaWVuZGx5IGFyZ3VtZW50cy5cbiAgICBmdW5jdGlvbiBjdnRBcmdzKF8sIGlBY3Rpb24sIHAzLCBwNCwgcDUsIHA2KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBfLFxuICAgICAgICBpQWN0aW9uLFxuICAgICAgICBNb2R1bGUuVVRGOFRvU3RyaW5nKHAzKSxcbiAgICAgICAgTW9kdWxlLlVURjhUb1N0cmluZyhwNCksXG4gICAgICAgIE1vZHVsZS5VVEY4VG9TdHJpbmcocDUpLFxuICAgICAgICBNb2R1bGUuVVRGOFRvU3RyaW5nKHA2KVxuICAgICAgXTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkYXB0KGYpIHtcbiAgICAgIHJldHVybiBmIGluc3RhbmNlb2YgQXN5bmNGdW5jdGlvbiA/XG4gICAgICAgIChhc3luYyAoXywgaUFjdGlvbiwgcDMsIHA0LCBwNSwgcDYpID0+IGYoLi4uY3Z0QXJncyhfLCBpQWN0aW9uLCBwMywgcDQsIHA1LCBwNikpKSA6XG4gICAgICAgICgoXywgaUFjdGlvbiwgcDMsIHA0LCBwNSwgcDYpID0+IGYoLi4uY3Z0QXJncyhfLCBpQWN0aW9uLCBwMywgcDQsIHA1LCBwNikpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuc2V0X2F1dGhvcml6ZXIoZGIsIGFkYXB0KHhBdXRoKSwgcEFwcCk7XG4gICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX3NldF9hdXRob3JpemVyJywgcmVzdWx0LCBkYik7XG4gIH07XG5cbiAgc3FsaXRlMy5zcWwgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19zcWwnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnN0YXRlbWVudHMgPSBmdW5jdGlvbihkYiwgc3FsLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBwcmVwYXJlID0gTW9kdWxlLmN3cmFwKFxuICAgICAgJ3NxbGl0ZTNfcHJlcGFyZV92MycsXG4gICAgICAnbnVtYmVyJyxcbiAgICAgIFsnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInXSxcbiAgICAgIHsgYXN5bmM6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKGFzeW5jIGZ1bmN0aW9uKigpIHtcbiAgICAgIGNvbnN0IG9uRmluYWxseSA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRW5jb2RlIFNRTCBzdHJpbmcgdG8gVVRGLTguXG4gICAgICAgIGNvbnN0IHV0ZjggPSB0ZXh0RW5jb2Rlci5lbmNvZGUoc3FsKTtcblxuICAgICAgICAvLyBDb3B5IGVuY29kZWQgc3RyaW5nIHRvIFdlYkFzc2VtYmx5IG1lbW9yeS4gVGhlIFNRTGl0ZSBkb2NzIHNheVxuICAgICAgICAvLyB6ZXJvLXRlcm1pbmF0aW9uIGlzIGEgbWlub3Igb3B0aW1pemF0aW9uIHNvIGFkZCByb29tIGZvciB0aGF0LlxuICAgICAgICAvLyBBbHNvIGFkZCBzcGFjZSBmb3IgdGhlIHN0YXRlbWVudCBoYW5kbGUgYW5kIFNRTCB0YWlsIHBvaW50ZXIuXG4gICAgICAgIGNvbnN0IGFsbG9jU2l6ZSA9IHV0ZjguYnl0ZUxlbmd0aCAtICh1dGY4LmJ5dGVMZW5ndGggJSA0KSArIDEyO1xuICAgICAgICBjb25zdCBwekhlYWQgPSBNb2R1bGUuX3NxbGl0ZTNfbWFsbG9jKGFsbG9jU2l6ZSk7XG4gICAgICAgIGNvbnN0IHB6RW5kID0gcHpIZWFkICsgdXRmOC5ieXRlTGVuZ3RoICsgMTtcbiAgICAgICAgb25GaW5hbGx5LnB1c2goKCkgPT4gTW9kdWxlLl9zcWxpdGUzX2ZyZWUocHpIZWFkKSk7XG4gICAgICAgIE1vZHVsZS5IRUFQVTguc2V0KHV0ZjgsIHB6SGVhZCk7XG4gICAgICAgIE1vZHVsZS5IRUFQVThbcHpFbmQgLSAxXSA9IDA7XG4gIFxuICAgICAgICAvLyBVc2UgZXh0cmEgc3BhY2UgZm9yIHRoZSBzdGF0ZW1lbnQgaGFuZGxlIGFuZCBTUUwgdGFpbCBwb2ludGVyLlxuICAgICAgICBjb25zdCBwU3RtdCA9IHB6SGVhZCArIGFsbG9jU2l6ZSAtIDg7XG4gICAgICAgIGNvbnN0IHB6VGFpbCA9IHB6SGVhZCArIGFsbG9jU2l6ZSAtIDQ7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgc3RhdGVtZW50IGhhbmRsZXMgYXJlIG5vdCBsZWFrZWQuXG4gICAgICAgIGxldCBzdG10O1xuICAgICAgICBmdW5jdGlvbiBtYXliZUZpbmFsaXplKCkge1xuICAgICAgICAgIGlmIChzdG10ICYmICFvcHRpb25zLnVuc2NvcGVkKSB7XG4gICAgICAgICAgICBzcWxpdGUzLmZpbmFsaXplKHN0bXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdG10ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBvbkZpbmFsbHkucHVzaChtYXliZUZpbmFsaXplKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvb3Agb3ZlciBzdGF0ZW1lbnRzLlxuICAgICAgICBNb2R1bGUuc2V0VmFsdWUocHpUYWlsLCBwekhlYWQsICcqJyk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvLyBSZWNsYWltIHJlc291cmNlcyBmb3IgdGhlIHByZXZpb3VzIGl0ZXJhdGlvbi5cbiAgICAgICAgICBtYXliZUZpbmFsaXplKCk7XG5cbiAgICAgICAgICAvLyBDYWxsIHNxbGl0ZTNfcHJlcGFyZV92MygpIGZvciB0aGUgbmV4dCBzdGF0ZW1lbnQuXG4gICAgICAgICAgLy8gQWxsb3cgcmV0cnkgb3BlcmF0aW9ucy5cbiAgICAgICAgICBjb25zdCB6VGFpbCA9IE1vZHVsZS5nZXRWYWx1ZShwelRhaWwsICcqJyk7XG4gICAgICAgICAgY29uc3QgcmMgPSBhd2FpdCByZXRyeSgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJlcGFyZShcbiAgICAgICAgICAgICAgZGIsXG4gICAgICAgICAgICAgIHpUYWlsLFxuICAgICAgICAgICAgICBwekVuZCAtIHB6VGFpbCxcbiAgICAgICAgICAgICAgb3B0aW9ucy5mbGFncyB8fCAwLFxuICAgICAgICAgICAgICBwU3RtdCxcbiAgICAgICAgICAgICAgcHpUYWlsKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChyYyAhPT0gU1FMaXRlLlNRTElURV9PSykge1xuICAgICAgICAgICAgY2hlY2soJ3NxbGl0ZTNfcHJlcGFyZV92MycsIHJjLCBkYik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHN0bXQgPSBNb2R1bGUuZ2V0VmFsdWUocFN0bXQsICcqJyk7XG4gICAgICAgICAgaWYgKHN0bXQpIHtcbiAgICAgICAgICAgIG1hcFN0bXRUb0RCLnNldChzdG10LCBkYik7XG4gICAgICAgICAgICB5aWVsZCBzdG10O1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoc3RtdCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB3aGlsZSAob25GaW5hbGx5Lmxlbmd0aCkge1xuICAgICAgICAgIG9uRmluYWxseS5wb3AoKSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfTtcblxuICBzcWxpdGUzLnN0ZXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19zdGVwJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuXG4gICAgICAvLyBBbGxvdyByZXRyeSBvcGVyYXRpb25zLlxuICAgICAgY29uc3QgcmMgPSBhd2FpdCByZXRyeSgoKSA9PiBmKHN0bXQpKTtcblxuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByYywgbWFwU3RtdFRvREIuZ2V0KHN0bXQpLCBbU1FMaXRlLlNRTElURV9ST1csIFNRTGl0ZS5TUUxJVEVfRE9ORV0pO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb21taXRfaG9vayA9IGZ1bmN0aW9uKGRiLCB4Q29tbWl0SG9vaykge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICBNb2R1bGUuY29tbWl0X2hvb2soZGIsIHhDb21taXRIb29rKTtcbiAgfTtcblxuICBzcWxpdGUzLnVwZGF0ZV9ob29rID0gZnVuY3Rpb24oZGIsIHhVcGRhdGVIb29rKSB7XG4gICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuXG4gICAgLy8gQ29udmVydCBTUUxpdGUgY2FsbGJhY2sgYXJndW1lbnRzIHRvIEphdmFTY3JpcHQtZnJpZW5kbHkgYXJndW1lbnRzLlxuICAgIGZ1bmN0aW9uIGN2dEFyZ3MoaVVwZGF0ZVR5cGUsIGRiTmFtZSwgdGJsTmFtZSwgbG8zMiwgaGkzMikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaVVwZGF0ZVR5cGUsXG4gICAgICAgIE1vZHVsZS5VVEY4VG9TdHJpbmcoZGJOYW1lKSxcbiAgICAgICAgTW9kdWxlLlVURjhUb1N0cmluZyh0YmxOYW1lKSxcblx0XHRjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMilcbiAgICAgIF07XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGFwdChmKSB7XG4gICAgICByZXR1cm4gZiBpbnN0YW5jZW9mIEFzeW5jRnVuY3Rpb24gP1xuICAgICAgICAoYXN5bmMgKGlVcGRhdGVUeXBlLCBkYk5hbWUsIHRibE5hbWUsIGxvMzIsIGhpMzIpID0+IGYoLi4uY3Z0QXJncyhpVXBkYXRlVHlwZSwgZGJOYW1lLCB0YmxOYW1lLCBsbzMyLCBoaTMyKSkpIDpcbiAgICAgICAgKChpVXBkYXRlVHlwZSwgZGJOYW1lLCB0YmxOYW1lLCBsbzMyLCBoaTMyKSA9PiBmKC4uLmN2dEFyZ3MoaVVwZGF0ZVR5cGUsIGRiTmFtZSwgdGJsTmFtZSwgbG8zMiwgaGkzMikpKTtcbiAgICB9XG5cbiAgICBNb2R1bGUudXBkYXRlX2hvb2soZGIsIGFkYXB0KHhVcGRhdGVIb29rKSk7XG4gIH07O1xuXG4gIHNxbGl0ZTMudmFsdWUgPSBmdW5jdGlvbihwVmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gc3FsaXRlMy52YWx1ZV90eXBlKHBWYWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfQkxPQjpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMudmFsdWVfYmxvYihwVmFsdWUpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0ZMT0FUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy52YWx1ZV9kb3VibGUocFZhbHVlKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9JTlRFR0VSOlxuICAgICAgICBjb25zdCBsbzMyID0gc3FsaXRlMy52YWx1ZV9pbnQocFZhbHVlKTtcbiAgICAgICAgY29uc3QgaGkzMiA9IE1vZHVsZS5nZXRUZW1wUmV0MCgpO1xuICAgICAgICByZXR1cm4gY3Z0MzJ4MkFzU2FmZShsbzMyLCBoaTMyKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9OVUxMOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9URVhUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy52YWx1ZV90ZXh0KHBWYWx1ZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ3Vua25vd24gdHlwZScsIHR5cGUpO1xuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLnZhbHVlX2Jsb2IgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV9ibG9iJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgbkJ5dGVzID0gc3FsaXRlMy52YWx1ZV9ieXRlcyhwVmFsdWUpO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGYocFZhbHVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS5IRUFQVTguc3ViYXJyYXkoYWRkcmVzcywgYWRkcmVzcyArIG5CeXRlcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy52YWx1ZV9ieXRlcyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2J5dGVzJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfZG91YmxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfZG91YmxlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfaW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfaW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocFZhbHVlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWYWx1ZSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy52YWx1ZV9pbnQ2NCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgbG8zMiA9IGYocFZhbHVlKTtcbiAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGN2dDMyeDJUb0JpZ0ludChsbzMyLCBoaTMyKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX3RleHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV90ZXh0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfdHlwZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX3R5cGUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24ocFZhbHVlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHBWYWx1ZSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy52ZnNfcmVnaXN0ZXIgPSBmdW5jdGlvbih2ZnMsIG1ha2VEZWZhdWx0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLnZmc19yZWdpc3Rlcih2ZnMsIG1ha2VEZWZhdWx0KTtcbiAgICByZXR1cm4gY2hlY2soJ3NxbGl0ZTNfdmZzX3JlZ2lzdGVyJywgcmVzdWx0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBjaGVjayhmbmFtZSwgcmVzdWx0LCBkYiA9IG51bGwsIGFsbG93ZWQgPSBbU1FMaXRlLlNRTElURV9PS10pIHtcbiAgICBpZiAoYWxsb3dlZC5pbmNsdWRlcyhyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkYiA/IE1vZHVsZS5jY2FsbCgnc3FsaXRlM19lcnJtc2cnLCAnc3RyaW5nJywgWydudW1iZXInXSwgW2RiXSkgOiBmbmFtZTtcbiAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IobWVzc2FnZSwgcmVzdWx0KTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdXRvbWF0aWNhbGx5IHJldHJ5IGZhaWxlZCBjYWxscyB0aGF0XG4gIC8vIGhhdmUgcGVuZGluZyByZXRyeSBvcGVyYXRpb25zIHRoYXQgc2hvdWxkIGFsbG93IHRoZSByZXRyeSB0b1xuICAvLyBzdWNjZWVkLlxuICBhc3luYyBmdW5jdGlvbiByZXRyeShmKSB7XG4gICAgbGV0IHJjO1xuICAgIGRvIHtcbiAgICAgIC8vIFdhaXQgZm9yIGFsbCBwZW5kaW5nIHJldHJ5IG9wZXJhdGlvbnMgdG8gY29tcGxldGUuIFRoaXMgaXNcbiAgICAgIC8vIG5vcm1hbGx5IGVtcHR5IG9uIHRoZSBmaXJzdCBsb29wIGl0ZXJhdGlvbi5cbiAgICAgIGlmIChNb2R1bGUucmV0cnlPcHMubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoTW9kdWxlLnJldHJ5T3BzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBNb2R1bGUucmV0cnlPcHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICByYyA9IGF3YWl0IGYoKTtcblxuICAgICAgLy8gUmV0cnkgb24gZmFpbHVyZSB3aXRoIG5ldyBwZW5kaW5nIHJldHJ5IG9wZXJhdGlvbnMuXG4gICAgfSB3aGlsZSAocmMgJiYgTW9kdWxlLnJldHJ5T3BzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHJjO1xuICB9XG5cbiAgcmV0dXJuIHNxbGl0ZTM7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1c2UgYSBtb3JlIGNvbXBhY3Qgc2lnbmF0dXJlIHNwZWNpZmljYXRpb24uXG5mdW5jdGlvbiBkZWNsKHMpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IG0gPSBzLm1hdGNoKC8oW25zQF0qKTooW25zdkBdKS8pO1xuICBzd2l0Y2ggKG1bMl0pIHtcbiAgICBjYXNlICduJzpcbiAgICAgIHJlc3VsdC5wdXNoKCdudW1iZXInKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3MnOlxuICAgICAgcmVzdWx0LnB1c2goJ3N0cmluZycpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndic6XG4gICAgICByZXN1bHQucHVzaChudWxsKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgYXJncyA9IFtdO1xuICBmb3IgKGxldCBjIG9mIG1bMV0pIHtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICBhcmdzLnB1c2goJ251bWJlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBhcmdzLnB1c2goJ3N0cmluZycpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goYXJncyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBQcmltYXJ5IHJlc3VsdCBjb2Rlcy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvcmVzY29kZS5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX09LID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRVJST1IgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTlRFUk5BTCA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX1BFUk0gPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BQk9SVCA9IDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0JVU1kgPSA1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLRUQgPSA2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9OT01FTSA9IDc7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JFQURPTkxZID0gODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5URVJSVVBUID0gOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlIgPSAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09SUlVQVCA9IDExO1xuZXhwb3J0IGNvbnN0IFNRTElURV9OT1RGT1VORCA9IDEyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9GVUxMID0gMTM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NBTlRPUEVOID0gMTQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX1BST1RPQ09MID0gMTU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0VNUFRZID0gMTY7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NDSEVNQSA9IDE3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9UT09CSUcgPSAxODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVCA9IDE5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9NSVNNQVRDSCA9IDIwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9NSVNVU0UgPSAyMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9MRlMgPSAyMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQVVUSCA9IDIzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9GT1JNQVQgPSAyNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkFOR0UgPSAyNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9UQURCID0gMjY7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PVElDRSA9IDI3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9XQVJOSU5HID0gMjg7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JPVyA9IDEwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRE9ORSA9IDEwMTtcblxuLy8gRXh0ZW5kZWQgZXJyb3IgY29kZXMuXG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0FDQ0VTUyA9IDMzMzg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0NIRUNLUkVTRVJWRURMT0NLID0gMzU5NDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfQ0xPU0UgPSA0MTA2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9EQVRBID0gODIwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfREVMRVRFID0gMjU3MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfREVMRVRFX05PRU5UID0gNTg5ODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfRElSX0ZTWU5DID0gMTI5MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfRlNUQVQgPSAxODAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9GU1lOQyA9IDEwMzQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0dFVFRFTVBQQVRIID0gNjQxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfTE9DSyA9IDM4NTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX05PTUVNID0gMzA4MjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfUkVBRCA9IDI2NjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfUkRMT0NLID0gMjMxNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfU0VFSyA9IDU2NDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1NIT1JUX1JFQUQgPSA1MjI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1RSVU5DQVRFID0gMTU0NjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfVU5MT0NLID0gMjA1ODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfVk5PREUgPSA2OTIyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9XUklURSA9IDc3ODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfQkVHSU5fQVRPTUlDID0gNzQzNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfQ09NTUlUX0FUT01JQyA9IDc2OTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1JPTExCQUNLX0FUT01JQyA9IDc5NDY7XG5cbi8vIE90aGVyIGV4dGVuZGVkIHJlc3VsdCBjb2Rlcy5cbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9DSEVDSyA9IDI3NTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9DT01NSVRIT09LID0gNTMxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX0ZPUkVJR05LRVkgPSA3ODc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfRlVOQ1RJT04gPSAxMDQzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX05PVE5VTEwgPSAxMjk5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1BJTk5FRCA9IDI4MzU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfUFJJTUFSWUtFWSA9IDE1NTU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfUk9XSUQgPSAyNTc5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1RSSUdHRVIgPSAxODExO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1VOSVFVRSA9IDIwNjc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfVlRBQiA9IDIzMjM7XG5cbi8vIE9wZW4gZmxhZ3MuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2Nfb3Blbl9hdXRvcHJveHkuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1JFQURPTkxZID0gMHgwMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9SRUFEV1JJVEUgPSAweDAwMDAwMDAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0NSRUFURSA9IDB4MDAwMDAwMDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fREVMRVRFT05DTE9TRSA9IDB4MDAwMDAwMDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fRVhDTFVTSVZFID0gMHgwMDAwMDAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9BVVRPUFJPWFkgPSAweDAwMDAwMDIwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1VSSSA9IDB4MDAwMDAwNDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTUVNT1JZID0gMHgwMDAwMDA4MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9NQUlOX0RCID0gMHgwMDAwMDEwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9URU1QX0RCID0gMHgwMDAwMDIwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9UUkFOU0lFTlRfREIgPSAweDAwMDAwNDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX01BSU5fSk9VUk5BTCA9IDB4MDAwMDA4MDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fVEVNUF9KT1VSTkFMID0gMHgwMDAwMTAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9TVUJKT1VSTkFMID0gMHgwMDAwMjAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9TVVBFUl9KT1VSTkFMID0gMHgwMDAwNDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9OT01VVEVYID0gMHgwMDAwODAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9GVUxMTVVURVggPSAweDAwMDEwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1NIQVJFRENBQ0hFID0gMHgwMDAyMDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9QUklWQVRFQ0FDSEUgPSAweDAwMDQwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1dBTCA9IDB4MDAwODAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTk9GT0xMT1cgPSAweDAxMDAwMDAwO1xuXG4vLyBMb2NraW5nIGxldmVscy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19sb2NrX2V4Y2x1c2l2ZS5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tfTk9ORSA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tfU0hBUkVEID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS19SRVNFUlZFRCA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tfUEVORElORyA9IDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tfRVhDTFVTSVZFID0gNDtcblxuLy8gRGV2aWNlIGNoYXJhY3RlcmlzdGljcy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19pb2NhcF9hdG9taWMuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMgPSAweDAwMDAwMDAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUM1MTIgPSAweDAwMDAwMDAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMxSyA9IDB4MDAwMDAwMDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzJLID0gMHgwMDAwMDAwODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDNEsgPSAweDAwMDAwMDEwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUM4SyA9IDB4MDAwMDAwMjA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzE2SyA9IDB4MDAwMDAwNDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzMySyA9IDB4MDAwMDAwODA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzY0SyA9IDB4MDAwMDAxMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX1NBRkVfQVBQRU5EID0gMHgwMDAwMDIwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfU0VRVUVOVElBTCA9IDB4MDAwMDA0MDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX1VOREVMRVRBQkxFX1dIRU5fT1BFTiA9IDB4MDAwMDA4MDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX1BPV0VSU0FGRV9PVkVSV1JJVEUgPSAweDAwMDAxMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9JTU1VVEFCTEUgPSAweDAwMDAyMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9CQVRDSF9BVE9NSUMgPSAweDAwMDA0MDAwO1xuXG4vLyB4QWNjZXNzIGZsYWdzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX2FjY2Vzc19leGlzdHMuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9BQ0NFU1NfRVhJU1RTID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUNDRVNTX1JFQURXUklURSA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FDQ0VTU19SRUFEID0gMjtcblxuLy8gRmlsZSBjb250cm9sIG9wY29kZXNcbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19mY250bF9iZWdpbl9hdG9taWNfd3JpdGUuaHRtbCNzcWxpdGVmY250bGJlZ2luYXRvbWljd3JpdGVcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfTE9DS1NUQVRFID0gMTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0dFVF9MT0NLUFJPWFlGSUxFID0gMjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NFVF9MT0NLUFJPWFlGSUxFID0gMzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0xBU1RfRVJSTk8gPSA0OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfU0laRV9ISU5UID0gNTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NIVU5LX1NJWkUgPSA2OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfRklMRV9QT0lOVEVSID0gNzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NZTkNfT01JVFRFRCA9IDg7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9XSU4zMl9BVl9SRVRSWSA9IDk7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9QRVJTSVNUX1dBTCA9IDEwOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfT1ZFUldSSVRFID0gMTE7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9WRlNOQU1FID0gMTI7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9QT1dFUlNBRkVfT1ZFUldSSVRFID0gMTM7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9QUkFHTUEgPSAxNDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0JVU1lIQU5ETEVSID0gMTU7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9URU1QRklMRU5BTUUgPSAxNjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX01NQVBfU0laRSA9IDE4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVFJBQ0UgPSAxOTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0hBU19NT1ZFRCA9IDIwOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfU1lOQyA9IDIxOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQ09NTUlUX1BIQVNFVFdPID0gMjI7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9XSU4zMl9TRVRfSEFORExFID0gMjM7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9XQUxfQkxPQ0sgPSAyNDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1pJUFZGUyA9IDI1OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUkJVID0gMjY7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9WRlNfUE9JTlRFUiA9IDI3OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfSk9VUk5BTF9QT0lOVEVSID0gMjg7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9XSU4zMl9HRVRfSEFORExFID0gMjk7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9QREIgPSAzMDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0JFR0lOX0FUT01JQ19XUklURSA9IDMxOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQ09NTUlUX0FUT01JQ19XUklURSA9IDMyOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUk9MTEJBQ0tfQVRPTUlDX1dSSVRFID0gMzM7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9MT0NLX1RJTUVPVVQgPSAzNDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0RBVEFfVkVSU0lPTiA9IDM1OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfU0laRV9MSU1JVCA9IDM2OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQ0tQVF9ET05FID0gMzc7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9SRVNFUlZFX0JZVEVTID0gMzg7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9DS1BUX1NUQVJUID0gMzk7XG5cbi8vIEZ1bmRhbWVudGFsIGRhdGF0eXBlcy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19ibG9iLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5URUdFUiA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0ZMT0FUID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfVEVYVCA9IDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0JMT0IgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9OVUxMID0gNTtcblxuLy8gU3BlY2lhbCBkZXN0cnVjdG9yIGJlaGF2aW9yLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX3N0YXRpYy5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX1NUQVRJQyA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX1RSQU5TSUVOVCA9IC0xO1xuXG4vLyBUZXh0IGVuY29kaW5ncy5cbi8vIGh0dHBzOi8vc3FsaXRlLm9yZy9jM3JlZi9jX2FueS5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX1VURjggPSAxOyAgICAgLyogSU1QOiBSLTM3NTE0LTM1NTY2ICovXG5leHBvcnQgY29uc3QgU1FMSVRFX1VURjE2TEUgPSAyOyAgLyogSU1QOiBSLTAzMzcxLTM3NjM3ICovXG5leHBvcnQgY29uc3QgU1FMSVRFX1VURjE2QkUgPSAzOyAgLyogSU1QOiBSLTUxOTcxLTM0MTU0ICovXG5leHBvcnQgY29uc3QgU1FMSVRFX1VURjE2ID0gNDsgICAgLyogVXNlIG5hdGl2ZSBieXRlIG9yZGVyICovXG5cbi8vIE1vZHVsZSBjb25zdHJhaW50IG9wcy5cbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9FUSAgICAgICAgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0dUICAgICAgICA9IDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTEUgICAgICAgID0gODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9MVCAgICAgICAgPSAxNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9HRSAgICAgICAgPSAzMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9NQVRDSCAgICAgPSA2NDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9MSUtFICAgICAgPSA2NTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9HTE9CICAgICAgPSA2NjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9SRUdFWFAgICAgPSA2NztcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9ORSAgICAgICAgPSA2ODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9JU05PVCAgICAgPSA2OTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9JU05PVE5VTEwgPSA3MDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9JU05VTEwgICAgPSA3MTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9JUyAgICAgICAgPSA3MjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9GVU5DVElPTiAgPSAxNTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX1NDQU5fVU5JUVVFICAgICAgICAgID0gMTsgIC8qIFNjYW4gdmlzaXRzIGF0IG1vc3QgPSAxIHJvdyAqL1xuXG4vLyBGdW5jdGlvbiBmbGFnc1xuZXhwb3J0IGNvbnN0IFNRTElURV9ERVRFUk1JTklTVElDID0gMHgwMDAwMDA4MDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RJUkVDVE9OTFkgICAgPSAweDAwMDA4MDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfU1VCVFlQRSAgICAgICA9IDB4MDAwMTAwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTk5PQ1VPVVMgICAgID0gMHgwMDAyMDAwMDA7XG5cbi8vIFN5bmMgZmxhZ3NcbmV4cG9ydCBjb25zdCBTUUxJVEVfU1lOQ19OT1JNQUwgICA9IDB4MDAwMDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NZTkNfRlVMTCAgICAgPSAweDAwMDAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TWU5DX0RBVEFPTkxZID0gMHgwMDAxMDtcblxuLy8gQXV0aG9yaXplciBhY3Rpb24gY29kZXNcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX0lOREVYICAgICAgICA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9UQUJMRSAgICAgICAgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEVNUF9JTkRFWCAgID0gMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RFTVBfVEFCTEUgICA9IDQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9URU1QX1RSSUdHRVIgPSA1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEVNUF9WSUVXICAgID0gNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RSSUdHRVIgICAgICA9IDc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9WSUVXICAgICAgICAgPSA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9ERUxFVEUgICAgICAgICAgICAgID0gOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9JTkRFWCAgICAgICAgICA9IDEwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RBQkxFICAgICAgICAgID0gMTE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVEVNUF9JTkRFWCAgICAgPSAxMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9URU1QX1RBQkxFICAgICA9IDEzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RFTVBfVFJJR0dFUiAgID0gMTQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVEVNUF9WSUVXICAgICAgPSAxNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9UUklHR0VSICAgICAgICA9IDE2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1ZJRVcgICAgICAgICAgID0gMTc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOU0VSVCAgICAgICAgICAgICAgPSAxODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUFJBR01BICAgICAgICAgICAgICA9IDE5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9SRUFEICAgICAgICAgICAgICAgID0gMjA7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NFTEVDVCAgICAgICAgICAgICAgPSAyMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfVFJBTlNBQ1RJT04gICAgICAgICA9IDIyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9VUERBVEUgICAgICAgICAgICAgID0gMjM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FUVEFDSCAgICAgICAgICAgICAgPSAyNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfREVUQUNIICAgICAgICAgICAgICA9IDI1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9BTFRFUl9UQUJMRSAgICAgICAgID0gMjY7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JFSU5ERVggICAgICAgICAgICAgPSAyNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQU5BTFlaRSAgICAgICAgICAgICA9IDI4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVlRBQkxFICAgICAgID0gMjk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVlRBQkxFICAgICAgICAgPSAzMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRlVOQ1RJT04gICAgICAgICAgICA9IDMxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TQVZFUE9JTlQgICAgICAgICAgID0gMzI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPUFkgICAgICAgICAgICAgICAgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9SRUNVUlNJVkUgICAgICAgICAgID0gMzM7XG5cbi8vIEF1dGhvcml6ZXIgcmV0dXJuIGNvZGVzXG5leHBvcnQgY29uc3QgU1FMSVRFX0RFTlkgICA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lHTk9SRSA9IDI7XG5cbi8vIExpbWl0IGNhdGVnb3JpZXNcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfTEVOR1RIICAgICAgICAgICAgICA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1NRTF9MRU5HVEggICAgICAgICAgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9DT0xVTU4gICAgICAgICAgICAgID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfRVhQUl9ERVBUSCAgICAgICAgICA9IDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0NPTVBPVU5EX1NFTEVDVCAgICAgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9WREJFX09QICAgICAgICAgICAgID0gNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfRlVOQ1RJT05fQVJHICAgICAgICA9IDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0FUVEFDSEVEICAgICAgICAgICAgPSA3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9MSUtFX1BBVFRFUk5fTEVOR1RIID0gODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfVkFSSUFCTEVfTlVNQkVSICAgICA9IDk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1RSSUdHRVJfREVQVEggICAgICAgPSAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfV09SS0VSX1RIUkVBRFMgICAgICA9IDExO1xuXG5leHBvcnQgY29uc3QgU1FMSVRFX1BSRVBBUkVfUEVSU0lTVEVOVCA9IDB4MDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX1BSRVBBUkVfTk9STUFMSVpFRCA9IDB4MDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX1BSRVBBUkVfTk9fVlRBQiA9IDB4MDQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IHNlbGYubG9jYXRpb24gKyBcIlwiO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMVxufTtcblxuLy8gbm8gY2h1bmsgaW5zdGFsbCBmdW5jdGlvbiBuZWVkZWRcbi8vIG5vIGNodW5rIGxvYWRpbmdcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIi8vIEBqb3VybmV5YXBwcy93YS1zcWxpdGUgaXMgdGhlIGFjdGl2ZWx5LW1haW50YWluZWQgUG93ZXJTeW5jIGZvcmsgb2Ygcmhhc2hpbW90by93YS1zcWxpdGUuXG4vLyBUaGUgb3JpZ2luYWwgbnBtIHBhY2thZ2UgKHdhLXNxbGl0ZUAxLjAuMCkgaXMgMiB5ZWFycyBzdGFsZSBhbmQgY29udGFpbnMgYSBXQVNNIG1lbW9yeVxuLy8gT09CIGJ1ZyB0aGF0IGNhdXNlcyBcImRpc2sgaW1hZ2UgaXMgbWFsZm9ybWVkXCIgY29ycnVwdGlvbiBvbiBsYXJnZSBzZWVkcy5cbi8vIEpTUEkgYnVpbGQgKHdhLXNxbGl0ZS1qc3BpLm1qcykgaXMgdXNlZCBpbnN0ZWFkIG9mIEFzeW5jaWZ5ICh3YS1zcWxpdGUtYXN5bmMubWpzKSBiZWNhdXNlXG4vLyBBc3luY2lmeSB0cmlnZ2VycyBhIFdpbmRvd3MgZGVidWdnZXIgYWNjZXNzIHZpb2xhdGlvbiBkdXJpbmcgV0FTTSBKSVQgY29tcGlsYXRpb24uXG4vLyBKU1BJIGlzIHN0YWJsZSBpbiBDaHJvbWUgMTM3KyAodW5mbGFnZ2VkKSBhbmQgaGFzIG5vIHN0YWNrLXJld3JpdGluZyBvdmVyaGVhZC5cbmltcG9ydCBTUUxpdGVBc3luY0VTTUZhY3RvcnkgZnJvbSAnQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZS9kaXN0L3dhLXNxbGl0ZS1qc3BpLm1qcyc7XG5pbXBvcnQgKiBhcyBTUUxpdGUgZnJvbSAnQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZSc7XG5pbXBvcnQgeyBJREJCYXRjaEF0b21pY1ZGUyB9IGZyb20gJ0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvc3JjL2V4YW1wbGVzL0lEQkJhdGNoQXRvbWljVkZTJztcblxubGV0IHNxbGl0ZTMgPSBudWxsO1xuLy8gYXN5bmNNb2R1bGUgaXMgbW9kdWxlLXNjb3BlZCAobm90IGxvY2FsIHRvIGVuc3VyZUVuZ2luZSkgc28gaXQgY2FuIGJlIHBhc3NlZCB0b1xuLy8gSURCQmF0Y2hBdG9taWNWRlMuY3JlYXRlKCkuIFRoZSBuZXcgQVBJIHJlcXVpcmVzIHRoZSBFbXNjcmlwdGVuIG1vZHVsZSBvYmplY3QgdG9cbi8vIHJlc29sdmUgaGVscGVycyBsaWtlIFVURjhUb1N0cmluZyB0aGF0IHRoZSBWRlMgdXNlcyBpbnRlcm5hbGx5LlxubGV0IGFzeW5jTW9kdWxlID0gbnVsbDtcbmxldCBjdXJyZW50RGIgPSBudWxsO1xuLy8gTWFwIG9mIGZpbGVOYW1lIOKGkiBWRlMgaW5zdGFuY2Ugc28gd2UgY2FuIGNsb3NlIElEQiBjb25uZWN0aW9ucyB3aGVuIHRoZSBkYXRhYmFzZVxuLy8gaXMgY2xvc2VkLiBUaGlzIHJlbGVhc2VzIHRoZSBJbmRleGVkREIgbG9jaywgYWxsb3dpbmcgaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKCkgdG8gc3VjY2VlZC5cbmNvbnN0IHJlZ2lzdGVyZWRWZnMgPSBuZXcgTWFwKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZUVuZ2luZSgpIHtcbiAgICBpZiAoc3FsaXRlMykgcmV0dXJuO1xuICAgIGFzeW5jTW9kdWxlID0gYXdhaXQgU1FMaXRlQXN5bmNFU01GYWN0b3J5KCk7XG4gICAgc3FsaXRlMyA9IFNRTGl0ZS5GYWN0b3J5KGFzeW5jTW9kdWxlKTtcbn1cblxuZnVuY3Rpb24gcmVzdWx0VG9Sb3coY29sdW1ucywgcm93RGF0YSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWwgPSByb3dEYXRhW2ldO1xuICAgICAgICAvLyBVaW50OEFycmF5IChCTE9CKSDigJQgY29weSBvdXQgb2Ygdm9sYXRpbGUgV0FTTSBtZW1vcnkgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFdpdGggSlNQSSwgTW9kdWxlLkhFQVBVOCBtYXkgYmUgcmVwbGFjZWQgYmV0d2VlbiBhc3luYyBzdXNwZW5zaW9ucyxcbiAgICAgICAgLy8gbGVhdmluZyBhbnkgc3ViYXJyYXkgdmlldyBzdGFsZS4gU2xpY2UgdG8gYSBzdGFuZGFsb25lIGNvcHkuXG4gICAgICAgIG9ialtjb2x1bW5zW2ldXSA9ICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSA/IHZhbC5zbGljZSgpIDogdmFsO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgICBhc3luYyBvcGVuKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgW2RiTmFtZSwgZmlsZU5hbWVdID0gYXJncztcbiAgICAgICAgYXdhaXQgZW5zdXJlRW5naW5lKCk7XG4gICAgICAgIGlmICghcmVnaXN0ZXJlZFZmcy5oYXMoZmlsZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2ZnMgPSBhd2FpdCBJREJCYXRjaEF0b21pY1ZGUy5jcmVhdGUoZmlsZU5hbWUsIGFzeW5jTW9kdWxlKTtcbiAgICAgICAgICAgIHNxbGl0ZTMudmZzX3JlZ2lzdGVyKHZmcyk7XG4gICAgICAgICAgICByZWdpc3RlcmVkVmZzLnNldChmaWxlTmFtZSwgdmZzKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RGIgPSBhd2FpdCBzcWxpdGUzLm9wZW5fdjIoXG4gICAgICAgICAgICBkYk5hbWUsXG4gICAgICAgICAgICBTUUxpdGUuU1FMSVRFX09QRU5fQ1JFQVRFIHwgU1FMaXRlLlNRTElURV9PUEVOX1JFQURXUklURSB8IFNRTGl0ZS5TUUxJVEVfT1BFTl9VUkksXG4gICAgICAgICAgICBmaWxlTmFtZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY3VycmVudERiO1xuICAgIH0sXG5cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnREYiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBhd2FpdCBzcWxpdGUzLmNsb3NlKGN1cnJlbnREYik7XG4gICAgICAgIGN1cnJlbnREYiA9IG51bGw7XG4gICAgICAgIC8vIENsb3NlIGFsbCBWRlMgSURCIGNvbm5lY3Rpb25zIHNvIHRoZSBJbmRleGVkREIgbG9jayBpcyByZWxlYXNlZC5cbiAgICAgICAgLy8gUmVxdWlyZWQgYmVmb3JlIGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZSgpIGNhbiBzdWNjZWVkLlxuICAgICAgICBmb3IgKGNvbnN0IHZmcyBvZiByZWdpc3RlcmVkVmZzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICB2ZnMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZWdpc3RlcmVkVmZzLmNsZWFyKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGV4ZWN1dGUg4oCUIHJ1biBhIHNpbmdsZSBTUUwgc3RhdGVtZW50IChJTlNFUlQvVVBEQVRFL0RFTEVURS9EREwpLlxuICAgICAqIEBwYXJhbSB7W251bWJlciwgc3RyaW5nLCBPYmplY3R8bnVsbF19IGFyZ3MgLSBbZGJDb25uLCBzcWwsIHBhcmFtZXRlcnNdXG4gICAgICogQHJldHVybnMge3sgY2hhbmdlczogbnVtYmVyLCByZXNwb25zZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcsIGVycm9yOiBzdHJpbmcgfX1cbiAgICAgKi9cbiAgICBhc3luYyBleGVjdXRlKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgW2RiQ29ubiwgc3FsLCBwYXJhbWV0ZXJzXSA9IGFyZ3M7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgY2hhbmdlczogMCwgcmVzcG9uc2U6IG51bGwsIGRhdGE6ICcnLCBlcnJvcjogJycgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kUmVzdWx0ICE9PSBTUUxpdGUuU1FMSVRFX09LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50LiBDaGVjayB5b3VyIHN5bnRheCBvciBwYXJhbWV0ZXJzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10KSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHt9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJlc3BvbnNlID0gJ1NRTElURV9ET05FJztcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hhbmdlcyA9IHNxbGl0ZTMuY2hhbmdlcyhkYkNvbm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBxdWVyeSDigJQgZXhlY3V0ZSBhIFNRTCBTRUxFQ1QgYW5kIHJldHVybiBhbGwgcm93cyBhcyBvYmplY3RzLlxuICAgICAqIEBwYXJhbSB7W251bWJlciwgc3RyaW5nLCBPYmplY3R8bnVsbF19IGFyZ3MgLSBbZGJDb25uLCBzcWwsIHBhcmFtZXRlcnNdXG4gICAgICogQHJldHVybnMge3sgZGF0YTogT2JqZWN0W10sIGVycm9yOiBzdHJpbmcgfX1cbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeShhcmdzKSB7XG4gICAgICAgIGNvbnN0IFtkYkNvbm4sIHNxbCwgcGFyYW1ldGVyc10gPSBhcmdzO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7IGRhdGE6IFtdLCBlcnJvcjogJycgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kUmVzdWx0ICE9PSBTUUxpdGUuU1FMSVRFX09LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkgPT09IFNRTGl0ZS5TUUxJVEVfUk9XKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA/PyBzcWxpdGUzLmNvbHVtbl9uYW1lcyhzdG10KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHNxbGl0ZTMucm93KHN0bXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChyZXN1bHRUb1Jvdyhjb2x1bW5zLCByb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBidWxrSW5zZXJ0UmF3VXBzZXJ0IOKAlCB1cHNlcnQgZnJvbSBcXDAtZGVsaW1pdGVkIHJhdyBwYXlsb2FkLlxuICAgICAqIFVzZXMgSU5TRVJUIElOVE8gLi4uIE9OIENPTkZMSUNUKHBrKSBETyBVUERBVEUgU0VUIOKAlCBwcmVzZXJ2ZXMgZXhpc3Rpbmcgcm93IGRhdGEuXG4gICAgICogVXNlIGZvciBpbmNyZW1lbnRhbCBzeW5jIHdoZXJlIHJvd3MgbWF5IGFscmVhZHkgZXhpc3QgbG9jYWxseS5cbiAgICAgKiBGb3IgaW5pdGlhbCBzZWVkaW5nIGludG8gZW1wdHkgdGFibGVzLCB1c2UgYnVsa0luc2VydFJhdyBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSB7W251bWJlciwgc3RyaW5nXX0gYXJncyAtIFtkYkNvbm4sIHBheWxvYWRdXG4gICAgICogQHJldHVybnMge3sgdG90YWxDaGFuZ2VzOiBudW1iZXIsIGVycm9yczogQXJyYXkgfX1cbiAgICAgKi9cbiAgICBhc3luYyBidWxrSW5zZXJ0UmF3VXBzZXJ0KGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGhhbmRsZXJzLl9idWxrSW5zZXJ0UmF3SW1wbChhcmdzLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogYnVsa0luc2VydFJhdyDigJQgemVyby1kZXNlcmlhbGl6YXRpb24gc2VlZCBwYXRoLlxuICAgICAqIFVzZXMgSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyDigJQgbm8gaW5kZXggbG9va3VwLCBmYXN0ZXN0IHBhdGggZm9yIGVtcHR5IHRhYmxlcy5cbiAgICAgKiBVc2UgZm9yIGluaXRpYWwgc2VlZGluZyBvbmx5LiBGb3IgaW5jcmVtZW50YWwgc3luYywgdXNlIGJ1bGtJbnNlcnRSYXdVcHNlcnQuXG4gICAgICogQHBhcmFtIHtbbnVtYmVyLCBzdHJpbmddfSBhcmdzIC0gW2RiQ29ubiwgcGF5bG9hZF1cbiAgICAgKiBAcmV0dXJucyB7eyB0b3RhbENoYW5nZXM6IG51bWJlciwgZXJyb3JzOiBBcnJheSB9fVxuICAgICAqL1xuICAgIGFzeW5jIGJ1bGtJbnNlcnRSYXcoYXJncykge1xuICAgICAgICByZXR1cm4gYXdhaXQgaGFuZGxlcnMuX2J1bGtJbnNlcnRSYXdJbXBsKGFyZ3MsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgX2J1bGtJbnNlcnRSYXdJbXBsKGFyZ3MsIGlzVXBzZXJ0KSB7XG4gICAgICAgIGNvbnN0IFtkYkNvbm4sIHBheWxvYWRdID0gYXJncztcblxuICAgICAgICAvLyBQYXJzZSBcXDAtZGVsaW1pdGVkIGZvcm1hdCAobm8gb3V0ZXIgSlNPTiDigJQgemVybyBDIyBlbmNvZGluZyBvdmVyaGVhZClcbiAgICAgICAgLy8gSGVhZGVyOiB0YWJsZVxcMHByaW1hcnlLZXlcXDByb3dzUGVyU3RtdFxcMGNvbENvdW50XFwwY29sMVxcMC4uLlxcMGNvbE5cXDBcbiAgICAgICAgLy8gQm9keTogICByYXdMaW5lMVxcMHJhd0xpbmUyXFwwLi4uIChlYWNoIGlzIGEgZnVsbCBOREpTT04gcm93IGxpbmUpXG4gICAgICAgIGNvbnN0IHBhcnRzID0gcGF5bG9hZC5zcGxpdCgnXFwwJyk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgdGFibGUgICAgICA9IHBhcnRzW2krK107XG4gICAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSBwYXJ0c1tpKytdO1xuICAgICAgICBjb25zdCByb3dzUGVyU3RtdCA9IHBhcnNlSW50KHBhcnRzW2krK10pO1xuICAgICAgICBjb25zdCBjb2xDb3VudCAgID0gcGFyc2VJbnQocGFydHNbaSsrXSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgICAgPSBwYXJ0cy5zbGljZShpLCBpICsgY29sQ291bnQpO1xuICAgICAgICBpICs9IGNvbENvdW50O1xuICAgICAgICAvLyBSZW1haW5pbmcgcGFydHMgYXJlIHJhdyBOREpTT04gbGluZXMgKGxhc3QgZWxlbWVudCBpcyBlbXB0eSBzdHJpbmcgYWZ0ZXIgdHJhaWxpbmcgXFwwKVxuICAgICAgICBjb25zdCB0b3RhbExpbmVzID0gcGFydHMubGVuZ3RoIC0gMSAtIGk7XG5cbiAgICAgICAgaWYgKHRvdGFsTGluZXMgPT09IDApIHJldHVybiB7IHRvdGFsQ2hhbmdlczogMCwgZXJyb3JzOiBbXSB9O1xuXG4gICAgICAgIGNvbnN0IGNvbExpc3QgPSBjb2x1bW5zLmpvaW4oJywnKTtcbiAgICAgICAgbGV0IHRvdGFsQ2hhbmdlcyA9IDA7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZVNldCA9IGlzVXBzZXJ0XG4gICAgICAgICAgICA/IGNvbHVtbnMuZmlsdGVyKGMgPT4gYyAhPT0gcHJpbWFyeUtleSkubWFwKGMgPT4gYCR7Y309ZXhjbHVkZWQuJHtjfWApLmpvaW4oJywnKVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNxbENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICBmdW5jdGlvbiBnZXRTcWwocm93Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChzcWxDYWNoZS5oYXMocm93Q291bnQpKSByZXR1cm4gc3FsQ2FjaGUuZ2V0KHJvd0NvdW50KTtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVycyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dDb3VudDsgcisrKSB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJzLnB1c2goJygnICsgbmV3IEFycmF5KGNvbENvdW50KS5maWxsKCc/Jykuam9pbignLCcpICsgJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGlzVXBzZXJ0XG4gICAgICAgICAgICAgICAgPyBgSU5TRVJUIElOVE8gJHt0YWJsZX0gKCR7Y29sTGlzdH0pIFZBTFVFUyAke3BsYWNlaG9sZGVycy5qb2luKCcsJyl9IE9OIENPTkZMSUNUKCR7cHJpbWFyeUtleX0pIERPIFVQREFURSBTRVQgJHt1cGRhdGVTZXR9YFxuICAgICAgICAgICAgICAgIDogYElOU0VSVCBPUiBSRVBMQUNFIElOVE8gJHt0YWJsZX0gKCR7Y29sTGlzdH0pIFZBTFVFUyAke3BsYWNlaG9sZGVycy5qb2luKCcsJyl9YDtcbiAgICAgICAgICAgIHNxbENhY2hlLnNldChyb3dDb3VudCwgc3FsKTtcbiAgICAgICAgICAgIHJldHVybiBzcWw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFYWNoIHBhcnQgaXMgYSByYXcgTkRKU09OIGxpbmUg4oCUIG1heSBiZSBcInJvd1wiIChzaW5nbGUpIG9yIFwicm93c1wiIChidW5kbGUpLlxuICAgICAgICAvLyBFeHBhbmQgYWxsIGxpbmVzIGludG8gYSBmbGF0IHBhcmFtcyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgc3RhdGVtZW50IGJhdGNoLlxuICAgICAgICAvLyBKUyBoYW5kbGVzIGV4cGFuc2lvbiBuYXRpdmVseSBhdCBWOCBzcGVlZCDigJQgemVybyBDIyBwZXItbGluZSBjb3N0LlxuICAgICAgICBjb25zdCBhbGxQYXJhbXMgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsUm93cyA9IDA7XG4gICAgICAgIGZvciAobGV0IGxpID0gMDsgbGkgPCB0b3RhbExpbmVzOyBsaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lT2JqID0gSlNPTi5wYXJzZShwYXJ0c1tpICsgbGldKTtcbiAgICAgICAgICAgIGlmIChsaW5lT2JqLnJvd3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFPYmogb2YgbGluZU9iai5yb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sQ291bnQ7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YU9ialtjb2x1bW5zW2NdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBhcmFtcy5wdXNoKHZhbCA9PT0gdHJ1ZSA/IDEgOiB2YWwgPT09IGZhbHNlID8gMCA6ICh2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJvd3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFPYmogPSBsaW5lT2JqLmRhdGEgPz8gbGluZU9iajtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbENvdW50OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YU9ialtjb2x1bW5zW2NdXTtcbiAgICAgICAgICAgICAgICAgICAgYWxsUGFyYW1zLnB1c2godmFsID09PSB0cnVlID8gMSA6IHZhbCA9PT0gZmFsc2UgPyAwIDogKHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDogbnVsbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3RhbFJvd3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgaW4gcm93c1BlclN0bXQtc2l6ZWQgc3RhdGVtZW50IGJhdGNoZXNcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKHJvd0luZGV4IDwgdG90YWxSb3dzKSB7XG4gICAgICAgICAgICBjb25zdCBzdG10Um93Q291bnQgPSBNYXRoLm1pbihyb3dzUGVyU3RtdCwgdG90YWxSb3dzIC0gcm93SW5kZXgpO1xuICAgICAgICAgICAgY29uc3Qgc3FsID0gZ2V0U3FsKHN0bXRSb3dDb3VudCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhbGxQYXJhbXMuc2xpY2Uocm93SW5kZXggKiBjb2xDb3VudCwgKHJvd0luZGV4ICsgc3RtdFJvd0NvdW50KSAqIGNvbENvdW50KTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiQ29ubiwgc3FsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kUmVzdWx0ID0gYXdhaXQgc3FsaXRlMy5iaW5kX2NvbGxlY3Rpb24oc3RtdCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRSZXN1bHQgIT09IFNRTGl0ZS5TUUxJVEVfT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHsgaW5kZXg6IHJvd0luZGV4LCBlcnJvcjogJ2JpbmRfY29sbGVjdGlvbiBmYWlsZWQnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGF3YWl0IHNxbGl0ZTMuc3RlcChzdG10KSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHt9XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2hhbmdlcyArPSBzcWxpdGUzLmNoYW5nZXMoZGJDb25uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHsgaW5kZXg6IHJvd0luZGV4LCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93SW5kZXggKz0gc3RtdFJvd0NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdG90YWxDaGFuZ2VzLCBlcnJvcnMsIGZpcnN0RXJyb3I6IGVycm9ycy5sZW5ndGggPiAwID8gZXJyb3JzWzBdLmVycm9yIDogbnVsbCB9O1xuICAgIH0sXG59O1xuXG5zZWxmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tzcWxpdGUtd29ya2VyXSB1bmNhdWdodCBlcnJvcjonLCBlLm1lc3NhZ2UgfHwgZSk7XG59O1xuXG5zZWxmLm9udW5oYW5kbGVkcmVqZWN0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbc3FsaXRlLXdvcmtlcl0gdW5oYW5kbGVkIHJlamVjdGlvbjonLCBlLnJlYXNvbik7XG59O1xuXG5zZWxmLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgeyBpZCwgbWV0aG9kLCBhcmdzIH0gPSBlLmRhdGE7XG4gICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW21ldGhvZF07XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBpZCwgZXJyb3I6IGBVbmtub3duIG1ldGhvZDogJHttZXRob2R9YCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBoYW5kbGVyKGFyZ3MpO1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQsIHJlc3VsdCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkLCBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgU3RyaW5nKGVycikgfSk7XG4gICAgfVxufTtcblxuc2VsZi5wb3N0TWVzc2FnZSh7IHR5cGU6ICdyZWFkeScgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=