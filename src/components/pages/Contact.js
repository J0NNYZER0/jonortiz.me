import React from 'react';
import PageTitle from '../common/PageTitle';
import ContactForm from '../common/forms/Contact';
import Footer from '../common/Footer';

class ContactPage extends React.Component {
  render() {
    return (
      <main>
        <section>
          <PageTitle title="Contact" />
          <h2>Send us a message</h2>
          <ContactForm />
        </section>
        <Footer />
      </main>
    );
  }
}

export default ContactPage;
