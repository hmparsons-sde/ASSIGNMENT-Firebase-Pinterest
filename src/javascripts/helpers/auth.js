import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './auth/apiKeys';
import loginButton from '../components/buttons/loginButton';
import startApp from '../views/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
