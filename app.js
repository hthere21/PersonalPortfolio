//Navbar
// Function to close the navbar when a menu item is clicked
function closeNavbar() {
  // Get the checkbox element
  const checkbox = document.getElementById("check");

  // Uncheck the checkbox to close the navbar
  checkbox.checked = false;
}

// Add click event listeners to the menu items
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar ul li a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", closeNavbar);
  });
});

const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentNode.classList.add("focus");
    input.parentNode.classList.add("not-empty");
  });
  input.addEventListener("blur", () => {
    if (input.value == "") {
      input.parentNode.classList.remove("not-empty");
    }
    input.parentNode.classList.remove("focus");
  });
});

//Scroll to reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".hidden-left, .hidden-right, .hidden, .fade, .programming-language-card.hidden"
);
hiddenElements.forEach((el) => observer.observe(el));

//Contact form
send_btn = document.querySelector(".send-button");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbymbOhAbKPBD4-G5f-buXVzZB4pilSAKJ12KFtQfSAKlrndoIRgOCOuW53cxfLVq7v5Jg/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  send_btn.innerHTML = "<div class ='loader'></div>";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      toggle();
      form.reset();
      send_btn.innerHTML = "Send message";
    })
    .catch((error) => console.error("Error!", error.message));
});

// Popup
function toggle() {
  var blur = document.getElementById("blur");
  var popup = document.getElementById("popup");

  if (popup.classList.contains("active")) {
    popup.classList.remove("active");
    blur.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    popup.classList.add("active");
    blur.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Get all sections to spy on
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
let activeSection = null;

// Function to update the scroll spy indicator
function updateScrollSpy() {
  console.log(sections);
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      if (activeSection !== section) {
        dots.forEach((dot) => {
          dot.classList.remove("active");
        });
        dots[index].classList.add("active");

        activeSection = section;

        console.log("Currently at section:", section.id);
      }
    }
  });
}

window.addEventListener("scroll", updateScrollSpy);
updateScrollSpy();
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const sectionId = dot.getAttribute("data-section");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Get a reference to the input element(s) that trigger the keyboard
const inputElement = document.getElementById("section6");

// Get a reference to the footer element
const footer = document.querySelector(".footer");

// Listen for the focus event on the input element
inputElement.addEventListener("focus", () => {
  // Adjust the layout when the keyboard opens
  footer.style.marginBottom = "300px"; // Adjust this value as needed
});

// Listen for the blur event on the input element
inputElement.addEventListener("blur", () => {
  // Reset the layout when the keyboard closes
  footer.style.marginBottom = "0";
});
