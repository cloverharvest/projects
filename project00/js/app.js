console.log("Let's race to Marin!");

//Wait for document to load
//Minimize globals

//Make a new Game object and assign it to a variable game
//call game initializer within same function

$(document).ready(function(){
 game = new Game();
 game.init();
});


//Make Game constructor function adding the two players as
//properties and a winner property

function Game() {
  this.racer1 = new Player(1);
  this.racer2 = new Player(2);
  this.winner = null;
}

function Player(racerName) {
  this.racerName = racerName;
}
//Add the initializer method to the Game prototype property
//This listens to keypress events and then makes both tokens
//move depending on keycode
Game.prototype.init = function() {
  var _this = this;
  $(document).on('keyup', function(event) {
    if (event.which === 65)
    _this.racer1.move(1);
    else if (event.which === 76)
      _this.racer2.move(2);
  });
};

//Add the reset method to the Game prototype property
//This moves back both players to the start of the racetrack
Game.prototype.reset = function() {
  $("#racer1").css("margin-left", 0);
  $("#racer2").css("margin-left", 0);
};


//Adds the move method to the Player prototype property
//This moves by x milliseconds the token's left margin X pixels
//everytime its assigned keycode is pressed
//and then if the token moves(and its left margin is greater or equal
// than x pixels, then game stops and both token are
//stopped from moving

//A winner is declared and posted via an alert box
//Reset game
Player.prototype.move = function(token) {
  $('#racer' + token).animate({
    'margin-left': '+=30px'
  }, 100);
    if (parseInt($('#racer' + token).css('margin-left')) >= 860) {
      $(document).off();

      $('#racer1').stop();
      $('#racer2').stop();
      alert("Race Winner: " + (token === 1) ? "Racer " + token + " wins! You reached Marin safely!" : "Racer " + token + " wins! Your reached Marin safely!");

      setTimeout(function(){game.reset()}, 300);
  }
};
