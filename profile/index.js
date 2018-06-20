const express = require('express');
const router = express.Router();
const ajax = require('../common/services/Ajax');

// router.get('/', (req, res, next) => {
//   // redirect to own profile
// });

router.get('/:username', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/profile/${req.params.username}`
  });
  ajax.get()
  .then( data => {
    // if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/profile', data.user);
    // else res.render('web/profile', data.user);
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

router.get('/:username/following', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/profile/${req.params.username}`
  });
  ajax.get()
  .then( data => {
    // if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/following', data.user);
    // else res.render('web/following', data.user);
    res.json(data);
  })
  .catch( error => {
    res.json(error);
  })
});

// router.get('/:username/followers', (req, res, next) => {
//   ajax.setOptions({
//     url: `${process.env.CORE_URL}/profile/${req.params.username}/followers`
//   });
//   ajax.get()
//   .then( data => {
//     console.log(req.session);
//     if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/followers');
//     else res.render('web/followers');
//     res.json(data);
//   })
//   .catch( error => {
//     res.json(error);
//   })
// });

module.exports = router;