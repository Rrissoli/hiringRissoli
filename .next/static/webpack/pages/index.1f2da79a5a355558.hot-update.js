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

/***/ "./src/components/commun/ModalDetails/index.jsx":
/*!******************************************************!*\
  !*** ./src/components/commun/ModalDetails/index.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModalDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/commun/ModalDetails/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ModalDetail(param) {\n    let { show , setShow , highestPrice , lowestPrice , averagePrice  } = param;\n    _s();\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Preços para exibir, pode ser uma lista obtida de algum lugar.\n    const prices = [\n        {\n            date: \"2023-04-15\",\n            value: 34\n        },\n        {\n            date: \"2023-04-16\",\n            value: 234\n        },\n        {\n            date: \"2023-04-17\",\n            value: 24234\n        }\n    ];\n    // Filtrando os preços de acordo com a data selecionada\n    const filteredPrices = prices.filter((price)=>price.date === date);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setShow(true),\n                children: \"Mostrar Modal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, this),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal_overlay),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),\n                    style: {\n                        width: \"800px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Informa\\xe7\\xf5es de Pre\\xe7os\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"date\",\n                                    children: \"Selecione uma data:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    id: \"date\",\n                                    value: date,\n                                    onChange: (e)=>setDate(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 19\n                                }, this),\n                                filteredPrices.length > 0 ? filteredPrices.map((price, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            price.date,\n                                            \": R$ \",\n                                            price.value\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 23\n                                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"N\\xe3o h\\xe1 informa\\xe7\\xf5es de pre\\xe7os para esta data.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setShow(false),\n                            children: \"Fechar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\TesteIpnet\\\\hiringRissoli\\\\src\\\\components\\\\commun\\\\ModalDetails\\\\index.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(ModalDetail, \"xIFgq/oG+UjH8ohd1P7gwn7Fto8=\");\n_c = ModalDetail;\nvar _c;\n$RefreshReg$(_c, \"ModalDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tdW4vTW9kYWxEZXRhaWxzL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUDtBQUNsQixTQUFTRSxZQUFZLEtBQXlELEVBQUM7UUFBMUQsRUFBQ0MsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFFQyxhQUFZLEVBQUUsR0FBekQ7O0lBQ2hDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuQyxnRUFBZ0U7SUFDaEUsTUFBTVMsU0FBUztRQUNiO1lBQUVGLE1BQU07WUFBY0csT0FBTztRQUFHO1FBQ2hDO1lBQUVILE1BQU07WUFBY0csT0FBTztRQUFJO1FBQ2pDO1lBQUVILE1BQU07WUFBY0csT0FBTztRQUFNO0tBQ3BDO0lBRUQsdURBQXVEO0lBQ3ZELE1BQU1DLGlCQUFpQkYsT0FBT0csTUFBTSxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNTixJQUFJLEtBQUtBO0lBQzNELHFCQUNJLDhEQUFDTzs7MEJBQ0MsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1iLFFBQVEsSUFBSTswQkFBRzs7Ozs7O1lBRXJDRCxzQkFDQyw4REFBQ1k7Z0JBQUlHLFdBQVdsQix5RUFBb0I7MEJBQ2xDLDRFQUFDZTtvQkFBSUcsV0FBV2xCLGlFQUFZO29CQUFFcUIsT0FBTzt3QkFBRUMsT0FBTztvQkFBUTs7c0NBQ3BELDhEQUFDUDs0QkFBSUcsV0FBV2xCLGdFQUFXOzs4Q0FDekIsOERBQUN3Qjs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQztvQ0FBTUMsU0FBUTs4Q0FBTzs7Ozs7OzhDQUN0Qiw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hsQixPQUFPSDtvQ0FDUHNCLFVBQVVDLENBQUFBLElBQUt0QixRQUFRc0IsRUFBRUMsTUFBTSxDQUFDckIsS0FBSzs7Ozs7O2dDQUV0Q0MsZUFBZXFCLE1BQU0sR0FBRyxJQUN2QnJCLGVBQWVzQixHQUFHLENBQUMsQ0FBQ3BCLE9BQU9xQixzQkFDekIsOERBQUNDOzs0Q0FDRXRCLE1BQU1OLElBQUk7NENBQUM7NENBQU1NLE1BQU1ILEtBQUs7O3VDQUR2QndCOzs7OzhEQUtWLDhEQUFDQzs4Q0FBRTs7Ozs7d0NBQ0o7Ozs7Ozs7c0NBRUgsOERBQUNwQjs0QkFBT0MsU0FBUyxJQUFNYixRQUFRLEtBQUs7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZELENBQUM7R0E1Q3VCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tdW4vTW9kYWxEZXRhaWxzL2luZGV4LmpzeD8wZWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbERldGFpbCh7c2hvdywgc2V0U2hvdywgaGlnaGVzdFByaWNlLCBsb3dlc3RQcmljZSwgYXZlcmFnZVByaWNlIH0pe1xyXG4gICAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIFByZcOnb3MgcGFyYSBleGliaXIsIHBvZGUgc2VyIHVtYSBsaXN0YSBvYnRpZGEgZGUgYWxndW0gbHVnYXIuXHJcbiAgY29uc3QgcHJpY2VzID0gW1xyXG4gICAgeyBkYXRlOiBcIjIwMjMtMDQtMTVcIiwgdmFsdWU6IDM0IH0sXHJcbiAgICB7IGRhdGU6IFwiMjAyMy0wNC0xNlwiLCB2YWx1ZTogMjM0IH0sXHJcbiAgICB7IGRhdGU6IFwiMjAyMy0wNC0xN1wiLCB2YWx1ZTogMjQyMzQgfVxyXG4gIF07XHJcblxyXG4gIC8vIEZpbHRyYW5kbyBvcyBwcmXDp29zIGRlIGFjb3JkbyBjb20gYSBkYXRhIHNlbGVjaW9uYWRhXHJcbiAgY29uc3QgZmlsdGVyZWRQcmljZXMgPSBwcmljZXMuZmlsdGVyKHByaWNlID0+IHByaWNlLmRhdGUgPT09IGRhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfT5Nb3N0cmFyIE1vZGFsPC9idXR0b24+XHJcbiAgICBcclxuICAgICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9vdmVybGF5fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfSBzdHlsZT17eyB3aWR0aDogXCI4MDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPGgyPkluZm9ybWHDp8O1ZXMgZGUgUHJlw6dvczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPlNlbGVjaW9uZSB1bWEgZGF0YTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkUHJpY2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRQcmljZXMubWFwKChwcmljZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2UuZGF0ZX06IFIkIHtwcmljZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk7Do28gaMOhIGluZm9ybWHDp8O1ZXMgZGUgcHJlw6dvcyBwYXJhIGVzdGEgZGF0YS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvdyhmYWxzZSl9PkZlY2hhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJNb2RhbERldGFpbCIsInNob3ciLCJzZXRTaG93IiwiaGlnaGVzdFByaWNlIiwibG93ZXN0UHJpY2UiLCJhdmVyYWdlUHJpY2UiLCJkYXRlIiwic2V0RGF0ZSIsInByaWNlcyIsInZhbHVlIiwiZmlsdGVyZWRQcmljZXMiLCJmaWx0ZXIiLCJwcmljZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJtb2RhbF9vdmVybGF5IiwibW9kYWwiLCJzdHlsZSIsIndpZHRoIiwidGV4dCIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/commun/ModalDetails/index.jsx\n"));

/***/ })

});