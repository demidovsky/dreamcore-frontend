import React, { Component, Fragment } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import Toolbar from './../../Toolbar';
import cover from './cover.jpg';
import virtualUser from './../../noAvatar.jpg';

const toolbarItems = {
  // edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Remove</span>,
};

const BASE_URL = process.env.REACT_APP_BASE_URL;


class FriendItem extends React.Component {
  constructor (props) {
    super(props);
    this.friendshipId = this.props.item.friendshipId;
    this.friendId = this.props.item.friendId;
    // this.name = this.props.item.name;
    // this.notes = this.props.item.notes;
    this.achievements = this.props.item.achievements;
    this.completed = this.props.item.completed;
    this.friends = this.props.item.friends;
    // this.imageUrl = this.props.item.picture;
    this.fullName = this.props.item.fullName;
    this.friendshipType = this.props.item.friendshipType;
    this.friendSince = this.props.item.friendSince;
    this.state = {
      isDeleted: false,
      isConfirmed: this.props.item.isConfirmed,
      redirect: null
    };
  }

  delete = () => {
    axios.delete(`${ BASE_URL }/friends/${ this.friendshipId }`)
      .then(response => {
        console.log('deleted', response);
        this.setState({ isDeleted: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  confirm = async () => {
    try {
      await axios.post(`${ BASE_URL }/friends/${ this.friendshipId }`);
      this.setState({ isConfirmed: true });
    } catch (error) {
      console.error(error);
    }
  }

  handleToolbar = (itemName) => {
    // console.log(itemName, this.id);
    switch (itemName) {
      // case 'edit': this.setState({ redirect: `/friends/${ this.id }` }); return;
      case 'delete': {
        this.delete();
        return;
      }
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />;
    }

    if (this.state.isDeleted) return null;

    let friendshipStatus = '';
    if (this.state.isConfirmed) {
      const date = this.friendSince ? new Date(this.friendSince).toLocaleDateString() : 'unknown date';
      friendshipStatus = `friends since ${date}`;
    } else {
      friendshipStatus = 'not confirmed';
      if (this.friendshipType === 'from_me') friendshipStatus = 'request sent';
      if (this.friendshipType === 'to_me') friendshipStatus = 'await your confirmation';
    }

    return (
      <Fragment>

        <div className="card friend-item">
          {/*<div className="card-img-top">
          <img src={ cover } alt="" className=" img-fluid"/>
          </div>*/}
          <div className="card-body pt-2">

            <div className="card-toolbar">
              <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
            </div>

            {this.state.isConfirmed ?
            <div className="media mb-3">
              <NavLink to={ `/friends/${ this.friendId }` } className="user-avatar user-avatar-floated user-avatar-xl float-left mr-3">
                <img src={ virtualUser } alt="User Avatar" className="rounded-circle user-avatar-xl"/>
              </NavLink>
              <div className="media-body">
                <h3 className="card-title mb-2 mt-2">
                  <NavLink to={ `/friends/${ this.friendId }` } className="">{ this.fullName }</NavLink>
                </h3>
                <h6 className="card-subtitle text-muted"> { friendshipStatus } </h6>
              </div>
            </div>
            :
            <div className="media mb-3">
              <span className="user-avatar user-avatar-floated user-avatar-xl float-left mr-3">
                <img src={ virtualUser } alt="User Avatar" className="rounded-circle user-avatar-xl"/>
              </span>
              <div className="media-body">
                <h3 className="card-title mb-2 mt-2">
                  <span className="">{ this.fullName }</span>
                </h3>
                <h6 className="card-subtitle text-muted"> { friendshipStatus } </h6>
              </div>
            </div>}

            {(this.state.isConfirmed || this.friendshipType === 'to_me') &&
            <div className="row text-center">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="metric">
                  <h6 className="metric-value"> { this.achievements } </h6>
                  <p className="metric-label"> Achievements </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="metric">
                  <h6 className="metric-value"> { this.completed } </h6>
                  <p className="metric-label"> Completed </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="metric">
                  <h6 className="metric-value"> { this.friends } </h6>
                  <p className="metric-label"> Friends </p>
                </div>
              </div>
            </div>}
          </div>
          {!this.state.isConfirmed &&
            <div className="card-footer p-0 text-right">
              <div className="card-footer-item card-footer-item-bordered">
                <span className="btn btn-sm btn-outline-danger" onClick={ this.delete }>Cancel request</span>
              </div>
              {this.friendshipType === 'to_me' &&
                <div className="card-footer-item card-footer-item-bordered">
                  <span className="btn btn-sm btn-success" onClick={ this.confirm }>Confirm</span>
                </div>
              }
            </div>
          }
        </div>
      </Fragment>
    );
  }
}

export default FriendItem;
