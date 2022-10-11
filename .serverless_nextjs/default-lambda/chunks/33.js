"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 9606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/chakra-ui-react.cjs.prod.js
var chakra_ui_react_cjs_prod = __webpack_require__(3863);
;// CONCATENATED MODULE: ./src/styles/theme.ts

const theme = (0,chakra_ui_react_cjs_prod.extendTheme)({
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
    return /*#__PURE__*/ jsx_runtime.jsx(chakra_ui_react_cjs_prod.ChakraProvider, {
        resetCSS: false,
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
                            rel: "stylesheet"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
};


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/8W0qIFMNmSeHrrN6HTEMe/_buildManifest.js","static/8W0qIFMNmSeHrrN6HTEMe/_ssgManifest.js","static/8W0qIFMNmSeHrrN6HTEMe/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-3c4c443c8591c0ee.js","static/chunks/framework-8b27da92bc556c09.js","static/chunks/main-f4ae3437c92c1efc.js","static/chunks/249-1f60b9992df39567.js","static/chunks/pages/index-81fcefdd94f32c23.js"],"/_app":["static/chunks/webpack-3c4c443c8591c0ee.js","static/chunks/framework-8b27da92bc556c09.js","static/chunks/main-f4ae3437c92c1efc.js","static/chunks/pages/_app-635bf5d762943185.js"],"/_error":["static/chunks/webpack-3c4c443c8591c0ee.js","static/chunks/framework-8b27da92bc556c09.js","static/chunks/main-f4ae3437c92c1efc.js","static/chunks/pages/_error-1995526792b513b2.js"],"/dashboard":["static/chunks/webpack-3c4c443c8591c0ee.js","static/chunks/framework-8b27da92bc556c09.js","static/chunks/main-f4ae3437c92c1efc.js","static/chunks/78e521c3-258fb1ba26d03056.js","static/chunks/249-1f60b9992df39567.js","static/chunks/870-be36e89f7cfaeaed.js","static/chunks/pages/dashboard-32e65d7691f12d72.js"],"/users":["static/chunks/webpack-3c4c443c8591c0ee.js","static/chunks/framework-8b27da92bc556c09.js","static/chunks/main-f4ae3437c92c1efc.js","static/chunks/78e521c3-258fb1ba26d03056.js","static/chunks/249-1f60b9992df39567.js","static/chunks/870-be36e89f7cfaeaed.js","static/chunks/862-6f55d23cefab97b4.js","static/chunks/pages/users-3d5effb473fd1bce.js"],"/users/create":["static/chunks/webpack-3c4c443c8591c0ee.js","static/chunks/framework-8b27da92bc556c09.js","static/chunks/main-f4ae3437c92c1efc.js","static/chunks/78e521c3-258fb1ba26d03056.js","static/chunks/249-1f60b9992df39567.js","static/chunks/870-be36e89f7cfaeaed.js","static/chunks/pages/users/create-2193ea7341730241.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = JSON.parse('{"dashboard.tsx -> react-apexcharts":{"id":7229,"files":["static/chunks/6c44d60f.c3f9a32a9ff62cd6.js","static/chunks/229.00221b2cbf30e3fa.js"]}}');

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;