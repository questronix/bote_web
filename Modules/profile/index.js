const express = require('express');
const router = express.Router();
const ajax = require('../common/services/Ajax');

// router.get('/', (req, res, next) => {
  // redirect to own profile
// });


router.get('/:username', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.params.username}`,
    headers: req.headers
  });
  ajax.get()
  .then( data => {
    console.log(data)
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

module.exports = router;