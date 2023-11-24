'use strict';


var scores,roundScore,activePlayer,gamePlaying;
init();
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){

        //1. Random No.
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2 Display Result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';

        //3 Update Round score if not 1
        if(dice > 1){
            //ADD score
            roundScore += dice;
            document.querySelector('#current--'+ activePlayer).textContent = roundScore;
        } else {
            // New Player
            nextPlayer();          
        }
    }

});

document.querySelector('.btn--hold').addEventListener('click',function(){

    //Add Current score
    scores[activePlayer]  += roundScore;

    // Update UI
    document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer];

    // Check if Won
    if (scores[activePlayer]>=100){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--'+activePlayer).classList.add('winner');
        document.querySelector('.player--'+activePlayer).classList.remove('active');
        gamePlaying=false;
    }else{
        nextPlayer();
    }  
});


function nextPlayer(){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--0').textContent = '0';

    document.querySelector('.player--0').classList.toggle('active');
    document.querySelector('.player--1').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click',init)


function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');

    document.querySelector('.player--0').classList.add('active');
    gamePlaying=true;
}












//dice = Math.floor(Math.random() *6) +1;

// document.querySelector('#current--'+ activePlayer).textContent = dice; //SETTER
// // textContent instead of HTML maybe????


// var x = document.querySelector('#score--0').textContent; //GETTER
// console.log(x)



 
