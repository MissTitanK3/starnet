import { useModalStore } from '@/app-store/modals/modalStore';
import React, { useRef } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import MissionMemberCard from './MissionMemberCard';
import { MissionCenterSupportShip } from '@/app-store/missions/missionTypes';
import MissionGroupActions from '../../modals/MissionGroupActions';
import { useClickOutside } from '../../hooks/useClickOutside';
import NeuButton from '../../element/buttons/NeuButton';
import AddMemberToMissionModal from '../../modals/subModalComponents/AddMemberToMission';
import NeuCard from '../../element/cards/NeuCard';

type Props = {
  group: MissionCenterSupportShip;
};

const MissionGroupCard = ({ group }: Props) => {
  const { setActionsOpen, addMemberModal } = useModalStore();
  const [localActions, setLocalActions] = React.useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useClickOutside(dropdown, () => setActionsOpen(false));

  return (
    <NeuCard
      activeHover={false}
      cardStyleOverride={{
        width: '95%',
        margin: '25px auto',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}>
        <div
          ref={dropdown}
          style={{
            position: 'relative',
          }}>
          {localActions && (
            <MissionGroupActions
              groupId={group.support_id}
              close={() => setLocalActions(false)}
              groupName={
                group.support_type?.customLabel !== '' ? group.support_type?.customLabel : group.support_type?.label
              }
              cardOverride={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 1000,
                backgroundColor: '#242424',
                height: '200px',
              }}
            />
          )}
          <NeuButton
            onClick={() => setLocalActions(!localActions)}
            styled={{
              width: '30px',
            }}>
            <FaEllipsisVertical />
          </NeuButton>
        </div>
        <h2>
          {group?.support_type?.customLabel !== '' ? group?.support_type?.customLabel : group?.support_type?.label}
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          margin: '0 25px',
        }}>
        {group?.support_members?.map((member) => (
          <MissionMemberCard key={member.member} />
        ))}
      </div>
      {addMemberModal && <AddMemberToMissionModal groupId={group?.support_id} />}
    </NeuCard>
  );
};

export default MissionGroupCard;
