function headerAndFooterStart() {
    document.getElementById('header').innerHTML += " <a href='index.html'> <img class='logo' src='" + back + "assets/images/logo.svg'/></a>  <div class='topbarlinks'><a href='" + back + "index.html'> <div class='topbarlink' id='home'>Home</div> </a> <a href='" + back + "about.html'> <div class='topbarlink' id='about'>About Us</div ></a> <a href='" + back + "events/index.html'> <div class='topbarlink' id='events'>Events</div> </a> <a href='" + back + "volunteerinfo.html'> <div class='topbarlink' id='info'>Information</div> </a></div> </div>";
    document.getElementById('footer').innerHTML += " <div class='tricolumn' id='firsttricolumn'> <a href='" + back + "index.html'>Home</a> <br /> <a href='" + back + "about.html'>About Us</a> <br /> <a href='" + back + "about.html#contact'>Contact Us</a> <br /> <a href='" + back + "news.html'>News</a> </div> <div class='tricolumn' id='secondtricolumn'> <a href='" + back + "events/index.html'>Events</a> <br /><a href='" + back + "testimonials.html'>Testimonials</a> <br> <a href='" + back + "volunteerinfo.html'>Information</a> </div> <div class='tricolumn' id='thirdtricolumn'> <a href='https://www.twitter.com'> <img class='icon' src='" + back + "assets/images/twit.svg'/> </a> <a href='https://www.facebook.com'> <img class='icon' src='" + back + "assets/images/fb.svg'/> </a> <br /> 760 Hillsdale Ave San Jose, CA 95136 <br /> </div>  <center class='centered'> <br> Copyright \u00A9 Humanity Helping Homeless 2016 - " + new Date().getFullYear() + " <p></p> <p></p> <p></p> <br /> "
    document.getElementById(currentSite).className = "topbarlinkcurrent";
    document.getElementById('title').innerHTML = currentsite + " - Humanity Helping Homelessnes";
}
