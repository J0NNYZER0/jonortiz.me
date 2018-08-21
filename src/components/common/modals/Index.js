import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let modalClass = (this.props.show) ? 'modal' : 'modal hide'/*,
      layout = null,
      preloader = <div className="modal__preloader"><div className="modal__spinner"><span className="preloader__image" /></div></div>;*/

    return (
      <div className={modalClass}>
        <div className="modal content">
          <div className="header">
            <div className="title">
              <h1>{this.props.title}</h1>
            </div>
            <div className="icon">
              <span id="toggle" onClick={this.props.toggle} className="close" />
            </div>
          </div>
          <div className="body">
            {this.props.content}
          </div>
        </div>
        <div onClick={this.props.toggle} className="background" />
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Modal;
