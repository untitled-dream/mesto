let editForm = document.getElementById("popup-edit");

let nameCurrent = document.querySelector(".profile__name").innerText;
let descriptionCurrent = document.querySelector(".profile__description").innerText;

/* form opening */
let openFormButton = document.querySelector(".profile__button-edit");
function formOpenHandler(evt) {
    evt.preventDefault();
    editForm.classList.add("popup_opened");
    document.getElementById("name").value = nameCurrent;
    document.getElementById("description").value = descriptionCurrent;
}
openFormButton.addEventListener("click", formOpenHandler);

/*  form closing */
let closeFormButton = document.querySelector(".popup__button-close");
function formCloseHandler(evt) {
    evt.preventDefault();
    editForm.classList.remove("popup_opened");
}
closeFormButton.addEventListener("click", formCloseHandler);

/* form submit */
let formElement = document.querySelector(".popup__button-submit");
function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.getElementById("name").value;
    let descriptionInput = document.getElementById("description").value;
    document.querySelector(".profile__name").textContent = nameInput;
    document.querySelector(".profile__description").textContent = descriptionInput;
    editForm.classList.remove("popup_opened");
}
formElement.addEventListener("click", formSubmitHandler);

function set_like() {
    let card_buttons_like = document.querySelectorAll(".elements .elements__card");
    let tab = [];
    let index;

     for (let i = 0; i < card_buttons_like.length; i++) {
         
        tab.push(card_buttons_like[i].innerHTML);
        
        card_buttons_like[i].onclick = function() {
             index = tab.indexOf(this.innerHTML) + 1;
             let button_like = document.querySelector("li:nth-child(" + index + ") .elements__button-like");
             button_like.classList.toggle("elements__button-like_active");
        };
     }
}