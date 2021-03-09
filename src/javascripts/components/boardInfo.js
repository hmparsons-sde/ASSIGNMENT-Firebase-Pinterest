const boardInfo = (boardObject) => {
  document.querySelector('title').innerHTML += `<h1>${boardObject.title}</h1>`;
};

export default boardInfo;
