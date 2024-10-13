
// Loop through each drum button and add a click event listener
for(let i = 0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    // Get the inner HTML of the clicked button
    var buttonInnerHTML = this.innerHTML;

    // Play sound based on the button clicked
    makeSound(buttonInnerHTML);

    // Trigger animation for the button
    buttonAnimation(buttonInnerHTML);
}
)
}

// Add an event listener to detect keypress events on the whole document
document.addEventListener("keypress",function(event){

    // Play sound based on the key pressed
    makeSound(event.key);
    
    // Trigger animation for the button corresponding to the key
    buttonAnimation(event.key);
    
})

// Function to play sound based on the key or button pressed
function makeSound(key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log();
            break;
    }
    
}

// Function to add animation when a button is pressed or a key is hit
function buttonAnimation(currentKey){
    // Select the button that corresponds to the key
    var activeButton = document.querySelector("." + currentKey);

    // Add the 'pressed' class to the button to change its appearance
    activeButton.classList.add("pressed");

    // Remove the 'pressed' class after 100 milliseconds to return the button to its normal state
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}
   
