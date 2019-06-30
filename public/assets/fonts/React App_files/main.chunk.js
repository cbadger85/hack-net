(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background: #040416;\n}\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MainScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainScreen */ "./src/components/MainScreen/index.js");
/* harmony import */ var _components_RunScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RunScreen */ "./src/components/RunScreen/index.js");
/* harmony import */ var _components_StoreScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StoreScreen */ "./src/components/StoreScreen/index.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/App.js";






const App = ({
  screen
}) => {
  switch (screen) {
    case 'run':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RunScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }));

    case 'store':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StoreScreen__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }));

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }));
  }
};

const mapStateToProps = ({
  game
}) => ({
  screen: game.screen
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(App));

/***/ }),

/***/ "./src/components/Console/ConsoleBottom.js":
/*!*************************************************!*\
  !*** ./src/components/Console/ConsoleBottom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/Console/ConsoleBottom.js";


const ConsoleBottom = () => {
  const consoleBottom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    consoleBottom.current.scrollIntoView({
      behavior: 'smooth'
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: consoleBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ConsoleBottom);

/***/ }),

/***/ "./src/components/Console/ConsoleInput.js":
/*!************************************************!*\
  !*** ./src/components/Console/ConsoleInput.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");


var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/Console/ConsoleInput.js";

function _templateObject3() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border: none;\n  width: 100%;\n  background-color: inherit;\n  color: inherit;\n  margin: 0em 0.5em 0 0.5em;\n  font-family: inherit;\n  font-size: inherit;\n  height: ", ";\n  resize: none;\n  padding-bottom: 0.5em;\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      border-top: 2px solid ", ";\n      padding-top: 0.5em;\n      padding-bottom: 0em;\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  padding-left: 0.4em;\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), props => props.runMode && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), _utils_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue));
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].textarea(_templateObject3(), props => props.height);

const ConsoleInput = ({
  runCommand,
  runMode
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
        _useState2 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        input = _useState2[0],
        setInput = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('auto'),
        _useState4 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        inputHeight = _useState4[0],
        setInputHeight = _useState4[1];

  const consoleInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  let timeout;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleKeyDown = e => {
    if (e.which === 13) {
      e.preventDefault();
      runCommand(input.trim());
      setInput('');
    }

    timeout = setTimeout(() => {
      setInputHeight('auto');
      const scrollHeight = consoleInput.current ? consoleInput.current.scrollHeight : 0;
      setInputHeight("".concat(scrollHeight, "px"));
    }, 0);
  };

  const handleOnChange = e => {
    setInput(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputContainer, {
    runMode: runMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "> "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Textarea, {
    value: input,
    onChange: handleOnChange,
    id: "console-input",
    autoFocus: true,
    autoComplete: "off",
    rows: "1",
    ref: consoleInput,
    onKeyDown: handleKeyDown,
    height: inputHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ConsoleInput);

/***/ }),

/***/ "./src/components/Console/ConsoleOutput.js":
/*!*************************************************!*\
  !*** ./src/components/Console/ConsoleOutput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/Console/ConsoleOutput.js";


const ConsoleOutput = ({
  terminalOutput,
  runMode
}) => {
  const showTerminalOutput = terminalOutput.map(terminalLine => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: terminalLine.id,
    style: {
      color: terminalLine.color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, terminalLine.output));
  const outputScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    outputScroll.current.scrollTop = outputScroll.current.scrollHeight;
  });
  const runModeStyles = runMode ? {
    height: '598px'
  } : {};
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: '.5em',
      marginBottom: '.5em',
      padding: '0.4em',
      paddingBottom: 0,
      overflowY: 'scroll',
      wordWrap: 'break-word',
      width: '100%'
    }, runModeStyles),
    ref: outputScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, showTerminalOutput);
};

/* harmony default export */ __webpack_exports__["default"] = (ConsoleOutput);

/***/ }),

/***/ "./src/components/Console/index.js":
/*!*****************************************!*\
  !*** ./src/components/Console/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ConsoleOutput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConsoleOutput */ "./src/components/Console/ConsoleOutput.js");
/* harmony import */ var _ConsoleInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConsoleInput */ "./src/components/Console/ConsoleInput.js");
/* harmony import */ var _ConsoleBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConsoleBottom */ "./src/components/Console/ConsoleBottom.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/Console/index.js";

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow: scroll;\n  font-family: monospace;\n  font-size: 1.2rem;\n  line-height: 1.3em;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  cursor: text;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const ConsoleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

const ConsoleContainer = ({
  terminalOutput,
  runCommand,
  disableInput,
  runMode
}) => {
  const handleFocus = () => {
    const consoleInput = document.getElementById('console-input');
    !disableInput && consoleInput.focus();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConsoleWrapper, {
    runMode: true,
    onClick: handleFocus,
    id: "console-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConsoleOutput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    terminalOutput: terminalOutput,
    runMode: runMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), !disableInput && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConsoleInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    runCommand: runCommand,
    runMode: runMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), !runMode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConsoleBottom__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConsoleContainer);

/***/ }),

/***/ "./src/components/Figlet.js":
/*!**********************************!*\
  !*** ./src/components/Figlet.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var figlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! figlet */ "./node_modules/figlet/lib/figlet.js");
/* harmony import */ var figlet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(figlet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var es6_promisify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! es6-promisify */ "./node_modules/es6-promisify/dist/promisify.js");
/* harmony import */ var es6_promisify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(es6_promisify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/colors */ "./src/utils/colors.js");


var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/Figlet.js";

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      margin: 1em 0 1em 2em;\n    "]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  white-space: pre;\n  color: ", ";\n  ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const FigletWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject(), props => props.color, props => props.console && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject2()));

const getFigletPromise = (inputText, font) => {
  figlet__WEBPACK_IMPORTED_MODULE_3___default.a.defaults({
    fontPath: 'assets/fonts'
  });
  const figletPromise = Object(es6_promisify__WEBPACK_IMPORTED_MODULE_4__["promisify"])(figlet__WEBPACK_IMPORTED_MODULE_3___default.a);
  const text = figletPromise(inputText, font);
  return text;
};

const Figlet = ({
  children,
  font = 'poison',
  color = _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].pink,
  isConsole
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
        _useState2 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        figletText = _useState2[0],
        setFigletText = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getFigletPromise(children, font).then(data => setFigletText(data)).catch(e => console.log(e));
  }, [children, font]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FigletWrapper, {
    color: color,
    console: isConsole,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, figletText);
};

/* harmony default export */ __webpack_exports__["default"] = (Figlet);

/***/ }),

/***/ "./src/components/MainScreen/EndGame.js":
/*!**********************************************!*\
  !*** ./src/components/MainScreen/EndGame.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/MainScreen/EndGame.js";



const OutOfTime = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].red
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].yellow
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "trace complete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "+++ TERMINAL LOCKED +++"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginTop: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "+++ GAME OVER +++"));
};

const OutOfHealth = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].red
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].yellow
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "firewall destroyed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "+++ TERMINAL LOCKED +++"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginTop: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "+++ GAME OVER +++"));
};

const Win = ({
  loot
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].blue
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].yellow
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Firewall Breached"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginTop: '2em',
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].green
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "you gained ", loot, " credits"));
};

const EndGame = ({
  condition,
  loot
}) => {
  switch (condition) {
    case 'OUT_OF_TIME':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OutOfTime, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: undefined
      });

    case 'WIN':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Win, {
        loot: loot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      });

    case 'OUT_OF_HEALTH':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OutOfHealth, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: undefined
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["default"].red
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      }, "+++ GAME OVER +++");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (EndGame);

/***/ }),

/***/ "./src/components/MainScreen/Intro.js":
/*!********************************************!*\
  !*** ./src/components/MainScreen/Intro.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Figlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Figlet */ "./src/components/Figlet.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/MainScreen/Intro.js";




const Intro = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Figlet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    font: "5lineoblique",
    isConsole: true,
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].yellow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Cyberpunk"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: '35em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Figlet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    font: "pepper",
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].pink,
    isConsole: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "1985")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "run ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].pink
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "create-runner [name] "), "to begin..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./src/components/MainScreen/MainConsole.js":
/*!**************************************************!*\
  !*** ./src/components/MainScreen/MainConsole.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Console */ "./src/components/Console/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/commands */ "./src/utils/commands.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/MainScreen/MainConsole.js";






const MainConsole = () => {
  const terminalOutput = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.terminal.terminalOutput);
  const isTerminalActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.terminal.isTerminalActive);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleRunCommand = input => {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__["addToTerminalDisplay"])({
      output: "> ".concat(input)
    }));

    if (!input.trim()) {
      return;
    }

    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__["addToTerminalHistory"])(input));

    const _input$split = input.split(' '),
          _input$split2 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_input$split),
          command = _input$split2[0],
          args = _input$split2.slice(1);

    switch (command.toLowerCase()) {
      case 'echo':
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["echo"](args);
        break;

      case 'create-runner':
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["createRunner"](args);
        break;

      case 'clear':
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["clearTerminal"]();
        break;

      case 'connect':
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["executeRun"](args);
        break;

      case 'shop':
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["goShopping"]();
        break;

      case 'show':
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["show"](args);
        break;

      default:
        _utils_commands__WEBPACK_IMPORTED_MODULE_5__["error"](input);
        break;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Console__WEBPACK_IMPORTED_MODULE_3__["default"], {
    terminalOutput: terminalOutput,
    runCommand: handleRunCommand,
    disableInput: !isTerminalActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MainConsole);

/***/ }),

/***/ "./src/components/MainScreen/index.js":
/*!********************************************!*\
  !*** ./src/components/MainScreen/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScreenLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScreenLayout */ "./src/components/ScreenLayout.js");
/* harmony import */ var _MainConsole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainConsole */ "./src/components/MainScreen/MainConsole.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/MainScreen/index.js";




const MainScreen = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScreenLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainConsole__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainScreen);

/***/ }),

/***/ "./src/components/RunScreen/CallStack.js":
/*!***********************************************!*\
  !*** ./src/components/RunScreen/CallStack.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/CallStack.js";

function _templateObject3() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 352px;\n  overflow: scroll;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  text-transform: uppercase;\n  border-bottom: 1px solid ", ";\n\n  p {\n    margin-top: -0.5rem;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const CallStackTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _utils_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue);
const CallStackWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
const CallStackProgramWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());

const CallStack = () => {
  const callStack = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.callStack.stack);
  const buffer = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.callStack.buffer);
  const callStackScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    callStackScroll.current.scrollTop = callStackScroll.current.scrollHeight;
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallStackWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallStackTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Call Stack"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "memory remaining"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, buffer)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CallStackProgramWrapper, {
    ref: callStackScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, callStack.map(program => program.output)));
};

/* harmony default export */ __webpack_exports__["default"] = (CallStack);

/***/ }),

/***/ "./src/components/RunScreen/Corp.js":
/*!******************************************!*\
  !*** ./src/components/RunScreen/Corp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Figlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Figlet */ "./src/components/Figlet.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/Corp.js";




const Corp = ({
  name
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "connecting..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "connected successful"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Figlet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    font: "doom2",
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].yellow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].red
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "+++ INTRUSION DETECTED +++"));
};

/* harmony default export */ __webpack_exports__["default"] = (Corp);

/***/ }),

/***/ "./src/components/RunScreen/Countdown.js":
/*!***********************************************!*\
  !*** ./src/components/RunScreen/Countdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Figlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Figlet */ "./src/components/Figlet.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
/* harmony import */ var _utils_gameController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/gameController */ "./src/utils/gameController.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/Countdown.js";

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.2rem;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  font-size: 1.2rem;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: column;\n  height: 10em;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}








const CountdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].blue);
const CountdownTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());

const Countdown = () => {
  const timer = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.timer);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const initialTime = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(timer);
  Object(_utils_gameController__WEBPACK_IMPORTED_MODULE_7__["default"])(timer, initialTime.current);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const countdownTimer = setInterval(() => {
      if (timer > 0) {
        dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_5__["setTick"])(timer - 1));
      }

      if (timer <= 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);
    return () => {
      clearInterval(countdownTimer);
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountdownWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountdownTitle, {
    style: {
      textTransform: 'uppercase'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Time to trace:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Figlet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    font: "lcd",
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].yellow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, timer));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./src/components/RunScreen/HealthBar.js":
/*!***********************************************!*\
  !*** ./src/components/RunScreen/HealthBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/HealthBar.js";

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 1em;\n  width: ", "%;\n  background-color: ", ";\n  padding: 0.25em;\n  transition: width 1s linear;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const HealthBarIndicator = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), props => props.width, props => props.color);

const HealthBar = ({
  label,
  width,
  color
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      padding: '.25em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HealthBarIndicator, {
    width: width,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HealthBar);

/***/ }),

/***/ "./src/components/RunScreen/HealthBarContainer.js":
/*!********************************************************!*\
  !*** ./src/components/RunScreen/HealthBarContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HealthBar */ "./src/components/RunScreen/HealthBar.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/HealthBarContainer.js";





const HealthBarContainer = () => {
  const enemyFirewallStrength = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.enemy.firewallStrength);
  const playerFirewallStrength = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.player.firewallStrength);
  const initialEnemyHealth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(enemyFirewallStrength);
  const initialPlayerHealth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(playerFirewallStrength);
  const enemyHealth = parseInt(enemyFirewallStrength / initialEnemyHealth.current * 100, 10);
  const playerHealth = parseInt(playerFirewallStrength / initialPlayerHealth.current * 100, 10);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      padding: '0.5em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HealthBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Your firewall strength",
    width: playerHealth > 0 ? playerHealth : 0,
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HealthBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Enemy's firewall strength",
    width: enemyHealth > 0 ? enemyHealth : 0,
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].pink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HealthBarContainer);

/***/ }),

/***/ "./src/components/RunScreen/RunConsole.js":
/*!************************************************!*\
  !*** ./src/components/RunScreen/RunConsole.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Console */ "./src/components/Console/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_runCommands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/runCommands */ "./src/utils/runCommands.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/RunConsole.js";






const RunConsole = () => {
  const terminalOutput = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.runTerminal.terminalOutput);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const handleRunCommand = input => {
    input.trim() && dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToRunTerminalDisplay"])({
      output: "> ".concat(input)
    }));
    input.trim() && dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToRunTerminalHistory"])(input));
    /* const [command, ...args] = input.split(' '); */
    // switch (command.toLowerCase()) {
    //   case 'main':
    //     runCommands.main();
    //     break;
    //   case 'exec':
    //     runCommands.execCounterIce(args);
    //     break;
    //   default:
    //     runCommands.error();
    //     break;
    // }

    _utils_runCommands__WEBPACK_IMPORTED_MODULE_4__["execCounterIce"](input);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Console__WEBPACK_IMPORTED_MODULE_2__["default"], {
    terminalOutput: terminalOutput,
    runCommand: handleRunCommand,
    runMode: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RunConsole);

/***/ }),

/***/ "./src/components/RunScreen/TimeToExecuteCountdown.js":
/*!************************************************************!*\
  !*** ./src/components/RunScreen/TimeToExecuteCountdown.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");


var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/TimeToExecuteCountdown.js";

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  height: 0.5em;\n  width: ", "%;\n  margin: 0.5em auto;\n  background-color: ", ";\n  transition: width 1s linear;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  text-align: center;\n  margin: auto;\n  padding: 0.25em;\n  color: ", ";\n  border-bottom: 1px ", " solid;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const TteCountdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].yellow, _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].blue);
const CountdownBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2(), props => props.width, _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].pink);

const TimeToExecuteCountdown = ({
  id,
  program
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(program.tte),
        _useState2 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        tteTimer = _useState2[0],
        setTteTimer = _useState2[1];

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const timerId = setInterval(() => {
      if (tteTimer >= 0) {
        setTteTimer(tteTimer - 1);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  if (tteTimer < 0) {
    program.program();
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_5__["removeProgramFromCallstack"])(id, program.memRequired));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TteCountdownWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, program.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CountdownBar, {
    width: parseInt(tteTimer / program.tte * 100, 10),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TimeToExecuteCountdown);

/***/ }),

/***/ "./src/components/RunScreen/index.js":
/*!*******************************************!*\
  !*** ./src/components/RunScreen/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ScreenLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ScreenLayout */ "./src/components/ScreenLayout.js");
/* harmony import */ var _RunConsole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RunConsole */ "./src/components/RunScreen/RunConsole.js");
/* harmony import */ var _HealthBarContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HealthBarContainer */ "./src/components/RunScreen/HealthBarContainer.js");
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Countdown */ "./src/components/RunScreen/Countdown.js");
/* harmony import */ var _CallStack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CallStack */ "./src/components/RunScreen/CallStack.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/RunScreen/index.js";

function _templateObject3() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 300px;\n  border-left: 2px solid ", ";\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 660px;\n  display: flex;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 80px;\n  border-bottom: 2px solid ", ";\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0.75em;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









const HealthBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _utils_colors__WEBPACK_IMPORTED_MODULE_8__["default"].blue);
const ConsoleAndStatusWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
const CountdownAndStacksWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), _utils_colors__WEBPACK_IMPORTED_MODULE_8__["default"].blue);

const RunScreen = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScreenLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HealthBarWrapper, {
    className: "health-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HealthBarContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConsoleAndStatusWrapper, {
    className: "console-and-status-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RunConsole__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountdownAndStacksWrapper, {
    className: "countdown-and-stack-timers-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "countdown-timer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Countdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "program-stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CallStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RunScreen);

/***/ }),

/***/ "./src/components/ScreenLayout.js":
/*!****************************************!*\
  !*** ./src/components/ScreenLayout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/colors */ "./src/utils/colors.js");


function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 1200px;\n  min-width: 1200px;\n  height: 745px;\n  /* min-height: 750px; */\n  margin: auto;\n  box-sizing: border-box;\n  border: 1px solid ", ";\n  color: ", ";\n  background: ", ";\n  font-family: monospace;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const ScreenLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].blue, _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].darkPurple);
/* harmony default export */ __webpack_exports__["default"] = (ScreenLayout);

/***/ }),

/***/ "./src/components/StoreScreen/ButtonContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/StoreScreen/ButtonContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/StoreScreen/ButtonContainer.js";

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: none;\n  color: inherit;\n  font: inherit;\n  outline: inherit;\n  border: 1px solid ", ";\n  padding: 1rem 2rem;\n\n  &:hover {\n    box-shadow: 0.5rem 0.5rem\n      ", ";\n  }\n\n  &:focus {\n    border-color: ", ";\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2em;\n  width: 70%;\n  margin: auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const ButtonLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2(), _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, props => props.cancel ? _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red : _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green, props => props.cancel ? _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red : _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green);

const ButtonContainer = ({
  checkout,
  cancel
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    type: "button",
    onClick: checkout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Checkout"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    type: "button",
    cancel: true,
    onClick: cancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Cancel"));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonContainer);

/***/ }),

/***/ "./src/components/StoreScreen/StoreItem.js":
/*!*************************************************!*\
  !*** ./src/components/StoreScreen/StoreItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/StoreScreen/StoreItem.js";

function _templateObject3() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 1em;\n  appearance: none;\n  display: inline-block;\n  position: relative;\n\n  &:after {\n    content: '[  ]';\n    white-space: pre;\n    font-size: 1.4rem;\n    position: absolute;\n    top: 0.6em;\n    right: 0px;\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus:after {\n    color: ", ";\n  }\n\n  &:checked:after {\n    content: '[*]';\n    font-size: 1.4rem;\n    position: absolute;\n    top: 0.6em;\n    right: 0px;\n    color: ", ";\n  }\n\n  &:checked:focus:after {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: top;\n  width: 100%;\n  justify-content: center;\n  color: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const StoreItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), props => props.isSoldOut ? _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red : _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
const Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject2(), props => props.isSoldOut ? _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red : _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].yellow, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green, _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].yellow);
const ItemType = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject3(), props => props.isSoldOut ? _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].red : _utils_colors__WEBPACK_IMPORTED_MODULE_3__["default"].green);

const StoreItem = ({
  name,
  description,
  cost,
  purchased,
  clickItem,
  credits,
  type
}) => {
  const handleOnClick = () => {
    clickItem(name);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StoreItemWrapper, {
    onClick: handleOnClick,
    isSoldOut: credits - cost < 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox, {
    type: "checkbox",
    checked: purchased,
    onChange: () => null,
    isSoldOut: credits - cost < 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '1em',
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '1em',
      width: '56%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemType, {
    isSoldOut: credits - cost < 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, type, ":"), ' ', description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '.5em',
      width: '10%',
      textAlign: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, cost));
};

/* harmony default export */ __webpack_exports__["default"] = (StoreItem);

/***/ }),

/***/ "./src/components/StoreScreen/index.js":
/*!*********************************************!*\
  !*** ./src/components/StoreScreen/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ScreenLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ScreenLayout */ "./src/components/ScreenLayout.js");
/* harmony import */ var _ButtonContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonContainer */ "./src/components/StoreScreen/ButtonContainer.js");
/* harmony import */ var _StoreItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StoreItem */ "./src/components/StoreScreen/StoreItem.js");
/* harmony import */ var _Figlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Figlet */ "./src/components/Figlet.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
/* harmony import */ var _data_storeItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/storeItems */ "./src/data/storeItems.js");



var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/components/StoreScreen/index.js";

function _templateObject4() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  text-align: right;\n  width: 80%;\n  margin: auto;\n\n  span {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin: auto;\n  height: 55%;\n  overflow-y: scroll;\n  width: 80%;\n  border: 1px solid ", ";\n  padding: 0 1em;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin: auto;\n  height: 25%;\n  width: 80%;\n  text-align: center;\n  padding: 1em;\n  padding-bottom: 0;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100%;\n  font-size: 1.2rem;\n  background: inherit;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}











const StoreLayout = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
const StoreItemsLayout = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3(), _utils_colors__WEBPACK_IMPORTED_MODULE_11__["default"].blue);
const Credits = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject4(), props => props.credits < 0 ? _utils_colors__WEBPACK_IMPORTED_MODULE_11__["default"].red : _utils_colors__WEBPACK_IMPORTED_MODULE_11__["default"].yellow);

const StoreScreen = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const ownedPrograms = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.player.programs);
  const initialStoreItems = _data_storeItems__WEBPACK_IMPORTED_MODULE_12__["default"].filter(item => !ownedPrograms.includes(item.name)).map(item => Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item, {
    purchased: false
  }));
  const initialCredits = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.player.credits);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialStoreItems),
        _useState2 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialCredits),
        _useState4 = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        credits = _useState4[0],
        setCredits = _useState4[1];

  const handleClickItem = name => {
    setItems(items.map(item => {
      if (item.name !== name) {
        return item;
      }

      return Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item, {
        purchased: !item.purchased
      });
    }));
    const purchasedItem = items.find(item => item.name === name);

    if (purchasedItem.purchased) {
      setCredits(credits => credits + purchasedItem.cost);
      return;
    }

    setCredits(credits => credits - purchasedItem.cost);
  };

  const handleCheckout = () => {
    if (credits < 0 || initialCredits === credits) {
      return;
    } // TODO: add player programs and stats


    const programs = items.filter(item => item.purchased && item.type === 'program').map(program => program.name);
    const memoryBuff = items.filter(item => item.purchased && item.type === 'memory upgrade').reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    const firewallBuff = items.filter(item => item.purchased && item.type === 'firewall upgrade').reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_10__["purchaseItems"]({
      cost: initialCredits - credits,
      programs,
      memoryBuff,
      firewallBuff
    }));
    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_10__["switchScreenToMainConsole"]());
  };

  const handleCancel = () => {
    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_10__["switchScreenToMainConsole"]());
    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_10__["addToTerminalDisplay"]({
      output: 'Thank you for visiting! Feel free to come back and improve your deck!',
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_11__["default"].yellow
    }));
    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_10__["addToTerminalDisplay"]({
      output: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: undefined
      }, "run ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        style: {
          color: _utils_colors__WEBPACK_IMPORTED_MODULE_11__["default"].pink
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: undefined
      }, "help"), " to learn how to play")
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ScreenLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StoreLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Figlet__WEBPACK_IMPORTED_MODULE_9__["default"], {
    font: "lean",
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_11__["default"].pink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "STORE")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Credits, {
    credits: credits,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "CREDITS: ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, credits)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StoreItemsLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, items.map(item => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StoreItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: item.name,
    description: item.description,
    cost: item.cost,
    purchased: item.purchased,
    key: item.name,
    id: item.name,
    clickItem: handleClickItem,
    credits: credits,
    type: item.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checkout: handleCheckout,
    cancel: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StoreScreen);

/***/ }),

/***/ "./src/data/enemyCorps.js":
/*!********************************!*\
  !*** ./src/data/enemyCorps.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  firstCorp: {
    name: 'First Corp',
    connectionName: 'firstCorp',
    difficultyLevel: 'easy',
    firewallStrength: 150,
    programs: ['counter insertion agent', 'reverse denial of service'],
    credits: 250
  },
  medCorp: {
    name: 'First Corp',
    connectionName: 'firstCorp',
    difficultyLevel: 'medium',
    firewallStrength: 150,
    programs: ['counter insertion agent', 'reverse denial of service', 'anti-viral doubler'],
    credits: 500
  },
  hardCorp: {
    name: 'Hard Corp',
    connectionName: 'hardCorp',
    difficultyLevel: 'hard',
    firewallStrength: 200,
    programs: ['counter insertion agent', 'reverse denial of service', 'anti-viral doubler'],
    credits: 1000
  }
});

/***/ }),

/***/ "./src/data/enemyPrograms.js":
/*!***********************************!*\
  !*** ./src/data/enemyPrograms.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/colors */ "./src/utils/colors.js");




const printSuccess = programName => {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
    output: "".concat(programName, " has been executed against you"),
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].yellow
  }));
};

const isRunMode = () => {
  const screen = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().game.screen;
  return screen === 'run' ? true : false;
};

/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'counter insertion agent',
  program: function () {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["damagePlayerFirewall"](5));
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
      output: '5 damage has been dealt to you',
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].red
    }));
    printSuccess(this.name);
  }
}, {
  name: 'reverse denial of service',
  program: function () {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["damagePlayerFirewall"](20));
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
      output: '20 damage has been dealt to you',
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].red
    }));
    printSuccess(this.name);
  }
}, {
  name: 'anti-viral doubler',
  program: function () {
    let timer = 12;
    const dotTimer = setInterval(() => {
      if (timer > 1) {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["damagePlayerFirewall"](3));
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
          output: '3 damage has been dealt to you',
          color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].red
        }));
      }

      if (!isRunMode() || timer <= 1) {
        clearInterval(dotTimer);
      }

      timer -= 1;
    }, 2000);
    printSuccess(this.name);
  }
}]);

/***/ }),

/***/ "./src/data/playerPrograms.js":
/*!************************************!*\
  !*** ./src/data/playerPrograms.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/colors */ "./src/utils/colors.js");




const printSuccess = programName => {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
    output: "".concat(programName, " executed successfully"),
    color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].yellow
  }));
};

const isRunMode = () => {
  const screen = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().game.screen;
  return screen === 'run' ? true : false;
};

/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'ice-ice-breaker',
  type: 'program',
  unique: true,
  description: "A lightly penetrating attack designed to test the target's defenses",
  tte: 3,
  cost: 1000,
  memRequired: 8,
  program: function () {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["damageEnemyFirewall"](3));
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
      output: 'you dealt 3',
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green
    }));
    printSuccess(this.name);
  }
}, {
  name: 'set-them-up-the-bomb',
  type: 'program',
  unique: true,
  description: "A damaging worm that disables critical systems in targe's mainframe",
  tte: 15,
  cost: 2500,
  memRequired: 32,
  program: function () {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["damageEnemyFirewall"](20));
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
      output: 'you dealt 20 damage',
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green
    }));
    printSuccess(this.name);
  }
}, // {
//   name: 'nuke-em',
//   type: 'program',
//   description: 'auto-win',
//   unique: true,
//   tte: 0,
//   cost: 0,
//   memRequired: 0,
//   program: function() {
//     isRunMode() && store.dispatch(actions.damageEnemyFirewall(100));
//     printSuccess(this.name);
//   },
// },
{
  name: 'death-by-a-thousand-cuts',
  type: 'program',
  unique: true,
  description: "A brutal DDoS attack that overload's the target's firewall",
  tte: 10,
  cost: 1500,
  memRequired: 16,
  program: function () {
    let timer = 12;
    const dotTimer = setInterval(() => {
      if (timer > 1) {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["damageEnemyFirewall"](3));
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["addToRunTerminalDisplay"]({
          output: 'you dealt 3 damage',
          color: _utils_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green
        }));
      }

      if (!isRunMode() || timer <= 1) {
        clearInterval(dotTimer);
      }

      timer -= 1;
    }, 2000);
    printSuccess(this.name);
  }
}]);

/***/ }),

/***/ "./src/data/storeItems.js":
/*!********************************!*\
  !*** ./src/data/storeItems.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerPrograms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerPrograms */ "./src/data/playerPrograms.js");

/* harmony default export */ __webpack_exports__["default"] = ([..._playerPrograms__WEBPACK_IMPORTED_MODULE_0__["default"], {
  name: 'LightFirewall Booster',
  description: "A mild increase to your firewall's strength",
  cost: 1000,
  type: 'firewall upgrade',
  amount: 25
}, {
  name: 'Light Memory Upgrade',
  description: 'A mild increase to your memory capacitiy',
  cost: 2500,
  type: 'memory upgrade',
  amount: 8
}, {
  name: 'Remove bugs from game',
  type: 'game upgrade',
  description: 'This is definitely a real feature',
  cost: 100000
}]);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: ADD_TO_TERMINAL_DISPLAY, addToTerminalDisplay, CLEAR_TERMINAL_DISPLAY, clearTerminalDisplay, ADD_TO_TERMINAL_HISTORY, addToTerminalHistory, SET_TERMINAL_ACTIVE, setTerminalActive, SET_TERMINAL_INACTIVE, setTerminalInactive, ADD_TO_RUN_TERMINAL_HISTORY, addToRunTerminalHistory, ADD_TO_RUN_TERMINAL_DISPLAY, addToRunTerminalDisplay, CREATE_PLAYER, createPlayer, ADD_TO_PLAYER_CREDITS, addToPlayerCredits, CREATE_ENEMY, createEnemy, DAMAGE_ENEMY_FIREWALL, damageEnemyFirewall, DAMAGE_PLAYER_FIREWALL, damagePlayerFirewall, SWITCH_SCREEN_TO_RUN_CONSOLE, switchScreenToRunConsole, SWITCH_SCREEN_TO_MAIN_CONSOLE, switchScreenToMainConsole, SWITCH_TO_STORE_SCREEN, switchScreenToStoreScreen, SET_BUFFER_AMOUNT, setBufferAmount, ADD_TO_CALL_STACK, addToCallStack, CLEAR_CALL_STACK, clearCallStack, REMOVE_PROGRAM_FROM_CALL_STACK, removeProgramFromCallstack, TICK, setTick, PURCHASE_ITEMS, purchaseItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_TERMINAL_DISPLAY", function() { return ADD_TO_TERMINAL_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToTerminalDisplay", function() { return addToTerminalDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_TERMINAL_DISPLAY", function() { return CLEAR_TERMINAL_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTerminalDisplay", function() { return clearTerminalDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_TERMINAL_HISTORY", function() { return ADD_TO_TERMINAL_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToTerminalHistory", function() { return addToTerminalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TERMINAL_ACTIVE", function() { return SET_TERMINAL_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTerminalActive", function() { return setTerminalActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TERMINAL_INACTIVE", function() { return SET_TERMINAL_INACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTerminalInactive", function() { return setTerminalInactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_RUN_TERMINAL_HISTORY", function() { return ADD_TO_RUN_TERMINAL_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToRunTerminalHistory", function() { return addToRunTerminalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_RUN_TERMINAL_DISPLAY", function() { return ADD_TO_RUN_TERMINAL_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToRunTerminalDisplay", function() { return addToRunTerminalDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PLAYER", function() { return CREATE_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return createPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_PLAYER_CREDITS", function() { return ADD_TO_PLAYER_CREDITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToPlayerCredits", function() { return addToPlayerCredits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ENEMY", function() { return CREATE_ENEMY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEnemy", function() { return createEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAMAGE_ENEMY_FIREWALL", function() { return DAMAGE_ENEMY_FIREWALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "damageEnemyFirewall", function() { return damageEnemyFirewall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAMAGE_PLAYER_FIREWALL", function() { return DAMAGE_PLAYER_FIREWALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "damagePlayerFirewall", function() { return damagePlayerFirewall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_SCREEN_TO_RUN_CONSOLE", function() { return SWITCH_SCREEN_TO_RUN_CONSOLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchScreenToRunConsole", function() { return switchScreenToRunConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_SCREEN_TO_MAIN_CONSOLE", function() { return SWITCH_SCREEN_TO_MAIN_CONSOLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchScreenToMainConsole", function() { return switchScreenToMainConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_TO_STORE_SCREEN", function() { return SWITCH_TO_STORE_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchScreenToStoreScreen", function() { return switchScreenToStoreScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BUFFER_AMOUNT", function() { return SET_BUFFER_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBufferAmount", function() { return setBufferAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CALL_STACK", function() { return ADD_TO_CALL_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCallStack", function() { return addToCallStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CALL_STACK", function() { return CLEAR_CALL_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCallStack", function() { return clearCallStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PROGRAM_FROM_CALL_STACK", function() { return REMOVE_PROGRAM_FROM_CALL_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProgramFromCallstack", function() { return removeProgramFromCallstack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK", function() { return TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTick", function() { return setTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_ITEMS", function() { return PURCHASE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseItems", function() { return purchaseItems; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_0__);

const ADD_TO_TERMINAL_DISPLAY = 'ADD_TO_TERMINAL_DISPLAY';
const addToTerminalDisplay = ({
  output,
  color = ''
}) => ({
  type: ADD_TO_TERMINAL_DISPLAY,
  payload: {
    id: nanoid__WEBPACK_IMPORTED_MODULE_0___default()(),
    color,
    output
  }
});
const CLEAR_TERMINAL_DISPLAY = 'CLEAR_TERMINAL_DISPLAY';
const clearTerminalDisplay = () => ({
  type: CLEAR_TERMINAL_DISPLAY
});
const ADD_TO_TERMINAL_HISTORY = 'ADD_TO_TERMINAL_HISTORY';
const addToTerminalHistory = command => ({
  type: ADD_TO_TERMINAL_HISTORY,
  payload: command
});
const SET_TERMINAL_ACTIVE = 'SET_TERMINAL_ACTIVE';
const setTerminalActive = () => ({
  type: SET_TERMINAL_ACTIVE
});
const SET_TERMINAL_INACTIVE = 'SET_TERMINAL_INACTIVE';
const setTerminalInactive = () => ({
  type: SET_TERMINAL_INACTIVE
});
const ADD_TO_RUN_TERMINAL_HISTORY = 'ADD_TO_RUN_TERMINAL_HISTORY';
const addToRunTerminalHistory = command => ({
  type: ADD_TO_RUN_TERMINAL_HISTORY,
  payload: command
});
const ADD_TO_RUN_TERMINAL_DISPLAY = 'ADD_TO_RUN_TERMINAL_DISPLAY';
const addToRunTerminalDisplay = ({
  output,
  color = ''
}) => ({
  type: ADD_TO_RUN_TERMINAL_DISPLAY,
  payload: {
    id: nanoid__WEBPACK_IMPORTED_MODULE_0___default()(),
    color,
    output
  }
});
const CREATE_PLAYER = 'CREATE_PLAYER';
const createPlayer = name => ({
  type: CREATE_PLAYER,
  payload: {
    name
  }
});
const ADD_TO_PLAYER_CREDITS = 'ADD_TO_PLAYER_CREDITS';
const addToPlayerCredits = addedCredits => ({
  type: ADD_TO_PLAYER_CREDITS,
  payload: addedCredits
});
const CREATE_ENEMY = 'CREATE_ENEMY';
const createEnemy = enemy => ({
  type: CREATE_ENEMY,
  payload: {
    name: enemy.name,
    firewallStrength: enemy.firewallStrength,
    programs: enemy.programs,
    difficulty: enemy.difficultyLevel,
    credits: enemy.credits
  }
});
const DAMAGE_ENEMY_FIREWALL = 'DAMAGE_ENEMY_FIREWALL';
const damageEnemyFirewall = damage => ({
  type: DAMAGE_ENEMY_FIREWALL,
  payload: damage
});
const DAMAGE_PLAYER_FIREWALL = 'DAMAGE_PLAYER_FIREWALL';
const damagePlayerFirewall = damage => ({
  type: DAMAGE_PLAYER_FIREWALL,
  payload: damage
});
const SWITCH_SCREEN_TO_RUN_CONSOLE = 'SWITCH_SCREEN_TO_RUN_CONSOLE';
const switchScreenToRunConsole = initialHealth => ({
  type: SWITCH_SCREEN_TO_RUN_CONSOLE,
  payload: initialHealth
});
const SWITCH_SCREEN_TO_MAIN_CONSOLE = 'SWITCH_SCREEN_TO_MAIN_CONSOLE';
const switchScreenToMainConsole = () => ({
  type: SWITCH_SCREEN_TO_MAIN_CONSOLE
});
const SWITCH_TO_STORE_SCREEN = 'SWITCH_TO_STORE_SCREEN';
const switchScreenToStoreScreen = () => ({
  type: SWITCH_TO_STORE_SCREEN
});
const SET_BUFFER_AMOUNT = 'SET_BUFFER_AMOUNT';
const setBufferAmount = buffer => ({
  type: SET_BUFFER_AMOUNT,
  payload: buffer
});
const ADD_TO_CALL_STACK = 'ADD_TO_CALL_STACK';
const addToCallStack = ({
  component,
  id,
  memRequired
}) => ({
  type: ADD_TO_CALL_STACK,
  payload: {
    output: component,
    id,
    memRequired
  }
});
const CLEAR_CALL_STACK = 'CLEAR_CALL_STACK';
const clearCallStack = () => ({
  type: CLEAR_CALL_STACK
});
const REMOVE_PROGRAM_FROM_CALL_STACK = 'REMOVE_PROGRAM_FROM_CALL_STACK';
const removeProgramFromCallstack = (id, memRequired) => ({
  type: REMOVE_PROGRAM_FROM_CALL_STACK,
  payload: {
    id,
    memRequired
  }
});
const TICK = 'TICK';
const setTick = () => ({
  type: TICK
});
const PURCHASE_ITEMS = 'PURCHASE_ITEMS';
const purchaseItems = ({
  programs,
  memoryBuff,
  firewallBuff,
  cost
}) => ({
  type: PURCHASE_ITEMS,
  payload: {
    programs,
    memoryBuff,
    firewallBuff,
    cost
  }
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

/***/ }),

/***/ "./src/store/reducers/callStackReducer/buffer.js":
/*!*******************************************************!*\
  !*** ./src/store/reducers/callStackReducer/buffer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 64, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_BUFFER_AMOUNT"]:
      return payload;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CALL_STACK"]:
      return state - payload.memRequired;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PROGRAM_FROM_CALL_STACK"]:
      return state + payload.memRequired;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CALL_STACK"]:
      return 64;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/callStackReducer/index.js":
/*!******************************************************!*\
  !*** ./src/store/reducers/callStackReducer/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stack */ "./src/store/reducers/callStackReducer/stack.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./src/store/reducers/callStackReducer/buffer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  stack: _stack__WEBPACK_IMPORTED_MODULE_1__["default"],
  buffer: _buffer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/callStackReducer/stack.js":
/*!******************************************************!*\
  !*** ./src/store/reducers/callStackReducer/stack.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CALL_STACK"]:
      return [...state, payload];

    case _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PROGRAM_FROM_CALL_STACK"]:
      return state.filter(state => state.id !== payload.id);

    case _actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CALL_STACK"]:
      return [];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/enemyReducer/credits.js":
/*!****************************************************!*\
  !*** ./src/store/reducers/enemyReducer/credits.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 0, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_ENEMY"]:
      return payload.credits;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/enemyReducer/difficulty.js":
/*!*******************************************************!*\
  !*** ./src/store/reducers/enemyReducer/difficulty.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 'easy', {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_ENEMY"]:
      return payload.difficulty;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/enemyReducer/firewallStrength.js":
/*!*************************************************************!*\
  !*** ./src/store/reducers/enemyReducer/firewallStrength.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 0, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_ENEMY"]:
      {
        return payload.firewallStrength;
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["DAMAGE_ENEMY_FIREWALL"]:
      return state - payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/enemyReducer/index.js":
/*!**************************************************!*\
  !*** ./src/store/reducers/enemyReducer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _firewallStrength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firewallStrength */ "./src/store/reducers/enemyReducer/firewallStrength.js");
/* harmony import */ var _programs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programs */ "./src/store/reducers/enemyReducer/programs.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name */ "./src/store/reducers/enemyReducer/name.js");
/* harmony import */ var _difficulty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./difficulty */ "./src/store/reducers/enemyReducer/difficulty.js");
/* harmony import */ var _credits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credits */ "./src/store/reducers/enemyReducer/credits.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  firewallStrength: _firewallStrength__WEBPACK_IMPORTED_MODULE_1__["default"],
  programs: _programs__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: _name__WEBPACK_IMPORTED_MODULE_3__["default"],
  difficulty: _difficulty__WEBPACK_IMPORTED_MODULE_4__["default"],
  credits: _credits__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/enemyReducer/name.js":
/*!*************************************************!*\
  !*** ./src/store/reducers/enemyReducer/name.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = '', {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_ENEMY"]:
      {
        return payload.name;
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/enemyReducer/programs.js":
/*!*****************************************************!*\
  !*** ./src/store/reducers/enemyReducer/programs.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_ENEMY"]:
      {
        return [...payload.programs];
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/gameReducer/index.js":
/*!*************************************************!*\
  !*** ./src/store/reducers/gameReducer/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen */ "./src/store/reducers/gameReducer/screen.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  screen: _screen__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/gameReducer/screen.js":
/*!**************************************************!*\
  !*** ./src/store/reducers/gameReducer/screen.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 'main', {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SWITCH_SCREEN_TO_MAIN_CONSOLE"]:
      return 'main';

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SWITCH_SCREEN_TO_RUN_CONSOLE"]:
      return 'run';

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SWITCH_TO_STORE_SCREEN"]:
      return 'store';

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _terminalReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminalReducer */ "./src/store/reducers/terminalReducer/index.js");
/* harmony import */ var _runTerminalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runTerminalReducer */ "./src/store/reducers/runTerminalReducer/index.js");
/* harmony import */ var _playerReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerReducer */ "./src/store/reducers/playerReducer/index.js");
/* harmony import */ var _enemyReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemyReducer */ "./src/store/reducers/enemyReducer/index.js");
/* harmony import */ var _gameReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameReducer */ "./src/store/reducers/gameReducer/index.js");
/* harmony import */ var _callStackReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callStackReducer */ "./src/store/reducers/callStackReducer/index.js");
/* harmony import */ var _timerReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timerReducer */ "./src/store/reducers/timerReducer/index.js");








/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  terminal: _terminalReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  runTerminal: _runTerminalReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  player: _playerReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  enemy: _enemyReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  game: _gameReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  callStack: _callStackReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  timer: _timerReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/playerReducer/credits.js":
/*!*****************************************************!*\
  !*** ./src/store/reducers/playerReducer/credits.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 0, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_PLAYER"]:
      return 5000;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_PLAYER_CREDITS"]:
      return state + payload;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_ITEMS"]:
      return state - payload.cost;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/playerReducer/firewallStrength.js":
/*!**************************************************************!*\
  !*** ./src/store/reducers/playerReducer/firewallStrength.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 0, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SWITCH_SCREEN_TO_RUN_CONSOLE"]:
      return payload;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["DAMAGE_PLAYER_FIREWALL"]:
      return state - payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/playerReducer/index.js":
/*!***************************************************!*\
  !*** ./src/store/reducers/playerReducer/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name */ "./src/store/reducers/playerReducer/name.js");
/* harmony import */ var _credits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credits */ "./src/store/reducers/playerReducer/credits.js");
/* harmony import */ var _programs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programs */ "./src/store/reducers/playerReducer/programs.js");
/* harmony import */ var _firewallStrength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firewallStrength */ "./src/store/reducers/playerReducer/firewallStrength.js");
/* harmony import */ var _maxPlayerHealth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maxPlayerHealth */ "./src/store/reducers/playerReducer/maxPlayerHealth.js");
/* harmony import */ var _memoryBuffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memoryBuffer */ "./src/store/reducers/playerReducer/memoryBuffer.js");







/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  name: _name__WEBPACK_IMPORTED_MODULE_1__["default"],
  credits: _credits__WEBPACK_IMPORTED_MODULE_2__["default"],
  firewallStrength: _firewallStrength__WEBPACK_IMPORTED_MODULE_4__["default"],
  maxPlayerHealth: _maxPlayerHealth__WEBPACK_IMPORTED_MODULE_5__["default"],
  programs: _programs__WEBPACK_IMPORTED_MODULE_3__["default"],
  memoryBuffer: _memoryBuffer__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/playerReducer/maxPlayerHealth.js":
/*!*************************************************************!*\
  !*** ./src/store/reducers/playerReducer/maxPlayerHealth.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 0, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_PLAYER"]:
      return 100;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_ITEMS"]:
      return payload.firewallBuff + state;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/playerReducer/memoryBuffer.js":
/*!**********************************************************!*\
  !*** ./src/store/reducers/playerReducer/memoryBuffer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 64, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_ITEMS"]:
      return state + payload.memoryBuff;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/playerReducer/name.js":
/*!**************************************************!*\
  !*** ./src/store/reducers/playerReducer/name.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = '', {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_PLAYER"]:
      return payload.name;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/playerReducer/programs.js":
/*!******************************************************!*\
  !*** ./src/store/reducers/playerReducer/programs.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_ITEMS"]:
      return [...state, ...payload.programs];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/runTerminalReducer/history.js":
/*!**********************************************************!*\
  !*** ./src/store/reducers/runTerminalReducer/history.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_RUN_TERMINAL_HISTORY"]:
      return [...state, payload];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/runTerminalReducer/index.js":
/*!********************************************************!*\
  !*** ./src/store/reducers/runTerminalReducer/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _terminalOutput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminalOutput */ "./src/store/reducers/runTerminalReducer/terminalOutput.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history */ "./src/store/reducers/runTerminalReducer/history.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  terminalOutput: _terminalOutput__WEBPACK_IMPORTED_MODULE_1__["default"],
  history: _history__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/runTerminalReducer/terminalOutput.js":
/*!*****************************************************************!*\
  !*** ./src/store/reducers/runTerminalReducer/terminalOutput.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_RUN_TERMINAL_DISPLAY"]:
      return [...state, payload];

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SWITCH_SCREEN_TO_RUN_CONSOLE"]:
      return [];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/terminalReducer/history.js":
/*!*******************************************************!*\
  !*** ./src/store/reducers/terminalReducer/history.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_TERMINAL_HISTORY"]:
      return [...state, payload];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/terminalReducer/index.js":
/*!*****************************************************!*\
  !*** ./src/store/reducers/terminalReducer/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _terminalOutput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminalOutput */ "./src/store/reducers/terminalReducer/terminalOutput.js");
/* harmony import */ var _isTerminalActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isTerminalActive */ "./src/store/reducers/terminalReducer/isTerminalActive.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history */ "./src/store/reducers/terminalReducer/history.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  terminalOutput: _terminalOutput__WEBPACK_IMPORTED_MODULE_1__["default"],
  isTerminalActive: _isTerminalActive__WEBPACK_IMPORTED_MODULE_2__["default"],
  history: _history__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/terminalReducer/isTerminalActive.js":
/*!****************************************************************!*\
  !*** ./src/store/reducers/terminalReducer/isTerminalActive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = true, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_TERMINAL_ACTIVE"]:
      return true;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_TERMINAL_INACTIVE"]:
      return false;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/terminalReducer/terminalOutput.js":
/*!**************************************************************!*\
  !*** ./src/store/reducers/terminalReducer/terminalOutput.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainScreen_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MainScreen/Intro */ "./src/components/MainScreen/Intro.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/store/reducers/terminalReducer/terminalOutput.js";




const initialState = [{
  output: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainScreen_Intro__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }),
  id: nanoid__WEBPACK_IMPORTED_MODULE_1___default.a
}];
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_TERMINAL_DISPLAY"]:
      return [...state, payload];

    case _actions__WEBPACK_IMPORTED_MODULE_3__["CLEAR_TERMINAL_DISPLAY"]:
      return [];

    case _actions__WEBPACK_IMPORTED_MODULE_3__["SWITCH_SCREEN_TO_MAIN_CONSOLE"]:
      return [];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducers/timerReducer/index.js":
/*!**************************************************!*\
  !*** ./src/store/reducers/timerReducer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = 59, {
  type,
  payload
}) => {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["TICK"]:
      return state - 1;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SWITCH_SCREEN_TO_RUN_CONSOLE"]:
      return 59;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/utils/colors.js":
/*!*****************************!*\
  !*** ./src/utils/colors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  darkPurple: '#090821',
  yellow: '#faff6d',
  red: '#ff2121',
  pink: '#fc2f70',
  blue: '#3cefff',
  gray: '#9d9d9d',
  green: '#12ef99'
});

/***/ }),

/***/ "./src/utils/commands.js":
/*!*******************************!*\
  !*** ./src/utils/commands.js ***!
  \*******************************/
/*! exports provided: echo, createRunner, clearTerminal, goShopping, error, executeRun, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echo", function() { return echo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRunner", function() { return createRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTerminal", function() { return clearTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goShopping", function() { return goShopping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeRun", function() { return executeRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony import */ var _Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors */ "./src/utils/colors.js");
/* harmony import */ var _data_enemyCorps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/enemyCorps */ "./src/data/enemyCorps.js");

var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/utils/commands.js";





const echo = args => {
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
    output: args.join(' '),
    color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
  }));
};
const createRunner = args => {
  const _store$getState = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState(),
        player = _store$getState.player;

  if (player.name) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
      output: 'you have already created a runner',
      color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
    }));
    return;
  }

  if (args.length === 0 || !args[0].trim()) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
      output: 'you must provide a name',
      color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
    }));
    return;
  }

  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["createPlayer"](args[0]));

  const _store$getState2 = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState(),
        newPlayer = _store$getState2.player;

  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
    output: "Welcome ".concat(newPlayer.name),
    color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
  }));
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
    output: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "run ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].pink
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, "shop"), " to buy your gear")
  }));
};
const clearTerminal = args => {
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["clearTerminalDisplay"]());
};
const goShopping = args => {
  const _store$getState3 = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState(),
        player = _store$getState3.player;

  if (!player.name) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
      output: 'you need to create a runner first',
      color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
    }));
    return;
  }

  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["switchScreenToStoreScreen"]());
};
const error = input => {
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
    output: "".concat(input, ": command not found"),
    color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
  }));
};
const executeRun = args => {
  const _store$getState4 = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState(),
        player = _store$getState4.player;

  const _args = Object(_Users_tcnb1_Desktop_projects_hack_net_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(args, 1),
        enemyCorp = _args[0];

  if (!player.name) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
      output: 'you need to create a runner first',
      color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
    }));
    return;
  }

  if (player.programs.length === 0) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
      output: 'you should buy some programs first',
      color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
    }));
    return;
  }

  const listOfEnemyCorps = Object.keys(_data_enemyCorps__WEBPACK_IMPORTED_MODULE_5__["default"]);

  if (!listOfEnemyCorps.includes(enemyCorp)) {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
      output: "That connection doesn't exist",
      color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
    }));
    return;
  }

  const firewallStrength = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().player.maxPlayerHealth;
  const memoryBuffer = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().player.memoryBuffer;
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["setBufferAmount"](memoryBuffer));
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["createEnemy"](_data_enemyCorps__WEBPACK_IMPORTED_MODULE_5__["default"][enemyCorp]));
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["switchScreenToRunConsole"](firewallStrength));
};
const show = args => {
  const _store$getState5 = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState(),
        player = _store$getState5.player;

  console.log(args);

  switch (args[0]) {
    case 'runner':
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
        output: player.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "runner: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: undefined
        }, player.name)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: undefined
        }, "you need to create a runner and give it a name"),
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
      }));
      break;

    case 'credits':
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
        output: !player.credits && !player.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: undefined
        }, "create a runner to gain credits") : "".concat(player.credits, " credits"),
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
      }));
      break;

    case 'memory':
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
        output: "you have ".concat(player.memoryBuffer, "kb of memory"),
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
      }));
      break;

    case 'programs':
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
        output: player.programs.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: undefined
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: undefined
        }, "programs:"), player.programs.map(program => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: "".concat(Date.now(), "-").concat(program),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: undefined
        }, program))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: undefined
        }, "you need to buy programs"),
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
      }));
      break;

    case 'firewall':
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
        output: player.maxPlayerHealth ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "firewall strength: ", player.maxPlayerHealth) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: undefined
        }, "you need create a runner to gain a firewall"),
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
      }));
      break;

    case 'all':
      [['runner'], ['credits'], ['memory'], ['programs'], ['firewall']].forEach(command => show(command));
      break;

    default:
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
        output: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: undefined
        }, "show [command]"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            marginLeft: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: undefined
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: undefined
        }, "commands:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: undefined
        }, "runner:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: undefined
        }, "displays the runner's name")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: undefined
        }, "credits:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: undefined
        }, "displays the number of credit the runner has")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: undefined
        }, "memory:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: undefined
        }, "displays the amount of memory the runner's rig has")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: undefined
        }, "programs:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: undefined
        }, "displays the programs the runner has available in a run")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: undefined
        }, "firewall:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: undefined
        }, "displays the strength of the runner's firewall")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: undefined
        }, "all:", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: undefined
        }, "shows all runner's stats")))),
        color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow
      }));
      return;
  }
};

/***/ }),

/***/ "./src/utils/gameController.js":
/*!*************************************!*\
  !*** ./src/utils/gameController.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors */ "./src/utils/colors.js");
/* harmony import */ var _components_RunScreen_Corp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RunScreen/Corp */ "./src/components/RunScreen/Corp.js");
/* harmony import */ var _components_MainScreen_EndGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainScreen/EndGame */ "./src/components/MainScreen/EndGame.js");
/* harmony import */ var _data_enemyPrograms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/enemyPrograms */ "./src/data/enemyPrograms.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/utils/gameController.js";







const difficulty = {
  easy: 10,
  medium: 7,
  hard: 4
};
/* harmony default export */ __webpack_exports__["default"] = ((time, initialTime) => {
  const _store$getState = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getState(),
        enemy = _store$getState.enemy,
        player = _store$getState.player;

  const enemyPrograms = _data_enemyPrograms__WEBPACK_IMPORTED_MODULE_6__["default"].filter(program => enemy.programs.includes(program.name));
  const difficultyLevel = difficulty[enemy.difficulty];

  if (time === initialTime) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["addToRunTerminalDisplay"]({
      output: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RunScreen_Corp__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: enemy.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: undefined
      })
    }));
  }

  if (time === 1) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["switchScreenToMainConsole"]());
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["addToTerminalDisplay"]({
      output: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainScreen_EndGame__WEBPACK_IMPORTED_MODULE_5__["default"], {
        condition: 'OUT_OF_TIME',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: undefined
      }),
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].red
    }));
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["setTerminalInactive"]());
  }

  if ((time - 1) % difficultyLevel === 0) {
    const length = enemyPrograms.length;
    const enemyProgramIndex = Math.floor(Math.random() * length);
    enemyPrograms[enemyProgramIndex].program(12);
  }

  if (player.firewallStrength <= 0) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["switchScreenToMainConsole"]());
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["addToTerminalDisplay"]({
      output: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainScreen_EndGame__WEBPACK_IMPORTED_MODULE_5__["default"], {
        condition: 'OUT_OF_HEALTH',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: undefined
      }),
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].red
    }));
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["setTerminalInactive"]());
  }

  if (enemy.firewallStrength <= 0) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["switchScreenToMainConsole"]());
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["addToPlayerCredits"](enemy.credits));
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["clearCallStack"]());
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["addToTerminalDisplay"]({
      output: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainScreen_EndGame__WEBPACK_IMPORTED_MODULE_5__["default"], {
        condition: 'WIN',
        loot: enemy.credits,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: undefined
      }),
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue
    }));
  }
});

/***/ }),

/***/ "./src/utils/runCommands.js":
/*!**********************************!*\
  !*** ./src/utils/runCommands.js ***!
  \**********************************/
/*! exports provided: error, main, execCounterIce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execCounterIce", function() { return execCounterIce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors */ "./src/utils/colors.js");
/* harmony import */ var _components_RunScreen_TimeToExecuteCountdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RunScreen/TimeToExecuteCountdown */ "./src/components/RunScreen/TimeToExecuteCountdown.js");
/* harmony import */ var _data_playerPrograms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/playerPrograms */ "./src/data/playerPrograms.js");
var _jsxFileName = "/Users/tcnb1/Desktop/projects/hack-net/src/utils/runCommands.js";








const printScreen = (output, color = _colors__WEBPACK_IMPORTED_MODULE_4__["default"].blue) => {
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToRunTerminalDisplay"]({
    output,
    color
  }));
};

const runProgram = program => {
  const buffer = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().callStack.buffer;

  if (buffer - program.memRequired < 0) {
    printScreen("not enough memory for ".concat(program.name), _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red);
    return;
  }

  printScreen("executing ".concat(program.name, "..."), _colors__WEBPACK_IMPORTED_MODULE_4__["default"].yellow);
  const id = nanoid__WEBPACK_IMPORTED_MODULE_1___default()();
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToCallStack"]({
    id,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RunScreen_TimeToExecuteCountdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      program: program,
      id: id,
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }),
    memRequired: program.memRequired
  }));
};

const error = args => {
  printScreen('invalid command', _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red);
};
const main = args => {
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["switchScreenToMainConsole"]());
  _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_3__["addToTerminalDisplay"]({
    output: 'connection lost...',
    color: _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red
  }));
};
const execCounterIce = input => {
  if (!input) {
    return;
  }

  const program = _data_playerPrograms__WEBPACK_IMPORTED_MODULE_6__["default"].find(program => program.name === input);

  if (!program) {
    printScreen("".concat(input, ": command not found"), _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red);
    return;
  }

  const playerPrograms = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().player.programs;
  console.log(playerPrograms);
  const playerHasProgram = playerPrograms.includes(program.name);

  if (!playerHasProgram) {
    printScreen("".concat(input, ": command not found"), _colors__WEBPACK_IMPORTED_MODULE_4__["default"].red);
    return;
  }

  runProgram(program);
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tcnb1/Desktop/projects/hack-net/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/tcnb1/Desktop/projects/hack-net/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map