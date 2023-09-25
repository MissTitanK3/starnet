import React, { useState, useEffect } from 'react';
import { SupportMemberType } from '@/app-store/missions/missionTypes';
import { useModalStore } from '@/app-store/modals/modalStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { getAllProfilesFromSupaForDropdown } from '@/app-store/auth/authActions';
import { PostgrestError } from '@supabase/supabase-js';
import ShadCard from '../../element/cards/ShadCard';
import Overlay from '../../element/overlays/Overlay';
import ShadSelect from '../../element/inputs/ShadSelect';
import ShadCalendar from '../../element/inputs/ShadCalendar';
import ShadTimeInput from '../../element/inputs/ShadTimeInput';
import ShadButton from '../../element/buttons/ShadButton';

type Props = {
  groupId: string;
  groupName: string;
};

const AddMemberToMissionModal = ({ groupId, groupName }: Props) => {
  const [newMember, setNewMember] = useState<SupportMemberType>({
    member: '' as any,
    timeRangeStart: undefined,
    timeRangeEnd: undefined,
    selectedDate: '',
    memberRole: 'Crew Member',
    hasBeenPaid: false,
    accumulatedMins: 0,
    isClockedIn: false,
    totalMembersInTimeClock: 0,
    timeclock: [],
  });
  const { setAddMemberModal } = useModalStore();
  const { addMemberToGroup } = useMissionStore();
  const [memberList, setMemberList] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewMember((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log('newMember', newMember);
  console.log('groupId', groupId);

  const handleAddMember = () => {
    addMemberToGroup(groupId, newMember);
    handleClose();
  };

  const handleClose = () => {
    setNewMember({
      member: '' as any,
      timeRangeStart: '',
      timeRangeEnd: '',
      selectedDate: '',
      memberRole: '',
      hasBeenPaid: false,
      accumulatedMins: 0,
      isClockedIn: false,
      totalMembersInTimeClock: 0,
      timeclock: [],
    });
    setAddMemberModal({ isVisibile: false, shipNumber: '' });
  };

  useEffect(() => {
    const getMembers = async () => {
      try {
        const data:
          | { in_game_name: string; id: any; network_rank: any }[]
          | { error: PostgrestError; message: string }
          | null = await getAllProfilesFromSupaForDropdown();
        const formattedData: {
          value: string;
          label: string;
        }[] = [];
        if (Array.isArray(data)) {
          data?.forEach((member: any) => {
            formattedData.push({
              value: member.id,
              label: `${member?.network_rank?.abbreviation} ${member?.in_game_name}`,
            });
          });
        }
        setMemberList(formattedData);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };
    getMembers();
  }, []);

  return (
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        footerChildren={
          <div
            style={{
              display: 'flex',
              width: '600px',
              justifyContent: 'space-evenly',
              margin: '20px 0',
            }}>
            <ShadButton
              variant="plain"
              onClick={() => handleClose()}
              styled={{
                width: '100%',
              }}>
              Cancel
            </ShadButton>
            <ShadButton
              onClick={() => handleAddMember()}
              styled={{
                width: '100%',
              }}>
              Add Member
            </ShadButton>
          </div>
        }
        styleOverride={{
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          overflowY: 'auto',
        }}>
        <h2>Assign Member to {groupName}</h2>
        <br />
        <ShadSelect
          inputId="member"
          selectDropdownTitle="Select Member"
          SelectItems={memberList}
          value={newMember.member || ''}
          onChange={(e) => {
            handleUpdate(e);
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '30px 0',
          }}>
          <h5>From: </h5>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <ShadCalendar
              selectedUpdate={(e) => handleUpdate(e)}
              value={newMember?.timeRangeStart ? new Date(newMember.timeRangeStart as string) : new Date()}
              inputId="timeRangeStart"
            />
            <ShadTimeInput
              type="time"
              inputId="timeRangeStart"
              inputStyleOverride={{
                fontSize: '1rem',
              }}
              startDate={newMember.timeRangeStart as Date}
              changeInput={(e) => handleUpdate(e)}
              value={newMember.timeRangeStart}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '30px 0',
          }}>
          <h5>To: </h5>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <ShadCalendar
              selectedUpdate={(e) => handleUpdate(e)}
              value={newMember?.timeRangeEnd ? new Date(newMember.timeRangeEnd as string) : new Date()}
              inputId="timeRangeEnd"
            />
            <ShadTimeInput
              type="time"
              inputId="timeRangeEnd"
              inputStyleOverride={{
                fontSize: '1rem',
              }}
              startDate={newMember.timeRangeEnd as Date}
              changeInput={(e) => handleUpdate(e)}
              value={newMember.timeRangeEnd}
            />
          </div>
        </div>
      </ShadCard>
    </Overlay>
  );
};

export default AddMemberToMissionModal;
