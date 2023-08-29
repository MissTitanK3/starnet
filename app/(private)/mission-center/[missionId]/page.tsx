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
      <div style={{ height: '84dvh', width: '68dvw', marginRight: '25dvw' }} className="contentBody">
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
      <div style={{ height: '84dvh', width: '29dvw', position: 'fixed', top: 80, right: 0 }} className="chat">
        <div
          style={{
            height: '75dvh',
            width: '2px',
            borderRight: '1px solid #575757',
            margin: '50px 0',
          }}
        />
        {/* Chat */}
      </div>
    </div>
  );
};

export default Page;
