import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer';

class Resume extends React.Component {

  render() {
    return (
      <main className="resume">
        <section>
          <h1>Resume</h1>
          <div>
            <a className="download-resume" target="_blank" href="https://s3.us-east-2.amazonaws.com/jonortiz.me/resume/jon-ortiz-2018.pdf" />
          </div>
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
