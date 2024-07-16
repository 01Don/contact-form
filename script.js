function validateForm() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (input.type !== 'radio' && input.value.trim() === '') {
            input.classList.add('error');
            if (errorMessage) errorMessage.style.display = 'block';
            isValid = false;
        } else if (input.type === 'checkbox' && !input.checked) {
            input.classList.add('error');
            if (errorMessage) errorMessage.style.display = 'block';
            isValid = false;
        } else {
            input.classList.remove('error');
            if (errorMessage) errorMessage.style.display = 'none';
        }
    });

    // Special handling for radio buttons
    const radioGroup = form.querySelectorAll('input[name="query-type"]');
    if (!form.querySelector('input[name="query-type"]:checked')) {
        radioGroup.forEach(radio => radio.classList.add('error'));
        radioGroup[radioGroup.length - 1].nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        radioGroup.forEach(radio => radio.classList.remove('error'));
        radioGroup[radioGroup.length - 1].nextElementSibling.style.display = 'none';
    }

    // Display red borders for all inputs and textareas if not valid
    if (!isValid) {
        inputs.forEach(input => {
            if (input.type !== 'radio') {
                input.classList.add('error');
            }
        });
    }

    // Prevent default form submission
    return isValid;
}
