let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
	const choices = ['r', 'p', 's'];
	const randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}

function convertToWord(letter) {
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	if(letter === "s") return "Scissors";
}

function win(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!`
	document.getElementById(userChoice).classList.add("green-glow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, compChoice){
	compScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You lost!`
	document.getElementById(userChoice).classList.add("red-glow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice, compChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord}. Draw!`
	document.getElementById(userChoice).classList.add("grey-glow");
	setTimeout(() => document.getElementById(userChoice).classList.remove("grey-glow"), 350);
}
function game(userChoice){
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);	
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);	
			break;	


		default:
			// statements_def
			break;
	}
}

function main(){

	rock_div.addEventListener('click', () => game("r"))

	paper_div.addEventListener('click', () => game("p"))

	scissors_div.addEventListener('click', () => game("s"))

}

main();
