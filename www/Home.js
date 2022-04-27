(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/Header/Layout/styles.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/js/system/components/Header/Layout/styles.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n    height: 300px;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 28px;\n}\n\nheader .logo {\n    width: 192px;\n    height: 192px;\n    background-color: var(--white);\n    border-radius: 8px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 60%;\n    margin-top: 136px;\n    border: 1px solid rgba(0,0,0,0.1);\n    box-shadow: 0 1px 10px rgba(0,0,0,0.05);\n}\n\n.new-header header {\n    height: 180px;\n    margin-bottom: 0;\n}\n\n.new-header .informations {\n    height: 80px;\n    width: 100%;\n    background: white;\n    box-shadow: 0 1px 10px rgba(0,0,0,0.05);\n    margin-bottom: 20px;\n    padding: 0 20px;\n    display: flex;\n    position: relative;\n}\n\n.new-header .informations .logo {\n    width: 150px;\n    height: 150px;\n    border-radius: 8px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: -80px;\n    background-color: white;\n}\n\n.new-header .informations .infos {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin-left: 15px;\n}\n\n.new-header .informations .infos .name {\n    font-weight: 500;\n}\n\n.new-header .informations .infos .description {\n    font-size: 13px;\n    opacity: 0.5;\n}\n\n.new-header .informations .infos .status {\n    font-weight: bold;\n    margin-top: 5px;\n    font-size: 18px;\n}\n\n.new-header .informations .infos .status.open {\n    color: var(--green);\n}\n\n.new-header .informations .infos .status.close {\n    color: #F44336;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-filter-search/es/filter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-filter-search/es/filter.js ***!
  \*******************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function strOp(str) {
  return str.toString().replace(/\s/g, '').toLowerCase();
}

function objectValues(value) {
  return Object.values(value).reduce(function (string, val) {
    var test = val !== null && val !== undefined;
    return string + ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null ? strOp(objectValues(val)) : test ? strOp(val) : '');
  }, '');
}

function filter(val, data) {
  return data.filter(function (el) {
    return !!val.length ? objectValues(el).includes(strOp(val)) : true;
  });
}

/***/ }),

/***/ "./node_modules/react-filter-search/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-filter-search/es/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/react-filter-search/es/filter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FilterResults = function (_Component) {
  _inherits(FilterResults, _Component);

  function FilterResults() {
    _classCallCheck(this, FilterResults);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FilterResults.prototype.render = function render() {
    var _props = this.props,
        value = _props.value,
        data = _props.data;

    return this.props.renderResults(Object(_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(value, data));
  };

  return FilterResults;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);




FilterResults.propTypes =  true ? {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  renderResults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
} : undefined;

/***/ }),

/***/ "./resources/js/system/components/Category/Layout/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/system/components/Category/Layout/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/Category/Layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["A11y"]]);

var Layout = function Layout(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      activeCateogry = _ref.activeCateogry,
      changeCategory = _ref.changeCategory;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    slidesPerView: 'auto',
    spaceBetween: 15
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
    onClick: function onClick() {
      return changeCategory('all');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-cat ".concat(activeCateogry == 'all' ? 'active' : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-cat",
    style: {
      WebkitMaskBoxImage: "url(https://i.imgur.com/vQVpOGp.png)"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name-cat"
  }, "Todas"))), data.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
      key: category.id,
      onClick: function onClick() {
        return changeCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "based-cat ".concat(activeCateogry == category.id ? 'active' : null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "icon-cat",
      style: {
        WebkitMaskBoxImage: "url(".concat(category.icon, ")")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name-cat"
    }, category.name)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/system/components/Category/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/system/components/Category/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./resources/js/system/components/Category/Layout/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Category = function Category(_ref) {
  var data = _ref.data,
      changeProductList = _ref.changeProductList;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all'),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var changeCategory = function changeCategory(id) {
    if (category != id) {
      changeProductList(id);
      setCategory(id);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    activeCateogry: category,
    changeCategory: changeCategory
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./resources/js/system/components/Header/Layout/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/system/components/Header/Layout/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/Header/Layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(_ref) {
  var header = _ref.header,
      logo = _ref.logo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    style: {
      backgroundImage: "url(".concat(header, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo",
    style: {
      backgroundImage: "url(".concat(logo, ")")
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/system/components/Header/Layout/new-index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/system/components/Header/Layout/new-index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/Header/Layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);



var NewLayout = function NewLayout(_ref) {
  var _ref$data = _ref.data,
      banner = _ref$data.banner,
      logo = _ref$data.logo,
      name = _ref$data.name,
      description = _ref$data.description,
      opened = _ref$data.opened;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "new-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "",
    style: {
      backgroundImage: "url(".concat(banner, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "informations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo",
    style: {
      backgroundImage: "url(".concat(logo, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status ".concat(opened == 'yes' ? 'open' : 'close')
  }, opened == 'yes' ? 'ABERTO AGORA' : 'FECHADO AGORA'))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewLayout);

/***/ }),

/***/ "./resources/js/system/components/Header/Layout/styles.css":
/*!*****************************************************************!*\
  !*** ./resources/js/system/components/Header/Layout/styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/postcss-loader/src??ref--5-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/system/components/Header/Layout/styles.css");

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

/***/ "./resources/js/system/components/Header/index.js":
/*!********************************************************!*\
  !*** ./resources/js/system/components/Header/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Layout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout/index */ "./resources/js/system/components/Header/Layout/index.js");
/* harmony import */ var _Layout_new_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout/new-index */ "./resources/js/system/components/Header/Layout/new-index.js");





var Header = function Header() {
  var configurations = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.configurations;
  });
  var banner = configurations.banner,
      logo = configurations.logo;
  var headerOption = 'new';
  return headerOption === 'new' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_new_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: configurations
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: banner,
    logo: logo
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/system/components/List/Layout/Item/index.js":
/*!******************************************************************!*\
  !*** ./resources/js/system/components/List/Layout/Item/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/List/Layout/Item/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);





var Item = function Item(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i",
    style: {
      backgroundImage: "url(".concat(data.image, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i"
  }, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i"
  }, data.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i"
  }, data.price != 0 ? "R$ ".concat(data.price.toFixed(2)) : "A partir de R$ ".concat(data === null || data === void 0 ? void 0 : data.price_starting.toFixed(2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "additional/".concat(data.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-added"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Plus"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./resources/js/system/components/List/Layout/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/system/components/List/Layout/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_filter_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-filter-search */ "./node_modules/react-filter-search/es/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./resources/js/system/components/List/Layout/Item/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/components/List/Layout/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(_ref) {
  var title = _ref.title,
      data = _ref.data,
      search = _ref.search;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-list"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_filter_search__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: search,
    data: data,
    renderResults: function renderResults(results) {
      return results === null || results === void 0 ? void 0 : results.map(function (product) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: product.id,
          data: product
        });
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/system/components/List/index.js":
/*!******************************************************!*\
  !*** ./resources/js/system/components/List/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./resources/js/system/components/List/Layout/index.js");



var List = function List(_ref) {
  var title = _ref.title,
      data = _ref.data,
      search = _ref.search;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    data: data,
    search: search
  });
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./resources/js/system/pages/Home/index.js":
/*!*************************************************!*\
  !*** ./resources/js/system/pages/Home/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./resources/js/system/components/Header/index.js");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Category */ "./resources/js/system/components/Category/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/List */ "./resources/js/system/components/List/index.js");
/* harmony import */ var _shimmer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shimmer */ "./resources/js/system/shimmer/index.js");
/* harmony import */ var _shimmer_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shimmer/products */ "./resources/js/system/shimmer/products.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api */ "./resources/js/system/services/api.js");
/* harmony import */ var react_filter_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-filter-search */ "./node_modules/react-filter-search/es/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Home = function Home() {
  var ReduxState = function ReduxState() {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state;
    }, []);
  };

  var configuration = ReduxState().configurations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      products = _useState4[0],
      setProducts = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      loadingProducts = _useState8[0],
      setLoadingProducts = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      searchValue = _useState10[0],
      setSearchValue = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function loadProducts() {
      return _loadProducts.apply(this, arguments);
    }

    function _loadProducts() {
      _loadProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_api__WEBPACK_IMPORTED_MODULE_9__["default"].get('/products');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return setCategories(response.data);

              case 5:
                _context.next = 7;
                return setProducts(response.data);

              case 7:
                setLoading(false);
                setLoadingProducts(false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _loadProducts.apply(this, arguments);
    }

    loadProducts();
  }, []);

  var changeProductList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoadingProducts(true);
              _context2.next = 3;
              return _services_api__WEBPACK_IMPORTED_MODULE_9__["default"].get('/products', {
                params: {
                  category: id
                }
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return setProducts(response.data);

            case 6:
              setLoadingProducts(false);
              return _context2.abrupt("return", false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeProductList(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shimmer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Pesquisar produto...",
    type: "search",
    value: searchValue,
    onChange: function onChange(e) {
      return setSearchValue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Search"], {
    style: {
      position: 'absolute',
      right: 20,
      top: 10
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Category__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: categories,
    changeProductList: changeProductList
  }), loadingProducts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shimmer_products__WEBPACK_IMPORTED_MODULE_8__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_filter_search__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: searchValue,
    data: products,
    renderResults: function renderResults(results) {
      return results.map(function (categories) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: categories.id,
          title: categories.name,
          data: categories.products,
          search: searchValue
        });
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 20,
      marginBottom: 60,
      marginTop: -60
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    href: configuration === null || configuration === void 0 ? void 0 : configuration.resale.link,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: {
      maxWidth: '158px',
      filter: 'invert(1)',
      opacity: '0.4'
    },
    src: configuration === null || configuration === void 0 ? void 0 : configuration.resale.logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: 'rgba(0, 0, 0, 0.5)'
    }
  }, "Desenvolvido por ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, configuration === null || configuration === void 0 ? void 0 : configuration.resale.name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/system/shimmer/products.js":
/*!*************************************************!*\
  !*** ./resources/js/system/shimmer/products.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./resources/js/system/shimmer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List_Layout_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List/Layout/styles.css */ "./resources/js/system/components/List/Layout/styles.css");
/* harmony import */ var _components_List_Layout_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_List_Layout_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_List_Layout_Item_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/List/Layout/Item/styles.css */ "./resources/js/system/components/List/Layout/Item/styles.css");
/* harmony import */ var _components_List_Layout_Item_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_List_Layout_Item_styles_css__WEBPACK_IMPORTED_MODULE_3__);

 //List




var ShimmerProducts = function ShimmerProducts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shimmer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-list shine"
  }, "ShimmerProducts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i shine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i shine"
  }, "ShimmerProducts Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i shine"
  }, "ShimmerProducts Desc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i shine"
  }, "ShimmerProducts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i shine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i shine"
  }, "ShimmerProducts Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i shine"
  }, "ShimmerProducts Desc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i shine"
  }, "ShimmerProducts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i shine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i shine"
  }, "ShimmerProducts Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i shine"
  }, "ShimmerProducts Desc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i shine"
  }, "ShimmerProducts")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-list shine"
  }, "ShimmerProducts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i shine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i shine"
  }, "ShimmerProducts Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i shine"
  }, "ShimmerProducts Desc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i shine"
  }, "ShimmerProducts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i shine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i shine"
  }, "ShimmerProducts Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i shine"
  }, "ShimmerProducts Desc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i shine"
  }, "ShimmerProducts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picture-i shine"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "based-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-i shine"
  }, "ShimmerProducts Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc-i shine"
  }, "ShimmerProducts Desc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-i shine"
  }, "ShimmerProducts")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShimmerProducts);

/***/ })

}]);