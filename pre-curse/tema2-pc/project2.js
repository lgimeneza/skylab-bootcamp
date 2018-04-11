airlines();

function airlines(){

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

    var name = prompt("Introduzca su nombre");

    console.log("Hola " + name + ", bienvenido a Skylab Airlines!");
    console.log("A continuación le mostramos los vuelos disponibles: ");
    showFlightsFriendly(flights);
    console.log("El coste medio es de " + calcAverage(flights) + "€");
    console.log("Vuelos con escala: " + flights.filter(f=>f.scale == true).length);
    console.log("Los últimos 5 destinos: ");
    showLastFlights(flights, 5);
    showOptions();

    function showOptions(){
        do{
            var profile = prompt("Introduzca su perfil. ADMIN/USER").toUpperCase();
            var checkAgain = "n";

            if (checkProfile(profile)){
                
                switch(profile){
                    case "ADMIN":
                        optionAdmin();
                        break;
                    case "USER":
                        optionUser();
                        break;
                }
    
            } else {
                checkAgain = prompt("Disculpe, no le hemos entendido. Provar de nuevo? y/n");
            }
    
        } while (checkAgain == "y");
        console.log("Hasta pronto!");
    }

    function optionAdmin(){
        do{
            var accion = prompt("Introduzca la acciión que desea realizar. CREAR/ELIMINAR").toUpperCase();
            var next = "n";

            if (accion != null){
                switch(accion){
                    case "CREAR":
                        optionAdd();
                        break;
                    case "ELIMINAR":
                        optionDel();
                        break;
                    default:
                        console.log("Disculpe, no hemos entendido que acción desea realizar");
                        break;
                }
            }

            next = prompt("Desea realizar alguna accion más? y/n");
        } while (next == "y");
    }

    function optionUser(){
        var filter = prompt("Introduzca el signo + (mas alto), - (mas bajo) y = (igual) seguido del precio que desea buscar. Ej:+700");
        if (filter != null){
            var flightsFiltered = seachFlightByPrice(filter);
            var flightId = prompt("Indique el número de vuelo escogido");
            console.log(showMessageBuy(seachFlightById(flightId, flightsFiltered)));
        }
    }

    function optionAdd(){
        if(flights.length <= 15){

            var flight = getFlightByPrompt()
            if (flight != null){
                flights.push(flight);
            } else {
                console.log("No ha sido posible registrar el vuelo");
            }
            
            showFlightsFriendly(flights);

        } else {
            alert("Ha alcanzado el límite de vuelos.");
        }
    }

    function optionDel(){
        var flightId = prompt("Indique el número de vuelo que desea eliminar");
        if (seachFlightById(flightId, flights)){
            var result = deleteFlight(flightId);
            if (result){
                console.log("El vuelo nº " + flightId + " ha sido eliminado correctamente." );
            }
        } else {
            console.log(showMessageBuy(false));
        }
    }

    function showFlightsFriendly(flights){

        flights.forEach(flight => {

            var myString = "El vuelo nº " + flight.id + " con origen: " + flight.from;
            myString += ", y destino: " + flight.to;
            myString += " tiene un coste de " + flight.cost + "€ ";
            switch (flight.scale){
                case true:
                    myString += "con escala."
                    break;
                case false:
                    myString += "y no realiza ninguna escala."
                    break;
            }
        
            console.log(myString);
        
        });

    }

    function calcAverage(flights){
        var sum = 0;

        flights.forEach(flight => {
            sum += flight.cost;
        });
    
        return sum/flights.length;
    }

    function showLastFlights(flights, n){
        flights.filter(f => f.id > flights[flights.length-1].id-n).forEach(d => {
            console.log(d.to);
        });
    }

    function checkProfile(profile){
        switch(profile){
            case "USER":
                return true;
                break;
            case "ADMIN":
                return true;
                break;        
            default:
                return false;
                break;
        }
    }

    function seachFlightByPrice(filter){

        var operator = filter.substring(0,1);
        var price = filter.substring(1);
        var flightsFiltered;

        switch(operator){
            case "+":
                flightsFiltered = flights.filter(f => f.cost > price);
                showFlightsFriendly(flightsFiltered);
                break;
            case "-":
                flightsFiltered = flights.filter(f => f.cost < price);
                showFlightsFriendly(flightsFiltered);
                break;
            case "=":
                flightsFiltered = flights.filter(f => f.cost == price);
                showFlightsFriendly(flightsFiltered);
                break;
        }

        return flightsFiltered;

    }

    function seachFlightById(id, flights){
        if (flights.findIndex(f => f.id == id) != -1){
            return true;
        } else {
            return false;
        }
    }

    function showMessageBuy(result){
        if (result){
            return "Gracias por su compra, vuelva pronto.";
        } else {
            return "Vuelo no está en la selección, intente de nuevo.";
        }
    }

    function deleteFlight(id){
        if (seachFlightById(id, flights)){
            flights.splice(flights.findIndex(f => f.id == id),1)
            return true;
        } else {
            return false;
        }
    }

    function getBoolean(response){
        if (response == "y"){
            return true;
        } else {
            return false;
        }
    }

    function getFlightByPrompt(){

        var id; 
        var exist = false;
        
        do{
           id = prompt("Indroduzca el número de vuelo");

           if (seachFlightById(id, flights)){
               exist = true;
               console.log("El número introducido ya existe. Intente de nuevo");
           } else {
               exist = false;
           }
        } while (exist)
        

        var to = prompt("Introduzca destino");
        var from = prompt("Introduzca origen");
        var cost = prompt("Introduzca el precio");
        var scale = getBoolean(prompt("Hace escalas? y/n"));

        var flight = {
            id: id,
            to: to,
            from: from,
            cost: cost,
            scale: scale
        };

        return flight;
    }

}