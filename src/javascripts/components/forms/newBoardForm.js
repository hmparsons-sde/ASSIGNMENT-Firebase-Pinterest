const addBoardForm = () => {
  document.querySelector('#modal-body').innerHTML = `
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
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite">
        <label class="form-check-label" for="favorite">Add to Favorites?</label>
      </div>
      <button type="submit" id="submit-board" class="btn btn-danger mt-3">Create Board</button>
    </form>`;
};

export default addBoardForm;
