import formModal from '../components/forms/formModal';
import showBoards from '../components/boards';
import { getBoards, deleteBoards } from '../helpers/data/boardData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.dispatchEvent.includes('delete-board')) {
      if (window.confirm('Are you sure?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoards(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
      }
  )}}
