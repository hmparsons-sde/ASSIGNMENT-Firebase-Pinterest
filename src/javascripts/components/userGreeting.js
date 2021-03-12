const userGreeting = (userObject) => {
  document.querySelector('#header').innerHTML = `<div class="container d-flex justify-content-center align-items-center header">
                                                  <img class="profile-pic" src="${userObject.photoURL}"> 
                                                  <h1 class="user-name">${userObject.displayName}</h1>                                                                            
                                                  </div>`;
};

export default userGreeting;
