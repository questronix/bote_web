/**
 * Ken Crucillo
 * 
 * Config to load all Vue components in webpack automatically
 */
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src/pages');

const jsFilesToInject = {
  home: [`${APP_DIR}/home/web/index.js`],
  login: [`${APP_DIR}/Login/web/index.js`],
  dashboard: [`${APP_DIR}/dashboard/web/index.js`]
};

module.exports.entries = jsFilesToInject;