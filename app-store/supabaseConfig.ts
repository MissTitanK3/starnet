import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase URL or Anon Key');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    // persistSession: true,
    // storage: {
    //   async getItem(key: string): Promise<string | null> {
    //     // @ts-ignore
    //     // const storage = await chrome?.storage?.local?.get(key);
    //     // return storage?.[key];
    //     return null;
    //   },
    //   async setItem(key: string, value: string): Promise<void> {
    //     // @ts-ignore
    //     // await chrome?.storage?.local?.set({
    //     //   [key]: JSON.parse(value),
    //     // });
    //   },
    //   async removeItem(key: string): Promise<void> {
    //     // @ts-ignore
    //     // await chrome?.storage?.local?.remove(key);
    //   },
    // },
  },
});

export const getURL = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
    return process.env.NEXT_PUBLIC_LOCAL_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
};
