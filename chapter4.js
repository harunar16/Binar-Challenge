const refreshPage = document.getElementById("refresh");
refreshPage.addEventListener("click", function() {
  window.location.reload();
});

const playerChoices = document.querySelectorAll("#batu, #kertas, #gunting");
playerChoices.forEach(choices => {
  choices.addEventListener("click", () => {
    const pc = choices.id;
    document.getElementById(pc).style.backgroundColor = "blue";
    play(pc);
    stop();
  });
});

function play(playerChoice) {
  const options = ["batu1", "kertas1", "gunting1"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const comChoice = options[randomIndex];
  document.getElementById(comChoice).style.backgroundColor = "orange";
  if (playerChoice +"1" === comChoice) {
    document.getElementById("text-2").style.backgroundColor = "black";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "30px 40px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "Draw";
  } else if (playerChoice === "batu") {
    if (comChoice === "gunting1") {
      document.getElementById("text-2").style.backgroundColor = "green";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "10px 50px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "You Win";
    } else {
      document.getElementById("text-2").style.backgroundColor = "red";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "10px 40px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "You Lose";
    }
  } else if (playerChoice === "kertas") {
    if (comChoice === "batu1") {
      document.getElementById("text-2").style.backgroundColor = "green";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "10px 50px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "You Win";
    } else {
      document.getElementById("text-2").style.backgroundColor = "red";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "10px 40px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "You Lose";
    }
  } else if (playerChoice === "gunting") {
    if (comChoice === "kertas1") {
      document.getElementById("text-2").style.backgroundColor = "green";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "10px 50px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "You Win";
    } else {
      document.getElementById("text-2").style.backgroundColor = "red";
      document.getElementById("text-2").style.color = "white";
      document.getElementById("text-2").style.fontSize = "35px";
      document.getElementById("text-2").style.textAlign = "center";
      document.getElementById("text-2").style.padding = "10px 40px";
      document.getElementById("text-2").style.borderRadius = "5%";
      document.getElementById("text-2").innerHTML = "You Lose";
    }
  }
};

function stop() {  
  const stopGame = document.querySelectorAll("#batu, #kertas, #gunting");
  stopGame.forEach(function(element) {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
  });
}