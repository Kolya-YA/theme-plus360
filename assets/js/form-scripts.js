console.log('Form scripts loaded');
import { validateField } from './form-modules/form-validator'
import { sendForm } from './form-modules/form-sender'
import './form-modules/form-messages'

const form = document.querySelector(".cform");
console.log(form.id)

// Validation on blur
form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("blur", () => {
    validateField(input);
  });
});

// Validation on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const fields = form.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    const fieldValid = validateField(field);

    if (!fieldValid) {
      isValid = false;
    }
  });

  if (isValid) {
    // Temporary disable submit button
    const submitBtn = form.querySelector('button')
    submitBtn.disabled = true
    setTimeout(() => {
        submitBtn.disabled = false
    }, 5000)

    const sendResult = sendForm(form);
    if (sendResult) {
      showDialog('success-dialog');
      form.reset();
    } else {
      showDialog('error-dialog');
    }
  } else {
    form.querySelector(":invalid").focus();
  }
});