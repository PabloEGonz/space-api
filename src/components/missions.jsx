import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import MissionEnrollmentButton from './missionEnrollButton';
import '../styles/missionsTable.scss';

function MissionGrid({ missions }) {
  return (
    <table>
      <thead>
        <tr className="table-header">
          <th><h3>Mission</h3></th>
          <th className="wide-column"><h3>Description</h3></th>
          <th className="small-column"><h3>Status</h3></th>
          <th className="small-column"><h3>&nbsp;</h3></th>
        </tr>
      </thead>
      <tbody className="table-body">
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="mission-name">{mission.mission_name}</td>
            <td className="mission-description">{mission.description}</td>
            <td>
              <h5 className="flex-center">
                {mission.status ? (
                  <Badge bg="primary">Active Member</Badge>
                ) : (<Badge bg="secondary">NOT A MEMBER</Badge>)}
              </h5>
            </td>
            <td>
              <MissionEnrollmentButton
                className="flex-center"
                missionId={mission.mission_id}
                missionStatus={mission.status}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MissionGrid.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default MissionGrid;
