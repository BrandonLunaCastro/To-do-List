/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
  font-family:'Poppins', sans-serif;
  --main-color:#222831;
  --secondary-color:#EEEEEE;
  --third-color:#00ADB5;
  --remove-color:#BB2525;
  /* --text-color:; */
} 
*,
::after,
::before {
  padding: 0;
  margin: 0;
 /*  border: 1px solid black; */
}
body{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background:var(--main-color);
  color:var(--secondary-color);
}

main{
  display: flex;
  background: var(--secondary-color);
  flex: 2 1 600px;
}

footer{
  background-color: var(--main-color);
  color: var(--secondary-color);
  display: inherit;
  align-items: center;
  justify-content: center;
  flex: 1 ;
}

.logo{
  display: inherit;
  align-items: center;
  gap: 6px;
}

.window__projects{
  width: 18rem;
  background-color: #EEEEEE;
  box-shadow: 2px 2px 8px var(--main-color);
  color: var(--main-color);

}

#add__project{
  background-color: var(--third-color);
  appearance: none;
  outline: none;
  border: none;
  width: 150px;
  height: 2rem;
  border-radius: 8px;
  box-shadow: 1px 1px 4px var(--main-color);
}

.tasks {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
  gap: 25px;
  
  margin-top: 2rem;
}

#addTask{
  width: 4rem;
  font-size: 3rem;
  padding: 4px;
  border-radius: 100%;
  outline: none;
  border: none;
  background-color: var(--third-color);
  box-shadow: 1px 1px 3px var(--main-color);
  transition: transform .2s ease-in-out;
}
#addTask:hover{
  cursor: pointer;
  transform: translateY(-5px);
}
.task {
  display: flex;
  flex-direction: column;
  background: var(--main-color);
  border-radius: 8px;
  width: 500px;
  display: flex;
  gap: 25px;
  color: #fff;
  justify-content: center;
  align-items: center;
}
.main__task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
}
.main__task > * {
  padding: 10px;
  color: var(--secondary-color);
}
.main__task > i {
  display: inherit;
  justify-content: end;
}
.more__info{
  color: var(--secondary-color);
}
.edit:hover{
  color: var(--third-color);
}
.delete:hover{
  color: var(--remove-color);
}

.display__none{
    display: none;
}
.project{
  border-bottom: 2px solid #000;
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.minus{
  border: 1px solid black;
  border-radius: 80%;
  padding: 2px;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,iCAAiC;EACjC,oBAAoB;EACpB,yBAAyB;EACzB,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;;;EAGE,UAAU;EACV,SAAS;CACV,8BAA8B;AAC/B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,OAAO;EACP,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,6BAA6B;EAC7B,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,yCAAyC;EACzC,wBAAwB;;AAE1B;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;;EAET,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,yCAAyC;EACzC,qCAAqC;AACvC;AACA;EACE,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;AAChB;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0BAA0B;AAC5B;;AAEA;IACI,aAAa;AACjB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-family:'Poppins', sans-serif;\n  --main-color:#222831;\n  --secondary-color:#EEEEEE;\n  --third-color:#00ADB5;\n  --remove-color:#BB2525;\n  /* --text-color:; */\n} \n*,\n::after,\n::before {\n  padding: 0;\n  margin: 0;\n /*  border: 1px solid black; */\n}\nbody{\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  background:var(--main-color);\n  color:var(--secondary-color);\n}\n\nmain{\n  display: flex;\n  background: var(--secondary-color);\n  flex: 2 1 600px;\n}\n\nfooter{\n  background-color: var(--main-color);\n  color: var(--secondary-color);\n  display: inherit;\n  align-items: center;\n  justify-content: center;\n  flex: 1 ;\n}\n\n.logo{\n  display: inherit;\n  align-items: center;\n  gap: 6px;\n}\n\n.window__projects{\n  width: 18rem;\n  background-color: #EEEEEE;\n  box-shadow: 2px 2px 8px var(--main-color);\n  color: var(--main-color);\n\n}\n\n#add__project{\n  background-color: var(--third-color);\n  appearance: none;\n  outline: none;\n  border: none;\n  width: 150px;\n  height: 2rem;\n  border-radius: 8px;\n  box-shadow: 1px 1px 4px var(--main-color);\n}\n\n.tasks {\n  display: flex;\n  flex-direction: column;\n  margin: 0px auto;\n  align-items: center;\n  gap: 25px;\n  \n  margin-top: 2rem;\n}\n\n#addTask{\n  width: 4rem;\n  font-size: 3rem;\n  padding: 4px;\n  border-radius: 100%;\n  outline: none;\n  border: none;\n  background-color: var(--third-color);\n  box-shadow: 1px 1px 3px var(--main-color);\n  transition: transform .2s ease-in-out;\n}\n#addTask:hover{\n  cursor: pointer;\n  transform: translateY(-5px);\n}\n.task {\n  display: flex;\n  flex-direction: column;\n  background: var(--main-color);\n  border-radius: 8px;\n  width: 500px;\n  display: flex;\n  gap: 25px;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n}\n.main__task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: inherit;\n}\n.main__task > * {\n  padding: 10px;\n  color: var(--secondary-color);\n}\n.main__task > i {\n  display: inherit;\n  justify-content: end;\n}\n.more__info{\n  color: var(--secondary-color);\n}\n.edit:hover{\n  color: var(--third-color);\n}\n.delete:hover{\n  color: var(--remove-color);\n}\n\n.display__none{\n    display: none;\n}\n.project{\n  border-bottom: 2px solid #000;\n  width: 100px;\n  display: flex;\n  justify-content: space-between;\n}\n.minus{\n  border: 1px solid black;\n  border-radius: 80%;\n  padding: 2px;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickBtnDelete: () => (/* binding */ clickBtnDelete),
/* harmony export */   clickBtnModal: () => (/* binding */ clickBtnModal),
/* harmony export */   clickBtnTask: () => (/* binding */ clickBtnTask),
/* harmony export */   clickEdit: () => (/* binding */ clickEdit),
/* harmony export */   clickMinus: () => (/* binding */ clickMinus),
/* harmony export */   insertProject: () => (/* binding */ insertProject),
/* harmony export */   insertTask: () => (/* binding */ insertTask),
/* harmony export */   showProperties: () => (/* binding */ showProperties)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/modules/logic.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");


/* Code with Task */
//function that activates modal window
const openModal = (e) => {
  if (e.currentTarget.matches("#addTask"))
    document.querySelector(".modal").showModal();
  if (e.currentTarget.matches(".edit")) {
    document.querySelector(".edit__modal").showModal();
    dataTransfer(e.currentTarget);
  }
};
function clickBtnTask() {
  const btnAddTask = document.getElementById("addTask");
  btnAddTask.addEventListener("click", openModal);
}

//this function getting form values
const submitTask = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  createTask(
    data.title,
    data.dueDate,
    data.description,
    data.priority,
    data.project
  );

  document.querySelector(".modal").close();
  e.currentTarget.reset();
};

function clickBtnModal() {
  document.querySelector(".form").addEventListener("submit", submitTask);
}

const deleteTask = (e) => {
  //delete task inner DOM
  let taskDelete = e.target.closest(".task"),
    id = taskDelete.dataset.id;

  taskDelete.remove();
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteItem)(id);
};
// When target is "icon trash" , trigger this function
function clickBtnDelete() {
  const btnDeletes = document.querySelectorAll(".delete");
  btnDeletes.forEach((btn) => {
    btn.addEventListener("click", deleteTask);
  });
}

//this function generate instance of class task
function createTask(title, dueDate, description, priority, project) {
  const newTask = new _logic_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, dueDate, description, priority, project);
  const dataInfo = newTask.getData;
  console.log(dataInfo);
  insertTask(dataInfo);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveLocalStorage)(dataInfo);
}
//this function insert task to DOM
function insertTask(data, flag = false) {
  let { title, dueDate, description, priority, id } = data;
  const sectionTasks = document.querySelector(".tasks"),
    figure = document.createElement("figure"),
    fragment = document.createDocumentFragment();

  figure.classList.add("task");
  figure.setAttribute("data-id", id);
  figure.innerHTML = `  
        <div class="main__task">
          <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <span class="main__title" >${title}</span>
          </div>
          <div>
            <i class="edit fa-regular fa-pen-to-square"></i>
            <i class="delete fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div class="more__info display__none">
          <span class="info__title"><b>Title:</b>${title}</span>
          <span class="info__date"><b>Due Date:</b>${dueDate}</span>
          <span class="info__description"><b>Description:</b>${description}</span>
          <span class="info__priority"><b>Priority:</b>${priority}</span>
        </div>
      </div>
  `;

  if (flag === true) {
    return figure;
  }
  if (!flag) {
    fragment.appendChild(figure);
    sectionTasks.appendChild(fragment);
    showProperties();
    clickEdit();
    clickBtnDelete();
  }
}

const showMore = (e) => {
  if (
    e.target.matches(".edit") ||
    e.target.matches("#checkbox") ||
    e.target.matches(".delete")
  )
    return;
  const divParent = e.currentTarget;
  divParent.nextElementSibling.classList.toggle("display__none");
};

function showProperties() {
  const infoTasks = document.querySelectorAll(".main__task");
  infoTasks.forEach((task) => {
    task.addEventListener("click", showMore);
  });
}

function clickEdit() {
  const editIcons = document.querySelectorAll(".edit");
  editIcons.forEach((icon) => {
    icon.addEventListener("click", openModal);
  });
}

const replaceTask = (task, element) => {
  task.replaceWith(insertTask(element, true));
  showProperties();
  clickEdit();
  clickBtnDelete();
};

const editTask = (form, element, task) => {
  let actualElement = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.findElement)(element);
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      console.log(actualElement);

      let editData = Object.fromEntries(new FormData(e.target));
      editData.id = task.dataset.id;
      console.log(editData);
      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.editItem)(actualElement[0], editData);
      replaceTask(task, actualElement[0]);

      document.querySelector(".edit__modal").close();
    },
    { once: true }
  );
};

const loadModal = (form, element) => {
  let actualTask = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.findElement)(element);
  const { title, dueDate, description, priority, project } = form;
  title.value = actualTask[0].title;
  dueDate.value = actualTask[0].dueDate;
  description.value = actualTask[0].description;
  priority.value = actualTask[0].priority;
  project.value = actualTask[0].project;
};
const dataTransfer = (element) => {
  const formEdit = document.querySelector(".form__edit"),
    actualTask = element.closest(".task");
  loadModal(formEdit.elements, element);
  editTask(formEdit, element, actualTask);
};

/* -----------------This part of code take care section projects----------------- */

const showOpt = (e) => {
  const btnAdd = e.currentTarget;
  btnAdd.classList.add("display__none");
  btnAdd.nextElementSibling.classList.remove("display__none");
};

document.querySelector(".add__project").addEventListener("click", showOpt);

const deleteProject = (e) => {
  const div = e.target.closest(".project"),
  optionsElement = document.querySelectorAll(`[data-option=${div.dataset.value}]`)
  
  div.remove();
  optionsElement.forEach(option => option.remove());
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteStorageProject)(div);
}

const clickMinus = () => {
  const minusICon = document.querySelectorAll(".minus")
  minusICon.forEach((icon) => icon.addEventListener("click",deleteProject))

}


const insertProject = (value) => {
  const div = document.createElement("div"),
    sectionProjects = document.querySelector(".projects"),
    selectProject = document.querySelector(".select__project"),
    selectEdit = document.getElementById("edit__select"),
    icon = document.createElement("i"),
    option = document.createElement("option");

  icon.className = "minus fa-solid fa-minus";  
  option.innerText = value;
  option.setAttribute("value", value);
  option.setAttribute("data-option",value)
  selectProject.appendChild(option);

  const cloneOption = option.cloneNode(true);
  selectEdit.appendChild(cloneOption);
 

  div.innerText = value;
  div.classList.add("project");
  div.setAttribute("data-value", value);
  div.appendChild(icon)
  sectionProjects.appendChild(div);
  
};

const cancelAdd = (e) => {
  const element = e.target;
  element.parentElement.classList.add("display__none");
  document.querySelector(".add__project").classList.remove("display__none");
};

const addProject = (e) => {

  const element = e.target,
    input = document.getElementById("name"),
    sectionProjects = document.querySelector(".projects"),
    div = document.createElement("div"),
    selectProject = document.querySelector(".select__project"),
    selectEdit = document.getElementById("edit__select"),
    icon = document.createElement("i"),
    option = document.createElement("option");

  icon.className = "minus fa-solid fa-minus";

  option.innerText = input.value;
  option.setAttribute("value", input.value);
  option.setAttribute("data-option",input.value)
  selectProject.appendChild(option);

  //clone node and add option HTML element to correctly select
  const opt = option.cloneNode(true);
  selectEdit.appendChild(opt);
  //add project to section  
  div.innerText = input.value;
  div.classList.add("project");
  div.setAttribute("data-value", input.value);
  div.appendChild(icon)
  sectionProjects.appendChild(div);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProject)(input.value);

  element.parentElement.classList.add("display__none");
  document.querySelector(".add__project").classList.remove("display__none");
  input.value = "";
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.renderTask)();
  clickMinus()
};

document
  .querySelector(".option__project")
  .addEventListener("click", (event) => {
    if (event.target.matches("#btn__add")) addProject(event);
    if (event.target.matches("#btn__cancel")) cancelAdd(event);
  });




/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   findElement: () => (/* binding */ findElement),
/* harmony export */   renderTask: () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");



const _storage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();
class Task {
  #title;
  #dueDate;
  #description;
  #priority;
  #project;
  static count = !_storage || _storage.length === 0 ? 0 : lastIndex(_storage);

  constructor(title, dueDate, description, priority, project) {
    this.#title = title;
    this.#dueDate = dueDate;
    this.#description = description;
    this.#priority = priority;
    this.#project = project;
    this.id = ++Task.count;
  }
  get getData() {
    return {
      title: this.#title,
      dueDate: this.#dueDate,
      description: this.#description,
      priority: this.#priority,
      project: this.#project,
      id: this.id,
    };
  }
}
function lastIndex(arr) {
  return arr.at(-1).id;
}

const findElement = (element) => {
  const actualTask = element.closest(".task"),
    idActual = actualTask.dataset.id,
    actualStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();

  const dataInfo = actualStorage.filter((el) => idActual == el.id);

  return dataInfo;
};

const showTasks = (e) => {
  if(e.target.matches(".minus"))return
  
  const storage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)(),
    projectClicked = e.target.dataset.value,
    sectionTasks = document.querySelector(".tasks");

  sectionTasks.innerHTML = "";

  if (projectClicked === "Home") {
    for (let task of storage) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertTask)(task);
    }
    return;
  }

  const filterTask = storage.filter((task) => task.project === projectClicked);

  if (filterTask.length == 0) {
    return (sectionTasks.innerHTML = `
      <div class='error'>No se encuentran tareas asociadas a este proyecto</div>
    `);
  }
  if (filterTask.length > 1) {
    for (let task of filterTask) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertTask)(task);
    }
  }
  if (filterTask.length < 2) {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertTask)(filterTask[0]);
  }
};

const renderTask = () => {
  const totalProjects = document.querySelectorAll("[data-value]");
  totalProjects.forEach((project) => {
    project.addEventListener("click", showTasks);
  });
};




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteItem: () => (/* binding */ deleteItem),
/* harmony export */   deleteStorageProject: () => (/* binding */ deleteStorageProject),
/* harmony export */   editItem: () => (/* binding */ editItem),
/* harmony export */   loadProject: () => (/* binding */ loadProject),
/* harmony export */   loadStorage: () => (/* binding */ loadStorage),
/* harmony export */   loadTask: () => (/* binding */ loadTask),
/* harmony export */   saveLocalStorage: () => (/* binding */ saveLocalStorage),
/* harmony export */   saveProject: () => (/* binding */ saveProject)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/modules/logic.js");



function loadStorage() {
  const arrList = JSON.parse(localStorage.getItem("totalTask"));
  return arrList;
}

function saveLocalStorage(data, flag = false) {
  const lists = loadStorage();
  if (!lists) {
    localStorage.setItem("totalTask", JSON.stringify([data]));
  }
  if (lists) {
    lists.push(data);
    localStorage.setItem("totalTask", JSON.stringify(lists));
  }
  if (lists && flag) {
    localStorage.removeItem("totalTask");
    localStorage.setItem("totalTask", JSON.stringify(data));
  }
}
//function take care of delete data Task on the localStorage
function deleteItem(id) {
  const actualStorage = loadStorage();
  let taskToRemove = actualStorage.filter((element) => !(element.id == id));
  saveLocalStorage(taskToRemove, true);
}
const saveNewData = (obj) => {
  let storage = loadStorage();
  let indexObj;
  storage.forEach((el, index) => {
    if (el.id == obj.id) {
      indexObj = index;
    }
  });
  storage[indexObj] = obj;
  saveLocalStorage(storage, true);
};
//funcion que recibe el objeto con la data antigua y la newData reemplaza la anterior
const editItem = (obj, newData) => {
  obj.title = newData.title;
  obj.dueDate = newData.dueDate;
  obj.description = newData.description;
  obj.priority = newData.priority;
  obj.project = newData.project;

  saveNewData(obj);
};

const loadStorageProject = () => {
  return JSON.parse(localStorage.getItem("totalProjects"));
};

const saveProject = (project, removed = false) => {
  const totalProjects = loadStorageProject();
  if (!totalProjects) {
    localStorage.setItem("totalProjects", JSON.stringify([project]));
  }
  if (totalProjects) {
    totalProjects.push(project);
    localStorage.setItem("totalProjects", JSON.stringify(totalProjects));
  }
  if(totalProjects && removed){
    localStorage.removeItem("totalProjects");
    localStorage.setItem("totalProjects",JSON.stringify(project))
  }

};

const deleteStorageProject = (element) => {
  const totalProjects = loadStorageProject(),
        elementRemoved = element.dataset.value,
        index = totalProjects.indexOf(elementRemoved) 
  //remove project to array
  totalProjects.splice(index,1);
  //save new array projects in local storage 
  saveProject(totalProjects,true);
}


const loadProject = () => {
  const projects = loadStorageProject();

  if (!projects) {
    saveProject("Home");
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertProject)("Home");
  }
  projects.forEach((project) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertProject)(project);
  });

  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.clickMinus)();
};

const loadTask = () => {
  const dataAll = loadStorage();
  if (!dataAll) return;
  for (let task of dataAll) {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insertTask)(task);
  }
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.clickEdit)();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.clickBtnDelete)();
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");




const initApp = () => {
  (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickBtnTask)();
  (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickBtnModal)();
  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadTask)();
  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadProject)();
};
window.addEventListener("DOMContentLoaded", initApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLHVEQUFjO0FBQ2hCOztBQVdFOzs7Ozs7O1VDbkhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQU9JO0FBQ21DOztBQUU3RDtBQUNBLEVBQUUsNkRBQVk7QUFDZCxFQUFFLDhEQUFhO0FBQ2YsRUFBRSw2REFBUTtBQUNWLEVBQUUsZ0VBQVc7QUFDYjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgLS1tYWluLWNvbG9yOiMyMjI4MzE7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiNFRUVFRUU7XG4gIC0tdGhpcmQtY29sb3I6IzAwQURCNTtcbiAgLS1yZW1vdmUtY29sb3I6I0JCMjUyNTtcbiAgLyogLS10ZXh0LWNvbG9yOjsgKi9cbn0gXG4qLFxuOjphZnRlcixcbjo6YmVmb3JlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuIC8qICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cbmJvZHl7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOnZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5tYWlue1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmbGV4OiAyIDEgNjAwcHg7XG59XG5cbmZvb3RlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMSA7XG59XG5cbi5sb2dve1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLndpbmRvd19fcHJvamVjdHN7XG4gIHdpZHRoOiAxOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggdmFyKC0tbWFpbi1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcblxufVxuXG4jYWRkX19wcm9qZWN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi50YXNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgXG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbiNhZGRUYXNre1xuICB3aWR0aDogNHJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbn1cbiNhZGRUYXNrOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX190YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5tYWluX190YXNrID4gKiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuLm1haW5fX3Rhc2sgPiBpIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG4ubW9yZV9faW5mb3tcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG4uZWRpdDpob3ZlcntcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbn1cbi5kZWxldGU6aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS1yZW1vdmUtY29sb3IpO1xufVxuXG4uZGlzcGxheV9fbm9uZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnByb2plY3R7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5taW51c3tcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDgwJTtcbiAgcGFkZGluZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLFVBQVU7RUFDVixTQUFTO0NBQ1YsOEJBQThCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLE9BQU87RUFDUCw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLHdCQUF3Qjs7QUFFMUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6QyxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290e1xcbiAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS1tYWluLWNvbG9yOiMyMjI4MzE7XFxuICAtLXNlY29uZGFyeS1jb2xvcjojRUVFRUVFO1xcbiAgLS10aGlyZC1jb2xvcjojMDBBREI1O1xcbiAgLS1yZW1vdmUtY29sb3I6I0JCMjUyNTtcXG4gIC8qIC0tdGV4dC1jb2xvcjo7ICovXFxufSBcXG4qLFxcbjo6YWZ0ZXIsXFxuOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gLyogIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5ib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOnZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZmxleDogMiAxIDYwMHB4O1xcbn1cXG5cXG5mb290ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDEgO1xcbn1cXG5cXG4ubG9nb3tcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbi53aW5kb3dfX3Byb2plY3Rze1xcbiAgd2lkdGg6IDE4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcblxcbn1cXG5cXG4jYWRkX19wcm9qZWN0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnRhc2tzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbiNhZGRUYXNre1xcbiAgd2lkdGg6IDRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLW1haW4tY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcXG59XFxuI2FkZFRhc2s6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluX190YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcbi5tYWluX190YXNrID4gKiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcbi5tYWluX190YXNrID4gaSB7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbi5tb3JlX19pbmZve1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcbi5lZGl0OmhvdmVye1xcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG59XFxuLmRlbGV0ZTpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1yZW1vdmUtY29sb3IpO1xcbn1cXG5cXG4uZGlzcGxheV9fbm9uZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3R7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5taW51c3tcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogODAlO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzaywgeyBmaW5kRWxlbWVudCwgcmVuZGVyVGFzaywgc2FtZU9iamVjdCB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQge1xuICBzYXZlTG9jYWxTdG9yYWdlLFxuICBkZWxldGVJdGVtLFxuICBlZGl0SXRlbSxcbiAgc2F2ZVByb2plY3QsXG4gIGRlbGV0ZVN0b3JhZ2VQcm9qZWN0LFxufSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG4vKiBDb2RlIHdpdGggVGFzayAqL1xuLy9mdW5jdGlvbiB0aGF0IGFjdGl2YXRlcyBtb2RhbCB3aW5kb3dcbmNvbnN0IG9wZW5Nb2RhbCA9IChlKSA9PiB7XG4gIGlmIChlLmN1cnJlbnRUYXJnZXQubWF0Y2hlcyhcIiNhZGRUYXNrXCIpKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikuc2hvd01vZGFsKCk7XG4gIGlmIChlLmN1cnJlbnRUYXJnZXQubWF0Y2hlcyhcIi5lZGl0XCIpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0X19tb2RhbFwiKS5zaG93TW9kYWwoKTtcbiAgICBkYXRhVHJhbnNmZXIoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNsaWNrQnRuVGFzaygpIHtcbiAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbiAgYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcbn1cblxuLy90aGlzIGZ1bmN0aW9uIGdldHRpbmcgZm9ybSB2YWx1ZXNcbmNvbnN0IHN1Ym1pdFRhc2sgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KSk7XG5cbiAgY3JlYXRlVGFzayhcbiAgICBkYXRhLnRpdGxlLFxuICAgIGRhdGEuZHVlRGF0ZSxcbiAgICBkYXRhLmRlc2NyaXB0aW9uLFxuICAgIGRhdGEucHJpb3JpdHksXG4gICAgZGF0YS5wcm9qZWN0XG4gICk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKS5jbG9zZSgpO1xuICBlLmN1cnJlbnRUYXJnZXQucmVzZXQoKTtcbn07XG5cbmZ1bmN0aW9uIGNsaWNrQnRuTW9kYWwoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdFRhc2spO1xufVxuXG5jb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcbiAgLy9kZWxldGUgdGFzayBpbm5lciBET01cbiAgbGV0IHRhc2tEZWxldGUgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIiksXG4gICAgaWQgPSB0YXNrRGVsZXRlLmRhdGFzZXQuaWQ7XG5cbiAgdGFza0RlbGV0ZS5yZW1vdmUoKTtcbiAgZGVsZXRlSXRlbShpZCk7XG59O1xuLy8gV2hlbiB0YXJnZXQgaXMgXCJpY29uIHRyYXNoXCIgLCB0cmlnZ2VyIHRoaXMgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsaWNrQnRuRGVsZXRlKCkge1xuICBjb25zdCBidG5EZWxldGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XG4gIGJ0bkRlbGV0ZXMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbiAgfSk7XG59XG5cbi8vdGhpcyBmdW5jdGlvbiBnZW5lcmF0ZSBpbnN0YW5jZSBvZiBjbGFzcyB0YXNrXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpO1xuICBjb25zdCBkYXRhSW5mbyA9IG5ld1Rhc2suZ2V0RGF0YTtcbiAgY29uc29sZS5sb2coZGF0YUluZm8pO1xuICBpbnNlcnRUYXNrKGRhdGFJbmZvKTtcbiAgc2F2ZUxvY2FsU3RvcmFnZShkYXRhSW5mbyk7XG59XG4vL3RoaXMgZnVuY3Rpb24gaW5zZXJ0IHRhc2sgdG8gRE9NXG5mdW5jdGlvbiBpbnNlcnRUYXNrKGRhdGEsIGZsYWcgPSBmYWxzZSkge1xuICBsZXQgeyB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCB9ID0gZGF0YTtcbiAgY29uc3Qgc2VjdGlvblRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKSxcbiAgICBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpLFxuICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGZpZ3VyZS5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgZmlndXJlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgaWQpO1xuICBmaWd1cmUuaW5uZXJIVE1MID0gYCAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX190YXNrXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW5fX3RpdGxlXCIgPiR7dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImVkaXQgZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJkZWxldGUgZmEtc29saWQgZmEtdHJhc2gtY2FuXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmVfX2luZm8gZGlzcGxheV9fbm9uZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb19fdGl0bGVcIj48Yj5UaXRsZTo8L2I+JHt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvX19kYXRlXCI+PGI+RHVlIERhdGU6PC9iPiR7ZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvX19kZXNjcmlwdGlvblwiPjxiPkRlc2NyaXB0aW9uOjwvYj4ke2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm9fX3ByaW9yaXR5XCI+PGI+UHJpb3JpdHk6PC9iPiR7cHJpb3JpdHl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBgO1xuXG4gIGlmIChmbGFnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZpZ3VyZTtcbiAgfVxuICBpZiAoIWZsYWcpIHtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmaWd1cmUpO1xuICAgIHNlY3Rpb25UYXNrcy5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgc2hvd1Byb3BlcnRpZXMoKTtcbiAgICBjbGlja0VkaXQoKTtcbiAgICBjbGlja0J0bkRlbGV0ZSgpO1xuICB9XG59XG5cbmNvbnN0IHNob3dNb3JlID0gKGUpID0+IHtcbiAgaWYgKFxuICAgIGUudGFyZ2V0Lm1hdGNoZXMoXCIuZWRpdFwiKSB8fFxuICAgIGUudGFyZ2V0Lm1hdGNoZXMoXCIjY2hlY2tib3hcIikgfHxcbiAgICBlLnRhcmdldC5tYXRjaGVzKFwiLmRlbGV0ZVwiKVxuICApXG4gICAgcmV0dXJuO1xuICBjb25zdCBkaXZQYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGRpdlBhcmVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXlfX25vbmVcIik7XG59O1xuXG5mdW5jdGlvbiBzaG93UHJvcGVydGllcygpIHtcbiAgY29uc3QgaW5mb1Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX190YXNrXCIpO1xuICBpbmZvVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNb3JlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrRWRpdCgpIHtcbiAgY29uc3QgZWRpdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xuICBlZGl0SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbCk7XG4gIH0pO1xufVxuXG5jb25zdCByZXBsYWNlVGFzayA9ICh0YXNrLCBlbGVtZW50KSA9PiB7XG4gIHRhc2sucmVwbGFjZVdpdGgoaW5zZXJ0VGFzayhlbGVtZW50LCB0cnVlKSk7XG4gIHNob3dQcm9wZXJ0aWVzKCk7XG4gIGNsaWNrRWRpdCgpO1xuICBjbGlja0J0bkRlbGV0ZSgpO1xufTtcblxuY29uc3QgZWRpdFRhc2sgPSAoZm9ybSwgZWxlbWVudCwgdGFzaykgPT4ge1xuICBsZXQgYWN0dWFsRWxlbWVudCA9IGZpbmRFbGVtZW50KGVsZW1lbnQpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJzdWJtaXRcIixcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coYWN0dWFsRWxlbWVudCk7XG5cbiAgICAgIGxldCBlZGl0RGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKTtcbiAgICAgIGVkaXREYXRhLmlkID0gdGFzay5kYXRhc2V0LmlkO1xuICAgICAgY29uc29sZS5sb2coZWRpdERhdGEpO1xuICAgICAgZWRpdEl0ZW0oYWN0dWFsRWxlbWVudFswXSwgZWRpdERhdGEpO1xuICAgICAgcmVwbGFjZVRhc2sodGFzaywgYWN0dWFsRWxlbWVudFswXSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdF9fbW9kYWxcIikuY2xvc2UoKTtcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gICk7XG59O1xuXG5jb25zdCBsb2FkTW9kYWwgPSAoZm9ybSwgZWxlbWVudCkgPT4ge1xuICBsZXQgYWN0dWFsVGFzayA9IGZpbmRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCB7IHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QgfSA9IGZvcm07XG4gIHRpdGxlLnZhbHVlID0gYWN0dWFsVGFza1swXS50aXRsZTtcbiAgZHVlRGF0ZS52YWx1ZSA9IGFjdHVhbFRhc2tbMF0uZHVlRGF0ZTtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBhY3R1YWxUYXNrWzBdLmRlc2NyaXB0aW9uO1xuICBwcmlvcml0eS52YWx1ZSA9IGFjdHVhbFRhc2tbMF0ucHJpb3JpdHk7XG4gIHByb2plY3QudmFsdWUgPSBhY3R1YWxUYXNrWzBdLnByb2plY3Q7XG59O1xuY29uc3QgZGF0YVRyYW5zZmVyID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2VkaXRcIiksXG4gICAgYWN0dWFsVGFzayA9IGVsZW1lbnQuY2xvc2VzdChcIi50YXNrXCIpO1xuICBsb2FkTW9kYWwoZm9ybUVkaXQuZWxlbWVudHMsIGVsZW1lbnQpO1xuICBlZGl0VGFzayhmb3JtRWRpdCwgZWxlbWVudCwgYWN0dWFsVGFzayk7XG59O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLVRoaXMgcGFydCBvZiBjb2RlIHRha2UgY2FyZSBzZWN0aW9uIHByb2plY3RzLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3Qgc2hvd09wdCA9IChlKSA9PiB7XG4gIGNvbnN0IGJ0bkFkZCA9IGUuY3VycmVudFRhcmdldDtcbiAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19ub25lXCIpO1xuICBidG5BZGQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19ub25lXCIpO1xufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfX3Byb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dPcHQpO1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgY29uc3QgZGl2ID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0XCIpLFxuICBvcHRpb25zRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW9wdGlvbj0ke2Rpdi5kYXRhc2V0LnZhbHVlfV1gKVxuICBcbiAgZGl2LnJlbW92ZSgpO1xuICBvcHRpb25zRWxlbWVudC5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuICBkZWxldGVTdG9yYWdlUHJvamVjdChkaXYpO1xufVxuXG5jb25zdCBjbGlja01pbnVzID0gKCkgPT4ge1xuICBjb25zdCBtaW51c0lDb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pbnVzXCIpXG4gIG1pbnVzSUNvbi5mb3JFYWNoKChpY29uKSA9PiBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRlbGV0ZVByb2plY3QpKVxuXG59XG5cblxuY29uc3QgaW5zZXJ0UHJvamVjdCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHNlY3Rpb25Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIiksXG4gICAgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0X19wcm9qZWN0XCIpLFxuICAgIHNlbGVjdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRfX3NlbGVjdFwiKSxcbiAgICBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIiksXG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBpY29uLmNsYXNzTmFtZSA9IFwibWludXMgZmEtc29saWQgZmEtbWludXNcIjsgIFxuICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsdWU7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvblwiLHZhbHVlKVxuICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgY29uc3QgY2xvbmVPcHRpb24gPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICBzZWxlY3RFZGl0LmFwcGVuZENoaWxkKGNsb25lT3B0aW9uKTtcbiBcblxuICBkaXYuaW5uZXJUZXh0ID0gdmFsdWU7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgdmFsdWUpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaWNvbilcbiAgc2VjdGlvblByb2plY3RzLmFwcGVuZENoaWxkKGRpdik7XG4gIFxufTtcblxuY29uc3QgY2FuY2VsQWRkID0gKGUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25vbmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX19wcm9qZWN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19ub25lXCIpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiB7XG5cbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0LFxuICAgIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLFxuICAgIHNlY3Rpb25Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIiksXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX3Byb2plY3RcIiksXG4gICAgc2VsZWN0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdF9fc2VsZWN0XCIpLFxuICAgIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKSxcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gIGljb24uY2xhc3NOYW1lID0gXCJtaW51cyBmYS1zb2xpZCBmYS1taW51c1wiO1xuXG4gIG9wdGlvbi5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGlucHV0LnZhbHVlKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIsaW5wdXQudmFsdWUpXG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAvL2Nsb25lIG5vZGUgYW5kIGFkZCBvcHRpb24gSFRNTCBlbGVtZW50IHRvIGNvcnJlY3RseSBzZWxlY3RcbiAgY29uc3Qgb3B0ID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgc2VsZWN0RWRpdC5hcHBlbmRDaGlsZChvcHQpO1xuICAvL2FkZCBwcm9qZWN0IHRvIHNlY3Rpb24gIFxuICBkaXYuaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgaW5wdXQudmFsdWUpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaWNvbilcbiAgc2VjdGlvblByb2plY3RzLmFwcGVuZENoaWxkKGRpdik7XG4gIHNhdmVQcm9qZWN0KGlucHV0LnZhbHVlKTtcblxuICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25vbmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX19wcm9qZWN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19ub25lXCIpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHJlbmRlclRhc2soKTtcbiAgY2xpY2tNaW51cygpXG59O1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIi5vcHRpb25fX3Byb2plY3RcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIjYnRuX19hZGRcIikpIGFkZFByb2plY3QoZXZlbnQpO1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIiNidG5fX2NhbmNlbFwiKSkgY2FuY2VsQWRkKGV2ZW50KTtcbiAgfSk7XG5cbmV4cG9ydCB7XG4gIGNsaWNrQnRuVGFzayxcbiAgY2xpY2tCdG5Nb2RhbCxcbiAgY2xpY2tCdG5EZWxldGUsXG4gIHNob3dQcm9wZXJ0aWVzLFxuICBjbGlja0VkaXQsXG4gIGluc2VydFRhc2ssXG4gIGluc2VydFByb2plY3QsXG4gIGNsaWNrTWludXNcbn07XG4iLCJpbXBvcnQgeyBpbnNlcnRUYXNrIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBsb2FkU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgX3N0b3JhZ2UgPSBsb2FkU3RvcmFnZSgpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICN0aXRsZTtcbiAgI2R1ZURhdGU7XG4gICNkZXNjcmlwdGlvbjtcbiAgI3ByaW9yaXR5O1xuICAjcHJvamVjdDtcbiAgc3RhdGljIGNvdW50ID0gIV9zdG9yYWdlIHx8IF9zdG9yYWdlLmxlbmd0aCA9PT0gMCA/IDAgOiBsYXN0SW5kZXgoX3N0b3JhZ2UpO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLiNwcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmlkID0gKytUYXNrLmNvdW50O1xuICB9XG4gIGdldCBnZXREYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGhpcy4jdGl0bGUsXG4gICAgICBkdWVEYXRlOiB0aGlzLiNkdWVEYXRlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuI2Rlc2NyaXB0aW9uLFxuICAgICAgcHJpb3JpdHk6IHRoaXMuI3ByaW9yaXR5LFxuICAgICAgcHJvamVjdDogdGhpcy4jcHJvamVjdCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGxhc3RJbmRleChhcnIpIHtcbiAgcmV0dXJuIGFyci5hdCgtMSkuaWQ7XG59XG5cbmNvbnN0IGZpbmRFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgYWN0dWFsVGFzayA9IGVsZW1lbnQuY2xvc2VzdChcIi50YXNrXCIpLFxuICAgIGlkQWN0dWFsID0gYWN0dWFsVGFzay5kYXRhc2V0LmlkLFxuICAgIGFjdHVhbFN0b3JhZ2UgPSBsb2FkU3RvcmFnZSgpO1xuXG4gIGNvbnN0IGRhdGFJbmZvID0gYWN0dWFsU3RvcmFnZS5maWx0ZXIoKGVsKSA9PiBpZEFjdHVhbCA9PSBlbC5pZCk7XG5cbiAgcmV0dXJuIGRhdGFJbmZvO1xufTtcblxuY29uc3Qgc2hvd1Rhc2tzID0gKGUpID0+IHtcbiAgaWYoZS50YXJnZXQubWF0Y2hlcyhcIi5taW51c1wiKSlyZXR1cm5cbiAgXG4gIGNvbnN0IHN0b3JhZ2UgPSBsb2FkU3RvcmFnZSgpLFxuICAgIHByb2plY3RDbGlja2VkID0gZS50YXJnZXQuZGF0YXNldC52YWx1ZSxcbiAgICBzZWN0aW9uVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG4gIHNlY3Rpb25UYXNrcy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChwcm9qZWN0Q2xpY2tlZCA9PT0gXCJIb21lXCIpIHtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHN0b3JhZ2UpIHtcbiAgICAgIGluc2VydFRhc2sodGFzayk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlclRhc2sgPSBzdG9yYWdlLmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0Q2xpY2tlZCk7XG5cbiAgaWYgKGZpbHRlclRhc2subGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gKHNlY3Rpb25UYXNrcy5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPSdlcnJvcic+Tm8gc2UgZW5jdWVudHJhbiB0YXJlYXMgYXNvY2lhZGFzIGEgZXN0ZSBwcm95ZWN0bzwvZGl2PlxuICAgIGApO1xuICB9XG4gIGlmIChmaWx0ZXJUYXNrLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKGxldCB0YXNrIG9mIGZpbHRlclRhc2spIHtcbiAgICAgIGluc2VydFRhc2sodGFzayk7XG4gICAgfVxuICB9XG4gIGlmIChmaWx0ZXJUYXNrLmxlbmd0aCA8IDIpIHtcbiAgICBpbnNlcnRUYXNrKGZpbHRlclRhc2tbMF0pO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJUYXNrID0gKCkgPT4ge1xuICBjb25zdCB0b3RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXZhbHVlXVwiKTtcbiAgdG90YWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Rhc2tzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaW5kRWxlbWVudCwgcmVuZGVyVGFzayB9O1xuIiwiaW1wb3J0IHsgY2xpY2tCdG5EZWxldGUsIGNsaWNrRWRpdCwgY2xpY2tNaW51cywgaW5zZXJ0UHJvamVjdCwgaW5zZXJ0VGFzayB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5cbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICBjb25zdCBhcnJMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsVGFza1wiKSk7XG4gIHJldHVybiBhcnJMaXN0O1xufVxuXG5mdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKGRhdGEsIGZsYWcgPSBmYWxzZSkge1xuICBjb25zdCBsaXN0cyA9IGxvYWRTdG9yYWdlKCk7XG4gIGlmICghbGlzdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsVGFza1wiLCBKU09OLnN0cmluZ2lmeShbZGF0YV0pKTtcbiAgfVxuICBpZiAobGlzdHMpIHtcbiAgICBsaXN0cy5wdXNoKGRhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxUYXNrXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH1cbiAgaWYgKGxpc3RzICYmIGZsYWcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvdGFsVGFza1wiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsVGFza1wiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbn1cbi8vZnVuY3Rpb24gdGFrZSBjYXJlIG9mIGRlbGV0ZSBkYXRhIFRhc2sgb24gdGhlIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xuICBjb25zdCBhY3R1YWxTdG9yYWdlID0gbG9hZFN0b3JhZ2UoKTtcbiAgbGV0IHRhc2tUb1JlbW92ZSA9IGFjdHVhbFN0b3JhZ2UuZmlsdGVyKChlbGVtZW50KSA9PiAhKGVsZW1lbnQuaWQgPT0gaWQpKTtcbiAgc2F2ZUxvY2FsU3RvcmFnZSh0YXNrVG9SZW1vdmUsIHRydWUpO1xufVxuY29uc3Qgc2F2ZU5ld0RhdGEgPSAob2JqKSA9PiB7XG4gIGxldCBzdG9yYWdlID0gbG9hZFN0b3JhZ2UoKTtcbiAgbGV0IGluZGV4T2JqO1xuICBzdG9yYWdlLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgIGlmIChlbC5pZCA9PSBvYmouaWQpIHtcbiAgICAgIGluZGV4T2JqID0gaW5kZXg7XG4gICAgfVxuICB9KTtcbiAgc3RvcmFnZVtpbmRleE9ial0gPSBvYmo7XG4gIHNhdmVMb2NhbFN0b3JhZ2Uoc3RvcmFnZSwgdHJ1ZSk7XG59O1xuLy9mdW5jaW9uIHF1ZSByZWNpYmUgZWwgb2JqZXRvIGNvbiBsYSBkYXRhIGFudGlndWEgeSBsYSBuZXdEYXRhIHJlZW1wbGF6YSBsYSBhbnRlcmlvclxuY29uc3QgZWRpdEl0ZW0gPSAob2JqLCBuZXdEYXRhKSA9PiB7XG4gIG9iai50aXRsZSA9IG5ld0RhdGEudGl0bGU7XG4gIG9iai5kdWVEYXRlID0gbmV3RGF0YS5kdWVEYXRlO1xuICBvYmouZGVzY3JpcHRpb24gPSBuZXdEYXRhLmRlc2NyaXB0aW9uO1xuICBvYmoucHJpb3JpdHkgPSBuZXdEYXRhLnByaW9yaXR5O1xuICBvYmoucHJvamVjdCA9IG5ld0RhdGEucHJvamVjdDtcblxuICBzYXZlTmV3RGF0YShvYmopO1xufTtcblxuY29uc3QgbG9hZFN0b3JhZ2VQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsUHJvamVjdHNcIikpO1xufTtcblxuY29uc3Qgc2F2ZVByb2plY3QgPSAocHJvamVjdCwgcmVtb3ZlZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHRvdGFsUHJvamVjdHMgPSBsb2FkU3RvcmFnZVByb2plY3QoKTtcbiAgaWYgKCF0b3RhbFByb2plY3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KFtwcm9qZWN0XSkpO1xuICB9XG4gIGlmICh0b3RhbFByb2plY3RzKSB7XG4gICAgdG90YWxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0b3RhbFByb2plY3RzKSk7XG4gIH1cbiAgaWYodG90YWxQcm9qZWN0cyAmJiByZW1vdmVkKXtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvdGFsUHJvamVjdHNcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbFByb2plY3RzXCIsSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXG4gIH1cblxufTtcblxuY29uc3QgZGVsZXRlU3RvcmFnZVByb2plY3QgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB0b3RhbFByb2plY3RzID0gbG9hZFN0b3JhZ2VQcm9qZWN0KCksXG4gICAgICAgIGVsZW1lbnRSZW1vdmVkID0gZWxlbWVudC5kYXRhc2V0LnZhbHVlLFxuICAgICAgICBpbmRleCA9IHRvdGFsUHJvamVjdHMuaW5kZXhPZihlbGVtZW50UmVtb3ZlZCkgXG4gIC8vcmVtb3ZlIHByb2plY3QgdG8gYXJyYXlcbiAgdG90YWxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gIC8vc2F2ZSBuZXcgYXJyYXkgcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZSBcbiAgc2F2ZVByb2plY3QodG90YWxQcm9qZWN0cyx0cnVlKTtcbn1cblxuXG5jb25zdCBsb2FkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBsb2FkU3RvcmFnZVByb2plY3QoKTtcblxuICBpZiAoIXByb2plY3RzKSB7XG4gICAgc2F2ZVByb2plY3QoXCJIb21lXCIpO1xuICAgIGluc2VydFByb2plY3QoXCJIb21lXCIpO1xuICB9XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpbnNlcnRQcm9qZWN0KHByb2plY3QpO1xuICB9KTtcblxuICByZW5kZXJUYXNrKCk7XG4gIGNsaWNrTWludXMoKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrID0gKCkgPT4ge1xuICBjb25zdCBkYXRhQWxsID0gbG9hZFN0b3JhZ2UoKTtcbiAgaWYgKCFkYXRhQWxsKSByZXR1cm47XG4gIGZvciAobGV0IHRhc2sgb2YgZGF0YUFsbCkge1xuICAgIGluc2VydFRhc2sodGFzayk7XG4gIH1cbiAgY2xpY2tFZGl0KCk7XG4gIGNsaWNrQnRuRGVsZXRlKCk7XG59O1xuXG5leHBvcnQge1xuICBzYXZlTG9jYWxTdG9yYWdlLFxuICBsb2FkU3RvcmFnZSxcbiAgbG9hZFRhc2ssXG4gIGRlbGV0ZUl0ZW0sXG4gIGVkaXRJdGVtLFxuICBzYXZlUHJvamVjdCxcbiAgbG9hZFByb2plY3QsXG4gIGRlbGV0ZVN0b3JhZ2VQcm9qZWN0XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge1xuICBjbGlja0J0bk1vZGFsLFxuICBjbGlja0J0blRhc2ssXG4gIHNob3dQcm9wZXJ0aWVzLFxuICBjbGlja0VkaXQsXG4gIGNsaWNrQnRuRGVsZXRlLFxufSBmcm9tIFwiLi9tb2R1bGVzL2RvbS5qc1wiO1xuaW1wb3J0IHsgbG9hZFByb2plY3QsIGxvYWRUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGluaXRBcHAgPSAoKSA9PiB7XG4gIGNsaWNrQnRuVGFzaygpO1xuICBjbGlja0J0bk1vZGFsKCk7XG4gIGxvYWRUYXNrKCk7XG4gIGxvYWRQcm9qZWN0KCk7XG59O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRBcHApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9