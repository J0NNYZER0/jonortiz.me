import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      success: false,
      toggle_order_modal: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    let toggle = (this.state.toggle_order_modal === true) ? false : true;
    this.setState({toggle_order_modal: toggle});
  }

  render() {
    let modalClass = (this.state.toggle_order_modal) ? 'modal' : 'modal__hide',
      layout = null,
      preloader = <div className="modal__preloader"><div className="modal__spinner"><span className="preloader__image" /></div></div>,
      loaded = this.state.success ? preloader : layout;

    return (
      <div className={modalClass}>
        <div className="modal__content">
          <ul className="modal__content--header">
            <li className="modal__content--title">
              <h1 className="modal__title">Order Now!</h1>
            </li>
            <li className="modal__content--close_icon">
              <span id="toggle_order_modal" onClick={this.toggle}
                className="modal__content--icon__close"
                style={{ backgroundImage: 'url(../../assets/close-icon-dark.svg)' }} />
            </li>
          </ul>
          <div className="modal__content--body">
            {loaded}
          </div>
        </div>
        <div onClick={this.toggle} className="modal__background" />
      </div>
    );
  }
}

export default Modal;
