var mongoose = require('mongoose')

var edicoesSchema = new mongoose.Schema({
    _id : String,
    anoEdição : String,
    organizador: String,
    vencedor: String,
    musicas: [{
        id: String,
        link: String,
        titulo: String,
        pais: String,
        compositor: String,
        intérprete: String
    }]
})

module.exports = mongoose.model('edicoes', edicoesSchema)