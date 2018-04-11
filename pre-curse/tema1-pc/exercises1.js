// VAR, LOOPS, CONDITIONALS

// a) Declara tu nombre y muéstralo por consola:

function showName(name){
	console.log(name);
}

var name = "Lilam";
showName(name);

// b) Declara tu edad y muéstralo por consola:

function showAge(age){
	console.log(age);
}

var age = 35;
showAge(age);

// c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:

function showInfo(info){
	console.log(info);
}

var info = ["Lilam", "Giménez", 35];
showInfo(info);

// d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:

function showData(data){
	console.log(data);
}

var data = {"name": "Lilam", "age": 21};
showData(data);

// e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.

function showInfoDetail(info){
	info.forEach(i => console.log(i));
}

showInfoDetail(info);

// f) Crea una estructura condicional que imprima el número mayor entre dos números.

var a = 25;
var b = 12;

function showBiggerNum(a, b){
	if (a > b){
		console.log(a);
	} else if (b > a){
		console.log(b);
	} 
}

showBiggerNum(a, b);

// f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

function showBiggerEqual(a, b){
	if (a > b){
		console.log(a);
	} else if (b > a){
		console.log(b);
	} else if (a == b) {
		console.log("The numbers are equal");
	}
}

showBiggerEqual(a, b);

// g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

function showNumbers(numbers){
	for (var i = 0; i < numbers.length; i++){
		if (i == 3){
			console.log("Whe are in the middle of loop");
		}
	}
}

var numbers = [1,2,3,4,5];
showNumbers(numbers);


// g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error

function checkData(myName, myAge){
	if(myName != "Lilam" && myAge != 35){
		console.log("this is not you!");
	} else {
		console.log("Hi!! Glad to see u again!");
	}
}

var myName = "Lilam";
var myAge = 35;

checkData(myName, myAge);


// g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

function findData(data, search){
	data.forEach(d => {

		if(d == search){
			console.log("We find your data! " + d);
		}

	});
}

var data = ["Lilam", "Giménez", 35];
var search = "Giménez";

findData(data, search);

// Methods

// a) Puedes contar cuantas letras tiene tu nombre?

function showNameLength(name){
	var len = name.length;
	var myName = "My name has " + len + " letters";

	console.log(myName);
}

var name = "Lilam";
showNameLength(name);

// b) Añade tu apellido e indica en que posición se encuentra

function showLastNamePos(fullName){
	var myString = "Your first last name starts on possition " + fullName.indexOf("Giménez");

	console.log(myString);
}

var fullName = name.concat(" Giménez");
showLastNamePos(fullName);

// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

function showName(fullName){
	var pos = fullName.indexOf(" ");
	myString = "My name is " + fullName.substr(0, pos);

	console.log(myString);
}

showName(fullName);

// d) Ahora, solo tu apellido.

function showLastName(fullName){
	var pos = fullName.indexOf(" ");
	myString = "My lastname is " + fullName.substr(pos +1);
	console.log(myString);
}

showLastName(fullName);

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

function showFullLastName(fullName){
	var pos = fullName.indexOf(" ");
	myFirstString = fullName.substr(pos +1);
	console.log(fullName + ", " + myFirstString);
}

showFullLastName(fullName);

// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

function showNameMr(fullName){
	var pos = fullName.indexOf(" ");
	var name = fullName.substr(0, pos +1);
	var myNewString = fullName.replace(name, "Mr. ");
	console.log(myNewString);
}

showNameMr(fullName);

// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

function showUcaseName(fullName){
	var pos = fullName.indexOf(" ");
	mySelection = fullName.substr(pos +1).toUpperCase();
	console.log(mySelection);
}

showUcaseName(fullName);

// g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

function showMessage(fullName){
	var pos = fullName.indexOf(" ");
	var myFirstString = fullName.substr(0, pos);
	var something = myFirstString + " is awesome"
	console.log(something); // "Tony is awesome"
}

showMessage(fullName);

// h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

function showFirstLastNameLetters(fullName){
	var pos = fullName.indexOf(" ");
	var name = fullName.substr(0, pos);
	var lastName = fullName.substr(pos +1);
	var myFirstLastnameLetters = name[0] + "." + lastName[0] + ".";
	console.log(myFirstLastnameLetters); 
}

showFirstLastNameLetters(fullName);


//Arrays

// a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

function showNameArray(fullName){
	fullName = fullName.replace(" ","").toUpperCase();
	var myName = fullName.split("").join("/");
	console.log(myName); // T/O/N/Y/S/T/A/R/K
}

showNameArray(fullName);

// b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

function showLastNameArray(fullName){
	var pos = fullName.indexOf(" ");
	var lastName = fullName.substr(pos +1).toUpperCase();
	var myName = lastName.split("").join("|");
	console.log(myName) // S|T|A|R|K	
}

showLastNameArray(fullName);


// c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

function showNameLetterPos(fullName){
	var pos = fullName.indexOf(" ");
	var name = fullName.substr(0, pos).toUpperCase().split("");
	var myNameArr = new Array();
	for (var i = 0; i < name.length; i++){
		myNameArr.push(i + 1 + "º " + name[i]);
	}
	var myName = myNameArr.join(", ");

	console.log(myName) // 1º T, 2º O, 3º N, 4º Y
}

showNameLetterPos(fullName);

// d)Como en el ejercicio anterior, pero seleccionando tu apellido

function showLastNameLettersPos(fullName){
	var pos = fullName.indexOf(" ");
	fullName = fullName.replace(" ","").toUpperCase();
	var myName = fullName.split("");
	var myNameArr = new Array();
	for (var i = pos; i < myName.length; i++){
		myNameArr.push(i + 1 + "º " + myName[i]);
	}
	var myLastName = myNameArr.join(", ");

	console.log(myLastName) // 5º S, 6º T, 7º A, 8º R, 9º K
}

showLastNameLettersPos(fullName);

// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

console.log(myInitials) // T.S

// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

console.log(mySelector) // My name is TONY and i'm 40 years old

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York

// h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

myCityAdd() // City added to array! => Tony, Stark, 40, New York
myCityDelete() // City deleted! => Tony, Stark, 40

// j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp

// k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp

// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

//numbers = [...]
//var multByTwo = numbers.map(...)
// l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

//var num = 3; // cada número se multiplicará por 3
//function multByNum(num){
//    var arrayMult = numbers.map(...)
//    return arrayMult
//}
// Resource: https://www.w3schools.com/jsref/jsref_map.asp

// m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp

// n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.

// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark


// Numbers

// a) Que hora es? Declara la hora como número y devuelvela como String



console.log(myString + myNumberStringify) // I'ts 10.45 of morning
// Hint => https://www.w3schools.com/jsref/jsref_tostring_number.asp

// b) Nono, que hora exactamente? Dime la hora sin minutos

console.log(myString) // It's around 10 of morning
// c) Ahora, declara tu hora y muéstrala redondeada.

console.log(...(10.34)) // 11!

// Hint => https://www.w3schools.com/jsref/jsref_round.asp

// d) Hagamos una calculadora. Primero, la suma.

console.log(sum) //The sum of 7+3 is 10

// d1) Añade la resta...

console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4 

// d2) Y la multiplicación

console.log(sum + rest + mult) // 10, 4 and 21

// d3) Por ultimo, la división

console.log(sum + rest + mult + div) // 10, 4, 21 and 2.3

// d4) Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(10*"hour") // ....?!
// e) Podemos controlar este error con un condicional if?

console.log(10*"hour") // You can't do this operation!





