function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        document.body.parentNode.classList.add("modal-open");
        modal.classList.add("show");
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        document.body.parentNode.classList.remove("modal-open");
        modal.classList.remove("show");
    }
}
