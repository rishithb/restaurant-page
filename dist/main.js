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

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n\n\n\nfunction navpage() {\n    const content = document.querySelector('#content')\n  \n    const sidebar = document.createElement('div')\n    sidebar.id = 'sidebar'\n  \n    const homeBtn = document.createElement('button')\n    const menuBtn = document.createElement('button')\n    const contactBtn = document.createElement('button')\n    homeBtn.innerText = 'HOME'\n    menuBtn.innerText = 'MENU'\n    contactBtn.innerText = 'CONTACT'\n  \n    sidebar.appendChild(homeBtn)\n    sidebar.appendChild(menuBtn)\n    sidebar.appendChild(contactBtn)\n  \n    homeBtn.addEventListener(\"click\", function() {\n      page('home')\n    })\n    menuBtn.addEventListener(\"click\", function() {\n      page('menu')\n    })\n    contactBtn.addEventListener(\"click\", function() {\n      page('contact')\n    })\n  \n    content.appendChild(sidebar)\n  }\n\nfunction contactpage() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    navpage()\n\n    const contact = document.createElement('div')\n    content.appendChild(contact)\n\n    const phoneAndEmail = document.createElement('div')\n    phoneAndEmail.id = 'P&E'\n    phoneAndEmail.innerHTML = `<p>(626)555-0191</p>\n                               <p>coffeespot@fakemail.com</p>`\n    contact.appendChild(phoneAndEmail)\n\n    const hours = document.createElement('div')\n    hours.id = 'hours'\n    hours.innerHTML = `<p>Sunday: 7am - 6pm</p>\n                       <p>Monday: 7am - 8pm</p\n                       <p>Tuesday: 7am - 8pm</p>\n                       <p>Wednesday: 7am - 8pm</p>\n                       <p>Thursday: 7am - 8pm</p>\n                       <p>Friday: 8am - 7pm</p>\n                       <p>Saturday: 8am - 7pm</p>`\n    contact.appendChild(hours)\n  \n    const location = document.createElement('div')\n    location.id = 'location'\n    location.innerHTML = \"<p id=address'>3632 Espresso Drive, Los Angeles, CA</p>\"\n    contact.appendChild(location)\n\n\n}\n\nfunction page(x) {\n    const y = {\n        home: _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n        menu: _menupage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \n        contact: contactpage,\n    }\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    y[x]()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactpage);\n\n//# sourceURL=webpack://restaurant-page/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\nfunction navpage() {\n  const content = document.querySelector('#content')\n\n  const sidebar = document.createElement('div')\n  sidebar.id = 'sidebar'\n\n  const homeBtn = document.createElement('button')\n  const menuBtn = document.createElement('button')\n  const contactBtn = document.createElement('button')\n  homeBtn.innerText = 'HOME'\n  menuBtn.innerText = 'MENU'\n  contactBtn.innerText = 'CONTACT'\n\n  sidebar.appendChild(homeBtn)\n  sidebar.appendChild(menuBtn)\n  sidebar.appendChild(contactBtn)\n\n  homeBtn.addEventListener(\"click\", function() {\n    page('home')\n  })\n  menuBtn.addEventListener(\"click\", function() {\n    page('menu')\n  })\n  contactBtn.addEventListener(\"click\", function() {\n    page('contact')\n  })\n\n  content.appendChild(sidebar)\n}\n\nfunction homepage() {\n    const content = document.querySelector('#content')\n    content.innerHTML = '';\n    navpage()\n\n    const home = document.createElement('div')\n    home.id = 'home'\n    content.appendChild(home)\n  \n    const nameHeader = document.createElement('h1')\n    nameHeader.innerText = 'The Coffee Spot'\n    home.appendChild(nameHeader)\n  \n    const about = document.createElement('div')\n    about.id = 'about'\n    about.innerHTML = \"<p>At the Coffee Spot, we value our customer's time, experience, and their coffee. We strive to serve you the best coffee, espresso and tea you've every and will have. Come on down to the Coffee Spot and we promise you'll never be getting your coffee from anywhere else!</p>\"\n    home.appendChild(about)\n  }\n\n  function page(x) {\n    const y = {\n        home: homepage, \n        menu: _menupage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n        contact: _contactpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    }\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    y[x]()\n}\n\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\nfunction navpage() {\n    const content = document.querySelector('#content')\n  \n    const sidebar = document.createElement('div')\n    sidebar.id = 'sidebar'\n  \n    const homeBtn = document.createElement('button')\n    const menuBtn = document.createElement('button')\n    const contactBtn = document.createElement('button')\n    homeBtn.innerText = 'HOME'\n    menuBtn.innerText = 'MENU'\n    contactBtn.innerText = 'CONTACT'\n  \n    sidebar.appendChild(homeBtn)\n    sidebar.appendChild(menuBtn)\n    sidebar.appendChild(contactBtn)\n  \n    homeBtn.addEventListener(\"click\", function() {\n      page('home')\n    })\n    menuBtn.addEventListener(\"click\", function() {\n      page('menu')\n    })\n    contactBtn.addEventListener(\"click\", function() {\n      page('contact')\n    })\n  \n    content.appendChild(sidebar)\n  }\n\nfunction menupage() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    navpage()\n\n    const menu = document.createElement('div')\n    content.appendChild(menu)\n\n    const coffee =  document.createElement('div')\n    const coffeeTitle =  document.createElement('h3')\n    const coffeeList = document.createElement('div')\n    coffeeTitle.innerText = \"Coffee\"\n    menu.appendChild(coffee)\n    coffee.appendChild(coffeeTitle)\n    coffee.appendChild(coffeeList)\n    const coffeeItems = [\n        {\n            name: \"Classic Coffee\",\n            description: \"\"\n        },\n        {\n            name: \"Espresso\",\n            description: \"\"\n        },\n        {\n            name: \"Cappuccino\",\n            description: \"\"\n        },\n        {\n            name: \"Latte\",\n            description: \"\"\n        },\n        {\n            name: \"Mocha\",\n            description: \"\"\n        },\n        {\n            name: \"White Chocolate Mocha\",\n            description: \"\"\n        },\n        {\n            name: \"Caramel Macchiato\",\n            description: \"\"\n        },\n        {\n            name: \"Classic Cold Brew\",\n            description: \"\"\n        }\n    ]\n    for (let x = 0; x < coffeeItems.length; x++) {\n        coffeeList.innerHTML += `<div class=\"menuItem\">\n                                    <p class=\"itemTitle\">${coffeeItems[x].name}</p>\n                                    <p class=\"itemDescription\">${coffeeItems[x].description}</p>\n                                 </div>`\n    }\n\n    const tea =  document.createElement('div')\n    const teaTitle =  document.createElement('h3')\n    const teaList = document.createElement('div')\n    teaTitle.innerText = \"Tea\"\n    menu.appendChild(tea)\n    tea.appendChild(teaTitle)\n    tea.appendChild(teaList)\n    const teaItems =  [\n        {\n            name: \"Chai\",\n            description: \"\"\n        },\n        {\n            name: \"Black Tea\",\n            description: \"\"\n        },\n        {\n            name: \"Milk Tea\",\n            description: \"\"\n        },\n        {\n            name: \"Matcha Latte\",\n            description: \"\"\n        },\n        {\n            name: \"Thai Milk Tea\",\n            description: \"\"\n        }\n    ]\n    for (let x = 0; x < teaItems.length; x++) {\n        teaList.innerHTML += `<div class=\"menuItem\">\n                                    <p class=\"itemTitle\">${teaItems[x].name}</p>\n                                    <p class=\"itemDescription\">${teaItems[x].description}</p>\n                                 </div>`\n    }\n}\n\nfunction page(x) {\n    const y = {\n        home: _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n        menu: menupage, \n        contact: _contactpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    }\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    y[x]()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menupage);\n\n//# sourceURL=webpack://restaurant-page/./src/menupage.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;