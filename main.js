function submitData(event) {
  let email = document.getElementById("inputEmail").value;

  document.querySelector(".modal__window-title")
    .innerHTML = `Please confirm account creation for <span> ${email}</span>`;
  document.querySelector(".modal__window").classList.add("modal__visible");

  return false;
}

function closeModal() {
  document.querySelector(".modal__window").classList.remove("modal__visible");
}

function confirmModal() {
  let email = document.getElementById("inputEmail").value;

  document.querySelector(".modal__window").classList.remove("modal__visible");
  document.querySelector(".form__wrapper").classList.add("hide");
  document
    .querySelector(".welcome__user").classList.add("welcome__user-visible");
  document.getElementById("mainTitle")
    .innerHTML = `Hello, user with email: ${email}`;
}
