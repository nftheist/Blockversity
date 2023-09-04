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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AuthProvider.tsx":
/*!*************************************!*\
  !*** ./components/AuthProvider.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction AuthProvider({ children , requireAuth  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const sessionLoading = status === \"loading\";\n    const { 0: isAuthenticating , 1: setIsAuthenticating  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const isLoading = sessionLoading || isAuthenticating;\n    const signIn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        setIsAuthenticating(true);\n        const a = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"niftory\");\n        console.log(a);\n        setIsAuthenticating(false);\n    }, []);\n    const signOut = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        setIsAuthenticating(true);\n        _onflow_fcl__WEBPACK_IMPORTED_MODULE_4__.unauthenticate();\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)({\n            redirect: false\n        });\n        await router.push(url);\n        setIsAuthenticating(false);\n    }, [\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!requireAuth || isLoading) {\n            return;\n        }\n        //@ts-ignore\n        if (session?.error) {\n            //@ts-ignore\n            console.error(session.error);\n            signOut();\n            return;\n        }\n        if (!session) {\n            router.push(\"/\");\n            return;\n        }\n    }, [\n        requireAuth,\n        session,\n        router,\n        isLoading,\n        signOut\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            session,\n            isLoading,\n            signIn,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\components\\\\AuthProvider.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDZ0M7QUFFM0I7QUFDVjtBQUNvRDtBQWMvRSxNQUFNVyxXQUFXLGlCQUFHVixvREFBYSxDQUFrQixJQUFJLENBQUM7QUFFdkQsU0FBU1csWUFBWSxDQUFDLEVBQUVDLFFBQVEsR0FBRUMsV0FBVyxHQUFzQixFQUFFO0lBQzNFLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBRTtJQUUxQixNQUFNLEVBQUVnQixJQUFJLEVBQUVDLE9BQU8sR0FBRUMsTUFBTSxHQUFFLEdBQUdiLDJEQUFVLEVBQUU7SUFDOUMsTUFBTWMsY0FBYyxHQUFHRCxNQUFNLEtBQUssU0FBUztJQUczQyxNQUFNLEtBQUNFLGdCQUFnQixNQUFFQyxtQkFBbUIsTUFBSWpCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQy9ELE1BQU1rQixTQUFTLEdBQUdILGNBQWMsSUFBSUMsZ0JBQWdCO0lBRXBELE1BQU1YLE1BQU0sR0FBR1Asa0RBQVcsQ0FBQyxVQUFZO1FBQ3JDbUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCLE1BQU1FLENBQUMsR0FBSSxNQUFNYix1REFBYyxDQUFDLFNBQVMsQ0FBQztRQUMxQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ2ZGLG1CQUFtQixDQUFDLEtBQUssQ0FBQztLQUMzQixFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1kLE9BQU8sR0FBR0wsa0RBQVcsQ0FBQyxVQUFZO1FBQ3RDbUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ3pCZix1REFBa0IsRUFBRTtRQUNwQixNQUFNLEVBQUVxQixHQUFHLEdBQUUsR0FBRyxNQUFNbkIsd0RBQWUsQ0FBQztZQUFFb0IsUUFBUSxFQUFFLEtBQUs7U0FBRSxDQUFDO1FBQzFELE1BQU1iLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDRixHQUFHLENBQUM7UUFDdEJOLG1CQUFtQixDQUFDLEtBQUssQ0FBQztLQUMzQixFQUFFO1FBQUNOLE1BQU07S0FBQyxDQUFDO0lBRVpaLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ1csV0FBVyxJQUFJUSxTQUFTLEVBQUU7WUFDN0IsT0FBTTtTQUNQO1FBQ0QsWUFBWTtRQUNaLElBQUlMLE9BQU8sRUFBRWEsS0FBSyxFQUFFO1lBQ2xCLFlBQVk7WUFDWk4sT0FBTyxDQUFDTSxLQUFLLENBQUNiLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDO1lBQzVCdkIsT0FBTyxFQUFFO1lBQ1QsT0FBTTtTQUNQO1FBRUQsSUFBSSxDQUFDVSxPQUFPLEVBQUU7WUFDWkYsTUFBTSxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU07U0FDUDtLQUNGLEVBQUU7UUFBQ2YsV0FBVztRQUFFRyxPQUFPO1FBQUVGLE1BQU07UUFBRU8sU0FBUztRQUFFZixPQUFPO0tBQUMsQ0FBQztJQUV0RCxxQkFDRSw4REFBQ0ksV0FBVyxDQUFDb0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWYsT0FBTztZQUFFSyxTQUFTO1lBQUViLE1BQU07WUFBRUYsT0FBTztTQUFFO2tCQUNqRU0sUUFBUTs7Ozs7WUFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2t2ZXJzaXR5X25leHQvLi9jb21wb25lbnRzL0F1dGhQcm92aWRlci50c3g/MWYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCAqIGFzIGZjbCBmcm9tIFwiQG9uZmxvdy9mY2xcIlxyXG5pbXBvcnQgeyBzaWduT3V0IGFzIG5leHRBdXRoU2lnbk91dCwgc2lnbkluIGFzIG5leHRBdXRoU2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuXHJcbnR5cGUgQXV0aENvbXBvbmVudFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICByZXF1aXJlQXV0aDogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG59XHJcbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xyXG4gIHNlc3Npb246IFNlc3Npb25cclxuICBpc0xvYWRpbmc6IGJvb2xlYW5cclxuICBzaWduSW46ICgpID0+IFByb21pc2U8dm9pZD5cclxuICBzaWduT3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlPihudWxsKVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiwgcmVxdWlyZUF1dGggfTogQXV0aENvbXBvbmVudFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKSBcclxuICBjb25zdCBzZXNzaW9uTG9hZGluZyA9IHN0YXR1cyA9PT0gXCJsb2FkaW5nXCJcclxuXHJcblxyXG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0aW5nLCBzZXRJc0F1dGhlbnRpY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHNlc3Npb25Mb2FkaW5nIHx8IGlzQXV0aGVudGljYXRpbmdcclxuICBcclxuICBjb25zdCBzaWduSW4gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKHRydWUpXHJcbiAgICBjb25zdCBhID0gIGF3YWl0IG5leHRBdXRoU2lnbkluKFwibmlmdG9yeVwiKVxyXG4gICAgY29uc29sZS5sb2coYSk7XHJcbiAgICBzZXRJc0F1dGhlbnRpY2F0aW5nKGZhbHNlKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzaWduT3V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNBdXRoZW50aWNhdGluZyh0cnVlKVxyXG4gICAgZmNsLnVuYXV0aGVudGljYXRlKClcclxuICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBuZXh0QXV0aFNpZ25PdXQoeyByZWRpcmVjdDogZmFsc2UgfSlcclxuICAgIGF3YWl0IHJvdXRlci5wdXNoKHVybClcclxuICAgIHNldElzQXV0aGVudGljYXRpbmcoZmFsc2UpXHJcbiAgfSwgW3JvdXRlcl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlcXVpcmVBdXRoIHx8IGlzTG9hZGluZykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgaWYgKHNlc3Npb24/LmVycm9yKSB7XHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBjb25zb2xlLmVycm9yKHNlc3Npb24uZXJyb3IpXHJcbiAgICAgIHNpZ25PdXQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sIFtyZXF1aXJlQXV0aCwgc2Vzc2lvbiwgcm91dGVyLCBpc0xvYWRpbmcsIHNpZ25PdXRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNlc3Npb24sIGlzTG9hZGluZywgc2lnbkluLCBzaWduT3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwiZmNsIiwic2lnbk91dCIsIm5leHRBdXRoU2lnbk91dCIsInNpZ25JbiIsIm5leHRBdXRoU2lnbkluIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlcXVpcmVBdXRoIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJzZXNzaW9uTG9hZGluZyIsImlzQXV0aGVudGljYXRpbmciLCJzZXRJc0F1dGhlbnRpY2F0aW5nIiwiaXNMb2FkaW5nIiwiYSIsImNvbnNvbGUiLCJsb2ciLCJ1bmF1dGhlbnRpY2F0ZSIsInVybCIsInJlZGlyZWN0IiwicHVzaCIsImVycm9yIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AuthProvider.tsx\n");

/***/ }),

/***/ "./components/NiftoryClientProvider.tsx":
/*!**********************************************!*\
  !*** ./components/NiftoryClientProvider.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NiftoryClientProvider\": () => (/* binding */ NiftoryClientProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _niftory_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @niftory/sdk */ \"@niftory/sdk\");\n/* harmony import */ var _niftory_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_niftory_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"./hooks/useAuthContext.tsx\");\n\n\n\n\nconst NiftoryClientProvider = ({ children  })=>{\n    const { session  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    const client = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return new _niftory_sdk__WEBPACK_IMPORTED_MODULE_1__.NiftoryClient({\n            environmentName: \"testnet\",\n            authToken: session?.authToken,\n            appId: \"cliakqhgm0000jw0wq1ycowp7\",\n            apiKey: \"kEoFQcmRUbz5gXJsiNoq2ToxAYFIOQ6ghDJoZWqGmP8=\"\n        });\n    }, [\n        session?.authToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_niftory_sdk__WEBPACK_IMPORTED_MODULE_1__.NiftoryProvider, {\n        client: client,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\components\\\\NiftoryClientProvider.tsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05pZnRvcnlDbGllbnRQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4RTtBQUMvQztBQUN5QjtBQUVqRCxNQUFNSSxxQkFBcUIsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3JELE1BQU0sRUFBRUMsT0FBTyxHQUFFLEdBQUdILHFFQUFjLEVBQUU7SUFFcEMsTUFBTUksTUFBTSxHQUFHTCw4Q0FBTyxDQUFDLElBQU07UUFDM0IsT0FBTyxJQUFJRix1REFBYSxDQUFDO1lBQ3ZCUSxlQUFlLEVBQUVDLFNBQXNDO1lBQ3ZERyxTQUFTLEVBQUVOLE9BQU8sRUFBRU0sU0FBUztZQUM3QkMsS0FBSyxFQUFFSiwyQkFBaUM7WUFDeENNLE1BQU0sRUFBRU4sOENBQStCO1NBQ3hDLENBQUM7S0FDSCxFQUFFO1FBQUNILE9BQU8sRUFBRU0sU0FBUztLQUFDLENBQUM7SUFFeEIscUJBQU8sOERBQUNYLHlEQUFlO1FBQUNNLE1BQU0sRUFBRUEsTUFBTTtrQkFBR0YsUUFBUTs7Ozs7aUJBQW1CO0NBQ3JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2t2ZXJzaXR5X25leHQvLi9jb21wb25lbnRzL05pZnRvcnlDbGllbnRQcm92aWRlci50c3g/MTg5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudE5hbWUsIE5pZnRvcnlDbGllbnQsIE5pZnRvcnlQcm92aWRlciB9IGZyb20gXCJAbmlmdG9yeS9zZGtcIlxyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aENvbnRleHRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5pZnRvcnlDbGllbnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZUF1dGhDb250ZXh0KClcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IE5pZnRvcnlDbGllbnQoe1xyXG4gICAgICBlbnZpcm9ubWVudE5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JMT0NLQ0hBSU5fRU5WIGFzIEVudmlyb25tZW50TmFtZSxcclxuICAgICAgYXV0aFRva2VuOiBzZXNzaW9uPy5hdXRoVG9rZW4gYXMgc3RyaW5nLFxyXG4gICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lELFxyXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVksXHJcbiAgICB9KVxyXG4gIH0sIFtzZXNzaW9uPy5hdXRoVG9rZW5dKVxyXG5cclxuICByZXR1cm4gPE5pZnRvcnlQcm92aWRlciBjbGllbnQ9e2NsaWVudH0+e2NoaWxkcmVufTwvTmlmdG9yeVByb3ZpZGVyPlxyXG59XHJcbiJdLCJuYW1lcyI6WyJOaWZ0b3J5Q2xpZW50IiwiTmlmdG9yeVByb3ZpZGVyIiwidXNlTWVtbyIsInVzZUF1dGhDb250ZXh0IiwiTmlmdG9yeUNsaWVudFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXNzaW9uIiwiY2xpZW50IiwiZW52aXJvbm1lbnROYW1lIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JMT0NLQ0hBSU5fRU5WIiwiYXV0aFRva2VuIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJhcGlLZXkiLCJORVhUX1BVQkxJQ19BUElfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NiftoryClientProvider.tsx\n");

/***/ }),

/***/ "./hooks/useAuthContext.tsx":
/*!**********************************!*\
  !*** ./hooks/useAuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthProvider */ \"./components/AuthProvider.tsx\");\n\n\nconst useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AuthProvider__WEBPACK_IMPORTED_MODULE_1__.AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUNzQjtBQUVqRCxNQUFNRSxjQUFjLEdBQUcsSUFBTUYsaURBQVUsQ0FBQ0MsaUVBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrdmVyc2l0eV9uZXh0Ly4vaG9va3MvdXNlQXV0aENvbnRleHQudHN4PzMyM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aFByb3ZpZGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./pages/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.css */ \"./styles/Home.css\");\n/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Buttons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Buttons.css */ \"./styles/Buttons.css\");\n/* harmony import */ var _styles_Buttons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Buttons_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Brilliant_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Brilliant.css */ \"./styles/Brilliant.css\");\n/* harmony import */ var _styles_Brilliant_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Brilliant_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Clever_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Clever.css */ \"./styles/Clever.css\");\n/* harmony import */ var _styles_Clever_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Clever_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Smart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Smart.css */ \"./styles/Smart.css\");\n/* harmony import */ var _styles_Smart_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Smart_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Brilliant_page_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Brilliant_page.css */ \"./styles/Brilliant_page.css\");\n/* harmony import */ var _styles_Brilliant_page_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Brilliant_page_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Smart_page_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Smart_page.css */ \"./styles/Smart_page.css\");\n/* harmony import */ var _styles_Smart_page_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Smart_page_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Clever_page_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Clever_page.css */ \"./styles/Clever_page.css\");\n/* harmony import */ var _styles_Clever_page_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Clever_page_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Applayout_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Applayout.css */ \"./styles/Applayout.css\");\n/* harmony import */ var _styles_Applayout_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Applayout_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AuthProvider */ \"./components/AuthProvider.tsx\");\n/* harmony import */ var _components_NiftoryClientProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NiftoryClientProvider */ \"./components/NiftoryClientProvider.tsx\");\n/* harmony import */ var _components_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/navbar/navbar.css */ \"./components/navbar/navbar.css\");\n/* harmony import */ var _components_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_onflow_fcl__WEBPACK_IMPORTED_MODULE_16__.config)({\n    \"accessNode.api\": \"http://localhost:3000\",\n    \"discovery.wallet\": \"https://fcl-discovery.onflow.org/testnet/authn\",\n    \"discovery.wallet.method\": \"HTTP/POST\",\n    \"flow.network\": \"testnet\"\n});\nconst App = ({ Component , pageProps: { session , auth , ...pageProps }  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_12__.SessionProvider, {\n        session: session,\n        refetchInterval: 60 * 60,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthProvider__WEBPACK_IMPORTED_MODULE_13__.AuthProvider, {\n            requireAuth: Component.requireAuth,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NiftoryClientProvider__WEBPACK_IMPORTED_MODULE_14__.NiftoryClientProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\_app.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\_app.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\blockversity\\\\blockversity_next\\\\pages\\\\_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFrQjtBQUNTO0FBQ0c7QUFDRztBQUNIO0FBQ0Q7QUFDUTtBQUNKO0FBQ0M7QUFDRjtBQUNOO0FBQ3VCO0FBRVE7QUFFa0I7QUFDbEM7QUFDUDtBQUlsQ0ksb0RBQU0sQ0FBQztJQUNQLGdCQUFnQixFQUFFLHVCQUF1QjtJQUN6QyxrQkFBa0IsRUFBRSxnREFBZ0Q7SUFDcEUseUJBQXlCLEVBQUUsV0FBVztJQUN0QyxjQUFjLEVBQUMsU0FBUztDQUN2QixDQUFDO0FBQ0YsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBQ0MsU0FBUyxHQUFDQyxTQUFTLEVBQUMsRUFBQ0MsT0FBTyxHQUFDQyxJQUFJLEdBQUUsR0FBR0YsU0FBUyxFQUFDLEdBQVUsaUJBQ3RFLDhEQUFDTiw2REFBZTtRQUFDTyxPQUFPLEVBQUVBLE9BQU87UUFBRUUsZUFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFO2tCQUN2RCw0RUFBQ1IsbUVBQVk7WUFBQ1MsV0FBVyxFQUFJTCxTQUFTLENBQUNLLFdBQVc7c0JBQ2hELDRFQUFDUixxRkFBcUI7MEJBQ2xCLDRFQUFDRyxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7OzZCQUFJOzs7Ozt5QkFDUjs7Ozs7cUJBQ1g7Ozs7O2lCQUNEO0FBSXBCLGlFQUFlRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2t2ZXJzaXR5X25leHQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vQXBwLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9Ib21lLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9CdXR0b25zLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9CcmlsbGlhbnQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9DbGV2ZXIuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9TbWFydC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL0JyaWxsaWFudF9wYWdlLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9TbWFydF9wYWdlLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9DbGV2ZXJfcGFnZS5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvQXBwbGF5b3V0LmNzc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCB7IEFwcFByb3BzIGFzIE5leHRBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhQcm92aWRlclwiXHJcbmltcG9ydCB7IENvbXBvbmVudFdpdGhBdXRoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcG9uZW50V2l0aEF1dGhcIlxyXG5pbXBvcnQgeyBOaWZ0b3J5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OaWZ0b3J5Q2xpZW50UHJvdmlkZXJcIlxyXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY3NzXCI7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiQG9uZmxvdy9mY2xcIlxyXG50eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBOZXh0QXBwUHJvcHM8UD4gJiB7XHJcbiAgQ29tcG9uZW50OkNvbXBvbmVudFdpdGhBdXRoO1xyXG59XHJcbmNvbmZpZyh7XHJcblwiYWNjZXNzTm9kZS5hcGlcIjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXCJkaXNjb3Zlcnkud2FsbGV0XCI6IFwiaHR0cHM6Ly9mY2wtZGlzY292ZXJ5Lm9uZmxvdy5vcmcvdGVzdG5ldC9hdXRoblwiLFxyXG5cImRpc2NvdmVyeS53YWxsZXQubWV0aG9kXCI6IFwiSFRUUC9QT1NUXCIsXHJcblwiZmxvdy5uZXR3b3JrXCI6XCJ0ZXN0bmV0XCJcclxufSlcclxuY29uc3QgQXBwID0gKHtDb21wb25lbnQscGFnZVByb3BzOntzZXNzaW9uLGF1dGgsIC4uLnBhZ2VQcm9wc319OkFwcFByb3BzKTogSlNYLkVsZW1lbnQgPT4gKFxyXG4gIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0gcmVmZXRjaEludGVydmFsPXs2MCAqIDYwIH0+XHJcbiAgICAgIDxBdXRoUHJvdmlkZXIgcmVxdWlyZUF1dGggPSB7Q29tcG9uZW50LnJlcXVpcmVBdXRofT5cclxuICAgICAgICA8TmlmdG9yeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9OaWZ0b3J5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG5cclxuXHJcbilcclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlc3Npb25Qcm92aWRlciIsIkF1dGhQcm92aWRlciIsIk5pZnRvcnlDbGllbnRQcm92aWRlciIsImNvbmZpZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJhdXRoIiwicmVmZXRjaEludGVydmFsIiwicmVxdWlyZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./components/navbar/navbar.css":
/*!**************************************!*\
  !*** ./components/navbar/navbar.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./styles/Applayout.css":
/*!******************************!*\
  !*** ./styles/Applayout.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Brilliant.css":
/*!******************************!*\
  !*** ./styles/Brilliant.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Brilliant_page.css":
/*!***********************************!*\
  !*** ./styles/Brilliant_page.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Buttons.css":
/*!****************************!*\
  !*** ./styles/Buttons.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Clever.css":
/*!***************************!*\
  !*** ./styles/Clever.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Clever_page.css":
/*!********************************!*\
  !*** ./styles/Clever_page.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Home.css":
/*!*************************!*\
  !*** ./styles/Home.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Smart.css":
/*!**************************!*\
  !*** ./styles/Smart.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Smart_page.css":
/*!*******************************!*\
  !*** ./styles/Smart_page.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@niftory/sdk":
/*!*******************************!*\
  !*** external "@niftory/sdk" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@niftory/sdk");

/***/ }),

/***/ "@onflow/fcl":
/*!******************************!*\
  !*** external "@onflow/fcl" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@onflow/fcl");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();