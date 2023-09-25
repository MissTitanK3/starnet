import { useMissionStore } from '@/app-store/missions/missionStore';
import { MissionCenterSupportShip, missionCenterSupportShips } from '@/app-store/missions/missionTypes';
import { generateCode } from '@/app-store/utils/generateCode';
import React, { useState } from 'react';
import ShipButtonsGroup from './ShipButtonsGroup';
import ShadInput from '../../element/inputs/ShadInput';
import ShadCard from '../../element/cards/ShadCard';
import ShadSelect from '../../element/inputs/ShadSelect';

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
        height: '100%',
      }}>
      <ShadSelect
        inputId="support_type"
        selectDropdownTitle="Select Support Type"
        SelectItems={missionCenterSupportShips}
        value={newShip?.support_type?.value || undefined}
        onChange={(e) => handleUpdate(e)}
        dropdownLabel="Support Type"
        dropdownWidth="200px"
      />
      <ShadCard
        styleOverride={{
          width: '80%',
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ShadInput
          label="Group Limit"
          id="group_limit"
          inputId="group_limit"
          type="number"
          changeInput={(e) => handleUpdate(e)}
          value={newShip?.group_limit?.toString() || ''}
        />
      </ShadCard>
      {newShip.support_type?.label === 'Other' && (
        <ShadCard>
          <ShadInput
            label="Other Support Type"
            type="text"
            id="other_support_type"
            inputId="other_support_type"
            changeInput={(e) => handleUpdate(e)}
            value={newShip?.support_type?.customLabel}
          />
        </ShadCard>
      )}
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
