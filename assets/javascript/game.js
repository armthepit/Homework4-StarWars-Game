$(document).ready(function() {

		/* var */

		var hero_villain = '';
		var player_computer = '';	
		var heroes = [];
		var villains = [];
		var playerCharacters = [];
		var opponents = [];
		var answer = '';
		var currid = '';
		var newHtml = '';
		var player = '';
		var computer = '';
		var currentIndex = 0;
		var nextOpponent = 'n';
		var playerCharacterIndex = 0;
		var computerCharacterIndex = 0;
		var newhtml = '';
		var remainingOpponents = 3;


		// Set up characters and initialize health points, attack power, and counter attack power //
		function character(index, name, photo, healthPoints, attackPower, baseAttackPower, counterAttackPower,status)
		{
		    this.characterIndex = index;
		    this.characterName = name;
		    this.characterPhoto = photo;
		    this.characterHealthPoints = healthPoints;
		    this.characterAttackPower = attackPower;
		    this.characterBaseAttackPower = baseAttackPower;
		    this.characterCounterAttackPower = counterAttackPower;
		    this.characterStatus = '';
		};

		var hero1 = new character(0,"Han Solo", "assets/images/hansolo.jpg",0,0,0,0,"");
		var hero2 = new character(1,"Luke Skywalker", "assets/images/lukeskywalker.jpg",0,0,0,0,"");
		var hero3 = new character(2,"Princess Leia", "assets/images/princessleia.jpg",0,0,0,0,"");
		var villain1 = new character(0,"Bobo Fett", "assets/images/bobofett.jpg",0,0,0,0,"");
		var villain2 = new character(1,"Darth Vader", "assets/images/darthvader.jpg",0,0,0,0,"");
		var villain3 = new character(2,"Jabba The Hutt", "assets/images/jabbathehutt.jpg",0,0,0,0,"");
		var player = new character(0,"","",0,0,0,0,"");
		var computer = new character(0,"","",0,0,0,0,"");

		newGame();

		// Set up initial screen. Displaying whether player wants to battle as a Hero or a Villain

		function newGame() {
			$('.battle').remove();
			$('p').remove();
			newHtml = '<div id="hero" class="hero_villain"><image src="assets/images/lukeskywalker.jpg" alt = "Hero"><h3>Hero</h3></div>';
			newHtml = newHtml + '<div class="hero_villain" style = "border: 0px"></div>';
			newHtml = newHtml + '<div id="villain" class="hero_villain"><image src="assets/images/darthvader.jpg" alt = "Villain"><h3>Villain</h3></div>';
			$(newHtml).insertAfter('article');
			$('#message').html('Click Hero or Villain.');
		}

		// Assign random health points, attack power, and counter attack power to characters

		function characterValues() {
			remainingOpponents = 3;
			$.each(playerCharacters, function (index) {
				playerCharacters[index].characterHealthPoints = Math.round(Math.random()*100)+25;
				playerCharacters[index].characterAttackPower = Math.round(Math.random()*20)+5;
				playerCharacters[index].characterBaseAttackPower = playerCharacters[index].characterAttackPower;
				playerCharacters[index].characterCounterAttackPower = Math.round(Math.random()*20)+5;
				playerCharacters[index].characterStatus = '';
			});
			$.each(computerCharacters, function (index) {
				computerCharacters[index].characterHealthPoints = Math.round(Math.random()*100)+25;
				computerCharacters[index].characterAttackPower = Math.round(Math.random()*20)+5;
				computerCharacters[index].characterBaseAttackPower = playerCharacters[index].characterAttackPower;
				computerCharacters[index].characterCounterAttackPower = Math.round(Math.random()*20)+5;
				computerCharacters[index].characterStatus = '';
			});
			selectPlayer();			
		}

		// Set up screen of characters for player to choose from. //

		function selectPlayer() {
			$('.hero_villain').remove();
			newHtml = '<div id="player0" class="player"></div>';
			newHtml = newHtml + '<div id="player1" class="player"></div>';
			newHtml = newHtml + '<div id="player2" class="player"></div>';
			$(newHtml).insertAfter('article');
			$.each(playerCharacters, function (index) {
				currId = '#player'+index;
				newHtml = '<image src="' + playerCharacters[index].characterPhoto + '" alt = "' + playerCharacters[index].characterName + '">';
				newHtml = newHtml + '<h3>' + playerCharacters[index].characterName + '</h3>';
				newHtml = newHtml + '<p>Current Health: ' + playerCharacters[index].characterHealthPoints + '</p>';
				$(currId).html(newHtml);  
			});
			$('#message').html('Click to choose your character.');
		}

		function selectOpponent() {
			$('.player').remove();
			$('.battle').remove();
			$('p').remove();
			newHtml = '<div id="computer0" class="computer"></div>';
			newHtml = newHtml + '<div id="computer1" class="computer"></div>';
			newHtml = newHtml + '<div id="computer2" class="computer"></div>';
			$(newHtml).insertAfter('article');
			$.each(computerCharacters, function (index) {
				currId = '#computer'+index;
				newHtml = '<image src="' + computerCharacters[index].characterPhoto + '" alt = "' + computerCharacters[index].characterName + '">';
				newHtml = newHtml + '<h3>' + computerCharacters[index].characterName + '</h3>';
				newHtml = newHtml + '<p>Current Health: ' + computerCharacters[index].characterHealthPoints + '</p>';	
				$(currId).html(newHtml);  
			});
			$('#message').html('Click to choose your opponent.');
		}	

		function attack()
		{
			$('#message').html('Battle Begins');
			$('.computer').remove();
			newHtml = '<div id="battle0" class="battle"></div>';
			newHtml = newHtml + '<div id="battle1" class="battle"></div>';
			newHtml = newHtml + '<div id="battle2" class="battle"></div>';
			newHtml = newHtml + '<p id="gameStatus"></p>';
			$(newHtml).insertAfter('article');			
			currId = '#battle0';
			playerHtml = '<image src="' + playerCharacter.characterPhoto + '" alt = "' + playerCharacter.characterName + '">';
			playerHtml = playerHtml + '<h3>' + playerCharacter.characterName + '</h3>';
			playerHtml = playerHtml + '<p id="playerHealth">Current Health: ' + playerCharacter.characterHealthPoints + '</p>';
			newHtml = playerHtml + '<div class="attack"><button type="button" id="attackButton">ATTACK</button><div>'
			$(currId).html(newHtml);
			currId = '#battle1';
			$('#battle1').css('border','0px');
			currId = '#battle2';
			computerHtml = '<image src="' + computerCharacter.characterPhoto + '" alt = "' + computerCharacter.characterName + '">';
			computerHtml = computerHtml + '<h3>' + computerCharacter.characterName + '</h3>';
			computerHtml = computerHtml + '<p id="computerHealth">Current Health: ' + computerCharacter.characterHealthPoints + '</p>';
			newHtml = computerHtml + '<div class="attack"><button type="button" id="counterAttackButton"></button><div>'
			$(currId).html(newHtml); 
		};		

		// Click on Hero to build the array of Heroes for player and the array of Villains as opponents to battle	

		$(document).on('click','#hero', function() {			
			if (hero_villain === '') {
				// Build Array Of Heroes For Player To Choose //
				playerCharacters = [hero1, hero2, hero3];
				computerCharacters = [villain1, villain2, villain3];	
				player_computer = 'player';
				characterValues();
			};			 
		});	

		// Click on Villain to build the array of Villains for player and the array of Heroes as opponents to battle.			

		$(document).on('click','#villain', function() {
			if (hero_villain === '') {				
				// Build Array Of Heroes For Player To Choose //
				playerCharacters = [villain1, villain2, villain3];
				computerCharacters = [hero1, hero2, hero3];
				characterValues();
			}		
		});			

		// Click to choose your character

		$(document).on('click','.player',function(){	
			playerCharacterIndex = playerCharacters[$(this).attr("id").match(/[\d]+$/)];
			playerCharacter = playerCharacters[$(this).attr("id").match(/[\d]+$/)];
			$(currId).html(newHtml); 
			$.each(playerCharacters, function (index) {
				currId = '#character'+index;
				newHtml = '';
				$(currId).html(newHtml);
			});
			selectOpponent();
		});

		// Click to choose your opponent

		$(document).on('click','.computer',function() {	
			computerCharacterIndex = computerCharacters[$(this).attr("id").match(/[\d]+$/)];
			if(computerCharacterIndex.characterStatus !== 'Defeated') {
				computerCharacter = computerCharacters[$(this).attr("id").match(/[\d]+$/)];
				console.log(computerCharacterIndex.characterName);
				$(currId).html(newHtml); 
				$.each(computerCharacters, function (index) {
					currId = '#character'+index;
					newHtml = '';
					$(currId).html(newHtml);
				});
				attack();
			}	
		});


		// Player attacks
		 
		$(document).on('click','#attackButton', function() {
			if(computerCharacter.characterHealthPoints > 0 && playerCharacter.characterHealthPoints > 0) {
				computerCharacter.characterHealthPoints = computerCharacter.characterHealthPoints - playerCharacter.characterAttackPower;
				newHtml = playerCharacter.characterName + ' attacks with a hit of ' + playerCharacter.characterAttackPower;
				playerCharacter.characterAttackPower = playerCharacter.characterAttackPower + playerCharacter.characterBaseAttackPower;
				$('#computerHealth').html('Current Health: ' + computerCharacter.characterHealthPoints);

				if(computerCharacter.characterHealthPoints < 1) {
					$('#gameStatus').html(newHtml + ' ' + playerCharacter.characterName + ' wins.');	
					computerCharacterIndex.characterStatus = 'Defeated';
					computerCharacterIndex.characterHealthPoints = 0;
					remainingOpponents--;
					if (remainingOpponents !== 0) {	
						newHtml = playerHtml + '<div class="attack"><button type="button" id="keepPlaying">Keep Playing</button><div>'
						$('#battle0').html(newHtml);
					} else {
						newHtml = newhtml + ' Congratulations! You defeated all your opponents'
						$('#gameStatus').html(newHtml);
						newHtml = playerHtml + '<div class="attack"><button type="button" id="playAgain">Play Again</button><div>'
						$('#battle0').html(newHtml);	
					}	
				}else {
					playerCharacter.characterHealthPoints = playerCharacter.characterHealthPoints - computerCharacter.characterAttackPower;
					console.log(playerCharacter.characterHealthPoints);
					newHtml = newHtml + ' ' + computerCharacter.characterName + ' attacks back with a hit of ' + computerCharacter.characterAttackPower;
					$('#playerHealth').html('Current Health: ' + playerCharacter.characterHealthPoints);
					$('#gameStatus').html(newHtml);
					if(playerCharacter.characterHealthPoints < 1) {
						$('#gameStatus').html(playerCharacter.characterName + ' has lost.');
						$('#gameStatus').html(newHtml);
						newHtml = playerHtml + '<div class="attack"><button type="button" id="playAgain">Play Again</button><div>'
						$('#battle0').html(newHtml);	
					}				
				}
			} else {
				newGame();
			}	
		});

		// Battle another opponent

		$(document).on('click','#keepPlaying', function() {
			selectOpponent();
		});	

		// Play Again

		$(document).on('click','#playAgain', function() {
			newGame();
		});	
	
});
