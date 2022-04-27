(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Additional"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/Optional/Layout/styles.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/components/Optional/Layout/styles.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#optional {\n    margin-top: 15px;\n    text-align: left;\n}\n\n.title-o {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 22px;\n    text-align: left;\n}\n\n.desc-o {\n    opacity: 0.6;\n    text-align: left;\n    font-size: 16px;\n    font-weight: 300;\n    margin-bottom: 15px;\n}\n\n.checkbox-o {\n    width: 100%;\n    position: relative;\n}\n\n.checkbox-o label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.checkbox-o input {\n    opacity: 0;\n    display: none;\n}\n\n.checkbox-o label .checked {\n    height: 35px;\n    width: 35px;\n    border-radius: 100%;\n    background-color: var(--white);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n\n.checkbox-o label .checked svg {\n    height: 18px;\n    stroke-width: 4px;\n    color: #FFF;\n}\n\n.checkbox-o input:checked+label .checked {\n    background-color: var(--green);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n\n.checkbox-o label .text-c .title-c {\n    font-size: 17px;\n    font-weight: 500;\n}\n\n.checkbox-o label .text-c .desc-c {\n    opacity: 0.8;\n    font-weight: 200;\n    font-size: 14px;\n    margin-left: 3px;\n}\n\n.checkbox-o label .price-c {\n    font-weight: 500;\n    font-size: 12px;\n    margin-left: 6px;\n    color: var(--priceItem);\n}\n\n.more-less-additional {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.more-less-additional .btns {\n    display: flex;\n}\n\n.more-less-additional .btns div {\n    padding: 7px;\n    border-radius: 5px;\n    max-width: 40px;\n    max-height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.more-less-additional .infos-c .title {\n    font-weight: 500;\n    font-size: 17px;\n}\n\n.more-less-additional .infos-c .desc {\n    font-weight: 200;\n    font-size: 14px;\n    margin: 0 0 0 3px !important;\n}\n\n.more-less-additional .infos-c .price {\n    font-weight: 500;\n    font-size: 12px;\n    margin: 0 0 0 6px !important;\n    color: var(--priceItem)\n}\n\n#optional .input-group, #optional .more-less-additional {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n}\n\n#optional.inactive #add-0 {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Additional/styles.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/pages/Additional/styles.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#additional-h {\n    height: 150px;\n}\n\n.based-text {\n    width: 100%;\n    background-color: var(--white);\n    padding: 15px;\n    padding-bottom: 20px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);\n}\n\n.based-text .title-a {\n    font-weight: 700;\n    font-size: 30px;\n}\n\n.based-text .desc-a {\n    opacity: 0.5;\n    font-size: 14px;\n}\n\n.input-group textarea {\n    resize: none;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 12px;\n}\n\n.conclude {\n    width: 100%;\n    height: 55px;\n    background-color: var(--green);\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    color: #FFF;\n    padding: 0 15px;\n    font-size: 15px;\n    font-weight: 700;\n    z-index: 9999;\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.conclude .text-c {\n    display: flex;\n    flex-direction: column;\n}\n\n.conclude .text-c .desc-c {\n    font-size: 13px;\n    font-weight: 300;\n}\n\n.conclude .text-c .price-c {\n    position: absolute;\n    right: 0;\n    height: 55px;\n    top: 0;\n    align-items: center;\n    display: flex;\n    padding: 0 30px;\n    background: rgba(0, 0, 0, 0.2);\n}\n\n.conclude svg {\n    stroke-width: 3px;\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    background: #FFF;\n    color: var(--green);\n    border-radius: 100%;\n    padding: 5px;\n}\n\n.comeback {\n    height: 40px;\n    background-color: var(--white);\n    display: flex;\n    align-items: center;\n    padding: 0 8px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    font-weight: 600;\n    line-height: 2px;\n    cursor: pointer;\n}\n\n.comeback svg {\n    height: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/shimmer/styles.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/shimmer/styles.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes placeholderShimmer {\r\n    0% {\r\n        background-position: -468px 0;\r\n    }\r\n    100% {\r\n        background-position: 468px 0;\r\n    }\r\n}\r\n\r\n.shimmer header {\r\n    background: #f6f7f8;\r\n    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) !important;\r\n    background-size: 800px 104px;\r\n    position: relative;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: infinite;\r\n    animation-name: placeholderShimmer;\r\n    animation-timing-function: linear;\r\n}\r\n\r\n.shimmer header .logo {\r\n    background: #f6f7f8;\r\n    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) !important;\r\n    background-size: 800px 104px;\r\n    position: relative;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: infinite;\r\n    animation-name: placeholderShimmer;\r\n    animation-timing-function: linear;\r\n}\r\n\r\n.shine {\r\n    background: #f6f7f8;\r\n    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) !important;\r\n    background-size: 800px 104px !important;\r\n    position: relative;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: infinite;\r\n    animation-name: placeholderShimmer;\r\n    animation-timing-function: linear;\r\n    color: transparent !important;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/system/components/Optional/Layout/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/system/components/Optional/Layout/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/Optional/Layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");




var Layout = function Layout(_ref) {
  var data = _ref.data,
      dataIndex = _ref.dataIndex,
      handleAdditionalCheck = _ref.handleAdditionalCheck,
      handleAdditionalMoreOrLess = _ref.handleAdditionalMoreOrLess;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "group-".concat(data.id),
    id: "optional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "additional-infos-c"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-o"
  }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-o"
  }, data.description)), data.type === 'multiple' ? data === null || data === void 0 ? void 0 : data.additional.map(function (additional, index) {
    return (additional === null || additional === void 0 ? void 0 : additional.status) !== 'inactive' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkbox-o"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "delivery",
      type: "checkbox",
      checked: additional.checked,
      onChange: function onChange(e) {
        handleAdditionalCheck(index, e.target.checked);
      },
      id: "".concat(dataIndex, "-").concat(index)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "".concat(dataIndex, "-").concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-c"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title-c"
    }, additional.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "desc-c"
    }, additional === null || additional === void 0 ? void 0 : additional.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price-c"
    }, additional !== null && additional !== void 0 && additional.price ? "+ R$ ".concat(additional.price) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checked"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null))))) : null;
  }) : data === null || data === void 0 ? void 0 : data.additional.map(function (additional, index) {
    return (additional === null || additional === void 0 ? void 0 : additional.status) !== 'inactive' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      id: "add-".concat(additional === null || additional === void 0 ? void 0 : additional.add),
      className: "more-less-additional"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "infos-c"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, additional === null || additional === void 0 ? void 0 : additional.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "desc"
    }, additional === null || additional === void 0 ? void 0 : additional.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price"
    }, additional !== null && additional !== void 0 && additional.price ? "+ R$ ".concat(additional.price) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btns"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "less",
      onClick: function onClick() {
        handleAdditionalMoreOrLess(index, dataIndex, 'less');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Minus"], {
      size: 18
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "count"
    }, additional === null || additional === void 0 ? void 0 : additional.add), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "more",
      onClick: function onClick() {
        handleAdditionalMoreOrLess(index, dataIndex, 'more');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Plus"], {
      size: 18
    })))) : null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/system/components/Optional/Layout/styles.css":
/*!*******************************************************************!*\
  !*** ./resources/js/system/components/Optional/Layout/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/Optional/Layout/styles.css");

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

/***/ "./resources/js/system/components/Optional/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/system/components/Optional/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./resources/js/system/components/Optional/Layout/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Optional = function Optional(_ref) {
  var data = _ref.data,
      dataIndex = _ref.dataIndex,
      updateMinimum = _ref.updateMinimum;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data),
      _useState2 = _slicedToArray(_useState, 2),
      additionalData = _useState2[0],
      setAdditionalData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selecteds = _useState4[0],
      setSelecteds = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      totalSelected = _useState6[0],
      setTotalSelected = _useState6[1];

  var handleAdditionalCheck = function handleAdditionalCheck(index, value) {
    var newData = additionalData;

    if (selecteds.length >= additionalData.max && value === true) {
      return react_notify_toast__WEBPACK_IMPORTED_MODULE_1__["notify"].show("Voc\xEA s\xF3 pode selecionar no m\xE1ximo ".concat(additionalData.max, " ").concat(additionalData.max == 1 ? 'opção' : 'opções'), 'warning', 5000);
    }

    if (!selecteds.includes(index)) {
      //push index in selecteds
      var NewSelecteds = selecteds;
      NewSelecteds.push(index);
      setSelecteds(NewSelecteds); //update checkbox

      setTotalSelected(totalSelected + 1);
      newData.additional[index].checked = true;
      updateMinimum('add', dataIndex, NewSelecteds.length, newData);
    } else {
      //push index in selecteds
      var _NewSelecteds = selecteds;

      var position = _NewSelecteds.indexOf(index);

      if (index > -1) {
        _NewSelecteds.splice(position, 1);
      }

      setSelecteds(_NewSelecteds); //update checkbox

      setTotalSelected(totalSelected - 1);
      newData.additional[index].checked = false;
      updateMinimum('remove', dataIndex, _NewSelecteds.length, newData);
    }

    setAdditionalData(newData);
  };

  var handleAdditionalMoreOrLess = function handleAdditionalMoreOrLess(index, dataIndex, type) {
    var newData = additionalData;
    var groupDOM = document.querySelector(".group-".concat(data.id));

    if (totalSelected >= additionalData.max && type === 'more') {
      return react_notify_toast__WEBPACK_IMPORTED_MODULE_1__["notify"].show("Voc\xEA s\xF3 pode selecionar no m\xE1ximo ".concat(additionalData.max, " ").concat(additionalData.max == 1 ? 'opção' : 'opções'), 'warning', 5000);
    }

    if (type === 'more') {
      newData.additional[index].add++;
      setTotalSelected(totalSelected + 1);
      updateMinimum('add', dataIndex, newData.additional[index].add, newData);

      if (totalSelected >= additionalData.max - 1) {
        groupDOM.classList.add('inactive');
      }
    } else {
      if (newData.additional[index].add > 0) {
        newData.additional[index].add--;
        setTotalSelected(totalSelected - 1);
        updateMinimum('remove', dataIndex, newData.additional[index].add, newData);

        if (newData.additional[index].add < additionalData.max) {
          groupDOM.classList.remove('inactive');
        }
      }
    }

    setAdditionalData(newData);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    dataIndex: dataIndex,
    handleAdditionalCheck: handleAdditionalCheck,
    handleAdditionalMoreOrLess: handleAdditionalMoreOrLess
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Optional);

/***/ }),

/***/ "./resources/js/system/pages/Additional/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/system/pages/Additional/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quentin-sommer/react-useragent */ "./node_modules/@quentin-sommer/react-useragent/dist/react-useragent.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ "./resources/js/system/services/api.js");
/* harmony import */ var _components_Optional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Optional */ "./resources/js/system/components/Optional/index.js");
/* harmony import */ var _shimmer_additional__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shimmer/additional */ "./resources/js/system/shimmer/additional.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/pages/Additional/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Additional = function Additional(_ref) {
  var _product$additional2;

  var params = _ref.match.params;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      optional = _useState6[0],
      setOptional = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      productPrice = _useState8[0],
      setProductPrice = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      hasSelectedMininum = _useState10[0],
      setHasSelectedMininum = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      productDataReturned = _useState12[0],
      setProductDataReturned = _useState12[1];

  var useOSName = function useOSName() {
    var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_4__["UAContext"]),
        uaResults = _useContext.uaResults,
        parser = _useContext.parser;

    return parser.getOS().name;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function loadProduct(_x) {
      return _loadProduct.apply(this, arguments);
    }

    function _loadProduct() {
      _loadProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var response, arrayMinium;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_api__WEBPACK_IMPORTED_MODULE_7__["default"].post("/product", {
                  id: id
                });

              case 2:
                response = _context.sent;
                setProduct(response.data[0]);
                setProductPrice(response.data[0].price);
                arrayMinium = [];
                response.data[0].additional.map(function (additional, index) {
                  arrayMinium.push({
                    id: index,
                    minimum: additional.min,
                    selected: 0,
                    completed: additional.min === 0 ? true : false
                  });
                });
                setHasSelectedMininum(arrayMinium);
                setLoading(false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _loadProduct.apply(this, arguments);
    }

    loadProduct(params.id);
  }, []);

  var updateMinimum = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(type, index, selected, returnedData) {
      var _product$additional, _additional;

      var newData, allAdditional, productAdd, returned, price, additional;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              newData = hasSelectedMininum;
              allAdditional = 0;
              productAdd = product.additional[index];

              if (type == "add") {
                productAdd.additional.forEach(function (additional) {
                  if (additional.add) {
                    allAdditional = additional.add + allAdditional;
                  } else if (additional.checked) {
                    allAdditional++;
                  }
                });
                newData[index].selected = allAdditional;
                newData[index].completed = allAdditional < productAdd.min ? false : true;
              } else {
                if (newData[index].selected >= newData[index].minimum) {
                  newData[index].selected = selected < 0 ? 0 : selected;

                  if (newData[index].selected < newData[index].minimum) {
                    newData[index].completed = false;
                  }
                }
              }

              setHasSelectedMininum(newData);
              returned = productDataReturned;
              returned[index] = returnedData;
              /* product price*/

              price = product.price;
              additional = [];
              _context4.next = 11;
              return (_product$additional = product.additional) === null || _product$additional === void 0 ? void 0 : _product$additional.map(function (item, index) {
                additional.push({});
              });

            case 11:
              _context4.next = 13;
              return returned === null || returned === void 0 ? void 0 : returned.map( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(item, index) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          additional[index] = {
                            name: item.name,
                            hight_price: item.hight_price,
                            selecteds: []
                          };
                          _context3.next = 3;
                          return item.additional.map( /*#__PURE__*/function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(element) {
                              var _element$add;

                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      if (!((element === null || element === void 0 ? void 0 : element.checked) === true || (element === null || element === void 0 ? void 0 : element.add) > 0)) {
                                        _context2.next = 3;
                                        break;
                                      }

                                      _context2.next = 3;
                                      return additional[index].selecteds.push({
                                        name: element.name,
                                        price: Number(element.price.replace(",", ".")),
                                        qty: (_element$add = element === null || element === void 0 ? void 0 : element.add) !== null && _element$add !== void 0 ? _element$add : 1
                                      });

                                    case 3:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2);
                            }));

                            return function (_x8) {
                              return _ref4.apply(this, arguments);
                            };
                          }());

                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x6, _x7) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 13:
              additional = additional.filter(function (value) {
                return Object.keys(value).length !== 0;
              });
              _context4.next = 16;
              return (_additional = additional) === null || _additional === void 0 ? void 0 : _additional.map(function (client_additional) {
                if (client_additional.hight_price == "no") {
                  client_additional.selecteds.map(function (additional) {
                    price = price + parseFloat(additional.price) * parseFloat(additional.qty);
                  });
                } else {
                  var prices = [];
                  client_additional.selecteds.map(function (additional) {
                    prices.push(additional.price);
                  });
                  prices.sort(function (a, b) {
                    return b - a;
                  });
                  price = price + parseFloat(prices[0]);
                }
              });

            case 16:
              setProductPrice(price);
              setProductDataReturned(returned);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function updateMinimum(_x2, _x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var addProductInCar = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var i, additional, item;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < hasSelectedMininum.length)) {
                _context7.next = 8;
                break;
              }

              if (hasSelectedMininum[i].completed) {
                _context7.next = 5;
                break;
              }

              return _context7.abrupt("return", react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show("Para adicionar este item, voc\xEA precisa selecionar ".concat(product.additional[i].min, " ").concat(product.additional[i].min == 1 ? "opção" : "opções", " em ").concat(product.additional[i].name), "warning", 7000));

            case 5:
              i++;
              _context7.next = 1;
              break;

            case 8:
              additional = [];
              _context7.next = 11;
              return product.additional.map(function (item, index) {
                additional.push({});
              });

            case 11:
              _context7.next = 13;
              return productDataReturned.map( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(item, index) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          additional[index] = {
                            name: item.name,
                            hight_price: item.hight_price,
                            selecteds: []
                          };
                          _context6.next = 3;
                          return item.additional.map( /*#__PURE__*/function () {
                            var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(element) {
                              var _element$add2;

                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      if (!((element === null || element === void 0 ? void 0 : element.checked) === true || (element === null || element === void 0 ? void 0 : element.add) > 0)) {
                                        _context5.next = 3;
                                        break;
                                      }

                                      _context5.next = 3;
                                      return additional[index].selecteds.push({
                                        name: element.name,
                                        price: Number(element.price.replace(",", ".")),
                                        qty: (_element$add2 = element === null || element === void 0 ? void 0 : element.add) !== null && _element$add2 !== void 0 ? _element$add2 : 1
                                      });

                                    case 3:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5);
                            }));

                            return function (_x11) {
                              return _ref7.apply(this, arguments);
                            };
                          }());

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x9, _x10) {
                  return _ref6.apply(this, arguments);
                };
              }());

            case 13:
              additional = additional.filter(function (value) {
                return Object.keys(value).length !== 0;
              });
              item = {
                product_id: product.id,
                product_name: product.name,
                product_image: product.image,
                product_price: product.price,
                product_buttons: product.delivery_options,
                product_quantity: 1,
                client_optional: optional,
                client_additional: additional
              };
              _context7.next = 17;
              return dispatch({
                type: "ADD_CART_ITEM",
                item: item
              });

            case 17:
              react_notify_toast__WEBPACK_IMPORTED_MODULE_3__["notify"].show("Produto adicionado ao carrinho!", "success", 2000);
              history.push("/");

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function addProductInCar() {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shimmer_additional__WEBPACK_IMPORTED_MODULE_9__["default"], {
    status: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comeback"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowLeft"], null), " Voltar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    id: "additional-h",
    style: {
      backgroundImage: "url(".concat(product.image, ")"),
      margin: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "based-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title-a"
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc-a"
  }, product.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "shimmer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, product === null || product === void 0 ? void 0 : (_product$additional2 = product.additional) === null || _product$additional2 === void 0 ? void 0 : _product$additional2.map(function (additional, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Optional__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: additional.id,
      data: additional,
      dataIndex: index,
      updateMinimum: updateMinimum
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title-o"
  }, "observa\xE7\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc-o"
  }, "\xC9 opcional, fa\xE7a se quiser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    value: optional,
    onChange: function onChange(e) {
      return setOptional(e.target.value);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "conclude",
    onClick: function onClick() {
      return addProductInCar();
    },
    style: useOSName() == "iOS" ? {
      paddingBottom: 30,
      height: 80
    } : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-c"
  }, "Adicionar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc-c"
  }, "Ser\xE1 adicionado o valor ao carrinho"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "price-c"
  }, "R$ ", parseFloat(productPrice) > 0 ? parseFloat(productPrice).toFixed(2) : parseFloat(0).toFixed(2)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Additional);

/***/ }),

/***/ "./resources/js/system/pages/Additional/styles.css":
/*!*********************************************************!*\
  !*** ./resources/js/system/pages/Additional/styles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/pages/Additional/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/system/shimmer/additional.js":
/*!***************************************************!*\
  !*** ./resources/js/system/shimmer/additional.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Optional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Optional */ "./resources/js/system/components/Optional/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/shimmer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);





var ShimmerAdditional = function ShimmerAdditional(_ref) {
  var status = _ref.status;
  return !status ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comeback"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["ArrowLeft"], null), " Voltar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    id: "additional-h",
    className: "shine",
    style: {
      backgroundImage: "url()"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-a shine"
  }, "Pizza de Calabresa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-a shine",
    style: {
      marginTop: '5px',
      width: '80%'
    }
  }, "Alho refogado no azeite, tomate, oregano e cebola.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "shimmer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "optional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-o shine",
    style: {
      width: '80%'
    }
  }, "Adicionais"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-o shine",
    style: {
      marginTop: '5px',
      width: '50%'
    }
  }, "Selecione uma op\xE7\xE3o abaixo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "optional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-o shine",
    style: {
      width: '80%'
    }
  }, "Adicionais"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-o shine",
    style: {
      marginTop: '5px',
      width: '50%'
    }
  }, "Selecione uma op\xE7\xE3o abaixo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "delivery",
    type: "checkbox",
    id: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Check"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-c",
    style: {
      width: '60%',
      marginRight: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-c shine"
  }, "Shimmer Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-c shine",
    style: {
      width: '70%'
    }
  }, "Desc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-c shine",
    style: {
      width: '10%'
    }
  }, "+ 99,00"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-o"
  }, "observa\xE7\xE3o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-o"
  }, "\xC9 opcional, fa\xE7a se quiser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShimmerAdditional);

/***/ }),

/***/ "./resources/js/system/shimmer/styles.css":
/*!************************************************!*\
  !*** ./resources/js/system/shimmer/styles.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/shimmer/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);