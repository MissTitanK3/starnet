import React, { useState } from 'react';
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
import ShadCard from '../element/cards/ShadCard';
import ShadSelect from '../element/inputs/ShadSelect';
import ShadButton from '../element/buttons/ShadButton';
import ShadTimeInput from '../element/inputs/ShadTimeInput';
import ShadCalendar from '../element/inputs/ShadCalendar';
import ShadInput from '../element/inputs/ShadInput';
import ShadTextArea from '../element/inputs/ShadTextArea';
import Overlay from '../element/overlays/Overlay';

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
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        styleOverride={{
          height: '80dvh',
          width: '60dvw',
          overflowY: 'auto',
        }}>
        <ShadCard
          variant="solidNoHover"
          styleOverride={{
            width: '80%',
            margin: '20px auto',
          }}>
          <ShadInput
            label="Mission Name"
            inputStyleOverride={{
              width: '100%',
            }}
            id="mission_name"
            inputId="mission_name"
            placeHolder="Mission Name"
            type="text"
            changeInput={(e) => handleUpdate(e)}
            value={editMission?.mission_name}
          />
        </ShadCard>
        <ShadCard
          variant="solidNoHover"
          styleOverride={{
            width: '80%',
            margin: '20px auto',
          }}>
          <ShadInput
            type="text"
            label="Mission Scope"
            inputStyleOverride={{
              width: '100%',
            }}
            inputId="mission_scope"
            id="mission_scope"
            placeHolder="Mission Scope"
            changeInput={(e) => handleUpdate(e)}
            value={editMission?.mission_scope || ''}
          />
        </ShadCard>
        <ShadCard
          variant="solidNoHover"
          styleOverride={{
            width: '80%',
            margin: '20px auto',
          }}>
          <ShadTextArea
            label="Mission Description"
            inputStyleOverride={{
              width: '100%',
              height: '100%',
            }}
            id="mission_desc"
            inputId="mission_desc"
            placeHolder="Mission Description"
            changeInput={(e) => handleUpdate(e)}
            value={editMission?.mission_desc || ''}
            rows={5}
            cols={5}
          />
        </ShadCard>
        <ShadCard
          variant="solidNoHover"
          styleOverride={{
            width: '80%',
            margin: '20px auto',
          }}>
          <ShadInput
            label="Optimal Participants"
            inputStyleOverride={{
              width: '100%',
            }}
            id="optimal_participation"
            inputId="optimal_participation"
            placeHolder="Optimal Participants"
            type="number"
            changeInput={(e) => handleUpdate(e)}
            value={editMission?.optimal_participation?.toString() || ''}
          />
        </ShadCard>
        <div
          style={{
            display: 'flex',
            width: '80%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '20px auto',
            height: '4rem',
          }}>
          <ShadCard
            styleOverride={{
              width: '100%',
              margin: '0 20px',
            }}>
            <ShadInput
              inputStyleOverride={{
                width: '100%',
                fontSize: '1.2rem',
                lineHeight: '1.2rem',
                textAlign: 'center',
                margin: 'auto',
              }}
              id="op_sec_code"
              inputId="op_sec_code"
              placeHolder="Security Code"
              type="text"
              changeInput={(e) => handleUpdate(e)}
              value={editMission?.op_sec_code || ''}
            />
          </ShadCard>
          <ShadButton
            variant="outline"
            onClick={() => handleNewCode()}
            styled={{
              width: '100%',
              height: '3rem',
              fontSize: '1.2rem',
            }}>
            Generate Security Code
          </ShadButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            height: '100px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '20px 0',
          }}>
          <div>
            <h5
              style={{
                paddingBottom: '5px',
              }}>
              Mission Date
            </h5>
            <ShadCalendar
              inputId="start_date"
              selectedUpdate={(e) => handleUpdate(e)}
              value={editMission.start_date ? new Date(editMission.start_date as string) : new Date()}
            />
          </div>
          <div>
            <h5
              style={{
                paddingBottom: '5px',
              }}>
              Mission Time
            </h5>
            <ShadTimeInput
              type="time"
              inputId="start_date"
              inputStyleOverride={{
                fontSize: '1rem',
              }}
              startDate={editMission.start_date as Date}
              changeInput={(e) => handleUpdate(e)}
              value={editMission.start_date}
            />
          </div>
          <div>
            <h5
              style={{
                padding: '0 0 0 20px',
              }}>
              Mission Type
            </h5>
            <ShadSelect inputId="mission_type" SelectItems={missionTypes} onChange={(e) => handleUpdate(e)} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-evenly',
            margin: '20px auto',
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

export default EditMissionModal;
