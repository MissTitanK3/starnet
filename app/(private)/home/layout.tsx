export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        height: '85dvh',
        width: '100vw',
        overflowY: 'scroll',
      }}>
      {children}
    </main>
  );
}
