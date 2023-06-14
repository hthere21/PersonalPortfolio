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