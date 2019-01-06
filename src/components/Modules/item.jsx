import React from 'react';
import PropTypes from 'prop-types';
import noImage from './no-image.jpg';

class ModuleItem extends React.Component {
  constructor (props) {
    super(props);

    this.description = this.props.item.description;
    this.title = this.props.item.title;
    this.subtitle = this.props.item.subtitle;
    this.imageUrl = this.props.item.imageUrl;
    this.isActive = this.props.item.isActive;

    this.state = {
      redirect: null
    };
  }

  render () {

    return (
      <div className="card module-item">
        <img className={ `img-fluid ${ this.isActive ? '' : 'grayscale' }` }
          src={ this.imageUrl || noImage } alt={ this.title } />
        <div className="card-img-overlay">
          <span className="badge badge-primary mb-2">{ this.title }</span>
        
          <p className="card-text text-white">{ this.description }</p>

          { this.isActive ?
            <a href="" className="btn btn-warning">Deactivate</a>
            :
            <a href="" className="btn btn-success">Activate</a> }
        </div>
      </div>
    );
  }
}

ModuleItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ModuleItem;