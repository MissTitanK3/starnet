'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import React from 'react';
import NeuCard from '../../element/cards/NeuCard';
import AddMissionModal from '../../modals/AddMissionModal';
import ShadCard from '../../element/cards/ShadCard';
import { useRouter } from 'next/navigation';

type Props = {};

const MissionList = (props: Props) => {
  const router = useRouter();
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
            <ShadCard
              OnClicked={() => router.push(`/mission-center/${mission.id}`)}
              variant="underColorWithPointer"
              styleOverride={{
                width: '800px',
                margin: '20px',
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
                  <h6>MISSION NAME</h6>
                  <h2>{mission?.mission_name}</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h6>START DATE</h6>
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
                <h6>SCOPE</h6>
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    padding: '0 20px',
                  }}>
                  <h6>OPTIMAL PARTICIPANTS: </h6>
                  <h5 style={{ marginLeft: 10 }}>{mission?.optimal_participation}</h5>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    padding: '0 20px',
                  }}>
                  <h6>CURRENT PARTICIPANTS: </h6>
                  <h5 style={{ marginLeft: 10 }}>{getMissionMembers(mission.id.toString()) || 0}</h5>
                </div>
              </div>
            </ShadCard>
          </div>
        );
      })}
      {newMissionModal && <AddMissionModal />}
    </div>
  );
};

export default MissionList;
