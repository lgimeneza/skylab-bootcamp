// Calculator

(function calc(){

    var results = new Array();

    do {
        var numbers = new Array();
        do {
            var number =  prompt("Enter a number. Press Esc if there is no more numbers to calc.");
    
            if(number != null){
    
                if (isNaN(number)){
                    console.log("Error: " + number + " is not a number. Try again.");
                } else {
                    numbers.push(Number(number));
                }
            }
    
        } while ( number != null)
    
        calculator(...numbers); //Spread operator it's amazing!!!!
        
        var more = prompt("New numbers? y/n");

        more != "y" ? console.log("Bye!") : null;
        
    
    } while (more == "y");

    
    function calculator(){
    
        for (num in arguments){
            if (isNaN(arguments[num])){
                return console.log("Error: Argument " + num + " is not a number");
            }
        }
        
        if (arguments.length > 1){
    
            results.push(operation(arguments, "+"));
            results.push(operation(arguments, "-"));
            results.push(operation(arguments, "*"));
            results.push(operation(arguments, "/"));
    
        } else {
            results.push("La raiz cuadrada de " + num1 + " = " + toFixedIfNoInteger(Math.sqrt(num1))); 
        }
        
        console.log(results);
        
        function sum (){
        
            var acc = arguments[0];
            for (var n = 1; n < arguments.length; n++){
                acc += arguments[n];
            }
            return acc;
            
        }
        
        function subtraction(){
        
            var acc = arguments[0];
            for (var n = 1; n < arguments.length; n++){
                acc -= arguments[n];
            }
            return acc;
        
        }
        
        function multiplication(){
        
            var acc = arguments[0];
            for (var n = 1; n < arguments.length; n++){
                acc *= arguments[n];
            }
            return acc;
        
        }
        
        function division(){
        
            var acc = arguments[0];
            for (var n = 1; n < arguments.length; n++){
                acc /= arguments[n];
            }
            return acc;
        
        }
        
        function toFixedIfNoInteger(num){
        
            if (Number.isInteger(num)){
                return num;
            } else {
                return num.toFixed(3);
            }
        
        }
    
        function operation(arguments, operator){
    
            var myString = "";
    
            for(num in arguments){
                if (myString == ""){
                    myString = arguments[num];
                } else {
                    switch (operator){
                        case "+":
                            myString += " + " + arguments[num];
                            break;
                        case "-":
                            myString += " - " + arguments[num];
                            break;
                        case "*":
                            myString += " * " + arguments[num];
                            break;
                        case "/":
                            myString += " / " + arguments[num];
                            break;
                    }
                }
            }
    
            myString += " = ";
            
            switch (operator){
                case "+":
                    myString += toFixedIfNoInteger(sum(...arguments)); 
                    break;
                case "-":
                    myString += toFixedIfNoInteger(subtraction(...arguments));
                    break;
                case "*":
                    myString += toFixedIfNoInteger(multiplication(...arguments));
                    break;
                case "/":
                    myString += toFixedIfNoInteger(division(...arguments));
                    break;
            }
            
            return myString;
    
        }
    
    }

})();

