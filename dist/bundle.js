/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/style/style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n    box-sizing: border-box;\\n    /* border: 0.5px solid pink; */\\n}\\n\\nbody {\\n    font-family: sans-serif;\\n    font-size: 16px;\\n    position: relative; \\n    display: flex;\\n}\\n\\nmain {\\n    height: 100vh;\\n    width: 100%;\\n    background-color: rgb(54, 74, 173);\\n    position: relative;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\nbutton, input, select, textarea {\\n    font-family: inherit;\\n}\\n\\n/*FORM CONTAINER*/\\n\\n#main-form input {\\n    border-radius: 2px;\\n    font-size: 18px;\\n    font-weight: 800;\\n}\\n\\n.form-div-container {\\n    background-color: rgb(20, 21, 36);\\n    display: none;\\n    justify-content: center;\\n    padding: 30px 10px;\\n    border-radius: 12px;\\n    position: absolute;\\n    align-self: center;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    z-index: 4;\\n}\\n\\n/* MAKES FORM CONTAINER DISAPPEAR */\\n\\n\\n\\n#main-form {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\nfieldset {\\n    width: 100%;\\n    border: none;\\n}\\n\\n.close-form {\\n    color: rgb(219, 219, 219);\\n    font-weight: 1000;\\n    font-size: 1.5rem;\\n    position: absolute;\\n    top: 10px;\\n    right: 15px;\\n}\\n\\n.close-form:hover {\\n    color: rgb(255, 38, 0);\\n    cursor: pointer;\\n}\\n\\n.book-input-containers {\\n    display: flex;\\n    justify-content: center;\\n    flex-wrap: wrap;\\n    gap: 25px;\\n    max-width: 300px;\\n    margin-top: 20px;\\n}\\n\\n.book-input-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.book-text-input-label {\\n    align-self: flex-start;\\n    margin-bottom: 3px;\\n    color: rgb(219, 219, 219);\\n    font-weight: 800;\\n    font-size: 18px;\\n}\\n\\n.book-input {\\n    background-color: rgb(134, 154, 255);\\n    color:rgb(0, 0, 0);\\n    border: none;\\n    text-align:center;\\n}\\n\\n.book-read-container {\\n    margin-top: 10px;\\n    display: flex;\\n    justify-content: center;\\n    gap: 10px;\\n}\\n\\n.read-container {\\n    margin-top: 0.5rem;\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n}\\n\\n.book-read-container input {\\n    width: 100px;\\n    background-color: rgb(134, 154, 255);\\n    color:rgb(0, 0, 0);\\n    margin-top: 8px;\\n    padding: 3px 6px;\\n    border: none;\\n    font-weight: 800;\\n}\\n\\n.book-read-container input:hover {\\n    background-color:rgb(15, 23, 65);\\n    color: rgb(219, 219, 219);\\n}\\n\\n.book-read-container input:focus {\\n    background-color:rgb(15, 23, 65);\\n    color: rgb(219, 219, 219);\\n    border: 3px solid rgb(219, 219, 219);\\n    padding: 0px 3px;\\n}\\n\\n.book-read-container label {\\n    color: rgb(219, 219, 219);\\n    text-align: center;\\n    font-weight: 800;\\n}\\n\\n\\n.submission-button {\\n    padding: 0 10px;\\n    margin-top: 30px;\\n    background-color: rgb(134, 154, 255);\\n    color:rgb(0, 0, 0);\\n    padding: 4px 30px;\\n    border: none;\\n}\\n\\n.submission-button:hover {\\n    background-color:rgb(15, 23, 65);\\n    color: rgb(219, 219, 219);\\n}\\n\\n/*////////////////*/\\n\\n/* SIDEBAR */\\n\\naside {\\n    background-color:rgb(20, 21, 36);\\n    height: 100vh;\\n    width: 35%;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n\\n.blueberry-logo {\\n    width: 100px;\\n    height: 100px;\\n    margin-top: 10px;\\n}\\n\\n.logo-container {\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n\\n.LiBerry-title-main {\\n    color: rgb(219, 219, 219);\\n}\\n\\n.add-remove-buttons {\\n    display: flex; \\n    flex-direction: column;\\n    margin-top: 80px;\\n    gap: 40px;\\n}\\n\\naside button {\\n    border: none;\\n    background-color:rgb(134, 154, 255);\\n    color:rgb(11, 10, 12);\\n    padding: 10px 50px;\\n    font-size: 1.5rem;\\n    font-weight: 800;\\n    border-radius: 2px;\\n}\\n\\naside button:hover {\\n    background-color:rgb(15, 23, 65);\\n    color: rgb(219, 219, 219);\\n}\\n\\n.edit-mode {\\n    \\n}\\n\\n\\n/* CARD */\\n\\n.card {\\n    background-color: rgb(181, 193, 255);\\n    width: 220px;\\n    height: 270px;\\n    border-radius: 12px;\\n    box-shadow: 1px 1px 8px 0.1px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    position: relative\\n}\\n\\n#card-container {\\n    width: 95%;\\n    display: flex;\\n    flex-wrap: wrap;\\n    align-content: flex-start;\\n    gap: 25px;\\n    margin-top: 25px;\\n}\\n\\n.card-subcontainer {\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    gap: 20px;\\n}\\n\\n.delete-card-button {\\n    position: absolute;\\n    top: 10px;\\n    right: 12px;\\n    border: none;\\n    background-color: unset;\\n    font-size: 1.5rem;\\n    font-weight: 1000;\\n    color: rgb(80, 80, 80);\\n    display: none;\\n}\\n\\n.delete-card-button:hover {\\n    top: 8px;\\n    color: rgb(255, 0, 0);\\n    font-size: 1.7rem;\\n    cursor: pointer;\\n}\\n\\n.title {\\n    font-size: 24px;\\n}\\n\\n.card-subcontainer p {\\n    font-weight: 800;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://liberry/./src/components/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://liberry/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://liberry/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/style/style.css":
/*!****************************************!*\
  !*** ./src/components/style/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://liberry/./src/components/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://liberry/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://liberry/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://liberry/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://liberry/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://liberry/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://liberry/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/scripts/general.js":
/*!*******************************************!*\
  !*** ./src/components/scripts/general.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst form = document.getElementById('main-form');\nconst readButton = document.getElementById('read');\nconst readingButton = document.getElementById('reading');\nconst addBookButton = document.querySelector('.add-book');\nconst formWindow = document.querySelector('.form-div-container');\nconst dimPage = document.querySelector('.page-dim');\nconst formWindowClose = document.querySelector('.close-form');\nconst cardContainer = document.querySelector('#card-container');\nconst editMode = document.querySelector('.edit-mode');\n\nconst general = () => {\n    let read = false;\n    let myLibrary = [];\n    let editModeState = false;\n\n    function Book(title, author, pages, read) {\n        this.title = title;\n        this.author = author;\n        this.pages = pages;\n        this.read = read;\n    }\n\n    function addBookButtonToggle() {\n        addBookButton.addEventListener('click', () => {\n            if (!editModeState) {\n                formWindow.style.cssText = 'display: flex;';\n                dimPage.style.cssText =\n                    'z-index: 3; position:absolute; width:100vw; height:100vh; background-color: rgba(0, 0, 0, 0.281);';\n            } else {\n                alert('You can not add books while in edit mode');\n            }\n        });\n    }\n\n    function readButtonsForm() {\n        readButton.addEventListener('click', () => {\n            read = true;\n        });\n\n        readingButton.addEventListener('click', () => {\n            read = false;\n        });\n    }\n\n    function closeFormWindow() {\n        formWindowClose.addEventListener('click', () => {\n            formWindow.style.cssText = 'display: none;';\n            dimPage.style.cssText = 'display:none;';\n            form.reset();\n        });\n\n        document.addEventListener('click', (event) => {\n            if (event.target === dimPage) {\n                formWindow.style.cssText = 'display: none;';\n                dimPage.style.cssText = 'display:none;';\n                form.reset();\n            }\n        });\n    }\n\n    function editModeToggle() {\n        editMode.addEventListener('click', () => {\n            if (myLibrary.length > 0) {\n                editModeState = !editModeState;\n                if (editModeState) {\n                    document.querySelector(\n                        'aside > div > button.edit-mode'\n                    ).style.cssText = 'background-color: red;';\n                } else {\n                    document.querySelector(\n                        'aside > div > button.edit-mode'\n                    ).style.cssText = 'background-color:';\n                }\n                const deleteCardButton = cardContainer.querySelectorAll(\n                    '.delete-card-button'\n                );\n                deleteCardButton.forEach((element) => {\n                    element.style.cssText = `display: ${\n                        editModeState ? 'inline-block;' : 'none;'\n                    }`;\n                    element.addEventListener('click', () => {\n                        element.parentElement.remove();\n                        myLibrary.splice(\n                            myLibrary.findIndex(function (book) {\n                                return (\n                                    `Title: ${book.title}` ===\n                                    element.nextSibling.firstChild.textContent\n                                );\n                            }),\n                            1\n                        );\n                        if (myLibrary.length === 0) {\n                            document.querySelector(\n                                'aside > div > button.edit-mode'\n                            ).style.cssText = 'background-color:';\n                            editModeState = false;\n                        }\n                    });\n                });\n            } else {\n                alert('You need to add books to your library to edit');\n            }\n        });\n    }\n\n    function bookFormSubmission() {\n        form.addEventListener('submit', function (e) {\n            e.preventDefault();\n            const titleInput = document.getElementById('book-title').value;\n            const authorInput = document.getElementById('book-author').value;\n            const pagesInput = document.getElementById('book-page-count').value;\n            resetFormAndPushToArray();\n\n            function resetFormAndPushToArray() {\n                const entry = new Book(\n                    titleInput,\n                    authorInput,\n                    pagesInput,\n                    read\n                );\n                myLibrary.push(entry);\n                form.reset();\n                formWindow.style.cssText = 'display: none;';\n                dimPage.style.cssText = 'display:none;';\n                displayBookCards();\n                console.log(myLibrary);\n            }\n        });\n    }\n\n    function displayBookCards() {\n        const newCard = document.createElement('div');\n        const newCardContents = document.createElement('div');\n        const newCardExit = document.createElement('button');\n\n        const titleContent = document.createElement('p');\n        const authorContent = document.createElement('p');\n        const pagesContent = document.createElement('p');\n        const readOrNotContent = document.createElement('p');\n\n        newCardExit.textContent = 'X';\n        cardContainer.appendChild(newCard);\n\n        newCard.className = `card`;\n        newCardContents.className = 'card-subcontainer';\n        newCardExit.className = 'delete-card-button';\n        titleContent.className = 'title';\n        authorContent.className = 'author';\n        pagesContent.className = 'page-count';\n        readOrNotContent.className = 'read-or-reading';\n\n        newCard.appendChild(newCardExit);\n        newCard.appendChild(newCardContents);\n\n        newCardContents.appendChild(titleContent);\n        newCardContents.appendChild(authorContent);\n        newCardContents.appendChild(pagesContent);\n        newCardContents.appendChild(readOrNotContent);\n\n        titleContent.textContent = `Title: ${\n            myLibrary[myLibrary.length - 1].title\n        }`;\n        authorContent.textContent = `Author: ${\n            myLibrary[myLibrary.length - 1].author\n        }`;\n        pagesContent.textContent = `Pages: ${myLibrary[\n            myLibrary.length - 1\n        ].pages.toString()}`;\n        readOrNotContent.textContent = myLibrary[myLibrary.length - 1].read\n            ? 'Read'\n            : 'Reading';\n    }\n\n    addBookButtonToggle();\n    closeFormWindow();\n    editModeToggle();\n    readButtonsForm();\n    bookFormSubmission();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (general);\n\n\n//# sourceURL=webpack://liberry/./src/components/scripts/general.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scripts_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scripts/general.js */ \"./src/components/scripts/general.js\");\n/* harmony import */ var _components_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/style/style.css */ \"./src/components/style/style.css\");\n\n\n\n(0,_components_scripts_general_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://liberry/./src/index.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;