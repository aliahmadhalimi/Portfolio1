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


