let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultados = Document.getElementById("resultado");


function calcular(){
    
    let adultos= inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value

    let qntdTotalDeCarne =carnePessoa(duracao) * adultos + (carnePessoa(duracao)/2 * criancas);
    let qntdTotalDeCerveja =cervejaPessoa(duracao) * adultos;
    let qntdTotalDeRefrigerante =refrigerantePessoa(duracao) * adultos + (refrigerantePessoa(duracao)/2 * criancas);

    resultados.innerHTML= `<P> ${qntdTotalDeCarne} g de carne</p>`
    resultados.innerHTML+= `<P> ${qntdTotalDeCerveja} ml de cerveja</p>`
    resultados.innerHTML+= `<P> ${qntdTotalDeRefrigerante} ml de refrigerante</p>`
}
function carnePessoa(duracao){

    if(duracao>=6){
        return 650;

    }else{
        return 500
    }
}

function cervejaPessoa(duracao){

    if(duracao>=6){
        return 10000;

    }else{
        return 30000;
    }
}
function refrigerantePessoa(duracao){

    if(duracao>=6){
        return 20000;

    }else{
        return 80000;
    }
}