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
import NeuDropdown from '../element/inputs/NeuDropdown';
import PlainButton from '../element/buttons/PlainButton';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';
import Overlay from '../element/overlays/Overlay';
import ShadSelect from '../element/inputs/ShadSelect';

type Props = {};

const AddMissionModal = (props: Props) => {
  const [newMission, setNewMission] = useState({} as Mission);
  const { setNewMissionModal } = useModalStore();
  const { addMission } = useMissionStore();

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewMission((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCreateMission = () => {
    newMission.groups = [
      {
        support_id: 'COMMAND',
        group_limit: '1',
        support_type: {
          label: 'Command',
          value: 'Command',
          customLabel: '',
        },
        support_members: [],
      },
    ];
    addMission(newMission);
    handleClose();
  };

  const handleClose = () => {
    setNewMission({} as Mission);
    setNewMissionModal(false);
  };

  const handleNewCode = () => {
    const code = generateCode(2, 8);
    setNewMission((prev) => ({ ...prev, op_sec_code: code }));
  };

  return (
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        styleOverride={{
          height: '80dvh',
          width: '60dvw',
          overflowY: 'auto',
        }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '20px 0',
          }}>
          <div>
            <h5>Mission Type</h5>
            {/* <NeuDropdown
              id="mission_type"
              placeholder="Select Mission"
              selectOptions={missionTypes}
              value={''}
              changeInput={(e) => handleUpdate(e)}
            /> */}
            <ShadSelect
              SelectItems={[
                {
                  value: 'test',
                  label: 'test',
                },
                {
                  value: 'test2',
                  label: 'test2',
                },
                {
                  value: 'test3',
                  label: 'test3',
                },
                {
                  value: 'test4',
                  label: 'test4',
                },
                {
                  value: 'test5',
                  label: 'test5',
                },
              ]}
            />
          </div>
          <div>
            <h5>Mission Date</h5>
            <NeuDateField
              id="start_date"
              placeholder="Mission Date"
              changeInput={(e) => handleUpdate(e)}
              value={new Date()?.toISOString()?.slice(0, 16)}
            />
          </div>
        </div>
        <div>
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
            value={newMission?.mission_name}
          />
        </div>
        <div>
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
            value={newMission?.mission_desc || ''}
            rowsCount={5}
            colsCount={5}
          />
        </div>
        <div>
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
            value={newMission?.mission_scope || ''}
            rowsCount={5}
            colsCount={5}
          />
        </div>
        <div>
          <h5>Optimal Participants</h5>
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
            value={newMission?.optimal_participation?.toString() || ''}
          />
        </div>
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
            value={newMission?.op_sec_code || ''}
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
          <ShadButton
            variant="destructive"
            onClick={() => handleClose()}
            styled={{
              width: '50%',
            }}>
            Cancel
          </ShadButton>
          <ShadButton
            variant="default"
            onClick={() => handleCreateMission()}
            styled={{
              width: '50%',
            }}>
            Create Mission
          </ShadButton>
        </div>
      </ShadCard>
      <ShadButton
        variant="destructive"
        onClick={() => handleClose()}
        styled={{
          width: '35px',
          position: 'relative',
          top: '-350px',
          right: '10px',
          borderRadius: '50%',
          color: 'rgb(150, 2, 2)',
        }}>
        <FaX />
      </ShadButton>
    </Overlay>
  );
};

export default AddMissionModal;
