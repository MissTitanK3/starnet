'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import NeuButton from '@/app-ui/element/buttons/NeuButton';
import PlainButton from '@/app-ui/element/buttons/PlainButton';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import NeuPopover from '@/app-ui/element/custom/NeuPopover';
import PlainPopover from '@/app-ui/element/custom/PlainPopover';
import { useClickOutside } from '@/app-ui/hooks/useClickOutside';
import MissionActions from '@/app-ui/modals/MissionActions';
import React, { useRef } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import MissionGroupCard from './MissionGroupCard';
import CreateSupportModal from '@/app-ui/modals/CreateSupportModal';

type Props = {};

const MissionGroups = (props: Props) => {
  const { mission, getMemberProfile, getAttachedEvents, activeTab } = useMissionStore();
  const { createSupportModal, setCreateSupportModal } = useModalStore();
  if (activeTab !== 'groups') return null;
  return (
    <div
      style={{
        marginBottom: '150px',
      }}>
      <NeuCard
        activeHover={false}
        cardStyleOverride={{
          width: '95%',
          margin: '25px auto',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}>
            <div style={{ textAlign: 'left' }}>
              <h6>Gross Income</h6>
              <h4>$1,000,000</h4>
            </div>
            <div>
              <h6>Accumulated Profit</h6>
              <h4>$1,000,000</h4>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h6>Undistributed Profit</h6>
              <h4>$1,000,000</h4>
            </div>
          </div>
          <br />
          <hr style={{ width: '90%' }} />
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}>
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <h6>Payout Split</h6>
                <NeuPopover orientation="right">
                  Disclaimer: Since we cannot transfer non-whole numbers, there will be a small percentage leftover. We
                  will use that as a contribution to the Org.
                </NeuPopover>
              </div>
              <h4>15min/Share</h4>
            </div>
            <div>
              <h6>Total Shares</h6>
              <h4>4.0</h4>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h6>Value Per Share</h6>
              <h4>$100,000</h4>
            </div>
          </div>
        </div>
      </NeuCard>
      <NeuCard
        activeHover={false}
        cardStyleOverride={{
          width: '95%',
          margin: '25px auto',
        }}>
        <div
          className="header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <h3>Mission Support Groups</h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <NeuPopover orientation="left">
              The ’Command’ group and Event Leadership has permissions to manage the mission.
            </NeuPopover>
            <NeuButton
              onClick={() => {
                setCreateSupportModal(true);
              }}
              styled={{
                maxWidth: '170px',
                height: '100%',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <p
                style={{
                  margin: '2px',
                }}>
                Create Support
              </p>
            </NeuButton>
          </div>
        </div>
      </NeuCard>
      {/* To be mapped over */}
      <MissionGroupCard />
      <MissionGroupCard />
      {createSupportModal && <CreateSupportModal />}
    </div>
  );
};

export default MissionGroups;
