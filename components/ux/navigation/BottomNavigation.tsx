'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import Link from 'next/link';
import React from 'react';
import { FaBug, FaPatreon } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import styles from './Nav.module.scss';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

type Props = {};

const BottomNavigation = (props: Props) => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthStore();
  const supabase = createClientComponentClient();
  const handleSignOut = async () => {
    try {
      await logout();
      await supabase.auth.signOut();
    } catch (error) {
      console.log(error);
    } finally {
      router.push('/');
    }
  };
  return (
    <main className={styles.mainWrapper}>
      <div>
        {isAuthenticated && (
          <div className={styles.counter}>
            <span style={{ fontSize: '12px' }}>Active Orgs: 9</span>
            <hr />
            <span style={{ fontSize: '12px' }}>Active Members: 90</span>
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
        }}>
        <div className={styles.linkWrapper}>
          <FaPatreon size={10} />
          <Link
            style={{
              fontSize: '12px',
            }}
            className={styles.hoverOnly}
            href="https://www.patreon.com/FirstClassFederation">
            Support Us
          </Link>
        </div>
        <div className={styles.linkWrapper}>
          <FaBug size={10} />
          <Link
            style={{
              fontSize: '12px',
            }}
            className={styles.hoverOnly}
            href="https://discord.gg/PV3yeCXwMb">
            Report an Issue
          </Link>
        </div>
        {isAuthenticated && (
          <div onClick={() => handleSignOut()} className={styles.linkWrapper}>
            <LuLogOut size={10} />
            <Link
              style={{
                fontSize: '12px',
              }}
              className={styles.hoverOnly}
              href="/">
              Logout
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default BottomNavigation;
