export const log = (config: any) => (set: any, get: any, api: any) =>
  config(
    (...args: any) => {
      if (process.env.NODE_ENV === 'production') return set(...args);
      console.table('  applying', args);
      set(...args);
      console.table('  new state', get());
    },
    get,
    api,
  );
