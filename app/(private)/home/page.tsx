import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// export const dynamicParams = true;
export const dynamic = 'force-dynamic';

type Props = {};

async function Page({}: Props) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    return redirect('/');
  }
  return <div>Authenticated</div>;
}

export default Page;
