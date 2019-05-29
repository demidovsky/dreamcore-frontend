import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AchievementItem from './item';
import noImage from './no-image.jpg';
import bg from './bg4.jpg';

const add = (
  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key="0">
    <Link to="/achievements/add" className="card card-figure card-add">
      <figure className="figure">
        <div className="card-add-image">
          <img className="img-fluid" src={ noImage } alt=""/>
        </div>
        <figcaption className="figure-caption">
          <span className="btn btn-xs btn-primary">Add</span>
        </figcaption>
      </figure>
    </Link>
  </div>
);

function AchievementList (props) {
  const items = props.items.map((item, index) => (
    <div className="col-xl-auto col-lg-auto col-md-4 col-sm-4 col-6" key={ (index + 1).toString() }>
      <AchievementItem item={ item } />
    </div>
    )
  );
  items.push(add);

  return (
    <div className="row achievements-bg" style={ { backgroundImage: `url(${ bg })` } }>{items}</div>
  );
}

AchievementList.propTypes = {
  items: PropTypes.array
};

export default AchievementList;
