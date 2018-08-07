import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as entityActions from '../../actions/entityActions.js';

class FetchAlert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle_alert: true
    }

    this.clearFetchAlert = this.clearFetchAlert.bind(this);
  }

  clearFetchAlert() {

    this.setState({toggle_alert: false});
    setTimeout(() => {
      this.props.actions.succeeded(null);
      this.props.actions.message('');
    }, 1000);
  }

  componentDidMount() {

    this.loadInterval = setInterval(this.clearFetchAlert, 3000);
  }

  componentWillUnmount() {

    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  trigger() {
    document.getElementById('toggle_order_modal').click()
  }

  toggle() {
    let toggle = this.state.toggle_alert === true ? false : true;
    this.setState({toggle_alert: toggle});
  }

  render() {
    const { message } = this.props;
    let alertClass = (this.state.toggle_alert) ? 'fetch_alert fetch_alert__fadein' : 'fetch_alert fetch_alert__fadeout';

    return (
      <ul className={alertClass}>
        <li className="alert__item">
          <span>
            {message}
          </span>
        </li>
        <li className="alert__item">
          <span onClick={this.toggle.bind(this)} className="icon__close" />
        </li>
      </ul>
    );
  }
}

FetchAlert.propTypes = {

  message: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(entityActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(FetchAlert);
