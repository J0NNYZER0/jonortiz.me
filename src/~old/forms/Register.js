import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as entityActions from '../../../actions/entityActions.js';
import * as sessionActions from '../../../actions/sessionActions.js';
import TextInput from './elements/TextInput';
import FormButton from './elements/Button';
import * as helpers from './helpers';

class RegisterForm extends Component {

  defaultState() {
    return {
      values: {
        email: 'jon.ortiz@me.com',
        password: 'asdf123!',
        confirm_password: 'asdf123!'
      },
      validation: {
        email: [[helpers.isEmail, 'Email is required']],
        password: [[helpers._confirm.bind(this)],[helpers.validatePassword, 'Password requires at least 6 numbers, letters and special characters']],
        confirm_password: [[helpers.confirm, 'Passwords do not match']]
      },
      errors: []
    }
  }

  constructor(props) {

    super(props);
    this.state = this.defaultState();

    this.handleOnChange = helpers.handleOnChange.bind(this);
    this.handleHasErrors = helpers.handleHasErrors.bind(this);
    this.toggleSubmitButton = helpers.toggleSubmitButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = helpers.handleClearForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.actions.entity.entityInsert(
      'account',
      {
        username: this.state.values.email,
        email: this.state.values.email,
        password: this.state.values.password,
        is_valid: false
      }
    )
    .then(value => {
      let session = {...value.created[0]};
      delete session.password;
      this.props.actions.session.loadSession(session);
      this.props.actions.entity.succeeded(true);
      this.props.actions.entity.message('Your account is created');
    })
    .then(() => {
      this.handleClearForm();
    })
    .then(() => {
      browserHistory.push('/my-account')
    })
    .catch(err => {
      this.props.actions.entity.succeeded(true);
      this.props.actions.entity.message(err.toString())
    })

  }

  render() {

    let button = {
      onClick: this.handleSubmit,
      title:'Register!'
    };

    return (
      <form className="form__login">
        <TextInput
          value={this.state.values.email}
          type="text"
          ref="email"
          name="email"
          placeholder="email"
          onChange={this.handleOnChange}
          validate={this.state.validation.email}
          hasErrors={this.handleHasErrors} />
        <TextInput
          value={this.state.values.password}
          confirm_value={this.state.values.confirm_password}
          type="password"
          ref="password"
          name="password"
          placeholder="password"
          onChange={this.handleOnChange}
          validate={this.state.validation.password}
          hasErrors={this.handleHasErrors} />
        <TextInput
          value={this.state.values.confirm_password}
          confirm_value={this.state.values.password}
          type="password"
          ref="confirm_password"
          name="confirm_password"
          placeholder="confirm_password"
          onChange={this.handleOnChange}
          validate={this.state.validation.confirm_password}
          hasErrors={this.handleHasErrors} />
        <ul className="form__section">
          <li className="form__section--left">
            <Link to="/login">Login</Link><span>{' or '}</span>
            <Link to="/forgot">Forgot</Link>
          </li>
          <li className="form__section--right">
            <FormButton toggle={this.toggleSubmitButton} options={button} />
          </li>
        </ul>
      </form>
    );
  }
}

RegisterForm.propTypes = {

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

export default connect(null, mapDispatchToProps)(RegisterForm);
