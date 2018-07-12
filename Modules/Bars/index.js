const express = require('express');
const router = express.Router();
const ajax = require('../Common/services/Ajax');


router.get('/', (req, res, next)=> {
  if(req.baseUrl.indexOf('mobile') > -1){
    if (req.query.id)
      res.render('mobile/bars');
    else res.render('mobile/barProfile');  
  }else{
    res.render('web/bars/barProfile');
  }
  
});

module.exports = router;