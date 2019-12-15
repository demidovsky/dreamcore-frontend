import React from 'react';
import Flickr from 'flickr-sdk';
import _ from 'lodash';
import logo from './flickr.svg';

const API_KEY = '030eecfb70548131bdf6d6a6e5705a14';
const SECRET = 'c7d2f33ef111cf67';

var flickr = new Flickr(API_KEY);

class ImageFromFlickr extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      text: '',
      loadedPage: 0,
      page: 1,
      images: []
    };

    const reload = (text) => {
      console.log('reload');
      if (!text || text.length < 3) return;
      flickr.photos.search({
        text: text,
        page: 1,
        per_page: 5
      })
      .then(result => {
        console.log('Got result');
        console.log('this', this);
        this.setState({
          text,
          images: result.body.photos.photo,
          loadedPage: 1,
        });
      })
      .catch(err => {
        console.error(err);
      });
    };

    this.reload = _.debounce(reload, 1000);
    this.reloadNow = reload;
  }

  componentDidMount () {
    // console.log('Flickr mount');
  }

  componentDidUpdate (prevProps, prevState) {
    // console.log('Did update props', prevProps, this.props);
    // console.log('Did update state', prevState, this.state);
    console.log('Update', prevProps.text, 'to', this.props.text);
    if (prevProps.text !== this.props.text) this.reload(this.props.text);
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('Should update props', this.props, nextProps);
    // console.log('Should update state', this.state, nextState);
    let isUpdated = false;
    if (this.props.text !== nextProps.text) isUpdated = true;
    if (this.state.loadedPage !== nextState.loadedPage) isUpdated = true;
    if (this.state.text !== nextState.text) isUpdated = true;
    console.log('isUpdated', isUpdated);
    return isUpdated;
  }

  /*reload = (text) => {
    console.log('reload');
    if (!text || text.length < 3) return;
    flickr.photos.search({
      text: text,
      page: 1,
      per_page: 5
    })
    .then(result => {
      console.log('Got result');
      console.log('this', this);
      this.setState({
        text,
        images: result.body.photos.photo,
        loadedPage: 1,
      });
    })
    .catch(err => {
      console.error(err);
    });
  }*/

  load = (text) => {
    console.log('load');
    if (!text || text.length < 3) return;
    flickr.photos.search({
      text: text,
      page: this.state.loadedPage + 1,
      per_page: 5
    })
    .then(result => {
      this.setState(state => ({
        text,
        images: state.images.concat(result.body.photos.photo),
        loadedPage: this.state.loadedPage + 1,
      }));
    })
    .catch(err => {
      console.error(err);
    });
  }

  handleTextChange = () => {
    console.log('handleTextChange');
    this.reload(this.keywords.value);
  }

  handleSearchButton = () => {
    this.reloadNow(this.keywords.value);
  }

  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          {/*<img src={ logo } alt=""/>*/}
          <label htmlFor="inputSmall" className="col-form-label pt-0">Find by keywords</label>
          <div className="input-group">
            <input type="text"
              onChange={ this.handleTextChange }
              defaultValue={ this.props.text }
              ref={ node => { this.keywords = node; } }
              className="form-control form-control-sm"/>
            <button className="btn btn-xs btn-primary" onClick={ this.handleSearchButton }>Search</button>
          </div>
        </div>

        <div className="mb-2">

          {this.state.images.map(img => {
            const url = `https://farm${ img.farm }.staticflickr.com/${ img.server }/${ img.id }_${ img.secret }_q.jpg`;
            return <div key={ img.id } className="img-thumb">
              <img className="img-fluid" alt="" onClick={ () => { this.props.onImageSet(url, this.state.text) } } src={ url } />
            </div>
          })}

        </div>

        <div className="form-group">
          {/*<button className="btn btn-success float-right">Apply image</button>*/}
          <button className="btn btn-primary float-right" onClick={ () => { this.load(this.state.text) } }>Load more...</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageFromFlickr;
