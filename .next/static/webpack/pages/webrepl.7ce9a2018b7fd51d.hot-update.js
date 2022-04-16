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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\n//import {debounce} from 'lodash' ; \n// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)\n// Returns a function, that, as long as it continues to be invoked, will not\n// be triggered. The function will be called after it stops being called for\n// `wait` milliseconds.\nvar debounce = function(func, wait) {\n    var timeout;\n    return function executedFunction() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        var later = function() {\n            clearTimeout(timeout);\n            func.apply(void 0, _toConsumableArray(args));\n        };\n        clearTimeout(timeout);\n        timeout = setTimeout(later, wait);\n    };\n};\nvar Home = function Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), history = ref[0], setHistory = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var mainInput = document.querySelector(\"#mainInput\");\n        mainInput.addEventListener('keyup', debounce(function(e) {\n            if (e.key === 'Enter' || e.keyCode === 13) {\n                // Do something\n                //alert(mainInput.value)\n                console.log(mainInput.value);\n                history.push(mainInput.value);\n                console.log(history);\n                setHistory(history.concat([\n                    mainInput.value\n                ]));\n            }\n        }, 2000));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"WEB REPL\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        spacing: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputGroup, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputLeftAddon, {\n                                        children: \">\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                        id: \"mainInput\",\n                                        type: \"tel\",\n                                        placeholder: \"enter command...\",\n                                        focusBorderColor: \"null\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 7\n                            }, this),\n                            history.map(function(h) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            children: h\n                                        }, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, h, true, {\n                                    fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 11\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Z0dBR0dFLG1EQUFLO3dCQUFDeUMsT0FBTyxFQUFFLENBQUM7O3dHQUNwQnhDLHdEQUFVOztnSEFDUkMsNERBQWM7d0NBQUN3QyxRQUFRLEVBQUMsQ0FBRzs7Ozs7O2dIQUMzQjNDLG1EQUFLO3dDQUFDNEMsRUFBRSxFQUFDLENBQVc7d0NBQUNDLElBQUksRUFBQyxDQUFLO3dDQUFDQyxXQUFXLEVBQUMsQ0FBa0I7d0NBQUNDLGdCQUFnQixFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs0QkFHeEYvQixPQUFPLENBQUNnQyxHQUFHLENBQUUsUUFBUSxDQUFDQyxDQUFLLEVBQUUsQ0FBQztnQ0FDN0IsTUFBTSw2RUFDSG5ELDJDQUFROztvSEFDUk0scURBQU87Ozs7O29IQUNQQyxrREFBSTtzREFBRTRDLENBQUM7Ozs7Ozs7bUNBRk9BLENBQUM7Ozs7OzRCQUtwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU1AsQ0FBQztHQXhES2xDLElBQUk7S0FBSkEsSUFBSTtBQTBEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93ZWJyZXBsLnRzeD83NTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgXG4gIElucHV0LCBcbiAgU3RhY2ssXG4gIElucHV0R3JvdXAsIFxuICBJbnB1dExlZnRBZGRvbiwgXG4gIElucHV0UmlnaHRBZGRvbiwgICBcbiAgRGl2aWRlciAsIFxuICBUZXh0LCBcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuLy9pbXBvcnQge2RlYm91bmNlfSBmcm9tICdsb2Rhc2gnIDsgXG5cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgIERhdmlkIFdhbHNoIChodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uKVxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBgd2FpdGAgbWlsbGlzZWNvbmRzLlxuY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuICBsZXQgdGltZW91dDtcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9O1xufTtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcblxuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZSggW10gYXMgYW55KSAgOyBcblxuICAgIHVzZUVmZmVjdCggKCk9PiB7XG4gICAgICBsZXQgbWFpbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluSW5wdXRcIikgYXMgYW55OyBcbiAgICAgIFxuICAgICAgbWFpbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGVib3VuY2UoIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAvLyBEbyBzb21ldGhpbmdcbiAgICAgICAgICAgIC8vYWxlcnQobWFpbklucHV0LnZhbHVlKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobWFpbklucHV0LnZhbHVlKVxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKG1haW5JbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpc3RvcnkpXG4gICAgICAgICAgICBzZXRIaXN0b3J5KCBoaXN0b3J5LmNvbmNhdChbbWFpbklucHV0LnZhbHVlXSkgKSAgOyBcbiAgICAgICAgfVxuXG4gICAgICB9ICwgMjAwMCApIClcbiAgICB9LCBbXSApIFxuICAgIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdFQiBSRVBMXG4gICAgICAgIDwvaDE+XG4gICAgICBcblxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8SW5wdXRMZWZ0QWRkb24gY2hpbGRyZW49Jz4nIC8+XG4gICAgICAgIDxJbnB1dCBpZD1cIm1haW5JbnB1dFwiIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J2VudGVyIGNvbW1hbmQuLi4nIGZvY3VzQm9yZGVyQ29sb3I9J251bGwnLz5cbiAgICAgIDwvSW5wdXRHcm91cD5cblxuICAgICAge2hpc3RvcnkubWFwKCBmdW5jdGlvbihoOmFueSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2h9PiBcbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxUZXh0PntofTwvVGV4dD5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgIDwvU3RhY2s+XG5cbiAgICA8L21haW4+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUgOyBcblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50Iiwic3R5bGVzIiwiSW5wdXQiLCJTdGFjayIsIklucHV0R3JvdXAiLCJJbnB1dExlZnRBZGRvbiIsIkRpdmlkZXIiLCJUZXh0IiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJleGVjdXRlZEZ1bmN0aW9uIiwiYXJncyIsImxhdGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIkhvbWUiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsIm1haW5JbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Iiwia2V5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInB1c2giLCJjb25jYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwic3BhY2luZyIsImNoaWxkcmVuIiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJmb2N1c0JvcmRlckNvbG9yIiwibWFwIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/webrepl.tsx\n");

/***/ })

});