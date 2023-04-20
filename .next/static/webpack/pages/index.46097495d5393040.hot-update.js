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

/***/ "./src/Frontend/api/api.js":
/*!*********************************!*\
  !*** ./src/Frontend/api/api.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHistoricalPrice\": function() { return /* binding */ getHistoricalPrice; }\n/* harmony export */ });\n/* harmony import */ var _shared_services_handlerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/services/handlerError */ \"./src/shared/services/handlerError.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nasync function getHistoricalPrice(nameAction, from, to) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/stocks/\".concat(nameAction, \"/history?from=\").concat(from, \"&to=\").concat(to));\n        (0,_shared_services_handlerError__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response);\n    } catch (error) {\n        throw error;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRnJvbnRlbmQvYXBpL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQ7QUFDaEM7QUFDbEIsZUFBZUUsbUJBQW1CQyxVQUFVLEVBQUNDLElBQUksRUFBQ0MsRUFBRSxFQUFFO0lBQzFELElBQUk7UUFDQSxNQUFNQyxXQUFXLE1BQU1MLGlEQUFTLENBQUMsZUFBMENHLE9BQTNCRCxZQUFXLGtCQUEyQkUsT0FBWEQsTUFBSyxRQUFTLE9BQUhDO1FBQ3RGTCx5RUFBWUEsQ0FBQ007SUFDakIsRUFBRSxPQUFPRSxPQUFPO1FBQ1osTUFBT0EsTUFBSztJQUNoQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0Zyb250ZW5kL2FwaS9hcGkuanM/ZjhjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXJyb3JIYW5kbGVyIGZyb20gXCJAL3NoYXJlZC9zZXJ2aWNlcy9oYW5kbGVyRXJyb3JcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgIGFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvcmljYWxQcmljZShuYW1lQWN0aW9uLGZyb20sdG8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvc3RvY2tzLyR7bmFtZUFjdGlvbn0vaGlzdG9yeT9mcm9tPSR7ZnJvbX0mdG89JHt0b31gKTtcclxuICAgICAgICBFcnJvckhhbmRsZXIocmVzcG9uc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93ICBlcnJvclxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJFcnJvckhhbmRsZXIiLCJheGlvcyIsImdldEhpc3RvcmljYWxQcmljZSIsIm5hbWVBY3Rpb24iLCJmcm9tIiwidG8iLCJyZXNwb25zZSIsImdldCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Frontend/api/api.js\n"));

/***/ })

});