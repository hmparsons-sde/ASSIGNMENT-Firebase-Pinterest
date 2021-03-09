const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id='navigation'></div>
  <div id='main-container' style='padding-top: 50px;'>
    <div class='row'>
      <div class="col-4">
       <img src="https://user-images.githubusercontent.com/67122062/110191029-26b3bf00-7dec-11eb-87ab-fca63d5b4b5b.png">
        <hr class="d-sm-none">
        <div id="add-button"></div>
      </div>
    <div class="col-8">
      <div class="d-flex row pb-5 flex-wrap justify-content-evenly" id="user-content"></div>
      <div id="form-container"></div>
      <div id="edit-form-container"></div>
    </div>
  </div>
</div>`;
};

export default domBuilder;
