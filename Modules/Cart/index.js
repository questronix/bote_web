const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/cart');
  else res.render('web/cart');
});

module.exports = router;
