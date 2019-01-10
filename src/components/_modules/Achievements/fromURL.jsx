import React from 'react'
import PropTypes from 'prop-types'

class ImageFromURL extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  onClick = () => {
    this.props.onImageSet(this.state.value);
  }

  render () {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="inputSmall" className="col-form-label">Paste URL</label>
          <input type="text" className="form-control form-control-sm" placeholder="http://..."
            value={ this.state.value } onChange={ this.onChange } />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-lg btn-outline-success" onClick={ this.onClick }>
            Apply image
          </button>
        </div>
      </React.Fragment>
    );
  }
}

ImageFromURL.propTypes = {
  onImageSet: PropTypes.func
};

export default ImageFromURL;