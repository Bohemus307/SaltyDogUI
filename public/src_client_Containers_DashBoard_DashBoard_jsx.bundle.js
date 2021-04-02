/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksaltydogui"] = self["webpackChunksaltydogui"] || []).push([["src_client_Containers_DashBoard_DashBoard_jsx"],{

/***/ "./src/client/Components/Error Boundary/ErrorBoundary.jsx":
/*!****************************************************************!*\
  !*** ./src/client/Components/Error Boundary/ErrorBoundary.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar ErrorBoundary = /*#__PURE__*/function (_React$Component) {\n  _inherits(ErrorBoundary, _React$Component);\n\n  var _super = _createSuper(ErrorBoundary);\n\n  function ErrorBoundary(props) {\n    var _this;\n\n    _classCallCheck(this, ErrorBoundary);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n\n  _createClass(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, errorInfo) {\n      // You can also log the error to an error reporting service\n      // logErrorToMyService(error, errorInfo);\n      console.error('err: ', error, 'error info: ', errorInfo);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var hasError = this.state.hasError;\n      var children = this.props.children;\n\n      if (hasError) {\n        // You can render any custom fallback UI\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n          src: \"/images/error.svg\",\n          alt: \"error\",\n          title: \"error\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \":( Something went wrong.\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), \"Please Reload the Page\"));\n      }\n\n      return children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      // Update state so the next render will show the fallback UI.\n      console.log(error);\n      return {\n        hasError: true\n      };\n    }\n  }]);\n\n  return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nErrorBoundary.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n\n//# sourceURL=webpack://saltydogui/./src/client/Components/Error_Boundary/ErrorBoundary.jsx?");

/***/ }),

/***/ "./src/client/Containers/DashBoard/DashBoard.jsx":
/*!*******************************************************!*\
  !*** ./src/client/Containers/DashBoard/DashBoard.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _DashBoard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard.css */ \"./src/client/Containers/DashBoard/DashBoard.css\");\n/* harmony import */ var _Components_Error_Boundary_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Error Boundary/ErrorBoundary.jsx */ \"./src/client/Components/Error Boundary/ErrorBoundary.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import Menu from '../../Components/Menu/Menu.jsx';\n// import Main from '../../Components/Main/Main.jsx';\n\nvar Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"src_client_Components_Menu_Menu_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../Components/Menu/Menu.jsx */ \"./src/client/Components/Menu/Menu.jsx\"));\n});\nvar Main = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"src_client_Components_Main_Main_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../Components/Main/Main.jsx */ \"./src/client/Components/Main/Main.jsx\"));\n});\n\nvar DashBoard = /*#__PURE__*/function (_React$Component) {\n  _inherits(DashBoard, _React$Component);\n\n  var _super = _createSuper(DashBoard);\n\n  function DashBoard(props) {\n    var _this;\n\n    _classCallCheck(this, DashBoard);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"logOutHandler\", function () {\n      var _useAuth = useAuth(),\n          setAuthTokens = _useAuth.setAuthTokens;\n\n      setAuthTokens();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"menuClickHandler\", function (value) {\n      _this.setState({\n        open: true,\n        value: value\n      });\n    });\n\n    _this.state = {\n      open: false,\n      value: 'Overview'\n    };\n    return _this;\n  }\n\n  _createClass(DashBoard, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _DashBoard_css__WEBPACK_IMPORTED_MODULE_1__.default.DashBoard\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _DashBoard_css__WEBPACK_IMPORTED_MODULE_1__.default.Menu_Div\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Error_Boundary_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu, {\n        displayItem: this.menuClickHandler\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _DashBoard_css__WEBPACK_IMPORTED_MODULE_1__.default.Main_Div\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Error_Boundary_ErrorBoundary_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Main, {\n        displayItem: this.state.value\n      })))));\n    }\n  }]);\n\n  return DashBoard;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashBoard);\n\n//# sourceURL=webpack://saltydogui/./src/client/Containers/DashBoard/DashBoard.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Containers/DashBoard/DashBoard.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Containers/DashBoard/DashBoard.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._1QbbcQpjkbR5ruH_BsvfQd {\\n  display: grid;\\n  grid-template-areas:\\n    'menu main';\\n  grid-template-columns: 300px 75%;\\n}\\n\\n._2cSKqx8WOWB9dfMkTKO3ti {\\n  background: #282e33;\\n  grid-area: menu;\\n}\\n\\n._3-N2HkbXTSRZFc-FJ2M3bb {\\n  background-color: #606468;\\n  grid-area: main; \\n  width: 80vw;\\n  height: auto;\\n  min-height: 1400px;\\n}\\n/* \\nbackground-image: linear-gradient(to left, #00BFFF, #8A2BE2); <=== blue to purple \\n\\nbackground-image: linear-gradient(to left, #ff0066, #FF4500); <=== pink to red\\n\\nbackground-image: linear-gradient(to top right, \\t#00CED1, #00FF7F); <=== green to turq\\n\\nbackground-image: linear-gradient(to bottom left,#FF69B4, #9932CC); <== pink to purple\\n\\n*/\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"DashBoard\": \"_1QbbcQpjkbR5ruH_BsvfQd\",\n\t\"Menu_Div\": \"_2cSKqx8WOWB9dfMkTKO3ti\",\n\t\"Main_Div\": \"_3-N2HkbXTSRZFc-FJ2M3bb\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://saltydogui/./src/client/Containers/DashBoard/DashBoard.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./src/client/Containers/DashBoard/DashBoard.css":
/*!*******************************************************!*\
  !*** ./src/client/Containers/DashBoard/DashBoard.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_DashBoard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./DashBoard.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Containers/DashBoard/DashBoard.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_DashBoard_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_DashBoard_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://saltydogui/./src/client/Containers/DashBoard/DashBoard.css?");

/***/ })

}]);