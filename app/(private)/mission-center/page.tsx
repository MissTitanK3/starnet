import MissionFilters from '@/components/ux/composite/missionCenter/MissionFilters';
import MissionList from '@/components/ux/composite/missionCenter/MissionList';
import SearchAndAdd from '@/components/ux/composite/missionCenter/SearchAndAdd';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '98dvw',
        margin: '50px auto',
        overflowX: 'hidden',
      }}>
      <SearchAndAdd />
      <MissionList />
    </main>
  );
};

export default Page;
