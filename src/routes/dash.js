var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/publicar/:idUsuario", function (req, res) {
    dashController.publicar(req, res);
});
router.get("/contar-votos", dashController.contarVotos);
module.exports = router;

router.get("/listarComentarios", dashController.listarComentarios);
module.exports = router;
