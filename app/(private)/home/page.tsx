import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ShadCard from '@/components/ux/element/cards/ShadCard';

// export const dynamicParams = true;
export const dynamic = 'force-dynamic';

async function Page() {
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
      <ShadCard
        cardTitle="Event Center"
        cardDescription="Plan public events and invite your friends."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/event-center">
        <br />
        <hr />
        <p
          style={{
            fontSize: '0.6rem',
          }}>
          *Some missions still may require a secruity code to participate.
        </p>
      </ShadCard>
      <ShadCard
        cardTitle="Mission Center"
        cardDescription="Plan public missions and invite your friends."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/mission-center">
        <br />
        <hr />
        <p
          style={{
            fontSize: '0.6rem',
          }}>
          *Some missions still may require a secruity code to participate.
        </p>
      </ShadCard>
      <ShadCard
        cardTitle="Organization Center"
        cardDescription="Manage your organizations and its members."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/org-center"
      />
      <ShadCard
        cardTitle="Community Center"
        cardDescription="Organize with Organizations."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/commmunity-center"
      />
      <ShadCard
        cardTitle="Social Center"
        cardDescription="Socialize with new friends."
        styleOverride={{
          width: '300px',
        }}
        variant="withPointer"
        OnRoute="/social-center"
      />
      <hr
        style={{
          width: '100%',
          height: '1px',
          border: 'none',
          backgroundColor: 'black',
          margin: '1rem 0',
        }}
      />
      <ShadCard
        cardTitle="StarNet Settlements"
        cardDescription="Find friendly areas to get some R&R"
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/settlements"
      />
      <ShadCard
        cardTitle="StarNet Academy"
        cardDescription="A place for instruction. Past, Present & Future."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/academy"
      />
      <ShadCard
        cardTitle="StarNet Casino"
        cardDescription="Are you feeling lucky.."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/casino"
      />
      <ShadCard
        cardTitle="StarNet Credit Union"
        cardDescription="If you need some financial assistance, then lets see how the network can help."
        styleOverride={{
          width: '300px',
          minHeight: '110px',
        }}
        variant="withPointer"
        OnRoute="/credit-union"
      />
    </main>
  );
}

export default Page;
