  let numOfGame = 1;
  let nameplayer= prompt("What is your name?")
  numOfGame = prompt("how many time do you like to play? XD");
  let x = 0;
  let userScore = 0;
  let computerScore = 0;

  while (x != numOfGame) {

    const computerPlay = () => {
      let pcPick = Math.random() * 3;
      pcPick = Math.floor(pcPick);

    const rps = ["rock", "paper", "scissors"];
      return rps[pcPick];
    };
    
    const userPlay = () => {
      userPick = prompt("Pick one by typing: Rock, Paper, or Scissors.");
      return userPick.toLowerCase();
    };

    const score = () => {
      return (
        nameplayer + " point: " + userScore + "\nComputer point: " + computerScore
      );
    };
    
    function playRound(playerSelection, computerSelection) {
      switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
          userScore++;
          return (
            "Computer picked " + computerSelection + "\nYou win!\n" + score()
          );
          break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
          computerScore++;
          return (
            "Computer picked " + computerSelection + "\nYou lose!\n" + score()
          );
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          return (
            "Computer picked " + computerSelection + "\nIt's a tie!\n" + score()
          );
          break;
      }
    }

    const playerSelection = userPlay();
    const computerSelection = computerPlay();

    alert(playRound(playerSelection, computerSelection));
    x++;
  }

  if (userScore == computerScore) {
    alert("Game set: It's a tie!");
  } else if (userScore > computerScore) {
    alert("Game set: You win!");
  } else if (userScore < computerScore) {
    alert("Game set: You lose!");
  }