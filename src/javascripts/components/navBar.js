const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class='navbar fixed-top navbar-expand-lg mb-4'>
        <a id='logo' class='navbar-brand title' href='#'><img src='https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png' class="img-thumbnail"></a>
        <div id='logout-button'></div>
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
            <li class='nav-item active'>
              <a class='nav-link' href='#' id='all-boards'>
                All Boards <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#' id='favorites'>Favorites</a>
            </li>
            <li>
            <input
              class='form-control mr-sm-2 ml-3'
              id='search'
              placeholder='Search Collections'
              aria-label='Search'
            />
            </li>
          </ul>
        </div>
      </nav>
    `;
};

export default navBar;
