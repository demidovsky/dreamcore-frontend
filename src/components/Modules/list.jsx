import React from 'react';
import PropTypes from 'prop-types';
import ModuleItem from './item';

function ModulesList (props) {
  const items = props.items.map((item, index) => (
    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12" key={ (index + 1).toString() }>
      <ModuleItem item={ item } />
    </div>
    )
  );

  return (
    <div className="row">{items}</div>
  );
}

ModulesList.propTypes = {
  items: PropTypes.array
};

export default ModulesList;
