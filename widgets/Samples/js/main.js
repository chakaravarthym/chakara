/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apps/samples/SamplesCards.widget.js":
/*!*************************************************!*\
  !*** ./src/apps/samples/SamplesCards.widget.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

module.exports = {
  entry: './src/apps/samples/index.tsx',
  shortcode: 'Samples',
  title: 'Banner Cards',
  status: 'stable',
  description: 'Incredible banner trading cards',
  preview: {
    url: `${"/js-widgets/registry-starterkit-reac"}/storybook/iframe.html?id=widgets-emoji-cards-components--cat&viewMode=story`
  },
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
  additionalCustomProperties: {
    availableTranslations: ['ar', 'de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'tr', 'zh']
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/apps/samples/components/SamplesCards.tsx":
/*!******************************************************!*\
  !*** ./src/apps/samples/components/SamplesCards.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/273481/Downloads/registry-starterkit-react-development/src/apps/samples/components/SamplesCards.tsx";


const styles = {
  card: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1)',
    fontFamily: 'helvetica, sans-serif',
    overflow: 'hidden',
    maxWidth: '63rem',
    height: '26rem',
    position: 'relative',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    wordWrap: 'break-word'
  },
  cardContainer: {
    background: 'rgba(0, 0, 0, 0.1)',
    fontSize: '8rem',
    justifyContent: 'center',
    lineHeight: '100%',
    overflow: 'hidden',
    position: 'absolute',
    padding: '1rem',
    width: '100%',
    height: '100%'
  },
  cardInfo: {
    background: 'rgba(0, 0, 0, 0.01)',
    color: 'rgba(0, 0, 0, 0.6)',
    padding: '1rem'
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: '2rem'
  },
  cardDescription: {
    fontSize: '1.25rem',
    padding: '1rem 0'
  },
  cardCategory: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    textAlign: 'right'
  }
};
const SamplesCards = ({
  heading,
  title,
  textColor,
  backgroundColor,
  imgPath
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  style: {
    ...styles.card,
    backgroundImage: `url(${imgPath})`,
    backgroundColor
  },
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: styles.cardInfo,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      style: {
        ...styles.cardName,
        color: textColor
      },
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        ...styles.cardDescription,
        color: textColor
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 62,
  columnNumber: 3
}, undefined);
_c = SamplesCards;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SamplesCards);
var _c;
__webpack_require__.$Refresh$.register(_c, "SamplesCards");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/apps/samples/index.tsx":
/*!************************************!*\
  !*** ./src/apps/samples/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_normalizeWidgetInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/normalizeWidgetInput */ "./src/common/normalizeWidgetInput.ts");
/* harmony import */ var _components_SamplesCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SamplesCards */ "./src/apps/samples/components/SamplesCards.tsx");
/* harmony import */ var _SamplesCards_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SamplesCards.widget */ "./src/apps/samples/SamplesCards.widget.js");
/* harmony import */ var _SamplesCards_widget__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SamplesCards_widget__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");








const render = async function (instanceId, langCode, origin, cb) {
  const {
    element,
    locale,
    messages
  } = await (0,_common_normalizeWidgetInput__WEBPACK_IMPORTED_MODULE_3__["default"])(instanceId, langCode, (_SamplesCards_widget__WEBPACK_IMPORTED_MODULE_5___default()));
  if (!element || !locale) {
    return;
  }
  react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {
    locale: locale,
    messages: messages,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SamplesCards__WEBPACK_IMPORTED_MODULE_4__["default"], {})
  }), element, () => cb(element));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/common/locale/fetchTranslationMessages.ts":
/*!*******************************************************!*\
  !*** ./src/common/locale/fetchTranslationMessages.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/locale */ "./src/types/locale.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const fetchTranslationMessages = async (widgetId, langCode) => {
  const locale = langCode;
  // We don't want to do the extra fetching for English since it's the default.
  if (locale === _types_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.EN) {
    return {};
  }
  try {
    // This relies on the CRA convention for PUBLIC_URL.
    const response = await window.fetch(`${"/js-widgets/registry-starterkit-reac"}/translations/${widgetId}/${locale}.json`);
    return response.json();
  } catch (e) {
    // If something went wrong do not fail the widget, use the default language.
    return {};
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTranslationMessages);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/common/normalizeWidgetInput.ts":
/*!********************************************!*\
  !*** ./src/common/normalizeWidgetInput.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseUserInput: () => (/* binding */ parseUserInput)
/* harmony export */ });
/* harmony import */ var lodash_camelcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.camelcase */ "./node_modules/lodash.camelcase/index.js");
/* harmony import */ var lodash_camelcase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelcase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_fetchTranslationMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale/fetchTranslationMessages */ "./src/common/locale/fetchTranslationMessages.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



async function normalizeWidgetInput(instanceId, langCode, widgetDefinition, refineInputTypes) {
  let element = document.getElementById(instanceId);
  element ||= new HTMLElement();
  const widgetId = widgetDefinition.shortcode;
  const palette = element.getAttribute('data-palette');
  const messages = await (0,_locale_fetchTranslationMessages__WEBPACK_IMPORTED_MODULE_1__["default"])(widgetId, langCode);
  const rawParams = parseUserInput(widgetDefinition, element);
  // If there is no refinement needed it may mean that the raw params parse
  // directly into T, or that there are no params.
  const params = refineInputTypes ? refineInputTypes(rawParams) : rawParams;
  return {
    element,
    locale: langCode,
    palette,
    messages,
    params
  };
}
function parseUserInput(widgetDefinition, element) {
  var _widgetDefinition$set, _widgetDefinition$set2, _widgetDefinition$set3;
  // First we need to know what are the input options.
  const schemaProps = (widgetDefinition === null || widgetDefinition === void 0 ? void 0 : (_widgetDefinition$set = widgetDefinition.settingsSchema) === null || _widgetDefinition$set === void 0 ? void 0 : (_widgetDefinition$set2 = _widgetDefinition$set.properties) === null || _widgetDefinition$set2 === void 0 ? void 0 : (_widgetDefinition$set3 = _widgetDefinition$set2.fields) === null || _widgetDefinition$set3 === void 0 ? void 0 : _widgetDefinition$set3.properties) || {};
  const propNames = Object.keys(schemaProps);
  return propNames.reduce((params, propName) => ({
    ...params,
    [lodash_camelcase__WEBPACK_IMPORTED_MODULE_0___default()(propName)]: parseValue(propName, element, (schemaProps === null || schemaProps === void 0 ? void 0 : schemaProps[propName]) || {
      type: 'null'
    })
  }), {});
}
function parseValue(propName, element, {
  type
}) {
  type ||= 'null';
  let attribute = element.getAttribute(`data-${propName}`);
  if (type === 'string') {
    attribute ||= '';
    return attribute;
  }
  if (type === 'number') {
    attribute ||= '0';
    return attribute.includes('.') ? parseFloat(attribute) : parseInt(attribute, 10);
  }
  if (type === 'null') {
    return null;
  }
  if (type === 'boolean') {
    attribute ||= '0';
    // The CMS encodes booleans as '0' and '1'.
    return attribute !== '0';
  }
  attribute ||= 'null';
  return JSON.parse(attribute);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizeWidgetInput);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/types/locale.ts":
/*!*****************************!*\
  !*** ./src/types/locale.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Locale: () => (/* binding */ Locale)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

let Locale = /*#__PURE__*/function (Locale) {
  Locale["AR"] = "ar";
  Locale["DE"] = "de";
  Locale["EN"] = "en";
  Locale["ES"] = "es";
  Locale["FR"] = "fr";
  Locale["IT"] = "it";
  Locale["JA"] = "ja";
  Locale["KO"] = "ko";
  Locale["PL"] = "pl";
  Locale["PT"] = "pt";
  Locale["RU"] = "ru";
  Locale["TR"] = "tr";
  Locale["ZH"] = "zh";
  return Locale;
}({});
const availableLangcodes = [Locale.AR, Locale.DE, Locale.EN, Locale.ES, Locale.FR, Locale.IT, Locale.JA, Locale.KO, Locale.PL, Locale.PT, Locale.RU, Locale.TR, Locale.ZH];

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: \"process.env.BABEL_ENV || process.env.NODE_ENV\". (While processing: \"/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js\")\n    at module.exports (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js:54:11)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:36:33)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:186:15)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:181:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:7)\n    at errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:66:18)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:293:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:77:31)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:157:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:113:5)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/transform.js:20:44)\n    at transform.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:189:28\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:33\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:287:14)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "./node_modules/lodash.camelcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.camelcase/index.js ***!
  \************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/273481/Downloads/registry-starterkit-react-development/node_modules/lodash.camelcase/index.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: \"process.env.BABEL_ENV || process.env.NODE_ENV\". (While processing: \"/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js\")\n    at module.exports (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js:54:11)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:36:33)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:186:15)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:181:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:7)\n    at errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:66:18)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:293:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:77:31)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:157:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:113:5)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/transform.js:20:44)\n    at transform.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:189:28\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:33\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:287:14)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/273481/Downloads/registry-starterkit-react-development/node_modules/react-refresh/runtime.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: \"process.env.BABEL_ENV || process.env.NODE_ENV\". (While processing: \"/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js\")\n    at module.exports (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js:54:11)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:36:33)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:186:15)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:181:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:7)\n    at errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:66:18)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:293:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:77:31)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:157:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:113:5)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/transform.js:20:44)\n    at transform.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:189:28\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:33\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:287:14)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/273481/Downloads/registry-starterkit-react-development/node_modules/react/jsx-dev-runtime.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: \"process.env.BABEL_ENV || process.env.NODE_ENV\". (While processing: \"/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js\")\n    at module.exports (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js:54:11)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:36:33)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:186:15)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:181:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:7)\n    at errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:66:18)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:293:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:77:31)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:157:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:113:5)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/transform.js:20:44)\n    at transform.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:189:28\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:33\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:287:14)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/273481/Downloads/registry-starterkit-react-development/node_modules/react/jsx-runtime.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: \"process.env.BABEL_ENV || process.env.NODE_ENV\". (While processing: \"/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js\")\n    at module.exports (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js:54:11)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:36:33)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:186:15)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:181:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:7)\n    at errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:66:18)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:293:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:77:31)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:157:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:113:5)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/transform.js:20:44)\n    at transform.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:189:28\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:33\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:287:14)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:37:40");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "react-intl":
/*!****************************!*\
  !*** external "ReactIntl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactIntl"];

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: \"process.env.BABEL_ENV || process.env.NODE_ENV\". (While processing: \"/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js\")\n    at module.exports (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/babel-preset-react-app/dependencies.js:54:11)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:36:33)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:186:15)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13\n    at Generator.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:181:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\n    at Generator.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at evaluateAsync (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:291:5)\n    at Function.errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:7)\n    at errback (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:66:18)\n    at async (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:188:17)\n    at onFirstPause (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/caching.js:52:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:293:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:77:31)\n    at recursePresetDescriptors.next (<anonymous>)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:157:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/config/full.js:113:5)\n    at loadFullConfig.next (<anonymous>)\n    at transform (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/transform.js:20:44)\n    at transform.next (<anonymous>)\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:269:25)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:189:28\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:113:33\n    at step (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:287:14)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:223:11)\n    at /Users/273481/Downloads/registry-starterkit-react-development/node_modules/gensync/index.js:37:40");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = function (moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.setup(options.id);
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					if (typeof Promise !== 'undefined' && moduleObject.exports instanceof Promise) {
/******/ 						options.module.exports = options.module.exports.then(
/******/ 							(result) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return result;
/******/ 							},
/******/ 							(reason) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return Promise.reject(reason);
/******/ 							}
/******/ 						);
/******/ 					} else {
/******/ 						__webpack_require__.$Refresh$.cleanup(options.id)
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			register: () => (undefined),
/******/ 			signature: () => ((type) => (type)),
/******/ 			runtime: {
/******/ 				createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 				register: () => (undefined)
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				const prevModuleId = __webpack_require__.$Refresh$.moduleId;
/******/ 				const prevRegister = __webpack_require__.$Refresh$.register;
/******/ 				const prevSignature = __webpack_require__.$Refresh$.signature;
/******/ 				const prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.moduleId = currentModuleId;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					const typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = () => (__webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform());
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.moduleId = prevModuleId;
/******/ 						__webpack_require__.$Refresh$.register = prevRegister;
/******/ 						__webpack_require__.$Refresh$.signature = prevSignature;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apps/samples/index.tsx");
/******/ 	window.renderSamples = __webpack_exports__["default"];
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSxDQUFDOztXQUVEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRXhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3NyYy9hcHBzL3NhbXBsZXMvU2FtcGxlc0NhcmRzLndpZGdldC5qcyIsIi9Vc2Vycy8yNzM0ODEvRG93bmxvYWRzL3JlZ2lzdHJ5LXN0YXJ0ZXJraXQtcmVhY3QtZGV2ZWxvcG1lbnQvc3JjL2FwcHMvc2FtcGxlcy9jb21wb25lbnRzL1NhbXBsZXNDYXJkcy50c3giLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3NyYy9hcHBzL3NhbXBsZXMvaW5kZXgudHN4IiwiL1VzZXJzLzI3MzQ4MS9Eb3dubG9hZHMvcmVnaXN0cnktc3RhcnRlcmtpdC1yZWFjdC1kZXZlbG9wbWVudC9zcmMvY29tbW9uL2xvY2FsZS9mZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMudHMiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3NyYy9jb21tb24vbm9ybWFsaXplV2lkZ2V0SW5wdXQudHMiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3NyYy90eXBlcy9sb2NhbGUudHMiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0RE9NXCIiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0SW50bFwiIiwiL1VzZXJzLzI3MzQ4MS9Eb3dubG9hZHMvcmVnaXN0cnktc3RhcnRlcmtpdC1yZWFjdC1kZXZlbG9wbWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIi9Vc2Vycy8yNzM0ODEvRG93bmxvYWRzL3JlZ2lzdHJ5LXN0YXJ0ZXJraXQtcmVhY3QtZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIi9Vc2Vycy8yNzM0ODEvRG93bmxvYWRzL3JlZ2lzdHJ5LXN0YXJ0ZXJraXQtcmVhY3QtZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIi9Vc2Vycy8yNzM0ODEvRG93bmxvYWRzL3JlZ2lzdHJ5LXN0YXJ0ZXJraXQtcmVhY3QtZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIi9Vc2Vycy8yNzM0ODEvRG93bmxvYWRzL3JlZ2lzdHJ5LXN0YXJ0ZXJraXQtcmVhY3QtZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL3JlYWN0IHJlZnJlc2giLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCIvVXNlcnMvMjczNDgxL0Rvd25sb2Fkcy9yZWdpc3RyeS1zdGFydGVya2l0LXJlYWN0LWRldmVsb3BtZW50L3dlYnBhY2svc3RhcnR1cCIsIi9Vc2Vycy8yNzM0ODEvRG93bmxvYWRzL3JlZ2lzdHJ5LXN0YXJ0ZXJraXQtcmVhY3QtZGV2ZWxvcG1lbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeTogJy4vc3JjL2FwcHMvc2FtcGxlcy9pbmRleC50c3gnLFxuICBzaG9ydGNvZGU6ICdTYW1wbGVzJyxcbiAgdGl0bGU6ICdCYW5uZXIgQ2FyZHMnLFxuICBzdGF0dXM6ICdzdGFibGUnLFxuICBkZXNjcmlwdGlvbjogJ0luY3JlZGlibGUgYmFubmVyIHRyYWRpbmcgY2FyZHMnLFxuICBwcmV2aWV3OiB7XG4gICAgdXJsOiBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zdG9yeWJvb2svaWZyYW1lLmh0bWw/aWQ9d2lkZ2V0cy1lbW9qaS1jYXJkcy1jb21wb25lbnRzLS1jYXQmdmlld01vZGU9c3RvcnlgLFxuICB9LFxuICB1c2VFeHRlcm5hbFBlZXJEZXBlbmRlbmNpZXM6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LWludGwnXSxcblxuICBhZGRpdGlvbmFsQ3VzdG9tUHJvcGVydGllczoge1xuICAgIGF2YWlsYWJsZVRyYW5zbGF0aW9uczogW1xuICAgICAgJ2FyJyxcbiAgICAgICdkZScsXG4gICAgICAnZW4nLFxuICAgICAgJ2VzJyxcbiAgICAgICdmcicsXG4gICAgICAnaXQnLFxuICAgICAgJ2phJyxcbiAgICAgICdrbycsXG4gICAgICAncGwnLFxuICAgICAgJ3B0JyxcbiAgICAgICdydScsXG4gICAgICAndHInLFxuICAgICAgJ3poJyxcbiAgICBdLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzLCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgaW1nUGF0aDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IHN0cmluZztcbn1cbmNvbnN0IHN0eWxlczogUmVjb3JkPHN0cmluZywgQ1NTUHJvcGVydGllcz4gPSB7XG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXG4gICAgYm94U2hhZG93OiAnMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgZm9udEZhbWlseTogJ2hlbHZldGljYSwgc2Fucy1zZXJpZicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1heFdpZHRoOiAnNjNyZW0nLFxuICAgIGhlaWdodDogJzI2cmVtJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIH0sXG4gIGNhcmRDb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgICBmb250U2l6ZTogJzhyZW0nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBsaW5lSGVpZ2h0OiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBjYXJkSW5mbzoge1xuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDEpJyxcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgcGFkZGluZzogJzFyZW0nLFxuICB9LFxuICBjYXJkTmFtZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogJzJyZW0nLFxuICB9LFxuICBjYXJkRGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICB9LFxuICBjYXJkQ2F0ZWdvcnk6IHtcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgZm9udFNpemU6ICcwLjg1cmVtJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gIH0sXG59O1xuXG5jb25zdCBTYW1wbGVzQ2FyZHMgPSAoe1xuICBoZWFkaW5nLFxuICB0aXRsZSxcbiAgdGV4dENvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIGltZ1BhdGgsXG59OiBDYXJkUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIC4uLnN0eWxlcy5jYXJkLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1nUGF0aH0pYCxcbiAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICB9fVxuICA+XG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRJbmZvfT5cbiAgICAgIDxoMSBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZE5hbWUsIGNvbG9yOiB0ZXh0Q29sb3IgfX0+e2hlYWRpbmd9PC9oMT5cbiAgICAgIDxwIHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkRGVzY3JpcHRpb24sIGNvbG9yOiB0ZXh0Q29sb3IgfX0+e3RpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVzQ2FyZHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBub3JtYWxpemVXaWRnZXRJbnB1dCBmcm9tICcuLi8uLi9jb21tb24vbm9ybWFsaXplV2lkZ2V0SW5wdXQnO1xuaW1wb3J0IFNhbXBsZXNDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvU2FtcGxlc0NhcmRzJztcbmltcG9ydCB3aWRnZXREZWZpbml0aW9uIGZyb20gJy4vU2FtcGxlc0NhcmRzLndpZGdldCc7XG5pbXBvcnQgeyBSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3R5cGVzL3dpZGdldHMnO1xuXG5jb25zdCByZW5kZXI6IFJlbmRlckZuID0gYXN5bmMgZnVuY3Rpb24gKGluc3RhbmNlSWQsIGxhbmdDb2RlLCBvcmlnaW4sIGNiKSB7XG4gIGNvbnN0IHsgZWxlbWVudCwgbG9jYWxlLCBtZXNzYWdlcyB9ID0gYXdhaXQgbm9ybWFsaXplV2lkZ2V0SW5wdXQoXG4gICAgaW5zdGFuY2VJZCxcbiAgICBsYW5nQ29kZSxcbiAgICB3aWRnZXREZWZpbml0aW9uLFxuICApO1xuICBpZiAoIWVsZW1lbnQgfHwgIWxvY2FsZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9e2xvY2FsZX0gbWVzc2FnZXM9e21lc3NhZ2VzfT5cbiAgICAgIDxTYW1wbGVzQ2FyZHMgLz5cbiAgICA8L0ludGxQcm92aWRlcj4sXG4gICAgZWxlbWVudCxcbiAgICAoKSA9PiBjYihlbGVtZW50KSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uL3R5cGVzL2xvY2FsZSc7XG5pbXBvcnQgeyBSZXNvbHZlZEludGxDb25maWcgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzID0gYXN5bmMgKFxuICB3aWRnZXRJZDogc3RyaW5nLFxuICBsYW5nQ29kZTogc3RyaW5nLFxuKTogUHJvbWlzZTxSZXNvbHZlZEludGxDb25maWdbJ21lc3NhZ2VzJ10+ID0+IHtcbiAgY29uc3QgbG9jYWxlID0gbGFuZ0NvZGUgYXMgTG9jYWxlO1xuICAvLyBXZSBkb24ndCB3YW50IHRvIGRvIHRoZSBleHRyYSBmZXRjaGluZyBmb3IgRW5nbGlzaCBzaW5jZSBpdCdzIHRoZSBkZWZhdWx0LlxuICBpZiAobG9jYWxlID09PSBMb2NhbGUuRU4pIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHJlbGllcyBvbiB0aGUgQ1JBIGNvbnZlbnRpb24gZm9yIFBVQkxJQ19VUkwuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goXG4gICAgICBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS90cmFuc2xhdGlvbnMvJHt3aWRnZXRJZH0vJHtsb2NhbGV9Lmpzb25gLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElmIHNvbWV0aGluZyB3ZW50IHdyb25nIGRvIG5vdCBmYWlsIHRoZSB3aWRnZXQsIHVzZSB0aGUgZGVmYXVsdCBsYW5ndWFnZS5cbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoVHJhbnNsYXRpb25NZXNzYWdlcztcbiIsImltcG9ydCBjYW1lbGl6ZSBmcm9tICdsb2Rhc2guY2FtZWxjYXNlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL3R5cGVzL2xvY2FsZSc7XG5pbXBvcnQgZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzIGZyb20gJy4vbG9jYWxlL2ZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyc7XG5pbXBvcnQgeyBSZXNvbHZlZEludGxDb25maWcgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gJy4uL3R5cGVzL2Rpc3BsYXlzJztcbmltcG9ydCB7IFNjaGVtYUxpdGUsIFdpZGdldERlZmluaXRpb24gfSBmcm9tICcuLi90eXBlcy93aWRnZXRzJztcblxuZXhwb3J0IHR5cGUgTm9ybWFsaXplZFdpZGdldElucHV0PFQ+ID0gUGFydGlhbDx7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBsb2NhbGU6IExvY2FsZTtcbiAgbWVzc2FnZXM6IFJlc29sdmVkSW50bENvbmZpZ1snbWVzc2FnZXMnXTtcbiAgcGFsZXR0ZTogVGhlbWVzO1xufT4gJiB7IHBhcmFtczogVCB9O1xuXG5hc3luYyBmdW5jdGlvbiBub3JtYWxpemVXaWRnZXRJbnB1dDxUPihcbiAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICBsYW5nQ29kZTogc3RyaW5nLFxuICB3aWRnZXREZWZpbml0aW9uOiBXaWRnZXREZWZpbml0aW9uLFxuICByZWZpbmVJbnB1dFR5cGVzPzogKGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gVCxcbik6IFByb21pc2U8Tm9ybWFsaXplZFdpZGdldElucHV0PFQ+PiB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zdGFuY2VJZCk7XG4gIGVsZW1lbnQgfHw9IG5ldyBIVE1MRWxlbWVudCgpO1xuICBjb25zdCB3aWRnZXRJZCA9IHdpZGdldERlZmluaXRpb24uc2hvcnRjb2RlO1xuICBjb25zdCBwYWxldHRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFsZXR0ZScpIGFzIFRoZW1lcztcbiAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBmZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMod2lkZ2V0SWQsIGxhbmdDb2RlKTtcbiAgY29uc3QgcmF3UGFyYW1zID0gcGFyc2VVc2VySW5wdXQod2lkZ2V0RGVmaW5pdGlvbiwgZWxlbWVudCk7XG4gIC8vIElmIHRoZXJlIGlzIG5vIHJlZmluZW1lbnQgbmVlZGVkIGl0IG1heSBtZWFuIHRoYXQgdGhlIHJhdyBwYXJhbXMgcGFyc2VcbiAgLy8gZGlyZWN0bHkgaW50byBULCBvciB0aGF0IHRoZXJlIGFyZSBubyBwYXJhbXMuXG4gIGNvbnN0IHBhcmFtcyA9IHJlZmluZUlucHV0VHlwZXNcbiAgICA/IHJlZmluZUlucHV0VHlwZXMocmF3UGFyYW1zKVxuICAgIDogKHJhd1BhcmFtcyBhcyBUKTtcbiAgcmV0dXJuIHsgZWxlbWVudCwgbG9jYWxlOiBsYW5nQ29kZSBhcyBMb2NhbGUsIHBhbGV0dGUsIG1lc3NhZ2VzLCBwYXJhbXMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXNlcklucHV0KFxuICB3aWRnZXREZWZpbml0aW9uOiBXaWRnZXREZWZpbml0aW9uLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgLy8gRmlyc3Qgd2UgbmVlZCB0byBrbm93IHdoYXQgYXJlIHRoZSBpbnB1dCBvcHRpb25zLlxuICBjb25zdCBzY2hlbWFQcm9wcyA9XG4gICAgd2lkZ2V0RGVmaW5pdGlvbj8uc2V0dGluZ3NTY2hlbWE/LnByb3BlcnRpZXM/LmZpZWxkcz8ucHJvcGVydGllcyB8fCB7fTtcbiAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hUHJvcHMpO1xuICByZXR1cm4gcHJvcE5hbWVzLnJlZHVjZShcbiAgICAocGFyYW1zLCBwcm9wTmFtZTogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4gKHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIFtjYW1lbGl6ZShwcm9wTmFtZSldOiBwYXJzZVZhbHVlKFxuICAgICAgICBwcm9wTmFtZSxcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgc2NoZW1hUHJvcHM/Lltwcm9wTmFtZV0gfHwgeyB0eXBlOiAnbnVsbCcgfSxcbiAgICAgICksXG4gICAgfSksXG4gICAge30sXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUoXG4gIHByb3BOYW1lOiBzdHJpbmcsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB7IHR5cGUgfTogU2NoZW1hTGl0ZSxcbik6IGFueSB7XG4gIHR5cGUgfHw9ICdudWxsJztcbiAgbGV0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7cHJvcE5hbWV9YCk7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGF0dHJpYnV0ZSB8fD0gJyc7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICBhdHRyaWJ1dGUgfHw9ICcwJztcbiAgICByZXR1cm4gYXR0cmlidXRlLmluY2x1ZGVzKCcuJylcbiAgICAgID8gcGFyc2VGbG9hdChhdHRyaWJ1dGUpXG4gICAgICA6IHBhcnNlSW50KGF0dHJpYnV0ZSwgMTApO1xuICB9XG4gIGlmICh0eXBlID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgYXR0cmlidXRlIHx8PSAnMCc7XG4gICAgLy8gVGhlIENNUyBlbmNvZGVzIGJvb2xlYW5zIGFzICcwJyBhbmQgJzEnLlxuICAgIHJldHVybiBhdHRyaWJ1dGUgIT09ICcwJztcbiAgfVxuICBhdHRyaWJ1dGUgfHw9ICdudWxsJztcbiAgcmV0dXJuIEpTT04ucGFyc2UoYXR0cmlidXRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbm9ybWFsaXplV2lkZ2V0SW5wdXQ7XG4iLCJleHBvcnQgZW51bSBMb2NhbGUge1xuICBBUiA9ICdhcicsXG4gIERFID0gJ2RlJyxcbiAgRU4gPSAnZW4nLFxuICBFUyA9ICdlcycsXG4gIEZSID0gJ2ZyJyxcbiAgSVQgPSAnaXQnLFxuICBKQSA9ICdqYScsXG4gIEtPID0gJ2tvJyxcbiAgUEwgPSAncGwnLFxuICBQVCA9ICdwdCcsXG4gIFJVID0gJ3J1JyxcbiAgVFIgPSAndHInLFxuICBaSCA9ICd6aCcsXG59XG5cbmNvbnN0IGF2YWlsYWJsZUxhbmdjb2RlczogTG9jYWxlW10gPSBbXG4gIExvY2FsZS5BUixcbiAgTG9jYWxlLkRFLFxuICBMb2NhbGUuRU4sXG4gIExvY2FsZS5FUyxcbiAgTG9jYWxlLkZSLFxuICBMb2NhbGUuSVQsXG4gIExvY2FsZS5KQSxcbiAgTG9jYWxlLktPLFxuICBMb2NhbGUuUEwsXG4gIExvY2FsZS5QVCxcbiAgTG9jYWxlLlJVLFxuICBMb2NhbGUuVFIsXG4gIExvY2FsZS5aSCxcbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RET01cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdEludGxcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaCgob3B0aW9ucykgPT4ge1xuXHRjb25zdCBvcmlnaW5hbEZhY3RvcnkgPSBvcHRpb25zLmZhY3Rvcnk7XG5cdG9wdGlvbnMuZmFjdG9yeSA9IGZ1bmN0aW9uIChtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuc2V0dXAob3B0aW9ucy5pZCk7XG5cdFx0dHJ5IHtcblx0XHRcdG9yaWdpbmFsRmFjdG9yeS5jYWxsKHRoaXMsIG1vZHVsZU9iamVjdCwgbW9kdWxlRXhwb3J0cywgd2VicGFja1JlcXVpcmUpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZU9iamVjdC5leHBvcnRzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRvcHRpb25zLm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucy5tb2R1bGUuZXhwb3J0cy50aGVuKFxuXHRcdFx0XHRcdChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAob3B0aW9ucy5pZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KHJlYXNvbikgPT4ge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cChvcHRpb25zLmlkKTtcblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAob3B0aW9ucy5pZClcblx0XHRcdH1cblx0XHR9XG5cdH07XG59KVxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJCA9IHtcblx0cmVnaXN0ZXI6ICgpID0+ICh1bmRlZmluZWQpLFxuXHRzaWduYXR1cmU6ICgpID0+ICgodHlwZSkgPT4gKHR5cGUpKSxcblx0cnVudGltZToge1xuXHRcdGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtOiAoKSA9PiAoKHR5cGUpID0+ICh0eXBlKSksXG5cdFx0cmVnaXN0ZXI6ICgpID0+ICh1bmRlZmluZWQpXG5cdH0sXG5cdHNldHVwOiAoY3VycmVudE1vZHVsZUlkKSA9PiB7XG5cdFx0Y29uc3QgcHJldk1vZHVsZUlkID0gX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQubW9kdWxlSWQ7XG5cdFx0Y29uc3QgcHJldlJlZ2lzdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucmVnaXN0ZXI7XG5cdFx0Y29uc3QgcHJldlNpZ25hdHVyZSA9IF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNpZ25hdHVyZTtcblx0XHRjb25zdCBwcmV2Q2xlYW51cCA9IF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXA7XG5cblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5tb2R1bGVJZCA9IGN1cnJlbnRNb2R1bGVJZDtcblxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnJlZ2lzdGVyID0gKHR5cGUsIGlkKSA9PiB7XG5cdFx0XHRjb25zdCB0eXBlSWQgPSBjdXJyZW50TW9kdWxlSWQgKyBcIiBcIiArIGlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucnVudGltZS5yZWdpc3Rlcih0eXBlLCB0eXBlSWQpO1xuXHRcdH1cblxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNpZ25hdHVyZSA9ICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5ydW50aW1lLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKCkpO1xuXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cCA9IChjbGVhbnVwTW9kdWxlSWQpID0+IHtcblx0XHRcdGlmIChjdXJyZW50TW9kdWxlSWQgPT09IGNsZWFudXBNb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5tb2R1bGVJZCA9IHByZXZNb2R1bGVJZDtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucmVnaXN0ZXIgPSBwcmV2UmVnaXN0ZXI7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNpZ25hdHVyZSA9IHByZXZTaWduYXR1cmU7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAgPSBwcmV2Q2xlYW51cDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy9AcG1tbXdoL3JlYWN0LXJlZnJlc2gtd2VicGFjay1wbHVnaW4vY2xpZW50L1JlYWN0UmVmcmVzaEVudHJ5LmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwcy9zYW1wbGVzL2luZGV4LnRzeFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW50cnkiLCJzaG9ydGNvZGUiLCJ0aXRsZSIsInN0YXR1cyIsImRlc2NyaXB0aW9uIiwicHJldmlldyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwidXNlRXh0ZXJuYWxQZWVyRGVwZW5kZW5jaWVzIiwiYWRkaXRpb25hbEN1c3RvbVByb3BlcnRpZXMiLCJhdmFpbGFibGVUcmFuc2xhdGlvbnMiLCJSZWFjdCIsImpzeERFViIsIl9qc3hERVYiLCJzdHlsZXMiLCJjYXJkIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZvbnRGYW1pbHkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJ3b3JkV3JhcCIsImNhcmRDb250YWluZXIiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInBhZGRpbmciLCJ3aWR0aCIsImNhcmRJbmZvIiwiY29sb3IiLCJjYXJkTmFtZSIsImZvbnRXZWlnaHQiLCJjYXJkRGVzY3JpcHRpb24iLCJjYXJkQ2F0ZWdvcnkiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiU2FtcGxlc0NhcmRzIiwiaGVhZGluZyIsInRleHRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImltZ1BhdGgiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJSZWFjdERPTSIsIkludGxQcm92aWRlciIsIm5vcm1hbGl6ZVdpZGdldElucHV0Iiwid2lkZ2V0RGVmaW5pdGlvbiIsImpzeCIsIl9qc3giLCJyZW5kZXIiLCJpbnN0YW5jZUlkIiwibGFuZ0NvZGUiLCJvcmlnaW4iLCJjYiIsImVsZW1lbnQiLCJsb2NhbGUiLCJtZXNzYWdlcyIsIkxvY2FsZSIsImZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyIsIndpZGdldElkIiwiRU4iLCJyZXNwb25zZSIsIndpbmRvdyIsImZldGNoIiwianNvbiIsImUiLCJjYW1lbGl6ZSIsInJlZmluZUlucHV0VHlwZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSFRNTEVsZW1lbnQiLCJwYWxldHRlIiwiZ2V0QXR0cmlidXRlIiwicmF3UGFyYW1zIiwicGFyc2VVc2VySW5wdXQiLCJwYXJhbXMiLCJfd2lkZ2V0RGVmaW5pdGlvbiRzZXQiLCJfd2lkZ2V0RGVmaW5pdGlvbiRzZXQyIiwiX3dpZGdldERlZmluaXRpb24kc2V0MyIsInNjaGVtYVByb3BzIiwic2V0dGluZ3NTY2hlbWEiLCJwcm9wZXJ0aWVzIiwiZmllbGRzIiwicHJvcE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInByb3BOYW1lIiwicGFyc2VWYWx1ZSIsInR5cGUiLCJhdHRyaWJ1dGUiLCJpbmNsdWRlcyIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsIkpTT04iLCJwYXJzZSIsImF2YWlsYWJsZUxhbmdjb2RlcyIsIkFSIiwiREUiLCJFUyIsIkZSIiwiSVQiLCJKQSIsIktPIiwiUEwiLCJQVCIsIlJVIiwiVFIiLCJaSCJdLCJzb3VyY2VSb290IjoiIn0=