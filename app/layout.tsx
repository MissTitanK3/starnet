'use client';

import TopNavigation from '@/app-ui/navigation/TopNavigation';
import './globals.css';
import { Inter } from 'next/font/google';
import BottomNavigation from '@/app-ui/navigation/BottomNavigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getURL } from '@/app-store/supabaseConfig';
import { useAuthStore } from '@/app-store/auth/authStore';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClientComponentClient();
  const { profile, setProfile, logout } = useAuthStore();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      const url = getURL();
      console.log(session);

      if (event !== 'SIGNED_OUT') {
        if (!session?.user) {
          await supabase.auth.getSession();
        } else {
          if (!profile.id) {
            setProfile(session.user.id);
          }
          console.log(profile);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          height: '95.5dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className={inter.className}>
        <TopNavigation />
        <div
          style={{
            height: '100dvh',
            overflowY: 'scroll',
          }}>
          {children}
        </div>
        <BottomNavigation />
      </body>
    </html>
  );
}
