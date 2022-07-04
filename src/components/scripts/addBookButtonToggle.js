const formWindow = document.querySelector('.form-div-container');
const addBookButton = document.querySelector('.add-book');
const dimPage = document.querySelector('.page-dim');
let editModeState = false;

const addBookButtonToggle = () => {
    addBookButton.addEventListener('click', () => {
        if (!editModeState) {
            formWindow.style.cssText = 'display: flex;';
            dimPage.style.cssText =
                'z-index: 3; position:absolute; width:100vw; height:100vh; background-color: rgba(0, 0, 0, 0.281);';
        } else {
            alert('You can not add books while in edit mode');
        }
    });
};

export default addBookButtonToggle;
