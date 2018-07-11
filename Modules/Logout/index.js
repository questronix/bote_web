const express = require('express');
const router = express.Router();

const ajax = require('../Common/services/Ajax');

router.post('/', (req, res, next)=>{
  ajax.setOptions({
    url: `${process.env.CORE_URL}/logout`,
    headers: req.headers
  });
  ajax.post(null)
  .then(data=>{
    res.json(data);
  }).catch(error=>{
    res.json(error);
  });
});

module.exports = router;