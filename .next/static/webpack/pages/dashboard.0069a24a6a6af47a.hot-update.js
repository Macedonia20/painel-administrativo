"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n\n\n\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"dashboard.tsx -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = Chart;\nfunction Dashboard() {\n    var options = {\n        chart: {\n            toolbar: {\n                show: false\n            },\n            zoom: {\n                enabled: false\n            },\n            foreColor: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[300]\n        },\n        grid: {\n            show: false\n        },\n        dataLabels: {\n            enabled: false\n        },\n        tooltip: {\n            enabled: false\n        },\n        xaxis: {\n            type: \"datetime\",\n            axiosBorder: {\n                color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[600]\n            },\n            axisTicks: {\n                color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.colors.gray[600]\n            },\n            categories: [\n                \"2022-05-14T00:00:000\",\n                \"2022-05-15T00:00:000\",\n                \"2022-05-16T00:00:000\",\n                \"2022-05-17T00:00:000\",\n                \"2022-05-18T00:00:000\",\n                \"2022-05-19T00:00:000\", \n            ]\n        },\n        fill: {\n            opacity: 0.3,\n            type: \"gradient\",\n            gradient: {\n                shade: \"dark\",\n                opacityFrom: 0.7,\n                opacityTo: 0.3\n            }\n        }\n    };\n    var series = [\n        {\n            name: \"series\",\n            data: [\n                35,\n                66,\n                78,\n                888,\n                900,\n                500\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        direction: \"column\",\n        h: \"100h\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                w: \"100%\",\n                my: \"6\",\n                maxWidth: 1480,\n                mx: \"auto\",\n                px: \"6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {}, void 0, false, {\n                        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n                        flex: \"1\",\n                        gap: \"2\",\n                        minChildWidth: \"320px\",\n                        align: \"flex-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                maxWidth: 340,\n                                height: 200,\n                                p: \"8\",\n                                bg: \"gray.800\",\n                                borderRadius: 8,\n                                pb: \"4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"lg\",\n                                        mb: \"4\",\n                                        children: \"Inscritos da semana\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n                                        options: options,\n                                        series: series,\n                                        type: \"area\",\n                                        height: 160\n                                    }, void 0, false, {\n                                        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                height: 200,\n                                maxWidth: 340,\n                                p: \"8\",\n                                bg: \"gray.800\",\n                                borderRadius: 8,\n                                pb: \"4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        fontSize: \"lg\",\n                                        mb: \"4\",\n                                        children: \"Inscritos da semana\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n                                        options: options,\n                                        series: series,\n                                        type: \"area\",\n                                        height: 160\n                                    }, void 0, false, {\n                                        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matheus/Documentos/painel-administrativo/src/pages/dashboard.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n};\n_c1 = Dashboard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chart\");\n$RefreshReg$(_c1, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBDQUNOLDhEQUFDL0MsaURBQUc7Z0NBQ0orQyxNQUFNLEVBQUUsR0FBRztnQ0FDWFAsUUFBUSxFQUFFLEdBQUc7Z0NBRVhRLENBQUMsRUFBQyxHQUFHO2dDQUNMQyxFQUFFLEVBQUMsVUFBVTtnQ0FDYkMsWUFBWSxFQUFFLENBQUM7Z0NBQ2ZDLEVBQUUsRUFBQyxHQUFHOztrREFFSiw4REFBQ2xELGtEQUFJO3dDQUFDbUQsUUFBUSxFQUFDLElBQUk7d0NBQUNDLEVBQUUsRUFBQyxHQUFHO2tEQUFDLHFCQUFtQjs7Ozs7NENBQU87a0RBQ3JELDhEQUFDL0MsS0FBSzt3Q0FBQ0csT0FBTyxFQUFFQSxPQUFPO3dDQUFFd0IsTUFBTSxFQUFFQSxNQUFNO3dDQUFFWCxJQUFJLEVBQUMsTUFBTTt3Q0FBQ3lCLE1BQU0sRUFBRSxHQUFHOzs7Ozs0Q0FBSTs7Ozs7O29DQUVsRTs7Ozs7OzRCQUVHOzs7Ozs7b0JBQ047Ozs7OztZQUNKLENBR1Y7Q0FDSjtBQTFGdUJ2QyxNQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4P2NlZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgU2ltcGxlR3JpZCwgQm94LFRleHQsIHRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcblxuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoJ3JlYWN0LWFwZXhjaGFydHMnKSwge1xuICAgIHNzcjogZmFsc2UsXG59KVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yZUNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVszMDBdXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB4YXhpczoge1xuICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICAgICAgIGF4aW9zQm9yZGVyOiB7XG4gICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5WzYwMF1cbiAgICAgICAgIH0sXG4gICAgICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXVxuICAgICAgICAgfSxcbiAgICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgICAnMjAyMi0wNS0xNFQwMDowMDowMDAnLFxuICAgICAgICAgICAgICcyMDIyLTA1LTE1VDAwOjAwOjAwMCcsXG4gICAgICAgICAgICAgJzIwMjItMDUtMTZUMDA6MDA6MDAwJyxcbiAgICAgICAgICAgICAnMjAyMi0wNS0xN1QwMDowMDowMDAnLFxuICAgICAgICAgICAgICcyMDIyLTA1LTE4VDAwOjAwOjAwMCcsXG4gICAgICAgICAgICAgJzIwMjItMDUtMTlUMDA6MDA6MDAwJyxcbiAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcbiAgICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgc2hhZGU6ICdkYXJrJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5RnJvbTogMC43LFxuICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC4zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNvbnN0IHNlcmllcyA9IFtcbiAgICAgICAge25hbWU6ICdzZXJpZXMnLCBkYXRhOiBbMzUsIDY2LCA3OCwgODg4LCA5MDAsIDUwMF19XG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGg9XCIxMDBoXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiIG15PVwiNlwiIG1heFdpZHRoPXsxNDgwfSBteD1cImF1dG9cIiBweD1cIjZcIj5cbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XG5cbiAgICAgICAgICAgIDxTaW1wbGVHcmlkIGZsZXg9XCIxXCIgZ2FwPVwiMlwiIG1pbkNoaWxkV2lkdGg9XCIzMjBweFwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezM0MH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgIHA9XCI4XCJcbiAgICAgICAgICAgICAgICAgIGJnPVwiZ3JheS44MDBcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgICAgICAgICAgcGI9XCI0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPkluc2NyaXRvcyBkYSBzZW1hbmE8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImFyZWFcIiBoZWlnaHQ9ezE2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9ezM0MH1cblxuICAgICAgICAgICAgICAgICAgcD1cIjhcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJncmF5LjgwMFwiXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICAgICAgICBwYj1cIjRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPVwiNFwiPkluc2NyaXRvcyBkYSBzZW1hbmE8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImFyZWFcIiBoZWlnaHQ9ezE2MH0gLz5cblxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cblxuXG4gICAgKVxufSJdLCJuYW1lcyI6WyJGbGV4IiwiU2ltcGxlR3JpZCIsIkJveCIsIlRleHQiLCJ0aGVtZSIsImR5bmFtaWMiLCJIZWFkZXIiLCJTaWRlYmFyIiwiQ2hhcnQiLCJzc3IiLCJEYXNoYm9hcmQiLCJvcHRpb25zIiwiY2hhcnQiLCJ0b29sYmFyIiwic2hvdyIsInpvb20iLCJlbmFibGVkIiwiZm9yZUNvbG9yIiwiY29sb3JzIiwiZ3JheSIsImdyaWQiLCJkYXRhTGFiZWxzIiwidG9vbHRpcCIsInhheGlzIiwidHlwZSIsImF4aW9zQm9yZGVyIiwiY29sb3IiLCJheGlzVGlja3MiLCJjYXRlZ29yaWVzIiwiZmlsbCIsIm9wYWNpdHkiLCJncmFkaWVudCIsInNoYWRlIiwib3BhY2l0eUZyb20iLCJvcGFjaXR5VG8iLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImRpcmVjdGlvbiIsImgiLCJ3IiwibXkiLCJtYXhXaWR0aCIsIm14IiwicHgiLCJmbGV4IiwiZ2FwIiwibWluQ2hpbGRXaWR0aCIsImFsaWduIiwiaGVpZ2h0IiwicCIsImJnIiwiYm9yZGVyUmFkaXVzIiwicGIiLCJmb250U2l6ZSIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ })

});