
# Rock Paper Scissors

Third project from The Odin Project Foundations course. Built a Rock Paper Scissors game played entirely via the browser console using JavaScript.

## What I Learned

This project was my first real JavaScript logic challenge. I worked with:

* `Math.random()` and `Math.floor()` for random computer choice
* Functions — declarations, parameters, return values
* `if/else` conditionals for game logic
* Template literals for dynamic console messages
* `for` loop for repeating 5 rounds
* Score tracking with global variables
* `prompt()` for user input
* `.toLowerCase()` for case-insensitive input handling

The logic part was manageable but structuring the functions correctly — especially understanding scope and when to call what — took real effort.

## How to Play

* Open `index.html` in your browser
* Open the browser console (F12)
* Enter `rock`, `paper` or `scissors` when prompted
* Play 5 rounds — best score wins!

## Pseudocode

START game
  Set humanScore = 0, computerScore = 0
  
  REPEAT 5 times:
    Get computer choice randomly
    Get human choice via prompt
    Compare choices:
      IF equal → tie
      IF human wins → humanScore++
      IF computer wins → computerScore++
    Print round result
  
  Print final scores
  IF humanScore > computerScore → human wins
  IF computerScore > humanScore → computer wins
  ELSE → tie
END game

## Technologies Used

* HTML5
* JavaScript
* Git
* GitHub
* Linux Terminal

## Live Preview

https://tarlan129.github.io/Rock-Paper-Scissors/