import React from 'react';

type Props = {
  params: {
    missionId: string;
  };
};

const Page = ({ params: { missionId } }: Props) => {
  return <div>Mission {missionId} Page</div>;
};

export default Page;
