const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/cart');
  else res.render('web/cart');
});

router.get('/', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/users/${req.user.username}/cart`,
    headers: req.headers
  });
  ajax.get()
  .then(data => {
    res.send(data);
  })
  .catch( error => {
    res.json(error);
  })
});

module.exports = router;
