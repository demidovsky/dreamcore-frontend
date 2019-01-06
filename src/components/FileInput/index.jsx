import React from 'react';
import './file-input.css';

// const $ = (selector) => document.querySelectorAll(selector);

// TODO: replace with some external lib
class FileInput extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      isHover: false,
      filename: null
    };
  }

  handleMouseOver = () => { this.setState({ isHover: true }); }
  handleMouseOut = () => { this.setState({ isHover: false }); }

  handleChange = (e) => {
    const match = e.target.value.match(/[^/^\\]+$/);
    if (match) this.setState({ filename: match[0] });
  }

  componentDidMount () {
    this.container.addEventListener('mouseover', this.handleMouseOver);
    this.container.addEventListener('mouseout', this.handleMouseOut);
    this.input.addEventListener('change', this.handleChange);
  }

  componentWillUnmount () {
    this.container.removeEventListener('mouseover', this.handleMouseOver);
    this.container.removeEventListener('mouseout', this.handleMouseOut);
    this.input.removeEventListener('change', this.handleChange);
  }

  render () {
    return (
      <div className="form-group custom-file" ref={ node => { this.container = node } }>
        <button className={ `btn ${ this.state.isHover ? 'btn-primary' : 'btn-outline-primary' } btn-xs` }>
          Select
        </button>
        <input type="file" className="custom-file-input" id="customFile" ref={ node => { this.input = node } }/>
        <label className="custom-file-label" htmlFor="customFile">{ this.state.filename || 'Upload...' }</label>
      </div>
    );
  }
}

export default FileInput;