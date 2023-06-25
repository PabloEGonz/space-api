import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ReservBtn = ({ id, reserved }) => {
  const dispatch = useDispatch();

  if (reserved) {
    return (
      <button
        key={id}
        onClick={() => {
          dispatch();
        }}
        type="button"
        className="btn btn-outline-secondary"
      >
        Cancel Reservation
      </button>
    );
  }
  return (
    <button
      key={id}
      onClick={() => {
        dispatch();
      }}
      type="button"
      className="btn btn-primary"
    >
      Reserve Rocket
    </button>
  );
};

ReservBtn.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default ReservBtn;
