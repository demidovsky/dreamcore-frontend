import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="btn-light dropdown-toolbar">
          <i className="mdi mdi-dots-vertical"></i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem className="text-success"><i className="fas fa-check"></i> Completed</DropdownItem>
          <DropdownItem className="text-danger"><i className="fas fa-trash-alt"></i> Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}


class Actions extends Component {
  render() {
    return (

<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
    <div className="card">
        <h4 className="card-header text-primary"><i className="fas fa-running"></i>&nbsp; Active</h4>
        <div className="card-body">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Created</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Call John</td>
                        <td>11.12.2018 11:57</td>
                        <td><Toolbar/></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Check reports</td>
                        <td>11.12.2018 11:57</td>
                        <td><Toolbar/></td>
                  </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Go to meeting</td>
                        <td>11.12.2018 11:57</td>
                        <td><Toolbar/></td>
                  </tr>
                    <tr className="task-create">
                        <th scope="row"></th>
                        <td>
                          <input type="text" className="form-control"/>
                        </td>
                        <td>
                          <button type="button" className="btn btn-sm btn-primary">Create</button>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
           
        </div>
    </div>
</div>
    );
  }
}

export default Actions;
