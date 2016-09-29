$(document).ready(function () {

    console.log('Ready!'); //test to make sure all is linked correctly

    // assign variables to divs
    var $red = $('<div class="colors" id="red"></div>');
    var $orange = $('<div class="colors" id="orange"></div>');
    var $yellow = $('<div class="colors" id="yellow"></div>');
    var $green = $('<div class="colors" id="green"></div>');
    console.log('Red', $red);

    // append the divs after the title header & the doc is ready
    $('#title').append($red, $orange, $yellow, $green);

    // var colors = [$red, $orange, $yellow, $green]; array to be used for hard mode
    // console.log(colors);

    // generate a random number
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (1 + max - min) + min);
    }

    //assign randomNumber to a var
    var randomNumber = randomNumber(1, 4);
    console.log(randomNumber);

    //Provide instructions to the user on which color to pick
    if (randomNumber == 1) {
      $('#color').append('<h3>Hello! Please pick the color red.</h3>');
    } else if (randomNumber == 2) {
      $('#color').append('<h3>Howdy! Please pick the color orange.</h3>');
    } else if (randomNumber == 3) {
      $('#color').append('<h3>Hey there! Please pick the color yellow.</h3>');
    } else if (randomNumber == 4) {
      $('#color').append('<h3>Oh hai! Please pick the color green.</h3>');
    } else {
      $('#color').append('<h3>Not quite!</h3>');
    }

    //Provide feedback to user based on which color they click
    $('#red').on('click', function () {
        // console.log('Yep, they clicked!');
        if (randomNumber == 1) {
          $('#color').html('<h3>Woohoo, that\'s red alright!</h3>');
        } else {
          $('#color').html('<h3>Not quite! Please try again.</h3>');
        }
      });

    $('#orange').on('click', function () {
        // console.log('Yep, they clicked!');
        if (randomNumber == 2) {
          $('#color').html('<h3><em>Orange</em> you glad you picked the right color?!</h3>');
        } else {
          $('#color').append('<h3>Not quite! Please try again.</h3>');
        }
      });

    $('#yellow').on('click', function () {
        // console.log('Yep, they clicked!');
        if (randomNumber == 3) {
          $('#color').html('<h3><em>Hello</em>, that\'s <em>yellow!</em></h3>');
        } else {
          $('#color').append('<h3>Not quite! Please try again.</h3>');
        }
      });

    $('#green').on('click', function () {
        // console.log('Yep, they clicked!');
        if (randomNumber == 4) {
          $('#color').html('<h3>Super green! (Name that movie...)</h3>');
        } else {
          $('#color').append('<h3>Not quite! Please try again.</h3>');
        }
      });

    // timer to be used for pro mode
    // function fade() {
    //   clearTimeout(timeout);
    //   timeout = setTimeout(function () {
    //       $('#color').css('opacity: 0.2');
    //     }, 2000);
    // }
    //
    // fade();

    // console.log(randomNumber(1, 4));

  });
