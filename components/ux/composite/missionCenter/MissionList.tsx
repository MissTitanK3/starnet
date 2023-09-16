'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import React from 'react';
import NeuCard from '../../element/cards/NeuCard';
import AddMissionModal from '../../modals/AddMissionModal';

type Props = {};

const MissionList = (props: Props) => {
  const { allMissions } = useMissionStore();
  const { newMissionModal } = useModalStore();
  const getMissionMembers = (missionId: string) => {
    let count: number | undefined = 0;
    allMissions?.forEach((mission) => {
      if (mission.id.toString() === missionId) {
        if (mission.groups?.length === 0) return;
        count = mission.groups?.reduce((acc, group) => {
          return acc + group.support_members?.length || 0;
        }, 0);
      }
    });
    return count;
  };
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
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <div
                className="left"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: '100%',
                }}>
                <div>
                  <h5>MISSION NAME</h5>
                  <h2>{mission?.mission_name}</h2>
                </div>
                <div>
                  <h5>START DATE</h5>
                  <h6>{formattedDate}</h6>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  textAlign: 'center',
                  width: '100%',
                  margin: '20px 0',
                }}>
                <h5>SCOPE</h5>
                <h4>{mission?.mission_scope}</h4>
              </div>
              <div
                className="right"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: '100%',
                }}>
                <div>
                  <h6>OPTIMAL PARTICIPANTS</h6>
                  <h2>{mission?.optimal_participation}</h2>
                </div>

                <div>
                  <h6>CURRENT PARTICIPANTS</h6>
                  <h2>{getMissionMembers(mission.id.toString()) || 0}</h2>
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
