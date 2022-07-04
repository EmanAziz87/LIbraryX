import bookFormSubmission from './bookFormSubmission';
import editModeToggle from './editModeToggle';
import closeFormWindow from './closeFormWindow';
import readButtonsForm from './readButtonsForm';
import addBookButtonToggle from './addBookButtonToggle';
import addBooksPrompt from './addBooksPrompt';

const app = () => {
    readButtonsForm();
    closeFormWindow();
    addBookButtonToggle();
    editModeToggle();
    bookFormSubmission();
    addBooksPrompt();
};

export default app;
