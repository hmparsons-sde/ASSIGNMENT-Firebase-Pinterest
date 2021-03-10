const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class='navbar fixed-top navbar-expand-lg mb-4 bg-white'>
        <a id='logo' class='navbar-brand title' href='#'><img src='https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png' class="img-thumbnail"></a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav mr-auto text-dark'>
            <li class='nav-item text-dark'>
              <a class='nav-link' href='#' id='all-boards'>
                All Boards <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-pins">Pins</a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#' id='favorites'>Favorites</a>
            </li>
          </ul>
        <div class="search-container input-group-lg">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input id="search" class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" style="width: 700px;">
        </form>
        </div>
          <div id='logout-button'></div>
        </div>
      </nav>
    `;
};

export default navBar;
