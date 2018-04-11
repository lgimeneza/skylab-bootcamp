(function pasapalabra(){

    var players = new Array();
    var remain = true;

    (function (){

        welcome()

        do{
            newGame();
        } while (askNewGame())

        remain ? finishGame() : null;

    })();

    function newGame(){

        //var limit = setTimeout(() => exitGame(), 130000); Esto no funciona ya que corre en el mismo hilo que el prompt y por lo tanto detiene el contador.

        var playerName = prompt("Your name: ");
        var correct = 0;
        var player = {playerName, correct};

        var questions = [
            { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
            { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
            { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") }
            
        ]

        var areLetters = true;

        var state = { unanswered:0, correct:1, error:2 };

        remain = true;

        while (areLetters == true && remain == true){

            areLetters = false;
            
            questions.forEach(x =>{
                if (x.status ==0 && remain == true){
    
                    do{
                        var answer = prompt(x.question + ": ");
                        console.log(answer);
                        if(answer == null | answer == "END"){ //TODO: add input END
                            var result = prompt("Estas seguro que quieres abandonar el juego? y/n");
                            if (result = "y"){
                                //TODO: break game;
                                remain = false;
                            }
                        } else if (x.answer == answer.toLowerCase()){ //case insensitive
                            x.status = state.correct; 
                            var points = questions.filter(x => {return x.status === state.correct;}).length;
                            alert("Correcto, tienes " + points + " puntos!" );
                        } else if (answer == "pasapalabra"){
                            x.status = 0;
                            areLetters = true;
                        } else{
                            x.status = state.error; 
                            alert("Error");
                        }
    
    
                    } while (answer == null && remain == true) 
                }
            });

        }

        (function totalScore(){
        
            var correct = questions.filter(x => {return x.status === state.correct;}).length;
            var error = questions.filter(x => {return x.status === state.error;}).length;
        
            console.log("Correct " + correct);
            console.log("Error " + error);

            player.correct = correct;

            players.push(player);
        
        })();

        //clearTimeout(limit);
    };

    function welcome(){

        console.log("Welcome to SkyLab Pasapalabra!!");

    }

    function askNewGame(){
        result = prompt("Play again? y/n")

        if (result == "y"){
            nTurns = 0;
            return true;
        } else {
            return false;
        }
    }

    function finishGame(){

        //TODO: mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

        function compare(a,b) {
            if (b.correct < a.correct)
              return -1;
            if (b.correct > a.correct)
              return 1;
            return 0;
          }

        console.table(players.sort(compare));

    }

})();