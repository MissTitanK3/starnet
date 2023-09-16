import React from 'react';
import NeuCard from '../element/cards/NeuCard';
import NeuButton from '../element/buttons/NeuButton';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';

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
    <NeuCard
      minHeightOverride={groupName === 'Command' ? '60px' : '120px'}
      activeHover={false}
      cardStyleOverride={cardOverride}>
      <NeuButton onClick={() => handleAddMember()}>Add Member</NeuButton>
      {groupName !== 'Command' && (
        <NeuButton variant="error" onClick={() => handleRemoveGroup()}>
          Remove {groupName} Group
        </NeuButton>
      )}
    </NeuCard>
  );
};

export default MissionGroupActions;
