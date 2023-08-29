'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
type Props = {};

const Page = (props: Props) => {
  const supabase = createClientComponentClient();
  const getURL = () => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
      return process.env.NEXT_PUBLIC_LOCAL_URL;
    } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      return process.env.NEXT_PUBLIC_VERCEL_URL;
    } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
      return process.env.NEXT_PUBLIC_SITE_URL;
    }
  };
  const handleSignIn = async () => {
    const url = getURL();
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${url}auth/callback/`,
      },
    });
  };

  return (
    <main>
      <h1>Authenticate</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '50%',
          marginTop: '120px',
        }}></div>
    </main>
  );
};

export default Page;
