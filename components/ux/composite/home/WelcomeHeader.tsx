'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import React from 'react';

type Props = {};

const WelcomeHeader = (props: Props) => {
  const { profile, setProfile, logout } = useAuthStore();
  return <div>Welcome to the Network, {profile.in_game_name}!</div>;
};

export default WelcomeHeader;
