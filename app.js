

let  min = 1,
     max = 10,
     guessNum =2,
     winningNum =3,
     GuessLeft=3;



    const minNum = document.querySelector('.min-num'),
          game = document.querySelector('#name'),
          guessInput = document.querySelector('#text'),
          guessbtn = document.querySelector('#guess-value'),
          maxNum = document.querySelector('.max-num');
          Message = document.querySelector('.Message');




   minNum.textContent = min;
   maxNum.textContent = max;

guessbtn.addEventListener('click',function(e){

       let  guess = parseInt(guessInput.value);
       

       if (isNaN(guess) || guess < min || guess > max) {
           setMessage(`Please enter a number between ${min} and ${max}`, 'red');
       }
// checking if the number is equal to the Guessed Num
       if (guess === guessNum) {
             
           gameOver(true,`Hurray you won`);
           
       }else{
           //subtracting from the guess if the player loses 1
            GuessLeft -= 1;
       }
          //checking if person has exhausted his/her guesses
         if (GuessLeft === 0 ) {
           gameOver(false,`Game Over, You lost `);
            } else{

                setMessage(`${guess} is not correct, you have ${GuessLeft}  guesses  left`);
            }
         
       
         function gameOver(won,msg){
           let color;
            won === true ? color = 'green' : color = 'red';
            Message.style.color = color;
            guessInput.disabled = true;
            setMessage(msg);

         }
// function to set the Message and Color
       function setMessage(msg, color){
           Message.style.color = color;
           Message.textContent = msg;
       }


 e.preventDefault();
});


  