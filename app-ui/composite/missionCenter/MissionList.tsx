'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import AddMissionModal from '@/app-ui/modals/AddMissionModal';
import React from 'react';

type Props = {};

const MissionList = (props: Props) => {
  const { allMissions } = useMissionStore();
  const { newMissionModal } = useModalStore();
  return (
    <div>
      {allMissions?.map((mission) => {
        const { formattedDate } = getLoggedAndExpire({ date: mission?.start_date || '' });
        return (
          <div key={mission.id}>
            <NeuCard
              route={`/mission-center/${mission.id}`}
              cardStyleOverride={{
                width: '800px',
                margin: '20px',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <div
                className="left"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '100%',
                }}>
                <div>
                  <h5>MISSION NAME</h5>
                  <h2>{mission?.mission_name}</h2>
                </div>
                <div>
                  <h5>SCOPE</h5>
                  <h4>{mission?.mission_scope}</h4>
                </div>
                <div>
                  <h6>OPTIMAL PARTICIPANTS</h6>
                  <h2>{mission?.optimal_participation}</h2>
                </div>
              </div>
              <div
                className="right"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  textAlign: 'right',
                }}>
                <div>
                  <h5>START DATE</h5>
                  <h6>{formattedDate}</h6>
                </div>
                <div>
                  <h6>CURRENT PARTICIPANTS</h6>
                  <h2>{mission?.members?.length || 0}</h2>
                </div>
              </div>
            </NeuCard>
          </div>
        );
      })}
      {newMissionModal && <AddMissionModal />}
    </div>
  );
};

export default MissionList;
