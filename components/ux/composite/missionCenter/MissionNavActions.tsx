'use client';
import { useMissionStore } from '@/app-store/missions/missionStore';
import React, { useEffect, useRef } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/app-store/modals/modalStore';
import { useClickOutside } from '../../hooks/useClickOutside';
import NeuButton from '../../element/buttons/NeuButton';
import MissionActions from '../../modals/MissionActions';
import EditMissionModal from '../../modals/EditMissionModal';

type Props = {
  id: string;
};

const MissionNavActions = ({ id }: Props) => {
  const router = useRouter();
  const { activeTab, setActiveTab, setMission } = useMissionStore();
  const { actionsOpen, setActionsOpen, editMissionModal } = useModalStore();
  const dropdown = useRef<HTMLDivElement>(null);
  useClickOutside(dropdown, () => setActionsOpen(false));

  useEffect(() => {
    setMission(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      style={{
        width: '95%',
        margin: '0 auto',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: '30px 0',
        }}>
        <NeuButton
          onClick={() => router.push('/mission-center')}
          styled={{
            width: '150px',
          }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <FaAngleLeft /> Mission Center
          </span>
        </NeuButton>
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
                right: '30px',
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
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: '30px 0',
        }}>
        <NeuButton onClick={() => setActiveTab('mission-info')} isActive={activeTab === 'mission-info'}>
          <span>Mission Info</span>
        </NeuButton>
        <NeuButton onClick={() => setActiveTab('finances')} isActive={activeTab === 'finances'}>
          <span>Deposits & Expenses</span>
        </NeuButton>
        <NeuButton onClick={() => setActiveTab('groups')} isActive={activeTab === 'groups'}>
          <span>Mission Groups</span>
        </NeuButton>
      </div>
      {editMissionModal && <EditMissionModal />}
    </main>
  );
};

export default MissionNavActions;
