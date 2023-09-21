import { useModalStore } from '@/app-store/modals/modalStore';
import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { PiClockCountdownBold } from 'react-icons/pi';
import NeuCard from '../../element/cards/NeuCard';
import MissionActions from '../../modals/MissionActions';
import NeuButton from '../../element/buttons/NeuButton';
import { useClickOutside } from '../../hooks/useClickOutside';
import ShadCard from '../../element/cards/ShadCard';

type Props = {};

const MissionMemberCard = (props: Props) => {
  const { actionsOpen, setActionsOpen, editMissionModal } = useModalStore();
  const [tracking, setTracking] = React.useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useClickOutside(dropdown, () => setActionsOpen(false));
  return (
    <ShadCard
      variant="noHover"
      styleOverride={{
        width: '350px',
        // margin: '10px auto',
        display: 'flex',
        flexWrap: 'wrap',
        // flexDirection: 'column',
        alignItems: 'center',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        <h2>FADM MissTitanK3</h2>
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
              margin: '0',
            }}>
            <FaEllipsisVertical />
          </NeuButton>
        </div>
      </div>
      <hr
        style={{
          margin: '20px 0',
          width: '90%',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          margin: '10px 0',
        }}>
        <span>Assigned Position</span>
        <span>Pilot</span>
      </div>
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          margin: '20px auto',
        }}>
        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h6>Total Earnings</h6>
          <span>$54,000</span>
        </div>
        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <h6>Unpaid Earnings</h6>
          <span>$54,000</span>
        </div>
      </div>
      <div>
        <NeuButton
          onClick={() => {
            console.log('clicked');
          }}
          styled={{
            maxWidth: '120px',
            height: '100%',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
          <p
            style={{
              margin: '2px',
            }}>
            Mark As Paid
          </p>
        </NeuButton>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}>
          <h6>Scheduled Start</h6>
          <span>12:00:00</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'column',
            textAlign: 'right',
          }}>
          <h6>Scheduled End</h6>
          <span>18:00:00</span>
        </div>
      </div>
      <hr
        style={{
          margin: '20px 0',
          width: '90%',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <h3>Time Tracking</h3>
        <NeuButton
          onClick={() => {
            console.log('clicked');
          }}
          variant="success"
          styled={{
            maxWidth: '30px',
            height: '100%',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
          }}>
          <FaPlus />
        </NeuButton>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '10px 0',
          }}>
          <span>
            <PiClockCountdownBold /> 12:00:00
          </span>
          {tracking ? (
            <NeuButton
              onClick={() => {
                console.log('clicked');
              }}
              variant="success"
              styled={{
                maxWidth: '170px',
                height: '100%',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
              }}>
              <p
                style={{
                  margin: '2px',
                }}>
                Tracking
              </p>
            </NeuButton>
          ) : (
            <span>For 20 Min</span>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '10px 0',
          }}>
          <span>
            <PiClockCountdownBold /> 12:00:00
          </span>
          {!tracking ? (
            <NeuButton
              onClick={() => {
                console.log('clicked');
              }}
              variant="success"
              styled={{
                maxWidth: '100px',
                height: '100%',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0',
              }}>
              <p
                style={{
                  margin: '2px',
                }}>
                Tracking
              </p>
            </NeuButton>
          ) : (
            <span>For 20 Min</span>
          )}
        </div>
      </div>
    </ShadCard>
  );
};

export default MissionMemberCard;
