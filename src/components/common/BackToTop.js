import React from 'react';
import PropTypes from 'prop-types';

class BackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  render() {
    const { showBackToTopButton, backToTop } = this.props;

    return (
      <div className={(!showBackToTopButton) ? 'back_to_top_button' : 'back_to_top_button show'} onClick={backToTop}>
        Back To Top
      </div>
    );
  }
}

BackToTop.propTypes = {
  showBackToTopButton: PropTypes.bool,
  backToTop: PropTypes.func
};

export default BackToTop;
