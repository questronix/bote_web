const express = require('express');
const router = express.Router();

const Ajax = require('../common/services/Ajax');

router.get('/', (req, res, next)=>{
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/index');

  else res.render('web/');
});

router.get('/session', (req, res)=>{
  Ajax.setOptions({
    url: `${process.env.CORE_URL}/login/session`,
    withCredentials: true
  });
  Ajax.get().then(data=>{
    res.send(data);
  }).catch(error=>{
    res.send(error);
  });
});

router.get('/profile/:username', (req, res)=>{
  Ajax.setOptions({
    url: `${process.env.CORE_URL}/profile/${req.params.username}`
  });
  Ajax.get().then(data=>{
    res.send(data);
  }).catch(error=>{
    res.send(error);
  });
});

module.exports = router;