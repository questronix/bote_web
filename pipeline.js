/**
 * Ken Crucillo
 *
 * Config to load all Vue components in webpack automatically
 */
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src/pages');

const jsFilesToInject = {

  homeMobile: [`${APP_DIR}/Home/mobile/index.js`],
  loginMobile: [`${APP_DIR}/Login/mobile/index.js`],
  dashboardMobile: [`${APP_DIR}/Dashboard/mobile/index.js`],
  profileMobile: [`${APP_DIR}/Profile/mobile/index.js`],
  cartMobile: [`${APP_DIR}/Cart/mobile/index.js`],
  barProfileMobile: [`${APP_DIR}/BarProfile/mobile/index.js`],
  barsMobile: [`${APP_DIR}/Bars/mobile/index.js`],
  settingsMobile: [`${APP_DIR}/Settings/mobile/index.js`],
  inboxMobile: [`${APP_DIR}/Inbox/mobile/index.js`],
  notificationMobile: [`${APP_DIR}/Notification/mobile/index.js`],
  errorMobile: [`${APP_DIR}/Error/mobile/index.js`],

  

  homeWeb: [`${APP_DIR}/Home/web/index.js`],
  loginWeb: [`${APP_DIR}/Login/web/index.js`],
  dashboardWeb: [`${APP_DIR}/Dashboard/web/index.js`],
  profileWeb: [`${APP_DIR}/Profile/web/index.js`],
  shelfWeb: [`${APP_DIR}/Shelf/web/index.js`],
  errorWeb: [`${APP_DIR}/Error/web/index.js`],
  barsWeb: [`${APP_DIR}/Bars/web/index.js`],
  barProfileWeb: [`${APP_DIR}/BarProfile/web/index.js`],
  cartWeb: [`${APP_DIR}/Cart/web/index.js`]

};

module.exports.entries = jsFilesToInject;
