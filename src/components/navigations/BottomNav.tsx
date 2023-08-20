'use client';
import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect, useRouter } from 'next/navigation';
import styles from './NavStyle.module.scss';
import { MAX_DEVICE, MIN_DEVICE } from '@/constants/constants';

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
    <div className={styles.bottomNav}>
      <div>
        <span>StarNet</span>
      </div>
      <div onClick={() => handleSignOut()}>
        <span>Sign out</span>
      </div>
    </div>
  );
}
