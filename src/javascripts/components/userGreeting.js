const userGreeting = (userObject) => {
  document.querySelector('#user-greeting').innerHTML = `<div class="container d-flex justify-content-center align-items-center">
                                                  <img class="rounded-circle" id="profile-pic" src="${userObject.photoURL}" alt="user profile picture"> 
                                                  <br>
                                                  <h5 id="container-title"></h5>                                                                         
                                                  </div>`;
};

export default userGreeting;
