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

const $form = document.querySelector('form');
const $a = document.querySelector('#a');
const $b = document.querySelector('#b');
const $c = document.querySelector('#c');
const $x1 = document.querySelector('#x1');
const $x2 = document.querySelector('#x2');

function bhaskara() {
  const a = $a.value;
  const b = $b.value;
  const c = $c.value;

  const delta = b * b - 4 * a * c;

  if (!a || !b || !c) {
    createAlert('Insira os valores de a, b e c');
  } else if (a == 0) {
    createAlert('O valor de <strong>a</strong>, deve ser diferente de 0');
  } else if (delta < 0) {
    createAlert('Sem raízes reais');
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    $x1.value = x1;
    $x2.value = x2;
  }
}

function createAlert(msg) {
  document
    .querySelector('body')
    .insertAdjacentHTML('beforebegin', `<div class='alert'>${msg}</div>`);

  setTimeout(function () {
    deleteAlert();
  }, 3000);
}

function deleteAlert() {
  const list = document.querySelectorAll('.alert');
  for (const item of list) {
    item.remove();
  }
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  bhaskara();
});

