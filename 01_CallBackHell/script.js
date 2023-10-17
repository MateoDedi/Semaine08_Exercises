
let currentIndex = 0;

function changeBackgroundColor() {
    const colors = ["blue", "yellow", "red", "cyan", "violet", "green", "purple"];
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(changeBackgroundColor, 1000);
}

setTimeout(changeBackgroundColor, 1000);

/*
document.body.style.backgroundColor = colors[currentIndex];: It sets the background color of the body element to the color at the 
current index in the colors array.

currentIndex = (currentIndex + 1) % colors.length;: This line increments the currentIndex to move to the next color in the array. 
It ensures that when currentIndex reaches the end of the array, it wraps back to the beginning, 
thanks to the modulo operator (%). This creates a looping effect.
*/