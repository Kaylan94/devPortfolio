"use strict";
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\kayla\\Desktop\\Dev Docs 2\\my-dev-portfolio\\components\\MyLayout.js",
    _this = undefined;



/* In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */




var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */

var Layout = function Layout(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: layoutStyle,
      className: "jsx-561325099",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }, _this), props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "561325099",
        children: "div.jsx-561325099{background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2F5bGFcXERlc2t0b3BcXERldiBEb2NzIDJcXG15LWRldi1wb3J0Zm9saW9cXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDZ0IsQUFHb0IsZ0JBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xca2F5bGFcXERlc2t0b3BcXERldiBEb2NzIDJcXG15LWRldi1wb3J0Zm9saW9cXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW4gb3VyIGFwcCwgd2UnbGwgdXNlIGEgY29tbW9uIHN0eWxlIGFjcm9zcyB2YXJpb3VzIHBhZ2VzLiBGb3IgdGhpcyBwdXJwb3NlLCB3ZSBjYW4gY3JlYXRlIGEgY29tbW9uIExheW91dCBjb21wb25lbnQgYW5kIHVzZSBpdCBmb3IgZWFjaCBvZiBvdXIgcGFnZXMuIEhlcmUncyBhbiBleGFtcGxlOiBcclxuXHJcblNpbmNlIE5leHQuanMgaXMgdXNlZCB0byBjcmVhdGUgc2VydmVyLXJlbmRlcmVkIHBhZ2VzLCBhZGRpbmcgYSBsaW5rIHVzaW5nIGEgbm9ybWFsIDxhPiB0YWcgd291bGQgY2F1c2UgYSBsaW5rIHRoYXQgd291bGQgYmUgbmF2aWdhdGVkIHRvIHZpYSB0aGUgc2VydmVyLiBcclxuVGhpcyBpcyBvYnZpb3VzbHkgbm90IGFsd2F5cyBuZWNlc3NhcnkuIFxyXG5UbyBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24gKHRoaXMgdGFrZXMgcGxhY2UgaW4gdGhlIGJyb3dzZXIsIHdpdGhvdXQgbWFraW5nIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyKSB3ZSB1c2UgTmV4dC5qc+KAmSBMaW5rIEFQSS4qL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8qWW91IGNhbiB1c2UgdGhpcyBidWlsdC1pbiBjb21wb25lbnQgdG8gYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSA8aGVhZD4gZWxlbWVudCBvZiB0aGUgcGFnZS4gTW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvI3BvcHVsYXRpbmctaGVhZCBcclxuTm90aWNlIHRoYXQgd2UgYWRkIHRoZSBsaW5rIGZvciB0aGUgc3R5bGVzaGVldCBmb3IgdXNpbmcgUmVhY3QtQm9vdHN0cmFwIGNvbXBvbmVudHMgdG8gdGhlIDxIZWFkPi4gKi9cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgcGFkZGluZzogMjAsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuLyogTm90aWNlIGluIHRoZSBleGFtcGxlIGJlbG93IHRoYXQgd2UgcGFzcyBjaGlsZHJlbiBhbmQgdGl0bGUgYXMgcHJvcHMgdG8gdGhlIExheW91dCBjb21wb25lbnRzLlxyXG5JZiB5b3UgcmVtb3ZlIHtjaGlsZHJlbn0sIHRoZSBMYXlvdXQgY2Fubm90IHJlbmRlciB0aGUgY29udGVudCB3ZSBwdXQgaW5zaWRlIHRoZSBMYXlvdXQgZWxlbWVudC4gXHJcbkhhdmUgYSBsb29rIGF0IC4vcGFnZXMvaW5kZXguanMgdG8gc2VlIHdoZXJlIHdlIHBhc3MgcHJvcHMgdGhyb3VnaCB0byB0aGlzIExheW91dCBDb21wb25lbnQuICovXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gICA8ZGl2PlxyXG5cdDxIZWFkPlxyXG5cdCAgIDxsaW5rXHJcbiAgXHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXHJcbiAgXHRcdFx0aHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgXHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxyXG4gIFx0XHRcdGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuXHRcdC8+XHJcblx0PC9IZWFkPlxyXG4gIFx0PGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgXHQ8SGVhZGVyIC8+XHJcbiAgICBcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHRcdDwgc3R5bGUganN4PiB7YFxyXG5cdFx0ZGl2IHtcclxuXHRcdFx0YmFja2dyb3VuZDogZ3JleTtcclxuXHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuICBcdDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\kayla\\\\Desktop\\\\Dev Docs 2\\\\my-dev-portfolio\\\\components\\\\MyLayout.js */"
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 4
  }, _this);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC4wZDcwY2FhNTUzYmFlZDg4M2ExNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUUsRUFEUTtBQUVoQkMsRUFBQUEsT0FBTyxFQUFFLEVBRk87QUFHaEJDLEVBQUFBLE1BQU0sRUFBRTtBQUhRLENBQXBCO0FBTUE7QUFDQTtBQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxzQkFDWjtBQUFBLDRCQUNGLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0c7QUFDQyxXQUFHLEVBQUMsWUFETDtBQUVDLFlBQUksRUFBQyx1RUFGTjtBQUdDLGlCQUFTLEVBQUMseUVBSFg7QUFJQyxtQkFBVyxFQUFDO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERSxlQVNBO0FBQUssV0FBSyxFQUFFTCxXQUFaO0FBQUE7QUFBQSw4QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0ssS0FBSyxDQUFDQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZjs7S0FBTUY7QUFzQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbiBvdXIgYXBwLCB3ZSdsbCB1c2UgYSBjb21tb24gc3R5bGUgYWNyb3NzIHZhcmlvdXMgcGFnZXMuIEZvciB0aGlzIHB1cnBvc2UsIHdlIGNhbiBjcmVhdGUgYSBjb21tb24gTGF5b3V0IGNvbXBvbmVudCBhbmQgdXNlIGl0IGZvciBlYWNoIG9mIG91ciBwYWdlcy4gSGVyZSdzIGFuIGV4YW1wbGU6IFxyXG5cclxuU2luY2UgTmV4dC5qcyBpcyB1c2VkIHRvIGNyZWF0ZSBzZXJ2ZXItcmVuZGVyZWQgcGFnZXMsIGFkZGluZyBhIGxpbmsgdXNpbmcgYSBub3JtYWwgPGE+IHRhZyB3b3VsZCBjYXVzZSBhIGxpbmsgdGhhdCB3b3VsZCBiZSBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBzZXJ2ZXIuIFxyXG5UaGlzIGlzIG9idmlvdXNseSBub3QgYWx3YXlzIG5lY2Vzc2FyeS4gXHJcblRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbiAodGhpcyB0YWtlcyBwbGFjZSBpbiB0aGUgYnJvd3Nlciwgd2l0aG91dCBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIpIHdlIHVzZSBOZXh0Lmpz4oCZIExpbmsgQVBJLiovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLypZb3UgY2FuIHVzZSB0aGlzIGJ1aWx0LWluIGNvbXBvbmVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIDxoZWFkPiBlbGVtZW50IG9mIHRoZSBwYWdlLiBNb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy8jcG9wdWxhdGluZy1oZWFkIFxyXG5Ob3RpY2UgdGhhdCB3ZSBhZGQgdGhlIGxpbmsgZm9yIHRoZSBzdHlsZXNoZWV0IGZvciB1c2luZyBSZWFjdC1Cb290c3RyYXAgY29tcG9uZW50cyB0byB0aGUgPEhlYWQ+LiAqL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBwYWRkaW5nOiAyMCxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG4vKiBOb3RpY2UgaW4gdGhlIGV4YW1wbGUgYmVsb3cgdGhhdCB3ZSBwYXNzIGNoaWxkcmVuIGFuZCB0aXRsZSBhcyBwcm9wcyB0byB0aGUgTGF5b3V0IGNvbXBvbmVudHMuXHJcbklmIHlvdSByZW1vdmUge2NoaWxkcmVufSwgdGhlIExheW91dCBjYW5ub3QgcmVuZGVyIHRoZSBjb250ZW50IHdlIHB1dCBpbnNpZGUgdGhlIExheW91dCBlbGVtZW50LiBcclxuSGF2ZSBhIGxvb2sgYXQgLi9wYWdlcy9pbmRleC5qcyB0byBzZWUgd2hlcmUgd2UgcGFzcyBwcm9wcyB0aHJvdWdoIHRvIHRoaXMgTGF5b3V0IENvbXBvbmVudC4gKi9cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgIDxkaXY+XHJcblx0PEhlYWQ+XHJcblx0ICAgPGxpbmtcclxuICBcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcclxuICBcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICBcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXHJcbiAgXHRcdFx0Y3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG5cdFx0Lz5cclxuXHQ8L0hlYWQ+XHJcbiAgXHQ8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcbiAgICBcdDxIZWFkZXIgLz5cclxuICAgIFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0PCBzdHlsZSBqc3g+IHtgXHJcblx0XHRkaXYge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBncmV5O1xyXG5cdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG4gIFx0PC9kaXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJIZWFkZXIiLCJsYXlvdXRTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==