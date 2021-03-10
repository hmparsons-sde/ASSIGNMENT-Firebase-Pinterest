const showPins = (array) => {
  document.querySelector('#user-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-pin-button">Create New Pin</button>';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((pin) => {
    document.querySelector('#user-content').innerHTML += `<div class="card p-2 m-3" style="width: 21rem">
        <img src=${pin.cover_photo} class="rounded mx-auto d-block mt-4" alt=${pin.title} id="card-img">
        <div class="card-body">
        <h5 class="card-title"><a href="${pin.url}" class="card-link mt-2">${pin.title}</a></h5>
        <button class="btn btn-light" id="edit-pin--${pin.firebaseKey}" data-toggle="modal" data-target="#edit-form-modal"><i class="fas fa-pen" style="font-size:24px"></i></button>
        <button class="btn btn-light" id="delete-pin--${pin.firebaseKey}"><i class="fas fa-trash-alt" style="font-size:24px"></i></button>
        <button class ="btn btn-light" id="share-pin"><i class="fas fa-share-alt" style="font-size:24px"></i></button>
        </div>
        <p class="card-text mb-2"><span class="badge">${pin.favorite ? "<i class='fas fa-star' style='font-size:36px'></i>" : ''}</span></p>
        </div>
      </div>`;
  });
};
// DISPLAY IF NO PINS EXIST IN A BOARD
const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="button button-success button-lg mb-4" id="add-pin-button">Create New Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#user-content').innerHTML = '<h1 class="text-dark">Nothing here</h1>';
};

export { showPins, emptyPins };
