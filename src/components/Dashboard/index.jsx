import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './dashboard.css';

import Navbar from './../Navbar';
import Sidebar from './../Sidebar';
// import PageHeader from './../PageHeader';
import Achievements from './../_modules/Achievements';
import AchievementPage from './../_modules/Achievements/edit';
import Actions from './../_modules/Actions';

const Index = () => <h1>Hello World!</h1>;

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = { isSidebarOpen: false };
  }

  onSidebarButtonClick = (e) => {
    this.setState(state => ({
      isSidebarOpen: true
    }));
  }

  onSidebarBlur = () => {
    this.setState(state => ({
      isSidebarOpen: false
    }));
  }

  render() {
    return (
      <Router>
        <div className="dashboard-main-wrapper">
          <Navbar onSidebarButtonClick={this.onSidebarButtonClick}/>
          <Sidebar onSidebarBlur={this.onSidebarBlur} isSidebarOpen={this.state.isSidebarOpen}/>
          <div className="dashboard-wrapper">
            <div className="container-fluid dashboard-content">
              <div className="row">
                <div className="col-xl-12">

                  <Route path="/" exact component={Index} />
                  <Route path="/achievements/" component={Achievements} />
                  <Route path="/achievement/:id" component={AchievementPage} />
                  <Route path="/actions/" component={Actions} />

                </div>
              </div>
            </div>
            <div className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
                    Copyright © 2018 Dreamcore
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
                    <div className="text-md-right footer-links d-none d-sm-block">
                      <a href="">About</a>
                      <a href="">Support</a>
                      <a href="">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Dashboard;