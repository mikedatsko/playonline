(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/assets/styles/style.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/ui/assets/styles/style.scss ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding: 50px;\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif; }\n\na {\n  color: #00B7FF; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/components/App/App.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/ui/components/App/App.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center; }\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin; }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/components */ "./src/ui/components/index.js");
/* harmony import */ var _ui_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/store */ "./src/ui/store.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ui_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/assets/styles/style.scss */ "./src/ui/assets/styles/style.scss");
/* harmony import */ var _ui_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ui_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/mike/Documents/datsko/online/src/index.js";









react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _ui_store__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/",
  component: _ui_components__WEBPACK_IMPORTED_MODULE_4__["App"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/ui/actions/common.actions.js":
/*!******************************************!*\
  !*** ./src/ui/actions/common.actions.js ***!
  \******************************************/
/*! exports provided: CommonActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonActions", function() { return CommonActions; });
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-api-middleware */ "./node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/ui/reducers/index.js");



var CommonActions = {
  showPreloader: function showPreloader() {
    return {
      type: _reducers__WEBPACK_IMPORTED_MODULE_2__["CommonTypes"].SHOW_PRELOADER
    };
  },
  hidePreloader: function hidePreloader() {
    return {
      type: _reducers__WEBPACK_IMPORTED_MODULE_2__["CommonTypes"].HIDE_PRELOADER
    };
  },
  callApi: function callApi() {
    return Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__["RSAA"], {
      endpoint: '',
      method: 'GET',
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    });
  }
};

/***/ }),

/***/ "./src/ui/actions/index.js":
/*!*********************************!*\
  !*** ./src/ui/actions/index.js ***!
  \*********************************/
/*! exports provided: CommonActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.actions */ "./src/ui/actions/common.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonActions", function() { return _common_actions__WEBPACK_IMPORTED_MODULE_0__["CommonActions"]; });



/***/ }),

/***/ "./src/ui/assets/images/logo.svg":
/*!***************************************!*\
  !*** ./src/ui/assets/images/logo.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/ui/assets/styles/style.scss":
/*!*****************************************!*\
  !*** ./src/ui/assets/styles/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/assets/styles/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/assets/styles/style.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/assets/styles/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

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
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/logo.svg */ "./src/ui/assets/images/logo.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.scss */ "./src/ui/components/App/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions */ "./src/ui/actions/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services */ "./src/ui/services/index.js");






var _jsxFileName = "/Users/mike/Documents/datsko/online/src/ui/components/App/App.js";









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
      var _this = this;

      this.props.showPreloader();
      this.setState({
        timestamp: 0
      });
      _services__WEBPACK_IMPORTED_MODULE_13__["default"].socket.start().then(function (timestamp) {
        return _this.setState({
          timestamp: timestamp
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.hidePreloader();
    }
  }, {
    key: "render",
    value: function render() {
      var isShowPreloader = this.props.isShowPreloader;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "App-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), "Header")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Sidebar", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Timestamp: ", this.state.timestamp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, isShowPreloader ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Loading...") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Content"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Footer 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Footer 2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Footer 3")));
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
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions__WEBPACK_IMPORTED_MODULE_12__["CommonActions"]), dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/ui/components/App/App.scss":
/*!****************************************!*\
  !*** ./src/ui/components/App/App.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/components/App/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/components/App/App.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/ui/components/App/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/ui/components/App/index.js":
/*!****************************************!*\
  !*** ./src/ui/components/App/index.js ***!
  \****************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/ui/components/App/App.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/ui/components/index.js":
/*!************************************!*\
  !*** ./src/ui/components/index.js ***!
  \************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/ui/components/App/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["App"]; });



/***/ }),

/***/ "./src/ui/config.js":
/*!**************************!*\
  !*** ./src/ui/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  server: 'http://localhost:3000'
});

/***/ }),

/***/ "./src/ui/reducers/common.reducer.js":
/*!*******************************************!*\
  !*** ./src/ui/reducers/common.reducer.js ***!
  \*******************************************/
/*! exports provided: CommonTypes, CommonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonTypes", function() { return CommonTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonReducer", function() { return CommonReducer; });
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var name = 'COMMON';
var CommonTypes = {
  SHOW_PRELOADER: "".concat(name, ":SHOW_PRELOADER"),
  HIDE_PRELOADER: "".concat(name, ":HIDE_PRELOADER")
};
var initialState = {
  isShowPreloader: false
};
var CommonReducer = function CommonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CommonTypes.SHOW_PRELOADER:
      {
        return Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isShowPreloader: true
        });
      }

    case CommonTypes.HIDE_PRELOADER:
      {
        return Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          isShowPreloader: false
        });
      }

    default:
      {
        return state;
      }
  }
};

/***/ }),

/***/ "./src/ui/reducers/index.js":
/*!**********************************!*\
  !*** ./src/ui/reducers/index.js ***!
  \**********************************/
/*! exports provided: CommonTypes, CommonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.reducer */ "./src/ui/reducers/common.reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonTypes", function() { return _common_reducer__WEBPACK_IMPORTED_MODULE_0__["CommonTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonReducer", function() { return _common_reducer__WEBPACK_IMPORTED_MODULE_0__["CommonReducer"]; });



/***/ }),

/***/ "./src/ui/services/index.js":
/*!**********************************!*\
  !*** ./src/ui/services/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ "./src/ui/services/socket.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  socket: _socket__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/ui/services/socket.js":
/*!***********************************!*\
  !*** ./src/ui/services/socket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/ui/config.js");




var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(_config__WEBPACK_IMPORTED_MODULE_3__["default"].server);

var Socket =
/*#__PURE__*/
function () {
  function Socket() {
    Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Socket);
  }

  Object(_Users_mike_Documents_datsko_online_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Socket, [{
    key: "start",
    value: function start() {
      socket.emit('subscribeToTimer', 1000);
      return new Promise(function (res, rej) {
        socket.on('timer', function (timestamp) {
          return res(timestamp);
        });
      });
    }
  }]);

  return Socket;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Socket());

/***/ }),

/***/ "./src/ui/store.js":
/*!*************************!*\
  !*** ./src/ui/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-api-middleware */ "./node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/ui/reducers/index.js");





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  common: _reducers__WEBPACK_IMPORTED_MODULE_4__["CommonReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_api_middleware__WEBPACK_IMPORTED_MODULE_3__["apiMiddleware"]))));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mike/Documents/datsko/online/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map