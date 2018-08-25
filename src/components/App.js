import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Nav from './common/Nav';
import Modal from './common/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { location } = this.props;

    return (
      <div className="layout">
        <Modal />
        <Nav pathname={location.pathname} />
        {React.cloneElement(this.props.children, { })}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default withRouter(connect(null, null)(App));
