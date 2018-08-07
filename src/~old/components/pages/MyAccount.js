import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as sessionHelper from '../../utils/sessionHelper';
import * as sessionActions from '../../actions/sessionActions';
import PageTitle from '../common/PageTitle';
import Tabs from '../common/Tabs';
import Footer from '../common/Footer';
import MyAccountForm from '../common/forms/MyAccount';
import MyPassword from '../common/forms/MyPassword';

class MyAccount extends React.Component {

  constructor(props) {

      super(props);

      this.state = {
        session: !sessionHelper.getSession() ? props.session : sessionHelper.getSession(),
        profileInfo: {
          edit: false,
          values: {
            username: '',
            password: ''
          }
        }
      }
  }

  componentWillMount() {
    if (!this.state.session) {
      browserHistory.push('/login');
    }
    if (!this.props.session && !sessionHelper.getSession()) {
      browserHistory.push('/home');
    }
  }

  componentDidMount() {

    if (!this.props.session && !sessionHelper.getSession()) return;

    if (this.props.session)
      sessionHelper.setSession(JSON.stringify(this.props.session));
  }

  render() {
    const { account } = this.props,
      user = this.state.session || account[0];

    console.log('my account', user)

    if (!user.is_valid) {

      return (
        <section>
          <h1>An Email Was Sent</h1>
          <h2 style={{lineHeight:'1.5em'}}>Go to your email, click the link to verify your account then log back in.</h2>
        </section>
      );
    }

    return (
      <div className="page__contents--account">
        <section>
          <PageTitle title="My Account" />
          <Tabs>
            <div id="profile" ref="profile" className="tab__content active">
              <div className="tab__section--header">
                <h2>Info</h2>
              </div>
              <MyAccountForm user={user} />
            </div>
            <div id="password" ref="password" className="tab__content">
              <div className="tab__section--header">
                <h2>Password</h2>
              </div>
              <MyPassword user={user} />
            </div>
            <div id="settings" ref="settings" className="tab__content">
              <div className="tab__section--header">
                <h2>Settings</h2>
              </div>
            </div>
          </Tabs>
        </section>
        <Footer />
      </div>
    );
  }
}

MyAccount.propTypes = {
  title: PropTypes.string,
  account: PropTypes.array,
  session: PropTypes.object
};

function mapStateToProps(state) {
  return {
    account: state.entities.account
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(MyAccount));
