let choices=document.querySelectorAll(".choices");
let userCount=document.querySelector(".userCount");
let compCount=document.querySelector(".compCount");
let message=document.querySelector(".message");
let hide=document.querySelector(".hide");
let newGame=document.querySelector(".newgame")
usercount=0;
compcount=0;
const ranCompChoice=()=>{
    const choicesComp=["rock","paper","scissor"];
    const randomNum=Math.floor(Math.random()*3);
    return choicesComp[randomNum];
}
const resetGame=()=>{
    alert("You will lose your progress");
    usercount=0;
    compcount=0;
    message.classList.remove("hide","lose","win")
    message.innerText="Play your Move";
    compCount.innerText=`${compcount}`;
    userCount.innerText=`${usercount}`;
    
}
const playGame=(userChoice)=>{
    // console.log(userChoice);
    const compChoice=ranCompChoice();
    console.log(compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ?false:true;
            
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true ;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        WinGame(userWin,userChoice,compChoice); 
    }
}
const drawGame=()=>{
    message.innerText="Game was Draw";
    message.classList.remove("hide","lose","win");
}

const WinGame=(userWin,userChoice,compChoice)=>{
    if(userWin){
    message.innerText=`You Win`;
    message.classList.add("win");
    message.classList.remove("hide","lose");
    usercount+=1;
    userCount.innerText=`${usercount}`;
    
    }
    else{
        message.innerText="You Lose";
        message.classList.add("lose",);
        message.classList.remove("hide","win");
        compcount+=1;
        compCount.innerText=`${compcount}`;
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        message.classList.add("hide");
        // console.log(userChoice);
        playGame(userChoice);
    })
})
newGame.addEventListener("click",resetGame);
