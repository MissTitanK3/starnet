import React, { useState, useEffect } from 'react';
import NeuButton from '../../element/buttons/NeuButton';
import { FaX } from 'react-icons/fa6';
import { SupportMemberType } from '@/app-store/missions/missionTypes';
import { useModalStore } from '@/app-store/modals/modalStore';
import NeuDateField from '../../element/inputs/NeuDateField';
import { useMissionStore } from '@/app-store/missions/missionStore';
import NeuDropdown from '../../element/inputs/NeuDropdown';
import PlainButton from '../../element/buttons/PlainButton';
import { getAllProfilesFromSupaForDropdown } from '@/app-store/auth/authActions';
import { PostgrestError } from '@supabase/supabase-js';
import ShadCard from '../../element/cards/ShadCard';

type Props = {
  groupId: string;
  groupName: string;
};

const AddMemberToMissionModal = ({ groupId, groupName }: Props) => {
  const [newMember, setNewMember] = useState<SupportMemberType>({
    member: undefined,
    timeRangeStart: '',
    timeRangeEnd: '',
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
      member: '',
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
    <div
      style={{
        position: 'absolute',
        width: '100dvw',
        height: '100dvh',
        top: 0,
        left: 0,
        backgroundColor: '#242424d4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        zIndex: 100,
      }}>
      <ShadCard
        variant="noHover"
        styleOverride={{
          backgroundColor: '#242424',
          minHeight: '420px',
          maxHeight: '40dvh',
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          overflowY: 'auto',
          padding: '100px auto',
        }}>
        <div
          style={{
            marginTop: '20px',
          }}
        />
        <h5>Assign Member to {groupName}</h5>
        <NeuDropdown
          cardStyleOverride={{
            marginBottom: '0.05rem',
            zIndex: 10,
          }}
          id="member"
          selectOptions={[{ value: '', label: 'Select Member' }, ...memberList]}
          value={newMember.member || ''}
          changeInput={(e) => {
            handleUpdate(e);
          }}
        />
        <h5>Available From</h5>
        <NeuDateField
          changeInput={(e) => handleUpdate(e)}
          value={newMember?.timeRangeStart?.toString() || ''}
          id="timeRangeStart"
        />
        <h5>Available To</h5>
        <NeuDateField
          changeInput={(e) => handleUpdate(e)}
          value={newMember?.timeRangeEnd?.toString() || ''}
          id="timeRangeEnd"
        />

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            margin: '20px 0',
          }}>
          <PlainButton
            variant="warning"
            onClick={() => handleClose()}
            styled={{
              width: '50%',
            }}>
            Cancel
          </PlainButton>
          <NeuButton
            variant="success"
            onClick={() => handleAddMember()}
            styled={{
              width: '50%',
            }}>
            Add Member
          </NeuButton>
        </div>
      </ShadCard>
      <NeuButton
        onClick={() => handleClose()}
        styled={{
          width: '35px',
          position: 'relative',
          top: '-350px',
          right: '10px',
          borderRadius: '50%',
        }}>
        <FaX />
      </NeuButton>
    </div>
  );
};

export default AddMemberToMissionModal;
