"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\components\\\\layout.js\",\n        lineNumber: 2,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6QyxxQkFBTyw4REFBQ0MsS0FBRztrQkFBRUQsUUFBUTs7Ozs7WUFBTztDQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MjlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gPGRpdj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgfSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logout),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst URL = `http://localhost/api/logout`;\nfunction logout({ token  }) {\n    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        logout1();\n    }, []);\n    const logout1 = async ()=>{\n        console.log(\"remove token: \", token);\n        let result = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(URL, {\n            withCredentials: true\n        });\n        setStatus(\"Logout successful\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Online Community Blog\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col fixed justify-center items-center h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center divide-y-2 divide-black -mt-28\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-6xl font-bold animate-pulse uppercase\",\n                                children: \"Log out\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold animate-pulse\",\n                                children: [\n                                    \" \",\n                                    status,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Karaoke_Booking\\\\frontend\\\\pages\\\\logout.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\nfunction getServerSideProps({ req , res  }) {\n    // console.log(\"token from cookie: \",cookie.get(\"token\")) \n    // console.log('req: ', req.headers)\n    return {\n        props: {\n            token: req.cookies.token || \"\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNhO0FBQ0U7QUFDbEI7QUFHekIsTUFBTUssR0FBRyxHQUFHLENBQUMsMkJBQTJCLENBQUM7QUFFMUIsU0FBU0MsTUFBTSxDQUFDLEVBQUVDLEtBQUssR0FBRSxFQUFFO0lBRXRDLE1BQU0sRUFWVixHQVVXQyxNQUFNLEdBVmpCLEdBVW1CQyxTQUFTLE1BQUlQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXhDQyxnREFBUyxDQUFDLElBQU07UUFDWkcsT0FBTSxFQUFFO0tBQ1gsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNQSxPQUFNLEdBQUcsVUFBWTtRQUN2QkksT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVKLEtBQUssQ0FBQztRQUNwQyxJQUFJSyxNQUFNLEdBQUcsTUFBTVIsZ0RBQVMsQ0FBQ0MsR0FBRyxFQUFFO1lBQUVTLGVBQWUsRUFBRSxJQUFJO1NBQUUsQ0FBQztRQUM1REwsU0FBUyxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDO0lBRUQscUJBQ0ksOERBQUNSLDBEQUFNOzswQkFDSCw4REFBQ0Qsa0RBQUk7MEJBQ0QsNEVBQUNlLE9BQUs7OEJBQUMsdUJBQXFCOzs7Ozt3QkFBUTs7Ozs7b0JBQ2pDOzBCQUNQLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUVBQW1FOzBCQUM5RSw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDRDQUE0Qzs7c0NBQ3ZELDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsTUFBTTtzQ0FDakIsNEVBQUNDLElBQUU7Z0NBQUNELFNBQVMsRUFBQyw0Q0FBNEM7MENBQUMsU0FBTzs7Ozs7b0NBQUs7Ozs7O2dDQUNyRTtzQ0FDTiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07c0NBQ2pCLDRFQUFDQyxJQUFFO2dDQUFDRCxTQUFTLEVBQUMsa0NBQWtDOztvQ0FBQyxHQUFDO29DQUFDVCxNQUFNO29DQUFDLEdBQUM7Ozs7OztvQ0FBSzs7Ozs7Z0NBQzlEOzs7Ozs7d0JBQ0o7Ozs7O29CQUVKOzs7Ozs7WUFDRCxDQUNaO0NBQ0o7QUFDTSxTQUFTVyxrQkFBa0IsQ0FBQyxFQUFFQyxHQUFHLEdBQUVDLEdBQUcsR0FBRSxFQUFFO0lBQzdDLDBEQUEwRDtJQUMxRCxvQ0FBb0M7SUFDcEMsT0FBTztRQUFFQyxLQUFLLEVBQUU7WUFBRWYsS0FBSyxFQUFFYSxHQUFHLENBQUNHLE9BQU8sQ0FBQ2hCLEtBQUssSUFBSSxFQUFFO1NBQUU7S0FBRSxDQUFDO0NBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9sb2dvdXQuanM/YWM0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dvdXRgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dvdXQoeyB0b2tlbiB9KSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9nb3V0KClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlIHRva2VuOiAnLCB0b2tlbilcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICBzZXRTdGF0dXMoXCJMb2dvdXQgc3VjY2Vzc2Z1bFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+T25saW5lIENvbW11bml0eSBCbG9nPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmaXhlZCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGRpdmlkZS15LTIgZGl2aWRlLWJsYWNrIC1tdC0yOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BiLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBmb250LWJvbGQgYW5pbWF0ZS1wdWxzZSB1cHBlcmNhc2UnPkxvZyBvdXQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIGFuaW1hdGUtcHVsc2UnPiB7c3RhdHVzfSA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBmcm9tIGNvb2tpZTogXCIsY29va2llLmdldChcInRva2VuXCIpKSBcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZXE6ICcsIHJlcS5oZWFkZXJzKVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlVSTCIsImxvZ291dCIsInRva2VuIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJwcm9wcyIsImNvb2tpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logout.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/logout.js"));
module.exports = __webpack_exports__;

})();