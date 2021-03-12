const showBoards = (array) => {
  document.querySelector('#user-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create New Board</button>';

  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#user-content').innerHTML += `
    <div class="board-container top m-3" style="width: 20rem">
      <img src='${item.cover_photo}' class="card-img-top rounded mx-auto d-block" id='card-img'></img>
      <div class="middle">
        <a href="#" id="title"><h5 id="board-title--${item.firebaseKey}" class="card-title mt-2 text-center">${item.title}</h5></a>
        <div class="text-center">
        <button class="btn btn-danger btn-lg mb-1" id="edit-board--${item.firebaseKey}">Edit</button>
        <button class="btn btn-danger btn-lg mb-1" id="delete-board--${item.firebaseKey}">Delete</button>
        </div>
        <div="card-text">
        <p class="card-text mb-1"><span class="badge">${item.favorite ? "<i class='fas fa-star' style='font-size:24px'></i>" : ''}</span><span class="badge">${item.public ? "<i class='fas fa-globe-americas ml-1' style='font-size:24px'></i>" : ''}</span></p>
        </div>
        </div>
        </div>
        </div>`;
  });
};
// SHOW SEARCHED BOARDS
const showSearchedBoards = (array) => {
  document.querySelector('#user-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create New Board</button>';

  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#user-content').innerHTML += `
    <div class="board-container top m-5" style="width: 20rem">
      <img src='${item.cover_photo}' class="card-img-top rounded mx-auto d-block" id='card-img'></img>
      <div class="middle">
        <a href="#" id="title"><h5 id="board-title--${item.firebaseKey}" class="card-title mt-2 text-center">${item.title}</h5></a>
        <div class="text-center">
        <button class="btn btn-danger btn-lg mb-1" id="edit-board--${item.firebaseKey}">Edit</button>
        <button class="btn btn-danger btn-lg mb-1" id="delete-board--${item.firebaseKey}">Delete</button>
        </div>
        <div="card-text">
        <p class="card-text mb-1"><span class="badge">${item.favorite ? "<i class='fas fa-star' style='font-size:24px'></i>" : ''}</span><span class="badge">${item.public ? "<i class='fas fa-globe-americas ml-1' style='font-size:24px'></i>" : ''}</span></p>
        </div>
        </div>
        </div>
       </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#user-content').innerHTML = '<h1>Nothing here!</h1>';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create New Board</button>';
};

export { showBoards, emptyBoards, showSearchedBoards };
