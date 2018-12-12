import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (

       <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-light">
            <div className="" id="navbarNav">
              <ul className="navbar-nav flex-column">

  <li className="nav-divider"> Modules </li>

  <li className="nav-item"><a className="nav-link" href="_tasks.html"><i className="fa fa-fw fa-list"></i>Tasks</a></li>
  <li className="nav-item"><a className="nav-link active" href="_achievements.html"><i className="fa fa-fw fa-award"></i>Achievements</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Scopes</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Priorities</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Streaks</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Timeline</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Finance</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Wishlist</a></li>

  <li className="nav-divider"> Team </li>

  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Family</a></li>
  <li className="nav-item nav-item-disabled"><a className="nav-link" href="#"><i className="fa fa-fw fa-lock"></i>Friends</a></li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
