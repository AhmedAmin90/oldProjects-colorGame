
var mainHeader = document.querySelector(".header");
var spanChange = document.querySelector("#h1span");
var butNewColor = document.querySelector("#new-color");
var parResult = document.querySelector("#result");
var butLevel = document.querySelector("#easybtn");
var hardlevel = document.querySelector("#hardbtn");
var squares = document.querySelectorAll(".square");






// we need  each time 6 colors randomly;
//and select one color code randomly from this 6 colors;
// This selected color code will be shown in h1Span.


// this function for generating random colors in color array:

function generateRandomColors(num){
    
    for (var i=0; i < num; i++) {
        newColor.push(randomColors());
    }
    
};

// select one color code: 

function selectOneColor(){
    var randomOneColor = Math.floor(Math.random() * newColor.length);
    return newColor[randomOneColor];
};


// make function to start new game:
var selectedColor;

function startNewGame (num){
    generateRandomColors(num);
    selectedColor = selectOneColor();
    spanChange.textContent = selectedColor;
    for (var i = 0; i < num; i++ ){
       squares[i].style.backgroundColor = newColor[i];
            }; 
};


// make random colors:
function randomColors(){
  var colors = []; // no need
  var r = Math.floor(Math.random() * 256 );
  var g = Math.floor(Math.random() * 256 );
  var b = Math.floor(Math.random() * 256 );
  colors = [r, g, b]; // no need
  return "rgb(" + r + ", " + g + ", " + b + ")";

};

//function for change color for all squares when it is correct:
function changeSquareColor(color){
    for (var i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

};

// put random colors into array:
var newColor = [];

function theGame(){
    
    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === selectedColor){
                mainHeader.style.backgroundColor = selectedColor;
                butNewColor.textContent = " PLAY AGAIN ?";
                parResult.style.visibility = "visible";
                parResult.textContent = "Correct !";
                changeSquareColor(selectedColor);
            } else {
                this.style.backgroundColor = "#242424";
                parResult.style.visibility = "visible";
                parResult.textContent = "Try again !";

            };

        });
    }
}


//this to start the game every refresh:
 window.addEventListener("click" , startNewGame(6), theGame());

// this is for restart game by new color button:
function restartGame(){
    newColor = [];
    startNewGame(6);
    theGame();
    parResult.style.visibility = "hidden";
    mainHeader.style.backgroundColor = "#4682B4";
    butNewColor.textContent = "NEW COLOR ";

    
};

butNewColor.addEventListener("click", function(){
    restartGame();
    
});

// this is for easy level:

function easyRestart(){
    newColor = [];
    startNewGame (3);
    theGame();
    parResult.style.visibility = "hidden";
    mainHeader.style.backgroundColor = "#4682B4";
    for (var i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
        };
    butLevel.style.backgroundColor = "steelblue";
    butLevel.style.color = "white";
    hardlevel.style.backgroundColor = "transparent";
    hardlevel.style.color = "#4682B4";
     
};


butLevel.addEventListener("click", function(){

    easyRestart();
})

// this is for hard level:
function hardRestart(){
    newColor = [];
    startNewGame (6);
    theGame();
    for (var i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
        };
    parResult.style.visibility = "hidden";
    mainHeader.style.backgroundColor = "#4682B4";
    hardlevel.style.backgroundColor = "steelblue";
    hardlevel.style.color = "white";
    butLevel.style.backgroundColor = "transparent";
    butLevel.style.color = "#4682B4";
    
     
};

hardlevel.addEventListener("click", function(){
    hardRestart();
})

