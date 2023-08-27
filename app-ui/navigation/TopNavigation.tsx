'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import Link from 'next/link';
import React, { useEffect } from 'react';
import NeuButton from '../element/buttons/NeuButton';
import { getURL } from '@/app-store/supabaseConfig';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '@/public/starnet_logo.png';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';

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
              marginRight: '1.5rem',
            }}>
            <NeuButton
              styled={{
                width: '75px',
              }}>
              <Link href="/home">Home</Link>
            </NeuButton>
            <NeuButton
              styled={{
                width: '150px',
              }}>
              <Link href="/mission-center">Mission Center</Link>
            </NeuButton>
            <NeuButton
              styled={{
                width: '150px',
              }}>
              <Link href="/event-center">Event Center</Link>
            </NeuButton>
            <NeuButton
              styled={{
                width: '150px',
              }}>
              <Link href="/org-center">Org Center</Link>
            </NeuButton>
            <NeuButton
              styled={{
                width: '100px',
              }}>
              <Link href="/library">Library</Link>
            </NeuButton>
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
          <NeuButton
            styled={{
              maxWidth: '10rem',
            }}>
            <Link href="/">Home</Link>
          </NeuButton>
          <NeuButton
            styled={{
              maxWidth: '10rem',
            }}>
            <Link href="/about">About</Link>
          </NeuButton>
          <NeuButton
            onClick={() => handleSignIn()}
            styled={{
              maxWidth: '10rem',
            }}>
            Enter Network
          </NeuButton>
        </>
      )}
    </nav>
  );
};

export default TopNavigation;
