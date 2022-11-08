const form = document.getElementById("form");

const username = document.querySelector(".username");
const msgUser = document.querySelector(".errorUser");

const email = document.querySelector(".email");
const msgEmail = document.querySelector(".errorEmail");

const password = document.querySelector(".password");
const msgPass = document.querySelector(".errorPass");

const password2 = document.querySelector(".password2");
const msgPass2 = document.querySelector(".errorPass2");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let required = false;

  if ((enterUser(), enterEmail(), enterPass(), enterPass2())) {
    required = true;
  } else {
    required = false;
  }
});

function enterUser() {
  if (username.value.length < 4) {
    username.classList.remove("succes");
    msgUser.classList.remove("d-none");
  } else {
    username.classList.add("succes");
    msgUser.classList.add("d-none");
  }
}

function enterEmail() {
  let expresionEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!expresionEmail.test(email.value)) {
    email.classList.remove("succes");
    msgEmail.classList.remove("d-none");
  } else {
    email.classList.add("succes");
    msgEmail.classList.add("d-none");
  }
}

function enterPass() {
  if (password.value.length < 6) {
    password.classList.remove("succes");
    msgPass.classList.remove("d-none");
  } else {
    password.classList.add("succes");
    msgPass.classList.add("d-none");
  }
}

function enterPass2() {
  if ((password2.value === password.value) && (password2.value.trim() !== "")) {
    password2.classList.add("succes");
    msgPass2.classList.add("d-none");
  } else {
    password2.classList.remove("succes");
    msgPass2.classList.remove("d-none");
  }
}
