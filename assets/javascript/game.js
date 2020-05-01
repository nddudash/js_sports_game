//Left-Side Initializations
let leftShoot = document.querySelector("#teamone-shoot-button");
let leftShots =  document.querySelector("#teamone-numshots");
let leftGoals = document.querySelector("#teamone-numgoals");

//Right-Side Initializations
let rightShoot = document.querySelector("#teamtwo-shoot-button");
let rightShots = document.querySelector("#teamtwo-numshots");
let rightGoals = document.querySelector("#teamtwo-numgoals");

//Reset Button Initialization
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");

//Reset Functionality
resetButton.addEventListener("click", function() {
    let resetCount = Number(numResets.innerHTML) + 1;
    numResets.innerHTML = resetCount;
    console.log("Reset Successfully Pressed!")
    //Reset Goals
    leftGoals.innerHTML = "0";
    rightGoals.innerHTML = "0";
    //Reset Shots
    leftShots.innerHTML = "0";
    rightShots.innerHTML ="0";
})

//Left-side Functionality
leftShoot.addEventListener("click", function() {
    //Button Function
    let newNumShots = Number(leftShots.innerHTML) + 1;
    leftShots.innerHTML = newNumShots;
    //Random Generator (Skill)
    let leftSkill = Math.floor(Math.random() *100) + 1;
    console.log("Left Side Shoots! Score Chance Is", leftSkill);
    //Goal Attempt Function
    if (leftSkill >= 50) {
        let goalsScored = Number(leftGoals.innerHTML) + 1;
        leftGoals.innerHTML = goalsScored;
        console.log("Left Side Scores!")
    }
})

//Right-side Functionality
rightShoot.addEventListener("click", function() {
    //Button Function
    let newNumShots = Number(rightShots.innerHTML) + 1;
    rightShots.innerHTML = newNumShots;
    //Random Generator (Skill)
    let rightSkill = Math.floor(Math.random() *100) + 1;
    console.log("Right Side Shoots! Score Chance is", rightSkill);
    //Goal Attempt Function (Right Team is a little better :v)
    if (rightSkill >= 40) {
        let goalsScored = Number(rightGoals.innerHTML) + 1;
        rightGoals.innerHTML = goalsScored;
        console.log("Right Side Scores!")
    }
})