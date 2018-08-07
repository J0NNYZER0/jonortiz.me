import React from 'react';
import PageTitle from '../common/PageTitle';
import RegisterForm from '../common/forms/Register';
import Footer from '../common/Footer';

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="page__contents--login">
        <section>
          <div><PageTitle title="Register" /><RegisterForm /></div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default RegisterPage;
