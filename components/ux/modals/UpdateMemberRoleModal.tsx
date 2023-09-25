import React, { useState } from 'react';
import { Mission } from '@/app-store/missions/missionTypes';
import { useModalStore } from '@/app-store/modals/modalStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';
import ShadInput from '../element/inputs/ShadInput';
import Overlay from '../element/overlays/Overlay';

type Props = {};

const UpdateMemberRoleModal = (props: Props) => {
  const { mission, updateMission } = useMissionStore();
  const [editMission, setEditMission] = useState(mission as Mission);
  const [role, setRole] = useState('');
  const { setUpdateRoleModal, updateRoleModal } = useModalStore();

  const handleClose = () => {
    setEditMission(mission as Mission);
    setUpdateRoleModal({
      isVisibile: false,
      member: undefined,
      shipNumber: '',
      currentRole: '',
    });
  };

  const handleUpdateRole = () => {
    if (editMission && editMission.groups) {
      editMission.groups?.map((group) => {
        if (group?.support_id === editMission?.groups?.[0]?.support_id) {
          group?.support_members?.map((member) => {
            if (member?.member) {
              member.memberRole = role;
              console.log('member', member);
            }
          });
        }
      });
      updateMission(editMission);
    }
    handleClose();
  };

  return (
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        footerChildren={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
              margin: '0 auto',
            }}>
            <ShadButton
              variant="destructive"
              onClick={() => handleClose()}
              styled={{
                width: '100px',
              }}>
              Cancel
            </ShadButton>
            <ShadButton
              onClick={() => handleUpdateRole()}
              styled={{
                width: '100px',
              }}>
              Save
            </ShadButton>
          </div>
        }
        styleOverride={{
          height: '30dvh',
          width: '50dvw',
          overflowY: 'auto',
        }}>
        <h2>
          {updateRoleModal?.member?.in_game_name}: {updateRoleModal.currentRole}
        </h2>
        <ShadCard
          cardTitle="Update Role"
          cardDescription="General roles include: Captain, Pilot, Gunner, Engineer, Crew Member.">
          <ShadInput
            id="memberRole"
            inputId="memberRole"
            type="text"
            value={role}
            changeInput={(e) => setRole(e.target.value)}
          />
        </ShadCard>
      </ShadCard>
    </Overlay>
  );
};

export default UpdateMemberRoleModal;
