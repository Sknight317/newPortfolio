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