'use client';

import React, { useState } from 'react';
import { useModalStore } from '@/app-store/modals/modalStore';
import PlainButton from '../element/buttons/PlainButton';
import NeuButton from '../element/buttons/NeuButton';
import OneTimeShip from './subModalComponents/OneTimeShip';
import TemplateShip from './subModalComponents/TemplateShip';
import NewTempalate from './subModalComponents/NewTempalate';
import ShadCard from '../element/cards/ShadCard';
import Overlay from '../element/overlays/Overlay';
import ShadButton from '../element/buttons/ShadButton';

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
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        cardTitle="Create Mission Support Group"
        cardDescription="Choose from a template, create a template, or create a single group!"
        footerChildren={
          <PlainButton onClick={() => handleClose()}>
            <h6>Cancel</h6>
          </PlainButton>
        }
        styleOverride={{
          height: '60dvh',
          width: '60dvw',
        }}>
        {wizardStep === 'start' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              width: '80%',
              height: '20dvh',
              margin: '0 auto',
            }}>
            <ShadButton styled={{ width: '100%' }} onClick={() => setWizardStep('one-time')}>
              Add Single Group
            </ShadButton>
            <ShadButton styled={{ width: '100%' }} onClick={() => setWizardStep('template')}>
              Add Template Group
            </ShadButton>
            <ShadButton styled={{ width: '100%' }} onClick={() => setWizardStep('new')}>
              Create Template Group
            </ShadButton>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            margin: '0 auto',
          }}>
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
        </div>
      </ShadCard>
    </Overlay>
  );
};

export default CreateSupportModal;
