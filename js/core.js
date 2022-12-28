var topPos = window.pageYOffset;
var secondPos = window.pageYOffset+500;
window.onscroll = function hideAndShowMiniNav() {
  var scrolled = window.pageYOffset;
  if (topPos >= scrolled) {
    document.getElementById("nav-wrapper").style.top = "0";
    document.getElementById("nav-wrapper").classList.remove("scrolled");
    document.getElementById("nav-body").classList.remove("scrolled");
    
  } else if (topPos < scrolled&&scrolled<secondPos){
    document.getElementById("nav-wrapper").style.top = "-100px";
    
    
  }
  else {
          document.getElementById("nav-wrapper").style.top = "-15px";
          
          document.getElementById("nav-wrapper").classList.add("scrolled");
    document.getElementById("nav-body").classList.add("scrolled");
          
        } 
};
