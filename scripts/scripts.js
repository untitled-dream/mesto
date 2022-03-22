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