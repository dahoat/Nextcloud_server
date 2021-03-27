(window["webpackJsonpSettings"] = window["webpackJsonpSettings"] || []).push([["vendors-settings-apps-settings-users"],{

/***/ "./node_modules/@nextcloud/browser-storage/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.string.starts-with.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBuilder = getBuilder;
exports.clearAll = clearAll;
exports.clearNonPersistent = clearNonPersistent;

var _storagebuilder = _interopRequireDefault(__webpack_require__(/*! ./storagebuilder */ "./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js"));

var _scopedstorage = _interopRequireDefault(__webpack_require__(/*! ./scopedstorage */ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBuilder(appId) {
  return new _storagebuilder.default(appId);
}

function clearStorage(storage, pred) {
  Object.keys(storage).filter(function (k) {
    return pred ? pred(k) : true;
  }).map(storage.removeItem.bind(storage));
}

function clearAll() {
  var storages = [window.sessionStorage, window.localStorage];
  storages.map(function (s) {
    return clearStorage(s);
  });
}

function clearNonPersistent() {
  var storages = [window.sessionStorage, window.localStorage];
  storages.map(function (s) {
    return clearStorage(s, function (k) {
      return !k.startsWith(_scopedstorage.default.GLOBAL_SCOPE_PERSISTENT);
    });
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.string.starts-with.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScopedStorage =
/*#__PURE__*/
function () {
  function ScopedStorage(scope, wrapped, persistent) {
    _classCallCheck(this, ScopedStorage);

    _defineProperty(this, "scope", void 0);

    _defineProperty(this, "wrapped", void 0);

    this.scope = "".concat(persistent ? ScopedStorage.GLOBAL_SCOPE_PERSISTENT : ScopedStorage.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(scope), "_");
    this.wrapped = wrapped;
  }

  _createClass(ScopedStorage, [{
    key: "scopeKey",
    value: function scopeKey(key) {
      return "".concat(this.scope).concat(key);
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this.wrapped.setItem(this.scopeKey(key), value);
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.wrapped.getItem(this.scopeKey(key));
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this.wrapped.removeItem(this.scopeKey(key));
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this = this;

      Object.keys(this.wrapped).filter(function (key) {
        return key.startsWith(_this.scope);
      }).map(this.wrapped.removeItem.bind(this.wrapped));
    }
  }]);

  return ScopedStorage;
}();

exports.default = ScopedStorage;

_defineProperty(ScopedStorage, "GLOBAL_SCOPE_VOLATILE", 'nextcloud_vol');

_defineProperty(ScopedStorage, "GLOBAL_SCOPE_PERSISTENT", 'nextcloud_per');
//# sourceMappingURL=scopedstorage.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scopedstorage = _interopRequireDefault(__webpack_require__(/*! ./scopedstorage */ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StorageBuilder =
/*#__PURE__*/
function () {
  function StorageBuilder(appId) {
    _classCallCheck(this, StorageBuilder);

    _defineProperty(this, "appId", void 0);

    _defineProperty(this, "persisted", false);

    _defineProperty(this, "clearedOnLogout", false);

    this.appId = appId;
  }

  _createClass(StorageBuilder, [{
    key: "persist",
    value: function persist() {
      var _persist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.persisted = _persist;
      return this;
    }
  }, {
    key: "clearOnLogout",
    value: function clearOnLogout() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.clearedOnLogout = clear;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return new _scopedstorage.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
    }
  }]);

  return StorageBuilder;
}();

exports.default = StorageBuilder;
//# sourceMappingURL=storagebuilder.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/a-function.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/a-function.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/an-object.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/an-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-includes.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-includes.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-iteration.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-iteration.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-method-has-species-support.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-species-create.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-species-create.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/bind-context.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/bind-context.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/classof-raw.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/classof-raw.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/copy-constructor-properties.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property-descriptor.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property-descriptor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/descriptors.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/descriptors.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/document-create-element.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/document-create-element.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/enum-bug-keys.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/get-built-in.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/get-built-in.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/hidden-keys.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/hidden-keys.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/ie8-dom-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/ie8-dom-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/indexed-object.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/indexed-object.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/inspect-source.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/inspect-source.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/internal-state.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/internal-state.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-array.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-forced.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-forced.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-pure.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-pure.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-regexp.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-regexp.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-symbol.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-symbol.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-weak-map.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-weak-map.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/not-a-regexp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/not-a-regexp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-define-property.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-define-property.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-names.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys-internal.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys-internal.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/own-keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/own-keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/path.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/path.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/redefine.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/redefine.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/require-object-coercible.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/require-object-coercible.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/set-global.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/set-global.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-key.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-key.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-store.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-store.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-absolute-index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-absolute-index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-indexed-object.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-indexed-object.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-integer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-integer.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-length.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-length.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-object.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-primitive.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-primitive.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/uid.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/uid.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/user-agent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/user-agent.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/v8-version.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/v8-version.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.concat.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.concat.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.filter.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.filter.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-iteration.js").filter;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.map.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.array.map.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-iteration.js").map;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].map.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.object.keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.object.keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.string.starts-with.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/node_modules/core-js/modules/es.string.starts-with.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/@nextcloud/browser-storage/node_modules/core-js/internals/is-pure.js");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/@nextcloud/capabilities/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@nextcloud/capabilities/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCapabilities = getCapabilities;

var _initialState = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.js");

function getCapabilities() {
  try {
    return (0, _initialState.loadState)('core', 'capabilities');
  } catch (error) {
    console.debug('Could not find capabilities initial state fall back to _oc_capabilities');

    if (!('_oc_capabilities' in window)) {
      return {};
    }

    return window['_oc_capabilities'];
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/initial-state/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@nextcloud/initial-state/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadState = loadState;

/**
 * @param app app ID, e.g. "mail"
 * @param key name of the property
 * @param fallback optional parameter to use as default value
 * @throws if the key can't be found
 */
function loadState(app, key, fallback) {
  var elem = document.querySelector("#initial-state-".concat(app, "-").concat(key));

  if (elem === null) {
    if (fallback !== undefined) {
      return fallback;
    }

    throw new Error("Could not find initial state ".concat(key, " of ").concat(app));
  }

  try {
    return JSON.parse(atob(elem.value));
  } catch (e) {
    throw new Error("Could not parse initial state ".concat(key, " of ").concat(app));
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/l10n/dist/gettext.js":
/*!******************************************************!*\
  !*** ./node_modules/@nextcloud/l10n/dist/gettext.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGettextBuilder = getGettextBuilder;

var _nodeGettext = _interopRequireDefault(__webpack_require__(/*! node-gettext */ "./node_modules/node-gettext/lib/gettext.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/@nextcloud/l10n/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GettextBuilder = /*#__PURE__*/function () {
  function GettextBuilder() {
    _classCallCheck(this, GettextBuilder);

    this.translations = {};
    this.debug = false;
  }

  _createClass(GettextBuilder, [{
    key: "setLanguage",
    value: function setLanguage(language) {
      this.locale = language;
      return this;
    }
  }, {
    key: "detectLocale",
    value: function detectLocale() {
      return this.setLanguage((0, _.getLanguage)().replace('-', '_'));
    }
  }, {
    key: "addTranslation",
    value: function addTranslation(language, data) {
      this.translations[language] = data;
      return this;
    }
  }, {
    key: "enableDebugMode",
    value: function enableDebugMode() {
      this.debug = true;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return new GettextWrapper(this.locale || 'en', this.translations, this.debug);
    }
  }]);

  return GettextBuilder;
}();

var GettextWrapper = /*#__PURE__*/function () {
  function GettextWrapper(locale, data, debug) {
    _classCallCheck(this, GettextWrapper);

    this.gt = new _nodeGettext.default({
      debug: debug,
      sourceLocale: 'en'
    });

    for (var key in data) {
      this.gt.addTranslations(key, 'messages', data[key]);
    }

    this.gt.setLocale(locale);
  }

  _createClass(GettextWrapper, [{
    key: "subtitudePlaceholders",
    value: function subtitudePlaceholders(translated, vars) {
      return translated.replace(/{([^{}]*)}/g, function (a, b) {
        var r = vars[b];

        if (typeof r === 'string' || typeof r === 'number') {
          return r.toString();
        } else {
          return a;
        }
      });
    }
  }, {
    key: "gettext",
    value: function gettext(original) {
      var placeholders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.subtitudePlaceholders(this.gt.gettext(original), placeholders);
    }
  }, {
    key: "ngettext",
    value: function ngettext(singular, plural, count) {
      var placeholders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this.subtitudePlaceholders(this.gt.ngettext(singular, plural, count).replace(/%n/g, count.toString()), placeholders);
    }
  }]);

  return GettextWrapper;
}();

function getGettextBuilder() {
  return new GettextBuilder();
}
//# sourceMappingURL=gettext.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/l10n/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@nextcloud/l10n/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocale = getLocale;
exports.getCanonicalLocale = getCanonicalLocale;
exports.getLanguage = getLanguage;
exports.translate = translate;
exports.translatePlural = translatePlural;
exports.getFirstDay = getFirstDay;
exports.getDayNames = getDayNames;
exports.getDayNamesShort = getDayNamesShort;
exports.getDayNamesMin = getDayNamesMin;
exports.getMonthNames = getMonthNames;
exports.getMonthNamesShort = getMonthNamesShort;

/// <reference types="@nextcloud/typings" />

/**
 * Returns the user's locale
 */
function getLocale() {
  if (typeof OC === 'undefined') {
    console.warn('No OC found');
    return 'en';
  }

  return OC.getLocale();
}

function getCanonicalLocale() {
  return getLocale().replace(/_/g, '-');
}
/**
 * Returns the user's language
 */


function getLanguage() {
  if (typeof OC === 'undefined') {
    console.warn('No OC found');
    return 'en';
  }

  return OC.getLanguage();
}

/**
 * Translate a string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} text the string to translate
 * @param {object} vars map of placeholder key to value
 * @param {number} number to replace %n with
 * @param {object} [options] options object
 * @return {string}
 */
function translate(app, text, vars, count, options) {
  if (typeof OC === 'undefined') {
    console.warn('No OC found');
    return text;
  }

  return OC.L10N.translate(app, text, vars, count, options);
}
/**
 * Translate a plural string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} textSingular the string to translate for exactly one object
 * @param {string} textPlural the string to translate for n objects
 * @param {number} count number to determine whether to use singular or plural
 * @param {Object} vars of placeholder key to value
 * @param {object} options options object
 * @return {string}
 */


function translatePlural(app, textSingular, textPlural, count, vars, options) {
  if (typeof OC === 'undefined') {
    console.warn('No OC found');
    return textSingular;
  }

  return OC.L10N.translatePlural(app, textSingular, textPlural, count, vars, options);
}
/**
 * Get the first day of the week
 *
 * @return {number}
 */


function getFirstDay() {
  if (typeof window.firstDay === 'undefined') {
    console.warn('No firstDay found');
    return 1;
  }

  return window.firstDay;
}
/**
 * Get a list of day names (full names)
 *
 * @return {string[]}
 */


function getDayNames() {
  if (typeof window.dayNames === 'undefined') {
    console.warn('No dayNames found');
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  return window.dayNames;
}
/**
 * Get a list of day names (short names)
 *
 * @return {string[]}
 */


function getDayNamesShort() {
  if (typeof window.dayNamesShort === 'undefined') {
    console.warn('No dayNamesShort found');
    return ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  }

  return window.dayNamesShort;
}
/**
 * Get a list of day names (minified names)
 *
 * @return {string[]}
 */


function getDayNamesMin() {
  if (typeof window.dayNamesMin === 'undefined') {
    console.warn('No dayNamesMin found');
    return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  }

  return window.dayNamesMin;
}
/**
 * Get a list of month names (full names)
 *
 * @return {string[]}
 */


function getMonthNames() {
  if (typeof window.monthNames === 'undefined') {
    console.warn('No monthNames found');
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  return window.monthNames;
}
/**
 * Get a list of month names (short names)
 *
 * @return {string[]}
 */


function getMonthNamesShort() {
  if (typeof window.monthNamesShort === 'undefined') {
    console.warn('No monthNamesShort found');
    return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  }

  return window.monthNamesShort;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppContent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppContent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(window,(function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=201)}({0:function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var e=r(n,4),t=e[1],o=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(s).concat([c]).join("\n")}return[t].join("\n")}},1:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},109:function(n,e){n.exports=__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js")},146:function(n,e,t){"use strict";var r=t(0),o=t.n(r),i=t(1),a=t.n(i)()(o.a);a.push([n.i,".app-content[data-v-2c9fa664]{position:relative;z-index:1000;flex-basis:100vw;min-width:0;min-height:100%;margin:0 !important;background-color:var(--color-main-background)}\n","",{version:3,sources:["webpack://./AppContent.vue"],names:[],mappings:"AAkFA,8BACC,iBAAkB,CAClB,YAAa,CACb,gBAAiB,CACjB,WAAY,CACZ,eAAgB,CAEhB,mBAAoB,CACpB,6CAA8C",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.app-content {\n\tposition: relative;\n\tz-index: 1000;\n\tflex-basis: 100vw;\n\tmin-width: 0;\n\tmin-height: 100%;\n\t// Overriding server styles TODO: cleanup!\n\tmargin: 0 !important;\n\tbackground-color: var(--color-main-background);\n}\n\n"],sourceRoot:""}]),e.a=a},2:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:h(p,e),references:1}),r.push(l)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=v||(v=u(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=u(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},201:function(n,e,t){"use strict";t.r(e);var r=t(109),o=t.n(r),i=t(29),a={name:"AppContent",props:{allowSwipeNavigation:{type:Boolean,default:!0}},mounted:function(){this.allowSwipeNavigation&&(this.mc=new o.a(this.$el,{cssProps:{userSelect:"text"}}),this.mc.on("swipeleft swiperight",this.handleSwipe))},beforeDestroy:function(){this.mc.off("swipeleft swiperight",this.handleSwipe)},methods:{handleSwipe:function(n){var e=n.srcEvent.pageX-n.deltaX,t=Math.abs(n.deltaX)>70;t&&e<40?Object(i.emit)("toggle-navigation",{open:!0}):t&&e<340&&Object(i.emit)("toggle-navigation",{open:!1})}}},c=t(2),s=t.n(c),u=t(146),l={insert:"head",singleton:!1},f=(s()(u.a,l),u.a.locals,t(3)),p=Object(f.a)(a,(function(){var n=this.$createElement;return(this._self._c||n)("main",{staticClass:"app-content no-snapper",attrs:{id:"app-content-vue"}},[this._t("default")],2)}),[],!1,null,"2c9fa664",null).exports;e.default=p},29:function(n,e){n.exports=__webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.es.js")},3:function(n,e,t){"use strict";function r(n,e,t,r,o,i,a,c){var s,u="function"==typeof n?n.options:n;if(e&&(u.render=e,u.staticRenderFns=t,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(n,e){return s.call(e),l(n,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:n,options:u}}t.d(e,"a",(function(){return r}))}})}));
//# sourceMappingURL=AppContent.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppNavigation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppNavigation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(A,n){ true?module.exports=n():undefined}(window,(function(){return function(A){var n={};function t(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return A[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=A,t.c=n,t.d=function(A,n,e){t.o(A,n)||Object.defineProperty(A,n,{enumerable:!0,get:e})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,n){if(1&n&&(A=t(A)),8&n)return A;if(4&n&&"object"==typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&n&&"string"!=typeof A)for(var i in A)t.d(e,i,function(n){return A[n]}.bind(null,i));return e},t.n=function(A){var n=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(n,"a",n),n},t.o=function(A,n){return Object.prototype.hasOwnProperty.call(A,n)},t.p="/dist/",t(t.s=202)}({0:function(A,n,t){"use strict";function e(A,n){return function(A){if(Array.isArray(A))return A}(A)||function(A,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(A)))return;var t=[],e=!0,i=!1,o=void 0;try{for(var g,c=A[Symbol.iterator]();!(e=(g=c.next()).done)&&(t.push(g.value),!n||t.length!==n);e=!0);}catch(A){i=!0,o=A}finally{try{e||null==c.return||c.return()}finally{if(i)throw o}}return t}(A,n)||function(A,n){if(!A)return;if("string"==typeof A)return i(A,n);var t=Object.prototype.toString.call(A).slice(8,-1);"Object"===t&&A.constructor&&(t=A.constructor.name);if("Map"===t||"Set"===t)return Array.from(A);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(A,n)}(A,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(A,n){(null==n||n>A.length)&&(n=A.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=A[t];return e}A.exports=function(A){var n=e(A,4),t=n[1],i=n[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),c="/*# ".concat(g," */"),a=i.sources.map((function(A){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(A," */")}));return[t].concat(a).concat([c]).join("\n")}return[t].join("\n")}},1:function(A,n,t){"use strict";A.exports=function(A){var n=[];return n.toString=function(){return this.map((function(n){var t=A(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(A,t,e){"string"==typeof A&&(A=[[null,A,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var g=this[o][0];null!=g&&(i[g]=!0)}for(var c=0;c<A.length;c++){var a=[].concat(A[c]);e&&i[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},10:function(A,n,t){"use strict";n.a="data:font/ttf;base64,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AAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtOTczN2ZmZlJlZ3VsYXJpY29uZm9udC12dWUtOTczN2ZmZmljb25mb250LXZ1ZS05NzM3ZmZmVmVyc2lvbiAxLjBpY29uZm9udC12dWUtOTczN2ZmZkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtADkANwAzADcAZgBmAGYAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},11:function(A,n,t){"use strict";n.a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLTk3MzdmZmYiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtOTczN2ZmZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0zMiAwIDUwMTEgNTAwMCIgdW5kZXJsaW5lLXRoaWNrbmVzcz0iMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSI1MCIgdW5pY29kZS1yYW5nZT0iVStlYTAxLWVhMTIiIC8+PG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjAiICAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1sZWZ0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMTsiIGQ9Ik0zNzUwIDM5MDYgbC0xNDA2IC0xNDA2IGwxNDA2IC0xNDA2IGwwIDMxMiBsLTEwOTQgMTA5NCBsMTA5NCAxMDk0IGwwIDMxMiBaTTIzNDQgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQiIHVuaWNvZGU9IiYjeGVhMDI7IiBkPSJNMTU2MyAyNTAwIGwxODc1IC0xODc1IGwwIC0zMTIgbC0yMTg4IDIxODcgbDIxODggMjE4OCBsMCAtMzEzIGwtMTg3NSAtMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodC1kb3VibGUiIHVuaWNvZGU9IiYjeGVhMDM7IiBkPSJNMTI1MCAxMDk0IGwxNDA2IDE0MDYgbC0xNDA2IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaTTI2NTYgMTA5NCBsMTQwNyAxNDA2IGwtMTQwNyAxNDA2IGwwIC0zMTIgbDEwOTQgLTEwOTQgbC0xMDk0IC0xMDk0IGwwIC0zMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcmlnaHQiIHVuaWNvZGU9IiYjeGVhMDQ7IiBkPSJNMzQzOCAyNTAwIGwtMTg3NSAxODc1IGwwIDMxMyBsMjE4NyAtMjE4OCBsLTIxODcgLTIxODcgbDAgMzEyIGwxODc1IDE4NzUgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYnJlYWRjcnVtYiIgdW5pY29kZT0iJiN4ZWEwNTsiIGQ9Ik0xNDggNTAwMCBsLTE0OCAtODUgbDEzOTQgLTI0MTUgbC0xMzk0IC0yNDE1IGwxNDggLTg1IGwxNDQzIDI1MDAgbC0xNDQzIDI1MDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY2hlY2ttYXJrIiB1bmljb2RlPSImI3hlYTA2OyIgZD0iTTQwNDUgMzk3MSBsLTIwNjEgLTIwNjEgbC0xMDI5IDEwMjkgbC00NDIgLTQ0MSBsMTQ3MSAtMTQ3MSBsMjUwMyAyNTAyIGwtNDQyIDQ0MiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjbG9zZSIgdW5pY29kZT0iJiN4ZWEwNzsiIGQ9Ik00Mzc1IDExNTYgbC01MzEgLTUzMSBsLTEzNDQgMTM0NCBsLTEzNDQgLTEzNDQgbC01MzEgNTMxIGwxMzQ0IDEzNDQgbC0xMzQ0IDEzNDQgbDUzMSA1MzEgbDEzNDQgLTEzNDQgbDEzNDQgMTM0NCBsNTMxIC01MzEgbC0xMzQ0IC0xMzQ0IGwxMzQ0IC0xMzQ0IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNvbmZpcm0iIHVuaWNvZGU9IiYjeGVhMDg7IiBkPSJNMjY1NiA0ODQ0IHEtMTAxIDAgLTE4MCAtNTcgcS03NCAtNTIgLTEwOSAtMTM4IHEtMzUgLTg2IC0xOSAtMTc1IHExOCAtOTYgOTAgLTE2NyBsMTQ5NSAtMTQ5NCBsLTM2MTYgMCBxLTc3IDEgLTEzOSAtMjYgcS01OCAtMjQgLTk5IC03MCBxLTM5IC00NCAtNTkgLTEwMSBxLTIwIC01NiAtMjAgLTExNiBxMCAtNjAgMjAgLTExNiBxMjAgLTU3IDU5IC0xMDEgcTQxIC00NiA5OSAtNzAgcTYyIC0yNyAxMzkgLTI1IGwzNjE2IDAgbC0xNDk1IC0xNDk1IHEtNTUgLTUzIC04MSAtMTE2IHEtMjQgLTU5IC0yMSAtMTIxIHEzIC01OCAzMCAtMTEzIHEyNSAtNTQgNjggLTk3IHE0MyAtNDMgOTYgLTY4IHE1NSAtMjYgMTE0IC0yOSBxNjIgLTMgMTIwIDIxIHE2MyAyNSAxMTYgODEgbDIwMjkgMjAyOCBxNTkgNjAgODAgMTQxIHEyMSA4MCAxIDE1OSBxLTIxIDgyIC04MSAxNDIgbC0yMDI5IDIwMjggcS00NCA0NSAtMTAyIDcwIHEtNTggMjUgLTEyMiAyNSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJpbmZvIiB1bmljb2RlPSImI3hlYTA5OyIgZD0iTTI0MjIgNDY4OCBxLTExMSAwIC0yMTMgLTQzIHEtOTggLTQyIC0xNzQgLTExNy41IHEtNzYgLTc1LjUgLTExNyAtMTc0LjUgcS00MyAtMTAxIC00MyAtMjEyLjUgcTAgLTExMS41IDQzIC0yMTIuNSBxNDEgLTk4IDExNyAtMTc0IHE3NiAtNzYgMTc0IC0xMTcgcTEwMiAtNDMgMjEzIC00MyBxMTExIDAgMjEzIDQzIHE5OCA0MSAxNzMuNSAxMTcgcTc1LjUgNzYgMTE3LjUgMTc0IHE0MyAxMDEgNDMgMjEyLjUgcTAgMTExLjUgLTQzIDIxMi41IHEtNDIgOTkgLTExNy41IDE3NC41IHEtNzUuNSA3NS41IC0xNzMuNSAxMTcuNSBxLTEwMiA0MyAtMjEzIDQzIFpNMTU2MyAzMTI1IHEtODYgMCAtMTU4IC00MyBxLTcxIC00MSAtMTEyIC0xMTIgcS00MyAtNzIgLTQzIC0xNTcuNSBxMCAtODUuNSA0MyAtMTU3LjUgcTQxIC03MSAxMTIgLTExMiBxNzIgLTQzIDE1OCAtNDMgbDYyNSAwIGwwIC0xNTYyIGwtNjI1IDAgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MyAtNDMgLTE1OCBxMCAtODUgNDMgLTE1OCBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MiBsMTg3NSAwIHE4NSAwIDE1NyA0MiBxNzEgNDEgMTEyIDExMiBxNDMgNzMgNDMgMTU4IHEwIDg1IC00MyAxNTggcS00MSA3MSAtMTEyIDExMiBxLTcyIDQzIC0xNTcgNDMgbC02MjUgMCBsMCAxODc1IHEwIDg1IC00MyAxNTcgcS00MSA3MSAtMTEyIDExMiBxLTczIDQzIC0xNTggNDMgbC05MzcgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtZW51IiB1bmljb2RlPSImI3hlYTBhOyIgZD0iTTYyNSA0Mzc1IGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMjgxMyBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFpNNjI1IDEyNTAgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtb3JlIiB1bmljb2RlPSImI3hlYTBiOyIgZD0iTTc4MSAzMDQ3IHExMTIgMCAyMTMgLTQzIHE5OCAtNDIgMTc0IC0xMTcuNSBxNzYgLTc1LjUgMTE3IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MSAtOTggLTExNyAtMTczLjUgcS03NiAtNzUuNSAtMTc0IC0xMTcuNSBxLTEwMSAtNDMgLTIxMi41IC00MyBxLTExMS41IDAgLTIxMy41IDQzIHEtOTggNDIgLTE3My41IDExNy41IHEtNzUuNSA3NS41IC0xMTcuNSAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQyIDk4IDExNy41IDE3My41IHE3NS41IDc1LjUgMTczLjUgMTE3LjUgcTEwMiA0MyAyMTMgNDMgWk0yNTAwIDMwNDcgcTExMSAwIDIxMyAtNDMgcTk4IC00MiAxNzMuNSAtMTE3LjUgcTc1LjUgLTc1LjUgMTE3LjUgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQyIC05OCAtMTE3LjUgLTE3My41IHEtNzUuNSAtNzUuNSAtMTczLjUgLTExNy41IHEtMTAyIC00MyAtMjEzIC00MyBxLTExMSAwIC0yMTMgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTQyMTkgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMuNSAtNDMgcS0xMTEuNSAwIC0yMTIuNSA0MyBxLTk4IDQyIC0xNzQgMTE3LjUgcS03NiA3NS41IC0xMTcgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MSA5OCAxMTcgMTczLjUgcTc2IDc1LjUgMTc0IDExNy41IHExMDEgNDMgMjEzIDQzIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImI3hlYTBjOyIgZD0iTTkzOCA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaTTI4MTMgNDA2MyBsMCAtMzEyNSBsMTI1MCAwIGwwIDMxMjUgbC0xMjUwIDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiN4ZWEwZDsiIGQ9Ik02MjUgNDM3NSBsMzc1MCAtMTg3NSBsLTM3NTAgLTE4NzUgbDAgMzc1MCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJ0cmlhbmdsZS1zIiB1bmljb2RlPSImI3hlYTBlOyIgZD0iTTEyNTAgMzEyNSBsMTI1MCAtMTI1MCBsMTI1MCAxMjQ4IGwtMjUwMCAyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWF3YXkiIHVuaWNvZGU9IiYjeGVhMGY7IiBkPSJNMjE1NiA0OTY5IHEtMzYwIC00NiAtNjk1IC0xOTcgcS0zMjYgLTE0NyAtNjAxIC0zODAgcS0yNzQgLTIzMSAtNDcyIC01MjggcS0yMDIgLTMwMSAtMzA5IC02NDIgcS0xMTAgLTM1MyAtMTEwIC03MjIgcTAgLTQwNiAxMjggLTc4OCBxMTIzIC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTM2OSAwIDcyMiAxMDcgcTM0MiAxMDQgNjQ0IDMwMSBxMjk4IDE5NCA1MzMgNDYzIHEyMzYgMjcwIDM4OSA1OTMgcTE1NiAzMzEgMjEyIDY5MiBxLTE4OCAtMjA0IC00MjMuNSAtMzUxIHEtMjM1LjUgLTE0NyAtNDk4LjUgLTIyNSBxLTI2OSAtODAgLTU0NyAtODAgcS0zMjIgMCAtNjI4IDEwMyBxLTI5NSA5OSAtNTQ4IDI4NiBxLTI1MSAxODQgLTQzNSA0MzUgcS0xODcgMjUzIC0yODYgNTQ4IHEtMTAzIDMwNiAtMTAzIDYyOCBxMCAyOTMgODAgNTY4IHE3OCAyNjkgMjI1LjUgNDk4LjUgcTE0Ny41IDIyOS41IDM1MC41IDQwMi41IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWRuZCIgdW5pY29kZT0iJiN4ZWExMDsiIGQ9Ik0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFpNMTU2MyAyOTY5IGwxODc1IDAgcTkxIDAgMTc4IC0zOCBxODQgLTM3IDE1MCAtMTAzIHE2NiAtNjYgMTAyIC0xNDkgcTM4IC04NyAzOCAtMTc5IHEwIC05MiAtMzggLTE3OSBxLTM2IC04MyAtMTAyIC0xNDkgcS02NiAtNjYgLTE1MCAtMTAzIHEtODcgLTM4IC0xNzggLTM4IGwtMTg3NSAwIHEtOTIgMCAtMTc5IDM4IHEtODQgMzcgLTE1MCAxMDMgcS02NiA2NiAtMTAyIDE0OSBxLTM4IDg3IC0zOCAxNzkgcTAgOTIgMzggMTc5IHEzNiA4MyAxMDIgMTQ5IHE2NiA2NiAxNTAgMTAzIHE4NyAzOCAxNzkgMzggWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtaW52aXNpYmxlIiB1bmljb2RlPSImI3hlYTExOyIgZD0iTTI1MDAgNTAwMCBxLTQwNiAwIC03ODggLTEyOCBxLTM3MCAtMTI0IC02ODYgLTM1NiBxLTMxMyAtMjI5IC01NDIgLTU0MiBxLTIzMiAtMzE2IC0zNTYgLTY4NiBxLTEyOCAtMzgyIC0xMjggLTc4OCBxMCAtNDA2IDEyOCAtNzg4IHExMjQgLTM3MCAzNTYgLTY4NiBxMjI5IC0zMTMgNTQyIC01NDIgcTMxNiAtMjMyIDY4NiAtMzU2IHEzODIgLTEyOCA3ODggLTEyOCBxNDA2IDAgNzg4IDEyOCBxMzcwIDEyNCA2ODYgMzU2IHEzMTMgMjI5IDU0MiA1NDIgcTIzMiAzMTYgMzU2IDY4NiBxMTI4IDM4MiAxMjggNzg4IHEwIDQwNiAtMTI4IDc4OCBxLTEyNCAzNzAgLTM1NiA2ODYgcS0yMjkgMzEzIC01NDIgNTQyIHEtMzE2IDIzMiAtNjg2IDM1NiBxLTM4MiAxMjggLTc4OCAxMjggWk0yNTAwIDQwMDAgcTMxMSAwIDU5MCAtMTE2IHEyNzEgLTExMiA0NzYuNSAtMzE3LjUgcTIwNS41IC0yMDUuNSAzMTcuNSAtNDc2LjUgcTExNiAtMjc5IDExNiAtNTkwIHEwIC0zMTEgLTExNiAtNTkwIHEtMTEyIC0yNzEgLTMxNy41IC00NzYuNSBxLTIwNS41IC0yMDUuNSAtNDc2LjUgLTMxNy41IHEtMjc5IC0xMTYgLTU5MCAtMTE2IHEtMzExIDAgLTU5MCAxMTYgcS0yNzEgMTEyIC00NzYuNSAzMTcuNSBxLTIwNS41IDIwNS41IC0zMTcuNSA0NzYuNSBxLTExNiAyNzkgLTExNiA1OTAgcTAgMzExIDExNiA1OTAgcTExMiAyNzEgMzE3LjUgNDc2LjUgcTIwNS41IDIwNS41IDQ3Ni41IDMxNy41IHEyNzkgMTE2IDU5MCAxMTYgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtb25saW5lIiB1bmljb2RlPSImI3hlYTEyOyIgZD0iTTE1MDAgMTUwMCBsMjAwMCAwIGwwIDIwMDAgbC0yMDAwIDAgbDAgLTIwMDAgWk0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFoiIC8+PC9mb250PjwvZGVmcz48L3N2Zz4="},116:function(A,n,t){"use strict";var e=t(0),i=t.n(e),o=t(1),g=t.n(o),c=t(4),a=t.n(c),r=t(8),M=t(9),I=t(10),B=t(11),s=g()(i.a),C=a()(r.a),E=a()(M.a),l=a()(I.a),T=a()(B.a);s.push([A.i,'@font-face{font-family:"iconfont-vue-9737fff";src:url('+C+");src:url("+C+') format("embedded-opentype"),url('+E+') format("woff"),url('+l+') format("truetype"),url('+T+') format("svg")}.icon[data-v-6069ba79]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-left[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right-double[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.breadcrumb[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.checkmark[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.close[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.confirm[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.info[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.menu[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.more[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.pause[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.play[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.triangle-s[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-away[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-dnd[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-invisible[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-online[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";content:""}.app-navigation-toggle[data-v-6069ba79]{position:absolute;top:0;right:0;margin-right:-44px;width:44px;height:44px;padding:14px;cursor:pointer;opacity:0.6;font-size:16px;line-height:17px}.app-navigation-toggle[data-v-6069ba79]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.app-navigation-toggle[data-v-6069ba79]:hover,.app-navigation-toggle[data-v-6069ba79]:focus{opacity:1}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./AppNavigationToggle.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,uBACE,iBAAkB,CAClB,eAAgB,CAFlB,gDAMM,kCAAmC,CACnC,WA5Ge,CAAO,yCA0GL,kCACJ,CAAsB,WA1G3B,CAAA,iDAyGU,kCACL,CAAA,WAzGG,CAAA,0CAwGL,kCACE,CAAA,WAxGJ,CAAA,yCAuGC,kCACG,CAAA,WACN,CAxGC,wCAsGC,kCACI,CAAA,WACb,CAAO,oCAFF,kCACQ,CAAA,WACb,CAAA,sCAFO,kCACM,CAAA,WACb,CAAA,mCAFI,kCACS,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,oCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WAAsB,CACnC,yCAPD,kCAMc,CAAA,WAAA,CAAsB,+CANpC,kCAMc,CAAA,WAAA,CAAA,8CANd,kCAMc,CAAA,WAAA,CAAA,oDANd,kCAMc,CAAA,WAAA,CAAA,iDANd,kCAMc,CAAA,WAAA,CAAA,wCCrDrB,iBAAsB,CACrB,KAAA,CAAA,OAAU,CAAA,kBAGV,CAAA,UAAA,CAAY,WACZ,CAAK,YACC,CCrCU,cAQH,CAAA,WDgCL,CAAA,cACC,CAAA,gBCrCE,CAAI,+CD2BhB,kCDvDC,CAAA,iBAAsB,CAkFnB,eAAY,CAAA,WACZ,CAAA,4FC5BJ,SAAA",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-9737fff": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-9737fff";\n   src: url(\'../iconfont-vue-9737fff.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-9737fff.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-9737fff.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-9737fff.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-9737fff.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-9737fff") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-9737fff";\n        content: iconfont-item("iconfont-vue-9737fff/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.app-navigation-toggle {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tmargin-right: - $clickable-area;\n\twidth: $clickable-area;\n\theight: $clickable-area;\n\tpadding: $icon-margin;\n\n\tcursor: pointer;\n\topacity: 0.6;\n\n\tfont-size: $icon-size;\n\tline-height: 17px;\n\t@include iconfont('menu');\n\n\t&:hover,\n\t&:focus {\n\t\topacity: $opacity_full;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),n.a=s},134:function(A,n,t){"use strict";var e={name:"AppNavigationToggle",props:{open:{type:Boolean,required:!0}},methods:{toggleNavigation:function(){this.$emit("update:open",!this.open)}}},i=t(2),o=t.n(i),g=t(116),c={insert:"head",singleton:!1},a=(o()(g.a,c),g.a.locals,t(3)),r=Object(a.a)(e,(function(){var A=this,n=A.$createElement;return(A._self._c||n)("a",{staticClass:"app-navigation-toggle",attrs:{href:"#","aria-expanded":A.open?"true":"false","aria-controls":"app-navigation-vue"},on:{click:function(n){return n.preventDefault(),A.toggleNavigation(n)},keydown:function(n){return!n.type.indexOf("key")&&A._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),A.toggleNavigation(n))}}})}),[],!1,null,"6069ba79",null);n.a=r.exports},147:function(A,n,t){"use strict";var e=t(0),i=t.n(e),o=t(1),g=t.n(o)()(i.a);g.push([A.i,".app-navigation[data-v-9f64425c]{will-change:transform;transition:transform var(--animation-quick),margin var(--animation-quick);width:300px;position:sticky;position:-webkit-sticky;top:50px;left:0;z-index:1800;height:calc(100vh - 50px);box-sizing:border-box;background-color:var(--color-main-background);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-right:1px solid var(--color-border);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0}.app-navigation--close[data-v-9f64425c]{margin-left:-300px;transform:translateX(-100%)}.app-navigation ul[data-v-9f64425c],.app-navigation__list[data-v-9f64425c]{position:relative;height:100%;width:inherit;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;display:flex;flex-direction:column}@media only screen and (max-width: 1024px){.app-navigation[data-v-9f64425c]:not(.app-navigation--close){margin-left:-300px}}\n","",{version:3,sources:["webpack://./AppNavigation.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA6IA,iCACC,qBAAsB,CACtB,yEAA2E,CAC3E,WC3FuB,CD4FvB,eAAgB,CAChB,uBAAwB,CACxB,QC/FmB,CDgGnB,MAAO,CAEP,YAAa,CACb,yBAAuC,CACvC,qBAAsB,CACtB,6CAA8C,CAC9C,wBAAyB,CACzB,qBAAsB,CACtB,oBAAqB,CACrB,gBAAiB,CACjB,0CAA2C,CAC3C,YAAa,CACb,qBAAsB,CACtB,WAAY,CACZ,aAAc,CAEd,wCACC,kBChHsB,CDiHtB,2BAA4B,CAzB9B,2EA+BE,iBAAkB,CAClB,WAAY,CACZ,aAAc,CACd,iBAAkB,CAClB,eAAgB,CAChB,qBAAsB,CACtB,YAAa,CACb,qBAAsB,CACtB,2CAKD,6DACC,kBCrIsB,CDsItB",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.app-navigation {\n\twill-change: transform;\n\ttransition: transform var(--animation-quick), margin var(--animation-quick);\n\twidth: $navigation-width;\n\tposition: sticky;\n\tposition: -webkit-sticky;\n\ttop: $header-height;\n\tleft: 0;\n\t// Above appcontent\n\tz-index: 1800;\n\theight: calc(100vh - #{$header-height});\n\tbox-sizing: border-box;\n\tbackground-color: var(--color-main-background);\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tborder-right: 1px solid var(--color-border);\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\n\t&--close {\n\t\tmargin-left: - $navigation-width;\n\t\ttransform: translateX(-100%);\n\t}\n\n\t//list of navigation items\n\tul,\n\t&__list {\n\t\tposition: relative;\n\t\theight: 100%;\n\t\twidth: inherit;\n\t\toverflow-x: hidden;\n\t\toverflow-y: auto;\n\t\tbox-sizing: border-box;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n\n// When on mobile, we make the navigation slide over the appcontent\n@media only screen and (max-width: $breakpoint-mobile) {\n\t.app-navigation:not(.app-navigation--close) {\n\t\tmargin-left: - $navigation-width;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),n.a=g},148:function(A,n){},2:function(A,n,t){"use strict";var e,i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},o=function(){var A={};return function(n){if(void 0===A[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}A[n]=t}return A[n]}}(),g=[];function c(A){for(var n=-1,t=0;t<g.length;t++)if(g[t].identifier===A){n=t;break}return n}function a(A,n){for(var t={},e=[],i=0;i<A.length;i++){var o=A[i],a=n.base?o[0]+n.base:o[0],r=t[a]||0,M="".concat(a," ").concat(r);t[a]=r+1;var I=c(M),B={css:o[1],media:o[2],sourceMap:o[3]};-1!==I?(g[I].references++,g[I].updater(B)):g.push({identifier:M,updater:l(B,n),references:1}),e.push(M)}return e}function r(A){var n=document.createElement("style"),e=A.attributes||{};if(void 0===e.nonce){var i=t.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(A){n.setAttribute(A,e[A])})),"function"==typeof A.insert)A.insert(n);else{var g=o(A.insert||"head");if(!g)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");g.appendChild(n)}return n}var M,I=(M=[],function(A,n){return M[A]=n,M.filter(Boolean).join("\n")});function B(A,n,t,e){var i=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(A.styleSheet)A.styleSheet.cssText=I(n,i);else{var o=document.createTextNode(i),g=A.childNodes;g[n]&&A.removeChild(g[n]),g.length?A.insertBefore(o,g[n]):A.appendChild(o)}}function s(A,n,t){var e=t.css,i=t.media,o=t.sourceMap;if(i?A.setAttribute("media",i):A.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}var C=null,E=0;function l(A,n){var t,e,i;if(n.singleton){var o=E++;t=C||(C=r(n)),e=B.bind(null,t,o,!1),i=B.bind(null,t,o,!0)}else t=r(n),e=s.bind(null,t,n),i=function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(t)};return e(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap)return;e(A=n)}else i()}}A.exports=function(A,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=a(A=A||[],n);return function(A){if(A=A||[],"[object Array]"===Object.prototype.toString.call(A)){for(var e=0;e<t.length;e++){var i=c(t[e]);g[i].references--}for(var o=a(A,n),r=0;r<t.length;r++){var M=c(t[r]);0===g[M].references&&(g[M].updater(),g.splice(M,1))}t=o}}}},202:function(A,n,t){"use strict";t.r(n);var e=t(29),i=t(134),o=t(36),g={name:"AppNavigation",components:{AppNavigationToggle:i.a},mixins:[o.default],data:function(){return{open:!0}},watch:{isMobile:function(){this.open=!this.isMobile}},mounted:function(){Object(e.subscribe)("toggle-navigation",this.toggleNavigationByEventBus),Object(e.emit)("navigation-toggled",{open:this.open})},unmounted:function(){this.mc.off("swipeleft swiperight"),this.mc.destroy(),Object(e.unsubscribe)("toggle-navigation",this.toggleNavigationByEventBus)},methods:{toggleNavigation:function(A){var n=this;this.open=void 0===A?!this.open:A;var t=getComputedStyle(document.body),i=parseInt(t.getPropertyValue("--animation-quick"))||100;setTimeout((function(){Object(e.emit)("navigation-toggled",{open:n.open})}),1.5*i)},toggleNavigationByEventBus:function(A){var n=A.open;this.toggleNavigation(n)}}},c=t(2),a=t.n(c),r=t(147),M={insert:"head",singleton:!1},I=(a()(r.a,M),r.a.locals,t(3)),B=t(148),s=t.n(B),C=Object(I.a)(g,(function(){var A=this,n=A.$createElement,t=A._self._c||n;return t("div",{staticClass:"app-navigation",class:{"app-navigation--close":!A.open},attrs:{id:"app-navigation-vue",role:"navigation"}},[t("AppNavigationToggle",{attrs:{open:A.open},on:{"update:open":A.toggleNavigation}}),A._v(" "),A._t("default"),A._v(" "),t("ul",{staticClass:"app-navigation__list"},[A._t("list")],2),A._v(" "),A._t("footer")],2)}),[],!1,null,"9f64425c",null);"function"==typeof s.a&&s()(C);var E=C.exports;
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */n.default=E},29:function(A,n){A.exports=__webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.es.js")},3:function(A,n,t){"use strict";function e(A,n,t,e,i,o,g,c){var a,r="function"==typeof A?A.options:A;if(n&&(r.render=n,r.staticRenderFns=t,r._compiled=!0),e&&(r.functional=!0),o&&(r._scopeId="data-v-"+o),g?(a=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),i&&i.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(g)},r._ssrRegister=a):i&&(a=c?function(){i.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:i),a)if(r.functional){r._injectStyles=a;var M=r.render;r.render=function(A,n){return a.call(n),M(A,n)}}else{var I=r.beforeCreate;r.beforeCreate=I?[].concat(I,a):[a]}return{exports:A,options:r}}t.d(n,"a",(function(){return e}))},36:function(A,n,t){"use strict";t.r(n);var e=t(5),i=new(t.n(e).a)({data:function(){return{isMobile:!1}},watch:{isMobile:function(A){this.$emit("changed",A)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){this.isMobile=document.documentElement.clientWidth<1024}}});n.default={data:function(){return{isMobile:!1}},mounted:function(){i.$on("changed",this.onIsMobileChanged),this.isMobile=i.isMobile},beforeDestroy:function(){i.$off("changed",this.onIsMobileChanged)},methods:{onIsMobileChanged:function(A){this.isMobile=A}}}},4:function(A,n,t){"use strict";A.exports=function(A,n){return n||(n={}),"string"!=typeof(A=A&&A.__esModule?A.default:A)?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),n.hash&&(A+=n.hash),/["'() \t\n]/.test(A)||n.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},5:function(A,n){A.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")},8:function(A,n,t){"use strict";n.a="data:application/vnd.ms-fontobject;base64,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"},9:function(A,n,t){"use strict";n.a="data:font/woff;base64,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PAE55eh8gAAAAQAAAAEAAIjNr6tfDzz1AAsTiAAAAADc3UwkAAAAANyMcCX/4AAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtOTczN2ZmZlJlZ3VsYXJpY29uZm9udC12dWUtOTczN2ZmZmljb25mb250LXZ1ZS05NzM3ZmZmVmVyc2lvbiAxLjBpY29uZm9udC12dWUtOTczN2ZmZkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtADkANwAzADcAZgBmAGYAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="}})}));
//# sourceMappingURL=AppNavigation.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppNavigationCounter.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppNavigationCounter.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(window,(function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=204)}({0:function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var e=r(n,4),t=e[1],o=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(s).concat([c]).join("\n")}return[t].join("\n")}},1:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},150:function(n,e,t){"use strict";var r=t(0),o=t.n(r),i=t(1),a=t.n(i)()(o.a);a.push([n.i,".app-navigation-entry__counter[data-v-794921ed]{font-size:calc(var(--default-font-size) * .8);overflow:hidden;width:fit-content;max-width:44px;text-align:center;text-overflow:ellipsis;line-height:1em;padding:4px 8px;border-radius:var(--border-radius-pill);background-color:var(--color-background-darker)}.app-navigation-entry__counter--highlighted[data-v-794921ed]{padding:4px 6px;color:var(--color-primary-text);background-color:var(--color-primary)}\n","",{version:3,sources:["webpack://./AppNavigationCounter.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA+DA,gDACC,6CAA8C,CAC9C,eAAgB,CAChB,iBAAkB,CAClB,cC1CoB,CD2CpB,iBAAkB,CAClB,sBAAuB,CACvB,eAAgB,CAChB,eAAgB,CAChB,uCAAwC,CACxC,+CAAgD,CAEhD,6DACC,eAAgB,CAChB,+BAAgC,CAChC,qCAAsC",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.app-navigation-entry__counter {\n\tfont-size: calc(var(--default-font-size) * .8);\n\toverflow: hidden;\n\twidth: fit-content;\n\tmax-width: $clickable-area;\n\ttext-align: center;\n\ttext-overflow: ellipsis;\n\tline-height: 1em;\n\tpadding: 4px 8px;\n\tborder-radius: var(--border-radius-pill);\n\tbackground-color: var(--color-background-darker);\n\n\t&--highlighted {\n\t\tpadding: 4px 6px;\n\t\tcolor: var(--color-primary-text);\n\t\tbackground-color: var(--color-primary);\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),e.a=a},151:function(n,e){},2:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:g(f,e),references:1}),r.push(l)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(n,e){var t,r,o;if(e.singleton){var i=v++;t=h||(h=u(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},204:function(n,e,t){"use strict";t.r(e);var r={name:"AppNavigationCounter",props:{highlighted:{type:Boolean,default:!1}}},o=t(2),i=t.n(o),a=t(150),c={insert:"head",singleton:!1},s=(i()(a.a,c),a.a.locals,t(3)),u=t(151),l=t.n(u),d=Object(s.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"app-navigation-entry__counter",class:{"app-navigation-entry__counter--highlighted":this.highlighted}},[this._t("default")],2)}),[],!1,null,"794921ed",null);"function"==typeof l.a&&l()(d);var f=d.exports;
/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=f},3:function(n,e,t){"use strict";function r(n,e,t,r,o,i,a,c){var s,u="function"==typeof n?n.options:n;if(e&&(u.render=e,u.staticRenderFns=t,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(n,e){return s.call(e),l(n,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:n,options:u}}t.d(e,"a",(function(){return r}))}})}));
//# sourceMappingURL=AppNavigationCounter.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/AppNavigationItem.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/AppNavigationItem.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(window,(function(){return function(n){var t={};function e(A){if(t[A])return t[A].exports;var o=t[A]={i:A,l:!1,exports:{}};return n[A].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,A){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:A})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var A=Object.create(null);if(e.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(A,o,function(t){return n[t]}.bind(null,o));return A},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/dist/",e(e.s=194)}([function(n,t,e){"use strict";function A(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],A=!0,o=!1,i=void 0;try{for(var a,r=n[Symbol.iterator]();!(A=(a=r.next()).done)&&(e.push(a.value),!t||e.length!==t);A=!0);}catch(n){o=!0,i=n}finally{try{A||null==r.return||r.return()}finally{if(o)throw i}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,A=new Array(t);e<t;e++)A[e]=n[e];return A}n.exports=function(n){var t=A(n,4),e=t[1],o=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(a," */"),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(s).concat([r]).join("\n")}return[e].join("\n")}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,A){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(A)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var r=0;r<n.length;r++){var s=[].concat(n[r]);A&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t,e){"use strict";var A,o=function(){return void 0===A&&(A=Boolean(window&&document&&document.all&&!window.atob)),A},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function r(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},A=[],o=0;o<n.length;o++){var i=n[o],s=t.base?i[0]+t.base:i[0],c=e[s]||0,l="".concat(s," ").concat(c);e[s]=c+1;var u=r(l),g={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(g)):a.push({identifier:l,updater:m(g,t),references:1}),A.push(l)}return A}function c(n){var t=document.createElement("style"),A=n.attributes||{};if(void 0===A.nonce){var o=e.nc;o&&(A.nonce=o)}if(Object.keys(A).forEach((function(n){t.setAttribute(n,A[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function g(n,t,e,A){var o=e?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(n.styleSheet)n.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function d(n,t,e){var A=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=A;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(A))}}var f=null,p=0;function m(n,t){var e,A,o;if(t.singleton){var i=p++;e=f||(f=c(t)),A=g.bind(null,e,i,!1),o=g.bind(null,e,i,!0)}else e=c(t),A=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return A(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;A(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var A=0;A<e.length;A++){var o=r(e[A]);a[o].references--}for(var i=s(n,t),c=0;c<e.length;c++){var l=r(e[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(n,t,e){"use strict";function A(n,t,e,A,o,i,a,r){var s,c="function"==typeof n?n.options:n;if(t&&(c.render=t,c.staticRenderFns=e,c._compiled=!0),A&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=r?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(n,t){return s.call(t),l(n,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:n,options:c}}e.d(t,"a",(function(){return A}))},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t){n.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js")},function(n,t){n.exports=__webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js")},function(n,t,e){"use strict";t.a="data:application/vnd.ms-fontobject;base64,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"},function(n,t,e){"use strict";t.a="data:font/woff;base64,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PAE55eh8gAAAAQAAAAEAAIjNr6tfDzz1AAsTiAAAAADc3UwkAAAAANyMcCX/4AAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtOTczN2ZmZlJlZ3VsYXJpY29uZm9udC12dWUtOTczN2ZmZmljb25mb250LXZ1ZS05NzM3ZmZmVmVyc2lvbiAxLjBpY29uZm9udC12dWUtOTczN2ZmZkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtADkANwAzADcAZgBmAGYAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},function(n,t,e){"use strict";t.a="data:font/ttf;base64,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AAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtOTczN2ZmZlJlZ3VsYXJpY29uZm9udC12dWUtOTczN2ZmZmljb25mb250LXZ1ZS05NzM3ZmZmVmVyc2lvbiAxLjBpY29uZm9udC12dWUtOTczN2ZmZkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtADkANwAzADcAZgBmAGYAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},function(n,t,e){"use strict";t.a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLTk3MzdmZmYiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtOTczN2ZmZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0zMiAwIDUwMTEgNTAwMCIgdW5kZXJsaW5lLXRoaWNrbmVzcz0iMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSI1MCIgdW5pY29kZS1yYW5nZT0iVStlYTAxLWVhMTIiIC8+PG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjAiICAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1sZWZ0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMTsiIGQ9Ik0zNzUwIDM5MDYgbC0xNDA2IC0xNDA2IGwxNDA2IC0xNDA2IGwwIDMxMiBsLTEwOTQgMTA5NCBsMTA5NCAxMDk0IGwwIDMxMiBaTTIzNDQgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQiIHVuaWNvZGU9IiYjeGVhMDI7IiBkPSJNMTU2MyAyNTAwIGwxODc1IC0xODc1IGwwIC0zMTIgbC0yMTg4IDIxODcgbDIxODggMjE4OCBsMCAtMzEzIGwtMTg3NSAtMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodC1kb3VibGUiIHVuaWNvZGU9IiYjeGVhMDM7IiBkPSJNMTI1MCAxMDk0IGwxNDA2IDE0MDYgbC0xNDA2IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaTTI2NTYgMTA5NCBsMTQwNyAxNDA2IGwtMTQwNyAxNDA2IGwwIC0zMTIgbDEwOTQgLTEwOTQgbC0xMDk0IC0xMDk0IGwwIC0zMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcmlnaHQiIHVuaWNvZGU9IiYjeGVhMDQ7IiBkPSJNMzQzOCAyNTAwIGwtMTg3NSAxODc1IGwwIDMxMyBsMjE4NyAtMjE4OCBsLTIxODcgLTIxODcgbDAgMzEyIGwxODc1IDE4NzUgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYnJlYWRjcnVtYiIgdW5pY29kZT0iJiN4ZWEwNTsiIGQ9Ik0xNDggNTAwMCBsLTE0OCAtODUgbDEzOTQgLTI0MTUgbC0xMzk0IC0yNDE1IGwxNDggLTg1IGwxNDQzIDI1MDAgbC0xNDQzIDI1MDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY2hlY2ttYXJrIiB1bmljb2RlPSImI3hlYTA2OyIgZD0iTTQwNDUgMzk3MSBsLTIwNjEgLTIwNjEgbC0xMDI5IDEwMjkgbC00NDIgLTQ0MSBsMTQ3MSAtMTQ3MSBsMjUwMyAyNTAyIGwtNDQyIDQ0MiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjbG9zZSIgdW5pY29kZT0iJiN4ZWEwNzsiIGQ9Ik00Mzc1IDExNTYgbC01MzEgLTUzMSBsLTEzNDQgMTM0NCBsLTEzNDQgLTEzNDQgbC01MzEgNTMxIGwxMzQ0IDEzNDQgbC0xMzQ0IDEzNDQgbDUzMSA1MzEgbDEzNDQgLTEzNDQgbDEzNDQgMTM0NCBsNTMxIC01MzEgbC0xMzQ0IC0xMzQ0IGwxMzQ0IC0xMzQ0IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNvbmZpcm0iIHVuaWNvZGU9IiYjeGVhMDg7IiBkPSJNMjY1NiA0ODQ0IHEtMTAxIDAgLTE4MCAtNTcgcS03NCAtNTIgLTEwOSAtMTM4IHEtMzUgLTg2IC0xOSAtMTc1IHExOCAtOTYgOTAgLTE2NyBsMTQ5NSAtMTQ5NCBsLTM2MTYgMCBxLTc3IDEgLTEzOSAtMjYgcS01OCAtMjQgLTk5IC03MCBxLTM5IC00NCAtNTkgLTEwMSBxLTIwIC01NiAtMjAgLTExNiBxMCAtNjAgMjAgLTExNiBxMjAgLTU3IDU5IC0xMDEgcTQxIC00NiA5OSAtNzAgcTYyIC0yNyAxMzkgLTI1IGwzNjE2IDAgbC0xNDk1IC0xNDk1IHEtNTUgLTUzIC04MSAtMTE2IHEtMjQgLTU5IC0yMSAtMTIxIHEzIC01OCAzMCAtMTEzIHEyNSAtNTQgNjggLTk3IHE0MyAtNDMgOTYgLTY4IHE1NSAtMjYgMTE0IC0yOSBxNjIgLTMgMTIwIDIxIHE2MyAyNSAxMTYgODEgbDIwMjkgMjAyOCBxNTkgNjAgODAgMTQxIHEyMSA4MCAxIDE1OSBxLTIxIDgyIC04MSAxNDIgbC0yMDI5IDIwMjggcS00NCA0NSAtMTAyIDcwIHEtNTggMjUgLTEyMiAyNSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJpbmZvIiB1bmljb2RlPSImI3hlYTA5OyIgZD0iTTI0MjIgNDY4OCBxLTExMSAwIC0yMTMgLTQzIHEtOTggLTQyIC0xNzQgLTExNy41IHEtNzYgLTc1LjUgLTExNyAtMTc0LjUgcS00MyAtMTAxIC00MyAtMjEyLjUgcTAgLTExMS41IDQzIC0yMTIuNSBxNDEgLTk4IDExNyAtMTc0IHE3NiAtNzYgMTc0IC0xMTcgcTEwMiAtNDMgMjEzIC00MyBxMTExIDAgMjEzIDQzIHE5OCA0MSAxNzMuNSAxMTcgcTc1LjUgNzYgMTE3LjUgMTc0IHE0MyAxMDEgNDMgMjEyLjUgcTAgMTExLjUgLTQzIDIxMi41IHEtNDIgOTkgLTExNy41IDE3NC41IHEtNzUuNSA3NS41IC0xNzMuNSAxMTcuNSBxLTEwMiA0MyAtMjEzIDQzIFpNMTU2MyAzMTI1IHEtODYgMCAtMTU4IC00MyBxLTcxIC00MSAtMTEyIC0xMTIgcS00MyAtNzIgLTQzIC0xNTcuNSBxMCAtODUuNSA0MyAtMTU3LjUgcTQxIC03MSAxMTIgLTExMiBxNzIgLTQzIDE1OCAtNDMgbDYyNSAwIGwwIC0xNTYyIGwtNjI1IDAgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MyAtNDMgLTE1OCBxMCAtODUgNDMgLTE1OCBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MiBsMTg3NSAwIHE4NSAwIDE1NyA0MiBxNzEgNDEgMTEyIDExMiBxNDMgNzMgNDMgMTU4IHEwIDg1IC00MyAxNTggcS00MSA3MSAtMTEyIDExMiBxLTcyIDQzIC0xNTcgNDMgbC02MjUgMCBsMCAxODc1IHEwIDg1IC00MyAxNTcgcS00MSA3MSAtMTEyIDExMiBxLTczIDQzIC0xNTggNDMgbC05MzcgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtZW51IiB1bmljb2RlPSImI3hlYTBhOyIgZD0iTTYyNSA0Mzc1IGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMjgxMyBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFpNNjI1IDEyNTAgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtb3JlIiB1bmljb2RlPSImI3hlYTBiOyIgZD0iTTc4MSAzMDQ3IHExMTIgMCAyMTMgLTQzIHE5OCAtNDIgMTc0IC0xMTcuNSBxNzYgLTc1LjUgMTE3IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MSAtOTggLTExNyAtMTczLjUgcS03NiAtNzUuNSAtMTc0IC0xMTcuNSBxLTEwMSAtNDMgLTIxMi41IC00MyBxLTExMS41IDAgLTIxMy41IDQzIHEtOTggNDIgLTE3My41IDExNy41IHEtNzUuNSA3NS41IC0xMTcuNSAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQyIDk4IDExNy41IDE3My41IHE3NS41IDc1LjUgMTczLjUgMTE3LjUgcTEwMiA0MyAyMTMgNDMgWk0yNTAwIDMwNDcgcTExMSAwIDIxMyAtNDMgcTk4IC00MiAxNzMuNSAtMTE3LjUgcTc1LjUgLTc1LjUgMTE3LjUgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQyIC05OCAtMTE3LjUgLTE3My41IHEtNzUuNSAtNzUuNSAtMTczLjUgLTExNy41IHEtMTAyIC00MyAtMjEzIC00MyBxLTExMSAwIC0yMTMgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTQyMTkgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMuNSAtNDMgcS0xMTEuNSAwIC0yMTIuNSA0MyBxLTk4IDQyIC0xNzQgMTE3LjUgcS03NiA3NS41IC0xMTcgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MSA5OCAxMTcgMTczLjUgcTc2IDc1LjUgMTc0IDExNy41IHExMDEgNDMgMjEzIDQzIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImI3hlYTBjOyIgZD0iTTkzOCA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaTTI4MTMgNDA2MyBsMCAtMzEyNSBsMTI1MCAwIGwwIDMxMjUgbC0xMjUwIDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiN4ZWEwZDsiIGQ9Ik02MjUgNDM3NSBsMzc1MCAtMTg3NSBsLTM3NTAgLTE4NzUgbDAgMzc1MCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJ0cmlhbmdsZS1zIiB1bmljb2RlPSImI3hlYTBlOyIgZD0iTTEyNTAgMzEyNSBsMTI1MCAtMTI1MCBsMTI1MCAxMjQ4IGwtMjUwMCAyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWF3YXkiIHVuaWNvZGU9IiYjeGVhMGY7IiBkPSJNMjE1NiA0OTY5IHEtMzYwIC00NiAtNjk1IC0xOTcgcS0zMjYgLTE0NyAtNjAxIC0zODAgcS0yNzQgLTIzMSAtNDcyIC01MjggcS0yMDIgLTMwMSAtMzA5IC02NDIgcS0xMTAgLTM1MyAtMTEwIC03MjIgcTAgLTQwNiAxMjggLTc4OCBxMTIzIC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTM2OSAwIDcyMiAxMDcgcTM0MiAxMDQgNjQ0IDMwMSBxMjk4IDE5NCA1MzMgNDYzIHEyMzYgMjcwIDM4OSA1OTMgcTE1NiAzMzEgMjEyIDY5MiBxLTE4OCAtMjA0IC00MjMuNSAtMzUxIHEtMjM1LjUgLTE0NyAtNDk4LjUgLTIyNSBxLTI2OSAtODAgLTU0NyAtODAgcS0zMjIgMCAtNjI4IDEwMyBxLTI5NSA5OSAtNTQ4IDI4NiBxLTI1MSAxODQgLTQzNSA0MzUgcS0xODcgMjUzIC0yODYgNTQ4IHEtMTAzIDMwNiAtMTAzIDYyOCBxMCAyOTMgODAgNTY4IHE3OCAyNjkgMjI1LjUgNDk4LjUgcTE0Ny41IDIyOS41IDM1MC41IDQwMi41IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWRuZCIgdW5pY29kZT0iJiN4ZWExMDsiIGQ9Ik0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFpNMTU2MyAyOTY5IGwxODc1IDAgcTkxIDAgMTc4IC0zOCBxODQgLTM3IDE1MCAtMTAzIHE2NiAtNjYgMTAyIC0xNDkgcTM4IC04NyAzOCAtMTc5IHEwIC05MiAtMzggLTE3OSBxLTM2IC04MyAtMTAyIC0xNDkgcS02NiAtNjYgLTE1MCAtMTAzIHEtODcgLTM4IC0xNzggLTM4IGwtMTg3NSAwIHEtOTIgMCAtMTc5IDM4IHEtODQgMzcgLTE1MCAxMDMgcS02NiA2NiAtMTAyIDE0OSBxLTM4IDg3IC0zOCAxNzkgcTAgOTIgMzggMTc5IHEzNiA4MyAxMDIgMTQ5IHE2NiA2NiAxNTAgMTAzIHE4NyAzOCAxNzkgMzggWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtaW52aXNpYmxlIiB1bmljb2RlPSImI3hlYTExOyIgZD0iTTI1MDAgNTAwMCBxLTQwNiAwIC03ODggLTEyOCBxLTM3MCAtMTI0IC02ODYgLTM1NiBxLTMxMyAtMjI5IC01NDIgLTU0MiBxLTIzMiAtMzE2IC0zNTYgLTY4NiBxLTEyOCAtMzgyIC0xMjggLTc4OCBxMCAtNDA2IDEyOCAtNzg4IHExMjQgLTM3MCAzNTYgLTY4NiBxMjI5IC0zMTMgNTQyIC01NDIgcTMxNiAtMjMyIDY4NiAtMzU2IHEzODIgLTEyOCA3ODggLTEyOCBxNDA2IDAgNzg4IDEyOCBxMzcwIDEyNCA2ODYgMzU2IHEzMTMgMjI5IDU0MiA1NDIgcTIzMiAzMTYgMzU2IDY4NiBxMTI4IDM4MiAxMjggNzg4IHEwIDQwNiAtMTI4IDc4OCBxLTEyNCAzNzAgLTM1NiA2ODYgcS0yMjkgMzEzIC01NDIgNTQyIHEtMzE2IDIzMiAtNjg2IDM1NiBxLTM4MiAxMjggLTc4OCAxMjggWk0yNTAwIDQwMDAgcTMxMSAwIDU5MCAtMTE2IHEyNzEgLTExMiA0NzYuNSAtMzE3LjUgcTIwNS41IC0yMDUuNSAzMTcuNSAtNDc2LjUgcTExNiAtMjc5IDExNiAtNTkwIHEwIC0zMTEgLTExNiAtNTkwIHEtMTEyIC0yNzEgLTMxNy41IC00NzYuNSBxLTIwNS41IC0yMDUuNSAtNDc2LjUgLTMxNy41IHEtMjc5IC0xMTYgLTU5MCAtMTE2IHEtMzExIDAgLTU5MCAxMTYgcS0yNzEgMTEyIC00NzYuNSAzMTcuNSBxLTIwNS41IDIwNS41IC0zMTcuNSA0NzYuNSBxLTExNiAyNzkgLTExNiA1OTAgcTAgMzExIDExNiA1OTAgcTExMiAyNzEgMzE3LjUgNDc2LjUgcTIwNS41IDIwNS41IDQ3Ni41IDMxNy41IHEyNzkgMTE2IDU5MCAxMTYgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtb25saW5lIiB1bmljb2RlPSImI3hlYTEyOyIgZD0iTTE1MDAgMTUwMCBsMjAwMCAwIGwwIDIwMDAgbC0yMDAwIDAgbDAgLTIwMDAgWk0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFoiIC8+PC9mb250PjwvZGVmcz48L3N2Zz4="},function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return a}));e(27);var A=e(32),o=Object(A.getGettextBuilder)().detectLocale();[{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)",Actions:"Oberioù",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur",Choose:"Dibab",Close:"Serriñ",Custom:"Personelañ",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Next:"Da heul","No emoji found":"Emoji ebet kavet","No results":"Disoc'h ebet",Objects:"Traoù","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick an emoji":"Choaz un emoji",Previous:"A-raok",Search:"Klask","Search results":"Disoc'hoù an enklask","Select a tag":"Choaz ur c'hlav",Settings:"Arventennoù","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Unable to search the group":"Dibosupl eo klask ar strollad"}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)",Actions:"Accions",Activities:"Activitats","Animals & Nature":"Animals i natura",Choose:"Tria",Close:"Tanca",Custom:"Personalitzat",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No results":"Sense resultats",Objects:"Objectes","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick an emoji":"Trieu un emoji",Previous:"Anterior",Search:"Cerca","Search results":"Resultats de cerca","Select a tag":"Selecciona una etiqueta",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Unable to search the group":"No es pot cercar el grup","Write message, @ to mention someone …":"Escriu un missatge, @ per mencionar algú..."}},{locale:"cs_CZ",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)",Actions:"Akce",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda",Choose:"Zvolit",Close:"Zavřít",Custom:"Uživatelsky určené","External documentation for {title}":"Externí dokumentace k {title}",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No results":"Nic nenalezeno",Objects:"Objekty","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick an emoji":"Vybrat emoji",Previous:"Předchozí",Search:"Hledat","Search results":"Výsledky hledání","Select a tag":"Vybrat štítek",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Unable to search the group":"Nedaří se hledat skupinu","Write message, @ to mention someone …":"Pište zprávu, pokud chcete někoho zmínit, použijte @ …"}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur",Choose:"Vælg",Close:"Luk",Custom:"Brugerdefineret",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået",Next:"Videre","No emoji found":"Ingen emoji fundet","No results":"Ingen resultater",Objects:"Objekter","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick an emoji":"Vælg en emoji",Previous:"Forrige",Search:"Søg","Search results":"Søgeresultater","Select a tag":"Vælg et mærke",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Unable to search the group":"Kan ikke søge på denne gruppe","Write message, @ to mention someone …":"Skriv i meddelelse, @ for at nævne nogen  …"}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur",Choose:"Auswählen",Close:"Schließen",Custom:"Benutzerdefiniert","External documentation for {title}":"Externe Dokumentation für {title}",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen",Previous:"Vorherige",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen-Navigation","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Write message, @ to mention someone …":"Nachricht schreiben, @ um jemanden zu erwähnen ..."}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur",Choose:"Auswählen",Close:"Schließen",Custom:"Benutzerdefiniert","External documentation for {title}":"Externe Dokumentation für {title}",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen",Previous:"Vorherige",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen-Navigation","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Write message, @ to mention someone …":"Nachricht schreiben, @ um jemanden zu erwähnen ..."}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)",Actions:"Ενέργειες",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση",Choose:"Επιλογή",Close:"Κλείσιμο",Custom:"Προσαρμογή",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick an emoji":"Επιλέξτε ένα emoji",Previous:"Προηγούμενο",Search:"Αναζήτηση","Search results":"Αποτελέσματα αναζήτησης","Select a tag":"Επιλογή ετικέτας",Settings:"Ρυθμίσεις","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας"}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)",Actions:"Agoj",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo",Choose:"Elektu",Close:"Fermu",Custom:"Propra",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj","Message limit of {count} characters reached":"La limo je {count} da literoj atingita",Next:"Sekva","No emoji found":"La emoĝio forestas","No results":"La rezulto forestas",Objects:"Objektoj","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick an emoji":"Elekti emoĝion ",Previous:"Antaŭa",Search:"Serĉi","Search results":"Serĉrezultoj","Select a tag":"Elektu etikedon",Settings:"Agordo","Settings navigation":"Agorda navigado","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Unable to search the group":"Ne eblas serĉi en la grupo","Write message, @ to mention someone …":"Mesaĝi, uzu @ por mencii iun ..."}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)",Actions:"Acciones",Activities:"Actividades","Animals & Nature":"Animales y naturaleza",Choose:"Elegir",Close:"Cerrar",Custom:"Personalizado",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca","Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres",Next:"Siguiente","No emoji found":"No hay ningún emoji","No results":" Ningún resultado",Objects:"Objetos","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick an emoji":"Elegir un emoji",Previous:"Anterior",Search:"Buscar","Search results":"Resultados de la búsqueda","Select a tag":"Seleccione una etiqueta",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Unable to search the group":"No es posible buscar en el grupo","Write message, @ to mention someone …":"Escriba un mensaje, @ para mencionar a alguien..."}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)",Choose:"Aukeratu",Close:"Itxi",Next:"Hurrengoa","No results":"Emaitzarik ez","Pause slideshow":"Pausatu diaporama",Previous:"Aurrekoa","Select a tag":"Hautatu etiketa bat",Settings:"Ezarpenak","Start slideshow":"Hasi diaporama"}},{locale:"fi_FI",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)",Actions:"Toiminnot",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto",Choose:"Valitse",Close:"Sulje",Custom:"Mukautettu",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt","Message limit of {count} characters reached":"Viestin maksimimerkkimäärä  {count} täynnä ",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No results":"Ei tuloksia",Objects:"Esineet & asiat","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick an emoji":"Valitse emoji",Previous:"Edellinen",Search:"Etsi","Search results":"Hakutulokset","Select a tag":"Valitse tagi",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Smileys & Emotion":"Hymiöt ja & tunteet","Start slideshow":"Aloita diaesitys",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Unable to search the group":"Ryhmää ei voi hakea","Write message, @ to mention someone …":"Kirjoita viesti, @ mainitaksesi jonkun..."}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)",Actions:"Actions",Activities:"Activités","Animals & Nature":"Animaux & Nature",Choose:"Choisir",Close:"Fermer",Custom:"Personnalisé",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No results":"Aucun résultat",Objects:"Objets","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick an emoji":"Choisissez un émoji",Previous:"Précédent",Search:"Chercher","Search results":"Résultats de recherche","Select a tag":"Sélectionnez une balise",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Unable to search the group":"Impossible de chercher le groupe","Write message, @ to mention someone …":"Écrivez un message, @ pour mentionner quelqu'un…"}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)",Actions:"Accións",Activities:"Actividades","Animals & Nature":"Animais e natureza",Choose:"Escoller",Close:"Pechar",Custom:"Personalizado",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No results":"Sen resultados",Objects:"Obxectos","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick an emoji":"Escolla un «emoji»",Previous:"Anterir",Search:"Buscar","Search results":"Resultados da busca","Select a tag":"Seleccione unha etiqueta",Settings:"Axustes","Settings navigation":"Navegación de axustes","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Unable to search the group":"Non foi posíbel buscar o grupo","Write message, @ to mention someone …":"Escriba a mensaxe, @ para mencionar a alguén…"}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)",Actions:"פעולות",Activities:"פעילויות","Animals & Nature":"חיות וטבע",Choose:"בחירה",Close:"סגירה",Custom:"בהתאמה אישית",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No results":"אין תוצאות",Objects:"חפצים","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick an emoji":"נא לבחור אמוג׳י",Previous:"הקודם",Search:"חיפוש","Search results":"תוצאות חיפוש","Select a tag":"בחירת תגית",Settings:"הגדרות","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Unable to search the group":"לא ניתן לחפש בקבוצה"}},{locale:"hu_HU",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)",Actions:"Műveletek",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet",Choose:"Válassszon",Close:"Bezárás",Custom:"Egyéni",Flags:"Zászló","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve",Next:"Következő","No emoji found":"Nem található emodzsi","No results":"Nincs találat",Objects:"Tárgyak","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick an emoji":"Válasszon egy emodzsit",Previous:"Előző",Search:"Keresés","Search results":"Találatok","Select a tag":"Válasszon címkét",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Unable to search the group":"A csoport nem kereshető","Write message, @ to mention someone …":"Írjon üzenetet, @ valaki megemlítéséhez…"}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)",Actions:"Aðgerðir",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra",Choose:"Velja",Close:"Loka",Custom:"Sérsniðið",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No results":"Engar niðurstöður",Objects:"Hlutir","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick an emoji":"Veldu tjáningartákn",Previous:"Fyrri",Search:"Leita","Search results":"Leitarniðurstöður","Select a tag":"Veldu merki",Settings:"Stillingar","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Unable to search the group":"Get ekki leitað í hópnum"}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)",Actions:"Azioni",Activities:"Attività","Animals & Nature":"Animali e natura",Choose:"Scegli",Close:"Chiudi",Custom:"Personalizzato","External documentation for {title}":"Documentazione esterna per {title}",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto",Next:"Successivo","No emoji found":"Nessun emoji trovato","No results":"Nessun risultato",Objects:"Oggetti","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick an emoji":"Scegli un emoji",Previous:"Precedente",Search:"Cerca","Search results":"Risultati di ricerca","Select a tag":"Seleziona un'etichetta",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Unable to search the group":"Impossibile cercare il gruppo","Write message, @ to mention someone …":"Scrivi messaggio, @ per menzionare qualcuno…"}},{locale:"ja_JP",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)",Actions:"操作",Activities:"アクティビティ","Animals & Nature":"動物と自然",Choose:"選択",Close:"閉じる",Custom:"カスタム",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています",Next:"次","No emoji found":"絵文字が見つかりません","No results":"なし",Objects:"物","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick an emoji":"絵文字を選択",Previous:"前",Search:"検索","Search results":"検索結果","Select a tag":"タグを選択",Settings:"設定","Settings navigation":"ナビゲーション設定","Smileys & Emotion":"笑顔と気持ち","Start slideshow":"スライドショーを開始",Symbols:"記号","Travel & Places":"旅行と場所","Unable to search the group":"グループを検索できません","Write message, @ to mention someone …":"メッセージを書く、@ で通知します。"}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)",Actions:"Veiksmai",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta",Choose:"Pasirinkti",Close:"Užverti",Custom:"Tinkinti","External documentation for {title}":"Išorinė {title} dokumentacija",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba",Next:"Kitas","No emoji found":"Nerasta jaustukų","No results":"Nėra rezultatų",Objects:"Objektai","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick an emoji":"Pasirinkti jaustuką",Previous:"Ankstesnis",Search:"Ieškoti","Search results":"Paieškos rezultatai","Select a tag":"Pasirinkti žymę",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Write message, @ to mention someone …":"Rašykite žinutę, naudokite @ norėdami kažką paminėti…"}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)",Choose:"Izvēlēties",Close:"Aizvērt",Next:"Nākamais","No results":"Nav rezultātu","Pause slideshow":"Pauzēt slaidrādi",Previous:"Iepriekšējais","Select a tag":"Izvēlēties birku",Settings:"Iestatījumi","Start slideshow":"Sākt slaidrādi"}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)",Actions:"Акции",Activities:"Активности","Animals & Nature":"Животни & Природа",Choose:"Избери",Close:"Затвори",Custom:"Прилагодени",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No results":"Нема резултати",Objects:"Објекти","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick an emoji":"Избери емотикон",Previous:"Предходно",Search:"Барај","Search results":"Резултати од барувањето","Select a tag":"Избери ознака",Settings:"Параметри","Settings navigation":"Параметри за навигација","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу",Symbols:"Симболи","Travel & Places":"Патувања & Места","Unable to search the group":"Неможе да се принајде групата","Write message, @ to mention someone …":"Напиши порака, @ за да спомнеш некој …"}},{locale:"nb_NO",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur",Choose:"Velg",Close:"Lukk",Custom:"Selvvalgt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Next:"Neste","No emoji found":"Fant ingen emoji","No results":"Ingen resultater",Objects:"Objekter","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick an emoji":"Velg en emoji",Previous:"Forrige",Search:"Søk","Search results":"Søkeresultater","Select a tag":"Velg en merkelapp",Settings:"Innstillinger","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning",Symbols:"Symboler","Travel & Places":"Reise og steder","Unable to search the group":"Kunne ikke søke i gruppen"}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)",Actions:"Acties",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur",Choose:"Kies",Close:"Sluiten",Custom:"Aangepast",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt","Message limit of {count} characters reached":"Berichtlengte van {count} karakters bereikt",Next:"Volgende","No emoji found":"Geen emoji gevonden","No results":"Geen resultaten",Objects:"Objecten","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick an emoji":"Kies een emoji",Previous:"Vorige",Search:"Zoeken","Search results":"Zoekresultaten","Select a tag":"Selecteer een label",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Unable to search the group":"Kan niet in de groep zoeken","Write message, @ to mention someone …":"Schrijf een bericht, @ om iemand te noemen ..."}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)",Actions:"Accions",Choose:"Causir",Close:"Tampar",Next:"Seguent","No results":"Cap de resultat","Pause slideshow":"Metre en pausa lo diaporama",Previous:"Precedent","Select a tag":"Seleccionar una etiqueta",Settings:"Paramètres","Start slideshow":"Lançar lo diaporama"}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)",Actions:"Działania",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura",Choose:"Wybierz",Close:"Zamknij",Custom:"Zwyczajne","External documentation for {title}":"Dokumentacja zewnętrzna dla {title}",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków",Next:"Następny","No emoji found":"Nie znaleziono emotikonów","No results":"Brak wyników",Objects:"Obiekty","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick an emoji":"Wybierz emoji",Previous:"Poprzedni",Search:"Szukaj","Search results":"Wyniki wyszukiwania","Select a tag":"Wybierz etykietę",Settings:"Ustawienia","Settings navigation":"Nawigacja ustawień","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Unable to search the group":"Nie można przeszukać grupy","Write message, @ to mention someone …":"Napisz wiadomość, aby wspomnieć o kimś użyj @…"}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ",Actions:"Ações",Activities:"Atividades","Animals & Nature":"Animais & Natureza",Choose:"Escolher",Close:"Fechar",Custom:"Personalizado","External documentation for {title}":"Documentação externa para {title}",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No results":"Sem resultados",Objects:"Objetos","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick an emoji":"Escolha um emoji",Previous:"Anterior",Search:"Pesquisar","Search results":"Resultados da pesquisa","Select a tag":"Selecionar uma tag",Settings:"Configurações","Settings navigation":"Navegação de configurações","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Unable to search the group":"Não foi possível pesquisar o grupo","Write message, @ to mention someone …":"Escreva mensagem, @ para mencionar alguém ..."}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)",Actions:"Ações",Choose:"Escolher",Close:"Fechar",Next:"Seguinte","No results":"Sem resultados","Pause slideshow":"Pausar diaporama",Previous:"Anterior","Select a tag":"Selecionar uma etiqueta",Settings:"Definições","Start slideshow":"Iniciar diaporama","Unable to search the group":"Não é possível pesquisar o grupo"}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)",Choose:"Выберите",Close:"Закрыть",Next:"Следующее","No results":"Результаты отсуствуют","Pause slideshow":"Приостановить показ слйдов",Previous:"Предыдущее","Select a tag":"Выберите метку",Settings:"Параметры","Start slideshow":"Начать показ слайдов"}},{locale:"sk_SK",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)",Actions:"Akcie",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda",Choose:"Vybrať",Close:"Zatvoriť",Custom:"Zvyk",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No results":"Žiadne výsledky",Objects:"Objekty","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick an emoji":"Vyberte si emodži",Previous:"Predchádzajúci",Search:"Hľadať","Search results":"Výsledky vyhľadávania","Select a tag":"Vybrať štítok",Settings:"Nastavenia","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Unable to search the group":"Skupinu sa nepodarilo nájsť"}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)",Actions:"Dejanja",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava",Choose:"Izbor",Close:"Zapri",Custom:"Po meri","External documentation for {title}":"Zunanja dokumentacija za {title}",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No results":"Ni zadetkov",Objects:"Predmeti","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick an emoji":"Izbor izrazne ikone",Previous:"Predhodni",Search:"Iskanje","Search results":"Zadetki iskanja","Select a tag":"Izbor oznake",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Unable to search the group":"Ni mogoče iskati po skuspini","Write message, @ to mention someone …":"Napišite sporočilo, z @ omenite osebo ..."}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)",Actions:"Åtgärder",Activities:"Aktiviteter","Animals & Nature":"Djur & Natur",Choose:"Välj",Close:"Stäng",Custom:"Anpassad",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta","Message limit of {count} characters reached":"Meddelandegräns {count} tecken används",Next:"Nästa","No emoji found":"Hittade inga emojis","No results":"Inga resultat",Objects:"Objekt","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick an emoji":"Välj en emoji",Previous:"Föregående",Search:"Sök","Search results":"Sökresultat","Select a tag":"Välj en tag",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Unable to search the group":"Kunde inte söka i gruppen","Write message, @ to mention someone …":"Skicka meddelande, skriv @ för att omnämna någon ..."}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)",Actions:"İşlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa",Choose:"Seçin",Close:"Kapat",Custom:"Özel","External documentation for {title}":"{title} için dış belgeler",Flags:"Bayraklar","Food & Drink":"Yeme ve İçme","Frequently used":"Sık kullanılanlar","Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve Beden","Pick an emoji":"Bir emoji seçin",Previous:"Önceki",Search:"Arama","Search results":"Arama sonuçları","Select a tag":"Bir etiket seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Smileys & Emotion":"İfadeler ve Duygular","Start slideshow":"Slayt sunumunu başlat",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve Yerler","Unable to search the group":"Grupta arama yapılamadı","Write message, @ to mention someone …":"İletiyi yazın. Birini anmak için @ kullanın …"}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)",Actions:"Дії",Activities:"Діяльність","Animals & Nature":"Тварини та природа",Choose:"Виберіть",Close:"Закрити",Custom:"Власне",Flags:"Прапори","Food & Drink":"Їжа та напитки","Frequently used":"Найчастіші",Next:"Вперед","No emoji found":"Емоційки відсутні","No results":"Відсутні результати",Objects:"Об'єкти","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick an emoji":"Виберіть емоційку",Previous:"Назад",Search:"Пошук","Search results":"Результати пошуку","Select a tag":"Виберіть позначку",Settings:"Налаштування","Smileys & Emotion":"Усміхайлики та емоційки","Start slideshow":"Почати показ слайдів",Symbols:"Символи","Travel & Places":"Поїздки та місця","Unable to search the group":"Неможливо шукати в групі"}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）",Actions:"行为",Activities:"活动","Animals & Nature":"动物 & 自然",Choose:"选择",Close:"关闭",Custom:"自定义",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制",Next:"下一个","No emoji found":"表情未找到","No results":"无结果",Objects:"物体","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick an emoji":"选择一个表情",Previous:"上一个",Search:"搜索","Search results":"搜索结果","Select a tag":"选择一个标签",Settings:"设置","Settings navigation":"设置向导","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片",Symbols:"符号","Travel & Places":"旅游 & 地点","Unable to search the group":"无法搜索分组","Write message, @ to mention someone …":"输入消息，输入 @ 来提醒某人"}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義","External documentation for {title}":"{title} 的外部文檔",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}}].forEach((function(n){var t={};for(var e in n.translations)n.translations[e].pluralId?t[e]={msgid:e,msgid_plural:n.translations[e].pluralId,msgstr:n.translations[e].msgstr}:t[e]={msgid:e,msgstr:[n.translations[e]]};o.addTranslation(n.locale,{translations:{"":t}})}));var i=o.build(),a=i.ngettext.bind(i),r=i.gettext.bind(i)},,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js")},function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i)()(o.a);a.push([n.i,".popover{z-index:100000;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.popover__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius);background:var(--color-main-background)}.popover__arrow{position:absolute;z-index:1;width:0;height:0;margin:10px;border-style:solid;border-color:var(--color-main-background)}.popover[x-placement^='top']{margin-bottom:10px}.popover[x-placement^='top'] .popover__arrow{bottom:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='bottom']{margin-top:10px}.popover[x-placement^='bottom'] .popover__arrow{top:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='right']{margin-left:10px}.popover[x-placement^='right'] .popover__arrow{top:calc(50% - $arrow-width);left:-10px;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='left']{margin-right:10px}.popover[x-placement^='left'] .popover__arrow{top:calc(50% - $arrow-width);right:-10px;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-bottom-color:transparent !important}.popover[aria-hidden='true']{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.popover[aria-hidden='false']{visibility:visible;transition:opacity var(--animation-quick);opacity:1}\n","",{version:3,sources:["webpack://./Popover.vue"],names:[],mappings:"AAgHA,SACC,cAAe,CACf,wBAAyB,CAEzB,sDAAuD,CAEvD,gBACC,SAAU,CACV,4BAA6B,CAC7B,kCAAmC,CACnC,uCAAwC,CACxC,gBAGA,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,WApBgB,CAqBhB,kBAAmB,CACnB,yCAA0C,CApB5C,6BAwBE,kBA1BgB,CAElB,6CA2BG,YA7Be,CA8Bf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAjCe,CAkCf,yCAA0C,CAC1C,0CAA2C,CAC3C,wCAAyC,CAlC5C,gCAuCE,eAzCgB,CAElB,gDA0CG,SA5Ce,CA6Cf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAhDe,CAiDf,uCAAwC,CACxC,yCAA0C,CAC1C,wCAAyC,CAjD5C,+BAsDE,gBAxDgB,CAElB,+CAyDG,4BAA6B,CAC7B,UA5De,CA6Df,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,uCAAwC,CACxC,0CAA2C,CAC3C,wCAAyC,CAhE5C,8BAqEE,iBAvEgB,CAElB,8CAwEG,4BAA6B,CAC7B,WA3Ee,CA4Ef,cAAe,CACf,aAAc,CACd,6BA9Ee,CA+Ef,uCAAwC,CACxC,yCAA0C,CAC1C,0CAA2C,CA/E9C,6BAoFE,iBAAkB,CAClB,2EAA6E,CAC7E,SAAU,CAtFZ,8BA0FE,kBAAmB,CACnB,yCAA0C,CAC1C,SAAU",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$arrow-width: 10px;\n\n.popover {\n\tz-index: 100000;\n\tdisplay: block !important;\n\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t&__inner {\n\t\tpadding: 0;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground: var(--color-main-background);\n\t}\n\n\t&__arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: $arrow-width;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n\n\t&[x-placement^='top'] {\n\t\tmargin-bottom: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\tbottom: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='bottom'] {\n\t\tmargin-top: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='right'] {\n\t\tmargin-left: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tleft: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='left'] {\n\t\tmargin-right: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tright: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t}\n\t}\n\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\topacity: 0;\n\t}\n\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity var(--animation-quick);\n\t\topacity: 1;\n\t}\n}\n\n"],sourceRoot:""}]),t.a=a},function(n,t){},function(n,t,e){"use strict";e.r(t);var A=e(7),o=e(2),i=e.n(o),a=e(23),r={insert:"head",singleton:!1};i()(a.a,r),a.a.locals;
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
A.VTooltip.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("9737fff",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),A.VTooltip.options.defaultHtml=!1;t.default=A.VTooltip},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js")},function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i)()(o.a);a.push([n.i,".vue-tooltip[data-v-9737fff]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;opacity:0;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-9737fff][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-9737fff][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-9737fff][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-9737fff][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-9737fff][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-9737fff][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-9737fff] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-9737fff] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n","",{version:3,sources:["webpack://./index.scss"],names:[],mappings:"AAeA,6BACC,iBAAkB,CAClB,cAAe,CACf,UAAW,CACX,SAAU,CACV,aAAc,CACd,QAAS,CAET,eAAgB,CAChB,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,SAAU,CACV,eAAgB,CAEhB,eAAgB,CAChB,sDAAuD,CAhBxD,gEAqBG,QAAS,CACT,YAAa,CACb,eAAgB,CAChB,6BA1Be,CA2Bf,8BAA+B,CAC/B,+BAAgC,CAChC,6BAA8B,CA3BjC,mEAkCG,KAAM,CACN,YAAa,CACb,eAAgB,CAChB,6BAvCe,CAwCf,4BAA6B,CAC7B,8BAA+B,CAC/B,6BAA8B,CAxCjC,kEA+CG,UAAW,CACX,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,4BAA6B,CAC7B,+BAAgC,CAChC,6BAA8B,CArDjC,iEA4DG,SAAU,CACV,cAAe,CACf,aAAc,CACd,6BAjEe,CAkEf,4BAA6B,CAC7B,8BAA+B,CAC/B,+BAAgC,CAlEnC,iDAwEE,iBAAkB,CAClB,wCAAyC,CACzC,SAAU,CA1EZ,kDA6EE,kBAAmB,CACnB,uBAAwB,CACxB,SAAU,CA/EZ,4CAoFE,eAAgB,CAChB,eAAgB,CAChB,iBAAkB,CAClB,4BAA6B,CAC7B,kCAAmC,CACnC,6CAA8C,CAzFhD,4CA8FE,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,QAAS,CACT,kBAAmB,CACnB,yCAA0C",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n/**\n* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n*\n* Bootstrap v3.3.5 (http://getbootstrap.com)\n* Copyright 2011-2015 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n*/\n\n$arrow-width: 10px;\n\n.vue-tooltip[data-v-#{$scope_version}] {\n\tposition: absolute;\n\tz-index: 100000;\n\tright: auto;\n\tleft: auto;\n\tdisplay: block;\n\tmargin: 0;\n\t/* default to top */\n\tmargin-top: -3px;\n\tpadding: 10px 0;\n\ttext-align: left;\n\ttext-align: start;\n\topacity: 0;\n\tline-height: 1.6;\n\n\tline-break: auto;\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t// TOP\n\t&[x-placement^='top'] {\n\t\t.tooltip-arrow {\n\t\t\tbottom: 0;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// BOTTOM\n\t&[x-placement^='bottom'] {\n\t\t.tooltip-arrow {\n\t\t\ttop: 0;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// RIGHT\n\t&[x-placement^='right'] {\n\t\t.tooltip-arrow {\n\t\t\tright: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// LEFT\n\t&[x-placement^='left'] {\n\t\t.tooltip-arrow {\n\t\t\tleft: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t}\n\t}\n\n\t// HIDDEN / SHOWN\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity .15s, visibility .15s;\n\t\topacity: 0;\n\t}\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity .15s;\n\t\topacity: 1;\n\t}\n\n\t// CONTENT\n\t.tooltip-inner {\n\t\tmax-width: 350px;\n\t\tpadding: 5px 8px;\n\t\ttext-align: center;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-main-background);\n\t}\n\n\t// ARROW\n\t.tooltip-arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: 0;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n}\n"],sourceRoot:""}]),t.a=a},,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js")},function(n,t,e){"use strict";var A={name:"Popover",components:{VPopover:e(7).VPopover},mounted:function(){var n=this;this.$watch((function(){return n.$refs.popover.isOpen}),(function(t){t?n.$emit("after-show"):n.$emit("after-hide")}))}},o=e(2),i=e.n(o),a=e(19),r={insert:"head",singleton:!1},s=(i()(a.a,r),a.a.locals,e(3)),c=e(20),l=e.n(c),u=Object(s.a)(A,(function(){var n=this.$createElement,t=this._self._c||n;return t("VPopover",this._g(this._b({ref:"popover",attrs:{"popover-base-class":"popover","popover-wrapper-class":"popover__wrapper","popover-arrow-class":"popover__arrow","popover-inner-class":"popover__inner"}},"VPopover",this.$attrs,!1),this.$listeners),[this._t("trigger"),this._v(" "),t("template",{slot:"popover"},[this._t("default")],2)],2)}),[],!1,null,null,null);"function"==typeof l.a&&l()(u);t.a=u.exports},,,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js")},function(n,t){n.exports=__webpack_require__(/*! @nextcloud/l10n/dist/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},function(n,t,e){"use strict";e(15),e(25),e(6),e(26);t.a=function(n){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,n||5)}},,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js")},function(n,t,e){"use strict";e.r(t);var A=e(5),o=new(e.n(A).a)({data:function(){return{isMobile:!1}},watch:{isMobile:function(n){this.$emit("changed",n)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){this.isMobile=document.documentElement.clientWidth<1024}}});t.default={data:function(){return{isMobile:!1}},mounted:function(){o.$on("changed",this.onIsMobileChanged),this.isMobile=o.isMobile},beforeDestroy:function(){o.$off("changed",this.onIsMobileChanged)},methods:{onIsMobileChanged:function(n){this.isMobile=n}}}},,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js")},function(n,t,e){"use strict";e(22),e(14);var A=e(5),o=e.n(A);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.a={before:function(){this.$slots.default&&""!==this.text.trim()||(o.a.util.warn("".concat(this.$options.name," cannot be empty and requires a meaningful text content"),this),this.$destroy(),this.$el.remove())},beforeUpdate:function(){this.text=this.getText()},data:function(){return{text:this.getText()}},computed:{isLongText:function(){return this.text&&this.text.trim().length>20}},methods:{getText:function(){return this.$slots.default?this.$slots.default[0].text.trim():""}}}},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js")},function(n,t){n.exports=__webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js")},,,,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js")},function(n,t,e){"use strict";e.r(t);var A=e(28);
/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.default=A.a},,function(n,t,e){"use strict";e(16),e(6),e(17),e(18),e(40);var A=e(39),o=(e(14),function(n,t){for(var e=n.$parent;e;){if(e.$options.name===t)return e;e=e.$parent}});t.a={mixins:[A.a],props:{icon:{type:String,default:""},title:{type:String,default:""},closeAfterClick:{type:Boolean,default:!1},ariaLabel:{type:String,default:""}},computed:{isIconUrl:function(){try{return new URL(this.icon)}catch(n){return!1}}},methods:{onClick:function(n){if(this.$emit("click",n),this.closeAfterClick){var t=o(this,"Actions");t&&t.closeMenu&&t.closeMenu()}}}}},function(n,t,e){"use strict";e(35),e(14),e(101);var A=e(5),o=e.n(A);t.a=function(n,t,e){if(void 0!==n)for(var A=n.length-1;A>=0;A--){var i=n[A],a=!i.componentOptions&&i.tag&&-1===t.indexOf(i.tag),r=!!i.componentOptions&&"string"==typeof i.componentOptions.tag,s=r&&-1===t.indexOf(i.componentOptions.tag);(a||!r||s)&&((a||s)&&o.a.util.warn("".concat(a?i.tag:i.componentOptions.tag," is not allowed inside the ").concat(e.$options.name," component"),e),n.splice(A,1))}}},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js")},,,,,,,,,,,,,,,function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i),r=e(4),s=e.n(r),c=e(8),l=e(9),u=e(10),g=e(11),d=a()(o.a),f=s()(c.a),p=s()(l.a),m=s()(u.a),C=s()(g.a);d.push([n.i,'@font-face{font-family:"iconfont-vue-9737fff";src:url('+f+");src:url("+f+') format("embedded-opentype"),url('+p+') format("woff"),url('+m+') format("truetype"),url('+C+') format("svg")}.icon[data-v-54ba527a]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-left[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right-double[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.breadcrumb[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.checkmark[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.close[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.confirm[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.info[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.menu[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.more[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.pause[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.play[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.triangle-s[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-away[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-dnd[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-invisible[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-online[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";content:""}.action-item[data-v-54ba527a]{position:relative;display:inline-block}.action-item--single[data-v-54ba527a]:hover,.action-item--single[data-v-54ba527a]:focus,.action-item--single[data-v-54ba527a]:active,.action-item__menutoggle[data-v-54ba527a]:hover,.action-item__menutoggle[data-v-54ba527a]:focus,.action-item__menutoggle[data-v-54ba527a]:active{opacity:1;background-color:rgba(127,127,127,0.25)}.action-item__menutoggle[data-v-54ba527a]:disabled,.action-item--single[data-v-54ba527a]:disabled{opacity:.3 !important}.action-item.action-item--open .action-item__menutoggle[data-v-54ba527a]{opacity:1;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-54ba527a],.action-item__menutoggle[data-v-54ba527a]{box-sizing:border-box;width:auto;min-width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;border-radius:22px;background-color:transparent}.action-item__menutoggle[data-v-54ba527a]{display:flex;align-items:center;justify-content:center;opacity:.7;font-weight:bold;line-height:16px}.action-item__menutoggle[data-v-54ba527a] span{width:16px;height:16px;line-height:16px}.action-item__menutoggle[data-v-54ba527a]:before{content:\'\'}.action-item__menutoggle--default-icon[data-v-54ba527a]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.action-item__menutoggle--default-icon[data-v-54ba527a]::before{font-size:16px}.action-item__menutoggle--with-title[data-v-54ba527a]{position:relative;padding-left:44px;white-space:nowrap;opacity:1;border:1px solid var(--color-border-dark);background-color:var(--color-background-dark);background-position:14px center;font-size:inherit}.action-item__menutoggle--with-title[data-v-54ba527a]:before{position:absolute;top:14px;left:14px}.action-item__menutoggle--primary[data-v-54ba527a]{opacity:1;color:var(--color-primary-text);border:none;background-color:var(--color-primary-element)}.action-item--open .action-item__menutoggle--primary[data-v-54ba527a],.action-item__menutoggle--primary[data-v-54ba527a]:hover,.action-item__menutoggle--primary[data-v-54ba527a]:focus,.action-item__menutoggle--primary[data-v-54ba527a]:active{color:var(--color-primary-text) !important;background-color:var(--color-primary-element-light) !important}.action-item--single[data-v-54ba527a]{opacity:.7}.action-item--single[data-v-54ba527a]:hover,.action-item--single[data-v-54ba527a]:focus,.action-item--single[data-v-54ba527a]:active{opacity:1}.action-item--single>[hidden][data-v-54ba527a]{display:none}.ie .action-item__menu[data-v-54ba527a],.ie .action-item__menu .action-item__menu_arrow[data-v-54ba527a],.edge .action-item__menu[data-v-54ba527a],.edge .action-item__menu .action-item__menu_arrow[data-v-54ba527a]{border:1px solid var(--color-border)}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./Actions.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,uBACE,iBAAkB,CAClB,eAAgB,CAFlB,gDAMM,kCAAmC,CACnC,WA5Ge,CAAO,yCA0GL,kCACJ,CAAsB,WA1G3B,CAAA,iDAyGU,kCACL,CAAA,WAzGG,CAAA,0CAwGL,kCACE,CAAA,WAxGJ,CAAA,yCAuGC,kCACG,CAAA,WACN,CAxGC,wCAsGC,kCACI,CAAA,WACb,CAAO,oCAFF,kCACQ,CAAA,WACb,CAAA,sCAFO,kCACM,CAAA,WACb,CAAA,mCAFI,kCACS,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,oCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WAAsB,CACnC,yCAPD,kCAMc,CAAA,WAAA,CAAsB,+CANpC,kCAMc,CAAA,WAAA,CAAA,8CANd,kCAMc,CAAA,WAAA,CAAA,oDANd,kCAMc,CAAA,WAAA,CAAA,iDANd,kCAMc,CAAA,WAAA,CAAA,8BA1FG,iBC6nBZ,CACX,oBACA,CAAA,sRASC,SAAA,CAAY,uCCvnBE,CAAA,kGD+nBd,qBACA,CAAA,yEAGmB,SAAA,CAAA,uCCvnBK,CAAA,gFD8nBxB,qBACA,CAAA,UAAY,CAAA,cACL,CAAA,WACP,CAAS,QACT,CAAA,YACA,CAAA,cClpBY,CAAA,WDopBJ,CAAA,kBAER,CAAA,4BACA,CAAA,0CACA,YAAA,CAAA,kBAMA,CAAA,sBACA,CAAA,UAAe,CAAE,gBCrpBF,CAAE,gBDupBJ,CAAI,+CANjB,UAUA,CAAA,WACC,CAAK,gBC1qBI,CAAI,iDD+pBd,UAAY,CAAA,+DAkBX,kCD7sBF,CAAA,iBAAsB,CAkFnB,eAAY,CAAA,WACZ,CAAA,gEC4nBD,cAAc,CAAA,sDAIb,iBAAA,CAGW,iBACF,CAAQ,kBC/rBA,CDisBlB,SAAA,CAAA,yCAEkB,CAAA,6CAEA,CAAA,+BAClB,CAAA,iBAAkC,CAAM,6DARxC,iBAAY,CAWJ,QACP,CAAQ,SAAU,CAClB,mDAEA,SAAA,CAAA,+BAKM,CAAA,WAAA,CAAA,6CAEW,CAAA,kPAJlB,0CASQ,CAAA,8DACW,CAAA,sCAClB,UAAA,CAAA,qIAIF,SAAA,CAAA,+CAAA,YAQI,CAAA,sNASc,oCACA",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-9737fff": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-9737fff";\n   src: url(\'../iconfont-vue-9737fff.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-9737fff.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-9737fff.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-9737fff.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-9737fff.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-9737fff") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-9737fff";\n        content: iconfont-item("iconfont-vue-9737fff/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.action-item {\n\tposition: relative;\n\tdisplay: inline-block;\n\n\t// put a grey round background when menu is opened\n\t// or hover-focused\n\t&--single:hover,\n\t&--single:focus,\n\t&--single:active,\n\t&__menutoggle:hover,\n\t&__menutoggle:focus,\n\t&__menutoggle:active {\n\t\topacity: $opacity_full;\n\t\t// good looking on dark AND white bg\n\t\tbackground-color: $icon-focus-bg;\n\t}\n\n\t// TODO: handle this in the future button component\n\t&__menutoggle:disabled,\n\t&--single:disabled {\n\t\topacity: .3 !important;\n\t}\n\n\t&.action-item--open .action-item__menutoggle {\n\t\topacity: $opacity_full;\n\t\tbackground-color: $action-background-hover;\n\t}\n\n\t// icons\n\t&--single,\n\t&__menutoggle {\n\t\tbox-sizing: border-box;\n\t\twidth: auto;\n\t\tmin-width: $clickable-area;\n\t\theight: $clickable-area;\n\t\tmargin: 0;\n\t\tpadding: $icon-margin;\n\t\tcursor: pointer;\n\t\tborder: none;\n\t\tborder-radius: $clickable-area / 2;\n\t\tbackground-color: transparent;\n\t}\n\n\t// icon-more\n\t&__menutoggle {\n\t\t// align menu icon in center\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\topacity: $opacity_normal;\n\t\tfont-weight: bold;\n\t\tline-height: $icon-size;\n\n\t\t// image slot\n\t\t/deep/ span {\n\t\t\twidth: $icon-size;\n\t\t\theight: $icon-size;\n\t\t\tline-height: $icon-size;\n\t\t}\n\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t}\n\n\t\t&--default-icon {\n\t\t\t@include iconfont('more');\n\t\t\t&::before {\n\t\t\t\tfont-size: $icon-size;\n\t\t\t}\n\t\t}\n\n\t\t&--with-title {\n\t\t\tposition: relative;\n\t\t\tpadding-left: $clickable-area;\n\t\t\twhite-space: nowrap;\n\t\t\topacity: $opacity_full;\n\t\t\tborder: 1px solid var(--color-border-dark);\n\t\t\t// with a title, we need to display this as a real button\n\t\t\tbackground-color: var(--color-background-dark);\n\t\t\tbackground-position: $icon-margin center;\n\t\t\tfont-size: inherit;\n\t\t\t// non-background icon class\n\t\t\t&:before {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: $icon-margin;\n\t\t\t\tleft: $icon-margin;\n\t\t\t}\n\t\t}\n\n\t\t&--primary {\n\t\t\topacity: $opacity_full;\n\t\t\tcolor: var(--color-primary-text);\n\t\t\tborder: none;\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t\t.action-item--open &,\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\tcolor: var(--color-primary-text) !important;\n\t\t\t\tbackground-color: var(--color-primary-element-light) !important;\n\t\t\t}\n\t\t}\n\t}\n\n\t&--single {\n\t\topacity: $opacity_normal;\n\t\t&:hover,\n\t\t&:focus,\n\t\t&:active {\n\t\t\topacity: $opacity_full;\n\t\t}\n\t\t// hide anything the slot is displaying\n\t\t& > [hidden] {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n\n.ie,\n.edge {\n\t.action-item__menu,\n\t.action-item__menu .action-item__menu_arrow {\n\t\tborder: 1px solid var(--color-border);\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),t.a=d},function(n,t){},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js")},,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js")},function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js")},,,,,,,,,,,,,function(n,t,e){"use strict";e(22),e(51),e(69),e(31),e(71),e(27),e(72),e(38),e(6),e(46),e(16),e(17),e(18),e(52),e(41),e(14);var A=e(21),o=e(33),i=e(50),a=e(12),r=e(47);function s(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,A=new Array(t);e<t;e++)A[e]=n[e];return A}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(n);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,A)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){g(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function g(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var d=["ActionButton","ActionCheckbox","ActionInput","ActionLink","ActionRadio","ActionRouter","ActionSeparator","ActionText","ActionTextEditable"],f={name:"Actions",directives:{tooltip:A.default},components:{Popover:r.default,VNodes:{functional:!0,render:function(n,t){return t.props.vnodes}}},props:{open:{type:Boolean,default:!1},forceMenu:{type:Boolean,default:!1},menuTitle:{type:String,default:null},primary:{type:Boolean,default:!1},defaultIcon:{type:String,default:"action-item__menutoggle--default-icon"},ariaLabel:{type:String,default:Object(a.b)("Actions")},placement:{type:String,default:"bottom"},boundariesElement:{type:Element,default:function(){return document.querySelector("body")}},container:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{actions:[],opened:this.open,focusIndex:0,randomId:"menu-"+Object(o.a)(),children:this.$children}},computed:{hasMultipleActions:function(){return this.actions.length>1},isValidSingleAction:function(){return 1===this.actions.length&&null!==this.firstActionElement},firstActionVNode:function(){return this.actions[0]},firstAction:function(){return this.children[0]?this.children[0]:{}},firstActionBinding:function(){if(this.firstActionVNode&&this.firstActionVNode.componentOptions){var n=this.firstActionVNode.componentOptions.tag;if("ActionLink"===n)return u(u({is:"a",href:this.firstAction.href,target:this.firstAction.target,"aria-label":this.firstAction.ariaLabel},this.firstAction.$attrs),this.firstAction.$props);if("ActionRouter"===n)return u(u({is:"router-link",to:this.firstAction.to,exact:this.firstAction.exact,"aria-label":this.firstAction.ariaLabel},this.firstAction.$attrs),this.firstAction.$props);if("ActionButton"===n)return u(u({is:"button","aria-label":this.firstAction.ariaLabel},this.firstAction.$attrs),this.firstAction.$props)}return null},firstActionEvent:function(){var n,t,e;return null===(n=this.firstActionVNode)||void 0===n||null===(t=n.componentOptions)||void 0===t||null===(e=t.listeners)||void 0===e?void 0:e.click},firstActionEventBinding:function(){return this.firstActionEvent?"click":null},firstActionIconSlot:function(){var n,t;return null===(n=this.firstAction)||void 0===n||null===(t=n.$slots)||void 0===t?void 0:t.icon},firstActionClass:function(){return((this.firstActionVNode&&this.firstActionVNode.data.staticClass)+" "+(this.firstActionVNode&&this.firstActionVNode.data.class)).trim()},iconSlotIsPopulated:function(){return!!this.$slots.icon}},watch:{open:function(n){n!==this.opened&&(this.opened=n)}},beforeMount:function(){this.initActions(),Object(i.a)(this.$slots.default,d,this)},beforeUpdate:function(){this.initActions(),Object(i.a)(this.$slots.default,d,this)},methods:{openMenu:function(n){this.opened||(this.opened=!0,this.$emit("update:open",!0),this.$emit("open"))},closeMenu:function(n){this.opened&&(this.opened=!1,this.$emit("update:open",!1),this.$emit("close"),this.opened=!1,this.focusIndex=0,this.$refs.menuButton.focus())},onOpen:function(n){var t=this;this.$nextTick((function(){t.focusFirstAction(n)}))},onMouseFocusAction:function(n){if(document.activeElement!==n.target){var t=n.target.closest("li");if(t){var e=t.querySelector(".focusable");if(e){var A=s(this.$refs.menu.querySelectorAll(".focusable")).indexOf(e);A>-1&&(this.focusIndex=A,this.focusAction())}}}},removeCurrentActive:function(){var n=this.$refs.menu.querySelector("li.active");n&&n.classList.remove("active")},focusAction:function(){var n=this.$refs.menu.querySelectorAll(".focusable")[this.focusIndex];if(n){this.removeCurrentActive();var t=n.closest("li.action");n.focus(),t&&t.classList.add("active")}},focusPreviousAction:function(n){this.opened&&(0===this.focusIndex?this.closeMenu():(this.preventIfEvent(n),this.focusIndex=this.focusIndex-1),this.focusAction())},focusNextAction:function(n){if(this.opened){var t=this.$refs.menu.querySelectorAll(".focusable").length-1;this.focusIndex===t?this.closeMenu():(this.preventIfEvent(n),this.focusIndex=this.focusIndex+1),this.focusAction()}},focusFirstAction:function(n){this.opened&&(this.preventIfEvent(n),this.focusIndex=0,this.focusAction())},focusLastAction:function(n){this.opened&&(this.preventIfEvent(n),this.focusIndex=this.$el.querySelectorAll(".focusable").length-1,this.focusAction())},preventIfEvent:function(n){n&&(n.preventDefault(),n.stopPropagation())},execFirstAction:function(n){this.firstActionEvent&&this.firstActionEvent(n)},initActions:function(){this.actions=(this.$slots.default||[]).filter((function(n){return!!n&&!!n.componentOptions}))},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){this.$emit("blur",n)}}},p=e(2),m=e.n(p),C=e(67),h={insert:"head",singleton:!1},v=(m()(C.a,h),C.a.locals,e(3)),b=e(68),y=e.n(b),B=Object(v.a)(f,(function(){var n,t,e=this,A=e.$createElement,o=e._self._c||A;return e.isValidSingleAction&&!e.forceMenu?o("element",e._b({directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:e.firstAction.text,expression:"firstAction.text",modifiers:{auto:!0}}],staticClass:"action-item action-item--single",class:(n={},n[e.firstAction.icon]=e.firstAction.icon,n[e.firstActionClass]=e.firstActionClass,n),attrs:{rel:"noreferrer noopener",disabled:e.disabled},on:e._d({focus:e.onFocus,blur:e.onBlur},[e.firstActionEventBinding,e.execFirstAction])},"element",e.firstActionBinding,!1),[o("VNodes",{attrs:{vnodes:e.firstActionIconSlot}}),e._v(" "),o("span",{attrs:{"aria-hidden":!0,hidden:""}},[e._t("default")],2)],1):o("div",{directives:[{name:"show",rawName:"v-show",value:e.hasMultipleActions||e.forceMenu,expression:"hasMultipleActions || forceMenu"}],staticClass:"action-item",class:{"action-item--open":e.opened}},[o("Popover",{attrs:{delay:0,"handle-resize":!0,open:e.opened,placement:e.placement,"boundaries-element":e.boundariesElement,container:e.container},on:{"update:open":function(n){e.opened=n},show:e.openMenu,"after-show":e.onOpen,hide:e.closeMenu}},[o("button",{ref:"menuButton",staticClass:"icon action-item__menutoggle",class:(t={},t[e.defaultIcon]=!e.iconSlotIsPopulated,t["action-item__menutoggle--with-title"]=e.menuTitle,t["action-item__menutoggle--primary"]=e.primary,t),attrs:{slot:"trigger",disabled:e.disabled,"aria-label":e.ariaLabel,"aria-haspopup":"true","aria-controls":e.randomId,"test-attr":"1","aria-expanded":e.opened?"true":"false"},on:{focus:e.onFocus,blur:e.onBlur},slot:"trigger"},[e._t("icon"),e._v("\n\t\t\t"+e._s(e.menuTitle)+"\n\t\t")],2),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],ref:"menu",class:{open:e.opened},attrs:{tabindex:"-1"},on:{keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.focusPreviousAction(n)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.focusNextAction(n)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"tab",9,n.key,"Tab")||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.focusNextAction(n)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"tab",9,n.key,"Tab")?null:n.shiftKey?n.ctrlKey||n.altKey||n.metaKey?null:e.focusPreviousAction(n):null},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"page-up",void 0,n.key,void 0)||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.focusFirstAction(n)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"page-down",void 0,n.key,void 0)||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.focusLastAction(n)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:(n.preventDefault(),e.closeMenu(n))}],mousemove:e.onMouseFocusAction}},[o("ul",{attrs:{id:e.randomId,tabindex:"-1"}},[e.opened?[e._t("default")]:e._e()],2)])])],1)}),[],!1,null,"54ba527a",null);"function"==typeof y.a&&y()(B);t.a=B.exports},,,,,,,,,function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i)()(o.a);a.push([n.i,"li.active[data-v-42b28436]{background-color:var(--color-background-hover)}.action--disabled[data-v-42b28436]{pointer-events:none;opacity:.5}.action--disabled[data-v-42b28436]:hover,.action--disabled[data-v-42b28436]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-42b28436]{opacity:1 !important}.action-button[data-v-42b28436]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;font-size:var(--default-font-size);line-height:44px}.action-button[data-v-42b28436]:hover,.action-button[data-v-42b28436]:focus{opacity:1}.action-button>span[data-v-42b28436]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-42b28436]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px;background-repeat:no-repeat}.action-button .material-design-icon[data-v-42b28436]{width:44px;height:44px;opacity:1}.action-button .material-design-icon .material-design-icon__svg[data-v-42b28436]{vertical-align:middle}.action-button p[data-v-42b28436]{max-width:220px;line-height:1.6em;padding:10.8px 0;cursor:pointer;text-align:left;overflow:hidden;text-overflow:ellipsis}.action-button__longtext[data-v-42b28436]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-42b28436]{font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}\n","",{version:3,sources:["webpack://./../../assets/action.scss","webpack://./../../assets/variables.scss"],names:[],mappings:"AAwBC,2BAEE,8CAA+C,CAC/C,mCAMD,mBAAoB,CACpB,UCQmB,CDVpB,kFAIE,cAAe,CACf,UCKkB,CDVpB,qCAQE,oBAAqB,CACrB,gCAOD,YAAa,CACb,sBAAuB,CAEvB,UAAW,CACX,WAAY,CACZ,QAAS,CACT,SAAU,CACV,kBCtB8C,CDwB9C,cAAe,CACf,kBAAmB,CAEnB,UCjBiB,CDkBjB,4BAA6B,CAC7B,QAAS,CACT,eAAgB,CAChB,4BAA6B,CAC7B,eAAgB,CAEhB,kBAAmB,CACnB,kCAAmC,CACnC,gBC5CmB,CDsBpB,4EA0BE,SC7Ba,CDGf,qCA8BE,cAAe,CACf,kBAAmB,CACnB,sCAGA,UCzDkB,CD0DlB,WC1DkB,CD2DlB,SCxCa,CDyCb,+BAAwC,CACxC,oBCzDa,CD0Db,2BAA4B,CAxC9B,sDA4CE,UClEkB,CDmElB,WCnEkB,CDoElB,SCjDa,CDGf,iFAiDG,qBAAsB,CAjDzB,kCAuDE,eAAgB,CAChB,iBAAkB,CAGlB,gBAA8C,CAE9C,cAAe,CACf,eAAgB,CAGhB,eAAgB,CAChB,sBAAuB,CACvB,0CAGA,cAAe,CAEf,oBAAqB,CACrB,uCAGA,gBAAiB,CACjB,sBAAuB,CACvB,eAAgB,CAChB,kBAAmB,CACnB,cAAe,CACf,oBAAqB",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n * @author Marco Ambrosini <marcoambrosini@pm.me>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n@mixin action-active {\n\tli {\n\t\t&.active {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n}\n\n@mixin action--disabled {\n\t.action--disabled {\n\t\tpointer-events: none;\n\t\topacity: $opacity_disabled;\n\t\t&:hover, &:focus {\n\t\t\tcursor: default;\n\t\t\topacity: $opacity_disabled;\n\t\t}\n\t\t& * {\n\t\t\topacity: 1 !important;\n\t\t}\n\t}\n}\n\n\n@mixin action-item($name) {\n\t.action-#{$name} {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tpadding-right: $icon-margin;\n\n\t\tcursor: pointer;\n\t\twhite-space: nowrap;\n\n\t\topacity: $opacity_normal;\n\t\tcolor: var(--color-main-text);\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tbox-shadow: none;\n\n\t\tfont-weight: normal;\n\t\tfont-size: var(--default-font-size);\n\t\tline-height: $clickable-area;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\topacity: $opacity_full;\n\t\t}\n\n\t\t& > span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t&__icon {\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_full;\n\t\t\tbackground-position: $icon-margin center;\n\t\t\tbackground-size: $icon-size;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\n\t\t.material-design-icon {\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\topacity: $opacity_full;\n\n\t\t\t.material-design-icon__svg {\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\t\t}\n\n\t\t// long text area\n\t\tp {\n\t\t\tmax-width: 220px;\n\t\t\tline-height: 1.6em;\n\n\t\t\t// 14px are currently 1em line-height. Mixing units as '44px - 1.6em' does not work.\n\t\t\tpadding: #{($clickable-area - 1.6*14px) / 2} 0;\n\n\t\t\tcursor: pointer;\n\t\t\ttext-align: left;\n\n\t\t\t// in case there are no spaces like long email addresses\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&__longtext {\n\t\t\tcursor: pointer;\n\t\t\t// allow the use of `\\n`\n\t\t\twhite-space: pre-wrap;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-weight: bold;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\tmax-width: 100%;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),t.a=a},function(n,t){},,,,,,function(n,t){n.exports=__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js")},function(n,t,e){"use strict";var A={name:"ActionButton",mixins:[e(49).a],props:{disabled:{type:Boolean,default:!1}},computed:{isFocusable:function(){return!this.disabled}}},o=e(2),i=e.n(o),a=e(94),r={insert:"head",singleton:!1},s=(i()(a.a,r),a.a.locals,e(3)),c=e(95),l=e.n(c),u=Object(s.a)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",{staticClass:"action",class:{"action--disabled":n.disabled}},[e("button",{staticClass:"action-button",class:{focusable:n.isFocusable},attrs:{"aria-label":n.ariaLabel},on:{click:n.onClick}},[e("span",{staticClass:"action-button__icon",class:[n.isIconUrl?"action-button__icon--url":n.icon],style:{backgroundImage:n.isIconUrl?"url("+n.icon+")":null}},[n._t("icon")],2),n._v(" "),n.title?e("p",[e("strong",{staticClass:"action-button__title"},[n._v("\n\t\t\t\t"+n._s(n.title)+"\n\t\t\t")]),n._v(" "),e("br"),n._v(" "),e("span",{staticClass:"action-button__longtext",domProps:{textContent:n._s(n.text)}})]):n.isLongText?e("p",{staticClass:"action-button__longtext",domProps:{textContent:n._s(n.text)}}):e("span",{staticClass:"action-button__text"},[n._v(n._s(n.text))]),n._v(" "),n._e()],2)])}),[],!1,null,"42b28436",null);"function"==typeof l.a&&l()(u);t.a=u.exports},,,,,,,,,,,,,,,function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i),r=e(4),s=e.n(r),c=e(8),l=e(9),u=e(10),g=e(11),d=a()(o.a),f=s()(c.a),p=s()(l.a),m=s()(u.a),C=s()(g.a);d.push([n.i,'@font-face{font-family:"iconfont-vue-9737fff";src:url('+f+");src:url("+f+') format("embedded-opentype"),url('+p+') format("woff"),url('+m+') format("truetype"),url('+C+') format("svg")}.icon{font-style:normal;font-weight:400}.icon.arrow-left-double:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-left:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right-double:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right:before{font-family:"iconfont-vue-9737fff";content:""}.icon.breadcrumb:before{font-family:"iconfont-vue-9737fff";content:""}.icon.checkmark:before{font-family:"iconfont-vue-9737fff";content:""}.icon.close:before{font-family:"iconfont-vue-9737fff";content:""}.icon.confirm:before{font-family:"iconfont-vue-9737fff";content:""}.icon.info:before{font-family:"iconfont-vue-9737fff";content:""}.icon.menu:before{font-family:"iconfont-vue-9737fff";content:""}.icon.more:before{font-family:"iconfont-vue-9737fff";content:""}.icon.pause:before{font-family:"iconfont-vue-9737fff";content:""}.icon.play:before{font-family:"iconfont-vue-9737fff";content:""}.icon.triangle-s:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-away:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-dnd:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-invisible:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-online:before{font-family:"iconfont-vue-9737fff";content:""}.app-navigation-entry__inline-input-container{flex:1 0 100%;width:100%}.app-navigation-entry__inline-input-container form{display:flex}.app-navigation-entry__inline-input-container form .app-navigation-entry__inline-input{flex:1 1 100%;font-size:14px}.app-navigation-entry__inline-input-container form button{display:flex;align-items:center;justify-content:center;width:44px !important;color:var(--color-main-text);background:none;font-size:16px}.app-navigation-entry__inline-input-container form button::before{opacity:.7}.app-navigation-entry__inline-input-container form button:hover::before,.app-navigation-entry__inline-input-container form button:focus::before{opacity:1}.app-navigation-entry__inline-input-container form button.icon-confirm{border-left:none}.app-navigation-entry__inline-input-container form button.icon-confirm:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.app-navigation-entry__inline-input-container form button.icon-confirm:hover{border-radius:0px var(--border-radius) var(--border-radius) 0px !important}.app-navigation-entry__inline-input-container form button.icon-close:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.app-navigation-entry__inline-input-container form .icon-close{margin:0;border:none;background-color:transparent}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./InputConfirmCancel.vue"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,MACE,iBAAkB,CAClB,eAAgB,CAFlB,+BAMM,kCAAmC,CACnC,WA5Ge,CAAO,wBA0GL,kCACJ,CAAsB,WA1G3B,CAAA,gCAyGU,kCACL,CAAA,WAzGG,CAAA,yBAwGL,kCACE,CAAA,WAxGJ,CAAA,wBAuGC,kCACG,CAAA,WACN,CAxGC,uBAsGC,kCACI,CAAA,WACb,CAAO,mBAFF,kCACQ,CAAA,WACb,CAAA,qBAFO,kCACM,CAAA,WACb,CAAA,kBAFI,kCACS,CAAA,WACb,CAAA,kBAPD,kCAMc,CAAA,WACb,CAAA,kBAPD,kCAMc,CAAA,WACb,CAAA,mBAPD,kCAMc,CAAA,WACb,CAAA,kBAPD,kCAMc,CAAA,WAAsB,CACnC,wBAPD,kCAMc,CAAA,WAAA,CAAsB,8BANpC,kCAMc,CAAA,WAAA,CAAA,6BANd,kCAMc,CAAA,WAAA,CAAA,mCANd,kCAMc,CAAA,WAAA,CAAA,gCANd,kCAMc,CAAA,WAAA,CAAA,8CCzBrB,aAAA,CAAA,UACO,CAAA,mDADP,YAA6C,CAG5C,uFAEC,aAAA,CAAA,cACO,CAAA,0DANT,YAWE,CAAA,kBAEC,CAAA,sBACA,CAAA,qBACA,CAAA,4BACO,CAAA,eAAA,CAAA,cACK,CAAA,kEAdd,UAQO,CAAA,gJAAN,SAcQ,CAAA,uEAdR,gBAAM,CAoBS,8EApBT,kCD9FP,CAAA,iBAAsB,CAkFnB,eAAY,CAAA,WACZ,CAAA,6ECWI,0EAyBoC,CAAA,4EAzBpC,kCD9FP,CAAA,iBAAA,CAAsB,eAkFP,CAAA,WACZ,CAAA,+DCAJ,QA2CE,CAAA,WACC,CAAA,4BAEA",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-9737fff": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-9737fff";\n   src: url(\'../iconfont-vue-9737fff.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-9737fff.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-9737fff.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-9737fff.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-9737fff.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-9737fff") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-9737fff";\n        content: iconfont-item("iconfont-vue-9737fff/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.app-navigation-entry__inline-input-container {\n\tflex: 1 0 100%;\n\twidth: 100%;\n\tform {\n\t\tdisplay: flex;\n\t\t.app-navigation-entry__inline-input {\n\t\t\tflex: 1 1 100%;\n\t\t\tfont-size: 14px;\n\t\t}\n\n\t\t// submit and cancel buttons\n\t\tbutton {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: $clickable-area !important;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tbackground: none;\n\t\t\tfont-size: 16px;\n\n\t\t\t// icon hover/focus feedback\n\t\t\t&::before {\n\t\t\t\topacity: $opacity_normal;\n\t\t\t}\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\t&::before {\n\t\t\t\t\topacity: $opacity_full;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&.icon-confirm {\n\t\t\t\t@include iconfont('confirm');\n\t\t\t\tborder-left: none;\n\t\t\t}\n\t\t\t&.icon-confirm:hover {\n\t\t\t\tborder-radius: 0px var(--border-radius) var(--border-radius) 0px !important;\n\t\t\t}\n\n\t\t\t&.icon-close {\n\t\t\t\t@include iconfont('close');\n\t\t\t}\n\t\t}\n\t\t.icon-close {\n\t\t\tmargin: 0;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),t.a=d},function(n,t){},,,,,,,,function(n,t,e){"use strict";var A={props:{placeholder:{default:"",type:String},value:{default:"",type:String}},computed:{valueModel:{get:function(){return this.value},set:function(n){this.$emit("input",n)}}},methods:{confirm:function(){this.$emit("confirm")},cancel:function(){this.$emit("cancel")},focusInput:function(){this.$refs.input.focus()}}},o=e(2),i=e.n(o),a=e(117),r={insert:"head",singleton:!1},s=(i()(a.a,r),a.a.locals,e(3)),c=e(118),l=e.n(c),u=Object(s.a)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-navigation-entry__inline-input-container"},[e("form",{on:{submit:function(t){return t.preventDefault(),n.confirm(t)},keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),n.cancel(t))},click:function(n){n.stopPropagation(),n.preventDefault()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.valueModel,expression:"valueModel"}],ref:"input",staticClass:"app-navigation-entry__inline-input",attrs:{type:"text",placeholder:n.placeholder},domProps:{value:n.valueModel},on:{input:function(t){t.target.composing||(n.valueModel=t.target.value)}}}),n._v(" "),e("button",{staticClass:"icon-confirm",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.confirm(t)}}}),n._v(" "),e("button",{staticClass:"icon-close",attrs:{type:"reset"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.cancel(t)}}})])])}),[],!1,null,null,null);"function"==typeof l.a&&l()(u);t.a=u.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i),r=e(4),s=e.n(r),c=e(8),l=e(9),u=e(10),g=e(11),d=a()(o.a),f=s()(c.a),p=s()(l.a),m=s()(u.a),C=s()(g.a);d.push([n.i,'@font-face{font-family:"iconfont-vue-9737fff";src:url('+f+");src:url("+f+') format("embedded-opentype"),url('+p+') format("woff"),url('+m+') format("truetype"),url('+C+') format("svg")}.icon[data-v-4e54d078]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-left[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right-double[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.breadcrumb[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.checkmark[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.close[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.confirm[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.info[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.menu[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.more[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.pause[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.play[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.triangle-s[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-away[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-dnd[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-invisible[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-online[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";content:""}.icon-collapse[data-v-4e54d078]{position:absolute;z-index:105;width:44px;height:44px;margin:0;padding:0;transition:opacity var(--animation-quick) ease-in-out;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);color:var(--color-main-text);border:none;border-radius:0;outline:none !important;background-color:transparent;box-shadow:none;font-size:18px}.icon-collapse[data-v-4e54d078]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.icon-collapse[data-v-4e54d078]:hover{color:var(--color-primary)}.icon-collapse--rotated[data-v-4e54d078]{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);color:var(--color-main-text)}.icon-collapse--rotated[data-v-4e54d078]:hover{color:var(--color-primary)}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./AppNavigationIconCollapsible.vue"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,uBACE,iBAAkB,CAClB,eAAgB,CAFlB,gDAMM,kCAAmC,CACnC,WA5Ge,CAAO,yCA0GL,kCACJ,CAAsB,WA1G3B,CAAA,iDAyGU,kCACL,CAAA,WAzGG,CAAA,0CAwGL,kCACE,CAAA,WAxGJ,CAAA,yCAuGC,kCACG,CAAA,WACN,CAxGC,wCAsGC,kCACI,CAAA,WACb,CAAO,oCAFF,kCACQ,CAAA,WACb,CAAA,sCAFO,kCACM,CAAA,WACb,CAAA,mCAFI,kCACS,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,oCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WAAsB,CACnC,yCAPD,kCAMc,CAAA,WAAA,CAAsB,+CANpC,kCAMc,CAAA,WAAA,CAAA,8CANd,kCAMc,CAAA,WAAA,CAAA,oDANd,kCAMc,CAAA,WAAA,CAAA,iDANd,kCAMc,CAAA,WAAA,CAAA,gCA1FG,iBCmCV,CACb,WAAU,CAAA,UACV,CAAA,WACA,CAAK,QACL,CAAA,SACA,CAAA,qDAEoB,CAAA,gCACpB,CAAA,4BACA,CAAA,wBACA,CAAA,4BACO,CAAA,WAAA,CAAA,eACC,CAAA,uBAER,CAAA,4BACA,CAAA,eAAkB,CAAA,cACN,CAAA,uCAhBb,kCDrDC,CAAA,iBAAsB,CAkFnB,eAAY,CAAA,WACZ,CAAA,sCC9BJ,0BAsBS,CAAA,yCACP,8BAEA,CAAA,0BACA,CAAA,sBACA,CAAA,4BACO,CAAA,+CAJP,0BAMQ",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-9737fff": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-9737fff";\n   src: url(\'../iconfont-vue-9737fff.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-9737fff.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-9737fff.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-9737fff.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-9737fff.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-9737fff") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-9737fff";\n        content: iconfont-item("iconfont-vue-9737fff/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.icon-collapse {\n\tposition: absolute;\n\tz-index: 105; // above a, under button\n\twidth: 44px;\n\theight: 44px;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\t-webkit-transform: rotate(-90deg);\n\t-ms-transform: rotate(-90deg);\n\ttransform: rotate(-90deg);\n\tcolor: var(--color-main-text);\n\tborder: none;\n\tborder-radius: 0;\n\toutline: none !important;\n\tbackground-color: transparent;\n\tbox-shadow: none;\n\tfont-size: 18px;\n\n\t@include iconfont('triangle-s');\n\n\t&:hover{\n\t\tcolor: var(--color-primary);\n\t}\n\t&--rotated {\n\t\t-webkit-transform: rotate(0deg);\n\t\t-ms-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t\tcolor: var(--color-main-text);\n\t\t&:hover{\n\t\t\tcolor: var(--color-primary);\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.a=d},function(n,t,e){"use strict";var A=e(0),o=e.n(A),i=e(1),a=e.n(i),r=e(4),s=e.n(r),c=e(8),l=e(9),u=e(10),g=e(11),d=a()(o.a),f=s()(c.a),p=s()(l.a),m=s()(u.a),C=s()(g.a);d.push([n.i,'@font-face{font-family:"iconfont-vue-9737fff";src:url('+f+");src:url("+f+') format("embedded-opentype"),url('+p+') format("woff"),url('+m+') format("truetype"),url('+C+') format("svg")}.icon{font-style:normal;font-weight:400}.icon.arrow-left-double:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-left:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right-double:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right:before{font-family:"iconfont-vue-9737fff";content:""}.icon.breadcrumb:before{font-family:"iconfont-vue-9737fff";content:""}.icon.checkmark:before{font-family:"iconfont-vue-9737fff";content:""}.icon.close:before{font-family:"iconfont-vue-9737fff";content:""}.icon.confirm:before{font-family:"iconfont-vue-9737fff";content:""}.icon.info:before{font-family:"iconfont-vue-9737fff";content:""}.icon.menu:before{font-family:"iconfont-vue-9737fff";content:""}.icon.more:before{font-family:"iconfont-vue-9737fff";content:""}.icon.pause:before{font-family:"iconfont-vue-9737fff";content:""}.icon.play:before{font-family:"iconfont-vue-9737fff";content:""}.icon.triangle-s:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-away:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-dnd:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-invisible:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-online:before{font-family:"iconfont-vue-9737fff";content:""}.app-navigation-entry{position:relative;display:flex;flex-shrink:0;flex-wrap:wrap;order:1;box-sizing:border-box;width:100%;min-height:44px;padding-right:4px}.app-navigation-entry.active{background-color:var(--color-primary-light) !important}.app-navigation-entry:focus-within,.app-navigation-entry:hover{background-color:var(--color-background-hover)}.app-navigation-entry.active .app-navigation-entry__children,.app-navigation-entry:focus-within .app-navigation-entry__children,.app-navigation-entry:hover .app-navigation-entry__children{background-color:var(--color-main-background)}.app-navigation-entry.app-navigation-entry--deleted>ul,.app-navigation-entry.app-navigation-entry--collapsible:not(.app-navigation-entry--opened)>ul{display:none}.app-navigation-entry:not(.app-navigation-entry--editing) .app-navigation-entry-link,.app-navigation-entry:not(.app-navigation-entry--editing) .app-navigation-entry-div{padding-right:14px}.app-navigation-entry .app-navigation-entry-link,.app-navigation-entry .app-navigation-entry-div{z-index:100;display:flex;overflow:hidden;flex:1 1 0;box-sizing:border-box;min-height:44px;padding:0;white-space:nowrap;color:var(--color-main-text);background-repeat:no-repeat;background-position:14px center;background-size:16px 16px;line-height:44px}.app-navigation-entry .app-navigation-entry-link .app-navigation-entry-icon,.app-navigation-entry .app-navigation-entry-div .app-navigation-entry-icon{display:flex;align-items:center;flex:0 0 44px;justify-content:center;width:44px;height:44px;background-size:16px 16px}.app-navigation-entry .app-navigation-entry-link .app-navigation-entry__title,.app-navigation-entry .app-navigation-entry-div .app-navigation-entry__title{overflow:hidden;max-width:100%;white-space:nowrap;text-overflow:ellipsis;padding-left:6px}.app-navigation-entry .app-navigation-entry-link .editingContainer,.app-navigation-entry .app-navigation-entry-div .editingContainer{width:calc(100% - 44px);margin:auto}.app-navigation-entry .app-navigation-entry__children{position:relative;display:flex;flex:0 1 auto;flex-direction:column;width:100%}.app-navigation-entry .app-navigation-entry__children .app-navigation-entry{display:inline-flex;flex-wrap:wrap;padding-left:30px}.app-navigation-entry__deleted{display:inline-flex;flex:1 1 0;padding-left:30px !important}.app-navigation-entry__deleted .app-navigation-entry__deleted-description{position:relative;overflow:hidden;flex:1 1 0;white-space:nowrap;text-overflow:ellipsis;line-height:44px}.app-navigation-entry--collapsible .icon-collapse{visibility:hidden}.app-navigation-entry--collapsible.app-navigation-entry--no-icon a .app-navigation-entry-icon,.app-navigation-entry--collapsible:hover a .app-navigation-entry-icon,.app-navigation-entry--collapsible:focus a .app-navigation-entry-icon{visibility:hidden}.app-navigation-entry--collapsible.app-navigation-entry--no-icon .icon-collapse,.app-navigation-entry--collapsible:hover .icon-collapse,.app-navigation-entry--collapsible:focus .icon-collapse{visibility:visible}.app-navigation-entry--collapsible.app-navigation-entry--no-icon .app-navigation-entry__children li:not(.app-navigation-entry--collapsible) a :first-child,.app-navigation-entry--collapsible:hover .app-navigation-entry__children li:not(.app-navigation-entry--collapsible) a :first-child,.app-navigation-entry--collapsible:focus .app-navigation-entry__children li:not(.app-navigation-entry--collapsible) a :first-child{visibility:visible}.app-navigation-entry__utils{display:flex;align-items:center;flex:0 1 auto}.app-navigation-entry__counter-wrapper{margin-right:2px;display:flex;align-items:center;flex:0 1 auto}.app-navigation-entry--editing .app-navigation-entry-edit{z-index:250;opacity:1}.app-navigation-entry--deleted .app-navigation-entry-deleted{z-index:250;transform:translateX(0)}.app-navigation-entry--pinned{order:2;margin-top:auto}.app-navigation-entry--pinned ~ .app-navigation-entry--pinned{margin-top:0}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./AppNavigationItem.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,MACE,iBAAkB,CAClB,eAAgB,CAFlB,+BAMM,kCAAmC,CACnC,WA5Ge,CAAO,wBA0GL,kCACJ,CAAsB,WA1G3B,CAAA,gCAyGU,kCACL,CAAA,WAzGG,CAAA,yBAwGL,kCACE,CAAA,WAxGJ,CAAA,wBAuGC,kCACG,CAAA,WACN,CAxGC,uBAsGC,kCACI,CAAA,WACb,CAAO,mBAFF,kCACQ,CAAA,WACb,CAAA,qBAFO,kCACM,CAAA,WACb,CAAA,kBAFI,kCACS,CAAA,WACb,CAAA,kBAPD,kCAMc,CAAA,WACb,CAAA,kBAPD,kCAMc,CAAA,WACb,CAAA,mBAPD,kCAMc,CAAA,WACb,CAAA,kBAPD,kCAMc,CAAA,WAAsB,CACnC,wBAPD,kCAMc,CAAA,WAAA,CAAsB,8BANpC,kCAMc,CAAA,WAAA,CAAA,6BANd,kCAMc,CAAA,WAAA,CAAA,mCANd,kCAMc,CAAA,WAAA,CAAA,gCANd,kCAMc,CAAA,WAAA,CAAA,sBCkVrB,iBAAqB,CACpB,YAAU,CAAA,aACD,CAAA,cACT,CAAW,OACX,CAAA,qBAEA,CAAA,UAAY,CAAA,eACL,CAAA,iBC7aa,CD+apB,6BATD,sDAcoB,CAAA,+DAdpB,8CAkBoB,CAAA,4LAKlB,6CACmB,CAAA,qJAMoB,YAAA,CAA6B,yKAQxC,kBAC3B,CAAA,iGAK0B,WAAA,CAAA,YAC3B,CAAO,eACE,CAAA,UACD,CAAE,qBAEV,CAAA,eAAY,CAAA,SACZ,CAAA,kBAEA,CAAA,4BACO,CAAA,2BACP,CAAA,+BACA,CAAA,yBACA,CAAA,gBC1dU,CAAI,uJD6dd,YAAA,CAAA,kBAEC,CAAA,aAAa,CAAA,sBAEb,CAAA,UAAe,CAAE,WACjB,CAAK,yBAEL,CAAA,2JAGD,eAAA,CAAA,cACW,CAAA,kBAEV,CAAA,sBACA,CAAA,gBAAe,CAAQ,qIAIxB,uBACM,CAAE,WAAA,CAAA,sDAMT,iBAA+B,CAC9B,YAAU,CAAA,aACD,CAAA,qBAET,CAAA,UAAc,CAAE,4EAGhB,mBACC,CAAA,cAAS,CAAA,iBACM,CACf,+BACA,mBAMF,CAAA,UAAS,CAAA,4BAET,CAAA,0EACA,iBAA0C,CACzC,eAAU,CAAA,UACF,CAAE,kBAEV,CAAA,sBACA,CAAA,gBAAe,CAAQ,kDAEvB,iBAOa,CACb,0OAIE,iBAA0B,CAE3B,gMAT+B,kBAa/B,CAAA,iaAIsC,kBACtC,CAAA,6BACA,YAAA,CAAA,kBAOF,CAAA,aAAa,CAAA,uCAEb,gBAAA,CAGqC,YAErC,CAAY,kBAEZ,CAAA,aAAa,CAAA,0DAOb,WAAA,CAAA,SACC,CAAA,6DAOD,WAAA,CAAA,uBAEC,CAAA,8BACA,OAAA,CAAA,eAKI,CAAE,8DAGL,YAAA",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-9737fff": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-9737fff";\n   src: url(\'../iconfont-vue-9737fff.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-9737fff.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-9737fff.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-9737fff.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-9737fff.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-9737fff") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-9737fff";\n        content: iconfont-item("iconfont-vue-9737fff/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.app-navigation-entry {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tflex-wrap: wrap;\n\torder: 1;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmin-height: $clickable-area;\n\tpadding-right: 4px;\n\n\t// When .active class is applied, change color background of link and utils. The\n\t// !important prevents the focus state to override the active state.\n\t&.active {\n\t\tbackground-color: var(--color-primary-light) !important;\n\t}\n\t&:focus-within,\n\t&:hover {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\t&.active,\n\t&:focus-within,\n\t&:hover {\n\t\t.app-navigation-entry__children {\n\t\t\tbackground-color: var(--color-main-background);\n\t\t}\n\t}\n\n\t/* hide deletion/collapse of subitems */\n\t&.app-navigation-entry--deleted,\n\t&.app-navigation-entry--collapsible:not(.app-navigation-entry--opened) {\n\t\t> ul {\n\t\t\t// NO ANIMATE because if not really hidden, we can still tab through it\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t&:not(.app-navigation-entry--editing) {\n\t\t.app-navigation-entry-link, .app-navigation-entry-div {\n\t\t\tpadding-right: $icon-margin;\n\t\t}\n\t}\n\n\t// Main entry link\n\t.app-navigation-entry-link, .app-navigation-entry-div {\n\t\tz-index: 100; /* above the bullet to allow click*/\n\t\tdisplay: flex;\n\t\toverflow: hidden;\n\t\tflex: 1 1 0;\n\t\tbox-sizing: border-box;\n\t\tmin-height: $clickable-area;\n\t\tpadding: 0;\n\t\twhite-space: nowrap;\n\t\tcolor: var(--color-main-text);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: $icon-margin center;\n\t\tbackground-size: $icon-size $icon-size;\n\t\tline-height: $clickable-area;\n\n\t\t.app-navigation-entry-icon {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tflex: 0 0 $clickable-area;\n\t\t\tjustify-content: center;\n\t\t\twidth: $clickable-area;\n\t\t\theight: $clickable-area;\n\t\t\tbackground-size: $icon-size $icon-size;\n\t\t}\n\n\t\t.app-navigation-entry__title {\n\t\t\toverflow: hidden;\n\t\t\tmax-width: 100%;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t\tpadding-left: 6px;\n\t\t}\n\n\t\t.editingContainer {\n\t\t\twidth: calc(100% - #{$clickable-area});\n\t\t\tmargin: auto;\n\t\t}\n\t}\n\n\t/* Second level nesting for lists */\n\t.app-navigation-entry__children {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\tflex: 0 1 auto;\n\t\tflex-direction: column;\n\t\twidth: 100%;\n\n\t\t.app-navigation-entry {\n\t\t\tdisplay: inline-flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tpadding-left: $clickable-area - $icon-margin;\n\t\t}\n\t}\n}\n\n/* Deleted entries */\n.app-navigation-entry__deleted {\n\tdisplay: inline-flex;\n\tflex: 1 1 0;\n\tpadding-left: $clickable-area - $icon-margin !important;\n\t.app-navigation-entry__deleted-description {\n\t\tposition: relative;\n\t\toverflow: hidden;\n\t\tflex: 1 1 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tline-height: $clickable-area;\n\t}\n}\n\n/* Makes the icon of the collapsible element disappear\n*  When hovering on the root element */\n.app-navigation-entry--collapsible {\n\t//shows the triangle button\n\t.icon-collapse {\n\t\tvisibility: hidden;\n\t}\n\t&.app-navigation-entry--no-icon,\n\t&:hover, &:focus {\n\t\ta .app-navigation-entry-icon {\n\t\t\t// hides the icon\n\t\t\tvisibility: hidden;\n\t\t}\n\t\t.icon-collapse {\n\t\t\t//shows the triangle button\n\t\t\tvisibility: visible;\n\t\t}\n\t\t// prevent the icon of children elements from being hidden\n\t\t// by the previous rule\n\t\t.app-navigation-entry__children li:not(.app-navigation-entry--collapsible) a :first-child {\n\t\t\tvisibility: visible;\n\t\t}\n\t}\n}\n\n/* counter and actions */\n.app-navigation-entry__utils {\n\tdisplay: flex;\n\talign-items: center;\n\tflex: 0 1 auto;\n}\n\n/* counter */\n.app-navigation-entry__counter-wrapper {\n\t// Add slightly more space to the right of the counter\n\tmargin-right: 2px;\n\tdisplay: flex;\n\talign-items: center;\n\tflex: 0 1 auto;\n}\n\n// STATES\n/* editing state */\n.app-navigation-entry--editing {\n\t.app-navigation-entry-edit {\n\t\tz-index: 250;\n\t\topacity: 1;\n\t}\n}\n\n/* deleted state */\n.app-navigation-entry--deleted {\n\t.app-navigation-entry-deleted {\n\t\tz-index: 250;\n\t\ttransform: translateX(0);\n\t}\n}\n\n/* pinned state */\n.app-navigation-entry--pinned {\n\torder: 2;\n\tmargin-top: auto;\n\t// only put a marginTop auto to the first one!\n\t~ .app-navigation-entry--pinned {\n\t\tmargin-top: 0;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),t.a=d},function(n,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){"use strict";e.r(t);var A=e(42),o=e(85),i=e(102),a={name:"AppNavigationIconCollapsible",props:{open:{type:Boolean,default:!0}},methods:{onClick:function(n){this.$emit("click",n)}}},r=e(2),s=e.n(r),c=e(154),l={insert:"head",singleton:!1},u=(s()(c.a,l),c.a.locals,e(3)),g=Object(u.a)(a,(function(){var n=this.$createElement;return(this._self._c||n)("button",{staticClass:"icon-collapse",class:{"icon-collapse--rotated":this.open},on:{click:this.onClick}})}),[],!1,null,"4e54d078",null).exports,d=e(36),f=e(126),p={name:"AppNavigationItem",components:{Actions:o.a,ActionButton:i.a,AppNavigationIconCollapsible:g,InputConfirmCancel:f.a},directives:{ClickOutside:A.directive},mixins:[d.default],props:{title:{type:String,required:!0},icon:{type:String,default:""},loading:{type:Boolean,default:!1},to:{type:[String,Object],default:""},exact:{type:Boolean,default:!1},allowCollapse:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},editLabel:{type:String,default:""},editPlaceholder:{type:String,default:""},pinned:{type:Boolean,default:!1},undo:{type:Boolean,default:!1},open:{type:Boolean,default:!1},menuOpen:{type:Boolean,default:!1},forceMenu:{type:Boolean,default:!1},menuIcon:{type:String,default:void 0},menuPlacement:{type:String,default:"bottom"}},data:function(){return{editingValue:"",opened:this.open,editingActive:!1}},computed:{collapsible:function(){return this.allowCollapse&&!!this.$slots.default},isIconShown:function(){return!this.collapsible||this.collapsible&&!this.isMobile},canHaveChildren:function(){return"AppNavigationItem"!==this.$parent.$options._componentTag},hasChildren:function(){return!!this.$slots.default},hasUtils:function(){return!this.editing&&!!(this.$slots.actions||this.$slots.counter||this.editable||this.undo)},navElement:function(){return this.to?{is:"router-link",tag:"li",to:this.to,exact:this.exact}:{is:"li"}},isActive:function(){return this.to&&this.$route===this.to}},watch:{open:function(n){this.opened=n}},methods:{onMenuToggle:function(n){this.$emit("update:menuOpen",n)},toggleCollapse:function(){this.opened=!this.opened,this.$emit("update:open",this.opened)},onClick:function(n){this.$emit("click",n)},handleEdit:function(){var n=this;this.editingValue=this.title,this.editingActive=!0,this.onMenuToggle(!1),this.$nextTick((function(){n.$refs.editingInput.focusInput()}))},cancelEditing:function(){this.editingActive=!1},handleEditingDone:function(){this.$emit("update:title",this.editingValue),this.editingValue="",this.editingActive=!1},handleUndo:function(){this.$emit("undo")}}},m=e(155),C={insert:"head",singleton:!1},h=(s()(m.a,C),m.a.locals,e(156)),v=e.n(h),b=Object(u.a)(p,(function(){var n,t=this,e=t.$createElement,A=t._self._c||e;return A("nav-element",t._b({staticClass:"app-navigation-entry",class:{"app-navigation-entry--no-icon":!t.isIconShown,"app-navigation-entry--opened":t.opened,"app-navigation-entry--pinned":t.pinned,"app-navigation-entry--editing":t.editingActive,"app-navigation-entry--deleted":t.undo,"app-navigation-entry--collapsible":t.collapsible,active:t.isActive}},"nav-element",t.navElement,!1),[t.undo?t._e():A("a",{staticClass:"app-navigation-entry-link",attrs:{href:"#"},on:{click:t.onClick}},[A("div",{staticClass:"app-navigation-entry-icon",class:(n={"icon-loading-small":t.loading},n[t.icon]=t.icon&&t.isIconShown,n)},[t.loading?t._e():t._t("icon")],2),t._v(" "),t.editingActive?t._e():A("span",{staticClass:"app-navigation-entry__title",attrs:{title:t.title}},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),t._v(" "),t.editingActive?A("div",{staticClass:"editingContainer"},[A("InputConfirmCancel",{ref:"editingInput",attrs:{placeholder:""!==t.editPlaceholder?t.editPlaceholder:t.title},on:{cancel:t.cancelEditing,confirm:t.handleEditingDone},model:{value:t.editingValue,callback:function(n){t.editingValue=n},expression:"editingValue"}})],1):t._e()]),t._v(" "),t.collapsible?A("AppNavigationIconCollapsible",{attrs:{open:t.opened},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.toggleCollapse(n)}}}):t._e(),t._v(" "),t.undo?A("div",{staticClass:"app-navigation-entry__deleted"},[A("div",{staticClass:"app-navigation-entry__deleted-description"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]):t._e(),t._v(" "),t.hasUtils&&!t.editingActive?A("div",{staticClass:"app-navigation-entry__utils"},[t.$slots.counter?A("div",{staticClass:"app-navigation-entry__counter-wrapper"},[t._t("counter")],2):t._e(),t._v(" "),A("Actions",{attrs:{"menu-align":"right",placement:t.menuPlacement,open:t.menuOpen,"force-menu":t.forceMenu,"default-icon":t.menuIcon},on:{"update:open":t.onMenuToggle}},[t.editable&&!t.editingActive?A("ActionButton",{attrs:{icon:"icon-rename"},on:{click:t.handleEdit}},[t._v("\n\t\t\t\t"+t._s(t.editLabel)+"\n\t\t\t")]):t._e(),t._v(" "),t.undo?A("ActionButton",{attrs:{icon:"app-navigation-entry__deleted-button icon-history"},on:{click:t.handleUndo}}):t._e(),t._v(" "),t._t("actions")],2)],1):t._e(),t._v(" "),t.canHaveChildren&&t.hasChildren?A("ul",{staticClass:"app-navigation-entry__children"},[t._t("default")],2):t._e(),t._v(" "),t._t("extra")],2)}),[],!1,null,null,null);"function"==typeof v.a&&v()(b);var y=b.exports;
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.default=y}])}));
//# sourceMappingURL=AppNavigationItem.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/Content.js":
/*!****************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/Content.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(window,(function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=213)}({0:function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var e=r(n,4),t=e[1],o=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),u=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(u).concat([c]).join("\n")}return[t].join("\n")}},1:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},174:function(n,e,t){"use strict";var r=t(0),o=t.n(r),i=t(1),a=t.n(i)()(o.a);a.push([n.i,".content[data-v-07b3675a]{box-sizing:border-box;position:relative;display:flex;padding-top:50px;min-height:100%}.content[data-v-07b3675a]  *{box-sizing:border-box}\n","",{version:3,sources:["webpack://./Content.vue"],names:[],mappings:"AAmEA,0BACC,qBAAsB,CACtB,iBAAkB,CAClB,YAAa,CACb,gBAAiB,CACjB,eAAgB,CALjB,6BAOE,qBAAsB",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.content {\n\tbox-sizing: border-box;\n\tposition: relative;\n\tdisplay: flex;\n\tpadding-top: 50px;\n\tmin-height: 100%;\n\t::v-deep * {\n\t\tbox-sizing: border-box;\n\t}\n}\n"],sourceRoot:""}]),e.a=a},175:function(n,e){},2:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],s=t[u]||0,f="".concat(u," ").concat(s);t[u]=s+1;var l=c(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:f,updater:m(d,e),references:1}),r.push(f)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,l=(f=[],function(n,e){return f[n]=e,f.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,b=0;function m(n,e){var t,r,o;if(e.singleton){var i=b++;t=v||(v=s(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(n,e),s=0;s<t.length;s++){var f=c(t[s]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}t=i}}}},213:function(n,e,t){"use strict";t.r(e);var r={props:{appName:{type:String,required:!0}}},o=t(2),i=t.n(o),a=t(174),c={insert:"head",singleton:!1},u=(i()(a.a,c),a.a.locals,t(3)),s=t(175),f=t.n(s),l=Object(u.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"content",class:"app-"+this.appName.toLowerCase(),attrs:{id:"content-vue"}},[this._t("default")],2)}),[],!1,null,"07b3675a",null);"function"==typeof f.a&&f()(l);var d=l.exports;
/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=d},3:function(n,e,t){"use strict";function r(n,e,t,r,o,i,a,c){var u,s="function"==typeof n?n.options:n;if(e&&(s.render=e,s.staticRenderFns=t,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(n,e){return u.call(e),f(n,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:n,options:s}}t.d(e,"a",(function(){return r}))}})}));
//# sourceMappingURL=Content.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/Multiselect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/Multiselect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=107)}([function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,a=!1,A=void 0;try{for(var o,r=t[Symbol.iterator]();!(i=(o=r.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){a=!0,A=t}finally{try{i||null==r.return||r.return()}finally{if(a)throw A}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}t.exports=function(t){var e=i(t,4),n=e[1],a=e[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),r="/*# ".concat(o," */"),s=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[n].concat(s).concat([r]).join("\n")}return[n].join("\n")}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(i)for(var A=0;A<this.length;A++){var o=this[A][0];null!=o&&(a[o]=!0)}for(var r=0;r<t.length;r++){var s=[].concat(t[r]);i&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},A=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function r(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},i=[],a=0;a<t.length;a++){var A=t[a],s=e.base?A[0]+e.base:A[0],l=n[s]||0,c="".concat(s," ").concat(l);n[s]=l+1;var u=r(c),d={css:A[1],media:A[2],sourceMap:A[3]};-1!==u?(o[u].references++,o[u].updater(d)):o.push({identifier:c,updater:f(d,e),references:1}),i.push(c)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var o=A(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function d(t,e,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,a);else{var A=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(A,o[e]):t.appendChild(A)}}function g(t,e,n){var i=n.css,a=n.media,A=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),A&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,p=0;function f(t,e){var n,i,a;if(e.singleton){var A=p++;n=m||(m=l(e)),i=d.bind(null,n,A,!1),a=d.bind(null,n,A,!0)}else n=l(e),i=g.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var a=r(n[i]);o[a].references--}for(var A=s(t,e),l=0;l<n.length;l++){var c=r(n[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=A}}}},function(t,e,n){"use strict";function i(t,e,n,i,a,A,o,r){var s,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),A&&(l._scopeId="data-v-"+A),o?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=s):a&&(s=r?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(t,e){return s.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:l}}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e){t.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js")},function(t,e){t.exports=__webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js")},function(t,e,n){"use strict";e.a="data:application/vnd.ms-fontobject;base64,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"},function(t,e,n){"use strict";e.a="data:font/woff;base64,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PAE55eh8gAAAAQAAAAEAAIjNr6tfDzz1AAsTiAAAAADc3UwkAAAAANyMcCX/4AAAE5MTiAAAAAgAAgAAAAAAAAABAAATiAAAAAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtOTczN2ZmZlJlZ3VsYXJpY29uZm9udC12dWUtOTczN2ZmZmljb25mb250LXZ1ZS05NzM3ZmZmVmVyc2lvbiAxLjBpY29uZm9udC12dWUtOTczN2ZmZkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtADkANwAzADcAZgBmAGYAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},function(t,e,n){"use strict";e.a="data:font/ttf;base64,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AAATiP/g//UTkwABAAAAAAAAAAAAAAAAAAAABwAAAAATiAAAE4gAABOIAAATiAAABjYAABOIAAAAAP//AAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAACIANgBYAGwAgACUALQBDgF8AZoCEAImAjQCQgKoAyIDpgP+AAEAAAATAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAUAAAAAQAAAAAAAgAHABQAAQAAAAAAAwAUABsAAQAAAAAABAAUAC8AAQAAAAAABQALAEMAAQAAAAAABgAUAE4AAQAAAAAACgArAGIAAQAAAAAACwATAI0AAwABBAkAAQAoAKAAAwABBAkAAgAOAMgAAwABBAkAAwAoANYAAwABBAkABAAoAP4AAwABBAkABQAWASYAAwABBAkABgAoATwAAwABBAkACgBWAWQAAwABBAkACwAmAbppY29uZm9udC12dWUtOTczN2ZmZlJlZ3VsYXJpY29uZm9udC12dWUtOTczN2ZmZmljb25mb250LXZ1ZS05NzM3ZmZmVmVyc2lvbiAxLjBpY29uZm9udC12dWUtOTczN2ZmZkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAtADkANwAzADcAZgBmAGYAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AOQA3ADMANwBmAGYAZgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAATABMAAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBExFhcnJvdy1sZWZ0LWRvdWJsZQphcnJvdy1sZWZ0EmFycm93LXJpZ2h0LWRvdWJsZQthcnJvdy1yaWdodApicmVhZGNydW1iCWNoZWNrbWFyawVjbG9zZQdjb25maXJtBGluZm8EbWVudQRtb3JlBXBhdXNlBHBsYXkKdHJpYW5nbGUtcxB1c2VyLXN0YXR1cy1hd2F5D3VzZXItc3RhdHVzLWRuZBV1c2VyLXN0YXR1cy1pbnZpc2libGUSdXNlci1zdGF0dXMtb25saW5lAAA="},function(t,e,n){"use strict";e.a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLTk3MzdmZmYiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtOTczN2ZmZiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0zMiAwIDUwMTEgNTAwMCIgdW5kZXJsaW5lLXRoaWNrbmVzcz0iMCIgdW5kZXJsaW5lLXBvc2l0aW9uPSI1MCIgdW5pY29kZS1yYW5nZT0iVStlYTAxLWVhMTIiIC8+PG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjAiICAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1sZWZ0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMTsiIGQ9Ik0zNzUwIDM5MDYgbC0xNDA2IC0xNDA2IGwxNDA2IC0xNDA2IGwwIDMxMiBsLTEwOTQgMTA5NCBsMTA5NCAxMDk0IGwwIDMxMiBaTTIzNDQgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQiIHVuaWNvZGU9IiYjeGVhMDI7IiBkPSJNMTU2MyAyNTAwIGwxODc1IC0xODc1IGwwIC0zMTIgbC0yMTg4IDIxODcgbDIxODggMjE4OCBsMCAtMzEzIGwtMTg3NSAtMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodC1kb3VibGUiIHVuaWNvZGU9IiYjeGVhMDM7IiBkPSJNMTI1MCAxMDk0IGwxNDA2IDE0MDYgbC0xNDA2IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaTTI2NTYgMTA5NCBsMTQwNyAxNDA2IGwtMTQwNyAxNDA2IGwwIC0zMTIgbDEwOTQgLTEwOTQgbC0xMDk0IC0xMDk0IGwwIC0zMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcmlnaHQiIHVuaWNvZGU9IiYjeGVhMDQ7IiBkPSJNMzQzOCAyNTAwIGwtMTg3NSAxODc1IGwwIDMxMyBsMjE4NyAtMjE4OCBsLTIxODcgLTIxODcgbDAgMzEyIGwxODc1IDE4NzUgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYnJlYWRjcnVtYiIgdW5pY29kZT0iJiN4ZWEwNTsiIGQ9Ik0xNDggNTAwMCBsLTE0OCAtODUgbDEzOTQgLTI0MTUgbC0xMzk0IC0yNDE1IGwxNDggLTg1IGwxNDQzIDI1MDAgbC0xNDQzIDI1MDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY2hlY2ttYXJrIiB1bmljb2RlPSImI3hlYTA2OyIgZD0iTTQwNDUgMzk3MSBsLTIwNjEgLTIwNjEgbC0xMDI5IDEwMjkgbC00NDIgLTQ0MSBsMTQ3MSAtMTQ3MSBsMjUwMyAyNTAyIGwtNDQyIDQ0MiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjbG9zZSIgdW5pY29kZT0iJiN4ZWEwNzsiIGQ9Ik00Mzc1IDExNTYgbC01MzEgLTUzMSBsLTEzNDQgMTM0NCBsLTEzNDQgLTEzNDQgbC01MzEgNTMxIGwxMzQ0IDEzNDQgbC0xMzQ0IDEzNDQgbDUzMSA1MzEgbDEzNDQgLTEzNDQgbDEzNDQgMTM0NCBsNTMxIC01MzEgbC0xMzQ0IC0xMzQ0IGwxMzQ0IC0xMzQ0IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNvbmZpcm0iIHVuaWNvZGU9IiYjeGVhMDg7IiBkPSJNMjY1NiA0ODQ0IHEtMTAxIDAgLTE4MCAtNTcgcS03NCAtNTIgLTEwOSAtMTM4IHEtMzUgLTg2IC0xOSAtMTc1IHExOCAtOTYgOTAgLTE2NyBsMTQ5NSAtMTQ5NCBsLTM2MTYgMCBxLTc3IDEgLTEzOSAtMjYgcS01OCAtMjQgLTk5IC03MCBxLTM5IC00NCAtNTkgLTEwMSBxLTIwIC01NiAtMjAgLTExNiBxMCAtNjAgMjAgLTExNiBxMjAgLTU3IDU5IC0xMDEgcTQxIC00NiA5OSAtNzAgcTYyIC0yNyAxMzkgLTI1IGwzNjE2IDAgbC0xNDk1IC0xNDk1IHEtNTUgLTUzIC04MSAtMTE2IHEtMjQgLTU5IC0yMSAtMTIxIHEzIC01OCAzMCAtMTEzIHEyNSAtNTQgNjggLTk3IHE0MyAtNDMgOTYgLTY4IHE1NSAtMjYgMTE0IC0yOSBxNjIgLTMgMTIwIDIxIHE2MyAyNSAxMTYgODEgbDIwMjkgMjAyOCBxNTkgNjAgODAgMTQxIHEyMSA4MCAxIDE1OSBxLTIxIDgyIC04MSAxNDIgbC0yMDI5IDIwMjggcS00NCA0NSAtMTAyIDcwIHEtNTggMjUgLTEyMiAyNSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJpbmZvIiB1bmljb2RlPSImI3hlYTA5OyIgZD0iTTI0MjIgNDY4OCBxLTExMSAwIC0yMTMgLTQzIHEtOTggLTQyIC0xNzQgLTExNy41IHEtNzYgLTc1LjUgLTExNyAtMTc0LjUgcS00MyAtMTAxIC00MyAtMjEyLjUgcTAgLTExMS41IDQzIC0yMTIuNSBxNDEgLTk4IDExNyAtMTc0IHE3NiAtNzYgMTc0IC0xMTcgcTEwMiAtNDMgMjEzIC00MyBxMTExIDAgMjEzIDQzIHE5OCA0MSAxNzMuNSAxMTcgcTc1LjUgNzYgMTE3LjUgMTc0IHE0MyAxMDEgNDMgMjEyLjUgcTAgMTExLjUgLTQzIDIxMi41IHEtNDIgOTkgLTExNy41IDE3NC41IHEtNzUuNSA3NS41IC0xNzMuNSAxMTcuNSBxLTEwMiA0MyAtMjEzIDQzIFpNMTU2MyAzMTI1IHEtODYgMCAtMTU4IC00MyBxLTcxIC00MSAtMTEyIC0xMTIgcS00MyAtNzIgLTQzIC0xNTcuNSBxMCAtODUuNSA0MyAtMTU3LjUgcTQxIC03MSAxMTIgLTExMiBxNzIgLTQzIDE1OCAtNDMgbDYyNSAwIGwwIC0xNTYyIGwtNjI1IDAgcS04NiAwIC0xNTggLTQzIHEtNzEgLTQxIC0xMTIgLTExMiBxLTQzIC03MyAtNDMgLTE1OCBxMCAtODUgNDMgLTE1OCBxNDEgLTcxIDExMiAtMTEyIHE3MiAtNDMgMTU4IC00MiBsMTg3NSAwIHE4NSAwIDE1NyA0MiBxNzEgNDEgMTEyIDExMiBxNDMgNzMgNDMgMTU4IHEwIDg1IC00MyAxNTggcS00MSA3MSAtMTEyIDExMiBxLTcyIDQzIC0xNTcgNDMgbC02MjUgMCBsMCAxODc1IHEwIDg1IC00MyAxNTcgcS00MSA3MSAtMTEyIDExMiBxLTczIDQzIC0xNTggNDMgbC05MzcgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtZW51IiB1bmljb2RlPSImI3hlYTBhOyIgZD0iTTYyNSA0Mzc1IGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMjgxMyBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFpNNjI1IDEyNTAgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtb3JlIiB1bmljb2RlPSImI3hlYTBiOyIgZD0iTTc4MSAzMDQ3IHExMTIgMCAyMTMgLTQzIHE5OCAtNDIgMTc0IC0xMTcuNSBxNzYgLTc1LjUgMTE3IC0xNzMuNSBxNDMgLTEwMiA0MyAtMjEzIHEwIC0xMTEgLTQzIC0yMTMgcS00MSAtOTggLTExNyAtMTczLjUgcS03NiAtNzUuNSAtMTc0IC0xMTcuNSBxLTEwMSAtNDMgLTIxMi41IC00MyBxLTExMS41IDAgLTIxMy41IDQzIHEtOTggNDIgLTE3My41IDExNy41IHEtNzUuNSA3NS41IC0xMTcuNSAxNzMuNSBxLTQzIDEwMiAtNDMgMjEzIHEwIDExMSA0MyAyMTMgcTQyIDk4IDExNy41IDE3My41IHE3NS41IDc1LjUgMTczLjUgMTE3LjUgcTEwMiA0MyAyMTMgNDMgWk0yNTAwIDMwNDcgcTExMSAwIDIxMyAtNDMgcTk4IC00MiAxNzMuNSAtMTE3LjUgcTc1LjUgLTc1LjUgMTE3LjUgLTE3My41IHE0MyAtMTAyIDQzIC0yMTMgcTAgLTExMSAtNDMgLTIxMyBxLTQyIC05OCAtMTE3LjUgLTE3My41IHEtNzUuNSAtNzUuNSAtMTczLjUgLTExNy41IHEtMTAyIC00MyAtMjEzIC00MyBxLTExMSAwIC0yMTMgNDMgcS05OCA0MiAtMTczLjUgMTE3LjUgcS03NS41IDc1LjUgLTExNy41IDE3My41IHEtNDMgMTAyIC00MyAyMTMgcTAgMTExIDQzIDIxMyBxNDIgOTggMTE3LjUgMTczLjUgcTc1LjUgNzUuNSAxNzMuNSAxMTcuNSBxMTAyIDQzIDIxMyA0MyBaTTQyMTkgMzA0NyBxMTExIDAgMjEzIC00MyBxOTggLTQyIDE3My41IC0xMTcuNSBxNzUuNSAtNzUuNSAxMTcuNSAtMTczLjUgcTQzIC0xMDIgNDMgLTIxMyBxMCAtMTExIC00MyAtMjEzIHEtNDIgLTk4IC0xMTcuNSAtMTczLjUgcS03NS41IC03NS41IC0xNzMuNSAtMTE3LjUgcS0xMDIgLTQzIC0yMTMuNSAtNDMgcS0xMTEuNSAwIC0yMTIuNSA0MyBxLTk4IDQyIC0xNzQgMTE3LjUgcS03NiA3NS41IC0xMTcgMTczLjUgcS00MyAxMDIgLTQzIDIxMyBxMCAxMTEgNDMgMjEzIHE0MSA5OCAxMTcgMTczLjUgcTc2IDc1LjUgMTc0IDExNy41IHExMDEgNDMgMjEzIDQzIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImI3hlYTBjOyIgZD0iTTkzOCA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaTTI4MTMgNDA2MyBsMCAtMzEyNSBsMTI1MCAwIGwwIDMxMjUgbC0xMjUwIDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiN4ZWEwZDsiIGQ9Ik02MjUgNDM3NSBsMzc1MCAtMTg3NSBsLTM3NTAgLTE4NzUgbDAgMzc1MCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJ0cmlhbmdsZS1zIiB1bmljb2RlPSImI3hlYTBlOyIgZD0iTTEyNTAgMzEyNSBsMTI1MCAtMTI1MCBsMTI1MCAxMjQ4IGwtMjUwMCAyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWF3YXkiIHVuaWNvZGU9IiYjeGVhMGY7IiBkPSJNMjE1NiA0OTY5IHEtMzYwIC00NiAtNjk1IC0xOTcgcS0zMjYgLTE0NyAtNjAxIC0zODAgcS0yNzQgLTIzMSAtNDcyIC01MjggcS0yMDIgLTMwMSAtMzA5IC02NDIgcS0xMTAgLTM1MyAtMTEwIC03MjIgcTAgLTQwNiAxMjggLTc4OCBxMTIzIC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTM2OSAwIDcyMiAxMDcgcTM0MiAxMDQgNjQ0IDMwMSBxMjk4IDE5NCA1MzMgNDYzIHEyMzYgMjcwIDM4OSA1OTMgcTE1NiAzMzEgMjEyIDY5MiBxLTE4OCAtMjA0IC00MjMuNSAtMzUxIHEtMjM1LjUgLTE0NyAtNDk4LjUgLTIyNSBxLTI2OSAtODAgLTU0NyAtODAgcS0zMjIgMCAtNjI4IDEwMyBxLTI5NSA5OSAtNTQ4IDI4NiBxLTI1MSAxODQgLTQzNSA0MzUgcS0xODcgMjUzIC0yODYgNTQ4IHEtMTAzIDMwNiAtMTAzIDYyOCBxMCAyOTMgODAgNTY4IHE3OCAyNjkgMjI1LjUgNDk4LjUgcTE0Ny41IDIyOS41IDM1MC41IDQwMi41IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InVzZXItc3RhdHVzLWRuZCIgdW5pY29kZT0iJiN4ZWExMDsiIGQ9Ik0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFpNMTU2MyAyOTY5IGwxODc1IDAgcTkxIDAgMTc4IC0zOCBxODQgLTM3IDE1MCAtMTAzIHE2NiAtNjYgMTAyIC0xNDkgcTM4IC04NyAzOCAtMTc5IHEwIC05MiAtMzggLTE3OSBxLTM2IC04MyAtMTAyIC0xNDkgcS02NiAtNjYgLTE1MCAtMTAzIHEtODcgLTM4IC0xNzggLTM4IGwtMTg3NSAwIHEtOTIgMCAtMTc5IDM4IHEtODQgMzcgLTE1MCAxMDMgcS02NiA2NiAtMTAyIDE0OSBxLTM4IDg3IC0zOCAxNzkgcTAgOTIgMzggMTc5IHEzNiA4MyAxMDIgMTQ5IHE2NiA2NiAxNTAgMTAzIHE4NyAzOCAxNzkgMzggWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtaW52aXNpYmxlIiB1bmljb2RlPSImI3hlYTExOyIgZD0iTTI1MDAgNTAwMCBxLTQwNiAwIC03ODggLTEyOCBxLTM3MCAtMTI0IC02ODYgLTM1NiBxLTMxMyAtMjI5IC01NDIgLTU0MiBxLTIzMiAtMzE2IC0zNTYgLTY4NiBxLTEyOCAtMzgyIC0xMjggLTc4OCBxMCAtNDA2IDEyOCAtNzg4IHExMjQgLTM3MCAzNTYgLTY4NiBxMjI5IC0zMTMgNTQyIC01NDIgcTMxNiAtMjMyIDY4NiAtMzU2IHEzODIgLTEyOCA3ODggLTEyOCBxNDA2IDAgNzg4IDEyOCBxMzcwIDEyNCA2ODYgMzU2IHEzMTMgMjI5IDU0MiA1NDIgcTIzMiAzMTYgMzU2IDY4NiBxMTI4IDM4MiAxMjggNzg4IHEwIDQwNiAtMTI4IDc4OCBxLTEyNCAzNzAgLTM1NiA2ODYgcS0yMjkgMzEzIC01NDIgNTQyIHEtMzE2IDIzMiAtNjg2IDM1NiBxLTM4MiAxMjggLTc4OCAxMjggWk0yNTAwIDQwMDAgcTMxMSAwIDU5MCAtMTE2IHEyNzEgLTExMiA0NzYuNSAtMzE3LjUgcTIwNS41IC0yMDUuNSAzMTcuNSAtNDc2LjUgcTExNiAtMjc5IDExNiAtNTkwIHEwIC0zMTEgLTExNiAtNTkwIHEtMTEyIC0yNzEgLTMxNy41IC00NzYuNSBxLTIwNS41IC0yMDUuNSAtNDc2LjUgLTMxNy41IHEtMjc5IC0xMTYgLTU5MCAtMTE2IHEtMzExIDAgLTU5MCAxMTYgcS0yNzEgMTEyIC00NzYuNSAzMTcuNSBxLTIwNS41IDIwNS41IC0zMTcuNSA0NzYuNSBxLTExNiAyNzkgLTExNiA1OTAgcTAgMzExIDExNiA1OTAgcTExMiAyNzEgMzE3LjUgNDc2LjUgcTIwNS41IDIwNS41IDQ3Ni41IDMxNy41IHEyNzkgMTE2IDU5MCAxMTYgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0idXNlci1zdGF0dXMtb25saW5lIiB1bmljb2RlPSImI3hlYTEyOyIgZD0iTTE1MDAgMTUwMCBsMjAwMCAwIGwwIDIwMDAgbC0yMDAwIDAgbDAgLTIwMDAgWk0yNTAwIDUwMDAgcS00MDYgMCAtNzg4IC0xMjggcS0zNzAgLTEyNCAtNjg2IC0zNTYgcS0zMTMgLTIyOSAtNTQyIC01NDIgcS0yMzIgLTMxNiAtMzU2IC02ODYgcS0xMjggLTM4MiAtMTI4IC03ODggcTAgLTQwNiAxMjggLTc4OCBxMTI0IC0zNzAgMzU2IC02ODYgcTIyOSAtMzEzIDU0MiAtNTQyIHEzMTYgLTIzMiA2ODYgLTM1NiBxMzgyIC0xMjggNzg4IC0xMjggcTQwNiAwIDc4OCAxMjggcTM3MCAxMjQgNjg2IDM1NiBxMzEzIDIyOSA1NDIgNTQyIHEyMzIgMzE2IDM1NiA2ODYgcTEyOCAzODIgMTI4IDc4OCBxMCA0MDYgLTEyOCA3ODggcS0xMjQgMzcwIC0zNTYgNjg2IHEtMjI5IDMxMyAtNTQyIDU0MiBxLTMxNiAyMzIgLTY4NiAzNTYgcS0zODIgMTI4IC03ODggMTI4IFoiIC8+PC9mb250PjwvZGVmcz48L3N2Zz4="},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(27);var i=n(32),a=Object(i.getGettextBuilder)().detectLocale();[{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)",Actions:"Oberioù",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur",Choose:"Dibab",Close:"Serriñ",Custom:"Personelañ",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Next:"Da heul","No emoji found":"Emoji ebet kavet","No results":"Disoc'h ebet",Objects:"Traoù","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick an emoji":"Choaz un emoji",Previous:"A-raok",Search:"Klask","Search results":"Disoc'hoù an enklask","Select a tag":"Choaz ur c'hlav",Settings:"Arventennoù","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Unable to search the group":"Dibosupl eo klask ar strollad"}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)",Actions:"Accions",Activities:"Activitats","Animals & Nature":"Animals i natura",Choose:"Tria",Close:"Tanca",Custom:"Personalitzat",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No results":"Sense resultats",Objects:"Objectes","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick an emoji":"Trieu un emoji",Previous:"Anterior",Search:"Cerca","Search results":"Resultats de cerca","Select a tag":"Selecciona una etiqueta",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Unable to search the group":"No es pot cercar el grup","Write message, @ to mention someone …":"Escriu un missatge, @ per mencionar algú..."}},{locale:"cs_CZ",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)",Actions:"Akce",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda",Choose:"Zvolit",Close:"Zavřít",Custom:"Uživatelsky určené","External documentation for {title}":"Externí dokumentace k {title}",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No results":"Nic nenalezeno",Objects:"Objekty","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick an emoji":"Vybrat emoji",Previous:"Předchozí",Search:"Hledat","Search results":"Výsledky hledání","Select a tag":"Vybrat štítek",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Unable to search the group":"Nedaří se hledat skupinu","Write message, @ to mention someone …":"Pište zprávu, pokud chcete někoho zmínit, použijte @ …"}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur",Choose:"Vælg",Close:"Luk",Custom:"Brugerdefineret",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået",Next:"Videre","No emoji found":"Ingen emoji fundet","No results":"Ingen resultater",Objects:"Objekter","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick an emoji":"Vælg en emoji",Previous:"Forrige",Search:"Søg","Search results":"Søgeresultater","Select a tag":"Vælg et mærke",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Unable to search the group":"Kan ikke søge på denne gruppe","Write message, @ to mention someone …":"Skriv i meddelelse, @ for at nævne nogen  …"}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur",Choose:"Auswählen",Close:"Schließen",Custom:"Benutzerdefiniert","External documentation for {title}":"Externe Dokumentation für {title}",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen",Previous:"Vorherige",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen-Navigation","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Write message, @ to mention someone …":"Nachricht schreiben, @ um jemanden zu erwähnen ..."}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)",Actions:"Aktionen",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur",Choose:"Auswählen",Close:"Schließen",Custom:"Benutzerdefiniert","External documentation for {title}":"Externe Dokumentation für {title}",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No results":"Keine Ergebnisse",Objects:"Gegenstände","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick an emoji":"Ein Emoji auswählen",Previous:"Vorherige",Search:"Suche","Search results":"Suchergebnisse","Select a tag":"Schlagwort auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen-Navigation","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Write message, @ to mention someone …":"Nachricht schreiben, @ um jemanden zu erwähnen ..."}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)",Actions:"Ενέργειες",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση",Choose:"Επιλογή",Close:"Κλείσιμο",Custom:"Προσαρμογή",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick an emoji":"Επιλέξτε ένα emoji",Previous:"Προηγούμενο",Search:"Αναζήτηση","Search results":"Αποτελέσματα αναζήτησης","Select a tag":"Επιλογή ετικέτας",Settings:"Ρυθμίσεις","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας"}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)",Actions:"Agoj",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo",Choose:"Elektu",Close:"Fermu",Custom:"Propra",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj","Message limit of {count} characters reached":"La limo je {count} da literoj atingita",Next:"Sekva","No emoji found":"La emoĝio forestas","No results":"La rezulto forestas",Objects:"Objektoj","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick an emoji":"Elekti emoĝion ",Previous:"Antaŭa",Search:"Serĉi","Search results":"Serĉrezultoj","Select a tag":"Elektu etikedon",Settings:"Agordo","Settings navigation":"Agorda navigado","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Unable to search the group":"Ne eblas serĉi en la grupo","Write message, @ to mention someone …":"Mesaĝi, uzu @ por mencii iun ..."}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)",Actions:"Acciones",Activities:"Actividades","Animals & Nature":"Animales y naturaleza",Choose:"Elegir",Close:"Cerrar",Custom:"Personalizado",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca","Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres",Next:"Siguiente","No emoji found":"No hay ningún emoji","No results":" Ningún resultado",Objects:"Objetos","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick an emoji":"Elegir un emoji",Previous:"Anterior",Search:"Buscar","Search results":"Resultados de la búsqueda","Select a tag":"Seleccione una etiqueta",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Unable to search the group":"No es posible buscar en el grupo","Write message, @ to mention someone …":"Escriba un mensaje, @ para mencionar a alguien..."}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)",Choose:"Aukeratu",Close:"Itxi",Next:"Hurrengoa","No results":"Emaitzarik ez","Pause slideshow":"Pausatu diaporama",Previous:"Aurrekoa","Select a tag":"Hautatu etiketa bat",Settings:"Ezarpenak","Start slideshow":"Hasi diaporama"}},{locale:"fi_FI",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)",Actions:"Toiminnot",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto",Choose:"Valitse",Close:"Sulje",Custom:"Mukautettu",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt","Message limit of {count} characters reached":"Viestin maksimimerkkimäärä  {count} täynnä ",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No results":"Ei tuloksia",Objects:"Esineet & asiat","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick an emoji":"Valitse emoji",Previous:"Edellinen",Search:"Etsi","Search results":"Hakutulokset","Select a tag":"Valitse tagi",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Smileys & Emotion":"Hymiöt ja & tunteet","Start slideshow":"Aloita diaesitys",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Unable to search the group":"Ryhmää ei voi hakea","Write message, @ to mention someone …":"Kirjoita viesti, @ mainitaksesi jonkun..."}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)",Actions:"Actions",Activities:"Activités","Animals & Nature":"Animaux & Nature",Choose:"Choisir",Close:"Fermer",Custom:"Personnalisé",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No results":"Aucun résultat",Objects:"Objets","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick an emoji":"Choisissez un émoji",Previous:"Précédent",Search:"Chercher","Search results":"Résultats de recherche","Select a tag":"Sélectionnez une balise",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Unable to search the group":"Impossible de chercher le groupe","Write message, @ to mention someone …":"Écrivez un message, @ pour mentionner quelqu'un…"}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)",Actions:"Accións",Activities:"Actividades","Animals & Nature":"Animais e natureza",Choose:"Escoller",Close:"Pechar",Custom:"Personalizado",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No results":"Sen resultados",Objects:"Obxectos","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick an emoji":"Escolla un «emoji»",Previous:"Anterir",Search:"Buscar","Search results":"Resultados da busca","Select a tag":"Seleccione unha etiqueta",Settings:"Axustes","Settings navigation":"Navegación de axustes","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Unable to search the group":"Non foi posíbel buscar o grupo","Write message, @ to mention someone …":"Escriba a mensaxe, @ para mencionar a alguén…"}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)",Actions:"פעולות",Activities:"פעילויות","Animals & Nature":"חיות וטבע",Choose:"בחירה",Close:"סגירה",Custom:"בהתאמה אישית",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No results":"אין תוצאות",Objects:"חפצים","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick an emoji":"נא לבחור אמוג׳י",Previous:"הקודם",Search:"חיפוש","Search results":"תוצאות חיפוש","Select a tag":"בחירת תגית",Settings:"הגדרות","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Unable to search the group":"לא ניתן לחפש בקבוצה"}},{locale:"hu_HU",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)",Actions:"Műveletek",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet",Choose:"Válassszon",Close:"Bezárás",Custom:"Egyéni",Flags:"Zászló","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve",Next:"Következő","No emoji found":"Nem található emodzsi","No results":"Nincs találat",Objects:"Tárgyak","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick an emoji":"Válasszon egy emodzsit",Previous:"Előző",Search:"Keresés","Search results":"Találatok","Select a tag":"Válasszon címkét",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Unable to search the group":"A csoport nem kereshető","Write message, @ to mention someone …":"Írjon üzenetet, @ valaki megemlítéséhez…"}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)",Actions:"Aðgerðir",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra",Choose:"Velja",Close:"Loka",Custom:"Sérsniðið",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No results":"Engar niðurstöður",Objects:"Hlutir","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick an emoji":"Veldu tjáningartákn",Previous:"Fyrri",Search:"Leita","Search results":"Leitarniðurstöður","Select a tag":"Veldu merki",Settings:"Stillingar","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Unable to search the group":"Get ekki leitað í hópnum"}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)",Actions:"Azioni",Activities:"Attività","Animals & Nature":"Animali e natura",Choose:"Scegli",Close:"Chiudi",Custom:"Personalizzato","External documentation for {title}":"Documentazione esterna per {title}",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto",Next:"Successivo","No emoji found":"Nessun emoji trovato","No results":"Nessun risultato",Objects:"Oggetti","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick an emoji":"Scegli un emoji",Previous:"Precedente",Search:"Cerca","Search results":"Risultati di ricerca","Select a tag":"Seleziona un'etichetta",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Unable to search the group":"Impossibile cercare il gruppo","Write message, @ to mention someone …":"Scrivi messaggio, @ per menzionare qualcuno…"}},{locale:"ja_JP",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)",Actions:"操作",Activities:"アクティビティ","Animals & Nature":"動物と自然",Choose:"選択",Close:"閉じる",Custom:"カスタム",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています",Next:"次","No emoji found":"絵文字が見つかりません","No results":"なし",Objects:"物","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick an emoji":"絵文字を選択",Previous:"前",Search:"検索","Search results":"検索結果","Select a tag":"タグを選択",Settings:"設定","Settings navigation":"ナビゲーション設定","Smileys & Emotion":"笑顔と気持ち","Start slideshow":"スライドショーを開始",Symbols:"記号","Travel & Places":"旅行と場所","Unable to search the group":"グループを検索できません","Write message, @ to mention someone …":"メッセージを書く、@ で通知します。"}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)",Actions:"Veiksmai",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta",Choose:"Pasirinkti",Close:"Užverti",Custom:"Tinkinti","External documentation for {title}":"Išorinė {title} dokumentacija",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba",Next:"Kitas","No emoji found":"Nerasta jaustukų","No results":"Nėra rezultatų",Objects:"Objektai","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick an emoji":"Pasirinkti jaustuką",Previous:"Ankstesnis",Search:"Ieškoti","Search results":"Paieškos rezultatai","Select a tag":"Pasirinkti žymę",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Write message, @ to mention someone …":"Rašykite žinutę, naudokite @ norėdami kažką paminėti…"}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)",Choose:"Izvēlēties",Close:"Aizvērt",Next:"Nākamais","No results":"Nav rezultātu","Pause slideshow":"Pauzēt slaidrādi",Previous:"Iepriekšējais","Select a tag":"Izvēlēties birku",Settings:"Iestatījumi","Start slideshow":"Sākt slaidrādi"}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)",Actions:"Акции",Activities:"Активности","Animals & Nature":"Животни & Природа",Choose:"Избери",Close:"Затвори",Custom:"Прилагодени",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No results":"Нема резултати",Objects:"Објекти","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick an emoji":"Избери емотикон",Previous:"Предходно",Search:"Барај","Search results":"Резултати од барувањето","Select a tag":"Избери ознака",Settings:"Параметри","Settings navigation":"Параметри за навигација","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу",Symbols:"Симболи","Travel & Places":"Патувања & Места","Unable to search the group":"Неможе да се принајде групата","Write message, @ to mention someone …":"Напиши порака, @ за да спомнеш некој …"}},{locale:"nb_NO",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)",Actions:"Handlinger",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur",Choose:"Velg",Close:"Lukk",Custom:"Selvvalgt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Next:"Neste","No emoji found":"Fant ingen emoji","No results":"Ingen resultater",Objects:"Objekter","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick an emoji":"Velg en emoji",Previous:"Forrige",Search:"Søk","Search results":"Søkeresultater","Select a tag":"Velg en merkelapp",Settings:"Innstillinger","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning",Symbols:"Symboler","Travel & Places":"Reise og steder","Unable to search the group":"Kunne ikke søke i gruppen"}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)",Actions:"Acties",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur",Choose:"Kies",Close:"Sluiten",Custom:"Aangepast",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt","Message limit of {count} characters reached":"Berichtlengte van {count} karakters bereikt",Next:"Volgende","No emoji found":"Geen emoji gevonden","No results":"Geen resultaten",Objects:"Objecten","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick an emoji":"Kies een emoji",Previous:"Vorige",Search:"Zoeken","Search results":"Zoekresultaten","Select a tag":"Selecteer een label",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Unable to search the group":"Kan niet in de groep zoeken","Write message, @ to mention someone …":"Schrijf een bericht, @ om iemand te noemen ..."}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)",Actions:"Accions",Choose:"Causir",Close:"Tampar",Next:"Seguent","No results":"Cap de resultat","Pause slideshow":"Metre en pausa lo diaporama",Previous:"Precedent","Select a tag":"Seleccionar una etiqueta",Settings:"Paramètres","Start slideshow":"Lançar lo diaporama"}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)",Actions:"Działania",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura",Choose:"Wybierz",Close:"Zamknij",Custom:"Zwyczajne","External documentation for {title}":"Dokumentacja zewnętrzna dla {title}",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków",Next:"Następny","No emoji found":"Nie znaleziono emotikonów","No results":"Brak wyników",Objects:"Obiekty","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick an emoji":"Wybierz emoji",Previous:"Poprzedni",Search:"Szukaj","Search results":"Wyniki wyszukiwania","Select a tag":"Wybierz etykietę",Settings:"Ustawienia","Settings navigation":"Nawigacja ustawień","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Unable to search the group":"Nie można przeszukać grupy","Write message, @ to mention someone …":"Napisz wiadomość, aby wspomnieć o kimś użyj @…"}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ",Actions:"Ações",Activities:"Atividades","Animals & Nature":"Animais & Natureza",Choose:"Escolher",Close:"Fechar",Custom:"Personalizado","External documentation for {title}":"Documentação externa para {title}",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No results":"Sem resultados",Objects:"Objetos","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick an emoji":"Escolha um emoji",Previous:"Anterior",Search:"Pesquisar","Search results":"Resultados da pesquisa","Select a tag":"Selecionar uma tag",Settings:"Configurações","Settings navigation":"Navegação de configurações","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Unable to search the group":"Não foi possível pesquisar o grupo","Write message, @ to mention someone …":"Escreva mensagem, @ para mencionar alguém ..."}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)",Actions:"Ações",Choose:"Escolher",Close:"Fechar",Next:"Seguinte","No results":"Sem resultados","Pause slideshow":"Pausar diaporama",Previous:"Anterior","Select a tag":"Selecionar uma etiqueta",Settings:"Definições","Start slideshow":"Iniciar diaporama","Unable to search the group":"Não é possível pesquisar o grupo"}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)",Choose:"Выберите",Close:"Закрыть",Next:"Следующее","No results":"Результаты отсуствуют","Pause slideshow":"Приостановить показ слйдов",Previous:"Предыдущее","Select a tag":"Выберите метку",Settings:"Параметры","Start slideshow":"Начать показ слайдов"}},{locale:"sk_SK",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)",Actions:"Akcie",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda",Choose:"Vybrať",Close:"Zatvoriť",Custom:"Zvyk",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No results":"Žiadne výsledky",Objects:"Objekty","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick an emoji":"Vyberte si emodži",Previous:"Predchádzajúci",Search:"Hľadať","Search results":"Výsledky vyhľadávania","Select a tag":"Vybrať štítok",Settings:"Nastavenia","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Unable to search the group":"Skupinu sa nepodarilo nájsť"}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)",Actions:"Dejanja",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava",Choose:"Izbor",Close:"Zapri",Custom:"Po meri","External documentation for {title}":"Zunanja dokumentacija za {title}",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No results":"Ni zadetkov",Objects:"Predmeti","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick an emoji":"Izbor izrazne ikone",Previous:"Predhodni",Search:"Iskanje","Search results":"Zadetki iskanja","Select a tag":"Izbor oznake",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Unable to search the group":"Ni mogoče iskati po skuspini","Write message, @ to mention someone …":"Napišite sporočilo, z @ omenite osebo ..."}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)",Actions:"Åtgärder",Activities:"Aktiviteter","Animals & Nature":"Djur & Natur",Choose:"Välj",Close:"Stäng",Custom:"Anpassad",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta","Message limit of {count} characters reached":"Meddelandegräns {count} tecken används",Next:"Nästa","No emoji found":"Hittade inga emojis","No results":"Inga resultat",Objects:"Objekt","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick an emoji":"Välj en emoji",Previous:"Föregående",Search:"Sök","Search results":"Sökresultat","Select a tag":"Välj en tag",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Unable to search the group":"Kunde inte söka i gruppen","Write message, @ to mention someone …":"Skicka meddelande, skriv @ för att omnämna någon ..."}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)",Actions:"İşlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa",Choose:"Seçin",Close:"Kapat",Custom:"Özel","External documentation for {title}":"{title} için dış belgeler",Flags:"Bayraklar","Food & Drink":"Yeme ve İçme","Frequently used":"Sık kullanılanlar","Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve Beden","Pick an emoji":"Bir emoji seçin",Previous:"Önceki",Search:"Arama","Search results":"Arama sonuçları","Select a tag":"Bir etiket seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Smileys & Emotion":"İfadeler ve Duygular","Start slideshow":"Slayt sunumunu başlat",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve Yerler","Unable to search the group":"Grupta arama yapılamadı","Write message, @ to mention someone …":"İletiyi yazın. Birini anmak için @ kullanın …"}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)",Actions:"Дії",Activities:"Діяльність","Animals & Nature":"Тварини та природа",Choose:"Виберіть",Close:"Закрити",Custom:"Власне",Flags:"Прапори","Food & Drink":"Їжа та напитки","Frequently used":"Найчастіші",Next:"Вперед","No emoji found":"Емоційки відсутні","No results":"Відсутні результати",Objects:"Об'єкти","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick an emoji":"Виберіть емоційку",Previous:"Назад",Search:"Пошук","Search results":"Результати пошуку","Select a tag":"Виберіть позначку",Settings:"Налаштування","Smileys & Emotion":"Усміхайлики та емоційки","Start slideshow":"Почати показ слайдів",Symbols:"Символи","Travel & Places":"Поїздки та місця","Unable to search the group":"Неможливо шукати в групі"}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）",Actions:"行为",Activities:"活动","Animals & Nature":"动物 & 自然",Choose:"选择",Close:"关闭",Custom:"自定义",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制",Next:"下一个","No emoji found":"表情未找到","No results":"无结果",Objects:"物体","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick an emoji":"选择一个表情",Previous:"上一个",Search:"搜索","Search results":"搜索结果","Select a tag":"选择一个标签",Settings:"设置","Settings navigation":"设置向导","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片",Symbols:"符号","Travel & Places":"旅游 & 地点","Unable to search the group":"无法搜索分组","Write message, @ to mention someone …":"输入消息，输入 @ 来提醒某人"}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義","External documentation for {title}":"{title} 的外部文檔",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)",Actions:"動作",Activities:"活動","Animals & Nature":"動物與自然",Choose:"選擇",Close:"關閉",Custom:"自定義",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制",Next:"下一個","No emoji found":"未找到表情符號","No results":"無結果",Objects:"物件","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick an emoji":"選擇表情符號",Previous:"上一個",Search:"搜尋","Search results":"搜尋結果","Select a tag":"選擇標籤",Settings:"設定","Settings navigation":"設定值導覽","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片",Symbols:"標誌","Travel & Places":"旅遊與景點","Unable to search the group":"無法搜尋群組","Write message, @ to mention someone …":"輸入訊息時可使用 @ 來標示某人..."}}].forEach((function(t){var e={};for(var n in t.translations)t.translations[n].pluralId?e[n]={msgid:n,msgid_plural:t.translations[n].pluralId,msgstr:t.translations[n].msgstr}:e[n]={msgid:n,msgstr:[t.translations[n]]};a.addTranslation(t.locale,{translations:{"":e}})}));var A=a.build(),o=A.ngettext.bind(A),r=A.gettext.bind(A)},function(t,e){t.exports=__webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js")},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,".popover{z-index:100000;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.popover__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius);background:var(--color-main-background)}.popover__arrow{position:absolute;z-index:1;width:0;height:0;margin:10px;border-style:solid;border-color:var(--color-main-background)}.popover[x-placement^='top']{margin-bottom:10px}.popover[x-placement^='top'] .popover__arrow{bottom:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='bottom']{margin-top:10px}.popover[x-placement^='bottom'] .popover__arrow{top:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='right']{margin-left:10px}.popover[x-placement^='right'] .popover__arrow{top:calc(50% - $arrow-width);left:-10px;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='left']{margin-right:10px}.popover[x-placement^='left'] .popover__arrow{top:calc(50% - $arrow-width);right:-10px;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-bottom-color:transparent !important}.popover[aria-hidden='true']{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.popover[aria-hidden='false']{visibility:visible;transition:opacity var(--animation-quick);opacity:1}\n","",{version:3,sources:["webpack://./Popover.vue"],names:[],mappings:"AAgHA,SACC,cAAe,CACf,wBAAyB,CAEzB,sDAAuD,CAEvD,gBACC,SAAU,CACV,4BAA6B,CAC7B,kCAAmC,CACnC,uCAAwC,CACxC,gBAGA,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,WApBgB,CAqBhB,kBAAmB,CACnB,yCAA0C,CApB5C,6BAwBE,kBA1BgB,CAElB,6CA2BG,YA7Be,CA8Bf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAjCe,CAkCf,yCAA0C,CAC1C,0CAA2C,CAC3C,wCAAyC,CAlC5C,gCAuCE,eAzCgB,CAElB,gDA0CG,SA5Ce,CA6Cf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAhDe,CAiDf,uCAAwC,CACxC,yCAA0C,CAC1C,wCAAyC,CAjD5C,+BAsDE,gBAxDgB,CAElB,+CAyDG,4BAA6B,CAC7B,UA5De,CA6Df,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,uCAAwC,CACxC,0CAA2C,CAC3C,wCAAyC,CAhE5C,8BAqEE,iBAvEgB,CAElB,8CAwEG,4BAA6B,CAC7B,WA3Ee,CA4Ef,cAAe,CACf,aAAc,CACd,6BA9Ee,CA+Ef,uCAAwC,CACxC,yCAA0C,CAC1C,0CAA2C,CA/E9C,6BAoFE,iBAAkB,CAClB,2EAA6E,CAC7E,SAAU,CAtFZ,8BA0FE,kBAAmB,CACnB,yCAA0C,CAC1C,SAAU",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$arrow-width: 10px;\n\n.popover {\n\tz-index: 100000;\n\tdisplay: block !important;\n\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t&__inner {\n\t\tpadding: 0;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground: var(--color-main-background);\n\t}\n\n\t&__arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: $arrow-width;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n\n\t&[x-placement^='top'] {\n\t\tmargin-bottom: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\tbottom: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='bottom'] {\n\t\tmargin-top: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='right'] {\n\t\tmargin-left: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tleft: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='left'] {\n\t\tmargin-right: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tright: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t}\n\t}\n\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\topacity: 0;\n\t}\n\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity var(--animation-quick);\n\t\topacity: 1;\n\t}\n}\n\n"],sourceRoot:""}]),e.a=o},function(t,e){},function(t,e,n){"use strict";n.r(e);var i=n(7),a=n(2),A=n.n(a),o=n(23),r={insert:"head",singleton:!1};A()(o.a,r),o.a.locals;
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
i.VTooltip.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("9737fff",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),i.VTooltip.options.defaultHtml=!1;e.default=i.VTooltip},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js")},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,".vue-tooltip[data-v-9737fff]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;opacity:0;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-9737fff][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-9737fff][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-9737fff][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-9737fff][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-9737fff][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-9737fff][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-9737fff] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-9737fff] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n","",{version:3,sources:["webpack://./index.scss"],names:[],mappings:"AAeA,6BACC,iBAAkB,CAClB,cAAe,CACf,UAAW,CACX,SAAU,CACV,aAAc,CACd,QAAS,CAET,eAAgB,CAChB,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,SAAU,CACV,eAAgB,CAEhB,eAAgB,CAChB,sDAAuD,CAhBxD,gEAqBG,QAAS,CACT,YAAa,CACb,eAAgB,CAChB,6BA1Be,CA2Bf,8BAA+B,CAC/B,+BAAgC,CAChC,6BAA8B,CA3BjC,mEAkCG,KAAM,CACN,YAAa,CACb,eAAgB,CAChB,6BAvCe,CAwCf,4BAA6B,CAC7B,8BAA+B,CAC/B,6BAA8B,CAxCjC,kEA+CG,UAAW,CACX,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,4BAA6B,CAC7B,+BAAgC,CAChC,6BAA8B,CArDjC,iEA4DG,SAAU,CACV,cAAe,CACf,aAAc,CACd,6BAjEe,CAkEf,4BAA6B,CAC7B,8BAA+B,CAC/B,+BAAgC,CAlEnC,iDAwEE,iBAAkB,CAClB,wCAAyC,CACzC,SAAU,CA1EZ,kDA6EE,kBAAmB,CACnB,uBAAwB,CACxB,SAAU,CA/EZ,4CAoFE,eAAgB,CAChB,eAAgB,CAChB,iBAAkB,CAClB,4BAA6B,CAC7B,kCAAmC,CACnC,6CAA8C,CAzFhD,4CA8FE,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,QAAS,CACT,kBAAmB,CACnB,yCAA0C",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n/**\n* @copyright Copyright (c) 2016, John Molakvoæ <skjnldsv@protonmail.com>\n* @copyright Copyright (c) 2016, Robin Appelman <robin@icewind.nl>\n* @copyright Copyright (c) 2016, Jan-Christoph Borchardt <hey@jancborchardt.net>\n* @copyright Copyright (c) 2016, Erik Pellikka <erik@pellikka.org>\n* @copyright Copyright (c) 2015, Vincent Petry <pvince81@owncloud.com>\n*\n* Bootstrap v3.3.5 (http://getbootstrap.com)\n* Copyright 2011-2015 Twitter, Inc.\n* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n*/\n\n$arrow-width: 10px;\n\n.vue-tooltip[data-v-#{$scope_version}] {\n\tposition: absolute;\n\tz-index: 100000;\n\tright: auto;\n\tleft: auto;\n\tdisplay: block;\n\tmargin: 0;\n\t/* default to top */\n\tmargin-top: -3px;\n\tpadding: 10px 0;\n\ttext-align: left;\n\ttext-align: start;\n\topacity: 0;\n\tline-height: 1.6;\n\n\tline-break: auto;\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t// TOP\n\t&[x-placement^='top'] {\n\t\t.tooltip-arrow {\n\t\t\tbottom: 0;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// BOTTOM\n\t&[x-placement^='bottom'] {\n\t\t.tooltip-arrow {\n\t\t\ttop: 0;\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// RIGHT\n\t&[x-placement^='right'] {\n\t\t.tooltip-arrow {\n\t\t\tright: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tborder-left-color: transparent;\n\t\t}\n\t}\n\n\t// LEFT\n\t&[x-placement^='left'] {\n\t\t.tooltip-arrow {\n\t\t\tleft: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent;\n\t\t\tborder-right-color: transparent;\n\t\t\tborder-bottom-color: transparent;\n\t\t}\n\t}\n\n\t// HIDDEN / SHOWN\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity .15s, visibility .15s;\n\t\topacity: 0;\n\t}\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity .15s;\n\t\topacity: 1;\n\t}\n\n\t// CONTENT\n\t.tooltip-inner {\n\t\tmax-width: 350px;\n\t\tpadding: 5px 8px;\n\t\ttext-align: center;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-main-background);\n\t}\n\n\t// ARROW\n\t.tooltip-arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: 0;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n}\n"],sourceRoot:""}]),e.a=o},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js")},function(t,e,n){"use strict";var i={name:"Popover",components:{VPopover:n(7).VPopover},mounted:function(){var t=this;this.$watch((function(){return t.$refs.popover.isOpen}),(function(e){e?t.$emit("after-show"):t.$emit("after-hide")}))}},a=n(2),A=n.n(a),o=n(19),r={insert:"head",singleton:!1},s=(A()(o.a,r),o.a.locals,n(3)),l=n(20),c=n.n(l),u=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("VPopover",this._g(this._b({ref:"popover",attrs:{"popover-base-class":"popover","popover-wrapper-class":"popover__wrapper","popover-arrow-class":"popover__arrow","popover-inner-class":"popover__inner"}},"VPopover",this.$attrs,!1),this.$listeners),[this._t("trigger"),this._v(" "),e("template",{slot:"popover"},[this._t("default")],2)],2)}),[],!1,null,null,null);"function"==typeof c.a&&c()(u);e.a=u.exports},function(t,e){t.exports=__webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.es.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js")},function(t,e){t.exports=__webpack_require__(/*! @nextcloud/l10n/dist/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},,function(t,e){t.exports=__webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js")},function(t,e,n){"use strict";n.r(e);var i=n(5),a=new(n.n(i).a)({data:function(){return{isMobile:!1}},watch:{isMobile:function(t){this.$emit("changed",t)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){this.isMobile=document.documentElement.clientWidth<1024}}});e.default={data:function(){return{isMobile:!1}},mounted:function(){a.$on("changed",this.onIsMobileChanged),this.isMobile=a.isMobile},beforeDestroy:function(){a.$off("changed",this.onIsMobileChanged)},methods:{onIsMobileChanged:function(t){this.isMobile=t}}}},function(t,e){t.exports=__webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js")},,function(t,e){t.exports=__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js")},function(t,e){t.exports=__webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js")},function(t,e){t.exports=__webpack_require__(/*! striptags */ "./node_modules/striptags/src/striptags.js")},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,".mention-bubble--primary .mention-bubble__content[data-v-724f9d58]{color:var(--color-primary-text);background-color:var(--color-primary-element)}.mention-bubble__wrapper[data-v-724f9d58]{max-width:150px;height:18px;vertical-align:text-bottom;display:inline-flex;align-items:center}.mention-bubble__content[data-v-724f9d58]{display:inline-flex;overflow:hidden;align-items:center;max-width:100%;height:20px;-webkit-user-select:none;user-select:none;padding-right:6px;padding-left:2px;border-radius:10px;background-color:var(--color-background-dark)}.mention-bubble__icon[data-v-724f9d58]{position:relative;width:16px;height:16px;border-radius:8px;background-color:var(--color-background-darker);background-repeat:no-repeat;background-position:center;background-size:12px}.mention-bubble__icon--with-avatar[data-v-724f9d58]{color:inherit;background-size:cover}.mention-bubble__title[data-v-724f9d58]{overflow:hidden;margin-left:2px;white-space:nowrap;text-overflow:ellipsis}.mention-bubble__title[data-v-724f9d58]::before{content:attr(title)}.mention-bubble__select[data-v-724f9d58]{position:absolute;z-index:-1;left:-1000px}\n","",{version:3,sources:["webpack://./MentionBubble.vue"],names:[],mappings:"AAsGC,mEACC,+BAAgC,CAChC,6CAA8C,CAC9C,0CAGA,eAXsB,CAatB,WAAwC,CACxC,0BAA2B,CAC3B,mBAAoB,CACpB,kBAAmB,CACnB,0CAGA,mBAAoB,CACpB,eAAgB,CAChB,kBAAmB,CACnB,cAAe,CACf,WAzBkB,CA0BlB,wBAAyB,CACzB,gBAAiB,CACjB,iBAAkC,CAClC,gBA3BkB,CA4BlB,kBAAiC,CACjC,6CAA8C,CAC9C,uCAGA,iBAAkB,CAClB,UAjCuD,CAkCvD,WAlCuD,CAmCvD,iBAAsC,CACtC,+CAAgD,CAChD,2BAA4B,CAC5B,0BAA2B,CAC3B,oBAA0D,CAE1D,oDACC,aAAc,CACd,qBAAsB,CACtB,wCAID,eAAgB,CAChB,eAlDkB,CAmDlB,kBAAmB,CACnB,sBAAuB,CAJvB,gDAOC,mBAAoB,CACpB,yCAKD,iBAAkB,CAClB,UAAW,CACX,YAAa",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$bubble-height: 20px;\n$bubble-max-width: 150px;\n$bubble-padding: 2px;\n$bubble-avatar-size: $bubble-height - 2 * $bubble-padding;\n\n.mention-bubble {\n\t&--primary &__content {\n\t\tcolor: var(--color-primary-text);\n\t\tbackground-color: var(--color-primary-element);\n\t}\n\n\t&__wrapper {\n\t\tmax-width: $bubble-max-width;\n\t\t// Align with text\n\t\theight: $bubble-height - $bubble-padding;\n\t\tvertical-align: text-bottom;\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t}\n\n\t&__content {\n\t\tdisplay: inline-flex;\n\t\toverflow: hidden;\n\t\talign-items: center;\n\t\tmax-width: 100%;\n\t\theight: $bubble-height ;\n\t\t-webkit-user-select: none;\n\t\tuser-select: none;\n\t\tpadding-right: $bubble-padding * 3;\n\t\tpadding-left: $bubble-padding;\n\t\tborder-radius: $bubble-height / 2;\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&__icon {\n\t\tposition: relative;\n\t\twidth: $bubble-avatar-size;\n\t\theight: $bubble-avatar-size;\n\t\tborder-radius: $bubble-avatar-size / 2;\n\t\tbackground-color: var(--color-background-darker);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t\tbackground-size: $bubble-avatar-size - 2 * $bubble-padding;\n\n\t\t&--with-avatar {\n\t\t\tcolor: inherit;\n\t\t\tbackground-size: cover;\n\t\t}\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\tmargin-left: $bubble-padding;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\t// Put label in ::before so it is not selectable\n\t\t&::before {\n\t\t\tcontent: attr(title);\n\t\t}\n\t}\n\n\t// Hide the mention id so it is selectable\n\t&__select {\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tleft: -1000px;\n\t}\n}\n\n"],sourceRoot:""}]),e.a=o},function(t,e,n){"use strict";n.d(e,"a",(function(){return i.default})),n.d(e,"b",(function(){return a.default})),n.d(e,"c",(function(){return A.default})),n.d(e,"d",(function(){return o.default})),n.d(e,"e",(function(){return g}));var i=n(75),a=n(76),A=n(36),o=n(60),r=(n(6),n(59),n(58),n(37)),s=n.n(r),l=n(13),c=n(82),u=n(34);function d(t,e,n,i,a,A,o){try{var r=t[A](o),s=r.value}catch(t){return void n(t)}r.done?e(s):Promise.resolve(s).then(i,a)}
/**
 * @copyright Copyright (c) 2020 Georg Ehrke <georg-nextcloud@ehrke.email>
 *
 * @author Georg Ehrke <georg-nextcloud@ehrke.email>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var g={data:function(){return{hasStatus:!1,userStatus:{status:null,message:null,icon:null}}},methods:{fetchUserStatus:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var i,a,A,o,r,d,g,m,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Object(c.getCapabilities)(),Object.prototype.hasOwnProperty.call(i,"user_status")&&i.user_status.enabled){e.next=3;break}return e.abrupt("return");case 3:if(Object(u.getCurrentUser)()){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,s.a.get(Object(l.generateOcsUrl)("apps/user_status/api/v1",2)+"statuses/".concat(encodeURIComponent(t)));case 8:a=e.sent,A=a.data,o=A.ocs.data,r=o.status,d=o.message,g=o.icon,n.userStatus.status=r,n.userStatus.message=d||"",n.userStatus.icon=g||"",n.hasStatus=!0,e.next=22;break;case 17:if(e.prev=17,e.t0=e.catch(5),404!==e.t0.response.status||0!==(null===(m=e.t0.response.data.ocs)||void 0===m||null===(p=m.data)||void 0===p?void 0:p.length)){e.next=21;break}return e.abrupt("return");case 21:console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[5,17]])})),function(){var t=this,n=arguments;return new Promise((function(i,a){var A=e.apply(t,n);function o(t){d(A,i,a,o,r,"next",t)}function r(t){d(A,i,a,o,r,"throw",t)}o(void 0)}))})()}}};
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js")},,function(t,e){t.exports=__webpack_require__(/*! linkifyjs/string */ "./node_modules/linkifyjs/string.js")},,,function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js")},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,"\nbutton.menuitem[data-v-febed9b6] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-febed9b6] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-febed9b6]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-febed9b6] {\n\tcursor: default;\n}\n.menuitem.active[data-v-febed9b6] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n","",{version:3,sources:["webpack://./PopoverMenuItem.vue"],names:[],mappings:";AAmLA;CACA,gBAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,uBAAA;CACA,eAAA;AACA;AAEA;CACA,eAAA;AACA;AAEA;CACA,4CAAA;CACA,gBAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>\n  -\n  - @author John Molakvoæ <skjnldsv@protonmail.com>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<li class="popover__menuitem">\n\t\t\x3c!-- If item.href is set, a link will be directly used --\x3e\n\t\t<a v-if="item.href"\n\t\t\t:href="(item.href) ? item.href : \'#\' "\n\t\t\t:target="(item.target) ? item.target : \'\' "\n\t\t\t:download="item.download"\n\t\t\tclass="focusable"\n\t\t\trel="noreferrer noopener"\n\t\t\t@click="action">\n\t\t\t<span v-if="!iconIsUrl" :class="item.icon" />\n\t\t\t<img v-else :src="item.icon">\n\t\t\t<p v-if="item.text && item.longtext">\n\t\t\t\t<strong class="menuitem-text">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</strong><br>\n\t\t\t\t<span class="menuitem-text-detail">\n\t\t\t\t\t{{ item.longtext }}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<span v-else-if="item.text">\n\t\t\t\t{{ item.text }}\n\t\t\t</span>\n\t\t\t<p v-else-if="item.longtext">\n\t\t\t\t{{ item.longtext }}\n\t\t\t</p>\n\t\t</a>\n\n\t\t\x3c!-- If item.input is set instead, an put will be used --\x3e\n\t\t<span v-else-if="item.input" class="menuitem" :class="{active: item.active}">\n\t\t\t\x3c!-- does not show if input is checkbox --\x3e\n\t\t\t<span v-if="item.input !== \'checkbox\'" :class="item.icon" />\n\n\t\t\t\x3c!-- only shows if input is text --\x3e\n\t\t\t<form v-if="item.input === \'text\'"\n\t\t\t\t:class="item.input"\n\t\t\t\t@submit.prevent="item.action">\n\t\t\t\t<input :type="item.input"\n\t\t\t\t\t:value="item.value"\n\t\t\t\t\t:placeholder="item.text"\n\t\t\t\t\trequired>\n\t\t\t\t<input type="submit" value="" class="icon-confirm">\n\t\t\t</form>\n\n\t\t\t\x3c!-- checkbox --\x3e\n\t\t\t<template v-else>\n\t\t\t\t\x3c!-- eslint-disable-next-line --\x3e\n\t\t\t\t<input :id="key" v-model="item.model"\n\t\t\t\t\t:type="item.input"\n\t\t\t\t\t:class="item.input"\n\t\t\t\t\t@change="item.action">\n\t\t\t\t<label :for="key" @click.stop.prevent="item.action">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</label>\n\t\t\t</template>\n\t\t</span>\n\n\t\t\x3c!-- If item.action is set instead, a button will be used --\x3e\n\t\t<button v-else-if="item.action"\n\t\t\tclass="menuitem focusable"\n\t\t\t:class="{active: item.active}"\n\t\t\t:disabled="item.disabled"\n\t\t\t@click.stop.prevent="item.action">\n\t\t\t<span :class="item.icon" />\n\t\t\t<p v-if="item.text && item.longtext">\n\t\t\t\t<strong class="menuitem-text">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</strong><br>\n\t\t\t\t<span class="menuitem-text-detail">\n\t\t\t\t\t{{ item.longtext }}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<span v-else-if="item.text">\n\t\t\t\t{{ item.text }}\n\t\t\t</span>\n\t\t\t<p v-else-if="item.longtext">\n\t\t\t\t{{ item.longtext }}\n\t\t\t</p>\n\t\t</button>\n\n\t\t\x3c!-- If item.longtext is set AND the item does not have an action --\x3e\n\t\t<span v-else class="menuitem" :class="{active: item.active}">\n\t\t\t<span :class="item.icon" />\n\t\t\t<p v-if="item.text && item.longtext">\n\t\t\t\t<strong class="menuitem-text">\n\t\t\t\t\t{{ item.text }}\n\t\t\t\t</strong><br>\n\t\t\t\t<span class="menuitem-text-detail">\n\t\t\t\t\t{{ item.longtext }}\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t\t<span v-else-if="item.text">\n\t\t\t\t{{ item.text }}\n\t\t\t</span>\n\t\t\t<p v-else-if="item.longtext">\n\t\t\t\t{{ item.longtext }}\n\t\t\t</p>\n\t\t</span>\n\t</li>\n</template>\n\n<script>\nexport default {\n\tname: \'PopoverMenuItem\',\n\tprops: {\n\t\titem: {\n\t\t\ttype: Object,\n\t\t\trequired: true,\n\t\t\tdefault: () => {\n\t\t\t\treturn {\n\t\t\t\t\tkey: \'nextcloud-link\',\n\t\t\t\t\thref: \'https://nextcloud.com\',\n\t\t\t\t\ticon: \'icon-links\',\n\t\t\t\t\ttext: \'Nextcloud\',\n\t\t\t\t}\n\t\t\t},\n\t\t\t// check the input types\n\t\t\t// TODO: add more validation of types\n\t\t\tvalidator: item => {\n\t\t\t\t// TODO: support radio\n\t\t\t\tif (item.input) {\n\t\t\t\t\treturn [\'text\', \'checkbox\'].indexOf(item.input) !== -1\n\t\t\t\t}\n\t\t\t\treturn true\n\t\t\t},\n\t\t},\n\t},\n\tcomputed: {\n\t\t// random key for inputs binding if not provided\n\t\tkey() {\n\t\t\treturn this.item.key\n\t\t\t\t? this.item.key\n\t\t\t\t: Math.round(Math.random() * 16 * 1000000).toString(16)\n\t\t},\n\t\ticonIsUrl() {\n\t\t\ttry {\n\t\t\t\t// eslint-disable-next-line no-new\n\t\t\t\tnew URL(this.item.icon)\n\t\t\t\treturn true\n\t\t\t} catch (_) {\n\t\t\t\treturn false\n\t\t\t}\n\t\t},\n\t},\n\tmethods: {\n\t\t// allow us to use both link and an action on `a`\n\t\t// we still need to make sure item.action exists\n\t\taction(event) {\n\t\t\tif (this.item.action) {\n\t\t\t\tthis.item.action(event)\n\t\t\t}\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\tbutton.menuitem {\n\t\ttext-align: left;\n\t}\n\n\tbutton.menuitem * {\n\t\tcursor: pointer;\n\t}\n\n\tbutton.menuitem:disabled {\n\t\topacity: 0.5 !important;\n\t\tcursor: default;\n\t}\n\n\tbutton.menuitem:disabled * {\n\t\tcursor: default;\n\t}\n\n\t.menuitem.active {\n\t\tbox-shadow: inset 2px 0 var(--color-primary);\n\t\tborder-radius: 0;\n\t}\n</style>\n\n<style lang="scss" scoped>\nli {\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\n\t&.hidden {\n\t\tdisplay: none;\n\t}\n\n\t> button,\n\t> a,\n\t> .menuitem {\n\t\tcursor: pointer;\n\t\tline-height: $clickable-area;\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-weight: normal;\n\t\tbox-shadow: none;\n\t\twidth: 100%;\n\t\tcolor: var(--color-main-text);\n\t\twhite-space: nowrap;\n\t\topacity: $opacity_normal;\n\n\t\t// TODO split into individual components for readability\n\t\tspan[class^=\'icon-\'],\n\t\tspan[class*=\' icon-\'],\n\t\t&[class^=\'icon-\'],\n\t\t&[class*=\' icon-\'] {\n\t\t\tmin-width: 0; /* Overwrite icons*/\n\t\t\tmin-height: 0;\n\t\t\tbackground-position: #{$icon-margin} center;\n\t\t\tbackground-size: $icon-size;\n\t\t}\n\n\t\tspan[class^=\'icon-\'],\n\t\tspan[class*=\' icon-\'] {\n\t\t\t/* Keep padding to define the width to\n\t\t\t\tassure correct position of a possible text */\n\t\t\tpadding: #{$clickable-area / 2} 0 #{$clickable-area / 2} $clickable-area;\n\t\t}\n\n\t\t// If no icons set, force left margin to align\n\t\t&:not([class^=\'icon-\']):not([class*=\'icon-\']) {\n\t\t\t> span,\n\t\t\t> input,\n\t\t\t> form {\n\t\t\t\t&:not([class^=\'icon-\']):not([class*=\'icon-\']):first-child {\n\t\t\t\t\tmargin-left: $clickable-area;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&[class^=\'icon-\'],\n\t\t&[class*=\' icon-\'] {\n\t\t\tpadding: 0 $icon-margin 0 $clickable-area;\n\t\t}\n\n\t\t&:not(:disabled):hover,\n\t\t&:not(:disabled):focus,\n\t\t&:not(:disabled).active {\n\t\t\topacity: $opacity_full !important;\n\t\t}\n\n\t\t/* prevent .action class to break the design */\n\t\t&.action {\n\t\t\tpadding: inherit !important;\n\t\t}\n\n\t\t> span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t// long text area\n\t\t> p {\n\t\t\twidth: 150px;\n\t\t\tline-height: 1.6em;\n\t\t\tpadding: 8px 0;\n\t\t\twhite-space: normal;\n\n\t\t\t// in case there are no spaces like long email addresses\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t// TODO: do we really supports it?\n\t\t> select {\n\t\t\tmargin: 0;\n\t\t\tmargin-left: 6px;\n\t\t}\n\n\t\t/* Add padding if contains icon+text */\n\t\t&:not(:empty) {\n\t\t\tpadding-right: $icon-margin !important;\n\t\t}\n\n\t\t/* DEPRECATED! old img in popover fallback\n\t\t\t* TODO: to remove */\n\t\t> img {\n\t\t\twidth: $icon-size;\n\t\t\tpadding: $icon-margin;\n\t\t}\n\n\t\t/* checkbox/radio fixes */\n\t\t> input.radio + label,\n\t\t> input.checkbox + label {\n\t\t\tpadding: 0 !important;\n\t\t\twidth: 100%;\n\t\t}\n\t\t> input.checkbox + label::before {\n\t\t\tmargin: -2px 13px 0;\n\t\t}\n\t\t> input.radio + label::before {\n\t\t\tmargin: -2px 12px 0;\n\t\t}\n\t\t> input:not([type=radio]):not([type=checkbox]):not([type=image]) {\n\t\t\twidth: 150px;\n\t\t}\n\n\t\t// Forms & text inputs\n\t\tform {\n\t\t\tdisplay: flex;\n\t\t\tflex: 1 1 auto;\n\t\t\t/* put a small space between text and form\n\t\t\t\tif there is an element before */\n\t\t\t&:not(:first-child)  {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t\t/* no margin if hidden span before */\n\t\t> span.hidden + form,\n\t\t> span[style*=\'display:none\'] + form {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t/* Inputs inside popover supports text, submit & reset */\n\t\tinput {\n\t\t\tmin-width: $clickable-area;\n\t\t\tmax-height: #{$clickable-area - 4px}; /* twice the element margin-y */\n\t\t\tmargin: 2px 0;\n\t\t\tflex: 1 1 auto;\n\t\t\t// space between inline inputs\n\t\t\t&:not(:first-child) {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t}\n\n\t// TODO: do that in js, should be cleaner\n\t/* css hack, only first not hidden */\n\t&:not(.hidden):not([style*=\'display:none\']) {\n\t\t&:first-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-top: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&:last-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-bottom: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t> button {\n\t\tpadding: 0;\n\t\tspan {\n\t\t\topacity: $opacity_full;\n\t\t}\n\t}\n}\n</style>\n'],sourceRoot:""}]),e.a=o},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,"li[data-v-febed9b6]{display:flex;flex:0 0 auto}li.hidden[data-v-febed9b6]{display:none}li>button[data-v-febed9b6],li>a[data-v-febed9b6],li>.menuitem[data-v-febed9b6]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-febed9b6],li>button span[class*=' icon-'][data-v-febed9b6],li>button[class^='icon-'][data-v-febed9b6],li>button[class*=' icon-'][data-v-febed9b6],li>a span[class^='icon-'][data-v-febed9b6],li>a span[class*=' icon-'][data-v-febed9b6],li>a[class^='icon-'][data-v-febed9b6],li>a[class*=' icon-'][data-v-febed9b6],li>.menuitem span[class^='icon-'][data-v-febed9b6],li>.menuitem span[class*=' icon-'][data-v-febed9b6],li>.menuitem[class^='icon-'][data-v-febed9b6],li>.menuitem[class*=' icon-'][data-v-febed9b6]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-febed9b6],li>button span[class*=' icon-'][data-v-febed9b6],li>a span[class^='icon-'][data-v-febed9b6],li>a span[class*=' icon-'][data-v-febed9b6],li>.menuitem span[class^='icon-'][data-v-febed9b6],li>.menuitem span[class*=' icon-'][data-v-febed9b6]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-febed9b6]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-febed9b6],li>button[class*=' icon-'][data-v-febed9b6],li>a[class^='icon-'][data-v-febed9b6],li>a[class*=' icon-'][data-v-febed9b6],li>.menuitem[class^='icon-'][data-v-febed9b6],li>.menuitem[class*=' icon-'][data-v-febed9b6]{padding:0 14px 0 44px}li>button[data-v-febed9b6]:not(:disabled):hover,li>button[data-v-febed9b6]:not(:disabled):focus,li>button:not(:disabled).active[data-v-febed9b6],li>a[data-v-febed9b6]:not(:disabled):hover,li>a[data-v-febed9b6]:not(:disabled):focus,li>a:not(:disabled).active[data-v-febed9b6],li>.menuitem[data-v-febed9b6]:not(:disabled):hover,li>.menuitem[data-v-febed9b6]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-febed9b6]{opacity:1 !important}li>button.action[data-v-febed9b6],li>a.action[data-v-febed9b6],li>.menuitem.action[data-v-febed9b6]{padding:inherit !important}li>button>span[data-v-febed9b6],li>a>span[data-v-febed9b6],li>.menuitem>span[data-v-febed9b6]{cursor:pointer;white-space:nowrap}li>button>p[data-v-febed9b6],li>a>p[data-v-febed9b6],li>.menuitem>p[data-v-febed9b6]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal;overflow:hidden;text-overflow:ellipsis}li>button>select[data-v-febed9b6],li>a>select[data-v-febed9b6],li>.menuitem>select[data-v-febed9b6]{margin:0;margin-left:6px}li>button[data-v-febed9b6]:not(:empty),li>a[data-v-febed9b6]:not(:empty),li>.menuitem[data-v-febed9b6]:not(:empty){padding-right:14px !important}li>button>img[data-v-febed9b6],li>a>img[data-v-febed9b6],li>.menuitem>img[data-v-febed9b6]{width:16px;padding:14px}li>button>input.radio+label[data-v-febed9b6],li>button>input.checkbox+label[data-v-febed9b6],li>a>input.radio+label[data-v-febed9b6],li>a>input.checkbox+label[data-v-febed9b6],li>.menuitem>input.radio+label[data-v-febed9b6],li>.menuitem>input.checkbox+label[data-v-febed9b6]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-febed9b6]::before,li>a>input.checkbox+label[data-v-febed9b6]::before,li>.menuitem>input.checkbox+label[data-v-febed9b6]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-febed9b6]::before,li>a>input.radio+label[data-v-febed9b6]::before,li>.menuitem>input.radio+label[data-v-febed9b6]::before{margin:-2px 12px 0}li>button>input[data-v-febed9b6]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-febed9b6]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-febed9b6]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-febed9b6],li>a form[data-v-febed9b6],li>.menuitem form[data-v-febed9b6]{display:flex;flex:1 1 auto}li>button form[data-v-febed9b6]:not(:first-child),li>a form[data-v-febed9b6]:not(:first-child),li>.menuitem form[data-v-febed9b6]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-febed9b6],li>button>span[style*='display:none']+form[data-v-febed9b6],li>a>span.hidden+form[data-v-febed9b6],li>a>span[style*='display:none']+form[data-v-febed9b6],li>.menuitem>span.hidden+form[data-v-febed9b6],li>.menuitem>span[style*='display:none']+form[data-v-febed9b6]{margin-left:0}li>button input[data-v-febed9b6],li>a input[data-v-febed9b6],li>.menuitem input[data-v-febed9b6]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-febed9b6]:not(:first-child),li>a input[data-v-febed9b6]:not(:first-child),li>.menuitem input[data-v-febed9b6]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-febed9b6]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-febed9b6],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-febed9b6]{margin-bottom:12px}li>button[data-v-febed9b6]{padding:0}li>button span[data-v-febed9b6]{opacity:1}\n","",{version:3,sources:["webpack://./PopoverMenuItem.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AA4MA,oBACC,YAAa,CACb,aAAc,CAFf,2BAKE,YAAa,CALf,+EAWE,cAAe,CACf,gBC/LmB,CDgMnB,QAAS,CACT,eAAgB,CAChB,4BAA6B,CAC7B,YAAa,CACb,sBAAuB,CACvB,WAAY,CACZ,QAAS,CACT,SAAU,CACV,kBAAmB,CACnB,eAAgB,CAChB,UAAW,CACX,4BAA6B,CAC7B,kBAAmB,CACnB,UC3LiB,CDiKnB,giBAiCG,WAAY,CACZ,YAAa,CACb,+BAA2C,CAC3C,oBCnNa,CD+KhB,+RA2CG,wBC9NkB,CDmLrB,iqCAoDK,gBCvOgB,CDmLrB,iQA2DG,qBC9OkB,CDmLrB,6aAiEG,oBAAiC,CAjEpC,oGAsEG,0BAA2B,CAtE9B,8FA0EG,cAAe,CACf,kBAAmB,CA3EtB,qFAgFG,WAAY,CACZ,iBAAkB,CAClB,aAAc,CACd,kBAAmB,CAGnB,eAAgB,CAChB,sBAAuB,CAvF1B,oGA4FG,QAAS,CACT,eAAgB,CA7FnB,mHAkGG,6BAAsC,CAlGzC,2FAwGG,UCvRa,CDwRb,YCpR6C,CD2KhD,mRA+GG,oBAAqB,CACrB,UAAW,CAhHd,sKAmHG,kBAAmB,CAnHtB,6JAsHG,kBAAmB,CAtHtB,4QAyHG,WAAY,CAzHf,8FA8HG,YAAa,CACb,aAAc,CA/HjB,oJAmII,eAAgB,CAnIpB,oTAyIG,aAAc,CAzIjB,iGA6IG,cChUkB,CDiUlB,eAAY,CACZ,YAAa,CACb,aAAc,CAhJjB,uJAmJI,eAAgB,CAnJpB,+gBA8JK,eAA8B,CA9JnC,ygBAqKK,kBAAiC,CArKtC,2BA2KE,SAAU,CA3KZ,gCA6KG,SC7Ua",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nli {\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\n\t&.hidden {\n\t\tdisplay: none;\n\t}\n\n\t> button,\n\t> a,\n\t> .menuitem {\n\t\tcursor: pointer;\n\t\tline-height: $clickable-area;\n\t\tborder: 0;\n\t\tborder-radius: 0; // otherwise Safari will cut the border-radius area\n\t\tbackground-color: transparent;\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\theight: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-weight: normal;\n\t\tbox-shadow: none;\n\t\twidth: 100%;\n\t\tcolor: var(--color-main-text);\n\t\twhite-space: nowrap;\n\t\topacity: $opacity_normal;\n\n\t\t// TODO split into individual components for readability\n\t\tspan[class^='icon-'],\n\t\tspan[class*=' icon-'],\n\t\t&[class^='icon-'],\n\t\t&[class*=' icon-'] {\n\t\t\tmin-width: 0; /* Overwrite icons*/\n\t\t\tmin-height: 0;\n\t\t\tbackground-position: #{$icon-margin} center;\n\t\t\tbackground-size: $icon-size;\n\t\t}\n\n\t\tspan[class^='icon-'],\n\t\tspan[class*=' icon-'] {\n\t\t\t/* Keep padding to define the width to\n\t\t\t\tassure correct position of a possible text */\n\t\t\tpadding: #{$clickable-area / 2} 0 #{$clickable-area / 2} $clickable-area;\n\t\t}\n\n\t\t// If no icons set, force left margin to align\n\t\t&:not([class^='icon-']):not([class*='icon-']) {\n\t\t\t> span,\n\t\t\t> input,\n\t\t\t> form {\n\t\t\t\t&:not([class^='icon-']):not([class*='icon-']):first-child {\n\t\t\t\t\tmargin-left: $clickable-area;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&[class^='icon-'],\n\t\t&[class*=' icon-'] {\n\t\t\tpadding: 0 $icon-margin 0 $clickable-area;\n\t\t}\n\n\t\t&:not(:disabled):hover,\n\t\t&:not(:disabled):focus,\n\t\t&:not(:disabled).active {\n\t\t\topacity: $opacity_full !important;\n\t\t}\n\n\t\t/* prevent .action class to break the design */\n\t\t&.action {\n\t\t\tpadding: inherit !important;\n\t\t}\n\n\t\t> span {\n\t\t\tcursor: pointer;\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t// long text area\n\t\t> p {\n\t\t\twidth: 150px;\n\t\t\tline-height: 1.6em;\n\t\t\tpadding: 8px 0;\n\t\t\twhite-space: normal;\n\n\t\t\t// in case there are no spaces like long email addresses\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t// TODO: do we really supports it?\n\t\t> select {\n\t\t\tmargin: 0;\n\t\t\tmargin-left: 6px;\n\t\t}\n\n\t\t/* Add padding if contains icon+text */\n\t\t&:not(:empty) {\n\t\t\tpadding-right: $icon-margin !important;\n\t\t}\n\n\t\t/* DEPRECATED! old img in popover fallback\n\t\t\t* TODO: to remove */\n\t\t> img {\n\t\t\twidth: $icon-size;\n\t\t\tpadding: $icon-margin;\n\t\t}\n\n\t\t/* checkbox/radio fixes */\n\t\t> input.radio + label,\n\t\t> input.checkbox + label {\n\t\t\tpadding: 0 !important;\n\t\t\twidth: 100%;\n\t\t}\n\t\t> input.checkbox + label::before {\n\t\t\tmargin: -2px 13px 0;\n\t\t}\n\t\t> input.radio + label::before {\n\t\t\tmargin: -2px 12px 0;\n\t\t}\n\t\t> input:not([type=radio]):not([type=checkbox]):not([type=image]) {\n\t\t\twidth: 150px;\n\t\t}\n\n\t\t// Forms & text inputs\n\t\tform {\n\t\t\tdisplay: flex;\n\t\t\tflex: 1 1 auto;\n\t\t\t/* put a small space between text and form\n\t\t\t\tif there is an element before */\n\t\t\t&:not(:first-child)  {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t\t/* no margin if hidden span before */\n\t\t> span.hidden + form,\n\t\t> span[style*='display:none'] + form {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t/* Inputs inside popover supports text, submit & reset */\n\t\tinput {\n\t\t\tmin-width: $clickable-area;\n\t\t\tmax-height: #{$clickable-area - 4px}; /* twice the element margin-y */\n\t\t\tmargin: 2px 0;\n\t\t\tflex: 1 1 auto;\n\t\t\t// space between inline inputs\n\t\t\t&:not(:first-child) {\n\t\t\t\tmargin-left: 5px;\n\t\t\t}\n\t\t}\n\t}\n\n\t// TODO: do that in js, should be cleaner\n\t/* css hack, only first not hidden */\n\t&:not(.hidden):not([style*='display:none']) {\n\t\t&:first-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-top: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&:last-of-type {\n\t\t\t> button, > a, > .menuitem {\n\t\t\t\t> form, > input {\n\t\t\t\t\tmargin-bottom: $icon-margin - 2px; // minus the input margin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t> button {\n\t\tpadding: 0;\n\t\tspan {\n\t\t\topacity: $opacity_full;\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),e.a=o},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,"ul[data-v-4dae360a]{display:flex;flex-direction:column}\n","",{version:3,sources:["webpack://./PopoverMenu.vue"],names:[],mappings:"AA0DA,oBACC,YAAa,CACb,qBAAsB",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nul {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n"],sourceRoot:""}]),e.a=o},function(t,e){},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js")},function(t,e){t.exports=__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js")},function(t,e,n){"use strict";n.r(e),n.d(e,"USERID_REGEX",(function(){return C})),n.d(e,"USERID_REGEX_WITH_SPACE",(function(){return v}));n(90),n(15),n(26),n(91),n(24),n(79),n(25),n(57),n(63);var i=n(62),a=n.n(i),A=n(48),o=n.n(A),r=n(43),s=n.n(r),l=n(5),c=n.n(l),u=n(13),d={name:"MentionBubble",props:{id:{type:String,required:!0},label:{type:String,required:!0},icon:{type:String,required:!0},source:{type:String,required:!0},primary:{type:Boolean,default:!1}},computed:{avatarUrl:function(){return this.id&&"users"===this.source?this.getAvatarUrl(this.id,44):null},mentionText:function(){return-1===this.id.indexOf(" ")?"@".concat(this.id):'@"'.concat(this.id,'"')}},methods:{getAvatarUrl:function(t,e){return Object(u.generateUrl)("/avatar/{user}/{size}",{user:t,size:e})}}},g=n(2),m=n.n(g),p=n(44),f={insert:"head",singleton:!1},h=(m()(p.a,f),p.a.locals,n(3)),b=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mention-bubble",class:{"mention-bubble--primary":t.primary},attrs:{contenteditable:"false"}},[n("span",{staticClass:"mention-bubble__wrapper"},[n("span",{staticClass:"mention-bubble__content"},[n("span",{staticClass:"mention-bubble__icon",class:[t.icon,"mention-bubble__icon--"+(t.avatarUrl?"with-avatar":"")],style:t.avatarUrl?{backgroundImage:"url("+t.avatarUrl+")"}:null}),t._v(" "),n("span",{staticClass:"mention-bubble__title",attrs:{role:"heading",title:t.label}})]),t._v(" "),n("span",{staticClass:"mention-bubble__select",attrs:{role:"none"}},[t._v(t._s(t.mentionText))])])])}),[],!1,null,"724f9d58",null).exports,C=new RegExp("".concat("(?:^|\\s)","(@[a-zA-Z0-9_.@\\-']+)(").concat("(?:[^a-z]|$)",")"),"gi"),v=new RegExp("".concat("(?:^|\\s)",'(@"[a-zA-Z0-9 _.@\\-\']+")(').concat("(?:[^a-z]|$)",")"),"gi");e.default={props:{userData:{type:Object,default:function(){return{}}}},methods:{renderContent:function(t){var e=this;return a()(t).split(C).map((function(t){return t.split(v)})).flat().map((function(t){if(!t.startsWith("@"))return o()(t,{defaultProtocol:"https",target:"_blank",className:"external",attributes:{rel:"noopener noreferrer"}});var n=t.replace(/[@"]/gi,"");return" "+e.genSelectTemplate(n)})).join("").replace(/\n/gim,"<br>").replace(/&amp;/gim,"&")},parseContent:function(t){var e=t.replace(/<br>/gim,"\n");return e=(e=(e=e.replace(/&nbsp;/gim," ")).replace(/&amp;/gim,"&")).replace(/<\/div>/gim,"\n"),e=s()(e,"<div>"),e=s()(e)},genSelectTemplate:function(t){var e=this.userData[t];return e?this.renderComponentHtml(e,b).replace(/[\n\t]/gim,""):-1===t.indexOf(" ")?"@".concat(t):'@"'.concat(t,'"')},renderComponentHtml:function(t,e){var n=new(c.a.extend(e))({propsData:t}),i=document.createElement("div"),a=document.createElement("div");i.style.display="none",i.appendChild(a),document.body.appendChild(i),n.$mount(a);var A=i.innerHTML;return n.$destroy(),i.remove(),A}}}},function(t,e,n){"use strict";var i=n(12);e.a={methods:{n:i.a,t:i.b}}},function(t,e){t.exports=__webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js")},function(t,e,n){"use strict";n(35);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
function i(t,e,n){this.r=t,this.g=e,this.b=n}function a(t,e,n){var a=[];a.push(e);for(var A=function(t,e){var n=new Array(3);return n[0]=(e[1].r-e[0].r)/t,n[1]=(e[1].g-e[0].g)/t,n[2]=(e[1].b-e[0].b)/t,n}(t,[e,n]),o=1;o<t;o++){var r=parseInt(e.r+A[0]*o,10),s=parseInt(e.g+A[1]*o,10),l=parseInt(e.b+A[2]*o,10);a.push(new i(r,s,l))}return a}e.a=function(t){t||(t=6);var e=new i(182,70,157),n=new i(221,203,85),A=new i(0,130,201),o=a(t,e,n),r=a(t,n,A),s=a(t,A,e);return o.concat(r).concat(s)}},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A),r=n(4),s=n.n(r),l=n(8),c=n(9),u=n(10),d=n(11),g=o()(a.a),m=s()(l.a),p=s()(c.a),f=s()(u.a),h=s()(d.a);g.push([t.i,'@font-face{font-family:"iconfont-vue-9737fff";src:url('+m+");src:url("+m+') format("embedded-opentype"),url('+p+') format("woff"),url('+f+') format("truetype"),url('+h+') format("svg")}.icon[data-v-5baa2f3a]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-left[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right-double[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.arrow-right[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.breadcrumb[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.checkmark[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.close[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.confirm[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.info[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.menu[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.more[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.pause[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.play[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.triangle-s[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-away[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-dnd[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-invisible[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.icon.user-status-online[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";content:""}.avatardiv[data-v-5baa2f3a]{position:relative;display:inline-block}.avatardiv--unknown[data-v-5baa2f3a]{position:relative;background-color:var(--color-text-maxcontrast)}.avatardiv[data-v-5baa2f3a]:not(.avatardiv--unknown){background-color:#fff !important;box-shadow:0 0 5px rgba(0,0,0,0.05) inset}body.theme--dark .avatardiv[data-v-5baa2f3a]:not(.avatardiv--unknown){background-color:#000 !important}.avatardiv--with-menu[data-v-5baa2f3a]{cursor:pointer}.avatardiv--with-menu[data-v-5baa2f3a]  .trigger{position:absolute;top:0;left:0}.avatardiv--with-menu .icon-more[data-v-5baa2f3a]{display:flex;cursor:pointer;opacity:0;background:none;font-size:18px;align-items:center;justify-content:center}.avatardiv--with-menu .icon-more[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.avatardiv--with-menu .icon-more[data-v-5baa2f3a]::before{display:block}.avatardiv--with-menu:focus .icon-more[data-v-5baa2f3a],.avatardiv--with-menu:hover .icon-more[data-v-5baa2f3a]{opacity:1}.avatardiv--with-menu:focus img[data-v-5baa2f3a],.avatardiv--with-menu:hover img[data-v-5baa2f3a]{opacity:0.3}.avatardiv--with-menu .icon-more[data-v-5baa2f3a],.avatardiv--with-menu img[data-v-5baa2f3a]{transition:opacity var(--animation-quick)}.avatardiv>.unknown[data-v-5baa2f3a]{position:absolute;top:0;left:0;display:block;width:100%;text-align:center;font-weight:normal;color:var(--color-main-background)}.avatardiv img[data-v-5baa2f3a]{width:100%;height:100%;object-fit:cover}.avatardiv .avatardiv__status[data-v-5baa2f3a]{position:absolute;top:22px;left:22px;width:10px;height:10px;border:1px solid rgba(255,255,255,0.5);background-clip:content-box}.avatardiv .avatardiv__status--positive[data-v-5baa2f3a]{border-radius:50%;background-color:var(--color-success)}.avatardiv .avatardiv__status--negative[data-v-5baa2f3a]{background-color:var(--color-error)}.avatardiv .avatardiv__status--neutral[data-v-5baa2f3a]{border:none;background-color:transparent !important}.avatardiv .avatardiv__status--neutral svg[data-v-5baa2f3a]{position:absolute;top:-3px;left:-2px}.avatardiv .avatardiv__status--neutral svg path[data-v-5baa2f3a]{fill:#aaa}.avatardiv .avatardiv__user-status[data-v-5baa2f3a]{position:absolute;right:-4px;bottom:-4px;height:18px;width:18px;line-height:15px;font-size:var(--default-font-size);border:2px solid var(--color-main-background);background-color:var(--color-main-background);border-radius:50%}.acli:hover .avatardiv .avatardiv__user-status[data-v-5baa2f3a]{border-color:var(--color-background-hover);background-color:var(--color-background-hover)}.acli.active .avatardiv .avatardiv__user-status[data-v-5baa2f3a]{border-color:var(--color-primary-light);background-color:var(--color-primary-light)}.avatardiv .avatardiv__user-status--online[data-v-5baa2f3a]{color:#49b382}.avatardiv .avatardiv__user-status--online[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.avatardiv .avatardiv__user-status--dnd[data-v-5baa2f3a]{background-color:#ffffff;color:#ed484c}.avatardiv .avatardiv__user-status--dnd[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.avatardiv .avatardiv__user-status--away[data-v-5baa2f3a]{color:#f4a331}.avatardiv .avatardiv__user-status--away[data-v-5baa2f3a]:before{font-family:"iconfont-vue-9737fff";font-style:normal;font-weight:400;content:""}.avatardiv .avatardiv__user-status--icon[data-v-5baa2f3a]{border:none;background-color:transparent}.avatardiv .popovermenu-wrapper[data-v-5baa2f3a]{position:relative;display:inline-block}.avatar-class-icon[data-v-5baa2f3a]{border-radius:50%;background-color:var(--color-background-darker);height:100%}\n',"",{version:3,sources:["webpack://./../../fonts/scss/iconfont-vue.scss","webpack://./Avatar.vue"],names:[],mappings:"AA2FE,WACC,kCAAmC,CACnC,2CAAuC,CACvC,+OAGmD,CAMpD,uBACE,iBAAkB,CAClB,eAAgB,CAFlB,gDAMM,kCAAmC,CACnC,WA5Ge,CAAO,yCA0GL,kCACJ,CAAsB,WA1G3B,CAAA,iDAyGU,kCACL,CAAA,WAzGG,CAAA,0CAwGL,kCACE,CAAA,WAxGJ,CAAA,yCAuGC,kCACG,CAAA,WACN,CAxGC,wCAsGC,kCACI,CAAA,WACb,CAAO,oCAFF,kCACQ,CAAA,WACb,CAAA,sCAFO,kCACM,CAAA,WACb,CAAA,mCAFI,kCACS,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WACb,CAAA,oCAPD,kCAMc,CAAA,WACb,CAAA,mCAPD,kCAMc,CAAA,WAAsB,CACnC,yCAPD,kCAMc,CAAA,WAAA,CAAsB,+CANpC,kCAMc,CAAA,WAAA,CAAA,8CANd,kCAMc,CAAA,WAAA,CAAA,oDANd,kCAMc,CAAA,WAAA,CAAA,iDANd,kCAMc,CAAA,WAAA,CAAA,4BACb,iBC2eE,CACT,oBACA,CAAA,qCAEA,iBAAU,CACT,8CACkB,CAAA,qDAGZ,gCAEN,CAAA,yCAKoB,CAAA,sEAPd,gCAKL,CAAA,uCACA,cAAA,CAAA,iDAMD,iBAAiB,CAChB,KAAA,CAAA,MAAU,CAAA,kDAHX,YAOA,CAAA,cACU,CAAA,SACH,CAAE,eACD,CAAE,cACG,CAAA,kBAEZ,CAAA,sBACA,CAAA,yDAPD,kCDlnBD,CAAA,iBAAsB,CAkFnB,eAAY,CAAA,WACZ,CAAA,0DC+hBF,aAAU,CAAA,gHAPV,SAuBC,CAAA,kGAvBD,WAAW,CAAA,6FAAX,yCAgCqB,CAAA,qCAnDvB,iBAuDG,CAAQ,KACT,CAAA,MAAU,CAAA,aAEV,CAAA,UACA,CAAA,iBACO,CAAI,kBACO,CAClB,kCACO,CAAA,gCAAA,UA/DT,CAAA,WAoEE,CAAA,gBACQ,CAAA,+CAKT,iBAAA,CAAkB,QACjB,CAAQ,SAAU,CAClB,UACA,CAAA,WACA,CAAA,sCAEkB,CAAA,2BAClB,CAAA,yDACC,iBAAA,CAAU,qCAEQ,CAAA,yDAElB,mCACgB,CAAE,wDAElB,WAAA,CAAA,uCAEkB,CAAA,4DAFlB,iBAGA,CAAG,QACF,CAAQ,SAAU,CAClB,iEALD,SAAS,CAGT,oDAWF,iBAAA,CAAuB,UACZ,CAAA,WACV,CAAA,WACA,CAAA,UACA,CAAA,gBACO,CAAA,kCAEI,CAAA,6CACO,CAAA,6CACA,CAAA,iBAAA,CAA4B,gEAT/C,0CAagB,CAAA,8CACI,CAAA,iEAdpB,uCAiBgB,CAAA,2CACI,CAAA,4DAGlB,aAAA,CAAA,mEAAA,kCDptBF,CAAA,iBAAA,CAAsB,eAkFP,CAAA,WACZ,CAAA,yDCqoBD,wBAEA,CAAA,aAAkB,CAAA,gEAFlB,kCDxtBF,CAAA,iBAAA,CAAA,eAkFe,CAAA,WACZ,CAAA,0DC0oBD,aAAA,CAAA,iEAAA,kCD7tBF,CAAA,iBAAA,CAAA,eAkFe,CAAA,WACZ,CAAA,0DC8oBD,WAAA,CAAA,4BAEA,CAAA,iDA3IO,iBA+IT,CAAA,oBACW,CAAQ,oCACT,iBACT,CAAA,+CAKiB,CAAA,WAAA",sourcesContent:['$__iconfont__data: map-merge(if(global_variable_exists(\'__iconfont__data\'), $__iconfont__data, ()), (\n\t"iconfont-vue-9737fff": (\n\t\t"arrow-left-double": "\\ea01",\n\t\t"arrow-left": "\\ea02",\n\t\t"arrow-right-double": "\\ea03",\n\t\t"arrow-right": "\\ea04",\n\t\t"breadcrumb": "\\ea05",\n\t\t"checkmark": "\\ea06",\n\t\t"close": "\\ea07",\n\t\t"confirm": "\\ea08",\n\t\t"info": "\\ea09",\n\t\t"menu": "\\ea0a",\n\t\t"more": "\\ea0b",\n\t\t"pause": "\\ea0c",\n\t\t"play": "\\ea0d",\n\t\t"triangle-s": "\\ea0e",\n\t\t"user-status-away": "\\ea0f",\n\t\t"user-status-dnd": "\\ea10",\n\t\t"user-status-invisible": "\\ea11",\n\t\t"user-status-online": "\\ea12"\n\t)\n));\n\n\n$create-font-face: true !default; // should the @font-face tag get created?\n\n// should there be a custom class for each icon? will be .filename\n$create-icon-classes: true !default; \n\n// what is the common class name that icons share? in this case icons need to have .icon.filename in their classes\n// this requires you to have 2 classes on each icon html element, but reduced redeclaration of the font family\n// for each icon\n$icon-common-class: \'icon\' !default;\n\n// if you whish to prefix your filenames, here you can do so.\n// if this string stays empty, your classes will use the filename, for example\n// an icon called star.svg will result in a class called .star\n// if you use the prefix to be \'icon-\' it would result in .icon-star\n$icon-prefix: \'\' !default; \n\n// helper function to get the correct font group\n@function iconfont-group($group: null) {\n  @if (null == $group) {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  @if (false == map-has-key($__iconfont__data, $group)) {\n    @warn \'Undefined Iconfont Family!\';\n    @return ();\n  }\n  @return map-get($__iconfont__data, $group);\n}\n\n// helper function to get the correct icon of a group\n@function iconfont-item($name) {\n  $slash: str-index($name, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($name, 0, $slash - 1);\n    $name: str-slice($name, $slash + 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  $group: iconfont-group($group);\n  @if (false == map-has-key($group, $name)) {\n    @warn \'Undefined Iconfont Glyph!\';\n    @return \'\';\n  }\n  @return map-get($group, $name);\n}\n\n// complete mixing to include the icon\n// usage:\n// .my_icon{ @include iconfont(\'star\') }\n@mixin iconfont($icon) {\n  $slash: str-index($icon, \'/\');\n  $group: null;\n  @if ($slash) {\n    $group: str-slice($icon, 0, $slash - 1);\n  } @else {\n    $group: nth(map-keys($__iconfont__data), 1);\n  }\n  &:before {\n    font-family: $group;\n    font-style: normal;\n    font-weight: 400;\n    content: iconfont-item($icon);\n  }\n}\n\n// creates the font face tag if the variable is set to true (default)\n@if $create-font-face == true {\n  @font-face {\n   font-family: "iconfont-vue-9737fff";\n   src: url(\'../iconfont-vue-9737fff.eot\'); /* IE9 Compat Modes */\n   src: url(\'../iconfont-vue-9737fff.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\n      url(\'../iconfont-vue-9737fff.woff\') format(\'woff\'), /* Pretty Modern Browsers */\n      url(\'../iconfont-vue-9737fff.ttf\')  format(\'truetype\'), /* Safari, Android, iOS */\n      url(\'../iconfont-vue-9737fff.svg\') format(\'svg\'); /* Legacy iOS */\n  }\n}\n\n// creates icon classes for each individual loaded svg (default)\n@if $create-icon-classes == true {\n  .#{$icon-common-class} {\n    font-style: normal;\n    font-weight: 400;\n\n    @each $icon, $content in map-get($__iconfont__data, "iconfont-vue-9737fff") {\n      &.#{$icon-prefix}#{$icon}:before {\n        font-family: "iconfont-vue-9737fff";\n        content: iconfont-item("iconfont-vue-9737fff/#{$icon}");\n      }\n    }\n  }\n}\n',"$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../fonts/scss/iconfont-vue';\n\n.avatardiv {\n\tposition: relative;\n\tdisplay: inline-block;\n\n\t&--unknown {\n\t\tposition: relative;\n\t\tbackground-color: var(--color-text-maxcontrast);\n\t}\n\n\t&:not(&--unknown) {\n\t\t// White background for avatars with transparency\n\t\tbackground-color: #fff !important;\n\t\tbody.theme--dark & {\n\t\t\t// And black background in dark mode, as it shines through on hover of the menu\n\t\t\tbackground-color: #000 !important;\n\t\t}\n\t\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.05) inset;\n\t}\n\n\t&--with-menu {\n\t\tcursor: pointer;\n\t\t::v-deep .trigger {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t}\n\t\t.icon-more {\n\t\t\tdisplay: flex;\n\t\t\tcursor: pointer;\n\t\t\topacity: 0;\n\t\t\tbackground: none;\n\t\t\tfont-size: 18px;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\n\t\t\t@include iconfont('more');\n\t\t\t&::before {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t\t&:focus,\n\t\t&:hover {\n\t\t\t.icon-more {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\timg {\n\t\t\t\topacity: 0.3;\n\t\t\t}\n\t\t}\n\t\t.icon-more,\n\t\timg {\n\t\t\ttransition: opacity var(--animation-quick);\n\t\t}\n\t}\n\n\t> .unknown {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont-weight: normal;\n\t\tcolor: var(--color-main-background);\n\t}\n\n\timg {\n\t\t// Cover entire area\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\t// Keep ratio\n\t\tobject-fit: cover;\n\t}\n\n\t.avatardiv__status {\n\t\tposition: absolute;\n\t\ttop: 22px;\n\t\tleft: 22px;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tborder: 1px solid rgba(255, 255, 255, .5);\n\t\tbackground-clip: content-box;\n\t\t&--positive {\n\t\t\tborder-radius: 50%;\n\t\t\tbackground-color: var(--color-success);\n\t\t}\n\t\t&--negative {\n\t\t\tbackground-color: var(--color-error);\n\t\t}\n\t\t&--neutral {\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent !important;\n\t\t\tsvg {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -3px;\n\t\t\t\tleft: -2px;\n\t\t\t\tpath {\n\t\t\t\t\tfill: #aaa;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.avatardiv__user-status {\n\t\tposition: absolute;\n\t\tright: -4px;\n\t\tbottom: -4px;\n\t\theight: 18px;\n\t\twidth: 18px;\n\t\tline-height: 15px;\n\t\tfont-size: var(--default-font-size);\n\t\tborder: 2px solid var(--color-main-background);\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-radius: 50%;\n\n\t\t.acli:hover & {\n\t\t\tborder-color: var(--color-background-hover);\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t\t.acli.active & {\n\t\t\tborder-color: var(--color-primary-light);\n\t\t\tbackground-color: var(--color-primary-light);\n\t\t}\n\n\t\t&--online{\n\t\t\t@include iconfont('user-status-online');\n\t\t\tcolor: #49b382;\n\t\t}\n\t\t&--dnd{\n\t\t\t@include iconfont('user-status-dnd');\n\t\t\tbackground-color: #ffffff;\n\t\t\tcolor: #ed484c;\n\t\t}\n\t\t&--away{\n\t\t\t@include iconfont('user-status-away');\n\t\t\tcolor: #f4a331;\n\t\t}\n\t\t&--icon {\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t.popovermenu-wrapper {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n}\n\n.avatar-class-icon {\n\tborder-radius: 50%;\n\tbackground-color: var(--color-background-darker);\n\theight: 100%;\n}\n\n"],sourceRoot:""}]),e.a=g},function(t,e){},,,function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js")},function(t,e,n){"use strict";
/**
 * @copyright Copyright (c) 2020 Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * @author Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a=function(t,e){for(var n=[],i=0,a=t.toLowerCase().indexOf(e.toLowerCase(),i),A=0;a>-1&&A<t.length;)i=a+e.length,n.push({start:a,end:i}),a=t.toLowerCase().indexOf(e.toLowerCase(),a+1),A++;return n}},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js")},,function(t,e,n){"use strict";n.r(e);n(15),n(98),n(93),n(24),n(69),n(31),n(51),n(71),n(27),n(72);var i=n(70);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r={name:"Highlight",props:{text:{type:String,default:""},search:{type:String,default:""},highlight:{type:Array,default:function(){return[]}}},computed:{ranges:function(){var t=this,e=[];return this.search||0!==this.highlight.length?(e=this.highlight.length>0?this.highlight:Object(i.a)(this.text,this.search),e.reduce((function(e,n){return n.start<t.text.length&&n.end>0&&e.push({start:n.start<0?0:n.start,end:n.end>t.text.length?t.text.length:n.end}),e}),[])):e},chunks:function(){if(0===this.ranges.length)return[{start:0,end:this.text.length,highlight:!1,text:this.text}];for(var t=[],e=0,n=0;e<this.text.length;){var i=this.ranges[n];i.start!==e?(t.push({start:e,end:i.start,highlight:!1,text:this.text.substr(e,i.start-e)}),e=i.start):(t.push(A(A({},i),{},{highlight:!0,text:this.text.substr(i.start,i.end-i.start)})),n++,e=i.end,n>=this.ranges.length&&e<this.text.length&&(t.push({start:e,end:this.text.length,highlight:!1,text:this.text.substr(e,this.text.length-e)}),e=this.text.length))}return t}},render:function(t){return this.ranges.length?t("span",{},this.chunks.map((function(e){return e.highlight?t("strong",{},e.text):e.text}))):t("span",{},this.text)}},s=n(3),l=n(78),c=n.n(l),u=Object(s.a)(r,void 0,void 0,!1,null,null,null);"function"==typeof c.a&&c()(u);var d=u.exports;
/**
 * @copyright Copyright (c) 2020 Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * @author Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=d},function(t,e,n){"use strict";n.r(e);n(41),n(6),n(14),n(52),n(17),n(31),n(38),n(46),n(16),n(18);function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,A=function(){};return{s:A,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:A}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){s=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw o}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}
/**
 * @copyright Copyright (c) 2020 Georg Ehrke <georg-nextcloud@ehrke.email>
 *
 * @author Georg Ehrke <georg-nextcloud@ehrke.email>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default={props:{excludeClickOutsideClasses:{type:String|Array,default:function(){return[]}}},methods:{clickOutsideMiddleware:function(t){var e=Array.isArray(this.excludeClickOutsideClasses)?this.excludeClickOutsideClasses:[this.excludeClickOutsideClasses];return 0===e.length||!this.hasNodeOrAnyParentClass(t.target,e)},hasNodeOrAnyParentClass:function(t,e){var n,a=i(e);try{for(a.s();!(n=a.n()).done;){var A,o=n.value;if(null!=t&&null!==(A=t.classList)&&void 0!==A&&A.contains(o))return!0}}catch(t){a.e(t)}finally{a.f()}return!!t.parentElement&&this.hasNodeOrAnyParentClass(t.parentElement,e)}}}},function(t,e,n){"use strict";n.r(e),
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default={data:function(){return{isFullscreen:this._isFullscreen()}},beforeMount:function(){window.addEventListener("resize",this._onResize)},beforeDestroy:function(){window.removeEventListener("resize",this._onResize)},methods:{_onResize:function(){this.isFullscreen=this._isFullscreen()},_isFullscreen:function(){return window.outerHeight===screen.height}}}},function(t,e,n){"use strict";n.r(e);n(6),n(26),n(16),n(17),n(18),n(40);var i={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(t){return!t.input||-1!==["text","checkbox"].indexOf(t.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(t){return!1}}},methods:{action:function(t){this.item.action&&this.item.action(t)}}},a=n(2),A=n.n(a),o=n(53),r={insert:"head",singleton:!1},s=(A()(o.a,r),o.a.locals,n(54)),l={insert:"head",singleton:!1},c=(A()(s.a,l),s.a.locals,n(3)),u={name:"PopoverMenu",components:{PopoverMenuItem:Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"popover__menuitem"},[t.item.href?n("a",{staticClass:"focusable",attrs:{href:t.item.href?t.item.href:"#",target:t.item.target?t.item.target:"",download:t.item.download,rel:"noreferrer noopener"},on:{click:t.action}},[t.iconIsUrl?n("img",{attrs:{src:t.item.icon}}):n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):t.item.input?n("span",{staticClass:"menuitem",class:{active:t.item.active}},["checkbox"!==t.item.input?n("span",{class:t.item.icon}):t._e(),t._v(" "),"text"===t.item.input?n("form",{class:t.item.input,on:{submit:function(e){return e.preventDefault(),t.item.action(e)}}},[n("input",{attrs:{type:t.item.input,placeholder:t.item.text,required:""},domProps:{value:t.item.value}}),t._v(" "),n("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"checkbox"},domProps:{checked:Array.isArray(t.item.model)?t._i(t.item.model,null)>-1:t.item.model},on:{change:[function(e){var n=t.item.model,i=e.target,a=!!i.checked;if(Array.isArray(n)){var A=t._i(n,null);i.checked?A<0&&t.$set(t.item,"model",n.concat([null])):A>-1&&t.$set(t.item,"model",n.slice(0,A).concat(n.slice(A+1)))}else t.$set(t.item,"model",a)},t.item.action]}}):"radio"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"radio"},domProps:{checked:t._q(t.item.model,null)},on:{change:[function(e){return t.$set(t.item,"model",null)},t.item.action]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:t.item.input},domProps:{value:t.item.model},on:{change:t.item.action,input:function(e){e.target.composing||t.$set(t.item,"model",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:t.key},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")])]],2):t.item.action?n("button",{staticClass:"menuitem focusable",class:{active:t.item.active},attrs:{disabled:t.item.disabled},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):n("span",{staticClass:"menuitem",class:{active:t.item.active}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()])])}),[],!1,null,"febed9b6",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},d=n(55),g={insert:"head",singleton:!1},m=(A()(d.a,g),d.a.locals,n(56)),p=n.n(m),f=Object(c.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"popover__menu"},this._l(this.menu,(function(t,n){return e("PopoverMenuItem",{key:n,attrs:{item:t}})})),1)}),[],!1,null,"4dae360a",null);"function"==typeof p.a&&p()(f);var h=f.exports;
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=h},function(t,e){},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js")},function(t,e,n){"use strict";n.r(e);n(58),n(30),n(89),n(103),n(104),n(35),n(24),n(57),n(6),n(59);var i=n(86),a=n(42),A=n(77),o=n(34),r=n(29),s=n(37),l=n.n(s),c=n(13),u=n(21),d=n(84),g=n(45),m=n(28);function p(t,e,n,i,a,A,o){try{var r=t[A](o),s=r.value}catch(t){return void n(t)}r.done?e(s):Promise.resolve(s).then(i,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var A=t.apply(e,n);function o(t){p(A,i,a,o,r,"next",t)}function r(t){p(A,i,a,o,r,"throw",t)}o(void 0)}))}}var h=Object(i.getBuilder)("nextcloud").persist().build();function b(t){var e=h.getItem("user-has-avatar."+t);return"string"==typeof e?Boolean(e):null}function C(t,e){t&&h.setItem("user-has-avatar."+t,e)}var v={name:"Avatar",directives:{tooltip:u.default,ClickOutside:a.directive},components:{Popover:m.a,PopoverMenu:A.default},mixins:[g.e],props:{url:{type:String,default:void 0},iconClass:{type:String,default:void 0},user:{type:String,default:void 0},showUserStatus:{type:Boolean,default:!0},showUserStatusCompact:{type:Boolean,default:!0},preloadedUserStatus:{type:Object,default:void 0},isGuest:{type:Boolean,default:!1},displayName:{type:String,default:void 0},size:{type:Number,default:32},allowPlaceholder:{type:Boolean,default:!0},disableTooltip:{type:Boolean,default:!1},disableMenu:{type:Boolean,default:!1},tooltipMessage:{type:String,default:null},isNoUser:{type:Boolean,default:!1},status:{type:String,default:null,validator:function(t){switch(t){case"positive":case"negative":case"neutral":return!0}return!1}},statusColor:{type:[Number,String],default:null,validator:function(t){return/^([a-f0-9]{3}){1,2}$/i.test(t)}},menuPosition:{type:String,default:"center"},menuContainer:{type:String,default:"body"}},data:function(){return{avatarUrlLoaded:null,avatarSrcSetLoaded:null,userDoesNotExist:!1,isAvatarLoaded:!1,isMenuLoaded:!1,contactsMenuLoading:!1,contactsMenuActions:[],contactsMenuOpenState:!1}},computed:{canDisplayUserStatus:function(){return this.showUserStatus&&this.hasStatus&&["online","away","dnd"].includes(this.userStatus.status)},showUserStatusIconOnAvatar:function(){return this.showUserStatus&&this.showUserStatusCompact&&this.hasStatus&&"dnd"!==this.userStatus.status&&this.userStatus.icon},getUserIdentifier:function(){return this.isDisplayNameDefined?this.displayName:this.isUserDefined?this.user:""},isUserDefined:function(){return void 0!==this.user},isDisplayNameDefined:function(){return void 0!==this.displayName},isUrlDefined:function(){return void 0!==this.url},hasMenu:function(){var t;return!this.disableMenu&&(this.isMenuLoaded?this.menu.length>0:!(this.user===(null===(t=Object(o.getCurrentUser)())||void 0===t?void 0:t.uid)||this.userDoesNotExist||this.url))},shouldShowPlaceholder:function(){return this.allowPlaceholder&&this.userDoesNotExist},avatarStyle:function(){var t={width:this.size+"px",height:this.size+"px",lineHeight:this.size+"px",fontSize:Math.round(.55*this.size)+"px"};if(!this.iconClass&&!this.avatarSrcSetLoaded){var e=Object(d.default)(this.getUserIdentifier);t.backgroundColor="rgb("+e.r+", "+e.g+", "+e.b+")"}return t},tooltip:function(){return!this.disableTooltip&&(this.tooltipMessage?this.tooltipMessage:this.displayName)},initials:function(){var t;if(this.shouldShowPlaceholder){var e=this.getUserIdentifier,n=e.indexOf(" ");""===e?t="?":(t=String.fromCodePoint(e.codePointAt(0)),-1!==n&&(t=t.concat(String.fromCodePoint(e.codePointAt(n+1)))))}return t.toUpperCase()},menu:function(){var t,e,n,i=this.contactsMenuActions.map((function(t){return{href:t.hyperlink,icon:t.icon,longtext:t.title}}));return this.showUserStatus&&(this.userStatus.icon||this.userStatus.message)?[{href:"#",icon:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><text x='0' y='14' font-size='14'>".concat((t=this.userStatus.icon,e=document.createTextNode(t),n=document.createElement("p"),n.appendChild(e),n.innerHTML),"</text></svg>"),text:"".concat(this.userStatus.message)}].concat(i):i}},watch:{url:function(){this.userDoesNotExist=!1,this.loadAvatarUrl()},user:function(){this.userDoesNotExist=!1,this.isMenuLoaded=!1,this.loadAvatarUrl()}},mounted:function(){this.loadAvatarUrl(),this.showUserStatus&&this.user&&!this.isNoUser&&(this.preloadedUserStatus?(this.userStatus.status=this.preloadedUserStatus.status||"",this.userStatus.message=this.preloadedUserStatus.message||"",this.userStatus.icon=this.preloadedUserStatus.icon||"",this.hasStatus=null!==this.preloadedUserStatus.status):this.fetchUserStatus(this.user),Object(r.subscribe)("user_status:status.updated",this.handleUserStatusUpdated))},beforeDestroyed:function(){this.showUserStatus&&this.user&&!this.isNoUser&&Object(r.unsubscribe)("user_status:status.updated",this.handleUserStatusUpdated)},methods:{handleUserStatusUpdated:function(t){this.user===t.userId&&(this.userStatus={status:t.status,icon:t.icon,message:t.message})},toggleMenu:function(){var t=this;return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasMenu){e.next=2;break}return e.abrupt("return");case 2:if(t.contactsMenuOpenState){e.next=5;break}return e.next=5,t.fetchContactsMenu();case 5:t.contactsMenuOpenState=!t.contactsMenuOpenState;case 6:case"end":return e.stop()}}),e)})))()},closeMenu:function(){this.contactsMenuOpenState=!1},fetchContactsMenu:function(){var t=this;return f(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.contactsMenuLoading=!0,e.prev=1,n=encodeURIComponent(t.user),e.next=5,l.a.post(Object(c.generateUrl)("contactsmenu/findOne"),"shareType=0&shareWith=".concat(n));case 5:i=e.sent,a=i.data,t.contactsMenuActions=a.topAction?[a.topAction].concat(a.actions):a.actions,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.contactsMenuOpenState=!1;case 13:t.contactsMenuLoading=!1,t.isMenuLoaded=!0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()},loadAvatarUrl:function(){if(this.isAvatarLoaded=!1,!this.isUrlDefined&&(!this.isUserDefined||this.isNoUser))return this.isAvatarLoaded=!0,void(this.userDoesNotExist=!0);if(this.isUrlDefined)this.updateImageIfValid(this.url);else{var t=this.avatarUrlGenerator(this.user,this.size),e=[t+" 1x",this.avatarUrlGenerator(this.user,2*this.size)+" 2x",this.avatarUrlGenerator(this.user,4*this.size)+" 4x"].join(", ");this.updateImageIfValid(t,e)}},avatarUrlGenerator:function(t,e){var n,i="/avatar/{user}/{size}";this.isGuest&&(i="/avatar/guest/{user}/{size}");var a=Object(c.generateUrl)(i,{user:t,size:e});return t===(null===(n=Object(o.getCurrentUser)())||void 0===n?void 0:n.uid)&&"undefined"!=typeof oc_userconfig&&(a+="?v="+oc_userconfig.avatar.version),a},updateImageIfValid:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=b(this.user);if(this.isUserDefined&&"boolean"==typeof i)return this.isAvatarLoaded=!0,this.avatarUrlLoaded=t,n&&(this.avatarSrcSetLoaded=n),void(!1===i&&(this.userDoesNotExist=!0));var a=new Image;a.onload=function(){e.avatarUrlLoaded=t,n&&(e.avatarSrcSetLoaded=n),e.isAvatarLoaded=!0,C(e.user,!0)},a.onerror=function(){console.debug("Invalid avatar url",t),e.avatarUrlLoaded=null,e.avatarSrcSetLoaded=null,e.userDoesNotExist=!0,e.isAvatarLoaded=!1,C(e.user,!1)},n&&(a.srcset=n),a.src=t}}},B=n(2),y=n.n(B),x=n(65),w={insert:"head",singleton:!1},M=(y()(x.a,w),x.a.locals,n(3)),I=n(66),E=n.n(I),k=Object(M.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"},{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],staticClass:"avatardiv popovermenu-wrapper",class:{"avatardiv--unknown":t.userDoesNotExist,"avatardiv--with-menu":t.hasMenu},style:t.avatarStyle},t.disableMenu?{}:{click:t.toggleMenu}),[t.iconClass?n("div",{staticClass:"avatar-class-icon",class:t.iconClass}):t.isAvatarLoaded&&!t.userDoesNotExist?n("img",{attrs:{src:t.avatarUrlLoaded,srcset:t.avatarSrcSetLoaded,alt:""}}):t._e(),t._v(" "),t.hasMenu?n("Popover",{attrs:{placement:"auto",container:t.menuContainer,open:t.contactsMenuOpenState}},[n("PopoverMenu",{attrs:{menu:t.menu}}),t._v(" "),n("template",{slot:"trigger"},[n("div",{class:t.contactsMenuLoading?"icon-loading":"icon-more",style:{width:t.size+"px",height:t.size+"px"}})])],2):t._e(),t._v(" "),t.showUserStatusIconOnAvatar?n("div",{staticClass:"avatardiv__user-status avatardiv__user-status--icon"},[t._v("\n\t\t"+t._s(t.userStatus.icon)+"\n\t")]):t.canDisplayUserStatus?n("div",{staticClass:"avatardiv__user-status",class:"avatardiv__user-status--"+t.userStatus.status}):t.status?n("div",{staticClass:"avatardiv__status",class:"avatardiv__status--"+t.status,style:{backgroundColor:"#"+t.statusColor}},["neutral"===t.status?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 3.175 2.91"}},[n("path",{style:{fill:"#"+t.statusColor},attrs:{d:"M3.21 3.043H.494l.679-1.177.68-1.176.678 1.176z",stroke:"#fff","stroke-width":".265","stroke-linecap":"square"}})]):t._e()]):t._e(),t._v(" "),t.userDoesNotExist&&!t.iconClass?n("div",{staticClass:"unknown"},[t._v("\n\t\t"+t._s(t.initials)+"\n\t")]):t._e()],1)}),[],!1,null,"5baa2f3a",null);"function"==typeof E.a&&E()(k);var S=k.exports;
/**
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=S},function(t,e){t.exports=__webpack_require__(/*! md5 */ "./node_modules/md5/md5.js")},function(t,e){t.exports=__webpack_require__(/*! @nextcloud/capabilities */ "./node_modules/@nextcloud/capabilities/dist/index.js")},function(t,e,n){"use strict";
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a=function(t){t.mounted?Array.isArray(t.mounted)||(t.mounted=[t.mounted]):t.mounted=[],t.mounted.push((function(){this.$el.setAttribute("data-v-".concat("9737fff"),"")}))}},function(t,e,n){"use strict";n.r(e);n(15),n(92),n(25);var i=n(81),a=n.n(i),A=n(64),o=function(t){var e=t.toLowerCase();null===e.match(/^([0-9a-f]{4}-?){8}$/)&&(e=a()(e)),e=e.replace(/[^0-9a-f]/g,"");return Object(A.a)(6)[function(t,e){for(var n=0,i=[],a=0;a<t.length;a++)i.push(parseInt(t.charAt(a),16)%16);for(var A in i)n+=i[A];return parseInt(parseInt(n,10)%e,10)}(e,18)]};e.default=o},,function(t,e){t.exports=__webpack_require__(/*! @nextcloud/browser-storage */ "./node_modules/@nextcloud/browser-storage/dist/index.js")},function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,".option[data-v-28d338d4]{display:flex;align-items:center;width:100%;height:var(--height)}.option__avatar[data-v-28d338d4]{margin-right:var(--margin)}.option__details[data-v-28d338d4]{display:flex;flex:1 1;flex-direction:column;justify-content:center;min-width:0}.option__lineone[data-v-28d338d4]{color:var(--color-text-light)}.option__linetwo[data-v-28d338d4]{opacity:.7}.option__lineone[data-v-28d338d4],.option__linetwo[data-v-28d338d4]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.1em}.option__lineone strong[data-v-28d338d4],.option__linetwo strong[data-v-28d338d4]{font-weight:bold}.option__icon[data-v-28d338d4]{flex:0 0 44px;width:44px;height:44px;opacity:.5;background-position:center;background-size:16px}\n","",{version:3,sources:["webpack://./ListItemIcon.vue","webpack://./../../assets/variables.scss"],names:[],mappings:"AAwOA,yBACC,YAAa,CACb,kBAAmB,CACnB,UAAW,CACX,oBAAqB,CAErB,iCACC,0BAA2B,CAC3B,kCAGA,YAAa,CACb,QAAS,CACT,qBAAsB,CACtB,sBAAuB,CACvB,WAAY,CACZ,kCAGA,6BAA8B,CAC9B,kCAEA,UCnNiB,CDoNjB,oEAGA,eAAgB,CAChB,kBAAmB,CACnB,sBAAuB,CACvB,iBAAkB,CALlB,kFAOC,gBAAiB,CACjB,+BAID,aCnPmB,CDoPnB,UCpPmB,CDqPnB,WCrPmB,CDsPnB,UCrOmB,CDsOnB,0BAA2B,CAC3B,oBAAqB",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.option {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\theight: var(--height);\n\n\t&__avatar {\n\t\tmargin-right: var(--margin);\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex: 1 1;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tmin-width: 0;\n\t}\n\n\t&__lineone {\n\t\tcolor: var(--color-text-light);\n\t}\n\t&__linetwo {\n\t\topacity: $opacity_normal;\n\t}\n\t&__lineone,\n\t&__linetwo {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tline-height: 1.1em;\n\t\tstrong {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n\n\t&__icon {\n\t\tflex: 0 0 $clickable-area;\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\topacity: $opacity_disabled;\n\t\tbackground-position: center;\n\t\tbackground-size: 16px;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),e.a=o},function(t,e){},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.flat.js */ "./node_modules/core-js/modules/es.array.flat.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js")},,,function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,".name-parts[data-v-f855c4b8]{display:flex;max-width:100%}.name-parts__first[data-v-f855c4b8]{overflow:hidden;text-overflow:ellipsis}.name-parts__first[data-v-f855c4b8],.name-parts__last[data-v-f855c4b8]{white-space:pre}.name-parts__first strong[data-v-f855c4b8],.name-parts__last strong[data-v-f855c4b8]{font-weight:bold}\n","",{version:3,sources:["webpack://./EllipsisedOption.vue"],names:[],mappings:"AA6HA,6BACC,YAAa,CACb,cAAe,CACf,oCACC,eAAgB,CAChB,sBAAuB,CACvB,uEAIA,eAAgB,CAHhB,qFAKC,gBAAiB",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.name-parts {\n\tdisplay: flex;\n\tmax-width: 100%;\n\t&__first {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\t&__first,\n\t&__last {\n\t\t// prevent whitespace from being trimmed\n\t\twhite-space: pre;\n\t\tstrong {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),e.a=o},function(t,e){},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js")},function(t,e,n){"use strict";n.r(e);n(30),n(22);var i=n(80),a=n(74),A=n(45),o={name:"ListItemIcon",components:{Avatar:i.default,Highlight:a.default},mixins:[A.e],props:{title:{type:String,required:!0},subtitle:{type:String,default:""},icon:{type:String,default:""},search:{type:String,default:""},avatarSize:{type:Number,default:32},noMargin:{type:Boolean,default:!1},displayName:{type:String,default:null},isNoUser:{type:Boolean,default:!1},id:{type:String,default:null}},data:function(){return{margin:8}},computed:{hasIcon:function(){return""!==this.icon},hasSlot:function(){return!!this.$slots.default},isValidSubtitle:function(){var t,e;return""!==(null===(t=this.subtitle)||void 0===t||null===(e=t.trim)||void 0===e?void 0:e.call(t))},isSizeBigEnough:function(){return this.avatarSize>=32},cssVars:function(){var t=this.noMargin?0:this.margin;return{"--height":this.avatarSize+2*t+"px","--margin":this.margin+"px"}}},beforeMount:function(){this.isNoUser||this.subtitle||this.fetchUserStatus(this.user)}},r=n(2),s=n.n(r),l=n(87),c={insert:"head",singleton:!1},u=(s()(l.a,c),l.a.locals,n(3)),d=n(88),g=n.n(d),m=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._g({staticClass:"option",style:t.cssVars,attrs:{id:t.id}},t.$listeners),[n("Avatar",t._b({staticClass:"option__avatar",attrs:{"disable-menu":!0,"disable-tooltip":!0,"display-name":t.displayName||t.title,"is-no-user":t.isNoUser,size:t.avatarSize}},"Avatar",t.$attrs,!1)),t._v(" "),n("div",{staticClass:"option__details"},[n("Highlight",{staticClass:"option__lineone",attrs:{text:t.title,search:t.search}}),t._v(" "),t.isValidSubtitle&&t.isSizeBigEnough?n("Highlight",{staticClass:"option__linetwo",attrs:{text:t.subtitle,search:t.search}}):t.hasStatus?n("span",[n("span",[t._v(t._s(t.userStatus.icon))]),t._v(" "),n("span",[t._v(t._s(t.userStatus.message))])]):t._e()],1),t._v(" "),t._t("default"),t._v(" "),t.hasIcon&&!t.hasSlot?n("span",{staticClass:"icon option__icon",class:t.icon}):t._e()],2)}),[],!1,null,"28d338d4",null);"function"==typeof g.a&&g()(m);var p=m.exports;
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=p},function(t,e,n){"use strict";n(30),n(24),n(57),n(41),n(31),n(38),n(6),n(46),n(16),n(17),n(18);var i=n(108),a=n.n(i),A=(n(14),n(15),n(79),n(98),n(74)),o=n(70),r={name:"EllipsisedOption",components:{Highlight:A.default},props:{option:{type:[String,Object],required:!0,default:""},label:{type:String,default:""},search:{type:String,default:""},name:{type:String,default:""}},computed:{needsTruncate:function(){return this.name&&this.name.length>=10},split:function(){return this.name.length-Math.min(Math.floor(this.name.length/2),10)},part1:function(){return this.needsTruncate?this.name.substr(0,this.split):this.name},part2:function(){return this.needsTruncate?this.name.substr(this.split):""},highlight1:function(){return this.search?Object(o.a)(this.name,this.search):[]},highlight2:function(){var t=this;return this.highlight1.map((function(e){return{start:e.start-t.split,end:e.end-t.split}}))}}},s=n(2),l=n.n(s),c=n(96),u={insert:"head",singleton:!1},d=(l()(c.a,u),c.a.locals,n(3)),g=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name-parts",attrs:{title:t.name}},[n("Highlight",{staticClass:"name-parts__first",attrs:{text:t.part1,search:t.search,highlight:t.highlight1}}),t._v(" "),t.part2?n("Highlight",{staticClass:"name-parts__last",attrs:{text:t.part2,search:t.search,highlight:t.highlight2}}):t._e()],1)}),[],!1,null,"f855c4b8",null).exports,m=n(61),p=n(99),f=n(21);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b={name:"Multiselect",components:{EllipsisedOption:g,ListItemIcon:p.default,VueMultiselect:a.a},directives:{tooltip:f.default},mixins:[m.a],inheritAttrs:!1,props:{value:{default:function(){return[]}},multiple:{type:Boolean,default:!1},limit:{type:Number,default:99999},label:{type:String,default:""},trackBy:{type:String,default:""},options:{type:Array,required:!0},userSelect:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoLimit:{type:Boolean,default:!0},tagWidth:{type:Number,default:150,validator:function(t){return t>0}}},data:function(){return{elWidth:0}},computed:{maxOptions:function(){if(this.autoLimit&&this.elWidth>0&&0!==this.tagWidth){var t=Math.floor(this.elWidth/this.tagWidth);return t>0?t:1}return this.limit?this.limit:9999},limitString:function(){return"+".concat(this.value.length-this.maxOptions)},localValue:{get:function(){return this.trackBy&&this.options&&"object"!==h(this.value)&&this.options[this.value]?this.options[this.value]:this.value},set:function(t){this.$emit("update:value",t),this.$emit("change",t)}}},watch:{value:function(){this.updateWidth()}},mounted:function(){this.updateWidth(),window.addEventListener("resize",this.updateWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWidth)},methods:{getOptionLabel:function(t){var e;return String(null===(e=this.$refs.VueMultiselect)||void 0===e?void 0:e.getOptionLabel(t))},formatLimitTitle:function(t){var e=this;if(Array.isArray(t)&&t.length>0){var n=t;return"object"===h(t[0])&&(n=t.map((function(t){return t[e.label]}))),n.slice(this.maxOptions).join(", ")}return""},updateWidth:function(){this.$el&&this.$el.querySelector(".multiselect__tags-wrap")&&(this.elWidth=this.$el.querySelector(".multiselect__tags-wrap").offsetWidth-10)}}},C=n(97),v=n.n(C),B=Object(d.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueMultiselect",t._g(t._b({ref:"VueMultiselect",class:[{"icon-loading-small":t.loading},t.multiple?"multiselect--multiple":"multiselect--single"],attrs:{options:t.options,limit:t.maxOptions,"close-on-select":!t.multiple,multiple:t.multiple,label:t.label,"track-by":t.trackBy,"tag-placeholder":"create"},scopedSlots:t._u([{key:"option",fn:function(e){return[t.userSelect&&!t.$scopedSlots.option?n("ListItemIcon",t._b({attrs:{title:e.option[t.label],search:e.search}},"ListItemIcon",e.option,!1)):t.$scopedSlots.option?t._t("option",null,null,e):n("EllipsisedOption",{attrs:{name:t.getOptionLabel(e.option),option:e.option,search:e.search,label:t.label}})]}},t.multiple?{key:"limit",fn:function(){return[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.formatLimitTitle(t.value),expression:"formatLimitTitle(value)",modifiers:{auto:!0}}],staticClass:"multiselect__limit"},[t._v("\n\t\t\t"+t._s(t.limitString)+"\n\t\t")])]},proxy:!0}:null,t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0),model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}},"VueMultiselect",t.$attrs,!1),t.$listeners),[t._v(" "),t._v(" "),t._v(" "),n("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v(t._s(t.t("No results")))])])}),[],!1,null,null,null);"function"==typeof v.a&&v()(B);e.a=B.exports},,,function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.from-code-point.js */ "./node_modules/core-js/modules/es.string.from-code-point.js")},function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.code-point-at.js */ "./node_modules/core-js/modules/es.string.code-point-at.js")},,function(t,e,n){"use strict";var i=n(0),a=n.n(i),A=n(1),o=n.n(A)()(a.a);o.push([t.i,".multiselect[data-v-9737fff]{margin:0;padding:0 !important;display:inline-block;min-width:160px;position:relative;background-color:var(--color-main-background)}.multiselect[data-v-9737fff]:not(.multiselect--active) .multiselect__single{width:100%;z-index:2 !important}.multiselect[data-v-9737fff].multiselect--active input.multiselect__input{opacity:1 !important;cursor:text !important;border-radius:var(--border-radius) var(--border-radius) 0 0;display:block !important}.multiselect[data-v-9737fff].multiselect--active .multiselect__limit{display:none}.multiselect[data-v-9737fff].multiselect--active.multiselect--above input.multiselect__input{border-radius:0 0 var(--border-radius) var(--border-radius)}.multiselect[data-v-9737fff].multiselect--disabled,.multiselect[data-v-9737fff].multiselect--disabled .multiselect__single{background-color:var(--color-background-dark) !important}.multiselect[data-v-9737fff].icon-loading-small::after{left:100%;margin-left:-24px}.multiselect[data-v-9737fff] .multiselect__tags{display:flex;flex-wrap:nowrap;overflow:hidden;border:1px solid var(--color-border-dark);cursor:pointer;position:relative;border-radius:3px;min-height:34px;height:100%}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap{align-items:center;display:inline-flex;overflow:hidden;max-width:100%;position:relative;padding:3px 5px;flex:1 1;flex-wrap:nowrap}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap:empty ~ input.multiselect__input{opacity:1 !important;display:block !important}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap:empty ~ input.multiselect__input+span:not(.multiselect__single){display:none}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap .multiselect__tag{line-height:20px;padding:1px 5px;background-image:none;color:var(--color-main-text);border:1px solid var(--color-border-dark);display:inline-flex;align-items:center;border-radius:3px;min-width:0;max-width:fit-content;max-width:-moz-fit-content;margin-bottom:3px}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap .multiselect__tag:only-child{flex:0 1 auto}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap .multiselect__tag:not(:last-child){margin-right:5px}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__tags-wrap .multiselect__tag>span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__single,.multiselect[data-v-9737fff] .multiselect__tags .multiselect__placeholder{padding:7px 6px;flex:0 0 100%;z-index:1;background-color:var(--color-main-background);line-height:18px;color:var(--color-text-lighter);display:flex;align-items:center}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__single,.multiselect[data-v-9737fff] .multiselect__tags .multiselect__single *,.multiselect[data-v-9737fff] .multiselect__tags .multiselect__placeholder,.multiselect[data-v-9737fff] .multiselect__tags .multiselect__placeholder *{cursor:pointer}.multiselect[data-v-9737fff] .multiselect__tags .multiselect__strong,.multiselect[data-v-9737fff] .multiselect__tags .multiselect__limit{line-height:20px;color:var(--color-text-lighter);display:inline-flex;align-items:center;opacity:.7;margin-right:5px;z-index:5}.multiselect[data-v-9737fff] .multiselect__tags input.multiselect__input{width:100% !important;position:relative !important;margin:0;opacity:0;height:100% !important;border:none;cursor:pointer;padding:7px 6px !important;display:none}.multiselect[data-v-9737fff] .multiselect__content-wrapper{position:absolute;width:100%;margin-top:-1px;border:1px solid var(--color-border-dark);background:var(--color-main-background);z-index:50;max-height:250px;overflow-y:auto;border-radius:0 0 var(--border-radius) var(--border-radius)}.multiselect[data-v-9737fff] .multiselect__content-wrapper .multiselect__content{width:100%;padding:0}.multiselect[data-v-9737fff] .multiselect__content-wrapper li{position:relative;display:flex;align-items:center;background-color:transparent}.multiselect[data-v-9737fff] .multiselect__content-wrapper li,.multiselect[data-v-9737fff] .multiselect__content-wrapper li span{cursor:pointer}.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span{padding:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;height:auto;min-height:1em;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-flex;align-items:center;background-color:transparent;color:var(--color-text-lighter);width:100%}.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span::before{content:' ';background-repeat:no-repeat;background-position:center;min-width:16px;min-height:16px;display:block;opacity:.5;margin-right:5px;visibility:hidden}.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span.multiselect__option--disabled{background-color:var(--color-background-dark);opacity:.5}.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span.multiselect__option--highlight{color:var(--color-main-text);background-color:var(--color-background-dark)}.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span:not(.multiselect__option--disabled):hover::before{opacity:.3}.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span.multiselect__option--selected::before,.multiselect[data-v-9737fff] .multiselect__content-wrapper li>span:not(.multiselect__option--disabled):hover::before{visibility:visible}.multiselect[data-v-9737fff].multiselect--above .multiselect__content-wrapper{bottom:100%;margin-bottom:-1px}.multiselect[data-v-9737fff].multiselect--multiple .multiselect__tags{flex-wrap:wrap}.multiselect[data-v-9737fff].multiselect--multiple .multiselect__content-wrapper li>span::before{background-image:var(--icon-checkmark-000)}.multiselect[data-v-9737fff].multiselect--multiple .multiselect__content-wrapper li>span[data-select='create']::before{background-image:var(--icon-add-000);visibility:visible}.multiselect[data-v-9737fff].multiselect--single .multiselect__content-wrapper li>span::before{display:none}.multiselect[data-v-9737fff]:hover .multiselect__placeholder,.multiselect[data-v-9737fff] input.multiselect__input .multiselect__placeholder{color:var(--color-main-text)}\n","",{version:3,sources:["webpack://./index.scss","webpack://./../../assets/variables.scss"],names:[],mappings:"AAIA,6BACC,QAAS,CACT,oBAAqB,CACrB,oBAAqB,CAErB,eAAgB,CAChB,iBAAkB,CAClB,6CAA8C,CAP/C,4EAWE,UAAW,CACX,oBAAqB,CAZvB,0EAoBG,oBAAiC,CACjC,sBAAuB,CAEvB,2DAA4D,CAC5D,wBAAyB,CAxB5B,qEA6BG,YAAa,CA7BhB,6FAoCG,2DAA4D,CApC/D,2HA2CE,wDAAyD,CA3C3D,uDAgDE,SAAU,CACV,iBAAkB,CAjDpB,gDAwDE,YAAa,CACb,gBAAiB,CACjB,eAAgB,CAChB,yCAA0C,CAC1C,cAAe,CACf,iBAAkB,CAClB,iBAAkB,CAClB,eAAgB,CAChB,WAAY,CAhEd,wEAoEG,kBAAmB,CACnB,mBAAoB,CACpB,eAAgB,CAChB,cAAe,CACf,iBAAkB,CAClB,eAlBkB,CAmBlB,QAAS,CACT,gBAAiB,CA3EpB,yGA+EI,oBAAiC,CACjC,wBAAyB,CAhF7B,wIAqFK,YAAa,CArFlB,0FA0FI,gBAAiB,CACjB,eAAgB,CAChB,qBAAsB,CACtB,4BAA6B,CAC7B,yCAA0C,CAC1C,mBAAoB,CACpB,kBAAmB,CACnB,iBAAkB,CAGlB,WAAY,CACZ,qBAAsB,CACtB,0BAA2B,CAC3B,iBAAkB,CAvGtB,qGA2GK,aAAc,CA3GnB,2GA8GK,gBAvDgB,CAvDrB,+FAmHK,kBAAmB,CACnB,sBAAuB,CACvB,eAAgB,CArHrB,+IA8HG,eAAgB,CAChB,aAAc,CACd,SAAU,CACV,6CAA8C,CAC9C,gBAAiB,CACjB,+BAAgC,CAEhC,YAAa,CACb,kBAAmB,CAtItB,kSA0II,cAAe,CA1InB,yIAgJG,gBAAiB,CACjB,+BAAgC,CAChC,mBAAoB,CACpB,kBAAmB,CACnB,UC7GgB,CD8GhB,gBA9FkB,CAgGlB,SAAU,CAvJb,yEA2JG,qBAAsB,CACtB,4BAA6B,CAC7B,QAAS,CACT,SAAU,CAEV,sBAAuB,CACvB,WAAY,CAGZ,cAAe,CAEf,0BAA2B,CAC3B,YAAa,CAvKhB,2DA6KE,iBAAkB,CAClB,UAAW,CACX,eAAgB,CAChB,yCAA0C,CAC1C,uCAAwC,CACxC,UAAW,CACX,gBAAiB,CACjB,eAAgB,CAChB,2DAA4D,CArL9D,iFAuLG,UAAW,CACX,SAAU,CAxLb,8DA2LG,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,4BAA6B,CA9LhC,iIAiMI,cAAe,CAjMnB,mEAoMI,WAAY,CACZ,kBAAmB,CACnB,eAAgB,CAChB,sBAAuB,CACvB,QAAS,CACT,WAAY,CACZ,cAAe,CACf,0BAA2B,CAC3B,wBAAyB,CACzB,qBAAsB,CACtB,oBAAqB,CACrB,gBAAiB,CACjB,mBAAoB,CACpB,kBAAmB,CACnB,4BAA6B,CAC7B,+BAAgC,CAChC,UAAW,CApNf,2EAuNK,WAAY,CACZ,2BAA4B,CAC5B,0BAA2B,CAC3B,cAAe,CACf,eAAgB,CAChB,aAAc,CACd,UCvLgB,CDwLhB,gBAAiB,CACjB,iBAAkB,CA/NvB,iGAkOK,6CAA8C,CAC9C,UC7LgB,CDtCrB,kGAsOK,4BAA6B,CAC7B,6CAA8C,CAvOnD,qHA0OK,UAAW,CA1OhB,8NA+OM,kBAAmB,CA/OzB,8EAuPE,WAAY,CACZ,kBAAmB,CAxPrB,sEA+PG,cAAe,CA/PlB,iGAoQI,0CAA2C,CApQ/C,uHA2QK,oCAAqC,CACrC,kBAAmB,CA5QxB,+FAoRE,YAAa,CApRf,6IA2RG,4BAA6B",sourcesContent:["$scope_version:\"9737fff\"; @import 'variables';\n// scoping is not working inside the Multiselect.vue component\n// as the nested properties are not inside it\n// Therefore we need to use an external scoping\n.multiselect[data-v-#{$scope_version}] {\n\tmargin: 0;\n\tpadding: 0 !important;\n\tdisplay: inline-block;\n\t/* override this rule with your width styling if you need */\n\tmin-width: 160px;\n\tposition: relative;\n\tbackground-color: var(--color-main-background);\n\n\t/* Force single multiselect value to be shown when not active */\n\t&:not(.multiselect--active) .multiselect__single {\n\t\twidth: 100%;\n\t\tz-index: 2 !important;\n\t}\n\n\t// active state, force the input to be shown, we don't want\n\t// the placeholder or the currently selected options\n\t&.multiselect--active {\n\t\t/* Opened: force display the input */\n\t\tinput.multiselect__input {\n\t\t\topacity: $opacity_full !important;\n\t\t\tcursor: text !important;\n\t\t\t// remove border radius on bottom opening\n\t\t\tborder-radius: var(--border-radius) var(--border-radius) 0 0;\n\t\t\tdisplay: block !important;\n\t\t}\n\n\t\t/* multiselect__limit hidden if active */\n\t\t.multiselect__limit {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t// Remove radius on top opening\n\t&.multiselect--active.multiselect--above {\n\t\tinput.multiselect__input {\n\t\t\tborder-radius: 0 0 var(--border-radius) var(--border-radius);\n\t\t}\n\t}\n\n\t// disabled state background\n\t&.multiselect--disabled,\n\t&.multiselect--disabled .multiselect__single {\n\t\tbackground-color: var(--color-background-dark) !important;\n\t}\n\n\t// loading state\n\t&.icon-loading-small::after {\n\t\tleft: 100%;\n\t\tmargin-left: -24px;\n\t}\n\n\t// multiple selected options display\n\t.multiselect__tags {\n\t\t/* space between tags and limit tag */\n\t\t$space-between: 5px;\n\t\tdisplay: flex;\n\t\tflex-wrap: nowrap;\n\t\toverflow: hidden;\n\t\tborder: 1px solid var(--color-border-dark);\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tborder-radius: 3px;\n\t\tmin-height: 34px;\n\t\theight: 100%;\n\n\t\t/* tag wrapper */\n\t\t.multiselect__tags-wrap {\n\t\t\talign-items: center;\n\t\t\tdisplay: inline-flex;\n\t\t\toverflow: hidden;\n\t\t\tmax-width: 100%;\n\t\t\tposition: relative;\n\t\t\tpadding: 3px $space-between;\n\t\t\tflex: 1 1;\n\t\t\tflex-wrap: nowrap;\n\t\t\t/* no tags or simple select? Show input directly\n\t\t\tinput is used to display single value */\n\t\t\t&:empty ~ input.multiselect__input {\n\t\t\t\topacity: $opacity_full !important;\n\t\t\t\tdisplay: block !important;\n\t\t\t\t/* hide default empty text like .multiselect__placeholder,\n\t\t\t\tand show input instead. It looks better without a transition between\n\t\t\t\ta span and the input that have different styling */\n\t\t\t\t+ span:not(.multiselect__single) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t\t/* selected tag */\n\t\t\t.multiselect__tag {\n\t\t\t\tline-height: 20px;\n\t\t\t\tpadding: 1px 5px;\n\t\t\t\tbackground-image: none;\n\t\t\t\tcolor: var(--color-main-text);\n\t\t\t\tborder: 1px solid var(--color-border-dark);\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t/* require to override the default width\n\t\t\t\tand force the tag to shring properly */\n\t\t\t\tmin-width: 0;\n\t\t\t\tmax-width: fit-content;\n\t\t\t\tmax-width: -moz-fit-content;\n\t\t\t\tmargin-bottom: 3px;\n\t\t\t\t/* css hack, detect if more than two tags\n\t\t\t\tif so, flex-basis is set to half */\n\t\t\t\t&:only-child {\n\t\t\t\t\tflex: 0 1 auto;\n\t\t\t\t}\n\t\t\t\t&:not(:last-child) {\n\t\t\t\t\tmargin-right: $space-between;\n\t\t\t\t}\n\t\t\t\t/* ellipsis the groups to be sure\n\t\t\t\twe display at least two of them */\n\t\t\t\t> span {\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/* Single select default value\n\t\tor default placeholder if search disabled*/\n\t\t.multiselect__single,\n\t\t.multiselect__placeholder {\n\t\t\tpadding: 7px 6px; // like the input\n\t\t\tflex: 0 0 100%;\n\t\t\tz-index: 1; /* above input */\n\t\t\tbackground-color: var(--color-main-background);\n\t\t\tline-height: 18px; // 32px - 2*6px (padding) - 2*1px (border)\n\t\t\tcolor: var(--color-text-lighter); // like the input\n\t\t\t// Align content and make the flow smoother\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\t// Anything inside will trigger the select opening\n\t\t\t&, * {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t\t/* displayed text if tag limit reached */\n\t\t.multiselect__strong,\n\t\t.multiselect__limit {\n\t\t\tline-height: 20px;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\topacity: $opacity_normal;\n\t\t\tmargin-right: $space-between;\n\t\t\t/* above the input */\n\t\t\tz-index: 5;\n\t\t}\n\t\t/* default multiselect input for search and placeholder */\n\t\tinput.multiselect__input {\n\t\t\twidth: 100% !important;\n\t\t\tposition: relative !important;\n\t\t\tmargin: 0;\n\t\t\topacity: 0;\n\t\t\t/* let's leave it on top of tags but hide it */\n\t\t\theight: 100% !important;\n\t\t\tborder: none;\n\t\t\t/* override hide to force show the placeholder */\n\t\t\t/* only when not active */\n\t\t\tcursor: pointer;\n\t\t\t/* override inline styling of the lib */\n\t\t\tpadding: 7px 6px !important;\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t/* results wrapper */\n\t.multiselect__content-wrapper {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\tmargin-top: -1px;\n\t\tborder: 1px solid var(--color-border-dark);\n\t\tbackground: var(--color-main-background);\n\t\tz-index: 50;\n\t\tmax-height: 250px;\n\t\toverflow-y: auto;\n\t\tborder-radius: 0 0 var(--border-radius) var(--border-radius);\n\t\t.multiselect__content {\n\t\t\twidth: 100%;\n\t\t\tpadding: 0;\n\t\t}\n\t\tli {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tbackground-color: transparent;\n\t\t\t&,\n\t\t\tspan {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t> span {\n\t\t\t\tpadding: 8px;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\toverflow: hidden;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\tmargin: 0;\n\t\t\t\theight: auto;\n\t\t\t\tmin-height: 1em;\n\t\t\t\t-webkit-touch-callout: none;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tcolor: var(--color-text-lighter);\n\t\t\t\twidth: 100%;\n\t\t\t\t/* selected checkmark icon */\n\t\t\t\t&::before {\n\t\t\t\t\tcontent: ' ';\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\tbackground-position: center;\n\t\t\t\t\tmin-width: 16px;\n\t\t\t\t\tmin-height: 16px;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\topacity: $opacity_disabled;\n\t\t\t\t\tmargin-right: 5px;\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t}\n\t\t\t\t&.multiselect__option--disabled {\n\t\t\t\t\tbackground-color: var(--color-background-dark);\n\t\t\t\t\topacity: $opacity_disabled;\n\t\t\t\t}\n\t\t\t\t&.multiselect__option--highlight {\n\t\t\t\t\tcolor: var(--color-main-text);\n\t\t\t\t\tbackground-color: var(--color-background-dark);\n\t\t\t\t}\n\t\t\t\t&:not(.multiselect__option--disabled):hover::before {\n\t\t\t\t\topacity: .3;\n\t\t\t\t}\n\t\t\t\t&.multiselect__option--selected,\n\t\t\t\t&:not(.multiselect__option--disabled):hover {\n\t\t\t\t\t&::before {\n\t\t\t\t\t\tvisibility: visible;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t/* ABOVE display */\n\t&.multiselect--above .multiselect__content-wrapper {\n\t\tbottom: 100%;\n\t\tmargin-bottom: -1px;\n\t}\n\n\t/* Icon before option select */\n\t&.multiselect--multiple {\n\t\t// push the input after the tag list\n\t\t.multiselect__tags {\n\t\t\tflex-wrap: wrap;\n\t\t}\n\n\t\t.multiselect__content-wrapper li > span {\n\t\t\t&::before {\n\t\t\t\tbackground-image: var(--icon-checkmark-000);\n\t\t\t}\n\n\t\t\t/* add the prop tag-placeholder=\"create\" to add the +\n\t\t\ticon on top of an unknown-and-ready-to-be-created entry */\n\t\t\t&[data-select='create'] {\n\t\t\t\t&::before {\n\t\t\t\t\tbackground-image: var(--icon-add-000);\n\t\t\t\t\tvisibility: visible;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t/* No need for an icon here */\n\t&.multiselect--single .multiselect__content-wrapper li > span::before {\n\t\tdisplay: none;\n\t}\n\n\t/* Mouse feedback */\n\t&:hover,\n\tinput.multiselect__input {\n\t\t.multiselect__placeholder {\n\t\t\tcolor: var(--color-main-text);\n\t\t}\n\t}\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: ($clickable-area - $icon-size) / 2;\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n"],sourceRoot:""}]),e.a=o},function(t,e,n){"use strict";n.r(e);var i=n(83),a=n(100),A=n(2),o=n.n(A),r=n(106),s={insert:"head",singleton:!1};o()(r.a,s),r.a.locals;
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
Object(i.a)(a.a);e.default=a.a},function(t,e){t.exports=__webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js")}])}));
//# sourceMappingURL=Multiselect.js.map

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.concat.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.filter.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.find-index.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.flat.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.from.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.includes.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.iterator.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.join.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.map.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.reduce.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.slice.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.array.splice.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.function.name.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.number.constructor.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.object.get-own-property-descriptor.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.object.get-own-property-descriptors.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.object.keys.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.promise.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.regexp.constructor.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.code-point-at.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.code-point-at.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.code-point-at.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.from-code-point.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.from-code-point.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.from-code-point.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.iterator.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.match.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.search.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.split.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.starts-with.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.string.trim.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.symbol.description.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.symbol.iterator.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/es.symbol.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/web.dom-collections.for-each.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/web.dom-collections.iterator.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/core-js/modules/web.url.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/escape-html/index.js":
/*!*******************************************!*\
  !*** ./node_modules/escape-html/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/escape-html/index.js'");

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/hammerjs/hammer.js'");

/***/ }),

/***/ "./node_modules/linkifyjs/string.js":
/*!******************************************!*\
  !*** ./node_modules/linkifyjs/string.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/linkifyjs/string.js'");

/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/md5/md5.js'");

/***/ }),

/***/ "./node_modules/node-gettext/lib/gettext.js":
/*!**************************************************!*\
  !*** ./node_modules/node-gettext/lib/gettext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/node-gettext/lib/gettext.js'");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/regenerator-runtime/runtime.js'");

/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/*!*************************************************!*\
  !*** ./node_modules/striptags/src/striptags.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/striptags/src/striptags.js'");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/v-click-outside/dist/v-click-outside.umd.js":
/*!******************************************************************!*\
  !*** ./node_modules/v-click-outside/dist/v-click-outside.umd.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/v-click-outside/dist/v-click-outside.umd.js'");

/***/ }),

/***/ "./node_modules/vue-localstorage/dist/vue-local-storage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-localstorage/dist/vue-local-storage.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/vue-localstorage/dist/vue-local-storage.js'");

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/admin/Docker/server/node_modules/vue-multiselect/dist/vue-multiselect.min.js'");

/***/ })

}]);
//# sourceMappingURL=vue-vendors-settings-apps-settings-users-431e78a435be45e77ef0.js.map?v=ef6bdf172b783de25997