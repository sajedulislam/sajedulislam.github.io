$(document).ready(function() {

const safePos = [1, 9, 14, 22, 27, 35, 40, 48];
const pawnNumber = 4;
let playersNumber = 4; // Default to 4 players
let turnOrder = ['blue', 'red', 'green', 'yellow'];
let diceValue = 6;
let currentTurn = 0; //blue
const sfxPawnMove = new Audio('../assets/sounds/sfx_token_move.mp3');
const sfxDiceRoll = new Audio('../assets/sounds/sfx_dice_roll.mp3');
const sfxInHome = new Audio('../assets/sounds/sfx_in_home.mp3');
sfxInHome.volume = 0.1;
const sfxWin = new Audio('../assets/sounds/sfx_win.mp3');


function Position(length) {
    for (let i = 1; i <= length; i++) {
        this[i] = [];
    }
}

function Pawn(id, color) {
    this.id = id;
    this.name = color + "-" + id;
    this.color = color;
    switch (color) {
        case 'blue':
            this.startCell = '1';
            this.endCell = '51';
            break;
        case 'red':
            this.startCell = '14';
            this.endCell = '12';
            break;
        case 'green':
            this.startCell = '27';
            this.endCell = '25';
            break;
        case 'yellow':
            this.startCell = '40';
            this.endCell = '38';
            break;
    }
    this.currentCell = color + "-private-" + id;
    this.area = 'private'; //private, outer, last-line, home
    let elem = document.createElement('div');
    elem.classList.add('pawn', this.name);
    elem.innerHTML = `<img src="assets/img/pawn-${this.color}.png" alt="${this.name}">`;
    this.elem = elem;
}

//board 
let privateAreas = {
    blue: [],
    red: [],
    green: [],
    yellow: []
};
let outerPosition = new Position(52);
let lastLine = {
    blue: new Position(5),
    red: new Position(5),
    green: new Position(5),
    yellow: new Position(5)
};
let homeAreas = {
    blue: [],
    red: [],
    green: [],
    yellow: []
};

function logBoard() {
    console.log('board start----');
    console.log("privateAreas", privateAreas);
    console.log("outerPosition", outerPosition);
    console.log("lastLine", lastLine);
    console.log("homeAreas", homeAreas);
    console.log('board end----');
}

function getPawnElem(pawn) {
    return $('.pawn.' + pawn.name)
}

function putPawn(pawn, targetCell) {
    const targetCellElem = $('.cell.' + targetCell);
    targetCellElem.append(pawn.elem);
    sfxPawnMove.play();
}

//random dice value function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
}

//check if all pawns in last line can be moved
function pawnsInLastLineCanMove(color) {
    let canMove = false;
    Object.keys(lastLine[color]).forEach(pos => {
        lastLine[color][pos].forEach(pawn => {
            if (parseInt(pawn.currentCell) + diceValue <= 6) {
                canMove = true;
            }
        });
    });
    return canMove;
}

function pawnsInPrivateCanMove(color) {
    return privateAreas[color].length > 0 && diceValue == 6;
}

function pawnsNumberInOuter(color) {
    let number = 0;
    Object.keys(outerPosition).forEach(pos => {
        outerPosition[pos].forEach(pawn => {
            if (pawn.color == color) {
                number++;
            }
        });
    });
    return number;
}

function rollDice() {
    let dice = $('.dashboard .dice-section .dice');
    $(dice).addClass('rolling');
    sfxDiceRoll.play();
    $('.dice-value span').text('. . .')
    $(dice).on('animationend', function () {
        $(this).removeClass('rolling')
    });
    $(dice).removeClass('face-' + diceValue);
    diceValue = getRandomInt(1, 7);
    $(dice).addClass('face-' + diceValue);

    removeHighlightDice();
    setTimeout(function () {
        $('.dice-value span').text(diceValue);

        if (
            //check if all pawns are in private area
            (!pawnsInPrivateCanMove(turnOrder[currentTurn]) &&
                !pawnsInLastLineCanMove(turnOrder[currentTurn]) &&
                pawnsNumberInOuter(turnOrder[currentTurn]) == 0
            ) ||
            //check if all pawns are in home area
            homeAreas[turnOrder[currentTurn]].length == 4

        ) {

            nextTurn();
            highlightDice();
            return;
        }


        //highlight all pawns for the current player
        highlightAllPawn(turnOrder[currentTurn]);
        // nextTurn();
    }, 1000);
    // console.log(diceValue);
}

function updateDashboard() {
    $('.dashboard').removeClass('blue red green yellow');
    $('.dashboard').addClass(turnOrder[currentTurn]);
    $('.dashboard .player-name span').text(turnOrder[currentTurn] + "'s turn");
}

function startBotTurn() {
    if (playersNumber === 1 && currentTurn === 0) {
        setTimeout(() => {
            playBot();
        }, 1000); // Introduce a small delay to make the bot's turn feel more natural
    }
}

function nextTurn() {
    if (diceValue != 6) {
        currentTurn++;
        if (currentTurn >= turnOrder.length) {
            currentTurn = 0;
        }
        updateDashboard();
        startBotTurn(); // Initiate bot's turn after a human player's turn
    } else {
        updateDashboard();
    }
}

function getNextCell(pawn) {
    let next = {
        cell: 0,
        area: 'outer'
    }
    let currentCell = parseInt(pawn.currentCell);
    let startCell = parseInt(pawn.startCell);
    let endCell = parseInt(pawn.endCell);
    let nextCell = currentCell + diceValue;
    if (pawn.area == 'private') {
        next.area = 'outer';
        next.cell = pawn.startCell;
    } else if (pawn.area == 'outer') {
        if ((currentCell >= endCell - 6 && currentCell <= endCell) && nextCell > endCell) {
            //the pawn will be in the last line
            next.area = 'last-line'
            let remaining = nextCell - endCell;
            next.cell = remaining;
            if (remaining == 6) {
                next.cell = 0;
                next.area = 'home';
            }
        } else {
            if (nextCell > 52) {
                let remaining = nextCell - 52;
                next.cell = remaining;
                //
            } else {
                next.cell = nextCell;
            }
        }

    } else if (pawn.area == 'last-line') {
        if (nextCell == 6) {

            next.cell = 0;
            next.area = 'home';
        } else {
            next.cell = nextCell;
            next.area = 'last-line'
        }
    }
    return next;
}

function highlightPawn(pawn) {
    getPawnElem(pawn).addClass('highlight');
    $('.pawn.' + pawn.name).on('click', function () {

        //if the pawn is in the private area
        if (pawn.area == 'private') {
            //move the pawn to the starting cell
            pawn.currentCell = pawn.startCell;
            pawn.area = 'outer';
            putPawn(pawn, 'out-' + pawn.currentCell);

            //remove the pawn from the private area
            privateAreas[pawn.color].splice(privateAreas[pawn.color].indexOf(pawn), 1);
            //add the pawn to outerposition
            outerPosition[pawn.currentCell].push(pawn);

        } else if (pawn.area == 'outer') {
            //move the pawn to the next cell
            let next = getNextCell(pawn);
            //remove the pawn from the current cell
            outerPosition[pawn.currentCell].splice(outerPosition[pawn.currentCell].indexOf(pawn), 1);
            pawn.currentCell = next.cell;
            pawn.area = next.area;
            if (next.area == 'outer') {
                //add the pawn to the next cell in the outer position
                outerPosition[next.cell].push(pawn);
                putPawn(pawn, 'out-' + pawn.currentCell);
            } else if (next.area == 'last-line') {
                //add the pawn in the last line
                lastLine[pawn.color][next.cell].push(pawn);
                putPawn(pawn, pawn.color + "-last-line-" + next.cell);
            } else {
                pawn.currentCell = next.cell;
                pawn.area = next.area;
                //add pawn to home area
                homeAreas[pawn.color].push(pawn);
                sfxInHome.play();
                putPawn(pawn, pawn.color + "-home-" + homeAreas[pawn.color].length);
            }
        } else if (pawn.area == 'last-line') {
            let next = getNextCell(pawn);
            if (next.area == 'last-line') {
                //remove the pawn from the current cell
                lastLine[pawn.color][pawn.currentCell].splice(lastLine[pawn.color][pawn.currentCell].indexOf(pawn), 1);
                pawn.currentCell = next.cell;
                lastLine[pawn.color][next.cell].push(pawn);
                putPawn(pawn, pawn.color + "-last-line-" + next.cell);
            } else {
                //remove the pawn from the current cell
                lastLine[pawn.color][pawn.currentCell].splice(lastLine[pawn.color][pawn.currentCell].indexOf(pawn), 1);
                pawn.currentCell = next.cell;
                pawn.area = next.area;
                //add pawn to home area
                homeAreas[pawn.color].push(pawn);
                sfxInHome.play();
                putPawn(pawn, pawn.color + "-home-" + homeAreas[pawn.color].length);
            }
        }


        //remove the highlight
        removeAllHightlight(pawn.color);
        // logBoard();
        nextTurn();
        highlightDice();

    });
}

function removeHighlightPawn(pawn) {
    getPawnElem(pawn).removeClass('highlight');
    $('.pawn.' + pawn.name).unbind();
}

function highlightAllPawn(color) {
    privateAreas[color].forEach(pawn => {
        if (diceValue == 6) {
            highlightPawn(pawn);
        }
    });
    Object.keys(outerPosition).forEach(pos => {
        outerPosition[pos].forEach(pawn => {
            if (pawn.color == color) {
                highlightPawn(pawn);
            }
        });
    });
    Object.keys(lastLine[color]).forEach(pos => {
        lastLine[color][pos].forEach(pawn => {
            if (parseInt(pawn.currentCell) + diceValue <= 6) {
                highlightPawn(pawn);
            }
        });
    });
}

function removeAllHightlight(color) {
    privateAreas[color].forEach(pawn => {
        removeHighlightPawn(pawn);
    });
    Object.keys(outerPosition).forEach(pos => {
        outerPosition[pos].forEach(pawn => {
            if (pawn.color == color) {
                removeHighlightPawn(pawn);
            }
        });
    });
    Object.keys(lastLine[color]).forEach(pos => {
        lastLine[color][pos].forEach(pawn => {
            if (pawn.color == color) {
                removeHighlightPawn(pawn);
            }
        });
    });
    homeAreas[color].forEach(pawn => {
        removeHighlightPawn(pawn);
    });
}

function highlightDice() {
    $('.dashboard .dice-section').addClass('highlight');
}

function removeHighlightDice() {
    $('.dashboard .dice-section').removeClass('highlight');
}

function attachEventToDice() {
    highlightDice();
    $('.dashboard .dice-section').on('click', function () {
        rollDice()
    });
}

function removeEventFromDice() {
    removeHighlightDice();
    $('.dashboard .dice-section').unbind();
}

//initialize the board

function initGame() {
    //create pawns
    Object.keys(privateAreas).forEach(color => {
        for (let i = 1; i <= pawnNumber; i++) {
            let pawn = new Pawn(i, color)
            privateAreas[color].push(pawn);
            //place them on the board
            putPawn(pawn, pawn.currentCell);
        }
    });

    //attach event to the dice
    attachEventToDice();
    updateDashboard();
}

function playBot() {
    removeEventFromDice();
    setTimeout(() => {
        rollDice();
    }, 1000);
}

function startGame() {
    const params = new URLSearchParams(window.location.search);
    const playerNumberParam = params.get('P');
    const colorParam = params.get('C');

    if (playerNumberParam) {
        playersNumber = parseInt(playerNumberParam);
    } else {
        playersNumber = 4; // Set default player number to 4
    }

    if (playersNumber === 1) {
        alert('Invalid input: Cannot play with only one player.');
        return;
    } else if (playersNumber === 2) {
        // Randomly select one of the two valid color combinations
        const validColorCombinations = [['red', 'yellow'], ['blue', 'green']];
        const randomIndex = Math.floor(Math.random() * validColorCombinations.length);
        turnOrder = validColorCombinations[randomIndex];
    } else if (playersNumber === 3) {
                if (colorParam) {
            // Split the color string and take any 3 colors from it
            const availableColors = colorParam.toUpperCase().split('');
            if (availableColors.length === 3) {
                turnOrder = availableColors.map(color => {
                    switch (color) {
                        case 'R':
                            return 'red';
                        case 'Y':
                            return 'yellow';
                        case 'B':
                            return 'blue';
                        case 'G':
                            return 'green';
                        default:
                            return null;
                    }
                });
            } else {
                alert('Invalid color input!');
                return;
            }
        } else {
            // Randomly select 3 colors
            const allColors = ['red', 'yellow', 'blue', 'green'];
            turnOrder = [];
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * allColors.length);
                turnOrder.push(allColors.splice(randomIndex, 1)[0]);
            }
        }
    } else if (playersNumber === 4) {
        turnOrder = ['red', 'yellow', 'blue', 'green'];
    } else {
        alert('Invalid player number!');
        return;
    }

    initGame();
    $('#gameBoard').show(); // Show the board after initialization
}


// Start the game
startGame();

});
