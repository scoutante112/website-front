export function clearFields() {
    const inputs = document.querySelectorAll('input:not(#search)');
    const textareas = document.querySelectorAll('textarea');

    inputs.forEach((input: any) => {
        input.value = '';
    });
    textareas.forEach((textarea) => {
        textarea.value = '';
    });
}


