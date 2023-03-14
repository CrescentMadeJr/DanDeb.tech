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