import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#edit-modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.title}" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${pinObject.cover_photo}">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="article-url" placeholder="Article URL" required value="${pinObject.url}">
      </div>
      <div class="form-group" id="select-board">
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="favorite" ${pinObject.favorite && 'checked'}>
        <label class="form-check-label" for="favorite">Favorite</label>
      </div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-danger">Update Pin</button>
    </form>`;

  selectBoard(pinObject);
};
// IN ORDER TO SUCCESSFULLY EDIT A PIN, THIS FORM PRINTS TO A SEPARATE MODAL
export default editPinForm;
