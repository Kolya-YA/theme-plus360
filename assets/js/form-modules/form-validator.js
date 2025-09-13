function validateField(field) {
  const errorEl = field.parentElement.querySelector(".cform__err-msg");

  if (!field.validity.valid) {
    errorEl.textContent = field.dataset.error || "This field is required";
    return false;
  }

  errorEl.textContent = "";
  return true;
}

export { validateField }