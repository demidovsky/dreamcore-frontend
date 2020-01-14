import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
  componentDidUpdate () {
    if (this.props.isSidebarOpen) document.addEventListener('click', this.handleClickOutside);
  }

  componentDidMount () {
    if (this.props.isSidebarOpen) document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onSidebarBlur();
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

  render () {
    return (
      <div ref={ node => { this.wrapperRef = node } }
            className={ `nav-left-sidebar sidebar-dark ${ this.props.isSidebarOpen ? 'open' : 'closed' }` }>
        <div className="shadow"></div>
        <div className="menu-list">
          <nav className="navbar navbar-light">
            <div className="" id="navbarNav">
              <ul className="navbar-nav flex-column">

                <li className="nav-divider"> Модули </li>

                <li className="nav-item">
                  <NavLink to="/achievements" className="nav-link" activeClassName="active">
                    <i className="fa fa-fw fa-award"></i>Ачивменты
                  </NavLink>
                </li>
                <li className="nav-item">
                  <del to="/actions" className="nav-link text-gray">
                    <i className="fa fa-fw fa-list"></i>Действия
                  </del>
                </li>
                <li className="nav-item">
                  <del to="/scopes" className="nav-link text-gray">
                    <i className="fa fa-fw fa-cubes"></i>Сферы
                  </del>
                </li>

                <li className="nav-item">
                  <del className="nav-link text-gray" href="" title="Priorities">
                    <i className="fa fa-fw fa-th-large"></i>Приоритеты
                  </del>
                </li>
                <li className="nav-item">
                  <del className="nav-link text-gray" href="" title="Streaks">
                    <i className="fa fa-fw fa-grip-horizontal"></i>Привычки
                  </del>
                </li>
                <li className="nav-item">
                  <del className="nav-link text-gray" href="" title="Plan">
                    <i className="fa fa-fw fa-stream"></i>Планы
                  </del>
                </li>
                {/*<li className="nav-item"><a className="nav-link" href="" title="Finance">
                  <i className="fa fa-fw fa-money-bill-alt"></i>Finance</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="" title="Wishlist">
                  <i className="fa fa-fw fa-gift"></i>Wishlist</a>
                </li>*/}

                <li className="nav-divider"> Друзья </li>
                <li className="nav-item">
                  <NavLink to="/friends" className="nav-link" activeClassName="active">
                    <i className="fa fa-fw fa-user-friends"></i>Моя команда
                  </NavLink>
                </li>
                <li className="nav-item">
                  <del className="nav-link text-gray" href="" title="News">
                    <i className="fa fa-fw fa-heartbeat"></i>Новости
                  </del>
                </li>
                {/*<li className="nav-item"><a className="nav-link" href="" title="Family">
                  <i className="fa fa-fw fa-home"></i>Groups</a>
                </li>*/}
                

              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
