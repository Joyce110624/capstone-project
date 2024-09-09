
## Memory Game Programming
- Using the Guese The Number Game as a guide, write the program for the Memmory Game
1. The user enters the game.
2. the home page will appear
3. the user will select the category and the level they want.
-  start game button will appear.
- when the start game button is clicked, generate the specific grid based on the level and category of the game.
4. the game.
- cards in pairs should appear.
- Each card should have an image underneath it.
- the cards should be spread randomly and should be flipped down.
- when the game starts, the player is allowed to select two cards at a time.
- As soon as the player clicks on their first selection, the stopwatch should start counting and the  card should flip and reveal the image underneath it.
- When the player chooses their second selection,the moves should increase by one and the card will reveal the image underneath it.
-If their first selected card and their second selected card have displays the same image, both cards should stay as they are with their images revealed and the user will gain 20 coins.
- Else both cards should flip downwards as they were in the beginning concealing their images underneath them.

4. when the user clicks on the sign-up button
- the sign up page will appear.
-when the user fills all the requirements and click submit, create a profile for the user.
5. when the user clicks on the about link, the about page should load.





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
