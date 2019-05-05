import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Tab, Nav } from 'react-bootstrap';

// import ImageFromFlickr from './fromFlickr';
import ImageFromFile from './fromFile';
import ImageFromURL from './fromURL';

class AchievementImage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="from-file">
        <Row>
          <Col sm={ 4 } md={ 3 }>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="from-file">From file</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="from-flickr">From Flickr</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="from-url">From URL</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={ 8 } md={ 9 }>
            <Tab.Content>

              <Tab.Pane eventKey="from-flickr">
                <ImageFromFlickr text={ this.props.text } onImageSet={ this.props.onImageSet } />
              </Tab.Pane>

              <Tab.Pane eventKey="from-file">
                <ImageFromFile onImageSet={ this.props.onImageSet } />
              </Tab.Pane>

              <Tab.Pane eventKey="from-url">
                <ImageFromURL onImageSet={ this.props.onImageSet } />
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

AchievementImage.propTypes = {
  onImageSet: PropTypes.func
};

export default AchievementImage;
