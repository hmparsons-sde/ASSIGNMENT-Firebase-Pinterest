const showBoards = (array) => {
  document.querySelector('#user-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create New Board</button>';

  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#user-content').innerHTML += `
    <div class="card p-3 m-3" style="width: 20rem">
      <div class="card-body">
      <img src='${item.cover_photo}' id='card-img'></img>
        <a href="#" id="title"><h5 id="board-title--${item.firebaseKey}" class="card-title mt-2 text-center">${item.title}</h5></a>
        <div class="text-center">
        <button class="btn btn-light" id="delete-board--${item.firebaseKey}"><i class='fas fa-trash-alt' style='font-size:36px'></i></button>
        </div>
        </div>
    </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#user-content').innerHTML = '<h1>Nothing here!</h1>';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create New Board</button>';
};

export { showBoards, emptyBoards };
