'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUp() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [toggle, setToggle] = useState(false);

  const handleSignUp = async (email: string, password: string) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth-api/callback`,
      },
    });
    router.push('/');
  };
  const handleSignIn = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push('/');
  };

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1>Authenticate</h1>
        <button onClick={() => setToggle(!toggle)}>Sign {toggle ? 'In' : 'Up'}</button>
      </div>
      {toggle ? (
        <>
          <h3>Sign Up</h3>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const email = event.currentTarget.email.value;
              const password = event.currentTarget.password.value;
              handleSignUp(email, password);
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
              <button type="submit">Authenticate</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h3>Sign In</h3>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const email = event.currentTarget.email.value;
              const password = event.currentTarget.password.value;
              handleSignIn(email, password);
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
              <button type="submit">Authenticate</button>
            </div>
          </form>
        </>
      )}
    </main>
  );
}
