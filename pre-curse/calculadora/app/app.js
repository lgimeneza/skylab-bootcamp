var strDisplay = '0';
var numA = 0;
var pendingOp = "";
var numSwitch = 0;

function calculate(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById("n2").value);

    if (isValid(n1) && isValid(n2)){
        var sum = n1+n2;
        var subs = n1-n2;
        var mult = n1 * n2;
        var div = n1 / n2;
    
        document.getElementById("results").innerHTML = "<li>" + n1 + " + " + n2 + " = " + sum + "</li>";
        document.getElementById("results").insertAdjacentHTML("beforeend","<li>" + n1 + " - " + n2 + " = " + subs + "</li>");
        document.getElementById("results").insertAdjacentHTML("beforeend","<li>" + n1 + " * " + n2 + " = " + mult + "</li>");
        document.getElementById("results").insertAdjacentHTML("beforeend","<li>" + n1 + " / " + n2 + " = " + div.toFixed(2) + "</li>");
    
        console.log(n1 + "+" + n2 + "=" + sum);
    } else {
        alert("You must enter a valid number");
    }

}

function isValid(n){

    return !isNaN(n);
    
}

function btnOperatorOnClick(operator){

    if (numA == 0){
        numA = Number(strDisplay);
        pendingOp = operator;
    } else {
        if (pendingOp != ""){
            numA = calculateMac(numA, strDisplay, pendingOp);
            strDisplay = Number(numA);
        }
        pendingOp = operator;
        document.getElementById("display").innerHTML = strDisplay;
    }

    numSwitch = 0;

}

function btnEqualsOnClick(){

    if (pendingOp != ""){
        numA = calculateMac(numA, strDisplay, pendingOp);
        strDisplay = Number(numA);
        pendingOp = "";
        document.getElementById("display").innerHTML = strDisplay;
    }

    numSwitch = 0;

}

function btnNumOnClick(num){

    if (strDisplay == '0' | numSwitch == 0) {
        strDisplay = num
    } else {
        strDisplay += num
    }

    document.getElementById("display").innerHTML = strDisplay;
    
    document.getElementById("btnAC").innerHTML = 'C';

    numSwitch = 1;
}

function btnAcOnClick(){

    strDisplay = '0';
    numA = 0;
    pendingOp = "";
    document.getElementById("display").innerHTML = strDisplay;

    document.getElementById("btnAC").innerHTML = 'AC';

    numSwitch = 0;
}

function btnNegativeOnClick(){

    strDisplay = -strDisplay;

    document.getElementById("display").innerHTML = strDisplay;

    numSwitch = 0;
}

function btnPercentOnClick(){

    strDisplay = Number(strDisplay) / 100;

    document.getElementById("display").innerHTML = strDisplay;

    numSwitch = 0;
}

function calculateMac(numA, numB, operator){

    switch (operator) {
        case '+':
            return Number(numA) + Number(numB); 
            break;
        case '-':
            return Number(numA) - Number(numB); 
            break;
        case '*':
            return Number(numA) * Number(numB); 
            break;
        case '/':
            return Number(numA) / Number(numB); 
            break;
        default:
            break;
    }

}

// Style section ...

function changeColorOnMouseDown(id, color)
{
    document.getElementById( id).style.backgroundColor = getColorMouseDown(color);
}

function changeColorOnMouseUp(id, color)
{
    document.getElementById(id).style.backgroundColor = getColorMouseUp(color);
}

function getColorMouseDown(color){

    switch (color) {
        case 'grey':
            return 'rgb(178, 178, 178)';
            break;
        case 'orange':
            return 'rgb(195, 117, 48)';
            break;
        default:
            break;
    }

}

function getColorMouseUp(color){

    switch (color) {
        case 'grey':
            return 'rgb(224, 224, 224)';
            break;
        case 'orange':
            return 'rgb(250,146,69)';
            break;
        default:
            break;
    }

}