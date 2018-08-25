import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';

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

    const { site, pathname } = this.props;

    return (
      <nav>
        <div className="logo">
          {site.map(el => <IndexLink to="/">{el.title}</IndexLink>)}
          <div>
            <span onClick={this.toggle}
              className={(this.state.toggle) ?
                'icon__menu show' : 'icon__menu' } />
          </div>
        </div>
        {<div className={(this.state.toggle) ?
          'menu show' : 'menu'}>
          {pathname !== '/' &&
          <IndexLink to="/">Home</IndexLink>}
          <Link to="/experience">Experience</Link>
          <Link to="/skillsets">Skillsets</Link>
          <Link to="/education">Education</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>}
      </nav>);
    }
}

Nav.propTypes = {
  site: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    social_media: state.social_media,
    site: state.site
  };
}

export default connect(mapStateToProps)(Nav);
