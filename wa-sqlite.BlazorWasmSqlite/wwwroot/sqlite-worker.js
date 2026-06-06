/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"wa-sqlite-jspi":"6f0d0f56566b2c1a205e","wa-sqlite-async":"3fb228152bed5a1abf45"}[chunkId] + ".js";
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
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwa_sqlite_blazorwasmsqlite"] = self["webpackChunkwa_sqlite_blazorwasmsqlite"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
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
/* harmony import */ var _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @journeyapps/wa-sqlite */ "./node_modules/@journeyapps/wa-sqlite/src/sqlite-api.js");
/* harmony import */ var _journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS */ "./node_modules/@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS.js");
// @journeyapps/wa-sqlite is the actively-maintained PowerSync fork of rhashimoto/wa-sqlite.
// The original npm package (wa-sqlite@1.0.0) is 2 years stale and contains a WASM memory
// OOB bug that causes "disk image is malformed" corruption on large seeds.
//
// Build selection (detected at runtime in ensureEngine):
//   JSPI build (wa-sqlite-jspi.mjs)   — Chrome 137+, Edge 137+. No stack-rewriting overhead.
//   Asyncify build (wa-sqlite-async.mjs) — fallback for Safari and older browsers.
//   Safari does not yet support JSPI (tracked in Interop 2026).
//
// No static import here — factory is loaded dynamically based on WebAssembly.Suspending support.



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
    const supportsJspi = typeof WebAssembly.Suspending !== 'undefined';
    if (!supportsJspi) {
        console.warn('[wa-sqlite] JSPI not supported in this browser — falling back to Asyncify build. Safari and older browsers only.');
    }
    const { default: SQLiteAsyncESMFactory } = supportsJspi
        ? await __webpack_require__.e(/*! import() | wa-sqlite-jspi */ "wa-sqlite-jspi").then(__webpack_require__.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs */ "./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs"))
        : await __webpack_require__.e(/*! import() | wa-sqlite-async */ "wa-sqlite-async").then(__webpack_require__.bind(__webpack_require__, /*! @journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs */ "./node_modules/@journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs"));
    asyncModule = await SQLiteAsyncESMFactory();
    sqlite3 = _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.Factory(asyncModule);
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
            const vfs = await _journeyapps_wa_sqlite_src_examples_IDBBatchAtomicVFS__WEBPACK_IMPORTED_MODULE_1__.IDBBatchAtomicVFS.create(fileName, asyncModule);
            sqlite3.vfs_register(vfs);
            registeredVfs.set(fileName, vfs);
        }
        currentDb = await sqlite3.open_v2(
            dbName,
            _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_CREATE | _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_READWRITE | _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OPEN_URI,
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
                    if (bindResult !== _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK) {
                        result.error = 'Unable to prepare statement. Check your syntax or parameters';
                        return result;
                    }
                }
                while (await sqlite3.step(stmt) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {}
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
                    if (bindResult !== _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK) {
                        result.error = 'Unable to prepare statement';
                        return result;
                    }
                }
                try {
                    let columns;
                    while (await sqlite3.step(stmt) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {
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
                    if (bindResult !== _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_OK) {
                        errors.push({ index: rowIndex, error: 'bind_collection failed' });
                        break;
                    }
                    while (await sqlite3.step(stmt) === _journeyapps_wa_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLITE_ROW) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0RBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEdBQUc7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLFFBQVE7QUFDckIsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL3NCQTtBQUM2QztBQUNQOztBQUV0Qzs7QUFFQTtBQUNPO0FBQ1A7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbDdCQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ087QUFDQTs7QUFFUDtBQUNBO0FBQ08sMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkJBQTJCOztBQUVsQztBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFckQ7QUFDTztBQUNBO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTs7QUFFUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ087QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCLE9BQU8sR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLE1BQU07QUFDTiwyQkFBMkIsdUNBQXVDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZS9zcmMvRmFjYWRlVkZTLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvc3JjL1ZGUy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL25vZGVfbW9kdWxlcy9Aam91cm5leWFwcHMvd2Etc3FsaXRlL3NyYy9XZWJMb2Nrc01peGluLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvc3JjL2V4YW1wbGVzL0lEQkJhdGNoQXRvbWljVkZTLmpzIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlLy4vbm9kZV9tb2R1bGVzL0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvc3JjL3NxbGl0ZS1hcGkuanMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvLi9ub2RlX21vZHVsZXMvQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZS9zcmMvc3FsaXRlLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhLXNxbGl0ZS5ibGF6b3J3YXNtc3FsaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2Etc3FsaXRlLmJsYXpvcndhc21zcWxpdGUvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93YS1zcWxpdGUuYmxhem9yd2FzbXNxbGl0ZS8uL3NyYy9zcWxpdGUtd29ya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDI0IFJveSBULiBIYXNoaW1vdG8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5pbXBvcnQgKiBhcyBWRlMgZnJvbSAnLi9WRlMuanMnO1xuXG5jb25zdCBBc3luY0Z1bmN0aW9uID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCl7fSkuY29uc3RydWN0b3I7XG5cbi8vIE1pbGxpc2Vjb25kcyBzaW5jZSBKdWxpYW4gZXBvY2ggYXMgYSBCaWdJbnQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3FsaXRlL3NxbGl0ZS9ibG9iL2U1NzUyN2MxNGY3YjdjZmE2ZTMyZWVhYjVjNTQ5ZDUwYzRmYTM2NzQvc3JjL29zX3VuaXguYyNMNjg3Mi1MNjg4MlxuY29uc3QgVU5JWF9FUE9DSCA9IDI0NDA1ODc1biAqIDg2NDAwMDBuO1xuXG4vLyBDb252ZW5pZW5jZSBiYXNlIGNsYXNzIGZvciBhIEphdmFTY3JpcHQgVkZTLlxuLy8gVGhlIHJhdyB4T3BlbiwgeFJlYWQsIGV0Yy4gZnVuY3Rpb24gc2lnbmF0dXJlcyByZWNlaXZlIG9ubHkgQyBwcmltaXRpdmVzXG4vLyB3aGljaCBhcmVuJ3QgZWFzeSB0byB3b3JrIHdpdGguIFRoaXMgY2xhc3MgcHJvdmlkZXMgY29ycmVzcG9uZGluZyBjYWxsc1xuLy8gbGlrZSBqT3BlbiwgalJlYWQsIGV0Yy4sIHdoaWNoIHJlY2VpdmUgSmF2YVNjcmlwdC1mcmllbmRsaWVyIGFyZ3VtZW50c1xuLy8gc3VjaCBhcyBzdHJpbmcsIFVpbnQ4QXJyYXksIGFuZCBEYXRhVmlldy5cbmV4cG9ydCBjbGFzcyBGYWNhZGVWRlMgZXh0ZW5kcyBWRlMuQmFzZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1vZHVsZSkge1xuICAgIHN1cGVyKG5hbWUsIG1vZHVsZSk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdG8gaW5kaWNhdGUgd2hpY2ggbWV0aG9kcyBhcmUgYXN5bmNocm9ub3VzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBoYXNBc3luY01ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgLy8gVGhlIGlucHV0IGFyZ3VtZW50IGlzIGEgc3RyaW5nIGxpa2UgXCJ4T3BlblwiLCBzbyBjb252ZXJ0IHRvIFwiak9wZW5cIi5cbiAgICAvLyBUaGVuIGNoZWNrIGlmIHRoZSBtZXRob2QgZXhpc3RzIGFuZCBpcyBhc3luYy5cbiAgICBjb25zdCBqTWV0aG9kTmFtZSA9IGBqJHttZXRob2ROYW1lLnNsaWNlKDEpfWA7XG4gICAgcmV0dXJuIHRoaXNbak1ldGhvZE5hbWVdIGluc3RhbmNlb2YgQXN5bmNGdW5jdGlvbjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZmlsZW5hbWUgZm9yIGEgZmlsZSBpZCBmb3IgdXNlIGJ5IG1peGlucy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RmlsZW5hbWUocEZpbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz99IGZpbGVuYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcE91dEZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpPcGVuKGZpbGVuYW1lLCBwRmlsZSwgZmxhZ3MsIHBPdXRGbGFncykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0NBTlRPUEVOO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN5bmNEaXIgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakRlbGV0ZShmaWxlbmFtZSwgc3luY0Rpcikge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpBY2Nlc3MoZmlsZW5hbWUsIGZsYWdzLCBwUmVzT3V0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHpPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakZ1bGxQYXRobmFtZShmaWxlbmFtZSwgek91dCkge1xuICAgIC8vIENvcHkgdGhlIGZpbGVuYW1lIHRvIHRoZSBvdXRwdXQgYnVmZmVyLlxuICAgIGNvbnN0IHsgcmVhZCwgd3JpdHRlbiB9ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlSW50byhmaWxlbmFtZSwgek91dCk7XG4gICAgaWYgKHJlYWQgPCBmaWxlbmFtZS5sZW5ndGgpIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgIGlmICh3cml0dGVuID49IHpPdXQubGVuZ3RoKSByZXR1cm4gVkZTLlNRTElURV9JT0VSUjtcbiAgICB6T3V0W3dyaXR0ZW5dID0gMDtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHpCdWYgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakdldExhc3RFcnJvcih6QnVmKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpDbG9zZShwRmlsZSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgalJlYWQocEZpbGUsIHBEYXRhLCBpT2Zmc2V0KSB7XG4gICAgcERhdGEuZmlsbCgwKTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9TSE9SVF9SRUFEO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgaldyaXRlKHBGaWxlLCBwRGF0YSwgaU9mZnNldCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1dSSVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgalRydW5jYXRlKHBGaWxlLCBzaXplKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gZmxhZ3MgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgalN5bmMocEZpbGUsIGZsYWdzKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwU2l6ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpGaWxlU2l6ZShwRmlsZSwgcFNpemUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqTG9jayhwRmlsZSwgbG9ja1R5cGUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqVW5sb2NrKHBGaWxlLCBsb2NrVHlwZSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqQ2hlY2tSZXNlcnZlZExvY2socEZpbGUsIHBSZXNPdXQpIHtcbiAgICBwUmVzT3V0LnNldEludDMyKDAsIDAsIHRydWUpO1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gb3BcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcEFyZ1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpGaWxlQ29udHJvbChwRmlsZSwgb3AsIHBBcmcpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9OT1RGT1VORDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGVcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBqU2VjdG9yU2l6ZShwRmlsZSkge1xuICAgIHJldHVybiBzdXBlci54U2VjdG9yU2l6ZShwRmlsZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakRldmljZUNoYXJhY3RlcmlzdGljcyhwRmlsZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcE91dEZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhPcGVuKHBWZnMsIHpOYW1lLCBwRmlsZSwgZmxhZ3MsIHBPdXRGbGFncykge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGhpcy4jZGVjb2RlRmlsZW5hbWUoek5hbWUsIGZsYWdzKTtcbiAgICBjb25zdCBwT3V0RmxhZ3NWaWV3ID0gdGhpcy4jbWFrZVR5cGVkRGF0YVZpZXcoJ0ludDMyJywgcE91dEZsYWdzKTtcbiAgICB0aGlzWydsb2cnXT8uKCdqT3BlbicsIGZpbGVuYW1lLCBwRmlsZSwgJzB4JyArIGZsYWdzLnRvU3RyaW5nKDE2KSk7XG4gICAgcmV0dXJuIHRoaXMuak9wZW4oZmlsZW5hbWUsIHBGaWxlLCBmbGFncywgcE91dEZsYWdzVmlldyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBDaGFyT3V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFJhbmRvbW5lc3MocFZmcywgbkJ5dGUsIHBDaGFyT3V0KSB7XG4gICAgY29uc3QgcmFuZG9tQXJyYXkgPSBuZXcgVWludDhBcnJheShuQnl0ZSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb21BcnJheSk7XG4gICAgLy8gQ29weSByYW5kb21BcnJheSB0byB0aGUgV2ViQXNzZW1ibHkgbWVtb3J5XG4gICAgY29uc3QgYnVmZmVyID0gcENoYXJPdXQ7IC8vIFBvaW50ZXIgdG8gbWVtb3J5IGluIFdlYkFzc2VtYmx5XG4gICAgdGhpcy5fbW9kdWxlLkhFQVBVOC5zZXQocmFuZG9tQXJyYXksIGJ1ZmZlcik7IC8vIENvcHkgcmFuZG9tQXJyYXkgaW50byBtZW1vcnkgc3RhcnRpbmcgYXQgYnVmZmVyXG4gICAgcmV0dXJuIG5CeXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgdGltZSBhcyBtaWxsaXNlY29uZHMgc2luY2UgVW5peCBlcG9jaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBwb2ludGVyIHRvIHRoZSBWRlNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBUaW1lIHBvaW50ZXIgdG8gd3JpdGUgdGhlIHRpbWUgdmFsdWVcbiAgICogQHJldHVybnMge251bWJlcn0gU1FMaXRlIGVycm9yIGNvZGVcbiAgICovXG4gIHhDdXJyZW50VGltZUludDY0KHBWZnMsIHBUaW1lKSB7XG4gICAgLy8gQ3JlYXRlIGEgRGF0YVZpZXcgdG8gd3JpdGUgdGhlIGN1cnJlbnQgdGltZVxuICAgIGNvbnN0IHRpbWVWaWV3ID0gdGhpcy4jbWFrZVR5cGVkRGF0YVZpZXcoJ0JpZ0ludDY0JywgcFRpbWUpO1xuICBcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IEJpZ0ludChEYXRlLm5vdygpKTtcbiAgICAvLyBDb252ZXJ0IHRoZSBjdXJyZW50IHRpbWUgdG8gbWlsbGlzZWNvbmRzIHNpbmNlIFVuaXggZXBvY2hcbiAgICBjb25zdCB2YWx1ZSA9IFVOSVhfRVBPQ0ggKyBjdXJyZW50VGltZTtcbiAgICBcbiAgICAvLyBXcml0ZSB0aGUgdGltZSB2YWx1ZSB0byB0aGUgcG9pbnRlciBsb2NhdGlvblxuICAgIHRpbWVWaWV3LnNldEJpZ0ludDY0KDAsIHZhbHVlLCB0cnVlKTtcbiAgICBcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpOYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3luY0RpciBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RGVsZXRlKHBWZnMsIHpOYW1lLCBzeW5jRGlyKSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSB0aGlzLl9tb2R1bGUuVVRGOFRvU3RyaW5nKHpOYW1lKTtcbiAgICB0aGlzWydsb2cnXT8uKCdqRGVsZXRlJywgZmlsZW5hbWUsIHN5bmNEaXIpO1xuICAgIHJldHVybiB0aGlzLmpEZWxldGUoZmlsZW5hbWUsIHN5bmNEaXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeEFjY2VzcyhwVmZzLCB6TmFtZSwgZmxhZ3MsIHBSZXNPdXQpIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRoaXMuX21vZHVsZS5VVEY4VG9TdHJpbmcoek5hbWUpO1xuICAgIGNvbnN0IHBSZXNPdXRWaWV3ID0gdGhpcy4jbWFrZVR5cGVkRGF0YVZpZXcoJ0ludDMyJywgcFJlc091dCk7XG4gICAgdGhpc1snbG9nJ10/LignakFjY2VzcycsIGZpbGVuYW1lLCBmbGFncyk7XG4gICAgcmV0dXJuIHRoaXMuakFjY2VzcyhmaWxlbmFtZSwgZmxhZ3MsIHBSZXNPdXRWaWV3KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpOYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbk91dCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeEZ1bGxQYXRobmFtZShwVmZzLCB6TmFtZSwgbk91dCwgek91dCkge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGhpcy5fbW9kdWxlLlVURjhUb1N0cmluZyh6TmFtZSk7XG4gICAgY29uc3Qgek91dEFycmF5ID0gdGhpcy5fbW9kdWxlLkhFQVBVOC5zdWJhcnJheSh6T3V0LCB6T3V0ICsgbk91dCk7XG4gICAgdGhpc1snbG9nJ10/LignakZ1bGxQYXRobmFtZScsIGZpbGVuYW1lLCBuT3V0KTtcbiAgICByZXR1cm4gdGhpcy5qRnVsbFBhdGhuYW1lKGZpbGVuYW1lLCB6T3V0QXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbkJ1ZiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpCdWYgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeEdldExhc3RFcnJvcihwVmZzLCBuQnVmLCB6QnVmKSB7XG4gICAgY29uc3QgekJ1ZkFycmF5ID0gdGhpcy5fbW9kdWxlLkhFQVBVOC5zdWJhcnJheSh6QnVmLCB6QnVmICsgbkJ1Zik7XG4gICAgdGhpc1snbG9nJ10/LignakdldExhc3RFcnJvcicsIG5CdWYpO1xuICAgIHJldHVybiB0aGlzLmpHZXRMYXN0RXJyb3IoekJ1ZkFycmF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeENsb3NlKHBGaWxlKSB7XG4gICAgdGhpc1snbG9nJ10/LignakNsb3NlJywgcEZpbGUpO1xuICAgIHJldHVybiB0aGlzLmpDbG9zZShwRmlsZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpQW10IFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldExvIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldEhpIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhSZWFkKHBGaWxlLCBwRGF0YSwgaUFtdCwgaU9mZnNldExvLCBpT2Zmc2V0SGkpIHtcbiAgICBjb25zdCBwRGF0YUFycmF5ID0gdGhpcy4jbWFrZURhdGFBcnJheShwRGF0YSwgaUFtdCk7XG4gICAgY29uc3QgaU9mZnNldCA9IGRlbGVnYWxpemUoaU9mZnNldExvLCBpT2Zmc2V0SGkpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pSZWFkJywgcEZpbGUsIGlBbXQsIGlPZmZzZXQpO1xuICAgIHJldHVybiB0aGlzLmpSZWFkKHBGaWxlLCBwRGF0YUFycmF5LCBpT2Zmc2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlBbXQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0TG8gXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0SGkgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFdyaXRlKHBGaWxlLCBwRGF0YSwgaUFtdCwgaU9mZnNldExvLCBpT2Zmc2V0SGkpIHtcbiAgICBjb25zdCBwRGF0YUFycmF5ID0gdGhpcy4jbWFrZURhdGFBcnJheShwRGF0YSwgaUFtdCk7XG4gICAgY29uc3QgaU9mZnNldCA9IGRlbGVnYWxpemUoaU9mZnNldExvLCBpT2Zmc2V0SGkpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pXcml0ZScsIHBGaWxlLCBwRGF0YUFycmF5LCBpT2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcy5qV3JpdGUocEZpbGUsIHBEYXRhQXJyYXksIGlPZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVMbyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVIaSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4VHJ1bmNhdGUocEZpbGUsIHNpemVMbywgc2l6ZUhpKSB7XG4gICAgY29uc3Qgc2l6ZSA9IGRlbGVnYWxpemUoc2l6ZUxvLCBzaXplSGkpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pUcnVuY2F0ZScsIHBGaWxlLCBzaXplKTtcbiAgICByZXR1cm4gdGhpcy5qVHJ1bmNhdGUocEZpbGUsIHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhTeW5jKHBGaWxlLCBmbGFncykge1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pTeW5jJywgcEZpbGUsIGZsYWdzKTtcbiAgICByZXR1cm4gdGhpcy5qU3luYyhwRmlsZSwgZmxhZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwU2l6ZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RmlsZVNpemUocEZpbGUsIHBTaXplKSB7XG4gICAgY29uc3QgcFNpemVWaWV3ID0gdGhpcy4jbWFrZVR5cGVkRGF0YVZpZXcoJ0JpZ0ludDY0JywgcFNpemUpO1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pGaWxlU2l6ZScsIHBGaWxlKTtcbiAgICByZXR1cm4gdGhpcy5qRmlsZVNpemUocEZpbGUsIHBTaXplVmlldyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeExvY2socEZpbGUsIGxvY2tUeXBlKSB7XG4gICAgdGhpc1snbG9nJ10/LignakxvY2snLCBwRmlsZSwgbG9ja1R5cGUpO1xuICAgIHJldHVybiB0aGlzLmpMb2NrKHBGaWxlLCBsb2NrVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFVubG9jayhwRmlsZSwgbG9ja1R5cGUpIHtcbiAgICB0aGlzWydsb2cnXT8uKCdqVW5sb2NrJywgcEZpbGUsIGxvY2tUeXBlKTtcbiAgICByZXR1cm4gdGhpcy5qVW5sb2NrKHBGaWxlLCBsb2NrVHlwZSk7XG4gIH0gXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeENoZWNrUmVzZXJ2ZWRMb2NrKHBGaWxlLCBwUmVzT3V0KSB7XG4gICAgY29uc3QgcFJlc091dFZpZXcgPSB0aGlzLiNtYWtlVHlwZWREYXRhVmlldygnSW50MzInLCBwUmVzT3V0KTtcbiAgICB0aGlzWydsb2cnXT8uKCdqQ2hlY2tSZXNlcnZlZExvY2snLCBwRmlsZSk7XG4gICAgcmV0dXJuIHRoaXMuakNoZWNrUmVzZXJ2ZWRMb2NrKHBGaWxlLCBwUmVzT3V0Vmlldyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3AgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwQXJnIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhGaWxlQ29udHJvbChwRmlsZSwgb3AsIHBBcmcpIHtcbiAgICBjb25zdCBwQXJnVmlldyA9IG5ldyBEYXRhVmlldyhcbiAgICAgIHRoaXMuX21vZHVsZS5IRUFQVTguYnVmZmVyLFxuICAgICAgdGhpcy5fbW9kdWxlLkhFQVBVOC5ieXRlT2Zmc2V0ICsgcEFyZyk7XG4gICAgdGhpc1snbG9nJ10/LignakZpbGVDb250cm9sJywgcEZpbGUsIG9wLCBwQXJnVmlldyk7XG4gICAgcmV0dXJuIHRoaXMuakZpbGVDb250cm9sKHBGaWxlLCBvcCwgcEFyZ1ZpZXcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4U2VjdG9yU2l6ZShwRmlsZSkge1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pTZWN0b3JTaXplJywgcEZpbGUpO1xuICAgIHJldHVybiB0aGlzLmpTZWN0b3JTaXplKHBGaWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeERldmljZUNoYXJhY3RlcmlzdGljcyhwRmlsZSkge1xuICAgIHRoaXNbJ2xvZyddPy4oJ2pEZXZpY2VDaGFyYWN0ZXJpc3RpY3MnLCBwRmlsZSk7XG4gICAgcmV0dXJuIHRoaXMuakRldmljZUNoYXJhY3RlcmlzdGljcyhwRmlsZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlZCBEYXRhVmlldyBmb3IgcG9pbnRlciBhcmd1bWVudHMuXG4gICAqIFBvaW50ZXJzIHRvIGEgc2luZ2xlIHZhbHVlIGFyZSBwYXNzZWQgdXNpbmcgYSBEYXRhVmlldy1saWtlIGNsYXNzLlxuICAgKiBUaGlzIHdyYXBwZXIgY2xhc3MgcHJldmVudHMgdXNlIG9mIGluY29ycmVjdCB0eXBlIG9yIGVuZGlhbm5lc3MsIGFuZFxuICAgKiByZWFjcXVpcmVzIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlciB3aGVuIHRoZSBXZWJBc3NlbWJseSBtZW1vcnkgaXMgcmVzaXplZC5cbiAgICogQHBhcmFtIHsnSW50MzInfCdCaWdJbnQ2NCd9IHR5cGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlT2Zmc2V0IFxuICAgKiBAcmV0dXJucyB7RGF0YVZpZXd9XG4gICAqL1xuICAjbWFrZVR5cGVkRGF0YVZpZXcodHlwZSwgYnl0ZU9mZnNldCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3UHJveHkodGhpcy5fbW9kdWxlLCBieXRlT2Zmc2V0LCB0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVkIFVpbnQ4QXJyYXkgZm9yIGJ1ZmZlciBhcmd1bWVudHMuXG4gICAqIE1lbW9yeSBibG9ja3MgYXJlIHBhc3NlZCBhcyBhIFVpbnQ4QXJyYXktbGlrZSBjbGFzcy4gVGhpcyB3cmFwcGVyXG4gICAqIGNsYXNzIHJlYWNxdWlyZXMgdGhlIHVuZGVybHlpbmcgYnVmZmVyIHdoZW4gdGhlIFdlYkFzc2VtYmx5IG1lbW9yeVxuICAgKiBpcyByZXNpemVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZU9mZnNldCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVMZW5ndGggXG4gICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxuICAgKi9cbiAgI21ha2VEYXRhQXJyYXkoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXlQcm94eSh0aGlzLl9tb2R1bGUsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICB9XG5cbiAgI2RlY29kZUZpbGVuYW1lKHpOYW1lLCBmbGFncykge1xuICAgIGlmIChmbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9VUkkpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBudWxsLXRlcm1pbmF0ZWQgc3RyaW5nIGlzIHRoZSBVUkkgcGF0aC4gU3Vic2VxdWVudFxuICAgICAgLy8gc3RyaW5ncyBhcmUgcXVlcnkgcGFyYW1ldGVyIGtleXMgYW5kIHZhbHVlcy5cbiAgICAgIC8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvb3Blbi5odG1sI3VyaWZpbGVuYW1lc2luc3FsaXRlM29wZW5cbiAgICAgIGxldCBwTmFtZSA9IHpOYW1lO1xuICAgICAgbGV0IHN0YXRlID0gMTtcbiAgICAgIGNvbnN0IGNoYXJDb2RlcyA9IFtdO1xuICAgICAgd2hpbGUgKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gdGhpcy5fbW9kdWxlLkhFQVBVOFtwTmFtZSsrXTtcbiAgICAgICAgaWYgKGNoYXJDb2RlKSB7XG4gICAgICAgICAgY2hhckNvZGVzLnB1c2goY2hhckNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghdGhpcy5fbW9kdWxlLkhFQVBVOFtwTmFtZV0pIHN0YXRlID0gbnVsbDtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIHBhdGhcbiAgICAgICAgICAgICAgY2hhckNvZGVzLnB1c2goJz8nLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgICAgICAgICBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvLyBrZXlcbiAgICAgICAgICAgICAgY2hhckNvZGVzLnB1c2goJz0nLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgICAgICAgICBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiAvLyB2YWx1ZVxuICAgICAgICAgICAgICBjaGFyQ29kZXMucHVzaCgnJicuY2hhckNvZGVBdCgwKSk7XG4gICAgICAgICAgICAgIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheShjaGFyQ29kZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHpOYW1lID8gdGhpcy5fbW9kdWxlLlVURjhUb1N0cmluZyh6TmFtZSkgOiBudWxsO1xuICB9XG59XG5cbi8vIEVtc2NyaXB0ZW4gXCJsZWdhbGl6ZXNcIiA2NC1iaXQgaW50ZWdlciBhcmd1bWVudHMgYnkgcGFzc2luZyB0aGVtIGFzXG4vLyB0d28gMzItYml0IHNpZ25lZCBpbnRlZ2Vycy5cbmZ1bmN0aW9uIGRlbGVnYWxpemUobG8zMiwgaGkzMikge1xuICByZXR1cm4gKGhpMzIgKiAweDEwMDAwMDAwMCkgKyBsbzMyICsgKGxvMzIgPCAwID8gMioqMzIgOiAwKTtcbn1cblxuLy8gVGhpcyBjbGFzcyBwcm92aWRlcyBhIFVpbnQ4QXJyYXktbGlrZSBpbnRlcmZhY2UgZm9yIGEgV2ViQXNzZW1ibHkgbWVtb3J5XG4vLyBidWZmZXIuIEl0IGlzIHVzZWQgdG8gYWNjZXNzIG1lbW9yeSBibG9ja3MgcGFzc2VkIGFzIGFyZ3VtZW50cyB0b1xuLy8geFJlYWQsIHhXcml0ZSwgZXRjLiBUaGUgY2xhc3MgcmVhY3F1aXJlcyB0aGUgdW5kZXJseWluZyBidWZmZXIgd2hlbiB0aGVcbi8vIFdlYkFzc2VtYmx5IG1lbW9yeSBpcyByZXNpemVkLCB3aGljaCBjYW4gaGFwcGVuIHdoZW4gdGhlIG1lbW9yeSBpc1xuLy8gZGV0YWNoZWQgYW5kIHJlc2l6ZWQgYnkgdGhlIFdlYkFzc2VtYmx5IG1vZHVsZS5cbi8vXG4vLyBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBjbGFzcyBpbXBsZW1lbnRzIHRoZSBzYW1lIG1ldGhvZHMgYXMgVWludDhBcnJheSxcbi8vIGl0IGlzIG5vdCBhIHJlYWwgVWludDhBcnJheSBhbmQgcGFzc2luZyBpdCB0byBmdW5jdGlvbnMgdGhhdCBleHBlY3Rcbi8vIGEgVWludDhBcnJheSBtYXkgbm90IHdvcmsuIFVzZSBzdWJhcnJheSgpIHRvIGdldCBhIHJlYWwgVWludDhBcnJheVxuLy8gaWYgbmVlZGVkLlxuY2xhc3MgVWludDhBcnJheVByb3h5IHtcbiAgI21vZHVsZTtcblxuICAjX2FycmF5ID0gbmV3IFVpbnQ4QXJyYXkoKVxuICBnZXQgI2FycmF5KCkge1xuICAgIGlmICh0aGlzLiNfYXJyYXkuYnVmZmVyLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFdlYkFzc2VtYmx5IG1lbW9yeSByZXNpemUgZGV0YWNoZWQgdGhlIGJ1ZmZlciBzbyByZS1jcmVhdGUgdGhlXG4gICAgICAvLyBhcnJheSB3aXRoIHRoZSBuZXcgYnVmZmVyLlxuICAgICAgdGhpcy4jX2FycmF5ID0gdGhpcy4jbW9kdWxlLkhFQVBVOC5zdWJhcnJheShcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0LFxuICAgICAgICB0aGlzLmJ5dGVPZmZzZXQgKyB0aGlzLmJ5dGVMZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jX2FycmF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gbW9kdWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlT2Zmc2V0IFxuICAgKiBAcGFyYW0ge251bWJlcn0gYnl0ZUxlbmd0aCBcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1vZHVsZSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICAgIHRoaXMuI21vZHVsZSA9IG1vZHVsZTtcbiAgICB0aGlzLmJ5dGVPZmZzZXQgPSBieXRlT2Zmc2V0O1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aDtcbiAgfVxuXG4gIGdldCBidWZmZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmJ1ZmZlcjtcbiAgfVxuXG4gIGF0KGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmF0KGluZGV4KTtcbiAgfVxuICBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCkge1xuICAgIHRoaXMuI2FycmF5LmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kKTtcbiAgfVxuICBlbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5lbnRyaWVzKCk7XG4gIH1cbiAgZXZlcnkocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmV2ZXJ5KHByZWRpY2F0ZSk7XG4gIH1cbiAgZmlsbCh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICAgIHRoaXMuI2FycmF5LmZpbGwodmFsdWUsIHN0YXJ0LCBlbmQpO1xuICB9XG4gIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuZmlsdGVyKHByZWRpY2F0ZSk7XG4gIH1cbiAgZmluZChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuZmluZChwcmVkaWNhdGUpO1xuICB9XG4gIGZpbmRJbmRleChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuZmluZEluZGV4KHByZWRpY2F0ZSk7XG4gIH1cbiAgZmluZExhc3QocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmZpbmRMYXN0KHByZWRpY2F0ZSk7XG4gIH1cbiAgZmluZExhc3RJbmRleChwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuZmluZExhc3RJbmRleChwcmVkaWNhdGUpO1xuICB9XG4gIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICB0aGlzLiNhcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuICBpbmNsdWRlcyh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuaW5jbHVkZXModmFsdWUsIHN0YXJ0KTtcbiAgfVxuICBpbmRleE9mKHZhbHVlLCBzdGFydCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5pbmRleE9mKHZhbHVlLCBzdGFydCk7XG4gIH1cbiAgam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkuam9pbihzZXBhcmF0b3IpO1xuICB9XG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LmtleXMoKTtcbiAgfVxuICBsYXN0SW5kZXhPZih2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkubGFzdEluZGV4T2YodmFsdWUsIHN0YXJ0KTtcbiAgfVxuICBtYXAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuICByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgcmVkdWNlUmlnaHQoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5yZWR1Y2VSaWdodChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuICByZXZlcnNlKCkge1xuICAgIHRoaXMuI2FycmF5LnJldmVyc2UoKTtcbiAgfVxuICBzZXQoYXJyYXksIG9mZnNldCkge1xuICAgIHRoaXMuI2FycmF5LnNldChhcnJheSwgb2Zmc2V0KTtcbiAgfVxuICBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9XG4gIHNvbWUocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnNvbWUocHJlZGljYXRlKTtcbiAgfVxuICBzb3J0KGNvbXBhcmVGbikge1xuICAgIHRoaXMuI2FycmF5LnNvcnQoY29tcGFyZUZuKTtcbiAgfVxuICBzdWJhcnJheShiZWdpbiwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnN1YmFycmF5KGJlZ2luLCBlbmQpO1xuICB9XG4gIHRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIG9wdGlvbnMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIG9wdGlvbnMpO1xuICB9XG4gIHRvUmV2ZXJzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnRvUmV2ZXJzZWQoKTtcbiAgfVxuICB0b1NvcnRlZChjb21wYXJlRm4pIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkudG9Tb3J0ZWQoY29tcGFyZUZuKTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXkudG9TdHJpbmcoKTtcbiAgfVxuICB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LnZhbHVlcygpO1xuICB9XG4gIHdpdGgoaW5kZXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FycmF5LndpdGgoaW5kZXgsIHZhbHVlKTtcbiAgfVxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy4jYXJyYXlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG59XG5cbi8vIFRoaXMgY2xhc3MgcHJvdmlkZXMgYSBEYXRhVmlldy1saWtlIGludGVyZmFjZSBmb3IgYSBXZWJBc3NlbWJseSBtZW1vcnlcbi8vIGJ1ZmZlciwgcmVzdHJpY3RlZCB0byBlaXRoZXIgSW50MzIgb3IgQmlnSW50NjQgdHlwZXMuIEl0IGFsc28gcmVhY3F1aXJlc1xuLy8gdGhlIHVuZGVybHlpbmcgYnVmZmVyIHdoZW4gdGhlIFdlYkFzc2VtYmx5IG1lbW9yeSBpcyByZXNpemVkLCB3aGljaCBjYW5cbi8vIGhhcHBlbiB3aGVuIHRoZSBtZW1vcnkgaXMgZGV0YWNoZWQgYW5kIHJlc2l6ZWQgYnkgdGhlIFdlYkFzc2VtYmx5IG1vZHVsZS5cbmNsYXNzIERhdGFWaWV3UHJveHkge1xuICAjbW9kdWxlO1xuICAjdHlwZTtcblxuICAjX3ZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDApKTtcbiAgZ2V0ICN2aWV3KCkge1xuICAgIGlmICh0aGlzLiNfdmlldy5idWZmZXIuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gV2ViQXNzZW1ibHkgbWVtb3J5IHJlc2l6ZSBkZXRhY2hlZCB0aGUgYnVmZmVyIHNvIHJlLWNyZWF0ZSB0aGVcbiAgICAgIC8vIHZpZXcgd2l0aCB0aGUgbmV3IGJ1ZmZlci5cbiAgICAgIHRoaXMuI192aWV3ID0gbmV3IERhdGFWaWV3KFxuICAgICAgICB0aGlzLiNtb2R1bGUuSEVBUFU4LmJ1ZmZlcixcbiAgICAgICAgdGhpcy4jbW9kdWxlLkhFQVBVOC5ieXRlT2Zmc2V0ICsgdGhpcy5ieXRlT2Zmc2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI192aWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gbW9kdWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlT2Zmc2V0IFxuICAgKiBAcGFyYW0geydJbnQzMid8J0JpZ0ludDY0J30gdHlwZVxuICAgKi9cbiAgY29uc3RydWN0b3IobW9kdWxlLCBieXRlT2Zmc2V0LCB0eXBlKSB7XG4gICAgdGhpcy4jbW9kdWxlID0gbW9kdWxlO1xuICAgIHRoaXMuYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQ7XG4gICAgdGhpcy4jdHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXQgYnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLiN2aWV3LmJ1ZmZlcjtcbiAgfVxuICBnZXQgYnl0ZUxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdHlwZSA9PT0gJ0ludDMyJyA/IDQgOiA4O1xuICB9XG5cbiAgZ2V0SW50MzIoYnl0ZU9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKHRoaXMuI3R5cGUgIT09ICdJbnQzMicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0eXBlJyk7XG4gICAgfVxuICAgIGlmICghbGl0dGxlRW5kaWFuKSB0aHJvdyBuZXcgRXJyb3IoJ211c3QgYmUgbGl0dGxlIGVuZGlhbicpO1xuICAgIHJldHVybiB0aGlzLiN2aWV3LmdldEludDMyKGJ5dGVPZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gIH1cbiAgc2V0SW50MzIoYnl0ZU9mZnNldCwgdmFsdWUsIGxpdHRsZUVuZGlhbikge1xuICAgIGlmICh0aGlzLiN0eXBlICE9PSAnSW50MzInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZScpO1xuICAgIH1cbiAgICBpZiAoIWxpdHRsZUVuZGlhbikgdGhyb3cgbmV3IEVycm9yKCdtdXN0IGJlIGxpdHRsZSBlbmRpYW4nKTtcbiAgICB0aGlzLiN2aWV3LnNldEludDMyKGJ5dGVPZmZzZXQsIHZhbHVlLCBsaXR0bGVFbmRpYW4pO1xuICB9XG4gIGdldEJpZ0ludDY0KGJ5dGVPZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgIGlmICh0aGlzLiN0eXBlICE9PSAnQmlnSW50NjQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdHlwZScpO1xuICAgIH1cbiAgICBpZiAoIWxpdHRsZUVuZGlhbikgdGhyb3cgbmV3IEVycm9yKCdtdXN0IGJlIGxpdHRsZSBlbmRpYW4nKTtcbiAgICByZXR1cm4gdGhpcy4jdmlldy5nZXRCaWdJbnQ2NChieXRlT2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICB9XG4gIHNldEJpZ0ludDY0KGJ5dGVPZmZzZXQsIHZhbHVlLCBsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAodGhpcy4jdHlwZSAhPT0gJ0JpZ0ludDY0Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKCFsaXR0bGVFbmRpYW4pIHRocm93IG5ldyBFcnJvcignbXVzdCBiZSBsaXR0bGUgZW5kaWFuJyk7XG4gICAgdGhpcy4jdmlldy5zZXRCaWdJbnQ2NChieXRlT2Zmc2V0LCB2YWx1ZSwgbGl0dGxlRW5kaWFuKTtcbiAgfVxufSIsIi8vIENvcHlyaWdodCAyMDI0IFJveSBULiBIYXNoaW1vdG8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5pbXBvcnQgKiBhcyBWRlMgZnJvbSAnLi9zcWxpdGUtY29uc3RhbnRzLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3FsaXRlLWNvbnN0YW50cy5qcyc7XG5cbmNvbnN0IERFRkFVTFRfU0VDVE9SX1NJWkUgPSA1MTI7XG5cbi8vIEJhc2UgY2xhc3MgZm9yIGEgVkZTLlxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICBuYW1lO1xuICBteFBhdGhuYW1lID0gNjQ7XG4gIF9tb2R1bGU7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlIFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgbW9kdWxlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9tb2R1bGUgPSBtb2R1bGU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3ZvaWR8UHJvbWlzZTx2b2lkPn0gXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVybG9hZCBpbiBzdWJjbGFzc2VzIHRvIGluZGljYXRlIHdoaWNoIG1ldGhvZHMgYXJlIGFzeW5jaHJvbm91cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaGFzQXN5bmNNZXRob2QobWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpOYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBPdXRGbGFncyBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4T3BlbihwVmZzLCB6TmFtZSwgcEZpbGUsIGZsYWdzLCBwT3V0RmxhZ3MpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9DQU5UT1BFTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcFZmcyBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHpOYW1lIFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3luY0RpciBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RGVsZXRlKHBWZnMsIHpOYW1lLCBzeW5jRGlyKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4QWNjZXNzKHBWZnMsIHpOYW1lLCBmbGFncywgcFJlc091dCkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwVmZzIFxuICAgKiBAcGFyYW0ge251bWJlcn0gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuT3V0IFxuICAgKiBAcGFyYW0ge251bWJlcn0gek91dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RnVsbFBhdGhuYW1lKHBWZnMsIHpOYW1lLCBuT3V0LCB6T3V0KSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBWZnMgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuQnVmIFxuICAgKiBAcGFyYW0ge251bWJlcn0gekJ1ZiBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4R2V0TGFzdEVycm9yKHBWZnMsIG5CdWYsIHpCdWYpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeENsb3NlKHBGaWxlKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcERhdGEgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpQW10IFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldExvIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldEhpIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhSZWFkKHBGaWxlLCBwRGF0YSwgaUFtdCwgaU9mZnNldExvLCBpT2Zmc2V0SGkpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlBbXQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0TG8gXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpT2Zmc2V0SGkgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFdyaXRlKHBGaWxlLCBwRGF0YSwgaUFtdCwgaU9mZnNldExvLCBpT2Zmc2V0SGkpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplTG8gXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplSGkgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFRydW5jYXRlKHBGaWxlLCBzaXplTG8sIHNpemVIaSkge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIHhTeW5jKHBGaWxlLCBmbGFncykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwU2l6ZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RmlsZVNpemUocEZpbGUsIHBTaXplKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeExvY2socEZpbGUsIGxvY2tUeXBlKSB7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeFVubG9jayhwRmlsZSwgbG9ja1R5cGUpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfSBcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcFJlc091dCBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4Q2hlY2tSZXNlcnZlZExvY2socEZpbGUsIHBSZXNPdXQpIHtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcEZpbGUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcCBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBBcmcgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgeEZpbGVDb250cm9sKHBGaWxlLCBvcCwgcEFyZykge1xuICAgIHJldHVybiBWRlMuU1FMSVRFX05PVEZPVU5EO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4U2VjdG9yU2l6ZShwRmlsZSkge1xuICAgIHJldHVybiBERUZBVUxUX1NFQ1RPUl9TSVpFO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwRmlsZSBcbiAgICogQHJldHVybnMge251bWJlcnxQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICB4RGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHBGaWxlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZJTEVfVFlQRV9NQVNLID0gW1xuICBWRlMuU1FMSVRFX09QRU5fTUFJTl9EQixcbiAgVkZTLlNRTElURV9PUEVOX01BSU5fSk9VUk5BTCxcbiAgVkZTLlNRTElURV9PUEVOX1RFTVBfREIsXG4gIFZGUy5TUUxJVEVfT1BFTl9URU1QX0pPVVJOQUwsXG4gIFZGUy5TUUxJVEVfT1BFTl9UUkFOU0lFTlRfREIsXG4gIFZGUy5TUUxJVEVfT1BFTl9TVUJKT1VSTkFMLFxuICBWRlMuU1FMSVRFX09QRU5fU1VQRVJfSk9VUk5BTCxcbiAgVkZTLlNRTElURV9PUEVOX1dBTFxuXS5yZWR1Y2UoKG1hc2ssIGVsZW1lbnQpID0+IG1hc2sgfCBlbGVtZW50KTsiLCJpbXBvcnQgKiBhcyBWRlMgZnJvbSAnLi9WRlMuanMnO1xuXG4vLyBPcHRpb25zIGZvciBuYXZpZ2F0b3IubG9ja3MucmVxdWVzdCgpLlxuLyoqIEB0eXBlIHtMb2NrT3B0aW9uc30gKi8gY29uc3QgU0hBUkVEID0geyBtb2RlOiAnc2hhcmVkJyB9O1xuLyoqIEB0eXBlIHtMb2NrT3B0aW9uc30gKi8gY29uc3QgUE9MTF9TSEFSRUQgPSB7IGlmQXZhaWxhYmxlOiB0cnVlLCBtb2RlOiAnc2hhcmVkJyB9O1xuLyoqIEB0eXBlIHtMb2NrT3B0aW9uc30gKi8gY29uc3QgUE9MTF9FWENMVVNJVkUgPSB7IGlmQXZhaWxhYmxlOiB0cnVlLCBtb2RlOiAnZXhjbHVzaXZlJyB9O1xuXG5jb25zdCBQT0xJQ0lFUyA9IFsnZXhjbHVzaXZlJywgJ3NoYXJlZCcsICdzaGFyZWQraGludCddO1xuXG4vKipcbiAqIEB0eXBlZGVmIExvY2tTdGF0ZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJhc2VOYW1lXG4gKiBAcHJvcGVydHkge251bWJlcn0gdHlwZVxuICogQHByb3BlcnR5IHtib29sZWFufSB3cml0ZUhpbnRcbiAqIFxuICogVGhlc2UgcHJvcGVydGllcyBhcmUgZnVuY3Rpb25zIHRoYXQgcmVsZWFzZSBhIHNwZWNpZmljIGxvY2suXG4gKiBAcHJvcGVydHkgeygoKSA9PiB2b2lkKT99IFtnYXRlXVxuICogQHByb3BlcnR5IHsoKCkgPT4gdm9pZCk/fSBbYWNjZXNzXVxuICogQHByb3BlcnR5IHsoKCkgPT4gdm9pZCk/fSBbcmVzZXJ2ZWRdXG4gKiBAcHJvcGVydHkgeygoKSA9PiB2b2lkKT99IFtoaW50XVxuICovXG5cbi8qKlxuICogTWl4LWluIGZvciBGYWNhZGVWRlMgdGhhdCBpbXBsZW1lbnRzIHRoZSBTUUxpdGUgVkZTIGxvY2tpbmcgcHJvdG9jb2wuXG4gKiBAcGFyYW0geyp9IHN1cGVyY2xhc3MgRmFjYWRlVkZTIChvciBzdWJjbGFzcylcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgY29uc3QgV2ViTG9ja3NNaXhpbiA9IHN1cGVyY2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcbiAgI29wdGlvbnMgPSB7XG4gICAgbG9ja1BvbGljeTogJ2V4Y2x1c2l2ZScsXG4gICAgbG9ja1RpbWVvdXQ6IEluZmluaXR5XG4gIH07XG5cbiAgLyoqIEB0eXBlIHtNYXA8bnVtYmVyLCBMb2NrU3RhdGU+fSAqLyAjbWFwSWRUb1N0YXRlID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1vZHVsZSwgb3B0aW9ucykge1xuICAgIHN1cGVyKG5hbWUsIG1vZHVsZSwgb3B0aW9ucyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNvcHRpb25zLCBvcHRpb25zKTtcbiAgICBpZiAoUE9MSUNJRVMuaW5kZXhPZih0aGlzLiNvcHRpb25zLmxvY2tQb2xpY3kpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBXZWJMb2Nrc01peGluOiBpbnZhbGlkIGxvY2sgbW9kZTogJHtvcHRpb25zLmxvY2tQb2xpY3l9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpMb2NrKGZpbGVJZCwgbG9ja1R5cGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9ja1N0YXRlID0gdGhpcy4jZ2V0TG9ja1N0YXRlKGZpbGVJZCk7XG4gICAgICBpZiAobG9ja1R5cGUgPD0gbG9ja1N0YXRlLnR5cGUpIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICBcbiAgICAgIHN3aXRjaCAodGhpcy4jb3B0aW9ucy5sb2NrUG9saWN5KSB7XG4gICAgICAgIGNhc2UgJ2V4Y2x1c2l2ZSc6XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI2xvY2tFeGNsdXNpdmUobG9ja1N0YXRlLCBsb2NrVHlwZSk7XG4gICAgICAgIGNhc2UgJ3NoYXJlZCc6XG4gICAgICAgIGNhc2UgJ3NoYXJlZCtoaW50JzpcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy4jbG9ja1NoYXJlZChsb2NrU3RhdGUsIGxvY2tUeXBlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXZWJMb2Nrc01peGluOiBsb2NrIGVycm9yJywgZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9MT0NLO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb2NrVHlwZSBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpVbmxvY2soZmlsZUlkLCBsb2NrVHlwZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NrU3RhdGUgPSB0aGlzLiNnZXRMb2NrU3RhdGUoZmlsZUlkKTtcbiAgICAgIGlmICghKGxvY2tUeXBlIDwgbG9ja1N0YXRlLnR5cGUpKSByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgXG4gICAgICBzd2l0Y2ggKHRoaXMuI29wdGlvbnMubG9ja1BvbGljeSkge1xuICAgICAgICBjYXNlICdleGNsdXNpdmUnOlxuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiN1bmxvY2tFeGNsdXNpdmUobG9ja1N0YXRlLCBsb2NrVHlwZSk7XG4gICAgICAgIGNhc2UgJ3NoYXJlZCc6XG4gICAgICAgIGNhc2UgJ3NoYXJlZCtoaW50JzpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLiN1bmxvY2tTaGFyZWQobG9ja1N0YXRlLCBsb2NrVHlwZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignV2ViTG9ja3NNaXhpbjogdW5sb2NrIGVycm9yJywgZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9VTkxPQ0s7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IHBSZXNPdXQgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBhc3luYyBqQ2hlY2tSZXNlcnZlZExvY2soZmlsZUlkLCBwUmVzT3V0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2tTdGF0ZSA9IHRoaXMuI2dldExvY2tTdGF0ZShmaWxlSWQpO1xuICAgICAgc3dpdGNoICh0aGlzLiNvcHRpb25zLmxvY2tQb2xpY3kpIHtcbiAgICAgICAgY2FzZSAnZXhjbHVzaXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy4jY2hlY2tSZXNlcnZlZEV4Y2x1c2l2ZShsb2NrU3RhdGUsIHBSZXNPdXQpO1xuICAgICAgICBjYXNlICdzaGFyZWQnOlxuICAgICAgICBjYXNlICdzaGFyZWQraGludCc6XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuI2NoZWNrUmVzZXJ2ZWRTaGFyZWQobG9ja1N0YXRlLCBwUmVzT3V0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXZWJMb2Nrc01peGluOiBjaGVjayByZXNlcnZlZCBsb2NrIGVycm9yJywgZSk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9DSEVDS1JFU0VSVkVETE9DSztcbiAgICB9XG4gICAgcFJlc091dC5zZXRJbnQzMigwLCAwLCB0cnVlKTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwQXJnXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakZpbGVDb250cm9sKGZpbGVJZCwgb3AsIHBBcmcpIHtcbiAgICBpZiAob3AgPT09IFdlYkxvY2tzTWl4aW4uV1JJVEVfSElOVF9PUF9DT0RFICYmXG4gICAgICAgIHRoaXMuI29wdGlvbnMubG9ja1BvbGljeSA9PT0gJ3NoYXJlZCtoaW50Jyl7XG4gICAgICBjb25zdCBsb2NrU3RhdGUgPSB0aGlzLiNnZXRMb2NrU3RhdGUoZmlsZUlkKTtcbiAgICAgIGxvY2tTdGF0ZS53cml0ZUhpbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gVkZTLlNRTElURV9OT1RGT1VORDtcbiAgfVxuXG4gICNnZXRMb2NrU3RhdGUoZmlsZUlkKSB7XG4gICAgbGV0IGxvY2tTdGF0ZSA9IHRoaXMuI21hcElkVG9TdGF0ZS5nZXQoZmlsZUlkKTtcbiAgICBpZiAoIWxvY2tTdGF0ZSkge1xuICAgICAgLy8gVGhlIHN0YXRlIGRvZXNuJ3QgZXhpc3QgeWV0IHNvIGNyZWF0ZSBpdC5cbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEZpbGVuYW1lKGZpbGVJZCk7XG4gICAgICBsb2NrU3RhdGUgPSB7XG4gICAgICAgIGJhc2VOYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBWRlMuU1FMSVRFX0xPQ0tfTk9ORSxcbiAgICAgICAgd3JpdGVIaW50OiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMuI21hcElkVG9TdGF0ZS5zZXQoZmlsZUlkLCBsb2NrU3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gbG9ja1N0YXRlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtMb2NrU3RhdGV9IGxvY2tTdGF0ZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2tUeXBlIFxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGFzeW5jICNsb2NrRXhjbHVzaXZlKGxvY2tTdGF0ZSwgbG9ja1R5cGUpIHtcbiAgICBpZiAoIWxvY2tTdGF0ZS5hY2Nlc3MpIHtcbiAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdhY2Nlc3MnKSkge1xuICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgfVxuICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICB9XG4gICAgbG9ja1N0YXRlLnR5cGUgPSBsb2NrVHlwZTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvY2tTdGF0ZX0gbG9ja1N0YXRlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICAjdW5sb2NrRXhjbHVzaXZlKGxvY2tTdGF0ZSwgbG9ja1R5cGUpIHtcbiAgICBpZiAobG9ja1R5cGUgPT09IFZGUy5TUUxJVEVfTE9DS19OT05FKSB7XG4gICAgICBsb2NrU3RhdGUuYWNjZXNzPy4oKTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICB9XG4gICAgbG9ja1N0YXRlLnR5cGUgPSBsb2NrVHlwZTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvY2tTdGF0ZX0gbG9ja1N0YXRlIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwUmVzT3V0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgI2NoZWNrUmVzZXJ2ZWRFeGNsdXNpdmUobG9ja1N0YXRlLCBwUmVzT3V0KSB7XG4gICAgcFJlc091dC5zZXRJbnQzMigwLCAwLCB0cnVlKTtcbiAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvY2tTdGF0ZX0gbG9ja1N0YXRlIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgYXN5bmMgI2xvY2tTaGFyZWQobG9ja1N0YXRlLCBsb2NrVHlwZSkge1xuICAgIHN3aXRjaCAobG9ja1N0YXRlLnR5cGUpIHtcbiAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX05PTkU6XG4gICAgICAgIHN3aXRjaCAobG9ja1R5cGUpIHtcbiAgICAgICAgICBjYXNlIFZGUy5TUUxJVEVfTE9DS19TSEFSRUQ6XG4gICAgICAgICAgICBpZiAobG9ja1N0YXRlLndyaXRlSGludCkge1xuICAgICAgICAgICAgICAvLyB4RmlsZUNvbnRyb2woKSBoYXMgaGludGVkIHRoYXQgdGhpcyB0cmFuc2FjdGlvbiB3aWxsXG4gICAgICAgICAgICAgIC8vIHdyaXRlLiBBY3F1aXJlIHRoZSBoaW50IGxvY2ssIHdoaWNoIGlzIHJlcXVpcmVkIHRvIHJlYWNoXG4gICAgICAgICAgICAgIC8vIHRoZSBSRVNFUlZFRCBzdGF0ZS5cbiAgICAgICAgICAgICAgaWYgKCFhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2hpbnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIFRpbWVvdXQgYmVmb3JlIGxvY2sgYWNxdWlyZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQlVTWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNdXN0IGhhdmUgdGhlIGdhdGUgbG9jayB0byByZXF1ZXN0IHRoZSBhY2Nlc3MgbG9jay5cbiAgICAgICAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdnYXRlJywgU0hBUkVEKSkge1xuICAgICAgICAgICAgICAgIC8vIFRpbWVvdXQgYmVmb3JlIGxvY2sgYWNxdWlyZWQuXG4gICAgICAgICAgICAgICAgbG9ja1N0YXRlLmhpbnQ/LigpO1xuICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdhY2Nlc3MnLCBTSEFSRUQpO1xuICAgICAgICAgICAgbG9ja1N0YXRlLmdhdGUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuZ2F0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCghIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5yZXNlcnZlZCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIGxvY2sgdHJhbnNpdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfU0hBUkVEOlxuICAgICAgICBzd2l0Y2ggKGxvY2tUeXBlKSB7XG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfUkVTRVJWRUQ6XG4gICAgICAgICAgICBpZiAodGhpcy4jb3B0aW9ucy5sb2NrUG9saWN5ID09PSAnc2hhcmVkK2hpbnQnKSB7XG4gICAgICAgICAgICAgIC8vIElkZWFsbHkgd2Ugc2hvdWxkIGFscmVhZHkgaGF2ZSB0aGUgaGludCBsb2NrLCBidXQgaWYgbm90XG4gICAgICAgICAgICAgIC8vIHBvbGwgZm9yIGl0IGhlcmUuXG4gICAgICAgICAgICAgIGlmICghbG9ja1N0YXRlLmhpbnQgJiZcbiAgICAgICAgICAgICAgICAhYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdoaW50JywgUE9MTF9FWENMVVNJVkUpKSB7XG4gICAgICAgICAgICAgICAgLy8gQW5vdGhlciBjb25uZWN0aW9uIGhhcyB0aGUgaGludCBsb2NrIHNvIHRoaXMgaXMgYVxuICAgICAgICAgICAgICAgIC8vIGRlYWRsb2NrLiBUaGlzIGNvbm5lY3Rpb24gbXVzdCByZXRyeS5cbiAgICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBvbGwgZm9yIHRoZSByZXNlcnZlZCBsb2NrLiBUaGlzIHNob3VsZCBhbHdheXMgc3VjY2VlZFxuICAgICAgICAgICAgLy8gaWYgYWxsIGNsaWVudHMgdXNlIHRoZSAnc2hhcmVkK2hpbnQnIHBvbGljeS5cbiAgICAgICAgICAgIGlmICghYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdyZXNlcnZlZCcsIFBPTExfRVhDTFVTSVZFKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgZGVhZGxvY2suIFRoZSBjb25uZWN0aW9uIGhvbGRpbmcgdGhlIHJlc2VydmVkXG4gICAgICAgICAgICAgIC8vIGxvY2sgYmxvY2tzIHVzLCBhbmQgaXQgY2FuJ3QgYWNxdWlyZSBhbiBleGNsdXNpdmUgYWNjZXNzXG4gICAgICAgICAgICAgIC8vIGxvY2sgYmVjYXVzZSB3ZSBob2xkIGEgc2hhcmVkIGFjY2VzcyBsb2NrLiBUaGlzIGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgLy8gbXVzdCByZXRyeS5cbiAgICAgICAgICAgICAgbG9ja1N0YXRlLmhpbnQ/LigpO1xuICAgICAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9CVVNZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9ja1N0YXRlLmFjY2VzcygpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5nYXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCEhbG9ja1N0YXRlLnJlc2VydmVkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfRVhDTFVTSVZFOlxuICAgICAgICAgICAgLy8gSnVtcGluZyBkaXJlY3RseSBmcm9tIFNIQVJFRCB0byBFWENMVVNJVkUgd2l0aG91dCBwYXNzaW5nXG4gICAgICAgICAgICAvLyB0aHJvdWdoIFJFU0VSVkVEIGlzIG9ubHkgZG9uZSB3aXRoIGEgaG90IGpvdXJuYWwuXG4gICAgICAgICAgICBpZiAoIWF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAnZ2F0ZScpKSB7XG4gICAgICAgICAgICAgIC8vIFRpbWVvdXQgYmVmb3JlIGxvY2sgYWNxdWlyZWQuXG4gICAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0JVU1k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NrU3RhdGUuYWNjZXNzKCk7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAnYWNjZXNzJykpIHtcbiAgICAgICAgICAgICAgLy8gVGltZW91dCBiZWZvcmUgbG9jayBhY3F1aXJlZC5cbiAgICAgICAgICAgICAgbG9ja1N0YXRlLmdhdGUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQlVTWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCEhbG9ja1N0YXRlLmdhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUucmVzZXJ2ZWQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBsb2NrIHRyYW5zaXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1JFU0VSVkVEOlxuICAgICAgICBzd2l0Y2ggKGxvY2tUeXBlKSB7XG4gICAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfRVhDTFVTSVZFOlxuICAgICAgICAgICAgLy8gUHJldmVudCBvdGhlciBjb25uZWN0aW9ucyBmcm9tIGVudGVyaW5nIHRoZSBTSEFSRUQgc3RhdGUuXG4gICAgICAgICAgICBpZiAoIWF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAnZ2F0ZScpKSB7XG4gICAgICAgICAgICAgIC8vIFRpbWVvdXQgYmVmb3JlIGxvY2sgYWNxdWlyZWQuXG4gICAgICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0JVU1k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJsb2NrIHVudGlsIGFsbCBvdGhlciBjb25uZWN0aW9ucyBleGl0IHRoZSBTSEFSRUQgc3RhdGUuXG4gICAgICAgICAgICBpZiAoIWF3YWl0IHRoaXMuI2FjcXVpcmUobG9ja1N0YXRlLCAnYWNjZXNzJykpIHtcbiAgICAgICAgICAgICAgLy8gVGltZW91dCBiZWZvcmUgbG9jayBhY3F1aXJlZC5cbiAgICAgICAgICAgICAgbG9ja1N0YXRlLmdhdGUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQlVTWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCEhbG9ja1N0YXRlLmdhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCEhbG9ja1N0YXRlLnJlc2VydmVkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgbG9jayB0cmFuc2l0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxvY2tTdGF0ZS50eXBlID0gbG9ja1R5cGU7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtMb2NrU3RhdGV9IGxvY2tTdGF0ZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2tUeXBlIFxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGFzeW5jICN1bmxvY2tTaGFyZWQobG9ja1N0YXRlLCBsb2NrVHlwZSkge1xuICAgIC8vIGxvY2tUeXBlIGNhbiBvbmx5IGJlIFNRTElURV9MT0NLX1NIQVJFRCBvciBTUUxJVEVfTE9DS19OT05FLlxuICAgIGlmIChsb2NrVHlwZSA9PT0gVkZTLlNRTElURV9MT0NLX05PTkUpIHtcbiAgICAgIGxvY2tTdGF0ZS5hY2Nlc3M/LigpO1xuICAgICAgbG9ja1N0YXRlLmdhdGU/LigpO1xuICAgICAgbG9ja1N0YXRlLnJlc2VydmVkPy4oKTtcbiAgICAgIGxvY2tTdGF0ZS5oaW50Py4oKTtcbiAgICAgIGxvY2tTdGF0ZS53cml0ZUhpbnQgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuZ2F0ZSk7XG4gICAgICBjb25zb2xlLmFzc2VydCghbG9ja1N0YXRlLnJlc2VydmVkKTtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuaGludCk7XG4gICAgfSBlbHNlIHsgLy8gbG9ja1R5cGUgPT09IFZGUy5TUUxJVEVfTE9DS19TSEFSRURcbiAgICAgIHN3aXRjaCAobG9ja1N0YXRlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0xPQ0tfRVhDTFVTSVZFOlxuICAgICAgICAgIC8vIFJlbGVhc2Ugb3VyIGV4Y2x1c2l2ZSBhY2Nlc3MgbG9jayBhbmQgcmVhY3F1aXJlIGl0IHdpdGggYVxuICAgICAgICAgIC8vIHNoYXJlZCBsb2NrLiBUaGlzIHNob3VsZCBhbHdheXMgc3VjY2VlZCBiZWNhdXNlIHdlIGhvbGRcbiAgICAgICAgICAvLyB0aGUgZ2F0ZSBsb2NrLlxuICAgICAgICAgIGxvY2tTdGF0ZS5hY2Nlc3MoKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ2FjY2VzcycsIFNIQVJFRCk7XG5cbiAgICAgICAgICAvLyBSZWxlYXNlIG91ciBnYXRlIGFuZCByZXNlcnZlZCBsb2Nrcy4gV2UgbWlnaHQgbm90IGhhdmUgYVxuICAgICAgICAgIC8vIHJlc2VydmVkIGxvY2sgaWYgd2Ugd2VyZSBoYW5kbGluZyBhIGhvdCBqb3VybmFsLlxuICAgICAgICAgIGxvY2tTdGF0ZS5nYXRlKCk7XG4gICAgICAgICAgbG9ja1N0YXRlLnJlc2VydmVkPy4oKTtcbiAgICAgICAgICBsb2NrU3RhdGUuaGludD8uKCk7XG4gICAgICAgICAgY29uc29sZS5hc3NlcnQoISFsb2NrU3RhdGUuYWNjZXNzKTtcbiAgICAgICAgICBjb25zb2xlLmFzc2VydCghbG9ja1N0YXRlLmdhdGUpO1xuICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUucmVzZXJ2ZWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgVkZTLlNRTElURV9MT0NLX1JFU0VSVkVEOlxuICAgICAgICAgIC8vIFRoaXMgdHJhbnNpdGlvbiBpcyByYXJlLCBwcm9iYWJseSBvbmx5IG9uIGFuIEkvTyBlcnJvclxuICAgICAgICAgIC8vIHdoaWxlIHdyaXRpbmcgdG8gYSBqb3VybmFsIGZpbGUuXG4gICAgICAgICAgYXdhaXQgdGhpcy4jYWNxdWlyZShsb2NrU3RhdGUsICdhY2Nlc3MnLCBTSEFSRUQpO1xuICAgICAgICAgIGxvY2tTdGF0ZS5yZXNlcnZlZCgpO1xuICAgICAgICAgIGxvY2tTdGF0ZS5oaW50Py4oKTtcbiAgICAgICAgICBjb25zb2xlLmFzc2VydCghIWxvY2tTdGF0ZS5hY2Nlc3MpO1xuICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KCFsb2NrU3RhdGUuZ2F0ZSk7XG4gICAgICAgICAgY29uc29sZS5hc3NlcnQoIWxvY2tTdGF0ZS5yZXNlcnZlZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2tTdGF0ZS50eXBlID0gbG9ja1R5cGU7XG4gICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtMb2NrU3RhdGV9IGxvY2tTdGF0ZSBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFJlc091dCBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jICNjaGVja1Jlc2VydmVkU2hhcmVkKGxvY2tTdGF0ZSwgcFJlc091dCkge1xuICAgIGlmIChhd2FpdCB0aGlzLiNhY3F1aXJlKGxvY2tTdGF0ZSwgJ3Jlc2VydmVkJywgUE9MTF9TSEFSRUQpKSB7XG4gICAgICAvLyBXZSB3ZXJlIGFibGUgdG8gZ2V0IHRoZSBsb2NrIHNvIGl0IHdhcyBub3QgcmVzZXJ2ZWQuXG4gICAgICBsb2NrU3RhdGUucmVzZXJ2ZWQoKTtcbiAgICAgIHBSZXNPdXQuc2V0SW50MzIoMCwgMCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBSZXNPdXQuc2V0SW50MzIoMCwgMSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG9ja1N0YXRlfSBsb2NrU3RhdGUgXG4gICAqIEBwYXJhbSB7J2dhdGUnfCdhY2Nlc3MnfCdyZXNlcnZlZCd8J2hpbnQnfSBuYW1lXG4gICAqIEBwYXJhbSB7TG9ja09wdGlvbnN9IG9wdGlvbnMgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgI2FjcXVpcmUobG9ja1N0YXRlLCBuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zb2xlLmFzc2VydCghbG9ja1N0YXRlW25hbWVdKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuaWZBdmFpbGFibGUgJiYgdGhpcy4jb3B0aW9ucy5sb2NrVGltZW91dCA8IEluZmluaXR5KSB7XG4gICAgICAgIC8vIEFkZCBhIHRpbWVvdXQgdG8gdGhlIGxvY2sgcmVxdWVzdC5cbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgIHJlc29sdmU/LihmYWxzZSk7XG4gICAgICAgIH0sIHRoaXMuI29wdGlvbnMubG9ja1RpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2NrTmFtZSA9IGBsb2NrIyMke2xvY2tTdGF0ZS5iYXNlTmFtZX0jIyR7bmFtZX1gO1xuICAgICAgbmF2aWdhdG9yLmxvY2tzLnJlcXVlc3QobG9ja05hbWUsIG9wdGlvbnMsIGxvY2sgPT4ge1xuICAgICAgICBpZiAobG9jaykge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZWxlYXNlID0+IHtcbiAgICAgICAgICAgIGxvY2tTdGF0ZVtuYW1lXSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgcmVsZWFzZSgpO1xuICAgICAgICAgICAgICBsb2NrU3RhdGVbbmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXNvbHZlID0gbnVsbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NrU3RhdGVbbmFtZV0gPSBudWxsO1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIHJlc29sdmUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ0Fib3J0RXJyb3InKSB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuV2ViTG9ja3NNaXhpbi5XUklURV9ISU5UX09QX0NPREUgPSAtOTk5OTsiLCIvLyBDb3B5cmlnaHQgMjAyNCBSb3kgVC4gSGFzaGltb3RvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuaW1wb3J0IHsgRmFjYWRlVkZTIH0gZnJvbSAnLi4vRmFjYWRlVkZTLmpzJztcbmltcG9ydCAqIGFzIFZGUyBmcm9tICcuLi9WRlMuanMnO1xuaW1wb3J0IHsgV2ViTG9ja3NNaXhpbiB9IGZyb20gJy4uL1dlYkxvY2tzTWl4aW4uanMnO1xuXG5jb25zdCBSRVRSWUFCTEVfRVJST1JTID0gbmV3IFNldChbXG4gICdUcmFuc2FjdGlvbkluYWN0aXZlRXJyb3InLFxuICAnSW52YWxpZFN0YXRlRXJyb3InXG5dKTtcblxuLyoqXG4gKiBAdHlwZWRlZiBNZXRhZGF0YVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmaWxlU2l6ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcGVuZGluZ1ZlcnNpb25dXG4gKi9cblxuY2xhc3MgRmlsZSB7XG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyBwYXRoO1xuICAvKiogQHR5cGUge251bWJlcn0gKi8gZmxhZ3M7XG5cbiAgLyoqIEB0eXBlIHtNZXRhZGF0YX0gKi8gbWV0YWRhdGE7XG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyBmaWxlU2l6ZSA9IDA7XG5cbiAgLyoqIEB0eXBlIHtib29sZWFufSAqLyBuZWVkc01ldGFkYXRhU3luYyA9IGZhbHNlO1xuICAvKiogQHR5cGUge01ldGFkYXRhfSAqLyByb2xsYmFjayA9IG51bGw7XG4gIC8qKiBAdHlwZSB7U2V0PG51bWJlcj59ICovIGNoYW5nZWRQYWdlcyA9IG5ldyBTZXQoKTtcblxuICAvKiogQHR5cGUge3N0cmluZ30gKi8gc3luY2hyb25vdXMgPSAnZnVsbCc7XG4gIC8qKiBAdHlwZSB7SURCVHJhbnNhY3Rpb25PcHRpb25zfSAqLyB0eE9wdGlvbnMgPSB7IGR1cmFiaWxpdHk6ICdzdHJpY3QnIH07XG5cbiAgY29uc3RydWN0b3IocGF0aCwgZmxhZ3MsIG1ldGFkYXRhKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmZsYWdzID0gZmxhZ3M7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJREJCYXRjaEF0b21pY1ZGUyBleHRlbmRzIFdlYkxvY2tzTWl4aW4oRmFjYWRlVkZTKSB7XG4gIC8qKiBAdHlwZSB7TWFwPG51bWJlciwgRmlsZT59ICovIG1hcElkVG9GaWxlID0gbmV3IE1hcCgpO1xuICBsYXN0RXJyb3IgPSBudWxsO1xuXG4gIGxvZyA9IG51bGw7IC8vIGNvbnNvbGUubG9nXG5cbiAgLyoqIEB0eXBlIHtQcm9taXNlfSAqLyAjaXNSZWFkeTtcbiAgLyoqIEB0eXBlIHtJREJDb250ZXh0fSAqLyAjaWRiO1xuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUobmFtZSwgbW9kdWxlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgdmZzID0gbmV3IElEQkJhdGNoQXRvbWljVkZTKG5hbWUsIG1vZHVsZSwgb3B0aW9ucyk7XG4gICAgYXdhaXQgdmZzLmlzUmVhZHkoKTtcbiAgICByZXR1cm4gdmZzO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgbW9kdWxlLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihuYW1lLCBtb2R1bGUsIG9wdGlvbnMpO1xuICAgIHRoaXMuI2lzUmVhZHkgPSB0aGlzLiNpbml0aWFsaXplKG9wdGlvbnMuaWRiTmFtZSA/PyBuYW1lKTtcbiAgfVxuXG4gIGFzeW5jICNpbml0aWFsaXplKG5hbWUpIHtcbiAgICB0aGlzLiNpZGIgPSBhd2FpdCBJREJDb250ZXh0LmNyZWF0ZShuYW1lKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuI2lkYi5jbG9zZSgpO1xuICB9XG4gIFxuICBhc3luYyBpc1JlYWR5KCkge1xuICAgIGF3YWl0IHN1cGVyLmlzUmVhZHkoKTtcbiAgICBhd2FpdCB0aGlzLiNpc1JlYWR5O1xuICB9XG5cbiAgZ2V0RmlsZW5hbWUoZmlsZUlkKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB0aGlzLm1hcElkVG9GaWxlLmdldChmaWxlSWQpLnBhdGg7XG4gICAgcmV0dXJuIGBJREIoJHt0aGlzLm5hbWV9KToke3BhdGhuYW1lfWBcbiAgfVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nP30gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcE91dEZsYWdzIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgYXN5bmMgak9wZW4oek5hbWUsIGZpbGVJZCwgZmxhZ3MsIHBPdXRGbGFncykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHpOYW1lIHx8IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLCAnZmlsZTovLycpO1xuICAgICAgY29uc3QgcGF0aCA9IHVybC5wYXRobmFtZTtcblxuICAgICAgbGV0IG1ldGEgPSBhd2FpdCB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSB9KSA9PiBtZXRhZGF0YS5nZXQocGF0aCkpO1xuICAgICAgaWYgKCFtZXRhICYmIChmbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9DUkVBVEUpKSB7XG4gICAgICAgIG1ldGEgPSB7XG4gICAgICAgICAgbmFtZTogcGF0aCxcbiAgICAgICAgICBmaWxlU2l6ZTogMCxcbiAgICAgICAgICB2ZXJzaW9uOiAwXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IHRoaXMuI2lkYi5xKCh7IG1ldGFkYXRhIH0pID0+IG1ldGFkYXRhLnB1dChtZXRhKSwgJ3J3Jyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghbWV0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZpbGUgJHtwYXRofSBub3QgZm91bmRgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGZsYWdzLCBtZXRhKTtcbiAgICAgIHRoaXMubWFwSWRUb0ZpbGUuc2V0KGZpbGVJZCwgZmlsZSk7XG4gICAgICBwT3V0RmxhZ3Muc2V0SW50MzIoMCwgZmxhZ3MsIHRydWUpO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfQ0FOVE9QRU47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6TmFtZSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN5bmNEaXIgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBhc3luYyBqRGVsZXRlKHpOYW1lLCBzeW5jRGlyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoek5hbWUsICdmaWxlOi8vJyk7XG4gICAgICBjb25zdCBwYXRoID0gdXJsLnBhdGhuYW1lO1xuXG4gICAgICB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSwgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChbcGF0aCwgLUluZmluaXR5XSwgW3BhdGgsIEluZmluaXR5XSk7XG4gICAgICAgIGJsb2Nrcy5kZWxldGUocmFuZ2UpO1xuICAgICAgICBtZXRhZGF0YS5kZWxldGUocGF0aCk7XG4gICAgICB9LCAncncnKTtcblxuICAgICAgaWYgKHN5bmNEaXIpIHtcbiAgICAgICAgYXdhaXQgdGhpcy4jaWRiLnN5bmMoZmFsc2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfREVMRVRFO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gek5hbWUgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHBhcmFtIHtEYXRhVmlld30gcFJlc091dCBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpBY2Nlc3Moek5hbWUsIGZsYWdzLCBwUmVzT3V0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoek5hbWUsICdmaWxlOi8vJyk7XG4gICAgICBjb25zdCBwYXRoID0gdXJsLnBhdGhuYW1lO1xuXG4gICAgICBjb25zdCBtZXRhID0gYXdhaXQgdGhpcy4jaWRiLnEoKHsgbWV0YWRhdGEgfSkgPT4gbWV0YWRhdGEuZ2V0KHBhdGgpKTtcbiAgICAgIHBSZXNPdXQuc2V0SW50MzIoMCwgbWV0YSA/IDEgOiAwLCB0cnVlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0FDQ0VTUztcbiAgICB9IFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBhc3luYyBqQ2xvc2UoZmlsZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLm1hcElkVG9GaWxlLmdldChmaWxlSWQpO1xuICAgICAgdGhpcy5tYXBJZFRvRmlsZS5kZWxldGUoZmlsZUlkKTtcblxuICAgICAgaWYgKGZpbGUuZmxhZ3MgJiBWRlMuU1FMSVRFX09QRU5fREVMRVRFT05DTE9TRSkge1xuICAgICAgICBhd2FpdCB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSwgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgICBtZXRhZGF0YS5kZWxldGUoZmlsZS5wYXRoKTtcbiAgICAgICAgICBibG9ja3MuZGVsZXRlKElEQktleVJhbmdlLmJvdW5kKFtmaWxlLnBhdGgsIDBdLCBbZmlsZS5wYXRoLCBJbmZpbml0eV0pKTtcbiAgICAgICAgfSwgJ3J3Jyk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUubmVlZHNNZXRhZGF0YVN5bmMpIHtcbiAgICAgICAgdGhpcy4jaWRiLnEoKHsgbWV0YWRhdGEgfSkgPT4gbWV0YWRhdGEucHV0KGZpbGUubWV0YWRhdGEpLCAncncnKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuI2lkYi5zeW5jKGZpbGUuc3luY2hyb25vdXMgPT09ICdmdWxsJyk7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxhc3RFcnJvciA9IGU7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9DTE9TRTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZpbGVJZCBcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwRGF0YSBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlPZmZzZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpSZWFkKGZpbGVJZCwgcERhdGEsIGlPZmZzZXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG5cbiAgICAgIGxldCBwRGF0YU9mZnNldCA9IDA7XG4gICAgICB3aGlsZSAocERhdGFPZmZzZXQgPCBwRGF0YS5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIC8vIEZldGNoIHRoZSBJbmRleGVkREIgYmxvY2sgZm9yIHRoaXMgZmlsZSBsb2NhdGlvbi5cbiAgICAgICAgY29uc3QgZmlsZU9mZnNldCA9IGlPZmZzZXQgKyBwRGF0YU9mZnNldDtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBhd2FpdCB0aGlzLiNpZGIucSgoeyBibG9ja3MgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoW2ZpbGUucGF0aCwgLWZpbGVPZmZzZXRdLCBbZmlsZS5wYXRoLCBJbmZpbml0eV0pO1xuICAgICAgICAgIHJldHVybiBibG9ja3MuZ2V0KHJhbmdlKTtcbiAgICAgICAgfSk7ICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYgKCFibG9jayB8fCBibG9jay5kYXRhLmJ5dGVMZW5ndGggLSBibG9jay5vZmZzZXQgPD0gZmlsZU9mZnNldCkge1xuICAgICAgICAgIHBEYXRhLmZpbGwoMCwgcERhdGFPZmZzZXQpO1xuICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1NIT1JUX1JFQUQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb3B5IGJsb2NrIGRhdGEuXG4gICAgICAgIGNvbnN0IGRzdCA9IHBEYXRhLnN1YmFycmF5KHBEYXRhT2Zmc2V0KTtcbiAgICAgICAgY29uc3Qgc3JjT2Zmc2V0ID0gZmlsZU9mZnNldCArIGJsb2NrLm9mZnNldDtcbiAgICAgICAgY29uc3QgbkJ5dGVzVG9Db3B5ID0gTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgoYmxvY2suZGF0YS5ieXRlTGVuZ3RoIC0gc3JjT2Zmc2V0LCAwKSxcbiAgICAgICAgICBkc3QuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGRzdC5zZXQoYmxvY2suZGF0YS5zdWJhcnJheShzcmNPZmZzZXQsIHNyY09mZnNldCArIG5CeXRlc1RvQ29weSkpO1xuICAgICAgICBwRGF0YU9mZnNldCArPSBuQnl0ZXNUb0NvcHk7XG4gICAgICB9XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxhc3RFcnJvciA9IGU7XG4gICAgICByZXR1cm4gVkZTLlNRTElURV9JT0VSUl9SRUFEO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBEYXRhIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaU9mZnNldFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgaldyaXRlKGZpbGVJZCwgcERhdGEsIGlPZmZzZXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgICBpZiAoZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9NQUlOX0RCKSB7XG4gICAgICAgIGlmICghZmlsZS5yb2xsYmFjaykge1xuICAgICAgICAgIC8vIEJlZ2luIGEgbmV3IHdyaXRlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgIC8vIEFkZCBwZW5kaW5nVmVyc2lvbiB0byB0aGUgbWV0YWRhdGEgaW4gSW5kZXhlZERCLiBJZiB3ZSBjcmFzaFxuICAgICAgICAgIC8vIGR1cmluZyB0aGUgdHJhbnNhY3Rpb24sIHRoaXMgbGV0cyBzdWJzZXF1ZW50IGNvbm5lY3Rpb25zXG4gICAgICAgICAgLy8ga25vdyB0byByZW1vdmUgYmxvY2tzIGZyb20gdGhlIGZhaWxlZCB0cmFuc2FjdGlvbi5cbiAgICAgICAgICBjb25zdCBwZW5kaW5nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHsgcGVuZGluZ1ZlcnNpb246IGZpbGUubWV0YWRhdGEudmVyc2lvbiAtIDEgfSxcbiAgICAgICAgICAgIGZpbGUubWV0YWRhdGEpO1xuICAgICAgICAgIHRoaXMuI2lkYi5xKCh7IG1ldGFkYXRhIH0pID0+IG1ldGFkYXRhLnB1dChwZW5kaW5nKSwgJ3J3JywgZmlsZS50eE9wdGlvbnMpO1xuXG4gICAgICAgICAgZmlsZS5yb2xsYmFjayA9IE9iamVjdC5hc3NpZ24oe30sIGZpbGUubWV0YWRhdGEpO1xuICAgICAgICAgIGZpbGUubWV0YWRhdGEudmVyc2lvbi0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlLmZsYWdzICYgVkZTLlNRTElURV9PUEVOX01BSU5fREIpIHtcbiAgICAgICAgZmlsZS5jaGFuZ2VkUGFnZXMuYWRkKGlPZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gcERhdGEuc2xpY2UoKTtcbiAgICAgIGNvbnN0IHZlcnNpb24gPSBmaWxlLm1ldGFkYXRhLnZlcnNpb247XG4gICAgICBjb25zdCBpc092ZXJ3cml0ZSA9IGlPZmZzZXQgPCBmaWxlLm1ldGFkYXRhLmZpbGVTaXplO1xuICAgICAgaWYgKCFpc092ZXJ3cml0ZSB8fFxuICAgICAgICAgIGZpbGUuZmxhZ3MgJiBWRlMuU1FMSVRFX09QRU5fTUFJTl9EQiB8fFxuICAgICAgICAgIGZpbGUuZmxhZ3MgJiBWRlMuU1FMSVRFX09QRU5fVEVNUF9EQikge1xuICAgICAgICBjb25zdCBibG9jayA9IHtcbiAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgb2Zmc2V0OiAtaU9mZnNldCxcbiAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgIGRhdGE6IHBEYXRhLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jaWRiLnEoKHsgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgICBibG9ja3MucHV0KGJsb2NrKTtcbiAgICAgICAgICBmaWxlLmNoYW5nZWRQYWdlcy5hZGQoaU9mZnNldCk7XG4gICAgICAgIH0sICdydycsIGZpbGUudHhPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI2lkYi5xKGFzeW5jICh7IGJsb2NrcyB9KSA9PiB7XG4gICAgICAgICAgLy8gUmVhZCB0aGUgZXhpc3RpbmcgYmxvY2suXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBJREJLZXlSYW5nZS5ib3VuZChcbiAgICAgICAgICAgIFtmaWxlLnBhdGgsIC1pT2Zmc2V0XSxcbiAgICAgICAgICAgIFtmaWxlLnBhdGgsIEluZmluaXR5XSk7XG4gICAgICAgICAgY29uc3QgYmxvY2sgPSBhd2FpdCBibG9ja3MuZ2V0KHJhbmdlKTtcblxuICAgICAgICAgIC8vIE1vZGlmeSB0aGUgYmxvY2sgZGF0YS5cbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgYmxvY2suZGF0YS5zdWJhcnJheShpT2Zmc2V0ICsgYmxvY2sub2Zmc2V0KS5zZXQoZGF0YSk7XG5cbiAgICAgICAgICAvLyBXcml0ZSBiYWNrLlxuICAgICAgICAgIGJsb2Nrcy5wdXQoYmxvY2spO1xuICAgICAgICB9LCAncncnLCBmaWxlLnR4T3B0aW9ucyk7XG5cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUubWV0YWRhdGEuZmlsZVNpemUgPCBpT2Zmc2V0ICsgcERhdGEubGVuZ3RoKSB7XG4gICAgICAgIGZpbGUubWV0YWRhdGEuZmlsZVNpemUgPSBpT2Zmc2V0ICsgcERhdGEubGVuZ3RoO1xuICAgICAgICBmaWxlLm5lZWRzTWV0YWRhdGFTeW5jID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX1dSSVRFO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gaVNpemUgXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBqVHJ1bmNhdGUoZmlsZUlkLCBpU2l6ZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGlmIChpU2l6ZSA8IGZpbGUubWV0YWRhdGEuZmlsZVNpemUpIHtcbiAgICAgICAgdGhpcy4jaWRiLnEoKHsgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IElEQktleVJhbmdlLmJvdW5kKFxuICAgICAgICAgICAgW2ZpbGUucGF0aCwgLUluZmluaXR5XSxcbiAgICAgICAgICAgIFtmaWxlLnBhdGgsIC1pU2l6ZSwgSW5maW5pdHldKTtcbiAgICAgICAgICBibG9ja3MuZGVsZXRlKHJhbmdlKTtcbiAgICAgICAgfSwgJ3J3JywgZmlsZS50eE9wdGlvbnMpO1xuICAgICAgICBmaWxlLm1ldGFkYXRhLmZpbGVTaXplID0gaVNpemU7XG4gICAgICAgIGZpbGUubmVlZHNNZXRhZGF0YVN5bmMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sYXN0RXJyb3IgPSBlO1xuICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfSU9FUlJfVFJVTkNBVEU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmaWxlSWQgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmbGFncyBcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIGpTeW5jKGZpbGVJZCwgZmxhZ3MpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgICBpZiAoZmlsZS5uZWVkc01ldGFkYXRhU3luYykge1xuICAgICAgICB0aGlzLiNpZGIucSgoeyBtZXRhZGF0YSB9KSA9PiBtZXRhZGF0YS5wdXQoZmlsZS5tZXRhZGF0YSksICdydycsIGZpbGUudHhPcHRpb25zKTtcbiAgICAgICAgZmlsZS5uZWVkc01ldGFkYXRhU3luYyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9NQUlOX0RCKSB7XG4gICAgICAgIC8vIFN5bmMgaXMgb25seSBuZWVkZWQgaGVyZSBmb3IgZHVyYWJpbGl0eS4gVmlzaWJpbGl0eSBmb3Igb3RoZXJcbiAgICAgICAgLy8gY29ubmVjdGlvbnMgaXMgZW5zdXJlZCBpbiBqVW5sb2NrKCkuXG4gICAgICAgIGlmIChmaWxlLnN5bmNocm9ub3VzID09PSAnZnVsbCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLiNpZGIuc3luYyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy4jaWRiLnN5bmMoZmlsZS5zeW5jaHJvbm91cyA9PT0gJ2Z1bGwnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0ZTWU5DO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwU2l6ZTY0IFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgakZpbGVTaXplKGZpbGVJZCwgcFNpemU2NCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIHBTaXplNjQuc2V0QmlnSW50NjQoMCwgQmlnSW50KGZpbGUubWV0YWRhdGEuZmlsZVNpemUpLCB0cnVlKTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSX0ZTVEFUO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBhc3luYyBqTG9jayhmaWxlSWQsIGxvY2tUeXBlKSB7XG4gICAgLy8gQ2FsbCB0aGUgYWN0dWFsIGxvY2sgaW1wbGVtZW50YXRpb24uXG4gICAgY29uc3QgZmlsZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuakxvY2soZmlsZUlkLCBsb2NrVHlwZSk7XG5cbiAgICBpZiAobG9ja1R5cGUgPT09IFZGUy5TUUxJVEVfTE9DS19TSEFSRUQpIHtcbiAgICAgIC8vIFVwZGF0ZSBtZXRhZGF0YS5cbiAgICAgIGZpbGUubWV0YWRhdGEgPSBhd2FpdCB0aGlzLiNpZGIucShhc3luYyAoeyBtZXRhZGF0YSwgYmxvY2tzIH0pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvKiogQHR5cGUge01ldGFkYXRhfSAqLyBjb25zdCBtID0gYXdhaXQgbWV0YWRhdGEuZ2V0KGZpbGUucGF0aCk7XG4gICAgICAgIGlmIChtLnBlbmRpbmdWZXJzaW9uKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGByZW1vdmluZyBmYWlsZWQgdHJhbnNhY3Rpb24gJHttLnBlbmRpbmdWZXJzaW9ufWApO1xuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoW20ubmFtZSwgLUluZmluaXR5XSwgW20ubmFtZSwgSW5maW5pdHldKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBibG9ja3Mub3BlbkN1cnNvcihyYW5nZSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gcmVxdWVzdC5yZXN1bHQ7XG4gICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sudmVyc2lvbiA8IG0udmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yLmRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGRlbGV0ZSBtLnBlbmRpbmdWZXJzaW9uO1xuICAgICAgICAgIG1ldGFkYXRhLnB1dChtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0sICdydycsIGZpbGUudHhPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkIFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9ja1R5cGUgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gICAqL1xuICBhc3luYyBqVW5sb2NrKGZpbGVJZCwgbG9ja1R5cGUpIHtcbiAgICBpZiAobG9ja1R5cGUgPT09IFZGUy5TUUxJVEVfTE9DS19OT05FKSB7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5tYXBJZFRvRmlsZS5nZXQoZmlsZUlkKTtcbiAgICAgIGF3YWl0IHRoaXMuI2lkYi5zeW5jKGZpbGUuc3luY2hyb25vdXMgPT09ICdmdWxsJyk7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgYWN0dWFsIHVubG9jayBpbXBsZW1lbnRhdGlvbi5cbiAgICByZXR1cm4gc3VwZXIualVubG9jayhmaWxlSWQsIGxvY2tUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmlsZUlkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBwQXJnXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakZpbGVDb250cm9sKGZpbGVJZCwgb3AsIHBBcmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMubWFwSWRUb0ZpbGUuZ2V0KGZpbGVJZCk7XG4gICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgIGNhc2UgVkZTLlNRTElURV9GQ05UTF9QUkFHTUE6XG4gICAgICAgICAgY29uc3Qga2V5ID0gZXh0cmFjdFN0cmluZyhwQXJnLCA0KTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGV4dHJhY3RTdHJpbmcocEFyZywgOCk7XG4gICAgICAgICAgdGhpcy5sb2c/LigneEZpbGVDb250cm9sJywgZmlsZS5wYXRoLCAnUFJBR01BJywga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgY29uc3Qgc2V0UHJhZ21hUmVzcG9uc2UgPSByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IHRoaXMuX21vZHVsZS5fc3FsaXRlM19tYWxsb2MoZW5jb2RlZC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG91dEFycmF5ID0gdGhpcy5fbW9kdWxlLkhFQVBVOC5zdWJhcnJheShvdXQsIG91dCArIGVuY29kZWQuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICBvdXRBcnJheS5zZXQoZW5jb2RlZCk7XG4gICAgICAgICAgICBwQXJnLnNldFVpbnQzMigwLCBvdXQsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfRVJST1I7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzd2l0Y2ggKGtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdwYWdlX3NpemUnOlxuICAgICAgICAgICAgICBpZiAoZmlsZS5mbGFncyAmIFZGUy5TUUxJVEVfT1BFTl9NQUlOX0RCKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgY2hhbmdpbmcgdGhlIHBhZ2Ugc2l6ZS5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgZmlsZS5tZXRhZGF0YS5maWxlU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfRVJST1I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3luY2hyb25vdXMnOlxuICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAgICAgICAgY2FzZSAnb2ZmJzpcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5zeW5jaHJvbm91cyA9ICdvZmYnO1xuICAgICAgICAgICAgICAgICAgICBmaWxlLnR4T3B0aW9ucyA9IHsgZHVyYWJpbGl0eTogJ3JlbGF4ZWQnIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICAgICAgICAgICAgICBmaWxlLnN5bmNocm9ub3VzID0gJ25vcm1hbCc7XG4gICAgICAgICAgICAgICAgICAgIGZpbGUudHhPcHRpb25zID0geyBkdXJhYmlsaXR5OiAncmVsYXhlZCcgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgICAgICAgICAgICBjYXNlICdleHRyYSc6XG4gICAgICAgICAgICAgICAgICAgIGZpbGUuc3luY2hyb25vdXMgPSAnZnVsbCc7XG4gICAgICAgICAgICAgICAgICAgIGZpbGUudHhPcHRpb25zID0geyBkdXJhYmlsaXR5OiAnc3RyaWN0JyB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3cml0ZV9oaW50JzpcbiAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmpGaWxlQ29udHJvbChmaWxlSWQsIFdlYkxvY2tzTWl4aW4uV1JJVEVfSElOVF9PUF9DT0RFLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0ZDTlRMX1NZTkM6XG4gICAgICAgICAgdGhpcy5sb2c/LigneEZpbGVDb250cm9sJywgZmlsZS5wYXRoLCAnU1lOQycpO1xuICAgICAgICAgIGlmIChmaWxlLnJvbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBjb21taXRNZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGZpbGUubWV0YWRhdGEpO1xuICAgICAgICAgICAgY29uc3QgcHJldkZpbGVTaXplID0gZmlsZS5yb2xsYmFjay5maWxlU2l6ZVxuICAgICAgICAgICAgdGhpcy4jaWRiLnEoKHsgbWV0YWRhdGEsIGJsb2NrcyB9KSA9PiB7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLnB1dChjb21taXRNZXRhZGF0YSk7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBwYWdlIHZlcnNpb25zLlxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9mZnNldCBvZiBmaWxlLmNoYW5nZWRQYWdlcykge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCBwcmV2RmlsZVNpemUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gSURCS2V5UmFuZ2UuYm91bmQoXG4gICAgICAgICAgICAgICAgICAgIFtmaWxlLnBhdGgsIC1vZmZzZXQsIGNvbW1pdE1ldGFkYXRhLnZlcnNpb25dLFxuICAgICAgICAgICAgICAgICAgICBbZmlsZS5wYXRoLCAtb2Zmc2V0LCBJbmZpbml0eV0sXG4gICAgICAgICAgICAgICAgICAgIHRydWUpO1xuICAgICAgICAgICAgICAgICAgYmxvY2tzLmRlbGV0ZShyYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbGUuY2hhbmdlZFBhZ2VzLmNsZWFyKCk7XG4gICAgICAgICAgICB9LCAncncnLCBmaWxlLnR4T3B0aW9ucyk7XG4gICAgICAgICAgICBmaWxlLm5lZWRzTWV0YWRhdGFTeW5jID0gZmFsc2U7XG4gICAgICAgICAgICBmaWxlLnJvbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVkZTLlNRTElURV9GQ05UTF9CRUdJTl9BVE9NSUNfV1JJVEU6XG4gICAgICAgICAgLy8gRXZlcnkgd3JpdGUgdHJhbnNhY3Rpb24gaXMgYXRvbWljLCBzbyB0aGlzIGlzIGEgbm8tb3AuXG4gICAgICAgICAgdGhpcy5sb2c/LigneEZpbGVDb250cm9sJywgZmlsZS5wYXRoLCAnQkVHSU5fQVRPTUlDX1dSSVRFJyk7XG4gICAgICAgICAgcmV0dXJuIFZGUy5TUUxJVEVfT0s7XG4gICAgICAgIGNhc2UgVkZTLlNRTElURV9GQ05UTF9DT01NSVRfQVRPTUlDX1dSSVRFOlxuICAgICAgICAgIC8vIEV2ZXJ5IHdyaXRlIHRyYW5zYWN0aW9uIGlzIGF0b21pYywgc28gdGhpcyBpcyBhIG5vLW9wLlxuICAgICAgICAgIHRoaXMubG9nPy4oJ3hGaWxlQ29udHJvbCcsIGZpbGUucGF0aCwgJ0NPTU1JVF9BVE9NSUNfV1JJVEUnKTtcbiAgICAgICAgICByZXR1cm4gVkZTLlNRTElURV9PSztcbiAgICAgICAgY2FzZSBWRlMuU1FMSVRFX0ZDTlRMX1JPTExCQUNLX0FUT01JQ19XUklURTpcbiAgICAgICAgICB0aGlzLmxvZz8uKCd4RmlsZUNvbnRyb2wnLCBmaWxlLnBhdGgsICdST0xMQkFDS19BVE9NSUNfV1JJVEUnKTtcbiAgICAgICAgICBmaWxlLm1ldGFkYXRhID0gZmlsZS5yb2xsYmFjaztcbiAgICAgICAgICBjb25zdCByb2xsYmFja01ldGFkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5tZXRhZGF0YSk7XG4gICAgICAgICAgdGhpcy4jaWRiLnEoKHsgbWV0YWRhdGEsIGJsb2NrcyB9KSA9PiB7XG4gICAgICAgICAgICBtZXRhZGF0YS5wdXQocm9sbGJhY2tNZXRhZGF0YSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwYWdlcy5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgb2Zmc2V0IG9mIGZpbGUuY2hhbmdlZFBhZ2VzKSB7XG4gICAgICAgICAgICAgIGJsb2Nrcy5kZWxldGUoW2ZpbGUucGF0aCwgLW9mZnNldCwgcm9sbGJhY2tNZXRhZGF0YS52ZXJzaW9uIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsZS5jaGFuZ2VkUGFnZXMuY2xlYXIoKTtcbiAgICAgICAgICB9LCAncncnLCBmaWxlLnR4T3B0aW9ucyk7XG4gICAgICAgICAgZmlsZS5uZWVkc01ldGFkYXRhU3luYyA9IGZhbHNlO1xuICAgICAgICAgIGZpbGUucm9sbGJhY2sgPSBudWxsO1xuICAgICAgICAgIHJldHVybiBWRlMuU1FMSVRFX09LO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubGFzdEVycm9yID0gZTtcbiAgICAgIHJldHVybiBWRlMuU1FMSVRFX0lPRVJSO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuakZpbGVDb250cm9sKGZpbGVJZCwgb3AsIHBBcmcpO1xuICB9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBGaWxlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgakRldmljZUNoYXJhY3RlcmlzdGljcyhwRmlsZSkge1xuICAgIHJldHVybiAwXG4gICAgfCBWRlMuU1FMSVRFX0lPQ0FQX0JBVENIX0FUT01JQ1xuICAgIHwgVkZTLlNRTElURV9JT0NBUF9VTkRFTEVUQUJMRV9XSEVOX09QRU47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSB6QnVmIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfFByb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGpHZXRMYXN0RXJyb3IoekJ1Zikge1xuICAgIGlmICh0aGlzLmxhc3RFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcih0aGlzLmxhc3RFcnJvcik7XG4gICAgICBjb25zdCBvdXRwdXRBcnJheSA9IHpCdWYuc3ViYXJyYXkoMCwgekJ1Zi5ieXRlTGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCB7IHdyaXR0ZW4gfSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZUludG8odGhpcy5sYXN0RXJyb3IubWVzc2FnZSwgb3V0cHV0QXJyYXkpO1xuICAgICAgekJ1Zlt3cml0dGVuXSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBWRlMuU1FMSVRFX09LXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdFN0cmluZyhkYXRhVmlldywgb2Zmc2V0KSB7XG4gIGNvbnN0IHAgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0LCB0cnVlKTtcbiAgaWYgKHApIHtcbiAgICBjb25zdCBjaGFycyA9IG5ldyBVaW50OEFycmF5KGRhdGFWaWV3LmJ1ZmZlciwgcCk7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShjaGFycy5zdWJhcnJheSgwLCBjaGFycy5pbmRleE9mKDApKSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBJREJDb250ZXh0IHtcbiAgLyoqIEB0eXBlIHtJREJEYXRhYmFzZX0gKi8gI2RhdGFiYXNlO1xuXG4gIC8qKiBAdHlwZSB7UHJvbWlzZX0gKi8gI2NoYWluID0gbnVsbDtcbiAgLyoqIEB0eXBlIHtQcm9taXNlPGFueT59ICovICN0eENvbXBsZXRlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIC8qKiBAdHlwZSB7SURCUmVxdWVzdD99ICovICNyZXF1ZXN0ID0gbnVsbDtcbiAgLyoqIEB0eXBlIHtXZWFrU2V0PElEQlRyYW5zYWN0aW9uPn0gKi8gI3R4UGVuZGluZyA9IG5ldyBXZWFrU2V0KCk7XG4gIFxuICBsb2cgPSBudWxsO1xuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUobmFtZSkge1xuICAgIGNvbnN0IGRhdGFiYXNlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIDYpO1xuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XG4gICAgICAgIGlmIChldmVudC5vbGRWZXJzaW9uKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFVwZ3JhZGluZyBJbmRleGVkREIgZnJvbSB2ZXJzaW9uICR7ZXZlbnQub2xkVmVyc2lvbn1gKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGV2ZW50Lm9sZFZlcnNpb24pIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIHRoZSBvcmlnaW5hbCBzY2hlbWEuXG4gICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnYmxvY2tzJywgeyBrZXlQYXRoOiBbJ3BhdGgnLCAnb2Zmc2V0JywgJ3ZlcnNpb24nXX0pXG4gICAgICAgICAgICAgIC5jcmVhdGVJbmRleCgndmVyc2lvbicsIFsncGF0aCcsICd2ZXJzaW9uJ10pO1xuICAgICAgICAgICAgLy8gZmFsbCB0aHJvdWdoIGludGVudGlvbmFsbHlcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBjb25zdCB0eCA9IHJlcXVlc3QudHJhbnNhY3Rpb247XG4gICAgICAgICAgICBjb25zdCBibG9ja3MgPSB0eC5vYmplY3RTdG9yZSgnYmxvY2tzJyk7XG4gICAgICAgICAgICBibG9ja3MuZGVsZXRlSW5kZXgoJ3ZlcnNpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ21ldGFkYXRhJywgeyBrZXlQYXRoOiAnbmFtZScgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCB0aGUgYmxvY2tzLlxuICAgICAgICAgICAgICBsZXQgbGFzdEJsb2NrID0ge307XG4gICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0eC5vYmplY3RTdG9yZSgnYmxvY2tzJykub3BlbkN1cnNvcigpO1xuICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sub2Zmc2V0ICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgICAgICAgICAgICAgIChibG9jay5wYXRoID09PSBsYXN0QmxvY2sucGF0aCAmJiBibG9jay5vZmZzZXQgPT09IGxhc3RCbG9jay5vZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBzdXBlcmNlZGVkIGJsb2NrIChvciB0aGUgXCJwdXJnZVwiIGluZm8pLlxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuZGVsZXRlKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2NrLm9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIG1ldGFkYXRhIHRvIGl0cyBvd24gc3RvcmUuXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogYmxvY2sucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlU2l6ZTogYmxvY2suZmlsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogYmxvY2sudmVyc2lvblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYmxvY2suZmlsZVNpemU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci51cGRhdGUoYmxvY2spO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBJREJDb250ZXh0KGRhdGFiYXNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGRhdGFiYXNlKSB7XG4gICAgdGhpcy4jZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuI2RhdGFiYXNlLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsoc3RvcmVzOiBPYmplY3QuPHN0cmluZywgSURCT2JqZWN0U3RvcmU+KSA9PiBhbnl9IGYgXG4gICAqIEBwYXJhbSB7J3JvJ3wncncnfSBtb2RlIFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgcShmLCBtb2RlID0gJ3JvJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqIEB0eXBlIHtJREJUcmFuc2FjdGlvbk1vZGV9ICovXG4gICAgY29uc3QgdHhNb2RlID0gbW9kZSA9PT0gJ3JvJyA/ICdyZWFkb25seScgOiAncmVhZHdyaXRlJztcbiAgICBjb25zdCB0eE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIC8qKiBAdHlwZSB7SURCVHJhbnNhY3Rpb25EdXJhYmlsaXR5fSAqLyBkdXJhYmlsaXR5OiAnZGVmYXVsdCdcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHF1ZXJpZXMgcnVuIHNlcXVlbnRpYWxseS4gSWYgYW55IGZ1bmN0aW9uIHJlamVjdHMsXG4gICAgLy8gb3IgYW55IHJlcXVlc3QgaGFzIGFuIGVycm9yLCBvciB0aGUgdHJhbnNhY3Rpb24gZG9lcyBub3QgY29tbWl0LFxuICAgIC8vIHRoZW4gbm8gc3Vic2VxdWVudCBmdW5jdGlvbnMgd2lsbCBydW4gdW50aWwgc3luYygpIG9yIHJlc2V0KCkuXG4gICAgdGhpcy4jY2hhaW4gPSAodGhpcy4jY2hhaW4gfHwgUHJvbWlzZS5yZXNvbHZlKCkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLiNxKGYsIHR4TW9kZSwgdHhPcHRpb25zKSk7XG4gICAgcmV0dXJuIHRoaXMuI2NoYWluO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KHN0b3JlczogT2JqZWN0LjxzdHJpbmcsIElEQk9iamVjdFN0b3JlPikgPT4gYW55fSBmIFxuICAgKiBAcGFyYW0ge0lEQlRyYW5zYWN0aW9uTW9kZX0gbW9kZSBcbiAgICogQHBhcmFtIHtJREJUcmFuc2FjdGlvbk9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIGFzeW5jICNxKGYsIG1vZGUsIG9wdGlvbnMpIHtcbiAgICAvKiogQHR5cGUge0lEQlRyYW5zYWN0aW9ufSAqLyBsZXQgdHg7XG4gICAgaWYgKHRoaXMuI3JlcXVlc3QgJiZcbiAgICAgICAgdGhpcy4jdHhQZW5kaW5nLmhhcyh0aGlzLiNyZXF1ZXN0LnRyYW5zYWN0aW9uKSAmJlxuICAgICAgICB0aGlzLiNyZXF1ZXN0LnRyYW5zYWN0aW9uLm1vZGUgPj0gbW9kZSAmJlxuICAgICAgICB0aGlzLiNyZXF1ZXN0LnRyYW5zYWN0aW9uLmR1cmFiaWxpdHkgPT09IG9wdGlvbnMuZHVyYWJpbGl0eSkge1xuICAgICAgLy8gVGhlIHByZXZpb3VzIHJlcXVlc3QgdHJhbnNhY3Rpb24gaXMgY29tcGF0aWJsZSBhbmQgaGFzXG4gICAgICAvLyBub3QgeWV0IGNvbXBsZXRlZC5cbiAgICAgIHR4ID0gdGhpcy4jcmVxdWVzdC50cmFuc2FjdGlvbjtcblxuICAgICAgLy8gSWYgdGhlIHByZXZpb3VzIHJlcXVlc3QgaXMgcGVuZGluZywgd2FpdCBmb3IgaXQgdG8gY29tcGxldGUuXG4gICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBhY3RpdmUuXG4gICAgICBpZiAodGhpcy4jcmVxdWVzdC5yZWFkeVN0YXRlID09PSAncGVuZGluZycpIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgdGhpcy4jcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgcmVzb2x2ZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgIHRoaXMuI3JlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCByZXNvbHZlLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XG4gICAgICBpZiAoIXR4KSB7XG4gICAgICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zYWN0aW9uIGlzIG1pc3Npbmcgb3IgZG9lc24ndCBtYXRjaCBzb1xuICAgICAgICAvLyByZXBsYWNlIGl0IHdpdGggYSBuZXcgb25lLiB3YWl0IGZvciB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gdHJhbnNhY3Rpb24gdG8gY29tcGxldGUgc28gdGhlIGxpZmV0aW1lcyBkbyBub3Qgb3ZlcmxhcC5cbiAgICAgICAgYXdhaXQgdGhpcy4jdHhDb21wbGV0ZTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyB0cmFuc2FjdGlvbi5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0eCA9IHRoaXMuI2RhdGFiYXNlLnRyYW5zYWN0aW9uKHRoaXMuI2RhdGFiYXNlLm9iamVjdFN0b3JlTmFtZXMsIG1vZGUsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxvZz8uKCdJREJUcmFuc2FjdGlvbiBvcGVuJywgbW9kZSk7XG4gICAgICAgIHRoaXMuI3R4UGVuZGluZy5hZGQodHgpO1xuICAgICAgICB0aGlzLiN0eENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2c/LignSURCVHJhbnNhY3Rpb24gY29tcGxldGUnKTtcbiAgICAgICAgICAgIHRoaXMuI3R4UGVuZGluZy5kZWxldGUodHgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jdHhQZW5kaW5nLmRlbGV0ZSh0eCk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCd0cmFuc2FjdGlvbiBhYm9ydGVkJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyBDcmVhdGUgb2JqZWN0IHN0b3JlIHByb3hpZXMuXG4gICAgICAgIGNvbnN0IG9iamVjdFN0b3JlcyA9IFsuLi50eC5vYmplY3RTdG9yZU5hbWVzXS5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtuYW1lLCB0aGlzLnByb3h5U3RvcmVPckluZGV4KHR4Lm9iamVjdFN0b3JlKG5hbWUpKV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGZ1bmN0aW9uLlxuICAgICAgICByZXR1cm4gYXdhaXQgZihPYmplY3QuZnJvbUVudHJpZXMob2JqZWN0U3RvcmVzKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFVzZSBhIG5ldyB0cmFuc2FjdGlvbiBpZiB0aGlzIG9uZSB3YXMgaW5hY3RpdmUuIFRoaXMgd2lsbFxuICAgICAgICAvLyBoYXBwZW4gaWYgdGhlIGxhc3QgcmVxdWVzdCBpbiB0aGUgdHJhbnNhY3Rpb24gY29tcGxldGVkXG4gICAgICAgIC8vIGluIGEgcHJldmlvdXMgdGFzayBidXQgdGhlIHRyYW5zYWN0aW9uIGhhcyBub3QgeWV0IGNvbW1pdHRlZC5cbiAgICAgICAgaWYgKCFpICYmIFJFVFJZQUJMRV9FUlJPUlMuaGFzKGUubmFtZSkpIHtcbiAgICAgICAgICB0aGlzLmxvZz8uKGAke2UubmFtZX0sIHJldHJ5aW5nYCk7XG4gICAgICAgICAgdHggPSBudWxsO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBzdG9yZSBtZXRob2RzIHRoYXQgcmV0dXJuIGFuIElEQlJlcXVlc3QsIGV4Y2VwdCBmb3IgY3Vyc29yXG4gICAqIGNyZWF0aW9uLCBhcmUgd3JhcHBlZCB0byByZXR1cm4gYSBQcm9taXNlLiBJbiBhZGRpdGlvbiwgdGhlXG4gICAqIHJlcXVlc3QgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciBjaGFpbmluZy5cbiAgICogQHBhcmFtIHtJREJPYmplY3RTdG9yZX0gb2JqZWN0U3RvcmUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgcHJveHlTdG9yZU9ySW5kZXgob2JqZWN0U3RvcmUpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iamVjdFN0b3JlLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXliZVJlcXVlc3QgPSBSZWZsZWN0LmFwcGx5KHJlc3VsdCwgdGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChtYXliZVJlcXVlc3QgaW5zdGFuY2VvZiBJREJSZXF1ZXN0ICYmICFwcm9wZXJ0eS5lbmRzV2l0aCgnQ3Vyc29yJykpIHtcbiAgICAgICAgICAgICAgLy8gLy8gRGVidWcgbG9nZ2luZy5cbiAgICAgICAgICAgICAgLy8gdGhpcy5sb2c/LihgJHt0YXJnZXQubmFtZX0uJHtTdHJpbmcocHJvcGVydHkpfWAsIGFyZ3MpO1xuICAgICAgICAgICAgICAvLyBtYXliZVJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsICgpID0+IHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLmxvZz8uKGAke3RhcmdldC5uYW1lfS4ke1N0cmluZyhwcm9wZXJ0eSl9IHN1Y2Nlc3NgLCBtYXliZVJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgIC8vIG1heWJlUmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLmxvZz8uKGAke3RhcmdldC5uYW1lfS4ke1N0cmluZyhwcm9wZXJ0eSl9IGVycm9yYCwgbWF5YmVSZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBTYXZlIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICB0aGlzLiNyZXF1ZXN0ID0gbWF5YmVSZXF1ZXN0O1xuXG4gICAgICAgICAgICAgIC8vIEFib3J0IHRoZSB0cmFuc2FjdGlvbiBvbiBlcnJvci5cbiAgICAgICAgICAgICAgbWF5YmVSZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWF5YmVSZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBtYXliZVJlcXVlc3QudHJhbnNhY3Rpb24uYWJvcnQoKTtcbiAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pOyAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgLy8gUmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHdyYXAobWF5YmVSZXF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXliZVJlcXVlc3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBkdXJhYmxlIFxuICAgKi9cbiAgYXN5bmMgc3luYyhkdXJhYmxlKSB7XG4gICAgaWYgKHRoaXMuI2NoYWluKSB7XG4gICAgICAvLyBUaGlzIHdhaXRzIGZvciBhbGwgSW5kZXhlZERCIGNhbGxzIHRvIGJlIG1hZGUuXG4gICAgICBhd2FpdCB0aGlzLiNjaGFpbjtcbiAgICAgIGlmIChkdXJhYmxlKSB7XG4gICAgICAgIC8vIFRoaXMgd2FpdHMgZm9yIHRoZSBmaW5hbCB0cmFuc2FjdGlvbiB0byBjb21taXQuXG4gICAgICAgIGF3YWl0IHRoaXMuI3R4Q29tcGxldGU7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jY2hhaW4gPSBudWxsO1xuICAgIHRoaXMuI3R4Q29tcGxldGUgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLiNyZXF1ZXN0ID0gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7SURCUmVxdWVzdH0gcmVxdWVzdCBcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiB3cmFwKHJlcXVlc3QpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgfSk7XG59XG5cbiIsIi8vIENvcHlyaWdodCAyMDIxIFJveSBULiBIYXNoaW1vdG8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbmltcG9ydCAqIGFzIFNRTGl0ZSBmcm9tICcuL3NxbGl0ZS1jb25zdGFudHMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcWxpdGUtY29uc3RhbnRzLmpzJztcblxuLyoqXG4gKiBOZWVkIHRvIGhhdmUgYSBzZXJpYWxpemVyIGZvciBiaWdpbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL2pzYmkvaXNzdWVzLzMwXG4gKi9cbmlmICh0eXBlb2YgQmlnSW50LnByb3RvdHlwZVsndG9KU09OJ10gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQmlnSW50LnByb3RvdHlwZVsndG9KU09OJ10gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICB9O1xufVxuXG5jb25zdCBNQVhfSU5UNjQgPSAweDdmZmZmZmZmZmZmZmZmZmZuO1xuY29uc3QgTUlOX0lOVDY0ID0gLTB4ODAwMDAwMDAwMDAwMDAwMG47XG5cbmNvbnN0IEFzeW5jRnVuY3Rpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGNsYXNzIFNRTGl0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxufVxuXG5jb25zdCBhc3luYyA9IHRydWU7XG5cblxuLyoqXG4gKiBCdWlsZHMgYSBKYXZhc2NyaXB0IEFQSSBmcm9tIHRoZSBFbXNjcmlwdGVuIG1vZHVsZS4gVGhpcyBBUEkgaXMgc3RpbGxcbiAqIGxvdy1sZXZlbCBhbmQgY2xvc2VseSBjb3JyZXNwb25kcyB0byB0aGUgQyBBUEkgZXhwb3J0ZWQgYnkgdGhlIG1vZHVsZSxcbiAqIGJ1dCBkaWZmZXJzIGluIHNvbWUgc3BlY2lmaWNzIGxpa2UgdGhyb3dpbmcgZXhjZXB0aW9ucyBvbiBlcnJvcnMuXG4gKiBAcGFyYW0geyp9IE1vZHVsZSBTUUxpdGUgRW1zY3JpcHRlbiBtb2R1bGVcbiAqIEByZXR1cm5zIHtTUUxpdGVBUEl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBGYWN0b3J5KE1vZHVsZSkge1xuICAvKiogQHR5cGUge1NRTGl0ZUFQSX0gKi8gY29uc3Qgc3FsaXRlMyA9IHt9O1xuXG4gIE1vZHVsZS5yZXRyeU9wcyA9IFtdO1xuICBjb25zdCBzcWxpdGVGcmVlQWRkcmVzcyA9IE1vZHVsZS5fZ2V0U3FsaXRlRnJlZSgpO1xuXG4gIC8vIEFsbG9jYXRlIHNvbWUgc3BhY2UgZm9yIDMyLWJpdCByZXR1cm5lZCB2YWx1ZXMuXG4gIGNvbnN0IHRtcCA9IE1vZHVsZS5fbWFsbG9jKDgpO1xuICBjb25zdCB0bXBQdHIgPSBbdG1wLCB0bXAgKyA0XTtcblxuICBjb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAvLyBDb252ZXJ0IGEgSlMgc3RyaW5nIHRvIGEgQyBzdHJpbmcuIHNxbGl0ZTNfbWFsbG9jIGlzIHVzZWQgdG8gYWxsb2NhdGVcbiAgLy8gbWVtb3J5ICh1c2Ugc3FsaXRlM19mcmVlIHRvIGRlYWxsb2NhdGUpLlxuICBmdW5jdGlvbiBjcmVhdGVVVEY4KHMpIHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gMDtcbiAgICBjb25zdCB1dGY4ID0gdGV4dEVuY29kZXIuZW5jb2RlKHMpO1xuICAgIGNvbnN0IHp0cyA9IE1vZHVsZS5fc3FsaXRlM19tYWxsb2ModXRmOC5ieXRlTGVuZ3RoICsgMSk7XG4gICAgTW9kdWxlLkhFQVBVOC5zZXQodXRmOCwgenRzKTtcbiAgICBNb2R1bGUuSEVBUFU4W3p0cyArIHV0ZjguYnl0ZUxlbmd0aF0gPSAwO1xuICAgIHJldHVybiB6dHM7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGUgMzItYml0IG51bWJlcnMgaW50byBhIDY0LWJpdCAoc2lnbmVkKSBCaWdJbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsbzMyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoaTMyXG4gICAqIEByZXR1cm5zIHtiaWdpbnR9XG4gICAqL1xuICBmdW5jdGlvbiBjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMikge1xuICAgIHJldHVybiAoQmlnSW50KGhpMzIpIDw8IDMybikgfCAoQmlnSW50KGxvMzIpICYgMHhmZmZmZmZmZm4pO1xuICB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIFNldHVwIHRhYmxlIGNoYW5nZSB1cGRhdGUgY2FsbGJhY2tcbiAgLy8gICovXG4gIC8vIHZhciBvblRhYmxlQ2hhbmdlZEZ1bmN0aW9uUG9pbnRlciA9IE1vZHVsZS5hZGRGdW5jdGlvbihvblRhYmxlVXBkYXRlKTtcbiAgLy8gdmFyIHBhc3NGblBvaW50ZXIgPSBNb2R1bGUuY3dyYXAoJ3Bhc3NGblBvaW50ZXInLCAndW5kZWZpbmVkJywgWydudW1iZXInXSk7XG4gIC8vIHBhc3NGblBvaW50ZXIob25UYWJsZUNoYW5nZWRGdW5jdGlvblBvaW50ZXIpO1xuICAvKipcbiAgICogQ29uY2F0ZW5hdGUgMzItYml0IG51bWJlcnMgYW5kIHJldHVybiBhcyBudW1iZXIgb3IgQmlnSW50LCBkZXBlbmRpbmdcbiAgICogb24gdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbG8zMlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGkzMlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfGJpZ2ludH1cbiAgICovXG4gIGNvbnN0IGN2dDMyeDJBc1NhZmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaGlNYXggPSBCaWdJbnQoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpID4+IDMybjtcbiAgICBjb25zdCBoaU1pbiA9IEJpZ0ludChOdW1iZXIuTUlOX1NBRkVfSU5URUdFUikgPj4gMzJuO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGxvMzIsIGhpMzIpIHtcbiAgICAgIGlmIChoaTMyID4gaGlNYXggfHwgaGkzMiA8IGhpTWluKSB7XG4gICAgICAgIC8vIENhbid0IGJlIGV4cHJlc3NlZCBhcyBhIE51bWJlciBzbyB1c2UgQmlnSW50LlxuICAgICAgICByZXR1cm4gY3Z0MzJ4MlRvQmlnSW50KGxvMzIsIGhpMzIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ29tYmluZSB0aGUgdXBwZXIgYW5kIGxvd2VyIDMyLWJpdCBudW1iZXJzLiBUaGUgY29tcGxpY2F0aW9uIGlzXG4gICAgICAgIC8vIHRoYXQgbG8zMiBpcyBhIHNpZ25lZCBpbnRlZ2VyIHdoaWNoIG1ha2VzIG1hbmlwdWxhdGluZyBpdHMgYml0c1xuICAgICAgICAvLyBhIGxpdHRsZSB0cmlja3kgLSB0aGUgc2lnbiBiaXQgZ2V0cyBoYW5kbGVkIHNlcGFyYXRlbHkuXG4gICAgICAgIHJldHVybiBoaTMyICogMHgxMDAwMDAwMDAgKyAobG8zMiAmIDB4N2ZmZmZmZmYpIC0gKGxvMzIgJiAweDgwMDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRhdGFiYXNlcyA9IG5ldyBTZXQoKTtcbiAgZnVuY3Rpb24gdmVyaWZ5RGF0YWJhc2UoZGIpIHtcbiAgICBpZiAoIWRhdGFiYXNlcy5oYXMoZGIpKSB7XG4gICAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ25vdCBhIGRhdGFiYXNlJywgU1FMaXRlLlNRTElURV9NSVNVU0UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0bXRUb0RCID0gbmV3IE1hcCgpO1xuICBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCkge1xuICAgIGlmICghbWFwU3RtdFRvREIuaGFzKHN0bXQpKSB7XG4gICAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ25vdCBhIHN0YXRlbWVudCcsIFNRTGl0ZS5TUUxJVEVfTUlTVVNFKTtcbiAgICB9XG4gIH1cblxuICBzcWxpdGUzLmJpbmRfY29sbGVjdGlvbiA9IGZ1bmN0aW9uKHN0bXQsIGJpbmRpbmdzKSB7XG4gICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJpbmRpbmdzKTtcbiAgICBjb25zdCBuQmluZGluZ3MgPSBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX2NvdW50KHN0bXQpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5CaW5kaW5nczsgKytpKSB7XG4gICAgICBjb25zdCBrZXkgPSBpc0FycmF5ID8gaSAtIDEgOiBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX25hbWUoc3RtdCwgaSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGJpbmRpbmdzW2tleV07XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzcWxpdGUzLmJpbmQoc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU1FMaXRlLlNRTElURV9PSztcbiAgfTtcblxuICBzcWxpdGUzLmJpbmQgPSBmdW5jdGlvbihzdG10LCBpLCB2YWx1ZSkge1xuICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaWYgKHZhbHVlID09PSAodmFsdWUgfCAwKSkge1xuICAgICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfaW50KHN0bXQsIGksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX2RvdWJsZShzdG10LCBpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmJpbmRfdGV4dChzdG10LCBpLCB2YWx1ZSk7XG4gICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX2ludChzdG10LCBpLCB2YWx1ZSA/IDEgOiAwKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX2Jsb2Ioc3RtdCwgaSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMuYmluZF9udWxsKHN0bXQsIGkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX2ludDY0KHN0bXQsIGksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXhpc3RpbmcgYmluZGluZyAob3IgTlVMTCkgd2lsbCBiZSB1c2VkLlxuICAgICAgICAgIHJldHVybiBTUUxpdGUuU1FMSVRFX05PVElDRTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3Vua25vd24gYmluZGluZyBjb252ZXJ0ZWQgdG8gbnVsbCcsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gc3FsaXRlMy5iaW5kX251bGwoc3RtdCwgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3FsaXRlMy5iaW5kX2Jsb2IgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2Jsb2InO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBieXRlTGVuZ3RoID0gdmFsdWUuYnl0ZUxlbmd0aCA/PyB2YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBwdHIgPSBNb2R1bGUuX3NxbGl0ZTNfbWFsbG9jKGJ5dGVMZW5ndGgpO1xuICAgICAgTW9kdWxlLkhFQVBVOC5zdWJhcnJheShwdHIpLnNldCh2YWx1ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHB0ciwgYnl0ZUxlbmd0aCwgc3FsaXRlRnJlZUFkZHJlc3MpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX2NvdW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF9wYXJhbWV0ZXJfY291bnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfZG91YmxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF9kb3VibGUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpLCB2YWx1ZSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9pbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX2ludCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBpZiAodmFsdWUgPiAweDdmZmZmZmZmIHx8IHZhbHVlIDwgLTB4ODAwMDAwMDApIHJldHVybiBTUUxpdGUuU1FMSVRFX1JBTkdFO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGksIHZhbHVlKTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX2ludDY0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpLCB2YWx1ZSkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgaWYgKHZhbHVlID4gTUFYX0lOVDY0IHx8IHZhbHVlIDwgTUlOX0lOVDY0KSByZXR1cm4gU1FMaXRlLlNRTElURV9SQU5HRTtcblxuICAgICAgY29uc3QgbG8zMiA9IHZhbHVlICYgMHhmZmZmZmZmZm47XG4gICAgICBjb25zdCBoaTMyID0gdmFsdWUgPj4gMzJuO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpLCBOdW1iZXIobG8zMiksIE51bWJlcihoaTMyKSk7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgbWFwU3RtdFRvREIuZ2V0KHN0bXQpKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuYmluZF9udWxsID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfYmluZF9udWxsJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGkpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmJpbmRfcGFyYW1ldGVyX25hbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX3BhcmFtZXRlcl9uYW1lJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGkpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5iaW5kX3RleHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19iaW5kX3RleHQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm5uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGksIHZhbHVlKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCBwdHIgPSBjcmVhdGVVVEY4KHZhbHVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaSwgcHRyLCAtMSwgc3FsaXRlRnJlZUFkZHJlc3MpO1xuICAgICAgcmV0dXJuIGNoZWNrKGZuYW1lLCByZXN1bHQsIG1hcFN0bXRUb0RCLmdldChzdG10KSk7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNoYW5nZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jaGFuZ2VzJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRiKSB7XG4gICAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKGRiKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNsZWFyX2JpbmRpbmdzID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY2xlYXJfYmluZGluZ3MnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5sYXN0X2luc2VydF9pZCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2xhc3RfaW5zZXJ0X3Jvd2lkJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRiKSB7XG4gICAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKGRiKTtcbiAgICAgIC8vIHRyYWNlKGZuYW1lLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuICBcbiAgc3FsaXRlMy5jbG9zZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2Nsb3NlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oZGIpIHtcbiAgICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGYoZGIpO1xuICAgICAgZGF0YWJhc2VzLmRlbGV0ZShkYik7XG4gICAgICByZXR1cm4gY2hlY2soZm5hbWUsIHJlc3VsdCwgZGIpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW4gPSBmdW5jdGlvbihzdG10LCBpQ29sKSB7XG4gICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgIGNvbnN0IHR5cGUgPSBzcWxpdGUzLmNvbHVtbl90eXBlKHN0bXQsIGlDb2wpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0JMT0I6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLmNvbHVtbl9ibG9iKHN0bXQsIGlDb2wpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0ZMT0FUOlxuICAgICAgICByZXR1cm4gc3FsaXRlMy5jb2x1bW5fZG91YmxlKHN0bXQsIGlDb2wpO1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0lOVEVHRVI6XG4gICAgICAgIGNvbnN0IGxvMzIgPSBzcWxpdGUzLmNvbHVtbl9pbnQoc3RtdCwgaUNvbCk7XG4gICAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgICAgcmV0dXJuIGN2dDMyeDJBc1NhZmUobG8zMiwgaGkzMik7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfTlVMTDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfVEVYVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMuY29sdW1uX3RleHQoc3RtdCwgaUNvbCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgU1FMaXRlRXJyb3IoJ3Vua25vd24gdHlwZScsIHR5cGUpO1xuICAgIH1cbiAgfTtcblxuICBzcWxpdGUzLmNvbHVtbl9ibG9iID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2Jsb2InO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IG5CeXRlcyA9IHNxbGl0ZTMuY29sdW1uX2J5dGVzKHN0bXQsIGlDb2wpO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuSEVBUFU4LnN1YmFycmF5KGFkZHJlc3MsIGFkZHJlc3MgKyBuQnl0ZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX2J5dGVzID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2J5dGVzJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX2NvdW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2NvdW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5fZG91YmxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfY29sdW1uX2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9pbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgLy8gUmV0cmlldmUgaW50NjQgYnV0IHVzZSBvbmx5IHRoZSBsb3dlciAzMiBiaXRzLiBUaGUgdXBwZXIgMzItYml0cyBhcmVcbiAgICAvLyBhY2Nlc3NpYmxlIHdpdGggTW9kdWxlLmdldFRlbXBSZXQwKCkuXG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5faW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCwgaUNvbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5jb2x1bW5faW50NjQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5faW50NjQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQsIGlDb2wpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IGxvMzIgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgY29uc3QgaGkzMiA9IE1vZHVsZS5nZXRUZW1wUmV0MCgpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY3Z0MzJ4MlRvQmlnSW50KGxvMzIsIGhpMzIpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX25hbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fbmFtZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNvbHVtbl9uYW1lcyA9IGZ1bmN0aW9uKHN0bXQpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgY29uc3QgbkNvbHVtbnMgPSBzcWxpdGUzLmNvbHVtbl9jb3VudChzdG10KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5Db2x1bW5zOyArK2kpIHtcbiAgICAgIGNvbHVtbnMucHVzaChzcWxpdGUzLmNvbHVtbl9uYW1lKHN0bXQsIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH07XG5cbiAgc3FsaXRlMy5jb2x1bW5fdGV4dCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2NvbHVtbl90ZXh0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdG10LCBpQ29sKSB7XG4gICAgICB2ZXJpZnlTdGF0ZW1lbnQoc3RtdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKHN0bXQsIGlDb2wpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29sdW1uX3R5cGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19jb2x1bW5fdHlwZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RtdCwgaUNvbCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihzdG10LCBpQ29sKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmNyZWF0ZV9mdW5jdGlvbiA9IGZ1bmN0aW9uKGRiLCB6RnVuY3Rpb25OYW1lLCBuQXJnLCBlVGV4dFJlcCwgcEFwcCwgeEZ1bmMsIHhTdGVwLCB4RmluYWwpIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgXG4gICAgLy8gQ29udmVydCBTUUxpdGUgY2FsbGJhY2sgYXJndW1lbnRzIHRvIEphdmFTY3JpcHQtZnJpZW5kbHkgYXJndW1lbnRzLlxuICAgIGZ1bmN0aW9uIGFkYXB0KGYpIHtcbiAgICAgIHJldHVybiBmIGluc3RhbmNlb2YgQXN5bmNGdW5jdGlvbiA/XG4gICAgICAgIChhc3luYyAoY3R4LCBuLCB2YWx1ZXMpID0+IGYoY3R4LCBNb2R1bGUuSEVBUDMyLnN1YmFycmF5KHZhbHVlcyAvIDQsIHZhbHVlcyAvIDQgKyBuKSkpIDpcbiAgICAgICAgKChjdHgsIG4sIHZhbHVlcykgPT4gZihjdHgsIE1vZHVsZS5IRUFQMzIuc3ViYXJyYXkodmFsdWVzIC8gNCwgdmFsdWVzIC8gNCArIG4pKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLmNyZWF0ZV9mdW5jdGlvbihcbiAgICAgIGRiLFxuICAgICAgekZ1bmN0aW9uTmFtZSxcbiAgICAgIG5BcmcsXG4gICAgICBlVGV4dFJlcCxcbiAgICAgIHBBcHAsXG4gICAgICB4RnVuYyAmJiBhZGFwdCh4RnVuYyksXG4gICAgICB4U3RlcCAmJiBhZGFwdCh4U3RlcCksXG4gICAgICB4RmluYWwpO1xuICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19jcmVhdGVfZnVuY3Rpb24nLCByZXN1bHQsIGRiKTtcbiAgfTtcblxuICBzcWxpdGUzLmRhdGFfY291bnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19kYXRhX2NvdW50JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5leGVjID0gYXN5bmMgZnVuY3Rpb24oZGIsIHNxbCwgY2FsbGJhY2spIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiLCBzcWwpKSB7XG4gICAgICBsZXQgY29sdW1ucztcbiAgICAgIHdoaWxlICgoYXdhaXQgc3FsaXRlMy5zdGVwKHN0bXQpKSA9PT0gU1FMaXRlLlNRTElURV9ST1cpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY29sdW1ucyA9IGNvbHVtbnMgPz8gc3FsaXRlMy5jb2x1bW5fbmFtZXMoc3RtdCk7XG4gICAgICAgICAgY29uc3Qgcm93ID0gc3FsaXRlMy5yb3coc3RtdCk7XG4gICAgICAgICAgYXdhaXQgY2FsbGJhY2socm93LCBjb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU1FMaXRlLlNRTElURV9PSztcbiAgfTtcblxuICBzcWxpdGUzLmZpbmFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfZmluYWxpemUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ246bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbihzdG10KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHN0bXQpO1xuICAgICAgbWFwU3RtdFRvREIuZGVsZXRlKHN0bXQpXG5cbiAgICAgIC8vIERvbid0IHRocm93IG9uIGVycm9yIGhlcmUuIFR5cGljYWxseSB0aGUgZXJyb3IgaGFzIGFscmVhZHkgYmVlblxuICAgICAgLy8gdGhyb3duIGFuZCBmaW5hbGl6ZSgpIGlzIHBhcnQgb2YgdGhlIGNsZWFudXAuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5nZXRfYXV0b2NvbW1pdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2dldF9hdXRvY29tbWl0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRiKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKGRiKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLmxpYnZlcnNpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19saWJ2ZXJzaW9uJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCc6cycpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5saWJ2ZXJzaW9uX251bWJlciA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2xpYnZlcnNpb25fbnVtYmVyJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCc6bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBmKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5saW1pdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX2xpbWl0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGIsIGlkLCBuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoZGIsIGlkLCBuZXdWYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMub3Blbl92MiA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX29wZW5fdjInO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ3Nubm46bicpLCB7IGFzeW5jIH0pO1xuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbih6RmlsZW5hbWUsIGZsYWdzLCB6VmZzKSB7XG4gICAgICBmbGFncyA9IGZsYWdzIHx8IFNRTGl0ZS5TUUxJVEVfT1BFTl9DUkVBVEUgfCBTUUxpdGUuU1FMSVRFX09QRU5fUkVBRFdSSVRFO1xuICAgICAgelZmcyA9IGNyZWF0ZVVURjgoelZmcyk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBBbGxvdyByZXRyeSBvcGVyYXRpb25zLlxuICAgICAgICBjb25zdCByYyA9IGF3YWl0IHJldHJ5KCgpID0+IGYoekZpbGVuYW1lLCB0bXBQdHJbMF0sIGZsYWdzLCB6VmZzKSk7XG5cbiAgICAgICAgY29uc3QgZGIgPSBNb2R1bGUuZ2V0VmFsdWUodG1wUHRyWzBdLCAnKicpO1xuICAgICAgICBkYXRhYmFzZXMuYWRkKGRiKTtcblxuICAgICAgICBNb2R1bGUuY2NhbGwoJ1JlZ2lzdGVyRXh0ZW5zaW9uRnVuY3Rpb25zJywgJ251bWJlcicsIFsnbnVtYmVyJ10sIFtkYl0pO1xuICAgICAgICBjaGVjayhmbmFtZSwgcmMpO1xuICAgICAgICByZXR1cm4gZGI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBNb2R1bGUuX3NxbGl0ZTNfZnJlZSh6VmZzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucHJvZ3Jlc3NfaGFuZGxlciA9IGZ1bmN0aW9uKGRiLCBuUHJvZ3Jlc3NPcHMsIGhhbmRsZXIsIHVzZXJEYXRhKSB7XG4gICAgdmVyaWZ5RGF0YWJhc2UoZGIpO1xuICAgIE1vZHVsZS5wcm9ncmVzc19oYW5kbGVyKGRiLCBuUHJvZ3Jlc3NPcHMsIGhhbmRsZXIsIHVzZXJEYXRhKTtcbiAgfTs7XG5cbiAgc3FsaXRlMy5yZXNldCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc2V0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSwgeyBhc3luYyB9KTtcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oc3RtdCkge1xuICAgICAgdmVyaWZ5U3RhdGVtZW50KHN0bXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZihzdG10KTtcbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmVzdWx0LCBtYXBTdG10VG9EQi5nZXQoc3RtdCkpO1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHQgPSBmdW5jdGlvbihjb250ZXh0LCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpZiAodmFsdWUgPT09ICh2YWx1ZSB8IDApKSB7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfaW50KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcWxpdGUzLnJlc3VsdF9kb3VibGUoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgc3FsaXRlMy5yZXN1bHRfdGV4dChjb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHNxbGl0ZTMucmVzdWx0X2Jsb2IoY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgc3FsaXRlMy5yZXN1bHRfbnVsbChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgcmV0dXJuIHNxbGl0ZTMucmVzdWx0X2ludDY0KGNvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3Vua25vd24gcmVzdWx0IGNvbnZlcnRlZCB0byBudWxsJywgdmFsdWUpO1xuICAgICAgICAgIHNxbGl0ZTMucmVzdWx0X251bGwoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHNxbGl0ZTMucmVzdWx0X2Jsb2IgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM19yZXN1bHRfYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbm5ubjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihjb250ZXh0LCB2YWx1ZSkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHZhbHVlLmJ5dGVMZW5ndGggPz8gdmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3QgcHRyID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhieXRlTGVuZ3RoKTtcbiAgICAgIE1vZHVsZS5IRUFQVTguc3ViYXJyYXkocHRyKS5zZXQodmFsdWUpO1xuICAgICAgZihjb250ZXh0LCBwdHIsIGJ5dGVMZW5ndGgsIHNxbGl0ZUZyZWVBZGRyZXNzKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X2RvdWJsZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF9kb3VibGUnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgICBmKGNvbnRleHQsIHZhbHVlKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X2ludCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF9pbnQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25uOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRleHQsIHZhbHVlKSB7XG4gICAgICBmKGNvbnRleHQsIHZhbHVlKTsgLy8gdm9pZCByZXR1cm5cbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMucmVzdWx0X2ludDY0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCdubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA+IE1BWF9JTlQ2NCB8fCB2YWx1ZSA8IE1JTl9JTlQ2NCkgcmV0dXJuIFNRTGl0ZS5TUUxJVEVfUkFOR0U7XG5cbiAgICAgIGNvbnN0IGxvMzIgPSB2YWx1ZSAmIDB4ZmZmZmZmZmZuO1xuICAgICAgY29uc3QgaGkzMiA9IHZhbHVlID4+IDMybjtcbiAgICAgIGYoY29udGV4dCwgTnVtYmVyKGxvMzIpLCBOdW1iZXIoaGkzMikpOyAvLyB2b2lkIHJldHVyblxuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5yZXN1bHRfbnVsbCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3Jlc3VsdF9udWxsJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgIGYoY29udGV4dCk7IC8vIHZvaWQgcmV0dXJuXG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJlc3VsdF90ZXh0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfcmVzdWx0X3RleHQnO1xuICAgIGNvbnN0IGYgPSBNb2R1bGUuY3dyYXAoZm5hbWUsIC4uLmRlY2woJ25ubm46bicpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHB0ciA9IGNyZWF0ZVVURjgodmFsdWUpO1xuICAgICAgZihjb250ZXh0LCBwdHIsIC0xLCBzcWxpdGVGcmVlQWRkcmVzcyk7IC8vIHZvaWQgcmV0dXJuXG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnJvdyA9IGZ1bmN0aW9uKHN0bXQpIHtcbiAgICBjb25zdCByb3cgPSBbXTtcbiAgICBjb25zdCBuQ29sdW1ucyA9IHNxbGl0ZTMuZGF0YV9jb3VudChzdG10KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5Db2x1bW5zOyArK2kpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3FsaXRlMy5jb2x1bW4oc3RtdCwgaSk7XG5cbiAgICAgIC8vIENvcHkgYmxvYiBpZiBhbGlhc2luZyB2b2xhdGlsZSBXZWJBc3NlbWJseSBtZW1vcnkuIFRoaXMgYXZvaWRzIGFuXG4gICAgICAvLyB1bm5lY2Vzc2FyeSBjb3B5IGlmIHVzZXJzIG1vbmtleSBwYXRjaCBjb2x1bW5fYmxvYiB0byBjb3B5LlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcm93LnB1c2godmFsdWU/LmJ1ZmZlciA9PT0gTW9kdWxlLkhFQVBVOC5idWZmZXIgPyB2YWx1ZS5zbGljZSgpIDogdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIHNxbGl0ZTMuc2V0X2F1dGhvcml6ZXIgPSBmdW5jdGlvbihkYiwgeEF1dGgsIHBBcHApIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG5cbiAgICAvLyBDb252ZXJ0IFNRTGl0ZSBjYWxsYmFjayBhcmd1bWVudHMgdG8gSmF2YVNjcmlwdC1mcmllbmRseSBhcmd1bWVudHMuXG4gICAgZnVuY3Rpb24gY3Z0QXJncyhfLCBpQWN0aW9uLCBwMywgcDQsIHA1LCBwNikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgXyxcbiAgICAgICAgaUFjdGlvbixcbiAgICAgICAgTW9kdWxlLlVURjhUb1N0cmluZyhwMyksXG4gICAgICAgIE1vZHVsZS5VVEY4VG9TdHJpbmcocDQpLFxuICAgICAgICBNb2R1bGUuVVRGOFRvU3RyaW5nKHA1KSxcbiAgICAgICAgTW9kdWxlLlVURjhUb1N0cmluZyhwNilcbiAgICAgIF07XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGFwdChmKSB7XG4gICAgICByZXR1cm4gZiBpbnN0YW5jZW9mIEFzeW5jRnVuY3Rpb24gP1xuICAgICAgICAoYXN5bmMgKF8sIGlBY3Rpb24sIHAzLCBwNCwgcDUsIHA2KSA9PiBmKC4uLmN2dEFyZ3MoXywgaUFjdGlvbiwgcDMsIHA0LCBwNSwgcDYpKSkgOlxuICAgICAgICAoKF8sIGlBY3Rpb24sIHAzLCBwNCwgcDUsIHA2KSA9PiBmKC4uLmN2dEFyZ3MoXywgaUFjdGlvbiwgcDMsIHA0LCBwNSwgcDYpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gTW9kdWxlLnNldF9hdXRob3JpemVyKGRiLCBhZGFwdCh4QXV0aCksIHBBcHApO1xuICAgIHJldHVybiBjaGVjaygnc3FsaXRlM19zZXRfYXV0aG9yaXplcicsIHJlc3VsdCwgZGIpO1xuICB9O1xuXG4gIHNxbGl0ZTMuc3FsID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfc3FsJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOnMnKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYoc3RtdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy5zdGF0ZW1lbnRzID0gZnVuY3Rpb24oZGIsIHNxbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgcHJlcGFyZSA9IE1vZHVsZS5jd3JhcChcbiAgICAgICdzcWxpdGUzX3ByZXBhcmVfdjMnLFxuICAgICAgJ251bWJlcicsXG4gICAgICBbJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJ10sXG4gICAgICB7IGFzeW5jOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuIChhc3luYyBmdW5jdGlvbiooKSB7XG4gICAgICBjb25zdCBvbkZpbmFsbHkgPSBbXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEVuY29kZSBTUUwgc3RyaW5nIHRvIFVURi04LlxuICAgICAgICBjb25zdCB1dGY4ID0gdGV4dEVuY29kZXIuZW5jb2RlKHNxbCk7XG5cbiAgICAgICAgLy8gQ29weSBlbmNvZGVkIHN0cmluZyB0byBXZWJBc3NlbWJseSBtZW1vcnkuIFRoZSBTUUxpdGUgZG9jcyBzYXlcbiAgICAgICAgLy8gemVyby10ZXJtaW5hdGlvbiBpcyBhIG1pbm9yIG9wdGltaXphdGlvbiBzbyBhZGQgcm9vbSBmb3IgdGhhdC5cbiAgICAgICAgLy8gQWxzbyBhZGQgc3BhY2UgZm9yIHRoZSBzdGF0ZW1lbnQgaGFuZGxlIGFuZCBTUUwgdGFpbCBwb2ludGVyLlxuICAgICAgICBjb25zdCBhbGxvY1NpemUgPSB1dGY4LmJ5dGVMZW5ndGggLSAodXRmOC5ieXRlTGVuZ3RoICUgNCkgKyAxMjtcbiAgICAgICAgY29uc3QgcHpIZWFkID0gTW9kdWxlLl9zcWxpdGUzX21hbGxvYyhhbGxvY1NpemUpO1xuICAgICAgICBjb25zdCBwekVuZCA9IHB6SGVhZCArIHV0ZjguYnl0ZUxlbmd0aCArIDE7XG4gICAgICAgIG9uRmluYWxseS5wdXNoKCgpID0+IE1vZHVsZS5fc3FsaXRlM19mcmVlKHB6SGVhZCkpO1xuICAgICAgICBNb2R1bGUuSEVBUFU4LnNldCh1dGY4LCBwekhlYWQpO1xuICAgICAgICBNb2R1bGUuSEVBUFU4W3B6RW5kIC0gMV0gPSAwO1xuICBcbiAgICAgICAgLy8gVXNlIGV4dHJhIHNwYWNlIGZvciB0aGUgc3RhdGVtZW50IGhhbmRsZSBhbmQgU1FMIHRhaWwgcG9pbnRlci5cbiAgICAgICAgY29uc3QgcFN0bXQgPSBwekhlYWQgKyBhbGxvY1NpemUgLSA4O1xuICAgICAgICBjb25zdCBwelRhaWwgPSBwekhlYWQgKyBhbGxvY1NpemUgLSA0O1xuXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IHN0YXRlbWVudCBoYW5kbGVzIGFyZSBub3QgbGVha2VkLlxuICAgICAgICBsZXQgc3RtdDtcbiAgICAgICAgZnVuY3Rpb24gbWF5YmVGaW5hbGl6ZSgpIHtcbiAgICAgICAgICBpZiAoc3RtdCAmJiAhb3B0aW9ucy51bnNjb3BlZCkge1xuICAgICAgICAgICAgc3FsaXRlMy5maW5hbGl6ZShzdG10KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RtdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgb25GaW5hbGx5LnB1c2gobWF5YmVGaW5hbGl6ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb29wIG92ZXIgc3RhdGVtZW50cy5cbiAgICAgICAgTW9kdWxlLnNldFZhbHVlKHB6VGFpbCwgcHpIZWFkLCAnKicpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgLy8gUmVjbGFpbSByZXNvdXJjZXMgZm9yIHRoZSBwcmV2aW91cyBpdGVyYXRpb24uXG4gICAgICAgICAgbWF5YmVGaW5hbGl6ZSgpO1xuXG4gICAgICAgICAgLy8gQ2FsbCBzcWxpdGUzX3ByZXBhcmVfdjMoKSBmb3IgdGhlIG5leHQgc3RhdGVtZW50LlxuICAgICAgICAgIC8vIEFsbG93IHJldHJ5IG9wZXJhdGlvbnMuXG4gICAgICAgICAgY29uc3QgelRhaWwgPSBNb2R1bGUuZ2V0VmFsdWUocHpUYWlsLCAnKicpO1xuICAgICAgICAgIGNvbnN0IHJjID0gYXdhaXQgcmV0cnkoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBhcmUoXG4gICAgICAgICAgICAgIGRiLFxuICAgICAgICAgICAgICB6VGFpbCxcbiAgICAgICAgICAgICAgcHpFbmQgLSBwelRhaWwsXG4gICAgICAgICAgICAgIG9wdGlvbnMuZmxhZ3MgfHwgMCxcbiAgICAgICAgICAgICAgcFN0bXQsXG4gICAgICAgICAgICAgIHB6VGFpbCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAocmMgIT09IFNRTGl0ZS5TUUxJVEVfT0spIHtcbiAgICAgICAgICAgIGNoZWNrKCdzcWxpdGUzX3ByZXBhcmVfdjMnLCByYywgZGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBzdG10ID0gTW9kdWxlLmdldFZhbHVlKHBTdG10LCAnKicpO1xuICAgICAgICAgIGlmIChzdG10KSB7XG4gICAgICAgICAgICBtYXBTdG10VG9EQi5zZXQoc3RtdCwgZGIpO1xuICAgICAgICAgICAgeWllbGQgc3RtdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHN0bXQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2hpbGUgKG9uRmluYWxseS5sZW5ndGgpIHtcbiAgICAgICAgICBvbkZpbmFsbHkucG9wKCkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKCk7XG4gIH07XG5cbiAgc3FsaXRlMy5zdGVwID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfc3RlcCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJyksIHsgYXN5bmMgfSk7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKHN0bXQpIHtcbiAgICAgIHZlcmlmeVN0YXRlbWVudChzdG10KTtcblxuICAgICAgLy8gQWxsb3cgcmV0cnkgb3BlcmF0aW9ucy5cbiAgICAgIGNvbnN0IHJjID0gYXdhaXQgcmV0cnkoKCkgPT4gZihzdG10KSk7XG5cbiAgICAgIHJldHVybiBjaGVjayhmbmFtZSwgcmMsIG1hcFN0bXRUb0RCLmdldChzdG10KSwgW1NRTGl0ZS5TUUxJVEVfUk9XLCBTUUxpdGUuU1FMSVRFX0RPTkVdKTtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMuY29tbWl0X2hvb2sgPSBmdW5jdGlvbihkYiwgeENvbW1pdEhvb2spIHtcbiAgICB2ZXJpZnlEYXRhYmFzZShkYik7XG4gICAgTW9kdWxlLmNvbW1pdF9ob29rKGRiLCB4Q29tbWl0SG9vayk7XG4gIH07XG5cbiAgc3FsaXRlMy51cGRhdGVfaG9vayA9IGZ1bmN0aW9uKGRiLCB4VXBkYXRlSG9vaykge1xuICAgIHZlcmlmeURhdGFiYXNlKGRiKTtcblxuICAgIC8vIENvbnZlcnQgU1FMaXRlIGNhbGxiYWNrIGFyZ3VtZW50cyB0byBKYXZhU2NyaXB0LWZyaWVuZGx5IGFyZ3VtZW50cy5cbiAgICBmdW5jdGlvbiBjdnRBcmdzKGlVcGRhdGVUeXBlLCBkYk5hbWUsIHRibE5hbWUsIGxvMzIsIGhpMzIpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGlVcGRhdGVUeXBlLFxuICAgICAgICBNb2R1bGUuVVRGOFRvU3RyaW5nKGRiTmFtZSksXG4gICAgICAgIE1vZHVsZS5VVEY4VG9TdHJpbmcodGJsTmFtZSksXG5cdFx0Y3Z0MzJ4MlRvQmlnSW50KGxvMzIsIGhpMzIpXG4gICAgICBdO1xuICAgIH07XG4gICAgZnVuY3Rpb24gYWRhcHQoZikge1xuICAgICAgcmV0dXJuIGYgaW5zdGFuY2VvZiBBc3luY0Z1bmN0aW9uID9cbiAgICAgICAgKGFzeW5jIChpVXBkYXRlVHlwZSwgZGJOYW1lLCB0YmxOYW1lLCBsbzMyLCBoaTMyKSA9PiBmKC4uLmN2dEFyZ3MoaVVwZGF0ZVR5cGUsIGRiTmFtZSwgdGJsTmFtZSwgbG8zMiwgaGkzMikpKSA6XG4gICAgICAgICgoaVVwZGF0ZVR5cGUsIGRiTmFtZSwgdGJsTmFtZSwgbG8zMiwgaGkzMikgPT4gZiguLi5jdnRBcmdzKGlVcGRhdGVUeXBlLCBkYk5hbWUsIHRibE5hbWUsIGxvMzIsIGhpMzIpKSk7XG4gICAgfVxuXG4gICAgTW9kdWxlLnVwZGF0ZV9ob29rKGRiLCBhZGFwdCh4VXBkYXRlSG9vaykpO1xuICB9OztcblxuICBzcWxpdGUzLnZhbHVlID0gZnVuY3Rpb24ocFZhbHVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHNxbGl0ZTMudmFsdWVfdHlwZShwVmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBTUUxpdGUuU1FMSVRFX0JMT0I6XG4gICAgICAgIHJldHVybiBzcWxpdGUzLnZhbHVlX2Jsb2IocFZhbHVlKTtcbiAgICAgIGNhc2UgU1FMaXRlLlNRTElURV9GTE9BVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMudmFsdWVfZG91YmxlKHBWYWx1ZSk7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfSU5URUdFUjpcbiAgICAgICAgY29uc3QgbG8zMiA9IHNxbGl0ZTMudmFsdWVfaW50KHBWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGhpMzIgPSBNb2R1bGUuZ2V0VGVtcFJldDAoKTtcbiAgICAgICAgcmV0dXJuIGN2dDMyeDJBc1NhZmUobG8zMiwgaGkzMik7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfTlVMTDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFNRTGl0ZS5TUUxJVEVfVEVYVDpcbiAgICAgICAgcmV0dXJuIHNxbGl0ZTMudmFsdWVfdGV4dChwVmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKCd1bmtub3duIHR5cGUnLCB0eXBlKTtcbiAgICB9XG4gIH07XG5cbiAgc3FsaXRlMy52YWx1ZV9ibG9iID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfYmxvYic7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihwVmFsdWUpIHtcbiAgICAgIGNvbnN0IG5CeXRlcyA9IHNxbGl0ZTMudmFsdWVfYnl0ZXMocFZhbHVlKTtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBmKHBWYWx1ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBNb2R1bGUuSEVBUFU4LnN1YmFycmF5KGFkZHJlc3MsIGFkZHJlc3MgKyBuQnl0ZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfYnl0ZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV9ieXRlcyc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX2RvdWJsZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2RvdWJsZSc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX2ludCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmbmFtZSA9ICdzcWxpdGUzX3ZhbHVlX2ludDY0JztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmFsdWVfaW50NjQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV9pbnQ2NCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpuJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihwVmFsdWUpIHtcbiAgICAgIGNvbnN0IGxvMzIgPSBmKHBWYWx1ZSk7XG4gICAgICBjb25zdCBoaTMyID0gTW9kdWxlLmdldFRlbXBSZXQwKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjdnQzMngyVG9CaWdJbnQobG8zMiwgaGkzMik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0pKCk7XG5cbiAgc3FsaXRlMy52YWx1ZV90ZXh0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZuYW1lID0gJ3NxbGl0ZTNfdmFsdWVfdGV4dCc7XG4gICAgY29uc3QgZiA9IE1vZHVsZS5jd3JhcChmbmFtZSwgLi4uZGVjbCgnbjpzJykpO1xuICAgIHJldHVybiBmdW5jdGlvbihwVmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGYocFZhbHVlKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSkoKTtcblxuICBzcWxpdGUzLnZhbHVlX3R5cGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm5hbWUgPSAnc3FsaXRlM192YWx1ZV90eXBlJztcbiAgICBjb25zdCBmID0gTW9kdWxlLmN3cmFwKGZuYW1lLCAuLi5kZWNsKCduOm4nKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHBWYWx1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZihwVmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KSgpO1xuXG4gIHNxbGl0ZTMudmZzX3JlZ2lzdGVyID0gZnVuY3Rpb24odmZzLCBtYWtlRGVmYXVsdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IE1vZHVsZS52ZnNfcmVnaXN0ZXIodmZzLCBtYWtlRGVmYXVsdCk7XG4gICAgcmV0dXJuIGNoZWNrKCdzcWxpdGUzX3Zmc19yZWdpc3RlcicsIHJlc3VsdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2hlY2soZm5hbWUsIHJlc3VsdCwgZGIgPSBudWxsLCBhbGxvd2VkID0gW1NRTGl0ZS5TUUxJVEVfT0tdKSB7XG4gICAgaWYgKGFsbG93ZWQuaW5jbHVkZXMocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICBjb25zdCBtZXNzYWdlID0gZGIgPyBNb2R1bGUuY2NhbGwoJ3NxbGl0ZTNfZXJybXNnJywgJ3N0cmluZycsIFsnbnVtYmVyJ10sIFtkYl0pIDogZm5hbWU7XG4gICAgdGhyb3cgbmV3IFNRTGl0ZUVycm9yKG1lc3NhZ2UsIHJlc3VsdCk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXV0b21hdGljYWxseSByZXRyeSBmYWlsZWQgY2FsbHMgdGhhdFxuICAvLyBoYXZlIHBlbmRpbmcgcmV0cnkgb3BlcmF0aW9ucyB0aGF0IHNob3VsZCBhbGxvdyB0aGUgcmV0cnkgdG9cbiAgLy8gc3VjY2VlZC5cbiAgYXN5bmMgZnVuY3Rpb24gcmV0cnkoZikge1xuICAgIGxldCByYztcbiAgICBkbyB7XG4gICAgICAvLyBXYWl0IGZvciBhbGwgcGVuZGluZyByZXRyeSBvcGVyYXRpb25zIHRvIGNvbXBsZXRlLiBUaGlzIGlzXG4gICAgICAvLyBub3JtYWxseSBlbXB0eSBvbiB0aGUgZmlyc3QgbG9vcCBpdGVyYXRpb24uXG4gICAgICBpZiAoTW9kdWxlLnJldHJ5T3BzLmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKE1vZHVsZS5yZXRyeU9wcyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgTW9kdWxlLnJldHJ5T3BzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmMgPSBhd2FpdCBmKCk7XG5cbiAgICAgIC8vIFJldHJ5IG9uIGZhaWx1cmUgd2l0aCBuZXcgcGVuZGluZyByZXRyeSBvcGVyYXRpb25zLlxuICAgIH0gd2hpbGUgKHJjICYmIE1vZHVsZS5yZXRyeU9wcy5sZW5ndGgpO1xuICAgIHJldHVybiByYztcbiAgfVxuXG4gIHJldHVybiBzcWxpdGUzO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXNlIGEgbW9yZSBjb21wYWN0IHNpZ25hdHVyZSBzcGVjaWZpY2F0aW9uLlxuZnVuY3Rpb24gZGVjbChzKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBtID0gcy5tYXRjaCgvKFtuc0BdKik6KFtuc3ZAXSkvKTtcbiAgc3dpdGNoIChtWzJdKSB7XG4gICAgY2FzZSAnbic6XG4gICAgICByZXN1bHQucHVzaCgnbnVtYmVyJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzJzpcbiAgICAgIHJlc3VsdC5wdXNoKCdzdHJpbmcnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3YnOlxuICAgICAgcmVzdWx0LnB1c2gobnVsbCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGFyZ3MgPSBbXTtcbiAgZm9yIChsZXQgYyBvZiBtWzFdKSB7XG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICduJzpcbiAgICAgICAgYXJncy5wdXNoKCdudW1iZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgYXJncy5wdXNoKCdzdHJpbmcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKGFyZ3MpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gUHJpbWFyeSByZXN1bHQgY29kZXMuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL3Jlc2NvZGUuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9PSyA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0VSUk9SID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5URVJOQUwgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9QRVJNID0gMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUJPUlQgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9CVVNZID0gNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTE9DS0VEID0gNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9NRU0gPSA3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9SRUFET05MWSA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOVEVSUlVQVCA9IDk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSID0gMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPUlJVUFQgPSAxMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTk9URk9VTkQgPSAxMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRlVMTCA9IDEzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DQU5UT1BFTiA9IDE0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9QUk9UT0NPTCA9IDE1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9FTVBUWSA9IDE2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9TQ0hFTUEgPSAxNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfVE9PQklHID0gMTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlQgPSAxOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTUlTTUFUQ0ggPSAyMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTUlTVVNFID0gMjE7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PTEZTID0gMjI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FVVEggPSAyMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfRk9STUFUID0gMjQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX1JBTkdFID0gMjU7XG5leHBvcnQgY29uc3QgU1FMSVRFX05PVEFEQiA9IDI2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9OT1RJQ0UgPSAyNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfV0FSTklORyA9IDI4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9ST1cgPSAxMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RPTkUgPSAxMDE7XG5cbi8vIEV4dGVuZGVkIGVycm9yIGNvZGVzLlxuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9BQ0NFU1MgPSAzMzM4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9DSEVDS1JFU0VSVkVETE9DSyA9IDM1OTQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0NMT1NFID0gNDEwNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfREFUQSA9IDgyMDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RFTEVURSA9IDI1NzA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RFTEVURV9OT0VOVCA9IDU4OTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0RJUl9GU1lOQyA9IDEyOTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0ZTVEFUID0gMTgwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfRlNZTkMgPSAxMDM0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9HRVRURU1QUEFUSCA9IDY0MTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0xPQ0sgPSAzODUwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9OT01FTSA9IDMwODI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1JFQUQgPSAyNjY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1JETE9DSyA9IDIzMTQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1NFRUsgPSA1NjQyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9TSE9SVF9SRUFEID0gNTIyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9UUlVOQ0FURSA9IDE1NDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1VOTE9DSyA9IDIwNTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX1ZOT0RFID0gNjkyMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9FUlJfV1JJVEUgPSA3Nzg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0JFR0lOX0FUT01JQyA9IDc0MzQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPRVJSX0NPTU1JVF9BVE9NSUMgPSA3NjkwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0VSUl9ST0xMQkFDS19BVE9NSUMgPSA3OTQ2O1xuXG4vLyBPdGhlciBleHRlbmRlZCByZXN1bHQgY29kZXMuXG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfQ0hFQ0sgPSAyNzU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NPTlNUUkFJTlRfQ09NTUlUSE9PSyA9IDUzMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9GT1JFSUdOS0VZID0gNzg3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX0ZVTkNUSU9OID0gMTA0MztcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9OT1ROVUxMID0gMTI5OTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9QSU5ORUQgPSAyODM1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1BSSU1BUllLRVkgPSAxNTU1O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1JPV0lEID0gMjU3OTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9UUklHR0VSID0gMTgxMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ09OU1RSQUlOVF9VTklRVUUgPSAyMDY3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT05TVFJBSU5UX1ZUQUIgPSAyMzIzO1xuXG4vLyBPcGVuIGZsYWdzLlxuLy8gaHR0cHM6Ly93d3cuc3FsaXRlLm9yZy9jM3JlZi9jX29wZW5fYXV0b3Byb3h5Lmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9SRUFET05MWSA9IDB4MDAwMDAwMDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fUkVBRFdSSVRFID0gMHgwMDAwMDAwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9DUkVBVEUgPSAweDAwMDAwMDA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0RFTEVURU9OQ0xPU0UgPSAweDAwMDAwMDA4O1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX0VYQ0xVU0lWRSA9IDB4MDAwMDAwMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fQVVUT1BST1hZID0gMHgwMDAwMDAyMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9VUkkgPSAweDAwMDAwMDQwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX01FTU9SWSA9IDB4MDAwMDAwODA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTUFJTl9EQiA9IDB4MDAwMDAxMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fVEVNUF9EQiA9IDB4MDAwMDAyMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fVFJBTlNJRU5UX0RCID0gMHgwMDAwMDQwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9NQUlOX0pPVVJOQUwgPSAweDAwMDAwODAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX1RFTVBfSk9VUk5BTCA9IDB4MDAwMDEwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fU1VCSk9VUk5BTCA9IDB4MDAwMDIwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fU1VQRVJfSk9VUk5BTCA9IDB4MDAwMDQwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fTk9NVVRFWCA9IDB4MDAwMDgwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fRlVMTE1VVEVYID0gMHgwMDAxMDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9TSEFSRURDQUNIRSA9IDB4MDAwMjAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX09QRU5fUFJJVkFURUNBQ0hFID0gMHgwMDA0MDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfT1BFTl9XQUwgPSAweDAwMDgwMDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9PUEVOX05PRk9MTE9XID0gMHgwMTAwMDAwMDtcblxuLy8gTG9ja2luZyBsZXZlbHMuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfbG9ja19leGNsdXNpdmUuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX1NIQVJFRCA9IDE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xPQ0tfUkVTRVJWRUQgPSAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX1BFTkRJTkcgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MT0NLX0VYQ0xVU0lWRSA9IDQ7XG5cbi8vIERldmljZSBjaGFyYWN0ZXJpc3RpY3MuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfaW9jYXBfYXRvbWljLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDID0gMHgwMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDNTEyID0gMHgwMDAwMDAwMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDMUsgPSAweDAwMDAwMDA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMySyA9IDB4MDAwMDAwMDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX0FUT01JQzRLID0gMHgwMDAwMDAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQVRPTUlDOEsgPSAweDAwMDAwMDIwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMxNksgPSAweDAwMDAwMDQwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUMzMksgPSAweDAwMDAwMDgwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9BVE9NSUM2NEsgPSAweDAwMDAwMTAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9TQUZFX0FQUEVORCA9IDB4MDAwMDAyMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lPQ0FQX1NFUVVFTlRJQUwgPSAweDAwMDAwNDAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9VTkRFTEVUQUJMRV9XSEVOX09QRU4gPSAweDAwMDAwODAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JT0NBUF9QT1dFUlNBRkVfT1ZFUldSSVRFID0gMHgwMDAwMTAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfSU1NVVRBQkxFID0gMHgwMDAwMjAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU9DQVBfQkFUQ0hfQVRPTUlDID0gMHgwMDAwNDAwMDtcblxuLy8geEFjY2VzcyBmbGFncy5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19hY2Nlc3NfZXhpc3RzLmh0bWxcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUNDRVNTX0VYSVNUUyA9IDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FDQ0VTU19SRUFEV1JJVEUgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BQ0NFU1NfUkVBRCA9IDI7XG5cbi8vIEZpbGUgY29udHJvbCBvcGNvZGVzXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfZmNudGxfYmVnaW5fYXRvbWljX3dyaXRlLmh0bWwjc3FsaXRlZmNudGxiZWdpbmF0b21pY3dyaXRlXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0xPQ0tTVEFURSA9IDE7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9HRVRfTE9DS1BST1hZRklMRSA9IDI7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TRVRfTE9DS1BST1hZRklMRSA9IDM7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9MQVNUX0VSUk5PID0gNDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NJWkVfSElOVCA9IDU7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9DSFVOS19TSVpFID0gNjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0ZJTEVfUE9JTlRFUiA9IDc7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9TWU5DX09NSVRURUQgPSA4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0lOMzJfQVZfUkVUUlkgPSA5OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUEVSU0lTVF9XQUwgPSAxMDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX09WRVJXUklURSA9IDExOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVkZTTkFNRSA9IDEyOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUE9XRVJTQUZFX09WRVJXUklURSA9IDEzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUFJBR01BID0gMTQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9CVVNZSEFORExFUiA9IDE1OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVEVNUEZJTEVOQU1FID0gMTY7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9NTUFQX1NJWkUgPSAxODsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1RSQUNFID0gMTk7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9IQVNfTU9WRUQgPSAyMDsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NZTkMgPSAyMTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NPTU1JVF9QSEFTRVRXTyA9IDIyOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0lOMzJfU0VUX0hBTkRMRSA9IDIzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0FMX0JMT0NLID0gMjQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9aSVBWRlMgPSAyNTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1JCVSA9IDI2OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfVkZTX1BPSU5URVIgPSAyNzsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0pPVVJOQUxfUE9JTlRFUiA9IDI4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfV0lOMzJfR0VUX0hBTkRMRSA9IDI5OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUERCID0gMzA7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9CRUdJTl9BVE9NSUNfV1JJVEUgPSAzMTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NPTU1JVF9BVE9NSUNfV1JJVEUgPSAzMjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1JPTExCQUNLX0FUT01JQ19XUklURSA9IDMzOyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfTE9DS19USU1FT1VUID0gMzQ7IFxuZXhwb3J0IGNvbnN0IFNRTElURV9GQ05UTF9EQVRBX1ZFUlNJT04gPSAzNTsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX1NJWkVfTElNSVQgPSAzNjsgXG5leHBvcnQgY29uc3QgU1FMSVRFX0ZDTlRMX0NLUFRfRE9ORSA9IDM3OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfUkVTRVJWRV9CWVRFUyA9IDM4OyBcbmV4cG9ydCBjb25zdCBTUUxJVEVfRkNOVExfQ0tQVF9TVEFSVCA9IDM5O1xuXG4vLyBGdW5kYW1lbnRhbCBkYXRhdHlwZXMuXG4vLyBodHRwczovL3d3dy5zcWxpdGUub3JnL2MzcmVmL2NfYmxvYi5odG1sXG5leHBvcnQgY29uc3QgU1FMSVRFX0lOVEVHRVIgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9GTE9BVCA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX1RFWFQgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9CTE9CID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTlVMTCA9IDU7XG5cbi8vIFNwZWNpYWwgZGVzdHJ1Y3RvciBiZWhhdmlvci5cbi8vIGh0dHBzOi8vd3d3LnNxbGl0ZS5vcmcvYzNyZWYvY19zdGF0aWMuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9TVEFUSUMgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9UUkFOU0lFTlQgPSAtMTtcblxuLy8gVGV4dCBlbmNvZGluZ3MuXG4vLyBodHRwczovL3NxbGl0ZS5vcmcvYzNyZWYvY19hbnkuaHRtbFxuZXhwb3J0IGNvbnN0IFNRTElURV9VVEY4ID0gMTsgICAgIC8qIElNUDogUi0zNzUxNC0zNTU2NiAqL1xuZXhwb3J0IGNvbnN0IFNRTElURV9VVEYxNkxFID0gMjsgIC8qIElNUDogUi0wMzM3MS0zNzYzNyAqL1xuZXhwb3J0IGNvbnN0IFNRTElURV9VVEYxNkJFID0gMzsgIC8qIElNUDogUi01MTk3MS0zNDE1NCAqL1xuZXhwb3J0IGNvbnN0IFNRTElURV9VVEYxNiA9IDQ7ICAgIC8qIFVzZSBuYXRpdmUgYnl0ZSBvcmRlciAqL1xuXG4vLyBNb2R1bGUgY29uc3RyYWludCBvcHMuXG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfRVEgICAgICAgID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5ERVhfQ09OU1RSQUlOVF9HVCAgICAgICAgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9DT05TVFJBSU5UX0xFICAgICAgICA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTFQgICAgICAgID0gMTY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfR0UgICAgICAgID0gMzI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTUFUQ0ggICAgID0gNjQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTElLRSAgICAgID0gNjU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfR0xPQiAgICAgID0gNjY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfUkVHRVhQICAgID0gNjc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfTkUgICAgICAgID0gNjg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVNOT1QgICAgID0gNjk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVNOT1ROVUxMID0gNzA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVNOVUxMICAgID0gNzE7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfSVMgICAgICAgID0gNzI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0lOREVYX0NPTlNUUkFJTlRfRlVOQ1RJT04gID0gMTUwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTkRFWF9TQ0FOX1VOSVFVRSAgICAgICAgICA9IDE7ICAvKiBTY2FuIHZpc2l0cyBhdCBtb3N0ID0gMSByb3cgKi9cblxuLy8gRnVuY3Rpb24gZmxhZ3NcbmV4cG9ydCBjb25zdCBTUUxJVEVfREVURVJNSU5JU1RJQyA9IDB4MDAwMDAwODAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9ESVJFQ1RPTkxZICAgID0gMHgwMDAwODAwMDA7XG5leHBvcnQgY29uc3QgU1FMSVRFX1NVQlRZUEUgICAgICAgPSAweDAwMDEwMDAwMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfSU5OT0NVT1VTICAgICA9IDB4MDAwMjAwMDAwO1xuXG4vLyBTeW5jIGZsYWdzXG5leHBvcnQgY29uc3QgU1FMSVRFX1NZTkNfTk9STUFMICAgPSAweDAwMDAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TWU5DX0ZVTEwgICAgID0gMHgwMDAwMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfU1lOQ19EQVRBT05MWSA9IDB4MDAwMTA7XG5cbi8vIEF1dGhvcml6ZXIgYWN0aW9uIGNvZGVzXG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9JTkRFWCAgICAgICAgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEFCTEUgICAgICAgID0gMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RFTVBfSU5ERVggICA9IDM7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9URU1QX1RBQkxFICAgPSA0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVEVNUF9UUklHR0VSID0gNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1RFTVBfVklFVyAgICA9IDY7XG5leHBvcnQgY29uc3QgU1FMSVRFX0NSRUFURV9UUklHR0VSICAgICAgPSA3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9DUkVBVEVfVklFVyAgICAgICAgID0gODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfREVMRVRFICAgICAgICAgICAgICA9IDk7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfSU5ERVggICAgICAgICAgPSAxMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9UQUJMRSAgICAgICAgICA9IDExO1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RFTVBfSU5ERVggICAgID0gMTI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVEVNUF9UQUJMRSAgICAgPSAxMztcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9URU1QX1RSSUdHRVIgICA9IDE0O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1RFTVBfVklFVyAgICAgID0gMTU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RST1BfVFJJR0dFUiAgICAgICAgPSAxNjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfRFJPUF9WSUVXICAgICAgICAgICA9IDE3O1xuZXhwb3J0IGNvbnN0IFNRTElURV9JTlNFUlQgICAgICAgICAgICAgID0gMTg7XG5leHBvcnQgY29uc3QgU1FMSVRFX1BSQUdNQSAgICAgICAgICAgICAgPSAxOTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkVBRCAgICAgICAgICAgICAgICA9IDIwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9TRUxFQ1QgICAgICAgICAgICAgID0gMjE7XG5leHBvcnQgY29uc3QgU1FMSVRFX1RSQU5TQUNUSU9OICAgICAgICAgPSAyMjtcbmV4cG9ydCBjb25zdCBTUUxJVEVfVVBEQVRFICAgICAgICAgICAgICA9IDIzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9BVFRBQ0ggICAgICAgICAgICAgID0gMjQ7XG5leHBvcnQgY29uc3QgU1FMSVRFX0RFVEFDSCAgICAgICAgICAgICAgPSAyNTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQUxURVJfVEFCTEUgICAgICAgICA9IDI2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9SRUlOREVYICAgICAgICAgICAgID0gMjc7XG5leHBvcnQgY29uc3QgU1FMSVRFX0FOQUxZWkUgICAgICAgICAgICAgPSAyODtcbmV4cG9ydCBjb25zdCBTUUxJVEVfQ1JFQVRFX1ZUQUJMRSAgICAgICA9IDI5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9EUk9QX1ZUQUJMRSAgICAgICAgID0gMzA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0ZVTkNUSU9OICAgICAgICAgICAgPSAzMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfU0FWRVBPSU5UICAgICAgICAgICA9IDMyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9DT1BZICAgICAgICAgICAgICAgID0gMDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfUkVDVVJTSVZFICAgICAgICAgICA9IDMzO1xuXG4vLyBBdXRob3JpemVyIHJldHVybiBjb2Rlc1xuZXhwb3J0IGNvbnN0IFNRTElURV9ERU5ZICAgPSAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9JR05PUkUgPSAyO1xuXG4vLyBMaW1pdCBjYXRlZ29yaWVzXG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0xFTkdUSCAgICAgICAgICAgICAgPSAwO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9TUUxfTEVOR1RIICAgICAgICAgID0gMTtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfQ09MVU1OICAgICAgICAgICAgICA9IDI7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0VYUFJfREVQVEggICAgICAgICAgPSAzO1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9DT01QT1VORF9TRUxFQ1QgICAgID0gNDtcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfVkRCRV9PUCAgICAgICAgICAgICA9IDU7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX0ZVTkNUSU9OX0FSRyAgICAgICAgPSA2O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9BVFRBQ0hFRCAgICAgICAgICAgID0gNztcbmV4cG9ydCBjb25zdCBTUUxJVEVfTElNSVRfTElLRV9QQVRURVJOX0xFTkdUSCA9IDg7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1ZBUklBQkxFX05VTUJFUiAgICAgPSA5O1xuZXhwb3J0IGNvbnN0IFNRTElURV9MSU1JVF9UUklHR0VSX0RFUFRIICAgICAgID0gMTA7XG5leHBvcnQgY29uc3QgU1FMSVRFX0xJTUlUX1dPUktFUl9USFJFQURTICAgICAgPSAxMTtcblxuZXhwb3J0IGNvbnN0IFNRTElURV9QUkVQQVJFX1BFUlNJU1RFTlQgPSAweDAxO1xuZXhwb3J0IGNvbnN0IFNRTElURV9QUkVQQVJFX05PUk1BTElaRUQgPSAweDAyO1xuZXhwb3J0IGNvbnN0IFNRTElURV9QUkVQQVJFX05PX1ZUQUIgPSAweDA0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJ3YS1zcWxpdGUtanNwaVwiOlwiNmYwZDBmNTY1NjZiMmMxYTIwNWVcIixcIndhLXNxbGl0ZS1hc3luY1wiOlwiM2ZiMjI4MTUyYmVkNWExYWJmNDVcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBzZWxmLmxvY2F0aW9uICsgXCJcIjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dhX3NxbGl0ZV9ibGF6b3J3YXNtc3FsaXRlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dhX3NxbGl0ZV9ibGF6b3J3YXNtc3FsaXRlXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIvLyBAam91cm5leWFwcHMvd2Etc3FsaXRlIGlzIHRoZSBhY3RpdmVseS1tYWludGFpbmVkIFBvd2VyU3luYyBmb3JrIG9mIHJoYXNoaW1vdG8vd2Etc3FsaXRlLlxyXG4vLyBUaGUgb3JpZ2luYWwgbnBtIHBhY2thZ2UgKHdhLXNxbGl0ZUAxLjAuMCkgaXMgMiB5ZWFycyBzdGFsZSBhbmQgY29udGFpbnMgYSBXQVNNIG1lbW9yeVxyXG4vLyBPT0IgYnVnIHRoYXQgY2F1c2VzIFwiZGlzayBpbWFnZSBpcyBtYWxmb3JtZWRcIiBjb3JydXB0aW9uIG9uIGxhcmdlIHNlZWRzLlxyXG4vL1xyXG4vLyBCdWlsZCBzZWxlY3Rpb24gKGRldGVjdGVkIGF0IHJ1bnRpbWUgaW4gZW5zdXJlRW5naW5lKTpcclxuLy8gICBKU1BJIGJ1aWxkICh3YS1zcWxpdGUtanNwaS5tanMpICAg4oCUIENocm9tZSAxMzcrLCBFZGdlIDEzNysuIE5vIHN0YWNrLXJld3JpdGluZyBvdmVyaGVhZC5cclxuLy8gICBBc3luY2lmeSBidWlsZCAod2Etc3FsaXRlLWFzeW5jLm1qcykg4oCUIGZhbGxiYWNrIGZvciBTYWZhcmkgYW5kIG9sZGVyIGJyb3dzZXJzLlxyXG4vLyAgIFNhZmFyaSBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBKU1BJICh0cmFja2VkIGluIEludGVyb3AgMjAyNikuXHJcbi8vXHJcbi8vIE5vIHN0YXRpYyBpbXBvcnQgaGVyZSDigJQgZmFjdG9yeSBpcyBsb2FkZWQgZHluYW1pY2FsbHkgYmFzZWQgb24gV2ViQXNzZW1ibHkuU3VzcGVuZGluZyBzdXBwb3J0LlxyXG5pbXBvcnQgKiBhcyBTUUxpdGUgZnJvbSAnQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZSc7XHJcbmltcG9ydCB7IElEQkJhdGNoQXRvbWljVkZTIH0gZnJvbSAnQGpvdXJuZXlhcHBzL3dhLXNxbGl0ZS9zcmMvZXhhbXBsZXMvSURCQmF0Y2hBdG9taWNWRlMnO1xyXG5cclxubGV0IHNxbGl0ZTMgPSBudWxsO1xyXG4vLyBhc3luY01vZHVsZSBpcyBtb2R1bGUtc2NvcGVkIChub3QgbG9jYWwgdG8gZW5zdXJlRW5naW5lKSBzbyBpdCBjYW4gYmUgcGFzc2VkIHRvXHJcbi8vIElEQkJhdGNoQXRvbWljVkZTLmNyZWF0ZSgpLiBUaGUgbmV3IEFQSSByZXF1aXJlcyB0aGUgRW1zY3JpcHRlbiBtb2R1bGUgb2JqZWN0IHRvXHJcbi8vIHJlc29sdmUgaGVscGVycyBsaWtlIFVURjhUb1N0cmluZyB0aGF0IHRoZSBWRlMgdXNlcyBpbnRlcm5hbGx5LlxyXG5sZXQgYXN5bmNNb2R1bGUgPSBudWxsO1xyXG5sZXQgY3VycmVudERiID0gbnVsbDtcclxuLy8gTWFwIG9mIGZpbGVOYW1lIOKGkiBWRlMgaW5zdGFuY2Ugc28gd2UgY2FuIGNsb3NlIElEQiBjb25uZWN0aW9ucyB3aGVuIHRoZSBkYXRhYmFzZVxyXG4vLyBpcyBjbG9zZWQuIFRoaXMgcmVsZWFzZXMgdGhlIEluZGV4ZWREQiBsb2NrLCBhbGxvd2luZyBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UoKSB0byBzdWNjZWVkLlxyXG5jb25zdCByZWdpc3RlcmVkVmZzID0gbmV3IE1hcCgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlRW5naW5lKCkge1xyXG4gICAgaWYgKHNxbGl0ZTMpIHJldHVybjtcclxuICAgIGNvbnN0IHN1cHBvcnRzSnNwaSA9IHR5cGVvZiBXZWJBc3NlbWJseS5TdXNwZW5kaW5nICE9PSAndW5kZWZpbmVkJztcclxuICAgIGlmICghc3VwcG9ydHNKc3BpKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbd2Etc3FsaXRlXSBKU1BJIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyIOKAlCBmYWxsaW5nIGJhY2sgdG8gQXN5bmNpZnkgYnVpbGQuIFNhZmFyaSBhbmQgb2xkZXIgYnJvd3NlcnMgb25seS4nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGVmYXVsdDogU1FMaXRlQXN5bmNFU01GYWN0b3J5IH0gPSBzdXBwb3J0c0pzcGlcclxuICAgICAgICA/IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIndhLXNxbGl0ZS1qc3BpXCIgKi8gJ0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvZGlzdC93YS1zcWxpdGUtanNwaS5tanMnKVxyXG4gICAgICAgIDogYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwid2Etc3FsaXRlLWFzeW5jXCIgKi8gJ0Bqb3VybmV5YXBwcy93YS1zcWxpdGUvZGlzdC93YS1zcWxpdGUtYXN5bmMubWpzJyk7XHJcbiAgICBhc3luY01vZHVsZSA9IGF3YWl0IFNRTGl0ZUFzeW5jRVNNRmFjdG9yeSgpO1xyXG4gICAgc3FsaXRlMyA9IFNRTGl0ZS5GYWN0b3J5KGFzeW5jTW9kdWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdWx0VG9Sb3coY29sdW1ucywgcm93RGF0YSkge1xyXG4gICAgY29uc3Qgb2JqID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWwgPSByb3dEYXRhW2ldO1xyXG4gICAgICAgIC8vIFVpbnQ4QXJyYXkgKEJMT0IpIOKAlCBjb3B5IG91dCBvZiB2b2xhdGlsZSBXQVNNIG1lbW9yeSBpbW1lZGlhdGVseS5cclxuICAgICAgICAvLyBXaXRoIEpTUEksIE1vZHVsZS5IRUFQVTggbWF5IGJlIHJlcGxhY2VkIGJldHdlZW4gYXN5bmMgc3VzcGVuc2lvbnMsXHJcbiAgICAgICAgLy8gbGVhdmluZyBhbnkgc3ViYXJyYXkgdmlldyBzdGFsZS4gU2xpY2UgdG8gYSBzdGFuZGFsb25lIGNvcHkuXHJcbiAgICAgICAgb2JqW2NvbHVtbnNbaV1dID0gKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpID8gdmFsLnNsaWNlKCkgOiB2YWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVycyA9IHtcclxuICAgIGFzeW5jIG9wZW4oYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtkYk5hbWUsIGZpbGVOYW1lXSA9IGFyZ3M7XHJcbiAgICAgICAgYXdhaXQgZW5zdXJlRW5naW5lKCk7XHJcbiAgICAgICAgaWYgKCFyZWdpc3RlcmVkVmZzLmhhcyhmaWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmZzID0gYXdhaXQgSURCQmF0Y2hBdG9taWNWRlMuY3JlYXRlKGZpbGVOYW1lLCBhc3luY01vZHVsZSk7XHJcbiAgICAgICAgICAgIHNxbGl0ZTMudmZzX3JlZ2lzdGVyKHZmcyk7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRWZnMuc2V0KGZpbGVOYW1lLCB2ZnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50RGIgPSBhd2FpdCBzcWxpdGUzLm9wZW5fdjIoXHJcbiAgICAgICAgICAgIGRiTmFtZSxcclxuICAgICAgICAgICAgU1FMaXRlLlNRTElURV9PUEVOX0NSRUFURSB8IFNRTGl0ZS5TUUxJVEVfT1BFTl9SRUFEV1JJVEUgfCBTUUxpdGUuU1FMSVRFX09QRU5fVVJJLFxyXG4gICAgICAgICAgICBmaWxlTmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnREYjtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREYiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IHNxbGl0ZTMuY2xvc2UoY3VycmVudERiKTtcclxuICAgICAgICBjdXJyZW50RGIgPSBudWxsO1xyXG4gICAgICAgIC8vIENsb3NlIGFsbCBWRlMgSURCIGNvbm5lY3Rpb25zIHNvIHRoZSBJbmRleGVkREIgbG9jayBpcyByZWxlYXNlZC5cclxuICAgICAgICAvLyBSZXF1aXJlZCBiZWZvcmUgaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKCkgY2FuIHN1Y2NlZWQuXHJcbiAgICAgICAgZm9yIChjb25zdCB2ZnMgb2YgcmVnaXN0ZXJlZFZmcy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICB2ZnMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVnaXN0ZXJlZFZmcy5jbGVhcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGV4ZWN1dGUg4oCUIHJ1biBhIHNpbmdsZSBTUUwgc3RhdGVtZW50IChJTlNFUlQvVVBEQVRFL0RFTEVURS9EREwpLlxyXG4gICAgICogQHBhcmFtIHtbbnVtYmVyLCBzdHJpbmcsIE9iamVjdHxudWxsXX0gYXJncyAtIFtkYkNvbm4sIHNxbCwgcGFyYW1ldGVyc11cclxuICAgICAqIEByZXR1cm5zIHt7IGNoYW5nZXM6IG51bWJlciwgcmVzcG9uc2U6IHN0cmluZywgZGF0YTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIH19XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGV4ZWN1dGUoYXJncykge1xyXG4gICAgICAgIGNvbnN0IFtkYkNvbm4sIHNxbCwgcGFyYW1ldGVyc10gPSBhcmdzO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgY2hhbmdlczogMCwgcmVzcG9uc2U6IG51bGwsIGRhdGE6ICcnLCBlcnJvcjogJycgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiQ29ubiwgc3FsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRSZXN1bHQgPSBhd2FpdCBzcWxpdGUzLmJpbmRfY29sbGVjdGlvbihzdG10LCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmluZFJlc3VsdCAhPT0gU1FMaXRlLlNRTElURV9PSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50LiBDaGVjayB5b3VyIHN5bnRheCBvciBwYXJhbWV0ZXJzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoYXdhaXQgc3FsaXRlMy5zdGVwKHN0bXQpID09PSBTUUxpdGUuU1FMSVRFX1JPVykge31cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5yZXNwb25zZSA9ICdTUUxJVEVfRE9ORSc7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hhbmdlcyA9IHNxbGl0ZTMuY2hhbmdlcyhkYkNvbm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBxdWVyeSDigJQgZXhlY3V0ZSBhIFNRTCBTRUxFQ1QgYW5kIHJldHVybiBhbGwgcm93cyBhcyBvYmplY3RzLlxyXG4gICAgICogQHBhcmFtIHtbbnVtYmVyLCBzdHJpbmcsIE9iamVjdHxudWxsXX0gYXJncyAtIFtkYkNvbm4sIHNxbCwgcGFyYW1ldGVyc11cclxuICAgICAqIEByZXR1cm5zIHt7IGRhdGE6IE9iamVjdFtdLCBlcnJvcjogc3RyaW5nIH19XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHF1ZXJ5KGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBbZGJDb25uLCBzcWwsIHBhcmFtZXRlcnNdID0gYXJncztcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IGRhdGE6IFtdLCBlcnJvcjogJycgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHN0bXQgb2Ygc3FsaXRlMy5zdGF0ZW1lbnRzKGRiQ29ubiwgc3FsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRSZXN1bHQgPSBhd2FpdCBzcWxpdGUzLmJpbmRfY29sbGVjdGlvbihzdG10LCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmluZFJlc3VsdCAhPT0gU1FMaXRlLlNRTElURV9PSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXJyb3IgPSAnVW5hYmxlIHRvIHByZXBhcmUgc3RhdGVtZW50JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChhd2FpdCBzcWxpdGUzLnN0ZXAoc3RtdCkgPT09IFNRTGl0ZS5TUUxJVEVfUk9XKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zID8/IHNxbGl0ZTMuY29sdW1uX25hbWVzKHN0bXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBzcWxpdGUzLnJvdyhzdG10KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChyZXN1bHRUb1Jvdyhjb2x1bW5zLCByb3cpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGJ1bGtJbnNlcnRSYXdVcHNlcnQg4oCUIHVwc2VydCBmcm9tIFxcMC1kZWxpbWl0ZWQgcmF3IHBheWxvYWQuXHJcbiAgICAgKiBVc2VzIElOU0VSVCBJTlRPIC4uLiBPTiBDT05GTElDVChwaykgRE8gVVBEQVRFIFNFVCDigJQgcHJlc2VydmVzIGV4aXN0aW5nIHJvdyBkYXRhLlxyXG4gICAgICogVXNlIGZvciBpbmNyZW1lbnRhbCBzeW5jIHdoZXJlIHJvd3MgbWF5IGFscmVhZHkgZXhpc3QgbG9jYWxseS5cclxuICAgICAqIEZvciBpbml0aWFsIHNlZWRpbmcgaW50byBlbXB0eSB0YWJsZXMsIHVzZSBidWxrSW5zZXJ0UmF3IGluc3RlYWQuXHJcbiAgICAgKiBAcGFyYW0ge1tudW1iZXIsIHN0cmluZ119IGFyZ3MgLSBbZGJDb25uLCBwYXlsb2FkXVxyXG4gICAgICogQHJldHVybnMge3sgdG90YWxDaGFuZ2VzOiBudW1iZXIsIGVycm9yczogQXJyYXkgfX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgYnVsa0luc2VydFJhd1Vwc2VydChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGhhbmRsZXJzLl9idWxrSW5zZXJ0UmF3SW1wbChhcmdzLCB0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBidWxrSW5zZXJ0UmF3IOKAlCB6ZXJvLWRlc2VyaWFsaXphdGlvbiBzZWVkIHBhdGguXHJcbiAgICAgKiBVc2VzIElOU0VSVCBPUiBSRVBMQUNFIElOVE8g4oCUIG5vIGluZGV4IGxvb2t1cCwgZmFzdGVzdCBwYXRoIGZvciBlbXB0eSB0YWJsZXMuXHJcbiAgICAgKiBVc2UgZm9yIGluaXRpYWwgc2VlZGluZyBvbmx5LiBGb3IgaW5jcmVtZW50YWwgc3luYywgdXNlIGJ1bGtJbnNlcnRSYXdVcHNlcnQuXHJcbiAgICAgKiBAcGFyYW0ge1tudW1iZXIsIHN0cmluZ119IGFyZ3MgLSBbZGJDb25uLCBwYXlsb2FkXVxyXG4gICAgICogQHJldHVybnMge3sgdG90YWxDaGFuZ2VzOiBudW1iZXIsIGVycm9yczogQXJyYXkgfX1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgYnVsa0luc2VydFJhdyhhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGhhbmRsZXJzLl9idWxrSW5zZXJ0UmF3SW1wbChhcmdzLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIF9idWxrSW5zZXJ0UmF3SW1wbChhcmdzLCBpc1Vwc2VydCkge1xyXG4gICAgICAgIGNvbnN0IFtkYkNvbm4sIHBheWxvYWRdID0gYXJncztcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgXFwwLWRlbGltaXRlZCBmb3JtYXQgKG5vIG91dGVyIEpTT04g4oCUIHplcm8gQyMgZW5jb2Rpbmcgb3ZlcmhlYWQpXHJcbiAgICAgICAgLy8gSGVhZGVyOiB0YWJsZVxcMHByaW1hcnlLZXlcXDByb3dzUGVyU3RtdFxcMGNvbENvdW50XFwwY29sMVxcMC4uLlxcMGNvbE5cXDBcclxuICAgICAgICAvLyBCb2R5OiAgIHJhd0xpbmUxXFwwcmF3TGluZTJcXDAuLi4gKGVhY2ggaXMgYSBmdWxsIE5ESlNPTiByb3cgbGluZSlcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHBheWxvYWQuc3BsaXQoJ1xcMCcpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBjb25zdCB0YWJsZSAgICAgID0gcGFydHNbaSsrXTtcclxuICAgICAgICBjb25zdCBwcmltYXJ5S2V5ID0gcGFydHNbaSsrXTtcclxuICAgICAgICBjb25zdCByb3dzUGVyU3RtdCA9IHBhcnNlSW50KHBhcnRzW2krK10pO1xyXG4gICAgICAgIGNvbnN0IGNvbENvdW50ICAgPSBwYXJzZUludChwYXJ0c1tpKytdKTtcclxuICAgICAgICBjb25zdCBjb2x1bW5zICAgID0gcGFydHMuc2xpY2UoaSwgaSArIGNvbENvdW50KTtcclxuICAgICAgICBpICs9IGNvbENvdW50O1xyXG4gICAgICAgIC8vIFJlbWFpbmluZyBwYXJ0cyBhcmUgcmF3IE5ESlNPTiBsaW5lcyAobGFzdCBlbGVtZW50IGlzIGVtcHR5IHN0cmluZyBhZnRlciB0cmFpbGluZyBcXDApXHJcbiAgICAgICAgY29uc3QgdG90YWxMaW5lcyA9IHBhcnRzLmxlbmd0aCAtIDEgLSBpO1xyXG5cclxuICAgICAgICBpZiAodG90YWxMaW5lcyA9PT0gMCkgcmV0dXJuIHsgdG90YWxDaGFuZ2VzOiAwLCBlcnJvcnM6IFtdIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbExpc3QgPSBjb2x1bW5zLmpvaW4oJywnKTtcclxuICAgICAgICBsZXQgdG90YWxDaGFuZ2VzID0gMDtcclxuICAgICAgICBjb25zdCBlcnJvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlU2V0ID0gaXNVcHNlcnRcclxuICAgICAgICAgICAgPyBjb2x1bW5zLmZpbHRlcihjID0+IGMgIT09IHByaW1hcnlLZXkpLm1hcChjID0+IGAke2N9PWV4Y2x1ZGVkLiR7Y31gKS5qb2luKCcsJylcclxuICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBzcWxDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTcWwocm93Q291bnQpIHtcclxuICAgICAgICAgICAgaWYgKHNxbENhY2hlLmhhcyhyb3dDb3VudCkpIHJldHVybiBzcWxDYWNoZS5nZXQocm93Q291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlcnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dDb3VudDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcnMucHVzaCgnKCcgKyBuZXcgQXJyYXkoY29sQ291bnQpLmZpbGwoJz8nKS5qb2luKCcsJykgKyAnKScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNxbCA9IGlzVXBzZXJ0XHJcbiAgICAgICAgICAgICAgICA/IGBJTlNFUlQgSU5UTyAke3RhYmxlfSAoJHtjb2xMaXN0fSkgVkFMVUVTICR7cGxhY2Vob2xkZXJzLmpvaW4oJywnKX0gT04gQ09ORkxJQ1QoJHtwcmltYXJ5S2V5fSkgRE8gVVBEQVRFIFNFVCAke3VwZGF0ZVNldH1gXHJcbiAgICAgICAgICAgICAgICA6IGBJTlNFUlQgT1IgUkVQTEFDRSBJTlRPICR7dGFibGV9ICgke2NvbExpc3R9KSBWQUxVRVMgJHtwbGFjZWhvbGRlcnMuam9pbignLCcpfWA7XHJcbiAgICAgICAgICAgIHNxbENhY2hlLnNldChyb3dDb3VudCwgc3FsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNxbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVhY2ggcGFydCBpcyBhIHJhdyBOREpTT04gbGluZSDigJQgbWF5IGJlIFwicm93XCIgKHNpbmdsZSkgb3IgXCJyb3dzXCIgKGJ1bmRsZSkuXHJcbiAgICAgICAgLy8gRXhwYW5kIGFsbCBsaW5lcyBpbnRvIGEgZmxhdCBwYXJhbXMgYXJyYXkgZm9yIHRoZSBjdXJyZW50IHN0YXRlbWVudCBiYXRjaC5cclxuICAgICAgICAvLyBKUyBoYW5kbGVzIGV4cGFuc2lvbiBuYXRpdmVseSBhdCBWOCBzcGVlZCDigJQgemVybyBDIyBwZXItbGluZSBjb3N0LlxyXG4gICAgICAgIGNvbnN0IGFsbFBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGxldCB0b3RhbFJvd3MgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGxpID0gMDsgbGkgPCB0b3RhbExpbmVzOyBsaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVPYmogPSBKU09OLnBhcnNlKHBhcnRzW2kgKyBsaV0pO1xyXG4gICAgICAgICAgICBpZiAobGluZU9iai5yb3dzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFPYmogb2YgbGluZU9iai5yb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xDb3VudDsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFPYmpbY29sdW1uc1tjXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBhcmFtcy5wdXNoKHZhbCA9PT0gdHJ1ZSA/IDEgOiB2YWwgPT09IGZhbHNlID8gMCA6ICh2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IG51bGwpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSb3dzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhT2JqID0gbGluZU9iai5kYXRhID8/IGxpbmVPYmo7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbENvdW50OyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBkYXRhT2JqW2NvbHVtbnNbY11dO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFBhcmFtcy5wdXNoKHZhbCA9PT0gdHJ1ZSA/IDEgOiB2YWwgPT09IGZhbHNlID8gMCA6ICh2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IG51bGwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvdGFsUm93cysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFeGVjdXRlIGluIHJvd3NQZXJTdG10LXNpemVkIHN0YXRlbWVudCBiYXRjaGVzXHJcbiAgICAgICAgbGV0IHJvd0luZGV4ID0gMDtcclxuICAgICAgICB3aGlsZSAocm93SW5kZXggPCB0b3RhbFJvd3MpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RtdFJvd0NvdW50ID0gTWF0aC5taW4ocm93c1BlclN0bXQsIHRvdGFsUm93cyAtIHJvd0luZGV4KTtcclxuICAgICAgICAgICAgY29uc3Qgc3FsID0gZ2V0U3FsKHN0bXRSb3dDb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGFsbFBhcmFtcy5zbGljZShyb3dJbmRleCAqIGNvbENvdW50LCAocm93SW5kZXggKyBzdG10Um93Q291bnQpICogY29sQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3Qgc3RtdCBvZiBzcWxpdGUzLnN0YXRlbWVudHMoZGJDb25uLCBzcWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluZFJlc3VsdCA9IGF3YWl0IHNxbGl0ZTMuYmluZF9jb2xsZWN0aW9uKHN0bXQsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRSZXN1bHQgIT09IFNRTGl0ZS5TUUxJVEVfT0spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBpbmRleDogcm93SW5kZXgsIGVycm9yOiAnYmluZF9jb2xsZWN0aW9uIGZhaWxlZCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYXdhaXQgc3FsaXRlMy5zdGVwKHN0bXQpID09PSBTUUxpdGUuU1FMSVRFX1JPVykge31cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENoYW5nZXMgKz0gc3FsaXRlMy5jaGFuZ2VzKGRiQ29ubik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCh7IGluZGV4OiByb3dJbmRleCwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJvd0luZGV4ICs9IHN0bXRSb3dDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHRvdGFsQ2hhbmdlcywgZXJyb3JzLCBmaXJzdEVycm9yOiBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9yc1swXS5lcnJvciA6IG51bGwgfTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5zZWxmLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3NxbGl0ZS13b3JrZXJdIHVuY2F1Z2h0IGVycm9yOicsIGUubWVzc2FnZSB8fCBlKTtcclxufTtcclxuXHJcbnNlbGYub251bmhhbmRsZWRyZWplY3Rpb24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3NxbGl0ZS13b3JrZXJdIHVuaGFuZGxlZCByZWplY3Rpb246JywgZS5yZWFzb24pO1xyXG59O1xyXG5cclxuc2VsZi5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgeyBpZCwgbWV0aG9kLCBhcmdzIH0gPSBlLmRhdGE7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNbbWV0aG9kXTtcclxuICAgIGlmICghaGFuZGxlcikge1xyXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBpZCwgZXJyb3I6IGBVbmtub3duIG1ldGhvZDogJHttZXRob2R9YCB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZXIoYXJncyk7XHJcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkLCByZXN1bHQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQsIGVycm9yOiBlcnIubWVzc2FnZSB8fCBTdHJpbmcoZXJyKSB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbnNlbGYucG9zdE1lc3NhZ2UoeyB0eXBlOiAncmVhZHknIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=