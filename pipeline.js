/**
 * Ken Crucillo
 * 
 * Config to load all Vue components in webpack automatically
 */
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src/pages');

const jsFilesToInject = {

  homeMobile: [`${APP_DIR}/home/mobile/index.js`],
  loginMobile: [`${APP_DIR}/Login/mobile/index.js`],
  dashboardMobile: [`${APP_DIR}/Dashboard/mobile/index.js`],

  homeWeb: [`${APP_DIR}/home/web/index.js`],
  loginWeb: [`${APP_DIR}/Login/web/index.js`],
  dashboardWeb: [`${APP_DIR}/dashboard/web/index.js`]

};

module.exports.entries = jsFilesToInject;