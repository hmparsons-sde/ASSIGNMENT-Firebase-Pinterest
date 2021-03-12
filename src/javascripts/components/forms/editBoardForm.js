const editBoardForm = (boardObject) => {
  document.querySelector('#edit-modal-body').innerHTML = `
    <form id="edit-board-form" class="mb-4">
      <div class="form-group">
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Board Title" value="${boardObject.title}" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${boardObject.cover_photo}">
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="favorite" ${boardObject.favorite && 'checked'}>
        <label class="form-check-label" for="favorite">Favorite</label>
        <br>
      </div>
      <button type="submit" id="update-board--${boardObject.firebaseKey}" class="btn btn-danger">Update Board</button>
    </form>`;
};
// IN ORDER TO SUCCESSFULLY EDIT A PIN, THIS FORM PRINTS TO A SEPARATE MODAL
export default editBoardForm;
