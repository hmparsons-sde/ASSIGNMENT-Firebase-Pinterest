const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class='navbar fixed-top navbar-expand-lg mb-4 bg-white'>
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
         <a id='public' class='navbar-brand title' href='#'><img src='https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png' class="img-thumbnail"><span class='sr-only'>(current)</span></a>
         <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav mr-auto text-dark'>
            <li class='nav-item text-dark'>
              <a class='nav-link' href='#' id='all-boards'>
                Your Boards
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
        <div class="icon-container mr-3 ml-3">
        <i class='fas fa-bell p-2' style='font-size:24px'></i>
        <i class='fas fa-comment p-3' style='font-size:24px'></i>
        </div>
          <div id='logout-button'></div>
        </div>
      </nav>
    `;
};

export default navBar;
