import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Achievements from './modules/Achievements';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-main-wrapper">
        <Navbar/>
        <Sidebar/>
        <div className="dashboard-wrapper">
          <div className="container-fluid dashboard-content">
            <Achievements/>
          </div>
          <div className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                  Copyright © 2018 Dreamcore
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <div className="text-md-right footer-links d-none d-sm-block">
                    <a href="javascript: void(0);">About</a>
                    <a href="javascript: void(0);">Support</a>
                    <a href="javascript: void(0);">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
