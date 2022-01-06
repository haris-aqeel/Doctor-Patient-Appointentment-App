import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const checkUserStatus = () => {
    if (localStorage.getItem('login_status') === 'true') {
      return true;
    }
    return false;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="main-home-navbar">
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link main-home-nav text-white" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          {
            localStorage.getItem('status_login') === 'false' ?
              <>
                <li className="nav-item">
                  <Link className="nav-link main-home-nav text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-home-nav text-white" to="/signup">Register</Link>
                </li>
              </>
              :
              <li className="nav-item">
                <Link className="nav-link main-home-nav text-white" onClick={() => {localStorage.setItem('status_login', 'false')}}>Logout</Link>
              </li>
          }


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;