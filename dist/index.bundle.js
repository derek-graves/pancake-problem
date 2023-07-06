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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n.all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 100%;\n  min-height: 520px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n.stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n/* Testing animation on whole stack */\n/* Will only happen on flipped pancakes once fully built */\n@keyframes Flip {\n  50% {\n    transform: translate(0px, -100px) rotate(-90deg);\n    -webkit-transform: translate(0px, -100px) rotate(-90deg);\n  }\n\n  to {\n    transform: translate(0px, 0px) rotate(-180deg);\n    -webkit-transform: translate(0px, 0px) rotate(-180deg);\n  }\n}\n\n@keyframes Number-Flip {\n  50% {\n    transform: translate(-25%, -25%) rotate(90deg);\n  }\n\n  to {\n    transform: translate(-50%, -50%) rotate(180deg);\n    -webkit-transform: translate(-50%, -50%) rotate(180deg);\n  }\n}\n\n.flipping {\n  position: relative;\n  animation: Flip 1.5s cubic-bezier(0.05, 0.69, 0.56, 1) forwards;\n}\n\n.flipping::after {\n  animation: Number-Flip 3s ease-in-out forwards;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(\"./fonts/inter.ttf\");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n.all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 100%;\n  min-height: 520px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n.stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n/* Testing animation on whole stack */\n/* Will only happen on flipped pancakes once fully built */\n@keyframes Flip {\n  50% {\n    transform: translate(0px, -100px) rotate(-90deg);\n    -webkit-transform: translate(0px, -100px) rotate(-90deg);\n  }\n\n  to {\n    transform: translate(0px, 0px) rotate(-180deg);\n    -webkit-transform: translate(0px, 0px) rotate(-180deg);\n  }\n}\n\n@keyframes Number-Flip {\n  50% {\n    transform: translate(-25%, -25%) rotate(90deg);\n  }\n\n  to {\n    transform: translate(-50%, -50%) rotate(180deg);\n    -webkit-transform: translate(-50%, -50%) rotate(180deg);\n  }\n}\n\n.flipping {\n  position: relative;\n  animation: Flip 1.5s cubic-bezier(0.05, 0.69, 0.56, 1) forwards;\n}\n\n.flipping::after {\n  animation: Number-Flip 3s ease-in-out forwards;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n"],"sourceRoot":""}]);
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
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stack */ "./src/stack.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _view_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-controls */ "./src/view-controls.js");
/* harmony import */ var _interact_mode_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interact-mode-controls */ "./src/interact-mode-controls.js");
/* harmony import */ var _history_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-events */ "./src/history-events.js");
/* harmony import */ var _stack_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stack-events */ "./src/stack-events.js");
/* harmony import */ var _stack_invoker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stack-invoker */ "./src/stack-invoker.js");
/* harmony import */ var _change_state_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-state-controls */ "./src/change-state-controls.js");
/* harmony import */ var _change_quantity_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-quantity-controls */ "./src/change-quantity-controls.js");











const defaultOrder = [6, 5, 3, 2, 4, 1];
const stack = new _stack__WEBPACK_IMPORTED_MODULE_1__.SandboxStack(defaultOrder);
const PancakeStackManager = new _stack_invoker__WEBPACK_IMPORTED_MODULE_7__["default"](stack);

// add stack listners to stack and history elements to history
(0,_stack_events__WEBPACK_IMPORTED_MODULE_6__.addFlipListeners)(PancakeStackManager, stack);
(0,_stack_events__WEBPACK_IMPORTED_MODULE_6__.addDragListeners)(PancakeStackManager, stack);
(0,_history_events__WEBPACK_IMPORTED_MODULE_5__["default"])(PancakeStackManager, stack);

// add controls listeners
(0,_view_controls__WEBPACK_IMPORTED_MODULE_3__["default"])(stack);
(0,_interact_mode_controls__WEBPACK_IMPORTED_MODULE_4__["default"])(stack);
(0,_change_quantity_controls__WEBPACK_IMPORTED_MODULE_9__["default"])(PancakeStackManager, stack);
(0,_change_state_controls__WEBPACK_IMPORTED_MODULE_8__["default"])(PancakeStackManager, stack);

// render default stack and history on page load
(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStackAndHistory)(stack);

document.getElementById("stack").classList.add("flipping");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FB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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUNHO0FBQ0Y7QUFDaUI7QUFDZDtBQUNrQjtBQUNsQjtBQUNZO0FBQ007O0FBRXBFO0FBQ0Esa0JBQWtCLGdEQUFZO0FBQzlCLGdDQUFnQyxzREFBbUI7O0FBRW5EO0FBQ0EsK0RBQWdCO0FBQ2hCLCtEQUFnQjtBQUNoQiwyREFBa0I7O0FBRWxCO0FBQ0EsMERBQWdCO0FBQ2hCLG1FQUF3QjtBQUN4QixxRUFBMEI7QUFDMUIsa0VBQXVCOztBQUV2QjtBQUNBLDhEQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2NoYW5nZS1xdWFudGl0eS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvY2hhbmdlLXN0YXRlLWNvbnRyb2xzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9oaXN0b3J5LWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvaW50ZXJhY3QtbW9kZS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay1jb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3RhY2stZXZlbnRzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay1pbnZva2VyLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdGFjay5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvdmlldy1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9pbnRlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjM2E0NjU4O1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZDlkOWQ5O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjYjliOWI5O1xcbiAgLS1xdWF0ZXJuYXJ5LWNvbG9yOiAjYWI3NzI4O1xcbiAgLS1wcmltYXJ5LXJhZGl1czogMTJweDtcXG4gIC0tZm9udDogSW50ZXIsIHNhbnMtc2VyaWY7XFxuXFxuICAvKiBTdGFjayB2aWV3IHZhcmlhYmxlcyAqL1xcbiAgLS1wYW5jYWtlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgLS12YWx1ZS1jb2xvci1ob3ZlcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogSW50ZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIFVzZWQgZm9yIE1hdGVyaWFsIFN5bWJvbHMgZnJvbSBHb29nbGUgRm9udHMgKi9cXG4ubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMSwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiAyNDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmFsbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaWNvbiB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5oZWFkZXItaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ubWlkZGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0OHB4IDA7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MjBweDtcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuXFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250cm9scy1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAtMi41JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb250cm9sLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbC1lbmFibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRyb2wtaWNvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb250cm9sLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jaW50ZXJhY3QtbW9kZS1mbGlwIC5jb250cm9sLWljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4jY2hhbmdlLXN0YXRlLXJlc2V0IC5jb250cm9sLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbDphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc3RhY2stY29udGFpbmVyIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3RhY2sge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLyogVGVzdGluZyBhbmltYXRpb24gb24gd2hvbGUgc3RhY2sgKi9cXG4vKiBXaWxsIG9ubHkgaGFwcGVuIG9uIGZsaXBwZWQgcGFuY2FrZXMgb25jZSBmdWxseSBidWlsdCAqL1xcbkBrZXlmcmFtZXMgRmxpcCB7XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDBweCkgcm90YXRlKC05MGRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTAwcHgpIHJvdGF0ZSgtOTBkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKC0xODBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLTE4MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgTnVtYmVyLUZsaXAge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTI1JSkgcm90YXRlKDkwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi5mbGlwcGluZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IEZsaXAgMS41cyBjdWJpYy1iZXppZXIoMC4wNSwgMC42OSwgMC41NiwgMSkgZm9yd2FyZHM7XFxufVxcblxcbi5mbGlwcGluZzo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBOdW1iZXItRmxpcCAzcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLnBhbmNha2Uge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tcGFuY2FrZS12aXNpYmlsaXR5KTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6IDQ4cHg7XFxuICBmbGV4OiAxO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xcbn1cXG5cXG4ucGFuY2FrZTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgY29udGVudDogXFxcIlxcXCI7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4ucGFuY2FrZTpob3Zlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBhbmNha2U6YWN0aXZlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wYW5jYWtlOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdmFsdWUpO1xcblxcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4ucGFuY2FrZTpob3Zlcjo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ucGFuY2FrZTphY3RpdmU6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yKTtcXG59XFxuXFxuI2hpc3RvcnktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGhlaWdodDogNzB2aDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG5cXG4gIHBhZGRpbmc6IDEycHg7XFxuXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKSAwIDAgdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbn1cXG5cXG4jaGlzdG9yeS1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTJweDtcXG4gIHRvcDogLTEycHg7XFxuXFxuICBwYWRkaW5nOiAwIDhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNoaXN0b3J5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5oaXN0b3J5LWNhcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7IC8qIExlYXZlIHJvb20gZm9yIHBzZXVkby1lbGVtZW50IGxhYmVsICovXFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtaGlzdG9yeS1pbmRleCk7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFxuICB0b3A6IDJweDtcXG4gIGxlZnQ6IDZweDtcXG59XFxuXFxuLmhpc3RvcnktY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uY2FyZC1wYW5jYWtlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFxuICBtYXgtaGVpZ2h0OiA4cHg7XFxuICBmbGV4OiAxO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBVU0VEIEZPUiBcXFwiVW5kZXIgY29uc3RydWN0aW9uLi4uXFxcIiBQQUdFLlxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbmg2IHtcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcblxcbiovIDtcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJB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QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVzs7RUFFWCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsU0FBUzs7RUFFVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixRQUFROztFQUVSLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osaUJBQWlCLEVBQUUsd0NBQXdDOztFQUUzRCxzQ0FBc0M7O0VBRXRDLGVBQWU7O0VBRWYsa0JBQWtCOztFQUVsQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDOztFQUVqQyx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkI7O0VBRTdCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx3Q0FBd0M7O0VBRXhDLGVBQWU7RUFDZixPQUFPOztFQUVQLGtCQUFrQjs7RUFFbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjM2E0NjU4O1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZDlkOWQ5O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDAwMDA7XFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjYjliOWI5O1xcbiAgLS1xdWF0ZXJuYXJ5LWNvbG9yOiAjYWI3NzI4O1xcbiAgLS1wcmltYXJ5LXJhZGl1czogMTJweDtcXG4gIC0tZm9udDogSW50ZXIsIHNhbnMtc2VyaWY7XFxuXFxuICAvKiBTdGFjayB2aWV3IHZhcmlhYmxlcyAqL1xcbiAgLS1wYW5jYWtlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAtLXZhbHVlLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgLS12YWx1ZS1jb2xvci1ob3ZlcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogSW50ZXI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9pbnRlci50dGZcXFwiKTtcXG59XFxuXFxuLyogVXNlZCBmb3IgTWF0ZXJpYWwgU3ltYm9scyBmcm9tIEdvb2dsZSBGb250cyAqL1xcbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJGSUxMXFxcIiAxLCBcXFwid2dodFxcXCIgNDAwLCBcXFwiR1JBRFxcXCIgMCwgXFxcIm9wc3pcXFwiIDI0O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uYWxsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC1zaXplOiA0NHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTI1cztcXG59XFxuXFxuLmhlYWRlci1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5taWRkbGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQ4cHggMDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDUyMHB4O1xcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG5cXG4gIHBhZGRpbmc6IDE2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbnRyb2xzLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IC0yLjUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG5cXG4gIHBhZGRpbmc6IDAgOHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNvbnRyb2wtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sLWVuYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnktY29sb3IpO1xcbn1cXG5cXG4uY29udHJvbC1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNvbnRyb2wtdGV4dCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNpbnRlcmFjdC1tb2RlLWZsaXAgLmNvbnRyb2wtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbiNjaGFuZ2Utc3RhdGUtcmVzZXQgLmNvbnRyb2wtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2w6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNpbmdsZS1jb250cm9sOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zdGFjay1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzdGFjayB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4vKiBUZXN0aW5nIGFuaW1hdGlvbiBvbiB3aG9sZSBzdGFjayAqL1xcbi8qIFdpbGwgb25seSBoYXBwZW4gb24gZmxpcHBlZCBwYW5jYWtlcyBvbmNlIGZ1bGx5IGJ1aWx0ICovXFxuQGtleWZyYW1lcyBGbGlwIHtcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTEwMHB4KSByb3RhdGUoLTkwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDBweCkgcm90YXRlKC05MGRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLTE4MGRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBOdW1iZXItRmxpcCB7XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtMjUlKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmZsaXBwaW5nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogRmxpcCAxLjVzIGN1YmljLWJlemllcigwLjA1LCAwLjY5LCAwLjU2LCAxKSBmb3J3YXJkcztcXG59XFxuXFxuLmZsaXBwaW5nOjphZnRlciB7XFxuICBhbmltYXRpb246IE51bWJlci1GbGlwIDNzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4ucGFuY2FrZSB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS1wYW5jYWtlLXZpc2liaWxpdHkpO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LWhlaWdodDogNDhweDtcXG4gIGZsZXg6IDE7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XFxufVxcblxcbi5wYW5jYWtlOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXM7XFxufVxcblxcbi5wYW5jYWtlOmhvdmVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ucGFuY2FrZTphY3RpdmU6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnBhbmNha2U6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG5cXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuXFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjEyNXM7XFxufVxcblxcbi5wYW5jYWtlOmhvdmVyOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5wYW5jYWtlOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBjb2xvcjogdmFyKC0tdmFsdWUtY29sb3IpO1xcbn1cXG5cXG4jaGlzdG9yeS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTV2dztcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcblxcbiAgcGFkZGluZzogMTJweDtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpIDAgMCB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxufVxcblxcbiNoaXN0b3J5LWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMnB4O1xcbiAgdG9wOiAtMTJweDtcXG5cXG4gIHBhZGRpbmc6IDAgOHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2hpc3Rvcnkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDEycHg7XFxuXFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmhpc3RvcnktY2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDsgLyogTGVhdmUgcm9vbSBmb3IgcHNldWRvLWVsZW1lbnQgbGFiZWwgKi9cXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXM7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1oaXN0b3J5LWluZGV4KTtcXG5cXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXG4gIHRvcDogMnB4O1xcbiAgbGVmdDogNnB4O1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhpc3RvcnktY2FyZDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5jYXJkLXBhbmNha2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXG4gIG1heC1oZWlnaHQ6IDhweDtcXG4gIGZsZXg6IDE7XFxuXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFVTRUQgRk9SIFxcXCJVbmRlciBjb25zdHJ1Y3Rpb24uLi5cXFwiIFBBR0UuXFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuaDYge1xcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcblxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxuXFxuKi8gO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IGFkZENoYW5nZVF1YW50aXR5TGlzdGVuZXJzID0gKG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLXF1YW50aXR5LWFkZFwiKTtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFuYWdlci5leGVjdXRlQ29tbWFuZChcIkFERFwiKTtcbiAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICB9KTtcblxuICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZS1xdWFudGl0eS1yZW1vdmVcIik7XG4gIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1hbmFnZXIuZXhlY3V0ZUNvbW1hbmQoXCJSRU1PVkVcIik7XG4gICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDaGFuZ2VRdWFudGl0eUxpc3RlbmVycztcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBhZGRDaGFuZ2VTdGF0ZUxpc3RlbmVycyA9IChtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCB1bmRvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2Utc3RhdGUtdW5kb1wiKTtcbiAgdW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1hbmFnZXIudW5kbygpO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZS1zdGF0ZS1yZWRvXCIpO1xuICByZWRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFuYWdlci5yZWRvKCk7XG4gICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZS1zdGF0ZS1yZXNldFwiKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYW5hZ2VyLmV4ZWN1dGVDb21tYW5kKFwiUkVTRVRcIik7XG4gICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDaGFuZ2VTdGF0ZUxpc3RlbmVycztcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBjbGlja0hhbmRsZXJIaXN0b3J5ID0gKGV2ZW50LCBtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZEhpc3RvcnlDYXJkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaGlzdG9yeUluZGV4O1xuXG4gIC8vIG9ubHkgcnVuIHdoZW4gaGlzdG9yeSBjYXJkIGlzIGNsaWNrZWRcbiAgaWYgKCFzZWxlY3RlZEhpc3RvcnlDYXJkKSByZXR1cm47XG5cbiAgbWFuYWdlci5leGVjdXRlQ29tbWFuZChcIlJFVkVSVFwiLCBbc2VsZWN0ZWRIaXN0b3J5Q2FyZF0pO1xuICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xufTtcblxuY29uc3QgYWRkSGlzdG9yeUxpc3RlbmVyID0gKG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IGhpc3RvcnlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpc3RvcnlcIik7XG4gIGhpc3RvcnlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT5cbiAgICBjbGlja0hhbmRsZXJIaXN0b3J5KGV2ZW50LCBtYW5hZ2VyLCBzdGFja09iamVjdClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEhpc3RvcnlMaXN0ZW5lcjtcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5mdW5jdGlvbiBfZ2V0T3RoZXJTaWJsaW5ncyhlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4ucGFyZW50LmNoaWxkcmVuXTtcbiAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkICE9PSBlbGVtZW50KTtcbn1cblxuY29uc3QgX2NoYW5nZUludGVyYWN0TW9kZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFZpZXcgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gIC8vIHRvZ2dsZSBlbmFibGVkIGNsYXNzIG9uXG4gIHNlbGVjdGVkVmlldy5jbGFzc0xpc3QudG9nZ2xlKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiLCB0cnVlKTtcblxuICAvLyB0b2dnbGUgZW5hYmxlZCBjbGFzcyBvZmYgZm9yIG90aGVyIGludGVyYWN0LW1vZGUgZWxlbWVudHNcbiAgY29uc3Qgc2libGluZ3MgPSBfZ2V0T3RoZXJTaWJsaW5ncyhzZWxlY3RlZFZpZXcsIHNlbGVjdGVkVmlldy5wYXJlbnROb2RlKTtcbiAgc2libGluZ3MuZm9yRWFjaCgoc2libGluZykgPT4ge1xuICAgIHNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIiwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZEludGVyYWN0TW9kZUxpc3RlbmVycyA9IChzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBpbnRlcmFjdE1vZGVzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3QtbW9kZVwiKS5jaGlsZHJlbl07XG4gIGludGVyYWN0TW9kZXMuZm9yRWFjaCgobW9kZSkgPT4ge1xuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgX2NoYW5nZUludGVyYWN0TW9kZShldmVudCk7XG4gICAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEludGVyYWN0TW9kZUxpc3RlbmVycztcbiIsImltcG9ydCB7IFNhbmRib3hTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XG5cbmNvbnN0IHJlbmRlclN0YWNrID0gKHN0YWNrKSA9PiB7XG4gIGNvbnN0IHN0YWNrRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja1wiKTtcbiAgc3RhY2tET00uaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBzdGFja0FycmF5ID0gc3RhY2suZ2V0T3JkZXIoKTtcblxuICAvLyBUcmFkaXRpb25hbCBmb3IgbG9vcCB1c2VkIGJlY2F1c2UgZWFjaCBwYW5jYWtlJ3MgaW5kZXggaXNuJ3RcbiAgLy8gbmVjZXNzYXJpbHkgdGhlIHNhbWUgYXMgaXRzIHZhbHVlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5ld1BhbmNha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1BhbmNha2UuY2xhc3NMaXN0LmFkZChcInBhbmNha2VcIik7XG5cbiAgICBjb25zdCB3aWR0aFBlcmNlbnRhZ2UgPSAoc3RhY2tBcnJheVtpXSAvIHN0YWNrQXJyYXkubGVuZ3RoKSAqIDEwMDtcbiAgICBuZXdQYW5jYWtlLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQZXJjZW50YWdlfSVgO1xuXG4gICAgLy8gc2V0IGRhdGEgYXR0cmlidXRlcyB0byBjb25uZWN0IHN0YWNrIGFuZCBjb3JyZXNwb25kaW5nIERPTSBlbGVtZW50c1xuICAgIG5ld1BhbmNha2UuZGF0YXNldC5zdGFja0luZGV4ID0gaTtcbiAgICBuZXdQYW5jYWtlLmRhdGFzZXQudmFsdWUgPSBzdGFja0FycmF5W2ldO1xuXG4gICAgLy8gbWFrZSBwYW5jYWtlIGRyYWdnYWJsZSBvbmx5IGlmIGRyYWcgbW9kZSBlbmFibGVkIG9uIFNhbmRib3hTdGFja1xuICAgIGNvbnN0IGRyYWdNb2RlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdC1tb2RlLWRyYWdcIik7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gZHJhZ01vZGVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhkcmFnZ2FibGUpO1xuICAgIGlmIChkcmFnZ2FibGUgJiYgc3RhY2sgaW5zdGFuY2VvZiBTYW5kYm94U3RhY2spIHtcbiAgICAgIG5ld1BhbmNha2Uuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuICAgIH1cblxuICAgIHN0YWNrRE9NLmFwcGVuZChuZXdQYW5jYWtlKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVySGlzdG9yeSA9IChzdGFjaykgPT4ge1xuICBjb25zdCBoaXN0b3J5RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaXN0b3J5XCIpO1xuICBoaXN0b3J5RE9NLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgaGlzdG9yeUFycmF5ID0gc3RhY2suZ2V0SGlzdG9yeSgpO1xuICAvLyBUcmFkaXRpb25hbCBmb3IgbG9vcCB1c2VkIGJlY2F1c2UgZWFjaCBjYXJkJ3MgaGlzdG9yeS1pbmRleCBkYXRhXG4gIC8vIGF0dHJpYnV0ZSBjb21lcyBmcm9tIHRoZSBpbmRleCBvZiB0aGUgc25hcHNub3QgYXNzb2NpYXRlZCB3aXRoXG4gIC8vIHRoZSBjYXJkLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5ld0hpc3RvcnlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdIaXN0b3J5Q2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlzdG9yeS1jYXJkXCIpO1xuXG4gICAgbmV3SGlzdG9yeUNhcmQuZGF0YXNldC5oaXN0b3J5SW5kZXggPSBpO1xuXG4gICAgY29uc3QgY3VycmVudEhpc3RvcnlTdGFjayA9IGhpc3RvcnlBcnJheVtpXTtcbiAgICBjdXJyZW50SGlzdG9yeVN0YWNrLmZvckVhY2goKHBhbmNha2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0hpc3RvcnlQYW5jYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0hpc3RvcnlQYW5jYWtlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXBhbmNha2VcIik7XG5cbiAgICAgIGNvbnN0IHdpZHRoUGVyY2VudGFnZSA9IChwYW5jYWtlIC8gY3VycmVudEhpc3RvcnlTdGFjay5sZW5ndGgpICogMTAwO1xuICAgICAgbmV3SGlzdG9yeVBhbmNha2Uuc3R5bGUud2lkdGggPSBgJHt3aWR0aFBlcmNlbnRhZ2V9JWA7XG5cbiAgICAgIG5ld0hpc3RvcnlDYXJkLmFwcGVuZChuZXdIaXN0b3J5UGFuY2FrZSk7XG4gICAgfSk7XG5cbiAgICBoaXN0b3J5RE9NLmFwcGVuZChuZXdIaXN0b3J5Q2FyZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclN0YWNrQW5kSGlzdG9yeSA9IChzdGFjaykgPT4ge1xuICByZW5kZXJTdGFjayhzdGFjayk7XG4gIHJlbmRlckhpc3Rvcnkoc3RhY2spO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyU3RhY2ssIHJlbmRlckhpc3RvcnksIHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9O1xuIiwiLy8gaW1wbGVtZW50IGJhc2UgY29tbWFuZCBjbGFzcyBhcyAnYWJzdHJhY3QnIHRvIGVuc3VyZSBhbGwgcGFuY2FrZVxuLy8gc3RhY2sgY29tbWFuZHMgaW5oZXJpdCBjb3JyZWN0IGJlaGF2aW9yIGFuZCBwcm9wZXJ0aWVzXG5jbGFzcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrKSB7XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IgPT0gUGFuY2FrZVN0YWNrQ29tbWFuZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgY2xhc3NlcyBjYW4ndCBiZSBpbnN0YW50aWF0ZWQuXCIpO1xuICAgIH1cbiAgICB0aGlzLnBhbmNha2VTdGFjayA9IHBhbmNha2VTdGFjaztcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kICdleGVjdXRlKCknIG11c3QgYmUgaW1wbGVtZW50ZWRcIik7XG4gIH1cbn1cblxuY2xhc3MgRmxpcENvbW1hbmQgZXh0ZW5kcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrLCBpbmRleCkge1xuICAgIHN1cGVyKHBhbmNha2VTdGFjayk7XG4gICAgdGhpcy5pbmRleCA9IHBhcnNlSW50KGluZGV4KTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2suZmxpcCh0aGlzLmluZGV4KTtcbiAgfVxufVxuXG5jbGFzcyBSZXZlcnRGbGlwc0NvbW1hbmQgZXh0ZW5kcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrLCBpbmRleCkge1xuICAgIHN1cGVyKHBhbmNha2VTdGFjayk7XG4gICAgdGhpcy5pbmRleCA9IHBhcnNlSW50KGluZGV4KTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2sucmV2ZXJ0KHRoaXMuaW5kZXgpO1xuICB9XG59XG5cbmNsYXNzIFJlc2V0Q29tbWFuZCBleHRlbmRzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2spIHtcbiAgICBzdXBlcihwYW5jYWtlU3RhY2spO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjay5yZXNldCgpO1xuICB9XG59XG5cbmNsYXNzIEFkZFBhbmNha2VDb21tYW5kIGV4dGVuZHMgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaykge1xuICAgIHN1cGVyKHBhbmNha2VTdGFjayk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrLmFkZFBhbmNha2UoKTtcbiAgfVxufVxuXG5jbGFzcyBSZW1vdmVQYW5jYWtlQ29tbWFuZCBleHRlbmRzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2spIHtcbiAgICBzdXBlcihwYW5jYWtlU3RhY2spO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjay5yZW1vdmVQYW5jYWtlKCk7XG4gIH1cbn1cblxuY2xhc3MgRHJhZ1BhbmNha2VDb21tYW5kIGV4dGVuZHMgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaywgZnJvbSwgdG8pIHtcbiAgICBzdXBlcihwYW5jYWtlU3RhY2spO1xuICAgIHRoaXMuZHJhZ0Zyb20gPSBmcm9tO1xuICAgIHRoaXMuZHJhZ1RvID0gdG87XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrLm1vdmVQYW5jYWtlKHRoaXMuZHJhZ0Zyb20sIHRoaXMuZHJhZ1RvKTtcbiAgfVxufVxuXG5jb25zdCBwYW5jYWtlU3RhY2tDb21tYW5kcyA9IHtcbiAgRkxJUDogRmxpcENvbW1hbmQsXG4gIFJFVkVSVDogUmV2ZXJ0RmxpcHNDb21tYW5kLFxuICBSRVNFVDogUmVzZXRDb21tYW5kLFxuICBBREQ6IEFkZFBhbmNha2VDb21tYW5kLFxuICBSRU1PVkU6IFJlbW92ZVBhbmNha2VDb21tYW5kLFxuICBEUkFHOiBEcmFnUGFuY2FrZUNvbW1hbmQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYW5jYWtlU3RhY2tDb21tYW5kcztcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBmbGlwRXZlbnQgPSAoZXZlbnQsIG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUGFuY2FrZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXg7XG4gIGNvbnN0IGZsaXBNb2RlRWFuYmxlZCA9IGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiaW50ZXJhY3QtbW9kZS1mbGlwXCIpXG4gICAgLmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIik7XG5cbiAgLy8gb25seSBydW4gd2hlbiBwYW5jYWtlIGlzIGNsaWNrZWQgYW5kIGZsaXAgbW9kZSBlbmFibGVkXG4gIGlmIChzZWxlY3RlZFBhbmNha2UgJiYgZmxpcE1vZGVFYW5ibGVkKSB7XG4gICAgbWFuYWdlci5leGVjdXRlQ29tbWFuZChcIkZMSVBcIiwgW3NlbGVjdGVkUGFuY2FrZV0pO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdTdGFydCA9IChldmVudCkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBhbmNha2VcIikpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHRhcmdldC5kYXRhc2V0LnN0YWNrSW5kZXgpO1xuXG4gICAgdGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAwLjE7XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdFbmQgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFuY2FrZVwiKSkge1xuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgfVxufTtcblxuY29uc3QgZHJhZ092ZXIgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmNvbnN0IGRyb3BFdmVudCA9IChldmVudCwgbWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gdmFsaWRhdGUgdGFyZ2V0XG4gIGlmICghZXZlbnQudGFyZ2V0LmRhdGFzZXQuc3RhY2tJbmRleCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkcm9wVGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBkcmFnZ2VkSW5kZXggPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikpO1xuICBjb25zdCBkcm9wcGVkSW5kZXggPSBwYXJzZUludChkcm9wVGFyZ2V0LmRhdGFzZXQuc3RhY2tJbmRleCk7XG5cbiAgLy8gcHJldmVudCBzZWxmLWRyb3BzXG4gIGlmIChkcm9wcGVkSW5kZXggIT09IGRyYWdnZWRJbmRleCkge1xuICAgIGNvbnN0IHN0YWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja1wiKTtcbiAgICBjb25zdCBjbG9uZSA9IGRyb3BUYXJnZXQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGRyYWdUYXJnZXQgPSBzdGFja0Rpdi5jaGlsZE5vZGVzW2RyYWdnZWRJbmRleF07XG4gICAgc3RhY2tEaXYucmVwbGFjZUNoaWxkKGRyYWdUYXJnZXQsIGRyb3BUYXJnZXQpO1xuICAgIGRyYWdUYXJnZXQuYWZ0ZXIoY2xvbmUpO1xuICB9XG4gIG1hbmFnZXIuZXhlY3V0ZUNvbW1hbmQoXCJEUkFHXCIsIFtkcmFnZ2VkSW5kZXgsIGRyb3BwZWRJbmRleF0pO1xuICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xufTtcblxuY29uc3QgYWRkRmxpcExpc3RlbmVycyA9IChtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBzdGFja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIik7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+XG4gICAgZmxpcEV2ZW50KGV2ZW50LCBtYW5hZ2VyLCBzdGFja09iamVjdClcbiAgKTtcbn07XG5cbmNvbnN0IGFkZERyYWdMaXN0ZW5lcnMgPSAobWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3Qgc3RhY2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrXCIpO1xuICBzdGFja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydCk7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmQpO1xuICBzdGFja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXIpO1xuICBzdGFja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcbiAgICBkcm9wRXZlbnQoZXZlbnQsIG1hbmFnZXIsIHN0YWNrT2JqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhZGRGbGlwTGlzdGVuZXJzLCBhZGREcmFnTGlzdGVuZXJzIH07XG5cbi8qIEZvdW5kYXRpb24gZm9yIGRyYWdvdmVyIHRyYW5zaXRpb25zLCBpZiBuZWVkZWRcblxuICBjb25zdCBvdmVySW5kZXggPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgLmRhdGFzZXQuc3RhY2tJbmRleDtcbiAgaWYgKG92ZXJJbmRleCkge1xuICAgIGNvbnN0IHBhbmNha2VzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIikuY2hpbGRyZW5dO1xuICAgIGNvbnN0IG1vdmVVcCA9IHBhbmNha2VzLmZpbHRlcihcbiAgICAgIChwYW5jYWtlKSA9PiBwYW5jYWtlLmRhdGFzZXQuc3RhY2tJbmRleCA8PSBvdmVySW5kZXhcbiAgICApO1xuICAgIGNvbnN0IG1vdmVEb3duID0gcGFuY2FrZXMuZmlsdGVyKFxuICAgICAgKHBhbmNha2UpID0+IHBhbmNha2UuZGF0YXNldC5zdGFja0luZGV4ID49IG92ZXJJbmRleFxuICAgICk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFuY2FrZXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIG1vdmVVcC5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+XG4gICAgICAgIChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke2hlaWdodCAvIDIgKyA0fXB4KWApXG4gICAgKTtcbiAgICBtb3ZlRG93bi5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+IChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7aGVpZ2h0IC8gMiArIDR9cHgpYClcbiAgICApO1xuICB9XG4gICovXG4iLCJpbXBvcnQgcGFuY2FrZVN0YWNrQ29tbWFuZHMgZnJvbSBcIi4vc3RhY2stY29tbWFuZHNcIjtcblxuY2xhc3MgUGFuY2FrZVN0YWNrSW52b2tlciB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaykge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrID0gcGFuY2FrZVN0YWNrO1xuICAgIHRoaXMucGFuY2FrZVN0YWNrQ29tbWFuZHMgPSBwYW5jYWtlU3RhY2tDb21tYW5kcztcbiAgICB0aGlzLmNvbW1hbmRzSGlzdG9yeSA9IFtdO1xuICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICB9XG5cbiAgZXhlY3V0ZUNvbW1hbmQocmVxdWVzdCwgYXJncyA9IFtdKSB7XG4gICAgLy8gcmVtb3ZlIHVuZG9uZSBjb21tYW5kcyB1cG9uIG5ldyBleGVjdXRpb24gYWZ0ZXIgdW5kbyhzKVxuICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5jb21tYW5kc0hpc3RvcnkubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jb21tYW5kc0hpc3RvcnkgPSB0aGlzLmNvbW1hbmRzSGlzdG9yeS5zbGljZSgwLCB0aGlzLnBvc2l0aW9uICsgMSk7XG4gICAgfVxuICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICBjb25zdCByZXF1ZXN0ZWRDb21tYW5kID0gdGhpcy5wYW5jYWtlU3RhY2tDb21tYW5kc1tyZXF1ZXN0XTtcbiAgICAgIGNvbnN0IGNvbmNyZXRlQ29tbWFuZCA9IG5ldyByZXF1ZXN0ZWRDb21tYW5kKHRoaXMucGFuY2FrZVN0YWNrLCAuLi5hcmdzKTtcbiAgICAgIHRoaXMuY29tbWFuZHNIaXN0b3J5LnB1c2goY29uY3JldGVDb21tYW5kKTtcbiAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgIGNvbmNyZXRlQ29tbWFuZC5leGVjdXRlKCk7XG4gICAgfVxuICB9XG5cbiAgdW5kbygpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA+IDApIHtcbiAgICAgIC8vIGV4ZWN1dGUgcmVzZXQgY29tbWFuZFxuICAgICAgY29uc3QgdGVtcFJlc2V0ID0gbmV3IHRoaXMucGFuY2FrZVN0YWNrQ29tbWFuZHNbXCJSRVNFVFwiXShcbiAgICAgICAgdGhpcy5wYW5jYWtlU3RhY2tcbiAgICAgICk7XG4gICAgICB0ZW1wUmVzZXQuZXhlY3V0ZSgpO1xuXG4gICAgICAvLyBleGVjdXRlIGFsbCBjb21tYW5kcyB1cCB0byBwb3NpdGlvbiAtIDFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3NpdGlvbiAtIDE7IGkrKykge1xuICAgICAgICB0aGlzLmNvbW1hbmRzSGlzdG9yeVtpXS5leGVjdXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG9zaXRpb24gLT0gMTtcbiAgICB9XG4gIH1cblxuICByZWRvKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5jb21tYW5kc0hpc3RvcnkubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgdGhpcy5jb21tYW5kc0hpc3RvcnlbdGhpcy5wb3NpdGlvbl0uZXhlY3V0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5jYWtlU3RhY2tJbnZva2VyO1xuIiwiY2xhc3MgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihvcmRlcikge1xuICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAvLyBVc2Ugc2hhbGxvdyBjb3BpZXMgdG8gYXZvaWQgcmVmZXJlbmNlIHNoYXJpbmdcbiAgICB0aGlzLmhpc3RvcnkgPSBbWy4uLm9yZGVyXV07XG4gICAgdGhpcy5kZWZhdWx0ID0gWy4uLm9yZGVyXTtcbiAgfVxuXG4gIGdldE9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLm9yZGVyO1xuICB9XG5cbiAgZ2V0SGlzdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5O1xuICB9XG5cbiAgZmxpcChpbmRleCkge1xuICAgIGNvbnN0IGZsaXBCZW5lYXRoID0gcGFyc2VJbnQoaW5kZXgpO1xuICAgIGlmIChmbGlwQmVuZWF0aCA+PSAwICYmIGZsaXBCZW5lYXRoIDwgdGhpcy5vcmRlci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZsaXBwZWQgPSB0aGlzLm9yZGVyLnNsaWNlKDAsIGZsaXBCZW5lYXRoICsgMSk7XG4gICAgICBmbGlwcGVkLnJldmVyc2UoKTtcbiAgICAgIHRoaXMub3JkZXIuc3BsaWNlKDAsIGZsaXBCZW5lYXRoICsgMSwgLi4uZmxpcHBlZCk7XG4gICAgICAvLyBVc2Ugc2hhbGxvdyBjb3B5IHRvIGF2b2lkIHJlZmVyZW5jZSBzaGFyaW5nXG4gICAgICB0aGlzLmhpc3RvcnkucHVzaChbLi4udGhpcy5vcmRlcl0pO1xuICAgIH1cbiAgfVxuXG4gIHJldmVydChpbmRleCkge1xuICAgIGNvbnN0IHJldmVydFRvID0gcGFyc2VJbnQoaW5kZXgpO1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmhpc3Rvcnkuc2xpY2UoMCwgcmV2ZXJ0VG8gKyAxKTtcbiAgICAvLyBVc2Ugc2hhbGxvdyBjb3B5IHRvIGF2b2lkIHJlZmVyZW5jZSBzaGFyaW5nXG4gICAgdGhpcy5vcmRlciA9IFsuLi50aGlzLmhpc3RvcnlbcmV2ZXJ0VG9dXTtcbiAgICB0aGlzLmhpc3RvcnkgPSB0ZW1wO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5vcmRlciA9IFsuLi50aGlzLmRlZmF1bHRdO1xuICAgIHRoaXMuaGlzdG9yeSA9IFtbLi4udGhpcy5kZWZhdWx0XV07XG4gIH1cbn1cblxuY2xhc3MgU2FuZGJveFN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihvcmRlcikge1xuICAgIHN1cGVyKG9yZGVyKTtcbiAgfVxuICBhZGRQYW5jYWtlKCkge1xuICAgIHRoaXMub3JkZXIucHVzaCh0aGlzLm9yZGVyLmxlbmd0aCArIDEpO1xuICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuaGlzdG9yeS5wdXNoKFsuLi50aGlzLm9yZGVyXSk7XG4gIH1cbiAgcmVtb3ZlUGFuY2FrZSgpIHtcbiAgICBjb25zdCBsYXJnZXN0UGFuY2FrZSA9IE1hdGgubWF4KC4uLnRoaXMub3JkZXIpO1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLm9yZGVyLmZpbHRlcigocGFuY2FrZSkgPT4gcGFuY2FrZSAhPT0gbGFyZ2VzdFBhbmNha2UpO1xuICAgIHRoaXMub3JkZXIgPSB0ZW1wO1xuICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuaGlzdG9yeS5wdXNoKFsuLi50aGlzLm9yZGVyXSk7XG4gIH1cbiAgbW92ZVBhbmNha2UoZnJvbSwgdG8pIHtcbiAgICBjb25zdCB2YWxpZEluZGljZXMgPVxuICAgICAgZnJvbSA+PSAwICYmXG4gICAgICB0byA+PSAwICYmXG4gICAgICBmcm9tIDwgdGhpcy5vcmRlci5sZW5ndGggJiZcbiAgICAgIHRvIDwgdGhpcy5vcmRlci5sZW5ndGg7XG4gICAgaWYgKHZhbGlkSW5kaWNlcykge1xuICAgICAgY29uc3QgbW92aW5nUGFuY2FrZSA9IHRoaXMub3JkZXIuc3BsaWNlKGZyb20sIDEpWzBdO1xuICAgICAgdGhpcy5vcmRlci5zcGxpY2UodG8sIDAsIG1vdmluZ1BhbmNha2UpO1xuICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICB0aGlzLmhpc3RvcnkucHVzaChbLi4udGhpcy5vcmRlcl0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBTdGFjaywgU2FuZGJveFN0YWNrIH07XG4iLCJpbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZnVuY3Rpb24gX2dldE90aGVyU2libGluZ3MoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gWy4uLnBhcmVudC5jaGlsZHJlbl07XG4gIHJldHVybiBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZCAhPT0gZWxlbWVudCk7XG59XG5cbmNvbnN0IF9jaGFuZ2VWaWV3ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkVmlldyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgLy8gdG9nZ2xlIGVuYWJsZWQgY2xhc3Mgb25cbiAgc2VsZWN0ZWRWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIsIHRydWUpO1xuXG4gIC8vIHRvZ2dsZSBlbmFibGVkIGNsYXNzIG9mZiBmb3Igb3RoZXIgdmlldyBlbGVtZW50c1xuICBjb25zdCBzaWJsaW5ncyA9IF9nZXRPdGhlclNpYmxpbmdzKHNlbGVjdGVkVmlldywgc2VsZWN0ZWRWaWV3LnBhcmVudE5vZGUpO1xuICBzaWJsaW5ncy5mb3JFYWNoKChzaWJsaW5nKSA9PiB7XG4gICAgc2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiLCBmYWxzZSk7XG4gIH0pO1xuXG4gIC8vIGFkanVzdCBjdXN0b20gcHJvcGVydGllcyB0byBmaXQgc2VsZWN0ZWQgdmlld1xuICBpZiAoc2VsZWN0ZWRWaWV3LmlkID09PSBcInZpZXctcGFuY2FrZXNcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1wYW5jYWtlLXZpc2liaWxpdHlcIixcbiAgICAgIFwidmlzaWJsZVwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZhbHVlLXZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRWaWV3LmlkID09PSBcInZpZXctbnVtYmVyc1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXBhbmNha2UtdmlzaWJpbGl0eVwiLFxuICAgICAgXCJoaWRkZW5cIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS12YWx1ZS12aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tdmFsdWUtY29sb3JcIixcbiAgICAgIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXZhbHVlLWNvbG9yLWhvdmVyXCIsXG4gICAgICBcInZhcigtLXRlcnRpYXJ5LWNvbG9yKVwiXG4gICAgKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFZpZXcuaWQgPT09IFwidmlldy1ib3RoXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tcGFuY2FrZS12aXNpYmlsaXR5XCIsXG4gICAgICBcInZpc2libGVcIlxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS12YWx1ZS12aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tdmFsdWUtY29sb3JcIixcbiAgICAgIFwidmFyKC0tc2Vjb25kYXJ5LWNvbG9yKVwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tdmFsdWUtY29sb3ItaG92ZXJcIixcbiAgICAgIFwidmFyKC0tc2Vjb25kYXJ5LWNvbG9yKVwiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBcIkluY29ycmVjdCBjbGljay5cIjtcbiAgfVxufTtcblxuY29uc3QgYWRkVmlld0xpc3RlbmVycyA9IChzdGFjaykgPT4ge1xuICBjb25zdCB2aWV3cyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdcIikuY2hpbGRyZW5dO1xuICB2aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgdmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBfY2hhbmdlVmlldyhldmVudCk7XG4gICAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2spO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFZpZXdMaXN0ZW5lcnM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgU3RhY2ssIFNhbmRib3hTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XG5pbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCBhZGRWaWV3TGlzdGVuZXJzIGZyb20gXCIuL3ZpZXctY29udHJvbHNcIjtcbmltcG9ydCBhZGRJbnRlcmFjdE1vZGVMaXN0ZW5lcnMgZnJvbSBcIi4vaW50ZXJhY3QtbW9kZS1jb250cm9sc1wiO1xuaW1wb3J0IGFkZEhpc3RvcnlMaXN0ZW5lciBmcm9tIFwiLi9oaXN0b3J5LWV2ZW50c1wiO1xuaW1wb3J0IHsgYWRkRmxpcExpc3RlbmVycywgYWRkRHJhZ0xpc3RlbmVycyB9IGZyb20gXCIuL3N0YWNrLWV2ZW50c1wiO1xuaW1wb3J0IFBhbmNha2VTdGFja0ludm9rZXIgZnJvbSBcIi4vc3RhY2staW52b2tlclwiO1xuaW1wb3J0IGFkZENoYW5nZVN0YXRlTGlzdGVuZXJzIGZyb20gXCIuL2NoYW5nZS1zdGF0ZS1jb250cm9sc1wiO1xuaW1wb3J0IGFkZENoYW5nZVF1YW50aXR5TGlzdGVuZXJzIGZyb20gXCIuL2NoYW5nZS1xdWFudGl0eS1jb250cm9sc1wiO1xuXG5jb25zdCBkZWZhdWx0T3JkZXIgPSBbNiwgNSwgMywgMiwgNCwgMV07XG5jb25zdCBzdGFjayA9IG5ldyBTYW5kYm94U3RhY2soZGVmYXVsdE9yZGVyKTtcbmNvbnN0IFBhbmNha2VTdGFja01hbmFnZXIgPSBuZXcgUGFuY2FrZVN0YWNrSW52b2tlcihzdGFjayk7XG5cbi8vIGFkZCBzdGFjayBsaXN0bmVycyB0byBzdGFjayBhbmQgaGlzdG9yeSBlbGVtZW50cyB0byBoaXN0b3J5XG5hZGRGbGlwTGlzdGVuZXJzKFBhbmNha2VTdGFja01hbmFnZXIsIHN0YWNrKTtcbmFkZERyYWdMaXN0ZW5lcnMoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuYWRkSGlzdG9yeUxpc3RlbmVyKFBhbmNha2VTdGFja01hbmFnZXIsIHN0YWNrKTtcblxuLy8gYWRkIGNvbnRyb2xzIGxpc3RlbmVyc1xuYWRkVmlld0xpc3RlbmVycyhzdGFjayk7XG5hZGRJbnRlcmFjdE1vZGVMaXN0ZW5lcnMoc3RhY2spO1xuYWRkQ2hhbmdlUXVhbnRpdHlMaXN0ZW5lcnMoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuYWRkQ2hhbmdlU3RhdGVMaXN0ZW5lcnMoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuXG4vLyByZW5kZXIgZGVmYXVsdCBzdGFjayBhbmQgaGlzdG9yeSBvbiBwYWdlIGxvYWRcbnJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFjayk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIikuY2xhc3NMaXN0LmFkZChcImZsaXBwaW5nXCIpO1xuXG4vKiBcbmNvbnN0IGZ1bGxTdGFjayA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGluaXQgPSB7XG4gICAgc3RhY2s6IG5ldyBTdGFjayhkZWZhdWx0T3JkZXIpLFxuICB9O1xuICByZXR1cm4gT2JqZWN0LnNlYWwoaW5pdCk7XG59KSgpO1xuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==