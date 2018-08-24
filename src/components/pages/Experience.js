import React from 'react';
import PropTypes from 'prop-types';
import Job from '../common/Job';
import Footer from '../common/Footer';
import experienceData from '../../data/experience.json';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="experience">
        <section>
          <h1>Experience</h1>
          {experienceData.map(experience => <Job experience={experience} />)}
        </section>
        <Footer />
      </main>
    );
  }
}

Experience.propTypes = {
  title: PropTypes.string
};

export default Experience;
