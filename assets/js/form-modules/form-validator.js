function contactFormValidator(formData) {
  const errors = {}
  
  const name = formData.get('name')
  if (!name) {
      errors.name = 'Name is required'
    }
    
  const email = formData.get('email')
  if (!email) {
      errors.email = 'Email is required'
    }
    
    
  const message = formData.get('message')
  if (!message) {
    errors.message = 'Message is required'
  }

  return errors
}

export { contactFormValidator }