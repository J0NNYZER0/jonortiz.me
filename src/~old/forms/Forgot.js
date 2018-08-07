import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as entityActions from '../../../actions/entityActions.js';
import TextInput from './elements/TextInput';
import FormButton from './elements/Button';
import * as helpers from './helpers';

class ForgotForm extends Component {

  defaultState() {
    return {
      values: {
        email: ''
      },
      validation: {
        email: [[helpers.isEmail, 'Email is required']]
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

    this.props.actions.entityInsert(
      'account/forgot',
      {
        email: this.state.values.email
      }
    )
    .then(() => {
      this.props.actions.succeeded(true);
      this.props.actions.message('Your account is created');
    });

    this.handleClearForm();
  }

  render() {

    let button = {
      onClick: this.handleSubmit,
      title:'Forgot!'
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
        <ul className="form__section">
          <li className="form__section--left">
            <Link to="/login">Login</Link>
          </li>
          <li className="form__section--right">
            <FormButton toggle={this.toggleSubmitButton} options={button} />
          </li>
        </ul>
      </form>
    );
  }
}

ForgotForm.propTypes = {

  actions: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(entityActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ForgotForm);
