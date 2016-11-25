$(document).ready(function() {

    // console.log('Ready!'); //test to make sure all are linked correctly

    // assign variables to divs
    var $red = $('<div class="colors" id="red"></div>');
    var $orange = $('<div class="colors" id="orange"></div>');
    var $yellow = $('<div class="colors" id="yellow"></div>');
    var $green = $('<div class="colors" id="green"></div>');
    var $button = $('<button id="resetButton">Play again!</button>');

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
    // console.log('Random Number: ', randomNumber);

    //Provide instructions to the user on which color to pick

    switch (randomNumber) {
      case 1:
        $('#color').append('<h3>Hello! Please pick the color red.</h3>');
        break;
      case 2:
        $('#color').append('<h3>Howdy! Please pick the color orange.</h3>');
        break;
      case 3:
        $('#color').append('<h3>Hey there! Please pick the color yellow.</h3>');
        break;
      case 4:
        $('#color').append('<h3>Oh hai! Please pick the color green.</h3>');
        break;
      default:
        $('#color').append('boo.');
    }

    //Provide feedback to user based on which color they click
    $('.colors').on('click', function() {
      var color = this.id;
      if (randomNumber == 1 && color == 'red') {
        $('#color').html('<h3>Woohoo, that\'s red alright!</h3>');
        $(this).fadeOut('slow');
        $(this).fadeIn('fast');
        // $('h1').after($button);
      } else if (randomNumber == 2 && color == 'orange') {
        $('#color').html('<h3><em>Orange</em> you glad you picked the right color?!</h3>');
        $(this).fadeOut('slow');
        $(this).fadeIn('fast');
      } else if (randomNumber == 3 && color == 'yellow') {
        $('#color').html('<h3><em>Hello</em>, that\'s <em>yellow!</em></h3>');
        $(this).fadeOut('slow');
        $(this).fadeIn('fast');
      } else if (randomNumber == 4 && color == 'green') {
        $('#color').html('<h3>It\'s not easy being green, but great job!</h3>');
        $(this).fadeOut('slow');
        $(this).fadeIn('fast');
      } else {
        $('#color').append('<h3>Not quite! Please try again.</h3>');
      }
    });

    // $($button).on('click', function() {
    //   randomNumber;
    //   $button.remove();
    // });

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
