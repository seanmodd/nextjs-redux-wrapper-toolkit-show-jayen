webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.jsx":
/*!*******************!*\
  !*** ./store.jsx ***!
  \*******************/
/*! exports provided: subjectSlice, fetchSubject, wrapper, selectSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subjectSlice\", function() { return subjectSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSubject\", function() { return fetchSubject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSubject\", function() { return selectSubject; });\n/* harmony import */ var _Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar subjectSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__[\"createSlice\"])({\n  reducers: {\n    setEnt: function setEnt(state, action) {\n      return action.payload;\n    }\n  },\n  extraReducers: Object(_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__[\"HYDRATE\"], function (state, action) {\n    console.log('HYDRATE', state, action.payload);\n    return _objectSpread(_objectSpread({}, state), action.payload.subject);\n  })\n});\n\nvar makeStore = function makeStore() {\n  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__[\"configureStore\"])({\n    reducer: Object(_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, subjectSlice.name, subjectSlice.reducer),\n    devTools: true\n  });\n}; // export type AppStore = ReturnType<typeof makeStore>;\n// export type AppState = ReturnType<AppStore['getState']>;\n// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;\n\n\nvar fetchSubject = function fetchSubject(id) {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var timeoutPromise;\n      return _Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              timeoutPromise = function timeoutPromise(timeout) {\n                return new Promise(function (resolve) {\n                  return setTimeout(resolve, timeout);\n                });\n              };\n\n              _context.next = 3;\n              return timeoutPromise(200);\n\n            case 3:\n              dispatch(subjectSlice.actions.setEnt(Object(_Users_seanmodd_Dev_GitHubYouTube_next_redux_wrapper_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, id, {\n                id: id,\n                name: \"Subject \".concat(id)\n              })));\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__[\"createWrapper\"])(makeStore); // export const selectSubject = (id) => (state) => state?.[subjectSlice.name = \"myname\"]?.[id];\n\nvar selectSubject = function selectSubject(id) {\n  return function (state) {\n    return state === null || state === void 0 ? void 0 : state[id];\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanN4P2I3NmMiXSwibmFtZXMiOlsic3ViamVjdFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJyZWR1Y2VycyIsInNldEVudCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInN1YmplY3QiLCJtYWtlU3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJuYW1lIiwiZGV2VG9vbHMiLCJmZXRjaFN1YmplY3QiLCJpZCIsImRpc3BhdGNoIiwidGltZW91dFByb21pc2UiLCJ0aW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYWN0aW9ucyIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwic2VsZWN0U3ViamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUdDLG9FQUFXLENBQUM7QUFHcENDLFVBQVEsRUFBRTtBQUNOQyxVQURNLGtCQUNDQyxLQURELEVBQ1FDLE1BRFIsRUFDZ0I7QUFDbEIsYUFBT0EsTUFBTSxDQUFDQyxPQUFkO0FBQ0g7QUFISyxHQUgwQjtBQVNwQ0MsZUFBYSxFQUFFLGlMQUNWQywwREFEUSxFQUNFLFVBQUNKLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQkksV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1Qk4sS0FBdkIsRUFBOEJDLE1BQU0sQ0FBQ0MsT0FBckM7QUFDQSwyQ0FDT0YsS0FEUCxHQUVPQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUssT0FGdEI7QUFJSCxHQVBRO0FBVHVCLENBQUQsQ0FBaEM7O0FBb0JQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FDZEMsdUVBQWMsQ0FBQztBQUNYQyxXQUFPLEVBQUUsaUxBQ0pkLFlBQVksQ0FBQ2UsSUFEWCxFQUNrQmYsWUFBWSxDQUFDYyxPQUQvQixDQURJO0FBSVhFLFlBQVEsRUFBRTtBQUpDLEdBQUQsQ0FEQTtBQUFBLENBQWxCLEMsQ0FRQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQ7QUFBQTtBQUFBLHNXQUFRLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkMsNEJBRDBCLEdBQ1QsU0FBakJBLGNBQWlCLENBQUNDLE9BQUQ7QUFBQSx1QkFBYSxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHlCQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsT0FBVixDQUFkO0FBQUEsaUJBQW5CLENBQWI7QUFBQSxlQURTOztBQUFBO0FBQUEscUJBRzFCRCxjQUFjLENBQUMsR0FBRCxDQUhZOztBQUFBO0FBS2hDRCxzQkFBUSxDQUNKbkIsWUFBWSxDQUFDeUIsT0FBYixDQUFxQnRCLE1BQXJCLGtMQUNLZSxFQURMLEVBQ1U7QUFDRkEsa0JBQUUsRUFBRkEsRUFERTtBQUVGSCxvQkFBSSxvQkFBYUcsRUFBYjtBQUZGLGVBRFYsRUFESSxDQUFSOztBQUxnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBckI7QUFlQSxJQUFNUSxPQUFPLEdBQUdDLHdFQUFhLENBQUNmLFNBQUQsQ0FBN0IsQyxDQUVQOztBQUNPLElBQU1nQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLEVBQUQ7QUFBQSxTQUFRLFVBQUNkLEtBQUQ7QUFBQSxXQUFXQSxLQUFYLGFBQVdBLEtBQVgsdUJBQVdBLEtBQUssQ0FBR2MsRUFBSCxDQUFoQjtBQUFBLEdBQVI7QUFBQSxDQUF0QiIsImZpbGUiOiIuL3N0b3JlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlndXJlU3RvcmUsIGNyZWF0ZVNsaWNlLCBUaHVua0FjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtjcmVhdGVXcmFwcGVyLCBIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5leHBvcnQgY29uc3Qgc3ViamVjdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXG5cbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRFbnQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBleHRyYVJlZHVjZXJzOiB7XG4gICAgICAgIFtIWURSQVRFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuc3ViamVjdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxuICAgIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICAgICAgcmVkdWNlcjoge1xuICAgICAgICAgICAgW3N1YmplY3RTbGljZS5uYW1lXTogc3ViamVjdFNsaWNlLnJlZHVjZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGRldlRvb2xzOiB0cnVlLFxuICAgIH0pO1xuXG4vLyBleHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIG1ha2VTdG9yZT47XG4vLyBleHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xuLy8gZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248UmV0dXJuVHlwZSwgQXBwU3RhdGUsIHVua25vd24sIEFjdGlvbj47XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1YmplY3QgPSAoaWQpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9ICh0aW1lb3V0KSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCkpO1xuXG4gICAgYXdhaXQgdGltZW91dFByb21pc2UoMjAwKTtcblxuICAgIGRpc3BhdGNoKFxuICAgICAgICBzdWJqZWN0U2xpY2UuYWN0aW9ucy5zZXRFbnQoe1xuICAgICAgICAgICAgW2lkXToge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGBTdWJqZWN0ICR7aWR9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcblxuLy8gZXhwb3J0IGNvbnN0IHNlbGVjdFN1YmplY3QgPSAoaWQpID0+IChzdGF0ZSkgPT4gc3RhdGU/LltzdWJqZWN0U2xpY2UubmFtZSA9IFwibXluYW1lXCJdPy5baWRdO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFN1YmplY3QgPSAoaWQpID0+IChzdGF0ZSkgPT4gc3RhdGU/LltpZF07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.jsx\n");

/***/ })

})