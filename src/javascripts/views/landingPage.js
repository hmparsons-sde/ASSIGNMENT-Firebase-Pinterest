import { publicPins } from '../helpers/data/pinData';

const landingPage = () => {
  document.querySelector('#main-container').innerHTML = '<h1 class="logo">PINTEREST (ISH)';
  document.querySelector('#user-content').innerHTML = '';
  publicPins();
};

export default landingPage;
