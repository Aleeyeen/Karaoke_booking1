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
              console.log('token:  ', token);
              router.push('/menu');
              setStatus(result.status + ': ' + result.data.user.username);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log('error: ', JSON.stringify(_context.t0.response)); // setStatus(JSON.stringify(e.response).substring(0, 80) + "...")

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiVVJMIiwiTG9naW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjaGVja3Rva2VuIiwic2V0Q2hlY2tib3giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInJlcSIsInJlcyIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHVzaCIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb3B5VGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxrQ0FBVDs7QUFFZSxTQUFTQyxLQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFBQSxtQkFFUEYsc0RBQVEsQ0FBQyxFQUFELENBRkQ7QUFBQSxNQUVoQ0csUUFGZ0M7QUFBQSxNQUV0QkMsV0FGc0I7O0FBQUEsbUJBR1hKLHNEQUFRLENBQUMsRUFBRCxDQUhHO0FBQUEsTUFHaENLLE1BSGdDO0FBQUEsTUFHeEJDLFNBSHdCOztBQUFBLG1CQUlMTixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSWhDTyxVQUpnQztBQUFBLE1BSXBCQyxXQUpvQjs7QUFLdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFN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QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0E5RXVCNUIsSztVQUtQWSxxRDs7O0tBTE9aLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDU5MWFkNjNlYTc4YzYyYTk3ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAvYXBpL2xvZ2luYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyB0b2tlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY2hlY2t0b2tlbiwgc2V0Q2hlY2tib3hdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLFxyXG4gICAgICAgICAgICB7IHVzZXJuYW1lLCBwYXNzd29yZCwgY2hlY2t0b2tlbiB9LFxyXG4gICAgICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdClcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0LmRhdGE6ICAnLCByZXN1bHQuZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICAnLCB0b2tlbilcclxuICAgICAgICByb3V0ZXIucHVzaCgnL21lbnUnKVxyXG4gICAgICAgIHNldFN0YXR1cyhyZXN1bHQuc3RhdHVzICsgJzogJyArIHJlc3VsdC5kYXRhLnVzZXIudXNlcm5hbWUpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgSlNPTi5zdHJpbmdpZnkoZS5yZXNwb25zZSkpXHJcbiAgICAgICAgLy8gc2V0U3RhdHVzKEpTT04uc3RyaW5naWZ5KGUucmVzcG9uc2UpLnN1YnN0cmluZygwLCA4MCkgKyBcIi4uLlwiKVxyXG4gICAgfVxyXG59XHJcblxyXG4gIGNvbnN0IGNvcHlUZXh0ID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodG9rZW4pXHJcbiAgICBjb25zb2xlLmxvZyhcImNvcHl0b2tlbjpcIiwgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5PbmxpbmUgS2FyYW9rZSBCb29raW5nPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmaXhlZCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS80IGgtMjQgbXQtMjQgcm91bmRlZC10LXhsIGJnLWJsdWVzZWEgZGl2aWRlLXktMiBkaXZpZGUtYmxhY2sgJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC14bCAgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBwYi0xIHRleHQtY2VudGVyJz5Mb2cgaW48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtY2VudGVyIHB0LTInPkZvciBTdGFmZjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LTEvNCBiZy1lZ2cgcm91bmRlZC1iLXhsIHNoYWRvdy14bCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LTQvNSBtdC04Jz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LWZ1bGwgaC04IG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHJpbmcgcmluZy1ncmF5LTQwMCAgXHJcbiAgICAgICAgICAgICAgcm91bmRlZC1tZCBwbC0yIGZvY3VzOm91dGxpbmUtbm9uZScgcGxhY2Vob2xkZXI9J3h4eHh4eCdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbXQtNCBmb250LXNlbWlib2xkJz5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS01MDAgcmluZyByaW5nLWdyYXktNDAwIFxyXG4gICAgICAgICAgICAgIHJvdW5kZWQtbWQgcGwtMiBmb2N1czpvdXRsaW5lLW5vbmUnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj0nKioqKidcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9ICdtdC0yIHRleHQtcmVkLTYwMCBmb250LW1lZGl1bSB0ZXh0LXNtIGl0YWxpYyc+e3N0YXR1c308L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbXQtNiB0ZXh0LXNtJz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LTQgaC00JyB0eXBlPSdjaGVja2JveCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tib3goZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J21sLTInPlJlbWVtYmVyIE1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTQvNSBtdC01IHBiLTYnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy1mdWxsIGgtOCBmb250LXNlbWlib2xkIGJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCByaW5nIHJvdW5kZWQtbWQgXHJcbiAgICAgICAgICAgICAgaG92ZXI6YmctYmFieWJsdWUgZm9jdXM6b3V0bGluZS1ub25lJyBvbkNsaWNrID17bG9naW59PlxyXG4gICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbXQtNic+XHJcbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J21sLTIgZm9udC1zZW1pYm9sZCc+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlUZXh0fT4gQ29weSB0b2tlbiA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29weVRleHR9IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdy1mdWxsIG10LTggZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdtci0xNiB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2NhbGUtMTEwJyBzcmM9XCIvdG9wLXNlY3JldC5zdmdcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBmcm9tIGNvb2tpZTogXCIsY29va2llLmdldChcInRva2VuXCIpKSBcclxuICAvLyBjb25zb2xlLmxvZygncmVxOiAnLCByZXEuaGVhZGVycylcclxuICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==