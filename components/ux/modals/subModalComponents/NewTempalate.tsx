import { useMissionStore } from '@/app-store/missions/missionStore';
import { MissionCenterSupportShip } from '@/app-store/missions/missionTypes';
import React, { useState } from 'react';
import ShipButtonsGroup from './ShipButtonsGroup';
import NeuInput from '../../element/inputs/NeuInput';

type Props = {
  handleClose: () => void;
  wizardStep: 'start' | 'template' | 'one-time' | 'new';
  handleTransitionPreviousWizardStep: () => void;
};

const NewTempalate = ({ handleClose, wizardStep, handleTransitionPreviousWizardStep }: Props) => {
  const [newTemplate, setNewTemplate] = useState<MissionCenterSupportShip[]>([] as MissionCenterSupportShip[]);
  const { mission, updateMission } = useMissionStore();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '100%',
        overflowY: 'auto',
      }}>
      <h4>Template Name</h4>
      <div>
        <NeuInput
          inputStyleOverride={{
            width: '100%',
            height: '2.8rem',
            fontSize: '1.3rem',
          }}
          cardStyleOverride={{
            width: '90%',
            height: '1rem',
            marginBottom: '-0.7rem',
          }}
          id="template_name"
          placeholder="Template Name"
          type="text"
          changeInput={(e) => console.log(e)}
          value={''}
        />
      </div>
      <h4>Template Description</h4>
      <div>
        <NeuInput
          inputStyleOverride={{
            width: '100%',
            height: '2.8rem',
            fontSize: '1.3rem',
          }}
          cardStyleOverride={{
            width: '90%',
            height: '1rem',
            marginBottom: '-0.7rem',
          }}
          id="template_description"
          placeholder="Template Description"
          type="text"
          changeInput={(e) => console.log(e)}
          value={''}
        />
      </div>
      <h4>Template Type</h4>
      <h4>Share with your Org</h4>
      <h4>Add Ship</h4>
      <h4>Ship List</h4>
      <ShipButtonsGroup
        handleClose={handleClose}
        wizardStep={wizardStep}
        handleTransitionPreviousWizardStep={handleTransitionPreviousWizardStep}
        handleSubmit={() => console.log('submit')}
        isDisabled={false}
        proceedButtonText="Add Mission Support"
      />
    </div>
  );
};

export default NewTempalate;
