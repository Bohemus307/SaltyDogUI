/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksaltydogui"] = self["webpackChunksaltydogui"] || []).push([["src_client_Containers_Login_Login_jsx"],{

/***/ "./src/client/Components/Logo/Logo.jsx":
/*!*********************************************!*\
  !*** ./src/client/Components/Logo/Logo.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hoc_Aux_Aux_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hoc/Aux/Aux.jsx */ \"./src/client/Hoc/Aux/Aux.jsx\");\n\n\n\n\nvar Logo = function Logo(_ref) {\n  var height = _ref.height;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Hoc_Aux_Aux_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    style: {\n      height: height\n    },\n    src: \"/images/heronlogosquare.png\",\n    alt: \"Logo\"\n  }));\n};\n\nLogo.propTypes = {\n  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\n\n//# sourceURL=webpack://saltydogui/./src/client/Components/Logo/Logo.jsx?");

/***/ }),

/***/ "./src/client/Components/UI/Input/Input.jsx":
/*!**************************************************!*\
  !*** ./src/client/Components/UI/Input/Input.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.css */ \"./src/client/Components/UI/Input/Input.css\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nvar Input = function Input(_ref) {\n  var invalid = _ref.invalid,\n      shouldValidate = _ref.shouldValidate,\n      elementType = _ref.elementType,\n      changed = _ref.changed,\n      elementConfig = _ref.elementConfig,\n      value = _ref.value,\n      touched = _ref.touched,\n      label = _ref.label,\n      alt = _ref.alt,\n      dropdown = _ref.dropdown;\n  var inputElement = null;\n  var inputClasses = [_Input_css__WEBPACK_IMPORTED_MODULE_2__.default.InputElement];\n\n  if (invalid && shouldValidate) {\n    inputClasses.push(_Input_css__WEBPACK_IMPORTED_MODULE_2__.default.Invalid);\n  }\n\n  if (dropdown) {\n    inputClasses = [_Input_css__WEBPACK_IMPORTED_MODULE_2__.default.ChartDropdown];\n  }\n\n  switch (elementType) {\n    case 'input':\n      inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", _extends({\n        onChange: changed,\n        className: inputClasses.join(' ')\n      }, elementConfig, {\n        value: value\n      }));\n      break;\n\n    case 'textarea':\n      inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", _extends({\n        onChange: changed,\n        className: inputClasses.join(' ')\n      }, elementConfig, {\n        value: value\n      }));\n      break;\n\n    case 'select':\n      inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", _extends({\n        onChange: changed,\n        className: inputClasses.join(' ')\n      }, elementConfig, {\n        value: value\n      }), elementConfig.options.map(function (option) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n          key: option.displayValue,\n          value: option.value\n        }, option.displayValue);\n      }));\n      break;\n\n    default:\n      inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", _extends({\n        onChange: changed,\n        className: inputClasses.join(' ')\n      }, elementConfig, {\n        value: value\n      }));\n  }\n\n  var validationError = null;\n\n  if (invalid && touched) {\n    validationError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Please enter a valid value!\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _Input_css__WEBPACK_IMPORTED_MODULE_2__.default.Input_Div\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: _Input_css__WEBPACK_IMPORTED_MODULE_2__.default.FormSpan\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: _Input_css__WEBPACK_IMPORTED_MODULE_2__.default.InputImage,\n    src: label,\n    alt: alt,\n    title: alt\n  })), inputElement, validationError);\n};\n\nInput.propTypes = {\n  invalid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),\n  dropdown: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  shouldValidate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),\n  elementType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  changed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  elementConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),\n  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  touched: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),\n  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\nInput.defaultProps = {\n  alt: 'Input image',\n  dropdown: false\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://saltydogui/./src/client/Components/UI/Input/Input.jsx?");

/***/ }),

/***/ "./src/client/Containers/Login/Login.jsx":
/*!***********************************************!*\
  !*** ./src/client/Containers/Login/Login.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Components_Auth_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Auth/auth */ \"./src/client/Components/Auth/auth.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.css */ \"./src/client/Containers/Login/Login.css\");\n/* harmony import */ var _Components_Logo_Logo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Logo/Logo.jsx */ \"./src/client/Components/Logo/Logo.jsx\");\n/* harmony import */ var _Components_UI_Input_Input_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/UI/Input/Input.jsx */ \"./src/client/Components/UI/Input/Input.jsx\");\n/* harmony import */ var _Components_UI_Spinner_Spinner_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/UI/Spinner/Spinner.jsx */ \"./src/client/Components/UI/Spinner/Spinner.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar Login = /*#__PURE__*/function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  var _super = _createSuper(Login);\n\n  function Login(props) {\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"checkValidity\", function (value, rules) {\n      var isValid = true;\n\n      if (!rules) {\n        return true;\n      }\n\n      if (rules.required) {\n        isValid = value.trim() !== '' && isValid;\n      }\n\n      if (rules.minLength) {\n        isValid = value.length >= rules.minLength && isValid;\n      }\n\n      if (rules.maxLength) {\n        isValid = value.length <= rules.maxLength && isValid;\n      }\n\n      if (rules.isEmail) {\n        var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n        isValid = pattern.test(value) && isValid;\n      }\n\n      if (rules.isNumeric) {\n        var _pattern = /^\\d+$/;\n        isValid = _pattern.test(value) && isValid;\n      }\n\n      return isValid;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"inputChangedHandler\", function (event, inputIdentifier) {\n      var updatedLoginForm = _objectSpread({}, _this.state.controls); // deeper clone of login form\n\n\n      var updatedFormELement = _objectSpread({}, updatedLoginForm[inputIdentifier]);\n\n      updatedFormELement.value = event.target.value;\n      updatedFormELement.valid = _this.checkValidity(updatedFormELement.value, updatedFormELement.validation);\n      updatedFormELement.touched = true;\n      updatedLoginForm[inputIdentifier] = updatedFormELement;\n      var formIsValid = false;\n      var keys = Object.keys(_this.state.controls);\n      var values = Object.values(_this.state.controls);\n      var areAllValid = values.filter(function (value) {\n        if (value.valid) {\n          return true;\n        }\n\n        return false;\n      });\n\n      if (areAllValid.length === keys.length) {\n        formIsValid = true;\n      }\n\n      for (var inputIdentifiers in updatedLoginForm) {\n        formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;\n      }\n\n      _this.setState({\n        controls: updatedLoginForm,\n        formIsValid: formIsValid\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loginHandler\", function (event) {\n      event.preventDefault();\n      var formData = {};\n\n      for (var formElementIdentifier in _this.state.controls) {\n        formData[formElementIdentifier] = _this.state.controls[formElementIdentifier].value;\n      }\n\n      var email = formData.email;\n      var password = formData.password;\n      (0,_Components_Auth_auth__WEBPACK_IMPORTED_MODULE_1__.login)(email, password).then(function (ok) {\n        if (ok) {\n          _this.setState({\n            isLoggedIn: true\n          });\n\n          _this.props.history.replace('/dashboard');\n        } else {\n          _this.setState({\n            isError: true\n          });\n        }\n      });\n    });\n\n    _this.state = {\n      controls: {\n        email: {\n          elementType: 'input',\n          elementConfig: {\n            type: 'email',\n            placeholder: 'Email Address',\n            image: \"/images/id-card.png\"\n          },\n          value: '',\n          validation: {\n            required: true,\n            isEmail: true\n          },\n          valid: false,\n          touched: false\n        },\n        password: {\n          elementType: 'input',\n          elementConfig: {\n            type: 'password',\n            placeholder: 'Password...',\n            image: \"/images/password.png\"\n          },\n          value: '',\n          validation: {\n            required: true,\n            minLength: 5,\n            maxLength: 12\n          },\n          valid: false,\n          touched: false\n        }\n      },\n      formIsValid: false,\n      loading: false,\n      isLoggedIn: (0,_Components_Auth_auth__WEBPACK_IMPORTED_MODULE_1__.isLoggedIn)(),\n      authToken: null,\n      isError: false\n    };\n    return _this;\n  } // rules for input content\n\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var controls = this.state.controls;\n      var keys = Object.keys(controls);\n      var values = Object.values(controls); // array of objects from controls in state\n\n      var formElementsArray = keys.reduce(function (arr, key, idx) {\n        var object = {\n          id: key,\n          config: values[idx]\n        };\n        arr.push(object);\n        return arr;\n      }, []); // login form\n\n      var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        name: \"form-login\",\n        className: _Login_css__WEBPACK_IMPORTED_MODULE_2__.default.Form,\n        onSubmit: this.loginHandler\n      }, formElementsArray.map(function (formElement) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_UI_Input_Input_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n          key: formElement.id,\n          elementType: formElement.config.elementType,\n          elementConfig: formElement.config.elementConfig,\n          value: formElement.config.value,\n          changed: function changed(event) {\n            return _this2.inputChangedHandler(event, formElement.id);\n          },\n          invalid: !formElement.config.valid,\n          shouldValidate: formElement.config.validation,\n          touched: formElement.config.touched,\n          label: formElement.config.elementConfig.image\n        });\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"submit\",\n        disabled: !this.state.formIsValid\n      }, \"Login\")); //if loading \n\n      var loading = this.state.loading;\n\n      if (loading) {\n        form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_UI_Spinner_Spinner_jsx__WEBPACK_IMPORTED_MODULE_5__.default, null);\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _Login_css__WEBPACK_IMPORTED_MODULE_2__.default.Auth\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _Login_css__WEBPACK_IMPORTED_MODULE_2__.default.Logo_Div\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Logo_Logo_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n        height: \"300px\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: _Login_css__WEBPACK_IMPORTED_MODULE_2__.default.Salty_Label\n      }, \"Heron Farms\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: _Login_css__WEBPACK_IMPORTED_MODULE_2__.default.Login\n      }, form), this.state.isLoggedIn ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n        className: _Login_css__WEBPACK_IMPORTED_MODULE_2__.default.Signup,\n        to: \"/signup\"\n      }, \"Don't have an account?\"));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://saltydogui/./src/client/Containers/Login/Login.jsx?");

/***/ }),

/***/ "./src/client/Hoc/Aux/Aux.jsx":
/*!************************************!*\
  !*** ./src/client/Hoc/Aux/Aux.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Aux = function Aux(props) {\n  return props.children;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Aux);\n\n//# sourceURL=webpack://saltydogui/./src/client/Hoc/Aux/Aux.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Components/UI/Input/Input.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Components/UI/Input/Input.css ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._2JcG71Ld0nLeqzklWVugcY {\\n  margin: 70px auto;\\n  width: 320px;\\n  position: relative;\\n  right: 24px;\\n}\\n\\n._1E6HjSHlUYmQGSg4A-kdTE {\\n  font-weight: bold;\\n  display: block;\\n  margin-bottom: 8px;\\n}\\n\\n.KBML5fkDQuHUWq_Pn5RPW {\\n  background-color: #282e33;\\n  padding: 0px 2px;\\n  border-radius: 3px 0px 0px 3px;\\n  border-right: 3px solid #434a52;\\n  color: #606468;\\n  display: block;\\n  float: left;\\n  line-height: 50px;\\n  text-align: center;\\n  width: 50px;\\n  height: 50px;\\n}\\n\\n._1AEP_YvzDZt85nBW7byguy {\\n  display: flex;\\n}\\n\\n.V5P7UThJEVhrXPvD8yMjc {\\n  margin-top: 5px;\\n  height: 40px;\\n}\\n\\n._1myvbNWSQNsrxGGiwToJZp {\\n  border: none;\\n  font-family: futura-pt-bold;\\n  font-size: 12px;\\n  line-height: 1.5em;\\n  padding: 0;\\n  -webkit-appearance: none;\\n  background-color: #434a52;\\n  border-radius: 0px 3px 3px 0px;\\n  color: #a9a9a9;\\n  margin-bottom: 1em;\\n  padding: 0 16px;\\n  width: 90%;\\n  height: 50px;\\n}\\n\\n._2tQYU-cifJ_QgmK3IXaeiz {\\n  border: none;\\n  font-family: futura-pt-bold;\\n  font-size: 12px;\\n  line-height: 1.5em;\\n  padding: 0;\\n  background-color: #282e33;\\n  border-radius: 0px 3px 3px 0px;\\n  color: #a9a9a9;\\n  margin-bottom: 1em;\\n  padding: 0 16px;\\n  height: 50px;\\n  width: 100%;\\n}\\n\\n._1QwuZqco9ltFx2R-K0X_ss {\\n  background-color: #3b4148;\\n  border-radius: 0px 3px 3px 0px;\\n  color: #a9a9a9;\\n  margin-bottom: 1em;\\n  padding: 0 16px;\\n  width: 70%;\\n  height: 50px;\\n}\\n\\n._1Bk2bU6gmllwtMFAwlkm8M {\\n  background-color: #282e33;\\n  border-radius: 0px 3px 3px 0px;\\n  color: #a9a9a9;\\n  margin-bottom: 1em;\\n  padding: 0 16px;\\n  width: 90%;\\n  height: 50px;\\n}\\n\\n._1myvbNWSQNsrxGGiwToJZp:focus {\\n  outline: none;\\n  background-color: #ccc;\\n} \\n\\n.DuMrpetoHuNQxwinAeD-E {\\n  /* border: 1px solid red; */\\n  /* background-color: salmon; */\\n}\\n\\n.IdUrjUPRaeq5tWS8_-VGI {\\n  color: red;\\n  margin: 5px 0;\\n} \\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Input\": \"_2JcG71Ld0nLeqzklWVugcY\",\n\t\"Label\": \"_1E6HjSHlUYmQGSg4A-kdTE\",\n\t\"FormSpan\": \"KBML5fkDQuHUWq_Pn5RPW\",\n\t\"Input_Div\": \"_1AEP_YvzDZt85nBW7byguy\",\n\t\"InputImage\": \"V5P7UThJEVhrXPvD8yMjc\",\n\t\"InputElement\": \"_1myvbNWSQNsrxGGiwToJZp\",\n\t\"ChartDropdown\": \"_2tQYU-cifJ_QgmK3IXaeiz\",\n\t\"InputElement-text\": \"_1QwuZqco9ltFx2R-K0X_ss\",\n\t\"InputElement-password\": \"_1Bk2bU6gmllwtMFAwlkm8M\",\n\t\"Invalid\": \"DuMrpetoHuNQxwinAeD-E\",\n\t\"ValidationError\": \"IdUrjUPRaeq5tWS8_-VGI\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://saltydogui/./src/client/Components/UI/Input/Input.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Containers/Login/Login.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Containers/Login/Login.css ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".VnXkeWIiurjrR3UAlEhus {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n._2_SNl38hNZP0vYrWJFKRjU {\\n  margin: 70px auto;\\n  width: 320px;\\n  position: relative;\\n  right: 24px;\\n}\\n\\n._2u73Et0hONWJwQITUC6RUF {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 20px;\\n  padding: 22px 22px 22px 22px;\\n  border-radius: 25px;\\n  background: #282e33;\\n}\\n\\n._3FaTunc0hiK3-blQQdrl1S {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font: 87.5%/1.9em 'Open Sans', sans-serif;\\n}\\n\\n._3kP2XpOciN29LiSnVzHE6z {\\n  font-family: futura-pt-bold;\\n  font-weight: 700;\\n  font-size: 50px;\\n  margin: 10px;\\n}\\n\\n._3e28aeWZVs3KO-u4R3K7Zc {\\n  margin: auto;\\n  padding: 22px 22px 22px 22px;\\n  width: 100%;\\n  border-radius: 25px;\\n  background: #282e33;\\n \\n}\\n\\n.cEtuA5Phwvxqc3D9bvzWX {\\n  background: #b5cd60;\\n  border: 0;\\n  width: 100%;\\n  height: 40px;\\n  border-radius: 3px;\\n  color: white;\\n  cursor: pointer;\\n  transition: background 0.3s ease-in-out;\\n}\\n\\n.cEtuA5Phwvxqc3D9bvzWX :hover {\\n  background: #16aa56;\\n}\\n\\n._26sFz4tGgHCrh67BGpClON {\\n  text-decoration: none;\\n  color: #434a52;\\n  font-size: larger;\\n  font-weight: bold;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Auth\": \"VnXkeWIiurjrR3UAlEhus\",\n\t\"Login\": \"_2_SNl38hNZP0vYrWJFKRjU\",\n\t\"Logo_Div\": \"_2u73Et0hONWJwQITUC6RUF\",\n\t\"Salty_Div\": \"_3FaTunc0hiK3-blQQdrl1S\",\n\t\"Salty_Label\": \"_3kP2XpOciN29LiSnVzHE6z\",\n\t\"Form\": \"_3e28aeWZVs3KO-u4R3K7Zc\",\n\t\"Submit\": \"cEtuA5Phwvxqc3D9bvzWX\",\n\t\"Signup\": \"_26sFz4tGgHCrh67BGpClON\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://saltydogui/./src/client/Containers/Login/Login.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./src/client/Components/UI/Input/Input.css":
/*!**************************************************!*\
  !*** ./src/client/Components/UI/Input/Input.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Input.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Components/UI/Input/Input.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Input_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Input_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://saltydogui/./src/client/Components/UI/Input/Input.css?");

/***/ }),

/***/ "./src/client/Containers/Login/Login.css":
/*!***********************************************!*\
  !*** ./src/client/Containers/Login/Login.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Login.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/Containers/Login/Login.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Login_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_Login_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://saltydogui/./src/client/Containers/Login/Login.css?");

/***/ })

}]);