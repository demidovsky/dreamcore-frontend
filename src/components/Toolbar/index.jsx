import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function getDropdownItem (name, text, handler) {
  return <DropdownItem key={ name } onClick={ (e) => { handler(name, e); } }>
    {text}
  </DropdownItem>
}

class Toolbar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  handleSelect = (itemName, e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onSelect(itemName);
  }

  toggle = (e) => {
    e.stopPropagation();
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render () {
    const items = [];

    for (var name in this.props.items) {
      items.push(
        getDropdownItem(name, this.props.items[name], this.handleSelect)
      );
    }

    return ( 
      <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
        <DropdownToggle className="btn-light dropdown-toolbar" onClick={ e => { e.preventDefault(); e.stopPropagation(); } }>
          <i className="mdi mdi-dots-vertical"></i>
        </DropdownToggle>
        <DropdownMenu right onClick={ e => { e.preventDefault(); e.stopPropagation(); } }>
          {items}
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