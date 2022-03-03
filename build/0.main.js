(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/Comments.js":
/*!*************************!*\
  !*** ./src/Comments.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
var _jsxFileName = "/sandbox/src/Comments.js";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsx jsx */




var _ref =  false ? undefined : {
  name: "x01vd3",
  styles: "border:2px solid #aaa;border-radius:4px;padding:20px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zYW5kYm94L3NyYy9Db21tZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmUiLCJmaWxlIjoiL3NhbmRib3gvc3JjL0NvbW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50cygpIHtcbiAgY29uc3QgY29tbWVudHMgPSB1c2VEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGkpID0+IChcbiAgICAgICAgPHBcbiAgICAgICAgICBjc3M9e2Nzcyh7XG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNhYWFcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiXG4gICAgICAgICAgfSl9XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbW1lbnR9XG4gICAgICAgIDwvcD5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function Comments() {
  var _this = this;

  var comments = Object(_data__WEBPACK_IMPORTED_MODULE_2__["useData"])();
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, comments.map(function (comment, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
      css: _ref,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, comment);
  }));
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: DataProvider, useData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useData", function() { return useData; });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/sandbox/src/data.js";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsx jsx */

 // Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

var DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
function DataProvider(_ref) {
  var children = _ref.children,
      data = _ref.data;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DataContext.Provider, {
    value: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }, children);
} // In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.

var fakeData = ["Wait, it doesn't wait for React to load?", "How does this even work?", "I like marshmallows"];
function useData() {
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(DataContext);

  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    ctx.read();
  }

  return fakeData;
}

/***/ })

}]);
//# sourceMappingURL=0.main.js.map