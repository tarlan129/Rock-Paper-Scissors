
## Pseudocode

START game
  Set humanScore = 0, computerScore = 0
  
  REPEAT 5 times:
    Get human choice via prompt
    Get computer choice randomly
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