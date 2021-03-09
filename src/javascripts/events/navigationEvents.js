import { emptyBoards, showBoards } from '../components/boards';
import { emptyPins, showPins } from '../components/pins';
import signOut from '../helpers/auth/signOut';
import { getBoards } from '../helpers/data/boardData';
import { getFavoritePins, getPins } from '../helpers/data/pinData';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });
  document.querySelector('#favorites').addEventListener('click', () => {
    getFavoritePins().then((favoritePinsArray) => {
      if (favoritePinsArray.length) {
        showPins(favoritePinsArray);
      } else {
        emptyPins();
      }
    });
  });
};
// WRITE SEARCH FUNCTION
export default navigationEvents;
