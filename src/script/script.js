const choices = document.querySelectorAll(".choices .choice");

const result = document.getElementById("result");

const userScore = document.getElementById("user-score");

const computerScore = document.getElementById("computer-score");

const computerChoiceDisplay = document.getElementById("computer-choice");

const resetBtn = document.getElementById("reset");

let userPoints = 0;
let computerPoints = 0;

const options = ["rock", "paper", "scissors"];

const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

choices.forEach(choice => {

    choice.addEventListener("click", () => {

        const userChoice = choice.id;

        const computerChoice = options[
            Math.floor(Math.random() * options.length)
        ];

        // Show computer choice
        computerChoiceDisplay.textContent = emojis[computerChoice];

        if (userChoice === computerChoice) {

            result.textContent = "It's a Draw 🤝";

        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {

            result.textContent = "You Win ";

            userPoints++;

        } else {

            result.textContent = "Computer Win ";

            computerPoints++;

        }

        userScore.textContent = userPoints;

        computerScore.textContent = computerPoints;

    });

});

resetBtn.addEventListener("click", () => {

    userPoints = 0;

    computerPoints = 0;

    userScore.textContent = 0;

    computerScore.textContent = 0;

    computerChoiceDisplay.textContent = "❓";

    result.textContent = "Make your choice";

});





