const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((input)=> {
    input.addEventListener("focus", () => {
        input.parentNode.classList.add("focus");
        input.parentNode.classList.add("not-empty");
    });
    input.addEventListener("blur", () => {
        if(input.value == ""){
            input.parentNode.classList.remove("not-empty");
        }
        input.parentNode.classList.remove("focus");
    });
})


//Logo clicking
// document.getElementById("portfolioLabel").addEventListener("click", function() {
//     // Navigate to the "introduction.html" page
//     window.location.href = "introduction.html";})



//Scroll to reveal
// JavaScript to reveal the hidden items
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden, .fade, .programming-language-card.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  


  //Contact form 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbymbOhAbKPBD4-G5f-buXVzZB4pilSAKJ12KFtQfSAKlrndoIRgOCOuW53cxfLVq7v5Jg/exec'
  const form = document.forms['contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>
         {
            toggle()
            form.reset()
  })
      .catch(error => console.error('Error!', error.message))
  })



// Popup
function toggle() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('popup');
  
    if (popup.classList.contains('active')) {
      // If popup is active, remove 'active' class and overflow: hidden
      popup.classList.remove('active');
      blur.classList.remove('active');
      document.body.style.overflow = ''; // Remove overflow: hidden
    } else {
      // If popup is not active, add 'active' class and overflow: hidden
      popup.classList.add('active');
      blur.classList.add('active');
      document.body.style.overflow = 'hidden'; // Add overflow: hidden
    }
  }
  



// Get all sections to spy on
const sections = document.querySelectorAll("section");

// Get the scroll spy indicator dots
const dots = document.querySelectorAll(".dot");

// Initialize a variable to keep track of the active section
let activeSection = null;

// Function to update the scroll spy indicator
function updateScrollSpy() {
    console.log(sections)
    sections.forEach((section, index) => {

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            // Only update if the active section has changed
            if (activeSection !== section) {
                // Remove "active" class from all dots
                dots.forEach((dot) => {
                    dot.classList.remove("active");
                });

                // Add "active" class to the corresponding dot
                dots[index].classList.add("active");

                // Update the active section
                activeSection = section;

                // Log the section information
                console.log("Currently at section:", section.id);
            }
        }
    });
}


// Attach a scroll event listener
window.addEventListener("scroll", updateScrollSpy);

// Initial call to set the initial state
updateScrollSpy();

// Add click event listeners to dots for scrolling
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const sectionId = dot.getAttribute("data-section");
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
