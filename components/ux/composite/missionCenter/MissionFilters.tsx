import React from 'react';

type Props = {};

const MissionFilters = (props: Props) => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '70%',
        height: '3rem',
      }}>
      <span>All</span>
      <span>Past</span>
      <span>Todays</span>
      <span>New</span>
    </section>
  );
};

export default MissionFilters;
