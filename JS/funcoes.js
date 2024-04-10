function somar(){
    var num1;//Declarando uma variável
    var num2;
    var res; 
    //Coletando dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando cálculos
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos número é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável
    var num2;
    var res; 
    //Coletando dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando cálculos
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos número é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável
    var num2;
    var res; 
    //Coletando dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando cálculos
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos número é: " + res;
}//fim do método

function divisao(){
    var num1;//Declarando uma variável
    var num2;
    var res; 
    //Coletando dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando cálculos
    res = num1 / num2;
    if(num2 <= 0){
        res = "Impossível dividir por 0"
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos número é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;    

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

function potencia(){
    var num1;//Declarando uma variável
    var num2;
    var res; 
    //Coletando dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando cálculos
    res = Math.pow(num1, num2);
    document.getElementById("resultado").innerHTML = "A potênciação dos número é: " + res;
}//fim do método

function raiz(){
    var num1;//Declarando uma variável
    var num2;
    
    //Coletando dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    //Realizando cálculos
    resNum1 = "Raiz de " + num1 + " é: " + Math.sqrt(num1);
    resNum2 = "Raiz de " + num1 + " é: " +  Math.sqrt(num2);
    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

function bhaskara(){
  var a;
  var b;
  var c;
  var delta;
  var x1;
  var x2;
  var resposta;

  a = parseInt(document.getElementById("tpNume").value);
  b = parseInt(document.getElementById("tsNume").value);
  c = parseInt(document.getElementById("ttNum").value);

  delta = Math.pow(b,2) - 4 * a * c;

  if (delta <= 0){
      resposta = "Impossível fazer a operação. O resultado de delta não pode ser menor ou igual a zero";
  }else{

      x1 = (-b + Math.sqrt(delta)) / (2 * a)
      x2 = (-b - Math.sqrt(delta)) / (2 * a)
  }
     
  document.getElementById("resultado").innerHTML = "Delta: " + delta + " \n\nX1: " + x1 + "\n\nX2: " + x2;
}//fim do metodo

function imparPar(){
  var num1;//Declarando uma variável
  var num2;
  var res;
  var res2;

  //Coletando dados dos campos
  num1 = parseInt(document.getElementById("tpNum").value);
  num2 = parseInt(document.getElementById("tsNum").value);
 
  //Realizando cálculos
  if(num1%2 == 0){
    res = "Par";    
  }
  else{
    res = "Ímpar";    
  }  

  if(num2%2 == 1){
    res2 = "Par";    
  }
  else{
    res2 = "Ímpar";    
  }  
  document.getElementById("resultado").innerHTML = "O número " + num1 + " é: " + res + "\n\n" + "O número " + num2 + " é: " + res2;
}//fim do método

function negativoPositivo(){
  var num1;//Declarando uma variável
  var num2;
  var res1;
  var res2;

  //Coletando dados dos campos
  num1 = parseInt(document.getElementById("tpNum").value);
  num2 = parseInt(document.getElementById("tsNum").value);

  //Cálculo
  if(num1 >= 1){
    res1 = "Positivo"
  }
  else if(num1 == 0){
    res1 = "Zero"
  }
  else{  
    res1 = "Negativo"
  }

  if(num2 >= 1){
    res2 = "Positivo"
  }
  else if(num2 == 0){
    res2 = "Zero"
  }
  else{  
    res2 = "Negativo"
  }
  document.getElementById("resultado").innerHTML = num1 + " é: " + res1 + "\n\n" + num2 + " é: " + res2;
}//fim do método

function ex1(){
  var res = 0;

  var res = "Impressão de números:\n ";

  for(i = 1; i <= 10; i++){
    res += "\nO " + i + "º" + " número é: " + i;
  }
  document.getElementById("resultado").value = res;
}//fim do método

function ex2(){
  var res = 0;
  var j = 1;

  var res = "Impressão de números pares entre 0 e 20:\n ";

  for(i = 1; i <= 20; i++){
   if(i%2 == 0){
     res += "\nO " + j + "º" + " número par entre 0 e 20 é: " + i;    
     j++;
    }
  }    
  document.getElementById("resultado").innerHTML = res;
}//fim do método

function ex3(){
  var soma = 0

  for(i = 1; i <= 100; i++){
     soma += i;
  }    
  document.getElementById("resultado").innerHTML = soma
}//fim do método

function ex4(){
  var vet = [];
  var posicao = 0;

  for(i = 1; i < 51; i++){
      if(i % 5 == 0){
          vet[posicao] = i;
          posicao += 1;
      }
  }
  document.getElementById("resultado").innerHTML = vet;
}//fim do método  

function ex5() {
  var numero = parseInt(document.getElementById("tpNum").value);
  var res = "Números de 1 até " + numero + ":";

  for (var i = 1; i <= numero; i++) {
      res += "\n" + i;
  }
  document.getElementById("resultado").innerHTML = res;
}//fim do método

function ex6() {
  var numero = parseInt(document.getElementById("tpNum").value);
  var soma = 0;

  for (var i = 1; i <= numero; i++) {
      soma += i;
  }
  document.getElementById("resultado").innerHTML = "A soma dos números de 1 até " + numero + " é: " + soma;
}//fim do método

function ex7() {
    var res = "Números primos de 1 a 20: ";
 
    for (var i = 2; i <= 20; i++) {
        if (isPrimo(i)) {
            res += i + " ";
        }
    }
    document.getElementById("resultado").innerHTML = res;
}
 
function isPrimo(numero) {
    for (var j = 2; j < numero; j++) {
        if (numero % j === 0) {
            return false;
        }
    }
    return numero !== 1;
}//fim método

function ex8(){
  var numero = parseInt(document.getElementById('tpNum').value);
  var divisores = 0;

  for (var i = 1 ; i <= numero ; i++)
    if(numero % i == 0)
   	  divisores++;

  if (divisores==2)
    document.getElementById("resultado").innerHTML = numero + ' é primo';
  else
    document.getElementById("resultado").innerHTML = numero + ' não é primo';
}//fim do método

function ex9(){
  var fatorial = parseInt(document.getElementById('tpNum').value);
  var resultado = fatorial;
  var primeiroMultipicador = fatorial - 1;

  //Validação
  if (isNaN(fatorial)) {
    return 'Não existe fatorial de um texto';
  }
 
  if (!Number.isInteger(fatorial) || fatorial < 0) {
      return 'Não existe fatorial de um número não natural';
  }
 
  if (fatorial === 0 || fatorial === 1) {
      return 1;
  }

  //Cálculo
  for(var i = primeiroMultipicador; i > 1; i--){
     resultado *= i;
  }
  document.getElementById("resultado").innerHTML = "O fatorial resultado fatorial de " + fatorial + " é: " + resultado;
}//fim do método

function ex10(){
  var fibonacci = [];
  fibonacci[0] = 1;
  fibonacci[1] = 1;
 
    for(i = 2; i < 10; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
 
    document.getElementById("resultado").innerHTML = fibonacci;
}//fim do método

function ex11(){
  var num;
  var numPar = [];
  var numImpar = [];
  var posPar = 0;
  var posImpar = 0;
 
  num = parseInt(document.getElementById("tpNum").value)
    
  for(i = 1; i < num + 1; i++){
      if(i == 1){
          numImpar[0] = i;
          posImpar = 1;
      }
      else if(i % 2 == 0){
          numPar[posPar] = i;
          posPar += 1;
      }
      else{
          numImpar[posImpar] = i;
          posImpar += 1;
      }
  }
 
  if(num < 1){
      devo = "Erro! Informe um número maior ou igual a 1!"
      document.getElementById("resultado").innerHTML = devo;
  }
  else{
      document.getElementById("resultado").innerHTML = "Número Pares: \n" + numPar + "\nNúmero Ímpares: \n" + numImpar;
  }
}//fim do método

function ex12(){
  var numero;
  var primo = [];
  var posicao = 0;
 
  numero = parseInt(document.getElementById("tpNum").value)
 
  for(i = 1; i < numero + 1; i++){
      if(i == 2 || i == 3 || i == 5 || i == 7){
          primo[posicao] = i;
      }
      else if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){
          continue
      }
      else{
          primo[posicao] = i;
      }
      posicao++
  }
 
  if(num < 2){ 
           document.getElementById("resultado").innerHTML = "Erro! Informe um número maior que 1!";
  }
  else{
       document.getElementById("resultado").innerHTML = primo;
  }
}//fim do método

function ex13(){
  var numero;
    var divisores = 0;
 
    numero = parseInt(document.getElementById("tpNum").value)
 
    for(i = 0; i < numero; i++){
        if(numero % i == 0){
            divisores += i;
        }
    }
 
    if(divisores == numero){
        document.getElementById("resultado").innerHTML = "Número Perfeito"
    }
    else{
        document.getElementById("resultado").innerHTML = "Não é um número perfeito"
    }
}//fim do método

