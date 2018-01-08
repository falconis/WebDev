var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++)
{
    // Adding initial color to squares
    squares[i].style.backgroundColor = colors[i];
    // Adding click listeners 
    squares[i].addEventListener("click",function()
    {
        // To get color of selected square
        var clickedColor = this.style.backgroundColor;
        //Comparing Colors with pickedColor
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    });

}

function changeColors(color)
{
    for(i = 0; i < squares.length; i++)
    {
        // Assigning same color after right color is chosen
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    // To get random color from colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}