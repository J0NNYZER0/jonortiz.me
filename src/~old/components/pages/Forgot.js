import React from 'react';
import PageTitle from '../common/PageTitle';
import ForgotForm from '../common/forms/Forgot';
import Footer from '../common/Footer';

class ForgotPage extends React.Component {
  render() {
    return (
      <div className="page__contents--login">
        <section>
          <div><PageTitle title="Forgot Password" /><ForgotForm /></div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ForgotPage;
