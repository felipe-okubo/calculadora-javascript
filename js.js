var number1;
var number2;
var total;



number1 = document.getElementById("input01");
number2 = document.getElementById("input02");


function soma(){
total = parseInt(number1.value) + parseInt(number2.value);
alert (total);
}


function sub(){
total = parseInt(number1.value) - parseInt(number2.value);
alert (total);
}


function mult(){
total = parseInt(number1.value) * parseInt(number2.value);
alert (total);
}


function div(){
total = parseInt(number1.value) / parseInt(number2.value);
alert (total);
}


