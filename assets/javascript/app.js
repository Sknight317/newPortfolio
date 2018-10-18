 
var i = 0;
var txt = "Welcome to My Portfolio";
var speed = 150; 

// Typewriter function to display each letter in the text
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  // Document ready funtion to run the typewriter function after 2 seconds when the page is fully loaded
  $(document).ready(function(){
      setInterval(typeWriter, 2000)
  });
 
 // Collapse Navbar
 var navbarCollapse = function() {
    if ($("#Nav").offset().top > 100) {
      $("#Nav").addClass("navbar-shrink");
    } else {
      $("#Nav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);