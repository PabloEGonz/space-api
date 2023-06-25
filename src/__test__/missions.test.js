import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import MissionGrid from '../components/missions';

describe('MissionGrid', () => {
  const missions = [
    {
      mission_id: '1',
      mission_name: 'Mission 1',
      description: 'Description 1',
      status: true,
    },
    {
      mission_id: '2',
      mission_name: 'Mission 2',
      description: 'Description 2',
      status: false,
    },
  ];

  const mockStore = configureStore([]);

  it('renders mission data correctly', () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <MissionGrid missions={missions} />
      </Provider>,
    );

    // Check if mission names are rendered
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();

    // Check if mission descriptions are rendered
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();

    // Check if mission statuses are rendered
    expect(getByText('Active Member')).toBeInTheDocument();
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
  });
});
