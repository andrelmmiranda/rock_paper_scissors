const play = document.querySelector('input[type="button"');
let playerName = '';

const startGame = document.querySelector("[value='Start Game']");
startGame.addEventListener('click', ()=>{
    const main = document.querySelector(".main-container");
    main.classList.remove("desabilitado")
    document.querySelector('#inital').classList.add('desabilitado')
    document.querySelector('#nome_jogador').innerHTML = playerName;
});

const input = document.querySelector("[name='player_name']");

input.addEventListener('keyup', ()=>{
    (input.value).length > 2 ?
    document.querySelector("[value='Start Game']").removeAttribute('disabled'): 
    document.querySelector("[value='Start Game']").setAttribute('disabled', '');
    playerName = input.value;
});


const hands = document.querySelectorAll('.img img');
hands.forEach(i => i.addEventListener('click', ()=>{
    contest(playerHand(i), computerHand());
}));

function playerHand(i){
    if(i.getAttribute('id') === 'pedra'){
        return 0;
    } else if(i.getAttribute('id') === 'papel'){
        return 1;
    } else{
        return 2;
    }
}

function computerHand(){
    return Math.floor(Math.random()*(3));
}

const result = document.getElementById('result');

function contest(player, computer){
    const paragraph = document.querySelector('#result p') === null && document.createElement('p');

    oneByOne(player, computer);
    
    writeMessage(paragraph);
}

function oneByOne(player, computer){
    if(player == computer){
        console.log('Draw game! :|');
        textInside = document.createTextNode('Draw game! :|');
        
    } else if((player - computer == -2) || player - computer == 1){
        console.log(`${playerName} won! :)`);
        textInside = document.createTextNode(`${playerName} won! :)`);
        let playerPoints = document.querySelector('#pontos_jogador');
        playerPoints.innerText = Number(playerPoints.innerText) + 1;

    } else{
        console.log('Computer won! :(');
        textInside = document.createTextNode('Computer won! :(');
        let computerPoints = document.querySelector('#pontos_computador');
        computerPoints.innerText = Number(computerPoints.innerText) + 1;
    }
}

function writeMessage(paragraph){
    if(paragraph.innerHTML === ''){
        mountMessage();
    } else{
        result.removeChild(document.querySelector('#result p'));
        mountMessage();
    }
}

function mountMessage(){
    const paragraph = document.querySelector('#result p') === null && document.createElement('p');
    paragraph.appendChild(textInside);
    result.appendChild(paragraph);
}