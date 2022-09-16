
var name=prompt("Who is grading this?");
alert("hello " +  name)

var score = 0;

var cursorCost = 15;
var cursors = 0;

function buyCursor(){
    if (score >= cursorCost){
        score = score - cursorCost;
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorcost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
    }
}

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

setInterval(function(){
    score = score + cursors;
    document.getElementById("score").innerHTML = score;

}, 1000);
