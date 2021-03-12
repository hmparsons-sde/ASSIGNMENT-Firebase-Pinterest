import { emptyBoards, showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { getBoards } from '../helpers/data/boardData';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import userGreeting from '../components/userGreeting';

const startApp = (userObject) => {
  domBuilder();
  userGreeting(userObject);
  domEvents(userObject.uid);// BUILD THAT DOM
  navBar(userObject);
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
