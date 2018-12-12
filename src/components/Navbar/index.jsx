import React, { Component } from 'react';
import logo from './dreamcore_logo_black.png';

class Navbar extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <a className="navbar-brand" href="../index.html">
            <img src={logo} alt="DREAMCORE" height="50px"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right-top">
              <li className="nav-item">
                <div id="custom-search" className="top-search-bar">
                  <input className="form-control" type="text" placeholder="Search..."/>
                </div>
              </li>
              <li className="nav-item dropdown notification">
                <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span className="indicator"></span></a>
              </li>
              <li className="nav-item dropdown connection">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th"></i> </a>
              </li>
              <li className="nav-item dropdown nav-user">
                <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="../assets/images/avatar-1.jpg" alt="" className="user-avatar-md rounded-circle"/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
