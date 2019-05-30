import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import Toolbar from './../../Toolbar';
const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};

const BASE_URL = 'http://localhost:1337';


class ScopeItem extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.item.id;
    this.name = this.props.item.name;
    this.notes = this.props.item.notes;
    this.achievements = this.props.item.achievements;
    this.imageUrl = this.props.item.picture;
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
      <NavLink to={ `/scopes/${ this.id }` } className="scope-item">

        <div className="card-toolbar">
          <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
        </div>

        <div className="card">
          <img className="img-fluid" src={ `${BASE_URL}${this.imageUrl}` } alt={ this.name } />
          <div className="card-body">
            <h3 className="card-title">
              { this.name }
              <span className={ `badge badge-${this.achievements.length ? 'secondary' : 'primary' } ml-3 float-right `}>
                { this.achievements.length }
              </span>
            </h3>
            <p className="card-text">{ this.notes }</p>
            <p className="text-muted"> Last updated 3 mins ago</p>
          </div>
        </div>

      </NavLink>
      );
  }
}

export default ScopeItem;
