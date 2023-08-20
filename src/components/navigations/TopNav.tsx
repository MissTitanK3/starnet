'use client';
import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import styles from './NavStyle.module.scss';
import NeumorphicButton from '../buttons/NeumorphicButton';

export default function TopNav() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (email: string, password: string) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth-api/callback`,
      },
    });
    router.refresh();
  };
  const handleSignIn = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/authenticate');
  };

  return (
    <div className={styles.topNav}>
      <div
        style={{
          width: '90%',
        }}>
        <span>StarNet</span>
      </div>
      <div
        style={{
          width: '10%',
        }}>
        <NeumorphicButton
          styled={{
            textAlign: 'center',
            maxWidth: '90px',
          }}
          onClick={() => handleSignOut()}>
          Sign out
        </NeumorphicButton>
      </div>
    </div>
  );
}
