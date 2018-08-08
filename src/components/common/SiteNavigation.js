import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link, IndexLink } from 'react-router';

class SiteNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_menu: false
    }
    this.toggle = this.toggle.bind(this, this.state.toggle_menu);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.pathname !== this.props.pathname)
      this.setState({toggle_menu: false});
  }

  toggle(toggle) {

    toggle = this.state.toggle_menu === true ? false : true;
    this.setState({toggle_menu: toggle});
  }

  render() {
    const { pathname } = this.props;
    return (
      <nav>
        <ul className="site_header">
          <li>
            <IndexLink className="home_link" to="/">
              <span className="site_logo">Jon Ortiz</span>
            </IndexLink>
          </li>
          <li>
            <span onClick={this.toggle} className={(this.state.toggle_menu) ? 'icon__menu show' : 'icon__menu' } />
          </li>
        </ul>
        <ul className={(this.state.toggle_menu) ? 'site_dropdown show' : 'site_dropdown'}>
          {(pathname !== '/home' || pathname !== '/') && <li><IndexLink to="/">Home</IndexLink></li>}
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>);
    }
}

SiteNavigation.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default SiteNavigation;
