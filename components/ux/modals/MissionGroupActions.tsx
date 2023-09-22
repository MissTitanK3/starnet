import React from 'react';
import NeuButton from '../element/buttons/NeuButton';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import ShadCard from '../element/cards/ShadCard';

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
      variant="noHover"
      styleOverride={{
        ...cardOverride,
        minHeight: groupName === 'Command' ? '60px' : '120px',
      }}>
      <NeuButton onClick={() => handleAddMember()}>Add Member</NeuButton>
      {groupName !== 'Command' && (
        <NeuButton variant="error" onClick={() => handleRemoveGroup()}>
          Remove {groupName} Group
        </NeuButton>
      )}
    </ShadCard>
  );
};

export default MissionGroupActions;
