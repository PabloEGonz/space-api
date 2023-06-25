import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { toggleMissionStatus } from '../redux/missions/missionsSlice';

const MissionEnrollmentButton = ({ className, missionId, missionStatus }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMissionStatus(missionId));
  };

  return missionStatus ? (
    <Button className={className} onClick={handleClick} variant="outline-danger">Leave Mission</Button>
  ) : (
    <Button className={className} onClick={handleClick} variant="outline-secondary">Join Mission</Button>
  );
};

MissionEnrollmentButton.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionStatus: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default MissionEnrollmentButton;
