const button = document.querySelector(".name-label");
const inputArea = document.querySelector(".input-area");

button.addEventListener("click",()=>{
    const invitation = document.querySelector(".invitation");
    invitation.textContent = `hello ${inputArea.value = "Vincent Maante"},welcome to bootcamp`

})
