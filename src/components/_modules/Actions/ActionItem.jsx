import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import Toolbar from './../../Toolbar';
const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};


class ActionItem extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.item.id;
    this.name = this.props.item.name;
    this.achievement = this.props.item.achievement;
    this.scope = this.props.item.scope;

    this.state = {
      redirect: null
    };
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />
    }

    if (this.state.isDeleted) return null;

          // style={ { backgroundImage: `url(${ 'http://localhost:1337' }${ this.imageUrl })` } }>
    return (
      <NavLink to={ `/actions/${ this.id }` } className="scope-item">
        <div className="card-toolbar">
          <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
        </div>
        <div className="card border-3 border-top border-top-primary">
          <div className="card-body">
            <h5 className="text-muted">{ this.name }</h5>
            {/*<div className="metric-value d-inline-block">
              <h1 className="mb-1">{ this.achievements ? this.achievements.length : 0 }</h1>
            </div>*/}
          </div>
        </div>
      </NavLink>
      );
  }
}

export default ActionItem;
