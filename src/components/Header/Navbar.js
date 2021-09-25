import React from 'react';
import rasel from '../../images/facebook.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://www.shakawathridoy.com/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.shakawathridoy.com/">Home</a>
        </li>
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.shakawathridoy.com/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.shakawathridoy.com/">Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.shakawathridoy.com/">Contact</a>
        </li>
        <li>
            <img width="40px" src={rasel} alt="" />
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;