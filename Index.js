const gameOverId= document.querySelector("#gameOver")
const scoreId= document.querySelector("#score")
const stars= document.querySelector("#stars")

let score = 0;


//move da stars obv
function moveStars() {
	stars.style.top = Math.random()*380+'px';
	stars.style.left = Math.random()*380+'px';
	stars.style.right = Math.random()*380+'px';
	console.log(stars);
}

//star move after function gets called for work
setInterval(moveStars, 1000);

//add da score
function addScore() {
		score = score + 1;
		scoreId.innerText = score;
}

//star click LISTENER
stars.addEventListener("click", addScore);

//game over function
function gameOver() {
	gameOverId.style.display = "block";
	stars.style.display = "none";
}

setTimeout(gameOver, 10000)