
## Memory Game Programming
- Using the Guese The Number Game as a guide, write the program for the Memmory Game
1. The user launches the game.
2. the home page will appear
3. the user will select the category and the level they want.
-  start game button will appear.
- when the start game button is clicked, generate the specific grid based on the level and category of the game.
4. the game.
-  At the start of the game, all the cards mixed up and laid in rows appear based on the level and the category selected.
- each image will have an image on one side and a generic back.
-  the cards should be spread randomly and should be turned faced down with the image underneath it.
- when the player turns over a card, the stopwatch should begin to count.
- when the player turns over two cards, the moves should increase by one.
- If the two cards have the same image, both cards should stay face up and the player will gain 20 coins otherwise the cards should should flip back over after some time.
- when all the cards are faced up, display 'level completed' and  check the player's moves and time spent.
- generate their coins based on  their moves and time spent.
-If moves are between 1 and 10 and time spent is less than 30 seconds, award 1000 coins.
-If moves are between 11 and 20 and time is between 31 and 60 seconds, award 800 coins.
 -If moves are 21 or more and time is above 1 minute, award 400 coins
 -If none of the conditions are met, no coins are awarded.
 -After this, the game returns to the home page.
4. when the user clicks on the sign-up button
- the sign up page will appear.
-the user fills all the requirements and click submit, create a profile for the user.
5. when the user clicks on the about link, the about page should open.





### Reference Reference Reference

## Guess The Number Game Programming
1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
- Display congratulations message.
- Stop the player from being able to enter more guesses (this would mess the game up).
- Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
- Tell the player they are wrong and whether their guess was too high or too low.
- Allow them to enter another guess.
- Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
- Tell the player it is game over.
- Stop the player from being able to enter more guesses (this would mess the game up).
- Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
