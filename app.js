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

//     //Button
// document.querySelector('.close-btn').addEventListener('click', function () {
//   document.getElementById('check').checked = false;
// });




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



  //Popup
  function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
  }