import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import ReservBtn from './ReservBtn';
import MissionEnrollmentButton from './missionEnrollButton';

const CustomAccordion = ({
  id, name, desc, btn, state,
}) => (

  <>
    <Accordion.Item eventKey={id} key={id}>
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body>
        {desc}
        <div>
          {btn === 'rocket' ? <ReservBtn id={id} reserved={state} /> : <MissionEnrollmentButton missionId={id} missionStatus={state} />}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  </>
);

CustomAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
};

export default CustomAccordion;
