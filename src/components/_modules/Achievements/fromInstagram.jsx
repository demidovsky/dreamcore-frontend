import React from 'react';
import cheerio from 'cheerio';

const API_KEY = '030eecfb70548131bdf6d6a6e5705a14';
const SECRET = 'c7d2f33ef111cf67';

const BASE_URL = ''

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
  }

  componentDidMount () {
    console.log('Flickr mount');
    // console.log('mount', this.props);
    // if (!this.props.text) return;
    // this.load(this.props.text, 1);
    // this.load(this.props.text);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Did update props', prevProps, this.props);
    console.log('Did update state', prevState, this.state);

    if (!prevProps.text) this.reload(this.props.text);

    // console.log('up', prevState.text, this.state.text);
    // // console.log('prevState.text', prevState.text);
    // if (!prevState.text) {
    //   console.log('initial load');
    //   // this.load();
    // }
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('Should update props', this.props, nextProps);
    console.log('Should update state', this.state, nextState);
    if (this.props.text !== nextProps.text) return true;
    if (this.state.loadedPage !== nextState.loadedPage) return true;
    if (this.state.text !== nextState.text) return true;
    return false;
  }

  /*load () {
    // console.log('newText', newText);
    const text = this.state.text;
    if (!text) return;

    if (this.state.loadedPage === this.state.page) return;
    const currentPage = this.state.page;

    console.log('load', this.state.loadedPage, currentPage);

    flickr.photos.search({
      text: text,
      page: currentPage,
      per_page: 5
    })
    .then(result => {
      this.setState(state => ({
        images: state.images.concat(result.body.photos.photo),
        loadedPage: currentPage,
        // text: text
      }));
    })
    .catch(err => {
      console.error(err);
    });
  }*/

  reload = (text) => {
    console.log('reload');
    flickr.photos.search({
      text: text,
      page: 1,
      per_page: 5
    })
    .then(result => {
      this.setState({
        text,
        images: result.body.photos.photo,
        loadedPage: 1,
      });
    })
    .catch(err => {
      console.error(err);
    });
  }

  load = (text) => {
    console.log('load');
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

  changeText = () => {
    console.log('changeText', this.keywords.value);
    this.reload(this.keywords.value);
    // this.setState({
    //   text: this.keywords.value
    // });
    //   loadedPage: 0,
    //   page: 1,
    //   images: []
    // });
  }

  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="inputSmall" className="col-form-label pt-0">Find by keywords</label>
          <input type="text"
            defaultValue={ this.props.text }
            ref={ node => { this.keywords = node; } }
            className="form-control form-control-sm"/>
          <button className="btn btn-xs btn-outline-primary" onClick={ this.changeText }>Search</button>
        </div>

        <div className="mb-2">

          {this.state.images.map(img => {
            const url = `https://farm${ img.farm }.staticflickr.com/${ img.server }/${ img.id }_${ img.secret }_q.jpg`;
            return <div key={ img.id } className="img-thumb">
              <img className="img-fluid" alt="" onClick={ () => { this.props.onImageSet(url) } } src={ url } />
            </div>
          })}

        </div>

        <div className="form-group">
          <button className="btn btn-outline-primary float-right" onClick={ () => { this.load(this.state.text) } }>Load more...</button>
          <button className="btn btn-outline-success">Apply image</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageFromFlickr;