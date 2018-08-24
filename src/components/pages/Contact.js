import React from 'react';
import PageTitle from '../common/PageTitle';
import ContactForm from '../common/forms/Contact';
import Footer from '../common/Footer';

class Contact extends React.Component {
  render() {
    return (
      <main>
        <section>
          <PageTitle title="Contact" />
          <ContactForm />
        </section>
        <Footer />
      </main>
    );
  }
}

export default Contact;
