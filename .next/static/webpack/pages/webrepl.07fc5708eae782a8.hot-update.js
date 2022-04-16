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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\n//import {debounce} from 'lodash' ; \n// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)\n// Returns a function, that, as long as it continues to be invoked, will not\n// be triggered. The function will be called after it stops being called for\n// `wait` milliseconds.\nvar debounce = function(func, wait) {\n    var timeout;\n    return function executedFunction() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        var later = function() {\n            clearTimeout(timeout);\n            func.apply(void 0, _toConsumableArray(args));\n        };\n        clearTimeout(timeout);\n        timeout = setTimeout(later, wait);\n    };\n};\nvar Home = function Home() {\n    var _this1 = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), state1 = ref[0], setState = ref[1];\n    var handle_enter = debounce(function(e) {\n        if (e.key === 'Enter') {\n            var _this = this;\n            // Do something\n            //alert(mainInput.value)\n            setState(function(state) {\n                return state.concat(_this.value);\n            });\n        }\n    }, 500);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"WEB REPL\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        spacing: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputGroup, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputLeftAddon, {\n                                        children: \">\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                        id: \"mainInput\",\n                                        type: \"tel\",\n                                        placeholder: \"enter command...\",\n                                        focusBorderColor: \"null\",\n                                        onKeyUp: function(e) {\n                                            return handle_enter(_this1, e);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, this),\n                            state1.map(function(h) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            children: h\n                                        }, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, h, true, {\n                                    fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLENBQUssRUFBRSxDQUFDO2dDQUMzQixNQUFNLDZFQUNIN0MsMkNBQVE7O29IQUNSTSxxREFBTzs7Ozs7b0hBQ1BDLGtEQUFJO3NEQUFFc0MsQ0FBQzs7Ozs7OzttQ0FGT0EsQ0FBQzs7Ozs7NEJBS3BCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTUCxDQUFDO0dBbkRLNUIsSUFBSTtLQUFKQSxJQUFJO0FBcURWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dlYnJlcGwudHN4Pzc1N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBcbiAgSW5wdXQsIFxuICBTdGFjayxcbiAgSW5wdXRHcm91cCwgXG4gIElucHV0TGVmdEFkZG9uLCBcbiAgSW5wdXRSaWdodEFkZG9uLCAgIFxuICBEaXZpZGVyICwgXG4gIFRleHQsIFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG4vL2ltcG9ydCB7ZGVib3VuY2V9IGZyb20gJ2xvZGFzaCcgOyBcblxuLy8gT3JpZ2luYWxseSBpbnNwaXJlZCBieSAgRGF2aWQgV2Fsc2ggKGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb24pXG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3Rcbi8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3Jcbi8vIGB3YWl0YCBtaWxsaXNlY29uZHMuXG5jb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gIH07XG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoIFtdIGFzIGFueSkgIDsgXG5cblxuICB2YXIgaGFuZGxlX2VudGVyID0gZGVib3VuY2UoIGZ1bmN0aW9uICh0aGlzIDphbnkgLCBlIDogYW55KSB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIC8vIERvIHNvbWV0aGluZ1xuICAgICAgICAvL2FsZXJ0KG1haW5JbnB1dC52YWx1ZSlcbiAgICAgICAgc2V0U3RhdGUoIHN0YXRlID0+IHN0YXRlLmNvbmNhdCh0aGlzLnZhbHVlKSApIFxuICAgIH1cbiAgfSAsIDUwMCkgXG5cblxuICAgIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdFQiBSRVBMXG4gICAgICAgIDwvaDE+XG4gICAgICBcblxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8SW5wdXRMZWZ0QWRkb24gY2hpbGRyZW49Jz4nIC8+XG4gICAgICAgIDxJbnB1dCBpZD1cIm1haW5JbnB1dFwiIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J2VudGVyIGNvbW1hbmQuLi4nIGZvY3VzQm9yZGVyQ29sb3I9J251bGwnICBvbktleVVwPXsoZSk9PmhhbmRsZV9lbnRlcih0aGlzICxlKX0vPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuXG4gICAgICB7c3RhdGUubWFwKCBmdW5jdGlvbihoOmFueSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2h9PiBcbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0PntofTwvVGV4dD5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgIDwvU3RhY2s+XG5cbiAgICA8L21haW4+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUgOyBcblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50Iiwic3R5bGVzIiwiSW5wdXQiLCJTdGFjayIsIklucHV0R3JvdXAiLCJJbnB1dExlZnRBZGRvbiIsIkRpdmlkZXIiLCJUZXh0IiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJleGVjdXRlZEZ1bmN0aW9uIiwiYXJncyIsImxhdGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlX2VudGVyIiwiZSIsImtleSIsImNvbmNhdCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInNwYWNpbmciLCJjaGlsZHJlbiIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZm9jdXNCb3JkZXJDb2xvciIsIm9uS2V5VXAiLCJtYXAiLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/webrepl.tsx\n");

/***/ })

});