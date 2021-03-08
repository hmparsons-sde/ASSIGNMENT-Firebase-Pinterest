const boardInfo = (boardObject) => {
  document.querySelector('title').innerHTML += `<h1 class="text-dark">${boardObject.title}</h1>`;
};

export default boardInfo;
