'use client';

import HeroHighlightPage from '@/components/HeroHighlightWrap';
import { getProfile } from '@/gateways/auth';
import { getTokenFromLocalStorage } from '@/utils/localStorage';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getProfile();
        if (!data && !isInitialRender) {
          toast.error('You must log in to access this page.');
          redirect('/signin');
        } else {
          setUserData(data);
        }
      } catch (error) {
        if (!isInitialRender) {
          console.log('Failed to fetch user data.', error);
        }
      } finally {
        setIsInitialRender(false);
      }
    };

    checkAuth();
  }, [isInitialRender]);

  console.log(
    'If you refreshing this page, you perform check Auth from server.',
    userData,
  );

  return (
    <div className="relative h-screen w-full">
      <HeroHighlightPage />
    </div>
  );
};

export default UserProfile;
