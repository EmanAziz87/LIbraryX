const readButton = document.getElementById('read');
const readingButton = document.getElementById('reading');
let read = false;

const readButtonsForm = () => {
    readButton.addEventListener('click', () => {
        read = true;
    });

    readingButton.addEventListener('click', () => {
        read = false;
    });
};

export default readButtonsForm;
