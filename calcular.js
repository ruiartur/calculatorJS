function imprimeValor(valor) {
  var input = document.querySelector("#inputCalc");
  if(valor=='C'){
    input.innerText = "";
    return;
  }

  if(input.innerText == ""){
        if( isSinal(valor)==null || isSinal(valor)=='-'){
        input.innerText = valor;
      }
  }else {
    var expressao = verificaETrocaSinais(valor,input.innerText);
    if(expressao!=null){
      if(expressao !='apagarDuasUltimasOperacoes') {
        input.innerText = input.innerText.substring(0,input.innerText.length-1) + expressao;
      }else{
        input.innerText = input.innerText.substring(0,input.innerText.length-2) + valor;
      }
    }else{
        input.innerText =   input.innerText + valor;
    }
}
}

function calcula(){
var input = document.querySelector("#inputCalc");
var expressao = input.innerText;
expressao = expressao.replace(/x/g, '*');
input.innerText = eval(expressao);

}
