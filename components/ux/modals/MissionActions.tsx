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
        minHeight: '180px',
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <NeuButton
        styled={{
          margin: '20px auto 20px auto',
          width: '200px',
        }}
        onClick={() => handleEditMission()}>
        Edit Mission
      </NeuButton>
      <NeuButton
        styled={{
          margin: '0 auto 20px auto',
        }}
        onClick={() => handleArchiveMission()}>
        {mission?.is_archived ? 'Unarchive Mission' : 'Archive Mission'}
      </NeuButton>
      <NeuButton
        styled={{
          margin: '0 auto 20px auto',
        }}
        onClick={() => handleResetCode()}>
        Reset Code
      </NeuButton>
    </ShadCard>
  );
};

export default MissionActions;
