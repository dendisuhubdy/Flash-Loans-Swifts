webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Home.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Home.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Abel);"]);
// Module
exports.push([module.i, ".diamond {\n  height: 150px;\n  width: 150px;\n  background-color: #7fdbff;\n  transform: rotate(45deg);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --secondary-color: #5f26c0;\n  --contrast-color: #7859be;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  z-index: -10;\n  background-color: var(--contrast-color);\n}\n\n.container {\n  display: flex;\n  height: 100vh;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  animation: expand 0.8s ease forwards;\n  background-color: var(--secondary-color);\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  transition: all 0.8s ease;\n}\n\n.container_content {\n  width: 50%;\n}\n\n.container_content_inner {\n  width: 80%;\n  margin-left: 80px;\n}\n\n.container_outer_img {\n  margin: 50px;\n  width: 50%;\n  overflow: hidden;\n}\n\n.container_img {\n  width: 100%;\n  animation: slideIn 1.5s ease-in-out forwards;\n}\n\n.par {\n  height: auto;\n  overflow: hidden;\n}\n\np {\n  line-height: 28px;\n  transform: translateY(300px);\n  animation: slideUp 0.8s ease-in-out forwards 0.8s;\n}\n\n.btns {\n  width: 32rem;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.btns_more {\n  background: transparent;\n  border: 1px solid var(--contrast-color);\n  border-radius: 50px;\n  padding: 8px 12px;\n  font-size: 16px;\n  text-transform: uppercase;\n  position: relative;\n  margin-top: 15px;\n  outline: none;\n  transform: translateY(50px);\n  animation: slideUp 0.8s ease-in-out forwards 1s;\n}\n\n.title {\n  overflow: hidden;\n  height: auto;\n}\n\nh1 {\n  font-size: 40px;\n  color: var(--contrast-color);\n  margin-bottom: 20px;\n  transform: translateY(100px);\n  animation: slideUp 0.8s ease forwards 0.5s;\n}\n\n@keyframes slideIn {\n  0% {\n    transform: translateX(500px) scale(0.2);\n  }\n  100% {\n    transform: translateX(0px) scale(1);\n  }\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(300px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes expand {\n  0% {\n    transform: translateX(1400px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n.Image {\n  background-image: linear-gradient(#5f26c0, #371684);\n  height: 45rem;\n  box-shadow: purple;\n}\n\n.Steps {\n  margin-top: 6%;\n  width: 85rem;\n  height: 35rem;\n  align-content: center;\n  border-radius: 2.5%;\n}\n\n.StepImage {\n  height: 30rem;\n  width: 50rem;\n  float: right;\n}\n.StepImage2 {\n  height: 30rem;\n  width: 50rem;\n  float: left;\n}\n.StepImage3 {\n  height: 30rem;\n  width: 50rem;\n  float: right;\n}\n.StepImage4 {\n  height: 30rem;\n  width: 50rem;\n  float: left;\n}\n.Content {\n  float: left;\n  width: 30rem;\n}\n.Content2 {\n  float: right;\n  width: 30rem;\n}\n.Content3 {\n  float: left;\n  width: 30rem;\n}\n.Content4 {\n  float: right;\n  width: 30rem;\n}\n.heading {\n  margin-top: 14%;\n}\n.Para {\n  font-size: larger;\n}\n.Background {\n}\n\n.Logo {\n  width: 18rem;\n  margin-top: 8%;\n}\n\n.TagLine {\n  color: white;\n  margin-top: 4%;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.LearnButton {\n  color: white;\n  font-size: larger;\n  font-weight: bolder;\n  border-width: 0.3rem;\n}\n.LearnButton:hover {\n  background-color: #482299;\n}\n.LearnButton1 {\n  margin-left: 3%;\n  color: white;\n  font-size: larger;\n  font-weight: bolder;\n  border-width: 0.3rem;\n}\n.LearnButton1:hover {\n  background-color: #482299;\n}\n.LearnButton:hover .Space {\n  padding-top: 3%;\n}\n\n.Space2 {\n  margin-top: 3%;\n  width: 85rem;\n  height: 35rem;\n}\n\n.Cards {\n  height: 20rem;\n  width: 45%;\n  display: inline-block;\n  margin-left: 1rem;\n}\n.Cards1 {\n  height: 20rem;\n  width: 45%;\n\n  float: right;\n}\n.Link {\n  color: white;\n  text-decoration: none;\n}\n\n.ModalButton {\n  margin-top: 10%;\n  font-size: larger;\n}\n.ModalBody {\n  height: 30rem;\n}\n\n.Div {\n  margin-bottom: 6%;\n}\n\n.Join {\n  margin-top: 3%;\n  font-size: xx-large;\n}\n.Link2 {\n  text-decoration: none;\n}\n\n.center {\n  position: absolute;\n  top: 250%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.card {\n  width: 75rem;\n  height: 30rem;\n  background-color: #fff;\n  background: linear-gradient(#f8f8f8, #fff);\n  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  overflow: hidden;\n  position: relative;\n  margin: 1.5rem;\n}\n\n.card h1 {\n  text-align: center;\n}\n\n.card .additional {\n  position: absolute;\n  width: 150px;\n  height: 100%;\n  background: linear-gradient(#de685e, #ee786e);\n  transition: width 0.4s;\n  overflow: hidden;\n  z-index: 2;\n}\n\n.card.green .additional {\n  background: linear-gradient(#92bca6, #a2ccb6);\n}\n\n.card:hover .additional {\n  width: 100%;\n  border-radius: 0 5px 5px 0;\n}\n\n.card .additional .user-card {\n  width: 150px;\n  height: 100%;\n  position: relative;\n  float: left;\n}\n\n.card .additional .user-card::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 10%;\n  right: -2px;\n  height: 80%;\n  border-left: 2px solid rgba(0, 0, 0, 0.025);\n}\n\n.card .additional .user-card .level,\n.card .additional .user-card .points {\n  top: 15%;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 0.75em;\n  font-weight: bold;\n  background: rgba(0, 0, 0, 0.15);\n  padding: 0.125rem 0.75rem;\n  border-radius: 100px;\n  white-space: nowrap;\n}\n\n.card .additional .user-card .points {\n  top: 85%;\n}\n\n.card .additional .user-card svg {\n  top: 50%;\n}\n\n.card .additional .more-info {\n  width: 300px;\n  float: left;\n  position: absolute;\n  left: 150px;\n  height: 100%;\n}\n\n.card .additional .more-info h1 {\n  color: #fff;\n  margin-bottom: 0;\n}\n\n.card.green .additional .more-info h1 {\n  color: #224c36;\n}\n\n.card .additional .coords {\n  margin: 0 1rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n.card.green .additional .coords {\n  color: #325c46;\n}\n\n.card .additional .coords span + span {\n  float: right;\n}\n\n.card .additional .stats {\n  font-size: 2rem;\n  display: flex;\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  right: 1rem;\n  top: auto;\n  color: #fff;\n}\n\n.card.green .additional .stats {\n  color: #325c46;\n}\n\n.card .additional .stats > div {\n  flex: 1 1;\n  text-align: center;\n}\n\n.card .additional .stats i {\n  display: block;\n}\n\n.card .additional .stats div.title {\n  font-size: 0.75rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.card .additional .stats div.value {\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1.5rem;\n}\n\n.card .additional .stats div.value.infinity {\n  font-size: 2.5rem;\n}\n\n.card .general {\n  width: 300px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 1rem;\n  padding-top: 0;\n}\n\n.card .general .more {\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  font-size: 0.9em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=main.1c3fc9d7bab143fc8192.hot-update.js.map