const form = document.querySelector(".form");
const email = document.querySelector(".input-container__input-email");

form.addEventListener("submit", e => {
  e.preventDefault();

  checkEmail();
});

const checkEmail = () => {
  const emailValue = email.value.trim();
  const inputContainer = email.parentElement; // .input-container
  if (inputContainer.classList.contains("error")) {
    inputContainer.classList.remove("error");
  }
  console.log(emailValue);
  if (!isValidEmail(emailValue)) {
    inputContainer.classList.add("error");
  } else {
    setTimeout(() => {
      alert("Form Submitted");
    }, 1);
  }
};

const isValidEmail = emailValue => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailValue
  );
};
