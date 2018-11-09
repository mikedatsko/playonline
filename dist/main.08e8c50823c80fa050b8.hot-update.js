webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.08e8c50823c80fa050b8.hot-update.js.map