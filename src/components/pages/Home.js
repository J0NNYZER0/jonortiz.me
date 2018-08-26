import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Footer from '../common/Footer';

class Home extends React.Component {

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
    const { home } = this.props;

    return (
      <main className="home">
        <section>
          {home.map((section,idx) => {

            return <div key={idx}>
              <div>
                <span onClick={this.toggle} className="profile_picture" style={{ backgroundImage: section.profile_pic }} />
              </div>
              <div className={(this.state.toggle) ? 'love_message show' : 'love_message'}>
                <p>
                  Made with 🖤 by me. The UI is <b>Reactjs</b>.
                  The API is <b>Nodejs</b>. The DB is <b>Mysql</b>.
                  The PaAS is <b>Heroku</b>. The CDN is <b>AWS</b>. The code is on <b>git</b>.
                </p>
              </div>
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
