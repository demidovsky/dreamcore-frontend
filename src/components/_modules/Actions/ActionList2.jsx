import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import ActionItem from './ActionItem';
import Toolbar from './../../Toolbar';


const BASE_URL = 'http://localhost:1337';


const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};

function handleToolbar () {

}


class ActionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }


  newActionText = (text) => {
    this.setState({ text });
  }


  addAction = () => {
    axios.post(`${ BASE_URL }/actions`, { name: this.state.text })
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
      <tr className="task-create">
        <th scope="row"></th>
        <td>
          <input type="text" className="form-control" value={ this.state.text }
            onChange={ e => this.newActionText(e.currentTarget.value) }/>
        </td>
        <td>
          <button type="button" className="btn btn-sm btn-primary" onClick={ this.addAction }>Create</button>
        </td>
        {/*<td></td>*/}
      </tr>
    );

    const items = this.props.items ? this.props.items.map((item, index) => (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          {/*<td>11.12.2018 11:57</td>*/}
          <td>
            <Toolbar items={ toolbarItems } onSelect={ handleToolbar } />
          </td>
        </tr>
      )
    ) : null;

    return (

          <div className="card">
            <h4 className="card-header">
              <i className="fas fa-running"></i>&nbsp; Today
            </h4>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    {/*<th scope="col">Created</th>*/}
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items}{this.props.hasAddButton ? add : null}
                  
                </tbody>
              </table>
           
            </div>
          </div>
    );
  }
}

export default ActionList;
