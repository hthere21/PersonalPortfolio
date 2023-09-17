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
document.getElementById("portfolioLabel").addEventListener("click", function() {
    // Navigate to the "introduction.html" page
    window.location.href = "introduction.html";})

    //Button
document.querySelector('.close-btn').addEventListener('click', function () {
  document.getElementById('check').checked = false;
});
