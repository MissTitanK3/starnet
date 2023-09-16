import { useMissionStore } from '@/app-store/missions/missionStore';
import { MissionCenterSupportShip, missionCenterSupportShips } from '@/app-store/missions/missionTypes';
import { generateCode } from '@/app-store/utils/generateCode';
import React, { useState } from 'react';
import ShipButtonsGroup from './ShipButtonsGroup';
import NeuInput from '../../element/inputs/NeuInput';
import NeuDropdown from '../../element/inputs/NeuDropdown';

type Props = {
  handleClose: () => void;
  wizardStep: 'start' | 'template' | 'one-time' | 'new';
  handleTransitionPreviousWizardStep: () => void;
};

const OneTimeShip = ({ handleClose, wizardStep, handleTransitionPreviousWizardStep }: Props) => {
  const [newShip, setNewShip] = useState<MissionCenterSupportShip>({} as MissionCenterSupportShip);
  const { mission, updateMission } = useMissionStore();

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleSuppportShip = () => {
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '100%',
      }}>
      <h4>Group Limit</h4>
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
          id="group_limit"
          placeholder="Group Limit"
          type="text"
          changeInput={(e) => handleUpdate(e)}
          value={newShip?.group_limit?.toString() || ''}
        />
      </div>
      <div>
        <NeuDropdown
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
          id="support_type"
          placeholder="Select Mission"
          selectOptions={missionCenterSupportShips}
          value={newShip?.support_type?.value || ''}
          changeInput={(e) => handleUpdate(e)}
        />
      </div>
      <div>
        {newShip.support_type?.label === 'Other' && (
          <NeuInput
            inputStyleOverride={{
              width: '100%',
              height: '1.5rem',
            }}
            cardStyleOverride={{
              width: '90%',
              height: '1.5rem',
              marginBottom: '-0.7rem',
            }}
            type="text"
            id="other_support_type"
            placeholder="Other Support Type"
            changeInput={(e) => handleUpdate(e)}
            value={newShip?.support_type?.customLabel}
          />
        )}
      </div>
      <ShipButtonsGroup
        handleClose={handleClose}
        wizardStep={wizardStep}
        handleTransitionPreviousWizardStep={handleTransitionPreviousWizardStep}
        handleSubmit={handleSuppportShip}
        isDisabled={
          wizardStep === 'start' && !newShip?.support_type?.label
            ? true
            : false || !!newShip?.group_limit
            ? false
            : true
        }
        proceedButtonText="Add Mission Support"
      />
    </div>
  );
};

export default OneTimeShip;
