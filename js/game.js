(function diceGame() {

    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {
        console.log('working');

        var dieNumOne = document.querySelector('.dice aside:first-child').innerText; // 1



        var dieOne = Math.floor(Math.random()* 6 + 1);
        console.log(dieOne);
        var dieTwo = Math.floor(Math.random()* 6 + 1);
        console.log(dieTwo);
        var total = dieOne + dieTwo;
        console.log(total);

        if (total === 11){
        document.querySelector('.message').innerText = 'You Win';
        // alert('You Win');
      } else if (total === 7){
        document.querySelector('.message').innerText = 'You Win';
      // alert('You Win');
    } else if (total === 1, 2, 3, 4, 5, 6, 9, 10, 12){
          document.querySelector('.message').innerText = 'Try Again';
        // alert('Try Again');
        }

        document.querySelector('.dice aside:first-child').innerText = dieOne;
        document.querySelector('.dice aside:last-child').innerText = dieTwo;
        document.querySelector('.result').innerText = total;



    });


})();



//
