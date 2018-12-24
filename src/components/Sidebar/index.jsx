import React, { Component } from 'react';
import { Router, Route, NavLink } from "react-router-dom";
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (

       <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-light">
            <div className="" id="navbarNav">
              <ul className="navbar-nav flex-column">

  <li className="nav-divider"> Modules </li>

  <li className="nav-item">
    <NavLink to="/achievements" className="nav-link" activeClassName="active">
      <i className="fa fa-fw fa-award"></i>Achievements
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/actions" className="nav-link" activeClassName="active">
      <i className="fa fa-fw fa-list"></i>Actions
    </NavLink>
  </li>


<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-chart-pie"></i>Scopes</a></li>
<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-th-large"></i>Priorities</a></li>
<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-grip-horizontal"></i>Streaks</a></li>
<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-stream"></i>Timeline</a></li>
<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-money-bill-alt"></i>Finance</a></li>
<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-gift"></i>Wishlist</a></li>

<li className="nav-divider"> Team </li>

<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-home"></i>Family</a></li>
<li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-fw fa-user-friends"></i>Friends</a></li>


              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
