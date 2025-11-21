var database = require("../database/config");

function publicar(descricao, resposta, idUsuario) {
  const instrucaoSql = `
    INSERT INTO Pergunta_avaliativa (gostou_anime, comentario, Usuario_idUsuario)
    VALUES (${resposta}, '${descricao}', ${idUsuario});
  `;
  console.log("SQL publicar:", instrucaoSql);
  return database.executar(instrucaoSql);
}
function contarVotos() {
    const instrucaoSql = `
        SELECT 
          SUM(IF(gostou_anime = 1, 1, 0)) AS votos_sim,
          SUM(IF(gostou_anime = 0, 1, 0)) AS votos_nao
        FROM Pergunta_avaliativa;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar, 
    contarVotos

}