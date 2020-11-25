const modalForm = document.getElementById("modal-form");
const formResult = document.getElementById("modal-form-result");

modalForm.onsubmit = async e => {
    e.preventDefault();

    formResult.classList.remove("result-green");
    formResult.classList.remove("result-red");
    formResult.innerHTML = "";

    const response = await fetch("/request_demo.php", {
        method: "POST",
        body: new FormData(modalForm)
    });

    if (response.status === 200) {
        modalForm.reset();
        formResult.classList.add("result-green");
        formResult.innerHTML = "Your request successfully sent";
    } else if (response.status === 400) {
        formResult.classList.add("result-red");
        formResult.innerHTML = "Missed some required fields.";
    }
};
