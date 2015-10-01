/// <reference path='../../../typings/tsd.d.ts' />

import express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/routingPage', function(req, res, next) {
    res.render('index', {Username : 'From Express using Routing' });
});

export = router;