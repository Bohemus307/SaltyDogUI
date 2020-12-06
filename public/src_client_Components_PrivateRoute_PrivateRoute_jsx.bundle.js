/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksaltydogui"] = self["webpackChunksaltydogui"] || []).push([["src_client_Components_PrivateRoute_PrivateRoute_jsx"],{

/***/ "./src/client/Components/PrivateRoute/PrivateRoute.jsx":
/*!*************************************************************!*\
  !*** ./src/client/Components/PrivateRoute/PrivateRoute.jsx ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Auth/auth */ \"./src/client/Components/Auth/auth.js\");\n\n\n\n\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var path = _ref.path,\n      exact = _ref.exact,\n      component = _ref.component;\n  var condition = (0,_Auth_auth__WEBPACK_IMPORTED_MODULE_2__.isLoggedIn)();\n  return condition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: path,\n    exact: exact,\n    component: component\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n    to: \"/login\"\n  });\n};\n\nPrivateRoute.propTypes = {\n  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);\n\n//# sourceURL=webpack://saltydogui/./src/client/Components/PrivateRoute/PrivateRoute.jsx?");

/***/ })

}]);