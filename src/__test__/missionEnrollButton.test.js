import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch } from 'react-redux';
import MissionEnrollmentButton from '../components/missionEnrollButton';
import { toggleMissionStatus } from '../redux/missions/missionsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionEnrollmentButton', () => {
  const missionId = '1';
  const missionStatus = true;
  const className = 'enrollment-button';

  it('renders the correct button based on missionStatus prop', () => {
    useDispatch.mockReturnValue(jest.fn());

    const { getByRole, rerender } = render(
      <MissionEnrollmentButton
        missionId={missionId}
        missionStatus={missionStatus}
        className={className}
      />,
    );

    const joinButton = getByRole('button', { name: /leave mission/i });
    expect(joinButton).toBeInTheDocument();

    rerender(
      <MissionEnrollmentButton
        missionId={missionId}
        missionStatus={!missionStatus}
        className={className}
      />,
    );

    const leaveButton = getByRole('button', { name: /join mission/i });
    expect(leaveButton).toBeInTheDocument();
  });

  it('dispatches toggleMissionStatus action on button click', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByText } = render(
      <MissionEnrollmentButton
        missionId={missionId}
        missionStatus={missionStatus}
        className={className}
      />,
    );

    const button = getByText('Leave Mission');

    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(toggleMissionStatus(missionId));
  });
});
