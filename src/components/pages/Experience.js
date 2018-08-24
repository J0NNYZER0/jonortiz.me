import React from 'react';
import PropTypes from 'prop-types';
import Job from '../common/Job';
import Footer from '../common/Footer';
import data from '../../data/experience.json';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="experience">
        <section>
          <h1>Experience</h1>
          {data.map((el, idx) => <Job key={idx} idx={idx} experience={el} />)}
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
