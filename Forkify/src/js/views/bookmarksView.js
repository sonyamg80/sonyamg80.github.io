import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmars yet. Find a nice recipe and book mark it. ';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return (
      this._data
        // adding false , will case  generate Markup to return as a string
        .map(bookmark => previewView.render(bookmark, false))
        .join('')
    );
  }
}

export default new BookmarksView();
