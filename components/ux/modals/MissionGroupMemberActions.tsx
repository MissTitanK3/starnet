import React from 'react';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';
import { AuthData } from '@/app-store/auth/authTypes';

type Props = {
  cardOverride?: React.CSSProperties;
  member?: AuthData | null | undefined;
  currentRole: string;
  groupId: string;
  close: () => void;
};

const MissionGroupMemberActions = ({ cardOverride, member, close, groupId, currentRole }: Props) => {
  const { removeMemberFromGroup, mission, updateMission, addShare, removeShare } = useMissionStore();
  const { setUpdateRoleModal } = useModalStore();
  const handleRemoveMember = () => {
    if (member?.id) {
      removeMemberFromGroup(groupId, member.id);
    }
    close();
  };
  const handleUpdateRole = () => {
    if (member) {
      setUpdateRoleModal({
        isVisibile: true,
        member: member,
        shipNumber: groupId,
        currentRole: currentRole ? currentRole : '',
      });
    }
    close();
  };
  const handleRemoveShare = () => {
    removeShare(groupId, member?.id as string);
    close();
  };

  const handleAddShare = () => {
    addShare(groupId, member?.id as string);
    close();
  };

  return (
    <ShadCard
      variant="solidNoHover"
      styleOverride={{
        ...cardOverride,
        minHeight: member?.in_game_name === 'Command' ? '30px' : '30px',
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
        onClick={() => handleRemoveMember()}>
        Remove {member?.in_game_name}
      </ShadButton>
      <ShadButton
        styled={{
          width: '100%',
          margin: '15px auto 0 auto',
        }}
        onClick={() => handleUpdateRole()}>
        Update {member?.in_game_name} Role
      </ShadButton>
      <ShadButton
        styled={{
          width: '100%',
          margin: '15px auto 0 auto',
        }}
        onClick={() => handleAddShare()}>
        Add One (1) Share
      </ShadButton>
      <ShadButton
        styled={{
          width: '100%',
          margin: '15px auto 0 auto',
        }}
        onClick={() => handleRemoveShare()}>
        Remove One (1) Share
      </ShadButton>
    </ShadCard>
  );
};

export default MissionGroupMemberActions;
