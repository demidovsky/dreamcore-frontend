import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import axios from 'axios';

import FriendItem from './FriendItem';

const BASE_URL = 'http://localhost:1337';


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }


  newFriendId = (id) => {
    if (!id.match(/^\d+$/)) return;
    this.setState({ id });
  }


  addFriend = () => {
    axios.post(`${ BASE_URL }/friends/${this.state.id}`)
      .then(response => {
        console.log('created', response);
        return response;
      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {

    const add = (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key="0">
        <div className="card card-figure card-add">
            <div className="card-body">
              <div className="form-group">
                <label className="col-form-label">User id:</label>
                <input onChange={ e => this.newFriendId(e.currentTarget.value) } name="friend" 
                  type="text" className="form-control" value={ this.state.id }/>
              </div>
              <span className="btn btn-xs btn-success" onClick={ this.addFriend }>Add</span>
            </div>
        </div>
      </div>
    );

    const items =this. props.items ?this. props.items.map((item, index) => (
      <div className={ `col-12 ${this. props.hasColumns ? 'col-sm-12 col-md-6 col-lg-6 col-xl-4' : '' }` } key={ (index + 1).toString() }>
        <FriendItem item={ item } />
      </div>
      )
    ) : null;

    return (
      <div className="row">{items}{this.props.hasAddButton ? add : null}</div>
    );
  }
}



export default FriendList;
