import { emptyBoards, showBoards, showSearchedBoards } from '../components/boards';
import { emptyPins, showPins, showSearchedPins } from '../components/pins';
import signOut from '../helpers/auth/signOut';
import { getBoards, getFavoriteBoards } from '../helpers/data/boardData';
import { searchBoardsPins } from '../helpers/data/boardsAndPins';
import { getFavoritePins, getPins, publicPins } from '../helpers/data/pinData';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  // SHOW PUBLIC CONTENT
  document.querySelector('#public').addEventListener('click', () => {
    publicPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });
  // SHOW ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
  // SHOW ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });
  // FILTER BY FAVORITE TAG
  document.querySelector('#favorites').addEventListener('click', () => {
    getFavoritePins().then((favoritePinsArray) => {
      if (favoritePinsArray.length) {
        showPins(favoritePinsArray);
      } else {
        emptyPins();
      }
    });
  });
  // SEPARATE FAVORITE TAG
  document.querySelector('#favorites').addEventListener('click', () => {
    getFavoriteBoards().then((favoriteBoardsArray) => {
      if (favoriteBoardsArray.length) {
        showBoards(favoriteBoardsArray);
      } else {
        emptyBoards();
      }
    });
  });
  // SEARCH BAR
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchBoardsPins(uid, searchValue).then((pinBoardsObject) => {
        showSearchedBoards(pinBoardsObject.board);
        showSearchedPins(pinBoardsObject.pin);
        document.querySelector('#search').value = '';
      });
    }
  });
};

export default navigationEvents;
