import React from 'react';
import Footer from '../common/Footer';
import data from '../../data/education.json';

class Education extends React.Component {
  render() {
    return (
      <main className="education">
        <section>
          <h1>Education</h1>
          <p dangerouslySetInnerHTML={{__html: data.bachelors}} />
        </section>
        <Footer />
      </main>
    );
  }
}

export default Education;
