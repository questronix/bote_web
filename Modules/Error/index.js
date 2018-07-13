const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.baseUrl.indexOf('mobile') > -1) res.render('mobile/error');
    else res.render('web/error');
});

module.exports = router;