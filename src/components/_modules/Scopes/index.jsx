import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import PageHeader from './../../PageHeader';
import ScopeList from './ScopeList';
import ScopeItem from './ScopeItem';
import './scopes.css';
import Toolbar from './../../Toolbar';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};


class Scopes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: null,
      items: []
    };
  }

  componentDidMount () {
    fetch(`${ BASE_URL }scopes/`)
    .then(res => res.json())
    .then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          items: result
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
      <PageHeader breadcrumps={ [ 'Modules', 'Scopes' ] } />

      {this.state.isLoaded === false ?
        <div className="alert alert-danger" role="alert">
        Cannot load scopes
        </div>
        :
        <ScopeList hasAddButton={ true } hasColumns={ true } items={ this.state.items } /> }
        </React.Fragment>
        );
  }
}



export default Scopes;
