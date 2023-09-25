'use client';
import { useMissionStore } from '@/app-store/missions/missionStore';
import React, { useEffect, useRef } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/app-store/modals/modalStore';
import { useClickOutside } from '../../hooks/useClickOutside';
import MissionActions from '../../modals/MissionActions';
import EditMissionModal from '../../modals/EditMissionModal';
import ShadButton from '../../element/buttons/ShadButton';

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
        <ShadButton
          onClick={() => router.push('/mission-center')}
          styled={{
            width: '150px',
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'space-evenly',
            }}>
            <FaAngleLeft /> &nbsp; Mission Center
          </div>
        </ShadButton>
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
                height: '180px',
              }}
            />
          )}
          <ShadButton
            onClick={() => setActionsOpen(!actionsOpen)}
            styled={{
              width: '30px',
            }}>
            <FaEllipsisVertical />
          </ShadButton>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: '30px 0',
        }}>
        <ShadButton
          styled={{
            width: '100%',
          }}
          onClick={() => setActiveTab('mission-info')}
          isActive={activeTab === 'mission-info'}>
          <span>Mission Info</span>
        </ShadButton>
        <ShadButton
          styled={{
            width: '100%',
          }}
          onClick={() => setActiveTab('finances')}
          isActive={activeTab === 'finances'}>
          <span>Deposits & Expenses</span>
        </ShadButton>
        <ShadButton
          styled={{
            width: '100%',
          }}
          onClick={() => setActiveTab('groups')}
          isActive={activeTab === 'groups'}>
          <span>Mission Groups</span>
        </ShadButton>
      </div>
      {editMissionModal && <EditMissionModal />}
    </main>
  );
};

export default MissionNavActions;
