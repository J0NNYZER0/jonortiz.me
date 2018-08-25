import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageTitle from '../common/PageTitle';
import ContactForm from '../common/forms/Contact';
import Footer from '../common/Footer';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { contact } = this.props;

    return (
      <main>
        <section>
          <PageTitle title="Contact" />
          <ContactForm contact={contact} />
        </section>
        <Footer />
      </main>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

export default connect(mapStateToProps)(Contact);
