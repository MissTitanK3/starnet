'use client';

import React, { useState } from 'react';
import NeuCard from '../element/cards/NeuCard';
import { useModalStore } from '@/app-store/modals/modalStore';
import PlainButton from '../element/buttons/PlainButton';
import NeuButton from '../element/buttons/NeuButton';
import OneTimeShip from './subModalComponents/OneTimeShip';
import TemplateShip from './subModalComponents/TemplateShip';
import NewTempalate from './subModalComponents/NewTempalate';

type Props = {};

const CreateSupportModal = (props: Props) => {
  const { setCreateSupportModal } = useModalStore();
  const [wizardStep, setWizardStep] = useState<'start' | 'template' | 'one-time' | 'new'>('start');

  const handleClose = () => {
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
        {wizardStep === 'start' && (
          <PlainButton
            variant="warning"
            onClick={() => handleClose()}
            styled={{
              width: '50%',
            }}>
            Cancel
          </PlainButton>
        )}
      </NeuCard>
    </div>
  );
};

export default CreateSupportModal;
