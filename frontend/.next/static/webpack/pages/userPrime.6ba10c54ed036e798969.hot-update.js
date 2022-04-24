webpackHotUpdate_N_E("pages/userPrime",{

/***/ "./pages/userPrime.js":
/*!****************************!*\
  !*** ./pages/userPrime.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Prime; });
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


var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\pages\\userPrime.js",
    _s = $RefreshSig$();







var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
    return res.data;
  });
};

var URL = "http://localhost/api/bookingPrime";
var __N_SSP = true;
function Prime(_ref) {
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
    lineNumber: 13,
    columnNumber: 23
  }, this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 23
  }, this);
  console.log('Home: ', data);

  var printBooking = function printBooking(_booking) {
    return _booking.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap w-1/4 h-1/2 m-5 mt-8 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative border-2 p-8 border-red-600 rounded-xl",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Booking: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, _this), " ", index + 1, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 68
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "User : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this), " ", item.id, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 66
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "Date : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this), " ", item.date, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 68
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "CheckIn : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), " ", item.checkin, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 74
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "font-semibold",
            children: "CheckOut :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this), " ", item.checkout]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
        lineNumber: 35,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/formPrime",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-2xl tracking-wider uppercase text-pink-800 rounded-xl focus:outline-none rounded-md hover:bg-palepink animate-pulse",
          children: "\"Prime Booking click here\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto",
        children: printBooking(data.list)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

_s(Prime, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Prime;

var _c;

$RefreshReg$(_c, "Prime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlclByaW1lLmpzIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiVVJMIiwiUHJpbWUiLCJ0b2tlbiIsInVzZVNXUiIsInJldmFsaWRhdGVPbkZvY3VzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJpbnRCb29raW5nIiwiX2Jvb2tpbmciLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsImRhdGUiLCJjaGVja2luIiwiY2hlY2tvdXQiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWVHLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEdBQXZCLENBQUo7QUFBQSxDQUFuQjs7QUFFQSxJQUFNQyxHQUFHLHNDQUFUOztBQUVlLFNBQVNDLEtBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxLQUFPLFFBQVBBLEtBQU87O0FBQUEsZ0JBQ1pDLG1EQUFNLENBQUNILEdBQUQsRUFBTVAsT0FBTixFQUFlO0FBQUVXLHFCQUFpQixFQUFFO0FBQXJCLEdBQWYsQ0FETTtBQUFBLE1BQzVCTCxJQUQ0QixXQUM1QkEsSUFENEI7QUFBQSxNQUN0Qk0sS0FEc0IsV0FDdEJBLEtBRHNCOztBQUVwQyxNQUFJQSxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUksQ0FBQ04sSUFBTCxFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWE8sU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsSUFBdEI7O0FBRUEsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFdBQVFBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDBCQUVqQjtBQUFpQixpQkFBUyxFQUFDLHNDQUEzQjtBQUFBLCtCQUNBO0FBQUssbUJBQVMsRUFBQyxpREFBZjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLE9BQzhDQSxLQUFLLEdBQUMsQ0FEcEQsb0JBQ3VEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHZELGVBRUU7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsT0FFNENELElBQUksQ0FBQ0UsRUFGakQsb0JBRXFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRnJELGVBR0U7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsT0FHNENGLElBQUksQ0FBQ0csSUFIakQsb0JBR3VEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSHZELGVBSUU7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsT0FJK0NILElBQUksQ0FBQ0ksT0FKcEQsb0JBSTZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSjdELGVBS0U7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsT0FLK0NKLElBQUksQ0FBQ0ssUUFMcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsU0FBVUosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmlCO0FBQUEsS0FBYixDQUFSO0FBYUgsR0FkRDs7QUFlQSxzQkFDSSxxRUFBQywwREFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQywyRUFBZjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFlBQVg7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsMEhBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsK0RBQWY7QUFBQSxrQkFDS0osWUFBWSxDQUFDVCxJQUFJLENBQUNrQixJQUFOO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7R0F2Q3VCaEIsSztVQUNJRSwyQzs7O0tBREpGLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlclByaW1lLjZiYTEwYzU0ZWQwMzZlNzk4OTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdXNlU1dSLCB7bXV0YXRlfSBmcm9tICdzd3InXHJcblxyXG5jb25zdCBmZXRjaGVyID0gdXJsID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Jvb2tpbmdQcmltZWBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaW1lICgge3Rva2VufSl7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoVVJMLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSB9KVxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XHJcbiAgICBjb25zb2xlLmxvZygnSG9tZTogJywgZGF0YSlcclxuXHJcbiAgICBjb25zdCBwcmludEJvb2tpbmcgPSAoX2Jvb2tpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gKF9ib29raW5nLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgdy0xLzQgaC0xLzIgbS01IG10LTggJyA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBib3JkZXItMiBwLTggYm9yZGVyLXJlZC02MDAgcm91bmRlZC14bCc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5Cb29raW5nOiA8L2E+IHtpbmRleCsxfSA8YnIgLz4gXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5Vc2VyIDogPC9hPiB7aXRlbS5pZH0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5EYXRlIDogPC9hPiB7aXRlbS5kYXRlfSA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPkNoZWNrSW4gOiA8L2E+IHtpdGVtLmNoZWNraW59IDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+Q2hlY2tPdXQgOjwvYT4ge2l0ZW0uY2hlY2tvdXR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk9ubGluZSBLYXJhb2tlIEJvb2tpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBmbGV4LWNvbCBmaXhlZCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbiBtdC0xMCc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9mb3JtUHJpbWUnPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgdGV4dC1waW5rLTgwMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLW1kIGhvdmVyOmJnLXBhbGVwaW5rIGFuaW1hdGUtcHVsc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlByaW1lIEJvb2tpbmcgY2xpY2sgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGp1c3RpZnktZXZlbmx5IHctNC81IGgtMi81IG10LTEwIG92ZXJmbG93LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAge3ByaW50Qm9va2luZyhkYXRhLmxpc3QpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBmcm9tIGNvb2tpZTogXCIsY29va2llLmdldChcInRva2VuXCIpKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlcTogJywgcmVxLmhlYWRlcnMpXHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9