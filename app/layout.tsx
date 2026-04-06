import type { Metadata } from 'next';
import './globals.css';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'KH Yeh — Frontend Engineer',
  description: 'Portfolio of Kuan Hsien (KH) Yeh — Frontend Engineer specialising in React, Vue, TypeScript, and Node.js.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased')}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
