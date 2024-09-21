
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





# Task

In the profile page (/profile/page.tsx), I displayed the username of the player with this code `<p>Username: {userData.username}</p>`(probably in line 32 along with "Email" and "Coins"). 

### Your task is to display the user ID of the player just under the username or on the next line (probably in line 33).

HINT: The user ID of the player is stored in Firestore with the key "uid". For the username, the key is "username" as it is used here `<p>Username: {userData.username}</p>`
