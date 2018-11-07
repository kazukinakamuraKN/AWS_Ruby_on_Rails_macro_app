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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/ec2-user/environment/macro_app/app/javascript/packs/application.js: Unexpected token (1:0)\n\n> 1 | <template>\n    | ^\n  2 |   <div id=\"app\">\n  3 |     Hello Vue!\n  4 |   </div>\n    at Parser.raise (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:3939:15)\n    at Parser.unexpected (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5248:16)\n    at Parser.parseExprAtom (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:6328:20)\n    at Parser.parseExprSubscripts (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5924:21)\n    at Parser.parseMaybeUnary (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5903:21)\n    at Parser.parseExprOps (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5812:21)\n    at Parser.parseMaybeConditional (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5784:21)\n    at Parser.parseMaybeAssign (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5731:21)\n    at Parser.parseExpression (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:5684:21)\n    at Parser.parseStatementContent (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:7267:21)\n    at Parser.parseStatement (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:7153:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:7707:23)\n    at Parser.parseBlockBody (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:7694:10)\n    at Parser.parseTopLevel (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:7118:10)\n    at Parser.parse (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:8521:17)\n    at parse (/home/ec2-user/environment/macro_app/node_modules/@babel/parser/lib/index.js:10513:38)\n    at parser (/home/ec2-user/environment/macro_app/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/home/ec2-user/environment/macro_app/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/home/ec2-user/environment/macro_app/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/home/ec2-user/environment/macro_app/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/home/ec2-user/environment/macro_app/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })

/******/ });
//# sourceMappingURL=application-aa86c902337cae4ce6ec.js.map