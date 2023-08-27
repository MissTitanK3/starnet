'use client';

import Link from 'next/link';
import React from 'react';
import styles from '../../page.module.css';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuthStore } from '@/app-store/auth/authStore';
type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
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

  // supabase.auth.onAuthStateChange(async (event, session) => {
  //   const url = getURL();
  //   if (event !== 'SIGNED_OUT') {
  //     console.log('++++++++++++++++++++ SIGNED IN ++++++++++++++++++++');
  //     console.log(url + 'auth/callback');
  //     if (!session?.user) {
  //       await supabase.auth.signInWithOAuth({
  //         provider: 'discord',
  //         options: {
  //           skipBrowserRedirect: true,
  //           redirectTo: (url as string) + 'auth/callback/',
  //         },
  //       });
  //     } else {
  //       await supabase.auth.getSession();
  //     }
  //   }
  // });
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
        }}>
        {/* <Auth
          dark
          onlyThirdPartyProviders
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
          theme="dark"
          providers={['discord']}
        /> */}
      </div>
    </main>
  );
};

export default Page;
