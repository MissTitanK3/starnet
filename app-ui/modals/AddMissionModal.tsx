import React, { useState } from 'react';
import NeuCard from '../element/cards/NeuCard';
import NeuButton from '../element/buttons/NeuButton';
import { FaX } from 'react-icons/fa6';
import NeuInput from '../element/inputs/NeuInput';
import { Mission } from '@/app-store/missions/missionTypes';
import NeuTextArea from '../element/inputs/NeuTextArea';
import { useModalStore } from '@/app-store/modals/modalStore';
import NeuDateField from '../element/inputs/NeuDateField';
import { useMissionStore } from '@/app-store/missions/missionStore';

type Props = {};

const AddMissionModal = (props: Props) => {
  const [newMission, setNewMission] = useState({} as Mission);
  const { setNewMissionModal } = useModalStore();
  const { addMission } = useMissionStore();

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewMission((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCreateMission = () => {
    addMission(newMission);
    handleClose();
  };

  const handleClose = () => {
    setNewMission({} as Mission);
    setNewMissionModal(false);
  };
  console.log(newMission);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        backgroundColor: '#242424ed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
      }}>
      <NeuCard
        cardStyleOverride={{
          backgroundColor: '#242424',
          height: '700px',
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
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
          value={newMission.mission_name}
        />
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
          value={newMission.mission_desc || ''}
          rowsCount={5}
        />
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
          value={newMission.mission_scope || ''}
          rowsCount={5}
        />
        <NeuDateField
          inputStyleOverride={{
            width: '100%',
            height: '1rem',
          }}
          cardStyleOverride={{
            width: '90%',
            height: '3rem',
          }}
          id="start_date"
          placeholder="Mission Date"
          changeInput={(e) => handleUpdate(e)}
          value={newMission?.start_date?.toString() || ''}
        />
        <NeuInput
          inputStyleOverride={{
            width: '100%',
            height: '1rem',
          }}
          cardStyleOverride={{
            width: '90%',
            height: '3rem',
          }}
          id="optimal_participation"
          placeholder="Optimal Participants"
          type="number"
          changeInput={(e) => handleUpdate(e)}
          value={newMission.optimal_participation?.toString() || ''}
        />
        <div
          style={{
            display: 'flex',
            width: '90%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '20px 0',
          }}>
          <NeuInput
            inputStyleOverride={{
              width: '70%',
              height: '1rem',
            }}
            cardStyleOverride={{
              width: '200px',
              height: '3rem',
            }}
            id="op_sec_code"
            placeholder="Security Code"
            type="text"
            changeInput={(e) => handleUpdate(e)}
            value={newMission.op_sec_code || ''}
          />
          <NeuButton
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
          <NeuButton
            onClick={() => handleClose()}
            styled={{
              width: '50%',
            }}>
            Cancel
          </NeuButton>
          <NeuButton
            onClick={() => handleCreateMission()}
            styled={{
              width: '50%',
            }}>
            Create Mission
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

export default AddMissionModal;
