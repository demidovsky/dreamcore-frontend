import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './dreamcore_logo_black.png';
import './navbar.css';
import noAvatar from './../noAvatar.jpg';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: null,
      isProfileOpen: false,
      isNotificationOpen: false,
    };
  }

  componentDidMount () {
    fetch(`${ BASE_URL }/profile`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }

  handleProfileClick = () => {
    this.toggle('isProfileOpen');
  }

  handleProfileRedirect = () => {
    this.toggle('isProfileOpen');
  }

  handleNotificationClick = () => {
    this.toggle('isNotificationOpen');
  }

  toggle = (name) => {
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }

  render() {
  return (
    <div className="dashboard-header">

        <nav className="navbar navbar-expand-md bg-white fixed-top">
          <NavLink className="navbar-brand" to="/">
            <img src={ logo } alt="DREAMCORE" height="50px"/>
          </NavLink>

          <div className=" navbar-collapse " id="navbarSupportedContent">
          {/*<div className="" id="navbarSupportedContent">*/}
            <ul className="navbar-nav ml-auto navbar-right-top">
              {/*<li className="nav-item">
                <div id="custom-search" className="top-search-bar">
                  <input className="form-control" type="text" placeholder="Search..." />
                </div>
              </li>*/}
              {/*<li className="nav-item dropdown notification">
                <a className="nav-link nav-icons" href="" id="navbarDropdownMenuLink1"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                onClick={ this.handleNotificationClick }>
                  <i className="fas fa-fw fa-bell"></i> <span className="indicator"></span>
                </a>
              </li>*/}
              {/*<li className="nav-item dropdown connection">
                <a className="nav-link" href="" id="navbarDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-fw fa-th"></i>
                </a>
              </li>*/}
              <li className="nav-item dropdown nav-user">
                <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={ this.handleProfileClick }>
                  <span className="nav-user-img-name d-none d-md-inline-block mr-2">{ this.state.isLoaded ? this.state.user.fullName : 'loading...' }</span>
                  <img src={ this.state.isLoaded && this.state.user.avatar
                    ? `${BASE_URL}${this.state.user.avatar}` : noAvatar } alt="" className="user-avatar-md rounded-circle"/>
                </a>
                <div className={ `${this.state.isProfileOpen ? 'd-block' : ''} dropdown-menu dropdown-menu-right nav-user-dropdown` } aria-labelledby="navbarDropdownMenuLink2">
                  <div className="nav-user-info">
                    <h5 className="mb-0 text-white nav-user-name">
                      { this.state.isLoaded ? this.state.user.fullName : 'loading...' }
                    </h5>
                    {/*<span className="status"></span><span className="ml-2">Available</span>*/}
                  </div>
                  <NavLink className="dropdown-item" to="/profile" onClick={ this.handleProfileRedirect }><i className="fas fa-user mr-2"></i>Profile</NavLink>
                  {/*<a className="dropdown-item" href="#"><i className="fas fa-cog mr-2"></i>Settings</a>*/}
                  <a className="dropdown-item" href="/logout"><i className="fas fa-power-off mr-2"></i>Logout</a>
                </div>
              </li>
            </ul>
          </div>

          <button className="navbar-toggler" type="button" onClick={ this.props.onSidebarButtonClick }>
            <i className="fas fa-bars"></i>
          </button>
        </nav>

    </div>
  );
  }
}

export default Navbar;
