console.log('Form scripts loaded');
import { validateField } from './form-modules/form-validator'
import { sendForm } from './form-modules/form-sender'
import './form-modules/form-messages'

const form = document.querySelector(".cform");

form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("blur", () => {
    validateField(input);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = form.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    // console.log(`Checking ${field.name}`);
    const fieldValid = validateField(field);

    if (!fieldValid) {
      isValid = false;
    }
  });

  if (isValid) {
    sendForm(form);
    form.reset();
  } else {
    form.querySelector(":invalid").focus();
  }
});