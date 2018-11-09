webpackHotUpdate("main",{

/***/ "./node_modules/socket.io/lib sync recursive":
/*!*****************************************!*\
  !*** ./node_modules/socket.io/lib sync ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/socket.io/lib sync recursive";

/***/ }),

/***/ "./src/ui/components/App/App.js":
/*!**************************************!*\
  !*** ./src/ui/components/App/App.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io */ "./node_modules/socket.io/lib/index.js");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/logo.svg */ "./src/ui/assets/images/logo.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.css */ "./src/ui/components/App/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions */ "./src/ui/actions/index.js");






var _jsxFileName = "/Users/mike/Documents/datsko/online/src/ui/components/App/App.js";








var socket = socket_io__WEBPACK_IMPORTED_MODULE_10___default()();
socket.on('message', function (data) {
  console.log(data);
});

var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App() {
    Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    return Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).apply(this, arguments));
  }

  Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.showPreloader();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      setTimeout(function () {
        return _this.props.hidePreloader();
      }, 5000);
    }
  }, {
    key: "render",
    value: function render() {
      var isShowPreloader = this.props.isShowPreloader;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "App-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Edit ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "src/App.js"), " and save to reload."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Learn React")), isShowPreloader ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Loading...") : null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

App.propTypes = {
  isShowPreloader: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isShowPreloader: state.common.isShowPreloader
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions__WEBPACK_IMPORTED_MODULE_13__["CommonActions"]), dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

})
//# sourceMappingURL=main.a88f49f59e95b801ffd3.hot-update.js.map