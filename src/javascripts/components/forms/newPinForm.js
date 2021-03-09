import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="article" placeholder="Article URL" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite">
        <label class="form-check-label" for="favorite">Add to Favorites?</label>
      </div>
      <button type="submit" id="submit-pin" class="btn btn-danger mt-3">Create Pin</button>
    </form>`;

  selectBoard();
};

export default addPinForm;
