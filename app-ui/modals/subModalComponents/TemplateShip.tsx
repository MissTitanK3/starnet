import React from 'react';
import ShipButtonsGroup from './ShipButtonsGroup';

type Props = {
  handleClose: () => void;
  wizardStep: 'start' | 'template' | 'one-time' | 'new';
  handleTransitionPreviousWizardStep: () => void;
};

const TemplateShip = ({ handleClose, wizardStep, handleTransitionPreviousWizardStep }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '100%',
      }}>
      <div
        style={{
          width: '100%',
        }}>
        <ShipButtonsGroup
          handleClose={handleClose}
          wizardStep={wizardStep}
          handleTransitionPreviousWizardStep={handleTransitionPreviousWizardStep}
          handleSubmit={() => console.log('submit')}
          isDisabled={false}
          proceedButtonText="Add Template"
        />
      </div>
    </div>
  );
};

export default TemplateShip;
