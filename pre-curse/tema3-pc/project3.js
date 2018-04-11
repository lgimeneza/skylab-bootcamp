(function bingo(){

    var nTurns = 0;
    var players = new Array();

    (function (){

        welcome()

        do{
            newGame();
        } while (askNewGame())

        finishGame();

    })();

    function newGame(){

        if (players.length > 0){
            showScores();
        }
        
        var playerName = prompt("Your name: ");
        var score = 0;
        var player = {playerName, score};

        do {
            var card = generateCard(15);
            console.log("Hello " + playerName + " you card is: ")
            showCard(card);
        } while (askNewCard() != true)


        while(isCardCompleted(card) == false){
    
            if (askNewTurn() == true){
                newTurn(card);
            } else {
                break;
            }
    
        }

        function newTurn(card){
            myRandomNumber = generateRandom(card.length);

            console.log("Playing with " + myRandomNumber);
        
            var i = card.map(x => x.number).indexOf(myRandomNumber)

            if (i != -1){
                card[i].matched = true;
            }

            showCard(card);

            nTurns++;
        }

        function askNewTurn(){
            result = prompt("Play? y/n")

            if (result == "y"){
                return true;
            } else {
                return false;
            }
        }

        function askNewCard(){
            result = prompt("Do you really want this card? y/n");

            if (result == "y"){
                return true;
            } else {
                return false;
            }
        }

        function isCardCompleted(card){
            result = true;
            card.forEach(i => {
                if (i.matched != true){
                    result = false;
                }
            })
            return result;
        }

        function generateRandom(n){
            var myRandomNumber = Math.floor(Math.random() * n) + 1;
            return myRandomNumber;
        }

        function showCard(card){

            var lineComplete = false;

            for (i=0; i<card.length; i+=5){
                line = card.slice(i,i+5);
                if (isCardCompleted(line)){
                    lineComplete = true;
                }
                var lineStr = new Array();
                line.forEach(i =>{
                    if (i.matched){
                        lineStr.push("X");
                    } else {
                        lineStr.push(i.number);
                    }
                })
                console.log(lineStr.toString());
            }

            if (isCardCompleted(card)){
                var points = getPoints(nTurns);
                console.log("BINGO!! in " + nTurns + " turns " + points + " points");
                player.score = points;
                players.push(player);
            } else if (lineComplete) {
                console.log("LINEA!!");
            }

        }

        function generateCard(n){
            var card = new Array();
            for (i=0; i < n; i++){
                var num = generateRandom(n);
                if (!exist(card,num)){

                    var number = num;
                    var matched = false;
                    var item = {number, matched};

                    card.push(item);

                } else {
                    i-=1;
                }
                
            }
            return card;
        }

        function getPoints(nTurns){
            if (nTurns < 20){
                return 100;
            } else if(nTurns < 50){
                return 70;
            } else if(nTurns < 70){
                return 50;
            } else {
                return 25;
            }
        }

        function showScores(){

            function compare(a,b) {
                if (b.score < a.score)
                  return -1;
                if (b.score > a.score)
                  return 1;
                return 0;
              }

            var playersByScore = players.sort(compare);

            playersByScore.forEach(p => {
                console.log(p.playerName + ": " + p.score + " puntos.");
            });
            
        }

        function exist(card, num){

            if (card.map(x => x.number).indexOf(num) != -1){
                return true;
            } else {
                return false;
            }

        }
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

    function welcome(){
        console.log("Welcome to SkyLab Bingo!!");
        console.log("The points system:");
        console.log( "< 20 turn => 100 points")
        console.log( "< 50 turn => 70 points")
        console.log( "< 70 turn => 50 points")
        console.log( ">= 70 turn => 25 points")
    }

    function finishGame(){
        console.log("Ciao!");
    }

})();