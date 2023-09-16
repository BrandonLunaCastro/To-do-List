/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/hamburgers.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/hamburgers.css ***!
  \******************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; }
  .hamburger:hover {
    opacity: 0.7; }
  .hamburger.is-active:hover {
    opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #eee;
    
  }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #eeee;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }

/*
   * 3DX
   */
.hamburger--3dx .hamburger-box {
  perspective: 80px; }

.hamburger--3dx .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  .hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dx.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(180deg); }
  .hamburger--3dx.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--3dx.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg); }

/*
   * 3DX Reverse
   */
.hamburger--3dx-r .hamburger-box {
  perspective: 80px; }

.hamburger--3dx-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  .hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dx-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(-180deg); }
  .hamburger--3dx-r.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--3dx-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg); }

/*
   * 3DY
   */
.hamburger--3dy .hamburger-box {
  perspective: 80px; }

.hamburger--3dy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  .hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(-180deg); }
  .hamburger--3dy.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--3dy.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg); }

/*
   * 3DY Reverse
   */
.hamburger--3dy-r .hamburger-box {
  perspective: 80px; }

.hamburger--3dy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  .hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg); }
  .hamburger--3dy-r.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--3dy-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg); }

/*
   * 3DXY
   */
.hamburger--3dxy .hamburger-box {
  perspective: 80px; }

.hamburger--3dxy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  .hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dxy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg); }
  .hamburger--3dxy.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--3dxy.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg); }

/*
   * 3DXY Reverse
   */
.hamburger--3dxy-r .hamburger-box {
  perspective: 80px; }

.hamburger--3dxy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }
  .hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }

.hamburger--3dxy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }
  .hamburger--3dxy-r.is-active .hamburger-inner::before {
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--3dxy-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -10px, 0) rotate(-45deg); }

/*
   * Arrow
   */
.hamburger--arrow.is-active .hamburger-inner::before {
  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }

.hamburger--arrow.is-active .hamburger-inner::after {
  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }

/*
   * Arrow Right
   */
.hamburger--arrow-r.is-active .hamburger-inner::before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }

.hamburger--arrow-r.is-active .hamburger-inner::after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }

/*
   * Arrow Alt
   */
.hamburger--arrowalt .hamburger-inner::before {
  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }

.hamburger--arrowalt .hamburger-inner::after {
  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }

.hamburger--arrowalt.is-active .hamburger-inner::before {
  top: 0;
  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);
  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }

.hamburger--arrowalt.is-active .hamburger-inner::after {
  bottom: 0;
  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);
  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }

/*
   * Arrow Alt Right
   */
.hamburger--arrowalt-r .hamburger-inner::before {
  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }

.hamburger--arrowalt-r .hamburger-inner::after {
  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }

.hamburger--arrowalt-r.is-active .hamburger-inner::before {
  top: 0;
  transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);
  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }

.hamburger--arrowalt-r.is-active .hamburger-inner::after {
  bottom: 0;
  transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);
  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }

/*
   * Arrow Turn
   */
.hamburger--arrowturn.is-active .hamburger-inner {
  transform: rotate(-180deg); }
  .hamburger--arrowturn.is-active .hamburger-inner::before {
    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }
  .hamburger--arrowturn.is-active .hamburger-inner::after {
    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }

/*
   * Arrow Turn Right
   */
.hamburger--arrowturn-r.is-active .hamburger-inner {
  transform: rotate(-180deg); }
  .hamburger--arrowturn-r.is-active .hamburger-inner::before {
    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
  .hamburger--arrowturn-r.is-active .hamburger-inner::after {
    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }

/*
   * Boring
   */
.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {
  transition-property: none; }

.hamburger--boring.is-active .hamburger-inner {
  transform: rotate(45deg); }
  .hamburger--boring.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0; }
  .hamburger--boring.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg); }

/*
   * Collapse
   */
.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }
  .hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Collapse Reverse
   */
.hamburger--collapse-r .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }
  .hamburger--collapse-r .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--collapse-r.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Elastic
   */
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .hamburger--elastic .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease; }
  .hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s; }
  .hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0; }
  .hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s; }

/*
   * Elastic Reverse
   */
.hamburger--elastic-r .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .hamburger--elastic-r .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease; }
  .hamburger--elastic-r .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic-r.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(-135deg);
  transition-delay: 0.075s; }
  .hamburger--elastic-r.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0; }
  .hamburger--elastic-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(270deg);
    transition-delay: 0.075s; }

/*
   * Emphatic
   */
.hamburger--emphatic {
  overflow: hidden; }
  .hamburger--emphatic .hamburger-inner {
    transition: background-color 0.125s 0.175s ease-in; }
    .hamburger--emphatic .hamburger-inner::before {
      left: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }
    .hamburger--emphatic .hamburger-inner::after {
      top: 10px;
      right: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }
  .hamburger--emphatic.is-active .hamburger-inner {
    transition-delay: 0s;
    transition-timing-function: ease-out;
    background-color: transparent !important; }
    .hamburger--emphatic.is-active .hamburger-inner::before {
      left: -80px;
      top: -80px;
      transform: translate3d(80px, 80px, 0) rotate(45deg);
      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }
    .hamburger--emphatic.is-active .hamburger-inner::after {
      right: -80px;
      top: -80px;
      transform: translate3d(-80px, 80px, 0) rotate(-45deg);
      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }

/*
   * Emphatic Reverse
   */
.hamburger--emphatic-r {
  overflow: hidden; }
  .hamburger--emphatic-r .hamburger-inner {
    transition: background-color 0.125s 0.175s ease-in; }
    .hamburger--emphatic-r .hamburger-inner::before {
      left: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }
    .hamburger--emphatic-r .hamburger-inner::after {
      top: 10px;
      right: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }
  .hamburger--emphatic-r.is-active .hamburger-inner {
    transition-delay: 0s;
    transition-timing-function: ease-out;
    background-color: transparent !important; }
    .hamburger--emphatic-r.is-active .hamburger-inner::before {
      left: -80px;
      top: 80px;
      transform: translate3d(80px, -80px, 0) rotate(-45deg);
      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }
    .hamburger--emphatic-r.is-active .hamburger-inner::after {
      right: -80px;
      top: 80px;
      transform: translate3d(-80px, -80px, 0) rotate(45deg);
      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }

/*
   * Minus
   */
.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {
  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }

.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {
  opacity: 0;
  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }

.hamburger--minus.is-active .hamburger-inner::before {
  top: 0; }

.hamburger--minus.is-active .hamburger-inner::after {
  bottom: 0; }

/*
   * Slider
   */
.hamburger--slider .hamburger-inner {
  top: 2px; }
  .hamburger--slider .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s; }
  .hamburger--slider .hamburger-inner::after {
    top: 20px; }

.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--slider.is-active .hamburger-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0; }
  .hamburger--slider.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-90deg); }

/*
   * Slider Reverse
   */
.hamburger--slider-r .hamburger-inner {
  top: 2px; }
  .hamburger--slider-r .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s; }
  .hamburger--slider-r .hamburger-inner::after {
    top: 20px; }

.hamburger--slider-r.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(-45deg); }
  .hamburger--slider-r.is-active .hamburger-inner::before {
    transform: rotate(45deg) translate3d(5.71429px, -6px, 0);
    opacity: 0; }
  .hamburger--slider-r.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(90deg); }

/*
   * Spin
   */
.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Spin Reverse
   */
.hamburger--spin-r .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--spin-r .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
  .hamburger--spin-r .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--spin-r.is-active .hamburger-inner {
  transform: rotate(-225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--spin-r.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }
  .hamburger--spin-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Spring
   */
.hamburger--spring .hamburger-inner {
  top: 2px;
  transition: background-color 0s 0.13s linear; }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--spring.is-active .hamburger-inner {
  transition-delay: 0.22s;
  background-color: transparent !important; }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg); }

/*
   * Spring Reverse
   */
.hamburger--spring-r .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--spring-r .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }
  .hamburger--spring-r .hamburger-inner::before {
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--spring-r.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--spring-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }
  .hamburger--spring-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Stand
   */
.hamburger--stand .hamburger-inner {
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }
  .hamburger--stand .hamburger-inner::before {
    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--stand .hamburger-inner::after {
    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--stand.is-active .hamburger-inner {
  transform: rotate(90deg);
  background-color: transparent !important;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }
  .hamburger--stand.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-45deg);
    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--stand.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(45deg);
    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Stand Reverse
   */
.hamburger--stand-r .hamburger-inner {
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }
  .hamburger--stand-r .hamburger-inner::before {
    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--stand-r .hamburger-inner::after {
    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--stand-r.is-active .hamburger-inner {
  transform: rotate(-90deg);
  background-color: transparent !important;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }
  .hamburger--stand-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-45deg);
    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--stand-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(45deg);
    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Squeeze
   */
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  .hamburger--squeeze .hamburger-inner::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease; }
  .hamburger--squeeze .hamburger-inner::after {
    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

.hamburger--squeeze.is-active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  .hamburger--squeeze.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease; }
  .hamburger--squeeze.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }

/*
   * Vortex
   */
.hamburger--vortex .hamburger-inner {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
  .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear; }
  .hamburger--vortex .hamburger-inner::before {
    transition-property: top, opacity; }
  .hamburger--vortex .hamburger-inner::after {
    transition-property: bottom, transform; }

.hamburger--vortex.is-active .hamburger-inner {
  transform: rotate(765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
  .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {
    transition-delay: 0s; }
  .hamburger--vortex.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0; }
  .hamburger--vortex.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg); }

/*
   * Vortex Reverse
   */
.hamburger--vortex-r .hamburger-inner {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
  .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear; }
  .hamburger--vortex-r .hamburger-inner::before {
    transition-property: top, opacity; }
  .hamburger--vortex-r .hamburger-inner::after {
    transition-property: bottom, transform; }

.hamburger--vortex-r.is-active .hamburger-inner {
  transform: rotate(-765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
  .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {
    transition-delay: 0s; }
  .hamburger--vortex-r.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0; }
  .hamburger--vortex-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg); }
`, "",{"version":3,"sources":["webpack://./src/hamburgers.css"],"names":[],"mappings":"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","sourcesContent":["/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.7; }\n  .hamburger.is-active:hover {\n    opacity: 0.7; }\n  .hamburger.is-active .hamburger-inner,\n  .hamburger.is-active .hamburger-inner::before,\n  .hamburger.is-active .hamburger-inner::after {\n    background-color: #eee;\n    \n  }\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 40px;\n    height: 4px;\n    background-color: #eeee;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -10px; }\n  .hamburger-inner::after {\n    bottom: -10px; }\n\n/*\n   * 3DX\n   */\n.hamburger--3dx .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dx .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(180deg); }\n  .hamburger--3dx.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dx.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DX Reverse\n   */\n.hamburger--3dx-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dx-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(-180deg); }\n  .hamburger--3dx-r.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dx-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY\n   */\n.hamburger--3dy .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(-180deg); }\n  .hamburger--3dy.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dy.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY Reverse\n   */\n.hamburger--3dy-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg); }\n  .hamburger--3dy-r.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dy-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY\n   */\n.hamburger--3dxy .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dxy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg); }\n  .hamburger--3dxy.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dxy.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY Reverse\n   */\n.hamburger--3dxy-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dxy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }\n  .hamburger--3dxy-r.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dxy-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * Arrow\n   */\n.hamburger--arrow.is-active .hamburger-inner::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Right\n   */\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Alt\n   */\n.hamburger--arrowalt .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Alt Right\n   */\n.hamburger--arrowalt-r .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Turn\n   */\n.hamburger--arrowturn.is-active .hamburger-inner {\n  transform: rotate(-180deg); }\n  .hamburger--arrowturn.is-active .hamburger-inner::before {\n    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n  .hamburger--arrowturn.is-active .hamburger-inner::after {\n    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Turn Right\n   */\n.hamburger--arrowturn-r.is-active .hamburger-inner {\n  transform: rotate(-180deg); }\n  .hamburger--arrowturn-r.is-active .hamburger-inner::before {\n    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n  .hamburger--arrowturn-r.is-active .hamburger-inner::after {\n    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Boring\n   */\n.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n  transition-property: none; }\n\n.hamburger--boring.is-active .hamburger-inner {\n  transform: rotate(45deg); }\n  .hamburger--boring.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--boring.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg); }\n\n/*\n   * Collapse\n   */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--collapse .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n  .hamburger--collapse .hamburger-inner::before {\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--collapse.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n  .hamburger--collapse.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(-90deg);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Collapse Reverse\n   */\n.hamburger--collapse-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--collapse-r .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n  .hamburger--collapse-r .hamburger-inner::before {\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--collapse-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n  .hamburger--collapse-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(90deg);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Elastic\n   */\n.hamburger--elastic .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  .hamburger--elastic .hamburger-inner::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease; }\n  .hamburger--elastic .hamburger-inner::after {\n    top: 20px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(135deg);\n  transition-delay: 0.075s; }\n  .hamburger--elastic.is-active .hamburger-inner::before {\n    transition-delay: 0s;\n    opacity: 0; }\n  .hamburger--elastic.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(-270deg);\n    transition-delay: 0.075s; }\n\n/*\n   * Elastic Reverse\n   */\n.hamburger--elastic-r .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  .hamburger--elastic-r .hamburger-inner::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease; }\n  .hamburger--elastic-r .hamburger-inner::after {\n    top: 20px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(-135deg);\n  transition-delay: 0.075s; }\n  .hamburger--elastic-r.is-active .hamburger-inner::before {\n    transition-delay: 0s;\n    opacity: 0; }\n  .hamburger--elastic-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(270deg);\n    transition-delay: 0.075s; }\n\n/*\n   * Emphatic\n   */\n.hamburger--emphatic {\n  overflow: hidden; }\n  .hamburger--emphatic .hamburger-inner {\n    transition: background-color 0.125s 0.175s ease-in; }\n    .hamburger--emphatic .hamburger-inner::before {\n      left: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n    .hamburger--emphatic .hamburger-inner::after {\n      top: 10px;\n      right: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n  .hamburger--emphatic.is-active .hamburger-inner {\n    transition-delay: 0s;\n    transition-timing-function: ease-out;\n    background-color: transparent !important; }\n    .hamburger--emphatic.is-active .hamburger-inner::before {\n      left: -80px;\n      top: -80px;\n      transform: translate3d(80px, 80px, 0) rotate(45deg);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n    .hamburger--emphatic.is-active .hamburger-inner::after {\n      right: -80px;\n      top: -80px;\n      transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Emphatic Reverse\n   */\n.hamburger--emphatic-r {\n  overflow: hidden; }\n  .hamburger--emphatic-r .hamburger-inner {\n    transition: background-color 0.125s 0.175s ease-in; }\n    .hamburger--emphatic-r .hamburger-inner::before {\n      left: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n    .hamburger--emphatic-r .hamburger-inner::after {\n      top: 10px;\n      right: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n  .hamburger--emphatic-r.is-active .hamburger-inner {\n    transition-delay: 0s;\n    transition-timing-function: ease-out;\n    background-color: transparent !important; }\n    .hamburger--emphatic-r.is-active .hamburger-inner::before {\n      left: -80px;\n      top: 80px;\n      transform: translate3d(80px, -80px, 0) rotate(-45deg);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n    .hamburger--emphatic-r.is-active .hamburger-inner::after {\n      right: -80px;\n      top: 80px;\n      transform: translate3d(-80px, -80px, 0) rotate(45deg);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Minus\n   */\n.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before {\n  top: 0; }\n\n.hamburger--minus.is-active .hamburger-inner::after {\n  bottom: 0; }\n\n/*\n   * Slider\n   */\n.hamburger--slider .hamburger-inner {\n  top: 2px; }\n  .hamburger--slider .hamburger-inner::before {\n    top: 10px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider .hamburger-inner::after {\n    top: 20px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--slider.is-active .hamburger-inner::before {\n    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(-90deg); }\n\n/*\n   * Slider Reverse\n   */\n.hamburger--slider-r .hamburger-inner {\n  top: 2px; }\n  .hamburger--slider-r .hamburger-inner::before {\n    top: 10px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider-r .hamburger-inner::after {\n    top: 20px; }\n\n.hamburger--slider-r.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(-45deg); }\n  .hamburger--slider-r.is-active .hamburger-inner::before {\n    transform: rotate(45deg) translate3d(5.71429px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(90deg); }\n\n/*\n   * Spin\n   */\n.hamburger--spin .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spin .hamburger-inner::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n  .hamburger--spin .hamburger-inner::after {\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin.is-active .hamburger-inner {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spin.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n  .hamburger--spin.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spin Reverse\n   */\n.hamburger--spin-r .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spin-r .hamburger-inner::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n  .hamburger--spin-r .hamburger-inner::after {\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r.is-active .hamburger-inner {\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spin-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n  .hamburger--spin-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spring\n   */\n.hamburger--spring .hamburger-inner {\n  top: 2px;\n  transition: background-color 0s 0.13s linear; }\n  .hamburger--spring .hamburger-inner::before {\n    top: 10px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spring .hamburger-inner::after {\n    top: 20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring.is-active .hamburger-inner {\n  transition-delay: 0.22s;\n  background-color: transparent !important; }\n  .hamburger--spring.is-active .hamburger-inner::before {\n    top: 0;\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--spring.is-active .hamburger-inner::after {\n    top: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 10px, 0) rotate(-45deg); }\n\n/*\n   * Spring Reverse\n   */\n.hamburger--spring-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spring-r .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }\n  .hamburger--spring-r .hamburger-inner::before {\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spring-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }\n  .hamburger--spring-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(90deg);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand\n   */\n.hamburger--stand .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n  .hamburger--stand .hamburger-inner::before {\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand .hamburger-inner::after {\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand.is-active .hamburger-inner {\n  transform: rotate(90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n  .hamburger--stand.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(-45deg);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(45deg);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand Reverse\n   */\n.hamburger--stand-r .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n  .hamburger--stand-r .hamburger-inner::before {\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand-r .hamburger-inner::after {\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r.is-active .hamburger-inner {\n  transform: rotate(-90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n  .hamburger--stand-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(-45deg);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(45deg);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Squeeze\n   */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--squeeze .hamburger-inner::before {\n    transition: top 0.075s 0.12s ease, opacity 0.075s ease; }\n  .hamburger--squeeze .hamburger-inner::after {\n    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.is-active .hamburger-inner {\n  transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.075s ease, opacity 0.075s 0.12s ease; }\n  .hamburger--squeeze.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Vortex\n   */\n.hamburger--vortex .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n    transition-duration: 0s;\n    transition-delay: 0.1s;\n    transition-timing-function: linear; }\n  .hamburger--vortex .hamburger-inner::before {\n    transition-property: top, opacity; }\n  .hamburger--vortex .hamburger-inner::after {\n    transition-property: bottom, transform; }\n\n.hamburger--vortex.is-active .hamburger-inner {\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n    transition-delay: 0s; }\n  .hamburger--vortex.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--vortex.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(90deg); }\n\n/*\n   * Vortex Reverse\n   */\n.hamburger--vortex-r .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n    transition-duration: 0s;\n    transition-delay: 0.1s;\n    transition-timing-function: linear; }\n  .hamburger--vortex-r .hamburger-inner::before {\n    transition-property: top, opacity; }\n  .hamburger--vortex-r .hamburger-inner::after {\n    transition-property: bottom, transform; }\n\n.hamburger--vortex-r.is-active .hamburger-inner {\n  transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n    transition-delay: 0s; }\n  .hamburger--vortex-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--vortex-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg); }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  --remove-color:#f43f5e;
} 
*,
::after,
::before {
  padding: 0;
  margin: 0;
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
  gap: 8px;
  padding: 0 15px;
}
/* -----------Section of window project----------- */
.window__projects{
  width: 18rem;
  background-color: #EEEEEE;
  transform: translateX(-100%);
  color: var(--main-color);
  display: grid;
  grid-template-rows: repeat(auto-fit,minmax(50px,100px));
  gap: 10px;
  transition: transform 0.4s ease;
}

.open{
  transform: translateX(0);
  box-shadow: 2px 2px 8px var(--main-color);
  transition: transform 0.4s ease;
}

.title__projects{
  display: inherit;
  font-size: 2.6rem;
  align-items: center;
  justify-content: center;
}

#add__project{
  display: block;
  background-color: var(--third-color);
  appearance: none;
  outline: none;
  border: none;
  width: 200px;
  margin: 0 auto;
  height: 3rem;
  font-size: 1.4rem;
  border-radius: 8px;
  box-shadow: 1px 1px 4px var(--main-color);
}

#add__project:hover{
  cursor: pointer;
  background-color: var(--third-color);
  opacity: 0.7;
}
.option__project{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  margin: 0px auto;
}
.option__project > *{
  font-size: 1.3rem;
  height: 3rem;
}
.option__project > input{
  outline: none;
  border: 1px solid var(--main-color);
  border-radius: 3px;
  
}

#btn__add{
  background-color: var(--third-color);
  width: 250px;
  outline: none;
  border:none;
  border-radius: 3px;
  cursor: pointer;
}
#btn__cancel{
  background-color: var(--remove-color);
  width: 250px;
  outline: none;
  border:none;
  border-radius: 3px;
  cursor: pointer;
}

.projects{
  display: inherit;
  align-items: end;
  font-size: 1.5rem;
  justify-content: center;
  gap: 10px;
}
.project{
  margin: 10px auto;
  border-bottom: 1px solid #000;
  width: 150px;
  display: flex;
  justify-content: space-between;
  transition: transform .3s ease-in-out;
  padding: 10px;
}
.project:hover{
  cursor: pointer;
  transform: translateY(-7px);
}

.minus{
  box-shadow:1px 1px 3px #8f8f8f ;
  background: var(--main-color);
  color: var(--secondary-color);
  border-radius: 100%;
  padding: 5px;
  cursor: pointer;
}
.minus:hover{
  background-color: var(--remove-color);
}

/* ---------- Section Task styles ---------- */

.section__task{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 25px;
  margin-top: 1.5rem;
}

.tasks {
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
  gap: 25px;
 

}

#addTask{
  width: 4rem;
  font-size: 3rem;
  padding: 4px;
  border-radius: 100%;
  outline: none;
  border: none;
  margin: 0 auto;
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
  width: 700px;
  display: flex;
  gap: 25px;
  color: var(--secondary-color);
  justify-content: center;
  align-items: center;
}

#checkbox{
  appearance: none;
  outline: none;
  background-color: var(--secondary-color);
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  transition: all .2s ease-in;

}
.checked{
  text-decoration: line-through;
}

#checkbox:checked{
  background-color: var(--third-color);
  position: relative;
}
#checkbox:checked::after{
  content:"✔";
  position:absolute;
  top: 0;
  left: 3px;
  font-size: 1.8rem;
  color: var(--secondary-color);
}

.main__task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
}

.main__task > * {
  display: inherit;
  gap: 5px;
  padding: 10px;
  font-size: 1.6rem;
  color: var(--secondary-color);
  justify-items: center;
}
.main__task > i {
  display: inherit;
  justify-content: end;
}
.more__info{
  color: var(--secondary-color);
  height: 100px;
  width: 100%;
  font-size: 1.2rem;
  display: grid;
  grid-template-columns: repeat(2,1fr) ;
}
.more__info > * {
  padding: 0 10px;
}

div > i{
  cursor: pointer;
}

.edit:hover{
  color: var(--third-color);
}
.delete:hover{
  color: var(--remove-color);
}

.display__none{
    display: none !important;
}

.error{
  color: var(--remove-color);
}

/* --------- Modal styles ---------*/

:modal{
  border: none;
  height:500px;
  width: 350px;
  padding: 40px;
  margin:  auto auto;
  border-radius: 20px;
}
:modal::backdrop{
  backdrop-filter: blur(1.5rem);
}

form{
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  margin: 0 20px;
}
legend{
  font-size: 2rem;
  text-align: center;
}

form > input,textarea,select{
  font-size: 1.3rem;
  width: 300px;
  height: 40px;
  outline: none;
}
textarea{
  resize: none;
}
#add{
  background-color: var(--third-color);
  outline: none;
  appearance: none;
  border: none;
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  font-size: 1.4rem;
}
#add:hover{
  cursor: pointer;
  box-shadow: 2px 2px 27px var(--third-color);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n:root{\n  font-family:'Poppins', sans-serif;\n  --main-color:#222831;\n  --secondary-color:#EEEEEE;\n  --third-color:#00ADB5;\n  --remove-color:#f43f5e;\n} \n*,\n::after,\n::before {\n  padding: 0;\n  margin: 0;\n}\nbody{\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n  background:var(--main-color);\n  color:var(--secondary-color);\n}\n\nmain{\n  display: flex;\n  background: var(--secondary-color);\n  flex: 2 1 600px;\n}\n\nfooter{\n  background-color: var(--main-color);\n  color: var(--secondary-color);\n  display: inherit;\n  align-items: center;\n  justify-content: center;\n  flex: 1 ;\n}\n\n.logo{\n  display: inherit;\n  align-items: center;\n  gap: 8px;\n  padding: 0 15px;\n}\n/* -----------Section of window project----------- */\n.window__projects{\n  width: 18rem;\n  background-color: #EEEEEE;\n  transform: translateX(-100%);\n  color: var(--main-color);\n  display: grid;\n  grid-template-rows: repeat(auto-fit,minmax(50px,100px));\n  gap: 10px;\n  transition: transform 0.4s ease;\n}\n\n.open{\n  transform: translateX(0);\n  box-shadow: 2px 2px 8px var(--main-color);\n  transition: transform 0.4s ease;\n}\n\n.title__projects{\n  display: inherit;\n  font-size: 2.6rem;\n  align-items: center;\n  justify-content: center;\n}\n\n#add__project{\n  display: block;\n  background-color: var(--third-color);\n  appearance: none;\n  outline: none;\n  border: none;\n  width: 200px;\n  margin: 0 auto;\n  height: 3rem;\n  font-size: 1.4rem;\n  border-radius: 8px;\n  box-shadow: 1px 1px 4px var(--main-color);\n}\n\n#add__project:hover{\n  cursor: pointer;\n  background-color: var(--third-color);\n  opacity: 0.7;\n}\n.option__project{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 250px;\n  margin: 0px auto;\n}\n.option__project > *{\n  font-size: 1.3rem;\n  height: 3rem;\n}\n.option__project > input{\n  outline: none;\n  border: 1px solid var(--main-color);\n  border-radius: 3px;\n  \n}\n\n#btn__add{\n  background-color: var(--third-color);\n  width: 250px;\n  outline: none;\n  border:none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n#btn__cancel{\n  background-color: var(--remove-color);\n  width: 250px;\n  outline: none;\n  border:none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.projects{\n  display: inherit;\n  align-items: end;\n  font-size: 1.5rem;\n  justify-content: center;\n  gap: 10px;\n}\n.project{\n  margin: 10px auto;\n  border-bottom: 1px solid #000;\n  width: 150px;\n  display: flex;\n  justify-content: space-between;\n  transition: transform .3s ease-in-out;\n  padding: 10px;\n}\n.project:hover{\n  cursor: pointer;\n  transform: translateY(-7px);\n}\n\n.minus{\n  box-shadow:1px 1px 3px #8f8f8f ;\n  background: var(--main-color);\n  color: var(--secondary-color);\n  border-radius: 100%;\n  padding: 5px;\n  cursor: pointer;\n}\n.minus:hover{\n  background-color: var(--remove-color);\n}\n\n/* ---------- Section Task styles ---------- */\n\n.section__task{\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  gap: 25px;\n  margin-top: 1.5rem;\n}\n\n.tasks {\n  display: flex;\n  flex-direction: column;\n  margin: 0px auto;\n  align-items: center;\n  gap: 25px;\n \n\n}\n\n#addTask{\n  width: 4rem;\n  font-size: 3rem;\n  padding: 4px;\n  border-radius: 100%;\n  outline: none;\n  border: none;\n  margin: 0 auto;\n  background-color: var(--third-color);\n  box-shadow: 1px 1px 3px var(--main-color);\n  transition: transform .2s ease-in-out;\n}\n#addTask:hover{\n  cursor: pointer;\n  transform: translateY(-5px);\n}\n.task {\n  display: flex;\n  flex-direction: column;\n  background: var(--main-color);\n  border-radius: 8px;\n  width: 700px;\n  display: flex;\n  gap: 25px;\n  color: var(--secondary-color);\n  justify-content: center;\n  align-items: center;\n}\n\n#checkbox{\n  appearance: none;\n  outline: none;\n  background-color: var(--secondary-color);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n  transition: all .2s ease-in;\n\n}\n.checked{\n  text-decoration: line-through;\n}\n\n#checkbox:checked{\n  background-color: var(--third-color);\n  position: relative;\n}\n#checkbox:checked::after{\n  content:\"✔\";\n  position:absolute;\n  top: 0;\n  left: 3px;\n  font-size: 1.8rem;\n  color: var(--secondary-color);\n}\n\n.main__task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: inherit;\n}\n\n.main__task > * {\n  display: inherit;\n  gap: 5px;\n  padding: 10px;\n  font-size: 1.6rem;\n  color: var(--secondary-color);\n  justify-items: center;\n}\n.main__task > i {\n  display: inherit;\n  justify-content: end;\n}\n.more__info{\n  color: var(--secondary-color);\n  height: 100px;\n  width: 100%;\n  font-size: 1.2rem;\n  display: grid;\n  grid-template-columns: repeat(2,1fr) ;\n}\n.more__info > * {\n  padding: 0 10px;\n}\n\ndiv > i{\n  cursor: pointer;\n}\n\n.edit:hover{\n  color: var(--third-color);\n}\n.delete:hover{\n  color: var(--remove-color);\n}\n\n.display__none{\n    display: none !important;\n}\n\n.error{\n  color: var(--remove-color);\n}\n\n/* --------- Modal styles ---------*/\n\n:modal{\n  border: none;\n  height:500px;\n  width: 350px;\n  padding: 40px;\n  margin:  auto auto;\n  border-radius: 20px;\n}\n:modal::backdrop{\n  backdrop-filter: blur(1.5rem);\n}\n\nform{\n  display: flex;\n  flex-direction: column;\n  font-size: 1.3rem;\n  margin: 0 20px;\n}\nlegend{\n  font-size: 2rem;\n  text-align: center;\n}\n\nform > input,textarea,select{\n  font-size: 1.3rem;\n  width: 300px;\n  height: 40px;\n  outline: none;\n}\ntextarea{\n  resize: none;\n}\n#add{\n  background-color: var(--third-color);\n  outline: none;\n  appearance: none;\n  border: none;\n  margin-top: 15px;\n  width: 300px;\n  height: 40px;\n  border-radius: 4px;\n  font-size: 1.4rem;\n}\n#add:hover{\n  cursor: pointer;\n  box-shadow: 2px 2px 27px var(--third-color);\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/hamburgers.css":
/*!****************************!*\
  !*** ./src/hamburgers.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hamburgers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./hamburgers.css */ "./node_modules/css-loader/dist/cjs.js!./src/hamburgers.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hamburgers_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hamburgers_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hamburgers_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hamburgers_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   openWindow: () => (/* binding */ openWindow),
/* harmony export */   showProperties: () => (/* binding */ showProperties)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/modules/logic.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");






const openWindow = () => {
  const btnWindow = document.querySelector(".hamburger")

  btnWindow.addEventListener("click",e => {
    e.currentTarget.classList.toggle("is-active")
    document.querySelector(".window__projects").classList.toggle("open")

  })

}
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
  console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(dueDate),' MMM do yyyy'))
 dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(dueDate),' MMM do yyyy')

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
          <span class="info__title"><b>Title: </b>${title}</span>
          <span class="info__date"><b>Due Date: </b>${dueDate}</span>
          <span class="info__description"><b>Description: </b>${description}</span>
          <span class="info__priority"><b>Priority: </b>${priority}</span>
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
    detectCheckTask()
  }
}

const changeStatus = (e) => {
  const check = e.target 
  check.nextElementSibling.classList.toggle("checked")
} 

function detectCheckTask(){
  const allCheckbox = document.querySelectorAll("#checkbox")
  allCheckbox.forEach(check => check.addEventListener("input",changeStatus))
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
  detectCheckTask()
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
    optionsElement = document.querySelectorAll(
      `[data-option=${div.dataset.value}]`
    );

  div.remove();
  optionsElement.forEach((option) => option.remove());
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteStorageProject)(div);
};

const clickMinus = () => {
  const minusICon = document.querySelectorAll(".minus");
  minusICon.forEach((icon) => icon.addEventListener("click", deleteProject));
};

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
  option.setAttribute("data-option", value);
  selectProject.appendChild(option);

  const cloneOption = option.cloneNode(true);
  selectEdit.appendChild(cloneOption);

  div.innerText = value;
  div.classList.add("project");
  div.setAttribute("data-value", value);
  div.appendChild(icon);
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
  option.setAttribute("data-option", input.value);
  selectProject.appendChild(option);

  //clone node and add option HTML element to correctly select
  const opt = option.cloneNode(true);
  selectEdit.appendChild(opt);
  //add project to section
  div.innerText = input.value;
  div.classList.add("project");
  div.setAttribute("data-value", input.value);
  div.appendChild(icon);
  sectionProjects.appendChild(div);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProject)(input.value);

  element.parentElement.classList.add("display__none");
  document.querySelector(".add__project").classList.remove("display__none");
  input.value = "";
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.renderTask)();
  clickMinus();
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
      <div class='error'>Not found tasks associated this project</div>
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




/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/* harmony import */ var _hamburgers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburgers.css */ "./src/hamburgers.css");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");





const initApp = () => {
  (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.openWindow)();
  (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.clickBtnTask)();
  (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.clickBtnModal)();
  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.loadTask)();
  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.loadProject)();
};
window.addEventListener("DOMContentLoaded", initApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwRkFBMEYsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxlQUFlLFFBQVEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxlQUFlLE1BQU0sZUFBZSxLQUFLLGdCQUFnQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLEtBQUssS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxlQUFlLEtBQUssVUFBVSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLGdCQUFnQixNQUFNLEtBQUssS0FBSyxlQUFlLEtBQUssVUFBVSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxnQkFBZ0IsS0FBSyxrQkFBa0IsT0FBTyxLQUFLLEtBQUssZUFBZSxLQUFLLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLGlCQUFpQixNQUFNLFlBQVksZ0JBQWdCLEtBQUssa0JBQWtCLE9BQU8sS0FBSyxLQUFLLFlBQVksa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLFlBQVksa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sS0FBSyxLQUFLLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixPQUFPLEtBQUssS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxLQUFLLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxrQkFBa0IsTUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FB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QUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047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QzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNHO0FBS0M7QUFDbUM7O0FBRTdEO0FBQ0EsRUFBRSwyREFBVTtBQUNaLEVBQUUsNkRBQVk7QUFDZCxFQUFFLDhEQUFhO0FBQ2YsRUFBRSw2REFBUTtBQUNWLEVBQUUsZ0VBQVc7QUFDYjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9oYW1idXJnZXJzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hhbWJ1cmdlcnMuY3NzPzNhNjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiFcbiAqIEhhbWJ1cmdlcnNcbiAqIEBkZXNjcmlwdGlvbiBUYXN0eSBDU1MtYW5pbWF0ZWQgaGFtYnVyZ2Vyc1xuICogQGF1dGhvciBKb25hdGhhbiBTdWggQGpvbnN1aFxuICogQHNpdGUgaHR0cHM6Ly9qb25zdWguY29tL2hhbWJ1cmdlcnNcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zdWgvaGFtYnVyZ2Vyc1xuICovXG4uaGFtYnVyZ2VyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgZmlsdGVyO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG4gIC5oYW1idXJnZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNzsgfVxuICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43OyB9XG4gIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIsXG4gIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcbiAgLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgXG4gIH1cblxuLmhhbWJ1cmdlci1ib3gge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uaGFtYnVyZ2VyLWlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMnB4OyB9XG4gIC5oYW1idXJnZXItaW5uZXIsIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XG4gIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IC0xMHB4OyB9XG4gIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICBib3R0b206IC0xMHB4OyB9XG5cbi8qXG4gICAqIDNEWFxuICAgKi9cbi5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWJveCB7XG4gIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG5cbi5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuXG4uaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gIC5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi8qXG4gICAqIDNEWCBSZXZlcnNlXG4gICAqL1xuLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1ib3gge1xuICBwZXJzcGVjdGl2ZTogODBweDsgfVxuXG4uaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cblxuLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7IH1cbiAgLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cblxuLypcbiAgICogM0RZXG4gICAqL1xuLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItYm94IHtcbiAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cblxuLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG4gIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XG5cbi5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gIC5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi8qXG4gICAqIDNEWSBSZXZlcnNlXG4gICAqL1xuLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1ib3gge1xuICBwZXJzcGVjdGl2ZTogODBweDsgfVxuXG4uaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cblxuLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cbiAgLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuXG4vKlxuICAgKiAzRFhZXG4gICAqL1xuLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWJveCB7XG4gIHBlcnNwZWN0aXZlOiA4MHB4OyB9XG5cbi5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxuXG4uaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpOyB9XG4gIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuXG4vKlxuICAgKiAzRFhZIFJldmVyc2VcbiAgICovXG4uaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1ib3gge1xuICBwZXJzcGVjdGl2ZTogODBweDsgfVxuXG4uaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R4eS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cblxuLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooLTE4MGRlZyk7IH1cbiAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxuICAuaGFtYnVyZ2VyLS0zZHh5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxuXG4vKlxuICAgKiBBcnJvd1xuICAgKi9cbi5oYW1idXJnZXItLWFycm93LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cblxuLmhhbWJ1cmdlci0tYXJyb3cuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cblxuLypcbiAgICogQXJyb3cgUmlnaHRcbiAgICovXG4uaGFtYnVyZ2VyLS1hcnJvdy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XG5cbi5oYW1idXJnZXItLWFycm93LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cblxuLypcbiAgICogQXJyb3cgQWx0XG4gICAqL1xuLmhhbWJ1cmdlci0tYXJyb3dhbHQgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG5cbi5oYW1idXJnZXItLWFycm93YWx0IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG5cbi5oYW1idXJnZXItLWFycm93YWx0LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cblxuLmhhbWJ1cmdlci0tYXJyb3dhbHQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxuXG4vKlxuICAgKiBBcnJvdyBBbHQgUmlnaHRcbiAgICovXG4uaGFtYnVyZ2VyLS1hcnJvd2FsdC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxuXG4uaGFtYnVyZ2VyLS1hcnJvd2FsdC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XG5cbi5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIC0xMHB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7IH1cblxuLmhhbWJ1cmdlci0tYXJyb3dhbHQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XG5cbi8qXG4gICAqIEFycm93IFR1cm5cbiAgICovXG4uaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuXG4vKlxuICAgKiBBcnJvdyBUdXJuIFJpZ2h0XG4gICAqL1xuLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgfVxuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cbiAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxuXG4vKlxuICAgKiBCb3JpbmdcbiAgICovXG4uaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lciwgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tYm9yaW5nIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTsgfVxuXG4uaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cbiAgLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIC5oYW1idXJnZXItLWJvcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XG5cbi8qXG4gICAqIENvbGxhcHNlXG4gICAqL1xuLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdG9wOiAtMjBweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwLjFzIGxpbmVhcjsgfVxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG5cbi5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMC4xcyAwLjIycyBsaW5lYXI7IH1cbiAgLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cblxuLypcbiAgICogQ29sbGFwc2UgUmV2ZXJzZVxuICAgKi9cbi5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCBvcGFjaXR5IDAuMXMgbGluZWFyOyB9XG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuXG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCBvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyOyB9XG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE2cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuXG4vKlxuICAgKiBFbGFzdGljXG4gICAqL1xuLmhhbWJ1cmdlci0tZWxhc3RpYyAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdG9wOiAycHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XG4gIC5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEyNXMgMC4yNzVzIGVhc2U7IH1cbiAgLmhhbWJ1cmdlci0tZWxhc3RpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdG9wOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI3NXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cblxuLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDEzNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSgtMjcwZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cblxuLypcbiAgICogRWxhc3RpYyBSZXZlcnNlXG4gICAqL1xuLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0b3A6IDJweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNzVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMjVzIDAuMjc1cyBlYXNlOyB9XG4gIC5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdG9wOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI3NXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cblxuLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTEzNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgb3BhY2l0eTogMDsgfVxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoMjcwZGVnKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7IH1cblxuLypcbiAgICogRW1waGF0aWNcbiAgICovXG4uaGFtYnVyZ2VyLS1lbXBoYXRpYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgbGVmdCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgICAgbGVmdDogLTgwcHg7XG4gICAgICB0b3A6IC04MHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCA4MHB4LCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICByaWdodDogLTgwcHg7XG4gICAgICB0b3A6IC04MHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgODBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxuXG4vKlxuICAgKiBFbXBoYXRpYyBSZXZlcnNlXG4gICAqL1xuLmhhbWJ1cmdlci0tZW1waGF0aWMtciB7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XG4gIC5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IC04MHB4O1xuICAgICAgdG9wOiA4MHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCAtODBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMTI1cyBlYXNlLW91dCwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHRyYW5zZm9ybSAwLjEyNXMgMC4xNzVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpOyB9XG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IC04MHB4O1xuICAgICAgdG9wOiA4MHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgLTgwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxuXG4vKlxuICAgKiBNaW51c1xuICAgKi9cbi5oYW1idXJnZXItLW1pbnVzIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgMHMgZWFzZS1vdXQsIHRvcCAwLjA4cyAwcyBlYXNlLW91dCwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cblxuLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDhzIGVhc2Utb3V0LCB0b3AgMC4wOHMgZWFzZS1vdXQsIG9wYWNpdHkgMHMgMC4wOHMgbGluZWFyOyB9XG5cbi5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7IH1cblxuLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwOyB9XG5cbi8qXG4gICAqIFNsaWRlclxuICAgKi9cbi5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdG9wOiAycHg7IH1cbiAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAxMHB4O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1czsgfVxuICAuaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRvcDogMjBweDsgfVxuXG4uaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cbiAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlM2QoLTUuNzE0MjlweCwgLTZweCwgMCk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAuaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTkwZGVnKTsgfVxuXG4vKlxuICAgKiBTbGlkZXIgUmV2ZXJzZVxuICAgKi9cbi5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0b3A6IDJweDsgfVxuICAuaGFtYnVyZ2VyLS1zbGlkZXItciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMTBweDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7IH1cbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRvcDogMjBweDsgfVxuXG4uaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZTNkKDUuNzE0MjlweCwgLTZweCwgMCk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAuaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSg5MGRlZyk7IH1cblxuLypcbiAgICogU3BpblxuICAgKi9cbi5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cbiAgLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluOyB9XG4gIC5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuXG4uaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7IH1cbiAgLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cblxuLypcbiAgICogU3BpbiBSZXZlcnNlXG4gICAqL1xuLmhhbWJ1cmdlci0tc3Bpbi1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMjVzIGVhc2UtaW4sIG9wYWNpdHkgMC4xcyBlYXNlLWluOyB9XG4gIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG5cbi5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0OyB9XG4gIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuXG4vKlxuICAgKiBTcHJpbmdcbiAgICovXG4uaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTNzIGxpbmVhcjsgfVxuICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRvcDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG5cbi5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gIC5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XG4gIC5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi8qXG4gICAqIFNwcmluZyBSZXZlcnNlXG4gICAqL1xuLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAuaGFtYnVyZ2VyLS1zcHJpbmctciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdG9wOiAtMjBweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cbiAgLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG5cbi5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMHMgMC4yMnMgbGluZWFyOyB9XG4gIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cblxuLypcbiAgICogU3RhbmRcbiAgICovXG4uaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyOyB9XG4gIC5oYW1idXJnZXItLXN0YW5kIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuXG4uaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7IH1cbiAgLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XG4gIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cblxuLypcbiAgICogU3RhbmQgUmV2ZXJzZVxuICAgKi9cbi5oYW1idXJnZXItLXN0YW5kLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4wNzVzIGxpbmVhcjsgfVxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjA3NXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG5cbi5oYW1idXJnZXItLXN0YW5kLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMTVzIGxpbmVhcjsgfVxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cblxuLypcbiAgICogU3F1ZWV6ZVxuICAgKi9cbi5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDc1cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG4gIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMTJzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIGVhc2U7IH1cbiAgLmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjEycyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XG5cbi5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7IH1cbiAgLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgZWFzZSwgdHJhbnNmb3JtIDAuMDc1cyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxuXG4vKlxuICAgKiBWb3J0ZXhcbiAgICovXG4uaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5OyB9XG4gIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tLCB0cmFuc2Zvcm07IH1cblxuLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzY1ZGVnKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxuICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cbiAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIC5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cblxuLypcbiAgICogVm9ydGV4IFJldmVyc2VcbiAgICovXG4uaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxuICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7IH1cbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtOyB9XG5cbi5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTc2NWRlZyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7IH1cbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDsgfVxuICAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9oYW1idXJnZXJzLmNzc1wiXSxcIm5hbWVzXCI6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LDBEQUEwRCxFQUFFO0VBQzVEO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQ0FBa0MsRUFBRTtFQUN0QztJQUNFLGlDQUFpQyxFQUFFO0VBQ3JDO0lBQ0Usc0NBQXNDLEVBQUU7O0FBRTVDO0VBQ0UsMEJBQTBCO0VBQzFCLDBEQUEwRCxFQUFFO0VBQzVEO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxNQUFNO0lBQ04sVUFBVSxFQUFFO0VBQ2Q7SUFDRSxTQUFTO0lBQ1QseUJBQXlCLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogSGFtYnVyZ2Vyc1xcbiAqIEBkZXNjcmlwdGlvbiBUYXN0eSBDU1MtYW5pbWF0ZWQgaGFtYnVyZ2Vyc1xcbiAqIEBhdXRob3IgSm9uYXRoYW4gU3VoIEBqb25zdWhcXG4gKiBAc2l0ZSBodHRwczovL2pvbnN1aC5jb20vaGFtYnVyZ2Vyc1xcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zdWgvaGFtYnVyZ2Vyc1xcbiAqL1xcbi5oYW1idXJnZXIge1xcbiAgcGFkZGluZzogMTVweCAxNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuaGFtYnVyZ2VyOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43OyB9XFxuICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcixcXG4gIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcXG4gIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgXFxuICB9XFxuXFxuLmhhbWJ1cmdlci1ib3gge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaGFtYnVyZ2VyLWlubmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMnB4OyB9XFxuICAuaGFtYnVyZ2VyLWlubmVyLCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XFxuICAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IC0xMHB4OyB9XFxuICAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIGJvdHRvbTogLTEwcHg7IH1cXG5cXG4vKlxcbiAgICogM0RYXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1ib3gge1xcbiAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cXG5cXG4uaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgLmhhbWJ1cmdlci0tM2R4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLypcXG4gICAqIDNEWCBSZXZlcnNlXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWJveCB7XFxuICBwZXJzcGVjdGl2ZTogODBweDsgfVxcblxcbi5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcblxcbi5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7IH1cXG4gIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cXG4gIC5oYW1idXJnZXItLTNkeC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLypcXG4gICAqIDNEWVxcbiAgICovXFxuLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItYm94IHtcXG4gIHBlcnNwZWN0aXZlOiA4MHB4OyB9XFxuXFxuLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuXFxuLmhhbWJ1cmdlci0tM2R5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7IH1cXG4gIC5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG5cXG4vKlxcbiAgICogM0RZIFJldmVyc2VcXG4gICAqL1xcbi5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItYm94IHtcXG4gIHBlcnNwZWN0aXZlOiA4MHB4OyB9XFxuXFxuLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuXFxuLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcblxcbi8qXFxuICAgKiAzRFhZXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItYm94IHtcXG4gIHBlcnNwZWN0aXZlOiA4MHB4OyB9XFxuXFxuLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG4gIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuXFxuLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7IH1cXG4gIC5oYW1idXJnZXItLTNkeHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG5cXG4vKlxcbiAgICogM0RYWSBSZXZlcnNlXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1ib3gge1xcbiAgcGVyc3BlY3RpdmU6IDgwcHg7IH1cXG5cXG4uaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS0zZHh5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC0xODBkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS0zZHh5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLypcXG4gICAqIEFycm93XFxuICAgKi9cXG4uaGFtYnVyZ2VyLS1hcnJvdy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcblxcbi5oYW1idXJnZXItLWFycm93LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcblxcbi8qXFxuICAgKiBBcnJvdyBSaWdodFxcbiAgICovXFxuLmhhbWJ1cmdlci0tYXJyb3ctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1hcnJvdy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcblxcbi8qXFxuICAgKiBBcnJvdyBBbHRcXG4gICAqL1xcbi5oYW1idXJnZXItLWFycm93YWx0IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1hcnJvd2FsdCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1hcnJvd2FsdC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XFxuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpOyB9XFxuXFxuLmhhbWJ1cmdlci0tYXJyb3dhbHQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxcblxcbi8qXFxuICAgKiBBcnJvdyBBbHQgUmlnaHRcXG4gICAqL1xcbi5oYW1idXJnZXItLWFycm93YWx0LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTsgfVxcblxcbi5oYW1idXJnZXItLWFycm93YWx0LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpOyB9XFxuXFxuLmhhbWJ1cmdlci0tYXJyb3dhbHQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAtMTBweCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxcblxcbi5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTsgfVxcblxcbi8qXFxuICAgKiBBcnJvdyBUdXJuXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS1hcnJvd3R1cm4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cXG4gIC5oYW1idXJnZXItLWFycm93dHVybi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuXFxuLypcXG4gICAqIEFycm93IFR1cm4gUmlnaHRcXG4gICAqL1xcbi5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyB9XFxuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTsgfVxcblxcbi8qXFxuICAgKiBCb3JpbmdcXG4gICAqL1xcbi5oYW1idXJnZXItLWJvcmluZyAuaGFtYnVyZ2VyLWlubmVyLCAuaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTsgfVxcblxcbi5oYW1idXJnZXItLWJvcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG4gIC5oYW1idXJnZXItLWJvcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAuaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyB9XFxuXFxuLypcXG4gICAqIENvbGxhcHNlXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRvcDogYXV0bztcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMC4xcyBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuXFxuLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tY29sbGFwc2UuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMC4xcyAwLjIycyBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuXFxuLypcXG4gICAqIENvbGxhcHNlIFJldmVyc2VcXG4gICAqL1xcbi5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0b3A6IGF1dG87XFxuICBib3R0b206IDA7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTNzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMC4xcyBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMTJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgb3BhY2l0eSAwLjFzIDAuMjJzIGxpbmVhcjsgfVxcbiAgLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuXFxuLypcXG4gICAqIEVsYXN0aWNcXG4gICAqL1xcbi5oYW1idXJnZXItLWVsYXN0aWMgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0b3A6IDJweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMjVzIDAuMjc1cyBlYXNlOyB9XFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuXFxuLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSgxMzVkZWcpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNzVzOyB9XFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTI3MGRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxcblxcbi8qXFxuICAgKiBFbGFzdGljIFJldmVyc2VcXG4gICAqL1xcbi5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRvcDogMnB4O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNzVzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTI1cyAwLjI3NXMgZWFzZTsgfVxcbiAgLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XFxuXFxuLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC0xMzVkZWcpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNzVzOyB9XFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAuaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKDI3MGRlZyk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1czsgfVxcblxcbi8qXFxuICAgKiBFbXBoYXRpY1xcbiAgICovXFxuLmhhbWJ1cmdlci0tZW1waGF0aWMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgICB0b3A6IDEwcHg7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCByaWdodCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47IH1cXG4gIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAtODBweDtcXG4gICAgICB0b3A6IC04MHB4O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODBweCwgODBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMTI1cyBlYXNlLW91dCwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHRyYW5zZm9ybSAwLjEyNXMgMC4xNzVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgcmlnaHQ6IC04MHB4O1xcbiAgICAgIHRvcDogLTgwcHg7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODBweCwgODBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7IH1cXG5cXG4vKlxcbiAgICogRW1waGF0aWMgUmV2ZXJzZVxcbiAgICovXFxuLmhhbWJ1cmdlci0tZW1waGF0aWMtciB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIGxlZnQgMC4xMjVzIDAuMTc1cyBlYXNlLWluOyB9XFxuICAgIC5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICAgIHRvcDogMTBweDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjsgfVxcbiAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cXG4gICAgLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgICBsZWZ0OiAtODBweDtcXG4gICAgICB0b3A6IDgwcHg7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCAtODBweCwgMCkgcm90YXRlKC00NWRlZyk7XFxuICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxcbiAgICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgICAgcmlnaHQ6IC04MHB4O1xcbiAgICAgIHRvcDogODBweDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04MHB4LCAtODBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTsgfVxcblxcbi8qXFxuICAgKiBNaW51c1xcbiAgICovXFxuLmhhbWJ1cmdlci0tbWludXMgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS1taW51cyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgMHMgZWFzZS1vdXQsIHRvcCAwLjA4cyAwcyBlYXNlLW91dCwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cXG5cXG4uaGFtYnVyZ2VyLS1taW51cy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS1taW51cy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjA4cyBlYXNlLW91dCwgdG9wIDAuMDhzIGVhc2Utb3V0LCBvcGFjaXR5IDBzIDAuMDhzIGxpbmVhcjsgfVxcblxcbi5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgdG9wOiAwOyB9XFxuXFxuLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi8qXFxuICAgKiBTbGlkZXJcXG4gICAqL1xcbi5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRvcDogMnB4OyB9XFxuICAuaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1czsgfVxcbiAgLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAyMHB4OyB9XFxuXFxuLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgLmhhbWJ1cmdlci0tc2xpZGVyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZTNkKC01LjcxNDI5cHgsIC02cHgsIDApO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAuaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKC05MGRlZyk7IH1cXG5cXG4vKlxcbiAgICogU2xpZGVyIFJldmVyc2VcXG4gICAqL1xcbi5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdG9wOiAycHg7IH1cXG4gIC5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRvcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7IH1cXG4gIC5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAyMHB4OyB9XFxuXFxuLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUzZCg1LjcxNDI5cHgsIC02cHgsIDApO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAuaGFtYnVyZ2VyLS1zbGlkZXItci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoOTBkZWcpOyB9XFxuXFxuLypcXG4gICAqIFNwaW5cXG4gICAqL1xcbi5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjsgfVxcbiAgLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcblxcbi5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7IH1cXG4gIC5oYW1idXJnZXItLXNwaW4uaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuXFxuLypcXG4gICAqIFNwaW4gUmV2ZXJzZVxcbiAgICovXFxuLmhhbWJ1cmdlci0tc3Bpbi1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIC5oYW1idXJnZXItLXNwaW4tciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjsgfVxcbiAgLmhhbWJ1cmdlci0tc3Bpbi1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuXFxuLmhhbWJ1cmdlci0tc3Bpbi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG4gIC5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0OyB9XFxuICAuaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG5cXG4vKlxcbiAgICogU3ByaW5nXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0b3A6IDJweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMgMC4xM3MgbGluZWFyOyB9XFxuICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICAuaGFtYnVyZ2VyLS1zcHJpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuICAuaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTsgfVxcbiAgLmhhbWJ1cmdlci0tc3ByaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKC00NWRlZyk7IH1cXG5cXG4vKlxcbiAgICogU3ByaW5nIFJldmVyc2VcXG4gICAqL1xcbi5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdG9wOiBhdXRvO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTsgfVxcbiAgLmhhbWJ1cmdlci0tc3ByaW5nLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgb3BhY2l0eSAwcyBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1zcHJpbmctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS1zcHJpbmctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgb3BhY2l0eSAwcyAwLjIycyBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLXNwcmluZy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCB0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG5cXG4vKlxcbiAgICogU3RhbmRcXG4gICAqL1xcbi5oYW1idXJnZXItLXN0YW5kIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyOyB9XFxuICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuICAuaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG5cXG4uaGFtYnVyZ2VyLS1zdGFuZC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLXN0YW5kLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcblxcbi8qXFxuICAgKiBTdGFuZCBSZXZlcnNlXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyOyB9XFxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIC5oYW1idXJnZXItLXN0YW5kLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuXFxuLmhhbWJ1cmdlci0tc3RhbmQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xNXMgbGluZWFyOyB9XFxuICAuaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tc3RhbmQtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpOyB9XFxuXFxuLypcXG4gICAqIFNxdWVlemVcXG4gICAqL1xcbi5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjA3NXM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7IH1cXG4gIC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjEycyBlYXNlLCBvcGFjaXR5IDAuMDc1cyBlYXNlOyB9XFxuICAuaGFtYnVyZ2VyLS1zcXVlZXplIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjEycyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpOyB9XFxuXFxuLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7IH1cXG4gIC5oYW1idXJnZXItLXNxdWVlemUuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIGVhc2UsIHRyYW5zZm9ybSAwLjA3NXMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7IH1cXG5cXG4vKlxcbiAgICogVm9ydGV4XFxuICAgKi9cXG4uaGFtYnVyZ2VyLS12b3J0ZXggLmhhbWJ1cmdlci1pbm5lciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7IH1cXG4gIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtOyB9XFxuXFxuLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDc2NWRlZyk7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XFxuICAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XFxuXFxuLypcXG4gICAqIFZvcnRleCBSZXZlcnNlXFxuICAgKi9cXG4uaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpOyB9XFxuICAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cXG4gIC5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgb3BhY2l0eTsgfVxcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTsgfVxcblxcbi5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC03NjVkZWcpO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTsgfVxcbiAgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tdm9ydGV4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cXG4gIC5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIC5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAtLW1haW4tY29sb3I6IzIyMjgzMTtcbiAgLS1zZWNvbmRhcnktY29sb3I6I0VFRUVFRTtcbiAgLS10aGlyZC1jb2xvcjojMDBBREI1O1xuICAtLXJlbW92ZS1jb2xvcjojZjQzZjVlO1xufSBcbiosXG46OmFmdGVyLFxuOjpiZWZvcmUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5ib2R5e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDp2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxubWFpbntcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZmxleDogMiAxIDYwMHB4O1xufVxuXG5mb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDEgO1xufVxuXG4ubG9nb3tcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi8qIC0tLS0tLS0tLS0tU2VjdGlvbiBvZiB3aW5kb3cgcHJvamVjdC0tLS0tLS0tLS0tICovXG4ud2luZG93X19wcm9qZWN0c3tcbiAgd2lkdGg6IDE4cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LG1pbm1heCg1MHB4LDEwMHB4KSk7XG4gIGdhcDogMTBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cblxuLm9wZW57XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggdmFyKC0tbWFpbi1jb2xvcik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG5cbi50aXRsZV9fcHJvamVjdHN7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2FkZF9fcHJvamVjdHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4jYWRkX19wcm9qZWN0OmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgb3BhY2l0eTogMC43O1xufVxuLm9wdGlvbl9fcHJvamVjdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4ub3B0aW9uX19wcm9qZWN0ID4gKntcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGhlaWdodDogM3JlbTtcbn1cbi5vcHRpb25fX3Byb2plY3QgPiBpbnB1dHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgXG59XG5cbiNidG5fX2FkZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICB3aWR0aDogMjUwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNidG5fX2NhbmNlbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVtb3ZlLWNvbG9yKTtcbiAgd2lkdGg6IDI1MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0c3tcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4ucHJvamVjdHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9qZWN0OmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbn1cblxuLm1pbnVze1xuICBib3gtc2hhZG93OjFweCAxcHggM3B4ICM4ZjhmOGYgO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1pbnVzOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZW1vdmUtY29sb3IpO1xufVxuXG4vKiAtLS0tLS0tLS0tIFNlY3Rpb24gVGFzayBzdHlsZXMgLS0tLS0tLS0tLSAqL1xuXG4uc2VjdGlvbl9fdGFza3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGdhcDogMjVweDtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4udGFza3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI1cHg7XG4gXG5cbn1cblxuI2FkZFRhc2t7XG4gIHdpZHRoOiA0cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbn1cbiNhZGRUYXNrOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NoZWNrYm94e1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XG5cbn1cbi5jaGVja2Vke1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuI2NoZWNrYm94OmNoZWNrZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2NoZWNrYm94OmNoZWNrZWQ6OmFmdGVye1xuICBjb250ZW50Olwi4pyUXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubWFpbl9fdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5tYWluX190YXNrID4gKiB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX190YXNrID4gaSB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuLm1vcmVfX2luZm97XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKSA7XG59XG4ubW9yZV9faW5mbyA+ICoge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbmRpdiA+IGl7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXQ6aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG59XG4uZGVsZXRlOmhvdmVye1xuICBjb2xvcjogdmFyKC0tcmVtb3ZlLWNvbG9yKTtcbn1cblxuLmRpc3BsYXlfX25vbmV7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3J7XG4gIGNvbG9yOiB2YXIoLS1yZW1vdmUtY29sb3IpO1xufVxuXG4vKiAtLS0tLS0tLS0gTW9kYWwgc3R5bGVzIC0tLS0tLS0tLSovXG5cbjptb2RhbHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6NTAwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luOiAgYXV0byBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuOm1vZGFsOjpiYWNrZHJvcHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEuNXJlbSk7XG59XG5cbmZvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW46IDAgMjBweDtcbn1cbmxlZ2VuZHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0gPiBpbnB1dCx0ZXh0YXJlYSxzZWxlY3R7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG59XG4jYWRke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4jYWRkOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMjdweCB2YXIoLS10aGlyZC1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixPQUFPO0VBQ1AsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjtBQUNBLG9EQUFvRDtBQUNwRDtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdURBQXVEO0VBQ3ZELFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUNBQXlDO0VBQ3pDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQSw4Q0FBOEM7O0FBRTlDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTOzs7QUFHWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMseUNBQXlDO0VBQ3pDLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkJBQTJCOztBQUU3QjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sU0FBUztFQUNULGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLG9DQUFvQzs7QUFFcEM7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztBQUM3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290e1xcbiAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS1tYWluLWNvbG9yOiMyMjI4MzE7XFxuICAtLXNlY29uZGFyeS1jb2xvcjojRUVFRUVFO1xcbiAgLS10aGlyZC1jb2xvcjojMDBBREI1O1xcbiAgLS1yZW1vdmUtY29sb3I6I2Y0M2Y1ZTtcXG59IFxcbiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOnZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZmxleDogMiAxIDYwMHB4O1xcbn1cXG5cXG5mb290ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDEgO1xcbn1cXG5cXG4ubG9nb3tcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi8qIC0tLS0tLS0tLS0tU2VjdGlvbiBvZiB3aW5kb3cgcHJvamVjdC0tLS0tLS0tLS0tICovXFxuLndpbmRvd19fcHJvamVjdHN7XFxuICB3aWR0aDogMThyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoNTBweCwxMDBweCkpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXG59XFxuXFxuLm9wZW57XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxufVxcblxcbi50aXRsZV9fcHJvamVjdHN7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhZGRfX3Byb2plY3R7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4jYWRkX19wcm9qZWN0OmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4ub3B0aW9uX19wcm9qZWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbn1cXG4ub3B0aW9uX19wcm9qZWN0ID4gKntcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4ub3B0aW9uX19wcm9qZWN0ID4gaW5wdXR7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBcXG59XFxuXFxuI2J0bl9fYWRke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjpub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYnRuX19jYW5jZWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZW1vdmUtY29sb3IpO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjpub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0e1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnByb2plY3Q6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XFxufVxcblxcbi5taW51c3tcXG4gIGJveC1zaGFkb3c6MXB4IDFweCAzcHggIzhmOGY4ZiA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1pbnVzOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLSBTZWN0aW9uIFRhc2sgc3R5bGVzIC0tLS0tLS0tLS0gKi9cXG5cXG4uc2VjdGlvbl9fdGFza3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcblxcbi50YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNXB4O1xcbiBcXG5cXG59XFxuXFxuI2FkZFRhc2t7XFxuICB3aWR0aDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbiNhZGRUYXNrOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2hlY2tib3h7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XFxuXFxufVxcbi5jaGVja2Vke1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbiNjaGVja2JveDpjaGVja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jY2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXJ7XFxuICBjb250ZW50OlxcXCLinJRcXFwiO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzcHg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ubWFpbl9fdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbn1cXG5cXG4ubWFpbl9fdGFzayA+ICoge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluX190YXNrID4gaSB7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbi5tb3JlX19pbmZve1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcikgO1xcbn1cXG4ubW9yZV9faW5mbyA+ICoge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG5kaXYgPiBpe1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdDpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxufVxcbi5kZWxldGU6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tcmVtb3ZlLWNvbG9yKTtcXG59XFxuXFxuLmRpc3BsYXlfX25vbmV7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmVycm9ye1xcbiAgY29sb3I6IHZhcigtLXJlbW92ZS1jb2xvcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLSBNb2RhbCBzdHlsZXMgLS0tLS0tLS0tKi9cXG5cXG46bW9kYWx7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6NTAwcHg7XFxuICB3aWR0aDogMzUwcHg7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgbWFyZ2luOiAgYXV0byBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuOm1vZGFsOjpiYWNrZHJvcHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxLjVyZW0pO1xcbn1cXG5cXG5mb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5sZWdlbmR7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gPiBpbnB1dCx0ZXh0YXJlYSxzZWxlY3R7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbnRleHRhcmVhe1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4jYWRke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbiNhZGQ6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDI3cHggdmFyKC0tdGhpcmQtY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oYW1idXJnZXJzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGFtYnVyZ2Vycy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgVGFzaywgeyBmaW5kRWxlbWVudCwgcmVuZGVyVGFzayB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQge1xuICBzYXZlTG9jYWxTdG9yYWdlLFxuICBkZWxldGVJdGVtLFxuICBlZGl0SXRlbSxcbiAgc2F2ZVByb2plY3QsXG4gIGRlbGV0ZVN0b3JhZ2VQcm9qZWN0LFxufSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuXG5jb25zdCBvcGVuV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBidG5XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKVxuXG4gIGJ0bldpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZG93X19wcm9qZWN0c1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKVxuXG4gIH0pXG5cbn1cbi8qIENvZGUgd2l0aCBUYXNrICovXG4vL2Z1bmN0aW9uIHRoYXQgYWN0aXZhdGVzIG1vZGFsIHdpbmRvd1xuY29uc3Qgb3Blbk1vZGFsID0gKGUpID0+IHtcbiAgaWYgKGUuY3VycmVudFRhcmdldC5tYXRjaGVzKFwiI2FkZFRhc2tcIikpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKS5zaG93TW9kYWwoKTtcbiAgaWYgKGUuY3VycmVudFRhcmdldC5tYXRjaGVzKFwiLmVkaXRcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfX21vZGFsXCIpLnNob3dNb2RhbCgpO1xuICAgIGRhdGFUcmFuc2ZlcihlLmN1cnJlbnRUYXJnZXQpO1xuICB9XG59O1xuZnVuY3Rpb24gY2xpY2tCdG5UYXNrKCkge1xuICBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuICBidG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xufVxuXG4vL3RoaXMgZnVuY3Rpb24gZ2V0dGluZyBmb3JtIHZhbHVlc1xuY29uc3Qgc3VibWl0VGFzayA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKTtcblxuICBjcmVhdGVUYXNrKFxuICAgIGRhdGEudGl0bGUsXG4gICAgZGF0YS5kdWVEYXRlLFxuICAgIGRhdGEuZGVzY3JpcHRpb24sXG4gICAgZGF0YS5wcmlvcml0eSxcbiAgICBkYXRhLnByb2plY3RcbiAgKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpLmNsb3NlKCk7XG4gIGUuY3VycmVudFRhcmdldC5yZXNldCgpO1xufTtcblxuZnVuY3Rpb24gY2xpY2tCdG5Nb2RhbCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0VGFzayk7XG59XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAvL2RlbGV0ZSB0YXNrIGlubmVyIERPTVxuICBsZXQgdGFza0RlbGV0ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza1wiKSxcbiAgICBpZCA9IHRhc2tEZWxldGUuZGF0YXNldC5pZDtcblxuICB0YXNrRGVsZXRlLnJlbW92ZSgpO1xuICBkZWxldGVJdGVtKGlkKTtcbn07XG4vLyBXaGVuIHRhcmdldCBpcyBcImljb24gdHJhc2hcIiAsIHRyaWdnZXIgdGhpcyBmdW5jdGlvblxuZnVuY3Rpb24gY2xpY2tCdG5EZWxldGUoKSB7XG4gIGNvbnN0IGJ0bkRlbGV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcbiAgYnRuRGVsZXRlcy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xuICB9KTtcbn1cblxuLy90aGlzIGZ1bmN0aW9uIGdlbmVyYXRlIGluc3RhbmNlIG9mIGNsYXNzIHRhc2tcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gIGNvbnN0IGRhdGFJbmZvID0gbmV3VGFzay5nZXREYXRhO1xuICBjb25zb2xlLmxvZyhkYXRhSW5mbyk7XG4gIGluc2VydFRhc2soZGF0YUluZm8pO1xuICBzYXZlTG9jYWxTdG9yYWdlKGRhdGFJbmZvKTtcbn1cbi8vdGhpcyBmdW5jdGlvbiBpbnNlcnQgdGFzayB0byBET01cbmZ1bmN0aW9uIGluc2VydFRhc2soZGF0YSwgZmxhZyA9IGZhbHNlKSB7XG4gIGxldCB7IHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkIH0gPSBkYXRhO1xuICBjb25zdCBzZWN0aW9uVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLFxuICAgIGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIiksXG4gICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnNvbGUubG9nKGZvcm1hdChuZXcgRGF0ZShkdWVEYXRlKSwnIE1NTSBkbyB5eXl5JykpXG4gZHVlRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShkdWVEYXRlKSwnIE1NTSBkbyB5eXl5JylcblxuICBmaWd1cmUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gIGZpZ3VyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGlkKTtcbiAgZmlndXJlLmlubmVySFRNTCA9IGAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fdGFza1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYWluX190aXRsZVwiID4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJlZGl0IGZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZGVsZXRlIGZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3JlX19pbmZvIGRpc3BsYXlfX25vbmVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm9fX3RpdGxlXCI+PGI+VGl0bGU6IDwvYj4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm9fX2RhdGVcIj48Yj5EdWUgRGF0ZTogPC9iPiR7ZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvX19kZXNjcmlwdGlvblwiPjxiPkRlc2NyaXB0aW9uOiA8L2I+JHtkZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvX19wcmlvcml0eVwiPjxiPlByaW9yaXR5OiA8L2I+JHtwcmlvcml0eX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGA7XG5cbiAgaWYgKGZsYWcgPT09IHRydWUpIHtcbiAgICByZXR1cm4gZmlndXJlO1xuICB9XG4gIGlmICghZmxhZykge1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZpZ3VyZSk7XG4gICAgc2VjdGlvblRhc2tzLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICBzaG93UHJvcGVydGllcygpO1xuICAgIGNsaWNrRWRpdCgpO1xuICAgIGNsaWNrQnRuRGVsZXRlKCk7XG4gICAgZGV0ZWN0Q2hlY2tUYXNrKClcbiAgfVxufVxuXG5jb25zdCBjaGFuZ2VTdGF0dXMgPSAoZSkgPT4ge1xuICBjb25zdCBjaGVjayA9IGUudGFyZ2V0IFxuICBjaGVjay5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIilcbn0gXG5cbmZ1bmN0aW9uIGRldGVjdENoZWNrVGFzaygpe1xuICBjb25zdCBhbGxDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2hlY2tib3hcIilcbiAgYWxsQ2hlY2tib3guZm9yRWFjaChjaGVjayA9PiBjaGVjay5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixjaGFuZ2VTdGF0dXMpKVxufVxuXG5jb25zdCBzaG93TW9yZSA9IChlKSA9PiB7XG4gIGlmIChcbiAgICBlLnRhcmdldC5tYXRjaGVzKFwiLmVkaXRcIikgfHxcbiAgICBlLnRhcmdldC5tYXRjaGVzKFwiI2NoZWNrYm94XCIpIHx8XG4gICAgZS50YXJnZXQubWF0Y2hlcyhcIi5kZWxldGVcIilcbiAgKVxuICAgIHJldHVybjtcbiAgY29uc3QgZGl2UGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xuICBkaXZQYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5X19ub25lXCIpO1xufTtcblxuZnVuY3Rpb24gc2hvd1Byb3BlcnRpZXMoKSB7XG4gIGNvbnN0IGluZm9UYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fdGFza1wiKTtcbiAgaW5mb1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TW9yZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGlja0VkaXQoKSB7XG4gIGNvbnN0IGVkaXRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKTtcbiAgZWRpdEljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuICB9KTtcbn1cblxuY29uc3QgcmVwbGFjZVRhc2sgPSAodGFzaywgZWxlbWVudCkgPT4ge1xuICB0YXNrLnJlcGxhY2VXaXRoKGluc2VydFRhc2soZWxlbWVudCwgdHJ1ZSkpO1xuICBzaG93UHJvcGVydGllcygpO1xuICBjbGlja0VkaXQoKTtcbiAgY2xpY2tCdG5EZWxldGUoKTtcbiAgZGV0ZWN0Q2hlY2tUYXNrKClcbn07XG5cbmNvbnN0IGVkaXRUYXNrID0gKGZvcm0sIGVsZW1lbnQsIHRhc2spID0+IHtcbiAgbGV0IGFjdHVhbEVsZW1lbnQgPSBmaW5kRWxlbWVudChlbGVtZW50KTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwic3VibWl0XCIsXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdHVhbEVsZW1lbnQpO1xuXG4gICAgICBsZXQgZWRpdERhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KSk7XG4gICAgICBlZGl0RGF0YS5pZCA9IHRhc2suZGF0YXNldC5pZDtcbiAgICAgIGNvbnNvbGUubG9nKGVkaXREYXRhKTtcbiAgICAgIGVkaXRJdGVtKGFjdHVhbEVsZW1lbnRbMF0sIGVkaXREYXRhKTtcbiAgICAgIHJlcGxhY2VUYXNrKHRhc2ssIGFjdHVhbEVsZW1lbnRbMF0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRfX21vZGFsXCIpLmNsb3NlKCk7XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApO1xufTtcblxuY29uc3QgbG9hZE1vZGFsID0gKGZvcm0sIGVsZW1lbnQpID0+IHtcbiAgbGV0IGFjdHVhbFRhc2sgPSBmaW5kRWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgeyB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0IH0gPSBmb3JtO1xuICB0aXRsZS52YWx1ZSA9IGFjdHVhbFRhc2tbMF0udGl0bGU7XG4gIGR1ZURhdGUudmFsdWUgPSBhY3R1YWxUYXNrWzBdLmR1ZURhdGU7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gYWN0dWFsVGFza1swXS5kZXNjcmlwdGlvbjtcbiAgcHJpb3JpdHkudmFsdWUgPSBhY3R1YWxUYXNrWzBdLnByaW9yaXR5O1xuICBwcm9qZWN0LnZhbHVlID0gYWN0dWFsVGFza1swXS5wcm9qZWN0O1xufTtcbmNvbnN0IGRhdGFUcmFuc2ZlciA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGZvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19lZGl0XCIpLFxuICAgIGFjdHVhbFRhc2sgPSBlbGVtZW50LmNsb3Nlc3QoXCIudGFza1wiKTtcbiAgbG9hZE1vZGFsKGZvcm1FZGl0LmVsZW1lbnRzLCBlbGVtZW50KTtcbiAgZWRpdFRhc2soZm9ybUVkaXQsIGVsZW1lbnQsIGFjdHVhbFRhc2spO1xufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS1UaGlzIHBhcnQgb2YgY29kZSB0YWtlIGNhcmUgc2VjdGlvbiBwcm9qZWN0cy0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IHNob3dPcHQgPSAoZSkgPT4ge1xuICBjb25zdCBidG5BZGQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGJ0bkFkZC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fbm9uZVwiKTtcbiAgYnRuQWRkLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fbm9uZVwiKTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX19wcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93T3B0KTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdFwiKSxcbiAgICBvcHRpb25zRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtb3B0aW9uPSR7ZGl2LmRhdGFzZXQudmFsdWV9XWBcbiAgICApO1xuXG4gIGRpdi5yZW1vdmUoKTtcbiAgb3B0aW9uc0VsZW1lbnQuZm9yRWFjaCgob3B0aW9uKSA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuICBkZWxldGVTdG9yYWdlUHJvamVjdChkaXYpO1xufTtcblxuY29uc3QgY2xpY2tNaW51cyA9ICgpID0+IHtcbiAgY29uc3QgbWludXNJQ29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taW51c1wiKTtcbiAgbWludXNJQ29uLmZvckVhY2goKGljb24pID0+IGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpKTtcbn07XG5cbmNvbnN0IGluc2VydFByb2plY3QgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBzZWN0aW9uUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLFxuICAgIHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fcHJvamVjdFwiKSxcbiAgICBzZWxlY3RFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X19zZWxlY3RcIiksXG4gICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpLFxuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgaWNvbi5jbGFzc05hbWUgPSBcIm1pbnVzIGZhLXNvbGlkIGZhLW1pbnVzXCI7XG4gIG9wdGlvbi5pbm5lclRleHQgPSB2YWx1ZTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uXCIsIHZhbHVlKTtcbiAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gIGNvbnN0IGNsb25lT3B0aW9uID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgc2VsZWN0RWRpdC5hcHBlbmRDaGlsZChjbG9uZU9wdGlvbik7XG5cbiAgZGl2LmlubmVyVGV4dCA9IHZhbHVlO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHZhbHVlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICBzZWN0aW9uUHJvamVjdHMuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNhbmNlbEFkZCA9IChlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19ub25lXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9fcHJvamVjdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fbm9uZVwiKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQsXG4gICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIiksXG4gICAgc2VjdGlvblByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKSxcbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fcHJvamVjdFwiKSxcbiAgICBzZWxlY3RFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0X19zZWxlY3RcIiksXG4gICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpLFxuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgaWNvbi5jbGFzc05hbWUgPSBcIm1pbnVzIGZhLXNvbGlkIGZhLW1pbnVzXCI7XG5cbiAgb3B0aW9uLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaW5wdXQudmFsdWUpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwiZGF0YS1vcHRpb25cIiwgaW5wdXQudmFsdWUpO1xuICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgLy9jbG9uZSBub2RlIGFuZCBhZGQgb3B0aW9uIEhUTUwgZWxlbWVudCB0byBjb3JyZWN0bHkgc2VsZWN0XG4gIGNvbnN0IG9wdCA9IG9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gIHNlbGVjdEVkaXQuYXBwZW5kQ2hpbGQob3B0KTtcbiAgLy9hZGQgcHJvamVjdCB0byBzZWN0aW9uXG4gIGRpdi5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBpbnB1dC52YWx1ZSk7XG4gIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgc2VjdGlvblByb2plY3RzLmFwcGVuZENoaWxkKGRpdik7XG4gIHNhdmVQcm9qZWN0KGlucHV0LnZhbHVlKTtcblxuICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25vbmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX19wcm9qZWN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19ub25lXCIpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHJlbmRlclRhc2soKTtcbiAgY2xpY2tNaW51cygpO1xufTtcblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uX19wcm9qZWN0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiI2J0bl9fYWRkXCIpKSBhZGRQcm9qZWN0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIjYnRuX19jYW5jZWxcIikpIGNhbmNlbEFkZChldmVudCk7XG4gIH0pO1xuXG5leHBvcnQge1xuICBjbGlja0J0blRhc2ssXG4gIGNsaWNrQnRuTW9kYWwsXG4gIGNsaWNrQnRuRGVsZXRlLFxuICBzaG93UHJvcGVydGllcyxcbiAgY2xpY2tFZGl0LFxuICBpbnNlcnRUYXNrLFxuICBpbnNlcnRQcm9qZWN0LFxuICBjbGlja01pbnVzLFxuICBvcGVuV2luZG93XG59O1xuIiwiaW1wb3J0IHsgaW5zZXJ0VGFzayB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgbG9hZFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IF9zdG9yYWdlID0gbG9hZFN0b3JhZ2UoKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAjdGl0bGU7XG4gICNkdWVEYXRlO1xuICAjZGVzY3JpcHRpb247XG4gICNwcmlvcml0eTtcbiAgI3Byb2plY3Q7XG4gIHN0YXRpYyBjb3VudCA9ICFfc3RvcmFnZSB8fCBfc3RvcmFnZS5sZW5ndGggPT09IDAgPyAwIDogbGFzdEluZGV4KF9zdG9yYWdlKTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy4jcHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5pZCA9ICsrVGFzay5jb3VudDtcbiAgfVxuICBnZXQgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRoaXMuI3RpdGxlLFxuICAgICAgZHVlRGF0ZTogdGhpcy4jZHVlRGF0ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLiNkZXNjcmlwdGlvbixcbiAgICAgIHByaW9yaXR5OiB0aGlzLiNwcmlvcml0eSxcbiAgICAgIHByb2plY3Q6IHRoaXMuI3Byb2plY3QsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBsYXN0SW5kZXgoYXJyKSB7XG4gIHJldHVybiBhcnIuYXQoLTEpLmlkO1xufVxuXG5jb25zdCBmaW5kRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGFjdHVhbFRhc2sgPSBlbGVtZW50LmNsb3Nlc3QoXCIudGFza1wiKSxcbiAgICBpZEFjdHVhbCA9IGFjdHVhbFRhc2suZGF0YXNldC5pZCxcbiAgICBhY3R1YWxTdG9yYWdlID0gbG9hZFN0b3JhZ2UoKTtcblxuICBjb25zdCBkYXRhSW5mbyA9IGFjdHVhbFN0b3JhZ2UuZmlsdGVyKChlbCkgPT4gaWRBY3R1YWwgPT0gZWwuaWQpO1xuXG4gIHJldHVybiBkYXRhSW5mbztcbn07XG5cbmNvbnN0IHNob3dUYXNrcyA9IChlKSA9PiB7XG4gIGlmKGUudGFyZ2V0Lm1hdGNoZXMoXCIubWludXNcIikpcmV0dXJuXG4gIFxuICBjb25zdCBzdG9yYWdlID0gbG9hZFN0b3JhZ2UoKSxcbiAgICBwcm9qZWN0Q2xpY2tlZCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsdWUsXG4gICAgc2VjdGlvblRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuICBzZWN0aW9uVGFza3MuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAocHJvamVjdENsaWNrZWQgPT09IFwiSG9tZVwiKSB7XG4gICAgZm9yIChsZXQgdGFzayBvZiBzdG9yYWdlKSB7XG4gICAgICBpbnNlcnRUYXNrKHRhc2spO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBmaWx0ZXJUYXNrID0gc3RvcmFnZS5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdENsaWNrZWQpO1xuXG4gIGlmIChmaWx0ZXJUYXNrLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIChzZWN0aW9uVGFza3MuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz0nZXJyb3InPk5vdCBmb3VuZCB0YXNrcyBhc3NvY2lhdGVkIHRoaXMgcHJvamVjdDwvZGl2PlxuICAgIGApO1xuICB9XG4gIGlmIChmaWx0ZXJUYXNrLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKGxldCB0YXNrIG9mIGZpbHRlclRhc2spIHtcbiAgICAgIGluc2VydFRhc2sodGFzayk7XG4gICAgfVxuICB9XG4gIGlmIChmaWx0ZXJUYXNrLmxlbmd0aCA8IDIpIHtcbiAgICBpbnNlcnRUYXNrKGZpbHRlclRhc2tbMF0pO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJUYXNrID0gKCkgPT4ge1xuICBjb25zdCB0b3RhbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXZhbHVlXVwiKTtcbiAgdG90YWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Rhc2tzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaW5kRWxlbWVudCwgcmVuZGVyVGFzayB9O1xuIiwiaW1wb3J0IHsgY2xpY2tCdG5EZWxldGUsIGNsaWNrRWRpdCwgY2xpY2tNaW51cywgaW5zZXJ0UHJvamVjdCwgaW5zZXJ0VGFzayB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5cbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICBjb25zdCBhcnJMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsVGFza1wiKSk7XG4gIHJldHVybiBhcnJMaXN0O1xufVxuXG5mdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKGRhdGEsIGZsYWcgPSBmYWxzZSkge1xuICBjb25zdCBsaXN0cyA9IGxvYWRTdG9yYWdlKCk7XG4gIGlmICghbGlzdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsVGFza1wiLCBKU09OLnN0cmluZ2lmeShbZGF0YV0pKTtcbiAgfVxuICBpZiAobGlzdHMpIHtcbiAgICBsaXN0cy5wdXNoKGRhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxUYXNrXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH1cbiAgaWYgKGxpc3RzICYmIGZsYWcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvdGFsVGFza1wiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsVGFza1wiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbn1cbi8vZnVuY3Rpb24gdGFrZSBjYXJlIG9mIGRlbGV0ZSBkYXRhIFRhc2sgb24gdGhlIGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xuICBjb25zdCBhY3R1YWxTdG9yYWdlID0gbG9hZFN0b3JhZ2UoKTtcbiAgbGV0IHRhc2tUb1JlbW92ZSA9IGFjdHVhbFN0b3JhZ2UuZmlsdGVyKChlbGVtZW50KSA9PiAhKGVsZW1lbnQuaWQgPT0gaWQpKTtcbiAgc2F2ZUxvY2FsU3RvcmFnZSh0YXNrVG9SZW1vdmUsIHRydWUpO1xufVxuY29uc3Qgc2F2ZU5ld0RhdGEgPSAob2JqKSA9PiB7XG4gIGxldCBzdG9yYWdlID0gbG9hZFN0b3JhZ2UoKTtcbiAgbGV0IGluZGV4T2JqO1xuICBzdG9yYWdlLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgIGlmIChlbC5pZCA9PSBvYmouaWQpIHtcbiAgICAgIGluZGV4T2JqID0gaW5kZXg7XG4gICAgfVxuICB9KTtcbiAgc3RvcmFnZVtpbmRleE9ial0gPSBvYmo7XG4gIHNhdmVMb2NhbFN0b3JhZ2Uoc3RvcmFnZSwgdHJ1ZSk7XG59O1xuLy9mdW5jaW9uIHF1ZSByZWNpYmUgZWwgb2JqZXRvIGNvbiBsYSBkYXRhIGFudGlndWEgeSBsYSBuZXdEYXRhIHJlZW1wbGF6YSBsYSBhbnRlcmlvclxuY29uc3QgZWRpdEl0ZW0gPSAob2JqLCBuZXdEYXRhKSA9PiB7XG4gIG9iai50aXRsZSA9IG5ld0RhdGEudGl0bGU7XG4gIG9iai5kdWVEYXRlID0gbmV3RGF0YS5kdWVEYXRlO1xuICBvYmouZGVzY3JpcHRpb24gPSBuZXdEYXRhLmRlc2NyaXB0aW9uO1xuICBvYmoucHJpb3JpdHkgPSBuZXdEYXRhLnByaW9yaXR5O1xuICBvYmoucHJvamVjdCA9IG5ld0RhdGEucHJvamVjdDtcblxuICBzYXZlTmV3RGF0YShvYmopO1xufTtcblxuY29uc3QgbG9hZFN0b3JhZ2VQcm9qZWN0ID0gKCkgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvdGFsUHJvamVjdHNcIikpO1xufTtcblxuY29uc3Qgc2F2ZVByb2plY3QgPSAocHJvamVjdCwgcmVtb3ZlZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHRvdGFsUHJvamVjdHMgPSBsb2FkU3RvcmFnZVByb2plY3QoKTtcbiAgaWYgKCF0b3RhbFByb2plY3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KFtwcm9qZWN0XSkpO1xuICB9XG4gIGlmICh0b3RhbFByb2plY3RzKSB7XG4gICAgdG90YWxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0b3RhbFByb2plY3RzKSk7XG4gIH1cbiAgaWYodG90YWxQcm9qZWN0cyAmJiByZW1vdmVkKXtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvdGFsUHJvamVjdHNcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbFByb2plY3RzXCIsSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpXG4gIH1cblxufTtcblxuY29uc3QgZGVsZXRlU3RvcmFnZVByb2plY3QgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB0b3RhbFByb2plY3RzID0gbG9hZFN0b3JhZ2VQcm9qZWN0KCksXG4gICAgICAgIGVsZW1lbnRSZW1vdmVkID0gZWxlbWVudC5kYXRhc2V0LnZhbHVlLFxuICAgICAgICBpbmRleCA9IHRvdGFsUHJvamVjdHMuaW5kZXhPZihlbGVtZW50UmVtb3ZlZCkgXG4gIC8vcmVtb3ZlIHByb2plY3QgdG8gYXJyYXlcbiAgdG90YWxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gIC8vc2F2ZSBuZXcgYXJyYXkgcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZSBcbiAgc2F2ZVByb2plY3QodG90YWxQcm9qZWN0cyx0cnVlKTtcbn1cblxuXG5jb25zdCBsb2FkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBsb2FkU3RvcmFnZVByb2plY3QoKTtcblxuICBpZiAoIXByb2plY3RzKSB7XG4gICAgc2F2ZVByb2plY3QoXCJIb21lXCIpO1xuICAgIGluc2VydFByb2plY3QoXCJIb21lXCIpO1xuICB9XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpbnNlcnRQcm9qZWN0KHByb2plY3QpO1xuICB9KTtcblxuICByZW5kZXJUYXNrKCk7XG4gIGNsaWNrTWludXMoKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrID0gKCkgPT4ge1xuICBjb25zdCBkYXRhQWxsID0gbG9hZFN0b3JhZ2UoKTtcbiAgaWYgKCFkYXRhQWxsKSByZXR1cm47XG4gIGZvciAobGV0IHRhc2sgb2YgZGF0YUFsbCkge1xuICAgIGluc2VydFRhc2sodGFzayk7XG4gIH1cbiAgY2xpY2tFZGl0KCk7XG4gIGNsaWNrQnRuRGVsZXRlKCk7XG59O1xuXG5leHBvcnQge1xuICBzYXZlTG9jYWxTdG9yYWdlLFxuICBsb2FkU3RvcmFnZSxcbiAgbG9hZFRhc2ssXG4gIGRlbGV0ZUl0ZW0sXG4gIGVkaXRJdGVtLFxuICBzYXZlUHJvamVjdCxcbiAgbG9hZFByb2plY3QsXG4gIGRlbGV0ZVN0b3JhZ2VQcm9qZWN0XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4vaGFtYnVyZ2Vycy5jc3NcIlxuaW1wb3J0IHtcbiAgY2xpY2tCdG5Nb2RhbCxcbiAgY2xpY2tCdG5UYXNrLFxuICBvcGVuV2luZG93XG59IGZyb20gXCIuL21vZHVsZXMvZG9tLmpzXCI7XG5pbXBvcnQgeyBsb2FkUHJvamVjdCwgbG9hZFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcbiAgb3BlbldpbmRvdygpO1xuICBjbGlja0J0blRhc2soKTtcbiAgY2xpY2tCdG5Nb2RhbCgpO1xuICBsb2FkVGFzaygpO1xuICBsb2FkUHJvamVjdCgpO1xufTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0QXBwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==