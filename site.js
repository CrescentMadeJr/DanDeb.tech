// Daniel DeBenedetto
// 2023-02-15

// Need to fix the nav button when expanded. 
//if classlist.contains None  -- classlist remove

// Hamburger menu 
function toggleNav() {
  const x = document.getElementById("navLinks");
  console.log(x)
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
} 

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

//Contact form
const form = document.querySelector('#contact-form');
const output = document.querySelector('#output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  // Save data to session storage.
  sessionStorage.setItem('contactData', JSON.stringify(data));

  // Display saved data from seesion storage
  const savedData = JSON.parse(sessionStorage.getItem('contactData'));
  output.innerHTML = `
  <section class="
    <p>Name: ${savedData.fullname}</p>
    <p>Email: ${savedData.email}</p>
    <p>Message: ${savedData.message}</p>
  `;
});
