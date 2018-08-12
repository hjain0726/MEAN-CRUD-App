var express = require('express');
var testOperations = require('../db/testoperations');
var router = express.Router();

router.post('/postdata', (req, res) => {
    var obj = req.body;
    testOperations.savedata(obj, res);
});

router.get('/givedata', (req, res) => {
    testOperations.showdata(res);
});

router.put('/:id', (req, res) => {
    var id = req.params.id;
    var obj = req.body;
    testOperations.updateit(id, obj, res);
});

router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    testOperations.deleteit(id, res);
});
module.exports = router;