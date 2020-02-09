// Lucky Sevens

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function startGame(){
var initialBet = document.getElementById("betAmount").value;
var bet = initialBet;
var dice1;
var dice2;
var dieTotal;
var diceRolls = new Array();

if (bet <= 0) {
alert("Invalid Bid. Amount Must Be Greater Than 0");
} else {
  do {
    dice1 = rollDice();
    dice2 = rollDice();
    dieTotal = dice1 + dice2;
    console.log("Dice 1: " + dice1, "\n", "Dice 2: " + dice2);
    if (dieTotal == 7 ) {
          console.log(bet);
          bet = +bet + 4;
          console.log("Congralations! You rolled a 7! Your total is now $" + bet);
          diceRolls.push(bet);
    } else if (dieTotal <= 6 || dieTotal >= 7) {
      bet = bet - 1;
      console.log("Roll Total is: " + dieTotal, "Better luck next time. Your total is now $" + bet);
      diceRolls.push(bet);
    }
   } while (bet > 0);
}

var mostMoney = Math.max(...diceRolls);
var highestRoll = diceRolls.indexOf(mostMoney) + 1;

if (mostMoney < initialBet){
  mostMoney = 0;
  highestRoll = 0;
}

document.getElementById("resultsTable").style.display = "block";
document.getElementById("start").innerText = initialBet;
document.getElementById("total").innerText = diceRolls.length;
document.getElementById("highest").innerText = mostMoney;
document.getElementById("count").innerText = highestRoll;

document.getElementById("play").innerText="PLAY AGAIN";

return false;
}
