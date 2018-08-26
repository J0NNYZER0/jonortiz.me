import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  toggle() {
    let toggleState = this.state.toggle === true ? false : true;
    this.setState({toggle: toggleState});
  }

  render() {

    const { social_media, site } = this.props;

    let today = new Date(),
    year = today.getFullYear();

    return (
      <footer>
        <div className="menu__social">
          {social_media.map((el, idx) => {
            return <a key={idx} href={el.url} target="_blank">
              <span style={{ backgroundImage: el.image }} />
            </a>
          })}
        </div>
        <div className="company_info">
          {site.map((el, idx) => <span key={idx} className="copyright">&copy; {year} {el.title}</span>)}
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  social_media: PropTypes.array.isRequired,
  site: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    social_media: state.social_media,
    site: state.site
  };
}

export default connect(mapStateToProps)(Footer);
