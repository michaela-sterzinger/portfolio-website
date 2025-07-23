console.log("Hello world")

function menuToggle() {
    var x = document.getElementById('mynavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } 
    
    else {
        x.className = 'navtoggle';
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1500, "easeInOutExpo");
    return false;
  });