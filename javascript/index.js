document.onload = alert("Please Enter Numbers in between 1 and 20 to Guess");
let seceretNumber = Math.trunc(Math.random()*20) + 1;
// console.log(seceretNumber);

let score = 20;
let highScore = 0;

let checkButton = document.querySelector(".check");
checkButton.addEventListener("click",()=>{

    console.log(checkButton.textContent);
    const inputNumber = Number(document.querySelector(".input-box").value);
    console.log(inputNumber);
    
    if(inputNumber === 0){
        alert("⛔️ No number!");
    }
    else if(inputNumber > 20 || inputNumber < 0){
        alert("Very Bad👈🏻👊🏻👊🏻\nAlready you know You have to guess in between 1 and 20\nMINUS 5points");
        score = score-5;
        if(score <=0){
            alert("Oh Oh See you violated the Rule 😡😠😡\nYou Lost The GAME\nYour Score is 0");
            score = 20;
            let againBlink = document.querySelector("#playAgain");
            console.log(againBlink.classList);
            againBlink.classList.remove("animation-play-again");
            console.log(againBlink.classList);
            document.querySelector(".score").textContent = 20;
            document.querySelector(".input-box").value = '';
            document.querySelector(".secret-number").textContent = "?";
            document.querySelector("body").style.backgroundColor = "black";
        }
        document.querySelector(".score").textContent = score;
    }
    else if(inputNumber === seceretNumber){
        alert("Woah!!! You Won The GAME 👍🏻👍🏻👍🏻\nYour Score is "+score);
        let result = document.querySelector(".secret-number");
        result.textContent = inputNumber

        if(score >= highScore){
            highScore = score;
        }

        document.querySelector(".high-score").textContent = highScore;
        document.querySelector("body").style.backgroundColor = "green";
        // inputNumber = "";
        // document.querySelector(".input-box").value = '';
        let againBlink = document.querySelector("#playAgain");
        againBlink.classList.add("animation-play-again");

    }
    else if((inputNumber === seceretNumber+1) || inputNumber === seceretNumber-1){
        alert("You Are Very CLOSE 🤐🤐🤐");
        score--;
        document.querySelector(".score").textContent = score;
    }
    else if(inputNumber > seceretNumber){
        alert("Higher Than Expected ☹");
        score--;
        document.querySelector(".score").textContent = score;
    }
    else if(inputNumber < seceretNumber){
        alert("Lower Than Expected ☹");
        score--;
        document.querySelector(".score").textContent = score;
    }

    if(score === 0){
        alert("😭😭😭\nYou Lost The Game!\nYour Score is 0.\nTry Again👍🏻");
        score = 20;
        let againBlink = document.querySelector("#playAgain");
        console.log(againBlink.classList);
        againBlink.classList.remove("animation-play-again");
        console.log(againBlink.classList);
        document.querySelector(".score").textContent = 20;
        document.querySelector(".input-box").value = '';
        document.querySelector(".secret-number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "black";
    }
})

//Play Again Functionalities
let playAgain = document.querySelector("#playAgain");
playAgain.addEventListener("click",()=>{
    score = 20;
    seceretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(seceretNumber);
    let againBlink = document.querySelector("#playAgain");
    console.log(againBlink.classList);
    againBlink.classList.remove("animation-play-again");
    console.log(againBlink.classList);
    document.querySelector(".score").textContent = 20;
    document.querySelector(".input-box").value = '';
    document.querySelector(".secret-number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "black";
})
