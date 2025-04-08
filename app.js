// //Get the button
// var mybutton = document.querySelector(" .to-top");

// // When the user scrolls down 20px from the top of the document, show the button

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     mybutton.style.opacity = "0.50";
//   } else {
//     mybutton.style.opacity = "0";
//   }
// }

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


// Get the button (ensure your HTML has class="to-top" without space)
const scrollToTopBtn = document.querySelector(".to-top");

// Throttled scroll handler for better performance
let isScrolling;
window.addEventListener('scroll', function() {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function() {
    toggleScrollButton();
  }, 100);
}, {passive: true});

function toggleScrollButton() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 200) {
    scrollToTopBtn.style.opacity = "0.8";
    scrollToTopBtn.style.visibility = "visible";
    scrollToTopBtn.style.pointerEvents = "auto";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
    scrollToTopBtn.style.pointerEvents = "none";
  }
}

// Smooth scroll function that works on iOS
function smoothScrollToTop() {
  const startPosition = window.pageYOffset;
  const duration = 500; // milliseconds
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp || performance.now();
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    window.scrollTo(0, startPosition * (1 - easeInOutCubic(progress)));
    
    if (timeElapsed < duration) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  window.requestAnimationFrame(scrollStep);
}

// Event listener with iOS detection
scrollToTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  // Check if iOS Safari
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  if (isIOS && isSafari) {
    smoothScrollToTop(); // Use our custom smooth scroll
  } else {
    // Use native smooth scroll for other browsers
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

