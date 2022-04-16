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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), history = ref[0], setHistory = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var mainInput = document.querySelector(\"#mainInput\");\n        mainInput.addEventListener('keyup', function(e) {\n            if (e.key === 'Enter' || e.keyCode === 13) {\n                // Do something\n                //alert(mainInput.value)\n                console.log(mainInput.value);\n                history.push(mainInput.value);\n                setHistory(history);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"WEB REPL\"\n                    }, void 0, false, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        spacing: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputGroup, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.InputLeftAddon, {\n                                        children: \">\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                        id: \"mainInput\",\n                                        type: \"tel\",\n                                        placeholder: \"enter command...\",\n                                        focusBorderColor: \"null\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, this),\n                            history.map(function(h) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            children: h\n                                        }, void 0, false, {\n                                            fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, h, true, {\n                                    fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oluwa/dev/web_playground/pages/webrepl.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93ZWJyZXBsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0QjtBQUV1QjtBQUNMO0FBVXJCOztBQUl6QixHQUFLLENBQUNXLElBQUksR0FBYSxRQUFRLENBQXpCQSxJQUFJLEdBQXdCLENBQUM7O0lBRWpDLEdBQUcsQ0FBeUJULEdBQW9CLEdBQXBCQSwrQ0FBUSxDQUFFLENBQUMsQ0FBQyxHQUFuQ1UsT0FBTyxHQUFnQlYsR0FBb0IsS0FBbENXLFVBQVUsR0FBSVgsR0FBb0I7SUFFOUNELGdEQUFTLENBQUUsUUFDZCxHQURtQixDQUFDO1FBQ2YsR0FBRyxDQUFDYSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVk7UUFFbkRGLFNBQVMsQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQVEsQ0FBRUMsQ0FBQyxFQUFFLENBQUM7WUFDaEQsRUFBRSxFQUFFQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxDQUFPLFVBQUlELENBQUMsQ0FBQ0UsT0FBTyxLQUFLLEVBQUUsRUFBRSxDQUFDO2dCQUN4QyxFQUFlO2dCQUNmLEVBQXdCO2dCQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLFNBQVMsQ0FBQ1MsS0FBSztnQkFDM0JYLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDVixTQUFTLENBQUNTLEtBQUs7Z0JBQzVCVixVQUFVLENBQUVELE9BQU8sQ0FBRSxDQUFHO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILENBQUMsRUFBQyxDQUFDLENBQUM7SUFFTixNQUFNLDZFQUNIYSxDQUFHO1FBQUNDLFNBQVMsRUFBRXRCLDBFQUFnQjs7d0ZBQzdCSixrREFBSTs7Z0dBQ0Y0QixDQUFLO2tDQUFDLENBQWU7Ozs7OztnR0FDckJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7OztnR0FDOURDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUdyQ0MsQ0FBSTtnQkFBQ1QsU0FBUyxFQUFFdEIscUVBQVc7O2dHQUN6QmdDLENBQUU7d0JBQUNWLFNBQVMsRUFBRXRCLHNFQUFZO2tDQUFFLENBRTdCOzs7Ozs7Z0dBR0dFLG1EQUFLO3dCQUFDK0IsT0FBTyxFQUFFLENBQUM7O3dHQUNwQjlCLHdEQUFVOztnSEFDUkMsNERBQWM7d0NBQUM4QixRQUFRLEVBQUMsQ0FBRzs7Ozs7O2dIQUMzQmpDLG1EQUFLO3dDQUFDa0MsRUFBRSxFQUFDLENBQVc7d0NBQUNDLElBQUksRUFBQyxDQUFLO3dDQUFDQyxXQUFXLEVBQUMsQ0FBa0I7d0NBQUNDLGdCQUFnQixFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs0QkFHeEY5QixPQUFPLENBQUMrQixHQUFHLENBQUUsUUFBUSxDQUFDQyxDQUFLLEVBQUUsQ0FBQztnQ0FDN0IsTUFBTSw2RUFDSHpDLDJDQUFROztvSEFDUk0scURBQU87Ozs7O29IQUNQQyxrREFBSTtzREFBRWtDLENBQUM7Ozs7Ozs7bUNBRk9BLENBQUM7Ozs7OzRCQUtwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU1AsQ0FBQztHQXZES2pDLElBQUk7S0FBSkEsSUFBSTtBQXlEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93ZWJyZXBsLnRzeD83NTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgXG4gIElucHV0LCBcbiAgU3RhY2ssXG4gIElucHV0R3JvdXAsIFxuICBJbnB1dExlZnRBZGRvbiwgXG4gIElucHV0UmlnaHRBZGRvbiwgICBcbiAgRGl2aWRlciAsIFxuICBUZXh0LCBcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKCBbXSBhcyBhbnkpICA7IFxuXG4gICAgdXNlRWZmZWN0KCAoKT0+IHtcbiAgICAgIGxldCBtYWluSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5JbnB1dFwiKSBhcyBhbnk7IFxuICAgICAgXG4gICAgICBtYWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nXG4gICAgICAgICAgICAvL2FsZXJ0KG1haW5JbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haW5JbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChtYWluSW5wdXQudmFsdWUpXG4gICAgICAgICAgICBzZXRIaXN0b3J5KCBoaXN0b3J5ICkgIDsgXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV0VCIFJFUExcbiAgICAgICAgPC9oMT5cbiAgICAgIFxuXG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgIDxJbnB1dExlZnRBZGRvbiBjaGlsZHJlbj0nPicgLz5cbiAgICAgICAgPElucHV0IGlkPVwibWFpbklucHV0XCIgdHlwZT0ndGVsJyBwbGFjZWhvbGRlcj0nZW50ZXIgY29tbWFuZC4uLicgZm9jdXNCb3JkZXJDb2xvcj0nbnVsbCcvPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuXG4gICAgICB7aGlzdG9yeS5tYXAoIGZ1bmN0aW9uKGg6YW55KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZyYWdtZW50IGtleT17aH0+IFxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPFRleHQ+e2h9PC9UZXh0PlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuXG4gICAgPC9TdGFjaz5cblxuICAgIDwvbWFpbj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnJhZ21lbnQiLCJzdHlsZXMiLCJJbnB1dCIsIlN0YWNrIiwiSW5wdXRHcm91cCIsIklucHV0TGVmdEFkZG9uIiwiRGl2aWRlciIsIlRleHQiLCJIb21lIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJtYWluSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInNwYWNpbmciLCJjaGlsZHJlbiIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZm9jdXNCb3JkZXJDb2xvciIsIm1hcCIsImgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/webrepl.tsx\n");

/***/ })

});