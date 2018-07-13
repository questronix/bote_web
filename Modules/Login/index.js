const express = require('express');
const router = express.Router();

const ajax = require('../Common/services/Ajax');

router.get('/', (req, res, next) => {
  if(req.baseUrl.indexOf('mobile') > -1) res.render('mobile/login');
  else res.render('web/login');
});

router.post('/', (req, res, next)=>{
  ajax.setOptions({
    url: `${process.env.CORE_URL}/login`,
  });
  ajax.post(req.body).then(data=>{
    res.json(data);
  }).catch(error=>{
    res.json(error);
  });
});

module.exports = router;