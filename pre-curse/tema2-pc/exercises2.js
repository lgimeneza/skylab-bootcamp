// JS Objects


var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

// a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

function showProperties(obj){
    var something = Object.keys(avenger)[0];
    var somethingMore = Object.keys(avenger)[1];
    var somethingMoreAndMore = Object.keys(avenger)[2];

    console.log(something, somethingMore, somethingMoreAndMore);
}

showProperties(avenger);

// b) Ahora, crea una función que liste solo los valores de las propiedades.

function showThings(obj){
    var somethingThatShowsThings = obj.name + ", " + obj.class + ", " + obj.id ;

    console.log(somethingThatShowsThings); //Tony, VII, 01
}

showThings(avenger);

// c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

function changeClass(obj){
    obj.class = "XI";
    console.log(obj.class);
}

changeClass(avenger);

// d) Ahora, elimina la propiedad ID y asegura los cambios.

function deleteId(obj){
    delete obj.id

    console.log(obj.id);
}

deleteId(avenger);

// e) Añade una nueva propiedad, por ejemplo city y dale un valor.

function addProperty(obj){
    obj.city = "New York City";
}

addProperty(avenger);

// e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

function showCity(obj){
    console.log(avenger.city);
}

showCity(avenger);

// f) Lista el numero de propiedades que contiene el objeto.

function listProperties(obj){
    console.log(Object.keys(obj).length);
}

listProperties(avenger);

// g) Cambia la propiedad name por fullName.

function changePropertyName(obj){
    obj.fullName = obj.name;
    delete obj.name;
}

changePropertyName(avenger);

// g1) Asegura los cambios.

function showFullName(obj){
    console.log(obj.fullName) // Tony Stark
}

showFullName(avenger);

// h) Lista todas las propiedades del objeto a través de un console.log()


function listAllProperties(obj){
    console.log(Object.keys(obj));
}

listAllProperties(avenger);

// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

// h2) Asegura los cambios volviendo a listar los valores del objeto



var flights = [
    {id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
    {id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
    {id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
    {id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
    {id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
    {id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
    {id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
    {id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
    {id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
    {id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

var id = 1;

if (flights.findIndex(f => f.id == id) != -1){
    console.log("find")
} else {
    console.log("else");
}