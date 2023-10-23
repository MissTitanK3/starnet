'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuthStore } from '@/app-store/auth/authStore';
import { useEffect } from 'react';
import TopNavigation from '@/components/ux/navigation/TopNavigation';
import BottomNavigation from '@/components/ux/navigation/BottomNavigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClientComponentClient();
  const { profile, setProfile } = useAuthStore();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event: any, session: any) => {
      if (event !== 'SIGNED_OUT') {
        if (!session?.user) {
          await supabase.auth.getSession();
        } else {
          if (!profile.id) {
            setProfile(session.user.id);
          }
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          height: '99.9dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}
        className={inter.className}>
        <TopNavigation />
        <div
          style={{
            height: '100dvh',
            overflowY: 'hidden',
            overflowX: 'hidden',
          }}>
          {children}
        </div>
        <BottomNavigation />
      </body>
    </html>
  );
}
