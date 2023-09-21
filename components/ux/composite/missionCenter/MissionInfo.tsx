'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import NeuCard from '../../element/cards/NeuCard';
import ShadCard from '../../element/cards/ShadCard';

type Props = {};

const MissionInfo = (props: Props) => {
  const { mission, getMemberProfile, getAttachedEvents, activeTab } = useMissionStore();
  const { formattedDate } = getLoggedAndExpire({ date: mission?.start_date || '' });
  const [missionCreator, setMissionCreator] = useState<any>(null);
  const [eventData, setEventData] = useState<any>(null);
  const rankImageDetails = getVariableRankImageDetails(missionCreator?.network_rank?.grade);

  useEffect(() => {
    if (mission?.creator) {
      const awaitCreator = async () => {
        const data: any = await getMemberProfile(mission?.creator);
        setMissionCreator(data?.[0]);
      };
      awaitCreator();
    }
    if (mission?.event_id) {
      const awaitEvent = async () => {
        const data: any = await getAttachedEvents(mission?.event_id);
        setEventData(data?.[0]);
      };
      awaitEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mission?.creator, mission?.event_id]);

  if (activeTab !== 'mission-info') return null;

  return (
    <main
      style={{
        overflowY: 'auto',
      }}>
      <ShadCard variant="noHover">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <div>
            <h6>Optimal Member Participation</h6>
            <h3>{mission?.optimal_participation}</h3>
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <div>
              <h6>Mission Name</h6>
              <h3>{mission?.mission_name}</h3>
            </div>
            <div>
              <h6>Mission Type</h6>
              <h3>{mission?.mission_type?.label}</h3>
            </div>
          </div>
          <div
            style={{
              textAlign: 'right',
            }}>
            <h6>Mission Security Code</h6>
            <h3>{mission?.op_sec_code}</h3>
          </div>
        </div>
      </ShadCard>
      {mission?.event_id && (
        <ShadCard variant="noHover">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <div>
              <h6>Event Name</h6>
              <h3>{eventData?.name}</h3>
            </div>
            <div>
              <h6>Event ID</h6>
              <h3>{eventData?.id}</h3>
            </div>
          </div>
        </ShadCard>
      )}
      <ShadCard variant="noHover">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div>
            <h6>Mission Creator</h6>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              {rankImageDetails && (
                <Image
                  src={rankImageDetails?.xSmall?.src}
                  alt={`Image of ${missionCreator?.network_rank?.abbreviation}`}
                  width={0}
                  height={0}
                  style={{
                    width: rankImageDetails?.xSmall?.width,
                    height: rankImageDetails?.xSmall?.height,
                    marginRight: '0.5rem',
                  }}
                />
              )}
              <h3>{missionCreator?.in_game_name}</h3>
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}>
            <h6>Start Details</h6>
            <h5>{formattedDate}</h5>
          </div>
          <div
            style={{
              textAlign: 'right',
            }}>
            <h6>Is Archived</h6>
            <h3>{mission?.is_archived ? 'Yes' : 'No'}</h3>
          </div>
        </div>
      </ShadCard>
      <ShadCard variant="noHover">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <div>
            <h6>Mission Scope (TL;DR)</h6>
            <span>{mission?.mission_scope}</span>
          </div>
          <br />
          <div>
            <h6>Mission Description (Long Form)</h6>
            <span
              style={{
                whiteSpace: 'pre-wrap',
              }}>
              {mission?.mission_desc}
            </span>
          </div>
        </div>
      </ShadCard>
    </main>
  );
};

export default MissionInfo;
