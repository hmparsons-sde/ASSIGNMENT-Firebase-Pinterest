import { deleteBoard, getSingleBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';

// DELETE ALL THE PINS BELONGING TO A SPECIFIED BOARD
const deleteBoardsPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardsPinsArray) => {
    const deletePins = boardsPinsArray.map((pins) => deletePin(pins.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

// SHOW PINS ASSOCIATED WITH SINGLE BOARD
const boardsAndPins = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, pins: boardPinsResponse }))
    .catch((error) => reject(error));
});

// SHOW PINS & BOARDS IN SEARCH RESULTS
// const searchBoardsPins = (uid, searchValue) => new Promise((resolve, reject) => {
//   const pin = searchPins(uid, searchValue);
//   const board = searchBoards(uid, searchValue);
//   Promise.all([pin, board])
//     .then(([pinResponse, boardResponse]) => resolve({ pin: pinResponse, board: boardResponse }))
//     .catch((error) => reject(error));
// });

export {
  boardsAndPins,
  deleteBoardsPins,
};
