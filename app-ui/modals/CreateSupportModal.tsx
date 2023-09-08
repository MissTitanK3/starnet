'use client';

import { MissionCenterSupportShip, missionCenterSupportShips } from '@/app-store/missions/missionTypes';
import React, { useState } from 'react';
import NeuCard from '../element/cards/NeuCard';
import { useModalStore } from '@/app-store/modals/modalStore';
import PlainButton from '../element/buttons/PlainButton';
import NeuButton from '../element/buttons/NeuButton';
import NeuInput from '../element/inputs/NeuInput';
import NeuDropdown from '../element/inputs/NeuDropdown';
import { randomUUID } from 'crypto';
import { generateCode } from '@/app-store/utils/generateCode';
import { useMissionStore } from '@/app-store/missions/missionStore';
import OneTimeShip from './subModalComponents/OneTimeShip';
import TemplateShip from './subModalComponents/TemplateShip';
import NewTempalate from './subModalComponents/NewTempalate';

type Props = {};

const CreateSupportModal = (props: Props) => {
  const [newShip, setNewShip] = useState<MissionCenterSupportShip>({} as MissionCenterSupportShip);
  const { mission, updateMission } = useMissionStore();
  const { setCreateSupportModal } = useModalStore();
  const [wizardStep, setWizardStep] = useState<'start' | 'template' | 'one-time' | 'new'>('start');

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.id === 'support_type') {
      const supportType = missionCenterSupportShips.find((ship) => ship.value === e.target.value);
      setNewShip((prev) => ({ ...prev, support_type: supportType }));
    } else if (e.target.id === 'other_support_type') {
      setNewShip((prev) => ({
        ...prev,
        support_type: { value: 'Other', label: 'Other', customLabel: e.target.value },
      }));
    } else {
      setNewShip((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleCreateMission = () => {
    let id = generateCode(2, 8);
    mission.groups &&
      mission?.groups.forEach((group) => {
        if (group?.support_id === id) {
          id = generateCode(2, 8);
        }
      });
    const ship: MissionCenterSupportShip = {
      ...newShip,
      support_id: id,
      support_members: [],
    };
    if (!ship?.support_type?.value) {
      ship.support_type = missionCenterSupportShips[0];
    }
    const updatedMission = {
      ...mission,
      groups: mission?.groups ? [...mission?.groups, ship] : [ship],
    };
    console.log('newShip', updatedMission);
    updateMission(updatedMission);
    handleClose();
  };

  const handleClose = () => {
    setNewShip({} as MissionCenterSupportShip);
    setCreateSupportModal(false);
  };

  const handleTransitionPreviousWizardStep = () => {
    if (wizardStep === 'template') {
      setWizardStep('start');
    }
    if (wizardStep === 'one-time') {
      setWizardStep('start');
    }
    if (wizardStep === 'new') {
      setWizardStep('start');
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: '100dvw',
        height: '100dvh',
        top: 0,
        left: 0,
        backgroundColor: '#242424f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        zIndex: 100,
      }}>
      <NeuCard
        activeHover={false}
        cardStyleOverride={{
          backgroundColor: '#242424',
          maxHeight: '80dvh',
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
        <h2>Create Mission Support Group</h2>
        {wizardStep === 'start' && (
          <>
            <NeuButton
              onClick={() => setWizardStep('one-time')}
              styled={{
                width: '50%',
                margin: '-45px 0',
              }}>
              Add Single Group
            </NeuButton>
            <NeuButton
              onClick={() => setWizardStep('template')}
              styled={{
                width: '50%',
                margin: '-45px 0',
              }}>
              Add Template Group
            </NeuButton>
            <NeuButton
              onClick={() => setWizardStep('new')}
              styled={{
                width: '50%',
                margin: '-45px 0',
              }}>
              Create Template Group
            </NeuButton>
          </>
        )}
        <h4>Choose from a template, create a template, or create a single group!</h4>
        {wizardStep === 'one-time' && (
          <OneTimeShip
            handleClose={handleClose}
            handleTransitionPreviousWizardStep={handleTransitionPreviousWizardStep}
            wizardStep={wizardStep}
          />
        )}
        {wizardStep === 'template' && (
          <TemplateShip
            handleClose={handleClose}
            wizardStep={wizardStep}
            handleTransitionPreviousWizardStep={handleTransitionPreviousWizardStep}
          />
        )}
        {wizardStep === 'new' && (
          <NewTempalate
            handleClose={handleClose}
            wizardStep={wizardStep}
            handleTransitionPreviousWizardStep={handleTransitionPreviousWizardStep}
          />
        )}
      </NeuCard>
    </div>
  );
};

export default CreateSupportModal;
