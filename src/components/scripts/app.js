import { addBookButtonToggle, bookFormSubmission, closeFormWindow } from './addBookForm';
import editModeToggle from './editModeToggle';
import addBooksPrompt from './addBooksPrompt';
import { searchResultsNav } from './APIandSearchResults';

const app = () => {
    closeFormWindow();
    editModeToggle();
    addBookButtonToggle();
    bookFormSubmission();
    addBooksPrompt();
    searchResultsNav();
};

export default app;
