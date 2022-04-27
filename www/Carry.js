(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Carry/styles.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/pages/Carry/styles.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n    text-align: center;\n    padding-bottom: 30px;\n}\n\n.based-check {\n    width: 80px;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    background-color: var(--green);\n    border-radius: 100%;\n    margin-top: 30px;\n}\n\n.based-check.red {\n    background-color: #F44336;\n}\n\n.based-check svg {\n    color: var(--white);\n    width: 35px;\n    height: 35px;\n    stroke-width: 5px;\n    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));\n}\n\n.id-demand {\n    font-weight: 700;\n    font-size: 30px;\n    margin-top: 20px;\n    color: var(--black);\n    text-transform: uppercase;\n}\n\n.desc {\n    margin-top: 15px;\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n.option {\n    font-size: 14px;\n    text-align: left;\n}\n\nul.carry {\n    margin-top: 30px;\n    position: relative;\n    display: grid;\n    grid-auto-flow: row;\n    gap: 10px;\n}\n\nul.carry li {\n    width: 100%;\n    height: 45px;\n    background-color: var(--white);\n    border-radius: 50px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);\n    display: flex;\n    align-items: center;\n    padding: 0 7px;\n    font-size: 14px;\n    position: relative;\n}\n\nul.carry li svg {\n    position: absolute;\n    color: var(--white);\n    stroke-width: 4px;\n    height: 20px;\n    left: 11px;\n    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));\n}\n\nul.carry li:before {\n    content: '';\n    width: 33px;\n    height: 33px;\n    border-radius: 100%;\n    background-color: var(--yellow);\n    margin-right: 12px;\n}\n\nul.carry li.check:before {\n    background-color: var(--green);\n}\n\nul.carry li.pin {\n    background-color: var(--green);\n    color: var(--white);\n    text-transform: uppercase;\n    margin-top: 30px;\n    justify-content: center;\n    font-size: 15px;\n}\n\nul.carry li.red {\n    background-color: #dc3b3a;\n    margin-top: 5px;\n}\n\nul.carry li.pin:before {\n    display: none;\n}\n\n.float-btn {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    right: 20px;\n    bottom: 20px;\n    padding: 15px;\n    border-radius: 50px;\n    font-weight: bold;\n    color: var(--white);\n    background: var(--priceItem);\n}\n\n.float-btn .icon {\n    margin-right: 8px;\n    width: 25px;\n    height: 25px;\n}\n\n.pix-btn{\n    background: white;\n    border-radius:6px;\n    padding: 20px 30px;\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n    text-transform: uppercase;\n    cursor:pointer;\n    box-shadow:0 1px 10px rgb(0 0 0 / 5%);\n}\n\n.pix-btn > svg{\n    margin-right:10px;\n}\n\n.background-modal{\n    background:rgba(0, 0, 0, .3);\n    width:100%;\n    height:100%;\n    position:fixed;\n    top:0;\n    left:0;\n    z-index:999;\n}\n\n.modal{\n    background:white;\n    width:calc(100% - 40px);\n    height:auto;\n    padding:20px;\n    border-radius:6px;\n    top:50%;\n    left:50%;\n    position:fixed;\n    transform:translate(-50%, -50%);\n    z-index:9999;\n}\n\n.modal-close{\n    background:#F44336;\n    float:right;\n    margin-right:-20px;\n    margin-top:-60px;\n    padding:7.5px 15px;\n    border-radius:6px;\n    font-weight:bold;\n    color:white;\n    cursor:pointer;\n}\n\n.modal-header{\n    background: white;\n    width:100%;\n    margin-top:20px;\n    margin-bottom:30px;\n    border-radius:6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\n.modal-header > svg{\n    margin-right:20px;\n}\n\n.text-type{\n    width:100%;\n    margin-bottom:10px;\n    text-align: center;\n}\n\n.text-copy{\n    width:100%;\n    font-weight:bold;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.input-pix-key{\n    background:white;\n    width:100%;\n    padding:15px 20px;\n    margin:15px 0;\n    font-size:15px;\n    text-align: center;\n    border:1px solid rgba(0, 0, 0, .1);\n    box-shadow:0 1px 10px rgb(0 0 0 / 5%);\n}\n\n.text-info{\n    width:100%;\n    margin:20px 0;\n    padding:0 20px;\n    font-size:13px;\n    font-weight:bold;\n    text-align: center;\n}\n\n.text-info-delivery{\n    width:100%;\n    margin:20px 0;\n    padding:0 20px;\n    font-size:15px;\n    font-weight:bold;\n    color:#d35400;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n\n.send-whatsapp-btn{\n    background:var(--priceItem);\n    padding:15px 30px;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    font-size:15px;\n    color:white;\n    text-transform:uppercase;\n    cursor:pointer;\n}\n\n.send-whatsapp-btn > svg{\n    margin-right:10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/system/pages/Carry/index.js":
/*!**************************************************!*\
  !*** ./resources/js/system/pages/Carry/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_TitlePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TitlePage */ "./resources/js/system/components/TitlePage/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/pages/Carry/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ "./resources/js/system/services/api.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Fidelity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Fidelity */ "./resources/js/system/components/Fidelity/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var statusNumber = {
  'new': 1,
  'approved': 2,
  'preparation': 3,
  'delivery': 4,
  'finished': 5
};
var deliveryStatus = {
  '1': 'Delivery',
  '2': 'Retirar na loja',
  '3': 'Drive-in',
  '4': 'Consumir na loja'
};
var timeout;

var Carry = function Carry(_ref) {
  var _pixData$, _pixData$2;

  var location = _ref.location;

  if (!location.state.data) {
    return history.push('/');
  }

  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var configurations = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.configurations;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(location.state.data),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      pixData = _useState4[0],
      setPixData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      modalOpen = _useState6[0],
      setModalOpen = _useState6[1];

  var updateUserOrder = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var data, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {};
            data.id = location.state.data.id;
            data.token = localStorage.getItem('token');
            _context.next = 5;
            return _services_api__WEBPACK_IMPORTED_MODULE_7__["default"].post('/order', data);

          case 5:
            response = _context.sent;
            setOrder(response.data);
            timeout = setTimeout(function () {
              return updateUserOrder();
            }, 5000);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  function getPixData() {
    return _getPixData.apply(this, arguments);
  }

  function _getPixData() {
    _getPixData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _services_api__WEBPACK_IMPORTED_MODULE_7__["default"].get("/pix", {
                token: localStorage.getItem('token')
              });

            case 2:
              response = _context3.sent;
              setPixData(response.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getPixData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    updateUserOrder();
    getPixData();
    return function () {
      return clearTimeout(timeout);
    };
  }, []);

  var handleCancellOrder = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var token, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = localStorage.getItem('token');
              _context2.next = 3;
              return _services_api__WEBPACK_IMPORTED_MODULE_7__["default"].post('order_cancell', {
                id: id,
                token: token
              });

            case 3:
              response = _context2.sent;

              if (!response.data.error) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return", react_notify_toast__WEBPACK_IMPORTED_MODULE_8__["notify"].show(response.data.error.message, 'error', 3000));

            case 8:
              setOrder(response.data.success.data);
              return _context2.abrupt("return", react_notify_toast__WEBPACK_IMPORTED_MODULE_8__["notify"].show(response.data.success.message, 'success', 3000));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCancellOrder(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleCopyPix = function handleCopyPix(key) {
    navigator.clipboard.writeText(key);
    alert("Chave Pix copiada com sucesso.");
  };

  console.log(order);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitlePage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Acompanhar pedido"
  }), order.status != 'cancelled' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "based-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "id-demand"
  }, "n\xBA pedido ", order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc"
  }, "Obrigado por realizar esta compra!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Pagamento:"), " ", order.payment_option == 'money' ? 'Dinheiro' : order.payment_option == 'pix' ? 'Pix' : 'Cartão de Crédito ou Débito', " ", order.payment_moneyback != 0 ? "\u2022 Troco para R$ ".concat(order.payment_moneyback) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Op\xE7\xE3o de entrega:"), " ", deliveryStatus[order.delivery_option]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Valor total:"), " R$ ", !order['coupon'] ? order.product_price + order.delivery_price : (order['coupon'].discount_type === 'money' ? order.product_price - order['coupon'].discount : order.product_price - order.product_price * order['coupon'].discount / 100) + order.delivery_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "carry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: statusNumber[order.status] >= 1 ? 'check' : null
  }, statusNumber[order.status] >= 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Check"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Minus"], null), " Pedido enviado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: statusNumber[order.status] >= 2 ? 'check' : null
  }, statusNumber[order.status] >= 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Check"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Minus"], null), " Pedido aceito"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: statusNumber[order.status] >= 3 ? 'check' : null
  }, statusNumber[order.status] >= 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Check"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Minus"], null), " Pedido em produ\xE7\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: statusNumber[order.status] >= 4 ? 'check' : null
  }, statusNumber[order.status] >= 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Check"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Minus"], null), " ", order.delivery_option == 1 ? 'Pronto para entrega' : 'Pronto para retirada'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: statusNumber[order.status] >= 5 ? 'check' : null
  }, statusNumber[order.status] >= 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Check"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["Minus"], null), " Entregue"), configurations.cancellable == 'true' && order.status == 'new' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "pin red",
    onClick: function onClick() {
      return handleCancellOrder(order.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["X"], {
    color: "#FFF",
    size: 15
  }), " Cancelar pedido"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fidelity__WEBPACK_IMPORTED_MODULE_9__["default"], null)), order.payment_option == 'pix' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "pix-btn",
    onClick: function onClick() {
      return setModalOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "30",
    height: "31",
    viewBox: "0 0 30 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M23.396 23.31C22.2189 23.31 21.1119 22.8517 20.2797 22.0198L15.78 17.5201C15.4642 17.2034 14.9135 17.2044 14.5977 17.5201L10.0816 22.0363C9.2492 22.8681 8.14225 23.3264 6.96518 23.3264H6.07849L11.7773 29.0254C13.5572 30.8051 16.4429 30.8051 18.2227 29.0254L23.9381 23.31H23.396Z",
    fill: "#32BCAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.96516 7.39381C8.14223 7.39381 9.24918 7.85225 10.0814 8.68419L14.5975 13.201C14.9228 13.5263 15.4539 13.5277 15.7799 13.2006L20.2796 8.70056C21.1119 7.86862 22.2189 7.41032 23.3959 7.41032H23.9379L18.2227 1.69509C16.4428 -0.0847756 13.5572 -0.0847756 11.7773 1.69509L6.07861 7.39381H6.96516Z",
    fill: "#32BCAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M28.6651 12.1375L25.2113 8.68378C25.1353 8.71426 25.053 8.73331 24.9661 8.73331H23.3959C22.584 8.73331 21.7893 9.0625 21.2158 9.6365L16.716 14.1363C16.2951 14.5573 15.7418 14.7681 15.189 14.7681C14.6357 14.7681 14.0829 14.5573 13.6619 14.1367L9.14532 9.62014C8.5716 9.04613 7.77705 8.71694 6.96515 8.71694H5.03431C4.95205 8.71694 4.87501 8.69747 4.80234 8.67009L1.3349 12.1375C-0.444965 13.9173 -0.444965 16.803 1.3349 18.583L4.8022 22.0503C4.87487 22.0229 4.95205 22.0034 5.03431 22.0034H6.96515C7.77705 22.0034 8.5716 21.6743 9.14532 21.1002L13.6614 16.5841C14.4777 15.7685 15.9006 15.7681 16.716 16.5845L21.2158 21.0837C21.7893 21.6579 22.584 21.9871 23.3959 21.9871H24.9661C25.0532 21.9871 25.1353 22.006 25.2115 22.0365L28.6651 18.583C30.445 16.803 30.445 13.9173 28.6651 12.1375Z",
    fill: "#32BCAD"
  })), "Copiar Chave Pix")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      height: 80
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "based-check red"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["X"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "id-demand"
  }, "n\xBA pedido ", order.id_order), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc"
  }, "Seu pedido foi cancelado!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: configurations.whatsapp,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "float-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#fff",
    d: "M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#fff",
    d: "M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#cfd8dc",
    d: "M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#40c351",
    d: "M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text"
  }, "Problemas no pedido? Clique aqui"))), modalOpen && order.payment_option == 'pix' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "background-modal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "modal-close",
    onClick: function onClick() {
      return setModalOpen(false);
    }
  }, "[X] Fechar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "30",
    height: "31",
    viewBox: "0 0 30 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M23.396 23.31C22.2189 23.31 21.1119 22.8517 20.2797 22.0198L15.78 17.5201C15.4642 17.2034 14.9135 17.2044 14.5977 17.5201L10.0816 22.0363C9.2492 22.8681 8.14225 23.3264 6.96518 23.3264H6.07849L11.7773 29.0254C13.5572 30.8051 16.4429 30.8051 18.2227 29.0254L23.9381 23.31H23.396Z",
    fill: "#32BCAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M6.96516 7.39381C8.14223 7.39381 9.24918 7.85225 10.0814 8.68419L14.5975 13.201C14.9228 13.5263 15.4539 13.5277 15.7799 13.2006L20.2796 8.70056C21.1119 7.86862 22.2189 7.41032 23.3959 7.41032H23.9379L18.2227 1.69509C16.4428 -0.0847756 13.5572 -0.0847756 11.7773 1.69509L6.07861 7.39381H6.96516Z",
    fill: "#32BCAD"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M28.6651 12.1375L25.2113 8.68378C25.1353 8.71426 25.053 8.73331 24.9661 8.73331H23.3959C22.584 8.73331 21.7893 9.0625 21.2158 9.6365L16.716 14.1363C16.2951 14.5573 15.7418 14.7681 15.189 14.7681C14.6357 14.7681 14.0829 14.5573 13.6619 14.1367L9.14532 9.62014C8.5716 9.04613 7.77705 8.71694 6.96515 8.71694H5.03431C4.95205 8.71694 4.87501 8.69747 4.80234 8.67009L1.3349 12.1375C-0.444965 13.9173 -0.444965 16.803 1.3349 18.583L4.8022 22.0503C4.87487 22.0229 4.95205 22.0034 5.03431 22.0034H6.96515C7.77705 22.0034 8.5716 21.6743 9.14532 21.1002L13.6614 16.5841C14.4777 15.7685 15.9006 15.7681 16.716 16.5845L21.2158 21.0837C21.7893 21.6579 22.584 21.9871 23.3959 21.9871H24.9661C25.0532 21.9871 25.1353 22.006 25.2115 22.0365L28.6651 18.583C30.445 16.803 30.445 13.9173 28.6651 12.1375Z",
    fill: "#32BCAD"
  })), "Copiar Chave Pix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-type"
  }, "Tipo: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, (_pixData$ = pixData[0]) === null || _pixData$ === void 0 ? void 0 : _pixData$.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-copy"
  }, "Clique para copiar:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "input-pix-key",
    value: (_pixData$2 = pixData[0]) === null || _pixData$2 === void 0 ? void 0 : _pixData$2.pix,
    readOnly: true,
    onClick: function onClick() {
      var _pixData$3;

      return handleCopyPix((_pixData$3 = pixData[0]) === null || _pixData$3 === void 0 ? void 0 : _pixData$3.pix);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-info"
  }, "Ap\xF3s realizar o pagamento nos envie seu comprovante pelo WhatsApp."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-info-delivery"
  }, "O pedido s\xF3 ser\xE1 liberado com o envio do comprovante."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: configurations.whatsapp,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "send-whatsapp-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M0.0570068 24L1.74401 17.837C0.703007 16.033 0.156007 13.988 0.157007 11.891C0.160007 5.335 5.49501 0 12.05 0C15.231 0.001 18.217 1.24 20.463 3.488C22.708 5.736 23.944 8.724 23.943 11.902C23.94 18.459 18.605 23.794 12.05 23.794C10.06 23.793 8.09901 23.294 6.36201 22.346L0.0570068 24V24ZM6.65401 20.193C8.33001 21.188 9.93001 21.784 12.046 21.785C17.494 21.785 21.932 17.351 21.935 11.9C21.937 6.438 17.52 2.01 12.054 2.008C6.60201 2.008 2.16701 6.442 2.16501 11.892C2.16401 14.117 2.81601 15.783 3.91101 17.526L2.91201 21.174L6.65401 20.193V20.193ZM18.041 14.729C17.967 14.605 17.769 14.531 17.471 14.382C17.174 14.233 15.713 13.514 15.44 13.415C15.168 13.316 14.97 13.266 14.771 13.564C14.573 13.861 14.003 14.531 13.83 14.729C13.657 14.927 13.483 14.952 13.186 14.803C12.889 14.654 11.931 14.341 10.796 13.328C9.91301 12.54 9.31601 11.567 9.14301 11.269C8.97001 10.972 9.12501 10.811 9.27301 10.663C9.40701 10.53 9.57001 10.316 9.71901 10.142C9.87001 9.97 9.91901 9.846 10.019 9.647C10.118 9.449 10.069 9.275 9.99401 9.126C9.91901 8.978 9.32501 7.515 9.07801 6.92C8.83601 6.341 8.59101 6.419 8.40901 6.41L7.83901 6.4C7.64101 6.4 7.31901 6.474 7.04701 6.772C6.77501 7.07 6.00701 7.788 6.00701 9.251C6.00701 10.714 7.07201 12.127 7.22001 12.325C7.36901 12.523 9.31501 15.525 12.296 16.812C13.005 17.118 13.559 17.301 13.99 17.438C14.702 17.664 15.35 17.632 15.862 17.556C16.433 17.471 17.62 16.837 17.868 16.143C18.116 15.448 18.116 14.853 18.041 14.729V14.729Z",
    fill: "white"
  })), "Enviar Comprovante"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Carry);

/***/ }),

/***/ "./resources/js/system/pages/Carry/styles.css":
/*!****************************************************!*\
  !*** ./resources/js/system/pages/Carry/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Carry/styles.css");

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