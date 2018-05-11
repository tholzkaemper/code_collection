const express = require('express');
const router = express.Router();

router.get('/example', function(req, res, next) {
    res.render('example', 
    {
        resolution: resolution,
        date_from: dateFrom,
        date_to: dateTo,
        consumption_data: consumptionData
    });
});

module.exports = router;