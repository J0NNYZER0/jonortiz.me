import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const Preorder = ({img, to,title}) => {
  return (
    <div className="cta" style={{ backgroundImage: 'url('+ img +')' }}>
      <Link className="cta__link" to={to}>{title}</Link>
    </div>
  );
};

Preorder.propTypes = {
  img: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Preorder;
