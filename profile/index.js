const express = require('express');
const router = express.Router();
const ajax = require('../common/services/Ajax');

// router.get('/', (req, res, next) => {
//   // redirect to own profile
// });

router.get('/me', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/me`,
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

// router.get('/:username/following', (req, res, next) => {
//   ajax.setOptions({
//     url: `${process.env.CORE_URL}/profile/${req.params.username}`
//   });
//   ajax.get()
//   // used to get the stringified body of the response
//   // .then( data => {
//   //   return JSON.parse(data.body);
//   // })
//   .then( data => {
//     // if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/following', data.user);
//     // else res.render('web/following', data.user);
//     res.send(data);
//   })
//   .catch( error => {
//     res.json(error);
//   })
// });

// router.get('/:username/followers', (req, res, next) => {
//   ajax.setOptions({
//     url: `${process.env.CORE_URL}/profile/${req.params.username}/followers`
//   });
//   ajax.get()
//   // used to get the stringified body of the response
//   // .then( data => {
//   //   return JSON.parse(data.body);
//   // })
//   .then( data => {
//     console.log(typeof data);
//     // if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/followers', data.user);
//     // else res.render('web/followers', data.user);
//     res.send(data);
//   })
//   .catch( error => {
//     res.json(error);
//   })
// });

module.exports = router;