import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../common/PageTitle';
import Footer from '../common/Footer';

class Resume extends React.Component {
  render() {
    return (
      <main>
        <section>
          <PageTitle title="Mission" />
          <h2>A Cog in the Machine</h2>
          <p>
            <b>Mind Ctrl Industries</b> is a reaction to the mystery of pop culture.
            The machine of consumerism loudly roars, causing us to spin
            out of control like a bunch of helpless, crazy cogs.
          </p>
          <h2>The Wolf in Sheep's Clothing</h2>
          <p>
            The masters toil over us, designing endless worlds for us to
            escape within. Most of our lives we wait in line like sheep,
            as they stand at the front, waiting like a wolf.
          </p>
          <h2>The Lesser of Two Evils</h2>
          <p>
            We're here to remind you if understanding any of this really matters.
            We should not accept it but, at the same time, we
            realize every decision made in life requires the choice
            between the lesser of two evils...<br />
            ...so sit back and enjoy the ride.<br /><br />
            Sincerely,<br />
            Mind Ctrl Industries
          </p>
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
