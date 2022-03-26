let profileForm = document.querySelector(".popup");
let openProfileFormButton = document.querySelector(".profile__button-edit");
let closeProfileFormButton = document.querySelector(".popup__button-close");

let nameInput = document.getElementById("profile-name");
let descriptionInput = document.getElementById("profile-description");

let nameCurrent = document.querySelector(".profile__name");
let descriptionCurrent = document.querySelector(".profile__description");

/* form opening */
function formOpenHandler(evt) {
    evt.preventDefault();
    profileForm.classList.add("popup_opened");
    
    nameInput.value = nameCurrent.textContent;
    descriptionInput.value = descriptionCurrent.textContent;
}

/* form submit */
function formSubmitHandler(evt) {
    evt.preventDefault();
    
    nameCurrent.textContent = nameInput.value;
    descriptionCurrent.textContent = descriptionInput.value;
    
    formCloseHandler(evt);
}

/* form closing */
function formCloseHandler(evt) {
    evt.preventDefault();
    profileForm.classList.remove("popup_opened");
}

openProfileFormButton.addEventListener("click", formOpenHandler);
profileForm.addEventListener("submit", formSubmitHandler);
closeProfileFormButton.addEventListener("click", formCloseHandler);