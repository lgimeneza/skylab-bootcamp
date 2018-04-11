
//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function showMyname(myName){
    console.log("Hello " + myName);
}

showMyname("Lilam");

//b) Intenta retornar los valores en lugar de usar console.log

function returnMyname(myName){
    return "Hello " + myName;
}

console.log(returnMyname("Lilam"));

//c) Ahora, añade tu edad y concaténala al return

function returnMyMessage(myName, myAge){
    return "Hello " + myName + ", you are " + myAge + " years old";
}

console.log(returnMyMessage("Lilam", 35));

//d) Iguala tu función a una variable y ejecútala

var message = function returnMyMessage(myName, myAge){
    return "Hello " + myName + ", you are " + myAge + " years old";
}

console.log(message("Lilam", 35));

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados 

var age = function returnMyAge(myAge){
    return myAge;
}

var name = function returnMyName(myName){
    return myName;
}

console.log(name("IronMan ") + age(40) );

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.


var myRandomNumber = Math.floor(Math.random(10) * 10);

console.log(name("IronMan ") + (age(35) + myRandomNumber).toString());


//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

console.log(name("IronMan ") + (age(35) + myRandomNumber).toString());

function returnMessage(){
    
}