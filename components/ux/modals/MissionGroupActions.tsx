import React from 'react';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';

type Props = {
  cardOverride?: React.CSSProperties;
  groupName?: string;
  groupId: string;
  close: () => void;
};

const MissionGroupActions = ({ cardOverride, groupName, close, groupId }: Props) => {
  const { removeGroup } = useMissionStore();
  const { setAddMemberModal } = useModalStore();
  const handleAddMember = () => {
    setAddMemberModal({ isVisibile: true, shipNumber: groupId });
    close();
  };
  const handleRemoveGroup = async () => {
    await removeGroup(groupId);
    close();
  };
  return (
    <ShadCard
      variant="solidNoHover"
      styleOverride={{
        ...cardOverride,
        minHeight: groupName === 'Command' ? '30px' : '30px',
        width: '200px',
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
      }}>
      <ShadButton
        styled={{
          width: '100%',
          margin: '0 auto',
        }}
        onClick={() => handleAddMember()}>
        Add Member
      </ShadButton>
      {groupName !== 'Command' && (
        <ShadButton
          styled={{
            width: '100%',
            margin: '15px auto 0 auto',
          }}
          variant="destructive"
          onClick={() => handleRemoveGroup()}>
          Remove {groupName} Group
        </ShadButton>
      )}
    </ShadCard>
  );
};

export default MissionGroupActions;
