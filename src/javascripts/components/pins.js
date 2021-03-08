const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Create New Book</button>';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#user-content').innerHTML += `<div class="card p-2 m-3" style="width: 20rem">
        <img src=${item.cover_photo} alt=${item.title}>
        <div class="card-body">
        <h5 class="card-title"><a href="${item.url}" class="card-link mt-2">${item.title}</a></h5>
        <p class="card-text bold">${item.favorite ? `<span class="badge badge-info favorite-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span> $${item.favorite}` : `$${item.favorite}`}</p>
        <button class="btn btn-danger" id="edit-pin--${item.firebaseKey}">Edit Pin</button>
        <button class="btn btn-danger" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Create New Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#user-content').innerHTML = '<h1 class="text-dark">No Items</h1>';
};

export { showPins, emptyPins };
