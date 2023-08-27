'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getURL } from '@/app-store/supabaseConfig';
import { useAuthStore } from '@/app-store/auth/authStore';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        height: '85dvh',
        width: '100vw',
        overflowY: 'scroll',
      }}>
      {children}
    </main>
  );
}
