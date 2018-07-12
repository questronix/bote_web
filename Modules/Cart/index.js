const express = require('express');
const router = express.Router();

const ajax = require('../Common/services/Ajax');

/* view cart */
router.get('/', (req, res, next) => {
  if(req.headers["x-access-token"]){
    ajax.setOptions({
      url: `${process.env.CORE_URL}/cart`,
      headers: req.headers
    }).get()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
  }else{
    if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/cart');
    else res.render('web/cart');
  }
});

/* add to cart */
router.post('/', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/cart`,
    headers: req.headers
  }).post(req.body)
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    res.json(error);
  });
});

/* get item from cart */
router.get('/items/:item_id', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/cart/items/${req.params.item_id}`,
    headers: req.headers
  }).get()
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    res.json(error);
  });
});

/* update item in cart */
router.put('/items/:item_id', (req, res, next) => {
  ajax.setOptions({
    url: `${process.env.CORE_URL}/cart/items/${req.params.item_id}`,
    headers: req.headers
  }).put(req.body)
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    res.json(error);
  });
});

module.exports = router;