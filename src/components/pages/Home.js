import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Footer from '../common/Footer';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { home } = this.props;

    return (
      <main className="home">
        <section>
          {home.map((section,idx) => {

            return <div key={idx}>
              <div className="profile_picture" style={{ backgroundImage: section.profile_pic }} />
              <h1>{section.title}</h1>
              <p dangerouslySetInnerHTML={{__html: section.tagline}} />
            </div>
          })}
          {/*<a className="animated_down_arrow"><span className="down-arrow" /></a>*/}
        </section>
        <Footer />
      </main>
    );
  }
}

Home.propTypes = {
  home: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

export default connect(mapStateToProps)(Home);
