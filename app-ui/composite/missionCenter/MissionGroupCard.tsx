import { useModalStore } from '@/app-store/modals/modalStore';
import NeuButton from '@/app-ui/element/buttons/NeuButton';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import { useClickOutside } from '@/app-ui/hooks/useClickOutside';
import MissionActions from '@/app-ui/modals/MissionActions';
import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';
import MissionMemberCard from './MissionMemberCard';

type Props = {};

const MissionGroupCard = (props: Props) => {
  const { actionsOpen, setActionsOpen, editMissionModal } = useModalStore();
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
          {actionsOpen && (
            <MissionActions
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
            onClick={() => setActionsOpen(!actionsOpen)}
            styled={{
              width: '30px',
            }}>
            <FaEllipsisVertical />
          </NeuButton>
        </div>
        <h2>Command Group</h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          margin: '0 25px',
        }}>
        <MissionMemberCard />
        <MissionMemberCard />
        <MissionMemberCard />
      </div>
    </NeuCard>
  );
};

export default MissionGroupCard;
