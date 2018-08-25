import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Job from '../common/Job';
import Footer from '../common/Footer';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { experience } = this.props;

    return (
      <main className="experience">
        <section>
          <h1>Experience</h1>
          {experience.map((el, idx) => <Job key={idx} idx={idx} experience={el} />)}
        </section>
        <Footer />
      </main>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    experience: state.experience
  };
}

export default connect(mapStateToProps)(Experience);
