var express = require('express');
var router = express.Router();

var edicoesController = require('../controllers/edicoes')

router.get('/', (req, res, next) => {
    if(req.query.papel) {
        if(req.query.papel === "org") {
            edicoesController.getPaisesOrg()
                .then(data => {
                    res.status(200).jsonp(data)
                })
                .catch(err => {
                    res.status(500).jsonp(err)
                })
        }
        else if (req.query.papel === "venc") {
            edicoesController.getPaisesVenc()
                .then(data => {
                    res.status(200).jsonp(data)
                })
                .catch(err => {
                    res.status(500).jsonp(err)
                })
        }
        else {
            res.status(404).jsonp({err: "Invalid value for field 'papel' (must be 'org' / 'venc')!"})
        }
    }
    else {
        res.status(404).jsonp({err: "No field 'papel' on query!"})
    }
})

module.exports = router