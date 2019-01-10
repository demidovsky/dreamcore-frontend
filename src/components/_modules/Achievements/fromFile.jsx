import React from 'react'
import PropTypes from 'prop-types'
import FileInput from './../../FileInput'
import { Formik } from 'formik'
import axios from 'axios'

class ImageFromFile extends React.Component {
  onSubmit = (values, { setSubmitting }) => {
    console.log('submit', values);
    setSubmitting(true);
    const url = 'http://localhost:1337/image/upload';
    const formData = new FormData();
    formData.append('image', values.file);

    axios.post(url, formData, { 'Content-Type': 'multipart/form-data' })
    .then(response => {
      console.log(response);
      setSubmitting(false);
      this.props.onImageSet('http://localhost:1337' + response.data.url);
    })
    .catch(error => {
      console.error(error);
      setSubmitting(false);
    });
  }

  render () {
    return (
      <Formik onSubmit={ this.onSubmit }>
        {({ values, handleSubmit, setFieldValue, isSubmitting }) => (

          <form onSubmit={ handleSubmit }>
            <div className="form-group">
              <FileInput value={ values.file } onChange={ (e) => {
                console.log('change', e.currentTarget.files[0]);
                setFieldValue('file', e.currentTarget.files[0])
              } } />
            </div>
            <div className="form-group">
              <button type="submit" disabled={ false /*!isSubmitting*/ }  className="btn btn-lg btn-outline-success">
                Apply image
              </button>
            </div>
          </form>)}

      </Formik>
    );
  }
}

ImageFromFile.propTypes = {
  onImageSet: PropTypes.func
};

export default ImageFromFile;