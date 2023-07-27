(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_render_js"], {
"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@13.3.2_sass@1.64.1_webpack@5.79.0/node_modules/sass-loader/dist/cjs.js!./src/render.scss": function (module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'default': function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/noSourceMaps.js */"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0_);
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/api.js */"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1_);
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2_);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */__webpack_require__(/* ./img/bar.png */"?5c09"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__default(_node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__default);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__default(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([
    module.id,
    "body {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.text {\n  color: blue;\n}",
    ""
]);
// Exports
var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
},
"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/api.js": function (module, exports, __webpack_require__) {
"use strict";
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ module.exports = function(cssWithMappingToString) {
    var list = [];
    // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function(item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) content += "@supports (".concat(item[4], ") {");
            if (item[2]) content += "@media ".concat(item[2], " {");
            if (needLayer) content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            content += cssWithMappingToString(item);
            if (needLayer) content += "}";
            if (item[2]) content += "}";
            if (item[4]) content += "}";
            return content;
        }).join("");
    };
    // import a list of modules into the list
    list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === "string") modules = [
            [
                null,
                modules,
                undefined
            ]
        ];
        var alreadyImportedModules = {};
        if (dedupe) for(var k = 0; k < this.length; k++){
            var id = this[k][0];
            if (id != null) alreadyImportedModules[id] = true;
        }
        for(var _k = 0; _k < modules.length; _k++){
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) continue;
            if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") item[5] = layer;
                else {
                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                    item[5] = layer;
                }
            }
            if (media) {
                if (!item[2]) item[2] = media;
                else {
                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                    item[2] = media;
                }
            }
            if (supports) {
                if (!item[4]) item[4] = "".concat(supports);
                else {
                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                    item[4] = supports;
                }
            }
            list.push(item);
        }
    };
    return list;
};
},
"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/getUrl.js": function (module, exports, __webpack_require__) {
"use strict";
module.exports = function(url, options) {
    if (!options) options = {};
    if (!url) return url;
    url = String(url.__esModule ? url.default : url);
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) url = url.slice(1, -1);
    if (options.hash) url += options.hash;
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
    return url;
};
},
"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/runtime/noSourceMaps.js": function (module, exports, __webpack_require__) {
"use strict";
module.exports = function(i) {
    return i[1];
};
},
"./src/render.scss": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'default': function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0_);
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1_);
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2_);
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3_ = __webpack_require__(/* !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3_);
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4_ = __webpack_require__(/* !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4_);
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5_ = __webpack_require__(/* !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */var _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5_);
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_ = __webpack_require__(/* !!../node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/sass-loader@13.3.2_sass@1.64.1_webpack@5.79.0/node_modules/sass-loader/dist/cjs.js!./render.scss */"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@13.3.2_sass@1.64.1_webpack@5.79.0/node_modules/sass-loader/dist/cjs.js!./src/render.scss");
/* harmony import */var _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_ = __webpack_require__(/* !!../node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/sass-loader@13.3.2_sass@1.64.1_webpack@5.79.0/node_modules/sass-loader/dist/cjs.js!./render.scss */"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.79.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@13.3.2_sass@1.64.1_webpack@5.79.0/node_modules/sass-loader/dist/cjs.js!./src/render.scss");
__webpack_require__.es(_node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_, __webpack_exports__);







var options = {};
options.styleTagTransform = _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__default;
options.setAttributes = _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__default;
options.insert = _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__default.bind(null, "head");
options.domAPI = _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__default;
options.insertStyleElement = _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__default;
var update = _node_modules_pnpm_style_loader_3_3_3_webpack_5_79_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__default(_node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_["default"], options);

var __WEBPACK_DEFAULT_EXPORT__ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_["default"] && _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_["default"].locals ? _node_modules_pnpm_css_loader_6_8_1_webpack_5_79_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_64_1_webpack_5_79_0_node_modules_sass_loader_dist_cjs_js_render_scss__WEBPACK_IMPORTED_MODULE_6_["default"].locals : undefined;
},
"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": function (module, exports, __webpack_require__) {
"use strict";
var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
    var result = -1;
    for(var i = 0; i < stylesInDOM.length; i++)if (stylesInDOM[i].identifier === identifier) {
        result = i;
        break;
    }
    return result;
}
function modulesToDom(list, options) {
    var idCountMap = {};
    var identifiers = [];
    for(var i = 0; i < list.length; i++){
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
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) return;
            api.update(obj = newObj);
        } else api.remove();
    };
    return updater;
}
module.exports = function(list, options) {
    options = options || {};
    list = list || [];
    var lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        for(var i = 0; i < lastIdentifiers.length; i++){
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
        }
        var newLastIdentifiers = modulesToDom(newList, options);
        for(var _i = 0; _i < lastIdentifiers.length; _i++){
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
},
"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/insertBySelector.js": function (module, exports, __webpack_require__) {
"use strict";
var memo = {};
/* istanbul ignore next  */ function getTarget(target) {
    if (typeof memo[target] === "undefined") {
        var styleTarget = document.querySelector(target);
        // Special case to return head of iframe instead of iframe itself
        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
            // This will throw an exception if access to iframe is blocked
            // due to cross-origin restrictions
            styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
            // istanbul ignore next
            styleTarget = null;
        }
        memo[target] = styleTarget;
    }
    return memo[target];
}
/* istanbul ignore next  */ function insertBySelector(insert, style) {
    var target = getTarget(insert);
    if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    target.appendChild(style);
}
module.exports = insertBySelector;
},
"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/insertStyleElement.js": function (module, exports, __webpack_require__) {
"use strict";
/* istanbul ignore next  */ function insertStyleElement(options) {
    var element = document.createElement("style");
    options.setAttributes(element, options.attributes);
    options.insert(element, options.options);
    return element;
}
module.exports = insertStyleElement;
},
"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": function (module, exports, __webpack_require__) {
"use strict";
/* istanbul ignore next  */ function setAttributesWithoutAttributes(styleElement) {
    var nonce = typeof __webpack_nonce__ !== "undefined" ? __webpack_nonce__ : null;
    if (nonce) styleElement.setAttribute("nonce", nonce);
}
module.exports = setAttributesWithoutAttributes;
},
"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/styleDomAPI.js": function (module, exports, __webpack_require__) {
"use strict";
/* istanbul ignore next  */ function apply(styleElement, options, obj) {
    var css = "";
    if (obj.supports) css += "@supports (".concat(obj.supports, ") {");
    if (obj.media) css += "@media ".concat(obj.media, " {");
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    css += obj.css;
    if (needLayer) css += "}";
    if (obj.media) css += "}";
    if (obj.supports) css += "}";
    var sourceMap = obj.sourceMap;
    if (sourceMap && typeof btoa !== "undefined") css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
    // For old IE
    /* istanbul ignore if  */ options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
    // istanbul ignore if
    if (styleElement.parentNode === null) return false;
    styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */ function domAPI(options) {
    if (typeof document === "undefined") return {
        update: function update() {},
        remove: function remove() {}
    };
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
},
"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.79.0/node_modules/style-loader/dist/runtime/styleTagTransform.js": function (module, exports, __webpack_require__) {
"use strict";
/* istanbul ignore next  */ function styleTagTransform(css, styleElement) {
    if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
    else {
        while(styleElement.firstChild)styleElement.removeChild(styleElement.firstChild);
        styleElement.appendChild(document.createTextNode(css));
    }
}
module.exports = styleTagTransform;
},
"./src/render.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  'render': function() { return render; }
});
/* harmony import */var _render_scss__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./render.scss */"./src/render.scss");

 function render() {
    const el = document.createElement('div');
    el.classList.add('text');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.innerHTML = 'hello, world';
}
},
"?5c09": function (__unused_webpack_module, exports, __webpack_require__) {
throw new Error("Failed to resolve ./img/bar.png in /Users/bytedance/Documents/github/rspack-repro/src");
},

}]);