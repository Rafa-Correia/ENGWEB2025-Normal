var edicoes = require('../models/edicoes')

module.exports.getEdicoes = () => {
    return edicoes.find().select({id: 1, anoEdição: 1, organizacao: 1, vencedor: 1}).exec()
}

module.exports.getEdicoesId = (id) => {
    return edicoes.findById(id).exec()
}

module.exports.getEdicoesOrg = (org) => {
    return edicoes.find({organizacao: org}).select({anoEdição: 1, organizacao: 1, vencedor: 1}).exec()
}

module.exports.getPaisesOrg = (org) => {
    return edicoes.aggregate([
      {
        $group: {
          _id: "$organizacao",
          anos: { $push: "$anoEdição" }
        }
      },
      {
        $project: {
          _id: 0,
          pais: "$_id",
          anos: 1
        }
      },
      { $sort: { pais: 1 } }
    ]).exec()
}

module.exports.getPaisesVenc = (venc) => {
    return edicoes.aggregate([
      {
        $group: {
          _id: "$vencedor",
          anos: { $push: "$anoEdição" }
        }
      },
      {
        $project: {
          _id: 0,
          pais: "$_id",
          anos: 1
        }
      },
      { $sort: { pais: 1 } }
    ]).exec()
}

module.exports.createEdicao = (edicao) => {
    const ed = new edicoes({...edicao})
    return ed.save()
}

module.exports.deleteEdicao = (id) => {
    return edicoes.findByIdAndDelete(id).exec()
}

module.exports.updateEdicao = (id, edicao) => {
    return edicoes.findByIdAndUpdate(id, {...edicao})
}

module.exports.getInterpretes = () => {
    return edicoes.aggregate([
      { $unwind: "$musicas" },
      {
        $project: {
          nome: "$musicas.intérprete",
          pais: "$musicas.país"
        }
      },
      {
        $group: {
          _id: { nome: "$nome", pais: "$pais" }
        }
      },
      {
        $project: {
          _id: 0,
          nome: "$_id.nome",
          pais: "$_id.pais"
        }
      },
      { $sort: { nome: 1 } }
    ]).exec()
}