let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document. getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Winning Pattern Array
let winningPattern =[ 
[0,1,2] ,
[0,3,6] ,
[2,5,8],
[6,7,8],
[3,4,5],
[1,4,7],
[0,,4,8],
[2,4,6],
];
//player'x' plays first
let xTurn = true;
let count = 0;

//Disable all buttons
const disableButtons = () => {
    btnRef.forEach((element)=> element.disabled = true);
    //enable popup
    popupRef.classList.remove("hide");
};

//Enable all buttons for new game
const enableButtons = () => {
    btnRef.forEach(element=>{
        element.innerText ="";
        element.disabled = "false";
    });
    //disable popup
    popupRef.classList.add("hide");
};


const winFunction = (letter) => {
  disableButtons();
}

//New Game
newgameBtn.addEventlistener("click", () =>{
    count =  0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count =  0;
    enableButtons(); 
})

//this function is executed when a player wins
const winFunction = (Letter) =>{
  disableButtons(); 
  if(letter == "X"){
    msgRef.innerHTML = "&#x1F389; <br>'X' Wins"
  }
  else{
      msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F389; <br> it's a draw"
};

//Win Logic 
const winChecker = () => {
    //Loop through all win patterns
    for(let i of winningPattern){
       let[element1, element2, element3] = [
        btnRef[i[0]].innerText,
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if(element != "" && (element2 !="")& (element3 != ""){
        if(element1 == element2 && element2 == element3){
            //if all 3 buttons have same values then pass tje value to winFunction
            winFunction(element1);
            
        }
    }
    
 }
};

// Display X/O on click
btnRef.forEach((element)=> {
    element.addEventListener("click",()=>{
if(xTurn){
    xTurn = false;
    // Display X
    element.innerText = "X";
    element.disabled = true;
} else {
    xTurn = true;
    //Display y
    element.innerText = "O";
    element.disabled = true;
}
//increment count on each click
count += 1;
if (count === 9){
  drawFunction();
}
//Check for win on every click
winChecker();
    });
});
//Enable buttons and disable popups
window.onload = enableButtons;
