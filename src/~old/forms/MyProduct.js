import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as entityActions from '../../../actions/entityActions.js';
import * as sessionActions from '../../../actions/sessionActions.js';
import FormButton from './elements/Button';
import HiddenInput from './elements/HiddenInput';
import TextInput from './elements/TextInput';
import TextAreaInput from './elements/TextAreaInput';
import SelectBox from './elements/SelectBox';
import ToggleSwitch from './elements/ToggleSwitch';
import * as helpers from './helpers';

class MyProduct extends Component {

  defaultState() {
    return {
      values: {
        product_id: '',
        code: '',
        name: '',
        details: '',
        category: '',
        price: '',
        size: '',
        color: '',
        gender: '',
        release: 0,
        is_active: 0
      },
      validation: {
        //code: [[helpers.isRequired, 'This is required']],
        name: [[helpers.isRequired, 'This is required']],
        /*details: [[helpers.isRequired, 'This is required']],
        category: [[helpers.isRequired, 'This is required']],
        price: [[helpers.isRequired, 'This is required']],
        size: [[helpers.isRequired, 'This is required']],
        color: [[helpers.isRequired, 'This is required']],
        gender: [[helpers.isRequired, 'This is required']],
        release: [[helpers.isRequired, 'This is required']]*/
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
      'product',
      {
        id: this.state.values.product_id,
        code: this.state.values.code,
        name: this.state.values.name,
        details: this.state.values.details,
        category: this.state.values.category,
        price: this.state.values.price,
        size: this.state.values.size,
        color: this.state.values.color,
        gender: this.state.values.gender,
        release: this.state.values.release,
        is_active: this.state.values.is_active
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
        message = 'Your product is added';
      }

      this.props.actions.entity.message(message);

    });
  }

  render() {
    const { show } = this.props,
    selectOptions = {
      category: [
        {name: 'T-Shirts', value: 1}
      ],
      size: [
        {name: 'S', value: 1}
      ],
      color: [
        {name: 'Grey', value: 1}
      ],
      gender: [
        {name: 'M', value: 1}
      ]
    };

    let buttons = {
      addProduct: {
        onClick: this.handleSubmit,
        title:'Add Product'
      },
      updateProduct: {
        onClick: this.handleSubmit,
        title:'Update'
      }
    }

    return (
      <form className={(show !== false) ? 'form__myproduct' : 'form__myproduct hide'}>
        <HiddenInput id="code" name="code" value={this.state.values.code} />
        <TextInput
          label="Name"
          value={this.state.values.name}
          type="text"
          ref="name"
          name="name"
          placeholder="Product Name"
          onChange={this.handleOnChange}
          validate={this.state.validation.name}
          hasErrors={this.handleHasErrors} />
        <TextAreaInput
          label="Details"
          value={this.state.values.details}
          ref="details"
          name="details"
          placeholder="Product Details"
          onChange={this.handleOnChange}
          validate={this.state.validation.details}
          hasErrors={this.handleHasErrors} />
          <ul className="form__input--two">
            <li>
              <SelectBox
                label="Category"
                options={selectOptions.category}
                value={this.state.values.category}
                ref="category"
                name="category"
                placeholder="Product Category"
                callback={this.handleOnChange}
                validate={this.state.validation.category}
                hasErrors={this.handleHasErrors} />
            </li>
            <li>
              <TextInput
                label="Price"
                value={this.state.values.price}
                type="text"
                ref="price"
                name="price"
                placeholder="Price"
                onChange={this.handleOnChange}
                validate={this.state.validation.price}
                hasErrors={this.handleHasErrors} />
              </li>
          </ul>
          <ul className="form__input--two">
            <li>
              <SelectBox
                label="Size"
                options={selectOptions.size}
                value={this.state.values.size}
                ref="size"
                name="size"
                placeholder="Size"
                callback={this.handleOnChange}
                validate={this.state.validation.size}
                hasErrors={this.handleHasErrors} />
            </li>
            <li>
              <SelectBox
                label="Color"
                options={selectOptions.color}
                value={this.state.values.color}
                ref="color"
                name="color"
                placeholder="Color"
                callback={this.handleOnChange}
                validate={this.state.validation.color}
                hasErrors={this.handleHasErrors} />
            </li>
          </ul>
          <ul className="form__input--two">
            <li>
              <SelectBox
                label="Gender"
                options={selectOptions.gender}
                value={this.state.values.gender}
                ref="gender"
                name="gender"
                placeholder="Gender"
                callback={this.handleOnChange}
                validate={this.state.validation.gender}
                hasErrors={this.handleHasErrors} />
            </li>
            <li>
              <ToggleSwitch
                name="is_active"
                label="Is Active"
                value={this.state.values.is_active}
                callback={this.handleOnChange} />
            </li>
          </ul>
        <ul className="form__section">
          {/*<li className="form__section--left" />*/}
          <li className="form__section--right">
            <FormButton toggle={this.toggleSubmitButton} options={buttons.updateProduct} />
          </li>
        </ul>
      </form>
    );
  }
}

MyProduct.propTypes = {
  show: PropTypes.bool.isRequired,
  shop: PropTypes.object.isRequired,
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

export default connect(null, mapDispatchToProps)(MyProduct);
