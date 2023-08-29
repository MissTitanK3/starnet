import MissionFilters from '@/app-ui/composite/missionCenter/MissionFilters';
import MissionList from '@/app-ui/composite/missionCenter/MissionList';
import SearchAndAdd from '@/app-ui/composite/missionCenter/SearchAndAdd';
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
        maxWidth: '100dvw',
        margin: '50px auto',
      }}>
      <SearchAndAdd />
      <MissionFilters />
      <MissionList />
    </main>
  );
};

export default Page;
