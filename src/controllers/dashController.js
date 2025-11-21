var dashModel = require("../models/dashModel");


  function publicar(req, res) {
  console.log("Controller publicar - req.body:", req.body);
  var idUsuario = req.params.idUsuario;
  var descricao = req.body.comentario;
  var resposta = req.body.gostou_anime;

  dashModel.publicar(descricao, resposta, idUsuario)
    .then(resultado => res.json(resultado))
    .catch(erro => {
      console.error("Erro publicar:", erro);
      res.status(500).json(erro);
    });
}

function contarVotos(req, res) {
    dashModel.contarVotos()
        .then(resultado => {
            res.json(resultado[0]); 
        })
        .catch(erro => {
            console.error("Erro ao contar votos:", erro);
            res.status(500).json(erro);
        });
}


module.exports = {
    publicar, 
    contarVotos
};