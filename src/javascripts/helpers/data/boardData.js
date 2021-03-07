import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const boardArray = Object.values(response.data);
        resolve(boardArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const deleteBoards = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json `)
    .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

export { getBoards, deleteBoards };
