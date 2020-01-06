import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import Toolbar from './../../Toolbar';
import noImage from './no-image2.jpg';
import badge from './victory.png';

import layer0 from './glass/layer0_alpha.png';
import layer1 from './glass/layer1_normal.png';
import layer2 from './glass/layer2_colorburn.png';
import layer3 from './glass/layer3_linearburn.png';
import layer4 from './glass/layer4_linearburn.png';
import layer5 from './glass/layer5_overlay.png';
import layer6 from './glass/layer6_normal.png';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
      isCompleted: this.props.item.isCompleted,
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
    this.canvas.style.width  = '140px';
    this.canvas.style.height = '140px';
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
        // console.log(item.img.width, item.img.height);
        ctx.drawImage(item.img, 0, 0, 600, 600, 0, 0, 300, 150);
      }
    });
  }

  handleToolbar = async (itemName) => {
    console.log(itemName, this.id);
    switch (itemName) {
    case 'edit': this.setState({ redirect: `/achievements/${ this.id }` }); return;
    case 'delete': {
      axios.delete(`${ BASE_URL }/achievements/${ this.id }`)
        .then(response => {
          console.log('deleted', response);
          this.setState({ isDeleted: true });
        })
        .catch(error => {
          console.error(error);
        });
      break;
    }
    case 'complete': {
      try {
        await axios.patch(`${ BASE_URL }/achievements/${ this.id }`, { isCompleted: true });
        this.setState({ isCompleted: true });
      } catch (err) {
        console.error(err);
      }
      break;
    }
    case 'uncomplete': {
      try {
        await axios.patch(`${ BASE_URL }/achievements/${ this.id }`, { isCompleted: false });
        this.setState({ isCompleted: false });
      } catch (err) {
        console.error(err);
      }
      break;
    }
    }
  }

  getToolbarItems = () => {
    const toolbarItems = {
      edit: <span className="text-success"><i className="fas fa-pen"></i> Edit</span>,
      delete: <span className="text-danger"><i className="fas fa-times"></i> Delete</span>,
    };

    if (this.state.isCompleted) {
      toolbarItems['uncomplete'] = <span className="text-primary"><i className="fas fa-check"></i> Mark incomplete</span>;
    } else {
      toolbarItems['complete'] = <span className="text-primary"><i className="fas fa-check"></i> Mark completed</span>;
    }

/*    if (this.state.isPublic) {
      toolbarItems['hide'] = <span className="text-primary"><i className="fas fa-eye-slash"></i> Make private</span>;
    } else {
      toolbarItems['publish'] = <span className="text-primary"><i className="fas fa-eye"></i> Make public</span>;
    }*/

    return toolbarItems;
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to={ this.state.redirect } />;
    }

    if (this.state.isDeleted) return null;

    return (
      <div className="achievement-item">
        <div className="card-toolbar">
          <Toolbar items={ this.getToolbarItems() } onSelect={ this.handleToolbar } />
        </div>
        <canvas ref={ node => { this.canvas = node; } } />
        {this.state.isCompleted && <img className="achievement-completed" src={ badge } />}
        <h6 className="figure-title text-center text-black">{ this.name }</h6>
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
