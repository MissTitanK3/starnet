'use client';

import React from 'react';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import Image from 'next/image';
import ShadCard from '../../element/cards/ShadCard';

type Props = {};

const MissionInfo = (props: Props) => {
  const { mission, attachedEvent, activeTab, missionCreatorDetails, missionCreator } = useMissionStore();
  const { shortFormattedDate } = getLoggedAndExpire({ date: mission?.start_date || '' });
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
            <h6>Optimal Member</h6>
            <h6>Participation</h6>
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
          </div>
          <div
            style={{
              textAlign: 'right',
            }}>
            <h6>Mission</h6>
            <h6>Security Code</h6>
            <h3>{mission?.op_sec_code}</h3>
          </div>
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div>
            <h6>Event Name</h6>
            <hr />
            {attachedEvent?.name ? (
              <h3>{attachedEvent?.name}</h3>
            ) : (
              <>
                <h6>Independent</h6>
                <h6>Mission</h6>
              </>
            )}
          </div>
          <div
            style={{
              textAlign: 'center',
            }}>
            <h6>Mission Type</h6>
            <h3>{mission?.mission_type}</h3>
          </div>
          <div
            style={{
              textAlign: 'right',
            }}>
            <h6>Event ID</h6>
            <hr />
            {attachedEvent?.id ? (
              <h3>{attachedEvent?.id}</h3>
            ) : (
              <>
                <h6>Independent</h6>
                <h6>Mission</h6>
              </>
            )}
          </div>
        </div>
      </ShadCard>
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
              {missionCreatorDetails && (
                <Image
                  src={missionCreatorDetails?.xSmall?.src}
                  alt={`Image of ${missionCreator?.network_rank?.abbreviation}`}
                  width={0}
                  height={0}
                  style={{
                    width: missionCreatorDetails?.xSmall?.width,
                    height: missionCreatorDetails?.xSmall?.height,
                    marginRight: '0.5rem',
                  }}
                />
              )}
              <h4>{missionCreator?.in_game_name}</h4>
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
            }}>
            <h6>Start Details</h6>
            <h5>{shortFormattedDate}</h5>
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
