(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Order"],{

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Order/styles.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/pages/Order/styles.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#buyed-items {\n    width: 100%;\n}\n\n#buyed-items li {\n    width: 100%;\n    height: auto;\n    background-color: var(--white);\n    border-radius: 5px;\n    padding: 6px;\n    position: relative;\n    display: flex;\n    margin-top: 15px;\n    justify-content: space-between;\n}\n\n#buyed-items li .item-image {\n    min-height: 92px;\n    min-width: 92px;\n    border-radius: 5px;\n    background-position: center;\n    background-size: cover;\n}\n\n#buyed-items li .product-info {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n\n    padding: 6px 16px;\n}\n\n#buyed-items li .product-info .item,\n#buyed-items li .product-info .additional .add,\n#buyed-items li .product-info .total-price {\n    display: flex;\n    justify-content: space-between;\n}\n\n#buyed-items li .product-info .item {\n    font-weight: bolder;\n}\n\n#buyed-items li .product-info .additional {\n    padding: 6px 0;\n}\n\n#buyed-items li .product-info .additional.out-observation {\n    border-radius: 5px;\n    border-bottom: 1.3px solid rgba(0, 0, 0, 0.1);\n    margin-bottom: 6px;\n}\n\n#buyed-items li .product-info .observation {\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.1);\n    margin-bottom: 6px;\n    padding: 6px;\n    font-size: 13px;\n}\n\n#buyed-items li .product-info .additional .add {\n    color: rgba(0, 0, 0, 0.7);\n}\n\n#buyed-items li .product-info .total-price {\n    font-weight: bolder;\n}\n\n#buyed-items li .control-quantity {\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n    gap: 6px;\n    margin-right: 6px;\n}\n\n#buyed-items li .control-quantity .btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    color: #FFF;\n    font-weight: 600;\n    width: 32px;\n    min-height: 32px;\n    transition: all 0.3s;\n}\n\n#buyed-items li .control-quantity .btn:active{\n    background: rgba(0, 0, 0, 0.4);\n    transition: all 0.3s;\n}\n\n#buyed-items li .control-quantity .btn.remove-item {\n    background: #DC3545;\n}\n\n.conclude {\n    width: 100%;\n    height: 55px;\n    background-color: var(--green);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    color: #FFF;\n    padding: 0 15px;\n    font-size: 15px;\n    font-weight: 700;\n    z-index: 9999;\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.conclude .text-c {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n}\n\n.conclude .text-c .desc-c {\n    font-size: 13px;\n    font-weight: 300;\n}\n\n.conclude svg {\n    stroke-width: 3px;\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    background: #FFF;\n    color: var(--green);\n    border-radius: 100%;\n    padding: 5px;\n}\n\n.warning-cart {\n    padding: 30px;\n    border: 1px solid rgba(0, 0, 0, 0.35);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border-radius: 4px;\n    margin-top: 20px;\n}\n\n.warning-cart a {\n    margin-top: 8px;\n    background: var(--green);\n    border-radius: 4px;\n    color: var(--white);\n    padding: 15px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.cupom-form .input-group {\n    flex-direction: row;\n    align-items: center;\n}\n\n.cupom-form .input-group input {\n    flex: 1;\n    display: flex;\n}\n\n.cupom-form .input-group button {\n    width: auto;\n    height: 43px;\n    background-color: var(--green);\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);\n    padding: 0 12px;\n    color: var(--white);\n    margin-left: 6px;\n}\n\n.cupom-form .input-group button[disabled]{\n    filter: grayscale(1);\n    cursor: not-allowed;\n}\n\n.cupom-form .input-group input[disabled]{\n    filter: grayscale(1);\n    cursor: not-allowed;\n}\n\n.coupon-content {\n    cursor: pointer;\n    position: relative;\n    margin-top: 10px;\n}\n\n.coupon-content .red-box-coupon {\n    background: #E0201F;\n    border-radius: 5px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    color: white;\n}\n\n.coupon-content .red-box-coupon .coupon-infos {\n    padding-left: 10px;\n}\n\n.coupon-content .red-box-coupon .coupon-infos b {\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n\n.coupon-content .red-box-coupon .coupon-infos p {\n    font-size: 12px;\n}\n\n.coupon-content .grey-box-coupon {\n    font-size: 13px;\n    color: #686868;\n    background: #B2B2B2;\n    border-radius: 0 0 5px 5px;\n    padding: 10px 5px 5px 5px;\n    margin-top: -8px;\n    z-index: -1;\n    position: relative;\n}\n", ""]);

// exports


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

/***/ }),

/***/ "./resources/js/system/pages/Order/index.js":
/*!**************************************************!*\
  !*** ./resources/js/system/pages/Order/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_copy_to_clipboard_lib_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard/lib/Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js");
/* harmony import */ var react_copy_to_clipboard_lib_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard_lib_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api */ "./resources/js/system/services/api.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @quentin-sommer/react-useragent */ "./node_modules/@quentin-sommer/react-useragent/dist/react-useragent.esm.js");
/* harmony import */ var _components_TitlePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TitlePage */ "./resources/js/system/components/TitlePage/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/pages/Order/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Buy = function Buy() {
  var useOSName = function useOSName() {
    var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_8__["UAContext"]),
        uaResults = _useContext.uaResults,
        parser = _useContext.parser;

    return parser.getOS().name;
  };

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var ReduxState = function ReduxState() {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state;
    }, []);
  };

  var cart = ReduxState().cart;
  var user = ReduxState().user;
  var coupon = ReduxState().coupon;
  var configurations = ReduxState().configurations;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (coupon.name) {
      setCouponState(false);
    }
  }, [coupon]);
  var price = 0;
  cart.map(function (item) {
    price = price + item.product_price * item.product_quantity;
    item === null || item === void 0 ? void 0 : item.client_additional.map(function (client_additional) {
      if (client_additional.hight_price == 'no') {
        client_additional.selecteds.map(function (additional) {
          price = price + parseFloat(additional.price) * parseFloat(additional.qty) * item.product_quantity;
        });
      } else {
        var prices = [];
        client_additional.selecteds.map(function (additional) {
          prices.push(additional.price);
        });
        prices.sort(function (a, b) {
          return b - a;
        });
        price = price + parseFloat(prices[0]) * item.product_quantity;
      }
    });
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      couponState = _useState2[0],
      setCouponState = _useState2[1];

  var handleCartItemQuantity = function handleCartItemQuantity(action, index) {
    var newCartData = cart;

    if (action == 'increment') {
      newCartData[index].product_quantity = newCartData[index].product_quantity + 1;
    }

    if (action == 'decrement') {
      newCartData[index].product_quantity = newCartData[index].product_quantity - 1 < 1 ? 1 : newCartData[index].product_quantity - 1;
    }

    dispatch({
      type: 'UPDATE_CART',
      data: newCartData
    });
  };

  var handleRemoveCartItem = function handleRemoveCartItem(index) {
    var newCartData = cart;
    delete newCartData[index];
    newCartData = newCartData.filter(function (el) {
      return el != null;
    });
    dispatch({
      type: 'UPDATE_CART',
      data: newCartData
    });
  };

  var handleBuy = function handleBuy() {
    if (user.logged === false) {
      dispatch({
        type: 'MODAL_LOGIN'
      });
    } else {
      history.push('/buy');
    }
  };

  var handleCouponSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(target) {
      var data, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(user.logged === false)) {
                _context.next = 4;
                break;
              }

              dispatch({
                type: 'MODAL_LOGIN'
              });
              _context.next = 21;
              break;

            case 4:
              data = new FormData(target);
              data.set('token', localStorage.getItem('token'));
              data.set('price', price);
              target.style.opacity = 0.5;
              _context.next = 10;
              return _services_api__WEBPACK_IMPORTED_MODULE_6__["default"].post('/coupon', data);

            case 10:
              response = _context.sent;
              target.style.opacity = 1;

              if (response) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", react_notify_toast__WEBPACK_IMPORTED_MODULE_7__["notify"].show("Fa\xE7a login para validar o cupom!", 'error', 3000));

            case 14:
              if (!response.data.error) {
                _context.next = 18;
                break;
              }

              return _context.abrupt("return", react_notify_toast__WEBPACK_IMPORTED_MODULE_7__["notify"].show(response.data.error.message, 'error', 3000));

            case 18:
              setCouponState(false);
              dispatch({
                type: 'ADD_COUPON',
                data: response.data.success.coupon
              });
              return _context.abrupt("return", react_notify_toast__WEBPACK_IMPORTED_MODULE_7__["notify"].show(response.data.success.message, 'success', 3000));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCouponSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitlePage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Carrinho de compras",
    icon: "Anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    id: "buyed-items"
  }, cart.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, cart.map(function (item, productIndex) {
    var sum_price = item.product_price;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.product_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item-image",
      style: {
        backgroundImage: "url(".concat(item.product_image, ")")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "product-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title"
    }, item.product_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "price"
    }, item.product_price != 0 ? "R$ ".concat(item.product_price.toFixed(2)) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "additional ".concat(!item.client_optional && 'out-observation')
    }, item === null || item === void 0 ? void 0 : item.client_additional.map(function (client_additional) {
      var sum = true;

      if (client_additional.hight_price == 'yes') {
        sum = false;
        var prices = [];
        client_additional.selecteds.map(function (additional) {
          prices.push(additional.price);
        });
        prices.sort(function (a, b) {
          return b - a;
        });
        sum_price = sum_price + parseFloat(prices[0]);
      }

      return client_additional.selecteds.map(function (additional, index) {
        if (sum) {
          sum_price = sum_price + parseFloat(additional.price) * parseFloat(additional.qty);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: index,
          className: "add"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "title"
        }, "- x", additional.qty, " ", additional.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "price"
        }, additional.price > 0 && client_additional.hight_price != 'yes' ? "R$ ".concat((additional.price * additional.qty).toFixed(2)) : null));
      });
    })), item.client_optional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "observation"
    }, "OBS: ", item.client_optional), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "total-price"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Valor total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "R$ ", (sum_price * item.product_quantity).toFixed(2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "control-quantity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "btn remove-item",
      onClick: function onClick() {
        return handleRemoveCartItem(productIndex);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["X"], {
      size: 24
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "btn more",
      onClick: function onClick() {
        return handleCartItemQuantity('increment', productIndex);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Plus"], {
      size: 19
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "btn qtty"
    }, item.product_quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "btn less",
      onClick: function onClick() {
        return handleCartItemQuantity('decrement', productIndex);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Minus"], {
      size: 19
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "cupom-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleCouponSubmit(e.target);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title-form"
  }, "Cupom de desconto?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "cupom",
    id: "input-coupon",
    defaultValue: coupon === null || coupon === void 0 ? void 0 : coupon.name,
    disabled: !couponState,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    id: "submit-coupon",
    disabled: !couponState
  }, "Aplicar"))), configurations.coupon.length != 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_copy_to_clipboard_lib_Component__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], {
    text: configurations.coupon[0].name,
    onCopy: function onCopy() {
      document.querySelector('#input-coupon').setAttribute('value', configurations.coupon[0].name);
      document.querySelector('#submit-coupon').click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "coupon-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "red-box-coupon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Gift"], {
    size: '50',
    color: '#FFF'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "coupon-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Cupom de ", configurations.coupon[0].discount_type == 'money' ? "R$ ".concat(configurations.coupon[0].discount) : "".concat(configurations.coupon[0].discount, "%"), " dispon\xEDvel"), configurations.coupon[0].price_min > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Para pedidos acima de R$ ", configurations.coupon[0].price_min.toFixed(2)), configurations.coupon[0].final_date != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "V\xE1lido at\xE9 ", configurations.coupon[0].final_date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grey-box-coupon"
  }, "Clique para ativar o cupom")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "warning-cart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"], {
    size: 30
  }), " estou vazio :("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: '/'
  }, " Clique aqui para ver o cardapio")))), cart.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "conclude",
    onClick: function onClick() {
      return handleBuy();
    },
    style: useOSName() == 'iOS' ? {
      'paddingBottom': 30,
      'height': 80
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], {
    color: "#000000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-c"
  }, "Finalizar pedido", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc-c"
  }, "Agora \xE9 s\xF3 selecionar o metodo de pagamento e local de entrega")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Buy);

/***/ }),

/***/ "./resources/js/system/pages/Order/styles.css":
/*!****************************************************!*\
  !*** ./resources/js/system/pages/Order/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Order/styles.css");

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