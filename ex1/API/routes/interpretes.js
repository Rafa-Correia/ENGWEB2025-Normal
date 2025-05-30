var express = require('express');
var router = express.Router();

var edicoesController = require('../controllers/edicoes')

router.get('/', (req, res, next) => {
    edicoesController.getInterpretes()
        .then(data => {
            res.status(200).jsonp(data)
        })
        .catch(err => {
            res.status(500).jsonp(err)
        })
})

module.exports = router