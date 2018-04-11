/**
* @fileoverview Final project pre-course skylab (Pasapalabra)
*
* @author lgimeneza
* @version 0.1
*/
//TODO: add animations
//TODO: get user name and register ranking
//TODO: add more questions and show them ramdomly

var countDownTime = 60; //Seconds
var interval;
var questions; 
var state = { unanswered:0, correct:1, error:2 };
var pos = 0;

// Init a new game
function newGame(){
    // Show the panel of the game
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("score").style.display = 'none';
    document.getElementById("game").style.display = 'block';

    pos = 0;

    // Clear previous values and initialize
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "00:00";
    document.getElementById("points").innerHTML = "0";
    document.getElementById("answer").value = "";

    initQuestions();
    positionLetters();

    var countDownDate = new Date().getTime() + countDownTime * 1000;

    // Set the countDown
    interval = setInterval(function() {

        var now = new Date().getTime();
        
        var distance = countDownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 15000){
            document.getElementById("countdown").style.color = "rgb(236, 74, 65)";
        }

        document.getElementById("countdown").innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "00:00";

            showScore();
        }

    }, 1000);

    var audio = new Audio('media/mario-bros-here-we-go-hoo.mp3');
    audio.play();
}

// Position the letters of the alphabet forming a circle
function positionLetters(){

    var lis = document.getElementById("list").getElementsByTagName("li");

    for(var i = 0; i < lis.length; i ++){
        var offsetAngle = 360 / lis.length;
        var rotateAngle = offsetAngle * i;
        lis[i].style.transform = "rotate(" + rotateAngle + "deg) translate(0, -180px) rotate(-" + rotateAngle + "deg)"
    };

    loadQuestion(pos);

}

function btnPasapalabraClick(){

    var lis = document.getElementById("list").getElementsByTagName("li");

    questions[pos].status = state.unanswered;
    lis[pos].style.backgroundColor = "rgb(250,146,69)";
    var audio = new Audio('media/mario-bros-hammer-throw.mp3');
    audio.play();

    getNewQuestion();

}

function btnConfirmarClick(){

    //TODO: control accents and punctuation
    var lis = document.getElementById("list").getElementsByTagName("li");
    var answer = document.getElementById("answer").value;

    if(answer.toUpperCase() == questions[pos].answer.toUpperCase()){
        questions[pos].status = state.correct;
        lis[pos].style.background = "rgb(0, 203, 122)";
        var audio = new Audio('media/mario-bros-woo-hoo.mp3');
        audio.play();

    } else {
        questions[pos].status = state.error;
        lis[pos].style.background = "rgb(236, 74, 65)";
        var audio = new Audio('media/mario-bros-ooh.mp3');
        audio.play();
    }

    document.getElementById("answer").value = "";

    var correct = questions.filter(x => {return x.status === state.correct;}).length;
    var error = questions.filter(x => {return x.status === state.error;}).length;
    var score = correct * 10 - error * 20;

    document.getElementById("points").innerText = score < 0 ?  0 : score;
    
    getNewQuestion();

}

// Get a new unanswered question 
function getNewQuestion(){

    console.log("getNewQuestion");

    var areLetters = questions.filter(x => {return x.status === state.unanswered;}).length;

    console.log("areLetters" + areLetters);

    if (areLetters > 0){
        pos >= questions.length-1 ? pos = 0 : pos ++;
        while (questions[pos].status != state.unanswered){
            pos ++;
        } 
    } else {
        showScore();
    }

    loadQuestion();
}

function loadQuestion(){

    var letter = document.getElementById("letter");
    letter.innerText = questions[pos].letter.toUpperCase();
    
    var description = document.getElementById("description");
    description.innerText = questions[pos].question;

}

// UX Catch enter for playing without buttons
function onPress_ENTER(e){
    if (e.keyCode == 13) {

        var answer = document.getElementById("answer").value;
        
        if (answer != ""){
            btnConfirmarClick();
        } else {
            btnPasapalabraClick();
        }
        
        return false;
    }
}

// Start a new game
function btnPlayAgainClick(){
    // Show the right panel
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("game").style.display = 'block';
    document.getElementById("score").style.display = 'none';

    initLetters();

    newGame();
}

// make letters ready (color) for a new game
function initLetters(){
    var lis = document.getElementById("list").getElementsByTagName("li");

    for(var i = 0; i < lis.length; i ++){
        lis[i].style.backgroundColor = "rgb(18, 92, 230)";
    }

}

function showScore(){

    document.getElementById("welcome").style.display = 'none';
    document.getElementById("game").style.display = 'none';
    document.getElementById("score").style.display = 'block';

    var correct = questions.filter(x => {return x.status === state.correct;}).length;
    var error = questions.filter(x => {return x.status === state.error;}).length;
    var score = correct * 10 - error * 20;

    document.getElementById("correct").innerText = correct;
    document.getElementById("error").innerText = error;
    document.getElementById("totalScore").innerText = score < 0 ?  0 : score;
    document.getElementById("full").innerText = correct + error < questions.length ? 'No' : 'Sí';

    var audio = new Audio('media/kart1-mario-kart.mp3');
    audio.play();
}

function initQuestions(){
    questions = [
        { letter: "a", answer: "abducir", status: 0, question: ("Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.") },
        { letter: "b", answer: "bingo", status: 0, question: ("Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.") },
        { letter: "c", answer: "churumbel", status: 0, question: ("Niño, crío, bebé.") },
        { letter: "d", answer: "diarrea", status: 0, question: ("Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.") },
        { letter: "e", answer: "ectoplasma", status: 0, question: ("Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.") },
        { letter: "f", answer: "facil", status: 0, question: ("Que no requiere gran esfuerzo, capacidad o dificultad.") },
        { letter: "g", answer: "galaxia", status: 0, question: ("Conjunto enorme de estrellas, polvo interestelar, gases y partículas.") },
        { letter: "h", answer: "harakiri", status: 0, question: ("Suicidio ritual japonés por desentrañamiento.") },
        { letter: "i", answer: "iglesia", status: 0, question: ("Templo cristiano.") },
        { letter: "j", answer: "jabali", status: 0, question: ("Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.") },
        { letter: "k", answer: "kamikaze", status: 0, question: ("Persona que se juega la vida realizando una acción temeraria.") },
        { letter: "l", answer: "licantropo", status: 0, question: ("Hombre lobo.") },
        { letter: "m", answer: "misantropo", status: 0, question: ("Persona que huye del trato con otras personas o siente gran aversión hacia ellas.") },
        { letter: "n", answer: "necedad", status: 0, question: ("Demostración de poca inteligencia.") },
        { letter: "ñ", answer: "señal", status: 0, question: ("Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
        { letter: "o", answer: "orco", status: 0, question: ("Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.") },
        { letter: "p", answer: "protoss", status: 0, question: ("Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.") },
        { letter: "q", answer: "queso", status: 0, question: ("Producto obtenido por la maduración de la cuajada de la leche.") },
        { letter: "r", answer: "raton", status: 0, question: ("Roedor") },
        { letter: "s", answer: "stackoverflow", status: 0, question: ("Comunidad salvadora de todo desarrollador informático.") },
        { letter: "t", answer: "terminator", status: 0, question: ("Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.") },
        { letter: "u", answer: "unamuno", status: 0, question: ("Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.") },
        { letter: "v", answer: "vikingos", status: 0, question: ("Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.") },
        { letter: "w", answer: "sandwich", status: 0, question: ("Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso.") },
        { letter: "x", answer: "botox", status: 0, question: ("Toxina bacteriana utilizada en cirujía estética.") },
        { letter: "y", answer: "peyote", status: 0, question: ("Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.") },
        { letter: "z", answer: "zen", status: 0, question: ("Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.") },
    ]
}
