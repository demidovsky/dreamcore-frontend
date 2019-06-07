import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import PageHeader from './../../PageHeader';
import FriendList from './FriendList';
import FriendItem from './FriendItem';
// import './scopes.css';
import Toolbar from './../../Toolbar';
import axios from 'axios';


const BASE_URL = 'http://localhost:1337/';

const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};


class Friends extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: null,
      items: []
    };
  }

  componentDidMount () {
    axios.get(`${ BASE_URL }friends/`)
    // .then(res => res.json())
    .then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          items: result.data
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
      )
  }

  render () {
    return (
      <React.Fragment>
      <PageHeader breadcrumps={ ['Modules', 'Friends'] } />

      {this.state.isLoaded === false ?
        <div className="alert alert-danger" role="alert">
        Cannot load friends
        </div>
        :
        <FriendList hasAddButton={ true } hasColumns={ true } items={ this.state.items } /> }
        </React.Fragment>
        );
  }
}



export default Friends;
