const express = require('express');
const router = express.Router();
const ajax = require('../Common/services/Ajax');

router.get('/:username', (req, res, next) => {
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/profile');
  else res.render('web/profile');
});

router.get('/:username', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.params.username}`,
    headers: req.headers
  });
  ajax.get()
  .then( data => {
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

router.get('/:username/following', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.params.username}`,
    headers: req.headers
  });
  ajax.get()
  .then( data => {
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

router.get('/:username/followers', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.params.username}/followers`,
    headers: req.headers
  });
  ajax.get()
  .then( data => {
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

/* /profile/:username/shelf */
router.get('/:username/shelf', (req, res, next) => {
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/shelf');
  else res.render('web/shelf');
});

router.get('/:username/shelf', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.params.username}/bottles`,
    headers: req.headers
  });
  ajax.get()
  .then( data => {
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

/* /profile/:username/bars : must render user's bars visited */
router.get('/:username/bars', (req, res, next) => {
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/bars');
  else res.render('web/bars');
});

router.get('/:username/bars', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.params.username}/bars`,
    headers: req.headers
  });
  ajax.get()
  .then( data => {
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

module.exports = router;