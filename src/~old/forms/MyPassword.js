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

class MyPassword extends Component {

  defaultState(user) {
    return {
      values: {
        user_id: user.id,
        password: '',
        new_password: '',
        confirm_password: ''
      },
      validation: {
        password: [[helpers.isMin, {min: 8}, 'This must be at least 8 characters'], [helpers.isRequired, 'This is required']],
        new_password: [[helpers._confirm.bind(this)],[helpers.validatePassword, 'Password requires at least 6 numbers, letters and special characters']],
        confirm_password: [[helpers.confirm, 'Passwords do not match']]
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

    this.props.actions.entity.passwordUpdate(
      'account',
      {
        id: this.state.values.user_id,
        password: this.state.values.password,
        new_password: this.state.values.new_password,
      }
    )
    .then(value => {
      const message = (value.message) ? value.message : 'Whoops';
      this.props.actions.entity.succeeded(true);
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
          label="Password"
          value={this.state.values.password}
          type="text"
          ref="password"
          name="password"
          placeholder="Password"
          onChange={this.handleOnChange}
          validate={this.state.validation.password}
          hasErrors={this.handleHasErrors} />
        <TextInput
          label="New Password"
          value={this.state.values.new_password}
          confirm_value={this.state.values.confirm_password}
          type="text"
          ref="new_password"
          name="new_password"
          placeholder="New Password"
          onChange={this.handleOnChange}
          validate={this.state.validation.new_password}
          hasErrors={this.handleHasErrors} />
        <TextInput
          label="Confirm New Password"
          value={this.state.values.confirm_new_password}
          confirm_value={this.state.values.new_password}
          type="text"
          ref="confirm_password"
          name="confirm_password"
          placeholder="Confirm New Password"
          onChange={this.handleOnChange}
          validate={this.state.validation.confirm_password}
          hasErrors={this.handleHasErrors} />
        <ul className="form__section">
          <li className="form__section--right">
            <FormButton toggle={this.toggleSubmitButton} options={button} />
          </li>
        </ul>
      </form>
    );
  }
}

MyPassword.propTypes = {
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

export default connect(null, mapDispatchToProps)(MyPassword);
