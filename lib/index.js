"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
The MIT License (MIT)

Copyright (c) 2016 AnyWhichWay, Simon Y. Blackwell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function () {
	var _this = this;

	var forEachAsync = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(f) {
			var iterable, i;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							iterable = this;
							i = 0;

						case 2:
							if (!(i < iterable.length)) {
								_context2.next = 8;
								break;
							}

							_context2.next = 5;
							return asynchronize(f(iterable[i]));

						case 5:
							i++;
							_context2.next = 2;
							break;

						case 8:
							return _context2.abrupt("return");

						case 9:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		return function forEachAsync(_x2) {
			return _ref2.apply(this, arguments);
		};
	}();

	var everyAsync = function () {
		var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(f) {
			var iterable, i;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							iterable = this;
							i = 0;

						case 2:
							if (!(i < iterable.length)) {
								_context3.next = 10;
								break;
							}

							_context3.next = 5;
							return asynchronize(f(iterable[i]));

						case 5:
							if (_context3.sent) {
								_context3.next = 7;
								break;
							}

							return _context3.abrupt("return", false);

						case 7:
							i++;
							_context3.next = 2;
							break;

						case 10:
							return _context3.abrupt("return", true);

						case 11:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function everyAsync(_x3) {
			return _ref3.apply(this, arguments);
		};
	}();

	var someAsync = function () {
		var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(f) {
			var iterable, i;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							iterable = this;
							i = 0;

						case 2:
							if (!(i < iterable.length)) {
								_context4.next = 10;
								break;
							}

							_context4.next = 5;
							return asynchronize(f(iterable[i]));

						case 5:
							if (!_context4.sent) {
								_context4.next = 7;
								break;
							}

							return _context4.abrupt("return", true);

						case 7:
							i++;
							_context4.next = 2;
							break;

						case 10:
							return _context4.abrupt("return", false);

						case 11:
						case "end":
							return _context4.stop();
					}
				}
			}, _callee4, this);
		}));

		return function someAsync(_x4) {
			return _ref4.apply(this, arguments);
		};
	}();

	var _uuid = void 0,
	    fs = void 0;
	if (typeof window === "undefined") {
		var r = require;
		_uuid = r("uuid");
		fs = r("fs");
	}

	var asynchronize = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(value) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!(value instanceof _promise2.default)) {
								_context.next = 2;
								break;
							}

							return _context.abrupt("return", value);

						case 2:
							return _context.abrupt("return", _promise2.default.resolve(value));

						case 3:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function asynchronize(_x) {
			return _ref.apply(this, arguments);
		};
	}();

	var Activity = function () {
		function Activity() {
			var abort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
			(0, _classCallCheck3.default)(this, Activity);

			var me = this;
			me.steps = [];
			me.abort = function (result) {
				me.aborted = true;abort(result);
			};
			me.reset();
		}

		(0, _createClass3.default)(Activity, [{
			key: "exec",
			value: function exec() {
				var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
				var value = arguments[1];

				if (this.aborted) {
					return;
				}
				var me = this,
				    step = me.steps[i],
				    steps = Array.isArray(step) ? step : [step];
				steps.every(function (step) {
					if (!step) {
						console.log("WARNING: undefined Activity step");
						return;
					}
					if (step instanceof _promise2.default || step.constructor.name === "Promise" && typeof step.then === "function") {
						step.then(function (result) {
							return me.complete(i, result);
						});
						return false;
					} else {
						var result = step(value, me.abort);
						if (result instanceof _promise2.default || result && result.constructor.name === "Promise" && typeof result.then === "function") {
							result.then(function (result) {
								return me.complete(i, result);
							});
							return false;
						}
						me.complete(i, result);
						return true;
					}
				});
				return me.promise;
			}
		}, {
			key: "reset",
			value: function reset() {
				var me = this;
				me.aborted = false;
				me.results = [];
				me.promise = new _promise2.default(function (resolve, reject) {
					me.resolve = resolve;
					me.reject = reject;
				});
			}
		}, {
			key: "step",
			value: function step(f) {
				if (f) {
					this.steps.push(f);
				}
				return this;
			}
		}, {
			key: "complete",
			value: function complete(i, result) {
				var me = this;
				if (i < me.steps.length - 1) {
					if (typeof result !== "undefined") {
						me.results[i] = result;
					}
					me.exec(i + 1, result);
				} else {
					me.resolve(me.results);
				}
			}
		}]);
		return Activity;
	}();

	Array.indexKeys = ["length", "$max", "$min", "$avg", "*"];
	Array.reindexCalls = ["push", "pop", "splice", "reverse", "fill", "shift", "unshift"];
	Array.fromJSON = function (json) {
		var array = [];
		(0, _keys2.default)(json).forEach(function (key) {
			array[key] = json[key];
		});
		return array;
	};
	Object.defineProperty(Array.prototype, "$max", { enumerable: false, configurable: true,
		get: function get() {
			var result = void 0;this.forEach(function (value) {
				result = result != null ? value > result ? value : result : value;
			});return result;
		},
		set: function set() {}
	});
	Object.defineProperty(Array.prototype, "$min", { enumerable: false, configurable: true,
		get: function get() {
			var result = void 0;this.forEach(function (value) {
				result = result != null ? value < result ? value : result : value;
			});return result;
		},
		set: function set() {}
	});
	Object.defineProperty(Array.prototype, "$avg", { enumerable: false, configurable: true,
		get: function get() {
			var result = 0,
			    count = 0;
			this.forEach(function (value) {
				var v = value.valueOf();
				if (typeof v === "number") {
					count++;
					result += v;
				}
			});
			return result / count;
		},
		set: function set() {}
	});

	Date.indexKeys = ["*"];
	Date.reindexCalls = [];
	Date.fromJSON = function (json) {
		var dt = new Date(json.time);
		(0, _keys2.default)(json).forEach(function (key) {
			if (key !== "time") {
				dt[key] = json[key];
			}
		});
		return dt;
	};
	(0, _getOwnPropertyNames2.default)(Date.prototype).forEach(function (key) {
		if (key.indexOf("get") === 0) {
			var name = key.indexOf("UTC") >= 0 ? key.slice(3) : key.charAt(3).toLowerCase() + key.slice(4),
			    setkey = "set" + key.slice(3),
			    get = function get() {
				return this[key]();
			},
			    set = function set(value) {
				if (Date.prototype[setKey]) {
					Date.prototype[setKey].call(this, value);
				}return true;
			};
			(0, _defineProperty2.default)(Date.prototype, name, { enumerable: false, configurable: true, get: get, set: set });
			Date.indexKeys.push(name);
			if (Date.prototype[setkey]) {
				Date.reindexCalls.push(setkey);
			}
		}
	});

	function intersector(objects) {
		return function intersection() {
			var min = Infinity,
			    // length of shortest array argument
			shrtst = 0,
			    // index of shortest array argument
			set = objects ? new _set2.default() : {};
			rslt = [], // result
			mxj = arguments.length - 1;
			for (var j = 0; j <= mxj; j++) {
				// find index of shortest array argument
				var l = arguments[j].length;
				if (l < min) {
					shrtst = j;
					min = l;
				}
			}
			var shrt = arguments[shrtst],
			    mxi = shrt.length;
			for (var i = 0; i < mxi; i++) {
				// initialize set of possible values from shortest array
				if (objects) {
					set.add(shrt[i]);
				} else {
					set[shrt[i]] = 1;
				};
			}
			for (var j = 0; j <= mxj; j++) {
				// loop through all array arguments
				var array = arguments[j],
				    mxk = array.length;
				for (var k = 0; k < mxk; k++) {
					// loop through all values
					var item = array[k];
					if (objects && set.has(item) || set[item]) {
						// if value is possible
						if (j === mxj) {
							// and all arrays have it (or we would not be at this point)
							rslt.push(item); // add to results
						}
					}
				}
			}
			return rslt;
		};
	}
	var intersection = intersector();
	//soundex from https://gist.github.com/shawndumas/1262659
	function soundex(a) {
		a = (a + "").toLowerCase().split("");var c = a.shift(),
		    b = "",
		    d = { a: "", e: "", i: "", o: "", u: "", b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6 },
		    b = c + a.map(function (a) {
			return d[a];
		}).filter(function (a, b, e) {
			return 0 === b ? a !== d[c] : a !== e[b - 1];
		}).join("");return (b + "000").slice(0, 4).toUpperCase();
	};

	// http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//Shanti R Rao and Potluri M Rao, "Sample Size Calculator", 
	//Raosoft Inc., 2009, http://www.raosoft.com/samplesize.html
	//probCriticalNormal function is adapted from an algorithm published
	//in Numerical Recipes in Fortran.
	function probCriticalNormal(a) {
		var d, e, b, c;b = [0, -.322232431088, -1, -.342242088547, -.0204231210245, -4.53642210148E-5];var f = [0, .099348462606, .588581570495, .531103462366, .10353775285, .0038560700634];a = .5 - a / 2;if (1E-8 >= a) b = 6;else if (.5 == a) b = 0;else {
			a = Math.sqrt(Math.log(1 / (a * a)));d = b[5];e = f[5];for (c = 4; 1 <= c; c--) {
				d = d * a + b[c], e = e * a + f[c];
			}b = a + d / e;
		}return b;
	};
	function samplesize(confidence, margin, population) {
		var response = 50,
		    pcn = probCriticalNormal(confidence / 100.0),
		    d1 = pcn * pcn * response * (100.0 - response),
		    d2 = (population - 1.0) * (margin * margin) + d1;
		if (d2 > 0.0) return Math.ceil(population * d1 / d2);
		return 0.0;
	}

	function CXProduct(collections, filter) {
		this.collections = collections ? collections : [];
		this.filter = filter;
		Object.defineProperty(this, "length", { set: function set() {}, get: function get() {
				if (this.collections.length === 0) {
					return 0;
				}if (this.start !== undefined && this.end !== undefined) {
					return this.end - this.start;
				};var size = 1;this.collections.forEach(function (collection) {
					size *= collection.length;
				});return size;
			} });
		Object.defineProperty(this, "size", { set: function set() {}, get: function get() {
				return this.length;
			} });
	}
	// there is probably an alogorithm that never returns null if index is in range and takes into account the restrict right
	CXProduct.prototype.get = function (index) {
		var me = this,
		    c = [];
		function get(n, collections, dm, c) {
			for (var i = collections.length; i--;) {
				c[i] = collections[i][(n / dm[i][0] << 0) % dm[i][1]];
			}
		}
		for (var dm = [], f = 1, l, i = me.collections.length; i--; f *= l) {
			dm[i] = [f, l = me.collections[i].length];
		}
		get(index, me.collections, dm, c);
		if (me.filter(c)) {
			return c.slice(0);
		}
	};

	var Cursor = function () {
		function Cursor(classes, cxProductOrRows, projection) {
			var classVars = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
			(0, _classCallCheck3.default)(this, Cursor);

			var me = this;
			me.classes = classes;
			if (Array.isArray(cxProductOrRows)) {
				me.rows = cxProductOrRows;
			} else {
				me.cxproduct = cxProductOrRows;
			}
			me.projection = projection;
			me.classVarMap = {};
			me.classVars = classVars;
			(0, _keys2.default)(classVars).forEach(function (classVar, i) {
				me.classVarMap[classVar] = i;
			});
		}

		(0, _createClass3.default)(Cursor, [{
			key: "first",
			value: function () {
				var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(count) {
					var cursor;
					return _regenerator2.default.wrap(function _callee5$(_context5) {
						while (1) {
							switch (_context5.prev = _context5.next) {
								case 0:
									cursor = this;
									return _context5.abrupt("return", new _promise2.default(function (resolve, reject) {
										var results = [];
										cursor.forEach(function (row) {
											if (results.length < count) {
												results.push(row);
											}
											if (results.length === count) {
												resolve(results);
											}
										}).then(function () {
											if (results.length < count) {
												resolve(results);
											}
										});
									}));

								case 2:
								case "end":
									return _context5.stop();
							}
						}
					}, _callee5, this);
				}));

				function first(_x8) {
					return _ref5.apply(this, arguments);
				}

				return first;
			}()
		}, {
			key: "forEach",
			value: function () {
				var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(f) {
					var cursor;
					return _regenerator2.default.wrap(function _callee6$(_context6) {
						while (1) {
							switch (_context6.prev = _context6.next) {
								case 0:
									cursor = this;
									return _context6.abrupt("return", new _promise2.default(function (resolve, reject) {
										var promises = [],
										    results = [],
										    i = 0;
										function rows() {
											promises.push(cursor.get(i).then(function (row) {
												if (row) {
													var result = f(row, i, cursor);
													if (!(result instanceof _promise2.default)) {
														result = _promise2.default.resolve(result);
													}
													results.push(result);
												}
											}));
											i++;
											if (i < cursor.maxCount) {
												rows();
											}
										}
										rows();
										_promise2.default.all(promises).then(function (rows) {
											resolve(results);
										});
										//resolve(promises);
									}));

								case 2:
								case "end":
									return _context6.stop();
							}
						}
					}, _callee6, this);
				}));

				function forEach(_x9) {
					return _ref6.apply(this, arguments);
				}

				return forEach;
			}()
		}, {
			key: "every",
			value: function () {
				var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(f) {
					var cursor, result;
					return _regenerator2.default.wrap(function _callee7$(_context7) {
						while (1) {
							switch (_context7.prev = _context7.next) {
								case 0:
									cursor = this;
									result = true;
									return _context7.abrupt("return", new _promise2.default(function (resolve, reject) {
										cursor.forEach(function (row) {
											if (result && !f(row)) {
												result = false;
												resolve(false);
											};
										}).then(function () {
											if (result) {
												resolve(result);
											}
										});
									}));

								case 3:
								case "end":
									return _context7.stop();
							}
						}
					}, _callee7, this);
				}));

				function every(_x10) {
					return _ref7.apply(this, arguments);
				}

				return every;
			}()
		}, {
			key: "random",
			value: function () {
				var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(count) {
					var cursor, done, results, maxcount, resolver, rejector, promise, select;
					return _regenerator2.default.wrap(function _callee8$(_context8) {
						while (1) {
							switch (_context8.prev = _context8.next) {
								case 0:
									cursor = this, done = {}, results = [];
									maxcount = cursor.maxCount, resolver = void 0, rejector = void 0;
									promise = new _promise2.default(function (resolve, reject) {
										resolver = resolve;rejector = reject;
									}), select = function select() {
										var i = getRandomInt(0, cursor.maxCount - 1);
										if (!done[i]) {
											done[i] = true;
											cursor.get(i).then(function (row) {
												if (row) {
													if (results.length < count && results.length < maxcount) {
														results.push(row);
													}
													if (results.length === count || results.length === maxcount) {
														resolver(results);
														return;
													}
												} else {
													maxcount--;
												}
												select();
											});
										} else {
											select();
										}
									};

									select();
									return _context8.abrupt("return", promise);

								case 5:
								case "end":
									return _context8.stop();
							}
						}
					}, _callee8, this);
				}));

				function random(_x11) {
					return _ref8.apply(this, arguments);
				}

				return random;
			}()
		}, {
			key: "sample",
			value: function () {
				var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(confidence, margin) {
					var cursor, done, results, resolver, rejector, promise;
					return _regenerator2.default.wrap(function _callee9$(_context9) {
						while (1) {
							switch (_context9.prev = _context9.next) {
								case 0:
									cursor = this, done = {}, results = [];
									resolver = void 0, rejector = void 0;
									promise = new _promise2.default(function (resolve, reject) {
										resolver = resolve;rejector = reject;
									});

									cursor.count().then(function (population) {
										var count = samplesize(confidence, margin, population),
										    select = function select() {
											var i = getRandomInt(0, cursor.maxCount - 1);
											if (!done[i]) {
												done[i] = true;
												cursor.get(i).then(function (row) {
													if (row) {
														if (results.length < count) {
															results.push(row);
														}
														if (results.length === count) {
															resolver(results);
															return;
														}
													}
													select();
												});
											} else {
												select();
											}
										};
										select();
									});
									return _context9.abrupt("return", promise);

								case 5:
								case "end":
									return _context9.stop();
							}
						}
					}, _callee9, this);
				}));

				function sample(_x12, _x13) {
					return _ref9.apply(this, arguments);
				}

				return sample;
			}()
		}, {
			key: "some",
			value: function () {
				var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(f) {
					var cursor, result;
					return _regenerator2.default.wrap(function _callee10$(_context10) {
						while (1) {
							switch (_context10.prev = _context10.next) {
								case 0:
									cursor = this;
									result = false;
									return _context10.abrupt("return", new _promise2.default(function (resolve, reject) {
										cursor.forEach(function (row) {
											if (f(row)) {
												result = true;
												resolve(true);
											}
										}).then(function () {
											if (!result) {
												resolve(false);
											}
										});
									}));

								case 3:
								case "end":
									return _context10.stop();
							}
						}
					}, _callee10, this);
				}));

				function some(_x14) {
					return _ref10.apply(this, arguments);
				}

				return some;
			}()
		}, {
			key: "count",
			value: function () {
				var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
					var cursor, i;
					return _regenerator2.default.wrap(function _callee11$(_context11) {
						while (1) {
							switch (_context11.prev = _context11.next) {
								case 0:
									cursor = this;
									i = 0;
									return _context11.abrupt("return", new _promise2.default(function (resolve, reject) {
										cursor.forEach(function (row) {
											i++;
										}).then(function () {
											resolve(i);
										});
									}));

								case 3:
								case "end":
									return _context11.stop();
							}
						}
					}, _callee11, this);
				}));

				function count() {
					return _ref11.apply(this, arguments);
				}

				return count;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(rowNumber) {
					var me, _ret;

					return _regenerator2.default.wrap(function _callee12$(_context12) {
						while (1) {
							switch (_context12.prev = _context12.next) {
								case 0:
									me = this;

									if (!me.rows) {
										_context12.next = 7;
										break;
									}

									if (!(rowNumber < me.maxCount)) {
										_context12.next = 6;
										break;
									}

									_ret = function () {
										var result = void 0;
										if (me.projection) {
											var _ret2 = function () {
												var instances = me.rows[rowNumber];
												result = {};
												if (!(0, _keys2.default)(me.projection).every(function (property) {
													var colspec = me.projection[property];
													if (colspec && (typeof colspec === "undefined" ? "undefined" : (0, _typeof3.default)(colspec)) === "object") {
														var classVar = (0, _keys2.default)(colspec)[0],
														    key = colspec[classVar],
														    col = me.classVarMap[classVar];
														if (instances[col]) {
															result[property] = instances[col][key];
															return true;
														}
													}
												})) {
													return {
														v: {
															v: undefined
														}
													};
												}
											}();

											if ((typeof _ret2 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
										} else {
											result = me.rows[rowNumber];
										}
										return {
											v: result
										};
									}();

									if (!((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object")) {
										_context12.next = 6;
										break;
									}

									return _context12.abrupt("return", _ret.v);

								case 6:
									return _context12.abrupt("return", undefined);

								case 7:
									return _context12.abrupt("return", new _promise2.default(function (resolve, reject) {
										var promises = [],
										    vars = (0, _keys2.default)(me.classVars);
										if (rowNumber >= 0 && rowNumber < me.cxproduct.length) {
											(function () {
												var row = me.cxproduct.get(rowNumber);
												if (row) {
													row.forEach(function (id, col) {
														var classVar = vars[col],
														    cls = me.classVars[classVar];
														promises.push(cls.index.get(row[col]));
													});
													_promise2.default.all(promises).then(function (instances) {
														var result = void 0;
														if (me.projection) {
															result = {};
															if (!(0, _keys2.default)(me.projection).every(function (property) {
																var colspec = me.projection[property];
																if (colspec && (typeof colspec === "undefined" ? "undefined" : (0, _typeof3.default)(colspec)) === "object") {
																	var classVar = (0, _keys2.default)(colspec)[0],
																	    key = colspec[classVar],
																	    col = me.classVarMap[classVar];
																	if (instances[col]) {
																		result[property] = instances[col][key];
																		return true;
																	}
																}
															})) {
																resolve();
															}
														} else {
															result = [];
															if (!instances.every(function (instance) {
																if (instance) {
																	result.push(instance);
																	return true;
																}
															})) {
																resolve();
															}
														}
														resolve(result);
													});
												} else {
													resolve();
												}
											})();
										} else {
											resolve();
										}
									}));

								case 8:
								case "end":
									return _context12.stop();
							}
						}
					}, _callee12, this);
				}));

				function get(_x15) {
					return _ref12.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "maxCount",
			get: function get() {
				return this.rows ? this.rows.length : this.cxproduct.length;
			}
		}]);
		return Cursor;
	}();

	function stream(object, db) {
		var fired = {},
		    cls = object.constructor;
		Index.keys(object).forEach(function (key) {
			if (db.patterns[cls.name] && db.patterns[cls.name][key]) {
				(0, _keys2.default)(db.patterns[cls.name][key]).forEach(function (patternId) {
					if (fired[patternId]) {
						return;
					}
					(0, _keys2.default)(db.patterns[cls.name][key][patternId]).forEach(function (classVar) {
						var pattern = db.patterns[cls.name][key][patternId][classVar],
						    when = {};
						var projection = void 0;
						if (!pattern.action) {
							return;
						}
						if (pattern.projection) {
							projection = {};
							(0, _keys2.default)(pattern.projection).forEach(function (key) {
								if (key !== db.keyProperty) {
									projection[key] = pattern.projection[key];
								}
							});
						}
						(0, _keys2.default)(pattern.when).forEach(function (key) {
							if (key !== db.keyProperty) {
								when[key] = {};
								(0, _keys2.default)(pattern.when[key]).forEach(function (wkey) {
									when[key][wkey] = pattern.when[key][wkey];
								});
								if (pattern.classVars[key] && object instanceof pattern.classVars[key]) {
									when[key][db.keyProperty] = object[db.keyProperty];
								}
							}
						});
						db.select(projection).from(pattern.classVars).where(when).exec().then(function (cursor) {
							if (!fired[patternId] && cursor.maxCount > 0) {
								fired[patternId] = true;
								pattern.action(cursor);
							}
						});
					});
				});
			}
		});
	}

	var Index = function () {
		function Index(cls) {
			var keyProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "@key";
			var db = arguments[2];
			var StorageType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : db ? db.storageType : MemStore;
			var clear = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : db ? db.clear : false;
			(0, _classCallCheck3.default)(this, Index);

			var me = this;
			cls.index = me;
			me.saveAsync = db.saveIndexAsync;
			me.keys = {};
			me.store = new StorageType(cls.name, keyProperty, db, clear);
			me.name = cls.name;
			me.pending = {};
		}

		(0, _createClass3.default)(Index, [{
			key: "isInstanceKey",
			value: function isInstanceKey(key) {
				if (key.indexOf(this.name + "@") === 0) {
					return true;
				}
			}
		}, {
			key: "clear",
			value: function () {
				var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
					var index, promises;
					return _regenerator2.default.wrap(function _callee13$(_context13) {
						while (1) {
							switch (_context13.prev = _context13.next) {
								case 0:
									index = this, promises = [];

									(0, _keys2.default)(index).forEach(function (key) {
										promises.push(index.delete(key));
									});
									return _context13.abrupt("return", new _promise2.default(function (resolve, reject) {
										_promise2.default.all(promises).then(function () {
											resolve();
										});
									}));

								case 3:
								case "end":
									return _context13.stop();
							}
						}
					}, _callee13, this);
				}));

				function clear() {
					return _ref13.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(id) {
					var index, store, keyProperty, pending, doit, _ret4;

					return _regenerator2.default.wrap(function _callee14$(_context14) {
						while (1) {
							switch (_context14.prev = _context14.next) {
								case 0:
									doit = function doit() {
										return new _promise2.default(function (resolve, reject) {
											index.get(id, function (object) {
												var promises = [];
												promises.push(store.delete(id, true).catch(function (e) {
													console.log(e);
												}));
												if (object) {
													Index.keys(object).forEach(function (key) {
														promises.push(new _promise2.default(function (resolve, reject) {
															index.get(key, function (node) {
																if (!node) {
																	resolve();
																	return;
																}
																var value = object[key],
																    type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);
																if (type === "object") {
																	if (!value) {
																		if (node.null) {
																			delete node.null[id];
																		}
																	} else if (value[keyProperty]) {
																		var idvalue = value[keyProperty];
																		if (node[idvalue][type] && node[idvalue][type][id]) {
																			delete node[idvalue][type][id];
																		}
																	}
																	index.save(key, function () {
																		resolve(true);
																	}).catch(function (e) {
																		console.log(e);
																	});;
																} else if (type !== "undefined") {
																	if (!node[value] || !node[value][type] || !node[value][type][id]) {
																		resolve();
																		return;
																	}
																	delete node[value][type][id];
																	index.save(key).then(function () {
																		resolve(true);
																	}).catch(function (e) {
																		console.log(e);
																	});
																}
															});
														}).catch(function (e) {
															console.log(e);
														}));
													});
												}
												_promise2.default.all(promises).then(function () {
													if (object) {
														delete object[keyProperty];
													}
													delete index.keys[id];
													resolve();
												}).catch(function (e) {
													console.log(e);
												});
											}).catch(function (e) {
												console.log(e);
											});
										});
									};

									index = this, store = index.store, keyProperty = store.keyProperty, pending = index.pending[id];

									if (!pending) {
										_context14.next = 6;
										break;
									}

									return _context14.abrupt("return", new _promise2.default(function (resolve, reject) {
										pending.then(function (result) {
											if (typeof result !== "undefined") {
												var _pending = doit();
												index.pending[id] = _pending;
												_pending.then(function () {
													//console.log("deleted")
													resolve(true);
												});
											}
										});
									}));

								case 6:
									_ret4 = function () {
										var pending = index.pending[id] = doit();
										return {
											v: new _promise2.default(function (resolve, reject) {
												pending.then(function (result) {
													delete index.pending[id];
													resolve(true);
												});
											})
										};
									}();

									if (!((typeof _ret4 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret4)) === "object")) {
										_context14.next = 9;
										break;
									}

									return _context14.abrupt("return", _ret4.v);

								case 9:
								case "end":
									return _context14.stop();
							}
						}
					}, _callee14, this);
				}));

				function _delete(_x19) {
					return _ref14.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "flush",
			value: function flush(key) {
				var index = this,
				    indexkey = this.isInstanceKey(key) ? key : index.name + "." + key,
				    desc = (0, _getOwnPropertyDescriptor2.default)(index.keys, indexkey);
				if (desc) {
					//index.keys[key] = false;
					//index.keys[indexkey] = false;
					delete index.keys[indexkey];
				}
			}
		}, {
			key: "get",
			value: function () {
				var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(key, f, init) {
					var index, indexkey, promise, value, resolver, rejector, activity;
					return _regenerator2.default.wrap(function _callee15$(_context15) {
						while (1) {
							switch (_context15.prev = _context15.next) {
								case 0:
									index = this, indexkey = this.isInstanceKey(key) ? key : index.name + "." + key;
									promise = index.pending[key], value = index.keys[indexkey];

									if (!promise) {
										_context15.next = 4;
										break;
									}

									return _context15.abrupt("return", promise);

								case 4:
									if (value) {
										_context15.next = 10;
										break;
									}

									if (init) {
										value = index.keys[indexkey] = {};
									}
									resolver = void 0, rejector = void 0;

									promise = index.pending[key] = new _promise2.default(function (resolve, reject) {
										resolver = resolve;rejector = reject;
									});
									activity = new Activity(resolver).step(function () {
										return index.store.get(indexkey);
									}).step(function (storedvalue, abort) {
										delete index.pending[key];
										var type = typeof storedvalue === "undefined" ? "undefined" : (0, _typeof3.default)(storedvalue);
										if (type === "undefined") {
											if (init) {
												value = index.keys[indexkey] = {};
											}
										} else {
											value = index.keys[indexkey] = storedvalue;
											if (type === "object" && index.isInstanceKey(key)) {
												return index.index(value, false, index.store.db.activate);
											}
										}
										return value;
									}).step(f).step(resolver).exec();
									return _context15.abrupt("return", promise);

								case 10:
									if (f) {
										f(value);
									}
									return _context15.abrupt("return", _promise2.default.resolve(value));

								case 12:
								case "end":
									return _context15.stop();
							}
						}
					}, _callee15, this);
				}));

				function get(_x20, _x21, _x22) {
					return _ref15.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "index",
			value: function () {
				var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16(object, reIndex, activate) {
					var index, store, cls, id, resolver, rejector, promise, indexed;
					return _regenerator2.default.wrap(function _callee16$(_context16) {
						while (1) {
							switch (_context16.prev = _context16.next) {
								case 0:
									index = this, store = index.store, cls = object.constructor, id = object[store.keyProperty];
									resolver = void 0, rejector = void 0;
									promise = new _promise2.default(function (resolve, reject) {
										resolver = resolve;rejector = reject;
									});

									index.keys[id] = object;
									if (object.constructor.reindexCalls) {
										object.constructor.reindexCalls.forEach(function (fname) {
											var f = object[fname];
											if (!f.reindexer) {
												(0, _defineProperty2.default)(object, fname, { configurable: true, writable: true, value: function value() {
														var me = this;
														f.call.apply(f, [me].concat(Array.prototype.slice.call(arguments)));
														index.index(me, true, db.activate).then(function () {
															stream(me, db);
														});
													} });
												object[fname].reindexer = true;
											}
										});
									}
									indexed = reIndex ? store.set(id, object, true) : _promise2.default.resolve();

									indexed.then(function () {
										var activity = new Activity(resolver);
										Index.keys(object).forEach(function (key) {
											var value = object[key],
											    desc = (0, _getOwnPropertyDescriptor2.default)(object, key);
											function get() {
												return get.value;
											}
											if (!reIndex) {
												get.value = value;
											}
											function set(value, first) {
												var instance = this,
												    cls = instance.constructor,
												    index = cls.index,
												    store = index.store,
												    indexkey = cls.name + "." + key,
												    keyProperty = store.keyProperty,
												    db = store.db,
												    id = instance[keyProperty],
												    oldvalue = get.value,
												    oldtype = typeof oldvalue === "undefined" ? "undefined" : (0, _typeof3.default)(oldvalue);
												var type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);
												if (oldtype === "undefined" || oldvalue != value) {
													if (type === "undefined") {
														delete get.value;
													} else {
														get.value = value;
													}
													if (type === "function") {
														value = value.call(instance);
														type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);
													}
													return new _promise2.default(function (resolve, reject) {
														index.get(key, function (node) {
															node = index.keys[indexkey]; // re-assign since 1) we know it is loaded and initialized, 2) it may have been overwritten by another async
															if (!instance[keyProperty]) {
																// object may have been deleted by another async call!
																if (node[oldvalue] && node[oldvalue][oldtype]) {
																	delete node[oldvalue][oldtype][id];
																}
																resolve(true);
																return;
															}
															if (value && type === "object") {
																var ocls = value.constructor;
																if (!ocls.index) {
																	db.index(ocls);
																}
																ocls.index.put(value).then(function () {
																	var okey = value[keyProperty],
																	    otype = value.constructor.name;
																	if (!node[okey]) {
																		node[okey] = {};
																	}
																	if (!node[okey][otype]) {
																		node[okey][otype] = {};
																	}
																	node[okey][otype][id] = true;
																	var restorable = false;
																	if (node[oldvalue] && node[oldvalue][oldtype]) {
																		delete node[oldvalue][oldtype][id];
																		restorable = true;
																	}
																	var promise = first ? _promise2.default.resolve() : store.set(id, instance, true);
																	promise.then(function () {
																		index.save(key, function () {
																			resolve(true);
																			if (!first) {
																				stream(object, db);
																			}
																		}).catch(function (e) {
																			throw e;
																		});
																	}).catch(function (e) {
																		delete node[okey][otype][id];
																		if (restorable) {
																			node[oldvalue][oldtype][id] = true;
																		}
																	});;
																});
															} else if (type !== "undefined") {
																(function () {
																	if (!node[value]) {
																		node[value] = {};
																	}
																	if (!node[value][type]) {
																		node[value][type] = {};
																	}
																	node[value][type][id] = true;
																	var restorable = false;
																	if (node[oldvalue] && node[oldvalue][oldtype]) {
																		delete node[oldvalue][oldtype][id];
																		restorable = true;
																	}
																	var promise = first ? _promise2.default.resolve() : store.set(id, instance, true);
																	promise.then(function () {
																		index.keys[key] = node;
																		index.save(key, function () {
																			resolve(true);
																			if (!first) {
																				stream(object, db);
																			}
																		});
																		/*index.store.set(index.name + "." + key,node).then(() => {
                  	resolve(true);
                  	if(!first) {
                  		stream(object,db);
                  	}
                  });*/
																	}).catch(function (e) {
																		delete node[value][type][id];
																		if (restorable) {
																			node[oldvalue][oldtype][id] = true;
																		}
																	});
																})();
															}
														}, true);
													});
												} else {
													return _promise2.default.resolve(true);
												}
											}
											var writable = desc && !!desc.configurable && !!desc.writable;
											if (activate && desc && writable && !desc.get && !desc.set) {
												delete desc.writable;
												delete desc.value;
												desc.get = get;
												desc.set = set;
												(0, _defineProperty2.default)(object, key, desc);
											}
											if (reIndex) {
												activity.step(function () {
													return set.call(object, value, true);
												});
											}
										});
										activity.step(function () {
											return resolver(object);
										}).exec();
									});
									return _context16.abrupt("return", promise);

								case 8:
								case "end":
									return _context16.stop();
							}
						}
					}, _callee16, this);
				}));

				function index(_x23, _x24, _x25) {
					return _ref16.apply(this, arguments);
				}

				return index;
			}()
		}, {
			key: "instances",
			value: function () {
				var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17(keyArray, cls) {
					var index, results, i;
					return _regenerator2.default.wrap(function _callee17$(_context17) {
						while (1) {
							switch (_context17.prev = _context17.next) {
								case 0:
									index = this, results = [];
									i = 0;

								case 2:
									if (!(i < keyArray.length)) {
										_context17.next = 14;
										break;
									}

									_context17.prev = 3;
									_context17.next = 6;
									return index.get(keyArray[i], function (instance) {
										if (!cls || instance instanceof cls) {
											results.push(instance);
										}
									});

								case 6:
									_context17.next = 11;
									break;

								case 8:
									_context17.prev = 8;
									_context17.t0 = _context17["catch"](3);

									console.log(_context17.t0);

								case 11:
									i++;
									_context17.next = 2;
									break;

								case 14:
									return _context17.abrupt("return", results);

								case 15:
								case "end":
									return _context17.stop();
							}
						}
					}, _callee17, this, [[3, 8]]);
				}));

				function instances(_x26, _x27) {
					return _ref17.apply(this, arguments);
				}

				return instances;
			}()
		}, {
			key: "match",
			value: function () {
				var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18(pattern) {
					var classVars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					var classMatches = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
					var restrictRight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
					var classVar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "$self";
					var parentKey = arguments[5];
					var nestedClass = arguments[6];
					var keys, literals, tests, nestedobjects, joinvars, joins, cols, nodes, results, currentclass, index, keyProperty, i, key;
					return _regenerator2.default.wrap(function _callee18$(_context18) {
						while (1) {
							switch (_context18.prev = _context18.next) {
								case 0:
									keys = (0, _keys2.default)(pattern).filter(function (key) {
										return key != "$class";
									}), literals = {}, tests = {}, nestedobjects = {}, joinvars = {}, joins = {}, cols = {}, nodes = [];
									results = classMatches, currentclass = pattern.$class ? pattern.$class : nestedClass ? nestedClass : classVars[classVar] ? classVars[classVar] : Object;

									if (!(typeof currentclass === "string")) {
										_context18.next = 10;
										break;
									}

									_context18.prev = 3;

									currentclass = new Function("return " + currentclass)();
									_context18.next = 10;
									break;

								case 7:
									_context18.prev = 7;
									_context18.t0 = _context18["catch"](3);
									return _context18.abrupt("return", _promise2.default.resolve([]));

								case 10:
									index = currentclass.index, keyProperty = currentclass.name + "." + index.store.keyProperty;

									(0, _keys2.default)(classVars).forEach(function (classVar, i) {
										cols[classVar] = i;
										if (!results[classVar]) {
											results[classVar] = null;
										}
										if (!restrictRight[i]) {
											restrictRight[i] = {};
										};
									});
									i = 0;

								case 13:
									if (!(i < keys.length)) {
										_context18.next = 30;
										break;
									}

									key = keys[i];

									if (classVars[key]) {
										_context18.next = 27;
										break;
									}

									_context18.prev = 16;
									_context18.t1 = nodes;
									_context18.next = 20;
									return index.get(key);

								case 20:
									_context18.t2 = _context18.sent;

									_context18.t1.push.call(_context18.t1, _context18.t2);

									_context18.next = 27;
									break;

								case 24:
									_context18.prev = 24;
									_context18.t3 = _context18["catch"](16);

									console.log(_context18.t3);

								case 27:
									i++;
									_context18.next = 13;
									break;

								case 30:
									return _context18.abrupt("return", new _promise2.default(function (resolve, reject) {
										// db.select({name: {$o1: "name"}}).from({$o1: Object,$o2: Object}).where({$o1: {name: {$o2: "name"}}})
										nodes.every(function (node, i) {
											var key = keys[i],
											    value = pattern[key],
											    type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);
											if (!node) {
												if (type === "undefined") {
													return true;
												}
												results[classVar] = [];
												return false;
											}
											if (type !== "object") {
												return literals[i] = true;
											}
											(0, _keys2.default)(value).forEach(function (key) {
												if (classVars[key]) {
													var rightClass = nestedClass ? nestedClass : classVars[key],
													    rightKeyProperty = rightClass.index.store.keyProperty,
													    rightProperty = value[key];
													joins[i] = { rightVar: key, rightClass: rightClass, rightKeyProperty: rightKeyProperty, rightProperty: rightProperty, test: Index.$eeq };
													return;
												}
												if (key[0] === "$") {
													var testvalue = value[key],
													    test = Index[key];
													if (typeof test === "function") {
														if (testvalue && (typeof testvalue === "undefined" ? "undefined" : (0, _typeof3.default)(testvalue)) === "object") {
															var second = (0, _keys2.default)(testvalue)[0];
															if (classVars[second]) {
																var _rightClass = nestedClass ? nestedClass : classVars[second],
																    _rightKeyProperty = _rightClass.index.store.keyProperty,
																    _rightProperty = testvalue[second];
																return joins[i] = { rightVar: second, rightClass: _rightClass, rightKeyProperty: _rightKeyProperty, rightProperty: _rightProperty, test: test };
															}
														}
														tests[i] = true;
														return;
													}
												}
												nestedobjects[i] = true;
												return;
											});
											return true;
										});
										if (results[classVar] && results[classVar].length === 0) {
											resolve([]);return;
										}
										var exclude = [];
										nodes.every(function (node, i) {
											if (!literals[i]) {
												return true;
											}
											var key = keys[i],
											    value = pattern[key],
											    type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);
											if (type === "undefined") {
												(0, _keys2.default)(node).forEach(function (testValue) {
													(0, _keys2.default)(node[testValue]).forEach(function (testType) {
														exclude = exclude.concat((0, _keys2.default)(node[testValue][testType]));
													});
												});
												return true;
											}
											if (!node[value] || !node[value][type]) {
												results[classVar] = [];
												return false;
											}
											var ids = (0, _keys2.default)(node[value][type]).filter(function (id) {
												return !currentclass || id.indexOf(currentclass.name + "@") === 0;
											});
											results[classVar] = results[classVar] ? intersection(results[classVar], ids) : ids;
											return results[classVar].length > 0;
										});
										if (results[classVar] && results[classVar].length === 0) {
											resolve([]);return;
										}
										nodes.every(function (node, i) {
											if (!tests[i]) {
												return true;
											}
											var key = keys[i],
											    predicate = pattern[key],
											    testname = (0, _keys2.default)(predicate)[0],
											    value = predicate[testname],
											    type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value),
											    test = Index[testname];
											var ids = [];
											if (type === "undefined" && (testname === "$eq" || testname === "$eeq")) {
												(0, _keys2.default)(node).forEach(function (testValue) {
													(0, _keys2.default)(node[testValue]).forEach(function (testType) {
														exclude = exclude.concat((0, _keys2.default)(node[testValue][testType]));
													});
												});
												return true;
											}
											(0, _keys2.default)(node).forEach(function (testValue) {
												(0, _keys2.default)(node[testValue]).forEach(function (testType) {
													if (test(Index.coerce(testValue, testType), value)) {
														ids = ids.concat((0, _keys2.default)(node[testValue][testType]));
													}
												});
											});
											ids = ids.filter(function (id) {
												return !currentclass || id.indexOf(currentclass.name + "@") === 0;
											});
											results[classVar] = results[classVar] ? intersection(results[classVar], ids) : intersection(ids, ids);
											return results[classVar].length > 0;
										});
										if (results[classVar] && results[classVar].length === 0) {
											resolve([]);return;
										}
										var promises = [],
										    childnodes = [],
										    nestedtypes = [];
										nodes.forEach(function (node, i) {
											if (!nestedobjects[i]) {
												return;
											}
											var key = keys[i],
											    nestedobject = pattern[key];
											(0, _keys2.default)(node).forEach(function (key) {
												if (key.indexOf("@") > 0) {
													var parts = key.split("@"),
													    clsname = parts[0];
													if (!nestedtypes[clsname]) {
														nestedtypes[clsname] = [];
													}
													childnodes.push(node);
													nestedtypes.push(new Function("return " + clsname)());
												}
											});
											nestedtypes.forEach(function (nestedtype) {
												promises.push(nestedtype.index.match(nestedobject, classVars, classMatches, restrictRight, classVar + "$" + nestedtype.name, key, nestedtype));
											});
										});
										_promise2.default.all(promises).then(function (childidsets) {
											childidsets.every(function (childids, i) {
												var node = childnodes[i],
												    nestedtype = nestedtypes[i];
												var ids = [];
												childids.forEach(function (id) {
													//if(clsprefix && id.indexOf(clsprefix)!==0) { return; } // tests for $class
													if (node[id]) {
														ids = ids.concat((0, _keys2.default)(node[id][nestedtype.name]));
													}
												});
												ids = ids.filter(function (id) {
													return !currentclass || id.indexOf(currentclass.name + "@") === 0;
												});
												results[classVar] = results[classVar] ? intersection(results[classVar], ids) : intersection(ids, ids);
												return results[classVar].length > 0;
											});
											if (results[classVar] && results[classVar].length === 0) {
												resolve([]);return;
											}
											var promises = [];

											nodes.forEach(function (node, i) {
												// db.select({name: {$o1: "name"}}).from({$o1: Object,$o2: Object}).where({$o1: {name: {$o2: "name"}}})
												var join = joins[i];
												if (!join) {
													return true;
												}
												promises.push(join.rightClass.index.get(join.rightProperty));
												promises.push(join.rightClass.index.get(join.rightProperty));
											});
											_promise2.default.all(promises).then(function (rightnodes) {
												// variable not used, promises just ensure nodes loaded for matching
												if (!results[classVar]) {
													results[classVar] = (0, _keys2.default)(index.keys[keyProperty]).filter(function (id) {
														return !currentclass || id.indexOf(currentclass.name + "@") === 0;
													});;
												}
												nodes.every(function (node, i) {
													// db.select({name: {$o1: "name"}}).from({$o1: Object,$o2: Object}).where({$o1: {name: {$o2: "name"}}})
													var join = joins[i]; // {rightVar: second, rightIndex:classVars[second].index, rightProperty:testvalue[second], test:test};
													if (!join) {
														return true;
													}
													if (cols[join.rightVar] === 0) {
														return true;
													}
													var rightIndex = join.rightClass.index,
													    rightKeyProperty = join.rightClass.name + "." + join.rightKeyProperty,
													    rightProperty = join.rightClass.name + "." + join.rightProperty;
													if (!rightIndex.keys[rightProperty]) {
														results[classVar] = [];
														return false;
													}
													if (!results[join.rightVar]) {
														results[join.rightVar] = (0, _keys2.default)(rightIndex.keys[rightKeyProperty]).filter(function (id) {
															return !currentclass || id.indexOf(rightIndex.name + "@") === 0;
														});
													}
													var leftids = [];
													(0, _keys2.default)(node).forEach(function (leftValue) {
														(0, _keys2.default)(node[leftValue]).forEach(function (leftType) {
															var innerleftids = (0, _keys2.default)(node[leftValue][leftType]),
															    innerrightids = [],
															    some = false,
															    pnode = rightIndex.keys[rightProperty];
															(0, _keys2.default)(pnode).forEach(function (rightValue) {
																var vnode = pnode[rightValue];
																(0, _keys2.default)(vnode).forEach(function (rightType) {
																	if (join.test(Index.coerce(leftValue, leftType), Index.coerce(rightValue, rightType))) {
																		some = true;
																		innerrightids = innerrightids.concat((0, _keys2.default)(vnode[rightType]));
																	}
																});
															});
															if (some) {
																leftids = leftids.concat(innerleftids); // do we need to filter for class?
																innerrightids = intersection(innerrightids, innerrightids); // do we need to filter for class?
																innerleftids.forEach(function (id, i) {
																	restrictRight[cols[join.rightVar]][id] = restrictRight[cols[join.rightVar]][id] ? intersection(restrictRight[cols[join.rightVar]][id], innerrightids) : innerrightids;
																});
															}
														});
													});
													results[classVar] = results[classVar] && leftids.length > 0 ? intersection(results[classVar], leftids) : leftids;
													return results[classVar] && results[classVar].length > 0;
												});
												if (results[classVar] && results[classVar].length > 0) {
													resolve(results[classVar].filter(function (item) {
														return exclude.indexOf(item) === -1;
													}));return;
												}
												resolve([]);
											});
										});
									}));

								case 31:
								case "end":
									return _context18.stop();
							}
						}
					}, _callee18, this, [[3, 7], [16, 24]]);
				}));

				function match(_x28, _x29, _x30, _x31, _x32, _x33, _x34) {
					return _ref18.apply(this, arguments);
				}

				return match;
			}()
		}, {
			key: "put",
			value: function () {
				var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19(object) {
					var index, store, db, keyProperty, _id;

					return _regenerator2.default.wrap(function _callee19$(_context19) {
						while (1) {
							switch (_context19.prev = _context19.next) {
								case 0:
									index = this, store = index.store, db = store.db, keyProperty = store.keyProperty;

									if (!object[keyProperty]) {
										_id = object.constructor.name + "@" + (_uuid ? _uuid.v4() : uuid.v4());

										(0, _defineProperty2.default)(object, keyProperty, { enumerable: true, configurable: true, value: _id });
									}
									store.addScope(object);
									return _context19.abrupt("return", index.index(object, true, db.activate));

								case 4:
								case "end":
									return _context19.stop();
							}
						}
					}, _callee19, this);
				}));

				function put(_x39) {
					return _ref19.apply(this, arguments);
				}

				return put;
			}()
		}, {
			key: "save",
			value: function () {
				var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20(key, f) {
					var index, isinstance, indexkey, node;
					return _regenerator2.default.wrap(function _callee20$(_context20) {
						while (1) {
							switch (_context20.prev = _context20.next) {
								case 0:
									index = this, isinstance = index.isInstanceKey(key), indexkey = isinstance ? key : index.name + "." + key, node = index.keys[indexkey];

									if (!node) {
										_context20.next = 9;
										break;
									}

									if (!index.saveAsync) {
										_context20.next = 8;
										break;
									}

									if (f) {
										f();
									}
									if (!index.save.pending) {
										index.save.pending = {};
									}
									if (index.save.pending[indexkey]) {
										clearTimeout(index.save.pending[indexkey]);
									}
									index.save.pending[indexkey] = setTimeout(function () {
										index.store.set(indexkey, node);
										delete index.save.pending[indexkey];
									});
									return _context20.abrupt("return", _promise2.default.resolve());

								case 8:
									return _context20.abrupt("return", index.store.set(indexkey, node).then(function () {
										if (f) {
											f();
										}
									}).catch(function (e) {
										console.log(e);
									}));

								case 9:
									return _context20.abrupt("return", _promise2.default.resolve());

								case 10:
								case "end":
									return _context20.stop();
							}
						}
					}, _callee20, this);
				}));

				function save(_x40, _x41) {
					return _ref20.apply(this, arguments);
				}

				return save;
			}()
		}], [{
			key: "coerce",
			value: function coerce(value, type) {
				var conversions = {
					string: {
						number: parseFloat,
						boolean: function boolean(value) {
							return ["true", "yes", "on"].indexOf(value) >= 0 ? true : ["false", "no", "off"].indexOf(value) >= 0 ? false : value;
						}
					},
					number: {
						string: function string(value) {
							return value + "";
						},
						boolean: function boolean(value) {
							return !!value;
						}
					},
					boolean: {
						number: function number(value) {
							return value ? 1 : 0;
						},
						string: function string(value) {
							return value + "";
						}
					}
				},
				    vtype = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);
				if (type === vtype) {
					return value;
				}
				if (conversions[vtype] && conversions[vtype][type]) {
					return conversions[vtype][type](value);
				}
				return value;
			}
		}, {
			key: "keys",
			value: function keys(object) {
				var indexkeys = void 0;
				if (object.indexKeys) {
					indexkeys = object.indexKeys;
				} else if (object.constructor.indexKeys) {
					indexkeys = object.constructor.indexKeys;
				}
				if (indexkeys) {
					var i = indexkeys.indexOf("*");
					if (i >= 0) {
						indexkeys = indexkeys.concat((0, _keys2.default)(object));
					}
				} else {
					indexkeys = (0, _keys2.default)(object);
				}
				return indexkeys.filter(function (key) {
					if (object.constructor.skipKeys && object.constructor.skipKeys.indexOf(key) >= 0) {
						return false;
					}
					return key !== "*";
				});
			}
		}]);
		return Index;
	}();

	Index.$ = function (value, f) {
		return f(value);
	};
	Index.$typeof = function () {
		return true; // test is done in method find
	};
	Index.$lt = function (value, testValue) {
		return value < testValue;
	};
	Index["<"] = Index.$lt;
	Index.$lte = function (value, testValue) {
		return value <= testValue;
	};
	Index["<="] = Index.$lte;
	Index.$eq = function (value, testValue) {
		return value == testValue;
	};
	Index["=="] = Index.$eq;
	Index.$neq = function (value, testValue) {
		return value != testValue;
	};
	Index["!="] = Index.$neq;
	Index.$eeq = function (value, testValue) {
		return value === testValue;
	};
	Index["==="] = Index.$eeq;
	Index.$echoes = function (value, testValue) {
		return value == testValue || soundex(value) === soundex(testValue);
	};
	Index.$matches = function (value, testValue) {
		return value.search(testValue) >= 0;
	};
	Index.$in = function (value, testValue) {
		if (testValue.indexOf) {
			return testValue.indexOf(value) >= 0;
		}
		if (testValue.includes) {
			return testValue.includes(value);
		}
		return false;
	};
	Index.$nin = function (value, testValue) {
		return !Index.$in(value, testValue);
	};
	Index.$between = function (value, testValue) {
		var end1 = testValue[0],
		    end2 = testValue[1],
		    inclusive = testValue[2],
		    start = Math.min(end1, end2),
		    stop = Math.max(end1, end2);
		if (inclusive) {
			return value >= start && value <= stop;
		}
		return value > start && value < stop;
	};
	Index.$outside = function (value, testValue) {
		return !Index.$between(value, testValue.concat(true));
	};
	Index.$gte = function (value, testValue) {
		return value >= testValue;
	};
	Index[">="] = Index.$gte;
	Index.$gt = function (value, testValue) {
		return value > testValue;
	};
	Index[">"] = Index.$gt;

	var Store = function () {
		function Store() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Object";
			var keyProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "@key";
			var db = arguments[2];
			(0, _classCallCheck3.default)(this, Store);

			this.name = name;
			this.keyProperty = keyProperty;
			this.db = db;
			this.scope = {};
			this.ready = function () {
				var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee21(clear) {
					return _regenerator2.default.wrap(function _callee21$(_context21) {
						while (1) {
							switch (_context21.prev = _context21.next) {
								case 0:
									if (!this.ready.promised) {
										_context21.next = 2;
										break;
									}

									return _context21.abrupt("return", this.ready.promised);

								case 2:
									this.ready.promised = clear && this.clear ? this.clear() : _promise2.default.resolve();
									return _context21.abrupt("return", this.ready.promised);

								case 4:
								case "end":
									return _context21.stop();
							}
						}
					}, _callee21, this);
				}));

				return function (_x44) {
					return _ref21.apply(this, arguments);
				};
			}();
			this.pending = {};
			this.data = {};
		}

		(0, _createClass3.default)(Store, [{
			key: "addScope",
			value: function addScope(value) {
				var me = this;
				if (value && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object") {
					me.scope[value.constructor.name] = value.constructor;
					(0, _keys2.default)(value).forEach(function (property) {
						me.addScope(value[property]);
					});
				}
			}
		}, {
			key: "delete",
			value: function _delete(key) {
				var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

				var me = this;
				var promise = me.pending[key];
				delete me.data[key];
				if (!promise) {
					promise = me.pending[key] = new _promise2.default(function (resolve, reject) {
						me.pending[key] = me.ready().then(function () {
							return action();
						});
						me.pending[key].then(function () {
							delete me.pending[key];
							resolve();
						});
					});
					return promise;
				}
				return new _promise2.default(function (resolve, reject) {
					promise.then(function () {
						me.pending[key] = me.ready().then(function () {
							return action();
						});
						me.pending[key].then(function () {
							delete me.pending[key];
							resolve();
						});
					});
				});
			}
		}, {
			key: "get",
			value: function get(key) {
				var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

				var me = this,
				    result = me.data[key];
				var promise = me.pending[key];
				if (result) {
					return _promise2.default.resolve(result);
				}
				if (!promise) {
					promise = me.pending[key] = new _promise2.default(function (resolve, reject) {
						me.pending[key] = me.ready().then(function () {
							return action();
						});
						me.pending[key].then(function (result) {
							if (result) {
								me.restore(result).then(function (result) {
									me.data[key] = result;
									resolve(result);
								});
							} else {
								delete me.data[key];
								resolve(result);
							}
							delete me.pending[key];
						});
					});
					return promise;
				}
				return new _promise2.default(function (resolve, reject) {
					promise.then(function () {
						me.pending[key] = me.ready().then(function () {
							return action();
						});
						me.pending[key].then(function (result) {
							if (result) {
								me.restore(result).then(function (result) {
									me.data[key] = result;
									resolve(result);
								});
							} else {
								delete me.data[key];
								resolve(result);
							}
							delete me.pending[key];
						});
					});
				});
			}
		}, {
			key: "normalize",
			value: function normalize(value, recursing) {
				var me = this,
				    type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value),
				    keyProperty = me.keyProperty;
				var result = void 0;
				if (value && type === "object") {
					(function () {
						var id = value[keyProperty];
						if (!id) {
							id = value.constructor.name + "@" + (_uuid ? _uuid.v4() : uuid.v4());
							(0, _defineProperty2.default)(value, keyProperty, { enumerable: true, configurable: true, value: id });
						}
						var json = value.toJSON ? value.toJSON() : value;
						if ((typeof json === "undefined" ? "undefined" : (0, _typeof3.default)(json)) !== "object") {
							json = value;
						}
						me.addScope(value);
						result = {};
						if (recursing) {
							result[keyProperty] = id;
						} else {
							if (json instanceof Date) {
								result.time = json.getTime();
							}
							(0, _keys2.default)(json).forEach(function (key, i) {
								if (typeof json[key] !== "function") {
									result[key] = me.normalize(json[key], true);
								}
							});
						}
					})();
				} else {
					result = value;
				}
				return result;
			}
			// add cache support to prevent loops

		}, {
			key: "restore",
			value: function () {
				var _ref22 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee24(json, recurse) {
					var _this2 = this;

					var cache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

					var me, type, _ret7;

					return _regenerator2.default.wrap(function _callee24$(_context24) {
						while (1) {
							switch (_context24.prev = _context24.next) {
								case 0:
									me = this, type = typeof json === "undefined" ? "undefined" : (0, _typeof3.default)(json);

									if (!(json && type === "object")) {
										_context24.next = 6;
										break;
									}

									return _context24.delegateYield(_regenerator2.default.mark(function _callee23() {
										var key, keys, keymap, parts, cls, _ret8, _ret9, _ret10, _ret11;

										return _regenerator2.default.wrap(function _callee23$(_context23) {
											while (1) {
												switch (_context23.prev = _context23.next) {
													case 0:
														key = json[me.keyProperty], keys = (0, _keys2.default)(json), keymap = {};

														if (!(typeof key === "string")) {
															_context23.next = 34;
															break;
														}

														parts = key.split("@");
														cls = me.scope[parts[0]];

														if (cls) {
															_context23.next = 14;
															break;
														}

														_context23.prev = 5;

														me.scope[parts[0]] = cls = Function("return " + parts[0])();
														_context23.next = 14;
														break;

													case 9:
														_context23.prev = 9;
														_context23.t0 = _context23["catch"](5);

														_ret8 = function () {
															var promises = [];
															keys.forEach(function (property, i) {
																keymap[i] = property;
																promises.push(me.restore(json[property], true, cache));
															});
															return {
																v: {
																	v: new _promise2.default(function (resolve, reject) {
																		_promise2.default.all(promises).then(function (results) {
																			results.forEach(function (data, i) {
																				json[keymap[i]] = data;
																			});
																			resolve(json);
																		});
																	})
																}
															};
														}();

														if (!((typeof _ret8 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret8)) === "object")) {
															_context23.next = 14;
															break;
														}

														return _context23.abrupt("return", _ret8.v);

													case 14:
														if (!(keys.length === 1)) {
															_context23.next = 21;
															break;
														}

														return _context23.delegateYield(_regenerator2.default.mark(function _callee22() {
															var object, _instance, instance, promises;

															return _regenerator2.default.wrap(function _callee22$(_context22) {
																while (1) {
																	switch (_context22.prev = _context22.next) {
																		case 0:
																			object = void 0;
																			_context22.prev = 1;
																			_context22.next = 4;
																			return cls.index.get(key);

																		case 4:
																			object = _context22.sent;
																			_context22.next = 10;
																			break;

																		case 7:
																			_context22.prev = 7;
																			_context22.t0 = _context22["catch"](1);

																			console.log(_context22.t0);

																		case 10:
																			if (!(object instanceof cls)) {
																				_context22.next = 12;
																				break;
																			}

																			return _context22.abrupt("return", {
																				v: {
																					v: _promise2.default.resolve(object)
																				}
																			});

																		case 12:
																			if (!(cls.fromJSON && object)) {
																				_context22.next = 16;
																				break;
																			}

																			_instance = cls.fromJSON(object);

																			_instance[cls.index.store.keyProperty] = key;
																			return _context22.abrupt("return", {
																				v: {
																					v: _promise2.default.resolve(_instance)
																				}
																			});

																		case 16:
																			instance = (0, _create2.default)(cls.prototype);

																			if (!(typeof object === "undefined")) {
																				_context22.next = 20;
																				break;
																			}

																			instance[cls.index.store.keyProperty] = key;
																			return _context22.abrupt("return", {
																				v: {
																					v: _promise2.default.resolve(instance)
																				}
																			});

																		case 20:
																			promises = [];

																			if (object && (typeof object === "undefined" ? "undefined" : (0, _typeof3.default)(object)) === "object") {
																				(0, _keys2.default)(object).forEach(function (property, i) {
																					keymap[i] = property;
																					promises.push(me.restore(object[property], true, cache));
																				});
																			}
																			return _context22.abrupt("return", {
																				v: {
																					v: new _promise2.default(function (resolve, reject) {
																						_promise2.default.all(promises).then(function (results) {
																							results.forEach(function (data, i) {
																								instance[keymap[i]] = data;
																							});
																							resolve(instance);
																						});
																					})
																				}
																			});

																		case 23:
																		case "end":
																			return _context22.stop();
																	}
																}
															}, _callee22, _this2, [[1, 7]]);
														})(), "t1", 16);

													case 16:
														_ret9 = _context23.t1;

														if (!((typeof _ret9 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret9)) === "object")) {
															_context23.next = 19;
															break;
														}

														return _context23.abrupt("return", _ret9.v);

													case 19:
														_context23.next = 34;
														break;

													case 21:
														if (!(json instanceof cls)) {
															_context23.next = 27;
															break;
														}

														_ret10 = function () {
															var promises = [];
															keys.forEach(function (property, i) {
																keymap[i] = property;
																promises.push(me.restore(json[property], true, cache).catch(function (e) {
																	console.log(e);
																}));
															});
															return {
																v: {
																	v: new _promise2.default(function (resolve, reject) {
																		_promise2.default.all(promises).then(function (results) {
																			results.forEach(function (data, i) {
																				json[keymap[i]] = data;
																			});
																			resolve(json);
																		});
																	})
																}
															};
														}();

														if (!((typeof _ret10 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret10)) === "object")) {
															_context23.next = 25;
															break;
														}

														return _context23.abrupt("return", _ret10.v);

													case 25:
														_context23.next = 34;
														break;

													case 27:
														if (!cls.fromJSON) {
															_context23.next = 31;
															break;
														}

														return _context23.abrupt("return", {
															v: _promise2.default.resolve(cls.fromJSON(json))
														});

													case 31:
														_ret11 = function () {
															var instance = (0, _create2.default)(cls.prototype),
															    promises = [];
															keys.forEach(function (property, i) {
																keymap[i] = property;
																promises.push(me.restore(json[property], true, cache));
															});
															return {
																v: {
																	v: new _promise2.default(function (resolve, reject) {
																		_promise2.default.all(promises).then(function (results) {
																			results.forEach(function (data, i) {
																				instance[keymap[i]] = data;
																			});
																			resolve(instance);
																		});
																	})
																}
															};
														}();

														if (!((typeof _ret11 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret11)) === "object")) {
															_context23.next = 34;
															break;
														}

														return _context23.abrupt("return", _ret11.v);

													case 34:
													case "end":
														return _context23.stop();
												}
											}
										}, _callee23, _this2, [[5, 9]]);
									})(), "t0", 3);

								case 3:
									_ret7 = _context24.t0;

									if (!((typeof _ret7 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret7)) === "object")) {
										_context24.next = 6;
										break;
									}

									return _context24.abrupt("return", _ret7.v);

								case 6:
									return _context24.abrupt("return", _promise2.default.resolve(json));

								case 7:
								case "end":
									return _context24.stop();
							}
						}
					}, _callee24, this);
				}));

				function restore(_x47, _x48, _x49) {
					return _ref22.apply(this, arguments);
				}

				return restore;
			}()
		}, {
			key: "set",
			value: function set(key, value, normalize) {
				var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

				var me = this;
				var promise = me.pending[key];
				me.data[key] = value;
				if (!promise) {
					promise = me.pending[key] = new _promise2.default(function (resolve, reject) {
						me.pending[key] = me.ready().then(function () {
							return action(normalize ? me.normalize(value) : value);
						});
						me.pending[key].then(function (result) {
							delete me.pending[key];
							resolve();
						});
					});
					return promise;
				}
				return new _promise2.default(function (resolve, reject) {
					promise.then(function () {
						me.pending[key] = me.ready().then(function () {
							return action(normalize ? me.normalize(value) : value);
						});
						me.pending[key].then(function (result) {
							delete me.pending[key];
							resolve();
						});
					});
				});
			}
		}]);
		return Store;
	}();

	var MemStore = function (_Store) {
		(0, _inherits3.default)(MemStore, _Store);

		function MemStore(name, keyProperty, db) {
			(0, _classCallCheck3.default)(this, MemStore);

			var _this3 = (0, _possibleConstructorReturn3.default)(this, (MemStore.__proto__ || (0, _getPrototypeOf2.default)(MemStore)).call(this, name, keyProperty, db));

			_this3.data = {};
			return _this3;
		}

		(0, _createClass3.default)(MemStore, [{
			key: "clear",
			value: function () {
				var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee25() {
					var me;
					return _regenerator2.default.wrap(function _callee25$(_context25) {
						while (1) {
							switch (_context25.prev = _context25.next) {
								case 0:
									me = this;

									(0, _keys2.default)(me.data).forEach(function (key) {
										delete me.data[key];
									});
									return _context25.abrupt("return", true);

								case 3:
								case "end":
									return _context25.stop();
							}
						}
					}, _callee25, this);
				}));

				function clear() {
					return _ref23.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref24 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee26(key) {
					return _regenerator2.default.wrap(function _callee26$(_context26) {
						while (1) {
							switch (_context26.prev = _context26.next) {
								case 0:
									if (!this.data[key]) {
										_context26.next = 3;
										break;
									}

									delete this.data[key];
									return _context26.abrupt("return", true);

								case 3:
									return _context26.abrupt("return", false);

								case 4:
								case "end":
									return _context26.stop();
							}
						}
					}, _callee26, this);
				}));

				function _delete(_x52) {
					return _ref24.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref25 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee27(key) {
					return _regenerator2.default.wrap(function _callee27$(_context27) {
						while (1) {
							switch (_context27.prev = _context27.next) {
								case 0:
									return _context27.abrupt("return", this.data[key]);

								case 1:
								case "end":
									return _context27.stop();
							}
						}
					}, _callee27, this);
				}));

				function get(_x53) {
					return _ref25.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref26 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee28(key, value) {
					return _regenerator2.default.wrap(function _callee28$(_context28) {
						while (1) {
							switch (_context28.prev = _context28.next) {
								case 0:
									this.data[key] = value;
									return _context28.abrupt("return", true);

								case 2:
								case "end":
									return _context28.stop();
							}
						}
					}, _callee28, this);
				}));

				function set(_x54, _x55) {
					return _ref26.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return MemStore;
	}(Store);

	var IronCacheStore = function (_Store2) {
		(0, _inherits3.default)(IronCacheStore, _Store2);

		function IronCacheStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, IronCacheStore);

			var _this4 = (0, _possibleConstructorReturn3.default)(this, (IronCacheStore.__proto__ || (0, _getPrototypeOf2.default)(IronCacheStore)).call(this, name, keyProperty, db));

			_this4.ready(clear);
			return _this4;
		}

		(0, _createClass3.default)(IronCacheStore, [{
			key: "clear",
			value: function () {
				var _ref27 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee29() {
					var me;
					return _regenerator2.default.wrap(function _callee29$(_context29) {
						while (1) {
							switch (_context29.prev = _context29.next) {
								case 0:
									me = this;
									return _context29.abrupt("return", new _promise2.default(function (resolve, reject) {
										me.db.ironCacheClient.clearCache(me.name, function (err, res) {
											if (err) {
												resolve(false);
											} else {
												resolve(true);
											}
										});
									}));

								case 2:
								case "end":
									return _context29.stop();
							}
						}
					}, _callee29, this);
				}));

				function clear() {
					return _ref27.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref28 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee30(key) {
					var me;
					return _regenerator2.default.wrap(function _callee30$(_context30) {
						while (1) {
							switch (_context30.prev = _context30.next) {
								case 0:
									me = this;
									return _context30.abrupt("return", (0, _get3.default)(IronCacheStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(IronCacheStore.prototype), "delete", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.db.ironCacheClient.del(me.name, key, function (err, res) {
												if (err) {
													reject(err);
												} else {
													resolve(true);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context30.stop();
							}
						}
					}, _callee30, this);
				}));

				function _delete(_x56) {
					return _ref28.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref29 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee31(key) {
					var me;
					return _regenerator2.default.wrap(function _callee31$(_context31) {
						while (1) {
							switch (_context31.prev = _context31.next) {
								case 0:
									me = this;
									return _context31.abrupt("return", (0, _get3.default)(IronCacheStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(IronCacheStore.prototype), "get", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.db.ironCacheClient.get(me.name, key, function (err, res) {
												if (err) {
													resolve();
												} else {
													resolve(JSON.parse(res.value));
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context31.stop();
							}
						}
					}, _callee31, this);
				}));

				function get(_x57) {
					return _ref29.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref30 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee32(key, value, normalize) {
					var me;
					return _regenerator2.default.wrap(function _callee32$(_context32) {
						while (1) {
							switch (_context32.prev = _context32.next) {
								case 0:
									me = this;
									return _context32.abrupt("return", (0, _get3.default)(IronCacheStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(IronCacheStore.prototype), "set", this).call(this, key, value, normalize, function (normalized) {
										return new _promise2.default(function (resolve, reject) {
											me.db.ironCacheClient.put(me.name, key, { value: (0, _stringify2.default)(normalized) }, function (err, res) {
												if (err) {
													reject(err);
												} else {
													resolve(true);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context32.stop();
							}
						}
					}, _callee32, this);
				}));

				function set(_x58, _x59, _x60) {
					return _ref30.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return IronCacheStore;
	}(Store);

	var RedisStore = function (_Store3) {
		(0, _inherits3.default)(RedisStore, _Store3);

		function RedisStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, RedisStore);

			var _this5 = (0, _possibleConstructorReturn3.default)(this, (RedisStore.__proto__ || (0, _getPrototypeOf2.default)(RedisStore)).call(this, name, keyProperty, db));

			_this5.storage = _this5.db.redisClient;
			_this5.storage.delete = _this5.storage.del;
			_this5.ready(clear);
			return _this5;
		}

		(0, _createClass3.default)(RedisStore, [{
			key: "clear",
			value: function () {
				var _ref31 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee33() {
					var me;
					return _regenerator2.default.wrap(function _callee33$(_context33) {
						while (1) {
							switch (_context33.prev = _context33.next) {
								case 0:
									me = this;
									return _context33.abrupt("return", new _promise2.default(function (resolve, reject) {
										var key = me.name + "." + me.keyProperty;
										me.storage.hkeys(me.name, function (err, values) {
											if (err) {
												resolve();
											} else {
												if (values.length === 0) {
													resolve();
												} else {
													(function () {
														var multi = me.storage.multi();
														values.forEach(function (id) {
															multi = multi.hdel(me.name, id, function (err, res) {
																if (err) {
																	reject(err);
																} else {
																	resolve(true);
																}
															});
														});
														multi.exec(function (err, replies) {
															if (err) {
																console.log(err);
																reject(err);
															} else {
																resolve(true);
															}
														});
													})();
												}
											}
										});
									}));

								case 2:
								case "end":
									return _context33.stop();
							}
						}
					}, _callee33, this);
				}));

				function clear() {
					return _ref31.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref32 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee34(key) {
					var me;
					return _regenerator2.default.wrap(function _callee34$(_context34) {
						while (1) {
							switch (_context34.prev = _context34.next) {
								case 0:
									me = this;
									return _context34.abrupt("return", (0, _get3.default)(RedisStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(RedisStore.prototype), "delete", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.hdel(me.name, key, function (err, res) {
												if (err) {
													reject(err);
												} else {
													resolve();
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context34.stop();
							}
						}
					}, _callee34, this);
				}));

				function _delete(_x61) {
					return _ref32.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref33 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee35(key) {
					var me;
					return _regenerator2.default.wrap(function _callee35$(_context35) {
						while (1) {
							switch (_context35.prev = _context35.next) {
								case 0:
									me = this;
									return _context35.abrupt("return", (0, _get3.default)(RedisStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(RedisStore.prototype), "get", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.hget(me.name, key, function (err, value) {
												if (err) {
													resolve();
												} else {
													if (!value) {
														resolve();
													} else {
														resolve(JSON.parse(value));
													}
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context35.stop();
							}
						}
					}, _callee35, this);
				}));

				function get(_x62) {
					return _ref33.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref34 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee36(key, value, normalize) {
					var me;
					return _regenerator2.default.wrap(function _callee36$(_context36) {
						while (1) {
							switch (_context36.prev = _context36.next) {
								case 0:
									me = this;
									return _context36.abrupt("return", (0, _get3.default)(RedisStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(RedisStore.prototype), "set", this).call(this, key, value, normalize, function (normalized) {
										return new _promise2.default(function (resolve, reject) {
											me.storage.hset(me.name, key, (0, _stringify2.default)(normalized), function (err, res) {
												if (err) {
													reject(err);
												} else {
													resolve();
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context36.stop();
							}
						}
					}, _callee36, this);
				}));

				function set(_x63, _x64, _x65) {
					return _ref34.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return RedisStore;
	}(Store);

	var MemcachedStore = function (_Store4) {
		(0, _inherits3.default)(MemcachedStore, _Store4);

		function MemcachedStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, MemcachedStore);

			var _this6 = (0, _possibleConstructorReturn3.default)(this, (MemcachedStore.__proto__ || (0, _getPrototypeOf2.default)(MemcachedStore)).call(this, name, keyProperty, db));

			_this6.storage = _this6.db.memcachedClient;
			_this6.ready(clear);
			return _this6;
		}

		(0, _createClass3.default)(MemcachedStore, [{
			key: "clear",
			value: function () {
				var _ref35 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee37() {
					var me;
					return _regenerator2.default.wrap(function _callee37$(_context37) {
						while (1) {
							switch (_context37.prev = _context37.next) {
								case 0:
									me = this;
									return _context37.abrupt("return", new _promise2.default(function (resolve, reject) {
										var key = me.name + "." + me.keyProperty;
										me.storage.get(key, function (err, value) {
											if (err) {
												resolve();
											} else {
												if (!value) {
													resolve();
												} else {
													me.storage.delete(key, function (err, res) {
														if (err) {
															reject(err);
														} else {
															resolve(true);
														}
													});
												}
											}
										});
									}));

								case 2:
								case "end":
									return _context37.stop();
							}
						}
					}, _callee37, this);
				}));

				function clear() {
					return _ref35.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref36 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee38(key) {
					var me;
					return _regenerator2.default.wrap(function _callee38$(_context38) {
						while (1) {
							switch (_context38.prev = _context38.next) {
								case 0:
									me = this;
									return _context38.abrupt("return", (0, _get3.default)(MemcachedStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(MemcachedStore.prototype), "delete", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.delete(key, function (err, res) {
												if (err) {
													reject(err);
												} else {
													resolve(true);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context38.stop();
							}
						}
					}, _callee38, this);
				}));

				function _delete(_x66) {
					return _ref36.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref37 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee39(key) {
					var me;
					return _regenerator2.default.wrap(function _callee39$(_context39) {
						while (1) {
							switch (_context39.prev = _context39.next) {
								case 0:
									me = this;
									return _context39.abrupt("return", (0, _get3.default)(MemcachedStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(MemcachedStore.prototype), "get", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.get(key, function (err, value, key) {
												if (err) {
													resolve();
												} else {
													if (!value) {
														resolve();
													} else {
														resolve(JSON.parse(value));
													}
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context39.stop();
							}
						}
					}, _callee39, this);
				}));

				function get(_x67) {
					return _ref37.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref38 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee40(key, value, normalize) {
					var me;
					return _regenerator2.default.wrap(function _callee40$(_context40) {
						while (1) {
							switch (_context40.prev = _context40.next) {
								case 0:
									me = this;
									return _context40.abrupt("return", (0, _get3.default)(MemcachedStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(MemcachedStore.prototype), "set", this).call(this, key, value, normalize, function (normalized) {
										return new _promise2.default(function (resolve, reject) {
											me.storage.set(key, (0, _stringify2.default)(normalized), function (err, res) {
												if (err) {
													reject(err);
												} else {
													resolve(true);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context40.stop();
							}
						}
					}, _callee40, this);
				}));

				function set(_x68, _x69, _x70) {
					return _ref38.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return MemcachedStore;
	}(Store);

	function blockString(block) {
		var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";

		return "[" + bytePadEnd(block[0] + "", 20, " ", encoding) + "," + bytePadEnd(block[1] + "", 20, " ", encoding) + "]";
	}

	function bytePadEnd(str, length, pad) {
		var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "utf8";

		var needed = length - Buffer.byteLength(str, encoding);
		if (needed > 0) {
			return str + Buffer.alloc(needed, " ", encoding).toString(encoding);
		}
		return str;
	}

	var JSONBlockStore = function (_Store5) {
		(0, _inherits3.default)(JSONBlockStore, _Store5);

		function JSONBlockStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, JSONBlockStore);

			var _this7 = (0, _possibleConstructorReturn3.default)(this, (JSONBlockStore.__proto__ || (0, _getPrototypeOf2.default)(JSONBlockStore)).call(this, name, keyProperty, db));

			_this7.path = db.name + "/" + name;
			_this7.encoding = "utf8";
			_this7.opened = false;
			if (clear) {
				_this7.clear();
			}
			return _this7;
		}

		(0, _createClass3.default)(JSONBlockStore, [{
			key: "open",
			value: function open() {
				// also add a transactional file class <file>.json, <file>.queue.json, <file>.<line> (line currently processing), <file>.done.json (lines processed)
				try {
					this.freefd = fs.openSync(this.path + "/free.json", "r+");
				} catch (e) {
					this.freefd = fs.openSync(this.path + "/free.json", "w+");
				}
				try {
					this.blocksfd = fs.openSync(this.path + "/blocks.json", "r+"); // r+ block offsets and lengths for ids
				} catch (e) {
					this.blocksfd = fs.openSync(this.path + "/blocks.json", "w+");
				}
				try {
					this.storefd = fs.openSync(this.path + "/store.json", "r+"); // the actual data
				} catch (e) {
					this.storefd = fs.openSync(this.path + "/store.json", "w+");
				}
				var blocks = fs.readFileSync(this.path + "/blocks.json", this.encoding),
				    // {<id>:{start:start,end:end,length:length}[,...]}
				freestat = fs.statSync(this.path + "/free.json"),
				    blocksstat = fs.statSync(this.path + "/blocks.json"),
				    storestat = fs.statSync(this.path + "/store.json");
				var free = fs.readFileSync(this.path + "/free.json", this.encoding); // [{start:start,end:end,length:length}[,...]]
				if (free.length === 0) {
					this.free = [];
				} else {
					free = free.trim();
					if (free[0] === ",") {
						free = free.substring(1);
					}
					if (free[free.length - 1] === ",") {
						free = free.substring(0, free.length - 1);
					}
					this.free = JSON.parse("[" + free + "]");
				}
				this.blocks = blocks.length > 0 ? JSON.parse(blocks) : {};
				this.freeSize = freestat.size;
				this.blocksSize = blocksstat.size;
				this.storeSize = storestat.size;
				this.opened = true;
				return true;
			}
		}, {
			key: "alloc",
			value: function alloc(length) {
				var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";

				var me = this;
				var block = void 0;
				if (!me.alloc.size) {
					me.alloc.size = Buffer.byteLength(blockString([0, 0], encoding), encoding);
					me.alloc.empty = bytePadEnd("null", me.alloc.size, " ", encoding);
				}
				for (var i = 0; i < me.free.length; i++) {
					block = me.free[i];
					if (block && block[1] - block[0] >= length) {
						var position = (me.alloc.size + 1) * i;
						me.free[i] = null;
						fs.writeSync(me.freefd, me.alloc.empty, position, encoding);
						return block;
					}
				}
				var start = me.storeSize === 0 ? 0 : me.storeSize + 1;
				return [start, start + length];
			}
		}, {
			key: "clear",
			value: function () {
				var _ref39 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee41() {
					return _regenerator2.default.wrap(function _callee41$(_context41) {
						while (1) {
							switch (_context41.prev = _context41.next) {
								case 0:
									if (!this.opened) {
										this.open();
									}
									fs.ftruncateSync(this.freefd);
									fs.ftruncateSync(this.blocksfd);
									fs.ftruncateSync(this.storefd);
									this.freeSize = 0;
									this.blocksSize = 0;
									this.storeSize = 0;
									this.free = [];
									this.blocks = {};

								case 9:
								case "end":
									return _context41.stop();
							}
						}
					}, _callee41, this);
				}));

				function clear() {
					return _ref39.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "compress",
			value: function compress() {
				var me = this;
				if (!me.opened) {
					me.open();
				}
				var newfree = [];
				me.freeSize = 0;
				me.free.forEach(function (block, i) {
					if (block) {
						newfree.push(block);
						var str = blockString(block, me.encoding) + ",";
						fs.writeSync(me.freefd, str, me.freeSize, me.encoding);
						me.freeSize += Buffer.byteLength(str, me.encoding);
					}
				});
				me.free = newfree;
				fs.ftruncateSync(me.freefd, me.freeSize);
				me.blocksSize = 1;
				me.storeSize = 0;
				fs.writeSync(me.blocksfd, "{", 0, me.encoding);
				(0, _keys2.default)(me.blocks).forEach(function (key, i) {
					var str = '"' + key + '":' + (0, _stringify2.default)(me.blocks[key]) + ",";
					fs.writeSync(me.blocksfd, str, me.blocksSize, me.encoding);
					me.blocksSize += Buffer.byteLength(str, me.encoding);
				});
				fs.writeSync(me.blocksfd, "}", me.blocksSize - 1, me.encoding);
				fs.ftruncateSync(me.blocksfd, me.blocksSize);
			}
		}, {
			key: "delete",
			value: function () {
				var _ref40 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee42(id) {
					var me, block, blanks, str, fposition;
					return _regenerator2.default.wrap(function _callee42$(_context42) {
						while (1) {
							switch (_context42.prev = _context42.next) {
								case 0:
									me = this;

									if (!me.opened) {
										me.open();
									}
									block = me.blocks[id];

									if (block) {
										blanks = bytePadEnd("", block[1] - block[0], me.encoding);

										delete me.blocks[id];
										fs.writeSync(me.storefd, blanks, block[0], "utf8"); // write blank padding
										me.free.push(block);
										str = blockString(block, me.encoding) + ",";

										fs.writeSync(me.freefd, str, me.freeSize, me.encoding);
										me.freeSize += Buffer.byteLength(str, me.encoding);
										str = (me.blocksSize === 0 ? '{' : ',') + '"' + id + '":null}';
										fposition = me.blocksSize === 0 ? 0 : me.blocksSize - 1;

										fs.writeSync(me.blocksfd, str, fposition, me.encoding);
										me.blocksSize = fposition + Buffer.byteLength(str, me.encoding);
									}

								case 4:
								case "end":
									return _context42.stop();
							}
						}
					}, _callee42, this);
				}));

				function _delete(_x74) {
					return _ref40.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref41 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee43(id) {
					var me, block, buffer, result;
					return _regenerator2.default.wrap(function _callee43$(_context43) {
						while (1) {
							switch (_context43.prev = _context43.next) {
								case 0:
									me = this;

									if (!me.opened) {
										me.open();
									}
									block = me.blocks[id];

									if (!block) {
										_context43.next = 8;
										break;
									}

									buffer = Buffer.alloc(block[1] - block[0]);

									fs.readSync(me.storefd, buffer, 0, block[1] - block[0], block[0]);
									result = JSON.parse(buffer.toString());
									return _context43.abrupt("return", (0, _get3.default)(JSONBlockStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(JSONBlockStore.prototype), "restore", this).call(this, result.value));

								case 8:
								case "end":
									return _context43.stop();
							}
						}
					}, _callee43, this);
				}));

				function get(_x75) {
					return _ref41.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref42 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee44(id, data) {
					var me, block, str, blen, freeblock, fposition;
					return _regenerator2.default.wrap(function _callee44$(_context44) {
						while (1) {
							switch (_context44.prev = _context44.next) {
								case 0:
									me = this;

									if (!me.opened) {
										me.open();
									}
									block = me.blocks[id];
									str = '{"id":"' + id + '","value":' + (0, _stringify2.default)(data) + '}';
									blen = Buffer.byteLength(str, 'utf8');

									if (!block) {
										_context44.next = 9;
										break;
									}

									if (!(block[0] + blen - 1 < block[1])) {
										_context44.next = 9;
										break;
									}

									// and update is same or smaller
									fs.writeSync(me.storefd, bytePadEnd(str, block[1] - block[0], me.encoding), block[0], me.encoding); // write the data with blank padding
									return _context44.abrupt("return");

								case 9:
									freeblock = me.alloc(blen, me.encoding); // find a free block large enough

									fs.writeSync(me.storefd, bytePadEnd(str, freeblock[1] - freeblock[0], me.encoding), freeblock[0]); // write the data with blank padding
									me.storeSize = Math.max(freeblock[1], me.storeSize);
									me.blocks[id] = freeblock; // update the blocks info
									if (block) {
										// free old block which was too small, if there was one
										fs.writeSync(me.storefd, bytePadEnd("", block[1] - block[0], " "), block[0], me.encoding); // write blank padding
										me.free.push(block);
										str = blockString(block, me.encoding) + ",";
										fs.writeSync(me.freefd, str, me.freeSize, me.encoding);
										me.freeSize += Buffer.byteLength(str, me.encoding);
									}
									str = (me.blocksSize === 0 ? '{' : ',') + '"' + id + '":' + (0, _stringify2.default)(freeblock) + "}";
									fposition = me.blocksSize === 0 ? 0 : me.blocksSize - 1;

									fs.writeSync(me.blocksfd, str, fposition, me.encoding);
									me.blocksSize = fposition + Buffer.byteLength(str, me.encoding);

								case 18:
								case "end":
									return _context44.stop();
							}
						}
					}, _callee44, this);
				}));

				function set(_x76, _x77) {
					return _ref42.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return JSONBlockStore;
	}(Store);

	var LevelUPStore = function (_Store6) {
		(0, _inherits3.default)(LevelUPStore, _Store6);

		function LevelUPStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, LevelUPStore);

			var _this8 = (0, _possibleConstructorReturn3.default)(this, (LevelUPStore.__proto__ || (0, _getPrototypeOf2.default)(LevelUPStore)).call(this, name, keyProperty, db));

			_this8.storage = db.levelUPClient(db.name + "/" + name); //db.levelUPClient(db.name);
			_this8.ready(clear);
			return _this8;
		}

		(0, _createClass3.default)(LevelUPStore, [{
			key: "clear",
			value: function () {
				var _ref43 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee45() {
					var me, promises, resolver, rejector, promise;
					return _regenerator2.default.wrap(function _callee45$(_context45) {
						while (1) {
							switch (_context45.prev = _context45.next) {
								case 0:
									me = this, promises = [];
									resolver = void 0, rejector = void 0;
									promise = new _promise2.default(function (resolve, reject) {
										resolver = resolve;rejector = reject;
									});

									me.storage.createKeyStream().on("data", function (key) {
										promises.push(me.delete(key, true));
									}).on("end", function () {
										_promise2.default.all(promises).then(function () {
											resolver(true);
										});
									}).on("error", function () {
										rejector(err);
									});
									return _context45.abrupt("return", promise);

								case 5:
								case "end":
									return _context45.stop();
							}
						}
					}, _callee45, this);
				}));

				function clear() {
					return _ref43.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref44 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee46(key) {
					var me;
					return _regenerator2.default.wrap(function _callee46$(_context46) {
						while (1) {
							switch (_context46.prev = _context46.next) {
								case 0:
									me = this;
									return _context46.abrupt("return", (0, _get3.default)(LevelUPStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LevelUPStore.prototype), "delete", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.del(key + ".json", {}, function (err) {
												if (err) {
													if (err.notFound) {
														resolve(true);
													} else {
														reject(err);
													}
												} else {
													resolve(true);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context46.stop();
							}
						}
					}, _callee46, this);
				}));

				function _delete(_x78) {
					return _ref44.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref45 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee47(key) {
					var me;
					return _regenerator2.default.wrap(function _callee47$(_context47) {
						while (1) {
							switch (_context47.prev = _context47.next) {
								case 0:
									me = this;
									return _context47.abrupt("return", (0, _get3.default)(LevelUPStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LevelUPStore.prototype), "get", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.get(key + ".json", {}, function (err, value) {
												if (err) {
													if (err.notFound) {
														resolve();
													} else {
														reject(err);
													}
												} else if (!value) {
													resolve();
												} else {
													resolve(JSON.parse(value));
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context47.stop();
							}
						}
					}, _callee47, this);
				}));

				function get(_x79) {
					return _ref45.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref46 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee48(key, value, normalize) {
					var me;
					return _regenerator2.default.wrap(function _callee48$(_context48) {
						while (1) {
							switch (_context48.prev = _context48.next) {
								case 0:
									me = this;
									return _context48.abrupt("return", (0, _get3.default)(LevelUPStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LevelUPStore.prototype), "set", this).call(this, key, value, normalize, function (normalized) {
										return new _promise2.default(function (resolve, reject) {
											me.storage.put(key + ".json", (0, _stringify2.default)(normalized), {}, function (err) {
												if (err) {
													reject(err);
												} else {
													resolve(true);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context48.stop();
							}
						}
					}, _callee48, this);
				}));

				function set(_x80, _x81, _x82) {
					return _ref46.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return LevelUPStore;
	}(Store);

	var LocalStore = function (_Store7) {
		(0, _inherits3.default)(LocalStore, _Store7);

		function LocalStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, LocalStore);

			var _this9 = (0, _possibleConstructorReturn3.default)(this, (LocalStore.__proto__ || (0, _getPrototypeOf2.default)(LocalStore)).call(this, name, keyProperty, db));

			if (typeof window !== "undefined") {
				_this9.storage = window.localStorage;
			} else {
				var _r = require,
				    LocalStorage = _r("./LocalStorage.js").LocalStorage;
				_this9.storage = new LocalStorage(db.name + "/" + name);
			}
			if (clear) {
				_this9.storage.clear();
			}
			return _this9;
		}

		(0, _createClass3.default)(LocalStore, [{
			key: "clear",
			value: function () {
				var _ref47 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee49() {
					return _regenerator2.default.wrap(function _callee49$(_context49) {
						while (1) {
							switch (_context49.prev = _context49.next) {
								case 0:
									this.storage.clear();
									return _context49.abrupt("return", true);

								case 2:
								case "end":
									return _context49.stop();
							}
						}
					}, _callee49, this);
				}));

				function clear() {
					return _ref47.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref48 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee50(key) {
					var _this10 = this;

					return _regenerator2.default.wrap(function _callee50$(_context50) {
						while (1) {
							switch (_context50.prev = _context50.next) {
								case 0:
									return _context50.abrupt("return", (0, _get3.default)(LocalStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LocalStore.prototype), "delete", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											_this10.storage.removeItem(key + ".json");
											resolve(true);
										});
									}));

								case 1:
								case "end":
									return _context50.stop();
							}
						}
					}, _callee50, this);
				}));

				function _delete(_x83) {
					return _ref48.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref49 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee51(key) {
					var me;
					return _regenerator2.default.wrap(function _callee51$(_context51) {
						while (1) {
							switch (_context51.prev = _context51.next) {
								case 0:
									me = this;
									return _context51.abrupt("return", (0, _get3.default)(LocalStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LocalStore.prototype), "get", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											var value = me.storage.getItem(key + ".json");
											if (!value) {
												resolve();
											} else {
												resolve(JSON.parse(value));
											}
										});
									}));

								case 2:
								case "end":
									return _context51.stop();
							}
						}
					}, _callee51, this);
				}));

				function get(_x84) {
					return _ref49.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref50 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee52(key, value, normalize) {
					var me;
					return _regenerator2.default.wrap(function _callee52$(_context52) {
						while (1) {
							switch (_context52.prev = _context52.next) {
								case 0:
									me = this;
									return _context52.abrupt("return", (0, _get3.default)(LocalStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LocalStore.prototype), "set", this).call(this, key, value, normalize, function (normalized) {
										return new _promise2.default(function (resolve, reject) {
											me.storage.setItem(key + ".json", (0, _stringify2.default)(normalized));
											resolve(true);
										});
									}));

								case 2:
								case "end":
									return _context52.stop();
							}
						}
					}, _callee52, this);
				}));

				function set(_x85, _x86, _x87) {
					return _ref50.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return LocalStore;
	}(Store);

	var LocalForageStore = function (_Store8) {
		(0, _inherits3.default)(LocalForageStore, _Store8);

		function LocalForageStore(name, keyProperty, db, clear) {
			(0, _classCallCheck3.default)(this, LocalForageStore);

			var _this11 = (0, _possibleConstructorReturn3.default)(this, (LocalForageStore.__proto__ || (0, _getPrototypeOf2.default)(LocalForageStore)).call(this, name, keyProperty, db));

			if (typeof window !== "undefined") {
				//window.localforage.config({name:"ReasonDB"})
				_this11.storage = window.localforage;
			} else {
				var _ret13;

				return _ret13 = new LocalStore(name, keyProperty, db, clear), (0, _possibleConstructorReturn3.default)(_this11, _ret13);
			}
			if (clear) {
				_this11.storage.clear();
			}
			return _this11;
		}

		(0, _createClass3.default)(LocalForageStore, [{
			key: "clear",
			value: function () {
				var _ref51 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee53() {
					return _regenerator2.default.wrap(function _callee53$(_context53) {
						while (1) {
							switch (_context53.prev = _context53.next) {
								case 0:
									_context53.prev = 0;
									_context53.next = 3;
									return this.storage.clear();

								case 3:
									_context53.next = 8;
									break;

								case 5:
									_context53.prev = 5;
									_context53.t0 = _context53["catch"](0);

									console.log(_context53.t0);

								case 8:
									return _context53.abrupt("return", true);

								case 9:
								case "end":
									return _context53.stop();
							}
						}
					}, _callee53, this, [[0, 5]]);
				}));

				function clear() {
					return _ref51.apply(this, arguments);
				}

				return clear;
			}()
		}, {
			key: "delete",
			value: function () {
				var _ref52 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee54(key) {
					var me;
					return _regenerator2.default.wrap(function _callee54$(_context54) {
						while (1) {
							switch (_context54.prev = _context54.next) {
								case 0:
									me = this;
									return _context54.abrupt("return", (0, _get3.default)(LocalForageStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LocalForageStore.prototype), "delete", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.removeItem(key + ".json").then(function () {
												resolve(true);
											});
										});
									}));

								case 2:
								case "end":
									return _context54.stop();
							}
						}
					}, _callee54, this);
				}));

				function _delete(_x88) {
					return _ref52.apply(this, arguments);
				}

				return _delete;
			}()
		}, {
			key: "get",
			value: function () {
				var _ref53 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee55(key) {
					var me;
					return _regenerator2.default.wrap(function _callee55$(_context55) {
						while (1) {
							switch (_context55.prev = _context55.next) {
								case 0:
									me = this;
									return _context55.abrupt("return", (0, _get3.default)(LocalForageStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LocalForageStore.prototype), "get", this).call(this, key, function () {
										return new _promise2.default(function (resolve, reject) {
											me.storage.getItem(key + ".json").then(function (result) {
												if (!result) {
													resolve();
												} else {
													resolve(result);
												}
											});
										});
									}));

								case 2:
								case "end":
									return _context55.stop();
							}
						}
					}, _callee55, this);
				}));

				function get(_x89) {
					return _ref53.apply(this, arguments);
				}

				return get;
			}()
		}, {
			key: "set",
			value: function () {
				var _ref54 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee56(key, value, normalize) {
					var me;
					return _regenerator2.default.wrap(function _callee56$(_context56) {
						while (1) {
							switch (_context56.prev = _context56.next) {
								case 0:
									me = this;
									return _context56.abrupt("return", (0, _get3.default)(LocalForageStore.prototype.__proto__ || (0, _getPrototypeOf2.default)(LocalForageStore.prototype), "set", this).call(this, key, value, normalize, function (normalized) {
										return new _promise2.default(function (resolve, reject) {
											me.storage.setItem(key + ".json", normalized).then(function () {
												resolve(true);
											});
										});
									}));

								case 2:
								case "end":
									return _context56.stop();
							}
						}
					}, _callee56, this);
				}));

				function set(_x90, _x91, _x92) {
					return _ref54.apply(this, arguments);
				}

				return set;
			}()
		}]);
		return LocalForageStore;
	}(Store);

	var ReasonDB = function () {
		function ReasonDB(name) {
			var keyProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "@key";
			var storageType = arguments[2];
			var clear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
			var activate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
			var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
			(0, _classCallCheck3.default)(this, ReasonDB);
			// make the additional args part of a config object, add a config option for active or passive objects
			var db = this;
			if (typeof storageType === "undefined") {
				console.log("WARNING: storageType undefined, defaulting to ReasonDB.MemStore.");
				storageType = MemStore;
			}
			db.name = name;
			db.keyProperty = keyProperty;
			db.storageType = storageType;
			db.clear = clear;
			db.classes = {};
			db.activate = activate;
			(0, _keys2.default)(options).forEach(function (key) {
				db[key] = options[key];
			});

			delete Object.index;
			db.index(Object, keyProperty, storageType, clear);

			db.Pattern = function () {
				function Pattern(projection, classVars, when, then) {
					(0, _classCallCheck3.default)(this, Pattern);

					var me = this;
					me.projection = projection;
					me.classNames = {};
					Object.defineProperty(me, "classVars", { configurable: true, writable: true, value: classVars });
					(0, _keys2.default)(classVars).forEach(function (classVar) {
						me.classNames[classVar] = me.classVars[classVar].name;
					});
					Object.defineProperty(me, "when", { configurable: true, writable: true, value: when });
					Object.defineProperty(me, "then", { configurable: true, writable: true, value: then });
					Pattern.index.put(me);
				}

				(0, _createClass3.default)(Pattern, [{
					key: "toJSON",
					value: function toJSON() {
						var me = this,
						    result = {};
						result[db.keyProperty] = me[db.keyProperty];
						result.classVars = me.classNames;
						result.when = me.when;
						return result;
					}
				}]);
				return Pattern;
			}();
			db.index(Array, keyProperty, storageType, clear);
			db.index(Date, keyProperty, storageType, clear);
			db.index(db.Pattern, keyProperty, storageType, clear);
			db.patterns = {};
		}

		(0, _createClass3.default)(ReasonDB, [{
			key: "deleteIndex",
			value: function () {
				var _ref55 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee57(cls) {
					return _regenerator2.default.wrap(function _callee57$(_context57) {
						while (1) {
							switch (_context57.prev = _context57.next) {
								case 0:
									if (!cls.index) {
										_context57.next = 11;
										break;
									}

									_context57.prev = 1;
									_context57.next = 4;
									return cls.index.clear();

								case 4:
									_context57.next = 9;
									break;

								case 6:
									_context57.prev = 6;
									_context57.t0 = _context57["catch"](1);

									console.log(_context57.t0);

								case 9:
									delete cls.index;;

								case 11:
								case "end":
									return _context57.stop();
							}
						}
					}, _callee57, this, [[1, 6]]);
				}));

				function deleteIndex(_x97) {
					return _ref55.apply(this, arguments);
				}

				return deleteIndex;
			}()
		}, {
			key: "index",
			value: function index(cls, keyProperty, storageType, clear) {
				var db = this;
				keyProperty = keyProperty ? keyProperty : db.keyProperty;
				storageType = storageType ? storageType : db.storageType;
				clear = clear ? clear : db.clear;
				if (!cls.index || clear) {
					cls.index = new Index(cls, keyProperty, db, storageType, clear);
					db.classes[cls.name] = cls;
				}
				return cls.index;
			}
		}, {
			key: "delete",
			value: function _delete() {
				var db = this;
				return {
					from: function from(classVars) {
						return {
							where: function where(pattern) {
								return {
									exec: function exec() {
										return new _promise2.default(function (resolve, reject) {
											db.select().from(classVars).where(pattern).exec().then(function (cursor) {
												cursor.count().then(function (count) {
													if (count > 0) {
														var _ret14 = function () {
															var promises = [];
															(0, _keys2.default)(cursor.classVarMap).forEach(function (classVar) {
																var i = cursor.classVarMap[classVar],
																    cls = classVars[classVar];
																cursor.cxproduct.collections[i].forEach(function (id) {
																	promises.push(cls.index.delete(id).catch(function (e) {
																		console.log(e);
																	}));
																});
															});
															_promise2.default.all(promises).then(function (results) {
																resolve(results);
															}).catch(function (e) {
																console.log(e);
															});
															return {
																v: void 0
															};
														}();

														if ((typeof _ret14 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret14)) === "object") return _ret14.v;
													}
													resolve([]);
												});
											});
										});
									}
								};
							}
						};
					}
				};
			}
		}, {
			key: "insert",
			value: function insert() {
				var db = this,
				    objects = [].slice.call(arguments, 0);
				return {
					into: function into(cls) {
						var classes = void 0;
						if (arguments.length === 1) {
							classes = new (Function.prototype.bind.apply(Array, [null].concat((0, _toConsumableArray3.default)(objects))))();
							classes.forEach(function (object, i) {
								classes[i] = cls;
							});
						} else {
							var _slice;

							classes = (_slice = [].slice).call.apply(_slice, Array.prototype.slice.call(arguments).concat([0]));
						}
						return {
							exec: function exec() {
								var activity = new Activity();
								objects.forEach(function (object, i) {
									activity.step(function () {
										var instance = void 0;
										if (object instanceof cls) {
											instance = object;
										} else if (cls.fromJSON) {
											instance = cls.fromJSON(object);
										} else {
											instance = (0, _create2.default)(cls.prototype);
											Object.defineProperty(instance, "constructor", { configurable: true, writable: true, value: cls });
											(0, _keys2.default)(object).forEach(function (key) {
												instance[key] = object[key];
											});
										}
										if (!cls.index) {
											cls.index = db.index(cls);
										}
										return cls.index.put(instance);
									});
								});
								activity.step(function () {
									activity.results.forEach(function (instance) {
										stream(instance, db);
									});
								});
								return activity.exec();
							}
						};
					},
					exec: function exec() {
						var classes = [];
						objects.forEach(function (object) {
							classes.push(object.constructor);
						});
						return this.into.apply(this, classes).exec();
					}
				};
			}
		}, {
			key: "select",
			value: function select(projection) {
				var db = this;
				return {
					first: function first(count) {
						var me = this;
						me.firstCount = count;
						return {
							from: function from(classVars) {
								return me.from(classVars);
							}
						};
					},
					random: function random(count) {
						var me = this;
						me.randomCount = count;
						return {
							from: function from(classVars) {
								return me.from(classVars);
							}
						};
					},
					sample: function sample(confidence, range) {
						var me = this;
						me.sampleSpec = { confidence: confidence, range: range };
						return {
							from: function from(classVars) {
								return me.from(classVars);
							}
						};
					},
					from: function from(classVars) {
						var select = this;
						return {
							where: function where(pattern, restrictVar, instanceId) {
								return {
									orderBy: function orderBy(ordering) {
										// {$o: {name: "asc"}}
										var me = this;
										me.ordering = ordering;
										return {
											exec: function exec() {
												return me.exec();
											}
										};
									},
									exec: function exec(ordering) {
										return new _promise2.default(function (resolve, reject) {
											var matches = {},
											    restrictright = {},
											    matchvars = [],
											    activity = new Activity();
											if (typeof pattern === "function") {
												(function () {
													var classes = [];
													(0, _keys2.default)(classVars).forEach(function (key) {
														classes.push(classVars[key]);
													});
													asynchronize(pattern.apply(undefined, classes)).then(function (rows) {
														var cursor = new Cursor(classes, rows, projection, classVars);
														if (select.firstCount) {
															cursor.first(select.firstCount).then(function (rows) {
																resolve(new Cursor(classes, rows));
															});
														} else if (select.randomCount) {
															cursor.random(select.randomCount).then(function (rows) {
																resolve(new Cursor(classes, rows));
															});
														} else if (select.sampleSpec) {
															cursor.sample(select.sampleSpec.confidence, select.sampleSpec.range).then(function (rows) {
																resolve(new Cursor(classes, rows));
															});
														} else {
															resolve(cursor); // ,matches
														}
													});
												})();
											} else {
												(0, _keys2.default)(pattern).forEach(function (classVar) {
													if (!classVars[classVar]) {
														return;
													}
													if (!classVars[classVar].index) {
														db.index(classVars[classVar]);
													}
													matchvars.push(classVar);
													activity.step(function () {
														return classVars[classVar].index.match(pattern[classVar], classVars, matches, restrictright, classVar);
													});
												});
												activity.step(function () {
													var pass = true;
													activity.results.every(function (result, i) {
														if (result.length === 0) {
															pass = false;
														}
														return pass;
													});
													if (!pass) {
														resolve(new Cursor([], new CXProduct([]), projection, {}), matches);
													} else {
														var _ret16 = function () {
															var classes = [],
															    collections = [],
															    promises = [],
															    vars = [],
															    classVarMap = {},
															    filter = function filter(row, index, cxp) {
																return row.every(function (item, i) {
																	if (!item) {
																		return false;
																	}
																	if (i === 0 || !restrictright[i]) {
																		return true;
																	}
																	var prev = row[i - 1];
																	return !restrictright[i][prev] || restrictright[i][prev].indexOf(item) >= 0;
																});
															};
															(0, _keys2.default)(classVars).forEach(function (classVar) {
																if (matches[classVar]) {
																	collections.push(matches[classVar]);
																	classes.push(classVars[classVar]);
																}
															});
															var cursor = new Cursor(classes, new CXProduct(collections, filter), projection, classVars);
															if (select.firstCount) {
																cursor.first(select.firstCount).then(function (rows) {
																	resolve(new Cursor(classes, rows));
																});
															} else if (select.randomCount) {
																cursor.random(select.randomCount).then(function (rows) {
																	resolve(new Cursor(classes, rows));
																});
															} else if (select.sampleSpec) {
																cursor.sample(select.sampleSpec.confidence, select.sampleSpec.range).then(function (rows) {
																	resolve(new Cursor(classes, rows));
																});
															} else {
																resolve(cursor, matches);
															}
															return {
																v: null
															};
														}();

														if ((typeof _ret16 === "undefined" ? "undefined" : (0, _typeof3.default)(_ret16)) === "object") return _ret16.v;
													}
												}).exec();
											}
										});
									}
								};
							}
						};
					}
				};
			}
		}, {
			key: "update",
			value: function update(classVars) {
				var db = this;
				return {
					set: function set(values) {
						return {
							where: function where(pattern) {
								return {
									exec: function exec() {
										return new _promise2.default(function (resolve, reject) {
											var updated = {},
											    promises = [];
											db.select().from(classVars).where(pattern).exec().then(function (cursor, matches) {
												var vars = (0, _keys2.default)(classVars);
												promises.push(cursor.forEach(function (row) {
													row.forEach(function (object, i) {
														var classVar = vars[i];
														var activated = void 0;
														if (values[classVar]) {
															(0, _keys2.default)(values[classVar]).forEach(function (property) {
																var value = values[classVar][property];
																if (value && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object") {
																	var sourcevar = (0, _keys2.default)(value)[0];
																	if (classVars[sourcevar]) {
																		var j = vars.indexOf(sourcevar);
																		value = row[j][value[sourcevar]];
																	}
																}
																activated = activated === false || typeof object[property] === "undefined" ? false : db.activate;
																if (object[property] !== value) {
																	object[property] = value;
																	updated[object[db.keyProperty]] = true;
																}
															});
															if (!activated) {
																promises.push(db.save(object).exec());
															}
														}
													});
												}));
											});
											_promise2.default.all(promises).then(function () {
												resolve((0, _keys2.default)(updated).length);
											});
										});
									}
								};
							}
						};
					}
				};
			}
		}, {
			key: "when",
			value: function when(whenPattern) {
				var db = this;
				return {
					from: function from(classVars) {
						return {
							select: function select(projection) {
								var pattern = new db.Pattern(projection, classVars, whenPattern);
								//	promise = new Promise((resolve,reject) => { pattern.resolver = resolve; pattern.rejector = reject; });
								(0, _keys2.default)(whenPattern).forEach(function (classVar) {
									if (classVar[0] !== "$") {
										return;
									}
									var cls = classVars[classVar];
									if (!db.patterns[cls.name]) {
										db.patterns[cls.name] = {};
									}
									(0, _keys2.default)(whenPattern[classVar]).forEach(function (property) {
										if (!db.patterns[cls.name][property]) {
											db.patterns[cls.name][property] = {};
										}
										if (!db.patterns[cls.name][property][pattern[db.keyProperty]]) {
											db.patterns[cls.name][property][pattern[db.keyProperty]] = {};
										}
										if (!db.patterns[cls.name][property][pattern[db.keyProperty]][classVar]) {
											db.patterns[cls.name][property][pattern[db.keyProperty]][classVar] = pattern;
										}
									});
								});
								return {
									then: function then(f) {
										Object.defineProperty(pattern, "action", { configurable: true, writable: true, value: f });
									}
								};
							}
						};
					}
				};
			}
		}]);
		return ReasonDB;
	}();

	ReasonDB.prototype.save = ReasonDB.prototype.insert;
	ReasonDB.LocalStore = LocalStore;
	ReasonDB.MemStore = MemStore;
	ReasonDB.LocalForageStore = LocalForageStore;
	ReasonDB.IronCacheStore = IronCacheStore;
	ReasonDB.RedisStore = RedisStore;
	ReasonDB.MemcachedStore = MemcachedStore;
	ReasonDB.LevelUPStore = LevelUPStore;
	ReasonDB.JSONBlockStore = JSONBlockStore;
	ReasonDB.Activity = Activity;
	if (typeof module !== "undefined") {
		module.exports = ReasonDB;
	}
	if (typeof window !== "undefined") {
		window.ReasonDB = ReasonDB;
	}
})();