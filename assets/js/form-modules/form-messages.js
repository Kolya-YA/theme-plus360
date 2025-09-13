export { showErrorsDialog, showDialog }

function showErrorsDialog(form, errors) {
    console.log('Validation failed')
    console.log('Errors: ', errors)

    // console.log('Validation result: ', validatorResult)
}

function showDialog(dialogClass) {

    const dialog = document.querySelector(dialogClass)
    const closeBtn = dialog.querySelector('button.close')

    dialog.showModal()

    closeBtn.addEventListener('click', () => {
        dialog.close()
    }, { once: true })
}