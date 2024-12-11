'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTokenFromLocalStorage = (): string | null => {
      if (typeof window === 'undefined') {
        return null; // localStorage недоступний на сервері
      }
      return localStorage.getItem('token');
    };

    const token = getTokenFromLocalStorage();

    if (!token) {
      toast.error('You need to be logged in to access this page.');
      redirect('/signin?error=You must log in to access this page.');
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
