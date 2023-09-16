import React, { useState } from 'react';
import NeuCard from '../element/cards/NeuCard';
import NeuButton from '../element/buttons/NeuButton';
import { FaX } from 'react-icons/fa6';
import NeuInput from '../element/inputs/NeuInput';
import { Mission, missionTypes } from '@/app-store/missions/missionTypes';
import NeuTextArea from '../element/inputs/NeuTextArea';
import { useModalStore } from '@/app-store/modals/modalStore';
import NeuDateField from '../element/inputs/NeuDateField';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { generateCode } from '@/app-store/utils/generateCode';
import PlainButton from '../element/buttons/PlainButton';
import NeuDropdown from '../element/inputs/NeuDropdown';

type Props = {};

const EditMissionModal = (props: Props) => {
  const { mission, updateMission } = useMissionStore();
  const [editMission, setEditMission] = useState(mission as Mission);
  const { setEditMissionModal } = useModalStore();

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEditMission((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCreateMission = () => {
    updateMission(editMission);
    handleClose();
  };

  const handleClose = () => {
    setEditMission(mission as Mission);
    setEditMissionModal(false);
  };

  const handleNewCode = () => {
    const code = generateCode(2, 8);
    setEditMission((prev) => ({ ...prev, op_sec_code: code }));
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
          height: '400px',
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
        <div
          style={{
            marginTop: '200px',
          }}
        />
        <h5>Mission Type</h5>
        <NeuDropdown
          id=""
          placeholder="Select Mission"
          selectOptions={missionTypes}
          value={''}
          changeInput={(e) => handleUpdate(e)}
        />
        <h5>Mission Name</h5>
        <NeuInput
          inputStyleOverride={{
            width: '100%',
            height: '1rem',
          }}
          cardStyleOverride={{
            width: '90%',
            height: '3rem',
          }}
          id="mission_name"
          placeholder="Mission Name"
          type="text"
          changeInput={(e) => handleUpdate(e)}
          value={editMission?.mission_name}
        />
        <h5>Mission Description</h5>
        <NeuTextArea
          inputStyleOverride={{
            width: '100%',
            height: '100%',
          }}
          cardStyleOverride={{
            width: '90%',
            minHeight: '3rem',
          }}
          id="mission_desc"
          placeholder="Mission Description"
          changeInput={(e) => handleUpdate(e)}
          value={editMission?.mission_desc || ''}
          rowsCount={5}
          colsCount={5}
        />
        <h5>Mission Scope</h5>
        <NeuTextArea
          inputStyleOverride={{
            width: '100%',
            height: '100%',
          }}
          cardStyleOverride={{
            width: '90%',
            minHeight: '3rem',
          }}
          id="mission_scope"
          placeholder="Mission Scope"
          changeInput={(e) => handleUpdate(e)}
          value={editMission?.mission_scope || ''}
          rowsCount={5}
          colsCount={5}
        />
        <h5>Mission Date</h5>
        <NeuDateField
          id="start_date"
          placeholder="Mission Date"
          changeInput={(e) => handleUpdate(e)}
          // value={new Date(editMission?.start_date?.toString() || '')?.toISOString()?.slice(0, 16)}
          value={
            editMission?.start_date
              ? new Date(editMission?.start_date?.toString() || '')?.toISOString()?.slice(0, 16)
              : new Date()?.toISOString()?.slice(0, 16)
          }
        />
        <h5>Optimal Participants</h5>
        <NeuInput
          inputStyleOverride={{
            width: '100%',
            height: '1rem',
          }}
          id="optimal_participation"
          placeholder="Optimal Participants"
          type="number"
          changeInput={(e) => handleUpdate(e)}
          value={editMission?.optimal_participation?.toString() || ''}
        />
        <div
          style={{
            display: 'flex',
            width: '90%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '20px 0',
            height: '4rem',
          }}>
          <NeuInput
            inputStyleOverride={{
              width: '100%',
              fontSize: '2rem',
              lineHeight: '2.5rem',
              textAlign: 'center',
              margin: 'auto',
            }}
            cardStyleOverride={{
              width: '200px',
              height: '3rem',
            }}
            id="op_sec_code"
            placeholder="Security Code"
            type="text"
            changeInput={(e) => handleUpdate(e)}
            value={editMission?.op_sec_code || ''}
          />
          <NeuButton
            onClick={() => handleNewCode()}
            styled={{
              width: '30%',
              height: '3rem',
            }}>
            Generate Security Code
          </NeuButton>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            margin: '20px 0',
          }}>
          <PlainButton
            variant="warning"
            onClick={() => handleClose()}
            styled={{
              width: '50%',
            }}>
            Cancel
          </PlainButton>
          <NeuButton
            variant="success"
            onClick={() => handleCreateMission()}
            styled={{
              width: '50%',
            }}>
            Update Mission
          </NeuButton>
        </div>
      </NeuCard>
      <NeuButton
        onClick={() => handleClose()}
        styled={{
          width: '35px',
          position: 'relative',
          top: '-350px',
          right: '10px',
          borderRadius: '50%',
        }}>
        <FaX />
      </NeuButton>
    </div>
  );
};

export default EditMissionModal;
