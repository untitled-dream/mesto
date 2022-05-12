export function openPopup(popup) {
    popup.classList.add("popup_opened");

    popup.addEventListener("mousedown", handleOverlayClose);
    document.addEventListener("keydown", handleModalEscapePress);
}

export function handleOverlayClose(evt) {
    const popupClosedByBackdrop = evt.target;

    if (popupClosedByBackdrop.classList.contains("popup_opened")) {
        closePopup(popupClosedByBackdrop);
    }
}

export function handleModalEscapePress(evt) {
    if (evt.key === "Escape") {
        const currentOpenPopup = document.querySelector(".popup_opened");
        closePopup(currentOpenPopup)
    }
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");

    popup.removeEventListener("mousedown", handleOverlayClose);
    document.removeEventListener('keydown', handleModalEscapePress);
}