import React from 'react';
import NeuButton from '../element/buttons/NeuButton';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import ShadCard from '../element/cards/ShadCard';

type Props = {
  cardOverride?: React.CSSProperties;
};

const MissionActions = ({ cardOverride }: Props) => {
  const { resetSecurityCode, mission, archiveMission } = useMissionStore();
  const { setActionsOpen, setEditMissionModal } = useModalStore();
  const handleResetCode = () => {
    resetSecurityCode(mission?.id);
    setActionsOpen(false);
  };
  const handleArchiveMission = () => {
    archiveMission(mission?.id);
    setActionsOpen(false);
  };
  const handleEditMission = () => {
    setEditMissionModal(true);
    setActionsOpen(false);
  };
  return (
    <ShadCard
      variant="noHover"
      styleOverride={{
        ...cardOverride,
        minHeight: '200px',
      }}>
      <NeuButton onClick={() => handleEditMission()}>Edit Mission</NeuButton>
      <NeuButton onClick={() => handleArchiveMission()}>
        {mission?.is_archived ? 'Unarchive Mission' : 'Archive Mission'}
      </NeuButton>
      <NeuButton onClick={() => handleResetCode()}>Reset Code</NeuButton>
    </ShadCard>
  );
};

export default MissionActions;
