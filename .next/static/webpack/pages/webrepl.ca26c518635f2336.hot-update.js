"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/webrepl",{

/***/ "./pages/webrepl.tsx":
/*!***************************!*\
  !*** ./pages/webrepl.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), history = ref[0], setHistory = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var mainInput = document.querySelector(\"#mainInput\");\n        mainInput.addEventListener('keyup', function(e) {\n            if (e.key === 'Enter' || e.keyCode === 13) {\n                // Do something\n                //alert(mainInput.value)\n                console.log(mainInput.value);\n                history.push(mainInput.value);\n                setHistory(history);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"WEB REPL\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        spacing: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputGroup, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputLeftAddon, {\n                                        children: \">\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                        id: \"mainInput\",\n                                        type: \"tel\",\n                                        placeholder: \"enter command...\",\n                                        focusBorderColor: \"null\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 7\n                            }, _this),\n                            history.map(function(h) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            children: h\n                                        }, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, h, true, {\n                                    fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93ZWJyZXBsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEI7QUFFdUI7QUFDTDtBQVVyQjs7QUFJekIsR0FBSyxDQUFDVyxJQUFJLEdBQWEsUUFDdkIsR0FENkIsQ0FBQzs7SUFHNUIsR0FBRyxDQUF5QlQsR0FBb0IsR0FBcEJBLCtDQUFRLENBQUUsQ0FBQyxDQUFDLEdBQW5DVSxPQUFPLEdBQWdCVixHQUFvQixLQUFsQ1csVUFBVSxHQUFJWCxHQUFvQjtJQUU5Q0QsZ0RBQVMsQ0FBRSxRQUNkLEdBRG1CLENBQUM7UUFDZixHQUFHLENBQUNhLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBWTtRQUVuREYsU0FBUyxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFPLFFBQUUsUUFBUSxDQUFFQyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxFQUFFLEVBQUVBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLENBQU8sVUFBSUQsQ0FBQyxDQUFDRSxPQUFPLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLEVBQWU7Z0JBQ2YsRUFBd0I7Z0JBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsU0FBUyxDQUFDUyxLQUFLO2dCQUMzQlgsT0FBTyxDQUFDWSxJQUFJLENBQUNWLFNBQVMsQ0FBQ1MsS0FBSztnQkFDNUJWLFVBQVUsQ0FBRUQsT0FBTyxDQUFFLENBQUc7WUFDNUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVOLE1BQU0sNkVBQ0hhLENBQUc7UUFBQ0MsU0FBUyxFQUFFdEIsMEVBQWdCOzt3RkFDN0JKLGtEQUFJOztnR0FDRjRCLENBQUs7a0NBQUMsQ0FBZTs7Ozs7O2dHQUNyQkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUE4Qjs7Ozs7O2dHQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBR3JDQyxDQUFJO2dCQUFDVCxTQUFTLEVBQUV0QixxRUFBVzs7Z0dBQ3pCZ0MsQ0FBRTt3QkFBQ1YsU0FBUyxFQUFFdEIsc0VBQVk7a0NBQUUsQ0FFN0I7Ozs7OztnR0FHR0UsbURBQUs7d0JBQUMrQixPQUFPLEVBQUUsQ0FBQzs7d0dBQ3BCOUIsd0RBQVU7O2dIQUNSQyw0REFBYzt3Q0FBQzhCLFFBQVEsRUFBQyxDQUFHOzs7Ozs7Z0hBQzNCakMsbURBQUs7d0NBQUNrQyxFQUFFLEVBQUMsQ0FBVzt3Q0FBQ0MsSUFBSSxFQUFDLENBQUs7d0NBQUNDLFdBQVcsRUFBQyxDQUFrQjt3Q0FBQ0MsZ0JBQWdCLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7OzRCQUd4RjlCLE9BQU8sQ0FBQytCLEdBQUcsQ0FBRSxRQUFRLENBQUNDLENBQUssRUFBRSxDQUFDO2dDQUM3QixNQUFNLDZFQUNIekMsMkNBQVE7O29IQUNSTSxxREFBTzs7Ozs7b0hBQ1BDLGtEQUFJO3NEQUFFa0MsQ0FBQzs7Ozs7OzttQ0FGT0EsQ0FBQzs7Ozs7NEJBS3BCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZUCxDQUFDO0dBM0RLakMsSUFBSTtLQUFKQSxJQUFJO0FBNkRWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dlYnJlcGwudHN4Pzc1N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBcbiAgSW5wdXQsIFxuICBTdGFjayxcbiAgSW5wdXRHcm91cCwgXG4gIElucHV0TGVmdEFkZG9uLCBcbiAgSW5wdXRSaWdodEFkZG9uLCAgIFxuICBEaXZpZGVyICwgXG4gIFRleHQsIFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgXG4gIHZhciBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZSggW10gYXMgYW55KSAgOyBcblxuICAgIHVzZUVmZmVjdCggKCk9PiB7XG4gICAgICBsZXQgbWFpbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluSW5wdXRcIikgYXMgYW55OyBcbiAgICAgIFxuICAgICAgbWFpbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZ1xuICAgICAgICAgICAgLy9hbGVydChtYWluSW5wdXQudmFsdWUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluSW5wdXQudmFsdWUpXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2gobWFpbklucHV0LnZhbHVlKVxuICAgICAgICAgICAgc2V0SGlzdG9yeSggaGlzdG9yeSApICA7IFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdFQiBSRVBMXG4gICAgICAgIDwvaDE+XG4gICAgICBcblxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8SW5wdXRMZWZ0QWRkb24gY2hpbGRyZW49Jz4nIC8+XG4gICAgICAgIDxJbnB1dCBpZD1cIm1haW5JbnB1dFwiIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J2VudGVyIGNvbW1hbmQuLi4nIGZvY3VzQm9yZGVyQ29sb3I9J251bGwnLz5cbiAgICAgIDwvSW5wdXRHcm91cD5cblxuICAgICAge2hpc3RvcnkubWFwKCBmdW5jdGlvbihoOmFueSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2h9PiBcbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0PntofTwvVGV4dD5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgIDwvU3RhY2s+XG5cbiAgICA8L21haW4+XG5cblxuXG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50Iiwic3R5bGVzIiwiSW5wdXQiLCJTdGFjayIsIklucHV0R3JvdXAiLCJJbnB1dExlZnRBZGRvbiIsIkRpdmlkZXIiLCJUZXh0IiwiSG9tZSIsImhpc3RvcnkiLCJzZXRIaXN0b3J5IiwibWFpbklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJrZXlDb2RlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJzcGFjaW5nIiwiY2hpbGRyZW4iLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImZvY3VzQm9yZGVyQ29sb3IiLCJtYXAiLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/webrepl.tsx\n");

/***/ })

});