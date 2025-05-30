var express = require('express');
var router = express.Router();

var edicoesController = require('../controllers/edicoes')

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.org) {
        edicoesController.getEdicoesOrg(req.query.org)
            .then(data => {
                res.status(200).jsonp(data)
            })
            .catch(err => {
                res.status(500).jsonp(err)
            })
    }
    else {
        edicoesController.getEdicoes()
            .then(data => {
                res.status(200).jsonp(data)
            })
            .catch(err => {
                res.status(500).jsonp(err)
            })
    }
});

router.get('/:id', (req, res, next) => {
    edicoesController.getEdicoesId(req.params.id)
        .then(data => {
            res.status(200).jsonp(data)
        })
        .catch(err => {
            res.status(500).jsonp(err)
        })
})

router.post('/', (req, res, next) => {
    edicoesController.createEdicao(req.body)
        .then(data => {
            res.status(200).jsonp(data)
        })
        .catch(err => {
            res.status(500).jsonp(err)
        })
})

router.delete('/:id', (req, res, next) => {
    edicoesController.deleteEdicao(req.params.id)
        .then(data => {
            res.status(200).jsonp(data)
        })
        .catch(err => {
            res.status(500).jsonp(err)
        })
})

router.put('/:id', (req, res, next) => {
    edicoesController.updateEdicao(req.params.id, req.body)
        .then(data => {
            res.status(200).jsonp(data)
        })
        .catch(err => {
            res.status(500).jsonp(err)
        })
})

module.exports = router;