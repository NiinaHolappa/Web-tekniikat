let form = document.getElementById("userInfo");

form.addEventListener("submit", submitInfo);

/**
 * 
 * @param {event} event 
 */
function submitInfo(event) {
    event.preventDefault();

    let formData = new FormData(form);
}