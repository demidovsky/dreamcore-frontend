import React, { Component } from 'react';
import PageHeader from './../../PageHeader';
import Toolbar from './../../Toolbar';
import './actions.css';

const toolbarItems = {
  complete: <span className="text-success"><i className="fas fa-check"></i> Mark completed</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};

class Actions extends Component {
  handleToolbar = (itemName) => {
    console.log(itemName);
  }

  render () {
    return [
      <PageHeader breadcrumps={ ['Modules', 'Actions'] } />,

      <div className="row">

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="card">
            <h4 className="card-header text-primary">
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Do something</td>
                    {/*<td>11.12.2018 11:57</td>*/}
                    <td>
                      <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Find something</td>
                    {/*<td>11.12.2018 11:57</td>*/}
                    <td>
                      <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Create something</td>
                    {/*<td>11.12.2018 11:57</td>*/}
                    <td>
                      <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
                    </td>
                  </tr>
                  <tr className="task-create">
                    <th scope="row"></th>
                    <td>
                      <input type="text" className="form-control"/>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-primary">Create</button>
                    </td>
                    {/*<td></td>*/}
                  </tr>
                </tbody>
              </table>
           
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="card">
            <h4 className="card-header text-primary">
              <i className="fas fa-running"></i>&nbsp; This week
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Do something</td>
                    {/*<td>11.12.2018 11:57</td>*/}
                    <td>
                      <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Find something</td>
                    {/*<td>11.12.2018 11:57</td>*/}
                    <td>
                      <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Create something</td>
                    {/*<td>11.12.2018 11:57</td>*/}
                    <td>
                      <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
                    </td>
                  </tr>
                  <tr className="task-create">
                    <th scope="row"></th>
                    <td>
                      <input type="text" className="form-control"/>
                    </td>
                    <td>
                      <button type="button" className="btn btn-sm btn-primary">Create</button>
                    </td>
                    {/*<td></td>*/}
                  </tr>
                </tbody>
              </table>
           
            </div>
          </div>
        </div>
      </div>
    ];
  }
}

export default Actions;
