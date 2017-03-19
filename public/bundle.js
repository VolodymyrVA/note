/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n        value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _LowArray = __webpack_require__(1);\n\nvar _LowArray2 = _interopRequireDefault(_LowArray);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LowArrayApp = function () {\n        function LowArrayApp() {\n                _classCallCheck(this, LowArrayApp);\n        }\n\n        _createClass(LowArrayApp, [{\n                key: \"init\",\n                value: function init() {\n                        var a1 = new _LowArray2.default();\n\n                        a1.highArray();\n\n                        a1.insert(16);\n                        a1.insert(67);\n                        a1.insert(0);\n                        a1.insert(78);\n                        a1.insert(45);\n                        a1.insert(32);\n                        a1.insert(89);\n                        a1.insert(94);\n                        a1.insert(25);\n                        a1.insert(10);\n\n                        var searchKey = 0;\n                        if (a1.booleanFind(searchKey)) {\n                                console.log(\"Found \" + searchKey);\n                        } else {\n                                console.log(\"Can't find \" + searchKey);\n                        }\n\n                        a1.booleanDelete(0);\n                        a1.booleanDelete(94);\n\n                        a1.display();\n\n                        console.log(a1.a);\n                }\n        }]);\n\n        return LowArrayApp;\n}();\n\nexports.default = LowArrayApp;\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/LowArrayApp.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/LowArrayApp.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LowArray = function () {\n    function LowArray() {\n        _classCallCheck(this, LowArray);\n\n        this.a;\n        this.nElems;\n    }\n\n    _createClass(LowArray, [{\n        key: \"highArray\",\n        value: function highArray(max) {\n            this.a = [];\n            this.nElems = 0;\n        }\n    }, {\n        key: \"booleanFind\",\n        value: function booleanFind(searchKey) {\n            for (var i = 0; i < this.nElems; i++) {\n                if (this.a[i] == searchKey) break;\n                if (i == this.nElems) return false;else return true;\n            }\n        }\n    }, {\n        key: \"insert\",\n        value: function insert(value) {\n            this.a[this.nElems] = value;\n            this.nElems++;\n        }\n    }, {\n        key: \"booleanDelete\",\n        value: function booleanDelete(value) {\n            var j = void 0;\n            for (j = 0; j < this.nElems; j++) {\n                if (value == this.a[j]) break;\n            }\n            if (j == this.nElems) return false;else {\n                for (var k = j; k < this.nElems; k++) {\n                    this.a[k] = this.a[k + 1];\n                }\n                this.a.pop();\n                this.nElems--;\n                return true;\n            }\n        }\n    }, {\n        key: \"display\",\n        value: function display() {\n            for (var i = 0; i < this.nElems; i++) {\n                console.log(this.a[i] + \"\");\n            }\n        }\n    }]);\n\n    return LowArray;\n}();\n\nexports.default = LowArray;\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/LowArray.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/LowArray.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _LowArrayApp = __webpack_require__(0);\n\nvar _LowArrayApp2 = _interopRequireDefault(_LowArrayApp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar lowArrayApp = new _LowArrayApp2.default();\nlowArrayApp.init();\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ })
/******/ ]);