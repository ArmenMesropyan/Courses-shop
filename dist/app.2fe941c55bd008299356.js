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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/materialize-css/dist/css/materialize.min.css":
/*!********************************************************************!*\
  !*** ../node_modules/materialize-css/dist/css/materialize.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../node_modules/materialize-css/dist/css/materialize.min.css?");

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/main.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/helpers/index.js\");\n/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ \"../node_modules/materialize-css/dist/css/materialize.min.css\");\n/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"generateRouter\"])();\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/components/course/course.js":
/*!****************************************!*\
  !*** ./js/components/course/course.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Course = function Course() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      image = _ref.image,\n      name = _ref.name,\n      description = _ref.description,\n      download = _ref.download,\n      link = _ref.link;\n\n  return \"\\n    <div class=\\\"card\\\">\\n        <div class=\\\"courses__img card-image\\\">\\n            <img src=\\\"\".concat(image || '', \"\\\">\\n        </div>\\n        <div class=\\\"courses__content card-content\\\">\\n            <h3 class=\\\"courses__name card-title\\\">\").concat(name || 'Empty Name', \"</h3>\\n            <p class=\\\"courses__desc\\\">\").concat(description || 'Empty Description', \"</p>\\n            <a href=\\\"\").concat(download, \"\\\" target=\\\"_blank\\\" class=\\\"courses__download\\\">Download this course</a>\\n        </div>\\n        <div class=\\\"card-action\\\">\\n            <a href=\\\"\").concat(link, \"\\\" target=\\\"_blank\\\" class=\\\"courses__link\\\">More about this course</a>\\n        </div>\\n    </div>\\n\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Course);\n\n//# sourceURL=webpack:///./js/components/course/course.js?");

/***/ }),

/***/ "./js/components/course/index.js":
/*!***************************************!*\
  !*** ./js/components/course/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course */ \"./js/components/course/course.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_course__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/components/course/index.js?");

/***/ }),

/***/ "./js/components/coursesActions/coursesActions.css":
/*!*********************************************************!*\
  !*** ./js/components/coursesActions/coursesActions.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/coursesActions/coursesActions.css?");

/***/ }),

/***/ "./js/components/coursesActions/coursesActions.js":
/*!********************************************************!*\
  !*** ./js/components/coursesActions/coursesActions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coursesActions_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesActions.css */ \"./js/components/coursesActions/coursesActions.css\");\n/* harmony import */ var _coursesActions_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coursesActions_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar CoursesActions = function CoursesActions(courses) {\n  return courses.map(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        _ref2$ = _ref2[1],\n        name = _ref2$.name,\n        image = _ref2$.image;\n\n    return \"\\n    <li class=\\\"courses-actions__item\\\">\\n        <a href=\\\"/change-course*\".concat(key, \"\\\" class=\\\"courses-actions__name collection-item\\\">\\n            <img class=\\\"courses-actions__img\\\" src=\\\"\").concat(image, \"\\\"/>\\n            \").concat(name, \"\\n            <div class=\\\"courses-actions__right badge\\\">\\n                <button class=\\\"courses-actions__delete\\\" data-key=\\\"\").concat(key, \"\\\">Delete</button>\\n            </div>\\n        </a>\\n    </li>\\n\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursesActions);\n\n//# sourceURL=webpack:///./js/components/coursesActions/coursesActions.js?");

/***/ }),

/***/ "./js/components/coursesActions/index.js":
/*!***********************************************!*\
  !*** ./js/components/coursesActions/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coursesActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesActions */ \"./js/components/coursesActions/coursesActions.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_coursesActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/components/coursesActions/index.js?");

/***/ }),

/***/ "./js/components/coursesList/coursesList.css":
/*!***************************************************!*\
  !*** ./js/components/coursesList/coursesList.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/coursesList/coursesList.css?");

/***/ }),

/***/ "./js/components/coursesList/coursesList.js":
/*!**************************************************!*\
  !*** ./js/components/coursesList/coursesList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coursesList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesList.css */ \"./js/components/coursesList/coursesList.css\");\n/* harmony import */ var _coursesList_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coursesList_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./js/components/index.js\");\n\n\n\nvar CoursesList = function CoursesList(courses) {\n  if (!courses) return '';\n  var res = Object.values(courses).map(function (course) {\n    return \"\\n        <li class=\\\"courses__item\\\">\\n            \".concat(Object(___WEBPACK_IMPORTED_MODULE_1__[\"Course\"])(course), \"\\n        </li>\\n    \");\n  });\n  return \"\\n        <section class=\\\"courses\\\">\\n            <div class=\\\"container\\\">\\n                <ul class=\\\"courses__list\\\">\\n                    \".concat(res, \"\\n                </ul>\\n            </div>\\n        </section>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursesList);\n\n//# sourceURL=webpack:///./js/components/coursesList/coursesList.js?");

/***/ }),

/***/ "./js/components/coursesList/index.js":
/*!********************************************!*\
  !*** ./js/components/coursesList/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coursesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesList */ \"./js/components/coursesList/coursesList.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_coursesList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/components/coursesList/index.js?");

/***/ }),

/***/ "./js/components/createInputs/createInputs.js":
/*!****************************************************!*\
  !*** ./js/components/createInputs/createInputs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CreateInputs = function CreateInputs() {\n  return \"\\n        <div class=\\\"input-field\\\">\\n            <input placeholder=\\\"Course Name\\\" id=\\\"course_name\\\" type=\\\"text\\\">\\n            <label for=\\\"course_name\\\" class=\\\"visually-hidden\\\">Course Name</label>\\n        </div>\\n        <div class=\\\"input-field\\\">\\n            <input placeholder=\\\"Course Download Link\\\" id=\\\"course_download\\\" type=\\\"text\\\">\\n            <label for=\\\"course_download\\\" class=\\\"visually-hidden\\\">Course Download Link</label>\\n        </div>\\n        <div class=\\\"input-field\\\">\\n            <input placeholder=\\\"Course Image\\\" id=\\\"course_image\\\" type=\\\"text\\\">\\n            <label for=\\\"course_image\\\" class=\\\"visually-hidden\\\">Course Image</label>\\n        </div>\\n        <div class=\\\"input-field\\\">\\n            <textarea placeholder=\\\"Course Description\\\" id=\\\"course_desc\\\" class=\\\"materialize-textarea\\\"></textarea>\\n            <label for=\\\"course_desc\\\" class=\\\"visually-hidden\\\">Course Description</label>\\n        </div>\\n        <div class=\\\"input-field\\\">\\n            <input placeholder=\\\"Course Link\\\" id=\\\"course_link\\\" type=\\\"text\\\">\\n            <label for=\\\"course_link\\\" class=\\\"visually-hidden\\\">Course Link</label>\\n        </div>\\n    \";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateInputs);\n\n//# sourceURL=webpack:///./js/components/createInputs/createInputs.js?");

/***/ }),

/***/ "./js/components/createInputs/index.js":
/*!*********************************************!*\
  !*** ./js/components/createInputs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createInputs */ \"./js/components/createInputs/createInputs.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_createInputs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/components/createInputs/index.js?");

/***/ }),

/***/ "./js/components/googleIcon/googleIcon.css":
/*!*************************************************!*\
  !*** ./js/components/googleIcon/googleIcon.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/googleIcon/googleIcon.css?");

/***/ }),

/***/ "./js/components/googleIcon/googleIcon.js":
/*!************************************************!*\
  !*** ./js/components/googleIcon/googleIcon.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _googleIcon_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleIcon.css */ \"./js/components/googleIcon/googleIcon.css\");\n/* harmony import */ var _googleIcon_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_googleIcon_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar GoogleIcon = function GoogleIcon() {\n  return \"\\n        <div class=\\\"google-auth\\\">\\n            <button type=\\\"button\\\" class=\\\"google-auth__link\\\" id=\\\"google-sign\\\">\\n                Sign in with Google!\\n            </button>\\n        </div>\\n    \";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleIcon);\n\n//# sourceURL=webpack:///./js/components/googleIcon/googleIcon.js?");

/***/ }),

/***/ "./js/components/googleIcon/index.js":
/*!*******************************************!*\
  !*** ./js/components/googleIcon/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _googleIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleIcon */ \"./js/components/googleIcon/googleIcon.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_googleIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/components/googleIcon/index.js?");

/***/ }),

/***/ "./js/components/index.js":
/*!********************************!*\
  !*** ./js/components/index.js ***!
  \********************************/
/*! exports provided: GoogleIcon, Navigation, logOut, CoursesList, Course, CreateInputs, CoursesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _googleIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleIcon */ \"./js/components/googleIcon/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GoogleIcon\", function() { return _googleIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./js/components/navigation/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return _navigation__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"logOut\", function() { return _navigation__WEBPACK_IMPORTED_MODULE_1__[\"logOut\"]; });\n\n/* harmony import */ var _coursesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coursesList */ \"./js/components/coursesList/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CoursesList\", function() { return _coursesList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course */ \"./js/components/course/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Course\", function() { return _course__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _createInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createInputs */ \"./js/components/createInputs/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateInputs\", function() { return _createInputs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _coursesActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coursesActions */ \"./js/components/coursesActions/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CoursesActions\", function() { return _coursesActions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/components/index.js?");

/***/ }),

/***/ "./js/components/navigation/index.js":
/*!*******************************************!*\
  !*** ./js/components/navigation/index.js ***!
  \*******************************************/
/*! exports provided: Navigation, logOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./js/components/navigation/navigation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"logOut\", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__[\"logOut\"]; });\n\n\n\n\n//# sourceURL=webpack:///./js/components/navigation/index.js?");

/***/ }),

/***/ "./js/components/navigation/navigation.css":
/*!*************************************************!*\
  !*** ./js/components/navigation/navigation.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/components/navigation/navigation.css?");

/***/ }),

/***/ "./js/components/navigation/navigation.js":
/*!************************************************!*\
  !*** ./js/components/navigation/navigation.js ***!
  \************************************************/
/*! exports provided: Navigation, logOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logOut\", function() { return logOut; });\n/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.css */ \"./js/components/navigation/navigation.css\");\n/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./js/helpers/index.js\");\n\n\n\nfunction logOut(e) {\n  e.preventDefault();\n  _helpers__WEBPACK_IMPORTED_MODULE_1__[\"cookieActions\"].removeCookie('googleAuthId');\n  location.replace('/');\n}\n\nvar Navigation = function Navigation() {\n  var isRegister = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"cookieActions\"].getCookie('googleAuthId');\n  return \"\\n        <nav class=\\\"main-nav grey darken-2\\\">\\n            <div class=\\\"container\\\">\\n                <div class=\\\"nav-wrapper\\\">\\n                    <a href=\\\"/\\\" class=\\\"main-nav__logo brand-logo\\\">Courses Tracker</a>\\n                    <ul id=\\\"nav-mobile\\\" class=\\\"right\\\">\\n                        \".concat(isRegister ? \"\\n                            <li>\\n                                <a href=\\\"/my-courses\\\">My Courses</a>\\n                            </li>\\n                            <li>\\n                                <a href=\\\"/create-course\\\">Create Course</a>\\n                            </li>\\n                            <li>\\n                                <a class=\\\"registered\\\">Log Out</a>\\n                            </li>\\n                        \" : \"\\n                            <li>\\n                                <a href=\\\"/authentication\\\">Log In</a>\\n                            </li>\\n                        \", \"\\n                    </ul>\\n                </div>\\n            </div>\\n        </nav>\\n    \");\n};\n\n\n\n//# sourceURL=webpack:///./js/components/navigation/navigation.js?");

/***/ }),

/***/ "./js/helpers/cookie/cookie.js":
/*!*************************************!*\
  !*** ./js/helpers/cookie/cookie.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cookieActions = {\n  setCookie: function setCookie(cname, cvalue, exdays) {\n    var date = new Date();\n    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);\n    var expires = \"expires=\".concat(date.toUTCString());\n    document.cookie = \"\".concat(cname, \"=\").concat(cvalue, \";\").concat(expires, \";path=/\");\n  },\n  getCookie: function getCookie(cname) {\n    var name = \"\".concat(cname, \"=\");\n    var ca = document.cookie.split(';');\n\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n\n      while (c.charAt(0) === ' ') {\n        c = c.substring(1);\n      }\n\n      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);\n    }\n\n    return '';\n  },\n  checkCookie: function checkCookie(cname) {\n    var user = this.getCookie(cname);\n    if (user !== '') return true;\n    return false;\n  },\n  removeCookie: function removeCookie(name) {\n    document.cookie = \"\".concat(name, \"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cookieActions);\n\n//# sourceURL=webpack:///./js/helpers/cookie/cookie.js?");

/***/ }),

/***/ "./js/helpers/cookie/index.js":
/*!************************************!*\
  !*** ./js/helpers/cookie/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ \"./js/helpers/cookie/cookie.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/helpers/cookie/index.js?");

/***/ }),

/***/ "./js/helpers/deleteTextNodes/deleteTextNodes.js":
/*!*******************************************************!*\
  !*** ./js/helpers/deleteTextNodes/deleteTextNodes.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar deleteTextNodes = function deleteTextNodes(selector) {\n  var elem = document.querySelector(selector);\n  var childs = elem.childNodes;\n\n  for (var i = 0; i < childs.length; i++) {\n    if (childs[i].nodeType === 3) childs[i].remove();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deleteTextNodes);\n\n//# sourceURL=webpack:///./js/helpers/deleteTextNodes/deleteTextNodes.js?");

/***/ }),

/***/ "./js/helpers/deleteTextNodes/index.js":
/*!*********************************************!*\
  !*** ./js/helpers/deleteTextNodes/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deleteTextNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTextNodes */ \"./js/helpers/deleteTextNodes/deleteTextNodes.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_deleteTextNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/helpers/deleteTextNodes/index.js?");

/***/ }),

/***/ "./js/helpers/firebase/firebase.js":
/*!*****************************************!*\
  !*** ./js/helpers/firebase/firebase.js ***!
  \*****************************************/
/*! exports provided: firebaseConfig, firebaseActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firebaseConfig\", function() { return firebaseConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firebaseActions\", function() { return firebaseActions; });\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cookie */ \"./js/helpers/cookie/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar firebaseConfig = {\n  apiKey: 'AIzaSyAXRcPggI2MT7dWR20qT0dExs1iirpXJyg',\n  authDomain: 'courses-shop-ab326.firebaseapp.com',\n  databaseURL: 'https://courses-shop-ab326.firebaseio.com',\n  projectId: 'courses-shop-ab326',\n  storageBucket: 'courses-shop-ab326.appspot.com',\n  messagingSenderId: '689418990840',\n  appId: '1:689418990840:web:1571d12b2218f9ba90f70d'\n};\nwindow.firebase.initializeApp(firebaseConfig);\nvar database = window.firebase.database();\n\nvar Firebase = /*#__PURE__*/function () {\n  function Firebase() {\n    _classCallCheck(this, Firebase);\n\n    this.state = {\n      currentValue: null\n    };\n    this.courses = database.ref('/courses');\n    this.count = 0;\n    this.setCourse = this.setCourse.bind(this);\n  }\n\n  _createClass(Firebase, [{\n    key: \"setCourse\",\n    value: function setCourse(data) {\n      var user = _cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCookie('googleAuthId');\n      if (!user) return;\n      this.currentValue = data;\n      var courseId = this.courses.push().key;\n      this.courses.child(courseId).set(data);\n    }\n  }, {\n    key: \"getCourses\",\n    value: function getCourses(cb) {\n      this.courses.orderByKey().on('value', function (data) {\n        cb(data.val());\n      });\n    }\n  }, {\n    key: \"deleteCourse\",\n    value: function deleteCourse(id) {\n      this.courses.child(id).remove();\n    }\n  }, {\n    key: \"updateCourse\",\n    value: function updateCourse(id, course) {\n      this.courses.child(id).update(course);\n    }\n  }]);\n\n  return Firebase;\n}();\n\nvar firebaseActions = new Firebase();\n\n\n//# sourceURL=webpack:///./js/helpers/firebase/firebase.js?");

/***/ }),

/***/ "./js/helpers/firebase/index.js":
/*!**************************************!*\
  !*** ./js/helpers/firebase/index.js ***!
  \**************************************/
/*! exports provided: firebaseConfig, firebaseActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./js/helpers/firebase/firebase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"firebaseConfig\", function() { return _firebase__WEBPACK_IMPORTED_MODULE_0__[\"firebaseConfig\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"firebaseActions\", function() { return _firebase__WEBPACK_IMPORTED_MODULE_0__[\"firebaseActions\"]; });\n\n\n\n\n//# sourceURL=webpack:///./js/helpers/firebase/index.js?");

/***/ }),

/***/ "./js/helpers/generateInputs/generateInputs.js":
/*!*****************************************************!*\
  !*** ./js/helpers/generateInputs/generateInputs.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./js/helpers/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ \"./js/components/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction generateInputs(cb) {\n  var buttonText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Add Button';\n  var courseName = document.getElementById('course_name');\n  var courseDownload = document.getElementById('course_download');\n  var courseDesc = document.getElementById('course_desc');\n  var courseImage = document.getElementById('course_image');\n  var courseLink = document.getElementById('course_link');\n\n  var validateInputs = function validateInputs(_ref) {\n    var name = _ref.name,\n        link = _ref.link,\n        download = _ref.download;\n    var regExp = {\n      link: /(https?:\\/\\/[^\\s]+)/g,\n      download: /(https?:\\/\\/[^\\s]+)/g\n    };\n    var inputs = {\n      link: link,\n      download: download\n    };\n    var isValid = Object.entries(inputs).every(function (_ref2) {\n      var _ref3 = _slicedToArray(_ref2, 2),\n          key = _ref3[0],\n          value = _ref3[1];\n\n      return regExp[key].test(value);\n    });\n    if (!isValid || !name.length) return '<p>Invalid course</p>';\n    return \"\\n            <button class=\\\"course-presentation__btn btn waves-effect waves-light\\\" type=\\\"button\\\" name=\\\"action\\\">\".concat(buttonText, \"</button>\\n        \");\n  };\n\n  var changeState = function changeState() {\n    var currentState = {\n      image: courseImage.value,\n      name: courseName.value,\n      description: courseDesc.value,\n      download: courseDownload.value,\n      link: courseLink.value,\n      user: ___WEBPACK_IMPORTED_MODULE_0__[\"cookieActions\"].getCookie('googleAuthId')\n    };\n    var isValid = validateInputs(currentState);\n    document.querySelector('.course-presentation').innerHTML = \"\\n            <div class=\\\"container\\\">\\n                \".concat(Object(_components__WEBPACK_IMPORTED_MODULE_1__[\"Course\"])(currentState), \"\\n                \").concat(isValid, \"\\n            </div>\\n        \");\n    var btn = document.querySelector('.course-presentation__btn');\n\n    if (btn) {\n      btn.addEventListener('click', function () {\n        location.replace('/');\n        cb(currentState);\n      });\n    }\n  };\n\n  changeState();\n  courseName.addEventListener('input', changeState);\n  courseDownload.addEventListener('input', changeState);\n  courseDesc.addEventListener('input', changeState);\n  courseImage.addEventListener('input', changeState);\n  courseLink.addEventListener('input', changeState);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateInputs);\n\n//# sourceURL=webpack:///./js/helpers/generateInputs/generateInputs.js?");

/***/ }),

/***/ "./js/helpers/generateInputs/index.js":
/*!********************************************!*\
  !*** ./js/helpers/generateInputs/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateInputs */ \"./js/helpers/generateInputs/generateInputs.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_generateInputs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/helpers/generateInputs/index.js?");

/***/ }),

/***/ "./js/helpers/googleSign/googleSign.js":
/*!*********************************************!*\
  !*** ./js/helpers/googleSign/googleSign.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cookie */ \"./js/helpers/cookie/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"./js/helpers/firebase/index.js\");\n/* eslint-disable no-undef */\n\n\n\nvar googleSign = function googleSign() {\n  var baseProvider = new firebase.auth.GoogleAuthProvider();\n  firebase.auth().signInWithPopup(baseProvider).then(function (res) {\n    _cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCookie('googleAuthId', res.user.uid, 30);\n    location.replace('/courses');\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (googleSign);\n\n//# sourceURL=webpack:///./js/helpers/googleSign/googleSign.js?");

/***/ }),

/***/ "./js/helpers/googleSign/index.js":
/*!****************************************!*\
  !*** ./js/helpers/googleSign/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _googleSign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleSign */ \"./js/helpers/googleSign/googleSign.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_googleSign__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/helpers/googleSign/index.js?");

/***/ }),

/***/ "./js/helpers/index.js":
/*!*****************************!*\
  !*** ./js/helpers/index.js ***!
  \*****************************/
/*! exports provided: generateRouter, googleSign, firebaseConfig, firebaseActions, cookieActions, deleteTextNodes, generateInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ \"./js/helpers/route/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateRouter\", function() { return _route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _googleSign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googleSign */ \"./js/helpers/googleSign/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"googleSign\", function() { return _googleSign__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./js/helpers/firebase/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"firebaseConfig\", function() { return _firebase__WEBPACK_IMPORTED_MODULE_2__[\"firebaseConfig\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"firebaseActions\", function() { return _firebase__WEBPACK_IMPORTED_MODULE_2__[\"firebaseActions\"]; });\n\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie */ \"./js/helpers/cookie/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cookieActions\", function() { return _cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _deleteTextNodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTextNodes */ \"./js/helpers/deleteTextNodes/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteTextNodes\", function() { return _deleteTextNodes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _generateInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generateInputs */ \"./js/helpers/generateInputs/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateInputs\", function() { return _generateInputs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/helpers/index.js?");

/***/ }),

/***/ "./js/helpers/route/index.js":
/*!***********************************!*\
  !*** ./js/helpers/route/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ \"./js/helpers/route/route.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/helpers/route/index.js?");

/***/ }),

/***/ "./js/helpers/route/route.js":
/*!***********************************!*\
  !*** ./js/helpers/route/route.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateRouter; });\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages */ \"./js/pages/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./js/helpers/index.js\");\n\n\n\nfunction onPageChanged() {\n  var links = document.getElementsByClassName('route-link');\n  var page = location.pathname;\n\n  if (page.match('change-course')) {\n    ___WEBPACK_IMPORTED_MODULE_1__[\"firebaseActions\"].getCourses(_pages__WEBPACK_IMPORTED_MODULE_0__[\"ChangeCourse\"]);\n    return;\n  }\n\n  Object.values(links).forEach(function (link) {\n    if (link.getAttribute('href') === page) {\n      var component = link.dataset.component;\n\n      if (component === 'Courses' || component === 'MyCourses') {\n        ___WEBPACK_IMPORTED_MODULE_1__[\"firebaseActions\"].getCourses(_pages__WEBPACK_IMPORTED_MODULE_0__[component]);\n        return;\n      }\n\n      _pages__WEBPACK_IMPORTED_MODULE_0__[component]();\n    }\n\n    link.remove();\n  });\n}\n\nfunction generateRouter() {\n  window.onload = onPageChanged;\n}\n\n//# sourceURL=webpack:///./js/helpers/route/route.js?");

/***/ }),

/***/ "./js/pages/authentication.css":
/*!*************************************!*\
  !*** ./js/pages/authentication.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/pages/authentication.css?");

/***/ }),

/***/ "./js/pages/authentication.js":
/*!************************************!*\
  !*** ./js/pages/authentication.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ \"./js/components/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./js/helpers/index.js\");\n/* harmony import */ var _authentication_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.css */ \"./js/pages/authentication.css\");\n/* harmony import */ var _authentication_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_authentication_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Authentication = function Authentication() {\n  document.getElementById('root').innerHTML = \"\\n        <section class=\\\"user\\\">\\n            <div class=\\\"user_options-container\\\">\\n                <div class=\\\"user_options-text\\\">\\n                    <div class=\\\"user_options-unregistered\\\">\\n                        <h2 class=\\\"user_unregistered-title\\\">Check our project information!</h2>\\n                        <p class=\\\"user_unregistered-text\\\">\\n                            Create your courses and share them with people!\\n                        </p>\\n                        <button class=\\\"user_unregistered-signup\\\" id=\\\"signup-button\\\">About Us</button>\\n                    </div>\\n            \\n                    <div class=\\\"user_options-registered\\\">\\n                        <h2 class=\\\"user_registered-title\\\">Don't have an account?</h2>\\n                        <p class=\\\"user_registered-text\\\">\\n                            Registrate for creating your courses and share them with people!\\n                        </p>\\n                        <button class=\\\"user_registered-login\\\" id=\\\"login-button\\\">Sign up</button>\\n                    </div>\\n                </div>\\n                \\n                <div class=\\\"user_options-forms\\\" id=\\\"user_options-forms\\\">\\n                    <div class=\\\"user_forms-login\\\">\\n                        <h2 class=\\\"forms_title\\\">Login</h2>\\n                        <form class=\\\"forms_form forms_form-login\\\">\\n                            \".concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"GoogleIcon\"])(), \"\\n                        </form>\\n                    </div>\\n                    <div class=\\\"user_forms-about\\\">\\n                        <h2 class=\\\"forms_title forms_form-about\\\">About Us</h2>\\n                        <div class=\\\"about-information forms_form\\\">\\n                            Information about us.\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n        </section>\\n    \");\n  var signupButton = document.getElementById('signup-button');\n  var loginButton = document.getElementById('login-button');\n  var userForms = document.getElementById('user_options-forms');\n  var googleAuthBtn = document.getElementById('google-sign');\n  googleAuthBtn.addEventListener('click', function () {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"googleSign\"])();\n  });\n  signupButton.addEventListener('click', function () {\n    userForms.classList.remove('bounceRight');\n    userForms.classList.add('bounceLeft');\n  }, false);\n  loginButton.addEventListener('click', function () {\n    userForms.classList.remove('bounceLeft');\n    userForms.classList.add('bounceRight');\n  }, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authentication);\n\n//# sourceURL=webpack:///./js/pages/authentication.js?");

/***/ }),

/***/ "./js/pages/changeCourse.js":
/*!**********************************!*\
  !*** ./js/pages/changeCourse.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ \"./js/components/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./js/helpers/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar ChangeCourse = function ChangeCourse(courses) {\n  if (!courses) {\n    document.getElementById('root').innerHTML = '<h1>Oops.. something goes wrong! :(</h1>';\n    return;\n  }\n\n  document.getElementById('root').innerHTML = \"\\n        \".concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"])(), \"\\n        <section class=\\\"course-inputs\\\">\\n            <div class=\\\"container\\\">\\n                \").concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"CreateInputs\"])(), \"\\n            </div>\\n        </section>\\n        <section class=\\\"course-presentation\\\">\\n            <div class=\\\"container\\\">\\n                \").concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Course\"])(), \"\\n            </div>\\n        </section>\\n    \");\n  var registeredLink = document.querySelector('.registered');\n  if (!registeredLink) return;\n  registeredLink.addEventListener('click', _components__WEBPACK_IMPORTED_MODULE_0__[\"logOut\"]);\n\n  var _location$pathname$sp = location.pathname.split('*'),\n      _location$pathname$sp2 = _slicedToArray(_location$pathname$sp, 2),\n      key = _location$pathname$sp2[1];\n\n  var course = courses[key];\n\n  if (!course) {\n    document.getElementById('root').innerHTML = '<h1>There is no courses with this key!</h1>';\n    return;\n  }\n\n  var courseName = document.getElementById('course_name');\n  var courseDownload = document.getElementById('course_download');\n  var courseDesc = document.getElementById('course_desc');\n  var courseImage = document.getElementById('course_image');\n  var courseLink = document.getElementById('course_link');\n  courseName.value = course.name;\n  courseDownload.value = course.download;\n  courseDesc.value = course.description;\n  courseImage.value = course.image;\n  courseLink.value = course.link;\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"generateInputs\"])(function (state) {\n    _helpers__WEBPACK_IMPORTED_MODULE_1__[\"firebaseActions\"].updateCourse(key, state);\n  }, 'Change Course');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeCourse);\n\n//# sourceURL=webpack:///./js/pages/changeCourse.js?");

/***/ }),

/***/ "./js/pages/courses.css":
/*!******************************!*\
  !*** ./js/pages/courses.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/pages/courses.css?");

/***/ }),

/***/ "./js/pages/courses.js":
/*!*****************************!*\
  !*** ./js/pages/courses.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _courses_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.css */ \"./js/pages/courses.css\");\n/* harmony import */ var _courses_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_courses_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ \"./js/components/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./js/helpers/index.js\");\n\n\n\n\nvar Courses = function Courses(courses) {\n  document.getElementById('root').innerHTML = \"\\n        \".concat(Object(_components__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"])(), \"\\n        \").concat(Object(_components__WEBPACK_IMPORTED_MODULE_1__[\"CoursesList\"])(courses), \"\\n    \");\n  var registeredLink = document.querySelector('.registered');\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"deleteTextNodes\"])('.courses__list');\n  if (!registeredLink) return;\n  registeredLink.addEventListener('click', _components__WEBPACK_IMPORTED_MODULE_1__[\"logOut\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Courses);\n\n//# sourceURL=webpack:///./js/pages/courses.js?");

/***/ }),

/***/ "./js/pages/createCourse.css":
/*!***********************************!*\
  !*** ./js/pages/createCourse.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/pages/createCourse.css?");

/***/ }),

/***/ "./js/pages/createCourse.js":
/*!**********************************!*\
  !*** ./js/pages/createCourse.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ \"./js/components/index.js\");\n/* harmony import */ var _createCourse_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCourse.css */ \"./js/pages/createCourse.css\");\n/* harmony import */ var _createCourse_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createCourse_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./js/helpers/index.js\");\n\n\n\n\nvar CreateCourse = function CreateCourse() {\n  var isRegister = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"cookieActions\"].getCookie('googleAuthId');\n  document.getElementById('root').innerHTML = \"\\n            \".concat(isRegister ? \"\\n                \".concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"])(), \"\\n                <section class=\\\"course-inputs\\\">\\n                    <div class=\\\"container\\\">\\n                        \").concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"CreateInputs\"])(), \"\\n                    </div>\\n                </section>\\n                <section class=\\\"course-presentation\\\">\\n                    <div class=\\\"container\\\">\\n                        \").concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Course\"])(), \"\\n                    </div>\\n                </section>\\n            \") : \"\\n                <h1>Please Registrate!</h1>\\n            \", \"\\n        \");\n  var registeredLink = document.querySelector('.registered');\n  if (!registeredLink) return;\n  registeredLink.addEventListener('click', _components__WEBPACK_IMPORTED_MODULE_0__[\"logOut\"]);\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"generateInputs\"])(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"firebaseActions\"].setCourse);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCourse);\n\n//# sourceURL=webpack:///./js/pages/createCourse.js?");

/***/ }),

/***/ "./js/pages/index.js":
/*!***************************!*\
  !*** ./js/pages/index.js ***!
  \***************************/
/*! exports provided: Authentication, Courses, CreateCourse, MyCourses, ChangeCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication */ \"./js/pages/authentication.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Authentication\", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses */ \"./js/pages/courses.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Courses\", function() { return _courses__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _createCourse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCourse */ \"./js/pages/createCourse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateCourse\", function() { return _createCourse__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _myCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myCourses */ \"./js/pages/myCourses.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MyCourses\", function() { return _myCourses__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _changeCourse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeCourse */ \"./js/pages/changeCourse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChangeCourse\", function() { return _changeCourse__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/pages/index.js?");

/***/ }),

/***/ "./js/pages/myCourses.js":
/*!*******************************!*\
  !*** ./js/pages/myCourses.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ \"./js/components/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./js/helpers/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar MyCourses = function MyCourses(courses) {\n  var user = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"cookieActions\"].getCookie('googleAuthId');\n\n  if (!user) {\n    document.getElementById('root').innerHTML = '<h1>Please Registrate!</h1>';\n    return;\n  }\n\n  if (!courses) {\n    document.getElementById('root').innerHTML = '<h1>Your course list is empty :(</h1>';\n    return;\n  }\n\n  var userCourses = Object.entries(courses).filter(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        course = _ref2[1];\n\n    return course.user === user;\n  });\n  document.getElementById('root').innerHTML = \"\\n        \".concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"])(), \"\\n        <section class=\\\"courses-actions\\\">\\n            <div class=\\\"container\\\">\\n                <ul class=\\\"courses-actions__list collection\\\">\\n                    \").concat(Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"CoursesActions\"])(userCourses), \"\\n                </ul>\\n            </div>\\n        </section>\\n    \");\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"deleteTextNodes\"])('.courses-actions__list');\n  var registeredLink = document.querySelector('.registered');\n  if (!registeredLink) return;\n  registeredLink.addEventListener('click', _components__WEBPACK_IMPORTED_MODULE_0__[\"logOut\"]);\n  var deleteButtons = document.querySelectorAll('.courses-actions__delete');\n  deleteButtons.forEach(function (btn) {\n    return btn.addEventListener('click', function (e) {\n      e.stopPropagation();\n      var id = e.target.dataset.key;\n      _helpers__WEBPACK_IMPORTED_MODULE_1__[\"firebaseActions\"].deleteCourse(id);\n    });\n  }, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyCourses);\n\n//# sourceURL=webpack:///./js/pages/myCourses.js?");

/***/ })

/******/ });