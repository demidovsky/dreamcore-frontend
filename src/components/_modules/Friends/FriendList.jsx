import React, { Component, Fragment } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import axios from 'axios';

import FriendItem from './FriendItem';

const BASE_URL = process.env.REACT_APP_BASE_URL;


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: '',
      isFocused: false
    };
  }


  newFriendRequest = (request) => {
    console.log(request);
    // if (!request.match(/^\d+$/)) return;
    this.setState({ request });
  }


  addFriend = () => {
    axios.post(`${ BASE_URL }/friends`, { request: this.state.request })
      .then(response => {
        console.log('created', response);
        return response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  onFocus = () => { this.setState({ isFocused: true }); }
  onBlur = () => { this.setState({ isFocused: false }); }

  render() {

    const add = (
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" key="0">
        <div className={ `card card-figure card-add
          ${(this.state.isFocused || this.state.request) && 'card-add-focused'}` }>
            <div className="card-body">
            <h3 className="card-title">Add friend</h3>
              <div className="form-group">
                <label className="col-form-label">User name:</label>
                <input
                  onChange={ e => this.newFriendRequest(e.currentTarget.value) }
                  onFocus={ this.onFocus }
                  onBlur={ this.onBlur }
                  name="friend" 
                  type="text"
                  className="form-control"
                  value={ this.state.request }
                />
              </div>
              <span className="btn btn-lg btn-success" onClick={ this.addFriend }>Send request</span>
            </div>
        </div>
      </div>
    );

    const items = this.props.items ? this.props.items.map((item, index) => (
      <div className={ `col-12 ${ this.props.hasColumns ? 'col-sm-12 col-md-12 col-lg-6 col-xl-6' : '' }` } key={ (index + 1).toString() }>
        <FriendItem item={ item } />
      </div>
      )
    ) : null;

    return (
      <Fragment>
        <div className="row">{items}</div>
        <div className="row">{this.props.hasAddButton ? add : null}</div>
      </Fragment>
    );
  }
}


export default FriendList;
