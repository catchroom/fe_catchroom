import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from '@/components/common/provider/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'catchroom',
  description: 'Catchroom is a platform for finding re-sell rooms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
