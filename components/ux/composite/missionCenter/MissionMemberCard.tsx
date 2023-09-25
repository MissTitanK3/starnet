import { useModalStore } from '@/app-store/modals/modalStore';
import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { PiClockCountdownBold } from 'react-icons/pi';
import MissionActions from '../../modals/MissionActions';
import NeuButton from '../../element/buttons/NeuButton';
import { useClickOutside } from '../../hooks/useClickOutside';
import ShadCard from '../../element/cards/ShadCard';
import { SupportMemberType } from '@/app-store/missions/missionTypes';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { AuthData } from '@/app-store/auth/authTypes';
import { RankImageDetailsSizeType } from '../../UiTypes';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';
import Image from 'next/image';
import MissionGroupMemberActions from '../../modals/MissionGroupMemberActions';

type Props = {
  member: SupportMemberType;
  groupId: string;
};

const MissionMemberCard = ({ member, groupId }: Props) => {
  const { actionsOpen, setActionsOpen, editMissionModal } = useModalStore();
  const { getMemberProfile } = useMissionStore();
  const [tracking, setTracking] = useState(false);
  const [memberData, setMemberData] = useState<AuthData | null>(null);
  const [rankImg, setSetRankImg] = useState<RankImageDetailsSizeType | null>(null);
  const [localActions, setLocalActions] = React.useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useClickOutside(dropdown, () => setLocalActions(false));

  useEffect(() => {
    const getMember = async () => {
      const memberData: any = await getMemberProfile(member?.member);
      const rankImg = getVariableRankImageDetails(memberData?.[0]?.network_rank?.grade);
      setMemberData(memberData?.[0]);
      if (rankImg) setSetRankImg(rankImg);
    };
    if (member) {
      getMember();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member]);

  return (
    <ShadCard
      variant="noHover"
      styleOverride={{
        width: '350px',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        {rankImg ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              src={rankImg?.xSmall?.src}
              alt={`Image of ${memberData?.network_rank?.abbreviation}`}
              width={0}
              height={0}
              style={{
                width: rankImg?.xSmall?.width,
                height: rankImg?.xSmall?.height,
                marginRight: '0.5rem',
              }}
            />
            <h2>{memberData?.in_game_name}</h2>
          </div>
        ) : (
          <h2>
            {memberData?.network_rank?.abbreviation} {memberData?.in_game_name}
          </h2>
        )}
        <div
          ref={dropdown}
          style={{
            position: 'relative',
          }}>
          {localActions && (
            <MissionGroupMemberActions
              close={() => setLocalActions(false)}
              member={memberData}
              groupId={groupId}
              currentRole={member.memberRole || ''}
            />
          )}
          <NeuButton
            onClick={() => setLocalActions(!localActions)}
            styled={{
              width: '30px',
              margin: '0',
            }}>
            <FaEllipsisVertical />
          </NeuButton>
        </div>
      </div>
      <hr
        style={{
          margin: '20px 0',
          width: '90%',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          margin: '10px 0',
        }}>
        <span>Assigned Position</span>
        <span>{member.memberRole}</span>
      </div>
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: '20px auto',
        }}>
        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h6>Total Earnings</h6>
          <span>$54,000</span>
        </div>
        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h6>Unpaid Earnings</h6>
          <span>${member.accumulatedMins}</span>
        </div>
      </div>
      <div>
        <NeuButton
          onClick={() => {
            console.log('clicked');
          }}
          styled={{
            maxWidth: '120px',
            height: '100%',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
          <p
            style={{
              margin: '2px',
            }}>
            Mark As Paid
          </p>
        </NeuButton>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}>
          <h6>Scheduled Start</h6>
          <span>12:00:00</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'column',
            textAlign: 'right',
          }}>
          <h6>Scheduled End</h6>
          <span>18:00:00</span>
        </div>
      </div>
      <hr
        style={{
          margin: '20px 0',
          width: '90%',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <h3>Time Tracking</h3>
        <NeuButton
          onClick={() => {
            console.log('clicked');
          }}
          variant="success"
          styled={{
            maxWidth: '30px',
            height: '100%',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
          }}>
          <FaPlus />
        </NeuButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '10px 0',
          }}>
          <span>
            <PiClockCountdownBold /> 12:00:00
          </span>
          {tracking ? (
            <NeuButton
              onClick={() => {
                console.log('clicked');
              }}
              variant="success"
              styled={{
                maxWidth: '170px',
                height: '100%',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
              }}>
              <p
                style={{
                  margin: '2px',
                }}>
                Tracking
              </p>
            </NeuButton>
          ) : (
            <span>For 20 Min</span>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '10px 0',
          }}>
          <span>
            <PiClockCountdownBold /> 12:00:00
          </span>
          {!tracking ? (
            <NeuButton
              onClick={() => {
                console.log('clicked');
              }}
              variant="success"
              styled={{
                maxWidth: '100px',
                height: '100%',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
              }}>
              <p
                style={{
                  margin: '2px',
                }}>
                Tracking
              </p>
            </NeuButton>
          ) : (
            <span>For 20 Min</span>
          )}
        </div>
      </div>
    </ShadCard>
  );
};

export default MissionMemberCard;
