const express = require('express');
const router = express.Router();
const ajax = require('../common/services/Ajax');


router.get('/', (req, res, next)=> {
  res.render('mobile/barProfile');
});


module.exports = router;