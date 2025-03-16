//Adicionar duas variaveis: Datas e Quantidade de dias
let dataEmissao = document.getElementById('input-emissao');
let qntDiasSelecionados = document.querySelectorAll('.dias');
let quantDiasCalcular;

//Puxar a quantidade de dias quando selecionado
qntDiasSelecionados.forEach((botao) => {
    botao.addEventListener("click", function () {
        quantDiasCalcular = parseInt(this.value); // Armazena o valor do botão clicado
    });
});
//Realizar o Calculo
function somatorioDias(dataString,dia){
    let data = new Date(dataString); // Converte a string para um objeto Date

    //let formatter = Intl.DateTimeFormat('pt-BR',{
     //   dateStyle:"long",
    //});

    //data.innerHTML = formatter.format(data);
    
    data.setDate(data.getDate() + dia + 1);

    
    return data;
}

//criação da função calcular
function calculo(){
    let text = document.getElementById('resposta');
    let dataValidade = somatorioDias(dataEmissao.value,quantDiasCalcular);
    

    if(dataEmissao.value && quantDiasCalcular){

        text.innerHTML = ("CND válida até:  " + dataValidade.toLocaleDateString("pt-BR"))

        console.log(somatorioDias(dataEmissao.value,quantDiasCalcular));

    } else {
        let text = document.getElementById('resposta');

        dataEmissao.value = '';
        text.innerHTML = ("Favor preencher formulario.");
    }
}

//resetar

function resetar(){
    let text = document.getElementById('resposta');
    //let resetInput = qntDiasSelecionados;

    dataEmissao.value = '';
    quantDiasCalcular = null;
    text.innerHTML = ("CND valida até: ");

}