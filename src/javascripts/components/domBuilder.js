const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id='navigation'></div>
  <div id='main-container' style='padding-top: 50px;'>
  <div id="login-form"></div>
  <div class="user" id="user-greeting"></div>
  <br>
  <div class="mt-3 mb-2" id="add-button"></div>
      <div class="d-flex row pb-5 flex-wrap justify-content-evenly" id="user-content"></div>
      <div id="form-container"></div>
      <div id="edit-form-container"></div>
    </div>
  </div>
</div>`;
};

export default domBuilder;
