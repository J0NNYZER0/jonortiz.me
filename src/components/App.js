import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';
import SiteNavigation from './common/SiteNavigation';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { location } = this.props;
    return (
      <div className="layout">
        <SiteNavigation pathname={location.pathname} />
        {React.cloneElement(this.props.children, {})}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
