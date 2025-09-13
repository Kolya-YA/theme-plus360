// import { showFormErrors, showFormSuccess } from "./form-messages"

export { sendForm}

async function sendForm(form) {
  const formData = new FormData(form);
  console.log("Sending form ...", formData);
}