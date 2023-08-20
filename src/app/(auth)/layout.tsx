import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.scss';

export const metadata: Metadata = {
  title: 'StarNet',
  description:
    'StarNetwork enhances your experience by offering a seamless way to plan missions, organize events, and manage player groups and organizations.',
};

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
