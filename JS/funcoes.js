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

function umDez(){
  var res = 0;

  var res = "Impressão de números:\n ";

  for(i = 1; i <= 10; i++){
    res += "\nO " + i + "º" + " número é: " + i;
  }
  document.getElementById("resultado").value = res;
}//fim do método

function parVinte(){
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

function calCem(){
  var soma = 0

  for(i = 1; i <= 100; i++){
     soma += i;
  }    
  document.getElementById("resultado").innerHTML = soma
}//fim do método
