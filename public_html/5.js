(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/Fidelity/Layout/style.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/components/Fidelity/Layout/style.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fidelity {\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    text-align: left;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.15);\n    padding: 5px 15px 10px 15px;\n    margin-top: 11px;\n}\n\n.fidelity .title-box {\n    width: 100%;\n    font-weight: 500 !important;\n    margin-top: 5px !important;\n}\n\n.fidelity .points {\n    padding: 5px 0;\n}\n\n.fidelity .points .point {\n    width: 30px;\n    height: 30px;\n    float: left;\n    border-radius: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 2.5px;\n    background: white;\n}\n\n.fidelity .points .point.check {\n    background: var(--priceItem);\n}\n\n\n.fidelity .points .point.award {\n    background: #FCC115;\n}\n\n.fidelity .rescue {\n    width: 100%;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    color: white;\n    margin-top: 5px;\n}\n\n.fidelity .rescue svg {\n    margin-right: 8px;\n}\n\n.fidelity .rescue.inactive {\n    background: #565658;\n    opacity: 0.3;\n    cursor: not-allowed;\n}\n\n.fidelity .rescue.active {\n    background: #1d9f2c;\n    cursor: pointer;\n}\n\n.fidelity .rescue.copy {\n    background: #565658;\n    display: flex;\n    flex-direction: column;\n    height: 55px;\n    cursor: pointer;\n}\n\n.fidelity .rescue.copy .small {\n   font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/TitlePage/Layout/styles.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/components/TitlePage/Layout/styles.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-page {\r\n    height: 45px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);\r\n    background-color: var(--white);\r\n    color: var(--black);\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./resources/js/system/components/Fidelity/Layout/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/system/components/Fidelity/Layout/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./resources/js/system/components/Fidelity/Layout/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Layout = function Layout(_ref) {
  var _user$data, _user$data$fidelity;

  var configurations = _ref.configurations,
      user = _ref.user,
      itemsFidelity = _ref.itemsFidelity,
      getCoupon = _ref.getCoupon,
      setPoints = _ref.setPoints,
      coupon = _ref.coupon;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_user$data = user.data) === null || _user$data === void 0 ? void 0 : (_user$data$fidelity = _user$data.fidelity) === null || _user$data$fidelity === void 0 ? void 0 : _user$data$fidelity.buttonStatus),
      _useState2 = _slicedToArray(_useState, 2),
      buttonStatus = _useState2[0],
      setButtonStatus = _useState2[1];

  return (configurations === null || configurations === void 0 ? void 0 : configurations.fidelity.status) === 'active' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fidelity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-box"
  }, "Programa de fidelidade:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-explication",
    dangerouslySetInnerHTML: {
      __html: configurations.fidelity.promotional_text
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "points"
  }, itemsFidelity.map(function (value, index) {
    return value.marked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "point check",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Check"], {
      color: '#FFFFFF',
      size: 16
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "point",
      key: index
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "point award"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Award"], {
    color: '#FFFFFF',
    size: 16
  }))), buttonStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, coupon !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboard"], {
    text: coupon,
    onCopy: function onCopy() {
      setButtonStatus(false);
      setPoints(0);
      react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show("Copiado com sucesso!", 'success', 5000);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rescue copy",
    onClick: function onClick() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Seu c\xF3digo \xE9: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, coupon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small"
  }, "aperte para copiar"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rescue active",
    onClick: function onClick() {
      return getCoupon();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Gift"], {
    size: 16
  }), " Resgatar cupom")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rescue inactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Gift"], {
    size: 16
  }), " Resgatar cupom")) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/system/components/Fidelity/Layout/style.css":
/*!******************************************************************!*\
  !*** ./resources/js/system/components/Fidelity/Layout/style.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/postcss-loader/src??ref--5-2!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/Fidelity/Layout/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/system/components/Fidelity/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/system/components/Fidelity/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_notify_toast_bin_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notify-toast/bin/notify */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast_bin_notify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast_bin_notify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ "./resources/js/system/services/api.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout */ "./resources/js/system/components/Fidelity/Layout/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Fidelity = function Fidelity() {
  var _user$data$fidelity;

  var ReduxState = function ReduxState() {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state;
    });
  };

  var configurations = ReduxState().configurations;
  var user = ReduxState().user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      itemsFidelity = _useState2[0],
      setItemsFidelity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      generatedCoupon = _useState4[0],
      setGeneratedCoupon = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_user$data$fidelity = user.data.fidelity) === null || _user$data$fidelity === void 0 ? void 0 : _user$data$fidelity.totalPoints),
      _useState6 = _slicedToArray(_useState5, 2),
      points = _useState6[0],
      setPoints = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var itemsFidelity = [];
    var totalFidelityPoints = points;

    for (var i = 0; i < configurations.fidelity.total_orders; i++) {
      itemsFidelity.push({
        'marked': totalFidelityPoints > 0 ? true : false
      });
      totalFidelityPoints > 0 ? totalFidelityPoints-- : null;
    }

    setItemsFidelity(itemsFidelity);
  }, [points]);

  var getCoupon = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document.querySelector('.rescue.active').style.opacity = 0.5;
              data = {};
              data.token = localStorage.getItem('token');
              _context.next = 5;
              return _services_api__WEBPACK_IMPORTED_MODULE_4__["default"].post('/fidelity_coupon', data);

            case 5:
              response = _context.sent;

              if (response.data.success) {
                document.querySelector('.rescue.active').style.opacity = 1;
                setGeneratedCoupon(response.data.success.data.coupon);
              } else {
                react_notify_toast_bin_notify__WEBPACK_IMPORTED_MODULE_3__["notify"].show(response.data.error.message, 'success', 5000);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCoupon() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    configurations: configurations,
    user: user,
    itemsFidelity: itemsFidelity,
    getCoupon: getCoupon,
    setPoints: setPoints,
    coupon: generatedCoupon
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fidelity);

/***/ }),

/***/ "./resources/js/system/components/TitlePage/Layout/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/system/components/TitlePage/Layout/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/TitlePage/Layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(_ref) {
  var title = _ref.title,
      icon = _ref.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-page"
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/system/components/TitlePage/Layout/styles.css":
/*!********************************************************************!*\
  !*** ./resources/js/system/components/TitlePage/Layout/styles.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/TitlePage/Layout/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/system/components/TitlePage/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/system/components/TitlePage/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./resources/js/system/components/TitlePage/Layout/index.js");



var TitlePage = function TitlePage(_ref) {
  var title = _ref.title,
      icon = _ref.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    icon: icon
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TitlePage);

/***/ })

}]);