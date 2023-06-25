import '../styles/rocket.css';
import React from 'react';
import PropTypes from 'prop-types';
import ReservBtn from './ReservBtn';

const Rocket = ({
  name, description, image, id, reserved,
}) => (
  <li className="card mb-3">
    <div className="row g-0">
      <div className="col-md-2 img-container">
        <img src={image} alt="rocket" className="img-fluid" />
      </div>
      <div className="card-body col-md-8">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <span className={reserved ? 'reserved' : ''}>
            {reserved ? 'Reserved' : ''}
          </span>
          {description}
        </p>
        <ReservBtn id={id} reserved={reserved} />
      </div>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
