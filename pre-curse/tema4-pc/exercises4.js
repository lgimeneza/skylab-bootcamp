// ## Final Challenges (JS)!

//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
// muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), 
// además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9]
    for(var i = 0; i < nums.length-1; i++){
        console.log(i+1 + "ª pareja " + nums[i] * 2  + " - " + nums[i+1] * 2);
    }
}

showNums();
// output =>
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18

//a1) La funcion debería aceptar la array a tratar como argumento.

function showNums(){
    nums = Array.prototype.slice.call(arguments); //No recomentable
    nums.map( (x, i) => {
        (i<nums.length-1) ? console.log(i+1 + "ª pareja " + nums[i] * 2  + " - " + nums[i+1] * 2) : null;
    })
};

showNums(1,2,3,4,5,6,7,8,9);

// a2) Pasa también el numero a multiplicar a la función como argumento

function showNums(){
    
    var mult = arguments[arguments.length-1];
    nums = Array.prototype.slice.call(arguments);

    console.log("El número escogido es " + mult);
    nums.map( (x, i) => {
        (i<nums.length-1) ? console.log(i+1 + "ª pareja " + nums[i] * mult  + " - " + nums[i+1] * mult) : null;
    })
};

showNums(1,2,3,4,5,6,7,8,9,12);

// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

function showNums(){
    
    var mult = arguments[arguments.length-2];
    var limit = arguments[arguments.length-1];
    nums = Array.prototype.slice.call(arguments);

    console.log("El número escogido es " + mult);
    console.log("Se quieren mostrar las " + limit + " primeras parejas");
    nums.map( (x, i) => {
        (i<limit) ? console.log(i+1 + "ª pareja " + nums[i] * mult  + " - " + nums[i+1] * mult) : null;
    })
};

showNums(1,2,3,4,5,6,7,8,9,12,3);

// b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

function fibo(){
    var fib = [0, 1];
    for(var i=fib.length; i<10; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    console.log(fib.join(" ")); 
}

fibo();

// b2) Puedes añadir además, la posición de cada resultado?

function fibo(){
    var fib = [0, 1];
    for(var i=fib.length; i<10; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    
    fib.map( (x, i) => {
        console.log("Pos " + i + ": " + x )
    });
}

fibo();

// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

function fibo(){
    var fib = [0, 1];
    for(var i=fib.length; i<10; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    
    console.log(fib.map( (x, i) => "Pos " + i + ": " + x  ).join(" "));
}

fibo();

// b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibo(limit){
    var fib = [0, 1];
    for(var i=fib.length; i<limit; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    
    console.log(fib.map( (x, i) => "Pos " + i + ": " + x  ).join(" "));
}

fibo(10);

// b5) Ahora, muestra los resultados en forma piramidal:

function fiboPymamid(limit){
    var fib = [0, 1];
    for(var i=fib.length; i<limit; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    
    result = [];
    fib.forEach(x => {
        result.push(x);
        console.log(result.join(" "));
    });
    fib.forEach(x => {
        result.pop();
        console.log(result.join(" "));
    });

}

fiboPymamid(7);

/* c) Simple Scripting program. Crea un programa que transforme 
un número de 4 dígitos en otro diferente con las posiciones 
de los dígitos cambiadas, creandio un nuevo código 
El primer numero se traslada a la última posicion. 
El segundo, el tercero y el cuarto suben una posición.*/

var code = 3712;
function codeScript(code){
    code = code.toString().split("");
    code.push(code.shift());
    return Number(code.join(""));
}

var result = codeScript(code);

console.log(result);

/* c2) Ahora, el usuario debería poder introducir como parámetro dos códigos 
a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían 
encriptar en la misma función) */

var code1 = 3712;
var code2 = 3456;

function codeScript(code1, code2){

    var result = [];

    for (i=0;i<arguments.length;i++){
        var code = arguments[i].toString().split("");
        code.push(code.shift());
        result.push(Number(code.join("")));
    }

    return result;

}

var result = codeScript(code1, code2);

console.log(result);

/* c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, 
multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. 
(Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores) */

var code1 = 3112;
var code2 = 3432;

function codeScript(code1, code2){

    var result = [];

    for (i=0;i<arguments.length;i++){
        var code = arguments[i].toString().split("");
        code = code.map(x => {
            return x * 2;
        });
        code.push(code.shift());
        result.push(Number(code.join("")));
    }

    return result;

}

var result = codeScript(code1, code2);

console.log(result);

/* c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento 
un código encriptado (y correspondientemente multiplicado en el apartado c3) 
y nos devuelva el código desencriptado. */

var code1 = 1234;
var code2 = 4321;

function codeScript(code1, code2){

    for (i=0;i<arguments.length;i++){
        var result = encrypt(arguments[i]);
        console.log("Result encrypted: " + result);
        result = decrypt(result);
        console.log("Result decrypted: " + result);
    }

    function encrypt(num){
        var result = [];
        var code = num.toString().split("");
        code = code.map(x => {
            return x * 2;
        });
        code.push(code.shift());
        result.push(Number(code.join("")));

        return result;
    }
    
    function decrypt(num){
        var result = [];
        var code = num.toString().split("");
        code = code.map(x => {
            return x / 2;
        });
        code.unshift(code.pop());
        result.push(Number(code.join("")));

        return result;
    }

}

codeScript(code1, code2);

/* c5) Añade las dos funciones a la misma función padre, de forma que encripte 
y desencripte a la vez cuando termine de ejecutarse. */

// function codeScript(code1, code2){... codeDecrypt(code1Encrypt,code2Encrypt)}

//Done!

/* c6) El usuario podrá solo introducir letras, cada número del 0 al 9 
corresponderá a varias letras. Podéis seguir este esquema. */


function codeScript(){

    var dictionary = {
        0: ['A', 'K', 'T', 'F', 'O', 'Y'],
        1: ['B', 'L', 'U', 'G', 'P', 'Z'],
        2: ['C', 'M', 'V', 'H', 'Q', '.'],
        3: ['D', 'N', 'W', 'I', 'R', ','],
        4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
    }
    
    function encrypt(text){
        var result = [];
        text.split("").forEach(c => {
            for (var n in dictionary){
                if (dictionary[n].indexOf(c)!= -1){
                    result.push(n);
                    result.push(dictionary[n].indexOf(c).toString());
                }
            }
        });
        return result.join("");
    }
    
    function decrypt(text){
        var result = [];
        for (var i = 0; i<text.toString().length; i+=2){
            result.push(dictionary[text.toString()[i]][text.toString()[i+1]]);
        }
        return result.join("");
    }

    for (i=0;i<arguments.length;i++){
        var res = encrypt(arguments[i]);
        var dec = decrypt(res);
        
        console.log("Encrypted: " + res);
        console.log("Decrypted: " + dec);
    }
}

codeScript("HOLA ", "QUE TAL")


/* d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, 
la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

SKY
|-|-|
LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB */

function encrypt(str){

    var first = str.substring(0, str.length/2);
    var last = str.substring(str.length/2, str.length);
    var result = [];

    console.log(first + " - " + last);

    for (i=0; i<first.length; i++){
        result.push(first[i]+last[i]);
    }

    console.log(result.join(""));

}

encrypt("SKYLAB");

// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

function decrypt(str){

    var first = "";
    var last = "";

    for (i=0; i<str.length; i+=2){
        first += str[i];
        last += str[i+1];
    }

    console.log(first + last);

}

decrypt("SLKAYB");

/* d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que 
introduzcas como parámetro SKYLAB y devuelva SKYLAB 
(con todas las transformaciones internas hechas y mostrando, entre medias, la transformación) */

function encriptRomana(str){

    var encrypted = encrypt(str);
    var decrypted = decrypt(encrypted);
    console.log("Encriptado: " + encrypted);
    console.log("Desencriptado: " + decrypted);

    function encrypt(str){

        var first = str.substring(0, str.length/2);
        var last = str.substring(str.length/2, str.length);
        var result = [];
    
        console.log(first + " - " + last);
    
        for (i=0; i<first.length; i++){
            result.push(first[i]+last[i]);
        }
    
        return result.join("");
    
    }

    function decrypt(str){

        var first = "";
        var last = "";
    
        for (i=0; i<str.length; i+=2){
            first += str[i];
            last += str[i+1];
        }
    
        return first + last;
    
    }

}

encriptRomana("SKYLAB");

// d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

encriptRomana("SKYLABCODERS");

/* e) Crea un programa al que le introduces un número como parámetro 
del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir: */

function sayItWithWords(num){

    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (num >= 0 && num < 10){
        console.log(units[num]);
    } else if (num >= 10 && num < 20) {
        console.log(teens[num-10]);
    } else if (num >= 20 &&  num < 100) {
        var numStr = num + ""; 
        console.log(tens[numStr[0]] + "-" + units[numStr[1]]);
    } else {
        console.log("unknow");
    }
}

sayItWithWords(5)   //output Five
sayItWithWords(17)  //
sayItWithWords(23)  //output twenty-three
sayItWithWords(71)  //output seventy-one

/* e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

sayItWithWords(5)  => //output Five, five / 5
sayItWithWords(23) => //output twenty-three, twenty + three / 20 + 3
sayItWithWords(71) => //output seventy-one, seventy + one / 70 + 1

*/

function sayItWithWords(num){

    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (num >= 0 && num < 10){
        console.log(units[num] + ", " + units[num] + " / " + num);
    } else if (num >= 10 && num < 20) {
        console.log(teens[num-10] + ", " + teens[num - 10] + " / " + num);
    } else if (num >= 20 &&  num < 100) {
        var numStr = num + ""; 
        console.log(tens[numStr[0]] + "-" + units[numStr[1]] + ", " + tens[numStr[0]] + " + " + units[numStr[1]] + " / " + numStr[0]+ "0" + " + " + numStr[1]);
    } else {
        console.log("unknow");
    }
}

sayItWithWords(5)  //output Five
sayItWithWords(17) 
sayItWithWords(23)  //output twenty-three
sayItWithWords(71)  //output seventy-one

// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

function sayItWithWords(num){

    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var numStr = num.toString();
    var result = "";
    var len = num.toString().length;

    if (len == 3){
        result += units[numStr[0]] + " hundred ";
        tenPart = Number(numStr[1] + numStr[2]);

        if (tenPart > 0){
            result += "and ";
            if (tenPart >= 0 && tenPart < 10){
                result += units[tenPart] + ", ";
                result += units[numStr[0]] + " hundred ";
                result += "+ " + units[tenPart] + " / " 
                result += numStr[0] + "00" + " + " + tenPart;
            } else if (tenPart >= 10 && tenPart < 20) {
                result += teens[tenPart-10] + ", ";
                result += units[numStr[0]] + " hundred ";
                result += "+ " + teens[tenPart - 10] + " / " 
                result += numStr[0] + "00" + " + " + tenPart;
            } else if (tenPart >= 20 &&  tenPart < 100) {
                result += tens[numStr[1]] + "-" 
                result += units[numStr[2]] + ", ";
                result += units[numStr[0]] + " hundred ";
                result += "+ " + tens[numStr[1]] + " + " + units[numStr[2]] + " / " 
                result += numStr[0] + "00 " + "+ " +  numStr[1]+ "0" + " + " + numStr[2];
            } 
        } else {
            result += ", " + units[numStr[0]] + " hundred " + " / " + num;
        }

    } else if (len == 2){

        if (num >= 10 && num < 20) {
            result += teens[num-10] + ", " + teens[num - 10] + " / " + num;
        } else if (num >= 20 &&  num < 100) {
            result += tens[numStr[0]] + "-" + units[numStr[1]] 
            result += ", " + tens[numStr[0]] + " + " + units[numStr[1]] 
            result += " / " + numStr[0]+ "0" + " + " + numStr[1];
        }

    } else if (len == 1){

        result += units[num] + ", " + units[num] + " / " + num;

    } else {
        result = "unknow";
    }

    console.log(result)
}

sayItWithWords(999)

// f) Recibiendo el siguiente texto por parámetro a tu función... :

var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";

function replaceText(text){
    var newText = text;
    var potatoes = 0;
    var tomatoes = 0;
    var cucumbers = 0;
    var garlics = 0;
    var onions = 0;
    newText = newText.replace(/,/g, "");
    newText = newText.replace(/\./g, ",");
    newText = newText.replace(/\bdolor\b /gi, r => {
        potatoes ++;
        return " potato ";
    });
    newText = newText.replace(/\blorem\b/gi, r => {
        tomatoes ++;
        return " tomato ";
    });
    newText = newText.replace(/\blabor\b/gi, r => {
        cucumbers ++;
        return " cucumber ";
    });
    newText = newText.replace(/\bconsequatur\b/gi, r => {
        garlics ++;
        return " garlic "
    });
    newText = newText.replace(/\bipsum\b/gi, x => {
        onions ++;
        return " onion "
    });
    newText += "Potatoes: " + potatoes + ", "; 
    newText += "tomatoes: " + tomatoes + ", ";
    newText += "cucumbers: " + cucumbers + ", ";
    newText += "garlics: " + garlics + ", ";
    newText += "onions: " + onions + ", ";

    return newText;
}

console.log(replaceText(text));

// f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario

//done!