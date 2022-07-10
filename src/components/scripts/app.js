import { addBookButtonToggle, bookFormSubmission, closeFormWindow } from './addBookForm';
import editModeToggle from './editModeToggle';
// import readButtonsForm from './readButtonsForm';
import addBooksPrompt from './addBooksPrompt';
import retrieveBookInfo from './APIandSearchResults';

const app = () => {
    // readButtonsForm();
    closeFormWindow();
    editModeToggle();
    addBookButtonToggle();
    bookFormSubmission();
    addBooksPrompt();
};

export default app;
