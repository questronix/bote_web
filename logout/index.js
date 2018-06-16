const express = require('express');
const router = express.Router();

const ajax = require('../common/services/Ajax');

router.post('/', (req, res, next)=>{
  ajax.setOptions({
    url: `${process.env.CORE_URL}/logout`
  });
  ajax.post(req.body)
  .then(data=>{
    // res.redirect(localhost:PORT/login).status(200);
    res.json(data);
  }).catch(error=>{
    res.json(error);
  });
});

module.exports = router;