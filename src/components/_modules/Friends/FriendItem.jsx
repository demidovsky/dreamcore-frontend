import React, { Component, Fragment } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import Toolbar from './../../Toolbar';
import cover from './cover.jpg';
import virtualUser from './virtualUser.jpg';

const toolbarItems = {
  // edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Remove</span>,
};

const BASE_URL = 'http://localhost:1337';




class FriendItem extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.item.id;
    // this.name = this.props.item.name;
    // this.notes = this.props.item.notes;
    this.achievements = this.props.item.achievements;
    // this.imageUrl = this.props.item.picture;
    this.fullName = this.props.item.fullName;
    this.state = {
      redirect: null
    };
  }

  handleToolbar = (itemName) => {
    console.log(itemName, this.id);
    switch (itemName) {
      case 'edit': this.setState({ redirect: `/friends/${ this.id }` }); return;
      case 'delete': {
        axios.delete(`${ BASE_URL }/friends/${ this.id }`)
          .then(response => {
            console.log('deleted', response);
            this.setState({ isDeleted: true });
          })
          .catch(error => {
            console.error(error);
          });
        return;
      }
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />
    }

    if (this.state.isDeleted) return null;

          // style={ { backgroundImage: `url(${ 'http://localhost:1337' }${ this.imageUrl })` } }>
    return (
      <Fragment>
        <div className="card-toolbar">
          <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
        </div>

        <div className="card">
          <div className="card-img-top">
          <img src={ cover } alt="" className=" img-fluid"/>
          </div>
          <div className="card-body pt-2">
            <div className="media mb-3">
              <NavLink to={ `/friends/${ this.id }` } className="user-avatar user-avatar-floated user-avatar-xl float-left mr-3">
                <img src={ virtualUser } alt="User Avatar" className="rounded-circle user-avatar-xl"/>
              </NavLink>
              <div className="media-body">
                <h3 className="card-title mb-2 text-truncate">
                  <NavLink to={ `/friends/${ this.id }` } className="">{ this.fullName }</NavLink>
                </h3>
                <h6 className="card-subtitle text-muted"> UI/UX Designer </h6>
              </div>
              {/*<button className="btn btn-sm btn-secondary">
                <i className="fa fa-fw fa-plus"></i> Follow</button>*/}
              </div>
              <div className="row text-center">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="metric">
                    <h6 className="metric-value"> { this.achievements.length } </h6>
                    <p className="metric-label"> Achievements </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="metric">
                    <h6 className="metric-value"> 53 </h6>
                    <p className="metric-label"> Completed </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="metric">
                    <h6 className="metric-value"> 2 </h6>
                    <p className="metric-label"> Friends </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
  }
}

export default FriendItem;
