import React, { Component, Fragment } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import PageHeader from './../../PageHeader';
import ActionList from './ActionList';
import ActionList2 from './ActionList2';
import ActionItem from './ActionItem';
import './actions.css';
import Toolbar from './../../Toolbar';

const BASE_URL = 'http://localhost:1337';

const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};


class Actions extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: null,
      items: []
    };
  }

  componentDidMount () {
    fetch(`${ BASE_URL }/actions`)
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
      <Fragment>
        <PageHeader breadcrumps={ ['Modules', 'Actions'] } />

        {this.state.isLoaded === false ?
          <div className="alert alert-danger" role="alert">
          Cannot load actions
          </div>
          :
          <ActionList2 hasAddButton={ true } hasColumns={ true } items={ this.state.items } /> }


      </Fragment>
    );
  }
}


export default Actions;
