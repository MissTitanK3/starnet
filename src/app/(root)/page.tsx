import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import TopNav from '@/components/navigations/TopNav';

import styles from './page.module.scss';
import NeumorphicCard from '@/components/cards/NeumorphicCard';

export default async function Home() {
  const cookiesStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookiesStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session);

  if (!session?.user) {
    console.log('No Session Found');
  }

  return (
    <main className={styles.main}>
      <TopNav />
      <h1 className={styles.title}>Welcome to StarNet, {session?.user?.email}!</h1>
      <div
        style={{
          maxWidth: '90%',
        }}
        className={styles.navCards}>
        <NeumorphicCard route="/org-center">
          <h2>Organization Center</h2>
          <p>Manage your organizations and their members.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/event-center">
          <h2>Event Center</h2>
          <p>Plan events and invite your friends.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/mission-center">
          <h2>Mission Center</h2>
          <p>Plan missions and invite your friends.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/social-center">
          <h2>Social Center</h2>
          <p>Socialize with new friends and groups.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/community-center">
          <h2>Community Center</h2>
          <p>Join new groups.</p>
        </NeumorphicCard>
        <hr
          style={{
            width: '100%',
            height: '1px',
            border: 'none',
            backgroundColor: 'black',
            margin: '1rem 0',
          }}
        />
        <NeumorphicCard route="/">
          <h2>Starnet Commonwealths</h2>
          <p>Join new groups.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/net-library">
          <h2>Starnet Library</h2>
          <p>Learn about the network.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/">
          <h2>Starnet Academy</h2>
          <p>Join new groups.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/">
          <h2>Starnet Casino</h2>
          <p>Join new groups.</p>
        </NeumorphicCard>
        <NeumorphicCard route="/">
          <h2>Starnet Credit Union</h2>
          <p>Join new groups.</p>
        </NeumorphicCard>
      </div>
    </main>
  );
}
