var perguntas = []; 
let pontuacao = 0;    


var hashiras = [
    "Giyu Tomioka (Água)",
    "Kyojuro Rengoku (Chama)",
    "Tengen Uzui (Som)"
];

var descricoes = [
    "Você é calmo, estratégico e mantém a compostura — assim como o Hashira da Água.",
    "Você é intenso, determinado e corajoso — como o Hashira das Chamas!",
    "Você é rápido, imprevisível e estiloso — igual ao Hashira do Som."
];


function calcularHashira() {
if(p1.value == '#' || p2.value == '#' || p3.value == '#'){
    alert('Verique se todas as opções estão selecionadas!')
}
else{
    pontuacao = 0;
    perguntas.length = 0;

    
    perguntas.push(Number(p1.value));
    perguntas.push(Number(p2.value));
    perguntas.push(Number(p3.value));

    
    for (let i = 0; i < perguntas.length; i++) {
        pontuacao += perguntas[i];
    }

    let indice = 0;

    if (pontuacao <= 4) {
        indice = 0;
    } 
    else if (pontuacao <= 7) {
        indice = 1;
    } 
    else {
        indice = 2;
    }

    
    resultado.innerHTML = "Você combina com: " + hashiras[indice];
    descricao.innerHTML = `${descricoes[indice]} `;
}
}
