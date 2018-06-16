const express = require('express');
const router = express.Router();

router.get('/mobile', (req, res, next)=>{

  res.render('mobile/index');
});

router.get('/', (req, res, next)=>{
  res.render('web/index');
});

router.get('/dashboard', (req, res, next)=>{
  res.render('web/dashboard');
});

router.get('/mobile/dashboard', (req, res, next)=>{
  res.render('mobile/dashboard');
});
module.exports = router;