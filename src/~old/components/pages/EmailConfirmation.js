import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as entityActions from '../../actions/entityActions.js';
import * as sessionActions from '../../actions/sessionActions.js';

class EmailConfirmation extends React.Component {

  constructor(props) {

      super(props);

      this.state = {

      }
  }

  componentDidMount() {
    this.props.actions.accountConfirm(
      'account',
      {
        token: this.props.params.token
      }
    )
    .then(value => {

      let session = {...value};
      delete session.password;
      console.log('session', session)
      this.props.sessionActions.loadSession(session);
      this.props.actions.succeeded(true);
      this.props.actions.message('Your account has been verified');
    })
    .then(() => {
      browserHistory.push('/my-account')
    })
    .catch(err => {
      this.props.actions.succeeded(true);
      this.props.actions.message(err);
    })
  }

  render() {

      return (
        <section />
      );
    }
}

EmailConfirmation.propTypes = {

};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(entityActions, dispatch),
    sessionActions: bindActionCreators(sessionActions, dispatch)
  };
}

export default (connect(null, mapDispatchToProps)(EmailConfirmation));
