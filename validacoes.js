function isNumero(valor){
  var isNumero = isSinal(valor);
  if(valor!=null){
    return false;
  }else {

  }
}

function isSinal(valor){
  if(isOperacao(valor)!=null || valor=="="){
      return valor;
    }
      return null;
}

function isOperacao(valor) {
  if(valor =='+' || valor =='-' || valor=='/' || valor=='x'){
      return valor;
    }
      return null;
}



function verificaETrocaSinais(valor, texto) {
  var indiceUltimaLetra = texto.length-1;
  if(isOperacao(valor)!= null ){
    return trocarSinal(valor, texto, indiceUltimaLetra);
  }
  return null;
}

function trocarSinal(valor, texto, indiceUltimaLetra) {
  var ultimaLetra = isOperacao(texto[indiceUltimaLetra]);
  var penultimaLetra = null;
  if(texto.length > 2){
    penultimaLetra = isOperacao(texto[indiceUltimaLetra-1]);
  }
  if(ultimaLetra != null && penultimaLetra == null){
    if(isOperacao(valor)=='-' && (ultimaLetra =='/' || ultimaLetra=='x')){
      return ultimaLetra+valor;
    }else{
      return valor;
    }
  }else {
    if(ultimaLetra!=null && penultimaLetra!=null){
      return "apagarDuasUltimasOperacoes";
    }
  }
  return null;
}

function realizaOperacao(valorUm,valorDois, operacao){
  var resultado;
  var valor1 = parseInt(valorUm);
  var valor2 = parseInt(valorDois);
  switch (operacao) {
    case '-': resultado=valor1-valor2;
    return resultado;
    case '+': resultado=valor1+valor2;
    return resultado;
    case '/': resultado=valor1/valor2;
    return resultado;
    case 'x': resultado=valor1*valor2;
    return resultado;
    default:return null;

  }
}
