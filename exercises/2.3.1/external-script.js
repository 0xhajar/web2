const form = document.querySelector("form");
const souhaitEntre = document.querySelector("#souhaitEntre");
const messageDiv = document.querySelector("#souhait");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    form.style.display = "none";
    messageDiv.innerText = `Votre souhait :
        ${souhaitEntre.value}`;
});
