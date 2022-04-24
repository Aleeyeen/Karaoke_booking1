module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/bookingDeluxe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/authDeluxe.js":
/*!**********************************!*\
  !*** ./components/authDeluxe.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\components\\authDeluxe.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const authDeluxe = WrappedComponent => {
  const Wrapper = props => {
    const {
      token
    } = props;
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
      if (!token) router.push('/userDeluxe');
    }, [token]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, undefined);
  };

  return Wrapper;
};

/* harmony default export */ __webpack_exports__["default"] = (authDeluxe);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\components\\layout.js";
function Layout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./pages/bookingDeluxe.js":
/*!********************************!*\
  !*** ./pages/bookingDeluxe.js ***!
  \********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_authDeluxe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/authDeluxe */ "./components/authDeluxe.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\pages\\bookingDeluxe.js";







const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(res => res.data);

const URL = `http://localhost/api/bookingDeluxe`;

const Deluxe = ({
  token
}) => {
  // const [booking, setbooking] = useState([])
  const {
    0: name,
    1: setname
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: surname,
    1: setsurname
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: date,
    1: setdate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: checkin,
    1: setcheckin
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: checkout,
    1: setcheckout
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_6___default()(URL, fetcher, {
    revalidateOnFocus: false
  });
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 23
  }, undefined);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, undefined);
  console.log('Home: ', data);

  const addBooking = async (name, surname, date, checkin, checkout) => {
    let _booking = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(URL, {
      name,
      surname,
      date,
      checkin,
      checkout
    });

    Object(swr__WEBPACK_IMPORTED_MODULE_6__["mutate"])(URL);
  };

  const updateBooking = async id => {
    let _booking = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(`${URL}/${id}`, {
      name,
      surname,
      checkin,
      checkout
    });

    Object(swr__WEBPACK_IMPORTED_MODULE_6__["mutate"])(URL);
  };

  const deleteBooking = async id => {
    let _booking = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(`${URL}/${id}`);

    Object(swr__WEBPACK_IMPORTED_MODULE_6__["mutate"])(URL);
  };

  const printBooking = _booking => {
    return _booking.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-wrap w-1/4 h-1/2 m-5 mt-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full h-full pl-2 -mt-5 break-all overflow-auto rounded-lg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-semibold",
          children: "Booking: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }, undefined), " ", index + 1, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 68
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-semibold",
          children: "User : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, undefined), " ", item.id, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 66
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-semibold",
          children: "Name-Surname : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, undefined), " ", item.name, " ", item.surname, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 92
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-semibold",
          children: "Date : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }, undefined), " ", item.date, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 68
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-semibold",
          children: "CheckIn : "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined), " ", item.checkin, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 74
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-semibold",
          children: "CheckOut :"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, undefined), " ", item.checkout]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-end w-full mt-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "border-2 border-green-900 bg-green w-16 h-8 rounded-md hover:bg-babygreen focus:outline-none",
          onClick: () => updateBooking(item.id),
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "border-2 border-red-900 bg-darkred w-16 h-8 ml-4 rounded-md hover:bg-babyred focus:outline-none",
          onClick: () => deleteBooking(item.id),
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Online Karaoke Booking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " border-double border-8 border-pink-800 p-4 rounded-lg bg-palepink",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-3xl font-bold tracking-wider uppercase text-pink-800",
          children: "Deluxe Room"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto",
        children: printBooking(data.list)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_authDeluxe__WEBPACK_IMPORTED_MODULE_5__["default"])(Deluxe));
function getServerSideProps({
  req,
  res
}) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return {
    props: {
      token: req.cookies.token || ""
    }
  };
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoRGVsdXhlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Jvb2tpbmdEZWx1eGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiYXV0aERlbHV4ZSIsIldyYXBwZWRDb21wb25lbnQiLCJXcmFwcGVyIiwicHJvcHMiLCJ0b2tlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJMYXlvdXQiLCJjaGlsZHJlbiIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiVVJMIiwiRGVsdXhlIiwibmFtZSIsInNldG5hbWUiLCJ1c2VTdGF0ZSIsInN1cm5hbWUiLCJzZXRzdXJuYW1lIiwiZGF0ZSIsInNldGRhdGUiLCJjaGVja2luIiwic2V0Y2hlY2tpbiIsImNoZWNrb3V0Iiwic2V0Y2hlY2tvdXQiLCJlcnJvciIsInVzZVNXUiIsInJldmFsaWRhdGVPbkZvY3VzIiwiY29uc29sZSIsImxvZyIsImFkZEJvb2tpbmciLCJfYm9va2luZyIsInBvc3QiLCJtdXRhdGUiLCJ1cGRhdGVCb29raW5nIiwiaWQiLCJwdXQiLCJkZWxldGVCb29raW5nIiwiZGVsZXRlIiwicHJpbnRCb29raW5nIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGlzdCIsImdldFNlcnZlclNpZGVQcm9w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LE9BQUosQ0FBWWhELEtBQVosSUFBcUI7QUFBOUI7QUFBVCxHQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUN0SEQsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvYm9va2luZ0RlbHV4ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYm9va2luZ0RlbHV4ZS5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGF1dGhEZWx1eGUgPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcclxuICAgIGNvbnN0IFdyYXBwZXIgPSBwcm9wcyA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcHJvcHNcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4pXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3VzZXJEZWx1eGUnKVxyXG4gICAgICAgIH0sIFt0b2tlbl0pXHJcbiAgICAgICAgcmV0dXJuICg8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdyYXBwZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aERlbHV4ZSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxuICB9IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGF1dGhEZWx1eGUgZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoRGVsdXhlJ1xyXG5pbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Jvb2tpbmdEZWx1eGVgXHJcblxyXG5jb25zdCBEZWx1eGUgPSAoIHt0b2tlbn0pID0+IHtcclxuICAgIC8vIGNvbnN0IFtib29raW5nLCBzZXRib29raW5nXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3VybmFtZSwgc2V0c3VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNraW4sIHNldGNoZWNraW5dID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2hlY2tvdXQsIHNldGNoZWNrb3V0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihVUkwsIGZldGNoZXIsIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlIH0pXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGNvbnNvbGUubG9nKCdIb21lOiAnLCBkYXRhKVxyXG5cclxuICAgIGNvbnN0IGFkZEJvb2tpbmcgPSBhc3luYyAobmFtZSwgc3VybmFtZSwgZGF0ZSwgY2hlY2tpbiwgY2hlY2tvdXQpID0+IHtcclxuICAgICAgICBsZXQgX2Jvb2tpbmcgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge25hbWUsIHN1cm5hbWUsIGRhdGUsIGNoZWNraW4sIGNoZWNrb3V0fSlcclxuICAgICAgICBtdXRhdGUoVVJMKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUJvb2tpbmcgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBsZXQgX2Jvb2tpbmcgPSBhd2FpdCBheGlvcy5wdXQoYCR7VVJMfS8ke2lkfWAsIHsgbmFtZSwgc3VybmFtZSwgY2hlY2tpbiwgY2hlY2tvdXQgfSlcclxuICAgICAgICBtdXRhdGUoVVJMKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJvb2tpbmcgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBsZXQgX2Jvb2tpbmcgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7VVJMfS8ke2lkfWApXHJcbiAgICAgICAgbXV0YXRlKFVSTClcclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IHByaW50Qm9va2luZyA9IChfYm9va2luZykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2Jvb2tpbmcubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCB3LTEvNCBoLTEvMiBtLTUgbXQtOCcgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBwbC0yIC1tdC01IGJyZWFrLWFsbCBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtbGcnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Qm9va2luZzogPC9hPiB7aW5kZXgrMX0gPGJyIC8+IFxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+VXNlciA6IDwvYT4ge2l0ZW0uaWR9IDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+TmFtZS1TdXJuYW1lIDogPC9hPiB7aXRlbS5uYW1lfSB7IGl0ZW0uc3VybmFtZX0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5EYXRlIDogPC9hPiB7aXRlbS5kYXRlfSA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkNoZWNrSW4gOiA8L2E+IHtpdGVtLmNoZWNraW59IDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Q2hlY2tPdXQgOjwvYT4ge2l0ZW0uY2hlY2tvdXR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCB3LWZ1bGwgbXQtMic+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1ncmVlbi05MDAgYmctZ3JlZW4gdy0xNiBoLTggcm91bmRlZC1tZCBob3ZlcjpiZy1iYWJ5Z3JlZW4gZm9jdXM6b3V0bGluZS1ub25lJyBvbkNsaWNrPXsoKSA9PiB1cGRhdGVCb29raW5nKGl0ZW0uaWQpfT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1yZWQtOTAwIGJnLWRhcmtyZWQgdy0xNiBoLTggbWwtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJhYnlyZWQgZm9jdXM6b3V0bGluZS1ub25lJyBvbkNsaWNrPXsoKSA9PiBkZWxldGVCb29raW5nKGl0ZW0uaWQpfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+T25saW5lIEthcmFva2UgQm9va2luZzwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IGZsZXgtY29sIGZpeGVkIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIG10LTEwJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBib3JkZXItZG91YmxlIGJvcmRlci04IGJvcmRlci1waW5rLTgwMCBwLTQgcm91bmRlZC1sZyBiZy1wYWxlcGluayc+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZSB0ZXh0LXBpbmstODAwJz5EZWx1eGUgUm9vbTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWV2ZW5seSB3LTQvNSBoLTIvNSBtdC0xMCBvdmVyZmxvdy1hdXRvJz5cclxuICAgICAgICAgICAgICAgIHtwcmludEJvb2tpbmcoZGF0YS5saXN0KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICB7LyogPGRpdiAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZpeGVkIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvNCBoLTI0IG10LTE2IHJvdW5kZWQtdC14bCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlc2VhIGRpdmlkZS15LTIgZGl2aWRlLWJsYWNrICc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhsICBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHBiLTEgdGV4dC1jZW50ZXInPkJvb2tpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWNlbnRlciBwdC0yJz5EZWx1eGUgUm9vbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy0xLzQgYmctZWdnIHJvdW5kZWQtYi14bCBzaGFkb3cteGwnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHctNC81IG10LTgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSctbXQtMiBmb250LXNlbWlib2xkJz5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy1mdWxsIGgtOCBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmluZy1ncmF5LTQwMCByb3VuZGVkLW1kIHBsLTIgZm9jdXM6b3V0bGluZS1ub25lJyBwbGFjZWhvbGRlcj0nTmFtZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gc2V0bmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nLW10LTIgZm9udC1zZW1pYm9sZCc+U3VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS01MDAgcmluZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpbmctZ3JheS00MDAgcm91bmRlZC1tZCBwbC0yIGZvY3VzOm91dGxpbmUtbm9uZScgcGxhY2Vob2xkZXI9J1N1cm5hbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldHN1cm5hbWUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J210LTQgZm9udC1zZW1pYm9sZCc+RGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS01MDAgcmluZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpbmctZ3JheS00MDAgIHJvdW5kZWQtbWQgcGwtMiBmb2N1czpvdXRsaW5lLW5vbmUnIHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9J2RkL21tL3l5eXknIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldGRhdGUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J210LTQgZm9udC1zZW1pYm9sZCc+Y2hlY2tJbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS01MDAgcmluZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpbmctZ3JheS00MDAgcm91bmRlZC1tZCBwbC0yIGZvY3VzOm91dGxpbmUtbm9uZScgdHlwZT0ndGltZScgcGxhY2Vob2xkZXI9Jy0tOi0tJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiBzZXRjaGVja2luKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtdC00IGZvbnQtc2VtaWJvbGQnPmNoZWNrT3V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy1mdWxsIGgtOCBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmluZy1ncmF5LTQwMCByb3VuZGVkLW1kIHBsLTIgZm9jdXM6b3V0bGluZS1ub25lJyB0eXBlPSd0aW1lJyBwbGFjZWhvbGRlcj0nLS06LS0nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldGNoZWNrb3V0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTI4IGgtMTAgbWwtNCBmb250LWJvbGQgYm9yZGVyLTQgYm9yZGVyLXBpbmstODAwIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLW1kIGhvdmVyOmJnLXBhbGVwaW5rJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRCb29raW5nKG5hbWUsIHN1cm5hbWUsIGRhdGUsIGNoZWNraW4sIGNoZWNrb3V0KX0+XHJcbiAgICAgICAgICAgICAgICAgIEJvb2tpbmdcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhEZWx1eGUoRGVsdXhlKVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBmcm9tIGNvb2tpZTogXCIsY29va2llLmdldChcInRva2VuXCIpKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlcTogJywgcmVxLmhlYWRlcnMpXHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9