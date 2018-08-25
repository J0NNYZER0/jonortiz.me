import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer';
import data from '../../data/resume.json';

class Resume extends React.Component {

  render() {
    return (
      <main className="resume">
        <section>
          <h1>Resume</h1>
          {data.map(resume => {
            return <div>
              <a className="download-resume" target="_blank" href={resume.linkToPdf} />
            </div>
          })}
        </section>
        <Footer />
      </main>
    );
  }
}

Resume.propTypes = {
  title: PropTypes.string
};

export default Resume;
