import React from 'react';
import Rocket from './Rocket';

const Rockets = () => {
  const error = undefined;
  const isLoading = false;
  const rockets = [];
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
