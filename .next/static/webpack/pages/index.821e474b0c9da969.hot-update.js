"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Frontend/components/commun/Card/index.jsx":
/*!*******************************************************!*\
  !*** ./src/Frontend/components/commun/Card/index.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./src/Frontend/components/commun/Card/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Card(param) {\n    let { stock , setAction , setShow  } = param;\n    _s();\n    const tradeInfos = ()=>{\n        setAction(stock.name);\n        setShow(true);\n    };\n    const [newStock, setNewStock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(stock);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: newStock.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().body),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().price),\n                        children: [\n                            \"Pre\\xe7o R$ \",\n                            newStock.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().data),\n                        children: [\n                            \"Data/Hora atualizada: \",\n                            newStock.date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>tradeInfos(),\n                    children: \"Ver Hist\\xf3rico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\Frontend\\\\components\\\\commun\\\\Card\\\\index.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n    console.log(newStock);\n}\n_s(Card, \"M9fdjimPSIwmptNq2VKqTcqkfJg=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRnJvbnRlbmQvY29tcG9uZW50cy9jb21tdW4vQ2FyZC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1E7QUFFekIsU0FBU0UsS0FBSyxLQUEyQixFQUFFO1FBQTdCLEVBQUNDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUMsR0FBM0I7O0lBQ3pCLE1BQU1DLGFBQWEsSUFBTTtRQUNyQkYsVUFBVUQsTUFBTUksSUFBSTtRQUNwQkYsUUFBUSxJQUFJO0lBQ2hCO0lBQ0EsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDRztJQUV6QyxxQkFDSSw4REFBQ087UUFBSUMsV0FBV1YsZ0VBQVc7OzBCQUN2Qiw4REFBQ1M7Z0JBQUlDLFdBQVdWLGtFQUFhOzBCQUN6Qiw0RUFBQ2E7OEJBQUlOLFNBQVNELElBQUk7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ0c7Z0JBQUlDLFdBQVdWLGdFQUFXOztrQ0FDdkIsOERBQUNlO3dCQUFFTCxXQUFXVixpRUFBWTs7NEJBQUU7NEJBQVVPLFNBQVNTLEtBQUs7Ozs7Ozs7a0NBQ3BELDhEQUFDRDt3QkFBRUwsV0FBV1YsZ0VBQVc7OzRCQUFFOzRCQUF1Qk8sU0FBU1csSUFBSTs7Ozs7Ozs7Ozs7OzswQkFFbkUsOERBQUNUO2dCQUFJQyxXQUFXVixrRUFBYTswQkFDekIsNEVBQUNvQjtvQkFBT0MsU0FBUyxJQUFNaEI7OEJBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2pEaUIsUUFBUUMsR0FBRyxDQUFDaEI7QUFDaEIsQ0FBQztHQXZCdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Gcm9udGVuZC9jb21wb25lbnRzL2NvbW11bi9DYXJkL2luZGV4LmpzeD8yMjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHtzdG9jaywgc2V0QWN0aW9uLCBzZXRTaG93fSkge1xyXG4gICAgY29uc3QgdHJhZGVJbmZvcyA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3Rpb24oc3RvY2submFtZSlcclxuICAgICAgICBzZXRTaG93KHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBbbmV3U3RvY2ssIHNldE5ld1N0b2NrXSA9IHVzZVN0YXRlKHN0b2NrKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGg0PntuZXdTdG9jay5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlByZcOnbyBSJCB7bmV3U3RvY2sucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YX0+RGF0YS9Ib3JhIGF0dWFsaXphZGE6IHtuZXdTdG9jay5kYXRlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdHJhZGVJbmZvcygpfT5WZXIgSGlzdMOzcmljbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBjb25zb2xlLmxvZyhuZXdTdG9jaylcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNhcmQiLCJzdG9jayIsInNldEFjdGlvbiIsInNldFNob3ciLCJ0cmFkZUluZm9zIiwibmFtZSIsIm5ld1N0b2NrIiwic2V0TmV3U3RvY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaGVhZGVyIiwiaDQiLCJib2R5IiwicCIsInByaWNlIiwiZGF0YSIsImRhdGUiLCJmb290ZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Frontend/components/commun/Card/index.jsx\n"));

/***/ })

});