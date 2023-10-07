//Navbar
// Function to close the navbar when a menu item is clicked
function closeNavbar() {
  // Get the checkbox element
  const checkbox = document.getElementById("check");

  // Uncheck the checkbox to close the navbar
  checkbox.checked = false;
}

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
    .catch((error) => {
      toggle_error();
      form.reset();
      console.error("Error!", error.message);
    });
});

// Popup-success message
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

// Popup1-Error message
function toggle_error() {
  var blur = document.getElementById("blur");
  var popup1 = document.getElementById("popup1");

  if (popup1.classList.contains("active")) {
    popup1.classList.remove("active");
    blur.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    popup1.classList.add("active");
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
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      if (activeSection !== section) {
        dots.forEach((dot) => {
          dot.classList.remove("active");
        });
        dots[index].classList.add("active");

        activeSection = section;
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

//Toggle mobile menu
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("show-menu");
  console.log("Hello");
}

function closeMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("show-menu");
}

// Add click event listeners to the menu items
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mobile-menu a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", closeMobileMenu);
  });
});

