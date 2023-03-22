// Daniel DeBenedetto
// 2023-02-15

// Need to fix the nav button when expanded. 
//if classlist.contains None  -- classlist remove

// Fun page accordion box
const acc = document.getElementsByClassName("accordion-box");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const infobox = this.nextElementSibling;
    if (infobox.style.display === "block") {
      infobox.style.display = "none";
    } else {
      infobox.style.display = "block";
    }
  });
}

// Hamburger button 
function toggleNav() {
  const x = document.getElementById("navLinks");
  console.log(x)
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
} 

