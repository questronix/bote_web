const express = require('express');
const router = express.Router();

const ajax = require('../common/services/Ajax');

router.get('/login', (req, res, next)=>{
  res.render('web/login');
});

router.get('/mobile/login', (req, res, next)=>{
  res.render('mobile/login');
});

router.post('/login', (req, res, next)=>{
  ajax.setOptions({
    url: `${process.env.CORE_URL}/login`
  });
  ajax.post(req.body).then(data=>{
    res.json(data).redirect('localhost:3000/mobile/dashboard');
  }).catch(error=>{
    res.json(error);
  });
});

module.exports = router;