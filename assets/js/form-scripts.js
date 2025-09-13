console.log('Form scripts loaded');
import { validateField } from './form-modules/form-validator'
import { sendForm } from './form-modules/form-sender'
import './form-modules/form-messages'
import { showDialog, showErrorsDialog } from './form-modules/form-messages';

const form = document.querySelector(".cform");

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
    // console.log(`Checking ${field.name}`);
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
      console.log('Form sent successfully')
      showDialog('.success-dialog');
      form.reset();
    } else {
      showErrorsDialog(form, ['Form sending failed']);
      console.log('Form sending failed')
    }
  } else {
    form.querySelector(":invalid").focus();
  }
});

// TMP debug Show success dialog
document.querySelector('.tmp_show-btn').addEventListener('click', () => {
    showDialog('.success-dialog');
});