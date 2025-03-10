let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
  });
}

// main.js

// Function to animate text letter by letter
function animateText(targetElement, text) {
  targetElement.textContent = ""; // Clear existing text content
  let characters = text.split("");
  let index = 0;

  function type() {
    if (index < characters.length) {
      targetElement.textContent += characters[index];
      index++;
      setTimeout(type, 100); // Adjust the interval (in milliseconds) for the speed of animation
    } else {
      index = 0;
      setTimeout(function() {
        animateText(targetElement, text); // Restart the animation after a delay
      }, 1000); // Adjust the delay (in milliseconds) before restarting the animation
    }
  }

  // Call the function to animate the text
  type(); // Initial call to start the animation
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Select the element where you want the animation to appear
  let designationElement = document.querySelector(".text-three");

  // Text content to animate
  let designationText = "Software Developer";

  // Call the function to animate the text
  animateText(designationElement, designationText);
});
