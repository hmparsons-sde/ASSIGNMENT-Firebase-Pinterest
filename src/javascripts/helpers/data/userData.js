import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const newUser = (user) => new Promise((resolve, reject) => {
  const userObject = {
    name: user.displayName,
    firebaseKey: user.firebaseKey,
    photoUrl: user.photoUrl,
    uid: user.uid
  };
  axios.post(`${dbUrl}/users.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body);
    })
    .catch((error) => reject(error));
});
const getSingleUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { newUser, getSingleUser };
