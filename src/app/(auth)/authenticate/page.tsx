'use client';
import { useRouter } from 'next/navigation';

import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';

export default function SignUp() {
  const supabase = createClientComponentClient();

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event !== 'SIGNED_OUT') {
      try {
        if (window.localStorage.getItem('sb:token') === undefined) {
          await supabase.auth.signInWithOAuth({
            provider: 'discord',
          });
        } else {
          const data = await supabase.auth.getSession();
          await supabase
            .from('profile_data')
            .update({
              profile_avatar: data?.data?.session?.user?.user_metadata?.avatar_url,
            })
            .eq('id', data?.data?.session?.user?.id);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1>Authenticate</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '50%',
          marginTop: '120px',
        }}>
        <Auth
          dark
          onlyThirdPartyProviders
          supabaseClient={supabase}
          redirectTo="/" // Redirect to the home page after the user is logged in
          appearance={{
            theme: ThemeSupa,
          }}
          theme="dark"
          providers={['discord']}
        />
      </div>
    </main>
  );
}
