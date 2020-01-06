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
      keywords: '',
      loadedPage: 0,
      page: 1,
      images: []
    };

    const reload = (keywords) => {
      console.log('reload');
      if (!keywords || keywords.length < 3) return;
      flickr.photos.search({
        text: keywords,
        page: 1,
        per_page: 5,
        safe_search: 1,
        // content_type: 1,
        sort: 'relevance',
        // sort: 'interestingness-desc'
      })
      .then(result => {
        console.log('Got result');
        console.log('this', this);
        this.setState({
          keywords,
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
    console.log('Update', prevProps.keywords, 'to', this.props.keywords);
    if (prevProps.keywords !== this.props.keywords) this.reload(this.props.keywords);
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('Should update props', this.props, nextProps);
    // console.log('Should update state', this.state, nextState);
    let isUpdated = false;
    if (this.props.keywords !== nextProps.keywords) isUpdated = true;
    if (this.state.loadedPage !== nextState.loadedPage) isUpdated = true;
    if (this.state.keywords !== nextState.keywords) isUpdated = true;
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

  load = (keywords) => {
    console.log('load');
    if (!keywords || keywords.length < 3) return;
    flickr.photos.search({
      text: keywords,
      page: this.state.loadedPage + 1,
      per_page: 5
    })
    .then(result => {
      this.setState(state => ({
        text: keywords,
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
    this.reload(this.input.value);
  }

  handleSearchButton = () => {
    this.reloadNow(this.input.value);
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
              defaultValue={ this.props.keywords }
              ref={ node => { this.input = node; } }
              className="form-control form-control-sm"/>
            <button className="btn btn-xs btn-primary" onClick={ this.handleSearchButton }>Search</button>
          </div>
        </div>

        <div className="mb-2">

          {this.state.images.map(img => {
            const url = `https://farm${ img.farm }.staticflickr.com/${ img.server }/${ img.id }_${ img.secret }_q.jpg`;
            return <div key={ img.id } className="img-thumb">
              <img className="img-fluid" alt="" onClick={ () => { this.props.onImageSet(url, this.state.keywords) } } src={ url } />
            </div>
          })}

        </div>

        <div className="form-group">
          {/*<button className="btn btn-success float-right">Apply image</button>*/}
          <button className="btn btn-primary float-right" onClick={ () => { this.load(this.state.keywords) } }>Load more...</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageFromFlickr;
