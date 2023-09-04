"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/app/YourCollection";
exports.ids = ["pages/app/YourCollection"];
exports.modules = {

/***/ "./components/AuthProvider.tsx":
/*!*************************************!*\
  !*** ./components/AuthProvider.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction AuthProvider({ children , requireAuth  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const sessionLoading = status === \"loading\";\n    const { 0: isAuthenticating , 1: setIsAuthenticating  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const isLoading = sessionLoading || isAuthenticating;\n    const signIn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        setIsAuthenticating(true);\n        const a = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"niftory\");\n        console.log(a);\n        setIsAuthenticating(false);\n    }, []);\n    const signOut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        setIsAuthenticating(true);\n        _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__.unauthenticate();\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)({\n            redirect: false\n        });\n        await router.push(url);\n        setIsAuthenticating(false);\n    }, [\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!requireAuth || isLoading) {\n            return;\n        }\n        //@ts-ignore\n        if (session?.error) {\n            //@ts-ignore\n            console.error(session.error);\n            signOut();\n            return;\n        }\n        if (!session) {\n            router.push(\"/\");\n            return;\n        }\n    }, [\n        requireAuth,\n        session,\n        router,\n        isLoading,\n        signOut\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            session,\n            isLoading,\n            signIn,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\components\\\\AuthProvider.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDZ0M7QUFFM0I7QUFDVjtBQUNvRDtBQWMvRSxNQUFNVyxXQUFXLGlCQUFHVixvREFBYSxDQUFrQixJQUFJLENBQUM7QUFFdkQsU0FBU1csWUFBWSxDQUFDLEVBQUVDLFFBQVEsR0FBRUMsV0FBVyxHQUFzQixFQUFFO0lBQzNFLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBRTtJQUUxQixNQUFNLEVBQUVnQixJQUFJLEVBQUVDLE9BQU8sR0FBRUMsTUFBTSxHQUFFLEdBQUdiLDJEQUFVLEVBQUU7SUFDOUMsTUFBTWMsY0FBYyxHQUFHRCxNQUFNLEtBQUssU0FBUztJQUczQyxNQUFNLEtBQUNFLGdCQUFnQixNQUFFQyxtQkFBbUIsTUFBSWpCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQy9ELE1BQU1rQixTQUFTLEdBQUdILGNBQWMsSUFBSUMsZ0JBQWdCO0lBRXBELE1BQU1YLE1BQU0sR0FBR1Asa0RBQVcsQ0FBQyxVQUFZO1FBQ3JDbUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCLE1BQU1FLENBQUMsR0FBSSxNQUFNYix1REFBYyxDQUFDLFNBQVMsQ0FBQztRQUMxQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ2ZGLG1CQUFtQixDQUFDLEtBQUssQ0FBQztLQUMzQixFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1kLE9BQU8sR0FBR0wsa0RBQVcsQ0FBQyxVQUFZO1FBQ3RDbUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCZix1REFBa0IsRUFBRTtRQUNwQixNQUFNLEVBQUVxQixHQUFHLEdBQUUsR0FBRyxNQUFNbkIsd0RBQWUsQ0FBQztZQUFFb0IsUUFBUSxFQUFFLEtBQUs7U0FBRSxDQUFDO1FBQzFELE1BQU1iLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDRixHQUFHLENBQUM7UUFDdEJOLG1CQUFtQixDQUFDLEtBQUssQ0FBQztLQUMzQixFQUFFO1FBQUNOLE1BQU07S0FBQyxDQUFDO0lBRVpaLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ1csV0FBVyxJQUFJUSxTQUFTLEVBQUU7WUFDN0IsT0FBTTtTQUNQO1FBQ0QsWUFBWTtRQUNaLElBQUlMLE9BQU8sRUFBRWEsS0FBSyxFQUFFO1lBQ2xCLFlBQVk7WUFDWk4sT0FBTyxDQUFDTSxLQUFLLENBQUNiLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDO1lBQzVCdkIsT0FBTyxFQUFFO1lBQ1QsT0FBTTtTQUNQO1FBRUQsSUFBSSxDQUFDVSxPQUFPLEVBQUU7WUFDWkYsTUFBTSxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU07U0FDUDtLQUNGLEVBQUU7UUFBQ2YsV0FBVztRQUFFRyxPQUFPO1FBQUVGLE1BQU07UUFBRU8sU0FBUztRQUFFZixPQUFPO0tBQUMsQ0FBQztJQUV0RCxxQkFDRSw4REFBQ0ksV0FBVyxDQUFDb0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWYsT0FBTztZQUFFSyxTQUFTO1lBQUViLE1BQU07WUFBRUYsT0FBTztTQUFFO2tCQUNqRU0sUUFBUTs7Ozs7WUFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2t2ZXJzaXR5X25leHQvLi9jb21wb25lbnRzL0F1dGhQcm92aWRlci50c3g/MWYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCAqIGFzIGZjbCBmcm9tIFwiQG9uZmxvdy9mY2xcIlxyXG5pbXBvcnQgeyBzaWduT3V0IGFzIG5leHRBdXRoU2lnbk91dCwgc2lnbkluIGFzIG5leHRBdXRoU2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuXHJcbnR5cGUgQXV0aENvbXBvbmVudFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICByZXF1aXJlQXV0aDogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG59XHJcbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xyXG4gIHNlc3Npb246IFNlc3Npb25cclxuICBpc0xvYWRpbmc6IGJvb2xlYW5cclxuICBzaWduSW46ICgpID0+IFByb21pc2U8dm9pZD5cclxuICBzaWduT3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlPihudWxsKVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiwgcmVxdWlyZUF1dGggfTogQXV0aENvbXBvbmVudFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKSBcclxuICBjb25zdCBzZXNzaW9uTG9hZGluZyA9IHN0YXR1cyA9PT0gXCJsb2FkaW5nXCJcclxuXHJcblxyXG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0aW5nLCBzZXRJc0F1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHNlc3Npb25Mb2FkaW5nIHx8IGlzQXV0aGVudGljYXRpbmdcclxuICBcclxuICBjb25zdCBzaWduSW4gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKHRydWUpXHJcbiAgICBjb25zdCBhID0gIGF3YWl0IG5leHRBdXRoU2lnbkluKFwibmlmdG9yeVwiKVxyXG4gICAgY29uc29sZS5sb2coYSk7XHJcbiAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKGZhbHNlKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzaWduT3V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNBdXRoZW50aWNhdGluZyh0cnVlKVxyXG4gICAgZmNsLnVuYXV0aGVudGljYXRlKClcclxuICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBuZXh0QXV0aFNpZ25PdXQoeyByZWRpcmVjdDogZmFsc2UgfSlcclxuICAgIGF3YWl0IHJvdXRlci5wdXNoKHVybClcclxuICAgIHNldElzQXV0aGVudGljYXRpbmcoZmFsc2UpXHJcbiAgfSwgW3JvdXRlcl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlcXVpcmVBdXRoIHx8IGlzTG9hZGluZykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgaWYgKHNlc3Npb24/LmVycm9yKSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBjb25zb2xlLmVycm9yKHNlc3Npb24uZXJyb3IpXHJcbiAgICAgIHNpZ25PdXQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sIFtyZXF1aXJlQXV0aCwgc2Vzc2lvbiwgcm91dGVyLCBpc0xvYWRpbmcsIHNpZ25PdXRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNlc3Npb24sIGlzTG9hZGluZywgc2lnbkluLCBzaWduT3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwiZmNsIiwic2lnbk91dCIsIm5leHRBdXRoU2lnbk91dCIsInNpZ25JbiIsIm5leHRBdXRoU2lnbkluIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlcXVpcmVBdXRoIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJzZXNzaW9uTG9hZGluZyIsImlzQXV0aGVudGljYXRpbmciLCJzZXRJc0F1dGhlbnRpY2F0aW5nIiwiaXNMb2FkaW5nIiwiYSIsImNvbnNvbGUiLCJsb2ciLCJ1bmF1dGhlbnRpY2F0ZSIsInVybCIsInJlZGlyZWN0IiwicHVzaCIsImVycm9yIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthProvider.tsx\n");

/***/ }),

/***/ "./hooks/useAuthContext.tsx":
/*!**********************************!*\
  !*** ./hooks/useAuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthProvider */ \"./components/AuthProvider.tsx\");\n\n\nconst useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUNzQjtBQUVqRCxNQUFNRSxjQUFjLEdBQUcsSUFBTUYsaURBQVUsQ0FBQ0MsaUVBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrdmVyc2l0eV9uZXh0Ly4vaG9va3MvdXNlQXV0aENvbnRleHQudHN4PzMyM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aFByb3ZpZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAuthContext.tsx\n");

/***/ }),

/***/ "./pages/app/YourCollection/index.tsx":
/*!********************************************!*\
  !*** ./pages/app/YourCollection/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useAuthContext */ \"./hooks/useAuthContext.tsx\");\n/* harmony import */ var _niftory_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @niftory/sdk */ \"@niftory/sdk\");\n/* harmony import */ var _niftory_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_niftory_sdk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CollectionPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { session  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)();\n    //@ts-ignore\n    const _userId = session?.userId;\n    const [{ data  }] = (0,_niftory_sdk__WEBPACK_IMPORTED_MODULE_3__.useNftsQuery)({\n        variables: {\n            userId: _userId\n        }\n    });\n    const nfts = data?.nfts?.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"grid\",\n            gridTemplateColumns: \"repeat(auto-fill, minmax(200px, 1fr))\",\n            gap: \"16px\"\n        },\n        children: nfts?.map((nft)=>nft && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    border: \"1px solid #ccc\",\n                    padding: \"16px\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: ()=>router.push(`/app/YourCollection/${nft.id}`),\n                    style: {\n                        cursor: \"pointer\",\n                        textDecoration: \"underline\"\n                    },\n                    children: nft.model?.title\n                }, void 0, false, {\n                    fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\app\\\\YourCollection\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            }, nft.id, false, {\n                fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\app\\\\YourCollection\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 15\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\app\\\\YourCollection\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, undefined);\n};\nCollectionPage.requireAuth = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcHAvWW91ckNvbGxlY3Rpb24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDdUI7QUFDbkI7QUFJM0MsTUFBTUcsY0FBYyxHQUFzQixJQUFNO0lBQzlDLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVLLE9BQU8sR0FBRSxHQUFHSixxRUFBYyxFQUFFO0lBQ3RDLFlBQVk7SUFDVixNQUFNSyxPQUFPLEdBQVdELE9BQU8sRUFBRUUsTUFBTTtJQUN2QyxNQUFNLENBQUMsRUFBRUMsSUFBSSxHQUFFLENBQUMsR0FBR04sMERBQVksQ0FBQztRQUFFTyxTQUFTLEVBQUU7WUFBRUYsTUFBTSxFQUFFRCxPQUFPO1NBQUU7S0FBRSxDQUFDO0lBQ25FLE1BQU1JLElBQUksR0FBR0YsSUFBSSxFQUFFRSxJQUFJLEVBQUVDLEtBQUs7SUFFOUIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxNQUFNO1lBQUVDLG1CQUFtQixFQUFFLHVDQUF1QztZQUFFQyxHQUFHLEVBQUUsTUFBTTtTQUFFO2tCQUN2R04sSUFBSSxFQUFFTyxHQUFHLENBQ1IsQ0FBQ0MsR0FBRyxHQUNGQSxHQUFHLGtCQUNELDhEQUFDTixLQUFHO2dCQUFjQyxLQUFLLEVBQUU7b0JBQUVNLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQUVDLE9BQU8sRUFBRSxNQUFNO29CQUFFQyxTQUFTLEVBQUUsUUFBUTtpQkFBRTswQkFDekYsNEVBQUNDLEdBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFNbkIsTUFBTSxDQUFDb0IsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUVOLEdBQUcsQ0FBQ08sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFBRVosS0FBSyxFQUFFO3dCQUFFYSxNQUFNLEVBQUUsU0FBUzt3QkFBRUMsY0FBYyxFQUFFLFdBQVc7cUJBQUU7OEJBQ3RIVCxHQUFHLENBQUNVLEtBQUssRUFBRUMsS0FBSzs7Ozs7NkJBQ2Y7ZUFISVgsR0FBRyxDQUFDTyxFQUFFOzs7O3lCQUlWLENBRVg7Ozs7O2lCQUNHLENBQ1Q7Q0FDRjtBQUVEdEIsY0FBYyxDQUFDMkIsV0FBVyxHQUFHLElBQUk7QUFDakMsaUVBQWUzQixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2t2ZXJzaXR5X25leHQvLi9wYWdlcy9hcHAvWW91ckNvbGxlY3Rpb24vaW5kZXgudHN4P2VkZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQXV0aENvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VOZnRzUXVlcnkgfSBmcm9tIFwiQG5pZnRvcnkvc2RrXCJcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudFdpdGhBdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ29tcG9uZW50V2l0aEF1dGhcIlxyXG5cclxuY29uc3QgQ29sbGVjdGlvblBhZ2U6IENvbXBvbmVudFdpdGhBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBzZXNzaW9uIH0gPSB1c2VBdXRoQ29udGV4dCgpXHJcbi8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IF91c2VySWQ6IHN0cmluZyA9IHNlc3Npb24/LnVzZXJJZCBhcyBzdHJpbmdcclxuICBjb25zdCBbeyBkYXRhIH1dID0gdXNlTmZ0c1F1ZXJ5KHsgdmFyaWFibGVzOiB7IHVzZXJJZDogX3VzZXJJZCB9IH0pXHJcbiAgY29uc3QgbmZ0cyA9IGRhdGE/Lm5mdHM/Lml0ZW1zXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKVwiLCBnYXA6IFwiMTZweFwiIH19PlxyXG4gICAgICAgIHtuZnRzPy5tYXAoXHJcbiAgICAgICAgICAobmZ0KSA9PlxyXG4gICAgICAgICAgICBuZnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtuZnQuaWR9IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBwYWRkaW5nOiBcIjE2cHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9hcHAvWW91ckNvbGxlY3Rpb24vJHtuZnQuaWR9YCl9IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIsIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7bmZ0Lm1vZGVsPy50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQ29sbGVjdGlvblBhZ2UucmVxdWlyZUF1dGggPSB0cnVlXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25QYWdlXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VBdXRoQ29udGV4dCIsInVzZU5mdHNRdWVyeSIsIkNvbGxlY3Rpb25QYWdlIiwicm91dGVyIiwic2Vzc2lvbiIsIl91c2VySWQiLCJ1c2VySWQiLCJkYXRhIiwidmFyaWFibGVzIiwibmZ0cyIsIml0ZW1zIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm1hcCIsIm5mdCIsImJvcmRlciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJhIiwib25DbGljayIsInB1c2giLCJpZCIsImN1cnNvciIsInRleHREZWNvcmF0aW9uIiwibW9kZWwiLCJ0aXRsZSIsInJlcXVpcmVBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app/YourCollection/index.tsx\n");

/***/ }),

/***/ "@niftory/sdk":
/*!*******************************!*\
  !*** external "@niftory/sdk" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@niftory/sdk");

/***/ }),

/***/ "@onflow/fcl":
/*!******************************!*\
  !*** external "@onflow/fcl" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@onflow/fcl");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/app/YourCollection/index.tsx"));
module.exports = __webpack_exports__;

})();