import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

const CustomAccordion = ({ id, name, desc }) => (
  <>
    <Accordion.Item eventKey={id} key={id}>
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body>
        {desc}
      </Accordion.Body>
    </Accordion.Item>
  </>
);

CustomAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CustomAccordion;
