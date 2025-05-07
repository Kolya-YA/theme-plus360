function showFormErrors(form, errors) {
    console.log('Validation failed')
    console.log('Errors: ', errors)

    // console.log('Validation result: ', validatorResult)
}

function showFormSuccess(form) {
    // Temporary disable submit button
    const submitBtn = form.querySelector('.cform__submit')
    submitBtn.disabled = true
    setTimeout(() => {
        submitBtn.disabled = false
    }, 5000)


    // Show success dialog
    const tmpShowBtn = document.querySelector('.tmp_show-btn')

    const successDialog = document.querySelector('.success-dialog')
    const successDialogClose = successDialog.querySelector('.success-dialog__close')

    // successDialog.showModal()

    tmpShowBtn.addEventListener('click', () => {
        successDialog.showModal()
    })

    successDialogClose.addEventListener('click', () => {
        successDialog.close()
    })
    // form.reset()
}

export { showFormErrors, showFormSuccess }