const userInput = document.getElementById("user-input");
const resultOutput = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const timeDisplay = document.getElementById("time-display");

const cleanStringInput = (str) => {
    
    return str.replace(/[^\d()-\s?]/g, "")
}

const isValidNumber = (input) => {
    const inputString = cleanStringInput(input);
    const regex = /^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/g;

    const result = regex.test(inputString) ? `Valid US number: ${inputString}` : `Invalid US number: ${input}`;


    resultOutput.textContent = result;

}

const clear = (event) => {
    userInput.value = "";
    resultOutput.textContent = "";
}

const formatTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours === 0){
        hours = 12;

    } else if(hours > 12 ){
        hours -= 12
    };

    minutes = minutes < 10 ? "0" + minutes : minutes;

    timeDisplay.textContent = `${hours}:${minutes}`;
}



checkButton.addEventListener("click", () => {

 return userInput.value === "" ? alert("Please provide a phone number") : isValidNumber(userInput.value);


})

clearButton.addEventListener("click", clear);

setInterval(formatTime, 1000);

formatTime();