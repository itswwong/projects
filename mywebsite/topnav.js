//hover effect
function showTopnav(nav) {
  // begin top nav

  document.write('<div class = "myheader"><div>');

  if (nav == "home") {
    document.write('<div class = "heading">HOME</div>');
  } else {
    document.write(
      '<div class = "heading"><a href = "index.html">HOME</a></div>'
    );
  }
  /*
        if (nav == 'about') {
            document.write('<div class = "heading nostyle">ABOUT</div>');
        } else {
            document.write('<div class = "heading"><a href = "about.html">ABOUT</a></div>');
        }
    */
  if (nav == "recipes") {
    document.write('<div class = "heading">RECIPES</div>');
  } else {
    document.write(
      '<div class = "heading"><a href = "recipes.html">RECIPES</a></div>'
    );
  }

  if (nav == "photos") {
    document.write('<div class = "heading">PHOTOS</div>');
  } else {
    document.write(
      '<div class = "heading"><a href = "photos.html">PHOTOS</a></div>'
    );
  }

  if (nav == "resume") {
    document.write('<div class = "heading">RESUME</div>');
  } else {
    document.write(
      '<div class = "heading"><a href = "resume.html">RESUME</a></div>'
    );
  }

  document.write("</div></div>");

  // end top nav
}

function showFooter() {
  var writeIcons =
    '<div class="myfooter center"> \
    <div id="social-test"> \
        <ul class="social"> \
            <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> \
            <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li> \
            <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> \
            <li><a href="https://www.github.com/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li> \
        </ul> \
    </div> \
</div>';
  document.write(writeIcons);
}

//photo page slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}