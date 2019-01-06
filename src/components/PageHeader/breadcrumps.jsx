import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function Breadcrumps (props) {
  if (!props.items) return '';

  const items = props.items.slice(0, -1).map((item, index) =>
    <li className="breadcrumb-item" key={ index.toString() }>
      <Link to={ `/${ item.toLowerCase() }` } className="breadcrumb-link">
        { item }
      </Link>
    </li>
  );
  const current = _.last(props.items);

  return (
    <div className="page-breadcrumb">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items}
          <li className="breadcrumb-item active" aria-current="page">{current}</li>
        </ol>
      </nav>
    </div>
  );
}

Breadcrumps.propTypes = {
  items: PropTypes.array.isRequired
};

export default Breadcrumps;