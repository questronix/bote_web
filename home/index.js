const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.render('mobile/index');
});

router.get('/login', (req, res, next)=>{
  res.render('mobile/login');
});

router.get('/dashboard', (req, res, next)=>{
  res.render('mobile/dashboard');
});
module.exports = router;