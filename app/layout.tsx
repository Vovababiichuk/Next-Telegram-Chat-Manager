import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from './provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { StoreProvider } from '@/redux/store/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Telegram Chat Manager',
  description: 'Manage your Telegram chats and messages in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-chat.svg" sizes="any" />
      </head>
      <StoreProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              theme="dark"
            />
          </ThemeProvider>
        </body>
      </StoreProvider>
    </html>
    // </StoreProvider>
  );
}
