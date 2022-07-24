let MinecraftMobs = ['Axolotl', 'Bat', 'Cat', 'Chicken', 'Cod', 'Mule', 'Ocelot', 'Parrot', 'Pig', 'Pufferfish',
    'Turtle', 'Villager', 'Salmon', 'Sheep',
];

let chosenWord = MinecraftMobs[Math.floor(Math.random() * MinecraftMobs.length)];

let mistakes = 0;
let points = 180;
let guessedWord = []
let gamePlays = false;
console.log(chosenWord)


let button = document.querySelector('button');
let body = document.querySelector('body')
button.addEventListener('click', startGame)


function startGame() {
    gamePlays = true
    button.innerHTML = 'PLAY AGAIN'
    button.addEventListener('click', function () {
        window.location.reload();
    })


    for (let i = 0; i < chosenWord.length; i++) {
        let paragraph = document.createElement('p')
        paragraph.setAttribute("id", `${i}`);
        body.appendChild(paragraph)

        paragraph.className = 'myParagraph'
    }
}

document.addEventListener('keyup', function (x) {
    if (x.key >= 'a' && x.key <= 'z') {

        if (gamePlays) {
            let found = false
            for (let i = 0; i < chosenWord.length; i++) {
                checkInput(chosenWord[i], x.key, i);
            }

            function checkInput(letters, input, i) {
                if (letters.toLowerCase() === input) {
                    document.getElementById(`${i}`).innerHTML = input
                    guessedWord[i] = input
                    found = true

                    if (guessedWord.join('').toLowerCase() === chosenWord.toLowerCase()) {
                        youWon()
                        gamePlays = false;
                    }
                }
            }

            if (found == false) {
                let wrongLetter = document.createElement('p')
                body.appendChild(wrongLetter)
                wrongLetter.innerHTML = x.key
                wrongLetter.className = 'wrong-letter'

                mistakes++;
                points -= 30
                document.getElementById('pointCounter').innerHTML = points
            }

            switch (mistakes) {
                case 1:
                    ground.style.display = 'block'
                    break;
                case 2:
                    head.style.display = 'block'
                    break;
                case 3:
                    scaffold.style.display = 'block'
                    break;
                case 4:
                    bodyy.style.display = 'block'

                    break;
                case 5:
                    arms.style.display = 'block'
                    break;
                case 6:
                    legs.style.display = 'block'
                    gameOver()
                    gamePlays = false
                    break;
            }
        }
    }
})

function gameOver() {
    let span = document.createElement("p");
    let spanText = document.createTextNode(`Game Over! The Word is ${chosenWord}`);
    span.appendChild(spanText);
    span.className = 'span-style';
    body.appendChild(span);
}

function youWon() {
    let span = document.createElement("p");
    let spanText = document.createTextNode(`You won! The Word is ${chosenWord} and you won by ${points} points`);
    span.appendChild(spanText);
    span.className = 'span-style';
    body.appendChild(span);
}

//by Jacob Kourieh