webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Karaoke_Booking_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "D:\\Karaoke_Booking\\frontend\\pages\\login.js",
    _s = $RefreshSig$();







var URL = "http://localhost:80/api/login";
var __N_SSP = true;
function Login(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      checktoken = _useState4[0],
      setCheckbox = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(D_Karaoke_Booking_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
      var result;
      return D_Karaoke_Booking_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(URL, {
                username: username,
                password: password,
                checktoken: checktoken
              }, {
                withCredentials: true
              });

            case 3:
              result = _context.sent;
              console.log('result: ', result);
              console.log('result.data:  ', result.data);
              console.log('token:  ', token); // router.push('/menu')

              setStatus(result.status + ': ' + result.data.user.username);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log('error: ', JSON.stringify(_context.t0.response)); // setStatus(JSON.stringify(e.response).substring(0, 80) + "...")

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function login(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var copyText = function copyText() {
    navigator.clipboard.writeText(token);
    console.log("copytoken:", token);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Online Karaoke Booking"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col fixed justify-start items-center h-screen w-screen",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center w-1/4 h-24 mt-24 rounded-t-xl bg-bluesea divide-y-2 divide-black ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-xl  font-bold uppercase tracking-wider pb-1 text-center",
          children: "Log in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-lg font-bold uppercase tracking-wide text-center pt-2",
          children: "For Staff"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col justify-start items-center w-1/4 bg-egg rounded-b-xl shadow-xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col justify-center items-start w-4/5 mt-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "font-semibold",
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400  \r rounded-md pl-2 focus:outline-none",
            placeholder: "xxxxxx",
            onChange: function onChange(e) {
              return setUsername(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mt-4 font-semibold",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400 \r rounded-md pl-2 focus:outline-none",
            type: "password",
            placeholder: "****",
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mt-2 text-red-600 font-medium text-sm italic",
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center mt-6 text-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "w-4 h-4",
              type: "checkbox",
              onChange: function onChange(e) {
                return setCheckbox(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "ml-2",
              children: "Remember Me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col justify-center items-center w-4/5 mt-5 pb-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "w-full h-8 font-semibold border-2 border-blue-600 ring rounded-md \r hover:bg-babyblue focus:outline-none",
            onClick: login,
            children: "Log in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row mt-6",
            children: ["Don't have an account?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/register",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "ml-2 font-semibold",
                children: "Register"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: copyText,
        className: "flex justify-end items-center w-full mt-8 focus:outline-none",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "mr-16 transition duration-700 transform hover:-translate-y-1 hover:scale-110",
          src: "/top-secret.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Login, "gxBoTumIkG0UOsSH3yvZeCftnmo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiVVJMIiwiTG9naW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjaGVja3Rva2VuIiwic2V0Q2hlY2tib3giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInJlcSIsInJlcyIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImNvcHlUZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLGtDQUFUOztBQUVlLFNBQVNDLEtBQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDaENDLFFBRGdDO0FBQUEsTUFDdEJDLFdBRHNCOztBQUFBLG1CQUVQRixzREFBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRWhDRyxRQUZnQztBQUFBLE1BRXRCQyxXQUZzQjs7QUFBQSxtQkFHWEosc0RBQVEsQ0FBQyxFQUFELENBSEc7QUFBQSxNQUdoQ0ssTUFIZ0M7QUFBQSxNQUd4QkMsU0FId0I7O0FBQUEsbUJBSUxOLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJaENPLFVBSmdDO0FBQUEsTUFJcEJDLFdBSm9COztBQUt2QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLEtBQUs7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQ7O0dBOUV1QjNCLEs7VUFLUFkscUQ7OztLQUxPWixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmM4OGUzZmY5M2JkZDZlYWU3ZjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0OjgwL2FwaS9sb2dpbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHsgdG9rZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NoZWNrdG9rZW4sIHNldENoZWNrYm94XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCxcclxuICAgICAgICAgICAgeyB1c2VybmFtZSwgcGFzc3dvcmQsIGNoZWNrdG9rZW4gfSxcclxuICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdC5kYXRhOiAgJywgcmVzdWx0LmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAgJywgdG9rZW4pXHJcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy9tZW51JylcclxuICAgICAgICBzZXRTdGF0dXMocmVzdWx0LnN0YXR1cyArICc6ICcgKyByZXN1bHQuZGF0YS51c2VyLnVzZXJuYW1lKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcsIEpTT04uc3RyaW5naWZ5KGUucmVzcG9uc2UpKVxyXG4gICAgICAgIC8vIHNldFN0YXR1cyhKU09OLnN0cmluZ2lmeShlLnJlc3BvbnNlKS5zdWJzdHJpbmcoMCwgODApICsgXCIuLi5cIilcclxuICAgIH1cclxufVxyXG5cclxuICBjb25zdCBjb3B5VGV4dCA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRva2VuKVxyXG4gICAgY29uc29sZS5sb2coXCJjb3B5dG9rZW46XCIsIHRva2VuKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+T25saW5lIEthcmFva2UgQm9va2luZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZml4ZWQganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvNCBoLTI0IG10LTI0IHJvdW5kZWQtdC14bCBiZy1ibHVlc2VhIGRpdmlkZS15LTIgZGl2aWRlLWJsYWNrICc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteGwgIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgcGItMSB0ZXh0LWNlbnRlcic+TG9nIGluPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWNlbnRlciBwdC0yJz5Gb3IgU3RhZmY8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdy0xLzQgYmctZWdnIHJvdW5kZWQtYi14bCBzaGFkb3cteGwnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgdy00LzUgbXQtOCc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy1mdWxsIGgtOCBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByaW5nIHJpbmctZ3JheS00MDAgIFxyXG4gICAgICAgICAgICAgIHJvdW5kZWQtbWQgcGwtMiBmb2N1czpvdXRsaW5lLW5vbmUnIHBsYWNlaG9sZGVyPSd4eHh4eHgnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J210LTQgZm9udC1zZW1pYm9sZCc+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LWZ1bGwgaC04IG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHJpbmcgcmluZy1ncmF5LTQwMCBcclxuICAgICAgICAgICAgICByb3VuZGVkLW1kIHBsLTIgZm9jdXM6b3V0bGluZS1ub25lJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9JyoqKionXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSAnbXQtMiB0ZXh0LXJlZC02MDAgZm9udC1tZWRpdW0gdGV4dC1zbSBpdGFsaWMnPntzdGF0dXN9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG10LTYgdGV4dC1zbSc+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy00IGgtNCcgdHlwZT0nY2hlY2tib3gnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrYm94KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtbC0yJz5SZW1lbWJlciBNZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy00LzUgbXQtNSBwYi02Jz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctZnVsbCBoLTggZm9udC1zZW1pYm9sZCBib3JkZXItMiBib3JkZXItYmx1ZS02MDAgcmluZyByb3VuZGVkLW1kIFxyXG4gICAgICAgICAgICAgIGhvdmVyOmJnLWJhYnlibHVlIGZvY3VzOm91dGxpbmUtbm9uZScgb25DbGljayA9e2xvZ2lufT5cclxuICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG10LTYnPlxyXG4gICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdtbC0yIGZvbnQtc2VtaWJvbGQnPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtjb3B5VGV4dH0+IENvcHkgdG9rZW4gPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlUZXh0fSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHctZnVsbCBtdC04IGZvY3VzOm91dGxpbmUtbm9uZSc+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbXItMTYgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTExMCcgc3JjPVwiL3RvcC1zZWNyZXQuc3ZnXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwidG9rZW4gZnJvbSBjb29raWU6IFwiLGNvb2tpZS5nZXQoXCJ0b2tlblwiKSkgXHJcbiAgLy8gY29uc29sZS5sb2coJ3JlcTogJywgcmVxLmhlYWRlcnMpXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=