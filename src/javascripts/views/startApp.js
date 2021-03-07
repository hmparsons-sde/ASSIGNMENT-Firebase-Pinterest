import { emptyBoards, showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { getBoards } from '../helpers/data/boardData';
import navigationEvents from '../events/navigationEvents';

const startApp = (userObject) => {
  domBuilder(); // BUILD THAT DOM
  navBar();
  logoutButton();
  navigationEvents(userObject.uid);
  getBoards(userObject.uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
