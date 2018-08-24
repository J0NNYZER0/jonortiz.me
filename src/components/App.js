import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import * as messageActions from '../actions/messageActions';
import * as resumeActions from '../actions/resumeActions';
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

function mapStateToProps(state) {
  return {
    messages: state.messages,
    resume: state.resumes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      message: bindActionCreators(messageActions, dispatch),
      resume: bindActionCreators(resumeActions, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
