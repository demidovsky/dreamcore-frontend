import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Toolbar from './../../Toolbar';
import noImage from './no-image.jpg';
import axios from 'axios';
import _ from 'lodash';

import layer0 from './glass/layer0_alpha.png';
import layer1 from './glass/layer1_normal.png';
import layer2 from './glass/layer2_colorburn.png';
import layer3 from './glass/layer3_linearburn.png';
import layer4 from './glass/layer4_linearburn.png';
import layer5 from './glass/layer5_overlay.png';
import layer6 from './glass/layer6_normal.png';

const BASE_URL = 'http://localhost:1337/';

const toolbarItems = {
  edit: <span className="text-primary"><i className="fas fa-pen"></i> Edit</span>,
  complete: <span className="text-success"><i className="fas fa-check"></i> Mark completed</span>,
  delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
};

var MASK = 'source-in';
var NORMAL = 'source-over';
var OVERLAY = 'overlay';
var COLORBURN = 'color-burn';
var LINEARBURN = 'multiply';

const layers = [
  { img: null, path: layer0      , mode: NORMAL },
  { img: null, path: null          , mode: MASK },
  { img: null, path: layer1      , mode: NORMAL },
  { img: null, path: layer2   , mode: COLORBURN },
  { img: null, path: layer3  , mode: LINEARBURN },
  { img: null, path: layer4  , mode: LINEARBURN },
  { img: null, path: layer5     , mode: OVERLAY },
  { img: null, path: layer6      , mode: NORMAL }
];

class AchievementItem extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.item.id;
    this.name = this.props.item.name;
    this.imageUrl = this.props.item.picture;
    this.state = {
      redirect: null
    };
  }

  componentDidMount () {
    this.load();
  }

  load = () => {
    const currentLayers = _.cloneDeep(layers);
    currentLayers[1].path = this.imageUrl || noImage;

    let loadsLeft = layers.length;
    currentLayers.forEach((item, index) =>
    {
      item.img = new Image();
      item.img.onload = () => { if (!--loadsLeft) this.draw(currentLayers); }
      item.img.src = item.path;
    });
  }

  draw = (currentLayers) => {
    this.canvas.style.width  = '150px';
    this.canvas.style.height = '150px';
    var ctx = this.canvas.getContext('2d');
    // console.log(ctx);
    // console.log(this.canvas);
    if (!ctx) {
      console.warn('no ctx'); return
    }
    currentLayers.forEach((item, index) =>
    {
      ctx.globalCompositeOperation = item.mode;
      if (index == 1)
      {
        ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height, 0, 0, 300, 150);
      }
      else
      {
        console.log(item.img.width, item.img.height);
        ctx.drawImage(item.img, 0, 0, 600, 600, 0, 0, 300, 150);
      }
    });
  }

  handleToolbar = (itemName) => {
    console.log(itemName, this.id);
    switch (itemName) {
      case 'edit': this.setState({ redirect: `/achievement/${ this.id }` }); return;
      case 'delete': {
        axios.delete(`${ BASE_URL }achievements/${ this.id }`)
          .then(response => {
            console.log('deleted', response);
            this.setState({ isDeleted: true });
          })
          .catch(error => {
            console.error(error);
          });
        return;
      }
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />
    }

    if (this.state.isDeleted) return null;

    return (
      <div>
        <div className="card-toolbar">
          <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
        </div>
        <canvas ref={ node => { this.canvas = node; } }></canvas>
      </div>
    );

    /*return (
      <div className="card card-figure">
        <div className="card-toolbar">
          <Toolbar items={ toolbarItems } onSelect={ this.handleToolbar } />
        </div>
        <canvas ref={ node => { this.canvas = node; } }></canvas>
        <figure className="figure">
          <img className="img-fluid" src={ this.imageUrl || noImage } alt={ this.name } />
          <figcaption className="figure-caption">
            <h6 className="figure-title">{ this.name }</h6>
          </figcaption>
        </figure>
      </div>
    );*/
  }
}

AchievementItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default AchievementItem;