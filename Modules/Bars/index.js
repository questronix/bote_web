const express = require('express');
const router = express.Router();
const ajax = require('../Common/services/Ajax');


router.put('/', (req, res, next)=> {
  if (req.headers['x-access-token']){
    ajax.setOptions({
      url: `${process.env.CORE_URL}/bars`,
      headers: req.headers
    })
    .put(req.query)
    .then( data=>{ res.json(data) })
    .catch(error=>{res.json(error)})
  }else{
    if(req.baseUrl.indexOf('mobile') > -1)
      res.render('mobile/bars');
    else
      res.render('web/bars');
  }
});

router.get('/:barname', (req, res)=>{
  if (req.headers['x-access-token']){
    ajax.setOptions({
      url: `${process.env.CORE_URL}/bars/${req.params.barname}`,
      headers: req.headers
    })
    .get()
    .then( data=>{ res.json(data) })
    .catch(error=>{res.json(error)})
  }else{
    if(req.baseUrl.indexOf('mobile') > -1)
      res.render('mobile/bars');
    else
      res.render('web/bars');
  }
})

module.exports = router;