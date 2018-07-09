const express = require('express');
const router = express.Router();
const ajax = require('../Common/services/Ajax');


router.get('/', (req, res, next)=> {
  if (req.query.id)
    res.render('mobile/bars');
  else res.render('mobile/barProfile');
});

module.exports = router;