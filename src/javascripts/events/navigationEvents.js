import { emptyBoards, showBoards } from '../components/boards';
import signOut from '../helpers/auth/signOut';
import getBoards from '../helpers/data/boardData';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#all-boards').addEventListener('click', () => {
    // GET ALL BOOKS on click
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
