'use client';

import { redirect } from 'next/navigation';
import { getTokenFromLocalStorage } from '@/utils/localStorage';
import { toast } from 'react-toastify';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getTokenFromLocalStorage();

  if (!token) {
    toast.error('You need to be logged in to access this page.');
    redirect('/signin?error=You must log in to access this page.');
  }

  return <>{children}</>;
}
