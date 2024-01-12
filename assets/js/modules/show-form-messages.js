function showFormErrors(form, errors) {
    console.log('Validation failed')
    console.log('Validation result: ', validatorResult)
}

function showFormSuccess(form) {
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