var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', (req, res, next) => {
    axios.get('http://localhost:25000/edicoes')
        .then(ans => {
            res.render('edicoesList', {tit: "Edições de Eurovisão", editionList: ans.data})
        })
        .catch(err => {
            res.render('error', {error: err})
        })
})

router.get('/:id', (req, res, next) => {
    axios.get(`http://localhost:25000/edicoes/${req.params.id}`)
        .then(ans => {
            res.render('edicaoSingle', {tit: `Edição ${ans.data._id}`, edition: ans.data})
        })
        .catch(err => {
            res.render('error', {error: err})
        })
})

module.exports = router