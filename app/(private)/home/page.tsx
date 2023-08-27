import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import WelcomeHeader from '@/app-ui/composite/home/WelcomeHeader';
import NeuCard from '@/app-ui/element/cards/NeuCard';

// export const dynamicParams = true;
export const dynamic = 'force-dynamic';

type Props = {
  profile: any;
};

async function Page({}: Props) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    return redirect('/');
  }
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '70dvw',
        margin: '50px auto',
      }}>
      <NeuCard route="/org-center">
        <h2>Organization Center</h2>
        <p>Manage your organizations and their members.</p>
      </NeuCard>
      <NeuCard route="/event-center">
        <h2>Event Center</h2>
        <p>Plan events and invite your friends.</p>
      </NeuCard>
      <NeuCard route="/mission-center">
        <h2>Mission Center</h2>
        <p>Plan missions and invite your friends.</p>
      </NeuCard>
      <NeuCard route="/social-center">
        <h2>Social Center</h2>
        <p>Socialize with new friends and groups.</p>
      </NeuCard>
      <NeuCard route="/community-center">
        <h2>Community Center</h2>
        <p>Join new groups.</p>
      </NeuCard>
      <hr
        style={{
          width: '100%',
          height: '1px',
          border: 'none',
          backgroundColor: 'black',
          margin: '1rem 0',
        }}
      />
      <NeuCard route="/">
        <h2>StarNet Settlements</h2>
        <p>Find friendly areas to get some R&R</p>
      </NeuCard>
      <NeuCard route="/net-library">
        <h2>StarNet Library</h2>
        <p>Learn about the network.</p>
      </NeuCard>
      <NeuCard route="/">
        <h2>StarNet Academy</h2>
        <p>A place for instruction. Past, Present & Future.</p>
      </NeuCard>
      <NeuCard route="/">
        <h2>StarNet Casino</h2>
        <p>Are you feeling lucky..</p>
      </NeuCard>
      <NeuCard route="/">
        <h2>StarNet Credit Union</h2>
        <p>If you need some financial assistance, then lets see how the network can help.</p>
      </NeuCard>
    </main>
  );
}

export default Page;
