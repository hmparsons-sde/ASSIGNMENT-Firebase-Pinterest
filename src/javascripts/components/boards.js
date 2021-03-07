const showBoards = (array) => {
  document.querySelector('#user-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-board-btn">Create New Board</button>';

  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#user-content').innerHTML += `
    <div class="card p-2 m-2" style="width: 20rem">
      <div class="card-body">
      <img src='${item.cover_photo}'></img>
        <a href="#"><h5 id="board-title--${item.firebaseKey}" class="card-title mt-2">${item.title}</h5></a>
        <p><small>${item.pin_count} pins</small></p>
        <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
      </div>
    </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#user-content').innerHTML = '<h1>Nothing here!</h1>';
};

export { showBoards, emptyBoards };
