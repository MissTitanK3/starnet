import NeuButton from '@/app-ui/element/buttons/NeuButton';
import PlainButton from '@/app-ui/element/buttons/PlainButton';
import React from 'react';

type Props = {
  handleClose: () => void;
  wizardStep: 'start' | 'template' | 'one-time' | 'new';
  handleTransitionPreviousWizardStep: () => void;
  handleSubmit: () => void;
  isDisabled: boolean;
  proceedButtonText?: string;
};

const ShipButtonsGroup = ({
  handleClose,
  wizardStep,
  handleTransitionPreviousWizardStep,
  handleSubmit,
  isDisabled,
  proceedButtonText,
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
      }}>
      {wizardStep !== 'start' && (
        <NeuButton
          onClick={() => handleTransitionPreviousWizardStep()}
          styled={{
            width: '50%',
          }}>
          Previous
        </NeuButton>
      )}
      <PlainButton
        variant="warning"
        onClick={() => handleClose()}
        styled={{
          width: '50%',
        }}>
        Cancel
      </PlainButton>
      <NeuButton
        variant={wizardStep === 'start' ? 'disabled' : 'primary'}
        isDisabled={isDisabled}
        activeHover={wizardStep !== 'start'}
        onClick={() => handleSubmit()}
        styled={{
          width: '50%',
        }}>
        {proceedButtonText || 'Proceed'}
      </NeuButton>
    </div>
  );
};

export default ShipButtonsGroup;
