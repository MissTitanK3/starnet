import MissionChat from '@/app-ui/composite/missionCenter/MissionChat';
import MissionFinances from '@/app-ui/composite/missionCenter/MissionFinances';
import MissionInfo from '@/app-ui/composite/missionCenter/MissionInfo';
import MissionNavActions from '@/app-ui/composite/missionCenter/MissionNavActions';
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
        maxWidth: '100dvw',
        margin: '0 auto',
      }}>
      <div style={{ height: '84dvh', width: '58dvw', marginRight: '25dvw' }} className="contentBody">
        <div className="header">
          <MissionNavActions id={missionId} />
        </div>
        <div className="missionInfo">
          <MissionInfo />
        </div>
        <div className="finances">
          <MissionFinances />
        </div>
        <div className="groups">{/* Groups */}</div>
      </div>
      <div
        style={{
          height: '84dvh',
          width: '30dvw',
          position: 'fixed',
          top: 80,
          right: 0,
          backgroundColor: 'transparent',
          overflowY: 'scroll',
          display: 'flex',
        }}
        className="chat">
        <MissionChat />
      </div>
    </div>
  );
};

export default Page;
