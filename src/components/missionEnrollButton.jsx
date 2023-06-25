import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { toggleMissionStatus } from '../redux/missions/missionsSlice';

const MissionEnrollmentButton = ({ missionId, missionStatus }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMissionStatus(missionId));
  };

  return missionStatus ? (
    <Button className="flex-center" onClick={handleClick} variant="outline-danger">Leave Mission</Button>
  ) : (
    <Button className="flex-center" onClick={handleClick} variant="outline-secondary">Join Mission</Button>
  );
};

MissionEnrollmentButton.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionStatus: PropTypes.bool.isRequired,
};

export default MissionEnrollmentButton;
