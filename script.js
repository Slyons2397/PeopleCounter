// initialize the count as 0
// add click event listener and increment the count
// change the count-el in the HTML

// const counter = document.getElementById("count-el")
// const incrementBtn = document.getElementById("increment-btn")

// incrementBtn.addEventListener('click', function(){
//     counter.innerText + 1
// })

const incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");
let count = 0;

incrementBtn.addEventListener('click', function(){
    count += + 1;
    countEl.innerText = count;
    
 
});

const saveBtn = document.getElementById("save-btn");

const previousEntries = document.getElementById("previous-entries");
 

saveBtn.addEventListener('click', function save(){
    prevEntriesInput =  " " + count + " " + " - ";
    previousEntries.textContent += prevEntriesInput 
    console.log(previousEntries.textContent)
    count = 0;
    countEl.innerText = count;
});


// const welcomeEl = document.getElementById("welcome-el");
// let name = "Samuel Lyons";
// let greeting = "Welcome back,";

// welcomeEl.innerText = greeting + " " + name;

// welcomeEl.innerText += " " + ":)"
