import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { browserHistory, Link, IndexLink } from 'react-router';
import Parallax from 'react-springy-parallax';

class SiteNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggleHome = this.toggleHome.bind(this);
    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.pathname !== this.props.pathname)
      this.setState({toggle: false});
  }

  toggleHome() {
    this.setState({toggle: false});
  }

  toggle() {
    let toggleState = this.state.toggle === true ? false : true;
    this.setState({toggle: toggleState});
  }

  render() {

    const { pathname, setElementToScrollTo } = this.props;

    return (
      <nav>
        <div className="site_header">
          <div>
            <a className="home_link" onClick={() => setElementToScrollTo(0, this.toggleHome)}>
              <span className="site_logo">Jon Ortiz</span>
            </a>
          </div>
          <div>
            <span onClick={this.toggle} className={(this.state.toggle) ? 'icon__menu show' : 'icon__menu' } />
          </div>
        </div>
        <div className={(this.state.toggle) ? 'site_dropdown show' : 'site_dropdown'}>
          {(pathname !== '/home' && pathname !== '/') && <div><IndexLink to="/">Home</IndexLink></div>}
          <div>
            <a onClick={() => setElementToScrollTo(1, this.toggle)}>Experience</a>
          </div>
          <div>
            <a onClick={() => setElementToScrollTo(5, this.toggle)}>Skillsets</a>
          </div>
          <div>
            <a onClick={() => setElementToScrollTo(6, this.toggle)}>Education</a>
          </div>
          <div>
            <a onClick={() => setElementToScrollTo(7, this.toggle)}>My Resume</a>
          </div>
          <div>
            <a onClick={() => setElementToScrollTo(8, this.toggle)}>Contact Me</a>
          </div>
        </div>
      </nav>);
    }
}

SiteNavigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  setElementToScrollTo: PropTypes.func.isRequired
};

export default SiteNavigation;
