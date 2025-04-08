//Get the button
var mybutton = document.querySelector(" .to-top");

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.opacity = "0.50";
  } else {
    mybutton.style.opacity = "0";
  }
}

// ---------------------------------------------------------------------------------------

// // Get the button (fixed selector - removed space before .to-top)
// var mybutton = document.querySelector(".to-top");

// // Show/hide button on scroll with throttling for mobile performance
// var isScrolling;
// window.addEventListener('scroll', function() {
//   window.clearTimeout(isScrolling);
//   isScrolling = setTimeout(function() {
//     scrollFunction();
//   }, 100); // Throttle to 100ms
// }, {passive: true}); // Add passive listener for better mobile performance

// function scrollFunction() {
//   // Cross-browser scroll position detection
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
//   if (scrollPosition > 200) {
//     mybutton.style.opacity = "0.5";
//     mybutton.style.visibility = "visible";
//     mybutton.style.pointerEvents = "auto";
//   } else {
//     mybutton.style.opacity = "0";
//     mybutton.style.visibility = "hidden";
//     mybutton.style.pointerEvents = "none";
//   }
// }

// // Smooth scroll to top when button is clicked
// mybutton.addEventListener('click', function(e) {
//   e.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });
