import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../../actions/uiActions';
import Button from '../Button';

class Preorder extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(toggle) {
    window.scrollTo(0, 0);
    toggle = (toggle === true) ? false : true;
    this.props.actions.watchToggleModal(toggle);
  }

  render() {
    return (
      <div className="cta__preorder">
        <h1>{'Badass F\'ing Tees'}</h1>
        <Button click={this.toggleModal} title="Pre-order Now!" />
      </div>
    );
  }
}

Preorder.propTypes = {
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Preorder);
