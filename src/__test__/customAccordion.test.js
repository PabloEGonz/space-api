import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomAccordion from '../components/customAccordion';

describe('CustomAccordion', () => {
  const accordionData = {
    id: '1',
    name: 'Accordion 1',
    desc: 'Description for Accordion 1',
  };

  it('renders accordion data correctly', () => {
    const { getByText } = render(
      <CustomAccordion
        id={accordionData.id}
        name={accordionData.name}
        desc={accordionData.desc}
      />,
    );

    // Check if accordion name is rendered
    expect(getByText('Accordion 1')).toBeInTheDocument();

    // Check if accordion description is rendered
    expect(getByText('Description for Accordion 1')).toBeInTheDocument();
  });
});
