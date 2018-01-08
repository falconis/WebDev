var numberOfSquares = 3;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    //Mode button event listeners
    for(var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click",function()
        {
            for(var j = 0; j < modeButtons.length; j++)
                modeButtons[j].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy")
                numberOfSquares = 3;
            else if(this.textContent === "Hard")
                numberOfSquares = 6;
            else
                numberOfSquares = 9;
            reset();
        });
    }

    for(var i = 0; i < squares.length; i++)
    {
        // Adding click listeners 
        squares[i].addEventListener("click",function()
        {
            // To get color of selected square
            var clickedColor = this.style.backgroundColor;
            //Comparing Colors with pickedColor
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again"
            }
        });
    }
    reset();
}


function reset()
{
    //figure out how many squares to show
    //pick new colors
    //pick a new pickColor
    //update
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        //none hides all content
        squares[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";    
}

resetButton.addEventListener("click", function()
{
    reset();
    this.textContent = "New Colors";
});

function changeColors(color)
{
    for(i = 0; i < squares.length; i++)
    {
        // Assigning same color after right color is chosen
        squares[i].style.backgroundColor = color;
        //To display required squares
        if(i >= numberOfSquares)
            squares[i].style.display = "none";
    }
}

function pickColor()
{
    // To get random color from colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var array = []
    // Generation
    for(i = 0; i < num; i++)
    {
        array[i] = randomColor();
    }
    return array;
}

function randomColor()
{
    // Since 0 - 255 required
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Formatting to rgb(r, g, b)
    return "rgb("+r+", "+g+", "+b+")";   
}