const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id='navigation'></div>
  <div id='main-container'>
  <div class="container" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-1">
    <img src="https://user-images.githubusercontent.com/67122062/110191029-26b3bf00-7dec-11eb-87ab-fca63d5b4b5b.png">
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-11">
      <h2>All Boards</h2>
    </div>
  </div>
</div>
<div class="footer" style="margin-bottom:0">
</div>`;
};

export default domBuilder;
