const addBoardForm = () => {
  console.warn('This was clicked');
  document.querySelector('#user-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Name Your Board" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="article" placeholder="Link An Article" required>
      </div>
      <button type="submit" id="submit-board" class="btn btn-danger">Create Board</button>
    </form>`;
};

export default addBoardForm;
