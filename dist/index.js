"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodule_2_capstone"] = self["webpackChunkmodule_2_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/anime_nature_bg_4.jpg */ \"./src/images/anime_nature_bg_4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  content: '';\\r\\n  background: radial-gradient(#299b1c 35%, transparent 70%);\\r\\n  background-size: 2.5px 2.5px;\\r\\n  border-radius: 4px;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  left: 10px;\\r\\n  top: 10px;\\r\\n  z-index: -1;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  text-align: center;\\r\\n  font-size: 25px;\\r\\n  margin: 0;\\r\\n  padding: 20px;\\r\\n  background-color: lightblue;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 0 10px rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.heading__logo img {\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\n.image-container img {\\r\\n  max-width: 250px;\\r\\n}\\r\\n\\r\\n.heading__logo img:hover {\\r\\n  transform: scale(1.1);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 0 10px rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.nav__list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  gap: 1rem;\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.nav__item {\\r\\n  padding: 1rem;\\r\\n  border-radius: 10px;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n.nav__item a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.nav__item:hover {\\r\\n  background-color: rgb(202, 220, 122);\\r\\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.168);\\r\\n}\\r\\n\\r\\n.active {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n/* Pokemon Cards */\\r\\n.cards {\\r\\n  position: relative;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\\r\\n  gap: 1.5rem;\\r\\n  margin: 3rem;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5rem;\\r\\n  width: 100%;\\r\\n  background-color: azure;\\r\\n  border-radius: 20px;\\r\\n  text-align: center;\\r\\n  transition: transform 0.5s;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.card .pokemon-img {\\r\\n  border: 1px solid black;\\r\\n  border-radius: 20px;\\r\\n  background: radial-gradient(#115609 33%, #8d3394 33%);\\r\\n  background-size: 10px 10px;\\r\\n}\\r\\n\\r\\n.likeBtn {\\r\\n  transition: transform 0.5s;\\r\\n}\\r\\n\\r\\n.likeBtn:hover {\\r\\n  transform: scale(1.25);\\r\\n}\\r\\n\\r\\n.card .card-title {\\r\\n  display: flex;\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.card .card-title img {\\r\\n  margin-left: auto;\\r\\n  gap: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card .like-count {\\r\\n  align-self: flex-end;\\r\\n  margin-bottom: 0.7rem;\\r\\n  margin-right: 0.5vw;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.card .buttons button {\\r\\n  font-size: 1rem;\\r\\n  padding: 0.3rem 0.9rem;\\r\\n  margin: 5px;\\r\\n  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\r\\n  -webkit-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\r\\n  -moz-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\r\\n  margin-bottom: 2vh;\\r\\n  background-color: silver;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.card .buttons button:hover {\\r\\n  color: #fff;\\r\\n  background-color: #0c4be1;\\r\\n}\\r\\n\\r\\n.card .buttons button:active {\\r\\n  transform: scale(0.95);\\r\\n}\\r\\n\\r\\n/* pop-up */\\r\\n\\r\\n.popup-container {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 100;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n#close-btn {\\r\\n  position: absolute;\\r\\n  font-size: xx-large;\\r\\n  font-weight: 900;\\r\\n  top: 15px;\\r\\n  right: 5%;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  width: 80%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 2% auto;\\r\\n  position: relative;\\r\\n  padding: 20px 0;\\r\\n  border: 2px solid #000;\\r\\n  background-color: #fff;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  height: 270px;\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background: radial-gradient(#115609 33%, #8d3394 33%);\\r\\n  background-size: 10px 10px;\\r\\n  border-radius: 50%;\\r\\n  border: 5px solid black;\\r\\n}\\r\\n\\r\\n.item-header {\\r\\n  background-color: goldenrod;\\r\\n  border-radius: 15%;\\r\\n  margin-top: 1vh;\\r\\n}\\r\\n\\r\\n.addcomment-title {\\r\\n  margin-bottom: 1vh;\\r\\n  margin-top: 1vh;\\r\\n  background-color: goldenrod;\\r\\n  border-radius: 15%;\\r\\n}\\r\\n\\r\\n#comments-header {\\r\\n  background-color: goldenrod;\\r\\n  border-radius: 15%;\\r\\n  margin-bottom: 1vh;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  margin: 1% auto;\\r\\n  width: 50%;  \\r\\n  background-color: azure;\\r\\n}\\r\\n\\r\\n.item-detail__list {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comments-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: start;\\r\\n  width: 50%;\\r\\n  max-height: 70px;\\r\\n  overflow-y: scroll;\\r\\n  scrollbar-gutter: auto;\\r\\n  background-color: azure;\\r\\n  padding: 1vh;\\r\\n}\\r\\n\\r\\ndiv.comment {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  justify-content: start;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.input-container,\\r\\n.textarea-container {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  border: 3px solid #000;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 10px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.submit-btn {\\r\\n  width: 100px;\\r\\n  height: 30px;\\r\\n  margin: 1% auto;\\r\\n  padding: 1%;\\r\\n  border-radius: 5px;\\r\\n  border: 3px solid #000;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  border: 2px solid gray;\\r\\n  bottom: 2em;\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 10px;\\r\\n  background-color: azure;\\r\\n  padding: 2vh;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  text-decoration: none;\\r\\n  color: blueviolet;\\r\\n}\\r\\n\\r\\n@media (max-width: 500px) {\\r\\n  .popup {\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  .image-container {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .image-container img {\\r\\n    max-width: 200px;\\r\\n  }\\r\\n\\r\\n  .details {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  form {\\r\\n    width: 80%;\\r\\n  }  \\r\\n\\r\\n  .comments-container {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .heading__logo img {\\r\\n    width: 100px;\\r\\n  }\\r\\n\\r\\n  .nav__list {\\r\\n    gap: 0;\\r\\n    font-size: 15px;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module_2-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module_2-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module_2-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n\n\n\n\n(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__.likeGet)()\n    .then((data) => {\n      data.forEach((element) => {\n        const targetItem = element[1].item_id.split('likeId').slice(1);\n        const targetElement = document.querySelector(`#like-count${targetItem[0]}`);\n        if (targetElement) {\n          targetElement.innerHTML = `${element[1].likes} Likes`;\n        }\n      });\n    });\n\n  document.body.addEventListener('click', (e) => {\n    if (e.target && e.target.className === 'likeBtn') {\n      (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target);\n      (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__.likeGet)();\n      const targetId = (e.target.id).split('likeId').slice(1);\n      const targetHeart = document.querySelector(`#like-count${targetId}`).innerHTML.split(' ');\n      document.querySelector(`#like-count${targetId}`).innerHTML = `${(Number(targetHeart[0])) + 1} Likes`;\n    }\n  });\n});\n\n\n//# sourceURL=webpack://module_2-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/api_data.js":
/*!*********************************!*\
  !*** ./src/modules/api_data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nclass API {\n  constructor() {\n    this.urls = {\n      pokemons: 'https://pokeapi.co/api/v2/pokemon/',\n      likes: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/likes',\n      comments: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments',\n      newComment: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments?item_id=',\n    };\n  }\n\n  async get(url) {\n    this.url = url;\n    const response = await fetch(url);\n    return response.json();\n  }\n\n  async post(url, data) {\n    this.url = url;\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n      },\n      body: JSON.stringify(data),\n    });\n    const res = await response;\n    return res;\n  }\n}\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/api_data.js?");

/***/ }),

/***/ "./src/modules/commentsAPI.js":
/*!************************************!*\
  !*** ./src/modules/commentsAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsGet: () => (/* binding */ commentsGet),\n/* harmony export */   commentsPost: () => (/* binding */ commentsPost)\n/* harmony export */ });\nconst commentsGet = async (id) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L3cd5MnXmz3nt1juQH1n/comments?item_id=${id}`);\n    const data = await response.json();\n    if (response.ok && data.length > 0) {\n      return data;\n    }\n    return [];\n  } catch (err) {\n    throw new Error(`Failed to get comments: ${err}`);\n  }\n};\n\nconst commentsPost = async (id, name, comment) => {\n  try {\n    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L3cd5MnXmz3nt1juQH1n/comments', {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: name,\n        comment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    if (!response.ok) {\n      throw new Error('Failed to Post comments');\n    }\n  } catch (err) {\n    throw new Error('Failed to Post comments ', err);\n  }\n};\n\n\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/commentsAPI.js?");

/***/ }),

/***/ "./src/modules/commentsCount.js":
/*!**************************************!*\
  !*** ./src/modules/commentsCount.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = (comments) => {\n  let count = 0;\n  if (comments && comments.length > 0) {\n    count = comments.length;\n    return count;\n  }\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/commentsCount.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_International_Pok_mon_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/International_Pokémon_logo.svg */ \"./src/images/International_Pokémon_logo.svg\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.js */ \"./src/modules/pokemons.js\");\n\n\n\nconst headingLogo = document.querySelector('.heading__logo');\nconst logo = document.createElement('img');\nlogo.setAttribute('src', _images_International_Pok_mon_logo_svg__WEBPACK_IMPORTED_MODULE_0__);\nlogo.setAttribute('alt', 'Pokemon Logo');\nheadingLogo.appendChild(logo);\n\nconst navList = document.querySelector('.nav__list');\n\nconst createHeader = () => {\n  const header = document.querySelector('.heading');\n  const listItems = ['Pokemon', 'Planet', 'Race'];\n\n  for (let i = 0; i < listItems.length; i += 1) {\n    const navItems = document.createElement('li');\n\n    navItems.setAttribute('class', 'nav__item');\n    navItems.innerText = `${listItems[i]}`;\n\n    if (listItems[i] === 'Pokemon') {\n      (0,_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')\n        .then((response) => {\n          navItems.classList.add('active');\n          navItems.innerText = `${listItems[i]}(${response})`;\n        });\n    } else {\n      navItems.classList.remove('active');\n    }\n\n    navList.appendChild(navItems);\n  }\n\n  header.appendChild(navList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   likeGet: () => (/* binding */ likeGet)\n/* harmony export */ });\n/* harmony import */ var _images_like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/like.png */ \"./src/images/like.png\");\n/* harmony import */ var _api_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api_data.js */ \"./src/modules/api_data.js\");\n\n\n\nconst api = new _api_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst likeURL = api.urls.likes;\n\nconst likeGet = async () => {\n  const data = fetch(likeURL)\n    .then((response) => response.json())\n    .then((obj) => Object.entries(obj))\n    .catch((err) => {\n      throw ('Failed to Get likes ', err);\n    });\n  return data;\n};\n\nconst likesPost = async (target) => {\n  fetch(likeURL, {\n\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: target.id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n\n  })\n    .catch((err) => {\n      throw ('Failed to Post likes ', err);\n    });\n  target.src = _images_like_png__WEBPACK_IMPORTED_MODULE_0__;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesPost);\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/pokemons.js":
/*!*********************************!*\
  !*** ./src/modules/pokemons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_unlike_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/unlike.png */ \"./src/images/unlike.png\");\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _api_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_data.js */ \"./src/modules/api_data.js\");\n\n\n\n\nconst api = new _api_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst pokemonURL = api.urls.pokemons;\n\nlet numberOfItems = 0;\n\nconst cards = document.body.querySelector('.cards');\ncards.addEventListener('click', (e) => {\n  if (e.target && e.target.className === 'comment') {\n    const poke = Number(e.target.id - 1);\n    const url = `${pokemonURL}${poke}`;\n    (0,_popUp_js__WEBPACK_IMPORTED_MODULE_1__.displayPopup)(url, poke);\n  }\n});\n\nconst pokemons = async (url) => {\n  await fetch(url).then((response) => response.json())\n    .then((data) => data.results)\n    .then((obj) => Object.entries(obj))\n    .then((arr) => {\n      numberOfItems = arr.length;\n      arr.forEach((element) => {\n        const id = Number(element[0]) + 1;\n        let pokemonName = element[1].name;\n        pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1);\n        fetch(element[1].url).then((response) => response.json())\n          .then((data) => data.sprites.other['official-artwork'].front_default)\n          .then((src) => {\n            const card = `<div class=\"card\">\n            <img class=\"pokemon-img\" id=${id} src=\"${src}\" alt=\"Pokemons\">\n            <div class=\"card-title\">\n            <h2>${pokemonName}</h2>\n            <img id=\"likeId${id + 1}\" class=\"likeBtn\" src=${_images_unlike_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"like_icon\">\n            </div> \n            <p class=\"like-count\" id=\"like-count${id + 1}\">0 Likes</p>\n            <div class=\"buttons\">\n              <button type=\"button\" id=\"${id + 1}\" class=\"comment\">Comments</button>\n            </div>\n          </div>`;\n            cards.innerHTML += card;\n          });\n      });\n    })\n    .catch((err) => {\n      throw (\"Couldn't fetch pokemons\", err);\n    });\n  return numberOfItems;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemons);\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/pokemons.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayPopup: () => (/* binding */ displayPopup),\n/* harmony export */   removePopup: () => (/* binding */ removePopup)\n/* harmony export */ });\n/* harmony import */ var _commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsAPI.js */ \"./src/modules/commentsAPI.js\");\n/* harmony import */ var _commentsCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCount.js */ \"./src/modules/commentsCount.js\");\n\n\n\nconst popupContainer = document.createElement('div');\npopupContainer.classList.add('popup-container');\npopupContainer.classList.add('hidden');\n\nconst removePopup = () => {\n  document.body.removeChild(popupContainer);\n};\n\nconst displayPopup = (url, id) => {\n  fetch(url).then((response) => response.json())\n    .then((data) => {\n      const {\n        name, weight, height, sprites, abilities, species,\n      } = data;\n      const { front_default: frontDefault } = sprites.other['official-artwork'];\n      const skills = abilities[0].ability.name;\n      const family = species.name;\n      popupContainer.innerHTML = `\n  <div class=\"popup\">\n    <button id=\"close-btn\" class=\"close-btn\" type=\"button\">X</button>\n    <div class=\"image-container\">\n    \n    <img src=\"${frontDefault}\" id=\"${id}\"alt=\"${name}\">\n    </div>\n    <h2 class=\"item-header\">${name}</h2>\n    <div class=\"details\">\n      <div class=\"item-detail__list\">Weight: ${weight}</div>\n      <div class=\"item-detail__list\">Height: ${height}</div>\n      <div class=\"item-detail__list\">Abilities: ${skills}</div>\n      <div class=\"item-detail__list\">Species: ${family}</div>\n    </div>\n    <h3 id=\"comments-header\"></h3>\n    <div class=\"comments-container\" id=\"comments-container-${id}\">\n    </div>\n    <h3 class=\"addcomment-title\">Add a comment</h3>\n    <form id=\"comment-form-${id}\">\n      <div class=\"input-container\">\n        <input type=\"text\" name=\"name\" placeholder=\"Your name\" required>\n      </div>\n      <div class=\"textarea-container\">\n        <textarea type=\"text\" name=\"comments\" placeholder=\"Your insights\" required rows=\"5\" cols=\"36\" ></textarea>\n      </div>\n      <button id=\"submit-btn\" class=\"submit-btn\" type=\"submit\">Comment</button>\n    </form>\n  </div>`;\n\n      const commentsContainer = popupContainer.querySelector(`#comments-container-${id}`);\n      const commentForm = popupContainer.querySelector(`#comment-form-${id}`);\n\n      const displayComments = (comments) => {\n        const commentsHeader = popupContainer.querySelector('#comments-header');\n        commentsHeader.innerHTML = `Comments(${(0,_commentsCount_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comments)})`;\n        commentsContainer.innerHTML = '';\n        comments.forEach((comment) => {\n          const { username, comment: commentText, creation_date: creationDate } = comment;\n          const commentElement = document.createElement('div');\n          commentElement.classList.add('comment');\n          commentElement.innerHTML = `\n          <span class=\"comment__date\">${creationDate}</span>\n          <span class=\"comment__username\">${username}</span>\n          <span class=\"comment__text\">${commentText}</span>`;\n\n          commentsContainer.appendChild(commentElement);\n        });\n      };\n\n      (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.commentsGet)(id).then((comments) => {\n        displayComments(comments);\n      }).catch((err) => {\n        throw (\"Couldn't fetch comments\", err);\n      });\n\n      commentForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const nameInput = commentForm.querySelector('input[name=\"name\"]');\n        const commentsInput = commentForm.querySelector('textarea[name=\"comments\"]');\n        const name = nameInput.value;\n        const comment = commentsInput.value;\n\n        (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.commentsPost)(id, name, comment)\n          .then(() => (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.commentsGet)(id)).then((comments) => {\n            displayComments(comments);\n            nameInput.value = '';\n            commentsInput.value = '';\n          }).catch((err) => {\n            throw (\"Couldn't fetch comments\", err);\n          });\n      });\n      document.body.appendChild(popupContainer);\n\n      const closeButton = document.getElementById('close-btn');\n      closeButton.addEventListener('click', removePopup);\n    })\n    .catch((err) => {\n      throw (\"Couldn't fetch pokemon\", err);\n    });\n};\n\n\n\n//# sourceURL=webpack://module_2-capstone/./src/modules/popUp.js?");

/***/ }),

/***/ "./src/images/International_Pokémon_logo.svg":
/*!***************************************************!*\
  !*** ./src/images/International_Pokémon_logo.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e1660a931177c23721e.svg\";\n\n//# sourceURL=webpack://module_2-capstone/./src/images/International_Pok%C3%A9mon_logo.svg?");

/***/ }),

/***/ "./src/images/anime_nature_bg_4.jpg":
/*!******************************************!*\
  !*** ./src/images/anime_nature_bg_4.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4553326abd095b6030cc.jpg\";\n\n//# sourceURL=webpack://module_2-capstone/./src/images/anime_nature_bg_4.jpg?");

/***/ }),

/***/ "./src/images/like.png":
/*!*****************************!*\
  !*** ./src/images/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b3d543fa411ab9c2474.png\";\n\n//# sourceURL=webpack://module_2-capstone/./src/images/like.png?");

/***/ }),

/***/ "./src/images/unlike.png":
/*!*******************************!*\
  !*** ./src/images/unlike.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d66523f643ecf5753f5.png\";\n\n//# sourceURL=webpack://module_2-capstone/./src/images/unlike.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);