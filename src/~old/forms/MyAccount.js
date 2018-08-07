import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as entityActions from '../../../actions/entityActions.js';
import * as sessionActions from '../../../actions/sessionActions.js';
import HiddenInput from './elements/HiddenInput';
import TextInput from './elements/TextInput';
import FormButton from './elements/Button';
import * as helpers from './helpers';

class MyAccountForm extends Component {

  defaultState(user) {
    return {
      values: {
        user_id: user.id,
        username: user.username,
        email: user.email
      },
      validation: {
        username: [[helpers.isRequired, 'This is required']],
        email: [[helpers.isRequired, 'This is required'],[helpers.isEmail, 'This is not an email']]
      },
      errors: []
    }
  }

  constructor(props) {

    super(props);
    this.state = this.defaultState(props.user);

    this.handleOnChange = helpers.handleOnChange.bind(this);
    this.handleHasErrors = helpers.handleHasErrors.bind(this);
    this.toggleSubmitButton = helpers.toggleSubmitButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = helpers.handleClearForm.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    this.props.actions.entity.entityUpdate(
      'account',
      {
        id: this.state.values.user_id,
        username: this.state.values.username,
        email: this.state.values.email
      }
    )
    .then(value => {

      let message = null;

      if (value.data.length === 0) {

        this.props.actions.entity.succeeded(true);
        message = 'Nothing has been updated';
      } else {

        let session = {...value.data[0]};

        this.props.actions.session.loadSession(session);
        this.props.actions.entity.succeeded(true);
        message = 'Your info is updated';
      }

      this.props.actions.entity.message(message);

    });
  }

  render() {
    let button = {
      onClick: this.handleSubmit,
      title:'Update'
    }

    return (
      <form className="form__login">
        <HiddenInput id="user_id" name="user_id" value={this.state.values.user_id} />
        <TextInput
          label="Username"
          value={this.state.values.username}
          type="text"
          ref="username"
          name="username"
          placeholder="Username"
          onChange={this.handleOnChange}
          validate={this.state.validation.username}
          hasErrors={this.handleHasErrors} />
        <TextInput
          label="Email"
          value={this.state.values.email}
          type="text"
          ref="email"
          name="email"
          placeholder="Email"
          onChange={this.handleOnChange}
          validate={this.state.validation.email}
          hasErrors={this.handleHasErrors} />
        <ul className="form__section">
          {/*<li className="form__section--left" />*/}
          <li className="form__section--right">
            <FormButton toggle={this.toggleSubmitButton} options={button} />
          </li>
        </ul>
      </form>
    );
  }
}

MyAccountForm.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: {
      entity: bindActionCreators(entityActions, dispatch),
      session: bindActionCreators(sessionActions, dispatch)
    }
  };
}

export default connect(null, mapDispatchToProps)(MyAccountForm);
