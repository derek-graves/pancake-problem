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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n#all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 100%;\n  min-height: 520px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n#stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(\"./fonts/inter.ttf\");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n#all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 100%;\n  min-height: 520px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n#stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n"],"sourceRoot":""}]);
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

/***/ "./src/change-quantity-controls.js":
/*!*****************************************!*\
  !*** ./src/change-quantity-controls.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


const addChangeQuantityListeners = (manager, stackObject) => {
  const addButton = document.getElementById("change-quantity-add");
  addButton.addEventListener("click", () => {
    manager.executeCommand("ADD");
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
  });

  const removeButton = document.getElementById("change-quantity-remove");
  removeButton.addEventListener("click", () => {
    manager.executeCommand("REMOVE");
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addChangeQuantityListeners);


/***/ }),

/***/ "./src/change-state-controls.js":
/*!**************************************!*\
  !*** ./src/change-state-controls.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


const addChangeStateListeners = (manager, stackObject) => {
  const undoButton = document.getElementById("change-state-undo");
  undoButton.addEventListener("click", () => {
    manager.undo();
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
  });

  const redoButton = document.getElementById("change-state-redo");
  redoButton.addEventListener("click", () => {
    manager.redo();
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
  });

  const resetButton = document.getElementById("change-state-reset");
  resetButton.addEventListener("click", () => {
    manager.executeCommand("RESET");
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addChangeStateListeners);


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


const clickHandlerHistory = (event, manager, stackObject) => {
  const selectedHistoryCard = event.target.dataset.historyIndex;

  // only run when history card is clicked
  if (!selectedHistoryCard) return;

  manager.executeCommand("REVERT", [selectedHistoryCard]);
  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
};

const addHistoryListener = (manager, stackObject) => {
  const historyDiv = document.getElementById("history");
  historyDiv.addEventListener("click", (event) =>
    clickHandlerHistory(event, manager, stackObject)
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

/***/ "./src/load-sandbox.js":
/*!*****************************!*\
  !*** ./src/load-sandbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ "./src/stack.js");
/* harmony import */ var _stack_invoker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stack-invoker */ "./src/stack-invoker.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _view_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-controls */ "./src/view-controls.js");
/* harmony import */ var _interact_mode_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interact-mode-controls */ "./src/interact-mode-controls.js");
/* harmony import */ var _history_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-events */ "./src/history-events.js");
/* harmony import */ var _stack_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stack-events */ "./src/stack-events.js");
/* harmony import */ var _change_state_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-state-controls */ "./src/change-state-controls.js");
/* harmony import */ var _change_quantity_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-quantity-controls */ "./src/change-quantity-controls.js");










const _loadTop = () => {
  const topContainer = document.createElement("div");
  topContainer.classList.add("top");

  // create and add content to top
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "flipjack.";
  header.appendChild(logo);

  const headerButtons = ["home", "school", "extension", "joystick"];
  headerButtons.forEach((element) => {
    const newButton = document.createElement("button");
    newButton.classList.add("header-button");
    newButton.id = element;
    const symbol = document.createElement("div");
    symbol.classList.add("header-icon", "material-symbols-rounded");
    symbol.innerText = element;
    newButton.appendChild(symbol);
    header.appendChild(newButton);
  });

  topContainer.appendChild(header);
  return topContainer;
};

const _loadControls = (isSandbox) => {
  const controlsData = [];

  const view = {
    view: { both: "pin", pancakes: "crop_16_9", numbers: "tag" },
  };
  controlsData.push(view);

  if (isSandbox) {
    const interactMode = {
      "interact-mode": { flip: "360", drag: "drag_indicator" },
    };
    controlsData.push(interactMode);

    const changeQuantity = {
      "change-quantity": { add: "add", remove: "remove" },
    };
    controlsData.push(changeQuantity);
  }

  const changeState = {
    "change-state": { undo: "undo", redo: "redo", reset: "refresh" },
  };
  controlsData.push(changeState);

  const controlsDiv = document.createElement("div");
  controlsDiv.classList.add("controls");

  controlsData.forEach((element) => {
    const groupName = Object.entries(element)[0][0];
    const group = Object.entries(element)[0][1];
    const groupPairs = Object.entries(group);

    const groupDiv = document.createElement("div");
    groupDiv.classList.add("control-group");
    groupDiv.id = groupName;

    groupPairs.forEach((pair) => {
      const button = document.createElement("button");
      button.classList.add("single-control");
      button.id = `${groupName}-${pair[0]}`;
      const enabled =
        button.id === "view-both" || button.id === "interact-mode-flip";
      if (enabled) {
        button.classList.add("single-control-enabled");
      }

      const symbol = document.createElement("div");
      symbol.classList.add("control-icon", "material-symbols-rounded");
      symbol.innerText = pair[1];
      button.appendChild(symbol);

      const label = document.createElement("div");
      label.classList.add("control-text");
      label.innerText = pair[0];
      button.appendChild(label);

      groupDiv.appendChild(button);
    });

    controlsDiv.appendChild(groupDiv);
  });

  return controlsDiv;
};

const _loadMiddle = () => {
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middle");

  // load controls
  const controlsContainer = _loadControls(true);
  middleContainer.appendChild(controlsContainer);

  const stackContainer = document.createElement("div");
  stackContainer.id = "stack-container";
  const stack = document.createElement("div");
  stack.id = "stack";
  stackContainer.appendChild(stack);
  middleContainer.appendChild(stackContainer);

  const historyContainer = document.createElement("div");
  historyContainer.id = "history-container";
  const history = document.createElement("div");
  history.id = "history";
  historyContainer.appendChild(history);
  middleContainer.appendChild(historyContainer);

  return middleContainer;
};

const loadSandbox = () => {
  // load and style all content other than the stack itself
  const allContent = document.getElementById("all-content");
  const top = _loadTop();
  allContent.appendChild(top);
  const middle = _loadMiddle();
  allContent.appendChild(middle);

  // create stack and manager
  const defaultOrder = [6, 5, 3, 2, 4, 1];
  const stack = new _stack__WEBPACK_IMPORTED_MODULE_0__.SandboxStack(defaultOrder);
  const PancakeStackManager = new _stack_invoker__WEBPACK_IMPORTED_MODULE_1__["default"](stack);

  // add stack listners to stack and history listener to history
  (0,_stack_events__WEBPACK_IMPORTED_MODULE_6__.addFlipListeners)(PancakeStackManager, stack);
  (0,_stack_events__WEBPACK_IMPORTED_MODULE_6__.addDragListeners)(PancakeStackManager, stack);
  (0,_history_events__WEBPACK_IMPORTED_MODULE_5__["default"])(PancakeStackManager, stack);

  // add controls listeners
  (0,_view_controls__WEBPACK_IMPORTED_MODULE_3__["default"])(stack);
  (0,_interact_mode_controls__WEBPACK_IMPORTED_MODULE_4__["default"])(stack);
  (0,_change_quantity_controls__WEBPACK_IMPORTED_MODULE_8__["default"])(PancakeStackManager, stack);
  (0,_change_state_controls__WEBPACK_IMPORTED_MODULE_7__["default"])(PancakeStackManager, stack);

  // render default stack and history on page load
  (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStackAndHistory)(stack);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSandbox);


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

  const stackArray = stack.getOrder();

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

  const historyArray = stack.getHistory();
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

/***/ "./src/stack-commands.js":
/*!*******************************!*\
  !*** ./src/stack-commands.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// implement base command class as 'abstract' to ensure all pancake
// stack commands inherit correct behavior and properties
class PancakeStackCommand {
  constructor(pancakeStack) {
    if (this.constructor == PancakeStackCommand) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.pancakeStack = pancakeStack;
  }

  execute() {
    throw new Error("Method 'execute()' must be implemented");
  }
}

class FlipCommand extends PancakeStackCommand {
  constructor(pancakeStack, index) {
    super(pancakeStack);
    this.index = parseInt(index);
  }

  execute() {
    this.pancakeStack.flip(this.index);
  }
}

class RevertFlipsCommand extends PancakeStackCommand {
  constructor(pancakeStack, index) {
    super(pancakeStack);
    this.index = parseInt(index);
  }

  execute() {
    this.pancakeStack.revert(this.index);
  }
}

class ResetCommand extends PancakeStackCommand {
  constructor(pancakeStack) {
    super(pancakeStack);
  }

  execute() {
    this.pancakeStack.reset();
  }
}

class AddPancakeCommand extends PancakeStackCommand {
  constructor(pancakeStack) {
    super(pancakeStack);
  }

  execute() {
    this.pancakeStack.addPancake();
  }
}

class RemovePancakeCommand extends PancakeStackCommand {
  constructor(pancakeStack) {
    super(pancakeStack);
  }

  execute() {
    this.pancakeStack.removePancake();
  }
}

class DragPancakeCommand extends PancakeStackCommand {
  constructor(pancakeStack, from, to) {
    super(pancakeStack);
    this.dragFrom = from;
    this.dragTo = to;
  }

  execute() {
    this.pancakeStack.movePancake(this.dragFrom, this.dragTo);
  }
}

const pancakeStackCommands = {
  FLIP: FlipCommand,
  REVERT: RevertFlipsCommand,
  RESET: ResetCommand,
  ADD: AddPancakeCommand,
  REMOVE: RemovePancakeCommand,
  DRAG: DragPancakeCommand,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pancakeStackCommands);


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


const flipEvent = (event, manager, stackObject) => {
  const selectedPancake = event.target.dataset.stackIndex;
  const flipModeEanbled = document
    .getElementById("interact-mode-flip")
    .classList.contains("single-control-enabled");

  // only run when pancake is clicked and flip mode enabled
  if (selectedPancake && flipModeEanbled) {
    manager.executeCommand("FLIP", [selectedPancake]);
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

const dropEvent = (event, manager, stackObject) => {
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
  manager.executeCommand("DRAG", [draggedIndex, droppedIndex]);
  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderStackAndHistory)(stackObject);
};

const addFlipListeners = (manager, stackObject) => {
  const stackDiv = document.getElementById("stack");
  stackDiv.addEventListener("click", (event) =>
    flipEvent(event, manager, stackObject)
  );
};

const addDragListeners = (manager, stackObject) => {
  const stackDiv = document.getElementById("stack");
  stackDiv.addEventListener("dragstart", dragStart);
  stackDiv.addEventListener("dragend", dragEnd);
  stackDiv.addEventListener("dragover", dragOver);
  stackDiv.addEventListener("drop", (event) => {
    dropEvent(event, manager, stackObject);
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

/***/ "./src/stack-invoker.js":
/*!******************************!*\
  !*** ./src/stack-invoker.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stack_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack-commands */ "./src/stack-commands.js");


class PancakeStackInvoker {
  constructor(pancakeStack) {
    this.pancakeStack = pancakeStack;
    this.pancakeStackCommands = _stack_commands__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.commandsHistory = [];
    this.position = 0;
  }

  executeCommand(request, args = []) {
    // remove undone commands upon new execution after undo(s)
    if (this.position < this.commandsHistory.length - 1) {
      this.commandsHistory = this.commandsHistory.slice(0, this.position + 1);
    }
    if (request) {
      const requestedCommand = this.pancakeStackCommands[request];
      const concreteCommand = new requestedCommand(this.pancakeStack, ...args);
      this.commandsHistory.push(concreteCommand);
      this.position += 1;
      concreteCommand.execute();
    }
  }

  undo() {
    if (this.position > 0) {
      // execute reset command
      const tempReset = new this.pancakeStackCommands["RESET"](
        this.pancakeStack
      );
      tempReset.execute();

      // execute all commands up to position - 1
      for (let i = 0; i < this.position - 1; i++) {
        this.commandsHistory[i].execute();
      }

      this.position -= 1;
    }
  }

  redo() {
    if (this.position < this.commandsHistory.length - 1) {
      this.position += 1;
      this.commandsHistory[this.position].execute();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PancakeStackInvoker);


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
    // Use shallow copies to avoid reference sharing
    this.history = [[...order]];
    this.default = [...order];
  }

  getOrder() {
    return this.order;
  }

  getHistory() {
    return this.history;
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

  reset() {
    this.order = [...this.default];
    this.history = [[...this.default]];
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
/* harmony import */ var _load_sandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-sandbox */ "./src/load-sandbox.js");



(0,_load_sandbox__WEBPACK_IMPORTED_MODULE_1__["default"])();

/* 
const fullStack = (function () {
  const init = {
    stack: new Stack(defaultOrder),
  };
  return Object.seal(init);
})();
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsY0FBYyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyx5QkFBeUIsY0FBYyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdB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RXpDLHlEQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9jaGFuZ2UtcXVhbnRpdHktY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2NoYW5nZS1zdGF0ZS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvaGlzdG9yeS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2ludGVyYWN0LW1vZGUtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2xvYWQtc2FuZGJveC5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay1jb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3RhY2stZXZlbnRzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay1pbnZva2VyLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvdmlldy1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9pbnRlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjM2E0NjU4O1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZDlkOWQ5O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjYjliOWI5O1xcbiAgLS1xdWF0ZXJuYXJ5LWNvbG9yOiAjYWI3NzI4O1xcbiAgLS1wcmltYXJ5LXJhZGl1czogMTJweDtcXG4gIC0tZm9udDogSW50ZXIsIHNhbnMtc2VyaWY7XFxuXFxuICAvKiBTdGFjayB2aWV3IHZhcmlhYmxlcyAqL1xcbiAgLS1wYW5jYWtlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgLS12YWx1ZS1jb2xvci1ob3ZlcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogSW50ZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIFVzZWQgZm9yIE1hdGVyaWFsIFN5bWJvbHMgZnJvbSBHb29nbGUgRm9udHMgKi9cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMSwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiAyNDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI2FsbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5oZWFkZXItaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ubWlkZGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4IDA7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MjBweDtcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuXFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250cm9scy1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAtMi41JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb250cm9sLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbC1lbmFibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRyb2wtaWNvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb250cm9sLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jaW50ZXJhY3QtbW9kZS1mbGlwIC5jb250cm9sLWljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4jY2hhbmdlLXN0YXRlLXJlc2V0IC5jb250cm9sLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbDphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jc3RhY2stY29udGFpbmVyIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3RhY2sge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnBhbmNha2Uge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tcGFuY2FrZS12aXNpYmlsaXR5KTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6IDQ4cHg7XFxuICBmbGV4OiAxO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xcbn1cXG5cXG4ucGFuY2FrZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgY29udGVudDogXFxcIlxcXCI7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4ucGFuY2FrZTpob3Zlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBhbmNha2U6YWN0aXZlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wYW5jYWtlOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdmFsdWUpO1xcblxcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4ucGFuY2FrZTpob3Zlcjo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucGFuY2FrZTphY3RpdmU6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yKTtcXG59XFxuXFxuI2hpc3RvcnktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGhlaWdodDogNzB2aDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG5cXG4gIHBhZGRpbmc6IDEycHg7XFxuXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKSAwIDAgdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbn1cXG5cXG4jaGlzdG9yeS1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTJweDtcXG4gIHRvcDogLTEycHg7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNoaXN0b3J5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5oaXN0b3J5LWNhcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7IC8qIExlYXZlIHJvb20gZm9yIHBzZXVkby1lbGVtZW50IGxhYmVsICovXFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtaGlzdG9yeS1pbmRleCk7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDZweDtcXG59XFxuXFxuLmhpc3RvcnktY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uY2FyZC1wYW5jYWtlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFxuICBtYXgtaGVpZ2h0OiA4cHg7XFxuICBmbGV4OiAxO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBVU0VEIEZPUiBcXFwiVW5kZXIgY29uc3RydWN0aW9uLi4uXFxcIiBQQUdFLlxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbmg2IHtcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcblxcbiovIDtcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIseUJBQXlCOztFQUV6Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUE2QjtBQUMvQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7RUFDRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2Isc0JBQXNC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QixnQkFBZ0I7O0VBRWhCLGFBQWE7O0VBRWIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiw4REFBOEQ7QUFDaEU7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVOztFQUVWLGNBQWM7O0VBRWQsaUNBQWlDOztFQUVqQyx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFNBQVM7O0VBRVQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTs7RUFFUixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGlCQUFpQixFQUFFLHdDQUF3Qzs7RUFFM0Qsc0NBQXNDOztFQUV0QyxlQUFlOztFQUVmLGtCQUFrQjs7RUFFbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQzs7RUFFakMsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNkJBQTZCOztFQUU3QixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0NBQXdDOztFQUV4QyxlQUFlO0VBQ2YsT0FBTzs7RUFFUCxrQkFBa0I7O0VBRWxCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogIzNhNDY1ODtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2Q5ZDlkOTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDAwMDAwO1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2I5YjliOTtcXG4gIC0tcXVhdGVybmFyeS1jb2xvcjogI2FiNzcyODtcXG4gIC0tcHJpbWFyeS1yYWRpdXM6IDEycHg7XFxuICAtLWZvbnQ6IEludGVyLCBzYW5zLXNlcmlmO1xcblxcbiAgLyogU3RhY2sgdmlldyB2YXJpYWJsZXMgKi9cXG4gIC0tcGFuY2FrZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgLS12YWx1ZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgLS12YWx1ZS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIC0tdmFsdWUtY29sb3ItaG92ZXI6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEludGVyO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvaW50ZXIudHRmXFxcIik7XFxufVxcblxcbi8qIFVzZWQgZm9yIE1hdGVyaWFsIFN5bWJvbHMgZnJvbSBHb29nbGUgRm9udHMgKi9cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMSwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiAyNDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI2FsbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5oZWFkZXItaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ubWlkZGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4IDA7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MjBweDtcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuXFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250cm9scy1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAtMi41JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb250cm9sLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbC1lbmFibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRyb2wtaWNvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb250cm9sLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jaW50ZXJhY3QtbW9kZS1mbGlwIC5jb250cm9sLWljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4jY2hhbmdlLXN0YXRlLXJlc2V0IC5jb250cm9sLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbDphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jc3RhY2stY29udGFpbmVyIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3RhY2sge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnBhbmNha2Uge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tcGFuY2FrZS12aXNpYmlsaXR5KTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6IDQ4cHg7XFxuICBmbGV4OiAxO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xcbn1cXG5cXG4ucGFuY2FrZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgY29udGVudDogXFxcIlxcXCI7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4ucGFuY2FrZTpob3Zlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBhbmNha2U6YWN0aXZlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wYW5jYWtlOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdmFsdWUpO1xcblxcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4ucGFuY2FrZTpob3Zlcjo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucGFuY2FrZTphY3RpdmU6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yKTtcXG59XFxuXFxuI2hpc3RvcnktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGhlaWdodDogNzB2aDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG5cXG4gIHBhZGRpbmc6IDEycHg7XFxuXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKSAwIDAgdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbn1cXG5cXG4jaGlzdG9yeS1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTJweDtcXG4gIHRvcDogLTEycHg7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNoaXN0b3J5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5oaXN0b3J5LWNhcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7IC8qIExlYXZlIHJvb20gZm9yIHBzZXVkby1lbGVtZW50IGxhYmVsICovXFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtaGlzdG9yeS1pbmRleCk7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDZweDtcXG59XFxuXFxuLmhpc3RvcnktY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uY2FyZC1wYW5jYWtlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFxuICBtYXgtaGVpZ2h0OiA4cHg7XFxuICBmbGV4OiAxO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBVU0VEIEZPUiBcXFwiVW5kZXIgY29uc3RydWN0aW9uLi4uXFxcIiBQQUdFLlxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbmg2IHtcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcblxcbiovIDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBhZGRDaGFuZ2VRdWFudGl0eUxpc3RlbmVycyA9IChtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZS1xdWFudGl0eS1hZGRcIik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1hbmFnZXIuZXhlY3V0ZUNvbW1hbmQoXCJBRERcIik7XG4gICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2UtcXVhbnRpdHktcmVtb3ZlXCIpO1xuICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYW5hZ2VyLmV4ZWN1dGVDb21tYW5kKFwiUkVNT1ZFXCIpO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ2hhbmdlUXVhbnRpdHlMaXN0ZW5lcnM7XG4iLCJpbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgYWRkQ2hhbmdlU3RhdGVMaXN0ZW5lcnMgPSAobWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3QgdW5kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLXN0YXRlLXVuZG9cIik7XG4gIHVuZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYW5hZ2VyLnVuZG8oKTtcbiAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICB9KTtcblxuICBjb25zdCByZWRvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2Utc3RhdGUtcmVkb1wiKTtcbiAgcmVkb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1hbmFnZXIucmVkbygpO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2Utc3RhdGUtcmVzZXRcIik7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFuYWdlci5leGVjdXRlQ29tbWFuZChcIlJFU0VUXCIpO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ2hhbmdlU3RhdGVMaXN0ZW5lcnM7XG4iLCJpbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgY2xpY2tIYW5kbGVySGlzdG9yeSA9IChldmVudCwgbWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRIaXN0b3J5Q2FyZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lmhpc3RvcnlJbmRleDtcblxuICAvLyBvbmx5IHJ1biB3aGVuIGhpc3RvcnkgY2FyZCBpcyBjbGlja2VkXG4gIGlmICghc2VsZWN0ZWRIaXN0b3J5Q2FyZCkgcmV0dXJuO1xuXG4gIG1hbmFnZXIuZXhlY3V0ZUNvbW1hbmQoXCJSRVZFUlRcIiwgW3NlbGVjdGVkSGlzdG9yeUNhcmRdKTtcbiAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbn07XG5cbmNvbnN0IGFkZEhpc3RvcnlMaXN0ZW5lciA9IChtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBoaXN0b3J5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXN0b3J5XCIpO1xuICBoaXN0b3J5RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+XG4gICAgY2xpY2tIYW5kbGVySGlzdG9yeShldmVudCwgbWFuYWdlciwgc3RhY2tPYmplY3QpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRIaXN0b3J5TGlzdGVuZXI7XG4iLCJpbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZnVuY3Rpb24gX2dldE90aGVyU2libGluZ3MoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gWy4uLnBhcmVudC5jaGlsZHJlbl07XG4gIHJldHVybiBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZCAhPT0gZWxlbWVudCk7XG59XG5cbmNvbnN0IF9jaGFuZ2VJbnRlcmFjdE1vZGUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRWaWV3ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAvLyB0b2dnbGUgZW5hYmxlZCBjbGFzcyBvblxuICBzZWxlY3RlZFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIiwgdHJ1ZSk7XG5cbiAgLy8gdG9nZ2xlIGVuYWJsZWQgY2xhc3Mgb2ZmIGZvciBvdGhlciBpbnRlcmFjdC1tb2RlIGVsZW1lbnRzXG4gIGNvbnN0IHNpYmxpbmdzID0gX2dldE90aGVyU2libGluZ3Moc2VsZWN0ZWRWaWV3LCBzZWxlY3RlZFZpZXcucGFyZW50Tm9kZSk7XG4gIHNpYmxpbmdzLmZvckVhY2goKHNpYmxpbmcpID0+IHtcbiAgICBzaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIsIGZhbHNlKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRJbnRlcmFjdE1vZGVMaXN0ZW5lcnMgPSAoc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3QgaW50ZXJhY3RNb2RlcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyYWN0LW1vZGVcIikuY2hpbGRyZW5dO1xuICBpbnRlcmFjdE1vZGVzLmZvckVhY2goKG1vZGUpID0+IHtcbiAgICBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIF9jaGFuZ2VJbnRlcmFjdE1vZGUoZXZlbnQpO1xuICAgICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRJbnRlcmFjdE1vZGVMaXN0ZW5lcnM7XG4iLCJpbXBvcnQgeyBTYW5kYm94U3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xuaW1wb3J0IFBhbmNha2VTdGFja0ludm9rZXIgZnJvbSBcIi4vc3RhY2staW52b2tlclwiO1xuaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgYWRkVmlld0xpc3RlbmVycyBmcm9tIFwiLi92aWV3LWNvbnRyb2xzXCI7XG5pbXBvcnQgYWRkSW50ZXJhY3RNb2RlTGlzdGVuZXJzIGZyb20gXCIuL2ludGVyYWN0LW1vZGUtY29udHJvbHNcIjtcbmltcG9ydCBhZGRIaXN0b3J5TGlzdGVuZXIgZnJvbSBcIi4vaGlzdG9yeS1ldmVudHNcIjtcbmltcG9ydCB7IGFkZEZsaXBMaXN0ZW5lcnMsIGFkZERyYWdMaXN0ZW5lcnMgfSBmcm9tIFwiLi9zdGFjay1ldmVudHNcIjtcbmltcG9ydCBhZGRDaGFuZ2VTdGF0ZUxpc3RlbmVycyBmcm9tIFwiLi9jaGFuZ2Utc3RhdGUtY29udHJvbHNcIjtcbmltcG9ydCBhZGRDaGFuZ2VRdWFudGl0eUxpc3RlbmVycyBmcm9tIFwiLi9jaGFuZ2UtcXVhbnRpdHktY29udHJvbHNcIjtcblxuY29uc3QgX2xvYWRUb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9wXCIpO1xuXG4gIC8vIGNyZWF0ZSBhbmQgYWRkIGNvbnRlbnQgdG8gdG9wXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJmbGlwamFjay5cIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIGNvbnN0IGhlYWRlckJ1dHRvbnMgPSBbXCJob21lXCIsIFwic2Nob29sXCIsIFwiZXh0ZW5zaW9uXCIsIFwiam95c3RpY2tcIl07XG4gIGhlYWRlckJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnV0dG9uXCIpO1xuICAgIG5ld0J1dHRvbi5pZCA9IGVsZW1lbnQ7XG4gICAgY29uc3Qgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pY29uXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICAgIHN5bWJvbC5pbm5lclRleHQgPSBlbGVtZW50O1xuICAgIG5ld0J1dHRvbi5hcHBlbmRDaGlsZChzeW1ib2wpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuICB9KTtcblxuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgcmV0dXJuIHRvcENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IF9sb2FkQ29udHJvbHMgPSAoaXNTYW5kYm94KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzRGF0YSA9IFtdO1xuXG4gIGNvbnN0IHZpZXcgPSB7XG4gICAgdmlldzogeyBib3RoOiBcInBpblwiLCBwYW5jYWtlczogXCJjcm9wXzE2XzlcIiwgbnVtYmVyczogXCJ0YWdcIiB9LFxuICB9O1xuICBjb250cm9sc0RhdGEucHVzaCh2aWV3KTtcblxuICBpZiAoaXNTYW5kYm94KSB7XG4gICAgY29uc3QgaW50ZXJhY3RNb2RlID0ge1xuICAgICAgXCJpbnRlcmFjdC1tb2RlXCI6IHsgZmxpcDogXCIzNjBcIiwgZHJhZzogXCJkcmFnX2luZGljYXRvclwiIH0sXG4gICAgfTtcbiAgICBjb250cm9sc0RhdGEucHVzaChpbnRlcmFjdE1vZGUpO1xuXG4gICAgY29uc3QgY2hhbmdlUXVhbnRpdHkgPSB7XG4gICAgICBcImNoYW5nZS1xdWFudGl0eVwiOiB7IGFkZDogXCJhZGRcIiwgcmVtb3ZlOiBcInJlbW92ZVwiIH0sXG4gICAgfTtcbiAgICBjb250cm9sc0RhdGEucHVzaChjaGFuZ2VRdWFudGl0eSk7XG4gIH1cblxuICBjb25zdCBjaGFuZ2VTdGF0ZSA9IHtcbiAgICBcImNoYW5nZS1zdGF0ZVwiOiB7IHVuZG86IFwidW5kb1wiLCByZWRvOiBcInJlZG9cIiwgcmVzZXQ6IFwicmVmcmVzaFwiIH0sXG4gIH07XG4gIGNvbnRyb2xzRGF0YS5wdXNoKGNoYW5nZVN0YXRlKTtcblxuICBjb25zdCBjb250cm9sc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRyb2xzRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250cm9sc1wiKTtcblxuICBjb250cm9sc0RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwTmFtZSA9IE9iamVjdC5lbnRyaWVzKGVsZW1lbnQpWzBdWzBdO1xuICAgIGNvbnN0IGdyb3VwID0gT2JqZWN0LmVudHJpZXMoZWxlbWVudClbMF1bMV07XG4gICAgY29uc3QgZ3JvdXBQYWlycyA9IE9iamVjdC5lbnRyaWVzKGdyb3VwKTtcblxuICAgIGNvbnN0IGdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncm91cERpdi5jbGFzc0xpc3QuYWRkKFwiY29udHJvbC1ncm91cFwiKTtcbiAgICBncm91cERpdi5pZCA9IGdyb3VwTmFtZTtcblxuICAgIGdyb3VwUGFpcnMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLWNvbnRyb2xcIik7XG4gICAgICBidXR0b24uaWQgPSBgJHtncm91cE5hbWV9LSR7cGFpclswXX1gO1xuICAgICAgY29uc3QgZW5hYmxlZCA9XG4gICAgICAgIGJ1dHRvbi5pZCA9PT0gXCJ2aWV3LWJvdGhcIiB8fCBidXR0b24uaWQgPT09IFwiaW50ZXJhY3QtbW9kZS1mbGlwXCI7XG4gICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImNvbnRyb2wtaWNvblwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKTtcbiAgICAgIHN5bWJvbC5pbm5lclRleHQgPSBwYWlyWzFdO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHN5bWJvbCk7XG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sLXRleHRcIik7XG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBwYWlyWzBdO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcblxuICAgIGNvbnRyb2xzRGl2LmFwcGVuZENoaWxkKGdyb3VwRGl2KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRyb2xzRGl2O1xufTtcblxuY29uc3QgX2xvYWRNaWRkbGUgPSAoKSA9PiB7XG4gIGNvbnN0IG1pZGRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pZGRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWlkZGxlXCIpO1xuXG4gIC8vIGxvYWQgY29udHJvbHNcbiAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBfbG9hZENvbnRyb2xzKHRydWUpO1xuICBtaWRkbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udHJvbHNDb250YWluZXIpO1xuXG4gIGNvbnN0IHN0YWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhY2tDb250YWluZXIuaWQgPSBcInN0YWNrLWNvbnRhaW5lclwiO1xuICBjb25zdCBzdGFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YWNrLmlkID0gXCJzdGFja1wiO1xuICBzdGFja0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFjayk7XG4gIG1pZGRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFja0NvbnRhaW5lcik7XG5cbiAgY29uc3QgaGlzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhpc3RvcnlDb250YWluZXIuaWQgPSBcImhpc3RvcnktY29udGFpbmVyXCI7XG4gIGNvbnN0IGhpc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoaXN0b3J5LmlkID0gXCJoaXN0b3J5XCI7XG4gIGhpc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlzdG9yeSk7XG4gIG1pZGRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoaXN0b3J5Q29udGFpbmVyKTtcblxuICByZXR1cm4gbWlkZGxlQ29udGFpbmVyO1xufTtcblxuY29uc3QgbG9hZFNhbmRib3ggPSAoKSA9PiB7XG4gIC8vIGxvYWQgYW5kIHN0eWxlIGFsbCBjb250ZW50IG90aGVyIHRoYW4gdGhlIHN0YWNrIGl0c2VsZlxuICBjb25zdCBhbGxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtY29udGVudFwiKTtcbiAgY29uc3QgdG9wID0gX2xvYWRUb3AoKTtcbiAgYWxsQ29udGVudC5hcHBlbmRDaGlsZCh0b3ApO1xuICBjb25zdCBtaWRkbGUgPSBfbG9hZE1pZGRsZSgpO1xuICBhbGxDb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZSk7XG5cbiAgLy8gY3JlYXRlIHN0YWNrIGFuZCBtYW5hZ2VyXG4gIGNvbnN0IGRlZmF1bHRPcmRlciA9IFs2LCA1LCAzLCAyLCA0LCAxXTtcbiAgY29uc3Qgc3RhY2sgPSBuZXcgU2FuZGJveFN0YWNrKGRlZmF1bHRPcmRlcik7XG4gIGNvbnN0IFBhbmNha2VTdGFja01hbmFnZXIgPSBuZXcgUGFuY2FrZVN0YWNrSW52b2tlcihzdGFjayk7XG5cbiAgLy8gYWRkIHN0YWNrIGxpc3RuZXJzIHRvIHN0YWNrIGFuZCBoaXN0b3J5IGxpc3RlbmVyIHRvIGhpc3RvcnlcbiAgYWRkRmxpcExpc3RlbmVycyhQYW5jYWtlU3RhY2tNYW5hZ2VyLCBzdGFjayk7XG4gIGFkZERyYWdMaXN0ZW5lcnMoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuICBhZGRIaXN0b3J5TGlzdGVuZXIoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuXG4gIC8vIGFkZCBjb250cm9scyBsaXN0ZW5lcnNcbiAgYWRkVmlld0xpc3RlbmVycyhzdGFjayk7XG4gIGFkZEludGVyYWN0TW9kZUxpc3RlbmVycyhzdGFjayk7XG4gIGFkZENoYW5nZVF1YW50aXR5TGlzdGVuZXJzKFBhbmNha2VTdGFja01hbmFnZXIsIHN0YWNrKTtcbiAgYWRkQ2hhbmdlU3RhdGVMaXN0ZW5lcnMoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuXG4gIC8vIHJlbmRlciBkZWZhdWx0IHN0YWNrIGFuZCBoaXN0b3J5IG9uIHBhZ2UgbG9hZFxuICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNhbmRib3g7XG4iLCJpbXBvcnQgeyBTYW5kYm94U3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xuXG5jb25zdCByZW5kZXJTdGFjayA9IChzdGFjaykgPT4ge1xuICBjb25zdCBzdGFja0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIik7XG4gIHN0YWNrRE9NLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3Qgc3RhY2tBcnJheSA9IHN0YWNrLmdldE9yZGVyKCk7XG5cbiAgLy8gVHJhZGl0aW9uYWwgZm9yIGxvb3AgdXNlZCBiZWNhdXNlIGVhY2ggcGFuY2FrZSdzIGluZGV4IGlzbid0XG4gIC8vIG5lY2Vzc2FyaWx5IHRoZSBzYW1lIGFzIGl0cyB2YWx1ZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdQYW5jYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQYW5jYWtlLmNsYXNzTGlzdC5hZGQoXCJwYW5jYWtlXCIpO1xuXG4gICAgY29uc3Qgd2lkdGhQZXJjZW50YWdlID0gKHN0YWNrQXJyYXlbaV0gLyBzdGFja0FycmF5Lmxlbmd0aCkgKiAxMDA7XG4gICAgbmV3UGFuY2FrZS5zdHlsZS53aWR0aCA9IGAke3dpZHRoUGVyY2VudGFnZX0lYDtcblxuICAgIC8vIHNldCBkYXRhIGF0dHJpYnV0ZXMgdG8gY29ubmVjdCBzdGFjayBhbmQgY29ycmVzcG9uZGluZyBET00gZWxlbWVudHNcbiAgICBuZXdQYW5jYWtlLmRhdGFzZXQuc3RhY2tJbmRleCA9IGk7XG4gICAgbmV3UGFuY2FrZS5kYXRhc2V0LnZhbHVlID0gc3RhY2tBcnJheVtpXTtcblxuICAgIC8vIG1ha2UgcGFuY2FrZSBkcmFnZ2FibGUgb25seSBpZiBkcmFnIG1vZGUgZW5hYmxlZCBvbiBTYW5kYm94U3RhY2tcbiAgICBjb25zdCBkcmFnTW9kZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3QtbW9kZS1kcmFnXCIpO1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRyYWdNb2RlRGl2LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIik7XG4gICAgY29uc29sZS5sb2coZHJhZ2dhYmxlKTtcbiAgICBpZiAoZHJhZ2dhYmxlICYmIHN0YWNrIGluc3RhbmNlb2YgU2FuZGJveFN0YWNrKSB7XG4gICAgICBuZXdQYW5jYWtlLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzdGFja0RPTS5hcHBlbmQobmV3UGFuY2FrZSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlckhpc3RvcnkgPSAoc3RhY2spID0+IHtcbiAgY29uc3QgaGlzdG9yeURPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlzdG9yeVwiKTtcbiAgaGlzdG9yeURPTS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGhpc3RvcnlBcnJheSA9IHN0YWNrLmdldEhpc3RvcnkoKTtcbiAgLy8gVHJhZGl0aW9uYWwgZm9yIGxvb3AgdXNlZCBiZWNhdXNlIGVhY2ggY2FyZCdzIGhpc3RvcnktaW5kZXggZGF0YVxuICAvLyBhdHRyaWJ1dGUgY29tZXMgZnJvbSB0aGUgaW5kZXggb2YgdGhlIHNuYXBzbm90IGFzc29jaWF0ZWQgd2l0aFxuICAvLyB0aGUgY2FyZC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXN0b3J5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXdIaXN0b3J5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3SGlzdG9yeUNhcmQuY2xhc3NMaXN0LmFkZChcImhpc3RvcnktY2FyZFwiKTtcblxuICAgIG5ld0hpc3RvcnlDYXJkLmRhdGFzZXQuaGlzdG9yeUluZGV4ID0gaTtcblxuICAgIGNvbnN0IGN1cnJlbnRIaXN0b3J5U3RhY2sgPSBoaXN0b3J5QXJyYXlbaV07XG4gICAgY3VycmVudEhpc3RvcnlTdGFjay5mb3JFYWNoKChwYW5jYWtlKSA9PiB7XG4gICAgICBjb25zdCBuZXdIaXN0b3J5UGFuY2FrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdIaXN0b3J5UGFuY2FrZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1wYW5jYWtlXCIpO1xuXG4gICAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSAocGFuY2FrZSAvIGN1cnJlbnRIaXN0b3J5U3RhY2subGVuZ3RoKSAqIDEwMDtcbiAgICAgIG5ld0hpc3RvcnlQYW5jYWtlLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQZXJjZW50YWdlfSVgO1xuXG4gICAgICBuZXdIaXN0b3J5Q2FyZC5hcHBlbmQobmV3SGlzdG9yeVBhbmNha2UpO1xuICAgIH0pO1xuXG4gICAgaGlzdG9yeURPTS5hcHBlbmQobmV3SGlzdG9yeUNhcmQpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTdGFja0FuZEhpc3RvcnkgPSAoc3RhY2spID0+IHtcbiAgcmVuZGVyU3RhY2soc3RhY2spO1xuICByZW5kZXJIaXN0b3J5KHN0YWNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlclN0YWNrLCByZW5kZXJIaXN0b3J5LCByZW5kZXJTdGFja0FuZEhpc3RvcnkgfTtcbiIsIi8vIGltcGxlbWVudCBiYXNlIGNvbW1hbmQgY2xhc3MgYXMgJ2Fic3RyYWN0JyB0byBlbnN1cmUgYWxsIHBhbmNha2Vcbi8vIHN0YWNrIGNvbW1hbmRzIGluaGVyaXQgY29ycmVjdCBiZWhhdmlvciBhbmQgcHJvcGVydGllc1xuY2xhc3MgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaykge1xuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yID09IFBhbmNha2VTdGFja0NvbW1hbmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGNsYXNzZXMgY2FuJ3QgYmUgaW5zdGFudGlhdGVkLlwiKTtcbiAgICB9XG4gICAgdGhpcy5wYW5jYWtlU3RhY2sgPSBwYW5jYWtlU3RhY2s7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCAnZXhlY3V0ZSgpJyBtdXN0IGJlIGltcGxlbWVudGVkXCIpO1xuICB9XG59XG5cbmNsYXNzIEZsaXBDb21tYW5kIGV4dGVuZHMgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaywgaW5kZXgpIHtcbiAgICBzdXBlcihwYW5jYWtlU3RhY2spO1xuICAgIHRoaXMuaW5kZXggPSBwYXJzZUludChpbmRleCk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrLmZsaXAodGhpcy5pbmRleCk7XG4gIH1cbn1cblxuY2xhc3MgUmV2ZXJ0RmxpcHNDb21tYW5kIGV4dGVuZHMgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaywgaW5kZXgpIHtcbiAgICBzdXBlcihwYW5jYWtlU3RhY2spO1xuICAgIHRoaXMuaW5kZXggPSBwYXJzZUludChpbmRleCk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrLnJldmVydCh0aGlzLmluZGV4KTtcbiAgfVxufVxuXG5jbGFzcyBSZXNldENvbW1hbmQgZXh0ZW5kcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrKSB7XG4gICAgc3VwZXIocGFuY2FrZVN0YWNrKTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2sucmVzZXQoKTtcbiAgfVxufVxuXG5jbGFzcyBBZGRQYW5jYWtlQ29tbWFuZCBleHRlbmRzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2spIHtcbiAgICBzdXBlcihwYW5jYWtlU3RhY2spO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjay5hZGRQYW5jYWtlKCk7XG4gIH1cbn1cblxuY2xhc3MgUmVtb3ZlUGFuY2FrZUNvbW1hbmQgZXh0ZW5kcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrKSB7XG4gICAgc3VwZXIocGFuY2FrZVN0YWNrKTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2sucmVtb3ZlUGFuY2FrZSgpO1xuICB9XG59XG5cbmNsYXNzIERyYWdQYW5jYWtlQ29tbWFuZCBleHRlbmRzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2ssIGZyb20sIHRvKSB7XG4gICAgc3VwZXIocGFuY2FrZVN0YWNrKTtcbiAgICB0aGlzLmRyYWdGcm9tID0gZnJvbTtcbiAgICB0aGlzLmRyYWdUbyA9IHRvO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjay5tb3ZlUGFuY2FrZSh0aGlzLmRyYWdGcm9tLCB0aGlzLmRyYWdUbyk7XG4gIH1cbn1cblxuY29uc3QgcGFuY2FrZVN0YWNrQ29tbWFuZHMgPSB7XG4gIEZMSVA6IEZsaXBDb21tYW5kLFxuICBSRVZFUlQ6IFJldmVydEZsaXBzQ29tbWFuZCxcbiAgUkVTRVQ6IFJlc2V0Q29tbWFuZCxcbiAgQUREOiBBZGRQYW5jYWtlQ29tbWFuZCxcbiAgUkVNT1ZFOiBSZW1vdmVQYW5jYWtlQ29tbWFuZCxcbiAgRFJBRzogRHJhZ1BhbmNha2VDb21tYW5kLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFuY2FrZVN0YWNrQ29tbWFuZHM7XG4iLCJpbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgZmxpcEV2ZW50ID0gKGV2ZW50LCBtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFBhbmNha2UgPSBldmVudC50YXJnZXQuZGF0YXNldC5zdGFja0luZGV4O1xuICBjb25zdCBmbGlwTW9kZUVhbmJsZWQgPSBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImludGVyYWN0LW1vZGUtZmxpcFwiKVxuICAgIC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIpO1xuXG4gIC8vIG9ubHkgcnVuIHdoZW4gcGFuY2FrZSBpcyBjbGlja2VkIGFuZCBmbGlwIG1vZGUgZW5hYmxlZFxuICBpZiAoc2VsZWN0ZWRQYW5jYWtlICYmIGZsaXBNb2RlRWFuYmxlZCkge1xuICAgIG1hbmFnZXIuZXhlY3V0ZUNvbW1hbmQoXCJGTElQXCIsIFtzZWxlY3RlZFBhbmNha2VdKTtcbiAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICB9XG59O1xuXG5jb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5jYWtlXCIpKSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCB0YXJnZXQuZGF0YXNldC5zdGFja0luZGV4KTtcblxuICAgIHRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMC4xO1xuICB9XG59O1xuXG5jb25zdCBkcmFnRW5kID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBhbmNha2VcIikpIHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdPdmVyID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5jb25zdCBkcm9wRXZlbnQgPSAoZXZlbnQsIG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIHZhbGlkYXRlIHRhcmdldFxuICBpZiAoIWV2ZW50LnRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZHJvcFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgZHJhZ2dlZEluZGV4ID0gcGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpKTtcbiAgY29uc3QgZHJvcHBlZEluZGV4ID0gcGFyc2VJbnQoZHJvcFRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXgpO1xuXG4gIC8vIHByZXZlbnQgc2VsZi1kcm9wc1xuICBpZiAoZHJvcHBlZEluZGV4ICE9PSBkcmFnZ2VkSW5kZXgpIHtcbiAgICBjb25zdCBzdGFja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIik7XG4gICAgY29uc3QgY2xvbmUgPSBkcm9wVGFyZ2V0LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBkcmFnVGFyZ2V0ID0gc3RhY2tEaXYuY2hpbGROb2Rlc1tkcmFnZ2VkSW5kZXhdO1xuICAgIHN0YWNrRGl2LnJlcGxhY2VDaGlsZChkcmFnVGFyZ2V0LCBkcm9wVGFyZ2V0KTtcbiAgICBkcmFnVGFyZ2V0LmFmdGVyKGNsb25lKTtcbiAgfVxuICBtYW5hZ2VyLmV4ZWN1dGVDb21tYW5kKFwiRFJBR1wiLCBbZHJhZ2dlZEluZGV4LCBkcm9wcGVkSW5kZXhdKTtcbiAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbn07XG5cbmNvbnN0IGFkZEZsaXBMaXN0ZW5lcnMgPSAobWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3Qgc3RhY2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrXCIpO1xuICBzdGFja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PlxuICAgIGZsaXBFdmVudChldmVudCwgbWFuYWdlciwgc3RhY2tPYmplY3QpXG4gICk7XG59O1xuXG5jb25zdCBhZGREcmFnTGlzdGVuZXJzID0gKG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHN0YWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja1wiKTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnU3RhcnQpO1xuICBzdGFja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kKTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XG4gICAgZHJvcEV2ZW50KGV2ZW50LCBtYW5hZ2VyLCBzdGFja09iamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkRmxpcExpc3RlbmVycywgYWRkRHJhZ0xpc3RlbmVycyB9O1xuXG4vKiBGb3VuZGF0aW9uIGZvciBkcmFnb3ZlciB0cmFuc2l0aW9ucywgaWYgbmVlZGVkXG5cbiAgY29uc3Qgb3ZlckluZGV4ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIC5kYXRhc2V0LnN0YWNrSW5kZXg7XG4gIGlmIChvdmVySW5kZXgpIHtcbiAgICBjb25zdCBwYW5jYWtlcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrXCIpLmNoaWxkcmVuXTtcbiAgICBjb25zdCBtb3ZlVXAgPSBwYW5jYWtlcy5maWx0ZXIoXG4gICAgICAocGFuY2FrZSkgPT4gcGFuY2FrZS5kYXRhc2V0LnN0YWNrSW5kZXggPD0gb3ZlckluZGV4XG4gICAgKTtcbiAgICBjb25zdCBtb3ZlRG93biA9IHBhbmNha2VzLmZpbHRlcihcbiAgICAgIChwYW5jYWtlKSA9PiBwYW5jYWtlLmRhdGFzZXQuc3RhY2tJbmRleCA+PSBvdmVySW5kZXhcbiAgICApO1xuICAgIGNvbnN0IGhlaWdodCA9IHBhbmNha2VzWzBdLm9mZnNldEhlaWdodDtcbiAgICBtb3ZlVXAuZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAoZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtoZWlnaHQgLyAyICsgNH1weClgKVxuICAgICk7XG4gICAgbW92ZURvd24uZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PiAoZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2hlaWdodCAvIDIgKyA0fXB4KWApXG4gICAgKTtcbiAgfVxuICAqL1xuIiwiaW1wb3J0IHBhbmNha2VTdGFja0NvbW1hbmRzIGZyb20gXCIuL3N0YWNrLWNvbW1hbmRzXCI7XG5cbmNsYXNzIFBhbmNha2VTdGFja0ludm9rZXIge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2spIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjayA9IHBhbmNha2VTdGFjaztcbiAgICB0aGlzLnBhbmNha2VTdGFja0NvbW1hbmRzID0gcGFuY2FrZVN0YWNrQ29tbWFuZHM7XG4gICAgdGhpcy5jb21tYW5kc0hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgfVxuXG4gIGV4ZWN1dGVDb21tYW5kKHJlcXVlc3QsIGFyZ3MgPSBbXSkge1xuICAgIC8vIHJlbW92ZSB1bmRvbmUgY29tbWFuZHMgdXBvbiBuZXcgZXhlY3V0aW9uIGFmdGVyIHVuZG8ocylcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA8IHRoaXMuY29tbWFuZHNIaXN0b3J5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY29tbWFuZHNIaXN0b3J5ID0gdGhpcy5jb21tYW5kc0hpc3Rvcnkuc2xpY2UoMCwgdGhpcy5wb3NpdGlvbiArIDEpO1xuICAgIH1cbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgY29uc3QgcmVxdWVzdGVkQ29tbWFuZCA9IHRoaXMucGFuY2FrZVN0YWNrQ29tbWFuZHNbcmVxdWVzdF07XG4gICAgICBjb25zdCBjb25jcmV0ZUNvbW1hbmQgPSBuZXcgcmVxdWVzdGVkQ29tbWFuZCh0aGlzLnBhbmNha2VTdGFjaywgLi4uYXJncyk7XG4gICAgICB0aGlzLmNvbW1hbmRzSGlzdG9yeS5wdXNoKGNvbmNyZXRlQ29tbWFuZCk7XG4gICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICBjb25jcmV0ZUNvbW1hbmQuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVuZG8oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPiAwKSB7XG4gICAgICAvLyBleGVjdXRlIHJlc2V0IGNvbW1hbmRcbiAgICAgIGNvbnN0IHRlbXBSZXNldCA9IG5ldyB0aGlzLnBhbmNha2VTdGFja0NvbW1hbmRzW1wiUkVTRVRcIl0oXG4gICAgICAgIHRoaXMucGFuY2FrZVN0YWNrXG4gICAgICApO1xuICAgICAgdGVtcFJlc2V0LmV4ZWN1dGUoKTtcblxuICAgICAgLy8gZXhlY3V0ZSBhbGwgY29tbWFuZHMgdXAgdG8gcG9zaXRpb24gLSAxXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb24gLSAxOyBpKyspIHtcbiAgICAgICAgdGhpcy5jb21tYW5kc0hpc3RvcnlbaV0uZXhlY3V0ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvc2l0aW9uIC09IDE7XG4gICAgfVxuICB9XG5cbiAgcmVkbygpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA8IHRoaXMuY29tbWFuZHNIaXN0b3J5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgIHRoaXMuY29tbWFuZHNIaXN0b3J5W3RoaXMucG9zaXRpb25dLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuY2FrZVN0YWNrSW52b2tlcjtcbiIsImNsYXNzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Iob3JkZXIpIHtcbiAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgLy8gVXNlIHNoYWxsb3cgY29waWVzIHRvIGF2b2lkIHJlZmVyZW5jZSBzaGFyaW5nXG4gICAgdGhpcy5oaXN0b3J5ID0gW1suLi5vcmRlcl1dO1xuICAgIHRoaXMuZGVmYXVsdCA9IFsuLi5vcmRlcl07XG4gIH1cblxuICBnZXRPcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcjtcbiAgfVxuXG4gIGdldEhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlzdG9yeTtcbiAgfVxuXG4gIGZsaXAoaW5kZXgpIHtcbiAgICBjb25zdCBmbGlwQmVuZWF0aCA9IHBhcnNlSW50KGluZGV4KTtcbiAgICBpZiAoZmxpcEJlbmVhdGggPj0gMCAmJiBmbGlwQmVuZWF0aCA8IHRoaXMub3JkZXIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmbGlwcGVkID0gdGhpcy5vcmRlci5zbGljZSgwLCBmbGlwQmVuZWF0aCArIDEpO1xuICAgICAgZmxpcHBlZC5yZXZlcnNlKCk7XG4gICAgICB0aGlzLm9yZGVyLnNwbGljZSgwLCBmbGlwQmVuZWF0aCArIDEsIC4uLmZsaXBwZWQpO1xuICAgICAgLy8gVXNlIHNoYWxsb3cgY29weSB0byBhdm9pZCByZWZlcmVuY2Ugc2hhcmluZ1xuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgICB9XG4gIH1cblxuICByZXZlcnQoaW5kZXgpIHtcbiAgICBjb25zdCByZXZlcnRUbyA9IHBhcnNlSW50KGluZGV4KTtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5oaXN0b3J5LnNsaWNlKDAsIHJldmVydFRvICsgMSk7XG4gICAgLy8gVXNlIHNoYWxsb3cgY29weSB0byBhdm9pZCByZWZlcmVuY2Ugc2hhcmluZ1xuICAgIHRoaXMub3JkZXIgPSBbLi4udGhpcy5oaXN0b3J5W3JldmVydFRvXV07XG4gICAgdGhpcy5oaXN0b3J5ID0gdGVtcDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMub3JkZXIgPSBbLi4udGhpcy5kZWZhdWx0XTtcbiAgICB0aGlzLmhpc3RvcnkgPSBbWy4uLnRoaXMuZGVmYXVsdF1dO1xuICB9XG59XG5cbmNsYXNzIFNhbmRib3hTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Iob3JkZXIpIHtcbiAgICBzdXBlcihvcmRlcik7XG4gIH1cbiAgYWRkUGFuY2FrZSgpIHtcbiAgICB0aGlzLm9yZGVyLnB1c2godGhpcy5vcmRlci5sZW5ndGggKyAxKTtcbiAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICB0aGlzLmhpc3RvcnkucHVzaChbLi4udGhpcy5vcmRlcl0pO1xuICB9XG4gIHJlbW92ZVBhbmNha2UoKSB7XG4gICAgY29uc3QgbGFyZ2VzdFBhbmNha2UgPSBNYXRoLm1heCguLi50aGlzLm9yZGVyKTtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5vcmRlci5maWx0ZXIoKHBhbmNha2UpID0+IHBhbmNha2UgIT09IGxhcmdlc3RQYW5jYWtlKTtcbiAgICB0aGlzLm9yZGVyID0gdGVtcDtcbiAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICB0aGlzLmhpc3RvcnkucHVzaChbLi4udGhpcy5vcmRlcl0pO1xuICB9XG4gIG1vdmVQYW5jYWtlKGZyb20sIHRvKSB7XG4gICAgY29uc3QgdmFsaWRJbmRpY2VzID1cbiAgICAgIGZyb20gPj0gMCAmJlxuICAgICAgdG8gPj0gMCAmJlxuICAgICAgZnJvbSA8IHRoaXMub3JkZXIubGVuZ3RoICYmXG4gICAgICB0byA8IHRoaXMub3JkZXIubGVuZ3RoO1xuICAgIGlmICh2YWxpZEluZGljZXMpIHtcbiAgICAgIGNvbnN0IG1vdmluZ1BhbmNha2UgPSB0aGlzLm9yZGVyLnNwbGljZShmcm9tLCAxKVswXTtcbiAgICAgIHRoaXMub3JkZXIuc3BsaWNlKHRvLCAwLCBtb3ZpbmdQYW5jYWtlKTtcbiAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgU3RhY2ssIFNhbmRib3hTdGFjayB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmZ1bmN0aW9uIF9nZXRPdGhlclNpYmxpbmdzKGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCBjaGlsZHJlbiA9IFsuLi5wYXJlbnQuY2hpbGRyZW5dO1xuICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IGVsZW1lbnQpO1xufVxuXG5jb25zdCBfY2hhbmdlVmlldyA9IChldmVudCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFZpZXcgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gIC8vIHRvZ2dsZSBlbmFibGVkIGNsYXNzIG9uXG4gIHNlbGVjdGVkVmlldy5jbGFzc0xpc3QudG9nZ2xlKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiLCB0cnVlKTtcblxuICAvLyB0b2dnbGUgZW5hYmxlZCBjbGFzcyBvZmYgZm9yIG90aGVyIHZpZXcgZWxlbWVudHNcbiAgY29uc3Qgc2libGluZ3MgPSBfZ2V0T3RoZXJTaWJsaW5ncyhzZWxlY3RlZFZpZXcsIHNlbGVjdGVkVmlldy5wYXJlbnROb2RlKTtcbiAgc2libGluZ3MuZm9yRWFjaCgoc2libGluZykgPT4ge1xuICAgIHNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIiwgZmFsc2UpO1xuICB9KTtcblxuICAvLyBhZGp1c3QgY3VzdG9tIHByb3BlcnRpZXMgdG8gZml0IHNlbGVjdGVkIHZpZXdcbiAgaWYgKHNlbGVjdGVkVmlldy5pZCA9PT0gXCJ2aWV3LXBhbmNha2VzXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tcGFuY2FrZS12aXNpYmlsaXR5XCIsXG4gICAgICBcInZpc2libGVcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS12YWx1ZS12aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkVmlldy5pZCA9PT0gXCJ2aWV3LW51bWJlcnNcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1wYW5jYWtlLXZpc2liaWxpdHlcIixcbiAgICAgIFwiaGlkZGVuXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmFsdWUtdmlzaWJpbGl0eVwiLCBcInZpc2libGVcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXZhbHVlLWNvbG9yXCIsXG4gICAgICBcInZhcigtLXByaW1hcnktY29sb3IpXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvci1ob3ZlclwiLFxuICAgICAgXCJ2YXIoLS10ZXJ0aWFyeS1jb2xvcilcIlxuICAgICk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRWaWV3LmlkID09PSBcInZpZXctYm90aFwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXBhbmNha2UtdmlzaWJpbGl0eVwiLFxuICAgICAgXCJ2aXNpYmxlXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmFsdWUtdmlzaWJpbGl0eVwiLCBcInZpc2libGVcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXZhbHVlLWNvbG9yXCIsXG4gICAgICBcInZhcigtLXNlY29uZGFyeS1jb2xvcilcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXZhbHVlLWNvbG9yLWhvdmVyXCIsXG4gICAgICBcInZhcigtLXNlY29uZGFyeS1jb2xvcilcIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgXCJJbmNvcnJlY3QgY2xpY2suXCI7XG4gIH1cbn07XG5cbmNvbnN0IGFkZFZpZXdMaXN0ZW5lcnMgPSAoc3RhY2spID0+IHtcbiAgY29uc3Qgdmlld3MgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3XCIpLmNoaWxkcmVuXTtcbiAgdmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgX2NoYW5nZVZpZXcoZXZlbnQpO1xuICAgICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRWaWV3TGlzdGVuZXJzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBsb2FkU2FuZGJveCBmcm9tIFwiLi9sb2FkLXNhbmRib3hcIjtcblxubG9hZFNhbmRib3goKTtcblxuLyogXG5jb25zdCBmdWxsU3RhY2sgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbml0ID0ge1xuICAgIHN0YWNrOiBuZXcgU3RhY2soZGVmYXVsdE9yZGVyKSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5zZWFsKGluaXQpO1xufSkoKTtcbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=