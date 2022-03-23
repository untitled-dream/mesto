let editForm = document.getElementById("popup-edit");


/* form opening */
let openFormButton = document.querySelector(".profile__button-edit");
function formOpenHandler(evt) {
    evt.preventDefault();
    editForm.classList.add("popup_opened");
    
    let nameCurrent = document.querySelector(".profile__name").innerText;
    let descriptionCurrent = document.querySelector(".profile__description").innerText;

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

/* set like */
let likeButton = document.getElementsByClassName("elements__button-like");
for (var i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function(index) {
        let likeButtonIndex = index + 1;
        let button_like = document.querySelector("li:nth-child(" + likeButtonIndex + ") .elements__button-like");
        button_like.classList.toggle("elements__button-like_active");
    }.bind(this, i));
 }