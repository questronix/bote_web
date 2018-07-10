const express = require('express');
const router = express.Router();

const ajax = require('../Common/services/Ajax');

router.post('/', (req, res, next)=>{
  ajax.setOptions({
    url: `${process.env.CORE_URL}/logout`
  });
  ajax.post(req.session).then(data=>{
    res.json(data);
  }).catch(error=>{
    res.json(error);
  });
});

module.exports = router;