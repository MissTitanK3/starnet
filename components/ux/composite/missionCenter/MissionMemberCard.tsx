import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { PiClockCountdownBold } from 'react-icons/pi';
import { useClickOutside } from '../../hooks/useClickOutside';
import ShadCard from '../../element/cards/ShadCard';
import { SupportMemberType } from '@/app-store/missions/missionTypes';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { AuthData } from '@/app-store/auth/authTypes';
import { RankImageDetailsSizeType } from '../../UiTypes';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';
import Image from 'next/image';
import MissionGroupMemberActions from '../../modals/MissionGroupMemberActions';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import ShadButton from '../../element/buttons/ShadButton';
import { TbClockX } from 'react-icons/tb';

type Props = {
  member: SupportMemberType;
  groupId: string;
};

const MissionMemberCard = ({ member, groupId }: Props) => {
  const { getMemberProfile, togglePaid, addTimeCard, removeTimeCard, clockoutTimeCard } = useMissionStore();
  const [memberData, setMemberData] = useState<AuthData | null>(null);
  const [rankImg, setSetRankImg] = useState<RankImageDetailsSizeType | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
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
    const convertTime = () => {
      const { timeOnly: start } = getLoggedAndExpire({
        date: member?.timeRangeStart?.toString() || '',
      });
      const { timeOnly: end } = getLoggedAndExpire({
        date: member?.timeRangeEnd?.toString() || '',
      });
      setStartTime(start);
      setEndTime(end);
    };
    if (member) {
      getMember();
      convertTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member]);

  const handleMarkAsPaid = () => {
    togglePaid(groupId, member?.member);
  };

  const handleAddTime = () => {
    addTimeCard(groupId, member?.member);
  };
  const handleClockout = (cardId: string | number) => {
    clockoutTimeCard(groupId, member?.member, cardId);
  };
  const handleRemoveTime = (cardId: string | number) => {
    removeTimeCard(groupId, member?.member, cardId);
  };

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
          <ShadButton
            onClick={() => setLocalActions(!localActions)}
            styled={{
              width: '30px',
              margin: '0',
            }}>
            <FaEllipsisVertical />
          </ShadButton>
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
          <span>${member.accumulatedMins}</span>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          margin: '20px auto',
        }}>
        <ShadButton
          onClick={() => handleMarkAsPaid()}
          styled={{
            width: '180px',
          }}>
          {member.hasBeenPaid ? 'Has Been Paid' : 'Needs To Be Paid'}
        </ShadButton>
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
          <span>{startTime}</span>
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
          <span>{endTime}</span>
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
        <ShadButton
          onClick={() => handleAddTime()}
          styled={{
            width: '30px',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
          }}>
          <FaPlus />
        </ShadButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        {member?.timeclock?.map((card, key) => {
          const { timeOnly: timeIn, timeDiffInSeconds: timeInCount } = getLoggedAndExpire({
            date: new Date(card.clock_in?.toString() || ''),
          });
          const { timeOnly: timeOut, timeDiffInSeconds: timeOutCount } = getLoggedAndExpire({
            date: new Date(card.clock_out?.toString() || ''),
          });
          const activeMinuteCount = (timeInCount - timeOutCount) / 60;
          return (
            <div
              key={`${card.id}-${key}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                margin: '10px 0',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <span>
                  <PiClockCountdownBold /> {timeIn}
                  {timeOut !== 'Invalid Date' && ` - ${timeOut}`}
                </span>
                {timeOut !== 'Invalid Date' && <span>For {activeMinuteCount.toFixed(2)} Min</span>}
              </div>
              {timeOut === 'Invalid Date' ? (
                <ShadButton
                  onClick={() => handleClockout(card.id || '')}
                  styled={{
                    width: '100px',
                    padding: '0.45rem',
                    margin: '0',
                  }}>
                  Tracking
                </ShadButton>
              ) : (
                <ShadButton
                  onClick={() => handleRemoveTime(card.id || '')}
                  styled={{
                    width: '30px',
                    padding: '0.45rem',
                    margin: '0',
                  }}>
                  <TbClockX />
                </ShadButton>
              )}
            </div>
          );
        })}
      </div>
    </ShadCard>
  );
};

export default MissionMemberCard;
