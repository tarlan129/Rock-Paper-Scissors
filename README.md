
# Rock Paper Scissors

Third project from The Odin Project Foundations course. Originally built to be played via the browser console, now fully refactored into a dynamic web page with an interactive User Interface (UI).

## What I Learned

This project was my first real JavaScript logic and DOM manipulation challenge. Through this iterative development, I worked with:

* **DOM Manipulation**: Selecting HTML elements using `document.querySelector()` and dynamically updating content with `.textContent`.
* **Event Listeners**: Handling user interactions by attaching `'click'` events to buttons using arrow functions.
* **State Management**: Using global variables to track scores across multiple rounds without relying on loops.
* **Control Flow & Refactoring**: Moving from synchronous `for` loops and blocking `prompt()` inputs to an asynchronous, event-driven architecture.
* **Game Logic**: Applying `Math.random()`, conditional statements (`if/else`), and logical operators (`&&`, `||`) to evaluate game rules and automatically reset scores once a player reaches 5 points.

## How to Play

* Open `index.html` in your browser.
* Click on the **Rock**, **Paper**, or **Scissors** buttons to make your move.
* The results of each round and the live running score will update instantly on the screen.
* The game goes on until one player reaches **5 points**. Once a winner is announced, the score resets automatically so you can start a new game instantly!

## Pseudocode (UI Version)

START game
  Initialize humanScore = 0, computerScore = 0
  Listen for clicks on Rock, Paper, and Scissors buttons
  
  WHEN a button is clicked:
    Get humanChoice from the clicked button
    Get computerChoice randomly via Math.random()
    
    COMPARE choices:
      IF equal → tie
      IF human wins → humanScore++
      IF computer wins → computerScore++
      
    Update the UI display with the round result and current scores
    
    IF humanScore === 5:
      Display "GAME OVER! You won the game!"
      Reset humanScore = 0, computerScore = 0
    ELSE IF computerScore === 5:
      Display "GAME OVER! Computer wins the game!"
      Reset humanScore = 0, computerScore = 0
END game

##Technologies Used
HTML / CSS

JavaScript

Git / GitHub

##Live Preview

https://tarlan129.github.io/Rock-Paper-Scissors/
