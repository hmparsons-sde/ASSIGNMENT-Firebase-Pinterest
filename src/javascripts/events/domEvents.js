import firebase from 'firebase/app';
import 'firebase/auth';
import { showBoards } from '../components/boards';
import { deleteBoard, createBoard } from '../helpers/data/boardData';
import addBoardForm from '../components/forms/newBoardForm';
import {
  createPin, deletePin, getBoardPins, getSinglePin, updatePin
} from '../helpers/data/pinData';
import { showPins } from '../components/pins';
import addPinForm from '../components/forms/newPinForm';
import formModal from '../components/forms/formModal';
import editPinForm from '../components/forms/editPinForm';
import boardInfo from '../components/boardInfo';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePin(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
    }
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        url: document.querySelector('#article').value,
        favorite: document.querySelector('#sale').checked,
        board_id: document.querySelector('#board').value,
        uid
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }
    if (e.target.id.includes('edit-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        article: document.querySelector('#article-url').value,
        favorite: document.querySelector('#favorite').checked,
        board_id: document.querySelector('#board').value,
      };
      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoard(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
    }
    if (e.target.id.includes('add-button')) {
      addBoardForm();
      console.warn(e.target);
    }
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#title').value,
        cover_photo: document.querySelector('#image').value,
        article: document.querySelector('#article').value,
        uid: firebase.auth().currentUser.uid
      };
      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('board-title')) {
      const boardId = e.target.id.split('--')[1];
      getBoardPins(boardId).then((boardPinsObject) => {
        showPins(boardPinsObject.pins);
        boardInfo(boardPinsObject.board);
      });
    }
  });
};

export default domEvents;
