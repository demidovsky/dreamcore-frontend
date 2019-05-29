import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import ActionItem from './ActionItem';


const BASE_URL = 'http://localhost:1337/';


const add = (
  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key="0">
    <NavLink to="/scopes/new" className="card card-figure card-add">
      <div className="card border-3 border-top border-top-primary">
        <div className="card-body">
          <h5 className="text-muted">Add</h5>
        </div>
      </div>
    </NavLink>
  </div>
);

function ActionList (props) {
  const items = props.items ? props.items.map((item, index) => (
    <div className={ `col-12 ${ props.hasColumns ? 'col-sm-3 col-md-2' : '' }` } key={ (index + 1).toString() }>
      <ActionItem item={ item } />
    </div>
    )
  ) : null;

  return (
    <div className="row">{items}{props.hasAddButton ? add : null}</div>
  );
}

export default ActionList;
