import React from 'react';
import ShadButton from '../../element/buttons/ShadButton';

type Props = {
  handleClose: () => void;
  wizardStep: 'start' | 'template' | 'one-time' | 'new';
  handleTransitionPreviousWizardStep: () => void;
  handleSubmit: () => void;
  isDisabled: boolean;
  proceedButtonText?: string;
};

const ShipButtonsGroup = ({
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
        height: '100%',
        margin: '50px auto',
      }}>
      <ShadButton
        onClick={() => handleTransitionPreviousWizardStep()}
        styled={{
          width: '100%',
        }}>
        Previous
      </ShadButton>
      <ShadButton
        isDisabled={isDisabled}
        onClick={handleSubmit}
        styled={{
          width: '100%',
        }}>
        {proceedButtonText || 'Proceed'}
      </ShadButton>
    </div>
  );
};

export default ShipButtonsGroup;
