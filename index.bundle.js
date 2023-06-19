/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/inter.ttf */ "./src/fonts/inter.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n.all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 70vh;\n  min-height: 500px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n.stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(\"./fonts/inter.ttf\");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n.all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 70vh;\n  min-height: 500px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n.stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/history-events.js":
/*!*******************************!*\
  !*** ./src/history-events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


const clickHandlerHistory = (event, stackObject) => {
  const selectedHistoryCard = event.target.dataset.historyIndex;

  // only run when history card is clicked
  if (!selectedHistoryCard) return;

  stackObject.revert(selectedHistoryCard);
  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
};

const addHistoryListener = (stackObject) => {
  const historyDiv = document.getElementById("history");
  historyDiv.addEventListener("click", (event) =>
    clickHandlerHistory(event, stackObject)
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHistoryListener);


/***/ }),

/***/ "./src/interact-mode-controls.js":
/*!***************************************!*\
  !*** ./src/interact-mode-controls.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


function _getOtherSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

const _changeInteractMode = (event) => {
  const selectedView = event.currentTarget;

  // toggle enabled class on
  selectedView.classList.toggle("single-control-enabled", true);

  // toggle enabled class off for other interact-mode elements
  const siblings = _getOtherSiblings(selectedView, selectedView.parentNode);
  siblings.forEach((sibling) => {
    sibling.classList.toggle("single-control-enabled", false);
  });
};

const addInteractModeListeners = (stackObject) => {
  const interactModes = [...document.getElementById("interact-mode").children];
  interactModes.forEach((mode) => {
    mode.addEventListener("click", (event) => {
      _changeInteractMode(event);
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addInteractModeListeners);


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHistory": () => (/* binding */ renderHistory),
/* harmony export */   "renderStack": () => (/* binding */ renderStack),
/* harmony export */   "renderStackAndHistory": () => (/* binding */ renderStackAndHistory)
/* harmony export */ });
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ "./src/stack.js");


const renderStack = (stack) => {
  const stackDOM = document.getElementById("stack");
  stackDOM.innerHTML = "";

  const stackArray = stack.order;

  // Traditional for loop used because each pancake's index isn't
  // necessarily the same as its value
  for (let i = 0; i < stackArray.length; i++) {
    const newPancake = document.createElement("div");
    newPancake.classList.add("pancake");

    const widthPercentage = (stackArray[i] / stackArray.length) * 100;
    newPancake.style.width = `${widthPercentage}%`;

    // set data attributes to connect stack and corresponding DOM elements
    newPancake.dataset.stackIndex = i;
    newPancake.dataset.value = stackArray[i];

    // make pancake draggable only if drag mode enabled on SandboxStack
    const dragModeDiv = document.getElementById("interact-mode-drag");
    const draggable = dragModeDiv.classList.contains("single-control-enabled");
    console.log(draggable);
    if (draggable && stack instanceof _stack__WEBPACK_IMPORTED_MODULE_0__.SandboxStack) {
      newPancake.setAttribute("draggable", true);
    }

    stackDOM.append(newPancake);
  }
};

const renderHistory = (stack) => {
  const historyDOM = document.getElementById("history");
  historyDOM.innerHTML = "";

  const historyArray = stack.history;
  // Traditional for loop used because each card's history-index data
  // attribute comes from the index of the snapsnot associated with
  // the card.
  for (let i = 0; i < historyArray.length; i++) {
    const newHistoryCard = document.createElement("div");
    newHistoryCard.classList.add("history-card");

    newHistoryCard.dataset.historyIndex = i;

    const currentHistoryStack = historyArray[i];
    currentHistoryStack.forEach((pancake) => {
      const newHistoryPancake = document.createElement("div");
      newHistoryPancake.classList.add("card-pancake");

      const widthPercentage = (pancake / currentHistoryStack.length) * 100;
      newHistoryPancake.style.width = `${widthPercentage}%`;

      newHistoryCard.append(newHistoryPancake);
    });

    historyDOM.append(newHistoryCard);
  }
};

const renderStackAndHistory = (stack) => {
  renderStack(stack);
  renderHistory(stack);
};




/***/ }),

/***/ "./src/stack-events.js":
/*!*****************************!*\
  !*** ./src/stack-events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDragListeners": () => (/* binding */ addDragListeners),
/* harmony export */   "addFlipListeners": () => (/* binding */ addFlipListeners)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


const flipEvent = (event, stackObject) => {
  const selectedPancake = event.target.dataset.stackIndex;
  const flipModeEanbled = document
    .getElementById("interact-mode-flip")
    .classList.contains("single-control-enabled");

  // only run when pancake is clicked and flip mode enabled
  if (selectedPancake && flipModeEanbled) {
    stackObject.flip(selectedPancake);
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
  }
};

const dragStart = (event) => {
  const target = event.target;
  if (target && target.classList.contains("pancake")) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/plain", target.dataset.stackIndex);

    target.style.opacity = 0.1;
  }
};

const dragEnd = (event) => {
  if (event.target && event.target.classList.contains("pancake")) {
    event.target.style.opacity = "";
  }
};

const dragOver = (event) => {
  event.preventDefault();
};

const drop = (event, stackObject) => {
  event.preventDefault();
  // validate target
  if (!event.target.dataset.stackIndex) {
    return;
  }
  const dropTarget = event.target;
  const draggedIndex = parseInt(event.dataTransfer.getData("text"));
  const droppedIndex = parseInt(dropTarget.dataset.stackIndex);

  // prevent self-drops
  if (droppedIndex !== draggedIndex) {
    const stackDiv = document.getElementById("stack");
    const clone = dropTarget.cloneNode(true);
    const dragTarget = stackDiv.childNodes[draggedIndex];
    stackDiv.replaceChild(dragTarget, dropTarget);
    dragTarget.after(clone);
  }
  stackObject.movePancake(draggedIndex, droppedIndex);
  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
};

const addFlipListeners = (stackObject) => {
  const stackDiv = document.getElementById("stack");
  stackDiv.addEventListener("click", (event) => flipEvent(event, stackObject));
};

const addDragListeners = (stackObject) => {
  const stackDiv = document.getElementById("stack");
  stackDiv.addEventListener("dragstart", dragStart);
  stackDiv.addEventListener("dragend", dragEnd);
  stackDiv.addEventListener("dragover", dragOver);
  stackDiv.addEventListener("drop", (event) => {
    drop(event, stackObject);
  });
};



/* Foundation for dragover transitions, if needed

  const overIndex = document.elementFromPoint(event.clientX, event.clientY)
    .dataset.stackIndex;
  if (overIndex) {
    const pancakes = [...document.getElementById("stack").children];
    const moveUp = pancakes.filter(
      (pancake) => pancake.dataset.stackIndex <= overIndex
    );
    const moveDown = pancakes.filter(
      (pancake) => pancake.dataset.stackIndex >= overIndex
    );
    const height = pancakes[0].offsetHeight;
    moveUp.forEach(
      (element) =>
        (element.style.transform = `translateY(-${height / 2 + 4}px)`)
    );
    moveDown.forEach(
      (element) => (element.style.transform = `translateY(${height / 2 + 4}px)`)
    );
  }
  */


/***/ }),

/***/ "./src/stack.js":
/*!**********************!*\
  !*** ./src/stack.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SandboxStack": () => (/* binding */ SandboxStack),
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
class Stack {
  constructor(order) {
    this.order = order;
    // Use shallow copy to avoid reference sharing
    this.history = [[...this.order]];
  }

  get order() {
    return this._order;
  }
  set order(newOrder) {
    this._order = newOrder;
  }

  get history() {
    return this._history;
  }
  set history(newHistory) {
    this._history = newHistory;
  }

  flip(index) {
    const flipBeneath = parseInt(index);
    if (flipBeneath >= 0 && flipBeneath < this.order.length) {
      const flipped = this.order.slice(0, flipBeneath + 1);
      flipped.reverse();
      this.order.splice(0, flipBeneath + 1, ...flipped);
      // Use shallow copy to avoid reference sharing
      this.history.push([...this.order]);
    }
  }

  revert(index) {
    const revertTo = parseInt(index);
    const temp = this.history.slice(0, revertTo + 1);
    // Use shallow copy to avoid reference sharing
    this.order = [...this.history[revertTo]];
    this.history = temp;
  }
}

class SandboxStack extends Stack {
  constructor(order) {
    super(order);
  }
  addPancake() {
    this.order.push(this.order.length + 1);
    this.history = [];
    this.history.push([...this.order]);
  }
  removePancake() {
    const largestPancake = Math.max(...this.order);
    const temp = this.order.filter((pancake) => pancake !== largestPancake);
    this.order = temp;
    this.history = [];
    this.history.push([...this.order]);
  }
  movePancake(from, to) {
    const validIndices =
      from >= 0 &&
      to >= 0 &&
      from < this.order.length &&
      to < this.order.length;
    if (validIndices) {
      const movingPancake = this.order.splice(from, 1)[0];
      this.order.splice(to, 0, movingPancake);
      this.history = [];
      this.history.push([...this.order]);
    }
  }
}




/***/ }),

/***/ "./src/view-controls.js":
/*!******************************!*\
  !*** ./src/view-controls.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


function _getOtherSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

const _changeView = (event) => {
  const selectedView = event.currentTarget;

  // toggle enabled class on
  selectedView.classList.toggle("single-control-enabled", true);

  // toggle enabled class off for other view elements
  const siblings = _getOtherSiblings(selectedView, selectedView.parentNode);
  siblings.forEach((sibling) => {
    sibling.classList.toggle("single-control-enabled", false);
  });

  // adjust custom properties to fit selected view
  if (selectedView.id === "view-pancakes") {
    document.documentElement.style.setProperty(
      "--pancake-visibility",
      "visible"
    );
    document.documentElement.style.setProperty("--value-visibility", "hidden");
  } else if (selectedView.id === "view-numbers") {
    document.documentElement.style.setProperty(
      "--pancake-visibility",
      "hidden"
    );
    document.documentElement.style.setProperty("--value-visibility", "visible");
    document.documentElement.style.setProperty(
      "--value-color",
      "var(--primary-color)"
    );
    document.documentElement.style.setProperty(
      "--value-color-hover",
      "var(--tertiary-color)"
    );
  } else if (selectedView.id === "view-both") {
    document.documentElement.style.setProperty(
      "--pancake-visibility",
      "visible"
    );
    document.documentElement.style.setProperty("--value-visibility", "visible");
    document.documentElement.style.setProperty(
      "--value-color",
      "var(--secondary-color)"
    );
    document.documentElement.style.setProperty(
      "--value-color-hover",
      "var(--secondary-color)"
    );
  } else {
    throw "Incorrect click.";
  }
};

const addViewListeners = (stack) => {
  const views = [...document.getElementById("view").children];
  views.forEach((view) => {
    view.addEventListener("click", (event) => {
      _changeView(event);
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stack);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addViewListeners);


/***/ }),

/***/ "./src/fonts/inter.ttf":
/*!*****************************!*\
  !*** ./src/fonts/inter.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aadb65ac45347ff46699.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stack */ "./src/stack.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _view_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-controls */ "./src/view-controls.js");
/* harmony import */ var _interact_mode_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interact-mode-controls */ "./src/interact-mode-controls.js");
/* harmony import */ var _history_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-events */ "./src/history-events.js");
/* harmony import */ var _stack_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stack-events */ "./src/stack-events.js");








const defaultOrder = [6, 5, 3, 2, 4, 1];
const stack = new _stack__WEBPACK_IMPORTED_MODULE_1__.SandboxStack(defaultOrder);

// add stack listners to stack and history elements to history
(0,_stack_events__WEBPACK_IMPORTED_MODULE_6__.addFlipListeners)(stack);
(0,_stack_events__WEBPACK_IMPORTED_MODULE_6__.addDragListeners)(stack);
(0,_history_events__WEBPACK_IMPORTED_MODULE_5__["default"])(stack);

// add controls listeners
(0,_view_controls__WEBPACK_IMPORTED_MODULE_3__["default"])(stack);
(0,_interact_mode_controls__WEBPACK_IMPORTED_MODULE_4__["default"])(stack);

// render default stack and history on page load
(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStackAndHistory)(stack);

const fullStack = (function () {
  const init = {
    stack: new _stack__WEBPACK_IMPORTED_MODULE_1__.Stack(defaultOrder),
  };
  return Object.seal(init);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsY0FBYyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyx5QkFBeUIsY0FBYyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdB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QUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQXFCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUU4Qzs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZUFBZTtBQUNqRTtBQUNBO0FBQ0EsNERBQTRELGVBQWU7QUFDM0U7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFa0I7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFxQjtBQUMzQixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lCO0FBQ0c7QUFDRjtBQUNpQjtBQUNkO0FBQ2tCOztBQUVwRTtBQUNBLGtCQUFrQixnREFBWTs7QUFFOUI7QUFDQSwrREFBZ0I7QUFDaEIsK0RBQWdCO0FBQ2hCLDJEQUFrQjs7QUFFbEI7QUFDQSwwREFBZ0I7QUFDaEIsbUVBQXdCOztBQUV4QjtBQUNBLDhEQUFxQjs7QUFFckI7QUFDQTtBQUNBLGVBQWUseUNBQUs7QUFDcEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvaGlzdG9yeS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2ludGVyYWN0LW1vZGUtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3RhY2stZXZlbnRzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvdmlldy1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9pbnRlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjM2E0NjU4O1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZDlkOWQ5O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjYjliOWI5O1xcbiAgLS1xdWF0ZXJuYXJ5LWNvbG9yOiAjYWI3NzI4O1xcbiAgLS1wcmltYXJ5LXJhZGl1czogMTJweDtcXG4gIC0tZm9udDogSW50ZXIsIHNhbnMtc2VyaWY7XFxuXFxuICAvKiBTdGFjayB2aWV3IHZhcmlhYmxlcyAqL1xcbiAgLS1wYW5jYWtlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgLS12YWx1ZS1jb2xvci1ob3ZlcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogSW50ZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIFVzZWQgZm9yIE1hdGVyaWFsIFN5bWJvbHMgZnJvbSBHb29nbGUgRm9udHMgKi9cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMSwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiAyNDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmFsbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5oZWFkZXItaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ubWlkZGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4IDA7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuXFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250cm9scy1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAtMi41JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb250cm9sLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2wtZW5hYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeS1jb2xvcik7XFxufVxcblxcbi5jb250cm9sLWljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY29udHJvbC10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuI2ludGVyYWN0LW1vZGUtZmxpcCAuY29udHJvbC1pY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuI2NoYW5nZS1zdGF0ZS1yZXNldCAuY29udHJvbC1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2w6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnN0YWNrLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N0YWNrIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wYW5jYWtlIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXBhbmNha2UtdmlzaWJpbGl0eSk7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtaGVpZ2h0OiA0OHB4O1xcbiAgZmxleDogMTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcXG59XFxuXFxuLnBhbmNha2U6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnBhbmNha2U6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5wYW5jYWtlOmFjdGl2ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGFuY2FrZTo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMCAxMnB4O1xcblxcbiAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG5cXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnBhbmNha2U6aG92ZXI6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBhbmNha2U6YWN0aXZlOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvcik7XFxufVxcblxcbiNoaXN0b3J5LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuXFxuICBwYWRkaW5nOiAxMnB4O1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cykgMCAwIHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG59XFxuXFxuI2hpc3RvcnktbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IC0xMnB4O1xcblxcbiAgcGFkZGluZzogMCA4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jaGlzdG9yeSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdhcDogMTJweDtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBMZWF2ZSByb29tIGZvciBwc2V1ZG8tZWxlbWVudCBsYWJlbCAqL1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cztcXG59XFxuXFxuLmhpc3RvcnktY2FyZDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogYXR0cihkYXRhLWhpc3RvcnktaW5kZXgpO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiA2cHg7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcmQtcGFuY2FrZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcbiAgbWF4LWhlaWdodDogOHB4O1xcbiAgZmxleDogMTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVVNFRCBGT1IgXFxcIlVuZGVyIGNvbnN0cnVjdGlvbi4uLlxcXCIgUEFHRS5cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG5oNiB7XFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG5cXG4qLyA7XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2Vz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QkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7O0VBRVIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixpQkFBaUIsRUFBRSx3Q0FBd0M7O0VBRTNELHNDQUFzQzs7RUFFdEMsZUFBZTs7RUFFZixrQkFBa0I7O0VBRWxCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7O0VBRWpDLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDZCQUE2Qjs7RUFFN0IsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHdDQUF3Qzs7RUFFeEMsZUFBZTtFQUNmLE9BQU87O0VBRVAsa0JBQWtCOztFQUVsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctY29sb3I6ICMzYTQ2NTg7XFxuICAtLXByaW1hcnktY29sb3I6ICNkOWQ5ZDk7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwMDAwMDtcXG4gIC0tdGVydGlhcnktY29sb3I6ICNiOWI5Yjk7XFxuICAtLXF1YXRlcm5hcnktY29sb3I6ICNhYjc3Mjg7XFxuICAtLXByaW1hcnktcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250OiBJbnRlciwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qIFN0YWNrIHZpZXcgdmFyaWFibGVzICovXFxuICAtLXBhbmNha2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC0tdmFsdWUtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC0tdmFsdWUtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAtLXZhbHVlLWNvbG9yLWhvdmVyOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL2ludGVyLnR0ZlxcXCIpO1xcbn1cXG5cXG4vKiBVc2VkIGZvciBNYXRlcmlhbCBTeW1ib2xzIGZyb20gR29vZ2xlIEZvbnRzICovXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDEsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgMjQ7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5hbGwtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWljb24ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uaGVhZGVyLWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDhweCAwO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcblxcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udHJvbHMtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogLTIuNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcblxcbiAgcGFkZGluZzogMCA4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29udHJvbC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sLWVuYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnktY29sb3IpO1xcbn1cXG5cXG4uY29udHJvbC1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNvbnRyb2wtdGV4dCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNpbnRlcmFjdC1tb2RlLWZsaXAgLmNvbnRyb2wtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbiNjaGFuZ2Utc3RhdGUtcmVzZXQgLmNvbnRyb2wtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2w6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zdGFjay1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzdGFjayB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucGFuY2FrZSB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS1wYW5jYWtlLXZpc2liaWxpdHkpO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LWhlaWdodDogNDhweDtcXG4gIGZsZXg6IDE7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XFxufVxcblxcbi5wYW5jYWtlOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXM7XFxufVxcblxcbi5wYW5jYWtlOmhvdmVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ucGFuY2FrZTphY3RpdmU6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBhbmNha2U6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG5cXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuXFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5wYW5jYWtlOmhvdmVyOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wYW5jYWtlOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3IpO1xcbn1cXG5cXG4jaGlzdG9yeS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTV2dztcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcblxcbiAgcGFkZGluZzogMTJweDtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpIDAgMCB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxufVxcblxcbiNoaXN0b3J5LWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMnB4O1xcbiAgdG9wOiAtMTJweDtcXG5cXG4gIHBhZGRpbmc6IDAgOHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2hpc3Rvcnkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDEycHg7XFxuXFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmhpc3RvcnktY2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDsgLyogTGVhdmUgcm9vbSBmb3IgcHNldWRvLWVsZW1lbnQgbGFiZWwgKi9cXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXM7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1oaXN0b3J5LWluZGV4KTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogNnB4O1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhpc3RvcnktY2FyZDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5jYXJkLXBhbmNha2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXG4gIG1heC1oZWlnaHQ6IDhweDtcXG4gIGZsZXg6IDE7XFxuXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFVTRUQgRk9SIFxcXCJVbmRlciBjb25zdHJ1Y3Rpb24uLi5cXFwiIFBBR0UuXFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuaDYge1xcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcblxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxuXFxuKi8gO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IGNsaWNrSGFuZGxlckhpc3RvcnkgPSAoZXZlbnQsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSGlzdG9yeUNhcmQgPSBldmVudC50YXJnZXQuZGF0YXNldC5oaXN0b3J5SW5kZXg7XG5cbiAgLy8gb25seSBydW4gd2hlbiBoaXN0b3J5IGNhcmQgaXMgY2xpY2tlZFxuICBpZiAoIXNlbGVjdGVkSGlzdG9yeUNhcmQpIHJldHVybjtcblxuICBzdGFja09iamVjdC5yZXZlcnQoc2VsZWN0ZWRIaXN0b3J5Q2FyZCk7XG4gIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG59O1xuXG5jb25zdCBhZGRIaXN0b3J5TGlzdGVuZXIgPSAoc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3QgaGlzdG9yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlzdG9yeVwiKTtcbiAgaGlzdG9yeURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PlxuICAgIGNsaWNrSGFuZGxlckhpc3RvcnkoZXZlbnQsIHN0YWNrT2JqZWN0KVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkSGlzdG9yeUxpc3RlbmVyO1xuIiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmZ1bmN0aW9uIF9nZXRPdGhlclNpYmxpbmdzKGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCBjaGlsZHJlbiA9IFsuLi5wYXJlbnQuY2hpbGRyZW5dO1xuICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IGVsZW1lbnQpO1xufVxuXG5jb25zdCBfY2hhbmdlSW50ZXJhY3RNb2RlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkVmlldyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgLy8gdG9nZ2xlIGVuYWJsZWQgY2xhc3Mgb25cbiAgc2VsZWN0ZWRWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIsIHRydWUpO1xuXG4gIC8vIHRvZ2dsZSBlbmFibGVkIGNsYXNzIG9mZiBmb3Igb3RoZXIgaW50ZXJhY3QtbW9kZSBlbGVtZW50c1xuICBjb25zdCBzaWJsaW5ncyA9IF9nZXRPdGhlclNpYmxpbmdzKHNlbGVjdGVkVmlldywgc2VsZWN0ZWRWaWV3LnBhcmVudE5vZGUpO1xuICBzaWJsaW5ncy5mb3JFYWNoKChzaWJsaW5nKSA9PiB7XG4gICAgc2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiLCBmYWxzZSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkSW50ZXJhY3RNb2RlTGlzdGVuZXJzID0gKHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IGludGVyYWN0TW9kZXMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdC1tb2RlXCIpLmNoaWxkcmVuXTtcbiAgaW50ZXJhY3RNb2Rlcy5mb3JFYWNoKChtb2RlKSA9PiB7XG4gICAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBfY2hhbmdlSW50ZXJhY3RNb2RlKGV2ZW50KTtcbiAgICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkSW50ZXJhY3RNb2RlTGlzdGVuZXJzO1xuIiwiaW1wb3J0IHsgU2FuZGJveFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcblxuY29uc3QgcmVuZGVyU3RhY2sgPSAoc3RhY2spID0+IHtcbiAgY29uc3Qgc3RhY2tET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrXCIpO1xuICBzdGFja0RPTS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHN0YWNrQXJyYXkgPSBzdGFjay5vcmRlcjtcblxuICAvLyBUcmFkaXRpb25hbCBmb3IgbG9vcCB1c2VkIGJlY2F1c2UgZWFjaCBwYW5jYWtlJ3MgaW5kZXggaXNuJ3RcbiAgLy8gbmVjZXNzYXJpbHkgdGhlIHNhbWUgYXMgaXRzIHZhbHVlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5ld1BhbmNha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1BhbmNha2UuY2xhc3NMaXN0LmFkZChcInBhbmNha2VcIik7XG5cbiAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSAoc3RhY2tBcnJheVtpXSAvIHN0YWNrQXJyYXkubGVuZ3RoKSAqIDEwMDtcbiAgICBuZXdQYW5jYWtlLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQZXJjZW50YWdlfSVgO1xuXG4gICAgLy8gc2V0IGRhdGEgYXR0cmlidXRlcyB0byBjb25uZWN0IHN0YWNrIGFuZCBjb3JyZXNwb25kaW5nIERPTSBlbGVtZW50c1xuICAgIG5ld1BhbmNha2UuZGF0YXNldC5zdGFja0luZGV4ID0gaTtcbiAgICBuZXdQYW5jYWtlLmRhdGFzZXQudmFsdWUgPSBzdGFja0FycmF5W2ldO1xuXG4gICAgLy8gbWFrZSBwYW5jYWtlIGRyYWdnYWJsZSBvbmx5IGlmIGRyYWcgbW9kZSBlbmFibGVkIG9uIFNhbmRib3hTdGFja1xuICAgIGNvbnN0IGRyYWdNb2RlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdC1tb2RlLWRyYWdcIik7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gZHJhZ01vZGVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhkcmFnZ2FibGUpO1xuICAgIGlmIChkcmFnZ2FibGUgJiYgc3RhY2sgaW5zdGFuY2VvZiBTYW5kYm94U3RhY2spIHtcbiAgICAgIG5ld1BhbmNha2Uuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIH1cblxuICAgIHN0YWNrRE9NLmFwcGVuZChuZXdQYW5jYWtlKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVySGlzdG9yeSA9IChzdGFjaykgPT4ge1xuICBjb25zdCBoaXN0b3J5RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXN0b3J5XCIpO1xuICBoaXN0b3J5RE9NLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgaGlzdG9yeUFycmF5ID0gc3RhY2suaGlzdG9yeTtcbiAgLy8gVHJhZGl0aW9uYWwgZm9yIGxvb3AgdXNlZCBiZWNhdXNlIGVhY2ggY2FyZCdzIGhpc3RvcnktaW5kZXggZGF0YVxuICAvLyBhdHRyaWJ1dGUgY29tZXMgZnJvbSB0aGUgaW5kZXggb2YgdGhlIHNuYXBzbm90IGFzc29jaWF0ZWQgd2l0aFxuICAvLyB0aGUgY2FyZC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXN0b3J5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdIaXN0b3J5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3SGlzdG9yeUNhcmQuY2xhc3NMaXN0LmFkZChcImhpc3RvcnktY2FyZFwiKTtcblxuICAgIG5ld0hpc3RvcnlDYXJkLmRhdGFzZXQuaGlzdG9yeUluZGV4ID0gaTtcblxuICAgIGNvbnN0IGN1cnJlbnRIaXN0b3J5U3RhY2sgPSBoaXN0b3J5QXJyYXlbaV07XG4gICAgY3VycmVudEhpc3RvcnlTdGFjay5mb3JFYWNoKChwYW5jYWtlKSA9PiB7XG4gICAgICBjb25zdCBuZXdIaXN0b3J5UGFuY2FrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdIaXN0b3J5UGFuY2FrZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1wYW5jYWtlXCIpO1xuXG4gICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSAocGFuY2FrZSAvIGN1cnJlbnRIaXN0b3J5U3RhY2subGVuZ3RoKSAqIDEwMDtcbiAgICAgIG5ld0hpc3RvcnlQYW5jYWtlLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQZXJjZW50YWdlfSVgO1xuXG4gICAgICBuZXdIaXN0b3J5Q2FyZC5hcHBlbmQobmV3SGlzdG9yeVBhbmNha2UpO1xuICAgIH0pO1xuXG4gICAgaGlzdG9yeURPTS5hcHBlbmQobmV3SGlzdG9yeUNhcmQpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTdGFja0FuZEhpc3RvcnkgPSAoc3RhY2spID0+IHtcbiAgcmVuZGVyU3RhY2soc3RhY2spO1xuICByZW5kZXJIaXN0b3J5KHN0YWNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlclN0YWNrLCByZW5kZXJIaXN0b3J5LCByZW5kZXJTdGFja0FuZEhpc3RvcnkgfTtcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBmbGlwRXZlbnQgPSAoZXZlbnQsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUGFuY2FrZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXg7XG4gIGNvbnN0IGZsaXBNb2RlRWFuYmxlZCA9IGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3QtbW9kZS1mbGlwXCIpXG4gICAgLmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIik7XG5cbiAgLy8gb25seSBydW4gd2hlbiBwYW5jYWtlIGlzIGNsaWNrZWQgYW5kIGZsaXAgbW9kZSBlbmFibGVkXG4gIGlmIChzZWxlY3RlZFBhbmNha2UgJiYgZmxpcE1vZGVFYW5ibGVkKSB7XG4gICAgc3RhY2tPYmplY3QuZmxpcChzZWxlY3RlZFBhbmNha2UpO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdTdGFydCA9IChldmVudCkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBhbmNha2VcIikpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXgpO1xuXG4gICAgdGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAwLjE7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdFbmQgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFuY2FrZVwiKSkge1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgfVxufTtcblxuY29uc3QgZHJhZ092ZXIgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmNvbnN0IGRyb3AgPSAoZXZlbnQsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIHZhbGlkYXRlIHRhcmdldFxuICBpZiAoIWV2ZW50LnRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZHJvcFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgZHJhZ2dlZEluZGV4ID0gcGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpKTtcbiAgY29uc3QgZHJvcHBlZEluZGV4ID0gcGFyc2VJbnQoZHJvcFRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXgpO1xuXG4gIC8vIHByZXZlbnQgc2VsZi1kcm9wc1xuICBpZiAoZHJvcHBlZEluZGV4ICE9PSBkcmFnZ2VkSW5kZXgpIHtcbiAgICBjb25zdCBzdGFja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIik7XG4gICAgY29uc3QgY2xvbmUgPSBkcm9wVGFyZ2V0LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBkcmFnVGFyZ2V0ID0gc3RhY2tEaXYuY2hpbGROb2Rlc1tkcmFnZ2VkSW5kZXhdO1xuICAgIHN0YWNrRGl2LnJlcGxhY2VDaGlsZChkcmFnVGFyZ2V0LCBkcm9wVGFyZ2V0KTtcbiAgICBkcmFnVGFyZ2V0LmFmdGVyKGNsb25lKTtcbiAgfVxuICBzdGFja09iamVjdC5tb3ZlUGFuY2FrZShkcmFnZ2VkSW5kZXgsIGRyb3BwZWRJbmRleCk7XG4gIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG59O1xuXG5jb25zdCBhZGRGbGlwTGlzdGVuZXJzID0gKHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHN0YWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja1wiKTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gZmxpcEV2ZW50KGV2ZW50LCBzdGFja09iamVjdCkpO1xufTtcblxuY29uc3QgYWRkRHJhZ0xpc3RlbmVycyA9IChzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBzdGFja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIik7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZCk7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcik7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xuICAgIGRyb3AoZXZlbnQsIHN0YWNrT2JqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGRGbGlwTGlzdGVuZXJzLCBhZGREcmFnTGlzdGVuZXJzIH07XG5cbi8qIEZvdW5kYXRpb24gZm9yIGRyYWdvdmVyIHRyYW5zaXRpb25zLCBpZiBuZWVkZWRcblxuICBjb25zdCBvdmVySW5kZXggPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgLmRhdGFzZXQuc3RhY2tJbmRleDtcbiAgaWYgKG92ZXJJbmRleCkge1xuICAgIGNvbnN0IHBhbmNha2VzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIikuY2hpbGRyZW5dO1xuICAgIGNvbnN0IG1vdmVVcCA9IHBhbmNha2VzLmZpbHRlcihcbiAgICAgIChwYW5jYWtlKSA9PiBwYW5jYWtlLmRhdGFzZXQuc3RhY2tJbmRleCA8PSBvdmVySW5kZXhcbiAgICApO1xuICAgIGNvbnN0IG1vdmVEb3duID0gcGFuY2FrZXMuZmlsdGVyKFxuICAgICAgKHBhbmNha2UpID0+IHBhbmNha2UuZGF0YXNldC5zdGFja0luZGV4ID49IG92ZXJJbmRleFxuICAgICk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFuY2FrZXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIG1vdmVVcC5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+XG4gICAgICAgIChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke2hlaWdodCAvIDIgKyA0fXB4KWApXG4gICAgKTtcbiAgICBtb3ZlRG93bi5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+IChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7aGVpZ2h0IC8gMiArIDR9cHgpYClcbiAgICApO1xuICB9XG4gICovXG4iLCJjbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG9yZGVyKSB7XG4gICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuICAgIC8vIFVzZSBzaGFsbG93IGNvcHkgdG8gYXZvaWQgcmVmZXJlbmNlIHNoYXJpbmdcbiAgICB0aGlzLmhpc3RvcnkgPSBbWy4uLnRoaXMub3JkZXJdXTtcbiAgfVxuXG4gIGdldCBvcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKG5ld09yZGVyKSB7XG4gICAgdGhpcy5fb3JkZXIgPSBuZXdPcmRlcjtcbiAgfVxuXG4gIGdldCBoaXN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLl9oaXN0b3J5O1xuICB9XG4gIHNldCBoaXN0b3J5KG5ld0hpc3RvcnkpIHtcbiAgICB0aGlzLl9oaXN0b3J5ID0gbmV3SGlzdG9yeTtcbiAgfVxuXG4gIGZsaXAoaW5kZXgpIHtcbiAgICBjb25zdCBmbGlwQmVuZWF0aCA9IHBhcnNlSW50KGluZGV4KTtcbiAgICBpZiAoZmxpcEJlbmVhdGggPj0gMCAmJiBmbGlwQmVuZWF0aCA8IHRoaXMub3JkZXIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmbGlwcGVkID0gdGhpcy5vcmRlci5zbGljZSgwLCBmbGlwQmVuZWF0aCArIDEpO1xuICAgICAgZmxpcHBlZC5yZXZlcnNlKCk7XG4gICAgICB0aGlzLm9yZGVyLnNwbGljZSgwLCBmbGlwQmVuZWF0aCArIDEsIC4uLmZsaXBwZWQpO1xuICAgICAgLy8gVXNlIHNoYWxsb3cgY29weSB0byBhdm9pZCByZWZlcmVuY2Ugc2hhcmluZ1xuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgICB9XG4gIH1cblxuICByZXZlcnQoaW5kZXgpIHtcbiAgICBjb25zdCByZXZlcnRUbyA9IHBhcnNlSW50KGluZGV4KTtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5oaXN0b3J5LnNsaWNlKDAsIHJldmVydFRvICsgMSk7XG4gICAgLy8gVXNlIHNoYWxsb3cgY29weSB0byBhdm9pZCByZWZlcmVuY2Ugc2hhcmluZ1xuICAgIHRoaXMub3JkZXIgPSBbLi4udGhpcy5oaXN0b3J5W3JldmVydFRvXV07XG4gICAgdGhpcy5oaXN0b3J5ID0gdGVtcDtcbiAgfVxufVxuXG5jbGFzcyBTYW5kYm94U3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG9yZGVyKSB7XG4gICAgc3VwZXIob3JkZXIpO1xuICB9XG4gIGFkZFBhbmNha2UoKSB7XG4gICAgdGhpcy5vcmRlci5wdXNoKHRoaXMub3JkZXIubGVuZ3RoICsgMSk7XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgfVxuICByZW1vdmVQYW5jYWtlKCkge1xuICAgIGNvbnN0IGxhcmdlc3RQYW5jYWtlID0gTWF0aC5tYXgoLi4udGhpcy5vcmRlcik7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMub3JkZXIuZmlsdGVyKChwYW5jYWtlKSA9PiBwYW5jYWtlICE9PSBsYXJnZXN0UGFuY2FrZSk7XG4gICAgdGhpcy5vcmRlciA9IHRlbXA7XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgfVxuICBtb3ZlUGFuY2FrZShmcm9tLCB0bykge1xuICAgIGNvbnN0IHZhbGlkSW5kaWNlcyA9XG4gICAgICBmcm9tID49IDAgJiZcbiAgICAgIHRvID49IDAgJiZcbiAgICAgIGZyb20gPCB0aGlzLm9yZGVyLmxlbmd0aCAmJlxuICAgICAgdG8gPCB0aGlzLm9yZGVyLmxlbmd0aDtcbiAgICBpZiAodmFsaWRJbmRpY2VzKSB7XG4gICAgICBjb25zdCBtb3ZpbmdQYW5jYWtlID0gdGhpcy5vcmRlci5zcGxpY2UoZnJvbSwgMSlbMF07XG4gICAgICB0aGlzLm9yZGVyLnNwbGljZSh0bywgMCwgbW92aW5nUGFuY2FrZSk7XG4gICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKFsuLi50aGlzLm9yZGVyXSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFN0YWNrLCBTYW5kYm94U3RhY2sgfTtcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5mdW5jdGlvbiBfZ2V0T3RoZXJTaWJsaW5ncyhlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4ucGFyZW50LmNoaWxkcmVuXTtcbiAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkICE9PSBlbGVtZW50KTtcbn1cblxuY29uc3QgX2NoYW5nZVZpZXcgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRWaWV3ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAvLyB0b2dnbGUgZW5hYmxlZCBjbGFzcyBvblxuICBzZWxlY3RlZFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIiwgdHJ1ZSk7XG5cbiAgLy8gdG9nZ2xlIGVuYWJsZWQgY2xhc3Mgb2ZmIGZvciBvdGhlciB2aWV3IGVsZW1lbnRzXG4gIGNvbnN0IHNpYmxpbmdzID0gX2dldE90aGVyU2libGluZ3Moc2VsZWN0ZWRWaWV3LCBzZWxlY3RlZFZpZXcucGFyZW50Tm9kZSk7XG4gIHNpYmxpbmdzLmZvckVhY2goKHNpYmxpbmcpID0+IHtcbiAgICBzaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIsIGZhbHNlKTtcbiAgfSk7XG5cbiAgLy8gYWRqdXN0IGN1c3RvbSBwcm9wZXJ0aWVzIHRvIGZpdCBzZWxlY3RlZCB2aWV3XG4gIGlmIChzZWxlY3RlZFZpZXcuaWQgPT09IFwidmlldy1wYW5jYWtlc1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXBhbmNha2UtdmlzaWJpbGl0eVwiLFxuICAgICAgXCJ2aXNpYmxlXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmFsdWUtdmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFZpZXcuaWQgPT09IFwidmlldy1udW1iZXJzXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tcGFuY2FrZS12aXNpYmlsaXR5XCIsXG4gICAgICBcImhpZGRlblwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZhbHVlLXZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvclwiLFxuICAgICAgXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tdmFsdWUtY29sb3ItaG92ZXJcIixcbiAgICAgIFwidmFyKC0tdGVydGlhcnktY29sb3IpXCJcbiAgICApO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkVmlldy5pZCA9PT0gXCJ2aWV3LWJvdGhcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1wYW5jYWtlLXZpc2liaWxpdHlcIixcbiAgICAgIFwidmlzaWJsZVwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZhbHVlLXZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvclwiLFxuICAgICAgXCJ2YXIoLS1zZWNvbmRhcnktY29sb3IpXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvci1ob3ZlclwiLFxuICAgICAgXCJ2YXIoLS1zZWNvbmRhcnktY29sb3IpXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IFwiSW5jb3JyZWN0IGNsaWNrLlwiO1xuICB9XG59O1xuXG5jb25zdCBhZGRWaWV3TGlzdGVuZXJzID0gKHN0YWNrKSA9PiB7XG4gIGNvbnN0IHZpZXdzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld1wiKS5jaGlsZHJlbl07XG4gIHZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIF9jaGFuZ2VWaWV3KGV2ZW50KTtcbiAgICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFjayk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkVmlld0xpc3RlbmVycztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBTdGFjaywgU2FuZGJveFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcbmltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IGFkZFZpZXdMaXN0ZW5lcnMgZnJvbSBcIi4vdmlldy1jb250cm9sc1wiO1xuaW1wb3J0IGFkZEludGVyYWN0TW9kZUxpc3RlbmVycyBmcm9tIFwiLi9pbnRlcmFjdC1tb2RlLWNvbnRyb2xzXCI7XG5pbXBvcnQgYWRkSGlzdG9yeUxpc3RlbmVyIGZyb20gXCIuL2hpc3RvcnktZXZlbnRzXCI7XG5pbXBvcnQgeyBhZGRGbGlwTGlzdGVuZXJzLCBhZGREcmFnTGlzdGVuZXJzIH0gZnJvbSBcIi4vc3RhY2stZXZlbnRzXCI7XG5cbmNvbnN0IGRlZmF1bHRPcmRlciA9IFs2LCA1LCAzLCAyLCA0LCAxXTtcbmNvbnN0IHN0YWNrID0gbmV3IFNhbmRib3hTdGFjayhkZWZhdWx0T3JkZXIpO1xuXG4vLyBhZGQgc3RhY2sgbGlzdG5lcnMgdG8gc3RhY2sgYW5kIGhpc3RvcnkgZWxlbWVudHMgdG8gaGlzdG9yeVxuYWRkRmxpcExpc3RlbmVycyhzdGFjayk7XG5hZGREcmFnTGlzdGVuZXJzKHN0YWNrKTtcbmFkZEhpc3RvcnlMaXN0ZW5lcihzdGFjayk7XG5cbi8vIGFkZCBjb250cm9scyBsaXN0ZW5lcnNcbmFkZFZpZXdMaXN0ZW5lcnMoc3RhY2spO1xuYWRkSW50ZXJhY3RNb2RlTGlzdGVuZXJzKHN0YWNrKTtcblxuLy8gcmVuZGVyIGRlZmF1bHQgc3RhY2sgYW5kIGhpc3Rvcnkgb24gcGFnZSBsb2FkXG5yZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2spO1xuXG5jb25zdCBmdWxsU3RhY2sgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbml0ID0ge1xuICAgIHN0YWNrOiBuZXcgU3RhY2soZGVmYXVsdE9yZGVyKSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5zZWFsKGluaXQpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==