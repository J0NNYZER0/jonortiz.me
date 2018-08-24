import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }

    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.pathname !== this.props.pathname)
      this.setState({toggle: false});
  }

  toggle() {

    let toggleState = this.state.toggle === true ? false : true;

    this.setState({toggle: toggleState});
  }

  render() {

    const { pathname } = this.props;

    return (
      <nav>
        <div className="site_header">
          <div>
            <IndexLink className="home_link" to="/">
              <span className="site_logo">Jon Ortiz</span>
            </IndexLink>
          </div>
          <div>
            <span onClick={this.toggle} className={(this.state.toggle) ? 'icon__menu show' : 'icon__menu' } />
          </div>
        </div>
        {<div className={(this.state.toggle) ? 'site_dropdown show' : 'site_dropdown'}>
          {pathname !== '/' && <div>
            <IndexLink to="/">Home</IndexLink>
          </div>}
          <div>
            <Link to="/experience">Experience</Link>
          </div>
          <div>
            <Link to="/skillsets">Skillsets</Link>
          </div>
          <div>
            <Link to="/education">Education</Link>
          </div>
          <div>
            <Link to="/resume">Resume</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>}
      </nav>);
    }
}

Nav.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Nav;
