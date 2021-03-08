import { deleteBoard, getSingleBoard } from './boardData';
import { getBoardPins, getSinglePin } from './pinData';

const deleteBoardsPins = (boardId, uid) => new Promise((resolve, reject) => {
  getSinglePin(boardId).then((boardsPinsArray) => {
    const deletePins = boardsPinsArray.map((pins) => deletePins(pins.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

const boardsAndPins = (boardId) => new Promise((resolve, reject) => {
  Promise.all([getSingleBoard(boardId), getBoardPins(boardId)])
    .then(([boards, pins]) => resolve(
      { boards, pins }
    ))
    .catch((error) => reject(error));
});

export { boardsAndPins, deleteBoardsPins };
