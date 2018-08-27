import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Modal from './common/Modal';
import Nav from './common/Nav';
import Footer from './common/Footer';

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
        <main>
          {React.cloneElement(this.props.children, { })}
          <Footer />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default withRouter(connect(null, null)(App));
