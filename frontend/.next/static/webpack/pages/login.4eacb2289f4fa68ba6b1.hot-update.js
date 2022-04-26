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
            onClick: login(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiVVJMIiwiTG9naW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjaGVja3Rva2VuIiwic2V0Q2hlY2tib3giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInJlcSIsInJlcyIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHVzaCIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb3B5VGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxrQ0FBVDs7QUFFZSxTQUFTQyxLQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFBQSxtQkFFUEYsc0RBQVEsQ0FBQyxFQUFELENBRkQ7QUFBQSxNQUVoQ0csUUFGZ0M7QUFBQSxNQUV0QkMsV0FGc0I7O0FBQUEsbUJBR1hKLHNEQUFRLENBQUMsRUFBRCxDQUhHO0FBQUEsTUFHaENLLE1BSGdDO0FBQUEsTUFHeEJDLFNBSHdCOztBQUFBLG1CQUlMTixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSWhDTyxVQUpnQztBQUFBLE1BSXBCQyxXQUpvQjs7QUFLdkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFN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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztHQTlFdUI1QixLO1VBS1BZLHFEOzs7S0FMT1osSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi40ZWFjYjIyODlmNGZhNjhiYTZiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MC9hcGkvbG9naW5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IHRva2VuIH0pIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtjaGVja3Rva2VuLCBzZXRDaGVja2JveF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsXHJcbiAgICAgICAgICAgIHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBjaGVja3Rva2VuIH0sXHJcbiAgICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdDogJywgcmVzdWx0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuZGF0YTogICcsIHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogICcsIHRva2VuKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvbWVudScpXHJcbiAgICAgICAgc2V0U3RhdHVzKHJlc3VsdC5zdGF0dXMgKyAnOiAnICsgcmVzdWx0LmRhdGEudXNlci51c2VybmFtZSlcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBKU09OLnN0cmluZ2lmeShlLnJlc3BvbnNlKSlcclxuICAgICAgICAvLyBzZXRTdGF0dXMoSlNPTi5zdHJpbmdpZnkoZS5yZXNwb25zZSkuc3Vic3RyaW5nKDAsIDgwKSArIFwiLi4uXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgY29uc3QgY29weVRleHQgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbilcclxuICAgIGNvbnNvbGUubG9nKFwiY29weXRva2VuOlwiLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk9ubGluZSBLYXJhb2tlIEJvb2tpbmc8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZpeGVkIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0xLzQgaC0yNCBtdC0yNCByb3VuZGVkLXQteGwgYmctYmx1ZXNlYSBkaXZpZGUteS0yIGRpdmlkZS1ibGFjayAnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhsICBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHBiLTEgdGV4dC1jZW50ZXInPkxvZyBpbjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXIgcHQtMic+Rm9yIFN0YWZmPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHctMS80IGJnLWVnZyByb3VuZGVkLWIteGwgc2hhZG93LXhsJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHctNC81IG10LTgnPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkJz5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS01MDAgcmluZyByaW5nLWdyYXktNDAwICBcclxuICAgICAgICAgICAgICByb3VuZGVkLW1kIHBsLTIgZm9jdXM6b3V0bGluZS1ub25lJyBwbGFjZWhvbGRlcj0neHh4eHh4J1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtdC00IGZvbnQtc2VtaWJvbGQnPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy1mdWxsIGgtOCBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByaW5nIHJpbmctZ3JheS00MDAgXHJcbiAgICAgICAgICAgICAgcm91bmRlZC1tZCBwbC0yIGZvY3VzOm91dGxpbmUtbm9uZScgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPScqKioqJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0gJ210LTIgdGV4dC1yZWQtNjAwIGZvbnQtbWVkaXVtIHRleHQtc20gaXRhbGljJz57c3RhdHVzfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBtdC02IHRleHQtc20nPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctNCBoLTQnIHR5cGU9J2NoZWNrYm94J1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2JveChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWwtMic+UmVtZW1iZXIgTWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctNC81IG10LTUgcGItNic+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgaC04IGZvbnQtc2VtaWJvbGQgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNjAwIHJpbmcgcm91bmRlZC1tZCBcclxuICAgICAgICAgICAgICBob3ZlcjpiZy1iYWJ5Ymx1ZSBmb2N1czpvdXRsaW5lLW5vbmUnIG9uQ2xpY2sgPXtsb2dpbigpfT5cclxuICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG10LTYnPlxyXG4gICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD9cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdtbC0yIGZvbnQtc2VtaWJvbGQnPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtjb3B5VGV4dH0+IENvcHkgdG9rZW4gPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlUZXh0fSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHctZnVsbCBtdC04IGZvY3VzOm91dGxpbmUtbm9uZSc+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbXItMTYgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTExMCcgc3JjPVwiL3RvcC1zZWNyZXQuc3ZnXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwidG9rZW4gZnJvbSBjb29raWU6IFwiLGNvb2tpZS5nZXQoXCJ0b2tlblwiKSkgXHJcbiAgLy8gY29uc29sZS5sb2coJ3JlcTogJywgcmVxLmhlYWRlcnMpXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=