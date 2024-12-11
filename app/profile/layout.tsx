'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Вказує, що ми на клієнті
  }, []);

  useEffect(() => {
    if (isClient) {
      const getTokenFromLocalStorage = (): string | null => {
        return localStorage.getItem('token');
      };

      const token = getTokenFromLocalStorage();

      if (!token) {
        toast.error('You need to be logged in to access this page.');
        redirect('/signin?error=You must log in to access this page.');
      }
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
