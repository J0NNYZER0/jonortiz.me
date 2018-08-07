import React from 'react';
import PageTitle from '../common/PageTitle';
import LoginForm from '../common/forms/Login';
import Footer from '../common/Footer';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="page__contents--login">
        <section>
          <div>
            <PageTitle title="Login" />
            <LoginForm />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
