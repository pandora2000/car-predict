webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(129);
	var app_module_1 = __webpack_require__(202);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
	    .catch(function (err) { return console.error(err); });
	

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.0.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(2), __webpack_require__(434), __webpack_require__(72), __webpack_require__(9), __webpack_require__(193)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var globalScope;
	    if (typeof window === 'undefined') {
	        if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	            // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	            globalScope = self;
	        }
	        else {
	            globalScope = global;
	        }
	    }
	    else {
	        globalScope = window;
	    }
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isPromise(obj) {
	        // allow any Promise/A+ compliant thenable.
	        // It's up to the caller to ensure that obj.then conforms to the spec
	        return isPresent(obj) && isFunction(obj.then);
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    var StringWrapper = (function () {
	        function StringWrapper() {
	        }
	        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	        StringWrapper.equals = function (s, s2) { return s === s2; };
	        StringWrapper.stripLeft = function (s, charVal) {
	            if (s && s.length) {
	                var pos = 0;
	                for (var i = 0; i < s.length; i++) {
	                    if (s[i] != charVal)
	                        break;
	                    pos++;
	                }
	                s = s.substring(pos);
	            }
	            return s;
	        };
	        StringWrapper.stripRight = function (s, charVal) {
	            if (s && s.length) {
	                var pos = s.length;
	                for (var i = s.length - 1; i >= 0; i--) {
	                    if (s[i] != charVal)
	                        break;
	                    pos--;
	                }
	                s = s.substring(0, pos);
	            }
	            return s;
	        };
	        StringWrapper.replace = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.replaceAll = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.slice = function (s, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return s.slice(from, to === null ? undefined : to);
	        };
	        StringWrapper.replaceAllMapped = function (s, from, cb) {
	            return s.replace(from, function () {
	                var matches = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    matches[_i - 0] = arguments[_i];
	                }
	                // Remove offset & string from the result array
	                matches.splice(-2, 2);
	                // The callback receives match, p1, ..., pn
	                return cb(matches);
	            });
	        };
	        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	        StringWrapper.compare = function (a, b) {
	            if (a < b) {
	                return -1;
	            }
	            else if (a > b) {
	                return 1;
	            }
	            else {
	                return 0;
	            }
	        };
	        return StringWrapper;
	    }());
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.parseInt = function (text, radix) {
	            if (radix == 10) {
	                if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else if (radix == 16) {
	                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else {
	                var result = parseInt(text, radix);
	                if (!isNaN(result)) {
	                    return result;
	                }
	            }
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
	        Object.defineProperty(NumberWrapper, "NaN", {
	            get: function () { return NaN; },
	            enumerable: true,
	            configurable: true
	        });
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        NumberWrapper.isNaN = function (value) { return isNaN(value); };
	        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	        return NumberWrapper;
	    }());
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function normalizeBool(obj) {
	        return isBlank(obj) ? false : obj;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	    function hasConstructor(value, type) {
	        return value.constructor === type;
	    }

	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return isPresent(this.control) ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return isPresent(this.control) ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return isPresent(this.control) ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () {
	                return isPresent(this.control) ? this.control.errors : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return isPresent(this.control) ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.statusChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.valueChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (isPresent(this.control))
	                this.control.reset(value);
	        };
	        return AbstractControlDirective;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));

	    var Map$1 = global$1.Map;
	    var Set = global$1.Set;
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map$1([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map$1();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var createMapFromMap = (function () {
	        try {
	            if (new Map$1(new Map$1())) {
	                return function createMapFromMap(m) { return new Map$1(m); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromMap(m) {
	            var map = new Map$1();
	            m.forEach(function (v, k) { map.set(k, v); });
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map$1()).keys().next) {
	            return function _clearValues(m) {
	                var keyIterator = m.keys();
	                var k;
	                while (!((k = keyIterator.next()).done)) {
	                    m.set(k.value, null);
	                }
	            };
	        }
	        else {
	            return function _clearValuesWithForeEach(m) {
	                m.forEach(function (v, k) { m.set(k, null); });
	            };
	        }
	    })();
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map$1()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = ListWrapper.createFixedSize(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.clone = function (m) { return createMapFromMap(m); };
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map$1();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.toStringMap = function (m) {
	            var r = {};
	            m.forEach(function (v, k) { return r[k] = v; });
	            return r;
	        };
	        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	        MapWrapper.clearValues = function (m) { _clearValues(m); };
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.create = function () {
	            // Note: We are not using Object.create(null) here due to
	            // performance!
	            // http://jsperf.com/ng2-object-create-null
	            return {};
	        };
	        StringMapWrapper.contains = function (map, key) {
	            return map.hasOwnProperty(key);
	        };
	        StringMapWrapper.get = function (map, key) {
	            return map.hasOwnProperty(key) ? map[key] : undefined;
	        };
	        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	        StringMapWrapper.keys = function (map) { return Object.keys(map); };
	        StringMapWrapper.values = function (map) {
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.delete = function (map, key) { delete map[key]; };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        // JS has no way to express a statically fixed size list, but dart does so we
	        // keep both methods.
	        ListWrapper.createFixedSize = function (size) { return new Array(size); };
	        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	        ListWrapper.clone = function (array) { return array.slice(0); };
	        ListWrapper.forEachWithIndex = function (array, fn) {
	            for (var i = 0; i < array.length; i++) {
	                fn(array[i], i);
	            }
	        };
	        ListWrapper.first = function (array) {
	            if (!array)
	                return null;
	            return array[0];
	        };
	        ListWrapper.last = function (array) {
	            if (!array || array.length == 0)
	                return null;
	            return array[array.length - 1];
	        };
	        ListWrapper.indexOf = function (array, value, startIndex) {
	            if (startIndex === void 0) { startIndex = 0; }
	            return array.indexOf(value, startIndex);
	        };
	        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	        ListWrapper.reversed = function (array) {
	            var a = ListWrapper.clone(array);
	            return a.reverse();
	        };
	        ListWrapper.concat = function (a, b) { return a.concat(b); };
	        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	        ListWrapper.removeAt = function (list, index) {
	            var res = list[index];
	            list.splice(index, 1);
	            return res;
	        };
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.clear = function (list) { list.length = 0; };
	        ListWrapper.isEmpty = function (list) { return list.length == 0; };
	        ListWrapper.fill = function (list, value, start, end) {
	            if (start === void 0) { start = 0; }
	            if (end === void 0) { end = null; }
	            list.fill(value, start, end === null ? list.length : end);
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.slice = function (l, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return l.slice(from, to === null ? undefined : to);
	        };
	        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	        ListWrapper.sort = function (l, compareFn) {
	            if (isPresent(compareFn)) {
	                l.sort(compareFn);
	            }
	            else {
	                l.sort();
	            }
	        };
	        ListWrapper.toString = function (l) { return l.toString(); };
	        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (isBlank(candidate)) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        ListWrapper.addAll = function (list, source) {
	            for (var i = 0; i < source.length; i++) {
	                list.push(source[i]);
	            }
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Set constructor.  We work around that by manually adding the items.
	    var createSetFromList = (function () {
	        var test = new Set([1, 2, 3]);
	        if (test.size === 3) {
	            return function createSetFromList(lst) { return new Set(lst); };
	        }
	        else {
	            return function createSetAndPopulateFromList(lst) {
	                var res = new Set(lst);
	                if (res.size !== lst.length) {
	                    for (var i = 0; i < lst.length; i++) {
	                        res.add(lst[i]);
	                    }
	                }
	                return res;
	            };
	        }
	    })();

	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
	                { 'required': true } :
	                null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var regex = new RegExp("^" + pattern + "$");
	                var v = control.value;
	                return regex.test(v) ? null :
	                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return StringMapWrapper.isEmpty(res) ? null : res;
	    }

	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');

	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());

	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }

	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));

	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            var indexToRemove = -1;
	            for (var i = 0; i < this._accessors.length; ++i) {
	                if (this._accessors[i][1] === accessor) {
	                    indexToRemove = i;
	                }
	            }
	            ListWrapper.removeAt(this._accessors, indexToRemove);
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * The accessor for writing a radio control value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  @Component({
	     *    template: `
	     *      <input type="radio" name="food" [(ngModel)]="food" value="chicken">
	     *      <input type="radio" name="food" [(ngModel)]="food" value="fish">
	     *    `
	     *  })
	     *  class FoodCmp {
	     *    food = 'chicken';
	     *  }
	     *  ```
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());

	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * Note: We have to listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var value = this._optionMap.get(_extractId(valueString));
	            return isPresent(value) ? value : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select))
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (isPresent(this._select))
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());

	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (isString(value))
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var opt = this._optionMap.get(_extractId$1(valueString));
	            return isPresent(opt) ? opt._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select)) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (isPresent(this._select)) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());

	    function controlPath(name, parent) {
	        var p = ListWrapper.clone(parent.path);
	        p.push(name);
	        return p;
	    }
	    function setUpControl(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        if (isBlank(dir.valueAccessor))
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!StringMapWrapper.contains(changes, 'model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    function isBuiltInAccessor(valueAccessor) {
	        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
	            hasConstructor(valueAccessor, NumberValueAccessor) ||
	            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
	            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
	            hasConstructor(valueAccessor, RadioControlValueAccessor));
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (isBlank(valueAccessors))
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (hasConstructor(v, DefaultValueAccessor)) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (isPresent(builtinAccessor))
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (isPresent(customAccessor))
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (isPresent(customAccessor))
	            return customAccessor;
	        if (isPresent(builtinAccessor))
	            return builtinAccessor;
	        if (isPresent(defaultAccessor))
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.touched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.valid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid'
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (isBlank(path))
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && ListWrapper.isEmpty(path))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return isPresent(v.controls[name]) ? v.controls[name] : null;
	            }
	            else if (v instanceof FormArray) {
	                var index = name;
	                return isPresent(v.at(index)) ? v.at(index) : null;
	            }
	            else {
	                return null;
	            }
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._touched = true;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._pristine = false;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._status = PENDING;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange(true);
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange(false);
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            onlySelf = normalizeBool(onlySelf);
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return isPresent(this.validator) ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (isPresent(this.asyncValidator)) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (isPresent(this._asyncValidationSubscription)) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
	            if (isPresent(control) && isPresent(control._errors)) {
	                return StringMapWrapper.get(control._errors, errorCode);
	            }
	            else {
	                return null;
	            }
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return isPresent(this.getError(errorCode, path));
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (isPresent(x._parent)) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent)) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (isPresent(this._errors))
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status == status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._onDisabledChange = function (isDisabled) { };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
	                'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = null;
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) { this._onDisabledChange = fn; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            StringMapWrapper.delete(this.controls, name);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            StringMapWrapper.delete(this.controls, name);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last; 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            StringMapWrapper.forEach(this.controls, cb);
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            ListWrapper.insert(this.controls, index, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            if (control) {
	                ListWrapper.insert(this.controls, index, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };

	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue != null && disabledValue != false;
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));

	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled)
	                    this.valueAccessor.setDisabledState(true);
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return StringMapWrapper.contains(changes, 'form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (StringMapWrapper.contains(changes, 'form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (isBlank(this.form)) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled)
	                this.valueAccessor.setDisabledState(true);
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));

	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = isPresent(value) && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['minlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.minlength) ? this._validator(c) : null;
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['maxlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.maxlength) ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['pattern']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) {
	            return isPresent(this.pattern) ? this._validator(c) : null;
	        };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());

	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? StringMapWrapper.get(extra, 'validator') : null;
	            var asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, 'asyncValidator') : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	                controls[controlName] = _this._createControl(controlConfig);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());

	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
	        MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());

	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());

	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;

	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var platform_browser_1 = __webpack_require__(48);
	/**
	 * Components helper class to easily work with
	 * allows to:
	 * - get application root view container ref
	 */
	var ComponentsHelper = (function () {
	    function ComponentsHelper(applicationRef, componentFactoryResolver, injector) {
	        this.applicationRef = applicationRef;
	        this.componentFactoryResolver = componentFactoryResolver;
	        this.injector = injector;
	    }
	    ComponentsHelper.prototype.getDocument = function () {
	        return this.injector.get(platform_browser_1.DOCUMENT);
	    };
	    /**
	     * This is a name conventional class to get application root view component ref
	     * to made this method working you need to add:
	     * ```typescript
	     *  @Component({
	     *   selector: 'my-app',
	     *   ...
	     *   })
	     *  export class MyApp {
	     *    constructor(viewContainerRef: ViewContainerRef) {
	     *        // A Default view container ref, usually the app root container ref.
	     *        // Has to be set manually until we can find a way to get it automatically.
	     *        this.viewContainerRef = viewContainerRef;
	     *      }
	     *  }
	     * ```
	     * @returns {ViewContainerRef} - application root view component ref
	     */
	    ComponentsHelper.prototype.getRootViewContainerRef = function () {
	        // The only way for now (by @mhevery)
	        // https://github.com/angular/angular/issues/6446#issuecomment-173459525
	        var appInstance = this.applicationRef.components[0].instance;
	        if (!appInstance.viewContainerRef) {
	            var appName = this.applicationRef.componentTypes[0].name;
	            throw new Error("Missing 'viewContainerRef' declaration in " + appName + " constructor");
	        }
	        return appInstance.viewContainerRef;
	    };
	    /**
	     * Creates an instance of a Component and attaches it to the View Container found at the
	     * `location` specified as {@link ViewContainerRef}.
	     *
	     * You can optionally provide `providers` to configure the {@link Injector} provisioned for this
	     * Component Instance.
	     *
	     * Returns {@link ComponentRef} representing the newly created Component.
	     * @param ComponentClass - @Component class
	     * @param location - reference to the location
	     * @param providers - optional array of providers
	     * @returns {ComponentRef<T>} - returns ComponentRef<T>
	     */
	    ComponentsHelper.prototype.appendNextToLocation = function (ComponentClass, location, providers) {
	        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
	        var parentInjector = location.parentInjector;
	        var childInjector = parentInjector;
	        if (providers && providers.length > 0) {
	            childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
	        }
	        return location.createComponent(componentFactory, location.length, childInjector);
	    };
	    /**
	     * Helper methods to add ComponentClass(like modal backdrop) with options
	     * of type ComponentOptionsClass to element next to application root
	     * or next to provided instance of view container
	     * @param ComponentClass - @Component class
	     * @param ComponentOptionsClass - options class
	     * @param options - instance of options
	     * @returns {ComponentRef<T>} - returns ComponentRef<T>
	     */
	    ComponentsHelper.prototype.appendNextToRoot = function (ComponentClass, ComponentOptionsClass, options) {
	        var location = this.getRootViewContainerRef();
	        var providers = core_1.ReflectiveInjector.resolve([
	            { provide: ComponentOptionsClass, useValue: options }
	        ]);
	        return this.appendNextToLocation(ComponentClass, location, providers);
	    };
	    ComponentsHelper = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.ApplicationRef, core_1.ComponentFactoryResolver, core_1.Injector])
	    ], ComponentsHelper);
	    return ComponentsHelper;
	}());
	exports.ComponentsHelper = ComponentsHelper;


/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports) {

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


/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var browser_1 = __webpack_require__(121);
	(function (Ng2BootstrapTheme) {
	    Ng2BootstrapTheme[Ng2BootstrapTheme["BS3"] = 1] = "BS3";
	    Ng2BootstrapTheme[Ng2BootstrapTheme["BS4"] = 2] = "BS4";
	})(exports.Ng2BootstrapTheme || (exports.Ng2BootstrapTheme = {}));
	var Ng2BootstrapTheme = exports.Ng2BootstrapTheme;
	var Ng2BootstrapConfig = (function () {
	    function Ng2BootstrapConfig() {
	    }
	    Object.defineProperty(Ng2BootstrapConfig, "theme", {
	        get: function () {
	            // hack as for now
	            if (browser_1.window.__theme === 'bs4') {
	                return Ng2BootstrapTheme.BS4;
	            }
	            return (this._theme || Ng2BootstrapTheme.BS3);
	        },
	        set: function (v) {
	            this._theme = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Ng2BootstrapConfig;
	}());
	exports.Ng2BootstrapConfig = Ng2BootstrapConfig;


/***/ },
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(57);
	__webpack_require__(187);
	var Github = (function () {
	    function Github(http) {
	        this.http = http;
	    }
	    Github.prototype.getOrg = function (org) {
	        return this.makeRequest("orgs/" + org);
	    };
	    Github.prototype.getReposForOrg = function (org) {
	        return this.makeRequest("orgs/" + org + "/repos");
	    };
	    Github.prototype.getRepoForOrg = function (org, repo) {
	        return this.makeRequest("repos/" + org + "/" + repo);
	    };
	    Github.prototype.makeRequest = function (path) {
	        var params = new http_1.URLSearchParams();
	        params.set('per_page', '100');
	        var url = "https://api.github.com/" + path;
	        return this.http.get(url, { search: params })
	            .map(function (res) { return res.json(); });
	    };
	    Github = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], Github);
	    return Github;
	    var _a;
	}());
	exports.Github = Github;
	

/***/ },
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var collapse_directive_1 = __webpack_require__(171);
	var CollapseModule = (function () {
	    function CollapseModule() {
	    }
	    CollapseModule = __decorate([
	        core_1.NgModule({
	            declarations: [collapse_directive_1.CollapseDirective],
	            exports: [collapse_directive_1.CollapseDirective]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CollapseModule);
	    return CollapseModule;
	}());
	exports.CollapseModule = CollapseModule;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var date_formatter_1 = __webpack_require__(385);
	var FORMAT_DAY = 'DD';
	var FORMAT_MONTH = 'MMMM';
	var FORMAT_YEAR = 'YYYY';
	var FORMAT_DAY_HEADER = 'dd';
	var FORMAT_DAY_TITLE = 'MMMM YYYY';
	var FORMAT_MONTH_TITLE = 'YYYY';
	var DATEPICKER_MODE = 'day';
	var MIN_MODE = 'day';
	var MAX_MODE = 'year';
	var SHOW_WEEKS = true;
	var ONLY_CURRENT_MONTH = false;
	var STARTING_DAY = 0;
	var YEAR_RANGE = 20;
	// const MIN_DATE:Date = void 0;
	// const MAX_DATE:Date = void 0;
	var SHORTCUT_PROPAGATION = false;
	// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	/*
	 const KEYS = {
	 13: 'enter',
	 32: 'space',
	 33: 'pageup',
	 34: 'pagedown',
	 35: 'end',
	 36: 'home',
	 37: 'left',
	 38: 'up',
	 39: 'right',
	 40: 'down'
	 };
	 */
	var DatePickerInnerComponent = (function () {
	    function DatePickerInnerComponent() {
	        this.selectionDone = new core_1.EventEmitter(undefined);
	        this.stepDay = {};
	        this.stepMonth = {};
	        this.stepYear = {};
	        this.modes = ['day', 'month', 'year'];
	        this.dateFormatter = new date_formatter_1.DateFormatter();
	        this.update = new core_1.EventEmitter(false);
	    }
	    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
	        get: function () {
	            return this._activeDate;
	        },
	        set: function (value) {
	            this._activeDate = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // todo: add formatter value to Date object
	    DatePickerInnerComponent.prototype.ngOnInit = function () {
	        this.formatDay = this.formatDay || FORMAT_DAY;
	        this.formatMonth = this.formatMonth || FORMAT_MONTH;
	        this.formatYear = this.formatYear || FORMAT_YEAR;
	        this.formatDayHeader = this.formatDayHeader || FORMAT_DAY_HEADER;
	        this.formatDayTitle = this.formatDayTitle || FORMAT_DAY_TITLE;
	        this.formatMonthTitle = this.formatMonthTitle || FORMAT_MONTH_TITLE;
	        this.showWeeks = (this.showWeeks === undefined
	            ? SHOW_WEEKS
	            : this.showWeeks);
	        this.onlyCurrentMonth = (this.onlyCurrentMonth === undefined
	            ? ONLY_CURRENT_MONTH
	            : this.onlyCurrentMonth);
	        this.startingDay = this.startingDay || STARTING_DAY;
	        this.yearRange = this.yearRange || YEAR_RANGE;
	        this.shortcutPropagation = this.shortcutPropagation || SHORTCUT_PROPAGATION;
	        this.datepickerMode = this.datepickerMode || DATEPICKER_MODE;
	        this.minMode = this.minMode || MIN_MODE;
	        this.maxMode = this.maxMode || MAX_MODE;
	        // todo: use date for unique value
	        this.uniqueId = 'datepicker-' + '-' + Math.floor(Math.random() * 10000);
	        if (this.initDate) {
	            this.activeDate = this.initDate;
	            this.selectedDate = new Date(this.activeDate.valueOf());
	            this.update.emit(this.activeDate);
	        }
	        else if (this.activeDate === undefined) {
	            this.activeDate = new Date();
	        }
	    };
	    // this.refreshView should be called here to reflect the changes on the fly
	    DatePickerInnerComponent.prototype.ngOnChanges = function () {
	        this.refreshView();
	    };
	    DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
	        if (type === 'day') {
	            this.compareHandlerDay = handler;
	        }
	        if (type === 'month') {
	            this.compareHandlerMonth = handler;
	        }
	        if (type === 'year') {
	            this.compareHandlerYear = handler;
	        }
	    };
	    DatePickerInnerComponent.prototype.compare = function (date1, date2) {
	        if (date1 === undefined || date2 === undefined) {
	            return undefined;
	        }
	        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
	            return this.compareHandlerDay(date1, date2);
	        }
	        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
	            return this.compareHandlerMonth(date1, date2);
	        }
	        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
	            return this.compareHandlerYear(date1, date2);
	        }
	        return void 0;
	    };
	    DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
	        if (type === 'day') {
	            this.refreshViewHandlerDay = handler;
	        }
	        if (type === 'month') {
	            this.refreshViewHandlerMonth = handler;
	        }
	        if (type === 'year') {
	            this.refreshViewHandlerYear = handler;
	        }
	    };
	    DatePickerInnerComponent.prototype.refreshView = function () {
	        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
	            this.refreshViewHandlerDay();
	        }
	        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
	            this.refreshViewHandlerMonth();
	        }
	        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
	            this.refreshViewHandlerYear();
	        }
	    };
	    DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
	        return this.dateFormatter.format(date, format);
	    };
	    DatePickerInnerComponent.prototype.isActive = function (dateObject) {
	        if (this.compare(dateObject.date, this.activeDate) === 0) {
	            this.activeDateId = dateObject.uid;
	            return true;
	        }
	        return false;
	    };
	    DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
	        var dateObject = {};
	        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	        dateObject.label = this.dateFilter(date, format);
	        dateObject.selected = this.compare(date, this.selectedDate) === 0;
	        dateObject.disabled = this.isDisabled(date);
	        dateObject.current = this.compare(date, new Date()) === 0;
	        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
	        return dateObject;
	    };
	    DatePickerInnerComponent.prototype.split = function (arr, size) {
	        var arrays = [];
	        while (arr.length > 0) {
	            arrays.push(arr.splice(0, size));
	        }
	        return arrays;
	    };
	    // Fix a hard-reproducible bug with timezones
	    // The bug depends on OS, browser, current timezone and current date
	    // i.e.
	    // var date = new Date(2014, 0, 1);
	    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
	    // date.getHours()); can result in "2013 11 31 23" because of the bug.
	    DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
	        var hours = date.getHours();
	        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
	    };
	    DatePickerInnerComponent.prototype.select = function (date) {
	        if (this.datepickerMode === this.minMode) {
	            if (!this.activeDate) {
	                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
	            }
	            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	            this.selectionDone.emit(this.activeDate);
	        }
	        else {
	            this.activeDate = date;
	            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
	        }
	        this.selectedDate = new Date(this.activeDate.valueOf());
	        this.update.emit(this.activeDate);
	        this.refreshView();
	    };
	    DatePickerInnerComponent.prototype.move = function (direction) {
	        var expectedStep;
	        if (this.datepickerMode === 'day') {
	            expectedStep = this.stepDay;
	        }
	        if (this.datepickerMode === 'month') {
	            expectedStep = this.stepMonth;
	        }
	        if (this.datepickerMode === 'year') {
	            expectedStep = this.stepYear;
	        }
	        if (expectedStep) {
	            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
	            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
	            this.activeDate = new Date(year, month, 1);
	            this.refreshView();
	        }
	    };
	    DatePickerInnerComponent.prototype.toggleMode = function (direction) {
	        direction = direction || 1;
	        if ((this.datepickerMode === this.maxMode && direction === 1) ||
	            (this.datepickerMode === this.minMode && direction === -1)) {
	            return;
	        }
	        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
	        this.refreshView();
	    };
	    DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
	        var _this = this;
	        if (!this.customClass) {
	            return '';
	        }
	        // todo: build a hash of custom classes, it will work faster
	        var customClassObject = this.customClass
	            .find(function (customClass) {
	            return customClass.date.valueOf() === date.valueOf() &&
	                customClass.mode === _this.datepickerMode;
	        }, this);
	        return customClassObject === undefined ? '' : customClassObject.clazz;
	    };
	    DatePickerInnerComponent.prototype.isDisabled = function (date) {
	        // todo: implement dateDisabled attribute
	        return ((this.minDate && this.compare(date, this.minDate) < 0) ||
	            (this.maxDate && this.compare(date, this.maxDate) > 0));
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "datepickerMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatePickerInnerComponent.prototype, "startingDay", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatePickerInnerComponent.prototype, "yearRange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerInnerComponent.prototype, "minDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerInnerComponent.prototype, "maxDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "minMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "maxMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatePickerInnerComponent.prototype, "showWeeks", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "formatDay", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "formatMonth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "formatYear", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "formatDayHeader", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "formatDayTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerInnerComponent.prototype, "formatMonthTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatePickerInnerComponent.prototype, "onlyCurrentMonth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatePickerInnerComponent.prototype, "shortcutPropagation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DatePickerInnerComponent.prototype, "customClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DatePickerInnerComponent.prototype, "dateDisabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerInnerComponent.prototype, "initDate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatePickerInnerComponent.prototype, "selectionDone", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatePickerInnerComponent.prototype, "update", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerInnerComponent.prototype, "activeDate", null);
	    DatePickerInnerComponent = __decorate([
	        core_1.Component({
	            selector: 'datepicker-inner',
	            template: "\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" ><!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n      <ng-content></ng-content>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DatePickerInnerComponent);
	    return DatePickerInnerComponent;
	}());
	exports.DatePickerInnerComponent = DatePickerInnerComponent;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var dropdown_service_1 = __webpack_require__(390);
	var DropdownDirective = (function () {
	    function DropdownDirective(el, ref) {
	        this.onToggle = new core_1.EventEmitter(false);
	        this.isOpenChange = new core_1.EventEmitter(false);
	        this.addClass = true;
	        // @Query('dropdownMenu', {descendants: false})
	        // dropdownMenuList:QueryList<ElementRef>) {
	        this.el = el;
	        this._changeDetector = ref;
	        // todo: bind to route change event
	    }
	    Object.defineProperty(DropdownDirective.prototype, "isOpen", {
	        get: function () {
	            return this._isOpen;
	        },
	        set: function (value) {
	            this._isOpen = !!value;
	            // todo: implement after porting position
	            // if (this.appendToBody && this.menuEl) {
	            //
	            // }
	            // todo: $animate open<->close transitions, as soon as ng2Animate will be
	            // ready
	            if (this.isOpen) {
	                this.focusToggleElement();
	                dropdown_service_1.dropdownService.open(this);
	            }
	            else {
	                dropdown_service_1.dropdownService.close(this);
	                this.selectedOption = void 0;
	            }
	            this.onToggle.emit(this.isOpen);
	            this.isOpenChange.emit(this.isOpen);
	            this._changeDetector.markForCheck();
	            // todo: implement call to setIsOpen if set and function
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DropdownDirective.prototype.ngOnInit = function () {
	        this.autoClose = this.autoClose || dropdown_service_1.NONINPUT;
	        if (this.isOpen) {
	        }
	    };
	    DropdownDirective.prototype.ngOnDestroy = function () {
	        if (this.appendToBody && this.menuEl) {
	            this.menuEl.nativeElement.remove();
	        }
	    };
	    Object.defineProperty(DropdownDirective.prototype, "dropDownMenu", {
	        set: function (dropdownMenu) {
	            // init drop down menu
	            this.menuEl = dropdownMenu.el;
	            if (this.appendToBody) {
	                window.document.body.appendChild(this.menuEl.nativeElement);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DropdownDirective.prototype, "dropDownToggle", {
	        set: function (dropdownToggle) {
	            // init toggle element
	            this.toggleEl = dropdownToggle.el;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DropdownDirective.prototype.toggle = function (open) {
	        return this.isOpen = arguments.length ? !!open : !this.isOpen;
	    };
	    DropdownDirective.prototype.focusDropdownEntry = function (keyCode) {
	        // If append to body is used.
	        var hostEl = this.menuEl ?
	            this.menuEl.nativeElement :
	            this.el.nativeElement.getElementsByTagName('ul')[0];
	        if (!hostEl) {
	            // todo: throw exception?
	            return;
	        }
	        var elems = hostEl.getElementsByTagName('a');
	        if (!elems || !elems.length) {
	            // todo: throw exception?
	            return;
	        }
	        // todo: use parseInt to detect isNumber?
	        // todo: or implement selectedOption as a get\set pair with parseInt on set
	        switch (keyCode) {
	            case (40):
	                if (typeof this.selectedOption !== 'number') {
	                    this.selectedOption = 0;
	                    break;
	                }
	                if (this.selectedOption === elems.length - 1) {
	                    break;
	                }
	                this.selectedOption++;
	                break;
	            case (38):
	                if (typeof this.selectedOption !== 'number') {
	                    return;
	                }
	                if (this.selectedOption === 0) {
	                    // todo: return?
	                    break;
	                }
	                this.selectedOption--;
	                break;
	            default:
	                break;
	        }
	        elems[this.selectedOption].focus();
	    };
	    DropdownDirective.prototype.focusToggleElement = function () {
	        if (this.toggleEl) {
	            this.toggleEl.nativeElement.focus();
	        }
	    };
	    __decorate([
	        core_1.HostBinding('class.open'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DropdownDirective.prototype, "isOpen", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DropdownDirective.prototype, "autoClose", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DropdownDirective.prototype, "keyboardNav", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DropdownDirective.prototype, "appendToBody", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DropdownDirective.prototype, "onToggle", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DropdownDirective.prototype, "isOpenChange", void 0);
	    __decorate([
	        core_1.HostBinding('class.dropdown'), 
	        __metadata('design:type', Boolean)
	    ], DropdownDirective.prototype, "addClass", void 0);
	    DropdownDirective = __decorate([
	        core_1.Directive({
	            selector: '[dropdown]',
	            exportAs: 'bs-dropdown'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
	    ], DropdownDirective);
	    return DropdownDirective;
	}());
	exports.DropdownDirective = DropdownDirective;


/***/ },
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	// todo: support template url
	var AccordionComponent = (function () {
	    function AccordionComponent() {
	        /* tslint:disable:no-unused-variable */
	        this.addClass = true;
	        /* tslint:enable:no-unused-variable */
	        this.groups = [];
	    }
	    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
	        if (!this.closeOthers) {
	            return;
	        }
	        this.groups.forEach(function (group) {
	            if (group !== openGroup) {
	                group.isOpen = false;
	            }
	        });
	    };
	    AccordionComponent.prototype.addGroup = function (group) {
	        this.groups.push(group);
	    };
	    AccordionComponent.prototype.removeGroup = function (group) {
	        var index = this.groups.indexOf(group);
	        if (index !== -1) {
	            this.groups.splice(index, 1);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AccordionComponent.prototype, "closeOthers", void 0);
	    __decorate([
	        core_1.HostBinding('class.panel-group'), 
	        __metadata('design:type', Boolean)
	    ], AccordionComponent.prototype, "addClass", void 0);
	    AccordionComponent = __decorate([
	        core_1.Component({
	            selector: 'accordion',
	            template: "<ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AccordionComponent);
	    return AccordionComponent;
	}());
	exports.AccordionComponent = AccordionComponent;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var collapse_module_1 = __webpack_require__(69);
	var accordion_group_component_1 = __webpack_require__(166);
	var accordion_component_1 = __webpack_require__(95);
	var AccordionModule = (function () {
	    function AccordionModule() {
	    }
	    AccordionModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, collapse_module_1.CollapseModule],
	            declarations: [accordion_component_1.AccordionComponent, accordion_group_component_1.AccordionPanelComponent],
	            exports: [accordion_component_1.AccordionComponent, accordion_group_component_1.AccordionPanelComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AccordionModule);
	    return AccordionModule;
	}());
	exports.AccordionModule = AccordionModule;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var alert_component_1 = __webpack_require__(167);
	var AlertModule = (function () {
	    function AlertModule() {
	    }
	    AlertModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [alert_component_1.AlertComponent],
	            exports: [alert_component_1.AlertComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AlertModule);
	    return AlertModule;
	}());
	exports.AlertModule = AlertModule;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var button_checkbox_directive_1 = __webpack_require__(168);
	var button_radio_directive_1 = __webpack_require__(169);
	var ButtonsModule = (function () {
	    function ButtonsModule() {
	    }
	    ButtonsModule = __decorate([
	        core_1.NgModule({
	            imports: [forms_1.FormsModule],
	            declarations: [button_checkbox_directive_1.ButtonCheckboxDirective, button_radio_directive_1.ButtonRadioDirective],
	            exports: [button_checkbox_directive_1.ButtonCheckboxDirective, button_radio_directive_1.ButtonRadioDirective, forms_1.FormsModule]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ButtonsModule);
	    return ButtonsModule;
	}());
	exports.ButtonsModule = ButtonsModule;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// todo: add animate
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_bootstrap_config_1 = __webpack_require__(47);
	(function (Direction) {
	    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
	    Direction[Direction["NEXT"] = 1] = "NEXT";
	    Direction[Direction["PREV"] = 2] = "PREV";
	})(exports.Direction || (exports.Direction = {}));
	var Direction = exports.Direction;
	var NAVIGATION = (_a = {},
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = "\n    <a class=\"left carousel-control\" (click)=\"prev()\" *ngIf=\"slides.length\">\n      <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" (click)=\"next()\" *ngIf=\"slides.length\">\n      <span class=\"icon-next\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  ",
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = "\n    <a class=\"left carousel-control\" (click)=\"prev()\" *ngIf=\"slides.length\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a class=\"right carousel-control\" (click)=\"next()\" *ngIf=\"slides.length\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    </a>\n  ",
	    _a
	);
	// todo:
	// (ng-swipe-right)="prev()" (ng-swipe-left)="next()"
	/**
	 * Problems:
	 * 1) if we set an active slide via model changes, .active class remains on a current slide.
	 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
	 * 3) if first or last slide is active and noWrap is true, there should be "disabled" class on the nav buttons.
	 * 4) default interval should be equal 5000
	 */
	var CarouselComponent = (function () {
	    function CarouselComponent() {
	        this.slides = [];
	        this.destroyed = false;
	    }
	    Object.defineProperty(CarouselComponent.prototype, "interval", {
	        get: function () {
	            return this._interval;
	        },
	        set: function (value) {
	            this._interval = value;
	            this.restartTimer();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CarouselComponent.prototype.ngOnDestroy = function () {
	        this.destroyed = true;
	    };
	    CarouselComponent.prototype.select = function (nextSlide, direction) {
	        if (direction === void 0) { direction = Direction.UNKNOWN; }
	        var nextIndex = nextSlide.index;
	        if (direction === Direction.UNKNOWN) {
	            direction = nextIndex > this.getCurrentIndex()
	                ? Direction.NEXT
	                : Direction.PREV;
	        }
	        // Prevent this user-triggered transition from occurring if there is
	        // already one in progress
	        if (nextSlide && nextSlide !== this.currentSlide) {
	            this.goNext(nextSlide, direction);
	        }
	    };
	    CarouselComponent.prototype.play = function () {
	        if (!this.isPlaying) {
	            this.isPlaying = true;
	            this.restartTimer();
	        }
	    };
	    CarouselComponent.prototype.pause = function () {
	        if (!this.noPause) {
	            this.isPlaying = false;
	            this.resetTimer();
	        }
	    };
	    CarouselComponent.prototype.next = function () {
	        var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
	        if (newIndex === 0 && this.noWrap) {
	            this.pause();
	            return;
	        }
	        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
	    };
	    CarouselComponent.prototype.prev = function () {
	        var newIndex = this.getCurrentIndex() - 1 < 0
	            ? this.slides.length - 1
	            : this.getCurrentIndex() - 1;
	        if (this.noWrap && newIndex === this.slides.length - 1) {
	            this.pause();
	            return;
	        }
	        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
	    };
	    CarouselComponent.prototype.addSlide = function (slide) {
	        slide.index = this.slides.length;
	        this.slides.push(slide);
	        if (this.slides.length === 1 || slide.active) {
	            this.select(this.slides[this.slides.length - 1]);
	            if (this.slides.length === 1) {
	                this.play();
	            }
	        }
	        else {
	            slide.active = false;
	        }
	    };
	    CarouselComponent.prototype.removeSlide = function (slide) {
	        this.slides.splice(slide.index, 1);
	        if (this.slides.length === 0) {
	            this.currentSlide = void 0;
	            return;
	        }
	        for (var i = 0; i < this.slides.length; i++) {
	            this.slides[i].index = i;
	        }
	    };
	    CarouselComponent.prototype.goNext = function (slide, direction) {
	        if (this.destroyed) {
	            return;
	        }
	        slide.direction = direction;
	        slide.active = true;
	        if (this.currentSlide) {
	            this.currentSlide.direction = direction;
	            this.currentSlide.active = false;
	        }
	        this.currentSlide = slide;
	        // every time you change slides, reset the timer
	        this.restartTimer();
	    };
	    CarouselComponent.prototype.getSlideByIndex = function (index) {
	        var len = this.slides.length;
	        for (var i = 0; i < len; ++i) {
	            if (this.slides[i].index === index) {
	                return this.slides[i];
	            }
	        }
	        return void 0;
	    };
	    CarouselComponent.prototype.getCurrentIndex = function () {
	        return !this.currentSlide ? 0 : this.currentSlide.index;
	    };
	    CarouselComponent.prototype.restartTimer = function () {
	        var _this = this;
	        this.resetTimer();
	        var interval = +this.interval;
	        if (!isNaN(interval) && interval > 0) {
	            this.currentInterval = setInterval(function () {
	                var nInterval = +_this.interval;
	                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
	                    _this.next();
	                }
	                else {
	                    _this.pause();
	                }
	            }, interval);
	        }
	    };
	    CarouselComponent.prototype.resetTimer = function () {
	        if (this.currentInterval) {
	            clearInterval(this.currentInterval);
	            this.currentInterval = void 0;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CarouselComponent.prototype, "noWrap", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CarouselComponent.prototype, "noPause", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CarouselComponent.prototype, "noTransition", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CarouselComponent.prototype, "interval", null);
	    CarouselComponent = __decorate([
	        core_1.Component({
	            selector: 'carousel',
	            template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1\">\n         <li *ngFor=\"let slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n      " + NAVIGATION[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme] + "\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CarouselComponent);
	    return CarouselComponent;
	}());
	exports.CarouselComponent = CarouselComponent;
	var _a;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var carousel_component_1 = __webpack_require__(99);
	var slide_component_1 = __webpack_require__(170);
	var CarouselModule = (function () {
	    function CarouselModule() {
	    }
	    CarouselModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [slide_component_1.SlideComponent, carousel_component_1.CarouselComponent],
	            exports: [slide_component_1.SlideComponent, carousel_component_1.CarouselComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CarouselModule);
	    return CarouselModule;
	}());
	exports.CarouselModule = CarouselModule;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var datepicker_inner_component_1 = __webpack_require__(70);
	var datepicker_component_1 = __webpack_require__(173);
	var daypicker_component_1 = __webpack_require__(386);
	var monthpicker_component_1 = __webpack_require__(387);
	var yearpicker_component_1 = __webpack_require__(388);
	var components_helper_service_1 = __webpack_require__(30);
	var DatepickerModule = (function () {
	    function DatepickerModule() {
	    }
	    DatepickerModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            declarations: [datepicker_component_1.DatePickerComponent, datepicker_inner_component_1.DatePickerInnerComponent, daypicker_component_1.DayPickerComponent,
	                monthpicker_component_1.MonthPickerComponent, yearpicker_component_1.YearPickerComponent],
	            exports: [datepicker_component_1.DatePickerComponent, datepicker_inner_component_1.DatePickerInnerComponent, daypicker_component_1.DayPickerComponent, forms_1.FormsModule,
	                monthpicker_component_1.MonthPickerComponent, yearpicker_component_1.YearPickerComponent],
	            providers: [components_helper_service_1.ComponentsHelper]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DatepickerModule);
	    return DatepickerModule;
	}());
	exports.DatepickerModule = DatepickerModule;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var dropdown_menu_directive_1 = __webpack_require__(174);
	var dropdown_toggle_directive_1 = __webpack_require__(175);
	var dropdown_directive_1 = __webpack_require__(71);
	var DropdownModule = (function () {
	    function DropdownModule() {
	    }
	    DropdownModule = __decorate([
	        core_1.NgModule({
	            declarations: [dropdown_directive_1.DropdownDirective, dropdown_menu_directive_1.DropdownMenuDirective, dropdown_toggle_directive_1.DropdownToggleDirective],
	            exports: [dropdown_directive_1.DropdownDirective, dropdown_menu_directive_1.DropdownMenuDirective, dropdown_toggle_directive_1.DropdownToggleDirective]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DropdownModule);
	    return DropdownModule;
	}());
	exports.DropdownModule = DropdownModule;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_options_class_1 = __webpack_require__(104);
	var ModalBackdropOptions = (function () {
	    function ModalBackdropOptions(options) {
	        this.animate = true;
	        Object.assign(this, options);
	    }
	    return ModalBackdropOptions;
	}());
	exports.ModalBackdropOptions = ModalBackdropOptions;
	var ModalBackdropComponent = (function () {
	    function ModalBackdropComponent(options, element, renderer) {
	        this._isShown = false;
	        this.element = element;
	        this.renderer = renderer;
	        this.isAnimated = options.animate !== false;
	    }
	    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
	        get: function () {
	            return this._isAnimated;
	        },
	        set: function (value) {
	            this._isAnimated = value;
	            this.renderer.setElementClass(this.element.nativeElement, "" + modal_options_class_1.ClassName.FADE, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
	        get: function () {
	            return this._isShown;
	        },
	        set: function (value) {
	            this._isShown = value;
	            this.renderer.setElementClass(this.element.nativeElement, "" + modal_options_class_1.ClassName.IN, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ModalBackdropComponent = __decorate([
	        core_1.Component({
	            selector: 'bs-modal-backdrop',
	            template: '',
	            host: { 'class': "" + modal_options_class_1.ClassName.BACKDROP }
	        }), 
	        __metadata('design:paramtypes', [ModalBackdropOptions, core_1.ElementRef, core_1.Renderer])
	    ], ModalBackdropComponent);
	    return ModalBackdropComponent;
	}());
	exports.ModalBackdropComponent = ModalBackdropComponent;


/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	exports.modalConfigDefaults = {
	    backdrop: true,
	    keyboard: true,
	    focus: true,
	    show: true,
	    ignoreBackdropClick: false
	};
	exports.ClassName = {
	    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
	    BACKDROP: 'modal-backdrop',
	    OPEN: 'modal-open',
	    FADE: 'fade',
	    IN: 'in'
	};
	exports.Selector = {
	    DIALOG: '.modal-dialog',
	    DATA_TOGGLE: '[data-toggle="modal"]',
	    DATA_DISMISS: '[data-dismiss="modal"]',
	    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
	};


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_backdrop_component_1 = __webpack_require__(103);
	var modal_component_1 = __webpack_require__(176);
	var components_helper_service_1 = __webpack_require__(30);
	var ModalModule = (function () {
	    function ModalModule() {
	    }
	    ModalModule = __decorate([
	        core_1.NgModule({
	            declarations: [modal_backdrop_component_1.ModalBackdropComponent, modal_component_1.ModalDirective],
	            exports: [modal_backdrop_component_1.ModalBackdropComponent, modal_component_1.ModalDirective],
	            entryComponents: [modal_backdrop_component_1.ModalBackdropComponent],
	            providers: [components_helper_service_1.ComponentsHelper]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ModalModule);
	    return ModalModule;
	}());
	exports.ModalModule = ModalModule;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var paginationConfig = {
	    maxSize: void 0,
	    itemsPerPage: 10,
	    boundaryLinks: false,
	    directionLinks: true,
	    firstText: 'First',
	    previousText: 'Previous',
	    nextText: 'Next',
	    lastText: 'Last',
	    rotate: true
	};
	var PAGINATION_TEMPLATE = "\n  <ul class=\"pagination\" [ngClass]=\"classMap\">\n    <li class=\"pagination-first page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a>\n    </li>\n\n    <li class=\"pagination-prev page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a>\n      </li>\n\n    <li *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.active\"\n        [class.disabled]=\"disabled&&!pg.active\"\n        class=\"pagination-page page-item\">\n      <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a>\n    </li>\n\n    <li class=\"pagination-next page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noNext()\">\n      <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li>\n\n    <li class=\"pagination-last page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noNext()\">\n      <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li>\n  </ul>\n  ";
	/* tslint:disable */
	var PaginationComponent = (function () {
	    function PaginationComponent(cd, renderer, elementRef) {
	        this.numPages = new core_1.EventEmitter(false);
	        this.pageChanged = new core_1.EventEmitter(false);
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        this.inited = false;
	        this.cd = cd;
	        this.renderer = renderer;
	        this.elementRef = elementRef;
	        cd.valueAccessor = this;
	        this.config = this.config || paginationConfig;
	    }
	    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
	        get: function () {
	            return this._itemsPerPage;
	        },
	        set: function (v) {
	            this._itemsPerPage = v;
	            this.totalPages = this.calculateTotalPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
	        get: function () {
	            return this._totalItems;
	        },
	        set: function (v) {
	            this._totalItems = v;
	            this.totalPages = this.calculateTotalPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
	        get: function () {
	            return this._totalPages;
	        },
	        set: function (v) {
	            this._totalPages = v;
	            this.numPages.emit(v);
	            if (this.inited) {
	                this.selectPage(this.page);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PaginationComponent.prototype, "page", {
	        get: function () {
	            return this._page;
	        },
	        set: function (value) {
	            var _previous = this._page;
	            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
	            if (_previous === this._page || typeof _previous === 'undefined') {
	                return;
	            }
	            this.pageChanged.emit({
	                page: this._page,
	                itemsPerPage: this.itemsPerPage
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PaginationComponent.prototype.ngOnInit = function () {
	        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
	        // watch for maxSize
	        this.maxSize = typeof this.maxSize !== 'undefined'
	            ? this.maxSize
	            : paginationConfig.maxSize;
	        this.rotate = typeof this.rotate !== 'undefined'
	            ? this.rotate
	            : paginationConfig.rotate;
	        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined'
	            ? this.boundaryLinks
	            : paginationConfig.boundaryLinks;
	        this.directionLinks = typeof this.directionLinks !== 'undefined'
	            ? this.directionLinks
	            : paginationConfig.directionLinks;
	        // base class
	        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined'
	            ? this.itemsPerPage
	            : paginationConfig.itemsPerPage;
	        this.totalPages = this.calculateTotalPages();
	        // this class
	        this.pages = this.getPages(this.page, this.totalPages);
	        this.page = this.cd.value;
	        this.inited = true;
	    };
	    PaginationComponent.prototype.writeValue = function (value) {
	        this.page = value;
	        this.pages = this.getPages(this.page, this.totalPages);
	    };
	    PaginationComponent.prototype.getText = function (key) {
	        return this[key + 'Text'] || paginationConfig[key + 'Text'];
	    };
	    PaginationComponent.prototype.noPrevious = function () {
	        return this.page === 1;
	    };
	    PaginationComponent.prototype.noNext = function () {
	        return this.page === this.totalPages;
	    };
	    PaginationComponent.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    PaginationComponent.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    PaginationComponent.prototype.selectPage = function (page, event) {
	        if (event) {
	            event.preventDefault();
	        }
	        if (!this.disabled) {
	            if (event && event.target) {
	                var target = event.target;
	                target.blur();
	            }
	            this.writeValue(page);
	            this.cd.viewToModelUpdate(this.page);
	        }
	    };
	    // Create page object used in template
	    PaginationComponent.prototype.makePage = function (num, text, isActive) {
	        return {
	            number: num,
	            text: text,
	            active: isActive
	        };
	    };
	    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
	        var pages = [];
	        // Default page limits
	        var startPage = 1;
	        var endPage = totalPages;
	        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
	        // recompute if maxSize
	        if (isMaxSized) {
	            if (this.rotate) {
	                // Current page is displayed in the middle of the visible ones
	                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
	                endPage = startPage + this.maxSize - 1;
	                // Adjust if limit is exceeded
	                if (endPage > totalPages) {
	                    endPage = totalPages;
	                    startPage = endPage - this.maxSize + 1;
	                }
	            }
	            else {
	                // Visible pages are paginated with maxSize
	                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
	                // Adjust last page if limit is exceeded
	                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
	            }
	        }
	        // Add page number links
	        for (var num = startPage; num <= endPage; num++) {
	            var page = this.makePage(num, num.toString(), num === currentPage);
	            pages.push(page);
	        }
	        // Add links to move between page sets
	        if (isMaxSized && !this.rotate) {
	            if (startPage > 1) {
	                var previousPageSet = this.makePage(startPage - 1, '...', false);
	                pages.unshift(previousPageSet);
	            }
	            if (endPage < totalPages) {
	                var nextPageSet = this.makePage(endPage + 1, '...', false);
	                pages.push(nextPageSet);
	            }
	        }
	        return pages;
	    };
	    // base class
	    PaginationComponent.prototype.calculateTotalPages = function () {
	        var totalPages = this.itemsPerPage < 1
	            ? 1
	            : Math.ceil(this.totalItems / this.itemsPerPage);
	        return Math.max(totalPages || 0, 1);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationComponent.prototype, "align", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], PaginationComponent.prototype, "maxSize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationComponent.prototype, "boundaryLinks", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationComponent.prototype, "directionLinks", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PaginationComponent.prototype, "firstText", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PaginationComponent.prototype, "previousText", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PaginationComponent.prototype, "nextText", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PaginationComponent.prototype, "lastText", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationComponent.prototype, "rotate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationComponent.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], PaginationComponent.prototype, "numPages", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], PaginationComponent.prototype, "pageChanged", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], PaginationComponent.prototype, "itemsPerPage", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], PaginationComponent.prototype, "totalItems", null);
	    PaginationComponent = __decorate([
	        core_1.Component({
	            selector: 'pagination[ngModel]',
	            template: PAGINATION_TEMPLATE,
	            providers: [forms_1.NgModel]
	        }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel, core_1.Renderer, core_1.ElementRef])
	    ], PaginationComponent);
	    return PaginationComponent;
	}());
	exports.PaginationComponent = PaginationComponent;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var pager_component_1 = __webpack_require__(177);
	var pagination_component_1 = __webpack_require__(106);
	var PaginationModule = (function () {
	    function PaginationModule() {
	    }
	    PaginationModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            declarations: [pager_component_1.PagerComponent, pagination_component_1.PaginationComponent],
	            exports: [forms_1.FormsModule, pager_component_1.PagerComponent, pagination_component_1.PaginationComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PaginationModule);
	    return PaginationModule;
	}());
	exports.PaginationModule = PaginationModule;


/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";
	var PositionService = (function () {
	    function PositionService() {
	    }
	    /**
	     * Provides read-only equivalent of jQuery's position function:
	     * http://api.jquery.com/position/
	     */
	    PositionService.prototype.position = function (nativeEl) {
	        var elBCR = this.offset(nativeEl);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = this.parentOffsetEl(nativeEl);
	        if (offsetParentEl !== this.document) {
	            offsetParentBCR = this.offset(offsetParentEl);
	            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }
	        var boundingClientRect = nativeEl.getBoundingClientRect();
	        return {
	            width: boundingClientRect.width || nativeEl.offsetWidth,
	            height: boundingClientRect.height || nativeEl.offsetHeight,
	            top: elBCR.top - offsetParentBCR.top,
	            left: elBCR.left - offsetParentBCR.left
	        };
	    };
	    /**
	     * Provides read-only equivalent of jQuery's offset function:
	     * http://api.jquery.com/offset/
	     */
	    PositionService.prototype.offset = function (nativeEl) {
	        var boundingClientRect = nativeEl.getBoundingClientRect();
	        return {
	            width: boundingClientRect.width || nativeEl.offsetWidth,
	            height: boundingClientRect.height || nativeEl.offsetHeight,
	            top: boundingClientRect.top + (this.window.pageYOffset || this.document.documentElement.scrollTop),
	            left: boundingClientRect.left + (this.window.pageXOffset || this.document.documentElement.scrollLeft)
	        };
	    };
	    /**
	     * Provides coordinates for the targetEl in relation to hostEl
	     */
	    PositionService.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0];
	        var pos1 = positionStrParts[1] || 'center';
	        var hostElPos = appendToBody ?
	            this.offset(hostEl) :
	            this.position(hostEl);
	        var targetElWidth = targetEl.offsetWidth;
	        var targetElHeight = targetEl.offsetHeight;
	        var shiftWidth = {
	            center: function () {
	                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	            },
	            left: function () {
	                return hostElPos.left;
	            },
	            right: function () {
	                return hostElPos.left + hostElPos.width;
	            }
	        };
	        var shiftHeight = {
	            center: function () {
	                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	            },
	            top: function () {
	                return hostElPos.top;
	            },
	            bottom: function () {
	                return hostElPos.top + hostElPos.height;
	            }
	        };
	        var targetElPos;
	        switch (pos0) {
	            case 'right':
	                targetElPos = {
	                    top: shiftHeight[pos1](),
	                    left: shiftWidth[pos0]()
	                };
	                break;
	            case 'left':
	                targetElPos = {
	                    top: shiftHeight[pos1](),
	                    left: hostElPos.left - targetElWidth
	                };
	                break;
	            case 'bottom':
	                targetElPos = {
	                    top: shiftHeight[pos0](),
	                    left: shiftWidth[pos1]()
	                };
	                break;
	            default:
	                targetElPos = {
	                    top: hostElPos.top - targetElHeight,
	                    left: shiftWidth[pos1]()
	                };
	                break;
	        }
	        return targetElPos;
	    };
	    Object.defineProperty(PositionService.prototype, "window", {
	        get: function () {
	            return window;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PositionService.prototype, "document", {
	        get: function () {
	            return window.document;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PositionService.prototype.getStyle = function (nativeEl, cssProp) {
	        // IE
	        if (nativeEl.currentStyle) {
	            return nativeEl.currentStyle[cssProp];
	        }
	        if (this.window.getComputedStyle) {
	            return this.window.getComputedStyle(nativeEl)[cssProp];
	        }
	        // finally try and get inline style
	        return nativeEl.style[cssProp];
	    };
	    /**
	     * Checks if a given element is statically positioned
	     * @param nativeEl - raw DOM element
	     */
	    PositionService.prototype.isStaticPositioned = function (nativeEl) {
	        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
	    };
	    /**
	     * returns the closest, non-statically positioned parentOffset of a given
	     * element
	     * @param nativeEl
	     */
	    PositionService.prototype.parentOffsetEl = function (nativeEl) {
	        var offsetParent = nativeEl.offsetParent || this.document;
	        while (offsetParent && offsetParent !== this.document &&
	            this.isStaticPositioned(offsetParent)) {
	            offsetParent = offsetParent.offsetParent;
	        }
	        return offsetParent || this.document;
	    };
	    ;
	    return PositionService;
	}());
	exports.PositionService = PositionService;
	exports.positionService = new PositionService();


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var progressConfig = {
	    animate: true,
	    max: 100
	};
	// todo: progress element conflict with bootstrap.css
	// todo: need hack: replace host element with div
	/* tslint:disable */
	var ProgressDirective = (function () {
	    function ProgressDirective() {
	        this.addClass = true;
	        this.bars = [];
	    }
	    Object.defineProperty(ProgressDirective.prototype, "max", {
	        get: function () {
	            return this._max;
	        },
	        set: function (v) {
	            this._max = v;
	            this.bars.forEach(function (bar) {
	                bar.recalculatePercentage();
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ProgressDirective.prototype.ngOnInit = function () {
	        this.animate = this.animate !== false;
	        this.max = typeof this.max === 'number' ? this.max : progressConfig.max;
	    };
	    ProgressDirective.prototype.addBar = function (bar) {
	        if (!this.animate) {
	            bar.transition = 'none';
	        }
	        this.bars.push(bar);
	    };
	    ProgressDirective.prototype.removeBar = function (bar) {
	        this.bars.splice(this.bars.indexOf(bar), 1);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ProgressDirective.prototype, "animate", void 0);
	    __decorate([
	        core_1.HostBinding('attr.max'),
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ProgressDirective.prototype, "max", null);
	    __decorate([
	        core_1.HostBinding('class.progress'), 
	        __metadata('design:type', Boolean)
	    ], ProgressDirective.prototype, "addClass", void 0);
	    ProgressDirective = __decorate([
	        core_1.Directive({ selector: 'bs-progress, [progress]' }), 
	        __metadata('design:paramtypes', [])
	    ], ProgressDirective);
	    return ProgressDirective;
	}());
	exports.ProgressDirective = ProgressDirective;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var bar_component_1 = __webpack_require__(178);
	var progress_directive_1 = __webpack_require__(109);
	var progressbar_component_1 = __webpack_require__(179);
	var ProgressbarModule = (function () {
	    function ProgressbarModule() {
	    }
	    ProgressbarModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [progress_directive_1.ProgressDirective, bar_component_1.BarComponent, progressbar_component_1.ProgressbarComponent],
	            exports: [progress_directive_1.ProgressDirective, bar_component_1.BarComponent, progressbar_component_1.ProgressbarComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProgressbarModule);
	    return ProgressbarModule;
	}());
	exports.ProgressbarModule = ProgressbarModule;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var rating_component_1 = __webpack_require__(180);
	var RatingModule = (function () {
	    function RatingModule() {
	    }
	    RatingModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            declarations: [rating_component_1.RatingComponent],
	            exports: [forms_1.FormsModule, rating_component_1.RatingComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RatingModule);
	    return RatingModule;
	}());
	exports.RatingModule = RatingModule;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var tabset_component_1 = __webpack_require__(114);
	/* tslint:disable */
	var TabDirective = (function () {
	    function TabDirective(tabset) {
	        this.select = new core_1.EventEmitter(false);
	        this.deselect = new core_1.EventEmitter(false);
	        this.removed = new core_1.EventEmitter(false);
	        this.addClass = true;
	        this.tabset = tabset;
	        this.tabset.addTab(this);
	    }
	    Object.defineProperty(TabDirective.prototype, "active", {
	        /** tab active state toggle */
	        get: function () {
	            return this._active;
	        },
	        set: function (active) {
	            var _this = this;
	            if (this.disabled && active || !active) {
	                if (!active) {
	                    this._active = active;
	                }
	                this.deselect.emit(this);
	                return;
	            }
	            this._active = active;
	            this.select.emit(this);
	            this.tabset.tabs.forEach(function (tab) {
	                if (tab !== _this) {
	                    tab.active = false;
	                }
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TabDirective.prototype.ngOnInit = function () {
	        this.removable = !!this.removable;
	    };
	    TabDirective.prototype.ngOnDestroy = function () {
	        this.tabset.removeTab(this);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TabDirective.prototype, "heading", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TabDirective.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TabDirective.prototype, "removable", void 0);
	    __decorate([
	        core_1.HostBinding('class.active'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TabDirective.prototype, "active", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], TabDirective.prototype, "select", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], TabDirective.prototype, "deselect", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], TabDirective.prototype, "removed", void 0);
	    __decorate([
	        core_1.HostBinding('class.tab-pane'), 
	        __metadata('design:type', Boolean)
	    ], TabDirective.prototype, "addClass", void 0);
	    TabDirective = __decorate([
	        core_1.Directive({ selector: 'tab, [tab]' }), 
	        __metadata('design:paramtypes', [tabset_component_1.TabsetComponent])
	    ], TabDirective);
	    return TabDirective;
	}());
	exports.TabDirective = TabDirective;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var common_2 = __webpack_require__(172);
	var tab_heading_directive_1 = __webpack_require__(181);
	var tab_directive_1 = __webpack_require__(112);
	var tabset_component_1 = __webpack_require__(114);
	var TabsModule = (function () {
	    function TabsModule() {
	    }
	    TabsModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [common_2.NgTranscludeDirective, tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective],
	            exports: [tab_directive_1.TabDirective, tabset_component_1.TabsetComponent, tab_heading_directive_1.TabHeadingDirective]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TabsModule);
	    return TabsModule;
	}());
	exports.TabsModule = TabsModule;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	// todo: add active event to tab
	// todo: fix? mixing static and dynamic tabs position tabs in order of creation
	var TabsetComponent = (function () {
	    function TabsetComponent() {
	        this.clazz = true;
	        this.tabs = [];
	        this.classMap = {};
	    }
	    Object.defineProperty(TabsetComponent.prototype, "vertical", {
	        get: function () {
	            return this._vertical;
	        },
	        set: function (value) {
	            this._vertical = value;
	            this.setClassMap();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(TabsetComponent.prototype, "justified", {
	        get: function () {
	            return this._justified;
	        },
	        set: function (value) {
	            this._justified = value;
	            this.setClassMap();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(TabsetComponent.prototype, "type", {
	        get: function () {
	            return this._type;
	        },
	        set: function (value) {
	            this._type = value;
	            this.setClassMap();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    TabsetComponent.prototype.ngOnInit = function () {
	        this.type = this.type !== 'undefined' ? this.type : 'tabs';
	    };
	    TabsetComponent.prototype.ngOnDestroy = function () {
	        this.isDestroyed = true;
	    };
	    TabsetComponent.prototype.addTab = function (tab) {
	        this.tabs.push(tab);
	        tab.active = this.tabs.length === 1 && tab.active !== false;
	    };
	    TabsetComponent.prototype.removeTab = function (tab) {
	        var index = this.tabs.indexOf(tab);
	        if (index === -1 || this.isDestroyed) {
	            return;
	        }
	        // Select a new tab if the tab to be removed is selected and not destroyed
	        if (tab.active && this.hasAvailableTabs(index)) {
	            var newActiveIndex = this.getClosestTabIndex(index);
	            this.tabs[newActiveIndex].active = true;
	        }
	        tab.removed.emit(tab);
	        this.tabs.splice(index, 1);
	    };
	    TabsetComponent.prototype.getClosestTabIndex = function (index) {
	        var tabsLength = this.tabs.length;
	        if (!tabsLength) {
	            return -1;
	        }
	        for (var step = 1; step <= tabsLength; step += 1) {
	            var prevIndex = index - step;
	            var nextIndex = index + step;
	            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
	                return prevIndex;
	            }
	            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
	                return nextIndex;
	            }
	        }
	        return -1;
	    };
	    TabsetComponent.prototype.hasAvailableTabs = function (index) {
	        var tabsLength = this.tabs.length;
	        if (!tabsLength) {
	            return false;
	        }
	        for (var i = 0; i < tabsLength; i += 1) {
	            if (!this.tabs[i].disabled && i !== index) {
	                return true;
	            }
	        }
	        return false;
	    };
	    TabsetComponent.prototype.setClassMap = function () {
	        this.classMap = (_a = {
	                'nav-stacked': this.vertical,
	                'nav-justified': this.justified
	            },
	            _a['nav-' + (this.type || 'tabs')] = true,
	            _a
	        );
	        var _a;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TabsetComponent.prototype, "vertical", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TabsetComponent.prototype, "justified", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TabsetComponent.prototype, "type", null);
	    __decorate([
	        core_1.HostBinding('class.tab-container'), 
	        __metadata('design:type', Boolean)
	    ], TabsetComponent.prototype, "clazz", void 0);
	    TabsetComponent = __decorate([
	        core_1.Component({
	            selector: 'tabset',
	            template: "\n    <ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"let tabz of tabs\" class=\"nav-item\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"></span>\n            </span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TabsetComponent);
	    return TabsetComponent;
	}());
	exports.TabsetComponent = TabsetComponent;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var timepicker_component_1 = __webpack_require__(182);
	var TimepickerModule = (function () {
	    function TimepickerModule() {
	    }
	    TimepickerModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            declarations: [timepicker_component_1.TimepickerComponent],
	            exports: [forms_1.FormsModule, timepicker_component_1.TimepickerComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TimepickerModule);
	    return TimepickerModule;
	}());
	exports.TimepickerModule = TimepickerModule;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var position_1 = __webpack_require__(108);
	var tooltip_options_class_1 = __webpack_require__(183);
	var TooltipContainerComponent = (function () {
	    function TooltipContainerComponent(element, cdr, options) {
	        this.top = '-1000px';
	        this.left = '-1000px';
	        this.display = 'block';
	        this.element = element;
	        this.cdr = cdr;
	        Object.assign(this, options);
	        this.classMap = { 'in': false, 'fade': false };
	        this.classMap[options.placement] = true;
	        this.classMap['tooltip-' + options.placement] = true;
	    }
	    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
	        var p = position_1.positionService
	            .positionElements(this.hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, this.appendToBody);
	        this.top = p.top + 'px';
	        this.left = p.left + 'px';
	        this.classMap.in = true;
	        if (this.animation) {
	            this.classMap.fade = true;
	        }
	        if (this.popupClass) {
	            this.classMap[this.popupClass] = true;
	        }
	        this.cdr.detectChanges();
	    };
	    Object.defineProperty(TooltipContainerComponent.prototype, "isTemplate", {
	        get: function () {
	            return this.htmlContent instanceof core_1.TemplateRef;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TooltipContainerComponent = __decorate([
	        core_1.Component({
	            selector: 'tooltip-container',
	            // changeDetection: ChangeDetectionStrategy.OnPush,
	            template: "<div class=\"tooltip\" role=\"tooltip\"\n     [ngStyle]=\"{top: top, left: left, display: display}\"\n     [ngClass]=\"classMap\">\n      <div class=\"tooltip-arrow\"></div>\n      <div class=\"tooltip-inner\"\n           *ngIf=\"htmlContent && !isTemplate\" \n           innerHtml=\"{{htmlContent}}\">\n      </div>\n      <div class=\"tooltip-inner\"\n           *ngIf=\"htmlContent && isTemplate\">\n        <template [ngTemplateOutlet]=\"htmlContent\"\n                  [ngOutletContext]=\"{model: context}\">\n        </template>\n      </div>\n      <div class=\"tooltip-inner\"\n           *ngIf=\"content\">\n        {{content}}\n      </div>\n    </div>"
	        }),
	        __param(2, core_1.Inject(tooltip_options_class_1.TooltipOptions)), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef, tooltip_options_class_1.TooltipOptions])
	    ], TooltipContainerComponent);
	    return TooltipContainerComponent;
	}());
	exports.TooltipContainerComponent = TooltipContainerComponent;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var tooltip_container_component_1 = __webpack_require__(116);
	var tooltip_directive_1 = __webpack_require__(184);
	var components_helper_service_1 = __webpack_require__(30);
	var TooltipModule = (function () {
	    function TooltipModule() {
	    }
	    TooltipModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
	            exports: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
	            providers: [components_helper_service_1.ComponentsHelper],
	            entryComponents: [tooltip_container_component_1.TooltipContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TooltipModule);
	    return TooltipModule;
	}());
	exports.TooltipModule = TooltipModule;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_bootstrap_config_1 = __webpack_require__(47);
	var position_1 = __webpack_require__(108);
	var typeahead_options_class_1 = __webpack_require__(119);
	var typeahead_utils_1 = __webpack_require__(185);
	var TEMPLATE = (_a = {},
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = "\n  <div class=\"dropdown-menu\"\n       style=\"display: block\"\n       [ngStyle]=\"{top: top, left: left, display: display}\"\n       (mouseleave)=\"focusLost()\">\n       <div *ngIf=\"!itemTemplate\">\n          <a href=\"#\"\n            *ngFor=\"let match of matches\"\n            class=\"dropdown-item\"\n            (click)=\"selectMatch(match, $event)\"\n            (mouseenter)=\"selectActive(match)\"\n            [class.active]=\"isActive(match)\"\n            [innerHtml]=\"hightlight(match, query)\"></a>\n      </div>\n      <div *ngIf=\"itemTemplate\">\n        <a href=\"#\"\n         *ngFor=\"let match of matches; let i = index\"\n         class=\"dropdown-item\"\n         (click)=\"selectMatch(match, $event)\"\n         (mouseenter)=\"selectActive(match)\"\n         [class.active]=\"isActive(match)\">\n          <template [ngTemplateOutlet]=\"itemTemplate\"\n                    [ngOutletContext]=\"{item: match, index: i}\">\n          </template>\n         </a>\n      </div>\n  </div>\n  ",
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = "\n  <ul class=\"dropdown-menu\"\n      style=\"display: block\"\n      [ngStyle]=\"{top: top, left: left, display: display}\"\n      (mouseleave)=\"focusLost()\">\n    <li *ngFor=\"let match of matches; let i = index\"\n        [class.active]=\"isActive(match)\"\n        (mouseenter)=\"selectActive(match)\">\n        <a href=\"#\" \n           *ngIf=\"!itemTemplate\" \n           (click)=\"selectMatch(match, $event)\" \n           tabindex=\"-1\" \n           [innerHtml]=\"hightlight(match, query)\"></a>\n        <a href=\"#\" \n           *ngIf=\"itemTemplate\" \n           (click)=\"selectMatch(match, $event)\" \n           tabindex=\"-1\">\n            <template [ngTemplateOutlet]=\"itemTemplate\"\n                      [ngOutletContext]=\"{item: match, index: i}\">\n            </template>\n        </a>\n    </li>\n  </ul>\n  ",
	    _a
	);
	var TypeaheadContainerComponent = (function () {
	    function TypeaheadContainerComponent(element, options) {
	        this.isFocused = false;
	        this._matches = [];
	        this.element = element;
	        Object.assign(this, options);
	    }
	    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
	        get: function () {
	            return this._matches;
	        },
	        set: function (value) {
	            this._matches = value;
	            if (this._matches.length > 0) {
	                this._active = this._matches[0];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
	        get: function () {
	            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TypeaheadContainerComponent.prototype, "field", {
	        set: function (value) {
	            this._field = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TypeaheadContainerComponent.prototype.position = function (hostEl) {
	        this.display = 'block';
	        this.top = '0px';
	        this.left = '0px';
	        var p = position_1.positionService
	            .positionElements(hostEl.nativeElement, this.element.nativeElement.children[0], this.placement, false);
	        this.top = p.top + 'px';
	        this.left = p.left + 'px';
	    };
	    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
	        this.selectMatch(this._active);
	    };
	    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
	        var index = this.matches.indexOf(this._active);
	        this._active = this.matches[index - 1 < 0
	            ? this.matches.length - 1
	            : index - 1];
	    };
	    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
	        var index = this.matches.indexOf(this._active);
	        this._active = this.matches[index + 1 > this.matches.length - 1
	            ? 0
	            : index + 1];
	    };
	    TypeaheadContainerComponent.prototype.selectActive = function (value) {
	        this.isFocused = true;
	        this._active = value;
	    };
	    TypeaheadContainerComponent.prototype.hightlight = function (item, query) {
	        var itemStr = typeahead_utils_1.TypeaheadUtils.getValueFromObject(item, this._field);
	        var itemStrHelper = (this.parent.typeaheadLatinize
	            ? typeahead_utils_1.TypeaheadUtils.latinize(itemStr)
	            : itemStr).toLowerCase();
	        var startIdx;
	        var tokenLen;
	        // Replaces the capture string with the same string inside of a "strong" tag
	        if (typeof query === 'object') {
	            var queryLen = query.length;
	            for (var i = 0; i < queryLen; i += 1) {
	                // query[i] is already latinized and lower case
	                startIdx = itemStrHelper.indexOf(query[i]);
	                tokenLen = query[i].length;
	                if (startIdx >= 0 && tokenLen > 0) {
	                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
	                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
	                }
	            }
	        }
	        else if (query) {
	            // query is already latinized and lower case
	            startIdx = itemStrHelper.indexOf(query);
	            tokenLen = query.length;
	            if (startIdx >= 0 && tokenLen > 0) {
	                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
	            }
	        }
	        return itemStr;
	    };
	    TypeaheadContainerComponent.prototype.focusLost = function () {
	        this.isFocused = false;
	    };
	    TypeaheadContainerComponent.prototype.isActive = function (value) {
	        return this._active === value;
	    };
	    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
	        var _this = this;
	        if (e === void 0) { e = void 0; }
	        if (e) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        this.parent.changeModel(value);
	        setTimeout(function () {
	            return _this.parent.typeaheadOnSelect.emit({
	                item: value
	            });
	        }, 0);
	        return false;
	    };
	    TypeaheadContainerComponent = __decorate([
	        core_1.Component({
	            selector: 'typeahead-container',
	            template: TEMPLATE[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, typeahead_options_class_1.TypeaheadOptions])
	    ], TypeaheadContainerComponent);
	    return TypeaheadContainerComponent;
	}());
	exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
	var _a;


/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";
	var TypeaheadOptions = (function () {
	    function TypeaheadOptions(options) {
	        Object.assign(this, options);
	    }
	    return TypeaheadOptions;
	}());
	exports.TypeaheadOptions = TypeaheadOptions;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(14);
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var typeahead_container_component_1 = __webpack_require__(118);
	var typeahead_directive_1 = __webpack_require__(186);
	var components_helper_service_1 = __webpack_require__(30);
	var TypeaheadModule = (function () {
	    function TypeaheadModule() {
	    }
	    TypeaheadModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            declarations: [typeahead_container_component_1.TypeaheadContainerComponent, typeahead_directive_1.TypeaheadDirective],
	            exports: [forms_1.FormsModule, typeahead_container_component_1.TypeaheadContainerComponent, typeahead_directive_1.TypeaheadDirective],
	            providers: [components_helper_service_1.ComponentsHelper],
	            entryComponents: [typeahead_container_component_1.TypeaheadContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TypeaheadModule);
	    return TypeaheadModule;
	}());
	exports.TypeaheadModule = TypeaheadModule;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/*tslint:disable */
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	/**
	 * JS version of browser APIs. This library can only run in the browser.
	 */
	var win = typeof window !== 'undefined' && window || {};
	exports.window = win;
	exports.document = win.document;
	exports.location = win.location;
	exports.gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
	exports.performance = win['performance'] ? win['performance'] : null;
	exports.Event = win['Event'];
	exports.MouseEvent = win['MouseEvent'];
	exports.KeyboardEvent = win['KeyboardEvent'];
	exports.EventTarget = win['EventTarget'];
	exports.History = win['History'];
	exports.Location = win['Location'];
	exports.EventListener = win['EventListener'];


/***/ },
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var car_service_1 = __webpack_require__(205);
	var Car = (function () {
	    function Car(CarService) {
	        var _this = this;
	        this.CarService = CarService;
	        this.kind = ["ToyotaVitz", "DaihatsuMove", "DaihatsuTanto", "SuzukiWagonR", "MazdaCX-5", "ToyotaAqua", "SubaruForester", "ToyotaRAV4", "HondaFit", "MazdaAxela", "ToyotaLandCruiser", "ToyotaPrius"];
	        this.results = [{ rank: '-', name: '', value: 0 }];
	        this.apiUrl = "http://54.191.65.203/predict";
	        this.kind.map(function (name, index) {
	            _this.results[index] = { rank: '-', name: name };
	        });
	    }
	    Car.prototype.onChange = function (event) {
	        this.results = [];
	        this.retrieveResult(event.srcElement.files);
	        this.showImage(event.srcElement.files[0]);
	    };
	    Car.prototype.retrieveResult = function (files) {
	        var _this = this;
	        if (files[0]) {
	            console.log(files[0]);
	            var results$ = this.CarService.accessPredictApi(files[0], this.apiUrl);
	            results$.subscribe(function (v) {
	                console.log(v);
	                _this.results = v;
	            });
	        }
	    };
	    Car.prototype.showImage = function (imageFile) {
	        var fileRdr = new FileReader();
	        fileRdr.onloadend = this.imageOnloadedCallback;
	        var response = fileRdr.readAsDataURL(imageFile);
	        // console.log("response");
	        // console.log(response);
	        return response;
	    };
	    //  readFile(file, onLoadCallback){
	    //   var reader = new FileReader();
	    //   reader.onload = onLoadCallback;
	    //   reader.readAsText(file);
	    // }
	    // private sanitizer: DomSanitizer;
	    Car.prototype.imageOnloadedCallback = function (event) {
	        // this.testVariable = "testest";
	        // this.imageFileSrc = this.sanitizer.bypassSecurityTrustUrl(event.target.result);
	        // わかんねえ
	        var preview = document.querySelector('img');
	        preview.src = event.target.result;
	        // return "a";
	        // console.log(this.imageFileSrc);
	        // this.imageFileSrc = "start";
	        // console.log(this.imageFileSrc);
	        // this.imageFileSrc = "end";
	        //   console.log(this.imageFileSrc);
	        //   console.log(this.imageFileSrc);
	        // return event.target.result;
	    };
	    Car = __decorate([
	        core_1.Component({
	            selector: 'car',
	            template: __webpack_require__(405),
	            providers: [car_service_1.CarService],
	            styles: [
	                __webpack_require__(444),
	                __webpack_require__(447),
	                __webpack_require__(445),
	                __webpack_require__(448),
	                __webpack_require__(446),
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof car_service_1.CarService !== 'undefined' && car_service_1.CarService) === 'function' && _a) || Object])
	    ], Car);
	    return Car;
	    var _a;
	}());
	exports.Car = Car;
	

/***/ },
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var accordion_component_1 = __webpack_require__(95);
	/* tslint:disable:component-selector-name */
	var AccordionPanelComponent = (function () {
	    function AccordionPanelComponent(accordion) {
	        this.accordion = accordion;
	    }
	    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
	        // Questionable, maybe .panel-open should be on child div.panel element?
	        get: function () {
	            return this._isOpen;
	        },
	        set: function (value) {
	            this._isOpen = value;
	            if (value) {
	                this.accordion.closeOtherPanels(this);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AccordionPanelComponent.prototype.ngOnInit = function () {
	        this.panelClass = this.panelClass || 'panel-default';
	        this.accordion.addGroup(this);
	    };
	    AccordionPanelComponent.prototype.ngOnDestroy = function () {
	        this.accordion.removeGroup(this);
	    };
	    AccordionPanelComponent.prototype.toggleOpen = function (event) {
	        event.preventDefault();
	        if (!this.isDisabled) {
	            this.isOpen = !this.isOpen;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AccordionPanelComponent.prototype, "heading", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AccordionPanelComponent.prototype, "panelClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AccordionPanelComponent.prototype, "isDisabled", void 0);
	    __decorate([
	        core_1.HostBinding('class.panel-open'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AccordionPanelComponent.prototype, "isOpen", null);
	    AccordionPanelComponent = __decorate([
	        core_1.Component({
	            selector: 'accordion-group, accordion-panel',
	            template: "\n    <div class=\"panel\" [ngClass]=\"panelClass\">\n      <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n        <h4 class=\"panel-title\">\n          <a href tabindex=\"0\" class=\"accordion-toggle\">\n            <span *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</span>\n            <ng-content select=\"[accordion-heading]\"></ng-content>\n          </a>\n        </h4>\n      </div>\n      <div class=\"panel-collapse collapse\" [collapse]=\"!isOpen\">\n        <div class=\"panel-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  "
	        }),
	        __param(0, core_1.Inject(accordion_component_1.AccordionComponent)), 
	        __metadata('design:paramtypes', [accordion_component_1.AccordionComponent])
	    ], AccordionPanelComponent);
	    return AccordionPanelComponent;
	}());
	exports.AccordionPanelComponent = AccordionPanelComponent;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ALERT_TEMPLATE = "\n  <div class=\"alert\" role=\"alert\" [ngClass]=\"classes\" *ngIf=\"!closed\">\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" (click)=\"onClose()\" (touch)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n      <span class=\"sr-only\">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ";
	// TODO: templateUrl
	var AlertComponent = (function () {
	    function AlertComponent() {
	        this.type = 'warning';
	        this.close = new core_1.EventEmitter(false);
	        this.classes = [];
	    }
	    AlertComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.classes[0] = "alert-" + this.type;
	        if (this.dismissible) {
	            this.classes[1] = 'alert-dismissible';
	        }
	        else {
	            this.classes.length = 1;
	        }
	        if (this.dismissOnTimeout) {
	            setTimeout(function () { return _this.onClose(); }, this.dismissOnTimeout);
	        }
	    };
	    // todo: mouse event + touch + pointer
	    AlertComponent.prototype.onClose = function () {
	        this.closed = true;
	        this.close.emit(this);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AlertComponent.prototype, "type", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AlertComponent.prototype, "dismissible", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], AlertComponent.prototype, "dismissOnTimeout", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], AlertComponent.prototype, "close", void 0);
	    AlertComponent = __decorate([
	        core_1.Component({
	            selector: 'alert',
	            template: ALERT_TEMPLATE
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AlertComponent);
	    return AlertComponent;
	}());
	exports.AlertComponent = AlertComponent;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	// TODO: config: activeClass - Class to apply to the checked buttons.
	var ButtonCheckboxDirective = (function () {
	    function ButtonCheckboxDirective(cd) {
	        this.state = false;
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        this.cd = cd;
	        // hack !
	        cd.valueAccessor = this;
	    }
	    // view -> model
	    ButtonCheckboxDirective.prototype.onClick = function () {
	        this.toggle(!this.state);
	        this.cd.viewToModelUpdate(this.value);
	    };
	    ButtonCheckboxDirective.prototype.ngOnInit = function () {
	        this.toggle(this.trueValue === this.value);
	    };
	    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
	        get: function () {
	            return typeof this.btnCheckboxTrue !== 'undefined'
	                ? this.btnCheckboxTrue
	                : true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
	        get: function () {
	            return typeof this.btnCheckboxFalse !== 'undefined'
	                ? this.btnCheckboxFalse
	                : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ButtonCheckboxDirective.prototype.toggle = function (state) {
	        this.state = state;
	        this.value = this.state ? this.trueValue : this.falseValue;
	    };
	    // ControlValueAccessor
	    // model -> view
	    ButtonCheckboxDirective.prototype.writeValue = function (value) {
	        this.state = this.trueValue === value;
	        this.value = value;
	    };
	    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ButtonCheckboxDirective.prototype, "btnCheckboxTrue", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ButtonCheckboxDirective.prototype, "btnCheckboxFalse", void 0);
	    __decorate([
	        core_1.HostBinding('class.active'), 
	        __metadata('design:type', Boolean)
	    ], ButtonCheckboxDirective.prototype, "state", void 0);
	    __decorate([
	        core_1.HostListener('click'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], ButtonCheckboxDirective.prototype, "onClick", null);
	    ButtonCheckboxDirective = __decorate([
	        core_1.Directive({ selector: '[btnCheckbox][ngModel]' }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel])
	    ], ButtonCheckboxDirective);
	    return ButtonCheckboxDirective;
	}());
	exports.ButtonCheckboxDirective = ButtonCheckboxDirective;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	// TODO: if uncheckable, null should be set to ngModel
	// if disabled, button should not be checkable
	var ButtonRadioDirective = (function () {
	    function ButtonRadioDirective(cd, el) {
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        // hack!
	        this.cd = cd;
	        this.el = el;
	        cd.valueAccessor = this;
	    }
	    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
	        get: function () {
	            return this.btnRadio === this.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ButtonRadioDirective.prototype.onClick = function () {
	        if (this.uncheckable && this.btnRadio === this.value) {
	            return this.cd.viewToModelUpdate(void 0);
	        }
	        this.cd.viewToModelUpdate(this.btnRadio);
	    };
	    ButtonRadioDirective.prototype.ngOnInit = function () {
	        this.uncheckable = typeof this.uncheckable !== 'undefined';
	    };
	    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
	        // hack view model!
	        get: function () {
	            return this.cd.viewModel;
	        },
	        set: function (value) {
	            this.cd.viewModel = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // ControlValueAccessor
	    // model -> view
	    ButtonRadioDirective.prototype.writeValue = function (value) {
	        this.value = value;
	    };
	    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ButtonRadioDirective.prototype, "btnRadio", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ButtonRadioDirective.prototype, "uncheckable", void 0);
	    __decorate([
	        core_1.HostBinding('class.active'), 
	        __metadata('design:type', Boolean)
	    ], ButtonRadioDirective.prototype, "isActive", null);
	    __decorate([
	        core_1.HostListener('click'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], ButtonRadioDirective.prototype, "onClick", null);
	    ButtonRadioDirective = __decorate([
	        core_1.Directive({ selector: '[btnRadio][ngModel]' }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel, core_1.ElementRef])
	    ], ButtonRadioDirective);
	    return ButtonRadioDirective;
	}());
	exports.ButtonRadioDirective = ButtonRadioDirective;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var carousel_component_1 = __webpack_require__(99);
	var SlideComponent = (function () {
	    function SlideComponent(carousel) {
	        this.addClass = true;
	        this.carousel = carousel;
	    }
	    SlideComponent.prototype.ngOnInit = function () {
	        this.carousel.addSlide(this);
	    };
	    SlideComponent.prototype.ngOnDestroy = function () {
	        this.carousel.removeSlide(this);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], SlideComponent.prototype, "index", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], SlideComponent.prototype, "direction", void 0);
	    __decorate([
	        core_1.HostBinding('class.active'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], SlideComponent.prototype, "active", void 0);
	    __decorate([
	        core_1.HostBinding('class.item'),
	        core_1.HostBinding('class.carousel-item'), 
	        __metadata('design:type', Boolean)
	    ], SlideComponent.prototype, "addClass", void 0);
	    SlideComponent = __decorate([
	        core_1.Component({
	            selector: 'slide',
	            template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [carousel_component_1.CarouselComponent])
	    ], SlideComponent);
	    return SlideComponent;
	}());
	exports.SlideComponent = SlideComponent;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	// FIX: in order to update to rc.1 had to disable animation, sorry
	var core_1 = __webpack_require__(2);
	// import {AnimationBuilder} from '@angular/platform-browser/src/animate/animation_builder';
	// import {animate, animation, state, style, transition} from '@angular/core';
	/*@Directive({
	 selector: '[collapse]',
	 // templateUrl: 'app/panel.html',
	 // styleUrls: ['app/panel.css'],
	 animations: [
	 animation('active', [
	 state('void', style({ height: 0 })),
	 state('closed', style({ height: 0 })),
	 state('open', style({ height: '*' })),
	 transition('void => closed', [ animate(0) ]),
	 transition('closed => open', [ animate('350ms ease-out') ]),
	 transition('open => closed', [ animate('350ms ease-out') ])
	 ])
	 ]
	 })*/
	// fix: replace with // '@angular/animate';
	// when https://github.com/angular/angular/issues/5984 will be fixed
	// TODO: remove ElementRef
	// TODO: add on change
	// TODO: #576 add callbacks: expanding, collapsing after adding animation
	var CollapseDirective = (function () {
	    function CollapseDirective(/*_ab:AnimationBuilder, */ _el, _renderer) {
	        // private animation:any;
	        this.collapsed = new core_1.EventEmitter(false);
	        this.expanded = new core_1.EventEmitter(false);
	        // shown
	        this.isExpanded = true;
	        // hidden
	        this.isCollapsed = false;
	        // stale state
	        this.isCollapse = true;
	        // animation state
	        this.isCollapsing = false;
	        // this._ab = _ab;
	        this._el = _el;
	        this._renderer = _renderer;
	    }
	    Object.defineProperty(CollapseDirective.prototype, "collapse", {
	        get: function () {
	            return this.isExpanded;
	        },
	        // @Input() private transitionDuration:number = 500; // Duration in ms
	        set: function (value) {
	            this.isExpanded = value;
	            this.toggle();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapseDirective.prototype.ngOnInit = function () {
	        // this.animation = this._ab.css();
	        // this.animation.setDuration(this.transitionDuration);
	    };
	    CollapseDirective.prototype.toggle = function () {
	        // this.open = !this.open;
	        if (this.isExpanded) {
	            this.hide();
	        }
	        else {
	            this.show();
	        }
	    };
	    CollapseDirective.prototype.hide = function () {
	        this.isCollapse = false;
	        this.isCollapsing = true;
	        this.isExpanded = false;
	        this.isCollapsed = true;
	        this.isCollapse = true;
	        this.isCollapsing = false;
	        this.display = 'none';
	        this.collapsed.emit(this);
	        /*  setTimeout(() => {
	         // this.height = '0';
	         // this.isCollapse = true;
	         // this.isCollapsing = false;
	         this.animation
	         .setFromStyles({
	         height: this._el.nativeElement.scrollHeight + 'px'
	         })
	         .setToStyles({
	         height: '0',
	         overflow: 'hidden'
	         });
	    
	         this.animation.start(this._el.nativeElement)
	         .onComplete(() => {
	         if (this._el.nativeElement.offsetHeight === 0) {
	         this.display = 'none';
	         }
	    
	         this.isCollapse = true;
	         this.isCollapsing = false;
	         });
	         }, 4);*/
	    };
	    CollapseDirective.prototype.show = function () {
	        this.isCollapse = false;
	        this.isCollapsing = true;
	        this.isExpanded = true;
	        this.isCollapsed = false;
	        this.display = 'block';
	        // this.height = 'auto';
	        this.isCollapse = true;
	        this.isCollapsing = false;
	        this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
	        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
	        this.expanded.emit(this);
	        /*setTimeout(() => {
	         // this.height = 'auto';
	         // this.isCollapse = true;
	         // this.isCollapsing = false;
	         this.animation
	         .setFromStyles({
	         height: this._el.nativeElement.offsetHeight,
	         overflow: 'hidden'
	         })
	         .setToStyles({
	         height: this._el.nativeElement.scrollHeight + 'px'
	         });
	    
	         this.animation.start(this._el.nativeElement)
	         .onComplete(() => {
	         this.isCollapse = true;
	         this.isCollapsing = false;
	         this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
	         this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
	         });
	         }, 4);*/
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CollapseDirective.prototype, "collapsed", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CollapseDirective.prototype, "expanded", void 0);
	    __decorate([
	        core_1.HostBinding('style.display'), 
	        __metadata('design:type', String)
	    ], CollapseDirective.prototype, "display", void 0);
	    __decorate([
	        core_1.HostBinding('class.in'),
	        core_1.HostBinding('attr.aria-expanded'), 
	        __metadata('design:type', Boolean)
	    ], CollapseDirective.prototype, "isExpanded", void 0);
	    __decorate([
	        core_1.HostBinding('attr.aria-hidden'), 
	        __metadata('design:type', Boolean)
	    ], CollapseDirective.prototype, "isCollapsed", void 0);
	    __decorate([
	        core_1.HostBinding('class.collapse'), 
	        __metadata('design:type', Boolean)
	    ], CollapseDirective.prototype, "isCollapse", void 0);
	    __decorate([
	        core_1.HostBinding('class.collapsing'), 
	        __metadata('design:type', Boolean)
	    ], CollapseDirective.prototype, "isCollapsing", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean), 
	        __metadata('design:paramtypes', [Boolean])
	    ], CollapseDirective.prototype, "collapse", null);
	    CollapseDirective = __decorate([
	        core_1.Directive({ selector: '[collapse]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], CollapseDirective);
	    return CollapseDirective;
	}());
	exports.CollapseDirective = CollapseDirective;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var NgTranscludeDirective = (function () {
	    function NgTranscludeDirective(_viewRef) {
	        this._viewRef = _viewRef;
	        this.viewRef = _viewRef;
	    }
	    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
	        get: function () {
	            return this._ngTransclude;
	        },
	        set: function (templateRef) {
	            this._ngTransclude = templateRef;
	            if (templateRef) {
	                this.viewRef.createEmbeddedView(templateRef);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], NgTranscludeDirective.prototype, "ngTransclude", null);
	    NgTranscludeDirective = __decorate([
	        core_1.Directive({
	            selector: '[ngTransclude]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef])
	    ], NgTranscludeDirective);
	    return NgTranscludeDirective;
	}());
	exports.NgTranscludeDirective = NgTranscludeDirective;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	/* tslint:disable:component-selector-name component-selector-type */
	var DatePickerComponent = (function () {
	    function DatePickerComponent(cd) {
	        this.selectionDone = new core_1.EventEmitter(undefined);
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        this._now = new Date();
	        this.cd = cd;
	        // hack
	        cd.valueAccessor = this;
	    }
	    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
	        get: function () {
	            return this._activeDate || this._now;
	        },
	        set: function (value) {
	            this._activeDate = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DatePickerComponent.prototype.onUpdate = function (event) {
	        this.writeValue(event);
	        this.cd.viewToModelUpdate(event);
	    };
	    DatePickerComponent.prototype.onSelectionDone = function (event) {
	        this.selectionDone.emit(event);
	    };
	    // todo: support null value
	    DatePickerComponent.prototype.writeValue = function (value) {
	        // todo: fix something sends here new date all the time
	        // if (value) {
	        //  if (typeof value !== 'Date') {
	        //    value = new Date(value);
	        //  }
	        //
	        //  this.activeDate = value;
	        // }
	        if (value === this._activeDate) {
	            return;
	        }
	        if (value && value instanceof Date) {
	            this.activeDate = value;
	            return;
	        }
	        this.activeDate = value ? new Date(value) : void 0;
	    };
	    DatePickerComponent.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    DatePickerComponent.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "datepickerMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerComponent.prototype, "initDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerComponent.prototype, "minDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerComponent.prototype, "maxDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "minMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "maxMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatePickerComponent.prototype, "showWeeks", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "formatDay", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "formatMonth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "formatYear", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "formatDayHeader", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "formatDayTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatePickerComponent.prototype, "formatMonthTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatePickerComponent.prototype, "startingDay", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatePickerComponent.prototype, "yearRange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatePickerComponent.prototype, "onlyCurrentMonth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatePickerComponent.prototype, "shortcutPropagation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DatePickerComponent.prototype, "customClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DatePickerComponent.prototype, "dateDisabled", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatePickerComponent.prototype, "selectionDone", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], DatePickerComponent.prototype, "activeDate", null);
	    DatePickerComponent = __decorate([
	        core_1.Component({
	            selector: 'datepicker[ngModel]',
	            template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      (selectionDone)=\"onSelectionDone($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
	            providers: [forms_1.NgModel]
	        }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel])
	    ], DatePickerComponent);
	    return DatePickerComponent;
	}());
	exports.DatePickerComponent = DatePickerComponent;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var dropdown_directive_1 = __webpack_require__(71);
	var DropdownMenuDirective = (function () {
	    /* tslint:enable:no-unused-variable */
	    function DropdownMenuDirective(dropdown, el) {
	        /* tslint:disable:no-unused-variable */
	        this.addClass = true;
	        this.dropdown = dropdown;
	        this.el = el;
	    }
	    DropdownMenuDirective.prototype.ngOnInit = function () {
	        this.dropdown.dropDownMenu = this;
	    };
	    __decorate([
	        core_1.HostBinding('class.dropdown-menu'), 
	        __metadata('design:type', Boolean)
	    ], DropdownMenuDirective.prototype, "addClass", void 0);
	    DropdownMenuDirective = __decorate([
	        core_1.Directive({
	            selector: '[dropdownMenu]',
	            exportAs: 'bs-dropdown-menu'
	        }),
	        __param(0, core_1.Host()), 
	        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
	    ], DropdownMenuDirective);
	    return DropdownMenuDirective;
	}());
	exports.DropdownMenuDirective = DropdownMenuDirective;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var dropdown_directive_1 = __webpack_require__(71);
	var DropdownToggleDirective = (function () {
	    function DropdownToggleDirective(dropdown, el) {
	        this.isDisabled = false;
	        this.addToggleClass = true;
	        this.addClass = true;
	        this.dropdown = dropdown;
	        this.el = el;
	    }
	    DropdownToggleDirective.prototype.ngOnInit = function () {
	        this.dropdown.dropDownToggle = this;
	    };
	    Object.defineProperty(DropdownToggleDirective.prototype, "isOpen", {
	        get: function () {
	            return this.dropdown.isOpen;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DropdownToggleDirective.prototype.toggleDropdown = function (event) {
	        event.stopPropagation();
	        if (!this.isDisabled) {
	            this.dropdown.toggle();
	        }
	        return false;
	    };
	    __decorate([
	        core_1.HostBinding('class.disabled'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DropdownToggleDirective.prototype, "isDisabled", void 0);
	    __decorate([
	        core_1.HostBinding('class.dropdown-toggle'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DropdownToggleDirective.prototype, "addToggleClass", void 0);
	    __decorate([
	        core_1.HostBinding('attr.aria-haspopup'), 
	        __metadata('design:type', Boolean)
	    ], DropdownToggleDirective.prototype, "addClass", void 0);
	    __decorate([
	        core_1.HostBinding('attr.aria-expanded'), 
	        __metadata('design:type', Boolean)
	    ], DropdownToggleDirective.prototype, "isOpen", null);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', Boolean)
	    ], DropdownToggleDirective.prototype, "toggleDropdown", null);
	    DropdownToggleDirective = __decorate([
	        core_1.Directive({
	            selector: '[dropdownToggle]',
	            exportAs: 'bs-dropdown-toggle'
	        }),
	        __param(0, core_1.Host()), 
	        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
	    ], DropdownToggleDirective);
	    return DropdownToggleDirective;
	}());
	exports.DropdownToggleDirective = DropdownToggleDirective;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// todo: should we support enforce focus in?
	// todo: in original bs there are was a way to prevent modal from showing
	// todo: original modal had resize events
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var components_helper_service_1 = __webpack_require__(30);
	var utils_class_1 = __webpack_require__(401);
	var modal_backdrop_component_1 = __webpack_require__(103);
	var modal_options_class_1 = __webpack_require__(104);
	var browser_1 = __webpack_require__(121);
	var TRANSITION_DURATION = 300;
	var BACKDROP_TRANSITION_DURATION = 150;
	var ModalDirective = (function () {
	    function ModalDirective(element, renderer, componentsHelper) {
	        this.element = element;
	        this.renderer = renderer;
	        this.componentsHelper = componentsHelper;
	        this.onShow = new core_1.EventEmitter();
	        this.onShown = new core_1.EventEmitter();
	        this.onHide = new core_1.EventEmitter();
	        this.onHidden = new core_1.EventEmitter();
	        // seems like an Options
	        this.isAnimated = true;
	        this._isShown = false;
	        this.isBodyOverflowing = false;
	        this.originalBodyPadding = 0;
	        this.scrollbarWidth = 0;
	    }
	    Object.defineProperty(ModalDirective.prototype, "config", {
	        get: function () {
	            return this._config;
	        },
	        set: function (conf) {
	            this._config = this.getConfig(conf);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ModalDirective.prototype, "isShown", {
	        get: function () {
	            return this._isShown;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ModalDirective.prototype, "document", {
	        get: function () {
	            return this.componentsHelper.getDocument();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    /** Host element manipulations */
	    // @HostBinding(`class.${ClassName.IN}`) private _addClassIn:boolean;
	    ModalDirective.prototype.onClick = function (event) {
	        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this.element.nativeElement) {
	            return;
	        }
	        this.hide(event);
	    };
	    // todo: consider preventing default and stopping propagation
	    ModalDirective.prototype.onEsc = function () {
	        if (this.config.keyboard) {
	            this.hide();
	        }
	    };
	    ModalDirective.prototype.ngOnDestroy = function () {
	        this.config = void 0;
	        // this._element             = null
	        // this._dialog              = null
	        // this._backdrop            = null
	        this._isShown = void 0;
	        this.isBodyOverflowing = void 0;
	        this.originalBodyPadding = void 0;
	        this.scrollbarWidth = void 0;
	    };
	    ModalDirective.prototype.ngAfterViewInit = function () {
	        this._config = this._config || this.getConfig();
	    };
	    /** Public methods */
	    ModalDirective.prototype.toggle = function () {
	        return this._isShown ? this.hide() : this.show();
	    };
	    ModalDirective.prototype.show = function () {
	        var _this = this;
	        this.onShow.emit(this);
	        if (this._isShown) {
	            return;
	        }
	        this._isShown = true;
	        this.checkScrollbar();
	        this.setScrollbar();
	        if (this.document && this.document.body) {
	            this.renderer.setElementClass(this.document.body, modal_options_class_1.ClassName.OPEN, true);
	        }
	        this.showBackdrop(function () {
	            _this.showElement();
	        });
	    };
	    ModalDirective.prototype.hide = function (event) {
	        var _this = this;
	        if (event) {
	            event.preventDefault();
	        }
	        this.onHide.emit(this);
	        // todo: add an option to prevent hiding
	        if (!this._isShown) {
	            return;
	        }
	        this._isShown = false;
	        this.renderer.setElementClass(this.element.nativeElement, modal_options_class_1.ClassName.IN, false);
	        // this._addClassIn = false;
	        if (this.isAnimated) {
	            setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
	        }
	        else {
	            this.hideModal();
	        }
	    };
	    /** Private methods */
	    ModalDirective.prototype.getConfig = function (config) {
	        return Object.assign({}, modal_options_class_1.modalConfigDefaults, config);
	    };
	    /**
	     *  Show dialog
	     */
	    ModalDirective.prototype.showElement = function () {
	        var _this = this;
	        // todo: replace this with component helper usage `add to root`
	        if (!this.element.nativeElement.parentNode ||
	            (this.element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
	            // don't move modals dom position
	            if (this.document && this.document.body) {
	                this.document.body.appendChild(this.element.nativeElement);
	            }
	        }
	        this.renderer.setElementAttribute(this.element.nativeElement, 'aria-hidden', 'false');
	        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'block');
	        this.renderer.setElementProperty(this.element.nativeElement, 'scrollTop', 0);
	        if (this.isAnimated) {
	            utils_class_1.Utils.reflow(this.element.nativeElement);
	        }
	        // this._addClassIn = true;
	        this.renderer.setElementClass(this.element.nativeElement, modal_options_class_1.ClassName.IN, true);
	        this.onShown.emit(this);
	        var transitionComplete = function () {
	            if (_this._config.focus) {
	                _this.element.nativeElement.focus();
	            }
	            _this.onShown.emit(_this);
	        };
	        if (this.isAnimated) {
	            setTimeout(transitionComplete, TRANSITION_DURATION);
	        }
	        else {
	            transitionComplete();
	        }
	    };
	    ModalDirective.prototype.hideModal = function () {
	        var _this = this;
	        this.renderer.setElementAttribute(this.element.nativeElement, 'aria-hidden', 'true');
	        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
	        this.showBackdrop(function () {
	            if (_this.document && _this.document.body) {
	                _this.renderer.setElementClass(_this.document.body, modal_options_class_1.ClassName.OPEN, false);
	            }
	            _this.resetAdjustments();
	            _this.resetScrollbar();
	            _this.onHidden.emit(_this);
	        });
	    };
	    // todo: original show was calling a callback when done, but we can use promise
	    ModalDirective.prototype.showBackdrop = function (callback) {
	        var _this = this;
	        if (this._isShown && this.config.backdrop) {
	            this.backdrop = this.componentsHelper
	                .appendNextToRoot(modal_backdrop_component_1.ModalBackdropComponent, modal_backdrop_component_1.ModalBackdropOptions, new modal_backdrop_component_1.ModalBackdropOptions({ animate: false }));
	            if (this.isAnimated) {
	                this.backdrop.instance.isAnimated = this.isAnimated;
	                utils_class_1.Utils.reflow(this.backdrop.instance.element.nativeElement);
	            }
	            this.backdrop.instance.isShown = true;
	            if (!callback) {
	                return;
	            }
	            if (!this.isAnimated) {
	                callback();
	                return;
	            }
	            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
	        }
	        else if (!this._isShown && this.backdrop) {
	            this.backdrop.instance.isShown = false;
	            var callbackRemove = function () {
	                _this.removeBackdrop();
	                if (callback) {
	                    callback();
	                }
	            };
	            if (this.backdrop.instance.isAnimated) {
	                setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
	            }
	            else {
	                callbackRemove();
	            }
	        }
	        else if (callback) {
	            callback();
	        }
	    };
	    ModalDirective.prototype.removeBackdrop = function () {
	        if (this.backdrop) {
	            this.backdrop.destroy();
	            this.backdrop = void 0;
	        }
	    };
	    /** Events tricks */
	    // no need for it
	    // private setEscapeEvent():void {
	    //   if (this._isShown && this._config.keyboard) {
	    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
	    //       if (event.which === 27) {
	    //         this.hide()
	    //       }
	    //     })
	    //
	    //   } else if (!this._isShown) {
	    //     $(this._element).off(Event.KEYDOWN_DISMISS)
	    //   }
	    // }
	    // private setResizeEvent():void {
	    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
	    // if (this._isShown) {
	    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
	    // } else {
	    //   $(window).off(Event.RESIZE)
	    // }
	    // }
	    ModalDirective.prototype.resetAdjustments = function () {
	        this.renderer.setElementStyle(this.element.nativeElement, 'paddingLeft', '');
	        this.renderer.setElementStyle(this.element.nativeElement, 'paddingRight', '');
	    };
	    /** Scroll bar tricks */
	    ModalDirective.prototype.checkScrollbar = function () {
	        this.isBodyOverflowing = this.document.body.clientWidth < browser_1.window.innerWidth;
	        this.scrollbarWidth = this.getScrollbarWidth();
	    };
	    ModalDirective.prototype.setScrollbar = function () {
	        if (!this.document) {
	            return;
	        }
	        var fixedEl = this.document.querySelector(modal_options_class_1.Selector.FIXED_CONTENT);
	        if (!fixedEl) {
	            return;
	        }
	        var bodyPadding = parseInt(utils_class_1.Utils.getStyles(fixedEl).paddingRight || 0, 10);
	        this.originalBodyPadding = parseInt(this.document.body.style.paddingRight || 0, 10);
	        if (this.isBodyOverflowing) {
	            this.document.body.style.paddingRight = (bodyPadding + this.scrollbarWidth) + "px";
	        }
	    };
	    ModalDirective.prototype.resetScrollbar = function () {
	        this.document.body.style.paddingRight = this.originalBodyPadding;
	    };
	    // thx d.walsh
	    ModalDirective.prototype.getScrollbarWidth = function () {
	        var scrollDiv = this.renderer.createElement(this.document.body, 'div', void 0);
	        scrollDiv.className = modal_options_class_1.ClassName.SCROLLBAR_MEASURER;
	        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        this.document.body.removeChild(scrollDiv);
	        return scrollbarWidth;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], ModalDirective.prototype, "config", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalDirective.prototype, "onShow", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalDirective.prototype, "onShown", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalDirective.prototype, "onHide", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalDirective.prototype, "onHidden", void 0);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], ModalDirective.prototype, "onClick", null);
	    __decorate([
	        core_1.HostListener('keydown.esc'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], ModalDirective.prototype, "onEsc", null);
	    ModalDirective = __decorate([
	        core_1.Directive({
	            selector: '[bsModal]',
	            exportAs: 'bs-modal'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, components_helper_service_1.ComponentsHelper])
	    ], ModalDirective);
	    return ModalDirective;
	}());
	exports.ModalDirective = ModalDirective;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var pagination_component_1 = __webpack_require__(106);
	var pagerConfig = {
	    itemsPerPage: 10,
	    previousText: '« Previous',
	    nextText: 'Next »',
	    align: true
	};
	var PAGER_TEMPLATE = "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align}\">\n        <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n      <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align}\">\n        <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a>\n      </li>\n  </ul>\n";
	/* tslint:disable */
	var PagerComponent = (function (_super) {
	    __extends(PagerComponent, _super);
	    function PagerComponent(cd, renderer, elementRef) {
	        _super.call(this, cd, renderer, elementRef);
	        this.config = pagerConfig;
	    }
	    PagerComponent = __decorate([
	        core_1.Component({
	            selector: 'pager[ngModel]',
	            template: PAGER_TEMPLATE,
	            providers: [forms_1.NgModel]
	        }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel, core_1.Renderer, core_1.ElementRef])
	    ], PagerComponent);
	    return PagerComponent;
	}(pagination_component_1.PaginationComponent));
	exports.PagerComponent = PagerComponent;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var progress_directive_1 = __webpack_require__(109);
	// todo: number pipe
	// todo: use query from progress?
	var BarComponent = (function () {
	    function BarComponent(progress) {
	        this.percent = 0;
	        this.progress = progress;
	    }
	    Object.defineProperty(BarComponent.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (v) {
	            if (!v && v !== 0) {
	                return;
	            }
	            this._value = v;
	            this.recalculatePercentage();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BarComponent.prototype.ngOnInit = function () {
	        this.progress.addBar(this);
	    };
	    BarComponent.prototype.ngOnDestroy = function () {
	        this.progress.removeBar(this);
	    };
	    BarComponent.prototype.recalculatePercentage = function () {
	        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
	        var totalPercentage = this.progress.bars.reduce(function (total, bar) {
	            return total + bar.percent;
	        }, 0);
	        if (totalPercentage > 100) {
	            this.percent -= totalPercentage - 100;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], BarComponent.prototype, "type", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], BarComponent.prototype, "value", null);
	    BarComponent = __decorate([
	        core_1.Component({
	            selector: 'bar',
	            template: "\n  <div class=\"progress-bar\"\n    style=\"min-width: 0;\"\n    role=\"progressbar\"\n    [ngClass]=\"type && 'progress-bar-' + type\"\n    [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuenow]=\"value\"\n    [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n    [attr.aria-valuemax]=\"max\"><ng-content></ng-content></div>\n"
	        }),
	        __param(0, core_1.Host()), 
	        __metadata('design:paramtypes', [progress_directive_1.ProgressDirective])
	    ], BarComponent);
	    return BarComponent;
	}());
	exports.BarComponent = BarComponent;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ProgressbarComponent = (function () {
	    function ProgressbarComponent() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ProgressbarComponent.prototype, "animate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ProgressbarComponent.prototype, "max", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ProgressbarComponent.prototype, "type", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ProgressbarComponent.prototype, "value", void 0);
	    ProgressbarComponent = __decorate([
	        core_1.Component({
	            selector: 'progressbar',
	            template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProgressbarComponent);
	    return ProgressbarComponent;
	}());
	exports.ProgressbarComponent = ProgressbarComponent;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var RatingComponent = (function () {
	    function RatingComponent(cd) {
	        this.onHover = new core_1.EventEmitter(false);
	        this.onLeave = new core_1.EventEmitter(false);
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        this.cd = cd;
	        cd.valueAccessor = this;
	    }
	    RatingComponent.prototype.onKeydown = function (event) {
	        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
	            return;
	        }
	        event.preventDefault();
	        event.stopPropagation();
	        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
	        this.rate(this.value + sign);
	    };
	    RatingComponent.prototype.ngOnInit = function () {
	        this.max = typeof this.max !== 'undefined' ? this.max : 5;
	        this.readonly = this.readonly === true;
	        this.stateOn = typeof this.stateOn !== 'undefined'
	            ? this.stateOn
	            : 'glyphicon-star';
	        this.stateOff = typeof this.stateOff !== 'undefined'
	            ? this.stateOff
	            : 'glyphicon-star-empty';
	        this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0
	            ? this.titles
	            : ['one', 'two', 'three', 'four', 'five'];
	        this.range = this.buildTemplateObjects(this.ratingStates, this.max);
	    };
	    // model -> view
	    RatingComponent.prototype.writeValue = function (value) {
	        if (value % 1 !== value) {
	            this.value = Math.round(value);
	            this.preValue = value;
	            return;
	        }
	        this.preValue = value;
	        this.value = value;
	    };
	    RatingComponent.prototype.enter = function (value) {
	        if (!this.readonly) {
	            this.value = value;
	            this.onHover.emit(value);
	        }
	    };
	    RatingComponent.prototype.reset = function () {
	        this.value = this.preValue;
	        this.onLeave.emit(this.value);
	    };
	    RatingComponent.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    RatingComponent.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    RatingComponent.prototype.buildTemplateObjects = function (ratingStates, max) {
	        ratingStates = ratingStates || [];
	        var count = ratingStates.length || max;
	        var result = [];
	        for (var i = 0; i < count; i++) {
	            result.push(Object.assign({
	                index: i,
	                stateOn: this.stateOn,
	                stateOff: this.stateOff,
	                title: this.titles[i] || i + 1
	            }, ratingStates[i] || {}));
	        }
	        return result;
	    };
	    RatingComponent.prototype.rate = function (value) {
	        if (!this.readonly && value >= 0 && value <= this.range.length) {
	            this.writeValue(value);
	            this.cd.viewToModelUpdate(value);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], RatingComponent.prototype, "max", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], RatingComponent.prototype, "stateOn", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], RatingComponent.prototype, "stateOff", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], RatingComponent.prototype, "readonly", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], RatingComponent.prototype, "titles", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], RatingComponent.prototype, "ratingStates", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], RatingComponent.prototype, "onHover", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], RatingComponent.prototype, "onLeave", void 0);
	    __decorate([
	        core_1.HostListener('keydown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [KeyboardEvent]), 
	        __metadata('design:returntype', void 0)
	    ], RatingComponent.prototype, "onKeydown", null);
	    RatingComponent = __decorate([
	        core_1.Component({
	            /* tslint:disable */
	            selector: 'rating[ngModel]',
	            /* tslint:enable */
	            template: "\n    <span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\">\n      <template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n        <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n        <i (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" class=\"glyphicon\" [ngClass]=\"index < value ? r.stateOn : r.stateOff\" [title]=\"r.title\" ></i>\n      </template>\n    </span>\n  ",
	            providers: [forms_1.NgModel]
	        }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel])
	    ], RatingComponent);
	    return RatingComponent;
	}());
	exports.RatingComponent = RatingComponent;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var tab_directive_1 = __webpack_require__(112);
	var TabHeadingDirective = (function () {
	    function TabHeadingDirective(templateRef, tab) {
	        tab.headingRef = templateRef;
	    }
	    TabHeadingDirective = __decorate([
	        core_1.Directive({ selector: '[tabHeading]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef, tab_directive_1.TabDirective])
	    ], TabHeadingDirective);
	    return TabHeadingDirective;
	}());
	exports.TabHeadingDirective = TabHeadingDirective;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	// todo: implement global configuration via DI
	// todo: refactor directive has to many functions! (extract to stateless helper)
	// todo: use moment js?
	// todo: implement `time` validator
	// todo: replace increment/decrement blockers with getters, or extract
	// todo: unify work with selected
	exports.timepickerConfig = {
	    hourStep: 1,
	    minuteStep: 1,
	    showMeridian: true,
	    meridians: void 0,
	    readonlyInput: false,
	    mousewheel: true,
	    arrowkeys: true,
	    showSpinners: true,
	    min: void 0,
	    max: void 0
	};
	function isDefined(value) {
	    return typeof value !== 'undefined';
	}
	function def(value, fn, defaultValue) {
	    return fn(value) ? value : defaultValue;
	}
	function addMinutes(date, minutes) {
	    var dt = new Date(date.getTime() + minutes * 60000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes());
	    return newDate;
	}
	var TimepickerComponent = (function () {
	    function TimepickerComponent(cd) {
	        this.meridians = ['AM', 'PM']; // ??
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        // result value
	        this._selected = new Date();
	        this.cd = cd;
	        cd.valueAccessor = this;
	    }
	    Object.defineProperty(TimepickerComponent.prototype, "showMeridian", {
	        get: function () {
	            return this._showMeridian;
	        },
	        set: function (value) {
	            this._showMeridian = value;
	            // || !this.$error.time
	            // if (true) {
	            this.updateTemplate();
	            return;
	            // }
	            // Evaluate from template
	            /*let hours = this.getHoursFromTemplate();
	             let minutes = this.getMinutesFromTemplate();
	             if (isDefined(hours) && isDefined(minutes)) {
	             this.selected.setHours(hours);
	             this.refresh();
	             }*/
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimepickerComponent.prototype, "selected", {
	        get: function () {
	            return this._selected;
	        },
	        set: function (v) {
	            if (v) {
	                this._selected = v;
	                this.updateTemplate();
	                this.cd.viewToModelUpdate(this.selected);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    // todo: add formatter value to Date object
	    TimepickerComponent.prototype.ngOnInit = function () {
	        // todo: take in account $locale.DATETIME_FORMATS.AMPMS;
	        this.meridians = def(this.meridians, isDefined, exports.timepickerConfig.meridians) || ['AM',
	            'PM'];
	        this.mousewheel = def(this.mousewheel, isDefined, exports.timepickerConfig.mousewheel);
	        if (this.mousewheel) {
	        }
	        this.arrowkeys = def(this.arrowkeys, isDefined, exports.timepickerConfig.arrowkeys);
	        if (this.arrowkeys) {
	        }
	        this.readonlyInput = def(this.readonlyInput, isDefined, exports.timepickerConfig.readonlyInput);
	        // this.setupInputEvents();
	        this.hourStep = def(this.hourStep, isDefined, exports.timepickerConfig.hourStep);
	        this.minuteStep = def(this.minuteStep, isDefined, exports.timepickerConfig.minuteStep);
	        this.min = def(this.min, isDefined, exports.timepickerConfig.min);
	        this.max = def(this.max, isDefined, exports.timepickerConfig.max);
	        // 12H / 24H mode
	        this.showMeridian = def(this.showMeridian, isDefined, exports.timepickerConfig.showMeridian);
	        this.showSpinners = def(this.showSpinners, isDefined, exports.timepickerConfig.showSpinners);
	    };
	    TimepickerComponent.prototype.writeValue = function (v) {
	        if (v === this.selected) {
	            return;
	        }
	        if (v && v instanceof Date) {
	            this.selected = v;
	            return;
	        }
	        this.selected = v ? new Date(v) : void 0;
	    };
	    TimepickerComponent.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    TimepickerComponent.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    TimepickerComponent.prototype.updateHours = function () {
	        if (this.readonlyInput) {
	            return;
	        }
	        var hours = this.getHoursFromTemplate();
	        var minutes = this.getMinutesFromTemplate();
	        this.invalidHours = !isDefined(hours);
	        this.invalidMinutes = !isDefined(minutes);
	        if (this.invalidHours || this.invalidMinutes) {
	            // TODO: needed a validation functionality.
	            return;
	        }
	        this.selected.setHours(hours);
	        this.invalidHours = (this.selected < this.min || this.selected > this.max);
	        if (this.invalidHours) {
	            // todo: validation?
	            // invalidate(true);
	            return;
	        }
	        else {
	            this.refresh();
	        }
	    };
	    TimepickerComponent.prototype.hoursOnBlur = function () {
	        if (this.readonlyInput) {
	            return;
	        }
	        // todo: binded with validation
	        if (!this.invalidHours && parseInt(this.hours, 10) < 10) {
	            this.hours = this.pad(this.hours);
	        }
	    };
	    TimepickerComponent.prototype.updateMinutes = function () {
	        if (this.readonlyInput) {
	            return;
	        }
	        var minutes = this.getMinutesFromTemplate();
	        var hours = this.getHoursFromTemplate();
	        this.invalidMinutes = !isDefined(minutes);
	        this.invalidHours = !isDefined(hours);
	        if (this.invalidMinutes || this.invalidHours) {
	            // TODO: needed a validation functionality.
	            return;
	        }
	        this.selected.setMinutes(minutes);
	        this.invalidMinutes = (this.selected < this.min || this.selected > this.max);
	        if (this.invalidMinutes) {
	            // todo: validation
	            // invalidate(undefined, true);
	            return;
	        }
	        else {
	            this.refresh();
	        }
	    };
	    TimepickerComponent.prototype.minutesOnBlur = function () {
	        if (this.readonlyInput) {
	            return;
	        }
	        if (!this.invalidMinutes && parseInt(this.minutes, 10) < 10) {
	            this.minutes = this.pad(this.minutes);
	        }
	    };
	    TimepickerComponent.prototype.incrementHours = function () {
	        if (!this.noIncrementHours()) {
	            this.addMinutesToSelected(this.hourStep * 60);
	        }
	    };
	    TimepickerComponent.prototype.decrementHours = function () {
	        if (!this.noDecrementHours()) {
	            this.addMinutesToSelected(-this.hourStep * 60);
	        }
	    };
	    TimepickerComponent.prototype.incrementMinutes = function () {
	        if (!this.noIncrementMinutes()) {
	            this.addMinutesToSelected(this.minuteStep);
	        }
	    };
	    TimepickerComponent.prototype.decrementMinutes = function () {
	        if (!this.noDecrementMinutes()) {
	            this.addMinutesToSelected(-this.minuteStep);
	        }
	    };
	    TimepickerComponent.prototype.toggleMeridian = function () {
	        if (!this.noToggleMeridian()) {
	            var sign = this.selected.getHours() < 12 ? 1 : -1;
	            this.addMinutesToSelected(12 * 60 * sign);
	        }
	    };
	    TimepickerComponent.prototype.refresh = function () {
	        // this.makeValid();
	        this.updateTemplate();
	        this.cd.viewToModelUpdate(this.selected);
	    };
	    TimepickerComponent.prototype.updateTemplate = function () {
	        var hours = this.selected.getHours();
	        var minutes = this.selected.getMinutes();
	        if (this.showMeridian) {
	            // Convert 24 to 12 hour system
	            hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
	        }
	        // this.hours = keyboardChange === 'h' ? hours : this.pad(hours);
	        // if (keyboardChange !== 'm') {
	        //  this.minutes = this.pad(minutes);
	        // }
	        this.hours = this.pad(hours);
	        this.minutes = this.pad(minutes);
	        this.meridian = this.selected.getHours() < 12
	            ? this.meridians[0]
	            : this.meridians[1];
	    };
	    TimepickerComponent.prototype.getHoursFromTemplate = function () {
	        var hours = parseInt(this.hours, 10);
	        var valid = this.showMeridian
	            ? (hours > 0 && hours < 13)
	            : (hours >= 0 && hours < 24);
	        if (!valid) {
	            return void 0;
	        }
	        if (this.showMeridian) {
	            if (hours === 12) {
	                hours = 0;
	            }
	            if (this.meridian === this.meridians[1]) {
	                hours = hours + 12;
	            }
	        }
	        return hours;
	    };
	    TimepickerComponent.prototype.getMinutesFromTemplate = function () {
	        var minutes = parseInt(this.minutes, 10);
	        return (minutes >= 0 && minutes < 60) ? minutes : undefined;
	    };
	    TimepickerComponent.prototype.pad = function (value) {
	        return (isDefined(value) && value.toString().length < 2)
	            ? '0' + value
	            : value.toString();
	    };
	    TimepickerComponent.prototype.noIncrementHours = function () {
	        var incrementedSelected = addMinutes(this.selected, this.hourStep * 60);
	        return incrementedSelected > this.max ||
	            (incrementedSelected < this.selected && incrementedSelected < this.min);
	    };
	    TimepickerComponent.prototype.noDecrementHours = function () {
	        var decrementedSelected = addMinutes(this.selected, -this.hourStep * 60);
	        return decrementedSelected < this.min ||
	            (decrementedSelected > this.selected && decrementedSelected > this.max);
	    };
	    TimepickerComponent.prototype.noIncrementMinutes = function () {
	        var incrementedSelected = addMinutes(this.selected, this.minuteStep);
	        return incrementedSelected > this.max ||
	            (incrementedSelected < this.selected && incrementedSelected < this.min);
	    };
	    TimepickerComponent.prototype.noDecrementMinutes = function () {
	        var decrementedSelected = addMinutes(this.selected, -this.minuteStep);
	        return decrementedSelected < this.min ||
	            (decrementedSelected > this.selected && decrementedSelected > this.max);
	    };
	    TimepickerComponent.prototype.addMinutesToSelected = function (minutes) {
	        this.selected = addMinutes(this.selected, minutes);
	        this.refresh();
	    };
	    TimepickerComponent.prototype.noToggleMeridian = function () {
	        if (this.readonlyInput) {
	            return true;
	        }
	        if (this.selected.getHours() < 13) {
	            return addMinutes(this.selected, 12 * 60) > this.max;
	        }
	        else {
	            return addMinutes(this.selected, -12 * 60) < this.min;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TimepickerComponent.prototype, "hourStep", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TimepickerComponent.prototype, "minuteStep", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TimepickerComponent.prototype, "readonlyInput", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TimepickerComponent.prototype, "mousewheel", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TimepickerComponent.prototype, "arrowkeys", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TimepickerComponent.prototype, "showSpinners", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], TimepickerComponent.prototype, "min", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], TimepickerComponent.prototype, "max", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], TimepickerComponent.prototype, "meridians", void 0);
	    __decorate([
	        // ??
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TimepickerComponent.prototype, "showMeridian", null);
	    TimepickerComponent = __decorate([
	        core_1.Component({
	            /* tslint:disable */
	            selector: 'timepicker[ngModel]',
	            /* tslint:enable */
	            template: "\n    <table>\n      <tbody>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners || readonlyInput}\">\n          <td><a (click)=\"incrementHours()\" [ngClass]=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"incrementMinutes()\" [ngClass]=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"></td>\n        </tr>\n        <tr>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidHours}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"hours\" (change)=\"updateHours()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"hoursOnBlur($event)\" maxlength=\"2\">\n          </td>\n          <td>:</td>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidMinutes}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"minutes\" (change)=\"updateMinutes()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"minutesOnBlur($event)\" maxlength=\"2\">\n          </td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"><button type=\"button\" [ngClass]=\"{disabled: noToggleMeridian() || readonlyInput}\" class=\"btn btn-default text-center\" (click)=\"toggleMeridian()\">{{meridian}}</button></td>\n        </tr>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners || readonlyInput}\">\n          <td><a (click)=\"decrementHours()\" [ngClass]=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"decrementMinutes()\" [ngClass]=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
	            providers: [forms_1.NgModel]
	        }),
	        __param(0, core_1.Self()), 
	        __metadata('design:paramtypes', [forms_1.NgModel])
	    ], TimepickerComponent);
	    return TimepickerComponent;
	}());
	exports.TimepickerComponent = TimepickerComponent;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var TooltipOptions = (function () {
	    function TooltipOptions(options) {
	        Object.assign(this, options);
	    }
	    TooltipOptions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [Object])
	    ], TooltipOptions);
	    return TooltipOptions;
	}());
	exports.TooltipOptions = TooltipOptions;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var tooltip_container_component_1 = __webpack_require__(116);
	var tooltip_options_class_1 = __webpack_require__(183);
	var components_helper_service_1 = __webpack_require__(30);
	/* tslint:disable */
	var TooltipDirective = (function () {
	    function TooltipDirective(viewContainerRef, componentsHelper) {
	        this.placement = 'top';
	        this.enable = true;
	        this.animation = true;
	        this.visible = false;
	        this.viewContainerRef = viewContainerRef;
	        this.componentsHelper = componentsHelper;
	    }
	    // todo: filter triggers
	    // params: event, target
	    TooltipDirective.prototype.show = function () {
	        if (this.visible || !this.enable) {
	            return;
	        }
	        this.visible = true;
	        var options = new tooltip_options_class_1.TooltipOptions({
	            content: this.content,
	            htmlContent: this.htmlContent,
	            placement: this.placement,
	            animation: this.animation,
	            hostEl: this.viewContainerRef.element,
	            popupClass: this.popupClass,
	            context: this.tooltipContext
	        });
	        var binding = core_1.ReflectiveInjector.resolve([
	            { provide: tooltip_options_class_1.TooltipOptions, useValue: options }
	        ]);
	        this.tooltip = this.componentsHelper
	            .appendNextToLocation(tooltip_container_component_1.TooltipContainerComponent, this.viewContainerRef, binding);
	    };
	    // params event, target
	    TooltipDirective.prototype.hide = function () {
	        if (!this.visible) {
	            return;
	        }
	        this.visible = false;
	        this.tooltip.destroy();
	    };
	    __decorate([
	        core_1.Input('tooltip'), 
	        __metadata('design:type', String)
	    ], TooltipDirective.prototype, "content", void 0);
	    __decorate([
	        core_1.Input('tooltipHtml'), 
	        __metadata('design:type', Object)
	    ], TooltipDirective.prototype, "htmlContent", void 0);
	    __decorate([
	        core_1.Input('tooltipPlacement'), 
	        __metadata('design:type', String)
	    ], TooltipDirective.prototype, "placement", void 0);
	    __decorate([
	        core_1.Input('tooltipIsOpen'), 
	        __metadata('design:type', Boolean)
	    ], TooltipDirective.prototype, "isOpen", void 0);
	    __decorate([
	        core_1.Input('tooltipEnable'), 
	        __metadata('design:type', Boolean)
	    ], TooltipDirective.prototype, "enable", void 0);
	    __decorate([
	        core_1.Input('tooltipAnimation'), 
	        __metadata('design:type', Boolean)
	    ], TooltipDirective.prototype, "animation", void 0);
	    __decorate([
	        core_1.Input('tooltipAppendToBody'), 
	        __metadata('design:type', Boolean)
	    ], TooltipDirective.prototype, "appendToBody", void 0);
	    __decorate([
	        core_1.Input('tooltipClass'), 
	        __metadata('design:type', String)
	    ], TooltipDirective.prototype, "popupClass", void 0);
	    __decorate([
	        core_1.Input('tooltipContext'), 
	        __metadata('design:type', Object)
	    ], TooltipDirective.prototype, "tooltipContext", void 0);
	    __decorate([
	        core_1.HostListener('focusin', ['$event', '$target']),
	        core_1.HostListener('mouseenter', ['$event', '$target']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], TooltipDirective.prototype, "show", null);
	    __decorate([
	        core_1.HostListener('focusout', ['$event', '$target']),
	        core_1.HostListener('mouseleave', ['$event', '$target']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], TooltipDirective.prototype, "hide", null);
	    TooltipDirective = __decorate([
	        core_1.Directive({ selector: '[tooltip], [tooltipHtml]' }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, components_helper_service_1.ComponentsHelper])
	    ], TooltipDirective);
	    return TooltipDirective;
	}());
	exports.TooltipDirective = TooltipDirective;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var latin_map_1 = __webpack_require__(400);
	var TypeaheadUtils = (function () {
	    function TypeaheadUtils() {
	    }
	    TypeaheadUtils.latinize = function (str) {
	        if (!str) {
	            return '';
	        }
	        return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
	            return TypeaheadUtils.latinMap[a] || a;
	        });
	    };
	    TypeaheadUtils.escapeRegexp = function (queryToEscape) {
	        // Regex: capture the whole query string and replace it with the string
	        // that will be used to match the results, for example if the capture is
	        // 'a' the result will be \a
	        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    };
	    /* tslint:disable */
	    TypeaheadUtils.tokenize = function (str, wordRegexDelimiters, phraseRegexDelimiters) {
	        if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
	        if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
	        /* tslint:enable */
	        var regexStr = '(?:[' + phraseRegexDelimiters + '])([^' + phraseRegexDelimiters + ']+)(?:[' + phraseRegexDelimiters + '])|([^' + wordRegexDelimiters + ']+)';
	        var preTokenized = str.split(new RegExp(regexStr, 'g'));
	        var result = [];
	        var preTokenizedLength = preTokenized.length;
	        var token;
	        var replacePhraseDelimiters = new RegExp('[' + phraseRegexDelimiters + ']+', 'g');
	        for (var i = 0; i < preTokenizedLength; i += 1) {
	            token = preTokenized[i];
	            if (token && token.length && token !== wordRegexDelimiters) {
	                result.push(token.replace(replacePhraseDelimiters, ''));
	            }
	        }
	        return result;
	    };
	    TypeaheadUtils.getValueFromObject = function (object, option) {
	        if (!option || typeof object !== 'object') {
	            return object.toString();
	        }
	        if (option.endsWith('()')) {
	            var functionName = option.slice(0, option.length - 2);
	            return object[functionName]().toString();
	        }
	        var properties = option.replace(/\[(\w+)\]/g, '.$1')
	            .replace(/^\./, '');
	        var propertiesArray = properties.split('.');
	        for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
	            var property = propertiesArray_1[_i];
	            if (property in object) {
	                object = object[property];
	            }
	        }
	        return object.toString();
	    };
	    TypeaheadUtils.latinMap = latin_map_1.latinMap;
	    return TypeaheadUtils;
	}());
	exports.TypeaheadUtils = TypeaheadUtils;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(12);
	var typeahead_container_component_1 = __webpack_require__(118);
	var typeahead_options_class_1 = __webpack_require__(119);
	var typeahead_utils_1 = __webpack_require__(185);
	var Observable_1 = __webpack_require__(9);
	__webpack_require__(415);
	__webpack_require__(416);
	__webpack_require__(417);
	__webpack_require__(187);
	__webpack_require__(418);
	__webpack_require__(419);
	var components_helper_service_1 = __webpack_require__(30);
	var TypeaheadDirective = (function () {
	    function TypeaheadDirective(control, viewContainerRef, element, renderer, componentsHelper) {
	        this.typeaheadLoading = new core_1.EventEmitter(false);
	        this.typeaheadNoResults = new core_1.EventEmitter(false);
	        this.typeaheadOnSelect = new core_1.EventEmitter(false);
	        this.typeaheadMinLength = void 0;
	        this.typeaheadAsync = void 0;
	        this.typeaheadLatinize = true;
	        this.typeaheadSingleWords = true;
	        this.typeaheadWordDelimiters = ' ';
	        this.typeaheadPhraseDelimiters = '\'"';
	        this.isTypeaheadOptionsListActive = false;
	        this.keyUpEventEmitter = new core_1.EventEmitter();
	        this.placement = 'bottom-left';
	        this.element = element;
	        this.ngControl = control;
	        this.viewContainerRef = viewContainerRef;
	        this.renderer = renderer;
	        this.componentsHelper = componentsHelper;
	    }
	    TypeaheadDirective.prototype.onChange = function (e) {
	        if (this.container) {
	            // esc
	            if (e.keyCode === 27) {
	                this.hide();
	                return;
	            }
	            // up
	            if (e.keyCode === 38) {
	                this.container.prevActiveMatch();
	                return;
	            }
	            // down
	            if (e.keyCode === 40) {
	                this.container.nextActiveMatch();
	                return;
	            }
	            // enter
	            if (e.keyCode === 13) {
	                this.container.selectActiveMatch();
	                return;
	            }
	        }
	        if (e.target.value.trim().length >= this.typeaheadMinLength) {
	            this.typeaheadLoading.emit(true);
	            this.keyUpEventEmitter.emit(e.target.value);
	        }
	        else {
	            this.typeaheadLoading.emit(false);
	            this.typeaheadNoResults.emit(false);
	            this.hide();
	        }
	    };
	    TypeaheadDirective.prototype.onFocus = function () {
	        if (this.typeaheadMinLength === 0) {
	            this.typeaheadLoading.emit(true);
	            this.keyUpEventEmitter.emit('');
	        }
	    };
	    TypeaheadDirective.prototype.onBlur = function () {
	        if (this.container && !this.container.isFocused) {
	            this.hide();
	        }
	    };
	    TypeaheadDirective.prototype.onKeydown = function (e) {
	        // no container - no problems
	        if (!this.container) {
	            return;
	        }
	        // if items is visible - prevent form submition
	        if (e.keyCode === 13) {
	            e.preventDefault();
	            return;
	        }
	        // if tab default browser behavior will select next input field, and therefore we should close the items list
	        if (e.keyCode === 9) {
	            this.hide();
	            return;
	        }
	    };
	    TypeaheadDirective.prototype.ngOnInit = function () {
	        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
	        this.typeaheadMinLength = this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
	        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
	        // async should be false in case of array
	        if (this.typeaheadAsync === undefined && !(this.typeahead instanceof Observable_1.Observable)) {
	            this.typeaheadAsync = false;
	        }
	        if (this.typeahead instanceof Observable_1.Observable) {
	            this.typeaheadAsync = true;
	        }
	        if (this.typeaheadAsync) {
	            this.asyncActions();
	        }
	        else {
	            this.syncActions();
	        }
	    };
	    TypeaheadDirective.prototype.changeModel = function (value) {
	        var valueStr = typeahead_utils_1.TypeaheadUtils.getValueFromObject(value, this.typeaheadOptionField);
	        this.ngControl.viewToModelUpdate(valueStr);
	        this.ngControl.control.setValue(valueStr);
	        this.hide();
	    };
	    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
	        get: function () {
	            return this._matches;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TypeaheadDirective.prototype.show = function (matches) {
	        var options = new typeahead_options_class_1.TypeaheadOptions({
	            typeaheadRef: this,
	            placement: this.placement,
	            animation: false
	        });
	        var binding = core_1.ReflectiveInjector.resolve([
	            { provide: typeahead_options_class_1.TypeaheadOptions, useValue: options }
	        ]);
	        this.popup = this.componentsHelper
	            .appendNextToLocation(typeahead_container_component_1.TypeaheadContainerComponent, this.viewContainerRef, binding);
	        this.popup.instance.position(this.viewContainerRef.element);
	        this.container = this.popup.instance;
	        this.container.parent = this;
	        // This improves the speedas it won't have to be done for each list item
	        var normalizedQuery = (this.typeaheadLatinize
	            ? typeahead_utils_1.TypeaheadUtils.latinize(this.ngControl.control.value)
	            : this.ngControl.control.value).toString()
	            .toLowerCase();
	        this.container.query = this.typeaheadSingleWords
	            ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
	            : normalizedQuery;
	        this.container.matches = matches;
	        this.container.field = this.typeaheadOptionField;
	        this.element.nativeElement.focus();
	    };
	    TypeaheadDirective.prototype.hide = function () {
	        if (this.container) {
	            this.popup.destroy();
	            this.container = void 0;
	        }
	    };
	    TypeaheadDirective.prototype.asyncActions = function () {
	        var _this = this;
	        this.keyUpEventEmitter
	            .debounceTime(this.typeaheadWaitMs)
	            .mergeMap(function () { return _this.typeahead; })
	            .subscribe(function (matches) {
	            _this._matches = matches.slice(0, _this.typeaheadOptionsLimit);
	            _this.finalizeAsyncCall();
	        }, function (err) {
	            console.error(err);
	        });
	    };
	    TypeaheadDirective.prototype.syncActions = function () {
	        var _this = this;
	        this.keyUpEventEmitter
	            .debounceTime(this.typeaheadWaitMs)
	            .mergeMap(function (value) {
	            var normalizedQuery = _this.normalizeQuery(value);
	            return Observable_1.Observable.from(_this.typeahead)
	                .filter(function (option) {
	                return option && _this.testMatch(_this.prepareOption(option).toLowerCase(), normalizedQuery);
	            })
	                .toArray();
	        })
	            .subscribe(function (matches) {
	            _this._matches = matches.slice(0, _this.typeaheadOptionsLimit);
	            _this.finalizeAsyncCall();
	        }, function (err) {
	            console.error(err);
	        });
	    };
	    TypeaheadDirective.prototype.prepareOption = function (option) {
	        var match = typeahead_utils_1.TypeaheadUtils.getValueFromObject(option, this.typeaheadOptionField);
	        return this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(match) : match;
	    };
	    TypeaheadDirective.prototype.normalizeQuery = function (value) {
	        // If singleWords, break model here to not be doing extra work on each iteration
	        var normalizedQuery = (this.typeaheadLatinize ? typeahead_utils_1.TypeaheadUtils.latinize(value) : value)
	            .toString()
	            .toLowerCase();
	        normalizedQuery = this.typeaheadSingleWords ?
	            typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters) :
	            normalizedQuery;
	        return normalizedQuery;
	    };
	    TypeaheadDirective.prototype.testMatch = function (match, test) {
	        var spaceLength;
	        if (typeof test === 'object') {
	            spaceLength = test.length;
	            for (var i = 0; i < spaceLength; i += 1) {
	                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        else {
	            return match.indexOf(test) >= 0;
	        }
	    };
	    TypeaheadDirective.prototype.finalizeAsyncCall = function () {
	        this.typeaheadLoading.emit(false);
	        this.typeaheadNoResults.emit(this.matches.length <= 0);
	        if (this._matches.length <= 0) {
	            this.hide();
	            return;
	        }
	        if (this.container && this._matches.length > 0) {
	            // This improves the speedas it won't have to be done for each list item
	            var normalizedQuery = (this.typeaheadLatinize
	                ? typeahead_utils_1.TypeaheadUtils.latinize(this.ngControl.control.value)
	                : this.ngControl.control.value).toString()
	                .toLowerCase();
	            this.container.query = this.typeaheadSingleWords
	                ? typeahead_utils_1.TypeaheadUtils.tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
	                : normalizedQuery;
	            this.container.matches = this._matches;
	        }
	        if (!this.container && this._matches.length > 0) {
	            this.show(this._matches);
	        }
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], TypeaheadDirective.prototype, "typeaheadLoading", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], TypeaheadDirective.prototype, "typeaheadNoResults", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], TypeaheadDirective.prototype, "typeaheadOnSelect", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TypeaheadDirective.prototype, "typeahead", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TypeaheadDirective.prototype, "typeaheadMinLength", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TypeaheadDirective.prototype, "typeaheadWaitMs", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TypeaheadDirective.prototype, "typeaheadOptionsLimit", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TypeaheadDirective.prototype, "typeaheadOptionField", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TypeaheadDirective.prototype, "typeaheadAsync", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TypeaheadDirective.prototype, "typeaheadLatinize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TypeaheadDirective.prototype, "typeaheadSingleWords", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TypeaheadDirective.prototype, "typeaheadWordDelimiters", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TypeaheadDirective.prototype, "typeaheadPhraseDelimiters", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], TypeaheadDirective.prototype, "typeaheadItemTemplate", void 0);
	    __decorate([
	        core_1.HostListener('keyup', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], TypeaheadDirective.prototype, "onChange", null);
	    __decorate([
	        core_1.HostListener('focus', ['$event.target']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], TypeaheadDirective.prototype, "onFocus", null);
	    __decorate([
	        core_1.HostListener('blur'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], TypeaheadDirective.prototype, "onBlur", null);
	    __decorate([
	        core_1.HostListener('keydown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [KeyboardEvent]), 
	        __metadata('design:returntype', void 0)
	    ], TypeaheadDirective.prototype, "onKeydown", null);
	    TypeaheadDirective = __decorate([
	        core_1.Directive({
	            /* tslint:disable */
	            selector: '[typeahead][ngModel],[typeahead][formControlName]'
	        }), 
	        __metadata('design:paramtypes', [forms_1.NgControl, core_1.ViewContainerRef, core_1.ElementRef, core_1.Renderer, components_helper_service_1.ComponentsHelper])
	    ], TypeaheadDirective);
	    return TypeaheadDirective;
	}());
	exports.TypeaheadDirective = TypeaheadDirective;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var map_1 = __webpack_require__(194);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(49);
	var app_routes_1 = __webpack_require__(203);
	var app_1 = __webpack_require__(204);
	var github_1 = __webpack_require__(58);
	var forms_1 = __webpack_require__(12);
	var platform_browser_1 = __webpack_require__(48);
	var http_1 = __webpack_require__(57);
	var car_1 = __webpack_require__(130);
	var repo_browser_1 = __webpack_require__(206);
	var repo_list_1 = __webpack_require__(208);
	var repo_detail_1 = __webpack_require__(207);
	var common_1 = __webpack_require__(14);
	var ng2_bootstrap_1 = __webpack_require__(402);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [app_1.AppComponent, car_1.Car, repo_browser_1.RepoBrowser, repo_list_1.RepoList, repo_detail_1.RepoDetail],
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig), ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.DatepickerModule],
	            providers: [github_1.Github, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
	            bootstrap: [app_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var car_1 = __webpack_require__(130);
	exports.rootRouterConfig = [
	    { path: '', redirectTo: 'car', pathMatch: 'full' },
	    { path: 'car', component: car_1.Car },
	];
	

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(404),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(57);
	var CarService = (function () {
	    function CarService(http) {
	        this.http = http;
	        this.labels = ["ToyotaVitz", "DaihatsuMove", "DaihatsuTanto", "SuzukiWagonR", "MazdaCX-5", "ToyotaAqua", "SubaruForester", "ToyotaRAV4", "HondaFit", "MazdaAxela", "ToyotaLandCruiser", "ToyotaPrius"];
	    }
	    CarService.prototype.accessPredictApi = function (fileToUpload, apiUrl) {
	        var _this = this;
	        var input = new FormData();
	        input.append("image", fileToUpload);
	        var response = this.http.post(apiUrl, input);
	        var results;
	        return response.map(function (res) {
	            var scores = res.json().scores;
	            var results = [];
	            // resultsの配列内で、nameとscoreを組み合わせる
	            _this.labels.forEach(function (item, index) {
	                results[index] = {
	                    rank: 0,
	                    name: item,
	                    value: parseFloat(scores[index])
	                };
	            });
	            // tempArrayの配列内で、scoresに0-11をふる
	            var tmpArray = [];
	            scores.forEach(function (value, index) {
	                tmpArray[index] = {
	                    index: index,
	                    value: parseFloat(value)
	                };
	            });
	            // rankArrayは、scoreが大きい順にtmpArrayを並べ替えたもの（indexの値を頭から順に読んでいくと、良い）
	            var rankArray = tmpArray.sort(function (a, b) { return (-a.value + b.value); });
	            // 順位をresultsの配列に追加
	            for (var i = 0; i < rankArray.length; i++) {
	                results[rankArray[i].index].rank = i + 1;
	            }
	            results = results.sort(function (a, b) { return (a.rank - b.rank); });
	            return results;
	        });
	    };
	    CarService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], CarService);
	    return CarService;
	    var _a;
	}());
	exports.CarService = CarService;
	

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(49);
	var github_1 = __webpack_require__(58);
	var RepoBrowser = (function () {
	    function RepoBrowser(router, github) {
	        this.router = router;
	        this.github = github;
	    }
	    RepoBrowser.prototype.searchForOrg = function (orgName) {
	        var _this = this;
	        this.github.getOrg(orgName)
	            .subscribe(function (_a) {
	            var name = _a.name;
	            console.log(name);
	            _this.router.navigate(['/github', orgName]);
	        });
	    };
	    RepoBrowser = __decorate([
	        core_1.Component({
	            selector: 'repo-browser',
	            template: __webpack_require__(406),
	            styles: [__webpack_require__(449)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof github_1.Github !== 'undefined' && github_1.Github) === 'function' && _b) || Object])
	    ], RepoBrowser);
	    return RepoBrowser;
	    var _a, _b;
	}());
	exports.RepoBrowser = RepoBrowser;
	

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(49);
	var github_1 = __webpack_require__(58);
	var RepoDetail = (function () {
	    function RepoDetail(github, route) {
	        this.github = github;
	        this.route = route;
	        this.repoDetails = {};
	    }
	    RepoDetail.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            _this.org = _this.route.snapshot.parent.params['org'];
	            _this.repo = params['repo'] || '';
	            if (_this.repo) {
	                _this.github.getRepoForOrg(_this.org, _this.repo)
	                    .subscribe(function (repoDetails) {
	                    _this.repoDetails = repoDetails;
	                });
	            }
	        });
	    };
	    RepoDetail = __decorate([
	        core_1.Component({
	            selector: 'repo-detail',
	            styles: [__webpack_require__(450)],
	            template: __webpack_require__(407)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof github_1.Github !== 'undefined' && github_1.Github) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
	    ], RepoDetail);
	    return RepoDetail;
	    var _a, _b;
	}());
	exports.RepoDetail = RepoDetail;
	

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var github_1 = __webpack_require__(58);
	var router_1 = __webpack_require__(49);
	var RepoList = (function () {
	    function RepoList(github, route) {
	        this.github = github;
	        this.route = route;
	    }
	    RepoList.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            _this.org = params['org'];
	            if (_this.org) {
	                _this.repos = _this.github.getReposForOrg(_this.org);
	            }
	        });
	    };
	    RepoList = __decorate([
	        core_1.Component({
	            selector: 'repo-list',
	            styles: [__webpack_require__(451)],
	            template: __webpack_require__(408),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof github_1.Github !== 'undefined' && github_1.Github) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
	    ], RepoList);
	    return RepoList;
	    var _a, _b;
	}());
	exports.RepoList = RepoList;
	

/***/ },
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, ".rank p.circle {\n  width: 1em;\n  height: 1em;\n  background-color: #fff;\n  border-radius: 1em;\n}\n.panel-primary p.circle span {\n  color: #337ab7;\n}\n\n.panel-green p.circle span{\n    color: #5cb85c;\n}\n\n.rank-1 {\n  font-size: 3em;\n}\n.rank-2 {\n  font-size: 2em;\n}\n.rank-3 {\n  font-size: 1em;\n}\n.rank-4,\n.rank-5,\n.rank-6,\n.rank-7,\n.rank-8,\n.rank-9,\n.rank-10,\n.rank-11,\n.rank-12{\n  font-size: 1em;\n}\n\n", ""]);

	// exports


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\nbody {\n  background-color: #f8f8f8;\n}\n#wrapper {\n  width: 100%;\n}\n#page-wrapper {\n  padding: 0 15px;\n  min-height: 568px;\n  background-color: white;\n}\n@media (min-width: 768px) {\n  #page-wrapper {\n    position: inherit;\n    margin: 0 0 0 250px;\n    padding: 0 30px;\n    border-left: 1px solid #e7e7e7;\n  }\n}\n.navbar-top-links {\n  margin-right: 0;\n}\n.navbar-top-links li {\n  display: inline-block;\n}\n.navbar-top-links li:last-child {\n  margin-right: 15px;\n}\n.navbar-top-links li a {\n  padding: 15px;\n  min-height: 50px;\n}\n.navbar-top-links .dropdown-menu li {\n  display: block;\n}\n.navbar-top-links .dropdown-menu li:last-child {\n  margin-right: 0;\n}\n.navbar-top-links .dropdown-menu li a {\n  padding: 3px 20px;\n  min-height: 0;\n}\n.navbar-top-links .dropdown-menu li a div {\n  white-space: normal;\n}\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n  width: 310px;\n  min-width: 0;\n}\n.navbar-top-links .dropdown-messages {\n  margin-left: 5px;\n}\n.navbar-top-links .dropdown-tasks {\n  margin-left: -59px;\n}\n.navbar-top-links .dropdown-alerts {\n  margin-left: -123px;\n}\n.navbar-top-links .dropdown-user {\n  right: 0;\n  left: auto;\n}\n.sidebar .sidebar-nav.navbar-collapse {\n  padding-left: 0;\n  padding-right: 0;\n}\n.sidebar .sidebar-search {\n  padding: 15px;\n}\n.sidebar ul li {\n  border-bottom: 1px solid #e7e7e7;\n}\n.sidebar ul li a.active {\n  background-color: #eeeeee;\n}\n.sidebar .arrow {\n  float: right;\n}\n.sidebar .fa.arrow:before {\n  content: \"\\F104\";\n}\n.sidebar .active > a > .fa.arrow:before {\n  content: \"\\F107\";\n}\n.sidebar .nav-second-level li,\n.sidebar .nav-third-level li {\n  border-bottom: none !important;\n}\n.sidebar .nav-second-level li a {\n  padding-left: 37px;\n}\n.sidebar .nav-third-level li a {\n  padding-left: 52px;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    z-index: 1;\n    position: absolute;\n    width: 250px;\n    margin-top: 51px;\n  }\n  .navbar-top-links .dropdown-messages,\n  .navbar-top-links .dropdown-tasks,\n  .navbar-top-links .dropdown-alerts {\n    margin-left: auto;\n  }\n}\n.btn-outline {\n  color: inherit;\n  background-color: transparent;\n  transition: all .5s;\n}\n.btn-primary.btn-outline {\n  color: #428bca;\n}\n.btn-success.btn-outline {\n  color: #5cb85c;\n}\n.btn-info.btn-outline {\n  color: #5bc0de;\n}\n.btn-warning.btn-outline {\n  color: #f0ad4e;\n}\n.btn-danger.btn-outline {\n  color: #d9534f;\n}\n.btn-primary.btn-outline:hover,\n.btn-success.btn-outline:hover,\n.btn-info.btn-outline:hover,\n.btn-warning.btn-outline:hover,\n.btn-danger.btn-outline:hover {\n  color: white;\n}\n.chat {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat li {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999999;\n}\n.chat li.left .chat-body {\n  margin-left: 60px;\n}\n.chat li.right .chat-body {\n  margin-right: 60px;\n}\n.chat li .chat-body p {\n  margin: 0;\n}\n.panel .slidedown .glyphicon,\n.chat .glyphicon {\n  margin-right: 5px;\n}\n.chat-panel .panel-body {\n  height: 350px;\n  overflow-y: scroll;\n}\n.login-panel {\n  margin-top: 25%;\n}\n.flot-chart {\n  display: block;\n  height: 400px;\n}\n.flot-chart-content {\n  width: 100%;\n  height: 100%;\n}\ntable.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc,\ntable.dataTable thead .sorting_asc_disabled,\ntable.dataTable thead .sorting_desc_disabled {\n  background: transparent;\n}\ntable.dataTable thead .sorting_asc:after {\n  content: \"\\F0DE\";\n  float: right;\n  font-family: fontawesome;\n}\ntable.dataTable thead .sorting_desc:after {\n  content: \"\\F0DD\";\n  float: right;\n  font-family: fontawesome;\n}\ntable.dataTable thead .sorting:after {\n  content: \"\\F0DC\";\n  float: right;\n  font-family: fontawesome;\n  color: rgba(50, 50, 50, 0.5);\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.428571429;\n}\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 10px 16px;\n  border-radius: 25px;\n  font-size: 18px;\n  line-height: 1.33;\n}\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  border-radius: 35px;\n  font-size: 24px;\n  line-height: 1.33;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 1px solid #ddd;\n  background-color: #eee !important;\n}\n.show-grid {\n  margin: 15px 0;\n}\n.huge {\n  font-size: 40px;\n}\n.panel-green {\n  border-color: #5cb85c;\n}\n.panel-green > .panel-heading {\n  border-color: #5cb85c;\n  color: white;\n  background-color: #5cb85c;\n}\n.panel-green > a {\n  color: #5cb85c;\n}\n.panel-green > a:hover {\n  color: #3d8b3d;\n}\n.panel-red {\n  border-color: #d9534f;\n}\n.panel-red > .panel-heading {\n  border-color: #d9534f;\n  color: white;\n  background-color: #d9534f;\n}\n.panel-red > a {\n  color: #d9534f;\n}\n.panel-red > a:hover {\n  color: #b52b27;\n}\n.panel-yellow {\n  border-color: #f0ad4e;\n}\n.panel-yellow > .panel-heading {\n  border-color: #f0ad4e;\n  color: white;\n  background-color: #f0ad4e;\n}\n.panel-yellow > a {\n  color: #f0ad4e;\n}\n.panel-yellow > a:hover {\n  color: #df8a13;\n}\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n  ul.timeline > li > .timeline-panel {\n    width: calc(10%);\n    width: -moz-calc(10%);\n    width: -webkit-calc(10%);\n  }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n  ul.timeline > li > .timeline-panel {\n    float: right;\n  }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "/*\n * metismenu - v1.1.3\n * Easy menu jQuery plugin for Twitter Bootstrap 3\n * https://github.com/onokumus/metisMenu\n *\n * Made by Osman Nuri Okumus\n * Under MIT License\n */\n\n.arrow{float:right;line-height:1.42857}.glyphicon.arrow:before{content:\"\\E079\"}.active>a>.glyphicon.arrow:before{content:\"\\E114\"}.fa.arrow:before{content:\"\\F104\"}.active>a>.fa.arrow:before{content:\"\\F107\"}.plus-times{float:right}.fa.plus-times:before{content:\"\\F067\"}.active>a>.fa.plus-times{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.plus-minus{float:right}.fa.plus-minus:before{content:\"\\F067\"}.active>a>.fa.plus-minus:before{content:\"\\F068\"}", ""]);

	// exports


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, ".morris-hover{position:absolute;z-index:1000}.morris-hover.morris-default-style{border-radius:10px;padding:6px;color:#666;background:rgba(255,255,255,0.8);border:solid 2px rgba(230,230,230,0.8);font-family:sans-serif;font-size:12px;text-align:center}.morris-hover.morris-default-style .morris-hover-row-label{font-weight:bold;margin:0.25em 0}\n.morris-hover.morris-default-style .morris-hover-point{white-space:nowrap;margin:0.1em 0}\n", ""]);

	// exports


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 377 */,
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.15.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';

	    var hookCallback;

	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return input != null && Object.prototype.toString.call(input) === '[object Object]';
	    }

	    function isObjectEmpty(obj) {
	        var k;
	        for (k in obj) {
	            // even if its not own property I'd still call it non-empty
	            return false;
	        }
	        return true;
	    }

	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }

	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }

	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }

	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;

	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }

	            return false;
	        };
	    }

	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            var isNowValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));

	            if (m._strict) {
	                isNowValid = isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }

	            if (Object.isFrozen == null || !Object.isFrozen(m)) {
	                m._isValid = isNowValid;
	            }
	            else {
	                return isNowValid;
	            }
	        }
	        return m._isValid;
	    }

	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }

	        return m;
	    }

	    function isUndefined(input) {
	        return input === void 0;
	    }

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    var updateInProgress = false;

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }

	    function absFloor (number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }

	        return value;
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;

	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                var args = [];
	                var arg;
	                for (var i = 0; i < arguments.length; i++) {
	                    arg = '';
	                    if (typeof arguments[i] === 'object') {
	                        arg += '\n[' + i + '] ';
	                        for (var key in arguments[0]) {
	                            arg += key + ': ' + arguments[0][key] + ', ';
	                        }
	                        arg = arg.slice(0, -2); // Remove trailing comma and space
	                    } else {
	                        arg = arguments[i];
	                    }
	                    args.push(arg);
	                }
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    var deprecations = {};

	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }

	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;

	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }

	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }

	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (hasOwnProp(parentConfig, prop) &&
	                    !hasOwnProp(childConfig, prop) &&
	                    isObject(parentConfig[prop])) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }

	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }

	    var keys;

	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }

	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };

	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }

	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };

	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];

	        if (format || !formatUpper) {
	            return format;
	        }

	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });

	        return this._longDateFormat[key];
	    }

	    var defaultInvalidDate = 'Invalid date';

	    function invalidDate () {
	        return this._invalidDate;
	    }

	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;

	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }

	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };

	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }

	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }

	    var aliases = {};

	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }

	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    var priorities = {};

	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }

	    function getPrioritizedUnits(unitsObj) {
	        var units = [];
	        for (var u in unitsObj) {
	            units.push({unit: u, priority: priorities[u]});
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }

	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }

	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }

	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }

	    // MOMENTS

	    function stringGet (units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }


	    function stringSet (units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units);
	            for (var i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }

	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	    var formatFunctions = {};

	    var formatTokenFunctions = {};

	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }

	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }

	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


	    var regexes = {};

	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }

	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }

	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    var tokens = {};

	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }

	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }

	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }

	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;

	    var indexOf;

	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // ALIASES

	    addUnitAlias('month', 'M');

	    // PRIORITY

	    addUnitPriority('month', 8);

	    // PARSING

	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });

	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });

	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        if (!m) {
	            return this._months;
	        }
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	    }

	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        if (!m) {
	            return this._monthsShort;
	        }
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }

	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;

	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }

	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }

	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function setMonth (mom, value) {
	        var dayOfMonth;

	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }

	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }

	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }

	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }

	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }

	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }

	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }

	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }

	    // FORMATTING

	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // ALIASES

	    addUnitAlias('year', 'y');

	    // PRIORITIES

	    addUnitPriority('year', 1);

	    // PARSING

	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    // HOOKS

	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', true);

	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }

	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));

	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

	        return -fwdlw + fwd - 1;
	    }

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;

	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }

	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }

	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;

	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }

	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }

	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }

	    // FORMATTING

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // ALIASES

	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');

	    // PRIORITIES

	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);

	    // PARSING

	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });

	    // HELPERS

	    // LOCALES

	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };

	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    // FORMATTING

	    addFormatToken('d', 0, 'do', 'day');

	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });

	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });

	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });

	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // ALIASES

	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');

	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);

	    // PARSING

	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });

	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }

	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }

	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }

	        return null;
	    }

	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }

	    // LOCALES

	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        if (!m) {
	            return this._weekdays;
	        }
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }

	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
	    }

	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
	    }

	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];

	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;

	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }

	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }

	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already

	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }

	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }

	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }

	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.

	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }

	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }

	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }

	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }


	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }

	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;

	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }

	    // FORMATTING

	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }

	    function kFormat() {
	        return this.hours() || 24;
	    }

	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);

	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });

	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });

	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // ALIASES

	    addUnitAlias('hour', 'h');

	    // PRIORITY
	    addUnitPriority('hour', 13);

	    // PARSING

	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }

	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);

	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);

	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });

	    // LOCALES

	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }

	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }


	    // MOMENTS

	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);

	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        ordinalParse: defaultOrdinalParse,
	        relativeTime: defaultRelativeTime,

	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,

	        week: defaultLocaleWeek,

	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,

	        meridiemParse: defaultLocaleMeridiemParse
	    };

	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.require) {
	            try {
	                oldLocale = globalLocale._abbr;
	                module.require('./locale/' + name);
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }

	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }

	        return globalLocale._abbr;
	    }

	    function defineLocale (name, config) {
	        if (config !== null) {
	            var parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }

	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale, parentConfig = baseConfig;
	            // MERGE
	            if (locales[name] != null) {
	                parentConfig = locales[name]._config;
	            }
	            config = mergeConfigs(parentConfig, config);
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }

	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return globalLocale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    }

	    function locale_locales__listLocales() {
	        return keys(locales);
	    }

	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;

	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }

	            getParsingFlags(m).overflow = overflow;
	        }

	        return m;
	    }

	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];

	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];

	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;

	        if (match) {
	            getParsingFlags(config).iso = true;

	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);

	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }

	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
	        'which is not reliable across all browsers and versions. Non ISO date formats are ' +
	        'discouraged and will be removed in an upcoming major release. Please refer to ' +
	        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }

	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }

	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};

	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }

	        config._a = [];
	        getParsingFlags(config).empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }

	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	        configFromArray(config);
	        checkOverflow(config);
	    }


	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }

	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);

	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;

	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	            getParsingFlags(tempConfig).score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }

	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });

	        configFromArray(config);
	    }

	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;

	        config._locale = config._locale || locale_locales__getLocale(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (format) {
	            configFromStringAndFormat(config);
	        }  else {
	            configFromInput(config);
	        }

	        if (!valid__isValid(config)) {
	            config._d = null;
	        }

	        return config;
	    }

	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }

	        if ((isObject(input) && isObjectEmpty(input)) ||
	                (isArray(input) && input.length === 0)) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;

	        return createFromConfig(c);
	    }

	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }

	    var prototypeMin = deprecate(
	        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other < this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );

	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    }

	    function max () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    }

	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };

	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = locale_locales__getLocale();

	        this._bubble();
	    }

	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }

	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }

	    // FORMATTING

	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });

	    // HELPERS

	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;

	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }

	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};

	    // MOMENTS

	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }

	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }

	            this.utcOffset(input, keepLocalTime);

	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }

	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }

	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;

	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }

	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            var tZone = offsetFromString(matchOffset, this._i);

	            if (tZone === 0) {
	                this.utcOffset(0, true);
	            } else {
	                this.utcOffset(offsetFromString(matchOffset, this._i));
	            }
	        }
	        return this;
	    }

	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;

	        return (this.utcOffset() - input) % 60 === 0;
	    }

	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }

	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }

	        var c = {};

	        copyConfig(c, this);
	        c = prepareConfig(c);

	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }

	        return this._isDSTShifted;
	    }

	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }

	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }

	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }

	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;

	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])                         * sign,
	                h  : toInt(match[HOUR])                         * sign,
	                m  : toInt(match[MINUTE])                       * sign,
	                s  : toInt(match[SECOND])                       * sign,
	                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    }

	    create__createDuration.fn = Duration.prototype;

	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }

	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }

	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);

	        if (!mom.isValid()) {
	            // No op
	            return;
	        }

	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }

	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');

	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	    }

	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';

	        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }

	    function clone () {
	        return new Moment(this);
	    }

	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }

	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }

	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }

	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }

	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }

	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }

	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;

	        if (!this.isValid()) {
	            return NaN;
	        }

	        that = cloneWithOffset(input, this);

	        if (!that.isValid()) {
	            return NaN;
	        }

	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

	        units = normalizeUnits(units);

	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }

	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }

	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }

	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }

	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }

	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }

	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }

	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;

	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData () {
	        return this._locale;
	    }

	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	            case 'date':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	        }

	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }

	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }

	        return this;
	    }

	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }

	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }

	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }

	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }

	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }

	    function toDate () {
	        return new Date(this.valueOf());
	    }

	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }

	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }

	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }

	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }

	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }

	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }

	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }

	    // FORMATTING

	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });

	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });

	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }

	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');

	    // PRIORITY

	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);


	    // PARSING

	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);

	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // MOMENTS

	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }

	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }

	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }

	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }

	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }

	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }

	    // FORMATTING

	    addFormatToken('Q', 0, 'Qo', 'quarter');

	    // ALIASES

	    addUnitAlias('quarter', 'Q');

	    // PRIORITY

	    addUnitPriority('quarter', 7);

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }

	    // FORMATTING

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // ALIASES

	    addUnitAlias('date', 'D');

	    // PRIOROITY
	    addUnitPriority('date', 9);

	    // PARSING

	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    // FORMATTING

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // ALIASES

	    addUnitAlias('dayOfYear', 'DDD');

	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);

	    // PARSING

	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    // MOMENTS

	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }

	    // FORMATTING

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // ALIASES

	    addUnitAlias('minute', 'm');

	    // PRIORITY

	    addUnitPriority('minute', 14);

	    // PARSING

	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    // FORMATTING

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // ALIASES

	    addUnitAlias('second', 's');

	    // PRIORITY

	    addUnitPriority('second', 15);

	    // PARSING

	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    // FORMATTING

	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });

	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });

	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });


	    // ALIASES

	    addUnitAlias('millisecond', 'ms');

	    // PRIORITY

	    addUnitPriority('millisecond', 16);

	    // PARSING

	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);

	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }

	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }

	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS

	    var getSetMillisecond = makeGetSet('Milliseconds', false);

	    // FORMATTING

	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }

	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }

	    var momentPrototype__proto = Moment.prototype;

	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = stringGet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = stringSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;

	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;

	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;

	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;

	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;

	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

	    var momentPrototype = momentPrototype__proto;

	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }

	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }

	    function preParsePostFormat (string) {
	        return string;
	    }

	    var prototype__proto = Locale.prototype;

	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;

	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;

	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;

	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto.meridiem = localeMeridiem;

	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }

	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';

	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }

	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;

	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        }

	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;

	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }

	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }

	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }

	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }

	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }

	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }

	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

	    var mathAbs = Math.abs;

	    function duration_abs__abs () {
	        var data           = this._data;

	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);

	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);

	        return this;
	    }

	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);

	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;

	        return duration._bubble();
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }

	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }

	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;

	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;

	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;

	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;

	        days += absFloor(hours / 24);

	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));

	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;

	        data.days   = days;
	        data.months = months;
	        data.years  = years;

	        return this;
	    }

	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }

	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }

	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;

	        units = normalizeUnits(units);

	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }

	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }

	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }

	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');

	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }

	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }

	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');

	    function weeks () {
	        return absFloor(this.days() / 7);
	    }

	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));

	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set the rounding function for relative time strings
	    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof(roundingFunction) === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }

	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }

	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }

	        return locale.postformat(output);
	    }

	    var iso_string__abs = Math.abs;

	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;

	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;

	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;


	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();

	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }

	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }

	    var duration_prototype__proto = Duration.prototype;

	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;

	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;

	    // Side effect imports

	    // FORMATTING

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    // Side effect imports


	    utils_hooks__hooks.version = '2.15.0';

	    setHookCallback(local__createLocal);

	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.calendarFormat        = getCalendarFormat;
	    utils_hooks__hooks.prototype             = momentPrototype;

	    var _moment = utils_hooks__hooks;

	    return _moment;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(452)(module)))

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var accordion_group_component_1 = __webpack_require__(166);
	exports.AccordionPanelComponent = accordion_group_component_1.AccordionPanelComponent;
	var accordion_component_1 = __webpack_require__(95);
	exports.AccordionComponent = accordion_component_1.AccordionComponent;
	var accordion_module_1 = __webpack_require__(96);
	exports.AccordionModule = accordion_module_1.AccordionModule;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var alert_component_1 = __webpack_require__(167);
	exports.AlertComponent = alert_component_1.AlertComponent;
	var alert_module_1 = __webpack_require__(97);
	exports.AlertModule = alert_module_1.AlertModule;


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var button_checkbox_directive_1 = __webpack_require__(168);
	exports.ButtonCheckboxDirective = button_checkbox_directive_1.ButtonCheckboxDirective;
	var button_radio_directive_1 = __webpack_require__(169);
	exports.ButtonRadioDirective = button_radio_directive_1.ButtonRadioDirective;
	var buttons_module_1 = __webpack_require__(98);
	exports.ButtonsModule = buttons_module_1.ButtonsModule;


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var carousel_component_1 = __webpack_require__(99);
	exports.CarouselComponent = carousel_component_1.CarouselComponent;
	var carousel_module_1 = __webpack_require__(100);
	exports.CarouselModule = carousel_module_1.CarouselModule;
	var slide_component_1 = __webpack_require__(170);
	exports.SlideComponent = slide_component_1.SlideComponent;


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collapse_directive_1 = __webpack_require__(171);
	exports.CollapseDirective = collapse_directive_1.CollapseDirective;
	var collapse_module_1 = __webpack_require__(69);
	exports.CollapseModule = collapse_module_1.CollapseModule;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 todo: general:
	 1. Popup
	 2. Keyboard support
	 3. custom-class attribute support
	 4. date-disabled attribute support
	 5. template-url attribute support
	 */
	var datepicker_component_1 = __webpack_require__(173);
	exports.DatePickerComponent = datepicker_component_1.DatePickerComponent;
	var datepicker_module_1 = __webpack_require__(101);
	exports.DatepickerModule = datepicker_module_1.DatepickerModule;


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var moment = __webpack_require__(378);
	var DateFormatter = (function () {
	    function DateFormatter() {
	    }
	    DateFormatter.prototype.format = function (date, format) {
	        return moment(date.getTime()).format(format);
	    };
	    return DateFormatter;
	}());
	exports.DateFormatter = DateFormatter;


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_bootstrap_config_1 = __webpack_require__(47);
	var datepicker_inner_component_1 = __webpack_require__(70);
	// write an interface for template options
	var TEMPLATE_OPTIONS = (_a = {},
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS4] = {
	        DAY_TITLE: "\n        <th *ngFor=\"let labelz of labels\" class=\"text-xs-center\"><small aria-label=\"labelz.full\"><b>{{labelz.abbr}}</b></small></th>\n    ",
	        WEEK_ROW: "\n        <td *ngIf=\"datePicker.showWeeks\" class=\"text-xs-center h6\"><em>{{ weekNumbers[index] }}</em></td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-xs-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current}\">{{dtz.label}}</span>\n          </button>\n        </td>\n    ",
	        ARROW_LEFT: '&lt;',
	        ARROW_RIGHT: '&gt;'
	    },
	    _a[ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3] = {
	        DAY_TITLE: "\n        <th *ngFor=\"let labelz of labels\" class=\"text-center\"><small aria-label=\"labelz.full\"><b>{{labelz.abbr}}</b></small></th>\n    ",
	        WEEK_ROW: "\n        <td *ngIf=\"datePicker.showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[index] }}</em></td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-info': dtz.selected, active: datePicker.isActive(dtz), disabled: dtz.disabled}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary, 'text-info': dtz.current}\">{{dtz.label}}</span>\n          </button>\n        </td>\n    ",
	        ARROW_LEFT: "\n    <i class=\"glyphicon glyphicon-chevron-left\"></i>\n    ",
	        ARROW_RIGHT: "\n    <i class=\"glyphicon glyphicon-chevron-right\"></i>\n    "
	    },
	    _a
	);
	var CURRENT_THEME_TEMPLATE = TEMPLATE_OPTIONS[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme || ng2_bootstrap_config_1.Ng2BootstrapTheme.BS3];
	var DayPickerComponent = (function () {
	    function DayPickerComponent(datePicker) {
	        this.labels = [];
	        this.rows = [];
	        this.weekNumbers = [];
	        this.datePicker = datePicker;
	    }
	    /*private getDaysInMonth(year:number, month:number) {
	     return ((month === 1) && (year % 4 === 0) &&
	     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	     }*/
	    DayPickerComponent.prototype.ngOnInit = function () {
	        var self = this;
	        this.datePicker.stepDay = { months: 1 };
	        this.datePicker.setRefreshViewHandler(function () {
	            var year = this.activeDate.getFullYear();
	            var month = this.activeDate.getMonth();
	            var firstDayOfMonth = new Date(year, month, 1);
	            var difference = this.startingDay - firstDayOfMonth.getDay();
	            var numDisplayedFromPreviousMonth = (difference > 0)
	                ? 7 - difference
	                : -difference;
	            var firstDate = new Date(firstDayOfMonth.getTime());
	            if (numDisplayedFromPreviousMonth > 0) {
	                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	            }
	            // 42 is the number of days on a six-week calendar
	            var _days = self.getDates(firstDate, 42);
	            var days = [];
	            for (var i = 0; i < 42; i++) {
	                var _dateObject = this.createDateObject(_days[i], this.formatDay);
	                _dateObject.secondary = _days[i].getMonth() !== month;
	                _dateObject.uid = this.uniqueId + '-' + i;
	                days[i] = _dateObject;
	            }
	            self.labels = [];
	            for (var j = 0; j < 7; j++) {
	                self.labels[j] = {};
	                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
	                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
	            }
	            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
	            self.rows = this.split(days, 7);
	            if (this.showWeeks) {
	                self.weekNumbers = [];
	                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
	                var numWeeks = self.rows.length;
	                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
	                }
	            }
	        }, 'day');
	        this.datePicker.setCompareHandler(function (date1, date2) {
	            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
	            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
	            return d1.getTime() - d2.getTime();
	        }, 'day');
	        this.datePicker.refreshView();
	    };
	    DayPickerComponent.prototype.getDates = function (startDate, n) {
	        var dates = new Array(n);
	        var current = new Date(startDate.getTime());
	        var i = 0;
	        var date;
	        while (i < n) {
	            date = new Date(current.getTime());
	            date = this.datePicker.fixTimeZone(date);
	            dates[i++] = date;
	            current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
	        }
	        return dates;
	    };
	    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
	        var checkDate = new Date(date.getTime());
	        // Thursday
	        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
	        var time = checkDate.getTime();
	        // Compare with Jan 1
	        checkDate.setMonth(0);
	        checkDate.setDate(1);
	        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
	    };
	    DayPickerComponent = __decorate([
	        core_1.Component({
	            selector: 'daypicker',
	            template: "\n<table *ngIf=\"datePicker.datepickerMode==='day'\" role=\"grid\" aria-labelledby=\"uniqueId+'-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-secondary btn-sm pull-left\" (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n        " + CURRENT_THEME_TEMPLATE.ARROW_LEFT + "\n        </button>\n      </th>\n      <th [attr.colspan]=\"5 + datePicker.showWeeks\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-secondary btn-sm pull-right\" (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n        " + CURRENT_THEME_TEMPLATE.ARROW_RIGHT + "\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      " + CURRENT_THEME_TEMPLATE.DAY_TITLE + "\n    </tr>\n  </thead>\n  <tbody>\n    <template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        " + CURRENT_THEME_TEMPLATE.WEEK_ROW + "\n      </tr>\n    </template>\n  </tbody>\n</table>\n  "
	        }), 
	        __metadata('design:paramtypes', [datepicker_inner_component_1.DatePickerInnerComponent])
	    ], DayPickerComponent);
	    return DayPickerComponent;
	}());
	exports.DayPickerComponent = DayPickerComponent;
	var _a;


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_bootstrap_config_1 = __webpack_require__(47);
	var datepicker_inner_component_1 = __webpack_require__(70);
	// write an interface for template options
	var TEMPLATE_OPTIONS = {
	    bs4: {
	        MONTH_BUTTON: "\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-info': dtz.selected, 'btn-link': !dtz.selected && !datePicker.isActive(dtz), 'btn-info': !dtz.selected && datePicker.isActive(dtz), disabled: dtz.disabled}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\"><span [ngClass]=\"{'text-success': dtz.current}\">{{dtz.label}}</span></button>\n    "
	    },
	    bs3: {
	        MONTH_BUTTON: "\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-info': dtz.selected, active: datePicker.isActive(dtz), disabled: dtz.disabled}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\"><span [ngClass]=\"{'text-info': dtz.current}\">{{dtz.label}}</span></button>\n    "
	    }
	};
	var CURRENT_THEME_TEMPLATE = TEMPLATE_OPTIONS[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme] || TEMPLATE_OPTIONS.bs3;
	var MonthPickerComponent = (function () {
	    function MonthPickerComponent(datePicker) {
	        this.rows = [];
	        this.datePicker = datePicker;
	    }
	    MonthPickerComponent.prototype.ngOnInit = function () {
	        var self = this;
	        this.datePicker.stepMonth = { years: 1 };
	        this.datePicker.setRefreshViewHandler(function () {
	            var months = new Array(12);
	            var year = this.activeDate.getFullYear();
	            var date;
	            for (var i = 0; i < 12; i++) {
	                date = new Date(year, i, 1);
	                date = this.fixTimeZone(date);
	                months[i] = this.createDateObject(date, this.formatMonth);
	                months[i].uid = this.uniqueId + '-' + i;
	            }
	            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
	            self.rows = this.split(months, 3);
	        }, 'month');
	        this.datePicker.setCompareHandler(function (date1, date2) {
	            var d1 = new Date(date1.getFullYear(), date1.getMonth());
	            var d2 = new Date(date2.getFullYear(), date2.getMonth());
	            return d1.getTime() - d2.getTime();
	        }, 'month');
	        this.datePicker.refreshView();
	    };
	    MonthPickerComponent = __decorate([
	        core_1.Component({
	            selector: 'monthpicker',
	            template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-left\"></i>\n        </button></th>\n      <th>\n        <button [id]=\"uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" id=\"{{dtz.uid}}\" [ngClass]=\"dtz.customClass\">\n        " + CURRENT_THEME_TEMPLATE.MONTH_BUTTON + "\n      </td>\n    </tr>\n  </tbody>\n</table>\n  "
	        }), 
	        __metadata('design:paramtypes', [datepicker_inner_component_1.DatePickerInnerComponent])
	    ], MonthPickerComponent);
	    return MonthPickerComponent;
	}());
	exports.MonthPickerComponent = MonthPickerComponent;


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_bootstrap_config_1 = __webpack_require__(47);
	var datepicker_inner_component_1 = __webpack_require__(70);
	// write an interface for template options
	var TEMPLATE_OPTIONS = {
	    bs4: {
	        YEAR_BUTTON: "\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-info': dtz.selected, 'btn-link': !dtz.selected && !datePicker.isActive(dtz), 'btn-info': !dtz.selected && datePicker.isActive(dtz), disabled: dtz.disabled}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': dtz.current}\">{{dtz.label}}</span>\n        </button>\n    "
	    },
	    bs3: {
	        YEAR_BUTTON: "\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-info': dtz.selected, active: datePicker.isActive(dtz), disabled: dtz.disabled}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-info': dtz.current}\">{{dtz.label}}</span>\n        </button>\n    "
	    }
	};
	var CURRENT_THEME_TEMPLATE = TEMPLATE_OPTIONS[ng2_bootstrap_config_1.Ng2BootstrapConfig.theme] || TEMPLATE_OPTIONS.bs3;
	var YearPickerComponent = (function () {
	    function YearPickerComponent(datePicker) {
	        this.rows = [];
	        this.datePicker = datePicker;
	    }
	    YearPickerComponent.prototype.ngOnInit = function () {
	        var self = this;
	        this.datePicker.stepYear = { years: this.datePicker.yearRange };
	        this.datePicker.setRefreshViewHandler(function () {
	            var years = new Array(this.yearRange);
	            var date;
	            var start = self.getStartingYear(this.activeDate.getFullYear());
	            for (var i = 0; i < this.yearRange; i++) {
	                date = new Date(start + i, 0, 1);
	                date = this.fixTimeZone(date);
	                years[i] = this.createDateObject(date, this.formatYear);
	                years[i].uid = this.uniqueId + '-' + i;
	            }
	            self.title = [years[0].label,
	                years[this.yearRange - 1].label].join(' - ');
	            self.rows = this.split(years, 5);
	        }, 'year');
	        this.datePicker.setCompareHandler(function (date1, date2) {
	            return date1.getFullYear() - date2.getFullYear();
	        }, 'year');
	        this.datePicker.refreshView();
	    };
	    YearPickerComponent.prototype.getStartingYear = function (year) {
	        // todo: parseInt
	        return ((year - 1) / this.datePicker.yearRange) * this.datePicker.yearRange + 1;
	    };
	    YearPickerComponent = __decorate([
	        core_1.Component({
	            selector: 'yearpicker',
	            template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-left\"></i>\n        </button>\n      </th>\n      <th colspan=\"3\">\n        <button [id]=\"uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\">\n      " + CURRENT_THEME_TEMPLATE.YEAR_BUTTON + "\n      </td>\n    </tr>\n  </tbody>\n</table>\n  "
	        }), 
	        __metadata('design:paramtypes', [datepicker_inner_component_1.DatePickerInnerComponent])
	    ], YearPickerComponent);
	    return YearPickerComponent;
	}());
	exports.YearPickerComponent = YearPickerComponent;


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dropdown_menu_directive_1 = __webpack_require__(174);
	exports.DropdownMenuDirective = dropdown_menu_directive_1.DropdownMenuDirective;
	var dropdown_toggle_directive_1 = __webpack_require__(175);
	exports.DropdownToggleDirective = dropdown_toggle_directive_1.DropdownToggleDirective;
	var dropdown_directive_1 = __webpack_require__(71);
	exports.DropdownDirective = dropdown_directive_1.DropdownDirective;
	var dropdown_module_1 = __webpack_require__(102);
	exports.DropdownModule = dropdown_module_1.DropdownModule;


/***/ },
/* 390 */
/***/ function(module, exports) {

	"use strict";
	exports.ALWAYS = 'always';
	exports.DISABLED = 'disabled';
	exports.OUTSIDECLICK = 'outsideClick';
	exports.NONINPUT = 'nonInput';
	var DropdownService = (function () {
	    function DropdownService() {
	        this.closeDropdownBind = this.closeDropdown.bind(this);
	        this.keybindFilterBind = this.keybindFilter.bind(this);
	    }
	    DropdownService.prototype.open = function (dropdownScope) {
	        if (!this.openScope) {
	            window.document.addEventListener('click', this.closeDropdownBind, true);
	            window.document.addEventListener('keydown', this.keybindFilterBind);
	        }
	        if (this.openScope && this.openScope !== dropdownScope) {
	            this.openScope.isOpen = false;
	        }
	        this.openScope = dropdownScope;
	    };
	    DropdownService.prototype.close = function (dropdownScope) {
	        if (this.openScope !== dropdownScope) {
	            return;
	        }
	        this.openScope = void 0;
	        window.document.removeEventListener('click', this.closeDropdownBind, true);
	        window.document.removeEventListener('keydown', this.keybindFilterBind);
	    };
	    DropdownService.prototype.closeDropdown = function (event) {
	        if (!this.openScope) {
	            return;
	        }
	        if (event && this.openScope.autoClose === exports.DISABLED) {
	            return;
	        }
	        if (event && this.openScope.toggleEl &&
	            this.openScope.toggleEl.nativeElement.contains(event.target)) {
	            return;
	        }
	        if (event && this.openScope.autoClose === exports.NONINPUT &&
	            this.openScope.menuEl &&
	            /input|textarea/i.test(event.target.tagName) &&
	            this.openScope.menuEl.nativeElement.contains(event.target)) {
	            return;
	        }
	        if (event && this.openScope.autoClose === exports.OUTSIDECLICK &&
	            this.openScope.menuEl &&
	            this.openScope.menuEl.nativeElement.contains(event.target)) {
	            return;
	        }
	        this.openScope.isOpen = false;
	    };
	    DropdownService.prototype.keybindFilter = function (event) {
	        if (event.which === 27) {
	            this.openScope.focusToggleElement();
	            this.closeDropdown(void 0);
	            return;
	        }
	        if (this.openScope.keyboardNav && this.openScope.isOpen &&
	            (event.which === 38 || event.which === 40)) {
	            event.preventDefault();
	            event.stopPropagation();
	            this.openScope.focusDropdownEntry(event.which);
	        }
	    };
	    return DropdownService;
	}());
	exports.DropdownService = DropdownService;
	exports.dropdownService = new DropdownService();


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var accordion_module_1 = __webpack_require__(96);
	var alert_module_1 = __webpack_require__(97);
	var buttons_module_1 = __webpack_require__(98);
	var carousel_module_1 = __webpack_require__(100);
	var collapse_module_1 = __webpack_require__(69);
	var datepicker_module_1 = __webpack_require__(101);
	var dropdown_module_1 = __webpack_require__(102);
	var modal_module_1 = __webpack_require__(105);
	var pagination_module_1 = __webpack_require__(107);
	var progressbar_module_1 = __webpack_require__(110);
	var rating_module_1 = __webpack_require__(111);
	var tabs_module_1 = __webpack_require__(113);
	var timepicker_module_1 = __webpack_require__(115);
	var tooltip_module_1 = __webpack_require__(117);
	var typeahead_module_1 = __webpack_require__(120);
	var components_helper_service_1 = __webpack_require__(30);
	var Ng2BootstrapModule = (function () {
	    function Ng2BootstrapModule() {
	    }
	    Ng2BootstrapModule = __decorate([
	        core_1.NgModule({
	            exports: [
	                accordion_module_1.AccordionModule, alert_module_1.AlertModule, buttons_module_1.ButtonsModule, carousel_module_1.CarouselModule, collapse_module_1.CollapseModule, datepicker_module_1.DatepickerModule, dropdown_module_1.DropdownModule,
	                modal_module_1.ModalModule, pagination_module_1.PaginationModule, progressbar_module_1.ProgressbarModule, rating_module_1.RatingModule, tabs_module_1.TabsModule, timepicker_module_1.TimepickerModule, tooltip_module_1.TooltipModule,
	                typeahead_module_1.TypeaheadModule
	            ],
	            providers: [
	                { provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2BootstrapModule);
	    return Ng2BootstrapModule;
	}());
	exports.Ng2BootstrapModule = Ng2BootstrapModule;


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(103));
	__export(__webpack_require__(104));
	__export(__webpack_require__(176));
	var modal_module_1 = __webpack_require__(105);
	exports.ModalModule = modal_module_1.ModalModule;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pager_component_1 = __webpack_require__(177);
	exports.PagerComponent = pager_component_1.PagerComponent;
	var pagination_component_1 = __webpack_require__(106);
	exports.PaginationComponent = pagination_component_1.PaginationComponent;
	var pagination_module_1 = __webpack_require__(107);
	exports.PaginationModule = pagination_module_1.PaginationModule;


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var bar_component_1 = __webpack_require__(178);
	exports.BarComponent = bar_component_1.BarComponent;
	var progress_directive_1 = __webpack_require__(109);
	exports.ProgressDirective = progress_directive_1.ProgressDirective;
	var progressbar_component_1 = __webpack_require__(179);
	exports.ProgressbarComponent = progressbar_component_1.ProgressbarComponent;
	var progressbar_module_1 = __webpack_require__(110);
	exports.ProgressbarModule = progressbar_module_1.ProgressbarModule;


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rating_component_1 = __webpack_require__(180);
	exports.RatingComponent = rating_component_1.RatingComponent;
	var rating_module_1 = __webpack_require__(111);
	exports.RatingModule = rating_module_1.RatingModule;


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tab_heading_directive_1 = __webpack_require__(181);
	exports.TabHeadingDirective = tab_heading_directive_1.TabHeadingDirective;
	var tabset_component_1 = __webpack_require__(114);
	exports.TabsetComponent = tabset_component_1.TabsetComponent;
	var tab_directive_1 = __webpack_require__(112);
	exports.TabDirective = tab_directive_1.TabDirective;
	var tabs_module_1 = __webpack_require__(113);
	exports.TabsModule = tabs_module_1.TabsModule;


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var timepicker_component_1 = __webpack_require__(182);
	exports.TimepickerComponent = timepicker_component_1.TimepickerComponent;
	var timepicker_module_1 = __webpack_require__(115);
	exports.TimepickerModule = timepicker_module_1.TimepickerModule;


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tooltip_container_component_1 = __webpack_require__(116);
	exports.TooltipContainerComponent = tooltip_container_component_1.TooltipContainerComponent;
	var tooltip_directive_1 = __webpack_require__(184);
	exports.TooltipDirective = tooltip_directive_1.TooltipDirective;
	var tooltip_module_1 = __webpack_require__(117);
	exports.TooltipModule = tooltip_module_1.TooltipModule;


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var typeahead_container_component_1 = __webpack_require__(118);
	exports.TypeaheadContainerComponent = typeahead_container_component_1.TypeaheadContainerComponent;
	var typeahead_options_class_1 = __webpack_require__(119);
	exports.TypeaheadOptions = typeahead_options_class_1.TypeaheadOptions;
	var typeahead_directive_1 = __webpack_require__(186);
	exports.TypeaheadDirective = typeahead_directive_1.TypeaheadDirective;
	var typeahead_module_1 = __webpack_require__(120);
	exports.TypeaheadModule = typeahead_module_1.TypeaheadModule;


/***/ },
/* 400 */
/***/ function(module, exports) {

	"use strict";
	exports.latinMap = {
	    'Á': 'A',
	    'Ă': 'A',
	    'Ắ': 'A',
	    'Ặ': 'A',
	    'Ằ': 'A',
	    'Ẳ': 'A',
	    'Ẵ': 'A',
	    'Ǎ': 'A',
	    'Â': 'A',
	    'Ấ': 'A',
	    'Ậ': 'A',
	    'Ầ': 'A',
	    'Ẩ': 'A',
	    'Ẫ': 'A',
	    'Ä': 'A',
	    'Ǟ': 'A',
	    'Ȧ': 'A',
	    'Ǡ': 'A',
	    'Ạ': 'A',
	    'Ȁ': 'A',
	    'À': 'A',
	    'Ả': 'A',
	    'Ȃ': 'A',
	    'Ā': 'A',
	    'Ą': 'A',
	    'Å': 'A',
	    'Ǻ': 'A',
	    'Ḁ': 'A',
	    'Ⱥ': 'A',
	    'Ã': 'A',
	    'Ꜳ': 'AA',
	    'Æ': 'AE',
	    'Ǽ': 'AE',
	    'Ǣ': 'AE',
	    'Ꜵ': 'AO',
	    'Ꜷ': 'AU',
	    'Ꜹ': 'AV',
	    'Ꜻ': 'AV',
	    'Ꜽ': 'AY',
	    'Ḃ': 'B',
	    'Ḅ': 'B',
	    'Ɓ': 'B',
	    'Ḇ': 'B',
	    'Ƀ': 'B',
	    'Ƃ': 'B',
	    'Ć': 'C',
	    'Č': 'C',
	    'Ç': 'C',
	    'Ḉ': 'C',
	    'Ĉ': 'C',
	    'Ċ': 'C',
	    'Ƈ': 'C',
	    'Ȼ': 'C',
	    'Ď': 'D',
	    'Ḑ': 'D',
	    'Ḓ': 'D',
	    'Ḋ': 'D',
	    'Ḍ': 'D',
	    'Ɗ': 'D',
	    'Ḏ': 'D',
	    'ǲ': 'D',
	    'ǅ': 'D',
	    'Đ': 'D',
	    'Ƌ': 'D',
	    'Ǳ': 'DZ',
	    'Ǆ': 'DZ',
	    'É': 'E',
	    'Ĕ': 'E',
	    'Ě': 'E',
	    'Ȩ': 'E',
	    'Ḝ': 'E',
	    'Ê': 'E',
	    'Ế': 'E',
	    'Ệ': 'E',
	    'Ề': 'E',
	    'Ể': 'E',
	    'Ễ': 'E',
	    'Ḙ': 'E',
	    'Ë': 'E',
	    'Ė': 'E',
	    'Ẹ': 'E',
	    'Ȅ': 'E',
	    'È': 'E',
	    'Ẻ': 'E',
	    'Ȇ': 'E',
	    'Ē': 'E',
	    'Ḗ': 'E',
	    'Ḕ': 'E',
	    'Ę': 'E',
	    'Ɇ': 'E',
	    'Ẽ': 'E',
	    'Ḛ': 'E',
	    'Ꝫ': 'ET',
	    'Ḟ': 'F',
	    'Ƒ': 'F',
	    'Ǵ': 'G',
	    'Ğ': 'G',
	    'Ǧ': 'G',
	    'Ģ': 'G',
	    'Ĝ': 'G',
	    'Ġ': 'G',
	    'Ɠ': 'G',
	    'Ḡ': 'G',
	    'Ǥ': 'G',
	    'Ḫ': 'H',
	    'Ȟ': 'H',
	    'Ḩ': 'H',
	    'Ĥ': 'H',
	    'Ⱨ': 'H',
	    'Ḧ': 'H',
	    'Ḣ': 'H',
	    'Ḥ': 'H',
	    'Ħ': 'H',
	    'Í': 'I',
	    'Ĭ': 'I',
	    'Ǐ': 'I',
	    'Î': 'I',
	    'Ï': 'I',
	    'Ḯ': 'I',
	    'İ': 'I',
	    'Ị': 'I',
	    'Ȉ': 'I',
	    'Ì': 'I',
	    'Ỉ': 'I',
	    'Ȋ': 'I',
	    'Ī': 'I',
	    'Į': 'I',
	    'Ɨ': 'I',
	    'Ĩ': 'I',
	    'Ḭ': 'I',
	    'Ꝺ': 'D',
	    'Ꝼ': 'F',
	    'Ᵹ': 'G',
	    'Ꞃ': 'R',
	    'Ꞅ': 'S',
	    'Ꞇ': 'T',
	    'Ꝭ': 'IS',
	    'Ĵ': 'J',
	    'Ɉ': 'J',
	    'Ḱ': 'K',
	    'Ǩ': 'K',
	    'Ķ': 'K',
	    'Ⱪ': 'K',
	    'Ꝃ': 'K',
	    'Ḳ': 'K',
	    'Ƙ': 'K',
	    'Ḵ': 'K',
	    'Ꝁ': 'K',
	    'Ꝅ': 'K',
	    'Ĺ': 'L',
	    'Ƚ': 'L',
	    'Ľ': 'L',
	    'Ļ': 'L',
	    'Ḽ': 'L',
	    'Ḷ': 'L',
	    'Ḹ': 'L',
	    'Ⱡ': 'L',
	    'Ꝉ': 'L',
	    'Ḻ': 'L',
	    'Ŀ': 'L',
	    'Ɫ': 'L',
	    'ǈ': 'L',
	    'Ł': 'L',
	    'Ǉ': 'LJ',
	    'Ḿ': 'M',
	    'Ṁ': 'M',
	    'Ṃ': 'M',
	    'Ɱ': 'M',
	    'Ń': 'N',
	    'Ň': 'N',
	    'Ņ': 'N',
	    'Ṋ': 'N',
	    'Ṅ': 'N',
	    'Ṇ': 'N',
	    'Ǹ': 'N',
	    'Ɲ': 'N',
	    'Ṉ': 'N',
	    'Ƞ': 'N',
	    'ǋ': 'N',
	    'Ñ': 'N',
	    'Ǌ': 'NJ',
	    'Ó': 'O',
	    'Ŏ': 'O',
	    'Ǒ': 'O',
	    'Ô': 'O',
	    'Ố': 'O',
	    'Ộ': 'O',
	    'Ồ': 'O',
	    'Ổ': 'O',
	    'Ỗ': 'O',
	    'Ö': 'O',
	    'Ȫ': 'O',
	    'Ȯ': 'O',
	    'Ȱ': 'O',
	    'Ọ': 'O',
	    'Ő': 'O',
	    'Ȍ': 'O',
	    'Ò': 'O',
	    'Ỏ': 'O',
	    'Ơ': 'O',
	    'Ớ': 'O',
	    'Ợ': 'O',
	    'Ờ': 'O',
	    'Ở': 'O',
	    'Ỡ': 'O',
	    'Ȏ': 'O',
	    'Ꝋ': 'O',
	    'Ꝍ': 'O',
	    'Ō': 'O',
	    'Ṓ': 'O',
	    'Ṑ': 'O',
	    'Ɵ': 'O',
	    'Ǫ': 'O',
	    'Ǭ': 'O',
	    'Ø': 'O',
	    'Ǿ': 'O',
	    'Õ': 'O',
	    'Ṍ': 'O',
	    'Ṏ': 'O',
	    'Ȭ': 'O',
	    'Ƣ': 'OI',
	    'Ꝏ': 'OO',
	    'Ɛ': 'E',
	    'Ɔ': 'O',
	    'Ȣ': 'OU',
	    'Ṕ': 'P',
	    'Ṗ': 'P',
	    'Ꝓ': 'P',
	    'Ƥ': 'P',
	    'Ꝕ': 'P',
	    'Ᵽ': 'P',
	    'Ꝑ': 'P',
	    'Ꝙ': 'Q',
	    'Ꝗ': 'Q',
	    'Ŕ': 'R',
	    'Ř': 'R',
	    'Ŗ': 'R',
	    'Ṙ': 'R',
	    'Ṛ': 'R',
	    'Ṝ': 'R',
	    'Ȑ': 'R',
	    'Ȓ': 'R',
	    'Ṟ': 'R',
	    'Ɍ': 'R',
	    'Ɽ': 'R',
	    'Ꜿ': 'C',
	    'Ǝ': 'E',
	    'Ś': 'S',
	    'Ṥ': 'S',
	    'Š': 'S',
	    'Ṧ': 'S',
	    'Ş': 'S',
	    'Ŝ': 'S',
	    'Ș': 'S',
	    'Ṡ': 'S',
	    'Ṣ': 'S',
	    'Ṩ': 'S',
	    'Ť': 'T',
	    'Ţ': 'T',
	    'Ṱ': 'T',
	    'Ț': 'T',
	    'Ⱦ': 'T',
	    'Ṫ': 'T',
	    'Ṭ': 'T',
	    'Ƭ': 'T',
	    'Ṯ': 'T',
	    'Ʈ': 'T',
	    'Ŧ': 'T',
	    'Ɐ': 'A',
	    'Ꞁ': 'L',
	    'Ɯ': 'M',
	    'Ʌ': 'V',
	    'Ꜩ': 'TZ',
	    'Ú': 'U',
	    'Ŭ': 'U',
	    'Ǔ': 'U',
	    'Û': 'U',
	    'Ṷ': 'U',
	    'Ü': 'U',
	    'Ǘ': 'U',
	    'Ǚ': 'U',
	    'Ǜ': 'U',
	    'Ǖ': 'U',
	    'Ṳ': 'U',
	    'Ụ': 'U',
	    'Ű': 'U',
	    'Ȕ': 'U',
	    'Ù': 'U',
	    'Ủ': 'U',
	    'Ư': 'U',
	    'Ứ': 'U',
	    'Ự': 'U',
	    'Ừ': 'U',
	    'Ử': 'U',
	    'Ữ': 'U',
	    'Ȗ': 'U',
	    'Ū': 'U',
	    'Ṻ': 'U',
	    'Ų': 'U',
	    'Ů': 'U',
	    'Ũ': 'U',
	    'Ṹ': 'U',
	    'Ṵ': 'U',
	    'Ꝟ': 'V',
	    'Ṿ': 'V',
	    'Ʋ': 'V',
	    'Ṽ': 'V',
	    'Ꝡ': 'VY',
	    'Ẃ': 'W',
	    'Ŵ': 'W',
	    'Ẅ': 'W',
	    'Ẇ': 'W',
	    'Ẉ': 'W',
	    'Ẁ': 'W',
	    'Ⱳ': 'W',
	    'Ẍ': 'X',
	    'Ẋ': 'X',
	    'Ý': 'Y',
	    'Ŷ': 'Y',
	    'Ÿ': 'Y',
	    'Ẏ': 'Y',
	    'Ỵ': 'Y',
	    'Ỳ': 'Y',
	    'Ƴ': 'Y',
	    'Ỷ': 'Y',
	    'Ỿ': 'Y',
	    'Ȳ': 'Y',
	    'Ɏ': 'Y',
	    'Ỹ': 'Y',
	    'Ź': 'Z',
	    'Ž': 'Z',
	    'Ẑ': 'Z',
	    'Ⱬ': 'Z',
	    'Ż': 'Z',
	    'Ẓ': 'Z',
	    'Ȥ': 'Z',
	    'Ẕ': 'Z',
	    'Ƶ': 'Z',
	    'Ĳ': 'IJ',
	    'Œ': 'OE',
	    'ᴀ': 'A',
	    'ᴁ': 'AE',
	    'ʙ': 'B',
	    'ᴃ': 'B',
	    'ᴄ': 'C',
	    'ᴅ': 'D',
	    'ᴇ': 'E',
	    'ꜰ': 'F',
	    'ɢ': 'G',
	    'ʛ': 'G',
	    'ʜ': 'H',
	    'ɪ': 'I',
	    'ʁ': 'R',
	    'ᴊ': 'J',
	    'ᴋ': 'K',
	    'ʟ': 'L',
	    'ᴌ': 'L',
	    'ᴍ': 'M',
	    'ɴ': 'N',
	    'ᴏ': 'O',
	    'ɶ': 'OE',
	    'ᴐ': 'O',
	    'ᴕ': 'OU',
	    'ᴘ': 'P',
	    'ʀ': 'R',
	    'ᴎ': 'N',
	    'ᴙ': 'R',
	    'ꜱ': 'S',
	    'ᴛ': 'T',
	    'ⱻ': 'E',
	    'ᴚ': 'R',
	    'ᴜ': 'U',
	    'ᴠ': 'V',
	    'ᴡ': 'W',
	    'ʏ': 'Y',
	    'ᴢ': 'Z',
	    'á': 'a',
	    'ă': 'a',
	    'ắ': 'a',
	    'ặ': 'a',
	    'ằ': 'a',
	    'ẳ': 'a',
	    'ẵ': 'a',
	    'ǎ': 'a',
	    'â': 'a',
	    'ấ': 'a',
	    'ậ': 'a',
	    'ầ': 'a',
	    'ẩ': 'a',
	    'ẫ': 'a',
	    'ä': 'a',
	    'ǟ': 'a',
	    'ȧ': 'a',
	    'ǡ': 'a',
	    'ạ': 'a',
	    'ȁ': 'a',
	    'à': 'a',
	    'ả': 'a',
	    'ȃ': 'a',
	    'ā': 'a',
	    'ą': 'a',
	    'ᶏ': 'a',
	    'ẚ': 'a',
	    'å': 'a',
	    'ǻ': 'a',
	    'ḁ': 'a',
	    'ⱥ': 'a',
	    'ã': 'a',
	    'ꜳ': 'aa',
	    'æ': 'ae',
	    'ǽ': 'ae',
	    'ǣ': 'ae',
	    'ꜵ': 'ao',
	    'ꜷ': 'au',
	    'ꜹ': 'av',
	    'ꜻ': 'av',
	    'ꜽ': 'ay',
	    'ḃ': 'b',
	    'ḅ': 'b',
	    'ɓ': 'b',
	    'ḇ': 'b',
	    'ᵬ': 'b',
	    'ᶀ': 'b',
	    'ƀ': 'b',
	    'ƃ': 'b',
	    'ɵ': 'o',
	    'ć': 'c',
	    'č': 'c',
	    'ç': 'c',
	    'ḉ': 'c',
	    'ĉ': 'c',
	    'ɕ': 'c',
	    'ċ': 'c',
	    'ƈ': 'c',
	    'ȼ': 'c',
	    'ď': 'd',
	    'ḑ': 'd',
	    'ḓ': 'd',
	    'ȡ': 'd',
	    'ḋ': 'd',
	    'ḍ': 'd',
	    'ɗ': 'd',
	    'ᶑ': 'd',
	    'ḏ': 'd',
	    'ᵭ': 'd',
	    'ᶁ': 'd',
	    'đ': 'd',
	    'ɖ': 'd',
	    'ƌ': 'd',
	    'ı': 'i',
	    'ȷ': 'j',
	    'ɟ': 'j',
	    'ʄ': 'j',
	    'ǳ': 'dz',
	    'ǆ': 'dz',
	    'é': 'e',
	    'ĕ': 'e',
	    'ě': 'e',
	    'ȩ': 'e',
	    'ḝ': 'e',
	    'ê': 'e',
	    'ế': 'e',
	    'ệ': 'e',
	    'ề': 'e',
	    'ể': 'e',
	    'ễ': 'e',
	    'ḙ': 'e',
	    'ë': 'e',
	    'ė': 'e',
	    'ẹ': 'e',
	    'ȅ': 'e',
	    'è': 'e',
	    'ẻ': 'e',
	    'ȇ': 'e',
	    'ē': 'e',
	    'ḗ': 'e',
	    'ḕ': 'e',
	    'ⱸ': 'e',
	    'ę': 'e',
	    'ᶒ': 'e',
	    'ɇ': 'e',
	    'ẽ': 'e',
	    'ḛ': 'e',
	    'ꝫ': 'et',
	    'ḟ': 'f',
	    'ƒ': 'f',
	    'ᵮ': 'f',
	    'ᶂ': 'f',
	    'ǵ': 'g',
	    'ğ': 'g',
	    'ǧ': 'g',
	    'ģ': 'g',
	    'ĝ': 'g',
	    'ġ': 'g',
	    'ɠ': 'g',
	    'ḡ': 'g',
	    'ᶃ': 'g',
	    'ǥ': 'g',
	    'ḫ': 'h',
	    'ȟ': 'h',
	    'ḩ': 'h',
	    'ĥ': 'h',
	    'ⱨ': 'h',
	    'ḧ': 'h',
	    'ḣ': 'h',
	    'ḥ': 'h',
	    'ɦ': 'h',
	    'ẖ': 'h',
	    'ħ': 'h',
	    'ƕ': 'hv',
	    'í': 'i',
	    'ĭ': 'i',
	    'ǐ': 'i',
	    'î': 'i',
	    'ï': 'i',
	    'ḯ': 'i',
	    'ị': 'i',
	    'ȉ': 'i',
	    'ì': 'i',
	    'ỉ': 'i',
	    'ȋ': 'i',
	    'ī': 'i',
	    'į': 'i',
	    'ᶖ': 'i',
	    'ɨ': 'i',
	    'ĩ': 'i',
	    'ḭ': 'i',
	    'ꝺ': 'd',
	    'ꝼ': 'f',
	    'ᵹ': 'g',
	    'ꞃ': 'r',
	    'ꞅ': 's',
	    'ꞇ': 't',
	    'ꝭ': 'is',
	    'ǰ': 'j',
	    'ĵ': 'j',
	    'ʝ': 'j',
	    'ɉ': 'j',
	    'ḱ': 'k',
	    'ǩ': 'k',
	    'ķ': 'k',
	    'ⱪ': 'k',
	    'ꝃ': 'k',
	    'ḳ': 'k',
	    'ƙ': 'k',
	    'ḵ': 'k',
	    'ᶄ': 'k',
	    'ꝁ': 'k',
	    'ꝅ': 'k',
	    'ĺ': 'l',
	    'ƚ': 'l',
	    'ɬ': 'l',
	    'ľ': 'l',
	    'ļ': 'l',
	    'ḽ': 'l',
	    'ȴ': 'l',
	    'ḷ': 'l',
	    'ḹ': 'l',
	    'ⱡ': 'l',
	    'ꝉ': 'l',
	    'ḻ': 'l',
	    'ŀ': 'l',
	    'ɫ': 'l',
	    'ᶅ': 'l',
	    'ɭ': 'l',
	    'ł': 'l',
	    'ǉ': 'lj',
	    'ſ': 's',
	    'ẜ': 's',
	    'ẛ': 's',
	    'ẝ': 's',
	    'ḿ': 'm',
	    'ṁ': 'm',
	    'ṃ': 'm',
	    'ɱ': 'm',
	    'ᵯ': 'm',
	    'ᶆ': 'm',
	    'ń': 'n',
	    'ň': 'n',
	    'ņ': 'n',
	    'ṋ': 'n',
	    'ȵ': 'n',
	    'ṅ': 'n',
	    'ṇ': 'n',
	    'ǹ': 'n',
	    'ɲ': 'n',
	    'ṉ': 'n',
	    'ƞ': 'n',
	    'ᵰ': 'n',
	    'ᶇ': 'n',
	    'ɳ': 'n',
	    'ñ': 'n',
	    'ǌ': 'nj',
	    'ó': 'o',
	    'ŏ': 'o',
	    'ǒ': 'o',
	    'ô': 'o',
	    'ố': 'o',
	    'ộ': 'o',
	    'ồ': 'o',
	    'ổ': 'o',
	    'ỗ': 'o',
	    'ö': 'o',
	    'ȫ': 'o',
	    'ȯ': 'o',
	    'ȱ': 'o',
	    'ọ': 'o',
	    'ő': 'o',
	    'ȍ': 'o',
	    'ò': 'o',
	    'ỏ': 'o',
	    'ơ': 'o',
	    'ớ': 'o',
	    'ợ': 'o',
	    'ờ': 'o',
	    'ở': 'o',
	    'ỡ': 'o',
	    'ȏ': 'o',
	    'ꝋ': 'o',
	    'ꝍ': 'o',
	    'ⱺ': 'o',
	    'ō': 'o',
	    'ṓ': 'o',
	    'ṑ': 'o',
	    'ǫ': 'o',
	    'ǭ': 'o',
	    'ø': 'o',
	    'ǿ': 'o',
	    'õ': 'o',
	    'ṍ': 'o',
	    'ṏ': 'o',
	    'ȭ': 'o',
	    'ƣ': 'oi',
	    'ꝏ': 'oo',
	    'ɛ': 'e',
	    'ᶓ': 'e',
	    'ɔ': 'o',
	    'ᶗ': 'o',
	    'ȣ': 'ou',
	    'ṕ': 'p',
	    'ṗ': 'p',
	    'ꝓ': 'p',
	    'ƥ': 'p',
	    'ᵱ': 'p',
	    'ᶈ': 'p',
	    'ꝕ': 'p',
	    'ᵽ': 'p',
	    'ꝑ': 'p',
	    'ꝙ': 'q',
	    'ʠ': 'q',
	    'ɋ': 'q',
	    'ꝗ': 'q',
	    'ŕ': 'r',
	    'ř': 'r',
	    'ŗ': 'r',
	    'ṙ': 'r',
	    'ṛ': 'r',
	    'ṝ': 'r',
	    'ȑ': 'r',
	    'ɾ': 'r',
	    'ᵳ': 'r',
	    'ȓ': 'r',
	    'ṟ': 'r',
	    'ɼ': 'r',
	    'ᵲ': 'r',
	    'ᶉ': 'r',
	    'ɍ': 'r',
	    'ɽ': 'r',
	    'ↄ': 'c',
	    'ꜿ': 'c',
	    'ɘ': 'e',
	    'ɿ': 'r',
	    'ś': 's',
	    'ṥ': 's',
	    'š': 's',
	    'ṧ': 's',
	    'ş': 's',
	    'ŝ': 's',
	    'ș': 's',
	    'ṡ': 's',
	    'ṣ': 's',
	    'ṩ': 's',
	    'ʂ': 's',
	    'ᵴ': 's',
	    'ᶊ': 's',
	    'ȿ': 's',
	    'ɡ': 'g',
	    'ᴑ': 'o',
	    'ᴓ': 'o',
	    'ᴝ': 'u',
	    'ť': 't',
	    'ţ': 't',
	    'ṱ': 't',
	    'ț': 't',
	    'ȶ': 't',
	    'ẗ': 't',
	    'ⱦ': 't',
	    'ṫ': 't',
	    'ṭ': 't',
	    'ƭ': 't',
	    'ṯ': 't',
	    'ᵵ': 't',
	    'ƫ': 't',
	    'ʈ': 't',
	    'ŧ': 't',
	    'ᵺ': 'th',
	    'ɐ': 'a',
	    'ᴂ': 'ae',
	    'ǝ': 'e',
	    'ᵷ': 'g',
	    'ɥ': 'h',
	    'ʮ': 'h',
	    'ʯ': 'h',
	    'ᴉ': 'i',
	    'ʞ': 'k',
	    'ꞁ': 'l',
	    'ɯ': 'm',
	    'ɰ': 'm',
	    'ᴔ': 'oe',
	    'ɹ': 'r',
	    'ɻ': 'r',
	    'ɺ': 'r',
	    'ⱹ': 'r',
	    'ʇ': 't',
	    'ʌ': 'v',
	    'ʍ': 'w',
	    'ʎ': 'y',
	    'ꜩ': 'tz',
	    'ú': 'u',
	    'ŭ': 'u',
	    'ǔ': 'u',
	    'û': 'u',
	    'ṷ': 'u',
	    'ü': 'u',
	    'ǘ': 'u',
	    'ǚ': 'u',
	    'ǜ': 'u',
	    'ǖ': 'u',
	    'ṳ': 'u',
	    'ụ': 'u',
	    'ű': 'u',
	    'ȕ': 'u',
	    'ù': 'u',
	    'ủ': 'u',
	    'ư': 'u',
	    'ứ': 'u',
	    'ự': 'u',
	    'ừ': 'u',
	    'ử': 'u',
	    'ữ': 'u',
	    'ȗ': 'u',
	    'ū': 'u',
	    'ṻ': 'u',
	    'ų': 'u',
	    'ᶙ': 'u',
	    'ů': 'u',
	    'ũ': 'u',
	    'ṹ': 'u',
	    'ṵ': 'u',
	    'ᵫ': 'ue',
	    'ꝸ': 'um',
	    'ⱴ': 'v',
	    'ꝟ': 'v',
	    'ṿ': 'v',
	    'ʋ': 'v',
	    'ᶌ': 'v',
	    'ⱱ': 'v',
	    'ṽ': 'v',
	    'ꝡ': 'vy',
	    'ẃ': 'w',
	    'ŵ': 'w',
	    'ẅ': 'w',
	    'ẇ': 'w',
	    'ẉ': 'w',
	    'ẁ': 'w',
	    'ⱳ': 'w',
	    'ẘ': 'w',
	    'ẍ': 'x',
	    'ẋ': 'x',
	    'ᶍ': 'x',
	    'ý': 'y',
	    'ŷ': 'y',
	    'ÿ': 'y',
	    'ẏ': 'y',
	    'ỵ': 'y',
	    'ỳ': 'y',
	    'ƴ': 'y',
	    'ỷ': 'y',
	    'ỿ': 'y',
	    'ȳ': 'y',
	    'ẙ': 'y',
	    'ɏ': 'y',
	    'ỹ': 'y',
	    'ź': 'z',
	    'ž': 'z',
	    'ẑ': 'z',
	    'ʑ': 'z',
	    'ⱬ': 'z',
	    'ż': 'z',
	    'ẓ': 'z',
	    'ȥ': 'z',
	    'ẕ': 'z',
	    'ᵶ': 'z',
	    'ᶎ': 'z',
	    'ʐ': 'z',
	    'ƶ': 'z',
	    'ɀ': 'z',
	    'ﬀ': 'ff',
	    'ﬃ': 'ffi',
	    'ﬄ': 'ffl',
	    'ﬁ': 'fi',
	    'ﬂ': 'fl',
	    'ĳ': 'ij',
	    'œ': 'oe',
	    'ﬆ': 'st',
	    'ₐ': 'a',
	    'ₑ': 'e',
	    'ᵢ': 'i',
	    'ⱼ': 'j',
	    'ₒ': 'o',
	    'ᵣ': 'r',
	    'ᵤ': 'u',
	    'ᵥ': 'v',
	    'ₓ': 'x'
	};


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var browser_1 = __webpack_require__(121);
	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.reflow = function (element) {
	        new Function('bs', 'return bs')(element.offsetHeight);
	    };
	    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
	    Utils.getStyles = function (elem) {
	        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
	        // IE throws on elements created in popups
	        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	        var view = elem.ownerDocument.defaultView;
	        if (!view || !view.opener) {
	            view = browser_1.window;
	        }
	        return view.getComputedStyle(elem);
	    };
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(379));
	__export(__webpack_require__(380));
	__export(__webpack_require__(381));
	__export(__webpack_require__(382));
	__export(__webpack_require__(383));
	__export(__webpack_require__(384));
	__export(__webpack_require__(392));
	__export(__webpack_require__(389));
	__export(__webpack_require__(393));
	__export(__webpack_require__(394));
	__export(__webpack_require__(395));
	__export(__webpack_require__(396));
	__export(__webpack_require__(397));
	__export(__webpack_require__(398));
	__export(__webpack_require__(399));
	__export(__webpack_require__(108));
	__export(__webpack_require__(172));
	__export(__webpack_require__(47));
	var accordion_module_1 = __webpack_require__(96);
	exports.AccordionModule = accordion_module_1.AccordionModule;
	var alert_module_1 = __webpack_require__(97);
	exports.AlertModule = alert_module_1.AlertModule;
	var buttons_module_1 = __webpack_require__(98);
	exports.ButtonsModule = buttons_module_1.ButtonsModule;
	var carousel_module_1 = __webpack_require__(100);
	exports.CarouselModule = carousel_module_1.CarouselModule;
	var collapse_module_1 = __webpack_require__(69);
	exports.CollapseModule = collapse_module_1.CollapseModule;
	var datepicker_module_1 = __webpack_require__(101);
	exports.DatepickerModule = datepicker_module_1.DatepickerModule;
	var dropdown_module_1 = __webpack_require__(102);
	exports.DropdownModule = dropdown_module_1.DropdownModule;
	var modal_module_1 = __webpack_require__(105);
	exports.ModalModule = modal_module_1.ModalModule;
	var pagination_module_1 = __webpack_require__(107);
	exports.PaginationModule = pagination_module_1.PaginationModule;
	var progressbar_module_1 = __webpack_require__(110);
	exports.ProgressbarModule = progressbar_module_1.ProgressbarModule;
	var rating_module_1 = __webpack_require__(111);
	exports.RatingModule = rating_module_1.RatingModule;
	var tabs_module_1 = __webpack_require__(113);
	exports.TabsModule = tabs_module_1.TabsModule;
	var timepicker_module_1 = __webpack_require__(115);
	exports.TimepickerModule = timepicker_module_1.TimepickerModule;
	var tooltip_module_1 = __webpack_require__(117);
	exports.TooltipModule = tooltip_module_1.TooltipModule;
	var typeahead_module_1 = __webpack_require__(120);
	exports.TypeaheadModule = typeahead_module_1.TypeaheadModule;
	var components_helper_service_1 = __webpack_require__(30);
	exports.ComponentsHelper = components_helper_service_1.ComponentsHelper;
	var index_1 = __webpack_require__(391);
	exports.Ng2BootstrapModule = index_1.Ng2BootstrapModule;


/***/ },
/* 403 */,
/* 404 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>車種判別ページ</title>\n\n    <!-- Bootstrap Core CSS -->\n    <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- Custom Fonts -->\n    <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n    <!--[if lt IE 9]>\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n\n</head>\n\n<body>\n    <div id=\"wrapper\">\n        <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n            車種判別 v0.1\n        </nav>\n      <!-- <main> -->\n        <router-outlet></router-outlet>\n      <!-- </main> -->\n    </div>\n    <!-- /#wrapper -->\n\n    <!-- jQuery -->\n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n    <!-- Metis Menu Plugin JavaScript -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/metisMenu/2.5.2/metisMenu.js\"></script>\n\n    <!-- Morris Charts JavaScript -->\n    <!-- <script src=\"../vendor-sb-admin-2/raphael/raphael.min.js\"></script> -->\n    <!-- <script src=\"../vendor-sb-admin-2/morrisjs/morris.min.js\"></script> -->\n\n    <!-- Custom Theme JavaScript -->\n    <!-- <script src=\"../dist/js/sb-admin-2.js\"></script> -->\n\n</body>\n\n</html>\n"

/***/ },
/* 405 */
/***/ function(module, exports) {

	module.exports = "<!-- <div id=\"page-wrapper\"> -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">画像から判別</h1>\n        </div>\n        <!-- /.col-lg-12 -->\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-lg-offset-3\">\n            <div class=\"panel panel-green\">\n                <div class=\"panel-heading\">\n                    <label for=\"input-file\" class=\"btn btn-success btn-lg btn-block\">\n                        <i class=\"fa fa-file-image-o fa-3x\">\n                            <span class=\"huge\"> 画像を選択</span>\n                        </i>\n                    </label>\n                    <input type=\"file\" id=\"input-file\" class=\"hide\" (change)=\"onChange($event)\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">判別結果</h1>\n        </div>\n        <!-- /.col-lg-12 -->\n    </div>\n\n    <!-- /.row -->\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <img class=\"img-rounded img-responsive\">\n        </div>\n        <div class=\"col-lg-6\">\n            <!-- /.row -->\n            <div class=\"row rank rank-{{result.rank}}\" *ngFor=\"let result of results\">\n                <div class=\"col-md-12\">\n                    <div class=\"panel\" [ngClass]=\"{'panel-primary': result.rank < 4 }\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-2\">\n                                    <span>{{result.rank}}</span>\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <div>{{result.name}}</div>\n                                </div>\n                                <div class=\"col-xs-4 text-right\">\n                                    <div>{{result.value}} %</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-lg-6 -->\n    </div>\n    <!-- /.row -->\n<!-- </div> -->\n<!-- /#page-wrapper -->\n"

/***/ },
/* 406 */
/***/ function(module, exports) {

	module.exports = "<h3>GitHub Browser</h3>\n\n<input type=\"text\" #repoName placeholder=\"Search Github Orgs\">\n<button (click)=\"searchForOrg(repoName.value)\">Search Orgs</button>\n\n<router-outlet></router-outlet>\n"

/***/ },
/* 407 */
/***/ function(module, exports) {

	module.exports = "<h2>{{ repoDetails.full_name }}</h2>\n\n<pre>this.repoDetails = {{ repoDetails | json }}</pre>\n"

/***/ },
/* 408 */
/***/ function(module, exports) {

	module.exports = "<h3>Repo list</h3>\n<ul>\n\t<li *ngFor=\"let repo of repos | async\">\n    <a [routerLink]=\"['/github', repo.owner.login, repo.name]\">\n      {{ repo.name }}\n    </a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ },
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * An execution context and a data structure to order tasks and schedule their
	 * execution. Provides a notion of (potentially virtual) time, through the
	 * `now()` getter method.
	 *
	 * Each unit of work in a Scheduler is called an {@link Action}.
	 *
	 * ```ts
	 * class Scheduler {
	 *   now(): number;
	 *   schedule(work, delay?, state?): Subscription;
	 * }
	 * ```
	 *
	 * @class Scheduler
	 */
	var Scheduler = (function () {
	    function Scheduler(SchedulerAction, now) {
	        if (now === void 0) { now = Scheduler.now; }
	        this.SchedulerAction = SchedulerAction;
	        this.now = now;
	    }
	    /**
	     * Schedules a function, `work`, for execution. May happen at some point in
	     * the future, according to the `delay` parameter, if specified. May be passed
	     * some context object, `state`, which will be passed to the `work` function.
	     *
	     * The given arguments will be processed an stored as an Action object in a
	     * queue of actions.
	     *
	     * @param {function(state: ?T): ?Subscription} work A function representing a
	     * task, or some unit of work to be executed by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler itself.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @return {Subscription} A subscription in order to be able to unsubscribe
	     * the scheduled work.
	     */
	    Scheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return new this.SchedulerAction(this, work).schedule(state, delay);
	    };
	    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
	    return Scheduler;
	}());
	exports.Scheduler = Scheduler;
	//# sourceMappingURL=Scheduler.js.map

/***/ },
/* 414 */,
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var from_1 = __webpack_require__(192);
	Observable_1.Observable.from = from_1.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var debounceTime_1 = __webpack_require__(426);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var filter_1 = __webpack_require__(428);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var mergeMap_1 = __webpack_require__(196);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var toArray_1 = __webpack_require__(433);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var async_1 = __webpack_require__(438);
	/**
	 * Emits a value from the source Observable only after a particular time span
	 * has passed without another source emission.
	 *
	 * <span class="informal">It's like {@link delay}, but passes only the most
	 * recent value from each burst of emissions.</span>
	 *
	 * <img src="./img/debounceTime.png" width="100%">
	 *
	 * `debounceTime` delays values emitted by the source Observable, but drops
	 * previous pending delayed emissions if a new value arrives on the source
	 * Observable. This operator keeps track of the most recent value from the
	 * source Observable, and emits that only when `dueTime` enough time has passed
	 * without any other value appearing on the source Observable. If a new value
	 * appears before `dueTime` silence occurs, the previous value will be dropped
	 * and will not be emitted on the output Observable.
	 *
	 * This is a rate-limiting operator, because it is impossible for more than one
	 * value to be emitted in any time window of duration `dueTime`, but it is also
	 * a delay-like operator since output emissions do not occur at the same time as
	 * they did on the source Observable. Optionally takes a {@link Scheduler} for
	 * managing timers.
	 *
	 * @example <caption>Emit the most recent click after a burst of clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.debounceTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounce}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttleTime}
	 *
	 * @param {number} dueTime The timeout duration in milliseconds (or the time
	 * unit determined internally by the optional `scheduler`) for the window of
	 * time required to wait for emission silence before emitting the most recent
	 * source value.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the timeout for each value.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified `dueTime`, and may drop some values if they occur
	 * too frequently.
	 * @method debounceTime
	 * @owner Observable
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 427 */,
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ToArraySubscriber(subscriber));
	    };
	    return ToArrayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(31);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(73);
	/**
	 * A unit of work to be executed in a {@link Scheduler}. An action is typically
	 * created from within a Scheduler and an RxJS user does not need to concern
	 * themselves about creating and manipulating an Action.
	 *
	 * ```ts
	 * class Action<T> extends Subscription {
	 *   new (scheduler: Scheduler, work: (state?: T) => void);
	 *   schedule(state?: T, delay: number = 0): Subscription;
	 * }
	 * ```
	 *
	 * @class Action<T>
	 */
	var Action = (function (_super) {
	    __extends(Action, _super);
	    function Action(scheduler, work) {
	        _super.call(this);
	    }
	    /**
	     * Schedules this action on its parent Scheduler for execution. May be passed
	     * some context object, `state`. May happen at some point in the future,
	     * according to the `delay` parameter, if specified.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler.
	     * @return {void}
	     */
	    Action.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        return this;
	    };
	    return Action;
	}(Subscription_1.Subscription));
	exports.Action = Action;
	//# sourceMappingURL=Action.js.map

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(31);
	var Action_1 = __webpack_require__(435);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsyncAction = (function (_super) {
	    __extends(AsyncAction, _super);
	    function AsyncAction(scheduler, work) {
	        _super.call(this, scheduler, work);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    AsyncAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.closed) {
	            return this;
	        }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        var scheduler = this.scheduler;
	        //
	        // Important implementation note:
	        //
	        // Actions only execute once by default, unless rescheduled from within the
	        // scheduled callback. This allows us to implement single and repeat
	        // actions via the same code path, without adding API surface area, as well
	        // as mimic traditional recursion but across asynchronous boundaries.
	        //
	        // However, JS runtimes and timers distinguish between intervals achieved by
	        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
	        // serial `setTimeout` calls can be individually delayed, which delays
	        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
	        // guarantee the interval callback will be invoked more precisely to the
	        // interval period, regardless of load.
	        //
	        // Therefore, we use `setInterval` to schedule single and repeat actions.
	        // If the action reschedules itself with the same delay, the interval is not
	        // canceled. If the action doesn't reschedule, or reschedules with a
	        // different delay, the interval will be canceled after scheduled callback
	        // execution.
	        //
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, delay);
	        }
	        this.delay = delay;
	        // If this action has already an async Id, don't request a new one.
	        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
	        return this;
	    };
	    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) { delay = 0; }
	        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
	    };
	    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) { delay = 0; }
	        // If this action is rescheduled with the same delay time, don't clear the interval id.
	        if (delay !== null && this.delay === delay) {
	            return id;
	        }
	        // Otherwise, if the action's delay time is different from the current delay,
	        // clear the interval id
	        return root_1.root.clearInterval(id) && undefined || undefined;
	    };
	    /**
	     * Immediately executes this action and the `work` it contains.
	     * @return {any}
	     */
	    AsyncAction.prototype.execute = function (state, delay) {
	        if (this.closed) {
	            return new Error('executing a cancelled action');
	        }
	        this.pending = false;
	        var error = this._execute(state, delay);
	        if (error) {
	            return error;
	        }
	        else if (this.pending === false && this.id != null) {
	            // Dequeue if the action didn't reschedule itself. Don't call
	            // unsubscribe(), because the action could reschedule later.
	            // For example:
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling the action */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	        }
	    };
	    AsyncAction.prototype._execute = function (state, delay) {
	        var errored = false;
	        var errorValue = undefined;
	        try {
	            this.work(state);
	        }
	        catch (e) {
	            errored = true;
	            errorValue = !!e && e || new Error(e);
	        }
	        if (errored) {
	            this.unsubscribe();
	            return errorValue;
	        }
	    };
	    AsyncAction.prototype._unsubscribe = function () {
	        var id = this.id;
	        var scheduler = this.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        this.work = null;
	        this.delay = null;
	        this.state = null;
	        this.pending = false;
	        this.scheduler = null;
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, null);
	        }
	    };
	    return AsyncAction;
	}(Action_1.Action));
	exports.AsyncAction = AsyncAction;
	//# sourceMappingURL=AsyncAction.js.map

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Scheduler_1 = __webpack_require__(413);
	var AsyncScheduler = (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	        this.actions = [];
	        /**
	         * A flag to indicate whether the Scheduler is currently executing a batch of
	         * queued actions.
	         * @type {boolean}
	         */
	        this.active = false;
	        /**
	         * An internal ID used to track the latest asynchronous task such as those
	         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
	         * others.
	         * @type {any}
	         */
	        this.scheduled = undefined;
	    }
	    AsyncScheduler.prototype.flush = function (action) {
	        var actions = this.actions;
	        if (this.active) {
	            actions.push(action);
	            return;
	        }
	        var error;
	        this.active = true;
	        do {
	            if (error = action.execute(action.state, action.delay)) {
	                break;
	            }
	        } while (action = actions.shift()); // exhaust the scheduler queue
	        this.active = false;
	        if (error) {
	            while (action = actions.shift()) {
	                action.unsubscribe();
	            }
	            throw error;
	        }
	    };
	    return AsyncScheduler;
	}(Scheduler_1.Scheduler));
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncAction_1 = __webpack_require__(436);
	var AsyncScheduler_1 = __webpack_require__(437);
	exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
	//# sourceMappingURL=async.js.map

/***/ },
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(369);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(370);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(371);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(372);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(373);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(374);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(375);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(376);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 452 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
]);
//# sourceMappingURL=main.map