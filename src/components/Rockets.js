import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/Rockets/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);
  if (isLoading) {
    return (
      <div>
        <h1 className="message">Loading</h1>
      </div>
    );
  } if (error) {
    return (
      <div>
        <h1 className="message">
          Sorry, something went wrong. Error:
          {error}
        </h1>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            id={rocket.id}
            description={rocket.description}
            image={rocket.image}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};
export default Rockets;
