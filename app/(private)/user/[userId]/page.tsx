import React from 'react';

type UserProps = {
  params: {
    userId: string;
  };
};

function Page({ params: { userId } }: UserProps) {
  return <div>User Profile: {userId}</div>;
}

export default Page;
