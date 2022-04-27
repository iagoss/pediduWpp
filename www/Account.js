(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Account/styles.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/pages/Account/styles.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group-btn {\n    display: flex;\n    flex-direction: column;\n}\n\n.group-btn button {\n    background: var(--priceItem);\n    border-radius: 4px;\n    width: 100%;\n    color: var(--white);\n    font-size: 20px;\n    margin-top: 10px;\n    padding: 12px 0;\n    font-weight: 500;\n}\n\n.group-btn button span {\n    font-size: 30px;\n    font-weight: bolder;\n}\n\n.group-btn button p {\n    font-weight: normal;\n    margin-top: 4px;\n    font-size: 17px;\n}\n\n.doodle-image-container {\n    width: 100%;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    padding: 12px 0;\n}\n\n.doodle-image-container img {\n    max-width: 750%;\n    width: 100%;\n}\n\n.orders-list .title-box {\n    font-size: 16px;\n    font-weight: 500;\n    margin-top: 10px;\n    text-align: left;\n}\n\n.orders-list ul li {\n    display: flex;\n    overflow: hidden;\n    border-radius: 4px;\n    margin-top: 8px;\n}\n\n.orders-list ul li .infos {\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n    flex: 1;\n    background: var(--white);\n    text-align: left;\n}\n\n.orders-list ul li .infos .indentify {\n    font-weight: bolder;\n    width: 100%;\n}\n\n.orders-list ul li .button {\n    background: var(--priceItem);\n    color: var(--white);\n    width: 62px;\n    height: 62px;\n    padding: 0 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.logout {\n    display: flex;\n    align-items: center;\n    font-weight: bolder;\n    padding: 15px 0;\n}\n\n.logout .icon {\n    width: 28px;\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #F44336;\n    border-radius: 15px;\n    margin-right: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/system/assets/doodle.svg":
/*!***********************************************!*\
  !*** ./resources/js/system/assets/doodle.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/doodle.svg?f5c07640d6e7221204d83996446d3464";

/***/ }),

/***/ "./resources/js/system/pages/Account/index.js":
/*!****************************************************!*\
  !*** ./resources/js/system/pages/Account/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_doodle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/doodle.svg */ "./resources/js/system/assets/doodle.svg");
/* harmony import */ var _assets_doodle_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_doodle_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TitlePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TitlePage */ "./resources/js/system/components/TitlePage/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/pages/Account/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api */ "./resources/js/system/services/api.js");
/* harmony import */ var _components_Fidelity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Fidelity */ "./resources/js/system/components/Fidelity/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Account = function Account() {
  var ReduxState = function ReduxState() {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
      return state;
    });
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var configurations = ReduxState().configurations;
  var user = ReduxState().user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      ordersList = _useState2[0],
      setOrdersList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (user.logged === true) {
      var orderList = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _services_api__WEBPACK_IMPORTED_MODULE_8__["default"].post('order_list', {
                    token: localStorage.getItem('token')
                  });

                case 2:
                  response = _context.sent;
                  setOrdersList(response.data);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function orderList() {
          return _ref.apply(this, arguments);
        };
      }();

      orderList();
    }
  }, [user]);

  var handleUserLogout = function handleUserLogout() {
    dispatch({
      type: 'SET_LOGGED_DATA',
      data: []
    });
    dispatch({
      type: 'SET_LOGOUT'
    });
    localStorage.clear();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitlePage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Conta"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, !user.logged ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "doodle-image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "doodle-login",
    src: _assets_doodle_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick() {
      dispatch({
        type: 'MODAL_LOGIN'
      });
    }
  }, "Entre na sua conta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick() {
      history.push('/register');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Registre-se"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Crie sua conta para desfrutar do nosso sistema")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "orders-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fidelity__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title-box"
  }, "Seus \xFAltimos pedidos:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, ordersList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Voc\xEA ainda n\xE3o fez nenhum pedido.") : ordersList.map(function (order) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: order.id,
      onClick: function onClick() {
        history.push("/carry/".concat(order.id), {
          data: order
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "infos"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "indentify"
    }, "#", order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "date"
    }, order.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Plus"], null)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logout",
    onClick: function onClick() {
      return handleUserLogout();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["X"], {
    size: 18,
    color: '#FFFFFF'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Sair da conta")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./resources/js/system/pages/Account/styles.css":
/*!******************************************************!*\
  !*** ./resources/js/system/pages/Account/styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Account/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);