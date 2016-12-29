## Building A Star Wars Game

### Overview
Build a Star Wars Game. Game dynamically updates HTML pages with the JQuery library.

![Star Wars Game] (assets/images/starwars.jpg)

### Game Play
	* Player chooses a character.
	* Player chooses an opponent.
	* Player's character and opponent move to battle positions using JQuery to update the page.
	* The player will now be able to click the attack button. 
		* Whenever the player clicks attack, the character damages the opponent. The opponent will health points. These points are displayed at the bottom of the opponent's picture.
		* The opponent's character will instantly counterattack. These points are displayed at the bottom of the player's picture.
	* The player will keep hitting the attack button in an effort to defeat the opponent.
		* When the opponent's character is health's point is reduced to zero or below, the character is removed.
		* The player can now choose another opponent to battle.
	* The player wins the game by defeating all enemy characters.
	* The player looses the game if their health points falls to zero or below.

### Game Design Notes 
	* Each character has 3 attributes.
		* Health Points
		* Attack Power
		* Counter Attack Power
	* Each time the player attacks, their character's Attack Power increases by its base Attack Power decreasing the opponent's character's Health Points by the Attack Power.
	* Each time the opponent's character attacks the player's character's Health Points. The Attack Power does not increase.
	* No characters can heal or recover Health Points.
	* Player should be able to win and lose the game no matter what character they choose.