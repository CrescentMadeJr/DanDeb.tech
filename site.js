// Daniel DeBenedetto
// 2023-02-15

// Hamburger menu
function toggleNav() {
  const x = document.getElementById("navLinks");
  console.log(x);
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
  acc[i].addEventListener("click", function () {
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
const form = document.querySelector("#contact-form");
const output = document.querySelector("#output");
const message = document.querySelector("#message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  // Save data to session storage
  sessionStorage.setItem("contactData", JSON.stringify(data));

  // Check if any form data has been entered
  const isEmpty = Object.values(data).every((x) => x === null || x === "");
  if (isEmpty) {
    output.innerHTML = "";
    return;
  }

  // Display information back to the user
  const savedData = JSON.parse(sessionStorage.getItem("contactData"));
  output.innerHTML = `
    <p class="message-title">An email will be not sent with this information.  Data is not saved.  Thank you and have a nice day.</p>
    <p class="message">From: ${savedData.email}</p>
    <p class="message">Subject: Message from ${savedData.name}</p>
    <p class="message">Message: ${savedData.message}</p>
  `;
});

// Set a character limit for the message.
message.addEventListener("input", function () {
  const maxChars = parseInt(message.getAttribute("maxlength"));
  const charsEntered = message.value.length;

  if (charsEntered > maxChars) {
    message.setCustomValidity(
      `You have exceeded the maximum character limit of ${maxChars} characters.`
    );
  } else {
    message.setCustomValidity("");
  }
});
