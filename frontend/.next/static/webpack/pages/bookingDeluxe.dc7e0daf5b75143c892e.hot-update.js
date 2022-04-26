webpackHotUpdate_N_E("pages/bookingDeluxe",{

/***/ "./pages/bookingDeluxe.js":
/*!********************************!*\
  !*** ./pages/bookingDeluxe.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Karaoke_Booking_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_authDeluxe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/authDeluxe */ "./components/authDeluxe.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\pages\\bookingDeluxe.js",
    _this = undefined,
    _s = $RefreshSig$();









var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(function (res) {
    return res.data;
  });
};

var URL = "http://localhost/api/bookingDeluxe";

var Deluxe = function Deluxe(_ref) {
  _s();

  var token = _ref.token;

  // const [booking, setbooking] = useState([])
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      name = _useState[0],
      setname = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      surname = _useState2[0],
      setsurname = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      date = _useState3[0],
      setdate = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      checkin = _useState4[0],
      setcheckin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      checkout = _useState5[0],
      setcheckout = _useState5[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])(URL, fetcher, {
    revalidateOnFocus: false
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, _this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 23
  }, _this);
  console.log('Home: ', data);

  var addBooking = /*#__PURE__*/function () {
    var _ref2 = Object(D_Karaoke_Booking_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, surname, date, checkin, checkout) {
      var _booking;

      return D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(URL, {
                name: name,
                surname: surname,
                date: date,
                checkin: checkin,
                checkout: checkout
              });

            case 2:
              _booking = _context.sent;
              Object(swr__WEBPACK_IMPORTED_MODULE_8__["mutate"])(URL);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addBooking(_x, _x2, _x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var updateBooking = /*#__PURE__*/function () {
    var _ref3 = Object(D_Karaoke_Booking_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var _booking;

      return D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("".concat(URL, "/").concat(id), {
                name: name,
                surname: surname,
                date: date,
                checkin: checkin,
                checkout: checkout
              });

            case 2:
              _booking = _context2.sent;
              Object(swr__WEBPACK_IMPORTED_MODULE_8__["mutate"])(URL);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateBooking(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var deleteBooking = /*#__PURE__*/function () {
    var _ref4 = Object(D_Karaoke_Booking_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
      var _booking;

      return D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a["delete"]("".concat(URL, "/").concat(id));

            case 2:
              _booking = _context3.sent;
              Object(swr__WEBPACK_IMPORTED_MODULE_8__["mutate"])(URL);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteBooking(_x7) {
      return _ref4.apply(this, arguments);
    };
  }();

  var printBooking = function printBooking(_booking) {
    return _booking.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-wrap w-1/4 h-1/2 m-5 mt-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "w-full h-full pl-2 -mt-5 break-all overflow-auto rounded-lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Booking: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this), " ", index + 1, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 68
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "User : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this), " ", item.id, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 66
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Name-Surname : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, _this), " ", item.name, " ", item.surname, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 92
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Date : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this), " ", item.date, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 68
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "CheckIn : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this), " ", item.checkin, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 74
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "CheckOut :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, _this), " ", item.checkout]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex justify-end w-full mt-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: "border-2 border-red-900 bg-darkred w-16 h-8 ml-4 rounded-md hover:bg-babyred focus:outline-none",
            onClick: function onClick() {
              return deleteBooking(item.id);
            },
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Online Karaoke Booking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: " border-double border-8 border-pink-800 p-4 rounded-lg bg-palepink",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          className: "text-3xl font-bold tracking-wider uppercase text-pink-800",
          children: "Deluxe Room"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/formDeluxe",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "text-2xl tracking-wider uppercase text-pink-800 rounded-xl focus:outline-none rounded-md hover:bg-palepink animate-pulse",
            children: "\"Click here for booking\""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto",
        children: printBooking(data.list)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, _this);
};

_s(Deluxe, "a28KI3mF57pplEbkh06OdW7TI88=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Deluxe;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_authDeluxe__WEBPACK_IMPORTED_MODULE_7__["default"])(Deluxe));

var _c, _c2;

$RefreshReg$(_c, "Deluxe");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va2luZ0RlbHV4ZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlVSTCIsIkRlbHV4ZSIsInRva2VuIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0bmFtZSIsInN1cm5hbWUiLCJzZXRzdXJuYW1lIiwiZGF0ZSIsInNldGRhdGUiLCJjaGVja2luIiwic2V0Y2hlY2tpbiIsImNoZWNrb3V0Iiwic2V0Y2hlY2tvdXQiLCJ1c2VTV1IiLCJyZXZhbGlkYXRlT25Gb2N1cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZEJvb2tpbmciLCJwb3N0IiwiX2Jvb2tpbmciLCJtdXRhdGUiLCJ1cGRhdGVCb29raW5nIiwiaWQiLCJwdXQiLCJkZWxldGVCb29raW5nIiwicHJpbnRCb29raW5nIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGlzdCIsImF1dGhEZWx1eGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxTQUFJQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFSO0FBQUEsR0FBdkIsQ0FBSjtBQUFBLENBQW5COztBQUVBLElBQU1DLEdBQUcsdUNBQVQ7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFDekI7QUFEeUIsa0JBRURDLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFbEJDLElBRmtCO0FBQUEsTUFFWkMsT0FGWTs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQyxF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bkI7QUFBQSxhQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEE7QUFBQSxTQUFVTSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGaUI7QUFBQSxLQUFiLENBQVI7QUFpQkgsR0FsQkQ7O0FBbUJBLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLDJFQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLDJEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQUEsaUNBQ0E7QUFBRyxxQkFBUyxFQUFDLDBIQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVNFO0FBQUssaUJBQVMsRUFBQywrREFBZjtBQUFBLGtCQUNLSCxZQUFZLENBQUM1QixJQUFJLENBQUNnQyxJQUFOO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQXBFRDs7R0FBTTlCLE07VUFRc0JhLDJDOzs7S0FSdEJiLE07O0FBcUVTLHFFQUFBK0Isc0VBQVUsQ0FBQy9CLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9va2luZ0RlbHV4ZS5kYzdlMGRhZjViNzUxNDNjODkyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGF1dGhEZWx1eGUgZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoRGVsdXhlJ1xyXG5pbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gYXhpb3MuZ2V0KHVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvYm9va2luZ0RlbHV4ZWBcclxuXHJcbmNvbnN0IERlbHV4ZSA9ICgge3Rva2VufSkgPT4ge1xyXG4gICAgLy8gY29uc3QgW2Jvb2tpbmcsIHNldGJvb2tpbmddID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzdXJuYW1lLCBzZXRzdXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2hlY2tpbiwgc2V0Y2hlY2tpbl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVja291dCwgc2V0Y2hlY2tvdXRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFVSTCwgZmV0Y2hlciwgeyByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UgfSlcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgY29uc29sZS5sb2coJ0hvbWU6ICcsIGRhdGEpXHJcblxyXG4gICAgY29uc3QgYWRkQm9va2luZyA9IGFzeW5jIChuYW1lLCBzdXJuYW1lLCBkYXRlLCBjaGVja2luLCBjaGVja291dCkgPT4ge1xyXG4gICAgICAgIGxldCBfYm9va2luZyA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7bmFtZSwgc3VybmFtZSwgZGF0ZSwgY2hlY2tpbiwgY2hlY2tvdXR9KVxyXG4gICAgICAgIG11dGF0ZShVUkwpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQm9va2luZyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBfYm9va2luZyA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwgeyBuYW1lLCBzdXJuYW1lLGRhdGUsIGNoZWNraW4sIGNoZWNrb3V0IH0pXHJcbiAgICAgICAgbXV0YXRlKFVSTClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVCb29raW5nID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IF9ib29raW5nID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKVxyXG4gICAgICAgIG11dGF0ZShVUkwpXHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmludEJvb2tpbmcgPSAoX2Jvb2tpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gKF9ib29raW5nLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgdy0xLzQgaC0xLzIgbS01IG10LTgnID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgcGwtMiAtbXQtNSBicmVhay1hbGwgb3ZlcmZsb3ctYXV0byByb3VuZGVkLWxnJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkJvb2tpbmc6IDwvYT4ge2luZGV4KzF9IDxiciAvPiBcclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlVzZXIgOiA8L2E+IHtpdGVtLmlkfSA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPk5hbWUtU3VybmFtZSA6IDwvYT4ge2l0ZW0ubmFtZX0geyBpdGVtLnN1cm5hbWV9IDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+RGF0ZSA6IDwvYT4ge2l0ZW0uZGF0ZX0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5DaGVja0luIDogPC9hPiB7aXRlbS5jaGVja2lufSA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkNoZWNrT3V0IDo8L2E+IHtpdGVtLmNoZWNrb3V0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgdy1mdWxsIG10LTInPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXItMiBib3JkZXItcmVkLTkwMCBiZy1kYXJrcmVkIHctMTYgaC04IG1sLTQgcm91bmRlZC1tZCBob3ZlcjpiZy1iYWJ5cmVkIGZvY3VzOm91dGxpbmUtbm9uZScgb25DbGljaz17KCkgPT4gZGVsZXRlQm9va2luZyhpdGVtLmlkKX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk9ubGluZSBLYXJhb2tlIEJvb2tpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBmbGV4LWNvbCBmaXhlZCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbiBtdC0xMCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgYm9yZGVyLWRvdWJsZSBib3JkZXItOCBib3JkZXItcGluay04MDAgcC00IHJvdW5kZWQtbGcgYmctcGFsZXBpbmsnPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1waW5rLTgwMCc+RGVsdXhlIFJvb208L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZm9ybURlbHV4ZSc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1waW5rLTgwMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLW1kIGhvdmVyOmJnLXBhbGVwaW5rIGFuaW1hdGUtcHVsc2UnPlwiQ2xpY2sgaGVyZSBmb3IgYm9va2luZ1wiPC9hPlxyXG4gICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWV2ZW5seSB3LTQvNSBoLTIvNSBtdC0xMCBvdmVyZmxvdy1hdXRvJz5cclxuICAgICAgICAgICAgICAgIHtwcmludEJvb2tpbmcoZGF0YS5saXN0KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoRGVsdXhlKERlbHV4ZSlcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidG9rZW4gZnJvbSBjb29raWU6IFwiLGNvb2tpZS5nZXQoXCJ0b2tlblwiKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXE6ICcsIHJlcS5oZWFkZXJzKVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==