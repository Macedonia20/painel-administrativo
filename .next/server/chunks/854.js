"use strict";
exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 8238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Header/Profile.tsx


function Profile() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        align: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                ml: "8",
                mr: "2",
                textAlign: "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        h: "3",
                        children: "Matheus Macedo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: "gray.300",
                        fontSize: "small",
                        children: "matheusmacedo643@gmail.com"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                marginLeft: "20px",
                size: "md",
                name: "Matheus Macedo",
                src: "https://github.com//macedonia20.png"
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
;// CONCATENATED MODULE: ./src/components/Header/NotificationNav.tsx



function Notification() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: "3",
        mx: "-3",
        pr: "8",
        py: "1",
        color: "gray.300",
        borderRightWidth: 1,
        borderColor: "gray.700",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: ri_.RiNotificationOffLine,
                fontSize: "20"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: ri_.RiUserAddLine,
                fontSize: "20"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/SearchBox.tsx



function SearchBox() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "label",
        flex: "1",
        //paddingHorizontal
        py: "4",
        //padding vertical
        px: "5",
        //margin left
        right: "-145px",
        maxWidth: 250,
        alignSelf: "center",
        color: "gray.200",
        position: "relative",
        bg: "gray.800",
        borderRadius: "full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                color: "gray.50",
                variant: "unstyled",
                px: "4",
                mr: "15",
                placeholder: "Buscar na plataforma",
                _placeholder: {
                    color: "gray.400"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: ri_.RiSearchLine,
                fontSize: "20"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/Logo.tsx


function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
        fontSize: "3xl",
        fontWeight: "bold",
        letterSpacing: "tight",
        width: "100",
        children: [
            "dashgo",
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "span",
                marginLeft: "2",
                color: "purple.500",
                children: "."
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/index.tsx






function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "header",
        width: "100%",
        maxWidth: 1300,
        height: "20",
        // Margin horizontal auto
        marginX: "auto",
        marginTop: "4",
        textAlign: "center",
        paddingX: "10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SearchBox, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                ml: "auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Notification, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Profile, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/ActiveLink.tsx




function ActiveLink({ children , shouldMatchExactHref =false , ...rest }) {
    const { asPath  } = (0,router_.useRouter)();
    let isActive = false;
    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.href)) {
        isActive = true;
    }
    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...rest,
        children: /*#__PURE__*/ (0,external_react_.cloneElement)(children, {
            color: isActive ? "purple.400" : "gray.50"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/NavLink.tsx



function NavLink({ icon , children , href , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink, {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
            display: "flex",
            alignItems: "center",
            ...rest,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                    as: icon,
                    fontSize: "20"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    ml: "4",
                    fontWeight: "medium",
                    children: children
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/NavSection.tsx


function NavSection({ title , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: "bold",
                color: "gray.400",
                fontSize: "small",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                spacing: "4",
                mt: "8",
                align: "stretch",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/index.tsx





function Sidebar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "aside",
        w: "64",
        mr: "4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            spacing: "12",
            align: "flex-start",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavSection, {
                    title: "GERAL",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                            icon: ri_.RiDashboardLine,
                            href: "/dashboard",
                            children: "Dashboard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                            icon: ri_.RiDashboardLine,
                            href: "/users",
                            children: "Usu\xe1rios"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavSection, {
                    title: "AUTOMA\xc7\xc3O",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                            icon: ri_.RiInputMethodLine,
                            href: "/formularios",
                            children: "Formul\xe1rios"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                            icon: ri_.RiGitMergeLine,
                            href: "/automocao",
                            children: "Automa\xe7\xe3o"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;