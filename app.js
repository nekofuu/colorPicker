var colors = [	"rgb(255, 0, 0)",
				"rgb(0, 255, 0)",
				"rgb(0, 0, 255)",
				"rgb(250, 250, 0)",
				"rgb(255, 0, 255)",
				"rgb(0, 255, 255)" ]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color
		var clickedColor = this.style.background;
		//compare to picked
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else {
			messageDisplay.textContent = "Try Again!";
			this.style.background = "#232323";
		}
	})
}

function changeColors(color) {
	//loop through squres
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var rng = Math.floor(Math.random() * colors.length);
	return colors[rng];
}