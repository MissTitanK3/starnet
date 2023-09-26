'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import React from 'react';
import MissionGroupCard from './MissionGroupCard';
import NeuButton from '../../element/buttons/NeuButton';
import CreateSupportModal from '../../modals/CreateSupportModal';
import ShadCard from '../../element/cards/ShadCard';

type Props = {};

const MissionGroups = (props: Props) => {
  const { mission, activeTab, missionGrossIncome, missionAccumulatedProfit, missionUndistributedProfit } =
    useMissionStore();
  const { createSupportModal, setCreateSupportModal } = useModalStore();
  if (activeTab !== 'groups') return null;
  return (
    <div
      style={{
        marginBottom: '150px',
      }}>
      <ShadCard
        variant="noHover"
        styleOverride={{
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
              <h4>
                {missionGrossIncome?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                })}
              </h4>
            </div>
            <div>
              <h6>Accumulated Profit</h6>
              <h4>
                {missionAccumulatedProfit?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                })}
              </h4>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h6>Undistributed Profit</h6>
              <h4>
                {missionUndistributedProfit?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                })}
              </h4>
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
                {/* <NeuPopover orientation="right">
                  Disclaimer: Since we cannot transfer non-whole numbers, there will be a small percentage leftover. We
                  will use that as a contribution to the Org.
                </NeuPopover> */}
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
      </ShadCard>
      <ShadCard
        variant="noHover"
        styleOverride={{
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
            {/* <NeuPopover orientation="left">
              The ’Command’ group and Event Leadership has permissions to manage the mission.
            </NeuPopover> */}
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
      </ShadCard>
      {mission?.groups?.map((group) => {
        return <MissionGroupCard key={group?.support_id} group={group} />;
      })}
      {createSupportModal && <CreateSupportModal />}
    </div>
  );
};

export default MissionGroups;
