const express = require('express');
const router = express.Router();
const ajax = require('../Common/services/Ajax');


router.get('/', (req, res, next)=> {
  res.render('mobile/notification');
});


module.exports = router;