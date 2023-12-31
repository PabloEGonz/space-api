import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import CustomAccordion from '../components/customAccordion';
import '../styles/profile.scss';

function ProfilePage() {
  const activeMissions = useSelector((state) => state.missions.filter((mission) => mission.status));
  const rkts = useSelector((state) => state.rockets.rockets.filter((rocket) => rocket.reserved));

  // rocket selector here for filtered list

  return (
    <section className="profile-wrapper d-flex container">
      <div>
        <h2 className="section-title">My Missions</h2>
        { activeMissions.length > 0 ? (
          <Accordion>
            {activeMissions.map((mission) => (
              <CustomAccordion
                key={mission.mission_id}
                id={mission.mission_id}
                name={mission.mission_name}
                desc={mission.description}
                state={mission.status}
                btn="mission"
              />
            ))}
          </Accordion>
        ) : (<p>You haven&apos;t joined any missions yet.</p>) }
      </div>
      <div>
        <h2>My Rockets</h2>
        { rkts.length > 0 ? (
          <Accordion>
            {rkts.map((rocket) => (
              <CustomAccordion
                key={rocket.id}
                id={rocket.id}
                name={rocket.name}
                desc={rocket.description}
                state={rocket.reserved}
                btn="rocket"
              />
            ))}
          </Accordion>
        ) : (<p>You don&apos;t have any rockets reserved</p>)}
      </div>
    </section>
  );
}

export default ProfilePage;
