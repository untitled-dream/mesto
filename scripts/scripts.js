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

function openEditForm() {
    let editForm = document.getElementById("popup-edit");
    editForm.classList.add("popup_opened");

    document.getElementById("name").value = document.querySelector(".profile__name").innerText;
    document.getElementById("description").value = document.querySelector(".profile__description").innerText;
}

function closeEditForm() {
    let editForm = document.getElementById("popup-edit");
    editForm.classList.remove("popup_opened");
 }