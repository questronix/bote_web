const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{

  res.render('mobile/index');
});

router.get('/login', (req, res, next)=>{

  res.render('web/index');
});

router.get('/login', (req, res, next)=>{
  res.render('web/login');
});

router.get('/web/dashboard', (req, res, next)=>{
  res.render('web/dashboard');
});


router.get('/mobile/login', (req, res, next)=>{
  res.render('mobile/login');
});

router.get('/mobile/dashboard', (req, res, next)=>{
  res.render('mobile/dashboard');
});
module.exports = router;