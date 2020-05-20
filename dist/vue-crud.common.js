module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0952":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0af1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "113b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1208":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1448":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_id_4febc598_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de06");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_id_4febc598_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_id_4febc598_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_id_4febc598_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("f28c")))

/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "310e":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
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

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4aa6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dc62");

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9427":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("a159") });


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __webpack_require__("aa47");

/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aebd":
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

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4aa6");
/* harmony import */ var F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__);



function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(null);

  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc62":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9427");
var $Object = __webpack_require__("584a").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js










function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = keys_default()($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});

  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);

  assign_default()(attributes.attrs, componentDataAttrs);

  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var vuedraggable_props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: vuedraggable_props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });

    var attributes = keys_default()(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});

    var options = assign_default()({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });

    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return assign_default()(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);

      assign_default()(draggedContext, {
        futureIndex: futureIndex
      });

      var sendEvt = assign_default()({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });

      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vuedraggable.common.js.map

/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "39ad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
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

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4a7a":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var o=n(4),i=n(5),r=n(6);t.exports=function(t){return o(t)||i(t)||r()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1),s=n.n(r),a=n(3),l=n.n(a),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),o=e.getBoundingClientRect(),i=o.top,r=o.bottom,s=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(r>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-s)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function h(t,e,n,o,i,r,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}var d={Deselect:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),r=i.height,s=i.top,a=i.left,l=i.width;t.unbindPosition=o.calculatePosition(t,o,{width:l+"px",top:window.scrollY+s+r+"px",left:window.scrollX+a+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}};var y=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},b=0;var g=function(){return++b};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={components:m({},d),mixins:[c,u,p],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===s()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==s()(t))return t;try{return t.hasOwnProperty("id")?t.id:y(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var o=n.getOptionLabel(t);return"number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)}))}},createOption:{type:Function,default:function(t){return"object"===s()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(s()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var o=n.width,i=n.top,r=n.left;t.style.top=i,t.style.left=r,t.style.width=o}}},data:function(){return{uid:g(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)})))},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;this.isTrackingValues&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target!==this.$refs.search;e&&t.preventDefault(),[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||false)).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===s()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return o[t]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m({},e,{deselect:this.deselect}),footer:m({},e,{deselect:this.deselect})}},childComponents:function(){return m({},d,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},O=(n(7),h(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option",id:"vs"+t.uid+"__option-"+o,"aria-selected":o===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=o)},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return O})),n.d(e,"mixins",(function(){return w}));e.default=O}])}));
//# sourceMappingURL=vue-select.js.map

/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7329":
/***/ (function(module, exports, __webpack_require__) {

/* 
  @package NOTY - Dependency-free notification library 
  @version version: 3.2.0-beta 
  @contributors https://github.com/needim/noty/graphs/contributors 
  @documentation Examples and Documentation - https://ned.im/noty 
  @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.deepExtend = exports.animationEndEvents = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.inArray = inArray;
exports.stopPropagation = stopPropagation;
exports.generateID = generateID;
exports.outerHeight = outerHeight;
exports.addListener = addListener;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.remove = remove;
exports.classList = classList;
exports.visibilityChangeFlow = visibilityChangeFlow;
exports.createAudioElements = createAudioElements;

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var animationEndEvents = exports.animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function inArray(needle, haystack, argStrict) {
  var key = void 0;
  var strict = !!argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  }
  return false;
}

function stopPropagation(evt) {
  evt = evt || window.event;

  if (typeof evt.stopPropagation !== 'undefined') {
    evt.stopPropagation();
  } else {
    evt.cancelBubble = true;
  }
}

var deepExtend = exports.deepExtend = function deepExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          out[key] = obj[key];
        } else if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
          out[key] = deepExtend(out[key], obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
};

function generateID() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var id = 'noty_' + prefix + '_';

  id += 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });

  return id;
}

function outerHeight(el) {
  var height = el.offsetHeight;
  var style = window.getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

var css = exports.css = function () {
  var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'];
  var cssProps = {};

  function camelCase(string) {
    return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
      return letter.toUpperCase();
    });
  }

  function getVendorProp(name) {
    var style = document.body.style;
    if (name in style) return name;

    var i = cssPrefixes.length;
    var capName = name.charAt(0).toUpperCase() + name.slice(1);
    var vendorName = void 0;

    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style) return vendorName;
    }

    return name;
  }

  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }

  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }

  return function (element, properties) {
    var args = arguments;
    var prop = void 0;
    var value = void 0;

    if (args.length === 2) {
      for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) {
            applyCss(element, prop, value);
          }
        }
      }
    } else {
      applyCss(element, args[1], args[2]);
    }
  };
}();

function addListener(el, events, cb) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  events = events.split(' ');
  for (var i = 0; i < events.length; i++) {
    if (document.addEventListener) {
      el.addEventListener(events[i], cb, useCapture);
    } else if (document.attachEvent) {
      el.attachEvent('on' + events[i], cb);
    }
  }
}

function hasClass(element, name) {
  var list = typeof element === 'string' ? element : classList(element);
  return list.indexOf(' ' + name + ' ') >= 0;
}

function addClass(element, name) {
  var oldList = classList(element);
  var newList = oldList + name;

  if (hasClass(oldList, name)) return;

  // Trim the opening space.
  element.className = newList.substring(1);
}

function removeClass(element, name) {
  var oldList = classList(element);
  var newList = void 0;

  if (!hasClass(element, name)) return;

  // Replace the class name.
  newList = oldList.replace(' ' + name + ' ', ' ');

  // Trim the opening and closing spaces.
  element.className = newList.substring(1, newList.length - 1);
}

function remove(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function classList(element) {
  return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
}

function visibilityChangeFlow() {
  var hidden = void 0;
  var visibilityChange = void 0;
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  function onVisibilityChange() {
    API.PageHidden = document[hidden];
    handleVisibilityChange();
  }

  function onBlur() {
    API.PageHidden = true;
    handleVisibilityChange();
  }

  function onFocus() {
    API.PageHidden = false;
    handleVisibilityChange();
  }

  function handleVisibilityChange() {
    if (API.PageHidden) stopAll();else resumeAll();
  }

  function stopAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].stop();
          }
        }
      });
    }, 100);
  }

  function resumeAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].resume();
          }
        }
      });
      API.queueRenderAll();
    }, 100);
  }

  if (visibilityChange) {
    addListener(document, visibilityChange, onVisibilityChange);
  }

  addListener(window, 'blur', onBlur);
  addListener(window, 'focus', onFocus);
}

function createAudioElements(ref) {
  if (ref.hasSound) {
    var audioElement = document.createElement('audio');

    ref.options.sounds.sources.forEach(function (s) {
      var source = document.createElement('source');
      source.src = s;
      source.type = 'audio/' + getExtension(s);
      audioElement.appendChild(source);
    });

    if (ref.barDom) {
      ref.barDom.appendChild(audioElement);
    } else {
      document.querySelector('body').appendChild(audioElement);
    }

    audioElement.volume = ref.options.sounds.volume;

    if (!ref.soundPlayed) {
      audioElement.play();
      ref.soundPlayed = true;
    }

    audioElement.onended = function () {
      remove(audioElement);
    };
  }
}

function getExtension(fileName) {
  return fileName.match(/\.([^.]+)$/)[1];
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Defaults = exports.Store = exports.Queues = exports.DefaultMaxVisible = exports.docTitle = exports.DocModalCount = exports.PageHidden = undefined;
exports.getQueueCounts = getQueueCounts;
exports.addToQueue = addToQueue;
exports.removeFromQueue = removeFromQueue;
exports.queueRender = queueRender;
exports.queueRenderAll = queueRenderAll;
exports.ghostFix = ghostFix;
exports.build = build;
exports.hasButtons = hasButtons;
exports.handleModal = handleModal;
exports.handleModalClose = handleModalClose;
exports.queueClose = queueClose;
exports.dequeueClose = dequeueClose;
exports.fire = fire;
exports.openFlow = openFlow;
exports.closeFlow = closeFlow;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PageHidden = exports.PageHidden = false;
var DocModalCount = exports.DocModalCount = 0;

var DocTitleProps = {
  originalTitle: null,
  count: 0,
  changed: false,
  timer: -1
};

var docTitle = exports.docTitle = {
  increment: function increment() {
    DocTitleProps.count++;

    docTitle._update();
  },

  decrement: function decrement() {
    DocTitleProps.count--;

    if (DocTitleProps.count <= 0) {
      docTitle._clear();
      return;
    }

    docTitle._update();
  },

  _update: function _update() {
    var title = document.title;

    if (!DocTitleProps.changed) {
      DocTitleProps.originalTitle = title;
      document.title = '(' + DocTitleProps.count + ') ' + title;
      DocTitleProps.changed = true;
    } else {
      document.title = '(' + DocTitleProps.count + ') ' + DocTitleProps.originalTitle;
    }
  },

  _clear: function _clear() {
    if (DocTitleProps.changed) {
      DocTitleProps.count = 0;
      document.title = DocTitleProps.originalTitle;
      DocTitleProps.changed = false;
    }
  }
};

var DefaultMaxVisible = exports.DefaultMaxVisible = 5;

var Queues = exports.Queues = {
  global: {
    maxVisible: DefaultMaxVisible,
    queue: []
  }
};

var Store = exports.Store = {};

var Defaults = exports.Defaults = {
  type: 'alert',
  layout: 'topRight',
  theme: 'mint',
  text: '',
  timeout: false,
  progressBar: true,
  closeWith: ['click'],
  animation: {
    open: 'noty_effects_open',
    close: 'noty_effects_close'
  },
  id: false,
  force: false,
  killer: false,
  queue: 'global',
  container: false,
  buttons: [],
  callbacks: {
    beforeShow: null,
    onShow: null,
    afterShow: null,
    onClose: null,
    afterClose: null,
    onClick: null,
    onHover: null,
    onTemplate: null
  },
  sounds: {
    sources: [],
    volume: 1,
    conditions: []
  },
  titleCount: {
    conditions: []
  },
  modal: false,
  visibilityControl: false

  /**
   * @param {string} queueName
   * @return {object}
   */
};function getQueueCounts() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  var count = 0;
  var max = DefaultMaxVisible;

  if (Queues.hasOwnProperty(queueName)) {
    max = Queues[queueName].maxVisible;
    Object.keys(Store).forEach(function (i) {
      if (Store[i].options.queue === queueName && !Store[i].closed) count++;
    });
  }

  return {
    current: count,
    maxVisible: max
  };
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function addToQueue(ref) {
  if (!Queues.hasOwnProperty(ref.options.queue)) {
    Queues[ref.options.queue] = { maxVisible: DefaultMaxVisible, queue: [] };
  }

  Queues[ref.options.queue].queue.push(ref);
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function removeFromQueue(ref) {
  if (Queues.hasOwnProperty(ref.options.queue)) {
    var queue = [];
    Object.keys(Queues[ref.options.queue].queue).forEach(function (i) {
      if (Queues[ref.options.queue].queue[i].id !== ref.id) {
        queue.push(Queues[ref.options.queue].queue[i]);
      }
    });
    Queues[ref.options.queue].queue = queue;
  }
}

/**
 * @param {string} queueName
 * @return {void}
 */
function queueRender() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  if (Queues.hasOwnProperty(queueName)) {
    var noty = Queues[queueName].queue.shift();

    if (noty) noty.show();
  }
}

/**
 * @return {void}
 */
function queueRenderAll() {
  Object.keys(Queues).forEach(function (queueName) {
    queueRender(queueName);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function ghostFix(ref) {
  var ghostID = Utils.generateID('ghost');
  var ghost = document.createElement('div');
  ghost.setAttribute('id', ghostID);
  Utils.css(ghost, {
    height: Utils.outerHeight(ref.barDom) + 'px'
  });

  ref.barDom.insertAdjacentHTML('afterend', ghost.outerHTML);

  Utils.remove(ref.barDom);
  ghost = document.getElementById(ghostID);
  Utils.addClass(ghost, 'noty_fix_effects_height');
  Utils.addListener(ghost, Utils.animationEndEvents, function () {
    Utils.remove(ghost);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function build(ref) {
  findOrCreateContainer(ref);

  var markup = '<div class="noty_body">' + ref.options.text + '</div>' + buildButtons(ref) + '<div class="noty_progressbar"></div>';

  ref.barDom = document.createElement('div');
  ref.barDom.setAttribute('id', ref.id);
  Utils.addClass(ref.barDom, 'noty_bar noty_type__' + ref.options.type + ' noty_theme__' + ref.options.theme);

  ref.barDom.innerHTML = markup;

  fire(ref, 'onTemplate');
}

/**
 * @param {Noty} ref
 * @return {boolean}
 */
function hasButtons(ref) {
  return !!(ref.options.buttons && Object.keys(ref.options.buttons).length);
}

/**
 * @param {Noty} ref
 * @return {string}
 */
function buildButtons(ref) {
  if (hasButtons(ref)) {
    var buttons = document.createElement('div');
    Utils.addClass(buttons, 'noty_buttons');

    Object.keys(ref.options.buttons).forEach(function (key) {
      buttons.appendChild(ref.options.buttons[key].dom);
    });

    ref.options.buttons.forEach(function (btn) {
      buttons.appendChild(btn.dom);
    });
    return buttons.outerHTML;
  }
  return '';
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModal(ref) {
  if (ref.options.modal) {
    if (DocModalCount === 0) {
      createModal(ref);
    }

    exports.DocModalCount = DocModalCount += 1;
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModalClose(ref) {
  if (ref.options.modal && DocModalCount > 0) {
    exports.DocModalCount = DocModalCount -= 1;

    if (DocModalCount <= 0) {
      var modal = document.querySelector('.noty_modal');

      if (modal) {
        Utils.removeClass(modal, 'noty_modal_open');
        Utils.addClass(modal, 'noty_modal_close');
        Utils.addListener(modal, Utils.animationEndEvents, function () {
          Utils.remove(modal);
        });
      }
    }
  }
}

/**
 * @return {void}
 */
function createModal() {
  var body = document.querySelector('body');
  var modal = document.createElement('div');
  Utils.addClass(modal, 'noty_modal');
  body.insertBefore(modal, body.firstChild);
  Utils.addClass(modal, 'noty_modal_open');

  Utils.addListener(modal, Utils.animationEndEvents, function () {
    Utils.removeClass(modal, 'noty_modal_open');
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function findOrCreateContainer(ref) {
  if (ref.options.container) {
    ref.layoutDom = document.querySelector(ref.options.container);
    return;
  }

  var layoutID = 'noty_layout__' + ref.options.layout;
  ref.layoutDom = document.querySelector('div#' + layoutID);

  if (!ref.layoutDom) {
    ref.layoutDom = document.createElement('div');
    ref.layoutDom.setAttribute('id', layoutID);
    ref.layoutDom.setAttribute('role', 'alert');
    ref.layoutDom.setAttribute('aria-live', 'polite');
    Utils.addClass(ref.layoutDom, 'noty_layout');
    document.querySelector('body').appendChild(ref.layoutDom);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function queueClose(ref) {
  if (ref.options.timeout) {
    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width ' + ref.options.timeout + 'ms linear',
        width: '0%'
      });
    }

    clearTimeout(ref.closeTimer);

    ref.closeTimer = setTimeout(function () {
      ref.close();
    }, ref.options.timeout);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function dequeueClose(ref) {
  if (ref.options.timeout && ref.closeTimer) {
    clearTimeout(ref.closeTimer);
    ref.closeTimer = -1;

    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width 0ms linear',
        width: '100%'
      });
    }
  }
}

/**
 * @param {Noty} ref
 * @param {string} eventName
 * @return {void}
 */
function fire(ref, eventName) {
  if (ref.listeners.hasOwnProperty(eventName)) {
    ref.listeners[eventName].forEach(function (cb) {
      if (typeof cb === 'function') {
        cb.apply(ref);
      }
    });
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function openFlow(ref) {
  fire(ref, 'afterShow');
  queueClose(ref);

  Utils.addListener(ref.barDom, 'mouseenter', function () {
    dequeueClose(ref);
  });

  Utils.addListener(ref.barDom, 'mouseleave', function () {
    queueClose(ref);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function closeFlow(ref) {
  delete Store[ref.id];
  ref.closing = false;
  fire(ref, 'afterClose');

  Utils.remove(ref.barDom);

  if (ref.layoutDom.querySelectorAll('.noty_bar').length === 0 && !ref.options.container) {
    Utils.remove(ref.layoutDom);
  }

  if (Utils.inArray('docVisible', ref.options.titleCount.conditions) || Utils.inArray('docHidden', ref.options.titleCount.conditions)) {
    docTitle.decrement();
  }

  queueRender(ref.options.queue);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotyButton = undefined;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotyButton = exports.NotyButton = function NotyButton(html, classes, cb) {
  var _this = this;

  var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _classCallCheck(this, NotyButton);

  this.dom = document.createElement('button');
  this.dom.innerHTML = html;
  this.id = attributes.id = attributes.id || Utils.generateID('button');
  this.cb = cb;
  Object.keys(attributes).forEach(function (propertyName) {
    _this.dom.setAttribute(propertyName, attributes[propertyName]);
  });
  Utils.addClass(this.dom, classes || 'noty_btn');

  return this;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Push = exports.Push = function () {
  function Push() {
    var workerPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/service-worker.js';

    _classCallCheck(this, Push);

    this.subData = {};
    this.workerPath = workerPath;
    this.listeners = {
      onPermissionGranted: [],
      onPermissionDenied: [],
      onSubscriptionSuccess: [],
      onSubscriptionCancel: [],
      onWorkerError: [],
      onWorkerSuccess: [],
      onWorkerNotSupported: []
    };
    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Push}
   */


  _createClass(Push, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }
  }, {
    key: 'fire',
    value: function fire(eventName) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].forEach(function (cb) {
          if (typeof cb === 'function') {
            cb.apply(_this, params);
          }
        });
      }
    }
  }, {
    key: 'create',
    value: function create() {
      console.log('NOT IMPLEMENTED YET');
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      var result = false;

      try {
        result = window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && window.external.msIsSiteMode() !== undefined;
      } catch (e) {}

      return result;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getPermissionStatus',
    value: function getPermissionStatus() {
      var perm = 'default';

      if (window.Notification && window.Notification.permissionLevel) {
        perm = window.Notification.permissionLevel;
      } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
        switch (window.webkitNotifications.checkPermission()) {
          case 1:
            perm = 'default';
            break;
          case 0:
            perm = 'granted';
            break;
          default:
            perm = 'denied';
        }
      } else if (window.Notification && window.Notification.permission) {
        perm = window.Notification.permission;
      } else if (navigator.mozNotification) {
        perm = 'granted';
      } else if (window.external && window.external.msIsSiteMode() !== undefined) {
        perm = window.external.msIsSiteMode() ? 'granted' : 'default';
      }

      return perm.toString().toLowerCase();
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getEndpoint',
    value: function getEndpoint(subscription) {
      var endpoint = subscription.endpoint;
      var subscriptionId = subscription.subscriptionId;

      // fix for Chrome < 45
      if (subscriptionId && endpoint.indexOf(subscriptionId) === -1) {
        endpoint += '/' + subscriptionId;
      }

      return endpoint;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSWRegistered',
    value: function isSWRegistered() {
      try {
        return navigator.serviceWorker.controller.state === 'activated';
      } catch (e) {
        return false;
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'unregisterWorker',
    value: function unregisterWorker() {
      var self = this;
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = registrations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var registration = _step.value;

              registration.unregister();
              self.fire('onSubscriptionCancel');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'requestSubscription',
    value: function requestSubscription() {
      var _this2 = this;

      var userVisibleOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var self = this;
      var current = this.getPermissionStatus();
      var cb = function cb(result) {
        if (result === 'granted') {
          _this2.fire('onPermissionGranted');

          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(_this2.workerPath).then(function () {
              navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                self.fire('onWorkerSuccess');
                serviceWorkerRegistration.pushManager.subscribe({
                  userVisibleOnly: userVisibleOnly
                }).then(function (subscription) {
                  var key = subscription.getKey('p256dh');
                  var token = subscription.getKey('auth');

                  self.subData = {
                    endpoint: self.getEndpoint(subscription),
                    p256dh: key ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                    auth: token ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
                  };

                  self.fire('onSubscriptionSuccess', [self.subData]);
                }).catch(function (err) {
                  self.fire('onWorkerError', [err]);
                });
              });
            });
          } else {
            self.fire('onWorkerNotSupported');
          }
        } else if (result === 'denied') {
          _this2.fire('onPermissionDenied');
          _this2.unregisterWorker();
        }
      };

      if (current === 'default') {
        if (window.Notification && window.Notification.requestPermission) {
          window.Notification.requestPermission(cb);
        } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
          window.webkitNotifications.requestPermission(cb);
        }
      } else {
        cb(current);
      }
    }
  }]);

  return Push;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(9);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global VERSION */

__webpack_require__(5);

var _es6Promise = __webpack_require__(4);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

var _button = __webpack_require__(2);

var _push = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Noty = function () {
  /**
   * @param {object} options
   * @return {Noty}
   */
  function Noty() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Noty);

    this.options = Utils.deepExtend({}, API.Defaults, options);

    if (API.Store[this.options.id]) {
      return API.Store[this.options.id];
    }

    this.id = this.options.id || Utils.generateID('bar');
    this.closeTimer = -1;
    this.barDom = null;
    this.layoutDom = null;
    this.progressDom = null;
    this.showing = false;
    this.shown = false;
    this.closed = false;
    this.closing = false;
    this.killable = this.options.timeout || this.options.closeWith.length > 0;
    this.hasSound = this.options.sounds.sources.length > 0;
    this.soundPlayed = false;
    this.listeners = {
      beforeShow: [],
      onShow: [],
      afterShow: [],
      onClose: [],
      afterClose: [],
      onClick: [],
      onHover: [],
      onTemplate: []
    };
    this.promises = {
      show: null,
      close: null
    };
    this.on('beforeShow', this.options.callbacks.beforeShow);
    this.on('onShow', this.options.callbacks.onShow);
    this.on('afterShow', this.options.callbacks.afterShow);
    this.on('onClose', this.options.callbacks.onClose);
    this.on('afterClose', this.options.callbacks.afterClose);
    this.on('onClick', this.options.callbacks.onClick);
    this.on('onHover', this.options.callbacks.onHover);
    this.on('onTemplate', this.options.callbacks.onTemplate);

    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Noty}
   */


  _createClass(Noty, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (this.showing || this.shown) {
        return this; // preventing multiple show
      }

      if (this.options.killer === true) {
        Noty.closeAll();
      } else if (typeof this.options.killer === 'string') {
        Noty.closeAll(this.options.killer);
      }

      var queueCounts = API.getQueueCounts(this.options.queue);

      if (queueCounts.current >= queueCounts.maxVisible || API.PageHidden && this.options.visibilityControl) {
        API.addToQueue(this);

        if (API.PageHidden && this.hasSound && Utils.inArray('docHidden', this.options.sounds.conditions)) {
          Utils.createAudioElements(this);
        }

        if (API.PageHidden && Utils.inArray('docHidden', this.options.titleCount.conditions)) {
          API.docTitle.increment();
        }

        return this;
      }

      API.Store[this.id] = this;

      API.fire(this, 'beforeShow');

      this.showing = true;

      if (this.closing) {
        this.showing = false;
        return this;
      }

      API.build(this);
      API.handleModal(this);

      if (this.options.force) {
        this.layoutDom.insertBefore(this.barDom, this.layoutDom.firstChild);
      } else {
        this.layoutDom.appendChild(this.barDom);
      }

      if (this.hasSound && !this.soundPlayed && Utils.inArray('docVisible', this.options.sounds.conditions)) {
        Utils.createAudioElements(this);
      }

      if (Utils.inArray('docVisible', this.options.titleCount.conditions)) {
        API.docTitle.increment();
      }

      this.shown = true;
      this.closed = false;

      // bind button events if any
      if (API.hasButtons(this)) {
        Object.keys(this.options.buttons).forEach(function (key) {
          var btn = _this.barDom.querySelector('#' + _this.options.buttons[key].id);
          Utils.addListener(btn, 'click', function (e) {
            Utils.stopPropagation(e);
            _this.options.buttons[key].cb(_this);
          });
        });
      }

      this.progressDom = this.barDom.querySelector('.noty_progressbar');

      if (Utils.inArray('click', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_click');
        Utils.addListener(this.barDom, 'click', function (e) {
          Utils.stopPropagation(e);
          API.fire(_this, 'onClick');
          _this.close();
        }, false);
      }

      Utils.addListener(this.barDom, 'mouseenter', function () {
        API.fire(_this, 'onHover');
      }, false);

      if (this.options.timeout) Utils.addClass(this.barDom, 'noty_has_timeout');
      if (this.options.progressBar) {
        Utils.addClass(this.barDom, 'noty_has_progressbar');
      }

      if (Utils.inArray('button', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_button');

        var closeButton = document.createElement('div');
        Utils.addClass(closeButton, 'noty_close_button');
        closeButton.innerHTML = '×';
        this.barDom.appendChild(closeButton);

        Utils.addListener(closeButton, 'click', function (e) {
          Utils.stopPropagation(e);
          _this.close();
        }, false);
      }

      API.fire(this, 'onShow');

      if (this.options.animation.open === null) {
        this.promises.show = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.open === 'function') {
        this.promises.show = new _es6Promise2.default(this.options.animation.open.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.open);
        this.promises.show = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this.barDom, Utils.animationEndEvents, function () {
            Utils.removeClass(_this.barDom, _this.options.animation.open);
            resolve();
          });
        });
      }

      this.promises.show.then(function () {
        var _t = _this;
        setTimeout(function () {
          API.openFlow(_t);
        }, 100);
      });

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'stop',
    value: function stop() {
      API.dequeueClose(this);
      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'resume',
    value: function resume() {
      API.queueClose(this);
      return this;
    }

    /**
     * @param {int|boolean} ms
     * @return {Noty}
     */

  }, {
    key: 'setTimeout',
    value: function (_setTimeout) {
      function setTimeout(_x) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (ms) {
      this.stop();
      this.options.timeout = ms;

      if (this.barDom) {
        if (this.options.timeout) {
          Utils.addClass(this.barDom, 'noty_has_timeout');
        } else {
          Utils.removeClass(this.barDom, 'noty_has_timeout');
        }

        var _t = this;
        setTimeout(function () {
          // ugly fix for progressbar display bug
          _t.resume();
        }, 100);
      }

      return this;
    })

    /**
     * @param {string} html
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setText',
    value: function setText(html) {
      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        this.barDom.querySelector('.noty_body').innerHTML = html;
      }

      if (optionsOverride) this.options.text = html;

      return this;
    }

    /**
     * @param {string} type
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setType',
    value: function setType(type) {
      var _this2 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 11) === 'noty_type__') {
            Utils.removeClass(_this2.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_type__' + type);
      }

      if (optionsOverride) this.options.type = type;

      return this;
    }

    /**
     * @param {string} theme
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setTheme',
    value: function setTheme(theme) {
      var _this3 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 12) === 'noty_theme__') {
            Utils.removeClass(_this3.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_theme__' + theme);
      }

      if (optionsOverride) this.options.theme = theme;

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this4 = this;

      if (this.closed) return this;

      if (!this.shown) {
        // it's in the queue
        API.removeFromQueue(this);
        return this;
      }

      API.fire(this, 'onClose');

      this.closing = true;

      if (this.options.animation.close === null || this.options.animation.close === false) {
        this.promises.close = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.close === 'function') {
        this.promises.close = new _es6Promise2.default(this.options.animation.close.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.close);
        this.promises.close = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this4.barDom, Utils.animationEndEvents, function () {
            if (_this4.options.force) {
              Utils.remove(_this4.barDom);
            } else {
              API.ghostFix(_this4);
            }
            resolve();
          });
        });
      }

      this.promises.close.then(function () {
        API.closeFlow(_this4);
        API.handleModalClose(_this4);
      });

      this.closed = true;

      return this;
    }

    // API functions

    /**
     * @param {boolean|string} queueName
     * @return {Noty}
     */

  }], [{
    key: 'closeAll',
    value: function closeAll() {
      var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      Object.keys(API.Store).forEach(function (id) {
        if (queueName) {
          if (API.Store[id].options.queue === queueName && API.Store[id].killable) {
            API.Store[id].close();
          }
        } else if (API.Store[id].killable) {
          API.Store[id].close();
        }
      });
      return this;
    }

    /**
     * @param {string} queueName
     * @return {Noty}
     */

  }, {
    key: 'clearQueue',
    value: function clearQueue() {
      var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

      if (API.Queues.hasOwnProperty(queueName)) {
        API.Queues[queueName].queue = [];
      }
      return this;
    }

    /**
     * @return {API.Queues}
     */

  }, {
    key: 'overrideDefaults',


    /**
     * @param {Object} obj
     * @return {Noty}
     */
    value: function overrideDefaults(obj) {
      API.Defaults = Utils.deepExtend({}, API.Defaults, obj);
      return this;
    }

    /**
     * @param {int} amount
     * @param {string} queueName
     * @return {Noty}
     */

  }, {
    key: 'setMaxVisible',
    value: function setMaxVisible() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API.DefaultMaxVisible;
      var queueName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';

      if (!API.Queues.hasOwnProperty(queueName)) {
        API.Queues[queueName] = { maxVisible: amount, queue: [] };
      }

      API.Queues[queueName].maxVisible = amount;
      return this;
    }

    /**
     * @param {string} innerHtml
     * @param {String} classes
     * @param {Function} cb
     * @param {Object} attributes
     * @return {NotyButton}
     */

  }, {
    key: 'button',
    value: function button(innerHtml) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var cb = arguments[2];
      var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _button.NotyButton(innerHtml, classes, cb, attributes);
    }

    /**
     * @return {string}
     */

  }, {
    key: 'version',
    value: function version() {
      return "3.2.0-beta";
    }

    /**
     * @param {String} workerPath
     * @return {Push}
     */

  }, {
    key: 'Push',
    value: function Push(workerPath) {
      return new _push.Push(workerPath);
    }
  }, {
    key: 'Queues',
    get: function get() {
      return API.Queues;
    }

    /**
     * @return {API.PageHidden}
     */

  }, {
    key: 'PageHidden',
    get: function get() {
      return API.PageHidden;
    }
  }]);

  return Noty;
}();

// Document visibility change controller


exports.default = Noty;
if (typeof window !== 'undefined') {
  Utils.visibilityChangeFlow();
}
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});
//# sourceMappingURL=noty.js.map

/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "77f2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("decb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "8e1f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a8a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_71b0da51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("113b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_71b0da51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_71b0da51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileComponent_vue_vue_type_style_index_0_id_71b0da51_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "aa47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "ad7e":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Trix 1.2.3
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */
(function(){}).call(this),function(){var t;null==window.Set&&(window.Set=t=function(){function t(){this.clear()}return t.prototype.clear=function(){return this.values=[]},t.prototype.has=function(t){return-1!==this.values.indexOf(t)},t.prototype.add=function(t){return this.has(t)||this.values.push(t),this},t.prototype["delete"]=function(t){var e;return-1===(e=this.values.indexOf(t))?!1:(this.values.splice(e,1),!0)},t.prototype.forEach=function(){var t;return(t=this.values).forEach.apply(t,arguments)},t}())}.call(this),function(t){function e(){}function n(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}function o(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void h(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?r:s)(e.promise,t._value);var i;try{i=n(t._value)}catch(o){return void s(e.promise,o)}r(e.promise,i)}))}function r(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if(e instanceof i)return t._state=3,t._value=e,void a(t);if("function"==typeof o)return void c(n(o,e),t)}t._state=1,t._value=e,a(t)}catch(r){s(t,r)}}function s(t,e){t._state=2,t._value=e,a(t)}function a(t){2===t._state&&0===t._deferreds.length&&setTimeout(function(){t._handled||p(t._value)},1);for(var e=0,n=t._deferreds.length;n>e;e++)o(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,r(e,t))},function(t){n||(n=!0,s(e,t))})}catch(i){if(n)return;n=!0,s(e,i)}}var l=setTimeout,h="function"==typeof setImmediate&&setImmediate||function(t){l(t,1)},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,n){var r=new i(e);return o(this,new u(t,n,r)),r},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(r,t)},n)}e[r]=s,0===--o&&t(e)}catch(u){n(u)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var i=0,o=t.length;o>i;i++)t[i].then(e,n)})},i._setImmediateFn=function(t){h=t},i._setUnhandledRejectionFn=function(t){p=t}, true&&module.exports?module.exports=i:t.Promise||(t.Promise=i)}(this),function(){var t="object"==typeof window.customElements,e="function"==typeof document.registerElement,n=t||e;n||(/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
"undefined"==typeof WeakMap&&!function(){var t=Object.defineProperty,e=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(e++ +"__")};n.prototype={set:function(e,n){var i=e[this.name];return i&&i[0]===e?i[1]=n:t(e,this.name,{value:[e,n],writable:!0}),this},get:function(t){var e;return(e=t[this.name])&&e[0]===t?e[1]:void 0},"delete":function(t){var e=t[this.name];return e&&e[0]===t?(e[0]=e[1]=void 0,!0):!1},has:function(t){var e=t[this.name];return e?e[0]===t:!1}},window.WeakMap=n}(),function(t){function e(t){A.push(t),b||(b=!0,g(i))}function n(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}function i(){b=!1;var t=A;A=[],t.sort(function(t,e){return t.uid_-e.uid_});var e=!1;t.forEach(function(t){var n=t.takeRecords();o(t),n.length&&(t.callback_(n,t),e=!0)}),e&&i()}function o(t){t.nodes_.forEach(function(e){var n=m.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers()})})}function r(t,e){for(var n=t;n;n=n.parentNode){var i=m.get(n);if(i)for(var o=0;o<i.length;o++){var r=i[o],s=r.options;if(n===t||s.subtree){var a=e(s);a&&r.enqueue(a)}}}}function s(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++C}function a(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function u(t){var e=new a(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}function c(t,e){return x=new a(t,e)}function l(t){return w?w:(w=u(x),w.oldValue=t,w)}function h(){x=w=void 0}function p(t){return t===w||t===x}function d(t,e){return t===e?t:w&&p(t)?w:null}function f(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[]}if(!t.JsMutationObserver){var g,m=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))g=setTimeout;else if(window.setImmediate)g=window.setImmediate;else{var v=[],y=String(Math.random());window.addEventListener("message",function(t){if(t.data===y){var e=v;v=[],e.forEach(function(t){t()})}}),g=function(t){v.push(t),window.postMessage(y,"*")}}var b=!1,A=[],C=0;s.prototype={observe:function(t,e){if(t=n(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var i=m.get(t);i||m.set(t,i=[]);for(var o,r=0;r<i.length;r++)if(i[r].observer===this){o=i[r],o.removeListeners(),o.options=e;break}o||(o=new f(this,t,e),i.push(o),this.nodes_.push(t)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(t){for(var e=m.get(t),n=0;n<e.length;n++){var i=e[n];if(i.observer===this){i.removeListeners(),e.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var t=this.records_;return this.records_=[],t}};var x,w;f.prototype={enqueue:function(t){var n=this.observer.records_,i=n.length;if(n.length>0){var o=n[i-1],r=d(o,t);if(r)return void(n[i-1]=r)}else e(this.observer);n[i]=t},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=m.get(t);e||m.set(t,e=[]),e.push(this)}},removeTransientObservers:function(){var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=m.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this)},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,n=t.relatedNode.namespaceURI,i=t.target,o=new c("attributes",i);o.attributeName=e,o.attributeNamespace=n;var s=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;r(i,function(t){return!t.attributes||t.attributeFilter&&t.attributeFilter.length&&-1===t.attributeFilter.indexOf(e)&&-1===t.attributeFilter.indexOf(n)?void 0:t.attributeOldValue?l(s):o});break;case"DOMCharacterDataModified":var i=t.target,o=c("characterData",i),s=t.prevValue;r(i,function(t){return t.characterData?t.characterDataOldValue?l(s):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var a,u,p=t.target;"DOMNodeInserted"===t.type?(a=[p],u=[]):(a=[],u=[p]);var d=p.previousSibling,f=p.nextSibling,o=c("childList",t.target.parentNode);o.addedNodes=a,o.removedNodes=u,o.previousSibling=d,o.nextSibling=f,r(t.relatedNode,function(t){return t.childList?o:void 0})}h()}},t.JsMutationObserver=s,t.MutationObserver||(t.MutationObserver=s,s._isPolyfilled=!0)}}(self),function(){"use strict";if(!window.performance||!window.performance.now){var t=Date.now();window.performance={now:function(){return Date.now()-t}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?function(e){return t(function(){e(performance.now())})}:function(t){return window.setTimeout(t,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}}());var e=function(){var t=document.createEvent("Event");return t.initEvent("foo",!0,!0),t.preventDefault(),t.defaultPrevented}();if(!e){var n=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var i=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||i&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(t,e){e=e||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||i&&"function"!=typeof window.Event){var o=window.Event;window.Event=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n},window.Event.prototype=o.prototype}}(window.WebComponents),window.CustomElements=window.CustomElements||{flags:{}},function(t){var e=t.flags,n=[],i=function(t){n.push(t)},o=function(){n.forEach(function(e){e(t)})};t.addModule=i,t.initializeModules=o,t.hasNative=Boolean(document.registerElement),t.isIE=/Trident/.test(navigator.userAgent),t.useNative=!e.register&&t.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(t){function e(t,e){n(t,function(t){return e(t)?!0:void i(t,e)}),i(t,e)}function n(t,e,i){var o=t.firstElementChild;if(!o)for(o=t.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)e(o,i)!==!0&&n(o,e,i),o=o.nextElementSibling;return null}function i(t,n){for(var i=t.shadowRoot;i;)e(i,n),i=i.olderShadowRoot}function o(t,e){r(t,e,[])}function r(t,e,n){if(t=window.wrap(t),!(n.indexOf(t)>=0)){n.push(t);for(var i,o=t.querySelectorAll("link[rel="+s+"]"),a=0,u=o.length;u>a&&(i=o[a]);a++)i.import&&r(i.import,e,n);e(t)}}var s=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";t.forDocumentTree=o,t.forSubtree=e}),window.CustomElements.addModule(function(t){function e(t,e){return n(t,e)||i(t,e)}function n(e,n){return t.upgrade(e,n)?!0:void(n&&s(e))}function i(t,e){b(t,function(t){return n(t,e)?!0:void 0})}function o(t){w.push(t),x||(x=!0,setTimeout(r))}function r(){x=!1;for(var t,e=w,n=0,i=e.length;i>n&&(t=e[n]);n++)t();w=[]}function s(t){C?o(function(){a(t)}):a(t)}function a(t){t.__upgraded__&&!t.__attached&&(t.__attached=!0,t.attachedCallback&&t.attachedCallback())}function u(t){c(t),b(t,function(t){c(t)})}function c(t){C?o(function(){l(t)}):l(t)}function l(t){t.__upgraded__&&t.__attached&&(t.__attached=!1,t.detachedCallback&&t.detachedCallback())}function h(t){for(var e=t,n=window.wrap(document);e;){if(e==n)return!0;e=e.parentNode||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host}}function p(t){if(t.shadowRoot&&!t.shadowRoot.__watched){y.dom&&console.log("watching shadow-root for: ",t.localName);for(var e=t.shadowRoot;e;)g(e),e=e.olderShadowRoot}}function d(t,n){if(y.dom){var i=n[0];if(i&&"childList"===i.type&&i.addedNodes&&i.addedNodes){for(var o=i.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var r=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";r=r.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",n.length,r||"")}var s=h(t);n.forEach(function(t){"childList"===t.type&&(E(t.addedNodes,function(t){t.localName&&e(t,s)}),E(t.removedNodes,function(t){t.localName&&u(t)}))}),y.dom&&console.groupEnd()}function f(t){for(t=window.wrap(t),t||(t=window.wrap(document));t.parentNode;)t=t.parentNode;var e=t.__observer;e&&(d(t,e.takeRecords()),r())}function g(t){if(!t.__observer){var e=new MutationObserver(d.bind(this,t));e.observe(t,{childList:!0,subtree:!0}),t.__observer=e}}function m(t){t=window.wrap(t),y.dom&&console.group("upgradeDocument: ",t.baseURI.split("/").pop());var n=t===window.wrap(document);e(t,n),g(t),y.dom&&console.groupEnd()}function v(t){A(t,m)}var y=t.flags,b=t.forSubtree,A=t.forDocumentTree,C=window.MutationObserver._isPolyfilled&&y["throttle-attached"];t.hasPolyfillMutations=C,t.hasThrottledAttached=C;var x=!1,w=[],E=Array.prototype.forEach.call.bind(Array.prototype.forEach),S=Element.prototype.createShadowRoot;S&&(Element.prototype.createShadowRoot=function(){var t=S.call(this);return window.CustomElements.watchShadow(this),t}),t.watchShadow=p,t.upgradeDocumentTree=v,t.upgradeDocument=m,t.upgradeSubtree=i,t.upgradeAll=e,t.attached=s,t.takeRecords=f}),window.CustomElements.addModule(function(t){function e(e,i){if("template"===e.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var o=e.getAttribute("is"),r=t.getRegisteredDefinition(e.localName)||t.getRegisteredDefinition(o);if(r&&(o&&r.tag==e.localName||!o&&!r.extends))return n(e,r,i)}}function n(e,n,o){return s.upgrade&&console.group("upgrade:",e.localName),n.is&&e.setAttribute("is",n.is),i(e,n),e.__upgraded__=!0,r(e),o&&t.attached(e),t.upgradeSubtree(e,o),s.upgrade&&console.groupEnd(),e}function i(t,e){Object.__proto__?t.__proto__=e.prototype:(o(t,e.prototype,e.native),t.__proto__=e.prototype)}function o(t,e,n){for(var i={},o=e;o!==n&&o!==HTMLElement.prototype;){for(var r,s=Object.getOwnPropertyNames(o),a=0;r=s[a];a++)i[r]||(Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r)),i[r]=1);o=Object.getPrototypeOf(o)}}function r(t){t.createdCallback&&t.createdCallback()}var s=t.flags;t.upgrade=e,t.upgradeWithDefinition=n,t.implementPrototype=i}),window.CustomElements.addModule(function(t){function e(e,i){var u=i||{};if(!e)throw new Error("document.registerElement: first argument `name` must not be empty");if(e.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(e)+"'.");if(o(e))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(e)+"'. The type name is invalid.");if(c(e))throw new Error("DuplicateDefinitionError: a type with name '"+String(e)+"' is already registered");return u.prototype||(u.prototype=Object.create(HTMLElement.prototype)),u.__name=e.toLowerCase(),u.extends&&(u.extends=u.extends.toLowerCase()),u.lifecycle=u.lifecycle||{},u.ancestry=r(u.extends),s(u),a(u),n(u.prototype),l(u.__name,u),u.ctor=h(u),u.ctor.prototype=u.prototype,u.prototype.constructor=u.ctor,t.ready&&m(document),u.ctor}function n(t){if(!t.setAttribute._polyfilled){var e=t.setAttribute;t.setAttribute=function(t,n){i.call(this,t,n,e)};var n=t.removeAttribute;t.removeAttribute=function(t){i.call(this,t,null,n)},t.setAttribute._polyfilled=!0}}function i(t,e,n){t=t.toLowerCase();var i=this.getAttribute(t);n.apply(this,arguments);var o=this.getAttribute(t);this.attributeChangedCallback&&o!==i&&this.attributeChangedCallback(t,i,o)}function o(t){for(var e=0;e<C.length;e++)if(t===C[e])return!0}function r(t){var e=c(t);return e?r(e.extends).concat([e]):[]}function s(t){for(var e,n=t.extends,i=0;e=t.ancestry[i];i++)n=e.is&&e.tag;t.tag=n||t.__name,n&&(t.is=t.__name)}function a(t){if(!Object.__proto__){var e=HTMLElement.prototype;if(t.is){var n=document.createElement(t.tag);e=Object.getPrototypeOf(n)}for(var i,o=t.prototype,r=!1;o;)o==e&&(r=!0),i=Object.getPrototypeOf(o),i&&(o.__proto__=i),o=i;r||console.warn(t.tag+" prototype not found in prototype chain for "+t.is),t.native=e}}function u(t){return y(E(t.tag),t)}function c(t){return t?x[t.toLowerCase()]:void 0}function l(t,e){x[t]=e}function h(t){return function(){return u(t)}}function p(t,e,n){return t===w?d(e,n):S(t,e)}function d(t,e){t&&(t=t.toLowerCase()),e&&(e=e.toLowerCase());var n=c(e||t);if(n){if(t==n.tag&&e==n.is)return new n.ctor;if(!e&&!n.is)return new n.ctor}var i;return e?(i=d(t),i.setAttribute("is",e),i):(i=E(t),t.indexOf("-")>=0&&b(i,HTMLElement),i)}function f(t,e){var n=t[e];t[e]=function(){var t=n.apply(this,arguments);return v(t),t}}var g,m=(t.isIE,t.upgradeDocumentTree),v=t.upgradeAll,y=t.upgradeWithDefinition,b=t.implementPrototype,A=t.useNative,C=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],x={},w="http://www.w3.org/1999/xhtml",E=document.createElement.bind(document),S=document.createElementNS.bind(document);g=Object.__proto__||A?function(t,e){return t instanceof e}:function(t,e){if(t instanceof e)return!0;for(var n=t;n;){if(n===e.prototype)return!0;n=n.__proto__}return!1},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=e,document.createElement=d,document.createElementNS=p,t.registry=x,t.instanceof=g,t.reservedTagList=C,t.getRegisteredDefinition=c,document.register=document.registerElement}),function(t){function e(){r(window.wrap(document)),window.CustomElements.ready=!0;var t=window.requestAnimationFrame||function(t){setTimeout(t,16)};t(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}var n=t.useNative,i=t.initializeModules;if(t.isIE,n){var o=function(){};t.watchShadow=o,t.upgrade=o,t.upgradeAll=o,t.upgradeDocumentTree=o,t.upgradeSubtree=o,t.takeRecords=o,t.instanceof=function(t,e){return t instanceof e}}else i();var r=t.upgradeDocumentTree,s=t.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(t){return t}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(t){t.import&&s(wrap(t.import))}),"complete"===document.readyState||t.flags.eager)e();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,e)}else e()}(window.CustomElements))}.call(this),function(){}.call(this),function(){var t=this;(function(){(function(){this.Trix={VERSION:"1.2.3",ZERO_WIDTH_SPACE:"\ufeff",NON_BREAKING_SPACE:"\xa0",OBJECT_REPLACEMENT_CHARACTER:"\ufffc",browser:{composesExistingText:/Android.*Chrome/.test(navigator.userAgent),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:function(){var t,e,n,i;if("undefined"==typeof InputEvent)return!1;for(i=["data","getTargetRanges","inputType"],t=0,e=i.length;e>t;t++)if(n=i[t],!(n in InputEvent.prototype))return!1;return!0}()},config:{}}}).call(this)}).call(t);var e=t.Trix;(function(){(function(){e.BasicObject=function(){function t(){}var e,n,i;return t.proxyMethod=function(t){var i,o,r,s,a;return r=n(t),i=r.name,s=r.toMethod,a=r.toProperty,o=r.optional,this.prototype[i]=function(){var t,n;return t=null!=s?o?"function"==typeof this[s]?this[s]():void 0:this[s]():null!=a?this[a]:void 0,o?(n=null!=t?t[i]:void 0,null!=n?e.call(n,t,arguments):void 0):(n=t[i],e.call(n,t,arguments))}},n=function(t){var e,n;if(!(n=t.match(i)))throw new Error("can't parse @proxyMethod expression: "+t);return e={name:n[4]},null!=n[2]?e.toMethod=n[1]:e.toProperty=n[1],null!=n[3]&&(e.optional=!0),e},e=Function.prototype.apply,i=/^(.+?)(\(\))?(\?)?\.(.+?)$/,t}()}).call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Object=function(n){function i(){this.id=++o}var o;return t(i,n),o=0,i.fromJSONString=function(t){return this.fromJSON(JSON.parse(t))},i.prototype.hasSameConstructorAs=function(t){return this.constructor===(null!=t?t.constructor:void 0)},i.prototype.isEqualTo=function(t){return this===t},i.prototype.inspect=function(){var t,e,n;return t=function(){var t,i,o;i=null!=(t=this.contentsForInspection())?t:{},o=[];for(e in i)n=i[e],o.push(e+"="+n);return o}.call(this),"#<"+this.constructor.name+":"+this.id+(t.length?" "+t.join(", "):"")+">"},i.prototype.contentsForInspection=function(){},i.prototype.toJSONString=function(){return JSON.stringify(this)},i.prototype.toUTF16String=function(){return e.UTF16String.box(this)},i.prototype.getCacheKey=function(){return this.id.toString()},i}(e.BasicObject)}.call(this),function(){e.extend=function(t){var e,n;for(e in t)n=t[e],this[e]=n;return this}}.call(this),function(){e.extend({defer:function(t){return setTimeout(t,1)}})}.call(this),function(){var t,n;e.extend({normalizeSpaces:function(t){return t.replace(RegExp(""+e.ZERO_WIDTH_SPACE,"g"),"").replace(RegExp(""+e.NON_BREAKING_SPACE,"g")," ")},normalizeNewlines:function(t){return t.replace(/\r\n/g,"\n")},breakableWhitespacePattern:RegExp("[^\\S"+e.NON_BREAKING_SPACE+"]"),squishBreakableWhitespace:function(t){return t.replace(RegExp(""+e.breakableWhitespacePattern.source,"g")," ").replace(/\ {2,}/g," ")},escapeHTML:function(t){var e;return e=document.createElement("div"),e.textContent=t,e.innerHTML},summarizeStringChange:function(t,i){var o,r,s,a;return t=e.UTF16String.box(t),i=e.UTF16String.box(i),i.length<t.length?(r=n(t,i),a=r[0],o=r[1]):(s=n(i,t),o=s[0],a=s[1]),{added:o,removed:a}}}),n=function(n,i){var o,r,s,a,u;return n.isEqualTo(i)?["",""]:(r=t(n,i),a=r.utf16String.length,s=a?(u=r.offset,r,o=n.codepoints.slice(0,u).concat(n.codepoints.slice(u+a)),t(i,e.UTF16String.fromCodepoints(o))):t(i,n),[r.utf16String.toString(),s.utf16String.toString()])},t=function(t,e){var n,i,o;for(n=0,i=t.length,o=e.length;i>n&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;i>n+1&&t.charAt(i-1).isEqualTo(e.charAt(o-1));)i--,o--;return{utf16String:t.slice(n,i),offset:n}}}.call(this),function(){e.extend({copyObject:function(t){var e,n,i;null==t&&(t={}),n={};for(e in t)i=t[e],n[e]=i;return n},objectsAreEqual:function(t,e){var n,i;if(null==t&&(t={}),null==e&&(e={}),Object.keys(t).length!==Object.keys(e).length)return!1;for(n in t)if(i=t[n],i!==e[n])return!1;return!0}})}.call(this),function(){var t=[].slice;e.extend({arraysAreEqual:function(t,e){var n,i,o,r;if(null==t&&(t=[]),null==e&&(e=[]),t.length!==e.length)return!1;for(i=n=0,o=t.length;o>n;i=++n)if(r=t[i],r!==e[i])return!1;return!0},arrayStartsWith:function(t,n){return null==t&&(t=[]),null==n&&(n=[]),e.arraysAreEqual(t.slice(0,n.length),n)},spliceArray:function(){var e,n,i;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],i=n.slice(0),i.splice.apply(i,e),i},summarizeArrayChange:function(t,e){var n,i,o,r,s,a,u,c,l,h,p;for(null==t&&(t=[]),null==e&&(e=[]),n=[],h=[],o=new Set,r=0,u=t.length;u>r;r++)p=t[r],o.add(p);for(i=new Set,s=0,c=e.length;c>s;s++)p=e[s],i.add(p),o.has(p)||n.push(p);for(a=0,l=t.length;l>a;a++)p=t[a],i.has(p)||h.push(p);return{added:n,removed:h}}})}.call(this),function(){var t,n,i,o;t=null,n=null,o=null,i=null,e.extend({getAllAttributeNames:function(){return null!=t?t:t=e.getTextAttributeNames().concat(e.getBlockAttributeNames())},getBlockConfig:function(t){return e.config.blockAttributes[t]},getBlockAttributeNames:function(){return null!=n?n:n=Object.keys(e.config.blockAttributes)},getTextConfig:function(t){return e.config.textAttributes[t]},getTextAttributeNames:function(){return null!=o?o:o=Object.keys(e.config.textAttributes)},getListAttributeNames:function(){var t,n;return null!=i?i:i=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].listAttribute,null!=n&&o.push(n);return o}()}})}.call(this),function(){var t,n,i,o,r,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=document.documentElement,n=null!=(i=null!=(o=null!=(r=t.matchesSelector)?r:t.webkitMatchesSelector)?o:t.msMatchesSelector)?i:t.mozMatchesSelector,e.extend({handleEvent:function(n,i){var o,r,s,a,u,c,l,h,p,d,f,g;return h=null!=i?i:{},c=h.onElement,u=h.matchingSelector,g=h.withCallback,a=h.inPhase,l=h.preventDefault,d=h.times,r=null!=c?c:t,p=u,o=g,f="capturing"===a,s=function(t){var n;return null!=d&&0===--d&&s.destroy(),n=e.findClosestElementFromNode(t.target,{matchingSelector:p}),null!=n&&(null!=g&&g.call(n,t,n),l)?t.preventDefault():void 0},s.destroy=function(){return r.removeEventListener(n,s,f)},r.addEventListener(n,s,f),s},handleEventOnce:function(t,n){return null==n&&(n={}),n.times=1,e.handleEvent(t,n)},triggerEvent:function(n,i){var o,r,s,a,u,c,l;return l=null!=i?i:{},c=l.onElement,r=l.bubbles,s=l.cancelable,o=l.attributes,a=null!=c?c:t,r=r!==!1,s=s!==!1,u=document.createEvent("Events"),u.initEvent(n,r,s),null!=o&&e.extend.call(u,o),a.dispatchEvent(u)},elementMatchesSelector:function(t,e){return 1===(null!=t?t.nodeType:void 0)?n.call(t,e):void 0},findClosestElementFromNode:function(t,n){var i,o,r;for(o=null!=n?n:{},i=o.matchingSelector,r=o.untilNode;null!=t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(null!=t){if(null==i)return t;if(t.closest&&null==r)return t.closest(i);for(;t&&t!==r;){if(e.elementMatchesSelector(t,i))return t;t=t.parentNode}}},findInnerElement:function(t){for(;null!=t?t.firstElementChild:void 0;)t=t.firstElementChild;return t},innerElementIsActive:function(t){return document.activeElement!==t&&e.elementContainsNode(t,document.activeElement)},elementContainsNode:function(t,e){if(t&&e)for(;e;){if(e===t)return!0;e=e.parentNode}},findNodeFromContainerAndOffset:function(t,e){var n;if(t)return t.nodeType===Node.TEXT_NODE?t:0===e?null!=(n=t.firstChild)?n:t:t.childNodes.item(e-1)},findElementFromContainerAndOffset:function(t,n){var i;return i=e.findNodeFromContainerAndOffset(t,n),e.findClosestElementFromNode(i)},findChildIndexOfNode:function(t){var e;if(null!=t?t.parentNode:void 0){for(e=0;t=t.previousSibling;)e++;return e}},removeNode:function(t){var e;return null!=t&&null!=(e=t.parentNode)?e.removeChild(t):void 0},walkTree:function(t,e){var n,i,o,r,s;return o=null!=e?e:{},i=o.onlyNodesOfType,r=o.usingFilter,n=o.expandEntityReferences,s=function(){switch(i){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}}(),document.createTreeWalker(t,s,null!=r?r:null,n===!0)},tagName:function(t){var e;return null!=t&&null!=(e=t.tagName)?e.toLowerCase():void 0},makeElement:function(t,e){var n,i,o,r,s,a,u,c,l,h;if(null==e&&(e={}),"object"==typeof t?(e=t,t=e.tagName):e={attributes:e},i=document.createElement(t),null!=e.editable&&(null==e.attributes&&(e.attributes={}),e.attributes.contenteditable=e.editable),e.attributes){a=e.attributes;for(r in a)h=a[r],i.setAttribute(r,h)}if(e.style){u=e.style;for(r in u)h=u[r],i.style[r]=h}if(e.data){c=e.data;for(r in c)h=c[r],i.dataset[r]=h}if(e.className)for(l=e.className.split(" "),o=0,s=l.length;s>o;o++)n=l[o],i.classList.add(n);return e.textContent&&(i.textContent=e.textContent),i},getBlockTagNames:function(){var t,n;return null!=e.blockTagNames?e.blockTagNames:e.blockTagNames=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].tagName,n&&o.push(n);return o}()},nodeIsBlockContainer:function(t){return e.nodeIsBlockStartComment(null!=t?t.firstChild:void 0)},nodeProbablyIsBlockContainer:function(t){var n,i;return n=e.tagName(t),s.call(e.getBlockTagNames(),n)>=0&&(i=e.tagName(t.firstChild),s.call(e.getBlockTagNames(),i)<0)},nodeIsBlockStart:function(t,n){var i;return i=(null!=n?n:{strict:!0}).strict,i?e.nodeIsBlockStartComment(t):e.nodeIsBlockStartComment(t)||!e.nodeIsBlockStartComment(t.firstChild)&&e.nodeProbablyIsBlockContainer(t)},nodeIsBlockStartComment:function(t){return e.nodeIsCommentNode(t)&&"block"===(null!=t?t.data:void 0)},nodeIsCommentNode:function(t){return(null!=t?t.nodeType:void 0)===Node.COMMENT_NODE},nodeIsCursorTarget:function(t,n){var i;return i=(null!=n?n:{}).name,t?e.nodeIsTextNode(t)?t.data===e.ZERO_WIDTH_SPACE?i?t.parentNode.dataset.trixCursorTarget===i:!0:void 0:e.nodeIsCursorTarget(t.firstChild):void 0},nodeIsAttachmentElement:function(t){return e.elementMatchesSelector(t,e.AttachmentView.attachmentSelector)},nodeIsEmptyTextNode:function(t){return e.nodeIsTextNode(t)&&""===(null!=t?t.data:void 0)},nodeIsTextNode:function(t){return(null!=t?t.nodeType:void 0)===Node.TEXT_NODE}})}.call(this),function(){var t,n,i,o,r;t=e.copyObject,o=e.objectsAreEqual,e.extend({normalizeRange:i=function(t){var e;if(null!=t)return Array.isArray(t)||(t=[t,t]),[n(t[0]),n(null!=(e=t[1])?e:t[0])]},rangeIsCollapsed:function(t){var e,n,o;if(null!=t)return n=i(t),o=n[0],e=n[1],r(o,e)},rangesAreEqual:function(t,e){var n,o,s,a,u,c;if(null!=t&&null!=e)return s=i(t),o=s[0],n=s[1],a=i(e),c=a[0],u=a[1],r(o,c)&&r(n,u)}}),n=function(e){return"number"==typeof e?e:t(e)},r=function(t,e){return"number"==typeof t?t===e:o(t,e)}}.call(this),function(){var t,n,i,o,r,s,a;e.registerElement=function(t,e){var n,i;return null==e&&(e={}),t=t.toLowerCase(),e=a(e),i=s(e),(n=i.defaultCSS)&&(delete i.defaultCSS,o(n,t)),r(t,i)},o=function(t,e){var n;return n=i(e),n.textContent=t.replace(/%t/g,e)},i=function(e){var n,i;return n=document.createElement("style"),n.setAttribute("type","text/css"),n.setAttribute("data-tag-name",e.toLowerCase()),(i=t())&&n.setAttribute("nonce",i),document.head.insertBefore(n,document.head.firstChild),n},t=function(){var t;return(t=n("trix-csp-nonce")||n("csp-nonce"))?t.getAttribute("content"):void 0},n=function(t){return document.head.querySelector("meta[name="+t+"]")},s=function(t){var e,n,i;n={};for(e in t)i=t[e],n[e]="function"==typeof i?{value:i}:i;return n},a=function(){var t;return t=function(t){var e,n,i,o,r;for(e={},r=["initialize","connect","disconnect"],n=0,o=r.length;o>n;n++)i=r[n],e[i]=t[i],delete t[i];return e},window.customElements?function(e){var n,i,o,r,s;return s=t(e),o=s.initialize,n=s.connect,i=s.disconnect,o&&(r=n,n=function(){return this.initialized||(this.initialized=!0,o.call(this)),null!=r?r.call(this):void 0}),n&&(e.connectedCallback=n),i&&(e.disconnectedCallback=i),e}:function(e){var n,i,o,r;return r=t(e),o=r.initialize,n=r.connect,i=r.disconnect,o&&(e.createdCallback=o),n&&(e.attachedCallback=n),i&&(e.detachedCallback=i),e}}(),r=function(){return window.customElements?function(t,e){var n;return n=function(){return"object"==typeof Reflect?Reflect.construct(HTMLElement,[],n):HTMLElement.apply(this)},Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement),Object.defineProperties(n.prototype,e),window.customElements.define(t,n),n}:function(t,e){var n,i;return i=Object.create(HTMLElement.prototype,e),n=document.registerElement(t,{prototype:i}),Object.defineProperty(i,"constructor",{value:n}),n}}()}.call(this),function(){var t,n;e.extend({getDOMSelection:function(){var t;return t=window.getSelection(),t.rangeCount>0?t:void 0},getDOMRange:function(){var n,i;return(n=null!=(i=e.getDOMSelection())?i.getRangeAt(0):void 0)&&!t(n)?n:void 0},setDOMRange:function(t){var n;return n=window.getSelection(),n.removeAllRanges(),n.addRange(t),e.selectionChangeObserver.update()}}),t=function(t){return n(t.startContainer)||n(t.endContainer)},n=function(t){return!Object.getPrototypeOf(t)}}.call(this),function(){var t;t={"application/x-trix-feature-detection":"test"},e.extend({dataTransferIsPlainText:function(t){var e,n,i;return i=t.getData("text/plain"),n=t.getData("text/html"),i&&n?(e=(new DOMParser).parseFromString(n,"text/html").body,e.textContent===i?!e.querySelector("*"):void 0):null!=i?i.length:void 0},dataTransferIsWritable:function(e){var n,i;if(null!=(null!=e?e.setData:void 0)){for(n in t)if(i=t[n],!function(){try{return e.setData(n,i),e.getData(n)===i}catch(t){}}())return;return!0}},keyEventIsKeyboardCommand:function(){return/Mac|^iP/.test(navigator.platform)?function(t){return t.metaKey}:function(t){return t.ctrlKey}}()})}.call(this),function(){}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.arraysAreEqual,e.Hash=function(i){function o(t){null==t&&(t={}),this.values=s(t),o.__super__.constructor.apply(this,arguments)}var r,s,a,u,c;return n(o,i),o.fromCommonAttributesOfObjects=function(t){var e,n,i,o,s,a;if(null==t&&(t=[]),!t.length)return new this;for(e=r(t[0]),i=e.getKeys(),a=t.slice(1),n=0,o=a.length;o>n;n++)s=a[n],i=e.getKeysCommonToHash(r(s)),e=e.slice(i);return e},o.box=function(t){return r(t)},o.prototype.add=function(t,e){return this.merge(u(t,e))},o.prototype.remove=function(t){return new e.Hash(s(this.values,t))},o.prototype.get=function(t){return this.values[t]},o.prototype.has=function(t){return t in this.values},o.prototype.merge=function(t){return new e.Hash(a(this.values,c(t)))},o.prototype.slice=function(t){var n,i,o,r;for(r={},n=0,o=t.length;o>n;n++)i=t[n],this.has(i)&&(r[i]=this.values[i]);return new e.Hash(r)},o.prototype.getKeys=function(){return Object.keys(this.values)},o.prototype.getKeysCommonToHash=function(t){var e,n,i,o,s;for(t=r(t),o=this.getKeys(),s=[],e=0,i=o.length;i>e;e++)n=o[e],this.values[n]===t.values[n]&&s.push(n);return s},o.prototype.isEqualTo=function(e){return t(this.toArray(),r(e).toArray())},o.prototype.isEmpty=function(){return 0===this.getKeys().length},o.prototype.toArray=function(){var t,e,n;return(null!=this.array?this.array:this.array=function(){var i;e=[],i=this.values;for(t in i)n=i[t],e.push(t,n);return e}.call(this)).slice(0)},o.prototype.toObject=function(){return s(this.values)},o.prototype.toJSON=function(){return this.toObject()},o.prototype.contentsForInspection=function(){return{values:JSON.stringify(this.values)}},u=function(t,e){var n;return n={},n[t]=e,n},a=function(t,e){var n,i,o;i=s(t);for(n in e)o=e[n],i[n]=o;return i},s=function(t,e){var n,i,o,r,s;for(r={},s=Object.keys(t).sort(),n=0,o=s.length;o>n;n++)i=s[n],i!==e&&(r[i]=t[i]);return r},r=function(t){return t instanceof e.Hash?t:new e.Hash(t)},c=function(t){return t instanceof e.Hash?t.values:t},o}(e.Object)}.call(this),function(){e.ObjectGroup=function(){function t(t,e){var n,i;this.objects=null!=t?t:[],i=e.depth,n=e.asTree,n&&(this.depth=i,this.objects=this.constructor.groupObjects(this.objects,{asTree:n,depth:this.depth+1}))}return t.groupObjects=function(t,e){var n,i,o,r,s,a,u,c,l;for(null==t&&(t=[]),l=null!=e?e:{},o=l.depth,n=l.asTree,n&&null==o&&(o=0),c=[],s=0,a=t.length;a>s;s++){if(u=t[s],r){if(("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)&&("function"==typeof(i=r[r.length-1]).canBeGroupedWith?i.canBeGroupedWith(u,o):void 0)){r.push(u);continue}c.push(new this(r,{depth:o,asTree:n})),r=null}("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)?r=[u]:c.push(u)}return r&&c.push(new this(r,{depth:o,asTree:n})),c},t.prototype.getObjects=function(){return this.objects},t.prototype.getDepth=function(){return this.depth
},t.prototype.getCacheKey=function(){var t,e,n,i,o;for(e=["objectGroup"],o=this.getObjects(),t=0,n=o.length;n>t;t++)i=o[t],e.push(i.getCacheKey());return e.join("/")},t}()}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectMap=function(e){function n(t){var e,n,i,o,r;for(null==t&&(t=[]),this.objects={},i=0,o=t.length;o>i;i++)r=t[i],n=JSON.stringify(r),null==(e=this.objects)[n]&&(e[n]=r)}return t(n,e),n.prototype.find=function(t){var e;return e=JSON.stringify(t),this.objects[e]},n}(e.BasicObject)}.call(this),function(){e.ElementStore=function(){function t(t){this.reset(t)}var e;return t.prototype.add=function(t){var n;return n=e(t),this.elements[n]=t},t.prototype.remove=function(t){var n,i;return n=e(t),(i=this.elements[n])?(delete this.elements[n],i):void 0},t.prototype.reset=function(t){var e,n,i;for(null==t&&(t=[]),this.elements={},n=0,i=t.length;i>n;n++)e=t[n],this.add(e);return t},e=function(t){return t.dataset.trixStoreKey},t}()}.call(this),function(){}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Operation=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.isPerforming=function(){return this.performing===!0},n.prototype.hasPerformed=function(){return this.performed===!0},n.prototype.hasSucceeded=function(){return this.performed&&this.succeeded},n.prototype.hasFailed=function(){return this.performed&&!this.succeeded},n.prototype.getPromise=function(){return null!=this.promise?this.promise:this.promise=new Promise(function(t){return function(e,n){return t.performing=!0,t.perform(function(i,o){return t.succeeded=i,t.performing=!1,t.performed=!0,t.succeeded?e(o):n(o)})}}(this))},n.prototype.perform=function(t){return t(!1)},n.prototype.release=function(){var t;return null!=(t=this.promise)&&"function"==typeof t.cancel&&t.cancel(),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null},n.proxyMethod("getPromise().then"),n.proxyMethod("getPromise().catch"),n}(e.BasicObject)}.call(this),function(){var t,n,i,o,r,s=function(t,e){function n(){this.constructor=t}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;e.UTF16String=function(t){function e(t,e){this.ucs2String=t,this.codepoints=e,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length}return s(e,t),e.box=function(t){return null==t&&(t=""),t instanceof this?t:this.fromUCS2String(null!=t?t.toString():void 0)},e.fromUCS2String=function(t){return new this(t,o(t))},e.fromCodepoints=function(t){return new this(r(t),t)},e.prototype.offsetToUCS2Offset=function(t){return r(this.codepoints.slice(0,Math.max(0,t))).length},e.prototype.offsetFromUCS2Offset=function(t){return o(this.ucs2String.slice(0,Math.max(0,t))).length},e.prototype.slice=function(){var t;return this.constructor.fromCodepoints((t=this.codepoints).slice.apply(t,arguments))},e.prototype.charAt=function(t){return this.slice(t,t+1)},e.prototype.isEqualTo=function(t){return this.constructor.box(t).ucs2String===this.ucs2String},e.prototype.toJSON=function(){return this.ucs2String},e.prototype.getCacheKey=function(){return this.ucs2String},e.prototype.toString=function(){return this.ucs2String},e}(e.BasicObject),t=1===("function"==typeof Array.from?Array.from("\ud83d\udc7c").length:void 0),n=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),i=" \ud83d\udc7c"===("function"==typeof String.fromCodePoint?String.fromCodePoint(32,128124):void 0),o=t&&n?function(t){return Array.from(t).map(function(t){return t.codePointAt(0)})}:function(t){var e,n,i,o,r;for(o=[],e=0,i=t.length;i>e;)r=t.charCodeAt(e++),r>=55296&&56319>=r&&i>e&&(n=t.charCodeAt(e++),56320===(64512&n)?r=((1023&r)<<10)+(1023&n)+65536:e--),o.push(r);return o},r=i?function(t){return String.fromCodePoint.apply(String,t)}:function(t){var e,n,i;return e=function(){var e,o,r;for(r=[],e=0,o=t.length;o>e;e++)i=t[e],n="",i>65535&&(i-=65536,n+=String.fromCharCode(i>>>10&1023|55296),i=56320|1023&i),r.push(n+String.fromCharCode(i));return r}(),e.join("")}}.call(this),function(){}.call(this),function(){}.call(this),function(){e.config.lang={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets","byte":"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption\u2026",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL\u2026",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"}}.call(this),function(){e.config.css={attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"}}.call(this),function(){var t;e.config.blockAttributes=t={"default":{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}}}.call(this),function(){var t,n;t=e.config.lang,n=[t.bytes,t.KB,t.MB,t.GB,t.TB,t.PB],e.config.fileSize={prefix:"IEC",precision:2,formatter:function(e){var i,o,r,s,a;switch(e){case 0:return"0 "+t.bytes;case 1:return"1 "+t.byte;default:return i=function(){switch(this.prefix){case"SI":return 1e3;case"IEC":return 1024}}.call(this),o=Math.floor(Math.log(e)/Math.log(i)),r=e/Math.pow(i,o),s=r.toFixed(this.precision),a=s.replace(/0*$/,"").replace(/\.$/,""),a+" "+n[o]}}}}.call(this),function(){e.config.textAttributes={bold:{tagName:"strong",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"bold"===e.fontWeight||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"italic"===e.fontStyle}},href:{groupTagName:"a",parser:function(t){var n,i,o;return n=e.AttachmentView.attachmentSelector,o="a:not("+n+")",(i=e.findClosestElementFromNode(t,{matchingSelector:o}))?i.getAttribute("href"):void 0}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}}}.call(this),function(){var t,n,i,o,r;r="[data-trix-serialize=false]",o=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],n="data-trix-serialized-attributes",i="["+n+"]",t=new RegExp("<!--block-->","g"),e.extend({serializers:{"application/json":function(t){var n;if(t instanceof e.Document)n=t;else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");n=e.Document.fromHTML(t.innerHTML)}return n.toSerializableDocument().toJSONString()},"text/html":function(s){var a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;if(s instanceof e.Document)l=e.DocumentView.render(s);else{if(!(s instanceof HTMLElement))throw new Error("unserializable object");l=s.cloneNode(!0)}for(A=l.querySelectorAll(r),h=0,g=A.length;g>h;h++)c=A[h],e.removeNode(c);for(p=0,m=o.length;m>p;p++)for(a=o[p],C=l.querySelectorAll("["+a+"]"),d=0,v=C.length;v>d;d++)c=C[d],c.removeAttribute(a);for(x=l.querySelectorAll(i),f=0,y=x.length;y>f;f++){c=x[f];try{u=JSON.parse(c.getAttribute(n)),c.removeAttribute(n);for(b in u)w=u[b],c.setAttribute(b,w)}catch(E){}}return l.innerHTML.replace(t,"")}},deserializers:{"application/json":function(t){return e.Document.fromJSONString(t)},"text/html":function(t){return e.Document.fromHTML(t)}},serializeToContentType:function(t,n){var i;if(i=e.serializers[n])return i(t);throw new Error("unknown content type: "+n)},deserializeFromContentType:function(t,n){var i;if(i=e.deserializers[n])return i(t);throw new Error("unknown content type: "+n)}})}.call(this),function(){var t;t=e.config.lang,e.config.toolbar={getDefaultHTML:function(){return'<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'+t.bold+'" tabindex="-1">'+t.bold+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="'+t.italic+'" tabindex="-1">'+t.italic+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="'+t.strike+'" tabindex="-1">'+t.strike+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="'+t.link+'" tabindex="-1">'+t.link+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="'+t.heading1+'" tabindex="-1">'+t.heading1+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="'+t.quote+'" tabindex="-1">'+t.quote+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="'+t.code+'" tabindex="-1">'+t.code+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="'+t.bullets+'" tabindex="-1">'+t.bullets+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="'+t.numbers+'" tabindex="-1">'+t.numbers+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="'+t.outdent+'" tabindex="-1">'+t.outdent+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="'+t.indent+'" tabindex="-1">'+t.indent+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="'+t.attachFiles+'" tabindex="-1">'+t.attachFiles+'</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="'+t.undo+'" tabindex="-1">'+t.undo+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="'+t.redo+'" tabindex="-1">'+t.redo+'</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="'+t.urlPlaceholder+'" aria-label="'+t.url+'" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.link+'" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.unlink+'" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>'}}}.call(this),function(){e.config.undoInterval=5e3}.call(this),function(){e.config.attachments={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}}}.call(this),function(){e.config.keyNames={8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"}}.call(this),function(){e.config.input={level2Enabled:!0,getLevel:function(){return this.level2Enabled&&e.browser.supportsInputEvents?2:0},pickFiles:function(t){var n;return n=e.makeElement("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId}),n.addEventListener("change",function(){return t(n.files),e.removeNode(n)}),e.removeNode(document.getElementById(this.fileInputId)),document.body.appendChild(n),n.click()},fileInputId:"trix-file-input-"+Date.now().toString(16)}}.call(this),function(){}.call(this),function(){e.registerElement("trix-toolbar",{defaultCSS:"%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",initialize:function(){return""===this.innerHTML?this.innerHTML=e.config.toolbar.getDefaultHTML():void 0}})}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty,i=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e.ObjectView=function(n){function o(t,e){this.object=t,this.options=null!=e?e:{},this.childViews=[],this.rootView=this}return t(o,n),o.prototype.getNodes=function(){var t,e,n,i,o;for(null==this.nodes&&(this.nodes=this.createNodes()),i=this.nodes,o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.cloneNode(!0));return o},o.prototype.invalidate=function(){var t;return this.nodes=null,this.childViews=[],null!=(t=this.parentView)?t.invalidate():void 0},o.prototype.invalidateViewForObject=function(t){var e;return null!=(e=this.findViewForObject(t))?e.invalidate():void 0},o.prototype.findOrCreateCachedChildView=function(t,e){var n;return(n=this.getCachedViewForObject(e))?this.recordChildView(n):(n=this.createChildView.apply(this,arguments),this.cacheViewForObject(n,e)),n},o.prototype.createChildView=function(t,n,i){var o;return null==i&&(i={}),n instanceof e.ObjectGroup&&(i.viewClass=t,t=e.ObjectGroupView),o=new t(n,i),this.recordChildView(o)},o.prototype.recordChildView=function(t){return t.parentView=this,t.rootView=this.rootView,this.childViews.push(t),t},o.prototype.getAllChildViews=function(){var t,e,n,i,o;for(o=[],i=this.childViews,e=0,n=i.length;n>e;e++)t=i[e],o.push(t),o=o.concat(t.getAllChildViews());return o},o.prototype.findElement=function(){return this.findElementForObject(this.object)},o.prototype.findElementForObject=function(t){var e;return(e=null!=t?t.id:void 0)?this.rootView.element.querySelector("[data-trix-id='"+e+"']"):void 0},o.prototype.findViewForObject=function(t){var e,n,i,o;for(i=this.getAllChildViews(),e=0,n=i.length;n>e;e++)if(o=i[e],o.object===t)return o},o.prototype.getViewCache=function(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?null!=this.viewCache?this.viewCache:this.viewCache={}:void 0},o.prototype.isViewCachingEnabled=function(){return this.shouldCacheViews!==!1},o.prototype.enableViewCaching=function(){return this.shouldCacheViews=!0},o.prototype.disableViewCaching=function(){return this.shouldCacheViews=!1},o.prototype.getCachedViewForObject=function(t){var e;return null!=(e=this.getViewCache())?e[t.getCacheKey()]:void 0},o.prototype.cacheViewForObject=function(t,e){var n;return null!=(n=this.getViewCache())?n[e.getCacheKey()]=t:void 0},o.prototype.garbageCollectCachedViews=function(){var t,e,n,o,r,s;if(t=this.getViewCache()){s=this.getAllChildViews().concat(this),n=function(){var t,e,n;for(n=[],t=0,e=s.length;e>t;t++)r=s[t],n.push(r.object.getCacheKey());return n}(),o=[];for(e in t)i.call(n,e)<0&&o.push(delete t[e]);return o}},o}(e.BasicObject)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectGroupView=function(e){function n(){n.__super__.constructor.apply(this,arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass}return t(n,e),n.prototype.getChildViews=function(){var t,e,n,i;if(!this.childViews.length)for(i=this.objectGroup.getObjects(),t=0,e=i.length;e>t;t++)n=i[t],this.findOrCreateCachedChildView(this.viewClass,n,this.options);return this.childViews},n.prototype.createNodes=function(){var t,e,n,i,o,r,s,a,u;for(t=this.createContainerElement(),s=this.getChildViews(),e=0,i=s.length;i>e;e++)for(u=s[e],a=u.getNodes(),n=0,o=a.length;o>n;n++)r=a[n],t.appendChild(r);return[t]},n.prototype.createContainerElement=function(t){return null==t&&(t=this.objectGroup.getDepth()),this.getChildViews()[0].createContainerElement(t)},n}(e.ObjectView)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Controller=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(e.BasicObject)}.call(this),function(){var t,n,i,o,r,s,a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){function n(){this.constructor=t}for(var i in e)c.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty,l=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.findClosestElementFromNode,i=e.nodeIsEmptyTextNode,n=e.nodeIsBlockStartComment,o=e.normalizeSpaces,r=e.summarizeStringChange,s=e.tagName,e.MutationObserver=function(e){function c(t){this.element=t,this.didMutate=a(this.didMutate,this),this.observer=new window.MutationObserver(this.didMutate),this.start()}var h,p,d,f;return u(c,e),p="data-trix-mutable",d="["+p+"]",f={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},c.prototype.start=function(){return this.reset(),this.observer.observe(this.element,f)},c.prototype.stop=function(){return this.observer.disconnect()},c.prototype.didMutate=function(t){var e,n;return(e=this.mutations).push.apply(e,this.findSignificantMutations(t)),this.mutations.length?(null!=(n=this.delegate)&&"function"==typeof n.elementDidMutate&&n.elementDidMutate(this.getMutationSummary()),this.reset()):void 0},c.prototype.reset=function(){return this.mutations=[]},c.prototype.findSignificantMutations=function(t){var e,n,i,o;for(o=[],e=0,n=t.length;n>e;e++)i=t[e],this.mutationIsSignificant(i)&&o.push(i);return o},c.prototype.mutationIsSignificant=function(t){var e,n,i,o;if(this.nodeIsMutable(t.target))return!1;for(o=this.nodesModifiedByMutation(t),e=0,n=o.length;n>e;e++)if(i=o[e],this.nodeIsSignificant(i))return!0;return!1},c.prototype.nodeIsSignificant=function(t){return t!==this.element&&!this.nodeIsMutable(t)&&!i(t)},c.prototype.nodeIsMutable=function(e){return t(e,{matchingSelector:d})},c.prototype.nodesModifiedByMutation=function(t){var e;switch(e=[],t.type){case"attributes":t.attributeName!==p&&e.push(t.target);break;case"characterData":e.push(t.target.parentNode),e.push(t.target);break;case"childList":e.push.apply(e,t.addedNodes),e.push.apply(e,t.removedNodes)}return e},c.prototype.getMutationSummary=function(){return this.getTextMutationSummary()},c.prototype.getTextMutationSummary=function(){var t,e,n,i,o,r,s,a,u,c,h;for(a=this.getTextChangesFromCharacterData(),n=a.additions,o=a.deletions,h=this.getTextChangesFromChildList(),u=h.additions,r=0,s=u.length;s>r;r++)e=u[r],l.call(n,e)<0&&n.push(e);return o.push.apply(o,h.deletions),c={},(t=n.join(""))&&(c.textAdded=t),(i=o.join(""))&&(c.textDeleted=i),c},c.prototype.getMutationsByType=function(t){var e,n,i,o,r;for(o=this.mutations,r=[],e=0,n=o.length;n>e;e++)i=o[e],i.type===t&&r.push(i);return r},c.prototype.getTextChangesFromChildList=function(){var t,e,i,r,s,a,u,c,l,p,d;for(t=[],u=[],a=this.getMutationsByType("childList"),e=0,r=a.length;r>e;e++)s=a[e],t.push.apply(t,s.addedNodes),u.push.apply(u,s.removedNodes);return c=0===t.length&&1===u.length&&n(u[0]),c?(p=[],d=["\n"]):(p=h(t),d=h(u)),{additions:function(){var t,e,n;for(n=[],i=t=0,e=p.length;e>t;i=++t)l=p[i],l!==d[i]&&n.push(o(l));return n}(),deletions:function(){var t,e,n;for(n=[],i=t=0,e=d.length;e>t;i=++t)l=d[i],l!==p[i]&&n.push(o(l));return n}()}},c.prototype.getTextChangesFromCharacterData=function(){var t,e,n,i,s,a,u,c;return e=this.getMutationsByType("characterData"),e.length&&(c=e[0],n=e[e.length-1],s=o(c.oldValue),i=o(n.target.data),a=r(s,i),t=a.added,u=a.removed),{additions:t?[t]:[],deletions:u?[u]:[]}},h=function(t){var e,n,i,o;for(null==t&&(t=[]),o=[],e=0,n=t.length;n>e;e++)switch(i=t[e],i.nodeType){case Node.TEXT_NODE:o.push(i.data);break;case Node.ELEMENT_NODE:"br"===s(i)?o.push("\n"):o.push.apply(o,h(i.childNodes))}return o},c}(e.BasicObject)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.FileVerificationOperation=function(e){function n(t){this.file=t}return t(n,e),n.prototype.perform=function(t){var e;return e=new FileReader,e.onerror=function(){return t(!1)},e.onload=function(n){return function(){e.onerror=null;try{e.abort()}catch(i){}return t(!0,n.file)}}(this),e.readAsArrayBuffer(this.file)},n}(e.Operation)}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.handleEvent,n=e.innerElementIsActive,e.InputController=function(o){function r(n){var i;this.element=n,this.mutationObserver=new e.MutationObserver(this.element),this.mutationObserver.delegate=this;for(i in this.events)t(i,{onElement:this.element,withCallback:this.handlerFor(i)})}return i(r,o),r.prototype.events={},r.prototype.elementDidMutate=function(){},r.prototype.editorWillSyncDocumentView=function(){return this.mutationObserver.stop()},r.prototype.editorDidSyncDocumentView=function(){return this.mutationObserver.start()},r.prototype.requestRender=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestRender?t.inputControllerDidRequestRender():void 0},r.prototype.requestReparse=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestReparse&&t.inputControllerDidRequestReparse(),this.requestRender()},r.prototype.attachFiles=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(new e.FileVerificationOperation(n));return r}(),Promise.all(i).then(function(t){return function(e){return t.handleInput(function(){var t,n;return null!=(t=this.delegate)&&t.inputControllerWillAttachFiles(),null!=(n=this.responder)&&n.insertFiles(e),this.requestRender()})}}(this))},r.prototype.handlerFor=function(t){return function(e){return function(i){return i.defaultPrevented?void 0:e.handleInput(function(){return n(this.element)?void 0:(this.eventName=t,this.events[t].call(this,i))})}}(this)},r.prototype.handleInput=function(t){var e,n;try{return null!=(e=this.delegate)&&e.inputControllerWillHandleInput(),t.call(this)}finally{null!=(n=this.delegate)&&n.inputControllerDidHandleInput()}},r}(e.BasicObject)}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p,d,f=function(t,e){function n(){this.constructor=t}for(var i in e)g.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},g={}.hasOwnProperty,m=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};c=e.makeElement,l=e.objectsAreEqual,d=e.tagName,n=e.browser,a=e.keyEventIsKeyboardCommand,o=e.dataTransferIsWritable,i=e.dataTransferIsPlainText,u=e.config.keyNames,e.Level0InputController=function(n){function s(){s.__super__.constructor.apply(this,arguments),this.resetInputSummary()}var d;return f(s,n),d=0,s.prototype.setInputSummary=function(t){var e,n;null==t&&(t={}),this.inputSummary.eventName=this.eventName;for(e in t)n=t[e],this.inputSummary[e]=n;return this.inputSummary},s.prototype.resetInputSummary=function(){return this.inputSummary={}},s.prototype.reset=function(){return this.resetInputSummary(),e.selectionChangeObserver.reset()},s.prototype.elementDidMutate=function(t){var e;return this.isComposing()?null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidAllowUnhandledInput?e.inputControllerDidAllowUnhandledInput():void 0:this.handleInput(function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()})},s.prototype.mutationIsExpected=function(t){var e,n,i,o,r,s,a,u,c,l;return a=t.textAdded,u=t.textDeleted,this.inputSummary.preferDocument?!0:(e=null!=a?a===this.inputSummary.textAdded:!this.inputSummary.textAdded,n=null!=u?this.inputSummary.didDelete:!this.inputSummary.didDelete,c=("\n"===a||" \n"===a)&&!e,l="\n"===u&&!n,s=c&&!l||l&&!c,s&&(o=this.getSelectedRange())&&(i=c?a.replace(/\n$/,"").length||-1:(null!=a?a.length:void 0)||1,null!=(r=this.responder)?r.positionIsBlockBreak(o[1]+i):void 0)?!0:e&&n)},s.prototype.mutationIsSignificant=function(t){var e,n,i;return i=Object.keys(t).length>0,e=""===(null!=(n=this.compositionInput)?n.getEndData():void 0),i||!e},s.prototype.events={keydown:function(t){var n,i,o,r,s,c,l,h,p;if(this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0,r=u[t.keyCode]){for(i=this.keys,h=["ctrl","alt","shift","meta"],o=0,c=h.length;c>o;o++)l=h[o],t[l+"Key"]&&("ctrl"===l&&(l="control"),i=null!=i?i[l]:void 0);null!=(null!=i?i[r]:void 0)&&(this.setInputSummary({keyName:r}),e.selectionChangeObserver.reset(),i[r].call(this,t))}return a(t)&&(n=String.fromCharCode(t.keyCode).toLowerCase())&&(s=function(){var e,n,i,o;for(i=["alt","shift"],o=[],e=0,n=i.length;n>e;e++)l=i[e],t[l+"Key"]&&o.push(l);return o}(),s.push(n),null!=(p=this.delegate)?p.inputControllerDidReceiveKeyboardCommand(s):void 0)?t.preventDefault():void 0},keypress:function(t){var e,n,i;if(null==this.inputSummary.eventName&&!t.metaKey&&(!t.ctrlKey||t.altKey))return(i=p(t))?(null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString(i),this.setInputSummary({textAdded:i,didDelete:this.selectionIsExpanded()})):void 0},textInput:function(t){var e,n,i,o;return e=t.data,o=this.inputSummary.textAdded,o&&o!==e&&o.toUpperCase()===e?(n=this.getSelectedRange(),this.setSelectedRange([n[0],n[1]+o.length]),null!=(i=this.responder)&&i.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(n)):void 0},dragenter:function(t){return t.preventDefault()},dragstart:function(t){var e,n;return n=t.target,this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidStartDrag?e.inputControllerDidStartDrag():void 0},dragover:function(t){var e,n;return!this.draggedRange&&!this.canAcceptDataTransfer(t.dataTransfer)||(t.preventDefault(),e={x:t.clientX,y:t.clientY},l(e,this.draggingPoint))?void 0:(this.draggingPoint=e,null!=(n=this.delegate)&&"function"==typeof n.inputControllerDidReceiveDragOverPoint?n.inputControllerDidReceiveDragOverPoint(this.draggingPoint):void 0)},dragend:function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidCancelDrag&&t.inputControllerDidCancelDrag(),this.draggedRange=null,this.draggingPoint=null},drop:function(t){var n,i,o,r,s,a,u,c,l;return t.preventDefault(),o=null!=(s=t.dataTransfer)?s.files:void 0,r={x:t.clientX,y:t.clientY},null!=(a=this.responder)&&a.setLocationRangeFromPointRange(r),(null!=o?o.length:void 0)?this.attachFiles(o):this.draggedRange?(null!=(u=this.delegate)&&u.inputControllerWillMoveText(),null!=(c=this.responder)&&c.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()):(i=t.dataTransfer.getData("application/x-trix-document"))&&(n=e.Document.fromJSONString(i),null!=(l=this.responder)&&l.insertDocument(n),this.requestRender()),this.draggedRange=null,this.draggingPoint=null},cut:function(t){var e,n;return(null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented)?this.requestRender():void 0},copy:function(t){var e;return(null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&this.serializeSelectionToDataTransfer(t.clipboardData)?t.preventDefault():void 0},paste:function(t){var n,o,s,a,u,c,l,p,f,g,v,y,b,A,C,x,w,E,S,R,k,D;return n=null!=(p=t.clipboardData)?p:t.testClipboardData,l={clipboard:n},null==n||h(t)?void this.getPastedHTMLUsingHiddenElement(function(t){return function(e){var n,i,o;return l.type="text/html",l.html=e,null!=(n=t.delegate)&&n.inputControllerWillPaste(l),null!=(i=t.responder)&&i.insertHTML(l.html),t.requestRender(),null!=(o=t.delegate)?o.inputControllerDidPaste(l):void 0}}(this)):((a=n.getData("URL"))?(l.type="URL",l.href=a,l.string=(c=n.getData("public.url-name"))?e.squishBreakableWhitespace(c).trim():a,null!=(f=this.delegate)&&f.inputControllerWillPaste(l),this.setInputSummary({textAdded:l.string,didDelete:this.selectionIsExpanded()}),null!=(C=this.responder)&&C.insertText(e.Text.textForStringWithAttributes(l.string,{href:l.href})),this.requestRender(),null!=(x=this.delegate)&&x.inputControllerDidPaste(l)):i(n)?(l.type="text/plain",l.string=n.getData("text/plain"),null!=(w=this.delegate)&&w.inputControllerWillPaste(l),this.setInputSummary({textAdded:l.string,didDelete:this.selectionIsExpanded()}),null!=(E=this.responder)&&E.insertString(l.string),this.requestRender(),null!=(S=this.delegate)&&S.inputControllerDidPaste(l)):(u=n.getData("text/html"))?(l.type="text/html",l.html=u,null!=(R=this.delegate)&&R.inputControllerWillPaste(l),null!=(k=this.responder)&&k.insertHTML(l.html),this.requestRender(),null!=(D=this.delegate)&&D.inputControllerDidPaste(l)):m.call(n.types,"Files")>=0&&(s=null!=(g=n.items)&&null!=(v=g[0])&&"function"==typeof v.getAsFile?v.getAsFile():void 0)&&(!s.name&&(o=r(s))&&(s.name="pasted-file-"+ ++d+"."+o),l.type="File",l.file=s,null!=(y=this.delegate)&&y.inputControllerWillAttachFiles(),null!=(b=this.responder)&&b.insertFile(l.file),this.requestRender(),null!=(A=this.delegate)&&A.inputControllerDidPaste(l)),t.preventDefault())},compositionstart:function(t){return this.getCompositionInput().start(t.data)},compositionupdate:function(t){return this.getCompositionInput().update(t.data)},compositionend:function(t){return this.getCompositionInput().end(t.data)},beforeinput:function(){return this.inputSummary.didInput=!0},input:function(t){return this.inputSummary.didInput=!0,t.stopPropagation()}},s.prototype.keys={backspace:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},"delete":function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},"return":function(){var t,e;return this.setInputSummary({preferDocument:!0}),null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),null!=(e=this.responder)?e.insertLineBreak():void 0},tab:function(t){var e,n;return(null!=(e=this.responder)?e.canIncreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.increaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},right:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0
},control:{d:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o:function(t){var e,n;return t.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n",{updatePosition:!1}),this.requestRender()}},shift:{"return":function(t){var e,n;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n"),this.requestRender(),t.preventDefault()},tab:function(t){var e,n;return(null!=(e=this.responder)?e.canDecreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.decreaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("backward")):void 0},right:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("forward")):void 0}},alt:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}},meta:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}}},s.prototype.getCompositionInput=function(){return this.isComposing()?this.compositionInput:this.compositionInput=new t(this)},s.prototype.isComposing=function(){return null!=this.compositionInput&&!this.compositionInput.isEnded()},s.prototype.deleteInDirection=function(t,e){var n;return(null!=(n=this.responder)?n.deleteInDirection(t):void 0)!==!1?this.setInputSummary({didDelete:!0}):e?(e.preventDefault(),this.requestRender()):void 0},s.prototype.serializeSelectionToDataTransfer=function(t){var n,i;if(o(t))return n=null!=(i=this.responder)?i.getSelectedDocument().toSerializableDocument():void 0,t.setData("application/x-trix-document",JSON.stringify(n)),t.setData("text/html",e.DocumentView.render(n).innerHTML),t.setData("text/plain",n.toString().replace(/\n$/,"")),!0},s.prototype.canAcceptDataTransfer=function(t){var e,n,i,o,r,s;for(s={},o=null!=(i=null!=t?t.types:void 0)?i:[],e=0,n=o.length;n>e;e++)r=o[e],s[r]=!0;return s.Files||s["application/x-trix-document"]||s["text/html"]||s["text/plain"]},s.prototype.getPastedHTMLUsingHiddenElement=function(t){var n,i,o;return i=this.getSelectedRange(),o={position:"absolute",left:window.pageXOffset+"px",top:window.pageYOffset+"px",opacity:0},n=c({style:o,tagName:"div",editable:!0}),document.body.appendChild(n),n.focus(),requestAnimationFrame(function(o){return function(){var r;return r=n.innerHTML,e.removeNode(n),o.setSelectedRange(i),t(r)}}(this))},s.proxyMethod("responder?.getSelectedRange"),s.proxyMethod("responder?.setSelectedRange"),s.proxyMethod("responder?.expandSelectionInDirection"),s.proxyMethod("responder?.selectionIsInCursorTarget"),s.proxyMethod("responder?.selectionIsExpanded"),s}(e.InputController),r=function(t){var e,n;return null!=(e=t.type)&&null!=(n=e.match(/\/(\w+)$/))?n[1]:void 0},s=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),p=function(t){var n;return t.key&&s&&t.key.codePointAt(0)===t.keyCode?t.key:(null===t.which?n=t.keyCode:0!==t.which&&0!==t.charCode&&(n=t.charCode),null!=n&&"escape"!==u[n]?e.UTF16String.fromCodepoints([n]).toString():void 0)},h=function(t){var e,n,i,o,r,s,a,u,c,l;if(u=t.clipboardData){if(m.call(u.types,"text/html")>=0){for(c=u.types,i=0,s=c.length;s>i;i++)if(l=c[i],e=/^CorePasteboardFlavorType/.test(l),n=/^dyn\./.test(l)&&u.getData(l),a=e||n)return!0;return!1}return o=m.call(u.types,"com.apple.webarchive")>=0,r=m.call(u.types,"com.apple.flat-rtfd")>=0,o||r}},t=function(t){function e(t){var e;this.inputController=t,e=this.inputController,this.responder=e.responder,this.delegate=e.delegate,this.inputSummary=e.inputSummary,this.data={}}return f(e,t),e.prototype.start=function(t){var e,n;return this.data.start=t,this.isSignificant()?("keypress"===this.inputSummary.eventName&&this.inputSummary.textAdded&&null!=(e=this.responder)&&e.deleteInDirection("left"),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=null!=(n=this.responder)?n.getSelectedRange():void 0):void 0},e.prototype.update=function(t){var e;return this.data.update=t,this.isSignificant()&&(e=this.selectPlaceholder())?(this.forgetPlaceholder(),this.range=e):void 0},e.prototype.end=function(t){var e,n,i,o;return this.data.end=t,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.setSelectedRange(this.range),null!=(i=this.responder)&&i.insertString(this.data.end),null!=(o=this.responder)?o.setSelectedRange(this.range[0]+this.data.end.length):void 0):null!=this.data.start||null!=this.data.update?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset()},e.prototype.getEndData=function(){return this.data.end},e.prototype.isEnded=function(){return null!=this.getEndData()},e.prototype.isSignificant=function(){return n.composesExistingText?this.inputSummary.didInput:!0},e.prototype.canApplyToDocument=function(){var t,e;return 0===(null!=(t=this.data.start)?t.length:void 0)&&(null!=(e=this.data.end)?e.length:void 0)>0&&null!=this.range},e.proxyMethod("inputController.setInputSummary"),e.proxyMethod("inputController.requestRender"),e.proxyMethod("inputController.requestReparse"),e.proxyMethod("responder?.selectionIsExpanded"),e.proxyMethod("responder?.insertPlaceholder"),e.proxyMethod("responder?.selectPlaceholder"),e.proxyMethod("responder?.forgetPlaceholder"),e}(e.BasicObject)}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.dataTransferIsPlainText,n=e.keyEventIsKeyboardCommand,i=e.objectsAreEqual,e.Level2InputController=function(s){function u(){return this.render=o(this.render,this),u.__super__.constructor.apply(this,arguments)}var c,l,h,p,d,f;return r(u,s),u.prototype.elementDidMutate=function(){var t;return this.scheduledRender?this.composing&&null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidAllowUnhandledInput?t.inputControllerDidAllowUnhandledInput():void 0:this.reparse()},u.prototype.scheduleRender=function(){return null!=this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)},u.prototype.render=function(){var t;return cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||null!=(t=this.delegate)&&t.render(),"function"==typeof this.afterRender&&this.afterRender(),this.afterRender=null},u.prototype.reparse=function(){var t;return null!=(t=this.delegate)?t.reparse():void 0},u.prototype.events={keydown:function(t){var e,i,o,r;if(n(t)){if(e=l(t),null!=(r=this.delegate)?r.inputControllerDidReceiveKeyboardCommand(e):void 0)return t.preventDefault()}else if(o=t.key,t.altKey&&(o+="+Alt"),t.shiftKey&&(o+="+Shift"),i=this.keys[o])return this.withEvent(t,i)},paste:function(t){var n,i,o,r,s,a,u,c,l;return h(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):p(t)?(t.preventDefault(),i={type:"text/plain",string:t.clipboardData.getData("text/plain")},null!=(o=this.delegate)&&o.inputControllerWillPaste(i),null!=(r=this.responder)&&r.insertString(i.string),this.render(),null!=(s=this.delegate)?s.inputControllerDidPaste(i):void 0):(n=null!=(a=t.clipboardData)?a.getData("URL"):void 0)?(t.preventDefault(),i={type:"URL",href:n,string:n},null!=(u=this.delegate)&&u.inputControllerWillPaste(i),null!=(c=this.responder)&&c.insertText(e.Text.textForStringWithAttributes(i.string,{href:i.href})),this.render(),null!=(l=this.delegate)?l.inputControllerDidPaste(i):void 0):void 0},beforeinput:function(t){var e;return(e=this.inputTypes[t.inputType])?(this.withEvent(t,e),this.scheduleRender()):void 0},input:function(){return e.selectionChangeObserver.reset()},dragstart:function(t){var e,n;return(null!=(e=this.responder)?e.selectionContainsAttachments():void 0)?(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:null!=(n=this.responder)?n.getSelectedRange():void 0,point:d(t)}):void 0},dragenter:function(t){return c(t)?t.preventDefault():void 0},dragover:function(t){var e,n;return this.dragging&&(t.preventDefault(),e=d(t),!i(e,this.dragging.point))?(this.dragging.point=e,null!=(n=this.responder)?n.setLocationRangeFromPointRange(e):void 0):void 0},drop:function(t){var e,n,i,o;return this.dragging?(t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillMoveText(),null!=(i=this.responder)&&i.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender()):c(t)?(t.preventDefault(),e=d(t),null!=(o=this.responder)&&o.setLocationRangeFromPointRange(e),this.attachFiles(t.dataTransfer.files)):void 0},dragend:function(){var t;return this.dragging?(null!=(t=this.responder)&&t.setSelectedRange(this.dragging.range),this.dragging=null):void 0},compositionend:function(){return this.composing?(this.composing=!1,this.scheduleRender()):void 0}},u.prototype.keys={ArrowLeft:function(){var t,e;return(null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},ArrowRight:function(){var t,e;return(null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("forward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},Backspace:function(){var t,e,n;return(null!=(t=this.responder)?t.shouldManageDeletingInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.deleteInDirection("backward"),this.render()):void 0},Tab:function(){var t,e;return(null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.increaseNestingLevel(),this.render()):void 0},"Tab+Shift":function(){var t,e;return(null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.decreaseNestingLevel(),this.render()):void 0}},u.prototype.inputTypes={deleteByComposition:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut:function(){return this.deleteInDirection("backward")},deleteByDrag:function(){return this.event.preventDefault(),this.withTargetDOMRange(function(){var t;return this.deleteByDragRange=null!=(t=this.responder)?t.getSelectedRange():void 0})},deleteCompositionText:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent:function(){return this.deleteInDirection("backward")},deleteContentBackward:function(){return this.deleteInDirection("backward")},deleteContentForward:function(){return this.deleteInDirection("forward")},deleteEntireSoftLine:function(){return this.deleteInDirection("forward")},deleteHardLineBackward:function(){return this.deleteInDirection("backward")},deleteHardLineForward:function(){return this.deleteInDirection("forward")},deleteSoftLineBackward:function(){return this.deleteInDirection("backward")},deleteSoftLineForward:function(){return this.deleteInDirection("forward")},deleteWordBackward:function(){return this.deleteInDirection("backward")},deleteWordForward:function(){return this.deleteInDirection("forward")},formatBackColor:function(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold:function(){return this.toggleAttributeIfSupported("bold")},formatFontColor:function(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName:function(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent:function(){var t;return(null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.increaseNestingLevel():void 0}):void 0},formatItalic:function(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter:function(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull:function(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft:function(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight:function(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent:function(){var t;return(null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.decreaseNestingLevel():void 0}):void 0},formatRemove:function(){return this.withTargetDOMRange(function(){var t,e,n,i;i=[];for(t in null!=(e=this.responder)?e.getCurrentAttributes():void 0)i.push(null!=(n=this.responder)?n.removeCurrentAttribute(t):void 0);return i})},formatSetBlockTextDirection:function(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection:function(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough:function(){return this.toggleAttributeIfSupported("strike")},formatSubscript:function(){return this.toggleAttributeIfSupported("sub")},formatSuperscript:function(){return this.toggleAttributeIfSupported("sup")},formatUnderline:function(){return this.toggleAttributeIfSupported("underline")},historyRedo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformRedo():void 0},historyUndo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformUndo():void 0},insertCompositionText:function(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition:function(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop:function(){var t,e;return(t=this.deleteByDragRange)?(this.deleteByDragRange=null,null!=(e=this.delegate)&&e.inputControllerWillMoveText(),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.moveTextFromRange(t):void 0})):void 0},insertFromPaste:function(){var n,i,o,r,s,a,u,c,l,h;return n=this.event.dataTransfer,s={dataTransfer:n},(i=n.getData("URL"))?(s.type="URL",s.href=i,s.string=(r=n.getData("public.url-name"))?e.squishBreakableWhitespace(r).trim():i,null!=(a=this.delegate)&&a.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertText(e.Text.textForStringWithAttributes(s.string,{href:s.href})):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):t(n)?(s.type="text/plain",s.string=n.getData("text/plain"),null!=(u=this.delegate)&&u.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertString(s.string):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(o=n.getData("text/html"))?(s.type="text/html",s.html=o,null!=(c=this.delegate)&&c.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertHTML(s.html):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(null!=(l=n.files)?l.length:void 0)?(s.type="File",s.file=n.files[0],null!=(h=this.delegate)&&h.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertFile(s.file):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):void 0},insertFromYank:function(){return this.insertString(this.event.data)},insertLineBreak:function(){return this.insertString("\n")},insertLink:function(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList:function(){return this.toggleAttributeIfSupported("number")},insertParagraph:function(){var t;return null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertLineBreak():void 0})},insertReplacementText:function(){return this.insertString(this.event.dataTransfer.getData("text/plain"),{updatePosition:!1})},insertText:function(){var t,e;return this.insertString(null!=(t=this.event.data)?t:null!=(e=this.event.dataTransfer)?e.getData("text/plain"):void 0)},insertTranspose:function(){return this.insertString(this.event.data)},insertUnorderedList:function(){return this.toggleAttributeIfSupported("bullet")}},u.prototype.insertString=function(t,e){var n;return null==t&&(t=""),null!=(n=this.delegate)&&n.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var n;return null!=(n=this.responder)?n.insertString(t,e):void 0})},u.prototype.toggleAttributeIfSupported=function(t){var n;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(n=this.delegate)&&n.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.toggleCurrentAttribute(t):void 0})):void 0},u.prototype.activateAttributeIfSupported=function(t,n){var i;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(i=this.delegate)&&i.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.setCurrentAttribute(t,n):void 0})):void 0},u.prototype.deleteInDirection=function(t,e){var n,i,o,r;return o=(null!=e?e:{recordUndoEntry:!0}).recordUndoEntry,o&&null!=(r=this.delegate)&&r.inputControllerWillPerformTyping(),i=function(e){return function(){var n;return null!=(n=e.responder)?n.deleteInDirection(t):void 0}}(this),(n=this.getTargetDOMRange({minLength:2}))?this.withTargetDOMRange(n,i):i()},u.prototype.withTargetDOMRange=function(t,n){var i;return"function"==typeof t&&(n=t,t=this.getTargetDOMRange()),t?null!=(i=this.responder)?i.withTargetDOMRange(t,n.bind(this)):void 0:(e.selectionChangeObserver.reset(),n.call(this))},u.prototype.getTargetDOMRange=function(t){var e,n,i,o;return i=(null!=t?t:{minLength:0}).minLength,(o="function"==typeof(e=this.event).getTargetRanges?e.getTargetRanges():void 0)&&o.length&&(n=f(o[0]),0===i||n.toString().length>=i)?n:void 0},f=function(t){var e;return e=document.createRange(),e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},u.prototype.withEvent=function(t,e){var n;this.event=t;try{n=e.call(this)}finally{this.event=null}return n},c=function(t){var e,n;return a.call(null!=(e=null!=(n=t.dataTransfer)?n.types:void 0)?e:[],"Files")>=0},h=function(t){var e;return(e=t.clipboardData)?a.call(e.types,"Files")>=0&&1===e.types.length&&e.files.length>=1:void 0},p=function(t){var e;return(e=t.clipboardData)?a.call(e.types,"text/plain")>=0&&1===e.types.length:void 0},l=function(t){var e;return e=[],t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},d=function(t){return{x:t.clientX,y:t.clientY}},u}(e.InputController)}.call(this),function(){var t,n,i,o,r,s,a,u,c,l=function(t,e){return function(){return t.apply(e,arguments)}},h=function(t,e){function n(){this.constructor=t}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;n=e.defer,i=e.escapeHTML,o=e.handleEvent,a=e.makeElement,c=e.tagName,u=e.config,s=u.lang,t=u.css,r=u.keyNames,e.AttachmentEditorController=function(u){function p(t,e,n,i){this.attachmentPiece=t,this.element=e,this.container=n,this.options=null!=i?i:{},this.didBlurCaption=l(this.didBlurCaption,this),this.didChangeCaption=l(this.didChangeCaption,this),this.didInputCaption=l(this.didInputCaption,this),this.didKeyDownCaption=l(this.didKeyDownCaption,this),this.didClickActionButton=l(this.didClickActionButton,this),this.didClickToolbar=l(this.didClickToolbar,this),this.attachment=this.attachmentPiece.attachment,"a"===c(this.element)&&(this.element=this.element.firstChild),this.install()}var d;return h(p,u),d=function(t){return function(){var e;return e=t.apply(this,arguments),e["do"](),null==this.undos&&(this.undos=[]),this.undos.push(e.undo)}},p.prototype.install=function(){return this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()?this.installCaptionEditor():void 0},p.prototype.uninstall=function(){var t,e;for(this.savePendingCaption();e=this.undos.pop();)e();return null!=(t=this.delegate)?t.didUninstallAttachmentEditor(this):void 0},p.prototype.savePendingCaption=function(){var t,e,n;return null!=this.pendingCaption?(t=this.pendingCaption,this.pendingCaption=null,t?null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment?e.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption:t},this.attachment):void 0:null!=(n=this.delegate)&&"function"==typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment?n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption",this.attachment):void 0):void 0},p.prototype.makeElementMutable=d(function(){return{"do":function(t){return function(){return t.element.dataset.trixMutable=!0}}(this),undo:function(t){return function(){return delete t.element.dataset.trixMutable}}(this)}}),p.prototype.addToolbar=d(function(){var n,r,u;return n=a({tagName:"div",className:t.attachmentToolbar,data:{trixMutable:!0}}),n.innerHTML='<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--actions">\n    <button type="button" data-trix-action="remove" class="trix-button trix-button--remove" title="'+s.remove+'">'+s.remove+"</button>\n  </span>\n</div>",this.attachment.isPreviewable()&&(r=i(this.attachment.getFilename()),u=i(this.attachment.getFormattedFilesize()),n.innerHTML+='<div class="'+t.attachmentMetadataContainer+'">\n  <span class="'+t.attachmentMetadata+'">\n    <span class="'+t.attachmentName+'" title="'+r+'">'+r+'</span>\n    <span class="'+t.attachmentSize+'">'+u+"</span>\n  </span>\n</div>"),o("click",{onElement:n,withCallback:this.didClickToolbar}),o("click",{onElement:n,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),{"do":function(t){return function(){return t.element.appendChild(n)}}(this),undo:function(){return function(){return e.removeNode(n)}}(this)}}),p.prototype.installCaptionEditor=d(function(){var i,r,u,c,l;return c=a({tagName:"textarea",className:t.attachmentCaptionEditor,attributes:{placeholder:s.captionPlaceholder},data:{trixMutable:!0}}),c.value=this.attachmentPiece.getCaption(),l=c.cloneNode(),l.classList.add("trix-autoresize-clone"),l.tabIndex=-1,i=function(){return l.value=c.value,c.style.height=l.scrollHeight+"px"},o("input",{onElement:c,withCallback:i}),o("input",{onElement:c,withCallback:this.didInputCaption}),o("keydown",{onElement:c,withCallback:this.didKeyDownCaption}),o("change",{onElement:c,withCallback:this.didChangeCaption}),o("blur",{onElement:c,withCallback:this.didBlurCaption}),u=this.element.querySelector("figcaption"),r=u.cloneNode(),{"do":function(e){return function(){return u.style.display="none",r.appendChild(c),r.appendChild(l),r.classList.add(t.attachmentCaption+"--editing"),u.parentElement.insertBefore(r,u),i(),e.options.editCaption?n(function(){return c.focus()}):void 0}}(this),undo:function(){return e.removeNode(r),u.style.display=null}}}),p.prototype.didClickToolbar=function(t){return t.preventDefault(),t.stopPropagation()},p.prototype.didClickActionButton=function(t){var e,n;switch(e=t.target.getAttribute("data-trix-action")){case"remove":return null!=(n=this.delegate)?n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment):void 0}},p.prototype.didKeyDownCaption=function(t){var e;return"return"===r[t.keyCode]?(t.preventDefault(),this.savePendingCaption(),null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestDeselectingAttachment?e.attachmentEditorDidRequestDeselectingAttachment(this.attachment):void 0):void 0},p.prototype.didInputCaption=function(t){return this.pendingCaption=t.target.value.replace(/\s/g," ").trim()},p.prototype.didChangeCaption=function(){return this.savePendingCaption()},p.prototype.didBlurCaption=function(){return this.savePendingCaption()},p}(e.BasicObject)}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.config.css,e.AttachmentView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece}var a;return o(s,r),s.attachmentSelector="[data-trix-attachment]",s.prototype.createContentNodes=function(){return[]},s.prototype.createNodes=function(){var e,n,o,r,s,u,c;if(e=r=i({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),(n=this.getHref())&&(r=i({tagName:"a",editable:!1,attributes:{href:n,tabindex:-1}}),e.appendChild(r)),this.attachment.hasContent())r.innerHTML=this.attachment.getContent();else for(c=this.createContentNodes(),o=0,s=c.length;s>o;o++)u=c[o],r.appendChild(u);return r.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=i({tagName:"progress",attributes:{"class":t.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),e.appendChild(this.progressElement)),[a("left"),e,a("right")]},s.prototype.createCaptionElement=function(){var e,n,o,r,s,a,u;return o=i({tagName:"figcaption",className:t.attachmentCaption}),(e=this.attachmentPiece.getCaption())?(o.classList.add(t.attachmentCaption+"--edited"),o.textContent=e):(n=this.getCaptionConfig(),n.name&&(r=this.attachment.getFilename()),n.size&&(a=this.attachment.getFormattedFilesize()),r&&(s=i({tagName:"span",className:t.attachmentName,textContent:r}),o.appendChild(s)),a&&(r&&o.appendChild(document.createTextNode(" ")),u=i({tagName:"span",className:t.attachmentSize,textContent:a}),o.appendChild(u))),o},s.prototype.getClassName=function(){var e,n;return n=[t.attachment,t.attachment+"--"+this.attachment.getType()],(e=this.attachment.getExtension())&&n.push(t.attachment+"--"+e),n.join(" ")},s.prototype.getData=function(){var t,e;return e={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},t=this.attachmentPiece.attributes,t.isEmpty()||(e.trixAttributes=JSON.stringify(t)),this.attachment.isPending()&&(e.trixSerialize=!1),e},s.prototype.getHref=function(){return n(this.attachment.getContent(),"a")?void 0:this.attachment.getHref()},s.prototype.getCaptionConfig=function(){var t,n,i;return i=this.attachment.getType(),t=e.copyObject(null!=(n=e.config.attachments[i])?n.caption:void 0),"file"===i&&(t.name=!0),t},s.prototype.findProgressElement=function(){var t;return null!=(t=this.findElement())?t.querySelector("progress"):void 0},a=function(t){return i({tagName:"span",textContent:e.ZERO_WIDTH_SPACE,data:{trixCursorTarget:t,trixSerialize:!1}})},s.prototype.attachmentDidChangeUploadProgress=function(){var t,e;return e=this.attachment.getUploadProgress(),null!=(t=this.findProgressElement())?t.value=e:void 0},s}(e.ObjectView),n=function(t,e){var n;return n=i("div"),n.innerHTML=null!=t?t:"",n.querySelector(e)}}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.makeElement,e.PreviewableAttachmentView=function(i){function o(){o.__super__.constructor.apply(this,arguments),this.attachment.previewDelegate=this}return n(o,i),o.prototype.createContentNodes=function(){return this.image=t({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]},o.prototype.createCaptionElement=function(){var t;return t=o.__super__.createCaptionElement.apply(this,arguments),t.textContent||t.setAttribute("data-trix-placeholder",e.config.lang.captionPlaceholder),t},o.prototype.refresh=function(t){var e;return null==t&&(t=null!=(e=this.findElement())?e.querySelector("img"):void 0),t?this.updateAttributesForImage(t):void 0},o.prototype.updateAttributesForImage=function(t){var e,n,i,o,r,s;return r=this.attachment.getURL(),n=this.attachment.getPreviewURL(),t.src=n||r,n===r?t.removeAttribute("data-trix-serialized-attributes"):(i=JSON.stringify({src:r}),t.setAttribute("data-trix-serialized-attributes",i)),s=this.attachment.getWidth(),e=this.attachment.getHeight(),null!=s&&(t.width=s),null!=e&&(t.height=e),o=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/"),t.dataset.trixStoreKey=o},o.prototype.attachmentDidChangeAttributes=function(){return this.refresh(this.image),this.refresh()},o}(e.AttachmentView)}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.findInnerElement,n=e.getTextConfig,e.PieceView=function(r){function s(){var t;s.__super__.constructor.apply(this,arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),t=this.options,this.textConfig=t.textConfig,this.context=t.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString()}var a;return o(s,r),s.prototype.createNodes=function(){var e,n,i,o,r,s;if(s=this.attachment?this.createAttachmentNodes():this.createStringNodes(),e=this.createElement()){for(i=t(e),n=0,o=s.length;o>n;n++)r=s[n],i.appendChild(r);s=[e]}return s},s.prototype.createAttachmentNodes=function(){var t,n;return t=this.attachment.isPreviewable()?e.PreviewableAttachmentView:e.AttachmentView,n=this.createChildView(t,this.piece.attachment,{piece:this.piece}),n.getNodes()},s.prototype.createStringNodes=function(){var t,e,n,o,r,s,a,u,c,l;if(null!=(u=this.textConfig)?u.plaintext:void 0)return[document.createTextNode(this.string)];for(a=[],c=this.string.split("\n"),n=e=0,o=c.length;o>e;n=++e)l=c[n],n>0&&(t=i("br"),a.push(t)),(r=l.length)&&(s=document.createTextNode(this.preserveSpaces(l)),a.push(s));return a},s.prototype.createElement=function(){var t,e,o,r,s,a,u,c,l;c={},a=this.attributes;for(r in a)if(l=a[r],(t=n(r))&&(t.tagName&&(s=i(t.tagName),o?(o.appendChild(s),o=s):e=o=s),t.styleProperty&&(c[t.styleProperty]=l),t.style)){u=t.style;for(r in u)l=u[r],c[r]=l}if(Object.keys(c).length){null==e&&(e=i("span"));for(r in c)l=c[r],e.style[r]=l}return e},s.prototype.createContainerElement=function(){var t,e,o,r,s;r=this.attributes;for(o in r)if(s=r[o],(e=n(o))&&e.groupTagName)return t={},t[o]=s,i(e.groupTagName,t)},a=e.NON_BREAKING_SPACE,s.prototype.preserveSpaces=function(t){return this.context.isLast&&(t=t.replace(/\ $/,a)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 "+a+" $2").replace(/\ {2}/g,a+" ").replace(/\ {2}/g," "+a),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,a)),t},s}(e.ObjectView)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.TextView=function(n){function i(){i.__super__.constructor.apply(this,arguments),this.text=this.object,this.textConfig=this.options.textConfig}var o;return t(i,n),i.prototype.createNodes=function(){var t,n,i,r,s,a,u,c,l,h;for(a=[],c=e.ObjectGroup.groupObjects(this.getPieces()),r=c.length-1,i=n=0,s=c.length;s>n;i=++n)u=c[i],t={},0===i&&(t.isFirst=!0),i===r&&(t.isLast=!0),o(l)&&(t.followsWhitespace=!0),h=this.findOrCreateCachedChildView(e.PieceView,u,{textConfig:this.textConfig,context:t}),a.push.apply(a,h.getNodes()),l=u;return a},i.prototype.getPieces=function(){var t,e,n,i,o;for(i=this.text.getPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],n.hasAttribute("blockBreak")||o.push(n);return o},o=function(t){return/\s$/.test(null!=t?t.toString():void 0)},i}(e.ObjectView)}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;
i=e.makeElement,n=e.getBlockConfig,t=e.config.css,e.BlockView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.block=this.object,this.attributes=this.block.getAttributes()}return o(s,r),s.prototype.createNodes=function(){var t,o,r,s,a,u,c,l,h;if(t=document.createComment("block"),u=[t],this.block.isEmpty()?u.push(i("br")):(l=null!=(c=n(this.block.getLastAttribute()))?c.text:void 0,h=this.findOrCreateCachedChildView(e.TextView,this.block.text,{textConfig:l}),u.push.apply(u,h.getNodes()),this.shouldAddExtraNewlineElement()&&u.push(i("br"))),this.attributes.length)return u;for(o=i(e.config.blockAttributes["default"].tagName),r=0,s=u.length;s>r;r++)a=u[r],o.appendChild(a);return[o]},s.prototype.createContainerElement=function(e){var o,r,s,a;return o=this.attributes[e],a=n(o).tagName,r={tagName:a},"attachmentGallery"===o&&(s=this.block.getBlockBreakPosition(),r.className=t.attachmentGallery+" "+t.attachmentGallery+"--"+s),i(r)},s.prototype.shouldAddExtraNewlineElement=function(){return/\n\n$/.test(this.block.toString())},s}(e.ObjectView)}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.defer,n=e.makeElement,e.DocumentView=function(o){function r(){r.__super__.constructor.apply(this,arguments),this.element=this.options.element,this.elementStore=new e.ElementStore,this.setDocument(this.object)}var s,a,u;return i(r,o),r.render=function(t){var e,i;return e=n("div"),i=new this(t,{element:e}),i.render(),i.sync(),e},r.prototype.setDocument=function(t){return t.isEqualTo(this.document)?void 0:this.document=this.object=t},r.prototype.render=function(){var t,i,o,r,s,a,u;if(this.childViews=[],this.shadowElement=n("div"),!this.document.isEmpty()){for(s=e.ObjectGroup.groupObjects(this.document.getBlocks(),{asTree:!0}),a=[],t=0,i=s.length;i>t;t++)r=s[t],u=this.findOrCreateCachedChildView(e.BlockView,r),a.push(function(){var t,e,n,i;for(n=u.getNodes(),i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.shadowElement.appendChild(o));return i}.call(this));return a}},r.prototype.isSynced=function(){return s(this.shadowElement,this.element)},r.prototype.sync=function(){var t;for(t=this.createDocumentFragmentForSync();this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()},r.prototype.didSync=function(){return this.elementStore.reset(a(this.element)),t(function(t){return function(){return t.garbageCollectCachedViews()}}(this))},r.prototype.createDocumentFragmentForSync=function(){var t,e,n,i,o,r,s,u,c,l;for(e=document.createDocumentFragment(),u=this.shadowElement.childNodes,n=0,o=u.length;o>n;n++)s=u[n],e.appendChild(s.cloneNode(!0));for(c=a(e),i=0,r=c.length;r>i;i++)t=c[i],(l=this.elementStore.remove(t))&&t.parentNode.replaceChild(l,t);return e},a=function(t){return t.querySelectorAll("[data-trix-store-key]")},s=function(t,e){return u(t.innerHTML)===u(e.innerHTML)},u=function(t){return t.replace(/&nbsp;/g," ")},r}(e.ObjectView)}.call(this),function(){var t,n,i,o,r,s=function(t,e){return function(){return t.apply(e,arguments)}},a=function(t,e){function n(){this.constructor=t}for(var i in e)u.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},u={}.hasOwnProperty;i=e.findClosestElementFromNode,o=e.handleEvent,r=e.innerElementIsActive,n=e.defer,t=e.AttachmentView.attachmentSelector,e.CompositionController=function(u){function c(n,i){this.element=n,this.composition=i,this.didClickAttachment=s(this.didClickAttachment,this),this.didBlur=s(this.didBlur,this),this.didFocus=s(this.didFocus,this),this.documentView=new e.DocumentView(this.composition.document,{element:this.element}),o("focus",{onElement:this.element,withCallback:this.didFocus}),o("blur",{onElement:this.element,withCallback:this.didBlur}),o("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),o("mousedown",{onElement:this.element,matchingSelector:t,withCallback:this.didClickAttachment}),o("click",{onElement:this.element,matchingSelector:"a"+t,preventDefault:!0})}return a(c,u),c.prototype.didFocus=function(){var t,e,n;return t=function(t){return function(){var e;return t.focused?void 0:(t.focused=!0,null!=(e=t.delegate)&&"function"==typeof e.compositionControllerDidFocus?e.compositionControllerDidFocus():void 0)}}(this),null!=(e=null!=(n=this.blurPromise)?n.then(t):void 0)?e:t()},c.prototype.didBlur=function(){return this.blurPromise=new Promise(function(t){return function(e){return n(function(){var n;return r(t.element)||(t.focused=null,null!=(n=t.delegate)&&"function"==typeof n.compositionControllerDidBlur&&n.compositionControllerDidBlur()),t.blurPromise=null,e()})}}(this))},c.prototype.didClickAttachment=function(t,e){var n,o,r;return n=this.findAttachmentForElement(e),o=null!=i(t.target,{matchingSelector:"figcaption"}),null!=(r=this.delegate)&&"function"==typeof r.compositionControllerDidSelectAttachment?r.compositionControllerDidSelectAttachment(n,{editCaption:o}):void 0},c.prototype.getSerializableElement=function(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element},c.prototype.render=function(){var t,e,n;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&(null!=(t=this.delegate)&&"function"==typeof t.compositionControllerWillSyncDocumentView&&t.compositionControllerWillSyncDocumentView(),this.documentView.sync(),null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidSyncDocumentView&&e.compositionControllerDidSyncDocumentView()),null!=(n=this.delegate)&&"function"==typeof n.compositionControllerDidRender?n.compositionControllerDidRender():void 0},c.prototype.rerenderViewForObject=function(t){return this.invalidateViewForObject(t),this.render()},c.prototype.invalidateViewForObject=function(t){return this.documentView.invalidateViewForObject(t)},c.prototype.isViewCachingEnabled=function(){return this.documentView.isViewCachingEnabled()},c.prototype.enableViewCaching=function(){return this.documentView.enableViewCaching()},c.prototype.disableViewCaching=function(){return this.documentView.disableViewCaching()},c.prototype.refreshViewCache=function(){return this.documentView.garbageCollectCachedViews()},c.prototype.isEditingAttachment=function(){return null!=this.attachmentEditor},c.prototype.installAttachmentEditorForAttachment=function(t,n){var i,o,r;if((null!=(r=this.attachmentEditor)?r.attachment:void 0)!==t&&(o=this.documentView.findElementForObject(t)))return this.uninstallAttachmentEditor(),i=this.composition.document.getAttachmentPieceForAttachment(t),this.attachmentEditor=new e.AttachmentEditorController(i,o,this.element,n),this.attachmentEditor.delegate=this},c.prototype.uninstallAttachmentEditor=function(){var t;return null!=(t=this.attachmentEditor)?t.uninstall():void 0},c.prototype.didUninstallAttachmentEditor=function(){return this.attachmentEditor=null,this.render()},c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.updateAttributesForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.removeAttributeForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovalOfAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestRemovalOfAttachment?e.compositionControllerDidRequestRemovalOfAttachment(t):void 0},c.prototype.attachmentEditorDidRequestDeselectingAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestDeselectingAttachment?e.compositionControllerDidRequestDeselectingAttachment(t):void 0},c.prototype.canSyncDocumentView=function(){return!this.isEditingAttachment()},c.prototype.findAttachmentForElement=function(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))},c}(e.BasicObject)}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;n=e.handleEvent,i=e.triggerEvent,t=e.findClosestElementFromNode,e.ToolbarController=function(e){function s(t){this.element=t,this.didKeyDownDialogInput=o(this.didKeyDownDialogInput,this),this.didClickDialogButton=o(this.didClickDialogButton,this),this.didClickAttributeButton=o(this.didClickAttributeButton,this),this.didClickActionButton=o(this.didClickActionButton,this),this.attributes={},this.actions={},this.resetDialogInputs(),n("mousedown",{onElement:this.element,matchingSelector:a,withCallback:this.didClickActionButton}),n("mousedown",{onElement:this.element,matchingSelector:c,withCallback:this.didClickAttributeButton}),n("click",{onElement:this.element,matchingSelector:v,preventDefault:!0}),n("click",{onElement:this.element,matchingSelector:l,withCallback:this.didClickDialogButton}),n("keydown",{onElement:this.element,matchingSelector:h,withCallback:this.didKeyDownDialogInput})}var a,u,c,l,h,p,d,f,g,m,v;return r(s,e),c="[data-trix-attribute]",a="[data-trix-action]",v=c+", "+a,p="[data-trix-dialog]",u=p+"[data-trix-active]",l=p+" [data-trix-method]",h=p+" [data-trix-input]",s.prototype.didClickActionButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=d(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)?o.toolbarDidInvokeAction(n):void 0},s.prototype.didClickAttributeButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=f(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)&&o.toolbarDidToggleAttribute(n),this.refreshAttributeButtons()},s.prototype.didClickDialogButton=function(e,n){var i,o;return i=t(n,{matchingSelector:p}),o=n.getAttribute("data-trix-method"),this[o].call(this,i)},s.prototype.didKeyDownDialogInput=function(t,e){var n,i;return 13===t.keyCode&&(t.preventDefault(),n=e.getAttribute("name"),i=this.getDialog(n),this.setAttribute(i)),27===t.keyCode?(t.preventDefault(),this.hideDialog()):void 0},s.prototype.updateActions=function(t){return this.actions=t,this.refreshActionButtons()},s.prototype.refreshActionButtons=function(){return this.eachActionButton(function(t){return function(e,n){return e.disabled=t.actions[n]===!1}}(this))},s.prototype.eachActionButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(a),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,d(e)));return r},s.prototype.updateAttributes=function(t){return this.attributes=t,this.refreshAttributeButtons()},s.prototype.refreshAttributeButtons=function(){return this.eachAttributeButton(function(t){return function(e,n){return e.disabled=t.attributes[n]===!1,t.attributes[n]||t.dialogIsVisible(n)?(e.setAttribute("data-trix-active",""),e.classList.add("trix-active")):(e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"))}}(this))},s.prototype.eachAttributeButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(c),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,f(e)));return r},s.prototype.applyKeyboardCommand=function(t){var e,n,o,r,s,a,u;for(s=JSON.stringify(t.sort()),u=this.element.querySelectorAll("[data-trix-key]"),r=0,a=u.length;a>r;r++)if(e=u[r],o=e.getAttribute("data-trix-key").split("+"),n=JSON.stringify(o.sort()),n===s)return i("mousedown",{onElement:e}),!0;return!1},s.prototype.dialogIsVisible=function(t){var e;return(e=this.getDialog(t))?e.hasAttribute("data-trix-active"):void 0},s.prototype.toggleDialog=function(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)},s.prototype.showDialog=function(t){var e,n,i,o,r,s,a,u,c,l;for(this.hideDialog(),null!=(a=this.delegate)&&a.toolbarWillShowDialog(),i=this.getDialog(t),i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),u=i.querySelectorAll("input[disabled]"),o=0,s=u.length;s>o;o++)n=u[o],n.removeAttribute("disabled");return(e=f(i))&&(r=m(i,t))&&(r.value=null!=(c=this.attributes[e])?c:"",r.select()),null!=(l=this.delegate)?l.toolbarDidShowDialog(t):void 0},s.prototype.setAttribute=function(t){var e,n,i;return e=f(t),n=m(t,e),n.willValidate&&!n.checkValidity()?(n.setAttribute("data-trix-validate",""),n.classList.add("trix-validate"),n.focus()):(null!=(i=this.delegate)&&i.toolbarDidUpdateAttribute(e,n.value),this.hideDialog())},s.prototype.removeAttribute=function(t){var e,n;return e=f(t),null!=(n=this.delegate)&&n.toolbarDidRemoveAttribute(e),this.hideDialog()},s.prototype.hideDialog=function(){var t,e;return(t=this.element.querySelector(u))?(t.removeAttribute("data-trix-active"),t.classList.remove("trix-active"),this.resetDialogInputs(),null!=(e=this.delegate)?e.toolbarDidHideDialog(g(t)):void 0):void 0},s.prototype.resetDialogInputs=function(){var t,e,n,i,o;for(i=this.element.querySelectorAll(h),o=[],t=0,n=i.length;n>t;t++)e=i[t],e.setAttribute("disabled","disabled"),e.removeAttribute("data-trix-validate"),o.push(e.classList.remove("trix-validate"));return o},s.prototype.getDialog=function(t){return this.element.querySelector("[data-trix-dialog="+t+"]")},m=function(t,e){return null==e&&(e=f(t)),t.querySelector("[data-trix-input][name='"+e+"']")},d=function(t){return t.getAttribute("data-trix-action")},f=function(t){var e;return null!=(e=t.getAttribute("data-trix-attribute"))?e:t.getAttribute("data-trix-dialog-attribute")},g=function(t){return t.getAttribute("data-trix-dialog")},s}(e.BasicObject)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ImagePreloadOperation=function(e){function n(t){this.url=t}return t(n,e),n.prototype.perform=function(t){var e;return e=new Image,e.onload=function(n){return function(){return e.width=n.width=e.naturalWidth,e.height=n.height=e.naturalHeight,t(!0,e)}}(this),e.onerror=function(){return t(!1)},e.src=this.url},n}(e.Operation)}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e.Attachment=function(i){function o(n){null==n&&(n={}),this.releaseFile=t(this.releaseFile,this),o.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n),this.didChangeAttributes()}return n(o,i),o.previewablePattern=/^image(\/(gif|png|jpe?g)|$)/,o.attachmentForFile=function(t){var e,n;return n=this.attributesForFile(t),e=new this(n),e.setFile(t),e},o.attributesForFile=function(t){return new e.Hash({filename:t.name,filesize:t.size,contentType:t.type})},o.fromJSON=function(t){return new this(t)},o.prototype.getAttribute=function(t){return this.attributes.get(t)},o.prototype.hasAttribute=function(t){return this.attributes.has(t)},o.prototype.getAttributes=function(){return this.attributes.toObject()},o.prototype.setAttributes=function(t){var e,n,i;return null==t&&(t={}),e=this.attributes.merge(t),this.attributes.isEqualTo(e)?void 0:(this.attributes=e,this.didChangeAttributes(),null!=(n=this.previewDelegate)&&"function"==typeof n.attachmentDidChangeAttributes&&n.attachmentDidChangeAttributes(this),null!=(i=this.delegate)&&"function"==typeof i.attachmentDidChangeAttributes?i.attachmentDidChangeAttributes(this):void 0)},o.prototype.didChangeAttributes=function(){return this.isPreviewable()?this.preloadURL():void 0},o.prototype.isPending=function(){return null!=this.file&&!(this.getURL()||this.getHref())},o.prototype.isPreviewable=function(){return this.attributes.has("previewable")?this.attributes.get("previewable"):this.constructor.previewablePattern.test(this.getContentType())},o.prototype.getType=function(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"},o.prototype.getURL=function(){return this.attributes.get("url")},o.prototype.getHref=function(){return this.attributes.get("href")},o.prototype.getFilename=function(){var t;return null!=(t=this.attributes.get("filename"))?t:""},o.prototype.getFilesize=function(){return this.attributes.get("filesize")},o.prototype.getFormattedFilesize=function(){var t;return t=this.attributes.get("filesize"),"number"==typeof t?e.config.fileSize.formatter(t):""},o.prototype.getExtension=function(){var t;return null!=(t=this.getFilename().match(/\.(\w+)$/))?t[1].toLowerCase():void 0},o.prototype.getContentType=function(){return this.attributes.get("contentType")},o.prototype.hasContent=function(){return this.attributes.has("content")},o.prototype.getContent=function(){return this.attributes.get("content")},o.prototype.getWidth=function(){return this.attributes.get("width")},o.prototype.getHeight=function(){return this.attributes.get("height")},o.prototype.getFile=function(){return this.file},o.prototype.setFile=function(t){return this.file=t,this.isPreviewable()?this.preloadFile():void 0},o.prototype.releaseFile=function(){return this.releasePreloadedFile(),this.file=null},o.prototype.getUploadProgress=function(){var t;return null!=(t=this.uploadProgress)?t:0},o.prototype.setUploadProgress=function(t){var e;return this.uploadProgress!==t?(this.uploadProgress=t,null!=(e=this.uploadProgressDelegate)&&"function"==typeof e.attachmentDidChangeUploadProgress?e.attachmentDidChangeUploadProgress(this):void 0):void 0},o.prototype.toJSON=function(){return this.getAttributes()},o.prototype.getCacheKey=function(){return[o.__super__.getCacheKey.apply(this,arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")},o.prototype.getPreviewURL=function(){return this.previewURL||this.preloadingURL},o.prototype.setPreviewURL=function(t){var e,n;return t!==this.getPreviewURL()?(this.previewURL=t,null!=(e=this.previewDelegate)&&"function"==typeof e.attachmentDidChangeAttributes&&e.attachmentDidChangeAttributes(this),null!=(n=this.delegate)&&"function"==typeof n.attachmentDidChangePreviewURL?n.attachmentDidChangePreviewURL(this):void 0):void 0},o.prototype.preloadURL=function(){return this.preload(this.getURL(),this.releaseFile)},o.prototype.preloadFile=function(){return this.file?(this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)):void 0},o.prototype.releasePreloadedFile=function(){return this.fileObjectURL?(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null):void 0},o.prototype.preload=function(t,n){var i;return t&&t!==this.getPreviewURL()?(this.preloadingURL=t,i=new e.ImagePreloadOperation(t),i.then(function(e){return function(i){var o,r;return r=i.width,o=i.height,e.getWidth()&&e.getHeight()||e.setAttributes({width:r,height:o}),e.preloadingURL=null,e.setPreviewURL(t),"function"==typeof n?n():void 0}}(this))["catch"](function(t){return function(){return t.preloadingURL=null,"function"==typeof n?n():void 0}}(this))):void 0},o}(e.Object)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece=function(n){function i(t,n){null==n&&(n={}),i.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n)}return t(i,n),i.types={},i.registerType=function(t,e){return e.type=t,this.types[t]=e},i.fromJSON=function(t){var e;return(e=this.types[t.type])?e.fromJSON(t):void 0},i.prototype.copyWithAttributes=function(t){return new this.constructor(this.getValue(),t)},i.prototype.copyWithAdditionalAttributes=function(t){return this.copyWithAttributes(this.attributes.merge(t))},i.prototype.copyWithoutAttribute=function(t){return this.copyWithAttributes(this.attributes.remove(t))},i.prototype.copy=function(){return this.copyWithAttributes(this.attributes)},i.prototype.getAttribute=function(t){return this.attributes.get(t)},i.prototype.getAttributesHash=function(){return this.attributes},i.prototype.getAttributes=function(){return this.attributes.toObject()},i.prototype.getCommonAttributes=function(){var t,e,n;return(n=pieceList.getPieceAtIndex(0))?(t=n.attributes,e=t.getKeys(),pieceList.eachPiece(function(n){return e=t.getKeysCommonToHash(n.attributes),t=t.slice(e)}),t.toObject()):{}},i.prototype.hasAttribute=function(t){return this.attributes.has(t)},i.prototype.hasSameStringValueAsPiece=function(t){return null!=t&&this.toString()===t.toString()},i.prototype.hasSameAttributesAsPiece=function(t){return null!=t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))},i.prototype.isBlockBreak=function(){return!1},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.isEmpty=function(){return 0===this.length},i.prototype.isSerializable=function(){return!0},i.prototype.toJSON=function(){return{type:this.constructor.type,attributes:this.getAttributes()}},i.prototype.contentsForInspection=function(){return{type:this.constructor.type,attributes:this.attributes.inspect()}},i.prototype.canBeGrouped=function(){return this.hasAttribute("href")},i.prototype.canBeGroupedWith=function(t){return this.getAttribute("href")===t.getAttribute("href")},i.prototype.getLength=function(){return this.length},i.prototype.canBeConsolidatedWith=function(){return!1},i}(e.Object)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece.registerType("attachment",e.AttachmentPiece=function(n){function i(t){this.attachment=t,i.__super__.constructor.apply(this,arguments),this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes()}return t(i,n),i.fromJSON=function(t){return new this(e.Attachment.fromJSON(t.attachment),t.attributes)},i.permittedAttributes=["caption","presentation"],i.prototype.ensureAttachmentExclusivelyHasAttribute=function(t){return this.hasAttribute(t)?(this.attachment.hasAttribute(t)||this.attachment.setAttributes(this.attributes.slice(t)),this.attributes=this.attributes.remove(t)):void 0},i.prototype.removeProhibitedAttributes=function(){var t;return t=this.attributes.slice(this.constructor.permittedAttributes),t.isEqualTo(this.attributes)?void 0:this.attributes=t},i.prototype.getValue=function(){return this.attachment},i.prototype.isSerializable=function(){return!this.attachment.isPending()},i.prototype.getCaption=function(){var t;return null!=(t=this.attributes.get("caption"))?t:""},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)&&this.attachment.id===(null!=t&&null!=(e=t.attachment)?e.id:void 0)},i.prototype.toString=function(){return e.OBJECT_REPLACEMENT_CHARACTER},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.attachment=this.attachment,t},i.prototype.getCacheKey=function(){return[i.__super__.getCacheKey.apply(this,arguments),this.attachment.getCacheKey()].join("/")},i.prototype.toConsole=function(){return JSON.stringify(this.toString())},i}(e.Piece))}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.normalizeNewlines,e.Piece.registerType("string",e.StringPiece=function(e){function i(e){i.__super__.constructor.apply(this,arguments),this.string=t(e),this.length=this.string.length}return n(i,e),i.fromJSON=function(t){return new this(t.string,t.attributes)},i.prototype.getValue=function(){return this.string},i.prototype.toString=function(){return this.string.toString()},i.prototype.isBlockBreak=function(){return"\n"===this.toString()&&this.getAttribute("blockBreak")===!0},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.string=this.string,t},i.prototype.canBeConsolidatedWith=function(t){return null!=t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.consolidateWith=function(t){return new this.constructor(this.toString()+t.toString(),this.attributes)},i.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.length?(e=this,n=null):(e=new this.constructor(this.string.slice(0,t),this.attributes),n=new this.constructor(this.string.slice(t),this.attributes)),[e,n]},i.prototype.toConsole=function(){var t;return t=this.string,t.length>15&&(t=t.slice(0,14)+"\u2026"),JSON.stringify(t.toString())},i}(e.Piece))}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty,o=[].slice;t=e.spliceArray,e.SplittableList=function(e){function i(t){null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.objects=t.slice(0),this.length=this.objects.length}var r,s,a;return n(i,e),i.box=function(t){return t instanceof this?t:new this(t)},i.prototype.indexOf=function(t){return this.objects.indexOf(t)},i.prototype.splice=function(){var e;return e=1<=arguments.length?o.call(arguments,0):[],new this.constructor(t.apply(null,[this.objects].concat(o.call(e))))},i.prototype.eachObject=function(t){var e,n,i,o,r,s;for(r=this.objects,s=[],n=e=0,i=r.length;i>e;n=++e)o=r[n],s.push(t(o,n));return s},i.prototype.insertObjectAtIndex=function(t,e){return this.splice(e,0,t)},i.prototype.insertSplittableListAtIndex=function(t,e){return this.splice.apply(this,[e,0].concat(o.call(t.objects)))},i.prototype.insertSplittableListAtPosition=function(t,e){var n,i,o;return o=this.splitObjectAtPosition(e),i=o[0],n=o[1],new this.constructor(i).insertSplittableListAtIndex(t,n)},i.prototype.editObjectAtIndex=function(t,e){return this.replaceObjectAtIndex(e(this.objects[t]),t)},i.prototype.replaceObjectAtIndex=function(t,e){return this.splice(e,1,t)},i.prototype.removeObjectAtIndex=function(t){return this.splice(t,1)},i.prototype.getObjectAtIndex=function(t){return this.objects[t]},i.prototype.getSplittableListInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n.slice(e,o+1))},i.prototype.selectSplittableList=function(t){var e,n;return n=function(){var n,i,o,r;for(o=this.objects,r=[],n=0,i=o.length;i>n;n++)e=o[n],t(e)&&r.push(e);return r}.call(this),new this.constructor(n)},i.prototype.removeObjectsInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n).splice(e,o-e+1)},i.prototype.transformObjectsInRange=function(t,e){var n,i,o,r,s,a,u;return s=this.splitObjectsAtRange(t),r=s[0],i=s[1],a=s[2],u=function(){var t,s,u;for(u=[],n=t=0,s=r.length;s>t;n=++t)o=r[n],u.push(n>=i&&a>=n?e(o):o);return u}(),new this.constructor(u)},i.prototype.splitObjectsAtRange=function(t){var e,n,i,o,s,u;return o=this.splitObjectAtPosition(a(t)),n=o[0],e=o[1],i=o[2],s=new this.constructor(n).splitObjectAtPosition(r(t)+i),n=s[0],u=s[1],[n,e,u-1]},i.prototype.getObjectAtPosition=function(t){var e,n,i;return i=this.findIndexAndOffsetAtPosition(t),e=i.index,n=i.offset,this.objects[e]},i.prototype.splitObjectAtPosition=function(t){var e,n,i,o,r,s,a,u,c,l;return s=this.findIndexAndOffsetAtPosition(t),e=s.index,r=s.offset,o=this.objects.slice(0),null!=e?0===r?(c=e,l=0):(i=this.getObjectAtIndex(e),a=i.splitAtOffset(r),n=a[0],u=a[1],o.splice(e,1,n,u),c=e+1,l=n.getLength()-r):(c=o.length,l=0),[o,c,l]},i.prototype.consolidate=function(){var t,e,n,i,o,r;for(i=[],o=this.objects[0],r=this.objects.slice(1),t=0,e=r.length;e>t;t++)n=r[t],("function"==typeof o.canBeConsolidatedWith?o.canBeConsolidatedWith(n):void 0)?o=o.consolidateWith(n):(i.push(o),o=n);return null!=o&&i.push(o),new this.constructor(i)},i.prototype.consolidateFromIndexToIndex=function(t,e){var n,i,r;return i=this.objects.slice(0),r=i.slice(t,e+1),n=new this.constructor(r).consolidate().toArray(),this.splice.apply(this,[t,r.length].concat(o.call(n)))},i.prototype.findIndexAndOffsetAtPosition=function(t){var e,n,i,o,r,s,a;for(e=0,a=this.objects,i=n=0,o=a.length;o>n;i=++n){if(s=a[i],r=e+s.getLength(),t>=e&&r>t)return{index:i,offset:t-e};e=r}return{index:null,offset:null}},i.prototype.findPositionAtIndexAndOffset=function(t,e){var n,i,o,r,s,a;for(s=0,a=this.objects,n=i=0,o=a.length;o>i;n=++i)if(r=a[n],t>n)s+=r.getLength();else if(n===t){s+=e;break}return s},i.prototype.getEndPosition=function(){var t,e;return null!=this.endPosition?this.endPosition:this.endPosition=function(){var n,i,o;for(e=0,o=this.objects,n=0,i=o.length;i>n;n++)t=o[n],e+=t.getLength();return e}.call(this)},i.prototype.toString=function(){return this.objects.join("")},i.prototype.toArray=function(){return this.objects.slice(0)},i.prototype.toJSON=function(){return this.toArray()},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||s(this.objects,null!=t?t.objects:void 0)},s=function(t,e){var n,i,o,r,s;if(null==e&&(e=[]),t.length!==e.length)return!1;for(s=!0,i=n=0,o=t.length;o>n;i=++n)r=t[i],s&&!r.isEqualTo(e[i])&&(s=!1);return s},i.prototype.contentsForInspection=function(){var t;return{objects:"["+function(){var e,n,i,o;for(i=this.objects,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.inspect());return o}.call(this).join(", ")+"]"}},a=function(t){return t[0]},r=function(t){return t[1]},i}(e.Object)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Text=function(n){function i(t){var n;null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.pieceList=new e.SplittableList(function(){var e,i,o;for(o=[],e=0,i=t.length;i>e;e++)n=t[e],n.isEmpty()||o.push(n);return o}())}return t(i,n),i.textForAttachmentWithAttributes=function(t,n){var i;return i=new e.AttachmentPiece(t,n),new this([i])},i.textForStringWithAttributes=function(t,n){var i;return i=new e.StringPiece(t,n),new this([i])},i.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Piece.fromJSON(n));return r}(),new this(i)},i.prototype.copy=function(){return this.copyWithPieceList(this.pieceList)},i.prototype.copyWithPieceList=function(t){return new this.constructor(t.consolidate().toArray())},i.prototype.copyUsingObjectMap=function(t){var e,n;return n=function(){var n,i,o,r,s;for(o=this.getPieces(),s=[],n=0,i=o.length;i>n;n++)e=o[n],s.push(null!=(r=t.find(e))?r:e);return s}.call(this),new this.constructor(n)},i.prototype.appendText=function(t){return this.insertTextAtPosition(t,this.getLength())},i.prototype.insertTextAtPosition=function(t,e){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,e))},i.prototype.removeTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))},i.prototype.replaceTextAtRange=function(t,e){return this.removeTextAtRange(e).insertTextAtPosition(t,e[0])},i.prototype.moveTextFromRangeToPosition=function(t,e){var n,i;if(!(t[0]<=e&&e<=t[1]))return i=this.getTextAtRange(t),n=i.getLength(),t[0]<e&&(e-=n),this.removeTextAtRange(t).insertTextAtPosition(i,e)},i.prototype.addAttributeAtRange=function(t,e,n){var i;return i={},i[t]=e,this.addAttributesAtRange(i,n)},i.prototype.addAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAdditionalAttributes(t)}))},i.prototype.removeAttributeAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithoutAttribute(t)}))},i.prototype.setAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAttributes(t)}))},i.prototype.getAttributesAtPosition=function(t){var e,n;return null!=(e=null!=(n=this.pieceList.getObjectAtPosition(t))?n.getAttributes():void 0)?e:{}
},i.prototype.getCommonAttributes=function(){var t,n;return t=function(){var t,e,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.getAttributes());return o}.call(this),e.Hash.fromCommonAttributesOfObjects(t).toObject()},i.prototype.getCommonAttributesAtRange=function(t){var e;return null!=(e=this.getTextAtRange(t).getCommonAttributes())?e:{}},i.prototype.getExpandedRangeForAttributeAtOffset=function(t,e){var n,i,o;for(n=o=e,i=this.getLength();n>0&&this.getCommonAttributesAtRange([n-1,o])[t];)n--;for(;i>o&&this.getCommonAttributesAtRange([e,o+1])[t];)o++;return[n,o]},i.prototype.getTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))},i.prototype.getStringAtRange=function(t){return this.pieceList.getSplittableListInRange(t).toString()},i.prototype.getStringAtPosition=function(t){return this.getStringAtRange([t,t+1])},i.prototype.startsWithString=function(t){return this.getStringAtRange([0,t.length])===t},i.prototype.endsWithString=function(t){var e;return e=this.getLength(),this.getStringAtRange([e-t.length,e])===t},i.prototype.getAttachmentPieces=function(){var t,e,n,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],null!=n.attachment&&o.push(n);return o},i.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},i.prototype.getAttachmentAndPositionById=function(t){var e,n,i,o,r,s;for(o=0,r=this.pieceList.toArray(),e=0,n=r.length;n>e;e++){if(i=r[e],(null!=(s=i.attachment)?s.id:void 0)===t)return{attachment:i.attachment,position:o};o+=i.length}return{attachment:null,position:null}},i.prototype.getAttachmentById=function(t){var e,n,i;return i=this.getAttachmentAndPositionById(t),e=i.attachment,n=i.position,e},i.prototype.getRangeOfAttachment=function(t){var e,n;return n=this.getAttachmentAndPositionById(t.id),t=n.attachment,e=n.position,null!=t?[e,e+1]:void 0},i.prototype.updateAttributesForAttachment=function(t,e){var n;return(n=this.getRangeOfAttachment(e))?this.addAttributesAtRange(t,n):this},i.prototype.getLength=function(){return this.pieceList.getEndPosition()},i.prototype.isEmpty=function(){return 0===this.getLength()},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)||(null!=t&&null!=(e=t.pieceList)?e.isEqualTo(this.pieceList):void 0)},i.prototype.isBlockBreak=function(){return 1===this.getLength()&&this.pieceList.getObjectAtIndex(0).isBlockBreak()},i.prototype.eachPiece=function(t){return this.pieceList.eachObject(t)},i.prototype.getPieces=function(){return this.pieceList.toArray()},i.prototype.getPieceAtPosition=function(t){return this.pieceList.getObjectAtPosition(t)},i.prototype.contentsForInspection=function(){return{pieceList:this.pieceList.inspect()}},i.prototype.toSerializableText=function(){var t;return t=this.pieceList.selectSplittableList(function(t){return t.isSerializable()}),this.copyWithPieceList(t)},i.prototype.toString=function(){return this.pieceList.toString()},i.prototype.toJSON=function(){return this.pieceList.toJSON()},i.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.pieceList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.toConsole()));return o}.call(this))},i}(e.Object)}.call(this),function(){var t,n,i,o,r,s=function(t,e){function n(){this.constructor=t}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=[].slice;t=e.arraysAreEqual,r=e.spliceArray,i=e.getBlockConfig,n=e.getBlockAttributeNames,o=e.getListAttributeNames,e.Block=function(n){function a(t,n){null==t&&(t=new e.Text),null==n&&(n=[]),a.__super__.constructor.apply(this,arguments),this.text=h(t),this.attributes=n}var l,h,p,d,f,g,m,v,y;return s(a,n),a.fromJSON=function(t){var n;return n=e.Text.fromJSON(t.text),new this(n,t.attributes)},a.prototype.isEmpty=function(){return this.text.isBlockBreak()},a.prototype.isEqualTo=function(e){return a.__super__.isEqualTo.apply(this,arguments)||this.text.isEqualTo(null!=e?e.text:void 0)&&t(this.attributes,null!=e?e.attributes:void 0)},a.prototype.copyWithText=function(t){return new this.constructor(t,this.attributes)},a.prototype.copyWithoutText=function(){return this.copyWithText(null)},a.prototype.copyWithAttributes=function(t){return new this.constructor(this.text,t)},a.prototype.copyWithoutAttributes=function(){return this.copyWithAttributes(null)},a.prototype.copyUsingObjectMap=function(t){var e;return this.copyWithText((e=t.find(this.text))?e:this.text.copyUsingObjectMap(t))},a.prototype.addAttribute=function(t){var e;return e=this.attributes.concat(d(t)),this.copyWithAttributes(e)},a.prototype.removeAttribute=function(t){var e,n;return n=i(t).listAttribute,e=g(g(this.attributes,t),n),this.copyWithAttributes(e)},a.prototype.removeLastAttribute=function(){return this.removeAttribute(this.getLastAttribute())},a.prototype.getLastAttribute=function(){return f(this.attributes)},a.prototype.getAttributes=function(){return this.attributes.slice(0)},a.prototype.getAttributeLevel=function(){return this.attributes.length},a.prototype.getAttributeAtLevel=function(t){return this.attributes[t-1]},a.prototype.hasAttribute=function(t){return u.call(this.attributes,t)>=0},a.prototype.hasAttributes=function(){return this.getAttributeLevel()>0},a.prototype.getLastNestableAttribute=function(){return f(this.getNestableAttributes())},a.prototype.getNestableAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).nestable&&r.push(t);return r},a.prototype.getNestingLevel=function(){return this.getNestableAttributes().length},a.prototype.decreaseNestingLevel=function(){var t;return(t=this.getLastNestableAttribute())?this.removeAttribute(t):this},a.prototype.increaseNestingLevel=function(){var t,e,n;return(t=this.getLastNestableAttribute())?(n=this.attributes.lastIndexOf(t),e=r.apply(null,[this.attributes,n+1,0].concat(c.call(d(t)))),this.copyWithAttributes(e)):this},a.prototype.getListItemAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).listAttribute&&r.push(t);return r},a.prototype.isListItem=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.listAttribute:void 0},a.prototype.isTerminalBlock=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.terminal:void 0},a.prototype.breaksOnReturn=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.breakOnReturn:void 0},a.prototype.findLineBreakInDirectionFromPosition=function(t,e){var n,i;return i=this.toString(),n=function(){switch(t){case"forward":return i.indexOf("\n",e);case"backward":return i.slice(0,e).lastIndexOf("\n")}}(),-1!==n?n:void 0},a.prototype.contentsForInspection=function(){return{text:this.text.inspect(),attributes:this.attributes}},a.prototype.toString=function(){return this.text.toString()},a.prototype.toJSON=function(){return{text:this.text,attributes:this.attributes}},a.prototype.getLength=function(){return this.text.getLength()},a.prototype.canBeConsolidatedWith=function(t){return!this.hasAttributes()&&!t.hasAttributes()},a.prototype.consolidateWith=function(t){var n,i;return n=e.Text.textForStringWithAttributes("\n"),i=this.getTextWithoutBlockBreak().appendText(n),this.copyWithText(i.appendText(t.text))},a.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.getLength()?(e=this,n=null):(e=this.copyWithText(this.text.getTextAtRange([0,t])),n=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[e,n]},a.prototype.getBlockBreakPosition=function(){return this.text.getLength()-1},a.prototype.getTextWithoutBlockBreak=function(){return m(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()},a.prototype.canBeGrouped=function(t){return this.attributes[t]},a.prototype.canBeGroupedWith=function(t,e){var n,r,s,a;return s=t.getAttributes(),r=s[e],n=this.attributes[e],n===r&&!(i(n).group===!1&&(a=s[e+1],u.call(o(),a)<0))},h=function(t){return t=y(t),t=l(t)},y=function(t){var n,i,o,r,s,a;return r=!1,a=t.getPieces(),i=2<=a.length?c.call(a,0,n=a.length-1):(n=0,[]),o=a[n++],null==o?t:(i=function(){var t,e,n;for(n=[],t=0,e=i.length;e>t;t++)s=i[t],s.isBlockBreak()?(r=!0,n.push(v(s))):n.push(s);return n}(),r?new e.Text(c.call(i).concat([o])):t)},p=e.Text.textForStringWithAttributes("\n",{blockBreak:!0}),l=function(t){return m(t)?t:t.appendText(p)},m=function(t){var e,n;return n=t.getLength(),0===n?!1:(e=t.getTextAtRange([n-1,n]),e.isBlockBreak())},v=function(t){return t.copyWithoutAttribute("blockBreak")},d=function(t){var e;return e=i(t).listAttribute,null!=e?[e,t]:[t]},f=function(t){return t.slice(-1)[0]},g=function(t,e){var n;return n=t.lastIndexOf(e),-1===n?t:r(t,n,1)},a}(e.Object)}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},a=[].slice;n=e.tagName,i=e.walkTree,t=e.nodeIsAttachmentElement,e.HTMLSanitizer=function(r){function u(t,e){var n;n=null!=e?e:{},this.allowedAttributes=n.allowedAttributes,this.forbiddenProtocols=n.forbiddenProtocols,null==this.allowedAttributes&&(this.allowedAttributes=c),null==this.forbiddenProtocols&&(this.forbiddenProtocols=l),this.body=h(t)}var c,l,h,p;return o(u,r),c="style href src width height class".split(" "),l="javascript:".split(" "),u.sanitize=function(t,e){var n;return n=new this(t,e),n.sanitize(),n},u.prototype.sanitize=function(){return this.sanitizeElements(),this.normalizeListElementNesting()},u.prototype.getHTML=function(){return this.body.innerHTML},u.prototype.getBody=function(){return this.body},u.prototype.sanitizeElements=function(){var t,n,o,r,s;for(s=i(this.body),r=[];s.nextNode();)switch(o=s.currentNode,o.nodeType){case Node.ELEMENT_NODE:p(o)?r.push(o):this.sanitizeElement(o);break;case Node.COMMENT_NODE:r.push(o)}for(t=0,n=r.length;n>t;t++)o=r[t],e.removeNode(o);return this.body},u.prototype.sanitizeElement=function(t){var e,n,i,o,r;for(t.hasAttribute("href")&&(o=t.protocol,s.call(this.forbiddenProtocols,o)>=0&&t.removeAttribute("href")),r=a.call(t.attributes),e=0,n=r.length;n>e;e++)i=r[e].name,s.call(this.allowedAttributes,i)>=0||0===i.indexOf("data-trix")||t.removeAttribute(i);return t},u.prototype.normalizeListElementNesting=function(){var t,e,i,o,r;for(r=a.call(this.body.querySelectorAll("ul,ol")),t=0,e=r.length;e>t;t++)i=r[t],(o=i.previousElementSibling)&&"li"===n(o)&&o.appendChild(i);return this.body},p=function(e){return(null!=e?e.nodeType:void 0)!==Node.ELEMENT_NODE||t(e)?void 0:"script"===n(e)||"false"===e.getAttribute("data-trix-serialize")},h=function(t){var e,n,i,o,r;for(null==t&&(t=""),t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>"),e=document.implementation.createHTMLDocument(""),e.documentElement.innerHTML=t,r=e.head.querySelectorAll("style"),i=0,o=r.length;o>i;i++)n=r[i],e.body.appendChild(n);return e.body},u}(e.BasicObject)}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p=function(t,e){function n(){this.constructor=t}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty,f=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.arraysAreEqual,s=e.makeElement,l=e.tagName,r=e.getBlockTagNames,h=e.walkTree,o=e.findClosestElementFromNode,i=e.elementContainsNode,a=e.nodeIsAttachmentElement,u=e.normalizeSpaces,n=e.breakableWhitespacePattern,c=e.squishBreakableWhitespace,e.HTMLParser=function(d){function g(t,e){this.html=t,this.referenceElement=(null!=e?e:{}).referenceElement,this.blocks=[],this.blockElements=[],this.processedElements=[]}var m,v,y,b,A,C,x,w,E,S,R,k;return p(g,d),g.parse=function(t,e){var n;return n=new this(t,e),n.parse(),n},g.prototype.getDocument=function(){return e.Document.fromJSON(this.blocks)},g.prototype.parse=function(){var t,n;try{for(this.createHiddenContainer(),t=e.HTMLSanitizer.sanitize(this.html).getHTML(),this.containerElement.innerHTML=t,n=h(this.containerElement,{usingFilter:w});n.nextNode();)this.processNode(n.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer()}},g.prototype.createHiddenContainer=function(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=s({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))},g.prototype.removeHiddenContainer=function(){return e.removeNode(this.containerElement)},w=function(t){return"style"===l(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},g.prototype.processNode=function(t){switch(t.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t))return this.appendBlockForTextNode(t),this.processTextNode(t);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}},g.prototype.appendBlockForTextNode=function(e){var n,i,o;return i=e.parentNode,i===this.currentBlockElement||i!==this.containerElement&&!this.isBlockElement(i)?void 0:(n=this.getBlockAttributes(i),t(n,null!=(o=this.currentBlock)?o.attributes:void 0)?void 0:(this.currentBlock=this.appendBlockForAttributesWithElement(n,i),this.currentBlockElement=i))},g.prototype.appendBlockForElement=function(e){var n,o,r,s;if(r=this.isBlockElement(e),o=i(this.currentBlockElement,e),r&&!this.isBlockElement(e.firstChild)){if(!(this.isInsignificantTextNode(e.firstChild)&&this.isBlockElement(e.firstElementChild)||(n=this.getBlockAttributes(e),o&&t(n,this.currentBlock.attributes))))return this.currentBlock=this.appendBlockForAttributesWithElement(n,e),this.currentBlockElement=e}else if(this.currentBlockElement&&!o&&!r)return(s=this.findParentBlockElement(e))?this.appendBlockForElement(s):(this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null)},g.prototype.findParentBlockElement=function(t){var e;for(e=t.parentElement;e&&e!==this.containerElement;){if(this.isBlockElement(e)&&f.call(this.blockElements,e)>=0)return e;e=e.parentElement}return null},g.prototype.processTextNode=function(t){var e,n;return n=t.data,v(t.parentNode)||(n=c(n),R(null!=(e=t.previousSibling)?e.textContent:void 0)&&(n=C(n))),this.appendStringWithAttributes(n,this.getTextAttributes(t.parentNode))},g.prototype.processElement=function(t){var e,n,i,o,r;if(a(t))return e=y(t),Object.keys(e).length&&(o=this.getTextAttributes(t),this.appendAttachmentWithAttributes(e,o),t.innerHTML=""),this.processedElements.push(t);switch(l(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t)),this.processedElements.push(t);case"img":e={url:t.getAttribute("src"),contentType:"image"},i=A(t);for(n in i)r=i[n],e[n]=r;return this.appendAttachmentWithAttributes(e,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes("\n");break;case"td":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes(" | ")}},g.prototype.appendBlockForAttributesWithElement=function(t,e){var n;return this.blockElements.push(e),n=m(t),this.blocks.push(n),n},g.prototype.appendEmptyBlock=function(){return this.appendBlockForAttributesWithElement([],null)},g.prototype.appendStringWithAttributes=function(t,e){return this.appendPiece(S(t,e))},g.prototype.appendAttachmentWithAttributes=function(t,e){return this.appendPiece(E(t,e))},g.prototype.appendPiece=function(t){return 0===this.blocks.length&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)},g.prototype.appendStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[i.length-1],"string"===(null!=n?n.type:void 0)?n.string+=t:i.push(S(t))},g.prototype.prependStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[0],"string"===(null!=n?n.type:void 0)?n.string=t+n.string:i.unshift(S(t))},S=function(t,e){var n;return null==e&&(e={}),n="string",t=u(t),{string:t,attributes:e,type:n}},E=function(t,e){var n;return null==e&&(e={}),n="attachment",{attachment:t,attributes:e,type:n}},m=function(t){var e;return null==t&&(t={}),e=[],{text:e,attributes:t}},g.prototype.getTextAttributes=function(t){var n,i,r,s,u,c,l,h,p,d,f,g,m;r={},d=e.config.textAttributes;for(n in d)if(u=d[n],u.tagName&&o(t,{matchingSelector:u.tagName,untilNode:this.containerElement}))r[n]=!0;else if(u.parser){if(m=u.parser(t)){for(i=!1,f=this.findBlockElementAncestors(t),c=0,p=f.length;p>c;c++)if(s=f[c],u.parser(s)===m){i=!0;break}i||(r[n]=m)}}else u.styleProperty&&(m=t.style[u.styleProperty])&&(r[n]=m);if(a(t)&&(l=t.getAttribute("data-trix-attributes"))){g=JSON.parse(l);for(h in g)m=g[h],r[h]=m}return r},g.prototype.getBlockAttributes=function(t){var n,i,o,r;for(i=[];t&&t!==this.containerElement;){r=e.config.blockAttributes;for(n in r)o=r[n],o.parse!==!1&&l(t)===o.tagName&&(("function"==typeof o.test?o.test(t):void 0)||!o.test)&&(i.push(n),o.listAttribute&&i.push(o.listAttribute));t=t.parentNode}return i.reverse()},g.prototype.findBlockElementAncestors=function(t){var e,n;for(e=[];t&&t!==this.containerElement;)n=l(t),f.call(r(),n)>=0&&e.push(t),t=t.parentNode;return e},y=function(t){return JSON.parse(t.getAttribute("data-trix-attachment"))},A=function(t){var e,n,i;return i=t.getAttribute("width"),n=t.getAttribute("height"),e={},i&&(e.width=parseInt(i,10)),n&&(e.height=parseInt(n,10)),e},g.prototype.isBlockElement=function(t){var e;if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE&&!a(t)&&!o(t,{matchingSelector:"td",untilNode:this.containerElement}))return e=l(t),f.call(r(),e)>=0||"block"===window.getComputedStyle(t).display},g.prototype.isInsignificantTextNode=function(t){var e,n,i;if((null!=t?t.nodeType:void 0)===Node.TEXT_NODE&&k(t.data)&&(n=t.parentNode,i=t.previousSibling,e=t.nextSibling,(!x(n.previousSibling)||this.isBlockElement(n.previousSibling))&&!v(n)))return!i||this.isBlockElement(i)||!e||this.isBlockElement(e)},g.prototype.isExtraBR=function(t){return"br"===l(t)&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t},v=function(t){var e;return e=window.getComputedStyle(t).whiteSpace,"pre"===e||"pre-wrap"===e||"pre-line"===e},x=function(t){return t&&!R(t.textContent)},g.prototype.translateBlockElementMarginsToNewlines=function(){var t,e,n,i,o,r,s,a;for(e=this.getMarginOfDefaultBlockElement(),s=this.blocks,a=[],i=n=0,o=s.length;o>n;i=++n)t=s[i],(r=this.getMarginOfBlockElementAtIndex(i))&&(r.top>2*e.top&&this.prependStringToTextAtIndex("\n",i),a.push(r.bottom>2*e.bottom?this.appendStringToTextAtIndex("\n",i):void 0));return a},g.prototype.getMarginOfBlockElementAtIndex=function(t){var e,n;return!(e=this.blockElements[t])||!e.textContent||(n=l(e),f.call(r(),n)>=0||f.call(this.processedElements,e)>=0)?void 0:b(e)},g.prototype.getMarginOfDefaultBlockElement=function(){var t;return t=s(e.config.blockAttributes["default"].tagName),this.containerElement.appendChild(t),b(t)},b=function(t){var e;return e=window.getComputedStyle(t),"block"===e.display?{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}:void 0},C=function(t){return t.replace(RegExp("^"+n.source+"+"),"")},k=function(t){return RegExp("^"+n.source+"*$").test(t)},R=function(t){return/\s$/.test(t)},g}(e.BasicObject)}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.arraysAreEqual,i=e.normalizeRange,o=e.rangeIsCollapsed,n=e.getBlockConfig,e.Document=function(s){function c(t){null==t&&(t=[]),c.__super__.constructor.apply(this,arguments),0===t.length&&(t=[new e.Block]),this.blockList=e.SplittableList.box(t)}var l;return r(c,s),c.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Block.fromJSON(n));return r}(),new this(i)},c.fromHTML=function(t,n){return e.HTMLParser.parse(t,n).getDocument()},c.fromString=function(t,n){var i;return i=e.Text.textForStringWithAttributes(t,n),new this([new e.Block(i)])},c.prototype.isEmpty=function(){var t;return 1===this.blockList.length&&(t=this.getBlockAtIndex(0),t.isEmpty()&&!t.hasAttributes())},c.prototype.copy=function(t){var e;return null==t&&(t={}),e=t.consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray(),new this.constructor(e)},c.prototype.copyUsingObjectsFromDocument=function(t){var n;return n=new e.ObjectMap(t.getObjects()),this.copyUsingObjectMap(n)},c.prototype.copyUsingObjectMap=function(t){var e,n,i;return n=function(){var n,o,r,s;for(r=this.getBlocks(),s=[],n=0,o=r.length;o>n;n++)e=r[n],s.push((i=t.find(e))?i:e.copyUsingObjectMap(t));return s}.call(this),new this.constructor(n)},c.prototype.copyWithBaseBlockAttributes=function(t){var e,n,i;return null==t&&(t=[]),i=function(){var i,o,r,s;for(r=this.getBlocks(),s=[],i=0,o=r.length;o>i;i++)n=r[i],e=t.concat(n.getAttributes()),s.push(n.copyWithAttributes(e));return s}.call(this),new this.constructor(i)},c.prototype.replaceBlock=function(t,e){var n;return n=this.blockList.indexOf(t),-1===n?this:new this.constructor(this.blockList.replaceObjectAtIndex(e,n))},c.prototype.insertDocumentAtRange=function(t,e){var n,r,s,a,u,c,l;return r=t.blockList,u=(e=i(e))[0],c=this.locationFromPosition(u),s=c.index,a=c.offset,l=this,n=this.getBlockAtPosition(u),o(e)&&n.isEmpty()&&!n.hasAttributes()?l=new this.constructor(l.blockList.removeObjectAtIndex(s)):n.getBlockBreakPosition()===a&&u++,l=l.removeTextAtRange(e),new this.constructor(l.blockList.insertSplittableListAtPosition(r,u))},c.prototype.mergeDocumentAtRange=function(e,n){var o,r,s,a,u,c,l,h,p,d,f,g;return f=(n=i(n))[0],d=this.locationFromPosition(f),r=this.getBlockAtIndex(d.index).getAttributes(),o=e.getBaseBlockAttributes(),g=r.slice(-o.length),t(o,g)?(l=r.slice(0,-o.length),c=e.copyWithBaseBlockAttributes(l)):c=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(r),s=c.getBlockCount(),a=c.getBlockAtIndex(0),t(r,a.getAttributes())?(u=a.getTextWithoutBlockBreak(),p=this.insertTextAtRange(u,n),s>1&&(c=new this.constructor(c.getBlocks().slice(1)),h=f+u.getLength(),p=p.insertDocumentAtRange(c,h))):p=this.insertDocumentAtRange(c,n),p},c.prototype.insertTextAtRange=function(t,e){var n,o,r,s,a;return a=(e=i(e))[0],s=this.locationFromPosition(a),o=s.index,r=s.offset,n=this.removeTextAtRange(e),new this.constructor(n.blockList.editObjectAtIndex(o,function(e){return e.copyWithText(e.text.insertTextAtPosition(t,r))}))},c.prototype.removeTextAtRange=function(t){var e,n,r,s,a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;return p=t=i(t),l=p[0],A=p[1],o(t)?this:(d=this.locationRangeFromRange(t),u=d[0],y=d[1],a=u.index,c=u.offset,s=this.getBlockAtIndex(a),v=y.index,b=y.offset,m=this.getBlockAtIndex(v),f=A-l===1&&s.getBlockBreakPosition()===c&&m.getBlockBreakPosition()!==b&&"\n"===m.text.getStringAtPosition(b),f?r=this.blockList.editObjectAtIndex(v,function(t){return t.copyWithText(t.text.removeTextAtRange([b,b+1]))}):(h=s.text.getTextAtRange([0,c]),C=m.text.getTextAtRange([b,m.getLength()]),x=h.appendText(C),g=a!==v&&0===c,w=g&&s.getAttributeLevel()>=m.getAttributeLevel(),n=w?m.copyWithText(x):s.copyWithText(x),e=v+1-a,r=this.blockList.splice(a,e,n)),new this.constructor(r))},c.prototype.moveTextFromRangeToPosition=function(t,e){var n,o,r,s,u,c,l,h,p,d;return c=t=i(t),p=c[0],r=c[1],e>=p&&r>=e?this:(o=this.getDocumentAtRange(t),h=this.removeTextAtRange(t),u=e>p,u&&(e-=o.getLength()),l=o.getBlocks(),s=l[0],n=2<=l.length?a.call(l,1):[],0===n.length?(d=s.getTextWithoutBlockBreak(),u&&(e+=1)):d=s.text,h=h.insertTextAtRange(d,e),0===n.length?h:(o=new this.constructor(n),e+=d.getLength(),h.insertDocumentAtRange(o,e)))},c.prototype.addAttributeAtRange=function(t,e,i){var o;return o=this.blockList,this.eachBlockAtRange(i,function(i,r,s){return o=o.editObjectAtIndex(s,function(){return n(t)?i.addAttribute(t,e):r[0]===r[1]?i:i.copyWithText(i.text.addAttributeAtRange(t,e,r))})}),new this.constructor(o)},c.prototype.addAttribute=function(t,e){var n;return n=this.blockList,this.eachBlock(function(i,o){return n=n.editObjectAtIndex(o,function(){return i.addAttribute(t,e)})}),new this.constructor(n)},c.prototype.removeAttributeAtRange=function(t,e){var i;return i=this.blockList,this.eachBlockAtRange(e,function(e,o,r){return n(t)?i=i.editObjectAtIndex(r,function(){return e.removeAttribute(t)}):o[0]!==o[1]?i=i.editObjectAtIndex(r,function(){return e.copyWithText(e.text.removeAttributeAtRange(t,o))}):void 0}),new this.constructor(i)},c.prototype.updateAttributesForAttachment=function(t,e){var n,i,o,r;return o=(i=this.getRangeOfAttachment(e))[0],n=this.locationFromPosition(o).index,r=this.getTextAtIndex(n),new this.constructor(this.blockList.editObjectAtIndex(n,function(n){return n.copyWithText(r.updateAttributesForAttachment(t,e))}))},c.prototype.removeAttributeForAttachment=function(t,e){var n;return n=this.getRangeOfAttachment(e),this.removeAttributeAtRange(t,n)},c.prototype.insertBlockBreakAtRange=function(t){var n,o,r,s;return s=(t=i(t))[0],r=this.locationFromPosition(s).offset,o=this.removeTextAtRange(t),0===r&&(n=[new e.Block]),new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n),s))},c.prototype.applyBlockAttributeAtRange=function(t,e,i){var o,r,s,a;return s=this.expandRangeToLineBreaksAndSplitBlocks(i),r=s.document,i=s.range,o=n(t),o.listAttribute?(r=r.removeLastListAttributeAtRange(i,{exceptAttributeName:t}),a=r.convertLineBreaksToBlockBreaksInRange(i),r=a.document,i=a.range):r=o.exclusive?r.removeBlockAttributesAtRange(i):o.terminal?r.removeLastTerminalAttributeAtRange(i):r.consolidateBlocksAtRange(i),r.addAttributeAtRange(t,e,i)},c.prototype.removeLastListAttributeAtRange=function(t,e){var i;return null==e&&(e={}),i=this.blockList,this.eachBlockAtRange(t,function(t,o,r){var s;if((s=t.getLastAttribute())&&n(s).listAttribute&&s!==e.exceptAttributeName)return i=i.editObjectAtIndex(r,function(){return t.removeAttribute(s)})}),new this.constructor(i)},c.prototype.removeLastTerminalAttributeAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,i,o){var r;if((r=t.getLastAttribute())&&n(r).terminal)return e=e.editObjectAtIndex(o,function(){return t.removeAttribute(r)})}),new this.constructor(e)},c.prototype.removeBlockAttributesAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,n,i){return t.hasAttributes()?e=e.editObjectAtIndex(i,function(){return t.copyWithoutAttributes()}):void 0}),new this.constructor(e)},c.prototype.expandRangeToLineBreaksAndSplitBlocks=function(t){var e,n,o,r,s,a,u,c,l;return a=t=i(t),l=a[0],r=a[1],c=this.locationFromPosition(l),o=this.locationFromPosition(r),e=this,u=e.getBlockAtIndex(c.index),null!=(c.offset=u.findLineBreakInDirectionFromPosition("backward",c.offset))&&(s=e.positionFromLocation(c),e=e.insertBlockBreakAtRange([s,s+1]),o.index+=1,o.offset-=e.getBlockAtIndex(c.index).getLength(),c.index+=1),c.offset=0,0===o.offset&&o.index>c.index?(o.index-=1,o.offset=e.getBlockAtIndex(o.index).getBlockBreakPosition()):(n=e.getBlockAtIndex(o.index),"\n"===n.text.getStringAtRange([o.offset-1,o.offset])?o.offset-=1:o.offset=n.findLineBreakInDirectionFromPosition("forward",o.offset),o.offset!==n.getBlockBreakPosition()&&(s=e.positionFromLocation(o),e=e.insertBlockBreakAtRange([s,s+1]))),l=e.positionFromLocation(c),r=e.positionFromLocation(o),t=i([l,r]),{document:e,range:t}},c.prototype.convertLineBreaksToBlockBreaksInRange=function(t){var e,n,o;return n=(t=i(t))[0],o=this.getStringAtRange(t).slice(0,-1),e=this,o.replace(/.*?\n/g,function(t){return n+=t.length,e=e.insertBlockBreakAtRange([n-1,n])}),{document:e,range:t}},c.prototype.consolidateBlocksAtRange=function(t){var e,n,o,r,s;return o=t=i(t),s=o[0],n=o[1],r=this.locationFromPosition(s).index,e=this.locationFromPosition(n).index,new this.constructor(this.blockList.consolidateFromIndexToIndex(r,e))},c.prototype.getDocumentAtRange=function(t){var e;return t=i(t),e=this.blockList.getSplittableListInRange(t).toArray(),new this.constructor(e)},c.prototype.getStringAtRange=function(t){var e,n,o;return o=t=i(t),n=o[o.length-1],n!==this.getLength()&&(e=-1),this.getDocumentAtRange(t).toString().slice(0,e)},c.prototype.getBlockAtIndex=function(t){return this.blockList.getObjectAtIndex(t)},c.prototype.getBlockAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getBlockAtIndex(e)},c.prototype.getTextAtIndex=function(t){var e;return null!=(e=this.getBlockAtIndex(t))?e.text:void 0},c.prototype.getTextAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getTextAtIndex(e)},c.prototype.getPieceAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getPieceAtPosition(n)},c.prototype.getCharacterAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getStringAtRange([n,n+1])},c.prototype.getLength=function(){return this.blockList.getEndPosition()},c.prototype.getBlocks=function(){return this.blockList.toArray()},c.prototype.getBlockCount=function(){return this.blockList.length},c.prototype.getEditCount=function(){return this.editCount},c.prototype.eachBlock=function(t){return this.blockList.eachObject(t)},c.prototype.eachBlockAtRange=function(t,e){var n,o,r,s,a,u,c,l,h,p,d,f;if(u=t=i(t),d=u[0],r=u[1],p=this.locationFromPosition(d),o=this.locationFromPosition(r),p.index===o.index)return n=this.getBlockAtIndex(p.index),f=[p.offset,o.offset],e(n,f,p.index);for(h=[],a=s=c=p.index,l=o.index;l>=c?l>=s:s>=l;a=l>=c?++s:--s)(n=this.getBlockAtIndex(a))?(f=function(){switch(a){case p.index:return[p.offset,n.text.getLength()];case o.index:return[0,o.offset];default:return[0,n.text.getLength()]}}(),h.push(e(n,f,a))):h.push(void 0);return h},c.prototype.getCommonAttributesAtRange=function(t){var n,r,s;return r=(t=i(t))[0],o(t)?this.getCommonAttributesAtPosition(r):(s=[],n=[],this.eachBlockAtRange(t,function(t,e){return e[0]!==e[1]?(s.push(t.text.getCommonAttributesAtRange(e)),n.push(l(t))):void 0}),e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject())},c.prototype.getCommonAttributesAtPosition=function(t){var n,i,o,r,s,a,c,h,p,d;if(p=this.locationFromPosition(t),s=p.index,h=p.offset,o=this.getBlockAtIndex(s),!o)return{};r=l(o),n=o.text.getAttributesAtPosition(h),i=o.text.getAttributesAtPosition(h-1),a=function(){var t,n;t=e.config.textAttributes,n=[];for(c in t)d=t[c],d.inheritable&&n.push(c);return n}();for(c in i)d=i[c],(d===n[c]||u.call(a,c)>=0)&&(r[c]=d);return r},c.prototype.getRangeOfCommonAttributeAtPosition=function(t,e){var n,o,r,s,a,u,c,l,h;return a=this.locationFromPosition(e),r=a.index,s=a.offset,h=this.getTextAtIndex(r),u=h.getExpandedRangeForAttributeAtOffset(t,s),l=u[0],o=u[1],c=this.positionFromLocation({index:r,offset:l}),n=this.positionFromLocation({index:r,offset:o}),i([c,n])},c.prototype.getBaseBlockAttributes=function(){var t,e,n,i,o,r,s;for(t=this.getBlockAtIndex(0).getAttributes(),n=i=1,s=this.getBlockCount();s>=1?s>i:i>s;n=s>=1?++i:--i)e=this.getBlockAtIndex(n).getAttributes(),r=Math.min(t.length,e.length),t=function(){var n,i,s;for(s=[],o=n=0,i=r;(i>=0?i>n:n>i)&&e[o]===t[o];o=i>=0?++n:--n)s.push(e[o]);return s}();return t},l=function(t){var e,n;return n={},(e=t.getLastAttribute())&&(n[e]=!0),n},c.prototype.getAttachmentById=function(t){var e,n,i,o;for(o=this.getAttachments(),n=0,i=o.length;i>n;n++)if(e=o[n],e.id===t)return e},c.prototype.getAttachmentPieces=function(){var t;return t=[],this.blockList.eachObject(function(e){var n;return n=e.text,t=t.concat(n.getAttachmentPieces())}),t},c.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},c.prototype.getRangeOfAttachment=function(t){var e,n,o,r,s,a,u;for(r=0,s=this.blockList.toArray(),n=e=0,o=s.length;o>e;n=++e){if(a=s[n].text,u=a.getRangeOfAttachment(t))return i([r+u[0],r+u[1]]);r+=a.getLength()
}},c.prototype.getLocationRangeOfAttachment=function(t){var e;return e=this.getRangeOfAttachment(t),this.locationRangeFromRange(e)},c.prototype.getAttachmentPieceForAttachment=function(t){var e,n,i,o;for(o=this.getAttachmentPieces(),e=0,n=o.length;n>e;e++)if(i=o[e],i.attachment===t)return i},c.prototype.findRangesForBlockAttribute=function(t){var e,n,i,o,r,s,a;for(r=0,s=[],a=this.getBlocks(),n=0,i=a.length;i>n;n++)e=a[n],o=e.getLength(),e.hasAttribute(t)&&s.push([r,r+o]),r+=o;return s},c.prototype.findRangesForTextAttribute=function(t,e){var n,i,o,r,s,a,u,c,l,h;for(h=(null!=e?e:{}).withValue,a=0,u=[],c=[],r=function(e){return null!=h?e.getAttribute(t)===h:e.hasAttribute(t)},l=this.getPieces(),n=0,i=l.length;i>n;n++)s=l[n],o=s.getLength(),r(s)&&(u[1]===a?u[1]=a+o:c.push(u=[a,a+o])),a+=o;return c},c.prototype.locationFromPosition=function(t){var e,n;return n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t)),null!=n.index?n:(e=this.getBlocks(),{index:e.length-1,offset:e[e.length-1].getLength()})},c.prototype.positionFromLocation=function(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)},c.prototype.locationRangeFromPosition=function(t){return i(this.locationFromPosition(t))},c.prototype.locationRangeFromRange=function(t){var e,n,o,r;if(t=i(t))return r=t[0],n=t[1],o=this.locationFromPosition(r),e=this.locationFromPosition(n),i([o,e])},c.prototype.rangeFromLocationRange=function(t){var e,n;return t=i(t),e=this.positionFromLocation(t[0]),o(t)||(n=this.positionFromLocation(t[1])),i([e,n])},c.prototype.isEqualTo=function(t){return this.blockList.isEqualTo(null!=t?t.blockList:void 0)},c.prototype.getTexts=function(){var t,e,n,i,o;for(i=this.getBlocks(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.text);return o},c.prototype.getPieces=function(){var t,e,n,i,o;for(n=[],i=this.getTexts(),t=0,e=i.length;e>t;t++)o=i[t],n.push.apply(n,o.getPieces());return n},c.prototype.getObjects=function(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())},c.prototype.toSerializableDocument=function(){var t;return t=[],this.blockList.eachObject(function(e){return t.push(e.copyWithText(e.text.toSerializableText()))}),new this.constructor(t)},c.prototype.toString=function(){return this.blockList.toString()},c.prototype.toJSON=function(){return this.blockList.toJSON()},c.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.blockList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.text.toConsole()));return o}.call(this))},c}(e.Object)}.call(this),function(){e.LineBreakInsertion=function(){function t(t){var e;this.composition=t,this.document=this.composition.document,e=this.composition.getSelectedRange(),this.startPosition=e[0],this.endPosition=e[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset)}return t.prototype.shouldInsertBlockBreak=function(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?0!==this.startLocation.offset:this.breaksOnReturn&&"\n"!==this.nextCharacter},t.prototype.shouldBreakFormattedBlock=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&"\n"===this.nextCharacter||"\n"===this.previousCharacter)},t.prototype.shouldDecreaseListLevel=function(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()},t.prototype.shouldPrependListItem=function(){return this.block.isListItem()&&0===this.startLocation.offset&&!this.block.isEmpty()},t.prototype.shouldRemoveLastBlockAttribute=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()},t}()}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){function n(){this.constructor=t}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=e.normalizeRange,c=e.rangesAreEqual,u=e.rangeIsCollapsed,a=e.objectsAreEqual,t=e.arrayStartsWith,l=e.summarizeArrayChange,i=e.getAllAttributeNames,o=e.getBlockConfig,r=e.getTextConfig,n=e.extend,e.Composition=function(p){function d(){this.document=new e.Document,this.attachments=[],this.currentAttributes={},this.revision=0}var f;return h(d,p),d.prototype.setDocument=function(t){var e;return t.isEqualTo(this.document)?void 0:(this.document=t,this.refreshAttachments(),this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeDocument?e.compositionDidChangeDocument(t):void 0)},d.prototype.getSnapshot=function(){return{document:this.document,selectedRange:this.getSelectedRange()}},d.prototype.loadSnapshot=function(t){var n,i,o,r;return n=t.document,r=t.selectedRange,null!=(i=this.delegate)&&"function"==typeof i.compositionWillLoadSnapshot&&i.compositionWillLoadSnapshot(),this.setDocument(null!=n?n:new e.Document),this.setSelection(null!=r?r:[0,0]),null!=(o=this.delegate)&&"function"==typeof o.compositionDidLoadSnapshot?o.compositionDidLoadSnapshot():void 0},d.prototype.insertText=function(t,e){var n,i,o,r;return r=(null!=e?e:{updatePosition:!0}).updatePosition,i=this.getSelectedRange(),this.setDocument(this.document.insertTextAtRange(t,i)),o=i[0],n=o+t.getLength(),r&&this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertBlock=function(t){var n;return null==t&&(t=new e.Block),n=new e.Document([t]),this.insertDocument(n)},d.prototype.insertDocument=function(t){var n,i,o;return null==t&&(t=new e.Document),i=this.getSelectedRange(),this.setDocument(this.document.insertDocumentAtRange(t,i)),o=i[0],n=o+t.getLength(),this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertString=function(t,n){var i,o;return i=this.getCurrentTextAttributes(),o=e.Text.textForStringWithAttributes(t,i),this.insertText(o,n)},d.prototype.insertBlockBreak=function(){var t,e,n;return e=this.getSelectedRange(),this.setDocument(this.document.insertBlockBreakAtRange(e)),n=e[0],t=n+1,this.setSelection(t),this.notifyDelegateOfInsertionAtRange([n,t])},d.prototype.insertLineBreak=function(){var t,n;return n=new e.LineBreakInsertion(this),n.shouldDecreaseListLevel()?(this.decreaseListLevel(),this.setSelection(n.startPosition)):n.shouldPrependListItem()?(t=new e.Document([n.block.copyWithoutText()]),this.insertDocument(t)):n.shouldInsertBlockBreak()?this.insertBlockBreak():n.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():n.shouldBreakFormattedBlock()?this.breakFormattedBlock(n):this.insertString("\n")},d.prototype.insertHTML=function(t){var n,i,o,r;return n=e.Document.fromHTML(t),o=this.getSelectedRange(),this.setDocument(this.document.mergeDocumentAtRange(n,o)),r=o[0],i=r+n.getLength()-1,this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])},d.prototype.replaceHTML=function(t){var n,i,o;return n=e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document),i=this.getLocationRange({strict:!1}),o=this.document.rangeFromLocationRange(i),this.setDocument(n),this.setSelection(o)},d.prototype.insertFile=function(t){return this.insertFiles([t])},d.prototype.insertFiles=function(t){var n,i,o,r,s,a;for(i=[],r=0,s=t.length;s>r;r++)o=t[r],(null!=(a=this.delegate)?a.compositionShouldAcceptFile(o):void 0)&&(n=e.Attachment.attachmentForFile(o),i.push(n));return this.insertAttachments(i)},d.prototype.insertAttachment=function(t){return this.insertAttachments([t])},d.prototype.insertAttachments=function(t){var n,i,o,r,s,a,u,c,l;for(c=new e.Text,r=0,s=t.length;s>r;r++)n=t[r],l=n.getType(),a=null!=(u=e.config.attachments[l])?u.presentation:void 0,o=this.getCurrentTextAttributes(),a&&(o.presentation=a),i=e.Text.textForAttachmentWithAttributes(n,o),c=c.appendText(i);return this.insertText(c)},d.prototype.shouldManageDeletingInDirection=function(t){var e;if(e=this.getLocationRange(),u(e)){if("backward"===t&&0===e[0].offset)return!0;if(this.shouldManageMovingCursorInDirection(t))return!0}else if(e[0].index!==e[1].index)return!0;return!1},d.prototype.deleteInDirection=function(t,e){var n,i,o,r,s,a,c,l;return r=(null!=e?e:{}).length,s=this.getLocationRange(),a=this.getSelectedRange(),c=u(a),c?o="backward"===t&&0===s[0].offset:l=s[0].index!==s[1].index,o&&this.canDecreaseBlockAttributeLevel()&&(i=this.getBlock(),i.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(a[0]),i.isEmpty())?!1:(c&&(a=this.getExpandedRangeInDirection(t,{length:r}),"backward"===t&&(n=this.getAttachmentAtRange(a))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(a)),this.setSelection(a[0]),o||l?!1:void 0))},d.prototype.moveTextFromRange=function(t){var e;return e=this.getSelectedRange()[0],this.setDocument(this.document.moveTextFromRangeToPosition(t,e)),this.setSelection(e)},d.prototype.removeAttachment=function(t){var e;return(e=this.document.getRangeOfAttachment(t))?(this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e)),this.setSelection(e[0])):void 0},d.prototype.removeLastBlockAttribute=function(){var t,e,n,i;return n=this.getSelectedRange(),i=n[0],e=n[1],t=this.document.getBlockAtPosition(e),this.removeCurrentAttribute(t.getLastAttribute()),this.setSelection(i)},f=" ",d.prototype.insertPlaceholder=function(){return this.placeholderPosition=this.getPosition(),this.insertString(f)},d.prototype.selectPlaceholder=function(){return null!=this.placeholderPosition?(this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+f.length]),this.getSelectedRange()):void 0},d.prototype.forgetPlaceholder=function(){return this.placeholderPosition=null},d.prototype.hasCurrentAttribute=function(t){var e;return e=this.currentAttributes[t],null!=e&&e!==!1},d.prototype.toggleCurrentAttribute=function(t){var e;return(e=!this.currentAttributes[t])?this.setCurrentAttribute(t,e):this.removeCurrentAttribute(t)},d.prototype.canSetCurrentAttribute=function(t){return o(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)},d.prototype.canSetCurrentTextAttribute=function(){var t,e,n,i,o;if(e=this.getSelectedDocument()){for(o=e.getAttachments(),n=0,i=o.length;i>n;n++)if(t=o[n],!t.hasContent())return!1;return!0}},d.prototype.canSetCurrentBlockAttribute=function(){var t;if(t=this.getBlock())return!t.isTerminalBlock()},d.prototype.setCurrentAttribute=function(t,e){return o(t)?this.setBlockAttribute(t,e):(this.setTextAttribute(t,e),this.currentAttributes[t]=e,this.notifyDelegateOfCurrentAttributesChange())},d.prototype.setTextAttribute=function(t,n){var i,o,r,s;if(o=this.getSelectedRange())return r=o[0],i=o[1],r!==i?this.setDocument(this.document.addAttributeAtRange(t,n,o)):"href"===t?(s=e.Text.textForStringWithAttributes(n,{href:n}),this.insertText(s)):void 0},d.prototype.setBlockAttribute=function(t,e){var n,i;if(i=this.getSelectedRange())return this.canSetCurrentAttribute(t)?(n=this.getBlock(),this.setDocument(this.document.applyBlockAttributeAtRange(t,e,i)),this.setSelection(i)):void 0},d.prototype.removeCurrentAttribute=function(t){return o(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())},d.prototype.removeTextAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.removeBlockAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.canDecreaseNestingLevel=function(){var t;return(null!=(t=this.getBlock())?t.getNestingLevel():void 0)>0},d.prototype.canIncreaseNestingLevel=function(){var e,n,i;if(e=this.getBlock())return(null!=(i=o(e.getLastNestableAttribute()))?i.listAttribute:0)?(n=this.getPreviousBlock())?t(n.getListItemAttributes(),e.getListItemAttributes()):void 0:e.getNestingLevel()>0},d.prototype.decreaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))},d.prototype.increaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))},d.prototype.canDecreaseBlockAttributeLevel=function(){var t;return(null!=(t=this.getBlock())?t.getAttributeLevel():void 0)>0},d.prototype.decreaseBlockAttributeLevel=function(){var t,e;return(t=null!=(e=this.getBlock())?e.getLastAttribute():void 0)?this.removeCurrentAttribute(t):void 0},d.prototype.decreaseListLevel=function(){var t,e,n,i,o,r;for(r=this.getSelectedRange()[0],o=this.document.locationFromPosition(r).index,n=o,t=this.getBlock().getAttributeLevel();(e=this.document.getBlockAtIndex(n+1))&&e.isListItem()&&e.getAttributeLevel()>t;)n++;return r=this.document.positionFromLocation({index:o,offset:0}),i=this.document.positionFromLocation({index:n,offset:0}),this.setDocument(this.document.removeLastListAttributeAtRange([r,i]))},d.prototype.updateCurrentAttributes=function(){var t,e,n,o,r,s;if(s=this.getSelectedRange({ignoreLock:!0})){for(e=this.document.getCommonAttributesAtRange(s),r=i(),n=0,o=r.length;o>n;n++)t=r[n],e[t]||this.canSetCurrentAttribute(t)||(e[t]=!1);if(!a(e,this.currentAttributes))return this.currentAttributes=e,this.notifyDelegateOfCurrentAttributesChange()}},d.prototype.getCurrentAttributes=function(){return n.call({},this.currentAttributes)},d.prototype.getCurrentTextAttributes=function(){var t,e,n,i;t={},n=this.currentAttributes;for(e in n)i=n[e],i!==!1&&r(e)&&(t[e]=i);return t},d.prototype.freezeSelection=function(){return this.setCurrentAttribute("frozen",!0)},d.prototype.thawSelection=function(){return this.removeCurrentAttribute("frozen")},d.prototype.hasFrozenSelection=function(){return this.hasCurrentAttribute("frozen")},d.proxyMethod("getSelectionManager().getPointRange"),d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),d.proxyMethod("getSelectionManager().locationIsCursorTarget"),d.proxyMethod("getSelectionManager().selectionIsExpanded"),d.proxyMethod("delegate?.getSelectionManager"),d.prototype.setSelection=function(t){var e,n;return e=this.document.locationRangeFromRange(t),null!=(n=this.delegate)?n.compositionDidRequestChangingSelectionToLocationRange(e):void 0},d.prototype.getSelectedRange=function(){var t;return(t=this.getLocationRange())?this.document.rangeFromLocationRange(t):void 0},d.prototype.setSelectedRange=function(t){var e;return e=this.document.locationRangeFromRange(t),this.getSelectionManager().setLocationRange(e)},d.prototype.getPosition=function(){var t;return(t=this.getLocationRange())?this.document.positionFromLocation(t[0]):void 0},d.prototype.getLocationRange=function(t){var e,n;return null!=(e=null!=(n=this.targetLocationRange)?n:this.getSelectionManager().getLocationRange(t))?e:s({index:0,offset:0})},d.prototype.withTargetLocationRange=function(t,e){var n;this.targetLocationRange=t;try{n=e()}finally{this.targetLocationRange=null}return n},d.prototype.withTargetRange=function(t,e){var n;return n=this.document.locationRangeFromRange(t),this.withTargetLocationRange(n,e)},d.prototype.withTargetDOMRange=function(t,e){var n;return n=this.createLocationRangeFromDOMRange(t,{strict:!1}),this.withTargetLocationRange(n,e)},d.prototype.getExpandedRangeInDirection=function(t,e){var n,i,o,r;return i=(null!=e?e:{}).length,o=this.getSelectedRange(),r=o[0],n=o[1],"backward"===t?i?r-=i:r=this.translateUTF16PositionFromOffset(r,-1):i?n+=i:n=this.translateUTF16PositionFromOffset(n,1),s([r,n])},d.prototype.shouldManageMovingCursorInDirection=function(t){var e;return this.editingAttachment?!0:(e=this.getExpandedRangeInDirection(t),null!=this.getAttachmentAtRange(e))},d.prototype.moveCursorInDirection=function(t){var e,n,i,o;return this.editingAttachment?i=this.document.getRangeOfAttachment(this.editingAttachment):(o=this.getSelectedRange(),i=this.getExpandedRangeInDirection(t),n=!c(o,i)),this.setSelectedRange("backward"===t?i[0]:i[1]),n&&(e=this.getAttachmentAtRange(i))?this.editAttachment(e):void 0},d.prototype.expandSelectionInDirection=function(t,e){var n,i;return n=(null!=e?e:{}).length,i=this.getExpandedRangeInDirection(t,{length:n}),this.setSelectedRange(i)},d.prototype.expandSelectionForEditing=function(){return this.hasCurrentAttribute("href")?this.expandSelectionAroundCommonAttribute("href"):void 0},d.prototype.expandSelectionAroundCommonAttribute=function(t){var e,n;return e=this.getPosition(),n=this.document.getRangeOfCommonAttributeAtPosition(t,e),this.setSelectedRange(n)},d.prototype.selectionContainsAttachments=function(){var t;return(null!=(t=this.getSelectedAttachments())?t.length:void 0)>0},d.prototype.selectionIsInCursorTarget=function(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())},d.prototype.positionIsCursorTarget=function(t){var e;return(e=this.document.locationFromPosition(t))?this.locationIsCursorTarget(e):void 0},d.prototype.positionIsBlockBreak=function(t){var e;return null!=(e=this.document.getPieceAtPosition(t))?e.isBlockBreak():void 0},d.prototype.getSelectedDocument=function(){var t;return(t=this.getSelectedRange())?this.document.getDocumentAtRange(t):void 0},d.prototype.getSelectedAttachments=function(){var t;return null!=(t=this.getSelectedDocument())?t.getAttachments():void 0},d.prototype.getAttachments=function(){return this.attachments.slice(0)},d.prototype.refreshAttachments=function(){var t,e,n,i,o,r,s,a,u,c,h,p;for(n=this.document.getAttachments(),a=l(this.attachments,n),t=a.added,h=a.removed,this.attachments=n,i=0,r=h.length;r>i;i++)e=h[i],e.delegate=null,null!=(u=this.delegate)&&"function"==typeof u.compositionDidRemoveAttachment&&u.compositionDidRemoveAttachment(e);for(p=[],o=0,s=t.length;s>o;o++)e=t[o],e.delegate=this,p.push(null!=(c=this.delegate)&&"function"==typeof c.compositionDidAddAttachment?c.compositionDidAddAttachment(e):void 0);return p},d.prototype.attachmentDidChangeAttributes=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidEditAttachment?e.compositionDidEditAttachment(t):void 0},d.prototype.attachmentDidChangePreviewURL=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeAttachmentPreviewURL?e.compositionDidChangeAttachmentPreviewURL(t):void 0},d.prototype.editAttachment=function(t,e){var n;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,null!=(n=this.delegate)&&"function"==typeof n.compositionDidStartEditingAttachment?n.compositionDidStartEditingAttachment(this.editingAttachment,e):void 0},d.prototype.stopEditingAttachment=function(){var t;if(this.editingAttachment)return null!=(t=this.delegate)&&"function"==typeof t.compositionDidStopEditingAttachment&&t.compositionDidStopEditingAttachment(this.editingAttachment),this.editingAttachment=null},d.prototype.updateAttributesForAttachment=function(t,e){return this.setDocument(this.document.updateAttributesForAttachment(t,e))},d.prototype.removeAttributeForAttachment=function(t,e){return this.setDocument(this.document.removeAttributeForAttachment(t,e))},d.prototype.breakFormattedBlock=function(t){var n,i,o,r,s;return i=t.document,n=t.block,r=t.startPosition,s=[r-1,r],n.getBlockBreakPosition()===t.startLocation.offset?(n.breaksOnReturn()&&"\n"===t.nextCharacter?r+=1:i=i.removeTextAtRange(s),s=[r,r]):"\n"===t.nextCharacter?"\n"===t.previousCharacter?s=[r-1,r+1]:(s=[r,r+1],r+=1):t.startLocation.offset-1!==0&&(r+=1),o=new e.Document([n.removeLastAttribute().copyWithoutText()]),this.setDocument(i.insertDocumentAtRange(o,s)),this.setSelection(r)},d.prototype.getPreviousBlock=function(){var t,e;return(e=this.getLocationRange())&&(t=e[0].index,t>0)?this.document.getBlockAtIndex(t-1):void 0},d.prototype.getBlock=function(){var t;return(t=this.getLocationRange())?this.document.getBlockAtIndex(t[0].index):void 0},d.prototype.getAttachmentAtRange=function(t){var n;return n=this.document.getDocumentAtRange(t),n.toString()===e.OBJECT_REPLACEMENT_CHARACTER+"\n"?n.getAttachments()[0]:void 0},d.prototype.notifyDelegateOfCurrentAttributesChange=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.compositionDidChangeCurrentAttributes?t.compositionDidChangeCurrentAttributes(this.currentAttributes):void 0},d.prototype.notifyDelegateOfInsertionAtRange=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionDidPerformInsertionAtRange?e.compositionDidPerformInsertionAtRange(t):void 0},d.prototype.translateUTF16PositionFromOffset=function(t,e){var n,i;return i=this.document.toUTF16String(),n=i.offsetFromUCS2Offset(t),i.offsetToUCS2Offset(n+e)},d}(e.BasicObject)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.UndoManager=function(e){function n(t){this.composition=t,this.undoEntries=[],this.redoEntries=[]}var i;return t(n,e),n.prototype.recordUndoEntry=function(t,e){var n,o,r,s,a;return s=null!=e?e:{},o=s.context,n=s.consolidatable,r=this.undoEntries.slice(-1)[0],n&&i(r,t,o)?void 0:(a=this.createEntry({description:t,context:o}),this.undoEntries.push(a),this.redoEntries=[])},n.prototype.undo=function(){var t,e;return(e=this.undoEntries.pop())?(t=this.createEntry(e),this.redoEntries.push(t),this.composition.loadSnapshot(e.snapshot)):void 0},n.prototype.redo=function(){var t,e;return(t=this.redoEntries.pop())?(e=this.createEntry(t),this.undoEntries.push(e),this.composition.loadSnapshot(t.snapshot)):void 0},n.prototype.canUndo=function(){return this.undoEntries.length>0},n.prototype.canRedo=function(){return this.redoEntries.length>0},n.prototype.createEntry=function(t){var e,n,i;return i=null!=t?t:{},n=i.description,e=i.context,{description:null!=n?n.toString():void 0,context:JSON.stringify(e),snapshot:this.composition.getSnapshot()}},i=function(t,e,n){return(null!=t?t.description:void 0)===(null!=e?e.toString():void 0)&&(null!=t?t.context:void 0)===JSON.stringify(n)},n}(e.BasicObject)}.call(this),function(){var t;e.attachmentGalleryFilter=function(e){var n;return n=new t(e),n.perform(),n.getSnapshot()},t=function(){function t(t){this.document=t.document,this.selectedRange=t.selectedRange}var e,n,i;return e="attachmentGallery",n="presentation",i="gallery",t.prototype.perform=function(){return this.removeBlockAttribute(),this.applyBlockAttribute()},t.prototype.getSnapshot=function(){return{document:this.document,selectedRange:this.selectedRange}},t.prototype.removeBlockAttribute=function(){var t,n,i,o,r;for(o=this.findRangesOfBlocks(),r=[],t=0,n=o.length;n>t;t++)i=o[t],r.push(this.document=this.document.removeAttributeAtRange(e,i));return r},t.prototype.applyBlockAttribute=function(){var t,n,i,o,r,s;for(i=0,r=this.findRangesOfPieces(),s=[],t=0,n=r.length;n>t;t++)o=r[t],o[1]-o[0]>1&&(o[0]+=i,o[1]+=i,"\n"!==this.document.getCharacterAtPosition(o[1])&&(this.document=this.document.insertBlockBreakAtRange(o[1]),o[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),o[1]++,i++),0!==o[0]&&"\n"!==this.document.getCharacterAtPosition(o[0]-1)&&(this.document=this.document.insertBlockBreakAtRange(o[0]),o[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),o[0]++,i++),s.push(this.document=this.document.applyBlockAttributeAtRange(e,!0,o)));return s},t.prototype.findRangesOfBlocks=function(){return this.document.findRangesForBlockAttribute(e)},t.prototype.findRangesOfPieces=function(){return this.document.findRangesForTextAttribute(n,{withValue:i})},t.prototype.moveSelectedRangeForward=function(){return this.selectedRange[0]+=1,this.selectedRange[1]+=1},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Editor=function(){function n(n,o,r){this.composition=n,this.selectionManager=o,this.element=r,this.insertFiles=t(this.insertFiles,this),this.undoManager=new e.UndoManager(this.composition),this.filters=i.slice(0)}var i;return i=[e.attachmentGalleryFilter],n.prototype.loadDocument=function(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})},n.prototype.loadHTML=function(t){return null==t&&(t=""),this.loadDocument(e.Document.fromHTML(t,{referenceElement:this.element}))},n.prototype.loadJSON=function(t){var n,i;return n=t.document,i=t.selectedRange,n=e.Document.fromJSON(n),this.loadSnapshot({document:n,selectedRange:i})},n.prototype.loadSnapshot=function(t){return this.undoManager=new e.UndoManager(this.composition),this.composition.loadSnapshot(t)},n.prototype.getDocument=function(){return this.composition.document},n.prototype.getSelectedDocument=function(){return this.composition.getSelectedDocument()},n.prototype.getSnapshot=function(){return this.composition.getSnapshot()},n.prototype.toJSON=function(){return this.getSnapshot()},n.prototype.deleteInDirection=function(t){return this.composition.deleteInDirection(t)},n.prototype.insertAttachment=function(t){return this.composition.insertAttachment(t)},n.prototype.insertAttachments=function(t){return this.composition.insertAttachments(t)},n.prototype.insertDocument=function(t){return this.composition.insertDocument(t)},n.prototype.insertFile=function(t){return this.composition.insertFile(t)},n.prototype.insertFiles=function(t){return this.composition.insertFiles(t)},n.prototype.insertHTML=function(t){return this.composition.insertHTML(t)},n.prototype.insertString=function(t){return this.composition.insertString(t)},n.prototype.insertText=function(t){return this.composition.insertText(t)},n.prototype.insertLineBreak=function(){return this.composition.insertLineBreak()},n.prototype.getSelectedRange=function(){return this.composition.getSelectedRange()},n.prototype.getPosition=function(){return this.composition.getPosition()},n.prototype.getClientRectAtPosition=function(t){var e;return e=this.getDocument().locationRangeFromRange([t,t+1]),this.selectionManager.getClientRectAtLocationRange(e)},n.prototype.expandSelectionInDirection=function(t){return this.composition.expandSelectionInDirection(t)},n.prototype.moveCursorInDirection=function(t){return this.composition.moveCursorInDirection(t)},n.prototype.setSelectedRange=function(t){return this.composition.setSelectedRange(t)},n.prototype.activateAttribute=function(t,e){return null==e&&(e=!0),this.composition.setCurrentAttribute(t,e)},n.prototype.attributeIsActive=function(t){return this.composition.hasCurrentAttribute(t)},n.prototype.canActivateAttribute=function(t){return this.composition.canSetCurrentAttribute(t)},n.prototype.deactivateAttribute=function(t){return this.composition.removeCurrentAttribute(t)},n.prototype.canDecreaseNestingLevel=function(){return this.composition.canDecreaseNestingLevel()},n.prototype.canIncreaseNestingLevel=function(){return this.composition.canIncreaseNestingLevel()},n.prototype.decreaseNestingLevel=function(){return this.canDecreaseNestingLevel()?this.composition.decreaseNestingLevel():void 0},n.prototype.increaseNestingLevel=function(){return this.canIncreaseNestingLevel()?this.composition.increaseNestingLevel():void 0},n.prototype.canRedo=function(){return this.undoManager.canRedo()},n.prototype.canUndo=function(){return this.undoManager.canUndo()},n.prototype.recordUndoEntry=function(t,e){var n,i,o;return o=null!=e?e:{},i=o.context,n=o.consolidatable,this.undoManager.recordUndoEntry(t,{context:i,consolidatable:n})},n.prototype.redo=function(){return this.canRedo()?this.undoManager.redo():void 0},n.prototype.undo=function(){return this.canUndo()?this.undoManager.undo():void 0},n}()}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ManagedAttachment=function(e){function n(t,e){var n;this.attachmentManager=t,this.attachment=e,n=this.attachment,this.id=n.id,this.file=n.file}return t(n,e),n.prototype.remove=function(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)},n.proxyMethod("attachment.getAttribute"),n.proxyMethod("attachment.hasAttribute"),n.proxyMethod("attachment.setAttribute"),n.proxyMethod("attachment.getAttributes"),n.proxyMethod("attachment.setAttributes"),n.proxyMethod("attachment.isPending"),n.proxyMethod("attachment.isPreviewable"),n.proxyMethod("attachment.getURL"),n.proxyMethod("attachment.getHref"),n.proxyMethod("attachment.getFilename"),n.proxyMethod("attachment.getFilesize"),n.proxyMethod("attachment.getFormattedFilesize"),n.proxyMethod("attachment.getExtension"),n.proxyMethod("attachment.getContentType"),n.proxyMethod("attachment.getFile"),n.proxyMethod("attachment.setFile"),n.proxyMethod("attachment.releaseFile"),n.proxyMethod("attachment.getUploadProgress"),n.proxyMethod("attachment.setUploadProgress"),n}(e.BasicObject)}.call(this),function(){var t=function(t,e){function i(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.AttachmentManager=function(n){function i(t){var e,n,i;for(null==t&&(t=[]),this.managedAttachments={},n=0,i=t.length;i>n;n++)e=t[n],this.manageAttachment(e)}return t(i,n),i.prototype.getAttachments=function(){var t,e,n,i;n=this.managedAttachments,i=[];for(e in n)t=n[e],i.push(t);return i},i.prototype.manageAttachment=function(t){var n,i;return null!=(n=this.managedAttachments)[i=t.id]?n[i]:n[i]=new e.ManagedAttachment(this,t)},i.prototype.attachmentIsManaged=function(t){return t.id in this.managedAttachments},i.prototype.requestRemovalOfAttachment=function(t){var e;return this.attachmentIsManaged(t)&&null!=(e=this.delegate)&&"function"==typeof e.attachmentManagerDidRequestRemovalOfAttachment?e.attachmentManagerDidRequestRemovalOfAttachment(t):void 0},i.prototype.unmanageAttachment=function(t){var e;return e=this.managedAttachments[t.id],delete this.managedAttachments[t.id],e},i}(e.BasicObject)}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h;t=e.elementContainsNode,n=e.findChildIndexOfNode,r=e.nodeIsBlockStart,s=e.nodeIsBlockStartComment,o=e.nodeIsBlockContainer,a=e.nodeIsCursorTarget,u=e.nodeIsEmptyTextNode,c=e.nodeIsTextNode,i=e.nodeIsAttachmentElement,l=e.tagName,h=e.walkTree,e.LocationMapper=function(){function e(t){this.element=t}var p,d,f,g;return e.prototype.findLocationFromContainerAndOffset=function(e,i,o){var s,u,l,p,g,m,v;for(m=(null!=o?o:{strict:!0}).strict,u=0,l=!1,p={index:0,offset:0},(s=this.findAttachmentElementParentForNode(e))&&(e=s.parentNode,i=n(s)),v=h(this.element,{usingFilter:f});v.nextNode();){if(g=v.currentNode,g===e&&c(e)){a(g)||(p.offset+=i);break}if(g.parentNode===e){if(u++===i)break}else if(!t(e,g)&&u>0)break;r(g,{strict:m})?(l&&p.index++,p.offset=0,l=!0):p.offset+=d(g)}return p},e.prototype.findContainerAndOffsetFromLocation=function(t){var e,i,s,u,l;if(0===t.index&&0===t.offset){for(e=this.element,u=0;e.firstChild;)if(e=e.firstChild,o(e)){u=1;break}return[e,u]}if(l=this.findNodeAndOffsetFromLocation(t),i=l[0],s=l[1],i){if(c(i))0===d(i)?(e=i.parentNode.parentNode,u=n(i.parentNode),a(i,{name:"right"})&&u++):(e=i,u=t.offset-s);else{if(e=i.parentNode,!r(i.previousSibling)&&!o(e))for(;i===e.lastChild&&(i=e,e=e.parentNode,!o(e)););u=n(i),0!==t.offset&&u++}return[e,u]}},e.prototype.findNodeAndOffsetFromLocation=function(t){var e,n,i,o,r,s,u,l;for(u=0,l=this.getSignificantNodesForIndex(t.index),n=0,i=l.length;i>n;n++){if(e=l[n],o=d(e),t.offset<=u+o)if(c(e)){if(r=e,s=u,t.offset===s&&a(r))break}else r||(r=e,s=u);if(u+=o,u>t.offset)break}return[r,s]},e.prototype.findAttachmentElementParentForNode=function(t){for(;t&&t!==this.element;){if(i(t))return t;t=t.parentNode}},e.prototype.getSignificantNodesForIndex=function(t){var e,n,i,o,r;for(i=[],r=h(this.element,{usingFilter:p}),o=!1;r.nextNode();)if(n=r.currentNode,s(n)){if("undefined"!=typeof e&&null!==e?e++:e=0,e===t)o=!0;else if(o)break}else o&&i.push(n);return i},d=function(t){var e;return t.nodeType===Node.TEXT_NODE?a(t)?0:(e=t.textContent,e.length):"br"===l(t)||i(t)?1:0},p=function(t){return g(t)===NodeFilter.FILTER_ACCEPT?f(t):NodeFilter.FILTER_REJECT},g=function(t){return u(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},f=function(t){return i(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},e}()}.call(this),function(){var t,n,i=[].slice;t=e.getDOMRange,n=e.setDOMRange,e.PointMapper=function(){function e(){}return e.prototype.createDOMRangeFromPoint=function(e){var i,o,r,s,a,u,c,l;
if(c=e.x,l=e.y,document.caretPositionFromPoint)return a=document.caretPositionFromPoint(c,l),r=a.offsetNode,o=a.offset,i=document.createRange(),i.setStart(r,o),i;if(document.caretRangeFromPoint)return document.caretRangeFromPoint(c,l);if(document.body.createTextRange){s=t();try{u=document.body.createTextRange(),u.moveToPoint(c,l),u.select()}catch(h){}return i=t(),n(s),i}},e.prototype.getClientRectsForDOMRange=function(t){var e,n,o;return n=i.call(t.getClientRects()),o=n[0],e=n[n.length-1],[o,e]},e}()}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty,r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.getDOMRange,e.SelectionChangeObserver=function(e){function o(){this.run=n(this.run,this),this.update=n(this.update,this),this.selectionManagers=[]}var s;return i(o,e),o.prototype.start=function(){return this.started?void 0:(this.started=!0,"onselectionchange"in document?document.addEventListener("selectionchange",this.update,!0):this.run())},o.prototype.stop=function(){return this.started?(this.started=!1,document.removeEventListener("selectionchange",this.update,!0)):void 0},o.prototype.registerSelectionManager=function(t){return r.call(this.selectionManagers,t)<0?(this.selectionManagers.push(t),this.start()):void 0},o.prototype.unregisterSelectionManager=function(t){var e;return this.selectionManagers=function(){var n,i,o,r;for(o=this.selectionManagers,r=[],n=0,i=o.length;i>n;n++)e=o[n],e!==t&&r.push(e);return r}.call(this),0===this.selectionManagers.length?this.stop():void 0},o.prototype.notifySelectionManagersOfSelectionChange=function(){var t,e,n,i,o;for(n=this.selectionManagers,i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(o.selectionDidChange());return i},o.prototype.update=function(){var e;return e=t(),s(e,this.domRange)?void 0:(this.domRange=e,this.notifySelectionManagersOfSelectionChange())},o.prototype.reset=function(){return this.domRange=null,this.update()},o.prototype.run=function(){return this.started?(this.update(),requestAnimationFrame(this.run)):void 0},s=function(t,e){return(null!=t?t.startContainer:void 0)===(null!=e?e.startContainer:void 0)&&(null!=t?t.startOffset:void 0)===(null!=e?e.startOffset:void 0)&&(null!=t?t.endContainer:void 0)===(null!=e?e.endContainer:void 0)&&(null!=t?t.endOffset:void 0)===(null!=e?e.endOffset:void 0)},o}(e.BasicObject),null==e.selectionChangeObserver&&(e.selectionChangeObserver=new e.SelectionChangeObserver)}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){function n(){this.constructor=t}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty;i=e.getDOMSelection,n=e.getDOMRange,l=e.setDOMRange,t=e.elementContainsNode,s=e.nodeIsCursorTarget,r=e.innerElementIsActive,o=e.handleEvent,a=e.normalizeRange,u=e.rangeIsCollapsed,c=e.rangesAreEqual,e.SelectionManager=function(d){function f(t){this.element=t,this.selectionDidChange=h(this.selectionDidChange,this),this.didMouseDown=h(this.didMouseDown,this),this.locationMapper=new e.LocationMapper(this.element),this.pointMapper=new e.PointMapper,this.lockCount=0,o("mousedown",{onElement:this.element,withCallback:this.didMouseDown})}return p(f,d),f.prototype.getLocationRange=function(t){var e,i;return null==t&&(t={}),e=t.strict===!1?this.createLocationRangeFromDOMRange(n(),{strict:!1}):t.ignoreLock?this.currentLocationRange:null!=(i=this.lockedLocationRange)?i:this.currentLocationRange},f.prototype.setLocationRange=function(t){var e;if(!this.lockedLocationRange)return t=a(t),(e=this.createDOMRangeFromLocationRange(t))?(l(e),this.updateCurrentLocationRange(t)):void 0},f.prototype.setLocationRangeFromPointRange=function(t){var e,n;return t=a(t),n=this.getLocationAtPoint(t[0]),e=this.getLocationAtPoint(t[1]),this.setLocationRange([n,e])},f.prototype.getClientRectAtLocationRange=function(t){var e;return(e=this.createDOMRangeFromLocationRange(t))?this.getClientRectsForDOMRange(e)[1]:void 0},f.prototype.locationIsCursorTarget=function(t){var e,n,i;return i=this.findNodeAndOffsetFromLocation(t),e=i[0],n=i[1],s(e)},f.prototype.lock=function(){return 0===this.lockCount++?(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange()):void 0},f.prototype.unlock=function(){var t;return 0===--this.lockCount&&(t=this.lockedLocationRange,this.lockedLocationRange=null,null!=t)?this.setLocationRange(t):void 0},f.prototype.clearSelection=function(){var t;return null!=(t=i())?t.removeAllRanges():void 0},f.prototype.selectionIsCollapsed=function(){var t;return(null!=(t=n())?t.collapsed:void 0)===!0},f.prototype.selectionIsExpanded=function(){return!this.selectionIsCollapsed()},f.prototype.createLocationRangeFromDOMRange=function(t,e){var n,i;if(null!=t&&this.domRangeWithinElement(t)&&(i=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,e)))return t.collapsed||(n=this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,e)),a([i,n])},f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),f.proxyMethod("pointMapper.createDOMRangeFromPoint"),f.proxyMethod("pointMapper.getClientRectsForDOMRange"),f.prototype.didMouseDown=function(){return this.pauseTemporarily()},f.prototype.pauseTemporarily=function(){var e,n,i,r;return this.paused=!0,n=function(e){return function(){var n,o,s;for(e.paused=!1,clearTimeout(r),o=0,s=i.length;s>o;o++)n=i[o],n.destroy();return t(document,e.element)?e.selectionDidChange():void 0}}(this),r=setTimeout(n,200),i=function(){var t,i,r,s;for(r=["mousemove","keydown"],s=[],t=0,i=r.length;i>t;t++)e=r[t],s.push(o(e,{onElement:document,withCallback:n}));return s}()},f.prototype.selectionDidChange=function(){return this.paused||r(this.element)?void 0:this.updateCurrentLocationRange()},f.prototype.updateCurrentLocationRange=function(t){var e;return(null!=t?t:t=this.createLocationRangeFromDOMRange(n()))&&!c(t,this.currentLocationRange)?(this.currentLocationRange=t,null!=(e=this.delegate)&&"function"==typeof e.locationRangeDidChange?e.locationRangeDidChange(this.currentLocationRange.slice(0)):void 0):void 0},f.prototype.createDOMRangeFromLocationRange=function(t){var e,n,i,o;return i=this.findContainerAndOffsetFromLocation(t[0]),n=u(t)?i:null!=(o=this.findContainerAndOffsetFromLocation(t[1]))?o:i,null!=i&&null!=n?(e=document.createRange(),e.setStart.apply(e,i),e.setEnd.apply(e,n),e):void 0},f.prototype.getLocationAtPoint=function(t){var e,n;return(e=this.createDOMRangeFromPoint(t))&&null!=(n=this.createLocationRangeFromDOMRange(e))?n[0]:void 0},f.prototype.domRangeWithinElement=function(e){return e.collapsed?t(this.element,e.startContainer):t(this.element,e.startContainer)&&t(this.element,e.endContainer)},f}(e.BasicObject)}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice;i=e.rangeIsCollapsed,o=e.rangesAreEqual,n=e.objectsAreEqual,t=e.getBlockConfig,e.EditorController=function(s){function u(t){var n,i;this.editorElement=t.editorElement,n=t.document,i=t.html,this.selectionManager=new e.SelectionManager(this.editorElement),this.selectionManager.delegate=this,this.composition=new e.Composition,this.composition.delegate=this,this.attachmentManager=new e.AttachmentManager(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=new(e["Level"+e.config.input.getLevel()+"InputController"])(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new e.CompositionController(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new e.ToolbarController(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new e.Editor(this.composition,this.selectionManager,this.editorElement),null!=n?this.editor.loadDocument(n):this.editor.loadHTML(i)}var c;return r(u,s),u.prototype.registerSelectionManager=function(){return e.selectionChangeObserver.registerSelectionManager(this.selectionManager)},u.prototype.unregisterSelectionManager=function(){return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager)},u.prototype.render=function(){return this.compositionController.render()},u.prototype.reparse=function(){return this.composition.replaceHTML(this.editorElement.innerHTML)},u.prototype.compositionDidChangeDocument=function(){return this.notifyEditorElement("document-change"),this.handlingInput?void 0:this.render()},u.prototype.compositionDidChangeCurrentAttributes=function(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})},u.prototype.compositionDidPerformInsertionAtRange=function(t){return this.pasting?this.pastedRange=t:void 0},u.prototype.compositionShouldAcceptFile=function(t){return this.notifyEditorElement("file-accept",{file:t})},u.prototype.compositionDidAddAttachment=function(t){var e;return e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-add",{attachment:e})},u.prototype.compositionDidEditAttachment=function(t){var e;return this.compositionController.rerenderViewForObject(t),e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-edit",{attachment:e}),this.notifyEditorElement("change")},u.prototype.compositionDidChangeAttachmentPreviewURL=function(t){return this.compositionController.invalidateViewForObject(t),this.notifyEditorElement("change")},u.prototype.compositionDidRemoveAttachment=function(t){var e;return e=this.attachmentManager.unmanageAttachment(t),this.notifyEditorElement("attachment-remove",{attachment:e})},u.prototype.compositionDidStartEditingAttachment=function(t,e){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t,e),this.selectionManager.setLocationRange(this.attachmentLocationRange)},u.prototype.compositionDidStopEditingAttachment=function(){return this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null},u.prototype.compositionDidRequestChangingSelectionToLocationRange=function(t){return!this.loadingSnapshot||this.isFocused()?(this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()):void 0},u.prototype.compositionWillLoadSnapshot=function(){return this.loadingSnapshot=!0},u.prototype.compositionDidLoadSnapshot=function(){return this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1},u.prototype.getSelectionManager=function(){return this.selectionManager},u.proxyMethod("getSelectionManager().setLocationRange"),u.proxyMethod("getSelectionManager().getLocationRange"),u.prototype.attachmentManagerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.compositionControllerWillSyncDocumentView=function(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()},u.prototype.compositionControllerDidSyncDocumentView=function(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")},u.prototype.compositionControllerDidRender=function(){return null!=this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision},u.prototype.compositionControllerDidFocus=function(){return this.toolbarController.hideDialog(),this.notifyEditorElement("focus")},u.prototype.compositionControllerDidBlur=function(){return this.notifyEditorElement("blur")},u.prototype.compositionControllerDidSelectAttachment=function(t,e){return this.toolbarController.hideDialog(),this.composition.editAttachment(t,e)},u.prototype.compositionControllerDidRequestDeselectingAttachment=function(t){var e,n;return e=null!=(n=this.attachmentLocationRange)?n:this.composition.document.getLocationRangeOfAttachment(t),this.selectionManager.setLocationRange(e[1])},u.prototype.compositionControllerWillUpdateAttachment=function(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})},u.prototype.compositionControllerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.inputControllerWillHandleInput=function(){return this.handlingInput=!0,this.requestedRender=!1},u.prototype.inputControllerDidRequestRender=function(){return this.requestedRender=!0},u.prototype.inputControllerDidHandleInput=function(){return this.handlingInput=!1,this.requestedRender?(this.requestedRender=!1,this.render()):void 0},u.prototype.inputControllerDidAllowUnhandledInput=function(){return this.notifyEditorElement("change")},u.prototype.inputControllerDidRequestReparse=function(){return this.reparse()},u.prototype.inputControllerWillPerformTyping=function(){return this.recordTypingUndoEntry()},u.prototype.inputControllerWillPerformFormatting=function(t){return this.recordFormattingUndoEntry(t)},u.prototype.inputControllerWillCutText=function(){return this.editor.recordUndoEntry("Cut")},u.prototype.inputControllerWillPaste=function(t){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:t})},u.prototype.inputControllerDidPaste=function(t){return t.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t})},u.prototype.inputControllerWillMoveText=function(){return this.editor.recordUndoEntry("Move")},u.prototype.inputControllerWillAttachFiles=function(){return this.editor.recordUndoEntry("Drop Files")},u.prototype.inputControllerWillPerformUndo=function(){return this.editor.undo()},u.prototype.inputControllerWillPerformRedo=function(){return this.editor.redo()},u.prototype.inputControllerDidReceiveKeyboardCommand=function(t){return this.toolbarController.applyKeyboardCommand(t)},u.prototype.inputControllerDidStartDrag=function(){return this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()},u.prototype.inputControllerDidReceiveDragOverPoint=function(t){return this.selectionManager.setLocationRangeFromPointRange(t)},u.prototype.inputControllerDidCancelDrag=function(){return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null},u.prototype.locationRangeDidChange=function(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!o(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")},u.prototype.toolbarDidClickButton=function(){return this.getLocationRange()?void 0:this.setLocationRange({index:0,offset:0})},u.prototype.toolbarDidInvokeAction=function(t){return this.invokeAction(t)},u.prototype.toolbarDidToggleAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.toggleCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidUpdateAttribute=function(t,e){return this.recordFormattingUndoEntry(t),this.composition.setCurrentAttribute(t,e),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidRemoveAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.removeCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarWillShowDialog=function(){return this.composition.expandSelectionForEditing(),this.freezeSelection()},u.prototype.toolbarDidShowDialog=function(t){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t})},u.prototype.toolbarDidHideDialog=function(t){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t})},u.prototype.freezeSelection=function(){return this.selectionFrozen?void 0:(this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render())},u.prototype.thawSelection=function(){return this.selectionFrozen?(this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()):void 0},u.prototype.actions={undo:{test:function(){return this.editor.canUndo()},perform:function(){return this.editor.undo()}},redo:{test:function(){return this.editor.canRedo()},perform:function(){return this.editor.redo()}},link:{test:function(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test:function(){return this.editor.canIncreaseNestingLevel()},perform:function(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test:function(){return this.editor.canDecreaseNestingLevel()},perform:function(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:function(){return!0},perform:function(){return e.config.input.pickFiles(this.editor.insertFiles)}}},u.prototype.canInvokeAction=function(t){var e,n;return this.actionIsExternal(t)?!0:!!(null!=(e=this.actions[t])&&null!=(n=e.test)?n.call(this):void 0)},u.prototype.invokeAction=function(t){var e,n;return this.actionIsExternal(t)?this.notifyEditorElement("action-invoke",{actionName:t}):null!=(e=this.actions[t])&&null!=(n=e.perform)?n.call(this):void 0},u.prototype.actionIsExternal=function(t){return/^x-./.test(t)},u.prototype.getCurrentActions=function(){var t,e;e={};for(t in this.actions)e[t]=this.canInvokeAction(t);return e},u.prototype.updateCurrentActions=function(){var t;return t=this.getCurrentActions(),n(t,this.currentActions)?void 0:(this.currentActions=t,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions}))},u.prototype.runEditorFilters=function(){var t,e,n,i,o,r,s,a;for(a=this.composition.getSnapshot(),o=this.editor.filters,n=0,i=o.length;i>n;n++)e=o[n],t=a.document,s=a.selectedRange,a=null!=(r=e.call(this.editor,a))?r:{},null==a.document&&(a.document=t),null==a.selectedRange&&(a.selectedRange=s);return c(a,this.composition.getSnapshot())?void 0:this.composition.loadSnapshot(a)},c=function(t,e){return o(t.selectedRange,e.selectedRange)&&t.document.isEqualTo(e.document)},u.prototype.updateInputElement=function(){var t,n;return t=this.compositionController.getSerializableElement(),n=e.serializeToContentType(t,"text/html"),this.editorElement.setInputElementValue(n)},u.prototype.notifyEditorElement=function(t,e){switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement()}return this.editorElement.notify(t,e)},u.prototype.removeAttachment=function(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()},u.prototype.recordFormattingUndoEntry=function(e){var n,o;return n=t(e),o=this.selectionManager.getLocationRange(),n||!i(o)?this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0}):void 0},u.prototype.recordTypingUndoEntry=function(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})},u.prototype.getUndoContext=function(){var t;return t=1<=arguments.length?a.call(arguments,0):[],[this.getLocationContext(),this.getTimeContext()].concat(a.call(t))},u.prototype.getLocationContext=function(){var t;return t=this.selectionManager.getLocationRange(),i(t)?t[0].index:t},u.prototype.getTimeContext=function(){return e.config.undoInterval>0?Math.floor((new Date).getTime()/e.config.undoInterval):0},u.prototype.isFocused=function(){var t;return this.editorElement===(null!=(t=this.editorElement.ownerDocument)?t.activeElement:void 0)},u}(e.Controller)}.call(this),function(){var t,n,i,o,r,s;n=e.browser,r=e.makeElement,s=e.triggerEvent,i=e.handleEvent,o=e.handleEventOnce,t=e.AttachmentView.attachmentSelector,e.registerElement("trix-editor",function(){var a,u,c,l,h,p,d,f;return p=0,u=function(t){return!document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t?t.focus():void 0},d=function(t){return t.hasAttribute("contenteditable")?void 0:(t.setAttribute("contenteditable",""),o("focus",{onElement:t,withCallback:function(){return c(t)}}))},a=function(t){return t.hasAttribute("role")?void 0:t.setAttribute("role","textbox")},c=function(t){return h(t),f(t)},h=function(t){return("function"==typeof document.queryCommandSupported?document.queryCommandSupported("enableObjectResizing"):void 0)?(document.execCommand("enableObjectResizing",!1,!1),i("mscontrolselect",{onElement:t,preventDefault:!0})):void 0},f=function(){var t;return("function"==typeof document.queryCommandSupported?document.queryCommandSupported("DefaultParagraphSeparator"):void 0)&&(t=e.config.blockAttributes["default"].tagName,"div"===t||"p"===t)?document.execCommand("DefaultParagraphSeparator",!1,t):void 0},l=function(){return n.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"}}(),{defaultCSS:"%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t "+t+" figcaption textarea {\n  resize: none;\n}\n\n%t "+t+" figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t "+t+" figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: "+l.display+" !important;\n  width: "+l.width+" !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",trixId:{get:function(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++p),this.trixId)}},toolbarElement:{get:function(){var t,e,n;return this.hasAttribute("toolbar")?null!=(e=this.ownerDocument)?e.getElementById(this.getAttribute("toolbar")):void 0:this.parentNode?(n="trix-toolbar-"+this.trixId,this.setAttribute("toolbar",n),t=r("trix-toolbar",{id:n}),this.parentNode.insertBefore(t,this),t):void 0}},inputElement:{get:function(){var t,e,n;return this.hasAttribute("input")?null!=(n=this.ownerDocument)?n.getElementById(this.getAttribute("input")):void 0:this.parentNode?(e="trix-input-"+this.trixId,this.setAttribute("input",e),t=r("input",{type:"hidden",id:e}),this.parentNode.insertBefore(t,this.nextElementSibling),t):void 0}},editor:{get:function(){var t;return null!=(t=this.editorController)?t.editor:void 0}},name:{get:function(){var t;return null!=(t=this.inputElement)?t.name:void 0}},value:{get:function(){var t;return null!=(t=this.inputElement)?t.value:void 0},set:function(t){var e;return this.defaultValue=t,null!=(e=this.editor)?e.loadHTML(this.defaultValue):void 0}},notify:function(t,e){return this.editorController?s("trix-"+t,{onElement:this,attributes:e}):void 0},setInputElementValue:function(t){var e;return null!=(e=this.inputElement)?e.value=t:void 0},initialize:function(){return d(this),a(this)},connect:function(){return this.hasAttribute("data-trix-internal")?void 0:(this.editorController||(s("trix-before-initialize",{onElement:this}),this.editorController=new e.EditorController({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame(function(t){return function(){return s("trix-initialize",{onElement:t})}}(this))),this.editorController.registerSelectionManager(),this.registerResetListener(),u(this))},disconnect:function(){var t;return null!=(t=this.editorController)&&t.unregisterSelectionManager(),this.unregisterResetListener()},registerResetListener:function(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,!1)},unregisterResetListener:function(){return window.removeEventListener("reset",this.resetListener,!1)},resetBubbled:function(t){var e;return t.target!==(null!=(e=this.inputElement)?e.form:void 0)||t.defaultPrevented?void 0:this.reset()},reset:function(){return this.value=this.defaultValue}}}())}.call(this),function(){}.call(this)}).call(this), true&&module.exports?module.exports=e: true&&!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}.call(this);

/***/ }),

/***/ "aebd":
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

/***/ "af80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_id_810ca85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("39ad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_id_810ca85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_id_810ca85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_style_index_0_id_810ca85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("7aac");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b653":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "beae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b653");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RangeComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c38f":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__("cf06")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=function(t){return u({},t)},f=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),l=["locale","showMonths"],s={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return null===t||t instanceof Date||"string"==typeof t||t instanceof String||t instanceof Array||"number"==typeof t}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var e=a(this.config);this.events.forEach(function(n){var r,i=o.a.defaultConfig[n]||[];e[n]=(r=e[n]||[],r instanceof Array?r:[r]).concat(i,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i;t.$emit.apply(t,[(i=n,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())].concat(r))})}),e.defaultDate=this.value||e.defaultDate,this.fp=new o.a(this.getElem(),e),this.fpInput().addEventListener("blur",this.onBlur),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var e=this,n=t.target;this.$nextTick(function(){e.$emit("input",n.value)})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",t.target.value)},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var e=this,n=a(t);f.forEach(function(t){delete n[t]}),this.fp.set(n),l.forEach(function(t){void 0!==n[t]&&e.fp.set(t,n[t])})}},value:function(t){t!==this.$el.value&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};n.d(e,"Plugin",function(){return c}),n.d(e,"Component",function(){return s});var c=function(t,e){var n="flat-pickr";"string"==typeof e&&(n=e),t.component(n,s)};s.install=c;e.default=s}]).default});

/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c83e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0af1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "cf06":
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "de06":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "decb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e1b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "f206":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-25adc6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var DEFAULT_COLOR_CHECKED = '#75c791';
var DEFAULT_COLOR_UNCHECKED = '#bfcbd9';
var DEFAULT_LABEL_CHECKED = 'on';
var DEFAULT_LABEL_UNCHECKED = 'off';
var DEFAULT_SWITCH_COLOR = '#fff';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      validator: function validator(value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'disabled');
      }
    },
    switchColor: {
      type: [String, Object],
      validator: function validator(value) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isString */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'checked') || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* has */])(value, 'unchecked');
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    },
    margin: {
      type: Number,
      default: 3
    },
    fontSize: {
      type: Number
    }
  },
  computed: {
    className: function className() {
      var toggled = this.toggled,
          disabled = this.disabled;


      return ['vue-js-switch', {
        toggled: toggled,
        disabled: disabled
      }];
    },
    coreStyle: function coreStyle() {
      return {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
        backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
        borderRadius: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(Math.round(this.height / 2))
      };
    },
    buttonRadius: function buttonRadius() {
      return this.height - this.margin * 2;
    },
    distance: function distance() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.width - this.height + this.margin);
    },
    buttonStyle: function buttonStyle() {
      var transition = 'transform ' + this.speed + 'ms';
      var margin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.margin);

      var transform = this.toggled ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate3d */])(this.distance, margin) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* translate3d */])(margin, margin);

      var background = this.switchColor ? this.switchColorCurrent : null;

      return {
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.buttonRadius),
        transition: transition,
        transform: transform,
        background: background
      };
    },
    labelStyle: function labelStyle() {
      return {
        lineHeight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.height),
        fontSize: this.fontSize ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* px */])(this.fontSize) : null
      };
    },
    colorChecked: function colorChecked() {
      var color = this.color;


      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(color)) {
        return color || DEFAULT_COLOR_CHECKED;
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(color, 'checked', DEFAULT_COLOR_CHECKED);
    },
    colorUnchecked: function colorUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'unchecked', DEFAULT_COLOR_UNCHECKED);
    },
    colorDisabled: function colorDisabled() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.color, 'disabled', this.colorCurrent);
    },
    colorCurrent: function colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },
    labelChecked: function labelChecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'checked', DEFAULT_LABEL_CHECKED);
    },
    labelUnchecked: function labelUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.labels, 'unchecked', DEFAULT_LABEL_UNCHECKED);
    },
    switchColorChecked: function switchColorChecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'checked', DEFAULT_SWITCH_COLOR);
    },
    switchColorUnchecked: function switchColorUnchecked() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* get */])(this.switchColor, 'unchecked', DEFAULT_SWITCH_COLOR);
    },
    switchColorCurrent: function switchColorCurrent() {
      var switchColor = this.switchColor;


      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* isObject */])(this.switchColor)) {
        return this.switchColor || DEFAULT_SWITCH_COLOR;
      }

      return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
    }
  },
  watch: {
    value: function value(_value) {
      if (this.sync) {
        this.toggled = !!_value;
      }
    }
  },
  data: function data() {
    return {
      toggled: !!this.value
    };
  },

  methods: {
    toggle: function toggle(event) {
      var toggled = !this.toggled;

      if (!this.sync) {
        this.toggled = toggled;
      }

      this.$emit('input', toggled);
      this.$emit('change', {
        value: toggled,
        tag: this.tag,
        srcEvent: event
      });
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a; });


var installed = false;

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    if (installed) {
      return;
    }

    Vue.component('ToggleButton', __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a);
    installed = true;
  }
});



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
/* unused harmony export isBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return translate3d; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(value) {
  return typeof value === 'string';
};

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

var isObject = function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var has = function has(object, key) {
  return isObject(object) && object.hasOwnProperty(key);
};

var get = function get(object, key, defaultValue) {
  return has(object, key) ? object[key] : defaultValue;
};

var px = function px(value) {
  return value + 'px';
};

var translate3d = function translate3d(x, y) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';

  return 'translate3d(' + x + ', ' + y + ', ' + z + ')';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.className
  }, [_c('input', {
    staticClass: "v-switch-input",
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function($event) {
        $event.stopPropagation();
        return _vm.toggle($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "v-switch-core",
    style: (_vm.coreStyle)
  }, [_c('div', {
    staticClass: "v-switch-button",
    style: (_vm.buttonStyle)
  })]), _vm._v(" "), (_vm.labels) ? [(_vm.toggled) ? _c('span', {
    staticClass: "v-switch-label v-left",
    style: (_vm.labelStyle)
  }, [_vm._t("checked", [
    [_vm._v(_vm._s(_vm.labelChecked))]
  ])], 2) : _c('span', {
    staticClass: "v-switch-label v-right",
    style: (_vm.labelStyle)
  }, [_vm._t("unchecked", [
    [_vm._v(_vm._s(_vm.labelUnchecked))]
  ])], 2)] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("2283861f", content, true);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "f28c":
/***/ (function(module, exports) {

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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f80c":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Turkish = {
      weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          longhand: [
              "Pazar",
              "Pazartesi",
              "Salı",
              "Çarşamba",
              "Perşembe",
              "Cuma",
              "Cumartesi",
          ]
      },
      months: {
          shorthand: [
              "Oca",
              "Şub",
              "Mar",
              "Nis",
              "May",
              "Haz",
              "Tem",
              "Ağu",
              "Eyl",
              "Eki",
              "Kas",
              "Ara",
          ],
          longhand: [
              "Ocak",
              "Şubat",
              "Mart",
              "Nisan",
              "Mayıs",
              "Haziran",
              "Temmuz",
              "Ağustos",
              "Eylül",
              "Ekim",
              "Kasım",
              "Aralık",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "Artırmak için kaydırın",
      toggleTitle: "Aç/Kapa",
      amPM: ["ÖÖ", "ÖS"],
      time_24hr: true
  };
  fp.l10ns.tr = Turkish;
  var tr = fp.l10ns;

  exports.Turkish = Turkish;
  exports.default = tr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TableComponent.vue?vue&type=template&id=4734a262&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-crud"},[_c('div',{staticClass:"box is-paddingless"},[_c('div',{staticClass:"columns is-marginless"},[_c('div',{staticClass:"column"},[_c('div',{staticClass:"select",attrs:{"id":"page-limit"}},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.paginate),expression:"paginate"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.paginate=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){return _vm.fetchData()}]}},_vm._l(([5, 10, 15, 30, 60, 100]),function(i){return _c('option',{key:i,domProps:{"value":i}},[_vm._v(_vm._s(i))])}),0)])]),_c('div',{staticClass:"column"},[_c('div',{staticClass:"field"},[_c('p',{staticClass:"control has-icons-left has-icons-right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.term),expression:"term"}],staticClass:"input",attrs:{"type":"text","placeholder":"Arama"},domProps:{"value":(_vm.term)},on:{"keyup":_vm.search,"input":function($event){if($event.target.composing){ return; }_vm.term=$event.target.value}}}),_vm._m(0)])])]),_c('div',{staticClass:"column"},[_c('button',{staticClass:"button is-small is-white is-pulled-right",on:{"click":function($event){return _vm.action('form', null, 'create')}}},[_c('i',{staticClass:"material-icons"},[_vm._v("add_box")])])])]),_c('div',{staticClass:"table-container"},[(_vm.data.data)?_c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_vm._l((_vm.fields),function(field){return _c('th',{key:field.name},[_vm._v(_vm._s(field.title))])}),_c('th')],2)]),_c('tbody',[(_vm.data.data.length == 0)?_c('tr',[_c('td',[_vm._v("İçerik bulunamadı!")])]):_vm._e(),_vm._l((_vm.data.data),function(item){return _c('tr',{key:item.id},[_vm._l((_vm.fields),function(field){return _c('td',{key:field.name},[(field.type == 'select')?_c('div',_vm._l((_vm.options(item, field)),function(option){return _c('div',{key:option.value},[_vm._v(_vm._s(option.label))])}),0):_c('div',[_vm._v(_vm._s(item[field.name]))])])}),_c('td',[_c('div',{staticClass:"field has-addons is-pulled-right"},[_c('p',{staticClass:"control"},[_c('button',{staticClass:"button is-white",on:{"click":function($event){return _vm.action('show', item)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("open_in_new")])])]),_c('p',{staticClass:"control"},[_c('button',{staticClass:"button is-white",on:{"click":function($event){return _vm.action('form', item)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("edit")])])]),_c('p',{staticClass:"control"},[_c('button',{staticClass:"button is-white",on:{"click":function($event){return _vm.deleteItem(item)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("delete")])])])])])],2)})],2)]):_vm._e()]),(_vm.data)?_c('pagination-component',{attrs:{"data":_vm.data},on:{"page":_vm.setPage}}):_vm._e(),(_vm.form.modal)?_c('form-component',{attrs:{"api-url":_vm.form.apiUrl,"create":_vm.form.create,"meta":_vm.data.meta},on:{"close":function($event){return _vm.action('form', null, 'close')}}}):_vm._e(),(_vm.show.modal)?_c('show-component',{attrs:{"api-url":_vm.show.apiUrl},on:{"close":function($event){return _vm.action('show', null, 'close')}}}):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon is-small is-left"},[_c('i',{staticClass:"material-icons"},[_vm._v("search")])])}]


// CONCATENATED MODULE: ./src/components/TableComponent.vue?vue&type=template&id=4734a262&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js


function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/noty/lib/noty.js
var noty = __webpack_require__("7329");
var noty_default = /*#__PURE__*/__webpack_require__.n(noty);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaginationComponent.vue?vue&type=template&id=4febc598&scoped=true&
var PaginationComponentvue_type_template_id_4febc598_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"pagination is-small is-centered is-rounded pl-10 pr-10 pb-10",attrs:{"role":"navigation","aria-label":"pagination"}},[_c('a',{staticClass:"pagination-previous",on:{"click":function($event){return _vm.$emit('page', 1)}}},[_vm._v("←")]),_c('a',{staticClass:"pagination-next",on:{"click":function($event){return _vm.$emit('page', _vm.data.last_page)}}},[_vm._v("→")]),_c('ul',{staticClass:"pagination-list"},_vm._l((_vm.pagesNumber),function(page){return _c('li',{key:page},[_c('a',{staticClass:"pagination-link",class:{'is-current': page == _vm.data.current_page},on:{"click":function($event){return _vm.$emit('page', page)}}},[_vm._v(_vm._s(page))])])}),0)])}
var PaginationComponentvue_type_template_id_4febc598_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PaginationComponent.vue?vue&type=template&id=4febc598&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaginationComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PaginationComponentvue_type_script_lang_js_ = ({
  props: ["data"],
  data: function data() {
    return {};
  },
  computed: {
    pagesNumber: function pagesNumber() {
      var offset = 2;

      if (!this.data.to) {
        return [];
      }

      var from = this.data.current_page - offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + offset * 2;

      if (to >= this.data.last_page) {
        to = this.data.last_page;
      }

      var pagesArray = [];

      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  }
});
// CONCATENATED MODULE: ./src/components/PaginationComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PaginationComponentvue_type_script_lang_js_ = (PaginationComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/PaginationComponent.vue?vue&type=style&index=0&id=4febc598&scoped=true&lang=css&
var PaginationComponentvue_type_style_index_0_id_4febc598_scoped_true_lang_css_ = __webpack_require__("1448");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/PaginationComponent.vue






/* normalize component */

var component = normalizeComponent(
  components_PaginationComponentvue_type_script_lang_js_,
  PaginationComponentvue_type_template_id_4febc598_scoped_true_render,
  PaginationComponentvue_type_template_id_4febc598_scoped_true_staticRenderFns,
  false,
  null,
  "4febc598",
  null
  
)

/* harmony default export */ var PaginationComponent = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormComponent.vue?vue&type=template&id=19ec2d70&
var FormComponentvue_type_template_id_19ec2d70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.data),expression:"data.data"}],staticClass:"modal",class:{'is-active': _vm.active},attrs:{"id":"form-modal"}},[_c('div',{staticClass:"modal-background"}),_c('div',{staticClass:"modal-card"},[_c('header',{staticClass:"modal-card-head"},[_c('p',{staticClass:"modal-card-title"},[_vm._v("Form")]),_c('button',{staticClass:"delete",attrs:{"aria-label":"close"},on:{"click":function($event){return _vm.$emit('close')}}})]),(_vm.data.data && _vm.meta)?_c('section',{staticClass:"modal-card-body"},[_c('form',{attrs:{"id":"form-save"}},_vm._l((_vm.meta.fields),function(field){return _c('div',{key:field.name,staticClass:"field"},[(field.type == 'text')?_c('text-component',{attrs:{"field":field,"data":_vm.data.data}}):_vm._e(),(field.type == 'date')?_c('date-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'image')?_c('file-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'textarea')?_c('textarea-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'select')?_c('select-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'checkbox')?_c('checkbox-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'toggle')?_c('toggle-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'colorpicker')?_c('color-picker-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'range')?_c('range-component',{attrs:{"field":field,"data":_vm.data.data}}):(field.type == 'radio')?_c('radio-component',{attrs:{"field":field,"data":_vm.data.data}}):_vm._e()],1)}),0)]):_vm._e(),_c('footer',{staticClass:"modal-card-foot"},[_c('button',{staticClass:"button is-success",attrs:{"disabled":_vm.saveDisable},on:{"click":function($event){return _vm.save()}}},[_vm._v("Kaydet")]),_c('button',{staticClass:"button",on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v("Kapat")])])])])}
var FormComponentvue_type_template_id_19ec2d70_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormComponent.vue?vue&type=template&id=19ec2d70&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/TextComponent.vue?vue&type=template&id=35ba64c9&
var TextComponentvue_type_template_id_35ba64c9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data[_vm.field.name]),expression:"data[field.name]"}],staticClass:"input",attrs:{"type":"text","name":_vm.field.name,"placeholder":_vm.field.title + ' giriniz',"disabled":_vm.field.disabled,"readonly":_vm.field.readonly},domProps:{"value":(_vm.data[_vm.field.name])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, _vm.field.name, $event.target.value)}}})]),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var TextComponentvue_type_template_id_35ba64c9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/TextComponent.vue?vue&type=template&id=35ba64c9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/TextComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TextComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"]
});
// CONCATENATED MODULE: ./src/components/form/TextComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_TextComponentvue_type_script_lang_js_ = (TextComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/TextComponent.vue





/* normalize component */

var TextComponent_component = normalizeComponent(
  form_TextComponentvue_type_script_lang_js_,
  TextComponentvue_type_template_id_35ba64c9_render,
  TextComponentvue_type_template_id_35ba64c9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextComponent = (TextComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/DateComponent.vue?vue&type=template&id=3261187e&
var DateComponentvue_type_template_id_3261187e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[_c('flat-pickr',{staticClass:"input",attrs:{"name":_vm.field.name,"config":_vm.config,"placeholder":_vm.field.title + ' giriniz',"disabled":_vm.field.disabled},model:{value:(_vm.data[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.data, _vm.field.name, $$v)},expression:"data[field.name]"}})],1),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var DateComponentvue_type_template_id_3261187e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/DateComponent.vue?vue&type=template&id=3261187e&

// EXTERNAL MODULE: ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js
var vue_flatpickr_min = __webpack_require__("c38f");
var vue_flatpickr_min_default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_min);

// EXTERNAL MODULE: ./node_modules/flatpickr/dist/flatpickr.css
var flatpickr = __webpack_require__("0952");

// EXTERNAL MODULE: ./node_modules/flatpickr/dist/themes/material_blue.css
var material_blue = __webpack_require__("8e1f");

// EXTERNAL MODULE: ./node_modules/flatpickr/dist/l10n/tr.js
var tr = __webpack_require__("f80c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/DateComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DateComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"],
  components: {
    flatPickr: vue_flatpickr_min_default.a
  },
  data: function data() {
    var that = this;
    return {
      config: {
        dateFormat: that.field.dateFormat ? that.field.dateFormat : "Y-m-d H:i",
        enableTime: that.field.enableTime ? that.field.enableTime : true,
        locale: tr["Turkish"]
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/form/DateComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_DateComponentvue_type_script_lang_js_ = (DateComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/DateComponent.vue





/* normalize component */

var DateComponent_component = normalizeComponent(
  form_DateComponentvue_type_script_lang_js_,
  DateComponentvue_type_template_id_3261187e_render,
  DateComponentvue_type_template_id_3261187e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DateComponent = (DateComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/FileComponent.vue?vue&type=template&id=71b0da51&scoped=true&
var FileComponentvue_type_template_id_71b0da51_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[(_vm.data[_vm.field.name] != null)?_c('div',{},[(Array.isArray(_vm.data[_vm.field.name]))?_c('draggable',{staticClass:"columns",model:{value:(_vm.data[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.data, _vm.field.name, $$v)},expression:"data[field.name]"}},_vm._l((_vm.data[_vm.field.name]),function(image,index){return _c('div',{key:index + '-' + image,staticClass:"gallery",on:{"start":function($event){_vm.drag=true},"end":function($event){_vm.drag=false}}},[_c('input',{attrs:{"type":"hidden","name":'images[' + _vm.field.name + '][]'},domProps:{"value":image}}),_c('img',{staticClass:"column",attrs:{"src":image}}),_c('div',{staticClass:"remove",on:{"click":function($event){return _vm.removeItem(index)}}},[_vm._v("x")])])}),0):_c('div',{staticClass:"gallery"},[_c('input',{attrs:{"type":"hidden","name":'images[' + _vm.field.name + '][]'},domProps:{"value":_vm.data[_vm.field.name]}}),_c('a',{attrs:{"href":_vm.data[_vm.field.name],"target":"_blank"}},[_c('img',{attrs:{"src":_vm.data[_vm.field.name]},on:{"error":_vm.imgError}})]),_c('div',{staticClass:"remove",on:{"click":function($event){return _vm.removeItem()}}},[_vm._v("x")])]),_c('div',{staticClass:"clearfix"})],1):_vm._e(),_c('div',{staticClass:"file has-name"},[_c('label',{staticClass:"file-label"},[_c('input',{staticClass:"file-input",attrs:{"type":"file","name":_vm.field.multiple ? _vm.field.name + '[]' : _vm.field.name,"accept":"*","multiple":_vm.field.multiple == true},on:{"change":_vm.fileChange}}),_vm._m(0),_c('span',{staticClass:"file-name"},[_vm._v("Dosya Seçilmedi")])])])]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.field.multiple),expression:"field.multiple"}],staticClass:"help"},[_vm._v("Birden fazla görsel ekleyebilirsiniz.")]),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var FileComponentvue_type_template_id_71b0da51_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"file-cta"},[_c('span',{staticClass:"file-icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("cloud_upload")])]),_c('span',{staticClass:"file-label"},[_vm._v("Dosya Seç")])])}]


// CONCATENATED MODULE: ./src/components/form/FileComponent.vue?vue&type=template&id=71b0da51&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.common.js
var vuedraggable_common = __webpack_require__("310e");
var vuedraggable_common_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_common);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/FileComponent.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FileComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"],
  components: {
    draggable: vuedraggable_common_default.a
  },
  methods: {
    removeItem: function removeItem() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (Array.isArray(this.data[this.field.name])) {
        this.data[this.field.name].splice(index, 1);
      } else {
        this.data[this.field.name] = null;
      }
    },
    fileChange: function fileChange() {
      var input = document.querySelector('input[name="' + (this.field.multiple ? this.field.name + "[]" : this.field.name) + '"]');
      input.parentNode.querySelector(".file-name").textContent = input.files.length + " Dosya Seçildi";
    },
    imgError: function imgError(event) {
      event.target.src = "./assets/file.png";
      event.target.style = "width: 50px;height:50px;";
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/FileComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_FileComponentvue_type_script_lang_js_ = (FileComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/form/FileComponent.vue?vue&type=style&index=0&id=71b0da51&lang=scss&scoped=true&
var FileComponentvue_type_style_index_0_id_71b0da51_lang_scss_scoped_true_ = __webpack_require__("a8a1");

// CONCATENATED MODULE: ./src/components/form/FileComponent.vue






/* normalize component */

var FileComponent_component = normalizeComponent(
  form_FileComponentvue_type_script_lang_js_,
  FileComponentvue_type_template_id_71b0da51_scoped_true_render,
  FileComponentvue_type_template_id_71b0da51_scoped_true_staticRenderFns,
  false,
  null,
  "71b0da51",
  null
  
)

/* harmony default export */ var FileComponent = (FileComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/TextareaComponent.vue?vue&type=template&id=0e7015a0&
var TextareaComponentvue_type_template_id_0e7015a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[(_vm.field.editor)?_c('div',[_c('VueTrix',{attrs:{"inputId":'editor-' + _vm.field.name,"inputName":_vm.field.name,"placeholder":_vm.field.title + ' giriniz'},on:{"trix-attachment-add":_vm.handleAttachmentAdd},model:{value:(_vm.data[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.data, _vm.field.name, $$v)},expression:"data[field.name]"}})],1):_c('div',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.data[_vm.field.name]),expression:"data[field.name]"}],staticClass:"textarea",attrs:{"name":_vm.field.name,"placeholder":_vm.field.title + ' giriniz',"disabled":_vm.field.disabled},domProps:{"value":(_vm.data[_vm.field.name])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, _vm.field.name, $event.target.value)}}})])]),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var TextareaComponentvue_type_template_id_0e7015a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/TextareaComponent.vue?vue&type=template&id=0e7015a0&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/trix/dist/trix.js
var trix = __webpack_require__("ad7e");

// EXTERNAL MODULE: ./node_modules/trix/dist/trix.css
var dist_trix = __webpack_require__("1208");

// CONCATENATED MODULE: ./node_modules/vue-trix/dist/vue-trix.esm.js




/**
 *
 * @param {*} component
 */
function EmitFileAccept (component) {
  return {
    methods: {
      emitFileAccept: function emitFileAccept (file) {
        this.$emit('trix-file-accept', file);
      }
    }
  }
}

/**
 *
 * @param {*} component
 */
function EmitInitialize (component) {
  return {
    methods: {
      emitInitialize: function emitInitialize (editor) {
        this.$emit('trix-initialize', this.$refs.trix.editor, event);
      }
    }
  }
}

/**
 *
 * @param {*} component
 */
function EmitAttachmentAdd (component) {
  return {
    methods: {
      emitAttachmentAdd: function emitAttachmentAdd (file) {
        this.$emit('trix-attachment-add', file);
      }
    }
  }
}

/**
 *
 * @param {*} component
 */
function EmitSelectionChange (component) {
  return {
    methods: {
      emitSelectionChange: function emitSelectionChange (event) {
        this.$emit('trix-selection-change', this.$refs.trix.editor, event);
      }
    }
  }
}

/**
 *
 * @param {*} component
 */
function EmitAttachmentRemove (component) {
  return {
    methods: {
      emitAttachmentRemove: function emitAttachmentRemove (file) {
        this.$emit('trix-attachment-remove', file);
      }
    }
  }
}

/**
 *
 * @param {*} component
 */
function EmitBeforeInitialize (component) {
  return {
    methods: {
      emitBeforeInitialize: function emitBeforeInitialize (event) {
        this.$emit('trix-before-initialize', this.$refs.trix.editor, event);
      }
    }
  }
}

//

var script = {
  name: 'VueTrix',
  mixins: [
    EmitFileAccept(),
    EmitInitialize(),
    EmitAttachmentAdd(),
    EmitSelectionChange(),
    EmitAttachmentRemove(),
    EmitBeforeInitialize()
  ],
  model: {
    prop: 'srcContent',
    event: 'update'
  },
  props: {
    /**
     * This is referenced `id` of the hidden input field defined.
     * It is optional and will be a random string by default.
     */
    inputId: {
      type: String,
      required: false,
      default: function default$1 () {
        return ''
      }
    },
    /**
     * This is referenced `name` of the hidden input field defined,
     * default value is `content`.
     */
    inputName: {
      type: String,
      required: false,
      default: function default$2 () {
        return 'content'
      }
    },
    /**
     * The placeholder attribute specifies a short hint
     * that describes the expected value of a editor.
     */
    placeholder: {
      type: String,
      required: false,
      default: function default$3 () {
        return ''
      }
    },
    /**
     * The source content is associcated to v-model directive.
     */
    srcContent: {
      type: String,
      required: false,
      default: function default$4 () {
        return ''
      }
    },
    /**
     * The boolean attribute allows saving editor state into browser's localStorage
     * (optional, default is `false`).
     */
    localStorage: {
      type: Boolean,
      required: false,
      default: function default$5 () {
        return false
      }
    },
    /**
     * The function to call when editor is focused (optional).
     */
    trixFocus: {
      type: Function,
      required: false,
      default: function () {
      }
    },
    /**
     * The function to call when editor goes out of focus (optional).
     */
    trixBlur: {
      type: Function,
      required: false,
      default: function () {
      }
    }
  },
  created: function created () {
    /**
     *  If localStorage is enabled,
     *  then load editor's content from the beginning.
     */
    if (this.localStorage) {
      var savedValue = localStorage.getItem(this.storageId('VueTrix'));
      if (savedValue && !this.srcContent) {
        this.$refs.trix.editor.loadJSON(JSON.parse(savedValue));
      }
    }
  },
  data: function data () {
    return {
      editorContent: this.srcContent
    }
  },
  methods: {
    handleContentChange: function handleContentChange (event) {
      this.editorContent = event.srcElement ? event.srcElement.innerHTML : event.target.innerHTML;
      this.$emit('input', this.editorContent);
    },
    handleInitialContentChange: function handleInitialContentChange (newContent, oldContent) {
      newContent = newContent === undefined ? '' : newContent;

      if (this.$refs.trix.editor.innerHTML !== newContent) {
        // Update editor's content when initial content changed
        this.editorContent = newContent;
      }
    },
    emitEditorState: function emitEditorState (value) {
      /**
       * If localStorage is enabled,
       * then save editor's content into storage
       */
      if (this.localStorage) {
        localStorage.setItem(
          this.storageId('VueTrix'),
          JSON.stringify(this.$refs.trix.editor)
        );
      }
      this.$emit('update', this.editorContent);
    },
    storageId: function storageId (component) {
      if (this.inputId) {
        return (component + "." + (this.inputId) + ".content")
      } else {
        return (component + ".content")
      }
    },
    reloadEditorContent: function reloadEditorContent (newContent) {
      // Reload HTML content
      this.$refs.trix.editor.loadHTML(newContent);

      // Move cursor to end of new content updated
      this.$refs.trix.editor.setSelectedRange(this.getContentEndPosition());
    },
    getContentEndPosition: function getContentEndPosition () {
      return this.$refs.trix.editor.getDocument().toString().length - 1
    }
  },
  computed: {
    /**
     * Compute a random id of hidden input
     * when it haven't been specified.
     */
    generateId: function generateId () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16)
      })
    },
    initialContent: function initialContent () {
      return this.srcContent
    }
  },
  watch: {
    editorContent: {
      handler: 'emitEditorState'
    },
    initialContent: {
      handler: 'handleInitialContentChange'
    }
  }
};

function vue_trix_esm_normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = vue_trix_esm_normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.$style.trix_container },
    [
      _c("trix-editor", {
        ref: "trix",
        staticClass: "trix-content",
        attrs: {
          contenteditable: "true",
          input: _vm.inputId || _vm.generateId,
          placeholder: _vm.placeholder
        },
        on: {
          "trix-change": _vm.handleContentChange,
          "trix-file-accept": _vm.emitFileAccept,
          "trix-attachment-add": _vm.emitAttachmentAdd,
          "trix-attachment-remove": _vm.emitAttachmentRemove,
          "trix-selection-change": _vm.emitSelectionChange,
          "trix-initialize": _vm.emitInitialize,
          "trix-before-initialize": _vm.emitBeforeInitialize,
          "trix-focus": _vm.trixFocus,
          "trix-blur": _vm.trixBlur
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: _vm.inputName,
          id: _vm.inputId || _vm.generateId
        },
        domProps: { value: _vm.editorContent }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-66fdea98_0", { source: "\n.src-components-trix_container-5Bcy {\n  max-width: 100%;\n  height: auto;\n}\n.src-components-trix_container-5Bcy .src-components-trix-button-group-2D-J {\n  background-color: white;\n}\n.src-components-trix_container-5Bcy .src-components-trix-content-1TD_ {\n  background-color: white;\n}\n", map: {"version":3,"sources":["/home/hanh/side-projects/vue-trix/src/components/VueTrix.vue"],"names":[],"mappings":";AAwNA;EACA,eAAA;EACA,YAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,uBAAA;AACA","file":"VueTrix.vue","sourcesContent":["<template>\n  <div\n    :class=\"$style.trix_container\"\n  >\n    <trix-editor\n      contenteditable=\"true\"\n      class=\"trix-content\"\n      ref=\"trix\"\n      :input=\"inputId || generateId\"\n      :placeholder=\"placeholder\"\n      @trix-change=\"handleContentChange\"\n      @trix-file-accept=\"emitFileAccept\"\n      @trix-attachment-add=\"emitAttachmentAdd\"\n      @trix-attachment-remove=\"emitAttachmentRemove\"\n      @trix-selection-change=\"emitSelectionChange\"\n      @trix-initialize=\"emitInitialize\"\n      @trix-before-initialize=\"emitBeforeInitialize\"\n      @trix-focus=\"trixFocus\"\n      @trix-blur=\"trixBlur\"\n    ></trix-editor>\n    <input\n      type=\"hidden\"\n      :name=\"inputName\"\n      :id=\"inputId || generateId\"\n      :value=\"editorContent\"\n    >\n  </div>\n</template>\n\n<script>\nimport 'trix'\nimport 'trix/dist/trix.css'\nimport EmitFileAccept from '../mixins/EmitFileAccept.js'\nimport EmitInitialize from '../mixins/EmitInitialize.js'\nimport EmitAttachmentAdd from '../mixins/EmitAttachmentAdd.js'\nimport EmitSelectionChange from '../mixins/EmitSelectionChange.js'\nimport EmitAttachmentRemove from '../mixins/EmitAttachmentRemove.js'\nimport EmitBeforeInitialize from '../mixins/EmitBeforeInitialize.js'\n\nexport default {\n  name: 'VueTrix',\n  mixins: [\n    EmitFileAccept('VueTrix'),\n    EmitInitialize('VueTrix'),\n    EmitAttachmentAdd('VueTrix'),\n    EmitSelectionChange('VueTrix'),\n    EmitAttachmentRemove('VueTrix'),\n    EmitBeforeInitialize('VueTrix')\n  ],\n  model: {\n    prop: 'srcContent',\n    event: 'update'\n  },\n  props: {\n    /**\n     * This is referenced `id` of the hidden input field defined.\n     * It is optional and will be a random string by default.\n     */\n    inputId: {\n      type: String,\n      required: false,\n      default () {\n        return ''\n      }\n    },\n    /**\n     * This is referenced `name` of the hidden input field defined,\n     * default value is `content`.\n     */\n    inputName: {\n      type: String,\n      required: false,\n      default () {\n        return 'content'\n      }\n    },\n    /**\n     * The placeholder attribute specifies a short hint\n     * that describes the expected value of a editor.\n     */\n    placeholder: {\n      type: String,\n      required: false,\n      default () {\n        return ''\n      }\n    },\n    /**\n     * The source content is associcated to v-model directive.\n     */\n    srcContent: {\n      type: String,\n      required: false,\n      default () {\n        return ''\n      }\n    },\n    /**\n     * The boolean attribute allows saving editor state into browser's localStorage\n     * (optional, default is `false`).\n     */\n    localStorage: {\n      type: Boolean,\n      required: false,\n      default () {\n        return false\n      }\n    },\n    /**\n     * The function to call when editor is focused (optional).\n     */\n    trixFocus: {\n      type: Function,\n      required: false,\n      default: () => {\n      }\n    },\n    /**\n     * The function to call when editor goes out of focus (optional).\n     */\n    trixBlur: {\n      type: Function,\n      required: false,\n      default: () => {\n      }\n    }\n  },\n  created () {\n    /**\n     *  If localStorage is enabled,\n     *  then load editor's content from the beginning.\n     */\n    if (this.localStorage) {\n      const savedValue = localStorage.getItem(this.storageId('VueTrix'))\n      if (savedValue && !this.srcContent) {\n        this.$refs.trix.editor.loadJSON(JSON.parse(savedValue))\n      }\n    }\n  },\n  data () {\n    return {\n      editorContent: this.srcContent\n    }\n  },\n  methods: {\n    handleContentChange (event) {\n      this.editorContent = event.srcElement ? event.srcElement.innerHTML : event.target.innerHTML\n      this.$emit('input', this.editorContent)\n    },\n    handleInitialContentChange (newContent, oldContent) {\n      newContent = newContent === undefined ? '' : newContent\n\n      if (this.$refs.trix.editor.innerHTML !== newContent) {\n        // Update editor's content when initial content changed\n        this.editorContent = newContent\n      }\n    },\n    emitEditorState (value) {\n      /**\n       * If localStorage is enabled,\n       * then save editor's content into storage\n       */\n      if (this.localStorage) {\n        localStorage.setItem(\n          this.storageId('VueTrix'),\n          JSON.stringify(this.$refs.trix.editor)\n        )\n      }\n      this.$emit('update', this.editorContent)\n    },\n    storageId (component) {\n      if (this.inputId) {\n        return `${component}.${this.inputId}.content`\n      } else {\n        return `${component}.content`\n      }\n    },\n    reloadEditorContent (newContent) {\n      // Reload HTML content\n      this.$refs.trix.editor.loadHTML(newContent)\n\n      // Move cursor to end of new content updated\n      this.$refs.trix.editor.setSelectedRange(this.getContentEndPosition())\n    },\n    getContentEndPosition () {\n      return this.$refs.trix.editor.getDocument().toString().length - 1\n    }\n  },\n  computed: {\n    /**\n     * Compute a random id of hidden input\n     * when it haven't been specified.\n     */\n    generateId () {\n      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {\n        var r = Math.random() * 16 | 0\n        var v = c === 'x' ? r : (r & 0x3 | 0x8)\n        return v.toString(16)\n      })\n    },\n    initialContent () {\n      return this.srcContent\n    }\n  },\n  watch: {\n    editorContent: {\n      handler: 'emitEditorState'\n    },\n    initialContent: {\n      handler: 'handleInitialContentChange'\n    }\n  }\n}\n</script>\n\n<style lang=\"css\" module>\n.trix_container {\n  max-width: 100%;\n  height: auto;\n}\n.trix_container .trix-button-group {\n  background-color: white;\n}\n.trix_container .trix-content {\n  background-color: white;\n}\n</style>\n"]}, media: undefined });
Object.defineProperty(this, "$style", { value: {"trix_container":"src-components-trix_container-5Bcy","trix-button-group":"src-components-trix-button-group-2D-J","trix-content":"src-components-trix-content-1TD_"} });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var VueTrix = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

/*
 * Vue-Trix index.js
 * Author: tranduchanh.ms@gmail.com
 * Github: https://github.com/hanhdt/vue-trix
 */
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.ignoredElements = ['trix-editor'];

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(VueTrix.name, VueTrix);

/* harmony default export */ var vue_trix_esm = (VueTrix);
//# sourceMappingURL=vue-trix.esm.js.map

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/TextareaComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TextareaComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"],
  components: {
    VueTrix: vue_trix_esm
  },
  methods: {
    handleAttachmentAdd: function handleAttachmentAdd(event) {
      var file = event.attachment.file;
      var formData = new FormData();
      formData.append("file", file);
      axios_default.a.post(window.location.origin + "/api/uploadFile", formData).then(function (response) {
        var attributes = {
          url: response.data,
          href: response.data
        };
        event.attachment.setAttributes(attributes);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/TextareaComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_TextareaComponentvue_type_script_lang_js_ = (TextareaComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/TextareaComponent.vue





/* normalize component */

var TextareaComponent_component = normalizeComponent(
  form_TextareaComponentvue_type_script_lang_js_,
  TextareaComponentvue_type_template_id_0e7015a0_render,
  TextareaComponentvue_type_template_id_0e7015a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextareaComponent = (TextareaComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/SelectComponent.vue?vue&type=template&id=27e960be&
var SelectComponentvue_type_template_id_27e960be_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[_c('v-select',{attrs:{"options":_vm.field.options,"multiple":_vm.field.multiple == true,"disabled":_vm.field.disabled,"getOptionLabel":_vm.getOptionLabel},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),(Array.isArray(_vm.selected))?_c('div',_vm._l((_vm.selected),function(select){return _c('input',{key:select.value,attrs:{"type":"hidden","name":_vm.field.multiple ? _vm.field.name + '[]' : _vm.field.name},domProps:{"value":select.value}})}),0):_c('div',[_c('input',{attrs:{"type":"hidden","name":_vm.field.name},domProps:{"value":_vm.selected.value}})])],1),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.field.multiple),expression:"field.multiple"}],staticClass:"help"},[_vm._v("Birden fazla seçenek seçebilirsiniz.")]),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var SelectComponentvue_type_template_id_27e960be_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/SelectComponent.vue?vue&type=template&id=27e960be&

// EXTERNAL MODULE: ./node_modules/vue-select/dist/vue-select.js
var vue_select = __webpack_require__("4a7a");
var vue_select_default = /*#__PURE__*/__webpack_require__.n(vue_select);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/SelectComponent.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SelectComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"],
  components: {
    vSelect: vue_select_default.a
  },
  data: function data() {
    return {
      selected: []
    };
  },
  mounted: function mounted() {
    // TODO: burası biraz daha optimize edilmesi lazım
    var selected = this.data[this.field.name];

    if (Array.isArray(selected) && typeof_typeof(selected[0]) != "object") {
      selected = this.field.options.filter(function (option) {
        return selected.includes(option.value);
      });
    } else if (!Array.isArray(selected)) {
      selected = this.field.options.filter(function (option) {
        return option.value == selected;
      });
    }

    this.selected = selected;
  },
  methods: {
    getOptionLabel: function getOptionLabel(option) {
      var label = option.label;

      if (option.parent != null) {
        label = "+\t" + label;
      }

      return label;
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/SelectComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_SelectComponentvue_type_script_lang_js_ = (SelectComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/form/SelectComponent.vue?vue&type=style&index=0&lang=scss&
var SelectComponentvue_type_style_index_0_lang_scss_ = __webpack_require__("c83e");

// CONCATENATED MODULE: ./src/components/form/SelectComponent.vue






/* normalize component */

var SelectComponent_component = normalizeComponent(
  form_SelectComponentvue_type_script_lang_js_,
  SelectComponentvue_type_template_id_27e960be_render,
  SelectComponentvue_type_template_id_27e960be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelectComponent = (SelectComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CheckboxComponent.vue?vue&type=template&id=712ffa67&
var CheckboxComponentvue_type_template_id_712ffa67_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"checkbox"},[_c('input',{attrs:{"type":"checkbox","name":_vm.field.multiple ? _vm.field.name + '[]' : _vm.field.name,"multiple":_vm.field.multiple == true,"disabled":_vm.field.disabled},domProps:{"checked":_vm.data[_vm.field.name]}}),_vm._v("\n    "+_vm._s(_vm.field.title)+"\n  ")]),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var CheckboxComponentvue_type_template_id_712ffa67_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/CheckboxComponent.vue?vue&type=template&id=712ffa67&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/CheckboxComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CheckboxComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"]
});
// CONCATENATED MODULE: ./src/components/form/CheckboxComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CheckboxComponentvue_type_script_lang_js_ = (CheckboxComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/CheckboxComponent.vue





/* normalize component */

var CheckboxComponent_component = normalizeComponent(
  form_CheckboxComponentvue_type_script_lang_js_,
  CheckboxComponentvue_type_template_id_712ffa67_render,
  CheckboxComponentvue_type_template_id_712ffa67_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckboxComponent = (CheckboxComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/ToggleComponent.vue?vue&type=template&id=32ae0928&
var ToggleComponentvue_type_template_id_32ae0928_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.value),expression:"value"}],staticClass:"input",attrs:{"type":"hidden","name":_vm.field.name},domProps:{"value":(_vm.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.value=$event.target.value}}}),_c('toggle-button',{attrs:{"labels":{checked: this.field.titleOn, unchecked: this.field.titleOff},"width":"100","height":"30"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})],1),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var ToggleComponentvue_type_template_id_32ae0928_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/ToggleComponent.vue?vue&type=template&id=32ae0928&

// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__("f206");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/ToggleComponent.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ToggleComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"],
  data: function data() {
    var that = this;
    return {
      value: that.data[that.field.name] == "true" || that.data[that.field.name] == "1" ? true : false
    };
  },
  components: {
    ToggleButton: dist["ToggleButton"]
  }
});
// CONCATENATED MODULE: ./src/components/form/ToggleComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_ToggleComponentvue_type_script_lang_js_ = (ToggleComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/ToggleComponent.vue





/* normalize component */

var ToggleComponent_component = normalizeComponent(
  form_ToggleComponentvue_type_script_lang_js_,
  ToggleComponentvue_type_template_id_32ae0928_render,
  ToggleComponentvue_type_template_id_32ae0928_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ToggleComponent = (ToggleComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/ColorPickerComponent.vue?vue&type=template&id=79bce888&
var ColorPickerComponentvue_type_template_id_79bce888_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data[_vm.field.name]),expression:"data[field.name]"}],staticClass:"input",staticStyle:{"width":"100%"},attrs:{"type":"color","name":_vm.field.name},domProps:{"value":(_vm.data[_vm.field.name])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, _vm.field.name, $event.target.value)}}}),_vm._v("\n      "+_vm._s(_vm.data[_vm.field.name])+"\n    ")]),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var ColorPickerComponentvue_type_template_id_79bce888_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/ColorPickerComponent.vue?vue&type=template&id=79bce888&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/ColorPickerComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ColorPickerComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"]
});
// CONCATENATED MODULE: ./src/components/form/ColorPickerComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_ColorPickerComponentvue_type_script_lang_js_ = (ColorPickerComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/ColorPickerComponent.vue





/* normalize component */

var ColorPickerComponent_component = normalizeComponent(
  form_ColorPickerComponentvue_type_script_lang_js_,
  ColorPickerComponentvue_type_template_id_79bce888_render,
  ColorPickerComponentvue_type_template_id_79bce888_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ColorPickerComponent = (ColorPickerComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/RangeComponent.vue?vue&type=template&id=f330b46e&
var RangeComponentvue_type_template_id_f330b46e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_c('div',{staticClass:"control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data[_vm.field.name]),expression:"data[field.name]"}],staticClass:"input",staticStyle:{"width":"100%"},attrs:{"type":"hidden","name":_vm.field.name},domProps:{"value":(_vm.data[_vm.field.name])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, _vm.field.name, $event.target.value)}}}),_c('vue-range-slider',{ref:"slider",staticClass:"sliderVue",model:{value:(_vm.data[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.data, _vm.field.name, $$v)},expression:"data[field.name]"}})],1),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()])}
var RangeComponentvue_type_template_id_f330b46e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/RangeComponent.vue?vue&type=template&id=f330b46e&

// EXTERNAL MODULE: ./node_modules/vue-range-component/dist/vue-range-slider.css
var vue_range_slider = __webpack_require__("e1b1");

// CONCATENATED MODULE: ./node_modules/vue-range-component/dist/vue-range-slider.esm.js
/*!
 * vue-range-slider v1.0.3
 * (c) 2016-2018 xwpongithub
 * Released under the MIT License.
 */
// Unsharp text [#166](https://github.com/NightCatSama/vue-slider-component/issues/166)
var roundToDPR = function () {
  var r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  return function (value) {
    return Math.round(value * r) / r;
  };
}();
var isMobile = function () {
  var userAgentInfo = navigator.userAgent.toLowerCase();
  var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = false;

  for (var v = 0; v < agents.length; v++) {
    if (userAgentInfo.indexOf(agents[v].toLowerCase()) > 0) {
      flag = true;
      break;
    }
  }

  return flag;
}();
function isArray(input) {
  if (Array.prototype.isArray) {
    return Array.isArray(input);
  }

  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}
function isDiff(a, b) {
  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    return true;
  } else if (isArray(a) && a.length === b.length) {
    return a.some(function (v, i) {
      return v !== b[i];
    });
  }

  return a !== b;
}
var elementStyle = document.createElement('div').style;

var vendor = function () {
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }

    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, {
    passive: false,
    capture: !!capture
  });
}
function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, {
    passive: false,
    capture: !!capture
  });
}

var transform = prefixStyle('transform');
var transitionDuration = prefixStyle('transitionDuration');
var transitionEnd = prefixStyle('transitionEnd');
var EVENT_TOUCH_START = 'touchstart';
var EVENT_TOUCH_MOVE = 'touchmove';
var EVENT_TOUCH_END = 'touchend';
var EVENT_TOUCH_CANCEL = 'touchcancel';
var EVENT_MOUSE_DOWN = 'mousedown';
var EVENT_MOUSE_MOVE = 'mousemove';
var EVENT_MOUSE_UP = 'mouseup';
var EVENT_MOUSE_LEAVE = 'mouseleave';
var EVENT_KEY_DOWN = 'keydown';
var EVENT_KEY_UP = 'keyup';
var EVENT_RESIZE = 'resize';
var Slider = {
  name: 'vue-range-slider',
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: true
    },
    // 值
    value: {
      type: [String, Number, Array, Object],
      default: 0
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 分段间隔
    step: {
      type: Number,
      default: 1
    },
    // 组件宽度
    width: {
      type: [Number, String],
      default: 'auto'
    },
    // 组件高度
    height: {
      type: [Number, String],
      default: 6
    },
    // 滑块大小
    dotSize: {
      type: Number,
      default: 16
    },
    dotWidth: {
      type: Number,
      required: false
    },
    dotHeight: {
      type: Number,
      required: false
    },
    stopPropagation: {
      type: Boolean,
      default: false
    },
    // 事件类型
    eventType: {
      type: String,
      default: 'auto'
    },
    // 是否实时计算组件布局
    realTime: {
      type: Boolean,
      default: false
    },
    // 是否显示工具提示
    tooltip: {
      type: [String, Boolean],
      default: 'always',
      validator: function validator(val) {
        return ['hover', 'always'].indexOf(val) > -1;
      }
    },
    // 组件方向
    direction: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) > -1;
      }
    },
    // 是否反向组件
    reverse: {
      type: Boolean,
      default: false
    },
    // 是否不可用
    disabled: {
      type: [Boolean, Array],
      default: false
    },
    piecewiseLabel: {
      type: Boolean,
      default: false
    },
    piecewise: {
      type: Boolean,
      default: false
    },
    // 进度条是否可拖拽（只限范围模式）
    processDraggable: {
      type: Boolean,
      default: false
    },
    // 是否可点击的
    clickable: {
      type: Boolean,
      default: true
    },
    // 是否固定距离
    fixed: {
      type: Boolean,
      default: false
    },
    // 是否为开发环境（打印错误）
    debug: {
      type: Boolean,
      default: true
    },
    // 最小范围
    minRange: {
      type: Number
    },
    // 最大范围
    maxRange: {
      type: Number
    },
    tooltipMerge: {
      type: Boolean,
      default: true
    },
    // 是否开启初始动画
    startAnimation: {
      type: Boolean,
      default: false
    },
    // 是否在拖拽结束后同步值
    lazy: {
      type: Boolean,
      default: false
    },
    // 在范围模式中，是否允许交叉
    enableCross: {
      type: Boolean,
      default: true
    },
    // 动画速度比
    speed: {
      type: Number,
      default: 0.5
    },
    useKeyboard: {
      type: Boolean,
      default: false
    },
    actionsKeyboard: {
      type: Array,
      default: function _default() {
        return [function (i) {
          return i - 1;
        }, function (i) {
          return i + 1;
        }];
      }
    },
    data: Array,
    formatter: [String, Function],
    mergeFormatter: [String, Function],
    // 工具提示方向
    tooltipDir: [Array, String],
    // 工具提示样式
    tooltipStyle: [Array, Object, Function],
    // 滑块样式
    sliderStyle: [Array, Object, Function],
    // 键盘控制时，算滑块获得焦点时样式
    focusStyle: [Array, Object, Function],
    // 组件禁用状态下样式
    disabledStyle: Object,
    // 进度条样式
    processStyle: Object,
    // 组件背景样式
    bgStyle: Object,
    piecewiseStyle: Object,
    piecewiseActiveStyle: Object,
    disabledDotStyle: [Array, Object, Function],
    labelStyle: Object,
    labelActiveStyle: Object
  },
  data: function data() {
    return {
      currentValue: 0,
      size: 0,
      fixedValue: 0,
      focusSlider: 0,
      currentSlider: 0,
      flag: false,
      processFlag: false,
      processSign: false,
      keydownFlag: false,
      focusFlag: false,
      dragFlag: false,
      crossFlag: false,
      isComponentExists: true,
      isMounted: false
    };
  },
  render: function render(h) {
    var _this = this;

    var sliderConBlocks = []; // dot

    if (this.isRange) {
      var dot0 = h('div', {
        ref: 'dot0',
        staticClass: 'slider-dot',
        class: [this.tooltipStatus, {
          'slider-dot-focus': this.focusFlag && this.focusSlider === 0,
          'slider-dot-dragging': this.flag && this.currentSlider === 0,
          'slider-dot-disabled': !this.boolDisabled && this.disabledArray[0]
        }],
        style: [this.dotStyles, !this.boolDisabled && this.disabledArray[0] ? this.disabledDotStyles[0] : null, this.sliderStyles[0], this.focusFlag && this.focusSlider === 0 ? this.focusStyles[0] : null]
      }, [h('div', {
        ref: 'tooltip0',
        staticClass: 'slider-tooltip-wrap',
        class: "slider-tooltip-".concat(this.tooltipDirection[0])
      }, [this._t('tooltip', [h('span', {
        staticClass: 'slider-tooltip',
        style: this.tooltipStyles[0]
      }, this.formatter ? this.formatting(this.val[0]) : this.val[0])], {
        value: this.val[0],
        index: 0,
        disabled: !this.boolDisabled && this.disabledArray[0]
      })])]);
      sliderConBlocks.push(dot0);
      var dot1 = h('div', {
        ref: 'dot1',
        staticClass: 'slider-dot',
        class: [this.tooltipStatus, {
          'slider-dot-focus': this.focusFlag && this.focusSlider === 1,
          'slider-dot-dragging': this.flag && this.currentSlider === 1,
          'slider-dot-disabled': !this.boolDisabled && this.disabledArray[1]
        }],
        style: [this.dotStyles, !this.boolDisabled && this.disabledArray[1] ? this.disabledDotStyles[1] : null, this.sliderStyles[1], this.focusFlag && this.focusSlider === 1 ? this.focusStyles[1] : null]
      }, [h('div', {
        ref: 'tooltip1',
        staticClass: 'slider-tooltip-wrap',
        class: "slider-tooltip-".concat(this.tooltipDirection[1])
      }, [this._t('tooltip', [h('span', {
        staticClass: 'slider-tooltip',
        style: this.tooltipStyles[1]
      }, this.formatter ? this.formatting(this.val[1]) : this.val[1])], {
        value: this.val[1],
        index: 1,
        disabled: !this.boolDisabled && this.disabledArray[1]
      })])]);
      sliderConBlocks.push(dot1);
    } else {
      var dot = h('div', {
        ref: 'dot',
        staticClass: 'slider-dot',
        class: [this.tooltipStatus, {
          'slider-dot-focus': this.focusFlag && this.focusSlider === 0,
          'slider-dot-dragging': this.flag && this.currentSlider === 0
        }],
        style: [this.dotStyles, this.sliderStyles, this.focusFlag && this.focusSlider === 0 ? this.focusStyles : null]
      }, [h('div', {
        staticClass: 'slider-tooltip-wrap',
        class: "slider-tooltip-".concat(this.tooltipDirection)
      }, [this._t('tooltip', [h('span', {
        staticClass: 'slider-tooltip',
        style: this.tooltipStyles
      }, this.formatter ? this.formatting(this.val) : this.val)], {
        value: this.val
      })])]);
      sliderConBlocks.push(dot);
    } // piecewise


    var dotWrapLen = this.piecewiseDotWrap.length;
    var ulBlock = h('ul', {
      staticClass: 'slider-piecewise'
    }, this._l(this.piecewiseDotWrap, function (item, i) {
      var piecewiseDot = [];

      if (_this.piecewise) {
        piecewiseDot.push(h('span', {
          staticClass: 'piecewise-dot',
          style: [_this.piecewiseStyle, item.inRange ? _this.piecewiseActiveStyle : null]
        }));
      }

      var piecewiseLabel = [];

      if (_this.piecewiseLabel) {
        piecewiseLabel.push(h('span', {
          staticClass: 'piecewise-label',
          style: [_this.labelStyle, item.inRange ? _this.labelActiveStyle : null]
        }, item.label));
      }

      return h('li', {
        key: i,
        staticClass: 'piecewise-item',
        style: [_this.piecewiseDotStyle, item.style]
      }, [_this._t('piecewise', piecewiseDot, {
        label: item.label,
        index: i,
        first: i === 0,
        last: i === dotWrapLen - 1,
        active: item.inRange
      }), _this._t('label', piecewiseLabel, {
        label: item.label,
        index: i,
        first: i === 0,
        last: i === dotWrapLen - 1,
        active: item.inRange
      })]);
    }));
    sliderConBlocks.push(ulBlock); // process

    var processBlock = h('div', {
      ref: 'process',
      staticClass: 'slider-process',
      class: {
        'slider-process-draggable': this.isRange && this.processDraggable
      },
      style: this.processStyle,
      on: {
        click: function click(e) {
          return _this.processClick(e);
        }
      }
    }, [h('div', {
      ref: 'mergedTooltip',
      staticClass: 'merged-tooltip slider-tooltip-wrap',
      class: "slider-tooltip-".concat(this.isRange ? this.tooltipDirection[0] : this.tooltipDirection),
      style: this.tooltipMergedPosition
    }, [this._t('tooltip', [h('span', {
      staticClass: 'slider-tooltip',
      style: this.tooltipStyles
    }, this.mergeFormatter ? this.mergeFormatting(this.val[0], this.val[1]) : this.formatter ? this.val[0] === this.val[1] ? this.formatting(this.val[0]) : "".concat(this.formatting(this.val[0]), " - ").concat(this.formatting(this.val[1])) : this.val[0] === this.val[1] ? this.val[0] : "".concat(this.val[0], " - ").concat(this.val[1]))], {
      value: this.val,
      merge: true
    })])]);
    sliderConBlocks.push(processBlock); // <input type="range">

    if (!this.isRange && !this.data) {
      sliderConBlocks.push(h('input', {
        staticClass: 'slider-input',
        attrs: {
          type: 'range',
          min: this.min,
          max: this.max
        },
        domProps: {
          value: this.val
        },
        on: {
          input: function input(e) {
            return _this.val = e.target.value;
          }
        }
      }));
    }

    return h('div', {
      ref: 'wrap',
      staticClass: 'vue-range-slider slider-component',
      class: [this.flowDirection, this.disabledClass, this.stateClass, {
        'slider-has-label': this.piecewiseLabel
      }],
      style: [this.wrapStyles, this.boolDisabled ? this.disabledStyle : null],
      directives: [{
        name: 'show',
        value: this.show
      }],
      on: {
        click: function click(e) {
          return _this.wrapClick(e);
        }
      }
    }, [h('div', {
      ref: 'elem',
      staticClass: 'slider',
      style: [this.elemStyles, this.bgStyle],
      attrs: {
        'aria-hidden': true
      }
    }, sliderConBlocks)]);
  },
  computed: {
    val: {
      get: function get() {
        return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue;
      },
      set: function set(val) {
        if (this.data) {
          if (this.isRange) {
            var index0 = this.data.indexOf(val[0]);
            var index1 = this.data.indexOf(val[1]);

            if (index0 > -1 && index1 > -1) {
              this.currentValue = [index0, index1];
            }
          } else {
            var index = this.data.indexOf(val);

            if (index > -1) {
              this.currentValue = index;
            }
          }
        } else {
          this.currentValue = val;
        }
      }
    },
    currentIndex: function currentIndex() {
      if (this.isRange) {
        return this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])];
      } else {
        return this.getIndexByValue(this.currentValue);
      }
    },
    tooltipMergedPosition: function tooltipMergedPosition() {
      if (!this.isMounted) return {};
      var tooltipDirection = this.tooltipDirection[0];
      var dot0 = this.$refs.dot0;

      if (dot0) {
        var style = {};

        if (this.direction === 'vertical') {
          style[tooltipDirection] = "-".concat(this.dotHeightVal / 2 - this.width / 2 + 9, "px");
        } else {
          style[tooltipDirection] = "-".concat(this.dotWidthVal / 2 - this.height / 2 + 9, "px");
          style['left'] = "50%";
        }

        return style;
      }
    },
    tooltipDirection: function tooltipDirection() {
      var dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top');

      if (isArray(dir)) {
        return this.isRange ? dir : dir[1];
      } else {
        return this.isRange ? [dir, dir] : dir;
      }
    },
    piecewiseDotWrap: function piecewiseDotWrap() {
      if (!this.piecewise && !this.piecewiseLabel) {
        return false;
      }

      var arr = [];

      for (var i = 0; i <= this.total; i++) {
        var style = this.direction === 'vertical' ? {
          bottom: "".concat(this.gap * i - this.width / 2, "px"),
          left: 0
        } : {
          left: "".concat(this.gap * i - this.height / 2, "px"),
          top: 0
        };
        var index = this.reverse ? this.total - i : i;
        var label = this.data ? this.data[index] : this.spacing * index + this.min;
        arr.push({
          style: style,
          label: this.formatter ? this.formatting(label) : label,
          inRange: index >= this.indexRange[0] && index <= this.indexRange[1]
        });
      }

      return arr;
    },
    total: function total() {
      if (this.data) {
        return this.data.length - 1;
      } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.step * this.multiple) !== 0) {
        this.printError('Prop[step] is illegal, Please make sure that the step can be divisible');
      }

      return (this.maximum - this.minimum) / this.step;
    },
    piecewiseDotStyle: function piecewiseDotStyle() {
      return this.direction === 'vertical' ? {
        width: "".concat(this.width, "px"),
        height: "".concat(this.width, "px")
      } : {
        width: "".concat(this.height, "px"),
        height: "".concat(this.height, "px")
      };
    },
    dotStyles: function dotStyles() {
      return this.direction === 'vertical' ? {
        width: "".concat(this.dotWidthVal, "px"),
        height: "".concat(this.dotHeightVal, "px"),
        left: "".concat(-(this.dotWidthVal - this.width) / 2, "px")
      } : {
        width: "".concat(this.dotWidthVal, "px"),
        height: "".concat(this.dotHeightVal, "px"),
        top: "".concat(-(this.dotHeightVal - this.height) / 2, "px")
      };
    },
    sliderStyles: function sliderStyles() {
      if (isArray(this.sliderStyle)) {
        return this.isRange ? this.sliderStyle : this.sliderStyle[1];
      } else if (typeof this.sliderStyle === 'function') {
        return this.sliderStyle(this.val, this.currentIndex);
      } else {
        return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle;
      }
    },
    tooltipStyles: function tooltipStyles() {
      if (isArray(this.tooltipStyle)) {
        return this.isRange ? this.tooltipStyle : this.tooltipStyle[1];
      } else if (typeof this.tooltipStyle === 'function') {
        return this.tooltipStyle(this.val, this.currentIndex);
      } else {
        return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle;
      }
    },
    focusStyles: function focusStyles() {
      if (isArray(this.focusStyle)) {
        return this.isRange ? this.focusStyle : this.focusStyle[1];
      } else if (typeof this.focusStyle === 'function') {
        return this.focusStyle(this.val, this.currentIndex);
      } else {
        return this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle;
      }
    },
    elemStyles: function elemStyles() {
      return this.direction === 'vertical' ? {
        width: "".concat(this.width, "px"),
        height: '100%'
      } : {
        height: "".concat(this.height, "px")
      };
    },
    wrapStyles: function wrapStyles() {
      return this.direction === 'vertical' ? {
        height: typeof this.height === 'number' ? "".concat(this.height, "px") : this.height,
        padding: "".concat(this.dotHeightVal / 2, "px ").concat(this.dotWidthVal / 2, "px")
      } : {
        width: typeof this.width === 'number' ? "".concat(this.width, "px") : this.width,
        padding: "".concat(this.dotHeightVal / 2, "px ").concat(this.dotWidthVal / 2, "px")
      };
    },
    stateClass: function stateClass() {
      return {
        'slider-state-process-drag': this.processFlag,
        'slider-state-drag': this.flag && !this.processFlag && !this.keydownFlag,
        'slider-state-focus': this.focusFlag
      };
    },
    tooltipStatus: function tooltipStatus() {
      return this.tooltip === 'hover' && this.flag ? 'slider-always' : this.tooltip ? "slider-".concat(this.tooltip) : '';
    },
    tooltipClass: function tooltipClass() {
      return ["slider-tooltip-".concat(this.tooltipDirection), 'slider-tooltip'];
    },
    minimum: function minimum() {
      return this.data ? 0 : this.min;
    },
    maximum: function maximum() {
      return this.data ? this.data.length - 1 : this.max;
    },
    multiple: function multiple() {
      var decimals = "".concat(this.step).split('.')[1];
      return decimals ? Math.pow(10, decimals.length) : 1;
    },
    indexRange: function indexRange() {
      return this.isRange ? this.currentIndex : [0, this.currentIndex];
    },
    spacing: function spacing() {
      return this.data ? 1 : this.step;
    },
    gap: function gap() {
      return this.size / this.total;
    },
    dotWidthVal: function dotWidthVal() {
      return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize;
    },
    dotHeightVal: function dotHeightVal() {
      return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize;
    },
    disabledArray: function disabledArray() {
      return isArray(this.disabled) ? this.disabled : [this.disabled, this.disabled];
    },
    boolDisabled: function boolDisabled() {
      return this.disabledArray.every(function (b) {
        return b === true;
      });
    },
    disabledClass: function disabledClass() {
      return this.boolDisabled ? 'slider-disabled' : '';
    },
    flowDirection: function flowDirection() {
      return "slider-".concat(this.direction + (this.reverse ? '-reverse' : ''));
    },
    isRange: function isRange() {
      return isArray(this.value);
    },
    isDisabled: function isDisabled() {
      return this.eventType === 'none' ? true : this.boolDisabled;
    },
    isFixed: function isFixed() {
      return this.fixed || this.minRange;
    },
    position: function position() {
      return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap;
    },
    limit: function limit() {
      return this.isRange ? this.isFixed ? [[0, (this.total - this.fixedValue) * this.gap], [this.fixedValue * this.gap, this.size]] : [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size];
    },
    valueLimit: function valueLimit() {
      return this.isRange ? this.isFixed ? [[this.minimum, this.maximum - this.fixedValue * (this.spacing * this.multiple) / this.multiple], [this.minimum + this.fixedValue * (this.spacing * this.multiple) / this.multiple, this.maximum]] : [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum];
    },
    idleSlider: function idleSlider() {
      return this.currentSlider === 0 ? 1 : 0;
    },
    slider: function slider() {
      return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot;
    }
  },
  methods: {
    setValue: function setValue(val, noCb, speed) {
      var _this2 = this;

      if (isDiff(this.val, val)) {
        var resetVal = this.limitValue(val);
        this.val = this.isRange ? resetVal.concat() : resetVal;
        this.computedFixedValue();
        this.syncValue(noCb);
      }

      this.$nextTick(function () {
        return _this2.setPosition(speed);
      });
    },
    setIndex: function setIndex(val) {
      if (isArray(val) && this.isRange) {
        var value;

        if (this.data) {
          value = [this.data[val[0]], this.data[val[1]]];
        } else {
          value = [this.getValueByIndex(val[0]), this.getValueByIndex(val[1])];
        }

        this.setValue(value);
      } else {
        val = this.getValueByIndex(val);

        if (this.isRange) {
          this.currentSlider = val > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0;
        }

        this.setCurrentValue(val);
      }
    },
    wrapClick: function wrapClick(e) {
      if (this.isDisabled || !this.clickable || this.processFlag || this.dragFlag) return false;
      var pos = this.getPos(e);

      if (this.isRange) {
        if (this.disabledArray.every(function (b) {
          return b === false;
        })) {
          this.currentSlider = pos > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0;
        } else if (this.disabledArray[0]) {
          if (pos < this.position[0]) return false;
          this.currentSlider = 1;
        } else if (this.disabledArray[1]) {
          if (pos > this.position[1]) return false;
          this.currentSlider = 0;
        }
      }

      if (this.disabledArray[this.currentSlider]) {
        return false;
      }

      this.setValueOnPos(pos);

      if (this.isRange && this.tooltipMerge) {
        var timer = setInterval(this.handleOverlapTooltip, 16.7);
        setTimeout(function () {
          return window.clearInterval(timer);
        }, this.speed * 1000);
      }
    },
    processClick: function processClick(e) {
      if (this.fixed) e.stopPropagation();
    },
    syncValue: function syncValue(noCb) {
      var val = this.isRange ? this.val.concat() : this.val;
      this.$emit('input', val);
      this.keydownFlag && this.$emit('on-keypress', val);
      noCb || this.$emit('slide-end', val);
    },
    getPos: function getPos(e) {
      this.realTime && this.getStaticData();
      return this.direction === 'vertical' ? this.reverse ? e.pageY - this.offset : this.size - (e.pageY - this.offset) : this.reverse ? this.size - (e.pageX - this.offset) : e.pageX - this.offset;
    },
    setValueOnPos: function setValueOnPos(pos, isDrag) {
      var range = this.isRange ? this.limit[this.currentSlider] : this.limit;
      var valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
      var index = Math.round(pos / this.gap);

      if (pos >= range[0] && pos <= range[1]) {
        var v = this.getValueByIndex(index);
        this.setTransform(pos);
        this.setCurrentValue(v, isDrag);

        if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
          this.setTransform(pos + this.fixedValue * this.gap * (this.currentSlider === 0 ? 1 : -1), true);
          this.setCurrentValue((v * this.multiple + this.fixedValue * this.spacing * this.multiple * (this.currentSlider === 0 ? 1 : -1)) / this.multiple, isDrag, true);
        }
      } else {
        var anotherSlider = pos < range[0] ? 0 : 1;
        var currentSlider = anotherSlider === 0 ? 1 : 0;
        this.setTransform(range[anotherSlider]);
        this.setCurrentValue(valueRange[anotherSlider]);

        if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
          this.setTransform(this.limit[this.idleSlider][anotherSlider], true);
          this.setCurrentValue(this.valueLimit[this.idleSlider][anotherSlider], isDrag, true);
        } else if (this.isRange && (this.enableCross || this.crossFlag) && !this.isFixed && !this.disabledArray[anotherSlider] && this.currentSlider === currentSlider) {
          this.focusSlider = anotherSlider;
          this.currentSlider = anotherSlider;
        }
      }

      this.crossFlag = false;
    },
    setCurrentValue: function setCurrentValue(val, isDrag, isIdleSlider) {
      var slider = isIdleSlider ? this.idleSlider : this.currentSlider;
      if (val < this.minimum || val > this.maximum) return false;

      if (this.isRange) {
        if (isDiff(this.currentValue[slider], val)) {
          this.currentValue.splice(slider, 1, val);

          if (!this.lazy || !this.flag) {
            this.syncValue();
          }
        }
      } else if (isDiff(this.currentValue, val)) {
        this.currentValue = val;

        if (!this.lazy || !this.flag) {
          this.syncValue();
        }
      }

      isDrag || this.setPosition();
    },
    setPosition: function setPosition(speed) {
      this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed);

      if (this.isRange) {
        this.setTransform(this.position[0], this.currentSlider === 1);
        this.setTransform(this.position[1], this.currentSlider === 0);
      } else {
        this.setTransform(this.position);
      }

      this.flag || this.setTransitionTime(0);
    },
    setTransform: function setTransform(val, isIdleSlider) {
      var slider = isIdleSlider ? this.idleSlider : this.currentSlider;
      var value = roundToDPR((this.direction === 'vertical' ? this.dotHeightVal / 2 - val : val - this.dotWidthVal / 2) * (this.reverse ? -1 : 1));
      var translateValue = this.direction === 'vertical' ? "translateY(".concat(value, "px)") : "translateX(".concat(value, "px)");
      var processSize = this.fixed ? "".concat(this.fixedValue * this.gap, "px") : "".concat(slider === 0 ? this.position[1] - val : val - this.position[0], "px");
      var processPos = this.fixed ? "".concat(slider === 0 ? val : val - this.fixedValue * this.gap, "px") : "".concat(slider === 0 ? val : this.position[0], "px");

      if (this.isRange) {
        this.slider[slider].style[transform] = translateValue;

        if (this.direction === 'vertical') {
          this.$refs.process.style.height = processSize;
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos;
        } else {
          this.$refs.process.style.width = processSize;
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos;
        }
      } else {
        this.slider.style[transform] = translateValue;

        if (this.direction === 'vertical') {
          this.$refs.process.style.height = "".concat(val, "px");
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0;
        } else {
          this.$refs.process.style.width = "".concat(val, "px");
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0;
        }
      }
    },
    setTransitionTime: function setTransitionTime(time) {
      // In order to avoid browser merge style and modify together
      time || this.$refs.process.offsetWidth;

      if (this.isRange) {
        var sliderLen = this.slider.length;

        for (var i = 0; i < sliderLen; i++) {
          this.slider[i].style[transitionDuration] = "".concat(time, "s");
        }

        this.$refs.process.style[transitionDuration] = "".concat(time, "s");
      } else {
        this.slider.style[transitionDuration] = "".concat(time, "s");
        this.$refs.process.style[transitionDuration] = "".concat(time, "s");
      }
    },
    computedFixedValue: function computedFixedValue() {
      if (!this.isFixed) {
        this.fixedValue = 0;
        return false;
      }

      this.fixedValue = this.currentIndex[1] - this.currentIndex[0];
      this.fixedValue = Math.max(this.fixed ? this.currentIndex[1] - this.currentIndex[0] : 0, this.minRange || 0);
    },
    limitValue: function limitValue(val) {
      var _this3 = this;

      if (this.data) {
        return val;
      }

      var inRange = function inRange(v) {
        if (v < _this3.min) {
          _this3.printError("The value of the slider is ".concat(val, ", the minimum value is ").concat(_this3.min, ", the value of this slider can not be less than the minimum value"));

          return _this3.min;
        } else if (v > _this3.max) {
          _this3.printError("The value of the slider is ".concat(val, ", the maximum value is ").concat(_this3.max, ", the value of this slider can not be greater than the maximum value"));

          return _this3.max;
        }

        return v;
      };

      if (this.isRange) {
        return val.map(function (v) {
          return inRange(v);
        });
      } else {
        return inRange(val);
      }
    },
    getStaticData: function getStaticData() {
      if (this.$refs.elem) {
        this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth;
        this.offset = this.direction === 'vertical' ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left;
      }
    },
    handleOverlapTooltip: function handleOverlapTooltip() {
      var isDirectionSame = this.tooltipDirection[0] === this.tooltipDirection[1];

      if (this.isRange && isDirectionSame) {
        var tooltip0 = this.reverse ? this.$refs.tooltip1 : this.$refs.tooltip0;
        var tooltip1 = this.reverse ? this.$refs.tooltip0 : this.$refs.tooltip1;
        var tooltip0Rect = tooltip0.getBoundingClientRect();
        var tooltip1Rect = tooltip1.getBoundingClientRect();
        var tooltip0Right = tooltip0Rect.right;
        var tooltip1Left = tooltip1Rect.left;
        var tooltip0Y = tooltip0Rect.top;
        var tooltip1Y = tooltip1Rect.top + tooltip1Rect.height;
        var horizontalOverlap = this.direction === 'horizontal' && tooltip0Right > tooltip1Left;
        var verticalOverlap = this.direction === 'vertical' && tooltip1Y > tooltip0Y;

        if (horizontalOverlap || verticalOverlap) {
          this.handleDisplayMergedTooltip(true);
        } else {
          this.handleDisplayMergedTooltip(false);
        }
      }
    },
    handleDisplayMergedTooltip: function handleDisplayMergedTooltip(show) {
      var tooltip0 = this.$refs.tooltip0;
      var tooltip1 = this.$refs.tooltip1;
      var mergedTooltip = this.$refs.process.getElementsByClassName('merged-tooltip')[0];

      if (show) {
        tooltip0.style.visibility = 'hidden';
        tooltip1.style.visibility = 'hidden';
        mergedTooltip.style.visibility = 'visible';
      } else {
        tooltip0.style.visibility = 'visible';
        tooltip1.style.visibility = 'visible';
        mergedTooltip.style.visibility = 'hidden';
      }
    },
    isLessRange: function isLessRange(pos, index) {
      if (!this.isRange || !this.minRange && !this.maxRange) {
        return false;
      }

      var diff = this.currentSlider === 0 ? this.currentIndex[1] - index : index - this.currentIndex[0];

      if (this.minRange && diff <= this.minRange) {
        this.fixedValue = this.minRange;
        return true;
      }

      if (this.maxRange && diff >= this.maxRange) {
        this.fixedValue = this.maxRange;
        return true;
      }

      this.computedFixedValue();
      return false;
    },
    getValueByIndex: function getValueByIndex(index) {
      return (this.spacing * this.multiple * index + this.minimum * this.multiple) / this.multiple;
    },
    getIndexByValue: function getIndexByValue(value) {
      return Math.round((value - this.minimum) * this.multiple) / (this.spacing * this.multiple);
    },
    formatting: function formatting(value) {
      return typeof this.formatter === 'string' ? this.formatter.replace(/{value}/, value) : this.formatter(value);
    },
    mergeFormatting: function mergeFormatting(value1, value2) {
      return typeof this.mergeFormatter === 'string' ? this.mergeFormatter.replace(/{(value1|value2)}/g, function (_, key) {
        return key === 'value1' ? value1 : value2;
      }) : this.mergeFormatter(value1, value2);
    },
    _start: function _start(e) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var isProcess = arguments.length > 2 ? arguments[2] : undefined;

      if (this.disabledArray[index]) {
        return false;
      }

      if (this.stopPropagation) {
        e.stopPropagation();
      }

      if (this.isRange) {
        this.currentSlider = index;

        if (isProcess) {
          if (!this.processDraggable) {
            return false;
          }

          this.processFlag = true;
          this.processSign = {
            pos: this.position,
            start: this.getPos(e.targetTouches && e.targetTouches[0] ? e.targetTouches[0] : e)
          };
        }

        if (!this.enableCross && this.val[0] === this.val[1]) {
          this.crossFlag = true;
        }
      }

      if (!isProcess && this.useKeyboard) {
        this.focusFlag = true;
        this.focusSlider = index;
      }

      this.flag = true;
      this.$emit('drag-start', this);
    },
    _move: function _move(e) {
      e.preventDefault();

      if (this.stopPropagation) {
        e.stopPropagation();
      }

      if (!this.flag) return false;
      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];

      if (this.processFlag) {
        this.currentSlider = 0;
        this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true);
        this.currentSlider = 1;
        this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true);
      } else {
        this.dragFlag = true;
        this.setValueOnPos(this.getPos(e), true);
      }

      if (this.isRange && this.tooltipMerge) {
        this.handleOverlapTooltip();
      }
    },
    _end: function _end(e) {
      var _this4 = this;

      if (this.stopPropagation) {
        e.stopPropagation();
      }

      if (this.flag) {
        this.$emit('drag-end', this);

        if (this.lazy && isDiff(this.val, this.value)) {
          this.syncValue();
        }
      } else {
        return false;
      }

      this.flag = false;
      this.$nextTick(function () {
        _this4.crossFlag = false;
        _this4.dragFlag = false;
        _this4.processFlag = false;
      });
      this.setPosition();
    },
    blurSlider: function blurSlider(e) {
      var dot = this.isRange ? this.$refs["dot".concat(this.focusSlider)] : this.$refs.dot;

      if (!dot || dot === e.target) {
        return false;
      }

      this.focusFlag = false;
    },
    handleKeydown: function handleKeydown(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.useKeyboard) {
        return false;
      }

      var keyCode = e.which || e.keyCode;

      switch (keyCode) {
        case 37:
        case 40:
          this.keydownFlag = true;
          this.flag = true;
          this.changeFocusSlider(this.actionsKeyboard[0]);
          break;

        case 38:
        case 39:
          this.keydownFlag = true;
          this.flag = true;
          this.changeFocusSlider(this.actionsKeyboard[1]);
          break;

        default:
          break;
      }
    },
    handleKeyup: function handleKeyup() {
      if (this.keydownFlag) {
        this.keydownFlag = false;
        this.flag = false;
      }
    },
    changeFocusSlider: function changeFocusSlider(fn) {
      var _this5 = this;

      if (this.isRange) {
        var arr = this.currentIndex.map(function (index, i) {
          if (i === _this5.focusSlider || _this5.fixed) {
            var val = fn(index);
            var range = _this5.fixed ? _this5.valueLimit[i] : [0, _this5.total];

            if (val <= range[1] && val >= range[0]) {
              return val;
            }
          }

          return index;
        });

        if (arr[0] > arr[1]) {
          this.focusSlider = this.focusSlider === 0 ? 1 : 0;
          arr = arr.reverse();
        }

        this.setIndex(arr);
      } else {
        this.setIndex(fn(this.currentIndex));
      }
    },
    bindEvents: function bindEvents() {
      var me = this;

      this.processStartFn = function (e) {
        me._start(e, 0, true);
      };

      this.dot0StartFn = function (e) {
        me._start(e, 0);
      };

      this.dot1StartFn = function (e) {
        me._start(e, 1);
      };

      if (isMobile) {
        addEvent(this.$refs.process, EVENT_TOUCH_START, this.processStartFn);
        addEvent(document, EVENT_TOUCH_MOVE, this._move);
        addEvent(document, EVENT_TOUCH_END, this._end);
        addEvent(document, EVENT_TOUCH_CANCEL, this._end);

        if (this.isRange) {
          addEvent(this.$refs.dot0, EVENT_TOUCH_START, this.dot0StartFn);
          addEvent(this.$refs.dot1, EVENT_TOUCH_START, this.dot1StartFn);
        } else {
          addEvent(this.$refs.dot, EVENT_TOUCH_START, this._start);
        }
      } else {
        addEvent(this.$refs.process, EVENT_MOUSE_DOWN, this.processStartFn);
        addEvent(document, EVENT_MOUSE_DOWN, this.blurSlider);
        addEvent(document, EVENT_MOUSE_MOVE, this._move);
        addEvent(document, EVENT_MOUSE_UP, this._end);
        addEvent(document, EVENT_MOUSE_LEAVE, this._end);

        if (this.isRange) {
          addEvent(this.$refs.dot0, EVENT_MOUSE_DOWN, this.dot0StartFn);
          addEvent(this.$refs.dot1, EVENT_MOUSE_DOWN, this.dot1StartFn);
        } else {
          addEvent(this.$refs.dot, EVENT_MOUSE_DOWN, this._start);
        }
      }

      addEvent(document, EVENT_KEY_DOWN, this.handleKeydown);
      addEvent(document, EVENT_KEY_UP, this.handleKeyup);
      addEvent(window, EVENT_RESIZE, this.refresh);

      if (this.isRange && this.tooltipMerge) {
        addEvent(this.$refs.dot0, transitionEnd, this.handleOverlapTooltip);
        addEvent(this.$refs.dot1, transitionEnd, this.handleOverlapTooltip);
      }
    },
    unbindEvents: function unbindEvents() {
      if (isMobile) {
        removeEvent(this.$refs.process, EVENT_TOUCH_START, this.processStartFn);
        removeEvent(document, EVENT_TOUCH_MOVE, this._move);
        removeEvent(document, EVENT_TOUCH_END, this._end);
        removeEvent(document, EVENT_TOUCH_CANCEL, this._end);

        if (this.isRange) {
          removeEvent(this.$refs.dot0, EVENT_TOUCH_START, this.dot0StartFn);
          removeEvent(this.$refs.dot1, EVENT_TOUCH_START, this.dot1StartFn);
        } else {
          removeEvent(this.$refs.dot, EVENT_TOUCH_START, this._start);
        }
      } else {
        removeEvent(this.$refs.process, EVENT_MOUSE_DOWN, this.processStartFn);
        removeEvent(document, EVENT_MOUSE_DOWN, this.blurSlider);
        removeEvent(document, EVENT_MOUSE_MOVE, this._move);
        removeEvent(document, EVENT_MOUSE_UP, this._end);
        removeEvent(document, EVENT_MOUSE_LEAVE, this._end);

        if (this.isRange) {
          removeEvent(this.$refs.dot0, EVENT_MOUSE_DOWN, this.dot0StartFn);
          removeEvent(this.$refs.dot1, EVENT_MOUSE_DOWN, this.dot1StartFn);
        } else {
          removeEvent(this.$refs.dot, EVENT_MOUSE_DOWN, this._start);
        }
      }

      removeEvent(document, EVENT_KEY_DOWN, this.handleKeydown);
      removeEvent(document, EVENT_KEY_UP, this.handleKeyup);
      removeEvent(window, EVENT_RESIZE, this.refresh);

      if (this.isRange && this.tooltipMerge) {
        removeEvent(this.$refs.dot0, transitionEnd, this.handleOverlapTooltip);
        removeEvent(this.$refs.dot1, transitionEnd, this.handleOverlapTooltip);
      }
    },
    refresh: function refresh() {
      if (this.$refs.elem) {
        this.getStaticData();
        this.computedFixedValue();
        this.setPosition();
        this.unbindEvents();
        this.bindEvents();
      }
    },
    printError: function printError(msg) {
      if (this.debug) {
        console.error("[VueSlider error]: ".concat(msg));
      }
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.isComponentExists = true;

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return this.printError('window or document is undefined, can not be initialization.');
    }

    this.$nextTick(function () {
      _this6.getStaticData();

      _this6.setValue(_this6.limitValue(_this6.value), true, _this6.startAnimation ? _this6.speed : 0);

      _this6.bindEvents();

      if (_this6.isRange && _this6.tooltipMerge && !_this6.startAnimation) {
        _this6.handleOverlapTooltip();
      }
    });
    this.isMounted = true;
  },
  watch: {
    value: function value(val) {
      this.flag || this.setValue(val, true);
    },
    show: function show(bool) {
      if (bool && !this.size) {
        this.$nextTick(this.refresh);
      }
    },
    max: function max(val) {
      if (val < this.min) {
        return this.printError('The maximum value can not be less than the minimum value.');
      }

      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    min: function min(val) {
      if (val > this.max) {
        return this.printError('The minimum value can not be greater than the maximum value.');
      }

      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    fixed: function fixed() {
      this.computedFixedValue();
    },
    minRange: function minRange() {
      this.computedFixedValue();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.isComponentExists = false;
    this.unbindEvents();
    this.refresh();
  },
  deactivated: function deactivated() {
    this.isComponentExists = false;
    this.unbindEvents();
    this.refresh();
  }
};

var version = "1.0.3";

Slider.version = version;

Slider.install = function (Vue) {
  Vue.component(Slider.name, Slider);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Slider);
}

/* harmony default export */ var vue_range_slider_esm = (Slider);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/RangeComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var RangeComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"],
  components: {
    VueRangeSlider: vue_range_slider_esm
  }
});
// CONCATENATED MODULE: ./src/components/form/RangeComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_RangeComponentvue_type_script_lang_js_ = (RangeComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/form/RangeComponent.vue?vue&type=style&index=0&lang=css&
var RangeComponentvue_type_style_index_0_lang_css_ = __webpack_require__("beae");

// CONCATENATED MODULE: ./src/components/form/RangeComponent.vue






/* normalize component */

var RangeComponent_component = normalizeComponent(
  form_RangeComponentvue_type_script_lang_js_,
  RangeComponentvue_type_template_id_f330b46e_render,
  RangeComponentvue_type_template_id_f330b46e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RangeComponent = (RangeComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/RadioComponent.vue?vue&type=template&id=83b3dd00&
var RadioComponentvue_type_template_id_83b3dd00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"label"},[_vm._v(_vm._s(_vm.field.title))]),_vm._l((_vm.field.values),function(item,index){return _c('div',{key:index,staticClass:"control"},[_c('label',{staticClass:"radio"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data[_vm.field.name]),expression:"data[field.name]"}],attrs:{"type":"radio","name":_vm.field.name},domProps:{"value":item,"checked":_vm._q(_vm.data[_vm.field.name],item)},on:{"change":function($event){return _vm.$set(_vm.data, _vm.field.name, item)}}}),_vm._v("\n      "+_vm._s(item)+"\n    ")])])}),(_vm.field.note)?_c('p',{staticClass:"help"},[_vm._v(_vm._s(_vm.field.note))]):_vm._e()],2)}
var RadioComponentvue_type_template_id_83b3dd00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/RadioComponent.vue?vue&type=template&id=83b3dd00&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/form/RadioComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RadioComponentvue_type_script_lang_js_ = ({
  props: ["field", "data"]
});
// CONCATENATED MODULE: ./src/components/form/RadioComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_RadioComponentvue_type_script_lang_js_ = (RadioComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/RadioComponent.vue





/* normalize component */

var RadioComponent_component = normalizeComponent(
  form_RadioComponentvue_type_script_lang_js_,
  RadioComponentvue_type_template_id_83b3dd00_render,
  RadioComponentvue_type_template_id_83b3dd00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioComponent = (RadioComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormComponent.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var FormComponentvue_type_script_lang_js_ = ({
  props: ["api-url", "meta", "create"],
  data: function data() {
    return {
      active: false,
      saveDisable: false,
      data: []
    };
  },
  components: {
    TextComponent: TextComponent,
    DateComponent: DateComponent,
    FileComponent: FileComponent,
    TextareaComponent: TextareaComponent,
    SelectComponent: SelectComponent,
    CheckboxComponent: CheckboxComponent,
    ToggleComponent: ToggleComponent,
    ColorPickerComponent: ColorPickerComponent,
    RangeComponent: RangeComponent,
    RadioComponent: RadioComponent
  },
  mounted: function mounted() {
    if (this.create) {
      this.setCreateData();
    } else {
      this.fetchData();
    }
  },
  methods: {
    setCreateData: function setCreateData() {
      var _this = this;

      this.meta.fields.forEach(function (field) {
        _this.data = {
          data: _defineProperty({}, field.name, field.name == "id" ? 0 : null)
        };
      });
      this.openModal();
    },
    fetchData: function fetchData() {
      var _this2 = this;

      axios_default.a.get(this.apiUrl).then(function (response) {
        return _this2.setData(response.data);
      });
    },
    setData: function setData(data) {
      this.data = data;
      this.openModal();
    },
    openModal: function openModal() {
      this.active = true;
    },
    closeModal: function closeModal() {
      this.active = false;
    },
    save: function save() {
      var _this3 = this;

      this.saveDisable = true;
      var url = this.apiUrl;
      var formData = new FormData(document.querySelector("#form-save"));

      if (this.create) {
        url += "/save";
      }

      axios_default.a.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        if (response.data.status == "success") {
          new noty_default.a({
            layout: "topCenter",
            theme: "sunset",
            timeout: 3000,
            type: "success",
            text: "İşlem başarılı bir şekilde tamamlanmıştır."
          }).show();

          _this3.$emit('close');
        }

        if (!_this3.create) {
          _this3.saveDisable = false;
        }
      }).catch(function (error) {
        if (error.response) {
          var data = error.response.data;
          var message = data.message;

          for (error in data.errors) {
            message += "<br>" + data.errors[error][0];
          }

          new noty_default.a({
            layout: "topCenter",
            theme: "sunset",
            timeout: 3000,
            type: "error",
            text: message
          }).show();
        }

        _this3.saveDisable = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FormComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormComponentvue_type_script_lang_js_ = (FormComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FormComponent.vue





/* normalize component */

var FormComponent_component = normalizeComponent(
  components_FormComponentvue_type_script_lang_js_,
  FormComponentvue_type_template_id_19ec2d70_render,
  FormComponentvue_type_template_id_19ec2d70_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormComponent = (FormComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9df853-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ShowComponent.vue?vue&type=template&id=810ca85a&scoped=true&
var ShowComponentvue_type_template_id_810ca85a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.data),expression:"data.data"}],staticClass:"modal",class:{'is-active': _vm.active},attrs:{"id":"show-modal"}},[_c('div',{staticClass:"modal-background"}),_c('div',{staticClass:"modal-card"},[_c('header',{staticClass:"modal-card-head"},[_c('p',{staticClass:"modal-card-title"},[_vm._v("Detaylar")]),_c('button',{staticClass:"delete",attrs:{"aria-label":"close"},on:{"click":function($event){return _vm.$emit('close')}}})]),_c('section',{staticClass:"modal-card-body is-paddingless"},[(_vm.data.meta)?_c('table',{staticClass:"table"},[_c('tbody',_vm._l((_vm.data.meta.fields),function(field){return _c('tr',{key:field.name},[_c('th',[_vm._v(_vm._s(field.title))]),(field.type == 'text' || field.type == 'textarea' || field.type == 'date')?_c('td',[(field.editor || field.render == 'html')?_c('div',{domProps:{"innerHTML":_vm._s(_vm.data.data[field.name])}}):_c('div',[_vm._v(_vm._s(_vm.data.data[field.name]))])]):_vm._e(),(field.type == 'image')?_c('td',{staticClass:"gallery"},[(Array.isArray(_vm.data.data[field.name]))?_c('div',{staticClass:"columns"},_vm._l((_vm.data.data[field.name]),function(image){return _c('img',{key:image,staticClass:"column",attrs:{"src":image}})}),0):_c('div',[_c('img',{attrs:{"src":_vm.data.data[field.name]}})])]):_vm._e(),(field.type == 'select')?_c('td',[(field.multiple || Array.isArray(_vm.data.data[field.name]))?_c('div',_vm._l((_vm.data.data[field.name]),function(option){return _c('div',{key:option.value},_vm._l((field.options.filter(function(opt) { return opt.value == option.value || opt.value == option; })),function(subOption){return _c('div',{key:subOption},[_vm._v(_vm._s(subOption.label))])}),0)}),0):_vm._l((field.options.filter(function(opt) { return opt.value == _vm.data.data[field.name] })),function(option){return _c('div',{key:option.value},[_vm._v(_vm._s(option.label))])})],2):_vm._e(),(field.type == 'checkbox')?_c('td',[_vm._v(_vm._s(_vm.data.data[field.name]))]):_vm._e()])}),0)]):_vm._e()]),_c('footer',{staticClass:"modal-card-foot"},[_c('button',{staticClass:"button",on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v("Kapat")])])])])}
var ShowComponentvue_type_template_id_810ca85a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ShowComponent.vue?vue&type=template&id=810ca85a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ShowComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ShowComponentvue_type_script_lang_js_ = ({
  props: ["api-url"],
  data: function data() {
    return {
      active: false,
      data: []
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      axios_default.a.get(this.apiUrl).then(function (response) {
        return _this.setData(response.data);
      });
    },
    setData: function setData(data) {
      this.data = data;
      this.openModal();
    },
    openModal: function openModal() {
      this.active = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/ShowComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShowComponentvue_type_script_lang_js_ = (ShowComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ShowComponent.vue?vue&type=style&index=0&id=810ca85a&lang=scss&scoped=true&
var ShowComponentvue_type_style_index_0_id_810ca85a_lang_scss_scoped_true_ = __webpack_require__("af80");

// CONCATENATED MODULE: ./src/components/ShowComponent.vue






/* normalize component */

var ShowComponent_component = normalizeComponent(
  components_ShowComponentvue_type_script_lang_js_,
  ShowComponentvue_type_template_id_810ca85a_scoped_true_render,
  ShowComponentvue_type_template_id_810ca85a_scoped_true_staticRenderFns,
  false,
  null,
  "810ca85a",
  null
  
)

/* harmony default export */ var ShowComponent = (ShowComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TableComponent.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TableComponentvue_type_script_lang_js_ = ({
  props: ["api-url", "api-token"],
  components: {
    PaginationComponent: PaginationComponent,
    FormComponent: FormComponent,
    ShowComponent: ShowComponent
  },
  data: function data() {
    return {
      term: null,
      paginate: 10,
      page: 1,
      show: {
        modal: false,
        apiUrl: null
      },
      form: {
        modal: false,
        create: false,
        apiUrl: null
      },
      data: []
    };
  },
  computed: {
    fields: function fields() {
      return this.data.meta.fields.filter(function (field) {
        return field.listing;
      });
    }
  },
  mounted: function mounted() {
    if (this.apiToken) {
      axios_default.a.defaults.headers.common["Authorization"] = "Bearer " + this.apiToken;
    }

    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.apiUrl;
      axios_default.a.get(url, {
        params: {
          paginate: this.paginate,
          page: this.page
        }
      }).then(function (response) {
        return _this.setData(response.data);
      });
    },
    setData: function setData(data) {
      this.data = data;
    },
    action: function action(name) {
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this[name] = {
        modal: type == "close" ? false : true,
        apiUrl: item == null ? this.apiUrl : this.apiUrl + "/" + item.id,
        create: type == "create" ? true : false
      };

      if (type == "close") {
        this.fetchData();
      }
    },
    deleteItem: function deleteItem(item) {
      var parent = this;
      var n = new noty_default.a({
        layout: "topCenter",
        theme: "sunset",
        text: "Silmek istediğine emin misin?",
        timeout: false,
        buttons: [noty_default.a.button("Sil", "button pr-2", function () {
          parent.destroyItem(item);
          n.close();
        }), noty_default.a.button("Kapat", "button", function () {
          return n.close();
        })]
      });
      n.show();
    },
    destroyItem: function destroyItem(item) {
      var _this2 = this;

      axios_default.a.post(this.apiUrl + "/" + item.id + "/destroy").then(function (response) {
        if (response.data.status == "success") {
          new noty_default.a({
            layout: "topCenter",
            theme: "sunset",
            timeout: 3000,
            type: "success",
            text: "Silme işlemi başarılı bir şekilde tamamlanmıştır."
          }).show();

          _this2.fetchData();
        }
      });
    },
    search: function search() {
      var _this3 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        if (_this3.term.length == 0) {
          _this3.fetchData();

          return;
        }

        axios_default.a.post(_this3.apiUrl, {
          term: _this3.term,
          paginate: _this3.paginate
        }).then(function (response) {
          return _this3.setData(response.data);
        });
      }, 500);
    },
    setPage: function setPage(page) {
      this.page = page;
      this.fetchData();
    },
    options: function options(item, field) {
      var selected = item[field.name];

      if (Array.isArray(selected) && typeof_typeof(selected[0]) != "object") {
        selected = field.options.filter(function (option) {
          return selected.includes(option.value);
        });
      } else if (!Array.isArray(selected)) {
        selected = field.options.filter(function (option) {
          return option.value == selected;
        });
      }

      return selected;
    }
  }
});
// CONCATENATED MODULE: ./src/components/TableComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TableComponentvue_type_script_lang_js_ = (TableComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TableComponent.vue?vue&type=style&index=0&lang=scss&
var TableComponentvue_type_style_index_0_lang_scss_ = __webpack_require__("77f2");

// CONCATENATED MODULE: ./src/components/TableComponent.vue






/* normalize component */

var TableComponent_component = normalizeComponent(
  components_TableComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableComponent = (TableComponent_component.exports);
// CONCATENATED MODULE: ./src/build.js

/* harmony default export */ var build = (TableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (build);



/***/ })

/******/ });
//# sourceMappingURL=vue-crud.common.js.map