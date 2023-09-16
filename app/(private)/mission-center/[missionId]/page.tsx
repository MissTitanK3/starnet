import MissionChat from '@/components/ux/composite/missionCenter/MissionChat';
import MissionFinances from '@/components/ux/composite/missionCenter/MissionFinances';
import MissionGroups from '@/components/ux/composite/missionCenter/MissionGroups';
import MissionInfo from '@/components/ux/composite/missionCenter/MissionInfo';
import MissionNavActions from '@/components/ux/composite/missionCenter/MissionNavActions';
import React from 'react';

type Props = {
  params: {
    missionId: string;
  };
};

const Page = ({ params: { missionId } }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '99dvw',
        margin: '0 auto',
      }}>
      <div
        style={{ height: '93dvh', width: '65%', margin: '0 25dvw 0 15px', overflowX: 'hidden', padding: '0 20px' }}
        className="contentBody">
        <div className="header">
          <MissionNavActions id={missionId} />
        </div>
        <div className="missionInfo">
          <MissionInfo />
        </div>
        <div className="finances">
          <MissionFinances />
        </div>
        <div className="groups">
          <MissionGroups />
        </div>
      </div>
      <div
        style={{
          height: '90dvh',
          width: '30%',
          position: 'fixed',
          top: 80,
          right: -5,
          backgroundColor: 'transparent',
          overflowY: 'scroll',
          overflowX: 'hidden',
          display: 'flex',
        }}
        className="chat">
        <MissionChat />
      </div>
    </div>
  );
};

export default Page;
