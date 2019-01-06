import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Toolbar from './../../Toolbar';
import noImage from './no-image.jpg';

const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  complete: <span className="text-success"><i className="fas fa-check"></i> Mark completed</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};

class AchievementItem extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.item.id;
    this.name = this.props.item.name;
    this.imageUrl = this.props.item.imageUrl;
    this.state = {
      redirect: null
    };
  }

  handleMouseOver = () => { this.setState({ isHover: true }); }
  handleMouseOut = () => { this.setState({ isHover: false }); }

  componentDidMount () {
    this.container.addEventListener('mouseover', this.handleMouseOver);
    this.container.addEventListener('mouseout', this.handleMouseOut);
  }

  componentWillUnmount () {
    if (!this.container) return;
    this.container.removeEventListener('mouseover', this.handleMouseOver);
    this.container.removeEventListener('mouseout', this.handleMouseOut);
  }

  handleToolbar = (itemName) => {
    console.log(itemName, this.id);
    this.setState({ redirect: `/achievement/${ this.id }` });
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />
    }

    return (
      <div ref={ node => { this.container = node } }
        className={ `card card-figure ${ this.state.isHover ? 'card-hover' : '' }` }>
        <div className="card-toolbar">
          <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
        </div>
        <figure className="figure">
          <img className="img-fluid" src={ this.imageUrl || noImage } alt={ this.name } />
          <figcaption className="figure-caption">
            <h6 className="figure-title">{ this.name }</h6>
          </figcaption>
        </figure>
      </div>
    );
  }
}

AchievementItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default AchievementItem;