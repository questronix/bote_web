const express = require('express');
const router = express.Router();

const ajax = require('../common/services/Ajax');

router.get('/', (req, res, next)=>{
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/index');
  else res.render('web/profile');
});

module.exports = router;