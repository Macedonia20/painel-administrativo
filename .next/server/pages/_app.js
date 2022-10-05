"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/styles/theme.ts

const theme = (0,react_.extendTheme)({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2"
        }
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto"
    },
    styles: {
        global: {
            body: {
                bg: "gray.900",
                color: "gray.50"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        resetCSS: false,
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9606));
module.exports = __webpack_exports__;

})();