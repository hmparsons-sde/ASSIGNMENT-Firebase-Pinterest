import { emptyBoards, showBoards } from '../components/boards';
import { emptyPins, showPins, showPublicPins } from '../components/pins';
import signOut from '../helpers/auth/signOut';
import { getBoards } from '../helpers/data/boardData';
import {
  getFavoritePins, getPins, publicPins, searchPins
} from '../helpers/data/pinData';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  // SHOW PUBLIC CONTENT
  document.querySelector('#public').addEventListener('click', () => {
    publicPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPublicPins(pinsArray);
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
  // // SEPARATE FAVORITE TAG
  // document.querySelector('#favorites').addEventListener('click', () => {
  //   getFavoriteBoards().then((favoriteBoardsArray) => {
  //     if (favoriteBoardsArray.length) {
  //       showBoards(favoriteBoardsArray);
  //     } else {
  //       emptyBoards();
  //     }
  //   });
  // });
  // SEARCH BAR
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchPins(uid, searchValue).then((array) => showPins(array));
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
