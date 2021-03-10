// eslint-disable-next-line import/no-cycle
import signOut from '../../helpers/auth/signOut';

const logoutButton = () => {
  const domString = `<button id="google-auth" class="btn btn-light">
  <i class='fas fa-sign-out-alt' style='font-size:36px'></i></button>`;
  document.querySelector('#logout-button').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
