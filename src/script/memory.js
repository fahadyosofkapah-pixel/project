
const gameBoard = document.getElementById("game-board");

const movesDisplay = document.getElementById("moves");

const matchesDisplay = document.getElementById("matches");

const restartBtn = document.getElementById("restart");

const message = document.getElementById("message");

const emojis = [
    "🍎", "🍌", "🍇", "🍊",
    "🍓", "🍉", "🍍", "🥝"
];

let cards = [...emojis, ...emojis];

let flippedCards = [];

let moves = 0;

let matches = 0;

let locked = false;


// Shuffle cards
function shuffleCards() {

    cards.sort(() => Math.random() - 0.5);

}


// Create game cards
function createCards() {

    gameBoard.innerHTML = "";

    cards.forEach((emoji) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.dataset.emoji = emoji;

        card.textContent = "?";

        card.addEventListener("click", () => {

            flipCard(card);

        });

        gameBoard.appendChild(card);

    });

}


// Flip card
function flipCard(card) {

    if (
        locked ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    ) {
        return;
    }

    card.classList.add("flipped");

    card.textContent = card.dataset.emoji;

    flippedCards.push(card);

    if (flippedCards.length === 2) {

        moves++;

        movesDisplay.textContent = moves;

        checkMatch();

    }

}


// Check matching cards
function checkMatch() {

    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {

        firstCard.classList.add("matched");

        secondCard.classList.add("matched");

        matches++;

        matchesDisplay.textContent = matches;

        flippedCards = [];

        if (matches === emojis.length) {

            message.textContent = "🎉 You Win! Congratulations!";

        }

    } else {

        locked = true;

        setTimeout(() => {

            firstCard.classList.remove("flipped");

            secondCard.classList.remove("flipped");

            firstCard.textContent = "?";

            secondCard.textContent = "?";

            flippedCards = [];

            locked = false;

        }, 1000);

    }

}


// Restart game
function restartGame() {

    moves = 0;

    matches = 0;

    flippedCards = [];

    locked = false;

    movesDisplay.textContent = 0;

    matchesDisplay.textContent = 0;

    message.textContent = "";

    shuffleCards();

    createCards();

}


// Start game
restartBtn.addEventListener("click", restartGame);

restartGame();
