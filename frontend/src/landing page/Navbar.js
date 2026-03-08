import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/"><img style={{ width: "25%" }} src='/media/images/logo.svg' alt='logo' /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " style={{ marginLeft: '6rem' }} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support" >Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;