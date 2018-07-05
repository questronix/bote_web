const express = require('express');
const router = express.Router();

const Ajax = require('../common/services/Ajax');

router.get('/', (req, res, next)=>{
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/index');
  else res.render('web/index');
});

module.exports = router;