import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import * as messageActions from '../actions/messageActions';
import * as resumeActions from '../actions/resumeActions';

import SiteNavigation from './common/SiteNavigation';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        scrollToElement: null
      }

      this.setElementToScrollTo = this.setElementToScrollTo.bind(this);

  }

  setElementToScrollTo(el,callback) {
    this.setState({scrollToElement: el})
    if (callback)
      callback()
  }

  render() {

    const { location } = this.props;

    return (
      <div className="layout">
        <SiteNavigation pathname={location.pathname} setElementToScrollTo={this.setElementToScrollTo} />
        {React.cloneElement(this.props.children, { scrollToElement: this.state.scrollToElement })}
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
