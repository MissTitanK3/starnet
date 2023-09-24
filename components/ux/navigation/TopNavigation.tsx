'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import Link from 'next/link';
import React from 'react';
import NeuButton from '../element/buttons/NeuButton';
import { getURL } from '@/app-store/supabaseConfig';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@/public/starnet_logo.png';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';
import { AiFillHome } from 'react-icons/ai';
import { MdGroup, MdGroups2 } from 'react-icons/md';
import { GiOrganigram } from 'react-icons/gi';
import { IoLibrarySharp } from 'react-icons/io5';
import { GiMeshNetwork } from 'react-icons/gi';
import ShadButton from '../element/buttons/ShadButton';

type Props = {};

const TopNavigation = ({}: Props) => {
  const router = useRouter();
  const { profile, isAuthenticated } = useAuthStore();
  const supabase = createClientComponentClient();
  const handleSignIn = async () => {
    const url = getURL();
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: url + 'auth/callback/',
      },
    });
  };

  const rankImageDetails = getVariableRankImageDetails(profile?.network_rank?.grade);

  const Routes = [
    {
      name: 'Home',
      icon: <AiFillHome />,
      href: '/home',
    },
    {
      name: 'Mission Center',
      icon: <MdGroup />,
      href: '/mission-center',
    },
    {
      name: 'Event Center',
      icon: <MdGroups2 />,
      href: '/event-center',
    },
    {
      name: 'Org Center',
      icon: <GiOrganigram />,
      href: '/org-center',
    },
    {
      name: 'Academy',
      icon: <IoLibrarySharp />,
      href: '/academy',
    },
    {
      name: 'Community Center',
      icon: <GiMeshNetwork />,
      href: '/community-center',
    },
  ];

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        padding: '0.5rem',
        boxSizing: 'border-box',
        backgroundColor: '#242424',
        marginBottom: '0.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}>
      {isAuthenticated ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <div
            style={{
              width: '35vw',
            }}>
            <Link href="/home">
              <Image height={50} width={50} src={logo} alt="starnet logo" />
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginRight: '1.5rem',
            }}>
            {Routes.map((route) => {
              return (
                <Link key={`${route}-nav-item`} href={route.href}>
                  <ShadButton>{route.icon}</ShadButton>
                </Link>
              );
            })}
            <Link href={`/user/${profile?.id}`}>
              <div
                style={{
                  width: '200px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <div>
                  <Image
                    height={50}
                    width={50}
                    style={{
                      borderRadius: '50%',
                      boxShadow: `0 0 4px 2px ${profile?.network_ambassador?.uniform_color}`,
                      marginRight: '0.5rem',
                    }}
                    src={profile?.profile_avatar}
                    alt={`avatar of ${profile?.in_game_name}`}
                  />
                </div>
                {rankImageDetails && (
                  <Image
                    src={rankImageDetails?.xSmall?.src}
                    alt={`Image of ${profile?.network_rank?.abbreviation}`}
                    width={0}
                    height={0}
                    style={{
                      width: rankImageDetails?.xSmall?.width,
                      height: rankImageDetails?.xSmall?.height,
                      marginRight: '0.5rem',
                    }}
                  />
                )}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '0.55rem',
                  }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                    }}>
                    {profile?.in_game_name?.toUpperCase() || 'name'}
                  </span>
                  <span>Network {profile?.network_rank?.label || 'name'}</span>
                  <span
                    style={{
                      color: profile?.network_ambassador?.uniform_color,
                    }}>
                    {profile?.network_ambassador?.grade || 'ambas'}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Link href="/">
            <ShadButton
              styled={{
                maxWidth: '10rem',
              }}>
              Home
            </ShadButton>
          </Link>
          <Link href="/about">
            <ShadButton
              styled={{
                maxWidth: '10rem',
              }}>
              About
            </ShadButton>
          </Link>
          <ShadButton
            onClick={() => handleSignIn()}
            styled={{
              maxWidth: '10rem',
            }}>
            Enter Network
          </ShadButton>
        </>
      )}
    </nav>
  );
};

export default TopNavigation;
