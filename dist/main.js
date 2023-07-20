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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n\n\n\nfunction navpage() {\n    const content = document.querySelector('#content')\n  \n    const sidebar = document.createElement('div')\n    sidebar.id = 'sidebar'\n  \n    const btns = document.createElement('div')\n    btns.id = 'btns'\n    const homeBtn = document.createElement('button')\n    const menuBtn = document.createElement('button')\n    const contactBtn = document.createElement('button')\n    homeBtn.innerText = 'home'\n    menuBtn.innerText = 'menu'\n    contactBtn.innerText = 'contact'\n    btns.appendChild(homeBtn)\n    btns.appendChild(menuBtn)\n    btns.appendChild(contactBtn)\n  \n    const logo = document.createElement('div')\n    logo.id = 'logo'\n    logo.innerHTML = '<img src=\"./imgs/coffee-logo.svg\">'\n  \n    sidebar.appendChild(btns)\n    sidebar.appendChild(logo)\n  \n    homeBtn.addEventListener(\"click\", function() {\n      page('home')\n    })\n    menuBtn.addEventListener(\"click\", function() {\n      page('menu')\n    })\n    contactBtn.addEventListener(\"click\", function() {\n      page('contact')\n    })\n  \n    content.appendChild(sidebar)\n  }\n\n  function foot() {\n    const content = document.querySelector('#content')\n  \n    const footer = document.createElement('div')\n    footer.id = 'footer'\n    const copyright = document.createElement('div')\n    copyright.id = 'copyright'\n  \n    copyright.innerHTML = `<a href='https://github.com/rishithb'>\n                              <img id='git link svg' src='./imgs/github-mark-white.svg'>\n                              <p>&copy; rishithb</p>\n                           </a>` \n    footer.appendChild(copyright)\n    content.appendChild(footer)\n  }\n\nfunction contactpage() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    navpage()\n\n    const contact = document.createElement('div')\n    contact.id = 'contact'\n    content.appendChild(contact)\n\n    const phoneAndEmail = document.createElement('div')\n    phoneAndEmail.id = 'PE'\n    phoneAndEmail.innerHTML = `<h2 class=\"contactHeader\">Contact Info</h2>\n                               <p>(626)555-0191</p>\n                               <p>coffeespot@fakemail.com</p>`\n    contact.appendChild(phoneAndEmail)\n\n    \n    const hours = document.createElement('div')\n    hours.id = 'hours'\n    hours.innerHTML = `<h2 class=\"contactHeader\">Hours</h2>\n                       <p>Sunday: 7am - 6pm</p>\n                       <p>Monday: 7am - 8pm</p>\n                       <p>Tuesday: 7am - 8pm</p>\n                       <p>Wednesday: 7am - 8pm</p>\n                       <p>Thursday: 7am - 8pm</p>\n                       <p>Friday: 8am - 7pm</p>\n                       <p>Saturday: 8am - 7pm</p>`\n    contact.appendChild(hours)\n  \n    const location = document.createElement('div')\n    location.id = 'location'\n    location.innerHTML = `<h2 class=\"contactHeader\">Address</h2>\n                          <p id=address'>3632 Espresso Drive, Los Angeles, CA</p>`\n    contact.appendChild(location)\n\n    const contactForm = document.createElement('div')\n    contactForm.innerHTML = '<h2>Contact Us!</h2>'\n    contactForm.id = 'contact-form'\n    const form = document.createElement('form')\n    form.id = 'FORM'\n    contactForm.appendChild(form)\n    form.innerHTML = \n    `\n        <div id=\"nameField\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" id=\"name\" name=\"full_name\" placeholder=\"John Smith\" required>\n        </div>\n        <div id=\"emailField\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" id=\"user_email\" name=\"email\" placeholder=\"example123@email.com\" required>\n        </div>\n        <div id=\"messageField\">\n            <label for=\"message\">Message:</label>\n            <input type=\"text\" id=\"message\" name=\"message\" placeholder=\"Message here...\" required>\n        </div>\n        <div id=\"submitButton\">\n            <button onclick=\"let btn = document.getElementById('FORM');FORM.reset();return false;\">Send</button>\n        </div>\n    `\n\n    contact.appendChild(contactForm)\n\n    foot()\n}\n\nfunction page(x) {\n    const y = {\n        home: _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n        menu: _menupage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \n        contact: contactpage,\n    }\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    y[x]()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactpage);\n\n//# sourceURL=webpack://restaurant-page/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\nfunction navpage() {\n  const content = document.querySelector('#content')\n\n  const sidebar = document.createElement('div')\n  sidebar.id = 'sidebar'\n\n  const btns = document.createElement('div')\n  btns.id = 'btns'\n  const homeBtn = document.createElement('button')\n  const menuBtn = document.createElement('button')\n  const contactBtn = document.createElement('button')\n  homeBtn.innerText = 'home'\n  menuBtn.innerText = 'menu'\n  contactBtn.innerText = 'contact'\n  btns.appendChild(homeBtn)\n  btns.appendChild(menuBtn)\n  btns.appendChild(contactBtn)\n\n  const logo = document.createElement('div')\n  logo.id = 'logo'\n  logo.innerHTML = '<img src=\"./imgs/coffee-logo.svg\">'\n\n  sidebar.appendChild(btns)\n  sidebar.appendChild(logo)\n\n  homeBtn.addEventListener(\"click\", function() {\n    page('home')\n  })\n  menuBtn.addEventListener(\"click\", function() {\n    page('menu')\n  })\n  contactBtn.addEventListener(\"click\", function() {\n    page('contact')\n  })\n\n  content.appendChild(sidebar)\n}\n\nfunction foot() {\n  const content = document.querySelector('#content')\n\n  const footer = document.createElement('div')\n  footer.id = 'footer'\n  const copyright = document.createElement('div')\n  copyright.id = 'copyright'\n\n  copyright.innerHTML = `<a href='https://github.com/rishithb'>\n                            <img id='git link svg' src='./imgs/github-mark-white.svg'>\n                            <p>&copy; rishithb</p>\n                         </a>` \n  footer.appendChild(copyright)\n  content.appendChild(footer)\n}\n\nfunction homepage() {\n    const content = document.querySelector('#content')\n    content.innerHTML = '';\n    navpage()\n\n    const home = document.createElement('div')\n    home.id = 'home'\n    content.appendChild(home)\n\n    const phrase = document.createElement('div')\n    phrase.id = 'phrase'\n    const phraseText = document.createElement('div')\n    phraseText.id = 'phraseText'\n    const enjoy = document.createElement('p')\n    enjoy.innerText = \"Don't wait for great coffee. Enjoy it here.\"\n    phraseText.appendChild(enjoy)\n    phrase.appendChild(phraseText)\n    home.appendChild(phrase)\n    \n    const about = document.createElement('div')\n    about.id = 'about'\n    about.innerHTML = \"<p>At the Coffee Spot, we value our customer's time, experience, and their coffee. We strive to serve you the best coffee, espresso and tea you've every and will have. Come on down to the Coffee Spot and we promise you'll never be getting your coffee from anywhere else!</p>\"\n    phrase.appendChild(about)\n\n    const backgroundCredit = document.createElement('div')\n    backgroundCredit.id = 'photoCredit'\n    backgroundCredit.innerHTML = 'Photo by <a href=\"https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Kari Shea</a> on <a href=\"https://unsplash.com/photos/pJn9WhMqFIs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'\n    content.appendChild(backgroundCredit)\n\n    foot()\n  }\n\n  function page(x) {\n    const y = {\n        home: homepage, \n        menu: _menupage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n        contact: _contactpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    }\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    y[x]()\n}\n\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n\n\n\nfunction navpage() {\n    const content = document.querySelector('#content')\n  \n    const sidebar = document.createElement('div')\n    sidebar.id = 'sidebar'\n  \n    const btns = document.createElement('div')\n    btns.id = 'btns'\n    const homeBtn = document.createElement('button')\n    const menuBtn = document.createElement('button')\n    const contactBtn = document.createElement('button')\n    homeBtn.innerText = 'home'\n    menuBtn.innerText = 'menu'\n    contactBtn.innerText = 'contact'\n    btns.appendChild(homeBtn)\n    btns.appendChild(menuBtn)\n    btns.appendChild(contactBtn)\n  \n    const logo = document.createElement('div')\n    logo.id = 'logo'\n    logo.innerHTML = '<img src=\"./imgs/coffee-logo.svg\">'\n  \n    sidebar.appendChild(btns)\n    sidebar.appendChild(logo)\n  \n    homeBtn.addEventListener(\"click\", function() {\n      page('home')\n    })\n    menuBtn.addEventListener(\"click\", function() {\n      page('menu')\n    })\n    contactBtn.addEventListener(\"click\", function() {\n      page('contact')\n    })\n  \n    content.appendChild(sidebar)\n  }\n\n  function foot() {\n    const content = document.querySelector('#content')\n  \n    const footer = document.createElement('div')\n    footer.id = 'footer'\n    const copyright = document.createElement('div')\n    copyright.id = 'copyright'\n  \n    copyright.innerHTML = `<a href='https://github.com/rishithb'>\n                              <img id='git link svg' src='./imgs/github-mark-white.svg'>\n                              <p>&copy; rishithb</p>\n                           </a>` \n    footer.appendChild(copyright)\n    content.appendChild(footer)\n  }\n\nfunction menupage() {\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    navpage()\n\n    const menu = document.createElement('div')\n    menu.id = 'menu'\n    content.appendChild(menu)\n\n    const coffee =  document.createElement('div')\n    coffee.id = 'coffee'\n    const coffeeTitle =  document.createElement('h3')\n    const coffeeList = document.createElement('div')\n    coffeeList.id = 'coffee-list'\n    coffeeTitle.innerHTML = \"Coffee <span class='hc'> - * indicates hot or iced options</span>\"\n    menu.appendChild(coffee)\n    coffee.appendChild(coffeeTitle)\n    coffee.appendChild(coffeeList)\n    const coffeeItems = [\n        {\n            name: \"Classic Coffee\",\n            description: \"Enjoy our simple yet inviting classic black coffee. Every sip contains subtle hints of cocoa and toasted nuts, with a balanced sweetness.*\"\n        },\n        {\n            name: \"Espresso\",\n            description: \"Get lost in the intense, full-bodied flavor of our signature espresso. Savor the bold and aromatic richness with every sip.\"\n        },\n        {\n            name: \"Cappuccino\",\n            description: \"Taste the harmony of rich espresso, smooth steamed milk, and a layer of delicate foam. *\"\n        },\n        {\n            name: \"Latte\",\n            description: \"Creamy steamed milk paired with our premium brewed espresso. Enjoy it as a comforting warmth or a refreshing pick-me-up.*\"\n        },\n        {\n            name: \"Classic Cold Brew\",\n            description: \"Escape the Southern California heat with a classic cold brew. Savor its natural smooth and sweet flavor, with hints of chocolate and caramel.\"\n        },\n        {\n            name: \"Mocha\",\n            description: \"The perfect fusion of rich chocolate and hot coffee. Upgrade your morning with a bold yet sweet cup of mocha.\"\n        },\n        {\n            name: \"White Chocolate Mocha\",\n            description: \"Our spin on classic mocha, with velvety smooth white chocolate paired with out premium espresso. Elevate your morning with this silky sweet treat.\"\n        },\n        {\n            name: \"Caramel Macchiato\",\n            description: \"Perfectly layered espresso, smooth steamed milk, and our luscious caramel sauce is the recipe for irresistible indulgence. Experience it's sweet, bold warmth, or it's cool refreshing flavors.*\"\n        }\n    ]\n    for (let x = 0; x < coffeeItems.length; x++) {\n        coffeeList.innerHTML += `<div class=\"menuItem\">\n                                    <p class=\"itemTitle\">${coffeeItems[x].name}</p>\n                                    <p class=\"itemDescription\">${coffeeItems[x].description}</p>\n                                 </div>`\n    }\n\n    const tea =  document.createElement('div')\n    tea.id = 'tea'\n    const teaTitle =  document.createElement('h3')\n    const teaList = document.createElement('div')\n    teaList.id = 'tea-list'\n    teaTitle.innerHTML = \"Tea  <span class='hc'> - * indicates hot or iced options</span>\"\n    menu.appendChild(tea)\n    tea.appendChild(teaTitle)\n    tea.appendChild(teaList)\n    const teaItems =  [\n        {\n            name: \"Chai\",\n            description: \"Warm yourself up with a cup of chai - black tea infused with a fragrant blend of aromatic spices, combined with velvety steamed milk.\"\n        },\n        {\n            name: \"Black Tea\",\n            description: \"Our simple yet elegant black tea serves robust flavors in every sip. If black coffee isn't your cup of tea, maybe black tea is.*\"\n        },\n        {\n            name: \"Milk Tea\",\n            description: \"Black tea elevated with the smoothness of steamed milk - every sip contains the perfect balance of richness and sweetness.*\"\n        },\n        {\n            name: \"Matcha Latte\",\n            description: \"Crafted with the finest grade of matcha, our matcha latte offers the perfect balance of rich umami, subtle sweetness, and velvety steamed milk.*\"\n        },\n        {\n            name: \"Thai Milk Tea\",\n            description: \"Premium black tea infused with aromatic spices. Hot or iced, our Thai Milk Tea will lift your mood with each sip.*\"\n        }\n    ]\n    for (let x = 0; x < teaItems.length; x++) {\n        teaList.innerHTML += `<div class=\"menuItem\">\n                                    <p class=\"itemTitle\">${teaItems[x].name}</p>\n                                    <p class=\"itemDescription\">${teaItems[x].description}</p>\n                                 </div>`\n    }\n\n    foot()\n}\n\nfunction page(x) {\n    const y = {\n        home: _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n        menu: menupage, \n        contact: _contactpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    }\n    const content = document.querySelector('#content')\n    content.innerHTML = ''\n    y[x]()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menupage);\n\n//# sourceURL=webpack://restaurant-page/./src/menupage.js?");

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