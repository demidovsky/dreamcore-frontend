import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function getDropdownItem (name, text, handler) {
  return <DropdownItem key={ name } onClick={ () => { handler(name); } }>
    {text}
  </DropdownItem>
}

class Toolbar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.items = [];

    for (var name in props.items) {
      this.items.push(
        getDropdownItem(name, props.items[name], this.handleSelect)
      );
    }
  }

  handleSelect = (itemName) => {
    this.props.onSelect(itemName)
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render () {
    return (
      <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
        <DropdownToggle className="btn-light dropdown-toolbar">
          <i className="mdi mdi-dots-vertical"></i>
        </DropdownToggle>
        <DropdownMenu right>
          {this.items}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

Toolbar.propTypes = {
  items: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Toolbar;