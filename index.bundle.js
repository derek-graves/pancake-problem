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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n.all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 100%;\n  min-height: 520px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n.stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,2BAA2B;EAC3B,sBAAsB;EACtB,yBAAyB;;EAEzB,yBAAyB;EACzB,6BAA6B;EAC7B,2BAA2B;EAC3B,qCAAqC;EACrC,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,4CAA6B;AAC/B;;AAEA,gDAAgD;AAChD;EACE,kEAAkE;AACpE;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;;EAEjB,kBAAkB;;EAElB,sCAAsC;EACtC,iBAAiB;EACjB,4BAA4B;;EAE5B,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,wCAAwC;EACxC,qCAAqC;EACrC,oCAAoC;;EAEpC,cAAc;;EAEd,iCAAiC;;EAEjC,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;EAEnB,2BAA2B;;EAE3B,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;EACjC,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,WAAW;;EAEX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,gBAAgB;;EAEhB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,qCAAqC;;EAErC,kBAAkB;EAClB,gBAAgB;EAChB,OAAO;;EAEP,kCAAkC;EAClC,oCAAoC;;EAEpC,eAAe;;EAEf,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;;EAEZ,WAAW;;EAEX,oCAAoC;EACpC,sCAAsC;;EAEtC,mCAAmC;AACrC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;;EAEf,yBAAyB;;EAEzB,yBAAyB;EACzB,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;;EAEf,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;AACjC;;AAEA;EACE,mCAAmC;EACnC,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;;EAElB,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,gBAAgB;;EAEhB,aAAa;;EAEb,sCAAsC;EACtC,kBAAkB;EAClB,8DAA8D;AAChE;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,UAAU;;EAEV,cAAc;;EAEd,iCAAiC;;EAEjC,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;;EAET,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;;EAER,oCAAoC;EACpC,YAAY;EACZ,iBAAiB,EAAE,wCAAwC;;EAE3D,sCAAsC;;EAEtC,eAAe;;EAEf,kBAAkB;;EAElB,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;;EAEjC,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;;EAE7B,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;;EAExC,eAAe;EACf,OAAO;;EAEP,kBAAkB;;EAElB,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":[":root {\n  --bg-color: #3a4658;\n  --primary-color: #d9d9d9;\n  --secondary-color: #000000;\n  --tertiary-color: #b9b9b9;\n  --quaternary-color: #ab7728;\n  --primary-radius: 12px;\n  --font: Inter, sans-serif;\n\n  /* Stack view variables */\n  --pancake-visibility: visible;\n  --value-visibility: visible;\n  --value-color: var(--secondary-color);\n  --value-color-hover: var(--secondary-color);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url(\"./fonts/inter.ttf\");\n}\n\n/* Used for Material Symbols from Google Fonts */\n.material-symbols-rounded {\n  font-variation-settings: \"FILL\" 1, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\nbody {\n  min-height: 100vh;\n  background: var(--bg-color);\n  color: var(--primary-color);\n}\n\n.all-content {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.top {\n  margin-top: 16px;\n  margin-left: 24px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.header {\n  align-self: start;\n\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.logo {\n  font-family: var(--font);\n  font-size: 44px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.header-button {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header-icon {\n  color: var(--primary-color);\n  transition: color 0.125s;\n}\n\n.header-icon:hover {\n  color: var(--tertiary-color);\n}\n\n.middle {\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  padding: 48px 0;\n  gap: 24px;\n}\n\n.controls {\n  height: 100%;\n  min-height: 520px;\n  max-height: 550px;\n\n  position: relative;\n\n  border: 3px solid var(--primary-color);\n  border-left: none;\n  border-radius: 0 12px 12px 0;\n\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.controls-label {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -2.5%;\n  transform: translate(-50%, 2.5%);\n  -webkit-transform: translate(-50%, 2.5%);\n  -moz-transform: translate(-50%, 2.5%);\n  -ms-transform: translate(-50%, 2.5%);\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.single-control {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  color: var(--primary-color);\n\n  transition: color 0.125s;\n}\n\n.single-control-enabled {\n  color: var(--quaternary-color);\n}\n\n.control-icon {\n  font-size: 20px;\n}\n\n.control-text {\n  font-family: var(--font);\n  font-size: 12px;\n}\n\n#interact-mode-flip .control-icon {\n  transform: rotate(270deg);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n}\n\n#change-state-reset .control-icon {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n}\n\n.single-control:hover {\n  color: var(--tertiary-color);\n}\n\n.single-control:active {\n  color: var(--primary-color);\n}\n\n.stack-container {\n  height: 70vh;\n  min-height: 500px;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#stack {\n  height: 100%;\n  width: 50%;\n  max-width: 640px;\n  min-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.pancake {\n  visibility: var(--pancake-visibility);\n\n  position: relative;\n  max-height: 48px;\n  flex: 1;\n\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: var(--primary-radius);\n\n  cursor: pointer;\n\n  transition: transform 0.25s ease;\n}\n\n.pancake::before {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  content: \"\";\n\n  border-radius: var(--primary-radius);\n  background-color: var(--primary-color);\n\n  transition: background-color 0.125s;\n}\n\n.pancake:hover::before {\n  background-color: var(--tertiary-color);\n}\n\n.pancake:active::before {\n  background-color: var(--primary-color);\n}\n\n.pancake::after {\n  visibility: var(--value-visibility);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 0 12px;\n\n  content: attr(data-value);\n\n  color: var(--value-color);\n  font-family: var(--font);\n  font-weight: bold;\n  font-size: 2rem;\n\n  transition: color 0.125s;\n}\n\n.pancake:hover::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color-hover);\n}\n\n.pancake:active::after {\n  visibility: var(--value-visibility);\n  color: var(--value-color);\n}\n\n#history-container {\n  position: relative;\n\n  height: 70vh;\n  min-height: 500px;\n  width: 15vw;\n  min-width: 200px;\n  max-width: 250px;\n\n  padding: 12px;\n\n  border: 3px solid var(--primary-color);\n  border-right: none;\n  border-radius: var(--primary-radius) 0 0 var(--primary-radius);\n}\n\n#history-label {\n  display: none;\n  position: absolute;\n  left: 12px;\n  top: -12px;\n\n  padding: 0 8px;\n\n  background-color: var(--bg-color);\n\n  font-family: var(--font);\n  font-weight: 600;\n}\n\n#history {\n  height: 100%;\n  width: 100%;\n\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 12px;\n\n  overflow: auto;\n}\n\n.history-card {\n  aspect-ratio: 1/1;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  gap: 2px;\n\n  border-radius: var(--primary-radius);\n  padding: 6px;\n  padding-top: 20px; /* Leave room for pseudo-element label */\n\n  background-color: var(--primary-color);\n\n  cursor: pointer;\n\n  position: relative;\n\n  transition: background-color 0.125s;\n}\n\n.history-card::after {\n  position: absolute;\n  content: attr(data-history-index);\n\n  font-family: var(--font);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--secondary-color);\n\n  top: 2px;\n  left: 6px;\n}\n\n.history-card:hover {\n  background-color: var(--tertiary-color);\n}\n\n.history-card:active {\n  background-color: var(--primary-color);\n}\n\n.card-pancake {\n  background-color: var(--secondary-color);\n\n  max-height: 8px;\n  flex: 1;\n\n  border-radius: 2px;\n\n  pointer-events: none;\n}\n\n.bottom {\n  height: 0;\n}\n\n/* USED FOR \"Under construction...\" PAGE.\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\nh6 {\n  color: cornflowerblue;\n\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 700;\n  font-size: 36px;\n\n*/ ;\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCx3QkFBd0IsNkJBQTZCLCtCQUErQiw4QkFBOEIsZ0NBQWdDLDJCQUEyQiw4QkFBOEIsa0VBQWtFLGdDQUFnQywwQ0FBMEMsZ0RBQWdELEdBQUcsZ0JBQWdCLHVCQUF1Qix5REFBeUQsR0FBRyxrRkFBa0YsK0VBQStFLEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLEdBQUcsWUFBWSxxQkFBcUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0JBQW9CLEdBQUcsVUFBVSxzQkFBc0IsZ0NBQWdDLGdDQUFnQyxHQUFHLGtCQUFrQixrQkFBa0Isc0NBQXNDLHNCQUFzQixnQkFBZ0IsR0FBRyxVQUFVLHFCQUFxQixzQkFBc0Isb0JBQW9CLDJCQUEyQixjQUFjLEdBQUcsYUFBYSxzQkFBc0Isb0JBQW9CLHdCQUF3QixjQUFjLEdBQUcsV0FBVyw2QkFBNkIsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxrQkFBa0IsZ0NBQWdDLDZCQUE2QixHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyxhQUFhLGdCQUFnQixvQkFBb0IseUNBQXlDLHdCQUF3QixvQkFBb0IsY0FBYyxHQUFHLGVBQWUsaUJBQWlCLHNCQUFzQixzQkFBc0IseUJBQXlCLDZDQUE2QyxzQkFBc0IsaUNBQWlDLG9CQUFvQixvQkFBb0IsMkJBQTJCLG1DQUFtQyxHQUFHLHFCQUFxQixrQkFBa0IsdUJBQXVCLGNBQWMsZUFBZSxxQ0FBcUMsNkNBQTZDLDBDQUEwQyx5Q0FBeUMscUJBQXFCLHdDQUF3QywrQkFBK0IscUJBQXFCLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0Isa0NBQWtDLCtCQUErQixHQUFHLDZCQUE2QixtQ0FBbUMsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsbUJBQW1CLDZCQUE2QixvQkFBb0IsR0FBRyx1Q0FBdUMsOEJBQThCLHNDQUFzQyxtQ0FBbUMsa0NBQWtDLEdBQUcsdUNBQXVDLDRCQUE0QixvQ0FBb0MsaUNBQWlDLGdDQUFnQyxHQUFHLDJCQUEyQixpQ0FBaUMsR0FBRyw0QkFBNEIsZ0NBQWdDLEdBQUcsc0JBQXNCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLEdBQUcsWUFBWSxpQkFBaUIsZUFBZSxxQkFBcUIscUJBQXFCLG9CQUFvQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixhQUFhLEdBQUcsY0FBYywwQ0FBMEMseUJBQXlCLHFCQUFxQixZQUFZLHlDQUF5Qyx5Q0FBeUMsc0JBQXNCLHVDQUF1QyxHQUFHLHNCQUFzQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsMkNBQTJDLDJDQUEyQywwQ0FBMEMsR0FBRyw0QkFBNEIsNENBQTRDLEdBQUcsNkJBQTZCLDJDQUEyQyxHQUFHLHFCQUFxQix3Q0FBd0MsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsb0JBQW9CLGdDQUFnQyxnQ0FBZ0MsNkJBQTZCLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsMkJBQTJCLHdDQUF3QyxvQ0FBb0MsR0FBRyw0QkFBNEIsd0NBQXdDLDhCQUE4QixHQUFHLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHNCQUFzQixnQkFBZ0IscUJBQXFCLHFCQUFxQixvQkFBb0IsNkNBQTZDLHVCQUF1QixtRUFBbUUsR0FBRyxvQkFBb0Isa0JBQWtCLHVCQUF1QixlQUFlLGVBQWUscUJBQXFCLHdDQUF3QywrQkFBK0IscUJBQXFCLEdBQUcsY0FBYyxpQkFBaUIsZ0JBQWdCLG9CQUFvQiwwQ0FBMEMsd0JBQXdCLGdDQUFnQyxjQUFjLHFCQUFxQixHQUFHLG1CQUFtQixzQkFBc0Isa0JBQWtCLDJCQUEyQix5QkFBeUIsd0JBQXdCLGFBQWEsMkNBQTJDLGlCQUFpQix1QkFBdUIsc0ZBQXNGLHNCQUFzQix5QkFBeUIsMENBQTBDLEdBQUcsMEJBQTBCLHVCQUF1QixzQ0FBc0MsK0JBQStCLHFCQUFxQixvQkFBb0Isa0NBQWtDLGVBQWUsY0FBYyxHQUFHLHlCQUF5Qiw0Q0FBNEMsR0FBRywwQkFBMEIsMkNBQTJDLEdBQUcsbUJBQW1CLDZDQUE2QyxzQkFBc0IsWUFBWSx5QkFBeUIsMkJBQTJCLEdBQUcsYUFBYSxjQUFjLEdBQUcseURBQXlELGtCQUFrQixpQkFBaUIsc0JBQXNCLDRCQUE0Qix3QkFBd0IsNENBQTRDLEdBQUcsUUFBUSwwQkFBMEIscURBQXFELHFCQUFxQixvQkFBb0IsUUFBUSxTQUFTLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksV0FBVyx5QkFBeUIsY0FBYyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdB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OztBQUVwRTtBQUNBLGtCQUFrQixnREFBWTtBQUM5QixnQ0FBZ0Msc0RBQW1COztBQUVuRDtBQUNBLCtEQUFnQjtBQUNoQiwrREFBZ0I7QUFDaEIsMkRBQWtCOztBQUVsQjtBQUNBLDBEQUFnQjtBQUNoQixtRUFBd0I7QUFDeEIscUVBQTBCO0FBQzFCLGtFQUF1Qjs7QUFFdkI7QUFDQSw4REFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS8uL3NyYy9jaGFuZ2UtcXVhbnRpdHktY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2NoYW5nZS1zdGF0ZS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvaGlzdG9yeS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL2ludGVyYWN0LW1vZGUtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3RhY2stY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL3N0YWNrLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3RhY2staW52b2tlci5qcyIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvc3RhY2suanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtLy4vc3JjL3ZpZXctY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhbmNha2UtcHJvYmxlbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFuY2FrZS1wcm9ibGVtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYW5jYWtlLXByb2JsZW0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvaW50ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogIzNhNDY1ODtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2Q5ZDlkOTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDAwMDAwO1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogI2I5YjliOTtcXG4gIC0tcXVhdGVybmFyeS1jb2xvcjogI2FiNzcyODtcXG4gIC0tcHJpbWFyeS1yYWRpdXM6IDEycHg7XFxuICAtLWZvbnQ6IEludGVyLCBzYW5zLXNlcmlmO1xcblxcbiAgLyogU3RhY2sgdmlldyB2YXJpYWJsZXMgKi9cXG4gIC0tcGFuY2FrZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgLS12YWx1ZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgLS12YWx1ZS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIC0tdmFsdWUtY29sb3ItaG92ZXI6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEludGVyO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4vKiBVc2VkIGZvciBNYXRlcmlhbCBTeW1ib2xzIGZyb20gR29vZ2xlIEZvbnRzICovXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDEsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgMjQ7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5hbGwtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWljb24ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uaGVhZGVyLWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDhweCAwO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTIwcHg7XFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcblxcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udHJvbHMtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogLTIuNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcblxcbiAgcGFkZGluZzogMCA4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29udHJvbC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2wtZW5hYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeS1jb2xvcik7XFxufVxcblxcbi5jb250cm9sLWljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY29udHJvbC10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuI2ludGVyYWN0LW1vZGUtZmxpcCAuY29udHJvbC1pY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuI2NoYW5nZS1zdGF0ZS1yZXNldCAuY29udHJvbC1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2w6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnN0YWNrLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N0YWNrIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wYW5jYWtlIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXBhbmNha2UtdmlzaWJpbGl0eSk7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtaGVpZ2h0OiA0OHB4O1xcbiAgZmxleDogMTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcXG59XFxuXFxuLnBhbmNha2U6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnBhbmNha2U6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5wYW5jYWtlOmFjdGl2ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGFuY2FrZTo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMCAxMnB4O1xcblxcbiAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG5cXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnBhbmNha2U6aG92ZXI6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBhbmNha2U6YWN0aXZlOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvcik7XFxufVxcblxcbiNoaXN0b3J5LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuXFxuICBwYWRkaW5nOiAxMnB4O1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cykgMCAwIHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG59XFxuXFxuI2hpc3RvcnktbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IC0xMnB4O1xcblxcbiAgcGFkZGluZzogMCA4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jaGlzdG9yeSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdhcDogMTJweDtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBMZWF2ZSByb29tIGZvciBwc2V1ZG8tZWxlbWVudCBsYWJlbCAqL1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cztcXG59XFxuXFxuLmhpc3RvcnktY2FyZDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogYXR0cihkYXRhLWhpc3RvcnktaW5kZXgpO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiA2cHg7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcmQtcGFuY2FrZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcbiAgbWF4LWhlaWdodDogOHB4O1xcbiAgZmxleDogMTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVVNFRCBGT1IgXFxcIlVuZGVyIGNvbnN0cnVjdGlvbi4uLlxcXCIgUEFHRS5cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG5oNiB7XFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG5cXG4qLyA7XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHlCQUF5Qjs7RUFFekIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNkI7QUFDL0I7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztB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YTQ2NTg7XFxuICAtLXByaW1hcnktY29sb3I6ICNkOWQ5ZDk7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwMDAwMDtcXG4gIC0tdGVydGlhcnktY29sb3I6ICNiOWI5Yjk7XFxuICAtLXF1YXRlcm5hcnktY29sb3I6ICNhYjc3Mjg7XFxuICAtLXByaW1hcnktcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250OiBJbnRlciwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qIFN0YWNrIHZpZXcgdmFyaWFibGVzICovXFxuICAtLXBhbmNha2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC0tdmFsdWUtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC0tdmFsdWUtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAtLXZhbHVlLWNvbG9yLWhvdmVyOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlcjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL2ludGVyLnR0ZlxcXCIpO1xcbn1cXG5cXG4vKiBVc2VkIGZvciBNYXRlcmlhbCBTeW1ib2xzIGZyb20gR29vZ2xlIEZvbnRzICovXFxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDEsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgMjQ7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5hbGwtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWljb24ge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uaGVhZGVyLWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNDhweCAwO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTIwcHg7XFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcblxcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udHJvbHMtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogLTIuNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyLjUlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMi41JSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIuNSUpO1xcblxcbiAgcGFkZGluZzogMCA4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29udHJvbC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xMjVzO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2wtZW5hYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeS1jb2xvcik7XFxufVxcblxcbi5jb250cm9sLWljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uY29udHJvbC10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuI2ludGVyYWN0LW1vZGUtZmxpcCAuY29udHJvbC1pY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuI2NoYW5nZS1zdGF0ZS1yZXNldCAuY29udHJvbC1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5zaW5nbGUtY29udHJvbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4uc2luZ2xlLWNvbnRyb2w6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnN0YWNrLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N0YWNrIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wYW5jYWtlIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXBhbmNha2UtdmlzaWJpbGl0eSk7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtaGVpZ2h0OiA0OHB4O1xcbiAgZmxleDogMTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cyk7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcXG59XFxuXFxuLnBhbmNha2U6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJpbWFyeS1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnBhbmNha2U6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi5wYW5jYWtlOmFjdGl2ZTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucGFuY2FrZTo6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmFyKC0tdmFsdWUtdmlzaWJpbGl0eSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMCAxMnB4O1xcblxcbiAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG5cXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTI1cztcXG59XFxuXFxuLnBhbmNha2U6aG92ZXI6OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZhcigtLXZhbHVlLXZpc2liaWxpdHkpO1xcbiAgY29sb3I6IHZhcigtLXZhbHVlLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLnBhbmNha2U6YWN0aXZlOjphZnRlciB7XFxuICB2aXNpYmlsaXR5OiB2YXIoLS12YWx1ZS12aXNpYmlsaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS12YWx1ZS1jb2xvcik7XFxufVxcblxcbiNoaXN0b3J5LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuXFxuICBwYWRkaW5nOiAxMnB4O1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcmltYXJ5LXJhZGl1cykgMCAwIHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG59XFxuXFxuI2hpc3RvcnktbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IC0xMnB4O1xcblxcbiAgcGFkZGluZzogMCA4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jaGlzdG9yeSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdhcDogMTJweDtcXG5cXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByaW1hcnktcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyAvKiBMZWF2ZSByb29tIGZvciBwc2V1ZG8tZWxlbWVudCBsYWJlbCAqL1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cztcXG59XFxuXFxuLmhpc3RvcnktY2FyZDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogYXR0cihkYXRhLWhpc3RvcnktaW5kZXgpO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcbiAgdG9wOiAycHg7XFxuICBsZWZ0OiA2cHg7XFxufVxcblxcbi5oaXN0b3J5LWNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4uaGlzdG9yeS1jYXJkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcmQtcGFuY2FrZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcbiAgbWF4LWhlaWdodDogOHB4O1xcbiAgZmxleDogMTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyogVVNFRCBGT1IgXFxcIlVuZGVyIGNvbnN0cnVjdGlvbi4uLlxcXCIgUEFHRS5cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG5oNiB7XFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG5cXG4qLyA7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXJTdGFja0FuZEhpc3RvcnkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgYWRkQ2hhbmdlUXVhbnRpdHlMaXN0ZW5lcnMgPSAobWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2UtcXVhbnRpdHktYWRkXCIpO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYW5hZ2VyLmV4ZWN1dGVDb21tYW5kKFwiQUREXCIpO1xuICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLXF1YW50aXR5LXJlbW92ZVwiKTtcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFuYWdlci5leGVjdXRlQ29tbWFuZChcIlJFTU9WRVwiKTtcbiAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENoYW5nZVF1YW50aXR5TGlzdGVuZXJzO1xuIiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IGFkZENoYW5nZVN0YXRlTGlzdGVuZXJzID0gKG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHVuZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZS1zdGF0ZS11bmRvXCIpO1xuICB1bmRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFuYWdlci51bmRvKCk7XG4gICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVkb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLXN0YXRlLXJlZG9cIik7XG4gIHJlZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYW5hZ2VyLnJlZG8oKTtcbiAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICB9KTtcblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLXN0YXRlLXJlc2V0XCIpO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1hbmFnZXIuZXhlY3V0ZUNvbW1hbmQoXCJSRVNFVFwiKTtcbiAgICByZW5kZXJTdGFja0FuZEhpc3Rvcnkoc3RhY2tPYmplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENoYW5nZVN0YXRlTGlzdGVuZXJzO1xuIiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IGNsaWNrSGFuZGxlckhpc3RvcnkgPSAoZXZlbnQsIG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSGlzdG9yeUNhcmQgPSBldmVudC50YXJnZXQuZGF0YXNldC5oaXN0b3J5SW5kZXg7XG5cbiAgLy8gb25seSBydW4gd2hlbiBoaXN0b3J5IGNhcmQgaXMgY2xpY2tlZFxuICBpZiAoIXNlbGVjdGVkSGlzdG9yeUNhcmQpIHJldHVybjtcblxuICBtYW5hZ2VyLmV4ZWN1dGVDb21tYW5kKFwiUkVWRVJUXCIsIFtzZWxlY3RlZEhpc3RvcnlDYXJkXSk7XG4gIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG59O1xuXG5jb25zdCBhZGRIaXN0b3J5TGlzdGVuZXIgPSAobWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3QgaGlzdG9yeURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlzdG9yeVwiKTtcbiAgaGlzdG9yeURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PlxuICAgIGNsaWNrSGFuZGxlckhpc3RvcnkoZXZlbnQsIG1hbmFnZXIsIHN0YWNrT2JqZWN0KVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkSGlzdG9yeUxpc3RlbmVyO1xuIiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmZ1bmN0aW9uIF9nZXRPdGhlclNpYmxpbmdzKGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCBjaGlsZHJlbiA9IFsuLi5wYXJlbnQuY2hpbGRyZW5dO1xuICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IGVsZW1lbnQpO1xufVxuXG5jb25zdCBfY2hhbmdlSW50ZXJhY3RNb2RlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkVmlldyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgLy8gdG9nZ2xlIGVuYWJsZWQgY2xhc3Mgb25cbiAgc2VsZWN0ZWRWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIsIHRydWUpO1xuXG4gIC8vIHRvZ2dsZSBlbmFibGVkIGNsYXNzIG9mZiBmb3Igb3RoZXIgaW50ZXJhY3QtbW9kZSBlbGVtZW50c1xuICBjb25zdCBzaWJsaW5ncyA9IF9nZXRPdGhlclNpYmxpbmdzKHNlbGVjdGVkVmlldywgc2VsZWN0ZWRWaWV3LnBhcmVudE5vZGUpO1xuICBzaWJsaW5ncy5mb3JFYWNoKChzaWJsaW5nKSA9PiB7XG4gICAgc2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiLCBmYWxzZSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkSW50ZXJhY3RNb2RlTGlzdGVuZXJzID0gKHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IGludGVyYWN0TW9kZXMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdC1tb2RlXCIpLmNoaWxkcmVuXTtcbiAgaW50ZXJhY3RNb2Rlcy5mb3JFYWNoKChtb2RlKSA9PiB7XG4gICAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBfY2hhbmdlSW50ZXJhY3RNb2RlKGV2ZW50KTtcbiAgICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkSW50ZXJhY3RNb2RlTGlzdGVuZXJzO1xuIiwiaW1wb3J0IHsgU2FuZGJveFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcblxuY29uc3QgcmVuZGVyU3RhY2sgPSAoc3RhY2spID0+IHtcbiAgY29uc3Qgc3RhY2tET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrXCIpO1xuICBzdGFja0RPTS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IHN0YWNrQXJyYXkgPSBzdGFjay5nZXRPcmRlcigpO1xuXG4gIC8vIFRyYWRpdGlvbmFsIGZvciBsb29wIHVzZWQgYmVjYXVzZSBlYWNoIHBhbmNha2UncyBpbmRleCBpc24ndFxuICAvLyBuZWNlc3NhcmlseSB0aGUgc2FtZSBhcyBpdHMgdmFsdWVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFja0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmV3UGFuY2FrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UGFuY2FrZS5jbGFzc0xpc3QuYWRkKFwicGFuY2FrZVwiKTtcblxuICAgIGNvbnN0IHdpZHRoUGVyY2VudGFnZSA9IChzdGFja0FycmF5W2ldIC8gc3RhY2tBcnJheS5sZW5ndGgpICogMTAwO1xuICAgIG5ld1BhbmNha2Uuc3R5bGUud2lkdGggPSBgJHt3aWR0aFBlcmNlbnRhZ2V9JWA7XG5cbiAgICAvLyBzZXQgZGF0YSBhdHRyaWJ1dGVzIHRvIGNvbm5lY3Qgc3RhY2sgYW5kIGNvcnJlc3BvbmRpbmcgRE9NIGVsZW1lbnRzXG4gICAgbmV3UGFuY2FrZS5kYXRhc2V0LnN0YWNrSW5kZXggPSBpO1xuICAgIG5ld1BhbmNha2UuZGF0YXNldC52YWx1ZSA9IHN0YWNrQXJyYXlbaV07XG5cbiAgICAvLyBtYWtlIHBhbmNha2UgZHJhZ2dhYmxlIG9ubHkgaWYgZHJhZyBtb2RlIGVuYWJsZWQgb24gU2FuZGJveFN0YWNrXG4gICAgY29uc3QgZHJhZ01vZGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVyYWN0LW1vZGUtZHJhZ1wiKTtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBkcmFnTW9kZURpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIpO1xuICAgIGNvbnNvbGUubG9nKGRyYWdnYWJsZSk7XG4gICAgaWYgKGRyYWdnYWJsZSAmJiBzdGFjayBpbnN0YW5jZW9mIFNhbmRib3hTdGFjaykge1xuICAgICAgbmV3UGFuY2FrZS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc3RhY2tET00uYXBwZW5kKG5ld1BhbmNha2UpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJIaXN0b3J5ID0gKHN0YWNrKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnlET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpc3RvcnlcIik7XG4gIGhpc3RvcnlET00uaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBoaXN0b3J5QXJyYXkgPSBzdGFjay5nZXRIaXN0b3J5KCk7XG4gIC8vIFRyYWRpdGlvbmFsIGZvciBsb29wIHVzZWQgYmVjYXVzZSBlYWNoIGNhcmQncyBoaXN0b3J5LWluZGV4IGRhdGFcbiAgLy8gYXR0cmlidXRlIGNvbWVzIGZyb20gdGhlIGluZGV4IG9mIHRoZSBzbmFwc25vdCBhc3NvY2lhdGVkIHdpdGhcbiAgLy8gdGhlIGNhcmQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmV3SGlzdG9yeUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0hpc3RvcnlDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaXN0b3J5LWNhcmRcIik7XG5cbiAgICBuZXdIaXN0b3J5Q2FyZC5kYXRhc2V0Lmhpc3RvcnlJbmRleCA9IGk7XG5cbiAgICBjb25zdCBjdXJyZW50SGlzdG9yeVN0YWNrID0gaGlzdG9yeUFycmF5W2ldO1xuICAgIGN1cnJlbnRIaXN0b3J5U3RhY2suZm9yRWFjaCgocGFuY2FrZSkgPT4ge1xuICAgICAgY29uc3QgbmV3SGlzdG9yeVBhbmNha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3SGlzdG9yeVBhbmNha2UuY2xhc3NMaXN0LmFkZChcImNhcmQtcGFuY2FrZVwiKTtcblxuICAgICAgY29uc3Qgd2lkdGhQZXJjZW50YWdlID0gKHBhbmNha2UgLyBjdXJyZW50SGlzdG9yeVN0YWNrLmxlbmd0aCkgKiAxMDA7XG4gICAgICBuZXdIaXN0b3J5UGFuY2FrZS5zdHlsZS53aWR0aCA9IGAke3dpZHRoUGVyY2VudGFnZX0lYDtcblxuICAgICAgbmV3SGlzdG9yeUNhcmQuYXBwZW5kKG5ld0hpc3RvcnlQYW5jYWtlKTtcbiAgICB9KTtcblxuICAgIGhpc3RvcnlET00uYXBwZW5kKG5ld0hpc3RvcnlDYXJkKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyU3RhY2tBbmRIaXN0b3J5ID0gKHN0YWNrKSA9PiB7XG4gIHJlbmRlclN0YWNrKHN0YWNrKTtcbiAgcmVuZGVySGlzdG9yeShzdGFjayk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJTdGFjaywgcmVuZGVySGlzdG9yeSwgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH07XG4iLCIvLyBpbXBsZW1lbnQgYmFzZSBjb21tYW5kIGNsYXNzIGFzICdhYnN0cmFjdCcgdG8gZW5zdXJlIGFsbCBwYW5jYWtlXG4vLyBzdGFjayBjb21tYW5kcyBpbmhlcml0IGNvcnJlY3QgYmVoYXZpb3IgYW5kIHByb3BlcnRpZXNcbmNsYXNzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2spIHtcbiAgICBpZiAodGhpcy5jb25zdHJ1Y3RvciA9PSBQYW5jYWtlU3RhY2tDb21tYW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzc2VzIGNhbid0IGJlIGluc3RhbnRpYXRlZC5cIik7XG4gICAgfVxuICAgIHRoaXMucGFuY2FrZVN0YWNrID0gcGFuY2FrZVN0YWNrO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2QgJ2V4ZWN1dGUoKScgbXVzdCBiZSBpbXBsZW1lbnRlZFwiKTtcbiAgfVxufVxuXG5jbGFzcyBGbGlwQ29tbWFuZCBleHRlbmRzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2ssIGluZGV4KSB7XG4gICAgc3VwZXIocGFuY2FrZVN0YWNrKTtcbiAgICB0aGlzLmluZGV4ID0gcGFyc2VJbnQoaW5kZXgpO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjay5mbGlwKHRoaXMuaW5kZXgpO1xuICB9XG59XG5cbmNsYXNzIFJldmVydEZsaXBzQ29tbWFuZCBleHRlbmRzIFBhbmNha2VTdGFja0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihwYW5jYWtlU3RhY2ssIGluZGV4KSB7XG4gICAgc3VwZXIocGFuY2FrZVN0YWNrKTtcbiAgICB0aGlzLmluZGV4ID0gcGFyc2VJbnQoaW5kZXgpO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLnBhbmNha2VTdGFjay5yZXZlcnQodGhpcy5pbmRleCk7XG4gIH1cbn1cblxuY2xhc3MgUmVzZXRDb21tYW5kIGV4dGVuZHMgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaykge1xuICAgIHN1cGVyKHBhbmNha2VTdGFjayk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrLnJlc2V0KCk7XG4gIH1cbn1cblxuY2xhc3MgQWRkUGFuY2FrZUNvbW1hbmQgZXh0ZW5kcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrKSB7XG4gICAgc3VwZXIocGFuY2FrZVN0YWNrKTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2suYWRkUGFuY2FrZSgpO1xuICB9XG59XG5cbmNsYXNzIFJlbW92ZVBhbmNha2VDb21tYW5kIGV4dGVuZHMgUGFuY2FrZVN0YWNrQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKHBhbmNha2VTdGFjaykge1xuICAgIHN1cGVyKHBhbmNha2VTdGFjayk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMucGFuY2FrZVN0YWNrLnJlbW92ZVBhbmNha2UoKTtcbiAgfVxufVxuXG5jbGFzcyBEcmFnUGFuY2FrZUNvbW1hbmQgZXh0ZW5kcyBQYW5jYWtlU3RhY2tDb21tYW5kIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrLCBmcm9tLCB0bykge1xuICAgIHN1cGVyKHBhbmNha2VTdGFjayk7XG4gICAgdGhpcy5kcmFnRnJvbSA9IGZyb207XG4gICAgdGhpcy5kcmFnVG8gPSB0bztcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2subW92ZVBhbmNha2UodGhpcy5kcmFnRnJvbSwgdGhpcy5kcmFnVG8pO1xuICB9XG59XG5cbmNvbnN0IHBhbmNha2VTdGFja0NvbW1hbmRzID0ge1xuICBGTElQOiBGbGlwQ29tbWFuZCxcbiAgUkVWRVJUOiBSZXZlcnRGbGlwc0NvbW1hbmQsXG4gIFJFU0VUOiBSZXNldENvbW1hbmQsXG4gIEFERDogQWRkUGFuY2FrZUNvbW1hbmQsXG4gIFJFTU9WRTogUmVtb3ZlUGFuY2FrZUNvbW1hbmQsXG4gIERSQUc6IERyYWdQYW5jYWtlQ29tbWFuZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhbmNha2VTdGFja0NvbW1hbmRzO1xuIiwiaW1wb3J0IHsgcmVuZGVyU3RhY2tBbmRIaXN0b3J5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IGZsaXBFdmVudCA9IChldmVudCwgbWFuYWdlciwgc3RhY2tPYmplY3QpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRQYW5jYWtlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuc3RhY2tJbmRleDtcbiAgY29uc3QgZmxpcE1vZGVFYW5ibGVkID0gZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmFjdC1tb2RlLWZsaXBcIilcbiAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLWNvbnRyb2wtZW5hYmxlZFwiKTtcblxuICAvLyBvbmx5IHJ1biB3aGVuIHBhbmNha2UgaXMgY2xpY2tlZCBhbmQgZmxpcCBtb2RlIGVuYWJsZWRcbiAgaWYgKHNlbGVjdGVkUGFuY2FrZSAmJiBmbGlwTW9kZUVhbmJsZWQpIHtcbiAgICBtYW5hZ2VyLmV4ZWN1dGVDb21tYW5kKFwiRkxJUFwiLCBbc2VsZWN0ZWRQYW5jYWtlXSk7XG4gICAgcmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrT2JqZWN0KTtcbiAgfVxufTtcblxuY29uc3QgZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFuY2FrZVwiKSkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGFyZ2V0LmRhdGFzZXQuc3RhY2tJbmRleCk7XG5cbiAgICB0YXJnZXQuc3R5bGUub3BhY2l0eSA9IDAuMTtcbiAgfVxufTtcblxuY29uc3QgZHJhZ0VuZCA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5jYWtlXCIpKSB7XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSBcIlwiO1xuICB9XG59O1xuXG5jb25zdCBkcmFnT3ZlciA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuY29uc3QgZHJvcEV2ZW50ID0gKGV2ZW50LCBtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyB2YWxpZGF0ZSB0YXJnZXRcbiAgaWYgKCFldmVudC50YXJnZXQuZGF0YXNldC5zdGFja0luZGV4KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRyb3BUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGRyYWdnZWRJbmRleCA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKSk7XG4gIGNvbnN0IGRyb3BwZWRJbmRleCA9IHBhcnNlSW50KGRyb3BUYXJnZXQuZGF0YXNldC5zdGFja0luZGV4KTtcblxuICAvLyBwcmV2ZW50IHNlbGYtZHJvcHNcbiAgaWYgKGRyb3BwZWRJbmRleCAhPT0gZHJhZ2dlZEluZGV4KSB7XG4gICAgY29uc3Qgc3RhY2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrXCIpO1xuICAgIGNvbnN0IGNsb25lID0gZHJvcFRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgZHJhZ1RhcmdldCA9IHN0YWNrRGl2LmNoaWxkTm9kZXNbZHJhZ2dlZEluZGV4XTtcbiAgICBzdGFja0Rpdi5yZXBsYWNlQ2hpbGQoZHJhZ1RhcmdldCwgZHJvcFRhcmdldCk7XG4gICAgZHJhZ1RhcmdldC5hZnRlcihjbG9uZSk7XG4gIH1cbiAgbWFuYWdlci5leGVjdXRlQ29tbWFuZChcIkRSQUdcIiwgW2RyYWdnZWRJbmRleCwgZHJvcHBlZEluZGV4XSk7XG4gIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFja09iamVjdCk7XG59O1xuXG5jb25zdCBhZGRGbGlwTGlzdGVuZXJzID0gKG1hbmFnZXIsIHN0YWNrT2JqZWN0KSA9PiB7XG4gIGNvbnN0IHN0YWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja1wiKTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT5cbiAgICBmbGlwRXZlbnQoZXZlbnQsIG1hbmFnZXIsIHN0YWNrT2JqZWN0KVxuICApO1xufTtcblxuY29uc3QgYWRkRHJhZ0xpc3RlbmVycyA9IChtYW5hZ2VyLCBzdGFja09iamVjdCkgPT4ge1xuICBjb25zdCBzdGFja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tcIik7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcbiAgc3RhY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZCk7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcik7XG4gIHN0YWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xuICAgIGRyb3BFdmVudChldmVudCwgbWFuYWdlciwgc3RhY2tPYmplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGFkZEZsaXBMaXN0ZW5lcnMsIGFkZERyYWdMaXN0ZW5lcnMgfTtcblxuLyogRm91bmRhdGlvbiBmb3IgZHJhZ292ZXIgdHJhbnNpdGlvbnMsIGlmIG5lZWRlZFxuXG4gIGNvbnN0IG92ZXJJbmRleCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICAuZGF0YXNldC5zdGFja0luZGV4O1xuICBpZiAob3ZlckluZGV4KSB7XG4gICAgY29uc3QgcGFuY2FrZXMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja1wiKS5jaGlsZHJlbl07XG4gICAgY29uc3QgbW92ZVVwID0gcGFuY2FrZXMuZmlsdGVyKFxuICAgICAgKHBhbmNha2UpID0+IHBhbmNha2UuZGF0YXNldC5zdGFja0luZGV4IDw9IG92ZXJJbmRleFxuICAgICk7XG4gICAgY29uc3QgbW92ZURvd24gPSBwYW5jYWtlcy5maWx0ZXIoXG4gICAgICAocGFuY2FrZSkgPT4gcGFuY2FrZS5kYXRhc2V0LnN0YWNrSW5kZXggPj0gb3ZlckluZGV4XG4gICAgKTtcbiAgICBjb25zdCBoZWlnaHQgPSBwYW5jYWtlc1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgbW92ZVVwLmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT5cbiAgICAgICAgKGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7aGVpZ2h0IC8gMiArIDR9cHgpYClcbiAgICApO1xuICAgIG1vdmVEb3duLmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT4gKGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtoZWlnaHQgLyAyICsgNH1weClgKVxuICAgICk7XG4gIH1cbiAgKi9cbiIsImltcG9ydCBwYW5jYWtlU3RhY2tDb21tYW5kcyBmcm9tIFwiLi9zdGFjay1jb21tYW5kc1wiO1xuXG5jbGFzcyBQYW5jYWtlU3RhY2tJbnZva2VyIHtcbiAgY29uc3RydWN0b3IocGFuY2FrZVN0YWNrKSB7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2sgPSBwYW5jYWtlU3RhY2s7XG4gICAgdGhpcy5wYW5jYWtlU3RhY2tDb21tYW5kcyA9IHBhbmNha2VTdGFja0NvbW1hbmRzO1xuICAgIHRoaXMuY29tbWFuZHNIaXN0b3J5ID0gW107XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gIH1cblxuICBleGVjdXRlQ29tbWFuZChyZXF1ZXN0LCBhcmdzID0gW10pIHtcbiAgICAvLyByZW1vdmUgdW5kb25lIGNvbW1hbmRzIHVwb24gbmV3IGV4ZWN1dGlvbiBhZnRlciB1bmRvKHMpXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPCB0aGlzLmNvbW1hbmRzSGlzdG9yeS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmNvbW1hbmRzSGlzdG9yeSA9IHRoaXMuY29tbWFuZHNIaXN0b3J5LnNsaWNlKDAsIHRoaXMucG9zaXRpb24gKyAxKTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RlZENvbW1hbmQgPSB0aGlzLnBhbmNha2VTdGFja0NvbW1hbmRzW3JlcXVlc3RdO1xuICAgICAgY29uc3QgY29uY3JldGVDb21tYW5kID0gbmV3IHJlcXVlc3RlZENvbW1hbmQodGhpcy5wYW5jYWtlU3RhY2ssIC4uLmFyZ3MpO1xuICAgICAgdGhpcy5jb21tYW5kc0hpc3RvcnkucHVzaChjb25jcmV0ZUNvbW1hbmQpO1xuICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgY29uY3JldGVDb21tYW5kLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH1cblxuICB1bmRvKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID4gMCkge1xuICAgICAgLy8gZXhlY3V0ZSByZXNldCBjb21tYW5kXG4gICAgICBjb25zdCB0ZW1wUmVzZXQgPSBuZXcgdGhpcy5wYW5jYWtlU3RhY2tDb21tYW5kc1tcIlJFU0VUXCJdKFxuICAgICAgICB0aGlzLnBhbmNha2VTdGFja1xuICAgICAgKTtcbiAgICAgIHRlbXBSZXNldC5leGVjdXRlKCk7XG5cbiAgICAgIC8vIGV4ZWN1dGUgYWxsIGNvbW1hbmRzIHVwIHRvIHBvc2l0aW9uIC0gMVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvc2l0aW9uIC0gMTsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZHNIaXN0b3J5W2ldLmV4ZWN1dGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3NpdGlvbiAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJlZG8oKSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPCB0aGlzLmNvbW1hbmRzSGlzdG9yeS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICB0aGlzLmNvbW1hbmRzSGlzdG9yeVt0aGlzLnBvc2l0aW9uXS5leGVjdXRlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmNha2VTdGFja0ludm9rZXI7XG4iLCJjbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG9yZGVyKSB7XG4gICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuICAgIC8vIFVzZSBzaGFsbG93IGNvcGllcyB0byBhdm9pZCByZWZlcmVuY2Ugc2hhcmluZ1xuICAgIHRoaXMuaGlzdG9yeSA9IFtbLi4ub3JkZXJdXTtcbiAgICB0aGlzLmRlZmF1bHQgPSBbLi4ub3JkZXJdO1xuICB9XG5cbiAgZ2V0T3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXI7XG4gIH1cblxuICBnZXRIaXN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmhpc3Rvcnk7XG4gIH1cblxuICBmbGlwKGluZGV4KSB7XG4gICAgY29uc3QgZmxpcEJlbmVhdGggPSBwYXJzZUludChpbmRleCk7XG4gICAgaWYgKGZsaXBCZW5lYXRoID49IDAgJiYgZmxpcEJlbmVhdGggPCB0aGlzLm9yZGVyLmxlbmd0aCkge1xuICAgICAgY29uc3QgZmxpcHBlZCA9IHRoaXMub3JkZXIuc2xpY2UoMCwgZmxpcEJlbmVhdGggKyAxKTtcbiAgICAgIGZsaXBwZWQucmV2ZXJzZSgpO1xuICAgICAgdGhpcy5vcmRlci5zcGxpY2UoMCwgZmxpcEJlbmVhdGggKyAxLCAuLi5mbGlwcGVkKTtcbiAgICAgIC8vIFVzZSBzaGFsbG93IGNvcHkgdG8gYXZvaWQgcmVmZXJlbmNlIHNoYXJpbmdcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKFsuLi50aGlzLm9yZGVyXSk7XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJ0KGluZGV4KSB7XG4gICAgY29uc3QgcmV2ZXJ0VG8gPSBwYXJzZUludChpbmRleCk7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMuaGlzdG9yeS5zbGljZSgwLCByZXZlcnRUbyArIDEpO1xuICAgIC8vIFVzZSBzaGFsbG93IGNvcHkgdG8gYXZvaWQgcmVmZXJlbmNlIHNoYXJpbmdcbiAgICB0aGlzLm9yZGVyID0gWy4uLnRoaXMuaGlzdG9yeVtyZXZlcnRUb11dO1xuICAgIHRoaXMuaGlzdG9yeSA9IHRlbXA7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm9yZGVyID0gWy4uLnRoaXMuZGVmYXVsdF07XG4gICAgdGhpcy5oaXN0b3J5ID0gW1suLi50aGlzLmRlZmF1bHRdXTtcbiAgfVxufVxuXG5jbGFzcyBTYW5kYm94U3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKG9yZGVyKSB7XG4gICAgc3VwZXIob3JkZXIpO1xuICB9XG4gIGFkZFBhbmNha2UoKSB7XG4gICAgdGhpcy5vcmRlci5wdXNoKHRoaXMub3JkZXIubGVuZ3RoICsgMSk7XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgfVxuICByZW1vdmVQYW5jYWtlKCkge1xuICAgIGNvbnN0IGxhcmdlc3RQYW5jYWtlID0gTWF0aC5tYXgoLi4udGhpcy5vcmRlcik7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMub3JkZXIuZmlsdGVyKChwYW5jYWtlKSA9PiBwYW5jYWtlICE9PSBsYXJnZXN0UGFuY2FrZSk7XG4gICAgdGhpcy5vcmRlciA9IHRlbXA7XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5oaXN0b3J5LnB1c2goWy4uLnRoaXMub3JkZXJdKTtcbiAgfVxuICBtb3ZlUGFuY2FrZShmcm9tLCB0bykge1xuICAgIGNvbnN0IHZhbGlkSW5kaWNlcyA9XG4gICAgICBmcm9tID49IDAgJiZcbiAgICAgIHRvID49IDAgJiZcbiAgICAgIGZyb20gPCB0aGlzLm9yZGVyLmxlbmd0aCAmJlxuICAgICAgdG8gPCB0aGlzLm9yZGVyLmxlbmd0aDtcbiAgICBpZiAodmFsaWRJbmRpY2VzKSB7XG4gICAgICBjb25zdCBtb3ZpbmdQYW5jYWtlID0gdGhpcy5vcmRlci5zcGxpY2UoZnJvbSwgMSlbMF07XG4gICAgICB0aGlzLm9yZGVyLnNwbGljZSh0bywgMCwgbW92aW5nUGFuY2FrZSk7XG4gICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKFsuLi50aGlzLm9yZGVyXSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFN0YWNrLCBTYW5kYm94U3RhY2sgfTtcbiIsImltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5mdW5jdGlvbiBfZ2V0T3RoZXJTaWJsaW5ncyhlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4ucGFyZW50LmNoaWxkcmVuXTtcbiAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkICE9PSBlbGVtZW50KTtcbn1cblxuY29uc3QgX2NoYW5nZVZpZXcgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRWaWV3ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAvLyB0b2dnbGUgZW5hYmxlZCBjbGFzcyBvblxuICBzZWxlY3RlZFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcInNpbmdsZS1jb250cm9sLWVuYWJsZWRcIiwgdHJ1ZSk7XG5cbiAgLy8gdG9nZ2xlIGVuYWJsZWQgY2xhc3Mgb2ZmIGZvciBvdGhlciB2aWV3IGVsZW1lbnRzXG4gIGNvbnN0IHNpYmxpbmdzID0gX2dldE90aGVyU2libGluZ3Moc2VsZWN0ZWRWaWV3LCBzZWxlY3RlZFZpZXcucGFyZW50Tm9kZSk7XG4gIHNpYmxpbmdzLmZvckVhY2goKHNpYmxpbmcpID0+IHtcbiAgICBzaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaW5nbGUtY29udHJvbC1lbmFibGVkXCIsIGZhbHNlKTtcbiAgfSk7XG5cbiAgLy8gYWRqdXN0IGN1c3RvbSBwcm9wZXJ0aWVzIHRvIGZpdCBzZWxlY3RlZCB2aWV3XG4gIGlmIChzZWxlY3RlZFZpZXcuaWQgPT09IFwidmlldy1wYW5jYWtlc1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLXBhbmNha2UtdmlzaWJpbGl0eVwiLFxuICAgICAgXCJ2aXNpYmxlXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdmFsdWUtdmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFZpZXcuaWQgPT09IFwidmlldy1udW1iZXJzXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tcGFuY2FrZS12aXNpYmlsaXR5XCIsXG4gICAgICBcImhpZGRlblwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZhbHVlLXZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvclwiLFxuICAgICAgXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tdmFsdWUtY29sb3ItaG92ZXJcIixcbiAgICAgIFwidmFyKC0tdGVydGlhcnktY29sb3IpXCJcbiAgICApO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkVmlldy5pZCA9PT0gXCJ2aWV3LWJvdGhcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1wYW5jYWtlLXZpc2liaWxpdHlcIixcbiAgICAgIFwidmlzaWJsZVwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZhbHVlLXZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvclwiLFxuICAgICAgXCJ2YXIoLS1zZWNvbmRhcnktY29sb3IpXCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS12YWx1ZS1jb2xvci1ob3ZlclwiLFxuICAgICAgXCJ2YXIoLS1zZWNvbmRhcnktY29sb3IpXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IFwiSW5jb3JyZWN0IGNsaWNrLlwiO1xuICB9XG59O1xuXG5jb25zdCBhZGRWaWV3TGlzdGVuZXJzID0gKHN0YWNrKSA9PiB7XG4gIGNvbnN0IHZpZXdzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld1wiKS5jaGlsZHJlbl07XG4gIHZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIF9jaGFuZ2VWaWV3KGV2ZW50KTtcbiAgICAgIHJlbmRlclN0YWNrQW5kSGlzdG9yeShzdGFjayk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkVmlld0xpc3RlbmVycztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBTdGFjaywgU2FuZGJveFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcbmltcG9ydCB7IHJlbmRlclN0YWNrQW5kSGlzdG9yeSB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IGFkZFZpZXdMaXN0ZW5lcnMgZnJvbSBcIi4vdmlldy1jb250cm9sc1wiO1xuaW1wb3J0IGFkZEludGVyYWN0TW9kZUxpc3RlbmVycyBmcm9tIFwiLi9pbnRlcmFjdC1tb2RlLWNvbnRyb2xzXCI7XG5pbXBvcnQgYWRkSGlzdG9yeUxpc3RlbmVyIGZyb20gXCIuL2hpc3RvcnktZXZlbnRzXCI7XG5pbXBvcnQgeyBhZGRGbGlwTGlzdGVuZXJzLCBhZGREcmFnTGlzdGVuZXJzIH0gZnJvbSBcIi4vc3RhY2stZXZlbnRzXCI7XG5pbXBvcnQgUGFuY2FrZVN0YWNrSW52b2tlciBmcm9tIFwiLi9zdGFjay1pbnZva2VyXCI7XG5pbXBvcnQgYWRkQ2hhbmdlU3RhdGVMaXN0ZW5lcnMgZnJvbSBcIi4vY2hhbmdlLXN0YXRlLWNvbnRyb2xzXCI7XG5pbXBvcnQgYWRkQ2hhbmdlUXVhbnRpdHlMaXN0ZW5lcnMgZnJvbSBcIi4vY2hhbmdlLXF1YW50aXR5LWNvbnRyb2xzXCI7XG5cbmNvbnN0IGRlZmF1bHRPcmRlciA9IFs2LCA1LCAzLCAyLCA0LCAxXTtcbmNvbnN0IHN0YWNrID0gbmV3IFNhbmRib3hTdGFjayhkZWZhdWx0T3JkZXIpO1xuY29uc3QgUGFuY2FrZVN0YWNrTWFuYWdlciA9IG5ldyBQYW5jYWtlU3RhY2tJbnZva2VyKHN0YWNrKTtcblxuLy8gYWRkIHN0YWNrIGxpc3RuZXJzIHRvIHN0YWNrIGFuZCBoaXN0b3J5IGVsZW1lbnRzIHRvIGhpc3RvcnlcbmFkZEZsaXBMaXN0ZW5lcnMoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuYWRkRHJhZ0xpc3RlbmVycyhQYW5jYWtlU3RhY2tNYW5hZ2VyLCBzdGFjayk7XG5hZGRIaXN0b3J5TGlzdGVuZXIoUGFuY2FrZVN0YWNrTWFuYWdlciwgc3RhY2spO1xuXG4vLyBhZGQgY29udHJvbHMgbGlzdGVuZXJzXG5hZGRWaWV3TGlzdGVuZXJzKHN0YWNrKTtcbmFkZEludGVyYWN0TW9kZUxpc3RlbmVycyhzdGFjayk7XG5hZGRDaGFuZ2VRdWFudGl0eUxpc3RlbmVycyhQYW5jYWtlU3RhY2tNYW5hZ2VyLCBzdGFjayk7XG5hZGRDaGFuZ2VTdGF0ZUxpc3RlbmVycyhQYW5jYWtlU3RhY2tNYW5hZ2VyLCBzdGFjayk7XG5cbi8vIHJlbmRlciBkZWZhdWx0IHN0YWNrIGFuZCBoaXN0b3J5IG9uIHBhZ2UgbG9hZFxucmVuZGVyU3RhY2tBbmRIaXN0b3J5KHN0YWNrKTtcblxuLyogXG5jb25zdCBmdWxsU3RhY2sgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbml0ID0ge1xuICAgIHN0YWNrOiBuZXcgU3RhY2soZGVmYXVsdE9yZGVyKSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5zZWFsKGluaXQpO1xufSkoKTtcbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=