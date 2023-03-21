// Daniel DeBenedetto
// 2023-02-15

// Fun page accordion box
var acc = document.getElementsByClassName("accordion-box");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var infobox = this.nextElementSibling;
    if (infobox.style.display === "block") {
      infobox.style.display = "none";
    } else {
      infobox.style.display = "block";
    }
  });
}

/* Hamburger button */
function toggleNav() {
  var x = document.getElementById("navLinks");
  console.log(x)
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
} 

