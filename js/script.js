let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'stone';
}
else if(randomNumber == 2) {
  computerMove = 'paper';
}
else if(randomNumber == 3) {
  computerMove = 'scissors';
}
printMessage('Computer choice is : ' + computerMove);

let playerInput = prompt('Pick your move! 1: stone, 2: paper, 3: scissors.');

console.log('Player has chosen: ' + playerInput);

let playerMove = 'uncommon move';

if(playerInput == '1'){
  playerMove = 'stone';
}

else if(playerInput == '2'){
    playerMove = 'paper';
}

else if(playerInput == '3'){
    playerMove = 'scissors';
}

else if(playerInput != '1' && playerInput != '2' && playerInput != '3') {
    printMessage('Wrong symbol!!! ' + 'Choose again');
}
//czy wariant poniżej może być tak zakodowany?

//czy w javascripcie mogę korzystać tak jak w javie z && oraz z || ?

else if(playerInput >3 && playerInput <4) {
    printMessage('Incorrect pick!!!');


}



printMessage('Player move: ' + playerMove);

if( computerMove == 'stone' && playerMove == 'paper'){
    printMessage('Player won!');
  }
 if( computerMove == 'stone' && playerMove == 'scissors'){
    printMessage('Player loose!');
  }

  if( computerMove == 'stone' && playerMove == 'stone'){
    printMessage('Tie!');
  }

  if( computerMove == 'paper' && playerMove == 'scissors'){
    printMessage('Player win!');
  }
 if( computerMove == 'paper' && playerMove == 'paper'){
    printMessage('Tie!');
  }

  if( computerMove == 'paper' && playerMove == 'stone'){
    printMessage('Player loose!');
  }

  if( computerMove == 'scissors' && playerMove == 'scissors'){
    printMessage('Tie!');
  }
 if( computerMove == 'scissors' && playerMove == 'paper'){
    printMessage('Player loose!');
  }

  if( computerMove == 'scissors' && playerMove == 'stone'){
    printMessage('Player win!');
  }

