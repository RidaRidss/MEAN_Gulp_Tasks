/// <reference path='../../../typings/tsd.d.ts' />
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/routingPage', function (req, res, next) {
    res.render('index', { Username: 'From Express using Routing' });
});
module.exports = router;
