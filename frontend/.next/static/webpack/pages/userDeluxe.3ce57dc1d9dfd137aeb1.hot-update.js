webpackHotUpdate_N_E("pages/userDeluxe",{

/***/ "./pages/userDeluxe.js":
/*!*****************************!*\
  !*** ./pages/userDeluxe.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Deluxe; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\pages\\userDeluxe.js",
    _s = $RefreshSig$();







var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
    return res.data;
  });
};

var URL = "http://localhost/api/bookingDeluxe";
var __N_SSP = true;
function Deluxe(_ref) {
  _s();

  var _this = this;

  var token = _ref.token;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(URL, fetcher, {
    revalidateOnFocus: false
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 23
  }, this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 23
  }, this);
  console.log('Home: ', data);

  var printBooking = function printBooking(_booking) {
    return _booking.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap w-1/4 h-1/2 m-5 mt-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full h-full pl-2 -mt-5 break-all overflow-auto rounded-lg rounded-xl",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Booking: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this), " ", index + 1, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 68
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "User : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this), " ", item.id, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 66
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Date : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), " ", item.date, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 68
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "CheckIn : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this), " ", item.checkin, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 74
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "CheckOut :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), " ", item.checkout]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Online Karaoke Booking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/formDeluxe",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-2xl tracking-wider uppercase text-pink-800 rounded-xl focus:outline-none rounded-md hover:bg-palepink animate-pulse",
          children: "\"Deluxe Booking click here\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto",
        children: printBooking(data.list)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(Deluxe, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Deluxe;

var _c;

$RefreshReg$(_c, "Deluxe");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlckRlbHV4ZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlVSTCIsIkRlbHV4ZSIsInRva2VuIiwidXNlU1dSIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcmludEJvb2tpbmciLCJfYm9va2luZyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwiZGF0ZSIsImNoZWNraW4iLCJjaGVja291dCIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxTQUFJQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFSO0FBQUEsR0FBdkIsQ0FBSjtBQUFBLENBQW5COztBQUVBLElBQU1DLEdBQUcsdUNBQVQ7O0FBRWUsU0FBU0MsTUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxnQkFFZkMsbURBQU0sQ0FBQ0gsR0FBRCxFQUFNUCxPQUFOLEVBQWU7QUFBRVcscUJBQWlCLEVBQUU7QUFBckIsR0FBZixDQUZTO0FBQUEsTUFFL0JMLElBRitCLFdBRS9CQSxJQUYrQjtBQUFBLE1BRXpCTSxLQUZ5QixXQUV6QkEsS0FGeUI7O0FBR3ZDLE1BQUlBLEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsTUFBSSxDQUFDTixJQUFMLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCUixJQUF0Qjs7QUFFQSxNQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQWM7QUFDL0IsV0FBUUEsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBRWpCO0FBQWlCLGlCQUFTLEVBQUMscUNBQTNCO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFDLHdFQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDOENBLEtBQUssR0FBQyxDQURwRCxvQkFDdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEdkQsZUFFRTtBQUFHLHFCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixPQUU0Q0QsSUFBSSxDQUFDRSxFQUZqRCxvQkFFcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGckQsZUFHRTtBQUFHLHFCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixPQUc0Q0YsSUFBSSxDQUFDRyxJQUhqRCxvQkFHdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIdkQsZUFJRTtBQUFHLHFCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixPQUkrQ0gsSUFBSSxDQUFDSSxPQUpwRCxvQkFJNkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKN0QsZUFLRTtBQUFHLHFCQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixPQUsrQ0osSUFBSSxDQUFDSyxRQUxwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxTQUFVSixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGaUI7QUFBQSxLQUFiLENBQVI7QUFhSCxHQWREOztBQWVBLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFDLDJFQUFmO0FBQUEsOEJBQ0EscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBLCtCQUNNO0FBQUcsbUJBQVMsRUFBQywwSEFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQU1FO0FBQUssaUJBQVMsRUFBQywrREFBZjtBQUFBLGtCQUNLSixZQUFZLENBQUNULElBQUksQ0FBQ2tCLElBQU47QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztHQXhDdUJoQixNO1VBRUlFLDJDOzs7S0FGSkYsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyRGVsdXhlLjNjZTU3ZGMxZDlkZmQxMzdhZWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Jvb2tpbmdEZWx1eGVgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWx1eGUgKCB7dG9rZW59KSAge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihVUkwsIGZldGNoZXIsIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlIH0pXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGNvbnNvbGUubG9nKCdIb21lOiAnLCBkYXRhKVxyXG5cclxuICAgIGNvbnN0IHByaW50Qm9va2luZyA9IChfYm9va2luZykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoX2Jvb2tpbmcubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCB3LTEvNCBoLTEvMiBtLTUgbXQtOCcgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBwbC0yIC1tdC01IGJyZWFrLWFsbCBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtbGcgcm91bmRlZC14bCc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5Cb29raW5nOiA8L2E+IHtpbmRleCsxfSA8YnIgLz4gXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5Vc2VyIDogPC9hPiB7aXRlbS5pZH0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5EYXRlIDogPC9hPiB7aXRlbS5kYXRlfSA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkNoZWNrSW4gOiA8L2E+IHtpdGVtLmNoZWNraW59IDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Q2hlY2tPdXQgOjwvYT4ge2l0ZW0uY2hlY2tvdXR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk9ubGluZSBLYXJhb2tlIEJvb2tpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBmbGV4LWNvbCBmaXhlZCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbiBtdC0xMCc+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvZm9ybURlbHV4ZSc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtMnhsIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZSB0ZXh0LXBpbmstODAwIHJvdW5kZWQteGwgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQtbWQgaG92ZXI6YmctcGFsZXBpbmsgYW5pbWF0ZS1wdWxzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVsdXhlIEJvb2tpbmcgY2xpY2sgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGp1c3RpZnktZXZlbmx5IHctNC81IGgtMi81IG10LTEwIG92ZXJmbG93LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAge3ByaW50Qm9va2luZyhkYXRhLmxpc3QpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBmcm9tIGNvb2tpZTogXCIsY29va2llLmdldChcInRva2VuXCIpKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlcTogJywgcmVxLmhlYWRlcnMpXHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9