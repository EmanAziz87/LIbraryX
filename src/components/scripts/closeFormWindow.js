const form = document.getElementById('main-form');
const formWindowClose = document.querySelector('.close-form');
const dimPage = document.querySelector('.page-dim');
const formWindow = document.querySelector('.form-div-container');

const closeFormWindow = () => {
    formWindowClose.addEventListener('click', () => {
        formWindow.style.cssText = 'display: none;';
        dimPage.style.cssText = 'display:none;';
        form.reset();
    });

    document.addEventListener('click', (event) => {
        if (event.target === dimPage) {
            formWindow.style.cssText = 'display: none;';
            dimPage.style.cssText = 'display:none;';
            form.reset();
        }
    });
};

export default closeFormWindow;
